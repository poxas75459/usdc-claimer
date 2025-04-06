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
    "4FNGifThrGxKamSznfKUKfdSCTNNP1HpLoAMDrYih25GLZAWkZEbmDbtpbPZHtBq4rQNJJdaJTQ1GPHH4KqbW3ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQuf9bjzQM1ckWJAPuVr35h9dzKdYB16HK9svJJ2U6ViMJ3fZ8wwd3npkqZHZ5msyCK1ucr3dD4VrPpUcydDAmi",
  "key1": "rPME1YH1TVdoNBsLY5usRXvextWkTLJJ3HiXLAZffnToDreXsEQDjF8ki8pfpbCx4Ug2zVSvdGzHK5tNA3Ajt92",
  "key2": "3zxMozZdhNYGhehAabtrCVSyxXHEX9oaZnwSo6aEW79XnueReQg8M3jBENFuk7zKKYQWbRLqTieYeNSv5EpTSWbW",
  "key3": "4K9zmkMWPcZCm25NzcxSEhet1vgreEYbcRACYr6591dpU7tgap1DmvC9fXyq4UbpqXTkmNsCjE7eWSRgA1Nis5iK",
  "key4": "42AGnQ4z83m4Wpohm8KaUS7s9CynQWwvsyj71qS9NYmbDwDxh2uGFhvr76QiW5w3BArf7Zk8FB4HAmJsDGrQYJht",
  "key5": "ppF6wn9aGcAiJCLnBPZzfJzbjmK8Foc1hqqV6fSv34GWWzW677hNSNdLrZaTeKskAN1pvDMX5SNagGR52W4GzcQ",
  "key6": "3cFrTA4hJofiM48sJ5sSwysAoSVmrSAB2DszMopRtKqizCmBwZ33KevAFMtDhoEDysVEa6437X8iH9sLmf73gvpJ",
  "key7": "5XyaRTqCX17qwnwcJbTR6eoR21Q4hn7A5p97wnBBux2BLWYDD3hVPacX2mMwAcPGGuqW565Pz3HsMZtAhrjFaQd6",
  "key8": "3WLWKzV3UnSAivJ9oZsbN4UV7RZE1At7vgHU6LC6RzfhJwwXq8JCrcubgRQzQg1daMfGqSY1HpfWqySrK5q1Yisv",
  "key9": "G4USDe9NQJE5TtkrSYhEKuYvEggdRREoRqc5N7Hp3w95Mmww5tWZhVHkpHiPMddUWr5pvWg3xJm7gtb7vrqtE5q",
  "key10": "jawjMx9X6Qavdice9Yof3b6HrFUzFY7jzZUAcxdk2Z837rfdwzrs9vnF8VADWTNtCY3dz84oUvc4LAiDptv1eJF",
  "key11": "2hjHHSED11e47GJ6j36CGFxqm4ZM9kfPhvj1S9yN2tuy1APAJSEH77n1D3oPsvmq4HNJqvx7HfXiW7SNmyp3nk5G",
  "key12": "4HvkkmFgnj8NXSqCeh6C2WGLetgtnZjmkdnMKxaiXWhJwbfyk89sfadMWAGgoKVYQGPDiM2CuBnvUuZFvvZL4bwR",
  "key13": "fjwTtd5D9ZSUpWucHUPKfjEDETaYeNsAzfnjm2DT4Dz7p17Lf2Y3EHVvepqgTPCmKows5juHRNfzLbGdLgHm16N",
  "key14": "2DqDw1t9ssyTAptbcY4YSRzViLfwahU3u55RWo3AjvFUkZmkENGqzRxTtPZp7kk1SJNksvMM5kTfqbcAW8Ej35uV",
  "key15": "48nTuJusB97AiktiF3rDpGdC6nLbBzc1UPUZEwtrnJNAKrrgx22zPCj5TPa53mwzaeE1hrTJCsBFqpBjGftR2DfQ",
  "key16": "4ihFQ8xei4pDkvVRAiCXRNHA2PTYjBgr5nwpMavscGkw4oarrzYsccKVJMeuccK4a3WLc7reKmjaP9WpAkTQr7dz",
  "key17": "4BHFFgDts7qVpA8nG12yhXAADQoobMPKtc9phjM6kk893NbZDj81fAn4mUbfYqyS3hhGBCgZ5tBpPY1N6hMZyUfz",
  "key18": "4iRN2kSVYYY9uwSP2d1caDMAeFrgo78oWNmnu22PxPoUK8L4jXShurV7ACYQxEiqv4ysL51ygbQ868VmQazEZhcD",
  "key19": "5QeseBNMJfo5fMDsMtzF28ebVqS1ZpPjNkhqaWiLwD5pipgB2M85tpch7MDSGPjHfm5QzEmjTUu4VVUAEmB9cPdE",
  "key20": "32RaTNhkdSPWUSgCovj93EJM6NRtCYHdc1TpYp5ij8jLysfkULBZSReVJyLyGRpkWC2ttgEQYKMk95u3AA6EZGfU",
  "key21": "Xo94e4Eq8MmbCj3ZcbEfYtCmqMVdotTMUtiCmBhLq9YwK7K15W5bHDa5AdEW54qyfmnAtFXeBHjp7CbjNS6tAg4",
  "key22": "22cx5KMV86d2RmUBRfS25f9SFS1uNmWiBJ2QFn6F5PdZv8vw5baPNy5CNdeQuotfNgwfTKbNuNLtBAUJqGB6AR5P",
  "key23": "3cFqWfRkdHuUabULCCFEaEgqATvk2Fgw2Uc6C7rfgBDeY88USf54L95bsLNdtwwrmvyaShQ5DtY1HERv8dE9vqUc",
  "key24": "4dYxxwTq1P7CkJPxW4MGHnATFpax7rXogK1yrdZPSzL5tFcauGf5i9Z3LAJqJ5LD5LzcW2a5YP3r8NwwiWkSWUL2",
  "key25": "3kY8H3XcwsQigBEXX5brJcgWF9vTVQB2A4ga9oWcY5V4ZNM6tH3m4paaMEi2FgWmNJUa14T9mBgY1Nf6WpzvBcTT",
  "key26": "3JjQaGqDuC8jyM5hM7NXd41JEsFLj8a1KmC1MwwEifyMycgHYHhigVd87juEhgDjD7LSkWQHRtFLQLe4NqvAKpz8",
  "key27": "4E4tXfqn4ED2Lp5y3yWsTT26AZKDNMfnnuKkLoQkTohCwFMpmVH2QU5qeZXjonzhXQo7rtpS6AmeZ8R9EgQ2ZNV",
  "key28": "2qYTTYQU312JzyABGGU7jy19kkW4hvEAAQkoVZNWLdrf2DYdMH4YuhsSXutT1GGswfUrKsZgq6FLoQVnHRuSHpww"
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
