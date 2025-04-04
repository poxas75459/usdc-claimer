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
    "2F6zVo1g3DRiYurcNmeGrScMEoVacNwQK6kT98pjuk2cU4hxkYTF9Xp5u45osH18tgP7oms1FtgRuWgAXi5SbssZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEdeXy8k5XpZSzEXof1XydhcRt1sijrwQbBE8PZ9JP3z785f8c6gR7K9zJ1YobEBhGqnoVGEfpZ7mTwkZr2yom9",
  "key1": "3s5WoLjQmVtWSACydn8D5c7pPgLPXLE6UKzqAf98EXvGeFujqeAUwVoLKF1CFHMcaGPh2LVYzGLSwBBWE8dEFafd",
  "key2": "3KT8Y92Zv9Ev7Z87LfquuwbG7A9gNmTVRKL5RXrp1op2QaFKzyrLV4XFXtfXNAT4MUunDdRPi6TKysNLELJk4WDL",
  "key3": "4zCkW7MceobgEmZ7fFAhAHquanSUW2L3YoqjBYZWb9WLTCVhRLMnRghdtD1ccEBPLa4ayEHXcHwXmuqbtG1hMYZt",
  "key4": "2hwJxMsUVmPm72QWCzE97X8BNNqADh5ibQaeLuTdtqFSY2EbUb3XZnG1QPui23hejdJVdSj6F4GWjcpxRd5NyDKE",
  "key5": "bE71nEWUAD5MX8rAWwMXfTAA5TagBAMkvcijx39QoFqpHE6LetRpdicXxr94CWeRmtJ69GJ8YYYGj6QnTpoSZhx",
  "key6": "2eCWBQak6QpujuPCnP2DgNRjps4vHKa58SBek9iEPomo2fZTWsAketMCMstGZDWmSGx4CmSA6pzyJCVy1uf5iA1J",
  "key7": "3BAtDSx6cT8xPaHr2k2TtCEjyZpEHUttCZXMnjd4bTgi96JqHpfixGVy1mTTT3yqjRXg85GtG91Y73HTwcbDJ3Pu",
  "key8": "55WRMUJqEghmW4XAp1kuvhRu3j1VgUPKjiHPvJbneX9Muwkzoij8hG9vwkidAYJ8VWnb8ME3167Eefq2hKNQ3QLy",
  "key9": "3KQBFj45JvHNRbkjfcs9UANUL85cZcT32tYDFEgtwZPd4aDgTmR6iuEBS5xFFskE3X1M2tbi6a1o5qXGx2mQPZEf",
  "key10": "4nATppH7yyngpM226SmkY1r9fEqAFn2QYH3gGzNntgNrxnX63UcFBzj5YmsqT4fvjxNbnBE1WFP64wNst2YRWpFS",
  "key11": "3F4MvsxrQZkwhg9WKGpQtTtULuKSx8QSx272yu4iPCbfsZ9kzRuPzGFYSCpLv6X5YnayKaw5PbJcj9f36BhaH41V",
  "key12": "4UJxvzZwbAuymkNSvxPhQffsXqPMKcSZT3aos4hnUbWhAQjhmVSG7rWshe9tVXw2jMFdzk3235UbhQ4hE6HJZmCp",
  "key13": "2UFkxyZGTEQbq3ANm1bKqRBajkUJJ3Z4f4NuWXN7PqwoJUw6pA4E3znp7WTAYVYXy76xVCiAhQRKZE7LP6b69ccX",
  "key14": "3H2qXsthu57SgNiTZqGMDA1zMqcvWgKFr19NB9UpfLVhMrrxCnXUsPufdyukdmjT8ENz8zJCVQBDxDVwALrHXSHa",
  "key15": "3VEYDXhtsy3a6HR5261CMQvBHqcoFAjSe4NB8G2uAnb7sQoDGyPCbdUTEW2xtDekc39ybXXj84FwNsSv7cT1bHkD",
  "key16": "3cCAqSobudzuRn8KHW37PK5y1zLgace64qZwxgio4dDL9q8Hft1ai4ehuURG2fPwZq5zmGwg6mL5yBiHrX5xSvvZ",
  "key17": "3mbBUvizbh5ywuXrJnBzJ2LfLanrANt9CJqZREsi59dKJNcjedi6SrDNS6K1FnDETy6F64BX4CrRrJ7DzPFrciW5",
  "key18": "3vTSvGqEGAwqgjXbbFKV8kWg84fgzZ2ztXaNhikMjyZhSjtRcDQQYtKX1653q9wMTHnro8G9VDHVyLw6vvSUbAqn",
  "key19": "3WC9MD1c3znKx81n7bFRZxz2pf7JXEcAuexMWrpEQZ1qANvEiUsxd1PYUerNBTrtJsojdxEC7NHC6JcrrYyGeSdY",
  "key20": "2owcW3DDLtjhQuZtSHtb89wnbMXG2thsFcEVjR8r3kNKcXKcakN6GmUPTaSB6NQacD6d7LdWGyVT9MSqxDWTbLQ8",
  "key21": "2RViGUA2JjESgGR5jY5DjgYpvNWEKktKnP2pxpDYxCuFLNAGgSM3uFD7KCPnfT1pmjQXUGkdD2wjk7ShftxpzZzX",
  "key22": "3cjcCd7PBhd7W5bv6nDhYsSNrz2tvQt6G4uptJmFsueqweUygz47cTx3fUBxWrDYHsYw2HNuctrGUMdgEqLdHGVD",
  "key23": "5szsEi6MTw1VsaYDXyChVQGAWWmetWGCXKxRduERsPVGrH8uFAwRAQDnYzorLjFEuPUAxNcyFWLSzsAN4iTX2J7i",
  "key24": "dcTCQ12ULaxkQzF2Zc5dKigf7VWp9fqNMWoFx3kE74um3uN89816cTf7XzY3MSVjPEE5JHTT9DKRhvJPgkqmn3G",
  "key25": "5EHaem7bxkdDCapcB98iNRk7VWRhcpYoa7WhTiGdMjoBDnoBM8h2Ht4hQnwLBUqtLpan5mc2vj2MYgyqEWNxrbMm",
  "key26": "4eQf8Pk49iiTqK7vEvRLDQeWmo9zaHNn3V3hZKogt94aEDWdcZA4ddpWXEFX23oQPTBwu1bCm7wBMbaMdeP7rf3G",
  "key27": "P2oiZ4152Ymj8cHLaRMxjCwb3EcX8n3QqS41fYm2NLGToK1c7QGrdBQVcYUSNGvZYNNijLNtu8KZsadeExTUBx8",
  "key28": "37sYb3GCCAJjLBebS3Av5ETNLCw6NDA9a5DBKazcqDR8StbV3NDYFTFWNcrR3D9yC4BobqDBYeXKoWHKa4Ema4MR",
  "key29": "2Jf1dLoJNTAfX4AfFCs8mP371bRtT2P5QvejqdmJegMFum8X2yg8JyCNt5az7acnaBGxwd6uaRykA579qaL6Cwz",
  "key30": "5UWBjB3Xz8mXw4H7bTUrSizmqcKDoa41FGYDjEHgdVjBcyVKWP9k6gkrejQ3Natni3oUZK949pWwDS3cYu5zRnAq",
  "key31": "5AxD1n2EUM3Cv1EiFryWU67N3YWua2fHD679P3CpeGA91NZk4jRasrFG9k3B6G6i49qmJBUHL3m3kxiTK2Aq6isy",
  "key32": "5TRCGwgXoZLBMxPZmAb1L9z9B2n8FNuLd8sn6s1KKAGhEi4BQzUdVfSrRSoHcN8AhhWQiwd9nGNwYaRdgMpCGwRo"
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
