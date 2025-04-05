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
    "3qSJt96GsRXvc74PdrQLKdvpFyCUv8H1qFrQQEtpQ7kS8k7cVG6rPgMupuSNXmZDuoucUo37LEwu4MPpJVbkGkRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xwxs3iR1FFaurkmrDQoBUogWvUa2C8aKCweYtjGNzAFk4DGD3PwJ4W1BpHpi66aHQXLrc1FD6s9ZSBBMuoheJE5",
  "key1": "u811dYN242B77ZoZeLSQWCUJmskYktrqhzm9r9GzBjTCbGKDkmNyhqBTxXzx5Un1CvwcZtRhFEvUXbA3pZds99K",
  "key2": "355VnRRm73udNU9AUV7oo4WZNpJXFsexrrQPjuinGBMxD44jnQpJQkvbbgMd9nZThLKPgA1wb9EMmvAEDr8qQVmz",
  "key3": "4kzgKK9PLN5c59YCcf8uuuSx38P2UfE4KkDt1zQhAKR6wb8h5D5RDzwgBQHBNipVusZSucxQbtj9rbGdSwD9d5Hj",
  "key4": "4uLqKWYjFr9BX31YmmaKHi1dWYCh7kJqwnpZa75nPZzhfkhUSvy5kjCR53ZGtNonZpmTkVzHypLny4MfWSxN5Cu",
  "key5": "3wNGrSdThHq6zbRvL76c7eh764PwoDHzA3P9U6qUHPAaZ5AXmFyGvdsuKNDrqMx8PCFfGyPRDipGgbg857modpgc",
  "key6": "5cEMbNxKSAAPKetXWLwxJGmojnBWrMKvMVyfh23saxZ7fpKin6zHk4PKS9pgSYB2HM73THuSmprAfGwyVKkhyQu7",
  "key7": "59nFeugyAcERQJXbtftbRXDCcLXLBFunboLMhDHgisxdxUiVuGaa8s7MGH5jxQsiUZBpX4UfonCr7Ut3pooX8Ksu",
  "key8": "4KySJEjYyLjhTZZw6QE2uStuhskRWq2347vfAjAGxxp2ade6BHTqmYAs44PPCsAeFaX3VPkUnR4dSuGutoA98NN1",
  "key9": "5gdu1Ym4BFd3wHq2oLiUfJy7YrfY6pCyrxnxzyn1p9qe4tWJcKVzJ893DviGVewemNGQxNRAJF66uonQdiqThVYp",
  "key10": "2kxyCR9kLB8m4z3BNa1PqWVozdppuihKQ5N5pMTNDcFNmY4DHcq3Zy7QVCVBobcNyyo6yKr3gZuFkK6gxErefiRi",
  "key11": "WUMXfkDswhBEdQBjiXey4CPEFf9825E73oL6T3i91w52BD9eLJerynXvSDKTdr51xbK8xtMUmgKjL5MxLpLM3PF",
  "key12": "39R95dWwuadbC5eYfiivJT3sdyv5FcNaWHyhFV9VYmZsQrxa5ww8oymwqwDdibSjaK5pKak2tjUhxP7qEnB3uTH",
  "key13": "5J9duPw73uZbGCymT9o6qNcL68CzMXsq7eTpkPjV9b27Gk7BSzBnaNyxN24yE4i8LajarpsGntxv3bCyipyPFv4t",
  "key14": "3J9RNy9h8XgQfdcPKXbF2UX5hqa2QPCQQZdAkxW1xAz1LKqu7jtdQHpy4FXt26WEL5STuMjzurFsonTGmugGvV3x",
  "key15": "4GTuaQZXhUaaFRv4PiB8C2Zz53bb72UFw5A1gsNDPDU7SmnVd2gN7cpjZRqfG6x6jLvwn8peR6wNbsKocKsJyagj",
  "key16": "5iUfMJjFwd2645fhnXQQZTY1D8TbL1iTP6yFbepB5paLkbwcYecpVaCQdQJVyoevL9cue4KjfJfiLEzk42WTS8TA",
  "key17": "5JckFcKN6MaYTsejUGmQiKWSpmRZCHye4UaKXdePnG1F2rsnJHyERbkzq4p9CmPHToy34iGKTGGaqz6wvfndzSXR",
  "key18": "5BVvd5eamr1LhbuuVzCm9KEK6dVX4gshDq5qfTedMDd3BMhquNiZVhySJqxsn7dVmRz8pWYNsy9scHrrJUE55qsN",
  "key19": "o4nThBgzQwULMU4C669vHMKLyXtDTBLYEJ3Ei4GmGX4H82eJjqJ84r8DbNa46TmTG4F71yVMPKwt2JgzANmnJwx",
  "key20": "5VB1GVpGtAUqHrUdia2vxt6meKCVC7xfrs6779EP6LWzoF6QyTQgYy75LBXzxQpb8rdzKPtLX29FZZY5VnLaVypS",
  "key21": "VVA574KsDHUF542XjB8taWJzHykE2shDbVFbpYV91Mi9s8a5aK7kPThvxWE4WqSiGzYU6zAp4CiNRojzZVFGkXp",
  "key22": "26VnNAzywrkzFRz9mMG888ZRKQtCuL41QxXGcQrk9AyAkvtGf7tb8VdgKeNDDXHNMhwDKdK5SUEdUz8oNUK4ZdAQ",
  "key23": "4HdF7xM1v5KdSHeZ7vc4LdS76oNTV753cHSgNDJRq9LUh49WCY1uSNAr1b1EBx4iTDuCDkGWcCkEeCmhLFCSA6jV",
  "key24": "Kt87mwV92k4E7SZqmGgkfUQGMB5sTMBKMqg4Yztx8tJvgqEjRmLhkwf5t8anZhDUbWNav34ghCjmHUNtB7PpjzX",
  "key25": "2JitPUi3G3af4qmqLWoEfWVXbYHAXqkzNE6LhL2JXgZ46to8R86qyoVAkkKPQXfKgnzQfyyyxAnTSakVsuzXt6Cj",
  "key26": "4NuXYwnxXta2YoGEP75YMUxtGtbYcCughVcPxLGC1vgkwyydzg1xYMh3Ha6rjCoNAANuzV1fsFmhtVDGUsYMPEcF",
  "key27": "2LZUwxaKwnZtkaoeqihT5kHPrnxUW6VX4tUmRHUsFdry1nayQS6s2PrQdFjHpm7JaxVR1Ho9EvDm5gLRUJYUeCRH",
  "key28": "3J4q89Z4Gn8judLurtxnf8DSzwjP2EQDqshZtPBs6GpDBcMVYEYCVmZc8L32P9gtc1QhYZSZ2Dx6UacP5yGSvM3L",
  "key29": "2a4G5fyETmrztpkSMHARwEFxK9bQvqaZiqQ1XaqzG4oinQ9yccTshSy1UATzzAZHUz2CqH3Bkpf5cGPMd4xcYRGV",
  "key30": "3xuJyTQArYFjwSwMr1U2JZ8SVcagWeE4G116tAcmCNJTbL1VuZDuDK7cMzRRNQLAt4t3UCxVs3ERWgdWrhZdaQaa",
  "key31": "2Lnea2KN1M7wxnZMR2fPa2XBmfTbrqQBf8ju1j4qXYcMEGWhnmfJWbtJbrkGvuJHm6VarYXkHN8nxYDhnktTHnMw",
  "key32": "3jDdLUqnhXJVjdQijJ4kNxwUdn4rokTnoTE1LRAEUZJJe3mShwUMeNY5usScmDv9cayBEZk39gD6XSPH53rrc7t5",
  "key33": "2esR6F1UjaE32z2LuYkvnNmMA3gofzv9pKE3gzGrxCK6Wx1m8qy44QccmSSMY4ndgRnhB8XeDQH1TQ4Dr7GenRWR"
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
