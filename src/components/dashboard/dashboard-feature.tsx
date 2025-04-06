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
    "hWNCTQEADc5eBYax7Fv4nMtE9WTQmU3oRtPXWGwmMxAaKEZWzasREkMvVDFxHfUqR24VaGYfniTfBU9TfV5zWP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5secffYGNe75WtcV1aLSZfGpdtpYZ4wk3yN4LD1vnMCreM9krHcaR2M1nipigQuqxiFZ5FZRuGia7NtQ1rmK5kgW",
  "key1": "5ULGRePiJPNvb2Rw81BPjjyiXmpeah8Js2Ep4vNUBzsrzbebmm8yZ2dwjKBuuSwApfUR7JEYuLcDyf9LjhAUnKAR",
  "key2": "5f5YfrzLAkC5M5NKJBdZUwfBEmTpJ2dgc5mQ6DFL99imWY5ENeFhNczybHXbywARTt9cpkGneeXHozrdwL34tPZt",
  "key3": "4PPiyH2VCaAw5dDe4Gop6q64KqXcDiCPRNp5NRdrd5ksagyGMEj4m44gPSEZcmHprP65osJBQzLotK61T5zRoreD",
  "key4": "3fCSuin8o48Gia9ztYEDip5yBTTQuYPMHeRasiqZmQPKNYzGiWHqwqgo2BtprRPMS3sATsfcJ1pADUzBgV5sTwrJ",
  "key5": "3qVfwWUnUahE98woxtTaF13n9LzstHfAQWW4SudQDh5hnDjUUKj1rMoBrTN1EeCdqYgX9bH4iCpqWuYHKzenevLs",
  "key6": "5hy77nNYJkSTwFRXNWJeu6Jx3RYBpPyKagNnRVFdUwM3ixYKrWEwKZsKiMfTA8fHLG4HQLMzQpspRmTT3yEAuYhj",
  "key7": "5ixLWL1A69ZN6oDLNnKuEhWjx778Fy3xXW4L4YqUZvtQSWfV8zgptPxtVKrhY8QWR8pKjQHAWdHpuXFfiPwgyxX1",
  "key8": "2xBnst6kwsmnybZqe1CU25ZjUdWCNiaHJGMuth3zTkNmTHQDZJUjb4MSZF3r4c7DXmTFgzMUztYnoiLAiXWtKePs",
  "key9": "52nJKhdBUbLtASyXPbZtyuBvai4dB6pJvuNEUYR6LCm3gtLXTicCVJvgUbHUXHRvKBcsZzoChHHbHsbdLjZQp5Kb",
  "key10": "dd2GBi5YaXsW9oXyW4R5udw96o5sVfbBiHa7zWeGWTtEC2WVpcZVt5uKPx32QkmdqvF8vg1dDLJnHAxCeCWVwq9",
  "key11": "4DQXs2RrgxjC8Cw4aV4PEDapjzxDuPP8o7veDHMqfrTmJVTuPrpDMJEdQ14PP5rTeyzCK5MnzZEHwG3fC9P5Tz7a",
  "key12": "5TfjcPBT6fe9uQ1SWcaAWEt8PMXgzk43BHdz6CcBhYS3jhNrZmFKPXTNwBLHd7Sks39YawTjrdRMy9iRfG7jTcXo",
  "key13": "2AWP1s5n2gjJVRcczyppnnHq9bDCV3ghzA9HbefxDviGZbtp9ziSsWKvLURvEbW5xtJ3haNLqhrgEmxgKDak2n1R",
  "key14": "54A8b4BQHQ7hLtJib4iwdQewftwx688pjfkkSyc5cAk3GKZB1AFJQp65Fu6ZG2FhJkAyfVQWvskPijhsjUwy7Ypm",
  "key15": "65FLKQZhqP2cVZJeGL2NZjkawrBBVKJjLv4ABhgpj2Hd1S77QYyBjtGW7mEY62jETUGv3Hf8HHdDP2XQ9aiqdT4E",
  "key16": "3eAnPAt1oum1UvbMe56GULd6W4AMeRcDcFuxryM2zqnetSWMGKcL3UVHrFG96mF3ugdXxzQ6AsWfcSGSgAUxyd5Y",
  "key17": "T8kCEgoKob5B4MMV3DTSNTxjZYWE4ZUZ3mrCUDjdV2D9cRL8vBaDC7EozJBSLKz83Th4Vw1KSXG8EYjSMvScdDF",
  "key18": "5A2qTDMncFCd3TvQynNok4X38wKACfVc4H73BR47ntGwRZSSLi3vBtDCjXCew2ZrjU4ntMn5UiBL9VZh2a9QQNEv",
  "key19": "2jcCPFicxoSBCSEYjxk4UhMHckEBC3zXRJz8pmQViEXLVgKB1RJRqTUe3SyjpVT7PbZjPoHjXAv77QzJr2hBxvrc",
  "key20": "4MKJyYVsMgFzrxeKqcfkNnoUvjcpX3EaVZR7pwu3YDPDrPPfhEoY8cyiiaGuTWGg4MHfQWBXFExmRUpWtcmSxHLe",
  "key21": "RuzpbQFcgNa1DstmYzyr4u8RcwA7QH8DMT95F9NVqGmuTTDoEixQ75DvGH3evfnFH5YiVPj82RPJyVdGq2CsnEN",
  "key22": "3nk1iDt6F66Wj32cSeEwx5vnKzacGwuV3JsneqcK5GVDfJsVLMK1suLckYPBJb2TzbygbmdgihZpVTa6YwkUsq9t",
  "key23": "48Zq6eEi2oSA97SMWMCrHGmgMV5xp3zsfSpP25j55ZM4yk1ipo5mhRtNLvPnVC4EcaJiAwGLb4PAnUvoFE9PT6Db",
  "key24": "QaVRZmXTQkxRYvYSGtsCyXsUQXJ55uwJAqCUq6tVAkMK8CZH8LRv8Q4C6b9Fzo2qAkB7P7538BnrFkVDie73zDG",
  "key25": "5TRyMgjX2KvGto8g1PNZufcMLk45AniPdPyCtTp3qr3yDFXvYYc7NuMTdycPLVNHoiUjPns7TZ8eGMWKepedpHCL",
  "key26": "a4cKRCN1xvy155CixQ8StpH4JBFtcuKbhCXA5sgim1T981y3xKTRzJa2SjcqRJi7gwwEiZk3ifR959hKnsqob8k",
  "key27": "2ktuWLF3biLeVS6E9mwq7MxkX3s2HNAj5asSbSbg1zze84Ctfx8pS2fBdsy19ydhe55LSShaKmvZBq8cShqvSKtx",
  "key28": "2j9KZxWMQZVGr4LWLze6vefhBn3KhdQDZk9r5zvB99c49FvgArcHoNtmtCVW246s8pWXCCzTERDHDNWKtPSYtaL9"
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
