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
    "2Xm51ErQnuTcxgS72BxPNEYcWhPsMF7a2hXxvm71xkgcKnPCgDqFRHHwkpw6HidBtqrppWdzbvvCAoibpnW4eu9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VMMY2y9o5wD116UZAQtKLt2CQ9yp2kovi74NuazNp6BnVzzoM3pNrXmWy6jQNKNpaF37DCNKtV1rtB49MN8R5x1",
  "key1": "2DgZV2AEybTr6NW4TPkUH5vm6esPtTwZfc9MFkNiqdAjYba8ciDHmPgHUhRsTvK3HLTXdNvct1fVmwwHh87DVUzf",
  "key2": "ZcdefEu7cgkbGC2Rs9Lucm3RrzK7EoktFAiLmX4s5HkFGfHNLG1tsWFucxhbXRNhLyFBZnvCoWzmyHtfDx8BBqN",
  "key3": "3oSevFCN2hKsm1VitrRsASSXawaFFYG95WjB7ZuNaMqGHxVSfT7mA2WehVjgKVSK1u9T91wh7MY8MvwNQhzVJj1i",
  "key4": "36rbF41G11tyobtXwt9hHAEyKydVFNuJjewzaD3ix88mj3Q1zmuxKEALgi1SqjTDLksYWTyDpnfg4NPdv4xgwADD",
  "key5": "5ZgnEYyGQoEZ9etjukQfLzBtcUK6TvgE98FANfa97YnDoMEo5wmjvpkVJ3krm16qUadGQbxuiekPmWwhH49CZcJ8",
  "key6": "2RdnD8cNQn2MKJLBBJehp82RteXCCK5Y3NwFYqgGzr3VtWSMTNqU8iaRFzBAtmSzNdVcgu8LBHaHXFLtU7cM4iEY",
  "key7": "5HKCHK6VHFYqqMJQiesQaP4LLuZcanzpVesKpZ6FW7fLapKmKbA1vZ6JjhYAkCXNpLyx5AU4Eh7Hfyi6Yb2Yow9c",
  "key8": "5GuRFaG1G9KrRRcKs6S912s1Wu86o7gQb6KgjjnvA32uPucZxMhgmdBM8tZkrKk5D6Cz4p39ErgcNz5e1r2e5Nyp",
  "key9": "4WrYyVJQoZvsCrzHWfqBPPXiZcXjFQ8hF7rGeNUrtRc7bUFcH4yfqcyh2AfW3vfMiRgZ3T3GySrGk85skb2zHo9q",
  "key10": "5pHDUHgjYkkHYfBJuyiYQs3MN2ELJCvHihVsGvRLoSEudMzsXXvrM4vCuP3oAViKfL64WiQZoQDjkf2TUnLviJFt",
  "key11": "45dnGzx27db5BbRuDspuDHjTFPdV3njDHh1Sfqq6TPg48pzCi38Pi2CQivcghY3uJWQaptoH38aZJvAgQWiGcMhg",
  "key12": "33ZtAPwG4yopZbGyasyoUpobJEZP7cpC6xDmU82an2Mna8Wjz9z4uyxQPTsr1ZVS9JAWz9rVAWLZK7B2BhnK7XKb",
  "key13": "49kSuCuzvLoaBBJCXnptvUF48VYNFfpQWT87PoJttCNWLVWAtEMCnhNkCjT4PGK81nAyjtrueC6JfgnnG8fhwJRk",
  "key14": "2ydzGezCsHWFPwD2PWYz4A3ghTjKJQn3Ng6ErpCCYj459Z6dZbSdD4M9ybxLY1igomvuaQj1k5A57PLdXZ7j9rHk",
  "key15": "uz1QUDUFAF1JLHutbTLCcXbpsEPTncohA2LDMmdMD6WiigNT41vhpGLxZemsQkDV7dkLNLL18Wxbd3a57Y3MmWH",
  "key16": "2EnUGSXyrwbWpEc2F2jw4GB78xPytVM1uTGy5Co1j2nV2jV9c2hqrFxZdVskCBYyvGANxw5sKKajWkix66Abho1F",
  "key17": "3ztNU8ge2feZXcebsMBEGZyYCbskWHM6QbcU4LT2Cv1J9MHXDbbVsZAeRPZCzeQPWin7g2SyPJHFiRpxBx5gBHZ1",
  "key18": "34T2PBp7WPjAu7SF7MTgyANJSeSF6eYukSUrVkFyQUWYR7AuN4dJPjGtAxvrAQtXmTB8GC9rwxSNCycVBku1Ne1z",
  "key19": "4vgskDN3vgvakZG4uziR2HowWMKyFWVndo3eBT4scJEsN1gon5VWEzswS5PijMf1yKRvoX57rM79XZztPSPjpu3P",
  "key20": "5kkiRzMWrSafUX6NXhZkGBoBWmccvxTXePRxPioukMuSGCdHER9nGggWU5PNantLwErhq3pnRDeDgYYrnWZYmvhw",
  "key21": "2FfaU3247Qp5z4A6XKDMphzjBoFYvQm74nWwMKCiFUvt3EWqn7vzdCa9CkJQXwFZCXGWxSsLhbZ6ABJDVrTEw1Vz",
  "key22": "5QsdGm6iZC7wPTf9Mro4BxbSbtiPu5hWjAUAc1sV4WsinuQpCSYg3Bwip9BTdTc31ZVt3syzEecqe9K6DtKmwUpr",
  "key23": "5cCU42AQdx8UxKZx1UCtb8uMAWd8wSLg5zeKuEozWwFjVTcEa7QFDAtf622NfSi6HpnfGZz8Ld6GqxysD2Zw82Xj",
  "key24": "2gZvkAPYVajkFzcBoc3rYd39LxXaZbg7KWXf5YGbbP1gMPsqgsxtz1YRYMv6oXuBH9sTf5V9ANSVzFPQBz5cfQTp",
  "key25": "5XEwoHgh2hTdH9etMCmhwaW7mrvTnDGyMrH2HMEUQUgL6cEFRAXFGLALqTS3HpiQk1an2J5ppu5kPUT6Xm8fy8no",
  "key26": "5zJk1MnuyfQY5aHo9S2tZDCms9WUTD8ja2vdd7ArX6JfaRbUegfjbd7LvAtqBnAQhM1DNStzfgk8V8AY8Q6H8oY2",
  "key27": "55C1FeHSucEpoMNRKAWUoSP5CPkXEQcPXfjp4sCCApxmDiCTrSpuRMyYrxLvJicG7R4567vhqNp7mo6B3Zpa4Ywe",
  "key28": "4zAZXnfuN2grNm3D1SwrUVPh3YMSpS39e7pvU6iNtTcggms6CDMhuuPFqccGKSfjP659z4w9WXjdRBuDpmi3FETB",
  "key29": "3oyZU6FCK9EedvyqCZcep7iaQpjijc1RuyzpszZ8T9Lksr7H18qDWkTTQd1ioq1aM6j1kAcmYhVHDcmkQBNyzzBX",
  "key30": "4fJG4qYoWE4APhujSEdRqk2kSpEXFAgJoAKpQMz3kWYZp29HyZvxVQZKbFV35S1QEK4R9pY2EU9D8f4uZKDzbTih",
  "key31": "5ukaUaVd17y1BP1dwPGvcf9qCSrjoNXAakecoBSS6q3nMjEYEnkvy8ag4GEU38eoz3LoH5ouJ24sXeAzP8exXkNj",
  "key32": "3yDFTQvgZMu9hz2eEdQ7itxUTudAAkc4tRrSMJsrckFmeMGykjDMJjtRfR52rejhiCjhwDSsV5f4AmoUGh4ZVyig",
  "key33": "2npJXHzkRq1sGHGRFxXAWrU1mzrCMc8zq8VeQerWCqhNZT65HSHXfrSgfxpYpn6PFbLL5qHMX6vaWBxdtY1LzHum",
  "key34": "b9jrKnfU8mGqTt92i7gwiRHAiPrWAe4ZXUefnkeXEWts6XqiQ66nt5NXaaEkmyEJWG87hiyeFpcDbg2pZeYT1i2",
  "key35": "5ZUbM3g591fy3Q3dTGbCcspHfN1zftFbbQotnnXJbZTNNTuyj7EgpkhV3ThPejvrjx1YmNYNNRqsw9hz991Wpp7r",
  "key36": "4og7ZKAorZzM6BX8AQ9zxzw6fbDMbGuNWNPvczyYq4QG4CpHnQrbBpB7eWhsLwBoZbT9M2kDhta3CGRGMmnn9ZUp",
  "key37": "2AS772ABzRBwN7u6Aj2CvUJfGTGZMpvXxFkrBYFTK7EdvJsn7cFnHePkp6DrFWfTpDTLQPgJ2kgWHGsgNdKgdS6u",
  "key38": "2MmDG5kMhtJLTkvHCnQnfhpHpWPsSpD1nDbw7wk5FHKN3C88viHYwhx5nFU5trJCboW82qkFz5y1DjAUmSym21Pj",
  "key39": "RZi7EtZK8Jht8WzqRebMuggvUdJQcpFMMB8yAH2N8mSzpZn1i6ic8prrbgvqzgj8yRn3LtDNydZXcNdmmfknaHr",
  "key40": "5z7AFmEGdWPhYLKs5FdPGqSr74hAVtPn6ZdGxMyGj2sxEWX7Kdcan7kLcyk2VRCLwj7QreTzRgCcuYXSk8nFjWXS",
  "key41": "5t7o9kxrBVJ6tvPergh7TCX5i3exrjQCZWyFZr3DeP2gJamnYqr9jhrvAnc79vrCFh19uFCJkCHxs8HbndskFtem",
  "key42": "ikPXAvH5Jy7vU3ekb2bYighwZQMkoKZJoiA9xyj4ufL4hPAM8eDYEuU28hjeDCkfhksCRgVYjCsXTFsUi7BKpKC",
  "key43": "4ZqfMy2xn2pcWzktsaoyTpAPM9DhH7JPYomc1MNSyTVzdpLWFNeqGCqdofXCNZHe7K3qTSxXebQr4HTAapPuJW23",
  "key44": "3yML7vKsabLnHxRYt7e8fago3hArxKFBUHJUNfkpYx6Ukm6ey3E5wVGhgdpxdvY5MnYyUGycvnhoGtwuceFgdCWi"
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
