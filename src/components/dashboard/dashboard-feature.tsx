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
    "4XdG7eiLjWEkp2tuSyNXvze3dDdff6LvhhVduS82KdfzGaD32FFi5a3xLVRVKiGupPUQCQC3gNiw2EdN9VPEvD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F7Mvb4atWRHFPV8Gf3URbJG7Xai3DLMtcgvz8S8tPExauxdz1YdeDoTpuK7Cc8ZsC5LDv9kyATo77PvXBRUuuNX",
  "key1": "4w1JMmis8GmiKexgxjNYtztvf4YteeHbgZnLD7EjgTwNkcQ4NrsUSZpjhcEiWxAfi71HmaWKe88GjY5ymeccujGq",
  "key2": "5LsDBfnZsEU17KNDcre3QYttBqETEWjeD3zLEv2FEARNAwi8ptcH8myh2VoSTmF4TK94a3Qyi3KQdSjaAU8Havcw",
  "key3": "5gjW4WejTBE7zDNH7QcpRnad3Bgk35xMmhLAEQGRSJ7UhfCRre4di4883b8uQ8jRgz2X27mkVVvRLvArPidxdHtE",
  "key4": "5RAuCLAxqUqFSzsDxQFvwRrCkrGoFdcsVdpxTSZGsBEAQNWY7s9B6xYnFCRxBxc9UpCf9Z1rzUdeJpJ9QBzwXzfG",
  "key5": "4UiS6KZYgMkjyGUJusnadaYbwqN1f3jPxU93CrdfPu4gwiJXrzaDXMidSMrvxSZnghEuiaPpzNa1mDdnm9t4pftZ",
  "key6": "5AyPVXNKKKa7cS5QtDrpgq9jRcGbfximHMrvRyfGmysyxVd7kZASK1Pd8KPesseCbk9KYaDQ3k6BcNCJwKQnvtHF",
  "key7": "53wjxu9BWcGLvNnJDeaZxRX3p33xHhf1wEped32ZCxsrfAdFWPDdqB3mxmn6wmBLxvFWanqTNXFN1JMcrTbr6tpf",
  "key8": "25fiijcsu2E4FzQGbb4NzgrR5wvjFGY3YycTpHyBtC1wMaa7HvNxU13oGYFkgnv2hirCgHFoKmgsJchSyorpEL8d",
  "key9": "4RexL9dYiwfVVJCFWELDyETyiayBCZGtKgTiHprKCYwirKjD4Wr277tQztiqMSednvkLyWGhxJjoNFF3e7UBN4iC",
  "key10": "3VYsghuH79o6BDFM7K3EqBpFhdTfmA6CmMTHJDs3PHfSEWhhygrpEnFxTPtUAod3va5PbDjbfN2HyP43do8gFbeF",
  "key11": "n5jSzVmFmue3az7rwdNKX7LtBr2MGQJWm9ubCFMgWLVJqnKScKnS33fwHogtsc1qaj6jV59c9dGLMDkmZaJSGPb",
  "key12": "2Dddvnp86onDrTpX7332DVsU12a3fHqW8LNfSqXDnn9qSU1CipBBPXVDVNnnSS5LRDdm3ASXQmyn69Aajiyk54hz",
  "key13": "4vEtRk5sq8dsXs78STYHxVvYqXjWtoWrSkTMr6b3mxfQ1yq8F2CVF6HqWgjgfAwyKDnqStKDnq9BFm6XArHHjfUG",
  "key14": "49hLXUabqub1USEb62NDy3aQ8cJe3ePoTwjc8YKx8jJEbGpGDyZ88FXKqbCrSHJsFgvc2bv19JYaeVbmDGhvzy42",
  "key15": "5JPxuM9v95bLe7V82zHSUwLxTjkDKq4Mq1pQBm1pZutfnomGZn4fzdLhEgoeYo7eMHNTHBBRMBYivSutMgWGTwkC",
  "key16": "4LBDjhJVtSzqDMaHLPEAVfr5mBy7Dn7x9KbxuBcwELa1Rp91ZdGyciCJfzSFfeeLsjwsZ38SmcTRwLNYVsdWY2CB",
  "key17": "5L636cMejNA5hFrQswqPemenA2m1cPJRUgHsXveVsh8rhxQ5m9ZywczNNapBqqhDgKWJEYutNb8qKeeEmt8Es6d6",
  "key18": "AjX9BjbHyMWNADmAG1VAu2z7tNv5yQkaa7qfFnCouWrM38s1XGbZ8CXw3jw8Zp6Qt2qP12Zn1PSAwxvFrcjXkyP",
  "key19": "3g7d4sc6MaRaYvSxRvR8W8K6vR1AznE3Miy7peeP5gbK8Wi5Cnra1mmCdXNzAXN8KTXPgZWFMMobC8YDz5bnrPhq",
  "key20": "4hMjLi3NfPHMCvNANVLLJdvFfhTz4szNH4o5VKCuCAUN2awcknG3L78aWqH6PUnAdMAvABKdkQaQWEjJp3K6V67",
  "key21": "5VFy3Ao2U8HjgFHejxt4YjieGM3adg5KW1pXNfT6CYtMhaM1FPJVPLRiQeN8pxcuTzcjY97w5MZ9e6gxG1ddNwxK",
  "key22": "uYLtuYSqhbJes5gaz3dmE9geEmeX5y8igGA7TFfu4bdMwJsd83qvukEQA7cawgDTqBYV7wYpnZGd6ceNZCraL78",
  "key23": "2uTPXu9str9hR73vg6iifh1ftGnRWXJAD2n5JNQ3oRta7A5pTxxEBLGJphrXKWQcUgZ8VxaNU4LW1x2ajvJc4wRN",
  "key24": "35BBRUo7DPvM3rj3xcgm9SwJntogrAkbaNTDZ1yN47DPoXJP38WjLa1ifTbg1FqZnjcTf5SDjd9adhqYFsfWiChL",
  "key25": "2VzBNoH6gAg1xN9D5pfeYQWTjRsZpQG4f4HESQgahX1xYvSzh9dUiRi6GKddT2DuGkYm6aCi6JN3ZtLj5JNMde2v",
  "key26": "38hwn78eyfDb66rtvDvaQzFWgqyqkCRpqgRMyBSbAzUJEcG2Tmf5XoPcYZxShP6WVjLRU9UhZAPaFgs6xGaJCb79",
  "key27": "3jLwbRhfuRBWAyvkVMFhNYgT5Sx3i5iTpwod8A35GypS1rY7oQdzDoAWcGrLFftLVeLTqs7AKwDewcQEeuzFgdHk",
  "key28": "36qqnZoBC4hS1YMThxHNjA3bsXbvQFTSmeCYZ9jpxoCZjhKBPbykUj9Vvy9D1HV259WR7wuzkpmoh699mP6ojVRW",
  "key29": "5jU9tqTS7FR3weKTuqNJftFNwpRoYaU9zWPZYoQt3kuHEpWxRdgSH4e3hiPmeYB5kHsexqcFKg3AW77XGJCJoou4",
  "key30": "25sMjA9xaiasjK73ip2EeH1RQ5Gxws5EDkH3jD7oYurbrdy5rrJgUL4wECKd4bkNCjKeKcyybJPmMEEvcJeW8Yqt",
  "key31": "33REzVLneripvSojB2GsYajWwE1iEpYNzSxUuyeG4kUpgP9cwHnJJ1LwqiiVY3iJsB7KCt3pFfBDzrDHk5XcAZHX",
  "key32": "nzBw15qy4Mh9vzvC3up1HDFpoCmwUZpmnwYU7gqBWi9tSpS7drnzwdaKPe1CzwBR8Sj2P732MsN979SAdHnH7Kp",
  "key33": "3yRcpDpVoLhCBdkzRroEApjxoEduE62ibciWdwhe3jZnqYKShyA3sGfbwZMqmwAr2oR1yM6VEMz9tvQfyLA5TZLu",
  "key34": "VFfW1gpVk3PM2Hzdu5JdFtxTjxNRDPTUhKUL1iEWDJG7r1Bh5W6o5UB7uLsy9MUk2eRmt9WXiygitjoHhqsUzTx",
  "key35": "2Lxcjr4aovLhfeKhmFse5k4LA9EBsduFkHEP8pUfi7U3g1mJauKD7wE4HTfz2SeV64ShJ3zLcaGmzLyzZWU92KUR",
  "key36": "2F8cjrRa5cTN3EEHe12SyeB4p5bw5iGrbgn9yLadC1jTCLH7T1KjD2EGJM79c2yb74dr7tZjrkFE54JW5qxXacP2",
  "key37": "3xKaLF19rv7FaLQLYMwkqWWMaXpxDTVtQ7emQAdAzEHt2RYHZaMqsHJH36K6vMqF95jHb6Qb88jPmeDqLJoUweVe"
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
