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
    "zGizrfmbMZF4r1NU2DRrECS3GHsE2mgMWeUkBJSx9F6uYnXKX9XBdukmcnnafNE1F1iyaBb9MvdTXNtcU4J56HV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrFonotF3YxnKq7uzFh3foa7CAXKoSK2WKH7LLKb1XB77KsU5hYhyUADRkgZCZg7CjgdpohD7AwEgKUPfZtfe2x",
  "key1": "4dqBraCV69XizyJdBDQd9rDBGMmVSkkVQ4ooH4SGJyJp2z6FbzbsZVi9VKyrQkgW7sUVL5WphMfPmsqj1vJ7jAKN",
  "key2": "3XqAk7MqEBfV56DGRNLWKfrrew41viNw9stF3WR1dJBs3BKj5cTrVfZuYGfQy9mYYWNBQkNVWCaP5gKwszJMLB3V",
  "key3": "519gAH6xg2s7DUMrdpZmUpf1bwutV2jfFhSZqdANta1ua11Y4Vt3oveLMQVTjTsuDixpDF6AXNmfA6gtXucfKcmR",
  "key4": "5o67Gx3KCUcm6c5vrktVqhUSMtkLPZBacfZVMYKMvbtR2uMQZNY4voFP1Qbpkq52cdGrockHCkoKiiAbTtvubWC8",
  "key5": "fuFwM7EMr5A7CCrDV5RrnTicGsxNsmkxMBvUcKBFySbeJoGNUkv6zuM8uE8RTR97g1JC4Mg4kCPxui8h6hbBY2c",
  "key6": "aRRkMw7S4AkPsZ5uiUgDQwecLXd3ieLpL8TqfvqMsafCW9k4z2ud6CboUiga9dWijV1vF2afhEa5N1N9eThzs9g",
  "key7": "3Kng2B8ywrvztdJDtperv788Zg94E1bGbKpCVcFdTmxqFATHbcfnXpw7Ez199B1KmYF7ue8tmN8UsR9XGrXRiCXT",
  "key8": "5ojhF3M6ovTS3iq6z6txVR3KWYg4miLQXSWsGvFsvj7Nki2TYsiWQ5Vb4M2z6B9J97dXdK6eGqvNwQvqokNZKvV5",
  "key9": "2oafPCivfQX9XtEagH5W1i9wHxpJXUEBfMYPEGR9wRu3FmgAzizU6evqu3PhLGKAWjjtUoCFGXCDhx9csTMhdEY1",
  "key10": "27hmemw44pjEt6rn5JKKh2etpk4ZoG7yKcXJLJq3G4aM3NDKtJogeKKaNdS8ds1MSzz3vrLAHovp4PgvjPSRWxi4",
  "key11": "SJX2krDUQy1GrYPGJ7zhYMVRrHqk9SSQq1hUvmLaANCmtQyeSVqYShuvaXB51BMc5kZtZAFKC9VLaSG34Gsw6wy",
  "key12": "3gBkvPJPcuS1H68KZ6y5LHM1CwttVzteVogyW1jhjE1gLGVmF3CALMAF4oygRhZ5F3jbHwpvMh3Aw71rcRfAhkB6",
  "key13": "3pbqbbRWvSshvj4RsFkH1H7e5ZVGdzDXfiizf4mcLu27HsiHj4siiz8ZPWgfnkL5dQbFMTySbyW5yCFUNwTBwWDw",
  "key14": "38wM7RaTwmsbgMXQjAKnJxfHFMCSWktscd4s97wsxKPsg4rL3X4fiKWNYRavcEcqFtVEuW8u7SxJSC7JhJH6C8Pe",
  "key15": "BqzxghPjgaTk4MNdj4XchfpyaeUtAwR2XWPeFT3SVMt1fzzg5teYrFGxQQ4aSkSsQkJXRJCtFMQyr4r2Hoc9yoF",
  "key16": "9WHuFh32oN4FUF7ejrkC4tiQVa1L2NzBkLTFNN7eJtWhk3Erea1R3uDRASm6m79LZRSvSGqkd96iNaPLe3Mza1h",
  "key17": "2reBBhMx8Eh41SF4B5Rn5aTWSeR4amYCQH1x7rCSSjpsSU9YNFV4KcmbKZAhVQABpHxJhFds8DgccYoenaR4kZhP",
  "key18": "28s9hjysy3opGqnobxmDWhTuyubXEybWCh418Lu1CFTDDaKE5ng7xK7RVao3PzA2LdCd1mP35zg2oUyUeehyEcZ2",
  "key19": "5RAhoDYbyNkCmYS8ri7B9F19gNeHbxBCjvYf5kNkrp83qqygyPJ47JGnr5T1pfVq6BkUDLsgjex73ztGAp5v22z",
  "key20": "3eCmaFj88S1vcWW6mEZF638KMQWF15YiFspgxaT1zQ3bETeyCXUSpx1u1pC3ZgfJ9u1fE5BFyAv7rdrk4ek3YDrX",
  "key21": "2rYr3oCyN6qmrr7xptokPFMLN8b1mBjSdmhMs92h1vADttyoaAHSyqBRZWGeHWx9JJw3DP4ZzFYUuc6oTp5QhR3a",
  "key22": "DckhVVC7EeSq8bSEYtEhyoiKUehna9Jz2dvhwKE3754pZTCxiXiNTDWhobduU9VSKmW3hmmvMb9kG2Vj8nBjjUS",
  "key23": "123B4eVdMQowcsCyEoJMKcdMTfLqe6KyNRAFGvXnxLTAJJh9WBWPMZkKqJkKh7bKuXuVSdTkS9CPSo967WeGCmpo",
  "key24": "3cL6w4A8peAjwkQkH3YK6czzzRkQF7epFF5RkuA8ADvAqKua5dup2S7maeCP5QYmaDPqXthuCBufq2y6VnGAwEiK",
  "key25": "4b6Y6dTxQXPYT9R3Ft9qvUBHU4YTnYBSo4Z87yHjeWjvYBZTvBCZdtWVNWMVQgb1bEruZ9uvbFAzU9asTmi48DAV",
  "key26": "5DXFUCszkw7eWiK5kqcindpr19ze3YFfy28rQaiyTdSKuPdpwqR628eHchqq395aX5GDRREHgFJgWuhpaXYHw7DN",
  "key27": "5Us82wmRdvCbwtJfPxC1Hb73MqAJ95KbKc5277FSV1EL55ui18QJQL2B5GTN6aRk1FCMcV3kYGB5vBe4K6nczEyP"
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
