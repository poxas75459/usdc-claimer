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
    "2ttPgzfY4JidxHjo3nJHwyMkEr18nva32quVoUsFxrTHpfGst3YgSyAv9fCJDJZQMiSbT1UofWLvthHyjoZPkUhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGQbDAnAPSNJ13ZPTr9yg1Ym1dAeBkwYf4i4TfEcihqF7m7evrEsYbQDfoV8zaDVWtZ1TBvnVQ7Xy27ZAkYPaZ3",
  "key1": "4ESoNFvKfwpYiG3kpPV2Mywt8shMrBVpTU5orEzUWZ3XKoSe9LbHCmHKgLbbpTFP2avUroAKP9Jarb4QhvmFRCF4",
  "key2": "o2C4EzNL7tHJfQB1LY42SBLVJBZUunmby79VjEsxMETrs8x32cy5jXpufY1uFvo2YFjcfHNtPo9vKxWko5NtKa3",
  "key3": "5oFJdbCok7SG42w93zNELShwFDobrgJSeVr2jJoRDkMErJvUEYS8ePpho8kYfEajuaRitqxhcwV4PLurzQRkhVaf",
  "key4": "zhkCbS2K7enCyNr7PF1oddjGsXudwRZsMnq59vMJosD315iRCoCjjc1C3qiJXhC4hqGqUcGjSkGjwRtco1Yceks",
  "key5": "5fNvgmKqGxUu8GTNm83c3cMNTqjFyTpMVf2FhUJZRhFUe5wpgbcoty5q132iPwh7F1LWojWMWQq9yeHw3XcczXm3",
  "key6": "5i48LYS4ndsfFovFRLNK5MzjFfrCs192Buvou1YB6uPoSy1bFffUXZXPvNrXXoxQX1y3ED1XYRL7maUscdbrhsi1",
  "key7": "4fWvG6jcPuDZpehhyriBYBay48xHsWZYxqYyVrYDCmHUkgt7g9P2vX1AYgG4YJQQQDhAHqwDmov9uF8E5A6MUjfY",
  "key8": "6tpM83VyWZwRMsi3awhghigyHaRtodpT5pfEzPAe1AW2W3pfjuH663NLoMqtyiAPUuvWn8TdfchfB2peCzTCZSF",
  "key9": "5G1KHud5qjn4L44VYoaficCDqQinYvi7du3Wspm44uJNPForm6Qxhe1Cb9w9i12KRuEnztCRGntpTPLh9BGcJ9bQ",
  "key10": "5CsB5u1EvQB7J6EmjX6EXgKv38K9BdyDn3qbwq85Lsk5SWDqkdunGtjqM2x66vzTBf6YWnpRnp5e4yXNoikJHwyA",
  "key11": "GUEZydjVTfJukAXv6UAYfNhcmY1jyaFFqwzk3xw1aCgGchHps7UQBfAcLn9oVU2UF6kE2tYmZJf6AdUmnFk45ey",
  "key12": "4HjhSTfRYUUpdRUwi6y1kDsrEGFfkCKuaZrEaLrVsS35j3Q8jGp2bUAYyaHG8Wg7WbBEP9m2qbodxz9yJBuXXdzg",
  "key13": "2QCW6UGkMrcT6qtoyPW2joYFxLEVcg4LDaA6LwBAXV3EVeZ5pjmbQXTN3hyyYSNCHqnv3vQyrEmLhikxG3PPy3Vf",
  "key14": "3AqreQVy666cNqPM9Hd4UKAkcqMCwjQgRLb26K6a5zuXDbjcbrvCvMHqiTySrELjSGp2qLRa8r1tjqp2efoKFBvt",
  "key15": "3uutrVJzVPxxngp5pVAc9TZ6VCve2we3Sag8ee8WyPB6b6pEr59BKoiGj5qenNudFmoosf1v3eS3hqgba1LE1K3y",
  "key16": "2ebuPe1M7nsoU4k5oezgJ5iF6CmCAfUSWL7z9KrDmkrbcsuvAmZCtgyBNm9kVrUrbVFtH33GkoZQpBsMLcmpmLmZ",
  "key17": "2txdSKgmUA9LMD3g4dnTeQRyex5n2DfXQwWhGapnAVszQachZMTHvESPnT2M9QunzvkQiHiqruhU7x9pR9L12CfY",
  "key18": "3Y27dQ6NcyF8dxCT1EtoVMKsd1nSMC9deoFJQpahwmH1HQxUXdPjmW2TJF4VUUtaFn86LkkyYT6Xvbw9PdVzaV7U",
  "key19": "3uLaN7aTQrpevV2NCeBnoG2tUXJkbNkSnh1oWF35775GV96PrKrGEvsKuyvZYbTa3fPsQT8tethtef9TT5DGfhUs",
  "key20": "4mk8upuVZTn4HuvUXvBzM5wCV1jczKq5XwVDctujmnry5U2J6SJdPkae15re514RGouaA7bDFqi2d5i7ZDcnHoz3",
  "key21": "2eQY1xv1kPPT68yRTqUEBG75Qa4cFTVNhSVq7AwaqhwH7rk88VoEYAPGVgLcHkd27za9ifR5BUwzSRqZRsxikNJG",
  "key22": "4ESuxz3yNKtcW9oTvwFAPbEVED8hLJBoYvgGuw6xoV33CPixr7qhRECm5ohGpRitcihPjXXizBUaZAz2SmQjEm89",
  "key23": "2p1B4SBrrKnMWdVYXDQzEqzkkH51c37zfB8Exn8jMDJN4hRVG935gVD3qcSvDVzeoYznC6F32rn6UJYjUjy5ndXF",
  "key24": "2CwR31ZTzqBbxogEQr7BzgxrSjxpjtmTywAAy8n1YQizTrSSvQpRbZ9LNcwer8MRY6fzdX8EYX215cUfWjCuKspW"
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
