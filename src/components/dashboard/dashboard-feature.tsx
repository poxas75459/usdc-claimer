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
    "4voM4Hx7QjrrfGarAiSEY3NmNDyJo8a34PLGDZQ8Mi4m7LLaunbZ4FST9XEg8JeY7ewsFcGuiCc3HvtaC1SFqrzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nZ98bmoykfzo1YfavKax69gTcMbTt2zJn4tJwUz9CvFbdihmK5kEZHHEirjLubwLMKtdyeWESqhtpxCkUugPCH",
  "key1": "2p6eYquLNuB9qGv25ZwhUotJgJhtc6XUm6FLpKjCF4eGa42fyVN5aG7uN59NAmZwaDNXaBBAw6b67ZUbPmESABz8",
  "key2": "5fqjqiuw45rna9zfgyxMqjqKYVwYgkNEXhR4QttefugokpjgQAAre1PYZmnaHuhWHZsGu2PSsQJeRHG3mKixKzyN",
  "key3": "4JWFQMHiwYirMbJmz9GHbGTNjz3n8Y1RaMinn5zydYyobQWaub9uXk99xhRcY2v5oqRDphRx9DM2d6KjzNR575JE",
  "key4": "Avoqqik8Zt2FQizyj9UkWThTsDjKK5jopvq7HrnHb5hAebTSYYLFqhkTS8MGtvyhp2F8PoLfsWJg5wzGqJT4AU1",
  "key5": "4GTxUuAxm3dWrBrvDVcuVHimFwZ5zcGzWXsg96HJJMvhfqhLSJLopdiKJekiWgTwfvM4Xqn65AFsTkXBBJ61LWKy",
  "key6": "4c1dQK5h31hPojvVyQSLJXKZiAZSnbFgqVQCrgCV3QrEvoHmfpSDuTLX8bL7g9LQe1rTv6fvUEz4FFJ2kv9cYH5N",
  "key7": "pYdV38pvKjXLxJPnuTiVzsXzPrfdjJTWntUTpJtxBQV4mMCQZBn5LVBE679jCoh8R9x2wFwWwQaKYm38qnLQyuf",
  "key8": "5NX5BwxQksZGNuQcrFxy9Eh5Ej4oESuFW2gDBHebu9jJjDqCFkTvCZ2j7hB8e4tQt3BBC98TpgxYdjp5nMhiEoMW",
  "key9": "5Z8ntyugeRw5AELm2bf4Tvecs5cSVbhoGE7xKLKMPXBZW7RQW3dhQzubDrestnyoJuvxXijB12tGDfTf3XutXrUh",
  "key10": "2w4zsrEntKZvTMn9jsXMRDz3udUG7G5tyBAXXggcrRLDEKLAk6z2p3FZpEAwAMMq9aWNzuyB3A1dAuh5CDJPkL6h",
  "key11": "4FFk2Qc7JsA8Szaa3Bz2CtzHAFjh6UHgaX5b5jFY2cX8jy11FrXHYVMrLkXm6tSSCXwcdyxsNoastcENThSho2da",
  "key12": "5tWV2LhaG4yiTNgZwuNV7oHsA5Dj3k2bHfoNidLDpBSLh9HQjuHsm1hfMGRwvzVfVSwN3rADRwaJ9gz6VMqHURFN",
  "key13": "1UfaXndvNVtuviLDUQ4txEKmA33PUbT541W7GbaX1ZbfHqLArRY2RJAqHtGJveEEz2wBu5yxmNbh4VBFPAY8oxW",
  "key14": "4TMcq9LTEQLbUu3iyiVJAZB9YEejZtxifozsxMXbBedzMabyCK2iZHxBKFM2aiJrMFngpT8ZrWeuxCBNCp7wEcFu",
  "key15": "3o1xa6YrWeiAjLgzHo4g2D9iyhuNw2q9paPnsnbRyNmLA6xmxSNF6cSs4Rvcngj8NqdaV7xDwReQ7wVoNgisdFn1",
  "key16": "FdGySWBnBjS5guAr87QPYckETFjqr3SHoPbSCCjcunzJArTaB3UwCoKkZJxybei8HqaeN2BjtyNHWKUbEWrPL4B",
  "key17": "3NJV42vTL7os4PfDnEteditLFiM2fpG3Q3Fy8XLtXq49CyDdRbagdkPQuHUjVk7SZK1QJiq4McEtHG8zEak2FpvU",
  "key18": "3wmPEu5xrwDSbCeDKTpdyy8VFkJhZitGjfFyE5UN56hSeiU3Y1TTo8JpfnWhGnhEKD5uwyAfEvRQuTKUnjSC5m5E",
  "key19": "2Uti6jgeEQVYjN3Zo87HNX67mehjowk2ySaRyXeZnoshYN5RAzh9pTnv6M9ij8xpd62RaSJBUMwFrfjccN8hpHpa",
  "key20": "cu3bzcmV6wNaGz7FZX76eEvbrgvLQMm34TKvhytLQSfoS5ffJFaBLfTEVhZEgVP8GMzzEGmCbMSWj3SYh8S9pNs",
  "key21": "k1QRPag1szkcEsoJ9dY1DqkXSbLfWQuLHzZ8a2yEgjQKk2XYrgBqUG2urda3S5siksuRAZ95LAUkJgPQLnoX7sA",
  "key22": "3NuLHbjA32sKDRkdYah8dTyvPrcz6AX1HPHqqhh9ypBNw5zmyYFZp5ji7BTnJDqPHTTtpAinSaKTWTMDmwiC2Nvv",
  "key23": "3iPrgyK9iUTeHsyhDcgaq6BPMkf3ioSNKSEwTKXXFi55HfqgpYTsutMW8urQjoBQ9vzZ9GLm6A5JxdLjKShgDbDX",
  "key24": "54kT2Byx6wKfA59XibivJpYn3V58wivD7wRp4uTXg6jqAgxEay12V2gUFqV7VgasXCDCKA78Y8T2XvYuKhvU65MU",
  "key25": "5utBBDB2cb68koA8ADcURgu4iTCoJczaabjaQwfC6w1h2AGNtCdtWJC3sHbLExUGLoBEfv6PqS5YptnT2gGyo6KH",
  "key26": "1g1SyV8abVHy9XAaz949fxFVQc4PrXqgsHBjxh2sqLrZpN6SXfJzmv7ae3Y4vr5QxQRnEhkawprkHBWb6anHkWN",
  "key27": "3KmeYGsKKNm1skwsnstVED94pEVEEmYN6L4XdkDdvAkKQyZVpKZDNRVBnCAszqQHzX3x13SVAfJd8HHLNLvdy8cz",
  "key28": "yeMqYFJUEDQk4Z1VoUaD2dpq9464RHzSH4A5rjVJdWWWzUcGd8jUqgoZawfyc6htjmcVRg487GdFQQL8mxvzSTd",
  "key29": "cGUZLQ7jQYh15Wu3xgzYjNK9tXJvW1vMWQ1NyrRhnMKXRNqJAmsHg2gnRASqTnb4jVZaqHLdSwDhtGgwWdw9v1H",
  "key30": "wGwDfRZeyQQwt68vJ2z6H8oSdESJhJNxZCshojVXjjko7Qt2pKPqNhovibjmjYocC6JRJAdPz49jcPX3Hp1LqEo",
  "key31": "53q4DJutToJ63tpFXca7gM37HBKZvxELAUzop4d9xrzwBszgH4ET9L27c3VCDVjyCaZ3zNs4u5wqWUxUfGt3RGYm"
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
