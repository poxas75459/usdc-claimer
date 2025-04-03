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
    "4aDzCnJ4eK9VbdHJawm18zapLHaNBDPUiVuZbQh66EW9b4ntVH1p9rcfFpEVTEjMQFELhiPc9WdRyTmbSvtbJQEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9YUAr1ZsZsBSMkZJswUecHS8qg3o8VgjfBZeGsAgPYokaJEELoz35apeP8Zz9AGyXd5TyrRyn75yGtjkM2FRoz",
  "key1": "3keJAwiYfJr9uizeAkMuR5QSEAkd47fyEnEWT2hiRwahCkwxXw6Tdz3qenPGUokCV6Cg22QxE5HW8bEFqCXYHcD6",
  "key2": "22PZqmDbpFydRYVujEgsMNrgA2MRjyWUc6RJA57RTaN3hH8tKn4gGJmMmkNtSRx8tB75RQh4HgPBj3BojmDLcxCf",
  "key3": "4mg54f4mPM99p6HawVuhuYeStKQ4yL6g7UtbP9kbudG9u5Da1vPuC5gHRohsgZxaRXC9UWCQuSq2GKrLcmzQiTsg",
  "key4": "3bLAgs7QjXduuqLpyMWgxN8sFLbvBHamjD3ZwuktebyQf6xEbVEUZqkQVdJYdMDrc8yN8yhmTBhcaPXFzXCEWkfP",
  "key5": "QPQknRyTgFsjRvoRWuR1wHZuG2TE288ay5hZUrGytMMK7zqYwXjrcUpAjNaERY9C7NPkTkQ54JYABX1nFT5payg",
  "key6": "5mrmTPWLei58xHpRGaEbtUNP6wWRTJbvwEQsRTSowR6Mv3BmXvjFP6gDz3YuELGBcndRVikBpQgAjzf2ttaP3zMW",
  "key7": "5vt6zK4UiDwLMP8bkE1u8TafFbebT59Xyq9sSwLZJKVj2YvEnQvH1Tc6a1rStXQtPrkAdi6E28ja9TdbpTCCu3p3",
  "key8": "2TCcToGPww3Xp4xyAVW7XjPq3dLwvUXbrVVAkAtestpPYT4Dfq6Yj2yVVuEPzpYYar7CEqNpwb5sELBfT1m3RCNZ",
  "key9": "Pe5y5eNzovweyx2LPCfNPKC3sTXgoae4P2a9yoMvJ9ZtX2R496PNTaqAoBwaqDQJj9HvdmQbgZJHK714L7yTbTb",
  "key10": "bKzLAFSaBDrFXNdA97HK6ziRSgobUVnCWRUjgrgJz7YLAkyNEgDeoxa6MiM8TXgJ5fNjxMkYE34huwgSnZhYHKw",
  "key11": "65FVVYX2LgbwUmYFEf5uKAHEpteqg5SEydqeB5oEy6znAp6BVVSFnxa3pSnrNpymkjsA1KddmWYBJ61nA4WBWUWk",
  "key12": "hvJWLuuGBQ3YEtmuZ2ALHwe9w37eskYdmfbehMxULeb9g1gPgpzpJxfjCYGApLJRYMr6SyWdS3r56WhhiipbL8n",
  "key13": "4ZzRAB7i3Ct6A3zuijHqjtUeJLb4owYR7vDrX2bSgv7RGp35FxhYfzqtWS2HGYrirgyHvVW2edkFemu3faZKAW9p",
  "key14": "347RHEbNkRpYkPmrfUW4XcSnKUunXitqSmaMSfrjANNDCjpQDgUscB7uCZAJpAQJAWfLrPkB824UbowY7Q9rkFcF",
  "key15": "2PesJLaxJ6brqFLZGCqBPqD7LXmbrixt9MfaeCoGTozvDcQrxZDjKZM5w7mSn3TJ6qnSbGKnfGfM9pUcnC7Ru9eW",
  "key16": "66UGShfuxnL6FMWAi85Mxw5AxqqEpBZvnFSVJWRnq6JFpZxQE6LojaxnNoc1mCjN9tu37rkRtd3VNogpHV9h9jmQ",
  "key17": "3h2Y8LnNeNBFbFKqcBBxHXhxm5RrMgw6sSWjAGeLA2732b8sJWSvQuxkh6Fo3KDmYGSS3zanYdTyHC8mUwVPAGCF",
  "key18": "3Ap37zBrq6aLDwHDLL8kSyGQratt1TBB5iiNbqcSnqrFC48doMeiWBDEcMVkLz7RZCWmEp5gi57vZGjQ8xuUGEEc",
  "key19": "53guRE5Ycy5XbezxsiBpsnk1c3j7W3p3i8BtydjztFaJYGS1SZxpB91z6MCf2gDxsASDT9xfZfLjdVjQg9ncc1DL",
  "key20": "3xd4VJ4r67W8nSC7QnQEUqiUTn3LZHwC4BsscknbtmoG1D4F5oyHpt49xQVRSBKywsrXccU8axcYA4LMgA89jWG3",
  "key21": "PPH4USsiA4uX8ArMorLBXtWGwMF6uT36dRPBY8YcDUr9Wi2RDdt8tr9LrUgS8Vp7NxumopHsa1U2jp7iUiTRbxS",
  "key22": "55WguaieyKFsFzG4gnhTcwm1sNZRwtZFf2FigqZA8thUp2PHA2Fha7uwbh751JxWfpG5MScUo46hSLGJd2sKBfRY",
  "key23": "663WXvFz7XQbnh9RkRdTBJ6NZNzEKCjXk3Kg1gRcK9QQrsbu6PMugZdGx99TYxo32Xq6CzT7G4pJKdzbDGnwpo2z",
  "key24": "4QoRcZrU4k1Tf7s5uoxExN5oZdBJ7kg8UsxkYa5nsU82hE51wWmHyWRjigbVymQvHu4AfgbkSYSgHXL6MEZg6btt",
  "key25": "2QgVdVpUPEnNPtVWB77eaULPPeeqVJgnR8k9k1N1uxLx3qsNdK1AujbQPGJsL2TpAFScfYsbv6y3Mpb2ssPwckc9",
  "key26": "3a3DA2Ras44QeZk8SFsDKRHvzsujjQbxmpKAm1uWtfXW22uEYgKCnbRW41WFKWU22ZrUe7EsgZUVgjydiF8FKpC8",
  "key27": "4a94ueUuN9kVZArysxdRbj2k5w4db8cLu43LQsqC4nbL2gRJkHKCQohMaXT2NNsNtqQecqxRxa28F4qNSst8PrW2",
  "key28": "5yMbMD5jP5mzJa8SMJQjQ3YVpJq3zj9Khb8wkpbX3a8DgY96QuGMDAEpSXXsRmfc13xg3S72fbUYBXMU3CvEupnt",
  "key29": "5LsF4HHgMQ4kFwwUqRzq57T4S9yqWKysK23AFgbknZ6RWmWM8e3qoHDZRmEkL7Ec99wusZxrRRcayF4BGPS7G34F",
  "key30": "HkPLpHC1ZbTiP4qb6YhDRdiapVak3iCF8sYHanK7RsbWmKjmCvstXGNdCBYDytaK5wHYtcrTPCvdHpdLNaC5o3s",
  "key31": "4GnDGQYtXBaqX7sMZ3K7tZDQgYcccfXMMUNtcekohT4PuU3E1iADyFm8JcwM2y2QS1KXtgHuXAhXtQz9WTKmEKmb",
  "key32": "iGxzaNFAvGZbQzWFp2UMnBWywrWXVPKV5JJurnSnyAeBz3nk5fmNFnK45n5RHyu4kpdXq2sd5ndH65NqNJYCfWK",
  "key33": "4qG6VEsGfkgJZ2EhYYTxcKYooApp2csffPoMSwp9rMR1zzpXFrxBGWGNZmkZshHXSQb6b7hNqXnsfUZjfZR75ywX",
  "key34": "4bVexnSuzMdDq4CU7ryxmeWjzLbzx6peJ3j3s2CdzVzdyac27w7LdZPgqSbsn1Sz24ygRK8zFbMoMdwekjmiqem",
  "key35": "412MkLP4H5pJfAwXpB1395sNRdRZgUKF2J2eJErkGmHpDPhtAGfkXmZWrL6848jvrcYhQRstNYR7r9R1FGou1MS5",
  "key36": "4wZhVZpuhnkJf4duUm37w4L5ELhfarRK3bWAUA8UfenAfU4TWVMWtV34YLAu6ntJjhqjn5525mNc1iEr87TE8xDD",
  "key37": "4Gx68JFXTToRABGNYmW4ehb4YEgSoL7SpFr66o9xmzbG7p5EwD3CZX8uiZRtYvH6DDRqL5WL8P3f9zfg7xrQ7dAq",
  "key38": "4Q9eCLzhi3aT9ZzvLmsDdxv3Y1FdR7Hty28tfjySqreCELQBr5yF1Rb63TgwEjNPZU3ELms5mirbkdudTFxuS1fs",
  "key39": "4rjmVbQiFEJAXMvQuHHasMY84XwCJ53V4MC3F6Q5ntBbd7dV9rxfjQstQVBfFg7rcWvUHj5FRyw5EmLCn4diCYT4",
  "key40": "3RPVSRApwYugQc6dk1vM8MC8CuBQCieeVLytm7nu7nMSSYxbdNV3LRgzpTx5vV8qXdDfB5EsT78UPm2aGM4hEGxm",
  "key41": "4DnFKfB38Ad69FD4cmne8oEhZ785Baejo6VC7ft2vTpB7VBpKdMa2Xi1Q3f1zzM8kGhG6mBJSgRUmvNYvHnqHBSX",
  "key42": "3tVE4Y4rSfmFBotoYLoxMeotaN3zzDa3erqQzp3CNHrQfcBG3FfSURwAZqpFe87Z2x2TtAFPVZrJGVATnemu9G93",
  "key43": "2geRRtNAzNkqMqqfPdiNvoDGs78tQUavYc2tn6LRVV2GLGWkEiRxkTSJBfSvP3MXdQBqfmoZ76sownShfzYs2b9z",
  "key44": "38kqPXm1WBzk1H1MAAHwEW2PCHD5Q8iqcznTLb1tUPT6pBhYZy29rqjr7pZR8KWh3idmNXS8u36qPTwSVQTk6gra",
  "key45": "2xdX7LJWXGNmCeZvtYYsn7TtTWLYnNYUK3phUws9Fb1pSL8tnKax14AJezYeugXmfzJCfaFu46QURqNviw6aBQSJ",
  "key46": "4LZbFQs1FXr2fTRAox3FK6ubrfApGSUsY6f4SPL7w3F8s3PtJe6ii7sFWdZdJ6iNmLwVgzHynwxyPuhX2GeHztFy",
  "key47": "3nRHuDRKEMqXMts3pX2CnHNow47HH2iNmGfvqSG6hMeqyW8b8j9VH8U7hdbk3HyCSBvcc43PzUEzSV2VRR1MDqwT"
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
