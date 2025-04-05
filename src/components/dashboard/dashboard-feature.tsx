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
    "61VAeND4Us7ANxXDYbZzpRNf4T2bCKVo3RWeRYPv6tRgLgASUpxJk3kkXutcUCqwcWGWNJjWRn7wVj1Su7mEvGMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dz6yfbkHuTGxc6GQoRyNmfQMLUQE4X3GD4xJJ1zMAMhdU7FsWGVnwrEHuR8kWNSXEWF4KxYTKAv7u2T6JW5i6n",
  "key1": "5ohRgGr1A1rgNYxtCikD6oZbap9bSrPnshPjXUJ8ioyi6LA5Nys7UZqWyYUVJUwVxpcZXMkfemMNUd5Z7zPBVCdc",
  "key2": "5ESFixjDLqY9C92Fp13ucsTparFo47yVEEw16M8A1spZXmtnYwQLsQfkMtZ5Tuo58DDFm44GeF429rqweErS2H5o",
  "key3": "3CANvjS7y2ymrZuznrqrDpNFwjXBLPcXZwmhU5c6qjXBxJciokvTmcD48J2Sm4TnuVRrFRrp5dT45RD8AMxGij2d",
  "key4": "2Pka9zmGefJnvnWbRmpLwT2sw8q5JBZHowsbKUspr1PY4RrqAXtWkgMpXBTXQGzwhTHaAipqaApaitFPjjXmcFjU",
  "key5": "Py1hHxaZosSTdfDnw3pwSYeKx3xd4P5EYrqD4CHVzcJZXYMb9bf8kf2Ndu2x7aTAEQt7hwAVc3MvY3nVCrSbxxd",
  "key6": "2ZJv5khnqcLQVwWmou671GwBsw3rYidXPLUFLV43daPZRDNDmgQ5x79o7LmpjfNCdCeABkUG3gE2Pe5WoD7ABT8u",
  "key7": "5uihQy9Tn8ajRKFFx7KE1T4FTdkJWVCrz4DtS744D5M7URQBFCgPH1EbxqR4nT4KRBV9UsqDfzPNeEUBAttcnZco",
  "key8": "31Y7ppYGF8LgiqXL32sB1VPcck3Gjsgrx1weB5gJkPEJ2DicjzK8kPwuNCiYPzbFQYFb44gfPsuNrJw6SZ8EZycS",
  "key9": "3nNRnxhrevaXnKxnd4ytjh2ZMd2Qj988F9RVGow2sDtuTekub57eF83ahyFfiLUYF7SoCCAqmUpCPi5CmQyiwQWS",
  "key10": "3CnRgXfpTANJe9J1Twgm13o3er5XPBZvzo3FwtK1anehuKoFC3LsJct3KWEyUeUgzSsFffQHVvRENFDhn3iWP7hL",
  "key11": "CoiBwE7mR7D13TRTpBLy13Kd9WdYa7g4eoxT6zaw59G92efLCogLYKNnBdYqexvaQ13SiiynHdX3kwZ3pkPjfqy",
  "key12": "5geCcJku81m3Vxr1BXE9MbsmJgTA4r7sHQpq6SLTs5iD6qkCJFHP6kkt7wRtVzbtoyaDzNTiTJJX5rf52jXemRjL",
  "key13": "63JJZNB9xMRNQNUpRqKENRkJFguEMPwWxCnn6cfP3iRb9rSq2jz2QAwo1CWBNhakzBGuT9wsNcKr2kbHe8vBVTwt",
  "key14": "4LAQH9zufvVMzzNWMxL5go2YGbvSS8Yqno2TiGCGy1v2S3E4QttwKk5tu7xwNMdD5ouWUZRCBp58yb23dEAcyYCd",
  "key15": "52t1Vmy59WpniH2Jv92xnpWpBmu2g1CiqyAhvVKbhr2w1aoG5zszLVrNGnLzeXLgYPPkmWT3VEnmh5D8rfuvCVg7",
  "key16": "4P8vQPX4JDZ85a5jyMfjPkWtsT8cS22JbSqShw7m6iW7DNLqimpnQ5bXnejddMfy3KU4GHwiRKHETWwfZWDh7XF4",
  "key17": "5wTS3oHp8hhD8sbSmQyvyYC82xEJK5z1XzAatm4f8a1PDYLp92u1VQcAqhtx9AVoidbyvqe5En7X172fyHavH4xC",
  "key18": "BNzaZZdxvgFZugP9ZU9NjToCgkaJkUzt8Z85CSJucUKPaJXZWvuTDvSZPKdNURtr2Jb3PXixoRmmC2C5SWYQWWi",
  "key19": "1uhRJc2JkmReDhuPRePGQBmf4N4iECzndYwDBmDvTpRnxM3xc1CwvuUj9W3FANzQsegwWUREf5maPdBrrncGPC3",
  "key20": "5f2uViuy9ZyLrWWb94pTcsX1hJNgrqsPvF8uGtHXUbwyhoBTFn8vkPe8Gc2dXL7KajTb9xgn4prBsgTfYLCuG9iY",
  "key21": "3s1fqiHRVn5urL4geEn16GUd3gN5MXAAPPHQ8TiSAUv9R4Lx28w2cLS5A1oebi69NTxFcE8wUzafh3yUrcxNyYLY",
  "key22": "MydDFHFtqQXUn7qnC3W1rNqSDa2uKqU4etTZbkrtc5PR7GjvXthDeSLnRKgZ1aNMPsy7sWwGNVRHbjiYn3BVd35",
  "key23": "3YDphvxGykVRfqFQKDwv8CYePL2WGA9v4dk8XGzLhHsEdryXPrf3GKqQc1bJQf7L38XNbzdkEMfPrvMcdXdWK3wv",
  "key24": "4bqx5kgvgxoaNyV1vmrPCYNTE8PecyxRHmdrb1QVCRynmNYjp48Wv2sJt2VrsNZyUsmQkJctjqUKtaX7KpjEW6Ur",
  "key25": "2MQ6RwibdpMgY97Sh837aEmtVm9XHL5zNdt1eXS7FB8bNG5HvdKTB3aBNagXZD1bHmRPUeDNzrduYN3A3a1Rgcbx",
  "key26": "56FEsSDSPExww5y5tBHMXgHu88dBVNdoX7LjUnPRrSLv2HBiU85g1gfxmFr6DG3ndgDc1u6U2JSqxi7ZEkUq5ZsT",
  "key27": "2USaLsFX5jesxd9wjW3TCwg9awg5bEtXUoL8JJhXtft7BbVkgzHg1BJCFK7tY5DCpagq7PVHAHDyAvMv3w9Lo7wq",
  "key28": "44E37WN76vdZFT5BUHaoD6VyP98WJYJEM3Zoa5btj2mUXBVTfpT2MHJmpT9HVbxmx3NbxB3FoR6HQbvuj4UTFcdG",
  "key29": "4oKzfJLJ8FbxSAoqn5jC9vpCMo3cNujNvDmXqw4rvvC5n5zG8DCQzcHDZJp1R2fAnPnXtQ1EimnHaCsHpY14K26f",
  "key30": "2uNdXSLeuAvbbigfGDUUeWxqKqbTWSriiFZV73i58TtmUDoQL8ZevKonfh4YWFuYE72JVhsZcr18cBxK3MXk9CaT",
  "key31": "2U5eXNfNpBeSpXgaTUFXvTeqFWxTJVFWAMyqnBbgEt1zjoA7MzFZrReaoLFDRXzaKRGoPZuHqnyEyeP2LmPzeuRg",
  "key32": "23YyPdQc8i8yVWQL3PjiyKUtNZ57Za6Jtr6swvecB2aLjw9Zk2pYhTM1zgSd8YFH9cgDQM8evHZh2WUZeSseF4M9",
  "key33": "3ua6WTCK4JgB1Dp5CzHPZKaJGaQFYkfD36NqfU9FSatrVCQpuEnheRPi3XdqB79gsbVRtNy9pTHSDeQKMbr5ojUx",
  "key34": "4B3VUpdsDY6VdV9LxhuN4urFvkdFBP5uGFD6zYGprPpry2L8PPFFYDTvn6cSasyByeusffbfqqy1Q95ZpJ7jAmqG",
  "key35": "2fCXD5SudhwTVhWNBeMgFhsDV22avAcpRdH1p21RNUnaHSbpGe21e686DE3wJqiV39c3n5uD7i7U4fuwnKnCYjAo",
  "key36": "4J1sW1zYbg4yRnJq3zSEc43zeWYJzQ8ZXckyb7wFbQgDQb6zBEwyiXaWJcDLQA8GhKGLmTrHgGH8z7UnZ9D4zWqw",
  "key37": "66AwY2sTm5rgcXxbbgFELkHUd2sSeqvajwjLjz8Gb2dzycnst9S2wwau5PuGSkNqzBsRe2YtyYmZEeexeHhLmuEx",
  "key38": "9ZJ1TBUHgMCwiDpafEa1Q3ym6R2KwFsr4g5Q1xHZEXcwDXLE8hGLTXHPSQBbmmbSZLEWAsu6TLmTzJua12hw9uC",
  "key39": "2z8CHJgLD5kQxGJmtohvWkmP4Pjs5yjrkt5e7vAcYy2bDfdeXGZFJYd9rK7znJerc43omgpngzTLGmZpb26jMK6d",
  "key40": "XzAhwuui7tQbiVwuVfS1NfA6urXZMPbkNbQwrrucQyneKUe5v5ihtDFh7S2eskKrsZCc4T91fAQsLteouk8YjCh",
  "key41": "42sc8uB16MHYfzg2xkSe56Z68xA6nM8Es2VNeD6uYCPTdMpmtXWrSFKkQKFnixFq2aaFg7zdCuY8RHvt3iq5VE5N",
  "key42": "2KREvrzGY8VyR2akqzYWwVBUs4t5R8KUGHmvvhYwdWX8Qj9Rypw5SsQ5F8uRhyBmUT3S3hxmx45LqSKg68GDP2qo"
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
