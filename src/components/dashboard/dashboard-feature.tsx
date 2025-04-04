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
    "3NjuPeSbEA36KM2Js6rm4Nbxm7QvRUt8nkSeNNhsLJUqNtXCnv1FCDHak4wgF4z3Exn3jwUx6rj5xfTTKfoaZahm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoFjx1vEeMAarZH37CxhaV7N5apDpGuutgwo8zKScuRwb5ufZeNPeV4VXTgbViyfPQNXft4GoaHumYH3DU9LnAQ",
  "key1": "5yyrQqXkzQ2wakQ87coSX197sLwyDYfXS4A2LG35w2U6YfA1zHSbxsSZMZnmZiSmuLgGPkcQKqzWh4dZv8sM6DSk",
  "key2": "4TYCzk8RJ7K1RYwfxPwyrQtDpwuj1cAdJAChxm1e1Sdug8Tc5t5b5NxpcV47gV3HEhs2zecbTsmtJjWzLDnF6RQb",
  "key3": "NKM6Rs5AX5EbDeUMJ2hUKjoDfrGZQA2JRdbj8xov8jSE4QMMrYdRUkLU6w6denFRATGjzuLRW7jffoKuTqFMBYX",
  "key4": "ijpMf9Dd1P9RMpksuT2oYYqdqhtodant6DcKE8JbXjczRqbDJyzn1MyCvsi8H7EY9z6FoFaScyzoe3bWHxiypw2",
  "key5": "31Gkf1dtdXurRTE6N3NnTnm1DzUPRcG6HZjok5YpprcM6BfS5i6p78dFG6jxyJXcewQ2swz3jmQoGXPW17K1Dhoj",
  "key6": "2m6L8k2a3jjzFcXB2ZX4Wk4LgopEB5uabGWLtDvgKRXWqMQvpXqgZQysHJnhMDVrrpVEPK5GLu3YKN2FxLz3T2AN",
  "key7": "3FnW2nrX3ynXccYPuZ34pfaDnwPkNLbkEwEHsoy2N5eKjYHsLy7ppUgat7FSZPGa4Gh6Js7J7Lkg3FeiBGDEqDiZ",
  "key8": "5PKwRNsY44zWY6m6Bownu4De5qwLNL9Vnzq2ydHsTpgSGZkiBBqFXLKBwchuJspAiGQjYYE4CKcvPsGRmgLxDxuB",
  "key9": "3XHzjzDzH73HYSnxZs6sZtqVLeYAMozUAmij2RdMSgfEoAZYq1CAzMf1mHx6EPhbkVnKBGtor4R6nyyCffLq9fVo",
  "key10": "2WA93U9njbvLj8LisiC1jAEjrKNBM51SzEnfBYsmdomyf6yR4HvFva7ZvF971bGr7KTKNQbb6ZinyMCrQyMBW7SC",
  "key11": "3j8XoqSnEeUR9phs5SVTj572Z41EEUn65ULQa3RrXiDAHwA7DfrFzjksRc9wEGKB7vAGoHHeQ8QNfLp7jjPM2eHz",
  "key12": "21GLTauxtNurPKNoeUApstWrSieYwrCqnHPmwvStrEKbmRbXzzPCiinDqLF7Ebg8AaYjpvzhrZzjZmV9J1JYDTNq",
  "key13": "qrBBHUzXKkKwcnZSQTQgpVoi8TCw4BwUscgQ71KVDDU9e2n7ToWc9pdcahKkKpJuHbyRpMBtrannbLwGjoHZ5yw",
  "key14": "45cr2dQy4GerAHFvABxtJt1NN6sfoXkb5YbvCtdmQsDD1D5WguQjeTVeVq7E5zFv7RiUQNA4SLzYMMMXrBak6sjz",
  "key15": "5MYjQrZ36edFitNFq1b2eoeMvkX3pKMbkWmxfaddKagFkfSyzf3b4HNpveDXxWbWFaAWBoZjUkGVCyUTgcN9U6Vn",
  "key16": "4fxWfCieSyg5WhLevK14yMsUwZtWSoiEUSCroqdveGsKpe8NnMCYQeRwZMya6M2o9jYffNfQHD8TAYyr6LQ7MmPz",
  "key17": "Q82rQbuZuz3xyVQHmB41zQc6jwN8HreQd9R8MoagK7aW3NW4yR1VGuKUywrC7HcPZHnihJrJurKNuo93vuFoaWU",
  "key18": "431eEuBLSwyALcYi8v25uRhXJfgdKK1CqsQ8Q6VBUe7MbNGg8WFCbT3KkvJqYCHzJrD9dJ2SNUrDM3BUZSadivVQ",
  "key19": "3sQkQkNDVSnGWrZy65hSAHvyWdSVME6k4CeoYCgYTd1cW69apNRk1ed1FzXWH9Q4kSA1KQZbmtk3i5RsWde7D2Tx",
  "key20": "53HPKs6UV1RmAtfGQ7po2N8FWaMMDnCZeyAiHZM9jLTGwCAaQvXj1xGgsshudRmukMzwppDkCkBDu5465Y9UUdf",
  "key21": "3oxg1dHL8cybewgueoVx3xPLGfoFDyNteUsQ6K3CpqdCUn8ZpAF4qmZEtSDmfPXK2gSnSngyTnFpLGaEjVVhUjej",
  "key22": "BJoyaJDnF2m11icvurU3bFdDuphVRbQVrexmmNxLTiHEUVnRbYQz2Uq6Jk4GMHWs161G8a2xxBpH1mwLS2s8ovo",
  "key23": "58BJMgbGZ5rS4NxQGnxJvVJULmtWXyDsyQ1kMzYvnXw8krGYVf5spTdqXbsq4YmCaaTLY2HgPo6ZecouqLNB1smk",
  "key24": "3v8h25mYhQ9M7RhyiQ6Tgxhza3GJiJHfngkXdbXMnwfNzSkvwRzqnaNrT7asKT1rZSsnHKfGm3xqtkBHmdPKqBmt",
  "key25": "4xiTgdBrCpyUXc51ipejdRummjC1DB6QrvU5aM8vgUbRxhesPjr4p7ETA7ESKMT19BLGpqvSYvj2NJMK4uJ7TiD1",
  "key26": "33sGbyV2P3tac1jXoxSq8Z455nfpNZWyPGUpKceGmSEabPavFpY3V1X7ZZAu7eftRE1n7XdqVw6qXYDsNGGeGEc4",
  "key27": "4XxUMqrBVMjWYmHjRn9cmeGJywtx8Bjx2Zocr3F8a2rzGNxcFTmiqFQWQ6pmuitfrt7bJpkJwFRDwrE2VWpmrj3r",
  "key28": "2d8Ve4iSFEqXLaugF7UXLDJKPn3zWqiEqnSeRQeNgMVEWN6QRywgKCxB9V5pVg5Wh79BeHQwCKCeDn2SnzaP1UFN",
  "key29": "37xFM7rEzg7KtYEXVJti2EUtJNKvPE1Y3SbmAm71cC6VDGFrt3GWywzM21N9eBtbFbzYJdJjs7Ww4oft4Bx7aLGa",
  "key30": "33trog9d4x7hEJoLBJYAnj8JDk219Ztica2VLPKK7c7NHn6EsRmLZZbpwUw6iFJTMeqM3Bu2BLfPuCp4Wuwv6ENi",
  "key31": "4PCrpn2YBuSyg17D2crYZKrXa8k9Xger85gojipakuwqc9hFqafK9js3gjDH3TBXpbsHj61kmxaSA7EknCYRPs9V"
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
