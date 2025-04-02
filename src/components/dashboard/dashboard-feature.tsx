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
    "2SXa2DSTZgsbHrCKGu62NTnCFxA5Lk4zeqXViYbKghL4xr2GdY3UeZPZmc5X7CkpSCaxNiuRrdjwoh9m85FQypUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywZisU4qrmwTX72dDpxxHpvm81xiye43P8itCy1YWDRpy8PTzFTMH8pRXhoV876zRVuA8UXe3Qu6ASBEg5jBNZL",
  "key1": "2KHEy6SHdgnNMPnUkCoRByMtmHsFcyQJP9XLzopmpTcg3Rr1BKCM9EMV7Zok37YoEkqTrLyPcHxducCf4a83HCAK",
  "key2": "3WaymfDLeQkKoHuNit8P56Fm77QcRqaiukM9V8TMHuckzowUpxUUQR8vEUyReQhEteQJvG17bC7mgDDsk1VVXe8j",
  "key3": "4degWWiEUj7uxK9jWtR6mmkyLBaYPuxsjtL3XQr9f9MwXNhjfD4fNxGZt7QraTw2QDeFvMzo5vywv291sJZhJLRL",
  "key4": "yTXUX6fZYXNhZ8cMNECrGQPcHvk8w9zHwBoUVMyj2iwJfo5QYcJVP9R6ExAyU1HY5CsK6wKNCgbVhejgYbQCB35",
  "key5": "2En6vqUUcoyr4CQ2NBjf7fx9B2ViwKpW9MdmTuGBt6tKBjq7Q5vFCqH3aNDotFz5gwEJG4rX6DmgRUPzXREzUZty",
  "key6": "4pzje4G55vXgaigt1Jjp8UZZLMaimY4qSPsR8Z3JWbYgQmKeAggWpCqPqGmrEHKPKCgZxxiQuGmuQXmYMzcEUAbc",
  "key7": "2AGUyqyTdGGER1JKsE7ezoSxmqc4KpA74uVi8MdzaVsWgWv77wkZDWVCU8em2bxFna3Cd3hrM26GBHCcoYYxk2XF",
  "key8": "3nnvfwYvqUBA8iGkoBGdAuT4vEJJEYCeDXb711aymia42n1rzSi6kDgc8RdmUNNYMqNygQkYhgr9jVsSQbJtWT4A",
  "key9": "2Z6FrKdRKnRViFzTaAAgSauQ5X7KXpmZbo2VzaLjJ4boJb8GrDaWx5NrhdzjZ2AY2uUctXM9T5gkpu1ucJk9mepr",
  "key10": "bYDvGZRnEcze4G4dbigGxx7dyHpHHmhoWFTErNkGzm1uSgSMRPt587mHj3DYDgJVhrFQVaxhEQp41itAarVNKgh",
  "key11": "4QNNNgFyF9v9SsQw78PxqH4NgAUgFaRujqAhekkvZo8D92svasajwNxDtKDKQWqnFHKCTAsLZy8hnt8zD94CfMBV",
  "key12": "3fk5oiEqV38Pw8QgcZKiApxSZ5YTyqfBdBq9vxcrzSmx2JUAYkgLMwMQjF3N9tMViLdphBSvVwMin2Lai39B25R",
  "key13": "5NYs8YZXhAcRCKmkxEistKLPtZqjU1XtYDB3NbLNsjbejFWD1mHb2jYhytkrAxQ3tupgia3od4yn3H56sAyz4dgY",
  "key14": "fJnJyJQBE29ENYjc1pPj3o18qkeJexyj3PryCS3VoLQGrKM4UY9DSyHLJDSEk35hEZB848XXy7uLTRj2RpBndUn",
  "key15": "2jdWtJq6noqAjrwBScStbs85HL4sKFLSx52cjFQA2Az8EqriZYWB92b4d7rGj8fBL5wg4yBsN9SfvHLEJycnBJ3B",
  "key16": "ZMCVuMwtrGSPHtEuRcbVvAjSLjxBshkCw6cTegZMDHxdK4sBupNyGPSADRdayQGaMkRJTd26o3svB7bCA5YCKiA",
  "key17": "5TYoxitspR6NzimNzGFe2Pg9KuxSeB9waPokGcS9aJfYnUUq63HdqMVtKaQibJNzsPBKm8zKCq58bphGn69beF76",
  "key18": "3n6Y8Fpq4FrVtCRCT4hQqPCJPgQ3pUSJtM6ybTesASzPrvEFguR3MHDVhk5RDmgCbwoWaJfi7XViEuzpqnWF58Un",
  "key19": "3idQWXAwH1yQY1KNRgwyvqHjvpcCNMpkhTTC7xwk6vs6QquiupTejeE6o64U2UYXB3G6tZVGoVqDLZs3Zac8A3US",
  "key20": "2qgZhfn6FVP7WJupmcZD28SFtswR7fk75Pvsoi6XeRtd19L9HwxphsfZ9wTCf1RetwqsHYUcQQj4vUP6LsoEBs36",
  "key21": "2Rt1CjZmQCRFBUWgVQasQrqnMe2qzEZRvSgNzCLCGGfaouuiyf3yBuspeEVeDzvPMcnyDXdFRr1Eu74Hn71PSa7D",
  "key22": "5Mxc4x4nQN6xtk92bRy733th7GuHULXSA8G66Ha1R7pW1naPjjNJQeGFri9fRuEDoHsLcHkffkaaxWmKJSdapYT3",
  "key23": "4Nnw5eTpcos5GYaTpunVdiwUdAtXnKQmUm7WJ17Q3UTr7ztss7CgxFSXmqpBgnWKHgykzBCMadSBHW7LpAUZW1Mh",
  "key24": "5HYa32b7cdCreUqDwuHc6qSWJ4h6FUK8dp4Wo6QzUy498LNPoYSS2Fc8UGU4TWhY6DaYm6YW7bHxsYAD3jDrkPb4",
  "key25": "63fQxR5uDkwUCkbMcqUsRjDAxiTSe1BvaxsCh2SQqgZhohdNj3m8n1W8kg5FniZySicEaa9uyZb6KkdhxSd6zaBJ",
  "key26": "32HimiYotpXWqqJjhBiDBCANmGXDnBkePReoJf6uwoJoNLUJUrzpWsrrdmEEX5tEFk6pRRqnQPxt2bgMudPXpL7R"
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
