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
    "Foo4NmiXs2rgvX5w6RFD4Gs51Hz6ZRfNkrhioSkV1dwK88mVi1Kz9mg3ZfWzGBs1X3yoGHiTcueFubLiN81cY4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8WTqPzHiLXjHtS5GwyC7ZJUUAYG644wMBvLKWTE5Cak7AxazamjwxdgTyc4DRmM6jJV8jjxQynYJjxWoHwMAHBA",
  "key1": "ZogsEQuKoiRiotSjvfoHdXe2RtJCVr7UMApKeUjmB1d1T3XsyHyXCShxMKfbCF6uEoYszgu7PtdDK7p293WaQmz",
  "key2": "2mEetMH2HoudGhwhzN2jnK1BwsZ7ERpu7P4vAGoWCDKTJBWiGVXBnytuqpQ193W6QCuKQgM4TRKETrsCx5mMLEjk",
  "key3": "4jXhwsbjWeHkwJiHX7BBt6WdF1qE7a1KrdWFzzy5qgxNPyG811i9SXa1qrfQwHnLLDkUywWkmVphzNKjHi7Me7ho",
  "key4": "3MHuaJAaKSeathRruQrnTts9FF2ox5iL6hAegLDQaUuiNeFCiVoPvKks6jV4561LwMuJpzL4VT6QAgKrQwCnFUTL",
  "key5": "3FWZ4uaPXr2rMYXGcQfFuq9yaWuvJq11TJTehzDDqjxMLQfpPAycJjSr7TE4nwFCzZTPxnEY9Vkx2D8sjefT9Cqp",
  "key6": "RqZEeb38kNnEPeeaPFwzrh9F8x4zN3AwgdUQddSuJhw8oQvHLyqmqMnrRognpWMdKiCuycJnCeXCnRqdETftpEa",
  "key7": "4gfXYPugARZ3v37VPvg4j7g8DBhGfwk1Q2fWWtz5w9oq36w8cWmUKAWpUYbN9vxbasam6kUgZ71jGkwHxCfKtAxQ",
  "key8": "2kM3KQSj5QoEyfpuyyPbLJG5j4tdYZ519k1wiGAQAeA7VindvNyeLfzMdAaGQwZeibLXDbZkNyVvG2fqBMut9Byp",
  "key9": "4oQfoPPCZTA52cUSuZmxcWJB8pgwqcKFfbrFiS3aJvGSumqoBZwH8tfhVEHsERSSRuFUjP25z4U1KcbzbpuhTyfV",
  "key10": "66PxfKkBvYEXmu1UBNreJk3WjScuE3y938Bu5bQG3rb2hMkWmap72XQDSiDRzjzhrLKGPnQoUmjjm1mP6epUqh48",
  "key11": "bhrBbAvbJW3nnxJTuDSV3g9hr3vzqdr5fLX6ZLZtepYykxfqJ2qZNqsmCuvZ24H2uiEC2MNaZnr2yTap7WHhoiw",
  "key12": "2jKyND1oTDrHXT1Ure3zJAtGCJTRkUCnM6cQiQka5EUDwzVMJfKKqftJkusL6EDLUShKBwbq3RBktfV1PwKReRjy",
  "key13": "3tywDW9rG6P4q5EhdymNcDKZgRUJrpk2tdysU8L7gDfbU75SZsP4Lk97e6ntVpF3ccecaRuNejZBgK61uAS31Aai",
  "key14": "4rAifDi4wP4nLY3BrAXRMwxx1KcBjLkuryht7z969W6oKgpyAGzi5FfKBkJXjL9twRHsJLvvLE8MqvHF2yzXDJR7",
  "key15": "3ie5x77ptPiBJpzrzM4EovPKiFe8fTVGaKRk4tdmCy6DmucBViE4mPiEuWrPVZ1i95MhQMUKuZDa3une8rz3VFhd",
  "key16": "3XJmVMg9aejUG7H8eVH4hDxqmCHoVp1NfZFSs8H4YNi1rBpmgGK9gCNbC6Mi5YyJPKaYNVS8RBGgnR6Xtbjg7vMX",
  "key17": "2K4wwUYhXRGj1WwhvQgzVAgcezDVPeicbYaSc5dmDuwSoUxpuqaioW9vgduhnZo9Qc5jexTy2NHt7LQLUcw5RW3Y",
  "key18": "eSMtYjyJpLcqfwXmpzApRVmPnTME3ivpmLAUqtydXY6S9UFvfRHHsYSypPG98gALhSW6rQmTWvT8tpGAKpTkue8",
  "key19": "36jYjsZZVC8C4wiuzTMX5qise9UzXuKm1VkDqZ5XcePUzJ278goMSXpoaDDXrfiH1Qq5ZXSj1DwvhH9ndm6Zg9mX",
  "key20": "3nEqgDbdaobdjoY3J9oDKSXTBuWQvfTzYxCfcdK6CbnKB2twCuFZuPL2kBWVor4RYQhwsj2SLfwtFC65L3ppwXUx",
  "key21": "eQNnB6JeJW9esH9crYWKiUvVEkrSsZaBH395PxFvT92irtRNGkaaiWcY8UortRxdudSw3qFrJNT3ihTPq2z8jpA",
  "key22": "3pQnbBZVnGfWxKKL92aEkBMvxHdRw9ULXjLu5XbXanjs8vWDXXdBLH7ERx9Xjb44oRVxYhgNWazAKcuvAofMcWUf",
  "key23": "3u1Ve2iipcbAZxgGHmrjzRip9ot9XqKyrjPbGrQLLceXCqiqPCU9bDzhf5rKQqrbajR6rmiWBUCjhAys3uc8tp4Z",
  "key24": "PdYapjuvwSXbCRSbYEZm2gPL8Fj2H1mqTcKPpvR41Dzu8WUGC72S25fFmhFtdUA5E46WLiumVwNooncDHciQRuc",
  "key25": "2HrjDcnjCciPczp4S36v3vDUjnMzBbet9Ge5qfGsg84m2vqv25x8WUCQzYeZ7ggiixnicyxKYtXZuHX7nZyfqk1g",
  "key26": "34qpEj2Tyg3bzBijghsBAAFFfeH3nJVJYFWVMKActLrKMp8B7wxQQ6HSQRHAnR3R7V41qWEXKpS4GN22avuuMn9K",
  "key27": "4oscEdUeFa2LUUT2faQXv5ahUfPd71JSYFLhYNunHPAfkkRHr7qVJGNYaYd8LDjLN6JEj1BmEPsdbKax6gyFp6Fk",
  "key28": "2wQPDBN4fXiZoP9H5fb4C2vqwMVcgDgWemp9qofCbH5CFHtGfo3sTronDQwjJvE7kmzb3MDppqAeooMtfLvf6tdq",
  "key29": "sY3M2mcpkjZJBSqFZtzCzmYUxzEdfA5oLcEn1kQcpArvRitqPDgAqqvnbGkCb16NpmSUnXJarQ7dDR2D3apxxLo",
  "key30": "5h9DEAMqu2Zu3rQVNCcCnDu3w3hGM9ejSQ8E9EEJPVExbWN3sL25Ur4qYqQ5RVh1DWNXDsqSaesw6E4rDDoPwqXu",
  "key31": "DYyNyLY2sKgn77qgbjAMfxkLkHkPi35GKhJJb9LgrUg63ZTSjTJJGqUyQCsVD4erpTiwgWdpzvfNwvdRJCW5nMk",
  "key32": "4pVmz558bUxbTFvwhdSZijXyCGoDHctf7xZBBncAdCZjQUp49CfyLkVmUqVKFdu8EVmWoeXKwqT1ggKvure6XkVg",
  "key33": "MaMPLh9PQmhLtsM2hN1ocJT3rFsHDv9isPtsHDNSfXMXvNLYs3pjnTJsbc7gox3SfX3EZnSucHR4ZimnSoXojeC",
  "key34": "3NZwaCH2pW9tPUvV2u9fNPs6vxt235mrxKi1R59icmm4aXUme5aYN1YmH3g5idb2bkiPopnnsnzUqqQ5eVtv2Kiy",
  "key35": "gQjgrHW98hR7icHfQiRfjqFnv911URruAJZshd8N3NYM2HKCQNe94Ztix5EnSnm5L3ayRxBXA4yHhJz8sig1osJ",
  "key36": "Cp1G6ULCrrJg9GbhW2g7KictzkhftaUibv1XqJ3avj9zPGz36AENGJj5hiNfw43pCQjaAW3Po3nCNDonUexDwEj",
  "key37": "5yqhJNAmBGnRxTVbxWVjXrHbanbEpweroiHztRis4BbkhmhLkUhvbV2TKshiNKQUvR1qGxXYyPbb9sMKAuYsqQPV",
  "key38": "vgqc5FXGEYxU52khBJSaKBpYSiYFiwajZAGkpML2gHK853eQ5EhwfazUJTp4xGkY5hRqBoES2Zt7qx9KAeKr1ZF",
  "key39": "3mEtHNM1tBf5Y7wBf7KRFtF6nt8T3fb1cBci81ZBAeXgXdozHkh6aHHoMmSR9YwnZhxzJn72a3UEtj29AetX3NCP"
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
