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
    "eUGZnWgdizNYX9iU3p1iS6rXKmMmKhGaXq8RyhWJoUSrN4Nst1SFA39Ffpviq6vDzN5py87gZiHG5PgzFoN129p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyvyYVsosPYpcBAJcGQULR5QVTH1p3t7W4XRuTpKF6bsy3CUY7dwrgWU4WWeJaUmuZ45HHJzjhXn9dhgY1qk4A3",
  "key1": "3jRQcPyZYxDJY3tPadXySrBvPLDqxtWPCLSdNvy5752NZaovuMVuuXiUPfHuigvoeHUbREm6jMzv9PzVriURvti3",
  "key2": "2fsBSycjonEmA3vMcHNNhgb5PAwfTYYushzoLrDBJ24cYirAukAHieKFCa4xRAtTY5FCdjSrKikxu67ncemFP8LT",
  "key3": "4pcnhvmAk9civKjBmysa6ByQNnCKVAnTAX9h5vnjdPtG7GghLNqLVA1L1ac1tMUVbt4S1w4EPWhzV3t3pW4QThhD",
  "key4": "4RQ7Ki81k7ijNC2RhyDzX8zSVj4UQDC79mzjqUr5FtSFZkMGmj33TupXGqto8mudVyEQnmWcP73eb9KLXc8wYJuo",
  "key5": "5p33rspg6Zer9HiVvvc7VV5p95dohGco7CRCioQkXpG6HL3rJmDqb89ZqEibURj9Ai8WWXiV79PyXSb3ojiWfWWm",
  "key6": "4CctN2Cg4mo7PXS713KS2vDbkY2BY61P2zCCU55W7tjyd4jaoX9S23xoaowQ1kHDB8BZjMMsBpwbMMrkT29DHcWy",
  "key7": "4eYM1uLgrTN7etvTSoEENjJYfhfjANMzr5n4zQPzEFnYeNicmMKEQaZQ1aZbgVfpFanKbSLtDn2vPrw5KtC7SgU4",
  "key8": "nTqnQx6EDJGjANRYh7hBmdAYk8EbJcYMoEZrZUuEJkt5gpLdH5wS5mc7vm1X94QfL7yBo2vrQcJSr2BBUKk1eao",
  "key9": "3CFmVynBXs1daUMUmxKA7RRDK1SfaGJofmmspSsGbTVL14XZd8gtjUPxZkCpjpb8cAkxLEBxZE7kxm7CzKFPguhi",
  "key10": "3ZSXkkB8irPAaXwyaJD69uPDeQGbwHz6vwQXCd9K8BgGRL2xmMXzrFPb1ehBZH4cWXU9k7Z5ZT26JYTmxBbHYmwv",
  "key11": "2wyfJuZjwQxntAcNQk4SPNr64iHyNe2zKhcU8Sia8yDgfKfgmHGebKcEy7DhR94YxLUjxX9iZ28er3LE5GLQPMZv",
  "key12": "3XyqE5MrgYNruHEXaiWqtQNEEuNTkienB3Yc8EafstNuwxnhBuxE1U99HasXs4UpesCVHBZT2euP1WgnKerC4PUW",
  "key13": "4dW18WjjiVQ69kddUY4wHktSk5bLeGpkutQUUbMxgzw2RT8mHAM3nTJQYU2ccbRPUKWXgNhU8xm9br2X96AtSpag",
  "key14": "2KRJb1mhEWnd7T8EZKkJKU5mRQxuLuqmCg2LbCbiNvXDmbXLyDwkSD29XZqDp1AXACoWjVQvWCgUcVftoQBTSqKu",
  "key15": "22bhFRZT6FxnwoDv4HSkpfKSmXdJc27dny6YaJ6WjWsEvj1y2tMzz4e5FepBqeQ4a7Kux16tZwfcAXRinKmA7QSk",
  "key16": "bx5KXPtyYGDvYjUgRtkRLwzBgvoo4iAnafgrHVxZrmLduzW4qDYyf715psnZKLvJbpKAEJpbuxN5vT6zQLEkX3m",
  "key17": "4mVH9M8kp2iRYW6XzTELXzVWXm8pjwC249oC2og1uNNekDrziWFbJP8ZgxT8SjrgYT5XDCSX85gV556aQWdwvB6k",
  "key18": "5duP46F1g5LuAf1zvqwPDBbHKiZtjeJf3PEsqBk9K1s3auzQiJUYUVHKE7aGGBfB1CsmbQq4VSsp7iEnprEoroh3",
  "key19": "6PGbQ96SsTBEK6MTRT1vbDXpRyEMZM1Etwky6QjdX2U5eJZB1sB54kMuwnvbYRQci3uYTreoPLUZvktZ3TirTnQ",
  "key20": "2vqcewAfb5FGRyL9wkswhMko9waLcXB8zrYGV7j5othsHMeKsHNyThmU2mdSiTakKTozqELMwbtwcHaBYYi5srTW",
  "key21": "LYnZdtR63T5viswXtUrhbUpvufyMXiKNKvqbYdatz6Ewm1TZq2am7k8417wAAFetoewpPiDw2Uo1iMRTBcicqwD",
  "key22": "52QjELMTjHXCpa2Ht9eZsNmdQhLUCLYQa5rowWVPxpDgD9rUsFJMcbkB1o7yeCUVmQTZH2g2EuysR34DGCsrdRyX",
  "key23": "2VhvCokq7uSHionwFrjDoHD76gAqaXgN8MsEJieUpseAYnSDJ1JP6kBFN78kgvmLs6ng8wiZt7nps4BXnkyV5ygJ",
  "key24": "4N8cp5VpcX2T7P1Eo5J2ePbhByKmjAUGvXS5fTVpTEeW3PuWFnm4uSKn3NLWmhua7meR7Dgj3PzYzsKxFjd8zwWJ",
  "key25": "4ZKXcAEJepApdjNaYuHxYn1U1ZKcxNJF8gRNaPv5oiZ2RNr3cNoRNefLUTMaapWkHSVY4Rog8UiZQpyKGos1mPqN",
  "key26": "2aVG6zCwKut3iaTqRvnhwyfu5kuuxPtyzKSCz9hD41134iFeVszw7mGpG3fUgwU5xKwfEJKNMnaEHtsbjLunuSKx",
  "key27": "4oUxFjeLDefhDCwCz7yXi8vMQ7Rwstv8TGeHujRLZV4bZztueJHoX13s1VogSkULN6JfRX4vx65ZxH8BFEHVyHjk",
  "key28": "soQm3Zh959LCzDYzEyTehiY2qxmcH2poaN2mAsmUHFT9NokYyGPQknUepq1a7XMu9UKdMTKsewkwhXGZ2W1fR7B",
  "key29": "3hhsYBJAho47JcAN9L28NaRR5rXDzX8E67r2sGZjFHtU4Sfa6HymsBWLBHG7w3qkfZJBjgfpuUbxnuNtyMsGfJHf",
  "key30": "2vxS76GVey5mpkzbhoWFb6pYoR6DjnFGy6Cn4F3p4XdEvAdQA2hvatq2cpjVuHUhaxmCzcDpqPgZcV5gPcCzqSbh",
  "key31": "43Rs3iqme5SmPYE4inV95EUe3D92XPnqk5zeJZnmApfGZFXdYcdqPbPU9YzVnNcLJTpxmT1ra5jRQHFHYqGqhMZg",
  "key32": "4yV6ZufkNCRDJcbqh7DwkrvYULRpThK7EoVwzA4zhnBK2En9LSvNYH4JBWwxdnhPdQx4agYinmsPrCFTwQZgYhSL",
  "key33": "3zCc112PEVKaQnKyzCkkxA4kWeaUCEzFQLdbGLoEPjLq4rLx8GbsDqj9qEZ44jEbWiayDx6DFM4aDRi7AeSBghqJ",
  "key34": "4yAB2z4dQj1qWaH75p4TLBB8XGn9NqvnkNH1S88TsWGviJ4Mn9LmHRaGDTidW2t3H4cbYgc7uwngpNoUDprkTQ1w",
  "key35": "2DQSVuqDYv5UPK6mT68oBk4ad5fejyvX4N4b2ZDsppn3AcrUT9G9TFo7ug2czcb6u46sjsvjBfokCQPWHLxo8QiH",
  "key36": "3kFbQs3KLjaqPmx9Sh5nSBVXbJP3bBcKytCwWryrpTUvWd9jkfeVVDESxCFHn2cw9mH2HqK1YKaT2n1kBhMy8Fcq",
  "key37": "Np1bX7QMcp9i3igoQQQmeJaA7M7fBSkjSoRc7y3YLhLiobJzq4u6MEohsxW97yWpzJi9g1GYV8e8qL1VrDfNGpi",
  "key38": "3F2PCRFxD2syMzegvf5EhARfkPXCdmxgG8KP7rx4eLEsmXsXKuahtd4F1EXy1gLUsQmFYcc4U9Mwu95wSXNYvPbn",
  "key39": "2WMRLYZBLDWG7HLL7F1SmvfLun2ph8AppctSAjTeGdpfj139Q4kDxrdGTjMy13GpAPJY7eXHiGNg9xdtdd6fDLsM",
  "key40": "5FJ7w67fdAEMkPJpxERx1oUYmhMJDFRPph7MySAuWhDCf9FgxtTrQvjDhK66FSgWGBCnFDSayZLbYsUFj1Y9GjoE",
  "key41": "9mbm2DN59Mhbj5ZWZNj4LhWaaBop5bDF33S3ufyvcRSEGpu6LLGbTkP5spVxY4TjmLzM2twbU5cq4UETeSKLZ1h"
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
