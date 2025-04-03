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
    "2M4ZqhcXse5AxnpKseqhAnLxKXtZFwqCPsdpU8Rymfe4ojqe9EPWax8P3AjDYC9ivyrtM3iagVGhPGfeuKUA3v4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCtXdgZuf8bM8Rckr3ZsqzHdDFipghG4ENFRj9tH4mQW8arBkWSjWiKANLAyRc8HpZWfvRiGL4MjDATzYrApAE4",
  "key1": "5qVKKQBPa9Y84eKByt4M2XcmSex4pC5vgjktuVZUrivcdjvQwryn77u9K8Xd7JzhkcRAr9tyuTBGxc5TJThU3nr9",
  "key2": "48FJptwyDTiR9aJkegsD3G2YDxQA5L8MuUpEDBT7YXgKMYqTbmoiaqZTuPWsJTAZwNVfpvZdLfkMBrztqUAzgL1r",
  "key3": "3zLh389TpFgPUvstE3pSPWUwiFkphDStZx79vwmMA8YVj21Z7Qt2UGasXK5kRFuAf8WrQLySR7BLJ8pPC6kYZS2u",
  "key4": "4xBwGaqcJb9hNtUCrqy2CHrY5AeAbcN6K3xncqALWDMoWiU6ukn8a1DK9CJgvfuN9JfRB8y3DeDfkpEMQaGTS6VV",
  "key5": "3VR8F4vpRLGow8HHsxx5DjCdALHto4NhAde68QYJ3HTYyEtRoXzMqQfttVywApWtsFNArhBx8TSL1XpwgyhQLCfT",
  "key6": "2nZ3k7o2gv1dRxpzsk9vEYDpPF9NgdCofGb7bzRJsdHGZoFNxnnP3DmEozSUoQY1HQ99iYz329GQaT8ybTT2yjZC",
  "key7": "3CFfEiCoWTT13teXvDAUxj1Dyt5eeTSTmCRa2KtoKzE645ZTAiiBZ1E7KWxLNNYPuHUxctoGDXDuqxgju62iyfXy",
  "key8": "29mFDSHpdMCvFdHnCmXj5wALFhRut7THcR4a2tfe7iouc33vDaj6kzBzprsmJPd8iQQMY9ZoMpMzLn2SXqhEKc14",
  "key9": "218ESBvqAZfzmen57aUFK8MddGEX2tkirWpA1GGUM2gaR6ffwRNz46c4WZpEHhd8YJVXRGajx2uJgrcqemDujQKu",
  "key10": "a1Z7pf4yVm735nhDKMZZfDvQF5pXzguM2BoKffQ7h2pA4u84MrUaUC7rNNvvSTwL9V1vvxntUjbJXXzjkp4EMqG",
  "key11": "5FtEQJj4q788m2aTA5TaLdeNkBugUmjLysDjhaLSkbiZhXHhV5fZBQqJ46zaCmJw1zoG1MrqvJT3M98B4bVTQENQ",
  "key12": "d4FwrUw2ZPDgURaKgpgUFWZmiPUS4ZBj6UK1CeGUdERg9jtMqnDs8mkMKGkFjGLsWMGG1LSpW3sNL684Ri7JiXd",
  "key13": "4VyCUYs1reBwfopnWfEjR9P8SKwvaK4xtt196tMekAZTUEHhYNiyP4jPs9qQzhmaatwZxCsSt7ufMKyua42GgSsA",
  "key14": "3aHZLA9413U1cFT3FBhhSsPiypx9foWmF3MpmNAaudoM7GeY8gpTrXwGb6Ub5Hy4qfLgcnPiFKpZ9wtWbpfRDwXv",
  "key15": "44VuuQXZkDg5yacBksFum5tSrSY33h7AvQQL79jjLen2223drABnzRzPXwRz4YhngkXymKBzDeURU15gwkmwbwhW",
  "key16": "5uWjFg6uYtFBDaiU5jk53nxZEFkuSuedSpkePnhsoYDVQWncSAZzNxpJE8gqj8dD3EPFbwSFitBT1aDsBr5hmha4",
  "key17": "4X5n36e4YCZ1d6yBpF1Bm3DxX8ocHgTmKzJdWtxQou3w8DRdiGHpQcM1zvAoLrgny3pqnzhpZoTPwWp7C7qyUa6W",
  "key18": "51v5jesrZam8KmaD4F6svna3JHTgMzkq3QZxKEACsXTvWRLwnpk5PzSJHhiAGB9dRmpVNnnaCreskH5kS5dJMT1e",
  "key19": "2FTLZwHJFHzzE5uCTtc1ZLLnA4HyDz5sw73tEspMZSumupEUZxRFTqsdmSgCxjGZZbKxL3QdM5J4CGMHY4s7mY9P",
  "key20": "4yDN2QCqsCQP5TLJu49DYQwbamJFKcWPhMWTnJxqwwnkLhz3W8aykC2AEGoVGM5w5SmfaBveoHvbFYyFVjC6CVbQ",
  "key21": "4D7Fo4gNRjYijFxR9iwPsVPuKXm79n6qjygtohNFh3KbpkUDJ9Mibxh5ZRF92NZWBiKvNsnaqYHAL5tks4pio7Xx",
  "key22": "61mpBrXGW1z2QTAwi7xkzZvtT8CTSJHS27zNhC4FFaRFKMWBru4VoECM7XYo5baCajmnGyBvgjLqVaysGPiwaF8C",
  "key23": "3Z1DkMoNJsW1C7J98RuS9ABGRMPAY6uzubcP1LbN3DMyAhkfCv2mJwpouVqWX9k7UF2ETtcWuUtLTqaNPx1mkiwG",
  "key24": "QXUB9Py23ZrkFEYrBP3oQxGw6pVP6VnPaBUUkoRPSPgUWmKM5hMY4CbZAuyBm7NE9ET1s4Afy54YsMni2zKujLY",
  "key25": "3r3nrGvV1jRYKcWWJi1PUKPbD3E2CXwHjETqAa9FCNajBqtiDRuMFjEykof45VQT1QwJvB9XEzzDGxzWzLXX7osX",
  "key26": "ZcprEdSoyaSFm8v9nbsF5WLeYXhwzdN9gMMPRmcUzMV3dHSSC25XHpJHrwVYZXsoXPdBRHL81Wmcvu3dxSrDwsX",
  "key27": "23b41NnDJTHjyCtngEnmT6vYdG8sE6RU4Qry45sigeGo8DiewGVvGp3ZVxxjvn5rugE3yYjtBcGofbTMEdnNkCmu",
  "key28": "L7dK5MuQcpi4dLxPk2vLFdBGZtrZLi66YmLfCNFrTizeUcm1iXfDouCHV6stKfLFpNye4GYENHUd6CVrYqDycmz",
  "key29": "4hXmZ98NtRpLJYP9rfxG8uJTrMG2nvFovacgACt96novdkySmCqW5wQ6c4fgfLCCAfm3E7zNJRSPMaZhyXZoXdcf",
  "key30": "2dLJRJZDJPScqp5DPUAgEpu1oPzbNEbta9uS3AudhRm1rPyhnRzrndFkmjJYdScYUa3j97SNkp9NJmXcGpoAh5Ga",
  "key31": "3niupRp9T5wZ2pgDKmCRkEvxVa71jXddPcTXqHWiAj4R5qiRvqBvRctNofS6nbcxv4GT5ZnrD14oRxsPwgu73ik3",
  "key32": "3zDRRCXGAPdrcLV4aWa6RdjQ3mChw45raUMGSHWiYr1ynUbKEWWqAGzU2jgnkTZMrENNnEUtcnLYfwgTxEZHwcre",
  "key33": "3TFoE5ohhm85mCP74WrVGBDf8y7mcLCBaGK7Z8eQukBLnprg8KgyBgKquWMpLe5izPCg3aq8RAQaQtuAx5K2VxQD",
  "key34": "4R64gTbZk697dk7afHD3gY8NHDiwHfRCaYm1oJDLYKfBLjJtWpKAUMu9ayEavoqcyfB3fN7M9Hee6ijGtznFRxcB",
  "key35": "4qLbqkeTaZMkz9UFNPjaLxvzbf35Qv8uX76J8T3bY4kPBEumquZAUfMhHcTrnTeatKVGPXKYrG237rMGhi9xEHnm",
  "key36": "3TUih8Ck5HDWeX6vGRuLNHMqqtg9HmcSVLv7egAYPsYx5Kq87fZxBYM8RB3jfNGCnRW1ama1PQiL6iBTYvhoJB6V",
  "key37": "5iF4xfAUn1n5EzTKLBzstKVeGcnCura6vbGM4rb1Z7JWRGufsB5NfB6v5jLpKmE7cnmUhfJu3wAaajwSMwsHqdzh",
  "key38": "5C1QfbD4zLGeZ4bZh7GQUWrRtSujBD1ScCbDQfQS3gd3hyjUKNAagq6jvjmRQYrtT3yX9LaXr3U9Px1tUb3cfEyu",
  "key39": "5C3Xhik2tZh1S2Jdtq9GurBwAVAAB9JJsLreNdNdbH3EKjcCfkhNU9w7FWYgVKcuZHi9Z71VWTHdzXDiVhEBrD5U",
  "key40": "32j6YxGBnsvmM18igFhjAuxN1d9kryBuMCtx4Y5m59CQLsKdRCKVqQoKJCpbNEyrZ6bQ5UYWw9xGy5Wj6nimFENd",
  "key41": "3jcdY2hF8VmsQKMzJDQ7kBA5apnQpC6HTXvMR8bpex9dbdXfg41peBAGPMubyhJTHR54P27ooZ1CDqwnoz8Go9H2",
  "key42": "3Ck97CQeDaV4dyXMRqx7kCDJvaTRoXGRjBMCWQqDabi4jTR9REKFUcMuHQkkZN5fXQsLqbD7L8J4NXqqr4T9RLPd",
  "key43": "32DUux3XQmzRQAVbJKCDqXrPGob7baQgzeuT874deMARnukdNHsmrTu1vJxwePhf2AACmLXFReVpAzscBcpjeQ8P",
  "key44": "LQ2cLNFVc7idWdcaZC6M6NDAfaBhu2aBj6kKpyJoVgxBtWA9iKoF4P6KH4p5KN3FJB5ePhEqkh1t23ijoA7xF3y",
  "key45": "5HPp7G6ozqeKNTckQmudigDmNqSjD74psp73sibppKN7R9vetsSAQFwYE9ok5y1ZRPaSebfyAPKTXEotfJTsssAc",
  "key46": "8AEeUYBwf9cZ9cihf5RSLf9tscXKz13YVBS9PDN8KfqL3yKXCTyGeVsK8UdiwN9MMpasQQiqpxKNndmrWvDGSPa",
  "key47": "4ZGkEi7PPD9iwTzRpbiJWddeagXdtrkJeGogYrZXqW2RBG2qKnAar6fuH12vxQ35scxcf6si9UkCLJr2ei6swzN"
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
