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
    "2jzJonLSGk9vArj86aXD3radM6mzZFU8dH7M6ECSUhLvHnseUaz8ZMb6cdNEYZHFNa89ixQ8qBZFTrdM6VbSqAgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZikjGzEYEwTRD1sYLunCMTi5wgLZnmupRpvY52eHwLTZriRyatji9ANS2jWeaPS4VfXyfA4niP3Yb6nbokt2dqF",
  "key1": "JpK4aeRLB1mLXMPE7MpP1stfQHZaH6b8PctjyYwngesdaebcLHBnNbgfhU5A3JcT3NWwqNzkeNBoWnKamuJ8UVe",
  "key2": "3Y1kCaHLvn7LMbB5xKvbeppqMEcernb8cY5sPBDrkjy3KNyPxMwjbVEJUGiXQLXd9odEzHJx6jZw326WereRVvNy",
  "key3": "t3Bi3h43ncpwvqcGg6Biv39QFy4iwTazH2BxsX2xPVTSV6qki3hXrKhHdaxzxF32BtKDPWHekQ2hT2p8hrCUy2z",
  "key4": "3tGe6z1LYEjwwAGDRfKLvAmpKvhFYStZUPwni2B3hdSCCD8WzpFdsNLYq3cEMi6QtmaHUFhWNGSHu9jbWx5MjgEy",
  "key5": "5ZxrqJENeuux73v1pJoMEVeE4Kdzq1LWyuhBz1GTr6cj5qZqCvvMPSybp1WavcUyN2wpDMD9S24KZ8aQkZbSqhwZ",
  "key6": "wtCid28iWUZTJYNmU5S7Reix42LLxEHs7BoWzBKAJPkGMGpyFmqxJtXjJhv7KM77QjNpJFqDsJ43YkwQGzFWTA1",
  "key7": "55szK8TUzDsDNaHAPa7o42pL6yZ6aaLDDSDMa4VBWfAYCR9Ep7ywCJK4DG91agAjXikXEocoue47WeFN5azJfHeA",
  "key8": "3kJ4gnF12ftc92wLy7gKGbEEANu5Fi6cyuAdHFdDrMdx9HiHDpHP7HJAdzG1XDo3uKAJW886AeucLgwDvXLTqpNZ",
  "key9": "3rS4rPVt3LZ9QCJyGpCjSAQAnzhjQ2JRE9uYDeFaJMgFDQLqMQh3DxRv8h5AyviqzaRBhunDJioMj33PLKT4kP4x",
  "key10": "3KgY19r8tJYPDQie3TTTdtYFtYCAd2G5ouNymCp2Pe5fthJhakdR3u5uGk2bNwUyJDRnqePGNG9p4ybpnMc3eCpC",
  "key11": "4yJeDMK8rAy5MtKnERVNattGsSVQhswp2HkyhS6J2JbZK6DXVSmk3H6myUY6Za5mrQSmMPDKwphbwVtMecx8nfVo",
  "key12": "JGJeVQUALyAtbqGdW2EqJhj5FHQCo8kRKsSQpwdKEQ8pWYwY3LvtrnbhoyW46dFcQWMQxhi5Z3P7AE2xyrwfEfW",
  "key13": "6nES4MHmSrSUHvnq3AMetB7it9NBV4pvAyLo7n3Qu4bXmLjAVjZkewmPZVdwQG8W2jfosHajaJFpTjpE4K7T8Qi",
  "key14": "4Zq44JibnG6tRvy3X2pMHzuSTtV3tLnXu1ytHyxo7QPwHX7B6X2Xw31wjgUh5W6nHExYNxGgdDZVKAkTannPDGG8",
  "key15": "217BHfTaPuKoJ6gvfsKVKt6fZdxvKnwBNcZHBpJCy76ZJZfr3jpTieRcpCbsqzQCFxS3pZ69MqH2poMETyCggPMC",
  "key16": "4nMHLmpLcDbW6JgyH31MTpLNpRkYpHuaqfzoiHiy5gJ8nsJBwoDrpXqxptjJEVyW6hawoZ83k6DA3MXPgtzQWash",
  "key17": "2A4wxuFxg7GBRYpnwYJKnNBZ4h6XwuLzYAVqEvkXfq7FmKf1h4EtVDkv28DMaCkgQeuBku6jfWMXknF4DWazJd6P",
  "key18": "5XjdTcRhjBWeKVLxmvr5WkV8JwLK54s865WhQ4Fdeitk82UJV8Drh8WCsFjTqnxMyzZ3PKhfz2tyCT482YuU1GoK",
  "key19": "NjjNCbRoCcV8cTmnBVg2kW82whgDN35HrUXawR3DTXHJDdxd812BUSUAC33qVJ245MT2ks2APes9C7kscwujpVH",
  "key20": "4u99quq2NRmf6EfG9PWHDDuwtvJZz4Jn5SDupvCxz5HnxXTbP4teADwakX7mVSZ1PG7826vmMdTbrPifwn69Dt4t",
  "key21": "2wPwyDkX9ZKAge6GnXwWqxZ99ooN77QJyWp4RKUbhjQUkjodc1nXvgSMtAWVcxadcJk9hq42P5nwrx6RqLJ843P3",
  "key22": "5DGAya4nL4FdwMCQq3NaXwDneMzXKsomH8aMHgwPK7vKYVm7H8FAAWjW695DGbseFey6U7Cp7Z9gPz68AKRXA7hY",
  "key23": "2NZYF7tinWsLRPPK61mCKnktzq3YVC8SYpCsdBcfsj8pELVH6FypFQGMC56sb25aXSUg2S79ur7DcYomLkErLLHe",
  "key24": "343H9UPhrFhx3g5Yg77rJyY4P88N56eX8mLsFPzWTj8JSzZKH5M2Y19zFakJMUGUqrrwmebYh4CfsSQMWGDf5JJv",
  "key25": "39ervPBNYRJjVbgMNYWAUXYDSj68xFSt5DDxeisnELv8YPd1N3oMSoBW7fh8APTJMRFX2xAh47VVLjDFmwik9ttV",
  "key26": "3zL1pNJjYEvteEHw6kxVYiUFK86EB1gk2727M1bu3a8tH8TTpysabuqEtnqUG6V3Wv74yg4nBXDf5PJLUcg3iuNX",
  "key27": "39SC1Nm3N6UHCqoCpGpkdhnK4RETwoyZcag4DU8NG3UnF4D5b1mkiTpgKvJ4JzxsbXZ1H3xBAiQenFsJaGXnU9HM",
  "key28": "3QQwarpn6KE35D9obH2GeQEtRpUpvEegHrBmeNuDGevTnvLcCsrgXDVzt3WfE9rvYT7s2ouNAVaqdyjJPdh7QjDE",
  "key29": "21r6asNKdiEgD5HJ3AnbKDr5uUGUAL71MpiSXNsR2GbJhysiap8zLt6XkKzxTvtf4iCNkrnGA8mzas4XTbxNkehj",
  "key30": "4oJePekdP2hcD7MKpE9R2XbkSD2rwY5yMosWG66TXePMtCtwsS6XhDiQXZvaTbVpJihETDa4ANiwF3wEV958mMB4",
  "key31": "ntzvq3vQsvXqL9Du7WwfMfn19k4G4eZosCsGceYdLJTsjZsSchWDBwCVWX5QtAZp5x3ZaDdpjCg6oGM3vNqxHHb",
  "key32": "4hnWhLkXMEwPkB4aqyoWffVFUUMtYSNj1rb1BERCaJkiFGiRbqHMkiYRS3vQcZdgHpnTrgNnPkeeR4MCC71r42V3",
  "key33": "648zVtFLgwoqQR2LFD2kHe3P8Gqw9C4ayN5thS3rkL8W2aXRuPeBJWN9aqZn3poSPnJDZy3T31rJNSs7fxJ5rvpM",
  "key34": "3BNtEArNTkqXZ3bA3t1RqxkNd6gd6RmuPRrzpaPFrqjm8rxkNB1ZjgzaWW1vUkshZ6rSHGWdJTF3Mt3cGrCiFnMh",
  "key35": "3JyLeqavovGNGT9a4nRWjovWhTXKAdS6tj2gQJpRAQSmCToS1Z3jqfVu1C3mnbi4xjvwQVkr8upkM2wbUEMW9XVL",
  "key36": "2d4Wx7WaBnizzvNFKfG8vVTJV5veYVro1ieqPZWw7bWWZnXZpE6vaoTLYXTh52cmpnLFrxcgyy1HJWmHi1ZDpUWa",
  "key37": "42qSciHaGijkYgBdR7J8Pia11gBWErXbnUM1fruCageSNMBPJZ1u1L3U6X7qnyoeQxg4AijLz8gbFpB8RpzxFNoL",
  "key38": "2vw5gw77D7nfBAb9fqUb5MVBNDcEuwWJjt9rQbo7PQ7x6p3njWoeBVerS7vsyd6cjkzCqTPfx9mbdG8KfQU4Sog3",
  "key39": "2DCsgBHAgQ5T78HhSdAAHZUWuWzYntNuwYzGCS74qUmqQAXYnVF3RcUoWhFH8fE747PeTtKjnrtJLnZSwVdBcbEy",
  "key40": "23MN3oYhhKvFvCbvyajKsD8WqqRvJEX8zh6yYDHTnrWNgcLZYjFaMKdKRUqpoWDGh9JdhLr1KhxCEVBF98v9to8Q"
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
