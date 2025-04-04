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
    "2JRkEaxhBhDw94G3y3ZxGj8qTyD95CpLjdBkyLKeYYZwiXYU2HJpH9T5ZmiEJvRtH1HpUjVZ1Fd2pJGvk4h4vmpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DqieJMRxbkXSuRAt2vyXjabyAtACG3HvvcXrSaUy3PucrNe2HrGLYVScLx16UXacG7sQJKBdd4XWhvwU6LB43iC",
  "key1": "3nTvJSmB1VrjznsPVVPzcxXY74rbaCGdHF5HXEZ4k9meLdjMv3tMF1FE6tDNeX3DYPah9ZYUdUAcjkd5NTqpmXsC",
  "key2": "5wirM7GNck5TrBZEH3kMqGHgrpmKiZjGchDHwJQxBTLUCs5CnmvJQ9boSWYczGVUjMgM6fgpMt51RcDmKhDKLXpE",
  "key3": "5YxV1ALHigkkMdzmJYsWCa4CSWw6nEUawXxFLtaR1ZUBjb2JkkpEMnSNqN485TdRpnSs6LcyexVVZesq4Ce84mUe",
  "key4": "34caKjiuoCsY8pu6oHXMza17gNdqzQ5eY2Kpm6YSGDe5S9nZ7Y46C4w5Kj7837rZH7YUryJZ4u6uT7mDUgcBGggD",
  "key5": "5GtaPzYLa9Ta9Doak6SHeKG5WQaJL7hhBAbcyKjyRfv6zAP7NWBZRpV1arZkdSYaaJbgfximEKLmmHSbbxAqK2k8",
  "key6": "wtH6APwv7C3yAT8L82r5LtDxizYpHoqd5JpgE7EPiCvSGF5fD4eWRkZp7q5wH3BnerV9AUC4eCRKirrtFqDNz5W",
  "key7": "2E4HfirsXrk9BcF8iBFBz5g6XixuVTiuePd5tx5nB6TSzU9CdsrUZZ6dvKkJ7p9NWm2pbH4du8eUR2o22Q92ymVb",
  "key8": "4HNz8nrNUWVjM8WmDcwMfYNqefst1Xa9Agxc9gccXQKZk6ig1o6bxYaDX7RGrsugMt7wb5JJp6VKBSQtWMVh58Tk",
  "key9": "5gnMX5dcgzmtdHK6sDMRvaL4VZ3Cim6BhxUp1mxrDc4vhLwGhk2AaJCTaMhtSvTZsBjHdBNCAbhSphwL43JPz2U1",
  "key10": "5bd2RgVAdsFa42C45syWVwtt8yz4cSPRdX391p2F1TZyqNzRswwrwEc6WTGYpQzW7tn7ZggoLVs1wx1dsuFoBvP2",
  "key11": "2h2hyd2fAMr78BkkY6svdRWHACUob1mTdcN2Cqe9hXT3ZotU1WaBpXT7GNsZaGnUW5eCwgioyx5cTjUcXRcMKUn6",
  "key12": "3aiCqHribuNPDD5KAqsFhXTPP8ahY7YAnu15PUf7KgzhknB5zVeQr4cLgCM3P1yXqnY5NEbkNM2utYdVm6xQ2stc",
  "key13": "26516iZkRfns7iYyLrm4xJ8m6eGHYBxTvAGDgMTxVeKwNgnBuLEEGw2bZav64fta1YbtgvCNcS9NbhDBfUWnebp8",
  "key14": "37uM433toPkpegXF43eJEnT6HSajdDdc8akQNcufwpASe3LzNLcQBXP6s4kNjLfLWK1yUT6mchdYioHjPMiHGmbv",
  "key15": "59AoEj61jmJuSCSzrAhXS8QBAsrhavEX5ZGV8QixvpB8Lx1UbfWZ1Mgf9nCFA2AmtiXLZUQMZywsjAKKxQvLgn6e",
  "key16": "2fkRDdfJAQWrXhKP7RcDwfUAjK8k7rV5WiYsRRCxCxnFSWQvvRzAavqCJoUtWW3okKP17baweeY8yssSxSaKJBJf",
  "key17": "2aCKzqofcyp98Cvg83MFRsLfMpAHLUSp9vx24SeRMxzy3tB6LXqTtfr7Y7p4bMSsU6zWEvcVWNMAWtPNhMXbYpLQ",
  "key18": "2ixhnCyS4o5Bqvf9GbPj42H3pCwsw5xjHTzfvgnExfrCJNGxftuG9Sf77SatCXH98jPpwTMPJDtLdVAZNc6TbnmA",
  "key19": "3q3KQJo6hGLjqqFCeVxM8qKBbyeRdd2WKxBt7T9WQkMcGBWHcoT2jYDA7udPE6mn1S8EHRgPTZW1xXC5ZLGtHEQ6",
  "key20": "MvMRW85ALXkTDHA9qu1KGGAj9FDyNG46SBKVwsNx7VT2BS2AFzrRTexgysNVCCyrokeXAa6zto6W6Xtni3DnzAz",
  "key21": "9TRWQR9ijMApZs8goXjvwNVBNZdMN2kQNS3Fg4vV5PgQ9H9jSdtDG1mhCASEGJbR99VEbwoXNRySz1P7uE9ngBc",
  "key22": "5RNACUA8BNb8ADcTfHSQhdEaYGsoMcjyoYemLDb9kZsUDkipKWsTZhnAdjyQda1mjd1HMWmebLnk8ifYCum4RnAS",
  "key23": "5nF2fGP7Apb2kaWn1QCs3umryCdefany18RssbsvbFNhpAuSFsFu9rvQfLZh5NogEAgQo8CPKZgWS4sWqvUVXNkS",
  "key24": "5npkwVc5ktCmnSLw23zLkJ2uBhknENkmFp68daXDutKBHNYh2yVFKLhaug14TLhj2E8GUEFTt9BoYgdS6v5PBY1E"
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
