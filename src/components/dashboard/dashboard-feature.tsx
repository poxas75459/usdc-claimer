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
    "23oaiGn9nWML5apbo1H86oStquxgXAQQaWfoNSmqs5b693jvbB5gmVWnbky1WogTpu6kihtLrcymQVKgLRRLRfmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgRi6vyRRFaTGjBsVztm6pVfNZ6h2fgZgCguSBktqNsqCxTpu14uiyJAXCxs4ZiCJXgmCC7mn7JhNXPK3oJkeVK",
  "key1": "4Y2zr5QFnTAoSV3qMGbh6JGnmbjU7fbk8cTd6sM7BvPZd9zhfFgEYxSg1ZKM72FpZTp1aX74V5p5eYPESXeYH2oC",
  "key2": "5T5G1cXGjd1EVsqiLfrSzw7FBjeGKjyWegPQWG9Kca67gRWqxRcpSQ8ciURHRu7FNmrWVX3agaJnmXW4GVnKj8iM",
  "key3": "vqdvtxZo9dnK3sH1QqfgBMKBf3Urdw5ebvPrXvyxRmN2RiPhNR3RfQAtX1G7F3iF7Pinp9WyJCXFwyYhe1CpuDU",
  "key4": "3pgA92gn2mSwETiU8Q4X6AQevFMuyzHJrqhchrGpECQdykGbYJmbqj5WrgMNerJnb2Nokunf1QApx2LAd8kxqMCg",
  "key5": "4BANY9UATDs1DYM1X288v8Rttc4bx8ger5Z54Q6kfsuX4sg4d1LKTyPQ7rvCUiG28qWyreJbn7A1tbVstt9D74kf",
  "key6": "4kcqGTDkYaHPmryc9UJHTSGpHRHWx3z9BLNPogvErRVfUUTeK3U4HijdaNEXJUpZTb7PpqUCZ4SGZ3AbZKGaCc4C",
  "key7": "4h2qSeVmw6VNAxY8MqpPCJ4hmwJpGznZFJFWBwAG8bM6btBLALvQvYCEZX4z52HeMK4tXvo3rHFPn9G5M8FYnKUY",
  "key8": "2YB6Zuzod29bmNCFCADL8EDiKyYmAi2YasBvZmv5mLw3Pv1xyqEjvsfFpjrPJhjeVawU2ckBEk3y7iEx4X51dVm7",
  "key9": "5dH2dCvB4Nvpwqkm6cfHV9XCL7ZGizqvvTvP7aDgmciAcQSFrP2ZRSv4e7sM4kz3aRSXAGXchpC2qyJhgYGbqh82",
  "key10": "sV37guXnUF2SpCtqcmQcb8RD9yRfE3CQv97F8HbPHJatAhZZQnfD2tHecZAsdSpDegm4WxRWF51Nfn1tdSQ6uR7",
  "key11": "Vu69N86F2Vopv6ggNuxTVGVNbHktg6AcJDYuJ2FAPQ3AhZei2eK2vAvpLD8DDXvpCXFfjUvpqP6ocaMa2rcQqKw",
  "key12": "67EY1MtESymo7k1YrSss8ypgXrGr67A4WaGkRv53Sr3sAUi1kCDXwobmtGYP1PPwa4MXL7PatHRwtxbBtW4vogLf",
  "key13": "5jorJVgn7towKQAxZwNzg36TZcRg3aZY1kWhXZgxjgEeYhP9L1uGj7JP5R2wy3zQDHtLrmtJRASXaf1oY8AKgLrP",
  "key14": "4ToaGA1zAYQM7k6Ug1R6GnoWZsn7kkoPgtUHX9RD2PJ7GFMUzsHEQSPSsHUDSeByfoZorPyYEigHqQqTMZy1ACvp",
  "key15": "3aAUuENJU5yxiXFfcZHvcv9uAcLdhyYoj8jnLFyMNwXruNDFapyPA3gbhAVzbS5Uy53ZsdcbNqrDn72CkrhTBxVM",
  "key16": "2PkkrfuCaxomoMSYDHHzv4oJoPdJ5gwt7i1EUseJ8LfnDddHzThSCwXohWYJ1h1WLwqx2yUgLkHyAukTGyxJKzsU",
  "key17": "4n4n2hEGTWzf8Kp6N7PFCMo9sadhGTPd4zAea82DXgpAt93YmrCv3GTLJuQwBTcs43ay7bbpraERk9LuiTsXeik5",
  "key18": "4RjCJLTyDpMcQtSTrLQC6S3JrDYeepR2XoqAut99HFhZxCg9ajufJ4sLjrQrXbCgXXcL7EFnumCd1hPDfAXGk6Nb",
  "key19": "5zpgoDtnZAkQPwz7wSF5LEkzuX6WyzvuXu7bSaRc9Lb1oD6pVojTMLUw2CUG8ooHWsfVG9umcQ13BbFfKKkYjUvY",
  "key20": "9xBM2WxCa9aXJZtxBTp4pb8fsJ1PhRNvLi63rdo48KbBXdr11xASNeHs5uas3HDqjw3LRCmCcTfbCSCeqAMu1uH",
  "key21": "3Z7JDX1GwnTgh2EdCVTLd3o2PHLGuewg31oKq1PADv8KQCycR6P6vUBVn63j8ZwLTqnfbX8YVPbNQhemtdegtDnD",
  "key22": "yYTe2pQTctJox8LpxgNpGGndMxHGjEJWKfBKcFBvL2tLdNH4WS8pDxssXF1j414iiNTFxKxs57PiEu4XwEA2yLX",
  "key23": "28hrdVvzgFGCAvLZg4FTLT4Gf3YoFMnaQ3cUbtcujQV9BqvvUds3diyo87Hr2yRmd6hG7pJg6mzGu3JK6h1UVdQt",
  "key24": "4foSP5ghUsDcLNt4wza4KRLs1BW6NgQCdNDgKixUyaQq5auj58QQXdFGi11x8ipJiALeKneSTCVVTJ2hterBdMKY",
  "key25": "3kxxR8tRgLcZunuky9o5xdrefgf9JfGyugAnmXPBpbAgZQXrEHZRXobiJQNZ2KhFF7uNLCSwmpGvpEw3bR5mx49a",
  "key26": "3x4LyNH8caGpNvaJeFUYKemC4vKZrPaNkJZWCzzrKZWLu6HumsNkqY9r6juFFP7pLfoGcSgGzbAWP6WEKWWwH8XC",
  "key27": "3mCUG5ivuxmQHB1MZmaAW71vq4uyxuD36Dp28oYsHaqMmvNuTXxVfMSVy6mMsv1KNHwGRJHATu7C9Wtpu77nCsgr",
  "key28": "9NUmxz7UyZSThajDttbz2KWfj4ZUm7e9hKzXXwJUH5XAu58vGNseph6E581zSq5XNcgYRfjMypBNPfHAZwQhVu8",
  "key29": "2JEbDX4mwghCNUsv93jrynaHcMCNzA9W61rECx7EZPQ4WBG3zwgRCfr7ZJUev5oQAMBtuLwsdVBeK5VX8ENeDavQ",
  "key30": "E8zdJ7cwKDrpQiRceAh9CpxizcB2GG8iM3cRf8xs32gnYsQSTwsFd3gt8enxuCrNbGk3DTntQCYfu11MfmCSqAM",
  "key31": "4AQ9crCHPWAQJvSwZQGyMbmL7numDCo3FbRcMLqhxKQ1ox4QQwkBxC8ene36v17d1WEvfRz2aYZnDxHpsh1uh8e2",
  "key32": "5V4r3kHGi6hv37vz3u1da4hdGi3FwQJqaiRcM3iLVGYGKavw95vWtnG7UH5vswuXsmZy7ZpeAwCJkkJW9aqsmyfw",
  "key33": "351NPK1iKrBShfHA7UzdJPuDSkhb2avJmbPRVvSTxXMMbtFZbQJSYrxV3kr6xKJBvn9duSQoHbBvQ2pZqfBAXNob",
  "key34": "2MqxMEBsRkoF9A3PnPv81pYwWfsz2D3ykyqJah3nX2PNkwqrhNhtVFcgVMVjvSu5NjXs9gonYaiRVSeEwWvThYwQ",
  "key35": "4nQpyp2kwQs2G3JUYqKBBYZvPCRymHNFgvrtJDreBTLwPinhemWx1QCLGLSCBBjnx4opQdmmcXFzPjsdWPqVXfX3",
  "key36": "547exTTWbTDJ44rpXynYLtQwjHgmZ4F2F2zJLyRu7k1K2wnVQ5NkAwmJi2U3T5N1sfgmJ5hHD9cUQ5Zx9sNR8quX",
  "key37": "QiaBLwnzR6B5G8JddrfTA6rgNvZQbpuG7eWHGqzSDGYnqw5V4LUB3aAvb1MrhDrHv2jFN8fLUXhAq14SAmMrqva",
  "key38": "N9DHEWQv3SuLvg1C3ndnSmYA8y2PsSQw4e3SxWqxrz6qdbrzSYT1sUsifG41jcM8PvqMykYZTjUvnHNd4pQdWU8",
  "key39": "5CXooSQmEbSwymHUbgyC4xmYDU2TAR4cQBgkdSQoFKHQttqiiVjWa1EBCjV8n4v1pwy1dZszA6BiED86hizqxE5n"
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
