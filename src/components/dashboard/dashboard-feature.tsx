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
    "2biTNDvsMgSAprPZDfFoCvuty6mTqhBugJ8W73JHrxJmoqz5GVsMyz8qqmmEhgUV2XKXkD4AN3fpem6tCpUujidu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hN2DyZLGBkp6Vhrv9pSRKeh8GC57pYJQ2qZuk3mWqdzmXjc4C6epVKzdeT2WrYRZ3BSycs1HCmvhQsaPTzjJKQG",
  "key1": "HmZiz8uLd6ABNGDwWuFm6YUmasnLzLZUGaeytqPzB8weoKG5TWkUV2YR2BPru9HeGYrjaaWVVLRgCF3pWLVZVaE",
  "key2": "4Yox5ybM27aMr7Gm45ARuJrCj2XRyRcFtxMQZKRzJKhrT2gZzQdRfoy7k3FYstWAE4qxyhB2dRqHoanZx6tHDUi1",
  "key3": "2AZZXogD1QVEZ2S5pJzMR3WoBxmf1aavY5uLVdu5rrnvSccRNHfdAhAr4rGyTKgqLo1FN1eocLrTM83eqZULqWPw",
  "key4": "2AQHY92Upr6gPx5vPxEHnGcyod3uhcr2DtxJk3JeoA5Q81USgdDvacfHnMLPtW4AQULyg1Qzwfu9ox9BYMqNfybu",
  "key5": "529BUbyKmWHh7EsMMFa7fHTVA9mknttLN1yDZ5yRVQkVjF178DQZwpnEj4LyMy5AcXFkcLdMiidfTpzpPH5n2MM1",
  "key6": "4sTkRYPMJBMjRzP2xbLTTfJBTJBMZFRmYREQo5rVPTWFG1k9KjZgtxQ9uUSnanrPjzPK33dqHJEBvpYwRpBPNuF4",
  "key7": "5kp3VMrRSbeVN7NujUa5HDsT8Ciu4Vg2zg4wYvHh4wrMyjjK8Mj6dZxwNJbG6pqwrbzS6EpKbfNiFNHzBke9cxDk",
  "key8": "4hUKeCBemmjUbr5ZbHDXiZgDgunuS6eTBK2Pwr32iWihQT8egQ4JcsheQXCBapwJqHfNt3uFVesNvd6NykqzNb6h",
  "key9": "2VoAmj2LHzyKvqAmDe7tLuGsQoQeArLcGG8245wpMyAXW5yx7i8e8VAS3xMtpz2aMVrkZWLMMrzeKvz25opS7wK3",
  "key10": "2C1nG2SXrKex1B5Z2gnYxwAN6tJqfFgj2NVf26KqCumdrAZJEsqomJv3jqthTwndqcJJYo14HHfoYHCzmCPjkXHm",
  "key11": "X4bSFaUz2fJRG2oxtGZuaRbazb6JxznM2LFhiQjuU1HCjVqszRRPT4ss8hX35km3d2gVMbGuvxqxqVeeFDkb1XZ",
  "key12": "2FhLT8VNPnnTdrJAP2k5Zk73GPCJSYgieKgGv8FJ2uxqgLgV6R8bTGF261tZvMQXWKjLDinufrwqC5ST8kcZLZDt",
  "key13": "3SRu9FmmWU4KPMkB3pGk6DA93tqJWXeGo1DyvhCaSju4YVTR5BPDxPvgKj2MonjFqfMYxZeWwSzDXrEtJS6tVmXQ",
  "key14": "54towReAhMuwxXWzgATCBc7EpVwGFayPULPyq7mFzqHxquAoKQjqTFKZQVi4BWKUuN1zBRvC9vmo2qZyXicLahrn",
  "key15": "2Ev4gQGULh6FuXoxBzs66nuvwod3kL9KFtcgSjNgaQHgTDPvfuLmoULLg8Prx3MamcPEBN5KvU5futtPNT16QMBj",
  "key16": "61e1y4tqPsFPMYEBor7FacqowGpdkbcCF7sb15KwBpFwvxGc2jwj88mjUrumCMjmh2p4ABrxwZXnwMuArvmv66Nk",
  "key17": "vpeGYQH9EQ3cfjrKhvHZGequycyYTM2GghtTzqigXjMJwigpZ3U6T3tPRw6RtQ9EHKzd6rG9kebByahkzLBAEaG",
  "key18": "5HL6NE2QHoxNT1Ui2JhM6TN8S69FrsX6rKYkNvW2NzArBmi3gDGxyibQaLDpSjmqocbhkwRTV1K7Dk9gHtKWJsJ4",
  "key19": "65z5qtKKpP2yf6Ay2H3KJyYfaHJuEE88VKQjySXBMpCRn7YYHmfXfQxJ888eCBbUXcgHbu7E5WoS4whaQQKDDamy",
  "key20": "45vZnu58gBXippUfc23SQeBN8xovPtf4XNvmakavSF9bTpFf565xnYQiYdbC5z9RyEbLz9qSEaYnDZz4Ropzkm2S",
  "key21": "2RnPM4roVaLxb9jptxHhtPrL65y3rcsXajdMLjSu1EsuMJDEzW6gpozF5dzapWx3rD2GaZ17kxuvrdLHUR7pyecQ",
  "key22": "4CjnoWJtMR2aSTHYPqVmmRsL1ANrKc56p2Wx2p3yAThHhGbCT6ZVGG5YKwfBcvhwxrvSWRxcWyQfu5dyzdEU86qm",
  "key23": "5pmMR7NbfrpQh2NYtNCQAzqj7SKBxciLk2tJQq4hELsJ9NsSCsbiWiG8KnxATbLoJ1CrKEeiq6z8Mi5pc2ih5xmV",
  "key24": "4mYT4Ku2tGMiXUDiFh4J14wwcvs1R7m7xEAEXJ6mcRp9jnmA4Ty8Xq5Qfa4rmGrbQHiydhUt2tCCt5mEYuwL86E8",
  "key25": "5y81GCsLaBPM7HypKgJTFgzdwdo3vvYm6JYtpnVxYPwNPiUPhbLFwAz4F65PinZPcm9gbLEaW82fdZR7nFgsJc2K",
  "key26": "4C16wL6c6GXTa8JW8mY4XYEPL1zua1bgeTgxLzNvuUm7FLaMeNLGFBmitziEZ6SEws5Xprzaj7tP1VFa42LyyGgL",
  "key27": "5514hF6YWrygTPbgcwb2pNzQfj6PwwyCP3oVBubJ3yJ7fhCVJa7oNex7Jo6VXz9C4TbevhiTNvRHkjVeXmTKiweN",
  "key28": "2Ns59oaBTwCLifpaqSXA9JSnwBHSbkVQ1YKM6Mk6MbF6htPMTzNBDRw9bDELWSGyMiA4ESxyptEstcQRxi2A2Qws",
  "key29": "2sigoNcCaSa63LH4SM3EWhWiqdbhxSmf2EmHFdmWFu4CS6M1ZYCYn5DPhvJi36Cbtg352WrNQ3nBvYAecLMrqvvF",
  "key30": "2CM2kPsYsazRzmHqacLEjRCejZdstzvHMi6TytsKSDRnr8oPPJumZ87C1nP2knNSM9UWw3sWfe54bCSgndPfoHtd"
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
