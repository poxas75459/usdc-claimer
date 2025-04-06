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
    "Xzt5bbJ8HnG3y48FveTzxFVyDw19E8AEHDPojDa3nWzz2QvbyXVuYeTmZvvweZT4YUkXrPL94ftxvKEdPiLHQoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YSnMDUgqwVJpq9s2NiV5xH9HKpQWnZxgapkwXxxFsqPFh3cezGBzYJ5scerfwbnGJFsk4XnTGsPvitmLXMXgQP",
  "key1": "64Vs5jjEYHCuuS838ZekLan2f5zKCRitvaxBU9CAxEnsjZA15wxvfy7SFHh7v9szCiCwuXbhc6ST4vRpF1oBL49Z",
  "key2": "2Npjc61W7k95Yc2gF348tAZMRZo13yCGnXTJBnriUoBW1fS7KsBwFdvoCAW6TeweF7fDhuq3uwXBAsMRzgMvGe6R",
  "key3": "3CgVcm69WqXmyjWnivJ5JoTs2Yyspkkjc2JUd78RhBpu6BP3tfTfnqQUpqViSULkqx9Mqrq8yQJxwwpwhy7giYcc",
  "key4": "67MidYupKcX5g6ihhDQTG1CiVjeeT4tzzEB1qbfDMVaPuwCStTTjWLiXHvAbvRqKQAMT1pm5A9c5765PpKJBVzhC",
  "key5": "2NJrfY6fghEa5qyz3rRjmJm7mqjykqn67JCFEix2Vpv54oy1xgmLDQ4GuXX1ahDRVWSQFjXVEY6pNMzKakLAYbMg",
  "key6": "44y7vgxfy9dkhQFh4apLH5s6vCSikDqSBVHbwtfooUP6DLbB2mfLBoLjeW8PeosLVma2YSv1bHhEKW9apJmTMjby",
  "key7": "2EjwYGDAy1AhgJMypNBRy29uWEWReHmDR3rK3Xx7syPyGWZzMFRfk9tdU2pwKNBZFsx1cPju9iwaj1o1q8mdZvY5",
  "key8": "2G6z8AN8kRvJ4QJuzK8naRYREBiYz1LQkD6pAhWv3qfiiur3bRnqrfUtQZyfxbvqkueR2qUL7C2BpuZj8ovgCJk5",
  "key9": "y7vSZAyD5fUJSfaCW3nQW1uP1Wrc5bVZmQh8ydboCGggKyF3vhbCFt1r9c7kW2d6sp37iWp3spM2owj1B9AQqu1",
  "key10": "4MxpFudobVCeUDxqFsQEoU8ARdiC4t2FUaUKFJ76QJVUJkDSLVfHVpWumt3t6eCbHCdECh8M2MvPnnQJ1f7T3joj",
  "key11": "5GLWF3wCffN1TvoiDUJ6j4L4o2DGfdw6q6pcWPmMoM7WrXMLwyy1EnTpHXmASMbQWk549EsvnzFKmVMZyWJveBnc",
  "key12": "5eMFvHhYx7JU8LdhoWCd6NYbY1qDdyQg7iRHW7JFgFBubWcSjcEYBaMGcpvXj8JUefUAUhXVLeGZY4SNUU7skuyA",
  "key13": "4G7z43Dpd3s4BbsfnrAkpQss8K9YwXnTyTVVgwAnYzZBfSAkvqcGzLYUGr6KijvyRXqngtyWYi5Mj6sm3YTXchx6",
  "key14": "2YiA5auLuTV8bn8ccsvRzQVc61GaEHGZntwsuJNEdt77FvLuxu7K3KeDckEyCKJJw89weJ5bouvdXruoR2WQLGny",
  "key15": "2gLQb9pCo3yCJkJcF642M1i7k3GGLUcBbzEphRvTjVXqUX2vN9U7kN7ELNzVnbFSH2YnnS9WPgmcKJQhW5Hyvd7q",
  "key16": "3tW5YpZCCeWgQanj1HmtKeB24x2sHUR9XiD97n2nY99MraswBZUKTzUe3HQmPZCkU2fGHh87jLQnEwtFYdSFYk4",
  "key17": "f4f5JqSS6bVRhVa9HCYXqHGoztyyegpdb9n5bpPCkafsFtKrmJu66mGjohMyQp4qDquYF4Mb335XD6MzzGudeU1",
  "key18": "219buiK4jPsAqPFERhFamcvvW41bhYFHVFEgvsA4QeYvvYb1rv4ayVqiL4dMAL97cSnY8VzuphzBW86LytGCnTDv",
  "key19": "23EHGJJx7qMc42Qgruz7Nf6WNX26eaQLGoyyFYrGcahrJ6vFNe7zwJTMGvkUbHc92JJjB8avQ6zCWyv4JGG3yWvN",
  "key20": "4gs84GMpqQjC3Xo5soTpmJdksLC8wbRaeKW1PZFyccf2sn6UUTdttcYM1GHvCywVfiJDFSj6KSCvks1896YpYFX3",
  "key21": "5fqUsLgCppLDWjPtCrs92D3LEXCMNhzgGaFGmPe8WxWjVVKuy5M9phYnvZiV9r8MqbQgLjtRobmvkgMaMhXPKDuo",
  "key22": "67BdHwP48u7SV3pwV6s8ta6RE9mszc8KSTESHeV1XspKELUWX7zv45d7qbqTVVinH3evPj32vzLfuDX2JqfdmAPB",
  "key23": "2Cf47Z2if4rB5k8h4KjNacoLoW8NZL39FuBJhRYV9RstoguR5mXFzy7A9KFzbn8nfQeUgrrW2iuXRsmhxP35b2m2",
  "key24": "56ev835PfiwZZvMSGUgGYXYfFiXSradM3cyZgPy5v8eFJTzHCpBSZVPhZruErbdeNfLrPZ5UCuGu9pfDUv5suxwQ",
  "key25": "354W2ZCeRP6VxqauVhZyn5s1MpfD8QjVnwv9auw7pW6p9L4YPzLR11YqLLcCktPKo74ZcXVkAbPEa2T9wKKnbYeT",
  "key26": "2bzgTsfCrwRC7N5iy8owmT5F2vBYPZDiKaqsNp7Bc6VsnZ4ntcDWJxE38ivJwvTdkizbzAvMu9KBJnQtRQne2Dse",
  "key27": "2Y2dSbfNjHYnjWbiG3ZEvmw7ZnN1pM5x2hdWPCwvWCGTfxbsEq1nh8SR3GxH1CJSWfTxjp3X8MoHX4q4oBBGN55c"
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
