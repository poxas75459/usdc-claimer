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
    "4XkHGRbM97W41yb89MwabRv7hDV3HTv2gktHYWZe2P2k4Lkbei4cB5WPEWRAmsYnTYnFnpiAXcMVCxzAPfuJL8Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcgsSQzUB1bb5cCSVRhJTJA6i3c1X7fzHxN3T3cod9PX9LGMm95HuwaYo6WJ6D5yxoRwTSuy97V4C1CCrKmJCje",
  "key1": "3M4WQazYNYNNtQK7qeiv7XNV1nSZUgUsKBKgfJKNeJdGzia3QdbJebh7P7LGvfTXpFDXq9xqAwT8nqn16VA3ddjE",
  "key2": "24SpKjMbGaZwhcwKQCL39HZUHGQ1rMa4P33TTG3E7BGUXTtQY4n7UMk68tPr6hVsAq1XGxnL6yYibYBa4SYbrXk1",
  "key3": "1vy5hqnBBcLVrR7qMtyfrpHakofAt4F3XoKJzSC8oysgMQm6LgGaEUSi5FLFVeDqzSeG112SrjX5tfdPBg53s6R",
  "key4": "pJe7E7zA4EXkRUpGES13NCMreq9GMWBCk3DeL1QaYhZDrdS6FNbbR2MtXBES6LtYhNFGtcnLjAcumJ3WhXnw63N",
  "key5": "4LvULj84kwEJ8fWgYocw14119bTigqqvRqKBMbAHefrxyV4ntFWykHxv1k8eTGfry8VWBw4UGzDxPsMfaitsFAJX",
  "key6": "5Z2ik4bn2eMbV7HdbSu9ZH3b7mzQ9NDkeF5N35SoN615NGnr8Vxz1P2VXHddv5JL26BbfLdDwKEFHVb93FbcGCdP",
  "key7": "AgXGVQTPnS8D451gyDbjs2vhveSdZ9Pb4z9gFrBeB7hE4wwE8hJtMcscXPPB8Z24NrPrg8HTWUeYLbNZUdZd8uM",
  "key8": "2fQDWimMkeDz1wvzanqPRr3ok4UoaCUDAWCt3xZErhR731VjZVDZ7se3owVC8zUTC79gpBBmdFLCRknuef5BXJp7",
  "key9": "2DCNtgU6D6eL2SBVnQFiVs5C9XkL5UQfL9aHYHgEgtZk15sA4a9mKk9RFP7BHvm1s57K816UFfP24JHUkQ8uWKE1",
  "key10": "5AcJiDHViMgFYRdwCGBLYcQ3WVhPd7AXzfQGbbVw7gmgpv87UqdAvRXdFASVm6GPdpL3Q9FCaJ5CfpbBZ6cUdVyr",
  "key11": "5zxc6HiUbCgD9QzzySHu5JiYYZ8RWSJoUt87ZJ4KKsSu2ge5eQ6nvgXCKWsvdqE9UUdWYzgD7PryV2cifxmHmd67",
  "key12": "5w7SngD8kBxRTipes1HZCva8oxttboy6eFpgJatLfxMrePmScxNt4GuUDKisXWUTDFqNNUQWCWkVmudGxWN7TudE",
  "key13": "43ebn7yUiPVMPLes7b4nkBgvSrKh8SforW5p2dZ2vkxGzEznqVV4TgvGQPZMsrbeoEn56qEvZZJG1j1ykUxex8v6",
  "key14": "4B2StDmUGbDSXqixEhscxLftJBnvNyw9japoscxXWSnXTsL1g6MGh1CXwb1cAv8o1RyrY3yvAJineysq7fhmrLQq",
  "key15": "QxDVCy3ADktE3exg1v1yZX3gp9Veefu78zt9AeL7NoGDnkgv8UcVQF6UBBmxcSBsqtg6MMUHhvwXujh84fdno9S",
  "key16": "4ZBwUedEVbZ7hHPKuJv2aiDLb6a7jh2sP74JKYgnrwj4feAUNz5BjbnX8pgEqBfuydvqeG5NuUNfzCvMRoKXGRgm",
  "key17": "4aywmFfsf1YSaDAMFydyEMbZdS6igkQiptaG6E3BXgLrvkxnHPbgAWpodH4siYqYNik1JVqRRZQdivLCPZkrrvTP",
  "key18": "2KH5dsBKjmGDN2ThCS9XtD7qecvGKiwooW2BrjKCgBSQnW29JTfTqTXcRLtz6eLw6CZ3XhUoRY6uSDoKfp1Bmfxw",
  "key19": "5GumE7vEsaMzeUcjAACGubFeF6StAMknQvL3hGCXy27Hz2CYZcWfvLLHd8yUL7wbEiksABzB4W6ML9XbKTG9DEby",
  "key20": "3cjRrv9cwgScfhJVcpEWmDGhLhauNTUPdSVAjN2Gix2LGGaNxcv4baF9cpknDgTHNbuut4vi7mmwoMg4Edzytmjm",
  "key21": "73MqhiAktupNW4TrpxHcSPFgZh2BCRcsW79uWGu827YMY7KeKQzhWzrfVdSaT336mhjgXu5rzSMdvuUQB3G6qYF",
  "key22": "42U4SxyYuoPaAXe3dVR7ZvSVR9x49ckqYj4ZEhEKqmRCpwxkr14v2V2nanJTGFM3JvuBXscPVFwYJh7RiTVuKoix",
  "key23": "2By8aNU9N2HnHwuB9HCVNAir3tMgUbTyWGjpGkQBfcTRAcgQKyhRNPqSvfHzETvShRaBABYAEvtYqZ7Fshsyq63L",
  "key24": "21xFoGcLVYKEPcdEDPo2YhnuRNTbWQppodcNUDJjgmmVxLGwS3UZepdbo2ppVdgo7zc2b4rhRxQZvsoBkk6ZLVNT",
  "key25": "4REm2CLp2eTDKjvsXcHv8PU1H8S4Q4RTUaDBaRwPxLGzcoN4iV6DRmjJdMTBzCJ6iYFkZzr1hxAM8iVzUzz1mKYT",
  "key26": "qzvjRFxArUP2vEyteauCHz3E3PCS4pU4B9Te1KhesJGLKFedd3zGq7wwrt9L7tPhsHQ8GwaWo4ZigAh7UBRXzSh",
  "key27": "2FgCRa9dsVacQXRExeDjcRLikWJDBnFeQJ7Ur2j4o4oNzbUAmAcTFysvjM8e6tPp9ZreLwj6zkPuJjtaWBvkM2Pb",
  "key28": "5Rx2Kwq3XkJQS6cuVJRtWFKJyzRJEtpxrdzruy7BQn9Kwex7oq9mdEHCCWhSGaKRNbxeRi3mfdJYTMjZMc4RuWQH",
  "key29": "2epRc86xsQb9wxARFn6sC24G5G48rjU3gC6bCsg426vbSZZrzkc3G1qjGGM2x71pZqbBUYd2zXfziq747eggQwvV"
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
