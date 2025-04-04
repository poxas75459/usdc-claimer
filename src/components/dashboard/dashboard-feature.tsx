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
    "3XBdehYVXCCSH8nrky5qPTmyYAGkMchjb3aUf4VNayqX7AUScaJXQG2nacAC7FRLtrPgNgtcBzn5JPgP2Wt9Vyyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59avyJSb7QsBzTyY8UznKTJ29XbqDLamEdgVT2k6SkBHny6PknqEkE9V8GHZ7ci5wWWhS4SLszGxEQHN47SpkmGb",
  "key1": "31rKLuLXdXCbHr5gYMUvDGAk26Ksrvibqt1X13Eu4kqhtNk2N88Xwt54nMPdLpMuTYcxPXehZSm84a65kigrvZuw",
  "key2": "pP5eEc2YrCsZn3W98fEAw71q3edWdSP6pZPiPBcq7q81ec9mtSgVLpMKF2kjUTkBJ1wbTBM7k3inyXKWVrNHhDp",
  "key3": "4a7bmdpgBL1Trrb3FU8UcoFEyr97sEZeAxNfqekHZaQ5DTYK26PnrRfEu8JuCwZceS36wQXSExPAep5tV5xSUj7n",
  "key4": "2R1gH5QLs6mf5jy1xq8ZeFEeuRH3q1wePfzEbkxD3mg1wv8HBffSmMShVNDtCGDQHvyAAjxmhjGuNXHz5rqSq76v",
  "key5": "3Kk5FcyzRGXen24feLVf2Hk1f6HMkkFpkNcM5FYXSmJziDaiGzK2rRuNNwAVheJGj1BiiwjhqPhoSTw1wdqRAqu8",
  "key6": "44erteSEqcnu2Lt1MLLS5rnmTVma7PMY6nc991TgPd84uWBfPRREz9kPDscqPXK1M3ttDitR2EhEgELKx4gJWGFe",
  "key7": "4ZAdDCfDsNxpSWT84CXrew1WFwTwSpjUmbV5W5tUCgTK4xPKRJbwsQ7PqVHks9WjbD36W6XTF3YshR34NQQWk35D",
  "key8": "4J4b5rRhjUxwX3iMcjcWMo8jxQPRQxVcc8tiyDrYFKdeVe8Xn5QRFFb9hPMeDTEm9KVdBwaeHGQyyUuV5JiQLYJL",
  "key9": "2tDoELFsj8Eo2rJStjwf164uKuSMMJhGEDuApyxaE6LScFxjHJG9wxc418nG9kx2qHbxBTgTGPBsNx63rPUxnGy",
  "key10": "Bcrf5uAqot1PpCaV7ub5Bk1jAKodgxz2MMXRDixiMTRAdwyht7yXYM2mWbogtm7KVJZxYXF2VSGi7XmCbicWta5",
  "key11": "57FPUfcAKzTYz2a71s7jnVWskiiRjYY58o3xdbgiXApvawuW7tyZRbA7DSipx7HKmT1QuXbnN8jpyHpKMNEe1wC5",
  "key12": "3Rt1SAPVqHBCuiW7abvtAHzGh6zJGRcKd7BzKAZj4w6H3rbk74MJ2uyKKZ8bKrNo8ikfY5AHPW8cgisZgCX96B1K",
  "key13": "4ax8rZPsumAaZ188y2EFt7XhMnnecYd8C9eFuTh1XoV2H4mmJZLP3d6nRNvQSNsHkwsj2hur3hT7woBTZzVzHcDQ",
  "key14": "YFgmwxhwnE4EXYkCk8hbZCDKomXCtKmec2VJ7LK4qukQRypArLQmAsLxkCsjgqjDia8fJKcNUzjvco3CFcpesAc",
  "key15": "5oQKm34pPD6UhrZEDiSV9ihdiD8NLpPDEbp3SVAgTsuy6bQr5HMCpwQZd4LnV1wSS9CipAKN8aumcoutBtX2LuWV",
  "key16": "M9zzkqzJRb6UuTp7WazLwW5Yg45a3Edfja1XrzAmxMQAn3qEHX4u2HSaegecnLW69u49Y5oq1uc4pNBVkEyVqMt",
  "key17": "2Um4RRAPM1qy9prSDhY4YwYBBwASVvQ8Uw7FiQbqnfZBqTwkjtZaEWvViHNaG3KN1KmmNoe9UWGB26taMgqubs3Z",
  "key18": "2WdBNkiRLRzgLLSrbJdinJU9mZAgrMB83esLZK4WrkgCHTPh3S1DkjKHqEFAsPk1X9nyW7GXN5PkSRogqfDLJ2kC",
  "key19": "X4GoukaQW2H99wUi2qmF8GQEMwkaMQJHmu16RZ8foF6Cf5kMbBm5MdbwGYE7Gc8cUjbRNWhLLzDXPDHX9xya4xW",
  "key20": "3JaM4T8QhvKhyomU7kbgWvJZL9vDBdBbvzFEksN3nsNYZRko1fYNpTtd4qosA2ZHs8LpsB1vaeoKjZLbyEaKXnYw",
  "key21": "iNNazqNLacnZtGvh2ohtyPBdtoh8eXRua28ZpoZjEZLsejZTqWLTRo3G1tsvMeJqkHPBYQThRwo4DwRhCqcsPKv",
  "key22": "4QY5m3VCGLvauYa9rWqbkDWXgsqGeDeAgEJcDaHaEt1MpEua6rhxa4ZxWrbtW4nZMuzmunAxyAPtA5dA95CSvxtE",
  "key23": "3nV8KY8QwcVUUThB2gVQ6ntDk1aS7sgWhSTkok2DJ4dEaa5pm8d1Rjw2jccJHyFL43Mpvonv4T5KbnDNEnX8VXy3",
  "key24": "43czGnrtb2wdebDUshhgcw6db4Ebc3wF5bwiteMq9B3XvYNmjfBFmg876fwFXiJNJe7oxEhwUTLTEpJhLkMcLrVs",
  "key25": "2ENdbNeNw5yK4EFvGwagZAWEpuVFZZJ27PFCy4mSzGCnuXMgxUL6eKP5nQHt915phcAJrhHbsyA5A7uM9DipVbbL",
  "key26": "3Feuhvea419f2nBJTDpVccYFdfCf1zuetqhU3gBpX549HmvPDcENcoqm1eDj3WaargQAEtwuEsgQEVD2tu75CWUh",
  "key27": "4Z1WNAMD1cXhE6nRYuxp6y4qee14JcBX3Bhr4oxkJCUXhaCQ8T4pR8177cJnyQtaXjPEVVLE4xucAVbjymemL6Ut",
  "key28": "3gLqMpgoe8bEsvZGqDdTwquq8cBYGAypy35KsGhZgdHKdNKUb6dr9WTg5tjJGf33sxEv1BFvSbdVdEcPbj2TmTw5",
  "key29": "Ddbi2D2kb7pEsxyYnjewcVrMksmqXFQYAK96dNWpmnn6Aw4JjTFNks4jLoCbXzaQqbjLQfZV4fbSC6GG6gDSxB9",
  "key30": "2GRG6t6jXB2bQxAszKt4FEb8W1Qad5HLRYyEEp2BHHfPzxrrJqptbmey7TCaGCzNaP7S2Jh38e7Cnw5GrvCfku7M",
  "key31": "3a12eiVaQJxWTMgGgsR8DLdseBThgPYh3QenmfCWGMNTwS4AsGhdvNSfRFvaTEdcAEdwSQTY97JAFo9dSQ4s5FL",
  "key32": "5BNqBtu1WNiEcfHsHsgQJPEVaHygrs41HMqrizELVCQZLaHfyURT14psuk4rJHp2yK24o9nrD1Ch8pbGpQ2d8URs",
  "key33": "3TQrogNykMVAZa5pC1dYFgdr99zPf1yVMG9h2YwJCnHt6b1jhUDwJehf1Bfn77cqprjRHqnSr9uqYAsuGFWgoD48",
  "key34": "4TCHXDHumDk2gPeaMTWSRaDsxS3xUPQDKEbfdcXQCP7LnvyKf9Js56CLbLofErzy96TW7TAWsQfXJ9LNwvyLCUuZ",
  "key35": "4vT3PZPWDmBaD1PE4qLuGoaWZ7cYv6AmrVyFPRQMpYGhkerM9quZjtNYFusxgazpPi1Zb1w5dVY1MR9fifkR64wp",
  "key36": "5LfyxhJXfEy5reJbGuvkxDVudxts4BDyeLMFzDZyz7apdTYRBMTpVhQQNzUy1vWr3TeYjj44QjJF8NumAhD4nscb",
  "key37": "4sXpA8kgUbF3esaoxJwn92URp8693stwP3xNLpduSacBVxG5qFLcM4h2WVSRTwqWvscntdPc9kR2eYA5fuNHjQoZ",
  "key38": "5WwMELa2XK83SR4erQpRAxc7ZvjYX9FLf9AZ7PzVT2GqdgM4WdWcAC3mrPwZYinXMQ19psSYjMCEHrw5znEeD9NV",
  "key39": "3S5xfJaUtAcXTidXrxMQHyC9L5aG2q8X4ct5bgcAroJFTwcmYR4jSWfAttn37m8GdePaLfVKsifZgjmLqYqrRJAm",
  "key40": "23iXrx6YNeueUsW7nsuc5KXriLu1soQEKNV3XTSQhXQsr1qMHM3cfb1irTLNAgAeoUCmkDbNbyvm52akCdbRf4Jy",
  "key41": "5p6byjf3Wb5UZ79t7LkAdCBwDMVe95TZADKyjSwANC4rfBR6gsvYTAzSWoDrdoNpjTwB3xzjJeLB8VagxLYgiJop",
  "key42": "4Cx9cpfCJqUr4yZUkmCBUxgECmWPKEB6mthbo9vhPoHWwRnwxCw8KVqDzi4UGvue8nTgiudqMjM4cwEP5LUgKC3K",
  "key43": "NUwPjfGYwnXYwm9Ba2YYyb9uRzL5NBWbRmjHqCwaBDSX6FktQ6APABGMjA5oyGLYrES7z33sw3hQg63g7nc4VYG",
  "key44": "2UvEEtStgRged71eg13DgK5K7b1RFru84zUZ4Xoy1q2CefzNNn4aVfKPTorvFLd4V35iQKx21PdmbjmmQXEkJSVi",
  "key45": "3tCK9AK9AWh6gAwXn5CLrwJXJwWh7iiC5VJQstCj4icXqQxL3fmed1j3HQxtB8h22fywTEenMrVkoume3rAn5hgC",
  "key46": "WECPh5i54cWwZGe6QMtbHzU5i83uGPpkNY7ApoBijcJJWuuVxtfZNqLfTNw8zyujSqFB4ojatCh4jdMuytCdFzp",
  "key47": "5xVBhXExcP4SUf9JW4qWUq4kVTQN31XYqhFDNr5ZWTeCYXa8tszQFS87mAZJ1BrTM2fqByB6diDrJT9ACxrStwLp",
  "key48": "5LeZ9P2UEeYLWgc35sfKAtm5DT6vsBomhEFHVicKYaUkPh9wUBkSmEhYUsHdJskdLGiRVakjacj3crx2NYh1dDnZ"
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
