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
    "48c3vHRQjcVZoYa3Lz4o9AEVrf9Enanxqg254kVVen9RgRhMpN24MS1tReSkyCpQzdkXhMxkm7PQKBuY8R5t8Qh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyHviwa4QPhS8LjkPxqXMasUqHawxqPEuyk4Tpuhe3gFLZavK2oZrfAeqnExnoueZeUKAdBybLRgikik6rwMDGz",
  "key1": "2senGrtLCCLJ3g2AjSpeqBeJBFohdb2LiGe8absoTf1zHxD1CjR7xZdafwLCLRvCghTY3CG2613cs6FfWNZexa7W",
  "key2": "4mDQmUP7V8s2Yn6Evr9FCuBRxJJQw26UTzQHsjAPX4C7TnfBPJ44voJZtuwhHKuHDM9zm5AfFofx2Zaj4YPxRCBS",
  "key3": "4AQe36xqSSMeveGBQJZiE2VbpKZKShBvKgrgGb7fSyLuBSQVRrCCCWD2hxNHxver1ZqpE7wZ6XobUQ5yDwdv3u8",
  "key4": "5me2ZMCe2395UiYR5SNJ5My9sjkW8MLqvWGCdMsZQAz5YdVQM5cPzsHRGm7Jr8r5cqnqWZoavgd7hyfMgj1QWCuT",
  "key5": "3nq6Pn3GmzKN4XELz3DYryFyAzzKTnHh9WWaaQpjqpGSxod3ViMxvvQJQKyKKLcAX5ixUeLUSGsMSuxnCw9a7Lzf",
  "key6": "2r7xXyMCyUgksAbaW4jvvFpc2fokHRXdoUtQC5pCUvozyUC9LphZAt96tPg4P1vWWBjR5GojzEfrbYJRGHRP8dzq",
  "key7": "3nMALwzygzs35EoWRwGp92Sp6SK5eUBxBpHgdATq7sAs7ppDz8Raneti6ctymYKQ1FTizrUi4QvB91MHZ88c432j",
  "key8": "tGe6e6ampE2Wuaczs4RkqxD5utsUG5zJgu9uooqDQ6ygA4GD4fBtaxHmoqTLgYmjUetGmBw195F6TUGGWRnbkuv",
  "key9": "62WASfHkjQznhpinQU4bmQicD3Cc1kMkRtBLsp6zuPvWeWqjxyh2m6K8duPnFzJRGT3wNQntUUJ2DHjU7rMz8ixj",
  "key10": "FcvRtpD7RtLK9pUSLfBGYrtvTw87jRDrdufHjmEXhTfEMWWtCa5C1LvEGdk6HKnK2vLow2kR4qVyHTEiBtu1HTB",
  "key11": "59Znyu1mD7kmSHP1URE5edkftkqojt4te6FosLgWccvhHk6xdPj45xhAgYGhG2wFTzMeaay3mAVbjJrWdQMMKwxN",
  "key12": "5vsf7vNHHAYhzz6XnyXEgpGkiZsGpf1uGYgFTqFN2PCmf1bEKQpe6iykwDjV4DpuK8vdzqpUZRsgbmUSnZWy4eCV",
  "key13": "2XDdxmDzzjhhRmWyTv5uBVDvDKXpnCcxdkX9NXndyYXQafGjDS2rtHtixtJk3pB6WtkLsaJStp9KA94H99tTUVKu",
  "key14": "2DpY7ZVbWB2vUnKXx71rqXzH5wVfeKMR2XiUqDf1AigYU7TYd5eLUW9uGjDLWnuV155Bve8UTCYHDfVcZkFic5jt",
  "key15": "3MC7JsSGaLoRQyR8txwxNYZdiEpEdgfkSnvmBow1JXZfVMYgnsvEXBQWzkcyArtufNTFaHKUbqrQmDBfPvNkt2o4",
  "key16": "5nvqaEBNcUpVBEWRmz5THJDGU9RaGchiYbGW3XxFuUovGyGNZszTovNqQNAs2SgAXYQCSXYUD2XCasAG3QpHawaH",
  "key17": "2ATTdeBxQAauuJGbtZsFfLtgCdJappsyNT55PS1t6PQUqGtS2BjTRdSMnJuezGDicJJugXYudGi431eT8tM52MeL",
  "key18": "VuXjXJzNovhqdacThV9pkfKqjs6zEY4B3iUb2tGUPQe43HKNFU6vse2pzQCXcnb7qjP833QhNv2Uuuo6TXc5PAK",
  "key19": "9QzHBTPGjjuHp67u7wBbzNZXHLCAuPyGSidrFtnCRzbnKjKYE7dbPZV1c7CfKqQUoDw41pNJSSevdXsjCFtBxNk",
  "key20": "5FHArXRfqJZCpUtHM6syWezjZgDsF4pG3FJZSQTPb2hirtHtvC5ouF6KGRVgNDwzC1acX5GeHUecxtqviyDASbqd",
  "key21": "4JCCRwKSUQuiLSvPh4XUFtgngk6NG71nsYq8vYejpgXnYAS93yYRfKfsotRb67rNNaktKJCiTZHkeEzyAwbeVEZi",
  "key22": "2wCjzLDeF4rPPUKLvGRStesFxh8vweBvBDwJDBgErnGFsFVimZaMqSQpH6pzdYEMm76PMmkV9mbrtpEVc9j1SpBQ",
  "key23": "4n7mNiPzgv2VHF63GhFLNwABqwCRSugjgoCSCHQ1jJL55x5tQWDC47arJ9HYhQnTF4Jsv8pdxzcdCzRmLVfnJNLN",
  "key24": "2eGutpWMzKA1Fkqzsh2XQUcvHMoQFUnnCWa9uxqWyKP97KshTC4EqpywDtNVcMSP7D95uC14fwN7WdT5PYvUK7ND",
  "key25": "2zdgPokzTG8RR2wacHU83SdAqUn5W7tDF3kJjTg1vZ5wZ3rJoKkZCg7auYM82wBMUPRPZ61aCniPYguyYFjb3B8W",
  "key26": "F2zx8PjK51TFzHQWcSw6bHng55vLYHLmu5o23FC7amiCaQL7XLmaexeVeCYiH7htPjdD7ZJgG132RW2eXoYPhuc",
  "key27": "32rD9RjqDDjNNUiGHMgS2idC2D8znk38w7bMgcCBX8VxxgACPevBVPyiBBJCSfGFDscPAr2ZAgxtrQ52btXp2yS3",
  "key28": "vEUkpKkeWYc4qCz9kmWd9HxQr69VLrLAJ53Tb5Ko1oYp2FdWwZs7TMiUf3VW3V3fCNA2W5GZCPXGSVCHcc4YrR8",
  "key29": "5ztJj2ssaMZcKGswLrjy3eSUru8EgzUTXpcasDfvnv9Q7PD4Av199BZYrDQdm1kK4i5u1FKXhz9fctSotMNFQ1DZ",
  "key30": "BDLdViRmRUd2eHUsRTb4KY44HGLvtpQ6ntvD62jCWcWUYGZ5Yj6Zvyv8435ZSdArVkwWRr8FBryZrksWrAE8d6y",
  "key31": "3jexjXynQprzhEJ7ADxB47L2Y2L3qmzSKTW3zhmQZg758c1CdxwDwh6wFJteoT4XTU4SfA3SpMBT918gi6RQ6DT1",
  "key32": "2z9fHMDyAsDq8EcM1mCXAcitmJzR8FtXHV6QUfRELK6LB9ttxKyu6rutjAuEwL8hdJ28bfYcZGjw41HD2PP8VuLx",
  "key33": "66iRtZDQpNQTREKWdnhV4XgPnoUBvt5jPYatDiGkZEsndLDohDgc87r4DQf4Y5wC7thx7j7Ht9DJw6H1DZsunJfC",
  "key34": "5PbroMmJ8NrPtgQGvExzhpEbrzdx1D9AbatEaibT97AkwrAvMDjxDAWCFqB9xRs5ebXgJpCb4faW3ds2uu29hnas",
  "key35": "21GLsXxc7UnNi3L3X5B99NPpAsMYA3YgqMKF57CTZ49VVADrLP6ZHGQP46M4s4xaFj2QG7oUHwMbq2NwnehKmxiE",
  "key36": "3LBbcJKERBHojA4pkoMczFisv1hiNfTZeGBSVthab9BKTAS1RY3aCRZGGb1ehdEuoBNoHuSUwiitUZ3o2VbkMkjo",
  "key37": "3Fo93sUsZEiv3x7t6Xr7e5HPiPeZwHVnPnqGzt4dbA7QMVqefLuVDGtUryZvDFiQZ5TgyWR7BZSv14VovrQ2oAma",
  "key38": "328UGro5m3tvNoZtY7eXKfTEWe13j3S78jhMNv9tfJ7ngySvqBdMA8DXS9H7w4mxc8xU1fXjcVhDrJQFBtA1kU1u",
  "key39": "4LtyVLYw27X2nn9QL3zSepr4eQMprdWrkjvtACpB6nQEs3HAXCD8e3NPmLfV7S8GwjzjeXqADpuCEqR9K1Ay3XzT",
  "key40": "YYUFJqNqMp4HHkyf41gnURNSCr3mx18yrcNLFLkZkWBtg1CpCSRtaBod17frmF9PxP6MWCimeZ5JyVHuKmLvRK4",
  "key41": "3FHmR6cmxW6ioVj7RxZZhxQoA8DTCGRB2YH4ZFkHcvddLvpiR1kkcg39xbTzzKDbvzzVJrZ2CoxTnfnN9rDGCLqD",
  "key42": "2CmAFny3ffio3UJumbpkbYHyWYAk8H3DBRyyTmKzuKMJeye3Vhc46QdxLZW4qQxpRxSKxCLm1dagJ1wiawEcfGi7",
  "key43": "2WJxRV9vSCP87qb99Z29ehvs3zk72ntiwbqtpspfjrf258DG2aZhRUxJ5qKsrda9amM7Wm6icGJ9Tjmk1HB3Hozv",
  "key44": "4MdneLsqtw7jy2uMb5ZHtJ6xvs31x2AQ2eDPNCG8R6HjASMtiDsy17AmARYcEho8GTyJzvZSnoKu25tHUtUnx3kc",
  "key45": "eRR2YJQ6rPqgR9L2tp1E1JheUKzhGrYKPKBjy2kqE4FY27UJNUgxoE1kaAZ6q7mXb6nGBsiSgE8W5kqEmcLAg2M",
  "key46": "21bMwVqpFt7RixwyJArveef8BzYazCZvrNC1uzbRT1ibH9jzXXjZoG799CQExskQrEZ7AK4FLqYv5oMgafgFLJh1"
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
