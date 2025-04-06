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
    "29xmKYk8M4e5qCcyf2beBGk7Hqz66WiL6LGcTsoKQT5yGJYESy3CihvWPkaT7AWVB76j4SRbVrqBNAH5zdHwzWRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XXoQb9AaCJdHkPNwDRGh1aBJS1QsfhaUcsDNaYWDsKWjTwVzCJ8H1oJnNaDWfAoXGs3mqtK4DPyreZE7vV8wsE9",
  "key1": "4xgCu8R4wzDrRVRBTJGBRDufsCRGdyHTf6MYPD6BCTfk3TrnyHFGfW9HVYrdqnLJxrqWBxyJCYage1axBbxZoNuz",
  "key2": "5vig3EHNrY9MTQ4y79AbQdXrn6sEpMzz5WE1MLZWZ8nuz5ps47CC8mADSYygVPgQt6r43k1Gg365HRZmu7y1BDQC",
  "key3": "8kfExy5yjiMTS61aMD8S2KJawWwKdzZEyjTipETXjdZgYsm56CCvDbPXL8mXzpc7oSFJyKYw6UN7uh7anLegWDE",
  "key4": "4yPV9tCBrGemhpCPuK852ez4oXCFy5XrKLzR3xyWRwXVqoDZ3EWfH6d3HwfJjKq45WPn7GBMQaUe4m5WAdRKATAu",
  "key5": "3DKbbwnwDfL1MFroo1MCpNsRNuEQhCZ35KozSM2rcVEY8TTip1UPK8aLN3XRPbSHBmpkTLWFBYmZ6YXaQFbPFZXM",
  "key6": "4JHuH3yXabosfJzRd6waGHYi6YYcBiweGVDdsVbS3ezHqGLuL6wBjJSuKpmgnukzZPCPrGgm7FJeN13v9vut5YFY",
  "key7": "67HrSQ7MNFA8KivXDYuaQ16C9foZZMKUGgmhszdqWxhg864bJwtjmt6MjtMRdL6sMeo1cfRzbgAXrYJYKM1BBmMy",
  "key8": "5JyBhZZ276dBEs1F6ZDh8r295poM1fJcaS9on11MFo5UorPAAwKRdYL3VeJ5vN82396M4huSUehY34uhcNUHdjeH",
  "key9": "3NspgHpQwNg58C8rSQftKRZzSqQhHNbiEd2p3wZYhX6jm71FFXHCUdWc27YDdPQUJ1YSh99QW7AaPndnTdgVmUuE",
  "key10": "5sbpc4gUJyaocLcdrt2BaMPfj4ZAChgxR9xphKWirSAjXfT7xfvjntYKCHwh7gJBusvev9C3K2tepQofXLckqWRD",
  "key11": "pP7E9WRa4C7DJJ4XNQiQ9vwY8S4obuHjGoyx8opXUz4jEJnnFomZLytL6SA6QDQJGurpkPXNyjJR8brCxBcW1wX",
  "key12": "34ZVtbdsmAU1XcK5XVEeuGca72bJRv6CxARRqY5uGkMucEHYtbTsWdch1gfteKgy9F45Sb1dcBhbFZPQfpysDgDH",
  "key13": "2ErbsEbVek5TvXFmnptNnhdsVG1VjTMgrKRuvqV2qNMRt2XJ1sTLM5PUZd4wuH2m6dHy26sgXAegejbrEv7gmyFc",
  "key14": "4Kuv7SFnuUuUiaYLTkhUPaSmpuwC59SJC51iNNMf2cKrayKiyVfMfQN2ALAe2annXmKQXTjoHHiFwsjN1H387u2y",
  "key15": "5HXhcY8Km2z1WREwzLdZDkkhhdToCCKQU5L7vKyKdQ5Y1UYmRdcrjdk2RQAhdYA2z5bLuZavnPyKhMkADaXNpXSb",
  "key16": "4KwdEgT1KL26vXb3xvkBX66WmJf641x3DyQbmavrYzjBT7jqfUiRpFSJ14siWgveF4qCR2o6ppEH8wM7ktk2RYbb",
  "key17": "5Akcb1iDN7uWgCKX1xCgss1GTFix3QNu1jtq6EbJAseAJxb5RNwciZiv9xpD2xETwPcuYJ8jsK72GTSq4dxJkPdd",
  "key18": "5BcGcez7Lj4zkxQNHsctMe1ytxUPqakVojojwVGVLzTNwTYMsRVaofSs3y9XtahKKtvTBBqzckt2j91CoV9G4bZW",
  "key19": "3QwL6sWpMvHhNWudNwXtmBdYwYMZthbAS6Z5uyNNKB5ichFXbo5eG65NwS2qDPMPTYpSnR2KVk5jqfoXjP5kBWYy",
  "key20": "4pmHq1FqvqUchRqopjaGqDEfE2TUhNYtPjUbYPFCSfrwSXJYB4taePPu8Uvkfz4AJRTue4d9snrPi2vQa6BvpHWg",
  "key21": "5hMoNgVRXe8atHCT1mT3BGpFSJKkAGvKMgzW7ZZZCUirruJb9SZWewetGXFZ6bkQ57ocbzmTgSMRowDYbK2PLjwK",
  "key22": "46b1TqdYShCiW9vLdkkxo6TiYodwp461uiSnSaaNNFfA7oBztfSy569rVifpyMsiaFVzyDRLF8Xp2jsR86sjbYoK",
  "key23": "xmKtxgYwYUkcZDmwpvcBr3SGdJMkSmGQ4gePBiBZxqJGyvFfjmcNcw9HaXZq3CsWRv7qD2UkUfJfcKghosd8Wde",
  "key24": "3g5kqaBYr61Npmw32tFj3WAZyKNqwvDwrrbK2CkjtsH1ocS1BXwnRAQfJGQf4T1WyEN6XZA8z3YZRddyHcQirK3i"
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
