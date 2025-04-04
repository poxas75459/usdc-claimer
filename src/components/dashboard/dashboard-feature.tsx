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
    "4VZCLCP5grWRGVbZgRTuy7wcxgEqxJ8MMYbwf6PmpZ3yA5APyFNZo7mt1LvpCys6C2X8Bw2Xxkg2TPebQqYBgVSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnsXsFNkqfBA8qWvyrtSWVHFdib3hsYxV5L1HAwGsNRBpYjYe7u7PQzgBxLzAf8pSDoUsG9fpCQH8ydTTWAJj6S",
  "key1": "42mWvtVivigUbEKnoGYTX3cWK6gjjzhh6mZdjzYj6qY92BzmyX5sMtMAXMmfUzBYCBCdGC874dVXsaSYE5oBQoVW",
  "key2": "3tnSpS1v12i3aK5tyZLT7akkb5EBBTTWMK58AJfEY62LTzsNSWDnre1ZDMsqqrCXp9EmhXwdGcjLQCUWkKdLKr7F",
  "key3": "W7HyHUnK4tRfqsX17uQMj9LmQJj4Setizz776rgzC4GYPJDP45xDTVj4HCoYLr9Hi6DERYht1vsPRS9H4sx8twz",
  "key4": "58cR8HzQmdqswiYC2sRSBQnZS4BuvsRmbNDh2Rdn3wt7MdmN9eFzoTgq4Rid8ALSsDUL97CpSmNu8mXfQstdAL3K",
  "key5": "i6FZEnxo8mgjwK7pz9BMK4Ti6Nxx1X4s9b4R3Q5My8M96EDcGNwx24d7mH9FnhqCBE1c7UPzbShGohNVvkYs4e6",
  "key6": "5AL6Kjp3tjcjPaMhBDq1PoWnuh8bARcwvL7SK9z9XzPaAUMvBx7fdkpkWuPPeS3KqSDuEDFy4JMDfHX4DnCmU1ci",
  "key7": "4pCx6TR5WkZGjXRkXEriAoJuCHjagezkGqQhy1kjj286Pm2CkQecfzCQe1V9Wd7Lw1hQziAjWHw8irytgtg7hSW7",
  "key8": "HXxVVDemUH5MXqmfiq65WCd5dep6gs2Srd98C1N9nGwbZWodYq8eiBCiKrZv4xKXAE62P6vcXTxn7emwfawuj97",
  "key9": "3ZQbMPdYL6dBSamwf1av43gC25JkPZzEb7Zyh7L7356g2mthRWfSjx5Vyy1d8PQfWjnv7sjg4r6Jd2i2MgJQymFm",
  "key10": "afVfVuo9mqU2NEhDtt8njg4pHddXZhVpyWTjQKueN8wm4k1MV8DNAg2pjsufSuZVyZCRyQtURDGyouimJFTupER",
  "key11": "4ubTmrXNqVX8WfnFPJaeWLoKruvpvYQeAEAiNcvtcD1C2w7cNgKbXYprR446mLDWd3LRMMSFHa3sngQriUJx7DcN",
  "key12": "566hB7w4yEUHWRKKScZCaet3qSWU2cprBaSbX2uDo6DtFC9R4PbeFrZkqcPsE77ThSw2cudsRCBKWDjz9eUen24j",
  "key13": "2iWqn3msbbLUWSrDymyqQLJG4qQVLh9uQY3tigEsdjYozgFbmFwCq4Ahyt9qxeied1pkXg8kZn6WXAGAH8JzV4JW",
  "key14": "af441CjQDt3oS6WYt33GL16pV4xd9nJDkZcsDBLZE99jwVbDhEuS6dQu5Fnuq7vFZWbtoAeExJRYoHi656i6ZnZ",
  "key15": "2GQjk7aBLmMY8c2ZSWKYhKi6JRG6tJKzNFfFBAUvjt2UZEXeG7SVSAMmtUDFjUrjmt3zCDexT5HZzzZb4efU8NJc",
  "key16": "5qNzgia7KWcaNpoBRH18KpKP3nmt1SSLPEyRNp3fiXWDKfcpRNCqLhXufmjD4wy6274puDx7VnqkeRZtV9qMh2U7",
  "key17": "3S6U7fiuyGsyNEXHHFDMAYmr26VFYPobPrZFSLxCDK1utAjofWpaUJUyTNVSiVTgo5TKs9AQXTWQknqfRiA6X54v",
  "key18": "fdHZtzXRFTYJjTvbCdVavW1BSgfiDkXQStLfNsgvnZrKYHfeRKjDcJa5aMLqLBBfncNg4AsEQMRdNXFdcbZAqR2",
  "key19": "48g3JkXqypJ3MVWucBnB846YRoV962Ncs775J7unqLjahMZMxm8egqvS28RWMpkwDZLMasHx6YALoRkA4YsNsXwV",
  "key20": "5A8UkxPcmd68NzzRNuU3Vk7xuDt16Pi1atZzNLmRX6MadPT6NGB6hx8Yv2Yf6WkhFY4stD2R2JPqyDHU5N7qJRCq",
  "key21": "4rfbX86BxibPtbRQTBDSdekG7w6KwCLAy5s3sG1Jh8n5irUPCL8qEr6ZFmYSm3QVH7EFxbwtmMRFDzWyvssw68LQ",
  "key22": "4oUzqSJmPk8CUrWnyGxeptjfxv7ZkS9yRbT9GqCe75BGTe6TfBrCzABa6SkVKfH9eCMwxucqtRHrsEoRupEtwp1D",
  "key23": "EiB2yEu2bD34Bv3Sc1WD8SuRGvGExpxztGaKrgxGUmdhZursurPxxJGzRJq6DWQWrZg2m8VCF6ztWBtxVPF74Vo",
  "key24": "5XiH9wbvHodskTVWM8x7oYZxobrrkbWgpYiiU8vpKB4y74691aGKdVJHUDQ33MKM6ds1QV5UqW3bS8U3RM5YdZcQ",
  "key25": "3rU79Dy9Tvc6RGoizmpYgqQgTGWjw3GnUSjQqwXoy7LDCaghhCcXJYHFnsrJczmdbytE5BBmYWEhGU6QhBoJML1d",
  "key26": "3x8bhrtw14DFX1YWnr6hy4LedxKT1vWvCxeTBC55kVvs41CmC5z69oUHyVjNCdiqdnADiZLuH6ee4tbtXqYhusQA",
  "key27": "24B8kwAmTf5yvNCktb81gjkUCtyuiME58oowRBovCrPLdFLt9kv9Jspy8eQCzg1yjsU8F2RJcRVtJyjYWGFGKGUE",
  "key28": "pHFGSbzNYGuVvWWEvDPKrFfPiirEiBnZzDzm2VcWr3UcEHxiyoeZunQf6D73XD9eecQfYehyotX582ysDEv7DXj"
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
