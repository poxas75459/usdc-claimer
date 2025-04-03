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
    "2i9pofmVqgxWVdjsqVMWxPVkbiATi5ap7wNR6DdmBenoFYo9BDqCrNHV9mp72k3SJTdTex7A31kpMeHxqL8SiBsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5mtYqjcJgxxcg8uSxPyB8FgN6gHpzPd6p6qzhfJUC46Lxw6reKg3AoSpYfBD7wPtbWda7hPKSQaJFn88Nm2N71",
  "key1": "Fdg8B6VPLtULnf4WyUrpJReuTPgmXagLQnYAmKhrTLaudcGQDZYegfJRF97HUQyJjqvJCwpWZnmRHNifFzhg5uZ",
  "key2": "3YgcsSVuYhsaSh6SpussrDHqHoG6xQCTm3XCrSyLW53Zahhm695x169zHsRXjiRgwgntP1dYDVgWpco9QaBUkFZA",
  "key3": "w9gwt8nosLyF2jQYdnjxEsBFuzRTtGapWcsPdrCLhCSiQ2QaEmYHe9UcgLSBKZmZdQWh3tB2h2VCRFxqzF81yFm",
  "key4": "5kwozyfVk9N84htghuQSCqCtWksRmv1NRbELZFppDUz9AM4B2PhQCJuhnK5ZggVW5StAkPzqvvDxvgXw1VDVZ6Bj",
  "key5": "3HRLmdAUBUjq8JfGhm6sAfWvYapZ5ZV4xQLy9j1BgwVZV1xnbnujmar7SQkxUEQ14iAV1S4xD5gK9jmXaGr4772z",
  "key6": "2hnMPwRkGKp4yZe7nSWm4XNVLErGGmpwoN9kmLxpW55EHBhbLM18rkQNarcxh23g9N77Ydo15pENuPKtBziYZ5tv",
  "key7": "4SAitLREWuoA9cHTG54Ph5LwgZn2kb9PWDtoh1KqcqARxeYJ9C2yL4UgWRJxAuzA1hkvbriMKt1Vo4GzyZrmUgqz",
  "key8": "5V7fS9vmLYVhf1skGaWvzpiWycWHSkY4rQpitd46qJcTfThiLyQGSbVKnLhkqrUXYKRR54kQUCovRC8jUtDiR1iY",
  "key9": "2WhbgzxB2ht3pkx8D9XfrMWtGHVqZXmjZfbfR8ziT3PtFHzGtvKba7iLHacqhFY8vRcJL7i41uVrC8thjbSwiN3c",
  "key10": "4WWcjFwpwZgsqzMWCbebJ6fpMqi3tHyvHRqTEBUJW9intHq4dEyrs4YqTHDuwvaDJD3ztEHQeRFH7pqShZnJP78J",
  "key11": "31jjHvXXfkAEQjciyE5E9MpjHFB4adtZ4WGX8nGKx7mq1Cf4BqNyy8efHvDGUL7vVSYe1RAxxNmJDj44B8cRujS4",
  "key12": "5CLx8fEiTTW3ryGr9UJdbp41FGLqScopLNFsw6iDE9S15Nsxe4ubnYTGZRJzbrUdx1rBxa6V4xFfpMm6omSY22XE",
  "key13": "449n4hZGacnBvYRuxcUFzHJEUgxEthBWiCb9nkCGWvzMkm6dZv6cXYaftWvAgZoJ9SPCbUTSKkHiUQaqKF8NYZrV",
  "key14": "LnX3eVU9DKYumiFgeRuF5Mm6NpAogm6oSdzkoQSsMZVKK8HLyASgU6sNm4KYi8trRxoZyqijSLqQpueJh6BbjzV",
  "key15": "5ddh1ztiLTByn3pchZqbYr3CEcT51meDd2LNkRGASwEdwTDiHpWGV1C6aVLiu83gVJ1q6vvw59QJy56SYdgbjmGh",
  "key16": "27SNKzteYAfQpcyz2yhgr8tQU4CYUYkas1B2mDt2z6FTNoq7ozScjgAWjTFWKkH8iS24NvH1XPkPjXCKDiHbyB9w",
  "key17": "3CtywpXrPyDV3xuWLEm6LoCBUD4QZNebETu6CHKpLGSPqmxq53ukYDJYSHoT75zEP5afDeQPLA4bQuHGrAXiuG1b",
  "key18": "5M32ZDX4oSu5wWW7L5nC2ocPRf3Ni2FBsh58GCRAhSsWY5kLJhrcqFHzextNbi9Jy2hYQunEiLpJX1DSDFMoSfdt",
  "key19": "63d2fWxhUWsudzbXAzuggEcTWwSjssJprKE8XZKF9hZ22Ww3ib3P38yLGBuTA5mCT2aWW2yi5LLs45Ti7p37jqpr",
  "key20": "437MzgSDHSLKPYDopXC9E9x25WHMRzZBKohBBxMRwHjb6N7k8YmLY51TBntQ3c6hWobcGUJXasLkxvZjrwxVMk8c",
  "key21": "4m99xmok28euVGbmHgzFpQjwXUN8GBzJhNLfd9dG65tntkXSHuDUGWUg2UFHwFormeTYDXuPzSRhc2NaWAaZ6Dhb",
  "key22": "31fGZovHDFHZ9j7nJ5ttfgrGFShc4TJoWskFiGHy7LqtYAKSasc63HvYuMKE2EtpmJ4EuPbTZ3YXXhTk6XCWDJZJ",
  "key23": "JbgXjPmPdniHkcSTGusndtEGGrAEqrcLbSdLVfwjhxidNnCwzXRo6z6DPQf2HhpYWqJpGgM1JLve55icBHbQ9u4",
  "key24": "3wBUKMxto3r5F3aMtpQmMCn6VmbudM1TPZfNWxvAXtcrE1KGBsg62p25FUZtFXFCmpFyE1BmYEL4bt5QQcr8LLyi",
  "key25": "LigiCJChugZoHQfwGRwHat7TCudKTcMoqiVJvypArfsnPbmFNUzJ9ct3R1XfGZCk1NFQEKqRhA8W6ZnwakBit7d",
  "key26": "3K1s56AP4ZCK8AGuVsYbnYFpfihqs5a1mbbuowVWmRWxkVZjupvRAPugwb2y7v3jK3r6MrQoFY8V7CkTorjGexeq",
  "key27": "3PGszUusQxyxMx8X5NMuUH3jS5pYfCQfUfCQ4d3CQTRof2gtusVcrVVxnh7RhFjgrX4DtVGwFe79WQog3MCLuSWX",
  "key28": "5ZDr4HYrztKCxkEuEeaBvuwjK3KKGZY5nER6bGYdCLMB4dzcCa2ydPabVV1UgdNA4NaRZUKxrP76xem7qnWw5qTW",
  "key29": "b2PLvC67pHAdhXoigM63TG8UxNuo5fwyBS91pms5LQdykXTry7vd72VHdHiu7cgstmaFEJxtj7GvmZoHTduKzZM",
  "key30": "559e9xfSXY2YqwcBn6FZU2Sv5gG9XyLa2dNp8JwcptTB3g3nvBbSGmmuBUgampqRUBC6sxB5Q3L3mUSBVYDUeDSa",
  "key31": "4Hs1HMfr6tAtaAzTjrjivUTcxsgnapA59K7zGAYEK9cnFGUBffoCFreYeRo3YduX1KSuYPYw83Dj56JXukQLUmy5"
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
