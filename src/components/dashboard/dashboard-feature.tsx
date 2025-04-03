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
    "3WxTfYPdcswaVGGZd4rUzaMNVaYkwVdvwhY2rPLuCrzuYKnpwyEgPKfqmG5KDt9wiwmoUFdU8Hg1FQ9G9qtG2nc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjJQjJTFDFLsDGHTWgLuRzZCuu8K1TmDu4m5uxSaPsVjNYryeWmQ2i1XyUeZdMA8nSZ2EGkxVSrCmKLZKv6cEQN",
  "key1": "5jmbsnhb4LWdgEbkmeJsCF8yJ3YpCMpZgRqfjPuYAZnrXhzMLJbb21JnyCBq9nESWa2D36RgfFQL6nF3HDuFYWm9",
  "key2": "WgcUPBDU3kS9nfHVvgJrBpSBrEkNAQH865E4tSwVY4G5x41cZ1SJFaJSxo12KxiV6YscRhobcrkM4z3WiFjSDa8",
  "key3": "4rQwNMaZtRRYFD8FKgg6sprYD2vSbrikACf827tnXsy39D4hPEDVd1tVeRZ7XFENFShXeQTMQPyiA3xfcfYiHbJV",
  "key4": "2DekpD8pPxHyCt6kKtdhdmsYYUsgGfC54nacS7jgtrMkdh14p6QwB1MbpYXBzx5YCAt9iMEPFRsB1FdRwPyJ2g4q",
  "key5": "3aQtfoUKRKSbVjamB94AfU3BMCXZXhds63xu8HKzmsrnq7QFRaa7Awd6kXGT3kiQ4sRKcPjdRZtMNGdUV5Z1V8gs",
  "key6": "5Re7uCj6oVP27GSZLeB4XqcRyVGHJcb4gdq6h8zYJuHfVsViQw1DrhnkBB3MvTKiwNcj1iiaRr3i4nhDRTF8Cuy5",
  "key7": "4uWM9LfKofmb1LqAn9njah5tynkwedoZRxMMJDvhT4PiSxncT5E63nXmQV59xREVgYfgfeCuXaDeCYc8Q3WLxeGr",
  "key8": "3PfhRyLwmC8EpT6VZ2h1eESTdJAkVVDjk55w9ieCLbypYPhPfgXSJNkmtRSs31ddVpXQoEHyW2FWVYtYm9aCibYa",
  "key9": "32hAGEbymo2K8fR6yhVjX3jwqNrewuVUUzPJC1XL4FGAJdPzqrXXwpX3dXsJNELPnUJ5RchmdCHU4XDimEPHvEjU",
  "key10": "629VApqScVFvoDYdigecq3fDRu2yX4DYgWLPN7Ksq3oeJafd1DEjQWLgwaa5AMikB4aMcnfQcK6Uwyut1mWKUXcm",
  "key11": "5YH4ZUBbGB13VjfrRkbW4zaFJpQ6burUtsTQLS7M4rdFasMDt8q1mm8jUh54hXG2mw5wbVMzzqtwi1bXHvZLJ3f6",
  "key12": "5mYVA3U23XAwuQgsMNC3UiqUhD9ZeuDHiPbg7n27eCsXoUSBsBHyaeooCun9SsoE5rk4CCDwbmEECK7NnigBDFc5",
  "key13": "4FX5BXmrC7fPKVDqz3tGaXAY6AMqZg19VyCXG6T1jYcsxmkJtAMw78zMAWtYTD7H7txqSVEuLyV9drKaMziYtwiZ",
  "key14": "3JP6uRKrjhFjqgwAqNzMYHNuDM6nc7ejgTfUUBY3caCyuBBBxGWWArh24FNkb8QsRUn9QVijPUBz33FeY91bgE1M",
  "key15": "2d71qxpUUfpWnjmYiHjy2MQJxprJM9coC89vrgbt4NszktHY9nKszsTKbFTE1evexr2U2NiX2FoNojNy56rkCamJ",
  "key16": "51Hw56oFL91LmDhdRdgBCDmBqYFwPTEVofRCPQDAAwRaSK75hAkBdQkcz5vfgfzk2soPwYsPvdDQRqFQn36NxeW5",
  "key17": "NGFsUbJmnKaVuZh7zaH6DdYvTp771NcJtwHrUiefqZX7xx7T5SYAxiPZivMHHEA1iuaPM3uugydfPfwcPWjG1Zg",
  "key18": "63MAvBWj1rTUJnexGsu74XZvU37UbaQWGkBkaJkpo1sKQ4PzggWqV69arksgF3mBDTYUJK6w7yLxuDfKgaKmVsV5",
  "key19": "3qR1yajtZEVqmVg5rfoNs1zFunTkrQshDH33A6qiAu8KrP9mK7qrFQo9RGGyv2PmzbCZN2vnc6qvLfDmFYamDqoJ",
  "key20": "3fpYw9wTdCCvutBXzfcXhtnaNDcx3ZdaJryAuVYQW2GwZT5nBjM361enh4vMfnRetEA8mESeSA2d3mB5VVLw8Tnb",
  "key21": "3hsGcpJUwyH2QGEVG6bBqHYK85kwtnNgH9vLo8Kze39STGwcwFYkLA6akT4o8SQLFs46iWHXWb19RCkw5YYLbQuJ",
  "key22": "9KNzqaUEBaEHNLT6SLqhSTHCUteUKU2FMfRoA4x96uYxdV1yefeoJXqEDCvgpv5ncacWTudvahiDEGQtamgffXZ",
  "key23": "4QMKkTkS1eBbRPqXFNjgThh6HEPAwgFJf5EVo87mAN7HumREF8RL7ju46m6mA5JS7gKzcsFjZE3ZYUhNvDWuiG6f",
  "key24": "4NCgbEdDiyy2AjmPshox3HmWVzpnUmZ96pDvUA885uVkcTQvPqtX1y7K4jHBXnoc5QUZZKe2KhbXS3yXZLW7nc3e",
  "key25": "dsZtc1hK1oPW5SP6DD5BCPx2ATfeFahF5bbfqYUQXo5MxjRJSYZ9yyiKvC5MQzoBNdWUFoeBqLm29h3KYuzgh7t",
  "key26": "2iHJqHhichzFZ4xSkrHkE5NRkut7cdhrEPMPCzZouVbMypZduQLgqwgRPjfUvkoxbwtgpTBZo6zmufYskNx7tcqx",
  "key27": "4XMTaPUYTvhwtLdoVunD75nXm9T3PdWvb7UWKaJMAPrYS6U1BKqTWYwQFz4fyeAV8F17v1TiezukmH53q7wd1U3b",
  "key28": "3ZMWifLBshg1XGyKaYaBNWgAiqfv6zk8wBw5dqiLik6G7p59sRQBSCrbkdnAnHSbtWxhXbLJUMTj6BNDEVtaUfSS",
  "key29": "4JgJMbmJCKASXXU2dbTSJqEs3dPwdUEGUVwhqYXQcx6cPRVe7g6Cmiyfi1VnJEQzEoXxxkgPGYT6Uro9aSzyPhxc",
  "key30": "2i1j6xiWhHSPwfF4TWqUJGiY94rV5qDdTTnbqAN7SyuX5AxNh9U8BX6fUwiBgh6hBfJUNN97Jm2LnTpK1GaiMVv4",
  "key31": "5zBfhGrSwScMo3roPiE2EHLDrAYdrfJ48kCUMd8heZNNTZgBJjL9Ht8X8FHyMnJMkTKJu5EKaYomhL6gaqRgbQBu",
  "key32": "5nWPnQDeAm39X75sErX6Xv1cyRmVRPGNncA1AnMHncViALxLSVXZiHb7jPpgi3TCJXK3xsShFpkrDtgwhXido6UE",
  "key33": "5gfqZt1ubQxCW5CNxcQDqrgxfwDTFNTrhWykndC7LgjegqWje6wS4FWje2MraQMcQD7RrYv3BR7qW8bienEwYwpf",
  "key34": "5Akjafw7oCHhXfXiGXpyoeTsrUXeHShyzJ3bJaRwazQWUVzhttRbnf48F9YN9cV2pQM1bU91hw6N5BYKBywo7Vjn",
  "key35": "5WZ1fGMXnQtku3kK1R9ADYxnWQ6TbkKDhyQyyrv2AbpPd3bakHZQ1pBfuvjnf8Nf5xVqrtX8vx5mGQ5duJNQk2ku"
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
