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
    "5smsUdEQQapBnRnupnPqyapY7zMdc5L6FFKnYhSBK79cvJkzfxKXpz5wpe1iJHeVgd4fURP4iUF48RJvhgJBPC3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iznZRFBj8QyyZu3gsc7TKVGE6BxzmKHfMLD7PffRbR8PGfNV5Xi1ntJUNvnVfZk16PNGXH54PTjYMJhGPnrRGFR",
  "key1": "3HwuaNra4TWrJJiaSH2DKefZSQhaCWxeLNEeJ5w6mVH5vG4BCQHGN9bCmWEqKwgAnE2XqybFBTkQWVB3zxamxNAz",
  "key2": "3ouHTK3aZhvdZ8o8mZ1CY3wPuf9cUkKnzbBxX8dNWahsz6tFJYWooJ1FFLkNaqimXzJr5iXbCNy7o6TBNzFsrvaY",
  "key3": "5S752H12XcxrdnxDS3AeRnJFzmbZ73QaxKmtsCNCGx1hGBioNXimg7a9ymNPeHEhEAHAPzTMugixBddvQGykSJap",
  "key4": "2s4Q4QS15s13bzbuYuXifjudenmmuAzvaPQD4jHKawJNACqyR7wTpakjgmTmbbVngU4ohJ11AQT3eJmRCwbHQsX3",
  "key5": "62Kk6y34h1QJ43xKZvveB3s4wfPH95nFK3RcPWL2djGiEBaDJqDpDnqCD5UEqLPUt47icaDQsANWfv8EEMaisKzU",
  "key6": "4XrZDf8G6iNj3hdcAEDpDcoNjYRzTrbsGC7yYzVdzu52amtbw8zHKKHnaFNatLaN78WFBFtBTRJLWke5cGfBU7RX",
  "key7": "n7BuS6uzBtn68RAf3wEPbk2R7WnBdXSve12oR4JpuHA43hdApx3PBujD1K8nvyQ7C47ELc3pDK6NPbW3ygtyujW",
  "key8": "3uWSz1LULFWDdGuBAyxsdp6apdUhXzki1Ep92drNE1GudGcvD97s15eo9mMGFSnrVsmtKtA542sEQybe2GPmT4wP",
  "key9": "4F4kC58J27eyz1fKXskWqJLKRRP7jLfwsPTrGkkBSSjsUXDDCeDvQcpBR66Bpz47Gjcuwubakf6pKLX3RvweLjYq",
  "key10": "37YuhpG5r7QxJXFZGdGM7UV1ZG4eErL9feGWDVmkJtALeNeBsopeGghzx7v8L5AzjDD3x68JYXwTYEN5eztVWqt",
  "key11": "maKzWP36LYS4KcoStMSPHkSsw3MfymZPKLpsYRFrLC6ic3f4yWhomrtWeMPQiGzq7yw8pK1HEPhp8NKD7voLk4N",
  "key12": "3U1aB6dABcAnTmde4CVCMfsfaZGsz4jSGHPh4AEQ5RXqzdHndvog6i3YbEUtTRKuhabWQQsiq94yRKW55SSba7Wd",
  "key13": "41Wg4yot13AX5uZGkLDNFocd7LRkCXjWFB5qBGuHdWr4C9vAqBDg71yfBd9fYZB9aGZThjdCbsLUmQnLJUTiNL5p",
  "key14": "4up9kJMdphtGhoqcPdCLZiZMr4QStgP6Fz2UDWHMhrTBizfK7nnEpnyzaaS5ZqDKswgeW5pBhde4wXrJKHALqUWG",
  "key15": "cMnTuS51dzQAVkgtZkCUQx4zYHWqKsuQ2usrWm3txQM95DAWbChcr9CacUU8YnQ8owLfrCgnNMC6x8jejduyqsq",
  "key16": "4toDNT7PYzhNnnKn9uSWdtvVwgc9tMtjHYNj6gNFKdLXmGD9bSunNkTTdaEPckfw6wbn9FuRW8YLouARotMMNkHG",
  "key17": "2MUVRgpVxR9rg9jRfsTSkHFBnEHWsyP7E42w32mijJ9BZZT11FANkZfmUeMd1qSSDLG8T9cyjQF6SZHMDBH35zJ9",
  "key18": "27D4dDmnsi1RXEJ9HfgCqtR6orXqS2AfitKiKn45FVPKKmF9g5aXf3KFqfbVF4UPodhBwB5Zufw3ZoFkD17RmtQc",
  "key19": "JWUPshsSnjo36e7BKNzzX2zc9xEF9xZ1dnxGufFHd8WMqWXppeSrV7eyDgry8TtnY4WCZ2PJ3YWiggdJHf2uAxA",
  "key20": "1Y8jUvojRZ6HKV1o7VUKEnerCz2XnRBgxphTRQKBEryG1KmbBj8TLQEE9VJbbTPPykMqw3Ag5ZUVMjYufTMCT6h",
  "key21": "5ggVK3eXuJPvb5TcTUxBec9jhDoFiZJX6MhUuf5iwyeZRt9CQKyyk7RXmEahHJGdoyqjQxwekfkBcBcWVAfd8ddV",
  "key22": "wzShiy6XeGbee3haxv422noEeWhyp3vQ815ZxHwa29JJTyL4tsw1BPn5PYu3GuecWiutnesiLjWQsRKsscbChDe",
  "key23": "4VVbyG4VhSpxNYEvoZbGYjvdZBtbxB9pbTm2vH6PQNqsqdeoPW2oskPaMaQbgrLtNbUctwccz7iEucCu17x61WUG",
  "key24": "42WeSkzsBETWd31hQ8uY18NtRr7vjJLRSVLSVnZQ6jQCeXYhASdj2tBbF7qaUejb2vyXk8Qh7mrDzsNJAUFyHt5b"
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
