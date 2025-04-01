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
    "G1YVsDzkJcJgZRR3zeJAmaiUTtsS8HrXRkkpfMdgPdABjrAWdZKNb56hFUTUiCc9ZGLP78T11Ke3NqfXBBu3Bvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6vm2yB88YxnqbdhWZQSsKdChf5DPeSM1W6So9p7uVwuiKhugaLRzHX3qsdwqT3rMgcr2ocdvZjsXpEryV6QBMX",
  "key1": "52KEgTgTDmt22ZYDT2zmPsZ2z1BQpzPMnrJZyASAypFYwRxjXMLsMKe6raq82J6YX9JpjvuTE2oL11z8meNCHxwK",
  "key2": "5rwCSZdjd3xQsCtZybbiUnMmK8d2WBVkux2CxBEcDYzEaWWA46jE6JeYMzGS7Y3uKxVqQtLqdxnxv72a6qQBZDtJ",
  "key3": "5CiMCz8bZnycAfJN6QF5qH7UtCZbn1vjUMd7sv9ckEemrK1rRgPhTWgFHxYmQP9Z499nUcm7Rawzu7wBK9LthEF6",
  "key4": "3pv8MbmjDP3HbMqQYiJxPioLPDf1rVD17dBJ8M7UxfYpNDFQUn79BUJSsP5LsA286DQUmoszDvy7CjKkZRwmgTyV",
  "key5": "neThhUHkn7EdgsmynUFezPJwfSw3owWoCNLrapaY4bzA4ZTSZfk9KQN9nFfEW11ywB8P6pEZUsNmCGgYt5G7kmB",
  "key6": "5YMhwUUDdvmarb37KoVBhjuAvSH3ZRtAqCyLtq1Mw2gn7Cy4BVZ9yDhVqiLei4bUmk5XDoA6fvi6Xv2RqCrQLYdE",
  "key7": "3bk2syj96AVz5MxtmqECGK2ovAVTJ4qERTvmBgfvc7KcQLTk3oM1QeerrAQaNdi44bxGsU78Pdhc9rqNEVTDdEtr",
  "key8": "3hNFKqkN1qyfsBwg75waeMwzJTWiMuiaQMaj1ZxHbojbgcvLmNQ62hDaFvMUaNHTBeQFDSMDN8kYkVyuNB8t5skv",
  "key9": "4AMJNrAoTr3U9bJPNJBifu2MfMuJ3LTjtunynVfcc73BJoZgtiDBL9MCEhnMwB1xF5HXLboapChtLsAm3fYJCASj",
  "key10": "2Y2SW16DzVK7HALGRi1eWVnADe3zH9ZgtKShD59MeoT6oyFHeDNzdb1ZYuNUbzgscJowAyWv8LujPGHMF9q4oHZf",
  "key11": "2jk4Yyhy7DqKhG8dTzehD2rX1hXg9AhA4gM3C5cZf94rpj5T3UPTJXUFdJNdT7fwkg12nnyQY8vgw3AWV8MH1pLm",
  "key12": "5JxQUrAjmbFNbixwfGN8icwA8jSHhAu23WMsXM8713W3UMyAe9oJsPKXf9d8pYVhHQZggWsNiccmktRgPzcTNm3G",
  "key13": "4uucRFcD2YZ6crHW4vMZeT5jo1B3DaXqCL7W7txwgorPNTpTCDfcwFL9jp4HnHmECPfsCea2VANzi6mTE7MciuHo",
  "key14": "3K99XNqZkKK3iKNNjkYAnoR1SrtkWZnmRHc12gDEA7nf6MoNbohxL5aAvrPbaXBNc1GBzGdnyoYvmtEBBokGZe4d",
  "key15": "2PtcFGv9ZkzY7gqSD9cWbhZmZuwDKTxGcCfeTE1593vw6YcHheGywLFcszYyZ6JC3TFyXfrRPrWbVaZ1T4tPzyb5",
  "key16": "4zNgBii2XtG9UR9WTsQEm1FpMKA14cNEoQnExNVY1qhG3cw7Qm3V2hYRNz7gatV2jfRWmpj99b7A2rkLDsLbNwMC",
  "key17": "4jxvRX2KFxNeu1ESMTP2DctUU2YPMWYSCehfNrw2iHMMDKHwVpbcPMskvgjDWAsewgFq4pNY2uP5ZGevyeK2D5kd",
  "key18": "44gt215obirq9ScRm2WMH5hBdAE7Yxbd8KUWuk6mxBTeKvzj9HDtq8fpW1ypbwZqyDwg3NHdHXEHHmNQufk4VABn",
  "key19": "5xRUywX2G96hnGVdUZU5rQcX8hvrFh13ExDxXeheBesNcXHVmdh59Tj9EmMGKJZymwsC8LMQAMyv5No2SWWP7PBF",
  "key20": "GXL3KCNQr2rziT9mhBHFd7mY6ZQNEjiCs8eobrTgAGg1cjvz8NjNnimMQjd3aN5UtTkkjNcrJDn2BRRcidGWUjX",
  "key21": "5oDBD8pEHVD3SMUPXpn1PACtyLzbv82CNov6hRJ19nXVtBBSWqixbF6ti4JEQRBXjgssmVY75h32k3tZU34y31ZW",
  "key22": "24VWLefjEYKhRVM3DrAGJwXQ8bUdqBY1oGVxgFVAgzm8oJP5Lb7rNjmQXhta4j8fv4PvWzR4avAvaNwQfYEnSzsj",
  "key23": "3ZWmxcNapXTQPDaSPxgegTw2fx9MUPyhatQYgTfzp2ksYcp6XoigBynF1THrts8FyzjC8TEGHn6qDxC7AVEtdcmr",
  "key24": "3Sv5AzKAPuVgeTYVXk7VyL54tReF7CR76ycpVgzvFhgYboNqMKNBoAB9aD9Afh216ziGJdqKzSNusmK2VkLbuE4f",
  "key25": "4cNh75BX5buTk3RbyBqGw7aXA1NnS6rMgySw1fGvS1Rtq2rGuBzwBbPcaSWoaJUNnuoANYnTtiA4ZfPaxfJ62RQv",
  "key26": "3zrse5LQdCR7J8Ybnz8EtagUFPSDLGLuW7XyPzYXwFEvujXUXasEc3DG3E7e1Pw7kt3jbNfpSdtmZxPXviRGXtZc",
  "key27": "32izVetwfRSGFMcjN8h7Qb4c3K2WB49PYrpgJS9w3GVwY2pMT5xA59bfzHUawWVCxBYqFJ6Rc6D1qdj4ugjHECjm",
  "key28": "2RiMdtYTyasUsPqMssdMGq7hH1MCnqGra3tWhrdCZwSQep1MqAzsHRE3aKjjTdABDnQeQwpFCD2vjZEaHMDk97pt",
  "key29": "2okVMnZ2UU58bFhi5KbtF6vNWmvwF7vDm14zcptwMNr48BMYoC9Z9gESKkC9egWmQFiizjkmjNQSeyG8FYvt9X76",
  "key30": "2gp8fVEBj96Kd2ZtzBNySiBLyiabAyDmuHmnRx7gJAn3iWoPBidc1uEUnSLFXXkbQC23UvA9UyMVteRT79fF8Wf3",
  "key31": "3RcB5MC4h76k2s3Be3mxMGQdnFkuBHuT1rGLF4zGxqTYsYEAgRtKsM4pauKqDf49vHrVFRRjAjDQAiEb22rhTu8n",
  "key32": "2eaYbtyB3Q3QDR6TzFfDogCRb1thkMu3vJyQL3qHdo6XYGFk4Yo3KnGUSWkUsPg8n5gtqadUemMZechntAGiRK4D",
  "key33": "53M6CfgEUQo83kgnqWp1VWuHiqVrDQSbdUohXFjGP1tK7f2dPbCRgu18eT9NtYir9z4uL5Mncx713mi4f3D6dSsz",
  "key34": "659WfKBUWoH5FoD9piBUpingeFaDZFPtuWAiDYpcM7g1A9ZYvDqbgY1SvJ78SSrVDxF5WQzV7Z3kJAQ45MnvktYa",
  "key35": "3dHSYZfpuU8px1kxGtK2PTQnsCM7CEof2StrXmiPBAeL6oquSmm4YmFEmSpHNhRQRh5f8JXo5sWvcrCMnzpr1Xzv",
  "key36": "3tNiXmtGYPtJi5x2hkT53KQq8tZyyvJmLzgUYx6WonTHcjGdEevqnVJ972pWr2zP54rX4W6QmKZ8PjqRLXtgvrD8",
  "key37": "27FVck5rwR3ZazNzEgCaXRTZTheL7UowWWVdrZhBYGCRegvBTc9qw9dFLUgMDfx4iupgZUBRgnx1pXFMWDqheW4h",
  "key38": "2URdHiDQgHcN6RSMLGdRPozGXFmZWansTpuw4wEx7xHGckDXbqNv3C99MFt7AmFMBGWv6katQ6H8fNtE95sEruwV",
  "key39": "458wfKCCv8eSJmQXLZnc7YUjLwsAg11bn34xCSMKNaQw85a8NvZf8geABYgd4943nquCmLNT2HvAU49BsNCMkvGJ",
  "key40": "2ab6SCfyMgvxXBpqnwjKqMm3Zu7jtAmn1dTtKvBNuoMQe9oYXimPEHWgKXqqcG1pUdcAMowbk4dQDADLhvdGnmqj"
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
