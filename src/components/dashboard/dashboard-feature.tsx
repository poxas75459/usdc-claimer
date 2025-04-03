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
    "4zgezjKuM5eXKVRwYbJUXS285QgSQMNt4XRBMUXUrqJ1YB5vkasLeWMXZuNhUyU2Pf5HhN7Vd8PyG2rxBDSf2Nri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5ufiyX8YBw8dqw5JjXMqYc3Tww4K3o3ZGr11gKyuwAfFqtxps34UCtS9B76WnkXSfTnnwjT5hpBbru1xXydvC3",
  "key1": "5kL5hfNyq4wGhpXaa5chWwqps7ikjgxBZuWYVTix1xhsMjNtboHZJ2BL1a2vrooHNqL42mcedwMT93MDzByHaVRK",
  "key2": "5zeGizASUy8S73iaYHZ2PYwENhpCQgAAyUeqU72QzopDLqN4mC58kemFnZ78K2VZHZUaf6kW65wRgx5dYz4LEqtg",
  "key3": "5QEt9PGYXHBgmLU6vefZJ8jvLyrWizaGDTyphqLh7mxZbN3emj13ZVdMuDFd3Air3MnUhF44s7BamqwsfP8GAWdV",
  "key4": "3FXpbXgRXQNsFnSt3wNymCh7jfB5VCbWq11wfFiBzN9fSCwZ92DSw5jiccYLFVwBh6Aet5R38YD3xH1p4y9UN23Y",
  "key5": "4SFqyYVibpuWm8mYUgwz8HMxXZ3U6sNoQ2QypprrUbT7JpMrrtsoZgX7oHjEN8aSPChZUtTA3Bv6ihaMxXxkFw8E",
  "key6": "4yDbWZoe5hYhjaXZTHFp88hHjdgAVyYtbYdbVi36MmR663BmznCxoeLRz3gXX5YDacivi2cMYZJXRFk546qkcJfv",
  "key7": "5DHvGT68uoEYupKezncPmjwtH89f9EJH9pCLjD8F5FucBEsJrki3K7JF7H5Pon8XURyhD5gwD7oFVw3FwoJTFn3p",
  "key8": "2aVB5gT82EbnZVLJU2LRFAkhwTfDfxgBeddRKpCfkdipTwF7cFHAnFnu82pfkoaFu5RLaQeumV72KxGTqg6s6A3N",
  "key9": "2sw8h5T54Apt86K2rfhKknftmvxg2xYqVm6VG5vBjGc5Dh1yPWf6zpYSWXHCgTWhwifLyzUniHrB37xVXgjAbNba",
  "key10": "3Bi7S2vyq7wtJAW5HeqWgBQ5G9dshYx1J6oRtufHyHNAfhHJgkghYfBQwpQJgpeBAWTmy1Myu2DdpmG7DqKVskC4",
  "key11": "2LwFKGReZTknm6DwpUkSvGuFapch5QacU4fr5x92vZmFRhXbuwA4iXRn7fwACEvdFkDD2SZqkUEvht5CGa7nbdAB",
  "key12": "JsHT9bDmn2AkcsBccwj2s1gXgKi5h2k5Vbf1vMQZXHWkAPd2th3FLqvrVcgJ2Cq2Fbny9nJ7cSzvQj4fHZL79g9",
  "key13": "AT5Qmn6U4WZW3ApW1HpnhpUYGsHfaHZMzNGFT97Krgmy1ZM2NssFKGgovgmQhc1JgK6XrnyzE9xhc124K3cdmHS",
  "key14": "FiwrpCVrbzvid688YfVihAYaZXBWiPd9gzeBQzJiZxzFeVtmNGkQ9YwWjabV1W5vqAfftALgxAfejJtuqanA5qL",
  "key15": "FXBD2VrRCFoEARxQzHbZmCSS966PdmmGFUFjnneUS1MFJNukQVQ6DJWPH4Us6fb3Af9Q4f7vEbnBYBnUQRnXeUM",
  "key16": "3iZV2EkvvCDTHfauWXyHh83qbViNWsY3xXWioQ9NarCXYihqyoP9i2oawN4iXFw3WPLH5cU4Zqy11xaNjaht5bER",
  "key17": "2pQ8PL8K36cQ2rvwdUoYQrqPqkTUFS5AEGnTHcZGNWqr6jfuTsMnc6zbYiZMLFGaUPC3QXfxMEqm12efUxKSptKH",
  "key18": "29kvx8fpb8t3G7rBEsQ1sVT13Z7gR9K5TH4FNuBAkMCjG29QzSQroHAW7yj3UA9LVcXnMdfwKbLDa5s85AuG6emr",
  "key19": "4QYp9uBQWU56tNEcp25gTsaWtaCCJYJ8kjL1aPPzbsyjthdhmaE5chqeW7eFXXYVj7BVTbLhQYNqZ8x4gEQNfmBp",
  "key20": "3r1FTKK17q7KggUatVMcDXnjWkZp8UZxzpSaHptg7sDPnbwPDzp1vrwYaZre4CsHQiTJabqxR14HBzLBTFQ1DcW4",
  "key21": "JdDvooJGqFpKSSor89xMHd7Ag76ZhjhdKWU82zP99CfhyWpiMY4WmLPMFDJrVzWmbECFaR22EaiFJgQUCbcv6Z6",
  "key22": "29dscvimGzsnwKZPmAq8ex6QMqrr2SyBZe3EKENpPHSx1hXWJoniCVyLWXxEyMcvKx4L7MgpnrrT7mxHKaWSRryr",
  "key23": "3BHcL7Jfgz418vJMkbpzJQEMRBxGjM3BMNt5Cpgx4YWpR67MkAoZ9WGNJrxSvDhoX3ygT13rVJojwsNpA1a3gUHx",
  "key24": "2hoxbXSWghJZ2k8LdapUSQJz6pdQtVk8yk5nwK9zguu45zHwTMkgQ3X3bKziKcdZZJD5ae7iuAo3Jp1UxLLtPx7Z",
  "key25": "2sKgadLDQT1aN6uV5DRQWd6z8gJGTAX4WPJ24LioBsc4kaWjzUR4mZNxLaqnX9bKrM82cUaL6FKxKNkkqbwifXum",
  "key26": "a382kX4wxUPrSTYN9WvHCsQV14Cc4iAbx4VrJnCegPmpp4KB9UksULD1KyxfvMoeqUBP3iu8R7FM95Kz61dB5j8",
  "key27": "2TSF5bhefc9KnkJm1QeGRpJp1bfrbYNEMW1VzVaCXqhbXVTmKFVHWankJcf4B16Lhob8KKTNdgd77g98xpBkYLhj",
  "key28": "53743KW9RJqN5fJZ8iRYuKwRkyHDb5d3PmViW2DMa89EUboiM8N6bJ18jg45fAeqpoNzNwwmy3UmUnTXCbbeTXJc",
  "key29": "6ASy9CYiH6HKc5uJLA2aMEE4rKDAJxSrL8JUKb8iqxJY55RcPQndoDRZ8p8WTTCpMj2AvnHaRAMjhiH7E3s1jRR",
  "key30": "2UBNyWHXSGJzAreXAqLCQTnrF55Hhq1yUkiVbyvXpuz8KwnjV4mP5KYLLx4S4QZqACkQHB2gaqD8zgqcB9i27S9H",
  "key31": "5LgzTz44Q84xXBBhpVmjVQ3Ta8hBWuS3edXBWoFGhbTyHBmyh1wUkqnexUtoRoDtNQvBtrFkDU99VGmnAm5sucdZ",
  "key32": "H7Q5vqXPiFSReZ7vUVshyRMLL6sY2UU5dSQf1zk2GZsw8vcbaNTg8ngvv19GzBcJ8idqTpWzrbA2pmcNTxdirmC",
  "key33": "4uvHv2R7E5dFxqpzSSnRhYSBwgs925g6mALg4AnyabBKNAEFs95KhruF8cdkqVLu7ycYTfwymUpTAfcRpZ6hrj28",
  "key34": "5nACkHJzeJD1o1Et9DJSZUoLtudaVEY6b8YyP2MgtrQZ1fxabaNJQ48w2Z2tkRE7PtJ2FtXMtza7gFHB1zXnCKD5",
  "key35": "NeoTSTMFSqaTNWscEhPr9xC8E7ZnysSKq5vbax7dnUTqeqFzqwBptT5iF1MCrmYFnmW49e8jHXbtEP7wH7GWxjW",
  "key36": "jBGXjmRRPdWbVK8DwedfhqzqctkUZUDT37qRUYC9negg1rpb6ojoimwtLPPR1RfCSXMHQvKdoqY1XEyMctRDqXj",
  "key37": "3VKKCRnTstqKn7ktTvkAop8TXPnWBbAEyZ4opn3XGaBDWt83FWNVfDW8wzGEqdGHQb6HDrZxXhQmkbwjCvk2HVyV",
  "key38": "Q7BBsKEas9JJuF6oAytWBLAwb3cUp9BRWft47EbVEeXhmcoS251rHxBrkaGqfhXbrQ4jM8Cp5Qa63Cgev2rBdyF",
  "key39": "3HoB7VTPU4NW5GEh79jNZ87NysWpHjz29SfFkbVzRpDP8SDyxiuRixZEznrRqZeJdBhzP2pcRmur3W4cMd9uwzAy",
  "key40": "7u4VxZ1aBK5aUSAJXyRvrVr4M3rjSxgrsjnnmQA7dnm4tstF4HxgkP5aXg7ZNCzjV9qjqNpCJATsc1bhZYNwG3H",
  "key41": "2GHRrvriPojm6V7R2AUY3KpJYP1SVLkEMhR3Vjn7vgCCxxqXZCWYpf3uFQNqEayHQBrRzA6MEZrKeHMR8qXstiTG",
  "key42": "351CuFmsT53jJyLcVPz7pPiwgrVsNAGw4ouxy952bZBSRQyQB9N3m2JSzBa41TQMz48P86yyHedpxwZUbGuvQb2",
  "key43": "aPgnfhAMH1PJjTfVcYqhxNpUqUffxBTYJK1pcDdx2XypchYhvF24MQfLUFtcGCArT6duSn7hRSw2RVnFSV4K2pb",
  "key44": "4PZVCyeo6Gn33KhD4Dak8Jv8tZ5VFtfWeMDSRBuvUEbTshfb9HB57dKKd7KRoH6ZuzN4fp1FcUzS8VHuxr45333h",
  "key45": "58d4TZ6yUbvJ3At8gqvs2GBJSwsb8SjriQwaMMNxA8pvK7mcq4omAcAu8PwhffLsm7uZmgZChij2jsJ9nmv5ppsJ",
  "key46": "3ur6cKMjPMJLtUQdzRCFNhzzu7yMWj8cdCrxbsfWd9wu83zpqvZajmuzxuqtVUN6H1dYXzvDk8kYL7ZBx6Pj2sPw",
  "key47": "PTfrDDtzZX2A4KVzWUhMb5eVRcW72upFCKoSVmEocfo156erE8wv9RVXeaxjrQ5JeAXh9PjVbxQWjuePTNCahqe",
  "key48": "5uSFS6AGnq3bavKXtkeYNF8bQcyuymH4XMD4hPEL8u5bFr1qtqY54honnUu864uxQc87NygfdzZ3JzSMuRvPS5rW"
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
