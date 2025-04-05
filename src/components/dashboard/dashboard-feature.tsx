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
    "5VqWLK8QwMVbCGgVTTLAyWxswsPBm5qkKsxavuXiRgnY3ef6Dy8C1pZgjDQ8a5yEmhxbm6pE9aeB3LY348xHh67v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ucp9Dtso4xfL1cM1p4SpTu17H5zyzfE8sXJjn12HAJfL8JGaSg5zowLSSbXMqiEEwXQ6UoFR47VsihSq6wrQ5Qx",
  "key1": "266fkPFR24b27gAW4d49JEB9c7qmXw86tntM53R9x1EmSP9GnXeTaKXYeKT4yAuqF94PYg1guCY3CLo521A75sAu",
  "key2": "3RRSDnh67xiXFYaqGw4bCUEUYyRSfnB37WqMf76PdxYbgsWKAq8aSDxxvAFQND8aUb3XaY5Qsm5y5agWbx65CUdd",
  "key3": "4yZuedcNdF21zq4HD1XY1eigAoRbqiUsSW25nQwZ3FwQs1R9oRH1rzT9HDUsTnaiCnu6DT5WR1j6C6fRYDLhpjZz",
  "key4": "2GEbJoFGSriEfE2qZcic6y2fruSw2Dj9ZiALmcjCR3e8b9Zv7ArgJTmvhsp1j9J7YTaQh3q1cHJVAiv7W5TUK4F7",
  "key5": "53KnCgPoWNcFoG4sQprGAVQ1GG5QSLTV6kNam7bqinZ7ztRg9fmJHPejwqbYosYyaSXoP35Zb1kKzqhT5k8x7eBk",
  "key6": "5kxv7A6auVqR4yd9SMsF3859d3KvAgyr3B11GFH2RHDjaoMDfHWKdhS6BNxXiJUA1hg7FT99L6NGCQiShDG3Non",
  "key7": "37GALCWAZVDWUMd77ksFgyhfQzhvDQ7VJwCsE357Uc3MfXRXRwhjWRzfCWGVVZG8KrrMkUawfgUaiAuw4Vx9CnaS",
  "key8": "cn6HzZaQsA1MZ6sCvVR4uLR8CkLTvvT1aCAmxjEAcofG2do1jt2E6Bb9LFvaTT6o9fAFpB3suYmqCVAAUqHAVuf",
  "key9": "3V7ksbEyzswSidowPDb3R7xzmvCHVyxpVsXxmSJJvVNwLK1iCwELQ39ZFEUCbBhMrEWcQHMWGqwy4masRYo3WHfR",
  "key10": "3UiuNd1LfhqcSgQmHaWE3gHZJkXCBN8imFfjHE4AUX31vkVdksmH5by6Nddax3TQpVi68YVZeq8TaYu62qooXW18",
  "key11": "YusxWeLzqD2RbbHGEzU4ZJQk6yLXEPtEJZAeM28XSkcWLbmueVtAvxSEqcQ2xpCGVUCTDYpSTqSJeqpxxML6kVg",
  "key12": "2Wxg882qKJ4WWEXGucGA1oVfMvKYpFZRG1TvuWoRRmpMJc474BgCnXW3Y6tLNM8QTXrY9bMhWB9SmJ5AJwSa8ZAE",
  "key13": "3N5N8WWiJ92SNkEDxyWBV6a8veiJzvJaJkVCyi5sXdDzh4VgFRV8QHL2omTZZoxY7gBszas7V2f69cXYC5GeBGtm",
  "key14": "4JqjVSGZRbWY2ois4LoEfFUAsNMnrtZNjJx451ETcfqVEjQwy77iXeDEvRkP237b7VVswcoXycr6gPBrGUWhVsoC",
  "key15": "5wWXXhWCpcRhpP1UQuqBbL4YmryGRSacAuh2v1C9EB299FL7qemfA8SFiDYGfvVb5jeJqhfBEqWtrzGaQrYL3i3m",
  "key16": "4s1eB9LsYcmV4JcZ4XuKdWywrxAfmhbsupfKMyQzJBcofB23nHZpYahQCfTnRdmdpacJGpFZ8ma6qsHoz1xy8iEG",
  "key17": "4pHn89beDPmpvbes6CM8jpL663si2dXUHUMdzmyFotCZSvYGXTiQyFxLBnhELAh6iHAJuGrh7w9uJD2tmyF2xveP",
  "key18": "YNLRbyZYratskz21r9ApAuh9DTRmYQ9tsmSGNakxWV46zah3jMBgZR6iWt6LqQF77bpuDGTFBKrYsaD4EDKmdgP",
  "key19": "5Ap3gDaRpAGtkiSN4vv4gQeQfvdnq1gPvNSasoSVXP9i73T2iY271WsxF9qCiPt2c8o8pXZVpmbKGumHcVerLQBX",
  "key20": "4xGcej1Hqj1zmfe4mnVeiCEXQy5mY9Qz5TFRTvYZyAKV8X17ewgJ9SSrvK7AXTGpQRAt2gYi84DhZHhpW2vYdgMZ",
  "key21": "291MLGGCSEb4pCnXWhxpYwL9KPzYFspkJ2aXkcDAzD3XBkQ86L5Sb4CjtJcGfvBsLyxinzVsPy4eoLdq94MHi8m9",
  "key22": "2gjnhcz5urnje8gPCmM7schoiNhCyajEwAJwjG7M5AxQNk742XGbamnb7EctDawLJMPs7KVZhVAAKscVXDntT1c3",
  "key23": "5eqKJKz9QYHJQA4fFnkge5W5YWoLLQ8FApQwgULZkNJSjXE6QRmp7cio6QkGwodMGginayhZQxacfJ6cQhZVtM2Y",
  "key24": "4STQMNhBqRsJ1kMLh7y1Wew5W6y9hTqqz6pMgHJHUd6HHo7m4C4SULoyWo2nuUd4PjXoy87GazPUWYeqzWKGiEDE",
  "key25": "55DurYs4FxGmposbB4WXpe4AeXcYZoWRus5VUEkrTdDqHoUYGbtvs5eHuYg9KpsoCBg5bUoWv8vpz2wEvfJVMoSC",
  "key26": "Qb9PT8MPAttTtuZtiJzYfT4bsEbbhGW8j1GuJGWHNjBzkvznRWUTCEdJHfbcmHZMc5o1Egn3L3hfqBEz97Lphf4",
  "key27": "bDx1FtdXUyqJ2ynk2A3JrxD6WJmnqzad9tqNojDEFnyZyXPbUa4eCTxhJvn27heHkSUtD4ASsNuzcfDRPmrdtyD",
  "key28": "2YcszKkm2XA7EPLsHxRUAEFtcF6KYVKahu7F5VLYrREzjLZAhvQ8hweSxAZaLUueAQsp7Zrz8YxLS94NdpccAs9S",
  "key29": "33StTiTMWC7CF92xhWeJoiYVP6kgrRerYmBhDR7bbC7VLDhPJ5vp2KQx2nFrV8R2rWzYS1psyLbiGd5oKfgZeZKF",
  "key30": "5Xi8gZ5wcTvqjNHY9zEoipHhmsr98pb14vgfisjNVaJQNTbgEpEbd1ZyAx3qEPVAXfcGXYycTnCVy1LBgjF7yzfc",
  "key31": "3AjNos6H8cXfPcix6qpvcnynDAb67jq7rFDSXN3TgbzdfHHpVkcVpFwTJpNJ84T1nFRTAFSU7kyi3XP2iHk1TVvA"
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
