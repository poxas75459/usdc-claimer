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
    "5sUTj4v42yW2gqVFpLX2qR52t3sDRfYLgvMpJtnaj9vVsA1gguPjpkQ2dq6o1C9LEhEmvA5KPB3RfRfwsp2g4ZcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szMHJax9dm4fr9XAsfs53SVGwyEMZjyHAUeNLHNiDv3MWvmSM88qDaDkrm8qZW32pq6Nm374kUSAR6sg7ZAwcdQ",
  "key1": "562vvB7cSzhreGayV4Ymary6ahCWxbnNj6BVZeazwUAara4R7NKyGjrYUnUwwifHtZpYAmDarmgcs9S8c47iFCV7",
  "key2": "4SXFSxFrJJMxJpVvaHpCRXZsxj6Yk5raNtpUenASXBXFVp4a2Hur6Y7KSMGCFy771amfYhn6RruYhwjXcYf71MYF",
  "key3": "3ake7ABzrAxid9Bdgig621zR3Cdw8S5cc6wxfNZxYYbwNmuDfxRdLBL85vdUCM6L92XQcF9PrGXAnHuuqCWuaELQ",
  "key4": "3EsYahoSh7aSnwpmYNDYFYLdoVD9i4fkB93pHTXb1HM4TizfupVqmb7m7r9TM9kw5QoW6ewc7MHiEaxmW7za2AbG",
  "key5": "2MhKM6nefWn9Yt6oc5NrhhrriqRNSUuRvSZeTUHq9MCq1vZxzpxqL2zo9Bw1dy1AvTTFvcurhurEuTmv2u8tshAq",
  "key6": "33GMjZnnATz8XcsL5tsRqkYPSPqBz6mR6PxEPGnDRX2hQpM1iB157j4M7YRAWyjLsn6HjQJKv3m9QmMC274KsDQt",
  "key7": "4F8oZDWCvq8TiiRr8VrgBk831JirznYKnZCBguggL8gchsT2wPtyGmnkNiMZkffno8tRyCxvmfopNZ2xRxyEFJXu",
  "key8": "3KnjpXFZuZz9bL3zSisheHtA9nZYeDsAi3PJnXfFw5BufKPi3V46BZRfU7UiTbXjMdt5gWdjRBcrc2Zd8iZEjPFT",
  "key9": "5Y4VgJrAFLbCpd7QD6wtSvMb9ZwdduTVrGg5HxBJDkhNtuqZWJbEKAC6AFCJGB7myfA79db7e17e9RY7bXSaqj34",
  "key10": "41xzSfsRppjuBEkFsMGRdF5doQ5WDDP3DgCbk7zyosLQpWHeFjiAMyS5TpWMevKWpDtfdpVGCQLMKZV9tAVjgFrv",
  "key11": "4jFZFQgguTHvX3pYwTsQoyxp24aPqbroFP21XsSJ9MMUvCbBbwEa9yv6bTQm3Q1rGokgZQc4UaSRwLiZbqCZ57hG",
  "key12": "4zC3nmZAxbLbENQFmTEqe8nSnWgz6UhmyuWJEoZLhV56s8VyZKV5LUNFqjJhowAaxuDPUFVTfhjaYSLPbGu8uzh3",
  "key13": "4ZY3URiUQxDw3f9FKaBaj5AG64oxsoMfQj1QRATEFzzEUd29uSqFYvGqAF9VuAtJMpk8NS7kpv1vmgbUxSyvq5YS",
  "key14": "5iXPgMovs3NqB8Xqs6b1Mrv2SFjo1BVS2EJ2QpozFUWGhDrShM7VurmNuAgDopQ4Xkr6Dp7A45AX9JExktCZem9q",
  "key15": "3p6vDhugXp6Yg5iKigMedUmDiJni1jBDTVJj71niV2Uxp2SWsorjEJzyqAYYaQyJqfF4MGSqFaBTCtWXrdVMDhxv",
  "key16": "2ap92MFQuHCkvknX93AUGopgqSVroz5RUyP19CZ7NjnTfvrcQWT8PWkr66FMgnPEua4TJvLqqjoV2wKyzxWhu97z",
  "key17": "BDbuidCKGJerUEktivyqaCR9RetiitDRYrsNADA6hjo6W4td2bH9UEvusoNAEkMKSyavfGZZRU3WB48Y4g6ACZx",
  "key18": "49ewk256Us87ckY97KMTcbtUrW4tCqCUW8rwfuEpbff88mUzE3BNfQXHEJ9rdkWHuB7ojqQhp7kajVRz6UiwVyVB",
  "key19": "3fz2Yd3fkbghLXmwfm2c9NuaqtnBArD1NTYrNJrA5rnBiCPRNX5qLHQgMZ41CRuFz6HKtEehr3Y91uo6bkoidrpk",
  "key20": "5Vb74D35EaRPRem5BUipjzfVwcDBhckNgRHC9TbESBEETt7CsGoEfdPqD9SMTiwMUjZ8fQySLao4Li1qDYaL18pG",
  "key21": "4Ey6em4VRzVDVoLN5nDKip1nwUUUVpmZUhP1G8qhBaienq83MGd7djFjrkAijn15QDpZCCiMJ4EwWZDgKGQZMJdS",
  "key22": "b8S47CpvMpoqjKSScjJ7x8gx4iaFjnvohLkPbitPvaCRvyKZJL34inGtgmuDmrdYcWS6Yar6J34Jk7wMJsAtNXj",
  "key23": "rRDeAa9PDdJqivBzpuLp9PeRUPeNwFKqfp6fW8VAz4KEep7wytXQWUSpNSkKmCLzsPGHWndGLbytfbk3rtnUSMd",
  "key24": "2BpNBJ9RJB7ABk6jeiCJFCZFFHSWrTeR8cZ5nSWGYUhBNhekLJcN17t81i7LE2MmciK3bPRpJKCprPh5yBRGYj5S",
  "key25": "4zZxukw1jVx8Z6pERfDyYrJ5zUgD61GtWDzBwskbmoMnkAxZYwHEerL7QcJszjGezjpGZH4LUeaThq3VEszRJizV",
  "key26": "YDE2XHzkKR2wwkGDDoimu2pL5ZhQZt4Qx8yPBM156uMRmvERKnPQcbBD42f35oZwFQfLxUzZt5jsSdX7VgCrSEc",
  "key27": "57yKNjoZgLi9kmihDsKuf7igWiP89KRoCA9bKFbi3eukJLUE5KKMbmD4YPeA6B7UpahuX79yaBoqoZmUfxcvGBLz",
  "key28": "2PargrbK6MKz7WzvJTnjrf8TNhY88tJyQ5cmYpinhuLTUcUZvn2tkxM5QJqVhF7zZTp2XcnUQiDaVmP91AYiYSs5",
  "key29": "uGeHmWRB1m6SxG7KZZAggRi2thjrTFeQstbAfQuuDet45egreBwtgFVsrrRKtWw9mm2FSpRa4bRi8tubt6gDReH",
  "key30": "54pbPiMZ5tJ3gTWLtk5xfJvcy2mxMai9Jcw1ZYDxTMGEoWbUx8KC1o7M6CKMq2RaeUBVz7opaerTA1YzKrCsteTg",
  "key31": "5Q9hjoL2bcu8c2srH6G643SaMmCbSQsAamZbZB4srSRYJC4LFF6ZdvTaY7CsfjqvNTWwjfeeguPTPCNcgz7VgBaR",
  "key32": "3j7bf6qrtLWYB34n6k8hg3DCAPhhDE8JvshoB57RK9JmiqNV25rbDLAaxU4WYjipAmAo1fTjPswYiormaPR8gyc8",
  "key33": "4ny8tJRi8DJyMTSsF9HEryEgLWdKirAbn1osDGS7VKiwPNTYECnEemyxxR6UDmiYmZLAnLLhketdHTfSFbN58UWa",
  "key34": "5kviZBHyMCNTsAdzyRMnWi2Bvjw22bKZVHrQwHpzTo1mf5GrE4wLM1ziTEJyVPFLjTvBFUZPbpH8wYgo3S8L4fNm",
  "key35": "4rR5pFsgyeYWMvcopgURwvgm4JSMZWZU4gYVXTMcfRkhHugDCEUzdk89SuDd7dUnR18c2cWV94yVxN1LDVzCbCKb",
  "key36": "LsJNExm3XZVJ7CFjeqPPuNRjKNRuDffaCHH38ni9fmidnLGN7p5tRPY5wFsKDEzSdJ8p75saBxogStWuHkZCUcq",
  "key37": "5eS4mHdwt2QC5hxXR9FL84jn4TQGD8aa4XQPHnpny5PfJFjUzLEoKNLvU4xfR8YTfhSv3AUW3mB8RyceED8MVtCZ",
  "key38": "3E7diuxgegc4zmepXVATPcbicLigBTfmVL6NexBBR9P1dPKv2TPXrE9W2myVUpRi1ngnU35aQZFAZDsLpGQBsdTS",
  "key39": "ma9BhNpSHNLSZzgyd9HeVhfdoijoinQNzsUWmPzU1bBmerWFMLXXk2Xmt3X3p5snAA5T5uNDKXfB6zbHYDgBWgA",
  "key40": "2JpkWThnR6GeNZzSRDqBqwBJ2nuvGttbhnMNVtL6JfxM6qp6e3jeJxcjfy4ZoztgxgK57xG7NzRaZMRwxnc7brtQ",
  "key41": "56YbteR3A1sHDWvpKRw98J6dWkHtck1Bd5C5y4SaAukGbLwgrD2477k5LLxRfW6J9zPGfuRviehWnriBwAeMRNwj",
  "key42": "3uQe6RKiGDTL2ntzQmGh1YpccYwJGKByjSZWAkDUZ6KiNmRfUiYkcj18rAUz4Cw5kwcAXSzijbH8JuwA7NaMF7VY",
  "key43": "3N83fSy34v1BWhRwCZT1PF1r6YhA9ts7pJpUL7YGajsGQmUWK2d9gzaWjYDubVaKWEBPzQt5w56vMmmYr34eKHCm",
  "key44": "56nSCUiYQkEmTmMxyPukQBQYHzFbwoehuuFcqKC4FkVWuDBrdGtZu5kWivAwGumqwupUX3Rjzmq1fwaL6qPPPoYs",
  "key45": "4Wk2TgzwWPpDKE2xRV3grsoWn1Z1A8qMFakVp3v4qykFAFhw78P6QoUPrDxyVu7C7yHFJYTKumTBGU889sdAabGm"
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
