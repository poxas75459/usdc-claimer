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
    "2naBHWjez363547FVFBoRUuCk1gixt2RmhaANoWR6zjFEmPEWo274XmnUNE1isyECaunQQoUyR8xoeywp7SVaqtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xkCLU1LKw5eQWeTCycaYvqANVce53jU9QtjN1YLEnd1e9n3rE4VPUEeaoRvfSo8xaExhAig47H7Q2U6r7fpUXX",
  "key1": "4qBcF53XEU1MJynoQaPRTjBBWxfMS6QM8eKRG488qmdDD49DQc7Rmmmhfb2DcNNwuZwmgmLs3YD4HuTzVRF3BYRd",
  "key2": "2JG2AFwatyTXxe29UQaJeXuzU4WvEApLcdhzCxKLPb9VUa81kkRfGCVXijQ3MzWiJ9zh7HK6kpwPGY1UX49J88BV",
  "key3": "4LbzmXwb2W7mr8kivGfa1LBnEJhRn9kGV8d9h4T7LrCCVzsTBfGy1WMneMCnvv5KMakRDeQpXhX2Uycr9kwCjche",
  "key4": "4AdxnPEH4xVfZuF26p4YMMuxKAa8XaNzQ3Ggbhor6zAeoKwRzFebdZcxKPoKuS95YGofiyLDEHLLxxzou9qwZGKa",
  "key5": "3Fe9nN2bfQKd16AH5UXC8vtvFrh8EtnJFqNRjHRrzPc3XMSYE8Qi7bDgPpwXxf6sCJmXCWtGNKK65CyA4GYpDZu6",
  "key6": "3oaCT7Cd9jyXoACiSH2KsfK6JuaP7kW6phKBuQjxiwcrV6HZ2YnVTdu6ZKVdoKUnzxjAJmPpbYNyh4kDvD935fkN",
  "key7": "3i2kUQFoQANyVNyrZ5tzbQd5CXkBfH9sJ6xGK3nNrzpwuXjfQn3YVc61qxgGF5RCuuWtRQpkRfa2NNR6XbL9M7RN",
  "key8": "4p3M5w8TytqyByFQ6XSmUXjoDvkzRuwyqdpYyYFQo2M61bEypEPs1JavvRGPvui9ENMt97M1uRd5X1ZYDCwo8377",
  "key9": "4hDBuJ2mQ7sTMxA3UYQ12bwbKZzud9KPGa2USAX8CRHbb8ptm3ii3nSLvwy1YQiAxHiaDtMah1ddEHQc2McugEKh",
  "key10": "2YVxgy7wRz5kRWkYbjGWyTgmnWwgUiPywMPkqgHET3r86fYoDeM5ptRPpVAj5t1WqsYgxjwcT1DqA9RTyUM6PVtk",
  "key11": "476HSobjmjwyZ5EjALyybc7KEsBvTapbPSe3KRZZqg2Gi1bwwg2FZGBaKywKNcErBrCXsA5CP9beWQ4LEJgM3bMm",
  "key12": "3JCdo69ZXtpPY9A35rCE59goVc5Mg1J8Jxq8rmm7b25c1JmAJnYC6daoesYUK2EPvQw4ZdynZGZn42goQtgMW3B6",
  "key13": "2bGkjcH6usorwcgymMadi8fMmikXEudpoEgCDpTfazfNdfabgS1jC7fn6GtA8F5oPPtZQXMVBvuvPZ4PwRLQyrDM",
  "key14": "4o4v5f76dcJEjKqEyVkywTMHC74dwxeVDFzfWvzuYNpaFGKske4jifQQRQwMEFs8rbxtF2bTf6MB6h5z1WW1zt1Q",
  "key15": "2fvNg1iAEd6eXvua6h84nhLJWZBVd7kaypKaYFpfwmBXW9deKz9gh3ckHFLc7NxpikER99ZaLeuqZr8jG49bKhs8",
  "key16": "53VqfVn7goipw88eehiyk5xvTgpo1EkZcH2sVTRVZLcfv2MZ1UhrCmCzdpYBEsPXG1bdjjGn71xkZFjeR7rp61bo",
  "key17": "2nmkxKq5hUcg8LLLGJUKkiCjXzUV3eWLHJUHwLV9sVQx4yGgTN2zFEbkL5p1oWuJCKfHZVyLL6gxpKqnrfQkhc3e",
  "key18": "53Nn6G4WbCCCosLu2CWmTKyXkE27JYsg6Y6Kfw1gp8Wr1Svh58szHbuEjn8HXLrRFVScqymwnxSTMhgRaWaXJYvW",
  "key19": "54vCB8YQ399ppbNTrdksLyekfPcsb1e3Tvh8mrZrtLTpyUhD97uDysCa9S71DaN1dxrhju5UV5kdeW9Fq2uy7LEV",
  "key20": "x2ufvN9Gc443P5tdM8UHLntsjM8qEifN7YocUtexFkAYVJg2U517bWmpNiKk7ztCpntZnPNokuBKu7Nqf5RM8yF",
  "key21": "3m9R3oPv4MhUSxMRhh1q2pSZgLTFU5rYiWANNJQQ61LtPADpuiHdizLHh2o3xRRrtGjcqi8DFPrWsBp3CSDb54xs",
  "key22": "23Ww85c9B8cXfR7ydAQwgsXi3NR2GvmBfJEM5mGQCJKENBhh91UYgVfk73JiHScxvoWiqaGpHrfF8JyqQXawGnS7",
  "key23": "jmCAe2eoAaB1QkfQy2QN6poH4XbJ5dAiV8PP8EFnfep8s3F8LGUWjobBRHfah4x7VKx8uVTv5eHVMoWD8ZsevrA",
  "key24": "u9smDTR62dLpDuj1cx1TK1F2hytPeZ7hdpmBrDkMy8Mq8ncYrC1eWJSYbRvxiHEoEaJUsYpfTvbYzGJmqKnxYD8",
  "key25": "4csYaLCV9T4UJoJhvDDxPWzv88pomaJtwXEjs72n7tLUQsBsHBzxbT8gkUya7yZwhui5qLBepNwB5gFdakfKHv97",
  "key26": "nci9wac7U2RJ4TBsSoXLg4wiN9UnsYDBHKH3gMMbJHaHTjZac2phN1Ncae2oW65AoGwTbxBJoTGvWxJ2Lwoe9VT",
  "key27": "3R16qCeayzzd4BfJrEF2PTCZmPSQpvmpV8e8itppEQYF7Vz58DZRBF56fvq81YmiA3njuLDEfdy1XaxPScchbbkx",
  "key28": "5NE3ykU5z9EfRxv5ArMTvVcwwFp8ypwtdBi4jenA9cRDo9E1uHK5HbrmYvGU4cuBQ7nXMMiWZTDX8TywwqY3noZ5",
  "key29": "5fSwUqZZkuxUU77QHCUdmoYjpvNZmQRMwg2TAwY6UHg6pbQyVxjfw7K5pgAJDzMG3LCMpuTz4Tg9arEBFhPhCeBE",
  "key30": "3YytVXtAViZHWY6ESErwa2oeoHPjaVDM6q5kCeLNewzDzoCnScRGjEJYG2aGoW2k6BpUWfXGg97hJ3ruLq7NTBzu",
  "key31": "3erGBp9P3f6dVbJe6BfggSoXJWDJzKwFQzVCi6y7jPuP1grEovRM8mDXZ5TqeVnKDBVmdAucB7R2a9Y4LdCofG9B"
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
