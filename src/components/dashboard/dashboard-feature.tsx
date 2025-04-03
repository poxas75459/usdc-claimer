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
    "2vMCfnobAuY2MCLtH23hGh8hfXdaP9KK1SNK7RMiXMtA5rsXKtvTXRWMggeQCV5BSwRq5emEjBpSAw61Kpd3a2gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K99gmjBTCvGpovVTg8ovhhMr8HSdp2iHKBtaaZeZMrWHNLaWRFz8z67d5oyed2aPpL1BTs2WzCBfHSznZsn86fY",
  "key1": "2KKy5pnsJatY2FhqscqtQwLT7F2VxthrECfsd8ADJXcLdZM1XWtfFAEZS4BpknnmzsmQi3gvdyt7pj4QCxgM4pwr",
  "key2": "2fkjcNHFrzPP7MYUun6Tt3LRtCDU1SGA3HLpfY25TB6Lv6qs296NjnRMJyLKHFLbmj1mXaZ3ScYxzrecCmtjGwp9",
  "key3": "3HqPMJiF68Dc7eXa63aYJHtmb9TtgfCJF2TDmzWr3fBkX8fkNYgaZacu42cLFwYHez4Z1uvx8b7CXydx4Gvdn1je",
  "key4": "4CpkSsGLYqMRhqkNF7xL9Ftaf3ksDzcDokn2owgMJAg7WuNV1vLHYHV845yJdZLbx3KnKVkN4SxWccKKDcybZ9Gj",
  "key5": "4iGeCNbdMa8QLbS3fikRVJWLeUVcXaLrF15B8gjA8ACq4kC6aKphZDb6yknm9x1A6Tt5BrFEeL4AxRnHjxyjRY9q",
  "key6": "3WKt6piyAFUwz6SZ3DyyCaMzy85HLHMGxhQtG9daArDZdZPDenSnopX7GyWLwg5oKJd7ZhnV4koqjZHBkMt5UqYL",
  "key7": "4kWSkiR6p9hT9nD8g9WZ6Kij6CrCAX9AT2KeHzfUD3QuVfZftVGHBc3USiZ9wzPotGsNpNJjsEUhzE1No3NsgRVr",
  "key8": "5XiDCzzkawFy3F2jWhx2rtVULrsZPXLTrzMiniDNP24W5cujuoHH89HzFVr3fRwJpDa4iJY6ZsjWH8cMAmeEoVBc",
  "key9": "2LoKHErvrhX5pUyxgqUViAis9Z7E7jUcqvLqxNpks3rXZM6JCBGrw8kwA9FuzYcHhXUBEVHDcVSRDjqWd7WmZmwj",
  "key10": "2dz3mzkG79AY8FjbCfVfxe7vEpqzNj2wH8mToiTeXGwVFcmJ2iErwr3U6DG5hwJXeqjyYAv8m9rjxqtZr5nGHDRt",
  "key11": "3QhMwWkXaLVzgZPRpZUdVvNtobeoy9EMWgCuWuFXNHZcxKpysMYUPpp5FEqwqpqhGCynuRej3VwyN27gbBip27vi",
  "key12": "28Bk1nUryZKxXhn1Zd46e6YrzuwqKcBbYFXXkQDHzdMhKL5UaA7yLdexZyntkTyDkqHZGNWV1EuMJRAsrRs4WamT",
  "key13": "67FqWKpNMnRP9ypB7dTRFr6KUYxiSv3M3tHnZJMHwYnWve8sruXKGqJtMZiW1W2LHo1nKVqHn3E4WT5mvzNBnECj",
  "key14": "3SnfrwvyZ21sGaw7JRC4fRsMT6HEwLVQpUb5xnxy7ZsC48bdSY3gZvb6oWC4Bpdxp9bBUYU4jf6aqdVM9CAn5HK6",
  "key15": "rS6MfXdgnN2GDXDyR96Gtb9v82prM3ebHYMnWGc4cRzwogJfKqwUdSqScoogSRQrVRMDgmQDyvZ8YZe8SCR2Juf",
  "key16": "sThDxwXjdDbeGM98Z8hPvtLJhfp5oRJ9ukmKdeYNmjic8KUJMjQwp1TMFjhCWGHEsWhNG9rZ9yopNYFMwJLw5yi",
  "key17": "2vvrsxpvUGaKGrxxNaU4D6s5aWNZrRJUGiw9DWaA6bWfcbbqMZ1nmVCqVC6gsWnfjcNzAsRBoug458hKvvX2Fb7N",
  "key18": "5AyB5THNi9DKkhv7tUCWS6BwKxsoKKmM3mDcVwZE72g75JGD6oZ8L6Hvg2fWCmGA5uzH6PCgMFAq4hF4FTry5Uni",
  "key19": "22A2kQ8JVCcP4tohPwT2CqvSAeGAnxxKMMb9duBvE2YVKNETAEBkifqykjd141p3NQyuv3SLhc71DqH2DSnJtGpc",
  "key20": "5cKvAwxRYBfq9oLp8eBpXkgg4VvPcj3W9vbWVELKwVhUYrSCq6epewv7no5VULTkfaRcvcnLAGR26u5DgGsb4eTk",
  "key21": "2dW78BhPhBYyv8g2xCEnKBFiEkzBhgxkT7U6UtwTNAMSFjcUmidUAN7w86DzPa5dHUbuxtfuouZBJnrYmv61HZBg",
  "key22": "3N8XBNSNzSoW1ZXQnqX876FsaoDRNiYJ1yxkn6L7Lt638BFxmw229MCUyTDZuYc8Dco7cHQmSHV6LUhfRCwjC71r",
  "key23": "2kkdWX2bc6AnS9cMbDiieHyB4cQ2X9LwoZumbqnsiZfZYpZNagMJrxUA2RSnyGD3FAnAK3YtVapXUsKLnTm1z6g4",
  "key24": "5vfoSqNUvRvf52mVp2Aa1FgPXCScCFDbyyo7uL2QT271VZX94nac3efsCVJdHWaZgUe7B5ggp1w7dxPo3zHfp1zv",
  "key25": "3uDhTRLvxDBRDsqsVVv451ohCTpuNu2RZ7Fd1q9AVaoBijwFG6bMKvTAojRbX66ZqMwEm6cDQNSCrHkxPHpC5gDx",
  "key26": "29Dw18zxiKRw7C2w2BUgVrUETfL5uEBRHP4aGirQBt9SumzehvCdm3E2ohESUMxQSpVHifAm3HU179ZspFPFnoEY",
  "key27": "5zrmypJoZKr84p3hphArMc36mPT3BYTQFjPvEx7MD1K1zwMry7s4YUkqQ38Kq5gw79wDrA3mGQRFcx3MNqFrjsZ6",
  "key28": "4sM4ue72QuQMWQw1GGAfDoKmtBz2KdUHy5k2ayApGa3DAUhcjmw7BDchYRQ2L94pFtByR7Fic2R3HFFuLbgQfmCR"
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
