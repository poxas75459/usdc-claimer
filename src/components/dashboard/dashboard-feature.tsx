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
    "3rZM9iZTGncoUxaVn9J3bcrgPWDm258Zqxgzxd5mW5bGyd2NHt3VwKcMYvQgyot6C32PJBifPzUBFCzrEjxDqc8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLzbmtZN6J8F6q2Hb4nqC7hKcS9tkunW9PtHPpAWwyMz3emas2ZayVZu1dU1foJXzZcU2MsJKC5CUVeoqobGVTn",
  "key1": "22YiP9AHbfSizmuygP4PnL6h9TZduqndEWmYxRrCMd6LxQmnTmSkAb6BbmqYdLjKTAFGmMPuyXGxXce2mdddxQvw",
  "key2": "2rfBJohqKzUbRQDrnDCbF4kqPTJpkLfR3LUhqFf79yuKxT6Wtc3WPTH9wcXNPDWnwtGSr5vyFkx2sNTdDVDdaSn6",
  "key3": "5WtCCQr7xZyEn6v2tgEWoKE97h5RgguCdMgFif1cYFMAU1BykFZwRxBGNjPXuRz1ifMAVSDYKsPethskWauhAr5d",
  "key4": "LgqW3B8cRYEa32AFPSZohZCYeenNVdHmVCQb5wXLdLk1yRStq4zDTmDHZgBe9wf4h4bVY1UqzYqQW7KTttkafKM",
  "key5": "4rmAJwoV6TWJ16wyPHmzhhKwhEdkrU44LnCzsyZpdotTpMraVDdXZUHmAkLbBW89JqqvzUKfG4n7dF986nCEeHhZ",
  "key6": "3qmF23GDhcFS5sTauBiLaNpvpYoA2Qs4q2PzfwN5gQND7wUzYYyNvbLYkXBzT7ob2cZNriWJHhLHCodkLBWuurnY",
  "key7": "3SQiLwFqmYSNECS7wQDmRTWRjvbGVgQLX75neDUhyqbAszgqdnSiGgJHuitypmvvLmAV9Rd4W7MZHgqeXHsZX8oc",
  "key8": "3qsaTBmptY3guoqu69cy4DK8Zj7NKT7ipvpDuvVPK3xtstRzSbiuqLsiDX2AmHzSMkPQ7SDccHs1AeRw4uqSEAPN",
  "key9": "4FVkbEia7vSb8WF9LoTG8nm5pqQsjHvLCSaSkYjVGrtcTeqVxh64nmamzV4XFbinyChvbutGGN7cLzPPDneCsRL9",
  "key10": "5EyQJ5iPeLfLwzN3qFGwpSVLQPEHyCCY1UeZ6hcVeTsZy2j93FyHGi6JHAYJGq36eYCDsYfyV4PDQoxBENFTMLzf",
  "key11": "5j2xLJS7XXkV4hWbMWRAy35b47pnQdSygz8BU3tJgGXTpPvLgDZLSSB7ccQyuV2tSW2QhXM9YJeyMgszf1vmDgMN",
  "key12": "4yC66LwKxKpaFC8gQ6CAGQsns1GbCKneVv4TzwBDJkawZDDRHrMJ7Jrb7NHFvLrLkTuQqQ7444ePJCSUGcswKqkt",
  "key13": "5CUVJdpipjEBZPwgewanijq1JFSRKRyDSbiLEm9JrkFtXttAfHyiuT7JcdJnVrcq2MffV3Z5LT5vh5SnphBAuHPM",
  "key14": "4CsEJDUQKjLyJw8EXMzytKQxLsvuMq6JKfG6SDtpcyWs7cXrQAXNicpZaxTWggyihibVpzCLeoLbkfdDuoBbrBGf",
  "key15": "4ACoWXByPUcKU8NKKgKSddyT73d6PXUwHYPUr63zBkDbQ3yBK7CQFrp5W6r6iWFCCPjHrk7urHjHCmtS5d3birbH",
  "key16": "3tkDqWNgeg7AWMSAnVV938pd8F1UbEJkR1MpYMn6jEvYCMuKZV1rpLmCWBETBHnEcHtW7o4WuqjH1aDus8M4nLgm",
  "key17": "2Fna3WgVSHR3PqMdhQNGsgaWzUbrrPkMuCx7PBz5V7wEhuPTi2ghD9zCe6ntWg5TogksMGAa4eHJNLDHZcC8tT2R",
  "key18": "3WPKPedb1hE5e2nCSZfqEd6QgAJSk7nrmr3LxDs5RThAfWNnnBriSuSvgu4HTnzByAXKrMUMaRzUsVDuAeVbMMnb",
  "key19": "56LaNUGgAGJHEkiMYyEaaCB3GwB78UBujeR4pT9oCAKsyDxHSh9Z5nis34TUM9V7rwTKC9xDZb97epEUAVEk5pa6",
  "key20": "3XfpPRtgTyb25TGd6kAaNJb5DddU4fMsECVPKBMxHEb8N6ohAzB3f7B2U3fYiw74ZbZ4r5L3YYqgbfNZzaVR9XqS",
  "key21": "2jyZbiM2wt2eckRAG5PSQjZ4wmxDeqMnb7vofPTfJ6WobPv1hdGCP6L8nGEufxYvXZuCt5GLNyUHyFwwQ7aFyyLM",
  "key22": "5vY5w6Wk81cHZ6LJr5HCpKTip7bHputtacxmWwsqDtjow6sSW4vgjadpsW9tikyX6nk3UuJHXZ4QGpPiDarsQeb6",
  "key23": "3ayJoeY4gkGRKKJ8BiaFmPuJGWM6WbqCfMUmAaederuCV96Kds53zEvxUQqMteKo1Q17NSDW3WCteTZqKYMNDYwk",
  "key24": "H4YByjQAjFFapuyS1D3FJjWt9M8DUZuryrA5e8GH7xrd5viCU57HtQspeD5LBmnuUrLwdczH2nBjYK9p4dDvXXC",
  "key25": "3WJLNCh9AQVAZ64Eq7EZpAK1LH2dTFCM8H8MuuKiWEaGxUDK3CBhynELTagNKVQjjHhWFpsW1mbVTVhHNAqrxJTi",
  "key26": "3Yx2tmiVqsVQN5cSLygNYg4M5ttWyPkLLjb28CHeTLcfj1doziSG3pceE7s2f3hZ5j2e7DQa7SddyJYCK2LqQwfF",
  "key27": "4naZDBxbhDCU7eBH8Kw7udp5xipGr8ULToSPk6fMwGsRXStATNMTeAPSAtHBxgJ3rXBisgZQqL65UdXTNxhaVgDN",
  "key28": "39kQk2Q7aCsoMFBPAhdFmoG7NjcToodgXGn7mQQVM7mz9aaeP4Xe9PHnufTC4cL82aHZzoJpj5VzyTwMXnUoXhcW",
  "key29": "xxHD9ArGfLJFJe6Vx8Ye2MPVYyuZ74XF9ppnXp3WwDGEjAorB76gzsdR4Rzo4fEKv28JBEziDBoMfPFn83uF2cE",
  "key30": "5MqPtNX7J9mFRySVogsbTQhEGHtL6SmjYANmaaqFdWXhoJ2DqLrc6ViyopfCzGgpeQnHn2buL8sP6FTqcN2ZfjZQ",
  "key31": "3NDpfUZEkVGuGPWWWQHLEyer9VoYbZeExwBpVSvBJU9VQqXLbCifKXwGZNyjJgfcq7qzfgE5FPwqVxaRphV2W8VJ"
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
