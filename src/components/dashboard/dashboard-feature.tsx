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
    "3xg7JBk7LNwcugAQxERETG4kzJ2Doz63kXoTKatE2DERzXkoiSNqurQswnV3Mzgn95gN86xdKwHx8KREe6nCHSxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQkbJEeAFL8dWZpSJGcT7WWdFyVf83a9mEv26HLqDYMBRJRq2QLGGteXsxwhZ9W7FYADe7QKAaggaVCj5mwz5Jh",
  "key1": "5BoayD9UkJJYi7GxY6f7DdGjpMndq27TbaMiFr6vgbZtp4YeQervCRDTFsTSK22kzCQKeXmH6Kode2fXRZw3knBH",
  "key2": "2cpPefFevjw14pqar1P7Fbv4GTtTFbe4jw4SQdqpn1yYjL8EkgCw5BoMe1SYgH7oVNQDXLKJhpVqNke3nfSsFusu",
  "key3": "4sPaPabGDioqBwecju3TsHXKzKqYJu37TB2q8swhFi85fLfKzH7FMwKeqU6kYJVAwNHKnv6s8cGScboS9Rxyb2Zy",
  "key4": "3yWnE9hLoSdGzZCG43RAfyj6qCRuLgxacWDFMxPYA1EqThgthsQ4A3AsADC2yW3qkhY3VAjP2r1YJYMf44f5W9rg",
  "key5": "5mP1JvtrXEZnotXmwfmS6DcfXN5ude76WrKe6ENoKYZTVniYzV2jf415D1euJ5nSeSNiFjqpwodqrbzp1mJcZTTN",
  "key6": "dZFLjC6c9JCMB1KDJKqrS8zdwcVQVpoDb8DozLqwLT1nyuWQfVeJMVhy8DSzF8EW5ni1odpsLPh9EJmr7nksjM4",
  "key7": "psrpFhdc25WXUFJQb6fKBCTDjaebUfucwP9QxQGwLcEc9gfSCH6enjByLbRWC1PvZgNfQTrNRHSGUNYYCcDTs3p",
  "key8": "4jqqo2Vpun3mmaxWZXC6JdCvNocEN4c3H7L8v3uehkFGtMCPPMPTpDpGXPZfJ9iU61SANpcvkLLA5U1zSRQFLuXK",
  "key9": "338JEr4CfTTcE3yh8vkrY87BM1bkpBTSsvjs1gnChJWgH9Ve4ZuBaDPU5zfpjajrTgNr366Wte56vtJGAiBKWXjo",
  "key10": "4z6jv1R7u72n743qg7V8vpvchdaiaKbiZMTkqtSMg4uptYqVDsTKMqjHevhxrRtGjPptzoaBvtynajGBpQUs5W1x",
  "key11": "2BWSrobeQnzEzq6GF8MsKToRVYFXcDqrKYkhK21XkVyLtr1kv7JswpjcsWiSbQbGpzB6tNF5c97rmYsQfJx96tcA",
  "key12": "5EeeYC49cZq617YLZqKKxKR5SoCTzDLnPj7JpYc7dQ8PT41k3UAanPLumj9vwSNHW5QUr78WXSBmvebxe14tXX3N",
  "key13": "4p6U7Y6bd7JsYMwsHrXGhCV86SY1hFFM4CkNfWhoYpFPWwZxKD43SQdpY62F92JtrKFLBFkWxBi34GifZUXixpUk",
  "key14": "HGMJ6d4ih1KSatgfHhaG1BYtxH4dkJB8BxCYGnmVQMAqybG6b8NYjjinX6Jj7hufTVtkj3Tw61u6jEk584o5CXU",
  "key15": "356hGvx9K24o4okwzAFCEKJ2EmYP2xSWppor221tDM5giRsSam2eGvHxsFxCKmznRXPHxYyA7ALWorD2xuV3NSnu",
  "key16": "2xqxXJMMMobDvt4BWzmLkYMBDmzfimt3hSZRzdeBi4v27r8cJ6uKoRxPtuLAmR5ubmGo3jRC4ZAn8mzprDLn8hQh",
  "key17": "4SBNvFoMSpDRGcpTR3skYUji5KbsXCYFTtFLs7qu8RjjFZpoKH7YYsf87SUf9AoynoVDjHEj8fZjXBw7iSAqtmWX",
  "key18": "2cz7UtskCjjrGmVBYX72EpvxrhDetKKRBv71PYNmkhmgJApRxkkrcamQEG7WZb7mLN8nfjUkd6Zu81RaaDZbXDAG",
  "key19": "26d1ZfDCBJVhEk8orreehhsczDLDc9hPKTiFzmLbh4xAGAwHFVZwfvYpKgyBhK6FrWzb2q16wE8Scq4Lvvi5Mhs1",
  "key20": "5pAeno2A6mYoauGiJfdJRSaWEPNFnB7MBg8GKj4byHSyKhJFZoo9WxEd36rXztgADJFVWCCegorNpK1cEsbYEzCr",
  "key21": "4UuLnRLnWteb2MQX4jdBwY3hYJJfCXL5gWwraJG4c4viC9tC2a4dEUd6SrWtbohkn9ses7vTQDwRLwxeb9VGHoLQ",
  "key22": "2EATpabRWZw5bxedfCQMGESEvDfwRQ3Q7Zm8LrcQJXPwBzvudidbZqHDYSNaJVcpU2Ef4HCXNwcSBC2ugQuH9D6r",
  "key23": "2et5ZRDPXKT3B2xUgWEoUbWwAJTtoFCMSj4N8Ue6RgQRozWiLu36yw6cy7hmy8uzqXbLyFzzG3gr5xoDQ8vxKrrU",
  "key24": "3HfVbJo6akwTyf68YwDWyTSc1k8rbRgcXpshtrSgkZHKa1yiD7DL2YAWrzBV7XEHwLVCYPcGhNTXwHvGwPHjEYax",
  "key25": "5Cth6s4hzbWjZeSLQP5G7hY9iYfq1pfDBTfE8fahY1ZfpJ2pn2tN22UFaSzGWYDwkTxSAc4Mfu1gnEDH5qTMn9Fo",
  "key26": "3ZFMi8AC9soU9ybwfM1n1YBEVvW9pd92gUmoErBmUVwLPDQdzSx9sHbe56BWoj6cQ8jdh8KnBC1x966DMYPqZb9p",
  "key27": "3msonpzU1f8NfqHwzAFFTFRB6qXCiinhbZVgnkug9qsZWcPC7QwCsWyDdVyBKeS1iy6Afi3DCvRoZd1ZyWKhpkNc",
  "key28": "58fayHQ6jDKAARfZAYX2z22LDSy3hfUBgiBNiDVEznS3JQYDreYJqyP2BcjLHFYLeT3N9JBhrRcqUFkNFdYkH2SJ",
  "key29": "k2Cs95D5UEyKvvLgibv2BdAgeeaPx3hJr2CShuEZRyARS5jpTq5PRPgpPB5SNVf6sxkSd9q4qfhpPGod2UVQtaD",
  "key30": "5E1mSS3WQnU1AGHU5xCaD8y7ozoAb4q68d7ccxVc1aPyqonZPQVgmtHikLUNxMCwccCUrVBewdiRHQxUtjR9FUAw",
  "key31": "4LKujcSpxCSXCFy7B5ihrAS8JR8dmxvsgydFfyax1CTzxfuMSmGrXEvcM1TvB1nAnvzkKKxSZM8hHZjELVWDg2Vu",
  "key32": "5REz6CPSyi5DDJaJLZT5QTdDo1SSvLypyKQtmvbVHMVBmqR7DifyY3AufwYgppJmUa5JZBYVQBivp7qNXUfHYDnC",
  "key33": "Kp7ASo2KrW4qq5EBJVK57WYE4Bu169EL4ht6UjhQThRqddjSDjMLPCzju7qEmwzL25z5LfF9rq2S5cUa247pvdP",
  "key34": "L8MTzx2xrFjoJ3esQaXiNKJ2BgsFgeGWcddXrcg5K9RUwq9KhpCGNaDig9LuMiYg38zcvp8efLkmYnF2GM5ioeJ",
  "key35": "xmo3UVtDRqhaLGhV2SDffnbXsT8V7GRRWJ7ezPbLcyhKhccgk8UTabKuw7jtMMGXNc1eVpKvCiDPCrb6NXTpdDn",
  "key36": "46uaxWdTxvnRYG5g8joz6k4wXGmVerXpc99w1VmbxBdJNHizxc9EuSMQ2VN3MSuL15ATqCro19hhA6GHu4V8sfDo",
  "key37": "zLKUbBHkxTLA7uX6d6rPcYZAj7yVptWL9DSLp2oKLa5aHVdJVd4cBJFgb6bd2QAXfa6MEQy2vE8PcUugb5QRBrP",
  "key38": "oQwmHcbD8W2MSPiTyZBCoUDjtN4a9vJVvTehCgVU2Gnp8soMupjMT8rtQ1Lab3vQW4RMxcFL6Py84gCPjcQjvs8",
  "key39": "2NW8RKYX7DUffvbs4oZaxairJLR5vXULzP2sRrADJD6JqJ1AN4W6SqiEfejX6HHG67dtNyrk2u3bvV4twXv2y2gL",
  "key40": "ueej52ohZZL546T3oWxWoDLuHNFwmhBwNEB6pgFXdvYJuWi4fiVsc6jtHkVT7HMctDDNyTkJoegghVp6xqPWvLU",
  "key41": "4Yx7DSHwMPRSge1SoNmXpKtXoEcYDSnLZyc7o2Xm2dVkV1Hc2tYLoWsEs9c34PvxeNTMBq2Van3XDfgopLuHbd8r",
  "key42": "5n7JZ2iEWrDbXkV81c7sGeEnchdiD86S2mb1ipaxXk9Sg91eJDHQitfCP4opT8jJpAn3SXME1AMUxtPwCVJqwTvg",
  "key43": "5PqvHhxVJZdz7zPBEz2x6cg7jGumMZYPbErmJi9eC293qsYf3ftjcuEpY7qRXHdFAXu2L38QiR8DxDnG7NdcNxr",
  "key44": "5fFBHAZ6NmzK6R2PwyQVDZFipNefFJQ5mWhyyRLANA9RC6dgySihMztBjjDiPvLJQhDYbCW7fweuU6wAHjoXkwdm",
  "key45": "5Pu6NXvWUAYX9MKDH62oraHGfq333Ax5dk1tEJyjVZ3JWCrwNZRB4csX5m5kZErM3gTzPzP8eCh6qzt7e1LmtxEo",
  "key46": "3u4DVR5R9iQqj2PpiC1s5NzGrshyFsSg9oxWVxs8zXivCfnTW7U8XCJKroMCyUv8vf37UKHZJeCTWppoaVEsmZ1p",
  "key47": "39kpjqsU3SswCSV1HQmg9tMQnWVHR9aBs3TpXXrbR3XqKG35VqbP83NQePDaT8hKKK5yEiu1VuraQZ4LBnDoy22q",
  "key48": "2NwEXTCDAcKeKbAp8poXddJA3Fs1HcURQZRRUUewTZLjjA4dF3rAdiFPnaoxyjnF885GA44apoH4MqT8uqrNdcAM",
  "key49": "4o1ueDu2SsuXAcwcFYitLZFQisDqVqGyMesfvQiRN5Xy4iNNQPqNXiGufMUfmTJAjhJMMJ2Ce41yixc4nsCXdor"
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
