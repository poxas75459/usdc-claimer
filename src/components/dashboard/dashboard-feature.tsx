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
    "4uzk2vJuderbbPhsMLXtYfspkcKL8gdRAVakqKJNi19H5cYirUHd8CZN6ZadLtqgsK5eSxFc8VvPMF43Tm1JN7ML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDFnsPxE9NhTsz5Zh5EFZfSb4ZHtSzrC3RqLcACW132Pdw5XtqZj9djVaUYE8hhQMgYd9jeYSDeGTXYZAmy6BPx",
  "key1": "4T5mU9h1AYb4v39XCHYyzSAXKcjhrjufFHYUJZH9ugQws1sYzPWCyWvpF7GasLN167hV3xfo7cxKBYwm3igUfz7Q",
  "key2": "2JkMJWxBrVUhtbYsipcUTHU8uWTcxF1kRgw4bR1WxXmB6J7d3Jy7xZWtmBEhE3cay3DcLHfAxb2oauvzRgyhkoep",
  "key3": "7mknT6VD6YFMc8GSXNpFaYP9PZDi6DCU4voxEx7WiLCuFg7YUNShVxJPyspFt9SvRiBQkeokXnDm5Ba5cVfwJ4U",
  "key4": "3FA7nDQjLgvxCf6trHBQQF2J8SLtHxu1mLm1CGKH9CVP2o4mLETXaqAAXPJ4hRHbQcALegztif3SuVsbg4NLoXBe",
  "key5": "36PGZNLnhridDJJUxGDqChq7a1MkgwaUai3XxVh5aM9arNNQYYgtgwXo5YBgYWQwLKMhmhhYMgAnigjqA4KWu8eR",
  "key6": "g1mnxW59XhjVeH872piaz4YB8xfUeg3GW2rKn2jds7cSXTZcG7eBbXvtc47oRLLx5kv2MdcCXt5hvzsoi4SSLUV",
  "key7": "2CTWaTXZXDC86vXekC1Qabtpu5wDS8eEHnEm9yJ1f5sxEoh8C1pcTRZGDiPRJtfxewDVe5NaoEvU9aHKfE5FZrkZ",
  "key8": "2J4AQ1FvJ2kXJBni3DuYCUhG5raiyGzBkCJ2b9CoFh5fyCEgZXqUUbaMJxnptBbGnVA1wKq47vkwHpL4CGesP3yr",
  "key9": "5WBTkHyLzMLocyhHJsjeeaoJQpvKDjVj6deyp9z375GjpgPB5trsv78CDe8chrc2HdY5aqUgDszgj5zEzw6B5ErY",
  "key10": "3TQ4KFEVYAoNC2dDykbyxoSZ3gBh7TtjGkxTF3Vws1Dzt5K31WzSRpLetMwA3Ksbx7PkAr2WiSmsKLBzFeCWx5gu",
  "key11": "kw7ZWZamznyEAt5SCQDsGW9UHYNGd7VjquMaaHkSEgeYDBz5BjD4m2ZK1qpyMCAqz41B77QeZPKEDpukeXjNjLB",
  "key12": "2SW5HKDkzaaU85BLTN6LySxx7yJtGbp1Nw23xqr3XFd64oLhKq5LUF4m6kSsbt2uGQF5RvvRoUEww246YRQvikEM",
  "key13": "4A7sCvbVNDpdFTtDWDdnvUCPtGyxMuZdd6uMPq4yhCfSq1zRETaVRx49ZXKKdC8vLZ4XBoQhkbjzmvcWaqHWNvff",
  "key14": "5Qn2tvwhqjuCPjKebqVa6DvqanEoiKWpLw4xghKropQmjB1FCXhoPnUTyWbfkyFevJELNYo4ENSqtK2EuvFnhxxb",
  "key15": "2VfNV4xr5BjgZ4D5fhHDMbS7JHZAz5KpLPoFHce7z3u75HqovFZz91mfETkSfYtNyFg4rUqc6ecERCGWsF25HPzQ",
  "key16": "2JugHbC3tHSEAN9T4y9sECa1BW1i6Hcv5yRh9SsC2sEGts3yuUHuRD1qttbEt1dKf9UX24KpM8CevRJUiN3t5mKs",
  "key17": "5REkQyY7HkkRixiZtg6gQb4eUfrNdaJPgSdEPAqNw72fKfkbz5cuexpQRbLnYk9qupBv6CzD3u7KwvgjLDVtyzvF",
  "key18": "3sJtEM4LZWsdC4WAcuiPDKbX7Qt1HQgG9M1TxZqGXDVQ5TaWxKuj6DRqDAfG2ZGTVpsjRG9xPmQYhvqVyHYm3Vir",
  "key19": "58xTkGiTsVRyQkxxygfFEwP5D6Fw3GL3aL4B1kFatC3BWGY7p2mjceYM3gdiHWWufPnXU7Ro911cj1Rpjs6cHGtc",
  "key20": "5m2gj6QDbfKdJ9HKgCDrn9U66JaHS6fWiM4jKWDJPetVYfv5Ahe3Bqq6motZYgiKrh4LPjpg8DHKpA6ZWdSyj13C",
  "key21": "2hFYELr6AymTnEdYDw9sS7XWyNdPemVM8UkFa5fwrYqYNCnR3B3nHhq7EXy2s9uWbG81WMMoVkrq9Me5KSaGSEos",
  "key22": "2hBNm1JDxwPNkfu9Xsvp7Qo3huAsrKGQPesgzAtAcHXifJRQYN1Y2yD6TuWodub7kjpXw2rELBSZvDPjzcAkujK8",
  "key23": "2PzhU4BKw5fYLpcZg9K9aEcjqryXBtUNdPjFztF27CNiCgSoP4fg2LFiA79E5Tm6ivc2WqFwCwu578UAJXup4vW2",
  "key24": "2QbEVo26UvQhA4Qi2ygCS3BTagMXuyjr54uN6b3wH2kkCgw6Sg5Wf3h6rvtfZznzAohT1UWQ7PKKXcaMZsmN8CJ6",
  "key25": "2GaLnbzD6LxVftVUTfjU7zp49hXAiMqzHYCc6apRH9zeZctd1f9A9WXvsigkaEPeQ93YqZsL76xrrknuTu1aCNwd",
  "key26": "6BaHhHxX2RdVKQqADqoK3fdHWubguCvYWDHT2ccYpc8xB1crcF3Qr61nCExP4fEVEAaCYweMkdyn7v9L3CqUfF8",
  "key27": "48A9WtqkvjBK51wAFD9hjyBVdRw7BzTekk83muHwQ7zrDPnHVCMYPJn8hcdH433ATygCms8mxbi4a6kPi1f8o46N",
  "key28": "3kmzCFYTAt95SGTrdNnQAzEKKUuPfNMTkNv1mqzddHvg6P4AHvQkeKKSx3AcRd8JgBqRCkWG79U8ZD4V3UJRjBVg",
  "key29": "3x2DRuWWNQ1DkwPMUPz5KV4ejbSXJgqNoErs6oBjMhjVFrAFX8ZAq3LL9VfjP3EoZZ98VmVC9dMPHsYf7WPPyeyN",
  "key30": "5PWceYdgpKoHPzdkRsWuWLLMHQALvQTCnf6DHF8y2V713fvMC7XcsxoC42rL88z6tLaA2RwPstbAFVAFNUaHBdcz",
  "key31": "58o4f8QYPisDeLGySttzw6j4QvEGtVdpG4XMw3FuHVc8ZSJhGSyK6P6jYvDz7SaRbsETzY9jspGfk6f8GXtYuyFZ",
  "key32": "3414fdonfmmnV4kWRKbJJXk9ixH9HGWcihdVHVFkaUcJTzvqXA8zUSyozU7S2MPr6SRKagRrJuXSRuVNnTZRcd66",
  "key33": "5KPXhMwbkWScNZwLmA5DT4E4gKwNXxSBTp5LS9EFdTaXHvvSV83eRUzB6GeuU7a1kZTAeT2EoX3Zrn36SnCBuGmE",
  "key34": "4uyWH37M2UEf2jFxqazKmfJaavKkHSPKeSZazE2uUZqPtP52wPjjrSi5crBv1KJViLtnGELkgHaVHrGMqnrwjbYB",
  "key35": "5hZNsgjGPLLbmebicFT7XJxJENugTsv83KC3HzfxKBuXEFuteHTV6eSQxSizuEuH793v2ByHp9w2V8QUu6J1y9Ng",
  "key36": "2tBy8Au2kTQeUtjB8QMmA1ScartG7gk7hHaWbB6Ahm9m5Psr1afE6BZ3DekwDJyFpk9CQKicaHzqC3s1w7h9zds",
  "key37": "29rqaMzSeGPvaEZ81N8dp6spZzZDCzjPJ9Ew2Zw9eVtKcUrtQ3iAWiAm7UYiNtYhhfjRzs48CqTfyUqKqnwCFQJa",
  "key38": "2uPSsyQiesqZ47hHdoeTio3gAVkYuCCu1DFytp86D7jVRBGhMShAybAC2DtvWFEpgFgYatSrvFZUKG7FiraP5LwX",
  "key39": "5scCRuTY4532Tsv9R4jRCkGXtMUwicqnFwL1QvJiv5QKnm3qwqiHpLeQaCbD2WjFhUw7xadNRwLptwQ5tU9WymWf",
  "key40": "2jWQmRH9zz1yqQp1xqLqWAc2UXVfZUoVy1ixHLNRYYwHpDQwEHJoDbqme4eWsnJctyWfpBhcQ6LPBscUzNeQQcz",
  "key41": "3L21dCkVgwX1nieXL8orXG3SBYFjXfKY4NDBKGTKmhHLHMsYYjsUizUTAC2grSV1wHM6CMjuLAjfuVyZdGhoB7ct",
  "key42": "67kQcAQNCoNxqPtAjY9GzBKvb1QB579J5VjQ9Nbs4nCraLQg5stzguq9mTpHBG2aXwtSvaxswwAvjyhZdjw3cz83",
  "key43": "oViDA3e1u3F4ABjBrscT7pW5QnKCb9r8WcFBj5qxPkjQnzWjqpmjAw8GzUMpvd4cSdrXn3mDDq8bmEevHPNY9uR",
  "key44": "4TtSnYjJbe39zuNBmn3wzW5hsGdZZpteyWZg46fsfyoWJRR58L5f8Ru9tF8f4XT4VGPsD9N6hnagNCXXUuPwAeVQ",
  "key45": "493QeWWzy2isT74cnPNqZqzyLKuBLg4hYgezAxnHteammjWZVPUbsBCLb6BTt4k9bp42662Nbydofvb9EEiqsfjk",
  "key46": "qpGiRJ2zR7FeBCEB7FqhXpiEUChVMaCamyqKiZhF914X9PNAQ84AUEspstzTTi1PP4RkRRtJGVoxJTnEVdnsLym",
  "key47": "5nvRTygRD6F6kd576yyy9CJs4LWd3W3XkDCrE8BvBXaJJBo514DUmSuXRQfnsLDo2edipziuazPnGoXkSkSWg4hQ",
  "key48": "5mAudhA8mVbwbeU9FVTpkTE9SmvttDTgHEc4ZVf6VXZpTmURHVyZasNyZEL5XJqaK8RPTefWnz7VBy45bEY9ZV9N"
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
