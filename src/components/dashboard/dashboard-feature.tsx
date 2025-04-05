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
    "4L32RrTASykphpNAvwb6Gy8cTQqFhJiyzc4fBAhRtxu9CrMabtpArPoLjFsYn6KWiNeuG3AcT7VCgzVtG5JdeupM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "spfDu3chbGozodHdf8rr3BZPFkXzJRSpvQGW1Ao3tGFCVbj14A7iY4y5mGFyNoLqztsjSXQQxhTTdwajt8qexwt",
  "key1": "64PSD5QqEYeGsWgYdjDVf5gBDsSnhPz8qep2NCbFGPhr9D6GUXaXRHtyWWFQMtKkCwJAoWbm6D7TL2cFgPhpAmN1",
  "key2": "62CceBnjJUhmCt5CfnSXokmSwswSWR4anKnDen4F6TmS4p2TkxGk8wVdNVLxdV1CRchGbxUfw1KexWpibeVec8SX",
  "key3": "4hao2zxD5u8ERR5LuSt8KwrBtuB1XD1VpKtv8heWpfhNQeKqUhYeafwbc9EUsu6es8KXUesn7Y8qLEtLTYL21VsK",
  "key4": "5tp8YCnwVvPchvHSAiNvuGHbnYBqJLE6yvN51NgAUNpyuGKiGqumxTa7PiWDQE9FrDKaEVVFPvTngiFbtikgjbLg",
  "key5": "5o7mZS7z9xDZ3RzPXiF1vqpQ7DXQMQA16aV6dPdPRy4nbm1HB8zqjMakGLsq9UKgVEN6o1iCXMCqH4aHPvnQ4XHH",
  "key6": "464dwF17LrZ3yJ9WVR1ecRrQkjm4ns84Dzmgy4KSa5pZSYknykfxBcZnow7zCYXh234FuQxWu1Z7sFBw8xSMVgHi",
  "key7": "3wjpKjHG6jFx528NPpetWMmFdPuSKgzE91KRDCu6xa999U1dRTVfmZVZwtnYHuHFogCNW3ghuLvnZDT5QwJmGgAC",
  "key8": "dZabjdS7pzn7VTZjdiedB7cHbfGcnD5t1Ao566wkPLEe36P2MvXShwYv7bkgNs3KnaY8jajm9HtJ6LqbgDRm4vo",
  "key9": "2PJuqSAP3gKNPJGLGVUp5eQ6eLwPgXDh5DsFznyv3rYmqF6b1iPZ5i5P4JMLNtEn1zFcmU9aronAfCEubSxPcxpJ",
  "key10": "5nEiVwEvC1W4YmRreWR23Szx9p5kSjjQ3FK4WG8Bt9AMzEfg35UQojSNNb2ZyL4rrTejnzZTStYQqiq5bfnRYbTP",
  "key11": "37GaVwcphWRp657RcRaJGhRa3n3WiapJmrQ6i3iKXFDhZrWbSyKi4oLMnmYcVkEHz3VJ9GopyejtehG3Deg5pFp8",
  "key12": "3ZicMSTG1REM4L6ShWvCZxrJiM5Zdsiu3mSPE8CC2pYuvFFdyf1XSfW4x3g32GR6rwrC2fASBhXgDemnDWhvHuM2",
  "key13": "4Dw2CiUSWLzxhRh9p4rsbzpdt19zJz4TQ4LNGh5Hx4QM9UATSgobVNu9RzVmUkx1Bc3X8ypqNyRHELxnVuoHaZ93",
  "key14": "2VMrgYQA99NHRYRPwn486zapMPgKsu3MWeteQ8eKNA5BcFeDtFbadC8FsuFCsVFs5bmXrB2uQj1Vw4rEsdvK8mTf",
  "key15": "5sWGHc4mmS4aTG5Ho9vcGnh1VUPUPHD5XKLPPaRxKDoSunKJgQNoU7PGhdWANEi3rQ23DTmypQwSgW9xX5W9HqZp",
  "key16": "41NRmeqNQ7zBuA5szRqZhjG9bVP3g1REoA2d5AKdA2hT9XdqaLCbhMUqQMxyA99D98FWwDcpcQdC4iQ5DPSXW6Fp",
  "key17": "ty7uqM3PcQQb4BMpBC7Jy7Jwt4wvd4RQkqcZfRkzB3fY3enFEQV11kh4hRNJ9kzAWg6dk8UTWbcvxSTPFPjHgpP",
  "key18": "2c5XTAz1pq3fQiVdX5V2ZgvQpSDRJhtje1AZuG8onzP26D7JdxUYo4uUCTSn9GLUE7UMaPFjXF1VnaeJJ4RxpTsx",
  "key19": "3vBjLCXywPHuWAbZoH1PTX2wm8gCKKe9E9didzphroWQnXKz3KJRn8Fh9dQ3mbx4reZYMXWbaLD6G2d1cLf7db93",
  "key20": "3tAU1RSTn6KzeznmcWpwSDA1ysRyFa2LJCaEG1GK1QWZEdynHWVhaLt1uQ1dkmmB9aSAcdnkRB4SEfYdkpy5zKt2",
  "key21": "wmv485MZeLyApjVXS7ndQc8xHbqd3CP8HSC7agqYSz2k5pcxgmAnEkac7ARjzdm2vUnEwgBVJ5ABb2kypWonqWa",
  "key22": "kQdjSmeG7YEHzpWtHWtLEyqVEid35cpTsykFMij1i5w8aSScTWJUZKgd1AoFDNUNVKtEvieXe9z4teXQMTKUL9r",
  "key23": "3CffCgKKYxU9tAMNtMVgtRARQMeFMQvpFsmz8rgoEMmT95ZZgGUSxJ1NgQzq6yMCUmsFR5aBhpHDfpkqaL5xMwd4",
  "key24": "4U6zb2jFTu7vVWf3nLri5pNMVpPjJbKzZ6SJvZU2J3B3yQ2zZk9sQbcCuim7aNU89s5jF27hfA4ARPoCr7jnVQH7",
  "key25": "4gakS849Nw17ktRo64u4YBLrkXYSXLyTAunwwFHY3sWa67m7mdSwshHUk4ycvivELgsBQuUKNraUe7cppmrnpt7K",
  "key26": "4jTrTEr1dBtTWjMMQeLN7zLPAfbfihd9rRBurisk5sWWAdZKPgHt7xunNWwMjAToRtuAzSsfHbFJQ8UqaNsTp2y9",
  "key27": "3tKgZKim5Cb1BoJhyzN4v4Tumh8sCx2U6cW978kVAx8LhDQDPbescXQdaAFjibKXo3y5U5MD6yYn7acy6RJvBuwN",
  "key28": "3JWjeAmHYRUp9fmDDvrqFGp1UM8JXQepFERiV9AGg9h5TUg8L1NcqtNj1QVQp9Qx6jRT9RtiUavpDuWLTnAQCGhy",
  "key29": "DMYbaynatDV4kXZPMtafYRr1KFsy8injdLgkKskNUZcGJHGve9qnSZLJSwQQN6tpa8NZqtWJZsMrhJtVtipLvfU",
  "key30": "4TnGhiLxSTuMRngWRuG5zJhaDA2LeVHTKbWteKE16JTWqHcmNDUieCdTLBa9MU11EjFjF5fidPsP5NQM8WNVyzF5",
  "key31": "5QqfC65UKqcRWTHANYe7RWGBC8sQcHxpovS8u49xamzV8GV57g3sDbcRPk7DMs7j4U35QBmABM3PSr8Zp2xX7x2",
  "key32": "3nayMjCXBxnhajk2iJ2YsmBdxsQ5gXqyQ98vWhJwkdVdWxeUXcDACNxuX1wKRQLiywZyhjBhDpEvWBNeGUcVKcC6",
  "key33": "254jhKQCquKYeN5j5m9vm3Qd1zUgnruzSEfSnCYF3FPZM3tvnWHbeJ9cGvjstAhgTfN1ShWMtscFQBVA1i4VaUaH",
  "key34": "53mT8brbLkSWYST8MtB5JadzhAP6JUHVvT29dPNNK3r3cVNaez85MRTC8Y5Jkyoxby2ZzrKWiQNHL6G2ym2j52Ho",
  "key35": "3qatn9RmCe7DdVQfbN5bEmRVkeg5HD9ozC9mVhvt2KesEfT8TbwM8wnpjZyoHP8vZ2dm5k78SG8CFTPAwh5KjRjv",
  "key36": "3sLw8dJsSPRyNTZuNHtxRHCaXAW9Hc9VxyGyckczvJuctFXHnn7LpeJoSbRdt3GJRVnDf3K7wfLKjiSHnxj5BTzg"
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
