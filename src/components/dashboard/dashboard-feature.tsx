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
    "hm9JPsr7PoGwvNoW6xSqy91Pz5TiC7Z1oYpk4z61cjRohoPXz33W9hvXqPuZQYZGLKSJB5aZLCVbzPmY8FohGuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8KRu7KbXS2PSEh4C8ujv5SRw1TNkae5MUign5aFz9fD731ZXVG6wSvBCBLTYpsXbkcvL6kT8VcP7FMhkF8pKxZ",
  "key1": "2GiHGjLcQtgyCnXqmST762Ch8gX7sWAqgeJtY2bWh7fiwdsPevnxk7LH5pPNZscPtwo4y2dzoJUCTdSEq5E2NR51",
  "key2": "48tdrfnuDQj6B31SZodMLpe3nGt457g37sZq2HGA3BycPcUvwgjcPvmVmo2FcKuKdAvziY6dc8o2WpdFy7rCx5pX",
  "key3": "NRZRWNDDxjYifyyvnJJ29SryFXYePg8j3fDA86XTS56qGKgbDUZuq8tLGoPFGuYP97PPvNbe2TAE3zMpv4eNopE",
  "key4": "3v7NmWreBEGfbFNCuGTdDMW3vrnpkgxpzkDD17EEfTi6f1aa8JhWgj3ae31D2EH58ArXyRF1QvGDqGVMesPDn3DT",
  "key5": "5xMvcx9zkQkZokudyFViQrzf7V6UqUqLpSaarAwqiFYXQfnuUTsTGvZb8cgKwEHDUYR8ZhefiapBv8MucscKus9P",
  "key6": "2MuyhTeQh2Pn5aLi385uHMyKSpxeTuAnQVT2KxfH7Ys7twsVCQWNwmB9NnHMdu2V8hPwxupWUCarYgXqFLb38wnR",
  "key7": "4rF4kXn92ZRFmLcfquB44BbVjbMxxxpzQLMxhyCF2bi3xS6QAiuQwwN3CpsEebg7rRizhTZL8fKeSB6oYoaLXt4q",
  "key8": "2bPkwN6uB5CkxLApBq4YuJZtNxW2Hp5Y3rqr9xsV1YYHaUz5qByDD2JzSeNspCTPLoUo5frBbY6XxXS2zzGJpV2K",
  "key9": "hCxdHevwCcLzZDpiwqqyh7UExEBNLLThKSVakz3iC3HWtF26RbeimucNVm8ABjvGgMBLHQYrzJ6tetPpuUrXcKv",
  "key10": "5eG1wT3Jcznh5WCbfHqpr1X783GyS2DfeDdWHB6MQ1hEZt7GvDci61Rb8oGaGxNosVytiEPdbr17TY9xfojo6Eua",
  "key11": "3oZcgDabJSqbpehuLjktf3Uv9rq2Qpe2tbKHn4xyDb5wNEpPHEBj4UEmvoW8gJcrCmvrtXwQCxQYbNLrsu9bc1ux",
  "key12": "57T9hvpEY33BywNjsdLpX6FGeuPLoC33hQdCyFGxbJj9ix8WjSPRcs2cugq4ibDVA5JCEVuJJNUCe79T28R3ya8Z",
  "key13": "41zSQ2zoKkt12zxd2KMQ9xMAzMEKSPv7M9RAukQxiSs5ETQeSVjZU9pu8xVViousTKngm2XFuNemBwHkmji9bD37",
  "key14": "2mBnxXDhd1Wf8Kph4vfbjGdHhqq4KjenBuEDThktjzFAzLGCiKaYZXZj8KdVBKCoQ4wFyWK3sobiJJ6RHi2jLkjA",
  "key15": "5yQRLj8Z3ruZd1uACJyYM672BP7txHEANZi4BCyXeYJePtREegRAdE6YzZJUhctGeB9v9W2ZWGcZiprkH5j12stx",
  "key16": "2pQDNLT5h1W8TXMqPQzvYFmfvP9sr9AGn8t8CyQD4Lxxw5nevrcWUqBYNq3sChrpVpUPyeXHncRhKkXfNdapRb1F",
  "key17": "4x8KxYSTaB4cSijVmaM4xFYGX4e5PudTZcKSUJxVNdfWZ6xrGRNHpS8tAUL849L4KXT3QC9VF9PS59MGXzFbSJfx",
  "key18": "EYUUT5GKV22drYJNNqqKTB2h2mx4TyP1n6GfjQvQFGq29endM6SmAX6zqRsaVSYEq45P4gSk9idpL1uUAq4q38x",
  "key19": "125PYiv3UmdQD8VQQdmjkJZdfcecwXwuWNzaH44rrnga4Bih94Vt4Yv6SZjFx16dkGXouk6mADdJVnTa9wHyovi",
  "key20": "3o5BpkUDKdA2kjcm9ezF2LhLMK5ioXsdGC85dXn3rT4XBSntwqnS9Y5FRdFcKhgk9VJjFw3wvQcWpUCo22Rikh5P",
  "key21": "3kZeZxz6UQyMncySDckHhZQ21NvjYtPxHkKM3fziSX2VijRH53SzfLeSTfBshSSKpHJUxPJbdLccX8vcdEGUzRji",
  "key22": "488QNVi8xSMutovEUR1HPP9hMVNAKYSQyCmXjS5npAsMpe4Ztnsm32Srd1DCoeZtMUGF3gGtHc84CwiSQJhgbwrT",
  "key23": "5MJvPPo5N42V7HAfucYBMDQmBCFqHWWKZB2PdAcmugu8LBTFLSdxx4uU2FYdmMnZrWdKKuLu9Z2y68BirqFuBi8a",
  "key24": "3NxrjTAk46U3L2jcKogrxV7bGsSEp3NjUsVVByq8TCAAiVuuqL7JmNXdnwB9eKbaYi2su4vMvQrjzz16fBLscLUN",
  "key25": "bTB5i31a2Pn56eFkj9TRWRZadqv1hfhfb9FaWY3QQjhtw3DkujDWuDzyw19RjfmAxBXAV1SugdfFCpPMWp3dBmt",
  "key26": "63gssgAgXyWXKk5AftK6RSzM3v5dnDfmBWyhgnLpknhFYdCMW7jYDk2PptkQDAwexWtxaDfoX5CvgbNRZASzL7cb",
  "key27": "2YWN8x68nfKVmEWcHZ4fKGXJC7aMexA7NBQqerMABUyzm8CnLUBTKXRVdXBQsCnDiQVPRcaNajArFqns8F9w4dus",
  "key28": "5JFmbkhdH5DkvfmWjmvkeoA4VkEpiCD2XpYeWCFojx4jk8YdVXkHJYwFPoimGH6Dfo4XVXu2qwGkG4bztxmSReue",
  "key29": "t56YP26Z7VeRDAmg4W2B4DPdfH6qtW5B9q6NdNt5ztbPZx9MTXoWURzavqaXLMrFs5ZddfvL93LNFGgtap2SrYE",
  "key30": "5oy6tWRyxMHHz3aKGQUAerejzHS5yUExUwQqJQT7ELN3HDHZiZyv1fzGRT4x9xMXSocAUP4YwVgTADa5N5kT6YjH",
  "key31": "5nQTB4LDno8ugNrzJNRbAjjc3BZtS89TApjXABcw5enRRyFUzqDXMeKCpVyTwxrEFqfYzgX5DCWej5qpbzBKZmdw",
  "key32": "2BSVVW1BYKV2XRD9J6124eZQjLQJzgomq2Q7yvnrRRsCdTtEnJmYGrVGBXm8UYtc61hRHGgcUX37R46VLT8iyWQk",
  "key33": "5bkyRN3ZczhusBNLWsxm6HQGog1S3JSKGsey4nec2rfLx9CY9aWoUGkCZQpKRAAqq5mEMT5atTuyr9kMc4qh5b1H",
  "key34": "4qgRYPigitHNoHc1L9tJqx8uAy9kFCGBK9W8fifBzRb11oTuNh5EQuNbseJNUGA7JBaB3BY7g4Kf4ahSpnjhJ2u5"
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
