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
    "5J7f6oXTotkjJ2MUiZRBQw3wAH7sibscDDtEoVqt3C8X3AdXHzzdvb56ZDgyg17ih7V4adhrbisqSkhDiw5CXQfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vgh2dGuUaCo7AEDHvhm5XRceHa3mdZJvkS6WaoZ5WUA3Ud5Q93PagA7UZfHKknswHUaxpWgumo64y3FxqMLXujA",
  "key1": "2948AV6EdiY8sgMCETUyJHK9gvH9EXLX6JicrBV2yLq3J3Zk5s66eDfpqtBeZBr9aC39hYmZrAhf7G1BmUmGsGKn",
  "key2": "39berZRNdN3jGy4niQ7LbG1uaaUJNi7f2Drkc85bT8LgvijFsdZ4dNJHCxakMtKsavMvQbrjD6cEQPzMr4eeUZ8Y",
  "key3": "2Awvd1FnukBt7A4JP6p5FhBDwmFo7BV2FZVCCRi7gXFVgZQLMjM2AQ2zmxcNRnEp8Muvbmy6jErsGbyCJDg7jGcC",
  "key4": "3Uo8W7Hbx9Fga2bk8aYyLzjH2ABaMV41rWjAtJyjNXgVKKoYevXdRAoSmH5KRjCTVR3moaqtuz91Ck13BjHSixkm",
  "key5": "2sbJ31ekshoKkQgnMtEnYZ7YrFqqVE9oB1Jq1ZbCKgEnXjGb3zH9T8M9d9qEjw8CGsGdcdHAzYESshFsh9K3cdir",
  "key6": "5r8ztcT37iCE2FhELnNmD5NQbs3ATh1LoyLjCwdsqMRbjUS8ZPgKLYghBogj6BgsnV8zWicizaktpKuJAZoGHyky",
  "key7": "2bVXDT367E3KhyamUcLWdYszsW8kagmwYob93fvR7hKt4dWuiVSQuuE4V3PaZUPhadTBguA7Pf9R6tZjmJZcJn4f",
  "key8": "WpRt3mcWmpFwX7CunoUHXqR8XoFLGSDrnGMtR3qpFszGMyEjWZ4xgiMJC1tyEck28SaSdgLs8ZdTwGhtPaxzuGv",
  "key9": "MpSYUfow9ro56cNNFgJ7Uprobq9uDnpf25GcsAKhLBXoyu7n1NitNCYiX6dtbYZKDQAoAFe6FBJ1RdJjHqcW7Nc",
  "key10": "dkKmDT3PoA2jxzdbwBiEEKUk4UNGghpqcaeUdBZ3XCJMmYmzwYKAKFM1s4DNomPum3i5giDeKu4SLUSZnkKfyaP",
  "key11": "4TF2cPxEqiaa8v7jRqmYKp1nbQUTi6GxnuczNRqr3UPp93u4pEiRobyCpEcheWLt8jj9CSrzW1fQ5v15BY1NK72p",
  "key12": "56p5bQ6bHX32wv7RF7rgfsn2wFsoyMEvR5htGgE1TuYHYRL14N2Nx9GJHhPDfgLFExYLnygGnEUvWnLgMcrZ6hmr",
  "key13": "2uKgvq1TbQ8DSa2SSVyXLjJ84eyKryYhmoS8eWE9UX2NSnjEqhLpsqwzQsW1rSaa7GnoACXPAAZ4sqbwoDKuS2xx",
  "key14": "48AhNGyKhqBiAtCb6drgVr6kbQe2kxfeJ5h4ePrRG1GreUvxxeMvUao2CUjhKFopcAGi2TrmzE6VZKq6cyw4HP33",
  "key15": "2TJ7a6YNorvbuBb8dtyPgk7VxQBZFAQ7hbymvf6CGi6orgHEqikjtHfPQNH772s9WSdHfpvFKjxyw1CW813NcmZr",
  "key16": "3CLn6zpxuiGsKftqhj1pTZs34p7CtEZ29Ne55FSx6UXtuSUMDxXKvPygnJZX2gCiYxBfBCCwb2w9akYsib4KipYq",
  "key17": "Ak3Wumgey3TnbuD4dyisFjmd3KBPcKjodugWbuztYviBpXWynTuADKWNS8RkjgdBEq26ppzLTNguTyqMmeY9y9S",
  "key18": "2Whky1y7p4KbMUqgL7qHnzwZse1wSrcntMLpNGpvcPcoXhtWaFVWhUpKdceQQnqjE7ojWkkHnrFXyvPsJAx5oSxG",
  "key19": "3Z2YN26DkdE6xSihCyk3ot38Ciz2LP6G9sPAYSGZXZRkLZfhBGRUVCTpkAMP6hUAHmgob5ZmNQFJv64VipHUbhfk",
  "key20": "GWK2AuuvDsDo3UmadwAnc8x49fsjeR3VQ35V7Mycg4ABky4Qh2BBvwYBMnJMn3yMSTRignVcTRZaebpo5R63GT4",
  "key21": "58bU8qX2NVFHZWaHJ4cSrTRtAfFnSZMzGJp6YunTRp2U6SEeCi9QxEhvCXaNPzS2B8prbDDy5fQHv1mQMgdH9Zgz",
  "key22": "6L1ay7w1dSf6mgEqHp19M24b5r6eSnNubu6hDrxHauTMrBkziRDE2EMc4uKN7kSTEvrj8G7Z4D7Mth2ooQwtrzf",
  "key23": "45D1Xy54BeFCS7z5B7RUd7YQ48yg65hefs4dTL5PKUMJsPpRxHp7h5AVnegf8jrDqzCoFXzWZsSYP23n6BbZuLqt",
  "key24": "gax6hdyMKCY6pYiaWnz9hPPnUgK6Ygm52U4HfqpQrtsDM354x7uJS6gkNKygqEzMZKstWpj1dawDoGkXBSC6jaZ",
  "key25": "3nR2U7JkYMVFz1qAw7wbL5AmFifqLn4gHt18aj6xJSxMcvpoQg9hf2NcHs4Lz9DVNFactyWi16HbqsvtxcCSuUyv",
  "key26": "5YZn2Mwqr9LDuPPE6yNKSnnPQ5YJmM8L51gv2R2ydAM9EkCaVho8kdm72wXoZr7Qo2FX3VFAiGdsp4edEURfu5Ck",
  "key27": "3rFnXBF2qbWaxfa1H224pymdtu1FVBMhbTWW9qWULTjG3hVnXnMVtG89GhuRZXVBHoz9d6oTYCp9hjPSnVRBvNFX",
  "key28": "3XrwEDkEihRWDwahe1ydWtHjMA3uwnVBwX7yjL5sRJQmhBxg4b4s46bCXRMzeCFtpXwFkTnRN1mt2SJMd3BrZeqC",
  "key29": "n4BiUBmy27v2Wh7QUU9TRW2QDRenoqiH2cNaFuvYNQdsSJ1MwouKqJi2MK8Kz3Qp3VG7Njp8BLj8btPc1rbs4X4",
  "key30": "3ybCvLHaC1gjZ1W2dvgTd3BezBebiWW9py9TBLsRoidFERoemd1DdBD6fZdNSsUNtGZERzsh2m1JDEX9yayzBsw4",
  "key31": "2nENvHNSrZNShdT29CYYpTYiUzKaz4iqV3KBQD1m9iXyM85nimFcD2vFR6iKCVrteoFEJazysbUjiJYYivyVYrSV",
  "key32": "51ffGUgRqioQN16Ab4DKhXkLk84GtHisAM7oFpBD68VUUFSr3AQGF2LLgf7auB9KspVTeWXfiftxJiEV7SZTz4gR",
  "key33": "3ECAcDpJob7EXqFdyVDjgFV6aNgBZbkJ6S1oKAZWxVrdvTRtpb3cgXRjVETiKdUfT2xppYEf1v8ExBYmY72FGKBW",
  "key34": "3RBFPZVq8c1Kmf3vVZeMR7XP2JDPgTc9agxbG9HtNccSfMg3yXc4s63BsihtDtJxTY4iNp8Ro7ZbehgBKn3jGVYB",
  "key35": "tKqT4kZqf3zKELJoubT7QXwdc6dSff7kQ7ZLpMwubdeKVzcKF1NxgwCCtNdAsMnw3G6iFLNy62k3mXd9NZKyQ8N",
  "key36": "4x5DkqxWPo9yTUgo5DT146u52bZe8JBr19d1qPYnSQ3Dzvu6Kvn2yUfJuZe75YXDGsgXewi1LWHvaKLPFeAudnhM",
  "key37": "2NJe2H4kU1catmVcSuodFgsmbTNHLbs4WKvTf7ZH5VgyAjKWZwfkb4i61ErBDuCsEJdxF6jQN9NDXygRLEjdJbuX",
  "key38": "2rJft75FQMbA64kYwXxfDsr6nerzQft4UWLaZ6GrEqiMCiiKrk1TjwbhK8Rk57n5619hUfu1QbKKHpPW9fqfhi9k",
  "key39": "2rUhzt6yzVSJwESCcuqfUZb8E5yYd89mfvvEGFC3na512LpB5JYMuxBFXJ5VN4xQCMcbo6HKyS69Jhuv36C75aut",
  "key40": "5eYbnhAjT6eFfLZwRJbT93T1dEniCWtrwcyPbbmk6tZDkrJKMoE95pr7AX6G1vXYexdzSfzbc2uC8GY49wFkvMuf",
  "key41": "6GtCLpXRoNvAMU5oWUmKfTiCfbjBeziB2PBxKexFePzmAhFWY63nMyJMcnzhhZwSUHKZHHQTgKva34YRz48dQ7M"
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
