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
    "5WpoSUvrGc25TByioM5RodQKn96yrwz7iZbAewRTjYxhnfLX94HKDBo8858bFgfv5BcfrHHtpseeSjLyq1AWREKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mv3pqMDshbMpCsoMivkmeUoeVVoU2J58uQGzv51S99b3y7KGoSREPio2JoqswgvtAzSU2aMWXigwp7Zj3SiWzpg",
  "key1": "5527zX5spEzJhhTKrQkbjWDshC6R1k5paFTRZRBBXWYNJt5MxYiTEPP7zh9UFGfA5rmaKJ5YoCFkjRJvk7ovkLr6",
  "key2": "3pLA4FkesGwYRr29jPLFZTfLeKJRuQTfp3HuHUc2DB9qcRvFbJudDn5zKtgr7z17s5iWuFsm8agLXZZUegZUmZyA",
  "key3": "2MMksffKbc81B3KGScWBn3U1b9o7jig9Hy1g1SzRbXbV9oqVBKJidoszwVp3XXAhtZnmuYWu3KGvcu2uGhRqTh6e",
  "key4": "53e6LjAGvax6Qf7Sx5uvhEJwmaFRqedQEKxsYJ7BL24uUaKfbTf8owh7xLA8boDCBrMVeiwGpuEE4fP6mKxLGQ2Z",
  "key5": "3BwfctK2pfR1QvrD3PrcvcWeQZS8X8hiYGngkszTsdxgtZ7iABuqnDYBHCGmGjeZRTF6mHNtoBrUfyxzJo2u6gH1",
  "key6": "44t7fbwPGYn6EYTMNbKdbeJoS4Lo775dG6WbrDCW6J9ju5tnyKSiQH3EBEKSjmVuTeeoZJBrhSsc12nRFAk5TtkB",
  "key7": "5WXenZ3uMf3ZvQrNbgtjrqr16DgH2MZZuQokmtKmjtsGvjBrJx1rqVF8BP1qEgP64EzTNYGp8NRv5LYMrn8u6v46",
  "key8": "3B3rPKs6JHnbwof7S4XmdAHjj6BFLFvwGAeeysJrAe9M7f9GviD2dyiQgxTUD7SotyVpRPEMXAJDe8vie3z92HrD",
  "key9": "5EkuQ3k7ZnKs1HTXDAB7mmfpDN4aTQzWQMM8hpHiYyApEMdoJ56XKDYacq7KAYW3bciev8JWPc2XG4RnBcgiDj4E",
  "key10": "4F4bHsBGfW6ymaNe6xmBiXfjzMipaVdW7ARad6jRJ88oPWxnJsAAzBU9BYSYkrgGeBYh6GD9aspSrzmTVirz3Epo",
  "key11": "5xA8Di16ZjWJCZVgffDusVMEiboGAX1uxPwexDZ8YMN5a3yTtx866WKGT2Jm24MwTQDLxwmUeDNwWG3FQPC6pX3U",
  "key12": "5wpfPzhwpf6G7CGE5Af4w2YXrsZfNdZir8B4Ygo8UUBbB81LdAxLt4dnjhKuvdqLYef4xqLg7GLrrNWAkK2qLU6R",
  "key13": "2XTgTrGpo3BchoYNupZPAZGuY8p6RZ3ok4VE6J2s6J7ujSUrSoDVCRN8wnq95tqJKgYkBwMDoBtqrw8SqgGf7ZY1",
  "key14": "5sh1xjM9yszkcyBFGAGEZLByYCz1jnzHejkq2Fd18WixEgfAkkmim5YkzhsKoeLuYAoGds25qwDB4iAp4oLJzZy2",
  "key15": "28xFKQejHkQtgLXbE6GAeWpdDCGeKT6tqmKtBAbbqDVZ3ocCQW5r55KsKaESZkMYcavpwn4LXxfabNg4QjcvN91b",
  "key16": "5BXQLDToSUqZDB6VWVWjbqP8nBpcX76KudjvH2mNgfxYERJTWUb1pV3n9VLKtFyKbfe9bvqw3EbrB3cv6sYxQMXj",
  "key17": "HWkELR7ziY8HtsSBCfbf6rPomFov96M5Mt5fv1nXj2XhokY5DoDbbwS1P1rKDbtGbhe5Vbze3VcWYGVJAJEUPsc",
  "key18": "4doY7sHBsUH2XHKNg3FPAaeKD78PWQ8pXUvGWJZfEYw2aedsaRpjwNAjNTEyF8hrJoLfwASMbBpedJC67GtftvGH",
  "key19": "JG2bV2Y8A3CJ4KmbWT6J6gjS9Cxdq1iLXhFo4vLCq5VZriMDfiud1eivLV4zWiQeDesujC71M4vZoTyeQpWbJjc",
  "key20": "4Mx4RvjKnQ6GQexd6G691XMyGAEV92aU8Bt12N2JJhUN64SwQwDq6qHjZVzLpt67Qv996DodyzFurPEbmGwsSp5J",
  "key21": "4AskvhKZGBh1FbXA6xD4GTXwCk1v96eBxLALFkw4dzDSXAbFa5DXJrxgRnENGGCLULVd7jNjX3PvCM2RQhJcHBjX",
  "key22": "5qvnHQEbMy5kjuRb15ykFVZSiiynGRSubVHFQTpHMiqjGb6EWBWPnnGKkUhMw2mGr7BaxhqRawoGGntv1S8GL1cV",
  "key23": "5uz3E1akrmQN7P2CxSKzs1Q25SNYgqfNBBAqpJugAzdR2j2fFzfV7cnzs15QaPQjWm1dx9gMTHQvWVuHKVRmz7mt",
  "key24": "293PwPskPXCmtuyHazsdBPUMTcLR7ipRRJNPyXQqNvzVFaPbjVvsmenFWme2hnZYLh4LUGXaNRtPLen2RQqSVNFJ",
  "key25": "2k94PNHewvBGBn5gocTgXrJdJj86yyx3mjczfJJVngxf52vgkUM6wtnyBHsyav6ZqtVHXMx5QCmS7yiCkrLqPkjm",
  "key26": "2LH2KMTttNovDJHaBfwuT1pgmD4ekHimGXM3dQZFR5NwBjT3HfqUccqtK589YV79xfLQXA8LmSuXAMzPj3qTKxYW",
  "key27": "ZWVAP5cb8tpdKxpieDYy6TtVV8ZKXknE4QxQfpbUGcxgGUBhtSPFsbQb7mhSMe7JAVKM6GxjuZKG5r31CY1MDYH",
  "key28": "31QEPgeREeyMCMJ6zwMMjwXB8K1K8PunZL5Lzz8iCVUBy4gzMfAcXvy2H5WdgEonVUni1YWVpEnB42zuYnskAcTA",
  "key29": "4f7TVQCrYaWWRsDQH4tALsPNwZzZ2huezhnKjbNsSgzYyXkqW7mxzsVZeynSTZwH6MGZsz79MvSr8gNZT8LPRZQE",
  "key30": "5YgDqPNmYauxpiAKRmHjVz4EF5em9EPC9FyGVqBQ4gFyfo2PwRsrrst9rfAXrAjJZeivRyniY3dtyKwQF7ciX1V6",
  "key31": "kukx3WuRhdfuhq2ujCPDMcbNrVPQTj2C7J22dmDU3yAqgmVAGCw9JDGfwfCLdJtfHK2aY8wejVqViBWVzmYWyWZ",
  "key32": "4rxscwsMrjYxFGnW4s2fRaGKfD9eTroz67K1qe72Hv5879wy1bQkJK38KCBujCaNdjHcRxdNnt4czo26BxTkZmUh",
  "key33": "2o1TCPwJxxt7mh52PCHc6U6t3yN1QY3zorU8DVw7D2WTKs3CQQAiYPW6x1DmBxRWfLi8mej9X9uhBx4S1T3Ru4DK",
  "key34": "5HBEFzxsCDUZsewVA8dvdQm3bWu1mgdeviWnz9Yeuysejcygzsr4zDmx2Fa5CmjjapL1mMmNd1FMQzvFiPqQhxKa",
  "key35": "2iGLrtGq22JSiWVVbmAzWKDXkksbxtJJStZyyJFyi4S6CQfmJY4QCJ1CxJe1td6LgVg792EJdqMitsVFatDK5K5b",
  "key36": "61dKPm7ReScdTTBvqJTLsyYRYgTgKpqP48dSgWGh9TMjwFyaGCGwYZj2yEtui5hpsNFkM3D1HKtBaynAb5koYFs2",
  "key37": "3J8kGaWBBogs8zXkSoG4zCFwD1Tjk8h26NM18ScwCwAzeaZE2aHhvSnD3w1Fcm5ARSPsNpzgWVtEpCxDgdkhCxVM",
  "key38": "3Us62pDC5XBNF56GPD7PCoeAAvnmXhUsjGaxx3A9GzqqzNkcLFsaqUDTqHcu1XvTr2XaKJT8guZ4fJD3xYKqXnkG",
  "key39": "AeXhpoasbRbhqnex61KxHciuTzwaaQf6xmWwrwKu1DvHgkLiWjjpdFUHRDgrNWTsrmEDcCZQtWLEz3adH5w3sP9",
  "key40": "4Myq8xc9u1J8VpHVZCQo9UjxmFt8CGgsX5ZWM4PQ62qJisZfNFUs8gFgELM3M1hiqeSfav78mskamLFG3NZtC21r",
  "key41": "4Hw18vzeDHctteiBYLpMRqFY27ETQghvhPrUt2GAzUTHVB6eqwfK1vjyVoL953ZukGgZyKs6G3bprkBJobzY54SW",
  "key42": "puCPS44eCUc8927Ht2xrBcQdkubSmUQue5Kh3P2nur7ksMWAt2oZRBctRcgyMCqK8nQeVysPNNmsFgi4mSxUZNn",
  "key43": "HrCU2X6mu5oaxhH6Ax6FgdNyyYZfgN71pfUzfSCKjkG6ufcpji5DfPcAmKc4n9xRHe5SLgH6CJpNV41G8Zp8eYs",
  "key44": "2p6E7XHXhx5kEUWwfbo2JFpPJnUGiRuTbCvZhoAdxGoQCPzueAE27Yorv1HTudoSqGYzgZqizfZv7CkUiynoYVDM"
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
