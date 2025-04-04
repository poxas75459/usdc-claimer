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
    "2X3hjyL1JQaBRGe4WXSGWMDvEsQSzLNqo4YXHHeVHvjKgdhFSFFo3zLjEcCE6x3z75f6VC1c5xtxtRhYFHu2AVxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUVBUHZJjeWfhRxAT6qjFw2ydtbGeK7f5cjGbHwGGMQALvL3WawEeMk9X3CWY7wEkFguusZLwYvB8B99P9se8VZ",
  "key1": "3KHtYmABukRDAAeWbEMaqYYu2kwJti2wVk3ofCqJ3TH68a3Fomwz1tPNigZKtr1mfzS5vBsSKLfggdVZkBcHLMkU",
  "key2": "2XrWEtZN8HUzCH7TFtKGzRhn9eEYxGzKFeQ6EUcyCfe94KEgnxUPC5z46igdoKCuvyBEEa2yV9Ew6rnFETUkXzM4",
  "key3": "4z879apmU7yVWWVto3ETeaK4D7UURePr9VHCpZwafgiugJNcxQL7wQzhC9Gx49Yx995L9HchuGsABQxfBQvi4ozU",
  "key4": "5gkkPxsXdecPLxRnUwwcwbntGBvcPeGWY7sQb8Fxe3cZCry6MFQXBHm4vumqCfK7PGhezx1WUfM2jJvYf1m7XFyf",
  "key5": "4gWdMWjoNVPqvPH8GxzTpANAtWLkCa9uUZ1fS5jRinVqgorBEX6gLm1bHser8V73cs76w2KkSATTNBEYd48s3Hhi",
  "key6": "3BXp3RMrdUgivP6d7eWq6zQqPT4wh1gwkDyjybEFchJjt4mRa8SbV5yknfftn27z9WYcRhZNiVkZ58p5j1wYdurb",
  "key7": "3GD1Sj7sPVuSvj8kayDcHbQuN9gEmRxziJciMRGQSX3XCqMojSAqLthQnM7f7UW8BnyDgeaRpCWqiSEP9tqBcK4E",
  "key8": "2rdFh87AYusg86juRPhLZ6Pv3cDhXMukVVta7XJbjFJVt7ZANhpErRcvYV2bK8NDMe87Gao6hjjcDHqoTDF8WzeY",
  "key9": "cMtmj3y2WhuZQYb6XyUQWv6uAoTRoQrNYqA5wBhjSkyNfTPsHLfMPF3WdEhhVE4FuHXUmSEL6ktNHd9gVEEvZEc",
  "key10": "262HAauyHkd3YiYpE1ECqLCktYDoPPbESRZBc59saEhjQmhSrxYjyNeao2iBpGv3CbQTdZnT63Ct6x8ihJY8feQr",
  "key11": "39eBtedExeNTqiTRQrmgVcbMyGSD4BrvPMhAWEXoekSWLQBKoq5tRTFpxY4zHrdhNugSSNWXaRJRRssN4APpanCw",
  "key12": "36SsKViTdKZc8bCELnxmWjMSqcpnvwPk1Fuw6Dhg25Th9kiRxrc1L1bdu6xpnirYTNpjSYYjSvahwwr9SHjAF75E",
  "key13": "4heLvAYU9w356SJDu7yNVAGUkB8x6MtxpebhuifVaR6ouw8EWhGYYduQrs4pMfHski2CtAvHqKxA4AqGQsP3rRa6",
  "key14": "5Cc2B1w1ktbF6aV2oc1X6DU3E7AW1uDcVoWpB295szKjxQgooQDxF2myZ9deF3tQXW9nbKSL7b41spkTzYSpG8LS",
  "key15": "ushwSCxxesNhV5f32S8Tfdr6qtNoJdL9fjPGi4RcuNZJT8vpa3VF4QedDjdh28kBj4Fw1w3mssYRawZEVjNf2ip",
  "key16": "f9znMAAhTh57cPsY4tiFkZRgzZgtEKaGtzcDeRZoA3cEfafEaJBQTkzBw6MfpKRdA8L9aHiUyMVn3Qksp7ChNgf",
  "key17": "35Uxipzuoy6478khMBebpcXquxeAek5rpVVHkLDu9kaLyunhz99es8eC7Ufgrg98XGdCMTcziTSVszcUSAT93QSq",
  "key18": "3AncLY2cR9yozqzkG5nSnMaMc8uWe2q4he3iti8x9RcgkRT6r4nSpLkhMnLSreS3bB6oYhTt2EvrVmU6ezQozxeZ",
  "key19": "MPai7CfodAhK695hawcMa9WcKyrgYoHQL98Rf5cx93b5MpByfvuWwafhwt1GLpHqux98bVmEVRhn6UscGRK5saV",
  "key20": "3rfWBvpCnNLRQCdGtcv3kdwHgyGfJ5SsFsKemZmuuhmhaKUp43A9ynwKqS755iJnFeNsnora9YTtCZVeUVmetX7r",
  "key21": "sKfzSuMvdaHR7WiGXmCohUXH6taZcptPfx3SRCpouL9aUFVAHEMQKb89HnXZ2VQzSTYwub4iuFatkBYL23nipbZ",
  "key22": "2wpx1nmJoo1XBFfXswWGUQrHWLvr2mSPRBNz2FtGBhFeRjCdR4Z7bKAtMVa8i1dqqXviKA72xjkH2eWoLahfzz1H",
  "key23": "RhasjCf6v3EVUGcc1PKH391dPSLamk22L2nKaWyPZE61kV9mXY1iLqEJqA18ZM2jMEa7diA96o7MJUzbaVs82p2",
  "key24": "2ahJXmercLwYaefrZqWKLnQTLA2Bj4K1rqzU4vyeXo8VquBbV3T7PJ3hgm5onEL4iKcCcAYVNqYHPD2jNKedWFqg",
  "key25": "3L2RaNzCk2rmFJYMmzeSPznfc28b3D953ShyHrfMmkM5NJcN2F28j4SNw1nBrNPsRUhP69Pkc5bUX1kTWmn6tMRY",
  "key26": "63ovrWJuQRUbM7vsprYPrWZYKjr4xUHEZk5KDcHkzEhhZ2Q9kKfSQpbXkepmsXWCfZrgaTAohC4byswqZy1R6Ku7"
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
