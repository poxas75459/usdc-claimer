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
    "5TrJQdpjEQLfymP9DH2Nc7bxzz9dkE31VrcAZaoqVgrkR4buYuMp7rQwQKPfeUJaDqNcTe43FuEnNcqXPSeMBrER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46mnfHgVA2xrbVRi1QkmKbFYY2muVj2MxNzvSuAkUVToBhrLrdvVkSXXMqRzLsb2TSVeCN4aQUhViVXDzrwsQD4d",
  "key1": "2r81Jr4tVc2K96ea1QxGrucXUyBXfEg1fvGBHB2hEmy18zgYmWfRQuNzHbtirBsb5CHkUXKBtgF4yMEtdQ5THQyK",
  "key2": "3zzyvEf9HkqfuWo7ZqzrLtcucQuEKMB4rsQ6yquQ3mMYQVq5HMqCk8uTMYBymG5UNe7YymEp54apbXDCjPE1Ws4p",
  "key3": "2asVFM4EqVE26fJvKQo48SSADfNcLUwChBk6ZJQwvGMbKzUgAmAJACXYap3pia19oF63d2pSmKvaRyBBzotj1CRk",
  "key4": "iqTJG3ZVjWpNvy7mXRRfZAWCsZEJN3KGangCp9KTyaDMSbySciP7V3VBSckzg4xVegn5Ze1L61SHwSqdr3hrZ3E",
  "key5": "M9gVM2a7fMgHWkE5ug7y2qtxJ35qNfChaCVSMmevmR9dbS62wgo25VJxiNKEmXa9QrxWfUmHKDcZ38azsaz65LM",
  "key6": "5JDPAtneoiDePx7qkA7P28K55KEQdJTpwLytZeTkH1TrPDYV1fj5tm27oxeMQfoviJ6MMEWthwiy2MY3yUqpxzEL",
  "key7": "5DrCRRJat1aVG56teQaYz5JR1s6b51zoWz8y3fLFkNZCNrCLTHXSs3AFtFuQLbiipLSGY2H5gF7Ur49PCCR2wMr6",
  "key8": "2wMuFkpnxNaraU9JDhgrN56oz6tJUEc6DJBWhqwXuVBDntRUFK25or7V6V1XL4M2v5QCTYD7GRrHBWQXG1YYNzLh",
  "key9": "2j3x6xuzt8QfqtKiuzg6SmydQoyVsWFnunNQXuWqv5EszxpcobVrhN7Cg1LprAnrYFzmVLgKprk8agcA7vPGCkNu",
  "key10": "5quzLVNZjfoLsHAu5Hfm5wCuHHgqFZnm8Q3Y2zaQPZyggpYEsx1sFr2wNnzvzHcueEXArQDEMEiz3qb3GR5HCZfB",
  "key11": "2wTwonhNmSpXDUNwKmy54ayTRjuZSHHpyXr91BDHMUsA9AbxVLmW3UJptvv4B3g93itRwmJJ8zC3hGVnR3ChkGnd",
  "key12": "5mfR3inuJN49FtjadLsHhRtRuw22fuD6vwVcfoF2zx4n4uykhq6wtBPvHn6cUG9k4xXCHur6P5BHGBiPR5McZ1Rb",
  "key13": "5auWL9YzqAYVi2cpMRrPANkac6RE7ixPFZuejnsfgSbtNKmAewrJNRjCo2SDgVJk3WTYWFXUPqTxQJ5NCTgzbRPs",
  "key14": "5iG7eZahgRQRbFBdTHU9645JYK4a4dKJqcDjvF4e7EAxBF26ZUtVCHd1S85uCB7CtBkJo97F4t42Njpa3LPzAFBi",
  "key15": "5STHXhZXFzKM5djxL82g4vH2XRMD9U3f9BauRvMCMCyq4EZBy6xfxRMc1Pd74s7HGB1LTC3WujAkziEqTJYXkiUN",
  "key16": "hXGCdtZjj79YqXentnzhqntyLttBXzcSwHZ5LWfGuL1kiv4F7wLEY6t5qQHR5K55MsHoQs3yqedY8mofh3dSDu4",
  "key17": "5hd8pCUPMEpuuXR75s4Wha59Lkjf1QBnxL1MJsAT3ULGLNBppudEtgo1NinHQ2JaUf9YFu8YzeeDoQzMr1QUM8UA",
  "key18": "3L5KbkxGUU9HAXJzv6VmQC4ZkdDDFtD8iK8uouXFpAmv9KSd6yj3gxygC1AnWUd8JaMKjJbhJq1uiDQAtFtkTCKs",
  "key19": "2pYCBhccjmPXG26rHNJWcTJw8FshBdpwb7tavjZQGbLpMAa7BJaQHxcUZE4mTiqmRfiLvGtTW9PTwURdsqqGodDg",
  "key20": "n5jhGjC4Q9q59ThiQScYKzJkScRWSduBaDM9PGwt7FjzFkbPRrk4Cnor5pz5od1SM1BnLvKqcUrUAaom4XVhGyL",
  "key21": "6QMS8G6Rimw1TcFxF2Dt3a1nfGBht5h46Vir5LH5mwUn1T4KrxXBJXLnHLsuDgxUDg3fuC8DFYSbwy1j5sbU3nB",
  "key22": "5pgJNdW8YWF6SDnfyYVBSpLDYJaXB6UhhwsYuJdfqYnv4NQhW5d13iRVFPDT1FXJ99aPSPmLtd1Wf4AbhhGH9aEB",
  "key23": "5zBCUXuVKwwzh5fE5FmUTsKNeboTp6v5338s895r8cDy2kdxDHYvi1FMFdQgBnkeWKgYh1tSApgkmYULEGpevt2R",
  "key24": "oqTiGPmyjZas47goQF41hnvP7uFSkhPeYaC2M9aw8ncGPPAtvtuEmuu57yVpz9sVNokWjfEGmMfuCT4Nq99jcJc",
  "key25": "5LufVNGXt1jw1aeZ7UPzCiG1qUHoYZX11j2rz2okZqV1Y9geCCesdNfXAxW53DGmr8SisJpxHpENBtYRhuNr32tB"
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
