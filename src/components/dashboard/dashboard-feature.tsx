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
    "5tygqTHJRNi4VRaLs14V2qkVpnWpuBUDygeWmes1hSM8ysXzFmRLQLoZjQjua7M8WMqGy2S2cLKB1HcgVpagddNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22PuUAfmv1Bh4vYtr4mNxjeYjwLbTYUTsoQMfZk3tTcgfhv7EVNGmfgbtVCkLYfWQqeTgh4DP1pQM9TrTzMhG1uW",
  "key1": "2ZwYuBoAvoZVDYJ5WRbyRrrW2vwrpjbdFES8HeUWyucDz36Yp5pZ3jhXwTxhWmsk5SErFfxWz7itzorYjAZRAeVp",
  "key2": "2yZdHgSeeN8abXis6fk9E7Kk52qB7H2awXiiBqCNVb7BXy732eRPdW5sj8fvVjWveGQ6p2XqA7jF1YJYui2y2Qba",
  "key3": "iAkUmzy9KQWVo99z7hnf2PBUCfWmSWkhDN35GgKhhvnGGgVTo7zYnuCJDcB3GrZCMBU3ZM9MVGfMZp6RrQnPywd",
  "key4": "2HXf9NQbYNtsC7x4fBmp8DvuqfNSLzD3qNvBm7JV818AQRjUyTdCH6PLD4L5vMWG2SaLLpErN6ARz8d1mVozQgWs",
  "key5": "3jCdcjewrzDSR1kqSEkFeZK4vTqWMVvb2BBtpsikoUpAHrPSyMU7RAhrgRDyfhp6xpAuP4X3XFQQDa8DgspSBGHF",
  "key6": "52dcN3zMmf5z1wtq8UW643ZmTAtsmFspwpuifqyzpuNwXWfkb8ggfeoHb4PFD2G4SfuNxAUbqg8wGH3sipCGbhNv",
  "key7": "5JfivRHducSwVdP95MiaEosr1271yHCDuc7satoYUiqRT6Ppf3nPWMB5mHTYWcfAF9mz9TDPAKUxtVhYGNS73DdC",
  "key8": "5QJTVHWhwz9pYEb1XaefHksKupFxf1G6F1RiAMPDHNL9yZJtSKb5UC83ix2v7Ec7yucjAm8JGUHQM7i6ffcVENQv",
  "key9": "54MJMnSEQoDpKwCmXAdBavCtyrEGR3FNbwrvBkTc3q64fHC9jEtQQMGTDktC91n4NwTgKv9v4mzx1MpmmJY4YKBx",
  "key10": "rdj1hgDMZQXww13Zg4XePzV4ZXznKW9mBiytUFYhWuqcNw7nAaRBiZLZWJb8jBgJjkXSWHZPoC4WM5RNgx6ZhZ9",
  "key11": "3PpAyW5wYNN5noePDQZvQuoAUR66jL6W67hJeBCgXkGP1jUSEhLjV9g8M4ConQyzXYfQVofT7Jm4LejgyLLFqnWf",
  "key12": "2kCgDXXgbQJp9dtsufwBuYL5DaYBfHR1YuC2thhvsFG7GmkUeiFmJ1BS9V9iYkZx1KdVug6JbCuF5x5Y9WLSSxpG",
  "key13": "3C1qcNRvnDNo7XmJ2kZaEJQMnZDoHq46tpqGTXFib3hCQs6T2p68iF7peHdxnKKkveCXvqwhHr3VxseVaPyy9tjo",
  "key14": "5tt9vah261yWPKyqX4Pu3U2chbpdbEhezou5DYUpinRi2SJP6bcX9k165HQEmqUHWbxwGBGGprUk1gLkGzS6KoFP",
  "key15": "3wm3tyt5N4wVjksezyZwXsBC8ZJncY9Yp2t1TgKMpTYrwPvjGwBLXuQ2Xs8q3LD2UEwHsTsnY3JK1DxAKKZfndfQ",
  "key16": "3shsKPdheYubyeTQ3fgSshFfvjCUB9RHPsRjGKACCJJvRXxE7s9UAVfdUkuAWBMQccZ2oTV6XQMnxi9GuK6JC8gR",
  "key17": "yBpmj1sMWEVfmwTbcqUsFK1FxdnN9EcbGUmQMVUjzqfRUHAwjoaBKoqgtRGydRpqCB34RZvbed4eRiiB5wribfJ",
  "key18": "Q1BAwwgzz8N7doiDi8KRj4ZVQYg5mkMzCR5HK6Vvv9EC5pnC5sTbxXBY9xc4aR88SJk4owg27oiotipUhGYbUsr",
  "key19": "YVLcV3ChrnAzpz48qa3p1kv7CkdB3YCs65cGRqa6PwJcCtfonfWqnKhHsMQKAc6TZ23TMPYjDU13ADAhg259oBQ",
  "key20": "5irEDy7Z6THrfGGbye38LUGwtRr3Kiust2RN4czy9cf1dDsBcqokUVa7HEZKSJxF1kPhPFzrJodb8iuhr8YBTrBF",
  "key21": "4YcnBTkFJSZAZ8t32LXaQCvbR1q6xsiVVPtaTT8tAhytqzLESSQHsFDZEJst6m9HYY4D8cndxwWvWhfT9GEwXoiN",
  "key22": "56Hhh4W46Wyd4TsyPFgJDahGjLJXdymyoWE9z4tuCvLJc8tkC4vEfB8zNa8RawAiRrD8qdjzsQVATnc7oEynby6y",
  "key23": "46D7tf8GzPiZUsBT1Xnjk6eAfXs46zF2CXrPmMg1fhqB6htWk3DKakCTXdeqUkaAEziAYTjbpvq6WLf3CZNAQkEq",
  "key24": "5fxbYfuB5o4oZ6otRkJxwqsD6DLxjW12vyTEfUK8j9hszNnET6gUQLKPvi5csdD2E5cZ4KRnkUC3gb8389T6vwGA",
  "key25": "37H1J5z35gco4Rfc2S68KEpnbhi5AydRgKpcq3yhsA6wpHayrYm8V4xQaaZG6ZBsDdETk7BLeGDxQBpBpjAgQp6s",
  "key26": "FDYg9VaDL5UEmZ3UDgARgHb1JxQXLey2kXeDDGFhB7sySQ7LDPM57JNsaTupscGw3d4VwMkTz3ghDUEDRFVbxCd",
  "key27": "2eNEWKDUmpsQPv9HF5mrqvybttgXSGaS79FhYBghG2T8DmyFT5HwWVcEPruQNjDZDB1ShHphfsqibt5Cccw2Df5h",
  "key28": "42qLVDc7L6vvzXwAqSEni7vN5Hy8TGzx1LnJP4pfhcU5XKRcCFazEZaiSaax6AzZSXmrLzRyDZ4VghG4eon6H4Wi",
  "key29": "3xwwHyJ71wbrMBJYHLPsH6DCXgmYkAsz8EyU8Z2TKebmJxFstZTRiRB5gg1aTDt3iDtcZQTGuzmyw7hhsVrqLM4L",
  "key30": "tTywW5Rz2qYorQ5FGF4X2Lrf6pWnKdYUAWo5a98LDwWK3skP88zkfpKNYSXm43yKFKSXMkGWduqqE9ipYoAcJXA",
  "key31": "vkc9AEpqDn8wEy8XzV9yvu8gnntokPXfsu5ERFR4WmDYycCVcfoaXc92x52WmPi8v4sy6nwmqPpMTahWCjQLeUJ",
  "key32": "ihTMwxvb5LMQPVK637qXTDeuULVQge56ht8bvU3dNT2Uwrx5Aa1HJ2xHf3v6R1bErFyK3L8Pw2iBNSzU1Tm8EQn",
  "key33": "22XGiFR4gfj95L765aFxmc3fWPdGvdNg2bZDvcwcMSkTiCmrVHsHEw3EohSAGVHGXv9TrsGCzxB6hdifzB3z9CpV",
  "key34": "23zZBgzQbfPFa5xxHp6Qahj5DcYry5n5yuh6YgjVwyoK8t9BGEy3fWXkxXqtVuJ5yf2x5b7syDoD7HsVjjUBKbYo",
  "key35": "5deyhc1rAJ7Ect5dbmU8VLgMyFjjuu16nsD3ApgrovRGmLuCMPRmBG3KEDLf1nvFTQTa7hLj4jtxku2SkeTLHtoB",
  "key36": "2646cLwNhd46gRavbRDbeumFJMM1Uz2HGMfC9eer5Cv2rtQnyezfZ4juna46FH52W8Qe7HF6bMBjVEWMGbaJF6o6",
  "key37": "4fu6LdGZ2eTJ1zbPeiF43P14LntbwP3nC4AKjkqXn59eUwbeggY8xRf2t3MH1UEoHtumXCQoMj1iCY92ETqy7wRp",
  "key38": "5bsoNBdrPVfL2HHNjJBbmzPxQD3CRoJ16ctXsexXUcucspMLups8Sqvz1NdZAm3N7EqK9Egnz5J68yYcj1xXLJCM",
  "key39": "27Aqf7py6oZM4cprKzfuRzQoBHnJZ3uu8WndmnXHAFzN6ns9KDkKUTvatApAdVZjrcKFsJ5qzizcUMiFduV9FMb9",
  "key40": "3r1Duo3Jt5ygtH9pzEyNLfW31VM8rUQzx7mr58PZ8gqPpbVVU7T9s23Gio32G8zVUyc7WwRNri1r8G1tjCrVFPri",
  "key41": "324M7Z7eKx6Lm4Q7YhtjfyfciF6mQjaDvW8C9KBtRSB8SJtQM27CSDxSvtJRJS1KsAGa9Pu653hY9DMEKpCbFHzy",
  "key42": "2MkPiCib4JkYH2WqQRCeZrdyrALgQy3LxF1ah66YeT5DNwuMQNFbmgp16jHrPhyxhQe4y9msyL1JbWwYCE2Aos71",
  "key43": "38P6KobXrGfZJL9wXs3GKo4zCfQD8oXMirdVx28zzvZPCxHpEqgn5zhNNiLxF1vkeYCZ7MjBQAWwEdtDi1LbanA2",
  "key44": "SM1SmLPZxR1guGrLR5jbcccSHacmuTEGnuUmGsPSubVWj3HxubTvZpGhBDAmMzt3wyYDfXDTuWesCZvE1QCTqEN",
  "key45": "54kezC1bMCkrxrnvbKEjBX6Sfb9j6dSkGpwmQjugnZiGmwucb5nYA3MCjyhuW6U5jf8PoohekX4XkwizYnAsqLkU"
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
