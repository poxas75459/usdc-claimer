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
    "4QgRdtuwmFaqb87LdnoWWTANZHAAaGJuoZmWFCZz2jRUeMHwjTpNUSV2aF2FkXs6FnVgQKVcqmBXjCBe4crJaqgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RX6VbV58KrQerQ3w6h3ebHnrXmvGMuPhxgYcDVdbXPdK396DyJmEyWEs8dNJSQYVKaeNqEaKNaC7wM5URCrcr4S",
  "key1": "2jdd4wk5R81WZkmrkqj4q3YEm4tF9nSig4UA1vzAs1dHQy4pLEVKq2wgaDKZA7341gEyeAyr6jQooyDrVzX9ZuKa",
  "key2": "DNbmfhHEKjXfRcGpJSH1sBd4PS15A5737ZKpFp35PF74wgxJq8ndWxMMU3FA2S97J5VXu3W99Rwcho2dxbEdjV9",
  "key3": "un727bKgyL3JUcce3wbLHu62NqqUjp2Ad4bQ9dzYgeDERWppXjbwWgMLZ2P4nNuwbHAtdtsQJSaNeTSMoGcedN3",
  "key4": "25NXaFYPGA8rUmryxSC4hLpKj7FhNtMU2fLV6sRgLzC267vXPDrBBGoTQS8EKvyLoq3tCAZLvaH2aP94da7t1poT",
  "key5": "5cuEetzy6Srw9Ud2ZKFBu7EGCS1b3Z65D99MrqkNTQ2SsNoga545J4d4eejXJB2n6pucLDiEysZtC9npU73kUCUd",
  "key6": "3VWRZtFtntgSmgBDzFNZZRBf7fYARvsJc3Qug6wpfTPvmpMR9NnWiWSV5kprqd7o2dhvvKX2J81hc9EkYwKeoTaT",
  "key7": "49fodCPxeCaMmSRaZA7XG2YQpvYeCN38r6SWMv48BuzM2Rkg7mjK13fu5QnAvaVpA3SKMeH3n1VHLnh4i87NUnbx",
  "key8": "5gjpaTiBBN8Huf21aK1apUFXHYwqCetxyqpNpeE6c4cH29E66e5hphASxqUGZtmy27jqbSqhNzNuDzYKb4HQZihS",
  "key9": "AnhRCcfmpAn6DfVqfcCWNcvjs8jhNbvvstMHSnph2uSN77X4aamLhHTLegPnDZb2LKtUmMCurrkCWzSs8fCXTqe",
  "key10": "2YZBDJXNbbxQKAC5qE5doQmcmabNRaZBJcD4BC3DuhJqAhnigDS1Zv3QUZKDzECeSTJukTjR8dCruZaKM48p3yXZ",
  "key11": "3FwGLYPwGCQ8wy5KSmCn7cuE8fYsyZq6Y4ysFgjCDrdqSZScmHybGpf93SYA8sURKVSu5zKReBcz616JS2hbymi3",
  "key12": "3A8fawTkiAZEumwgRp4y5rbTbgEG1PQZf73RChPFdavx6RDBKFuyXoVhLRotavq786dg5S7MsvE2sLgsWhiRRc3",
  "key13": "XGatUj1n1BhKKJLtGTyyVdV4UXKMg3mExTAMuDpY2bKp2rjgcfABjTsQ3aTNUGJWmkPuX1n3Dfm13AGStWyRnSH",
  "key14": "CADFGJ9fQNLaiD3v7NQRr2XeJGDc7966YmxZLMfDAWJXDSX6PvYgyBUAVtE2Uoq9KUtfugmZf9oKoTw5RDzSY4z",
  "key15": "QR34Ffhj87LcUMWT5Ady1i8rPxjWj4WBF1Dowt2Aeg4K6nRJ8sgqPkNqhBpR266huXtnz9Pi8hRgUHLv92HxNNE",
  "key16": "mBejvyFzL2SdmDXAbtzCch7pZ2pPoWHxEhcboZzL7HMUjTPedtEQX7t6noMKiUQQjWPJue1423N15X8eMFHM6Ay",
  "key17": "5ATFCnswnXvAaW5PQfk4inFFxUmCwwTZDzdiNMDXL888URLy2UHAA3bnucdND27yfa8pXgvtiw75sPXgRa48LLzy",
  "key18": "2A3Jhxq4Ahtz17hYGHWmws7PSvfWF8bSGorXieFYm9Bk5NVyfWyVjia1D1TKS9oi1xXuSBwdFREF7jaBwzv8M2GM",
  "key19": "2Pih4wk4fuvuvDHTABtfWtPJCUQq4Tw68w9WgyHkfzkhneSsExjZXagsiquY7ZnphDqHPDHpfDXovZJUcPFK2dgJ",
  "key20": "29eet81W5fqeBwAdV7r73mqKvCLDePEHEe16TTVi9z2errWUyJcmrc7rRAwkZTb6huii2ycYXcxpetVjZSszvFnn",
  "key21": "4Jc9m9zywSfAdk1oWGPbJXiM9hM4Ygn66JtL7CKY8QU7ggfyEcuVmxtT6xA8PAUNtwHbjKTQxcL7CvNYDafeZXpv",
  "key22": "2r5sXocfFDiPDbvpB56xyMRhGvnCWS8qswY58petxnVBsw98J1YSYY8sETNKXfaDMXWUgofrLAPbRy9XMAoNbS4X",
  "key23": "5d6sfZsvhPB4KwkgNisqebsyA8WAUebuV2Sa26FTL9co1EY17Ayot3whMzKyo5Ns2czQAj7QcZdyYt33UB7hLJMQ",
  "key24": "4TyQAuD7mbu11FidCSeVuVFVgez7A9CkCDt8KBiyCQ9zeeRCkBVtyKZLDsckkPkxd3WkhH76voowjbDxcqDtQ9Db",
  "key25": "efbeujqLUL9NLM2tF19T6NtwhphuV8stWjdnPf9UB8EyLFWK8vj1LWcUMiYdk2ThykqjWXmS9kYjXLphtjBebHs",
  "key26": "33mmFpjKc6EqKGjGoWnhLCztVQX9Aqq4id2JXfwXVVzcn1kx9pWLMCC54q5yLxxNsMuRWNRBxyyju6f1Ms9XfFYU",
  "key27": "4RAfy3k8TcHKDPDddDEs8co1cYveoPf1RAS3FuVhH3S8T27FfVaiRXiiuDgHPouDRBt6KhtnoTSrKWdaaDTJEfVH",
  "key28": "5wgcNrqbVqPzV31UvvMg4ezFzr2fGmC4gqXJTgXXqbav5tEwgdu7Bb52CBmG3ry6To2GqSmFdvH7TC8qaLexSs2x",
  "key29": "2MueeC3krY7zkxVnid8PqHSSFgib2yeCGPBVcF2fpgEgC3KYQ4fdf1gZVn2pRiQTVeWeWMJkPJh4S7cH2AZAtrf3",
  "key30": "3Qvt3f2fEKNguEgBvkspd9hzNgE6z7mvFqfZhL6v2NLqvRXsdapacqaoRpFGDHMEPBVzqcu8iBUeMH6JWGkyVnQi",
  "key31": "F3vNEsP61htkw78vtjpHyFmm8WzYJ21By97HeKQKeobTbkz3KUZpgMB6poYkufkjtvN2RfPLk5DMqakWkCcCmBF",
  "key32": "3KpcjMLXgNvRnEyHzTMrtsV18khHmWUFFYeoyqnHqTc6HZGcPHQFKsGhTDEkuMCJfWGoTnom8Ws94T9PR5fLriAs",
  "key33": "58pvB7GnE7yG1taBfcBNRrcsZEV9tuqHmidBPNc9SxGoNk8V918ed5yPw7L1xJdd7e2KVh7WBtYBvDH6HDkfRkZv",
  "key34": "5XLsMsL4NTonkhQ2BWvaDkytXaXxctfNVgogrVRZu6VDWUSgP1Fpbv61DTvnSFGcYeMuQsByNBe8TcNNZMsvw45e",
  "key35": "5swMk2kqusF2Mo93PWuUnqQGh96XKjfLUM87vCNzBB59bpbnpguKL5LrPZ45iLXwmM4Nv3fVe3WzMaKFqXhGnVd4",
  "key36": "N3Pd8B26XRaRsFm9eN4qG3S9u7vVm7A5uSd6zJ89JqphrKYszf5mhxUGCcGWKuryswWCupeS8EFxB9zoqjK3U4A",
  "key37": "3KjU9ZSVPSu15tzpWsVmxyPgYicdkfQSzLgQjjPtgYMjGagHyDLmVkjZt9eK6rQHPPWKMDVTKxesN1sWm1UK1PG4",
  "key38": "Ma2QKstKsSoh5gja9gZ9Gy4jYMpLsgfxoz3G8GnFxgiA3N4iv6UENHn1XQ4Qkj4WsyrJQNUiY2M7qRVLzcVCzLh",
  "key39": "2AuoSiYzbUHuwvdLd8izYfHYThhjLChDu4sSH41cEpnCgHcbwcgVhbuTeRTNxWiWhZVY2xTErzgmZiJENcinzJHb",
  "key40": "3tYenLpXAxKkAtggKBW7pAYk2YKYGjPBbsfD6p8HjwSi6tLoAzb34udKW4E16udEYrMR7SEphntsF9zfhDxE2XMw",
  "key41": "3r6JCiREeAof34nFEQazPg3Ht4ErBbK3PAsaw2691KR6mSWaqNDHXFzVZJrEEBDcdFPMRQabdMshR9zUUWRfzyeY",
  "key42": "4Xm2eRobPRWvsmgjUuUHndiTN4UKgDGfzYt93fH8Pq5XVPof2szK2zrN6FaaEA3VoC37Zh9M1qLCv5Xom3XT17gD",
  "key43": "2tiM2ZxLAgtddtDvbXTdRsHLFw9zxV5XeabHkeSmAT6pQtw18jQ4wwaFe3TCF8An2dHA7MLt7Wu7Pi6M83Eke2cL"
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
