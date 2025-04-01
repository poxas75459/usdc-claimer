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
    "4zeJWPwZJzJnNwWtTU6a4cQNRE24VaDRaiWtxGYdQpUKLTbNA3xCxMUQEpfZsoud7po5cFZ5uePEPoj6GRPXzdcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXWht2khU8iPBzxsCQTLxNNg4LqXzBmydTAsRgW6jJ7guSRVbw8C5878KsQLyMCaKrmuycLWsTXhTf5xwHw5iPy",
  "key1": "4XYVpBpFoLA7jxsV8RkBb7bCa2SHBdmEid2C3jb27Nedw4gYZHdxeFDgLK9USRfpVzDB99eEc4UfVF9S4XxCCjVD",
  "key2": "4GbfZjyZxbTMaswNdvoebzxaSui6bkspQaWdpJfxjnVuULwxeV4uQn72uTdYxvhV1JcYwkqMsKuGFSn6zRKeN8Yf",
  "key3": "3o1PL8UMzeJCtczr33CoFDfbic2XU7cwQjjc7VSBwCvMvNd4HvZeyi7vkgTWc2mKd5AunnMZD4XwNPiz1XpeJgRK",
  "key4": "2LoMuGbADvgEd5di86gjPzUriA9EqCtvTPR2jxQLeNtuqrrToR8SMAMNHjRztoY7XB5EcqjJxjuEcKmAzDi7GpB1",
  "key5": "4n1gAi5mFY5b5rzZWhdrB8ewpYPkjKkPqP6PbuLaGtmdCKTxBs2DpuH3BKVfLhc6yXQtvSYwjAD5m3viDUPy71NR",
  "key6": "2Sbmx3EWeUzTsz4JJHHpCSWRF9YJNsqAJG1c9kjWtDZB8ApgU4Z35r1BK6q2CcaVsGQVBiwfSJzpgW8iYywaddS",
  "key7": "5BEeeZpNQPLUUnQuSn95GbxMY8guRRPvmnA53ixUTuUKZatTmoTGffsvVMPwSvd5WXWZfsbZNZ5iy5mz1S7R6oq6",
  "key8": "4gcs5PvzemoDEdEQ3kN2QfizTy2XwKZrdmCFe61oGEpaz7hQDAGZ6fKExyCYHTcWqZ1h8wKzdS6o4UkyDDeuSJfz",
  "key9": "36ruTvHbjyYC3BcaY6QyJKbKDBWA9jsosCT5LuouEXyChFqLf8pTBTh9q3xpU6ZKWSrqonCafhtWyJXAgWk4shb4",
  "key10": "3FxJomHepveLRd2RfTJKgsrtNJtqVYuksQCNDbJNVJTZ7bDNRD5XFoq2mc779hRJ9ApcuvKuBv7qfD47yoD6rg87",
  "key11": "8zqZAAKyVZrEbibJ6SQdKKVDi4f2T8UwkCEs1bUZz6u9dr9e2UaefYeiyNECViLpQRHevfn4SfwaYphs5TBJSvP",
  "key12": "WSCiSKuQyMhKtQpYHLPjo89AcVd3VcWkQQrqoYRSovv7rKMvEMzbstAuqF6GXQEoGKdUjzwyVfyBDHmePm9NigE",
  "key13": "5kWfWS82p1zAwPtW1sK7QnGaUoz9G5H5YXUQKMLKSwkBjMxjJLRASm9ApZhV57NXxvGSZzcrb8gRbwbaS93BH2gf",
  "key14": "36tngM96qYSzXpN7fuoUpnjbvBuu336mBnNL9BH46cjzozeAgiD4ePAgudN7g2nqtZgPrV2HEiqipzXC1CAiMmLo",
  "key15": "5fJ2Usui6261jVh54g3siwGP7wmLxo7NrPHxzf55G4mbA6rg4BxHaDDYUuJJ7xUPfLxb774CXFGaJuDiBWRi4oKb",
  "key16": "4S2iYDZEShhDWc9xgp8nXUnANCMgbqpikSgy9UTnAVs4nUh3nRUcnvD5VQucEPLAhbWQtBYpXjUHoHcsz3EXyaDk",
  "key17": "3JXSfXEaZRHPSq45C1gEjtDDn2YxUJApU9dNxRHdVQC89xXwGPromFvf3BVVtVAENpqQUaKrXRPgzTgxUbMBeL2d",
  "key18": "45fhgwmRvfyAbXSWtn8r4TP4U9A1FPjSmBMF2pp1j14sGzT2f7q7kTJN7MK6Q7rWE33K6RcMK91VUFSuJeRbHGzf",
  "key19": "36epdzxWaXknb42jcSWssec9nQHxAPL9QHKGQXUXU18NEcmpeZFhJEDUCvMkGoNC1ZaoDaP2TG685PXgYxTFfCnV",
  "key20": "5pLRjJ92PhWPnMWL1e4So8WRtrQLQGgaZ8QEDZ9xmZcvPU1fwWmjCyxLJjNKyUqzqEDBMaqvD6hVoDpksvoYfuKn",
  "key21": "3FFnNaXoRQ9PCR1VWh3JnSrrsSTxMFgRLyWqFRoiqY2WpmYBnNmge5f7bu788if57FZTuDDAMRatkPnWs4Eb3aE8",
  "key22": "3Avx1Kum8HQxNgRAAgLSPMVdAJrbmrmdmYC6RmDc6UDLnfVFyiGYzuZ7bH5SonntnYJfFAJG91VgVV2GQbpc6gt3",
  "key23": "3GM5CZi8fT9xjvn5MbTcjobp1B7MvzJDHTUUyrTyD6xZjUfFrQ3PY3QcD3i5EBZxgqpGKp58heM1oLrYh7Yg2i5V",
  "key24": "3ts5cUhA9ELAUvq25tRFTW3Ckzat6WZ8bC2nBzfmfumQSyzf3nDeCTuRDuero2BA5VQXdi41GjEAuyuC2sqhHpt9",
  "key25": "4MsK1T3kCmmrb7SVurEWB7cWEuo7A1GV4eykU8iy5HfcX7rGccs44URjjcAhgsBnvbGrTxZWoaJWm5Ku6zehnT9o",
  "key26": "2xtRBWimvmmVKq3jNFdAeGBf3oYjUq58fhtWgari788sbvMYaPvsJN9YSrQhTJvVNFEfavkJGzJNkcrv9vKGETra",
  "key27": "41yBwFgY26bCGT47mkxbWobKznLsRKtHPtUoW7ZzwCYifsopXk1ppcWgQovJddTmHo5p6bgDkKQ6Pmjzv82LE7R",
  "key28": "u4NkUxW9dyLpmu2YBmz6hHGx8xoCkgcMdLWWz2pYDoE5zMg3fm28S3RCroddtaxHRN6ofr8Nj41tWKL8Xzi5io1",
  "key29": "5FUbpKkjqnAotkzNCBRG3xDwwu4nqf2es3tMujqW2NTsPHqoEmi6cL3VwaJCxegARDrw1JnyHst5EGL4KinL1YH8",
  "key30": "4nN77p6k76s28PoZc744yvf1aeQvoaDm2mMBjKxG5iZiL9SGfuvrKQynF4zv7joJNisUgf9acysjYapkWauBvcbZ",
  "key31": "358aPArMXqzcMCFR7BbRAfKCjA8T4cUkhHhFTD2dgfH7dunAns4rqxHb7jpGNBGKyGLc7iuCQynWQeUg6M9R7fgu",
  "key32": "661YY2nn49FeWUxHLdzisrGrnXkZP7exiVrbWaLVRXhY6UqxdMv3fAAa8yC5zMzEF4cjqZ778y2EBzLKbneQbRTa",
  "key33": "29nywTR1ebwqt9VGjDekFUXBazYS4MV14AQJo1KMLJ9FN13tZgmcFdDsoc786YktYFbf5ndr77VnYRpiz8hKZD9S",
  "key34": "Bx2gDGdyHoKTKYBGMJv8zpRhLCN5BDwCKsEpxMyHC1cmvgnFtRtfWyiZmb9b4MPCVAxT4Nsfn2VXraWcjLB5haW",
  "key35": "RYUryioB6oKck4ndg8kjTtFUp1drg3XDqehwqnFgP23mXuteF5uYK57jRxikUHePCozSbTc4UwpnWtekAddhgeS",
  "key36": "4HZf7pjDH7ictD8CmjPrmJRDvyq5SDnfBzakyefbfH61H8dK5vnNZhGeqRsJMeJMJJmTijiiN8PJLGXakcoLUnie",
  "key37": "5dk9EUfw2FGz5bDdF47wmChA3tmrixCcpDBdt4HZaTuGnCPxDLw1eVzXmzAdovV2VA7LusQAdJohqjMZAX6xhFEw",
  "key38": "22oZZG2ri1nk2nJVCdwfVANfiJxBW538RUScqQyRyEQhpkpc3m9VgKebfcbTa23QQH2NyNaiuBv5L3PcxQqqj1Wi",
  "key39": "56fUaUD7YtLQgYWn24uVYPecYh6KuNzSwiKM3ucNaMQMSGPKh1sHYsdkDqRcXTxz1mmLonBeMkjRuTvjYrk9z6Va",
  "key40": "zauunKdy3Nu2L3JJo99MA8Uiv7DMkAHnpVcfYtRAa6Y6nntvJC5NzX7eLs93Wm3QrZkZxK9Y7WpbynCUqdZWekS",
  "key41": "uq9zomdHSoawrV38xFx6Ldzgh9UxMoAgN75HdMj1TZQY7xRFtc9NzXai1ZqyQw8Czup9r7jGRWjyn1mfHL9xCuc",
  "key42": "3HY39MG4Byfmr8ejLfWEWWodFfVS719Bj5bMrGFxNJKwdQiuBc1PsEKTYgsKQaA2PoyR64Q9SUHMxJFFauAwMyqU"
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
