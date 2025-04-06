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
    "126uBvioZjoB6j1JKwTaC36ft71RTkvm79zwY5o18BbFN5poi4fsX9S4gGupUNBhMxrLsF8EGCJmPraM1GVbhqMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifS5orasheQTJW1CfzhsftENAzyA4kCJV2VhCve3rXEn77vMFn4Tzm8ZwrX9A5WcoDbY7Q1B2Ek3gF8pEym4ok5",
  "key1": "5E6QFzFuE8wWVYW7huA89p2gUuGsXrqhJ8t79ZSHS55PACE3RLZYy51rMHQJYdmitFxH5Zu8wwQZTm45TDNGC4Ff",
  "key2": "2kpfzfzyuzVTQBVG2xaVbMKVbG4BCYBkdtVHih26sLLecSrk9X2FmrxBoJmmpmcjHVdFqEiLoW2yD3WPw4k89Beu",
  "key3": "4NNVTDSxqhHvnJAwnXin5hNaH6H61dtkLiut8VaBKNFqcMxujYc3JqhfNtjsd7Bf68SEvb5NFPL4cp6pEGb8VoGf",
  "key4": "2gfkrrBmpdvFHvPVNbSKbpyMabW6n7ZZow3LptmNgLAJG7gjptBeZG3r74C6QMDmvMybwQtDBhCQxU7XvSNV3JvH",
  "key5": "5tDLDhf4FuEB7Lh6ijh2xVbEHtLLAbUb8dV8z4EiCTMDGQGzFCDFHrDfGjZpKnYtDtGFVEKrtzBipwfDce3MFiWU",
  "key6": "5k22BQtygCnubd5YNZxaSpY3cGC3J7xmgwSJf5nNu6Mr1Bqp1b5Uk9mxtmHDM96wnvabP4DC27WSuxoLXkfTMYGP",
  "key7": "5KaZb7cShVwyiVeB34Nnt7gXaFz7bSiaWLDeo9GX26HgufoiPoKEXU4ntedNQiaNnnpWrLiUBGRwAZd1K9hKZv3t",
  "key8": "4qip4NyD7hGhctaxS1UYFRb1mwBwb36TXB1RwXb4rtuj2Wud8cxKTNhsnFXTqg75f9Ujrcx3fpi2SHtdWP8GYiV5",
  "key9": "3sDUKZV1EqFQ7X9p1rczecBb2vHDTng7pyh7vFBBKyfr5y6EVJ64yALWuZq8Y8bbp5Bvc2SNyvfeqhZwbEheWby6",
  "key10": "5mLNjRAVkrZwAFsuGCV8nEks6HsSNyk4yuudsLyeRfSDcDtyvmZDdkfsVjX9vRLkrBNVmRV69kTdyNp6aDah1v4z",
  "key11": "2jkcgPudtJ5b2e4seALBk6JDfRPZZjdst5TVGA34NP6gfb4ggHda3pbLtDALa4gouwH79DKAkZRyxn9riy36GsmB",
  "key12": "5syF6AcL42i5KgP4MkU55SZF6LgoZQB2RMAkwdxVsBGxPkscYPHvMoU8TZGGAoy3FV58pg9GnwuyuRS6hNVXEUHy",
  "key13": "3UGvpmYEVahvKeDuGAuwAne3P6Zv9apwZ242U7fkUYZE2nGtgR1MZLbjYcqKQSaTgswRtkLLAxHBYfPRXnbGxFou",
  "key14": "W5idUfJtCdWTeowY25bRJLyx6VwbfSAAmwkLSgY5YV5R29e7z9gapKi1K39PZRCN4LVc5BPqNyZdWx6LMTwjqAh",
  "key15": "4tdcri11U8R2bKGqrmBbtjMugEn3WZVHK3jXkUHEpBfwpY7qxRxwCd3tMC8X5TX2G7bQrEf13jjSjHh73bdKi4Br",
  "key16": "HsSxxFL6c5pYTwqjLaaxuquZojGDt2QouGQyZ28YwWhNB55VVEe8oTj586z3NVdMuv45wqLXEaf4E1bVuQJfroe",
  "key17": "VJMFFzjJWYMPRRpgUXat5gvm7UBJpesgg3HrZ1Cji7bFTcwawupkxQL7g4FTqejDt6CdqdQBPhyaKRkCyD3oz1Z",
  "key18": "3ru6DFDCKskeDq4v1HLkm1t1GAf93exLfpQ5GUCnCy9xk3QTEY141YSq4ySkscosjzJj7Ce4SUdXyx92JSSRXMi8",
  "key19": "5R2XLkgKmrd2hY1kHt8a7APeYfePPpS4EnEYRYf6CvmSebUXyuX3GLxrAdCzcxrsizyXvYxTDYncu9cJf6DZh7jZ",
  "key20": "5fMSamY74xqZR9rGQs1grishEwgS8axLXiPWz5tBeGYoacGu6t72Jakuj4qxo4h6C1djTqGTpr9fxmWw8vvaMtUt",
  "key21": "459v1exZnynQNxKjoRenmFMBopZhAZRnBkHD75aaf1NTc9SJ1DWX4N7R6USsj3JJtnDzXKyrcXvBnufa4pgLTbxi",
  "key22": "3ekQTocfiJsPvgjqn7E3TNzBq8VUWzBmtSiMgkfTJRTytXh7XqqZCaE2WJkzwH8XLdDEc91Vh9KaLk5d5GTHLv1R",
  "key23": "4MkXzMs9LvDUSnz54UvZux3EGEHcp1U6ZShWk3H919vLxDxeGJfgzFscfiuFxJdSb7dzV1Jksx9Q14HNZMrQxEN9",
  "key24": "2Fc5vesigwgbNt2xdUftw7Dk36KvAy6Ysg7jTB4RS3xpZBo2C4j8kbUQWcZ94vWGCScGU1hYLyQSNae2cz7WxaNx",
  "key25": "WYwcgNsEE59FsMuEwxHR6QJmt3PEwQNYNjESHHLtjpt7xWeF77abpPnqHmW8qPHrPZ5D8ooNMTYb6FfjhT3xpTD",
  "key26": "2STmATysn4sFPqN1RWkYhjGjFcKAMAyygvKcFnCwhn4n29nFNk1KKyjfVSyN5fFNo6s7BLMvUWbTbZ9YVqWskYmt"
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
