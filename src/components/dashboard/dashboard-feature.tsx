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
    "YjXn4LbvxwRfifRH7S3Y5kyz96rqi3rrh7HS1neWfgLic4H9cQjMKkV9c3tH51UxqBhmbBFapDR8EjCB6UXwAC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnbjY6bbq2EKfQ36tWZ4cFRYRafkTit6PPoF833m7rpeKrzYsKm1tonVFVah9wFvK8tfHUhQtE1uPzVcVDf4yfn",
  "key1": "oAc13NdfEmvPxCtRfEnYtDdSUnBCvtsPRBM3kpwWqiY3rWRMadtNzZQP9Xm9Hp7E2ToEttWJQGs51USHiryBQXW",
  "key2": "39TdXyX25PFdJHBSJXkzmfKmkZVQNjA8YRfqg4BZqEZfqawHnfU9W9Y5XSURakaQHrHJoftWAdBndj1eTaU7oAzC",
  "key3": "2RuiTPRRDuamnwvHc4WfieF378FwfNoSDAgqwwVW5b5K5ucERpJGpWfAaEfdx4MCFkawqG3zadjDu4KxwBry7u6S",
  "key4": "3Xq61NcSQTtnKwugFYxSBeeWVDUrgQ9VVpuCkTAE3UfBotDzx5E4FsSDD3CfGCsivU4HarZfpXYZPxygv23ZLNc",
  "key5": "3cHkH7ZeeZ6CzLj4Lo7yhMnN6KKsokQeQSUw31kRLUHq82CxdCJ5u8ZA53MFAm8gxK66M3UQAHvo2jVVqvmbec51",
  "key6": "YKiv3yaxFKEhAtDkZJbFKBHso9XESb53P2uN495tYWxuetwiooF6Bx15v1Yms7HJtHYAtCp1JbNPmPytPo1Rkc1",
  "key7": "FHA1uKrEKnX2z5Wvr9eP4JQQoqqDRWMNreiGwm3ihWRfMysXcogs9tudwfASxW2dfegHenzGYYe183dhzwnsS4S",
  "key8": "3ArSXQZW8bN3NUmxn7XNM361TrfGF3mVu6s4MZBVmhDC67HhD1dJ9rP1LaNeMoWdwCeoqU9d9n7GVYCPdFJUbQjD",
  "key9": "5tVJsiG9bYesHY3nTYRAa4qqmEbAAt8dk4EahdtaKrGdMAb8uyTqqkyH2pZ8LAFzNJAbX54HMZtAevkqHHWUfuAb",
  "key10": "5vXAZLbJJVT9PqUSY46FnajEuiWFNuu1hohgaEQKJQuMKhwJEXzd1h2sSh4i1rpfwMUm9sLsrQNTZMLCtnYnQaWM",
  "key11": "638WhcyCPUF1qBHZSDa8rxzsTrbNKiJMEzu9K3UdNuvbqVJao3F2AfipsTs5pXZgqjq9KxZaKCAefbsvyH2EwdJH",
  "key12": "2ZhKByN9n55hycbyS9QipswD1Eg5jU5LYKQ1mouXBo12KJdNsFcnYMj39Bcwzdz2szXf6gR5Z6CZQXdJXeWpoNAB",
  "key13": "4X5HhsreuNhhFzdXFkAUgpTVEs1NY8rfCzh5oKgM7Ww9ntFEkYa89u8FFGMRT9VhrFrvE8wgnjJVkuy1gFPBTZVx",
  "key14": "421yEpwnu9TnNAqEwWreSEDWw5t2rqHcndPtvutmmVFNGBE9cqawYz4imeTgX1FxtfPzcUQPX7W8yH3cZUCRz83n",
  "key15": "2AfUnKxXf84vPFXLagoKWQe5CfKTaBARZkBTYtwRTXXLDBFvw4SvEh28hTzuAUUXdvV6dtQUE2KsVzQaYN1opRUk",
  "key16": "2vRiUcynJcrbtpadYnFXDvjKkwHJEbiwVLAKjfyhhCawU7ZfTTUuYPmjaL4S31Zt2EYE8YQ9RRV8D9JBbx9XL1cL",
  "key17": "45PxhZbpQzWkZe9GpPGU18m1fuES9LtuL7nn7cTQndU9NwRqSEtaCrJRnyy5Hbm5LyJMcHub2bo4ifKrmFN3e1DS",
  "key18": "45iqm5dCbwnNPhQDnRf7jDbAXF2HZ5kRtk76byG3j2TqytyU5joYYR9DTSdy3LeyyA8w5R8oaeKDJiGVBUaMD9am",
  "key19": "4mXZ4BhnRDrjCv8323EBnjNPRkvsEkpX2TVVrpxr7Y3ik3AzvShZLVbfutPsEchhgG67pNH6ARkuSH6LuXmXB6PV",
  "key20": "3usytczgmLoJF7McE2GGMtu8h9NF87UyrkB3cjwfADNPJbdM2suhVoFCmN2EuUQ5qwzwPMimCLqfq4i8PQFuKAkP",
  "key21": "55KsAwnC5FrtRPTPDePo6hEzfEo3YFFFAmbxkmTjAuym9fJeEAxAyZAZRREvLExe7v1yBvhWEo1H3JwoxhJuwgCL",
  "key22": "5BeBxW6zVBmSFS41s9v367wwQujJftq8DWk7NNPP24Gjy8wvKZPbTGN3njfRyDRaSmye5CqjVXvvUMZzoQgAP3c9",
  "key23": "5Y3bFe3ELHXXPUEf6B3T61Fd9NcjSsPvUcggLqJjgsoAN5JzsfXxJHHCmBNJ1GYSS3E8rNRP4fpx44HYG2hmc27d",
  "key24": "2EzBtpZA7GGZ9ADpyv3XBhznbbRPWfMEewqRFuEnBDp516SZ8L9oh3cQa2RJfaH7kTaYNUJmbrrQkPV9Tsq8bBMp",
  "key25": "43JCYu9FPoQrVKT9jQW4v1FtLZASBZtF1xBbWwPQkAPZx4aZ9EQLTLanGNgGvrqyfCaM8Se2Ehg4VsZmf4fzoGvZ",
  "key26": "5RDeFJeFhnWiaWMAMv6CS7LUsBHo2pWsWuMySc4nQGbtzkSDsu6Z52FyhXM2M6za8MoHe7Kqx7kChdC36HPCfHps",
  "key27": "217J6usKvuMpZo3Hq4BApsS5VPvKvqg5AHhY8gCJfnodWTeF9gTjGcM6jZjwYu6xVJteTHN4iPm6opdtC5NZauxu",
  "key28": "3vXGLXQkRruSmEiARedAksx2cALjqUvGLvhUTgVbwohG8g6MDJ6KzCWs5upSzgg7PYNoLz33oKrLRz6rCzhMaMkT",
  "key29": "4q7rW6y93zwwc4YMzyeQ6ieAveg8Hno7jkn23AKbL6r7M8afj15bECbrY82xA1Z7beC6aDm4sBdFKfz9kDFdFmpr",
  "key30": "4C7EmC1FKzXvTsrArgVsaHrQaev2DS8LJQqNnUoK8DVUmVshdQNxJdpRQcvfLpUwRgc71HmjqahWezatmbk9myGw",
  "key31": "3o4qkhXAYPv8XmBPCYX7FaRVrYcnzz1ePbTDbzJRuBoXMnLPe3MwwRPPSnbj6ShBejR6XA2GQrLgXKTKHExpatcT",
  "key32": "2KvK9ByJVGJYsWDBeJCTyYmQN8nutU3MbwKB5p4a85P8bTP6nFU4BPtNGKzPdy5Q6psEuEa86fLt4Mo1hQkQaGnB",
  "key33": "2f3piVkHck3TCxAoKq9WDB3NeppXrLQcL5UfyBsVSZTngomVmwNyy9jn41BesiuVpyAbviKfpmmx7gT443TRyKEC",
  "key34": "36CEmZSYWaF4jbNqw7RUiVAKgt92Q5XxafSZuSNdb3a5H7zuSMK4zZ5LvVGX8P7bYk5qr2YH7ojrfqeiQTAsPEaX",
  "key35": "5uU1PpWydYmqJhGRKsccrN3gcHUPCyfrofX9PLme3MUomrUho2VHx32QW4Qok6j56qgh3cGU2GNTcmtxCq9g1seU",
  "key36": "4mP8HSYLf87LpJoQDEaBMttjp4bepohFBitbHik7iJG1VubAm4Ep9kX7wG8k3uqCiUqkhUqNYZE3KSCMf1CojsTu",
  "key37": "HwWfgDWXmJrkiH15AF9Xt6Xd4Tjde7W7XoeGa98VSyZRGfeiKHU5F7whQLGxsmUEfcR9orC282VKS5chTxAc6bR",
  "key38": "5yDUqNKN4PbLGXs9sz1W3rUz6Y1RUjtNHy1hUrmq3kdQ4LtkHeim61hD978Wbi6pPYbHNtvrWTzX97gVWtPxU2Dd",
  "key39": "4pMy5Bx3Nv8YEGmbezPW8LyEvsa8QGUU3L78uWpNnvdV9TkLiZwmoqQfmQMk3yHJWUWEvbiLmXEoCYwLQVSbx1V2",
  "key40": "5ovUNZm3UMUYna24fsMUEg9nsaEEWwGktXqd6E2Zc4AG72i5V1oGSiMoSTYcJJW3S3cJ5pJfNFu2B6WPgwTxJdUa",
  "key41": "iYZ7pVue6CtoWUzd3CQHJ2vx64JZFebrFhFJxR6Eque15CBEnmxL3yJmbaruhqad9TTtb4g9NMSSYJ44AaWHfLc",
  "key42": "PNwd5LbbQ6EQn7WToZQwb3TdUF1cDjwxK5HwkTecxfmuYrCtrFaFqBsFWrHhfxomd8YGXme7LphMpCW5kppufLp",
  "key43": "2oP2hJQjjrgJQFnULaap1BGQ93puKt8cywC8AG7dbxdva2BGvmB5St3njUzJcLcaJWNe9HkqbGvcdfgu4mbCzhF2",
  "key44": "4LSeMgtcExjkwNkogrzpfxqTv97LJNPYKSuKdL1Nj8JzgtLim8YdHrrA2MZ5HniTMktQFyMvez2bkLywYwromL7g",
  "key45": "3XjgkuLf9nrGjCv9BqwysSDKb3mW97VX7hkzD36AvbZULNkrAAumjxcaySfvhA52HTFGc3qf4ychhSanTEPVTTDb",
  "key46": "GqBSsJGGong1UdP3Vrcsuh6uTUvWq7F9TzT7bPnLLAFFVi8X1aDZeHyLP1NCzFCk62kms2uqBU7Knd1uNScz1je",
  "key47": "5Bfr4HZ8x9Qwd8GNmpbuSCyPNeaUF2JqZUowRQAnNFMEQchsnrJyRGAMWDJ5AMHGJgipDMMCu5C7fXoTN1qc4k8H"
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
