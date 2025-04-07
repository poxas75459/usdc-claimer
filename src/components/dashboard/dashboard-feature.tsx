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
    "3R8zVS9gQ25W77NfZapmhiArRQoZ67g6pXqWoPzWNAPnaL3xSzqLQXtYEEjvDUoBUTRnaw1yzAB3zKAuzmNdpPPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V829NHyvdW81ahdbv9caviurf3bQwvs9RuwBWTQ2tAEUxrwfQozX9Xgf69cJYXMewow3yrzcas91rB1Qpa4Cm2S",
  "key1": "2Aa6d79Pf7W6iRMii5Cgt4C8PnPoiMTupcDCXqfQteNoaavUUWcgZ6PyFrMiwFs4CKmkD7Yhm6WiLUZXwusbLVxs",
  "key2": "3uG3gUZkvhRCujSCryEF6kXyguD1VwYxacwxUSza7hszigbVAKLRJEFzwVoxx7HxiY6X7oeDXxMqLkPwR377vJTN",
  "key3": "4dGkyfZjFauHRSZ3RyjJkWLaqfXsNXdsdH1S4FcMfSJwCwgesPNsNkCRQYtwpPM9i4qmSDuLCadR1b2T4ZtxZB4J",
  "key4": "3DcVnvunw5StKCB9vQ28Cw77QWR89xmWAtrDC7LCPdDnXH6agq5GUxz7bnyN7Ksr9hVgnqDoMxo2iWXyUJ1TGm33",
  "key5": "cBwEEazhZoB7YbsM4F2yej9e1gj7HuhBLV6kZS5avQ386AgkCZXWY8aZ34LGXbokZXaaSnanrwQTLr52PzWhrd7",
  "key6": "5UyWxtvasQHmK6TcJKupWXL4wBeFor6xSGmT4Mujp2USWxxsFsJToJYzePhkF2AmhJKLj9eZh97G6Gaw9e7gn1Y5",
  "key7": "2TB86XDsVHVYvSFevThfggokfr5Nhk1xvrZwfzjMYrymQnpQ8LAGNxr8FiTCLbHQNYvqm3NrArpLE8TsnDzhvJg7",
  "key8": "2anQHrTkrHSLE3zpi1ceyFdxLkYfxbEHaabKxDnq2ciwRXEdKLeaFhFfWES3Ur4RU7aMEXiK9KBueXdU7GAHFggp",
  "key9": "2XxKsiCYwvhoa18U6EjeB9pvRxrgowBMTppWdGa7HLx8pHuTnZfefLtRso4V7jH241u5Dt7SKMG5j7qWbBtgmGm5",
  "key10": "2fMtUzzdew2ZoMchndUtHtCN93A4k5XXzhFq1MQpno97JZ3bUwQVaWKhG5rABxEr9juBmMS5CmnHotGxCmQ4hxeW",
  "key11": "3k1Les2KkvhEdbTcLAUboyMfoBvk7zcdZa7H59qfwF4rg4q6y4qkzGqbD5r1hgXr3HUpuvzLfWx9BUsPdZrUPr22",
  "key12": "kD2EFnWhv7N5H98iuurD4yHLf9dSfXirj8rnDs5sadkK7H5jsXmbpPBzxEHPtpytJ5vwAcDp51v12LQDqWxoPLM",
  "key13": "62airbENbSDF8J331vB7Jsj82egKkZHzHSkmWBf1hx8e3KwKBYP4uGfQybTL6PDYFzp3cxSVxqACsYAvVS2fGS9z",
  "key14": "2EhcKa5nT5ndoZwKCTXjJsy62pC615KHEKQRXfXUyzJprhXiStJHB1MGXMRL2fjXWVmUwCQTQD3q9dsiiVCXfGnu",
  "key15": "ak64SXuqYPrDYJoyVzmw7KoZzkfzGA1wndmE26qwrEHM68Zjz5UMT5ZpgpvqpvGrH4mPtZtDKWPuGtCdEqbTBoq",
  "key16": "3SuvuCfFWWYmFFMPVJoTD7XPHjKFqeLA7VXcrwf2ZuFQKZ4kWwYFZ7cJhg43yBDUvhskLagZs5xhxamR6D3Qd8ZJ",
  "key17": "2Rwxjk4RhYNNjWM3ihZnTfbR66D2NzALHkCLnFzkPnnKrnQYcyXRtbLP3PBMWJpYVN1S7dC7YvFNdC3VXqCQ6Eem",
  "key18": "42moQe5YxrzZzderL4VVHHJaS1KoKSDhFKo7PrzFqkZZtut64AQmJSa2uXZ9WEiP8GyyVHyAvKN2ntnP7F3U5ZSk",
  "key19": "4aPone2d9PZPKC2XhYNcXpSZWGXuojsJjg2VgizrkMSsTLCfg24gTCZNKcioSJzsEmFiLd3GfSqXowcKSsLKUqYP",
  "key20": "4RPxPJXM8rbUAWdWpY5m1YJSPLXtWh5QPMVWMrRGYprcfGShZcZyE6SsQ6mrMK5LZtYTJbQHiquTmScCDDmWpUL4",
  "key21": "8KKtsjmL3i7Sp2tSphUrK5A7J2QAA64VaaAVS9ZiBrLFYJbBnE6LptuZ3Pod2pHWzLhMs1ejwMceerWq83kdgq6",
  "key22": "2hGd1ohimhfJ4EUueadE4HV223RwYc9yXebY1Af1ePMwDG2ZYYfkXxfg7n6dJoExnSdsEmMZpQ4TRs1QXfGR5Zp9",
  "key23": "2bE9i37qo8gkoZHiTweL55VLR8Bja9shZGyRR77MFRrha99GgHEs2Zu5sGRWDWx9P5uvnQKa7iVGDXxeZpMh8yoK",
  "key24": "2uBxEWXf9uQfxu8tr44uZmDoGS65SGS9zCjGgpTqBQhU5tLmqYogrL7uMtiPXwoCDhkTW2VnFqoriPsK4LNjfDWt",
  "key25": "3DypXTPQ1g7YAACkiEKMKv5GfzDPS5wtvmtfKh1XL278zDnjW19YmiR2mmV2eEZ9MRS5dA2wrGAnJEAMMuWASMCF",
  "key26": "3SjkYW1PEaxUa568E7CrpZ9b682LA7pDGnbxo32rMKardjGB4iRtigZYaCzP65XtGGQFmv5PMbAAhFZ5kjxsBC9z",
  "key27": "4sskFbLVQc9k9aEXwGt5Ab5N6M5XxuQt679jmWfsWNTg7BJb4s2s7XW2afCMUZvyBUXyxGkg5A1edVbzeEUYAvFb",
  "key28": "WTNC1ZbRsQdLBzDvt1cLUXvoaynF1jhEftBeaBjmcnLMmXSHa4BdHkhwdyJTtgKtAjtYyU8Gc5nw8B2WPHTxb61",
  "key29": "qDk9UsecM3HyzpLsz8Cf4nV3haHvZxzKiuxTgLN1JaZ3RQrFfHKzahPRRVfXz5bBt8hUZdpjDT8Np4HoN3gAjsa"
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
