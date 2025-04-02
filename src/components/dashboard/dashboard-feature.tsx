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
    "5gP5TnP5PtU791NL6pMbZQ1fukw25drnJGAmiV5WuQUZwPFmMuXoh4bufPHys3VnsFVki1AW2YaawKJEseDii9K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnBmyU37RB1Yyd8P1v5JmYzDgWa59Czcg2P3ER7h8QAGbphgbWQk9KtD7fsdxEWQpk7wjecB1mJAoZboDwNPrqf",
  "key1": "5WfhRXiyzmogy6eR4P8WcsfC6HCR6w7SFizSvRYtLkieWZYH7a42nSBEJBir52ucD727FZwtGFLREfubvZFNiNXR",
  "key2": "2XBjkdeetvcpUTzLz488pfJDTdJVf8FvDwwBnJm5PKCKgNpZJdLRrdd2d4hPz9XdQr9gJDpdoHH3Z34dBZq8in9A",
  "key3": "4FwYizs4UL2KAN412mYqUsti5Xx5UsfGoAAYAeXPyQ9scnUuJY72FDb3FnEgUPWWYd33PqtCwo1QBEfpVpJwBZZp",
  "key4": "5xSxErrWiiLbFCsEuK1CXN25LeiTnXztwZExZsEmSPas7bpxBGepBHJUbVvSEopRWj3gPznSVoEXh5pguRM9URFp",
  "key5": "4A3nXTXUZGXCtht9ABwQwZJoqKXc7u9PCEFKv73zC1KR5b39q1C13WfKn4pkqpL67enCAXDcxyxSk5LhFWwheZvp",
  "key6": "upakRgRgVtwgkX2cY3Gsb66534c6cB2yC7cTTAjQ8hbn85T7M6DEP8fh38ACzoH4jHGKKesZ3k7fNSWsEGNJxNh",
  "key7": "2uxVT5T6qvvqHBYspAtD9rJuyXGyfbgi9JuYzixzipgpEPymaWLdGhqkEwqB9eLB4QLYj1oNuFqqQvt1D7v6wmQN",
  "key8": "5apM1ixkHYCEHyYoTVBNXDxu7YSLEWVVTXmtBiDXNHRrsrsYqru5SK8osHuzdKXwveSn8o5gNY9LU6AuhSjJM1g5",
  "key9": "5o3nCZHzPuLVSNzQrbTQnmmRhqB2H5sdhyBfokb1HNFTCjpy5E6ripaaKmt8wFsRWPSmFwVzXuSX9rhPDgTqHH5u",
  "key10": "8cb6cqwCQphbiZG3VKoRdkU2eNT6MCatjjWibGX45Jg8pmdtVsbS1YWyXPCEbB5kuTx5Ubr5hG1KVXuUxpV8kss",
  "key11": "5EwvBcipSbkUCpJQ2ySuSteVpqXPYP8esSGT9zBdRsspw9P6fA1DrTSjyFkyWjfPqaKtBV5ToUmSmV12nwVcB2NX",
  "key12": "39sphcDxj6XVSgTUvMUzSYgpmjTFwiGCcwYgzTwstGfYg4oSv8K6DSFtfX4Ethx73gdcZv4UeUbFgqGV8ovK3bHa",
  "key13": "3YFnsvt64Vpyxg7cRphRJW81RApn16NVMRPHKHkyvViBASvvNBdetGFjVkKoMWBeAKhPwfV3ixQp3k49dUCBqkgV",
  "key14": "3HkxfnyQrQ4eSHiG8okpFLQsG2SKLNHTfNDhqeSkC4WgTHCSGrJYazAxCBLJ5qMMQxUKAPzdJxwgD5xe1XZ9CG8z",
  "key15": "tDa2KdbDBhk7suEuxNrUtMbndpVvtsQsKgu5Z5j1YRPBwRSNimGM2s6brnt6axTokQKif13D7mPi39WFsJiWMnR",
  "key16": "BHFsmJnDCQcP7LPZdn8uTJanJDX9GyXq4d58qtas35b3uvyaALTJi5pxoqnscYpRizy16skEeyZ28VXUdiQxtaM",
  "key17": "4dWjB6QZhzGk7BCpdzYdxsY2dC1w6JmMDMpraW2ZZPiDGFd4o2hDjVxHUxmEnhe2Q1cXugkvv6WeRhHoiUbUr25g",
  "key18": "4fsSsSyEqVmYQA4mhEai6Hn3WL7JvmgfHjbqSeaX7VTGrjba3rsAk5mw1cQfkK4NduvyR6sQ5XfXQzTLm7KTof1w",
  "key19": "29TzkL4r78tmCXM2wfsJcDCnHwRrTARZ8GZcYwU5VPaxrX3jdyGhzuF4AA1NgaN4k5CZJB8JFWfzugpXTiCEWNL1",
  "key20": "3gt1SZELQHUmuU21gJNEH4reDuPWXJEN5GzLraMdQxvb49WAtNcvQqrpkJZPReVyBvxLDmydGBV8Ex5nydXbaQm6",
  "key21": "3EZsL5TUnQuSoKQTexPSPo2Q68r3MLpMG213uqP7UA1kiqJ5vLNqMriU328ve9MwSim5yjMjCjSC9GZrWhnXnTNb",
  "key22": "5DCDvPgVHm1CvmSXUgE22Ymw7R3vUtHjwJmBpdkenAUE5ZY9yhPmRPCZge2DpUmBhsfnmDxir3LMNF5shNtvLx8i",
  "key23": "5vvtg4b6c1cZL6uD5jDoNuhJgXLZ5pDbgKqznoPLkUhcMcoiFNdtww4DhsLT23CCCZYA765auR4e54ApdcaycGDV",
  "key24": "3BRYf4iKNaPCShz6skKMihVSZThi5AMLMy3YYBaastLYeZkF45NkWGmEuRZqTwjS7XZNBp9MVXGeGkpM8ELgwXvh",
  "key25": "3sevLi2wCqPM4E4mpGZJqQL11W4z3VaBYExVZgYEN99bk1ZVHGxMnjVejgGLuYhGrqL6qhTWZNsMJfAC6ThqdE4F",
  "key26": "49cen66rGd3PAJAAe82R2qCcRArU1uf6tD137agvhGcnxxwpig9EoYniodxfC8tUXw8zbQUf8gHS2CWn9t8tw7BU",
  "key27": "4WvLdsj6Hzuwc6eougu9NgBAUMpiz1rRSu6rFYmd32C5AJQRMkdeLpft9VQp21pr7PKoSf7cY8QYoFpaHrKoPrkC",
  "key28": "4AHDKjUZwKzerHL2SbscsMJodXim1ZVxLbVktxJymS5YmpVS5vmGbkYFFfvnj3tjwa3fT1aQcjzUeXD42D3E8uvo",
  "key29": "2oi8VMH8WupbyPDTbkPqL5asS7iGEUDJxseVZa6vtGxoa92ncj7fEucFigDroPakzEzLd2QuarEofuokqkjcfUr5",
  "key30": "okN9TBbdhj1jv2SuPCRtRup5qJwKd4ymRM1FNT1rGRJJZ8Md6ZxgrRpL2o4ySCHV4tX7m5RjqDTonSJ9Rg8Ky8x",
  "key31": "5MpbbZFRusqUrdrDkq4jZG6Cx2iSX8r2NTfypdWoUV4Tn5wByKWabPx7b7LoP9TMRSSC5snX7zCikrcWCxjMfYyj",
  "key32": "3fys37vjFTbbwpes6FWnApZuzYhij1qxhzY884PoxyWypNmJGrefQkx2xjoGnB77en6Qcn8NoABYCZ2DwRLQf52o",
  "key33": "xsf5vwoQHEXqgprNUJKWQeEyPsxpKCfk7uh9163pnRDN3vdMyeYYbjMupAtx5vi13pBWAvucWmdJjxdLJNhqcSq",
  "key34": "67g8irmsBqn6bzpboFgr9mp4XP5gpzqwj23iqeNEBJkBTufrHiXcDFHEiSmQaYFLSazBsxUVY1yFLnWAQA7NKJHd",
  "key35": "cV8ZNwvsYMXU8riQ95LZZfuRk24nhQcR8KsC1f361AP9JggDSeFvED1NvJVZVT8RyRB2z4REbx9ovBQSzhpw2gF",
  "key36": "nypVC9DpMLjBRXMF39FHcaGxsfj8kz5iYqd6pVWTFn1vyH2A4KKuMB4HDicrzhjhyrjfNF5VzXqochzcqEcnuim",
  "key37": "2H5f4Ngj5dURrerP3zUL2K9sVJgzrXQXLd984oJRX9bgtv2CfgA8JY2UzSykvyvMUrCubUnGXmrCxkCuwLTqBwQY",
  "key38": "3k7nvz2GYB184HtXzR2EpGFUyDHKKBbmc1kWjrQ58BNwqfMGMPYXC2ZCqwjhLQqfYbZ8fQTFy1Bsi9EEf81y2Yos",
  "key39": "JngCa7C2oBgZqi6AZaLCfaDXiRQP9jtVg5xDi2WnVkKoGVqSP4JBBNXXcus9e6zeoPQgS7Aa4JLnyNHRbBThMaT"
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
