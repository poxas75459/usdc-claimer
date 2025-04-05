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
    "3ZTBTddVaavCTrpfp2NSGyQbLp983SkCdGwXL1dVDCTFSHQjyKXFretm2jQDJJkN1tvBNPZcKHankMfUH5ZpuS3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvWZZ7xjre1xhorVSDxFYN1vH6bDhhoKatuStnnRDzbAck7UCGeLZFp5faXdB7BYWUwKrTVmCFaiK26KzTAAHjz",
  "key1": "41GwpiYWwLXwf4qmjvGjKoijPV5h5WekDnbCzp3Cp6gNizAAzCEuwwFhA6z1Ar7XkghUcWN81e3mrUt9QNbz1Bdo",
  "key2": "3n9sPXR1MfAqhAxnmavm7k2RgzM2PjYdRGNcPX52WHdMXCXhx59ZL2AjC5VEzyT6oK1YCZkW7rwwfxtdDaWken1k",
  "key3": "3f5QEghyjEZrBLHkXHFvjX8fPK19DwbnrgqgpoYNYu5mTxf4TC3q9GhpKEeDN59JRxZHULVc5dxZ5xjxmyaWjenQ",
  "key4": "3YGNe2DFvTCRy9vuky4Na79r3fw3WDrhBHJUANPxzHXrhNDRMAUMUtzBxstU4qP7ags2BuTKpVkmW98NvK2pAZa4",
  "key5": "5JRdmpg6BoGkuSa2H8eoon3H8yVz1tcLoUfuvnwUGP6YL4c3K4CXC4H6gbhYHYqhUgkAXcvqXJgnocnUtVZnTJgG",
  "key6": "2FeEa4YbzGisqFZGs4AEhYfpShAg92WfjzijS2EcQ1FL7VnfuLKiX3Ry54C14HseSGFy67RJnbi5hzm9ijSaBsfJ",
  "key7": "4B9qVQ2v6cgt68avoYmnPvGaCiGZFBVLXbC6KkJ97FmrtHdoACcPGzyzFmyFa3SoB4e7NHTRgjty4s4N5jZ1CLMv",
  "key8": "2WCkCgACytYYJH5tfVRqCyt93NKa24KcXkG4JTdmeAMyfBKJY9s39rgxLtAHv8ANgcAwjxxoVE3y4DecAASuWw4c",
  "key9": "5MAkmX1wAHUozp68bCrMtur3x4rDwyQcbghmvDUyaHQv62BY8CrErT1iqpESXwS2KaJPSHrAQhYfcshmMAkEqvgB",
  "key10": "32jUfEdpCHsZaPPDEGvFF9vBMsW7aPUUvZKfmNhUWvp2vgeHRTNiVRCcjCTGncc4Xey8TwzJCW3zzZ7LT6tpRxN4",
  "key11": "47AV99jwzAFJCJYRMqhPkvGoCRJ2hiGStPiRbpTwGgMN1rgGvRx5LEyF42qgKrHvuFo3zFYCt466arTxKvYZrUKo",
  "key12": "3LKMRcfBQ19eenbyD2E7cDogPZw1dGzfRAUVDxWDrykrirMrpvGpjEuVY2vUi2xA3XJUB4pRVhjbXzbVPFR9Exea",
  "key13": "3KZXr1KpriZjn48GxZLuZso2bvc6Kd7ZsuFNza27R8hG7HNv5njFejt2Ri31X56PhE1TDtmDtFeeiXWL7LwRWQRK",
  "key14": "2hSGBgKBJ5xbjz2FdtrqsvpuzJhf3eYcHQGHvGjYaDeqVEmziHWozsWnMn6L7G5p5yZ1kJA5YMBHBLGT4CZ74G5r",
  "key15": "4Dy1kxxEo3WyRQXUGHkq6cGDdX1Um3KKZB1VHKCEHHkttGsvdxY1xWWoHbHnqMdSMJ1qpXoPA6kZ9BTpVP9sZXs8",
  "key16": "3kbBiczW3wgZd7h2BSGMsqE7KkTHMZXcDxGHibB4TwjfYPnTg53u9ixPkNRCNZWughVaoqUGE4PP68WtQaKcKueu",
  "key17": "4eazqAn8zh1p5K2XNf2pWWGNBi1VG51i8dxdGVekyLGDXKEDhJUujwGe4jS9VyYBZt6aVeGThzcw1aXp9zLjb8sb",
  "key18": "55JBDPfh9kAQjHwevo37QdksQk27N7Tx6gdHgCoiNDovE6EyUE3SKP8yBrgdGzVyDnwoAGqeerbvEVv1FLmgh7YA",
  "key19": "3Mkc17REAmnCsiDdd7MaM8PKmPNxWW1331jGscFM8H8ssmJLChbvwSaZDc5qtraJWbN3eXRsm4sbvPfp5DU98PzK",
  "key20": "2oPJ3KzEk5VTy5dhrASxApQPcDgXEFhczLrreeNQvCao1BB1qPCWQ61EZu1a8SstpFGEpqw4UZhaMpvsYTs9L1Wt",
  "key21": "3CPoURZLoPsz9hvg58a6ooCQtHwDwr4DsTMQeWZW7LUtxtBMCnrqvM1gztZ1UUcrivHZfgHiZpLNFj6bF1jCeR3J",
  "key22": "5nwFRmRcCjfFR4a5F895tWaUzchrsg8QHNk7S53Z1ECkbe4s2Ppqw8fwhJTifYi2zx89uf4tV5XyodywxWbtLqm7",
  "key23": "2fhQRiCRGBjYFDD3vo8QiYvjU6nALEqZozSU8cFAJa9Xhq45hvYv1tndcE4KftPAiWDeXY2R1zULpaKvVkPutG6Z",
  "key24": "4kDsnT4vTNqcYXDKxXdBqGwvXvv5EpTryV6SwVqPk4Q8UH8QWFgxQYcBfksCEmSWu4TgDAMYAdJ7xV14jQqcbMhA",
  "key25": "2UCLqBre2UoqUa8HBWwoxhqUfJhNRY2n9ynGZ4X2P7zqU3fPzkBpYHZdpJzXCuZi4pj8ZCWCHoCTXhzYYbDaKu7B",
  "key26": "4MP92XQCWhZq3hxBNJDXFWYo58viD7JJYTv2r718vLY7G9mXcdo68i6Br3Tkqbp5LaMT4GttnjspMJdx3ba5edx5",
  "key27": "3xjmNG8Fo6YRo7Guy4Dz4PSpdeqwwouLE8ntqoYYaFki2wzw1CMtni4jWy6TCPoBejcfXAuybxN81yptD198dPmj",
  "key28": "5gEL686NEBbqq2csVZqcsSL8Z4m7SeyL7BDfYKQbP2HaAFRRj9x6Umi3sUDgvqKHp38F2hoNf9z9dESxnh6srmDK",
  "key29": "StpNBvaisisbkMaA3wMqdjfjz3y5dTCBkrSJCK8kTknxLMKNZ5XXbFUHDHQQpkzguN77LWrvwvetNb3RAkVFPCQ",
  "key30": "HAoKXVi9o8tFNfiCdeeSuFa4r9u4QG9AwaWM8bnMgSxQkhzaa5iEuuvxodNXbxLdnfgUBhLeBdbsMw251dD8pHE",
  "key31": "45mVaeVXz6zDZFyMSY1vuiVSwqTWsbxT6pra1ABccPVH7eCmsFVd57eo8xsVNASWAF8aGWhBC2bXqBBwwBQocVTy",
  "key32": "5KcXJEosoGgH2T9VTCfyz7WRNMP1ZWugSJuszTAfXNz5niAZWyv2qFxYzMfU3ZiPjBc3diXUdhP51tXXGswCPAwc",
  "key33": "4cnvN4FmjcCqxaezzaE6EU4NWKzbdEaYwQcFCi3D9nWhh93v2xNFzSgXBXSG5tmBFhkryf2f1rhNr5N6nKGWGAJm",
  "key34": "5L97YCqoMF8yS4w5Q2HaHEFjqbSZjigJHz1ZgHF7PzRTGYw4KcFrRC4QD5sFy2bxg1dnBNxyfW6ogNfoGH88TuZo",
  "key35": "5gaJowghnWjk3TQoHfVhKQ7bhywf7YHmHq7xGMbintD3ZCYxmvmyjbYTVNYweKSmhwc1aWbfQyHratKujE5Wx8pK",
  "key36": "4sKVU54hfMHobaWM1M9besEdXikSCh3h4ozyurivBUe8Gf89F9EDcREXb6F3NMJFTq9ytEmT5YQt7Bggh88Beasg",
  "key37": "3Tk5gn6V8ZByxijcsTdFrKN9ikJcTPbdPLhkUKdjcV89Nq2i5FGsAsEbKwB2H7suQ1c4p8M5YcpsSUM9t8jC4yuA",
  "key38": "zXRJRxn63NYUrCfXcLbwBRwFsGa6FrX4sL2jbqzFnAQhVpYKAnrH8haRZSD4vJc4PX4QeyLS8rnH62xKMEMF56Z",
  "key39": "2xBhZmouBR24TzEb8TtTe2qmKHRnQbE5RietcZgE6HBffixaXpZb63oTbYMNUK1kSFXRQsrYthknhDHjUFafW8or",
  "key40": "4fNUxLHNye5pqkC2fy5rRs7FkrBDGca3t4C5JU3AFuwoaRjKY8ziqMrZaiZVnv8K4Bqh9xLy2vv1DSinbozdWoRQ",
  "key41": "2kj8Z8ZwJES5yMiHjWDLHr9g4sgoY5JjcbR1xN3bhemngqwVyWrGEMabSoTshBdCMHWaRmyGTHjGbhjAWsgG1Qcr",
  "key42": "BQYH9g2AxseWFKZqmicvKacJWwGJNZRGUfnVsjhjYD7hcL8xwMNQTyqLEyhyDryDTEcPhVuee9KS4wA4A2kgV29",
  "key43": "3aD4saFzFEwKAMRbaxYNLTLjcYG4oQ4GNtMCx4HDPBsbk7xpjPhtEK1EXHgGVGD4WQRC9CUdaBY4snchRbXn32vo"
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
