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
    "53a1GctYgryZFgqfFoEnUA2ipCNTVFTfLxrtBWQFaGqChPfE2hrd8n3GKfrbC93PPniidFghH5Xp3D4nRY5QXJF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpkZUs533JaYSMZe4k436hEV1By5w9pHyqgDyzxyYzZA1jkf3m7tvAra3Yy4MSGN2z1Jc4wx7NEFMLx1CLfQ8u6",
  "key1": "5qSV7iMUE4Yci7Za5EkgBmvM9Q8GBZ3MGiMDWWmV1JeBahywuBKQmpUv4YzcMK7LK6NzqgbwoK9k3hEMrTW9qc97",
  "key2": "2FGE48LYyksEFbvsNYK8dt6HrrRfKDsaqYAWiGbHitfXjGdiKTGfPyEsJekw2o2KAr86thgZpsYbxLGXdxuoVqC8",
  "key3": "5ULHbYBJkSKfwvpHSsbStcABYB2zcDwZvx6dVMVg2ZXQvgUZHrixNbyrU8qzMpAroYQgd7oPxR77m5qoLGDXZiNK",
  "key4": "4vfwHXDwagCiyxqp3FRVZhGMNKAbqCzrxrVB98hjyxRVYukDW8woJJ4JuhyoewzeXJgN2SvhBrhRPdmbbjXas5om",
  "key5": "5Cn593LncE5fF5FJwwsrJZJJzrAgNxV4vP4JzyRrwLtzBdnAyKKUTZqB3XJkssLBRbZrHpY4qGKNSXjdiwL8FpyU",
  "key6": "4xFdKg7q9nyDpEo2xwKa7kYMLcJfPrzypHGEY84TLkE9dFV1XLoGJa9YivVsuRLY4NLNWZwcdpHhCXZ8HmZWFF9W",
  "key7": "3o2wCJt8PzyNRnkNSDXRbCwqC5RndPKwakJ4n1SgFpHkpMfVT8EgXWrjExDadbjpJagv2JqbkXygZvQ2gdEcFuE5",
  "key8": "4hXsfYt3HYrpH27pfscBuZPHZVpkJLZSrQxtqxN5zgxZRNtLYBrNJMhZ8tS24yCEA6b4xKAwtoJQsBMn1okctQXm",
  "key9": "3opWx4GxCRdmmqVaqmJqSzDv1RFeizdNkL4sa2TdaR7e9PMqgioH4PzDm1v4xKsN5D82kh2jmDbre5XSDy1Qbimc",
  "key10": "4m8o8u9gx3GCLb58gWqfwKXnsax8YpSjzL6zFkY8px3TKwvdvi1HLqCwC6DRaeRuqaV4rixTKMsGabrWdFrJES4S",
  "key11": "5QZ83HMX93tN3cNVWgYrA5hZXpgZknjB4CsSqFZQdSJw2ER4oDba8Sfdo6hBaed5ENuqaN3gPmz8V2DsvaDwsLuQ",
  "key12": "5kw2beqgMH6Uy5fLfnGgPLiRSyqmFFGKQcW7gpTaVUZKzNsiR4G1tSpLjPLeM3rZWXRCqeKCt8qcUmFXCVxUyfpX",
  "key13": "2AGP4T9DdnbaC46pZhCDFrifzGxUaKYLaUgy4msXbv6LYra9oocwfoNqXu6ULdbpEk1DpaiXFuiTqikVEQMwWXYk",
  "key14": "5YWmXMWKPfEwwNTRoq5kCJnUWrhrudDcA4bFnbceLMW6ssc8M6UYAFtAYGNqKx8G4RXcx2o3UX68n2PBjDX9ERgm",
  "key15": "qou6EwK6YPsL6qAaL1hhAuvLPu5hMfDyXhQ4KYvpvkUsRTX7TST11FSG1SzRvgPR5qzoDC1N5oYKz7HgnYymLss",
  "key16": "43iLxfmwJXXwRjHx3w7yU22ZmEHZPprUQCjY2ELoBCorNmxq55Hc4zVG2PMNGWPKPTVXQgNJitcCu89e55dd3UqM",
  "key17": "5gnwkkWCAJCNxw4EyzMhrY3dNQ9q83GWqzLJNFFeHJ4dzqBmC13dcprMCtr8uFHF6b9gwR1W3gP5gqSh6djX75ek",
  "key18": "2pmxkyr2wTxSKePFoXYgwXMnxJ4T5N2Ldua5bi5WbrpVYaM5WiXQzjiz3cBCnG8aDSKqTm2T1bAUjgbRdRyr4b4E",
  "key19": "4rjCKzvSfGwC2bXJ79GDsg3ERv9hyCrV2BGk6jvKG1XhwEzumQzMHUi1CUPuim1NQriKcTLt4MnZDuJoiNfnUeHc",
  "key20": "3T3pq4TdAbeuSHKxJDPWobtBFkYFD93CbDGEyetQFaKoMvehAapL1Y8znyvktdzWLdnW3fmGqpx768WG9XTjLcn",
  "key21": "4Gvp4xjSNVwjLJvGuuj9fEQSPWuRrwH8mqT86DEmXFFdM4NukYizTTbAWbQBCYMeip9GV9mVRmbL4dVERHhuhtgT",
  "key22": "5P1CpT25mHhBg585QgMLEy1gmdzyRoTCFmx6KnzbGCDvr2MJbD6w1AmY2Lw3WnBZNc7cSd5gWdXJrrM5DW7M9wUy",
  "key23": "sFvEiQngBjY93Mj39YV2E2TZdTxbmtNPsRnG9BZyzAwSWQcVqLksmq7RTPozMRSt6WmFgAhiZBjGmbomFfBSeSm",
  "key24": "5QFG4u8DQp4Kra1K5hQ9uTJbTCkNL64pgPFaej4CLKKEHZKnwSXkuRvAwknrGtkEhjFFxhrArQXtXWibeqi3A9jL",
  "key25": "2EZ5Djj83ai7w4byYp32y1GMvxDcD4ECwchRLWidjSUpsn9FQK6iXFEjtA3HipbeeXDVaxq6w85JRygYfwGmqGP",
  "key26": "2idUJv1VD8jGoP5j3DcWpmz42bExvEpfYtfTY8RarUywr3Paian1nn8XdDuAADuZUnW1vVpNGHtpxqJRVJVrhu5f",
  "key27": "35hmE1CtTUiFXxTvbpLj2DGAgnv4T9zX5RNaX8d4kwHG4UHMHikBuzjVsj1k4QeoKHrk1mWuzgWiSQn1YZy9SvWS"
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
