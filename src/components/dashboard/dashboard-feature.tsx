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
    "4XouqJTcerSh6Yjwqu7DQrW2GYhaDPhPJNckNFsYgMcr6vJhUkVJ1Fwu4JCfArEcSbUkXDJKyKZNNnR5UGrvUGnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ln1uvvWJVJE1siYL9Uuj6HMvkA9n72yohfFMBrj3rd53r4LczwYBCPhaV86Qb92z7YqgHyQsNqqNPc5Q7TY4nRp",
  "key1": "3xBBfUWcvpNpDeA6q9Qx7BBcZn7nby3KKvuN28TcdjAZZ1mzvsQQaq7DnqVRK8buwJ6s3FrmTg85YSnjxku48TaR",
  "key2": "4DQvqcisWGF8jdnZnkdks4oKTxwtbU4en7euVGXeLxFMeVnWbW3hmxD7kaTDPHnry4rF2yznr5ksSzk4PSrxTPqE",
  "key3": "3gjeq8A5qvx4fPyB9omHqFgnaWcim35bodxDS3yfftCXuVwgV6mWMAHJ9osEDgoVCVYL1uF7Kc869tjuovdRoXZC",
  "key4": "537DtL5b7QPYCewBbyBytYYgDUY2pqpg2aexLFHRxXPBc33wwRTZ7LRUxqjcJgBpwWpzGbbRCQdHepNVyP5uGCpJ",
  "key5": "2cBWk1grt5xTXqnhgFt2QqDtow1f58d3JwKAUR3CZPWppRZirJdPEjqtr1YZ7CcsHxWwQd7ZqHt8UaqGxsVePpqM",
  "key6": "5UKntFWdeA6j1SywMSu4uFgcT5hRTsjtLW9d9QU99mvmHtPKw2jSUdooZ8n8hgY6GcWnU2iQ4SYd6VRNToyX5auQ",
  "key7": "66SKaaYKccjwACwDe8N48gGaCpYBLkz3dX7EteNCeTB4tG2r8WGP6CXkBH4fYhi6khPbhey7J2wcxDzpEVrKFvTn",
  "key8": "4yB4qxy7Km1B9N98EjQVVtpFJ1ZqsEkckPx6bqLS9FDQf9uBmrGHkamrT6VnWzygmj8ZAYDokxEgrMv7NbV6LM2H",
  "key9": "48MWW8rq1Lv7W2AWQem9f6ooh95BZbkJvH35GrgWj7BzwoeS8VbaYf3DJt6G7etVCPzuEw2yh9Xe6BUksqrNBNGj",
  "key10": "4H9LLVkBQ8XhwwBn3KRi3ASeqxxqfpBUGGPAaP85gvzbHQUJV6eF8QY5zt7HY4SXR86VsQUwinboiaFC7Ug4RH9P",
  "key11": "2EEJNEYWLZMP63sYzDJvKU5hhgLDUFtHQ1yaaqnDgeQs5rkgxjuyp4QoS9jYPjcySZJmdvB7JLrf5jtcYU4PZkjy",
  "key12": "MtR1KNvdt1do5khMGrB4xpuikTfhKUMf7XRir4YEQ8ouFgG6ZYqZgEPQuHy298pnUgCJME7zEykvAAorurbH3mY",
  "key13": "2S5wZTVoWfcCwCLEqzq7z9JEB9CPDgdVn8S8ixsRMVDovuXukN7C36J77bbW3sfhjTbZHZPJnpUZM9mBJRoRrrzr",
  "key14": "2QakdHok5ArwkhScfFEx1uoKR1wE8NrSmwK6VwwV9HMK2BsCn8jybM1uMFDUQdsYFsnwU7ZTUk4z3omS1n6qkfZN",
  "key15": "3pSp1NQZyFpDFwYL7BKuMTDzFkhNyvsydspJqJA2YGZGKY2K4pYGj9pdaiK8DKyC6CDmJH2UTxJaATSfWZ2oAXm5",
  "key16": "229Hgd78ujBFEjV8RRryp3VxLgaiUupzStYpN39H9yaJhWZjaULK94AbnPWxP79yN1EQQZ9ighSHoZLvJfKrdLbe",
  "key17": "2TRTYeVUq36FFLnKFsix5w35vABc4R8KE6Sc2DDJnTVVNb9byt16xYJGEsd1152qsx1Z23y87qdt9NYrnnbMb4Zb",
  "key18": "BDLE3KE2tmoxJCJvTTFELFKRsxHTH2p4FdG59pQbqFuY7gLUAiBFjEuVrjdH5WtRSfiJ4ckShy9yADcMXapqEP9",
  "key19": "4eiKGLCvNc7DTWak55sh6BKcXTPGqgXP2XTX7xMY8yGycxPtegCP8aG38PvcNzBNFmx7ox1WN2quE7bXWW9Mnwnk",
  "key20": "hAyxetk7VAhPm5UKoWgdLxwm9RxyPyJGwYkKhhvranh1BpnJapFdNL2dDoKkdMcX98yhtyQWhaXJCYmuiArcECR",
  "key21": "3LaWHLuwt5u8KFkV4HsasrF3KgwwtrDtwpoAfcSd1kXrywTCW2dLWNN1BkbgYcjEHyXxqiJd6bK8MK2n6Ed45om8",
  "key22": "3UyHbFMN8NzevX48WMCaS3stRJcqDmcVTzQ4bMPTAt7r4VV2wPeR72rQKyMBmb4DXVrAbi3VEv6voV9YTt9fUnd7",
  "key23": "5M5bNHMhQojdPuVrpHCG8Yu17Ch6nZJ1X9ucyouNYfdM7e96vQvGpY2ynTiScxwSfQkVM9xYjECsL2PNdhjgRHFQ",
  "key24": "21qfiLThdQhQdP8cSkgEG69j2YRAPq89LCFohDSLVqbRELAeBRKnbV3dehAQfsSyyVYFYLJCnzGVqDmJfbNb1reC"
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
