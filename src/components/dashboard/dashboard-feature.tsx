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
    "4cKAxy4wsnxBmZwBCXJZd39i7VK12vRR7bdYM7VR3nEQjxHe7kp14cA7Su3yYff815Ni4jnJNQv6gtQHyQ4oES74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Acb38fzhRcjFg7JYtnHW1fAvVsS5f3p2VpF2bVXtYgM7S7YUw3PWhZbibYy4ho9kKnkLadCQvwj7eo5j6BoC8SU",
  "key1": "3pKYquywZGhVAjK7y5dqzJGvtweuWRHVZUkt3Akc62YeNd3fC62qGaLLyfJY6QuEzqcyV55iV6JbZRyvtZYD3Y2v",
  "key2": "2cSiUvt1MmKKApdCJN1NDfUHryNasHG45V8uBVkMmAZzW7TRVUvJqpEYwQRJmuPpsEdZ5L5XHvqq3edEGv9rikfn",
  "key3": "3abE9fE5DL6FoVbin8vbxw2D8Lu16tJvXuCv31dbP6LVJySr143heEBCJJGzyR3f2TK3yAA3G26nseFM2ESGkWQ8",
  "key4": "2grBz4NtUtufbgw2CRVFZknHZ5NUKTnmPxb2CQUrt7bNEghTPuU8oyxupM8ST7f3hWwk1mtD8MYXgvob1XrSqX4t",
  "key5": "3zXKcDrGn32X7YZEMMjdk9k9Aeuq4ZEpk7XEibTXzVsQN7jwjP9KTMTn6ppDks5Ra53j3Lwv6i9fefTZxKtPTLXM",
  "key6": "5gZABYHmWP7bcbfKHuCt9SGtT6kU2jpvfHjFBCLDgZ4gUNHJ3jNxhMXuJgr2PJyUc8JDvEDaJpJPsTcZ4CkZmTQk",
  "key7": "2F9bR3vc9XB6bB12p1NbKYeeroToJywe6QgeCkcPTPqmqub379G3eHuvP8qidQ54iV1Q7jPiWfMB2vjAnNHTCfKX",
  "key8": "2L1dutZGvazHNhfGVr1jgsAukeHngqLSkw4vHPxWoEdJqocKYRAy3doytEZz9oyEoynwZ27a4JszQgRPd1e8CxsQ",
  "key9": "TyGZWVTPGPt7iLcFKcbqwx8LPyj1omq6mY1v8KCtszYyDvFHr9DSfiHSCaEH9JqNehk31znEitg4eecw8wp5C6T",
  "key10": "41C98ADRPAvJAKhsLCzHFvrUENAmQmqN3JZ3gDxSt1wTSK4CgSE4JfmQkmxx2wM9rv67cQejzUTYuF9upaNxvHHL",
  "key11": "56nAnkJsmi9Tq3Kt4F37UBLkxKGPZGPzgMRHKPbzVuxa4XRzQ5ZgczKJsPXkEyrvqT53j6kmvTuMK9wiwmNsk3wu",
  "key12": "58VT9uV2UNxeBCHrGfvnQz8bGdA1HdaxQurgsYtowzVLCgNfjaVuRAEwNUfMrWJsLrZG5Z7UQuR1DCkkrYmTmNv5",
  "key13": "PV7Jc3JKGqTvsAvMHGmyceZbe4qhVgQaLh4myc3zaLZfTwLU2wjHGzmRqG1csVSsBW49LgCkkiBfgWE5MAV4Sfm",
  "key14": "3jvNgxet11v669E6Fr6qGLxLYfkqyTzt91uDBdyyDNHFDEio6RuaF46JUxGABNDNgmCLXn3rsrFoHAjpkYwEYMjH",
  "key15": "24qBFymnfH9yG6npzWH2gzHhWxk46kuhnXVxXHLzZraG8Av5ZquDrBcRwa3u9YWq7ZW9mHC1XCGDM12qRBG7fYzF",
  "key16": "4xwBsNiRdAfnxmDJiYwZ1MhmG8hrZSqjwTr9gpr5DdKKoWxo21rdUacYFqopyzYhJnXey9b72ZT2iC79bT1GJ4Xi",
  "key17": "QaBdwFw8rXw7BFqohW9QviZKt951c4R9szPctkb6brLigmH1nRmsVGscbVVQJRNUrz5CH65QZLFKwFA25MjBDFK",
  "key18": "Z5fQNGAkdTE6v7Gn7jTwQAtBq1BU4VrzjKmnEWGKeDn5kgAjGVWca7xhQemDd1wND9peNqsvznhfGzqPLiNz51u",
  "key19": "2E5NA4zhVeTSacgmmQjHTQLHh72TWmbm9wNXekApJUsXVmPFYpnftDTXg36Udxf29amGRZSTx667LoYbFgNNiQE9",
  "key20": "RRQy7J7x8zEBhjFgadoLHoaWKWHsX3LmLHkVF7ddhm5hpkhCA9gNsGayoJ3RKqxWJepwfUQjcYsPycEis51s26u",
  "key21": "21RNxAZusxmJEfGnt5tmKcYgzA4JGkTqoSNQi8giEkFFQysRANxSZzZzqP94M12nWpXexnzxzJ6sCMumBoFbYihv",
  "key22": "49ASBGCQ9P4bME5oZtNfemaDL9DodBEgkGeUVA4j6aKAccWEBNW8WftTP92Lfx5yytymdfy4veKLdvEAYzeBH1w8",
  "key23": "316fruW75awtZeLcStmJGrq28ybJvyhjSKUKfJtapcyVmvF7VZ4hLSpU9FgvUDMvDQDGBbsL2WCn7GGxRXyGkP7F",
  "key24": "TagqFe1aJ1NAPDmHgwLs74zCBq5qLDFEWKS5AfHaqfKgpzcu5PeanSrvvoBcdbdvHJF6HMMeCr5j8YdTmzU9oLN",
  "key25": "5eEpXmXwuxnJqB7eWSoU55vRpfCSidHFXTKsRdzef1kneSiSvQwTgrpBhLR1FmCphthrR2mJV7gmxNbNMwjh1p7M",
  "key26": "im6QVNjJh17pgtPPeDyN1HutGQSMR11SN4xHx4MJ2r3GKsbHDSDeJGf6o9YxtwwVB8hL4hiFPf9LW8cniM6L7go",
  "key27": "5uKEjAcPboZaGCKa3Pa7FNXpD1qRAQxEdqGfM4iAkhvMFdaA77PLvSXRKSwi2QCGBZ9orxPvmZc1PQgJn5HrkACK"
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
