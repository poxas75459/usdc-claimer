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
    "43oAqL53d9AzzWSmKvdakG9gjYJ32PBSbxwyv7MbJFPYs5uNjLMj2RrcB5nXSGMQRi8xyvxByM8CXAiVPmJJ16J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXSQ3gwZ9vkyLPm7CJ52mf8V5iWxNSsYWZaFMmVzExjm8m7xLpbY3b7Bf2WeHv5AL8WdbsQtTrfnTP8PxM8qdTG",
  "key1": "4p8mzABY6FeMsLzYvDUiKFUsBwCi4XvWYRtCbse6CP77eGJv4bdzszAuyNgAynuwZrHCDtenBx46pJPLT2ZnSfRA",
  "key2": "2Uz3H9cHTgYW4gei1TwPJPNDQwrDPmm9sG5pScDzr4pCrSFFiELmrnB6mz4pvQnhjnwLt1Kx8CVyz7kayr4Lkqir",
  "key3": "5125nWLw79pxJ5eTF5kWf9r98nXSk7yJtSUahDQs8vfY2rCVW43rHhYZHNaKqVxB8SEi7991qJC7Sm7LHK2zmu1Z",
  "key4": "2gViYGR6r1H6yur5uVBoYUqrPVeoZEAxqvMniWcH7HXKDb5f19gdoi5a3iHJ9U6hmHBPmppLRQ9HCGJ7oFuipJmR",
  "key5": "4dvJLjhGkeR8tcUVe86j4hGGpQnK9dBkDg19i8MPJXn5JoJJ2Snx4N32dFwvVRAaT12Amspc7AQBGgeG5V8A4oPG",
  "key6": "2HTfcLqTMzeiKse3osQUgYmnk1BwDn8h9aar6iFM1oqPu2seYaVvNH7CsXzC3WGLS2uNFCmjut2peQVEhgLtcPrk",
  "key7": "2BV5w3hS8Fsq6YddSkZhUs1tBk2zPpxDZZPsK17mMEbMwkKmiTKZNf46YPkteJvVbxDHZQtwaDRtGPhYFvDL2QYd",
  "key8": "2jJbWSUGsKN7oSUcuXbr2HfUbd9kZMarfu2H7RvtydcknzjTwHJd3Ka7vBLgLFaRTZoWHW4TyEPEyW7bLphsFYTv",
  "key9": "4PcDzkMnaNXU47XE9fyBhZqr5LYvJQo8FCyoxP7GseAeDEaVhexx9FJ24DjobQ13dbg8NcRYCZ5ByM34zLzQw5SX",
  "key10": "kPecrZaNHF2tSUGitGGfr4tPX8aGSXsAcmc3bkckbZtuDTU1uFXEJwDRiEodGdEDvuVLVtA2N8ARvTWPsVLG38w",
  "key11": "2zV8KFSBeg6oExYVpwNzH3CFSkmq1zW1ajpuuEV1sPxWR2tBxPpMjCS87JP5aSsdQPM18wa6EDogz3e758YKGzbz",
  "key12": "qk43iAT7Yb8Utewiw59BbTP8jZQ4HGgvsC2Ysy9rgcmQtsdUyKBGKh9RTGGV4P7njWixpC744LqyYAC9xNkLDuh",
  "key13": "CdjzDY6Fzv25bjSHeEhTEKKT8QTm4t3KWRMGrrcrQez64fskgjWwzLZwWkiLcTMazibj41zaoUtY85WFRq1VRd6",
  "key14": "3R5omWcMYomt773LxRQZ4vrbYwKwiSwZaYWW4VAoTtdNLtyVWSCoJ2YtcZH1R4oH3HjX3q4oqGhnWPCwnqZJMFYc",
  "key15": "5FLad8smgV1JBZHiuJ6Cg6EKSb1PiL3b22j9WA23iyFivD8NrUXJgYjYsYTdnuwt6qGwn8VZCjZAkgEAb7HCR9cK",
  "key16": "2X4TUeCETzUvq34tpQpxXV95t4QFn1HcGX3f4BgFamc4HQKNvta1Gb4Pb4v5PxfPf5MSiJfiUabbawyAquVm76cD",
  "key17": "2o8Viwpn4fnQYmaouNd5iTSz1KApmsWyDimSw9mW6xwjhCWNY3C3R9LBrTkt5yRdPx9cTnQ3BHwK7Lt3W23b398u",
  "key18": "2oUkdADoKHmo42a7Yy9wyh49cfRzksX1aex3usZJDS3JjyrjE4ZnwC4ekrH6fZ7gdqi56UzJZXthzghZLnrTPvhk",
  "key19": "mHutgd2fVak7geBZ47snekavwM6NUquQTfzngctXzptpv9DErw9arHY26FTtZu6UPmcTy4tGYKFvdVFdXwtXQnQ",
  "key20": "2JMw3RX2KXrLnd2GiqscrPTdgvMGZzCCA1oceVojbx994MYF3v18r6nSzaT3LbW98DbuzWm5Xh7Siq1ewHvUCxMG",
  "key21": "3BfctbwG9sto8GUBxTJY7oDMnZyVMd52mm6JVS3Ajk3To5o8aFMSNbDUx17JX7yDmKGEVxqejM5Pmby9muGEVnwG",
  "key22": "4AnRrusM9iNnuYtZ7r6qZbrooiMYSpsBFCXEEUuZ6Kosc5K9b1RxUiib1Kwqi6EU8M1TNJKhVY1Av6TCSTEKoMGM",
  "key23": "48SMpg89bDvAyUT79CosuWsYrVp2DPCjMBAWzGfV9aQPM7vTS7ufMpUNxtaZKxQbo7wUkD4yCfkJ5sxnq7t2DcqB",
  "key24": "3CtLGG9F7FYiYakGqggdTiM4b7J5uwa7MxYvnUypHZ9bXYFH64cQG3GYo2TprmVzQevb2SSdB6AAucyFj8os9SQD",
  "key25": "4XhQMAR69cxw7Qe2Are14me75KGLKdt2XSyvvCkVMq7pHvGMsJVTpfa4rr2iHuJAv6S5j6a1iCFB5mnFbqZWSksv",
  "key26": "4RQG4KHcPbTD1EKb1LGe8qpU9JVShQ9Ki8yRMY5ozcr87BzFFzbeXfr2pd9xopfgApTQZhw646Emt5WSevcNcb9D",
  "key27": "2fNN5AjUF1iEvE5bXRR7RzYUPVwtudpKaWXi7FNiZWdXsV7Rk8LHFy2iDTwz5GybFtHN8q8BmKP8iairruDwut6g"
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
