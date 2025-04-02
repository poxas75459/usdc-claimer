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
    "3cMSS9erfVuwDxPUtZ6Nz22y1kQiHPA6BhcZSvccZ8XtwjMSW9HozM5XBshaTdCLfMbQCnVLSzBWRQPJ4VaqV5pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6ZsgrNA6nTbTER52w5k8Zr8CPCevtwJtCbRrcCKKfX6QnFbZaAVXp1L96nrCScTjv9Rdf8XxFRMMgLqyr53z8H",
  "key1": "2jH4mJ74tXXWJWsS3dHNNdpBbAYC2wdKzwmLq4ZoHKoLWqLiXTDHjyKFt7UWB6ndH1dtXee27Aivm4MwuD1Qk3vU",
  "key2": "KfWec25JpmSuhrmL31GsUSQdoYTtRDYZ2iSLq3S2viABLte8E1ikUm1wztWKux32oKfNp2y1Vrx7Lv9BoTqWBxt",
  "key3": "5Ta5aPUkddMk8nruZfBBJuxVe5ZD9az3KADcGzRqSrXSuWekLM1yYGe9uT6F3fXmf62VZNTCSDUPNjJzEJbhZXL3",
  "key4": "YpUhJBZPCH7LgaEyxNh92Zq7o9NeVKVC9ysoxzqcfMkFKVgNQuMYXB6iTQV9GkX2P7wt3JTG43FpoxfsFxWDoAv",
  "key5": "51SeJDJPuMK4R1krwcZQ6TGS2UeTDJckukr3VVnMGUap1i3DrCnDxyKSe3Q9rWaeEU5oEoZqvVQECDvgfrfkurtA",
  "key6": "VEDC5uPcF1mc9vBnrs22fJ8nzXHarv1mozh6AjzLkuMKFJjmCUa41NeXK6vkAjP3KweYYKJRJ3tmEXrHT1tpjYS",
  "key7": "4QoyiX7VffMn2uLp7MXh2fVbGc2yBAU6gbuVy8hh1avkysB8QveXVKv3Wx9Vm67dGEDBGohafmJbwsseZLBLtWa3",
  "key8": "4sGaoZT8cXZDtyrFapRPyY2JDj8s6L83RPPbV4YAukHppmUYmhHgWRRVAX9efvhMMJWXQmVPqtQErBAXbWL3VkhC",
  "key9": "3vJLH3vjiQb867UmZ3M6TE2WDqcbNkkzDUe7k48EsDrPfrC6eyqKkykJKSbrGmqXaQtYb1aR2ThvD4LB6uEygnNf",
  "key10": "3982H9oVdG2BzP3C1zKeL8VntywRxCAmFmgXURAnDgbwPDwUofjGcq39jEaD5Ln2c4hvH2kCpzUysvUnmzXSvT3X",
  "key11": "5EC1HZyRpfvMUUspJhQXfRB4LnzreP1XiBK2wsR9eUpvwo5gTtP9J4D5nYABxM24sGTNtjoDvPzC4Z93KQiuADDS",
  "key12": "3QVefpLAe4y4vfWsRL6zFDJ7fCCwih3XbPHHR6ktjU7pdGVo4LVaKuYYjuRWafKSroJyUZwu9TFv7RSYT85X1hKq",
  "key13": "4VvDS1w4RFmjngTvWexQ5v1BhXw2aeSjeryUJBbTcfnsZXeygXfbNnkDjtMCXePEW84qrqD13rWDbuZy4VRXSaBV",
  "key14": "31jEpybAQmTRspSvPThSKshMkiWWug6d9f6mDEmZk6y4TcQmB86zX7B2fgqyhfb4aZWQRnEyZFvMBmFemVdVEkL3",
  "key15": "MKcHat5gszuGHCqjLd9VFCWLyJheh6EtWGZPhybHbRMgwkqYrpS2dDoqmBEARfPCSeUYckRynVjRccEvS1wQc3M",
  "key16": "KTXn3HEsKZzWsWcmmfHqaCZNDvacAiofNjAN1kwys1s9bjfj8Ei8fakMGB4DJ55Xjr5qFsUe4fxKVvRvtomX8HR",
  "key17": "A2c7RCmvRN1gU6TbtjNzXZdb3stW8R3PsHfGzGyXJpxDpkCHQV6pDmx1bYadb75Qwo22qwJyxjm55ugyWDvPwom",
  "key18": "5JH7cHdqyEBi48w4jMjP1SybRwVtyLsvcH9zTWrCfbHwwBYqZeggpFq8jCJ2D7RD83tv4ySW882pxaYo7ggM8ejD",
  "key19": "2P5cArJTyuu5cxqAbhcSANiWMi41gCRgbnSEWQdeWE4UAJ7nEx4NF46huQhiZRrTL61hYfCnB1KF9WZAE9trqPMs",
  "key20": "67R9iaCWCZyTgdLyg9Q1Uyb8QUoL8uxFrfWpeNey12SvhqZC9A7bW3TcpRx2v1L91T9xZpif9gcFTpFPaFuBxLeC",
  "key21": "4scRPtJAjm8stE7GSmzArpFk1pa3kcdV7R7X9EfaNXKicY9Gm2LjnxTD8whZmGEFSPxDFcyUmySuawdKJMXKaZLr",
  "key22": "4gue1b6qn34oqD4BjKTBVjgiCiNmfbdgUAnqycGv28kb3MS7dWBnpfY5rJurBRyu2D4Eti1zN4cSJfTT2jCy6K6J",
  "key23": "2FqjHR6quKAjuaXzk8cLzXX5uSKHjmwABnKGVFdVasTJrmq43atLgXrWSh7eiG8XNJSV5QzrEHqRX98Aaetckkjc",
  "key24": "41ot4ZmUpxhp9YT9SHFgpkXar7cdBJHCB1cbcYboRbViNngGAnHgdZrRYVETNVSr5rmbYqKeFkmsrDSodg8qr6Sq",
  "key25": "56ZxsyARcJThUomhqd53iQiPMHA2TkCbo2SrWPGebgFn3jjYMU67EcfQZQoqzpFQqTzKfHexMcaWvmZ7AsciRznd",
  "key26": "44XXvj88q88xGZEaTUtmGaK8CG98BwQRuT5KRCYxUcHZvkJ4cPEyQ9CZmM1Sp234HnJeC8yq63ebFK4wmM8pKWmC",
  "key27": "2rA5aXD6exQBRQE5V9qdaWvt3FDPTSLJgpU25N8TiV5NP7RwFEzbR9tZvtj2su4uAwxycQbVz86J5n8W2kiNVspe",
  "key28": "44MofeYgShsTJo5hhoJecizSYvaPno1qLRG4NXCqarQZrNzJosCDpVZthpju4gQwxBNYApkkNG2pbG3ktc3oAzre",
  "key29": "4qCv6NeDZVLsFFfZqc9nEzcouzSiQs9mappThUcu2LTivDGGLSC1szKNTUiZhJMtQyrRPdyXpL7BAgUN3euwWL22",
  "key30": "5qcpdozRi7FD7s7SoeR993UJkU8pTRsei6JcJ68CNuRyRqeupQPkVZ8DxhwkqdrpzD7CY9jKmgUjw2pswexzRKzm",
  "key31": "2qaM1CY47UQDuRLC2D3EDN3cAtWtkbeVNvSZ5oTm89izFk1MzW5rVyGiVCdyaWQdeGf1nirDU4mKRJ33Qzqg61QP"
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
