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
    "5rWMTdiyLLt9VVCigqSgXsjYT2oYWyTYFd2Up3kLEe29mtJjFFvPRQaWtMJMP9uTgWHqwYWbzQsJmvKTWpqQZgfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TfqNxTZHf8nWCK8xZJFXyyr8intbYqq17Lm5Ys2qU2Mc2frnKVtNZm72RQWP6pVvYPhYkCw4u4FcEhD2fN96L9",
  "key1": "41ANZNGPf9tBrQcZRaVfYNWueaA4B4Xh524PRDvMV3xyD1PHikXwPZxBuzPtVot15f77wMDvhGFJ2jTh4teXsUip",
  "key2": "aR6fPcLzQTvCqssmhXN7VXpddhR4kvWjrXy3Tg6HPs7rsghRaDoSwX5CW5TaTJJcQ8bbvss7ymWYVrNrUzMaJWD",
  "key3": "3RRQC9Mriv6HfT4RcWYp78evadu5zUWTegB4p5SEHzrGBAToUQxXy8ph3aTjfGPHVufCnMqWi3qPDG4AUGywBJVG",
  "key4": "5sMRnZ1p93WfgQw41NQF4iMhNezTjeE5ww8ruk9U7p1C8h3Xsq7iy8SnsX5VmVSZWxYn1ugDWLLbzyYKwtweAAYL",
  "key5": "67AzMLP8b2HxwvZ6G73fnGwYs6J6hVppDnhza7JhFPtPho8mn9B27mL6ZuwEnbLF3o8SY3SBQY1QVMZoUcMi9hwM",
  "key6": "5k6k16nNeGphf7KgVTQYdCUjT6FLjB3oQ3Z2J4CBmBMjtUeYsamf54G2dzW1ewVGKbF7ieudfTWAwxYgqwU41keu",
  "key7": "43brJbBtT3CxuyL3mLLa8tpE2kr8bikTE6KtoRRtNJgEHx6LwzHWguDBVPwV6FFbXcAhbwQHXqCXzEf3te8WDGH4",
  "key8": "zsFv1DoHXSHHWchEpFKzwUbEw6FnNm1SwXUpGkFxTYoMBriqXy9orj9XFQbA3uWccMHnVPWj9DqvuySAqEvcEXc",
  "key9": "4C45xjsQME9pC6FxTBLy3EEErkUva9kQPnD4Dnq3doDNKF9oG3matbFkNuNJJoYZwsRYYYgEja7AwWBZbX1NqEi2",
  "key10": "4xLM4RqAoDPo6xBgoCPGN3fhK1Ln4iGqidXRR5aDDEfwjBB1SJgLizRoxv8R59oCUNY7PuNciQD66b9aFs3zho62",
  "key11": "4VbcuCwrF1botX3qxeNW8bCf4anNWWDKiQBWiqPeuuSbYakRGBjs4yZihoiuwbMEN9HM13KE7sJQn9RoH8Jhqc2u",
  "key12": "4LxLeZ5uMhtNvQ3ix35Lj5FuhLgNrnyWDYsP173Luzkw6YN8AZdD6Rht75G6T3Y3rSxwfdR9GJ8kKFSTXkzSufhW",
  "key13": "kqmUf1WzX48rnMBxc5UvpCjMsfSuTXEwfgN1iWbGP3dF6M69zKycPdfyrTiZBjTt2sbK5vB4hucUuhBLeJAstvV",
  "key14": "51G8SnNVSwEXLy3LSQ1ffUeeREFGvS2npnCg6aFN1g7gXQ6NwJe3ybpDVhugeSUZruquASczXz4Z6i5NhwtYtYpj",
  "key15": "5F3FSrwG1ibgwYeygAWb1oMExcP61y4MapcgvQmWqgjSwRAbfvpnz1sybXJU7aCY2J5bEQ768kCzFqrFKiokPEG8",
  "key16": "TfjTFvz3ZBZRDAvpiu7EJRuGfq6kPwedwcdTSUqgB1LYXb5d3e7QYCyaTWxkR1KYZA7q56qL7ggm3UfNmhVnMvM",
  "key17": "5BHom28vtKBfHgJ8EVEGsBKr3Qf6hZd6WDQ5e3JaD6evehCaiR5d7TzzsCnw9uwxKM71wBXh9dy3KvktoLPBpqiU",
  "key18": "3kupPRG6L7m4eFdQiiiyq5Vep1o8AWTChTVn6KEs1NRumEJ3eifjSopcKncuTevU2qC1aYzQrD22bUjT9MQ6M91b",
  "key19": "4zBtWStsNs6KhV8aByVFagz3nwPSqfaDEoxtyp8mVeVjxXG96VS21YfJvhU9qV96R9ANgGmB9ctkgVSe4UJ4QiWQ",
  "key20": "2kwuGi7kFqwG6fZnwUTcFMF9RRuA8pLDV2tGS8dPHyVT3uQvGVmqqp6ApE3XbVdybyFTpMrdq8BqauBrN8ak8vJm",
  "key21": "4prBjUKAS57qAHuM8t8W3D6qjdyodkJx1h2Tq1Hm4jfjZdJ1YXeLBAtnS56MQ9X3UL2iicLQNuTsvwQYWZaP5wac",
  "key22": "4dnov1eHR3vxvaSBNoEhAAdXgW39Byyv9GuXUCWDEjVKACDvff9cWCc69mHyUy1dxf1xcfKez9v9ZE4hCigSfx7t",
  "key23": "59XtrNz1rTQxqk2SgeSjJXZAh97uVkBjDLFH7SGbcikrxrhiNWJZpw53Tqiep5Vf6qodU5kPwdVVfXnkSFperqWV",
  "key24": "PtdwyJkNGXQu9FjEvQXLwCSWCKRv9PRdufzeGZz6eVaTcHQ6Mzg4f7a67qsQNnDBsPaXRMkksiv3SveyD13ebUQ",
  "key25": "4ETMPNZ7MX3YF783GeUu7L1455v3VHbvcPaVS9QbehDNSU3vqdvP65BmMk4JgGSzuCQD2huxqfe3uH1xKq6XPc1s",
  "key26": "3DvBZ45b6r9p2Jm5YQjvwXFk1n8rvPv8APKckFGXdL6phsDHMu1bfUx57j1MVcC4Y5YbkFfV9j1aqqeYJAuFMwGG",
  "key27": "21asDui3vaZMg24FmNDgYHxFFCXSC3C8GPpamNCX9gXvpJkyiVfJoZWrfsjqxxJHT4UqiHM2JfRL74AeVmq7reuZ",
  "key28": "5AnLoM3UeghK718PThxCQ19UMnFpLKtm9PRg8kdcXZzgTyfAWxKPPGY3RZQFizxugSXoTWhQ2vc2AXCYbLTSoVXe",
  "key29": "2jWC2HfVLeEvVEar4aE4MPEsb9DaQNQBM5iQta8gQdDXzS5mYsqvEqkAdpzbVZ7qeBzRzL3jVFmfSZyrWMHKmeR8",
  "key30": "2SJgBsfGcAnsKzrgAcQo1fzPYaV6646WfiFrfMxyuaNQQgzLbUDZoYYf9F3auvNgZhghbQLMVsCKbb65oZLgEmVr",
  "key31": "5yegd4ptfpDVkbYAC3hfGFKUCK6uwEUn2R6eD5HPM4LKBxk2WPXGDRNV6BigEF1MyCDWBWBYqBypZJ83mHgk5KUC",
  "key32": "5JVFgTcNBpCT4qYKZa9XjPWe5hKuoXpLBwAtt4evaZ5xj9RJjcqwzFHUYNVAXwZnLsaN68D3Q4Co3bR1i6mkSVdg"
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
