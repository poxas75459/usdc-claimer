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
    "5zJN1e51dTuUE1RnF6DXBdZZWdTPQWZpJC8ShLXv5CnHEvN2nw5atxWGtEZSR38cSzNpsKXRYR8oA1m3V4S2EtN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeKjPvP612TQP2Wi2hztx4JkG9dVaQxxD41caffVLAvTUFjtGZZMHtDgbcRDqD93PpJuL4GkZXmJZRNNaGcWKDv",
  "key1": "3NuKMjmGyhr87DLQdpZFBHKNEu3ycdJWLhYoDA5uDDP3kMPi9p8fdBsXcW2KDVnkMFaSfPb1usHz2iGAcSRfnyiu",
  "key2": "3LL64uHphsP5rMqYx1s4aFRBwN2UK7e3fX5P3QZUKSDgdrVbCP1mqoq3VF5cUXVrex5DC9azv1yL4z3AkFjp1WjE",
  "key3": "4kFX7ocjSd1ndgewTrbsMA2JSeJVzE5FBDNHSLKNCHS4YedwB4EnP5eHgA1MqWA7oDsnLmJxxPZMs2nAa2fBwjqV",
  "key4": "5nPWzShKnKy1xR2s35FU22ZNDeHZBm8mAdz3uTRDSYNhyWrNPD4USKBngWkJdAyxsmkGiXDPjc7gyJmny38hE7iv",
  "key5": "3DFufamBDQZEADFybKe8Rm8xo53b6x4XXQ8Ekzp2hYe1jwZQm9wZcCJ9VAVCWAKnFz2RfhCCuyHnnEbWvoKpe81i",
  "key6": "iLmQSUdzaDwzFFj9iVWGh34GBC4LZitripbDdrSV2uqhDX9bizpkwVQSDE3cdrwkmvYHb4vmhAgkQE6H6nt3a5H",
  "key7": "2AMkF1qQFTi56cogptRjukgfWwwB41QAw8BfBUoZA6LhW2pn88P1mwy7XZrRupv1LnwPE4QsifQZ8dAGyxBzMgBa",
  "key8": "4ioHWpkpEheGcuAGXQ3383fQMzNznR68uDjYJ8zRtvqRpiqbReQVQQ9UABbos8zLREn4S8yfB4xgSBAFDHSCwg9y",
  "key9": "2McgBUdhiKupopJuSa7FRx4oLLPPMaJhNKY2ucFzoC1z21JS6XUgKjmTBU9PCvWkhzW8ELwdy7R4MGLC8fyFVjKE",
  "key10": "5c7APMHQX5o6bzdSxBXu1UhPYX6zx1C93YqFaJGVgixab6MXtvXn2EW9yckrHjpdhok3G3cE38BMxV86MoKTYnzu",
  "key11": "3rUmu6bev3Kgvjtoy3rd4GFBYVptcV22fD72JUz7JjaMfnvSN4V7TmGe1n3MV6MMFhiDSKixMYyPwfLnosomW5VN",
  "key12": "32HJFswpbDfzA3WnaCToRa6XHQaWKgNf7VArc5MTJahyv92gLjhHyQmiWsLWq7sk7oCfuRDqgk5HeUz7oK13JmDU",
  "key13": "4mezZDAv9anknD2VVeo5DrwRg6LC6sB3hvkMsuGy6k3kT5Vy4jErRQYTtknS7uRMMmTxxPi74R1yeXCakjBo2mFj",
  "key14": "52LbF2SmZ3wbRajuDRsF6jM5kFYvBg8m2u6a5TBKczsZiVLjrjsub43Y2MAbCbsn89WWRd6p3JskZ7GLx4NHsprf",
  "key15": "3Drm6BwsStLv74c8jFPn9p2ocVA2jNYhqYAA9cHqzQMaMeg8vAnDjkbG8VQghfgTd5xFnw2mgMRYyUPCsyVgzt77",
  "key16": "2c3F9gWdhyzzS4MhdWn4AjEZ5W69gApo7dKieyijc1m9ipEUB7FQjTPiq1LoiLRDfCtDDYFFpfT6vUU1NPBApA5x",
  "key17": "2Vnc4W6S3rYehKQBehbKD5krVBUkza1J7vG6t9nfV5f54KnWqb2ZKTK2x18pmVwrxket5MQ1rU9oXNuJa6SFV4zG",
  "key18": "2yebPAaU7Ca9zqUVVsYJCmmw4QzFKUSKisb1kwQ7VkeMhfBijRXQqSjDj5RZLDDpRxYgTwyjYdY7NRj7gJBdGrUg",
  "key19": "3yYX7aX6UBwuVLziB81r32hB3VkntK1i7VpumpxgqnpFF365WCSAZjgeiTrpKDjFB9u7ZPRwRfukTqhsqVsnbjmE",
  "key20": "rgcpxK25JovFAL1SX4eedZEsjHY49qFYMPDYa5BCHBd7W48h7Qru95FENnNA4WAsg5VDPW5i3KKQKsQksX6q88R",
  "key21": "3TSwbyYjxkmbTY3bRDhM1yu9yfNbEBg9ZgW2w469szopUo7SrY6qwp42z2t9apjKGXNy4V6r7rRSCe4APqA45SVN",
  "key22": "2XsQt7F9ctmK23p9zQkVUAaDk9bVoMKLEnNCbB4a9bvcDSF2pprMyGU2a2cS62LtkHzyLhNrYW5r656oo19PZrEL",
  "key23": "5T7ufWeFLuZeoYYArtV8xKGhahHMkhi6kB9dzkmCPpJT6B8smtprVpCgjEXayYcyvRvF9bryxMvum4wiQRkr7pfL",
  "key24": "2Dy6UgpHxE1fGMpVh21whvNnhLT9yQCVnqkgxFXxigTSxPBWn41zG9Y1V8QPJTSHModZgzbcEDo58pyfz1k4XB9c",
  "key25": "3ahxEcHb2i3UGbTJJVgxeAD5WyjDwHqkyYRoDuQq5tsiPD6TGytGisTe6uEyXjPja84jmhTDnHhnFqna7iHhwLZV",
  "key26": "2wpDoDgYeMv3ny191bbLRcqUMzZXWFBLis2X5wUt9KEsm8Tv9A7Wgbkq9UUy86GTJoZb93YqhybEUfzUbkpVTYrv",
  "key27": "2LHmuY8Kuxcvqrwc4ihU24zZLJRZfVRx39m9Txj92jWWwMeGki3EzGfGTYz5iQ2aWewNVkp3CJwQK7eqrzm5PU9n",
  "key28": "4ptZsis7ow3SUHuXDfwtFLc7h58A2X3xiudxvkVjV4pVhEiNKVpV2Gr7n1JPHmRBqCToDpyG1kv2ybMggZFSZQs4",
  "key29": "3WBdpRFmQAUNp1Uw8PKD6zkmjFJKSp9gpQ2uxYyzSbrJ5kuFLNq78gF8TNnF8pexgQuFFPkZRnDziteBaDhjEeMW",
  "key30": "gjcsRL5XMCxdxQWbYamygytZqTM6Gv5vVxyLSGtgKy9ouRzViN9x8C5uT7Gk6ayg4sjrCeptMcHLzBziV5dEz6B",
  "key31": "4R7TsPcuE2QKu5sod86Ge3KNPB62auQfKR4Y6GVsAiNuVuv8WaHk6h5bGakaoVmQTT87eMUMbCyzvF5rtXz7Nv3g",
  "key32": "riSwvcdsXs4f9Mzgw8iJGqLsDKjvbYpTYR5yBC8QCiepd9vXz3Rb2B2DQSHT4FugrdRH9JAchN4UF9kzSMrVokT",
  "key33": "9W4oRMhtM8CaHUdF8iuDSX21WQCT262PHDU3st4b78JW6Zj5SMf3y7ijQ7WWQDPxXes6GKMYCtscLN3D5Squr6J",
  "key34": "3QftjwNCcEUFKhEbW5vZD65gHSAXXhdSAQheufksdgseKdfujmapFQ3WfJD2PVkyXSFfZueo7KdF7JhzZic2dYtc",
  "key35": "67rMZHhZmSKsHub2ghGd16xXWjbSDjKqXmCg7TZSpL9RWaa6CByCGMo9Z3gBZYe44q2pqKajmWAcL7D7aYweh8DV",
  "key36": "36mRSv3TUiUmjBv9YUn3HNUKwrb6H7ZBv2T6m5a81nNngRgoRdodsottDBqTT1tP1kw1MDD1Y7QbE9K9oMvjA2NW",
  "key37": "yRLvvrRTEByJeiRy2MF36uPBvNJsnXgp8Bo6MMvwNzfmxQNHgJ4PmWmTcWANnfLBy7Ezzvym9RpvFxvNwpLzTZV",
  "key38": "2abBCo7XX7he1sJATW7yoVokQPPkAGhRbNoAaPaMbF8wkfpF27keoMq1iv898PfFgbMUD9GKLimBy7sDem3cWA5e",
  "key39": "4M1fnRA69ovGfEGHQFbzeCdJdpoemKawhQMVEHisGns4XAewNNkG58SNsU1dZkukvNULVPFdvZoS7eoPjoBq4JdF",
  "key40": "4q32HtizjAgosgkcZZ1xwZvuEk3RvGqDvAU7xSjVeLtUJU16YadroPd1fU2TdrQpLdDdatpQ8mXboSh5VSeV4A2V",
  "key41": "4CyMm2ErycCpWwTKQ5RBoTZHN1HJuHxEusY6q3RQJ6jP5EjL6aHJcDSPt8xHmE9yX7vU7Y6pu4f8Sg7NLR2aGjqL",
  "key42": "3cWacjohxSrJvhAjZLGPeMnXQwBwM9s8i5cNvz1NvqgvY8gxTScGXbx2wEAvdN3w8f1VVVYoknHAmfdPpM5QEQ71",
  "key43": "2FKPo6tEbHxTLfEyD1ADKxhKXU282mBsbAEPFHeZa5jkVKTF1vVCrq9huPLJc4Unzb4QvRTQ183VoLrdDYX5fqnS",
  "key44": "4NhjcfTzg7giTLXrcDUPSPaqqMqn2qiLPggQwyHFQ5cAShq77P2LD758RynqigmmrMn2uV3qqrC2CBuWzd8QaaG2",
  "key45": "4882reNxtVyeNcgeXjH81tnBrN6oZmi8ZW5DYTe9tFXoqKNqoEM32uQqwrWzGGQwuT9TqJLQTwGdNednEFf2v9sc"
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
