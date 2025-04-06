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
    "2iB4z3399LxSgmt2EzYySaBdzcLrknvnWAJydJzcxkYyd4LwJGymsPEce5iuPV1TBtmCRoX3rya8P3jDsSMVTnPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YSFAz1492Rjhb8dujQqgbtuTQ5AKzzJ9VNwNH91yoJu3Ev5dqLSkrRstXQYPEH2DCoTLm7yY4ReZskXeSSH3Ec",
  "key1": "25YyWuHS6nysva2EYxZ6kjkFUhxTD1ogeMkYfLSrcBn2nSSkTehhxjCeRW8pT1Uk63uBBeQQnzaSEEaoboHV917m",
  "key2": "4W44VkksVUv2QvnhYQogdqJsy5qPiWtxP7JUckKpHhoRzBmUYrgKfuetEoc2zYW5dXSyn7PqiB9qCRJopSVMV4MA",
  "key3": "iC2EPYwxtwP6Fk6Pgy8nUNrzwKVz69GfXvBagUUJonTmcU6YJxDwF4KVf53fN3Yew4yZ29WRXXvZwKxFF1k6r2n",
  "key4": "RBcMizc3HfoJXuUg2UUDBZnQ5bYDZtXEhugeo2soAiRvBsw3W2smVrikkamf68GS2NQGKHqN6gLHwtJ7Bbtrhhg",
  "key5": "37pYEaXpj2RZojSPXMKFqKiATfzywKCf87CxG1VZ2MNaZHvxNnVwNVwHksL5SC8PpWVkbyPu5zTxP5yFKUnCh3QR",
  "key6": "4h8wZiVMEnT5Qu4vCMRgrty2sT2frxY4rSn6rQsgK74iyroRTQ8A1XUMXNvdKWbasLgd2MWz6A6cFX3aWpN9t3sW",
  "key7": "DYnfqJHMzK4cay7TxNvxqLNcMnmKf3Yg98yeg8qzav9UyqjiW9NjVj53ho7YyTDZpBDXvemATVrewTwgdjDeGK7",
  "key8": "3kvwpfD7bXS6SsmWCWPMXgczB5fWGJDzLwLF57Fhk7EMw2mnmgucfxWeHc5kU3xm2ey1oq3DGz1YF92UgJvqfy6F",
  "key9": "SLUWLRzaoAxyR2rwUXZc2Ww5i8QASNaBKNS1Hya1boKvxzWBcD4zq5hTyV3vQxFH1gQmQhXNjorC96EZboGZ1Ln",
  "key10": "M7J9BBbq3T2WRjNbZmUDtpU8BjS1xqGYyu7pKD7Z9UBQ8p8tb74fCJx23DN97NtwXQv74i7JH14xKbDrCGPfq9B",
  "key11": "4LEriWhRdb3kS6CSdFdwLGeHAnoHEQiVKxM8F3srqNQ5h4E9QQpodSBW1wJGyAGN5J3j6NcGHkDFhnYcjPSsmH5o",
  "key12": "4jgzo8n2Sagvt8EJZ2tu8FQ4jmqg43nvEzvNZtYMxf5SKRZA6TqncD9irxgQFVTPfQQKfT5xMqEuSEz26bZyZEJC",
  "key13": "3cnwQhHsCqAJSs4jBLDm86UAZqszED6qgysKJp1XAUo2XgbeQBhowxog21fUL5NdHJqxCG6GA8kxCuEJ7sro5kvr",
  "key14": "iL5ebZtpdbSpVbFEioVTWSBP1M2RLUL1WAPP8p4jJjFTnWkgYkjVh1MtiwSHzEAFNdaLFCDsx8aPTTE21rgpx3e",
  "key15": "2bf5MBdUMVxPRVwVQe8A6UM2RN2NGrWMn7Ymb7zzB9SYT9TumzNJrhwXePudVZUpaD5jQxfMRwJYTg8mGJWbTGT1",
  "key16": "UuL5HgDXVP2AigXNzv34Bi3MTpgwSBXGvtMRc2DZgSpxXbmxXZXtW9qeEPnv9tPY1xPRwAGBvavP3HSUQ54R3xw",
  "key17": "2wwmpTwLW1CXkJCe5HVv6vRQtM5rZL9Q1ztwHZSDErokNYQwsyiokb8AxiMZWUqbHCLzjAyHGoDu9jfxuxKHQr68",
  "key18": "svCBgvR3QHeumSnfCxhWq1AuXJT9cV4Wv4VPXV9Vc1GU7pmyzZrzZdbYL6dSxM5qQywJid4jJD71trTCCR5FJuQ",
  "key19": "gSvEygL3f3XMx7hxva9EvtC9EUZeKyH68LyRuPEG5WhVNsD1L2LkzX2r2V7CJuwP7q92bECw875TGTxxzBoG7tK",
  "key20": "2pQpfaVbDNZTLGp8JfTD8zoBkW3nYy1r4Uugh6WTptW9i8YvjTBx5rynZyGCH8YKwP3s6ogwfw5bkoy7Ur8PhzbJ",
  "key21": "5eeDrRNrgV8REZHum1T8beMFonW8YJYsXcWr2ybtMmA45twshY24iCfhKLq8biJJehbEvjFLzK746xqaxYiUQp39",
  "key22": "5paia5WLVh8Mtr5FSEhnXqVBZPsV5RTLHjbQVW9y4Vcva2vDsuDbgyVnzSmyTeM1P8tYFSG8aVaTUe6HRa7qmDdN",
  "key23": "4qLsiSmeTnpDp5h3aUPga9vh4R5MwdyWrudUXBkraWRPVypAS7mHiVGLLNqwW8KKS1ftyeQamHC1dCLBag6zsPGr",
  "key24": "EqMbFECKwtAeWXwDPF6C66gXE9LVn1wvgo4wfLQCAF42HTfv4fhj4cBLxAw2kJpcuWeTPXKqzo17fbZkNRmbDqW",
  "key25": "i2EVw9bFcUMsLdbU6iNoAHmBZvZgNUws1yE4myBgJxC7tHm2URXcfKHKKGtocEbCg3HUzfHZ6YTY6PRDRmDegXF",
  "key26": "5XKt92sde6QwShz336YYTDPDRPdf5wX5khw2WhWVSW2dvLmHfeNVs7M8gpVDzNaCFhgbArkdF9pGcTmFCexoRoUC"
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
