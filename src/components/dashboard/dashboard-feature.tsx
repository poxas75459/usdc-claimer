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
    "5MeQmTftH4mt5R5hrkcpAAYjQvKpJu4VCbz8xBMubxAqKDYc9AYmahcnQkQnHrotaj2Tqr2tGaFjVDEmhBwgGTjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uiCcqzFWACNrpmBkWwVZyBPDehmMLMicQgSEkNdkdPRhxUGVdJnpRtnS3tDE2Sss2S4hbvEMfX1HbFPgxEFSDU4",
  "key1": "XFNZZ6qeEemgi8RrJ2fLu6eKkDhGqswrbVT2AzmimJNvzBfbMwGNAi76Dto7bG331iuG4qkhjPgQkLqTkgQzwRP",
  "key2": "5BL1FNojFEcbjWo8ovshVMPPh1vN68vgXb1L6mY4hoFoe5ywbqq3mkggGGAYijvC92Vtu3KDCZoiBeXXFoDEoVae",
  "key3": "4VRweXS6X1RN2vko251352tJAXCT9WZgzjxqBkuTL2i9Nurs4hfkaFqyQuCPTPqiuA4ze7vK2B35G6qT8p9Pj9a4",
  "key4": "217UAeGXB4vHL7mJ9oLVa6UXm3UBGbRYkhFf5agKRhEKKLaUmVKE7WarwNNS63P1FSsoEsryNHcrKMvPPSN7vvrg",
  "key5": "3xRqd7SXhuULf4DxRh6wkrkwewTWzdGZkALZUbF9FGuTe1vGFPnqUJ9bJUZB1wuaXiKk8QZuBbB7TWtrrujGAmQS",
  "key6": "aXkXvMQpcSqHEYB8STKNmgGWDmMshTQqCKztAtrCAkpggfK2dejBkjqWAZB4dHLNzEWzFAhcfqQqVD4LPsp2Mcr",
  "key7": "3zAWuohUXpTiTya9Z57NKs9A8nnjV7QfTVsrMmrZ6Y9VqSk6QWXMHRLUEvo9fc5f2STQ2jpK9r9BD7xyFpHsjvN2",
  "key8": "4nVjvUX6MvZgwfNkQfQvmEESpv5tCfzJyaWnhFqvHB22dptP4GkHbMBRrnRB4RqhKpdFeiBiFncpaBqPq7FSHKp4",
  "key9": "33958na89DpgvHeAS6azNi3xZ4LM9kX9uKbmD6qjr8Ty9bibpP8Z2swQ94sewX5dxKaZifKs4jxri72efiZ1bGX",
  "key10": "2ZEnTM5oVE5r3oKmpL3s218F4K6aZ2M9jDyFXuw26MxY3DrW9FqSMMASDMMH59jaorDDvQZaAEnLCFpGYkyhkZq5",
  "key11": "4BVSpnC5uKzPoWMPgG9b2fGrn1NDTA5LgEmvgVgRJpExqvPDNkLhFD8uQVuE2DN6z3jVX66J6UxhDoRZWsswVLrg",
  "key12": "5pxwg9xddQichjmcvrWV8iANk3VvmCuz6xxERDoCiqvANDAAhbgcGthXD2eZVSwZSCd1aMEcSCUSa1gi96HriD4e",
  "key13": "3BcoxERZPyuCoQyeixu6zKCSkHbRfrkDEoNqy8ydonZR2cB6HPKaefbUL7kyUmaciqaz2bYpL5rFP5xe4325cT5F",
  "key14": "5fkwnzKU8xyrMNJeXg9GQn8LvmX6Jehbdhs3AZg4MXptBk8wjxq2h65U28wYiAYaKf9rJeN7TqsKg1ZUfCEPx58h",
  "key15": "64a5gBjhYv3njPcxVGwP1jCgvdSoR7hqk2uZLTY93z11J7e5Cqb7xqMx6Zc9hQkgpjVFY61hRohzyAoTbpun4Dc1",
  "key16": "4X6adzrhm7XL9pEy18rXGhoyeSLCyGE2mqXscXvravKRhE58oGBdERNBy6hgoHo3uba6E56wJzYfSoNtAGmW372f",
  "key17": "tBqoXTvtvoAb1pembnNVi1AMmZVerrP5pTptd2N5uka9vo5BkV83oYQnq7Ccww7276cxRxpcW6K9RjXxWCXb8Wh",
  "key18": "r9x5PDmBMzRK7CFm9hv4FeRjAJjhYYVGWVrDsLupzcstU1h6o9XKiMQyPVyQb1dL7TcyQLfuMhrMnMavwiWTeHL",
  "key19": "4QurnrLqQ9REDuPGRTYMh455A3uD6tpgczewbHKVRtAvNKRxLEiLR1QDtGRiGWNZGVT3cufyveJL9H4caCPJ6g45",
  "key20": "2UPkUSjZWbSZ7oMVKk6RUGAKKhbeaL2zPiLD7Btn7yVSirDxNEYaMYoLg5UERiwespZD71yL39woXymTRMe9HT67",
  "key21": "23Le6hTMnDGNf9xFrNUXa7h5cnbAtD3ynDYZeewMw5qtnZ29QjRpnm3gWAAXvc3XtMbCvzbaH2iLEgNMHqCenq1k",
  "key22": "5UN9WPMWkbZC9qPrsRrVSaTDyE2azoZLY9vWzbGLmkJu6rJSzZ6fUi9wKQLRZN4rp6EvGobMvNqQnhmDcaZJwPP7",
  "key23": "3FsJFoxziDsgYx5Cmf3VRCYNAdtejtPdSfVseVgRCksnPUoimBq8HQtPQy17ygFxN4AVvU21Ziowu3FHZyJPoubx",
  "key24": "3YtWCkeN6uC2YjQtJ8S8M5MCfYqCzdtdpYJkWZohN9YtR6hrL7icVo2eTZxwTDq3Nn1AsAgNhucNTmwi5ga4ukNv",
  "key25": "5yKGeKfekyVxjeS74STALHz38w5WxMHwxcixdLh6igobPaMNkFutFWG6HhwZVnWqKLiGTUp2Cq9rnX9trGCbWqvZ",
  "key26": "4BsSaWPAmXhLDYvuiEASyXqAvoR6YzAUoB6kjo1CnCCAQbyACuid8SrK6mD5GBWGTAhxg5bHxF5KNS7Yu9mZAirz",
  "key27": "DmnFowfWxFBNCrg9zLRNhF54mj7XEWFCRL8kMGEeZJe67WBvKp1tp3xGQcMDTpyVnJ9geLHrNw6EurkhqUhTAYU",
  "key28": "3ZykgSjb8VrdjZdHdy9Q1KAFAYouUWvBUrLDZZidgbV5L2igyCi1e4Go4fwqLFJNssXt7VS8jBJ9AxAV6KeLk8V"
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
