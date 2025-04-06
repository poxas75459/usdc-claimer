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
    "2W2EWApQUY5zSJNfj6vkm5ouiD79HJEKPhLkByX3mDxjB1y3dDUreo4dgGjhCdAiWfsE6LmWb4WhMuoQYAqW5xxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYKkJDesaMnfwuypskL4V9RwhvowpuuLigv4meKkoE7Y6Lr5XUodfEu64xxHoYrNdXN7REj7tWqxNAy62aV8oym",
  "key1": "JbLSdi2G5MBQf4MsGvZk1QrgtYdzxVU29X7EMHxLcW9ayNFB5M7UKB3AHpiyqqPr7NgHWPLcH5HJ6Gqwa4VSDPd",
  "key2": "2HRKgm8PunZ4XHN8P44XvG8kDxYxf6AiYpgGzsPsUNcNgALMcYMjEGAMFhPp9Jwk8Bx5veTcP8XHxUBQKaGGBpxa",
  "key3": "5Zmt8LqpzxW6tNA67VzFBNeicqfRQUEr2TYUEXA2BcA9SLQ8gbrMyt9fXynho1tTQYd2U3GPs48Y79QeHRqUTQb4",
  "key4": "E16KLnhAEJCU8XX7KXoVFepZBwUfHdJNqrz3Y1PKv42K6rV7EekFGR2o7fkAxCMUwDY8fr67v8p7hYmJG9M3huu",
  "key5": "5mqVXMAGTdNCLBqaAZK6TtHyajmTfXCpWMnuENTWSrm3YWRxf2xbtjbeHM2zZX8dCC9K91onKrnvgTqrKJhsuVB4",
  "key6": "3rMZdczGbcg6ZFEZrKe12a1wQBsD2VNzHX1exoCB5VQAfPagpjyBxQBkqNQCFGF7BvePPE97v2CYkQMequDMNcwJ",
  "key7": "5VxBaiBhrGi28MwcyLaAJp8Dd11M1L7wVkQGNiiGqyu1NB3NZuTY9fYa2rvjKaJdFAs3bj6nkDdhuxaMx7DFm4Fd",
  "key8": "5rtSm8DmLam3hgPYDFqT9BUr1DJpgLTnpV2pd6ssCovZXrTgviVJPMizLLBtH8Mk6yqEZaUQa5weNWQMTMhKVvex",
  "key9": "4udJKQjT87PJeMMVQ63ikCga1KbXv85UJky76mnb5XcFdcJTeLx3Q7HDiEotBVwAKFHLFPj1CQqaMEu9xhmgJQph",
  "key10": "5FSgf6weB1ezis2eBHnjcnVRoRHh3nopMgYsScxE5c1cnNeaBAfErvCk5FiBw43eSrtaJeRNfRqxnEzZ2apXX6L8",
  "key11": "3TCxKBY1pjWnFSfxyotMooVpKBYNUeTg7keVGMYzapZNzs2BfT796kb3WFeEVDzj4nTVYyZ2Swz7cnfCaVXo1PYS",
  "key12": "585mNxXgsHBzyEiGSSggLR9QLHx9rjRdugmPaCzN88XV4YgQeXNcpu9vkSZwm1dZ3yYmSK2kQzBg4r5KigBJw6nS",
  "key13": "5SLEhwugMv5XEMVzhqinvCiXbZsPYwcYh31kb3P4DnbUqhFBXMtdVXM4rmDhVnznVoi2n94JofWMY3EaT47J9dHk",
  "key14": "3h15gaBAic5FNrwbQCgrDiJiFSEV4Msphac7sjowaK6vVkf9pqHmi1TqKL3KVc5DYgAcUpgkF2DW2E2CK2ZAbPjV",
  "key15": "3v15KMHU1spFtqxz1RzTmLa6zDh57spisksNvB2inKuWtardL7e9kSFtJAxaJbMFw2BqEJWsDv1EJcizdk3ABYtS",
  "key16": "4h81PxsMTysq7tb9qmHZDJurQjXndVhXuWvpjfWNbVLSmVeQeX6whRJ85ZdVSn5ddH2aV8GRZPTWyLHqxzo4Kzyo",
  "key17": "5ieuviwN6o119GekkV97QCNL5KRhoM5grn3EuxWWiHqgYCqjkb7K2n46Prutw4FrKR8aG9GqJGJFi5UMKKJY2ECn",
  "key18": "cRojZULqJM8gUJw5esevHVJ2zHcz8AFv3dmNVnCNbgWN1diJRv4KrKYXFAkvrmyPwhcWnZL2pyGufUb6rZvpmze",
  "key19": "4NWsa68YYKNQC8s7TPDiMDEkiNZDt9reLGVDyYfRWVK3eFJ6jLyK43dd2jE8jrCW9zEwWyYS6AWttpChr9Co3Tau",
  "key20": "4NnJ1jVWyPss7QYmYmsZLyaXYzXYpd3jDJpWU4zY31e9JGkFic4RQWhEoEaPQsU7ekYAVXF3RVwHxQ1PysRT7Hu4",
  "key21": "5k9ygK4z9sLWqe1DxNqYqp4wrMAhtig6ih1gZPLXpuwhoH8VtA1JnGxd5fDp7BnVcQaWohjG1Lfoj4VfQ72RqmQ6",
  "key22": "5KhUa4KQCVoVVNmi8ARZ7tddzHuQdU9yosuNHke6coAX8mGrfdfsqGL5xrJiADHBKoQEBmzspLGEWTWir1TM7mWg",
  "key23": "256phLEmZEn4tVbDSHjBYuSQ1xamhAVmzgmky7cnc29GGmmceczYUikfxTnDaCYkNcMcJXu6Ub7AHTKq3SziGNQ5",
  "key24": "5kP78NuUfxuB9sDkU3Vu6Y6ZHchYDVBB7GqCER78AeA2KgPEQAV4NRfHwwnFp2SQWf9G17FWK544Ue9aSsv4Sa4f",
  "key25": "4mCLuACgEum84kjVFEdsJMxnrbGu9w4F8dUcM1Bxic8dcFYRxQgWWjKdarkDtgybH6A5Sj1HjhitMe6wvfDSVGc9",
  "key26": "4GueT1qqvq9PoytSmTTG4usfkPPGa6vazCHw79QCX96Zykyg8Kah8nvJB4cAPG59CXS7wME7bNutinxu3VJodd7R",
  "key27": "4UKkBHZGqvXaRvsj9kvXUwKRC59iTtSFMHVESMa8HLVtb9E5kGZMdV9qydz44BJaCEMJ5NwjvnrFc89NPwH7Cuoo",
  "key28": "2KXeT2PWpSdjf6c5B4EmQC4xc8nFt8yWo4zYEYNUCnkv5gn7WpcCgqf2Kn4Whj8M8au4yzbYKTqT1yAGLz5iGcSv",
  "key29": "4VdHbqf5Yt7TuKv3fNGZZFPVT93MEZLCNR5LRUZmj14xjwprHxbqeNLytcvqMVrUyC6SsocxNN45jSFbQHNWv3n5",
  "key30": "5d7mJVKQaCNvVyyhTY7eBBTrfBqBjRuyaPTfzLR3NiAQTPkzPTaFZUkAHrhNHejgSqfkbpgJJGAGugoANu61aA1N"
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
