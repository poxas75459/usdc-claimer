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
    "3fSgUJjnSDwh2732pfRtWwibw8pn3FXm7vtghWPYfxMA5J8FwRZJPHc4maJWxWHGhbW9vg6EQbTXCgVvwkf5R7gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzjv9w3ZWqfa11dog1ZZGGVKWz3vQR7CgQHGqh4f11WACZUV9rKpqs8bg3LNeLnZeMxo2vDAu4ugqo7v1yYQTYz",
  "key1": "547P5MQFV5HPA9wy1EXo8gzenU8rxMrDCQnwXmhcUmTUP9c68NaB5U8CNYFDSDvLoWewjZ8Uqa2skop7argQqSty",
  "key2": "E6WCPvWHpW84i24mVmvFBemm2J5SvAJECzRciREN1Xb1xjs237gGrEhTFqNKLi39mN51x8dzuH29z4Zh41WXe2H",
  "key3": "3S2gWYiiMBrykE3p1uJmSu7Tf5DavVwLhY21LbAmZhCmp6iW2g63sfJZwpDurBsFYx1iNCUSZjiQEWzF4R2snrbi",
  "key4": "395sNHPdhGsCDCa8dd7NSzUSZBEv41PSXSdYijQvq24gBV2bwifNQpFDaRCFLzAiP22iB6FYbXr9sxRiGKdrtoaH",
  "key5": "4Qha6U4KVAYGz46yctLFU1GU2eMmrBY5xxmyyvQpVG7Ymb8i9cSk1sHMXLETEGhc7geRU2yamxZ7VqJJtU9tCwT2",
  "key6": "24V3vRgcvKzy7cg7RfPQd5GNPWt5USi8rGAHcmRNmcms2EL1N3Fxo64QGXmU2JhHJFBTfzsXc4XScLcYCFm355AJ",
  "key7": "2amDqLQQ2347xqxrJ9aWX5HU6xgrwoK4xUAqy37sECJgkQwB5srwueZ8qjNvcYPkZSkXZkZHkiN1vGWmZMVVNgnw",
  "key8": "2vcfybPcLiruNgW11TfMKWeM8s2zZaij5keXMt6fi9yP4XvhjZ5xfZotkFbQdQoK8xJfSQsxZXDnXktznkkWgEmr",
  "key9": "5229py2nScXhs9yVcXdZAsG7LNFMmHmHfHGzP9dJJ8aL2XcHPwY52qKSe22Bgf3dBYvVwoukDr1t9WaGFX4RXMe1",
  "key10": "4CmUqQVkQL4YgU4ZciqUwr5ChaVRFms6uT2eeSGwiBxHrdvj3ZKumnTF9iRfHrxcrSFtoVmrKMQC4f97BNubhPcy",
  "key11": "554CmLPxaQSDtxfNg4ztet9Bfw5hAt3eDkVMzwyw11hfcbLnvZs1PoENPyxbP2YDpqwhx5EX7JSKndmwAmzt5hvd",
  "key12": "2K2UH535hFUkPKhkJ4ejtXevBdjyMvR2awXhKAY92FsoDoKH9GXzfTGsnvbxsof2o78UMBVXMwUkJRoSgALaGubh",
  "key13": "vdyjTEYE8KEwhn7anfN4i7NwsPakpfKs9BDx7KpteCQhrxnq5zEqiiQ1ePo4JpJkBLZkCSnwYT54Ughjzvbtuat",
  "key14": "5jDyaYtGxmonQBRNrgaaD17GwhwbyXmKQoL3DySFirCUVLgx5tN6f5ACd2oP7X51HhFfYQvTEp1QVUguvLghy7xT",
  "key15": "5dvQLD76aBoX5DgcX7Gw5U9h5721YcDN6ocK2EHRmpZyGWmKsBjA6ySe3bJ88wuyhhaAhpCzMAQHw55D4BxECXZJ",
  "key16": "36bxMsRhwpDnRZV9c8SJqg7LxcXgPWTdbncpC5ZgHTBKQBmYh9xfyzymLtJLnoqPdvcDKGQY66fZzZio8FRrtE8T",
  "key17": "3v6taVyVQMaMP44GB2zozqmSi655ziy42urq3mLVCFrHdejnZpL6tY6Z73EyHDbQDQ8JZhqP4LGam2pTsLj4tfVE",
  "key18": "2HbPcQCmujZZKWCDJRFoULtkXiBib8jKZEBfAag6nEor49GX9V8CCcD6qMTALNNAZMytmwjzNmVZ9E5Qgpd4YE7C",
  "key19": "5z7FkiUzkocUaLSnBC2bvNuBieeQUePbSjz6kJQLRvhV26xCPsdiN1oe7etNFL3uDekCV952r9f3kXFASGScKTZK",
  "key20": "2NrGav6gxdh4BAwTXbFt37pStSSJoA4MWTJYqADfQDKM6UU1rNNExPDJFaETRC48ji6ftDr9W86ozVoBdh5CUy3F",
  "key21": "3e6SDC8zYDvn3c9FkSpyH7kva8DnnEB5V6K641qQx8pPfQvkfLoazDfDeG6XSyuohAT4HepJyDgXTraMutRt6AAa",
  "key22": "3taS2DphuzFyPnoTkKh7iDcM9Qtka4rCaK4WLa8AxA6karAUgk9wS1p7vCcQbEmAAMpPgtnAuYvassVpzAUQrzfg",
  "key23": "3McrVAVSpuVqDU9hKTfHEekj5ZYfAjGX3wGt6C7ngpVo5fEVmMFe7tgnt2xkS3ZjK2m7APgBZ45MkbpqPV8fzXCg",
  "key24": "BJBR1p4K87WUGGPjFqc35mkhkq6BEmjq57rQ1zq2CAQKsitbEpFZ6KzqHH8yv28WN8okvtGYmQhZ5id2bZuwEZ6",
  "key25": "QFHNxHcEEyUyriHshENxuvjkHFQy4ZbjPSNkxA7CvGGFp4DSgwLzXTMzuEwPZ6uH8dKdNFkAz7aoHTNrbEjXU5y",
  "key26": "uUwUvoxPjfA3h6ZdzGNXFg47nHKdszTAKbUNtGJ5kC6CHGdcKB2EgAZ4iKxSD1h1sYE4SkpG3ZMDxkw63bubkZ1",
  "key27": "58X8hQvKhPiUUHvXgJrzUJTghZ2pExHfMadHufEkXv4KYbbJm62vZZrLz7xrRFzihdBgBvw8B3iN3cYYWfWM9B3e",
  "key28": "2BTGmWRcfND9DxodfhjDq154KuAcSLVyyjbRz7XMis6aBhBrV3t2BraDjt8T4H98aEaHSYnCkFtDCsGX1skFJdio",
  "key29": "8gb7D9ZtoUGfMu5RH479s2YiHfkYd8VwVQiy7db1Vuy2TddLczqFFsVxYvaEPLiKhbFYPaYj8rsScWhVTfABC1k",
  "key30": "npCYGobqhdb8VLtgTu3Crg6jf3NUtPBG3xN1niUcjcX1uKtKaYkV2HktMUF6L8aSrvBV4Z9yFfE7vDUx8a4rLfG",
  "key31": "129JeVEYMmGMRiUuM6fptk31mhjcU4UYkJhQNJPGvCzxCkyP1e6acrTjLgvk2fzj9LcYhoyNW9HjfsEtrb3xmnYt",
  "key32": "4YzKsmwYKpQhAx8UEZtf9PcpL9ey5Mw8CHMquBsXersR6bwuXWrw44BTeEfmr1aSdX9P9DUqX3dCAdoaPK5CZ16U",
  "key33": "3wYpvj84MDeTQK7to2FQreRLUF5SMQqo8xeFkV6DATTJWmAbYQS1AERkoDy5zU68v6baNo55gXYbzNuY3LUXE4jk",
  "key34": "qcj8ERnjv87yiZtyMsZ6hGY2bVLtabfJomaNBeNLyKxSFDxQhXLHzRML3HS94bETJ5Nusb5s5YwZpmeyUxsvyZi",
  "key35": "Y3jm7o6EdarmVS3u6KahXfuyhh731kxgb9MHWvdPifM1EH1sLVCoY6zo2iCe6hyzY8Ffii1XfQ6GpUxgpwU6RVb",
  "key36": "4PwoEeswbP54WmL5MMjWVuda5RSaLQTbqryk7yY878kSN9K3yytYq5Mi9RfWANCfUxsmKrHCqRehK7MA9iSn9YFD",
  "key37": "qShj4ESPF6wUvkaqnPuL42y9E4nXHB4fAmjPWnyN2apK5bwW4bw4XaFMn17jCedYzo7pNkrBpyk9ZWEXyeRhTgN",
  "key38": "3dqNoYm1A3XFkkhZEogEN9aiRHAd2BaEWRaKVyfydZPEss14Gc7Bz8D72v8rusRa9ovgzCRagXw1BK6neGVTjnR9",
  "key39": "5nt8KWu1Uo2wLBGauZgByrrTEqePWVfhvUBP7LMYDyiithiXNotupzaDPstLJVpmNWYBZsHJvgnekbUUZPhfXku3"
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
