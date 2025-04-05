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
    "3smZUx2x44GiNjD1GTuD7LMfMp27cdotoWBi6xxA2d98VweEPkPP2SLcdzF1ufgtA3r9vK8Uvhtco6AUxvxnBxkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrVpWyWg9n1pJaF4Lbg3anCse6vEJM2UKGSa4MgEh61WhbH2vyWDegN6s3NAevC3VAHvKnThCdaa72FrScmcy4H",
  "key1": "ZYE6Rs7CCxHtca9P7ovYfXCp2K8Yqnge63Xp2dBueFg1FhDH1YS4pdG5JrjZgFThrGEfdHNSSjc2RWk3fvp89Wz",
  "key2": "61q7mr9bj1KSwHKostMuJv6arMPbrmfUJMv7SeJ5C5BXo5BhtHYebPT48CMcg6kVS69Mvq1pUAhjP15caCtXkUdk",
  "key3": "4CcjtwAayebRB67SQciorXomTFUGxAMfNbGfVxkTnJE8BC35zZSp55VdmxDEN8omUQUXJe5VCqVnEddkLVNfcgQo",
  "key4": "2YofUtBK96NeSGyPqDM6J6ErsY1qVeZC8w7FqZwKWAQKVaoU3iU3DxUTgEZXE9ZPTxa7rpEbRQ1qYZQGDbCK86V6",
  "key5": "124MionhBTCuW5FdfNY7x3KxNptL8YdVT78DtYtV2wvwtvYVHttUAjV2tcf3Uq5ampmsrkrJKYwky81cQFCEcRiN",
  "key6": "2yQyJKL1FSLiwFvSNVSW9MtJartrdBm9TQWrouoxVC2mAxqJX7aEJAYhHgLyBd7Kd4UFKJT2xAVPijNj8mXCGpEe",
  "key7": "3iPM9G2gMjFbwmFV7W3AEfF7bvBUdseKGx2fKPKypXHWsHCUQdiz5nRgoELGYdYq5gYLnYE8PMKVAy4t8M9osgid",
  "key8": "3vs31e3xPurnULg5Vu9kxPzJKmCdde6Cx4aPxvnNfR86Vx3Rom2AxyCQMjYayVn2Yojavb1MmPWrkMKh75LGwTYu",
  "key9": "Hj3ZZk67qTiQQGwVmLA4QXCAPzzpPYVm3ivFWPyeQos6vYkKognrWdtByJNaPVZsqJyMS9Re3FTABf95yWnqKca",
  "key10": "5GVWbKZkCaZqxoa6mHoYzpTHSg4eZ6yrpJJ2F9VXKbpznd8vsqgP1482vjH4aRmQ4XA7PE5W9wAbNGE1rMpnYqTK",
  "key11": "5ZcSjjtANdKrRXLx5psarxGEmhnpnRGGpSczPwVSQiqtisW9hvCP4oR1dB87yMzPnUMSiN2rfVtWyr4wYFQc84dx",
  "key12": "2gLCGCBukMWX6BZxk7VL3BLqwU9oiVGfov6LH1oPbAPdHBUGTe2WA1Ut5qVP29zzK6jAHmWsZSoBuB9UkLQzLE26",
  "key13": "5ZDkod5WBPThkZRBAR12V9V5SUYp1WoR4WSRdFFB8mhHfbAMn4oiQWugkFe8Gh7t1LfshRsKpd9X8KichqnBdSKb",
  "key14": "4Fb61o48KZ5RLo6jRGuNYRy6thypePHPNnTtj6Po4mAGDvZHtxnmBfTdM7Dr4ybr2u4pU99ng7TdbguwkWSownc7",
  "key15": "2K55NPDujqnjP9XHHvUKYgHrxFghYjB52wcheoFyxgsEuTv9Spcn2ZMvxwt4KBPHpNT2PbQqWcFsh3NQCwB2iaQS",
  "key16": "4kGhMoojtJFso8R7mjeFPHkz5WbC9P27QWjT4SyUE2eEA5ob5HYRs9pk2FKS711Y1iiaDihFgZrzXWPcQntUMS8P",
  "key17": "58CBpbve9GfK3ty3PSzdW91WkYX4hvfu5cSKWHkfwJVuQSHc8RD4xqnCYagFf7sm3FsE9tsvxwLHDHZrcJiQumBK",
  "key18": "4jP84SuHGg3yaEmDHYa7MvFKY9eif2qU8JuHdKn27ERmKDRnuuq2PCjd4XdGtW7jxAQoCeDe4sGnTFcAL8wNp489",
  "key19": "5Gace5ogbEDGnmTFe8wbwx6pqWC6cmamQbpZRR1KvyBeKC1JueZiJoMvPBxp15DQ8b3dbvYT42sVSmKoWAjRncTr",
  "key20": "21JXXubq8yZpMRFXrExB2rs59tyiVcFC9cDZeQ6V7Pk17pN1FZRBu9etAHHjmxrbcBGXWEvPNAuHNnBawFygYzB7",
  "key21": "39n3Dwg31vA7DyZexBLFa5hD3H3CfFxvfzsuWgRueTMEgNFi19arf9pTF6JKsuhD3xv3k5JLXyfCydv1ZdYNykFD",
  "key22": "4ivD6psvMf55XW88MVcJ8jT3cg1fg4e5piaQMcU7QEG9ZKXpbuYhYHeUAuXYx1HZox28wW2wWWgsGkfUXVzM1p1o",
  "key23": "4X2wccvTGbmz2Ed1s2DdLRwb1PMRsBKS55ZVjAv5knpahgWAHf4eW9txXbsDV6RodRSdDEZLQMhCCbW55aX1x2KD",
  "key24": "63C2ED8FgPaN9xBSMiRXfwKS7AQpCAu4nA23csRns9JgEzzTju9m48xqbWQNf7cyGiirkSLxmkCR1jpYgGZSkXZi",
  "key25": "33JSB3W45g1VvYHTGF3L37LWS7jqRcHDdJztDFkx7KpFaAdoyZZCMMosPuy4ixD5dgAfMEwvx9Xi4PJMo4L8hmGX",
  "key26": "28gJrJJh9H8GokrcMfTZDfj3DByQKZUCziFLzp5k3E7eBx88NeRF4qVpmciBCV4aTo9gUAU2bqq1X28cM9eEmSDf"
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
