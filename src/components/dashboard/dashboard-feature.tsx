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
    "3PMetcVMLdCvbZrozozihjFYmwmFK1ohdqhcSRpsgBeVbTcPi57ygw5KPGNKtXtUp6dPn6hXritF6VmV7YoxjUyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aiHza8t1d3Y7JX6eNoi2QDbPMyX9UmMsEwS4kAA9RXVwxdJCsmTsNm5UzB1qaEQ8ppo7THi5ptSWP8jEKBd9anD",
  "key1": "2qiugM3EVnBz77d81TddHWkAHkU4WxtFE6zdzUxuWia2Vsk8psW3Kh42AXqeT811YwkFfHCAgPGHUMfJMb4PAqXT",
  "key2": "FRkxAABRuCdufJHKSfEBePFcaa8VYGpng372QtR1NCo1hALHUH59VAEYtbi2BfXmqw22obqdfd5qMQHWaC6JFdE",
  "key3": "48bHckf3whuDausuciQf5b5oBFpCATke4M7FLuNrPFz1j99gxvPsY9uz6ha2apR9V7g7K6Qvja5XkFm6Y5uybaBW",
  "key4": "4BFR69u9xG2Ab8QufnBWPeyBi6boYjNLo5EfADApxbAxCYByTcoShABf89WVB13uaojqqRceRxcg5nG53hxoUkgb",
  "key5": "5U4p2pLqyqU99iVmZN5g8tZ3vCpJ6HNswtyE1c1pJQRguUhmbnmBAJyCFMMqKp67ra5SNReAfXrRAqqQcGdMdUkj",
  "key6": "3H9htE8YtYEj8giTyQmvDSR1yaLbVo5hRToTCa7r1No26oKExbpmKkZYVzse6mgb48t9bUYME16daDaLDnneSo8a",
  "key7": "46bLv2APMePVVa5exPtp4nyFgtR8UN6wnr48n38tS525TJqL8pkeijei7cXUfn3Bsg5QDVE3g77AigqFTPKrp2mo",
  "key8": "2Ff7mqcexv1bHYoi7NbucrB59bAk2mEc3V63b3qQJC6Hmc8dHJ6HwhpQTRjMtiC451eBe4mGGX1oWjuHPb6J9r9w",
  "key9": "jeR7GTkAhckztRDqtQs7RhbtCMVsH6yybUFKTQoFyUB937BDfEa6qLKGGVAY6JuyRNjpgKdBrnBwvgMJmFuEQu1",
  "key10": "5oMigbBvPxjbNa55oTDCS25qtfTjbgkobcaKj6xugs8c8VPsG2CWvWyvXsWb4AK8bv9HiDtAGRwa2TNpPtyTxoJf",
  "key11": "4otSLgmyAW9ZMzqS9i7ZtnpC22YGCyGSVk7atoLKp1kogBr2bdaHgDrT3nBTs9D3h5rg4ChXGPXud8qBhhgkguGZ",
  "key12": "2LTe5FseX4nffVcvFCCPXhRb3MbjvMochRPA8GwuMZU1ec8K4nNeho1auJ88PpFxDyhZYQ4HJPkNucboFSBER8G4",
  "key13": "64mpsJXPrpwtn4BuE1yZgfw91KGDn8RXDaoiJ4kUxjHieuh9QNbiyVNC5sN2aJipbuQUWArkSZnqmNHcskPyBn7R",
  "key14": "3yohnJXbQZxd1mjsZJa7NUEGSSUvv8xMX3DzDmFjVC5AmeoWEsa8m3sGcJRSEP28SaKkQqmu8pw8kod9BL53dwMx",
  "key15": "4giYf4VjYxnpG1z5i4eiedyrQxdiubmsN4iUD6bZMfyWaU85ZHDhDWvNkTdxF5q3JVJk6MMaVx3aWkRgoGTHNwLc",
  "key16": "3Kds2bMQjv6yUMCjMtw3cNa9WiXQPSbXnrjbKwW3G1kcUTLtmu1CdwUM8uRwhT7YahEp3Yyf7FAGqKhwNSBWDcFz",
  "key17": "4JHAxb9YMZCNpEw9z32PHMhZT8yQ4VJdYq8D9qfNbQVejvirKZfuNWmgD9T6RbDti9QBrpoTLth7mpTmXGfCYQgk",
  "key18": "5kV7bv2Wu9vnBFEssdatJ7Jww89JVhv7DeJK9GTKVKzAx9jbMxHM6GcS5mULYpSrkT4jjRSwUAVPqfxGwSkfurwL",
  "key19": "63Ua2vZ5y1chHi6HLkzuoXJmJ1YUhmCTSBtsgTPWsJLAkrdAXpbHd84w6fAQvoxA9X2cccf8qND4boz8BvHM73Sh",
  "key20": "2KEpsk9oDJRy4aFZLSX4HoDESN1JzbdxfcRzdaYSySRXF4Fz1wzkEP6zNTftA8B2qwuaYrYsWCwQ3bZNDajNqsFb",
  "key21": "57kGWwr2kCgRT6THt4Q979eA2dUAEPzKLRscvzfgayDkQEYz61habJUuirMsrwjsP9cD3RoNYXwWgGxt91KRcGv9",
  "key22": "3GFfMWfzRmsx98UhXc3VJ4fgkxgwk2Gs2trfgpEFbBFekkugZKe6u1VMYcRpDGmBPUWXUryAF5mRVPCf4X1jniGy",
  "key23": "5q1ZXoBafNocUkjVEzVJXTbHDjXFZoEczYUZT4aD7azhtEdk6AccMvzhbJ5st5UJKEXz7DUxLY1zdxiTWkW7cuW6",
  "key24": "4qP13eoDjooa8XE6o15D8Q8F5Ru6BRhiDjDiKcBs659mGsdwzb1YT4gMTZimS15YRCMPR9pNLnooMwfiP9jNGRbP",
  "key25": "4vbaYC8wHxTbpZvz8juSYziYbXKmwYFRERPRnTRRX1WgpMwomgwhJu3HqcUsMz2sCmwaBkzQVkvcG8ZdMNeo5Ves",
  "key26": "2FizVYbKBrPu6XLbZwM964jseHFdtyuC3t2CRam41UW4xMqABtQG7Ut6TeBeUeq3g5Hwa1RtecFG5J1aE22LuLnA",
  "key27": "4q3x3Xq1J6h6o6E9ssPXWANvur3RZgce5h92oUa1SHKq8eyLoHRybpekDXBNQ49qoFYDYmui5eecDxxriu18p2PZ"
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
