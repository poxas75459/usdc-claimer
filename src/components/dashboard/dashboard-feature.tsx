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
    "b6ByHh1WFPqeK8chLdTxxm8m8mgvAhJvFiVEGe7QN2BYfxi9UnyckCtx5PMMsc3uyWmqEbMz6UKYa2RgT4X2zGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "354gFZovFzkqAofjs8bpW6A91yMxhZsf1sUs2MFq8a9A1suYB3vP9Vfim4N3EymUDn35FjjzdJc4dBHBUbXcpqkG",
  "key1": "4s7Ws9VEgbef4v4RUz5qoNM2VgjV7wdQtV1TJZF624uB7Vt25y57hekVF2LgUd4xGE9MLkTPV6g1jXLgy8uJBADc",
  "key2": "2ZEJBHDy2cCU66WaQVMf6Fm7SACvLbkQFcoDvZrF3NcdvMXxLcaZVEi9oFAMaP751iAi5pBRgDb2fYo2RTmL8bha",
  "key3": "2puNNUPJjwQ3kn2n6VaGhU6NjTwPQDVudmxtQU3zhsrjJH4aHdm3UCdjSHsKk1LtN3ijBRupnvC5FMfrb6riP5QG",
  "key4": "qDvYcxh4XCj4ZJ69hQ14sfeU5JH2JpEceDEj9q1dyXxEkousBUE3Yur8CT7QUUqwiXQrt44jRFaXPz5epYSKP4c",
  "key5": "21Vica18SK37bJjuZfvzLokqv73U62PF99B8LSMC9snYxg54BQ42cZCEbPh8ZXNXjdeK69YcsjDvmtjEZPDDFEWD",
  "key6": "2CmdjLdfCgwZhGrQKQ2uYzgDrmuXZEDWYbwSrMq5LqKHQ5datQymsJ7iwM8AeRHZsVjT2ca12d5DdvxDirixGx94",
  "key7": "2e2HRqz1PEQwxEq5ekCbWTqMZd43cfBVoEiFAvgimvXc4REvmb753fTqNeHjb41HGcyz3Lmnnbmpwf5MuEgU8RcX",
  "key8": "4FzXM76h6BCBy6UyRhAwDzfzJ3zZhsUHY8AJwCWTbg1nn1e5NJhmWvJxg77Cuxw2E7XWJPXLVKcJKX19C9FP83v7",
  "key9": "3bBFWzykLWFiwEjf6LJmxzRiv9h2K1uiaWdShGVqfKu95hHemWJWFg4DWEW2CN2ervi9kAAskGd6WJBoeKQc4sys",
  "key10": "4yuY5Q5XToup4BXHPYPmCkaU4TzUnKnquTs2pGtQBQVVLsqFk3iQTrp2XTiYZpejfsU5rsLvj23r4WioEUpn72Rt",
  "key11": "37BgMk6J2T7w6Y6b2Nrx65KpDdxYhnqZa96i226JtV6b9g2SM4PKsgMYG7mi3tUpsgCRcddjxVEtDVs2dfErrooA",
  "key12": "48Q7JU9J216otbTaJ2h32WbsJYP2KGPE2yeceFs8KFeg84LAcxtR5CnNMtswz3f2GHrZ3gy5jeMU2qV6RtAuuCmL",
  "key13": "5HWPjGYg1He1Mw6vDxe7G9ENebVRwo3rVBVGzAFr5w8tS6HSyXG2jYu5zgjJisYVSfx1JHEdUnpgFmab8ZUsjsjE",
  "key14": "jwTg7jjUasg6CJBWEcQQnmW1VHBRihSQ81MUAXx7u9u6smeTGmX3cKDMUTDPGMkvBoFftd4jWiX1dHQvJH7MLWE",
  "key15": "5aZ1kenkjuhF69P4zX4Hz9Did6QfL4D5UX1JsKxhA2duUoHRWtNkMSHVkG5i6K8CjuAdhfTAsMUAziR3MZUaLEYh",
  "key16": "2faz5Na18Yi7vGuD5K1QnviAvMoxuG9tYLuJJaYf4Toma7FqMkVs5vMd4jezWQVPreniEVR33crvdHsiKSSMVaxz",
  "key17": "Xv5vPESgiTXJTSVW3nMrj2VwtFxmyLmVJ7C65UPeiPdKbidpvWjBF6fCjDEL5o5svFg1sb55oBXrKr1YNxLMJUa",
  "key18": "3tnkirYvHDzC2vxKpwXGrVNoqTDVeiSQgJYAHcc9hwCgghfgrSWTacg6Q6rjvnTuB3T74uikACYeHUWwtcqXvnBq",
  "key19": "2CYrXcuGaNw2vxCr1jqMPgqAX5r1WnwJQ8GCCnQjMJJvxWchjs7Wm4upFGKQkZi2CFU7HVnwwTT2PD3DZv3YiVZD",
  "key20": "3RmMK4prAvRSdkJPQpVoWiRpa33onttfZtkGe1t3PPuKbj7WBVvM5EEqQwh5VxFsMReq4dV6nYorwdjcjSqa4a5M",
  "key21": "towY8HghsfybFihSExgKT8WmNemxMnMs7nid2eSD6HALUdBs4tKMt3jxyzeprTw7cVCM6wTh32X6JfoXPqqBV6h",
  "key22": "c365GLmsyppRkRmNSEytzHeochLkfrQD5crmrKfSwJVqd5fxNzg1WdVpdCvUFDMpRScjsFMcu7YNJfY782qxMaY",
  "key23": "pozrGZh4GZpgH4WFGY1U81rp2ZiEN449s1ZqKUA98dPpJpuBCG441hstiReWtnrTx2GW1LukvJ2WEgauqeKziLb",
  "key24": "3o9ptmSPuavYd2vtfayFxihKYeJH74AatKqPeMCZxkiCsDD9rM5TPcoK2MBxajQL7aLJuSGT57cqWNzfYEx29em3",
  "key25": "3nHtQY3ep1YnWY3rNhKXcCKPaFZiM6QcV77jN1GPcvbNBur2WzTKdS765vyEsfZSP3CkEkXidF1BzcpSiVqPN4T7",
  "key26": "5pvMRJGymCbQevvq8Nn15jDXHMt2579rct9SyJsU9UENQzKDEJ9gzp7ha3MXGxs3sfvtqn5xjqgtnDojAMhqmHYr"
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
