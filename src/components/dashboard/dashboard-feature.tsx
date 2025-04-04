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
    "4XgLdcRmTJSu9adEEp7rbVDj1yh59wr8LoP5JgLA5m2wBxphdRFttaj3GzwkuBsQjRLfdHv9FxTu8C7EmayrXjif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5LmwKwzCrcEUWj36cvDSL1psywtJBc4DDvcF5udr3CdcZnvHAMcEsjSJ7KGaRJWg1u9YPyDXNoZNyMteqvqC4F",
  "key1": "5xcjFf6Pmy1JcbQrAptJVtFjvKLtD7CxNN5759gaKy8doDEoMyNb1XSEGoR5JUv2K3MT18RnGhSU3xLurGvYWK5S",
  "key2": "5Qj5cU2LyUsYP2FP7pPST1eWfAsWreFcgvB5biFgSfDPViaXzxoY4MtfCqbvCwDEe136j9TEnyzk59ZhYFU6Goix",
  "key3": "27GHj1c365zjC6YqHaSD5cb51YuP2hCqQziTmEmvDarYig2pVroUTXVP2mCJ3ZJd486uZjjknehCm37E6PnBXXi2",
  "key4": "5bZdnKo691MGrWT3MqoivqH4DSDcTiaK461hfWehzB3CyqfTcKYqnCmZmf9W4LDHWv6hNf4MQGD3KHtJrQF9KjUT",
  "key5": "486TtcJ7krMtE2fW5zEd9K5WVJZSgpiAbgcfaKbQkanPrg7M82QbqeG1uvLS6QhtKjdKT1s2jYmZn1kt52jG4L2m",
  "key6": "23hrqkoP1PZoVfQ8wKXwPkiY71bdmF2ZDQYri4hPikSPSi29NLBs2qEiPuTyeVTuB6SW4PuPbdpsMvGndycBh65J",
  "key7": "5DYFeTEqfFkt4kBnWnG1H6mqnKm7Cd5aLYiafERuM5nimJ9vE3Ci9ZuK6tRcCv6EdREXQzB2Y8aGTeEcsvH4dsET",
  "key8": "2dGioMSRd2UZu69ZF6ob9VNgA8CosGLpJoLSSRZ2UMXfx63jEEtpdBf53F3FPmH6C2xudnc3BpVYUTjgyGDp72ED",
  "key9": "3FjLrKjc9i35faL2Yd8TBTfTRtcyFComs5LvsP549DTMPBRWhMeF5E4KwZjZkn5aUMEXdMt8B2HpEuGQrjximbfx",
  "key10": "4kduvkFVRWyAA4rU7xu2S6cnninery8Sy8v4wXftHuiFdS7NhQQfwYgbmuoWF2fLnt3putgi1nbPXawKJvVT3v6X",
  "key11": "64krzrHSfmdK2ypZfcdjiLN8Bbpj8NuzMdQC7eVpw2CcqArUP9coPJttfvGoRSZvjiRZHxxu4CLxZ6EyNEmXbwe4",
  "key12": "3qoUiRrsb7veDKDa9mUGVLeo3VDdpGp3ASteXYJs2htc2HduMnU7adK4nujofUQ8DFYBxjY8famtQ8LNtbrdnf3J",
  "key13": "5R6kMWsxgNgjv1G9RMEwiNUmdsc2yH2AtnzuCqfxvsuNH4kGQdnTaUmtDYTDQ7ovvYjexaSNWxxLcxkWFC481uDo",
  "key14": "5u3nFNQzLbFdVmL2r8AKpGyJ6f3FFEzSG8TduADgE7Cm12cFPRYHPNNgPpU3fx6JNgv2umvXbGnSYBT3kxTY6kna",
  "key15": "VfcTyEtGjiGX8E17zXVZ4gWk1tmC8yAkDRKwC5wxScs5KoCtFRzM7Y5XSzYMUooQHwwDT6StcwDn4DbEgsXGtge",
  "key16": "9342QYraJd7mbQsJWhWByjaHVst1V3yWzCW7K5uZHWSQgAtazcZAtD1xW5GKjU3N9vDkt54N641UC2QrDsri6DA",
  "key17": "3QKYReLomRf7wTfnTiqjJZmqPEUso2j9qMvANb1No6oeNiHjxygAsuQjk8E7pLsYWxXbLfRfGvswFgChhKeLXQgf",
  "key18": "5pXJkTa7qCPhWXpA3tSkH26mDbt3Q5trdySimnmrNvd6g6qEj9Z9Lpcb2oyuxSTkGYFSkVG3ptuWgGoC1EQMHmwy",
  "key19": "3YnE84exWrDvJft8v335KcWWDtyBmVJgTtMxMzatUdfP6qBihBVbTuXnhEXjkPhvxReK5Gif3dAhqbGRAGP8Uo14",
  "key20": "4hr5ijSJnNYqqfdD9myzEkEDR5D9iHy8Ntvk6cRDTJ7Gw7jFkUzbD4aDtnMAQrE8d6M5TDyFckaf2Qa94e75VNv5",
  "key21": "5eg5FDV9hcKBQq9tv5Yeq3fywutrwJsjNYq8fUDTyiKwPCFrTFz1guCLbNGouWCFaiMyYGzqpZsq8ZWvCsaPBHDw",
  "key22": "auhbzayTeM2gaLa61B6YR4YbCYgAYYFHZSr99FdaU8dzKCjdm9hb3dWuXULtyGbLPY2wQrXg9KC9nKPzyGxpZZh",
  "key23": "4UYRWDXBJApxrEuVWG1Mojj3gTFeTFDX99zWLj8SPigZVThoTdcZkdMsDtcdhyAPh2QtUt6yq77DahUkJ4fbYx1A",
  "key24": "5g4FX2R9M5nPdosc1cPbZGTQdUEuAgnePvX9JVaYAVrhnSh3r6pB7xtC4FFxwdMKLw2Xj2crbCGh5K1h44z5KiY9",
  "key25": "LSzurvCPiTNaRgLeBCJU78HA6ptjYGsu6z9jZJe4X9C1MtnftinMYsN9qCcwB6nsrM7dEoCExR6bWKUo8AxWJbQ",
  "key26": "4ewUauu8h7cy11uGiS5FXbkkQPTHzEUCcrA7xwuqyDUpcJoMiLFp7PD76QUjXXziH514AFm9Bb1D7nz3JFqdvLY5",
  "key27": "4CJKWPxUi7r36aLGCVFW5L4S5befdrW3h6AGB9trMEZBE4NepjMJw8QZmCr6X578sBTUr5zjDbzZgetvvXx9hmJC",
  "key28": "5E1LaNXuBdrdrs8NHqnDDEt8myiGYD64UJQxvCzuzz13Eot46mz8hMoEzjHLKgp2A8BN361kvbFiV4wGkCVfs6gH"
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
