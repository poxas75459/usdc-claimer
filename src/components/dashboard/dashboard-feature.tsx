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
    "23TJroMFJ1FhHv1iD4EAgVghJ1qw1QZbn4SQUnEhZepUK4BxbM7FcBSYVZBbhabue2iqeSmrLJEMzjALLbdipnJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNQNbwmTcuehMb1QVd84ZC6nAq2DgwqvbVmH5xvv3a7xibvVWq35JQ8WB4dY3K3uYfkqceJRPzMFnc84Crc2VHq",
  "key1": "67EkH2nJxUDKoRtmiqTQisw1hedVkL7MHNRUDj6Jbd5bJkWM8enM6d79hGqxgymCWaaJES7rruE8PQSP4wnFpZCC",
  "key2": "2NGRtDSVWSjEKSn2EXL3TmUaYeuNErjQA1Qf9BphLQA9tMP5fSQqgn3y2yFWgw6SmMPSsZWS3CjqQucyaykYCDhd",
  "key3": "2rPUBFd6wskqx4L4eFT4nYAs1Xj7QD9dp3eN8gMaPmuR22ZJ4Ji91dKWevsqAE92HmNVP1pneXsueEen15SLAZoZ",
  "key4": "31WHcYPDnNt1xZWhn16BujeJvE2ftYRghwduFirvapDGuYbWkYnjyPKB6eXB54g3m8UjhtNnCT77XfnZDkYt74Sp",
  "key5": "25qTWyioie1tjJ68vWMt7LF4Z1jyGdYioTzqLxGo7UJDTmCg5QFHokxmPRsJj2BSKNpfBhRwnrFYUHGM5NEWdJzg",
  "key6": "2Kg8YFkpmnVnpbxB4qem51d2cPxNvAmLm5M8rwXXMd8SEkGMMYdoiue2GXpDXzs9V7CNbLPQ88DfxeXHuTrwx5pz",
  "key7": "5njxoTDrpMXtJzyPfuZKFzVNcKs3AnMgVnphkgfEXvL6afcahPtcSW8hGiG9aKBazRQc9rEEhBiPvJMiTJrpozMs",
  "key8": "4FRgQ5N7fb7hUCoPfoTzjVAMebTphQLQZeG43ipoEDTLbFPk95qQXJHsSs5Vwbgx5Ces7mJSDRyGLXGUjheQVP48",
  "key9": "3R5mK8wyud7R9a4s2CiDiccGJBVc7mAyT6NvKpX6bo2WL8Ra2UJZz3DQusEMdSsLXKHzXFoEBhHK9xFzmxg41mko",
  "key10": "3TBSxsB7HLhLQiLHR9VMdcMRAMurDCjoUc1RcAzE5oixMTeENcLgPp4kEjrzutnRykde2FJ6DJb8q9msYPCiUfyr",
  "key11": "4GDbAb1RERp2AUh34WESdLKmLD6Lz4epYMf3sPNpyFiQHA5yEHBb8u1hwcBfKLNWF3m6AvJ5MfUJU5Pa9DqD7Mk9",
  "key12": "k6D3LnxtqnjDZiR4eFNbZwv1yFzjrjocwrRAy9F5LdEzd81Zh4fsF1uKsNRkrshkdh65ZXkERKkmVvavxdFoCaq",
  "key13": "3V2qPuHpkQZNG8GiDMBJiMdAFM6oXpLk1bMpqGQ2dm8RTTnepcoFwnEf7hsBYLD2EqjdhQncK1ktvynSEAFfPgAm",
  "key14": "2nsdCDBQ2bK68BPMo2uroxawidvBikcKkWA7rh9MRNC61ByRZ25VZnpVgYsHK6SQUfuzB4FRBpWJ4GN3CK79ypiZ",
  "key15": "2pc3Xfj2mHDbS9SKMkGNGchLxfvcCcXc33zbaAhFc6UiZsRRsUzWbSQP1yu1Q53rDLJEH3VCQP9Nmqs5Kt8h5h1C",
  "key16": "3drCnTwxFm7fZDAR42ctYfTFp2ktDdMKyDQiizMM4WNuTYMJo7beNekaUCVXzPqMzYqbdTpWtJWYKDuuJ8F8TmBj",
  "key17": "3yEwYTWr6M9BHdSyKZ9xZgXppKpKZwGPmGJ3XGxjuZTJ8R9u3zeDXA5vznkU5saA4s6pJm8MUD9B9K4NZMBuTxGd",
  "key18": "2mD8vf2W4gLTVf6TVbKNpJPAGpG4mE1yUtmsAirUVRNKKUcCmAu13ndEypxoipHbcubTJRfzuo7dkUDRNWpweazz",
  "key19": "4bdxwobMxxCZ8FVk1PwAEAj1yrJCKnReMvL1aWHuMCT8TpBnqYd9vGJ6pYCNFraSafi3TCLM1ftiHwCinezLrpgL",
  "key20": "4gmP75fkeeXj51WTVnrm9J1N5CFq2pTxLPa8zt6scW2uMfAVD2tiRW5Z4Rgg6Lj6RhkJsHAGtZVAUsexsbsXNs63",
  "key21": "4WzDzKkvpdWHysKgxb9FCuLXLDav3ayqBTpaoFvwdasSRLL5CDELEeqsyDT76rD69YzTCwhEHf2skEeWK5zj36Xr",
  "key22": "2hD1nqACZhuDdNupFNYHBo1nR3rMA8x1kNtc9AS62NKecAwVrAqnTwHtfa2Lifr5PWYafJEkEBfswyLWLSRAgQKH",
  "key23": "4rBpAkQW8hp4QdWDcFWiuicGYEa2upss5NrjHPfVh2MyKrCzurgV61kRofoL9xgmWLAmKP81phZfhVT5jabRBJB8",
  "key24": "2xs9kWZgTLUnqKJ7NKM9sChp7ZmhUwdN3aSVJfJ6wtUdeLzUV4SzEPZYYdf52RZAaq7qECEYi2mcF6BRypKn5W1S",
  "key25": "4NKH1cKJfcD7ypVyq3iAtEy5oUGg5Cz3EZppAKCvcoc9YSZjZuWig6by4T3c1eWjx5vSyKx6UZmjmK9KncGo1tfY",
  "key26": "2fKSD1jrVNX6Y4kLK7e9PhUyVAmZ5tpWyQwsYn5joW95uHGwdj6QqwSyTFDkhxYqVjJMPsdYxRFL5ibtUXhtVKuJ",
  "key27": "5zsu8Y1gYBZ4o6utdZgozLFRZQpfFWAyFjo8eCH1sfoeoKZxjDCqGp3UnMfDQoH2dS7QQ3Ldptc4zP1LDS5WKHbb",
  "key28": "3c96k835mw7kydtGMwokrjSbKJvhFNDvzwLhejuVC1xAGGwWJMqhUrumb1x6Ror1Pm6VfF63UJurx8NRtbxjYHnq",
  "key29": "CmLtFNRN9UMXRcD3TCv37YK7bHyn1betnsKAMWk2HJRvuKRtAcKPhi9VNpFye6iPgfuf3STkBzbnvSq3QoJBJKL",
  "key30": "2K84yNhRgixCeazcCaBvcb3Rw5fVnpC9DzsqgqRy5HtD9FFFLgfqKR6jf3vrztViG5ngvYQCiy8hABgc4SvpL5SH",
  "key31": "2deSKBAucs53oHru9cx3skCefHU6XaUN3T42pZ8ANfZrGfyAzMeXJxkc1EoF75FpcRZEqFkUcPzpjT7UchkcdWzD",
  "key32": "AApybVwReuQ5vzkKGDCo3ot1eAoqeRdU5GesNgD8jNNQGyghUAEwAjo3awLTzRoPrV4XnfPQAd9r75G7hwCrQ3p",
  "key33": "4EqMYg2scLU71Gs1duKtGfQD9RJKjRydaMsPSs5NtttVnW1Qr6uqCDpgdsGQ3jU6h4uxiHJyz7oRrcGyubJ44jWt",
  "key34": "4nqjbfwbSv2Y5hMT6gAaZyqrcbLHdHEbChBBtGgPgYTzUEow8BfTZCjVmqPHSkSAx6bLNza5phBfVtVcxzcR5UFq",
  "key35": "2J2ox7YPX68CinYwQVtytH3mc36siWpjccagfn6RdwG8vgADdozLsTCqHHypQfMjKVrHog9qqRKoVFhxBxJUcRXk",
  "key36": "5HKoDbxjJjbvZHnDzor8xSckx1jhAzHXSKa2oyhU6YMv1oQhfmkPL3XUpLrJcHLyEvFZQJuo3g3JzVTtZ5zq26nL",
  "key37": "2WaggtCi5iG6EnDKibEkSGNt9LSSREtPhnmgX2TtFopryijCUaTPiVFVLyuC2xWunNoJUosRrFsW2nCY2bQ26rbt",
  "key38": "Vgen6FnaiDjziTtE7CnzZvBThFoH2uNA8XpenuYhCHVnCDPsM2mY8hNiZXvQNesET2pmxjGb6aRoYcNxg4hMTgv",
  "key39": "xNdjbjWhwgStkVpNqxywbwLQ3Cdhw1NDn8fMkR4hGRCWs6wVnuvPy7k4R6Z24WxokR7iftTsmFUexwJwj9KNe7v",
  "key40": "23tMCsa9xqFy7jTn59LnjB8tnNb4drWdn24ifoby2yQgDkUARMajXxBkD522sfVDdiBuuqsSx3wkk9Dv1tCU1BbS",
  "key41": "3N8Dgd7DTUvGcKgASdGkVe2bC1GKBXEcVHDuYVSJoc6jtYC1Pewzps7YowaEiCKoP3RaosqV583tqT2F3WoCquNv"
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
