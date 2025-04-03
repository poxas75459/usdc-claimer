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
    "64eZsGmsTDAKv45Tmh4zwQw73uLTqP5JMwVQQ3wRsHizUPNt18Lpp3tUZTvzthpJvPnhB1qWjgp8ZkcxuWyhvMk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnEtAStmMqPrRKkG6gvVEfKNiUnPxKHePvTNccAmU8Y3J3p4vjC2DWDjjYKXuaFyP3Y3W8b6G4sYxZAENeMynzv",
  "key1": "552JbaNafnMbjokadcepLLkwWhcdPj6amwcZMT7587PP1vd9HftH4NkdeJx5LA14GLNvGLZjk45xx8dR7eietAUe",
  "key2": "3zKi362Z3J7k5XyMW5b9yCdGZetvgSfQXCd359NBuX9SReGJb2de1Ar5W7pRZ1GS1eaoS8R7d5Yx7zM3cNYbKCQQ",
  "key3": "36sguo3HzSpVaiR4BNvwjme9XdgqajVSxfAo2Amw8hkRahYpnGhuZsXFYewfHteXJzbwUQGpeGFQvixbkBYB4UZS",
  "key4": "5nUfegHZaLw6uMzZb31eiCykXBKy51s3aHWpc1jmvsKfjmqvYTFXXru5vHRoTJeA912hBX3ANKJSyWHNZdPm1nfT",
  "key5": "3j4qJCzGxBoZh9VQvbyWQLRSK9YwAWBZQLCh9uG8BdyjJM6DPqehg2B3RcorMJoTbKZzGAk1GNCxpZArZWWroDid",
  "key6": "6QHxQ6N1dBsHV3pA8MQfVFwDLWEiLbogZfku1aw9dsNk8ZRAWU2Pp69pdcAHPEDNqePNQsGtXdtjMKEjw67yPz9",
  "key7": "sJxas9dG17kjfkoSXWWrX8MdDkPGdK3UwhqCiQeQDLZspcy3psDsiyrFNy87kqZu7aTYjXUE8p7vfFb7P512jUo",
  "key8": "3Nmb4PPnuZXSwiGZr7XFddo3p1uSm65i4QuXNEk3Pax6HZhbGJizbZJewwyQa2a5KQWmABhUTRwqWTUMQADoYUq6",
  "key9": "5jvTCf5MN5CkiYVhaQr2gZ1X21fBiDbVVyKTfNstcppKGE7R9y1sfb3gyugS2uXpiUvyZonPou5o5DGnwkeASXmU",
  "key10": "3thd2H188Bo2o7nGQdU3ztaGyqtEKETMFMQUPDGQJo124Kse4j8aVEzpT8pr2mNXK6LDjS6MBBCBmeWKvjV5kbcM",
  "key11": "44PDZDk12iZSeTkfFCmDsQEnCHEC7rCPTeHPKzZ9TRijD9VzvoZ9ZiDwygDnZnmWNzjetB4jNH6HdMvrxieh1gd3",
  "key12": "4oLSgHYLXXBHwXiuo4JexP6GiXUX7xad1adAUUBGngxQmZyJCzThCLyrKA7oGPfDqEQZdPHhmdBY4y2uBJYC6Dpb",
  "key13": "3EcWCj5GwEd5w1cVs6iFW5Jg41BoEWMfjLkwPZF5CPCNW5qiByX98Zrrnhh46v2BQRUBP8VuFnp4SriC2HEUQfrX",
  "key14": "ULUb71J3dZv2oSmwmzt9bC13FprZekx2ThaYSas8E1Ps6iA7AZcQ91tRwVWuyZwVwkQ6kGLwPuA87XDmY4dGP7E",
  "key15": "48mHg7EAfUrgcRSwu7ShP4wso1iUELNFUAtFPxYdJfi9uP73XGKzkLaoyUwZiNyekcLbcBQBokAw3SwZPYqt8Zaf",
  "key16": "DGe6BnfE6faZZmQWcFEwBoHPLN6Lpr6xEoLNS3EEUH8KdhYbTLHVAV6TwDESzhPEFSjk2MWErENsXjNwrzpY6Cj",
  "key17": "4tEFhRaJsZwoctKtfH2qGqH98AgRqUcZBVdepEziQ9qFvcjjEQJ3nM8ADa2k4RivFkD7xFAdFfNLqV5rZq67NUQP",
  "key18": "55jL18Eo2s7WdzX54Qk97PSM9nL73eV2JU1Y1ATfFyG1QUr1s8MuABTbp49RmwqCTZ6uQ3WRmR4eCvQZT8uEwEog",
  "key19": "4yujcJncV74Ks5XaMVddufKByrACBJiDHDBk9TXdvuygWTwXFZLpAEayNFbJfAroHLtKVQJFaouFLfb7LgMMCkVy",
  "key20": "3TfvrfFWhn92qqAvKZbs3czyv8eYdFsTtt3VvD6ZNWLq2dHsNkbPT591WW8HD7z2jMbVusjdGRRsVW2jcxfjSPzQ",
  "key21": "3SX9fy5S8Dab13QJKgYVFsvF81wKkDh2hMx9uGiXtiyfp82c3Auo4WWQ1KX1eDfPJEXyJdUJ19KRC9dJ7CfP918",
  "key22": "5Pt29G52RGFE8xNpNbhq7xg8D48WScc1dyQV2kiCa6GCDkrESjB9Dxfmz7fs3iTaaJfdFo61TMiWDAh6QbyqZ6E1",
  "key23": "25fToAMhnrUKVk4CpjCX91G4nzJvtnaFP4PN4t3VVa3oMKxjkXnoqkCUDZTmaf4jbDU19U24Kbn9kJkXZNcdmraf",
  "key24": "2muUsmodYgsMaUDt3jckyXLLELNLYntPb45vW1dWCDyBJvLA1Zaov1SUKJFjWJzxQQxFzdzLyPN7EGVXqEzPABPP",
  "key25": "3eTXN3ST3EPVMUzpvqHhTpn2mFyL1Wqn8By9zsxgz5pYfikdScDPaFSdDEhGZWiqCnFb5Tkt1utLmUQTxrs4M2kS",
  "key26": "3EwvoSMWYWJnYge4yyoEWsczrHxAKQ9XeyVinQL5xv4MyDcvXKwDBGizBzPvyNR5mQxbrzeBhmNVFHXiDsUHrfJR",
  "key27": "5aHHLQY2SyuAsnj13VdHoNoqPfZfbSCbYmWH4ZYBZVczsnLNv5jMsvCChUj5jTbEgaKt6WV2hzCXsUChrZvaExX1",
  "key28": "3kHCFchfSSCRyFNmXSqsJ1LK77ioivG7AVQeqJjy3XtQmtPNm5CahDMUGFWkVRmD37ogCV9g14QjCXXyBUmrNFPv",
  "key29": "2oEnc7fLw4UpQT8edUD6G8R47CWFZ86yjRBbRepZgMyumxy2Rfi34CGgMsKkbqBPeVaWaTMggw1ur7fb6GNeeLpS",
  "key30": "2zkurDhjxQug68CdZ8rPKRs5HgCZMscsig1dCGRbdjnvNCCDNNXmo4nrjcsryPAE4kJsWDLcruFSZhcP8V5EZGzc",
  "key31": "2GQwfM2uF3zR4FgT58wJJULArAd5bbWu7mhoepWjCNf8a5URC7uEvGoAfAg2UZKmgEvM8agNQRV7MQZSDzrNK39b",
  "key32": "3nKRAjehJENTAg5s1BTvv11VLoa7nKHTrUUSa1jAookY8wbiwCUnEk6VKaS5HLusaWcen5mQbZiBpTtASQnvdhxM",
  "key33": "2w6sGsEAWP4JgEAFoL2jCoyvKM3qhAieG91eWy9uJcQF8QYXyEaLqUNCp5WsD4z5BF2uGjBgaVaZTnfLC7bNAX8D",
  "key34": "iNw85PxzuXVjzDoLVyQpstogqtxBm8ikkVH7Xe3vf8j6x3fbVJhH39X2e9U26GaxEDJC3pMsgfTNSAJnqQvdcs7",
  "key35": "4t9ikgNhmEMjPqQfuc5GGYedKVwSRFnsgEfTphVVQ17AjbW7wtAQKiCuR53uw4wHmfz17RpQTcTjkCP8dz2tgucS"
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
