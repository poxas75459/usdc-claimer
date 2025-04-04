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
    "z8CHUR9By4f6mMwwzUfYVpkFoPGM1hsbwqpgCTGb1ixvwCCeFmcHFWatgimCtE9hWmqgHJR8JUc8XbkhPnWa5ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXdM9yePDak2wzkkEw4qAVM7bc8okRvZezvSxgVi3XRgopZukD8ohaq4RkjJWGRZWttf2xZZaRfQfBmSw44Jn6Y",
  "key1": "34vqo5nuFy6Ukd2jAEeYEsJSKchZHZ139ZGJZS7y3eJo2aUHtGpNwXnLZcqi1mZkP8c4ijPSCPXXEhKUJ8XVVacA",
  "key2": "5U7Aa1MvdxCsXkjEBwEnTKY9sb1KR4UCxBNZ8m8k2X55AvzyGdQVTAjRcAQt4ethmR765M2dW1EoFWy2HVrzZFFj",
  "key3": "3GPpevwvSiqmg9hAQQi87B7iQg8VbwvvoF8PaBGpHAGvCAE2TsYX1d2fLUE49yEyKNoHhpk6WtzKZYheivPsUtLq",
  "key4": "5ZrjiocpBqvRdWeRs2ZNeUB4duPhxJD2fUgvg3ZCWGmJaw9Ese3a1tXLVv2mhh4GSQF3PzQB4Gkpe1cCSYN5Kk2s",
  "key5": "3W55hCoUvgLmpTwYjRuYaPsPCBF4tQPoW9Mz9b7VYk8hQ2ZiAmr18DX5DBwEeccKGnHw7JpFTvMbXcbJgHb8BxQZ",
  "key6": "5VcpuXuEdpn6qJBSJBEVBiX6VqsD8TknQJe5JpZEjgTiVta6bjnPRDJ6W8Uo3FnA4D5vRwXVYw9PLjH3dNkZ6XbN",
  "key7": "WzWrQdTvJYy6c5beyMQ1PSzYVXCeFQtmpyMoQaboH7kcCdXsBkqTsEMJWTVM7KoiFAFebQoAnXeZ3bXrZ9D7pCM",
  "key8": "43mK6pEkkRU16wC1mCqvNxV6aqqkmMhGP9EBBX7z3Df4r3viRP7XEH5VwMTpGmAy2Sn7CMdjbXrfNWJeah7NFv2C",
  "key9": "4FQqSnQokoGU1vPW2hvc8DBofPBiFqJPvf8HthCgw6dZRugc2BiaAFEFgvGDhPvPYbjnB1Hbkakw916umJDAn9Lf",
  "key10": "23Wbc6JMDfYz8WuM9LdHx7uGnEfwkGGTJEPKcYesofm7r7Stxo3er65nFk1hc3oQLq96kFRzpr5DL5C9m8eVZoZN",
  "key11": "oD9M1m6ktmN8FYm5mgaysufT24rmh1PfVrwRUvQVoUEKyTnufqVk3gWKpWDM9bqTM2rp1LBVJykqjnSDW6Y7fEF",
  "key12": "4vKVHotG3DWrjZ1dQK6SvkUE26kZxpyfs5Ni2FMV1PYnBy3CMDPzDcD4fzbadNe25JnKYPtwYxE4uD8XK2vMB8sj",
  "key13": "4mmResSFPN8SuvmZLiDq17J8PWqqXYUEyxDpZLYgmF3QZ4fGZAYmodHC3S4Yn97HxwUMhgR3TWpHXWnTyBhVLMqs",
  "key14": "4UN9uF3fp5aQ7rADgVG7MBzaK5MJi52Sq1Y9i5pNrjqgddpACkYzgKJCyKjDEWdnSzSzbTzkzumv5TrCjMaRVshb",
  "key15": "4trTF8VhUuZCcbLzZAx5jTUNfxMkWB5zyMmwKCWo51zZcF4jXm91WFCNYdsWg1HBbcBJrQy6SnmxSmXdMxxBdJEm",
  "key16": "36hDHYAjra9FKJ7B3yYDtsFdBrBQbasScx5XLzqRUdmY2P7MChvpMbFUejrQvUSLsQ3vtEoa4QHo25gPm75uQqwm",
  "key17": "5cg1fSt5b8MRDUpCWkFZSFXoPYtumcfrXkKzQxWxukYdbmXam8DCH733WdeB9w1TUbge6vy3f2o2x1dSVD9JiH6a",
  "key18": "4fbkYC9cPyyBTthw8TFBh3aXWLNYBSC8Qh4dVsXPTUpHya7nNCUanEMCgbovJu46egKGJhcqiJhEFiWcrm6DBGAj",
  "key19": "3V7ZcRryJ3NQA6aAyjmM4ddYfLNfvU9skgbNjrsMVx7aD1ZCJZewaZASUtwEtuTGYioUZXf2FDeAisRaTeUYMe1f",
  "key20": "2BcuYmUC6Fu67GnMyuRMGwKBTGJWvDvDrB2uRcypfqczQkdSr27LEFFoCMaNc9cGNccfXkGnm7ZNtYi2D5SpEjr4",
  "key21": "2bu3r3wHMKafth9xbRqcavwt38uiwSjWTKVCFpVMqEiGdAtaNJL1qsASV1YchpJ18xCReMFvNdNqBBZumZiD1tK2",
  "key22": "bUB2dmAAihXynpDLHEzLfnB2wZFiWcpU6tVNPWJweUyAWVH4w2xHoJc6LxCh1LvCULJha9nSB8UZQEFKph9QxPW",
  "key23": "39HpQGZj86LMcNL52U3cyytNqXWn8N7VPXspEvYggEyNyJ8RQzfphinC16Bt2rtmZiJG97UKtWBsWrVHdkrcPQBR",
  "key24": "YwpdfeLZhDvghZJhrpuiNwYmcp8DAvk4kAYye5wBRFZ3AZ3ofzG8fYJDL2ZNRinfbij1jAfi3RbqDzFcP3gLjNC",
  "key25": "51kcTGTk4vVRuaBmTD21bzwGU213CjMukrrVDFpTCcFzoX7NADF33v6Ki8Z2U63rE1nkZJnmp2fuFCr6hfUcTMA4",
  "key26": "4DKT32tkaeAmUP6w427gxAehHHtUsaDLPyG3NARXBvFxFtsCwuY7itd17GD7DMnGEcygU6VLcZNdrRk8swP29b2H",
  "key27": "2LeyRM5MzNChX5BP2nybY8V6pxkDnr5jjiXW3D73MnM8cXkUwfuAbKCT8WdJKk4b6b8SBxkNPPvyhqfd19pWz8DZ",
  "key28": "a1JVdqDiY6mp5yTKmhJTVJiciuCRtsz1sd3k8Tbtsb11aTHYSmn2cQQN2pfFhbehRmQNQjky8irbfDNjDC1oydS",
  "key29": "2aQGPckoRJsFqEgU3GpqEVLMSe7CHseuJHFLSALQoR88PmBuyaZz9GJGt8Kp6daKKB1fEn3GaMq7Dt2hAArjgJpH",
  "key30": "4GsyXFDiinmXUD4YAgD6tZLqC8TLvCYAp2yT5gpdbYcMJ8u24xCWhpy9QM1xPpC5LQezDtnoNHNy6c52UdJci4y8",
  "key31": "4CWa56dcpjMd4bYKzqXA7BXWiBgSYPFGzVLd1GM3HMfxVnEq291yGpjR8R317gxyvu3sNw4emVPXoiJ9Mqd66ipQ",
  "key32": "5fDhrWFhvetX3pY9X4S5ErvvhUprqEHegi6h9ZiYR8kkAHBLPL8BjwcVjjy4dcXpsQPunQkLPMXK17U1NUAdDkVi",
  "key33": "5qgjpHQZZUhcRbZAqht1qWoXU85tnXsR5NQMk9dw2tNwM4Xh3rbU279h2Tk7vH6NMgUKKR3NgrwXM6ziubxAXXU9",
  "key34": "2zJ7AHiFcxVTpsMuqoEubiVsfUQCnnEghGhoPUod9NpenFPznrHsyhCygJcjjrMXCkvSPxxcAW3i2ymzdJ6RTnF2",
  "key35": "2ApKi1soUpCD1nVyKzxZCpJ1zMojk45VpuGhZnee1g1o8zYTiDCEiGarVUwX1Bt6p8kTpKpFjY3SkDLrr4xhsA8P",
  "key36": "4mZbR7sW586BwzLp6phgTBQQo3nHknncheSFWSy3JQsr9GrpgcxevG4n6GZ391bYHRm6sTP8q4xCmpXCRkJgL5kT",
  "key37": "2VwmQVxEXZrEqrCzq8JL5H7m12WT7ShTjopcRdP3MUPj4SprFQWAoPxsmMnoPmuMeAPrq5nBKHRNYzRWtJxoh1p",
  "key38": "3ohCdHtirRxyCxrBsZcuDBe7a8DDYp2q6KQDsUi4MmVHxU3DGXD85ycMQwU7gjddCFAGNibdmDPLhHooHF9juvyz",
  "key39": "4pcpZUEKxumh4xJWKX4eiZEXuhRSdkL8AYDoD4N9qGgKt3PwHy7jvVRvZ1RKrny8KXRR61GKVjmbGSCZCShFdN4w",
  "key40": "8iV8KZQ6RyVa3191pwWJBhvr2ygps2A3okEE8es1FbQHDDELDa75QCsMAFT3tJwKC1sbg9Ny77eLwt7fhm459gv",
  "key41": "eLjACwHceHZ8zGjeJNb8pzqftu7A1RXBVKS9ZqSLQGsow9LeLGY5FU74fNyaqbes9t9zwkRTApAMZYRWNuXieTD",
  "key42": "5j4Xx14FQJBWMFCxy6qQfah3ySKCXouW76xqKgfa2fenj61UvYcFzWJz29vJKJFuh2wq67Cp5G16kar854JvTaq6",
  "key43": "3JqLg3E9HTNphrXWovXGcMTiC25xpJyS6mSLyfWi6m3hRKm5YyibdGJ6pRBrSRwGALfC971c6EM663Q1qvSAhW6z",
  "key44": "5xBhThWnZiVyDrEUT7rgoL2G9wPBa5UQcMkq27KB6kNBoNSEBqTwNwap6NfAc2CZpaoRR26gFmrTK9i4L4EAEQea",
  "key45": "4RtXnJBF7bQBYCB5CBxtyTxbnYr7cngyokgF36W3NxmWncU8LMqYnoYroVtoQHWsxoL6BTWjUa5TS9AybBZz14kP",
  "key46": "3XQAfxdiSqEXpAKoiUouVHdqwFBn2DH8Jot8zxa3Qs9rE32zaEfbvj7UJczkdSEJZyQF4otmaqhWEQpfdqd1u5Uf",
  "key47": "4tD5v29LJqUQ1XSsdtZXVj5BZwTQuwzybp3M1qLtS9fyPLPStAkbUssGrWYAjU77MFagDXMUhGZ2okfNmiD8k6Ab"
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
