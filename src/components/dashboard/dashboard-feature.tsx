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
    "6tZwEfjKdUd7WW1iryumt6FLLGvQ54tvaU4oBWqpc4q3iL8Fv6GNWnFnbaQQ4A5qijakvqA8ZfEuVmo3N5Leskn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSUWULACWK8i6SH4B5cw7ztuMo7ZKuNNW3ZddHMhSQMJMvhiwhGFciwv8GBpvxFah5WgFxFwFfBVmVbbftaJ2F4",
  "key1": "4MYqz2ffKmgKcC3sdhYvGUq34QEUMb4CZwUJ5SnTxK1evPp4ADZZKgys5RFqYxmpe2HDC7ZpSTnNP4K9hdRweaS9",
  "key2": "4R25xpuBmmYTRqBNrusC69Jq7uBFdsLhjXh8NjhVH6tdXdwFED6DG6e1b6nv8HXrPbXyNivk6X7nyopVCtAMnLGP",
  "key3": "3ZgiWuJJW95EF91N32GGvYaHQPHwcqJkvbX4WATgXqmXhET5TFVqUndBfhjbs68np7dLbUHxTxGGoDwVecu7nAA7",
  "key4": "4Lgpy5ThGNqHLfFafW7eLCBNQrmqkMuxHmA87aVmjWiY6adb52sfDv8z6EqqTN5ir5ccro6cW9HKSydGe5TB84FC",
  "key5": "3Aqt2uALWpQKgRYLaKpmHeMKVyzn9y7iMA5DzADbN1NjYRL5an5KMtag31sQc4QN1Uh8iZm6WVSyxo4kLDffAE3v",
  "key6": "3b2DmmgWjxPAsPMmNUBBzUqDicvqYDEhYPwRp87N9BRF5nusyCuVtD9KwA8RK7ecbAhsu8ihD7NCBctQuWmP2bJe",
  "key7": "anrY6XU39gr8cwZUAMEudtEBKXjGN2dhXiZYfzUimcfZa7inERvKb55rH1UBovs1Jc6cv2H7NH5yBAsixhkpSVF",
  "key8": "4GzVKi2FT1ZqczimZ3FUyFE7sDVjv3cdMPs655Xfr4mWiig9oL9HWSuMYWvLHz9RAavy2eUFpPFkenpoAWmD11C1",
  "key9": "2Vz3YR2quqcipqJAvmrTimt8h8cvEjepx3f5wbAka43BJmRiaXC5Q7dH2tGxhzvVpC6KYo8KZQTsxy25SB83S4GC",
  "key10": "4P9j8AWUbHthMhhwqjzfJ16MHLJncjess3NRHtdrYscCYzqZGp9oZ8FTqK7C6HsLr8ZN3ZcPnTZcfGwHSCSB7Kx4",
  "key11": "58tFWLVHMaMN14TaZuAPviZKhedW9P38fRMTTWTJhn4Qen6FUe2JTuc836WY1m8VKWiPKpCE5krDdgvMFk3saXDK",
  "key12": "5ZzVXZWEdixEokhTSmTViYnS6oSRARfQ5WeucL4i2auZUnAvPUWAuYE5uvvA99ih2GKj3h9ZTm3qHi3WiS6E2PBN",
  "key13": "3E5bZAibgSq3Tt4JLpUQWP5XaymVCitXNiALoWppKKK26GudmRECAqSWXofGgAXmLjaRkU4RtdCLs6sfLKZ8pnx8",
  "key14": "5A1AmWajC8X7SDPBPkMNkZGLju6FYt5wXnRBUcRLNqwNChkY8Y4XJoaaoTgw7EwwwsUNvGUxVjVz63D5o1RGsSaV",
  "key15": "54c4DtR946t2veA8gL6uZgDURxMwFYRiBZRDDdZGZ8KcBykPMeG8wDJ5ufwtnC74Evj7vvQQVNdtU2ryJ9YMmJca",
  "key16": "2NhsiKeeHNHQGxem3TsAJbURgTbHSBakpFAwEsyneoGecEphh67sbgqvEvCa3aSnXEstbsRhUHHp7dEzsNBXb1RQ",
  "key17": "3sCmhpSZV6R232QGcAM2s1Wn9SYMbhgKcn39omLSzSeBmNkioN3ae6QUZUoSKGWsyq2CBKH7A3nQHeMfit9ukutr",
  "key18": "3j8S47pfUYQupEwqLKRBHjRJaF4nyDQ3YRZAWDkQVTz5HycQ7CM1AzHeLjL7cP1fNdtKjMXSsJGtM5xSwFHiUhV8",
  "key19": "5jLTiad1uRfyiodzE89HZ94L98jfjYyWrsxCpUdtL3AYLi7uz677LbQg5ruPSYLvB6aqJXDA17yma9pRjHx4oL8m",
  "key20": "4gBd7NTmVTgN17s6qXdmMC6fB3XxxmA2hP9oohUqQrbB5nYxPKqW878kzARW4FDQGmzvZdvPuapP4SVwEoXQCoec",
  "key21": "2Uiu3iWjHdmJgBAtBFBPmNkoEVvDt2fhsBwjaP8Mfy9XdxFBJMESy38WgU8DqbrzfsEe1z7Vna93yFpw2CA79k9Q",
  "key22": "ojcXTyXeJxzhym9CUudkvrGdt48xu8hJrdR3d9SmKyyZQx5jTPKxMXuLh4gWKZYgpML4JnpAsMED5WyZnzECQJn",
  "key23": "3Tou6URe8kPjxeoeYjfwRFrhrNVUNqzC2sxW26uRP73oYeCzykfnT8A7N7YRPB59Ma7uyDoPqgdPP6zptgNsMrRC",
  "key24": "411JiVAP5yYhi2bhNaPPoQP9qKQcVnsahW2w1kKSqxeCke5txjCwMeokgiNSAena4WSF4iv4gxHSQCSUNWiFbCZy",
  "key25": "4hdcbWxaQCVyxqX2fCEs7MS8CgTP9QtZvS8mEdQ26mM4gnFMZGwKXjTPxG8ur9hEk5BMR6gy553vUhT1bsgvcoVb",
  "key26": "2NppUjFrF8X7AufhqrdLwfLr3gMqZgoLaH2WkJDiuMrGnC9TKtsKcgQ4Sh1EKgut6CcNDFG82tdG1U5xnno9kVm8",
  "key27": "4scNoSvcgPe1kVeNPaDXvoWVbbio9WstRCpP6mHSDwxDFW49viiqXGFmb4LisTF77aUrnMTKVMNxDTjLbK3PcXhT",
  "key28": "3nyWH3VZm317nVgkuDrA9yyM6GE8DMWiNh43JYbkNDYNNNjuUrjEfmf9tWyvDJVXrPihzasuoQ2tRppAGPHmg7jP",
  "key29": "2YGSKHbdsWYR2DGZPJXawKLKzDWZACFojSmerAxqTfBg4G45n1diq12QVKkaLJVH2XkBkn4FT34wxUeaTMpcq242",
  "key30": "5jfk8JK8NtGtoqNec5HdGUNMxiTdMkQVYFC5ogicDWepyCpWhZrULnRxE9QAbpNWiqU548xG1qTH6rMRMET1Z8BY",
  "key31": "2kcjzP7vK2ShR4Hx8jUnjUdSFpVLSnEhQySb69zdCWSXNdrGQKDcX4Hpu7yEiu8dCXJVDNgyUg3wzWcbBy6AMzxe",
  "key32": "5vKeBfqcQTyGtoQp3XC5JDzZes8uNuHY75sqZoMFxTgQ93dK7DznMebBgrTN34o9jKTWGxjmsx9xLWH9diz3qarE",
  "key33": "4oLfdMrr9t6EKr4558dB8g9PGtiCXK7gwW8wb9wAADtjTGZAPGer9HPHzZtwyLCoNNRYtobcfyKmpKFDRZFJFrEP",
  "key34": "2QP8sMdMqbt97djMGK8AGA6RaJcrV3PWu1tkpNzzKY8fBKVzRxMPnw8TKnUu9dwvSsGdt9X2dEqmvjCMf9cpKYDP",
  "key35": "MfkUwAAYHzHkVzwNsVNPLwHwYVnAZBJ9FqGkKebUvWco3yBfpDJHMj6RHkg6ApTMtJxq4Zgh64zAYrK2DDAPfVa",
  "key36": "Kq7EgzugTov2f1MJont2k7jEPwFHTgR36uix6TXfoiqK6GASkWjdgfT2fZsGEHaV7TSD72csJBPe2J69wzom2Mp"
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
