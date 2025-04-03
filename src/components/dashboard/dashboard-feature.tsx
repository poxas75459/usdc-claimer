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
    "4mdu4QFgFzwymjax1evcJJV3Sojb53PC6yGz1foJMggaxPnGM1jXDKarLfS8b5Rih6ZTxxRnjx8Vq2wRLdnWAXPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bnEiSecbTeASUNvoNuvciAs5PoUvGGxSqSHxy5oCv14rTgAQ3rVho1Kqp7TJ9Wivp7Kgg7KhEKLKzT39z47SbUM",
  "key1": "X3ow1jSzzYvXdMWE6pcsSfaDB5ozGHGnuabC5PZ59bxqphyz9gmWJ33kC4Dg1eUpxWbmQPAMzaTbwUwxzpMqn1c",
  "key2": "uUWTptqBWwH6xpXs9oGRCZmE4sYUNdwLAuurvXHSig6vUz6CY83ErcXEHMXcVFFhXWBcyaf9ZnWtjJfdxM4LuVU",
  "key3": "3DggqNSVLg1HZ9mZZHf1LUnEXKsb5iUcrHmw2o3muUbcorzRXE1qiEnEhDLr8Ace4LNj8EiHoQj9pJCBkgahnieY",
  "key4": "25PxKjTrtXCR3fPTR7uKyK6C8Av6jLeB8m8r7eV1tiMe2QNAZddbMffA7bYiaPmtazTKZeuf1GMfHHDunAZrt3rk",
  "key5": "4SpbPfqSynjpKEgmTSdLgVDHzhPXPvy4KYyZxXpU9PeeAdneDMWffSsbJL8Lf9ccp8qqPEELciMhf17cfQnLE2cY",
  "key6": "3B7Wzkwch6A4QxFHNVacG4vNNiqauToaDdmDw7RuBhaEmvdM9XpXYFAqCP8PMvMuYiUQ23BRDkFvEfcwkVUt7xRC",
  "key7": "2aLYCxhqGULuc1sQ17QxwxYoeFeheexYxNiqzYCH32jgKmK2M6PJdDXHZTXG2rKEB6gANgXKYHVETJoY2o4WptGU",
  "key8": "24yChavZ6avFAtG4PidGdPDnmtjC2aX5gL2b9hN5kdba8niYVENTuJyThfeGuBLKk5NKJahLsTFhKfQn9gdFGPgV",
  "key9": "Xk8V2QLi5rQwpFVEC3CCku2Ey6mbUznniAqukxvULdaMTuZbRseWKk4gmZUV343wxseretDpJkxhBaTpqhrrp1D",
  "key10": "4qK2uEoMX8FRCrHsY3DW8XaXbn1446z8UFkKYgUfbn3gdmwxDVLcDb33ncq8btb44MkfSNgqSxCiXAHaqr4cPCzo",
  "key11": "5Bf71CVNw2Uqse7hSEWAS95BUq8Wt2MwMCyHxbLSo8VSBVUgpFVf84KrYzab3mi5hPdZyWCADt1g4eJ4ndGS3wmC",
  "key12": "cNnoA3qtttMkKCM1wmMTCognZ4iL5h3wk7fWxSC2T1miWZZja5pUjYNEdTVQpDpZXevxyEZx3dUmJDfVqeED5qY",
  "key13": "5MCJoX396PdQcUhe2YDMPHrxrbNnGHFyABVc5TYDV9Kymd3T1SXrh6goSYwym4meuq32Y4pzcqtJzhDpDSY9MSba",
  "key14": "2gA8Yy8WkCB78WnuruQ7uhQuvtGhUbfdwNa3VnrexM3x7Bm5hxvdzHodsLYaSRBbTkgDG4ifkkWDzqHLpNDkWfFc",
  "key15": "naUNPHeHy4RnzcqxT5Z1Yt3njWgENoNRoxSNXPtaQekwXjRpfmGgKQA3JaeYcDxk7VePpL4SqvEFQoh6MkW4tgT",
  "key16": "4cnPDMtWDJwy6z6s8568QyUTdvYFEEA28CtiSo9TjPogD3ED3zR8ef2CQp3gmQT5uKHE9Xcjbyfun8WXJ64Tw8UM",
  "key17": "2TT2XdGtxm8q11LKDtreBkh8B3kMKZRavLbRy4d8J8nATDrkwjULB6EoN38pMsX6fngettUYpQezmJEPmNPdjMNU",
  "key18": "2zveyUzReExtG8FaNsywDXCLALR4pr4jcn7WmFdKHz1jLsxSG1k11dJYgEDWFoapZ9idjuu9wgAQmbFkCoTDfnbe",
  "key19": "4bYxahGBYUgx32tkeCo6yZm7waVvGE8K77xnVYsZSzkwbufxseU5HGo89tu2oaiEU9vqWkcUrDbiehBDzYVJ6zW2",
  "key20": "3sLiwvKZhcqKTimZshowAq9NmQyisJX2qjMMitRpafikzMHLxnXGkSp7zvL6dL2CzHQpdw7EUenMZDN3UXhesANr",
  "key21": "3by2RByMyjPdXtsurABMDSBk5haGxzdMm8hTcJJA6VPZkSHrrNwEgtExN4j2myp5iR3ksQgyX2Q9QptDXcyjsbMb",
  "key22": "4VUUEwKxfW2nQGaTxjwEc4aJVJzy1AnEToeffggRBvzJmFw7X4YycF9X1AitQ9vrQ2C4ZqgT1LSyCUKZ1KYgCboJ",
  "key23": "5LyJxjF17ygLJgi1PBv3zecgd7CwFMSvRF91gESsWpJraB4H4ALio1axj868BRTy2kCWBAwbyBoBUfcELfbhXFQB",
  "key24": "VCfPok5pxhKrxjo6VsPoocitB3Sv3iGRxJWLUNock94g9BdUhBQWiWtNSh4iFbvjkaufQDeH6Sv5boff63GFJsw",
  "key25": "4v4Ujo9fL2urLYxdrYZ2pVvA6JP72NB7BFu97xHVPhNJibUrWC7MMVaSZ3Xus8CCYYNtvoLSVaKnfeau8HTLgB3a",
  "key26": "4w2jJLnTGaZV35Wce7eBT2a6v7wWBs7GKoAnLRpHC1XGZk6GoZcJhcrEBqSkuSm2Do7Un6xB8uwxmaTLbLnJzjpq",
  "key27": "NM2MT7pXuVTw8Xji6E1XQnSV73DFCwEUXVXkfmuiQakomUbeb2EqLayETb2PDxU39uGpcsUTZXGFxv6Qt6GULyS",
  "key28": "2npdPFWCNE3iag6Kf7JLafu4zY563BjwnZqoWjQYTrrhdJb2F3fduapS5HN95TXhcd5mgt9qqrwkYvQjYSppAU6x",
  "key29": "4NYcW2fWWnrV3mAEecVLkAd4rAWXfqqJewcYrvSshhTb6seHhzYTG2uwkYty5cZzrc6nkesnN8eLhCWrUXgpcqH2",
  "key30": "2wwJ3ZfuhjVsEdBTM29Dvfiu6axKuxYPPZLHWKRYzBP1hbj9BtZECXu1WAruX9tMMTCFQBLaiPNcDvcSR9BjfKqy"
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
