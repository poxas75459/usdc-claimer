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
    "4LFCNCw6dc5MQ8HadcX99zeDfHUG2EVFJRXwQxnphvhfg7RixyLrz2qV7JJoqxgCYTohotTpmjpYkSCA4jFo2HM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPYJQuJhAniqhKahQe75wGwYvggS5Jig3uy8s86EWnHmTrjBqytD8CefhGucB4aHNHcaAR7dw1dJ6DFvFjhwv4u",
  "key1": "5oDAWdmJDLS1ePKSecttoar3fXpv3q8o4AVKCMHVyuBFne3p5a6Q4TExWeqd5rYw8SCRrC9gVU2mvwUSRUipRB4n",
  "key2": "7Vmggmdn4epn5fapmh3yG4Ax5PeKfRqMr1cF9FEdTGsNFiVXxWu4DGQ7BMBi8oTg3sCfBb5641FDnCwWDRRiShQ",
  "key3": "3fmfG9qoFs4zDbtDuWpuSvs6tGN6RqoHq8mqEhdJpkEFNd6wbfrdQPovwCL1Hut5UFLsdsYoM5B2ohnd7wvGuEtY",
  "key4": "3UxbPcWdSVY6ELn49f4wpRhGpwkbz7WDwywy8bbG7UE4KJ2J9WiN2JeGb8uW49H9rp9vkzUqegERMku4YyU94NA4",
  "key5": "598LfaJ5VBC5X7ByWQVBw2Q3N5G21kUECCx8S2Yf1D2PdHPw8KFy4uE6MfVu4vLKF9ScNi8jQywo52fSzt4Smut7",
  "key6": "4WcWttqNZYQfTorHXrYtTRfqup2ThsokAsjz78KSGTWRJCKB5QC7szs52ihZLEs19dQx2KK487Y2cfroTCgmCPkK",
  "key7": "2ZaVNLpUz7auq5qbBL3SDeB17xGZfAxdiQAWR2czP6BnZBpECaQXTNM3XDTE66SHxUy22boVqouCcozYbT45yEnV",
  "key8": "5r6k6cEGGYQ5xyygFn1ZMxRJMAwKKcmTkCxTnNzGjuQg3rHdezSrKKMXLLD684ydguLAvJdsErXcrhdXw97tRAkW",
  "key9": "39uCkZcet5SqU2zC8PunZePcp976r2saSRxGNJo44vpXEBNjobv2H4RwVkhcnXBNGqicAkMWbRj7cWtwspnoQEYp",
  "key10": "5WLVEfuS4ubtJ24Rd3NyTACySXTAeeNLQGuTMTmbsPJEeB1ZusWRGYKGdbHa42rE8fmYepbbySX8eWgYv2ufkJdB",
  "key11": "3Mdv2tWkkdrgMyQ45uZsSJA9X4BCvQLw1mpnFYJqFoM8AfWcEAZfNbvnmsvyyr8bhabxvSczg8fHALz7tyr6ToBG",
  "key12": "2Z34xifSF2yVTbiDnX3Zuay5ZQuKGneqPS18mSApD6TURxLmhcSxZAT3NuGoqRzf1boa67tbospuH5zbA44qAWAQ",
  "key13": "ohJKxQ6Zsy71JNw67zGwy2xh5rZtQeTVX5nrDcKjqcML1QQj9JumvDWyjeFSsuknmoL2xoZMKZyZSDUSf7hjAgX",
  "key14": "4Zt1rzEkgRJTmcTaGqiZb7TwB4CFTzqhHtRMBwNGxKDxHRJxLvDPFhRyTNSwsaRFhLiFaHH4q7vzFAtJ5SCbKW8a",
  "key15": "2xp2m65fEddkDgxiAKC3Cg9RYZcV9WLFZCT3VbfK9LSQVXjCeK55hzicHJVd9km5pAikuFMTeLcrkWH5Q2uiLctD",
  "key16": "52HfqiEABdyfKNBahCwCMBLhrsD7wmuAaAmLdPNkMiDv4mLW5r3odhGARzmHqYBcxi7QXBKuqEV5EbhS5U9FFv3m",
  "key17": "5p5z9zS4RsiKoGsupDn78mzokLhYyHSzi6KwN7WyGkZviKphKGGCLfi2vpNF565oS8YYMzw8VyQGWgTEN9QHckPV",
  "key18": "3yWzriu8EWaBYCgKMaSYMnXJsysEGCr8S76mvSzYd1QcxaWDp6UHfwJfwrnhibEYfgcxQKPU9RHNUEyK5Z8gR1to",
  "key19": "GZjzNTuiuADXCVkn1ztXynCaEXxwfDXhQbD4GXQkHMrRRBtu6HK7243oyySnemnSG1PKnhPX5QVM9TJvTwS56J1",
  "key20": "atfmxidhaLwmcccCaEE56NatH4qQkTunUFGb18BRYeyzmDp1mR4HHcn1w6cyQ43vGW7GvabX9eNj2fjHF8tzPXh",
  "key21": "K1fGWAz5kmhv37UHbEXSwfpC97JcWx1vDYzgdkfK2Gg9oNoBwd6bd393N2mnFRdztM4x92taJzJnV5giCi73eXo",
  "key22": "YvuBriSBL5PHx7r5ZzjxZ2afeYjV2Yzn8FmoiwTimtJnquvsqRT4KrxvW3YAq38VggPJ2yRgqB2EkmMDau17yv4",
  "key23": "2EEgDnSPxudSfLNStBgJCwJ1unMFNQmirr7mkvgkth42SbscDjaffFtqHTTZE39Tctrig4wv7Eo3vtFZ8bMKLqtJ",
  "key24": "2wSGtGDav3gTzpSRoAB4Rwei3HHvnLnCFgqEM1K44kgKsNsaTDbV8DLut8NcWHZFGWnTkF3ZLeoDke7hUVmQgG4G",
  "key25": "4XswLE6Zggnnp8CYpANjzqPM7AsQDeZ6yaWvTrJfNopMUxafuicnRzc449mdCNfNekM162ofSSCajCfst8Vuifq8",
  "key26": "HtkqvVW1SU6qyxCM4TPZnGkXTsEEB3WybAi9nwBMzgkY78u8K3GYudJULKSW9oxg95sHorX8ZHAjW9SsYquqtJG",
  "key27": "5GtFFvWqs2PLxXgFERtnFavHbBL4J8uf8cMB1TasnNvLofDB835tNYkxqZbcxUUbbTDo6eHPZAnqhU1gDBjZZUQ3",
  "key28": "3sbKWKFjKjtxJss8BWQvx35BHDcYva6Jn6rx4MhKEfvEzzbKFmQeMpChprtsMYt8pqtzSrY6kTzBZAMcR7X28eZk",
  "key29": "2RqKj4Hn92r2HmRtkwBLqH3P2KCtV1qFn3w5K8Cyr9nESRvzfx6UdMnUb8ZjWEYyx4F41z1575oQA7hRti3Q9eqs",
  "key30": "9yb3eX1Eito6JqWVjUQsGqB5H4kBm426j3t4iMbUWE7Ck9d3zLLTupeGgz7V8vnnATCwZm25CSqKAbKn5ZBmi44",
  "key31": "549f5hkpzMnCFQizJYz8XRzWjuCsgnqFtM47LjuYvg9efwFi4N1kLSDzP4g8hJiaAmak6HULvUxAaAhYrBd2625i",
  "key32": "2tYdSrJQ3pJKrWgMyRnuvQza1QDWnx7zF1RrbG2u2ZurirhwVbtycAwYgTpvryF9XPZk8eoQPbVHQrPxoft2VvCG",
  "key33": "5PXcAqixVJwLtm3pNVunfvCMMR1jj1GycohK6w4ZVnwjpwagxab6ttrLW269UYCXKT2DZcs9cxvKRSgh9b7cS9hM"
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
