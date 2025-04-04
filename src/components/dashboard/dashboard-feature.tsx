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
    "5b1GAEtyb2s6jfsUfDWsRLZvfPcgGPL9QKxtCfpwNbVtEGjb4zprgvwihUssNmebrXKVDyKGTEHqtSFvqrLbGwBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZpsYk7hTbxDML7qCzjpJrLafwiEPDqfRvLSFHVgwaagG8JRWeXcb74Rtk4gC2B1pohnZjRgpLhdEs9WgAP14eQ",
  "key1": "2HfSdUxGmQYEvfgXDePohzmC5EfS1Ad55h63ZwCzWiLnFdqpUTNyFfzG2LK1uf3mDsaZZyVwbU9nsgKvN2BKinh6",
  "key2": "3SsWh2AsGdcoHKVvWXJSF42EpecstseKoj37NDc2WhvxmkseDDCWr3FTj94hS8fGiqpKEGKHXCMDcbhxq7sXsJWh",
  "key3": "4v5qUnF2ouq3hTiJ29YTWphZS95ysRJdPXfwNEsKo1GBHdHofjjnGHqa8hB6BrNAyW494vv8gUEfKwV3wbMjFN3c",
  "key4": "46JV7x2M2t3du33kXTwSzS6jrHLL4A4x9vBhxUqRJctDtZVnsotqRHr8zrR5AZmAHdj6JRuE2UWCxcBjSnY8LrSK",
  "key5": "4dRaf3MbL5WchJvbuvVRyyGrDybkrnafVFSknFW2VZoxMv5AmFAWRa5F4N5cLaKG6fNuQp7NX58pa7hCCGB464yY",
  "key6": "3JcsByDWpKvkYLdv273H2r2Y5nzX13kxe7KerzSVvihzVaV2RfpzVaZnemBC21wy9jHpkwtEkFLJnPuudtu3eeBz",
  "key7": "3eM7THPzRVeYiJqpk4f85oQzVuJDfUJffCpekyDKguvqbx1AJzfREMcpHFqnXW15oBMqrNTJviSC55HyDsfs4ENJ",
  "key8": "3ZQg7hwLfSdPP6aUmbohLt1QhCVPb5vBZa5x6FDzePcLcrbBhPsuxCNMjWDw9GJ7xiA2fsxW3i4WeQgBtEfxmy5V",
  "key9": "4WuEemFL129KGkZn7uQ56woMvhu3wRcXfj4PqST1UHBxSQaJcAccDaxNV4rHMy64PrB6DNqfJBJFQPeL6sW8LuaD",
  "key10": "5hdTzDrg84DsFoc4UhEeDmyM2C6XfXFxtS7MaA2j8SVMrYpYSDu5JyXZT5Qv6Bo66JsutU2dMwBep63qBUgUCkFs",
  "key11": "2nMiR428Yho6sYfHXCYfXhA5PzQ59MgnYi9Ac1e4xUQQfW5UmciEkdiF922GgEpWrY5inF4e6RQ5mcbWGcV2fmcp",
  "key12": "2VnQ8CnLfHeJE4WWojTfWSygKqJ2Lhog22bwTx6yqMmRG3UjZfE7Yobzf9BiWsYvwubFusTdzohe2of3Jej8PFid",
  "key13": "2VRJrqKV3Ggo4cHnYhb9aXKFnvwoQKWXd3HmVdEfsGPKaHaeeM8nHLhRDuBUHkfS3VyS1bUi9MqNdt1BX9hddnwP",
  "key14": "4Ki68bBbap18eUkthk9Y9jG67HiWoGkcM7T5RzT4KGSe3bQvyv9hSuzoYzXsmsjL2XvC5owSV2BiqMUeLXwsFhks",
  "key15": "WKHTZqSMztoNmQLdHicsNrBB9x1K2QBGCaua8nNG9CQdzRUwXuZZaF3zrNt8W3Esn9fDpGWnSwBYmmMSxTHv5Me",
  "key16": "2ENKUzeshnbUaNypJQDruiqjvZx6ggRpE9CLADe5nL8Kj1PjvfqBmTrApnytgvnHK4am98W5tqLnfofRbDX5gJvh",
  "key17": "2LVL2y8U4Ly3cuvcmgYNFjpJ6kW8wAyVRZbLcKWYAehj9ySzLHncBAHS1KKfTK2TU47Aj2oYjECbcrXnYkXXyS78",
  "key18": "2r4n8KXctRwMmTaoWAvrEgszSKz6Stvch5B28eSkVC4bHiKFe7MkYN4szJvDKUe3qLJS251hwnbapQGcwzjTqt76",
  "key19": "V2WwSKeVCtKAAzrLZF1r8qGUouWoxRmcStKVmZ6MHGiPR1MnDTzQBw8fkk5xPESUUxepQgdg2TQUtHpw9fhUCHX",
  "key20": "26EbgvU6j64ukhX5eni3GPgKkBBc1njojHPSuCWLxPg5qdreaGARhR6hjpYfxbMzaVNkqRA2YamNCJ5rrKcmNa7o",
  "key21": "4bA8f3MuKwADDLCLCPq82kkfH4e9T8z9kPsPrMVzXscdhapzCymAgYR9onDCC13SHLVBxXSPpPdwDKBmd6Z8NR6H",
  "key22": "QQAECrV8oQAeXRYaiEUunRJam3uBNGphRX5XcKTwgFaWPC3Aj7vKxne2zKxMFQiifvxFQYRTNAT3SHdXJS7omqq",
  "key23": "4h9eJ2ybWTnSVkYfLqumSc1ByeqtR3GADRijv6cXUFiQiwmozuB4bKBttqnBVi2a7MFD5kciPHwv1z8rt1ubhBxp",
  "key24": "2N1AUCDp9iN4r8mRYpAj2Q9ABGevKQLNe7CWMdY3ZFp3rJJvzV2yv4mN222WqsQWskgCyGa7A8YpfuRo7Axm1g8u",
  "key25": "2i1omSG1cJouZ3rbb3K7Nh3k7K6CPKSd8FVkadsz7nWsqBdXTtvtJ8PJkf1Lz5Gr4asmLhTUCy7wYpeCYoXNn8A3",
  "key26": "5DMdH6N8c5zh9ZNrrkjGfh6vnUaMi9cMWKKC365T2C5DfzEoqhNnbNCjWnBnhewAoRXNL2fMbvAHWSw96cHV6Aa6",
  "key27": "4Wtd7Fu9aCG28jKrbUjSLS8n42Rf424cnGqddJmMkSzSHxfXedjvL1aZG5JwemeePtbWq9MGhzUfjZrsue4imKvD",
  "key28": "5hUhHaAJLcsP8ZLrYb8N7NhsE521DBvp88rgBhzVF7Rd3ZsmmVMMMo8fs8JYgSKiNVt45bTNsFLMkzHh6yLuBbNq",
  "key29": "5EBaTWPLmUpNNQDVH2AYTfPj4Sto3CkcGzDdhT9BonjHfnxthvwrH36HnD116jCh4HrDBproWtqjtPfazXDJ9cYG",
  "key30": "28N9jCerJVXgv8kkH9MVXNbFJbga3bcX6d1ksSy37s21qfYTxnQ6xJ4bYDkAfbW1AD61zWUpDBv3meiuE43rsujP",
  "key31": "4vZrnYRFSsquhhcuZ4gGSPjM3Rpfb7c7xiRpxsBh8GUFHjMhkicYdH1MmShEEvxAZ5HUH5Sjm8XYu2bW56DbjymF",
  "key32": "31qerfty5xX3bdCrk49v8spuHznwfMkyzsWC3iWE25ecyD1A8YE8VHPWqykiWU8ZWijTFEfgzoor4q2Fu6tT2h22",
  "key33": "5wzQaVLpEKVwtCDNy8WChbMfadXVCX9BN8sfgKP7zpFNQsi48VXzwwAoMHkJhXsNCNAmXbsKjPgp5u3XrJCeaD9q",
  "key34": "481FtBp25BoD85DoCJxiQLNQrkr1vW8CMurKDnKBsEP83mSfupBAgrYrnvH68urXgtVFRma7Cs78ZqReWLgaq4b5",
  "key35": "3JY98ng5FKXGQHgbcu3MgZb9akZbF2aKkaADAPpZVcaqDpnAggNGTABDNN9kww33WUr3dsQE8WakB9yN2YxfP5q7",
  "key36": "2Ssj7NZX5qkkzCbFZLdg5sfDXJeZEsuPuxhRmhxFyVGzvsFkrgLhPVYz118h3c5cVKd3oyHxY9zPd6rdp4tcPqgy",
  "key37": "4zDK8By7x38fvd7uZE3WSBdWyPANWa5eHsdqfzrV476YibLHY4m15qk2UL7atatS57QUFbDhehkCK36NgkWPFD2f",
  "key38": "3ZDeC9SPCYmqfvuS32w4qTowKQhCpUcYaWgEXVQCSY3RaUtTE1vGRiu4QHzSvXHEuVZywvbwDYwMNzWyBBq4LyeG",
  "key39": "4cC1FY584iLfTtu8ULpXdBZoLsEr4EqyWWSNLZxkmewf73MBA8DJrZTWTP9rLgqnQmJgdQkXtJWWFpYRUPoWgfK"
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
