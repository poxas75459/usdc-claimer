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
    "4BD9WSrt1BdbNzJubfYuvwcHQzGu3DKAGsG8vaAiHJhGhopg9fZHobnB9bCH1wd599HcWcUiyThpWdDUJdkKbRQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527ccDJEDNUAAvDPXd9KwTwqb6t4SpptSsSpFj75mahXeu9sRwj5bx4MZ4BPEYznL1no9ETyYU6uRxRtgqErfBHH",
  "key1": "Dxtu57NCrn6bwJ7M7rYJgvKpY77Te9JpwT3mz21iThipTrmF114YyFYcAQB9E5Uw46LvCYe69b4dXzcNq5gcFJS",
  "key2": "Ck9cdZQ2vZVsYVK3P2V31Rkj4nVxe3Ynqh7DGCjqq4iHBGJtBft54pnSro2cQUMAvRWj4dqpfnMSPZGJNVuGwjx",
  "key3": "58n4rYridodALxaGr9eAjGHZbEMisEqRTy7eJLhPZBaCzCGiqhwXNjZYKhVECvwwVwL4jBk6xu8Hcie1XjyWmnpx",
  "key4": "57QA4FfpwstaMHMPSmhAR4irzwTUNATQuBXKeMjiGnAMp2S3rEkGTq4h4GBaWGzGt9Hezip72SaSKdnHP8njBmP9",
  "key5": "2XBN2NnXG1okJeUtcBd8b4ri33rrnJ4Zx858uqrNHadY2wn2krAc79svfxeCr4QgVscKjY2g5xTfHFSnpq6gubzb",
  "key6": "5yw6Mjr2Y3wVriQn8oa1ksA4uECKdpBXUpHjv32mrCCwGtz8WiTxoHV8rLanfdz2QSbMUy2r2gHuYa788WidN2pM",
  "key7": "64Wp52KJcNuMTUDWodHUy7zbohGANW2Hq5RkB8UCNPqQ1vgYUBCEo8SFds4BJNxsNVk1pZ7d5dBR5ZXL4WhYB9j9",
  "key8": "yhXwfAs8CKf1wVCnyegDpvkDviadCAWGSqahonZX7rjzWKCnTNKPNVM4i18CE7xZyMzfafKbP9EFHprZX448gpN",
  "key9": "5rFYcnYjXx4ssCFJ7zTqj9WsbPve9GZYdGqv35obRqDHpEmCYNftY3vj8MdmXLxtVhmkTWHtySV5PewSwKo89oYa",
  "key10": "3a4QHBeGoBU8b5XUaGJAzDAKcBqVPPb9fvYrg4HX4mqyd7QG9KEGZ2PCQkmHy5bECMhy3fuUz4XoGLhBFdjZDZfj",
  "key11": "3gh9CC2jyjRC7gDz1vqVRD64sGofNbKfRU2w1i8WYFRbxVVDQsd1VFZ7JHQCQytk4F4BuR6QaN263kSnLtspmSVv",
  "key12": "2vMoUCGyrzGfC1KZ9kJGbHRijEGNvQiUwn1Xbmh7oAjmuBJVzkWtoSdZDzdxL1TTyqxHLpcoPwofEHDBAD21hvD6",
  "key13": "4PmdrXgT1SSNyttseNgC7r4U7P9D9gSchJigNbpkopYVA93npzcvuQeztsKJCWs7yjnoF4KU2rV1VeNzBHCHt554",
  "key14": "2tR9FRUmchV7TtyYQuqtcMbDe31k9qCPTPBJ2pHyLo5FoBdDWASsiHwVdD7L7RoJyZm9JQpiYMyRSM9x2zzAFiry",
  "key15": "5RaJWng1HsT8kMNrA6jJhUyFQwayuNqKhEWCJWoYckY7iJtsXVGifZsKUcZB87EVdUd4bX1C4sTYaNDCMQt3Muzi",
  "key16": "2p9h3QQFjetFwdCELYQuoi22wjHGeYjcpajB7Ku47gD6DpQmksbnc1QMZmnNpBcu9efCAHmtkSJKS3r6WBjsFgyY",
  "key17": "3gJ4zjNtcXX69ZoAJkEPSJWmEYv8cz6Rp3BAi6z7eGjGyL1WBCbTejbAkqiab327HXZ2dXwm33JThCmAdovZ6pKc",
  "key18": "3pGXv9uroJz8iRQuThUxpcy3sCWfizXvUWgaUYV7bYHrE5CGdxipZRVmEPgWW2V7FCDhKsCdpa7iBSpADV8eEfdT",
  "key19": "5Z5LH3F1EpFa9nDhzR3ZGabRmr5AqVxgQMS4M1dSciYWevyz3wqH4Tqn5dTkqTRRUxm9F47aGLEhrKVsYjj3sPfJ",
  "key20": "468bwbzXd3DcFQUnNnemx9iuNVP9QeMejrEDofwvpZyvYhYZFBxCJcC6GydKvCntBFVqFbruQnKz4w2cBf5oaLPu",
  "key21": "2BD7fTRWTWu3P8rRGB3Ef8ayyzjN9XJSDfjVoDEakTMvwEnYLexrDsri2sk2LVUDM6zVWVBsP6NF36vhysrkr7Yw",
  "key22": "5LbEGm8FqiAzE8sqHsjhefm6HGxxqqmfDwp5cVh4ZhpbqToBCLfdBjMecR6QgGvVTotcxYBNsjH6T6HTgvUMDo4f",
  "key23": "32wZKmas3fpt4xu8fg1X5ckgLSEfE9ygN8KDTeG3RVQw3f7Y9jE5BYyFvn3Ggu96FkwbN7wXE751vwrcYBnBAxZW",
  "key24": "tjTrgsd1AULkjtHUkfUe1AK2a5RYfBZdA3Me36hhki18UGB2dpHm8ksQc8yzJMKDbZ4rikZvahHWB8RqS6z7iG2",
  "key25": "4St7J8mmcLLjvwKat9GpTwaAiJbW5fFNoNMeN1aubWzKq5E1uwPeDFP6PyK8Kc8xo7y3rWhpBbffe1hTM3oyb4kY",
  "key26": "2EPJ9X4Ua4zZJyGYXZiTcrRWttxJQAet4gkne1Tm7iWJBoJE4D5N89rDGQPtnN54wiucrLZG4yHF5cZhBhaRg3Rk",
  "key27": "5n9HPiUo1FhV7KHn5g2PaosHh8rCGwEvEtvscjgycLZv5Wrd7xKA9sSFD9N5iz68muBGmTkkZ6Tjc5oghmhHitAF",
  "key28": "59ssVdLF5ctWDjS8nLjntB2tAj1eCL4nmLJ9uKQCfE1SShMpJsLudqAFRMUED5kJW9bcGJVJLs3WNeittbHXZgDc",
  "key29": "3yv7myRyE7jidiQfba78JLwzRWPrc8GP8YZuEnrxaqEEU5WnXmJPYFVHvgMWJTDTectejrKKNQAYWMxUmKudJwAT",
  "key30": "34L8PmHpLENJyJtfGV54TJonvBVjrYZnLbPF2EGcjHviviWDu7e1QZpp8agJRVvnv6TP3i43Qgni8zaUvqHcUCzA"
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
