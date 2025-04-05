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
    "29oSnX9ZYanN45Mgurkue1VxrgYBi4xGGVDB7u9Q82CHU2oyHbgiA9aKyKPdPZT4heBkn7gW7x5WHsSM5b2V4r6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU9Vh3LAeQfmp9D226jK6auFoT2UGHFyRxDEt2rYTGFYuay7QzEZtmYj2YZp2pYhu7S94qxrJENqLJiMNkqY39K",
  "key1": "5GGmBjzQ2AzBtAypPVvSM2PnD7H3Hyxp4E9ReFr1ziaXKFdtJtuNdamD6DTXdwuPmgNybDu8vx99r9nK3QB7q2uZ",
  "key2": "YJWbQrEBF1CYDFDsKZZCqCcTLqL7PjAnMqz7BWWu5PVqJMWGH6F3orzaHJcfhbYLeLLVBNJzD9HPwLWBwvkTYNx",
  "key3": "3iUt6GqSsxFfdvvXdhTFscKHj8f6WMGQZrXYfkyhgQVQgoHniQhLfAH62T97gvP3TbG5FEodJWTc2SSMHEkeAGh5",
  "key4": "2BgnnGxfBVV9mxeem1s5TKfdxv3Cypn739TV55d43sNyHE4vxb25xBT2U6xMhp7SrdRJfUuX8uCxdWC9UHmQAvq8",
  "key5": "3MEXLEueLhnc8rK3BnBuvBUqw4VqmSt6CTcNpEaPkVPsF9kMZZXTuAMVQe5YbpZnbZT2u5TizK3s8p6UFAZEYJ1K",
  "key6": "2QKt5t3JNpYDLndo1k11kfeBJZq21F12yL3EUxajwLaQ1pxNcHGabPDwG9sKGcQa7kfJ7LNZ8pJMkxhw6gBF8YwS",
  "key7": "3LvJ1TJv1eV2z5JwL1QL241KGYq14XAtny2mRufSb9U6jcKQDhMTZDFeB8XGC9z1YmJ3JdMMKmUFvvMaAQntpYwb",
  "key8": "2UidDxxrts8Pvm5FmQyA1LNjgxpowDrktsJsDzoDXoiCyCGHjgfNfmc3E5L64HBXfyshPEyvY1urCcd9qDGWcCLU",
  "key9": "4ZjAXEQxy2aa3arbxhN6Npd5M25FRoqwv1JcHwBgUZVAZFCwKGF25og9GkkXHqHvzhGyY8sXUjKHKeFxjDSCMKrV",
  "key10": "5pMmNbkm4od21uu3uGK4hqELYGmA7EFH5ZTrcXGZs8LxLhBJdvtXhsankQH5h4eUTJZ8aMsFpytMFEftoBmUigSF",
  "key11": "3qhU3gWvBFaa1Pj2irUCp67H2eqLSLLW12dZkw6k5bzqEVuBBSNqse8h2HKLsbTsGrzF15PdrQ6C384euMG6y99F",
  "key12": "66S85uXdiqJ6TxAqWV4tWweRdxvjr4QDLjoehq2Ev1CYH5kFhAGhgto8k8WvQKumpyeaGHMSxPMXSKSU75W4weAZ",
  "key13": "s9QDx1EwgBbxLEH6YnE2u6GVKsGpULdUMj7hd3n2PqqcUNcH5ZMDj37g4i6yxkKQtd3DjVK1zQz4Dc6cTPBvPEJ",
  "key14": "3PKuHrLDwijEw5BZQSY5Ym1FP32uXG6ppdKHJzx64QMsKWECfvgPSfpBUziHU6cnuttirfgTES12D7zng94Yewva",
  "key15": "2UsCHjZQjyg7Fu523nq6b3Ajgs8dKGrTTrmzCFYCHD7Ggm8w49YyjZLFwh63hcAnKRNbPf3ePHbkkJvRGX4onsK4",
  "key16": "unyQZtjQ7gnaMEMrq7YkbkyqoVifgwy2y3zn5e7SVoPfY74k75ubnTMBCDMoqyRVZnFt7qdNwwSpjCXYdUrcpC2",
  "key17": "52oa1BfewWMQVuWBK13vkvpXJtmEU1SS6kJyoySrsV18fXde2uS6uD3AyB9dEDXvvJkSv3AaGQERuxj8NuqzGCxg",
  "key18": "2YZd6jbqXAZY6sJxLvqKSKf8GxscoaoyZJgbTAgudAM254orYJYSXHm3EcULaa8hu3tHnM2QMSSnPpunjpN2Tw5a",
  "key19": "4QvK83PSViE5oeqAbY3q8GJ8RZyoVphNv9JjNL7gsqDuxaQURuBEcEa7C7HgsEPufFkssvcqmKzDeatBE5jPipAU",
  "key20": "5DdM98yYCfn2tYCAsFnxRQP6ssEUT8pDgaDEpeobHBbJb12HxCHzvPRUziqQDBeLpSFSEutVmDL5y9NUKuBh7x4W",
  "key21": "4j3s1xHK9HYGZBJMwjSZ162U2xQx9vsBJhtWySKSVmhQKQycqQFSfGAjLLkadAaX9cuhNc9DqbufxPNMUP81yZHH",
  "key22": "2A2Pdo9nbfaMe665rjqdPQFYaBazZtM8W9Te7cchgdtKYuJPAxWmRStnMVWeCQTAN2d2Vhf5mKox55S8fYECxxgx",
  "key23": "2wLzPqvgVXHKjZJ9qg5u7DV8XxcKkp7hkfniqxkmTSWXf9Dm1n4a7dfXh5sLqDFtvU8RjQwnigLwtzqEqKVgVVaK",
  "key24": "reyVLsw2fEsiezoigkXfiYH2x38o5oYXFjAw2hEheemXurpjf7uBg23TqSUUT8b8ZirchJemFzr5usP675Bx5xA",
  "key25": "4DgDG3qNKxGCtUvwUmhsw5uzXJYL5yF1BAia4MQcpcWeV7NM4NiXYSYZnLn35nF1cWdLor7gqwKuLXEU14oYLFUv",
  "key26": "4ZLMqqsCxqNMXFFQBCn3KDZ1QrzGCZJFQi1nv3HUdj2ZRvMJ4HyPjWu8yG8vrWT52EctiiU8AjNNwYhVHUXyiwXJ",
  "key27": "Es9oTUzzCAHFjswvpEojhEb4d29SsKzUV2KP2nse44h27SmtBD2xE7wPLSWFZM743BxUABzTriMbmTvKbPrYmUD",
  "key28": "3AomSAoJHNoc7wgr53UngMm17ZUSGSokPibnEPQ4KXH1wSEfJs329E2qqVtA16TcsWeiHH1racK3cwYLBp1QEVva",
  "key29": "4KZ4UJ1AfMuXnUNR6vkrn1DfifDvNGQMwcLVhw4dQsHzhdqMZSNsgqS836wK66z9WeFfJ6tHg7mx6xBcLkaADKg1",
  "key30": "52sXY5PsxsUjJddfTT7pZa17E4Cm1NPgrKr3EARN3mH3CQmKtsugj6Z6hDnXhJPEULVmvg62ZsuNn2MfDUPKxgLK",
  "key31": "4TkSm1U95DRNUu1abRVncMJgKbCDJNq3DGurn7i1LWtdcATjqZpTBjYhPX5kiyTjSoZj9eNFU78Pj9Ab6fARKWrK",
  "key32": "2d3NHRvM5MrnmoKq6G2iJ7Pjsid4LdH9SKwEba7MfpcJmnA4CbvviHiBMNKdiYsAwGTTvjxa7HTWBN17CGhWRqQr",
  "key33": "5bwAAzmFkyPVG7v5w7sFUPUsjYpxSti6MtkAg9Q7d8DNcZgWLVEqSBx9DN62KUHJbzw1PVrhc7WNidk5RP4UJLX7",
  "key34": "5KAiJMRzgCdcupeYyV39JzV8iyQZMAuGMDH9rxhdJfVbZ4VDLoc3z9eBScC3jzWBfeMEac6kXneYZijmzEh6gZRR",
  "key35": "3cjEzXGRp51zYoPpvGchQPxyDmn9EziXLScxnLjxfnNx6imotHSTx4z9eLy1wUMtsFJ3TnwtFH9RyGRdvvBKo71L",
  "key36": "4W4x6hWyj4BRkE5t8Hav3PgqTwXrPMB1cmUQd8KHk8eeAZiDbgU1XApWxn9UpdDuJmot2P6LUhYkgirZgHFXfaNi",
  "key37": "48LXdt814V7pWYadGQPQn6PLgaywCdr6aFEdyZG1ZzAyMcyVBA6xHrCSC6Rjvd18xW8JCE8A1phngGaDMTWiLP9S",
  "key38": "3unAHbtqNSPJDeWSzDcqhyJYitR1Nmw3GchseWEfJpSBo6sEzyQiwQtgWpQiYXVjgGRsf4kEKjahwtdPJHJ7HzUp"
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
