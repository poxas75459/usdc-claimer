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
    "3D25M5bYFVekxD4ZfVhrs7EacfdBYxsKpvphdvfZ9CgAU9GmhJaEJDNK5z6JiukyFU5i2Wi1vfiq1LtBH4VLaqwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLjSdKdUWa8hwv9ddSk3xaRGYzBo3fC2nGxiVVMCpSSaHf7mLLSxCSwgswfgTSNehLwck1bx9HKSphjyivq94bN",
  "key1": "foMng6s7xU5K7C5XMaCeKA6xA1LmiqyWNmsZkU6NsssWKd4FDgjCcAU8wjfRLFmKuXd84LUULsdfd6hMi6yf2hy",
  "key2": "2eixoCduBZsjLKkq7FK1Bco2TNwUTHWWVBntjpgUFRn7NMSfsSZWKEKS5WN5XVWn9Z6V6PB8pZv3xUpNpZE5VmGm",
  "key3": "3juG5z8d6AcCYi4nqWnNfBmxdUfR3JhGrDB2htfJVLkCMyuL5gpy3yQ38uYzHCnF3QK9YY9GG3KD77JQVFCJDThP",
  "key4": "3pFVBTokokmvxTD16Ri51VoLw89Qk8wuzNg8vPL74Dw7HanT9heqmJvVqA8fVXJESgrkbQehmWdgBLzsKCCwtZbd",
  "key5": "24DJWYo9h25PbstvA4xoRXf6gcUpAAfzimrPHT1DzErs3Kwyie8GETEQjRQDgGSbxdNz5vMNjXp3Nj6CumZwAvWM",
  "key6": "gM5Xoaa3XBR4fahdWp2Joaz1DVrXPBhTH2c31DKDrB7hHngbc65LEomPxWG6go6tk95Kwx21mi3yadMwUfXkQmE",
  "key7": "3FfqEoqFpPMhZAYQEHYqMRJyVvWvezRtHDy4w1TjFnjNwK42ooqRuTAiC7YyA6ArVMqnSJ6jB9NiLQAvX7C5fsGR",
  "key8": "2zGWmgamQSS7z91mBw2cTgR524PyYXdtELDHVs5VuysK67DccgrZFQ7QxuZguzoA8b9Kymp8a8BrQf1BSNAF2gxn",
  "key9": "5hKh7DzsrDVS4FUe6GPSP2z5ifarfvkxgmfh1PcWfAxMajkiUoNNUcJitAyGPmNaJRmDyy1yciA7M5PfXTeafbuY",
  "key10": "ntmwA89pwLXVvNoM64anPUCEPD3AQFB8kwDcQALrXMqFbhvTrhyFeCvPrWPqLUevcVvpWAN3iXdgfSxjkmhD34p",
  "key11": "5V3sXJNY7JBjLZyPCZkL5emwNge7HJkwLJvXdPFNY9QumJxb5jAjepEbFznRAMMVugzM9yUz1X5AJwjaEvUnbS9K",
  "key12": "TheYxFJiwxxxTL955mT1uANbMPqbBpxadTMC1p2xCyV3dFQSVkAQRo5L1Lm76AZSqN7jGNmZQmdfGrVTM1J9v5C",
  "key13": "2YXN5a49kBEXXXmYfLV4riorYX61aUtNHGBnAwo3DTkqvfsEjszN5UhrHUE24RuMikkhyhbmqX7urzDWhgVhmJLN",
  "key14": "5VdwScXyZ4gwhHBGgYYqhnSzbVA2phDbyTTMrP6vYZKjaHxGPSpSAwGTC7n5HuwPXCVvDqGfknmkCKt6UZtaKQR4",
  "key15": "3xqSuyKQuZWJU3RUvQXPum7uotwY5eH347zgeLZDGACMZxWRgAW5umzNNi8xeYn5qoL9DvX1UxzaxTPSNe5c5guq",
  "key16": "5xSeGwy9sLE1q1njcyZBoeHsr17nzmQkjB8xvoLJsQ9ympo9m4RtYf3u2iwQmwumDb5Zt6eeEnhs8vm38Dg4wJYm",
  "key17": "aaKBBYQqtmQjMid1Q98dcp63pfmeM6i56a1pYWf9BniCE1uMUDNzCUPFFKSLm9GMDMToYTswxxeTYfnBhfJUCEr",
  "key18": "32KwBoQ1E947KpQyBeg6s4MJx43C2E28Jvy2Y5eQdETf7BVzxfydMayamki3G9vgPr81nRBornvaqJoZqW5CEKBw",
  "key19": "6562CcoKwztqmRWXU7PBgUHMp3SiyyakkF4JNSDAJFRFKEr4dmbU9gDFniGAcGfFD6j8wyL4cHnAtYs26ZA6gZt2",
  "key20": "4wH7nB9xRc8q1LWk7giZ6M168VKUCvxEoipjicHXrhyNGwne2xEAzDmnfUsTabtGhQZSzzHH85WkXecbhif5ni12",
  "key21": "tRpTyqiv3YbAj3nA2HwFbQR6hehPEr4jekSgm64Eebfuzc4DdhJMxw5EkJRnhhU6e2vRsv7js2YVo8CR3j4QQWg",
  "key22": "GvzVfE7jyhtJQDbiJGjzVfcP271c3ce9Zkx61CDRtXsBC4jyzP7g3tNBcU3cNxFjzp617zDt8goYtj4pihJRrQ3",
  "key23": "3UNd6FhscauvdhFhfeYiRKqh1xEjsUTLDCNrLAkD9TMvVgi23HUuFB3gJZpU7kxKAQ86e81qEQtxNxsAfjHAUZ9F",
  "key24": "5uYNzYwnuJL5hqJj1aKNjQB6hsa1EY3HApFXLfnro51RVmGgNbTp3f5PPiVcgKQqYTf75q1jd6qm61zPhwvFEGYg",
  "key25": "WiU92oPGJUUQQ3695CS4CZtxf5AuCH3x5eh28eonej23zmBtnoRB3Kk7a6mcZRtRF2YGRjFkkZr3M8J1PKr8Sph"
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
