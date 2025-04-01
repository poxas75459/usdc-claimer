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
    "5P28AEM4tNeYprAsgwRfdKQ5rW5ZbirLXrB2mTh52Y1rjtQPhaKGkL8aP1cwuKYptvbbHauVQYENYHexEjULqA5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWDzHWHb13m1PYttimbMxE13c3bV5Y7kKV3xX1xVLjZwxHWHdvW99PdE8L73xe5KcwK7kGmdQ2QKiibcwGVbHTc",
  "key1": "4NPmF6izridrkBqynFD8tmEHoS1CoVUXHyXZSrzpCGCJfVz4Vf1WoW9P6BDdLNAVYd6HhU7LjpU9Rqmk6Uc2JZkT",
  "key2": "2mCxB8sWsDGgSLv6AU8FvA8jMzaDT6x6J81PYnJx6DqYj3MQNQYTby4Tvfeih823g9R8mgJMbzE5bE5ymT1pPUw9",
  "key3": "56CxS35S7QbBJSaEQSRgSGfai1ejAUJtdxskbECCN5joDpiRXHVRPt83jnC6z9WXLjkUMSagaR2Xtojctd7oLDyU",
  "key4": "5sn7us6NHyJLCKhqF3dSgq18Tj2pqyiNxko3tqkRiiPqjHRTXtHsmatWG2BPPn5jyNDvCo1CfSvqUJFQPZh19w3k",
  "key5": "2kKtmxvRf3EhZJjBXwA5BfZpMReeDqSVjfPiKvDXuaGoRxL5psLAJyuxi3hoZftUhXpe2xzGpeWmZEEgauPxdL1J",
  "key6": "4Bv6AYmtM9GtgdbNigqzwNedDcCKFBuK5jy4QvjQcbP5BeTjVLFiSNaFCNq86VosusbPWkPUsB91PWCX6Lhm2fHf",
  "key7": "2fGzJNzfdTpLSLpd1tLKwyVFfQVJ2V2pBsJLTGyaEot4k7nLSbnsZNBqobduwhTxk9wdmi1jwJRAYzJJEfqPKs4w",
  "key8": "5xL2aZFqDTSBrLaksGpPRm6jycnjGUwKydpEXcnJTuuPz9Nf3ncSK6zqbx1VwiCEp3wRnE5xka13ZbUhSczJaCX6",
  "key9": "4tMGALTH6RiU6hgkPu4u6YomvaSKDZqB1AhxWtchgJMyTcPrCHWrxjqmkXf9JYGD41DyYgGsALoTfAd1cYtn7WhN",
  "key10": "59gyPuu3DVwGnYqekCpChYwoERcNWJCMpdgd8ZMNJ3h2UHtP1MHgv8SiAU3zRF8MU3vKMWH95cooNffdU4qD5WCV",
  "key11": "6qkqdBZqEJBLyB9aznpza4FUo3g7YoTims2rMx9ikV5fNVStzybq3wUMBKNDTDx7t16ZsTEsiD2WDbCzRqg1aFr",
  "key12": "3Z8kZZRd61V6b4S3xrj28wnspZyaYc9pxUs7JnjKp9L54mDxQKDoa2NJqkff7PfU1eCRuEGyAcGs6LaCCnmXtDFN",
  "key13": "2yxVeaPXcXcXWshMJEzcv1cmgp5Y6YVsZxriGLzLZWGAPicFtTb7m5U6PsKzoPTRFR7eY3Zdz7rE2reLAhdqWJba",
  "key14": "25VeCnwE7bbhVhFRvrX3DY9ZK9kVXbLuq4qeHSQQE6cdniZRwy8T4XJygRNsmaSyYDqzVKePFiYh3zit372T9Qe9",
  "key15": "jSp18h9TeDcj3w3Hpg5qAGAYKSWRML7wenufk2cDfbTiU8eCnvjdc4Vtwg5wucewJ8girmZmxmbiwGirdeBtSFy",
  "key16": "YKNPDuk25zHWVdaraUrUWSLUYJjn4A5vYQ7uhx3DvaseqTMG8JvQPYjDWivnrdjz6GUMuhGu5VT4JYeRxxSgGRZ",
  "key17": "3RHuFcZqDqcjrMs46ZvdonuFrgoFGdh9vkzc7ZvXcAGm4d11AsCSsdh3AHaFFCeZChXBjWiuD9HWS5rPAtGSJLD4",
  "key18": "2K9vRqMMroBZkh2XMBpuQknwMJ5ykwuH5HcHB1NvFP5B5xcJyZcjc4hbSb6XjNVWspoWsqi18R2CP2Z9A7cWViMK",
  "key19": "3sFwTV1G5jZXvYdQhCz14T3as7MWLtnJbsp1uUrs2sjAs2WF9TRFaXKcmyVyxTXGcVMiGE2VjvW5hvm4CdkAfbVi",
  "key20": "9Yz37mYcs432feX8kUkUEeKxXrzJUa3CWsst3oACU9qEWvUuRJ1BW5axvJtAgy2AEhjD7u4UfRhD1oSibYBd3cV",
  "key21": "BkStNkBhmVogtWmZCVUVccJYFD8vCWV7MuSx3EJfhxsCEpfnsWJWKYkBFvTeKr9XrP8Jve14c6SCQHdZRktCa7w",
  "key22": "2TgSk2ieW2ymZ16B5k9Sivk1RSGWWqA3i81pQX48YYnSMvRUfUELACJ8cgXrbMLeLPPhRjrihNJYVqAoYSm5VJjN",
  "key23": "5xwKP1dmgPASiu689e9v6q5QnwPeVyfmjw7SoZGzjyeVyNs2kgJwjwHcnAQ6sVks8SgzYVaTB8BSWTwmNERLdZyr",
  "key24": "5v2s6CZKP32HPRMNoJQC3xg7LdHcvqnLS8i7zW3C1EBaLuossjWP4cpfEBoMGpLGcjeiRyksyhpzTU1ftbCEHE6X"
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
