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
    "4ewY9fYe42apTvK1LtsdR1SYN6jtNaJ1KZm78XQiEBtTHQwQga8aWGKDG1u4EM4Hp4YAi3Efz4vRdmVExpuwgz2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qg6iHUDsBS9wc61uRvyxfHiwVjuttxbXAfopJWESsRRwaE5VanT6vf4DBw89rhnPoyAADL1yij2HPPhh3sb1mQM",
  "key1": "2Wf15PQvzNZFxfgfJC74vk9HrRriDFxzMzr49thAiWHXDAv1wv3eTcysfJN7ZeBbuJAnu762LcZYF1hzcYMhk1Ep",
  "key2": "xNdgsUtwbxwc5Ur6eS9g3Ptdy8DGc7mxFvKmGb1C8MpSSdobVmCvD21nvr6rqquysVDZ5Bq7zkYjERYcSYtoN2y",
  "key3": "4y9BU7bzhfstaYursoEFhkZ7d1LFWZvpHEBsJi78w8yqm34XZXfQSErsN5A2P8ZxFZNFL88rQ6Lt7j4YFr7s9tu9",
  "key4": "2ZCFY6KCQyu52GtZ5E5WMw3hWTU5E7EJgaL8Yk44vDTiNJxAYSHnn2kjGFkyKs6hftaTrWfEtPGwJifJrg5y92nU",
  "key5": "Wsgyk7zCKWJ193FD25npdELrXYEYMNXbNcvzCRUKq8GWC7J1xeXWtcDGbWHgwD9sy8G6ME7B5CgyqkFgK3G4KJx",
  "key6": "4sgL9dR33X1RkKHjfmjZZEoDvo2Aki4eZNoxsAkgnZcnKVm1kMt8d9k5XimqTxfLJWZPbSQFw3euHrdXuoDYgJX",
  "key7": "FT1onsLVHd8HYHfkPdnPPBwxMCTk8yGj7cameLzG3XTyTkJtXxEgdphRqbFHQh4jUCmEEjR5xavD12AUQ7okN72",
  "key8": "1qzWActETtXs2UKrsgCdJWQCMUnY3K5f86bhBdp2zmKaABv8kPHwfvnaTz14qLwpshHJtZHYLWM8kyakXYCiKoR",
  "key9": "2L3tN8DQx85vw3rGpvq3C5XEaTJBvHkwcJRoowux4MCkmqeWCJPzfN8Eeqn97qwPhThZZMmC7Fbzefd2TZKgdYRs",
  "key10": "5yT8bTRiWB6nf1e6dJoN13bpmdYmy2KX6KWCrRh4bUvo4GcrNudZczdg35xfyaJmTmYTYkHLqqfg5LwuzgyxdiUi",
  "key11": "5TBMUBWAu6Qoeu35Lxka9RiKgq5NbttRbCoixTegxTVZf8WNAXzB2ccyR9xUv1CD6ahRCDHFTq3CZV4ciuK9d4RP",
  "key12": "2ffoVvCXugbd14Nr3ZQi4iCTex6569f3CTxBvLbhmb1RSg8kZBqa65sFKdNxfjM8hPzZpHkFLtmqAPEARUhm9QEp",
  "key13": "fw9hvamo3145pUsULYZZPafStbZB1cChBaMsTYxqdWTsxJSzufQhLc8hET3tyPXtUmtgGwFSphL8U4JxrCTt5Q5",
  "key14": "2hCvy36XTGH8XMVainshZcvBsFdm2QB3hfkS4bqgojtMsdbKeigowLZ7N65uPLT5ubrksDQkBZxeRMJXV2hPraqb",
  "key15": "47nhHKwF2XVxbWB1VAREW4wcL7ixvN7gBDNmbCft5wZaSvjYiiVHphJ1myXM2MPe8gDKAWABNAH99S3ZkuZwhDMr",
  "key16": "3yFfqNPYXChEQXhzhcsLRzGjwVxpCDzi9sme9ffk6q7Wh6Pm5Dkt5N31JAKfUj92sQEphb1NinHcZf5q62qgCt8F",
  "key17": "2gK6HzK6sgYy6nkVMDVMLLBvmwpQXtuYgGuATXGGK5HrxsfdUU843NzvTcY5oEQeDtLvySMf2wPh2GRGAfHYK3by",
  "key18": "ERZJnz3v4x5YuQ1dnqcfW9biwzPecpgeUxvQDMTe6BcbJsASzQC7GwgCkkSd1gzRL8S6nvxoEDL5DuzftYwXmN5",
  "key19": "2XF6WZJTxsRTjsv6rGJiNKgH1StzUqArWgWu4Vj3xG5pAcRKF4TtKv3fbe9U45TD6Q9NpJEY3sgGr5mkVXWwxZXN",
  "key20": "zyicKQhpXwySoEmpanF1dLAUUTL3RBhQuZ187zP28rPG6NzzcUETAGd23QWyuGsk5C2NB9GxZ8PiryxpTZ2QrSf",
  "key21": "511bQxGpbR9L6BAmmNNbUK6pmc2WjaMiEVChSR3YY3a1CxCGtsxernUhXuXrsgr3Wyw5pQ8FGYiziHtfzxH4K6Pp",
  "key22": "FGbL1g3NNUNTusSW93Dzi9txCFSUECZb8BbZ3aQmaP5MiptWfchMt9zmZG5AgsxvMWhDRz4RzS4bgcKCVRoEiQL",
  "key23": "DizGe1bd1CXja6xzREgcqyCNfRXyhLFB7L9xM43JfaDJCNnvJAbit6t34AphuHss8UGg1JcUmYfuir4VKeNMubG",
  "key24": "3g9iSjGok9TRKcbgF3sm7ev6DpBrBeVXXSZkUcpGdfNGjauQXhY6QxKr3aTRpdEUiGKA7gnCMZ1PC7B6eBRtv3H3"
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
