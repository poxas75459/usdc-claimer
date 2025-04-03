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
    "jqdfKZZGPpdWqgJrPpPxEd2r54TjuERiXKZbgnKhxk3wPrZ3BmRRAouR5dB3Wm3LLHhRLVDP7zrsVf724o2TVfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mC2BfJGGKK7HkbC3gChGcFPqAaKNX8kXkrKTZWYB11tVxbvcVJbBaCee8SBTVbr79RpUs1eVnYUpuRWeasiccMP",
  "key1": "3NMx2BCZk6pDZEtk1gUDv2JbsJ8XqyqKtsTVmsQLnWsytighQXxCJ5xPBpQfTKhfGMiEUn7ekeHTaErsWHhVCCtS",
  "key2": "4c7eJSuNi4cqKZBfnnbEnJxByNNE1mXGG6ro4qo7tf9eP8BLCv2z3wi7DXpkECJpeP49f4qc4g14n2rny75CEn66",
  "key3": "52BJrZpjCiABMP1ikiksLe4EDfpTS2z2cFwAhF8PxV44Xnd2cgdrjnw79xh6Pm6PeyYw9Ai9a6BLgWQUwFDhR3u7",
  "key4": "4pGT1DjK3GffTT5LSBc62SfcNP2iK6ZUgu6Rfak5guGiH4ePZwYCJ1pYt9ABJSgD7BSHP97G4q5n73VsRca8v9s2",
  "key5": "655eRg4XBRXB6fCVSXJqexgGjAAg1ABSdYGonLzTTFujg6XPnTnDPbe1KhKuAxibQ7LsHmjEKUG3pF3R3YtZRbQq",
  "key6": "2fNMTY9dcNeHWB3VVYwZ77jvCVqLUFEu4kpEDV1VgPKjEuPCrX9ZVu3QT54N8kGoS1AGkZQ7pFos5obhmRQaNfDg",
  "key7": "2CfztHNDWtY9as65iBBVH8PiNy7vrrpwUPXWGX921STYKZfZ6a9yXGcuXXgeKmrEUEU1R5dkHxqTMXLozXiB8Q67",
  "key8": "4gdzfC681Mjz4nZ43n7fLEqkpHPuYt124FkSi7VdcXAVXj2aBRdUQpu5tjWe5wWiJiENSn6SguX1Af8znL6C6PVs",
  "key9": "2oXDDfUnJtuVay3JpBKBM6rCBVxGGF7Bpt9UGy1K3k7ayjdew6QtRcc9KZsuq8kmcuJer2U1ya5Mb3AQLgzqoxFo",
  "key10": "kRgiybemx9crmCoUvfobvCNqH77z4WVNkvStg8iJUJW7cZbnmBDo97jimu253KpcaFcp1AG24kSr4BMv5D2Ae1q",
  "key11": "3f1H2HyWEZ1WfNPPjUG3s2aBVg83m212Ka3tucFPizxySH6Twi5wVnqC9qGAnWHyTck7ccoET6d9mYvR6gzuyRL2",
  "key12": "3LWsGfUKKwDMVxfCauBEhia7wEx2bNPVZcBxnS6hTxESJUrtJLbyQJJUKdLFDzTUnsfp7kiMMXhPCPxC9a3GG2G5",
  "key13": "3mtRfztMxaeo9PBHDSMAw9A9fMb1y2ZrnymET7C7jFqp2UxizJMtEST5CaWpKxQBWMKnZJ31SGPJeSVNJSfDva5t",
  "key14": "423uTmhuBZz7REC16r22pdS4fKwH56dhPudLL4WpFsW3dnC8NhnWs5ANyGF11w7bAkknuyQV6pm5ctxJxbvTRLnQ",
  "key15": "2uKHVQwgDdiemt1RjcVDZNDQFRQ2TesnKAixUmidb716LikANdBsxkuNQ2Sb3AEkqrp15kLGUWmr2XuxAh2GETGK",
  "key16": "4rLqCb78qJcfnfvB813p4SvZguFUPmBPyys2K7xM7jZAgg23LepYfWywYhWmVoXJbX7qWWMEsdpofNteNQN3X6PS",
  "key17": "2RhrvcqzXYh6bxceogbW2Z51KYn3B9uMXuNMarQbQ9xe4i65cFaytJjVyaVZBTg2aftEHDUwX9cqYiUnnkQfx76T",
  "key18": "4HPKEuWg25Pogh6xG2EfAjjANiCXRTq8ZCmytUNcT2BuTVYqtMu1y6ChcsTWQeoZkP86Gw5TGu4QRBEfY1HD6hTC",
  "key19": "2brrecwTcfBFHp2ZgSuDK353otpp1yfxKV88XRNjx22ZaJAejZoYEn4xLsbGGuDxM7U58SWknNyAvv4XMNjtqhb3",
  "key20": "5gPwbcemyLkTAQuQbTnLQBdF66VTnMX8PRgbkPA1WYhiGr9DFcaoVXuHNxwhCYzMovaE7jes4pUzmcjMcNrTsocW",
  "key21": "WRa3bz97Fdwy7PtRnRck7dAzgUncBkiTqh7D9C5xyLn4QqdVFBi9PTDxP3xvZ3eCY8ad9RAn9yZkLmqf2MJk9gq",
  "key22": "5SmjzipD8f7YNhERAoK22GAfsLJpDwdDCyjhordsYkvFFfs7FvVNFhANbMkMpwfTDpJjT8XvZfYiAq2TAhA4phBs",
  "key23": "CN4bH36Kf6v4s9zXEsjpChCXfHR7edxvwMa3RHwUqNnPLqxEMmvNzfBjhjYky36KWL5H1quaKJZRmUuSoNUqtjk",
  "key24": "3XxeFZJ9j9bMH7uSNpq11SaxaSsPfMmJvjuXr6tzW83cxZ9HWch2SXhN3VsSoZtC7udXEwKTWA8eJvNg15NmFhXj",
  "key25": "4Tw4S6SvwfwomHMteuq3fyHfoza9EFjKdoiJ7EkTph59wDiXtnmV3KTkUYF2UMnabBKrfR8hNMzxuQooCUVtDZ7X",
  "key26": "4q499bsSuN9hewpUA8JxudxPR8ihnSWxer7yUcx7r3M99MwL2T9YvThwRznpNyPXgDtZm8rz1MrJT23tAFmBAJGp",
  "key27": "4KVHzStvwAqZn841spp5bHyQ9szqSKuoK87g5qpNfTySwk9Esjn3fHwmA391KuPhTip1A6szV8wiV4y4ruTVvhFT",
  "key28": "4GW7b6Xf3WVBxcdacWtDUB34edFtiekyegcWKfFutbaxTTgUY5yHdf8CWoKTH9mvB8kPnAe1duFzh1Ge1epLuAnr",
  "key29": "45F75QYBJQTrsHM2apfyLHJgPP2TEWjobazAQ37ELVTwkCRZRRaRV9jNqvtKmSkTgKdupUBpWA25Z94KLcicx6DP"
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
