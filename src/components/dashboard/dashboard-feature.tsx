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
    "3kevGYLP7aHPjwVr1w641h8eT3juYag8itkDn3bmj6LCERB2MdXDcs2T5CpazHmaXesyabsUVhfaSEQTdTeE2SKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZPJncEhB2YdxPtfSjEabXAeXW99oDme35BY6rZGRxX2Q63eoB9DRGtjCgCVBCfxTwHnyHixSPK6suUxZyg7LLx",
  "key1": "5N6rVHjEcBzaueCBjfj3vAaMZJKogMfxugGMBeavGEBTrnYvnn7SoxWh3ARFAkEMRugawfGXW2CFEXAuxXtcbUoz",
  "key2": "2VXsWqDNcfA3XLjve7dJaMX6PCdkvuuKqSFkyiJNWRN3HS2pkNx8QRWk6Wqnozf2cziTjXmgmR1UULV1z7uziPdA",
  "key3": "3ibSNumqisKCrdjmC77oRSoC6Rre3UuGRt3bFZd8krVeMKW6KP32zC5WMkC6QmeJpmfA3RwdUcAuLqAVTDRuGR9",
  "key4": "3avx5o1zGeSHXScTvm1oEUK2zMhm3b5Zfk71gCULy4HJkk3F4CkFxS4cJKVNyQqRKwUJTefYxAHtyrLPZUsrFqhN",
  "key5": "2LQmXgHvYghdqjC474Xqr6NuaJoHcBYkAh5WEegHGPPd7KPm8SpjVcBspC9eDqbGeLQptBZv8gdDAKEJ97PYoyFn",
  "key6": "3LF1YF4j5Z9UTM4BqtCwx3n2BSjFJ5mtesVcBR1wV6E9yzK9aqhtjq996b48ChABmMoLwAVdmt2L8VEcTDPBsmM9",
  "key7": "5d1jfmo6Z9AyCVrywsJUgsRz8pBbUWeRqMZ1CEbrqJoUZwzgkb2A54wQ38qpre23rgvVYqUFXqJeZmEWtV7GR6bh",
  "key8": "4tH4uQmzdiZBraSbKyNA9cyQ3HCeSdsy913DWcecjtTZo8wkQj2myCEhhn7njCvwybP5dJxLYdH8Ck8ohQ5Cu8vK",
  "key9": "GA37MAnFEgUZBTjXbG3tenDEMDopXR91QSqfFfr5jMT7FYzFprCRbogUpKNJVLbveCffyZ3KzyYUWpTkztUvjWy",
  "key10": "2f7n9AE1NvqgwVB2DiGWWgjyQswCSPzSkHSQEFD6mntzC1XvJBLJMKVtHM5S3pXqz6iGGZxDx9FU292NcDDfXgSi",
  "key11": "qcTCeEhnCnGpmcxgKWJ6e6n4R69JzwE24ev3v28AsBU2Cym9aC7Grh2dhLHUqwgdFo6MvyzDwfVJSz8gDJp3rRi",
  "key12": "XMVyCM6hnHuQZWd8cyYx1KJwfjXeTvXeZxm7Wh2WctK5ZY3Ljco4MTeoa5KwY4C3Lkw3bQWSnA78cgfD5rQcmTB",
  "key13": "4wDUJAFcnL2rtj6XdNENrAynha6LLzj7LBikGfeQg2uZtErQqjKCRK2uURj5dsb3KDVuYD6ktEvhPrpsDtrnryZG",
  "key14": "2SP2umjDG7uFV66pWuisqjc4efcrA3vrhvjTHkcgZ3x3ShiRz8LZVQSqHe2Hgdi76UrsPnfrK9VTCRqKCMtV5vN2",
  "key15": "tN6gb7ogNBuY6XdvdcXWsHCFccK8sxdLdwD7NRi3DJC58LXm6mzKcD7X2eC26dTJoV5rgBr899EjynekUACvy2m",
  "key16": "3QqGdHM1zZxpfvTbC7zjXGeH3GBHskHn4pDaC265nHC2geNJcQkn9zX89Nei7Vfo2ASfzgdh9RragNiHxj4K57DH",
  "key17": "3BZ1khnNVd3AkVy7U7Mqt21JwXuf3AHoynFRt197WGqJo1bQwfqaL4RgjQzkBLrGJ4yVchSDx4CkmmsCn8UgCC9r",
  "key18": "3RtsrSX7vYvXs89e3k1XUzk4MtJPfcaWJAxxZcD99mQeK7UDHuz235Q5TCb3ajpMAKw129ZRSu42hnMCtmd1x5Jx",
  "key19": "Rb3fRQJZrbJ1ZK4qSd23vZerPRRqwFpNMvMTrFMGifz5BtLvrSBn7g9jd9A2hzDkWxjdCRUiFNYvKPUnKUHqCt9",
  "key20": "3vgUvVauu4EWn34gvbBg5w8XPubvxwUx6Y4P3vhsUj64c6DYXuiGH4BUs1Ygqg5jiidqsUDgp7Ne8evzmHtJ6GFq",
  "key21": "39D2MFgFbb2i8RCv8rkRT7tJuYimNczMcW4yT2p9Kvs2HGaLqo8YYowwKxiYQJMt7zZy6W8uEhCFaXgJxJYsXqFo",
  "key22": "2grDnPmet9EXnqAwDWmzNb9pCBhzAzXRVzZwEKDRqKKi3v9wPgwijrFCyDURwcCoJBHxH3j5TSPM26oH1hwrDHEh",
  "key23": "3DHQE9aTswX492fKqbQmHcVkZW19J6422Q7iYHjDob8Cdc9r9P3wW3pjap4HtY36pWWqoLV6fbjC7uhNaZ4Z5qEu",
  "key24": "2f9tXHYuZGecmwAaKZAn1rN5Rq6pEZgf9XygG1DAzy2c4jJ5zQq7wssH6rr1i2Sprnym4bsUERE5cgvJsjoGu5wB"
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
