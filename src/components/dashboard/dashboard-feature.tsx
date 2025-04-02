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
    "2PJCgZjUBStN8wEv6Tnswtbf13UJgDo4SXdnWDJ4fQAC9MQD4fEjtXHhwmWs6vAXcDs12DZgQ4Xq8Yr6Wgnmw8wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59EhCeCVi9uLisYcfCMkAwxqYsdMqm7o53XTekgFZsmDpCEdJwYwFZt32DhLpmfDPyDkddykrEtFVxvo1xNoFYhd",
  "key1": "4y3CawbUaYDk6zPFWpAFvHx3xyjywHoG2SgQKGBEJ52sS5xVfGFM32s1XL4drsBqaRUKmo9rvycw9E58dTZT6Mq3",
  "key2": "4n7ynVSt6q41znsbR28CgwrVr7AGUMvbugaGoce7UoKtcRAwTQCRBMyhjXLdpFq5637hoJ2iGaNLxQ2Kd8EtAVEu",
  "key3": "3CtcBPqBxC4M1CgmzvZvs5QYGGx77xwj21GK7BnUQH31SyC4JXXNty6UkLmU5SeMpBwXXqRSsTH8Z3TtApPcL1R9",
  "key4": "5TuHD3hq7Dqzm9hS1xUKjF6F2uRePEpbfwkeAks449dhgvanjS4kd9vRRGyUQWnPTXTfAZ51uja8JDUBRq1VGMLM",
  "key5": "21tCaoHYZNKidpUZSiAJt6yPhwVaUVw2R1qfvxJuVaHUEuMs8izKVoXLwuHp29wkuvwngMSiEps8LKM6JnkX7usy",
  "key6": "4PDcNPmeKQekPjGyywqa1qZEnhRA6nSodWwnpAnKednsPVupZogxMfkbTnHwK8cgV4eP23bHgcW4oa1ywuoigh9e",
  "key7": "4PHVUBUwktPowbnhb1KLJx4s5WoLmnSqLFYENCyGa4LwcN4QQhjo4M9PwN453cq3bmHcy8Zz1FucXFT1jNVLER4a",
  "key8": "3tNehBDwxSEgh99gW3uoVZoZMa6HQUS2zvnEtwZiWXF9r9WmgVMFBqEckLPtjdUnw8TkieXTT4Zv3QEVU2XjPYwM",
  "key9": "2e2HhpAyycgkkzSabnxfckuiPXduVP1xKapMF7L2rig2rPp3idwdg3cHGbES5ykXAL5tb1nJR9h6phqjastTk5mp",
  "key10": "DMSvBD9Y2VRKjSPwd6az7BhJwZrVh1gcxeCaxFVb1TTkrn6oQszEafuvEv1g1FmbdUcD6AQrPP3EuWcLLhFYbkU",
  "key11": "24pB8FLrHYXEfisKsDi1AeYFtjPN6Pj9374HmDYkDGcQxDU5PgBkt2WS8dxjSP3Ayzsy1gtoSrU2XriXLrmCvgDD",
  "key12": "vzEJp6nk48nFLZpQkyhxVgP6DDPAWV6zj1oCnJsDy7aXsShaH5xxdJ2dYJgbbgJmShyAyyRh4kHRQ5SZ5nr4TUA",
  "key13": "5bBi7YuGpYhFLjr25JHHCcYjhnSHxHbXmMSf3VnrEkWC2WG75bBztVCtPrBjcn9vetQ1PahwhcUeXhmgHy2uhBZV",
  "key14": "4828i2DKFoqdhH8JhVqnnQKALS7pg9hqXwigMf4gY8gkdbDHdPxRgbRjAu4hLQcxYxRacHLkC9JEAQ5kn5kD66gy",
  "key15": "38btN3Bh2Q1NTrfbigxnn5vu1VgP7sshDdt2XRNV2CwntX97SKdmFkiDXtqamYPBx2Z27YvpLHtzHDFjgft5pv1W",
  "key16": "BNf77cHP5rmSgxWb2DP8a9CsP7xqB3YASLBPnnMfXyCDrem6omKnp3xYh2dXbWYNTCazWo4KTPEEP89SZ5WxW3w",
  "key17": "5ZaDwRSn5QaCERwoEn5vV954AqB5CPgds9x69RiRUPYZi5PA52QwBZCwYoqktAfkyYF9MgM3ASxNYPrU5BEoGZxD",
  "key18": "4PaR77nsnrG1T4pY5Jja2stqMjCNmpZktgLyQZtgVmgmm6gJz8usEgDgWpgJhoXrERzfRDefYwqLdEHsgiYDZf59",
  "key19": "TZbfGnYDdMd1KkAGbUNwAX8kcCvaQBnDGe7qxfcvibNRqaotz6gRwQAP2jLkD4wV6C5v466wTqP9KLaaDDdF1kA",
  "key20": "4pemxtTank2vaCzEZMwvx9c8bRuPHxdPYp9HA6SRNQMshybJqv6LyJomcmAuE3dppeUQVYbcJTCWhYnasgpCR4k9",
  "key21": "2p8TjbuHPiYPbwRmu4JvA7YtxPx1XHrXyG3Y6GHrrsBNn7nnKLkiPRagmX2EmWfEDrAKq2LTSiQAwK3rk7A7Hdcm",
  "key22": "267VXapXQP3EkBckzpqk7ZGkjHJLjTD4DZw28iCw9xAt5THgaNuFvA5uFVQ6EsqNCSUM6RRADCm6cYJw1eimwqje",
  "key23": "5rZDDqAkrCa7SWHkLxi2QUfP7DwyALzVbL1CLTe4W9FeKg27oBdNSsgjVYABicDcVBeYbyCXVfed3Xs8br3wv5TP",
  "key24": "4vqga3ZrmARgs674ij3U8y2C4J1R3dm8ACtLMqwwFXQmNh3J9Bft7LvtLsPmzJicT5exUFa5pu7KYVGRZp8obpXZ",
  "key25": "5cUcuREQHeF9AXRnbpkwA3dzevZ5Xqp4tDk2N32us1vySikX4Qhth8xJNPrHDQwGqcpn1cEQin4oAyW5zWVkkVw5",
  "key26": "ggs4fteABXRid8oPSCqj7Z4U2phcYigMC1o3pN3PSAp44iXYjn5d8KKpVBQ2gtWepkPjzEobD7SsFaPiF9d6gz5",
  "key27": "23TZ6ES2qCKFS73gmKJt82yvTKTDnFFuAXj4tt5bq2FLvXMo51Swg8xvVfJfcLib7kKkCR7XM8Wtko17u2gMNFh7"
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
