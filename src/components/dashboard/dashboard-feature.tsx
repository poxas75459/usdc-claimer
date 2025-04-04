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
    "8tE9F14RRPv1YKzUGi75SPg8uCnKfohBHXDebD4PKhxNhaqFG5Pn88T5HM8QGh21hdDe8hqCTkWB7Nr9eZfXbTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VjKi3GTEnN58n5ovGSbXts9mnAST1X4muazCNASf6gM8gBBeRPcTnDV7nHpxwAn3qH7J3VL3rHPByxM4aQvjJav",
  "key1": "44sKKF1cMinpam9vpEEWD1ZYSYsktys1UARCzoE7uzBcUZwer2iSEAoL4xpR1paquwVdRrphvpBoHVE7WwgwaoEz",
  "key2": "WiutfYP65gjyCGMWtiHidsKzSncx69dAWnqndc8fCoSyeq6rMzrmunBQieSvr4ZeucTwe4w41F6Le1tczc23vRL",
  "key3": "28wLWGMWuSMdvAeRVsVSn2uW1ZWFjLobDd4nBKmMns4rAhQvjzRo42gCRotHyqxPKJRFepRafXK9iDfNu1ywEr2D",
  "key4": "3GhZNt83pWqGA9Ajkp82YXgGxSaeohVyX4YEFuCpEnYqEuaQ4wWAp2rfevQEG9KkmFsnPqrjU2i8WEGLRoFyag7D",
  "key5": "462tWEyJhkyHSrcG4n7oU1GwwsKCmaUfY8DERNNN9yvFs5EqZiL8BKeD4ThtTDUc2cDqmJEZPaFxZuKSikgEFBCx",
  "key6": "2dSuVna4GugWMJAeyDDnazaXKuisXh1EBM34zwVVY2Rc9RwNBBxoghYxYk2k8XF4hVKo1EyXBHV8egPX5nzczZLc",
  "key7": "az8fF5Xatt1UT9X4U1PmphxnD9Z2Rr6FUcNgi3Ak7gq9ydypkFmyvCzqtKa7ZGj8BXL7tWnYauHjVNabaPXCgr5",
  "key8": "21CgEGTBySYw67drCti2esYXcwUSWoNEvLsBJYRvPJ5xKyUZVU1cVXUoM4YpRnsSZKFKoEbHBYqWjs4PnedLQFYW",
  "key9": "2nR7dF4cG6LSqUKSnMu9FdG4P6ycwhYR449nLyKe59776ChYwbCnfZjvhv4Vz5P7Thq7dsqTo97B2P6iorX8Z1WZ",
  "key10": "2VvuzTWPk8tpV2EiTpuJMccKSmoxg8fdFCXobsLYNprRC9XT4FUTrvmaN1vFDTX149cWzHXAFxni32iRkQsVJaAn",
  "key11": "xJKbAHNePDcQ2bPqpi3Wus54vm1zKjKa36Kvngx9pYQHjAeTpHFisu6jvKg7L1jxwyRwxWyQp1PDpRwZ5ohBEkx",
  "key12": "4Kxs8FJ4xvSthj9Fx4QQqN3x1NaLHw4DN1cvKT7HjkWkUdwPhgzGuoNLrNauQBZYbgzrNmLjESytSsS9yQjpcWTP",
  "key13": "3hHTRxV89uM5L14GjEtoyoswiM1JXxCziWuuMhv3eRcz2JrNfWk9i6ii892p25WDmWZRwk3wNyLeBKQr4BZyZs2a",
  "key14": "3b77rrTRN1k5uxxwCMjUDM6paj4LnuRjBzF7MiX7Ao43JJuawfSrwoGFPoKPxpvCkqLdjopDrUssw6LLhwc3o6PQ",
  "key15": "2sjiYpfpE9JjJVWTiaJxquGEb1Pc7FcfH6n2ZugFjJkKgzsgpEcEg1wikMjLiRfomTCfVGDSmSzzKC9Vk3pAfnWr",
  "key16": "4GkWq83nC4s2sUofAj326BpNh2WRHn5QyNMCd6bAuC9NadSWL5Kpneog9fkf3HBmnu5jbLi88z8TVCZeCtPpbGAT",
  "key17": "5GKoT191sR35YGRFibvvcFQnyT17GVpZ8Y7EDojFm4rGgVdUk1WkaZQ9bA55q9MK9wdhZmCH2bFo7uiFzQvVVN1m",
  "key18": "3SfBpEEKCqgqcqyB4cZy54K4Z2emn3bp7v8JJibZQ4W48v1QyJ2tazLLHPk3z8TPYm9cjeQzogVQpD45U6Q5mtp1",
  "key19": "4YKDEMGrQhbfitdWu4ZegCfJao8dzEseNHASmmEVkjTmypd3zscbj8dU26WcYFQzFeyGYpJK4cYSEgL3SgVrSCVZ",
  "key20": "5MDT5n75nrRJEyJnMdonYJzhugo7bv2SXWHH61MBVyFfSpp52DyQY52M27fiqhWSM5apHyc4Z84LeryhVqzxmnfB",
  "key21": "46hDfXEUA7FD6bCz3HtCeM461wjTfN8z1P6zJdyGUKYp59gYdKt97osZvFyEL25EXPshkU7KmHVvTXBMH86UYVXL",
  "key22": "4fVowrbvdNk4Nu5gpsqRJngXMpfcp9NPWwY4yeaGJRcSn1zmZ7PD9x3sVrvPQeAXHCj5K8zzFEzBaL6zYbnFgBWy",
  "key23": "5GkkR2iyDwkNsZwPipBLCaCWr62jftfg7dogmZ5upxcUdujfPLzkjjohuFRNpRizuA83Hgb2tKu5YKJJf41fWsAx",
  "key24": "64rRtsCd1zgziLweemQgUtTwoeGD78jiUagK1PCuGqpP5YGo5c3Rkc5viy4JFYCHkEJBfHMzVZgfre1athL4rqkr",
  "key25": "3b1A39z1YRkcMgXD91uNZ9XcbLruBw1p2xoZwPs6TW2AyfFa6oXyiehtaDxicBm2tpebn3ujMDWMQmuX7uh3kTWw",
  "key26": "45aeVbDD2tqw37JrUNwshd21QFSMawwRxX4rwUTgJ7en3bfKcuhKGj7dCTKbTH2GL7wqCTLFf54o7TQs9XJEYCSS",
  "key27": "2Ke7FcfN5deuhU3x5WNhLmyiQ8uKmgZY4xGRsi8fGa3c44CMUjATxwcNZwnQzkwiRQVRiztKjLDGjmnbiFw2Vwka",
  "key28": "4D8GwKcS8KdUbgzqRfJgVe435pWcVZwWF8Z3TXcixETh7EP7LKhUT6fLtonaHmLiG6v32D9MwKRh5V9EKqKLRCbk",
  "key29": "4UjXy5WXVFZDboDeULCacmk195jrRkPLuvzxsSLHHZ7t9dpzbzyEbkmxi8vL2GJC1t4dbeuyh7SJHfYiKTeAkHPc"
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
