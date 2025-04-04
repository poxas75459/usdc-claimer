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
    "3aGj23Vv8Yb4HRBJZqaomeS5GcYmtsVqpHvbuUMrpNHfsoC5SezbvZ765zy5U9wDzDtNNpbnszgiVqj7NeKZG8vH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rz8xYh8DUV31FxDYaDaWmzV6KyWRtPTenHQGGsSfzMMgkTdTVh9hhi2ML9bwDSWM8wMt8iyQLhm32qZEaSrnmd4",
  "key1": "5qfDeQBE9kAWtamKhNRRkHN48C4XQAuPXs6TmzTAkGWo8p1qTDjukaRFWgT33jL9RXDnDhQzeFNbN1grfoWDTDSv",
  "key2": "5Ynq7MAUDXQ7YxgsTyDjGwRQdbo3qinuRXQS5DmjsNE42UbC8kFdDapqzkjfocHCztXPmKRGzbM3oi6sMBjWAmP7",
  "key3": "5eRpUjBCpmC6cwekdgfQkyNM4hKi2NmzXorrvb7kDuZsEJumXxo9VWNSUk8wkceYAowD8tq13DutvsvvdaCmvM4u",
  "key4": "3SCmxHAsyQgGZ8ztZhCJcgR3XrJvEvdGL7sc35JehjXyg6LzuUbddbY43bMFNCkpSkDGdLPf7CJ4WwM77MS42JXD",
  "key5": "Jrp8T4dkysLNKWpRw4fsAP5hXKexodj2wXpqu2XdV5yBFFBN1eQbhZ4BzZbpcwANU15rThaimUWUxN6AeQv98qy",
  "key6": "4SQ7tRhGtxrwYismTpdfEjBT3Udj8zcNVUspNhftT2CJM1mnnU7Azjb6UNkNWw6GisoY6uizvYZxNDD31JZHD7Qi",
  "key7": "4LxLMVHNdjcCFYUhWyWsne24WMRoc3VBJDz4RaT1m66fx67CqtHkmYw6HKdy36Trkp7ghb8X89ztUGugySHaLHCg",
  "key8": "3ruiAQTxN8wXTDxUJTrGyaXT4ihppwXudsTebHA6pvi1hCzNSrWKmfA5tbuXZJih5ddGxdg5f2dYQdr4kWr1PtfD",
  "key9": "67cGoFKMtUXzaSYj9rtXnRUnsYSAtiwKruW91AEfuPWnoLXe4HEf4pWJLbBUyykMsR4mtwRyMMxC3nLXFwzVbacY",
  "key10": "YfM6JqjoccuJMhqG8M63hL86zTqFBJmJLyCWnjLPiy8rkoNHSiGSpoFB1hieZpkp1aXbZCHdn1NCjyEVUQm34FG",
  "key11": "Hj6Z6MRREjwpbuvt3Za1AGAUbwGe96jokfofeUw673PvP3VyFNWS6CsCDZ8NRAjanGbPRGcrE218xqCo91wmfHu",
  "key12": "6hLaGyxTMtks6hN33NELYzCPkJCAiTtNgssHzHXkihsv6aPrF3VryQVpQKuQWuWHwBY4gjxV3TeSRgdx33E2obQ",
  "key13": "22rEVaVY925qyGWmvrXCmbPYoZKqXrwKtz418KwwC5Z6GLjkE79bbbYfxuk2L56ypyje94AhUeQmRz7xF7trAZCa",
  "key14": "261BLz8uSu6c3Ru283TeoePbrBubeffSXkKhxa2RGNSGqUvboHxZai3n6GktoddNEqEofs2cmJyyZopNXbFF8t6p",
  "key15": "3zpVmsPvw8Fxd7Xart2XLFKiaqvP2egXzMNLR1aSLbvUH5DfofQrT83mujqWiBeLfEKXrUZ2N8WCUiv27CtS985J",
  "key16": "5yrDCckLkFzGpVkLSqQRs7fdETN1MrXVXukdFgDgz1ohGDb8cQA9QHtX7pG6BFYSwJYWGHLTGMf2a7jCpvbJQJxU",
  "key17": "646YRMA6hz3cwc8RtsTRZrTxjPjmT3aGRXaYwWnrBRkibUmLoD9QKVt6xehZzzXKyfWeUna3LR7ByF9tGmubD8nG",
  "key18": "5RfNd7e8MmAUyg2CzqKD3GvpPsjmPWzxTeyCCAyANuiT9fCFYLdNe4EpP2qVF7RWo6aVenvmiqUaRPZ6NQntfMnW",
  "key19": "2jAAy5coKnk8JFPYviqT4F35VA9DtYkKkJ3txJb5gXFQun358E1dSxxD41pByG3uvXo2oru4B56mo5NrXgZcjZpw",
  "key20": "5jmTVUARxZLpo9dMNFcKmw1EjmyvWmd3JwY5A3nkAa6iaZo4U4u1L8gn5Rdw8pKuJ9CB5aZbsyPJCdnBRMmG23uT",
  "key21": "3LZeG9NVzWRmLuxj5dSmu85qwiCZWWHPDcqU5MgmdEEWqdWCcvNtGFYihgfiBqNwsZemYtyEaR42KN8CL3LoftSX",
  "key22": "5JjsPmAHVghuDQTzCmDaHDUt5z4xQhv7ubCcbDq7QiEV5eUS2BxuQSemCVVRcjxqMYM7g16KtYJcumSiD3rv8b8w",
  "key23": "3DjVPbmhwfLvbuS4oLvHDgaEvGGBmnJAPLubcAMVwLz5uQHbDxq6cNDZWixXRvZg9iV5ZPfurnk7vDDC17vsrKyQ",
  "key24": "51BS4X5SnehZ5uT6eLcKRu29maDJVrSCsuV3KaFmdqFLGiQ1CPTWBzBa7BpJsEPDx1NcAmEiJPSiA1qyDH66gLEP",
  "key25": "4QpoAUytsRynhJMPueWgSs4hV6umCRfusxppanxxJkrgrzAbRweDdpwuAVasnbsQX9VrwkPfWiXUS8h1De53Lehf",
  "key26": "4kNqQYC3rS78GJ2EMBJihPrgFfuAW6hBwk2khvgTK5r7Hx8YfxBGHiSWEEuKJ5a2hgxChp33ZdnLgWMvgoPFR6gH",
  "key27": "2xgjzHZrcVyMsme33zHswQmYjGrr8UsTSKqqzwQ2Qv2UwrXBfg5qQ8S7gTaV6EGvhXPFDbVKiPjze9Kd2UD7Cdge",
  "key28": "32emiK6cwb3rQn9UJXyirdED5r3h9foCdYw9fKfzoaoq1LqBpxwDPzaG2vWibQtYqFbKJbxD9gowEv6zYip5q6WN",
  "key29": "4jaTeXUsiZa4q4TNypNFATgeNiqGPdGRTWtGG5iv3NcSc9vn7xfAvWf8ppnkASfjS2Fc5AKYse93puXJRZMh3rNt",
  "key30": "4Yd5qm4tRGkL6qANLu3GG6H3Q8FAz9UmpJBD9GmbBbdpHWKV7cGGYLFnNFSKrmAK3G3RDErzJnauXJEVAK1pr7df",
  "key31": "3yLbo1Q19mEfeqpAGLR9aF4NcxbFnWwj2y8MtLW8DQ7TogoEAP9DRiqBKB533Snch2pg8irfwpyM8MxCtF7oqFvQ",
  "key32": "2bsqsxceoTgsaM4VBQfjTyZT4Bo9vZ6UqpX6Ns3wK9gEdDo6DDYRNZv2rCTwAUNzz78Kj1mruDmaAUdGQ2x45FyT",
  "key33": "4LWF98VpkXeEbUXZ1WYZJbV3YA9JDmoZUsoZ4JaXkKKwedw6CEqzKwNKdrL6VJnXH1rZ2PFtfFyrLSJ6e8zn89pg",
  "key34": "3mwejSZnMPx182J5oxSNuGc6ZMs9S2P1WSLvV5fzyQDCsiBfDJ1h2h9Ev51HBmhZjxgzAvVCGmJCjrKExtKZHjWH",
  "key35": "2mNQYusr76EGUTPqwqhzQtiyNN8vujzvNL6FPYxRbGJCrLi589YXRCRmH5pM3rvoBtd2YrjjfGpem6uZ5wvtUQyt",
  "key36": "5thsFAJb3iBaPSScqgvWDevbDX5vnojLbXrxXTFEaQm6qKq3JLXL7eFboZgKmWDsBoEw4o598ZBBr1VBbHaeRtps",
  "key37": "2ssJjE42Z5DZ1dj5zzDD5nn6hjDsbZ7K55fVdLEeGcyX8DTvRJ9kGFNxGyseuvMPkaJ3Bb4X4FwH2Ly4C5Xh5b7g",
  "key38": "3eA6dnbhUU1EZFhZQukwv85ePQL615WzEXRjqJYY3DvEBoHhiPLmoj68ZjNB7nEx24D7uvXKSWzbdqimaKRhR8qZ",
  "key39": "59ojDKFBhDZJPu13K8R7VzpFpYgxEgnfmgveESeUAHrLWesNMvatmrfoH69qgJoggwfNxxHpWXtTQWLBgwYAnqGX",
  "key40": "3FkLuJHxyLmN6bGFm34mrzV61ufSkMeXe5PV69c2jVa1gS2xgFiLBqXp19fKTs95DafSngBGBT7Fnsf6DoCHynxu",
  "key41": "3PF7f6ktWxcCMSyJy69iDhpyPeu88LT7mSPkdwSVZBwmmYtMrPrFLgHdXhXhBGafpQpYnSMGNpxWJrpF8cD4fQRU",
  "key42": "3ytrkeGHcjX6K3SVJPmthoHdfhgSLPnTLEvyY8Q2UK35La36ujSnBfC3h9HBqD9Y1xRrwYLfUcHKceNekNkqZiMA",
  "key43": "2rr1DP2yMQ2UPXz8GKVp6THmEmyg5zTdGfttXd8a6GZSv2QcxGUsRJ194fpPwJBKhEHq3vwW8jwo2vAw1nRFDVV3",
  "key44": "31G28wEyeycSmortnaZfyNVCViJ77Tngcx9FAu2hd4NuxJHnJ7Ex2gnVeErRJxMtz8QEMAwHoukmf1qBUQtkBZr5",
  "key45": "2mkgX15m7qXu9t2W6gnDWZZFZANosxBWVGE2jyidA33hwxBLRdb17jY9oRjCCawBm34z7ABmmfP9z7VQAyrEtKur",
  "key46": "4Mra3Uy5ubncvjXUrFeMARnVBy4Na2PnJtfj54ZshG5xneDUA9N3Tr4SiA5tNEASP62NKkFu4iviWrsHHF4DctN2",
  "key47": "4qgwuA23EGQVRJDe3iE6YhdfmrJC9uJWs7uPFjuVUspsxbQXofx87amyr1pX7uU8AvJUUmPmw7J9wEcY2P3KFzf2",
  "key48": "2Xf66WxnaBidky83WqDTxH4pzcSf9b1i3r9zxQXjWgiDmY2yZXqGnduD4wqbECvxDfnBoFz5d9J3aSMeQpeiMNnJ",
  "key49": "2y1RZZutYk3g6RPhCVbYi7ZfubP7dTqaJv9cu62hECNZwCt3JTHrQD8mknhhQKgm4ubUsqXuNN7uge2DL9CSh17Z"
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
