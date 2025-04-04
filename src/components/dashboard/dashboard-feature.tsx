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
    "2fytDMUBNb9PMk8tbuDxKzKzw4gyXYmmg4RzaLrgb65WnfY9kKDUuXQ2qqPas7MdLFpuHiEYeGdr9rKsjE8GU1ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMwwWxCgMcm6Zbj4CRvSbXnvYghGdhpegxyEBeovhpLXiYAPJKXHmCSDPEgZbtK1k6Poq7zt9vfAQ9SWdXv1nzd",
  "key1": "63BoF3aRL7v2kgsnivjGKudThGMEW4D42qyjTX97ZJa49VoSeuf1vRTbf1ya5YDnqqBZqEnrSz47S28tVpAsjMfE",
  "key2": "4DKvFVVdhr2tnMcva534PCZteYdGWyaqnUmqB7fqTdsVLH1hAhbWivnHSnGBGJ5VhgrHChf4YJ84omERGFm84Vf2",
  "key3": "49LsZEsoAriQV4UihPMa9z8VymDJS1tFTJQTE662BCyYircs8kQYZ3cR3FhYjT9yPn1HtXrsbk3aQo6jNAi2cPgE",
  "key4": "5XfJHcaH7TcKHS8vvnmUJe7inB9VNgoNDYGQHpApvt4fv8q1WJ5ENWzkQs1UnDr2JSf6pMEaor2uo1kUonGJgEj8",
  "key5": "3hvLkXoX9d2RCfPabRriS56He99CPuqcWoCkwMUABnGSJrXPR9du1pypXWQ5nayFSPjAPZW4RYs1TgBnodF323ws",
  "key6": "4MpEiWsFPdvhppThDTtb271uLRmDFdG9ib2ZTFTFrirvEkxcCpPxiXnsBWykkm4kPG5WGjeszZzRA8HcAgPfJpt7",
  "key7": "Eb1Xs3b5JSBktgHoYMu6PDp35JMH5Cu4htXqa3UNFHynaUg4xrDG7kBXy5f66KQ6XVVLHWMepfSDgMupberUFrF",
  "key8": "4v2X7FL5wfMCNwUmCCESvxGpBD9NeQXpss8v2g1JCqM1fBXBPnXsJBcxwUJFgj1BJeoHEasXNsdTsX3ANux7UBVg",
  "key9": "23ZWTk5Qx9hHaYjgr5mS2Y1JB83a22UBeYARQAkGbC4rVqVyrefz7QjKcyvUStTyzwnr5crUA5cCEyAyRK5J6PVn",
  "key10": "3LkVQWfTYhVP1KZbbr5toM3cw9FwkbvgcXjTSKfs8nbrqS1vber7WAe3A6P5c9zx1LSGKQJmaXKSjPwp9YiWkypA",
  "key11": "22JL6Es7qZcAFRxCDtnTK68uUcq5fb19iEDk5B22B7BesL3LAMR1SNxhxck7pKJM4j66ekgC32ucnZyr4LXUrwn3",
  "key12": "5BWA8hqUzJTgg7uztjjjsAGukPqf5Mfvouoc6K6nMGuK25VzB65EcyV2i7utnPNuE2kaLvrPyPha8J9iy3iGsQvL",
  "key13": "4csYRWUuurogcRGyQM9VRaZeCN3rotoKY7DqGJ35uU3kzDPze69F4iMZV54se4DaGWmFCG74EEHoqNwaw2Y719fA",
  "key14": "614iJ9814ExMnJmyyHxYiqJzu1XjD5BvtsPPZAJBJRxJh5No5PYQRA4WqHvpZ8gASJTPzLBBj3NmYB1hgTzs4JEo",
  "key15": "AjqKjcccDsWNmzBQWMfvT1yQbj1ULNn2DwNmWgxqSNvZVkxCTCdhfXndnpqoHFWGot9MSkYjAZkrLQhP3eZ98nX",
  "key16": "2uzaE7YPoFvYAJb3bximGJ3gEYRDGSnLMTYSdzB1936tsAJAhtAU9PHLfGPbuBs7F989fBPc1k9J5ZMFxK6HKExE",
  "key17": "9qss1cEsZnpzpcHKTeKQ5y8eBtXZSjBkQbFhc2z7APamELrP5ETmt2fmJNNMQcedQFeDCgpQ6yEapXLNEqgX9cp",
  "key18": "4PGujXfVFKNKxDpdJtgwd3mDS9azaGLsRk2sUhd7Ba4LYcRcQhvAXatQ774BowctZrMPHeUPM1VtALR5CvjVkhss",
  "key19": "Q6EYLpEGdhyE8b98GnZUHsu3cP6UofkgZBCuygRja4YP91W6Qst5PBDu3suiAVk7cKSjVBKk8A5G6VUTbMzhwfs",
  "key20": "5QtG5EYWkvc3Mz6yXQcbmGjFSZU14KuMgNEZPJQ9aDsjeGPCuuA7cfxeeSULCYmXJQoN1dsANtSeWB4RvSmUL2UR",
  "key21": "3pyLBrTpTv5Ha5cEK3EM5EpxdL38iwLc9UJQLnTNC3TirZz6ghSfSoaLe53owkttcgxA6JbcTaHY8n1ZW1o2gDcK",
  "key22": "3DdgEbDCdBWh3EGhz1KBknTWDy44ExUpJdX6fyQ3s7bknTLr1iJBAhWx31Etfhm4FqBJ3J2ZRRqVxftu86BQWrpR",
  "key23": "2jb5YsoYrXvmMW8BUfVwigBcWNfk5turGQSG7QWLXAF6AEWciquBA7ixTc6SKT3nXhf3ViBfEbndCjxnrraiLyEv",
  "key24": "5iPK49L55Mf5mdkinCDibFbzR8vRbCcb7Bjh84K1chU7e5JNac4LL8nB6TGFadhCyKWGsbogEpazvT4voDcyHKpL",
  "key25": "5fibDDqLo1iHRjT9NdfnbVuRvjJkFH45zpiv9SN6id3R25oFWXPpiJanbonzfns5A25JndbDAFCWRraagACcd1N2",
  "key26": "5GNee9FwkrasoSSkW9aKnuPSMEruuhrS8dHhbAsBLuWhQanrSCGAjKq6959GTDSZrNdLYUsULSU25gkbCHftdD5t",
  "key27": "2Q5mRbfbgtJq8CVxFr56hdKKrLQkoASwf2ZGfxG1bDjCmrPHdKS4pXKMGo3H7GpAZ4pkveNPn19oewZ2udsMP2nB",
  "key28": "Xx1VFNNaDtdkLhUJhqTvNY7TiAbZGNHZMtJHV7Nw4nkHn4tXw6jP9589M21hsG8n3JDU2Ee6PMjQN7SAfgqEFfa",
  "key29": "5BCYSRVK1jLhbVxcjWAtxudyTJuJNLW1vQuepyNZupLDdqYCoJ4rs2THxYmtQUKL9ssNZBkhduaUWmCXPX7gHiRw",
  "key30": "adLNMnMLGC6LTqgA9pawx2x97ZDbWJFHg7HF3V33oAxM1Pvbe5SzuhN3iWVr6F3MfCvJ5v32HfftZRWPffCosAc",
  "key31": "3qr4G4MmE4MHPCtggEipMtt1upGZVM6bpAzDK9GtzysdDZJqxBgtXErDs7gaBX9aWjZXXSKccDLjbZ6CZxDxWy1u",
  "key32": "2kBWWEYTJwTQiGsqRJfsVBEMik3MZgpgLHMbtJUHrveFZJBfYoYaezpm7Jx1K3QwBmnNkGsbXeLkRFtkVx9ToqjE",
  "key33": "4MMVxs9pv7jPFhjbDT8Sqz35pnxec5YdyWKUTA4dkhPsGzXUo888MHmyLf8bkHfjWNbNnzymxoDFcRJhyF74anuK",
  "key34": "NJfQwFhU9gqzPEcBoBFjNhqRZ8WxJkz5DnyQcxxJr9MecWeTiDXZyawsYXcGue51ZX9Hy2gpA16BMhbMxQ7Kv8X",
  "key35": "3NU3n55Ck4ffr48VTPfN2RBVAR6JmchtnGs4gaAd8t1gs3MQQhCovSc2o4o3BKbDRKkpj4DvvufW2etUdMcjbvVY",
  "key36": "44cBRdS5JWXsKydAZH4hxCpZUzbyY6x8nssio4k5LBjfkK3kjoydtx2RSkz9F6ck5EofB5XFAYeU9iRcKHNoZsWj",
  "key37": "2YPfj62QTwWXuiw5dvSeyvJd8atXnNf6vbmVirApMiGi2TBUqoTCbUUf4cZ5DRg5VvboZBiCoBU2UewDmWFfYGbq",
  "key38": "4BfNphAyBKMvzCwPknRu6kXw55aMHx99oYGPZpbYVqZfXnoXd6GbuQiyJPPzA52e6BY7rnoAxFbBS23kQa4LQCb3",
  "key39": "pPJoFDYuRku6Kyx17AU6wxM4A23n73cDvJqjWKhaEjqS9Hom9wH6uG84yhAaabRxdHe1QjPvLyWN7ZJRXH41dgP",
  "key40": "28YatouD5g7jhe8SFRU1kpizdZHm3AozFpswxXvnRMQyJRfmTXyFu5aVtS6J36vMspSxQ6m7QGWAuTA6hZ6fo1Qm",
  "key41": "3EZsssvoxD2C5cJc6V5DRoFvsXwWrjiQkEt815kEQ2G9RwsD51eE3ckNP9W2tMaNktC2mSajithwB2UqH2YPDcu2",
  "key42": "2QGxr6Uj4bPWaRcjhokUv1PJQq81dZMq3n3rDDNjcDp1nGgC6zHA3nNUAei3krqoYfJS3mWrnppT34aK5NwhRQBq",
  "key43": "3dykEHEnevPjs6nVu8sAkRvwvpvdbeBt9uFpuPdE3DaTav8fFCodjQWxpJM83Ci3pzTiuAAA8MiGQoGGEDqk68SM",
  "key44": "4gt6kLsgtqw5LRhVfHU5AQr1uDtLYpStDUmZYgQh1PkSDgiBzVRRwATkuNuu9Get6ybxMSmMt183yavKXVaLFBWq",
  "key45": "5wa35wqM4vB9DJbMACjeBqubHkoGUHzXdawHwuYcuPQqEGWjDe8xM3nvJZ4CfAxa6QWgZThcNxY75CZFhTxsp3gb",
  "key46": "3c6s6zATVxJXw5Qrnv6tL4q5RCT5vuXsKEs5Uw918AYsNCMhAVZZumWc5fc82s5rkpdc4LiVB473V9rzYbeLS3o9",
  "key47": "3W9T6zkaFkeddtMMaokq1eYMPcg48rEChxRG4hrwYNJh83E3gBWemXAovcUGm3798nEp8LXWcMajiT173ayzsJdL"
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
