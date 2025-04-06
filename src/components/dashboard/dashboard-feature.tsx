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
    "61HZ6x2zzn3x1jyTgLSus5yKVZypeaKjLv8VmbuFvtY8cLMFaTdwtPauep3bwasPQuRxQ63BHgHRE1PgMM37znav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMrPJZpzo8cmaidAPSkp57KtWbUPgDKNU62sqy2JD34K4Kt3aQA1cadHtum8ZrKyD23dbH5v5aTS3eZVT8zQfhA",
  "key1": "2HaGrdFuLi3483RamBVCY83tAZGDWHyicWrAaTjF9rVEDTZQv6iLcgKq1hXTTVkbRnX1MuPxsDKYun5tdo1THHw7",
  "key2": "27R7Gv9dXaq6yYeoghiE1krg9GkTaH1y6NFZeoXu2ivM7bCzyW4M5JPyR44Fu79enT6i8tGMFsQcMQ5MWhhVrPa2",
  "key3": "4xwzCJHvxsNTzMghvkgiGf4cJFrG8kEf4SPhtjQTBzMzreqUBaRApuMCnGSW79DTSntvwbwg95mcMtsgRBQrbjTN",
  "key4": "xQQAo5t1RT7Xy6qNEQ85V2SkfFP4mN85sxRZsiWijA8V15cTRPvKQraCQ16oiTjW4B8JA1ErDgMevKqYrhGpMQG",
  "key5": "zmpYpoMJbkErh436a56PLWZusAgJ2ceWnuBJ89z1VV9sM94fZYp49SP6Zq3WhJCqSCVDwnCRTk7NqEAdkUdY7MB",
  "key6": "4JqYk5NPqwqyyL5akyKC5cnngAjDidSjQGgbbvfTYmmDWodzg9xqgArftWWJwEg5eQYCxDc47P2TXU8QqstWh1Cw",
  "key7": "TEFReZPFExhvKXxhB17wLWBdbXHA3RC427axsz6yr4dr1YjXDXzpxu2qnBXXdprUsdgEMSXGiH8Ds7fXQUMc1S5",
  "key8": "2EfZtUsXgcTbm6MKaM3fmrN5xXwT1GCpdDJdieVzmoV9xWSAyGgdvvThobemnnowaNgajrK2ExoL58foefxodaoj",
  "key9": "2pEiCKWnBK5755kR1QvXUTiYuB3vyhSTVro8vYx7akg6NQ3K4yVVrX7XaMpqdoLnQSRhdtohGAGFjGbLhX9Hx9AC",
  "key10": "4fbW9XG256f5B6KiSMhcfRXVqoWVrcZE674Ttck5DYcWwEeGJKq4p46exiZNNjHBoPBaM7ae2gdT9dNxrjV5y78Q",
  "key11": "1AFEsrrpijz8kHygxCDi9431iZd8F6QoHr8nXX6VAvBUrF2VvKvXxUfV7j9jddD7QynVMwSn9L1KmGSSq5beUL7",
  "key12": "3Y7sVpmbXWpQnpTfyfew8Z7JMehJvDvdaA23MVZp6UwNtLvktmYrEmdtc8M2mKT1HeGt7Q791dfqp6koqEwuKkKV",
  "key13": "27qxkY4ssei6iTrcjC6vfBN7gYM2n1GB1LX1geEfxF9ppyeJAgDWGaAmv5s16j1tWtysDxhrJh5pN2Q1AkfTJAqY",
  "key14": "52GF6NDGMQFN7qukZMC52fxiLAsruX4zLj6wjx3NKWBWJMR1uqt1NBoXDRnZNopUhxfwtRT4kDm6SCrMVyRmFuq6",
  "key15": "hg1bqZCP87fPrPLSfsB9o6Aa92iAfH9qm215rhMxuWvopPoytSe2JabtDcQRKUFczQ4QCRNGBvpmBnmckunzfPD",
  "key16": "2VgRtnXzSRpXns56aDEN2MzS97bzuTKaEGyL8JFYMgNHSBNyjPQ9uXp3rG35PYsbsqSH3rBc4RqJGkSo82jXqtmQ",
  "key17": "2WsVk6dRUZeH6vg2trrvZEe1A3kGHCeVPEMyHQje5JCzwEYEC2M8h53Y16w8xpDUVmHHT6LL7HzCP8dTj6JVJbHr",
  "key18": "4XjyTENobRsqHpb8crYvpmiY6GamDMcToa4uVjFxrsq7ntdU1mYXKpxfAHwBtD8dpHysNZD7yq7A8HSexJkiUMBC",
  "key19": "2Qd3Cqykdf1PZy4eoxihx4Jx74pYeCrsfmnDvD3uWbVnD1hxFY91XYMUVmZZKWvuJh6hy8HQJHHk92maWnGe9vp8",
  "key20": "CHuxp3CruXKQQsFboyf5zVvS4Lv2WDsHanx73Y4KrKRc7YRJtSXQsVdAUs3FgbQBJgxh9iUygtXPHLJtBmrXASv",
  "key21": "4UdmT6CbxDHifiqX4RnyhihRq5sqgjw2sufd1S5qiy7ZSQrHLfebvmJR8EsSAoPjfm2h8BLhJ1zqCWue369cz8uK",
  "key22": "5A1Hm44qD714AGSka4tJYDKkL3Wzc8N8pvpNnYxk9nQ9uQXA4K4mQPSUQcF48pJ78trKmiG4HasnTnJajXHQ7NtZ",
  "key23": "3sNH5tVSnGCBj6zpZRG1Jje5M44RS2czZasdCZ7DFa2NnfwzuLCyr7W8Ghd15ryDAnLHu7HyU2BA6MC1eZw2t2ra",
  "key24": "4tbNJEb8WPENkqynYmkptiZK9K7QkSkYo4kFmvrJ6WAwQQC2GfJRhuE29n5LjpaBmpAW9bEU6V1qQ3NoVeZMm14g",
  "key25": "3dHbBUgXjqryNUqgPLDo1Wbyccuo4gwR8RZuCs1hfKuTFNfipsBxC3mZyaKBsVVZ8ynDQA4adf7WUXeMfn9FQBwD",
  "key26": "5ZQmSUPRRdAUsXGYb3L5k3ea2YdJm4ZSpDrvqm8zxrtJJMAJsXANznXchriVM4CGn9a9mnyEicfnzgaQqpaiLJaV",
  "key27": "3rDqXu6PAB4v6txBQkfrUcPrwSh6rT91AgcF4uMWs9YLxCpcag34wTHFYGUYUeAEJwbCBgQ38eTBHxwU9mCaiRmz",
  "key28": "2n5ZWtUy6jUkSk8UnBKYuYzxtPTDAwwKEfGbDkU4Z6KMnyuLEWxfjkzpfS7PPUeK7LLTizLu5CkP5G92xVw9VZKV",
  "key29": "61PzsYp3NsniqbcYt4geBHh7ECiZbXiPd5ZvFsuAbc6dEBGCW6e2uP1DCbH7ytREHgUS8gWAfXfL2JtPN4hZEK9y",
  "key30": "46UirsuBHenEoK7XcEfwUxidUSLCynJfkmcV8VXheQ9NQxqj1siC186wUZ2AtSHDYQgc8frCDSmjZWwRUcWxxLgj",
  "key31": "3LGknV3P9uZaC4V2LqKsa3q4UiY4oymA4YN34jRxasxv63s8PCbP5Tg3NnzpFpV7A8KykotsaXib6NhV2BjQGfhy",
  "key32": "2J22Sg7pjoNd5mzdChwqggXQi3jU6mrDgZE5v8hx7gVNqe82iuoju6mRrjw8ft1oP112VeHAq9exrHNGxW7SuCm9",
  "key33": "4E7czykeqRBSJ4X4HVhGu92bEtmGWNXSpAXho3zek4WacJZ9LnYzX5cCeQ92dumLyH9LpygmnYonhecdXtpVzVX8",
  "key34": "3dx7VnHGEFkzogTPHUHGvdbyZiwvfXHWFvx7iyhbZ6QhEQWNabJdYNXv1DAPo6TA2qGuJH6eQpcNYW5PtqnHUgZY",
  "key35": "4JnS1aQEZ7eqsNhdTTcL9BJNiVSVVzco9cjNbM7Amjmn5fELkE1WNjdrawoMGFuJors22x1k57KY16UvCLduEAer",
  "key36": "EzptimPb3uVgW6ynxFimr8v86sW96kbeqEywcHX8Tc5eyJVPdN8BiXCHj5JUXFtvLXCxrFu5BY3vkModrh8fQGR",
  "key37": "4ixCHVQgr8C66ZKUt2CLVZFp7vKFNgJTgqsiPtRBfK2dDUJX21nT6b5rskKP8uA8sSpaFTuUPYyDMEU3XWGMmarP",
  "key38": "255HpX33inDRkvGGvPKypZ83TSAj1bLHW8UacqwgZdkt8GBL7vv84bkqyqQfzsouBkkRoB79aw2tWp4MFZiD9SLM",
  "key39": "3ir3a35SheEteiYc4cHDf6kpHz1boZyqoEXqCr3y858cyqaUDV6NszTRimsg2pLQ7QdU4ZrMtA2vxYYPqcTr9pvk",
  "key40": "2npyk2D2od9UmzcMqButV3M83NBptVvUyD7S92B38UTzLzCYHZmz8PHYZ3y5BaZqYhUH7z5Gbtkxo6psZXTipsYw",
  "key41": "6CaHzuVSDTXg5LugW1xGTA57VZ6nhuY1mUf7wPCWSqhPNSrT4PgEPT8heyTNbGhiB5aT6CqCkJ75d2v2T79mZvf",
  "key42": "2USt4tJ4qCmAKy4qgbB8xqZajMxZMj2vMF7h1X93GQs5PbrFCKYsZY2VHAya6K9wKkPYX37B2wpYvNVypGrVA2tZ",
  "key43": "24eLCiHwnfqLMGFkEH7sVZnqTGVQdELoG2rt9KvvpgwwAN3iJQvGxhgXhHE46Pj14vRENyJwaLWtNUPocMEZigbQ",
  "key44": "4mkphKQPDhxxf6mw7gh7dASNYdx4BXqUvXCiQss2CjcJ1fSyq6qi7sRbNjxU3GQyVsLo292VjVkEcfCdyfqxREDh",
  "key45": "5mv8qNZFEcWysEf4RTQsMxvRvq6xCScPt2WRCpUmuuorDvQM5mbPzVq1qK481XSuSuriY3vYwJDezaxQ2N2Lk92k"
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
