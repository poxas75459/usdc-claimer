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
    "3TXBXxTXisw9XZ7b8dGkV798y2LWrDMywdVoFycQVYLj4UnJnoyjsuMMqpsSug8BujM48d5DBfpthbbDwwoYnDbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FQRobvSXatC1VRpN18pZRctTwx9x6NZfiJRpwKidWJyRgRurhaSxKY77aMurbzDwxCCbKcoMdwBn6SeV68ghKWF",
  "key1": "2dP4rMzymTtNVna1E5vWp96ymZdD5vjd7hjDGeBmSP3Qjbekk6WtLQ4kz2yYfqBmseVv2TEBtxq7z9gws3XzhHXR",
  "key2": "33gSjMK3Y2gZB7whckMuPAQyEdp731rwjFcZqYNisj6KT8xWmqNT2nn4fXrP1wgMrnip9R8nZwLBM33Nc3Edimjb",
  "key3": "3LFtumMXJSG7wQhY6ZX16YLsAufvnYYGWc7Be4oXGox9uD1yPMhxqdTA9h5NHUCbNc2bQvDn5RkguKQmTpwvBwUR",
  "key4": "5kUpLD7RTUevoub4d1jRrkNR7WTeKsjhADMYBEimswjuqA6Kk3njfMSJ6mBE692maGiA7tWhNkfh6MrR21fmtSbY",
  "key5": "5VR81iToXxkS9FPtAmrniZGF7KKrrBgAWNpnAV7B8bNtK3FTt3ixr5vioqwyj2MeAxRf7y3RtUptwzyzQgbE1a5C",
  "key6": "2cn1Ka8PczUaQ89eQLVccaP8WfyMjt8jXYyLbbg1MYUESACGhF2YisdSF794YGyNzgx2dn8odB19LcNC9yjbV8Ua",
  "key7": "3RauFVLFrxuFv91HdXyXsi1zVQvZLfi45aSQcgf1cih5CDPDdqvofouVh8hEEbaMb1vwppr9pH6W9nA6tPUV6PnG",
  "key8": "2DakjymMquUDCq4Ku3SPLN9HEJuuhQ7bFRDVMHSkcEfYjjv9UEs9EEqmMX8LiediEGojAazG4fuXnjE1T3pjZFeK",
  "key9": "3e25YftojNkzyxxULd9Mmq1h2MV2FxVsg2gVto2311PF7pAdNCkJaFRG6BNSfxEBTUbCzT1xFD2UxqkT2yydyD3x",
  "key10": "4BsTKUcVEqBP9ovtSbCjJNPtwwsupd5Dtejv1WVppsvG35ojhW4YzcraBpvHdkuH4oVuRr41mNcNxsf8uKy6Wxug",
  "key11": "3ZGC5ixKqqDejr24ZWyZeBohPDQ38wBZvmWBoEexSDWHskMQemx3725HmoNRkfQktEQbkWGDPXvNTjbVh5qyBBPW",
  "key12": "4yVcDRxh7ie5APmKrpknDpV3fmUSZCFfJ2VPSyomT7hMDWWuuXx9TS5P1M6yErT4uXxV3JWgGo1r4PqML1s5MLbV",
  "key13": "3SdU3qekq841SaezeG5H5zhvApe6cFe38xa8L8cPd3oZkL5Tdohi7TEvFwvwLZw4tH6gGNM6jCWkZMMys7Tb15kA",
  "key14": "3mc5tvAvnBaS4mtDbLTUU7byr2GA9bctzSfDi8woYWs88HZwnrHAn4Q3gRFEzhWqN6wMdGk1269iQxeq7Qw1LUJ1",
  "key15": "56KsRLjBpwKuDSb977JTWXWFrRtU66ASXht8e2QQ2NcCPf4b1QVxrDs7B5E1XGb74XFXyAha1s1eJoLBoscmGN8U",
  "key16": "mBp94xRStrwPBYmamdwaXBRYfx9tFQDR7eb6wgecguK8SZEivVkyUpVUxF7eUvUpuiX6j81peApULCNoboBhmeR",
  "key17": "mZwmNFkJHXXxVYasxkUjgwdSFW7xK4LSthB6V7pxx5zYLRKUK69AZzcQzcaj3KaRjwSZdYWUPMJdYqk6fbJdEc3",
  "key18": "Fiov6ix6Y3U9PPH1dtNdgCudTLQBz1mBc3kV4WMdv1sJVwP3AHy4TZ7okySbsnXSCNRUuK8w9RMT2oR2A7pSC7a",
  "key19": "4zNYei6WdKBHuqiynGoshCDgr65ZAonW7oXszt5FWiL4nqiiQCq3RZKECN25vCuquDPQEoW98fLT1QUKLGzUNefg",
  "key20": "25xCDmXsY8g3bdFRZ6afkPD4yDakwv7V3RKdFL3qpP5vW2kZZ7hKr1F3utcMw8Y4aC1T1rFPQASgMnznuFtADrQ5",
  "key21": "3iz8AHKEGWSBHufTZuDMHDnMh9om6cSpqGgmE77F1Q9nXe39ysjSWWLdECnVNAYtqcTmhzQWTiYMJnup35EUuueN",
  "key22": "2uREgZZVomQipiPp2osUzfU1nZYLUBih7aSPhmKNwttFS3BMCdxbZXf5MpFpv9dYY9Lmn8uWym7ybUsMvUX39wbZ",
  "key23": "3nAnBA9dMrXBrtQrDcu2NbCkWWbGJcT6jdCfVSNfLz7W5DGCe6yjiYCzg1E2LhY7qTqqEVjgNnAAf4CqDKgprK5M",
  "key24": "3cegAJ9QwR7XGqiYf1Jb3cc1K8dGLW6mJSeyX2ndjYjfmpe8C97rx3LQg5uiMBEf7GsK6NDNfdoKzFS98Xxfgfok",
  "key25": "2TJtL2CYQUbLPCRCKSWfuuAYeZXtmzMFV33Z5HDfV6Gn6rWMGpgEoUVCucYKCLuqXoLYs76DXppbCpi9CuoFuikE",
  "key26": "2fyJzfNH131uCQdidtevbqTcAThB7C8QCBuDn4PbVfXhYyuZ8L1S7kBPHm3bVjUZBEMEGYT1icvPauyCZha2ecfP",
  "key27": "3w8AR6YGTKqENxQNCeFsjDaaxP1LiahnXisKbkRf5mJSkuQnF1weFVNsj5TMn2sXmEReX2A8kAJ7JsomUiXLJtti"
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
