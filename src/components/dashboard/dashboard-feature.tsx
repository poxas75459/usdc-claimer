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
    "3wiTSedGnY6KpBs7SoAd1W1mAm7eMTZPmA8Kj4XuY7KJdRB2RzAraiYhnxZfUUEAWWMuZC3biprxBf2FVXvYYVhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1XUNXZD1uCM41YuQrg8qFGUt8ZMbJzHEUVEGPGe84Y5ppduZzP1X1Bb8gMRmxcmi5rNswFs72qvNopDzrjP4vX",
  "key1": "4PBqNwY1WcTuVqrmuvSmav41QLKysQpTtCsmp9JKxNZrquXfFHMQ4arre5XtG3rVSHMncRh9Dewx4hCHeFB1vmKo",
  "key2": "3FfGY427up4D4G8RpM8PcdwWY98nD7W8rpy36nJt24cBKzFSAq9zHWCaH7K8sjALWmKRfR3ZkGDpz6i3Nx5wzHau",
  "key3": "5MQjNWMqscyoykCBhvmEGhBnKQNx5fJgFG5osYGyY9HTXZ47gnQYkmyErgVK8KhAw5zS4HVz8ojCVvW39RZS87Mk",
  "key4": "4BM3pVvU5MPT81wKjQjLsGKEW5wpKBuLqQ4yh9cEhWqC7gKRxHf92mdiDnmp54StDaXz6ohgEuDJbnzizUAw6Pzp",
  "key5": "yFf8YTAazwvw9LWeJfiyBwq7VY9egxyKYHGAUe3k2BgkVGNoRN7GmFt6AUnymt6d1RdNo3DV4ztp3PaBwhHXsmy",
  "key6": "5JcYZFfPrGv4vSd57WwLyfxpyFminNPXCt39wmjL9Wjo26DYwBfyjDRgj5yS6NjFkrpF6ZKMACB8rBYZtEZ8gFJW",
  "key7": "2yavoebMwvpNundJvMDqDoqa5EHaDqJ7zCb7X9o8cSQuQP7sbj1ppgQinvofgP8DUBuGajRWV9SaQjpCdbuxRoGQ",
  "key8": "3vPo4o1m8NaYzKhbSdBBwKJQrdRyWZ6ZE3K3FheXzqtq318KV66p1uieEu7MJ5MsoZBLunDfc9CcNdFLWgwJsR3r",
  "key9": "4XqjhwHGKhdzHQzEfeHQ8pstbS855CNgXCVsj4qHugwqnKMzrTf1TfPCresfLhDFHwSv3H2h7JgD8UWEpjYXC2Tb",
  "key10": "4pmE52ug6d97HKW9D3yrtu8rkj5i2SVBgQ43pf4KaZeudmkiMcLCPm53NU1PxqtCmC2skx3bk1fpppmAp4AnijdP",
  "key11": "3CuUKevWKZtEUfSWEJgCe6PSrrqGvPn6QRe9Et8Kn6V56TCpbGiYtt1H6EP1pTp1B3fZ2M118x7quyoD4UraFVzS",
  "key12": "4jz4sYQ99JLFhXtnzhHFDcayQBKyiUcPugPcWki8XVDyz6HxiVG8nrV3zWSqzraw3CWLEbP9B3Uiz8b632ArpHBp",
  "key13": "3Kdx5SyTnRJ4PcjxguU6VETBMRT5zMVr5dXJt9ao8qz6JGP8zf7E2LL9daGeYAJqVvL842mcn2NA1KzoCNRmKQbZ",
  "key14": "51FENtKDVdSV2X28Jfg768jSDUgD3BGAfUF9zVhZHXzsi8i49YTt5WYaMuw6bLUf4k8DcaKhGZ3bMnwFLt8DdivM",
  "key15": "2sfNmUfRbryz77h2T3DQyS4J59XFdAjWbWZWHNcDBs4UJdstCybJhy5zANCnx2nzLrq5sjT4TyZ3oD66eoBuSBGc",
  "key16": "2cPHkkfwAVBsyZLZn6zMvETPXpi1U5cYhf3NiyfbSuGSduWgnqn2T722TitpUEgqqxNaUk3aJ9CxYCWGFxPQZpKH",
  "key17": "4nx3yB2q3airNmHBg6EyPL32eGq9ZLrkUGKThqajtvkMCrB5GUNQXZU3zfaejDyKhzu9mFVNk6MBYauAefnY2CQR",
  "key18": "2pJ8PjPEDtMG2qr5b1cqevHxLnbrjpPci4c4RuLJccHtB8899SWP8dPep8WUnNxxH8Ena81at8M9owELC4umDFBj",
  "key19": "3SaDCEZsfZht8NsEEgcagFG334erMAi4nW3XzezmpHdsX5oqREZXfuwZ4HETem2L3ZiecZ7S7EVUhnUUJETbU25H",
  "key20": "421C1s3U2p8qDvSVbeQ1JFCpADyQn1LMpEPodUA6Y1iQRebCt8Hi2HVa1i1f7hHCFHRqyuFX9s7VTi8QqYz3W2xT",
  "key21": "5ndArnNihzqoUspLdBgqfX53pDECYgg5jzuHZ2bMfFpMN8GUvLQTS5b2etQDd5na8eSgT8Ca8ZsRdKpgpNCHW6rs",
  "key22": "34eG51vGZByUJK6hLpVZJkjiM5nkvCDd2nuG26yYL1wqB6bTGMpRBpgb8orgHkseTv2FfmGn1frDcebrs2NrfUCZ",
  "key23": "4SyFQxa6SHUHrey47j4EARAQb2RHrE8dgWKiHmNxwLd6AVm38dSssBJVvk29BqSx93aDGeDYrzBvjMfL8QDg8rBv",
  "key24": "2KW1Ad3dK1T1kdZR7fhx3KVxnjn5xu8VSx4VQqWrQQeV7s22em3RLF8UbP3PTMp6nSa76LLHJ2zsBjMo6oK5u8oQ",
  "key25": "KsMdpNKfASqM2emftqZYxju9YUrmuAzJFDdzoZ18CwaUwyGLRiWgrZH4ZKo2zW1jJLqVk4xEmSKqr2qv9hQ3LX2",
  "key26": "5jy8E4r8CbNSK3Uz65ATsai41M9rdpiDAn269VPvx2Sg7CuvE6An5PPGnE28qFh9aAZ4NRBpVhjaNY6kYWcj8C2U"
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
