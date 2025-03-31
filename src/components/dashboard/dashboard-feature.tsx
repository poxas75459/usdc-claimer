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
    "5DHZjGi4F9C5jMdRMJddNpvsH1AcxyYVeESRuiPE1rYGTxQwsBMnXuL3j8gdJnKe2RNwjJNS31o19JH1oWgrKXHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uneR7PZG3gCgxrMJyDFjKtCiBLuMX42vieRsYJxLrqSZDLY9EkCMXAKHZ68z3zhqoG9G4UNjH31pPntKSq4W3iD",
  "key1": "WuyFQjkWSkSW5eav9Af4UoZsyFouGttj4dc5aaRJEQobLoyceEB8JXsSiFDvcCkubWC6BLXBy7fXVnozeTHGbKc",
  "key2": "4qwQXqAGkGxEFfPUUwcNFh5kgcL5YW3CcZN3rdLjL8cYtkzPehx4V9AWfwYa1XptxJKqzG6mrBnB9jhNMdf8ynXZ",
  "key3": "5oHXTV88ZDqqVQRnG8NauWZJF3sCPvo6RJTmwsnLJ5JTGR4ywfrDW6uLqzWb2kFNAfrJZXQQ5evrAy6RztWBuVGA",
  "key4": "3M3CnMHKU1nvodiMshnkGWXnpTGGJNwERaTGQPNWFiyCvUVPVPgwNnbLEsSJJWHnwQ5wGV7TZ8Wcam3AjBqZGTor",
  "key5": "3RGT16vZyotaAWLHAogKi7bs3BipbiEXicrCJRd5t6wjMz93iQQNP8pLufUPsSiuFhqMVd1sH1fviRdjM4HiDjLe",
  "key6": "3QtPnxCKQ7EqtpxVHudR464pzQxxXGEkRsq1Xu5LaaNdJA2pxV2KrtNTZiVqsSVdDczvst8Hu351wD1R4c8soGXS",
  "key7": "3KgzR6MGJSxs1yFbjkrUrUsSDoeWcmyxaRwk9d3EA7isBdh61KW8yQNzvJMrGbETW66RfFZaYyD7PmYdK6uW298q",
  "key8": "63KFCSSxe3NQXKRxwxCC3qEih6QuiCGjPiZZSc19CXXicLjgP9pu4kxWL7nN3VRbmxUdMpWNHK32pG5DBJV7KnJQ",
  "key9": "fmiphuHn3g2EkW84gtcPQ3yKmscW72PSwUcWjuFagsgYVphoDhc4tBXxRQ9cWJD7HMNcc7zmzu86kGE8UrcpPbK",
  "key10": "4LdJELgevri5SSXwcuwViA8PyUbeTK2JSzjdKsz2ApXMyi7TTsuiVAbYM4k4tVtamKnV2egoQcuAt17pydRtuy2K",
  "key11": "3bFDuwkk88P5bRHrdzi2DeKpR8qL7HJsBnd5FY5tuAbVSqo4yTNwQoQaSo7hFvgXPzi2oWApfPXwpLoja43CV2ym",
  "key12": "2SsvwMobNwoXPKp75yKbZBo5TxxmATzqHTctcLGYfyXNhujPeXwwfEuKB82wPeQUPFyoDBcWeXuB8hVaKyNcsJTp",
  "key13": "8XmKBqX46dmxkvP6jvXLnhAgCpST94dkc554wmhyc8JRirhN5qjNHsvKnTHiod8wePSRDEcqy2ByJfQMCs1hvFE",
  "key14": "RtLwYsNxeZMKdTx3UrqHKw2BiTZkZeSvq5PPYFQ3otG9oDe21iPsMrqDkbGkg8RYzuET5CVozAHt2ADwmTjiqae",
  "key15": "67nuBVK7Kwc2jeh4zL5A2eYkq5PL864Yi34JUXMEpCMZXNCuW7LDMmG5abKRTFrfAVrfXjZuUdeVLPVkuDXV9iNe",
  "key16": "4krkBYj37jvGcvRw9cMSeFn3G5PXRheX4zSUMZAH8bvYWeJB5bhGmPH9cEMNrtqrejtJZRbEcLXXnF5gtCLaRmeq",
  "key17": "4nAVsDJGEjM5hSUbukjRX8W2EeMKj2MLHtVJHPjfRYKdA3CRfUaqM6PJd1pVxPqSYPB2NbFNZQUt5qhnzrE18WMk",
  "key18": "5hsqJb7Q5tUV27ETZLcLnbCMGqCALhkhttsXdzme6mYfSgAixrJn3WAJkx9LxTzsmBcCJ2vA2NrJjrQtTjveTJxP",
  "key19": "5Ltkaj4KyNABE5Lq1tZpyZhxpAx3V6V1SAzae5KQRNkd5KewSwcwayDgpm89izXgLXeyeST2sweiR8JfDTGN3jhh",
  "key20": "7wmPPquggwjSb8JAJdz9fUPg8fyNTuRMsqzs4JEitTjWKDULJXvSKh9sdpi8736spziL2YbnHV9PzXrfzpGJd3o",
  "key21": "VNR3bhjguLfRKoa9zYrjrQFbMtJLG1Gvc25LPmkEhLKMktMfRirjrSfse8d3Jaibj17o3Zez7RUBRvbxnVEqRor",
  "key22": "5BgyvVzvKMrU5uVTpGyAyazrmWNFaxW1XQgYL6gy4RMecdZTnujAA24tLmfqbTa3QBr4T2TBXiUrxCsDYYNk8d3D",
  "key23": "f6W9jwtjFoCQGFYHfo4bo2U561v2kVSZynVKpWzYnxwaRsFHDdfiKPTRDktw1f256JZEvqknTzX7UNpz7jSy2Qz",
  "key24": "562yHLRFXU4Z5ywN5Du5Ljoy4SSt48M7JLD5kMYDvF41wmzFLRBsm36g1FMRLzudVos2NN8EsQQtnmQrmQEynAQV",
  "key25": "4D1hnPtfcTaFwufr9ak5ffXM4f32x8tUBCdrK7g8FAXt4n3CUGtTzH3KgcCqhP7Cmg95ZKyBkegWzgPMm8g1G3eH",
  "key26": "ma1P7CqH53MA1T4qSneDmcC3b9M9zuxM85vWCsigkc1fTjFRPQBaupiY7aguSLhMPwwqJmvxeeW39sGhBs94wEj",
  "key27": "jgRzzpsyyitEHST5QaJ2fpNwQWSv2tHF5PCPHcmPnUXsM8yXgMKHpa6qzBvMsp57FBopmExGLky4mUL1V8Tcbdw"
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
