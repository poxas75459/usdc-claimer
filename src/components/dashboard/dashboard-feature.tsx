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
    "5VfZHdG292p9yym5c4mu16VXAmmhtm47WF6NLuTtG6HtsYoRnaF4DF8JRUS63kietwer4nhC3PTwHo5wXLnz3KE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4JtPGYN7NK6M8tvQgicL8uLAfZjLY9KMKCAsNAaUUC83UcDxanbX1nfxNxgAqTB3NWXAhcQkzaqSrz8Lw9bxcT",
  "key1": "299ACPrkSxKetWfyWFynpk8igUb5eGhqPTvcKvFKMyQogeYynRefL3fzXRhcif9g1oT8LiRNFsydGdgw88eiGzEQ",
  "key2": "3kvQDcAUGK1VdCtsw6HS3DfnzF2nYsJ7qkksy5iWhvquSdH7HNiUREH7bAjSJpZUCKRpW2Jz6fBcS7TBma8k8uw1",
  "key3": "42c2YVQRbJdEWi9AfHbBa3TmwrAwsGGo7CFEr5eXwQDiGUBKnRdnvgkXHHYFBh3efu74sULQJAXjwY4jy6MWS8Yv",
  "key4": "MFAkobhXw1GLoZ5WeWaevMvTdSTm4SYaiTCJsEFi2ERmFkDRtssC9PrXTFqLFEGABYgnQ1NwCHqDwrDKWMtSFES",
  "key5": "2TurFoJubT4VYh91ZxzMb2TCfakchyXMzTuj7JotEbK9cF1XdZYgbfukitPvah5U7L2gdk9GqNkGNaT4Xh1dCupv",
  "key6": "3hwFUj4bcH6Tb5AJsTPmPtauJgHC5kk9UVu6gPggFCUooqbFSkwUsxLxhrZmmaW66m3MUECFqXUXbnkYE9YTXCjt",
  "key7": "3hAjXGueLDaXZgHghBR1BY7JD6N3ujrecHjazu6hGtaRsemgBx5GJM5Hq7noza4BU2GeTuXzVLCc8BsTP27dx5mF",
  "key8": "2TKuhdZUBAg4Gya64LkMcbUtVBKgiwgxxVGfUw1PEqrHD8jH7YegFGRHULuTdHA66X9nm5QsQCbfQrLPz6zBJV4g",
  "key9": "5fbtg5Z9yvotkwWsWrprvRLLpAGbQfkuQBcqzNSMf6MuBiDzyPaUwWTx5H16AjHJGDnBnBiJtX6r5ndHjrvN6oiX",
  "key10": "22BptxZVQZY5NxnCEfCud7k2pP8yWcfU3MhcTVsnZpwFxbLYXJAsifE8s7YZ2UvRAf1RECG4bSR6QYPiZPXzRt8U",
  "key11": "3fpLhyBcszjjbn8g7fMBzib1GUoZj4PwtE55UQocAv4xJ1LHFhspLbQY8GycPhBzdtUs5FVXwH9ZqCqiESdXEsaM",
  "key12": "5CUgiNtQzzQ9Aac9zSYYKV1j97dZh4aurTAF8Jp3bC49dXoXaUCZx5SYFKVzR1Rkn1EqCmfiJJVXf26j3Dt8ebk2",
  "key13": "57V7J28RwCoPbntdzoXaLPr9HZVP9rEEt6Q4JTr3Cdkq5JfZgh4LBqLDyeSjBAme6ZzfkNNhR8qze94F5myyZLFU",
  "key14": "42LdSSp8DhExeagCAhAscXK9VddqA4RfaJQSm9RVn12HuSwEJxwXRXK26kcAVdmk6e5SHxWgbeJmujxAeKQSB9Mj",
  "key15": "57moKRps5TyipPVTBS9Dw55PdY1zVQLFU6xyPseXuAhonw7RK17rTMfoC8Htq5xQVa7KXCwo5eR3n3iizTkHHB3w",
  "key16": "2qEWtdVFNNr1ZexTTGocvowwNuVpYXBXsgZQQVbv3TW76zYuKZHQznLNoBEteuf1kGhCfYSxxtNvDBV1duorB3Zo",
  "key17": "4axc7sh81Z4EbP7cRfTzzHvJv7T7yT3Z1JB2KCJgVXpHwcAP2avocSJzRtCvWtnp9UvR3XvMgpmDEdznjJECpzrs",
  "key18": "U69rfFGQ1mmYReZvpVGwKta587rUSYBXbbzg72VSN5oK62Ug37VPDqJf3b8z85BNMH4rqhGcVsGp1e8QSqAJ2wi",
  "key19": "3Fmm9Jhev6ibwaF6NcE32WUgt3EjbZmGLU237pnAbUMBJZUsaY8XbaGzwmKVMfKd8p8KLyr3rrH4hEsp1RaFAt2L",
  "key20": "PcQej93J5XQfMpVmbSgeTFph15w6oYKvmnEARQ27DmaU5wrks6B6rpczdcCBYAYYdfvgT68qStrAR15bVWB44XF",
  "key21": "4P7z8e1RjWYN1x8nJZCDBkWdDZWhEqzeSrLc1wvwrKVFkkNxqEuYPVbixSwT52rV6EvEmd2ngV6WKq8gHmEne5rJ",
  "key22": "CKpxfKhyPtX4dxKhSEqdqiFBRSg36Stz82giepgSmrDqRE5hqAJXxNqXx9RntNsxbav3t1gjwDTXrH7hdgcYBJA",
  "key23": "4UPH1ms3kmgSfqVe8afw7MnnHfxrAw8gKVymim6xDWsU5T7d2nZ28W3aByDXrfoYSm3rResCFDZq8ni2PHm3iCuk",
  "key24": "3sdEkykoFa2C1pTFyfHzQCrzEduQoS1q68s7byXagxTdp6TdXCtzaZbwbNKnUnMVxMDSxZs51dZL6zBEtND72Arv",
  "key25": "5XzQEU6mcwMjypoed5gNRFuntQeLKznq5X2n8ysH9MX6yfTnF3xkoMjFmHsKQdtiLFzBJQyoAQY2qC29peTrtJ34",
  "key26": "2yYt2yezPmeXmYNszTcuAw9epk1SsbvdAK5mKdAZ5AF4BsRcxP8zCqDssXePhyzacpSEgKzJ2m5pYNYU1bp1CTwX",
  "key27": "4YSsYjPCb621uuSuKCxuyNZepuV2MwHmyy7KeFg7WpUezAvFBMVaNwKYVEC1mXZ3jbT337Z8qHVG7YZJHnMHHGc8",
  "key28": "2MVRQDnwfE8KUpHSCNFGTToLXSHC1P1YCTUMVP6kSfuMWLb7J5HVuzGrFGjvzkQpTjJT51jPdMspiTrB3GYyZEAE",
  "key29": "42Azr7XA8RUJdJ1m2RySWHdARaXcitERw2sqAaMbVh4MwNvX4MeDfJFR7rFGf1svMsVtBHZBhJYLWB4HJeFVu7WJ",
  "key30": "2ZQFNKzPcDzDPrds4UTaYTyGd74W1ghKn6EUgYoMka7PMvRKdtNTjuVUMcs1Z1jRCHE3FWqTBzWTiUkgcdRzHaX2",
  "key31": "4PeA8XLcaV5Lihq53ZHB7syHxZ6NAvNeNjizQPnBHZctbFEFwixZ2cAAyLtNZe5G79nBshcPTkbh76MLAGVGg9dA",
  "key32": "2hrA83gNnfrYajbjXQ4T7wYRA7FzUExvxB1iKtdF2uCWRdQPuEzhwzc4ZvWCr6cmHto68swFKD8R1yGnTi5xGH15",
  "key33": "4GEi25bGP1mPkvZUYPyayWjZyhYrxFeAy5NdcY1eh3mAXQULywSnkfi8ZQq5x8uaEjGi5QN9Du8Nsc2s3y4ZK7Hv",
  "key34": "4mDXoQycYZtQFS8PuLGGepUf5u3qoEKvHkDY1cHq2qz3BFawVZFPdrWeuYLyxJQrQGSqdu6mzZxLTz6ULCSJqdRq",
  "key35": "4dLyg3CeK8i3dRf39jhtbyaPt5scwtrSZkPQpeyJbYxTQikZJw562it9uDXv4YTeZ5vkWtpLStaPoVptHPmY92RN",
  "key36": "62ATcZWtho1db7Aq4ajy6uExUe5JV8u23RqKPk977A2crB82FSxPnpjyjwo2B1yQzbMZ2S2dhNSYD3esnZXshsgb",
  "key37": "4JKphD1ehAj2MEt7MsNzWkMSs7Yy7EMnjr7rcf1djW36aifWYNMPPvFMoXRXtMZb5w9aGz2LrtsGNJemN2u8wydX",
  "key38": "3rsju3MSMVz9MWsRCsQWSAwJT4TKxcBtaqodL8hVeczecWZUDqNt6U5narbmC96Ln4j1QwwVofepQ2LHX1VxGDBa",
  "key39": "61sJ6BTxHBbVNu7yzKDSzL2z3LtW5qJjQ82YM4RCDoE1aeLgZPPxk6X9c7vCXR8dRyLsRzEpZdjUcMoaimFifa8n",
  "key40": "3DtUE8qtqsFgAyHKJQECbRx523DLHdFqnG7cYmDJDJRnFcaXi6MBHhbxpyiAham1f5vbyqYDQNueoCfkUfFzdPK5",
  "key41": "tgwEFADe5jHWENBQgAvUTwz4KN1vppUTGwrLjb7oMLBdsszdQC1E1XDgaQUemfU8rDFweEUuoEd8wXp8UPQYts5",
  "key42": "3PntcCx1zRMvDmHx8amgqn8g2no1Ahs8mNgGwTGoj9jKKRjDU7NPDZFgnz4a5X3dfVNTmgPWA8eJmKeNCPRcA6o4"
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
