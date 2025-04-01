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
    "4L7PbqnCH3oBzmPsgV55fz2PRm2puzM3WedUqDp4Y9SjyMpDfpdz23fWgVaWE53krxwQS5LCa6Tx1WrpnndDWoKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8oEnXnMhQsVEFegnj5YAe9WJphbaribgvYLfvWXLyUjuMeNwKN8koRqg9xcGoKSg5yYUegcmhu84PiwpQccoDA",
  "key1": "cxBdVUo4PEBBx4jJj69m96z3aUtUHc8fztG4EbwcVmEytJUwvqbg7iHRQi3BfDsJeeGuYaEsuedb8Fi3BVahWLi",
  "key2": "42zu5Y2i4temtavVwyAkdXMSYU1QV5UY5gZk5dV6DX2HN2wd8ZwktsEZdyLn6puGhbiczVFmVThDbsUYo6aiM33X",
  "key3": "57pDeCFgjSRn1hd3HTXoRGuQxXv84VKFnZMezuvNKeqFo91wurR1neWurmPSoAuxgntn7CJZh66xFczQS6Me5JxB",
  "key4": "5UhKzntf5FJ6DN3PrEYYTGJwiQDRjS7RiWFthb8h7REMF9Cx1KjqCVgwnDdtqJF1mcEKceYa9uqoH6KQUQU2Eb17",
  "key5": "bRfuDJx9FWHsQkczSaeQzg8FdHLbxxjUaAwDRKNTEthqZZUzFs75gW5LTwvWTath25kkL7uiFrCdD7AvLR1t2wU",
  "key6": "HbKsLXZEEZ2CoGpAiq9RQEfTMiqVnjkGeSqUDV2sDvKoogW6gAo8CgF8qpUYgzfzXBAZktr7xnHLh2Y4BiJLtQN",
  "key7": "41cXFvtCgYHW95xFaqopM46UxF7eCPjzpd9Mc6qhD7BDvGPv2Q7daCh3Xdx8Qv9phnRw5am47TrwzchrNP7VWQuo",
  "key8": "2SPsEnfM6JVW7LX1qSjFhK5WYrvCu1EfnyZLj1MgGMBvrkEfHkJgwuCarNx74KHNdcwZwKX1zwNwBxcrk4JZS7Cb",
  "key9": "4umRqhJcbyANbFhc4DxEN9wS48QHY2nSLyg4MN6UrupwEcp6VzJe85YmvdBpzdPR8fz3BX2o1GQn7aLnscwU3ZxC",
  "key10": "34Y3c329mU5Y1kUP5NpiU15YQ6czuAwNHmSSSYs54dqirXT7SX92PwBQTBLRtXrrqZ57qHkzZtkbKdqwoCVhpnSa",
  "key11": "2Fmydi3AdhJomevqjdxeV9Nu4Th3CC6BKnyA4gdu1u1io2ULnAPzpB8oYasg388NBgdMHSCqhze9jbLPS6tksg6s",
  "key12": "2CbYo8DCNNBN8SUAKHGvfH7iv8bTWDFDj9E5cXaHYBzcsPihR2NeK7UJKstbvpcG88RH1H8dZXNoWqSTJqrj7pKs",
  "key13": "2tMPdv6KJUvJBfe6NwtNvXmpDW8vqbnUycKRdZpzVRr1inoG8AMSFZaQEfAmR5SfRYdvMymhhsijguGajhyeurFs",
  "key14": "5FUxtrFqjhJY6zaCbB236rUST1KTayeaNchUW7DFkuiR4a83R2y7d5K9hi1ziKwAnA7Lte2xecGi5gWq6BhbWMMD",
  "key15": "2wHK89fRqSBDBmtAAZWxfoLgnqJLUae6UQGPL4esQpLSu6qS5FqLP65NKDERqcpobuciTcEFfJpkASAarTJuVFYn",
  "key16": "4EZYuqwURJCMmK5hVMmJZDsU66UHYYBREFfh7BFRNivE9tcfYRFU1jC1K88Q7vvK3659rUTeYrAThU7nbP3dB6p3",
  "key17": "FJ5RHcGNE4eAUAfRpDDYVC6HkSHvv69fL744L2Vk2idapMqMcwbYqTPFskvgdasTvxexHmbVMVZRgvbkutYDCRA",
  "key18": "3PzcytjnVFxeTF1qoPpf8iMu7FE7BeFNuWVfAxgTXAyhcZGLhKLgSFZkAmF2C5ykCmHtR7XWUiF9YqtmGH32qSqN",
  "key19": "2dNA3GUGVSxF8pgmXuqoJ8M3SEz1vxqCV4pYjgnmv7oByGXKjYGuiuaF1Kko63qGkt1jifhq64aciZ3SSg9qMNiY",
  "key20": "ktiuuRtbeXduUKEyX5qn8jnVX7QT9mVFpMaypRLVjTszpBkLzFB663E7cKRr9LPrbPBJdsfgjRWQnXW6BRRiK5j",
  "key21": "3DVFvevoWopNJpx1tGQFvbZEzUvFdSspaKPjtiXsU5jcwbp7Kd42CAL48y1bjqd3yi2k2G4WYt5dKbTgtuicr5sn",
  "key22": "bufx9GNSbVQg2VPumwnwY9hCwEvZhF1paegFKpfVT8yxY9Pb87bTHmgkCSxmvGziM4z8uvaLV64vb9FznhMcxbn",
  "key23": "UTwUpyvw48v7LnpmkZViDmwz7v7stNxqaSFCzpRgaJjahRSkeEnvaFESxyy2WHvcQhhw8vf5zb7Wfc968Vma1zR",
  "key24": "5fCQKDpkkzniHba1gBJwsvi2pnh14ApipMkqr6VWsQdNrGsdK67s4H3ujKhjyYxJ8qC9iNwi6EcJW8XDiiNo5ji5",
  "key25": "4eKm5444p1dCZcXKEXnVT3aifkJ5jRqhMTJLd3vg4Uwuo92Jvyo8CMtHY7zEG1BFEPtQh9zfgpjg9rSn1dj8puDb",
  "key26": "3bXEcP6bKkWYSjtGuE6UbqGTzzz7iWnwKE4fuC1j7AJUXdpd7pmwxSswhQrXGneJYsBgTT4toDa8kgVPkgq7KpPQ",
  "key27": "KYzF3AEUf69BC8GxD1RcAMX6xDkR62gmWBK9eYsaYUag46psyM8L8GzjpLwKqtP4SbmA6jDfJeW9qm8PjSirreA",
  "key28": "5bQbSvmujXW2Cfq67eRpoGueRVrM9aXaoZ4JddqGgaCK1owwemRfF8cZJiphBtxDF5YcXnDKo9PL9m9H2ao6d38d",
  "key29": "3LCgKEqTx1M5vDyV8RujEVfqJak7wqHui8ZXoobGwt5nLGcRfMUBsKoGfA5CY26GJciZxMQnuGMLWE9Y5UNrTMtM",
  "key30": "5gQzh5cyCHZQUzc7szNXVpvEkrsSRwG2JJRoqHRat1d9Z3vnaTg6AkKysPLdHcurAvi12jKYK3VgC6FHtFxfNzjE",
  "key31": "5kVDXV4z19QgkMnK71uiZjK7iwKH5JFjT4vGQfvo4J425oHddtDWJndbKZuMQCbA1jxAgNE4QSAMXxcJEV82x99G",
  "key32": "3xSM9BHVej2CyCJ7HCDUw9dCH4fGs4tbPohnkKGrCeyRD4q4EmneUWQ9bdkYB8EXGR7LxzWqaAQfku1xPBkpKpps",
  "key33": "35oWxSfyTGQH83yqtND7jTGoSsz7DYgUB4NCMn2QgMdyQ4nprzhJSbbUBtdbzdaLdH2h1JVJRHDJwsYjnV28X57m",
  "key34": "3MK2DVWwYCoFDiJsvvvac1giazFdoCYtoyWvNE9RtP6hoarZGViuiGKuPYDqCDGD7HHtvJVaCw5rNcRNQxKp5hVY",
  "key35": "5EGunWAo9HQ4QSF1JUjfGzm1oYSJ1HCs2RAmyj9GHy9kysQ2c4C29sTNMANGpMdVw6vFp9hDouPDyumTkDa31KgL",
  "key36": "44KRaAR6DRWnkCzLCJEVSh6FgDKewHkbM8pz8v83TCoHjWEWNuiHtyBZbyMc7yvRjfaCJgjS5WdX9djNztXTaoKS",
  "key37": "4UryfCnDoC9V8CZLNHsaKXSQFEFw6KkrrG1E2puw7vbnUz2KS7XiKgjJ7Bh5yM86jzzkGcEdJp4SqqHzoZCHppZZ",
  "key38": "3rKf2L5DQY1hD4KmYStGHNbUEVjpVPFCQGskptPiA3HrfR24wcLg3v96K4g8poKtxvVXqcD4rsyHSEzSy9q2SdiX",
  "key39": "Lt6zMKEwruAVsAy2jy64QqN41xQ1r2NqrrocDhu8Q3pqxpL8gYFeEx1B8sbiDZcBbhCKzZLExmc75kNcKNtBywi"
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
