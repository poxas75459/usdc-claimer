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
    "5jogaxhpYDUWFXD6DzzaiRrUs4GGrQeZkiLMeNYqPVEe1ZbvWaDy5PfGNX5eC1avrGq1RafYam4c3LJJ1vm5j1eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43GRK8TFejYoQ1X4hVKpGjrvm5f6srSEqJ6Urx1VD1hp5661u85mZR4TVCzrUx4h56cEK5Ym4qo46Gf3Eg1hx12b",
  "key1": "3opfzwhMrdQKMF2iW5zVAZLQEZb3mz57HLLFHgXTr1So15r5cxM1uh8V9czPr8KHgWWJ1ncXyUKYpywptxEWGvSy",
  "key2": "2hdwxLmmAGNqN14RrfEQMtnemUpbUVBnDhFT6HYFMajQShDYtV2zmZqfcGJbh4pV3phvhbbT4AxekVknM8rGC2BM",
  "key3": "5w8FwYK7LyNZJnuAF7MDvAsh386BKsB1CLeUUUxhRYr6xRje6AX31wUY1JH982DtWA5BpErojcLFBjNvFQUWgoWD",
  "key4": "4xdfEgX73XRV1goy5kjScQVFdKRLzDRCyfdTMKVPeYDJS91wDSu37xh7jQuLwRazkwKXrAVFvJF3tzCBU5drEedn",
  "key5": "34e78pD5tUtGhP2kYtschbNMzJ444d7q2HhkgJdjvEPMAFfiCsHehkso1b5gg3xKihydvH8NLYtGUK8XC26XJ2HL",
  "key6": "4nUvHv3pcLWEvwXMicWwiSDex8xAsZqkwdtmLcDYhcK6ARdBY5LQfe7AehaJ5RcNLtV3voDq2CYvgViCALd2h4j2",
  "key7": "5hU9StJ2N981ByxhFT5H2sT7L9cxpRBqh3YQ1kuNx98vSGzToGAL4aNzGxpXicTxXubyS9Q9gvf8ejpSdrFjmzxt",
  "key8": "2nQPXtbE4Jr6aKxxXJ2g7CL96GwGiAKMkbizR6yruH5cDov4QMiJkiWQM7BSMpJ1X4QVuVxRqiQXMuGMS8ePJTLF",
  "key9": "Ua38mbdeLBebZRUtXJ8vR9b8GKdgp9VUpjg7LM5vu4syCQU41VXgMTxoGHMf42xMALRqDRVkvKEKbqH3yEmhUzE",
  "key10": "2dt59oB2tVy5Z33TBYg3Y4x5iwZdZPmbBtPRBrb1iYuzpzmFdzAnaNZytJbzHXGYf3eSUJnJbPExR1h2BjHBWG5A",
  "key11": "LccGZio5yVTxwDAFc9aAeKfoJzGEAUcKE5BvoTaGbeRe5MGt6VKuuJ4GBTW5Cpggcw6sSQxAZvVx9jbbkKZPq3m",
  "key12": "5ozi7MjAVX1yyq21RU2tSfayYvYubfrXJsQUDYMRSHhcuNvbxrVdMVFKfQhGfde1mfywkmPBFP5zCc3nAy6WM4GM",
  "key13": "659zvCb45FwwqkgXTWAAqR91EhtAHN2oZKVhATA3dNdkxctpL1dw6u6qQqhWVWZz9sBcBctFEBqmLARPMorCXZLr",
  "key14": "2fqL6JdLLfSeRbCDaBJ4KtktWpKPizxkVE7zdKW34bzzy8ATer987uNR1KiPaHxgvFq7fWNpHY2QswkqNaRoBAUE",
  "key15": "32nTiWJCyTBxwkG5xmGRzpaY7Chr97gZG6uUPWHLtwobbm8dou79rmJvEZWu3AmrRKCDprfLzSfJxDhDjCvHMANL",
  "key16": "5pheHxje8aLJMYVgpRqDMDzbuCpYP8pAm47CuQ9UHG7TExMT8H1A5xg6BqTkb23QtzWb4BgDiTFJSLzoBWJBdmac",
  "key17": "4H8MusHSFUoUbgPuSv87a9FDLx9THfFYGKVdH2wCX8KqAHd7bAFbMhFYjNWBajrYqv1DobuRK9mmyJzZKuErqZtn",
  "key18": "5f6XarkKuyKcifjbRsXw2mrJZsQoWDP65TYgWj27zNUieQm3MTuGJ3DFWjzjGjV3K5VXLnGryMeZ7JTT49ni81sR",
  "key19": "43VkmhWSiy5FD3eoH1eGnAdFFmxig1NBbg1vmbTyyKyt1w4gFks4XGVdy7HX9zYg2UWkAVWU3SuWpaf1RGky2V4L",
  "key20": "48YPkocijQnCknq7R78mxa45mazBhXWqYat3fM5LGKAmQ6nYRaorAP6UiyYmUN4e74ic1pRYDV6agxt3uwEcikcz",
  "key21": "noc41JEHBeA2JHrTV8oGTukpbumNydEXAijDCJ16jik6EAZG7LkbZx1KoTZ37KsSGQBv5oukZWurM9e1JbkayzU",
  "key22": "5vHYWxfRAXpMAyYRbNzhkw7KjGgEzvQdoQGf8Nj4AEXyNtkSRptA4Exznov5DqHvPGSyx7zXDL3hwX25GR1RD9M",
  "key23": "3R3NU7UQLcx9xu59JHCif5AL6ZfHkvDA7trasMKmmx5318GL3oSHnQRpuPqtt1JiPQndo19tMuCenLuLjoA4SUyc",
  "key24": "2iGC9u4Lojp6n5NKyf33cTgNFYg6D7zBghKg3YfUQtQAhuQZmoSKqe1w5pPjqELrpfkMcKrYqtArRkC8RkAtJRQy",
  "key25": "5vawFJa2ugmm67jCNo7f5aBANJmE8z1LsPSahApLFGTsrRovovx3fa7hCLSLyD3LhACYN83ytLWr4Cgkj3msDnEN",
  "key26": "5twUVbAknSau4PAiZCj9i6qK5BJBejpC84tFW1fXxu5idoEyhyt12HDBTStFRF7yoguji3vp1PrRZExavzpL2Tnf",
  "key27": "5QBXRZhEHqphSLLZrneynhEPcXUMXpXqYpRkg7rTyq7b3X3NZSVgB15MkqYx1N1ARKySB7a3d5D9auBgXmAQc3gf",
  "key28": "PTCrLGyqVYAJPnikqjsfrdYCCjwJhnv6bR7evRqUpvhywiUjboQXf5bXF3uqvns6CPrbTCmCVk9isFBbBtmtnyd",
  "key29": "5aThGYrzTitmZQWsTdBny8nqzhdVn5jdvQYSQu6TovdjwrhDdDuY8pdfDGDdxb3wXBK9JTnoYZVhTum4QN7FqHLT"
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
