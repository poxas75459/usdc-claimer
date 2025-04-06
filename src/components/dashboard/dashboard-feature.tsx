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
    "Gd2H5TJuMs1YpTH6WXkAoT9yHBph8K4T4WVSs3A2sw1B1uqzrJqGTufuR84T6xWvC7qrNg7Zv61pPLhwqwwP154"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxsJsfXHV7xYWeB9htTZhMfACCSxqQ36YWQ4x2kz1YCYZns4h9F1eNbXda3fmpiTn4RwAYvdpG42Cggy1ycsZoH",
  "key1": "i6NgvZgMr1i9VTKZgFJ8kxjLVj42ZkQNMo7P4zXjmZBrBP9uhDgzdmbHqJVP7SGUtK1Z43tcR9WbbX7vzAfA1G3",
  "key2": "3SWKVb6uvwwRouykjP3dkp1JxunknxNAg1HNudN5a3Wz4knMfYwTtojB1tdZZnBSZR1NiUdNFr5NezwwPEtiGPbx",
  "key3": "5Y2jd17tswhQJFqefcFqQmexs4MVAcTLpgBHygSgKecKacM4Df6tvcC5tzq2X9bRsqVdEcm1e6tr3GVeqS3RKvVT",
  "key4": "ErBbn12ZsCi8BhQAkoJCLP88N7mcX7t4EgSTSqg24gBdEQUdJheEHYPEcvAeFqxqy7MYxWbqKAcex1vizaAHFKm",
  "key5": "uLd28GwmF8BUbqZzvEQE5U6e9AS7VwJwbgEY7AXe38EVP61pCHnVQ8o8X31Z2x7EbARKJB2v5835Q6QNXLFH4k7",
  "key6": "4ixtFKWESP1Z8nXnUo1vFTdDiJn5n3AAec6rvJHd5eeUs7MUoDqk42ZthhJ6SGAZRbwZEJoaxMLrCcbMJdgZJBZf",
  "key7": "3d6GNmiAaj6jB1mvJpin9Gf62bfHZp7RYmpRA8tkX4j6UsX4F7Qzx4KUR3zWLYibbkDggENGnMXdKqBhWhqK6sUn",
  "key8": "JaonmDrecWwjTubhgEgtQzUCpW4cDDoqr789KZoHmgXjajjJC8JVUd2fBwpyEtMvi7NF7SWqhRdRLCX9qCBgF2T",
  "key9": "3enVox89BXSnj5cEFA2WWmwnQwPHSTyayLBmSvbU85JiW1PrVjB6mqVriWFuYZ5USeEfb4vkH1WRPg3dCXsqoE77",
  "key10": "5p8wJotF26ckPY9WwCbcWN9Ja9gnid7zRaxP34DdtYgdGvw2hdSa1YueeyMoMszPM3tbvP9KpNiK1J63w8g9ZQMC",
  "key11": "mZfGNroQ9NunT3NxFcBoc2aR9wjyUmvXpJ4FazFzFbvjg1FsuHGj3ZxwRB6MFt2GQ6PYQS1nrcoXDkVrmxW2VZF",
  "key12": "357cn4ym3xEXDirgJbuUHQ8xfJ641CEoocV9mR6hhqgeFgLTkrwYo6MZFhRDvirk8mbxNS71pqFWUSpx4W2HqTSz",
  "key13": "2JSk2wdV2oZ1ueCvQJBNnUbVFmcWCXbQPEBNkPyYcFiBPw43P2TWuCoibcebvQ1SEPCdZC8Gabn4wSdeGGPNSSnp",
  "key14": "2XNcPFB9vP2iJpUqq1tLFafh8QbFjSfAz84gBh4XWceC76HjuFcxbhkLQP6ec2Rj4WJ8USuiYshtFVJFfDUQ1xR7",
  "key15": "4ZkWmdH8j3bH4uBRhtK1bQmU9SFVVCnK7G1oU5nDkvtzMB8gyAY1gZC3tXpHPx3xWh7nSviA5ExBf3ymksm38MFd",
  "key16": "5vnsgnaJXdjkp3M7acMNbqbRXjXeAo5rPwg8fW3kX47e4Wv9MQEthntoLQCz1PXepRD1Amxxzd9WrNtUbEwLEA3u",
  "key17": "5faUNd6RRWenoNpP5tPSeF4DZy44FDkAYoUWoYtVn1uSvqWowz9ezm9s1L8W4ARuUeyKB27ryQYBiLJ2iBPHhTDk",
  "key18": "3Xz92dRC8oxV7Kbm5frrpiaeUAtW5AE44P9S8MJ1NkXHRUDDef9yZDTtg1a2HFFReFjWiTJmaUVFqTQ2qWrbemFW",
  "key19": "4aRXt1b4iR87KKqzJDCpi2V4jrmSjhXmc55CcER3KMsUnL61ogkkFA15RCDZKz8uH9NPqoYTwcN4TmtEmkeBfhLL",
  "key20": "CHCHifCguCDaBsFN1jF8mAyN8DeGZWeyUTntTVipUG7okk189JDijrLGu5bxWc8jdwv98k7Cf1pxkniBA4njWLd",
  "key21": "4iNgUEUoWsgZJg8kMceGv4gcj4Fr5CCDFCK4jebtbAsxE4fsxVp7pX23AsVtXA6u6A1dnh88UP9WoycXticaSXCS",
  "key22": "4JL5FSiUdz1Rey9D3aTAsHofRJsNh8LirgWRZEB5LSkBRxVModiERtut5DD15PWKtf39qZpXQjR499TdXjtEe1xj",
  "key23": "32AWNFWZtx7GYtQxoC6YRma8Qfm9hr7VADdakcqSzZL3kJu9Eobh1e75Vu3b1Difk8ZMRA3ZGjVHo3KJvxfpWhPY",
  "key24": "5uMnCSPTxGiBJxi13UoEUZiqtCZbLqQs8aweKVcs3nMWTKSj5E3Cbv8gPDNdk35ahp8ir3Kn423dTXsmgn4fqd4t",
  "key25": "2epmD8qxrSb5H9S8uCcJydg8eQav2WzA2zVfoqCQ45mP9aGmusGF7YFHgfsBppGFB9MzsRTvkuKeuCy1aLfbfmGd"
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
