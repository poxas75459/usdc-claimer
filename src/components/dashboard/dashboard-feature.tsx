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
    "33MExmRtWqRwz8JG3qeihrhdgfyoUVLXzTGxfLHC9xGLM12GYsQaekRhHtdWL8qAhvEkih9m1hBgiCGYHhvAogAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEK24NdWgCBnNC1zQ2eCh4mydXJmhbcaFxK5VseAnNWrEEuj7Sj4hfnH9ns26PSxCA5b54Cq293jab2h4vz29xi",
  "key1": "47X2nDBcxCcX3Y33PsR4aTyj29KjcGc5HKngT9UGppvqMWxEp8sDrRLJbum2tSn7bPQNjrvmjcnArviRKpeZbsw",
  "key2": "4qJTJvrcJG3iWQmRG5DQjjVhVvr78wvrZa5KLam2UxJG8DdVjPmzh3nuzU952xmsDHqhePtds6YdoT64HZ91MzC7",
  "key3": "49X3MvXj3QQ6ewGCPVTmDeeWbV7bvG2SrVK4r3Ljr6yGKzemiaZ6xYunua5k64KCYcN5srFeXkTiZNMKpNS1D5oV",
  "key4": "5DnaWMTJKZqF4h36RVuTM1AY8XDJXaVv3jm9QnVjjAHg7c9UVUcv6SHahYZBR5Z9poskrhxNRNYyf1jdees56ckP",
  "key5": "2FDufdafkSssRagY1sCnpnbgmQ8MXrh2rwCpeqzywK2KZGwLvDKWn94SGpXWhk6GMgeMttYjC5zCUBbsezbzcJyN",
  "key6": "s2FXyT87CGixnbB8Fnkg518RPqvrgqGYhxUFa3VocF8uKChuT5AESGfnGtLQwbJs1RHe1CmyLJcqHiSVtAQNXrv",
  "key7": "4mU8rJAyQq2jQ2Sy8JdHn8srQ3PcL5wAa7hSQk8UZ1fzGyuFPp1gA7qqKki8iCDj5A7CXEPqNd3CHaLuctRgxMyx",
  "key8": "aBc5c9r457GDhBzVS4PoZEGBw9rUCACMzyW7itT4EzZPWZLkpaoCFMA9iLC6euR3scQhc5Rt92KizCEBSkTUcnK",
  "key9": "5zb4S5MjE6AQrTpqqdjTFtwbbutUGfTCckdiRYWHKVrE3oCb5zb4YsSnajM46t7y5RwxGefXTRcxp8p3SEBbpiy8",
  "key10": "3bksadQ1MMNhUd47WYCLSeYyDnT679BH2cgjn2fys9JKcaMYvKdiRgE3Yb6fUADSnPvLDA4t4rmBxy8dsMYrUKLD",
  "key11": "ST29jNe3R3sCHE1bwuNZgCnJvkEFJ21ge1c5n6N2xjxCq5wV7rV19nn2MyLTthaZWmKCbjc3wHDMg8nbPwQXb6M",
  "key12": "5PpVqGFZC9rguojaGg6cuKhnC2t3T7hZCdYrLi6iKZ2NoJVZHWYPAy1DNWsr5PHVafYH6YnRCAxWTvDwEwUnri5p",
  "key13": "5qHxcv8aAUyRfhKD5LbuJ9s8Bhidk3rBdme7TjVkwdNzF9RPvrkw9DnBXxnJEvyeoyQr2sFDpFoe2fRKDVRzpyJi",
  "key14": "49npirNebSSaM73HZhYhtS9C1kAWzhdCmYgrmokHr6m6nmibY8tvaKLYmXTEtFv3AgNtyQ9uTcdHkL65wozLc257",
  "key15": "3AyG93ZytKrYFApcaxYZGSi9xaBV3HPmcbQuewhrhwwQZBsdK145XG3W2opkgNFsQTGMrY6JYErUW5snJYwnUPHN",
  "key16": "5kuf1Gexyga2bHpTj1g4RxQXTXoma4qCssR6ejjVeAcWq3TLi2AxkiEAazww4eeRTEmyq6hbsEErkmz9C5uYpuo1",
  "key17": "51vFvaZN9uHrd1sGSewyHkM9eJNeac6Jbxdz5DPqiCuQ9th9JNMqzPEacst98x3P83tDSThgeRkgVaar23HgH2yf",
  "key18": "5RYxYXGDa7Bu9xAMfcxUVy1zdJZqTc9ivAjzixdcekRkYw8E4HWdQhiqgdG14zHgbSRSzfpVEB6uRk4PRSszhVLc",
  "key19": "2mCkrKA7wsGK62PKjci89ohXLEThuxrWWwytruLTdnEMotgcKcLC2MRCdGEsh2B3qf5Pw7YJWb43Z3PeT5EWvUwG",
  "key20": "6s9CK5jCa4RxyBKSQcVDTSSePhpj9CWGHLErEYwycJkmcgmbktjzPmnPKYQtqMEQKyzhW4BAoEbdLoem7RHMnmf",
  "key21": "3y8pH8dhExaA6jFwTARZh4LP4XcgJmvjTnWUff7QSfqcRxgvjgBBG4188dDngmqYit3CgX6WJj3VAaFw3pHVU81d",
  "key22": "2git6Vdd4Pt2wvCQVwHgx2pEGBGJhxV8W7S22jd8D8Y5DwCykB2TTKSPek3Cvz6RyeWYnYpN6rqq2rtwYpeETmTE",
  "key23": "3MBDT3CQhGZtakQn1JWp3p2eA5oZQwEbNVyugbmv4U7KWK9gKsMq2sbsRVZez1QFopU37McySJ82b6Z5AbRBnX3k",
  "key24": "55VEdfHcZMG6un1Gfu76u6UP8GahFG3wS8QgGEz3KQjfbpjJN3ARba2zKcoEhGPiU7gcJCb28CcrVgtno99SdcMa",
  "key25": "5yeVLaTG1jo9Mt9E9Mib1CwJmfVSPyhh8xsSccU527Cs2fjD1NxEjyvbnUjpjD7su69HyLXmSnBvBAEjAkULs9kT",
  "key26": "5WqbgczEuqp8HXEkmnE6fpWQti5GtqhZ6X2YuGA2rznbJZ8Lw7PDzWLA4goTSrKoLGRsngDKeXhgDyUoq5TqQsDk",
  "key27": "5nMnD9kAQXnWGvz4Lgg2dveYgD5Bypgw1R72CxXGBHptQiyDE2bcH5tUf18dDdLdkEAvshkS5hC4JiYrdhmQhyHV",
  "key28": "3TSSgPw4cjBa4atoRvgo8d1yvVmQWx7eJKjLZGa9xsA9kLJPo5hVoCa7csdM4QU3jbU7k7HHgA3So6bxF8Un5CMU",
  "key29": "xVmFtaE9QAkdUFtyJhW3yGGYTayWn5AzLmyXDgUMBGEBkgYSuvSL7tyuwuU8h6s3VyUJJa4KyVCDQvbFdLLKALA",
  "key30": "4wSXa6gBgWSwdJ7GF1srcFG2D5WFSNdYJduWTyRY9vF1PoZRRY2Y7QXWJApjRcnbdvWRHLMSbEjFedKuVZxFxanh",
  "key31": "63z9bxTRfi7B3MzwXjkeWzVqmYYos4Bd4r1d5hjZcHvFE82ceJx8JEb1RhY5wEXbt932rHGKUtQk1EbzGVinqSSp",
  "key32": "WWp9krSZiEFxdTdecJLhEaajfEjPRhyzKFeLBJovHPRyLs9Gr425Q3C19ujWn7WB5AYjwcoz4JzhttKg4ZFHWt2",
  "key33": "5YGeuwbGiJoR9HzxRqxtQadJ62L7Xp5LNJotyPsFC6arQwNetjfKsfTadjrxjEJ85GkLd39ftrnM5dwxSR5r9wup",
  "key34": "5mNpCmGzYVFiADrb47fbfgDL1rqdn8AzgJmrQ3M1De5LbdD5bX2ZfUQ2kGKvC6p5j1r4LxZuGoS7PosnPiiu8H66",
  "key35": "3dzNEUzS5Fac4rcgXWAxHQiVbFrHyFnzDdxsSxiARYNGAoiheBZELZLzp6sQmbSy5vejEeLDXaeKiexkWNGy8QN",
  "key36": "WwQa7vrxqVaTeYbd2Dp4Uo4VrJ8X59eRRdYRaepVGLnsCKR3seR74EpxALWjHeEgjyChUHCrai7EE8YHfPPugAR",
  "key37": "kK9SAKEpJRrUA3CwyQUSqMhm2ysnPdNoc6d2ea3mjsrbcPq5WKnBxszNnfPLi4LRoiw1qUCMWjufYxYZass3GUb",
  "key38": "5BF9mv12jTHEN4TEpvMzQWmqNocsg8isV2wvnKKi6sptHuAtNrHXpATXbe8meHbE4FwnYP7CmJCuRaccmFBPbQB1",
  "key39": "3dedPvvdiDkGKuACfMf2Mkv5vWakvX33AZGp77KJfWWHZUYR9vQQBBMsbwwrf4BCTU2WvcVHFdmAWLsoFM6YG5Jb",
  "key40": "54JvLfCsYy5tSkExWoxznoVYYh7vWLmhFHcG48oYarsakt8p6aP72TVMNCCXvCj3yaugFEot1THDQTMhU9p8g8dg",
  "key41": "2riEUEXGUi5imvY5DcF9a5Xa7bhY8bsfj5syA7vKNf2WjvPnBY6tCDCYV5H9z4LLppQwnSeLsnNvcFP3SkWULicG",
  "key42": "5X5J6b8btxxJ92ShRT1PJpAuM6fQR5TrGV4sJYPFJmZSYPTGWxSu7S7LgFJbtU5XLRvbtWDLXwn31Df44MfuRVze"
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
