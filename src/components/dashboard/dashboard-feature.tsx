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
    "53QepQW4dSrsF5xVQcJmmevB58P8AForRqyRkTh3iz6HuzwMHjarNuZSJGdd3QYXhcdvaWqmiPPDBpvPkp47r2C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txYWbHjNdP1t9yCVTMMMnLn32CEh3muSNfwK3V9wBVAPF3otqWZJpYjixcFPJUu87TcMZpWreCCFue1jg1QFfVg",
  "key1": "KDN8XAT76Q171tWoss8TFPoRtfpTrtWX6ngXkXYYLAQNDccQ5g4FvYJQRPt1Dmkc822y228gFUPgV6Vjiu2bBYk",
  "key2": "2G2dT1p5J5mHUugxgk5AajDiJbzTP3aSGiDcxPDY1B8kwonbV3JbSZVmfHMoGDLHDkeqtUxAXPg74WKV2EBTTiFW",
  "key3": "KRV4YNhDeBrG7FbPREZUNreQhpHQ9SYRec8az2wc1LfTBsmUobqCJsct6qo9QdjGnoABuqJ43gmRiD61JDssZLF",
  "key4": "4MNKhnSNxjXQqCfMJF4DWuNZTA24cAoHb5a96aNJzD3Ncvc7AQ2fiJjhb3uXY8WZnio3hU9dWj9H23vtJHHPQWmM",
  "key5": "4DY2LaWYGhmVQ4uHoWRgp2a9ciBiviMy1AgXhTA18J6uWWPhT1t4RorMJPDeVAGZRjfGi54zgApevcfqtMR6CA8X",
  "key6": "Rp31c5iaAEbmF9Yp7bvuQWNoLuSmjQ6PRfx6awBVuJxieatrn2kTWiA1Sfiveyfj1tRHTEdWeY3hSr3NbeadQHG",
  "key7": "2hnJpKNVRDirrTXRPZEWQeMWD13g1WgyXAdrDanr7rbpShicrZaoXxbd6RR5xqH7ooq8kMejjmuFtSp1qevxhGTm",
  "key8": "dEuwV7yrtZg5TvopivJzRkRGKpaLyhQjdH1YytRS24J4EpSEfYq4JBRx7vNhWb6r2CdCNhgXMh6LST6zXVKzFGL",
  "key9": "4zHCrLaZf5dUhz1XxqdHWNzgv6QcE3JdcGFdP5YXAFRdUa7dkTczJZLqL79HMedMvb4cpLdFcVcCSGkmWQrqWX9V",
  "key10": "3uicr1n7yhhvN75L6RcNLCEs3CCekC4ecLxisw8kCSUYZWN2VBGcMjfa46PmyZGn6dCVud7oKcwbTfZwFavSauet",
  "key11": "NxeeoAbiT9Wy8Gk4FhmiP9MrFWkMuGyALEXNCmuU7mkpJwdCzAee4LcTLrU3zXqHmufQoqHUUQwwkEiQB6XpRCZ",
  "key12": "5EXqBmQRCXs5xWU7GMTVBFkXBkFKYZvUNGyFcnL6wYtyC3HRNAF5bTqmpofBAsfkYjfMV1XykNjUrPNuyX28Updz",
  "key13": "4UxbnEnt84D8oFNhu2dXcFHUbjZfdD3ThFNqGP17A7sAr6QWFLA8sQXeNyjYJAUAAT73ARCu4sPtUJe29ffBbTqh",
  "key14": "mrwCxEFYrxguLjG53okK6rqQx3VbNDLtkhMoQAcbwjzqK1mntrWnQTmJuAaTrB8Vh4hVYz9xvVLmVo2J7nGBsdD",
  "key15": "4BpCgfNuJBvarfFqp7J7rawa6zStiUqQiuMUq8kAQbbMjkR71NPibApujD2nJdLDEpyua6xpr8g2qwZwePHn8rAo",
  "key16": "2WyBBkrprQeMVNhuZuwJAi9YW2CTv2YrhF9DBsnEpitTVUefKjgzFeiY79RR5YDBG2EWCZ433eabKXoMtj3xsHag",
  "key17": "59ikTsVw5gbuy86cMMmkfeButj6qG1CG7eSKfY91TJctDX8iG8XzRdMVAossqbu9JaqU9piHCwteKsH1KtMt1azX",
  "key18": "2aavAp9fxR1e25ERaixskVUNQN1x3TUJX5LMG5ByYaEFjZsfsmHThbNi1334NDFVL2tJZP4GFJLLNDQ6C4RwUKLP",
  "key19": "3vyGchJLFzcQcQgXybGW9pKP55vhMQTj7g2WewEydUPdJGyvHWcz98rVaH1YV7HQ7yY74Y6kD9SzcfvHr6evGRhj",
  "key20": "4ThvAd29Ae7Z472JJiGpzzWcpr97YtzkHHYYdut7xmEGvRUEuJaAHywQtmvh1PyPrU6s6RV4cx1vopitTnvzaziX",
  "key21": "5vWMNgGJJ4kHvfXd6z8hyWeAounP1ZNtrwkiaZyrWERZG7WYsSw6LCWp82zP4wAt1s9ps5oPQSW7SupJG5XH2CPf",
  "key22": "4pzzKsSLgLQSx6ZCbG8oMPr3BHeDeH68MnpuppKbhYsFp5qpFoRKVXh2WTwgEuof6ujD6EExWQfGX3RVuhSBKCLk",
  "key23": "sC9LkzrWpGT3CUDVh1fuqTSitQcmaRuJqnznQqXs4Dp6fJS9nN1m9VJcgPZ8sB2g2SQPrU2EUmvJvjZsZyb4thb",
  "key24": "3aa5e3tCJUwJmz8xv3MV3NxXQTmEK9dumZ1g2MS83v6PGVeqtuz6pFrt4UCXLhN6da4ZnkVNWz7RcMTzUg4r2c7t",
  "key25": "2d18efRoUG2gVTeNBNJKbFrp1GhSAM6dTXCU1oUrfBSk41bnZsL4q69tgbn5gsCgEDE5pRe7vyCiY5CzyC2Ecy7C",
  "key26": "3X7zCb4fDVxXjdJEqEFW9XEk2usyiw5Yx5pgpcR4FwVAS55omnWHFERAjUqP8XqqQXEGdrs5PpAbxcz4emsM5rce",
  "key27": "5cTwCzrUeVM5DdaX2tGWg4WyHHu5B3SKqm2b6uVeaZydBhRSYFmq9uhKC8tvKR8nXEQVH4hMXPFzUbtuZwMr3oy9",
  "key28": "3m6tuUpLKPFjGWRAqCX9cmuzhsWABm5o4bEngYeAMUtuFzbBRdPYVpXbLm4QfdFwDWcaZNapEZA6332xVvxSYte8",
  "key29": "2nDFG6dfisXsdQwS6j5h3uaPdamL3LAQ1oTVBDQaxF35neUSk3i9xjKCaDckRbhVBrG5ADpxDDTywG25sJ3WygsG",
  "key30": "2Kb4HWMYyw7yTdqgjuZ3euVpbRgoaPzTzfu35RuVRYgGsLuMCvaxXQNm7MZCSuMNbGMB5jRjFmshajAwKX8MG8QK",
  "key31": "6STg9xQvUaZzSae6SSuk5KTw9gkJn2nGs7MkHHDNwAZAsVF1DrZ2WQug33xUVj7VwBXoBjvF5kvCThd93sD89Ac",
  "key32": "3NaLyuxVAtHQDpR7qnxZ7P2jD2otV5VTGqvNH1X6TPWqhhZcryf5iKVsMd6R1CNGD5eZi7eXic7c7dYuH2hDgup7",
  "key33": "2vHX3NmSByZ2wpKezZmjeT4RbL3T3jpau4UVmkUU2La5Yikp3Dqw2feq8fsZ5zG6WjSgRSxy68Bh6NWnFPagZrJB"
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
