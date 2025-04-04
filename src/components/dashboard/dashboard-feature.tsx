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
    "2dA61marko5segJs5zKepCguy99dCPoVPZASuLycjBzPCBM39chavtaemVm2a1JWZijVR6kVqo8JrkExMUbdM2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dz1kRL9s7Q5hkFAaTtBHWdQUhghDJSgsR8ewawz19xk4QSQsSDnFrYQgapZ1Hwe6EQkGQ84MdyWXd69fAKqA6Xj",
  "key1": "2cp5wKGWxfyPinVH1UZcberj47NSGKtgXfEt2cN2PDrkyYTy9czkAHQeT1torPABT7cebMtTNgihSLeXYKYeCRXq",
  "key2": "4okEE1R47vTzpaEyUmuMe5Mrgmz5YV4FZhKsvCKAU3TdtybFcwtPcMro733A8BJQHfFnS1RKsuq9Ls2GLi7KCzqW",
  "key3": "414yaBKbYN1YypHciJCHAJniJoh2QDUy1bB8xFKn7U6dVn3hFwvqgbJEMzoi78XUP3BmTSuACnNw4Dpj7xYAYo9u",
  "key4": "54wQovCLKYzTM49QoekxwqkNeeSzP2f8SYFSoqfTvuTZBWBJXstM2oH2ERjNntNHKkoXjYdWtE4crfiepK4kpg7N",
  "key5": "2GxHnRJgB1AxHJcsH5qQgp7zAcdudMHy51F2AG62xTd7r7RfWERNsALTB35vWEY8qjFaP3mDWbm4t7iqtByM3ijK",
  "key6": "6HYTmfJaSARcf4hWEd1Sb44Mphzz1odk8VDb1YQ9zAHDFjTEw2c4JSu4YxyGZEFYtjeYVaDWwkNAFqpkdtXmE1U",
  "key7": "5oaLssya4YrYcgcBRaiPGv2eGBsS8DVkujreMyEioBtBfysmYYSdzQVbu3hpg9wpK7YmztdTwA8PL2DwahAegbQK",
  "key8": "S7c4vL2BKjK3KkNky6qUJfEeJivi9SH74gDXdfyiaQxMNnMALJqsM3FLmeeJQ5xyPnqnjHT1c3EXUZyPTiP2yNK",
  "key9": "3xoWu7CLWnedxKecKMTeEsG1fyGyjvKAuPBfbRCMHTH9YNdPfhePVzXCWziTSBvJK9Fi6JU4WkkjSi4GFnW8QrT",
  "key10": "3xxMJrAkZyoGhcJ6zipbJH4oD6Fvq1shZXyRwuqPSKD1AK2rTFdcvtHrXUF7QYrriLxkEhgV65w5drGzcsPN96Ri",
  "key11": "2b7ehDcerVaKPZVQ11MZPC1oETFzQKpNAaroYtNWUu59HwZT4DNByqLEX5hMKbuaCGaaCNmk5mz9Dff4ECEKt5GC",
  "key12": "4FXKHN51kbvtNGfUBsa3uufABm2v2VbpMPwcFG31V1ohBZV1nPGBoBayTc3aqxG26HH1c3iPP9FPkuW4vwFfrbfo",
  "key13": "ajBn9GrhCLpBKHreHhiydpDsbwYoJoc3oHEbPhN1ks7EJ9AGwDkJUCHFb51mxhbnPprvwjMogwbrHBktawr8wbb",
  "key14": "2GCeR7Y89FK9EbyRWAbCaG5w62whAfQANQzRjvxogcTxqwWy8mpLNV7nfN42EnV2XLxg7VRX4Bqreh3Ffb4dZWor",
  "key15": "5bM3DYUmKa6LaqYoEN5KgGEEcajeKcwTfEWw2yoy7A1E67uRKngPDmrc4NRiCurE7TaoMBeu12vdpxHBkV3fXaVc",
  "key16": "4TnCwCBndTLeeaQCteeH6SmRe4iUiWko6kwZa2UxGKvGkT711PDZx4BmS4Sq3jcAzScGrFjhbx23U46GnHcPjXDd",
  "key17": "Syy1tqo1m9de2K6Eej36cpix6e8ynLg5kXoUdCBFtfAVwrWGPWHc4nr4sMXEyGfEPYNiCYRaMWmoAfDzuT44Sjc",
  "key18": "4LTdmyXaBUUsjn9fn2AJnDwmnP51Ra9Q17ZN7e3HJbds2CNa414if1EZWprP51QdRwjQsSG6hDFKwRC9jMeiNV3o",
  "key19": "39zzpRC53Pds1dDpULVKqRiNmsGncejRTF4sFRfaQ6NDFL9PpJ7kzmajTFgf5B5pwKqbRR4pW7WCAub3wBUZ6wi7",
  "key20": "4UgYHdjRuWdPDpdFtBdqMrrAVYwm1SyBoX9NFpFiJRSDRbuwnxvuAb4hAqNFB8gzp6HpJFHawbS5xsNHteD91cJk",
  "key21": "4XWSYWBcEHJhXtHhoK11ftCQBHzHAAANvm6GKGGszaE78esnRLF4j8AyDWKwrvvwjKWBvs89UMy8ZPvckjwhJuo3",
  "key22": "3u5CByS1G3TcBdoHTpKDcgireMQyi8yVvgPfbgRzJLjjYzu3FuW69bEYyMCyx25paWryTbS7iHMAuV2dVDxjpJw9",
  "key23": "rLKnc4qe2vKNiEB4HLYTv6YQZ8vczng4gesSL37QAVfsR2tCiLKcYUUb8SX93dkxMSjetoa1yWp4C4vrFKs7fyo",
  "key24": "39A161ZT1e7wpxr3xbFSgjUwZycFidW2FVRbydXxvXoPjD8BXcZrWUcTHTpkgGMmGG3MBhFWwQAE6vQR9EcNiVPz",
  "key25": "3Vv5peaLb8hxtLtdp7cjHLtLFE85yfQSvsDuLUkUFbRZbrjAaN7EXQJLsJiKzhj4buhCJSc9qHGcEdWwMySkzkaW"
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
