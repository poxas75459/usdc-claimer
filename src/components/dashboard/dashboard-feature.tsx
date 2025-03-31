/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2w9149gYzNcyNRvHZ8smbuXkd31ovMQfw4VWPTE81RadfmHUu3JDqzkG7UWzrwxWZwhRoLtYuhRao4c4UVVCzFmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3HgeGa1kML94MV3vWwnr4KFBZ3Zp9PwTGKzyRY1PpZN1Bd6RMM9EukG9XsRWhPoMyQ1wVPBxKg5TNgSYS7DRuV",
  "key1": "455iXDXj9iNDJ4CuNans4amK8zNNVx7AyiUuUESn7p4BpbQkgMt73c54e6f8rpLYzBmMHTXS6NgS4pig9LBKgc3V",
  "key2": "2j9qfG58Af7h8xJwHjtvi94Kmsi2HVj7kV48vV7NkVoeVY86MJEN2qCor4yH435Rakry3dSd5Kg3dXKWroSfPjnW",
  "key3": "WWHuxfKLLpkcnaWV9fAPPRFriHcsZjvEfjLNjv2SsxUYmV8325dSQLBgwTroXygcWjYtoqMpMjmwJnZLTvPTypp",
  "key4": "n39Gt8UNZwYEmChNd7W9jaMHZheQYhBCKhdwHaWJvVjHcD9WzU4gpkvkeuhuRojZcGRiZxFjy6mzwuUS7x2Fr5T",
  "key5": "2ZNWRNfnL2HwjSUvg595kWHpXLcuRCsfEgEC4dZuLScj4qaKziLBcCezNRnTzmgDpRMGfvAtPMSAkupRnzd1q5rE",
  "key6": "3WKm3T2wKYyNWUjbhmXqCU4LQgadSnGw73Bm5zRrF8YHFDSbtKXpQQbtJR5M72kALscw5jqzarqixy7V1CxTWWEL",
  "key7": "3q37hZmhjDzcQg6mGkh9PF2DqZcBDbjwJ8oEP1z3vdh3rFMEuXN8WA26PJXkabZ2BjzYJHmtMvhnvy47rrgL6thv",
  "key8": "qDA1rQXtQEr8ecAwLCPPVfCpfNvcJDSj8u2Qdv1zi1G2f7een31XYu3yUJkAphV79pJHeosjtJnb2DvEPdSxVRh",
  "key9": "Wnp2C3GBaSSrsg45CzbDJgtMz1Xs69xRSkbwgRW2sqWht8HVBUzxsgZb9zwkHRu4iy2iwcquKPekFPvfsA5WKgD",
  "key10": "hhkvLxgN8EVyYRhJncoafNKHQz5xzTA1WLnnrSMG6GpyeCR7aMA9jAGa9SRRDTMJUiT3BuduMZdCS1Tga1dvYnL",
  "key11": "5nqmYt1JPhtRnYpUhjLJbtHKJhDmVeMhCkjMHfsfE9bynVQRV47CJUoZRpoFKkiz54k92HWFahLc53hr6ygDRaYg",
  "key12": "54HxCfE5XBkBrwxDF1jhmqpfHSxDfXax12YG93QjG4mgtSCimh1QFmaQCzAW9GDnY8rCn7aBTUZjScmsLYx8RtRa",
  "key13": "DYHAiwtPrnkXir5Y1J1ccaePtVk6TVqPS3PoBAuHYBvd2Z82y8vduCxi7kEJevWyMHbykT3ybzd35udZ7Yw3aEs",
  "key14": "UWbkydM2VP1yCVCS8NnDzJZQMtw3QDERPxBK2zoyWbV8w9URfjtdPUMSdv6uenahDQZjS46PvhNZWtW44KGgxBJ",
  "key15": "3Qj3b1sBRHjos1bD4vfbEhWimm5wnGKEAyMtWAiL8DaCH2wUSpU4VgWMLSgYrEF7VqDbHj2MTmsG44a865SXbBKN",
  "key16": "55uZJLQQhWTeYB1YantxSEF8DavKKirLjFe7a3mWpzZAxeG1wxemMnrXpWnBzDHXxkVJJbV1NAbyffeK6d1tqdjf",
  "key17": "3jcJGwR3aYw8E9yhVPLrTAYpbQRPV3nfUrDwqZjNuv9kjjrrykTCpc4bMBMVQ5y23S3zoNRqfCY15jPNpTyygfgT",
  "key18": "4jBRh7gV6hMDnqFjdGzfmtmTioQKMiMdo3QwJiUu2SVfxpjYZkt6N5ZdZVndzvsRrngciTn2nRoyv3sp5W8m5eVC",
  "key19": "3bkYVPRgY81BKVPaVsWvRgc5QhFoWdmL7FyRZmMLkETymTwxypzdT5FhfcuZFfy26abqoFhZNV6h2HGLsFKRmfEt",
  "key20": "586Vh7RkAnZgiqyweQiP4QeHTWMVZZaoQtPgLzNu2kothjii8jEjQmYvu8EH4aJTdib84LNFFoAarhKqwdgMSKDi",
  "key21": "4C3rWx3ByGCwikeTaA6gneYHnxr5yeVT2M1ujpgwSkk4f593czzLDkf8uVdrAWhw9u15kTedXUVM67psvbkHrs1h",
  "key22": "4yZ73CJ69rtZunTiKQVWTQWYMoUZUgBcBNJMG63SsgS1Gcc27F8JeZaBdJmNNk44K6FZCQ2YbzQnb1gwp7wksmz1",
  "key23": "3fZiDTNUVL7Jde86L3CK3Jyj1L4Hp2Fpqwy7CnDiEP7QSPJWgJQDAMPpGU88W9z8VnRG6Kwf2TEopYgnMAY8bpgR",
  "key24": "5eMA3HutQokAhopx8yC7X9PyZ9xzADfRqNwmDy3ECedyydp9o8nqJLMy2YDFpT8A9w3Zkapr7XqfStRPfH7ov8se",
  "key25": "3Wq6zPzRQRFcxyPUyf3ueZJHAA9QQntwrkvpCoNmyBkMwsigHN5N7CraiskVgGgskwtn8TFHRKfZsGnGKVqz3nVB",
  "key26": "37auD13D1pGSLcmfu3HKo3r72QKfRgpPPBhPLuwSEbLXzvyei543fAcnChLRdXXccuo6tPxC3sH8uocTvrJfBXtW",
  "key27": "5uHz6Xp2M7sniNCg12xEqwLiyda7sATKdg4Eo6PqYAk9fSKtf2uKWiYWP8ka3PUvedBWfgrf7ksihEa9r7nznqzH",
  "key28": "59eXWVB2CAdnHAmmFJQEPo8p213UvqUKxPPzxentJdMXyZgQqurFMYW8BigbBxgi7SPwjo5mz3UoR65Rh6srXjUB",
  "key29": "5BiN8DnwK9PWubNahQuXUd9MGg6twqheLSWDz8VC7M7xhw8k3uFzmgNXkCMsnaYRgttkYAziSczRYXeoao5E8vx6",
  "key30": "4iyKAo3jyENPFoNzhe2gnJMpPgz84GfXKW9QxDP1RLijvcBbwUnH7AXYRxAbQLw792htqtLbTgXgKorp5YK23yWP",
  "key31": "58RtLLTc7nbbnrfwBXgZFB79m26ZKDUWFbvotaGdM2FhbXrLgdCHdCHYdx59d8oP4pUEgpejK2qx2rUiyMhRYA5p",
  "key32": "32BGVutdc1Ru4Cu4DVoPNcZPRK4LmyxGiF7xmEXR3g8YRHEwYJsRuLFQkFtsu3cBjmLcNAf6x1iyvAQjnEtvdSza",
  "key33": "2r2kBma9ocR1oPHqHo8aRewBHAgTLC4pZEaSzkJYWXZLJ9qLsnyErm8Qd1Zu1LEegQXdsTdAWYJwjaFtqeFo3GGP",
  "key34": "493ASZXcbY6gfoyCdiJhqDop2mHkJCmj8KW2RVqstEJ7EEG5AbX2rWB52379Azyh35GtTGxpdrY5uG1NibsHbxZY",
  "key35": "k3TBqWJ5VyiL82fuEUBiDwHcAkryraJVFFqzPu9BXa7itWJHvP6Vwr6ihbKnZ84ahDssu7ZC8BffFE6EEPWxbTX",
  "key36": "3Akw6M4TBEuQS95hdBepS1sNg6ZkvfekpbJjyYB2oz358cPJjSEVbyJ8XuY6VyUbm8uMeEbKX6xGe1Q6HMQYCqcq",
  "key37": "2Nh9hGspGWuqDZFEcKakoqfpymBapNoQanot9K2jCHPBot2RibqfFZH6NC69kwe5MT2bbzqr71WtsbkHG48h7wGN",
  "key38": "3kXZD9jdSkVurqGPAbUFi3eK55jD9qFRn2RV54W4HD12qKzkM3oqGA5o52mdcVnfGtQ46LTxr7m8ortW5PiHWhBA",
  "key39": "3uXwpZAY8GqZiUyFDvusPAUQAT341UM7XQ4TsiMk72krWdbUTrATmEVAeNybdkFGyzpEvSiuU5QWjAMtVTEdT2Vg",
  "key40": "4yjALSEbf4FiF54iH7WsG8eTZHuN8UXdcpx6fR3A1RWA2rw33tsDhbeFTqiPQ7vzDkmPu6vuL8LLdy99qZqMSYno",
  "key41": "3rczNEbNiWhZXrYSqiPUyRUEGqF1XyqDmxGAS6KXqRaNnpEjLjASWr3s4S5rUvSSNsN2PwcXGvoCEG2bhzmzKRDo",
  "key42": "4Nga52fZEtVh4MhsDhFqcQXqgP9vmSLrj44sW7nP8A5fmg3SpTzPwCgbH88DVXEjNBnV7rJR2we5b95NJATfSTjw",
  "key43": "rBPvaQUuTWUSLf7qzYb8KHWqPepzgJQ4BvcTnHQ6KfpAsaMWV9TXqrJe5zSB9e9iHERqzjWYFpwoQa2pVQFPPNq",
  "key44": "iU2mubeLzBMHGq4HoyQyp6oMYhE2Ri36V2vYzvXFw6pD7LT6w8Pv5ePBs5vSjDZWyGEWy97mSUMT32gUpfWMwjS",
  "key45": "NgMdXjQ1FnB96cM8jzB8vb9XEbcYGqyuHu7CsXUk5LVVFbfX6kK5tfPfKn6R7LTFkgAFMGXZoB8cc2xxaAStmq1",
  "key46": "C3ibEN2oRhLzGfXKant3ujdCgiRzLuS42bAyzZMkbrwPywnqwgFoqTTb2P7tSKyDkqd1fLXzyfVTb8KuYByXHSu",
  "key47": "2yYNwR4Zbgtomjc8VFfg8EJK8nuG628QLpEPmUkCegr64dBSxaycT5Q1YFcaR6SpELgPhK3VbXz8FuRsKRHp3Wej",
  "key48": "23xz3bXfaCihmyz2SYJQidAZ6gGdmckwiQFGrNdhEQgFCswaaZTTUZD5UG3AF3swwdyfe6DGUN9nmdJj9FpVgLCp"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
