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
    "4TH46rqRPEgmhhKLoE6kvDzqwtDnhKm2fK4LCboEjdSv5ZUW3k69T86FDD9qXe36wqhFPX8n4DJ8Xpn4KUWh16mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNpd5ey3wj4iEHLkgdiF4jJSm9ZLdd1h5uChhEABEN8AiVPmZELAoh6FXxyXc4tDWSGxUeA4hxo2wpk1ReTEWGs",
  "key1": "5imAHufNCcoAq5gEAtseWaAvUTc8tfnK76XZYScoMmGYMYxRQJ4rGMUMikBzT3wMG3VSe7witjopDAFu2Ex2rzgE",
  "key2": "4KsNkRWZUPBj1jda5kSXsgz994w9sgraFGYDFm23XuoNjdRzYZ8btouLe56qimDHhFSDXowAqin5j8Rbr7c8guRb",
  "key3": "5sFg2u1vxHDyYeqnGnuE1U4veDTJuT3mNRL7VAKkuF2U3RioT6tQCZLHEojxnh5UWnsnegzXQ5icuJeexDCzouDZ",
  "key4": "3vGLLCpNqaa16DhvYwjnX9pdLuJdp8CR7pdttqUSbqWoMPeNdY5F3i8ynyhe7KGfbBL1bWjWyEaX9LCT42ra7L4t",
  "key5": "33rFgVjwajVbCfkJSXdgKSz53zLvgp6aQVYvNEzzpEtYRkL2woTirhhQU7FBghovfxcgLb6kswzXU2eyameSSaWq",
  "key6": "2tKKEmWBvTjKr3neXxJJP17iuPHQLst8qL4rxPrPZh5WG7RoYdzNW9dKVyUBWogFEH1YX94Hi1SFiCciuQzsKVmB",
  "key7": "2Cpt7vXw1MGBuEooTy58351NCNicxZ9yarroCZzDPGkR5Wx3GcFuJC8j8eS2ZhEE3Juz1NUNPXg2GKDF4MsbPVmM",
  "key8": "3kUv75cZSM7Vv1ryscMud52rarpxrGuizvtnYhawSCgFNxLyQSPnC7XDnHshC8WntG3E3PHvZBgpHtEcAmjZqpwn",
  "key9": "3MRtpSkFou51q1ST82tEeC8BgwB4SjHkvmTxgsSpmrv4cUsCgxBFeZBWMUNzNwzTs5xiyDe4TCDC4fMUuJ3CkMtD",
  "key10": "5xjvtTCZiWUwaY6QcK3egyuh4uWoKWhCcFwkABFfW6uxx313SHDrXoKcu82qcTm5NsANzAcgDqZJumqmb7HqeXnP",
  "key11": "56gn5S69HVXkysYtznRFdg2uMUvy5RhUTpozCReaaBouyZTRaXA5nC4Qr7iYmZ9hsUkGd4oQ5K1MvBU3WRYp7qTi",
  "key12": "3kmZhZP6mRdM9a6xJ3sodCBenbLZHFTrJvee3WUteGe87HLEKMTwcQokKzgrKAHV6TrdKfZk1cu62UZuq82eUbex",
  "key13": "56Xag8VMjiJrDh1DEyZgiFnRwLes5PGWHW7B6kbQuY7oVdJ9QTJsfLRgK6WaXMvQRgizt7CgvVjn8GsxfMBC5efG",
  "key14": "4Xs1FANPGmTsCWMfhq6v35HcQ8yZzaJEm5Vy2TwWsmcRTgaM3MbJVEvdB2agTXdd9n5drLCsHgZ5Y2kVwEXtejAK",
  "key15": "2mAzCyRSELoSSueyMAvBabmQ2fP1Fi7y4NPjySgSwa1G2w3k3anUdN1SuKXHFxDuY6s7XtpqyJSqJ5twUfETKx4s",
  "key16": "3fRyPi6KQXUniVof5NuFKKZB5CrHTHDQAnBGthRPV3SMn5qQ3cUFdfuV1NL5xUP6VezbJC3uBNASqAoWs2NetuzE",
  "key17": "2bLf41Tod1dyFo3c6qksP4cNKGZPZnNZNBWg97Kfq2CiVSUVHkTnRD5kbfRYht7tLGv3QPTV93QDe8ZbL3HTGXvQ",
  "key18": "4zMhTy1ewYkXLeA6XAQhz2RwSK2S6E1iuTrzci5biJz8YWwVeeCbybDH5gjSL4aa1hUQSfH8ZKXLFfxQViwXP31G",
  "key19": "HAPhAvN4qk4XxhBkPEHbjJSvT2h5hWp5piU5ABMcXDo2Wd6RmU57Gib4Wwcf2nWZZJjGrz59QTfwj8ruymkvkqT",
  "key20": "2FfmzupaZ9gUdoMttpTogBrCmVvwtePqY26MfFvzhSqjm17uHUi51mBPJXYNe6Q4xogjnhAum1UYi5fzUPA8TW28",
  "key21": "2mPdehwn5oGV75es827Gi6YGckwsvAAHUtC6Eoat1aXmQJeZ7cpTcsRgduXC4VpNA6AGuxAKQMPhyH4DWxhW9XiX",
  "key22": "2svuVoYTB3wL3cFkGNBwFsSHRyL6JBBjUtNdVc4ytjVqsmE4F3yspNb41KNRDjLK1PSsHNcdUrmuU2159JN2AHgg",
  "key23": "2Ezz7Pbx8KPXaHpvSVphfheCULnEJV8ZoQkDS5LtVcSV9dGbkQWmXKtsVdzZaR5fEWJuQy6FxYarSo5sEZRiTdfy",
  "key24": "HLN6qRvDqZPdoh1QSY47vzwcXYTBZbLFpsqwnT8NB5Ryu2jC1SbPU15P61z513xwWq1BzbAUEB8jQZXLNJDy8Qn",
  "key25": "2cV2B7j913uegQdr5k6A5QEuivpymfVEyuEnmHjkcWXP32kExuFT9Lm1QHBbZ6acZHVzYBfc2ohKcC9RbCSXTNC5",
  "key26": "2EWGLTTBTzWViAzWnbDupWumMX6owsDSe1VDYuNY18yEynshPYiP7YUkodKxXhzvRHPjrakh5ytWmwMnQHYMRFtd",
  "key27": "5rhwChaMvqqDueMUuTkm9BJzmw1X5yXZiHoRbtVxLq7PWeytHPF4e9YFJkYMpqkW9D9GQXdyKWiLnF2PND1VaQqJ",
  "key28": "2imbT5tHxV6Qde8E3ygj4dgcxC8p8ACmGRDXAtUwpYSC3K3w7FXbr3ct5Wk4b2FWFHKLhBeazFmztGWQcpdjs4ac",
  "key29": "2VamNnVYvpD7VfFLCrYTjuzwPS9koAuLqPrsHpcttvFz6RJXfMyr82oV19PJQMontemqEdSLw2Vz3iwvKHb9qkL1",
  "key30": "4W7nWuRL76H1ueyS6aEVGa7BGkz5QEZ5tzvNjZ9boUX4xKFYXn2EzDJq3e6JgDQbwk2tino9kZ4FDYUE9PeTh4TS"
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
