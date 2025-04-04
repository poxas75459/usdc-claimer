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
    "2ug74z4TSXnusF8vcE9wJxAC8Jr8WVSDdbbcX679uk2FJNBfUj3VLfNM6KJzmgWM2zc81Yr1jTwriRmnuWh7ot74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21TqcTnpWtDwtcjzBHfWQC9JwcyCYtftDQJfBS2pZATQK7Aex9HiMooquEeVpHTpRwkpGuBZWsGyEjEPa4xwfVzz",
  "key1": "Y7744sQJso2yXpvNWM7Vk7AL6YSLoC3X22LHTaEmcNqiRGk6YeoGS8XYvFq9wrPFcT3gE7iuPYP4MwsE9AqxGdf",
  "key2": "54ZagmJ5czgWYnN8ZkGFKMK29ahhQLSqrBctjpYYdDF4JPi8yruDxqvqMy2394FTnd1Lv2fAQQPZvFiD1MPcx5er",
  "key3": "2YeFgDhEYWuvjc5vQUMZUGNZdcNSL1j7ngAF3pa6xVrGcFWCkEJavEc7vKxmULVDq6VhmMLnKuYtgczyy9kT6b5a",
  "key4": "51ru4CqBwyZXTnuL3C1nYtpKfczUuw7x3SQ2XX1AtTQgEzeP24FnFZYQrDAAyyGwr8mc7J7sex7ZfHTEnEPecFj7",
  "key5": "2Ptkj51aStshLFL97SnqnbYsNLdNAk7Pe49uyQ2LsYgbUvxPK3z4fkZRJsyPDnGBvi537gYFByuLYsbtkLtY7tFD",
  "key6": "4P6KXp8U1hfSyTMdcFp9Ytf38cgMLhjRGV9CLNRyRje7Ag6Yw3YBVK57J7KMT93b97eD1yc5P7T8TameZK33sLLa",
  "key7": "3qpv9r83q67xQXDKdbGjjP6wYURLKSSkVku7KzoTtA32yTcaT2WxxhHGfA8qLjRmfoUZRmdwQ34tBnKEpAjWdeFa",
  "key8": "593LZDJriCLduWiyFi6n823ehUAd5zQXKcBrMjTCUeK4P4FD8Sn6geVRtSzrLK93iVEAQbu2WwyrsJ4W2RUtqujp",
  "key9": "2oDMBBk1efjRhb7u4ECrQZFppBiU67DK5HvhF18Uqqf3wh2qhB1qYfLxZxoq2qpJxnv7Ph19AD75kXoNYUbErnTo",
  "key10": "qiqxZe2kdJ2L4A1D9o9nLjU7Hc5XtaJCWEHUSt5LLHyjcnkFQdzrirnySb4dLKjgsAHs6bsTbzSiEURasHmzrex",
  "key11": "LhFsFja8WFp5V59MAg7233j6osoG5MgG9Ejdrf8sQA7HopChKRT1hitjC9hvi1tH8V4ZPW8rxbarAJN2zscBnmq",
  "key12": "g57ndn6es47Po4dRmnoxw2odf2jJexiMxxAW3Z5rasfZiWb4Gg6E6vtcvXdpT6dcjzXJLhz8BnPrQbgHcKXDVJq",
  "key13": "4BqsfbKXMzAn6nimDyAoBRRAErnDpcyuab2cj7nEHy5anTTk9J5FAukrucAPLALhvirB2hWgPaUpVpkyC1EJ9h3z",
  "key14": "5Zmfg6qBGQwt71Jae9qoY8chidiC4dQQQb1XqR8m9gaYyGbLjVYJXUtg9ZzMLUgxEEwgk7LYB5Wxnjv1qP8wYgVC",
  "key15": "6wLbtkJ6BUUFkpFCMMxrXFbHd72u9uytSSnAi8kT4PfftTErJha9yY1Yx74BsnGKA8gfww5RVFBmUMxUaFeWhd8",
  "key16": "5WgQM9RuMipjDGQzWv3i16WhZp7ypY8SssA7x6b9pgf6jaKWqPYComXRPxXP7HKoLeNcEEB4TVeQ8ryPZeVUxpPU",
  "key17": "2DwbJUW6uyECME6RrKhoyeBns7gS4RchSLbS5nL1gdQv6qWwAZ9q8LCfK4XuYp289uwtPCJqgcuPTE2ftkMvEwUE",
  "key18": "2VzYtK7GkkxPb9gLhY5ZdUEmnci34RmPdAdxxZyxk5qRe2VPuxzj5Dst6ZnkFhJbZsZXeuZo5KLNK2RXXD3mctv7",
  "key19": "xVadqZxRJ3K8yGGSeDTANQSznveNVW4sadxac3Pjy2aAYcLjdpbdznDF7GPweRxaFdB9qACWcQA2zSqz2qtGXsd",
  "key20": "4qdFNBDLUp12dkw7guoeB1S3nVqMtk8hpqCGPdmuKRtSJLWyhaJESr6BFjL73T5hJqttW47gbpEWX3rGKjZjsXXN",
  "key21": "5smQK2bDRrmjuSF7aXnYRp3xMd5v5u22RCL1Ufoyotr9DJt5N3MnDPPy1rZHJLXNZaW1P5eyKMvvfJdHBh5LDmy9",
  "key22": "43Fjwb8qsKcd8bxuEHp7g1UNNbXFz6BpmAGrcJPwPBABbQG2ydKvbCBGPY6oYEHcsnY9LfwqbjVMWgsX3cbakfSk",
  "key23": "4sH1QJFoStCohBUJGXtKDDe2Wd3evKj696kTM4hbTVWR4E5AQgnYexPfNbbbeWSUNxAiMFi7vU1USmSbDDRGGNDV",
  "key24": "231S9BhXibFmpsMbz2HQaYai17VgP2iAnynvop5SPFB9Fdtx4pYJbsaUDrTG2xL9nxvzEj27CspaDkuXaDdq4Gm8",
  "key25": "4oBLb8s1JYjWCbqmAR7qMUrFQvNiAx9aEMFrZC3zXSmux2VRAJtckcqmv8futCu6ikyPn3Ud47vR6zd5xCpBXWfD",
  "key26": "ZpT7MyJPT8ZTTecREAJS99ko6gxh9UoBLjP9ukgqxh65No2eFmEA7HJUcGZYrFnq4qdX9LqmWTXshdig5hNtk3k",
  "key27": "2cxvvZ2jDZQTT1hvqF55bxXY33MmG11M1n4YQmEmMVu8dq4BnyiQFa26n91n9crFi3aRaza5mCYEVxj3K9x78Qus"
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
