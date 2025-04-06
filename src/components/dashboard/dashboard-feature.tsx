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
    "3QyFt9hzFg736RUQsY1jQjQekttLUT6dLA7Z2SDyQT1D7Bf5SgNSBYzyN48r8ZkT8vbLPkMr8s1SqwcdTFxhUpCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjQtYUP7JdmUNBnaw9QDxQKxh8BGQSdSuxEDk3amBJBBtQnYR5k65wNXUMFjPk9MLRrMgyCuEZruDXRQPVLgwJm",
  "key1": "619yfCgtP2wh5ghDVzzoekziZNMQyUYvtighA9ERwxuJ3e9EXrBG9GFeoBjYdJNESzM2YwTGYbex11LE2vWqJJoE",
  "key2": "58mxmgmei4P79jErQQiG2MK7P5tLJEmaa7wTKEaaTakyy9jvmkdyAcCqREPHAsQFWN4D4MYNqq1Qm2UEysunHBJX",
  "key3": "3ZfWDPMBZPMZUhCRpaPPCW5vZWCLcrzeSZL8cKKwLnjguEyof3H2RCcADopJ3UT9RqiUMZvbu23yQAu9uTGWsLHq",
  "key4": "3fS9wbLCf8gLdDHuZQnC161JJbmZSpxz9PjaMqAHNnixWad9LhYhnPpR3wkZ5Bkc1UQaq3DGJ7T2YDabqRc5dx5r",
  "key5": "2LtTepFbo2FBwTtoQPNQWu4SmtWpST52MTvJzVVTK1D4BnDHVNSByQA5Rqmb9rnAneA8dSpXB7Vgp6qff1DceYw2",
  "key6": "3p1jm1Q5sgkGzwwCa8PZiWhCEH4ysNZs8erBfiMiuLnge8VbhCm72pCnTipH8uYUfzf9XSr6KoLBhaBcLSiCbjoP",
  "key7": "32cEPzwqVuon6Mf2qaw5q2dzd5gxrZaCj492s2HwWYNvjqax7fCvmm4CPk7hdnEXywb6PwyExWVC6jeqw19amdqK",
  "key8": "4V8pGBnGtX1WCWZLuDRcb7SuNTVgVB87bKTmMNmTttdX6kY44qJ57v76dkkBLH8VPnr7FpHokAueytBdHhBWdurY",
  "key9": "5nkZyw7nbPAf5ZwyVLkcEtzwbXdKYE5fD9DoSR2Vd2obhgy1VkTQRkna15beE3bjxzFNmVsUbAg1ZtWyEvJsEomg",
  "key10": "3CovPRmjUwS3DBMWTbFM5eVyyUGoY2iEw5E6A9FxhwNPkAuho9ACNnPxugB5qZGuY2FREYfrg8816RdazbEF6quv",
  "key11": "fyFphp4yN4G5SCTcrVRKJWjm7sNnM3PBn4dgpsx13hJmyeLv8WwaDFUfUkCzFVGe6guGZ7hXDX4dwfvNfbNLmtY",
  "key12": "5UHiER9xa5YnjEnf1a1j5hefCv9GoHZvWsF74KwQjVVpEzG5JYwRD8Yvde9xvoDG47BJrdkehStBxZFJqapMQZEX",
  "key13": "SwkLuN6efxkPLw72MVxt9sfkuczynZssDQT9Pcs9JggirGzdbeyDJGbB5DmZ5HXPjBzeEbwi4AJrCL5FxMstTmF",
  "key14": "29hcHyN2scacDUUNhbjcCAb46tWZ1C7XDPppBZjrMzpLKnBX2KSPETPCZpKoH1F25EwHRKecaLTQWNL5fyoEBPqe",
  "key15": "5jZvC4CppNgyfZKmzXdje7i3F3ioHJiq7SSqyPjhuSCK17XZHf6YJNExpKna7JGZwxoQxTSJcuBC7y3N9iK3yHWy",
  "key16": "2nLeziKnL1UuBqHCpxTo2rBXCp7SqyJ2hiL1kRBjhgC4iAt54Q1Nm5kx9qFiHD4WLhXGroYnw4armDdCyCUp6joi",
  "key17": "3uZ6nwGXDfgzBn2USoE6BXkyY8QDbm1C7yAjauCTKD4bjXuweK5tWwKhqWjmV5bXZWJYbXFKu3g5uHH1sthXtt4c",
  "key18": "2TiGyss28SxufcX8McLXwHf9gSWPQZtVmQji8R5jE6h4Cx9CtqtRY5n91c25EVMeWp9y32AjmLgUZpioGo2T8THB",
  "key19": "Zyb65CGiNptYj7RfsjkBfQTjxerKwBCWh6fzUF65HZnxRscPgwDjy6X6qHjNdRXVMQHZksaXrqKA86UacTw1yGm",
  "key20": "4qfXzFzvLpC16yAQdm5HLdf7phvY1cbzGjEPGkeTpyX2HgHeniDvdivi3g2NNiQUhDtakyTKmfcGqZwHrnCKoWKw",
  "key21": "4rgaZ9NASuUVnSEDHj3L87HSRv9nE2LNoBMPuCAu9QCA3EHRBzeksWPWD6gDK5qyFSKJrzs95eurUrddiyZ5fQav",
  "key22": "2Fq8WgSsh9SktMm81psFQDxFQ9ZsFunU3YAjHJnH5cU4eS4Jmhr8kEQBVjQ4UZP2GUeR37n1PiKpJCJycBSqrzQZ",
  "key23": "2aG3cKrcKyGABP5fSWukLYMXtsSaDLfQJR1m9aFHEJ2jSzaynBvwjKzpYdNWjA3HE8Qe1tWZqixFMpASoi5ALmmb",
  "key24": "3eHDhXHjefLTrv2abCEBnE7E9adQ8af1ym5cDrerVhhWRM1VdHBdJfcbiYnsj4wfBzqooF7apfGBppQ8dmFvvatA",
  "key25": "4XnuNG1UjLfF936JSswYuezJi9WAN5m4Z9Swe1yRPmkqixPLKUXNgqGMuhx6mxDjc5BuwJXnUdFSaJ4S7LFSNANf",
  "key26": "4Dw4ct4EkSN9n4RtP3FQM7y6HKu3sY7JqjweGXhvidxpSnZdA1TMDe1yMNYqguViTianKR2MyK1Ky7aEjfwC3VKP",
  "key27": "3ffA8XfZfpc8MDwowZb4chba97UPEgY7iSnj2NbfbK1FqaJfsWajHofBvftBibv7iQcMszFBRT4TtpUp2VAuz1Nt",
  "key28": "5d3jsAkQEDGg5ePsDYFuv3M5gt13dYnYj7cY7ePVLfZTSdBwf5LZUbLSguPV3b6trwnpE9DnQQKG5hETsLo5kpjt",
  "key29": "31RxsAE5whHAfHBNA4TvGGPynNLXLKseSZGZZ5mwYf7pT5VHCbqpF683DtBtPCPR5vKsbEfEcp24h5AmwBoHxLEV"
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
