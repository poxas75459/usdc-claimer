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
    "KKhQk3JDhncNsGk7C86PucTC7CPpBtvNbRMpJxZFBWwbefeDmagmtckj9s3mPB7wU6XhHvHLNUfwsrTbpH4YqsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYRtUkG6nXEGHjgcHhLcmekm5WAfz8UeKaDvXREhTrRVWgxwHPHUSPyn6P8fW92WRX4aB2VbCfUBbsboPxu7X9c",
  "key1": "4zgBGtDPfgzUx42zQW22J3fnrJeBFmtZQGabAaJhgduCExjaKL7eeqdyEvHrbRm8UXQLbqGJz7SJAEt7AVMVaE7X",
  "key2": "43Y9w18nRNbRZrRis3awo3aUGKJ1m1hyM6eCkptrtoyzChrdvJCXMvzkdLUF1ctTmA6WtuN8rohHpUC2y5noK9XF",
  "key3": "41vRiCYtvcG1VoA1UNQBohDnuhgvFkNbXPJgpfF1GfjNiYxf3jfVhz7i5VmGakJhisb27Zewhnto8wek2CLxKXTU",
  "key4": "2eMLBjf1RRavbqWJsbABZG5BjiqbbB6pyGWZWi7R8PvWNZdcxCqi4J98nLeGGjr9YZcbXTVmGcKTWQ1UE3s7DEd1",
  "key5": "3hGT5s9Ui26d9USL82cu8CfQ1LKLXYSBRm7XXLZCgZKM8EKTVR9V1we3ucJeXn2RmAL4Nxddm9JSq1gT1WmbmGaJ",
  "key6": "5bVTfXkXALKHSZeaKgKCbi3mG4omdhkiJjub9yqLKfXubUv5FBUHwY1c2jEcihjAY1hckJHQNaLGGLJfshVyn21r",
  "key7": "FB7pEgPXVRks3vDcHx27San2AYGZ8MGWVuCdpYWdw1jsbntkzRNcqkBNt4FQQMCwhFhhEtuXUv8qdr7EgCPkS29",
  "key8": "3deiuzsM2xB3cxa6zTZyTFfuoY7ecP8hMaTxXhQUq691CjiCw9a9M6WoEtJMpZbnPzbJhWLngNqZaWjSq1mCbfXb",
  "key9": "5h2yETFmmun789Tmx1rDinWCFBef7Mb7WPf6bUwVtnjcEPnnEs2DCTLLkhfedgZnY3dHnuBpSaRTf4hBt6PUrvr7",
  "key10": "24ZWw7EJQdy8Bk4Ydy1P4278uWdF8BgysztStAFMGtfsX8o7RXBgg8hyDYDKQjerR7fcsUDjJzhGhRTxM2hSebpH",
  "key11": "2JTxrQgqsrvbRiTzCSeoSbGEgZRrZq5aZxEo13D1jVm3emPrG38GFzhQPg3KMynb6oxhG2ZkmsZUxactADS9ZytR",
  "key12": "2tsCerwYDEZ5EUZaSQWEtVaUxLDe9ZU1MwQZnrvjTgKtL5CRLCXpergSyGFFeA4cNvRASXhfdGrtKgY1BTJcv3Tv",
  "key13": "4GPX7i47XL9xFeZUG73hFMvKxLk6bkeAbVcAVp1jpd2VpU9a6Lf8MW59xiPX2Hz71rBpvowidYaaWMhwMAH3NNHW",
  "key14": "gs4i4Q9cWbQ39DFSmsvZFgg1zCjnTNpyUpnNedmpVDzb6NBC5FWBTdwkzUdQTn3VbiHWtcYKUqDYr7m2J6cLbyh",
  "key15": "3FnUNn7SPQp67nbXTiimVr5YVQfXd6Pud2KAbc6tKs1yW9sWcomrN7KTqDZ1kFi5mPTet87XXN2jqHeBWnE4c8vP",
  "key16": "2Pzt9UruVK9FDCcMMHvj1Yi9EZ7SGRhTAHVgL3Xy3YdyN1SSV9Q8UQ3RZXet5w67pwJ9884RxV8RccnXEXdeS3PC",
  "key17": "RPG8XbPiJGpJBdz76pLAGFKcsH1aMgMToPU35EjaGG2YuSpRU2TxN6dnfaXTh1gtTGShaukCwhP6htWyrBFzUWJ",
  "key18": "3YcUtCgkVuu3bdHjafQQj6Ay6Kzv3krBtFSRDiTEsU4WR1mbQX5ridQwJtEz56u3AqHRVGFoxbkgZssJ1UyZrKAK",
  "key19": "3ERmW2LQtrjKE4bnqc72YfSZvjgpSm7uvKuf7nijtpichs7d1LiHtjZM1huEBjoWxUcAaGPP5sHwJNewPKi2WbTm",
  "key20": "2jWjVvLDQfe2Ybm8QwW6e9Ugv2KGgBknpTu59vurWXLFRhsKFkA6MEWb9wUEVDE4sShwjQ6qojCyizyRAcXrYvig",
  "key21": "5iKuPbsxNTC2WUHMFBvHd57DC2a3LRs38ReXf67bUFZMX9d9Lc2J5zcCr34W4M11YhbXK7MoxSXRa8RN2tJQVxsi",
  "key22": "4DAr3J5NvjiFfkqFXBhYLvqRFkZUyHjuRpHfXmJPhNKHdd95qDjBr5eJnRzUUUYDV83JfGfgSu25B3EFxadCF8BX",
  "key23": "vtbRteWKLpAacURk18CaJ1rZScUeMHGB8fiFQFYuem4kEm9MAyjbU2tn8S9TyUKF7CB1XGor9i8nyozkcnYHMgT",
  "key24": "5nUp8EMuxsz8gK8tmBGAt1zwX2pbKa4DLFFdQo22MGWo4QyJsKZhKqE6zN9KUWFAc2TcijENvgqiFktN461ssEm5"
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
