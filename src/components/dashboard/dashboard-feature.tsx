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
    "28oZcvRt6CL6fgQC6nXJrAJEp9jAoU6yvZobK2E6PScaWrarnyTH25t8aX89UnCbPaBJsxQJEqAd7Fne5BZknPJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHR8a1zQk9o54rtfCesF5ivMozRfQvHYE8XQZk9wKHcHqWhy5eRo1e7T2vP92uc23MDdBrbeW8haYPBxNftJ4D9",
  "key1": "3g6sjpXVUR2ibucPPyR8Pu6Z3cfLkcG2KeEntkR7oY5BPXpd1eMpCWagrfp1fGGtH1TGQNuqjR4PgM5YKMFMshWX",
  "key2": "5bR7kWfPLH7VsxMrGtyYwqcwJKnnB3y1xCaqxWyyy8a9s4HeeMTVYf9aZPyNhADJ3Akfv8hgi8XbSujWg7Li8XUV",
  "key3": "2AYmjSMLSCpT4vhGdLTxLmjKTMrNA7h57aEMfruLXdbJpQFFb4qRkvcmGkdRGFctNSc9kDYsyhoXuxDSrvMwCXbj",
  "key4": "2DD9tK7bMVoemxgYJvEpZrHyKbpme5cLJ8fSC6BzBfumuRLyer1NYnJEm7EsnG1CcSKDr4eUmPa7LFPpXsxSpdhg",
  "key5": "K2d2DWFQxU6RJVXbAmgGaBuf5hyfsf7PnamwQjbHMbhwNsoBfjoEXP5AgodYiRZHLncPhcfCYnXThEvKUsm9WK1",
  "key6": "4fqutVHm3gCsW4pyHYQ9y52Rae8fambuy3rps2dygEi1j4NzgydJNyMA7tbTkT6ZRiR89WtizWUPNcRky7Y8hcXz",
  "key7": "3UGmbogEMbNhtMNjnQr3osVdyHL5kRedemqe6xZn9vSGezNtpFmrEmd9HTDmQxktwYjtMZir1LwzV13nfAMcQhnj",
  "key8": "GyYJ2dTkGzYcCxrMefi8yUe3e9qMKUKrg2gn12J3DaXCo82hyz4cDLYNJCbFAMT7T42KJocBj2djU4BeYJ5Qh1W",
  "key9": "44Nb2UciQsLyuJmDFwteadsdZ5qAXKjrnfxJSqGczzRy1PLzysdwWFj26Q5uKPnf9p859fBuyPdhrv12AMXhtf8m",
  "key10": "gttGv3r45Sbnxdfu9vMn2tmwe5suu1gQ2BvEbq6BHfLVkvwT8jTSSphSgdke5t8hWMZzDjzWwirmyxQkDAWy6yN",
  "key11": "FMfuZhP7vGp7mw26dnyhEGrPCoNh3xx3FNvGJ6qezAK9TgfojUDDy2961AvLraK3JvYXk3pZM5YMrHLm9NvYnRz",
  "key12": "5GkvtTg3g4pGBnWabM1GFzYAYFVGvgZzsU3uvjZLvSX1QGiF62Q8chLLwjFRkoLBStotSpFNb3L2woVc1PnzYAW",
  "key13": "54WSb4NDN6MLwiis63d4zpAmAUX6nYqRB6byj14KuRZsGsZF1nPs4sRukjui2F3QERqgzCUoYAJVzFaXVwgSVmXd",
  "key14": "4nm7DUm5FMNwTd8j6D79wTqueNKhXcBJoKijXfAq79QFTYSMfJ6oyi9zsVLKmWQAdj7AyYayMKdT9CLKbvSpCA5y",
  "key15": "5nDT5SQPUTB8cEQ7YihSEsz5t1wnJEexVwvEtkdXxrbZkV9qV3RgQm1ZwtDSdLhwLnsrXoFrwH4YSo8w5r9Hbzib",
  "key16": "3E8Y1XrCZjWqnV9Q3W85GTg58psjaJ1imoxZJuL1f4aZzB3V7n1YWDToknb1iiYuPvBjiWg4fa2zwPZaRiRsMKG4",
  "key17": "Uz2B6X72iE3pTSoYyPSYeg5ApgvjmpyhEhJhvGTt9D5YGwhMAmmxrBzNzhyVmWPoQX1j1rUEdANHcviB8aEaBxK",
  "key18": "5LZqmhD9ogoBK9b1koQ87Nheg4dE3WANahu327T2yrjngsoVxmwtZmGbpbArfcwyi6wMQ8pwD3cKsxqB1AZk3v4A",
  "key19": "4fHerHDoPttVdPfYthzAJmzwm3cydAaiLwEYwuHZ9MPVjKqHsgxH8nSnAuJnViWrS1oPavfDvex7aDVTQriNQYew",
  "key20": "4jg5tEPXR5YaNgxsdiP8QDkiQukvFEsmC2hYx2t5m62K24iCSNdVAKbP7g8Wo5L6GAdD1QzvDxedBTLuVCmk7grp",
  "key21": "3LaKkLVB27EyXGTUfudYeeRNbGyrqneiDMGFWzxnoUR5htUrddM18TZTRCp7fbH8AdSvzQtBqKhDZXQrpCMrWv96",
  "key22": "47QzqwF7yAWNxgeJzsBjuAYj9KAKm31pwU2voYzqXX8Md9y8XoXaKWt435xSzD9bzSXXm8mVx7LSkxvnbP4jG4bA",
  "key23": "3VtEfsAWSXpay3b716fxogkn3NF9JEmvQzogWfSLS3n1QFvrxAqhPZeBFgxNAByRqJ1oZqtrUNRQvqWq74aVAJ7",
  "key24": "BHnFwJezzeU4ytr2Mk2DVcbdks3QLfF5qffiAeKLLgLjL2Ytg2DZkuR6rC3FtdCN3u2VcLUBvCeBXNWMc4SZiMw"
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
