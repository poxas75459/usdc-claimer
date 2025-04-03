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
    "22XTEtonHwgHoKaFQPA37Phpa4713ywgt8J2fpx4uborX1NqthqtT9oWX1K4AxdyjxHjCaDkSrcij7RTZNA7A44U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sstyz58syUaBCK9B4M2q3UzsdTmyH7VoXjXd6h9faaQYvaZSTAUXbzfN4UdgnrmaQzorhjvYpABCb8ECp9mBze4",
  "key1": "4oyqKLEHyyoU9c9vbQk7bCHKeoP4BbXbC2B2winyqSdhW82kr7ixBXRt85nmTKeGfQSqgxBwuuYf4kJvpyKbLK3Q",
  "key2": "25rkJdxHREuRhE5d8srCmRQipLDb2AfYtQzWUyjFcJtZFxdvoHDiaeP1mgyapPCgJZhtNxHpontAhGohVmdGKQkH",
  "key3": "5V3eeQWr2qq6AHogQ5eFruBZZumaygrygKhUCZz28z9WEQvjjKBTczCpsEXPfs1aRtntBkSWevKofesAqiQRbFKM",
  "key4": "4k5G6KZMh4TneHDee231cRtmfptAgL23PcSMm6xAED7PUspQAjXGwuF9o18DhaXVnHKhVT3DAeyQzCMYy9BTqJ5y",
  "key5": "4RbnjjYWeLAZoknEUTM7uAJ4pCMntfrj73gMpx5YTqHBtVPJs2ciyr2xqasha4Ebi7PGKn3KfaHmJZCM9XVfGSbK",
  "key6": "3E4Pjw7Utc76tGApLrhELxLFGZX9X1kjYY2MAeh7UB3kqeP9nLwLyqutWNW9e2WdHGy3T72FPyW2c825qv63u9oT",
  "key7": "3BbMiguz4wsHHXw2Liv3Nw7FSa3ZyByz7WFexutvg9LVz15vYfSnEQEHnx9tGZBVG7SqDpds2qUhzPFfEc7ikrkZ",
  "key8": "zuXsygMK3WLK2caK8NeqYnMfCZ3B4kJMqxD4f5Pgf19yTXjPD5uyHQ8RF178wBuYFPJZvV9y3WekYGccVvPANrH",
  "key9": "3gVgZDT2yDX9sxkwr3m9z7j7aFxcJcVqJ6VvzbD6Rcs4JzyRZWi2V85TGfBFCqv2T44TawuiW9ByRFyoQFtakBsE",
  "key10": "5HWJgxncyDrr525dvEmGbxAZVipsxvNoXjJxoXVLuvUukjWEMRbvXeeap9Cvb1S52uz4WGqJ5snJ8B2U5ry8gA7r",
  "key11": "4q8EMi5sp3d6hzzY378ZXkqCJEeQxr8gN4c6DncxX37LHHtHue8ytWkkHvKG8wVdLmxNq6as8uGnDa3GFyBY1fcz",
  "key12": "4KtA3qUncG7a8b6Z6gUX5vBgh2eFNhBsNssfUJbq8Lu1rdLcogVQom3LqQXdD1BmtJBUui5jqSp3yTYCQjcBhKA3",
  "key13": "39qJso33xzLBbZz63GSSzdroLwNkdq4X6EtM1nsPR6WUYUBv7oCXvpEYaxYdw2MPZvZPYpGBdoqcRqMEKQTBLeqr",
  "key14": "3CAFyRQ37u3Ai2t7WzedhmiMQ34gLNUkN9TRcJJP7RXEmtFa4ihg6HksgUuFhRbqKpbtij2UxZvU9h4tyEq3BRUZ",
  "key15": "58uK9GM3t7DcV7urvcTMhAPAjYhuEif5fqqc7pkBVm2GYBVPyq479BqDFFMpVSVcUJYt7d6PdU4eNft2Ta8kenQz",
  "key16": "3z77YKRhNMp96CdtqV3zPQRqcbZqagKZodxCwKHwQ2QmunFrW6NfpjoqrPxV7tL2WyRvxkFCMRaec5uTk2ErD3g3",
  "key17": "39U7qThCyww2R3LqVbrmt4mwzPd2q9M6uM6E55fhLapc1TPZd9LPhtqf2ddJGASyTy4siGTNPTwgpMDo1hghL6cr",
  "key18": "4maawtsMgi2ipV4v4HmfcE61aDfXcxPkow4nN3M7dYEDmueeaJSTtJDaB2JSyBtP56yZ5ntopSq4muxduyoKZttu",
  "key19": "5gswxVZ2ALJVn9hk8jqsVG1AAuJLzXM9SKbKT3iF6kq9xsBFg7HodJDib6EzYBF1yy2ZmDE2KZrRggyjazFVUr9p",
  "key20": "3S2HrJPAG7bKfxXhAPTB4M2cz5xSDnbD6ybH8PziWaWyUewkCMT4RM5qEo1zYahnT3q2sDYwrZc32No3vy5v4RTB",
  "key21": "5dmta7pZBVGAXnT7NhBSfTzse1paBATPdnRacCGMoJMz3gCGhKa2CxhxV6gk3vkwxhdVrEX6JR94szUhetyaGamV",
  "key22": "2HXnGc7bPQLGzDNbtifjT4KQZ2RvxABPoFxeHE4TUSdg3kKcNzQ5FrtmmZjxnk3s4YVWdZ6V3Sq11NnbjK9FDNKs",
  "key23": "57ZZpVpSui2avza7eda541tMm6hcVvXLzDdg1b6o4tTugJkKtCPLU2kKSot4URKuF6H3GWtFuFPc8duUiLhmgjx4",
  "key24": "3c6gzY5Vr24A7kR9JsjbHgKL5UP4gVYtKcFpXfqfRKsUhkJqaRMVp1VThQeo37U8wepsVWBtSxWq212j5WX7Rw6u"
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
