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
    "4oLSKec1Angb57twgVtptFMAvjyi92zL7MS9uP3jrEWZZb9D6QcQiCGtF6S6K77dnD7N6tyxQLKjoog3UDcReuV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7GFdvcDTz7fm8kjDkpoNzeEhfsLj7Gjv9g4gyM8ZiKeia8tk6NBz7hiZDgXvco4iZ3z64jsQCrPnY2CGFZxZx4",
  "key1": "56MJD4Rfq67m9j7etLBdZ2dpFCVGwgsrEe7Nt2TCfgo6R6sYcfrwstwhAhtdZdW2K3yd5pTyj49s7DUEJXDUWePS",
  "key2": "ehg5Dfp5eJ5fyenurRjaju9yt94hETbcNRdBmZ6ztJRJ2E1LmL8LiC68tDc8gMwjXTnKbBQ1xCqaewKrb193Gzg",
  "key3": "2woa1awxzCxVZhy5Ni5ipo6FnmA9L65FSKiYa6hbzBYg2eAfSWDa7re6bcZv2A1Vn4oScNzAzvLPANmK21rpEVzv",
  "key4": "YggNLhC2bcGnaCSQTtpwhf12Nw26yhEc5SW7zyvqayFF34BpUNamtXiAZqVxu8rPh7TTJdLzwsviDFH67Hdtehs",
  "key5": "5U52eGPoHARdU5HVaHnvXa38qwpigRiFfQpvidcavdqywoPPo2G812WhZBeKnCdbh8uJ2W5GRBU6rPkD4AuJ7v6E",
  "key6": "3Mkze8sLmEsQJrUyLTBC3Vw8Xc19BWRqRz4ykyXvcPnSNDizZ3tP2MpKJh5nZZa4bFJHDVUcNTrs87faH7g3STKP",
  "key7": "3UAkFMiyfifRXpjCT9w7SBkNK4ayKLyCy3XJvx9pdLTyrUvD7FfwRYZ3DeRxndLtUSZrxjXsk2katEaEx4VfRsdC",
  "key8": "2ioS7N8o2afWBzbj6JdqXeXpFRfqdnfXrDSfepPqAkQN62UdZKP1bWDHV4Kj3T7cxYkwPZ8Q7QJb3x7Q9BsDnjqv",
  "key9": "5RCwzqtw3nf7XirHF4VFN8S1DhPL9Z9cU5Pc44cnJ6853bDX3pnBwqdbrDdobbNSCtQ64UwYStZLqhk3RqDaumaH",
  "key10": "3gXbUVwWRN8v1tcuX8VaNHozodrFfm35UaWzufUMHZoLX3L16YeKvLk7mqBWZGS72AdEJBx4mkiPSKyEA3BJr6LY",
  "key11": "d4j7uZYB7EnJU4cWXSL8uRFDiYMM5VPcWurgQbsDtDgWhwiYvaSnPMeQiguogw18r5ADU4hHuvJyqngb97EDECz",
  "key12": "3jtbBx2vfKh7cCjeFNZ6feQUsQZcHoQUj2Af7SrKeCWtWXpLiBMfjKZCDihVrE8s2UtM5by35MtP6s9zzGYjfw1y",
  "key13": "V8CruS7529ZQbGZQ4yZCxRhJRM7VMjbuDyYqosXjtpwKiVZQpDj5spQak5e89aqHGxoRYP8QnSCt3VTShXQ2Mxt",
  "key14": "3eCrCDv6arQKsZ8hNgWpGMhUvcnKoiTUn6H32ABzomgw7hvb19UmcPFunQTTBAgi6w9MGV1zJ1chTyWXSuirasvj",
  "key15": "5FojGhYKvcKbWZTr9sPzgjiqUPLDHrRfzFG6NAJFgYMrDNMCdGKSPwoSiHv7hSJfVE5NDetE1ZsSHVdCNNZmCi6b",
  "key16": "T4PXrkhVznQDY1mHhzjCzw1cSL4sqknP82QTFqu6HUprtdzdQ5nsrig2RNauBMKPuLJmrbJGKXtRza7hPWfcfvz",
  "key17": "4adqaES3kn4SJgN2M9yJb4k5SmQdhVHM3oHespptaVrwZKKPmBiVSrM7kA4j1MTwVdzhn8DnEze38RBvvbceELom",
  "key18": "4bmmgoNgWCVjmt9UC8dcS9Rf4s2UVeBmNm4o9pPFW2H92gkM5RHKbra1oeu1ekBzq6MecSzhS8V2yMv6RCKzceJw",
  "key19": "3DsrJxcPbh5zW9JnbAeXeTpA33raHgY64m2QRUigZnbam84UzYtWW4mBy676bW2uo2WrD85ruioDWxhgN2QXNkJU",
  "key20": "2c7bsnEGRgkHj9shc23La6LLCjwzYVp3bqCEms4U5bAaBKfATGctwvYSTJHa6cVM6RJqQvFWsUBs2xjrhnx3RBBB",
  "key21": "2dyhJGAARm51sZR4HB2ZF58NhEdsqumUTypJVp7ZpQKmZhdzGWecbjS9BnX91PyjoiBtgMFBzr5SmmVdAXQKqSRW",
  "key22": "42wjiu9wpiHmJMcZnff3TBV59H9WCgbwzL7BVPaPCrnfWSPjGJhGQZqpjzuJAh8rPZ2jL5X6iBB1Srv8NF8x4gm5",
  "key23": "24nYy46geoQNqiyX9pS3VMmDWE1oiyXh3oaWqdVWPveLtF8Q4sDwSv1opHRx3qFnDHxaMU4tQuiJ4f87x8bW8s1e",
  "key24": "2J2RGYtSFjZQ1NkohstY6BL1CQQk3PZmiDZisZABFbuYSNsvsKx2K5GwGqkTwoAoB6NFFaEusf6wxAc1agJjHcM2"
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
