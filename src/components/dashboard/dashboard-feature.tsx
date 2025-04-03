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
    "5NNHiuNTmbhsuoPCq5PbanU6BvatnNhj5fTrzhg5ppR9sR2WAN77SeZS1bExs8YJUB47SQSEs8SRUnrZjD8zpthF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyMF8bQVM6CuK8gHWngjWfzZVYtzVY3KNUFgQ7j3GpxLJonrLuvUjRtMzRK1M9jUptJPX2rjPtv35othMAaZ3DX",
  "key1": "4LJrpWec3ByHbnaLN6TbfYiQCLoRJLZ6SvYeyEECJeSUbqk9dn4xTB7YFDhN2zzbCToCgJvLEEBTTpfFzDeTNxe9",
  "key2": "48Dob9nT4nPohAdmRMhcHuMgpnnTFYTtqsVhPiziSJLZM2sABGzJnhVpA4PquL6E5XEuQpwo81FbStuPEUCQ3Rh2",
  "key3": "4nEFC3DwWBD2tT6HSYgrA575k8zdyWc4NNqjBYMVEVaFkdYCVcEfbCwd8isfnBDEdDxBr2UbsyFY7R4YrJRkux9i",
  "key4": "FC6kaMWALEsj265ua6qYpM19CHhNrQj9h62dVM5DbZB9qtC7Jv4xHMUNUvxzRf5PKdL1dmpMH81qQ35QrRzxc8A",
  "key5": "4k57N2jrvaKfssFSiQGqkhzrdtwTFKEa2Qg115Pxk4ub5yAKakwk58UhqWpvYgXmCiu4sSJAGDutfPz3xmAwdNXb",
  "key6": "39QCdcQF4t7oCieQhqfbbbvFA3Zk7AH2oKqPdBgqgE4pqqqxWyaYMhHuR35dpkPUDK671xSHztBeQfozqknRGBy5",
  "key7": "bw6YWAGHwzdvKH2V1uGrsdXxG671srjySa9vVpUvg85geek2s59UVnPyupGfwRNDKwQRT3RQ6PK57wypQ2p6seM",
  "key8": "3RCf7tNkGEX5TqnkFFNriTTcumK5ZbuhCAbNcg3ieAMtmMf9AYesVU2j6hMpwqHLDbfTvuFMd9sBQM3WNwPYWyGk",
  "key9": "4BrXuVeAd4BnP3Xu5yf7Nvzc1bGozKVzGixdVkzc4Ew5z1HdA6AKLdJKv3SUkor4YcmzE6ovEKUqqWoFqNnR8WJp",
  "key10": "2YsKho8GVhaqZvEVp8YCHJ7muRvEqYDsr9GgjkQLwvZvJa5rhXgwd3wSGyrnooFdof2efvi4ZLpg3XLU4jPvUkGm",
  "key11": "3cBEmXsD9CfB9yXQLF9jjfssjma7chsDue4Gc95UpUZB7HNTTuGfuaAaAyE2bwb6wE31Z3LyZnvK8TiCP9McMbXa",
  "key12": "5vdSqPA1BwXu7sp3qcXc3yZYS7G1dz7kgvKQNR22nzqM5ewQuTXQrpFBuFc3fsAGXD4wyxHeYWsgeR7Dba76XfhH",
  "key13": "wmXQZpmucG2sVBZhFx34XsJ2ad3ErQLFsRSBqmdaG2wP6gY53RcgFQfa2AjHURBBG3JHTHfEzxq3co1ggzQz8J7",
  "key14": "5xmYN3bNFgH7Zihmn7iKoXeAzA6HjN3obaYgjhHWNBgQE5SBBbrdbgyfvySPey8UwymYdJ2cSyYvdeC7o7HJZqCH",
  "key15": "Kyb5Cd1PEB7VdofUbiEgxcmtzV5j7T9F5J8TGgitJdUdzhsmmitB6d3cZHwRkia9sFBk5ZFgbzCXqG2chNWWFQY",
  "key16": "2S7VtWcgYdqDqMLSiaTGKdMv9p3jRBCqgXg4GKTCDeZ8AayLQ6CS62jasU72mNrrnEwrgbytZahHXQatQLHZ8R5g",
  "key17": "4CVthT8srw3k5HkDAgcKyuvt3ifud3YLkEtyAFT2ezdaByTA4ydfHx9FjdGkgsWwNudYCLKuC6LZV3hN3BY5q9Ju",
  "key18": "4rQH37cKqYW3NZRCJSQ41gRjKUDzXo7thtFhUqyzjNutSYyVQfCARSbGam7rNmkW23qPRCTXEBtiJKgRxtCB8Vs7",
  "key19": "2XWH547h9VmMzxCTNdCg9k4UUmA1H1gVUDYah6cc6fYjrXmzwHU3f7srZqC6Tdeyryfjz71qUKHgAu5UGnNVoaEu",
  "key20": "28nQYCwvdopEaemt1uXrCNzYtXhbhVynaApyVrja166TnvSJWF34Hhbwmt97nNNTyCYuE9tg1nrrgJZktApYbq4f",
  "key21": "2bz79wmXwPEnPn8NNQA8re9voFnGgG9cYVqxEtWetRfShHdGdEcaBu9ctxa1BuhQtLqfB92ZJxL2vBLz82sGoDa8",
  "key22": "5ZaL9aF5SdjberuDMqZ7iy62MGUs5Pzdw5BiUZrgaPUp4TButKarmt8npYbNA3GyZYWbfoJpphho2hthEah7CYaL",
  "key23": "2p5xrHZbo9L3umQcUNBod9uik6Zcc2BWreWHPraSsibyA48xzS2bmPY8ivahwXwzReoMS8U64hSPejQ1MEdV8p8f",
  "key24": "4W6Ad6RpPzZWwhGQKGBiBMPkvHcejzB8nxwPrfdRyj4GSFEopkCsVbgZ6g5ASyKMRLozipiy7i6tT4p3zmPFf6qn",
  "key25": "4uea3juVFR9GVh8SPyixtBfK8gybeqaJoMZ5WtLg951XqFC69Fwdxjyy5sKVK4fE54bC2sDdmmp1E4CPvyyfQnNH",
  "key26": "4MrGCDddKau4p29D4gCJ7v1xusKoP8JSvyDMdb2dXKQgK2Y62cbJJfA282164RLa5oTSfV1faN6RBp7BW9FiKjw3",
  "key27": "5tHjprq8PNGq1MNiCWtNMfCganjQdmBRexwxGXsZjv4ihG6Y3vaYWuWsQdkYvD5WRzWEz4ENQgY4xcrnaATGy4CA",
  "key28": "2YhJtNgT8ycbQWKNehSPfxByryR4EiWmTkjBt9dwYK1fe7gGpqbzmm5i3E5QAqq6KQ3fjKpzbqFCnM92DwSs7KfM",
  "key29": "6515XpBp3xNPZ9DQrroLCuYMQHGRYtyFvGeC1dXRZHXtacL9Dh1HtCQcd5au4aA5LwEWPy4B4fovo14GwGTfduGw",
  "key30": "X9zrszdCfoRwLSgJjBvPCRUxNEdk2rvLSeKby2eLvw2eAPJiHicwHTqm4XTKJap48W7gVVvZHvv57TKXn4VmKmZ"
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
