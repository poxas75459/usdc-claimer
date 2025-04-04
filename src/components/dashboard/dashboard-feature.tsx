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
    "4jA8sGsvha1UnBmi4cBU4885YgVqQYYW9fh7ophGZyC8tbdjjHCHfJbJvGyaMHNQCTcvVfcKMyeht3nqQPqfpzxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXgiEpMLAqa6TaF3m4rth4spTkW5RNTPQnpH1K3XcHcL1epuBYubP5meahYjbjgDBNtEJj8yedkhk7aZVuZvzvj",
  "key1": "66vgiptS7XiAMDkESYJQC6dyi1aT5abL9yJqxgWR9rShKVuZRJ4TJBM1ojtrNy2AKrpcZ6VuJbdsm8iMkg5ywmr3",
  "key2": "5jN92qPVR8J9GF9TiWf44Te8VJiWyFHwfT7Bk5XhcWMcXYcq7kdug8qnra3odT39ERa3H861MKWW1aCVV5fUriRd",
  "key3": "5nzzsj6WMySetYRQhiH3wFCpNxH8TA5HWXVpJ6NNwDqjBFMKyHK648R6AMyjpVrdj8ecUXkrbj3PiUHZYcbJLrsS",
  "key4": "4aheLfYBeHVgWvja6Gk1Uk4b15vcxhnVhoDLNKzCuHDFTioTAawiAje1V9GfeZnsDWz8C5EtHN87Zdp1qqj8VZCy",
  "key5": "5YnCCXfxSB8s4VCHWPyh3DHdcmYvVqsTj39rdo2SDuL8RiDMnaP6Z5H3Kg7vY3qeQY949tEff5qQ1nCyqSr179uz",
  "key6": "2rPLgYJ4WD7xf1gZBkG15foq5s6ukkQ935CKMaueLcnw63epva6NwPPDsTLkFPVomHdHy1GQQepyBPoDE9AWUWkV",
  "key7": "5ybmH7e7NmsoJDLUfD33gvsKXhaHUvsDpkBoK3DS1waogavZrKbpe6fN6KuJJNjSvvu9Gmopu67KUf9DW1mkr9XS",
  "key8": "57PxEnA6iwpvqVVKQq4d6bCtnKQ8RzpDo2C8XHLEagtx8MarqRLYUCLvJV4iUJ591oH1wbM2bvo7QUV8NTceuU2b",
  "key9": "2ZfQfKuni35rfVMhwqLtG2Pfy9KsSFD15nZ6QNCSbaBcpRE1kbiY7ZabqTPBBuzvDQAKpQeL5TcYUrZi17VVMczy",
  "key10": "5Fpf3VS6vrJAMwPgMZHCwzhWh87yCmxeFczZVLppJBUEijEA5osubv6DxbccioPPe77dcuDR5pyd1rREffCKnHB8",
  "key11": "729hGJMLtU5m85b1XB1AVZLzR1qJtgVCRR8gEkYViJbxHw888QS893kTPudbRMwpcvLLXQo55hyhN4n8F9p7bPZ",
  "key12": "B5Zvei7cc5WS8kGQjgUCoNLrHxVC136T1y5TjmHXpexAa4V8vtLhnYWwXqQFdfBoVsXE19fqbXxKqHMPkwgfUEf",
  "key13": "T8MJqjuNqmbhxMSaJHgAwPjpLJx4i2bNokzUA3iptQKciUrNzSNqjriPXvttjepfQ7ERzEtXVxppn1tjb9N9ARP",
  "key14": "4yWKmZp6GbouxewBUE1DPBUQim8ScK5rTTeqYsb9EfTkXaNH72nhsE1NAEvmkUrV2ToUKbSK86Uw5X45YwkfdEnx",
  "key15": "3V7nUmyPbtdScmhGKYj4R1bKqJjBuAa9bqQ12PQMJT1HqcrxqzQGHk12xjYJJDdP5iVvEzX9xw8SMYRGPfviifoR",
  "key16": "3xJzLGc4vA6AuDC7DuMFke5r21rgtUppPjsqWmMNhctPZpAqA6qWhnByouaVvHG3DAABu5smYPFSCcV9Hi1cDfDf",
  "key17": "5iHV7XADRzPjDYbBa9y4i2yDkLZpxQSigbips53zEncukkh8WeaSu8kZj3kHRsr6HXRWaouEqXTDHHBVUvmHQBNg",
  "key18": "3JkqjfokpDfsLiNRCaGN7zi2qPHHrwENFURMi6ZatvR4DqK8oGDwBFEH1pfwh7Fc95DcDvXJ1yjjHG44FTD4Qsrv",
  "key19": "gGabALCepL6F2JEeJShR3CcKDikEN9fJkjwHPpuoyMYa1y4W6gUZjNhg9hmvZubktE2hywqiZuMVtxkr3tVCKTu",
  "key20": "437t11e9oy7ururjLqXEZEDEpVWbQ21Gmm6C5jHKKdSbywfkEoFv2BhEwsdueWvcvzfT9NUcGrpvhMUotXCjHmqi",
  "key21": "3Ui6DVPQz5J4N5F56RVASxoEAz7HqeuhPG77ezKv7wS8YyaMzD6TpuZheXyFJ9PLq4GYALTu83fKS54yUbkomR6j",
  "key22": "KxFx7ySaSuUPqEc1b2vbHT9JbX67dRq64feF3t7gCZRyjUGohFrWCPiMUxMH9UehuTCxRTK5SijyMtMaXSP8ESv",
  "key23": "cd2GkH7bQLJPzYw9Wf41wb95nShshEgLnTSdshGFnjHq2EyWELDHricUYyk8Zze9ymyLGaoBmTaKSKQ76qY511o",
  "key24": "3kjY9jVwkWuMKQqEwBVVB8S7qvMxU9ppno4Hu3gru6cwgZ6X1zKae5wp1sXSp7p6qYedpVPozFCSXYYjMzZZTRJv"
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
