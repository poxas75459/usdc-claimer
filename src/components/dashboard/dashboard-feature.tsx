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
    "2TtCs2N4UrZZNLRdQ3YjkqzAtdauZTAYEWYm6bMwo6wkLA3Nbvoyp9iPrLEzCLe4Zkwrjr7c5FvorEAERyj6Lkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFP374AfRRDEtTpWPW1BPKzBY8Y3vN7dw7KxqBgpUkxkoRrp6yd5tYKmwPnYuvM25MYTmBgPQbt4t9SnSBYicDQ",
  "key1": "4cUZBfdCf3fzAmxojDK1qNnYq3HXFUJVEF5hoHKzw5TNuNpi9kMKXQcd2ei92VTxVW76araRpvMqUuGCQ5KYcQ67",
  "key2": "3w8YoPCCMtMsbZZG3Vycg2w7MyV9vbap6WfmzJfyeudmW32BLYGdJ8hUEssjzgbLHbxdBa26pEX9RNrnnTGmAJ7h",
  "key3": "5hAMqGRnyRnQWW98o9pSdXry1e7AFT3mkUzQp9rnNqUGXHPgfHhET66odyg3b3EbNP21D1NNXzPUEKPZGoLdmHdj",
  "key4": "mJmjyMpNhYxmd8TviGgbHvAyAAkAT6mEKFqVCNmngBPkikM6myWUw9iFqAs5zCyz5p695LvdkarzLHYQoxbr1do",
  "key5": "2gBPAg7k8kao4gtVPYPbi53V5zdfss1ZDSzoEC1zkoRx95D3sURCwTFgjGozefVtFWho9VwVsXB9YmcPPBLz2os8",
  "key6": "4TixDSW9kqSduyxg1MGmjJtmSn7AcDLJxtcNhvoYasFdaBa9QDtSH7BftNj4at39S5P9tY1aGRERGQ16QhMVbEzh",
  "key7": "22VGXTD2gm5E5X4uz63inECa79TikQy12o7yjesfqBrHrRiFqBKVW2hRHAKHK9nnHeTK2D8r6UP8EvjPhke6ATzS",
  "key8": "3PEch9Tk6KS2LHxsdTgQZoALwAdSqmkeXkBXYh4XTSpuLRT66BiinSJiqezHo99h5P4njNsNrvtquQKLbH4U8rjx",
  "key9": "4bRZBQyNbsg7ytjChLgZHfiCGxXnZtb2me7L739g2ZkcuuvvsJwdiJgu2hziB66pN5sRHrao7EdzZGPYgkXszRQB",
  "key10": "5vvS1R4vTza7WwhtbhnAgJbMKqwq33z3fAV3vx76gtD43tuDwba9kBdSi6hDTvw1dBm5nN48ir24iZb8v8XT5VNc",
  "key11": "3bHKXDSnY76BGhgm94u5YjnFSu5NEHUxURTo5yhYr74YXJEC6UsHJVj8YFnuMw3nivUfHXHuQGpaxcDcKkygqcDj",
  "key12": "u31Qn2k2agST2nDnPCT16ZJTjsaum4VnQAJSwTVQQZY2HjjmjvkpBjGG5y5eFa3Sf26mvuE3XANxqEBjfRjfDWB",
  "key13": "2VnA7mtQRsTkUqpyFR5jfhvai9dDF6Ebg378MLyVqpzEJYZNECw79YozCtGhfaKexfJ9SV41GsV2Sdg53EDL7gEF",
  "key14": "2CRPDPrYEqcBxfPGQhDdmhY8665U8jnjA8GzojVtzzXYGNvZoswoYxs36VMu9VQSSV7SLVTseCvB7nUvXZ45TyFY",
  "key15": "ugs8LhxRkkyrvPNc5NfzpL6mY4iYhcuCBuvQh8XRaBANZ16vDiLkMjYoa6WtMHMmAbVigaQcf4HWdCUbExJ4Rsu",
  "key16": "4GBowECweQNyoGnzzoD4F4BpRZTCkgmGVkHEXSryPSH2Y4URaZ2HLkLr2ig8N5EBYpgr6UnRtSkKe4ErA57Zbztc",
  "key17": "DNVe3ieGgpQw4jyoFUZ4bSKy8n6dBL8zReHJcYjVTwMzBQRDuYj3rye8SorxYkwErhExCqxwx1XPuby64v5oPLR",
  "key18": "2iN45ppk62MC5kWbCJPjHXSxUiku5HcYHRQLFv31GqVTc9gW43mLR6f471Ui42bmTu12cE6Hj9Ah493LNhfn6oWZ",
  "key19": "3N5EHPNusp7BV3w9zaDFwxFrEDCfb21Ev2jufQKfAx9iZjp3X6dQ9KaeL3h2UU5icaR2ZXj9dufFjL6H1sc8s3Ri",
  "key20": "53iBHnFn9BYzxv5g7wMYST6zeHjds3Am8dS4wFC5rYvaqrPyJnxoJNrPEgixxbiQBHhPQCuCUGg2zvdXm5phgWud",
  "key21": "CfgoEqcf8GHcoeoUTqguyr7BUChN4nKc3zUhGjjijWa8MUdtNmaKYu3vQJqbxZNQDEuQZzo5E9UbCYqm9sUVUZh",
  "key22": "5QVGAUuTgRHGeoD1gjF4hJbz5DLbQaiZuG8KQtb3Qauy7nkzwaF9pfFVo85eidvLxc91NV3qE8A1hnJoZ5U4xJm8",
  "key23": "2upFBxXvHT4r7GkrngiTX6rFVS59R2srG8cArpwzyDuyPuZXqcrFVuFKF8YDnPb5ULcphkJcmi2yf8CaK1Jvi51Q",
  "key24": "w738bmxT7uddaE3eecf74X4MsVX3mjYdfreiJXSdwW1P3vSdNqwQzc3JbwdPMLi7ZtADVHbNQFu1niar6CmZA5o",
  "key25": "67SvMDR2VPWETpuorTaiiuT25rvo17bQLMFFS4BVXD2nVfSkGtucdwqaZzfWJR1gNncsEmfW9rnRQNrPHFUisHEH",
  "key26": "4Mrh4aywrNXyPxenidhBxdEUyYaHmQysPP8pycQmCmTkYAvsgp8T6MkEFLjiYNGCDWFnLgixfx5rShHdUu8Ao4uH",
  "key27": "4aAofZSTPyXbMf2VWKYD8gmWn4KUZCdDfiXyh974bv72cXTmVzb56X5cQi7CUCnAH19Jvxb2esULZ1qeYYQqucmW",
  "key28": "4ZcDBhd4zhggoMh8aBGXghG6TjuzPDHoHEEinWB8WKHKB23JaBrSWoYSWQfG2uGwboRCLPqYgZqQb2iVoKPutB8j",
  "key29": "3CXekkvKeEv2wDJokpk2JYCZBdeLxuSUaopVPCUDrh1shaEkihY2ry7PETEXgsu5BpCYrysomkdwtQF3V8vBZVf9",
  "key30": "3ghW7yRCC6d8foR17fDS9ffom55HVAKRe8QmSPw5X19JdkUxuhWgB9c7xKe5MAkamkaiD7tKbNCWf1e6acCXjWAX",
  "key31": "4Q8ZvxVYZpjbzKV3E9TAcTxMioQeFk25d6eQbAVuMHDZtKmsWx9dCMtPCxFPSEaxQHnju7exbaRQMKgMhiqQx3T",
  "key32": "3SVjTCHKthUAf1cw4dXvWBN5hsReUZuhfdbWAQKNrvYQGTj9B6WuYj8JXtHwu898FHNswPvENsHscNXCRdwWERi3",
  "key33": "SiaH9aDbnDSuV4ELqLXhxYajMWhqayJjW26sCpvmwySmvkXVmShuV4FdcSLogKnJfneUnSgQXbGrRnaUkyEz4me",
  "key34": "3gssV2n19kMGUTxp5TgMxPoMQtjj5punfMCJS8aL4nhoB3wM7T6DhNPMWuqoh1YA1ihjY8hUQRxAohzLv7QeYnuz",
  "key35": "2oeW7cB1b4c5zUX7RN21d8aGUkFuTTC6eaYGNGPixtJqaHLvabys5BTyVHPSCGcL15e8Q2HFbZ7DxrYHaMFC1zXC",
  "key36": "5Ad759F9JNxbxAmeA19TFb2x2UibYw72SUpAUKwoU6XZZGbt51gvJ9Ldb8RAAtZ3WmUtWmyUiQF7W8TT3ncopuYi",
  "key37": "4vD49XJrFiwoAdrSSWkZFpJZviwcg8GyUzLSgSrbxt9w2r5ncBvJLryYLmfMvpAmw2BXM1D6uHva8gmMKaPY77ZY",
  "key38": "7HAnERLMTGK5UFQcugvvEW9DzemkUs4ym1ArpTJ7vdRpirQGuciMXGWvqcXPMMGbaSNCFTDcB3Pmgi8r8a1qKyq"
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
