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
    "2j4QXDSG8gp5MNPPwFTRJwRPTYgeFu15ne25uYkcP38nJE2VqEaFaZgVXr8hWCbntuf3ihE61SX99eqP3kuMsheR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfPCdfui721LuJPVb5wEc6hSZsXxzEuKbde2wwpQJNaoqYg8CCavnQ8EdWKPnUcw3o2guy56BGwbUZjMXnKZ8yA",
  "key1": "2H5AcXcm8t62eTHwk3YpwctqLV9nowXZckcub5xHBwqCqS2t1vxCzMH5vEkQFJnBUTAt2ytzVh9WLnEp6DbtjbSR",
  "key2": "2XcapnjJYFcQKy5YfPZzXx2SDZHMWyyN6dLQSpP82mgni1uY2cFGjQQoLuWNASw462o7f1UcSNKoQoQmfdn47bEg",
  "key3": "2HFYKh77AeMMsvBqqTSpSBsuWHFSSFx8aAt6ZBEQY3mqyPKkuiKR7eoh54zNiN5U62X9r49QrBmywRYPxHvWFZWQ",
  "key4": "55ct6n2fQoCLVnCyU6vPaTYtTpmdn64MbtZanhqRD7SK8sFw1y6JYoFcDg344uygwzZJDteZ7qBkuWjTk6KKUe7w",
  "key5": "5yhWJwoMNnyJHi42U321r4pTEgfpXVwKsnx8FH7QMENZiRf2H1P3uL8AeTgrKncpcUJiLrAXbUAUxN9tC6THv1YA",
  "key6": "FZo9LCHxnomrSwCb8Fzt8PQXNJe1MxrRNoHEtKfZxTetiLC9xY3VTwngs76BXwwiX2teEqbhCZYvsdkZyyX6tAz",
  "key7": "47EUYTDmYMCxz9NRTzpZFjfxKEjgkGZisrukvSmKg2ZarBfKsGpmWdpoV6yJJKSDdvftq7bGDAyhXdRf4AxUNs6p",
  "key8": "41nSYt9ddRHoVWACPMTh2pXQDMng1agmcbUfenHAmnQdvEPWR94DRDeUgxm9sNFAMC5jz6jwrTMM9w6JGXXSuzsz",
  "key9": "3hDrAd1WWBac2XRHGVaw2nshCfGGw3c6cs4j7MUP4krQxM8Tc2QBqhmrc7w4L7ceV7UbXWbQejKPESdAdTWrabBq",
  "key10": "5iKhJ9v1HrEhy2UwoWYpB197kuDZcadeUG6EHp9AgshNSsU4n7djrAGYy5g89UZf7hKPsPjpG3XkCaDp3hB1QuWZ",
  "key11": "P3n731UbcqpQ7pGe17rJzAxDZbkJGEmV69duQ9UKGKLvsJ5QPXDt996Q3vXHbkJ3q6hxRku2k49H2vdUNCzVMCg",
  "key12": "2EoHufwPHTDn6Djyp6p54WdJq78Wa2Wir8t7evpewTUPEYSzz7GtFuZ5oRURNAbYQyy7BbVLQ56U7otSuJ9XZamA",
  "key13": "3LSJ3KFXQ4Zt63sCghf7SxAB6sfzH3i9UrhJZDcZbC57dKDDNH5Jnea3p4Hn4tFCq1y3SvFR1DswDypiDVEyFwux",
  "key14": "K1DyprXEriJ3Her4KQY8BqQFSFuUz17dAzt2Sz2EFAEToN1wk3NQFajywp21q8ZAD7sLkN2ZQC62arq2R5jUoxS",
  "key15": "3YmJCxPv9FiK6vvhc1AXRdvMyQQXVLfnwBJxqG7u61BwfXMT5dx1pjbSHiWmpNQoL82CxnuysJRoXKCXYmadEDGH",
  "key16": "3e3zS9oQuv8iWsKEUDGgj3iLaKk3X9SZ8eSm6TYX9C5D1ga1qtR7hWzkDuYjKqmfCY1yTC2URAq8jUC9at6xZDcQ",
  "key17": "4L6MuDtVpE7L2dCB31ALhMgBhxVjnfLhRURZcKQNZfDkCWpQ9yQp8zcpLSaqs98itGjxY2pPstqVZwjc5majjfGC",
  "key18": "5tC243Lmn3ZHQKGkFTyi3RnovLBvamDhGtUp1RTEjwUc7iFViGaSmeLUreayyACMqgCPGCTQesSX4rV6DFdZpPUS",
  "key19": "4zGoRMMn2tifbFdS7Z5zJfgtsMyZU4RPmJvYdkd7YKpczcC8nJCq5V8KR2CSQvt4fb1mGCtsNg8SiAvXhJhyGMxj",
  "key20": "b1ko2vsCeq7yxd2W36EDYVddWjroV6g4k9Re8WVqY7nEBtcK2y99wvG6SkRrWe7RfS7feuoKkXCQQXbHi4bhTcL",
  "key21": "2gEK5yRVx1M89Vsnx6UXFn87jEgKMKU4C2RzJUS765rCcd4CbMXzmPtk7snCErHtufU4JrxsiKqEnnTdWUAMUkop",
  "key22": "5Frp6WNHgmSnYJSiqNLwQ5puG7mYc8RDv3nWYGvYHSjnwokoFGkxqw4YdaVEssurSxoNYPo7jbgfQnUNqtGhFVyP",
  "key23": "27TtVTvHfSxs5pDz6Bd8E5qNoxPYn2NT1JpQACf4MiQEiHM2j22TYm7S2CxaaU3WNdbF2F78nCuo4ndUDY5Aq53k",
  "key24": "2WBkoyQdT3T8FENcHjiqj4jVGhXQdhoBKhDEpBW4KDSpNS4jrMrECKrZyJTKAjwSTLRoN9bAsXrWbRAaLhiB6Lnc",
  "key25": "4hE1NfEja9ECUuZ35XEcZJHdfjYYwrZba5GJFvQXgrAQrUfF3j3HDcAmPpSxz8gyh54izAM4x22RMVj4yuyfNCrd",
  "key26": "557UehGav8wVycmwfJvnesUT6ppyBjuvmMAdXbwpp14GyaV9F4cc3BR89TfbJjNW5ihJPT4aNngKj8ySUiJRSjT7",
  "key27": "3SpRBENsCELmcCGtdnCfDYasWsH2usBcfn57orCmrD9rpdu976oXrnDyHL9mFtCzXMz6eXCMSzy163djovjE6Jok",
  "key28": "2DTUsGm6ZcfjwJKEhVBK1nEToQ8oUVAriZAH1bYvWu83Kbq5oS1dWS2txynLsMH334JiFn3PGWnoUNAT5pMXW6jX",
  "key29": "4HHjXFmNBcV2Rirqghq4E5amULm1kubc3m3vxARoMcxt8RWXk2jthz1JsPqAJWqqBmdUmQZRQNhuEr8AnUnBwG1B"
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
