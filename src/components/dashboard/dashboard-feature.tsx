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
    "3unruXMs3h7mc9QiYkj577qbehtijVnBaaeGhrmT9p6zyHUvgom5yMvcKWW4ujWpo1tccGBS5byZ7Bugm4tWsufm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27e9wFy6P3vL9GBA1Jy16GBSN71qceR63sst5BYg7m6sMofdJGJYwYhYw3ncCUm3VSFsBnGHEuvMQAAWVBMT78Tf",
  "key1": "4ApS2xe9Yd9uuJ6869ufZeicVs763g3bNi3KLAQURS8azEeWQsxbeths21FYKcUTPmzdzrRi5mUsQqsDXx6WAF7p",
  "key2": "5MYzsqi8wp71v2pcL9uuhi2NMuEYKGWbVcwaFJasexd4wG7QbruX2KLhewgecYEgn7AuwvPFEMKAFJDFmsaYjzLz",
  "key3": "BUMUMDPaciAMYNRysdQ3qXRt8N9AKXT3759JCBWrRBhaDpav4hR9jZfA4mRW1oZkd1zvjKUkPVqNJ5Tt1orYk2W",
  "key4": "3auc7yA1mqL2T3hEssanBDJ9Tmv8uncrs7PDhHFNpaopCVHUhYQuBmdomqj8PRh8RXDSggpLJwqcG7yxAVcKnabj",
  "key5": "3LCDHyGr4Evgx87ozmiU3Ht4heHGFLh4zgMUZ5NVB6cYCCGZyWLtgnr2ruygdKmr13AduqARZVpB6Qe31DRSLHeT",
  "key6": "hKQyxZc8gBFNdKbPuoWeQWAC26Mrqmppuq5T4JxWSNppQ3xpJHqvGT5gJt85LNR6ge47A5ci6dCWhAwVV38nXzu",
  "key7": "4FyoxLbNkdQ5SP2fzBaV1uctCYfTJ4MXHXSdMCgJdn8TRW9tyNPz1ZmkzEV7qQ1G55GGSqsnxDHPYPDrpamXfXBD",
  "key8": "28E3WoRnyrCNVQrVzT5RKWzbU6ZyseFeiFvW3aRSSqE3Y2VHoSW6qoA438ydeLmvvYXV2Sm5L7CUmzZ7JbmdxqGt",
  "key9": "5YoiFpWpPMmJBwfrRf9eTyvodCNQ6yLbwvcqbufw2PchhKgfrkwn3oMGj3Uazmksta2Hy3A2uYx2opjbGt89vaDb",
  "key10": "DFuUVQNN4g9GyjtBTEvknYGpvSdTvFBwc2BYRnvScLL8BgtgrMNUJ5xED73zVSRZn5T4GrSnVZHJ7rMg7cGW6MJ",
  "key11": "671sG5EWGAj16vbFjLc5ciodnvS6DkybzQR2EdDRrYKhLiooAKWenM4c98xEY72tqXpcUysVi5QzrhgAP6bYpcWP",
  "key12": "2xxA9GMgzCXFh5kpv6SxSH6W9E18GJBBCkT6LHpKEd176YgkLxGtHaNNbEiCNZuMMkpZn23uWxUrYVAQD6BkBWAs",
  "key13": "3AwtQChS5DATk3UnzuqWB4bYmUvQ2p4zZ3gXxJMUhNjGEs6U7YXn51S3xKYMcN2AskgcgujjfWRbwAr3h7dUHajL",
  "key14": "2RNGMQvoHo9XjocWzonuHwRHZqhp12FqPvYqXbAvcRQnmT76YW6jRPtr8LHeYoaULT4qVqkrWtNVEe8dC3MyHCAf",
  "key15": "5xJyW7KMsaEW7bBtu9LM3ei58cyQRSKCXobgAGoFzkwYSiGwSDjwRvEY2ZeCdiRNyF5TuFEFJKkUWhyWbPaBpDn8",
  "key16": "2WT5eJANDUMLdVVjww5P4oRPoSZizDWajZvWMkPt3qFMMiwNxt1B5EmgLReTXZxyScNpcaNDKEgHxEgiewqTkyid",
  "key17": "51hCmTY1LiuBuA8ba4sjEMwiPZmxf3xNwtJLmPo9YA37J4QPCDJrUSDxSnQCWTfzDFEn7pHw7LgwUiqKoYrccuGP",
  "key18": "557xkWqDCM5mBT1RJ1sJA4d5XBi2ixnUiUfLGsZX5UKUyBYXa6yuimFVL1Zoa9L5DNyUUw68sLjKpxUDqxuVGipt",
  "key19": "5dvFn8MERG5ysZZn2BxgHYpWn7jhffznMDHDtU7RMWBEGcvMP3JvKx4JMiNC9XksZhfRkK5m3HUCSHyHiKPhxoek",
  "key20": "2CrRQ524jkhATmA6api8FAf4vDqhmFiGgQKnKn6ebv2AVys38HnG2HfMkYRAafU2u387UyXG8nYgEgB2uWZx45X3",
  "key21": "5PtQgr3HXUebiYzihaFPX2vjAJWPRCF9DnVgsr4jfy4MCC4i3VwnFh3t29LQk9QyUXRzKDbWK2EXfU8jntbmUpqa",
  "key22": "45TAnHCLck2Kc35ijp1ucPjfJ9nd1mBx4B1vv1u5hZ6VivjyxwyyZDL32smtBWj4ApwpdtuVYmVx6pNtK8Wrgdui",
  "key23": "4dVtfEtbhiPwGiWwahXXdoYGSLAobx8qDMySq2B4kKT3zGMgUhC8bpyfz7EYUZED1Ugg8nQTVjQmXE8fomraCZZf",
  "key24": "2iK5S5MsSFzGUoFSHWeZ2f1poyGkFXrNEfTNtNDhQXpez6jwcyKqV2f5bSDmEks3VMcbM6Tcqj3oV8fWSfugZsFc",
  "key25": "Dk58tvN226wzztoZ8ygZW7RiZqm7PSYffxuRzpuwaq9ZZs9c6Jxu6BL6t5kjvtiD38SNRicqp4j1cNB5bSTsfZQ",
  "key26": "3tTX3qXtKaY9s3FXuzSAQKowfcSgAaLtrXajgSCNFuXDWcVZHtArFDdx8UdhaUNRRqHVNdGyLKyPXRmLaAzGvs7K",
  "key27": "4jvni2h9RjsLMSxovEVJSthsYtn8Qc3vRQ5MhQpFbkUxuQHipPiDxgzaPLmcywRwzg8kgHWrAef4XRcAUYbgs1tk",
  "key28": "FGYLLxJJZAWYQxH9yRyoQwk6T6wvbXtrYzjup9iUt72nXPSN1rsbeKe5k9YauvH1EEPvi8eyyWAPwNFYnJCirC3",
  "key29": "ss8Q1z1jtceZ4v1y14ZVchTT18sF1tw6U5sfvU2263p5XEBbpUVWE8nMwWyc29bHLQ6EuAtJw4n7WKLRwcsQtCd",
  "key30": "4AYaUU9skWQv9hstsPduqK53gEcpKEFHY6HanGPWH7P5e175B1mVECc88RZ2YinaSLfakZSNPXd2ArEiGWEQMwMj",
  "key31": "4JAbHCdkezp7Nc9NTCGj2Fswi1XD5qTsoQzXDoN3t1QtTyCPkKhhmUGmwnpPHJVa5eeBizAaohchd13sAa6FGXmz",
  "key32": "2i7jcZ7DGGUTRFVSzXFZB4HYHmnJbSrLfjkCWUbEqSpJojbNXvgCyUjADdaw59vqhXWW9mdGNzryuFpTVdga8XVD",
  "key33": "3uhAHvgNqHAzmXThE2FamEJqTnxBEvPKuXnoBb8TMdw3s9LsnUEaJ4WDjH1vzvPQSALqbY2YM9KTgRaNLz5bRrfk"
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
