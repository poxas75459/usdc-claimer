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
    "4MEY8LNBhJ2vCR9qzx2YAe4L3NQwiBavfKUvv2yMhxyGKL9XgD6SVTDyJSu8DVNBMpNAXprsEZJhxuA3iQvXPmvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65UCtVR22pFrrxce4gymcTx7CNbhPY6HB52kVs4Mh8FBTUispGKnj8kQA1xVV37cYghgz1rEcYRRHi24DpYYWH2a",
  "key1": "3z1QTJDfUGAQL5ZDcu3DLt2hW7CrDhggjC3eHshrqmMdozS2vQpMVses78P13ae9WiB6kYSgAUg6i4U9rrnuvaSM",
  "key2": "nDKjcK1psAew8JW2EmdMuSx3qdEJk4hJfhmyzwpjnrHDZBXHnfCVw2z3G5QGWTk67bboUxTVTz1odeCUPmBNGZt",
  "key3": "5vKQiCS7xR7XCw5LytLNkvP1YeUP4QdGcYNJA9RftTpRzeiJn5WD3Q83nHn95SkuthAc2cutj9goEk2LANHF6rSd",
  "key4": "4Zokjr8SEtkGMRu8pcqwVvsvBLFaMjuPC2GtKsFPVvHVPmasCyueZjbYRAAbg86HCCK5Dv6Jh6jHdVoA2j6H4sDJ",
  "key5": "2z23vis7u7jgsJHzvo6cghgXRqzFMMwVLAHHK9CH2cUaQ6qrgo5ezg8LEZH8qXZA2MzbJ9w6uWoSwXmN4uVWtVfx",
  "key6": "4eisyuHs1m77KxLSRinxszGqqfxJmF2oCgMKNU5Cj898KZTSsSmZL6FVGnb2MLybQBB4NfW8bqJcdTnVRBiD5qJa",
  "key7": "2gr55eewRx3WQi2A9z98Nhrdv6cUXBtDPtZVRnpMTgShVBRdfcbuQCxoZPCzcf5jLzNbNxgAvzjgNMKFfsX4usad",
  "key8": "2Qy463nqQuhEdGdEdLcFTx4Va4pP1Tx9WWDe1aWGmuf7xRY7R76R4eQPQP9WoMkVyaraFg8tXWtcE52zaPqmcHce",
  "key9": "UzRtW1eMXbZTQ73HBY9udjrtghpZ1nmYeUCR2W2bNircKfA8jjpCLCQYmUxmpwGtXsnEVp4DAdkrok7ZURyetaK",
  "key10": "4LDjiUF3RZ9mokRp5rRzhvwRRn7xfUtiwacFpcGvceK7yfqg4qmhAZFSEjD4PzmXL9sxjkahCSy8FzLK2CQWaz2B",
  "key11": "59wrVsGCUy4cx9feCwcsYm7L3BZ2MU34HcJvpn5fLNK9qgVbM7HuecMJbfryk64cF31xKNtVkymxKGSZ63Cmhdhu",
  "key12": "L6d2LF9irCmgCWvQ8ixTCZXdSzVhRF37LA5HMEp6fRcShbpoFj66RDB59tqz1YTirVGk2abJ4E9RdwwagU4kP5X",
  "key13": "vhD633FFsbtMQdk9FdeirvhytAfiAW4j6DaZveczMqi1Z2htBSBwR1kaM4tQNq4AZUDFZ6Qh4sZnkw6bUpz7zTw",
  "key14": "2Ktd4dSioKAKYJjLat49hZ6s45K7re4etdQmqRx8BjzNAu83eA4UhZDwqgkyv5L7b71K2mH62gvesuPyqjYHdAGC",
  "key15": "5NC9YSZodaDKfnkbZEzhqGxFaf8fkQ6ZN7FWDZrtLPNBy9UhVU6me7wnMiBPLT43wDUJ7yUac8QZCfQ6S2cGRSTG",
  "key16": "2QsXAiPoLDRFcuRzZh6BwUS6R3ERqF3a3gV6CrtZnu43jmYHzovLGrwYLA8RvCyr9pGtriqEduDPL52txtTCHzmR",
  "key17": "51u45UgEVWtJJe4jVPK1gddqf5AB3EG6aB5vhdHMcb9K7AzZviqavvpEjWYVaVDZXmMUtzNZmAnyzmWGT4sjn5Cq",
  "key18": "4GdH6PhBmFqmsPPk14Jq9bvyQvCXG3kcXo1nENJGfsoX72kDGWMMpF8iyhAE2XAYrdTHNnULS7jBHK1nLHX3imsX",
  "key19": "533Z86rJQSvhqYf5ER9X41JbiHLAir6y6jR1yAzK8uLEmuv1dtmKDUMN4CoXaEMsx4yFQBKXAxDvk15mxuA4GJBA",
  "key20": "2eR7E9wxCuy5dvqq7JJbXDQqTb6QvZPtNCSKP9VkxGFH76rCMYVAbSFK139WLw2R63NGL4Tx6CFbbgDrspVY2bL6",
  "key21": "3cn5qRioUL9M9C8cm1HHdfgZmY72Dr8Ay7YR2aUvD2qxSfdKTPG55EtvCLLa3Jomjwz14ZzBWzcGUtP7AVb5EmJk",
  "key22": "EU2p1yWCGSjTbc2qyeExN7uWSGdpfYNSHFEvK5WHPgL5wji3MKpHqcEHwn2x8zrQ4xyFjFQGymLS61Sypwdb7cM",
  "key23": "B4KYvmH4T1NXuym52D2obnFm8gYVh9DoQCGFZsC3znMqiTm9zjbr3tzgmx8Nsuh2u4j2xSbUiYNzfjcrTrZ726w",
  "key24": "2MhJmZLakjeDjy4BQXZ4xBPKUzSBtNVvvYveiWmEajLvoM4VUqceCDUUgxmUaAkPABGKmFqToeAVoSXCTr3JYMH4",
  "key25": "4pALUtrQZ3kiDffKjQCzXFpVX9f7vFgRTWfannWPwLm4YK4miUXTiqaQuJ2DsKiks48HZ7nTiPM7WkjjvzXshxZV",
  "key26": "4Kkg4Qn3qrF1ruyutdkuCBHZgx4TWWKQCG4HHs2oeS2kvTTZvmD7rGtAkxDNNrv9VS6x1G8UDzwwFrjiamkAJKSH",
  "key27": "4WihBhHJ4WNZfFKDyTbB7ZnRhnRfj5hTP4TjeBXmMCSQXRNQQR3cZRtTzZ3HdoTWwABcwiJsbpxtszHPfnevSCdE",
  "key28": "46eGfQCRL8NuCQth8ncSRUQ3kyvdMVe7r3hemoB3tuhYDvk6TkNgMErCxVDT24aS5fDDkgu5DJsf1bD77hKi8q4G",
  "key29": "65Azz6iAcRee6diDWVVEPXUtbVwxai4fo9W1qwqoZfwr8o4Cc58TUy8NeaSZFmyJyyaFexe4B51TgwuKwT5wDQk7"
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
