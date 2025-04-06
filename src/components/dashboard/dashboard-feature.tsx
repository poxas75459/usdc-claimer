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
    "PgMQV4ejxEwQtqLX1dm4jY95Y1fpNA9RL1gm1XEGY2xbQpahTmkbCpxZ7YrsPZJbXJ5pBjBDj5jAEKYkinCEqnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EzHLzUFEiCiu3nAdMquk3B8H7dFMKuvn1833kHtGDXFiYXaB8dfVLp6XKQS8M8cZf2szN7QAVQZ7LvHcQgN1Ap2",
  "key1": "3iAe6GtvUjh3732bS3Be86vqNXNXULe9qEVs3AQuMH5n2epjnU2URTezJFP224tKA7NQN7zjuKgxu8hPie4G4KN2",
  "key2": "g6gA9bgEqYVnXfW1f4UP8icmzn93y9favp18qqb2tLevGTrdGXfhadEDheMEvBfCyGsxgtSecsHJamFjjA8sFx2",
  "key3": "59XEnQmQYN892o81C2AM8EJNWJmjtsaGfA3Hfxc6nQbXcVfG47Av8G9E7tG3DF7N7JMQwDkw9xc1dhPntxaLHir9",
  "key4": "aKu5CwyD1AtEHUjEePp2ehmsnEkHa4AWkoNUsjKdhuZ9dBeMm4Ji1FhKso5vuLn3HiTh2Vt7KGyaanLNLZjivum",
  "key5": "4S4AhvGZ6FQk7maDKeqNB6sUP26HJpS2qMxx7r5fLfZBKmQpNR6D5jPriVSDyJiTrvygVSXZde32Gsjt4EHry3Di",
  "key6": "EQqKPvrhHuejU22hDToQ29RXSWR6wkaJ3bPxi5rPKVuUzSxfw5sh57XwCJ93nPeNY9CHebt8erXH1CkuEVBMCk1",
  "key7": "RPvHUiqQ9v5W3DTsni6AQgz44PjViG3KMz5UKH2sghLAYag5jm9Kb4p29jqiqRTuB5KcvppsNBnpAWDdFYo6HaU",
  "key8": "64k8vxAgKw9iEqqfwMpJdjVEfyopXpJVLUAft5ZDM6zeDjEHyfUmEn3Fi1n81A6JXUpt14QQFBCLM8zBu4cMTEns",
  "key9": "3pdaH2zrCz1XWAjeajvt9vGz82mTBzUViiwpKE3BDRn9QhjVhk3CbARtf4xp4xx3D3voJme1f6ypDyRatdqCHQRJ",
  "key10": "4Z9N5oRUxbgfKb7qxqDwPueiNVE1ksMGteSuqnXAKPSGqVJekJWbU8Fc5YYyQ4dQ6wCtf6BAqnarmMZun8RemrfN",
  "key11": "4qxniGjfisL8L3XSmKwfkyZcZ81jwkmU6Zdtx3FZmpw3wtAiYrSi5PS5oUiGn5FbNbAKEK93MTTf478jiZ6XxxVu",
  "key12": "2Wg6r7svMc4Xj1YYn9ti8pMDYRDtedG8n1jvPwTnhWRy32RbHeizTA8SDReGRjEvQeh6L7K6dqZy86cVpcTDrvsX",
  "key13": "ietGi13LgTo4dzfotTAwLroevJFxwkWeh6BNcXbPM4uUDPZsPHrbPDkU3CLX9SMF6uDGDTneLF1BggsRtCVKfpF",
  "key14": "4N8pi6nPmHiDC6e7hJxubqZb16XBowLzBW5QJgVWGc6BcPh9KSoDxZiC7cEFQjD8bjtiepMjiRvEtJJiWiCWHteH",
  "key15": "4zMkXoAjfgJBafNTiwGXyBXA8q1x4d2YFD7xqFPtWoVUKwZLdKtuiL3g3PBJPmQCRguysABSA8JqcLKnaoxzZ9ef",
  "key16": "2X7aqv7kqZzgaTmhnZVU1heDnGNiT6TDcE6i9Vb9aFWkswBFbKgpUCsX7igqBGZE9qm6bDHJH1QNj62uZZmF3LAL",
  "key17": "59ytLU7yddsttT8ME43pmJLtRHCQCZxxqBWMYhsd79kqaubE5M9WowsidU9UEqnaRrVxpZVvQLsnV8eho63ryF36",
  "key18": "5xKuaBdqCgB35VDDM3ZBuAbthveGMmyXjkuE97fGLhZUNWuZ4GBNaAQzWz9X65bvaytGKnLcyzRKwFXqSPGrB4Hc",
  "key19": "2d5bQv94vXEXm8kuerVUADKcN94vL4yrzbnnLaYgoAruB5chvK7x2pK2Tb43atqmLnPR4HkcCEc2FTqKNysBLPic",
  "key20": "eaxovyTRp5jPns9v51sCh8MYZnZV6GscgvApG8eATCcFsDKHCKLTSRB7VcNz5CkpupLA7Va7odLo2cm7Niz4JWr",
  "key21": "4aff39DrQ3nKLKeGTia9ueZAgriNykVSMzR5Sns4yg1w5jccGF4KqoBSro4ZQU1ig91zaf9deyjpaooTR2GeQSgd",
  "key22": "3Qx1dXzNoreeLxExJcyK9VbLrhVSD9YeL69jqhmygTLfvnozfAbykWFnxwUVxKPnYorTdKoeBqp6FSuLxfwuNcLA",
  "key23": "KEo98MJuaLoaGFGWdCsCutSwXwaUQ8mnJf2jX4HEjM7v3vs6Y1mH9L9NQUQh2t7MZ5EgaxYds3B5fXPAPHtk6uT",
  "key24": "KKAUL8NjVLKy2vcjNZwCcfVBvVpiM8vXu1uiaz766NuuL6GAJboXdUUqCeCbJMxaS8R1gji52YySEZymaEvXe1k",
  "key25": "yaGN4sMqr6vJezXxAemRMAXXf4kNeMjMYxDyHxC9smFT7VfrPQBVfi8hHUurS7qB6eCuMsx5oQ8CahoQHsSQZ7P",
  "key26": "5bKBaF8WYaB5ajNwePpYq934XdWxxrjeRZNRzgqPR1YtbfAmXJmmuRWQvJHUFZwksCy3kJEe5FoVwQUCb6u1uhYg",
  "key27": "5FFRdiduXWmTkL8W8Sx5BpkCQDc3bjBscyK4srppJ1JkvQGjrqkAbuYmXDCNKA4z56QhxKvW4M4dc8xwZd1BZFt5",
  "key28": "5FdGC4f5C1eD9T9u9w9UocoArRH8CxuygGVHZmnEYQNEiWsX66VhnhCrWFSt7DSo1ipC7TE6MdkqyC2riuEYAnFo",
  "key29": "5ygWpHaGCBp2K7LWdUaBm1XvJ2eECAByzhYnqKfTxne3MeEJAKADi6yTWPSLsLMnUu8pxQmAXJeohwPABGYkXjPm",
  "key30": "5HSLUu7k8XxRe8GQAAkzsgvzFZdMN9UqRjWvyPr5AfeEErodyrKvsWugyxRs1ubPtNKMvweG2MtQsr664zUbzkeQ",
  "key31": "5d4mdsdmsWJA6qrc1iSAhqfVcyRKnvSNS1fd7Te3PYndJRDBR86fy8oCDjuXjkeb16udjADhDEBQcrJvmxtVABYW",
  "key32": "61rNymrSSdV4CbmSTAvEZLFV3pdP9MjatfDGdsnQBaXke3uCABAsW8XxX3cBugzCfEfubqPffhdRUVTLM56qrQCU",
  "key33": "4rQxCBKQpHAMerkqbi2N4U1uqDqtbPCmGsmwdspsSQ36PoFTZY9UkjUsNtXX9Ugpv8g3UeyWpw57chsM5jw1mBKv",
  "key34": "2BaPjYwzqr4PvzU4S1MZAb64gkH22RKXAGJT1E91HHQRM3qhc1sMRWRF3SyUkd6LxCKVnP7DTCs2C4RKyW4pbUA7",
  "key35": "3A8BmKwY7tTsZ5F51MAPrtcmw26mc73sEN8LhiKjMrp2BCyAvJXp5PiG3dZWUNqucvWF7UGmKWoDUmSThbqSt15X"
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
