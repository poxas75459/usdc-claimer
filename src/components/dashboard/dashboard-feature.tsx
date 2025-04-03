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
    "2aLprmwYzq4hskpG8fqbLv8aRxSHddt6Td8GXc1EJHLXpyTzwxyz2S4ZR4ZL46kh1P6oersy632RQdq4UpTGPpnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSvoyQjU4pP9bA5q8qGK7tCGkwV9mgTPtbGLgMrZt4SWR97Bxvz6PBjm5nypeECchmusQELbDr3S9YY7Yndr4Ve",
  "key1": "56XL4WPSC3WPovPPvJ7VUrQT2VHEh6NkxaRuWW8MUia8TVK5xDL4KVmyYrTC27GxPLs5TUKK5kP3ABn14pBHDxDx",
  "key2": "3wFerNw4nuPGcTphVL6cD4r1y6idS9AzYsgTaW4qZMypFGDKE3gxvuvXhxuF19Q7zV5iWL7Q8ArbXmUp8tQsXCKL",
  "key3": "5nDi5o1vAARFhgiTRer4823uFo2NWyRTCW3Gs9n6RiG7JSH4EW8aZuhyfdyownP4ziGANdjPbjFhtcreiXpmJbxd",
  "key4": "4PmrL3s3Ebr1iLGdazowmihYGLaZHgv1WTDmFa7VYA4d4q3S9pdX2WEVW16yvoNe34YdVtKxThPkJEeXRgZbTfx8",
  "key5": "2mfTtjMaGutc5kkP5iZbU1hA4wAhZeXK68VB6EUXUUmkB3TQHmkuzXF7YYB2hvWhvRCBSwFAYvPRuxCyVnrxx8Ra",
  "key6": "32A5hM6yeHfJcu6FuWxBzVYh1KeQbSpoQTps1KfrY7cn1Y2xD6oDh2UDyu5Dt5aSQvkmA2AGPtSSRiC7KKgNE3cU",
  "key7": "2KrTomkX2FXhnMrLR1GJhsM8KoaHbhXSj12gitdcJD7tPBehQvTSggnLkPYGuaXj6nrbkYPQRmUwseYhDiXTPbCH",
  "key8": "4MZn8B5fbxchGmgqrioPaivXcQWGTi4hxKePRGQfXvS2Jzsud7r8WTjbzqVYxH64Yo9WY25n3CW3BLFiWfGfH7PU",
  "key9": "5FHPhRAaoGVYiqcWyTqpKPsV5w8HVfV5yaLVyXoQE3NUk75vL3nNfuant8u4JK8rMQUR2G3e3PY64VnfzG7x5kGu",
  "key10": "5Dr8EFUtQzwiY52iurxLPqfZB5eCoKandfQYCe4GCnycQQXjhD6Mv5XSqd8Ku9c91Gss4cep5m7vcDWNipU96F7n",
  "key11": "37BnXe9a6kfbmTBgntKJM5UiRAutcJ8wxGh91JSUSRKC14aRd6QYC7GmHybfbr5QRu6rHcXrVyfKEGyWy2TdHrhn",
  "key12": "4XUDMv8eWeqRobEpfmHFXEMz5twTqfuE6ubXVKJkHtrMyNKo9MGXN185Vcd7Nq2Bvz2tgHkUPUFMWBQ8qSPLMAz2",
  "key13": "oDmNgSXBn2jFehG8bNRJgUiaqurf7cQFH8Tu3RjFVmr8SuxQmLLLTszXQZ8WPwEXJpwVhQ2mgyEK3sZTU8dZisk",
  "key14": "4BrubgHwVxmvxF2d2n7BVp8J3nc7ofGadXhAKyaD7a8TuJqbffJas1QiJvhju3EsFawHJGZ2z6pzGySkQVnvFfEE",
  "key15": "5cwrp9ebSMAELsse5PaDq3Jg8MKqiwBGS64kUVGienx193fzbSZecuDqPhySsawGW86tV8QgVwtA3vk3DRZ4i9DN",
  "key16": "4x6JjZu3i7LQ6RJDdjX9EFnZa8NrALyGnARYXeLWuej4LDW4BfvdwqTZCHvTPKEtWt6cTtVfwNLRrH8S7nv2StC8",
  "key17": "vJA2bH4jmPP81mMMDDfwMCJfLpQrMkMUKydkXySzpni1tA9GEEdSF1mgnpf4x5iHFa4Ln1KPWGBEMFAF1Lf1Rf9",
  "key18": "62N2yVof4z86S5FaYQ96H21MSm72FP9EdzUQxd4Gar7YeKTajjjWua8frCafNcwhroPYu9xNeTeNZMbMznZCiYTv",
  "key19": "Qc8oEikkRoVSeCnSjDunx7tHtdP7LbVoTeXooWSpz4S4ffbUqEnQrxWctHWX2L7XbJntMgWbv2RFTodBRbKUbDt",
  "key20": "5oHAcAMg4GUPhJgBZsFix2PWdpK5YeNEPU33kj46RoVsY6zi4k9owweMj48dyATrSmNJJNh6v6Mvr3mghNjE9SA2",
  "key21": "4o7r5wVqyDisqkJdo8BqiWvq7bN9gKj5s4wkgKrFCESj21g91iMn7KdbzUPqGpsg5qQJJmDfYAaq8RhJ5ECw1Ch5",
  "key22": "4ys9udQgmj1oAZ3gLk9VYpYEkuBLvjpfAx7sRymv3d3L6Cxca9CvfvoMGSUGVCynq8FJNiDGSuWcXSh25QkdD1DH",
  "key23": "22mSgiXmrWXfB3Srx8YevqzEfauD311J3MDYbVDD3FKBkxBcHPe3WiXPPBeepMmDj2oCJZoo9kQ2fDNKAdpVkPXh",
  "key24": "3z37QyJq5aE2MXbKRipUzuhzM7jmTdqavGnSe29GEcwLqU4H2J9NjRwiDazyZVCCgYE5ntaNiBLGmVKGJ61GSsKc",
  "key25": "3yjfq6woMLQfcxCvcv6huEEvLKcFvoZFEaYouBgudJSe2CNP11j7CVT1cTwWhkN8moBHyxV1grjk33Nj4y9KxWZe",
  "key26": "5ZUoBbUjFG3af7uzwM7brBQg1Ep4fmqWKNzUXSvLDTp9iSFZVQdUY6EU5xCQbZqqFF8nYMdLpfDf2cod2usmLSNY",
  "key27": "5cdSr7NLHMgj5dsKBFYARtfBnnq8o8cSEGdUKNRitJhgnpijZ7LfAQquFs3Xu4tC2cFmKvBEtSZWw9J1WwKPhq9w"
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
