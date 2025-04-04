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
    "3Q47ZcQrDvfbrzDw2Db7LE7ec89exM1duo2iJk1xPpw5FTFdjvEuonWQRUHtiqVSW1D6N3weKKHy2yrQxqBC3g71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNVkKEdQ4ixG6ZWtTmaK31iiCmogAWVWMPbRdfe7VzYPxsAmYPumAV2N6svr6hcCf4oAVKeLe9Mtdh5LQudWQqK",
  "key1": "51uEsZfj3tbjZhCCgmepMo26ksjwvMfkAWWhRa5CZaqyRTCqpcMeHX2kq7PWDUgKRLy3nUEZYQaSMp8oHvDEkX7J",
  "key2": "26oJbPdYVtcd9eMsz13WEzwpFix9sQ8xtVUTbH6kZni78WrLXRfmb5TMcU7x4H8JX9HQWsrTeRP35hiEPcezfxmL",
  "key3": "3CNAxcQXPvjN4aab1AgPacCeSE5eeYRcCQTTviVGFvZq1YpVRR2QUzz9GWvsVcp5ccW9pp81Dh4w7iaHhcBkyvRY",
  "key4": "41i228TYfQFw9SPSKJKLDFyQbH8faB8uhZUHT25HvxQjcFiqQs48oUkcQLkcTmL3c153htgnBRSDkwwRhQbR5QNm",
  "key5": "4UgE3ijxXvvNXd9ac4Hjdx8LU5zWmTtkvVfyLdd91RBeSnXbfmh2jKM8DM5AyDVjjCxQWsVUn9TiDTowjGwLiFSi",
  "key6": "51r9n9Pk8XWZKU6taUfsDyvomA7Vh9f6wF4FYnqWsfxBDmeTWQf3y7gZNsZttqRXP98vnZsuybZigXazpKKwsnFZ",
  "key7": "m4HWQoZWFwyYEN7XmNtFm1erR3qisPFjvdFpixB9HWa1tmwESVms4nEhLAYApLtvshuFRx8JhJAtyqqzFQS5chf",
  "key8": "4dgdbtmdHXmsPtpmZBftEbYutwJ5k5X2996dzGyxR4bw6UqkpmehR3ymy4sKWtGsNyutm9CyqPsSQWT2qRyY382w",
  "key9": "3yj8XLitPzHj7GuwLpGyGUpY2KizESBGbuAVBbe8bXQjmAdojbg3TwiAXcvtxFvPtCrDGk635XJLSvxeKwbkcF7q",
  "key10": "CB5sjFCuwiQyuzxZRTmFfdpuWn4Yhf7ujFDZforxHZFd8cCM27ehs61ScM6xxtNfymEYrp8q8kVApmSMK99i4JC",
  "key11": "2yEX6svBMf5ekyZnWYJa5YV4xweGa7kiPncypzy4K3DSiQMB4HTqgRxBR1aiP8XHNbnCWeW6QG8Tcp82TpeEfJ26",
  "key12": "5JDfGXJ7AxYJv7136tYeVmFiBQTCAsR4nySMxdzqYCyg6aHdmgCVZPHubtjrqTxuPUY6zx8tiR3MCWmPxMsrxqqp",
  "key13": "2UUPWicBtoeA4NXoNtNPLWt8pxgdc8jUo2wT8gzUyWPDtNRn7XmVJ8t62wwWsqMwGPVjASqz43zw33GpzqbRg7is",
  "key14": "1MjWA81NCqq9npswRKQtETCdttqHXCEKxpVBhbFTXcdKgsWMMKFHZGZWQKSNLzzWwUDX7LJEa7UQoy7rRBbTaTj",
  "key15": "4HrfD7vyGsgmyNWqV2e24naFCa6gLXA6uUEiJBkq5uo77xogKEGN5JnAtgLBGi42U8unvuLfGd3eECAoYQ3L9sBC",
  "key16": "26mAQDmKjD79CLJ7C7uuBpWti97iDtv1K6oejDpgBzkghzdads6TgEC8Dw16w4X5iN8GtZkKqQYRq4FondqoMvLf",
  "key17": "5VNWCYcp6Bt896xSt9AyPEfNnQbcGVCnKNDUFxqfARwy4trWpVuZivFiK98f2KakJw2uTpVwMQ5CDCtZVghZubz2",
  "key18": "2bKSvY4nGzLVnbf8UTHVSgCNMW2BJDx3B7dDs37Ms6bomq9FVZpwxy9jjkyDYWyTCLkMUqfKd6xrGi8Zngaeo818",
  "key19": "4yNY4YhzT27CxDNW25RvASH8RXRmfyPpZL3oSaoRJ443KJHGyPgjX1ohfhmgWvEdFsgyw2z5Z8zCrQqGPCcZm5Pn",
  "key20": "2RM8fEsi5fYLrY5YVnig8p5HxpfX9jzGNujfN3mgNuNdycrfYzhSyHopfzwKAy5P9xnCtaeYK2muwP7imQRQF6uk",
  "key21": "32YgU9eN3mVGzohEELTx99bWwxnSYVFi6CJWdEUm4uxb8ebHXiQtzgEnc2kJwUpspGJKAAf2cjQ5mtiRadM3ReGa",
  "key22": "5hPUej1moSZJYf2cX3izcNSeM3u85xFs6eTKshyavUwV6Pwdqyvv118hAXcARML8TEXRD6K4eGrQiVRMjHtqwCs8",
  "key23": "2JRCPWvqEovCoyJPHm23GLVco3F71fubT3RW2Wbhje4LinBcj8vc9dagxfwn1KmS9QS3nLiSdvrpxhcQFDgCJ5AK",
  "key24": "24S35wLnd5VNzHF7LGFoTpaCfRKD2caYU2a3SjPLeN5XLAsz5KEtvStadWhnWKxgHtzjA3jjSdwMnZuVZMDHygwb",
  "key25": "3u9DDVgjNmNUkh7JUusXK52Wv5siSb1vrA1dcnynLY8W4WD2TgjBpstcrqTqMzMrzoQ9qBYJTHmxu4hdQNxfyv1R"
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
