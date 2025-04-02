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
    "sFFbRkNtd9eXMmrWmuMikLBswVpjwJ8HTNTJHHtXSkCzjknDLeKF8dvQPu9xD2YU3Yd96e2NdrSn7M9YgJKaFoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBpa6gxo5N7X2mDTitMPAZ7cVfrD8K82puZrA5XNWrrQtugK4WkzLryNa13jKCSGAXT7Sou62zGA9snHxMJdURg",
  "key1": "4J3Z4KtJ4di2AzrG4htsUUmYHnVLQfy1ZzKDYeED5uFvzuqboN89XDLCmBRNphKV8o8aN9bWf2GdG3ZbHg3SxWM1",
  "key2": "5hnegCBAvguiVecvA9X4Te6AKD8LnkEjNyuVG5ZhPfhryVk5Em9nE5XtZzRFfzXei5hTqDQNgxCGcaLTkFPiPCDH",
  "key3": "5J3iyFKx1GwPyBtGsaQfwuWp85iaeYsSzuG5tAeHdiNis3ayvFrrJjYGzKT9Ybw8GFmw5wF3389VZxDzJJKsAzad",
  "key4": "2L7zfBrEPrJbS8UeUbqbusVhNZ1rm42sVr8ygE4w95Rx1y6Uyr61XcQiXGuNQX59RYUnbagbB23fg1NRNNBwNkhe",
  "key5": "2vEb69P2w8odk8gzPigQCyKMKdaDKdCGwaeuYmHCYSKqymKKa5bC2Hm2y4n4HvWRf4h7hoPJuFmGZiz6yL8RKj8z",
  "key6": "2VANySUPj4W2NSGT7dY8WrwNZi62b9UYZKPbsn725edMyGanTjCPJvALv6ntDqYh3rDd96kTwQzZjydwPiUp1Tf4",
  "key7": "3LHajC1GgC4G8ooSfMkeyHZQZ4VKY4zW5xhybnbRzoSg9ohNgNkeEib5kp2Hzj9vMK7zdyCDcruriMAjJuUeB7CC",
  "key8": "MNz8gPjHHrMK9EweBnBLU87LXyQPCA37GPoCQn8G4rFBSU4ai9K2HoZ1xZLX96ftB5YXptH4yy8CkXAGwAY7to5",
  "key9": "52HL6K7H9hCRy6rTD4CCgoMacya26gynSrHdbXmCtn9QqbXaFc9dsXvsGQHJYj5hxAj1nUn92PffRq9mUuAptcR1",
  "key10": "48bH4fTGE43P3uFTQwfynik8TxWPL9VifWmjegQn99rBDB7jDdNqonSXx6JH3yCJLrBuGKzoLtFQeicJMumcgaJd",
  "key11": "5dvmP7GhfkjSnaY7W77HkUqQ6ygsV7QfkWAPiLYbF81kSWjSKXPjamK4Y9twWhM43oyqvs4jMiqrMhEJiRQdbF2d",
  "key12": "4yBDyqFK198g4ng8rosUus7ssgjVuQL6nMBh4GxPhg4c5yhqUr1DQ61oaPPrVTkjJkgGXj6yG3nFitS4HdnbFDxt",
  "key13": "2iPnQL9vxNTZ79ybcUeLQ47WRp2VsucHycgWD5SQT1Dw77e7DfrNNWg1mRU5BHgeByKu75vRK3Z6eNFZai6UXpUz",
  "key14": "4jwy1wRPR8yFXwCmp3jktC5YiPXCBCjxcL11ghpnpc9PMtu5WPUrQGV1acGdBVYHDLPfrpDLV4vJJbG1QA23F6FP",
  "key15": "346wZCeMqSftP7ham6ErT6muyzLjBpoSf1TFKcV2h1nH2QtjzUnaH34J1cP7k6xQFwvCwJX6KekwZNmwWPB3gKBu",
  "key16": "5cesybe16ahCrsCFeA8MuRw25VhKXofLuKRV7TjH8bL5RHCSxQtSeeGQJzRpnDv4ShmhRJX5FUFFNpVQc7ZBiHhV",
  "key17": "41meFG1KzCvyE6mZbEsmqLq7Cvqe6aVEAagzsmXp4Y3P5eHTh1bwhPBJM4JpV13Ap21Get6dmn96ANVQbua2ikrW",
  "key18": "3yc4PNhZQ9Tfd3N4sXWWQ8iqeZJHqMwueMxwnujjymzoo66oANEZ5VPWCPtthWEWK5kE9QFjr5q7eB5GB6wPiJA9",
  "key19": "5u13ATpngNJTidmXomDPSRi6SQzncGR4B2cBtDphkiSCwwGYBsCuTLrFWQf9y7FBVKkc49yr8cBmxRNJN4BsqUc2",
  "key20": "MjN2E5phgbHqdsCZaXxZGeP6mRrtQ9A9yUHpCBnp5E4iMWu6pvmbA3EQQnfxUmqZNnC9QvYmvGzYZzMPbUUfdxp",
  "key21": "4LjXbYBGRArC8y1wpBLrjEmxTtMKx8s83FiskDyE2CrvocPu7hUF36WZZ4QRaAzy6NBBKXicxwqHiKRqWCvqdmEi",
  "key22": "VJi2xzM376PYamomuUVKz8mtB2xxH6WgHpLWDyBpWScFK1GPN5soXeC1wumuxNvqscby2Vy1KbvdMiywvPzcXEA",
  "key23": "5fqXj2N8orFjA7ZY4sGYQ29FwVN9qC4FGRRPrpkL55S7GNAHrd4DGDJZuruHSDnMSjaTL9Di7zbTXSx3FaYm2upc",
  "key24": "Tmd4hZrMHmLHv6R2Pb5AdgDLuhGbwyaWia8a47fnfCmdenFgXRqjPtRh69Nr48wggQne1EHe6h9z4fEq4XJJ2Uj",
  "key25": "7T2ptiPWZoiAy4RvavuQVFx21jEH5RmxvF61qUM1UujxTTumnWBrzejcgqrUqqxuZ99o7MraGHdWbVvHW16c288",
  "key26": "5SgyGx944A68zUBV7uWo2y9n4nm5rxFSf5yzabHJcVr5DCX8WcZxQkzFWVpyLUY7Hi7WQkoUc2oeGJ4gJ8UKGbdT"
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
