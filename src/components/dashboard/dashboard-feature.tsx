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
    "328Whe6LJWauLb93xzo8wFGKmZoDsP8JrQBXmPYYLovBwXK6MV9NEoDzkP5Je4RbeTZpjDtGJKdKevvMax3ksppE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3eE8B9ttqEAyLsBDQtkrBYQPcfAeMV1eTgGgReGndEo43e9iFvmzajs9ZemjptSGFDSd9wrTm3gdbnYS8dmvzC",
  "key1": "2CqtjqtM83RnZx2ZifLohv8VFdANTQoLkrQY1t19jc9os8heENbwqjjCG1xVHo4NYtK9Svq2EANcArSxKf99ivvM",
  "key2": "uktzE85cDQXKA15XhEVfiwNhRHo6Kiv8Y5M3HrGh7uF2wG9u15C8R1WsBf1nMBhc3SQ5CDprwb8qy4rN78MdGRZ",
  "key3": "36ik6bLhN1cybuBvwe3N1LPHWwMAStcnuiEWbdEgbnNmf5X329MKWUPUGJWbcQVHsM5rSNdrAcX4m57r6uV76ymJ",
  "key4": "2F9TLK9xnJFdhXzHmv1sw1Wrcu34vAznnQfwsov7GkDujHaqRTXk3CSYAmakFQmRP3724vTrMxqsN8TqJp13gUqf",
  "key5": "31G1213A6VfPq4sHyBURfUNZHYfAZwttqYkmmDSrD5iDfogRymZnMNC79Kcjdt2pdTLLyMqyPPcM2kqhuDNYLFhg",
  "key6": "4WyCDEjmKMYPuqHsPzH8j6aCGimmdjccXxNqydUTQrejVuJzC5FymfEFwrJPDWArE45Bz4Wv8n51X2Si6oFfXxu9",
  "key7": "2uZhhxeXLCcyasJ59p7FdkxTGTcNZWuBMQ7TD6Q7fYWTKSjjZ3jcJHDMW8qVdwVsJKwJY4YWFKJXuZCSK7zPLde8",
  "key8": "2iBuNBHWkiBt1U5x7LhLJYLybTGw3QfJk3JLFS2WvgonTCMrs39UJvHdJpSwwk2bMHTFzCHQGqbaXpNFh5DQNVSy",
  "key9": "5KHSTR9RfVwhsuFXutCMhjppkXorj27a5rj5N1D2sqZshcNtcPqn9XspgVW1V93HfgBa1dPvZnK9iDamXrkguRHz",
  "key10": "3HUsqZY2fzWxq2oVrHnhtnjtAxa7Hdr5f7eoVgncePYSEnGH4LR7nGCHfRo2VWzvdtHcLvCsVi6Aw5CaagMetJqC",
  "key11": "3d6EaY4Ysdids23Gk2Zcnzu4yjKRn2DNAbmhP8agNENae5DWAV3mzgKdGySLHY4rDzxosSkC39fr2ZbudpEpoqmN",
  "key12": "4FesxrnyxYf8Qs85feZpacygDrsnxPq3VF5j93hmWKMyqwidRtsymVvnJLtVyBZnph2SZFTh7SHG6EKUJVrAGdrp",
  "key13": "3sLkTJmMffY74zjaaKQMaJEXCX1sEbuBPFPJKAZ6d92qmchQFnErHbjj8ntmi6iBAjMV2AJWQHCwbsancQZutWYj",
  "key14": "QKandsnQm95UVWHBLwixVfhTuQwdSZkCJAAB5xuhBCPzWPTrh7CHnUSAwUfZ2cQKqvmUQXCbTs6pnBPavPtPZQV",
  "key15": "4DXQRnVRJC9HYcGxAebTuSHtzuw4GbEYmkrDCYCueheYNJvnHNVnbdAKLR756QRNpEf6xMQTFridRiNShzz7PWdZ",
  "key16": "2a8MFYN15mVD9BHGrWZZjZ13rJb23rd5XFoHkhawiDJ4vg7gXmsShXyPamdHHPymepnzk4CEcPREW7sN52y6pXgK",
  "key17": "5EjxhDc7uTQLaYRRDjkyF16wgHwp4yByDk2pvc6HE6tzxHZYf4zYobWNiy3aMCtZsdWy7PCKxGJUodHn3MeVuQrq",
  "key18": "3ki8g994GqdTgQJ8AWoxKcVVyUkKopnmczDKFcth4pCM7L9fsefAi7c9k4c2rRdLotKY5sK5QksETEPFVJozswTC",
  "key19": "2SNkmunAWJnTdzSsHRAL1QnDEqiBqGKnitnkem6AFHiGwBRy4xoZQ2cvJfsNUzmMB91K1FpyTKCrshs3647CwgUy",
  "key20": "44UCtzbsArtQUeTemywMx7FXtZbzjPaEVnHUFuPH4XexTwuVipx4jNw9W7wqrSVG8NYxvPdjntCsuN2to3SdTyEw",
  "key21": "3FfD8irB66VpcyfSjuSCFLaPuV2UXJD4i6L3zVmk8hqBpjrgprFbrckF5vuGhbD8wYz3Z3so41d9cUeq1TBsPSs",
  "key22": "2qg37vpcRqG9pmeFCecLrPmbmRfmy7GM7PuaaaDn26h65uf4tZ3p8vGZQLvRqDwMCrEofjgWtsQjqp2rtfFhDRja",
  "key23": "594q3a9VB7i4thJaB3NmGM38t9eoKLm18B3KfzYtnsrwkHFpxfUd62AAsQ7td2dYt82YY4o98y1KqJzmhBJs43o9",
  "key24": "3GUNtk24b8TVLAaQ4osqNmrUtHHAiF7iCvFerGxVpo9Zw7F8tWR7fvYMJ7HCsDTUoVXSJftAdWKMnUi3sv7YV5Pm",
  "key25": "8FZzEmBxQDtMMs8Xgo57g2gXLRtfBPQ42bMUNLTQbdJWFddEmBagLm5WwkXeKXDVCCuKRkvjtFt7YxPH1iR3P8o",
  "key26": "5B8SXiwWALn2rjjh7UzpUeoH7oBVpDhaQMBo6dJfpCcFtavVuSMTigJzx7ADoCQj9XA2EqqHig8Jp6qHdX8hxfNS",
  "key27": "5VsWPfy6t6HPEpG7rgwNAoqanGD4wYEQLFjv3qB34FCmRoQvctaCsg8vHbqjGFsWSAgwzoS8w6hdNLFfKZ5LjQx2",
  "key28": "3XwMt1csLsGzsxjynz3ovHvhjMKovQphn58B3t1M5A9vpXtw5c3UzGrDLvwiR8JKxnxBzTynwzebwChbeZHoHjCj",
  "key29": "2pG2DLqPdn7K2cjNNpNF8kUqb4bCFBQJS2yYSSGYTaokrKHiMnwkJwEAfH563QfiDPHSC558Hna7yXyst2V5bRHW",
  "key30": "jtiYqbF1dY4NrtPjrTFr2hQkuSio6wqE22iQD7otmzEDoMvydJ7xtZNch2GD3uAMQYtmMQ19pTAu5UeZG8yMFNg"
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
