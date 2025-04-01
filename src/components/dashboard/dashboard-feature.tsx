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
    "2VuZYiTmy8NeT5v8TpjKqYqG9eAFtkwWSocPD1q8mtT6c5xHD8QkRee1zzCpdAfjBeQMxiyr4JHoXaC3VnoBLbse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ip1butnndkzBH27ZwESUzrAsqWJ4hGXHRKGZhyxw8K6FHCuZtTjx5aDQV9iyqiisVoSPSHHM7Wu9mPcgKMNaypL",
  "key1": "5KSNdPsGCEgpxi1UXfyHkL4NRy6sh6u17nzSEUKJr4CDYfAnQ8iAetZjn6ZQjqRbjnq1DWKRDpMyLuvmy52gBdvQ",
  "key2": "RRaq1r34KSqryTioVZ2aoEHvceeb1NA7UsYu4Tf3Rgi1SChPFs2pZ6THFzFZNPbh9raCBqFeEn9Hji4FaLWcCgr",
  "key3": "2nFc4HWUMGeW8osbCgpGe9eQrB7eoQWiixuXbrqpZ3C7SR8mhFzvjUcQD6WeNn62dE8yY1ifs2D3k6HmhEX2gQBe",
  "key4": "Ykpmi9vFrRDR6aQdKJV7K2u9YSMXonA474ufbtatyFAazWUqV2LjASDiF5hAAdj1HTZrNeWUFs8BotHPAfqVqSd",
  "key5": "2ZB2Gsnv74CHpmn4zombiMAnsi4pjMVot6z5YDhxggPzQ6x8p5zmfqWcimKA8HSSSBGnxdRhW1rW191gpubMcTc8",
  "key6": "tBHLcsNa3yCrhTa9rS97gkgaeHL5yWX4JUYDvLBEsRZJ7W3cn4aWmWYLdSB3j8gXrgumKEAvFHnviTPjnNGT43J",
  "key7": "62rZCNYWCn7t4S995X668HyXNiKjv3sDsMx3ajrXuAhb38GcMjHxMyG25oiEAafABwFStcD5fbF8vQBEs8kber9t",
  "key8": "5AKPb4kWvh1Ft7BztbATyHSkK53SUU58FVmnG2Mvba5MhX3Js8sWyfoNpq8KZthwA74BdVTf7FVnJT98upHBsWvE",
  "key9": "29gn3WWg9p79VWRVYt3QsgrwxvfMiBk9oMsn52Akbot8uPQZZc8bY8DRiEpFgpHU9UYEzvF2AwcpJWbRZETSwNdg",
  "key10": "32QUUcEiw2KQCWhsqFtw3e2CZ2dZonTAgJJNfDpGxeCzE7qCWBwwpdNEtEsjiXuCw3RbunBF9WnD6vJ42qdwB33s",
  "key11": "4je1rgZ5GnyCoAMxT5mbzzufFL4YKD7DA1wwgXgk8TGhYsBtEGKZUnbkv7CNN8jD1yM16rGCxzkcg392FE1TLHjk",
  "key12": "2RxffJyT3XrzDBUdCMmqFgW6EdKuKm5Wz2iKcSLBWzuwAtDWDwvybzH9D5hutgEy7SHVpme1yq1Qdva9amkL9NMm",
  "key13": "2bUuYm1HuNh2YJLa9Raj328QD1KNBhwKqwcYST7U7dyRqot82AwJr1KELmbMWs76eVoM9xnkCgrcVeCXM9evXHTj",
  "key14": "2v85C76tAcD2tLTHN5WfriS7LJWXPc9BWbWxYm3vXdpu4vYABbxkXAPs3CsdSBDfKVHkzws3XSHMqyJgMxsX3GA2",
  "key15": "Cno5aBoehtuc6qQfbtnDPoNWKGSxtFt7YBzoBjceBG4wazSoR9FGkT3YxNmitajkSez1FcK3iKH6o9U3CqCZLzK",
  "key16": "4z3Kiq2rqHuhfqHkGmjxVbjYjWngoGdkg7q1pnDcjAH28SV7RpiUyZyhfCFihexTZGq4GMVC711dLoHTcwtWSvik",
  "key17": "5xE8sYrfaPeAHE2U5oNP2qAiuz2iiGm2YUUhFJKtvKi44mW2JcWSzZkkJTWpzzqF2cTPgn6mVEfWcac9m3H2hM9N",
  "key18": "46Qds6C1JiN8rz4X79NEBxg77Ye16oAq9T7GcPKpAqszqNozn9AHWAn42XcU2k8aPfGAhV9dGFcBpVKrmKFse67X",
  "key19": "5y83Q6brDERcfWRUZoHZxepEo7EormjXQF7pmW2gtmzCTM1sWuUzZbjJPcK45RTmdtZwqmE9mvDSQRzrU4E4mZXj",
  "key20": "4M3vfQMdTb4cdqspLpPgUv9pEW6ErZ8y7iLKpYpCHJZokEQF7cchCRpEN1SbRuH9GDyCyKTqFcx9378ChzVuQVQJ",
  "key21": "3WaCGtwQxrtDQXYd1goVhcvQdLJyBkBxLCLC5gRNvktbAjuqbTBCixXUc1QWAP1DzPE6viDQDmNNB3D2hvzxWqRx",
  "key22": "4xWnfmQEz9zVD9vGEAg8AtKbTWZYfm5YW8iPGuFR3sUmyFm74j6Q6KLR5KWvtKuP22R4tZsxp1Vgg1ULVKsBEDBr",
  "key23": "4yZGQ9SHze5iAzF2aRanNqDiJmHH3s9vi2xsw2hxFQRkDVFtvVqfaUsmYBcv4RJLqVRWqCo2R31JMcB3Y4LTmqzF",
  "key24": "2xxYBFnnvt83CYArwm1HDDyyHwcTQVB1Emy2wDCtUgC7VxpLcypwLuUjRV54QK7xqgiVFgYhpNRhp9kQ4FBP3r7e"
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
