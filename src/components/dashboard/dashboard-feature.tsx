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
    "5PrqoVKYdS1TZpFEm3oETcZXtxEiRWbh344hPBQgzQC7q8yyy2QtfiQ9SCKnc8fvf6BjXqNURPRyF9byzf73eXXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfT8Jqz6RdnuDkPxMSYE8mGC9ZJSZ6z3mCFEmMLWfGaki7MwJTom6Pm4T2eT3e4BniwQDL6bzPAQFytpGies9AD",
  "key1": "3N8ti4oF2vxZoKMp8pQtZJ5dUuyFUuPuwdeT6Y8sJhcQMxP5FzMdroRh28ykuz66NFMb2dRLZWu8jRJpe5No4xW6",
  "key2": "4YHce8S1F3EN6BZQF99Z9BxDdmXtkEmnHVeM4cfkZQKGReVmaqt542t64Z6dQYsbX3GkDE4MXZQVLQM39vr57Uz2",
  "key3": "3saXPGfYYsje6nZAPJ92juLSwAwvHxT5aU9tSU8ywR176cziL2wkcp943LtetZLgqD32PsL1nctbERLD14ZUFt5G",
  "key4": "fjUkYSXrwJpY8tTggyFgTp5mVof2RYZktWs1ifmewMmzdZ3XQjxhKoFC2deqAzj3tH93eMBewVoqXh4dhzhqCCd",
  "key5": "491bW9XtzyLuQxcFkZV8wRpGfEAC56D2gcVU91ZFMpkL357jk8yHhXEVpf5QJs2rk4HPAd7d2XtDW6eMS9Hp1TUJ",
  "key6": "2BJV3TDesV4qvN7m1NeyELimtD5aGJgXDAHhrFkyzMtdPRfvwiGqWiBRj85Uqtj614y8SumWHoiLegwRLxLPXvAy",
  "key7": "2iCJvg5PkQJy2Wx8cK6qCCNwa73tYoqfHnYekbEBu2TXt3QsHKm7CQwx537o3EkYsFEv4ZzZ4ojw32bVzS9vXELc",
  "key8": "mG5pbrbHuzKXNTAX5kA2rFyEantM78JsFZXEistFSbp72DLXWMdGRW3vTopzR3QEZ3uSt1dgJcbw3djWxgBGfx6",
  "key9": "4mLB3K2jsJGwmzLmWbf3ppLgDkdDW4VrGa6odmr6XnzAqPEs9cXGyJmXJoA2xmYSJWiHg6p1dgAHAkhR3TLXmdM2",
  "key10": "5LxzZigfSw1vfXpa6nfHeffWHZkkrjgdo7rQ9YrbjSyxYRvj8hzRkpRmLjhpp67qE6Dw6ctsGtBnkDRD8P6T5GoQ",
  "key11": "3tbyRGxJFUK9DaAQWF8nmHbiuPaEamyN1jHZp2LR8AeNEqpNZsSTeF5GYUreWPVpHmETcqv5LsnRvshwj7vSPsCh",
  "key12": "jgBLfUEZ7oCVbe9GFoTRvWw37o6tMFrJLazrJW5g4o9epx7h17weqaf4auHGM6wnMNYxMoVmfEGFb8EESg2VPHZ",
  "key13": "29EWvwP9TXxqkhZAofsaotuN5kkHkypNEY9TC7Gc3JNYMgvXcn6rom2HQR13kKen5g5rAvpLRFGTT8pN8umhMDcN",
  "key14": "3UZFtkbv8ZMd7whxP49ejR4c7w1gw3p5Tu6EvbujugiPpPWUMK4ycCMJnjRx28PFHXU9X2rnPxquPMHeUj9XcBmG",
  "key15": "37LncMrnFVKd1pCBAkKpTLh2QbUf84TNoKM6TJqWU3MP8DQLWawBUXUPbdHhZaSQQ1cdd5JUxKoVyvqnsrcyVesB",
  "key16": "5P7fBt1KzmCfpbSsR5PWAA3GPyaEtm2eXkQNpLm1Shiftfkp4UWxXfSDUikfRwuaeJYLExHiFzYfHEBc4VGQGx86",
  "key17": "4rafepCqTKvSKN6JS2Zon9TAJRPYuCE71zuTJb47r8UZysbY9a6j5VN4zt9fsNcpAu2LLgd6Lf19NFQzopziSsrM",
  "key18": "3oLrkKvUUC5ytkxE44mS16XJ75iTq2Br9PT2UrH7xEcepWVPMMEL3z7jcAsi81s8vmaZjSGofUZkMAouSVwdXu8D",
  "key19": "4w1snSMJ4g1iWnFLhfndtZ1ozFYxxxXwkWCSTrBgVmprJSDQYcrYEi2ihBCkWM4tKCgGbdAAuKgzDw9n1LJvu9WP",
  "key20": "33LMM77Yq5pqnM6nHf3ynBFq2TiQ73WjaEVZ5qsStBaDyQiMfdSPWiAbGGpoUbqm7EigbQVAEDoP8fnuE3rmpanc",
  "key21": "3nmVH63mdSf1Hjj2sV28eD2aJXcfzLDYHD7t7DAqA9dFEg5QYbK2St65mZHMYdWcDY58vxSc7jPcVWADQ9Edfiki",
  "key22": "yWpjvYbo8Tqf17KRX9mkwHNoYFE16Ay2FNdzPbic1oTD3F5BZ1fDawSZbcwANvcwE7GMbYQepWXyCS3Tf9GoCUo",
  "key23": "4F7129mTBq7C9s4GwNXtoTmEyrEbbu9GcRbKnRdjvewecFpWv5X8wYos2Th7YKzuiLLGBHRuGtsbuvQaQ4sadqyD",
  "key24": "65my8iEChk9KJRkWxsBJA89pzPoj7TJwv7RMjEBHGkYf4t1fjDx5wYLK3vGwHWy3CAZvYwfeBKMtj2HXCeDhBQXw",
  "key25": "4SvynkSFqK3aKXjfVG961Uo9aGdDDrJoirJDz7LFFTCAT8T9Te5YZeCuGYmUL1j2QooUonTtZeeWaeWGZm6w5Fg3",
  "key26": "4vqigjbJ7ggj7QU5xmv21YifDDPpGcNBsYzJfCNqz2BWXkFAzhgfSbx9NYN16kZmCiZ5egzyoyxrp9MJoqsKqAJM",
  "key27": "2anyirQYyCwqJ99XXxj19vAa2zHzRrwc5mH7UyFgwpKc2T8v6XnPvNeTPzJAkc3GbZyXRd3AQyFryZhy19e5FEgn",
  "key28": "5oJatnpgCTJw8CWtpy9dTkqjgcyo19ZG4M5U3rXb9tw3pbJwpLjKXeMRRqsz6P9Ep9ZBydx4ocA49uYCgr6A98mt",
  "key29": "549Lidum1N94LS7iVT4Mc6ZoiWBZTAE48tH68uNqPv1UerMjwvNVzhrEBvzQVH6xvLUMMJFrx4ztEgYCQZFHMbpk",
  "key30": "2ar8exRRoVyPKhvpJ9PMkkJW2aPzKKZ2LRx3ErGR6W7mQQ8i9aKNM976Extng1Zxr6Hd8vvcXVTjjU7veddHCiKc",
  "key31": "3dpnnRq9M5XAPfQAczVxRYhLXqkZVozJFCV3PdH1Mz5Rme8b6kTedDceTjZY15kcrVWTuwwaz59jPg2gLWaQUTuJ",
  "key32": "2dt8pUzLji11X7UWD7T6pyJ5xjmTG6JqEaEto1P7Y6Em9pKuabbFpACJPJ5xyuDVbM2umJ7FpBqBSn6BJcX6y2NJ",
  "key33": "38S24XpSRrdWjkChBXCZpUCYMUdmciLsezNxtAdVvvs8h5TFiKRw9dTpvSYqUs43aoV4Wcbqo4WKjbxFrUDYjSR4",
  "key34": "prj1Xpnw8qNEz3FbVV7igvU1B1AYEov5aPDUX5uk6n12Hh9mr1EXDt5Zx7hthfAdnANE1kgeoGoSGMwuu77e7kt",
  "key35": "2xfMByG6iaeiFGyabAfrunzYhBKXBjLP57qaNhuwvZXiwrDzjBXEJ8iv7vJQZftGv3u8y1WTt9gbLVDPTtKjJw9X",
  "key36": "KWzMchvxrr4MEoMzFzsjbeNWeaA6wxMGjaw1HorDwQSx9hzrRGTjrdZMRuhQ9TMvofhdikHeyqNeN26rM1HWQfF",
  "key37": "3vD2S8SrWDCRrYWBA9qUEw7Me9R84MsUohY3hNuvfwGD6CjYikGeT49T5dBrpQ62BsgNKrv5gPTbgt9gYvg3FT3C",
  "key38": "z143rQYyMFaWHBgxgfV7KHanstpHSh12PmMJd6EZi7KA6VZtRmG97TezBeZf45QZ9oPip1FNRA6s3fNaCXGay63"
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
