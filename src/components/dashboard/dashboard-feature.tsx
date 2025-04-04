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
    "5Sb6DD7CGC6k9bi2W8SfbPa2gY8uKThCSwToeBkRoyWXGMjtABFKLS68aTrAHyEbGMxS2y5gbjUkQC1o8vJg9BoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZjg2r8LxxvNr9rgi4teya85dzsJpFHQXbw5bAwaxd8nPdQwzMgcZMT2j7tYtmg7db4ANsLarHrccyj13ENpaHv",
  "key1": "2r8aa8HC1ii28ZKkadWtHK7tfDev5pntXgyfngPwNxL5T1cAd5D59bjFAuyAf8vQUdf3x3pksdNN54HaC7Zvrqe3",
  "key2": "JYDWQsmGMLFPrx6y1o9PbQNUx3sfWi4ghr2rVo6HLBaHEiej1sjZFULRc6AKW8yJVhCdGq4eco7WmSFmH56PU3Z",
  "key3": "669r4fCrYJjQr2kXSWHTsvWzws2k6Hvz8KV4YZfXQ2gG4Medd5j5949AY7tnpWbmKdU4LjW8J9qxcNkAeiK137Xm",
  "key4": "4CU4nMAXWPq25ek1hhrPCBDvMxmb3uqKTFoZx8VTbGSC6WRK6Hpk2kvDgQxjURYf5twcszGHnTVDFzWhfLCTkji7",
  "key5": "2TRYJREmpJqH5u52xYENNZo3yiP1SyZjMdz5ppoQhy8JkBrZg1CLaQQQmuCaxQaUb873xijUAhWq14GiCJLYnZ8k",
  "key6": "5APnZX22w8v2tV63nx58VaFXAuCrtB78THuZZaEgZXNjEiwxWevi2pWnE2KTBJyNKt27j89jNbt6tzk3Kx7iitFK",
  "key7": "42Z1sr4rFC73CafMG2K23dJGWXY6sZGbA8k3gqYNz57qR7eHAechowW1UcWFTvqVHvfjjmf1zpzJh7B8hJCUdM4p",
  "key8": "2HcTLQjC4E799x8DAyCB8fZYtjvDVJ6pV9E4rGYg6m3NnBRWWqM5Kq1FHCjKZ24ZcSDpUU6Fq8gSaVxjVqBKi6nC",
  "key9": "4ns4S6YMDoZTaFk4yv7KrDrQQz5AL7xeK8X8S9JcAEjT86oFajz4rmf29G1jS7RGkMXaEt6gP7UHE16aPvUuW7AH",
  "key10": "4vm2WZns2fmKNJdQEmbatvYc2MKjLooR1aBKaY2Zv5NFTK2rYomPDb7rhhdHaZX382WWP7LceKjCdUW4wkUTfahE",
  "key11": "HVhyTmRQmQJgDxEW9dD8h5z4LX8HazWxmhZZx9BR2UHtdbGewzG4yncMe1LL271VQRnfruFwyHHMGTpwwqHLi7q",
  "key12": "2z2pz3YfydJy29JQUZvzuatkneneG72Sn1551Wft1b32wEGCqBapt2WhpSt2ShMU7S4NtAeaTU9McUEh6974zhT4",
  "key13": "2AWqUJ7vpa1X4tZftZoLoFDbrvrDS1eC4ngLEA6pYX2nkrvsQeW63bRJ6UqtEY1qP76ef7w3y2n4qv8w6xYvYio6",
  "key14": "2xZDJCffQwY7aGwVaRroULFbYsqo82rtQMCyp5vZrQwH6Vz7VGX6mGAEWmtL463tJV2PKYyp5dw746qMKhxqM72U",
  "key15": "5ibkAVLbSP26A6DTG9zhiQ5UehiL2YYKAu3QcuNZTzQQzoX6FUrm2ExNNAAnNgrJDqSDX1Q52maYv7dhvW4GMZnh",
  "key16": "2cncEbV5gEcu7aJhWirKNX1ACkJmVyRUCfD9cXGUEebmLWK6EVSaD16zyGsL959trTsZKbsDeYPhUWiUNyR3d6w6",
  "key17": "5g683RxAuPRe2Qq1YCNSfxGfJhVwDn1SyqH4ea7SM4QGjQzCABjXTspJk7acTzNopjGpgVdwPGz6iegtgEEpFahS",
  "key18": "4sQA9XWwzHfNdErz6wwjz9X6VMRqkbh6jK8YZGeKyxcyFQninCkfvoSmCe9nZkz28Z21k1ePQNwMd6aVuEWEUgsB",
  "key19": "5AVhqVcyzrz1jXy2ZQ7R1AHvDuejNpv78HWdSaKusNh6NdqeEq4Neo16yEhWC4M8A4imHvbzvkHtbe1fYtsZHUWg",
  "key20": "2UZp9mNugWsahBorDoFBfGLmBbiYbLZSkfBRpvvEmVCHLxkxuePQ5ncqFYTagd3LKkKhEpiZGE9Wbe3WLCDBfZvz",
  "key21": "vXRt4qGQW8tQsPZ45Uhbx5zMCSabnFeGT3CLGxuAD6X7fRd4dDxLJ7Y4n5CNqBpfVnvMjQy6NmdSguAp5d7Bdrm",
  "key22": "57KBpYGw1VZEdhgWnJUPiE78b7Nfy6BiLj8XDJjJzf3FMHZRVoZtHuaDdMxaxL2fymsfzPB5E9zZsksy5emGzB3W",
  "key23": "3cWpsYKb3668wsgREhXGZxjEySJ7iopudDmdJVoUgtk4pFwhb7SbQReHx2i5i471xHFjEtiGpQXjGvLn49iA1sa4",
  "key24": "2KDp1e722NsCe68GY1kNzMDkdxtDnMCCfE8NMVuph3ezbwZ4L4SJMatCmW9cHcXP8YjKAdRJEdyC4qz1qg1urban",
  "key25": "3vKwrDwCVHBKZASt4QbSZguRxpqAkWsEgB8zphWt7JQGmqybv3bTVZyT55fYrBofUag4Q82PhN2yeCDqFVnndENF",
  "key26": "AFh4UNg2yAVRCXztpLJGZ1wjQNt3LoFM7cq4kK7Ae9m2tV31uzQsGu4E6d1uSGvHNfvEmH7mPY58y5G141N83bn",
  "key27": "2XbkNLokJeGZPVCtDn7MezKKhqZRanEVRCVaG456VUPULXCHF8CoksC8B7CTEK22asFpULkhbLY5UGX55PToRYAZ",
  "key28": "36BNCo8YiaXMwz9eEefsammSgzVExyQgbo6bRsvfeRdaDhTfaXVJMZdN7u2p8FE4R2LzaSbSUeP25BHKbpkheciW",
  "key29": "hRqewRZWcftYsRfJe4dYeahay6s16TD7Z6RfDuPbS9KSJqyJ4RgFRJpyoAC9rhxUpd6KLutw9uDMvLeBEwtwNmf",
  "key30": "2gLw4qoTe3b4vyuSEEjgivVwSJjJuBcz7EHF4H5V3DNZzgRVH9e2q6LNLRLsXJkfg6TbGe2ZbcaTymS35ttreELk",
  "key31": "5yU59v2gfpJf8pJyN3K858Dk6w2yrSwNDPAg9X8b92F1tgBUURtbCWwfwCMCn3ga6dPrqoDfsNEvseW1X7Mb5P7E",
  "key32": "3v9BkJJxFt8gVeEjm7KXpUS6cpyVpqMN43VqEGztS2bvMfCw635Lc67tguwWgCTgHLCVnkaRz691HhExnDVnLQzw",
  "key33": "678DjfZvY9KszaWcKy2tv1qfY5KdpPfAkyKFyZMnLiAvyV1ts6T6qqqFxbLN3tLoNtdYCXiLvbQvcg3CaWZZeMoc",
  "key34": "4bNjPAiUSqmpdg8WeFgNKbaGbDBQGbB4zqbZPs1ArTtQFYQFUM3GjU3vtrVM17RQjQtTUp7juBAnGYLjBmdW8jBY",
  "key35": "X91DBXisscMsUCvNGUwFZcom7R57r6SScUvF94hXMT8K1uWPaZw2Mvxrp7cB1pyMtmoamYPqdwXc23JVPHUQJkx",
  "key36": "4y13MwzX63zoZjvyrK9KZmPRRcgnmKPEsw8M1wd6NyEuum4cJtrggkeGujN8tPTt2XfWDHSowxi7wwPSspCTr8Sh",
  "key37": "5PDWbwJsrwddRppLdMr8NtrQRQWuM1e4ukkDR47ycmQ9XdPj85gXzj6RfsAY1eHLwkiDDjNt8djcTgRCsyCoULD3",
  "key38": "2etJNUFwgrCv2ZGR69bqATYoDAKm8LXr7qE3xrrq7oc2Z9BHzTJ6djW8bX8D3RL1tNzq9R9CBUtKTUHFhm4cRsUu",
  "key39": "uwsRqyXnpaCtQLmxtA2EEXQdLuBKYcvgBsB2nA1KAY2pArDbCcC6RsqZEQNbW9MwbDaFP16W1TXWgFgDiXZ9brr",
  "key40": "3vQnPgC9e4KGdmdCVEPLE9YBsNxkHGGH5oc7MNo8UHLKJGVVHdXuh7sZWqCroN7XdZhWpXQ2LW6rtZ86KNEN3yHT",
  "key41": "57vNQSUXVQR4kPP9zLVMVB9yHeSo4DJLfLQHGuWbkUqxMzsFVdPpzw3JiWzX24BKhG2MV5Q2DqkJrHBpc4fHqs3M",
  "key42": "5jTiFHbcbprEbe2dK73RfC2ct9G2RrwoJ83t8xKTaJHcgaY3oLpinmuomNsPbwAETCxozXV4TXSQUGW13gjwDwEM",
  "key43": "2cLaMqA6voCSQVkfpTKcnP9xjmKHdaN2NZ8b2kRV4DPW4Evu9FDDJEgHwMVQAigKU1YDKrtjzP8EkkdNqEUR7JyP",
  "key44": "22UUREJsZD3MjTdPcvZ8gcgRrhGpaDoQSEU5GmcrSatZ1iYuEvrdtnyLTepECXrNC6Ds9eRXmhDtUJ9ViBaahaYj",
  "key45": "2HkLreHdBQY44JEvu6bce6LzJD72RZ5GFEKJKaJUsZUiM9ttwXomChNwh85cgapMqRBvQzTamniET7tuJbA1QN3d",
  "key46": "2tLD8CriVoxVr72JLX5DPuvTWBKkUhTiu4VPNPrDG3v2WFiZx8SguqL55R2xEU3MPRw8qMGJs4HiYYReXbWxRRca"
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
