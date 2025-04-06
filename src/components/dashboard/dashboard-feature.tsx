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
    "5BTAW4KV8LAES2JkiQaGvkk9Xtgu5oRKNid2LM7NN546Co8JuJhwzXbEn99qtnLBCb2R4Xy4bmkTWwNrXVneY9Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9UScGQoxLT9NXkDB5iX7b66FFKWbC3WvN8JZtB2GxxH9VSTqFKVi9dJq6nHJhG2ksewLPFyaqb6LiFGLgvpFza",
  "key1": "xdFuNjYvq95SeHK7DnrTMkWB3iM5P9DFdMpBGhqCo1b2KENjChReY2rw1XG4YjvRjgk7CgSbFBtWo9i6dfxyr7k",
  "key2": "338x9vaGVMc63mbtgDoT5Ci5BrYU4pvdS3T8UJink7ESYcE4JBAvTbAGTzUVNMLXFQV7WSAyzhjtDbZf1FLcTw6m",
  "key3": "32zt1xSxiZgyJ1PtQp3xYCZBbYDR6iT8QHKct2PrEVioxWzLb9jn8qYu9izUAv9oeY2MnjKSGnssiUaHQS2CHLoM",
  "key4": "5NkPGXFu238uxBhRWWcUiXyEAVdK9ActH74frkFsJ8rCsTjjL8hRg4nNTUkMoeHvKdR4Bt9B65D4MGJGCZ4EnZ3t",
  "key5": "3oF2pHiKVqr6YGs7G7AD8UtzNtzmetZkp9Pga7mX6XnLr1aebwVvky3CtzeK8niXgtT4VAKBw1shzrpXooezp1yY",
  "key6": "3YPdV9a2NyN6wfr2nAUaSfEnDbaNZPnip4bjgjR4dbRehchZc3jfXBLGQ8EMkwscJuATZ7QcU2Kp4MotgggsN4Qu",
  "key7": "3BUVV5PuiUrfJYbpycw2pi3Fe2AHMFrs6DHjviXevk3QknZ2KvKsyebcof9pzbY5TrJbUdaQdc2ki2rSSJddz7ah",
  "key8": "3a8JTbW2YbPwXYc9beBxK6zKMSkr334b7HYfXtRzGagRsZN2XzRKzWonnpdUC6SxxXxBjzJ6NdCR77CjQT5fJgCC",
  "key9": "9N2zw3zZPnncAeKJ3drymsTzcp534mMkk6iiKy59YgPyQy68zoXQYqYxpt6YmmyVGLmuqYYxo7aJztfvCYeMfrZ",
  "key10": "2fgxT9KQxcr1Moy4Q1WNuCWrjVSf9uMxaV8PTTRGT81EyVN8EEzRwfVUXiPP1s8irc8wdxa9e3h1ihdXZy1quGSe",
  "key11": "4hdHUe1RK85tSRqGn6TUB5cmsEpMxsKGmnum1KgrqtEnPFvYqtHdqShBYJgpWWbsx1LAtcA9CFXkEK2jaZqBzz3d",
  "key12": "2fCZW5BKxaurc88Wj3R6ftjwCniTF5xXyvzWF2iLTDUCn64aTAqE8vHAUpSFUU3gsiE1WGNam9MJ4WpDgFpLAxKG",
  "key13": "5rD9vtbbQK6j2uV8GNBXnvY1Zt6FkMxSRbfW4WFMenMoXMUVDL1LMC3PE41PEKfxtQJDrqh2Ec4TDeKgNnhx8ZN8",
  "key14": "4SptdVgm2ezEd8cFvkMxPKMLxDARK3wjvniDJn4qiRVCdyNdWVSEvREqfqmmAeiJAbVKPouHq12VWdsRRvgkNG42",
  "key15": "48RPVx2rGBFZMKMPyM4o55VDvR9M68Bt32EMaThGjTvS8TAzCcKA37qLSi2riJeUtXFXkx254JFL8rGtxf8PC93W",
  "key16": "4htXpgRHYbYi3gghKCjkvUyboVZ9tm7CGrjxkM4LSkBYpdYskUVNucpu8ivZEZbRCQXZdwbzeypoz9D866yx9qud",
  "key17": "4n2BkNLyrbNC7RDTHCyGVymoSgunVLfNwNquvNnGnuvyJnZrpoLfGS27cywwVR8c411DTN27b2sMSmpxWQWn74sc",
  "key18": "fff24dhhm1A393yxVSSGP7Wnpk5RThUNu6HyS7NjRSk9wNKdPC341BhR5TmaDhroybQmTNMQpvtgPB8UT46xbRs",
  "key19": "3Ev7FhdwqVnVdvUnV4JDKd9A5c22M8wx8f2Fbz43CnWWkwomB82FWXV3Y1yFCbqtRRFbKituH27goQNmNw34Y6P6",
  "key20": "5VoXDnPD8sz2zNwXJqXWAJYh61LhfVASSVfmF5jSJt5kg6cVgnDPREbawbnKHdrbTKQBnU2NjNTPqU1EuC9eEKQS",
  "key21": "3FFCZskiypLv2ysFEE6qfH9pydoQyGxqzy69vuUrGgBcU42ydnbLKMmVWqvJFgWUvG7U9CX9nGMrmDzn6VSjZKrn",
  "key22": "S1JKLKftWcbW8ifuYUynbHkczXV7xg3YGwfUftj7uSgjQKdpnoksEEgnKNBmwfQ7wpMLZHG8PMSNgWBfsfe3ssa",
  "key23": "58ehEx3b4YwTs4WhJ7o9KriKioEEJ4zbLr7Xm6isZSiXYiLt2XPHnBAnfHxwGjtZfBbNFVAsu2BtgpvbQMeT2iTH",
  "key24": "3LYLvxNVcXbLgJyU7dieBgpRAhEd3apHJyZpFXgyAnLmuCEL2cBipbdhBRiBPWVUvhzgdZceBgUvmBquS4Ax3s7E",
  "key25": "5GXgJsKopK6Ar8gjUqnWHGzCowGV74xBVx4Q5ncHD1ACbb8kYqxevoEeBDK8FkN8vg7CyDABbAqXxWJ13TP64eKR",
  "key26": "5VF9UKBQyH6zTn99TduZaQjm7vobDL64gXoMkvYY1bRxDCEfFvadcpxfKbzAMYASe4hFTsg4Cf2DfVzWiTbdiozB",
  "key27": "3EP77myVtriDC8SusHr1YrhzYSptRSextXa2AWMtD76G3E7RV8xW577WwFcaGmt2Ht8q55AXsvsB7ysBhMwtCrgV",
  "key28": "36GDjqSGnbsketfa9Bj1bNEBbsFyxajaGou2EAjTw1sDRNY74WJTjsy8HSc88xJHXQ674ue663CrETFffMcjS1UR",
  "key29": "4NNsU2H8GkZYVSPUvpjpZ6GtLX56EqYXdvAwfRhyKMwFzrw1LmPhSK38KjaJnVDnyXSSNdWTrCa9FxQrGyz6t1A1",
  "key30": "38DYXhr11YpqdRaCySmcm5rEzQ4tJdcmdd7GviBKz952FKiUorieLkeBrnfeXTgF82BX1qxPyge7JK3W2u3HytQ6",
  "key31": "2ZiNGJ9aSGU4fatWrUywp23BpzUcoB8WxUe8yvTB5vJMUq49skJmUFafHrRsfPFzcDZf87dijn2y3vsxuoie7STt",
  "key32": "4Eh6K7DXp5LWg1trBqjrWdm42Zdm8xmApKVZjs3TRjwM5j9QrsLvQaBYezfZx35A1ZM9gEmgZ1LHDedZoirfBjUq",
  "key33": "3r38Sob4W6wcpTq4QwSe6zuQ5WftSgS2GdDhHCPChLEMBQ3RJcvUksf4FTbcZtGxcZ9sEfD4MDUEb9DRAxNYathu",
  "key34": "3V9APvihRFre9QnWUGKA9EU3bB9a7MRg4wpDyT5w8Ws34XePe2XD5e4jU45fJEVNKdyTjFLbyK9ETutTYWm7yMbQ",
  "key35": "CE3WvYY5JRpmqLq3ppNUVtoDq3M5ZhYp3CDe3Wj1d7cY4pcoAVCq7exvGBBosgU3cgfQWsycz8u7LoG2CSkiuLa",
  "key36": "FwjLj3tekHk8o1X37cmbuZJEtqrVCkZPtWxuPRQDKqm9Pipwx2Ze2uRg5AoCYFuyPD7iKc9iz5UmjPeACCkXDLr",
  "key37": "495ZZ4GbHQuzipNrd6khmUwkku1asagGPJypeycmta6wDNNvKcLtp5eCXttLverKHjEJ9guGbsqD1tzgnygGK4Sa",
  "key38": "63cDrYoHU3TxRDtXCbgCEps5qR5WKDE4fGzeC1nLJpaX51AeqyxJudgyjfL7M6ra3bDpqBuwoUiGtwYvEvokpWCy",
  "key39": "a1Bx91xvEg6gtMkQ6LNmSxH6DjibCUG7wPEyx2L1Nb2SoQLH819K3XgjgNoxr5kztkRCdpJXyx6rw5rhYAm38Wu"
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
