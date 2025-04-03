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
    "5RxuKxsgGpGibSj4DwCU9S7Yrr9xmbdSCQDnxdfuEQFtnz43DVnk7rnd2Z83GuLPMwAxvj6d7jeDqZ2tD6r6UPmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGqqPKZWwa9jJ4Sc6DwBMRyGjDP3izHzvtiJbDPSaYwMtb6pLRUDQAX9gPzMnK9t8eQypjwjJjR33UUd369gTSh",
  "key1": "4k737YHp2acdeZvNJfqGbHPZjckaGeWXkfTD3jqjQ6o32qHLoHo4bVaZW9HLZgST8pJ18DnQxiWvCxgTZCLxXNie",
  "key2": "3pecLf5wwmtD28E5Vn84VRB9XBT6sGD2EvtKygE92df17ztGo3oZpN3wDb4RHKgzmvYZRvXduYGgL3kUDeQSFeSk",
  "key3": "3xRUjF4TwdWPRoxvBAmAqi62ouX36YNf9xN75RH71RHY9Yt2eu6QheinGHRiSFEvjQRDtnhy6qxXYEffWBBWdxz",
  "key4": "5B9D7Vw4KJy9Kxw7aUKk6uc3UjxTD44fKTNsTycRHe1c5cEUWZVkCs7z24cMNsectWDA4nQaFe41QaG8oTGdVGb1",
  "key5": "4GdUgjx9kSfY6cTGAH4YBw438VX86zxiYSHnzFBvwzLaM9bPDhhj7DiojgMtfuuz4W23coSu2APnKNaTJvzxFoeo",
  "key6": "2yp3FwXwY6GgjZAHvKnjBqc25aDjynPiGRrKmkPQrxJKZ7ktJoVC847y8xaGXHCDTn13MEudzFe2YTm3midpJA4F",
  "key7": "VGeMzt8w2Z6eawMBpcs1ydx3sUJvjJ8FTgBguYErdUgoh8xxRMBQRFrdcp9zUPLKYujPeRtj1HSUtkQ2yS5zLXg",
  "key8": "U8W1PN9dVsustwzzbmq89EDAWBE8eSJTq3x5siUmo86DrnkJmqPoHijsqTX8qx6Hj6DS1rH6L8Eq5GYn3NH61Qk",
  "key9": "2LCsiF6PkcrFhSY8okBnic1SJToDpNEWL8Es4xb1HJprVG89V9B4PJTxhyn6uLaBdLA3pc6azFw8u8AunXPsX7kw",
  "key10": "59hqySSp5w345MxD9pdnz2UaGaeJgGZ8EXdUJ8R93M3qXGA9XDahuQqrhxhxxdcGsY85XnbVKZvSsf1guPb3UYXe",
  "key11": "52vhk7RBmG8dSF1wm8wK5U4fBzJUZGgWw6UxcsYq6omz3Q7PPtieB1gpwobM6EmYTmtkkAHfjZU8ba64fharV7cT",
  "key12": "oaQAkDqVPeRu3EGLH6wxZ2Yu7JafE9CkdbTe75Dvxsr94tsHcUrERbC5PXpo5Wy4meamGkYo1FM9KiLiip8f5vu",
  "key13": "3qSMpTNCVStTqPb3wHEqZ5368XB43Po8mXGQjGJ6r9mwdLPPTYuCdX8edugmMMYQTsT4cJ74si4aNNshSDoE2WUv",
  "key14": "3hCeCrDAoY1AsUvwo5AwATrsYDcBnSVojdKKVTs2pBx9KxStekvRJwf4CBRPH5j2mdQMv6xwg8jCa7a3f85KJKu3",
  "key15": "2frSSD6eNxut6ZTS1brqYRvgmXXKTqnfT5cf8p9EpqHaVysYSXsRNt18sywvKfqCdayXYjXJzfWWXVr9v2UXSdtF",
  "key16": "4W3DjRsezkCrBHaARLjmk3mUKpXZ2Ddsar4zrtWQyMYBhrnwMHXZxxAJjvUUwKtjsNSU7ED87sKmwh38fjEb2wLj",
  "key17": "36MWSm7RYuS1HnNiq1iqC2ms3rrXxTYJWgGpH2GkNyYkT8SXKvwxDd8Kbo8QP5y4zQ73Lv5YqdVyPQGG7kf4bmcW",
  "key18": "4mYuun7jap6yg4fcgThcNsSjTozdqT8i6PpcUarmvvzrXS1FKzqUCsRodMAkS3XDTt4z3RbvJwkPa2UQjKjep1Q2",
  "key19": "5exDhYPF2P9vjf9kvQS5Hv8bb68KQ96YeFcMbFwggzwrugGcHDSuZMPLtxiQG2Hw1wUQaFAzAEzPyLFD8kiJchZ4",
  "key20": "4h8VUFCYV9Bh8u8aZfy8PwhpANGvadGeQ4YLnSiFNkFKSLmeXESDi67wyEcnaMpzPSBGMXqxH9sFedG7AjnSjLuQ",
  "key21": "vUexSYSrmc6R9t7ao6chGjp5Ltp6H57LkRkDYypWuTJxDGovzJUQUePBnqPs6u1DfgikbkqmoJ2g4h7swXCoUYL",
  "key22": "5GonJjW5RMcuUczbDXX6qn25RKiVbg7Gcb4kdM3ZdofsW9G2aDf3MyWjkdkq5CUXMBzZYnP81gAYx89K6f9c1WiJ",
  "key23": "3kboFLKbKnWh9WcW5TPGdoyyt8ntochq4261cndCrEPUPaevY9XQgeVbtDoEh1MVJXbUZ36N86qvAyu9reWE2Z35",
  "key24": "2n9vDZfKg9w4UpPJmUMesMyym5FA9nXXbJhSyvsyFs7fVS5GgY6LgW2NDK6PMsWTa3dLmpoMQiRwmZwJN2uDc2UE",
  "key25": "3L1JXLWwGgc1efXrKJtoE4EiMVLHZEm8q4bPuCJzf5g32CnorsJwryREKqsFca56sdSQ5cw9r9sPC2LFt3FJ3FaP",
  "key26": "rRiPYNHDRR2WWuBGerjyzs3FLhRBtzGGeHChPNzuNPySsMNm74BxeuLk5ARKWpG2kUGqXWe1mf8JtfG5DzX9XFi",
  "key27": "4yLPdVGS6A3Lvo16DswRcY5GjxVNm9g8D6xhF9BCYXoTNWZvHzqCph3Evwg6xEMEHA6QyzBoR7Zveg3CYizmu8RX",
  "key28": "4wrbGvZLaAEinifLyMNhHtULktu4XFZSVdAmaTPVBu7UFgUyvFpbDbkvVa9igpGwaxkUCCcJD3WXS8F9sdbv8n8g",
  "key29": "5PvvqVQb365jTZAfQ9GagNRXYiD6B5nfyE5QSCswVq1wYTRifZY8qGNBqUeMABnrsFvzB5t8kueS79muWT9g8t4a",
  "key30": "NMZgPC9AS2tXVFmC27xFAaMqvsCNxz5693sGrRqoF1h4aSLH2Vwu6D6fcMCV1NfDsriLvrJUJST1CfnHfYfKnZ8"
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
