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
    "3Nq4hQAE7TZocGg7p39Kq3dd9cqVCmzP8PbC16G7hZ1CrYx5ahdbU8CspNomyzxqwZmByXjAgZpUJyhyxgEhymeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "457TDy8pTzEmVcjMAyj9jumZeHK81eAyrTxqxDSJvNk6bz1XWFWPCyLqEWS2Bu6HsWJs4JjdjjB1QwMBHJamkw5z",
  "key1": "3qnthzmYV9w8AYRD2CSMCiwYbFTKwHzTrzU81QQz3eKM8sUUZ8BDunKEeUhsr3GCTMChsutJej33EYidAnhgrFmB",
  "key2": "47sHBmjRQF53NFzvwRzcPWdHM9JVo6katmJot2vcydAqsUgnC6zaKZcnpmgZVsdTp2GQdPZgqdGJ6dtdUM8xqh5w",
  "key3": "2sRKRNsjpigiMJ2J2o9EsCFt9jTvBtkXtfBeYGABDRZm7wkpGV2Y5MkP3ZS7s3zN6eaGb1sKphg7YHL2DKpYwei7",
  "key4": "4i46YfXCwScpADXZyZEQXU5FHQCBDrcXzF23eQfuYT8rHBDhJTzveL6rxPkvJxLXwHBr2NJAtggaysDGjsRm7aAJ",
  "key5": "5ovuWRawZtrA2Jabkc2NkJjECMqnEHVFguPNLQn7dwgwiudfFE45LtDGz3dEjxxVPx1fRvvSD7WUZcTjppMqeqnV",
  "key6": "2gRqevwYC7vMagBpsbR4Y8U12q35MMwcrRxzJrTYxva16yeE9JAPANx5gAxBcCjSBxBju7JRGpq68ppb1Yj8eTdn",
  "key7": "uaeatPr2by348tj9PQecrDRqiCsTazENtRcSn71orVSJ1DfJ8mJ2Vaxo8hLgo5Nbx86ZTPMkQ8o5hTyDCJDT9x8",
  "key8": "2H5bDNFh1NNrYEbLhLDpSfswKFHTCRMtDjbUNmfiBGVbFgpFaSJwGDrF7q3RgiPgqkoMzRdRgWnpdJjwtSusFurr",
  "key9": "mPefCzmEjqDmnHjzF4BYrWcP2jC1a7tQpDeetTRiZq1P8rjyfQFvvbyMfRgKCpfPD4CaJDpN6X94BS5S36Nag8r",
  "key10": "29J1PtHvz65nCcc6Z4nS15MHS3F6md9LEi3GTcjb1fsychayGRLJ4P29oBnAg9sNogpqBdHWfJJoJe24wT6KGrxf",
  "key11": "4XgFMBN79TkjFCxcpvizu2LsvrrEUvFZJTecFSFGZyzecr1kB6NYvE7Lj7MXuY9GctgaHSgJgeHFA2A8xbbaZqp2",
  "key12": "4h1TWXhjFmz4GpkQZ62RBukf8x543SoL68W8F4bFRrSMy9DjgwGJDGQ7G9SQxsQRssvdKodr1o931YiHKAnQpG1Y",
  "key13": "s5C9L5rQgChbzC5z9DFXs5m9AWeJWWfGWufiyK2nKcPrffQnHAZ8wQibn2vnP2VeorSgS6sTgsy17QLTsg6okak",
  "key14": "38TVbSukcUujwTsXSPMhpgLev4LcgKkaL2GTGmuMPA5asQKbRKN1Lt7KLvsEPKFwhZS99bJKDMxjiC5DwFeb4rF6",
  "key15": "5fFWyAv2tQHutitG33KZQGmWynkYv7rR6DcnLGTq2y7xo4toYBiZRgzv8NdPut2Lbqpmi7AzT6Ftw7YSYChyhiW",
  "key16": "4M6x6w91bLK4koShp853UgvAh8U1yn6fCX5VvyGfpzTq1KUj2yNmofuKd6T5sFiubo1zpZj1ZCd1NQMWwj4aNmrV",
  "key17": "5abLFqhXmcpVb1CQvRPbzAGjCXJkw7X1VKh3RsQnuwXBjubWhZrmPCuo7WdNRTzaQGY32czhUnTVtaFo647boaHn",
  "key18": "3WxZRySEEHmZsjWSBQWanrowi4SFDW9Uogg6cP5asaKdx8oGNA7A86TwdDqN6JRhNPJ8pve8hNfrytNVgHLRpk64",
  "key19": "627o628MbtEaCiittES14cPDaRMpjCf6msesRnUGrSC5cYCRLA7xn91RETeHkNjenfjfCZm1T4qLbRYuJiv4Pued",
  "key20": "2Ztj5c6YSnFeJxiWcwegtf5gYYq4iPcmS7vgKijNiRX2uMA9UrE8bBiD82VmNmmNTRmyTiKoiBc3JnHRzwuit1zT",
  "key21": "5tZXXT2DSBsZa6BPt3B2mKZK1wp1NC5ongXpxXCx6yD21oxC5uWYpr1rxzyZ9nWSRDXUyt4cvYDedjjJr6Lgd4Jn",
  "key22": "3Sbq1SxHLXc6NDQcB7QmqJyzhPPn9fnYPBaku1qpYkfmP3coQ8UGNwi1JcmiaX9LGnHHiQuSFnPPjwkCT4SyrcXS",
  "key23": "2PyFGstmjKDrh5QzPptD4p8EtxFD9Qd5q1VUckyMCLGM5NVmp9tReJNQS3aTm9HaawC73cBnVBKQcEkpNErgX3P6",
  "key24": "4qJujjND151KTU4AoYBswuF24h2MqbnZ3toatkdnXFZ9CwyVLMo6YAM2iH5yEDVAMwLC2YEZ2jioaYvcQeYF3KJn",
  "key25": "pJDspkp25X2x55oWjWBw6zcbM13TNXhLrbowFevgECesKzMk1w48mUaM7wgdxWqDxxempUtDA5KvPPKrVRNhnu5",
  "key26": "37i45AnMZ19KxbhwpGWC5zGBZGZCJRbLbPtTqumFcuo3zm77Q9AiXxqFSbL3TAWnxKsGKzRCkKLxjCtXY4PtRCJg",
  "key27": "1ga7FFgktnBA5ujjb3KN3iSndXSXL2yf5Fd2ecUAMvjufu5jc3Wdv1Qp8iZ5rKXb13syiv18ZRhR5CToH957RmT",
  "key28": "3ZLby4qpyTh3JGoH1rRWk6kRNQ8SRbnLWso5jQfB3TWmfRcVgzC3BBspmNmDrh1ePsDuJjsDXo3qsC4GA72Pg7U",
  "key29": "wtmHshponqYD3xp5Jm1shgNS79UyZ1b6BbAE2aGG3R3UHrb65DUUXfLGNQ4DHDRUNstL2gkPb283maSF9HD31ja",
  "key30": "27st1T4eB5pQckjiYz6W5WbULoZcaxTUBuFu6PsnfnnDmduRfJVaQwfxPEsT6ssAVoFeHnCeicCtaScw4F8zeHUM"
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
