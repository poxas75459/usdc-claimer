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
    "3YUmybNX6DJBQMmSu8voptCFCntVMToijN4eC1Cpq6P5thbUzuuYXc5MywcuJFfpZwAeKJkFVZ6tqAp73YrC8qgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zncaFaeFBbAP77Rx1cFaLAyRxzQwFhCEKEj51eNrXg3rRwg9m4kppaghieEMp3m643sHDvre2GxYNBfjjFhsfC6",
  "key1": "QP17EqfSRrwK3ESUwA3xnD3nMpKsuJfwegqqTWWnJSRbs3PG2mVWEe9kWso7YM8zR4nB5sjH6yhbwxPm18anbom",
  "key2": "4uvoS7HbTwMxgNxzT5BQC8pqJnEchUuJnbB14uUH7vw6mtMNyuwjphXA2BMsYLidJpb4JCvTHvGZjGMTcQuKqMj5",
  "key3": "2NxG5n5WuDpzpKwgxewmKfTtVRcKxdmZzWB4hNaKy3Bw1dGKcF9YHZ72HETFnx162AiJQznUuRS3iBdyDmdmoqjy",
  "key4": "2Bmixin5ERvTFnzUxyBG1hVxeD41AR3izdg9Y1toxxvoCGrsFBUUt5qMtu1R2Na31hhGrxKXK1cuM4GbRrA3vjSo",
  "key5": "3K5tnfB9ZqaGX9uvLdaJgV4BLNVHZhCBMskDh8MvXEsJmo4TbEyBphm2j44z9Eh2tfetPoUEivttTNugt6vXGBEx",
  "key6": "2dtCaS53nTDh5waqnMjjGy89qnvPyPFq4XSXpQHt4DBa2ZBQ2LHbsYa5P8G1F6e8F7Yfb3r8qZKaWgAgSUyhPTiQ",
  "key7": "3Qayx5QELSu1mwBAKha6eNo3QsyHsJUGgh8tJ3Vscn9KSq25HbX61svqUnmyZkLttxwssqBiuR1gGRzeceHCKBQe",
  "key8": "3QxsjYYFk859tTMmLb7XgbW6ift263aK4z4pbPU7eyRAmnRSbXbpTLgFZYSBPWX75hG3QFn1bzqJSuxXruKWEJLY",
  "key9": "2NdDADDEej66e5cQnWFUa8z8Ft32qn8XDA2GGdSQH8Qw3wBZYy1QUWjphgdzqpjZvDMkaMC3gNjoZnNiKqUMQcgy",
  "key10": "2SP6hUedZd2nZSDSpxUNrwBTVh1nBBtr9SjqxRkSojfzfuRqALVAH6YXkjwa3GFqdNDnAS3tM8H33X7uU7PLa7if",
  "key11": "4yJj2mxMzA8h9jrV8Vb2S92mg6Qh8EiLorD3U5vQL55Cv3RxFyi8tma3211Cb72xW2SdLJvbXShJ3YBZyRMm6Jrn",
  "key12": "2839zL92VaHLKUK8wcP7hL5d18Jb4MZ6NuTrAKxBtceNW7MsfXaDB64p8i8zmesh23R7bh8Ha2enM1dFTPtCuxEW",
  "key13": "5XiZUA9wTYVBDjRAEsofXd3yn4nkTzLS8q1iMx6UsKUp8oftBnEcZPHAgA7hjap6ewwBwkz8mcJCiipZDFnwCf2C",
  "key14": "5KvayheBYDL8pbZW1z71en9xxv4eehso9JWS5jv6a5vc1U2wWkwCLEGMHtKU5AcnomFZ9EJ8ipkPmZwTMfDN35mS",
  "key15": "Ee9ReNsDPGcTQdRz4RBgriXXsvuiY9e9mzvg5riQBp665uKNzyYbV3zeoUCzxyUUWaP3CeNboGeBub5yfCL9RAX",
  "key16": "5UBr5KLG7itZpmcW9qLi11WzXPptyoYCAZ7pD3ugBu9S42S3pBevF6w5KgmzbkaVKUhwoZswy7TsSaU4YiU6u7Pz",
  "key17": "JazFFvxdMn7JGC5c4DSKnrviTbLJnVCpyEAqsjGRkG3ph98htns99Zhu6QCd9NsihxoFALHXmrNa4ziN1v91U2g",
  "key18": "3zmz56rgxYqQYxeHh1C6ivZNSodszkpB3y2HG1Uybr2TvCENzZUhXo8A6RqRLACktF5cdjNxceGow7vwvsB9F17e",
  "key19": "4FMDQuHNT45qNhXS4zhViCNDXbWeaErza64t7vmV6KWnzGbEdsacXYZ1pxMtRxF6upXwre5wRJz52Joq7LmCRNct",
  "key20": "64k3Z1C7remZkW3e72jSQjWGRBDMkhvh1yryzbLgbPRJe24XkqkpH5uBCPuFa1RZkYnvFrM2JC9fcp6RGACQjYAq",
  "key21": "5S13LoUTJ2Eqe6Ksc6CdWxvGV1nwGnUBt3GkAHmjeKTPXBDpsNWsP9yJfeLf8ju24HGQjYoN4z34tLkivuZmfq9M",
  "key22": "4B79BrfoSjHPM6c4wxC4s5eTHKhYe5W2XuurNvuxxX6TiM18JaRfFP2v8qDpEdzre6UGeBA6HbE4SEaUDKcRD3w",
  "key23": "2qJdTrk6mexAsjpjBcRahKiLmuBC2iZixP18PShRBRBt1ALmZTt8jhkua9e592nFKY2EmWmh3rufWtx6GquvSXpx",
  "key24": "5RBHTP1yvWgYwpDSk4e3ZB3vQzkWG9s3wAkTbdW9hV4GjmQfPGF9XkkHe5MzoUEbxxzBi496ci7GMFunCb1EYKFH",
  "key25": "KAgEbAZ6zaubqLxMHZWsnoEPc7RRjaVUzQjNWb8E9SRsppNh6SPGvaSysaEawEAsXek183d3HdpAYWsD7KuubxW",
  "key26": "2uG3QPfSbLkWjQf4qSWz49hzNy1hEbCfUpzAngQwJ9utzhBibQ2EcaWtgvCsKTxQ448cTyBYtK7jXavXELEPNwNj",
  "key27": "579niTQS6pud5UNb6efFZXLmpLFyDruD3C7pgiQ1ybddEtLpniVAptxgKejfnLzZy5scojBE4oYF4vHDY2Wa1PJR",
  "key28": "33n4xxeyBrZJ2oqVngkdqYzxU8ACyKUy51LMyvtpVDivKxUUjKPSwuoh2BMqtWxPYfebQ5qJL3GuCDkCN7jjfHWD",
  "key29": "2khHez2XJ9vsD2zW6Q48kmFEhupBa4z6o6LaTetZmAcanSSgf44RBu2Fu7d4Urb7dCeupCwuA7oSAk7PKbcKnp2u",
  "key30": "AGztgqcAP9g9xSLuHQhBwMci78mdQkavkTiQcHmp9RxsSCu3okeGrTvaCiXCK1a1rRG8jzwMD9QZ5bjAW9ka87d",
  "key31": "wxSwzn5HcSePkeW7DRwFTFrMGDFKfruBTcW1Z79o8EZkWhDtQdLqRtdbffv1MtAUJRT2vQbeTgKoFvpZjPnmfop",
  "key32": "2QBcBpoF2gQ69hmsgqicZdxPG6E3v29AQtJFbWdxCE4hWfzGGyEoRFT6EQRsaxjhbhVFuvpRziefc3eYKtgunQCj",
  "key33": "24NMGUta17uSK7qcT4bGvxinheSMqx1UnP8Gv5avABsAy5sZuJNEXXzM367wvEzVQFc8RZKAT5AuJ28YtEiTJWUF"
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
