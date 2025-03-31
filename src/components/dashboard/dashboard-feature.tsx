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
    "3Qui64w65J9jtzDWFE1x3uwYFgF5JcikQMhiCEku6dkPx4tRRhjrUra1kcK5eczGndARkp2uL6Vn5jkL5RvGgViS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhaW9PeTejPtihALWpWou4VZFFUAc4LcHjxt5M1dSJTEuR6vJESMtWaY6N9iAJLM1299AKxQwG7VhLA2UJp8j4d",
  "key1": "GQrVw6fi8FnCPbMX2rzgpPGZxpMjwe82bMmR7gKupTSrU1UNHaVML824u7DudeC5yd7Qtvr9cjzkEhAbBaRWBYT",
  "key2": "5SfJ4tJHWnzb56syUcM28sGaR35yNvBVedUo5EsURKyS15cRkvkeycC6B7FnSrXbuyVDeXhWBvGkGUjafLuZ4BWN",
  "key3": "3igAmjDvLj9aTFbEZ9FMDDfLpozWHnhndPoPixawhMDzorVLQFb7GpV4XFcKHYWQPDxiEwkryuVKxRikdKcfFKZ7",
  "key4": "4F1cpw6jteM3K1fEsypK5NGcwQKGeBRcrCUPntDiguveXg767RDxXvuriQoEEpaRzJyLe3XdpqJqZTW1jLrKJTEK",
  "key5": "4MMc8Zqdi8WJLTifET2MYHNKn6bWrc24yekqwRwQsizQbGhqKj3qcW8TSJNdLjYXRB78Fci5mraUf9r2sHTuZThi",
  "key6": "5CycdrkpvUZnD57kQ1Yd3xHaTYzP9keiAvM1BidvfZHkwhFtrD1Qo8KuARkCAEwtaQKLHgvdJ9TpymuQcKKngRHb",
  "key7": "4ysgLAjzKnuUrchMNcYUqdkqkEsLQaXyZ9QQAXr1GJtzWRZTTT2JSb5bzwiab5JWLjLU94BN4mFTaUJrh6vP62CL",
  "key8": "3wJLxjujEMdgqDqBy6zSR2gmKMqqt44YLjc4TiP5WAW8rn7ZVc2ypnU1KsF9XVsqwQHAp3Cpp6tMYQvRmVKGdmWX",
  "key9": "2EkNbxHtntEb8cR3aZAXUs3dmEcCDYPBYVzpe8m5ePY1qdKKfpjE61gz1tSjpDi5pYNHnoDXPcnLmo46SbnUqr7B",
  "key10": "664mUKzkYR3Q6SJqzWLYkfLi3AeHSBMhV13gxUYPiNqDAwLHeuGNMY12fNY7vZeRaKHFSpz8C6A1U1LM5xvkjpAo",
  "key11": "4tmoKNURW3hQwDmVF7SFetfYeCvT7JmwSm7Jnyi8jeimiUo8SvvupB45DSWdttvE8tg6teXs7WWzz7e7AQeAMKiF",
  "key12": "zQybDnfKWy8MvhFPAtVTZec1jfpTpXJaWXDpkycDRejTAnzsBpLMGEsJnSYNkYzrk66EegGEkuPRgzsyaFqmUEU",
  "key13": "4hAJWU5PduU2ybBnWiawWstv2Eu4TnxdWWTbWdu4A9X7fi3JseaoDWydFrUbbArsFghPRT62tcY3as7bNmEu6MZJ",
  "key14": "hEgCHnxrBMCGgxMaxCANpFfF4D4RgEVKnshBi8LKFTamdrc5FzpGdxG2nfjgC5tnr2xj57mTanuw24gJX1nWk46",
  "key15": "38w1XryCFLccBjpyPpBRa96dBtDG5uBJHMSZo6tJVDrS8a7oofP5QDn6YGv1RwyYfi2zMFgNnPzLhMatjx5HXaTy",
  "key16": "5RH6fbJP6QN1vcPnu9oViSuduVDCznQZq1KB6dzK7urtJRKdKUk9TkzoGkg7vpQo3uUnm48sUCHsQEHF3Q7SMvQE",
  "key17": "2L9oBFR23xsUQiVmHHhjjm9LcrDAdRpjQcifuXeophRroSK5U2MGRYGxvSDgQ32rNLDV1e3HEM9WHeyqiBFKYnSh",
  "key18": "pu8afvni1fiaa3GZTHJsXNvShrVmw8MfJWf5tiM4yiJAgq6wNpbCwdoM4C46WYpbzVuDQTYzwySiG4GVRqVV3J4",
  "key19": "47SxZfei6Swi1D2n5PF8Ge4pUpta9YCYqiZitWrxcP1c6gcymnT33yAZXJgk3rebSAK2LYc9WKP5gM7e4HpzxB5E",
  "key20": "2DHU99E2H3shGPyUMPH3Zw5Jyg9bw2fGHErskgPGuScJLzw5STrjsCNEdjmo587YNmGaEBA4Mikh6mnUQAU34Ns8",
  "key21": "2SdycuozeVnydP9V3QtHzSfYe4ZocTnf1VArQViCfVF8pj4Euqhi5feM4RkzjfHuN6Quo92dNdEZ1nDnqqU8NpGu",
  "key22": "4UcAmNqmGAiDZjvstuDRv2ntfP4Uqew55XW9FyvTNBMTYqL3LfnbuXBQunZpdhwfjjw9GaJoq2aWDJM77QNiwekN",
  "key23": "42s8WNjNg5ZeLj3RDuUmE6y57SmBfov1WdqZVzi4VyqcyTbbdY6QJHwfuBeNUhP8s9bY5Eoc5XLyA8oAXDyQb9xY",
  "key24": "3tpW458NRWuNpJJfbzw2VLjMgPF3Q2gxDWWdPx5nXwVe1rcy21gN5LNB4se8ue6Aw3CQ1goMAq7xaqtwy1hxBVSP",
  "key25": "5WQXpL7tFF8SqhujaQM8U9dTL7zg51vR8waHWvDqJocpXVrFXZ543PJnJ5Wn5wDXmZs95C2qGdVn3jThKAqi82x7"
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
