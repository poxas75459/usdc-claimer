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
    "3KYMoWFsdFHz2WsvwRH6DeA5Ss8c32XXnFruiH7MbFwCNWz35KAU3auUYpVm4Q73fo3sC6KcEo7KEcC1MspfzCuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xASguhBF7uzr4buVG3g4YBThfFA9QHAUwNqNUWYJhRRJJERYSGNiikh2Vd2YxEwJQmPTrPqR6x7zqnGs5YDUJey",
  "key1": "5fcK7CWiwUGXC9fQJRL9nBRwDvbyjJtDcqzZiETELJmvApqReFTtPqReRwfUZtq6HEffqzzo3RjfoDs2r6ja9cHQ",
  "key2": "5hXrA6AadrE9TvkyGioffco2tuhcgsP1iDpC89q7AWEd6pGXyqNoMkG1RgqEvkyC3ecCjPncNi5cyqPMGtxjzWGk",
  "key3": "3kdd3Rkkgi6MaFzLSC16E9bNArJcnSeXAQPXcnEVDRRhM2MGjS32UuDxKwGjY2dN4nbkfepcFWo7UhU7msmtgWVc",
  "key4": "46qckNHxSpaXUX97Zy35xDA1SyfPkrdgiRqLV7uWSpcVMT8Ewwr2T1xV7qpCqRAqosjVrRwRRYRdVfvX75t2gYzy",
  "key5": "5GE5MMDWMEMM5MqkqHzG1W4fRVDJcJSkX4mzKYe7nnhdMXjybGJZoTdLfG1bhyBB5udnzB6rtZ8vPg7GhkR4MKFF",
  "key6": "2SHEarKt6Dx7kLVTUEGdvwz7QKdnzwEPNBH8TQYxib37bCv9s5NWV51rKt4hxLYUYEHbHWZVnyRfpPgFFGsHpWuE",
  "key7": "5HCETSTyEcWigLsmEYi5YzJQGikgp6KZnKh5vUNCibYavc1dtHZ2wmNdLaAn7VTugzu55sXdMXmnobQ9RxrkF7vY",
  "key8": "5u8wU78byiiVyNxzX4JNPKM8Gsb8zVm8Q3iApfMAb2hYUcydZsuidkzsRNPzrFSf4jHhP23GrDweCzKTZMb2PQ57",
  "key9": "ncqUkXGfjHEkZXuNFNhtPAT5vd6YmWYhPqCUJQ8S7LGviZgrk37LDoWkZ3e1a6JM3weMHua8h65EjWHmPikykpV",
  "key10": "56mBEdsHMZGiKGLzWejoaaviUV7CLW6Um85rgDe84kbGH927TfRbkzXsJUd8nmunwJyFKf91k9DFmpCJ16FyMfGJ",
  "key11": "2tVQcS4byTpRmT39xBMY5UimBF23ZNVSU8Joif7xyyinGY1Jxb4KdWs3LKEER2e9Eevzp6UR48KD5igQBusbmWTe",
  "key12": "5m99XXMaNN3wZddni73dFNUWxAd1cKcBdhxvbkmR5JQeHTtrHg8rKCVmgNekPw6LbSRp8qKpnwKnNMisBF8r2ePo",
  "key13": "4zRUhZDi45WjY4bSu6TtoWP898ayQHbAMWBjETy4YjSVqhjy3oApP5tp8D3ftrYRJseCfTkkvBpgKR3iU65RZZBN",
  "key14": "2nFYR9SKj5NZn8mp169ktCFBAXLNRQYbjGeuPr1nY1bXdY2gQ98T2fzD6iAiDMGJU6FKNiD9wqxNjMDPAmLtYqSj",
  "key15": "t3KCgKdWGXiPkDjrw6U2nvCUnQhR942AABdBUPVYBfBhw8wudnCMnc4xtYcHywUiL7yQFJrETCLoSeCSKgkEGpM",
  "key16": "5kruCiYimNQLSWwbMVtksnBGVrHZFgiRZ83wAYRACxmTA8NcAoWLSpKuVok9cqaYXmTH7GyBCcf7opWq2Y6ADMU3",
  "key17": "R29iZn9vxLqKCTEuqsx7cWqH4ZUjGd6eJzLU1xpmNmis299Z86c2iExDU1TtVEgzyEGWjveTNUhKRzHYgVzj3sT",
  "key18": "2cvxfdAMoeAExWAY413dRnEM1GKtsthmiaRi7gGBsZrR1fsA2DKPBd4Y4d6fbLzLh2YayA1SHXqY7QVeHNCsVzgd",
  "key19": "3eRCxQfyfaKetzv1AAkoKJxMDn711CofJbMaoVaVKK4V4WfkMLxP3JKTMYPNqJf3HsSs2WMbzj1175ff7Cw2KyEY",
  "key20": "3ueQgtJeDWhmDu9ii63T1Za81x43eMMgzP6GBpQV54vtd4jD8SbEnV5BhQQv6X8oAq9C55D5NFTXWps5vDC1DYi9",
  "key21": "5ibRs3oC7nib1ge8HLsUP57NUWCBzKmAgMvyk3VdKWbaV6xHsCvDgqzAKR5dZRXPkDdgBe3y2ctvEw3YzSuFMosc",
  "key22": "452vmcaFwxp2oRhUn3BDQ4LvLsvALsPACGSvdFKAhhGXM12gTayYqZJGyNTyq7fqpU7cruowRjyrvVBjgAhWibfW",
  "key23": "3uoLyFiT6XfzXT1cP72WiMXAea8Kzukr6Swiapzt7KkW469L7bkVJpywLroWfM3ECV6NypnyBvinhXTHduyAQpXJ",
  "key24": "41PoehcpsZmU4YsQfXaQoTqHyWBQB5Z9qJrvRpXsUc99RGioP1HJ3YBZnbhThLLuPSVubFEBhR1a6spVQGPaB6wv",
  "key25": "3gRTwdhmJtYUrMozacrjBiBCEyFHHqUQEHtuN9j8gcVBasDRHgRMmR7qmCaqcMaof4GQWrxgzeioeH3NoKhy4xQS",
  "key26": "4mjsqgbHLjhRFz5vEHfp5F6v5DQDYRbWYHJZrv3JBsV7A9QF54DPyT82svcj4w8bTiLiT4ojL8EPShnE8FLAi5XU",
  "key27": "5rfsJJUMMcNBnSzBKpqfnqRFn1tkiEv5L5XAtdnSVMqXsYVpBao6VUHa1UuwX7YgaoQcKGTcZmgeSSPaCCmWwzgm",
  "key28": "so3Kn1FTZ8E2jbXQpL7SySjUwr9AprZCvdMHZsByWzqeNTLpBDHUUupmS9UsqafU6jVuEcFsAw426rCUiNETtFU",
  "key29": "3H4AmQpa5puBuAKnB6c8E2RXUonBu7GNMa5v7WsBMuAoZ6QphDojoDX7v5oDb7kzgwNbtmG9VtrcifexNPDhNZAv",
  "key30": "5z5Dn1m7v2PNcsRAkR5GguowKDH4unYeVtwQ5QMepSahpM8M3qXuovvQ4XtA8dqhVoJY8gG7vpyzLv8zXcU3BqNz",
  "key31": "A8rxKmrQqX6oiZNPiscEQAJadTdrpbXGwfTPBdXv6dFMTQ48jn6hKvTvK89qT7aXCbsARrCnRJoFws1YrX7gRAx",
  "key32": "5cj6eA1CNDk1MBBPUhn5oLVUsWW53znR1NDcNXKtYvkhfDZKcQitWx3ScsLGRCV4UpwGKRDEkms38ewXkcGUzxHv",
  "key33": "4PmXJoeTm3A9rmKETKM7S5qASxVJ5BjPug3cpAmKhKwjh6EsFoEavANkXYFb6R3fKaaaptU8WBvRLNGL8rMwrkUn",
  "key34": "47dEsU4vxmtw9TmijdiU8zbQEfpcvSyPCw7Tz1j7L4RYQ4f6RAWogUwBi9QXxJyrDPkqp8jSQVN9yh9sqVcPsnzd",
  "key35": "2rvE7W6nMkz5bnse1fYCcRcRaDdsE3YtA7gMPvhJpjwW72cGv7m4gW8LYR7dAe8uKfWXDQ36KM7HATZ4kYCpAxhf"
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
