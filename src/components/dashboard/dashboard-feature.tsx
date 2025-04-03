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
    "yHFag3kUDjaMUHaSJs6wnK7WSWz3wJ7xEQ1Vrwp6ZMn5SAh6Zm5VLtZUow3tWC3xs3BZUQFivAJ7Ja4ThnCbefC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43uCFLQjAZhX6V6pTotkZnNm2yPUv664WtjbvMWMKBxHtn5t4CwepLmHVkqEQL4WxA97qr2QHsTNpfer9TnNGk7a",
  "key1": "THhGH7eUmAzYSh7m54qZe6ykZrwB194SEATEMu4g8aVREQCFBETXU7TAjmbU6BYcfTypgJCha9HLc2kdYw3DQiM",
  "key2": "58w3Tgx4UKkEtt2oiZ5u66n1z3uPdFfAA8exQozZeBcZ88AADircBDFUGJvaoC87qjCX6H1bAUWL8S6GMaZU1DFU",
  "key3": "iHjrVY8HCyPFkuzsk4BzQfp7ZdxEfdFYA9vt9YsfKASzYnBkSrbmpqHUZRWGy9eeNi7GDoX22Qa5EG5DXLwJT6b",
  "key4": "2XoaRCqcvnAPEXhi1sqp2f8bU92wmf1CuxdaFD9VErgQSLtpxXbvrRB3BZyiGPjs56y3ksbjtjBo4B5EpWr3JLvF",
  "key5": "4aoLk3LfqWzi8aFZwfmFKwgZr5nrfFtoS9hW1uzRHHnL9vZMPgf5VAPFiox8KAcE9aDRo1WhN9hSWVxRDN977dzt",
  "key6": "48ncwXB464hkG4YRZE7pZNRWYtfmfWQFQB6nZ41BPFCWyrXMpmJB5XHdXAHF2tYagqfY8GmFmaZv9114khQjgJBM",
  "key7": "5JjSmKW9S18CBWTQ3k27TzyBRoNttAsbLTg1EbqArYYxhehgm3zeaXsNdqZo5Mh3YoG8eR2mRYohp83eKxaDuz2V",
  "key8": "R6DcbLeFUZHEN7wb4je4WC74EhhW7Z1cXH1CfRE1AuMVEMAn4an8tAoG9ZZz2RpeN6domDaVvY2rQHXdbnenjJK",
  "key9": "5rFt5jGJuc5YxxnEVLK3Bw1woduHaL8xbvyYnX8m1DmMdAHccFJ9qtNtabArwkx1NfsLmXUE58RzYmuck63UDSoF",
  "key10": "8WC5EdXUazNX6KVZodHBBRCG9Z88DV1am3QhvDvE4pmVKyW4FhURm56qfP8wPnYHQR2ykRC4VREZnZW3Hk26Tr8",
  "key11": "iY3ttsoVXWzAwp8dNin59uQPvim1SR2rVGM5ovfew8rdPAHpZy3LU7a97tM46wksqDtXASPvJ7mq3dexV6Jivoh",
  "key12": "2Rfy5Wf7ha8dzH2zuVWcQ2vZ83ZSiKu1LbgnybWQ62i8BHqJsfviLCbGUsRvJw2fwExkkpfQzEZ9VxTnXtq9zfaa",
  "key13": "yr57h6Le3wPJ3e49YVBYBcykG78681RLEKG5M1BRGLFWWjvK4srvMjiGSxajxnAz8HKPTgFgYAN96bf26i4tenQ",
  "key14": "4mn7qzYYzYbyHwmxvvx1J4VfVdBerGoUvQhMMXYZhA94tBkMJ9PtzBS5iz44YcACFqbEFcRuCas8APWUehdEzHxE",
  "key15": "4V6Gjtk5HMJjmeUkVw5FrZFVLfB71QQXMo1Kb76kiMpSu3gaQe2XeWzZ4Q3vdhTEsY1CBqXyF7KsRNybgKCFRex1",
  "key16": "5UbX2Ry8VDkzMBcevbr1vhyR5nP2xXya3ADgUxvsSwKqmUP7nqG14jiTbQvvjQHHciBownZRrogMgYZBhQiEK6xa",
  "key17": "NS9pBLwdynMSy9dkrq8SyWCoSZhB83aWXP6UkYJCZoQ1YbQs2dAaFx3frYeb5cwhUegDij2PMBSGzfhKFd5qCxF",
  "key18": "4XA8JqxTpKJojwvTtcFZnamCJEJ1oKDYDkKDmPpvLvY1A2nMetUESKosYcomWeeB2msp4SmsbPuM9BWDyTrhRSCX",
  "key19": "2N2biDarSAhQKV1r1ffHFDrm7Gc5Tmf1BftvqkP46bRmsjpKLXouKstjwr3ceTurCc8XGdgZiptuHTSa1c4gD7hZ",
  "key20": "365hASnRMcdBFS3Y5NpQhspVD9fXryaGknHeHKxeeN9YpqzYSGciPqUZvqWX22st98eTX2zPZrsY9o9o6mJEcYrV",
  "key21": "LDb8pK4uZnNQAq4JikYuB349fHZ3aZS83eeCRAYEfDjQvAtgzC1oJkHt85mohrYDJzayJrtgmnKanb2bLW1VL7q",
  "key22": "5QGjZPq9gqGyNaUhyiXjmEFTdxnRyMQkBttwPXD2BWAeoJsxUr6hJbwF5ZxsBCDx4jtMGB9ayigzd7pFFQYm9XCC",
  "key23": "5cahTYBa3EwmSnKV8p2mc45AvefPYb3kGUbdGm3mJyUHtrjz23jcNpcCRgh1WPhCKtvdgtcqzYh3GWozzqc2o5Qz",
  "key24": "2J9kRMdEfekCDhim32xtgWaVrTduhxyKBRugU92GFRTM1VC5AEv8CQuCx72Nicp3bMS1TG5Vo5XJYkDNnbCGTS12",
  "key25": "2UmJeAvbtbMwdf7qmKTRMfKgnEGUh52E8tpV6Qz6iDM7D3xpXxy7BmGvsfybyN9kmRy5KjkFWK6j1WxA92UV6DGk",
  "key26": "2r5ZsHyH4T6xZHkUsYwdYXc8uToXzLis26Q9bVfi4qGoGAZr5uipLCqQtZVnnSt1PjfGZCG11CbNS6Ci1dLSLYEs",
  "key27": "5nGRfuTMzmm4eFWbSLXcXsyScG35SVuuuHsBL1Dpmdm2kcReUz9SxnAiSEZrydQewzRYgN7FujQjRDMZLQkAdhE1",
  "key28": "rU6ZoJx99mAdcJQGwrAq6YcgsrW5rrzvPuKHdNU1v3vCU14HEFGB5ojUdvdtGKUB3zN3Q1zUAhYkzZfYEtYJHDr",
  "key29": "4ZrQu3m3DGw9ZZGEf4MhmMqUGkScBGBqZm7S2AFpJnWT6Hq3AfbD6TbSCwAHHQjT1fUg7BJmS5iRRPwithVkT4dj",
  "key30": "4iKKbBGLDFPrGoSz6xLJ8Ay6KSg1kKZSYdi7ZotKtANjeGmcyrkSJcdTFhicoo6CVMDKznNfWy4bcLYK1Qtfi2hZ",
  "key31": "2Pnz3c3XBZ4ZpHT57WvGoMQ3GazJnLFSoRtK2hnMHeKEWKR8gpSrj9XKN28SUgo9trqWheBqV3RHbp7CFdyemH2e",
  "key32": "5vCyY6n3857FyJS3kenFMSZkLNfZGyfuf7RkVBRm3ocgxbchwa6KdfoefZVRNziLktL1XG7YSybWUXzbLKmEauAU",
  "key33": "4gj1cvLyF6diFt34EvGz7fE3J6WpnG8xrM8odqXjfQqVsmWF2Ncp8ZdNRdyxRtxuSmJato89WbLfVPA5A4vN84N8",
  "key34": "XEksU8YfNuyBUY2qESHuqMGWCpeFiUqBixAHB34nHhD6Cf4PQkSbUL2F6EuTX2ydaXaufDp1pCcqJbGKtt5JxoX",
  "key35": "3BZA3wT2tnEebUKTQLav3Zp9xCEZVrPFVkiprEwxmNdaZk4VAunGbw4NmE9DQmqkumZA9ZPQpwScDtAgN61SwbbM",
  "key36": "3hrmPk3AojYtTKeLcBgRu5kNLV38c2UqahnVPa7s4RTWzN3n4vYH72vhTeDxGc6cwZCjyCGUSepa3hHUGqS6fZFK",
  "key37": "2qhT5khrocwduSyw6hr4ofbzA6gk8EMTfc8HBnC55nwbDKdLLzqeus7yrRTYouaSrhAnXc7sDbFAvGFjaUNfZsV7",
  "key38": "h3MFCAHNPyrhvv8RgB5rpDTEGftKPPCkA7jp1mf5m3dZc1GrpyeTbumvzJoUaKC7VPASrkm2rGZZqf9E77BEpY9",
  "key39": "Uow1zjH5fg43tG2cGWEd64EX5nMnvFu9Vi1crxK38eE8dBFTyu9jeRkht2bwqbJv15ECkXp9RdpEEzbXomryfzg",
  "key40": "oYzr1RwEAgMUtdtdSi7FHUt1HKd8N35MnoKk6Es9H3dW2u2XSetqh58EPycQfEieke4KgnEJmcPaZVqhgVmsjjg",
  "key41": "5aXxThz7u8j7Kn6DW1DQAkvoimNt6WZV2SL4wvNkbFZFvG4eTfi5zh7WSkPm2z3LzVVkmW8E6DrK9v1FGsMw6jVg",
  "key42": "3XFHu4pAxrngp3cThTFuCjwLyt9tK73v4ahn8XAMxAaJuLQGEpvqemRyKKQbLCZXhcXjzN6qQEp8MTpSUKphHQfs",
  "key43": "4tpB8qrD85TaDu5UyKB1pNMTN2VkwLLsuXb2jd8rev7Xdnc2jSJvcCYBfuZjztYSaozu9ahMWXHRUVzkcw2hxeLp"
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
