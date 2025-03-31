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
    "4YKAojNx249yLNr3J5J3bX4fsVttA6BpHbiWwMvPVbu88KLNojHX8FSWS4oFQ4mCS5g4vewPspGTqmvbsWrEyp5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFjDKBCr7qhfi2T7Hok4qAeG3frWmJ5D6dLfYAVqGEQFkfmFGCxPrubQGnFkZRVTDWDzPB3No4SmBtbHZvDwqE9",
  "key1": "5F3AMkxUMnxAeaDBHwQ6eAtXZZduLLKHit7PWMZD3DLj31y2U4T519NfC9aPjkrQeycx7BYxBqTjfq1QTWFhsKJZ",
  "key2": "4Ys5e6rTQVyEQoi8RUWB7tWumEUFQgJaJFJ5BJCTo5iJvAYzm6VJsQT8XYiY8rhfeB1WuphUrDvnvCUp9dh9cX17",
  "key3": "3KLYSeHY1xEbJD9VfrKUgzdTRhufzwL54bsVUXRk8NTo113xhFXqQDdTb3APqeR95htkhhofKQFvBizkjP47Xx7J",
  "key4": "3pUwxGZPTdL9TDoZ2JK44mqfNPgFV3vmD9CyDfLobigdkAvxVr9eY6f7ozaadDH7RnTW2M1dYSWkR2CpZDWSN913",
  "key5": "5wUd1PcFsCyiPeHM4AeLZPoZpyDnF1xXWRQwzLM3nzZrhYnRw5aaZ3afUqtBUMqFYWZvju5oaJY4mSZN5SjSRreV",
  "key6": "4Bbwhk7SAT9kGKDseLQhXtEBjFpvQ1tAi341Uu3oRunq3hxgmEsKHbNEYfUMxd2Geusi8UTdU1AP94NV8rzBjPps",
  "key7": "5wn2sD332x81WXF3rXYTK8zufFMeRzpktqfUeeu3kf4q78wAdkVopdSfijquE8oFBPLcHMfi8RSXfJD5fnzvAuDB",
  "key8": "4BvLPKjTmBK7AWnhQSBAdoPqSbEh1x1rWt5bU4Wte1JXun1entdhC3ACuapQY7fWi4hWokV5cdVeRX9e8Sij72eF",
  "key9": "2TCrsm86kYT7bNYyxv2YcY9Bc9z1MnFiuQiTSTFrksGc6Hr21fZvU3tdmwaM8p6fPWDehX4PBZyHVAyLVj4yWn3t",
  "key10": "54BNLijXp24W4h1vkefhGcd3a3cCKBb7suZ12E9QixbCXKyjaqnd3Hs54bkT9yknzPpHwV2QEmSeijDHwEBfSxhb",
  "key11": "4DoPP2xfyEepvNstECezknSKTC9RCKoCdEcNNkytCxYcdZpJg76zvktdwmfjUqyXMXH2osdv7ceDCi8wrWtqSHvD",
  "key12": "XwKeuqqtX8PSV5nfbV8H4Pym8LbskCjNvaDyYbsZHqjRnVXN3GoEojeaUwmE3LwXe68z31hdRQM1y9F1QfzXRxh",
  "key13": "2VVE8KpF8yrZ5ePEH3F6CGctu9F5kD1vzSM3vGsGDTBWyUY782UVB1WLXHt6fopLEzakiV2zKAbZdm9f7nhx4E6",
  "key14": "LhncsCFEtS1XfRJfgEmpv2sqC79h7qdUxzf2LQnpmbpTDj2cx6v1gNGVF2oU2dtqVN49RRhjWgef4zcppZX1UCX",
  "key15": "5EymUWV75AFHdDhmuVThsuYBhqnPyG8CHpnQYJAMtgVcMwUGhM2gicMaPSvbL7Cqz7pXEQsEhUhLLXKFtNMbDS4b",
  "key16": "32Bx6qWFNKNYWFLgsMv9YdQTYeXb1iMU6uYAYkm8m3PMeFJiNVj3X2CaE21Vi6Ujj3zW7c95qxVftiUzB4KVTnwc",
  "key17": "3ZuTPyvpze3gipczN3uXJdVch3ce3zsgnKTvpts22rnxDE3T8g4upw3Fe6A1siZd7zKNhSeLYYEouZA8NsQutvZV",
  "key18": "5ufpdABnhHVhBo8XL8fo5z3xTySECujwx3KX5VxZxff2nxmRX8zN16Q2pG5cTZKpWXv3cngJMCUpLZJgj83Btt4u",
  "key19": "Z4AaaJyNUSKPaarueEaYw1g8vVz1sSfzByUbkxw8WcJfsuarAVXV4eJXAkHP8SZm1k8S44Hy8BE6N8bhTqdZZdS",
  "key20": "5cQK58G9vg8yVRoPvuJxJP4C776zP33SK2p9D3zGWGZRb9Zp8nNkQ1Fy4xuiu5KEoyRp7D2SkVfBYKVxBUg9h67P",
  "key21": "54WGr5RpBsaiuWooPbtAbUxTfbpLJATuPai4LAtUY7fkkyWakGkgvzpKqPJm6tnL9Aa87T1oVDBwJAXrznH4NJNQ",
  "key22": "61VrQ8ZpARUYVaXBA72qBLHdrFTDzz69mTvKuezN7JVeFTNDib3LwCf2BuEvmpyomNEQi9p2Bm2svH2FgfHYr2GZ",
  "key23": "3ob32o8cZ4YJnfY8BdHCvU6hVx4DZod3bxpNGj4yi3XdYyEEHe9xDN8Vew2cgyw5UBdorbvrVPrpij2SNzF8aXby",
  "key24": "PM2YczwQKyDDDyDYY34G2gczJiefWKacZF9xd96rqaHiJGF9a1th8F1hHhEvU5MqqwqyFhd1Ncn2e81yvPdznqH",
  "key25": "636ti2kiNF4kXYK4d6qaE5N9Qt8UY1dApegm9xxUqGL4wdB3Y1EAmEbzeZHoXYpL44Wb5yizwoDJCaMD7SSnuDs6",
  "key26": "419WARz6eqUwMbSdTpgtfYULwDS98p3KMzjv2mAJyEY9H4Wzg8cL2iComGNnLKFKisDdko3kSV3kp3ZNpLYcmvvY"
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
