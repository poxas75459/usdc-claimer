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
    "2ESjunpX8Vx64uTYAD6VkGn5n3ScARPpt8wx1ha2NMPCP7bYZcKGnKLfsKLVn4X1EcSFMoZC4jGScTcw8z7KmEsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gXUvZNLvqYVF3Ax49kbfa8V84UoZiLHwTJ9UaqJJM7fbUzSSQ9taB8bm1A3rBQhiQ6py7a8nfijX9VZkpTAXoz4",
  "key1": "3Fe9fF7mBGhpn5XFpEonTSsrTBSBD7CUnAUsoFa8gFos28RyViuBF3ZM3mByzMvE6QsLrrTsVqew2qkFBPDRByhh",
  "key2": "61vtwCGdWdBy4s8Xpm4CL1JnMsktRmSEiNenydb53TGbFJcTGnYPQWFtvQdDUgGUqeY8b6bxuRKxJWPZJCcAp9ju",
  "key3": "rJFeRhhHDgd1n9YC27jL9cEifft9ywMPUzWW1gMp2tm113XRg5qDLaE11zFKPGXQWRGwjTmzi3sTBmC2VKFV3fw",
  "key4": "2L72XK8iRmqNQGgB5PhQParoNiQMfNMiG8YTeLkrRcUm9wGRatEd4bGZ14QcHnmPv2JKxuqKomJLkaAETukCQNzE",
  "key5": "3LqDiP7rG4fcbgc2AQfPd4rn2fak5wQkitW93nG3BgHmfNkepjkstcVHAZon447taFZxx1pE5YTMq6qdayuyjUvJ",
  "key6": "4s4Q4buUmBPFDUrXma6mxikDETK31SZnyRWpyQYdEMrvjWSsqq8wZJ6swzrFUFH4zzJMTGXJezYUSJ4JkqN4rpo9",
  "key7": "31uTRSgh8v5bhix5M5Nn8NQfHKp9eHc2P8ZSNFbe7kUaqutFY1gzdmuSH1MhEY8Czk5EpuuwHrVAyASMcpUz6UqP",
  "key8": "4w9aBWdMN1YK3bNT83ChU43brNg1ZPzeWpUuDrXpCqqnKK7ashXDTNpyPLzjGQY3yvAFnZyBxsqNZQjuHRFErqr1",
  "key9": "5j7pekgSioHEtiSF5g3o93KM4454UfLVPmnPnARRK6H4zDyFSJNQ1mk8PfH2yAkvPjCxKpdJ4GJK2Jg1kzjJUG4c",
  "key10": "4oW6yG7QaKYYjjgsm7BQqEve6Hvypbi9UxBQuugEgRd6UUdv675Km5WAJYraNgskoXpymUC5jC5DKeshgRgGoUZx",
  "key11": "64194S2Y8dcW9kkqbQKYFQekCsPg1Q8BWUgjNFgFeUFFBLWtA2XHXybD1Yh4XqNWSry3jAswzvru5oBhd4THRSFb",
  "key12": "5yQfdXmXHUZPLhxztR1a9iduVRnvY546FDfkWvh1gyvUWuCwqJx49CBAZrBGy3tceexg9JW2Z9Qi9n32JmYVNjSv",
  "key13": "3cHQBAHcS22iqMgq2ekj5mwKxm3MRjtGpu9GvCxqFiE9WULMDSfc8vWYDHhxfKztmy6yYhmtDnhxtHJZbkBSwoTj",
  "key14": "5AETc6xvEHMpAWahr6LFrNFcRTdByxuZ7KdMAzBZmN521YXZNHux79jZKZqspQukiKV1PBkLWpoq4tHTQSmuCniw",
  "key15": "rfB9yUVLsyKja2CEN1TA4KVJ3AbuASML2fvG3y2gEGe79DFoSXCEwPY2ZKJo5ubd1omRfiJNp5gMhCN23jGuMMj",
  "key16": "4qqGSKbCeeH2JADVL16sy3r36BtxtjTgEThmyKU3UWXeZbeUca1VDhA3ZprD3hEfcgfiR98JKLjCTw443pebMEmc",
  "key17": "126FUUDDtEqKCuD4FmwHrZ796RcUhAmJPhxQ57sceoqy81bFWieQDMxc2Mvreakoz35Qceo7kcaQVAmhPgy936LQ",
  "key18": "N35AkywXziWA2v9e4ruhMYbxZVFJkfcLYHsFv7Dabkd4sahDTtY8NW3SKStYikq82sx8tTT6D55TjLb1VD48dW1",
  "key19": "5UXFfdPUL3brj4ibtdHCRUf2Yi6eruThvNiEEhqnCL76uRVLdjfk9gp2e8ZY9u3Tsia4ZubaJ2WLk9Y59rFPLATq",
  "key20": "4kYnuBbwdP96rtXWim8KrsUV85TQsBPSh5cWbNCf9Wgbajm1qvYpokH6ihd4eR5U8j9RnMjwLuTkKGt6DPvTTHsw",
  "key21": "2vtEe5GW2vDcVb3U7GtcEpuiPAEhtGwEZeDUmj5ssxxFw6HwFUqSk1cPnkH78aR3Nt7Ro2j9qcvucHh478RsLZiD",
  "key22": "MRnMBG9StYx5ZBzP5yAi7LLaBxhWBFCLWdvrhQYS1beQ84woCBRAshGdH9egnnpihQFtj2oZcdQxpBETKQs2Y8b",
  "key23": "39jpuPsmdHxXBAZLB3HmWDHy8n4X5nqHy7PS5eoHiY4RjpV4AUUbBdPvX3GXKcXcqWFdU9YWYcNdqHRQgiKN2LUV",
  "key24": "438wK2x6ojnPwVZsp5Tb7GceUVR1xd2fuPCMxUib3m3zu7TUJqZscwACzwjKmSaSFzkAraFpouz72njCVVQFjYRH",
  "key25": "DdED9d8orKGSZ8Nge3bS48BQpcoYTydU2e5SGzxq9TZp3EbhAmzoKK7cpdp3Jb1uh5r3V5R6uHQe2SDMDLNnuaP",
  "key26": "2aAHGNF9YKF9tdLrvsrUPYb8hESvYmADXXo34uPXftxbCjf2VTJn22tx32puy3DSVWUmMEbbQwi6hJyPAGHtkTWh",
  "key27": "3mkUsR4QzJDovJQTU31d5i7e5HvFZLWJHAZfZy1nmfLTMyf2hLbMh6XdDeRYeHTHq89rZWV3K6GuzLSSqG4j3bWx",
  "key28": "3SLTWEXkTd6Zp9rvXKsdgqkD5LLapGxsiarnandDWgTMavGxahggq4S4U1rjoFFEf7eow9P9kRgvovacHv6z5bPq",
  "key29": "62n5apRbBqrmbA6YnsZDKLoA5zPuhfGdtYddSJUg4YY7qNH1LGZNgyv7oaFjdrZTHbrVFUtGKwqBNHqwoZMAPUQx",
  "key30": "4KNk8So3aRcJrYgZQcGt6RsMzCqvLhw5uRGKWbJkQjdPJxhvScqoDFgstyBhxSKQgmSxgzwK5VQNLLDjVozaneH2",
  "key31": "4JzURyd71STpJWRVakRcktfSMh3SX2sBf9eYmoipa4Ff9spk38RBS7gUK1mn7ppY3VrUctzDFZGdqQSqXWf6YDTo",
  "key32": "3Qe3pssNBwNuz11VgeyVMxArPKpijADDMA4eesjcT27MGqicZGSJREieXXsTnpbCn7adySVViH8fEqBRq35trs2v",
  "key33": "66LufV6GFzRwt1kQpKJEQdYtF4UWeA4potrtzPV3ZVb9GAxo7bPhAzVoTDFteaCtYosd3RXdKt8Vne92sAUCuFaa",
  "key34": "5mMoke1KcPSuWrUrjBreXDk57ddXfUHaVpF5wEQMSVGwdug1Vv5Cr15tjs7CTcn3oXajrb9R6jo31tHJroq7seDZ",
  "key35": "1nYW8e9EpwNFy7835XTpm2388BdTiJUmoMcTvMYe4X9dgL4f7pjzQXMDBUSYQ2qDWriEqKczqMzyc9Lh9YzJGWW",
  "key36": "2mYmVfSd6xAc5XGRkgeb4vWNSLnEsk5j3ogk1XJt9E2fruYytDwNqiaLSPh7hWZpc5zo4S66SqsyCh7TLfKhNC1U",
  "key37": "25CUfHUkZ9UMUaJMy7TF3QSVbSoaeg7WKfL7TKWqwTs2V5jQX85kNc9Y7xp5V4eQU4n8D25A7ug4Zen9PEjJPbz9",
  "key38": "2Avah5UtZSD9LSgsfwHfcBewFqCMz1HZfXuVt7DbcjyxywoXXA63bF4p6VCzCKeKpeaNguo94jr7uoLSaULRkKTK",
  "key39": "jx3X9UxmKLfWbfFYYQWKpcRfMUzK7QuUfZfugQeseTXFcTM6YP1AsHSLbYL8gwQcimMfgqorta5tWEX9ketDCik",
  "key40": "VT1uyVdfZ5zaTaWf3Nm2YDv3wudBfuxJS2XsELfLSUKeukMDecbis5HjkHRGYtkf5E2hAskUA85tJx45nufDyYd"
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
