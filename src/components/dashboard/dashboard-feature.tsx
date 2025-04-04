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
    "391kmxWRALpLtH1i5aAppVkzLMSg1EzbuckyN7n73X2kcqUj3a1xZfYj6TWjc5s2Sz9LRVjVSjTcF3cqC3sYiYW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpYignyrv45vqvRLNu6rRL4seeRaDFBn7YRDAwzEFcMz2UsnP9ohUTPcms95tpffevP9Qgf5EJ87nYCCwvByTN4",
  "key1": "c2ntcPtyfG3qUo4EbtRWMTKVb5oQMBRuQuNpJYi8Jv95Vjds1WzXqEkiVCXX3ed8pF14ZRU1kp6tjTD4SncTmov",
  "key2": "vZLXpurQSDpsjyrDb6gK1p1yQsg6x7xcSTiQqoqR2ZmyMg4As3Y1XHp3D8w6N1NogUWPFdpktNEhpZu9iSNjXqW",
  "key3": "3v3wBtuT2nVMXENSKMnBTHJwe44W2r5Pkqv7EZZon9HLCBfUTLsDct6LoS9r9C5ZWnF9BuX4d7fevL9mY18ZKDio",
  "key4": "5PvFjgcVcMN6fzapsjyXGq2DFrSFpo1WwpM9vZB6QUQM8USBWfzNSPY1Xo7s4NSScJWQaADRxPjdBdqrKkAqNVX3",
  "key5": "22D4RiQBM1hezGoKC3gUwk7RRp2K2pJXeEXmmUfQfqLQLwXBE69NfPVkJHoDnq9f3RwexQ62SdspjTEA9tU7f27a",
  "key6": "ws5SqYLFQyotHqpHDNQk8VDU4aJA2B3d74nU1kYp43K6oGsPGDsrKyoAQug7MNrqxcugAxEt5ZPWSxyE4AuSyn1",
  "key7": "5hqMQBe31PSCy2XSgyrd8pdPEwitS6ZctgmtGV1JaD5hWDWBjSSLhCm8VmpVxBbW8gLbM9Nv8jd3ocyRTD7F2Kmp",
  "key8": "3qM8jZenbXKNwCmh1f8mejy5yiWrfhd79TnPg8aFdiwdvqbu7Q6ZWEPiJwfe1MV82L22j3fMQ6sHaUV1RshnZhnG",
  "key9": "34P1VpUn8zrNSQA9sgxXYk4ZXmSEdiGqbdwLizmoT82LH6DZ2o6cSCqqmtajE44SyK7TdHJcQPoZyTzCzAss7RWH",
  "key10": "rA7vy8vxhUQEhkpfvh9NibJNLvdF4AGEdFuDL79DV1agzhERGPT1baUaW1HYVvzon4AMZpn9DZhSSmfK1mcDeNP",
  "key11": "2y53hnVXi2yu6DS2C5hxpPh97PXPGbHyxp3sar8qzPNp2cMmHqexaUqSexJCWAVHC9h6Y8REUeZmuxLsG6J6CTyc",
  "key12": "46XrYLcLxMwFm1g57YVuwgdeZueheYqc5wEU2hSpCNvXZnUXSZc6mJbtTrADbw4sS4YTZeheH6hUkSFC4msX8kMF",
  "key13": "2LBtBAW58ryq5xrAhAnFLQVvLgPgz15SLCSpkSBbvmcQ5FQVNXz5Umkprj7sTxRjgLdeqHSJt3SiLAeKY9RtM4ck",
  "key14": "5rpidXaEoLUe9J4NMPS9k3QQreG3VmYLGVFLAMoAG6Tnw3LzzAtKkrgJGtGThPNDKZFGUiEXAqPKNu9mveoLxaMt",
  "key15": "32Ff7h8k2ARuEFDFmRGjUwHPazkJtfaV8jRzLbyph6afEzpRBMWmfoFksVeX1huRo4ZySTKiTx6xCTGPMpT6NYNm",
  "key16": "379hN5ba4hVLrfocjWL9Ze8R2cjDTZNN1WovSZFhRBVrzXbG5XFLDXfKwuRt6o4N39kZW6N9G3nxWkzm5KNjKP3c",
  "key17": "2fyUt235oUht2s42r8huHGzfL54WZvQxwzov76gKzwcM3jWBL5jaaCm1ihQ3vzfxR5bu7L43NxESoScrc22p3ZxT",
  "key18": "636Zj4cA81TCm2buPg9D5xFURggA2pCoohymCJJd2kDU6q3yLgazFtu4ZLDXAzNspxtM9sZSLCQ2GJz3Ynatn34o",
  "key19": "ip8M3BAjj4r32ZfjTMq1otyKkwR8mxRW9kJGZcHs97Lh8Ymn6Lh8opJwyKQ6JhDRaccyHM75VxQd9KUkcAKZytt",
  "key20": "qXijd7U7zzRJLQ3spLLxkkuYVG4DF62NyEmHbkqPj9Gwm3R8gQnMgQBtasjJ1jNJT8uMzWFYzNbwnmg5uwo7S6w",
  "key21": "5A1oHYouAvoBpyj2m2XCe7vYdjuXV2JsFzGCYjDeJvYrAidhSoyPCpsouW2VtsKy6q2oDUYMJFqrUSLnjzpxx23j",
  "key22": "5STn9nyqQUNPGqvEP3RJz8DTQfudKDFx4PV1zVaX7Jgvobvi2dNEF6MYgs3XGmPY744bpgza6MUVKYQswFjReKGo",
  "key23": "5FiNFdn1fC2i9u6K16N3e3m2QzjADpxEWR6hHB1XJVTaC5jhYGSw1hTVBef3Pr5Zf51BMpj5ZsDEi3JBcbxa7fmb",
  "key24": "58SfYmRXEoFhMRTi2uPVZPU6Z3poRiMKJPqf72XGbLd7FdVwJui3eAuVqX1LHEEYwDJXSraZoy8VJ6czwTPP9qYS",
  "key25": "3GhoEGyerQjbUNeWj5oxhTauzLUpQhBu2rTM198NrxGLWgbQ7ccD5rkFYmcDUe4eL6UzcfsMwpBogQDpXdHRk8F",
  "key26": "4nMNzxLm77NbAScdehnfYgNmwZyy9ijbwJFedMHz4i9MNqXfg9LXsa1YEx3f72xBniMy8B7VuwN9FZot6LRYgKQD",
  "key27": "5VvCnnwAyMYP1LJ1e6K3RQ1fYdTpvQUwpUvTYq64D9esr4jvwbcvMjFREEbNr7YfZDCLBGdwPDmBw3PKSc6NHVEg",
  "key28": "2zA2LGm9d1CcwXSHsm3yuvqV1hXAu4EDe7HvGHx6vkdQoo4Ejc9Nzve8qJco9ppb6S4gJp8Mb1UW98JLrJ54Eoth",
  "key29": "5ZHdtDNAKzR1GnWTU7Azd4X8gFD47uXMqe8mL2jbgMimCT3jMyVh7AcW4vo3XRs94WHMfikJuceF2pTNd1WQ8QJ9",
  "key30": "549qXUKktk7eDtHkWYQz5b7GLzsck8QrmnM91jsAMfH8cFih7roDedK1MmBKNmse4WPSRahpqEcvE2aYaVpTvy3k",
  "key31": "4Hsmb5FCVMr6xMoxkV9mBY9xDh8LVTXvKkdvKRvxLLKz9YBD4HJYFTbp3mdi7QA46haS3TJYGdJpn9kKaAKegvBm"
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
