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
    "RTSZ37KWpmmerC72GWaaEjAs2hqPQFGyZvo9Djtb13V1aCqtCpiqWnixBqKFRfFSZMimdD9CK7LRgpVjYJeGnsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAf72J479gB7kMtX76poR9ch2zx9sfFEc1UoPP9hb5FfybPbjTc9JZ1NmDL2zhSMpUQ1dA4Rk6kxkS7ga6q4s98",
  "key1": "2AzgjrrULruLWLr1XYNxLVCypgatzqviwQHx4eFSgiQ6eJMtHzKnDjKirJ6QDp1fEPAsS32KQTFSQd1BPyt74vFR",
  "key2": "KfETPgpABUhT9jYTYHB9eJcF851wx3vGmK7PfvkVLALcgF5BTv3ky8Na1B55VjSwaYkixQR4TdLts4i3KcjH8cs",
  "key3": "5zum3fSvuyqR2GknbA1TUL9KCApKx3fSeWvbPkyKe9W7JTqjgNUixpvEdaK4oKdrz72isarjVFKX9FBCohfySQ6J",
  "key4": "5GCw5hMwunUvuHwvZUHoaNLcmUu36FtqQ6VShC3D8nTAbYhJ5DQWa7VbURUgDPPxaRKyNRCLs8TMfxCbPEQTC9JL",
  "key5": "2i66ySBGPxphNJzYsgoGeJHi8wpsX1DwLHq8rhF1KpwmNrGp5d3HqyYXtfUuuvbojAawnXsEfwq4uRPwGJTENVEj",
  "key6": "4jhjAubSGTNFgBdGnbhicmLSPS3xTkbYWjTbwWbHUgDBDBZfbFZyCNsYRf5qtEciH1GtLmvBPmceQsQBLy5mUvnf",
  "key7": "5Us3cZ2hPWojYxTQhkPbzoqZL5g7RSTiSZb2E5v9C9LjduRqCnAKs2WRVbeuC1UD2QZbUJBMYZe3coP4Bssv4nWj",
  "key8": "2LdTZK11gHR5NHxzEjZCWQkwDkg8MbjydJyWAeKN9Q9czXvAHZJo1USaM3ZnyxbK5wrdr2dciFhfjDyG7LdWcdVU",
  "key9": "QAuHJC7R5iduUmVV9vDf7ystckxajDAaBfE9KytPH1Xkk4NDMjuHNxGNUxEuNf152ZSTZs7VVggAidPmWzCftS3",
  "key10": "5giD1F5q8nF2jyDjKUL9KfLUGUsz1vHcVCd1AtmX2oejBy8RHegQo68qa5ar7xmwvTx74o3vbGYrDJz5Qo1KR7Km",
  "key11": "4uUpYCLNsJG2AUa5ukbD3BpVnWXWapzbCTscLGgNdeD2oPL6HZYnN96jJrSdKyNrgDc4qWycpWvpBRTNTqSnemPh",
  "key12": "5hQ1c4MjatCDkeaGjCgYay4ncJZgk6WDQafJuEyDiTXah4j5NDXaTRjnnN6ETN5VQaXEq2mfbQKDMt7A4ika8D4o",
  "key13": "2cbCVe7fu2NVEGCWifkRapj5JEBq3Bndh7zwtJa2oKxrJRMZ7dTP6b4MCJHCfp3ETt9Ur5h5pRjqfvxaXcc9ryTG",
  "key14": "58N7JosW6u9tM3kRqaxXqnnU8TJVdVY8GpGC69BHdPV4Bxh5swHAXAbUspjFtTw1DK57EjwmvppuJnZUXEkSnXnm",
  "key15": "5QHMHPTojutjoM2tppCrgGjvyyS7xqX5BKnYjGL43FPRwBR5ddhCgkKvu5cethXpw8oFRb1aWdepPGYhUbtaCbj2",
  "key16": "3GB2YUiqtZyVUZaKYFV6LMv2jrERgaESYDwhzyp9qcd3uiFK8R28Ui1uhMaXaKuZ2cshLZcEaXt8hgLgSAeWVw3r",
  "key17": "2NEZdFphDhGu5BsoHARxd5F8KJDpApCSLgsBsBuvywr9EWnAyGk86tKpYJRB2LS4S9a4soVYRtMFuyFHQgQBGMuR",
  "key18": "2axndwbsHEDmvKFwR8X8PDYky9Y4rKzNiAYKeATSMz5JzUzHc88cmgWZT3mUqd9hyULa9pfu6ckpfmgdqkC9hDha",
  "key19": "2LW3Rng73axsMMhRYNQ3vXEtkguwbbA2JPLTkqS1CHRWvKwrQ9Qj2DTBBuNCmYHGHstJ3JqZUvevKUGA1x3jUR84",
  "key20": "4xX5uEZkBM8B6TQjiUthxNUtBtW5mvFXoBNoKXgKnyCEpSgk2SHmunj9f9snhyhS3qGvcwXvgCY3mCMT3gejUr8z",
  "key21": "5WNYRZHBSaZKDm8nYTY4sY1Sx5DqhkSgfkVptrjUwjCkPgshahP5Z5MsruVf4FisR44GLgUb7fBgBWU5JsfTYRV2",
  "key22": "2Hbq91TnpVL8iiE6W8ZiHhYCWSS2eQrDGihYjNEh4WecErUzMYQPFvbL6u59GUFrDURX9vV975d4PTBe7F2jPGim",
  "key23": "gNXxMGQq1cdUcL6zTsxo3N5fJJJUw5D2Q7ANcss6yMEU54SxSDiau9GuRdKknaaGEnHTPzWgHvLfEQzPQLXCHjc",
  "key24": "21dNZuqE31AzAXwVMTL9MFfX7QXxFvCZKSou3qsM4WQJ3qgqwBSUoCbbtoXrTP8TUYfhgH4RtgtcRh9TMwVmpXJF",
  "key25": "4ra8GpxzNVsRoGeh4FvueJfiWZUthEvZSagd7YtyMEFeV34P6xxpWw4UD1bb9iEHZeuYq6fUs9rxrdvN35Pt66rG",
  "key26": "5c7zfFDvqNAoDJr9xAw6NsMRNrm2ComMSJJTWSgLTsB4knfgrKPkQhHWffVuntwhrvp9C5JfQa1ogHDc2x3ygzzK",
  "key27": "3kcfQL3c8pKYqp585kjipyxyRkifALmB2QKdUWk5vTGGfUpmZw7JTNrsfds47fu2Riw3VqBPn1ecQNP3PYjtoDEP",
  "key28": "2jrqUijW9iLrbXGwtsjDUAZXHBJuUmT9hdEgnJQGwiuBU9Adr5D9AwVztBpG9SHcDYsrKfxpqEmFuoawtHGkcLQR",
  "key29": "5VArP5FshLiX1yRy9iZUJTRenw3YJaKpAVLidWUpyuPDA8pti8HtEDqnDiSDderhdugmH931mPXTiGDFsLz1MWmK",
  "key30": "3K4ZtEpuaxk4QUhTWH6WPFC4qQQpdBMYka7rMg99b5j4JaLwBfWjJXx1SeMBQHL1a9oN88SgAmcwf7ypL2W2Zreu",
  "key31": "2tiizhAcCsYnQoSq8Jzm5dS9cp38Kg82eS3ksdm253kYoSB9D6hBYN3DUysby5rANMn3n2rsE5GKyaV9VtraNpbw",
  "key32": "5c7qH86myHXcU3N1EGnMRjAS4PSyfYw4D5W5bbXUdH1oXeejwfNCCX7sLM3eQRUyHmTkFyXqSRTP7t1DXcBAokK5",
  "key33": "2D8JMHnDvwb33VBsLfWvcvV46KNChii25krqtBMYhxUMfcJz9mQqEF6rAkDfZsz9YuQX4tfAajqaSQV79yhikLtY",
  "key34": "4neCDZuVqMsmJHiVEZVhh7iB7uoQM76D322PXNW9A1sjbGvkkxF94BBrgKak5CiwUWm2SgRKtCrhP3NDAnGP84SE",
  "key35": "2VizEBD68FyRC6MFNJbin2gvLi32PKtpraBTkHEApFudoBx7uiekZ6BenjRbP5nnVeVYZLjfG1SzmE7xDhhbtBr9",
  "key36": "4pwu3u6xJCEVNZz4A3WSfSuqy1xyU5gFJSvsZxZR8GGdy5ohFpQkMhvJLHjBZDhdtMtdb3iVFLoj3GrdFu7VwNDh",
  "key37": "5jAtfXdnfjr4aKY2TCTSnGReJxSWQrSvevxPJMSb89W5btUCnsPuzB9iyuqnkxE5DsYqRcZ367yRq9TBymgCgQEo",
  "key38": "4oQCq7dkx4c6m4GUc6ztdHMikqUrVtD8NvnG2SJ4zcLuxUVeLoj1CpAHqEoadRFZ2iRrHf5XPUsMJz3vr6KY1CLg",
  "key39": "512Fvdy9ADdSK1mTVmLiZU2JXB9edSuBbG2aTs26JRx79xEQy1azS4V9PqJ9hChdzkw4KBapgo3BEHdjRzYwQLXm",
  "key40": "3pAED6vnsdNp2BZMd3wCiTdanogBHVrNRw91mP21JBsC1X3jvvrhvfeVMhhf7YufGkf4xc4sDYhU9pGKtjZNDxcS",
  "key41": "2et7Wipem5f11E7GKNUrCBit8SzrQw2mydt1W6XzWcLZh1K31AARFLJGEcgTuGYXV3UZFum7QaxASKBpx8s7XgvD",
  "key42": "2WAJ86iLMnGS6F75qnYTBpHnJoY7S35g6EBr7JYm45PaJvSXRt4NGG8Fe2f1WjgXDnp1XqhiUE68qtBwMe6jBrBT",
  "key43": "4gG6LRmMCrjWP3uK2pJidw1SPxfdsxcp4srJMBq36nRm8ZYSN1pgY8RwwhT7epRgBXz5xxBLFTH4sL9t4CwjfqAT"
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
