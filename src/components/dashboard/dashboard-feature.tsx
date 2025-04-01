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
    "4wPMvMP9FDgoL2Q4ypTdbG3qzZitUrpa49ammxi4ZjbBi9vca6iyF7xGSKVsBQssM6tB5XykqEN5kSaGqRk3EEqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZGGdg7yy9McnDgbEd6sHY4t7NgCQPP9PQ7PvKnSXYZ41GtorMgC7wYDqwg7cGnG9cUY11aAavjDx6ysZpPf1Xp",
  "key1": "uPKLS7ahueURyEMwkFh3thmtVBezpkhtf4vEZr7L9esd2bNdNA68LJA8BSFhmUXwmkQXJJYp4CFtNGBm7GNtDTj",
  "key2": "ZPzVU5Ww2jSoz4ceNUXT13rFmFvy2dgvfJgyrN9VHDhFJ3kC5RPJ53aDpJe6BeshYTrFm6B6z69UWc4bB4YbySP",
  "key3": "5tW7WLA5dwQienMYDXmweyRj1ECGoui2T3X1ctcJ9Kz4EbGbmAM9kLiZZkeWpoU2WT5rh1tDszvJTeDBjV7ifeJ",
  "key4": "28z6nuij7khXE9EAMKpgcuv1NM3rYtw8MgimxFJSa9LkBAeQQW2Xs4KS5CcN59xV25PpCswWcrYKqnXBXVsQxFh4",
  "key5": "32XKUoMFUWkd2Weaxd5jgzSAvzPfuEGcPVYuJqU26FJc1jnEH17iueRGxa2bhpm7v1fGZJtSa6Jt5v8sNnmwekQY",
  "key6": "2atwGP68oqQtvuMHEZnVTYXsSCLJ6T9hBbKyNZrH3z1XqNRgejGrQgS6HHSvoMwRVasQMoWjmkiznnjP2qjy12oQ",
  "key7": "5Fma3d5jKpksy9vkAdGRbVe27jMcaPkjLMs1jkrKvSuec7NQo5wupdvHAT6ibtGd3d5GAooAcqt1L17QY7DQofkb",
  "key8": "tUDtUb8NhnNPhJxK8qqoRP3aUrWR3zWRqgvsYk7p4UALmP7s3aoyXbDnJcgxyfjbyGp3wLwGLYLQycwzrxUMpp9",
  "key9": "58TS6RyR7t41DCc6Kfts8NgoZGWw1L8BctPSfixWi2M5CSYEPFfHVXTSi6j7qyMXsrf3kZP74TcuBPurY4a2sfAG",
  "key10": "5yT7j8rokqVE4yUnCwcM9LViPtLhH2X1SgVZCf3HvwRKjiofrepwPLnVsgHyhqk5syZ5oyhi7kx7REBnCywYTNpj",
  "key11": "rMvVo4t9pMHd7YxDGtC3EngSZ6MNxozb4y8GUt4zJH1vFehkBad6rdJodMqRm1iVxPFQ7emiWj2PSrP1bvyXm5G",
  "key12": "4z6xGv56HcBmmWyjGMoRDjswwV9aoX61JXfwLGRr25BJDV6T17W4YGfETxzn2pA4WtD2oEqiSwkoSiq2S39Tp9S4",
  "key13": "3VBgspGdP1GajQFDmK64WhP8jP5G8uXfn31rWcsRCV2Q23w6uRiPoJfeF4jQSj22d82B26UqiiaehQsgacsz2rDD",
  "key14": "56Toi3k7bJEka2GC1DLKEWq6MkiNNyAMndtptteFHEV3ZyxH8aLNbeWTYtjamc1WQvC8TkBrJGasUv6Sk5ua1TYk",
  "key15": "5SSGYzQFVwKJcHYNY4fXwnFyZpyAq5FTzR9AdMSZuZ4BkMM5ZufSZ77mrkSk8eGEHJXPamfTuc68o2Z3mf4D9PRA",
  "key16": "5PoSiW1DdWz6LTxR4c5QHrGccbC7n3DmSHKot4w5EeZb9SvvsF5VE9uHieVk5X7F2igo3EJn3my7RkkjfzyASPif",
  "key17": "2BfSm51hCeiWk2M5T3YUpVKgJN74RYRRSb5gLUGDz4ofBJ4DZo33RxfL6jd91evffUK1vvzxioEKtQ2nr1QWjB6z",
  "key18": "4GB3tLMFWLU6nS6hCK4ozpkR2iYHsp37v916GyB8wvUrC5jeL6wQs9p6h7sksbYR25TYnpe7tbHvwxxfdLrcXfwJ",
  "key19": "4zVBBaFfsN2zbspXNN2qdHTgTGz62nDqigcNc5wFtHsnEMeNbAPCvgVL56BPqWoJosjCYEKHokmBiEWhRAfdU5ZZ",
  "key20": "21EMzQGDycdUqLKhMGbMu14My9NJWGizk26gjCAowJEan5zWRbsAmH9BiH2GdEuaqPwYkfxXejUZPXQm7TwhzAii",
  "key21": "oUaJrA9CQThDBWEpTFaW67uopzpWA5v7ptUGtJvm9cCrxhF1GbNjC26BUMbuUXUUAuURyirqjg1bqpGjBxGTpnw",
  "key22": "3Fxg4D4jWYMhykTn4R5hNK8LK9z1TsRWy5wKhQ5dyP9JVss1dna6ZhcXaH8GPUdcbb7TNujYVxkLBnxVmojmA8zs",
  "key23": "5naAsWaXyySy3GGbNfMMGZQLCsArVrx8Ugef6cmmNdd41dCVLeYgCzrJQwoaeuw5czVwwSdVxGexJPb8oEhEwDWk",
  "key24": "2N5gL2h1Eb3S59yesnQjmKWHJkarhRwTnjrcN1L4Z4sbvQDPtLY1TxENwkinnvyUHzwHhnuC3ViV6epD8UzvpnAu",
  "key25": "5ZNnS2WdKENxtbxz8w1R8Pe1pEJBjoTawWnybtSNSS8ayMtNXpLG3xScXmDSWgTQBC127WADn3NPS3Y9a6CEmxUA",
  "key26": "3fu2xwinNJc9FUScKGf6Qe468kZDyz6AS6CetY1LC9uDRZMXVFfUW8yGLkVuB3S5KfDtDw4F67kvBzJfC6WWBKCV",
  "key27": "4TfoaiX3sp5tGZ5cWkTyTEzzx4nWCND6QS6kFVwjozdXYPUczJBoJiJmzXN7BRGB3armnsX8TcmXVewnLsC2XYYC",
  "key28": "5G9RwGWzFTVWe2HQ83nKd5s9pmioBe6y6PYLQ5edKmTDTxfE7CeiDunCxkQgT7sX8Sr1w19BLNBt4qKhCEgq1Nk4",
  "key29": "3svFQCsMAhfUrxVaQnesEQ2dZJXA2nfjZkNrvsHqMsDQsDDzmaDGmmyFVzWcMLGdjC8xfS9GccUp8eJLRoM7bUTx",
  "key30": "2cYprrTR8QAWLhALX9NJX7R83jmVPLWFUMc4ivK388QPF9bZvfJ4vsQREVTKPuizA6y84qySNPDp1wR6iFgvk6Yr",
  "key31": "4EhSEWUHrCYyfdqkMysKqSR9QfQjz5XEjWKoreJx8vwe99K888sSDmm9fXABPnEwXVWnbB7ej6EzQcZb9UYU1p13",
  "key32": "27B4NnNqbNbvBnoCazzSiskPbUwdZxL8vNHvLHA3EDPwusi5scJcYDNTtvqiinUDnYqBio1fnLswecsWX3EWci9n",
  "key33": "3a6DHGoB3JehFk9J4t4z1vHZy8anoVThfGq9xqJnUcgjsiHYbNNQApTwatTP9MYdygbYX2MxvwiHEEP1j2fPHxJC",
  "key34": "4npP6V2TTHbqSU6svRcyv53ZFzXo637Zbrcebh83xnyEdERHGcUDoC4suVuGqxZWjokYSZSv4wedVdG9Dh2VXfFe",
  "key35": "3emduHk8awr59kZpvKGhnuFdagu8cH1wV79F2ABUwttBD8ipLm8uh2ecMGDJ7mHyP8fnjW659VFkwsDc4pNRrQFc",
  "key36": "3EM1N57VGKwJcokqtU7GBBaxP9hF7Puy1pbk6yVJww7gRuRgd8nAENwn37ZFWWxqH3iJ5oW5E4CuMK6F4Tmtj3pa"
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
