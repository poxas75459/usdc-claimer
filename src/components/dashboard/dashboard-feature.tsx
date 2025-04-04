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
    "4GPxnzJa3ZPK8QNaYocGDx46vWE8aUhrJW969LPbbbFYKiDiKos7iRHPt8E8sHuhGiEJcRjKHaEC9ANrwQ6ZpN7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnoVKNaFJ7UoDVJsA9y4gxGG8q42iMxB96d49eZueMACXZG9RdwSFaBDgiQJLkFtDNX31PTETAygunV3i5AE8vV",
  "key1": "4usxFWkg6Bh55996EVPkqW977LqhqUfukt23F6ev2QMPdwgoqVmfYFkku6FyCxDenwoHextWaXA3CAr1P4tqtYjZ",
  "key2": "4GNnRPgEmEVdDKUvZxK8hQc2UoKGyebSch79PjJzoSVoM8o2htvuZoMoTRYvnb6rdHDzC7r6MQJSbrDq1z9P62FW",
  "key3": "3ngRCSwKTx5MbTcrruqe34PTXTN5ntguTdTZfCyBSLDmPtW48k6DiAn1qJ9SFWP4FmPMY4ANrirKWn8qwf7tizBX",
  "key4": "3tENJ8SPcFw4ETUHRoHoajuAzVYC8BjAYQFYe7Fy4ezKZEbhbCYg4oyr8zrFmbGwaoLXBqqN3JJ2NQRLZ4ZrGjqt",
  "key5": "28JJXirExD2f8whThSeuo1abBEaegFm5NRgSaDj9VGKX8jZcAi6th2CU7XUM8aVtgvZAoMqb3U74HH6iDrbm8JbD",
  "key6": "3eJkk3VYaFpJRSfQhRAg9Zv6c55ibH5akwT3gVN1YZ4kM5wBfP6ykqzwY76JKwhHxow9W31xb5qkZjpBJbrkdvwF",
  "key7": "3EkXaur62aX9AdBdELNTJ9w7Km6VdVT8YtCPf6RrUtPMCWJcB3DXZhscDmtbq4G1TKbkFByBgXLLazjB2T9xbXah",
  "key8": "3hRD9yJVvAD2NJ5XiF91wKtB899vTkgNZtgkeE7envD9uVSNt25xmP7qb2jGXMfi2Xhp6N19UH7BZbBMbBkkDsw5",
  "key9": "2tvDpUxWGv1gmWoZb5YMcG86God34jAWUvb2A7n3CQA3RkPnDtAfUzvmr3aopdEY22eBYS9ny5pPWDuH5Km74oNG",
  "key10": "3wPXfAkstQpuW8wrKMEUkv9aXKH1h4Vq2yfL7tHwmCdqYmd4kBNVnVW4KkUe2frzSSWvV1tULCYAqPdVNaYRJ2Jt",
  "key11": "4S6AjAT6MeSZABJA3myjPHU8XHvhXNLF2wyMJQRk5nqwjyV42uBJ4RuwpzNmGcKWBM8R7z9xddxMWvRy7BDp4bBU",
  "key12": "66rtAYMTEPkDoUdKcoiS8izdLpgtU4iJ8uefxEfHiBV85L8GJ1LqQcz18EPCoM34A2VvoavgLUZR6MdPoUSAwTFw",
  "key13": "tGoxsZa3td14rp72URuZ34voTUjNTXA9f2r1VijsFzB5agEEsedi7xv5WS5C23HyBug495vZbuYZr4cmw95kK3j",
  "key14": "JEJkqR3qpBYcK8DLgGMvSCFQGst1BrndntHMXuSKHmafm62TGUvXtB582PpfEFuGv2ncBmRqg2fFarQawa4KjL5",
  "key15": "duQPF84gBYs5WFZ2tXjiVR7J9kVhFauFBNTv4atgptbr8HxdojQxEKQT7Cqe7NBP5FjhZbMgkGKpYFg5nngCudP",
  "key16": "gPGU5tJrs7SjS3yDDhgrQ39cuVEC8eUoNkk3iGu6kFdNGUxEZB1mwYwXGNNta59eb3Qqzh55VdeKPm1CiGhF7oP",
  "key17": "Lk6juf27CJcty6jPHCQcAvM2roZT7xo8c4k4NUgjhn6qKAPeEzTR1QuPGL6ryzTtW13P4LTKZ3beqUAtA6unEnh",
  "key18": "6RWPoSPV8HJyyevriVAekq59AZwkYJknctA2ZjRSpo2J7bexM1fwFXWfhwCvGnBFRWaKsHmLtW6ccXUjwsUV5jR",
  "key19": "4jBoCyAmjzcvLoZWaWikiYeewnhLMB77f5AUnFgq6HR5q2Kf3gNxG9Lu65rZmmC8NUkvv2DDE6ymFJSyALMApALy",
  "key20": "5g9uoitfSbLNeerTDLXFFpV8mr4CjUNrqJRnxxAYJHv3HVfSjQ7ED4ReTo8pM6cqggSWdNLQEVcdsKTN11jksjmx",
  "key21": "5DPHWRigf9kXDnF1TKxDBnoRySfvMAamEmW8PcFKD1EG4PivtiCdmYwtDpMxLeTVVFagJLnktKtsjLZQrPtK5cC1",
  "key22": "r3eiMCcKNCQtvmoKZNECGQ5cyVMTApAoRN2qmAJXSeNmtwLgSh5T4ahfN7vZNRmbYcu1MX3zoK2azYypAcGVHGZ",
  "key23": "5BzwQvZ3Du8LQztGUKXD287rtzQwYTeg2kRZskM5L7xB1RTEd63kmXor6duo2U7YpqnfRf45HYFpoyco6g6N4dDA",
  "key24": "5b2M3CvjQrEnXFpBBaM4yq4Uspgp818G8VZHz9P6XzCSpUUv8A4eB9zieBhvW26ReBUFCBbHCGhyXMtnEB3spP1J",
  "key25": "4NUEHgQDZwkzYy4LCBPfR2icMNzLoG9EqamcKazB7EhyFPnzpQmY83LNDG4o5wBeFR9AHEmtuUsqJ5BhzKTxdHhP",
  "key26": "59aGDrzCGuRuo4A8a7ssYKqVaPuGKj9Y5tyHgizntwvA3ugDhD6nmQYSfJZvbn3kUrA8utSMduJ3JkKYNYqeN5V5",
  "key27": "3Pha47PsG8tRGeZskTLqb2L6cEsbLZ5fF6AJNpwSJnvXhx48YqW8pyNqCLhNzswnC1zMojrRXJ3M4EHcC9sF1iwS",
  "key28": "4cJsHWFRDxHfcsNDQYmpKPw3ATAvhXnQXbjB2g8EKgWcBtyUARfC9PPALej9Rijbp23oXH9jbn2Ab586VVruawCS",
  "key29": "4JfcS5zXJz96ExMzFM5ZT2naCpgsmosdvoJ3ErsFcmxdKN1yVvtoDSWCtKQdDG9sJWaApyLy1HBadoVxJyVMQHNA",
  "key30": "4E8c7TRbaMMwiX2T8d637QTzw7AaKS9BTWxga9uUUkErroydqoX7gxWNFSw3TfXjrZVL9kzrEWhZvJ76LbuiLHPT",
  "key31": "bZyiVxTGWQP2gLPCMhpwSisDaCBPyosPR8sLbdsHHEaPsdmfTFXko7FyQd98HrbUFm9FxnUfGHLaDfZmjSsfzsF",
  "key32": "3nibtYyNzTR7EsgsTRYxLzUj5zgsh61HwNkvxBaRehUqq5XVPDtxe2Gf43jMDy73y7XTsjuuqxWbyNat3TMj9oz3",
  "key33": "5jUSbiKENbnkvcQADikMAJ4RKNTyCG79DKwvxguQRX6JxHtHef2VNJaNr26CpjA5omwncG5NnHArbPrespdLvz51",
  "key34": "4rWHJ7qjucBP91Vw7eKdMQBafeAiSv24BX9faxtqmANVuLnNJ6udzeDxbSq6G3eXjD6rXRkK4FWUaKHpU5aQrapf",
  "key35": "yTr4dVQjifQB4vUEcT82a8cioY42RxKCWuZWUcbq1kbPUcTwMMN2fU12EQtcGd4yqJrz2JLWiuFnEmnMYxEnXpB",
  "key36": "5Hcusa9Udt9LrYdqU4cFMaJaf43Mn53Xb5tyLsbawQEoVmX6CvHVNo9vCmDPrHXmXTJEuujQM1dcEWZrj8uB3Cgi"
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
