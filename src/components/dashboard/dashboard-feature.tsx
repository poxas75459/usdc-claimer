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
    "24LLkhXioB7Yr6SLhdx38NgNWWvdTSqM99Kp9Uiq83cgvPSvHiCi1hPGEBnNmjMN2JfAGLXaCj35BUPV5zxKCoo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwwKutMoTTGQLLX3d5zED61Nh8qX5vWbNaJrQEAznWtUAzMHLeGyQA6SZCcSzJ8QHMxhzvS7EtyTkpmNbKxhW5v",
  "key1": "5wpGvu1avSS9EihiNcEzP1LqNmENtX2qqh8j67dQ38ZWhjqmcbNFxaKtcPQuyNwAdcnNMxRrJ541snXRq1AbFeff",
  "key2": "5Lh5wPcN4H7Y1cTZtbhETdvo2q88igftVeRdLdb8V2ELZc4E9WsWENVQfp47z8fHiahGqSF6DnWKK2PGfztzW6e2",
  "key3": "3DYhFmw91oA7YMjJwNp6kWfnWUiofZrPY1QDVdxcwNteHte5D3eigZ6bidfYMhtorWhsyjWsF6NQUPcrWpHew33J",
  "key4": "4PkRzCatFUtdhhw9dvdd9uMju8Af6zTsdSLNfTENpYUpAoz4EHYkafFDMD17GheCMwniArVdXd9x13DE94fa5Qks",
  "key5": "htAeU8rcfpHj4hsheoC331zxvCHm9V463QNfjkqi1aPVFRVjoac4vWFHVuyeGzTsWSwM1kwgrCBXTFEEVLWWAie",
  "key6": "3Sdn3875TbPvFQrGzKajScmLQ6E8ZkvQF3MoG1CNQqKFqR7jAAFiNADpJmTCVWd4sTrJtXwTwrEJxRqjuXT2wYoB",
  "key7": "xN1LkRFiij6NX6DJWE53nw3tEkP9xUEZb4wo2Gmre461KR85SC3fnvyN3BCPMojYJ1P4VkrK2x4fPDKe8bsjw2q",
  "key8": "5uQ4QrxxyFEPizs5v4BezWfHhnhu5KoN73CVjNeEt1t6wxtDdjBZQTdML5zGo6iD8yWHZvY1sZhN2Fp7yAxwdiJb",
  "key9": "5VD6yHkAeCPY5EdXZH18TeeSb1DzGEUuvoAKpfauRqR6SYjaVuvgSi517bATbKEjUfqCMvF6Gym5cjvEAaQtTBti",
  "key10": "sHKocRMoNTRdFe3Fyc1mDYYzDPvTWPWv4u1czukW1B2TtKHPvaKCTfZcytmAQ5k6nykuD4wXFPDjndyUjzgaWi4",
  "key11": "wT4gJTaACGKFiVbbnZP6cVNfGLA7MZQ3Dbit2nvboJAhs3SBKAZWJd81jSagbUEEoEpwsz9HGQVQ2tq8z2CbvtG",
  "key12": "45cXHXoDZieRJvAwK8A353iU8MfjH1URTQiA9Qr16vmiCsnWQprppEUf4oNBP2hNNm3uTPTqLxUm5GT5CHfb2EsU",
  "key13": "5Qkd66vfHtjPbXZuXEKThanQNLiqHSAQCSdvQgxhnuS1PVocc86SGgZZHqRWnywBVYvQNwKHPr2zAtiZ7F6vKes3",
  "key14": "2HEaKxgjwVRou8eo2WB1RzoChXFd4utpG1Nhok3w9kLcH5EP7ueUgRVHw7nbofvYhWTj19k6Qut6iL1YRi6ATaxE",
  "key15": "aPmNZcmHPKPWZAqEUYKpA5m4X49bXm48RQXzfAMRaQt1dVhnWqXz6X6kW1XksfyJjTvXJnNxwJweT6RSrQh3Sgp",
  "key16": "4APgnaW2tdkmqhskF3TpBhrc5dabuVAzwZxtEjigK5kC4ydF2QEycKFhdXN6Dc4eViT5nqnZ4XY8UPXYDeBi8WGN",
  "key17": "2Bv9zbcuE7rwJhhqFr6z3Lgs5DUr2URwrRm9hWiZhXtHkRM9HWJG6nUsiPwt8gMDug8M9zYM5ucNaY7NSTvXNRro",
  "key18": "3cNAj3J3ijz8xqsg2pfVTbBHc7GdtySnfAhg51Edx1WZVAUbQfUKYrk9MGzR2F65CuHve2o9DR83f5CVxnu22wJw",
  "key19": "5P1jGcezkZoZ87HoVgnBAkAhztJPvvgqz8mPkWERQFXHfx9zxQcXoohjfaF1Cm86yZj4wwxV6KqcU1rNiDJMHuv5",
  "key20": "FKpizZfhmkpXeouSwc9HJn6YxdKetLdy9mtiQ8AgVcMMfz9bG8GCBvdMRS9Qor4dhFusH31L3ewEwL8w8M65Fdc",
  "key21": "4nPZiieixqaxKPv1SxRoXREmiZsoUwafmLcULpGmgi9t6goDaPw62rNhSuLYaHTK7bsRAGhqD6DKhyUEL5nTKwxx",
  "key22": "3MJizLKux6hfCxU8F5zSRLn7zyBVTMHWtp6mAp2iRves2to45RkjbeRTxV3bfgWn4UAgP8PjiX4Pm95u5WKXeNQH",
  "key23": "2HxQfDMLUS945FUVJ4yndzm44VcfKwv9UMEEg5DWCXyZ46jryTwCTrHpgqVaVREcsTZFsDct8dyQqMM6mnmtjadB",
  "key24": "5zM6D4Bi86X5BPzttFvU9Ye6pzL8qxY8ggFEaWDirJqP2TysXuCawNbBNira6Rf5KyiYjKrMj8ZVqtFr9TSVEeAe",
  "key25": "4AvsmLe95q7BQ72u2npndmVEeEt22mQHQQEW9SSwD3yjXAV9ecPVXLjsc78JHzKKvPmryomYD4AyfTFV5qKkVQPG",
  "key26": "2mNphLeCKkzkKcmEQoVX2V8CL5GNb93LDJD77iLPC31XHLeFKq2KFyUNxusJZmcf6eqZUFSDYWEES1fgVY1GFLm2",
  "key27": "MofFgoUHfMamyK6XAo7RnUD9fWMrKMUQaMuc1YzykX68nLQ1dSCtACLNfjz45X5SRGyY5rbtR9YxqSi3gtUf2u6",
  "key28": "3B41Wm99h5MhaMr8n7cKkHNSC4N1wigjXvjh8QX8mkkymvNxEYRiWkhabVAoq3Gtn6zFPXX84PTuF35fqP25ZpAz",
  "key29": "Z7k7aAzeJc2i51VmpvnWz4fF1cvnFPt9KzytGzq18h7KHNWByUGYXEXMEVfB3EobH5bSdRe3t9WWajebp59tYLp",
  "key30": "3zNd7TrdyE5jo5jNL2CHB931nzNNM6iNoDYAzXSuQuKbEvtCavPc9svTkCk22hMDvUFoJ8Tx4okuqF2t5Zqw2EWJ",
  "key31": "4qAp9whSrPWaxMVuewuKxBeGiAZ6m7e2aaf1Kmt8ZBKgDzSF6P6rTXUPmNTzFtxwmaPNQrMf3sGJTtWZv8CdyEMQ",
  "key32": "U2gGTDtpBQHYCyuSsHi5nk2HsVHebgzCuhpnn9oHiUDpXaPEo3cxPdn17AstmumY9f6qCgMZFvtSCSQo7vTHSxJ",
  "key33": "5itjjwu6qQqX1KESY39ysqRK4fB3aTovL6sQyYwA2HcgTyWaV75T7kRid95zw6nURrbmo72FBHSS4xJQ7ZtdmBqa",
  "key34": "3dYL5VHaVhmLP2qfc8czZi8bPrhWynV7RWmxuYQZ287tiZso4zFFNwYBcMA3jugq2AaBAraPVEgkrUJz5kx6LtDM",
  "key35": "3bBuiUeZCvYEQQtpiwHSeMG6HF82VCf3RoUc2RzUcenVrcwP1v9cCKMU7LaFsM89L5PLpM7G7jDCoxSCvVRVRWKd",
  "key36": "2uPeka6q16KiyqyQK1eZ5NKDa8jGb8L4J2Np9kuLkq7ptkTeAkgcyoZQDHiLZpTT1mUU3XJE5rFqbBG8XkBkCcsb"
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
