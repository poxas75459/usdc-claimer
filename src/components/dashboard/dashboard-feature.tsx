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
    "2firasD2K3QmosFS2Fh3JbytHLhxeuD979dG5Qck41tsovZ3ajgXeVYparVdqR3KHe91Q3JN96sy8xxhWJW5TxsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ry4DqK42gFCyrzwhUd8eLexsP8EpUv56ccHkh8Y7VPHXvANe9ymy9Ua7f1oG5JB76BhpUpAMqithxnh5R4vvPzA",
  "key1": "2SF4wo1HJyyCvCCXAeuy3HuwitcTDmpzj3e23P6M8goXGw81godFqwQL7Vb1zzsoumiKY2VgsVtzHb8V3AE9fn5F",
  "key2": "4jGJvKPKWPqHFy43rHa72WQzQ6K5wVoVguCx3ABfzf3PpggN324v8t1CcrTvsKMY22mTJ3MRTACP5fWQ3H9m1vTs",
  "key3": "3wSabQZuzPr7SdQHELejEBZqX9XiEqKi6bbMZJ5mBMGDx3vmeApHTPWaUMC7KZVS4BBQCmeQVMp8EdbJNaASfHtd",
  "key4": "DQqDvq5ePzrEfNwvWRWBNq1jfmwrrqkNzcuMNNCsm2Qm5mdiQGYKEuZJcDs1iYHwVPM3LovNDc3PxsodgcPmCuh",
  "key5": "3XvxypvMFwJWHqmZA6fNHcBHrKyWeX2C3hCNeSo3pKkS5pgajL3b6UQVejtv2atA4aDQuk9MWJaRT4UWSTkWxXVn",
  "key6": "5JpHQ8QJ4bNR253LWSdtpmP5bnyhNW3sXVrhA3C7PQPNTErFTQNN4FoJHSvGqUy8Q1gAeMMtpuCxbScKtThFtxx4",
  "key7": "GNea4TA6phHuzTut5e6KSArCUzy2uLY2HKt8fXFN7Q3HJzYcu1CX8mbk3SdXWL5qFFnbv96ZMXuDLBKXaLF4A3m",
  "key8": "5qEaGeuVCMeu3BFtybuuL3FPYHUu8NUidQ7fwFptMkbm2P4XtWuCGVVdgWUYRE4xmCkB77TQJ5nAndd1K4NKCR8W",
  "key9": "FMWwMMiJAviH93Y8HEjkBF4H6TsxWahvnKzYExU9TRqgAKonai1ybD7jJHN2A3LfTKEm4HvngkyArpSXjqZEBgc",
  "key10": "W2soChRVx2yDaGFZuixxQpuZvPhZCqAMDCd7soEYabdjXdKG6sQGovwtA5KykQwt1GPxk6VtqqjgyvkJ346ehwo",
  "key11": "3xjRzXTeENxTH4wNQFHAPokEwsqNUSKXETiNgNVykns1gYWNPMKhd3xhFirupYrhaS2L7Nf3oqWzt59MNKKWCprp",
  "key12": "22EGBimpmKvhR8Aoo4wUdMrvYhvj1SvJnAdF6bSxHYymoGarYjPrMgZLCra9pcDq6je5UKgBWpPknX1E8puLLfg7",
  "key13": "2pCojA24U2NA1JiGGZkJUJyh8X5ad6Dpw7tnCkkaM7rzMJ5UhV7eYXTvoq2YCgPM2ErCoQn4r3w1NcyDTJ7E4sDm",
  "key14": "4EMV3UNtGjqXGNMErybKPbmZGFQDC8rWr5rxBnWGwdxjwR6wgdAMpKVJZjiqwzgg6Xtj4571bN3PGBnRydnmXi9N",
  "key15": "2qBsbGSg9T4VUcgjex8kBkVju8tk9dgVuVW6beUXooKUXbY68kVbLoGwbmvD3DfwqhhJV3vN1pbZufPwBPBCcLrm",
  "key16": "TFB181R6BNUg8VfSyrJKY6U521d1QuPQEvPbFtLVzgdfmiqKNtAhfgVRLzxXSMmmJZk1dLkvaFkrMLj6wVK51WN",
  "key17": "4WixnLXXqdcnUUGTKF2CfGUqGrv9wCtU5cmzEmC2ebzHeGU7zephVjeY1JTbPzwLMMgbn1wfaYQYJhjV4eQkdp56",
  "key18": "3LdPk4gAQDTCBoaYeTNqWYQD5ii4nyty4Jo1phjkWhBLwmcBmQKwNuPjuZgD2gUhRqhzzXBtuv69RwgFZa6tVLWr",
  "key19": "3yBR4k3HVC42aMsjyh6Cc28E3zArWFbwSX7aMAe8P5fPkESthm4eCaJwK6z7kTTCrSwXKMPJ9TKFCMnMoRU2A9T9",
  "key20": "2xFV3CcNDyj5xhKXjgYVYJUgqBbeTZvnmXrTsGQBz35vv8qUhkvCQsYKoM5hKrLiKFCz57h2KmKokmAcm6Dsiq3k",
  "key21": "5ppFkoWwmYzvJ3DRX1DRwuaRieSzq5Kt1KB6RkYcuR8EAXuF4Aht63v2jh4nSQ9VSeoPgA2QGRATiZ5MzsLBktFK",
  "key22": "4bbj4b4YbeS76dE8aDQhozBSXgku16HuNix2z7UfYN4DfEX2Vxja9VHb9mcQsDcD9vnjszFoUaftsf2XnKz8iFiV",
  "key23": "5YwxfGhSVZ4YDePcSpn1bM5aPp4syjSPMSN4dPJagyp7mGNvy8aHAT1nAeKsJqpxqea5m7fsxqLsWLpMimeMTVPL",
  "key24": "3uFFe6yBcJFcSp4eHxYtXXeF7QvDBcHv2teRaPjJcgZoGXjuQUDH2hpPsyarGXS8vWEun8N11An9HRsG4kZUV1mH",
  "key25": "3khwfur3gjgt4eEGfyFQsqnyCKyRFEHn8vMRewKz3ymLvbnTzApEvUmckTw6HNnq8aA94tKZ5MkaLyarFZDAFK55",
  "key26": "2Jt9qSocBfowPA1gCHf16Ks7SHBWbLypiPAjQXLKo4JAG9kHzJ4FS7G1tcQQeu9FxoegTt1MqUshoSdN7qspNM5D",
  "key27": "dSTH1niescLer6m9xzXZPwdfTA5sqgiYjf3ZR2GT8RNf16FeSwi2UQPkKGvvrKQy15FEmKZxApRJsgguYeGeZQQ"
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
