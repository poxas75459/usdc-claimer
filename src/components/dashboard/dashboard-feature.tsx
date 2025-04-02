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
    "3k6RkajZSrq1G9JzCrFpGX4gwas3Qv5KTkfLeK42yC8q65R5wFzTYTenDmShzvU3zjkJHj9mc6s1AVeJ3PLSbxpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Robnb9tKu9TcSC9AXQN6X5PYqiWaLztoVYXSjfTFsPJnxpHko94MKfiNjcPjXEhfXqQZUVrTUhRbQjAZ9H6ghxo",
  "key1": "4sAnFJrCKPwdEK3e9vxhmZtDspE8HFWQeENGCEaFEiPCw5CKrV16cAUNo7C7iY6gfohX2dVcBbHp76NeSWrisbXA",
  "key2": "3KuGiikkqzsJqHv2qPyVrh5fwDp4YcHCMPvn9fUunRK9HYXEzrS7Mu4ZEvbfNJqfbTqhTFxFgp35XGMX3Hrr44kG",
  "key3": "XvWskARpy4oaZwd1A7pfVRi6UTUPTgj9dxNhRfXusDbZMQ86JdDtFrxAhN3N7M39gML4gVwCi5VWgz7qb9zvDRD",
  "key4": "3Z8TSjVNBQdQkp8iNVvAZpTzia71H3Myrw65xUcDXos44RhbaA9dhzx3QwuskjiebY8BuAU9hZaP7tpMyXATJLxK",
  "key5": "5cyVm13AGyZU7hMjVeR7RQeNEJpCgBuXfB3La2JdV2YoMj9DkpP5DMdrYsju24G7f7oRFeCaUueSRLNRrFUoLq3",
  "key6": "VGEUqZ3sDaEBLXPB3hfftT4RSPHy6c6NK9sSsZkSvqJwh2AMMQ1PbSqp9nDAhAJYiUh967D4EEQDCB8CjfR37ZA",
  "key7": "4nDYjNdvjCERY8c2RmFnidCN5vwB5LzVkwAyn7f8nBFkTJ5v69gP2jJqpdA2VC7QY5sKppcYJ8D3cRCMTSYzpjHE",
  "key8": "5KCaWKjMNNj2xASqT51k4eajRbjZow1Gmwc4btBqHbZSFMLUs4SHF2CTVbar7B23SXVssNxevjhp7hPeS551xQN8",
  "key9": "TQq85tttXCbhuboji6cMYPLNq2ArFCDsxaJX3RtDnhWhs7QJMnFXgZ8d8Av8Pr6a6R7Kzq879qjdUKbcXqtdGj9",
  "key10": "3mDuC29D67GJcjfPNyF1CaEV6pUrQatZtcBesFm9wjvuaYdpT5pM7D7i9bifaUCGSmp361HxLj9PT61uqZmvpHex",
  "key11": "2CD63v3UXkUqMXksEbTftLYoPQCsnyDDje1A5pFboZSZ8JZ2hr1M6L6LPsXVtdtwDnAL39gQsMDqfyMKzB2oZyi1",
  "key12": "4Cfz2TvXPLnDNuNjKMY5WTNKcMzjh52ZJJoPrTWGqutZ1XDV1jpu37tsiHe4yxyHUTZfJb8FbSCXPLjCmbjX6wCU",
  "key13": "21Cu7eiAyz4DaAgp5Md8foVBzKJf2aQWx66EnCoo8ex69KKoEPXbF33dj8WB62JcipDMa8ZbvS9XFAukntAvjJfx",
  "key14": "TFuXx2HDwHwGSDTBFh8qXgzyfGSJRXkRNkUUbs1jK1W9JUbJwouqVgncWCYkZg5jfdNAQHfXzWxZMqxhACuhxio",
  "key15": "2i1dZFj93KmSg7damFjt18Fs5TnxqumiD2tZrYkXoWWb96YKwP37V1ZbAe397weZdiLRj314tY3aHZLk8p34ipRJ",
  "key16": "21AsWhAkrceMTF1SMAgWiBMn9XXC5tdqnD5x2jh7YVGSrNAdvoHrcrHUUJXtc5KHwCvuvgrDF9bGkG5MxrUKGQ4W",
  "key17": "cVTcdQcc8aNYUG76q5wvviTdHK87vBBkxACKu5yjvAkvZxGdT4ayuqkAcFXKoDiCQyueaBCTLQWrP1ugJVTnzW3",
  "key18": "4ZUGDTuARbxPQo9huDMdSmD6VCQ8t4cYj3CjBZXpbWQMJzD1NGCd1RfwLMhaw2C8Y7AgRC8y3jvRDcHdzXbQb3du",
  "key19": "5FhKuH6YVLCZs7MrF8UodgQJLW6mHhWdjLApXVXjQbud2vkkhqD8xUrwU7LVS2cZwjcUBMzi6rUhGV7J2QdudGua",
  "key20": "wm9a45QciSLkUW314RQrd21pqferaroPkjYikYd4G5LH1iBWzsjhgs9Ghiw2zFr73uhV9Fjg2wFDHPxypFchnik",
  "key21": "5Y188TvHcroFyzosL4pkYrMfAwD1m6oCoEGGbjNtuS3D9YpR9Y2XGY9MAttzaXN2iqmB26ZD5VhXd957sm6HVCtj",
  "key22": "2Sm5vn9sjTj7h946JoJLnvRUVajhUL4NnxAS5Jit6dtTJwVsXFRVYmXPaDuC6Eqdxxq2A4PpH31ePUE5gU1mfKG9",
  "key23": "3969WHZy27vdezjXCdbCYxwXHbJXu7KdfAXZT73bgq5Peh2CcJzHXpbm2yxsNj9VGmYkaKjMCFc9Ba7ctpyhG7oa",
  "key24": "34LGQF2jQkuxc9DXzoDDUTZkMubumDegaf2Bf1VRzkrAvk1uMiSdMXVna8czRBxH1KX7jXyLHZiYN4P3jMVfv1C4",
  "key25": "4FzWCxxJWeiXogHr7yJvLMoQr5quAvZyYRTCZwbVdpkHTJN954sJt1YfuGESvjF7jEtMk5uxXHubhW6zqAGo6AnS",
  "key26": "4hw5R81yS1tzYgi4dNK4efnhdnxVGJ5zr38jWzkE2tzt3XNres9LxoxkCf4f8duyhvVvXhG2AdRjPx5f9Ft2REU5",
  "key27": "2k7xXuW7Pq2CisQdkJi9hHGK2JDtmH35gSRDwccaPnnJJpJ2JcouWdsXPYmpefxCjU11saiMogZAQHY2RR5rd2hJ",
  "key28": "5dtys72zfJH6WDpagTeDCpX2HX6rVYSE85yRdUj8i1un91ZyaHGuqvGcvbFeccB83iY4DfvQPuHx4RTd7RnA3MtB"
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
