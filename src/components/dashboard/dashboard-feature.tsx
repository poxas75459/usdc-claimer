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
    "62Eve6ioD2WAeSvsNDeVqetPXtyCX7xmavxUMJf9M5RYZkB4dz8G8XP3RW3tuUfWcyUrQ2zQvXxZRA2Qn2s61YT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jk3QWAZKTwLJYzxb5Sx3FpJYhJS3ERckTcTofsnDx7i9Hv8hf8xJQhAbc5cgXZi49X4yLZDFMERd7viNbQX69zN",
  "key1": "2LWgLDRcyogkkJGtZEHx5geXk4gZzkcZVkX2kWQ14P2kHn17wgyLwunVR6ci5VNchX8AMaSGweJWpQTUm7VQRTAR",
  "key2": "2rRmRno6GJueo4DsiYNsqV7ih9QUjxocWZ8yE8naSbwVfMk12BJY5dNYWRAGV5Wbha7ukZ5zYkCCXFVRABNSyP28",
  "key3": "5eBwfUXMLWKkot3XbF2zNeQp9DhadEHsAaZJY724SRfFGWZ4An8QvGoqm5SazUcW8QbUbrLhVk8v9GwijHcp8gGv",
  "key4": "2ZmawNKrKVCiudiamJy2L79E1ecNpAMhkBNrXnn7X5QQ9XV5PV5A8gc6UJm66G5ApdCpKAEkGr6zvKH44Lv63Rq8",
  "key5": "3TEKCd6PFsaqxif9NzWUR6Vvs8H6f8X69mCL4reHBiNZq8dGMCXHHsKy8aRiP5zkbt8bNzdTN3qLG9b4mB8yG3oY",
  "key6": "5GE1pBWTrA9K3gzk4W3UP4scNfEoV7T9dQpWmDSKypxWNeyWjhsoqAHA59vvf3Pgadd2yC4QBMTEpzJ525JyeGyW",
  "key7": "34MjYF1iApBEngJ1Ha6xPEwTaxxGiGTkbZ81dUXFn1s6fQvYNEQk89kVwGETmUE8aQ3ufdsNjYJRuR9ttks8BgQG",
  "key8": "2qeQKzNnafwieQvUzfsCrwbv6Cn4BjnqdajgPzkUoesABqxUvQYdjY1vT4qYtt5xugitgwf7EwjX3gVmUbzfdo84",
  "key9": "3eaybCU7NBSZoUong1U8tDV5wxA4h5sa6dHjPoLdi9qzZExnweXrMYaafCFHRTvuT8KbXokaZSvLBHzDHuiWbHYS",
  "key10": "qF5aT6cyuRhEKB3e4txQZ3TzKB6s6fa3Y4cVRFaQ2i5hYSbFXoeax4jfYNQAVRe3XK1sAmzpjrKQMZGekSHAis1",
  "key11": "2YkX2u6j4RwaTAohqEvMccHr52uGw1xzMoZGpxUhwSv5gdUz4mNQfV7U5cCP8uwCPRkd75goGwkafYSDrjGHFZFg",
  "key12": "2sN6F7gHuWVY4sK9Wf4s8rjbZymYMDAdSodf7ozLaWRzeKWyFhcZw6VopWCg19f5ZCnuRscC9MQ5QRamM4rurypZ",
  "key13": "33WiXoZdhcL4KKdAszztUwfZoGxYY9YrZWFyMQHv3M27Whdj8NCCbRm6TZ9WRzCaSFgMiGFVYpQUbkWgqiyAUBNb",
  "key14": "fYXQCMbxmas4qFu41vGxHNfGxkN5vG9gLEP41c459pdY3mBSkD8HGWyivTMGaTtmRZN5Adr7T9UHk1biV2XMhhy",
  "key15": "5q7rx48nc28sv94fKWwMkfpKVTjmrwYdKDTLAdjJY6HL61kofbL8tu4zDpZoJuKVaHQxdiD9wj47HjmuTHrHb7hH",
  "key16": "2vBG95bGJ3xtq7Nv6x9MShqumY3iEEMAAAhtPQk2kiiWcXKSgzBhMouS2sEMS17jH6oFg5m76XeYgt8apXMS7r9a",
  "key17": "3c6FdyNvcaCPZ3Vknx58LMzq1iqTVBooquaExAwVipVN5KtCvDDpf1qqvsaAaCuNuFwfE3aG184su1fLXyWB4mzB",
  "key18": "2zwsfSMyxuWsxvYhSxA4fDn18TnnWPcVzBX676PuPzKUN9EF6Q2ToAXT15FV7c14Hx9CWXEF8zukJWQDdAJB2Lzm",
  "key19": "4kmcud4WJgumDhfxgo4xBYqnxnZenFZwBavbYEgqfhSnz1zmta5Mo1aWagiZSHoj2FWtfw6HUXAqNYHHjPDZPcNM",
  "key20": "2bXYWQTSEGq56BRxkkLaNaqru8vmLgmcxDnJKQjV2DR2kKVE8d9hfcLkKLbZhhY9bmgLhii5xVX7g3jtb6RoUzhY",
  "key21": "4jgveEt594R2Bhk4w68fmZie12JeLrt1WzgURTUkgUCtSX5pt7FDTjYhcTrhCGJuqdajZ9K1qaW8Uxo4bBdrwVNW",
  "key22": "27gccvkUrNsCsVFdxrCydhqUWUHPq9GXy8mA7tPAjfeg6xVhZVv1GkcBrp7cNYSgNZBgSwvmo4tiNYgiKUhe1nce",
  "key23": "5n1QT88UpwusWWGHdGVHSvZ6YzRXJ68TzEU3tPMgiUK38j5MtfZcPo4RGd7FaiADRbWVgZgRrDkpfxE7ELtPJsFS",
  "key24": "4qChFMtpHc2dE4yvqjgWfEYj4eK9DpsqREJgH5gAfQfgb9xnHPawkwMNfJhRdujekacuC1s6j5HuAURD3HPUW4q8",
  "key25": "3oKSz8ixr5DfTHQjAjze2uoxmmxoztzGsw7G9Kmk9xmVz1izSXQL9FRL4DDMg1PcopMDqMiMZEcdsmW3e2WvPqF7",
  "key26": "BdZTjJwAy9SkAdd2LjwUbBmr38B8Ut46Bu2TjFitNWPUMB9udtnPYPWWVDHSek9W1RQ4qD7t1Vn4qr3oFkJupKg",
  "key27": "27mubPRiH5sADp4tJ27L8Cx8NATXD3CbeizfAK3zkTcrEAJSU8jJMB7ckBBvNg42Dt4aKtean1ibL6cBbqzFQpZs",
  "key28": "37WoB4d3NHJeMuGEEzE32iavoAEqhYargkHHTbokzvAxRoFWafa59Zmxsb3aJczyMoyfKuPGgaAGmaJGuhJsM3X8",
  "key29": "vAdZm91UjRQ4a9WB44Ke1hANS7D75BtNJQAmh5UBcxrzD7pswwCXUQwGXXfUdCMJTVcWueimiNSMWUVzruQs8YE",
  "key30": "PxrJFT1GVXzLVsTZhN2U8FwMaTzjVNUvFeHDUdhwYkctmGpfhaBUEUc45NAiPszXQHCJaJiYs1YsPyfkXDCJvyQ",
  "key31": "5N8FpZsz4j8vNuGptfhd13YkZeNgGxnVJUqz6XKpWR6HCT2CZuwryCdGCcdW5ByL1CKvd65c7dqrghaxJd5rKYNr",
  "key32": "2rxJyGvdovaW9VpUGE2BLLTnsj4SKxaGLcuEbyaz6HNv6jMbUbWVYc5QgavmDtRGM3cR6Zgrui8RkfxQDGdySmRj",
  "key33": "4HDCBPHSW3K2VXeKcDf549f538RsLdTQkwx82WYH4GFjeg2y6fCoUfpAvwUrdnTuG27QEJcgKFFEnKMUbSpVTCSx",
  "key34": "SxGn14ddAYUi5Nr884WGxC1eXNXnfz3nEDJpPr6C2gco3zdVuRdCK4oyJWc2e9XpVKADJwFLBPS93Fft6bMEv1R",
  "key35": "vqXdUwkBt5gJUj8s5U7NaxfcYu7ybVSSY64u9EmEXdpWEVZ9LM61kqAs7eYXheQchzaqA7FyXZGUKExjUh9usWB",
  "key36": "8Ls6kZXNGpDxbBv8VSsAT6dp2xfUs5449CmuqiTMvyU65XMEtpeNAnrKqzF6WZYiVBHabBvhwYxBHhCFP4Az2CF",
  "key37": "29PSfSueCDguc2c9U7QcihFBDwjcEYW8WVPCKTm4pELsGVWFekmJNY46puDiMCuqt7VTQBczkgYir6R3JsVz7Qce",
  "key38": "2SvACEHpYEeAEe1TahMQvdWwHMSHpDoXFj58gfZDzVe52fHYEVijcbMdQpASuB4SWNwuV6BnNLmph9Ec8fJPt2Ju",
  "key39": "2XXc8Vf8BZGRh4g6J6nDxVy39Se21Tns73QrNdB1NNt9hPfrZXD6BNbRRP2PwtoP7XVzokHXkNf8TcJcu2rougWq",
  "key40": "49SqcBt4pKqqBTE8vNPFJeGgoUzYn1xUJYFcJEh4NHDfYEDq3v3NTwquqBZS2WDyRTkaHxLfdY2XCMVwkiLjG93e",
  "key41": "2Mzs8Pdi11GNbkFz6aHft5emDRJqgvgJhgtPq8oqFekuQGhsfs8S5Ad3V6xJ4ib7sK2XxgguPobysGeRPrfQTrFA",
  "key42": "52FiR4d8LYpjuWDA1B1tuQExh3AgyhF7wbii1u53D1aVXeLMnH43S2JeEwxSZKbRwmadz6HELuk9TNVRPGfEFAh7",
  "key43": "4xT1AoegGcfDKpet2iVP1LFob24Lvn9MDTyqfFvKXxWXpgWt7uD9Fgd3o9ubYo5YSJB4YnxgaFruSha3cFv1srTR",
  "key44": "4TSHcS2sP7urAdAKHkWZ2VBy2EAzT86XgDcq6ciHdFYsbPunzYSZLF66Jx6Sjxx7SSXXtLfTwEtZNwbRF2BnczrE"
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
