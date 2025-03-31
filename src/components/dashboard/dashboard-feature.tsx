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
    "3jV1HH1oAeBURheZv59VL9h1g4mGs3stDuBrGxtPAa2z3n7J6CAF2jmAVgsw3CvRhwJdQATdkJrKo7D8HXbMDTNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jnes5UWspRnD6DYDm99u3ko3YZ5p72tvDx7wBwzQsV7cGKWoGZEmSYy7nqTj5gxHpqQaHsTDJKMQGHptNdksPG7",
  "key1": "S46n5bUwdSmBSnn3fvQNq17VJJnzkA7ttzULrfygnLkDriR7WSthmgkGPhPc7UDu6LPJLeopeuAA343DZ6wDSG3",
  "key2": "67LrF7JuTDsmkmG53LtGv9Z57A29SnDyoLdKUWLWUSk8hU8Vj65UkspRifxMdogxwCZ8qyzhiBdX6FtyGWc7HVSY",
  "key3": "KzjBdrS1NjbooRuJ3BUZ8DpKshVk12nKrJnUZu2ZoQKUC9bU6QSmrvbJyjkCX3PHMpP4KmqXTB2ByjdbYzi5ERB",
  "key4": "4Jue9TYbZS4aDncgmkriHd9VXaKrw2vbRqoeDJSr3dUNRdWdvQiwn9BH64dQ7P7V4ZreYNtKmyNk3j49NLWrwgCe",
  "key5": "2EAurLkEjGBk3XU9kgfquyN4kybADMQq2abuT5hGpaXCZ1wxVbmDjrfJ6EhJZoZ66wtoHqpbk4copRmEsqEHefTW",
  "key6": "5AW9ppT12ydN24Va21cGbawzocMMiUbXjDz9EV9MPQix6DmeLsz23qGhiYjuPLfcmkE6dyqSqGpuaqdh2xXosxyN",
  "key7": "5WrUi4uJhGRnbLaZwh49Herdd5rJZFbsrb9wKgzLKagy8sbth74nhYAwXRftfMfef9XJx9hRt244MkmdNPZVpxan",
  "key8": "5AZTm1PDLtaCmErKBEnnmw9mz43ub8tcf1zarMDtMGe28YzHuRVu5T5muF4yr3E93AZYYBor9Vedkq8g7af8H4dT",
  "key9": "3FVDtMJ2VQwMFbss2FQrzBjG6XXnKunqi1bNRVPv4NW8hWJ2rc5XhCaomaPmTtDvarVai83gfQYMYiYtHccL54SE",
  "key10": "vjRQkDHTVuHJzzWi63dkU3Ye7FQYF8fRwkdrQerspbR4fyYvdwShdE14LFnzHrB2RzyBQQvErs6A9Qt9tSvV9xD",
  "key11": "64r8XtukkTBKJRBWFMMmKxSRRVPDD6x1PzPFLToFy3skQAt6sYVV3VEYhrRLLizjhL16uKiTUdXzFeLAKkBYNrDv",
  "key12": "NKoWUkmmLHb3HQudye9WbYvrtjc3KoKjq6SoEeBpRGXAasxzv4eWTu2keT9GPkA3sYceAaFqMRheHGNVqdyeqY2",
  "key13": "5BvraauPvNP2kBy47pfruUHDZWTzuwXB3EdgJuxM9RGmLB8gTkQj85uGLZ9VSYi4HLeKzx4nBBjNZropsMpyKVwR",
  "key14": "5kEidmywimNqug3g9FeRfqvQnnw8yCmLC7DKAkmFK5gtE7ddt1dMPbtxfHmdQHJLDN3hicqb4RhvaXz5So1kSDBd",
  "key15": "2fFaCDkM34nzPdcw1pVyJxFZ2x4UiPJ1U8DAPWwbsXqpciFLnVPWQP4yhRpcBshaqtAy1vwUPTjmSzrrQ8FhLzg",
  "key16": "35r7jfDXZpGCC3StAZfJpsUQzdpKaSbdXfmeRWQ7WZreqJkmZMFm77HyCzDiHdbQvsAHfnyfwh4aj3J8bUz9YrMN",
  "key17": "38umiz9FmejeTUtLZAVGRaDM1aZV7gKcaLYRdEzEcd7YpNqf9dZko1hKjhuVh6dR2RX3iLxY12wmGa9sjLUuNpYB",
  "key18": "2nWKzEJ9fT9nnB5Cn9HtWYRWcP45VhrxP72fPUXFKvh36LtBeC5nvhiN7X8d6jJqBQXgdMEJgwXfNBwUJRv2nEfC",
  "key19": "4MAnnMWHZkdEBdg2CrC8wJ3Qng4GSQBUMCWJWVy8ydFosm8AbCp9ex8QCu2dhxQT6keM3NqEMP9TucZXqiuaYjuE",
  "key20": "3nzWXsQNmrCbTY8G43VtT9maS5FgPj2gt3gwLEt7XKF2HpZfyamRHq78U9YQyUjUfmkQ2uaFxjMN2f5m9wZxNYdL",
  "key21": "5WrDJ8bv9H1mSPW5dnewWMLPhe25g3n1pma1PqrpPTzSzibEkh9267PQfcyHmc6b1esKgMWCH3Viw1mhyvxmYKsr",
  "key22": "3bXvyRik8KN3S6GdjWGXoeWcYS7JhWiagno1aVYj3cC24phhRqXVLzchgADxxayBnrxJPrKSKomPD4MhMnJw3hxt",
  "key23": "HVWWG9Gq7ncXabauyZ6ETzDCtRPCEqsxXUbLwGxY2BvbgF8NpXVLYDAwryscpHysPpGofjN6wnn9LBnYFakyCKt",
  "key24": "54ZQCwARCPz8M3X9xzXsxguReRWknZpGp3BshTNFVGxdjdKEUtzjAxvZ3nwoPRLJc3nmPiSrKu8ojrhJ12aEd6zZ",
  "key25": "4SVhNK5XCDgDSREuNHiomjCZ81HJG2katus7XRbWLuXZiuck7pLTH7pNmsL7bWbHBxB29gu9n8D8eaNHg3y1PbQj",
  "key26": "4o4AehBdJ7ztqMCfB2QuZB7DeZn96sHY26ZgvunbQgwDiAfmgHHWrR3etW6Hvtir23QpPaBFPW4Ac6yc9eaFxDTC",
  "key27": "5GwsLvhkQAaSrnyDbT46DsjeQLmpjdoMbBGRtsAaAvbsa8Yf2hcdX4YY5D2CErq36yNsSSG6T9m6RjUp8xAfmmpc",
  "key28": "64UyXiBbkEk39kg2xF2ptKjmmaShQJZ2DeHHLg5cfFnx66cdCF5qM9pMUjLD13C89xHxLHTP7RAUgVNTbnntkaLs",
  "key29": "4V2jDaFJ2dSutf5Qm2qrKpGytH5TWbhQxujceRewX6DYbkLxLdPnScdxUNjZwbDm2goHG8QvndwQc74D9YGnofwV"
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
