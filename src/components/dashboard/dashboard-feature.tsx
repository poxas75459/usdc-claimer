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
    "3irKQRqhk9PiD5H2K38KrsNHm9JqSwj3KWqDtQwdCqut2AMLXmGCmgD8AdNrGheGw3Foe7cb4ooZ1r1TFZ46B9jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFY1rFc82CeroyYu5tK1bu7HsewwsY6t1yGDHgc8dKrSi3P3SmCmQUHZTDZsjmYtpycjFArgiWJhabmzhom1aVu",
  "key1": "5xu8g27ZskwhfKVfmGjmDJPwdJPoVUpumwxQjWEJX8KXfHyQUJQw6Y87y7QEDqztnEjC8sWzhc65cred6xNU88uk",
  "key2": "52EQVRWjCR9GjzgHrpqvnewy4Hd9u2ddwaqwLjzpEjuAHBBPADhYccXMbJk26E8s8iKb7A2ZQdNHdL8gvf3LLf23",
  "key3": "5nkd1S4RX8H9k4fFwe3mJdyPZPEvkysWL34zyuyhCQtNMxL5J2dRR9XuDi2hGWiicxiYLPedeMhdKEzaWQn1Msuz",
  "key4": "2pMuazw62NkGFYSR4UtMCZo1SKEKS3BPsSR9BZxKyfXi7AyL6LHw2nEX3HUTPQmt6B7u5SGx8YoxrnS4N9ZQpzs5",
  "key5": "KDkQ5P6PL47xT8j5vSBJoQEm7yXJKaN2F7gPxLJQJ4sroC5Gb35nJ1ayFzbhsXmLV7WjodTH32MfETzCB6jGzkb",
  "key6": "D85mWz8tKqY4wnDiX4VQyUzEWqpae3N2VaSZVeAQCaXPQCQUY1HU9A2EJfBZrXragvfwtzrsQNg3EnW5MfAhKf8",
  "key7": "4YJZ2Mxf9NVQHN97nsSc6SXqA35qTwmy85XXje7Bh9fxX7yytHMthuQtSreze5xtjKMzeUk7UoWjwkwnsa8NRF6U",
  "key8": "3hAVLtuvBqrnenHVR7XF5LLEfXdZZCnCHHNtmTsKbu7v4A9rJKSgdXRa4H8uuYgzZ5ouCpaWL5Vm4o5GV37zem2p",
  "key9": "21xvo8YBik4qXneQZ2Wu7raAG6WQYUsF6oq7DfAtFcdpazZkXNi7KrTYYbWLfQPpP1KRvtbTFJgMikhripC8PARs",
  "key10": "2fevDGjp5wqnaiiYw3hucJeZzpEk4rUh965F4BDnFFbqBu6kBGeaANZuQiGiK78MAnLJmG3a7KvomHozNagBaEfC",
  "key11": "5erz47WEa2HxcySpbnLjxPzULERZtrxxLBodBfvCnE9ZYNbJpB8a4MYQCs7KyyQ3fLLzHanq5TZDJFKnmK9HGBUq",
  "key12": "8R84L9dZ9UaqK983FEUxT4pfkV9sX9vazs86CXq6E4VHadUx2pJkb1kXRBt8VRve3oHrHwYrGwToo1n2bb3okLs",
  "key13": "5agJ2P5kb3R9zsmbjcyHRTu6ff3sZguFbYvHv4eCKh5UzxWAvMgjdMH7vefbSzW2c7dmC2qf3zafmXvkJNG4rPBi",
  "key14": "4BAx8b8QMduTwP7SJ9pq4TXQxxz3uiFYz2WRdHXS5JFcdtRLF3xiSPo4YYUJogoPjrjSZCjp3nxfHMpZBmaC6Gnx",
  "key15": "3v95npCQESTUeWoNCSyAKHLrQQcBuamT8f1AGYzv2HSFRT9mbEWR4CC1XWpMcajacgC5LijwYCoVwgiriB3isMUY",
  "key16": "3FBWp5Fq67jDJcAQre1BrKmFff7jYb3V9wn5KYwgUuYHsgV99Bcye8nTsj8uQHnguT31PVd83nCo9TVXmtgs3d9W",
  "key17": "2B8tzpS7GtCbcVkhYx6cx7YKXUnUtGrE3faeVS6RjiUD9fwzLkToAbGDXZ4m5mLG5P3uXbrQxMwAyb6W7s5BiXgx",
  "key18": "2QoSLU6Zg6GqnrrzrKnpaJ73x6Ez46oGeGEv2vUdBkf6rDJPxEVMf1WSpm28MAigzs3JzXoiu7o9sox8ST39YZ9n",
  "key19": "37CFfFtqaHBkYk4aQStdxQN7EKfvxmrLK3DiYrQtt9ydCvfpUNaF7yZAoH9TnCpuanadwR3NaYJefEiWfr8nLw6m",
  "key20": "4d5QEAo5ih6QEn3NA4bomL3seu5CKdFMpFhJe3eHfyiSHK6zghcaB2yn5iYrQx4Zc3DFXfkaXE3dUTEg8ttgmne9",
  "key21": "3KQKp9GTGSAPWQ6ihSfeLZRm9NPH1c6yVFWtfyCFN69xWcjABU7WqFh3jTkLJ9bUwrQ1oaHNA78CPwe1LoEBtig9",
  "key22": "29CfcTG1bTGHiAv8vje3HSQgxXFaxCXq5gHfcXeUsjymkW7R4gNkj3SRZh1nooyCh41bzrzAFSqq5bopG1nFkAfs",
  "key23": "3pSR9Qt2Sq1pwGLwFAhPgt81bm6LPgfzkehezz1665B72daAX6YtSZezycr7ZDRbTSiZafq6d1ZbJVMoRgkj5rpt",
  "key24": "JrGTYRMSTgwVVsXSvgnYTCzXPnuuEMxVisfpd3LArZ6AXootPq2fWPUw4uAVwfrVFs3uzPheC5z49cdiwh3vvTp",
  "key25": "3Y7EwpvjP61uBtJHnqG26q52f5XPZRN1RrXZqEKjVVDmYys69KZ4ezFnCeSSWydLwWzxzA319oYyMYDZfpfVh8HA",
  "key26": "bHEgPvNZJTAjKDhrKjHjcnLKqDGjgZ5fi4oyeaZ3MzxtJEb4EL42v4LqX3nJyDaE4HfGyop6TjV3hV1VWGh4kNr",
  "key27": "48TgTRQumae4Ca6GCUArznBuRrRiGeyVN2HcLW72ygrUtVpjZW17TiemBM63NwEP1TRHwq26bZut54WkNiN746ga",
  "key28": "3i3Heh9gdLuEDbonygSaniZjou8cpRCWehcuxUzRotUpbzK1L2dLBTKBcrSqQT57ExhyZ1gshA33Qd9fdgUuTvJo",
  "key29": "4yvHa4jKupqWPiFwsbbdpkucrYVrivnBhcCYYsw3TWubQMLENd9YqbbzjjMMEGkAiJpZZ8UfzMTxkgStPwonVTjs",
  "key30": "354o52PQsCiDnfqRnPkKrtfpaiN5ymcu9oFnMoWmQZVg6VqWk2NJZ6XPquN6yy9DEVBniUdMsL2DMk2DaLUdrFAC",
  "key31": "o2igkcovz5YzSSJc1szs5DBWkkqZyoVQv8VAzxTysEjNiWZNGfGpNZD4rEfcg6mHaMNHxQgXrBttEE3S2oVTPxU",
  "key32": "3EUejpmgauSoQ38v5gSESw5eACwoeqcbQmsa7LA1PeZhXSUHqApyH2grpjMkRboYWaySMdtiRwNUbXdJp8CTe9Xv",
  "key33": "3GDBpucfy5L3sZQx1exe3kVqvxpBQBjVS4GY7ASRrr3nTTfGGbmo74yURgoWPNK3kH1uBxD6YnDG6DSRqNqmUfZb",
  "key34": "2f2iqKq9VZzCGU3pho7mSVmcNwimaj2uJhyvtmEWoZyBp6ewugRT4BwsW3GsLWtwcd5y2hL4jWYfDgKc8HoS8dgp",
  "key35": "3GVQx8rUFdPM5MW8JoPASfD9tAneSJUex6LbomzGVmURvzFVtmf84dbuFtob1mgzYgtwsGh3hbTgB1vAJQmeqZkM",
  "key36": "4Foiv8ugxnLJKBhPj7BTMsadAu5hhYQRA9MjZMcxHbmFZv6RxEXHRm6DJ9trgTeiLURPgFCfxq16F2688rEd8hUL",
  "key37": "51AaFStZvuPtKSqybfk7coiTAx6ek6RakDdTpimiGSmw53Rf4PfyGvX8D28Bux4hFASW7DeAWHriUZNDcV7d4g6s",
  "key38": "M6hAo76NZJtXPCN2vBx3pY1GNU1ffGweKnievLdS5kC8r2bBubhihMcsiguGc8BACxkmKVeC58m3i2hhca2hpoK",
  "key39": "2mksuEAZUXos5YyUAxcHhvG7kYbVj5AUCUWChXQXLMVc8Jpmo7CpdtgMqSzqiMyoVUJqHrXGy8z3AoNamXpMXQ9s"
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
