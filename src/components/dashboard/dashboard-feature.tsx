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
    "2osEjcHoRCNWL9cE2LMhSmN5K2KW9aeZNbGB3T65ecBUDMpRePy5LCtnpo9gK9h5n5H2P1HTfhGyVdFBx9oeV4nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BH4LR94G39M4EmCHBdm7hk9R4d3nVCryHVxJaUVkhDgmTopR95j1WNZspVVUG57z4u4oWyNmmhGuqPzNHg6HTz",
  "key1": "2DSUjWHUb8E4BfgRyt3LP4iW4iXrLAigV4iXXFByijGDgzWFX9RMLCK6p3Ri14RgWZjwz5Tqq4sUxJdQaTz8nfqv",
  "key2": "49E29hFd5KCUSRzY8iJdTahWqBR8nmU3sSubgtvbtiPRaRwhhgVwuqxAzp7W4ra7TjPhBgnV7HgRgF45HU5gCJWp",
  "key3": "5ZYtBMWuRJ2qy7678Uw3U8Nh4K2nhXCPWhyz4qJjgFP4eNUGp2E7Gisi8ufQva3Vz3ktf3HDVfiWeeDMxdVmaDep",
  "key4": "4jPX6wBbBXTe7pDpjJYzNQZaVMj2bV1tyWimvVZZt7GbFKwhZAdkAxF23KZ3DZh7R2ThWGRtiffByCo22cVBfc9M",
  "key5": "279HSWFskaNc8UMxQBbXGdXt5n8cQxQMawvdEbkFcfYn6LhrWQoV3AyhXNSna1u7qUrHpBt6ZPeacognM8Beq9yJ",
  "key6": "6422hYwSW91mQsL8ujuxwKg8PE9HsPGAmkDG8SM9PjnPFGdiZ6z45mAgT7yJcFCFXmdmLPxSS3LmnueWxiv58Woq",
  "key7": "5YBwxQwSTv4U9k6jXWnGiqQQ7W3hX6s7ECCiSkH4CPQcFEYheeschhddXYr3G7GmYPcpDvs5kJ35mWenSqA587qZ",
  "key8": "33d9MdqQGsRS7Gon5VQrsFrq4y4EBmENXKsXQBE1mAE2AX9pyUXrFWWkC7Tjyx8pFs9CcBdKFcC6pixq7Wz5J6dz",
  "key9": "3Bvkk38Ww7icwe8STpVaxxwY1NibNni88BLYTLg76hs3nHLpFj6CtCAJH4E4JCa6QMn3i8fURv1MqEFRosCLiopC",
  "key10": "2Wp1zJdu7TbvqzQ1JiaqAxFyceZpU44zWMccYqKqD3wHZpG1r1SpMmTk5tSK5JqakaHNffn1qnxT4fK262DskGjp",
  "key11": "5hfShcstzzSR8KW8DKzWo2ZkqmsQfMLgXHWYFNkCGaA6YGwkwGbXRCxqdfdVPMqbXYpgoVNoMDUKt6ZLeW75G4xV",
  "key12": "2uiY1QzrJLPDKB4pkPTnBaTp29e4t9RghDA7VYKV9V2TpVBkb41qknNGjTwRvADbJ6xb3qS7tVXiTVcjyKzAJTTV",
  "key13": "3UkAJv53HamffH8A9nkMjFbTtuBaGCrWPdny84n79yMyZUFvgDJujRzSDjyFvBmeFkCHgwnTphXSE2V9DJk1EfWb",
  "key14": "2QZB61nt92wKTjWz4azvJzJZJru3zv3eBM9uMn7vYycvqmGiSHfqmMuWkBjFuoix249C1vhkgft7w4JhXkRURQLV",
  "key15": "2ifKtTdae4QcnuKqU9AwvWLkoXAzvedytXiawBg2pBqF2SpvRVLcfEDc791RMtsWceVs2fMdshW2koesidfq3aBg",
  "key16": "LvByAfqZ4hjF25eW4EJfe3JGGes6VpP6RNbVhxQhX5Mi3XsVsbXyJ4kzdhbyc1C9aK3HeMphE1oe1fPe2TnvLMs",
  "key17": "qMUr7DLoTfDzZwcmpPZxunp2Nov7T2V7vsnLw54jViCNAEwjzDCJ9ALDv42Fwc5hjDUjXf4uAGW5Up8TTo8nFAq",
  "key18": "4quK3v1wFUjud2oFd4Fii5Cbv3PVmRgoMR3FWSXnNxsFyxfyNt2ZJZNKwYeLQbrhrDbnSkCF8XCjzBzMraQEfHLX",
  "key19": "3axtXe6qHFpH2vY66PhKvzjNp2YBq8ed7CNmzetpGsARqhBXdhydVdKHzxdMmeUwv7mcewPYWeazqvkjXgJLAqjW",
  "key20": "2AAVXqH7neGTz3mifSAmYioVydpeXYjtbgiiVaEwWpeQ44T1uJRuWD4uswoNNDD9A6fDQ2cbLGboogNrPV2vSL9d",
  "key21": "4NHPeqWAvdm8enPy7k77YRRPnmqbzTTTGgeb82ENKPrdLbZPhagr1vKWJsfNp3HUHp8yBxacQ5XEY6bCgSEwuawf",
  "key22": "3KXruUEoq11hJ2TfZc2yVAZgHLSMw4VEXt5odXYXva2RvZJ8ZbNesiUvL5FxE8bZJrcgYBuWLJoHzbb57XcVCBeq",
  "key23": "2XEhgdfW5Ko7kvwMVNhM3eTnKHfCts1Q65zjUWeXqeT5etfY6eZod75DPRfDfz5ytrEHbuAYWh7YWXsjMqhdnBUm",
  "key24": "2R5ZenuUWXZryLUPEsBMZzYZiDbyJLwy1Bzm3pi2zXLVePUesVHMjVYyCr2HvaAQa3BbyN6BuYUMCNrtB8Vgxtjr",
  "key25": "58XyF2EFSEb1yzmCa9H8gkGyFAhun9H6Y2BTH6L1pXshNNkgYsFb7NUNnJcpovZYM9zsXpz9zeLGmCG4uAPKnDEw",
  "key26": "2mhSWcrDrjLxb2N22JAUEa6zo2FguhEJM4EaPq2x5PhvMrQR9338kf73ztG9XjVGTdbq44e4HqNvmx3tZS9FZtLD",
  "key27": "3UtCqdTaz4wXG6ALsjRtMpo39jDCqtnhr9ur4HDSM14E7Mf9YG2WiomkeLCdkFaDTm2rMx7A3Q8jbRmaNUG1NJnu",
  "key28": "2NpabbrThTnrnBph4hjjgVWvteYFiv95rHsnvjtZdCJ5vtRtejWhecH4zikCnAKa8qVnX96SCietZ5PcGyF3UM25",
  "key29": "4zoSytXF1SDtyVFonsPqZ3dq63wWgxnuWGQaiFPVw2Nx3ae9mPJuvAcao4eyhf3LgF1bbiAfrHSsocjQ3nrUZdmU",
  "key30": "SdSzyN4BBpTsBPdLWbWiFjNEouto7WLjMaYDZHCPy2ZTWJv2KpqEh9wTdbsxwvt8RUhGqHCkQFy5sB2kaf6MGbm",
  "key31": "523eCkGoKfvZ8RVh7xz9uHQo5GqibWMWWNxy9KJtBSnQzmQ4iy6tPgBEvyovscgejaa3RvVqXGtRoWGNVWkYFSXF",
  "key32": "5UGepdY6QcnDBVi7Aef5tNXChnnN8mDsbhuBYDNEPPxQ5ve8bEw1yyFfd9K7zWya3wJkMV6ENaSGLMvGhVfmGvj3",
  "key33": "2bS4YQ63mG5eEiP4K8TFsbWjuCpc3vHW7Z6zfwih7meMxP4G1ivm6z2CSQAp6WXBLbpnUQoquvi3WoDeMqgLgfgV",
  "key34": "2rPV2vXUPmqqqw7hqhynMurmG9SdKLkaok17jCfF61YvziUxdM4HsQYcRwpvjLhkxic8yKtmLvbpxpiafeujUKr6",
  "key35": "4GxbeTgtL4SXvcPAJ6mbHq2EK78z18KRJEmgRYy3G7egAG4wJuBtdqbLsZVXLtgNu993WBkanygZk1x4xUEpiuUW",
  "key36": "2sxE61jFy9BH35HewgBynzH13bd65ybUGGuXQMg7z8ZBMQhLGe6xJCH7TcWP4evNu9GV1cKqJ9rCxqv6tqoLZsQa",
  "key37": "QPfT5nMk5WFxncwTHxHoPTNCgfgKHHUsb4x7fUqGL6TT6XaCzXNG1PgV5Yjda8wMKao1ZgCpA5Z7K5x2GJNjJND",
  "key38": "GP9Y2Q6g6VBrm6wsBvSffbSDEipba6As81Hrc5cTcimjCxfJDYT2fDVvEJyUK8GdTujR1TmYPnqFmTsmZa1jycm",
  "key39": "4zbkx5TkHcM9rHisKg6WY3ok4GAEJDwBQm6RJRC6oPWV7tMSzx8FhYJ2bnWT4urdunjGUo7wLER5bUnyJ1UUctpp",
  "key40": "2szAFYa7U6h4HghAst7xZUoqfwBp5RfXu9LmeQFskasBnxQDtYiDn1xcqEb87YdKYn8itdtzCGoxyRrBP6fg8wHw",
  "key41": "5BSwAUkqwqwiJe2VQAGqqwxikKkLYvo6wJGzbFvifUbtJP1u1veZ866C17PfkDRd4X1tFgg7RKYQiimJjTh6vFot",
  "key42": "359Hw2JVpSxJXVLf5PmciLcBArQ53iUXiAKRXEkKJa3Xjao63ZuFBGuR7q9ZRQsFGsgqo1HjRfHCxUPQZjQ3MiYP",
  "key43": "3kiK7iyAgLmqHEBJ4RzPpHEHUtNhkBTSFdVXvn6cP9paa3Nqv64BFKJCfNqidkyDwSznLGdMmYwV6pDdccbGiUM"
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
