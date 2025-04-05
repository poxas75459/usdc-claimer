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
    "3apquncNjFdNW9Nz7QUwJsJpk9jzXoHVqfRVb8AMcBUExhHdYDcwENXiXu5M8EWVnt1z4jb75ntZp3ZxWaNwKqsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9TmmXfcCmurQxV8z53nn1kqsK7Ho3h2rhABp32Xh68GPgdLFeUKxJCM5i1otm9pyXAhK3RWSqrmpf8VAXeaXpf",
  "key1": "2q7Mdx4fTN7YmaPQLCpaTgF9tkFYz62fLdtRKk4yMuuKNXV3aLhnVqWpCSgTw4XYbfFLAvc5BVSTmYmtRCQqjfAE",
  "key2": "61Kx5tJ7P7BnjrnRntphyhUNYtgDGoxGo5xnUZA97G1jiNaqDvZRsDtqYrYMK3Vc6XiHUHxkFMVhatBBkAqCfcsR",
  "key3": "3QKwKLvs8Fnq8iKmCjuFp1uqvyV2AMD6SA4NG68zmhYQtMX4fnHE8VnX5gbA6apgtgVMQGPGTyebqcX3WgTaBzM2",
  "key4": "4ZBbsLFv9Eh813hJVRTpKWNwGdDoxvjJ9bQCACTRaxH5vtWcKqERJTUEj1ZeWmJmXfZ9SDrsh4qc3zzUdkrfxhXg",
  "key5": "454b5Xq1L4nCTdQrLQMnY448otBRuSEL2UEEFTZvjJXJ2XEiD1eyQbnQksQdazSbiYVMA82KijCQt49m7iC6pk8e",
  "key6": "8y174ymzvxKkTzpXo5yt6Q3jtXjNcUL4LgJrbZRhCD1AtY4o5fZBQQDkmT9AmQF8U6YdkQox9MxxGNyozASqYbi",
  "key7": "3hmrHhF5rJKM5Ser4ZZLRofAMWUCBg1GpFyeZnk1XVLR36GPAcghGjSi4DGxtjsbEtKKxwAAEjYES6cJCZzQ6dLL",
  "key8": "53ouo7tcpJh7zMdAA6kKanepr7XUB7PykTbQSGGAngJZjXX2eTtESiCnNquTRoUJu4FaEyEsHKS9ZhegBThDagVS",
  "key9": "5pauqLRYC64r9xd2ok7ey2KcChjFSRgjEhGGfw8iojc5ekdPFvRB5G5z5MPCd4qZD6ePdWtPMmX83QmeBB4kDnhK",
  "key10": "VZH9BCSYs6UbgwVTZ9CwbHargqzfM1qJSuXnzNSbNJqduEPh3NuJxLB8fchkgTGyd8BsfHUdMv16QoSQoYTXDTS",
  "key11": "2PuNTecmirx4VwkrbcPKrTcG7jG81yGCFJSssfY3ngEUWGGfXdyFwEUznhxoGjb8wyw48ePqyUTeiMUr72tQjz1A",
  "key12": "54agcNBHNy3cNP34HEGVNP9qhNfDFWTuCpHUvcH18GgP5Td74ycbw8cGndoUfF18wr3uZCyea3P81GABfRGQjMAm",
  "key13": "2aNkLxXHdgp7Jv2shQiw4qopVLBuDLt95dhJfRGqmvvqVei39wiqC3myWAjqWjHzsnxNxKhFGu7PyuokLqJdqtRr",
  "key14": "5B7tgRTAogCVbbhE1WQzdLRNFmiK8SJh1x7WFA27xbn1DSwtPrsz96McPhQeDQPfMZrhZ22AEKRdqge24m75rnXc",
  "key15": "27NgSZtmQFaWhZc1HWZ9tAt9tzfYsHZt84P3eEKRhs32sWgmWf8EThxvnpqBydHt37ALRQbdbNvnRAn1YQ3MQxQM",
  "key16": "5P1US6Qk595CTCMHEFJdu9oBUvNBtE92YMrZBuQJvikPXAs3NWimW2Y3Kvfy8T438NQD1ytBqiWDHWbmzHkrFb5W",
  "key17": "5Qpc6tJ3UQ3J2vZgzRnk9twns5XPxaS1cHXDbSYcx9qwfDwtSJTmRcpn8SSJoyPK6mXMQgC3ybJXcFUuESWzHS5W",
  "key18": "3sBJYyfJHU1nRHGoQbEHknf76QAbmTX4dvQqHmXzXYkC1i9x7TXyt4hmSZQRpC5oUZ9YKCN94sNFVy5YyeENZdUc",
  "key19": "5fiM3r9xXAiN9n33S2wL4LzTB1Hp1sYPYtjrNJNqqEoZQh4nHMYjbXfr34nxgVwBjSenxjKowPQcq6UJkV12Abxe",
  "key20": "5Qb3LaWNLW7SntEWHC6WfNEoev2Y4zxdG7LELKEdsxpLSQrAEVw8Q7ehLQrbEaXvvLx2j18ErrxAUmW2iG7a5fYH",
  "key21": "39TBcKMAWqG6CtBMoXbisYnJkWjqt9KRwwpWSegBySzs3AwRgdPrcmQLQPtuR1Nrm9YV95Y7ioku32swPrmaiTAx",
  "key22": "qTAG72XdtphmcTW2ykGNLagbJTvn6rcCGv3xnVWfXpy2FAa4VrCsej7mmv7hA4VLpFH9jCVQiDodA1cNeT1iJL6",
  "key23": "5vWZd8hdHZr642xkC1UMXDXYnnAGFFQq5Xwk7rQDfQogFo34ouSagfWSe6uG9XfQDms1pnbNB6xt4DF9HrFYBkcV",
  "key24": "3fFcsBcwMkydB6BjZUZMmCVCJmMscPL6b9RoXPaV3mXocT4JAX6wrPPQM1HhnqJNmp8Rd5hbz9YDTZuttwoiVHtN",
  "key25": "WwxBEKR8E91eazREeJDgT3zhbTQHd4oneeuktA1w9o1Abf99Z62QPrdRzaU7QtxffJDYSFMcd7GacTsL2YnLmmf",
  "key26": "316dKd1AF2x9yiUbxYRPB41yFp21iVAi3VG7rKqgJQX5LeBtwuJuxMiBikiJkDpfi7biC58NwmeMKST6VMvZUTnv",
  "key27": "586kJpFTzEFrMSj9jRBTLzXERQziyUsNgHkGzArK5eodz9i9T3c6SE4gSLiXuxv1X1tuQATJTJYpgRAkndPtKetC",
  "key28": "28hrWGYFKuyigmRd9aQreVDpoyTHLJeQUtEuURoTvgrw6f8Dqv1WLxg7tE88ZuL67fad5jHLEQirCEesMZ1yS5ug",
  "key29": "3J5i7LXfbsLSn9naANyWUbRWVdFKCdebrwd9iCGRah8b1FKT8mm1wuD9UwGR16YECwioqQv17roU9ybDMutG3Yxg",
  "key30": "25vduHpGmdCyJLKYtLzG7xwXMZt4AizmuJJFSC1kAAB4mhGFRTMwDeua7KRdFay6qh46MUGUGz2EJGNTpntu2gAZ",
  "key31": "zTqoX8BxUKDT3ffYMHNWmL9q8AZAubFe89kDJLenRU8LkHEktYJBUrLW3R6rhHPkCD2pKWXNsTZJuYQ7kU3zpSa",
  "key32": "g44enRNQ2WxCiiCGqzEPkPZJwcvDrsYadPv2tDZWCPKZhfRrSUZXvVzQdNivDbCY8wLmmm4nBtWdsw6ghZCLSSb",
  "key33": "988Mu1LbqiH3ZjTLBATq5QLgM3g2o1bnEt2hbnmNC2M47V7JHAerePYhZJUMdyJQcD3KzcnSCJuWZZ3uNewFtrM",
  "key34": "wGevJP3onmgnvYpzG7pxsytN1PT1wxsCP2QjJrXcWhC1Ftz1k9YykzFr2pcuJH9ydQKtNCRtCjzhoc8Q8Ls3aqZ",
  "key35": "4oTdFjAvZnvFJJMHC24BGFLJQgj7qrRAXAfzePFYsQcAQKsNec4QMDvXGDQrs49FJ5TCVPbGEZZEanzFZzvCoczN",
  "key36": "2JePEhAqVebHregkQAtTF5KmEf3JVmE8U1FwyH4oUFy7PuFkU5ncr4UjFSGho8oq5j4Z1f1H4gLDsjdXHcJpw4vC",
  "key37": "GzqMV8CEsRz5uCz2qhJK5LSeDitdsNMU7FLRe7pruo5dDeLE3kbBDoeWhYr7e2JRBwU9zKLjT2NKck7XBEPJmWP",
  "key38": "2uKud4JcBYf9Jxi6mgxgdvz4MMXJcavYwk4ot9b37XBttztuPVxCUhspkyf2pxr3M4xYrKK8W55XdJvAhCpHH1so",
  "key39": "5RLfCecoReeafSywwyoTffTqKZKrURNSN1Vt9hQqgUubu9WP8VTEoCZNfj2xvAw9KiCRwAjtMYw9nzQStcYJXMmp",
  "key40": "34dkPdYeFjwx9EjGWLYYozFixQRQ6nZzNNxHDP6rDvKfgvt9YANvH4oiXBGUcRheD5k1uaUdAYLf96aNWjvCEuqb",
  "key41": "4sg7bJnBs35dHU5v9cmpk5EfACz21AqXXNYeBXrEzJAJ9PWaNxrbtqv7ssZLzYAXrEupxvvkiCKSSf7PVHKafh4Q",
  "key42": "CUUARP5m28x2ZNJd6E2YSTKcLa9u7g3ZGTsSUcaScJFWVHQcttpEJxrELhDJVWsnMvcZ6us9LHm73KvmxGL5fYS",
  "key43": "2mEVdpJV57vYex9gnSRVFWqEkoVPB6RzuJFvXFvSGXVxKKydVjRvMu9TfpmxozZqdqQsydPH5uKu5E5HnAUtDMRN",
  "key44": "3BgEogdEvkr6ZsBZ5fp7qafWtRkREPY7QiFdysgigh2PGoACupuBGBPG3MSYKRhaFAeWaTdmmbDVDqaJw5ftzo5w",
  "key45": "4fwsWRE3mbEaPYGvr2kxTKqx2D9itkwP4G1BmYQjQnqsgqYv8fFbHYEcU5qikRQqyFoBgo8PkhQESxDiMKBjYDEt",
  "key46": "4SLZQj2gxC4m4JzTeGiw4L3UuDbLHeB1tH67ZXPs8gdZNxu6jn3c9kzHhdYRXGqaFwGDiFNbxxffcWqrhAKFyNNP",
  "key47": "jXRQ9679SxvotJ9vYVw7ivkPYLVhcip6yR7GmUTAxzyPk17Ti1SdU6bMu9REDdjmacHS7reQ8WDAmbr6UVg4HaW"
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
