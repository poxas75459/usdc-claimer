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
    "3UPMVr4g33KN19LHSA8d95NGvQ8UtNfFiu35kuJeQmkQRPAV6ZhbbU3UUJWTyJLsMJ41CtzCf4aWf9aoLKZSQnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nqL7H8hoV1eqiaGX3UaHWSEfdoufzx8fDzdRpN7M3keLnz6pXzVNfbVnfPTGU6PDusghfwNCJKNvtCfow3h9ra",
  "key1": "WbHrXk2bppoUosVzNuu6u5SMGKRQaW5fxELSco3EuZr3cG6u5aWWL8JB3G31ZWTeVTtptfjyfWt1KN1JjTJ4hvo",
  "key2": "2e551U2JwP5az3BuLj4ZjtkXp67psmwq1Ctp5sfwzVuyU3Nz2tpsYC8eVzgoy442tVuTabzuTYB8wNMwnE7hdh15",
  "key3": "5m1re5W3XNeYxP2fS85s1rUUNEAhMWbCXJcFSidN6ee4JvnSqzviZhif6YBzvAEuQkipRE4aLxvhmv8CkJmraHDF",
  "key4": "2Sga86eFTUG2G65jX97Ez85qd2quT84p6rkjqzZw336haQ1X2HW3XVPbT6D8wxVcFgXw8ZFr9gtFZTy16nTdSxsp",
  "key5": "2idCpaxJMoGy4KU8YrHMno2bmt2Ks8mKELMwJnryAWpousEue9Zgd2LpNXM4snuVKa3PAWj2XVtdgF7s3jz7Hx66",
  "key6": "ttiqWCjdkQ16wtMPLUSKHPurqSCt81MttE5NBAVfmqAeSy5EREWaBFp62ysVwakxAwNJwAKaXLCVW76ukYNuJcq",
  "key7": "4rXtYgQ8upKruczxCBGsPWxEPA8tdNpDqNqAf5BPY4SJ2pLV2hzzZpUWCjwYX3FjF5Lg7SQ9bYzuWqWBSyABCJ4X",
  "key8": "5VCdH2sDdwKyUxmwNJHqtBW9E6JfDXvVrASLLaURTvv8KBz4NNcmyN53mdyH9drFJr3zNbN2pV4H6ibrQv8574dP",
  "key9": "5BLUypzrCGKCqHcmD33qnDBiSxTaKjC3LLBqJPUJy4N8mAXUw4CSjGtPW3nMERq5NG4W8tZm3Tp6DkCziSHJumSC",
  "key10": "5sphDmtHtF4Ch4hC1D26XvnMaD5Q8vLsfwue4bjgdcUQ8Kb4Z93oW6QmzcHusECKCwvMBrEmEbxHVfwEtdpxx8qY",
  "key11": "36ch829bmvs46opGn7qH31qjjVhnmej2D3rG5gQB2jSZB9pyw2bZgJZ28CoWq5kyq1X9pjR2HNErqq7eDqEBEvGc",
  "key12": "3uZidr8WGgvQ13TWSYBDQsb5qL4DejpvdiWrktCT73H9aV9DrLp8YJ1fE8EpDXhMfaAHHKzydWo6RT81FDhNKuWj",
  "key13": "3o1LrX6xVJ2TtteMhbJXkHz75fGAB8XU77eUZXxdFocjP53UNCmuZvdRc1pHdd43SurGq3KDyX48UG2swhEWcN9v",
  "key14": "3i8bVniwCSvQvmmc1PHdhHNuhKP1R4A1ZeMNb7kQbZszcRYMCbFgYMWiEY4aAgQ365fxfb84NxZSiazXvSLpjQeS",
  "key15": "4DFVL5qbWovX4ejLCdBRKpScbByZxw3wcroP5Rq7VyiEzGTPGPempteYS2riM6WhYjs5qD4b9reSU2Lt2JiPV3vY",
  "key16": "1jjSRPLoM1Hyrnpfy1AFnVKkiFKWYqtkLqUnt5VoA5QurkzXnezueqtZZgqHDsy1b82t7QENn8DgRNHprLZy5jr",
  "key17": "4KcToWfCwH345zTYwVtMpGzGtd9i4B81bWhW757F2PKh6SaqjZUJiz4AxSULsd5gk1u245tuSUFMcAi5FiJsD66s",
  "key18": "W9nYM3LmdLfLkbKqoQmKPnwT2EH1Yn9Jjgv7gWP8AKCVrS3ZF4XcEW2c56xCzrGDCzQeTwADM4eSBiQbnZyooHE",
  "key19": "6hGDC3AppyU1PZkhoj34dccLqQiesMPjqbEJGSBDurwFdZUmpQiuqK3yZ1qtKrv7u18FyhoDS1MGjJ9wRBuwAvn",
  "key20": "4MrFBrwQaXitkkGz6QJABtinQCuJejj4WaPB7gnnA2ZygBNJh6zYKV5KyJCq8szYLhF7mmH37Z3FmGSSbDngPiMm",
  "key21": "4T6xBsRZsdwLahciHPA7WUQneaPbGrg7HqTTkddeBVQn1kvhaQwAKjLbqhDJrgLZqji2TcCzCWKbNYKeCvs8Xq5C",
  "key22": "21KFcZ9KUvN8o9MkCCcjbZJ4fk1gzT5D1QJxupSr86jhLDu2LwEoeNVxxtXPZFgw4L2jgcp46HxQKQiETKJ7diKU",
  "key23": "2oSmu8uipQNCxH4rfPUcYcNytmQxn4XWaohgoQCkPRmjpsjgT1zhughSF782SXiGLDK3KzCQe3owuuEWGcxtYnSZ",
  "key24": "66NzKqWSGCjGo9w3KQ1VME4k9eAjRZpYwEGdEqVB9ufbVpeapB3pWDPC57Jjs2GvVg1LEgqRFWtipe9kvRXZn3P",
  "key25": "2WbDiJ9bqJpw9xJCVtAxsEDuBumF8CwQrk5A8uh5YCqAWreehEzAPsGiiskJ4J3gpBme53LyJ2138LeWxw7adPkn",
  "key26": "bMTJUWq5rBMGxwTpxKYG2jPPAnvhD6FU1Woa57jgo2hzVhaTNFUDsSpVUKN9vfV3bmBuFjBdAtaR2raiq4kXWr2",
  "key27": "61WyGkqEtsMVYRVnwqABsQstCQenFBwxWcB3eZ3DcC1Loji3cJLNfDLjgdoprDYmmQPHsiY82x7pRwCbMQowVhcV",
  "key28": "2zVw8XqcURh8bjXuzxFhLry1WUEbp7ZqZxFYPw1RUfdDQ23nTMYLpaJ4A6Pq44sTorthJciQDfhk38xcqykVGfdt",
  "key29": "2WtmSschwsHw12i9fSsW8mM1pZqevJkDQkwYfPjnv798Lk4M9vj6eLjp6o6AUwy2tp17W9szrcA3ZhwgQf4qryTK",
  "key30": "3ec9fcs4Z5MLqfjAW1J4ZM6LmRqAjiPHpha2zx9hiSS9Y2UXbaR1HfJhD1BJZ8ZsvJzs9xXQ6SwYEyoKaSKjuYL1",
  "key31": "2wLtRt3oA8Vwbrc7BMBXSaTC6KKs4xvTjdwKwpGPyTAGkRXiKy1kqjFAbQc2wLM35i9gmzYjgGJdQ3Sr92WmNx4",
  "key32": "3JioHuoFE9x6A4EScf8wMd77fRWeZ2SxviRq21TTWDf9kFpi5p8KxfuyDb3EcDiW6KqwddNdHur3xHt2vp88pnZh",
  "key33": "3MBGNPRqF1EtUPchwkoDS2vNdrsPB6jVogE2Jwh3i3GaDjNTr8VmxrhBqspeZ1sGMk1LR4J1bnYJ3VgHX7MZ3rPW",
  "key34": "5ToNc2jmzceVspvre9s1An3tVSJ43WMZnjvBkt5NzScD5xuQ9Z44qVmo81LS8ZoKAADthk1ZDKB1wSgatrzkaDAi",
  "key35": "2jAcM32RsLwLjApgnymqFDQP4GuuCQsdMYfaFspRMmD79mx6YvRHGxvL88RnvAMCozNq2w7GLeZUrJSqAevPeq3m",
  "key36": "3SwakpS5YCsY9uoceAMcV9PHheE3Cvbs24c8Yb2SyELLurm54xQ7xX95LxdMf3n9dCBh6xmkRvfzrDC4tY5cpwX2",
  "key37": "2msuWy61zwLP39KE4Gb9zEwE96a5oYXasdYQZ1f18wJY86EQ7UJnbZtGQLJvLSTg5ZymxV2gbPyVM1588Z125vE2",
  "key38": "2s8rPeFeP1ex9wXpXAiXGnUGXmhypb7TkExEZxMnLgnbF1jwfo1dgboixH3FP1B1fxrToZeZRvjatb9L28p6tSCc",
  "key39": "2vtNBoXpinVHYUPxC58cDtvicb76feELnB3dYpCmZx51uCR1ZyU6xtZB7Nv7jj3rXXLY1zzQNDFF7vzWosRn2xjD",
  "key40": "5sYfzK7KeB5SkQh4xW4APzfU1YDFTKrqA3m3xZ5EvEqsPvVuhgeJigsSNTaNuj2UDxdQWWJErRnFbpCCegLz7UkZ",
  "key41": "4QJD3rDyib1FZPnC1VkycB1mPf7pn1md6kbhMSbnhKzzWqMLRs5yfkShSwsF8az7TpHwgrodSQsaTZNVfaKN2Rox",
  "key42": "4gsbXo8ajRkaEk1TPPobrJm9hXwDrfuNzrnEdeBUiqx25jD3gssM7ohYySooyTvsbgQaK6ncbcTdPKfWMZGHYoY6",
  "key43": "5LwxzP8eSBooDgjgFa7QFxkChZCK1ychsKeBKovdF2Ck4TrscfkSVmG96sz5ggK43yC2ueHz7uv2cf4gXWLnjpMd",
  "key44": "5PiwbesXZstBXvrr3zBWgzpnGywQYJm2wuptMvprSje8TBJ8eNLKKGgzX6vLsQJD4v8Bt4pVhr7XQJHCgYox1M1X",
  "key45": "23PNGfWcJnh3V62TBSx1m5GgyfuogjFb9XA3pwHoWrMKheHdsFsU3kNPp1fcZ2DZ2M7wphyCk75UQ2nwcpoHH8Ka",
  "key46": "4xNXL8kfmTrNv7UASGvi8ju6aYN3jiTJRH3DCqs142j74siaUBhZbMAdgcLiPnW8RpXhdXF2iMGTPkrN6TUkdMxi"
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
