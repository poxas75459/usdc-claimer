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
    "5NnY9rbSpng5ke8EKomba5u69qVvBibLgXdt9uHgDPGCgztxS14PxVM5qKCntKRwMtYUFNpX1L5W9QqtNWj9i6Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdde45kZEL1qzBfrWG1EQrZZt7QdTwSATNNoHdcqf1ySwYjf9XE1dT1f3yk8HbF3zvyFPH8i3J9XjKzhWTFhWDe",
  "key1": "CsHzn31sBbAngZ4yttJ3MY5CrrxMYpqoAF6nk2p4Jqw6edK9M7qdPkSqbwtCEnVSDts3iGVfrJKwVwBRjanPU9s",
  "key2": "5HuKEg2gk6h78FKpVfPnZxDtMxenpkgwDd4vadbVe9D8Xazq41EgxwPDRNjPy2nLHn7hdXkTRVyNGhhAh5gg2zk5",
  "key3": "3nSdxymJhJ5S36mzNjy8y763n76RqgRGfmPxtoLFh1wgNdtMBWV5v5t8kBbCHJ9mGt98AtvxQWJvF7BV4rKQcc3g",
  "key4": "3dirrXt7gAebWZy5TNfPbUrZP9kiF2ubdLBADkK9raNvuKDyHRBQRxGduV8Yiu5vre6CeeCbt8fYUhGDdQfHUtMn",
  "key5": "3N2Vu5MWFvH51rZYcLYcxkuzkRCd5HTrtp5zRjA8uJrXgt5gw8c8H6NW7vTA1Nbtj47vLXqQC4tMt2NR7Qpx3MV6",
  "key6": "4CQxWPkn3DmD2wdPbFCirNRrRPitYRwFJNfXnL5eJKwE1eSJGhmy3kedzRcayXXtaS27e7GXMoVYsGkWpsj2tBXR",
  "key7": "2HU6kLpDixXYpFLRkuUpCb3Zzy8XM8H7LrdiKpbMuG3b8wnh8VhrYF2XVLT1RVkXJU8QUtEUTWAcVKN6FHufWKL7",
  "key8": "4i3GRvYszduKxK6Vsw44VRoxA5VQSTxyvaDZqf41h2fwaKr9WVxtJeUue6CRJns64a9vM2j7ccL7YYXnQKQiPRiw",
  "key9": "7vmAz1kRmE9jmq1UKAtH43QiCFBWP8x89ni2dvLdA7GazJSZBFNqgYLyVPUiSMrh9pNpGZWhxbsfTH6af2eeYav",
  "key10": "Y9NasZCYHKAbbHKjK7P5wnxD2hyRxwp49ZeCgjAeEcRQy1QtoRWCBhqJBCWUN4m4bjoY2QNN6GNQaXzv9mMmSVw",
  "key11": "3Yg8SHvT9Qrch9TfRik7ghT2HEjxFkKDJ5fanotqQBanXx3S6wdfVCmvNbMyrYjBsaK6ZWceRmbbzdPv1vpoxgW8",
  "key12": "3rZNv3ohE6unDrdpduggL5jCWLcV61XrRMfg2gFKhhKQ8VDT5FDgiVADmq8WQhVezc6FrtRfLF9ZDhAoegQxb2CT",
  "key13": "aaqdxG8UHsJG2NirYdqWGVdV5pwi1XULejoFA8KYQAnM4vRcDZQAaMQcmeAbj3wY97PuUziQzfCkwM4zPd3pnzw",
  "key14": "57zKytbFRsgfM32VNrBbkvQwK42nvZ3gi6VpJJHJRxw79Q6bRknUUDueiDJu34zMzRBRTvpnonRv8ESKQdLnxM8q",
  "key15": "35TXgMyABeDJF1DL2M2gpz8KLK234NhL7cvqWLccwKw6LJW6fD3VCBvPcuWY8C2MDEHrq7QV6xqQreZ5M9n2YCe4",
  "key16": "56iQ9LnU3iSybQ2jiKPTp9BwLYQ8FK8TfQsHUgbtSywsUhqMjiGaQFMM2Dcugj643toBknyoZ8sL8TKk4hj6TST1",
  "key17": "4VYAC8WHmte9MjVGb3FnjC8SSNrsvjNo2SLWWuHV8qLVhjvDzzvFHLFk48aeSRWVigbeNjN4ECwgNssS7YqVvJET",
  "key18": "5z51PwnD8mJG3YHMRCtqAUPPYsdyeR9EHA4dTePecL6iNRXoNyqZfkBuMWZHnF5k229wZCZxUup7YcqhCjpLZDBH",
  "key19": "3ngebzdwon3vTwrvc8376MNAuemMPnyqKqsLgrdEuvmNxVQTbM4K2fDvj6DDBtjrWBR4D6c1JnicBGASY2quHgqy",
  "key20": "4HYMnvbY1PorRbHPe2cVm2QHLD7rHLaSvnhZKgnj94t3SWDQekdvSRKznoMEa7MjYUQ221rtVjdnw137rcG4rVMS",
  "key21": "5ejKcZd89gBFPTUthJWEDu7mWDBxgZyaabquHLpFupxebAWpuogws4toLgSnzX3aF73RLCMY1AXjC3XMSRr5yqhx",
  "key22": "61LMSzxFpkJ18LDQVD14b4MxFkdL9GVNB3hJCDJqqyTXNxjWNqC9n7SYyDucNabCob65qUZCtcP51GabytNE4T33",
  "key23": "2ojemrWfaemvtTWhjYqhrHavDqQF1fMcmpM8sXVCbnM6y4wVuQNYn6EMV5wfbpEfXvhHwTVe7rDMn8tQoXPVhU4L",
  "key24": "2FHrzGnsWjrUMXRLWuxAxwQk3FgdizKDLdpTU5dAzuSSTE5zk8rg3ZXAfuz1CtzvGdYRovL3VZHaBoLk6x2q3uRS",
  "key25": "5TcBfMXPXhDkixB6KtKio4tyaw5ersLvf2tn4MFxzxwhML9mtBuDzvsXNjQVzAHjNur1SewaCTYyLrFjJBJecM3u",
  "key26": "4TfSHb9Tt6QrLf69j4Wh8BQG6oAhumrSuZiUECX3EAL7JaUjdEXnSJrRRbTrBMtQg7qWdf7UkL16TJXQk7oY15Rf",
  "key27": "24jx6RRtAYsDSsizhG4x9FUBtFCPTCo1waiCcnZSoxu3dVbHuyGvYRE3ZT5qFvc2vKGUgsVKQRc4HBHKHU3HLEfa",
  "key28": "3QH997NGzceZfjT8cgvmJbATvVXDRPmxuz3tocu2DEduPtcpv8YaUpqUHbJg7EN8JM35Noxyqu1g5Rq8eSJm5y6C",
  "key29": "2fgJbPeovTpEygrHVL569VVL8dpSSyBCcBZjFdKzPMH2SUCr22uvRenXXPMR4aXsDuyAABYejNa15au19qF2ws8x",
  "key30": "3MpSiQXB1nA1xrReRMS5bNm4Ebw6jGre9AKtMwWWxzJ8JnuS4ShqixeRFh21ojD4aNYuYnaHoK9C2QunkKj9X4q",
  "key31": "qodA81h26MpDVUzkaC8Wixppivrm9VF1zWNacCLKwkfMsHNSbDsHYpNdM51bYmvGMRspreLvSLpocmLpSK5crbf",
  "key32": "Xz3AXTuvtRS87P37hqUTsjFk8G8gXfWncdmLDYppmDezwPXNK8Pdyd8ErV7mnSB29pVVL8vWjWJv89FB2TGwnML",
  "key33": "2xgZXo7zmQznwjDYP7KWvfmt27gQa86pj1bj4QmnDEquqm2hVzcfs4WxQfupaMvcWcgcw8MFCiYRVkiAJM6bALXt"
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
