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
    "4JmunwUxSkAL1X3DauQe6yqVNcfgQ1pvwBwQkqwKNv4BsdLwHLN5NwvcwDjFQrzh7GCv5K8pJp6k9X2LHQvaQywE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xj1U1DeaTAiRu5JSomhisLXhDuwttwGDcE5pMqj8EcUydjJHwkZuyNVPAaZ6NRmNqTmAs3D8FX2AhrCsjBtZ1Dk",
  "key1": "5V26UCjJwnSqYAEHro5b4UjXyCjQ9fXLZJqx695VTB9yzqw6h9iAH1iBxuDwRxmYVycGMtKe3wakpJBZpZxbjJAb",
  "key2": "2YoXhdHQTCxg1ieQ7rZ6SPBBC4LPJUveXCADNJkxsPT9GMwPNjk3N8Jo3TvZFoS8BUsVGYTGcVC7rR2mPgdMDAfT",
  "key3": "5STA9rofQ2fwLXxtsMX3ujDNQgL8DHLuEqbFwfpz7GJUnrrGRUYXaEqMbcVU7xvouwqs7gqV6SGCsoZhJhpXbtz1",
  "key4": "2nwS4HGFvvUSxHCoLxgmXZ2W9xhnpKw5fUJuKpu6G7hkFtUMFobAhkNTHmTMTg4afHduPtZ4znyqrqZzYoMU42Bs",
  "key5": "4vBV2WxLhENyyeeuZkB4bNLsDpqcgxGq9xAfqFAtkGTnBv8i5at5bRBq4tnFSY51trknr1Cx5jkNNwBoafwM2s6X",
  "key6": "2uNKGB6Td1Fq6aTXjLYiAV3vrGvQV8N3K8QY388gQVif9987mNpjgAfuNuJBYoHAjCoCZPCtNrUHyZf1S49oHmuY",
  "key7": "2HNMVpUFY9kGnNDeHNQpe4sCZCC2AKV7XzUcNDYZSGQnysoK5SPrz3dnQVi3QxgSzMjYeEUe17FLA16YR5GA92xd",
  "key8": "4csCjYqYD3zBBatu2h8Sbxi3XRtuxqEvTA5AbCqCMHnR1N4iRtFk9SHEen9HYn7hmKgWTUSSx1ykuPxs99yCRtX8",
  "key9": "5oKdSP96NdoGxc2ZetFJMAYgdpE9fYKKXdcZ3UU6Yzvq2ceQPNyzrjGkyqRZaMwu1BkS6e3H5XqK4LUhEbEqyf5E",
  "key10": "aRU9qm8ZhrDuFrRgF7Mbp8kH4TMkFRFVUqpNfphrHFDp8FQtWvHJwH2AtTsSEhxrvumjQ4sArtdoKUZFwnYobR5",
  "key11": "4wRifwrbUyFAq9FgcLHVy8coz9iMkfhjz3GQhZy2MPEHoytWWPQbqfGvnSdeRUJcNsZodZKPKPSuvJASr4Nfu6Ju",
  "key12": "2hsE8zuD79nZGnmnjk6eQkCLs4GGBCBLCL2L1Ym3gwj5vcuJERLkyEp1ZsbzRSShqnofWGDKbU2SbTjvBDucRV5f",
  "key13": "3c7TMWxZyE6xJ48SMjUPt78TrsGkrn768guZHNyHSfh1fcoFgw5RBSynHdemia2K58VFZ7t1m8SPqEGYPpDdj73n",
  "key14": "AEcwXg1kxnLb39DS68wtUMvArHsKhUavsdekPfojDx3v8kJbKwMuFvU67Sht6VuJi1yW3e5uehKTrkcZxsGZbtv",
  "key15": "5nog4QFgWPPKkeX3pK5Qy4bbnzPMeazZE5tJteN7YUfCf5nEACPediQXQT7pvz6jUYvdRpZR8gFkpWdVA4bQkm5C",
  "key16": "jGcCace84jAj7zdyYudFDmPXwtRkwBgNgJGYrTdbVAMgJL1pFfFK5m8H88VMeB6KnxRC2GLNZXuWD6dQiHYxrgs",
  "key17": "4qYdrD6qa8B5bu34UEJYsrAcRT6e3TXD3qCPqruyjdPHzroYFiMYFjHgknJHG82jQKZZnANvJs2UMyJ9EnMDBWiw",
  "key18": "4HURp1jabkajFpf91iZtEx5sPBwuZWjbm4qa9X1EtW83e6bAwJLZeKsGr6nqqahmpNpHdgHFdfEJZuZPL1Vfe3Ko",
  "key19": "4UY7ot6NGp5nCdcMcvxELuwoYLnLXtvwp8VAMVUoAY6BLqbqbr8Bz3WRZAhkPDjYnd69h16s2jnbLepb17t8frLN",
  "key20": "54FafKFCNSw55sBscZUdkSfGe8FoSHWrg6fh27wAhn57EDMnHiipad2HW8V4sKsXX6qRxekHB3SUCNPKQuHUteXX",
  "key21": "Vo2QEmPLtUdQ6KjGFeaZaX78maeop9g4MjxDhRDcPmnPWzCCi6M7SjXQ7GupUwsH9ShojRycD225Yng3LvkHYkT",
  "key22": "2YRmqpx2M3xSJbEzV2AF8LbTGq63fUbc47M9vjrPhehXUXzYoH9rkpxw2qcurvhswjoeqibYJniqrN5sxQshKEzC",
  "key23": "3Lq4qdDs33E4d8wraA63Q1fUfHB7DfqjFAkWqiFCZf9ohiNczjSX8eGVNHKKLLw1cxBChZLUQNBJrXErNUDj6tPY",
  "key24": "39imBnGparKurcEum66EP1DyxH2FBafPfBirgv4yJBFbykjL76ztFVzqBytAonKd5UKJh2AgxXdmpt8kFbJViWhC"
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
