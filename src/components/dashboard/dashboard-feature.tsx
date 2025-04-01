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
    "PMXPRm4Fu6fBkK6cZbBbbg3X1vPC1u3qJbTViC7ztYWD5WhHgquUDerGUJ1BVMMYUcsvmhJxFriNoVWNRKS7Lzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfbR9Yf34dfrgg6THx1yPKpKJdEg2QYp3imjZn9GTQ75dDg5SGnhyQWMNDyEV6VkCG74bSHrFnNMUALJcQSHvhi",
  "key1": "4cNpsrdX8nbpexr6QMD1zn1pQ5RJYpCGDn6L1f9dHk4tGCLgxaFcXC1Ag2SECFC7Y5gLi58zckEqgq7Nt6HGhuNU",
  "key2": "4rUb1zvKkVbJfUoVQLL64qkG1dAbsUBDHMJzaDxp2ntRqoUf8Z2zfQQ4KZaFmif2BMDGXUypThpkCGuJEd8tXk7t",
  "key3": "3PVgZUo9xDeZh1Qw76tuZ8FfXQfvsPfWWTUCugx7Yf9pRacyZfAriQTfEPQJPGtYaHdwipzfqiAHQ4fQQaqsecD3",
  "key4": "2vr1AmEVZmxq7JYEkJPzAvaw8UHqLXxv99mJeJ7UPYqNVu6GkHrRx5zH3qjFvrRGJ8kW99KyyRmrAtS4cGghDnyZ",
  "key5": "jkgNAK7Wr2bU5GRGoRSQuLV2pPhLPUhqDdiaa8XLEf8fUeg6jZgeALshefCArZ6EATiacRAHSHrxAt97dqNautj",
  "key6": "5GJJBJ9yatAvnS3srHP6oTELtwEHgmq7yBqMmjmxptfpmkQwVwV73nPGV4L6gjwX9dygNQ7e3gjFQKFUb51Pp4Po",
  "key7": "VJEKxmdQ8b6E8w8GKWehjChhu2sNDQXGBH8VQvLFperp2T7wZ8UALRJxoz4pbtHcmj2LZtjgMvduzA7u8j3Sq3d",
  "key8": "4KUCAgcraB4ppeUo3dV5KL18hNedmxedxuuAHPjZ23NVz6A8Muv5aNNFyPuDmQVLdZckoTi2P2v5Cw6UBDAjL76k",
  "key9": "2ghi6TokDTRjn3RoX9PxetTN7HiEbhQPckCXBMzhhKqCcZPeLu2xaX78gopi1QzK7ethouMkeFCxfZujiTf8LKva",
  "key10": "4ESgYaa2vBNK37iKKeS5hjuiQdEfgucTAB4jTywGasswhu11tDhmAVzCSFN3NLkjrKd5A93QWGJsPhpRDsWYhHUS",
  "key11": "vrGTf3xFyoNxf85uj771VYx1jTqRVqmbKP9z4QY2kvV4YVQjhw1pQeT74VStubiNFaAgMxmJZJmDRzqDtdknvYs",
  "key12": "55esZTxvP9gvSW6cj5YHSch7jEnGcXcAeaiytep9iCcGnpTpzoScEK4VobCEjZBWYXmRqgzzggchpCyeLCEdSzs7",
  "key13": "3BoTxwj82QaRDJ1pYvEBSpG5qqRihyLWGxecWwqG7hdTzzfs8EvfBztSNrAZ8j5bTSsbX9mhKXKJqGAJdN2KjtKk",
  "key14": "2NnS7SLWsPPVvWdrnSneoeDK9FuXvqKMgbiZp72SkiLTjfDNE3UhfA4HkVeyP5q2PDauVJjzChiHx5wTe473BaCT",
  "key15": "4RTpiFqJR2HWUHyHnEb5AWx6GV6ddNZSjVTtUnBWmGzKgwQT8THeuKXUSTGswuy79zZHouovFReeKyURertUnbcX",
  "key16": "4uU4wZJyjFjPCBWCAcR2AR5NSNjtXwDPjMnDwQWbzktu3XLKJFiWTDtSEXq6FNyEKx71vyoMgw249rU2Zx9Y82QX",
  "key17": "5c5PiWjD3D9DdYxAr3a1hxxMXUP59QLp1x3X6DTcYV9zCxL3sqtVSe2NJBvd7yqSpPXgLJHAvMRbWH6BgZ1PTE1s",
  "key18": "4ubMotZBkcW1cLWjznq7wicKk6jGH2sGsuL7N6qhDBaow3tW4GGK98P8ykonizKzF6X3hvPwhfpAVU8AmvWeBoaS",
  "key19": "4F95oc2yTyYwdJp4SL2TXCsmMwhVjEkKYqaYRUdrNcvLEKWLoeW767Q5NWeekkiygAEeFQGKNyXmjmNSgdBcfU3D",
  "key20": "cxkCYHUsC9vYRgGMxDeBqaNzQTuWKbQ9EbAw4SCd7PBDtCq291nTaiP9DVEF5jcB6kPDRVc1JpktjKi2qXxWQEN",
  "key21": "6pNJTAz998rWCZwEqCAnQnkjTqVbd7QDwygd741zmYfyjkKxGByzciwkNHnFS5dPYtcBiXRgVrjCL2s9y6qRYnP",
  "key22": "2MKz5ePbMuKJHUQzg5Lf2gDKZiRKWhJcPA62HTSLVzxPymh5S2Y5TbjktyZqqaoo7rA6ECU3mvWoTuFNQaLDxLta",
  "key23": "62WjAHfratjtj1rgCjTKJfKHeG5ZR1wzadgv58FCX9Yw5sxHMqakZGPyiqjGwei6cwH8s7zSi5sCwtoy24NDWncN",
  "key24": "3vJARK7z139FBjhYJkPu2yFREzGueT3yiZYc8VE9Mg9xd2uiVYS1n5xHeRdpoCHKAzxfXRcqL5hGr9MQjwuRGTLD",
  "key25": "3x9ANgm8KBSPGKaKFfAh7vjZ6oU6zmbgMmrrxhnbKuWNSFpnCtvkr7CbqD9xUH1vyVLfJvC5MQ75msbp4qqKe8En",
  "key26": "tstne9HcNi2Hp39UBCaBCDptTf2PHA9aPrjQU9jFuFPVLcVSiajeVTQyYGMPBAamNPbtZSjX2JyYxmcQDbBCpDV",
  "key27": "3HDFJBc43UMT73ri2fSFVfTFQsH8uNdSUn4wU1D76mRJzUEc7HgczD4MpcMfunkJbGdh9cYpv7NS66Ya2Z1KWuwx",
  "key28": "5RLKszcKgebsYTyRQTfioVn1y5NiPw2gwCoVXoMD599Veu4qtQY9Z2vjm3AbSC8HB6CFCQjJSh97v8hbcPzbANxc",
  "key29": "2HHTyqYQQ7Bx3RGCNmw2WNUAhZj8nFpb2gUuS3neQtFC9sVrGwv7rxEuwGxTxXzjk6d6rkYkJEqCB9FxrmMHKAwe",
  "key30": "81kVYmjx6wcmLhW9NkRkgTrShgLmJqptcDx3LGiVb5BNt53zy7zCy3KCRpCdukKRo5zBtGixwxrWQ4PgBv4S7dm",
  "key31": "36r5wpLHUBPrcPfzQ3eoj2TJep6nYBMikPHCE9wUSFx9vTnmJQue5oDzvFbn6WFKYLq98Jy8ZquDri2GbgMjHs2p",
  "key32": "2cd64GuTYFVUVE9REXZY9Uu8PFumD6CsuSWKeX3tMna2Ty2VWUhA7qLdYk8s89t4T2Ngmst8WCq4WRDkAxJhVadm",
  "key33": "4cXzVuxm5z3TVpahePKpG7HgpQks6Zv7iPoZAGxxU8Ugmg7E9HdwrFe4izvV7aUktyTT34cJ6xA3m9vkySigjRkG",
  "key34": "3pRbVzvDpbXNkUx8aP77LRgnNEjBsy9SqV8dFHqeVSHiSTQJr5XmvBD9f5WNXJQxFdW8yu8qF9kgJxTQ3fiJyvrq",
  "key35": "61yiAHLjtgxwZQrZpmNQsjh8HonRtMC4q6qUw18ZXoAjTmbcBeY4YVtCdqs5E1rq9E8XuX2fHxG2cnzf2Ty5Jd2n",
  "key36": "2JBtLwvZZYCG3Z17HqKaMunRxHBxD2wLr5AqnD4GwNmCDRL727nyQaYbKeHMmWuYbPexNhb3BF2rNKZAtdfku7ML",
  "key37": "55R3rnzQtEWXdpnxn8Y6gpNKRN1ANU5oWKUF2btPv2dv65ezADAApWonSQoKHb9UwXAYXczs9ynkYgH5wGnVueMs",
  "key38": "2tPYu8pSpprUFsTjhWj8rEakEZoa2945S8ugKgL1SFjHUQNAr8Uaom7vAj5poZLV6XKckB3DX9QNN43Lse7Btcit",
  "key39": "2qeyha5uc8JEAQhg9tf6bpKyy3PdzeVUjFTUhJCj1wnnU1Rye1TqzfUR926Vc1Ak81mDbRgCpvFL4PvcYE9X7Pb4",
  "key40": "5YqL67oBp9zMmt2ri8a2dqGGFaHjpqDca6pNY7Kt8nqF7tnWp6mhARgVmnQkU93pyVdShi3pSTaWXrpVubvbKhAb",
  "key41": "4pnQhxZpdD7vcXQ2m25B5A3rKTS7nFq7JqR3QPmVppQMVe5uAUoutgZfcyrAGgb5sLpdaGDrA8ZQdXCrkcJhhshY",
  "key42": "3Y4wLgsWKw9f3L2jJ6MSpCc345SRFGF3gT5o1evbyZfSPr53vzjAuQJu2uZ8m2hxmM9zxqD6LbAVVyB1YXqbw65e",
  "key43": "3HP6K27MX3LhSCCsDqdRr5LmsWg2WUSifKYSiX1YpagCwpr4EyTwcuersmN5fiWeWpoHJ6yiD8hnr7Umz6W6pPht",
  "key44": "5F88pgyDgVW3xEjFwjynGZEMk5zNE19nBxUpFyn3rcBQXfPj33Wygxp7AFH2VBPAZJmHEbTygX2cQEqwFkuk1WpJ",
  "key45": "5dFBL7AHQ4v3A8KLGW5NmjBHPZrjhdiYCjQ416vGf6AS2c3MBoMmQgy8amCSUbUAsehBug4bhrFwR2MYunwWR1dR"
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
