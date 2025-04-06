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
    "2SwvbZnws4ZXAysY2hoQM67A5B5UJ1fP2zebnvVH5wsaa1RdgWH6kXwt6w8NfftZZg3XAzXx547j6LFhnjvNxJja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WU1dKYZhEQYzvFz2kmNGTBnQtjvheuzx2DpbKqAAc1e9jZGQWZS4UpASmDDoxqXtfHSu5QGnQyPc9Qg7CpuSQfi",
  "key1": "RjEsuyh26hgQr8y3xBPTtSPVSN7a8aiSBZ4GQFd4SDwbSArsvEpfzPY64LeJ8B6JD2XeNenYmhTo9Di7AXskvXM",
  "key2": "2b5bbTkvBVeGQyri8TpsYUZckTuqH51syNeWZNvT7RFT2P1oy3jURc8WkvFFRYNZ8GUVNfhMD52RJ1Ginf7fWwUr",
  "key3": "3TAX836f63sGDVTZM5muWaqxnHKkMdMk9bdJTLnbYrhV9CUtPfgABddAnonTazYPg3U1FmHjr6pSRb5uRrSbwnSq",
  "key4": "9L5k1hz7rKHGqatvF4N4Sfsf3KBx9BHMxm81mBB69eFCVV4qzXuwJABHkJYZeJqfjABnjxjHAQGXNncpNKeSpPn",
  "key5": "4HtFXTbEB3X1rtFpHW9dp54iqvYS5RgmPKLM6Bne6ABdUPV2atgSHCbMJaU97PvUVymnKHiG3agGFADkDEmvaKDS",
  "key6": "5pcwFQBGCkz4EgWdp2DracG78GJdmVyaoSfpTwYy9G4xziGrbAbZBkUJfMBxSDUTtHh3Vny7p37YcqfZiJVdwzL9",
  "key7": "7Lb2tnBB23Ko3SmQxBcs8dRkqznXsMh5KtbWnPH7n6K3cAVnnEwE3jCtbeQMuMiE8ojjfJogs1NbEF5G2w7QTts",
  "key8": "4QMMBu7UHwDGAWzopkWTh8ExX8D44ekCxdWp7vtt6b5DgpGrjH8S8XbrWYF1Y2iBhnoTVNvmEw7qS9nzGMnaxUjB",
  "key9": "2u4NVsaMXnoJ6StYo9d3VwG2F6GjfRCJQZdDLttiCUtzStRFXJ6iMfonckPHp1RVbLXk1iKfKA7ZcbRuCVQU6431",
  "key10": "5XWjnadQyUzMk952jR77GkZJHjfW4MkfENQoziin4XKgbwHDoT91X85UqbXH73h9iJGaYRZL5392J8K54XJwJAH6",
  "key11": "5wmtrDQJUhQVd6irWKAzXaj7Dy6ZF5cxzcHkzK9HzFsUVDreeEmXbqDVhbW8uQ9c85ST1d4MPrkE1XnzEdhdWwHv",
  "key12": "ufqpFaorjjg6e6HvgakN3WQi2uooV6iY8Fe2Y1wBUkjQdTx6rXG2o8bfFAZio3VYdWyh8E1fwfduFihC18WYsHL",
  "key13": "t9D8HA8T5kHjzcXoHhYe1onDrBy3DU6M1crd98Zez9soKaKH9kefHTGugxY4JDj4m1R4HjsygT8ZkwWtHESg3v5",
  "key14": "4j9YCMWPWKavsE7jzpRgBhmELXUZZaJ4cbtdeGJE4veTyjD2ZtTumY6P1mNP4DYjqaLjajuZbXG2NArcvMWWv6g2",
  "key15": "2jBQuf3woFavKmJHbFTWECLGRv79Uh5fG7omxLMZkfdZGbDQ76sS1SQZmaD8uXbgyL9JxcaUTtC6sKqk2a9gCZVN",
  "key16": "2QfzkRoyePiCp8jyQjrxcEWnxy8YZ1yfpaHBZufGRvcwxRzPtsVNukVeAZbYHf9a2sQTcvcTNG5e7KRoo6KFjZWH",
  "key17": "4GARpD5AudNTSoRq6noHKU5mxSa8YMCf3a65cNMrG4t6ZjrxCrj1iNcwxUCfTuHRcAVDYFYmtbkD8grLH72ZENMM",
  "key18": "5owwgHp22mFcjFgciJw3u7V7QEaSQ4JFh8PxZEMBqJ2NWHQP5Md6fFpjhd8z22DKdupuAgBZb8kteLCrpizmbQ1T",
  "key19": "5w7FJBw8xqv25h9i2mkSSTHLmyot3deZDzjRrk41QE5hBdZKfDVCCTTRhY7AGXL4Skc7mtL5DrPr2SiyTW7EWNpP",
  "key20": "3yGJy1BD5Yrha2mGDuGEjm1QfNhRpfHBnCWtS8ifPcDTPT236rvpxWxgLwec9CDsMUdXHMYf2p2Twc8UzrnJq3aD",
  "key21": "2gPZeDLkhLk5nvHabGvMaPpY9JnK8LHHNoRiH5i227qJhYAoUPjxZknBHwajsG39VckLTcBxCv3B7pY4gzMVk8nZ",
  "key22": "YmYaTxiwhKXHmeBs2EEr7FZCmkuH8wacc4pNPFehwMh4PXWHGsiscqibKqcZxhvtbRpzAoQMehm16D579i4AdMb",
  "key23": "2MXN5ARSfdx4amX3DjDxok1QZYqBQ6fsdDCfVJaCReR34UGFsD2LuCMcXGcQ5W437V1xjBWgYe8fTQymdpECuWCC",
  "key24": "2oadpqdEzfj2RLdeA593usG9HxaBTLdWYPahsaoC8by2vww32v67g7vvUrxv1jyrgtywVyxiy2v6fuGreV2Jf3RU",
  "key25": "4qEdyBoJ2PnmyV9nBQpxPaNL3NdV8kNzQNkvH16deisDMXDLqeLb5n9LCzQt8UBZwbGkp23Wx12Uw63xzzb7y3C3",
  "key26": "56bfsb1hnu9NXfeXXvJ51dLneyZuuHZ5LiGEEspmYLYzBByoeMLLzqCVuiq46jQKFDiXdiRrokwuvr5ynRkUwF9o",
  "key27": "YGiYK5fsweqG3vhrFbD1xZJQKWwdYufwJY1zmBydzjR1u5bayXoyfhK2oKX9EWj1YwtSsJ6nDjwyewwf9shGLFH",
  "key28": "ML9iYAVH1bBN6FJXoYwTZEHLwmsTCeTePpSxN2mc9XDAXa1i3LGFGkqZzH5mbuQX1GghkYyRTGHPMV6fYNREs89",
  "key29": "5icttEfJ6D9d333QKH1UkD1yqmayqDk1kxZainY7b9Hg1WGzPJMDATZNR7YAiLRThtmW783Ef7cKTG4EW9bYDfys",
  "key30": "3maWmECrVa5GFXjPN25EC1vRBDGAiFXGULF4q4CJ3tc2E43QJH8qwMQuAnyJGo1dkC5CsxqhXJA6oHkvvdt3V25J",
  "key31": "3cZVJ52t9WbDkryW2ETTDpuxqwRtjdKxD8Ri3v7n1DmfLZgueS72Rik95qv1SaYKGXcpNM5QZXExKVHu7Cdaca1i"
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
