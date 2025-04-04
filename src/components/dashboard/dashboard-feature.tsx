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
    "3BWp8w6LdrvzUhAEjzSnZMZZ2YiDpVH5r1nTfqzp28Uj5RkZWypwCofNjyWPXS7KWHwVk3PguvZ6W18WKo8AQf1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgWQdDUPH25hgFk6vpak6Cq7GymyChCr5EhCs71HgHB9mMoQsCvQquMnt7KyUmLKwVTH1sK3tiDFQ5gczHJjreP",
  "key1": "2YxEuUqV58HT6fWJH59D3HnNHRDBUYtqnDNdtznDPnNFbP9nKyebr9xKiXgAoHGAXdCZwWkLdNPoNZFscMeqiGKA",
  "key2": "3oGb8azSXXnF6V7RCnwYZutzWi2c734rXqBUUBsBwzwPYq3UmqKh9E9QMW7s1EAqr3tghjc3LwewtMGuAsuY1FbH",
  "key3": "47cw3XXLjxaWCFkWaQAy5vo291yie7PDed787AgBXh5nLKwSRjSXbnEECWUMUoehg8sxTwj7YK9GNUrLcJuo5Q6e",
  "key4": "5Jo34vmRVzrqDpycLbLpzdgb7jHFF5HkbnoAtQKmxojS39biMrJKUSAdKKznY7QDcSGUzRNwT7umibBdsp5prryE",
  "key5": "q2vPD786HczWPsZsGaZVzf2WqDWV1egpDL9fZHgGBLc32tECbW7hYenYAG4iSDtRTbAxkkDy4yCjgSH7LkTAazX",
  "key6": "3D53dNxXiF2ZNPcwU9XPfpTUibiE8swjE8WQTpNEvPatdroKeGx8xWUobgUhgYgyx7VZrqN9LCQ2MK5EjWhoVvji",
  "key7": "9a67AWdWqn74Y23XKSiq7spGPMJJ85BBoxzqSAhXzM5niUPDgKuYHaLwMboTxnTnZFZSf9eVL2VJjqaNjiVjbBj",
  "key8": "ZBucPNFvq7Dzd1GFfL3BUvD9VpMEp5ZaZMwPmf1YKoU7ZxuVn95cc57eaXd3sDWVKaUTzREgEQZ8Uaf3RWcStmr",
  "key9": "4bJ5JFdDNsoZpkoNdfe932ovodRPxArFCN6AxsKiuB5VtuHWMoyM6vhU1cz876HEMDXV2hLv54gTmQmFcoK1XFGU",
  "key10": "5KAkns4cmTx79TYDKZefmC7TDeJ3d4dJgJTRJeKp64QGncUQfAdchyuSwhuzFwXR7d7srHTc1x7WQZHKEWV8zJ9i",
  "key11": "3XTQY2ZxcPBiEFJDcCSfeSLgmEsUiLdZky6H1d8nS5YZTgJyFLEjRqCifW57uTqJ15v5yDp3XqQJoViXDTWCdDrp",
  "key12": "4DGiRizBnT4rxTDDArMFaFziVCcxbZpPZpqThU8Qw4LisT6yNC7evJCR1XKiNKZquDhpJTFgHVFRAoSYP5ddSGpt",
  "key13": "2BwMY9CzAh4RbuKKKTT4eMymL4gmGDoxyKGfrACMLsmqQ6aM3zDMpFjxsmdF9knd7rkSz2kjMJyxpLhYjFJXPYSA",
  "key14": "5SnhXNMxYqneXUFgro9zyRPXGeSkmB6yHofmGAnU5bqZWbXAWmZtkzorAuqffZqayQ1MsTekmvJzUJ9bM6NPiTSZ",
  "key15": "aMvruJoFAuMoYeGCyYoXMaCx5GdUSoPWwpsfeXD7FytHSV7z4rNERbuCVJrhR76QNFDXUmDQyuMcZWaAwX1jeFJ",
  "key16": "2Ttj7oz4GZGwqKRcFc3eomyziRCh1o5LhcrEuZy3DDXbpmjgX61t5KjGQSLtoRGd1e2JR68Hy54fbxMjgPTmAUq5",
  "key17": "2EsHqYseWMXjrHbinB1Tmc4AoGZeHwEoJu31k2SVeL5xfoT57VzzDQmh4XT9ZTKLv7Rr1RzqkSzxXF9a6JfCQthw",
  "key18": "388dR7vyYvu126k4NsJPnwbv5aRYE8Rx7h2g6yBdU6TaetJQ2qtm4q3aemqgnq1akr7E6gnxJQQz1sfxUStdP4Et",
  "key19": "3gCRfVB92uTmF951n4JW7KArVfstUHnpe4iSzE935feaE3JMsgYdWscuwFiPEzG8HANof1hoWpMTZ6JpxMmhZVne",
  "key20": "2hUwcqQ7479E8RWPPcz8TYekpXHuahKkbAtxcD1PsHxAXbMcK3mDpG9a7N8ZuJeNcBQtZj5iKpv7HHj3BubuGeAe",
  "key21": "4iA5AWQKdkB1iQGT51TCrXckQmytkxKi4UAimr7QMRHyvJtz3MAxq6pTjhBcQN4idYnXk5ir6vrZXhxnim7LWPPF",
  "key22": "4tNkctkqeqgyiSfRoScscPVnTgpEXWR25q1T9XRNvn6EKqH2QodKsTwU4zyFdLLQxj8Cx5EP8KDvXRnEMX9Wo3Nq",
  "key23": "2PT76Y7GFQg7pLvgoHy1MHFPKpFiwRPj1RhuynyddLfRcJ2w5rBeReGBGUmM9YyDC7SVWFnLwkZrD96QjHTZy4c5",
  "key24": "GtkfAqnVQQZQXEhUvXBLrK4H9Vw25rKkA8D7TaV4qyJjj2oiVJHcFp5reQFG3Cw3pJHXGfXDuzUMFbaoJmK71kH",
  "key25": "4KXRfqgVcektMp7xG6pTBhPv9ATQmgjwyApmHtCLn2U59QaNV5DTTn3hyQF9UibWgktAi5QQEB9qiFcd6Pk1n7Hz",
  "key26": "4CWxKVY1rkyn8rV4MjhyBETgxRrFkvWvoHbD4bY6KdGxHowUaZAJREuARR8RiCQdGje1wV5a1T1piGyF2Kk7Nqjb",
  "key27": "2qZoUtotE3aWvs2aUeFNs3f5vEUQqocPVCT2JFCVMNbhxcWnbepGYuRRbu48XWph945Ye9GK6KrDmNPu4ArSjga4",
  "key28": "29TWMRgE3a1ZVrRyfaXC1izTW5BfKGUihkm2uC6bLfu9UC1pMd9naKLEYjCBFCW6nKRihafweqtDkBYvUZ4CYAYZ",
  "key29": "5Lz71piCuKbbyLJdHjsMyS7tWAr8mVx15WJWKRPogyPX9szLStkqoye7NiyRcEQb2zSwH4NHeBXepiYbnsjzZZXu",
  "key30": "3iwUffrVpGVcDSRzMZC48zqYUM4AhqopVwR5EtVAH9SYpcaXJ2KDiGGon8XCiT1J5HTXmq6jUQxyU49bZyfQizhe",
  "key31": "48T8WAEuCS1Rq3n1ux38RWkZHE3AktLh2Vk1msvi6gG4ueXzHvaAzoHhdJ3oHJHCwCrGwjStjcRXkugM1FbqdGQi",
  "key32": "4faAy1NNJA2hHePVUUeuumjqVTyBs3uXt1wBJh7GV2ynY5izB7ZHvP3uvC5u3nC3nUeEiwAA3KP2kwFvKA6NEfZb",
  "key33": "GKL9jvi5vJhH9834xtLAYZtE9AiaJ4eoVbRtU4FH7SKca8NHhVCMiTXjajfAWrvQzWA65Ky8JUGPY1bTaoTyyr8",
  "key34": "3Hfd3nEr3rtRWhnsuAF1gCeLiB2HXNdDP1zKRyYbUC9SVdoSM3ua6oYnaiL5NfumHJVh4xp9hTTikcDVbKFrvmZ2",
  "key35": "5NnHHQHLbS2sA2fRPaotqN4uoFGCAhdhmwmS9FcSHL6KYddAkrb3NHA1LbrGUTEQ9CJ2xS9hYLzYf9yNQ9hu6vep"
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
