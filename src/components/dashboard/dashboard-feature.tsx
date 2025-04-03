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
    "E4hUUuEsXp7ce1hGW1ydV4nmMrzhry3i1m3aBMVT8Wz4FuqS38tSe3g1d1GG9rJYpeXvnUErrFHxJgj1qDbXJ1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkBgUHhQyCZdKonM69qQbX12SQQ3Bc7Pt1HNZiYdvATvuYxjsRt9sbpStoWH19yxxwVndVT9GFqCD9Ykvjc5YrV",
  "key1": "3pgRFxtJ34LFdyfjpM3VDfoHwtSbWu68981qyua4jNMaDG6NnULwCzaKB4dtArnEU2XWsbNLSsofanSzC3znqcGc",
  "key2": "bJi6gW9QhgrTaJYPYrewhexzvPmvDFB9mKLvJmduwwA4AnVwpYmQnCGPu5dBvALsvBpKsoebbSstNbTpfbGcZhz",
  "key3": "3oJF3hcwhuhpKqtUJXznSW6mfZL8xtBkRtfbvXZPMyR5KryUh1NgKZiekpUsW7q1syNViSQv6NnP78jxHyiphgeE",
  "key4": "2a5YGwBRuzkRbPwVEfhnrLHmMKMbny5M5AwRRYGNgbQQdyp7KH6xtdhAUZeu88vSqLdhFoNLoMZ7Eg35EmHBbTmU",
  "key5": "3m9La5VHc7Z8hjfgQG9H85jwnnV3BzoKkFGpcy6N6HS71eQV48yPaoVMK2GpfVa47UC1LyF3N77wpSPfP5GhUzML",
  "key6": "2MA9zeqJ6JzsLBQUTFViDScG24TAwkw6isCfHhFYzq8be9NMUs8gmwFvghB5yw2oUAJxciVD8STTPaesTJKvbHD9",
  "key7": "4AbRgdqRdkgKTCjMDibYBeyWBGntdV1LpPpKhopEYf6aggbUtLEWDB5FAQ7CKaQY2PxympPHZ3KfVAFnNcS9Vwfu",
  "key8": "4rK9CsS1weuTThwKJPhr26aEme2i4pMKkexkehUxwp71hovZKD9XMBKGbV8qUErsrzpdJLwjmHuD4NUj2qiRuF8n",
  "key9": "Z3SquGZboprMVYDpfGjDCZNkju3xqQCK4mSWo91DepuDb4kBjodU3jjRLBeKN58QEX8Ux1H4MDFWZrtVDz8725H",
  "key10": "4wfnQ6M9akEoWV8TL5LszYog9LpAaWN3ApcmkpXMeQ7MnUhvNivfYYo4ZfzPffKf9V3oCe883ESYJ2A2AvoQSQKj",
  "key11": "2sv5TPVBuVyEJpCsc7FecwunBUXajg3M8zMvjdWEXeDQDtwMTdprznngwo7LxjEJHipMrHUQWRaBjteVba3euKeZ",
  "key12": "2Sepfso4fQWUKkTdzaXbTJhLp91dTFa7J58tBLY1MyjLUd84Sktp9gJPbXYuLZzyoULnVMsFU5yMNe2rie8ri1kS",
  "key13": "5CobW3tJxw6KcT8Zp6uqP9QsGoca4ngLnGhTYAgkY2uyGksmyJhoCsjAyw6jniEqSpVDc6hv6rNNNTKVQUv2eZtu",
  "key14": "4RMLxDbcRtcTkarv6Dfan4Kv95wx9ytRfpC8dsd8JwWLcgZRWmgDY7oLTQjqgfvb538CdHvNRPwaQPyVT7icTpb",
  "key15": "4zjsHPM8KGZNgPMQBnbBRJxfLWa5uvSSpaw1JE6KZWWCo5MtmgMZ6XN2d2GJE6Jmz2A43qtfkQeovbB5EMVRqJH9",
  "key16": "nenY3U4EqenTz65UsStvuRzfwXUc1BRYB5uQ62t2wiEjKx2Q1JbmNRziPD4K5JHN1CrJrfxpoNwWirEFVKrXVmH",
  "key17": "27MR7MwBiBiZUm9E3kL3tsqXT2AB3qz5N8bK8k9BZvrnxLv1WFYKoAJSTC4QoC7YYcVkf6d7hULZdTH1D4ho2yAi",
  "key18": "4sPmCk8zRDnU5b7kTRLzhk4nA68d7JkW2c34Dbn7PYuqvvh2wrYJeSwpMcxtiv6aKtk2ZbgZbTsHiHFqzWfCe72X",
  "key19": "2u7C3c1Uqm2evbKwSzRg17voWkYw3Yy2EtDJtFTVuxdrX8ydbtGQMbyA9d3TMsBz6ZvoQJcLFVY6XbhpzQwXkxPL",
  "key20": "5YhDmEeCD7Yy5xwNmo9MoondDcAgvDwtmEFBBDC7Eb2kGJJKSfcakWaccW1YjhjcDrkvsHxG2tJdJiaWrjh6o1Un",
  "key21": "b1t6qHzjshgytcE9rCCdBc4igpUsq7xAETURKaoamaLuU3bNvUut6843gaL4piCfUNEswRFjKeziykM8aKyEUj3",
  "key22": "2bYy9wavdAEUMk45odCi4Tn8LuYyPbX96UxZ8sPyacLrPTPspmbpmK1TMDZnPW28837yVDe5MX5VDK2fr4tCUmqc",
  "key23": "4DRb8oH55wKXGStsGEHU6roDD4qDA6pwXq1k8zFErCeQNdJb8oPXXsfesizvP4Zo5TSBMxDMHNZpjXv685n2bA5h",
  "key24": "2J5mm2PkCqCbQJ9BDAG66XZBBvc95SBaTwMn7mvZ2fUAPDMj7g9LuoxGcADmjRXJcPVt3TKYSwXJh7aMUAMD7YQR",
  "key25": "3eXs8swMBbaXwcN475qSBGJr9Ac9RSyn9nowL9vQXr532cKajk36WrRX2vcWGQkheCV1Pbo1zSNpn27hYDWvZAb3",
  "key26": "3bFe2UoGCiT8q42PLxx9ixxyT2N5i5t6r1jpJBCJWadhybrZHRk83uzC6W1Mm3WudE4Tj7DnCvadWgz7dZyvQtUu",
  "key27": "2tTRo1Td3PkBQWqanADnTRcapVnESgW5ARw3RztVZPKhqwvqZpWEWKKNii2McLkRjR4WxJnGwDuBbyzq8L8DChc",
  "key28": "3oGNK7JSSd1ftz9K7HDttz83kataJZm1Qh2kBDoVYAxUSZRd5a8XNbCYkCYGpZNaCv1yr5uoJuWKbG5QSBsbYd1K",
  "key29": "5x4rfUJtyyXRpWm2e5ba5BoHys9MdrZbJdpgFs5BMACie9YNeuGuGCk1vKE4S3rAK36ZRrn92NjKD8AbkHf85mXU",
  "key30": "64Dgx6nxUtyifqrheiLy7zRSDud8hkASYaMSQjieDKoSodH8cemdoeGkLwLNx4ZBC4g5tDGoX5WYsL2XNw1yscTC",
  "key31": "5rUBF7183QfPRT5rPT7M4Jc8V1gbQ1GtbYosV4rbqRy87YJWDWm4ny8vR9zcxxZixmndfEMjuWx46MyuoWkSchZt",
  "key32": "4nMSwaB2H7oKLxQUf2wbPGUWj74qKPuJybqWWa9Bb96aZgrsZh7oDCA2WjPwZ1i56vc3gWSyZ9bJZe28foHuSLRz",
  "key33": "2hX2eo7CevbGRbuRHLE3KnjRTiQoNmWAeH3GD4chWeMx3ANs7zKBaU9WWerdYncNnpX2UwC2VWztJativgUZPauq",
  "key34": "5HVfLx7jJ6KF7c5VPhkB6shhRgQLbYPyebmqYc3ViH9oHHz9kcAqXFM2QqGRxhcoKG1F9cFHmBX5nG6wA2c2D1N6",
  "key35": "3XKgy9tvVF2gi1NSBmeqqVZ4Ndz4asZ8wjfdN65fDxtH4Mu5uiDR5STNiEPFWfsTS1VKYseqa7kvHLv8qC1WKWUq",
  "key36": "M8CNiks6P3r14pokV7ZhKCUGs1PcN1d7z4nYL2cFguXia6jYUQ1mDGdDo5pXGXrK8BVWE73qwJrY6PyQcNUTA6S",
  "key37": "2VagS4jioTSmAjPndkMo7HsvhVJaNAf55rgT8pJXnzwyYs9wA3Dnjtz6uQy4JKWbZKRyaT6eN9Jxns7bG67fuo32",
  "key38": "HD34oFoDMNkW1CQUbJ2EvMrhvWNKRxQX1D6eDHHAvCedN57w8HqJQE2rqVGGGEb8DCQtgQDG5hneAMUESmi1ijw"
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
