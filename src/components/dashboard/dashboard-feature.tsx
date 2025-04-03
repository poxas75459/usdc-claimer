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
    "4oMLonKmgZ3WM8eYRSHjZBsqEngAM6jw6c3ewX7AhMNwBXnwD4Ns2xiBmxJwFN13Q2FtdwNqSfr3hb2k1bkLPFXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sZ4epwjjuVzjLAubJECwXrrQ63Pn4jsj1CjqphEALkeRJZ6o9DMjZr4RAkPWgxQ4D9ghKE9MgekziedxZ1NaQR7",
  "key1": "2izcHhawdgckDFmzAGFRYvYQdSHQaGVNWwhaSU1tXUuKhwEah8iAW34yr2fHS6D2b1WdNvrUzXQRBASf1usXhorK",
  "key2": "3C4xYyvCZCSRd7YAzXWohCD7P3RBPge2DBsipVW1z5emTep4Lnr78EXAXoCK3jq4iTCCyAscmSS8BNVSWxYJP2em",
  "key3": "Co7aZw2vb74CYCS3QkojkRd78BfTWaTJsMgapVpDmHxBxutLEKrV7e88Ha4HMnn1SPipEXMbGwHkSJV1zBhxyts",
  "key4": "2b64kTXCiiMqdn5KE7qtsAt87Tt3tvUZaJvimqipcib4Xv486kuJNec2joeV2c21TgRFM8HbcmCH1QExBG1BXN3p",
  "key5": "36B8WVf4JmZg9NUir9agV5uHWDF6nSJuJ635osdi9es34tYkkxM5RBi45WeYkZmWQCX9c1VqRRQodBymaj1hhRaY",
  "key6": "5XgDHq1v5RbyHwUKAHqqmc2ukX1uBBVr53zn1ePibk3PV6iXxHrTUArgkMBHZTRwczViKUHqkpz94oarZvDkV1TY",
  "key7": "4Pjhjfgr7YJqSE9x7u2w1wCgjwzNDFHUuD9E4J4DDjgFgkgPrSeaMMdrUDhzdbU8cxucuSfD9ErB9pELxG5QuWwm",
  "key8": "2X21Fa8uTX2WhjP4wdnB6bnbArzGm8DxTeFvEugSWeNaYY4yhe5HGowgrJQsnfG9zr51NgwVNs4rCVSpD3XNeyAw",
  "key9": "NBtjkufy5rL8UWaqZtVAs1zJD9sJuyH7zhrVNEvtK1Wof5woGWc7p48QmVR6ET6p5er5h1C6knHewDNhjy7tg8R",
  "key10": "246nQVvWy1swbdVsZypxLLKxTqTWZG4Pkv58TQYEmvrWgkfroux27uHd7FQbjaYVEeXmHXbta1bXFreqM7ZcPubs",
  "key11": "PUzXA1ioZHtEG2Zo92quasrXY1eVxwh49GtEwrRufybhjXSziS2C38mzdSmMWEHCFifZXuzEgaWYu1s5mf4mwhW",
  "key12": "5VdP4ivTG9BgyDiQjMJskQ1V2BsGBBSfQrKki7QttWS4f5LegUw62nUkKcgbaeUMFs3FJaLdxeuJfDwqNUgdboCr",
  "key13": "3ezNQrgTxVp7Vh7HN8aaA79ad3V2K7pK6Vd6iVkgAKtsPLwMYdm7Ck1EixxA5JBQKuDqkPktsyLqyCR8jvBq6qmb",
  "key14": "3yKQiD7NG2jKBjvr5gSR4wZboYEp92JUWUBNQwu3e26v5WGQ7NnL9f7fzFDX4yWAuS8sYWQxexNmDvCouU4f3An",
  "key15": "4YghxSP3EHzNrdDHpiEdqGzPgJNUwzbwYqZRML9o7nbwNyRTuhdUh6ujNXazoKbJFDb5E74PNmeHpbhfb1nhHTc4",
  "key16": "wvx18S6QBpeQu79p5HWmGJAyQNmUmVaP6TnR5vxmzrArAApNBG2cJUdd3Y2KqgFzDv6bhixpGxeKoZcmGLkydnU",
  "key17": "9Qf7eFis63LP2KZBfB8DnHV61UauUz22BVK5MdPvizMxNn71RZvucZMuvRAkzYaesXUtx6BA9uNGivKChLRXND2",
  "key18": "tbScJycRfuSsdtX1pcWoSSfkVru1vt9fbuMzKhpPTdaeB8dpujPXbPPhqEv3iioTFEiZsmiH13A3Ns1FMXasKYK",
  "key19": "3sG4hWTP5tsckzShoWbbUT5SBtFmQssnT8FjBhPgHe6nuQau3KfKi3hwgz1sTSefHsp3MWRbLoWo8wQX3AUP61r2",
  "key20": "c6A8oejZaYLZEStrKVXVG2i9xdpjToNxnAvh6qkqhbZUUN9STPF3a96aTxGqCnL3DTiAcsKVQqqo6uuSwuiV25c",
  "key21": "3S4TrRLHVXnA6PzSuv8RVnkw7xSLanva7qS85oVQ4cLPPo2SSYhYQrnBW48WUywHJ4Hf6S5g5umr5EeoMeWXEzLF",
  "key22": "3AaNs9wVhWxt6pn4hdc9Fa7wYf642qVwapD4BuxfBpqLMTNCXoDJi2ux92mpRYTFhsxM9sXdMTDMbLqTs4v9eRwp",
  "key23": "5N5th1EPPgE9JPaqN953uy2pKrLbLCR6zhdZoLEQ1KDwFvCJnUELqqqB9ASHByAjHw2mCaCV5KYkXg5YacAZ2gpj",
  "key24": "4xxPxAdiJMtuQZe9p7h2SgB799D3svGqTK1tE5ydm6MfwaFxP6VGdLS3nKkfPPmDS2XSoBJvUJ9bH8p4FunUu3KN",
  "key25": "2MMJhfP4NYEhw321yd28scRgj6AsLztAtXCZWbzjAn5KkBiED4RXDu8PscSEd7rPAFcLVca93zG2X4ohavMCGpyT",
  "key26": "2wsyy9u35acFjpd6FTYNjBbSfxmWQQwaYv7yzCtykKhtjHxmhJpuFKEFmm295HhZP3uNnhueF5Q6Vtt79yc48KYu",
  "key27": "4UMuNxq9SBgk6AwYbE3R1hQdJZx7Qz72MFbkNHakbta8oGK8V83xFfFyJsJ8B6EL5vcwczUkz89qj1TT4MLQEQyu",
  "key28": "Qzhf2pRQfHpDwrtEodiim6NgJbmHFTXxrMYJu3zm3yfG4mpiRCtmjekixwAjdxMBbVspRk5VK9AYXtyCPcoKB3s",
  "key29": "4PgG3PT7uKWHvNttQVfe651F7Gkkr45tdSCd85nv4pYAo4X8G6qWJkcJAA6oQ3BjJnThZwduLn5Qzy9iLNUBpAyF",
  "key30": "5sGz4AHNQGyowwHWufrKsqoRBLspfWCj74v55uAi6rLnGVYGkhXdPWmiz7bgnM74avhxgF98i88kMEWS3U48VY1d",
  "key31": "5J5S1t2oAfkteZp1HpJ2uvRasBAKGdhdUEBoreu6GoPUQviuDUWQm1pE5UNsYuwquHWoJ3X7mM1TQQ6Zg9Hnptt7",
  "key32": "41wjfoiKDD3vKoBGuc5UcAntHkjbyCP8atGqGNJNqznvJtuvHUpqZLVg2NXJ2ubo5ZCZ68Z4M44vkB44qEjQ3G1a"
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
