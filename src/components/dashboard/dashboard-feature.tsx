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
    "315NStVaScAJatpCPrH3QxbaefkyCWgyfy9NoviFGrQ4QvtBPrz637WMy5PXzmgiAt9ERFEv3zsGcBzpj2f1Kw29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EwRSn82NDuosGwayZ5rafhbD7S5jgPYoVSEnRNyKNmuunvLAFSr4UJmFVsnq2J3FbsWxuptSMTaEqHGshYMMVU3",
  "key1": "BMfYRKBgpj1JGU8WuazezM9K2qh8FcYkDJghSCjKMnDdZQjiU2b58FkACC3MEDMJzge8Rs1DCsqsL1Ha9y7kYkF",
  "key2": "4rzJPjJALW5QBu4MycMbd9Fqj9nBxN6eyCqNJvyV2s7somkggyccToj6A1aTPFY5vKiS5KJFx7d4x9MJ5Xd6DzHc",
  "key3": "fB5a44d44WtTqXq2A7y4AnZY8eXSM7ixvZh9PyxyjM81DetT6qmoKbUykoSULzeTtwRmvEdEf6AUNAXXqzFjD1m",
  "key4": "qbkXfQjceUaourkz35uatJT28oVqyfJufzXCcyQiYDiQYA4d8AnXHGvPdwU74v6Tr7rgsFP3w8VQX3NQiUMka9m",
  "key5": "4BGW972QCsxVruyJgfq9LtZQyHmzK1iNqGFukZJyKzYNWx4ACZsnDfwXXj9Yvwff32XEjctYWqztGMnJkFdFDUM8",
  "key6": "4ecfMqAmHQJKGfc2MYFrovk2WeWnvwwfkdgqj4UAMvTPsRQVv94LozVuiwzgcKFUk6GURWsgyzaEUrcgaCxXFsF",
  "key7": "3FMyNsFoDxoaZ37n9CR4BHkMfkCuqHmq5zg8TMFM4TJVhVbCv1CkNrAdkLzB8ARxDsmZ4kUsTmQ7LFTCwco8vngW",
  "key8": "4AmyLc4Luaer5cKK4S2M8U2NmWtxTnU9zfZ2FgwtjVL3FjBGMkcpYLJVe2bSrcuwdGZn5vGFDEEhbXywLrVN4SsT",
  "key9": "MzRt7SAwpeKnELvALNHZhLRmcJ58X4bkP5RypDrhGfXp3KpXEkLW5rHbeX8J2zJTKjD4hiNHmn7uQELTTrtUh7y",
  "key10": "9V9jrhde6HtfwFmu2b9m8VW6UyVzDnoBG7S69FgozGDZ2inPSKrj87qM4hbb24hAgMFRqwBwayYozR9G4ErAyZK",
  "key11": "2LioZ3A3QXnfBoNcAZbK51LhTf3YMnJYZZCW3NyFuYiLUKqERNJJ8WW8ve6V79Lznb5ghvbywEqQXiApV4EPwr9S",
  "key12": "2q7wysmVhc23yCWM9Zu3X1m79f1u4YNBikC9j4bqTqJuBXugSFH6TL6wjhkq7NwakBKYYAVSNxTQHsMXCkFA9p8S",
  "key13": "61VX6BDxpB6Rnwe16eDNJEcZ8G58ymqT3Y2FwvgTfwD2kKjh8v7fusgfcaoiixzHrbVPSbGCf1maSqusYRSBYFnz",
  "key14": "5GkCvBvYaVgfqDBycwSAmf7KfjFo7pGxYRYiD6YGwoWEbcYSrAPa5FRQuqDNXpR9HTBp8fYFhU2Yx8y3ft9DjtGA",
  "key15": "4UubtzPLMKutCvnCiShjaUXXmW7CowkaJjLjrCbZqDLLHyZmB9J8HgSbaC77L4JZYEHcD16KyFwvRgct4Ub9DsTt",
  "key16": "4FGV1GU9ms1qL91J5APrcA3HdgvwtBvPqqjtPwFQECo9dqfRX9i4n8J9XShwoxveq4ejCuQa5n4wMG1zvXHkPYtm",
  "key17": "8JYq1Vd49bkTkyLoGx9tuQQmNvugqaabd4FfiCUk6MAUtZVYfJAGJ8Y3KZFhPaykr6g3RtB5vixTKvHEg1UW6kd",
  "key18": "xFCQF6VFoQSBygWhhndjpdehiaanMb3F3EHhCoLaB3N1B9uw9qPBDD2UvXcRiNZks1RHbntoDpxpgsDaNJRe6T6",
  "key19": "YDR396GHadUYheymL2v3xXUf1qGEM2EAGZMZHWnfEUYZKg6Lx7XAF5sDgyezjmaDjyWQqFPNZerAbnp9q2ZSwqQ",
  "key20": "JHycUPWczEr4KbiZ2ZhUwadhefz6piV1mKknYyspquw7ajNRhh8tNxm1fNJYqrYgm3DAEv413cE7JymJsq7qh3v",
  "key21": "4SMpS6Knpp7ifKtjpv64FK318HfMVRrcxTgHynr7UT2xLPREstUtRLajCjrBBndNnZK9Lmsvh5sWEGcBL1TExM6H",
  "key22": "4xb3isjFA7PdymYTsnNJRKkdFdn8LjHeVh5E9f98EKUgJLwXVeW6wargCMD4GaPViuCkHQ2fjDWw8Gd3MCsGpoig",
  "key23": "3W21cQKct6wkXkht2PUB1u3F2nzLHmTd9q5wuM9LvgyGFCb4sHethx6DW5WydJVfXvRAxhdf5gCGCtFhwZNd2jnG",
  "key24": "5CiwL2AV2Cc6aYi1bCPPduCSMWKGJZrwwc6qqUyE19kibFU26jXAd2ozBbxbjynZZFXuf6pLMYB8SPXUFG37d3Vr",
  "key25": "5sKLyYLRMEimVU1XcpHB9iLkZGdLJ6Mt5geVZgM6tzixq4Q4vS2f3AFMiYorgAsY8bQRu39bjwwq2uWxmPBxALuL",
  "key26": "3dUEx7ZFXVqAMLPN4NqJse5Tds66AqgUNdtx1nZt9yYsPdPQT1Xz24S2YrVxyMxXd8J5HV3ymMNvDef11Hbkiptw",
  "key27": "5mdrrHH1iKX5Me4CGmQPGWLNYGmUxA9PadQ7bSXXRQnuFBQCJtww9qxGUSPkVNBM2epXEBjxr4jhaGnkuiXH2Dbf",
  "key28": "4UWJ2BWCyAa2e8LB7AQEU8C2Fd6EJWCf8qnQDktVPB9e5C9LabBzKKJNVDpmrXsAfRtZBT5WAdA4RWjuEv4c4ncm",
  "key29": "54JhNfgZDEtjQfdAfm18WkZt29bMc9DQedG9pRHTpGSpE5A3MvXiQxUiHU1SFbqbyT3fZJwmKTQd9PAxH5MNXgdm",
  "key30": "4TPhBGLKaWheQ1N21LXnf2DbZmwzLa3tDpFC37grE4xKAHXEUsNrCptZQ95a8k5gvro9vzFHwNbkRcD7ek6h8X6f",
  "key31": "wqxNCT1ZMc1Sy2NBWsCDVTb8Fw9jTnvLnJMdUSmrwKpAMNDnAyBDMe9rGDW7K91pocCXEmugwRcAzEFV4ZDn4QU",
  "key32": "4gYzbGqwSq4K77cA26TdZiRWxENq2vr72b11zqiFoq2xNDzwKfhpu1bACjS5QSjkKxsYiTXbuLYt8Tgvwg78ZWvS"
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
