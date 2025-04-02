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
    "5xujpsD28iJyJeYdPKBtsw7pWPYQueKRQTaUwWSkQFvMgxTjYTKrQf8EakfNCRUJ4XHLkYqUQQgJmC7TRYbDNGdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DiEKJ1DUCv3vMvkUEEqUkR3AZfo41MYcSVkguxMUJNVG2ig7WNb44RfRy5g8mu9uHGyCAzSSueXLkvJpqWeBP91",
  "key1": "5bGG8cPW1UAyFtPSzxGVRvijfeBdxw6dJY9XrABDmc7SCowiAz2nMbKRsaSEZjcQPfHPk1ZczV4QB589u4ntKhXe",
  "key2": "5TQgcSDwQbyvU3No3hXEMjEnRiNmGmUByDMQzi7KoBkMpNyosBdjUgoLBpRPJHvJAgf2qyxNyCUXmTNMDXzdAXGX",
  "key3": "3ZUEGxd24HMLZiwXR5Evd9eUcu7HPGKSHQPDW3VFwG18pUJBeXuSuaL9aEDoKGCz9pHgSqM7dCaeqt4r7G1kPwRx",
  "key4": "2g3tTYy7d414q6z7tZtKN66HnjYFRwaj4x9N4GRkThCk8yWH8rSqRbMcu25UJGLjKp2z7YeGvB9radfLDgqbqw5p",
  "key5": "2Hho48CpwSHgjRgDnh5oYisNzT8kZPgr6fcJgSDhG9faxnmbwyvDvrz6FpY6sckRHAW2jj3YiZjbzoUVnDCPRj1s",
  "key6": "5MLCCMcr6uzdbRsCejWS7HmBAQEhqEG6MEPzYZNcVrP3tp5MHrMACc6jZ4VyR2mSLiF49pGwAgj2hJutaV4XB7Fh",
  "key7": "4dLFjhzjavGKmvTgsuLqQ7nHoQV7XTJ1nfJRxaLmLsZ94T5EAqMi3cMyA9JuMa3FCpPoAKRxqfcob81VMgXrtGbJ",
  "key8": "K3wZp3NWyBWA5U8PHGfeEhNfXoYJMKDTbA4hy1HRxVy8DGMm3YAXR3yxXUaPpeqgYYGJAwhYuS1ZNJsNBTcWpKK",
  "key9": "665i3VCPq1DdBcJHDacUijBRcohUW2ooDSovxqbicPLBk7L8PT6vaS1ERfJBSDDA6qfEsjJJuZMZ2koHiWC8Nwfa",
  "key10": "2BBBzzSYa1TPeFSGroJJjNvPH5wiz1rTGruBmySB32aHLKpobbFF8X6gD1LTp69z97D5Do2qqa8wMASha4sT6iPd",
  "key11": "4UfNH7MXJeTD1CJ5oEDAprTzL6SWLZWkMjZcTbqPB1gAtcyKzec5DLaHrK6naNJsgcUq1szYuF9xx7EtbCbZuNAk",
  "key12": "2K9LeCSjhFeeRv9mx9CW1LvETZyd6qmiZJt3EK4itMPQQeqMuMBHDDkgpfjQd6CggeXihSdVD2EFDLgXundbNQHs",
  "key13": "5UyizubTS3FqA11Ja3DnQHZGSFP2kZw6FsPbe1gKJAWEgQGvPNwt62dkuJrRmMi8sSF4fsGf6MbwYzpLQBMEimiT",
  "key14": "3v1CeMwj4dsYea1X4ZWJ99xxeNU9JHs9bNt4rGGJXqqvMTM1xuC1LZCULgQpN5N87NdsBm3pHu2UTDkiD9r1sb4e",
  "key15": "8H5gw2m7yFFfGyZnQcddcSAh2WLGWHiQeQvrbXDiMcffCZ9w3Q6KGtEEv6GMF1xeXErKduLzEpZs288iQz3Bu7s",
  "key16": "3stwaHWq8RWPHwsnEin1YDTnUCRfCAR6AF6QZnrKRVV7R7kun5MBnMXYNFXT5RtcFwZ33CUvvYjHXvDs69UTN2Ri",
  "key17": "5atHrdjsx8wvdjEsszCyYDbGogJNWKBXgtYBdLAaii3UNY2wS1AWKnfa2fLMEza929UQvkVYM5njHsmpx8YHNYTr",
  "key18": "3c6UdUY4U99wC34bpcQkBKSyRzyXeZJbqv35mT1VwbPBAbMSiLsjmUoEKSnv1yMiWnH5ddFGu8Y66dAEg37noRgo",
  "key19": "2LpGzLL5CYNiriiwVo3XdTXJTERJvUJyhPapmhJcATfyD2tyxM5uLtS6bfUqhTpSydUXa6Z3sA1Ponipmdu62PGS",
  "key20": "2Z6TtDJ5Lko2LXtbh5sXEsQrndhBsjQmvkhNu2h6yeex1yifdrwGcppagQBXHwJP7vCMdKwogtQRSL4ChRKpW8Bf",
  "key21": "4ef6ob1bqt3oJ5BhLCpqUeyAaLPibsCNMByFgRcmLMdi9AgVVdM6RZKJreJqvGEHBQsLmZbp5r21G6xeQvTqdKhL",
  "key22": "2Cea2RwjkyCJ6xXtso3W4T5RBjWAC9rV18QH4mgtfZhh5wqCqyq4U3Ju3xg4ic1c7kJzJ7ihdzSxn9FB5Zm2C8zB",
  "key23": "3vgmgwWPbj8vKXPFwLbrVocZDA5xrgyGkwHHg7x3foovRJHRvjmtY9Fwb8PEAZhuBfiReHx17AxR9JxTRFDB2X4y",
  "key24": "GdNXgR7kbaeTKCZtTGLx4QvjTMJqJpuWEQxXLcxaH1Qv9MwVoBBfS7GCRG4qAMred7Qei8nubNrHpXfn98yvsoW",
  "key25": "2dWHL4qH3cEPcxUS7HE1xdaHHkSHwCW3pYD9Eg6RtGcpRHc3sx7QLPA7mB2GVCf6wvhGjkYKtKFeNiAz1aYjg6U2",
  "key26": "2QNS88uHudtmjkEm3w4UBWfSrZs4LS9kBB7rY6LJ3xGKynG7mBPbX3wq7dm2NhiFGbedbg78n38XxvBCimJRFh8W",
  "key27": "B3JnFjhKAjCuqaAAYN22MJzd8iQ9NzWfot26qoBB6wVe2UPG5mfgvBXcgoRdBr3TUBNwVG8ceXYMf6rXuYKefcW",
  "key28": "5TYWj7kX1DkyirtneMGUWmyrse6n7wF8uVFv3nmVrzVpg2fF6earBRPpbzHoZZTNt51KgGuFvWqSb7RrPjxwv6Qp",
  "key29": "MnTg33u4UigjG9eCLrWKBFejwyiPRQns8n2fPC5G2MvYLftcrEtb49DkuECL72Q7xfYCv4k12iZ9x7ASuc6rNhK",
  "key30": "2YLfMXVRUAEhJva5WHpVoUaf3YMiMsu3VTHcFFwWUrTv2UemgHJiiTRTQfKnBbRjLz3Y7f1Y6BEm2Qczar639vni",
  "key31": "4pyippLzvHUcc6a33w6T9n188rdTTfLTCgkUQrK6oRSvXHdFruEi7Y6Fwkez4AvLo2JBuMweZi3uRQMSYAN6Mrh6",
  "key32": "4tMx3rFhFuYpTDDv8c7RnztUu2U8Kov7bAgDpxXqddRG2J2KAhostxnTW2pNo9e3X2zfqF7ysoGTc8JsBgt6Rnta",
  "key33": "556dWJ8XskDs11rgk8rjb2353BVUVCtx8ZEnLygtAkeQC4hpNJKFHxWy26W4Ntv2tvG492fGTYBg2zihWse3SwP9",
  "key34": "4tz7DsD2mAJvQxFRsQYMZ22xBk3Wn6obdsydKWviTFbN5KGqt3aNgizrFw3sMse19QWRPUKgMjQT7p4SdRaG4KLV"
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
