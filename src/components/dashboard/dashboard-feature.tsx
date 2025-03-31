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
    "5RDYVttPWidPnaNnwcLmZeF9oFTEP5vmgZz7AWLmAgLqBzhS7qX83rNciAbrxj43vu2f3MeZP9NC9n6J6YqRVVKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnt991Zqq5wcbXmkSo9wzNF38RCX4jJ5KNSHfbop1RQ4fDhHfbVfh73s8n2NfR9Jzxwdy3VQtMMS1MeJVhNREr8",
  "key1": "NyHMimpSDyQLuh1ikuhx1xsFQaSdP2tktDHf53U4guCtRvAJWDSUKrz6YcP7SeZZstPJSU8xBdq7xxzno2J8EhU",
  "key2": "5ijvxCDCc589vX3Z5Xg2BQibAKqR8gwbFb8Ku9eTbxXRAhKxiENTy5Yvrr4u69gXcCvMhgfPX53pNbW8Y7PMr4NZ",
  "key3": "3WgXXqBBku4x7FBnzA5RDb7iVPKn6Q5n6Ua8pYLGLzuszKHiws9jodmPfur9b6HYpZLesG3jaJE7qXa7P7jEv2XW",
  "key4": "5ZSSkWTLfvRDy1naKP7uYZ77nvAL8LvEQLobqdNHZJgphzN6xsj2AvjCZqTeg99FXPNr7YcbpsCgAgcFYtRQK4VN",
  "key5": "3jZaiurQBk4myjhvNqr2jsxWAGShqbU86ECTh8HyG7LFzF9ABWooyZzhW2sUtTkKeVXaMcu22dvYVR5TX9HmPnZh",
  "key6": "3p8TTVo7QtWoaxpP4sJUkZtL5KvbvMGXbZydrf4Hd1XHDRecJ1swtXAHTsqxLn3nhUUc4XcHeN7gGJdnAVMnMA8Z",
  "key7": "5Lurq5u9J3N4UotwTTZGZdkE6tnVnTfrWrgZwwc3W1PgBRAQ1Pu8eHsJAHcZ6yPe1GqN9SPXs9gnk6BEYGEaBxZ5",
  "key8": "4LVvPehZFYqa7bo6SZXVh16iYvwbgfZBLWxWZP16ru5eRox8FQQzQdeoDsy42Y1V4YTrwyE85K6GZkaHZXbYf5gb",
  "key9": "F4qgzwkZjx2s1NDyMWHQ3SKacfbNNATzn4JJLsSEijA8NwkewWh6btsZyZ1T9nz3s4nNNK8R5p73tSFpmMvKp3c",
  "key10": "2XAxFBnpnva8FmS9xSV94rNtrg1YGZwRtAdh5DqcHQXo6ufhhWMz2WSrMiRYWzkUsbWg85dDosnSHTpRzySmKDwB",
  "key11": "2qteLfAKpvQqJuX1NgD6iCPtbtmfQfVidYLkF3aRc9CqeRjg4SsLMt8mDW7gkqP8MAJWA4iTFkThmTGaqZWscfsP",
  "key12": "2xdgkvizdxoUxrf5oDSTNoZqV7qEj1LxWd5R4SgBdcWgX29QfzSw2xPkBiUZjpj8Zz61sQN5gpv6xBfdFRgRkyfq",
  "key13": "5rWL6eeTRrHA6xcmk3kwAo8iv8gsKBQGsMz3JPqYSBYZ3bJGqehGZcMBGQvxVghbSBYuhEFNEhLfiWDqnSx3gFEC",
  "key14": "5gBZApos59ocdEUmFPrcLJpbH4EK4kLsPcKXs95cFNfAx6seTou5jAii9ZSriCPZFWP9it955Qy4aZ9HUmkv4D7T",
  "key15": "65jby4HAh6rKpwRio8QrV89BfsnbpaFDAQB548JWut9tDdZeDanfhBfcBDhcdAhrGMz5uuJCc4jF3MD4GdGun7Cu",
  "key16": "2ZRLUMD2X2y48R6YKLmGUAz591VrcQ3HRJbfjQfRc2GgSHrUMGqKVk74kSggDY4dcbWrPoFjhFeWQkRqEoW9EeR4",
  "key17": "2G4ZFFn1vn7SSrvADb9Du3WkqkaHiCpBAU9FfYp6qrQMPQqBYZRfxLUzNNZUvBSTht9i6SauRjhjjhF5y3GbJRjz",
  "key18": "2VCNzcNJsurzEKmGgS8kQvBLoBVJwt1cqtrvRR7yNZWjPF4EDSgiw94g5C7gUhy74mcR7mMJV7Zp26rWCw7NuM2Y",
  "key19": "5TQCZK5hEqVfUG5NYSrmc8M9KinicK3mDkuBSr3Vsua9KYPE7mhvo5tzdpeQXxxjFrgzgjERi5QMsjGazFd3QdE",
  "key20": "3Yx5u7GFwpW2ueDR36pU9tbccCk4NQwwjGSw2MX5M7GCF8GP2EsVXBZrcaGYXzc5zJmf8oFbmcXgUW4HpxHGihvp",
  "key21": "2YbiT14MNztPDY2mJtWFnpTZCQK4JoskMgr2eKtRnX6nHfw2FRh7cZicwVwJcuLzf2xCWbz4JiRhmRFmSavsCEGX",
  "key22": "614SkUu8rQMM5Yd3KDcVmUqVXTkMY85Niv2EFXAmo33m5hZZ2iSBXXRRAimLSLQTtz6EcdzSwHkJrZhffSTpAaY",
  "key23": "5f2NSMpyMXhigzmKqLdBiEN2PX2Axv9Wdkeqhe9HYBwZ4YQf4AAkiSwoY6GU3otPgH9iMuPatN1owfxXcix4eojh",
  "key24": "3XwQdu45vvfH2RhfGbG5z7Gp7fRJY3HZipwSwcNsw5i5DKPwNaiYBB6apseRNhEesjFZRwHgv2LDPHRfZxBBZjfC",
  "key25": "4dgnn9tqGShvcqt9Ds5eAbpWvzGg9A4MefnX7WivVEpg2ZMdwsdTgqrgfP8NvV4XvD9cE83VD78RAWfmfuKQeBKZ",
  "key26": "2J5jR949nq7SFkrQ39hFQwSySZSZmta6kRBuMHZ5VCennDfcy1KFF8oWc6Eh9qfezUvsRdaZ8fVYDXwwQKZ1uoDx",
  "key27": "5cq3caayAvx7o7prQ3YNzqHTfm3NwsHxL6jGzQXY1VePpVGpUt6EmHDhQpBGeton4hy2MRird7SAeLq4bHJxSFQk",
  "key28": "2k9EMJ2PvHCyZGY35tMjVUMEn6FBiYuQoYAiHysHahGFPrUb2f9dDpCZTvjhPsUwHjZ2BEvyZAVSvp9UxLerkDd1",
  "key29": "ZsLL9TtKiES7grHXukvQsFUfPRPqmjXf7CCRJAD1WR99CdHWCxNDXXVB64PKPZchjWYBs6tE4YiSPEnpJKzEiMH",
  "key30": "2NDvTCMNfEH37LDwXAyg3UYvLAM1JK1mR2J1vgKWnaRs8F15mRie3ruRYVVJnZhbhgJRNSFb4qKTBV4wYJkhsvhY",
  "key31": "5NJLRMRMRAvFVGpkCNHT7ZDyPrhq4QCjQZpcnKNqhdtXurCK5Eo7UaV1p7TSRUJes5CzBYdDMXYRXw3RqGya4WKo",
  "key32": "3dNsF33BHJ1jRkBd1gmqpR4UuD6HM7ZdNodrZm8xUsegLzWwLUeZySYDgT43XkjzePZmhnSZDfEu4wZeFumP9i6G",
  "key33": "5WrxVTVR1qomf2wMmeUjm5Y1YzxE53nNmL9ZoX11whYYCxBJNvXEn1bFQwDSxuvYi7grbwVuJux9iZsZXCbWxssa",
  "key34": "3eAz6BaFDyhdCTBUifJv2yvJGT4rzhP2HputX82oFnJ9ekPBXghvhT3J8wUQgUa4aZSGT9KEovMhMYbxQvxZsuuj",
  "key35": "2w6XaxsL2in3dRQfdHeqqwnJX19Fa6fhSVK6Rjavc1n6zSUFZeGmwacc31WdJ3xWWgzSxCFVAvPqBm4WLj3v5bAK",
  "key36": "2VE4fXs3jvcdPq2rnQTJrykEFfcUfxx7yepmhZA883DtyZg4hbMnkFcoVgLZ8Uz2fdYN4kX31hjpFEPNHpt2uSdo",
  "key37": "3SWFrFtNt74QQSzpJX192RbuC2Jgrgt4jRL5Q6TSvHog58fs5GFR3D8qwaXCGLtYmj2X58udwQ7TGVG86BR8Ui8N",
  "key38": "4YkVFAQqLeEEWd6nCMz3cdcbAZwJ7Unh1ymChC99kTjYkaUddYK44Pip6rWKYjNZDJ4HLRGEU3hhkTMhMURh1Jw7",
  "key39": "3dtkCLNGSxRzZTmZ3te38AkUx1cDfAGU7RD3mfJTDLDoKwzpSxEVYdh6tTuqkAcPPGCuCbpLwDnPJ7SUVQmc5633",
  "key40": "4MqHAb2z2auP3jq8NyqbpqcXTygQZ6TEGsFiCzScVFdeCeHkBxPAnGgpgKR3iddZ7MQ3bu8kRnFEG2XU9M44phXP",
  "key41": "27VJsrbDTVPrJzFp6c1YfePgFCPdskfJgN8TDsgA3Xts4oXAZp4fmeUtJWoPDFgkpCjU2R6m32jmyHyFpecTNFcJ",
  "key42": "3AWFMByvgNJAdk1ipfo1WUvEeifjvF2mzxAW8itdm5bnVMAdunK4Ai1xxT5pHRtKA364uYC9vf6QGugDrjswWMNE",
  "key43": "3kPSqLAYpvnT9YxEsdRh9QheEZDBmbokA7tEVrZnPc8BHj2PjxUKJukxxCefvioFxQ8nr81yhPkQ2QQfsrFgN4rM",
  "key44": "3mweMyonaciAPHXLn1JkrMSkoUqHtWpNnQYtLY7oqFnymoY3Yw4q5Qz3tbMyZpA3nv9FesHWEjoHcshsELxQ9Mr2",
  "key45": "3BZxq34rR513HnYMA3ueQDZRLMDv6ExK76JHQpPUng3pzHh4JoWo29i1KjGoqAZnSUW8gbQtQAJSDM9ZBghGA9TS"
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
