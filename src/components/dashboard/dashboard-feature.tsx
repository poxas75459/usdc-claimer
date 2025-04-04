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
    "61F946UhYYptVpdFTkTBEVY4NsRjE3TZE49XC4ByCLjcV9eyadaEXH5NgtUArDce5yu3VBDD5fACnBpV5KShP3fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36MSj9o3Cviqwi2dYVKtjEDTvgfXPKUGEft8GVgHdoTW2wU3Qku8GXbikDtoRFUqH3rSf3mMbP5tFzbGx8XoWWjS",
  "key1": "2yon53SDCbevmDpC3w1dJ6nKaNv16r8NUsyQzgBnXovHCduvVZQ17TKhwWac6KPmo9HfLc68EvmFjn2EfDCBhB3f",
  "key2": "4xZ6UgtoyRxoEgn56T1acovkccJMr7U6Uo6XTBJ7Uhd1XCpNeYLMod4sc8HPNaW4SWTSPdYy4SeUch4Xrh8nh3BY",
  "key3": "3QaWbNztnZAb4B3qPGikg8jhZkorX1sDAPtPnpYJmq2kkocMWeHQonSCLLSKUKXi1XFjb74GaREdrUq3woMEtqtG",
  "key4": "4jQ5Py8EbqtBjatbqMh1NfcPBzLyL9TDP2YmPicAV9YHZLAFchLrS4sKxRNSvpE1imBk4MBuYV4HKNfVZp3hXr6a",
  "key5": "3N87922ET5TBiQEmmg3mssriHNg5fgToH9YVsL6cVQbnWfZc9QpuV9NioF5DQ6EFhJpeP5rGq666V6REB8GaLtyj",
  "key6": "4ZcCCXrp4zfY1iSH7x4D52yiMpM7wQbBwjorj25ieVuW1NvGchzU7hs12TbGsyfwoRwsMxZ3wkhphrsc9hB1XTU7",
  "key7": "44qf83Hho2t16GX8fkf471LrzbrGHqEEr8HicYRn81g7NUsTZZU1T9AMauP8SDeJuUbA16TTBuwmon3UtWWjFvi7",
  "key8": "3n9t8DHYg64mVePKXV8hxjbfXpK1wTpYBdLgNVBVWtV87d2aW6HBd8dSL8WTyp6J1cNXLJZFp6CVtPikR1LSdsxg",
  "key9": "3EynvEArKvDYxXjtuc1HVXmit4HCY5hKnGKrPH5yEY6F6MqqxAkpCkm1wNPMUW8uJzHCutPT9gvxQQ44NnWbjGnB",
  "key10": "5Rpc61Ket4CPVAPkUhbWa6gQabNcbN6wc8pWJkPmXzKErwpn2bBXwRSoAnkk8ZcozwVZ9hP4MgX1c38vyVWKm2dB",
  "key11": "3uzfXeYkXFCsmAXoCVvjEXsmhaQFb4nKcLz7U5GhFbFPzNS5nprw3ezPeF7hyAeormcvDsSgQ8ptD5Lx3bLTx5RS",
  "key12": "3NMgK8r3LHQ9rhKEr2KfuxGHYdyAkhzy5mXN27qMj7sHefxDHQefryEQGvzUGuBeA1jWgAKaZ5DYTMuyjMesSLPF",
  "key13": "4vPn33vghe9nkPvNSwGEvxYNhpkvMvcr9fyj7BpVzij9R4uu3vncJDq2a1FrsvhKUJZbxRbC8qByUJKTt81t5qgp",
  "key14": "3uL6ngrinU81KK1DHT1pQDuPSDNE8ZhLHQGBhgZpWNP71F3gN71ydFiTPHJt2euCJzM2TpSrnEDfxEYSMJZkrSkh",
  "key15": "5c1qXUYfR7yvXLgbQbUB94kyGcaAYq65DsbxoCJ7C7nAuYFrKm8njZMRHizKxg3eBQ2nSDFeS3ugsFAsjam8TUEm",
  "key16": "cueHXbsuDjhzcci5mNsDMNhWdvKTQroGLSYR3kWnAmgG5dYWRkKuNZ56otopUHXJRLP1mj2o4wKa9NWGj3LnLnx",
  "key17": "48ES2hJ1pZ1GURBtGGvw9sfyw2teP74T69BhNnPZEY1EF9uQ84Cpjwq7co1pKhZaQNi3wds7VLG6aPweazd4F7DN",
  "key18": "34ceJXRiva8ssudAxMzbcRyZzpEKHEd6diMHo7q47M7ApDW7JNGLWUjC9NSgrKeido7kEwJpSqER8oEntggr6Ahz",
  "key19": "5qWbfRHHa8rf2jwv8p81wRiQF2nW7bzCyYkY14m8HtNaXyUHPBFr55iWm3mVVGskFPVmk9vkpWw4Bj4U9EfpVEkR",
  "key20": "3xcg4ioTPHibzFeJyqPqiW2L2MiG55UNLkf8JXfhjjsk634QeAN6mDHuSewdoSpjNU83MrmJqdDDWnA9aSMVyHEm",
  "key21": "5EB4RC2yykp2L4TG6opt11dK5SaP5YBqnAne2cecoUFgpRWTpwMJ29twENh7fT48py6e1pVaP4LKwzgLvwyrbSMn",
  "key22": "oPNu2jihBubTzdLaurMaE31YwhERXTA8ras8Vfgi1xwHvR1wYQt5c149EGRwhAk9u4EJsL9QhpwMhLKWE4eQzfG",
  "key23": "2L71xCyyApeZdMEM4uNF8gFp8MHZ2fsBGR5jJpeHipPVQ17P5tuttWvfRzrgSToJeKYgJP72DBcN5ojRFray68Ha",
  "key24": "369jBRSXShvcJgMXdQ1j6n3YZKhnxjabuzswPDiYtQzcMJpSYxRvvMhesCpgmPf1ctvpjb8yv1da2fkGMKbJSe7b",
  "key25": "3pzBj2y62K4hdDBDsZDSpxyMfZnqt7YBbBzSgMKqiXnJyTvAW9gPKzN73t8NA2STKxvvfaLMRRXx7thnZdwd5z8C",
  "key26": "3kEgY8rw6vUZMgQprAM1ZLemy5PsV2fSHSwvtK9HDjbwhfyjzsxmxLS142jD7W2sgxrKMVsfsdpiTMVoNATqD5Z1",
  "key27": "5rGCVKeWMecNDLuxPSjEGrhTQxwGVShkPtyb7hZpcAfGi1oXiw78rpRC6BonWFW4AAwsS6xt1fFbJrXdtxu7KsrZ",
  "key28": "3qfmjn2cYmFuYv8xyRfZTtXjNiKMUEqVNpvDEjnwFYwKMUudwSFN6Qkipxu4dJjg3e58958cbVRkG8AKS8cgq5FP",
  "key29": "33SH4MuKtd5axRmePWZuoJQ3ZC6Rd2mdLoJQXUjVZKBZ6jaNQJCvJLFv2FePhS9fonXadgdpRHsTJQMTieyZycS2",
  "key30": "2N7AmV3Ebwa5bcC1hVRDEKKoLZ41R69TPHBhi4ASEkhnRZ4R52dfgasefaNbiLCByZnchUW9PpyNp3HnCQBb6e8j",
  "key31": "aFq3ephneLjr6M79XQDwpUNMjiJEXJBkU8tds93ni1PRct4j97d7rMsiCy3tp9v6verAfWGNnT2vsVfEcvdrCgK"
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
