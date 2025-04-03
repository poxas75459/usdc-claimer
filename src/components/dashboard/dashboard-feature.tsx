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
    "2C4ZFxcfSNjsY4XeWDYeRv98fbNy14mYCiro9oHP9sU3XZCAxnfSf2GXyZwqpwWburdXStzTLtNtecM9BW66fjKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gM4BYAFWvPeTskWkYfyrSfHJCZmngnQ7JcyQAH8z3LHiePQtWSb1UDRUxjxFhoa38apzQ5cNgfTR4m1Dh3cbX9Y",
  "key1": "29U1Eh1FPVZ3i7QjMgynJP64dkZSyCTWR25YnZL4f1Bnpzdy4yVzzKukknpjKP1JyEhDHHDYG2tW1eFSNV2bPHYr",
  "key2": "4jP1akxMCwX6hsgsLzh7ejm2D5EycAvHPfyYufp4T8drAGtjwnhwe6saZvi4feE7MshSxmkf5Jz7Pz8oGSTXmjXZ",
  "key3": "5bsvnAoDPYx2C6yUPyy7Y5DRnKrXrBB9ZYXxW3zWuWWGVeEgKteYqaA7AeMQNtkqziLhCpSqtYs1RKwdkv1Bue5u",
  "key4": "4PUy1dKTD9AiRuSafq3kGpN46hUz2fBkcfehQA6LUUvKbE53GB9ErBQssr2xQ822woSpj4d63oNhy24T5Wbpenfk",
  "key5": "4ufsZbiayHh3NRrVxG9i37QVpRtdEsZJvDTmnHexFu9uKfC3gY4bLUk8uM9CxM825RNUCRL47RGAYrYK7y79XZDH",
  "key6": "4n7XME9dws6xbqhS9jsxTiajX7QBYX2u7nmLgdXqfuCJTNin2ekowW3sJUBAyWW3RJDKEJF1wgE2otgkPKHS6RfR",
  "key7": "5M7xLfjQYPCYoPZH6ZJFTJEe5FRM229LbtkhWRL6ZQqfzoBnv3RwSu7NmwuUcJZ8qcVsaEa7qKfhgMBP7ybK1NZc",
  "key8": "3keMbjkCWMFd7yVT4pUiVq5xZYnbHygBfwSMrcFFAq9ifgsVXxjiWoMJeoxapwxz1Fb16VAQ6FmmUTNLDehoNCsf",
  "key9": "5j4Y3LuGTnwXEfvr1oYwKWn6u98uyUMxL3Dgx48FjUffjCVpeNUHehvcmcz1UE56K1Mym8ic8YJpCv5dzvtRr2qk",
  "key10": "4cvJSMqDjXwhNDKw1bFDAnAisW86mF15XxhccKJjWrqjw1rtKJKzaK7ZMpGQQfmsqDgjvSRgLmwJQXGsnaScSDdL",
  "key11": "3WLnpUB3PpJRKPEeQFFNTqe27KUoijQnwkriC3zZnnRLUsBJcvSw4aMfua4g9jfPT5PiWdvWnZWE9GCxRSK8ueGE",
  "key12": "SbXSHZdvLtnrxGckpJWsRkrtqyKexUR5YZxLRLrZQRVAb7LpkHhpcWD78R1NFnQZtbKH9zCkToY9XzBLQvgu2wM",
  "key13": "3aoHNRpWBcudN5nTi1uZsGet1zbXmhPQ89yKR5DDqrYcu5Q7qzqpSBfxP9qkWsRDRr94WWHdfVBdK6yQ3DzvjRdG",
  "key14": "4StwxxzqjNBoL9CmCifqYrnPouZL3ip1bvesMcw7qoG2SxTXUAtA9iFE9gbgZZ3AYweTeT7w7JvuV6yM8J94irms",
  "key15": "KMJyS9wyE1whe7FHJ7E2Yui47j8VTX4GmLmrMCgqWzKE2xUSPsEDzRCEwaQnpFApPH1ZnLqtitiJiHWw8vG6gwZ",
  "key16": "3p6cUGXz7KkTvfJTqZHkci8n8fGwneu6Weppb1r4vU6UQYUHHTE1W2jpGvaBgHnaFYTMVFxdGgny47Y85uBFKn88",
  "key17": "eWDRcu8qwQch2zsz8xeSbqcvLHcGAexSA4GZ1tqUDiURxMpSYDFcXv8jVd4c26mGDLhRJ4LUCYMzq3gvNcFPnGi",
  "key18": "54QQMHkojwHD7oGUFVyehr6p6Yc8toeyMZm9NZ7Lc7AXx9myVrdVbtcS55uRGFc6CrhDe4Mfgsur7Cmm66ctQRZb",
  "key19": "3mgAXN5XbdeQ89TuY85BFCi9tVhX9jxaQFRHvVBJAz4SpUv7reU7b32kFZaedTgMe1cuXpSPbaMA3DAPWgKGiLq1",
  "key20": "3CbZVNDcb77BzpnP5Y2DmQeRT4FM6aNNLBWZrtPEdi777cvCiWS7vk6qdVSCqs5GCM2ahqHpxBoLCA6DNw9H8nwu",
  "key21": "nFwdVWutwksAaTmnqD6XcxxueQvM5qEGUpmDt7e9sgoqwdzLGLZbMTUne42vLfi6ESNUSjdRMQqteAR5V21MsDH",
  "key22": "53QGs4Xc7vWY64WG1AeoKyk3nyxQ944DYdSkwoZwEm1wC7pHv7paCgCuZJDJdoRr6xp7Apjx8zQfXdazoa5T4wou",
  "key23": "3YU71cNNh4WSsGNSUVrcddFafTvMga4S8KqZzEd3B5VCEvZdoWALbWcwRWQp9v99VfkYgihnaokU68xvFc1NJTMF",
  "key24": "sM4EovR4dt67hMgD7kPXXmT1s2DrwUHMi2Q7U5foH72kW6u6aTU7oVzoLYkqYSNHVDAxRXHCfYFYZVgkmFXS3dc",
  "key25": "3NUmyD4L81jEJ8BjXNd6ActSovb7KKAPBTQPaJ6DzP7i8XffqvgYPmMuv96g2tZyKusLG1HgU4hMZ2Q8wqsNxvZ",
  "key26": "3ibWJeHA5H1cJS5Yg6yDiCWnpmCTEPBcbeFwvRswNQdpiuNWP9ev5nYqEBh8bj1cFGc4uQPaevCCXgf4MsLyHXNb",
  "key27": "3fj7KYznqYP7e5Vh3F7saZXXBReM6zsBw84Bi45M9E4wgM3JHXL6Na7R5P5VaKiPvCiDzpR25JfQvsRCz55EB5vc"
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
