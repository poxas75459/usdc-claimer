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
    "d13JVwGb9g6SM8pDcChrLNW4cbFVd2SeDMcApWCZ9t3qnWe3B3iLrRE9ynVuq6G3NKV5yMrdN82t8kZ5fLkd6mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LynZWtGjd3nwZNkdM8vAT1YZZ1mgcVUCZnSRPD1JN8WjiVyEbeL6Xz1yzP76Yq9k2E9iREMjwahWZd4W3HEm3UJ",
  "key1": "5nSixQ67j44qLeof9E4ttV9n1KyG2NgwTCPdZXdb7GRwSracppdJLYgKf4KniGrFv5pQGZK9YGZoJUUeHCeeeWgf",
  "key2": "3ZcrCu8Vo6VxNYadvnVqibCZiMevmaAh2x6HGXyKybaPzZbKwdPLBEZ4EuhF8siVq4nkiHy3QXhuZSssdgC7RwGw",
  "key3": "5EbwR7wHaKVwT8rMatSnuxs4x6866Dmj7tMU6g51Xay84caGcpkDjJZWAcXA3xRSsG6nRCRXC8fiixS2Gn4CSAr5",
  "key4": "3JcP26U8a5hAWP2QE9cXq1SiCyvQCaaJjsmdfvXv9JaPaWpaU1bRiqSkSdDZfgym3G2RJxKp6EmYnWNYoDnfpSTH",
  "key5": "4GB1dPkg9GF3bd5fv3npivasrm5psKoD4YAxYaKLVtkZjQoexKUxYqxU2ZfxdDp5sWCK3GRGBCSwLWVU6V3MWpqs",
  "key6": "5nHZ3kwh9ttWvRVLEjGVm85UEYXgaYvGm81MbrWNPZg28FsfoJtmG14HfJHSqoEG8t5fW1v7u7DMci3n4ZWhtkNU",
  "key7": "3rdWrDNSkFUYszLhBynea8K1Mx5qhwDCpSyHL4eVfTw8C2H9ywmVhbEGf1aJSUi8LWgJBw73gaUWVW29tDZXPvU7",
  "key8": "4KgYZtsUszEedERDKiAoCNEnLfQNFzdnQ9wpkWbUbDdxFKuZa8sSui7y1YBn5mmCWg7S12a9DqshtM392Bo3maxt",
  "key9": "5WV6eZwER9vjqSRwUdzPDBCqYWMxpQqsfAuc8nqVZoLSFviNArLvMCLmXyKBhg1ee3qK54asjqfoDZ4paNp3AejF",
  "key10": "2GPYsJ4Hmr54kDzF2Z6SGzBqit554LvivfxVJyR3gRsjPGUdA2qvw92J76P5dCQftD5BqqRTQgsmtoJ5TUUJvkjp",
  "key11": "4qxt8JuqpmgGnZToNoyjby3SKxdw2jnNawXM3kNSX4TUWkfK2gfB3R6bWJNd3zGKKxTn2ZCtc6rSNNE6Y76TA43D",
  "key12": "4vBpBsC7zMqrjTJu1oHTHfJnNBskYemX7kHXjvWvUfWyoWZ7qXh1Bif1kZmALWDGYLToDvhQUJ8re5caM5g71oC2",
  "key13": "26Yt21CVeQae2SR6qYMxn72VERGVVp8Two2mjsogpWv9XeckZtfTmA2JxbDpao7x6cwsG4sr3E3ZzwUGMzFxyihE",
  "key14": "3rAHqr4JRu5rYwyf51iPK76b2PhiDiauYj3fgW4vbQfptELjygRFqKJX77zQGnt2Vrv3Y4GjcPY6hvfRACAfSdfJ",
  "key15": "2M1LPvNa2eP4Q9YtgrLG9fLvctPQFc8HjCrPkVFC3YAR7Jyh6k9Gy1aYsmPzrk3o4s7tcjzGwLTra7TBm7Ehm4w7",
  "key16": "5Hr6EGXXLDGZUVWXTMn5FCD81CJrS81u4HBs6Jt4n6E7DywijexDVsmyjkPzKetqvpaSZ6KLaMjh3FoTGGqmVhdz",
  "key17": "pYHVSm7zwcDN1L1hqWiXcfFb6TqWP5o59qkWDbdrPZUMS2Fc34GphA5JhiHHC6XSgQcYiR974cUSHz7A6NEMzyX",
  "key18": "MSiA9nidWeEjw8xaSwchS8e9WarN7HGSUhtTGCF3MHQGgNwVkQTjRKb87uDDdZwoXuZv7wfkC5eha43ZGmoJ9Ma",
  "key19": "33xzBuSfES1L3hYUBpHzE6k57aaAc8tavtAHupZu6fygSxGwJBxcubNeEWh8XJ5YMgSU6U1WsoCfDthZMoFgQnHB",
  "key20": "3KikNSCrFyFoJQJckDuWjGC5kZA6CGtLk9X2pK4BrC99PrhfKv5U6uxcm4ye16FSNfXgoPm5FnKc8DD3EBWNmnik",
  "key21": "2xqTNFKkK917NBzTUrryuX9XUkiGm5GV65AurPdJrjmRqQpVhuBAnjPxWnkv51xdPD761FkfP1Vk55aQeQmHC9ps",
  "key22": "5T3qxgj3xA5CSNbp9obGzvVVrStkbYBDcd2iH8jvSwY11PyjFYskJPG14ReSrSrL9NDxbe9h2usEV4q6HyVk8LWp",
  "key23": "29vxk7T5KLVoqRstQJBGNW2LVdXArbgbtuFRk9voazpB6B8weQozNDjS1GnVg654ftut4yW9g1yu3iVLye5udQLk",
  "key24": "Yu5uUeC8cDR4x18J2orcKrePbBS4H8FQuEcGZgpnyG1Z6WwNBgZp1CwXLk6xxGbMYN9EvpWg3EwLnJJr5DvsQrV",
  "key25": "4RhubmAR9e2afVm4kJfEMFRTt6WifF6HRcfdGZaCq65XYWTDtb6wXzQC4C8kEH2iYZVv5psdpVZ28RpurWHUiaP7",
  "key26": "3pzUqnEES8G1U4uAFVQyQBtnYq8TydJWPc96sgjXseXJqHj1CEL243dS4nWHnqaEtpX77ipJMJJduTs2WKEixNmB",
  "key27": "2qu9viFjMXdMae6xD7wneqzdb9KSYUkoPfLftjiU3aaB2vkFthFW9ohtcEiB9MHGBaeVfkCuS2WMcB2o8JzFdJqg",
  "key28": "4oTeMqvpEwGrNsWYCG2g8oEz3TjL4iYWEivsYwJJPFJnqrqtKeX68akEi595PcxrHy7UseMkimYYrWbPNLZ9bDp7",
  "key29": "5A3RwPPSozsSi6MDhyCB4kc3F8TY4RUxWzRyGfeJuSwD9fzrBXmncKdeKQC4p8dCGqUmMvzQQtY9mPH6cuJzUbPy",
  "key30": "3mghPQUqboXHLcaVgZM181aR1LBAY6hUMm1TBXnBG4FFv1cr2tsivU93RsUcrpdyboeCv8pEKDQSSu65HFUU4uCm",
  "key31": "2nmAfjTdrQJmbpG9ZfdZYcwbGGnHBwGULJ6mr61pw1Xeu8nVffkrL2cxdDS7BGJ6gwfA1yDDkkGNMXviHQegyAev",
  "key32": "5zgdNRC7qgbskur7fAQ79JEGZeqgZLLvgPYBFRqZuEz1iano8wa5o79PJLqkhD4qvejDtCLigNMynsTskVDwE51W"
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
