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
    "2tMF2LDwHYYgg38xJXqK1fcPgRStWosrqQYkT5oicQU2yjhB67MPXAbkQJcGNExsoz2r54RAvgPqxUH4EtW1DWs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3m3Pb5yUnDca7n6nJch59Vwj78a1qMsS9UvzQ7uScaUrfQuw9Mw3pEZbmiWhw7jvXD9f7TjmQRZ3CkFStpwAac",
  "key1": "5FUjHEB5DRDQojCzMG9AVNiNi86PXQXiMeKrF3mG75Ghm5q8Tvo7CJVPQtfwc63txnikPsudAZAMGhb9ow6jYX4P",
  "key2": "5hiNXsG6cwKS1NtyowGtfZYdxVTTGndXNiFkRpKg1dHr4NJhS47oHiYWzbrtPFQf14vXnBU2T6Yj7XUAhq7ZxoBj",
  "key3": "iW3RiHBu77ez3g3c16a2UGMcNHhmuyrotEdeiLJxL21x8wvPLfT3cuhVddov6EiMimzWxwrjeBppc4RUCZGFn8j",
  "key4": "3LQnLABbLS89xPSHJKX2VFBR2nHhkEiBGmHqirYMqNBNvBxqpmoqpftjd8gt3Bsjj3v16jbdBjkd9KBGG4NcazkT",
  "key5": "32mETnsZfLGAmEBLzPseHF45QEJ6mYDntvWFP8WuWcLzrLy8GjBR6hJSfm88HoC7SKXM1aBkA1E4FivaUc8R1Vpg",
  "key6": "5o7UCrCE27aUmpvmZnHpHxWyuwXUk8aecv1aPaZpBfMrE7cAWHuxcDG3416GdPHhZ5uoabDdWMDiJnu8M5qPe8An",
  "key7": "2A3epLGvQejTDkK46CL6QQx6LZrx6kdg9GYNs6icgjA2VKxhhyhCQgX638HCsQx7x2jcgWhWpBguHykvq4o3W58Q",
  "key8": "npmm9NRpQUTRzAmhZzuuLaotidQ3gu1ZG4U7DuDr8Ju7SMMsRfCnJmd6ZPC9PHsK5RPuNxiqqKGJH9euM4363XJ",
  "key9": "529CcyAu7pKd8AJfDzCteqmAeasdS8ezhcWh1SdbbBYtX1BnNGrkpin2an4qh8rv8sRicA7cv5DqzrfZgAnxjPVQ",
  "key10": "31Cz6iTAy26EYPevuqTfYswtz43BCw9veV6zyM1yz5vg5tvEDHJjodk3v3UEcjyDXefptaF4sFbdYyZteEcfJ3bv",
  "key11": "5BbVraiRDkpJSFDaJCchJR5tUp3rKGjZX3x2WQktDtQBJSHQfWtkYhaj5qA3RQcXwKVWZ71P5zLLVyiZSNnxhx1h",
  "key12": "5kjtmGG3ftmGvLTdJW2M54UdHCrRxngqvoV4r7SD3EUdaVNAUe7p1AHJmVX8wzYYQxnde7smDs8hk6d2sa5oe4Hk",
  "key13": "pSVZwLAwx3f4N5BtNnj7noNbGyf4QaXmMaezDbnLSxrU7ua6K8n58pHx9B1o8B1pAmSBidXLjVDxdF8sLZaynW3",
  "key14": "8x1WFRqV6VnVt8fZYzVZiNcWK3CMqXzdgLQkwySffB1WLJ25E3YeSR8D8VCeCJibHHBvkGgv2Y11N4JyfDYbvY9",
  "key15": "3CCYi8wKnPWdqaKE9rzYkdbQRhmGwTpHWkbzdA1meuJpZEX2NPzYUxcX5uHzEt9R1wtAEJCrqsShjotpDB1Uxd4Z",
  "key16": "3WbrhhaRRss3B2fuKrnWr8KnWh9S7VgXuCm1Ggf1qQFioVfrtuAPwrmXE1NYPcAe6QLbtsAMg4jfiMHTVjdjrd1g",
  "key17": "5uqoMoxVqRNzxrc39JSmtwAMUSRZyq3EJqVQzjkwxoFhydFM4skMyJc6Srp8mdSxncYs53NzvMbjFWuSm7194r7U",
  "key18": "49z7W3HFda63yb6AvTAt7YDELhz1b7PVsHaQnfH5XGGk8sjfNtUeeehG2KfBbeSyUFWM14wYHSYDWMffoK1yRcab",
  "key19": "2tDvm8egfNuPvbiRrdjXzGL8gTuMkF5AuhpQPLXFGAeuxjJxo3LtGBZGwEV1q1bZk3zSqSTskcAEguB9BmFEtVWv",
  "key20": "2vY6L3e6x3F98VzJ4C8eUpsNMq2R36VaDhobgif5nywNVxuLvwRGWm6fV35ZUrGVqtGBCW1XfAwXT4ujWQVLfks",
  "key21": "5Gnt2o6vGeq8vDBFEMsEFdtmHBaYBQRNvBmL7nE2VXakb3CiXFU3XPvtjP8FGZ4mdzHBkjC8CVbPxkAfEHR6UjW3",
  "key22": "25Jqn1vqBXaifuKV7L9Qi4ZafNn2wK2TZ8d1uSbSQLEZZantqv16cvTzbdtsPC292GQJ9gWWCHeDjcsjvjk3mRdw",
  "key23": "VzK6pxiSBr8PrG46XwLJXGY8qMYjaUdpq1ergqpEpk75vKsgHgAceCSFyHGXauSGuxNd2yGQxjGb3AD6r3XuSWN",
  "key24": "xTVU4mky7ZqmwMebyKUdUKaYZ88E71aHQYi34SFPvUkicsZ4rAVxw7VQYnQmwf1sTTUmd9xuqSi424oYu92tWmp"
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
