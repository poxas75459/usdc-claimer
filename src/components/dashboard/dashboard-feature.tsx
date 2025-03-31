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
    "2U5kWNZfVUfW2xnaZT1agvXbdAuYDP16yatCzb1KrzVLchBGxD8HxkNqht6s8ma4Pggt68LrCXMuJkLK7P2UrpHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKu4hfLTsMmxjJKpYJTEk1TarqJfXkmnGFg6WYP7dgXcPDtEww9B1NtnVvF8K3dNvFA2P5BdYFLVJk7A34WP2Fz",
  "key1": "39z5dqHvZHGGFDe3haPyfdUd9CfrbcXhnRowLR6hfsQnMcXuuzMdYG2LMS1poWj13exJ16QgSdtg5zSdePfi4bHy",
  "key2": "41eo7W4rwWKryeUY8Ji2ib3owNhW2PUbZjwtH8LvVVxfpJCxFtu2Hi1m1aPpoW8Jx11veRrBEZtArjLziEsREos4",
  "key3": "4HL3Hktxyo5dFt9ZjgYnNfbJMzjjevpznHMb6TTtCsTUMbR4P3G76bTS7154epdEHbvEno14TLusVMf3SbCZdiRL",
  "key4": "3tQKoBrmvAQAcC6cCYdgMfbDAWoGCSSrg38pLHf8Ecww4VDGeifAM4VJvfpmB1sBqkZFG2cV1sYY3MzVxu7uU2KH",
  "key5": "5CQjYCJrXAwDNKKHx58jjDrE1UaY5qQ1bxHU3ej6QuFMx5q8DMRfjq4pjkZEypvUc1LP3G3Z5wZC5VKrmrE9Z6nV",
  "key6": "s4wvQ9yg8Ynz3VXHznxJ7CzmijW8MhDuQ83Hdz5K3qwaZUMM6i4PngRY46yA1TR6p2JgqJpJWrYnkfEMw1m3pek",
  "key7": "VGfRN7d8Lzooozd6GdBnUJBohjrmTC1XdWJXGoL52372FKqVa4M6jaFRuvx3YwRbWZKr696gEMM4hMm8QcvTnVm",
  "key8": "5SUvVcE4aLY9AsLFXLi2BGHdoXuJMpEajT6RxT2XcF5iSGvFmGiA7RaRFNVGN3UcegLYPXDS5bAnZU46aaTeYXHU",
  "key9": "FvEVGmwQqLyL5zEPCJFAokgSbKbUio8ffPrjPWfZU1qjsTYPa6NtuTd1BNMmFvAK8RsuhwMuee3Bzev8RxTrrSr",
  "key10": "2q79x8WwHWac94XLRJDw7BzEsVQDs6rLzt2E2QGeUZi2Ja29gA44JQJwb3EEUFQmBpk7atuVz9zccWFn5JEy9rnE",
  "key11": "4SZqLgLuo1hUNPktgwxQtd61MRjrhkEoAproBkUAhPCB3UBtM1qQ7uMh2rE432Lfn8jbKCqvPKquhE8goaJnTHag",
  "key12": "3Jiz5v8BBTGtSU1NKrJCWoKuUCVcyE5UVPJqgBuNbQnRRy4vym1B2w8BwLAGNYqv3MEyLCrc54ugB9TUwVWbj3JX",
  "key13": "4tXb5iyi3tvvshJm3a2aX81zrEPNJyvMk1iPAwxQMfrpWQeZ1VqHDuXUGaQd2MWhrbM1Hke8FZBwzq4jaxNr2Yg7",
  "key14": "4NYREUv384Qz5rhgNeWmKpTBcpJ59jNRVQyasspLN5EDjdAj55WpNgetsgkkNh393JqEy9UvMq3X3nrSCxrhrqtg",
  "key15": "5MNz9ygNpewKidLRahai54pr3nAR83eFu5QpP9SHScb3Fi1J2g1sWsot5n1aWVaxC3VhhSEqdbvWdZpVcffteTXs",
  "key16": "3X5PL99jyKNJs8aFsFtF1dwr62zPwmUoLG8ZNDk6ckHo8tZUCHUgqWghoc1AmaBLvZJN6riWvJRH71h4583NK3je",
  "key17": "5PnfPqZfNgByedq8kibdafrpP55mSHaEMNrsRapb9i2iv4pTHDM45uguakYrTrqheomw48kTtcWQe3SmCkxjxFQi",
  "key18": "3ALWH1C7eWfYwnj5jZK3JTNQw36vqUEgLpwrfZuxJ2CLwbbsec96MtjPBmH6chJt2HDccestqgz3RDyDwVLRSATo",
  "key19": "4vGHc8rMdWySz3RSXeV6wVZubzzPaW3yxDxkGLcZZrB8nR2gurq5g4RJDdr3HgU6sjfUm45kKk6kwTgVXYL548vS",
  "key20": "5e9UVufsi4K8qM4A6LLK3PMZVnfUmLKHG8rjYeBHXUZvShwfeJAL6CzBDDiPBEpvLZGkToAJsLUTXxhZj58JXdtD",
  "key21": "ZjkGoY76VQoFMyoViUYjLqRt9o2x3DfF3MLUBfLn6oKPTGN5tvTzj4BTRZt8F6SDEwN99iiNzvonnDxnYN7YBZr",
  "key22": "4t9NZckyGTfrUuZcpm8Jb9EJFK9cm7YZGW3qH8okNvxafb3Gv46dg3Y5xfrqZXebXzRrePJ5g4tSo4nMDowdsVbQ",
  "key23": "4ygjArp2VoCpwyGanBDq32dEGqY4M63f1tzL91kWMMmdHf4QW8tPfFZu2KpdHwAZC3yJWG3ofExoCd7C19Pjt6Ts",
  "key24": "LTE9zVNbfPdCcwD9DS7EGC5p9YRLAPnw9L7gHT8B6ki4p6nTabSGVyu8bPcBT6hC4Dq7JhY9NwBEPs3aP8Bxz4Q",
  "key25": "5qA1NaFDCC9CGEbgigrk18ew6AKG7qrDzRMnwcnpdRjaxana25aHqoDbiYRu9EcT1DFwEqJHVs9QgHYwurKidjPj",
  "key26": "23FY3FgTEutBQeCcNVD3nx4detU2d98B2Q6SL4NTaG3j2ZEqge1ahvGN5ferUP64cFoyWbv1VHMN1LdCDQvZs7kJ",
  "key27": "2pPfNGQfPuj9zPefMhky3VzpLd3qADda7QpWco1nB9DXS3WDkGVDRAdUrPjSf7bWBscmtXyXRUBwbbaikMQG8iGm",
  "key28": "65zFYvVUxx5Q1gJTSyURwRfJZMuKSmPYiHmhP3p8nVjfMDNx6UMFjjbthUCQZMVZujqs8duWZUzvxem5TDh2j61x",
  "key29": "312psUvSKzMhPTAcS5b4yXX88qkpSwAhnFqv2ZJG6BP4UQj4L42rWR7zLjHTdJygRsHk5onjM67BXspjBGRyFXDH",
  "key30": "3wbZ58kqLK9WQmhHPGFNijfy9ivkkZiPgTTfCfViW9JJ8yAvExLfipGkPXs4bWQpApCfLzq3HWRkFj3gqGqe8aqS",
  "key31": "3uS5aZqBmmTfkPjHQCpzKvCKz6fKUBXBtH2yg5jiD5jR1q3yKc5jL56EDXrbeGhJiH2BE3454FghrhmYC5wYPw1T",
  "key32": "5oLisvtUBLjNS69vWdcWUGkskQSwo9Hg48Zn13gMUPea6xX6nAX713PMJorXoBANLk1mb6Zf3zk7SDr58ekjtNR2",
  "key33": "MBEBLBYRhwYnrqZTce9os9YzuUYWceZnYPdmjtZcbf8MEAzo3W5Z6zGPZnSNt6hXeEjHGyVPJ25Ts1yR9nhXTE3",
  "key34": "3w7124cmQT9bTyoKm9gK7xAC12SfQVsqY6rUN5wnN4gBstBvWquPSJwu5mVgyM3PWvTprqdjWXD5RabopWWvbkxK",
  "key35": "3VVSoLhGM8r63zCWhpNyCKgx4X9sAU4MP8LRDCty7Y6TKd8XomAcaUHSNvTsstfqryyt2hKvYorm2iYyKexyUR82",
  "key36": "39BMxzfTKtJpJi9qqdKrwvjqLbi3PFopzcpnunAhoaFVezcvXNuxnu8b7f38tbcqKovQpseBcMKUz5Rnhfo5nc6U",
  "key37": "37Em5n7wBJhv1RQTAdioswb6mG5STs7mtHxeeAqUr2ddJndfXkrjoT7LTe1gnJAHwrpVwPQtBAHBQXcSJkgqHKL",
  "key38": "2hviqXRYgdCQhSF8HTvc9tDwUhZizakkAoNiPqSQGR4b7ZaRheQ1nUaqvajV2b2LS6Sm57ar6fMfvz6PLVMztGPN",
  "key39": "2eJEzoGCDvBvqGEHEzYEYRAG4BqkL18P7WNcuqoBBVeSyjFyGgvYWUAPEExnSHnQdtp65XsGHWtvUxu4nGuT8tYs",
  "key40": "2JTSr8RQE7f6K4Ve9L9EGgvug3LaKjTqueMRZjYrRcuKbecM3tHiEeXnEEoSRSRZKoZa6BTZuuoKvZjpEy5ArCmg",
  "key41": "2rD2B6YUTDnjPuiFVhkMP626EKs1FK723NYHrsVPLryn8mA7nEQb21m4CuMXEJEK64smRnDwT2754oCrnZTCaxEr",
  "key42": "iLY75DW6vQKXHdj4X1jutf1L7kzdsXGbZYY4y3KaSRsR5XKvs6jn7tE97VLz77RJzckVEFE7UEtTR4B4bM21ZGG",
  "key43": "3Np83xd8HobuCkb4ThB6jerEEjrBBsDCcGF3qQs4qsRDjfthjgEkxEh9SyzmWJm6vcTo7XjqYNDtxfQwoNgfqmob",
  "key44": "3ZiLFxYgqGDRHeSAK9GrFhgbr3bN2VnWW7GKao2KWjKCohDZCFEUV76xo6j3feXfMA8XJtBuL4KddJMenN4HYLU",
  "key45": "2fNX8RRaXoxzmN3xZRQpRCT1xLSk8cFnGvkge1SsBxRBEmwHJZe2SY7hJsxAVQCzT9jYkD6kMCo2rw3LjPqW1kUZ",
  "key46": "4rRZT5X5rrh4GXJaphZHpHzGjEtU5afVwiako9hfG3QxEM2pHjFaxfwG5gArBMTdGogZniv96qgMQmgvYrnWK8NB",
  "key47": "4nY7ad5U8CBWydGVd2wACFVvoMZTQU6ASbeovHBMcrFQaWeofyjreic5aARqy4mn8qQPXdxQAVpx2XYP6C4gFLLc",
  "key48": "Eyu2qZ42SsVPricR3VownpPP5SaqnonkhvY3S9Vn327KBzYUhgXMvTxEicvqA6wP2Pjn52jTcpA4A5MJSN8JjRf"
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
