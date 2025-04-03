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
    "4Gge9JeVz8M3Dpix3aSzHh7HrFbsDJcxRKhoHCfoAreApqnaA3qNtfHRYjrzFsGVNnZAWPqXg8J1pEVxAYKrJ9zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q99uRXHU4e4asohK51K64yNY6T6trJdmCzAU9d7VNrL5iFLhNABgJwSaWYTpT9zEtXqandzoYUoK5MWc9E5KBjA",
  "key1": "4zJHrKJ9oaRPKsJg2LuhYLU4XURxjountj6S2d1TXMMqGELM2Tfo6ESKX2S2qhdHnaCgHj3FBhtcgWkvqiNWpRNU",
  "key2": "4EphAFnbYWHX2En4H3Lvc3Sv4WMwu8HDfcmHruh2RWd8S723hJZ4bEeWX4jjhxdp94bJrt7iXHqv6qnEa8orMYWb",
  "key3": "52xyPdPGk6NBitC2nrLU6Ub23i2BhbRHU2zPytLds5DNM54BrZ2HMhWBLqQAmjCUoAp3fAPFAqiU8VRyESQm4w3Z",
  "key4": "4UFKYQsWD1KHPqZSSHMz9hfhyb1P9QZDTidMg6QPabMpgUnPjziE1LdhxeCZ75su2hFwgqQBxCENmFwyknU86T5m",
  "key5": "w87i8Pn7Pksmv86Z1mEGoigu9muW1dNhmNjLEjjY5ypfjgKLKGjE5hCFhA3y8U94VQCKpwWoS7Fj66nqx9GPn62",
  "key6": "3cZnXHAnKstxmz3Z5LQLmaV8b4gCvMULWVnr4ugWYLCiMiMqVEzwFJYqtVEiaTMaYQjmHophLsxQvNaqwnxqoY7L",
  "key7": "TcjV9YzMMpczx6xtWGvDvSJSJZE6L1s8KuchmGotzeqnJftA1MVkMtK7gP1xWc73PrZiBDYSgf5T7qbxdmbepRd",
  "key8": "4G4zMA4A9RhkEqd6QVLURsFQAPL8Ziudt86VBVSfBNwDyRM11s7QRSpYHjbKdyLK4MibRKFmG6JvtBBjuAxSHvtU",
  "key9": "3p6zF26CausiL1mpbZY7FULHX4o5qwnvdQ4N7af7NHFyKCpfCJpuEUxssBpkfsMSdoZGHf4mr1VzQsTu8EpBj33H",
  "key10": "24WtH5aexQuiLqwwqe7NzkXwvam7LEUmuAtwc4ETB9cDa7cxHwgANKEjCCShxd1Fnxe1dZL1DW9EUD1wgW1ncUzV",
  "key11": "5isAxQbDnAuGD7MijUnRTToXL69QkrvrMYz1zcwiyUPRxQWL68JZfvjD9zB9Xc7yWmqWd4uGAWjtHSaKBWv7iDAh",
  "key12": "2GhdPtDWw7hpJvJxTKrnw5voURgjtbZZt4aHCM68hU6CaPyTCUL4SyjLHz7dVceHJZKCtGN47XB1pq4RvQqJTRG6",
  "key13": "Cz6K5PzKowsWPeoWnq9hedgj9V75smP6M1EzWmWQu4qT3eKSqDX93w2bUAuiiscEaV5T1EKyzYtyoK2G8zvtm4E",
  "key14": "32To229XgVvox9VguoS8LNVssSBH71Rj59z6TJ54vtRaTjFA4ombcHnRzhyG7VRpckvCeRdDHGe8MurzYYBnL11f",
  "key15": "4HGEw5zU8GAHNQRpzdsHubSCEWpBz4WjgxHKgNp1Hm4C9XNxvhqZV8p9EFTfzhabEyT5sJDrpMvQhDP92fVmmE18",
  "key16": "3fqv53NEb6Fz4JzFxTweJJkYYasLAf7dqjp74vkHSEBUDn7K6t4wnrgWHNu3wi5DGyifVmFghqt4fTkrBc9FUhH4",
  "key17": "2JnTgdteBoe2GZRrm43W58nArYNfWab2h5M9fDtC71e2XmPjJS8Pw39qYA5w4PXq2oUJEF3EkWNrg77XhoK8U6H1",
  "key18": "4vxRWqUqsYcjekRH4bRma6tFQcNd2uTtrDrXpkeUhrmMtroEqA8sqWWzAtGUutLYReCQBA6YuGW1DYXdgkLBiNwu",
  "key19": "5nxKEBEPK3dxiuLFrB3PHcAsq1RQA9UtYHzk2mRKVT4dA4eNb4UJu7a5udLr3PWpcLVgN5hxYUUynTH8nF1PdKwR",
  "key20": "4ggmkSmitGGmgfpyEdMFhWwTuXr5v9ApNwFyc7KdLSfWYNC7WNCmpxboLmuhSZLifQKH79oV4wx7zTRj4Af3weuD",
  "key21": "54BdX963UBaoMdcFtEsZ159DmENeYuc3LX8J7DMGiiGkGPdqUHJND9BJdH7uirKqqQdUi4PiZz5GDZR3rRmwPdLQ",
  "key22": "2FSfH4LTUm3PS2tgBtBzLTnAMuU5bXZL8iTeYL5Sc6mut7ZT6tRLNMEfjRxrjmrmdgy2y9kYF3Sjym6fqFrzrfnx",
  "key23": "2RrzWSMR1J9hQoNtNukD3EpH4TpsiWusx3m3Nk5XupS7No5wnzLFViFCMXbYJj3mfJ6CRJYV3q8P2wwZzFGNg3gW",
  "key24": "66DPZ25zSzrdTCY87iwpq4KjHn1bm4PtaVPqzE6ZfdfZzTcytJeWEKy5qi9JvgYEMXhPs1341LbzZnP9jaS4Sejt"
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
