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
    "23LbzBbvqzuaUNHkWswcKChk4h7qUrEcTKsgFBAzq2EmRnBY9DcXor9iUWRT1eMptpGdzWHEdT1ALFM8xrnpbMUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUQhSher8Zeh4Hb4Pa3V4Xg3vxir4KYbPeakKs5NgJTyM2vcW1JbsNb47zCXM9Y5ggriBWQ62fJ3ACpxb839rjg",
  "key1": "4Bg2ErRrk9Xim1NxUDePAxaNG4H94Gjq8hG9NP3Ksdy65dex4XWfQubYNjggBCDX1Re72LwW7yD8HKR5DoyNtL6X",
  "key2": "5CuYgoih438yauwTi86F9hUXNTrux7ehYHdeTxsBetCmdbJ2cGy9rJqQtdpauGWry91HVe4vB4eGEQidYfFAmrmy",
  "key3": "5mzzeZwnUyy4T3WbmfwsYkmCngHAyZ3PhWrWfGE97XFRPSx6zmGu1EaaTXfRZJUZV5mbipukEATDEeRS3k2RAbNV",
  "key4": "2DYjg4WXSJ4oYkjeZkQ5pxf9yeRsNNVLKjvx5dbqGzgcLwehC9xBJvnpsa7E9MatfdGgVBfDDCKWJWBqfuyin4iL",
  "key5": "5RLXoByFNHExmM7k6tTTZBvb8ydR9d5PepS8n7Ti3cXAnAKCvCMk1u8LJZwVNJQMzTVbHp4voUpKqdN4MahMNWuA",
  "key6": "3kd2WDCU3Uj9KWfYTtkFXTRU2KZdf4F2v7yFu57eKUjG55tksEepMtETmcQR4MMJZ3sPU19e4x21jWhhAZShX7rJ",
  "key7": "4mNUjShXYgVFyQHqbsdigiem3HwEN7L8o3E13mwDjgoSZysv4ZJFMDcpTTHpsKyHkdYQFjf1vEKttUeashtG2TuD",
  "key8": "2dS1QANgo64MndPQMK2HSv4bvH2ihuTRMnWS3QPRz1ASCcjGDNjvk5e6FgXZUNReV8MKr2e2KwQkrCAHNxBHP2pm",
  "key9": "zxuJdf1y55tfYSHaXs6puro4mhjxNdTU7e2N8UZPi6dA1wT25keX6dHSucENGnbaDpFc6Fg6JKdan9bAWKtuxS7",
  "key10": "3uCmKPWA47AEwX14KANVKMokVak692TNFDTynLxemjbSSkRCHbw8eDeNJRSztrJPnubqtUotCKRhbyvqzHST8jZm",
  "key11": "4DGuhXjKvgBQ6CWMoj5RKePn5JTsRnk9GTCyzcWnsPPPwx8ajmgE31FT7HB4aJtCHGsirZ1X6XBaPENByqEpjPpF",
  "key12": "Taa95YpBqtjMjhNqzF6ah7KfAAuJqnAR382X26xgVvH33oyT66oQDjYEJ71BdeQqY83oDWtF5pxVX6nEgmyNdW1",
  "key13": "3VdUaB8trUUVTM7EfLy1pBHN7g1LDK9EkxhC3a5DxH2TaeEgdupQWcD9KPqWMkb4EjvQQgHfAzGiozmgpm5GADhD",
  "key14": "2MiKWcpbBo7DG6cNPZs6fuwMmFJ4W5CFF1SXz6LW4pcTaAGmh2MFKJyAaLeSRhLRyz7abAAoUMLSmmev5mwRupuS",
  "key15": "49yDNWz7QLNmrnGPVghqdMsGi3VkNkFqDLuHcByfgrBz6XcTrt4qnz6FUE27DDzr2SXNaemzgZdS8o2pWbiDNGG1",
  "key16": "5t62AQY6pavBdurxDiGH7wyAqFm1yPEJz64p5nQsutMsbfcKCb4wt81kzab5ejtqZE52cip7LufYQYKk15WCUDXQ",
  "key17": "3YcQizNU1T1sGQumMPxJo5ySXkdrw6z72ytb2vXm9QxDTqJnhaPyRU4nrQvFDyPsdD1A1LFNaZXpuCLyYkEWki4y",
  "key18": "3qGawNzLweXXwKbmWJQo6qUSH7bMat5VGMy4UL4B1gJn4xvjLXXWhYxd7VGLYSxH7ypoFZtwvdPgLChGj3Vn6LWP",
  "key19": "3zGwHGGU9ko2q6H2bge9eJqanXW3LwEbxkZSeAkSw19zxq3RJAKz8kKJbcFUnXJxM1Z92N1uhWzp5Vh9pfUTqFw",
  "key20": "3RtZz3NJ9XjKfp3FUNtR7kWqGmRnyn2pugphVimGR9CdXChAqTXWc3iWioMhpQJUn1bMKiziPgNJwE2btQ57SRWN",
  "key21": "53t5mzyjbAzS4i7Vbn4Kx5QBKsxTTpa8MQReBFJ9imAA5vpTsqPjqu1WQuQXSRcwNFyjv6A5U6ifcKqS1k15uW3u",
  "key22": "47i3HfdTEQow6iaJSctU2s98r74UdwbUW9EwKiW1eREVu96qDdwVW4PQE467gARjnDFBjLF722vc7krrXUyYsbqv",
  "key23": "xSXaSbpctKgzcEq915jKain8BW27XncHFkubBdhdZmYrG4qNupHmWHY5MG7isyMfZ4W23DuMtC8KdBizyL5qrUT",
  "key24": "4jsyBQ5U87JnzxmxDkzyiwsjXqZKjjKJFaBs22MftaAKiZotx31M8UxmKxj8W1Rp8zp8eKPihUQghiYkwCHmfgdY",
  "key25": "5aAmRRdadCZiNtnkXgbMi5KoGXwCaktYNumF9vnVJ8pdgGz3YGQTBGqxHemUW3J9D92d1FosQG8goMpP8Ji7GaXM",
  "key26": "4PnasuXqNN8HzrgL5Nco9a4a9WgADfbehcu3HUpDwU5YJpXfWuP7BEX3WskcufvxgNM3S76Rnn9dmx4H8kHJkv46",
  "key27": "2kjEweRNiZ7pRrcgsVWhAXisnvT9FF3meR682tQ7EgjXYhXEXCeNWKK7kwCZ2HEatrwyHqrTPmFKWr2k7S6DywEb",
  "key28": "4DdCW3ThZ2XM2x3vRMdQ9WGuFHJvW1SNoHcBZTH5rF6WigQPmi565hUot7q3GoM1Wid67h8bUtDgXSR5YZYcwC5Z",
  "key29": "48qqnfVZ4HzxZiYHeF9w6e99XyviZ58t6szeG5SA8d9jmjZfP5ZbGPuRenDhYG1LgbuLsgCJLiFpV8GPaLSPmgXU",
  "key30": "2nJY4wwui7XRzmYfrgPonBx3KBQhzsDyAcQakzNLbCFnLxMSqRdaBsuZLm28bH3thSgZjm3n2Ey9Lam4ugewEjtm",
  "key31": "54LyEwv8t2xa64APY5c3xZKkmmMqM5KbP58s23RNqfEo9XdKyb3hh3xXsUtpA2afVhhbtSeraaWBFMMxjexRViMc",
  "key32": "3kGhgHwrwTqr3VKrHdyYF5sekdPov7FpyfqovBBDQWxki2b2aj4DPL1ae5LVxKcfJzDiGPa52tN36k9AzUCNPPaS",
  "key33": "3ExHka8w62vy66uPF65nkJnx7TsRYKwLLua8UJU1kNbAH9jxCBCa6sQvFRndxF7mArd31deuyyvKY4eLVwnsUs1Z",
  "key34": "2GrmEA6oskeWHke8hrEGLMCXCjRKqaAZKR6hbByqtQCjnN49gBd9BkNmj5gKvbAjzpKxhKuz8aiG2S7TQMipeV5m",
  "key35": "2oEwKMAmqCb1ynHtxh7paMrTnQcYFTRWYTRYZ5Cv1y4whVAvFbKuSh4Hqx3FnYhb3FhyNuJ1GYvcFt18JSfcrpYU"
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
