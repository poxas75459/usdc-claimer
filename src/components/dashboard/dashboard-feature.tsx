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
    "u3PZW4E1xLdDoD3QUMVTKJM1Eyvg64igJKNTc17znLV29Fanx7XVB3v6UrKn9RKXATGW51YVUHHwoEqnbCy1P5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJG2rN7jCoQAVro6HweJUWWHe6PA1MNmkhRPJLQaoZQAiiu4Rf94GDQCbj7McVPbpsPzjACTZ6LLcwnAh8FCivw",
  "key1": "3s8uF9d63gZchJk7Xzx6aY5PNkQMWoHKiBTHaLzk9RhHLaV4CRPpNzXuPsSVg551NZB5GfmwA432PRout1vB3m66",
  "key2": "ki2BkzSuK8YTEueiz2mxYbg32aK4uaoykGtwcdt16kMtYqXUqvwQi4wNnWVWrWhfBiazKcptar6JSqxniQLQiJU",
  "key3": "3LpQVnCyWHnEAXUdKueC9wBbhVKdgxxu3kyWbxAqpcuMTViSdY1gmpMy5EWLoUccWYr6BKieds12SiPvZEPdQvZh",
  "key4": "3oksyT12TDKVpcu1aXwihxSbsr2pirDV5zMc786uUNmREp5hgR9tw7s9uZXn61yivFmibicYN46F1uC5uA5nGcmc",
  "key5": "2EoZYfuVgvEeZawDazRHNthnw2gwivqKQq7faoaDvYX5scHpLaimz3CN6LxSyHK4P8jiDYh1TE37EKRh6Bb2t41G",
  "key6": "3n1FAv52bxDFjetuo1nSd5KAS5Ce8zR9DsfnPZ65KeCqSuB3Tae2mWuzwFwgDh8dUw2sdoapiHRUgM29FaZX4D1P",
  "key7": "2JKqkNgMqPQjwyLTzdT7CfFzMe1Qts9YCsZbWMSs7c6Fc3ameEr8tgm9SbWHY3TthFsqJx45BmU9crkMV1geuxE7",
  "key8": "4w5h1dMWoxACkSe7CnxwQFaBNDpnMsm8VW6ZiY8kJQyHTWeHx1LZPXXDioh4JWs9EysQDZwhRqsYpjUhZjHT78bg",
  "key9": "4VVQ5vM1nZEHGDLEKrWuo5dNxLYCpW9xumoBaRZ9jPJAswfSeTtE4RZzUyrXqtD8CAbb66HqjkVMM694aBuQnXGs",
  "key10": "5qVso8oMPyd9Sro6jZGdkvEjGazUrxAayYFunuKcKwxTGb39xcqUMZRU1r67vSPpYRd48ppm7kvx1LCZ7eE6WpWP",
  "key11": "44Jw545SKQKboZyNfx7NNLKP8RnEuqPVXzHQAXCtHVXkjhYwacZyQ5TWKgYRHKe9SEfjgqKh1ACygHjiPeaAeuVk",
  "key12": "2kJ9KyUZhRA2BBzD1vzTQJnrTMd7oo23ayZTyVQYqKcNcV65L4NkX18iFQauGPxS1as7gKivUWmtA5pUJ2QkQ7eC",
  "key13": "Zfvecn3rTAtekWeGi3MFpw8y7rrFmoJggLPU7BkQWcwt5nN2inGUrZyEVMGr9Q3R33wQFfiBaXUXCeup6PLv7Xf",
  "key14": "23ibEaWjwPMRkD6m49Kz41VuCRZkK9WPrvBQdPuv7NXMppcz8pZvg4fKz9vdZpwXFCxDaQLyERGzcPEGCbJgxrYx",
  "key15": "5pmHNzYFmsEisETzpmbJU7uCjg4dfBCGf7MQbii8e6JpQsCtstLthWpKJAProW6SwJgfAdJd3H9tWWAwYuYy4mV",
  "key16": "3p94LADqCsTbpnTGKCRtCF3u1qjbTH8szJfXkigA9pe47Gk2HeaR6yLHJqEb79AbmKE3R7VdGTNQNLZq4TFdCiLj",
  "key17": "cnG8f55rzyx1REnzrjFKGCJJdqZcXvKN1ez6NNXsqnUmZxLR7kibGacnehX39vrTRL7SSRGy2in6ot5UjDJqjEb",
  "key18": "4xmWNDn1zg4heEdgngUyWFTiGA3RuwvpENB9ikLemkAfsko5qvZkcxP65ARTYyvgDGLGkWgzoyVX56R52p6aFSsC",
  "key19": "VxeaoBLDYnn2JTepLJfcAWCcjfudaqtvhRKLExrz3o7UWthkfcXM5BuvrtXoSiBL8z2ACB4vYDuqRPy16cn9EQz",
  "key20": "29AWYqqHDSVtYMMJTqFUL9JDLbJmYzEuErQxHkMQHjusqTHstF3EHnEZmXN2KWjDjtyqQMimwYmRvbxj8Xhptu1W",
  "key21": "2mSEu3i8JjAsUhcGBbsbpRrX5RDZjtRjQSCxbUsvNPvZUy4epn1uhbKfioT8bgZbdo5zHKw4CLuaBHg8s5a3Sc6K",
  "key22": "5eoUYXnow71VYbWawrBRLVBmXoKBbVChL1bzrfBjjMmMAYwPLeyYC22nf92rr2LX16NGzfdWDnmXyBegsZiXBgFE",
  "key23": "4FiYLrQHa2tiFCcnGHCenoDC2sQR8jPHsseoUDfAzLHYyZLQiXYVjkYY1eETE2AwNgjMmaWLDYpPxya9CUAjnpyB",
  "key24": "4iw4Xcz9AQMP7UFSU87cn6pKnnercroxK9SBU8sBwZuzR3wfV7iFrUwdUoB5vtEig5FWw6LLxyc9NM7nGzYP5syy",
  "key25": "5wmb9kEXr7UcGHCVjP7grme2doiHhaenc8Lse3SWhCr6CjsP5GHaA5DXJFMcE2k2L8YGPCHb5jg8sBa1yk8naNCD",
  "key26": "5RcW4sfqaP7heB4PRE38LyFzbHiDJoBCJh7UJU1QQFpaHwC738b43VHeDHLZ6Qdt9Ku6gajhTtDy6XvqMZMyaUPd",
  "key27": "3m9CMSWpqDXG4hCKkkEQqdswWzc2D9gjuodWGJsf26etjy3tFphdSP5MjRjKmubGiRzrP1Z7DJL1dMUK93Q6eAa8",
  "key28": "rC8iFrLnYvoAyNz2bgRJBffrcsm3negw6BAiFXQNuytU44ytm3jgZH6ZYvMr23oaohnbHhAcENSZR93dP5Mr52w",
  "key29": "2ssEkAL7LaemGVuChw4Vc1BaN6CvkAZy7iXjsht2gTpFoYfp6kVhbPNFCbneP6ToTj8BLQnZCz3RMWhvqcy2FvqJ",
  "key30": "3Uuc4azQUq8ZpYurRYsahq4hiXp9eDeLvJRWXrNzLYrycWV3nHRFu8PaS2ufxRm7GLfVc4Cbh7q5szBY75GTUwAW",
  "key31": "2H6tFXCirehHoTciZDAKuhFiFPgPKU7JQx9aB74ELyXQZaDAzbKHDXXvDQ5Yw9rEqqH6AoGwZqvEGAJxTgHUFVSg",
  "key32": "5XWc3RRECGSh9vKqJmEqEs1aJrt9RLqsxG2FuKLVFMMA1cM6budBP4ArLJnJZJvM53fwLCgtkz7koCF1CuDJV6ir",
  "key33": "5ZnC7xgCovKQskgra93np61BVV2vcEr1UDsXR7RE59sTusucQD1KPt7fe17VMJoAU83ojZ5wfX835N2pjaKDHMxg",
  "key34": "2cLf5h4ghQunwgKFoVuGVXC9qdn4oitFYVSAXsbytJs5EEnXX5zopssNn2mzXXMN3Sg2twjAXEVwd4dJcMJF2G33",
  "key35": "xiD51TcBw3VpQMzWiZzPdsM7iCzsS2kyugr8zAaZqFji4VZNpBVH4y9BEKFnencmVKNZDDBFCfwS6WTceg9wKXd",
  "key36": "3h9vmdd3dH4b9fcs7udTBbBvPcJ98TkpWx2VSYeuzdc3ZhG9TBrGMTTqbRTbGNgyo1cf5W9S6697QFxupNKS7tnA",
  "key37": "4wHKr8j8Fh3RzEa677FUm1rQteWZ19SPZ7A6akQ3iSTnYJtyngfDm31iQRGTSQ2o5Ge1w68wLDuRcJcckSBDzKg1",
  "key38": "4KMzcTVSdGivUBrqPypk1k5uCSp6WZPu2wE6Hpjoy5jXTwtejfUZuZaWNLVqJekjiAmeLWsmXhYzPTLx7LxwfUs8",
  "key39": "43vMyyZ9TA79PXm3qPLqGqBBUfmn5cQqWTkh1iefW5GaWj4vX9fUT1W8b4f9SrXH1gzxpZmpEZEoUzPLWWS62Mwq",
  "key40": "4QQeoeu9ymkUnCtHLxLbLirCNamtDUJ3gfqBSBcTf37DLCsvS7QQdqe6nJezRUHE7f5C8XvivTyGxkb74xUUD6UU",
  "key41": "3Gd4ugN7QBmTJaJmXUq6Da52hxfENhXP7JH67ycTSokcug4RaL5E6QKRAiaoB8g6xYLx9A9CmBX88qrQNznBsdqu"
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
