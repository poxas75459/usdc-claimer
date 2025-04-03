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
    "4ikcxuHPKDyjyPeBnm5RVDZiipPvEyrFj8Jm9gt4eKLVvKj1vykyDRsMV6oZwH2c2trYnRDpiQxgTpTuxiic9Rvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHr5jvzmhvDU6tEomEapS9dhjCD9Efkgpb41dB6WqjwTNRQgFAgpvie9TH1CoL8Jff4kjYdyR7cBKKeb9F26J8",
  "key1": "4ipMgDk9GiWHhvFFUrANkFKaJp251vWd9c4HmrZFzTgzGMFhCmjNojWqPcuZdjSsdE8DYcQVymqAHKYd7jzqiW7J",
  "key2": "53WTy76ogTcwPVqYTDg4VwJ5ZsUD5e68WGzscH9uBASBNm8cMdwvMLRTuBGZHdHHuHaeKk9HxmMZoFET7f4fpgRX",
  "key3": "3RXBvSLSTeV5EL8FUUwXHVP9hCyQYeGoSqtLfTP9yeDJ8BXyKMYLzZPrbBm3UmfMRye2cmWkSnX3xCU1ZAXJcMVM",
  "key4": "pm93nf3CrwFtdfx3dt8mLLCd3suXJ92NYfJH5xszUFu5J8JwrXnHz9fkM3VXtFty24WhpJ6WvtDuuxW9GfoqTfQ",
  "key5": "2NwTZpoaEGVJpxYvaEgM7o2cU3C3DobeLjNajcyoGDCmZEorkb16vsKCo7z88rbpxgU9Thn7zpam1Sk7PBi4TU8t",
  "key6": "A6RRiDTxKfY9Vy26JLEgLH6Uurp8V4RfSH9QM5QSZgJG6ZSs2xzjc8d5zhqpdjSxTLPszAb9uF5F8eSVEeeax9S",
  "key7": "4mUL1irwyPQh7c1aM44hAajiZxPAMzeoe9hFMnBySCQ8XT2ipveRMoTJ1qnnNq8rwmJd4s5zHRr8VCcyKGNnxm2r",
  "key8": "4CmGyyaN5YvSMt8D3Qh3MptgVW5F5GiTL5pU8o1e8tbkDQwG91dTrdBfeDed7BUovd5LgtiHYBj4NKZQM4WRk3FZ",
  "key9": "jLaB7gd5sfixhKLvLL7dBzqGZZ8KWW12ToHMH7U4yNWwqhaxiXs2RFiaYHMuYC3jAjyZWtghrUPb57twDPMuCBH",
  "key10": "MC8geHEY2bRApZPtg6vBprUroQBUm8ae7tGER96rdPZE1Fik3n941oLUj2JSNLEb8tWtAtkmzC3U4gJzPJUeFpb",
  "key11": "nJohMUTdkGri8zKrHgjsoptiQ8aSvPC9ito2NAusQou9QxFKo1N8QXYaMcXgD3MyfPNVwicLYJeWyTe8L3DMyc7",
  "key12": "4Q9BH6aNigBf3xKhNqDwxegZ1xwFM7SsfTpw2Lf4N3b3xw2wCvzzn3Hu332SU58tFLJiMZVrCUVibn7LwPp22P6y",
  "key13": "3GKCxXGFoLuLab3f99ASfU4GKJ3fMKqioC6tYyXvQTwJAQ3BbGcN3Gzsm3uGn2G9nec8pxDpzUnDu4UW5o54nGQ1",
  "key14": "og8Y4ZduypjeJwRbE8QuEmBxscDWgHa6huAiG3DWm13bx5gwF4uz5o7FLpz85yDCRyqHvurqnSeEY93P3onww5M",
  "key15": "biP3SRah45dvBLVy4H4bBbkr7MLgJDvqfR275mKNhycYkCLtZb5iAQ9ownmDdsAHCMgawaos7Z31wPfLMQe7Hpr",
  "key16": "3yN3KxmY147CC7Ths1TXx4dhgM6Fbw8raBmVk21XbHJZ2ow1d9pohbW38GvABkji1Y2jVUZJxdoYHpTFwq7pdJYC",
  "key17": "4DPcpzwNpeqwsYCgjdhYm19R2AJQomvYuqzChMqZ3mARUnVvkCGom3x4ozTQsEDTFdmKpKi21pRUgYyBpfzecsWZ",
  "key18": "4znN73EsM2ToRkkNJhsbeE5213vWbuZ6RfmggYDhx9sCcL7TYHsJA2eZVpTfhW4omxs4F9tGrGx4zkPaJkrJebs2",
  "key19": "35kBJRDsGpt7x3eWQvJFuAuET5nHuTeFDSfVzZXHiF5aPQKJh3jtvnRd7Mz6CMj8QNF9Z1qAeyjzvpbYWDTCRGCw",
  "key20": "9KSQwa25qeYEixoFdC5WY3HPRFLnSDA9pGTVHEs4XjuhnFCiNx1tr3PTyPTsdv3C1R7w1sjMY71DRrRjGP6rspH",
  "key21": "4Dn8c5ZdFnvz3pr2Js6EPbxsCU1sZEsfo9fagDDSjnbtQLK9SWy2qcyu5nn3YWemMYafTzrMpjc1EwhuWhFbgfJR",
  "key22": "2GwcRtU34bEkYFx1ykD5PYnhVaxLm5k7pQc2TZykc1S9koY5uLrZpm9AdkXUXtFwcVsqG8ptZTByMXTzCRKev29b",
  "key23": "2EZJmsaHqGWJp4CbARkpCyiyUDnQgqshGfiGQoBRVZ7vCoJwh5ykRn8aG2JATGcw8E1PUg658xyGQ3ZcUEqm9mdw",
  "key24": "2N1vEFh9QkY4zGvvpNxbi4REvesfgKs7J24cdc2oBAe3SyAEFgYhkKxNZCQbeXsqBWxZAiAYE1PkNynRpZw2WuRj",
  "key25": "5YZ86qKPU8LmYEUJVH5SzjDYepeKWjyr1Jv7M5EiqCy1N4oiVzcZ8P9MBerT2EPzupjd8BStei77ERMe1kQDyVuS",
  "key26": "3fWQZxpJ3s4sBJckrWm8Vp5pHwxKLR3YcTxxpDAVPhq5ptX4nqJERcJFqusDAoonpQWMoC45TwipJ4PzXqcr5hyW",
  "key27": "4yXKo84UAeXjTmtScmxCEKSRxGjYNMsGzQWvGQmKtVpuNzyVTYnYVgoMoFnLKFeURoxKx5rmg34az6waJFZCnE2F",
  "key28": "4dv7U5ka42zoyhJ13BUnjtcgwqCGcNiSf1aCaobm76CFExfLgtCySkuY11aPp7XAhHECeNQB8KG6st1XnprbYwz2",
  "key29": "oGhkQBCmzxHtyPbnbUi4sqjDDEGDPCAaXu57SgTyoUALAa8qQHoMx84UwMgxQnKdHdxcNJ4jv9E4UqPPxwM4WwD",
  "key30": "3tFEaQb7UhSyNjTnZ2R6ZLr5S8MmXVmF2AxryC2gAPCxbAp4hDxNWUx6n5bRQjJQBG2tK52DfQRhEuxxPc3dnh35",
  "key31": "3NPLqVmkGk1KSjQnZshHBv1BcuRQRvV2kYUAoUNrZHuejQKXGXD7n2mxrB3erxhveubWXRELKhFMH8XDgVggpXGy",
  "key32": "4sFxGA9ofNX7147FbTsyg6oJcVS2D6ykBEdG39M1Z1bhCWVqiL54RCn2k2sKaJeGkYKRc43WUuvdVodB3beyVN7t",
  "key33": "2b1MYAoAh1aMq3pGMW9d5gFXKEuCiEkGAmfSBXfKmbkn7Rrd5FkensRPUJAn9oejN9jw9KwEpXVpYkY6WVgQLzGa",
  "key34": "44eQnjTd1GfyZX3sLRptke4seH5cDpZVogu1WH6bP8h6SYKjNxJuxjgndrhRPVHiPS5Hic2pioExtGyvr1fsjstj",
  "key35": "268nYeyzca5QCP4EjDTkJHFJe85tamCaCd414WkbpgFKENuESgyPBobhsQLmdd3QxNJxYvcLKJBdLFJUFwbnafbH",
  "key36": "97NunewWeGEpjFvHCKDJqspVGyNYd5K33bWK6JA1xShZcjttVDUMbu4L8ziCxEHWMbsHXcSdyFejxyfAgqHYgXp",
  "key37": "htdMhuHy58zbzoXwX9sdZLyazHc72tE2HkXXowZhQQLZ9wvbys4uHCXuBxiRFW9B8RCqSF6eNUATK1ZcEdwvWbd",
  "key38": "T5RnEiw7MJXsAZmt8JhHUtHJWkyA4n3NryzR4rDitsnJwTHPEwUFsVLNQKUwUfeRicpDhfs6RWczpQUv9qUfVS1",
  "key39": "A5jYX83VK8jcV7DWhxoVooNS2azSpGcMb5BTxTVe81ZXyX5ni1UR95qtceLghtEhfX5r9SMK7hRcrpvQuuW6LS1",
  "key40": "2TnbjUbQ7KGWoTz4tp4S3CmHQuqUrbiEUJhkbnhK6dBUgZ734sxCvm4f77Q1XdMQGsg1mqvr3jQHeitFGT9TCV12",
  "key41": "3UwuVxK4EoAZsZn4eUWHD1jFT3Uk19qydaQxEPqjKKP1R263HmFbT69RBpMwE2KnEJ9Pyvc7rMsPPwinMK3UY2Cm",
  "key42": "4AWXVaBXtCvU9bVnSFcKS48DS8Yxh2NgGK3fF64LL9BnemhZv4URo3Z3q4YX13NDwNTCz2UQwW3bHaqcCn8ARt1D",
  "key43": "2v6oGhVqFM3mtSvvW2kbP8Bxh2ocb7cjJPNkHgD89e1dDspuD6sd5MSW3XcQmo3X6wFhrevTC8kMbgHjEybfnaAe",
  "key44": "5xYZ8SqPHS6r7oS7DDwrSD9kChLxDtbpnTc2MYt7eedxDa3EvpfEMCE99smsXK3q1kxmY53aW4V9PteKBvv6m2Jt",
  "key45": "5E8GdaDufTAfo1V52gkjkbyvpCCVnz4XFc7o6oRXh2JHh2dfRw7oF61ZTCUPxnQFjQd1pg2GxvviqBgoas48wtAm",
  "key46": "3pwSc2z5EtsmFF4twMnoVqu2kDwiaTSzYgmemzKuaWzrks6rM8L2sHJVbK54yUpx2xhfCwqTxZTkPqrLrRRVGso1",
  "key47": "4ZgzkkAUuM2gKTrsMA65oXmHzAVYFB2LRDGuL1KxAWUf399xDZ4oHuLYsDhkMyS3QmSRSUFKAxQYFMceaGf12DVC",
  "key48": "4FKSqwFbYjhnWyn79XHkDtiVSuEzGZ1CoFTDwkL1UU84u2CpQ4jquXAVuZxE88BBtvmFXRPx47BtiKiqZ9jKXw7S",
  "key49": "5YqUXaM8TfugWbm9SaxPatwCzgwEyTHHV7A4845iAYhKKQ4juzeB4ZM9Tkc5BDK6s9B6gYZ16AP7nmddGytnjBLN"
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
