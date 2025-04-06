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
    "54PDChkyZDD4hgvFqh7RoKrufAFo1LopELmoGvK5Urf7kSUP7GhQdYUPgcBrWJecaYLhQuGwTVf84RPi1KeZuBK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586u1qhnbqgeWnbAAwUYvviDnhSBJAYBBQr33do7MJSdzE34b3rfKco39xzmxGa4xyNbzKY6AYa5pJzcxNh52vaW",
  "key1": "5xuoXmjapC2B8FG2KzC5fDAxVz98ABJCkjNV4rvS4k63GrnzFmLgYwmzuWC5e8FjypG5cmgDyjztQzEK5GfKNG7j",
  "key2": "5UQiGFD1HfqUkh6zKVqeJ4aBJfqwWEu1c7ZKvnLivNXbnpKCCK128Hiq6eCRyWzN6xUDMCinnLZP94qLJyjm3Pn8",
  "key3": "2H6dEYgqT8PUhjERaTGErNF56idCNfFfsRhBjWbidMZ8Nst2X3DHQXunLGK4cCBmRBXRDoWhptW8RBvgyL7dUcpw",
  "key4": "5NKw3WYwdExdhE9j1172WaBF5HmfDzQQyRGGXJ2oxQH52uRQUpgYsSZDjjd1sgTpLYurD6BSkYr2wDBZMFVuCqZa",
  "key5": "5TvMbQZZ2M9U7gSUa9uwPmomHFp6yLJFHDonSiLpUTPzdAqSBNsBanVikXp817w1zV2z73DG4iPE4XTqUVfQxtGZ",
  "key6": "4uShRH1XkTetoMBwrC6n3H4W87krVkxk2MpNMQcLr7voQGZLcfy6sVJxEqEz6oLFSECW2GWQUM79nmrZHxyEL4mN",
  "key7": "4fqhLejBa7ZGGTUDs1fZpxmdoSEUcuZ4N1xKn7UeYauDYPJ6nmRauE4N8CtXKnkTPm3Gr37PtNxSy47r2fM2nW5r",
  "key8": "56qXWx5JJ4kk7vBoNbg6wb72TpVKdooutMM4SkrJd8Xm82iu68GMNc9qCnjHYMLsXfaZj8pBZJ5KwCqjNdzLRZ8f",
  "key9": "4qd7JXv6hsKL4wrUxVAPZwi5upSpD3WkKdDG3XcFcFpFBCoKWZCfSaekFVCj7bu9yNGMg72mVR2Aqkx5KfSwooAw",
  "key10": "3dRoofme4Bv7hyQS4bCTaJTb4LSThRQGsGQuRY6k4FqRGCSycSGMN6WhvtJG8zU9yBGPG7An6etYL2VAQunzoTjm",
  "key11": "5emNmzRdCMeH6suSSp8XqSQ9N57WVh1vCKyrPv2q28Sg8VjBrHa5fHjukhsUt3qMf7YiGkyXrQkqqWSoD59GEsZF",
  "key12": "4F77hPb1z8EpfWEmLpE4dm1e67f5wZMQ5mrNRx6tJzJuvikoyS4TQXMoNUSyC6reHnDNyyvvMh7Hca2NC87GpVhy",
  "key13": "5SeBzsQfsGvm3XrDC7hgXULxY6UGFPcJFDoG46xvjw3aGuzjVHyyrqA6ySc8xxiQaoXdYf8dkRGbhyhLomBEeD7e",
  "key14": "2v3H5e43eQ7SArUdvAXPx4dJfzvtW6XreWTkWKp6hn4D1DgYpzZzdeEDPNCseHcXCMuXreUNwA2wp7stodMMB1pj",
  "key15": "4uxPDp6QExDnJtzs7AoKZhPNFaEa2M4tvmDzhzy3m92sg3EtffmHiwCGKrZsG8BQ4DkBaKxqX2iVomzFPxbXsGq9",
  "key16": "3iAvwAwiW2ewXKkYsxbdedUA34dWu6CTiCSipaxL9Xwu2tLyaGEkuGCBouupRMVaFWdFJUzvbEcSWgZLCAtaozD",
  "key17": "2QEBdXzeodUWUWSXuW2UBaCYQfHHUzocScr9M1jScFyaxwtKtf9LKLwmNJ6gAX1hrsCEzKu2x28X4siMkRgA4sCf",
  "key18": "2nP4tVNgowuGzCEL3h2Eza33REU4ArAsjNSLoPetZZJEuD5qL4fbRXS3Rm4niPsZZd1dsvJcknYjST51rBwqxwVg",
  "key19": "3CPFJQEJjofVjwAJCeGagsoeayEJQGS3EMuhkqp82Ye6ryw3JnRLnsBZtdzDad1xPeeBzrpuFxNiN3QfSC7BNxEb",
  "key20": "34X95mDH3w25Pf9gHkNBmZSFyxokq5GXBYxEqpHynWq6uv3z32qSBnXArNuCJMYF4DvUhUySq4gVrowU3JGehAGm",
  "key21": "5gkc9aY49ZCm6ihtDLBhbweD7XkAuiZpm3ChRdKgWHfDnLsiAPEE3cMAtWMiNx1b6g59MRAnntMrFue9pdddHYEN",
  "key22": "XaBBAgx7SGvGp9ZCtkqtdTZ3mFEFwHaL1k1Q8xRKZ9c9ifgJu4R14NxoKuT4ST5XssNMZC4J6Sbd6QbuVax1xsh",
  "key23": "3GMsJD1kjbSVw5HFycsxCWvnx9j8Y9NeMYRABBA4Nnx8FBLPwwvDikYuMicmtruTFARtkuBmP49QJWHpyjNzMKkF",
  "key24": "3X92rYPx5GbAn6zZcKovLTffPzwNakHxPTYmyeiH51ev48bnzmjd1QZSd8AzFK58G4TFBqiSEkpBvNfaGDMwJGFZ",
  "key25": "5PaE2AMQSuubLNDg3hUXKKtpcoda96WFsnsjg3gRHygSATrMdWvq294WSVy4wixeCoS7fQuWHwepuW5fieVcpHTd",
  "key26": "64ZkJA6MGsQPQS7U4KgKPTXfj3HmvPv7jRNXrBfQPzkmCdTcqyyLDyRS5zLyd7qqTAzEp4wR78MYULCf37HdjtBu",
  "key27": "4YpmX7ZA3PYuJHSatsTKkD49V9QU9E7RvMqV9cpe2D5eJ8rzgQVxpxbGgUcy52pzVzUJPfQHB45ZsZdSYbmsFgNk",
  "key28": "5cL2DaEfj5xfAuriz6HW4xWtnn5Qvry4HUnxtfrwe5YAAURVnpiqTCjK9zXRkEHAsK85HAZLfRnzeVnYfpzn724e",
  "key29": "4a4CwmdupaktKumwBvBmMa9U7aCJoqyDY84Jgx4R9tCz6dkKQJuH6coDKqr6qHRvDJyVsG7wSuEkiK6kUXCV1PwU",
  "key30": "3FZswZgnBCzTMj2q6MfoR4UjrDgBjXVDHGzoVzKjfvpcrbmRNBGLHvtutNsez6Vc8ymcQvfuF42hqQ5zLgxSuJdB",
  "key31": "5CANqiFWv2RkGut2VyibZr6VoqWGZR8jFeFZXXAjZFhx3BwimwvZRBu6YkSeRSedb9XW4xCmc8rpAD7A1B1ATYbH",
  "key32": "5gnLHPUTWMYJeyAEqWHeb3Cfn1JtdegPRU3eqL1nUzzjBXCJMEgWqny4YxQYpR5YvkV58arkaXZNGVpwxq4H3En6",
  "key33": "4JSwmQFDgcmV3djV93tA7UZgaMv8WGnh2pAwhiCJLQNYqAjbKCnKdDEtRdz7gbiQPxEm2BWd7hxgFJpr8Wpz5sA7",
  "key34": "2oqZP4ehinDDrdkVxzeW6r4yp6PfNP8A2vAF6W3SMhyf8Q3ELd6nJWExFe41A8WcJ7kcoxdcqitKeS4ew3Q72WWD",
  "key35": "4UGqviTyEPCK542j8fz84mtWfxctqiia1zTa89JEHVCMCFwrUnePiCoBsj4b8jarubEx6RJVernLFEkRV81d1eSt",
  "key36": "3FoDQDhgSqX9qd2aMu644MMwJ4zztRGUKofBQnBDAiQyrd4cem5y6QwN87BcBH8XFniaReDR81Fc952m41xCgk41",
  "key37": "5rAtb5z7sNNsFEQbCh5pBGi1XhxPsrp8h9KhaatMfyqv3Xx3Qb3hoaxPJnHyUmFQohAcW9JDTjiRHvchSpGdZb1G",
  "key38": "tRJZFjeKbnJFBLPQQ1YhHvXxEmNj2QUUkXiat2ZFMTagqGB8yjgACEzDbTxazAJFk8RfaXecPyJGnqKKnFWcKnN",
  "key39": "uf9NK8RRvnr5XvEs3V3v5BbUzfG2T55Eceer4veew6bxetENoqvudmXfogt8ABR651qGm7dctkwZABi3foKHbFE",
  "key40": "4EN5ezWYje8ofQkejBoRRWEUhuuiqJN8fdM9P1uxYxTprN1DLGBzRGFUERXMaSBTkeuVcz6rAT7EsUk7nPj6CiKv",
  "key41": "3MiVbN8gcTKm4c6qeET2XgiqeDbhL4vhhKSUVEVTctdu596928UHf8VgzLwV1onKTwKt1uXoaGrbQrMrt4SW9M6L",
  "key42": "qfQw1ts1SPFMUZmUUt2yv5KHpyuGb9y4Cvge8qgQGhroA5pCWRDxW3xCf97ftuZ9XmEJhThzaZkPgLpfLLeyCaj",
  "key43": "38xRcqnv3pT8etT8PTDLnN15zsqcFTk9asQDvCaKpvpVSd6MHZAAW37qM2Lgm54HHjeGJDA5SedDhb2f8BUqFWSZ",
  "key44": "2xgZT55YHQ3MJdeAUNGrGAonPy2WCw639p1ZimAmyipwRWxVbm6HFxeq5EsqJGXcNXvsHHV38RpcZuiY5fRBtVjm"
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
