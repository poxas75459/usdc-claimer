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
    "2V5Ctfv4m3nAqZqAuZx2V9kBYNgCk3tkHWSorJWgU5wCNV7EFHp2F9TRYXYVq3ihAyUnuDkVmAEKwTAM5TCZWXw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfvhRGbDNaiqHx6iqKnG4qbeCBGjx3aDKdy6HDAPg849R9QvvwmxGJh87wQvLJiwL8NSLFt2tbgJm971ajgWEDz",
  "key1": "23qSmzsiN2LdWGBL3GveuoAh2jj7cHp8XTBchoEkSe4iNSfvaoTamaDWeoiDrS8xFejajZC79mj6C3aNvkYJ5d92",
  "key2": "rXcq12c7oRmUhdS5Aki2SnezSZdXHtsGV1gGDndgdm7KDgbjTWicdVBfN5Kd7kgExAtZA98UJoEhBr7xPJxbSss",
  "key3": "Cw12dYHZ9XMWNMkyCf7xqXyX9PN5VJyWVDy7CqVPU1sY1oGG3oTf2vSZPfcwdtpsGswaqi6nsqMEPqyc6VApufL",
  "key4": "2W6Y4ZWqdw8Nv1bWq5N6snKFHsgoHYV7XJBeVdhmC1XAwd6BF97kfjr3iEdph71CV1nNjVF1rodenUQzVkimHn2L",
  "key5": "53uSE91v79tcGBzXiLm876Z9EBCuQTSChWPH3LWhecSvFqoaoLZFEn7V1x5xayLV9p9V1GMAa8DsmUEtseCo3Nit",
  "key6": "4w8pwrfynS33oQjKjhSwUDwvmmCue3CCmU7sm6P2AXBqzcQ1SrKJbzXMhZVEorKfc8eUHVfB91J2LxvnxBYdgq32",
  "key7": "5sXkgwA5wUqTGJbm2j8qi7P9Z7W9UzzWiZHzgGnNLXHDdp616J7zGFX6UNi4rNkMQzUqLhTX17FCdqz75YH5QK93",
  "key8": "xJ1BJqnKecoYgi6DZf5hwNZ5Nw6vkjXZcFMrXdSsJpC13NTJA7ManXvHdXQBBj2G6wzZ61VwpjZSmJ6yib1pqdV",
  "key9": "MQiqFbi2QUabAnYyrz3o2faSismw2BAqnMmHwnTLbTNmpFtLR8oej4HrVqNUdNVFu3ARE3MTyUDV7e9iU8PMio6",
  "key10": "3hJAwLyhd7w5FCEjgQQGnn7MDXT3Zc2j5wPVQgCxN1JRNhMNX2zojb8HFLMMXz4eVRfXPEkQFL2FvzjNSyVVFwQS",
  "key11": "FJRvTCij8QMdpZsr7LcWXPX9as1KdnFzmQNRqA8T55ijmKb9VX8pkEpjTwDCMtiiDDKS2qCF7YKWBVWWWgeYYE8",
  "key12": "3teapPUykgoYX39eL48o17NSvezfshbqonozsm3ZpPYJCypug6vsQUYjAWfUfv2TJ8SGnDeJ4rUdtAWSbd8J81x3",
  "key13": "3NJe9L56tJzjvM4B8cXWdcyyiWsonjKLq4L16rGZ3gMgszckUqHYBRGRx9Yp6ckEpzMEr1yqV4YTJXFRNinkDt6j",
  "key14": "1xz8t9QD3PRczVehJUNqxbRWrF9nogBFSywXdJKWiuwRF7fiPVXXzxcAg7Tjny6TaBhpRvEgj1aCFFamNn6fKEM",
  "key15": "4k57GgLsyfcBoM5N71FYh6mHwX7NUP1RAVSpaUaDmZjBygu7eEk6WNXAHQ9VpU9QysY77hi4KucLUpjJnM2caaZe",
  "key16": "3k487pvYNaoxGdmtpA3Lo8ybEgab3K36BohdYskWNUymtB6A2X6ozM2dXduxHL2mUWchstwgLkdwkTsJZunsh2Hb",
  "key17": "4YJcQ8zogxj76dxrt6kXPMSex8sL7MCPYDxap7rosWEUzGG8F7WdGuRXo7odYLUi8EeGgrVPe4hhCMVk4VfVxXKX",
  "key18": "4mXgG2DQqWTsfzbV27Puu8pMFjMZcWiT8xcTAM1Lfwt1jGM46J1qhBbBLDeULeEGeYsMTFaTMNRsKCrgW1j79GvR",
  "key19": "THCAMoDvNiw7moH4fzWfksBEKmxQkyjyd58GZwwHCXLgAFFLNiCQKu4TAhrAhBvggBweQychvkTdKuMJuA3VQYy",
  "key20": "2CkUx14svWq8SrfZzc5wpvH4d1egLEMGpFSHN33Nzyn3Fxo9eqkj7z4DiC1ABGxm35a8qgzuXAP4ooXogjQVQAat",
  "key21": "3BBF5g42gZWfXdX1a3avhSWV6LjnFm15dxXNAga5VG4cQRJwa8LTHGn1wvWs3jbKJTRyGyNFr9GBHbaqqCcyxiKP",
  "key22": "4DmH5waHZfKkvheuht7zLLi7JRzuL91kGQvRySzjkaZWQ3kFNHgevQ6Adh1caAtHWxKtbePBcHJXnCrrHbDvK4gM",
  "key23": "2YMrMyKJnc4qvnkjvFAfxDSzpZtJ7rX1jMoAJyWWXPath3QKRNwcnufHdVP4HdV4jbPHA3rWJ1TLpsjbEjaU1ARo",
  "key24": "4cE8k9fzBiEnPkhMbRP549kcmSbrEFJd3f9Hk9M9TMTghNbA1Nc9AcLBMpCPg6WpqrV6U33hsN8vU4NpBz8gSK41",
  "key25": "2UpVFo2DkRqFZwEpB66Tv5wnySCWU3cZXN62YnNJDhYyGkYdFAGnkkhttDPFtprDwneVGN6Q4yf1LHRjxamh9ZPC",
  "key26": "AdHjjHB2mB6KMHd7C38PMTCh51fUbu7QNAnUnht34P89HhZ49qom8qTtwps3AYymCTzK5CF3tAyVYVjwxfezNWQ",
  "key27": "ZTofdks3zmUW7ygL1s4bEZBbi9bf5EQdefnS74VX48HwSbQ16b3muRQ1Q7DruLksMy3DXZ3z1ME4R4Cn1hWewQz",
  "key28": "2E4ZU9FR5sSDPR7ao4uaU96FbkWjVPw4ukKBq2KypzQAyEGtjdJS6cyRfPK8K3zA6nS71R4SU92euErwqdhJm9nn",
  "key29": "5QhqPN1jQJJren8H8muVQoUsEG3dUZdsxEbtyMhEEKsR2FDA1KN11UUg4GLTGGQVagxiDBxuUPYxHCjryEJQx8xe",
  "key30": "5irpzj8PmjgV3aVmCjHumPDy4aTW1kDBVGdeqQgDSi6McY8EUqNEnbySAgmPkVhkCoGhWVaaebjkC2WdWrZunf5q",
  "key31": "3NZryn9H39oJHCfkSM2mk4Vj7kkJzddRb7HMk3wxF4GM39eWNgucTwiwgcXfoJAT5pmNKEP5JMfFR2ggA1a8bFxG",
  "key32": "5P7oqNmYdkRxYQEtew6FyiNp47NTrp8rfwNoCtbohvpnpemekUkVUeSkqXj8NHinR4pGmmHd9KMqWTBxzDiBZEo9",
  "key33": "3Avt43zHtmoDaEB87CqvNf12QJrRUiLkm18SgPjnP1EJJwPjcsZuYiFckTBSHoYULTS8B45STZHVZnr8kA9WRgwU",
  "key34": "zozW9rd1hJcp5VqhywNLKJqGneGGgkt448qZzCEmjjZdsPQK888UsC71z25AjhB4aUyGVVbkrdeV8oRnCXnBtC3",
  "key35": "4WnbcGW3YWhx415PM7jeJbZ75gw1834UNh91oxpC3kSwokC4asCpgaJxzAQVLyDkbGh3Qz4zgVZEeiDLQatx4cYd",
  "key36": "4T3ZjyFMk15TMcCK2KCyRVUutYXePxSZSqj2PYHzkyDzT5WZXpgL9Yue36UBbt2tuYayeH7wosGaqpm629G1RXmL",
  "key37": "3gyTfPKJpuGY15uXWhUdyn2Dwf626qeyNavP3Q8WUFLSiNNnm9v39cQT3FNUPeYYWftu9wzEMrmdbWog7EPyQbwd",
  "key38": "2e5WQH7YUsAKhTKu6X4ncb44SAGBrgzKgmnibERN3ae3Qi6s6bdzRWVa2egBFyCzxGrFeR8gBiJXeSq1nhtKW9io",
  "key39": "5GqcfFKFswohT5XjEDATapoNHko4jbYoXpeioALAFjTD3NYDnk9xAU3zR7sH4QBG4upn7VEZERQpw6TAJhHvxmek",
  "key40": "5ngeSQ7T2b6KY6Zzv7ZDmekHF6im24grNWAoWUL1zou8j8Udyhp6TYMdJpC38oSHNTgc6WRAmmS8Rnbn8MJktgxf",
  "key41": "2y3nQjwaa7TGGe1YnXvNi2AVmMVLCvns1N8DWQCYKovCg9j36XziXF79WCvJ9gw6r3P9eTzW42zLAEANkgv5dnP2",
  "key42": "2GXAmHLJsujrXtGqxMk8tXLbnMFXnvUpZLL1PvQ5vaH8G25Dhmvn5hKJzQtNC4b6cVR4CXvWa3dTp7xhEg5PX3PT",
  "key43": "3hKRCi6iFu8Ny2U3o6HQGYZ1vN8LizA18sePqRqiuHpsMbv6ELPYzcezbs4KjgThxrk3ae1fjuyW38SBUnS8W8qA",
  "key44": "4gPuvMc5g9ZgLoZJMu9Bt1bDTzo1M5ws9TttjQJMFisCfwE7xXL8BzfSu1mTb7qhqNg4uqKZQxHHsubcUW94JBVf",
  "key45": "2c2BuZ5B9JvvXU89B7ukN3VEj4SyfRA64tt4SZvQmF1QXfF5PNdjQFyLjBwzppVHzUNoQvCLu5b6uhUMQZzqu7Wd",
  "key46": "3RQvppp9cMsUyHKRQUokTAcnkfCu5yMnsHLJtUcenf97sryt9DcFLWicsxyGcMqUCv5ExVzycWG5cT3zwRWyqxFY",
  "key47": "3L5u7H6ThE8fWqGuZixLUS5fR43tsxq4geYaadKe18CeFgdNW7hRCPLcojEpKJxvAQqwLavdo5Jdf1EPSjY7Gb9x"
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
