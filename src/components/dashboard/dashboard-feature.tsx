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
    "rzqUuqqthHDmURhRY5nbuKCc5c4i6TjJdadpiX2PEd87p6dKP6eF2V4ihpHBiKfxZgpWgYJxqwVkPgFsjXbdV4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67DMhp9f6E2eMGRnbrT7RxhUSABg47uQg5Lj8sknjmSzo4duT8ro6YSCfz3YEmAXLKkjAC37PWqQzJ2ZJM7zntvH",
  "key1": "bzZ522DzbdUHpAwD6EEGYX2SVFE62M1p6tAAYdbESB4akUcBqxALT74LQr7rYxrhE2kn5TKmXPRAkDs4q6pFsKw",
  "key2": "k46ERZUUkxCHm2qon8Ya72pPhP7G81H337U6XP5UCAt2TcuXoncJHUxn8KPHkWF82WniLnQeF8sKby5pFKTqWF4",
  "key3": "bSg6fxc7QVGLdaqfHsmd5KyaeZb2RQC3JRjm34RU3NtjRyGH7zskEEUSEczYra8uYLMpM4jH2ty4KCmgQBHbRDZ",
  "key4": "3uxvXo7aGMjNavwhYe3skPfj4FsivyAmsmqusYRTUvUC841qF7xEq1Un257wWfrHcBF8JqD1XmykVfuUoeKMxadf",
  "key5": "3ZUXfEE3i6J7wWFJZTGjcwRY3rcgqsoaRq1R13jMxJS5BHVFhHKCNvrBJUCactSsb7TM7TbeV2kyFSDd3i53GKdM",
  "key6": "5iGwGu4QFrxnBsLhjD6FBxRZi9FdwYrar8zXjEJanNbh6fp7mUxG347SQ4rDXkFdS1dC27yizCgAm35XoXecwbCg",
  "key7": "5sr5bTeX1yYN63shcJTh6m2RQhSiqts18aPCquCqRoWPj14arLZBxxLQscwLq4wzG8PbHTw72TC81RFgXfoprECs",
  "key8": "2Nq84ToHDH1r4vbBKcaZ2JCSihLj3JStXqxmf4FEpj1uARh7UvT52hmscgFp7LTwHPACyvfp9ZNYtVRjQziLRXo3",
  "key9": "WiKZPxT7UVes4nr73khwuMqCNjnWS9kMRdaVManUz4fx6iN2Q9PNMDmGZZTxt4sdrQnxEhoT8xV3UV8BLFCWDMq",
  "key10": "4zytc7HG6wkhwXw2frzMdXLBcNiztcq5z7fSnfrTwbjrtSi4aAExmcJs7nUfBnhhHpqRGf2udKy8FHHCpbMknRpB",
  "key11": "4HaqKWDjHWurvFDLFCr9L1p5Pt5pQ6zorjCKSTpuqp2edyQmCSphWAKj7w1uHbWWcepoYnHrt1CGZAU4XFgQCg2E",
  "key12": "zRNwqNVDEzsEV17B5HqwAPvo6uRrenaygHB5TbYLsU2v4pCvsebxdCrvQrQSVjWsDP19eUKTEKf52Pw1ExZVnSm",
  "key13": "4TW8W86bGT3kyevYy6CEheVEPf9h479EVhN3fKXkrHdPdypxwxj69CCSxzyqctYZ6kNDs3kzjVfNvQcS4BQsDNVf",
  "key14": "2Xir1qCdfAFRWDfzgasLstABari21RFWX8BJENFsmwvxHCvaQznHU88WD1Rk9bG7vz9ncewwRdNgD6hCmdxkqdo7",
  "key15": "5JZFic1TwgEUVgaXThcfcX4a7wJD9SK5pKxKyeWE2xhYRWmC7RfuMmUbjf6n8562NeHxTcKUChWZLmE7ffbHzs5Y",
  "key16": "2GYK8TxzRSaVVkoLKdbTF613ySDCfpTcsmHcFUxtLxPwyYjhdEed94XuyPqZA1urywrbCZX1mxDJg9MNJL5Lvm2L",
  "key17": "3VsASfGYJZyz7vrV3hRaEcKZpY1zj4YHpgzkNZr5dPS1m2m6ertZjFBvsWsRHJ7jkhMi2k2cRrGXN93fedLrwvqk",
  "key18": "4UNUvR6bxq4x63cgNSfXG2EzMnA9y8AydQEAn8hoR4aF9LbAjYHZjj6SLFffHPPVPMpp4xBMdGaYV81Ps3SoRLR5",
  "key19": "ap5DrMB26pMDYmkUDgLu5TGBUxzyS3VCs1bQrNNeXWxktANtKRKNsADXSFbV4N7svFxxgA7JbFLUTK3sPzyX9NR",
  "key20": "4UpKrRQBTQmCKPDkbLkvQtoXWXTzU2gp6vK2VMBkAAb9EjUxkJRVSZEzUYPfGzChs1ZxbvghTxVHiHFv2f24wxgY",
  "key21": "3nUKbakPQvrb3iSmJ6g9cMZsLZhHezNM2BRBHKgvyRa86x1u4kCwrKwJ8uQGa1VTehxjtPP5kbvb8cBQSXwxvLwv",
  "key22": "4x4L67HErF5YWM8EDVt8ZzQVuxUUEBzuarYSLb1srSsViy6iqCKxbMKpwx41X83bbv8d5vW9ZtBjDjLExoRyn7Bg",
  "key23": "YjaropjJtrtVYBLDqX8Ge7KYdNLZa65bBtCoXo4EzUNU62UzNcae5GTjSUFRybh4qmEQ4cfqAPinXQx1qeyoaim",
  "key24": "61P1h2jGDVCEkN2EPhizgA8vrVUyfftKJ8ZMLwKFHpS5hNYsGUpah7CtAMwHoBLDZk8TVKrHzjvv644xSV2pzzp6",
  "key25": "3PGu7yGGQaZYa5UgJXfdyJCV8sUoLARHStw3pbpkTt8hmLyA1KY3UDSbJmrdkpv8sCRkqqyUKeQ53NvmAgbFWj8Q",
  "key26": "3FC1PYgBRhoEFVFDdgH9Cyns1eSJiJND9p2yRjZTsoHjnDdYi8ZEhfKLcMhjbCNjAJwU2J7MApNYoaoq7hqA5Qxe",
  "key27": "j44JJv7mjVyU8hHA6LY6iPav4jX9LnonSTvuo3EfFefUxXqbMepw1Di4ikUEXMimDr5a8RMdSPanw4Qh8S81nav",
  "key28": "g5ASjbX2NarExqyUhmCvkygD1bZStXG5XdFWK5KMzk2BtEv6DysXLJeMS2onnT76oMgkGvQtqRiWJakZdBC6Dx9",
  "key29": "4biWASSiDmDojfgLW44RF8sCW61pUJJmzQiynkV2sPkYbZsbbwrpzJHgGVBaVt5is7c9KSncU9dXSApukhA7Wf8W",
  "key30": "2XePyXQ8NtJF51v8LnVxZGN8eRxcHQhbZzQ89TAPeVpkApizCVC8iZjRmApp8siCofY6uy3seR4e6wYp1EGjCPhb",
  "key31": "3ynr5We48XXhFxawxGat1ECqKh5Q7sW8SaTzsSbahweR9QtUKtRLemdUsmbN76311UwGL2eKd9WZ6gWtTTqgWsDu",
  "key32": "2sXzsaWTSppkojHbMi4zAM4KPnvQfXSfqMrvKBtW6zmdSc4f5qoqWwqawtRR1S4g3UgnmZG9iFCaRHXB7eR5emTf",
  "key33": "2xPkwmrvoPPcEoEtXkt3vRu2ZTXVk8cnsVgqvmZXK78ZARgxVhLwVDgmVYduf4cWZ9usVDjTn15FHySuMe7uKGdd",
  "key34": "4MNLTuvQdpNAtoMm937ZNnzNdpT19Bjuc2F7L78Wmnb44HRLyD5vuTEEBZBpXptjzFc2dWZNEPghWMKE8ZRhWWiM",
  "key35": "2MsfmVB6B9JbKakdyFhS2z1buf4r88hmE7oSfRHV34rqM96aD7vtFYyQDkfJCuKEEajwR9cUaMFNSYXvRR4oDr5w",
  "key36": "3uTF5juiQfkLaVEFWK1yS6wF7nvVeKgs6bjsenEHqMfR9vJ7JDxULRorQv4HT5R3NgrKeN51iL3TjRjQSNq4gxa7",
  "key37": "5QuVqBgMwZEhhVGLhuxpmF4kAwSwhgU1knAHizXeR56HUmShUQ8xSFJ8xahCcYk4BgSHPThCazAWu7rvLWwDs7kG",
  "key38": "2fVp4cnkZR3QKDD7hNoxLWoFHx1rdNpmmC5XQef1Hggb8uTf3a92RTM49bz87dc1QmkH4bUtosXihTRLFa9Z4xYK",
  "key39": "3cN83VobokiwjfbJx8KhVMKVRx7fgeKiXW2GSujuz44ir5MtEqYxfY1oMVeqZPMpKtnwUknbmH5cXrMWjm69TSjP"
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
