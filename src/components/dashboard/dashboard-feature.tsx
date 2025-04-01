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
    "Tv8oEtszz2wMb3uYpFwv1gRNoGP9hQnt42Tbg2VkMchUxcPb6L92dDVs7ahmbVFJUGLKaD19o6pew8ZGQSeH92N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipvUaFH652yQbrKyKUpXPNfSVk4jEDYG1Nv7q81yCrBtZNySvkrRtJX6r93pj3nueA8zPvoMWwVSwHzX61WtqBQ",
  "key1": "65Zwo1BfAcXL2cVbC83g5M3LdXCuvUnf4YjHByf6eLU6CU16cJ32j8bCKMDmPkoKQN5TECCWnsyRoeTqv1oeUTE",
  "key2": "3RwTnrYeHbsmXwAw8rGXwdzjKNK6vH2t2hWKkEZX2g9GRx3Tve2Qx3Z6PTTX2N861EcigSP3szxhEqvqWQp4B81t",
  "key3": "3nKuXPocheEiaQcrppJix4SGRA3nPca69K9gVTbsZbB5N4f7ppwcRTXVf86c8UvaNFBNJ5swUviULvy65TMoP5jy",
  "key4": "3gybC5tXXq87dZwCaRevfCbhJy2KQbRwWoUuNGZyKt4fX1NxZ6D7BEemA6VcDsyDUgTEjtEh6qhwTEaT14midie5",
  "key5": "rkLe69g4Tefkikk4f5tF8ycz9tXuahhVXXNUQQqsjcyAG57bdpaPhhYZkwScUtWDxaXn6DyQDDgxzaC738RGJ6X",
  "key6": "2kgL2HNAiT5QVkA8znQvNxjCewMRjDHJfSsRxEBT5Y67fo1FGP6Z4QtXGAFk77NWXz9YaVAwtTw642wANiBDNrGE",
  "key7": "4XvhqVQuFKtDmcCHTVmBaGwfieaTt3XAAMZDAeR4HBn5UfdYPjCmaNJY5yqmCFZ53kjb3zwyNoXjogjVL2CZndjf",
  "key8": "4gkwp9g7YD9DavsDcvUYfaWoMNdgCSSv2qed7uSgTePonifao6kQj8hGTpZnM2bNzPHkMGbe8gvcrJDrtdd5CfhR",
  "key9": "2sP9dHGR1JwpGxZyFH6rcudRLMf65KRbxfd97eLUsUTe1VkZjtS4aHGvTadjxCmwfsZqoS1YS1C4RGVRGAorxwPN",
  "key10": "4mM2iwuHzYQwDZdJPP8TDjK6yZJxd48gEKSq5GsmnCiEvA93jmBggt2wxdZ9EuD8mzRkH4Djau9p97kc89jpB5QT",
  "key11": "3SrUrBZVS5LE4pzGTqzpE4vxdzqKXTR99mJ1tVECk47zcMguRfV5oR55qztK3ACnrpc8CdXFAJFd5jW53CZ9rHeL",
  "key12": "5VmKDjhG3N7PV2bABZZDS2zR37yNSHzm3KPUxy93Cyx7g1eGUymgHb2ts7EHXpQ4J5Gw8HGVmBCGtEeJ4YJyAe5w",
  "key13": "4taRfFwQK7YaacYG96BAPDph82YMuVLr4ztbCwD6gYUAMWFD6dNt2JfC2P1mwBBZmLyEhrYb68pGM9rWwB47ztUM",
  "key14": "4szAREMaCmS7zJKCsdYxmJTYUPA4heDGkxj6Sbn1NXf1WT4hz3tjawS75CArxZhKGLNUQuVu13QXw72TRQ9L5G9s",
  "key15": "5se562tc1uasafEgCs2Qu2XjVu1XC929kuxD5JPoGuEMLfhHVfYEJrRjWTFrXpwrAFXHZqh5n7UinLZhknzWzFfw",
  "key16": "4bEFiA6axHj4HjYCA1bXL6wgbh6pD4tUM7ajXnEvWU97zVY9BkvnV175KYCeSuGJkSptFwuNh6BAPF71hxvj1jMr",
  "key17": "4MunPDriW4wAZbLiNEdfSmNbbTesienYX4BfWxMtfSkfHFf7AtpTnaAXdXaeakbFZV4iSR7CsV7CPjKuxMuUzrsa",
  "key18": "3xxRH9wsJKnwSeetMQV4N3cdABQqzPyBx8qxrXqJuHYfKUtj9JXGDSqTbTCQ3DYrxSeAbThjJCieD3TWEVv2t1T7",
  "key19": "4Z67voQo9sLjLUtVozWM9EHpNanHq82Pzv9RUvULpJFULQ71ghzqRbXN1tKaVfJkq17ZfThk4Y7HiRLmxUHGxGT1",
  "key20": "5PVyrjSgQVFn7aSJD68zYAkzK5ZYthxdqbK9peVmvSyvA2wMnYGCWYh4fasoRzKgTWC3Z3bWG6ifMD1rPZDbH7iX",
  "key21": "3fDnSchAJouDFNhnL7yaKZRtMHVhSCCxTAFaZcakpvvoMzT11oJ3nKrhjoNdNmFeUwx6fZKvE3X8cZtMmT7dX7Tj",
  "key22": "XyaU8qFCijJw5HqfivoPKAR7cdm8soNxycY2YF5RxEJgRucsUu58nfmornrYPqP1vrMPNJs1K14vcQUrnFNCdoq",
  "key23": "4a99TRYwj9GdR4BnctTKZi3SmaLtczaKMPa7hbkfCJztY6yQuKb5et54RZEE939L9kKXVuG9EscjCNQMfqtfExct",
  "key24": "2UL9WiyXqGXNZUb8wkBDDjAjjTBirybzuq19KDBzt7bi9RPTaKN87x6Bx33zTnXi19LBRZmeZM8E11z68pqK2Mn4",
  "key25": "2obUEZ1Uzpp1it5RJcJX9bh2PKgEJL3AQLTFtMvQJn6Dne75ttrj1VjmgEik9aPmVGeiNaHaXWHQdLCWRG5GLADj",
  "key26": "346w6rrf1qT78y7bVRymp92HEL9ooX9f9ybcoyMSX4my2zBB9SXejQVwuEKoCFkDyhqQz8wxXgpjY7RReF42xAJe"
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
