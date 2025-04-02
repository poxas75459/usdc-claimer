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
    "MTCmdoXMNNiE2wRW4Ht82G9mX5VYdK93WKuxn8oGt1YHqDeZ2m2k3JP8UkUNmquLYHDDnSRwTTMFebyHRPx5wV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oR6fhUdMTyXNbNTL77VarsmA7zFepg3Nr8ZMAh6XoCjWytDW9iANwpBdUroJrHRHbGrrH5BG1rb2M1w8LmfLBry",
  "key1": "5HMBXFXTRX26MjAmTm1h8YBMMdZSoutLMtzo1CbmzPdhkLa5DCPDQ2i9migxxHU7VeKLnMq7C8XQCD45LYcGzZCZ",
  "key2": "63Wx2wdqxdxpWvEKgDPSenhPKnmM3VVdmyVP1R5iSG7pzLht68uCNQw2JSTNnB9BaGeXfvFy9wfCaoiDxEmnQ62Q",
  "key3": "49FrjZFUPxjNpvkgySvhLWSHUbjAsDSP1GH8J5DVp24PzX2b8LTCodnqatU86DvCYwHKPLhbnEc58LSxkb94Aft9",
  "key4": "3WB6UjASfnZuZ6TmiMWLmHvHCw9rxsBVHnTT4Ur8M18KrxLztjXN11zWLZRPTdwXr9VBmPvWB2SAz2FSP6mHJP32",
  "key5": "3Win6vANojkVLYgrfc3qDcX47axdfDYvff6PwXj9vWjUc8ZdHQTcAynPc7jWRMKRdUb9gxx5THF3CpX1XxZYJq79",
  "key6": "3gLysyh79PXLLYUs5P6CebKTpM5DZaySXJ66kL6DBv4DnMJ91oEwaywZZwjzp6344dtHKsFZcNoXUNzjnUuX5Zcm",
  "key7": "2AvWMNy6bZq52sUTtphYb6fDxEZi5X7r67PAr9nfrLv971JnVqmJX6aCHCARNHSHfi5CUtE7MKnqbyvNpe9acoSp",
  "key8": "24QdgQv5wktCjtEDT1J25GvY1uXo9gocEppH11zejW68P8c7S314HJDYy4DzQuvCZXe8SykRuurmThHrqKtHudMC",
  "key9": "4tTELHrrUnz9T5Q9Pb4kzVaK7xHyyxYs6Ky16bg22Sggg1eqZVaEuRgQJXkzfzMLAovMzHcNk1SRR6J9EDnCvwoJ",
  "key10": "5FiGGiQHquRrUa6D1EGkWLBfHtmqQdShJwwRkLuYeN5UwQTyu5CPHEJAPCK28HeTgKfCRNUUWvJh2zx33ZBTAm31",
  "key11": "2yc2BPmg3kidTDqfLGEDqXh79yd6XmMqu2kC4ig691Bnwj4iweheBeadStGuVJpxWwVQq3qFJcaRLJfj78NkY7oX",
  "key12": "2mBFUxZXwjtMNvZV7Zz3vnBtwbZRUhiVfXiQsurw2TZyooKWBrAuVVEPunSdAhrt1MvuDdCPgkXZa3NEDQqZQ5Ud",
  "key13": "bdQMuxZVr5YW9K17YevAprj7WZAhNcTrrySKg7pebyhSr3Uj3tMQJ2jc15KhspxNXR4LBpjqnPo4b5DJZTs13B3",
  "key14": "DFo3KihPDm2efTWr2ECxa12LrscMMmDX9DBei5gQVn118PMK1oJvpPPjTphAacNi2RYu44yMW8HxMPb5TFymSuy",
  "key15": "5XshL3uVECVVzamFxytu4rroLmDWMF7YdXD35DzFrAqvbUe8dd6CrgPD5yD2ykhF72WPfD1zGek9hcXxHvAcxMa9",
  "key16": "TKSkXND97EQmfKqdiWqdMyC3n6PabTUx6g5fN87wAfM32FK85VF4ST388rGCeq6txYQvbgi9JCs3cihtGG6Ep2Y",
  "key17": "5ieA1YF9mNajjCbzdUNFmHMU2XDTCPFWGp9D7piQ2WNPrEU8PuoEGY2C5qnWKG9na9iyd8E8Dr1bCefEaMfkLsxm",
  "key18": "BTCoSnuCZnLfDfgoCu86Farv8UKQqAretb8Sn4hdjAT8XUpBFnQRKS4f6y4WVatLaoiu1FuQgeYoYvkMLNx3aj5",
  "key19": "3YvQhzAwF12NoMYhVnr6Gx8LL1wcZQE5hV4D3KjL2pxHTwii7XZBcoSFAUDLMpkGR3XrQGdaZ8QHkHrZdK6P1L79",
  "key20": "4LReZjJJbhxDyAJZ1NTUVBRzg7joKKLTe8hoy9QmZ6zA7SBvZQdRy9ZJUk1msiCLErYY9Hny8TTFv1p8CVazLxWb",
  "key21": "sQP8JkqJant7pLZKX2XtRaYUBS9wt8dQHsBvAaoRbNbVrosxSHQEs4kqcRtutSWeU7Zo61wJtbroNTDbxLL4g4Q",
  "key22": "gMT6c9ULBJxhCRwP7vGFwmrvNiJ2CgHseVv7E1cMJJu89PpP9KHjv7B2wSB4TW3ccGDsYdzDSzwWgEWFHCRdtqk",
  "key23": "tM9fZZzSfWhh5j65314iiYse9wPVKG9zbWQXJFDzVc9urEpxCwuKpdEQgE9y9wsQZ4ZCMQ8D3yFB9qyA76kHhGs",
  "key24": "FsDG18XYpgANa6yBDd1qBd146dnHGzxKi4DchnTUQikvmG2Jh8CW9gwJPaxzthKeNPyQtNmF3cRxcYoou5yPRSJ",
  "key25": "3SY2d8qBy8z5MTHbLhUxeM2QB4JHntECKUMQzCZW9R6BcXNediyfEUsnU858XwjUhgsrzt32BrfEFRapHugkzt8Z",
  "key26": "3Bu3rb8RpCgSHtpaMs6cwHwapjrcNjk4Hc9f9sC3XAJnmZtSX9JJxH8mni5QaT2EpVvazze4my8RR3d7ePuzQLFT",
  "key27": "4tJjxjL7WZGrcihPUosukD3xmPiBLeNMAZNDC7kkqALYB1k3CGEWq8ht24HoiKqkEArMEMJgKMeXFm3PZSpf8CiA",
  "key28": "vv9CBxrono3W6rsykJZtgcvUdzAv8pX3dtk7f8jpSrsDGG5CTAkKGy9HtitzPjQHsgpXLrLmvB3eX9LbwjCsJuW",
  "key29": "NoRZhtzs5og4NvEcGcmeUoFDzaUpn87nNWqpLBJYRV3W5Dsg5HNGam9GvGc4mGtqvUK26HfGYP741LrcS3sUtos",
  "key30": "96NP7zoitoeVzq3QYFVkckFETqT6zcSHXCvQ1c1acxr9vZ2L4c5rpwwG9v6t3B72PBeKACM1WGw31JwrVb76G8A",
  "key31": "5M47dQqRNF2KiAdzWsPwCyzevspyv72s2PfUmMm1QWkfP8PYJmdx9zWPe1pYPbLq1vRSKybhd6GREWRfFhLn3KQ8",
  "key32": "VqtnvwmoVZ7ZV2mVkLjitW6RZCwZEJ5AMMGzMqBWVJKjJxnGpTK61XwjvbVxbJoP5iHZUv9qQDDDyu8mvUtT71w",
  "key33": "2c7bKWpY82ovdM27dj6wuWBhxSNZDaZGbDGiNsa2c5ggaXitJ9ULzNmq2A7dqWuZ9mLsTp9gmTrQqF9cSpiHjAZr",
  "key34": "5GyeKxcLrmk4XLvLgjRqgdzCTergK9S4qLbkkHr8RsdnyBFEvcYyVv2brys66DPwTzLmUQqpYv2LcrQmutTWqXwi",
  "key35": "4eX1ds8x9MwnQaf3DmMYpSt4idPw4iqem2UtC2ggTeHThxctrvp2ZWrGZmKCGFRFBiwJAA3xkFNRCMxxjrWPoxb6",
  "key36": "BD58UnaHPYMtqDVLx7ZhuaVVDyJ31htK4rSdduuqX5tBAvgRsvGVMjB4C8k8mHt64Kjwg3Zfzm1U7Kmk7XGetYi",
  "key37": "46tvWq3vwpgwnBhwhffgTEaLQ5NNxjLVmdSPohJvLM3MJTKC8wxUNcwQznQXv5nEU7Ti2R8jUhE2vSK1wGVe2Rct",
  "key38": "4vmR3CGcsPfYQuu9tfgBGEazYxkQJqvSPCSoGYJsop77KcEyQUKg2VWdtdVZbGGQjLWWPqfiBxrt64CEvu7uQyo8",
  "key39": "3j9bDEpLnAFL76uZGWVLevJ5Swbyw8jffjtcmnkb95VTvazxfMvgDCA22mWFb5D9Jt2XeeMUvFdHzwXNdKGjqLHR",
  "key40": "5SgnGwmkY8cKvd3LmjJEeX9PLDEDHsKvPkrqZD7acjM3U171faawWsn96Td3M7doXpiiFJzsEW2kUJ9ufjV3F9ry",
  "key41": "2BLjpiRkf9Z5AKBLaS88pJ7icbQ2SbVnfb81W11eu8AgsHAyKbFsCEqL2faKcxfXaUH4ogf7Af3Vj8tJRwpGnzRJ",
  "key42": "2hxYSAG2wBti3KRxGGLrDhz9JzpTxRGbkiDRSVkF4QHWMYk7RSNtENS9MimaGKoNhEuZshG1VYTSu7KGdGF6YaXG",
  "key43": "2KLwamC2ABZfXUVKVbpDoJanpReVrrP6Cwychu1mhUu5QcnX5ZpzsvaZh16nWpXRmDBfJyxvbWbp8DLbZu5jvMaZ"
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
