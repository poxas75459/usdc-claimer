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
    "4PkaC171FD6U2kfFwUvDYVL2c2Nxzo6GEw3NqxnRybAPwizA5uvEYdkC8BmnT1Hd5pWELqCKWi5erYp3gdr82s9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjiSsuFQC2J8phnCgzp9BJB3RNosA4cZjGsJJ3sja3ZoS7KQXfaNmnTUSRSsF2fyVXJieaJwqUzn2eG4TMjGegD",
  "key1": "3QBeF6gzuFyfxu1b1vQGZJdFwvtzP6tzZhKNBLw89vB4E7BZNPPo2g6GqiCpeck6Pfj5c2EBY1nAhU5V6SMs9r4S",
  "key2": "d4UMtUqK16tn7EcLsVTG8mZXkU3U6EPgWQVnfKbAyW85YpDsiBawbE3qhnSyKVEn31y1dfBM1PUXW4QJmSe7PC9",
  "key3": "5cctwxxCLS5Az1dwC5aqLeZTsSdXsZ9oDtBHEYfev6pmWX7gGoAKiTxVZ6rsMckdJ2ebSnf3Jz5AQxvvCrDb9J5V",
  "key4": "2srWaBirpFSoDFcUAjcCmzns1i2DDQYsjLWTqShUTrFE4Kja82vjCvew8ibBVqpiVNygSbTxWwd2kLqn8evLuW4S",
  "key5": "47b4qmfN2pKT4orvtipzstB5DauYC3eswKd4K2WJhEgvqrSEPVu5UcyskkqtKBYFcoj2J2DTFDMakWHVguUVEPfk",
  "key6": "Afv6g3Zvhxnsy1ZJrkXqh2AfQkBLWXE67KPP4snEUMTyVatpf1ZJrBHbJEKKX4M5wy8aLt3Rnk82ufTgjm9ePbq",
  "key7": "ie15dyTZBsE1TF1LvwjcuxhX3JnStxLUTeueYT5gqjRRaDJzFX8233JhmRgMXTUbvwhVYoj729jNW2QMAtHDQNW",
  "key8": "5HTNrfxybNz5bnvRYvfoLM9fJAM8YaUPHJXwZmArbcaRAaUM2KbNY5xm2ajKi7e7AvvdLr5KfiLQtesvLPVZtzgT",
  "key9": "2Ny6849HCPphzopafZLuW4vvBGDajkodrzw9vGw2QRjVz59H9iUaR6hKFnwsk5qS8iVr5Z1LNFErS2y2dLRVGL9e",
  "key10": "3zYbuCUu4EWor6TFPfs9YsSdbgHTaKPP77XZwMHtdHmXWT7Q9SLh8fuCJrPwaR7qUhY35myewtvw19HLm9PM8ugR",
  "key11": "2aAtdRZX7BKsmenisTv8rhoNg9G224H6XkcBX6ZCV1VjsBajJuRDTWcPyzjuNF297Kf364MykhZNEs3gBMKM6d3a",
  "key12": "44cDb1oDv1ii1sN9JujSkrSxLWXpoeThVaXezkHukcAqpqkZ2yNKeWSYovncu5CnBNec838ATtjdXotYgjDRkYPL",
  "key13": "265xVjzArNGywSRCp6nio2fyFgULtjqVRt5b5EZb3QGnn3zytX8t99E1hEydj2oEEBmJFHvtk2wK4xYJ9ePA64zy",
  "key14": "21NkN3MUF6NNrdxeBFP6xkFCnkuMtQyi4Q4JfhdrSLazR2epVrP4yEKvtBRsWTjFo7KrfysMVpF7Jvr6jGE93skK",
  "key15": "5k3ZEZt9w2ikBbchSgWFyESkQFrguPwRQBdmBG1mUHeDXV6RTJpRPyRSv8ssTFUNzYAHmmQCceUMgTGof6vusp3F",
  "key16": "2iUKCTyem14BD5v7QbqQRtc8nLUwZaCc46DrMWR2R4H5cqZQVzDYYeZ4ns5V3YXTaWfzDshvCfpe6cFKkavZCLGT",
  "key17": "4qqPFrpVtSw4CHz9Fb6GyU3bx3ut5dbPN2cjDhW8rMSocXXwRfARyc6qFGYdQUUidGnSqDtoFuGRFA2HNqsvHDK6",
  "key18": "fBFMBp8EQaqS57EteeqYVMZnx9ixGHXbcHq4uCg9fXzSgD9ooj1WQwk39SuvrM2aAKut8YtPRNnL2i12BhUTVgF",
  "key19": "4Q5qXgJ2273sSEJ2bPGFyF6zt1HVTKsTVaw31QuNzcXnTYkyczHWbAEkYwFazYWppZHVR9i4EgLqJ9gz8h49L85X",
  "key20": "yffh7ePxKRaBrkRmGivp9m88s9qV36jstpjfxEZvEF5TxfPPvT7fBVTaacma46uaVHhFDGVLxrsqFBwMd8N9god",
  "key21": "4mXFhmHyMEogjiPjkzPqcUeB7mi9h4nvZrQx4kuEsNoajgX46NPPVzaLykTdP5NGBP3mbhBverTmnDTBmWZhSEWV",
  "key22": "2PqXDncbpCdRbf2hS8hbRMJWQpCEKdAKDPJ46GPmhAKYZa5gGHsh73wXTeK85kD2GNmzb1HFjSmtkTa4tShWks9a",
  "key23": "3KopwWhpGVEimMqb1L8PTMh9Emkkgj4YjjT1TpSsSoazBxUSYXxXhi3Bs7nwPGLkLdwft8N9RvwiAFnMctqDmQ28",
  "key24": "3mVNBn2GijgRnH3z4vpL3eGzTwx4fyfgyMcwMQyb52dCAURNvgyKSURcNNFAKGWJhTgF43an6uXbYCLg2kXgvryk",
  "key25": "3XCXZpFGYPoPRimP6brGcm34HMXA6R6v4jAsoqX1CTvW99KM3ZF8zQf2ck55pL7kMeUCqkxkPLw7q9DTHJz7U7uz",
  "key26": "3GK4wBumWarhj59doBzPREU8V3Kz8e3gHz97atYPvCg5JBHtLCDzMhWmd6BF2WES5oZPX6ExMNZ2b2EXZmga9Sy3"
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
