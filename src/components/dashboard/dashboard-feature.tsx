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
    "2k63XdyJuria8SQrUxw5b7DEhyr23bLdK9wBRVWS8fEv6SYwTTqZytF82ncgWVMC3GUxiN3n1tBrcc2K5uExdnur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQu6TwE889ez5MVLJPV3yttusTC5dTjvqnMnqfQaNsc3n1u8xhejefAFxfHZDm35wfAqSEkAHJCXEg44cx2GUv9",
  "key1": "3F69xs8j58xkY3iYNGvK472WNSp8LftremNbFAfkpakM7a8shycKg9xUDymN5JKr61jvdzo9tL1bP2AZY2GTaPad",
  "key2": "5bf43XWHcYLmNePHc4RzViJWKUKV9k2UYamCTpz4Td3eTBg4UNQMB5ApWPJP4LyMxGxVarudch9prgVimLAbK9jV",
  "key3": "5z7N1R6mcGqC5WHvmoB6SJ58Dm2QvEjjVE6mC6F1E3agKubZk4mALJnzQdRdm2iqnR78XHRBizMABNTQFecGiT9c",
  "key4": "2NLdPL7P93HYJeiZTeJ4TL8TumCsUZnJJRYqmvYB6qTTYJardaXuMePThM9a2KQeYbvUc8vrPJwmiKibAGDA9hfS",
  "key5": "MTVis5HUyVsKK73yzYmnJCu1kKEnZP5Z8NknTsrNhfjXjrmV9MCKv6ykrhGWaoT1sz1cjqwmiQHLK8Kb1KaLBPM",
  "key6": "P8Tbwzc8hDcWgKAJFyTxKUgUZHgCimvVcSVbxtaoc2qGPsEQ9iWzo7wD24n5d8zrgSshKZ2pQE922yTT1uWJzHL",
  "key7": "65Gr76p74ivuX6dnHCb2Tw5TtecCJcmom7fNsaRMztk8gMmXPBt6taStAYe3d5NFnANUj7qBKki7BV8RYyQxZ123",
  "key8": "4NxTKC2omYUwa2eQYoyA3N9HcDQW5RjEm2mto8dVkbf85idaBUJ55cUjNAMxgFeNPFAWmTjj6pgVoMLkPacAxZbS",
  "key9": "264Vm1VTGRbsRUPfeva2j9GVahEtr9nRS79nCUEUY3SP33nrmqeaCiTrNBPWQZqMngqa8GUT1RNi1f474LBALatj",
  "key10": "5HDhQAcM6xCfNYxPn5SX1RxE8mLAqdPUoHggeAKzJtb2B4e8KM1fScxcgnskomKpzn6kaiFsHBpEzKf7XD31aqxc",
  "key11": "3gWxNGquGzd5aWzDvKLTyWvn6Vc5sb35GWA3Yy3wd6Q2edBbZhcSe5tNWH2UkjZWbJscS1qUWrVrfU32LGs7ciBn",
  "key12": "GPsrHRnhgzwhmTXvHbNcvYMHLoG788VzUHRe3Qz9rL86qhtpKdKdg3sm9NB3HrSQQD2y9dYudS2p73t3mYkSkxy",
  "key13": "2fCfUa6drVH9VxTfkFdigPG2T3cKMReQjLDEwLJY9jouVpiK7yjPcgfvQg2ornLvGTmA9HnbpYoAdaHHJospeuop",
  "key14": "4avNkSFAKneamT31Beya7tSpNe1tALN12Y5ZaTUDUHybtWb8LHv8fdeaH7ehWM18zyNTzhVAYoeNYjZNHPqLBtwJ",
  "key15": "2QsRJgMWmmUEot8vMs7uYB99Q4xo67JeQTkkJ2AJM7whC4ixiBVFoNJLBF7jZRYJA2zg12DLMLr4TQkpyVDakTae",
  "key16": "ZbXehUa78yJFuoP3X2Duayb1kyovBRJkA5s7XcrpDL3mFhh1kZGivLwDh6BSaDB8eJkHXC1R7NDmdnGmRykFoDp",
  "key17": "2MTQ6UUKYZs5FHScaebo1dPcd9kUYr67aqbo5KCg2zuHLCHmmGpz5ZDcRCTc27eKyVBscpDXw6FRtDkmSb82p4ir",
  "key18": "b9T6bB8YsZq7Cve9fXHJbPVSw1Tg5uHQiUWgfSeeetREaRe9kPV6Kts6hskWv6c5NQmMKxn6UE6yyvHpa4QgQkA",
  "key19": "232KqRSaFbqeVE72YLrMuA7yMoHCmQdVFYnwxQe6hKzrLUpspmkUucdc3xrEMLwNqCoqTv8KW1hA3ScGRUUSTC73",
  "key20": "3VpuyK4taoKUmsyq8pxWdHUyCsk5Wyq5iKiF4jnbTkduccp74qErBVYGU7ELCspFotKDA2CsLLj3usQMvCGUXBHa",
  "key21": "2Zz9JRfCoioQtk7A1PYL35MqFL25e6xqWYzLujkeAjWvCnynUBGcUjJFXgNUC6vjzKHPDcQ4RLcyBwke93vFEGNM",
  "key22": "2Sij5phdNHSoLQSHiut5rTcFpJgmKqLA2uySinq9SyLqaBCPFLcE5tM1fq8YCzGEa6axGNhGCfZMf2mQiYZwSwc",
  "key23": "2VpJRqArXJTRTL4HhJGhvboeqX1aDGofKfGEDpmQdn7nBqRpsdaNzdm5fxdzhrQJkeLVuSjB5zQ8MJRipYCqFHbb",
  "key24": "5Km9p25KWzbcHg61jKXSR1WksitAMoqRcvc7PNyAn9PsRYjEKQpGvSf4kDtUfcrWeUo4KvmTD2pMGG1h7AFbNZ1f",
  "key25": "2sT5JXUEez9tP5GJAY7Maf3XVCBGzMDfGjrn1JmJxt4invFxV6PbnLZSTkrB7CZdME98AZwuadt6WkgnywiqQQrY",
  "key26": "611PV7ZkKrsk2qQQJbyJCUP7vvxnXnfMQdaqP9hkQ9FVzhbvrLdNQDhhKMnobDN23uiGHDADqFeDnLj6WYVvL2Dx",
  "key27": "5G6FhKGYeJwv5JwuT5F7T4q9ymonehkjWrgY6jZHCKb2t42813PGN5AmREPPQdnRkZxkSjQfR8kpmGrVTNtRJR1y",
  "key28": "3z79zwuDm4AFQpXLxcfrW2h9zURkTvRERvv8fxnCVWuAEVceD8mHGy4LGcArRGXa6YKfoMfNDhGcfY1YTmR1PWjz",
  "key29": "4L5gt1VDzEk8LQQZVpXbL3w3A4xViKKC1UE9jSu6HGfKe5xxMTGXZUrxQgAczeJ6GfeT6JQuP5yWLiczphZH31Jw",
  "key30": "5xUb4BijRvJX1JRm2MxhNR727B8bkNvhRyH7XukQ2YEh1JuoBgGZWbsztiPzTyJk6xjoCEipiTrcU4U47hyHAdC3",
  "key31": "4EovvWdX1n2nxV8vxED77UNYbjuxjKs9G7C1xwUTrKEME6crcUfbMSxigE37UhfDj6KBnSp69dez2mTvw6PM4ADg",
  "key32": "jiqgDiXE6e79nAdHtWAcmPGBJLCcpiTPSxtYngekbGVfBNvUWs9fBFr3NbquC8TXLtHrpFwPaRqAeVaxKZdVF8S",
  "key33": "BfTxpaG46fVSm6YSWnQNCskPHGF6tNHNAeLg3ARGC3Mu5xW1T4djggeVrofM6tYSXjoaqmpSvgRz1EmPKLVBzuc",
  "key34": "nFrDzHNkxkiGWUuvwXLxQ5SufmxeC4cBf897n5Q4MqiaSYH77dvTVujBpUTySTSetJG781Zx2WyWBzbwdiFHXc9",
  "key35": "BXAw8uPFrTqXYvN1BVi62d7MT9xkkN2zHDMDzemmbtaHuYSXxBFabYkxq5G3gv4e2sAZGP72U6jF9bewjfR2XoQ",
  "key36": "2tpR89eG5navJoZTX2MTeXjb8s8iGVF2cBPhjPWqzSLnqPUGXCHZ3ADHoVuA46iKraYt2Wut18HYvh5m7vu675SG",
  "key37": "2ZVjn8sy1TJPqTnmghtr6TrZyCKEYp39ZpRJnf1GmD1ois8ANGxta6JA4qFHUsaGtEeNfBfu4VuSLfY4eUGLzfJd",
  "key38": "xNDboGFtRhSPanNNGuYM6r5FFxLHdPLmX5LEG998yQ1XQHL2pThViRkv2T92nqABmVgyvZqKpfsPPQG5Kgtvz2H",
  "key39": "C3AQGzt4SQHkBvMEkj65m4rgZ9BvoWJ9V6oRYVTxsWqCCHWMhWrd97JNe4Pt9J7D116Krs9t5vP1V645QGvMQxH",
  "key40": "5GVvD2NToctYQJQspNcR8UQMSMU9Tnm3sFb6euSDAEWm92RegXERVGuXGLZLyraMgSSEB9vp771VVbRsMNZekmPk",
  "key41": "5YTziP8f3Lx6ekGHFA12NDBNFwkwvnh9ZxwzE7SQRTJD91DawqpRuFrpAPSHs7Tb76Q3zGBh1MDhYuFG5XCDLe89",
  "key42": "3rYx3jTi4PCswQsry7JHUD7p5f7Q9yCCRSnmtZRUbHdCkPX5uMPwKr53w2eHC7ZCszmZhG6G8Vw2ArQYCMWXDR6i",
  "key43": "2zdgsuCUTkt4BmmfwoT39eAKnz3EBiVP3kzMgYjUs6xpvFMDecjUmWTvWSvVeD2UBbs3TuixkmAmAxd5DXb84iaa",
  "key44": "3Pkz2Xxqcy8fs1A2WQRCSxWYNHG2aVLR9xdd2C7hNKWLKjKXpeJHhKNPPuScHv8YAoaR5euiRQD4jP2NCC9wHGUJ",
  "key45": "fVUJMw7GMbcaJzZrXANk8uc2TeuLqK5Do6MFUAch5QAgHDwpv2PGrFTPcUgJaYHAyg28EkQsVNLX4qT7pJHHmYv"
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
