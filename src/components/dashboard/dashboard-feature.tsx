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
    "4EFEXTNyzurVegEBNRCpGGk12GpiBGka5RP4AiyEd2nb6tpivxL4QahDw5uiFZ7dgj4aWWEzgQ4ub5EV9KAAKZfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvMg2jvMJPn3JKxbs7hkdHwpGDn8srCfYst6EXZmV9JVPpj1QkD6bdZewnDtSF5Mn55Vqm41xzYHgUotfjG1wPY",
  "key1": "2mb4A8tVYvn5xp7cmMZvci3AdN1bMTxamx9yLX26EXE6pbNUifAqNTSSxbiJwEnr3CfUXYLU3S2YRNEjTBQeMLY5",
  "key2": "4H9eyLsy2uBPAS6yH83mscifFdkAnJT1wmsW1JEwFDTeNRBUXiuXtTHwiGE5BekobEjeCcgkCfcZHQELwDNkFTbr",
  "key3": "3pTtPERqbukGaC2SLJRTGow2ZPA49vgw11QJWJkP6aK8MPNmC6JtQD67A86yAbWMEJayzdL6HQhfA257HbnvY9Ru",
  "key4": "52woBTz73UXJtrG4TdPpwXzAmDAeVZwcbd2b15ECsJ9ppQ2BFPwwL5g7dbeN9WAuburGqNRgj7RoZSLXcTfQJ1hy",
  "key5": "JjCqosJ6VB5SptmtPysEeX6yLhuQZXbqCLBfCoW2amwQ4aiDx8YsaFNb8VbGmGACzz3GvV89PQ3idFtibJ5Xiij",
  "key6": "2rLkKtx1U22EWAac3kkUpjsoYSRWyGFLGbVHJeYAU1u2bskgMcy899JDSpWqLphCSrkYXDx9rs4oAYHWs71VCmBx",
  "key7": "5ZyiDmsoYRhy4ei4CGCHQ1yU3623Q9s1Jv1ogH3ANKhyYfqUQuZD9wUGzJGHqzYtUXzQfysLrGHsqHE3zzYx7tEU",
  "key8": "34qKnncWoycbSkuXRbH7sL1eACCjhN1hByZXCFt9oFcLMs4RkSHrLpb9N4mttd7J8WpnEpMgje2eqnLnHojsro1v",
  "key9": "2ibu3DhC5w3JT9V4CsEkC1gqPPDiz65dWPZMappjPvCqTrCvXeKvvabjQB4oxiXHTWUyT2SSX4BxNaWhcXAssw36",
  "key10": "RLUYUFS7k9KSR91jv7PKEm5HbY2ccd9FcKUTYh1vJb5NigJgNfFd1XDT6VCAr9bTBFNMCVAWWXqRb5MGNBuuWxZ",
  "key11": "1SkkL4iFMJE8ntEPLYYk7qPPv3nR6BGuLV7harMBGniLioKocX8Au72j3VjFhnZXZeYniBtLM7J6PzX7njmwXfp",
  "key12": "4gBtBJNa3zE5uVnqEAba1Gc9bSBLy1JBgeano7NToDP7Uxf7gAdc69VXudSznqzDTxPtGL9VKwUkTpNEh1qhqEi8",
  "key13": "2Bj3MQFAs8VJRyvbdUUhNhuZtFoUZxQhGSQk5o3kc7PLcH6JFmyYMPVWSLu7vVsNRxQyNZZtZwXoCM3MEKdRnhD1",
  "key14": "4FtLUQAxuhoXFYavEKVh8jv8fe88uGjcqfuZFB2J5mk71FkU9tnXes5AH1ZJwZDuZh9XXKFTHT8S9p4zBML4btz1",
  "key15": "4dVYuoCBwSskFcPDZ3zM6enxzFhTJ1o3iPbqQKHuUMDE2kJwdqprdMVTJA8JsREkCEesBHJwtVNtW8wWjDj47cVB",
  "key16": "6uA8i29Fzfeg84wZKH2FyocDSYmGnw1m3CRW8STPvSbBaLx8CSgJ6y4UwtiPzKbzXkyjAaNHbNpvowuV4YWo7r2",
  "key17": "21eg29nKY2tEiFTuSVarKXmjMmY42jJBY5vYLGpAoTS8Y9oYvmCcAeWRwhsjLE8w9ASqJ4LCmYv74yhvZ8j2cVgm",
  "key18": "5VNVx9uSpVtoQU8Cwdje9kNPNty17Br81MB2TnGEu7r3Tos3uyDMueV8NmCCd9Fet81AHTmcU4YJDwUDntS1jLwZ",
  "key19": "5WTFdkTjkLdLJR1MUwT6ZGqmGjRdvw1Lr12nuTqp9sSNLfoMiWdiMAFyDFmvYHMi5mBtqrFwjUX2GrH4HVnXSaBz",
  "key20": "3Cnczcxs523ucvN6Xzdf5DsW1bgMDC8ujMX7WiSmcETppoUwwWf7LAhByjRBmm8T6oxcE1Hhxmx4f4L39jF86YLR",
  "key21": "kMGSEhj9dJNwGppL5CmYzpeQq6NepJzPC3UwfMm6oL7Gu18z4fKe6hYSDRcAeo4pPP6NCnTZdCwGV2EXZFmtE1R",
  "key22": "ei38bq1iKu1zaSgadJTuJ3ZDJrCfuPwJfaDWpB2HAsqvgrznfRfSzMxGSRDcN8ewqtNtkUp79YH1a4Dt8PYFe8R",
  "key23": "2iVu8WCw615QDWgZZVvvCs5ZpUUqEydQx5sQNPyVuY2cmGXzzu3nXJUL9gxGJxFLZLgKVptRvsR1a6SemhHNhJbE",
  "key24": "2A8KCc1SGLU2G5nueqEZAz1iEAnw7Vk3dFcra5F88d1SzwBJa3CnzTf17DYnCiijbJfs2HCjjD6sYquBYFrWWadC",
  "key25": "8Xufk2kjABu5pSr5FpvFmMRY1VFvpkHy47pKUSdYiCYJDgNwkvm4fCYvPtpPcWV9R7wMJ5cJxM9ptQjXoGisAiH",
  "key26": "51TXtAabRoDWA5tCrr44nzsxH7eon4Wg9hdDyNYVVCzER7ebR4iquviStBLcaNFFGsYqyNE3mKMRBLh5g4BEqjn",
  "key27": "41yPHntbCEFvHRjjVYD7QFu7BVkg9tLX6sviFppsWT8TWDtsaFCZrjXREU6jDenpqNbojNDAxZpRBHawsxFgtr6F",
  "key28": "4KDZ7Gbz5wz6XCrFa2PaNnKeVCUm5wrEFqUbqs4x5nEhnFFQrnV1jTuDkE65d7CxFxatDwsMyZ53q8TVFhdXRLWE",
  "key29": "38y43NUQq5e5EUieCoNtbyTf9t6CYrpfjJuYrhmGp216H7j34L27wNwK8mDpakDut4Zcc9RhQjxVQtHSJmF4sHdx",
  "key30": "2JFxcmrBu6naKQFSghPHYnpG5Tta4ojFHJUeDnxsLNVNW1pxPRLbyJnQ8nFBL4h7JuLH5kBkhEHH5Sd4Wm252Zhq",
  "key31": "2xb4D3RhNEBPRQCEcgeCHi4x2s2fG449aeL4kK9ge5CgrWdWTDoLS33JXgQTnsEBQAtzaZ9b8T8xXG7ZYgz3mJeY",
  "key32": "4pbuXw3YNCuzo5mHqRTJPLDraESaY8QYAgR7cRKSyTxJAwo8iibQxK1uZKaxVjG2FRvn4ZEKFGA2xc8tjwkwREuo",
  "key33": "3YrKZnxpAADrpojFqH5xBMfLUFbDFyn2tioEsfemLYRbBuLDJ2yy6UDpRSZrT9m9pX5NHmN5xPf1Mv1ypi6Ao9hJ",
  "key34": "2U44EJS8swPPQ6cwhAPkCJeFHUZAkfSm1Y2gSuBGnr7kBxE54Px73MwpYNELcJXsG7dYA2wqXLMAWcX1HTqhdd7d",
  "key35": "eaTf4hepwXzN2syTuqE5Uu8c1XRnG3uPd7h5SsqRc3d5SHYV5Cd9fLqxkMEnPD6sPuLep24tDbpau5ywR3goSuE",
  "key36": "NMNPwBmrip6qiHru2TGYiVyf1rttDEJ1wybq1UoRgf8GCkrHvhwy7uKr999eWYtAJ2TivVTsppsteXEvjapzCPK",
  "key37": "2oqruGGmg3gDsc7r82Xva1je5bM7i98PC7k8rCeZDKiFeCUXcXnMheVcJJHF8ZbgZyaV1mnZneadUUUVq8njuGNW",
  "key38": "49TDzeoBXgYRWMDhqUggtzcsxT18HVu2fSDQd3HFUJypi8W7d9qj1CxLvgry6EEJhVKDAAvAbTtnQKb5murmfYhq",
  "key39": "3Y89QVbzJTqcAgd5KWQnmFJ2V825sHcEpQHeYtZP6s1VLpzamiUA8PMz3qDUTjosiJKovcpWHPR4WJkc46Ew1JTv",
  "key40": "38HwvU5FsLvk7yrgkMm1DqcSyEtZhY9BmsTjF4MatLw151vX3WAJKjYnGzDdm97kBbgZunMLPeHczffUti5dLGmW",
  "key41": "3CrW6n4CYUnJmbNKdr4HjXzMPzcqAsMNcnmSPYoLxz9nNJjA8rsqerhTfuAuKNKtY6u5NyFUk5D41KLou7FFMax1",
  "key42": "4QgkkwqESHEeqwmvXCXMQfLi8cpG4ht4RUNRBzmAJpt7GvFiWsmwCTaAu4UtJnxqy5LTL62vHyeWS47DGpdBTfLk",
  "key43": "3Kp3AZnDbcN2gkJCDwSqYt8TtPHx7idA8Qa4o1bkULoZNBurY1EJ44GaeQfdFreMy4EFdZH6FfX7AmSxM8PKeJNB"
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
