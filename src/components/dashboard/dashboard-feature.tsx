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
    "33YKK2QbphtXHFd8LhFCYQWbtniBLqjiebP9SfA68MHP4D2zwezrWVEZQdnEPxHPoBrsqQ79SE6THYYPkvpeMhVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCLMQe3K1mNeswB4M7Ko71jrENTU4kwog7hGRVj9MEea6qvynrfSu2c7BpsLf2fpLaKFBHBPXgmvU5S9hiyXbDz",
  "key1": "LrtZVzo2kK2VByYRu3phrz9FdBFjGXQX4KZxHuGa6ygGamws5Eoo65qq62t9jzCJarUFDUg3kNNy2rkBfGECn4q",
  "key2": "U6KAZSuYBnKuspmiyTg5KL1N4R3GUvV3CCSGaKj9ZFipKUgcUnUFU5HS51ab2J5sqBej3nGng6ebdNGQoLdmaUk",
  "key3": "3gr24VdjCcZUbqauPQBCqePkWEUSGaDjx8m6dH1zYHVbdkB7bW5hj3vVVA4XQvPTBanmDdRHo9YyPu2jHbyACTEo",
  "key4": "CCDAAPkYC51G1yDumMVeY5dVLyTNY3BCNoUQHvbBSE6VLRzYf47rHobivk7S6fYh3iwjcmQ56yVko4XnyrP41yK",
  "key5": "nifMgoPJ5hMPaGRNsDLeATu4KYLskTxE11um8cqmE1aJXC8ocwRVMDRt2bmMciVfvtFreyULxDGT5zZjazS5k3g",
  "key6": "3qSbhdYqudn3wt98S54W8UViRBuyrsRtuc2YtXheuSmm6DoiaFfvUf1YkaxbQyKhLr1ViVAo63wGb8Zdvs7smq5j",
  "key7": "2BamnMZ1Y6thE95rUvsrNqC752EcqgrY28f4s3vzJqrLNpGDdF4HbtzTd7FfdizSm71euE9KXyMaPji6x93spWFR",
  "key8": "nL384abH2EFb9w3mZEW3X1SEqbdFXQuB1UdwcH82XupB3yMR12kJDrLJDS59MSHjDzV7oe5MwdrReNx38yXdTVn",
  "key9": "2ghpoU43jVGYs36Y2ngYRMkdkwsCz7ELLWvE1eoVfZJG2yRwCcjFTbewULXMRJkfgVUW1PAYZTmkY8mVJtKKj93M",
  "key10": "5Wi6DqWCsxfZZviNi6A1edTFrD9dEWjWVCg8qELVSMDpq6CWPnCySpJR5xyjdwZb1kZJnw5jx6mxPMC68WB1CtUh",
  "key11": "5iZgwR8wVRVJDxDUAb5ciVtqKdp23tuTvRQrm1gGFChwKC48Vm3R2Nek4kNjDqgFc3LDwbuJZXR8q4ASDFDb1HXK",
  "key12": "2PZ7BkxHPGjt2UZC3XhwHk7VVTe8AAmVoPtc7d8qHVPBLU7qr2w2fefkhshKgmYqUsEL9kxLRmLtTC7aDU5LxBJ1",
  "key13": "4154U77SHptMRS3hJRgxWnQuG7r9Dz3ANQ7eQce97nX5rZ6y29GNC5BQYFKe4o5n8a9VJc6YUgB6uPnYKV1oz8WG",
  "key14": "46GyzMXsZip4tNYA2GgzZui2PtLxYy6mCYTkpq3b2Hf2HgXJeHqG3e9yUshX8WFRvYrfNySiKX1TFLo8bhxRHCbB",
  "key15": "3JhLgzhqYfDdvUXVnnFMKduEoKb5LWazWUNcf9AbM2fwSqbxE8V7QtdTrq5sUQFm1Kd6sviNHAP2BtTGA5F9YoAH",
  "key16": "4BiFoz3PC9ET5qo2kGuN6ghny94UEBmEECEgfx5ZSoSfJzpHpNjZYRjdaQtvvpat4tiYPSABziHysuEZ282z5qMm",
  "key17": "4VhbZ2R5mBCqMd4eCN5e8z84bee18Hpx7b4yXtystjcxYuoTqcqhY1B99ThaMbDd5k641VMhtRKrcUdfq4LA8ji4",
  "key18": "3uwxaffiz4hPHnnjTB9XS12JC5kq4HLdEpJkjsSFGSp7vy8ARP6A25hrRSWLP64n92AWtDiN4etEtTjEDPL6Qwpw",
  "key19": "umwZrXUbuBuxBxMWfyp8VxPPdt4NLsVds8UG7VNQWnP6GGwSComeyAtvuw8iQ2YF6piu6E9a9Vpzgq4AbYWFQXd",
  "key20": "3ePNFJb2rapgv7EmzqwMH8jjyiq6qZGafP4g4gRgrWVptcAubKmiynsQMfUF6k8JszRjMbG1ZQgziWnxEPmk7zLL",
  "key21": "4sPT5PYK6d6GmB15ySgdzW7zkk6aZVttFA76Wg8qXiN9p7trS1J8cUr5H9waaSRDrHd43KkiCat5rjXuRtcZMEJ3",
  "key22": "2J7FDogQAyt7Uj76LmHJBnbVAQcKDRJGqoZzZ8X9Hm5siZe6dBYvDjWp9ccXg8Fx9dCwZGW5J42wS2UxpTdfhf7U",
  "key23": "468nqGSPnxtj7joK1hN47Zv8rZ6wdCaec9JNandEu7FM1zutKiVVTPAteBfJhfgnH3ySrx6L7JJUoFuQ71VhLaE3",
  "key24": "5kGx9KavE6rJb1CCiEw73RFqqEpNMjm7vfqyLiU2uDfetaWKgaxGcQAFfmuUkLnGyKF7mfQfwL7fF1S7bvGaonS3",
  "key25": "hWMGNmUyUKw4d4vRDc3gUwPKTUvtscN1t3zbfSwDv3MTu9yPcvbtENCaDCurRdTZdtXKzH2cEY76QSkiUWZ27P2",
  "key26": "3W7561jUPRr2qQYouYtNy3x85cv3wsRVyLLHwiqz3dPHrdeTTgfcM37rjph6MRTn5Gub1LUZ63gXATQvJiWZbKUb",
  "key27": "48VLj1dc1mJv2FMcHEpzTR8SdioQ4xeur8bSCZqvuf51tdutPPSsHaE7jKFCw8zXJDkHV4axApvsgRbm8hRG7vmr"
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
