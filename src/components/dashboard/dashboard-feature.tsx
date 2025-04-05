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
    "TnAgWYd6gyLdNcuhxYLN1xq6F747nujV1i9Excdkmw9eQM8P8SwqXP5MYux3PKMJ8ybxc4MdDdnTTHfnaLrbJbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vg1zDq3hr8zV5Ckbakv1NDTZDrq1YgJFuUtNgRNVosj7RwRruWcDyMEAYKCpTjni1euGvdFSE7dKLYGYeQgwhY",
  "key1": "4WtQyuoLPiUmZSbevokCm2mNqf4XQHPJ6He188xWqdKbQSXz3BgJF9SyenKXsZJUA2U1wDCzsj1sBprqMZDHz2Zs",
  "key2": "2dwHspGmS4BmNb9B8HMZ5LKQu7g2sxuJkNH8S31SewRQqT97Vs81V7yjtHN6okCvAMXLHHsXvoZb5Toji5AEJJ22",
  "key3": "3gqRTk2VTDjoLxNecqftv1mcvCLxBpKiyE8AF8jEkz9XxJ9rM77h61ExxkFjHZrtFCFurfBEzeSVSjfJMqUj3Ujq",
  "key4": "3zt7A4HciEpj2mXrd7ScRwdbarY4a9xPgZdZXE6JxHzuQQnAkiRAAUMEth2uv4vE2CNMXbzUdax2Fh3Wo48Vbd4G",
  "key5": "22tEbbNjnQHZTzuG8oN9JvMr7kSBrk5MXfvgJc9tgRH1GaifRbUP2t1dMMMSMXEMqNGyHcZiTRe5At1kLk6Z2wqn",
  "key6": "2Mquej31BYPC6QAuMcabN8FWVTqGdfVmDH8aZd3Ea9UeuDQk7xwqGzt877nSbdyuhzCTGdwLZwUmeCPUZn4eyr23",
  "key7": "2WrNb4qyiqr9NUT8fr7MY9JUZtUmtQ2y1MriwzniuVZfvzAckRbLLaQenoWpxhPS3L2jCPfxxax6qkAjzYgmubKT",
  "key8": "5jSRxQ4cezeY6rM3DJ4ZRjknvRUrZ8e1Z16BcXEn3R2zLV2Y899KKnDjqtU5pz7s5Nnnh2PdwV6gzeU6DaEhSQT3",
  "key9": "2gi6AisLbHPF7VQxBKYmyY2bsrjd4JeY8SegZEMWRTfsJRNXPQ4hd2BSrAm52KmhaNuXbwvM6gMLB3K5Sj5PrcEp",
  "key10": "yvwyy4A7GvY3uRfW5uw85Fcdgk1fP9Hz9wPxNqbJsN9dNHL1zmAdUiGAPyGEgXJn67es2y5dUmppHGmx2mXJKou",
  "key11": "ySa7HFj5rHrDTRoJs3jTSywe33zWahPV9ce1d2RvMqKkNi6HddxoQ6qrpWBAh4qKSr9YaZyqPaM57LxM3um8nL4",
  "key12": "2RsgEhB3bVXYRvQQNA346EniJT8rAehZcQUoyjRKN2NUF47asWcNebf6L7c2JdCU9EgKd8cv93JA6qxHkaALiE8Y",
  "key13": "2WSZ1onybQ6hAWBik7c5G6xtiVaJQdvo44gq7NZswrk27t718TVHkZywxte42N7G9HwEpYHtqLXGZeCGhHA87tdP",
  "key14": "2kVubrRdMrKLpwJ9gLYF9cFMEDqWpfiH2nLpz5Y7fxkXkexQoLEbwCUByCJ75miX1RWPtgSPnUYFQmLY969Jd7Kd",
  "key15": "3pTsGVYHpthfzeoasxZcXritthzZCKmoQTbqQ3QWPoaVrcGCrM9NLNJjoaXBz3g9jUNtpr6dhz57JgmFWweT5REu",
  "key16": "3bWsUHJq7KSM3Ji5uKWMttDNbgnaGkZuj8vbxmXPxLJJ8nWT93k94W7NKaQbEscRe17MGqRgcnLA4fRuGFsMHVLh",
  "key17": "xsX2Hr47xqh3ET7mLZ9ZmiqzFEBdbgrDtztGHdeggBFL7jLruXVSBDmnfhmksY8jRKdTLVVqNXUsensjYCtPu5k",
  "key18": "3dYHUTCyjsGi54n5shSUUibKwSKgZvUGcoXYUKqSQuxpByr3hnhMbgaDrnzyERo31FynRA2BqmymDgdjGqRWvFCU",
  "key19": "3kLS3ZADryytfYS9QrdPksaRZqTHkKYqhhPN2y1dz89rqvvz5mVaDgNms8jnzPLttC5rGuBm3ks9a2rRzTWMJSaC",
  "key20": "5tvAxRmP3xHxhdyWVxietV3iVDXVyHzy1JoFc3gwrqDsoDrZZiQAWMmRbbx3SCfzbHd4rHEgQHFxLksVHJnxp3Ru",
  "key21": "3aELnm3U4U1nX1wbrWFQjzRfvb54MENkutP4yfwaNFDLCmJPzRzyzSWZBjqjUT5MiTBBQqMmqj5DhippmwJjT6k8",
  "key22": "3CBV8aj7pp7ebbtXqaduGGG3GoSjLiopeQtBWWzQ3wuQr5TzNZxVpV4HHcRGVVjFhWy5Lj28BPFaCUdnoJd7CeBR",
  "key23": "4rtogMfiqbGTvmrq4ho5VQosxizvxdPuscDB2HbHP8HjXSzYsPfWagQmL1wSmJ6QYET67BLvxVUkuvNrf8kw77GQ",
  "key24": "4dAyTtbh1miV55o2kSr1cRB7mxmTyMr9ZrSsCLrMdNHaPhyxKc85LByieMTwytttryR491qNuzB1b2jHzp4otX1x",
  "key25": "5pF3q4xsi3RcGiqTDSAtmhR62ziu4vUHHTcqB7z4YvXDFYPdWiwFzDyWxf5QbVzVXqTHaiRHePecZKGWWyZ4ibMU"
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
