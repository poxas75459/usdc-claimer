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
    "5tzJvR4d3XtHnwXwWSkhaaejz4ac5sQLLWA68nLTk4kCeUVG8vZXAdMj3LHGFdumkKW2Qi1WV37YhVzuGYTM5CuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LkWEX6xUHaFZQtJdGEaXXR3gLsWRmzrkthWhset8J8g1pHsuZ9yWN6YPsAoCrsJTEvtgWXtsBwUGPPMsj6KHHg",
  "key1": "GdS8smH3sJaFC18Kzm3PLg28Nm4rAGDQmyPbuMT5XYGhfLzgE6SMUP9Upjc829ELT3pc4GdnLUVxe6Rs79s8Mit",
  "key2": "4S4tHVu9ZTvydYyeFvB6YrrTCZAySQXxJexijEN1sY9qVo6FPbv6acKCUbhEUqjdAj2jgWnpZsRHFLj9aect7qBX",
  "key3": "4ADKwmo6SZxT7f8Fo9wE4i3dYuCHSykp2hTo8JfqVdh97it6aydi2u3viSJwvGxo5oDb4gg4qSbBs3fNw9htAP9z",
  "key4": "2hyf4is8CThvU2KiRmGKczzqMwxxHYHsfntq1T4LE2Tb3ndYQztNvUFhWECa8UbHoMqWNaxMdkpEFMPDAZvz8Bki",
  "key5": "5mDJh94oVYChEPdLa9LMm9u9FMepjtuLo136DY1PWPpBKQffVer7QN34mMKWcTvV3cSkNLUWj6vum5GPdi81jEVS",
  "key6": "2waULeUDBeDXjPSDKBvxYPNLFjNceT7z7Mg3au8RXxjimnyYM4cMRZkf4RcyuqsanVVoQZHsdVeQPBmokVjuAyHi",
  "key7": "4sBkKEBcXZaX2BK2AbuprT5taL3Qx5sGHeF64jHKi49mB5dGdWoEr3hGwXRhPuujLFLnaANHRHaGt8mr3NS4H3D9",
  "key8": "2EzekVx69K5mNhot5Fj87En81BnjjWpBWsqzdrEouuJ7mSvjMezty2j8FCxqXT2aZkBjFExgEdq59TwQbCS7uccS",
  "key9": "2TMnig5rw8yCqAdFwGPE1MZhr9LDCTd4Kgasmy3DU6z2TyvZ9Mt9a1Jd7t9NGsuccoTvMysrGuMC9Pt1DXFcL26e",
  "key10": "4BAuuJvnzs45R4f52H39ZCHHyo7PyEGB7XcoUApQovewQjHaPknz36ausc2HUD8afzH8vZN6CyRhGwFpYNZ7pBuy",
  "key11": "5B8UbN61qYvLi8Qny6qs8197ZLFpaZ9ZZWWe9g3pm2qqWtK8xFCAPGmRgbACFR2rRW8NwBgKsrXd5MwnMrXKWoaC",
  "key12": "2TBTgy8PS3Exdf9hUWbb51YjWkvJSDJPhAmaHaVgh41swwFHAbaqCDwPGhkwbCghjm2eieMt5nnmpqpUuUHdzK7y",
  "key13": "64bLxSf6trpWVxzhtBPcxav7uiobbwvBPVcDrA8xk3X8bawm7viY12BkNKzAWeARWUhx2sggpTzvuW9YZPUbkotd",
  "key14": "46ZtetWWYL5KR6CLrjsUQWfc1GiKp1iNqntcZb1JjPU5TaWA34csTj9nKMT8pEte1PTkWXtLdCN8jUsHLUKZJZSE",
  "key15": "3jQpHuuzmQ1UTJ1F37y2cRv42N5kN5bBvb7c2yn8RHGXismVqCSDcGci4p4GR3m2rHBwfwTLKzwD3chx7MaqzWbu",
  "key16": "66P59bzZPTa6131cxZJDuTqvHe54whAJtKe7WbN77xhLyNzsgxwJh1DgcQhSEJESmC9duBAL1WdPuHDwEUURV5Qc",
  "key17": "4Q2dKxe3K5eZB42Lsj6MV5u1Mz5F8PGBKr4iqcJRfZkjYToNQEpwFhM88Gkk88dkDUWHqqvv8Nd5J4tYTQPbLRRM",
  "key18": "3piDxkp7hUbumVA8pxvqi6Q1kPk6swvW7iUdQDbWTFXDGLZpf3FHh2SjhacXpVt1tGN5jboeir4nrbSyZxzbCAFD",
  "key19": "5LXV7fYiRMcg4dZapiJnqtMchRAVMgCPzkvqRPtiUDAbZbrzp2ZXzSN6LicQEgH97weuiQ55wkDAsLMzgCBakygL",
  "key20": "5aNhVQhtbRdF6Lo6asz8AHZyecbjYc9L5kt1j8WYiVGVu1FPoQ6JChBd6segjhLdDHRKaFKxFvdNNb13SM5TpdJV",
  "key21": "4Z41BL6NK2CaoxS4AcgBfrbBsnhAdUqL8Q7JTzbwE9foDUepWY8rtpAKxucsAKM24cQZ4RYZm8rtCfBBRSLpPWZM",
  "key22": "5csANJGeCSdav75uBMUJ6KuSgoBMHrBfyYyU79yg3Ck8z8avieTnmPTUv1LfRzZY7ZmcJqEHNHarZ1HrHuoy9UQz",
  "key23": "2uaXk7mfWtYgP5KcnV44DT2vgXBbqmmR5BGS5DfBQRz6JstuTYUwLhZujyxvJjrFQ7oFA6UbcwW268afkRPRWyMN",
  "key24": "4KctAuxPKaDWRLALeQQPQFCWG9FAHZBGudMtZWpeD3wwVuvUKBWUMNR25hnx8LGvwaWTpH1N2EYCYpJ9EfJVvt1R",
  "key25": "5eT9yLo8rB9vcqiJRBB2gypUjGm1TPgSpxR1kuhgSBVrARDAC2xcLncqVaEW4oJhbJjx6qF963Wot9JYef81t8qR",
  "key26": "55cMdbtmEbRn9bUSAVNZ1eoQvxJ8MuCkrNKP99b18pT2r1SQ2ps3dtkXKuggDkSjtBD8xgZmpb44J8mUo3zhEbJo",
  "key27": "5xEKNs1vt7uKKgNsTTK7DQQopj6cbeSWW4mXDju4Wt4JtAsAUWTJbHax19y9U7rjfbeXUHANjDQ2UqFYvFu2SNdd",
  "key28": "4WPNuFU2cADVKYpYRkxAkYJJEndynKenishy2YmrxixUWVECSmV5LkcQmh73md7UXPsRgE7wn5h5jMP9uvks81Bw"
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
