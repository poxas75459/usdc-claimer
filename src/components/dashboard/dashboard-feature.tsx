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
    "2ovuGDnjMsDy1iiibdtCDSUQJa6GwYdREzB8mF9dPtfk7aqR4ZXXKAxj9zGnjoj2yAVw9PBdwqb3bPoh6ujD98iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxpHhhwRvuLani6s7KtypsqngHoErinpbCmW7cxy2Y53E9KJuNFj9kcoUyCNRjnrsynPncnm8zCntkfXnLd9oF",
  "key1": "57YCknZJ9JpTDLcU2HecxCSKL1DTujs9AQLW9FvVp3aYrMgxRqh52S3ZfLtyJqGzeYJ5XAa6kn7f1HrSjDF6kEs8",
  "key2": "33HC2Vup5qS4kVbyJihTuNT23YcgXbHWuKQSJRAcqxNGCrKdksPrAKohn1pTizz7xmRvoYnnwH28R8Ghf548aaJ9",
  "key3": "2tE14iySqgGXsUjGUZ2AvsrNNzGHY6vLvZ4Mdwug4zhQs2MUtZksRhypkDKbzjT8VK5K354cAaQGGSVfxRg3Zttr",
  "key4": "56ojxXTjNBDneFuEkarkjGAZvpvwWZLRMRq32FKB5DEeQ2o8KhALNZA6HiW6n9GAiKLZRRrvBrzMioHd8NnYMemh",
  "key5": "WRdKivZDC4UebKXx8c8BeXxwCPrsZovBaQ24fBpWtKAWLkJ3WDhopQFJviGdqJH7CFeVFHDShzBofNvc23WRzeB",
  "key6": "3EHbYqAg7E8xkoh5rZVeg5pN1XfhvBccXpVMz9EgKH54VbcMUMYX2DkbTLAtGkYyCaqvqh9uqduGhL4UeehBMCp5",
  "key7": "5B4C6nVHPEXPZT9CnXMJKZYSuUJUJJD1RgqQXKMoQggekxVDba62EFiRLDsSwJoyt63QwJnYLEit1jLES8wv1sPP",
  "key8": "3gP8ACmgcnJPq254cYGXt8ovzBLhFVjUst676NDjy3uLX63tQEd4wXUL5hPRpBQyGGhQhxiRbbFNTq5axzzgDHps",
  "key9": "kzF2EmXCwXuNcVdAHScXNxQrhxZM2qev186hmkAD2yE3KDGX3BAomeAGa1pEE744FU6oLNpvP3YaW2Vi6gp1xCu",
  "key10": "QR8ZgnNwk4Lv9CGRiQvootpbTSZXFG1GAjcGXEqtLqhk65M9TkxFXNJA84NAggcphA7nD6CLgb5yfSh4g4uFYUh",
  "key11": "2hgbocFnezd9jNH3iCHo68nD6bN5gWuwu9WbNtMYJtyka23wBKZtuDHhXwCKL2KoYTVC52ZFJm6QsZLpDciA7jUW",
  "key12": "4wsWgzbfU9w14aQP6u3iFWYfsckgf8ZifDgwdYh7FkydewNdpGANbDgiAhgGFo7nVcrKHZQz4WSu44KXYhc4HEa9",
  "key13": "8kiF3mPGPtbhmvw2TQcZhm9MujxD7xo1qc3LUBmVAhqUMrqsy49mtZj5MhMJQdtMmbMYXFxo353r5VBBY1D1gxJ",
  "key14": "4Qc55C6hdSJNR4FZbrP8Nbd3NJBPBEZ7JxcVXfEqmfYmnagLyzHgbRQke58LcihBMqT3ZG6AnF2Z2qLk1gPhKUVW",
  "key15": "343zJovuFiRqEaWuJRLFEmCzReHW6SapwC9VpYoqTQE1LW9DTUgjrbMwGZv4UUAqsXTLpDKUrQrkUrLHosvoXMBN",
  "key16": "5W6GyM7suH3VSCb2ozEvAf377c5X7AaDxy1hEsUUk3kxm1pk8CS23FTVc1QwFqFKeAw9skMonQdZjPgHxrWK5s2o",
  "key17": "4urxJhGLsSz2ThjrH28JgtGLd7yhN2e8iZJSuYQLEpnbG57K5S9fqhQL2bm5TnVHkYcLAT2NFwioseU8nVa2nWfH",
  "key18": "2xTzTmdCYzhKHeK5xECaZMWpdd66VjjDk2RwsTGeMTprJ3F2BSUFHWKj77LTU7yUY1hrUiR8pe7x7n7357BjRnEp",
  "key19": "fcMQMVAQdMBmKczcCkaKx3kxqtr3nmTF5pa2ZGGmd7kDBAHn4DnN1sbVfVbSihcz1pBPYqEk3z3fvoxo6pKrZbq",
  "key20": "4MwFdmG94FU9iGhXsYo9qSLAcm8hBqmPubSpMF5qquiWhxoP9XsVYFkbNsu414BHfSNxzxyorUFKkmZTZUYwhngA",
  "key21": "4SVrrSqx2Do4V3awT4WtFmSfhskNLGsZXrPGy6BbDFiFV953AiPXZk8UPgyAgsLo1mM2Spshn5L3SwWuXEmtwzL",
  "key22": "55aKsrnnYu8cdaFCiHXwekEy5YPP1PSeVfR2UgiEqsWfMpt8sSx5U9htpUYx6fPtsPn3MkfLrr5jwkfba8SNdbMQ",
  "key23": "5gZ5S3GNwp8RUENYn6oxXBZuUVFM2Akwx74PZJbb2jCiMLE6vg21yVu5NtJoKP8Nbifj5BaTbEop3vUuBvmHUTvd",
  "key24": "4nfRrnBP5tUFXW61S2CeUQCMjkbmne9stojt4oC8iBBbd2dhh5zp8GJz93QvFUUXqgrfHg4PuCr6UjPqJ9gj6KPK",
  "key25": "mWiSSzCyKdg5KVpAxAQkEJWyq649CbVsJkKq5nFxoAjPuViseSB9mDtmNbzNPiW8DhkCaa87yajweamjAjE29Fb",
  "key26": "5kWo9CbhWQE82iCbTM9eA8VaD2QdFuzF8jMdXPpvhAWoBDcR4Eujo7mVTttKMnhVWkhmRqjxwyqigPc5DJUk83Cm",
  "key27": "4zsJVX4vVBUeLq8H1ev3KkqrEFdkJ2cL1hyHMW3q7QYBh6T4rr68iUAz3YdPwQrEyXVsRUM44efj7v9KpCdiqj8C",
  "key28": "44B79GNsZkdxri5LXDW6qNHD71Sc1AAQjPaY5ZX1ZEtS2SttesoZuW8a5JRjrGtGDgvbR66TGfMm5FgJBhemerRE",
  "key29": "4CTeA4PCoagJu6s4D71PS8qeDnZTHbSWR9ADzoABm55wUCtMFKrVXFb6yBgzvs7MGJb5HZuXVddWfCG52Ja3s2fC",
  "key30": "HXL4QAkj4xyECiFSMrDrnXvXhdkwNxRcS1FCcPqiHbmYQ9WpwYQu3QfWjriLiiW4v3vUtda4cvs6f6zYyTs5SJS"
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
