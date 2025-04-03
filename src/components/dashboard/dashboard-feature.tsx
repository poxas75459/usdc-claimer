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
    "4wyUyQE69vSWw5KwpS3VCx96iQCMvt5Vw79aFMayY6uY8HHSEdfcCAmDftYUBUeJsfesGEw9FwaFECtYz9JxLMp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQaaD464nG4MQXFhFyBq58vdXfBjoYXvA7uYmm4D7ANTHaQfryX6r5fFh8o8uJ3RELcMge7JJQNBKqchsjC9Bmj",
  "key1": "42r2dQpZpZ7613S2CPMSCHBAYLE7ukWsvompiGqv7LNuAVPfFiwd57AYbAzK9dBWmhTaoA2tTMt5ByMb6kErr9Sq",
  "key2": "4Va5dTyjqGybwRkkhqA8ko7DPwQXPmkvJBP4BHV9nPh3uxuSkn5uRnJTiW1fX3xVgez8vKhKLYcbvqCkWhJdkGb4",
  "key3": "34m1rVGV1r3pvc7YKLiycL6f3CZnvk3LZaWqtsWEXXL4HuzLDV5rpNCQuGuacR8uonLWZTxfmVNTrZBweeUhb6nf",
  "key4": "3Bj9LXHMB1YBydXqXNjRpGSTZfQ6doh6o8nvKNUX6A1prtWhDWDJ4JPELGkYP8Mxk15goEmZwQNK3DmWkFZcXjYv",
  "key5": "66YgV4Bq85XNUncHR2NkQfCZt37otxEHCabKJRcmkBRA67bRA83rVXEmhXTzhos6P8PymeShT2wL9AS6WbBYXF8t",
  "key6": "FH71V4Lt2fCcNHHUEwS5avrNP3qJEmk4DKLwzrRRJbBufhirYmFv7FjfMgkH1LtzFCo9MfbzdrbKH4kX61jRnKt",
  "key7": "4ajSKdqUMC3xB89gKZKTzbfq8CRiSEYRWe9YysUnLkoiaLqMKAGtod39QBTkCiNhxDjdsaPUDVn68vNM7UouUguT",
  "key8": "4VudKNALnT7tgHQPvVycWkDYur8e9vigXqk3nQQxc3K2G7XHSdcSsnnLkUpRkXm88ZEAAJB9VeagosugtmyC8Xee",
  "key9": "4Kv7KA8DaF2C6obLoZ8y6pnZeUWNWveYyVnvodDJSG4xpLzNzhxbPUm2VmAq7QpjpUdiMSd2bnLmSxFz9miFmUUY",
  "key10": "3UhSvniHwWdh8vtEe7enBDPoYuzxe29GMzS1PMoGurMLCJ34jjydhet2zaMbtvE9Mk4UExdzDEHHA3rSaHarkRXc",
  "key11": "3unEBndW4F2tS9RTvQnEy1i1qQQ7RWHcksgPRvNEuCRZRxeQj33U4inghXrwoTZsoHoC61Lqnx1Kh6GnAVToetw8",
  "key12": "MPsUwVcb1BcJSqth2rXmvHM3nJuveWXsWKGi5WCNrGDKhU3qT9Rzr8csgxR8FMffzcE3dgQj59ZySwJjnadZiDt",
  "key13": "35WFNVtAepruGLzUBBjsWn6WWYYDsGvPTXntmWvWJiTscjAj79TxrDXbiwJePdojvmTWhViMCGLNkpchyEqnLhwC",
  "key14": "2dFSnWxvZk9tNsyjFi73mrTYkvAb8FfKsBe9c41JrXrYFycNyNwWEU32s942Jt1ncFP6CnNdSVvCBPfYrZouyq2c",
  "key15": "21sEpQ8VFie7fFj5hRu4fV1wmKTbGfhDWC47aeT5sAtbK8vUU4MiSpUhTz3N2iA5bQ6FAGuYU2Sh6cGvAoVEZrn4",
  "key16": "3DfgqzKhS17haEj3qZXDk1gJBD7EisHPxiUBHbN7FxsWLA51oGCUvP6Msfta1qDthkaPLWtpDNAhbXeRrN1CRN9D",
  "key17": "3J4tAtyfQWbCkqb7D5Ezsgw8PUaHC1WpGcNqVKHiW3dQPWgGgcjFfBprXu8aiUeJ2NcTnJeGkp5aCULJWEC96wmr",
  "key18": "DYxkfXYj5zjojbVMpTbzit76u9UCjxKM4emrj7bz11jyb8L2S2wNLk25urvvbjXsoBr66fJfVMqCbRz8DAzbRPV",
  "key19": "2f1KUBwJJm6DWkBBcjL1FCkxruGrpSkaN9Vt4btcHVt1kQpuc7aDwfhbG2vBkkbYgKSD8Uzzje8H3qf7iDWJiU2R",
  "key20": "XEvNeE9jT9npXwBSz3FzkScTUL52oy2FJfD7n7nwBbDRU59XFpVTw5WDKQUpW86LLRgnQwYCySNKvkm2iwbbbm2",
  "key21": "3Akwz77M7gD7hoLei3ozW3de9HLMyxfBeJVqkLM9UDCGdNFwZXZz6B8fBTPKi3wUEyMCiJegE4H4TGxhdJtk7zcp",
  "key22": "5E5Mp6y9DdMBMzWa16HBmJgYA8HjUmeHjACTvR1pKEjqr1wxZeeUs9rNybYVkyB9tLaaVQhNhXxCSsbHrLqt8xgk",
  "key23": "5uT1jsqHRygiz36LyWzjGx87a9AoPYMNvdTLEGRFqg3LfDm2hjsKjtdejVJmro6iSb5eumdxQUsdnAtmQr8hhNwb",
  "key24": "3qWZKQ7tnBbBptaxVFyYYvQuHMy7vs1vtehxNpnCazsZW9rwyQRu2mY7SkD4RWAiGjnR1gVT9DkREeLBUqU8UQsZ"
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
