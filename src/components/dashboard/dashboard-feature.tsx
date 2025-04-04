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
    "2BpefBxcLiH6HDVje665jRjmK9W9HWiec6Hyf6PQApq1GmTdMhAPxpP4NUFsdMfy4aJCaACan27f2Vi722TStzQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWB1GGd7KPu6C86w1gC4LDe94ZkbHbBpBjxyhdUHSFfxDf92d4Cmhcca37Ny6ZeQMErmQBL3xTmQaLPRTGDS7Ss",
  "key1": "3GgaNQ5mfPbhHQVZA6ENnviLT3S8ZagYY21mPPYyGS8bndgnYjpzzNxnYSsMXA6qpsDZs1gUHDRRi7MK3Y3DGEVb",
  "key2": "5KbDQCx1nES61HnyF6v4BFS2V9BbpRjHTZyGRQhR441GQwsmtTcXL6FwboJCJqx6tcZUUMRNiWb46iEv4qPskcNG",
  "key3": "3WWwsdSFgf92GZLtsrGXTEHsSpMBEVtzpYukrFJ7S3kRK1MFEFWd1vcu3VqKqTrHU33uwdX8vziWJNq7xvhVacAJ",
  "key4": "pdDQKYwS1hmU4qoErWSVeJRqKbniYNABCQHzcZMofJx7vWzY8dT64Twp7TX7isqruKyNRKe1RVRSq4yxjcf15t9",
  "key5": "2fcNmQhti2HkSoTC8pBU9czMfZT6TFNLx85R8kPnRLLbwejLMcRmG4i7N5UfTvSHsgxVSxo6NYKRp5zzv2EnX3Wq",
  "key6": "3YqXPys5Q8XDenpfye2i5axfqTbVZEWMuP38UTUiZsAxNtNU1GMwXcU1rLgDxgFzoX4VTeHu74aomDYHVEwSvSJM",
  "key7": "2zAVw2vsgviZ2uyAHUK23HavJr3QcYrSkB8KdACdQZhgsNsPUtgW3STjCXFjkewmAYRgPiC9rwk6yWPNWnHZJhDU",
  "key8": "4gTsYiHrEnnbzMxd7s7fyQFuGiW4yeuqLtRgmj8bo389m8W3RMR6aRkXrgrrjDekRx2aghe52qzMWWf1UkHGfHJx",
  "key9": "4MxmJ9JZThwcK38aPFpwAkM1eAKkAtiojd63tkRcxphexomMi2Vf95ioWjpShZYmwkEQvt1LqJMBkCQYemh5PRth",
  "key10": "xPronCXTKMDhyLR4P2fdhZbFdgXXzmAdhBnYmfiiuTsV1zx6sCV8zjKH6PHQJGXyWuwMiuRcfa3i6AAfhxKXgdc",
  "key11": "5CG9iQJzg2zjd5keLYHT5zb9by8qGLVAVDovwmkmbTeA9apw796SgLaXb4Bas8At9p4K5VVsatqepV7tCvKMyb82",
  "key12": "5rZqEPSqfwpNKu2KdCJGQ22ZabsT3pKT1oVfBVxLCufEE354gcKYDqf6NCzmvB3v5ehQBN683rmWmjhgAJkNmAfh",
  "key13": "2D7KEe1N4Qc2mcVMKKW5KrqP6XWU42EraYmkNGQscA7yC6SzUQftbVp4aUEdzUU8k6nC4GR2aaz1JCwUpktLYwaR",
  "key14": "5D5fgu6WXBMnq3KSghrDp5WZpv2i2uy4FAoaWMXZRuLwzFk5ciWgCUGiX3um6EJVWSQpHLzASAUedwgArUdmzmCv",
  "key15": "5oKV3HARtbrvWkXkHbCwuXYVDBK9ZwHhoyZEnbrY85BGTxf5U2iJwEEG8WSJwtMYz6R8x5YZAV9gvfgL9XgfkJpd",
  "key16": "3WT3cVDEH5GzKmhGXRP3KkiPugTWPYozPQZs7vHd11sZxV4dM9MjXz78RXVWYR6Rab5bokmNK51Mp3DiEkGGLnJk",
  "key17": "2DpkgYcpkN3TEknCCk3rq6opwCNEXHHPRhbm7dg3MySTue2Fhk6y57MVQ7URw61owXJVgcF75KADcJZ8thEcnZmY",
  "key18": "65o54Km52QT2P35kmxrPfZ1ggx2kzkiVMr2RVWVHnqmuBSziiVy2uS8EnJEkiZYrubddxeaf4qUrQMyjSmSZVpfd",
  "key19": "3DxXKbbFnRYhoFadNXN4GuogrWsijpjzGhXMU7cAnP3R69E8x4kmrcYozD8LSGru5EGXWLhNVw1TEiBLAcgUJXtd",
  "key20": "2jPuNQjyGfHA6R8BCTnnA5tsrNTQE6KSerqrTySdohFJ4tSC3DdaozKme5JubAAaEJECPFFHLwva1Uoz3tJgkxh3",
  "key21": "JQkepetAfUKMARZXJaBkUUb1w7hCPozwHNv4CVy1NLEw1GkrBqUEzzNrkgh6N1b4zDcwLDe1iqATn8Bgu5EeYNN",
  "key22": "46zxN31g9hNG46bC8M4m58kZF8BFmPamZbnQ9XN6hQvg1DPbaU9M3D6Q32i63YcYfYLAXC3jejgaYsqDLhgjBvQC",
  "key23": "EkELSvqMvg1WgPi3UDANsKN6gS1JqY8gGBKws3NtoPrbs8mmqfBaGYHotrquVCifoAMA7W3GBYSdvDLggcjFLmd",
  "key24": "5Bkpb1cy9qcHCJkxtbWKdMMfJpZNzq8tpPmAK29QW4T5DhbU14qNBrUu2zVEbiTJG7U24n3Xu3NXKx9X8G3DyLis",
  "key25": "2qHnRvFMgA8bLvdJtPBRpdsw9dxfvAGYQXsH3C3kiVm3ML7VADie9342XPwMnmD3z2Szc7ZjMcLrRKjhqFgagPLG"
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
