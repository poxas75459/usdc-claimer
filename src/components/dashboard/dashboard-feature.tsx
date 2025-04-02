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
    "2EsgZFmCC4EbocscyZZ7a7Et4SggUXc2J7hSMSGdUfz9J9BSuqiX7VrgFCasjT2w4FutPUCRWQiXcU9Yf7Tgos22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcTdkCUuGKhoNQHZ8VRNUa7nfVQC3LMwYy77T9zhqVE3RrxBnnSMZQ9yA5WR1a1Pp1neRwbVnVG6edYMBy1H5HW",
  "key1": "4UQ45wR5jqWwRjT5D6nUn3iGpKkt4ZeovQ5s2cpoigL8tnLqXsXQz4eCGcoMKhQ4MgLopLx8zVxok4q9eB3dZgA",
  "key2": "461jTtrtH4jW7FcRD8XGF86PkoRue6pTVoqJHZAuz7rVgGUJf1E7yUWQy66Pep9E9A4TsYynEF6fHSrJMWj4gGnZ",
  "key3": "5TfAjJFwSJUNosmdQx5krHDu8unx5U8HQdnhS9vFPLnaBrBBJnHqXtFznEWZEei4JSMvp9LzxuvutLEacFYQ2xhd",
  "key4": "5e8qQVcw2EwP1WY4k7C9P16iKTKUGKGFfX6fEdgHaBwfV3u6mZLQbA1XPru9iETRXob7zpyz52zb9FD277LgYdtT",
  "key5": "5SJux1Q9S3TrFyjdDeNH27ySMXL1rowpkSZ89RFMjWsc1muE5Tz7fuQzPzBoWRrnQb66LDto2qExaUBa2Vu5hjNV",
  "key6": "33LxvYSNVGXF2yc4n2tYWYuoB3Ezh7P188wB6FjuQtbhYjkJaPcZX7nAkm2LCKGA7NHAhdRJdAChh8dHnpA7e9hY",
  "key7": "5bLX7Duv13NgyRMz7G5aJAU5uxxqWphn8KEuixriKEnruv8sfqunXfEXEsd9YoXureYohvxymX2CAqvokPPEkZaV",
  "key8": "3gGgMFVjGYh6Fu29khByZURkjKPZJEv3EJS5Wph4w4pqRFg1C8n9vmkMWADzMPWUrst5bwBUABp8qFTQR1nx5t2c",
  "key9": "41zarBLXngqDhseCf21bDVb6NtQhpUTvq4sqQ1UWHS7ioFng7qj3vjBgcYDaAU4zUvJUpP3ioBGHePxMbkX2arAN",
  "key10": "269JKxe8271pBwT35c8ZfeH2t3JxQ11m6LnrwbJzZaX73FbSGqxiQmkKozWTPNF2VhabEsFNUYXSyzXgGsiiusXL",
  "key11": "58VgC6ft3sDFRxLnzGBcDSE7JTRhwi1AhUSMwDvuJ5879bmRcrPe5tBqK1epXzcodpj4BMCN2SPL626dmQPePyga",
  "key12": "3Fz7wwJ8SJHYoLrnkFdNu4ewUBZnnvCX1AyT62jALB25hzKz6DKcdb3QcyGuJKybs3LiciGTiwSC292NJjUjX5ao",
  "key13": "4wxcrRwHh4sv3qaF8wMaLZydMn6EcN2WH1tbE9t9e7KFR1dQYDPbCJ3wF2N2nXgArocjTjfnRmKnQCmVBEEQQJUf",
  "key14": "5NLrFXrsEDmY9BxkK8KV3xZsafo9Et2vziW2bVyMxykZE38Md2Vuaub6KZM64iCwhc5yVVEQr2hCQcgjrMSGVLnB",
  "key15": "3ke7Qnb4mvXoZJwiNv2728683DFDfoMWoAErP2axSj5eexCawXxnmYB534fwm7B7JXY2wgijJUb5wRtzd5oTyNMy",
  "key16": "3g1A8uKJAE3XzLheSXc3t7qL7bv4o1vtqdjGDqmcEBHdCPi69j572oaHnVhW5CqmuTkibgLP6FdUi3nZYfY9NxPk",
  "key17": "rbbU7V2XjeFrdANEqzM5it2JGNShWTELjpjD1ZxYN5SYoKMsBcNz7HrchXkvRWDpq3aBjY7zDUF2yQ9k6joUVjr",
  "key18": "4mWPRP2fbGMNqwqnnBZrfquRQdutboAJ3gG5nbnJTQgseLgUU7dhPcmNSTZw7t22TFebSFafMhPERQfYVvf4QuEa",
  "key19": "3jDM8wEQBS3wpttnFsGk7Jj3AKNUCt83hrmKuCyVybW7bAd5bjJ3bB2B8RqJS17sxGvb8uiuz3z8ERcXWzdEEuoZ",
  "key20": "iR3oSXxEfttNQ65pSxkmZpQ1CxvXHmdbDuhN44HjmRrET9hkNEQgLUZWDNvP9JzsJkhcAwyDQc18AxfKt7BRqe9",
  "key21": "5fjAgWaEsfapToXnttdj2hkLwmUV2tMVc4w7obzFvWPPH8dYBAGqXFKU6hFAEGxhekVKDBS5RVE8MGpAR7ysoQPQ",
  "key22": "5HvV8J4YTkYEAkeXDxAk1DbXpJ3sPaMqsTz3ZYxRvbZPovs9dJYhz7Ptc7u7vxh1xgCLAKDXzX1e8qNZBTJQ5QmN",
  "key23": "3PrmM69DxgJsD9XD1NcDBhnen8p96D33cyJ7JG3jgV2Ju7wHoeqKuKLWy2jB4T14ifoXhqqyxMrq5Mgm4vijnxut",
  "key24": "5rhssEMKfh7KNq8RLfsAvEborsgP46tivP5gP7Dcin7PA7zhnQbCzaw3r14uk94GKPNgc57bbvihu2hokKkfiT6d",
  "key25": "37qEJQcrv6ZG4699k5W6oumKtpK9oAYUCDiH3M373Bny3UJg4u5mex1cryuzPXKQqLr8pSQf7FoyV2Vdf9t4d763",
  "key26": "2AWR1EL9zboxB7bjcDZvjQQ48AzjJutL6gmzkFqxa6xQeCLMLkH24U4UCj88NwTCFRHpDhrKFkFy7sfpkuqkfNR9",
  "key27": "oaov5NrW6cr8YnYfKMY6HE2fUAHShN6pEzSRhGZsVmrhMcC4wu4GpoUyaDLXqq7vHFe4p8jbjJGP4qrvgTEQhqo",
  "key28": "2tft5xK1kDAPVyBP8Qq6ot7Rq9JyPNHK56p9urkmzm4Ji74vbNe6rQZ2bd4K6VwhpkigkoX6seomQxBKKsW8r7QU",
  "key29": "4FaeBJfDk5opuCfoSNm35wc4t6NN6ZeAAY3W5AegZypTjo1638pEwXAxsMkZYVB6HE2EF78BxYSkZpce9QRBbfHH",
  "key30": "4rkQSmdNBAzQp2vzQRZDYa69SWotUcSdGZaCJosEoPZj973ysdXixMDXwNu4MyR5rdsSc8idfpFeLa2G4jg3xxTH",
  "key31": "2ezR1eKHvLmeKivefnKW5btrTqQXcqgVrRciwwJsRY8jBnVbeDb6uFx3D4KiPvPX5Po7rtYuMxcXbuCCFg5cTd89",
  "key32": "4BtvFq7EJoDCuxZo35UwPB6Q9MTqXzGewnUJXHNvRQwCorSKArk7F9hD7Jbn5qLS15jkf3ScvmYgN3PgHgNoym6S",
  "key33": "3LH3DGVx6siMfWkqg5CrZkJy9VkwPpykWDYXDn3ka6n218Cjo1K2VHrnYg2BomnHvNUMZB7KJXidwqxGY9V4KX6N",
  "key34": "4Znb8HFJhoezoG18nG4ZHHSoFYWZZZqSgYSES4ExhqEergj8PSDm6bGAi5yx9JKvBXbx5bv6vCU3RbDSpT1UgFNj",
  "key35": "3Rmfgn1reWQsK31FvavctybhW5cSpeg5DbrMDGuAgPajFEw6y52qkXK2oqoY46YeqRPgeMiG87XJsMP3BPEJ9msK",
  "key36": "2qJ8NjEHoBEV2RYiQF9sqZGULLY7xDRjXyyxkba9PKzPtPQoyULjgBVqcD214m4uDqbMNoovpw42XzSaf6s9hyeN",
  "key37": "2fdDyFESmCFbFPKnz3XJsLpNB3WYHiDx89Wx31thktkcaJ8D1SZZLeGkuWzKgETBeuRQJQYm1L3WwZK4fvNiTFCi",
  "key38": "5vbVaQBCMdJp4WrhDXyXpNyzcHTn67qR5oaHkDZTVhuVm2yM1sQkHr73FLsQPexEcSHqw28bNiWo5WdcYUWZtSnj",
  "key39": "552mKd41ZL9uWuZqtJHvdqAW9RCbH34M27aKyLeGjFaCE88YxRuC7DFzoFjwYj32C9Aqus8s4RCvhMXCSogJTJPZ",
  "key40": "5SyMsGQH2vU24viQd5WeDCnuKuwh3KjnqV6N5R2rBeW7vjQbHoYRHxTzuB7snq2dmLLTEEYyrWfXMd4xXviW4KQS",
  "key41": "3PKRhDmMZB9GPrxmQXh3sw2PcKFHKtb7C78XDJFfj8XQGjv8VS9HYFs3ihjHAPvSrL8MxtJ6P37vzJsrkcNHv4NB",
  "key42": "5zXzH7meacAwWeBwNwjnq2X1JevX1aswixAGaSMLjUXgrUQcodbJsKEmiTPWohxeDLNxX9QWkAndRifE6VK6g7te",
  "key43": "2zKpHM5tW44dHe3M2rAa37HH1Ebv9aJUN3g7NtkHmW2ik4kDedKy4EBjwXg4MQabMeA3PKcBGUvsmoqxUsxgPnM2",
  "key44": "5UDKBSHxEyZp7vPb7Q5sgKBohnAQmVyeU7wrwYAhGLBChvBZsdv3KYsibnKYz5FH6XJx5dtYMLBizm8WE4pay2XT",
  "key45": "3c1cKQmzFPzWuubxSURuRrvDdEfqsCa9J8dCeJu9avWN9xptL8arc7U6CevtvEK2mvoc8XLAhVHKbZGL8BMVxfm8"
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
