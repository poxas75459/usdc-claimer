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
    "3Rt2AV9KG6jVTRsEEKT9VbcfqWYvm53skcH5ZMb2XtDRz2FhZce4t8WyuDj2PysoWAwowgdibQjJkpciXRcfT8vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QR5iafdCEF2hSgrqxzoNDFRCNNJXTLEsEFRHsQS85MVHrLvuPFHJjHgXjpTrbXNL7Sri3aXHTLw33pHuDM51Tiw",
  "key1": "2JfUTCuDFHF9qUeJi8UDRbLza5foJABSsaRcV1GfMgcTKAPzKGTyk13nCEGdZ9MAYT23jKQnDzMLydj9boCNkvD3",
  "key2": "3RWWzVdMoxE99BzqePyAbSV7VBno63mbZdPVwagB6nYtsz3hpDKcqsk8jBoqLrvPf8EEDxc3vHyfAYrSQF2fqfvp",
  "key3": "2xxKBSCVwedUnsPB3D4zFLFEt2Y8ZK87ke3hTdGFT3evjx2nkuuVmDgfczVLj6DFJXPU3qHm9gYC7GeA7RvUBNNx",
  "key4": "5Qt3bngtXhwVq67DV8rjEkCz2xn8A2Ts6gJaziyAAcGEajWTF5B54Z4MHWJis5t4tnm6yCXnZPedEGbXE7xxpDKc",
  "key5": "3ud8dbGsiTQo5UhaDm7Q1KarJA99jhDQbu2QknfW58R4Eu4dH6NqXUi9sR6teLjoGpyF8LgfnKZifubaBi71kb9A",
  "key6": "2LNUKsBh4ZhFh2vmRRozm6oHhaiLpqMXPwnnqs2Y8t2zYmX9WfZbDYBcxMDiNVCXhPBwVBHsgMXvkvq8Qcn9ctKo",
  "key7": "EfKgYdgej1An7GxX5QydiETvPTYTq5Gg6a6npBEP1DPaFAFfKknQTU65Z7dUYJtWAgJ7nZ7we3CipvpVpmvb8ZX",
  "key8": "3TCWRBcwdiCqYRRF2agK5rNMjvpRqxSFz8VcNWZpdEptVB52Eex2AkG1ozckW2gmHVWLik8irAdk6bbKDyKg2FbZ",
  "key9": "9NnvBBrWpnQVuJSd7oNzHqbsBFkMYA7KtyewxFeXFTxP68Gioz7nGgVJsNdAU47Wt4HFxC3rxbXH3yf8NN1FJtt",
  "key10": "5gkqPB8hvKEhniaKemK86how1jfCmwrVXtbc9zgsKLtgTpNGtfppFKYT3XiZiJfLtZa1UxScBvxHwKXGdPmEdr2n",
  "key11": "3wwovaLFkvBdLThoUNwgv32WVAPk54rsiXNEj4Mpg9YJ6LV39JB9HY8bwgE5Jc1FnQ2zzxokLrvnEW55ymhhn9bh",
  "key12": "3Q2WuP41JkXd8jYDEMdsKdTHPhm9mNZoNjwBDeqFyniVB1T6hCDKeiYpdCsFEPvS36nxJiTtTFUuZgeo1kM6c8HQ",
  "key13": "22KhptuQMtkQ2ruvnMKJndiWFXF3tadprtaB86nV2nZj4QpFweKaTzUjMtBdXrY4ADBxPaTwYr9QR4CsuMrvG5s6",
  "key14": "2EKxwL7kVZzxQTApD8JvmsXfPwtnuLnJKZ4mSB1UQUdDj1z71DRUfm2TuHPQZM1fWUv14FY2ihiL7TWpFRRTmTGD",
  "key15": "5UX5SvpQmYu9Axwzfd72RLWAeKNhHTYbjzr3VZUrCfmJ9Sco8n63nGyE3bm9oXfzTsC925YU9y1Z6kQ2UfdBWYwg",
  "key16": "2GfCbQavH3eoVd4DD59jHPpLqte3FPJEgwmCJ75m2JLaFc9DSWeTADvhVCFCcj3vuHd8uFKDsCpVWLVRj7VcSfxw",
  "key17": "2HdPqVFNd7ev9XTnpwXqdiAv3iaXVRr4k5mxg3iSDxhSSTX5JhFn6ZHcKiTiZjE9VoRyhsm2ndTaPvhFi7jkRSrT",
  "key18": "36pns3tY6dgc1YgeMxY3hbdCZzYzixriWmEhgfDsPC9TRU3WiuLrNrLjAebAtdrkKqqnrNahitnnisLHwEsVR6Si",
  "key19": "4LMLMk3XyCLSFdNNjkFDx92a1xtWpDfoYgrFk7Sak8v9SgXCzpKiM6JUa6rwM774BNMew2hBieLSN4PUyrmGeVru",
  "key20": "4DtfkCJcbrTaxreb5wL7pZJPR2jfnDU7ZaPNmucC1HEbyLFjuymRv8nFF5S56B5mTmwW9S4badGHGgpBvmTnBwrn",
  "key21": "4sJqMsievWqaFLuu574nG8sCGfdUS5ZTSbZ1DkpuhKv24w4LHkiSDqRJQL7RvLJJgJfcLPvwLL9Jg6cP9HVEFEG8",
  "key22": "3MAzs5c4pBvw6a3R6qnAVZT4TnCpNdPpLU86TpTxkW5NiHmvZUZ99ki3JfMukFm4sWpXj9yxvmhkHV2ZGdeWVmp5",
  "key23": "3RYEd7JsyhmsC8Akh7bRtAdBnLw8D3kur9E4wVix64kJDMmPWtKnTaXkAwNKD7pr5hhpgsFn849YKWCAbGyzvecp",
  "key24": "3xERA41ZG1Py7u7HtZrU1Vj3CjmVbqGvFQHLTmAKbJZKMMbahCo4jNEQer7ZuXsa88W3yD1bmZSoAqSBbS1QcTXr"
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
