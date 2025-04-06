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
    "53g4PYjnfB4mtdovjm13GK3EBPb6LoEPYUDv72Y7utWqc3iHjiTu37z2QTwBZa4fmLQX3Qcz4cDkM516aUP38p8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8HuANgnZAXQ2yyhtbBCJQgrhsETrTAXBAikYnkL11Ry7Qe8zCNt8ZBLRifiDp74xru6n3tG3DZ5QBQdWR2hqHP",
  "key1": "2ySqcJhxZE6xEpUjXQK81FzmABso37UpjFTEP4Vz1ne7y1RTP8s4hDsdZMub5iJjQBHSMVMx6ZhdFZx7gx5E7M6Y",
  "key2": "3bm8is62JNZN3pEN83EgcWVy7UeQxvoaym3VNHaNrYr5mLBB6zK6QKhF54qY13u4QAtQ1Js74h8gNp2C2dPonhBM",
  "key3": "L1Wrwn4kXLsgF5dCuwsq5XdkwUiLzSxZfPx391B2tEb6TdqJxxkBLB952Bajj82N3jsmBxTwf1CX9ZhcNUMG4jw",
  "key4": "34CVfD5X8Zq9oUbzzZPzd3quLF4CbCm6MRdHniGnFWLw4Kx8si64nN7AR5J6L5rho8E6JP8atMoTqZyBDpJWn7xN",
  "key5": "3NNy5oB92zU3CwBMiJBSWqH4UQQbZcG326TE9RjHcK6bxNr3X8VtrqFxgUw5gsWNUhkxkBDArf3aYwiNf2cn2bu3",
  "key6": "4tyx7NKxgWeSuYTLVyrHm8RNEkfc2LQrxazuxREijgpPokMVCgP2ANbXJiQvNKcTJvUgoUbAo8LzyuG4MkYYEgYD",
  "key7": "5uBgHWb91WYtGKtB98RJZXMDJ1C184ZWqSHS8WCZ9A15HrMHGDer84QEY7gm52XgRzfLHSyshvmBBPqz1E585Gzu",
  "key8": "4wwrwxpmbxFyjNPN4HT7D83m8TnxndJ7mBtvBGr3RDKrz93wUVyHVPDgZb8S4QQ8VYZztWZXtrNzCiDuEr1yhwaw",
  "key9": "4yHWgJ36o81cyjDUEEvT9rvipAMkfGTRjNSJqCBrZeS7ThgJ3XPSydqmPx7A1BAWcwGh8F5X2ax4N5aRGSvUEcsL",
  "key10": "3zGVGcGsNYKn17or73xdGgbhtAYWrNdx54F7E5iKZB7g2TdVYfFEXXLYCYmeVf5YhNCQio2k2Z8Zv1ewET8Wwbu6",
  "key11": "2qQkwp5QVvG9MQ2pWnDFPaS9D63Qba9YvZPwugkSziBMEU3aLmtnGQHzFD7SXgfuajZD9WmhKyPvbVa5uzFdrJvC",
  "key12": "43LPU5N3TyDKpW1RuAKP8RhG4jwVjhiUszHCUVawLPYhYZbyShkLDXuTjV7RMGnxFQUj1zenf1ZKTPMyuVt4qhMQ",
  "key13": "3bwRLCeUiUn3mH4z8SRx9y58JAoM1D9XhcPLPgcST993i2wdactquQW56C9562QUc9K5FGK1UkUkCo52RiZ4K7wT",
  "key14": "2bW8yQBtLGF3Sghb6apLFjYfVCZwbpMtbBKcJ7A7baZJkUtdejPQLNNB2mQtgLGEHp2nD8GHGgqge6PQ2FGm2opR",
  "key15": "3W8JL6LwuedmQ5NhhQgQ592eDyKaVLfiF385wdNA7iXU9SKUWiPmMZJ93zqPnyejHXwXxs8cZkGN4Sq1UAqFNQne",
  "key16": "csGRb4v4ytxiFbjULB2LduhkjoUrKx1hNWSSmDjqocseetvqEBocxent68ymToiQXZDET6Q58iFwYLdUGiywwyr",
  "key17": "3dVuVm3FmQ88wygMziWXP9vUWucdDFAm1G1PTnynsytxxcdZnv2voAjZrmtR155bFaAYtLnbPJhuogDQX7S7Fuir",
  "key18": "2jcA9MCmzigw7aU97vRRCi5CsBKb8Zw7iRadsRveJHHs7RKiPhJRTTpy7jn1pLG2RyEWeS2eg5hzWDUX26XAFNh3",
  "key19": "bs8zmQfXgcqrZiv1tsRFThy52kfTABB8H3Vjqv1paWfkX9YJurEBogvP9hHwarwALsCubAKQzfdya6Bu7x1FXr9",
  "key20": "67LxDQGGAj9ptpFUyqd9opLxqd6N1evpV1nGHN6MZ6e53VZK3FKeRPXFpiPnMJA2W1RzaQ6TNHegJft6ysRra8sN",
  "key21": "35bTLkBjEq6haDDwuTpD71gZiQj2WSEgoSmoD863abTZizetvTjJvbtshgzYzX8pqZVYxPLCoMfDjbfZQmsWV9o3",
  "key22": "4wrWvh7vLsUabqynnc9nrSxVHstob2XUrpaEfgn7bssw7jptKxaEHdFP6yLh5HCJnd2E6KFjFGMNu7VS24QzicxF",
  "key23": "aUzeZ9Q6YqF4tKemxQPic2fSq8HaFwj72Ko7mJaKxz2B39u6Ud7DbRk2q38ByfTXRNrKKxFmzwibqSawsz4fTjb",
  "key24": "5fmmCjJL3DMK9bsBDNWg77ExQ89BXaPYpzzJYP16fmCnHKqaPXoQiaGSjq9SksBPiB9s1uiw3Sk46S1emvDZMPqh",
  "key25": "kJgLfb2QtPLvpdkpQmkqi58Kv5uNSj27bjcCcPX2dK4izAVaDhtxnyHmdRPYw84mkiP3BAp4nikndxDcMN5KjMC",
  "key26": "PU5QBMvkzfyQbRCuGiDiNVLU4RQ3LGK4xRxRAcfUbbdZLpgar2jF1sa3UzXpmc21p6Jt5unLPPshhYzQLAaDrLQ",
  "key27": "5bC1zHSnhPhbXjp1qNkHFrH3dNL5F2fpgMNyWZwdQsWXC1mYq2XDQi8vnYYWq1BPHRTUWmujqFBeoawDrXC2LwXb",
  "key28": "4tjsYi7sbETBxFYPTpkbc4EYNW7SZWX54hTqAhPbUHcV4BQNbXc4NXfxgCSBLV62z8oAZqPC7pBs7w7SB8NsehM9",
  "key29": "5zSNkHceNwnXLSPX8fKgMUPJQe7dDHppkTanrczW4bCKZ18qnFRyjbcXbX8gjcr7JsKAtbQCUFxwFg52r8NDK7Xa",
  "key30": "3uXtAqYktqsxQJk9XMA44A2Zr9aGE1JTZhF3Vmbp8Gn8dgTjAf7FoMV4ETZTinc8X9t6sEDGXXiz6hSr52GRTxQ3",
  "key31": "Pv2hcgV59aY8r2kzg5VKZ55Va6EhdTc5rsxEVU9gjGhfendEXyuuitLAJj7WBR5Wqy74PPwVJhzJNwE9FoKxkwN",
  "key32": "5ZJGLp7AScPaU2ocRDNtGzrZH43ouDuq7Zz77MBY9hQndzgum7JaF1NCWhnVzGjs8YQohwmNop6BSrSxB14HX4q5",
  "key33": "336qWBvUsX8twjbhE2Xw4NVCEUWATdQ4WACfKPevS7V8ZXq4s47VwK4c4eESznZaXNan9MchtqdvLBiBndNFUV5U",
  "key34": "RKqeC1sBpDr5pfSxavpn1Run8QdKvNE4ausR4QCNXCF9Zwv6BwS9iUSjcEYAKNsqZGNyC5CTe5yixK5GQToKZDY",
  "key35": "3FfWrMuwED2JWyuairXRWtvBZUqneBND3HBeSJYRFcWvmYLn8bDAbxJiGUGMLF18it3KMc6nDsWmA8969igHLzVT",
  "key36": "3o74wWRACpwrpZFxXzSgQY8Hk6ohU63aYBJ8d6sEsbpQh4PX7LRwi6yCc6qvFZDuqePqhXzr1scyVs1xduQjxSHo",
  "key37": "34xdkzLgYJdpnuhVsx9cK6mAeNrjpGZ1EkSY34VPP63LfTE2CRe1c41HcBDVns9LbhPqP2kXvV4mpC1wBshpspvC",
  "key38": "GnKfv5zdA38rMy6a8LVhbv6ADnJedu2sEXjWRkSDK8X9ZxffSaBnFowhBScWNmdQ17tv9X3KLCLaf5ZB9RvqqPA",
  "key39": "5aea5hf3uMGCFWHvnwwY95B4p5qwGiV4jWGWuRav9nKD926vX7xHrbnNqMcJGhJCKTEdXJ3NGbtvZwnDvR12WhpF",
  "key40": "4Nq5Gm3T6b42cQheaKDXkYdaAimuFYQUPZBtSrPRYGGUBcMW8eAQ85P4qvgk5SebxvDFvmmBwtU896hwmXKBbc2e",
  "key41": "6JD8MYprxVoYdqqrPG9XXF2hZtvda2Ymei1jUcmk9Q9qjjpBpdsqADC83DZr3Z9rprqF6wxz5xYkiTfXW5qbFLn",
  "key42": "3HnPxXVvjZpJ5Fdhp2iueNr9sBM3x9zEP4bDet4cj1cYxncxNFTjJp8CmETCSENM92tgFqiyE8QMRoTWpdzg1Rf9",
  "key43": "5ZRrJW137iqdjkfCs6Mb9LZ3CbRuQRnWNYtXnzhM4WsQBEBRFr8yV3Aqqapp5isnH5mFvm43QE8pHysL6vNtFYAD",
  "key44": "25tDEyMvnkERQiXAuMyMxRN1gHKGck4z5Fyt76CXizCaGLnQd6U2FKtdBPbe7CrSR7ReKPmHRpGaSJnzYcECuDKa",
  "key45": "3A4Xu8mfuJ4B737bPYofDdJ2umjnB6vi8kqbjgrHxiHKMYhgNfezpsPYHMrhLdz64CLnKDvDtwm2FaX1uDjT1CEk",
  "key46": "59PS1gpscRZxhTGD7qS1zLp5rzqwypCbj8NHV76knaqVrzYehZNZPigK81u7ZJvhxoooB3qukqL5Sbh346cditTH",
  "key47": "5GXLsXMUj442Twxhyx2crFRiqTb5JwHm5CeGXFzSzCXvAU2wJFwWyAsTnnekuzeMbqckUB3JGfEhQ8QiUm6GWRrE",
  "key48": "5Q6dYTrLZC5fZ5w2FXcCRazo7fKkrUW5UDD9xQjz6dX8BGvMj75KxDHmt3BG8oZCCTrtgQD1ZZrWQHa9sNcLQV9k",
  "key49": "4m6vFoj1Btn4Cg4q8SNBC7wmB96YajYa8C1L87JBAmXNjsy9CqTk3sdvSAnkr4qKRBf1c7ko7hNbuEJFK8eVDAFo"
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
