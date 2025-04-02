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
    "4DKWDbKWp9Hy58cNfd6y2KQHaEhjuRKJEJmoBfqJ8QJ5f8fBJonXWqxVP5uaBmroPS2ZWRpEiM4WAkrXREL5TqZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoX7KgH2DXyySHDvAFZEpFhMdKRCTQXgTLK5p47gpJMRyXb6witeNcYDiZdpbCNHSnwDAWeJBB2NDd7DEHGuEeM",
  "key1": "4HUb7qYBf7T25wfhfezmLDnKVmRPknSgX2rCWDRAThMJwHJHMhK8KyxHFQCSjsts5rcpXhUm19Kbx1RpqKoqcb6e",
  "key2": "5zkFz6VjRGdZhKFMjC1CXRAmKLCVRFzEd14QuZmNhcVjoZychPPA7nAjbGopnu5K6uip2is8n7DUV1qRWRxALNNG",
  "key3": "3dTpKhqJkDLy6eQTcc8ctwJphmqRF7d4PwUrXDPvJPUB4p13SLiDa84PMcbZD76N2uVzw8X57PADkiKerCMaRoq",
  "key4": "4sLiwwfKh2fzc9RX77exZp5u6jeGLXR3kUgaC9LKgwgidRTGK1ZtQymFSabdRVU4ES3PQuieDTbm8FQ1AWEJYAZn",
  "key5": "noejskzRiuM8yuVvAVwWrxobifhRWDBvUGeBbVgeFW3GB6GARgc9xUjkf8ErxJZ1525X9LgYzXXMQzQRsPFhFJ4",
  "key6": "4CGWWNZM7vKUAVSKrq8ZcfSxP3wyyRePWmSyZQ4dK1CSS9Xe93Kouy5P9WifcHiNWnBHoKKKiWgwka1a5nkVc1Uy",
  "key7": "2LJTKTqaeLk7hc2u6A2w5QJ5n845n14AtGnCn44oLYAZ7iVNJpyDFCVN2TtHDivHKByzs1Hj7pwwctneqnNkDp8W",
  "key8": "4HFmn38cCmy6RoYhxC7nTcpaUeMH87X6f2CrFVuvbLDHd4aNszdf27sxPXaYgXqMKMBfEYpXpMJo7dALuEbgok3t",
  "key9": "4dfsn6cffxDSFPrwDziVsv22oggUc5B6SbvvHADdB4jQJw686euZoPt6peHAPfGyzFzmsupzxS8hZpiz5tnRjwEg",
  "key10": "3G6VF2fwS1gYDv8gJhmnoXdVu7K8ep4TenwEC5Kef3BMbBDaJBh962zrnMDV9oxC1LSb5NWXFQdRp9GMshiqPi7R",
  "key11": "TmcxyoTTo86rF236crZHbYXTTfkfCSN7rYdbMFhr618ccAk9hyrqjnTShZpWTS3kVKmoErmmP5BFYD1UAMEWPML",
  "key12": "3qTSGrhcrymWzPgccRWyULS8mgNGPj36H9Z3pkHcLMvwZaU2BDfyy9ApsoqNiQmapTixVDfFxuTTC3JYw33H9GFu",
  "key13": "acScXr4bhfa1y4MxDrJwhKdmQJ5uCgbsDQSerfd9ddXp2LBWun3gcUkevCzBQAY3Y3FPN3C4Bbjke698wMMN4H6",
  "key14": "aFFFQQUbNgxp6xniUwMQ4FTcB1D2NGZy1NexsDq7dBW3BRuZED756RLx7mNH5HDpaSYkQnFX3Re5UdHyxW5R5NP",
  "key15": "2t1aCEZ8RUbTuqhV8zezpgiEqMYaA7qw1K4j4hKE1vK8hpeshas3cVeQ94s4eXDZZEMqi4ycjephjJnMzxfGxxad",
  "key16": "3ziE9jCNvuiRuDd7yzpTj4MY5shvzG1zoH7sfTnnCccsX1aTHEfWqArv5japkhLBoxWWFZYsQ6vzBUrFzVaFM4Zv",
  "key17": "Uqh1cbvSLALt7jW5ACtMYiwToFVm3uMUxxAXToqU9EUumkQZHnSNRwUm54HMs8v2sK5dgEgnUyebJRv9T3Av2Gv",
  "key18": "4MbeW4sNmr1EM5vNMoTQEQww3yQXEP8aqtsAzLPxvMSq4KUi4mFNRN4aTQURqPv1on5s65W2ftjFMSCAYsz9g4Zx",
  "key19": "5VYZNYadtLmyz376jJbxWsRueUfAuGb52MnXqfV5mxg4axCaFSiAUXtpx3N36ZKuhcerET2qB2ecqG83aDUtUq98",
  "key20": "2ZTBVAJmLeFGPFSCAXXoZhSZyCYfAXh7EDnqhkQ5ju6dAyjWYaZd9Y46phxXgAxjzLHLS5AwGUiSTwUmQ5JWaUi3",
  "key21": "3sVqiH7xvwCr8wBrQqLvnaDeC4FJioPU1V1wGJxVgEeUTUHbKbyHaN6TGeVDMtFXhzocJMZNMvo2YHXnB6VjEZi1",
  "key22": "P8TZbv1onNigsaV67EPjPcAoG3EhnUK26hXZnMCSN3BWucjcGQwk24wJypB6u53qR8yKSwurA7CcBZdxXMnuvrV",
  "key23": "34CPw5QRW1UkLEdScE1fbzjS4wt34ry3jXduD1B7MJtXCEBC1UsFqsgjZnPSjZQV1bWMPrgA55U5VxSdbhcfc14Q",
  "key24": "5tAsLnHdGdsCcJ88ZZ43T9KUAr4nJfFhArMuGU5axEySZ794VGb4ECY4Ly9QR554rFzXNqp4NTgM29UmdWJAjPd3",
  "key25": "2Npho5X5h96MgXEfZm32soEGyMjdrgy7XFXX78p49BL3rjPsL2FNYnTNidCT7Khs1FwFyh72mDdvtw6tuaGkp9sP",
  "key26": "3YjmDzqHRrYdHGJpEpv6djpL5BU85NEFt4cUMwdUtPfHUMRGEBoAC5c1UwrKMCQ8d7fkHMsFxAkWYvAkr7fBoVHE",
  "key27": "587hGjCwarbTvvjo4TG2oK5Gbpu8PSxKXFdhCLiQvKVvP8q5zJpgQE3X4sQHw1ziGKwMVa4a5ixC6ZZKstfMzc5e",
  "key28": "4LuEP9wPpn4ExjgiXqxBp6eaBbWQdCaZ6K7fyTowwZS2tuZnke4J1ioBTyBkXgY1cE7m7YNUy88WhfPB6S1csrvv",
  "key29": "21UPMYbHHgykBZ8VstgoT39XtPgTSZYiuby1zPD7y1iL7LLZHetymmAkixDg7BFvZg5Z6DVxiSTcRNBbuZo7HqDS",
  "key30": "4nQNPk6e4TcytXc1YnYVUPrNTPcniP6Pm6qgKR45yNQJba4GgHSjuZgFk5v2Lw4SeAQ1QgvSU17vUSU8AcvvY5fZ",
  "key31": "fuUAEkssEpxLi99ifhWz6eqoRfEsRVZ3ofd3d3xmYDPR9qLkJYoxAQFDj1fgV8YtJ6AiSh3xv9GW2ywDqxeapCV",
  "key32": "KahwBzHU6oxYXZoGHPgn5GUPTRThJu3FDdg482earyMG6CND7ZXg7TU4myLgQtVUDimpauUL7FutbYYCHJLXYEA",
  "key33": "66eAjt8gPgQpYGMfjaG6tW49NqCE8DnbS5VboYhQZq4XSZtxLaysBf43LURtnoLoNwRjmR2SoMGzouEsMq4xWC77",
  "key34": "3KpDrmbJBxx1gevVd2oBntdHWu2okZgjWyuKR1apwmD4d8HYihmtJRigRnPdJyGAgPCbTCbtnYE8ULopS1wUnfsU",
  "key35": "5BxsLMegziXmfxWEELwo9Eb6KFzZYoaEZkaz8k2RpTidALd1WXhL5TCc4uU8VCnFGCvhipEoT4NME6FXdPUJWkg6",
  "key36": "X4oV9WxJkU3qGFXQ3yYVmBVqVVj9oW9misjr1Tcs5gtb5TrK3amS5ss2ah5KWbuB7y5UhEuPcUySMTTUpGUoRRG",
  "key37": "5mP9Q1iMCV3T8BymrcPVGEtF4cUXhHXgUzWNqQtN3hMhkVMSpgXbSumnAHqdYRm3TQWDeybjcUs4LoWcUxcpWBsJ",
  "key38": "4828CmCkTHsoiDTzgFYKEVRLMi3ToHQ6tJQCyQm7nzLkCSsHQ2bzzAzhUTMGa3Xgi6xE66wLAcneKv4JZQB356Dr",
  "key39": "5Dm1PfA7KKz7J3fbj5E8vLfnPcctkthuni5jYtbTponC6op4YsQyUUpXf9n98U3uRU9PLq4NsUt9KkcwVxBjLmjZ",
  "key40": "3vM8FBUq16tYrDg1uLe1oPDWWEv21LpfUo2UvsZYgkLgYcZq9TySYbvzfvGdmRfEuTLnJio22ALHV67Kj1jszqLH",
  "key41": "3GfP4oGdqKi9fr5sqsmuscpNX6tY4Lhsbp4d5tcg8mxmMJoPvRReC99iHACpPRXu9kfaUMBuoLgsyhW5rVL2FpsX",
  "key42": "3x2NrY4kpi5MEVPFAc8q2pbjnNQkRu7j45UXGe1aszn25sGM6SSus9UcVZ1ZvMNjcV6T6KZ66tynjyXeFUx2FHoH",
  "key43": "4YU7dopRhRncUrEMBDeVVk2mdTvtoMWzphvM8cs5J1S55Tti1ZzEnGshykFFYYKmdrmsHhbiE41MYdau9K1SusNn",
  "key44": "4wjEBfw89TiZNMMU96GGZf7sJnvxcFVJFrWZhQGfPSihsuBFCdLQP66uNWoNe8HZmvaUPub6jTEsL6dVPBDm9zwy"
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
