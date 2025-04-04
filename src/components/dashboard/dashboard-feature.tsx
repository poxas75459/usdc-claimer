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
    "3seGXo9ZzHwi2k71o8ifCDT8vWGtJMcmxJ13o5Z4EEoh6QLzdaRviAnApm2G1HpLmbeb9LvbPYqhWxNYnyZKg9LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2hMwKMtqwg9Tfc3yYaZ3fkcsr5zdTRYz2FN7u2JavRE4m6N3nSp1hnCY9sL6yg1yGTiEpyNrNYH6pbcjAkDb1b",
  "key1": "2uuGYLpkXyUoFPEEwS5d5NAkCBuFNHyD8tcKYCPPLmuUK1Ur5DGQjd4qehZeYMRDwSHfBvgSU6FGfVMRSy6sE2qJ",
  "key2": "4LvahNM44tUeWj6XMX6crt3fYYunfQx176BMsuMqVEB9hYb4yJkZ1nETxbkuiemCE6HHBzDvQ2d1pd54GXgUQUb5",
  "key3": "5mxjB1ApyZF7EnG53ecUmPVMaBthVr7Kk8jRf8qyT4g6NuXQwnpURtXofrCRuHG5nvpFggiy4bcY2J8238nvCtPd",
  "key4": "4L68XFH9hMZYjwRGU7QGhrGxd29aGrn85m5X37Ck8UjbvjhGFxkoPdhtfrMdUGkXsfSL9rSSMv8uA5Rp2PMyEPqQ",
  "key5": "5ppzcJJYxsx2DtdPMwqVsGCoXMA4jtjQA6U3N2VRNsnRS56E2Yg7wDHBp7fkhyCrhQtVMxwnvdkATZPxTiKoHKMx",
  "key6": "55qissLedku7NRy5dtHWHD1boVe7BX7UF4RKAvtiSxrnjDcNUspZEyDisQznm2iQz9WuCQoPEwB4JmFkL6aQSx1a",
  "key7": "SQr81BwcAaoJsiBpAnyoojLDaN7MxngcV47QFeeUEj6pRYu3wfVtAqSxgHSv63oSZpBa5TTmTbGUmPwFdtMU1dV",
  "key8": "3tGs9BAh3FcFhnjxcf3vvaZA7UtCriJthimuujGHRdXjzP98hngqQaFy7ZC3aox9bMdpRLjcUHWxDBkqRD3RYcNd",
  "key9": "3Lu5KsT61CXxrEcgJJ9v9VNWD28JUBwexhSmEcjrXtRh9zjYroZyqsZc5uqtYecJDPEDQQ46gqhVLo5j6LZ72dtk",
  "key10": "5mfW1zZd8D6Y33TENiu5CiHvYh4fGDoyoo6NUNxdpbMXJatvQCQ3PFxzTtLJCdnwdRGCp7agwjz5XXcEzsRJB25w",
  "key11": "2ZMLVgW4v2Y5dooZV1JSrTFee8pH8iBwvDGaQowSSr93HKpGZxcQdQwcqawbYAXnvuPXLEpe18RUvfzPhiV3mRe2",
  "key12": "5DrXvhwTfCvhQPsKXeiyiKgQdyEhpeqwtDmwBNmv3X72JgGqt1kLhg49AgoonAKmTTWyfM9wXJsTYFiirNLvTG9y",
  "key13": "Lza2nmTj8XeXBWoLqccWQWhJ572apy9aY5MCVcxLv1QbANKjssPiGsK5yoM2DKiwbqaQBwhRMf3ZREaoebxn8zk",
  "key14": "577jxVx61yxf6JyuQnnJ6waxs9GLe5yLDVz95qafGcFDB4F8BTLiAXsu38tQ7vYbU1XxH1hGULC4Pd6654yyWfdV",
  "key15": "2maisvh7QgVeVP9BKBCtVHgts1YDfzE7i13ZumQgRMG3dDNeDdTHTRgNmCbJoCjmzS6oP2aAXedVin2kt3jgkWaj",
  "key16": "DkaPGdCVfsENZ6UYi9a3NioxfatH3tdW9R5coLZ2Di33ruokvL4Xxqe4pRyBRSCRdwX6n52UP97jSJ6ZwJbJcfg",
  "key17": "2D9WCS5QTwCDReG1S1sqXrFNwngvJ1sj59EcXdudqLX6LHPzapWsUNPSXet1D8wx47JH2tyrE1EPuBaZToUxsB3v",
  "key18": "44mCXwL9iB5a9W8SEZ4uh5dreHLdyM2ce6xqrYbejFhLVTFmkCzf679m4geMRB9k8yBLAK5FeSQya6NkiwFiKyfV",
  "key19": "5VeJMuhMR3DXWEPFx7CGQyRFwz2HrUdNKts6tdj1eHfUR6gsWgqpEbr7dDGwZmxNiVRMChLqtN6q6dXYmtKb4Vgf",
  "key20": "Ykoc6f3ivXv5VgoppCFzGCK8BqHC83duaxyESUKPdJpoQXhMb13f93imwTS2JGXjCzsnAz3aAWBXnWLCSEDwiWK",
  "key21": "4HFJnbzYj6xa2VwuNtcPwMfEUZsfqS6HkGh1NCbidHTfq8Q5Ar8TpP72PJby6PuYSxrHCMRpJ5uHn8q9hgefeUCU",
  "key22": "3HkL7Z4jzoXDUzD2e7NMoK3KaAgsYJMmy6gDDE4qsUtYJqwNkTNkaBMDoDAs73f146Mg8fqG6ZYAqfP1ocmoYFcq",
  "key23": "4azToiH8Tj8M2QhvoY8x5G4eP56L5bBA2oaueZAizB7dfL3udXRmeM5Xgy9bPk4481gQc1o3z3TJPSK9rpCzzdU1",
  "key24": "3eaWF7V9q5bU916S6LpcxDFXrauwcVvKiqbfTfT89i65AwfF59tHBGp3r2vUJAyGfBpJ8e9qM9c37WYCNzwSFCWK"
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
