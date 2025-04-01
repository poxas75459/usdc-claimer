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
    "2CP5AcYBwgZiRsemwWjnQ4YghiudYjnmZnsbvsnRwo1nVQZuBGjBQpPg2S2mwdySAJLQq1X26eTwtioHCLVmaaie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vS3z6XPN58Whre6D8berA5Y8keoAzR92y9G3Y2WEdpYfZ8Y2GPLoY769ox5iZRB8jbRsGzhBxXRuBZzXbsHeiCt",
  "key1": "WRFzgNnBVRbHnEqGyPMbjWLk3YY1QsZaQAuhr6r7v5WWG3V454HifvEtXG1VHfGbfSp8dZ6SKMf9r8HAaberEhV",
  "key2": "372VKqiJPVzrzypANpM1XbhGJHkhZfdJWA7g8ueXx3DqHsqp6uHXExCvWP7ViSw4FKFgTMg9BPCrGfdhDvSxF8uy",
  "key3": "3qm5UmrN4ordSx59SBkwJS7F7quKUiuQBNVEYXzhwtMQPfD7RsJgyrK55HKwV3sc52JDn62T6YSyczzsQe1MiuVT",
  "key4": "57NqZqruzBqVFnUDbdZEbcv7niaZ23XKjQviokUyxiTohGF2Vbvmvf3xJsqxvERiRJ5DR3YJuLzwjtQhdWB3SkTz",
  "key5": "2ktPtpVE6wjYWqrPEpTB2tcooVqY4T3AnVut2eJozxyF9BDALDFREywHEB1QpL9XJBRimHvPiKW2YzfKpLohHKsL",
  "key6": "4vKMvV3dugnvmjakvRjJUTWmTEcNZgczHMKjnPGVSBtL3cFLMpJz1ZnAhH8maoAyn1VwBSrjY6q2sbz3ABGWcRHm",
  "key7": "4GnwJPH5srJkGPqYhvc4eJRjnBcMzrTdrJyknJLp1f51fatNsVrjDNF4K1w6FQ9e1zz6DBULicVLNYfCUfRGjznJ",
  "key8": "2gWHyGxk4FyC137pGyPSndLXNLN1EtNJmwoWqXN2cWvTZFhfDnYkE2a1K6e1BSW9aUtpmezzPyRLnXk9ES3Y6Pk2",
  "key9": "5kXgpvJcRZsdXa4eg4DHwqvbDGv8QgT228CGv2dfm8iSJpQ8fyhiyyoKcZpSQdnFpqnbpHCtvEWH1GhM9a5mrGG2",
  "key10": "4VPcyx4ePQs7D1mrPfVZXFCLRJAscLgqHCGT7Dr4hRGdUeHfZcSKJMdmEM6WxTY1mDjc88u3ojtxBYGbFBU8jjEu",
  "key11": "23ofL2aToYpUdPjzkPrej8r7T3UiYtHoMzK6r3813pN59AjNbDeezcAtqapN93gDhRu9oKrYaChPgkpY2XQiTSZ6",
  "key12": "qDY8bYAG9PtAEdR2XKPLYW7sH3T3GEasvamkACbYdVoH6EEbB8T7mDw34XjHWwfDVUj6CW31F2hFsQNK6SRgKt9",
  "key13": "kqiGA81WtTaUJzt2K8i16XWHPmtXQXMUtsUmFhVqNdZj2hGuHHRdbkkMEiui9EaoZLb3Hmn2DrbEkQ3VB1tJkNa",
  "key14": "2siGisfArXnpw3oggEqSs35VAY8zDtirDc3i5xx6Brmugf2k53Lpc5ZwcfLLppp6J6c4YKBdCdiRsF4MM23CLJ7E",
  "key15": "4Uvm2Tnak1FXM7p5QYbzEu1phC1SwdzustfJwT5onAnLRR4wxrRtjbGgEEJo3aDeKUiyEwCcppo9om3n4JiyZfeQ",
  "key16": "32XVnE4WkLerFkUH5Ftseu5BMwQd9Z7jPEneCu56gy5TqVLG81idBRGB3reUwX4N6p9krojfLqc6GYZDC8KQkXdz",
  "key17": "LaNcoCkJC3Gd4ZShox5NMDvu3CLfgKrrTnw24HUfECzaZXabrinZcz6bshiF6GfubcbnJL9NkDYjsRjd267yyWP",
  "key18": "BTZ5ovc7428AsL1S9pVCmUjWibSqY9pf4FWoYMVatFBNS1KJVQP8MhuQJHZTJGW4ygUVSvPtmYqcvN2W11ft2Vp",
  "key19": "2vfeRB2NNq7JyV6GkWwo3wirCaxRFVuJPdp8AePSxsnwx931TpJZkWDxbeQHJUQbiAny52L1sYfhacGh4Gh6G4dC",
  "key20": "KFQtGiTicgppiLMvsKpsWRcGdn5PwS4DECUeqZwGpVmgEKEiWez3g2hdSrGQJM9HpNenokDZ42CrgUSmgUXTYHq",
  "key21": "JWzofTGS1kqUqpwMCqj3ZQEobzwajtcp5EyR82YLmgLWgGQA5qJc5GTj2WxTY5jJPZE2wLE2n72rnBJprvEr9RR",
  "key22": "3StQ1K1hvPTuKTPi1DzJchczKojAp66M5FehKh6KT6h2t4KCRdYsWWcomsXCdXv4qops4DChuWh4pVriStBdt5Zb",
  "key23": "2s57Cz1JKB2mgTA7CykJjBHT34pEKBox1LS5o6MqmQevwjKwssnLA2Yx2s4A6aFoKLVFm8BRwY5WDuPYtm8deyaE",
  "key24": "3Y5r5XAWg7ewQeJYYNWpPGK9k9Re1NVsxogusUGcmSEH9yiQiG8mzfRSbW7r4oNy1yLnDQgJn9oHt4M3oVxc28uX",
  "key25": "vTiEsT4sRD6t2zzZFsCc32VyDvUeuC83HchW1iqh5v1AG48VAr1XAUyyx8YGKYS1ehun13EFJJfjPYghfvPkUae",
  "key26": "4CwidnJAMpZmN2c5CpGygNAnmcXwE744nh348Wtyy3s2Fn79BY3H2gLBJydiPG3vTEu3nB1EjXLEVSSECZ1c2tSQ",
  "key27": "2wYF78cLkhTwhmoDfi69TA16CvFAiSgh3MWTZSxGBgpr8jWYoqw8mDwZtEkG4iXQz11rXz98RcAAG6mQnDKvyBVv",
  "key28": "5tQNM5gtTM3cPwUAyJcGKhMEvXGmz6zYNPUUF4Y2m53XiAC77Lrb3auY1yNWjkFVk5XnL4FQpw4V6XacotFjYnAD"
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
