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
    "2JfqcoNMW3YHC1HgKi7iB7uUC8gm9pgZTxr1t1ShaoBrBV3JtCU3dGrayfQ6dftSuKNXCUrmMknKZ488N7uexJwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htUWkzQ8EL9H9EdjbgDL3unTJmLHGjRJvhiPt2XoQ6B6FyGZiXb128gyw88dF9KJjP3vYThxqwbL8ATAQo6FasK",
  "key1": "2tPMBdC3XnanZA4G1drUF3Tz76EFGYGYwyvdR8g1W7peVe5GivnHQfm7H5bCt6qEHYXKGrJbP8FjxT8s5sHvL6En",
  "key2": "2b7E3H9FctpyDRYstnxjMmNdAiQh17cHNULf6NbjbVpWwLuPecJrdKtTJ6Z92sn5RwXAtLH7b83KL71eDf7d7xew",
  "key3": "3omBU876Fkg9XHS2xwuy3DZz8Gm673E6YkxNwJCghJUYfrEzGoVQPeZNZucWX4KLZB3zPjPiu2cyX5raojmMQhYx",
  "key4": "kpd22Hkvx4c6J1dJXQdNyKfEijGQrbLT3U93jZkM8M7pjdEV5ho2xj62cWTDgMvdiP68SqAMrVS4p6s7EJ2gHCB",
  "key5": "556xpgJ5SL6W4QyZsnVVfeam3u8UskQpGM8sQAgwnRGxbqZTCLbgL3bqHRsDyjTSTqKn6AZ2mYAz57hVXnsAY3AA",
  "key6": "3Kx7tLYdyecnCZoS5rPZGUx5cVKT2iyg9nhUQFXrCyADkpneRBe1UGowXMEEp5epNFapa1CwaMpht9enmsNfgkPF",
  "key7": "2ovesfF85BshP62uUZkTNc8h47ZHciNDfwixxYsZ31Wx6YETXgA7XB9JVFFHrnGE47uep9R9anCX8TxKES6RwNSt",
  "key8": "5qYafBTGgRrvC6qyopzJ2dEQNntkGfmtmEV8D1wu2dRu68NwFf6dbCEXaVSMdf7QA8Gn1k7VaScy5pV5UAnZkjvd",
  "key9": "4rVckHgcTJiV54LsF5iwCvaNqEyD91FBdXkFkDQPq2PQtJcaKto1tYqHnArSaktqwpoHgLBSLoqVvBAdsioqzBE6",
  "key10": "YxZBZnaAjpnZx6f6faxwsuNJzhPp6uuKFCmYFR41EsS6yxkd7kEME9g2MhZfEhFrhxFQSfB2kAHZavL9UFz4TBm",
  "key11": "7d7jHq7fwXZg34nz1J5mqh4BoyYxfVbLpL3sjBXBjLb6HTgjkjCyBatzgZsg6Q5nGSTz7V5W2kuPjnZFsbMn4Wf",
  "key12": "2Ui3CwfRjYpE4UXPJTMaFJ6eVzdmVjEbceeCNYkYnhMjNbQPsFZe5586eGAHeJRkvhpybtMZt1L3PNXadbSzebDc",
  "key13": "PG2nWvjKXzNav8PgZWNFCaa8QAoCnEALA7sfKRqY4JdNz5ZEtjSV3Lsx4upWT5j8wVcBKr1ZskSQ6RKPzRtWt83",
  "key14": "oH54qWJirM4SeLusFgVqW1SZ91GLqgs7yH1fuFNsWjjCCYLooUVYLbdTjb3NA2jT7GywhLC4RvqTMV1EdWqnKQj",
  "key15": "mmoHRNATSkVPVBbi5nsx5eucJdHnq38v4KaX3qhNc4njr8HYXkWCPJdW5RR3o8rE7ikZmYRctwCVS3GWuq5RibR",
  "key16": "2jTJ4m7PgVCrKm1nfFyVZSscKT3f2CcCiN95KDd7cE7VRGHXbYdNsttYGL4qT9PvNHfEBHm8w7dRWk9XUxip6uVh",
  "key17": "3sfDQWvCDqVuKcHWNJKPWKqHmuXXRJrxyquZvmFvhUMFhtAffxZx15PcGPQcvCaqhMzD3xLdtmhuuBGZeheeXVUY",
  "key18": "2hXMFxR7JxrKaCpKeB1YBh4YLT4kmYz77viCYTmSU4UHKhRrJN5bayQXgNmzT336vqKPUtfsn8ADNHuEWHTuwJAf",
  "key19": "2MpRyoHR1G1uyksjJqcDUJB2aWxotZYTyVRQ2VvbSnkcDQfFKEDgWahBEMnJ3LEyJFofq1BNfD1SxjYRuZ1xdWua",
  "key20": "382RrnoPiVYBBwJ57UtPS6wmgsrCYPDvxgxFn6CUmzjLCuYWSjpCjvfYJ5jhE3f283BPYnmmdmiXKM5LQapoFTDc",
  "key21": "FAQANYKiZnPcswYhbMn2W9Uf9ajSwmbW3XcZVmSAcY6RyWygBAtfvZSXfc598bKVNEQVhvg9DYxHWP1M7sy4xJP",
  "key22": "35Y4rG6ArEZ7ogNuCdkp2BzqqvsyLhLq31ZNXVkrVaVkhQxmURnyNH1b4qJMJLT5cxLrvEF3UYJVLY6Xo9tvs3y8",
  "key23": "3YdSqqhUQ9rV9ffwFd7PN5L8UA49nCD2xfv13jR4JQ63h6L5Pn2WSK2EL5hfPvH6tqDW39swLM1uUK9rkMRd1TCC",
  "key24": "4RGKi99fSLfgJu4sSjVe9ZhoahG9nZBRcgShEs5iPzrmzcykh33ddqy2oKm4gSJ9SHmDUskfvfYXVfdizF6eRGas",
  "key25": "QTfVhppTGCRUadkK5WZPqbqiF68FMXMJydH8LuuJ7B2zBK9JJaZdkhZYgcor8NKVe83uaEMbD3Dw2BB9Dsd5sPL",
  "key26": "39hDjg4uJ9nqnCwbKSJuQB44NvLpWxSadGC9XhtzBpQFSuYkzscMTpFAWj6M3FziBDCaDaq6LHaUWsdCkED9VhZG",
  "key27": "2qsYGoEWXTganFxbKntnCHCr7BpMBmmC4K3give8kEvUNqnGk2LWpaLnSm3v2p33G8mHyzZjzPfFySRG8NTprmyq",
  "key28": "3UVTG8DHpHQYqcnnDxrsGEkg3JdHSgQhWiKUsAnhMM7uJorksCVaTnc5Y9WenEZ3rVG5SHwEz7V3z8fkoSAwtJnG",
  "key29": "5ZuVmh4roxU5N5XBgGTvQmvtr5HxHfw8fATAT2hTRpsHeU9VvU1KofRsN2cjE6EmS9dwUbjQBThwcTU4YyRMQjnU",
  "key30": "48pD1WyakgyDHsu3ZZAm8mVb6JZmakeTKP3jhUYbxht3Mu7cSmGMdnuFNAphVbyqmCmxeDFczTrB3qeVJsW5Mxbi",
  "key31": "5orn2C8ZyMevvquF1Ete4ZwRaDw3pa6MD3RgeoY398VbEZ97nEaPiLkDTiTnWjs8U7wM48hxp893PdfMMcJaC3QQ",
  "key32": "2XFqGpbntFkCY5DcKB7xg9hCbAPPYCtaHPiAhddx9CZkbQ9FxHkKTnbpf8sB5Hmf1CQcW9JLkMaYzKYzu8Pk9WcN",
  "key33": "3CoykfK4YQNK9RXos5WbRifnkUThi83CPYkhjrgGKaPbf8wNbQdXAPSEfQuRwkm9ahJuAo25iuNXg5cRc9r4bm9f",
  "key34": "3NYcPuFXnmiAwE6oevA5CahaKdNHKb47hjsQ4413SfRg3kvryYMeXm9bk2psrL6u1sGVXwEpiCqGxbUExe26MUSF",
  "key35": "2hfvs81HoXUVQwrCUqsigrkoe2qw6DvcFNY5iX5k9HvD26YkWmu7zFabR7hAAS2JM24FYfuqTEkH3wTWTjgwNc2q",
  "key36": "5SGqq7qPTGXCsdAREom7dGeb3MoxXa5rb6Cnzd2jpognnM3tbBwXtLg5HAVbwFTcckUZ33ksFPHM917dWsyavfjJ",
  "key37": "123XdfkyWfyf6jcirnHysyi96NQPQ3zmxBj91LdARu8JATtocQo73RRsBrCzVSpy9RjyDPcF4fKF5ERYJuHXGbQ3",
  "key38": "51tvHmn27JAvFVyEUu8gH3HRKbHPUjrvkxCLpMrp9tj6c3yQ7rtEKDoiAPKGGCjreVWZycHd5YVCQLi8v5UBYLnN",
  "key39": "HFwRsez2UiDsQYCKpcAad5bqDs9RrnPSpJsahQ2Ht3sKF2FxpcHwuRrttq3Ht5NeLcUwwFz5VEnPRHzUT5dnLP9",
  "key40": "27ZS94HiUY8ENpQXm51u4YR5qYgbpZrhsiPV1eKLRBXEqw9QatcNxsPKvxpqGkj2FvgYV9uLeArqNvbFEnS7URXc",
  "key41": "uRNxUDNAV2etGUTHtzSqkcodowHv9FFSAFLNpanBAm1r3k58DAUSArhLimuwP8JrhbULi4Vo8ki43d5YS4WJouZ",
  "key42": "G5wQ8ZEdymS1oDPCEcGrw3JvA2mjCRDky1SvgBhMVuJRvCeHvGb19eeWri9QukHspm3xE2L8kuhDsT2YgyxUft5",
  "key43": "3ayf9ruzdxhS3gXHAmH7nUq5dQ1UTJwfNvC1wMpEgXkmNFTwkzzftdhv7XYVByNCWoqqP5aVueoJ7kUFkecj2v9P",
  "key44": "2umsCFVZ5G1gPthTjfR4MsSw9xkk6jcKgued1E47kst9YJPhoUYm1ZMKob28YJs9dev2verzZAw117QPT4ZkNtL5"
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
