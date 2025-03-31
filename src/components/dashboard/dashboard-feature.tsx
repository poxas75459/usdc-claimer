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
    "28mRAMbXF4nbHfZgQe4SUpxgfQo1YL1VDBDjoPGzTyLqL59piJ76oGhiqd5tcWU9m8kqbRWySqShHDJXGMTvzamR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUyGJo2UBAu3icd8tgj9K64bxGwNH4YBRE713jYhgaeRZHiDNdoE4e3hviYUaZbMbjGzhD8XPmb9eCVNh5kbt7V",
  "key1": "4PSGtoEAPTKxgRUgZ38RG9iFueA3xbQYEVzXGRVCCFouY9txeAP14R2aCEFvvQ2tHKP8kxkc4JdVhmfBhZkKxg3B",
  "key2": "3Bd1EFURzmGdZJJW6qK6pDmEtXzaqMDDa9zVPmwqPn415exg4Rg1EsRfqiJbJDTTTRKmyYGQ6XzuKV6u1txLjesd",
  "key3": "5AD383kBGJ3mMZFZbX9UbjAoYDxZtW6Wb9NKqkNhxgXydeMfzbvriXqGe4cb1ZErWNHutVNtdcrvxKZdkJgYstsx",
  "key4": "3Bfws5tGpAzumZASHeNHQiZBM64MPVz9ymQNfW2MzEkwPYYmxU5KT6KdQycbi6YRwDGxuXCpdUT2X5ryh5mLyySG",
  "key5": "21UkLhygQPnq7upeJc7E83KZdAvscT25KHjgrQDifCchSF4wYvmPNpbQrdMC6YSQHwzPVuK3kaDvwT938GYjzzYS",
  "key6": "35YKvpjgCZnYxBo9XJzLCcz8kDu5PYNvUx5jLomCPT7rSrQNoUM1jhJR17LtTgHqSRpiVL44CRHsMb6pGV4ran5q",
  "key7": "2DLc3bJTgkjYNNW4dfQo28iuiPE7twp9BmYCbcbCmEWgHKTCVVV2hzd19zdkT6Zk2VMMhp2jFKaeh95G23EUUpiP",
  "key8": "2YyM1Sxk7o9YFcs58BWK31641QUXbPL5CWAt13WRY1qJLJBKVf4xfiGyrYFjYC6rDHaaUrkGqP2eLaCwANqLRkmb",
  "key9": "2x17jv6Rwnv8eL2mo8aE1yLeyJ4dsike1UDfQUD4ZB7DM4W21zh5j2Bk7qjckKsXecHMxvzD6gXQKbz9ARZgRBWK",
  "key10": "2LPCQTrQK8mH9N3pHAscKT7H2KbaQcFC5eAjQpr4n8L2ZbVEi5q1Wj1e2z9TieuzJvSbXpSQnvBUTbQ4ozi4snbP",
  "key11": "iRDSa5EFgJJ66fGyfnQZC1hw2NfnNw1NVPHDaDVc3xtz1w2S2ADTDxumQR8uAG35ftdcBaxnbiDXfhHQxMgT8gX",
  "key12": "4cmDRPPP9faWBedqn4v6Vo1Lxbk6sb3i3FD1DY1PMBPVwcHwJTAVifBB9zdRQURKDvrSvgPP2qXDLNqrHFCoctiu",
  "key13": "gEFDtBwsoMmDL9cYRYAGCX4p4mU9dRRmL23drT9QX2b7Y3netfZH5UqgHqoykx1X4a39BmajsoyeHTWGsi1ZU1n",
  "key14": "2UwRcGQ7q2jPoLXYfzQyuMGnXLh3bxgL1MxC71EKEbz5EvTEeECp7CurbzeRoQtnEjKsB3ddmqpTTVkYB2MMYmcg",
  "key15": "UaZ2eLZau9Jz33rsQfMFEXNLeQqV8zsQeBXdQwkb7Tvm6ucDVPWuTySKdD5mZs9himfqUm3Cf19Y4Bfj8hryegv",
  "key16": "5M6dPNpgTVow9P88P574Yw9ZEDXbgqbdWogUmYw4ZBga2Xg2wcxHA6GswqxtF1n2ETuwr5hq7LnARaZsCMYZbPpu",
  "key17": "3CvnB4phqvrEfPfdeTSD5ktVksQvuTR8k5BXTnxs9NzmM8cUU44HAd56NecPakcAzJqGTjJHqyQp8bhGTpwStoJy",
  "key18": "2pBQkNXVbxd8YJxwYfH99VznbsYEWa87iqMn567smFTX9nR8GdQ4sE1TFoC82WBMdruqLgpCPxEg5BKmH4m98eNq",
  "key19": "3CEtiLuCsi3qHDadXNmuNF8f7jSvzwHQz1zgQztrVKjCjFhYBWvNyJDTKLzYyyfZamjQcQvFbvyzgFywcH9pAbJY",
  "key20": "YPeG2gceAAcrfN3eyNDSCSHXsHjp9zeyoH2d7jiJoAiwhMtafK9XCmGU9J2MaSreRmaYm3pdSjmemMSj5H2VTh7",
  "key21": "QerfwAt8ERkgzDoRcTzyf1vVoBLu3LSE4i8pmMtNYWUPBtYuVY5AhfYm6YG9CHWAqKYnpcZf373kPVFgNvSwq1E",
  "key22": "3xqDaDmGuA1hVGohvzVVVUGNrnENCntGevFmALbGyo39qakwWGRScASmsBKoTDs8YNwYor7K3A4rSFw9XJTEgvWW",
  "key23": "8TNgKxYAcCLZQcg4KaFR6LNikHhPBz3fDo1bGGieKJtKuUantM85WDZoLGuHcWew4fp9juyshUEGW3C27D1fVpr",
  "key24": "3dmaCFiCjFNrRrXd2nko38PF9pJLvStbRS3TMzSh98KjUyz7cbomL1c7SDvn2TeHxnjqkTpphVpa36tefxzeaCB6",
  "key25": "YSsBeggN6zmbf4eq1K32FM2PnchsnCSeyXHv3RwrgeRTMASjNYf2vX5c7es79PJSV2PWsWqgnFL9Zqfj2cmbtqR"
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
