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
    "4Qc7AQ3tHEr5U2opix6mFePWGo7s5VSUU9q5XKu2MaLEKafTVJsv3UycP78VkgU2YJpa7gsLm12U3MYDnsNEnEmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eefyytrDKkf7AZyH5SuMfzQ9eb5UTwxLpyhUQ5xGF53PMaFDzvLYk2AKVTtDGFi7xgUyg2FQYtE82VzPVrf3y7u",
  "key1": "puhSAiPUwngRMDzWzDAJrVRDcUupkc2iQcY2V7xPVb9h5JEMjipoC49hQS5doidqnyEmXvkKWgqsksawVQprrkc",
  "key2": "3D4rW4E4R4sMM8uSh6WB8XbCScQosDRSyqJfQUFRSbyoAdW85ya8uSuapQBDe4o3HxHH1L8KSzzBEXJojGiVWGjG",
  "key3": "3Tx6qnmPrBrqGMJ5HxRhKBgKhmvdhtQfGAbyu76APMR218DNyicEwhRJpsGRJWTdxJiCdivwYpwwHYjERkskYyHG",
  "key4": "49XhMETnC2mobGV5mGy5naajgFt28y4jMzV7ZKFPBeoQ18ANHGYJMoFVGaq3UG9nA6KiifMPdLzk4qhj3BeivDk2",
  "key5": "yvJkNedERLDtVZxtQKRBWB4hKBtZ3ccFmDLBb95CvNz1D1vNcbNzwvWjzTfJFL4mvwipWuGwJPcjqyS8kqGBTXD",
  "key6": "4adBJpwDPhMHLTpneCiWsx1ATJvZeSAstbcHZNNsVMjJJe815xeKTJ2FNfgTExMT7k72busfyGFzzEWtULTZz6Q2",
  "key7": "2YVr5vvEnWEwt3UMYNRkWEArsTvjLQmhVRUeBak3YGCjcHw3wQYUVMP6iSeFWRJjRiVnCU8ajVEgkMxLTwpfvF5T",
  "key8": "fLxJ8KfQGt3tQHXwLpZk4a5tGAz8DjdsemzDQx2nRNC7fZp2wYnv7BsQUQnDoaQLEmgabHCm5pN6Eoec85sAr5D",
  "key9": "4FrihFK89hwtmKECQFLGZSR5zRZMZaDMqZVVEsk5PGUhVt4XA8sAeM8mW8fuu9UjCQDVyDMGaa14jKHgepfqkn6H",
  "key10": "2fVru9Wuuux3sJk1dwrEnPBPYoUAme6xGxNBz9DyZk5cWc1ka8fPAGwKBufBxVgPWu6ufnKTYCncTfKr7zB1d3oq",
  "key11": "2BdKKmQ7oz1ex93aubnkH4yGeHRvdxPNkwNw57ZkAjXkhHiKL8QtgLqFDj53S4sQ5tm99qvNQLfZW6NrVyrorT2L",
  "key12": "4xuyYquoQSBvUy11YyXkfPMtamhPZ9TZyxMohbHZ9Mbod5hY5iSWQE62X32tMkNozBQsbXUWjoK4144Doioqro6d",
  "key13": "4DSrnse22f4oHSRTPcxJw6NeMwYNnaHYgumoMhQRghTBUczN2gEHekeZc5y7jPTtLdsHLvvkkC4PRw2Qf7gBBQbo",
  "key14": "3AoNdkdcM8V1a7RzCCHyJzTDJoJgKDzpBXG3Ld5mEhnsBSaEdbSxk2TsA5m6M8RAqbQMHeofKi1vUpS1mgAXKHej",
  "key15": "2y42wSKd8VjLQNAV8A1C2TT8QvCPZiybfRhJaieDoHGKMnG3TyeXTH7d5VmoEbsnGKrRp8Lho8FvpZjTutCb9eUj",
  "key16": "su5ziW7965H7re3fT6QRthmCEMdz55qAskBYXARJ3XkGu3Yx3WZkeE9W83czo4MWrw1hbPNBxzAaz1gozBo6qYf",
  "key17": "5uFTewdPjKSDFZP64wRAenUdxA3RWx2vFd9jw6936Ve3646F5AjJ8egGEt9VM3chBdE6mR2vMafQkvG4GU5edPD1",
  "key18": "4gBKpzXEGtQbLuGh42vCqkwKAsWEWqkHHBM1AM8MMKRkKbtN7MLh8Wm8tLuDW9EZNUpjt4kWV7C13BN79JiY9QhV",
  "key19": "3nF8BqM3TicnkhrKMWceoXopmocAvSnEop6atWin9vR4mF7rshNLnKY2fWgSuJHFaULXedFgsizxhkC6eQihK1Rf",
  "key20": "4REmmFbZPfBnwqEykHw9nAyuwGY4ZfHoUiDCY67khM4wsb7Xs6VLEfs3B7KYpSHfz4uTcokkVmxvrEfRLqG4cCoE",
  "key21": "2JQeWozAphEpAknPo5LASBHQPSapsJE9vjwCpnfdFLVFisy2mXaRUt8txCXB87Bp5Hiyugw6bPhYGpLkJjepZc8G",
  "key22": "2TNAcQAoenufma4bYNt7uB14e4335tFgnTGhV8hmie6TUEqvdrNkzxQv5zpcTM9dr7iayBpUKwexYovpqrFPHeem",
  "key23": "2hVnmFfjtPPBfUBhHQraparnt5dJDCPXNAMiEoKzC9GthM52s6xCWwDa7d2pbpFPNHtWxEiZzGLmRYTq4WgZgbsv",
  "key24": "64PAjok3MdihkDSqjmv7gmLyQD8QP7MeitbmWKZKncX6oVHvHJTSzRm9XRK1sc8QcDiYxds6Rd6DjRAkqMibUrak",
  "key25": "2NzVMj8pirN7GNAb3zKZMnVSf8DNq2gsshqC2i69YYZtekXaaNighYK6S3NaRQTg7US2RL2dEnopDbjGsRH7hWBM",
  "key26": "3XzBMKYrMyKXZnhHfD7qcmaXTkisEqkqLFUixLbRsdFbEN8TYpqMEZz79b6XcLwKA6FwA3Ry4LX7Xyxun1FosTyS",
  "key27": "31i2Y6AirbxdJc4yad911GFGWBm7ek3zDEtMzVcKWbCDBjzcvBLUkUm2eH4Gof9gHZM3cTAkj226GH51s2niSRUd",
  "key28": "4SmriWbA7yToS12DgTMarP9LEig6z3nJ7JFYjUwQ9cAZgpvvkXC6869C4ypbQQED7iaS3MNKughAYfkD9RURhbaH",
  "key29": "46j2FSE6fiou9FuvEvoqpr5G4972tBb3yDrcpWdEYVgaJYcNFPcrt6DP2gckv7iA8vjZk2sug19T6Ljh1L77fDmG",
  "key30": "569iJkWvLZf9vxLqknxtMujVvbFiJ6CoyY9YRhg3K818aWz9QQRhbndzHAmrWGtz1wb37Hee2jQ8KQA1E2a17XpB"
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
