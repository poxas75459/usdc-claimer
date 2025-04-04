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
    "2PGGhGquPUaPCLfYRg8UVfZxxrp3RHbczZuPiUp6V7zodS26rnxiPqHLh3J7gaaCbiD6Dif7qSShPSXoX6oGWgjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24p17TEATNjsU5ERRb1aYUAd7iYbkUskrCRrWukEPnYFnQUJeVBzDrWDZGdBttnxcFyzdFRLu2NGRGfGo1KxuEim",
  "key1": "47i7bp8QbXEb72neavENfsvUmL3VDeMcTkS16F4tjhp8FbcU1Bjh6sDuKvQfJ7uMC7WEDrAXhXChr8KcusJdDDHb",
  "key2": "44K6qzpanY3PvJimByUNxhVjegMwTWrSPumHPkvZBG66s7VEvEGuWXYvRfWF1KcBW7QjJJxuCm66YxikPTprWego",
  "key3": "2v3jThHdLMiXYW1zXt8fHgVE7AfXQi8FMxz3ZanrLTpydB6CtnnPprhkDfvojZ64H7NNNN6SYXfBpFJ6QCFHbiEh",
  "key4": "KNbVRzzuw3xf3Xu63oZiPnEGMqTeMwyeA1W4ti7r5v9RzLciGNfGStSv1VnV5MXLpNByeXRAScWpTjJK25sgagt",
  "key5": "2cpbSTvPsnYruVejpmUfsFzCShTuUMwye2DQWAneUnfYd6YaCV5fZGGjtr55MqVi1hoc5tGHRqwpTEvaSzKcpsbd",
  "key6": "4zHtX1FPVaWzf4wRf7ZL3NJAmxjaTuvfDqbk7Epox1xUK61a1dFVV4AC72aDC8G772zyLap1ehwYkFu5C3Jb1mxz",
  "key7": "ssm4H7X1KBuJmxfTWjd4BN5NTJcEhg9QuAGUhZ7fmVJfVosWC68qKeLNnexpNQdxVdntVE5geKVUsRvfjckvrm1",
  "key8": "5UxYkvxpgxqwUYE9bkBjTyk2AUB7nBdwuS6ShJTPqnKBi9KZGMnCw3wVGtEj5L9oLPwwzbmfsv8gXC3FJ7rixvnW",
  "key9": "3s1dv8AeUy1zxT7d7GDX5oTvBEj7eyJMpk88dQif2StdqsQdGQ5h3wyiaYdkJan7MRaCaDFpJorPWeMegA4iiw99",
  "key10": "5zRTc8Y24mqqo5u11hGZeBExCUq2ATJPZWXEfdv5UBBgxHPEe5daUJA5QjhJe4wC4r9jScx9scZxwbKsXy9pyhBp",
  "key11": "2P6ToeWAHkgqxyiTvNBHK3QAvrjWsH4p2fww8YdRSm4RbCh4NY546srpPiXcWPKfTddnQ9CPq42gz5QiFX7WQEmE",
  "key12": "35GPfr2ftE1iy77993ANq81gSr3wHEbM1dKwSG8KxGG8SBwTF2RgNwbN6hYxrv52GqiaB2kNKp7iNESFiu6L8ZMy",
  "key13": "56tbk77EAQwknwibegTjuZbP2Fd3BswZzW7kSPWVUBmYktVNWj8dUWz1zNskjbJu843gxswmGzxbbmfNGWP9vbTf",
  "key14": "3kbdiQMJaWCa1c8jDwTJovGf2mBUuj7Y91U2C7PSH43Scfzj7daNyhHsM5wEJYk672annwpGMnJgRgt4wZ7wUQhq",
  "key15": "3efxirYrAawpUajXYd1mGzxUgdcebRnrWMQEr98YU9eNYcnzqmMEm4iuicyfr1DWcf9QrXzjnEvpAVfSSs4SiNCM",
  "key16": "2VEk3mQSPULVoTjVsQHWBDSKHxFEGCRC9ux44ZN9THGiYDoekXGXJYJV18HHPCgeT47yGuCmZCnJJUVZXD9bShFc",
  "key17": "9y2eWKswCU2s3UCj7FL7mwpbV85du9tcEnYgorT73Zaf29VooaMpXaqcz5qX4C9QQaemkithHQ2kDhVoeYhftGu",
  "key18": "5ioQj1kRwggx52ph9nBrFbmubASCKUFQ8UseahihwodVndTqzXCgRPXhLbsBTCpbBEMDv3xd6YVZq36XAgDYXLrN",
  "key19": "2MEeWCqevFXfdPxChcdqpvXBJus1T1hPJbGsn32fVBVAbMyd3WFvHvMD8YWNWvjropmpRiWp16iEV7ANDPTwfZZw",
  "key20": "kCA5tbvbrjDGHH7nSWabzHbHDhw2BXEECe5FZSKeA8efNLKQsLkuKtAGba1VQ8LcZfqYnPcswM7JXoPjsmqvhKi",
  "key21": "6W4fFr3SuvBiTXZXgpxJHNqfebGodtAapcFF1NpxtE9Tm6tvEte7BzBoV48ZfyPdL6LEGCY9zcSPeGtgDDtRBE6",
  "key22": "5W3CVgvXoNbqNTN9kyUJmpxFzGCssZ7b7Tio6o5UgMaVh1qvGcmJRo4cDMXjqDYUXZAD4BHU4QMxbyqXiUEUWHZH",
  "key23": "Jh2fj2wcWPFa39eLuRDehfSH87B8Znx9ShJcu2GWtXm4AvkuDuajSJVEwoNQJo4udqLZJn5KD1U3mzVYHxH1Gpz",
  "key24": "Etbt1MCATTD71hBVYXJfXdCH1nxU5BDaYDE7cQFq9Sef9B46X8VCEumMvkcenJUSVHHB7o2m37mq6T4YBCbwL82",
  "key25": "owL7PFXtFwzfnK8TM5SdGi6PjE6vJqARz42CESk9xrhWBqxaX4KFkCnpH54MJWryJnBT326NVmqZCHcczP6biSi",
  "key26": "c3DyHe7MyFsHsAi3CQYbErf89wU29zqqjzYQs5KSUJ3DvaKC4EkK3LHmpG2xKJu9tTzihfCE9YZCurHVB5qqBYa",
  "key27": "4w3g53b1Sd29rJbRXL6qNReSLySo77J19Gt2mCWuA6b5ZV4WSTbUUb3F46GifansiA8wHRw7Dbg6jNXV1fsUPnA2",
  "key28": "2jQLChbfFUHyjpLCjfxPvhJBR1D3chchw57ViAY2ZCiH8wKaS3KJ5Gorc98cdGZTQ1Eos5p9JNZjjDtEUaK4nDhC",
  "key29": "2rNnkWU5yZjvXm5z7nVBkYCoT6FmVppRfo3864ENmgmCqhoaogt7zwg1ymB3PxxZpDwGgVqzXzZwjDraPr1Nhcyi",
  "key30": "22d8PEdP3Qmk1CEMB85ELtZ5X7VdmQw7CWSiSGgr4AGkK1ntFBaWb9tYe8NVzS13RFmtNaFyCBn6sVNC5XfodYs9",
  "key31": "5gWoesqhvZgQCYdMvWZAADzKxNANQ8VuKf8Y8kAL4R2La7c7Tse1XjaiWiKBXmEsEmb7NMbxLpXPvsF5ip1N75qv",
  "key32": "5HJX3s11pxHKf3emdFF9rG9YpfuqxYd3tBKQAoZeS3PX5fpw1Eizdg3Z8CdyZ6Hxc6iJ4vU2gJS4iraRfkwrwm5b",
  "key33": "4iZ68AdvpEEPkPtPTr3oB9SMiEymnvpEULNXZw42uh8iNxiF7PLFrtJdEhiF7BzvvTmJHbEqX1bdbpGr4sb3BX2D"
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
