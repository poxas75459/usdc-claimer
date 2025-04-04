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
    "rCvZoiMVbetcXugazh3Lcmkk14C99s79MVVJ9XjHKrEbbPFnMtncGTLDpoUuoTduVwiPWeAsNV7ybhYwBatXBLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNrSmdue6f3NgRy14ntSVQmb65AuvPjMVvsHV37XQ19uKjjwvnLvmH1BvfLoJwMaopLysQC8qMHJoobbPUjyDYU",
  "key1": "5ERAQ4zaB6xQvnAZkjq214dFNYZrpweW9wKr2dknmTZgzEV4TnUASboUZeDo3Jqt4FDhbFEmH4Ay7HPWHdQgsFUw",
  "key2": "kjPe1Z5Xia5TiuwcCjouw7fsJxFKLyMpYm5ypSPoUo6bAqBSFTom4SM5VtwHhzJEq89UAgb8r2mabf4e9ZdewE4",
  "key3": "2P9Q2E2Bsq3esiCyUpBikuBTs9E87BxpjyKqFjTQ1wdmVR46sKnTiPBBR6mJ96R2LHpcetJHVzvfLNYWASHU3Mxt",
  "key4": "4L8CQEqZ3ebjN8x2JKkZgLMZu7smqhjgSBPcFFraWQk86o4yg7y1kXfrwQr831hhBwC8m7NVTYezmApcwB4kBxWu",
  "key5": "4TepkVqeQesRCCYgkbTcdoJM3oSoGYARKDoGqi5yajEXSrkkoXpBX4EyvAEC25LfWBp1MZhSHxXwd7Y2nd2QCEcs",
  "key6": "q6UapoMAz4C7EJK3ioQTY2r4ePES7DFNE8f8BJp45Q1ipUtYGhmiW3Fun1cGXqeBK6p6niY9LvEpSMp53gCvTKm",
  "key7": "4KTJAnk7Q5mr8MeNG1D3bVPhmvMPebcW6AhBfBoxTAjHUUHXZZX279bnCbRfWfWGBt4QUi7zxNjTSFbPGQVKiDka",
  "key8": "3mfvHDnzgRAivP4N2J987NfGrr65jzBDuGC3P1WqgvpgqLxcHEdxjtgmyfvd7W5aQwLsE2NfvNqGxvwstmwK5TVW",
  "key9": "2sp5xVJ1mfsnNYLih3qpavXM8dGAYDBt1H5fCDSusCkw5APzAsAQrPtb4zrWN9iBLJ43A8SwqoUWMMkWWPvYaRDF",
  "key10": "34JkukWGTX8cbAcvxyRagPUeUPNAwUH6gPmXRPZKh9xoeNw4E8Y3qjTDTk9PnZVVpGNF4cf4rKYUpJUfEVo5sM1f",
  "key11": "2MtVxbWA4iRFwJq5wSdEKLffDgZVmGvQ5JzAs3tYbG3RJRp1sF7SaHN1eq1jQVyfUQoWYeqAFXXey2F4GJu2wssu",
  "key12": "LZ4sSivNXJn2PBFtuiAT2phErcqC2HcGSJEV5kaYM9T8rpfaRK4rdnbtci8vCbA7u9bwcV1wP2A21VddGALGNG3",
  "key13": "3L8Ga19ucLb5ikAKRwH6x6sKinUCR8yRJMPjePBX4TR2yztrNJKSZJf2aX2tWfjk7ySmyEmaMqDFcXu1S2DzPgQZ",
  "key14": "2nYseewqEf8oTiChMNNumaGa6MK1h6pvU7ooEfKqcfnSifkRkjxvXcpyGh68kpCu75Ks3gF9aiFVXdTCqXzbPFKN",
  "key15": "3wc6hEzzKUUC3LPrrxFBCAv2U9VYJhityMyYTrpjD8PoMUkmDNKPrNrppQtKwNQT2uCxkbvyWQHVj11cQr5JwVeR",
  "key16": "a7xM8WziNdKjTwQk9AoWEjDLnDhcPLFegKL3RUQ498a6Y8SDJNXtcpcpfUMXYkH9YBQBvJBCTMxWZn3kZjptBcf",
  "key17": "2gFAiUYCTwJE81Pu5HBSL7aefpcQ3bQp64xD8aiQ2zZQ36SNgHxDRDhgzKj3yN47SGP5yakBoxer78cMgMVSArp9",
  "key18": "3i46TF6CKvF7zzxGZxcopFBusWJivLJ4MERm9HYyWNGiT3GNygX55qSnAGGjZUvE8gBSi3Fsr8saFsexhqUJ11Xx",
  "key19": "5dPiU9Amxdc8zmAZ4kyqMtCeDovVwrbmFcj6UkqboUfvjYGNqfop4k1kAw3WwY3iPMSakjHjL6K388NzJtBZHDnH",
  "key20": "3xVuc3UvwP9vbEF2vxem76AL9zYh1m5rUG6vcKgf1yK8BusMaHjh8XcmXE27KHyZ7GZng1Mh1rETadcdthdNrV2F",
  "key21": "tEHDCBdXbimB7m4zEu6kgzVyuDT5TvseGZHn1jgSN9i74Kc1DuuSq41zUZupxfxruiQX5rpHNtcJ5pUbS13MQZS",
  "key22": "gTw6txEUZtTTun7eB8KRPfDa2Ma81gSvTspKDYpEtTJJkPVjFmrZSaK9FKQLmHSbkSNqAx7mgb2uBXMqzj9JGLW",
  "key23": "2Nsr1hj4sHYUFdwswrzozci7SmBrUqMaskcqjQGgn7nGY4PgvypE2rxPKwMo4MJkHKDy8q2Ukb3zeSFCBZfeTGMx",
  "key24": "465b2fAcgSoBdPDCJF1BcKSmP6h2A5SiqAkncM76dCswmdkd7UeiaB87ofJiW92q5X1FVQFC59xVrvwgrSqBjacn",
  "key25": "2xEezcPoi8xrsVh7eHJHh7g4nYFLAPSUHcVsDGBcadHSvRx8oHafm2bFk8uYm69JjXrJwTS4PWcimsvMJegXDoJU",
  "key26": "5mq4QdDqay88g2VkZMgyRMNRiftRS5U6ZBNHQdWpMgkM6GiMLdTzfzNBZ3vYB8nSj631YLefVrcVawYtz3Pz4WJf",
  "key27": "22C4VFxDRtep9M25sZ3Vtg4VjKhQ4kP4Dk3Ffe1t4TjdyvLWxgQGdnryk2jze1TJ2nCL2y3siFyVXqimpCwYhsEX",
  "key28": "4yh4FKi7MST2YWekdGBhqXi4MvLbXqVR12DTKWSRmMsiGHNXhqogXEvf3jf18fPPQHBm4SUYG87ZD1MnUff8HdC4",
  "key29": "eKiQGYAYgnV4eQcbd6XsY2zbA8T4rRQr2ik4Db5otkL7YhYmCKjCqVpLFryBx5FJbSLMFhuDdGC5m475Vn9z1Rr",
  "key30": "5TrA23eLVVzUeYt6iydcLCP7BK6Kmc7vraeg25ten7qoA4kfR3ChvP1dJGug9HPDRhcWKY7aFuEvBF8WvPunXpxS",
  "key31": "A7EL2mU1ehnzV6175AmbcGQsAyACrJXfC8moQthVQYECFKk22P5NKpeXzBqRMEmKSQTc1yx4ntMsikHkKU876cA",
  "key32": "3xFDW1SaviqQd8aPdukuiYRAGzMu6otGBH6TqoYfvDrdsYpbaKT1Ps24gFPQQfn9bsrEqB5h5dhtY2Uf6RpdNzh7",
  "key33": "5jJrnswr3Ky4YefyyKuXuNdiW9zb81TMGp3jBLm5W38nuSoYAKYDbMoA1EWpyE69MGvvME1i9bmJsURz7S8sLwLW",
  "key34": "2PdLnkvjkxcyebiSMixsJKioDHE5KYtHKxJcJCUzRSgZETpmtiDoszH4D4SjsSZa6RYXBbjBHFG38i83jfPVznu8",
  "key35": "3XFnXGN9FfokgcosfVPHJdbkCszQXndQU63QtPCBRqneqWvE8BhHUH3vyeHugwSpUncWGua9bcwHiHgaY23RR1Mx",
  "key36": "3yGe21bfT9G7QTtSYxUis2iD3jnNFJtHUeZEyBjpfcPEmqTsgYN6WfZrvStp9gd6d3WXPUyToh5jPVMkqnFQJsZu"
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
