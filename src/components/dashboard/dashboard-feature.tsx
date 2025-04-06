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
    "57mxXjKvRbyRBGVzEyjj8aFhWwkQ8CQKdQempHsPG81v24nbQ3hM1Yu3j86vUCSbPg6HJ8GeMFiBuCcvNmvHz3fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gDQUHoT2w9RxDm9j9f5PURJVWao9j8vTPp2jSsS2WxWdR2d4TMTy5NPCzbp3aFk1QmEcBrvar2jy8AAvCnANc1R",
  "key1": "r27aoevis8hjBhZhT9sAGmFQArgLe8qyXocVQPish85TVuB5VJ8ivyPXxLBzk3vm3e65zWPkDGNrJAEd1AWhYaa",
  "key2": "3AR2xZpiU8DeMTfG5C4xLwjwkUmppdpq2RnTzLYUypFnwip5EveLrqWnYeXRGyAu7xbTFJ2kGXZ6ZqjQzLBq1aSS",
  "key3": "ySXXuB1NVRfNm7nsL8CGcf12ghMfQT9qQL44ZorPmKNFrD2RwfGcN4rQcWqJXv7GkmWgatuLo5dzyYEHc1pHhjV",
  "key4": "5KtuGq4QSdgKcu9VzLXgT2df59YxJyx3GX4Ch5vNh7oah2Z8gSgx1FFpZ47bAGeSz7NwHzDy27uC11n4ozX5ZUDH",
  "key5": "3sCK9ZzrgL7XeZsTcsooxyC4JPb9Wc8p445BetvjLVswwwmh1YXwcSdUi5WCA83mV52mWJTXJ4HwP2LqBrZhofiP",
  "key6": "5jafSmpF5MWNL6yfxLPLENtcNdv1KNYzuTRcqznckEWiDx3fWMxPnP5V6ivsCX7VoFhCnkh7BAo84ZcQptmXyqzd",
  "key7": "9KtPCBepK2M26JEpNZ5jfGbn3645NJoPkeZL7XjtT97EaUHRowstrQwBmvumJdJWdBS7Fj6FhLNEGwbmDdgDNQq",
  "key8": "2KiPvf6BD5Rnr7ryrpzoG2DmSohXJ6JCbMBd3FzauXb3Tzu1kdStQX8emVT5gjhdg6oQRhbs3sEa19LBrncxMcMh",
  "key9": "364DvWfv32dZrn7oS55WJdUSYiyYACCassvhy7y5nf2csek5Aj1svDgPzVvWzsLjezWQoVx94fSCPFhDkQAWyLAt",
  "key10": "4nww1jawkzNgPX1L3mjeAijFuCWPXi5pQXWQL5MMUct6ktBX1cTRX7EN769S1ftPnEvtAgUmKpgnEztnQ6GoBm4s",
  "key11": "5VhLkDcmhXUmaVSxr1PKg61UF4crG4kjDYxSWpa45VBfDro4n6AF4MzSgjSf51A8UDTzuFk9GAe7kSziaemHvQQw",
  "key12": "4VXGavQhbFJ5eCBGcZZvtbpgGmWVpJj32vVFwjECj29kpGposvaSPVWhzj8BjiSBd2fivKNbuUC8jzW5xNNqg9Ng",
  "key13": "3LPDoSiGKYoqQww4Pd7Ea1YoM9PJsTJa2nUopwmRFpWEHH2DXqoxKRLWMtg6trocgwCp961vySB7wXak4CWiFvNQ",
  "key14": "4TTe5qcWQ5Xy1nobkcLsWfn7mE24xHz3s2C4q3oQ46a1WUSYZEq7Z1wrvEv7kYYPtT7AyxoUG9nWfr9UggKNfdGJ",
  "key15": "3KAgJXnpoRuJwrCDhoMMWMRqm9NXrjPGGBegjc7bFrAC8dPFmdQVyhv41hCcnDyrAUy2DK6tWAUEp2izu5zi9zHH",
  "key16": "rzs84iFk2CFQpyd6CRj7wUFBttwWNXo9emnxS1KGC8r8ErdYWeb4KNSbdpL2zGi9QMfwgAUHLwfm4S47Z2ocQWy",
  "key17": "an5ib9mXRWsGknEiZJ6RjAVy3XfB2tTeoYh6Kva1GySfEDRDa6i47Hz6QSFpkn4tTChLnPAcmMksioKpiRwY6T8",
  "key18": "37i1LnVPp9NpyXxPcqBoSPpnWr3jyJzYcp4JTuUu2vpFRMYFPKWfbat1KkCcgqhw1tmDtGMiVKqAafhrz21k2j5p",
  "key19": "2miadcUw8EvATYaAFosBnL3hXkgD3SGg5E78QUgAVxhXgXpa1DyCec9ky66ySyhGdyU5D7PqYZjRfWykRRAKoKvY",
  "key20": "2JcqAC955ZZRGjNAsu2u8YZiBkDLUHABV14YNwFPkgc45WpB93csjFbLYy6oENhVfm1Qpf4G93wWqwX8mECmuWeZ",
  "key21": "3dDmsCt9c69HTBPr9EYkTef5PUS3nsAVXYVj7i9ZqQxGrWPCpnoA5M9xRdpY1mcQzSRHJNijNFf3LwLV2ZDAcZgv",
  "key22": "3DqPYwUZmH221AKaERGRzBqwBqQdSVoDTVnLQEZoTfV2rSmJerFcEfLqyY93sAkcYRoWCSQJRseh9XXKq6MasVL5",
  "key23": "3R1t7vW7KgPEAQuuZiBfoaacpZ7FgQc3grumGm51eNTrFbZARyntovMNu7DCu5G9kciic2xZaixxq9mpv4Hwor1S",
  "key24": "4P2U62RgcSBefFRPhUN7tQhZKcu1EEp4jo9tGQbYknyBVLK1hmQy2j5D5HtpHacXktRhs4FW4US6g46DtpzB8bXM",
  "key25": "41FsVwMrGLqC6U5nnQqSdY8q71uLaqVUmynzQxRi9wBbkAsgHSvQg9wxTAbQKoNgJsjEv3RWSjMhZgNs6bkTDkTv",
  "key26": "53BV8uXmk9qmXv44rouXrJoYaQQ6Wvh5P5z3nzCkCQeUJkzfHDp63uAPp1DdR3m4M3NqGz7uNyk8teh4MEnJGvLF",
  "key27": "2cXuJQDcJ4fPwNHAnhRChGhBPvADMn21HV76N1ZhSeS5hg7bGMXGvFjxzSyAwj3o7Ne1xCy5aUespK45K4HnKpxj",
  "key28": "37xkAkpeb2gZjZQfLJvVgo37R47iCtsxYyXfuzhkuYKzMkh1JCvKv2FhjCD8LdgcrgZUsVNq6M1AW8epcfQBr7t2",
  "key29": "2D7NDh6p2UcNZFwwxENwxo2nsMyrUhBvWhKtfkpyp9r8yW4eAhEgrtN1eLxEvyEbfVnMxBXvzDGjgEd93gZp59zZ",
  "key30": "3NCEBLG5joh2j3QvmEgqRRULCK4cnjfXkF5dxuhRVEeozJNied26u1Qqy7CdF7eGH2bLGKH8Dy65xN5ZdDjENrs6",
  "key31": "3qwvN1ST6bsnrUZXJPkJGjqvXMPUcAMQrKDVZub6uMZ8BShTCYyXDjYhJWzP2NuH7azNgHCYFXKFzhBUrUkc38sh",
  "key32": "i9c4nTt8Nn9rtQE9yaUdexCVS9ayEgKphSLgP7figT7vtkJ2CwjFyXvbWYwgtzQY8vufPRPPdXfkiFHMbnJnQ8a",
  "key33": "34EYh5CPnY9ixBnpYzRUt728Siqaj96Yzm8qXJky74kGR1Z4QyFi35Us5et1RiScETPk9q4bwJokogWdc3Nt3edC",
  "key34": "3Jr6dgMQP8XBxon6MwY7ufiE9fXxbff9P4ujYAezyftxpNJKfJpWJUBkRnKRZefvwhfiuUrX3j4AcEWjc98NPm8g",
  "key35": "2XbpdU42VLRxGrtXtQnAU4b3b2VhG5PALooLUcVraTfDoRN8bxrYDfm4uufnF1VcsS4njK4Gnd3GNi8JTTrWtiMq",
  "key36": "46aPMcFLtvHVNer8f3x9k3wLsYnRDT2ay6DJonz4ZJVfE3NgBYS6SkwzNPAmKWVKKcQqHg8P15jGQfKEbZKt3RKq",
  "key37": "4YVgoCigfJgeGwKeLZdAy82ZMR2HC7yGhvYuiia2HqhUHdNWwghnHpVYyG4Nufyc2emg1kb1fboh642N4qUYgm3h",
  "key38": "2NjUj9wapSi2iQ1YuqVHK1vipFbfvd1uR4PiBZBxQN9hmKufej6US259s1WEZrFuSVKPUVjdF13BDS7VxKDEq7XS",
  "key39": "2EVC7yxxQqNUquXWxXjMtK6etkDpikXixETeu6ofmv2L1Vc8xGu1gRGcePFNgd2oE5YyvzALUdcYv6UUUUH9tDWr",
  "key40": "3iKA5q1Xz2mDHJqW1yxULZmQehtNoMMz988fTFdXHeSgefi7PGrHykh73WtcKN2TKy2AriiQb9X8rSqS8CaDmcUw"
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
