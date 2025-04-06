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
    "C77Xa7EUeSBFGQAyDa1q3iZCGhoQ7pJxK3qARZc1V7XEETkJMUtSyFnfUYPkoKNJhfArfDV79WQKTkPMYny2sWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJcgahURQ7BaeMCKM9eT6gvnJHMnMm9imkpuvoTgrH6dTurXweC5mhZR1qZR7g2tdebmMrY8MsFQUUExzMVPcZx",
  "key1": "5btXJmTZGXBAr7CeNq6vnqqxetXxoTFAxcj9egnfMdemSikS6fLpiuAwasH4FfAzKqB8ras2dZeECSALCPMz3fU7",
  "key2": "62ZryFUJxDykAfqxdoVvBT9zzqhgbpdHtkEdGAabqr2xWKMQG52J9JK9CTX9aUE2x6sunqsiJV5eFdVXN4bwQKgE",
  "key3": "2FDaPneGym1MPunYgzEXx9hKfjip5jB2JJeqQXPFQusc4zRG2vpBkLDdGpqhj83rDBp8X6F5gLpsvevyVCcAQb39",
  "key4": "5eJAyYj8pc3ztjAp84G7REhRfb2pWxAVHHvrSobGr3UVfEEErQttkPdop5kXq8kT8BJ9E9CkVq62hSGxL497FuZh",
  "key5": "2WmcKjCPHEgG7VAp7sQWAgM7RaAcRFn4R5EK5ANLSo9bePo3JCr9xswPw9A3n8UgyC6U5M1i67zLf3D4wEfjK27p",
  "key6": "2ZnVj8Moadmz9GzDSNLt7youVEH5VbpBRvFN5cVVB1n7DYNitHfMmza2YTjWrHNLNX3VwGPzDgdoTYfz7uXj26QT",
  "key7": "47FB8aLgYH6BqVHj46Jq2HSYWCYYNoQTJPnAvH3gaGVQFjDHtSEkdbLKxvFhF4Ro27Zqb4K8ccVEriv1vgEFwXw6",
  "key8": "4PQx6a15s3PGtUAZm9bVf8nnyaqovCyWHPJwLs3dXpmBmnq6XeXaW1Atf3DcxZH19tqWvkcep8J5ZmMMBfM7ML4",
  "key9": "37nxPK3SjURegZuxWZxPPgKwiLkSrPLUR2RFVZFq9imvNZEAh8oE4NPTqpZt2jnCwrHBpCeYCLQoUiK7Mg56xZXn",
  "key10": "5KGGQD3LzPMKRNjbErSPGmiULuZ725EqkukhAKJUFZkCfe6jM1MCgQKaNEcB71Qkf4gE9xJLxiocaVg9nc2rpccG",
  "key11": "57pw7wUQGvxawK5NjSj8p49LfGqtXFxKSNniNepvebBo7dEQwAdi1nwqhPhnKNyHr36sHmR2YZwMpe4aixaVc4HW",
  "key12": "2XxZV7vEAanLWQwCoL31Aas8raCip4P68gEbuhUUEKMrMzuVJsYHnRcm9FEkELzD6YkLmadxuiwvrVTfsZJp6nk2",
  "key13": "5YVhyAYMiGRphmrLuLiruHvxjGiVufyKVGb1RBr9hxBxZxVhminA3Y3HMYzc4CKHgs6Gy3gkbMvv5eX66j3rDdxA",
  "key14": "AUm8XTfrogriexCrNuaj4YSmWkWLmmipbHq9AmW6YLLjJDL8FgiJSDrmvMMU7ks5g7BiZFbEJnLLACERgskPsPC",
  "key15": "25reosdHthWcYphZpFUmU6Nt4F89a6En8kbH6Hig4gW8N6a3JtBUiHFpS3LhKHVKSpwo9NaF2yvpSSCi8hhyD2iC",
  "key16": "4gVwmmA1T3RsxG2HGzr4p6TGoaZpaPXEFdaCsZq11TnZaX99n4C2zgih8rCsMCesKeyDQRyQuRHtPTcHmsuhNujY",
  "key17": "4yuwrtvisPJrfkK1aUeJY5nfWSrDKHaZ3pxCuXRqs5w5743nyg6b34mL5Fc3J4NX1FzhDN3Cc8yrf47v3AfwUMYu",
  "key18": "3upMWjXF3XuJzDUWVoXMrW1SKHweJDJHZq14M9pZ66RLx7n7sjhPx3JwnaAKtnXhiLY2AmFg9njZ7vZibfUY6UYM",
  "key19": "4mtqXoTFMzg75EyKRtmVrSszFkXYyQ21S8PFSeSx2yjeXhBeyAuoHGRjQTpVtjBRoeNK3ADjcfgAbQhQpfKpfZh4",
  "key20": "67ayEsqPWyobDSd7xBPcVZNWyV3HHoVKuNbDzwM4UHMETsQoc7MmRnAsegGXwdFcdaSofAEjDQBtdM1JuQHFWWLv",
  "key21": "4MUDSAU1DsGxPKr4iqkQKthWFakEVUUQyq4ujY16EXb4Fs6jLCnxKsUuQhr29yXxygavViocfg3GxxaQtyhHknDQ",
  "key22": "66reEAyP3G4SVHQTeH2xipS26gTxw1q7dcWMoBM9Xjtw8DNzGAJysEPrjNZ3eoTJPUYikDDwnnYmAeGLxrnvM7YD",
  "key23": "dzprNz2WGVutEoP67ArxyhRwuEVzBdDChS18J5qdwBQ9Sjz5iGB7aQHUEejzudqv4oVBZ1y8cXFMrHCjAGubR4y",
  "key24": "phnpcjDUjyx566N121JRYBuRTWkd8qyjkjFpBQwGUHMeJ1VQzwxTkExY4EJqaxFEj3BFGZuzZsTr8w1kB6vaVPc"
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
