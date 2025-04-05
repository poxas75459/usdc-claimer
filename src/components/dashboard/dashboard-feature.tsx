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
    "3xcFoWAizsAWusFeGJi2qrqH9QdMM8fSPdsPBYhLjwvPNXjkBJNeQBCEvcSz3ewUzwH7ucwcuszpqkNVaJvBaXSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FbmywmZPwEFTCch2swrYvZBBvsymoTtzK8XgHrq1Tr26nj9n19v64Q4ZszvmWCvypT5PqPULtU8EziGcaTXgj7",
  "key1": "4GedeEAABxXFzQKBg5JAfpdGbfv2hTVsghwNTLrLkz1QEnFzjzPnHRLGhLfwoHX5CGhjwKCN3QH6QSApCXrZUDxe",
  "key2": "2RPTtUVmX61rCqgDX13bUVEP7WL7KQyd78D1K2ZymQ8WzVxZyN2EBnwwmgiNkKk2NU5HtFEh7imjXDXW15wHYDLm",
  "key3": "331oM55EAE9amBUZTZwBajYNiN7s11Pzr7ybCnZg2qW2hyL6CjvvihAuesBWP7pxsAkuyPiGJQkz9AQ3Hhac8CKY",
  "key4": "3EY2z1rDDV5mUavVw7wKyqiNc48ZXSWj5AvEhMiK7pSkZAQiesRmU8xGmqFWexr7KrVxuLQuhRT64PRwb8VY3vWE",
  "key5": "4jJYxCMfguuEGazvD6dpSFuwrXeqqmnVwFRqiFFpEoL5Rohx5fx8tX2nje2siWFYXRMXgosNGPxorZmZBwftgJRm",
  "key6": "4F6zsrGFpv3ymLR1mbWsHRy9rSPBBJmBLmEEAuLd1c9GVAUWVRePGvqHKnbZR4bodRFxPQxNMGi8dXepXy9GEDFu",
  "key7": "EFJPB5BZsX1iSDyRfcreHPKJZZfj5cKkKJyP7FfbFdzrRUWznJLAVAW32HN42VXEMRANtRtwmQ4kMLTTcGwX7Fr",
  "key8": "5bzXUeBQnonpm5oaQM8rtZik7r5uBq66icK9NcuDZYqLq5hui95YA8SCTijEuTywKCyBZfVUAToJk1R5wEnZHTcu",
  "key9": "2NnQvXuc53BunRkgtJQUnCvG5kZqxZeaguJHLdQ7J1moX8TCvWaAgzHCPHUDM3NVV19rN7L2bpouamX11kiLDeg2",
  "key10": "3gidDnkKy5mTiXoVpTY4Wp7L1c7S2xFePLNvFnLwnH2ZoyFaLbrCV2wxbnAfbgvk1nUFySmnwPVd7yGVBXhmRhSY",
  "key11": "2srn5fYejg46ABHQprR33EAr89ZTaAExjYkogxPQmrk1Xbta8GPYGPYTPj1fTUuyceYArFyW9hgwCaDzzFRDS3uh",
  "key12": "5PQB4oFoNVAocWWD229QQoYHgXiF9V3JdDYXQGSLtiJHJBbanpYqkcczE6sRWSDwjoRueL3JgQywxcS6xMRCHbaX",
  "key13": "44TkM1TPetkuCrdNWSqWKB87ffewoWtdDw5ZsUmoKoyeWREwZ8YnmVYWYf4B9HebKAjJpKJtNQwuhQqVyZS8ETUQ",
  "key14": "56dyA6qfhCJwVtXkYz8YGaaWGWmVrFxJLex2eVysHMKnka9qPh2FCVJUmiuSnxJXBcFRLYCLr93PMQhCSeF27oYy",
  "key15": "3J2JVokFzGws5CCSDGTeoQaKRL7DM9CYjZVQooVjhu7nGnkpbyrjPfhGJMaZyNwV1tvyXky7YwhXYvr29bCyMdBY",
  "key16": "2VE6ojBg9Lao868S1M98NuvCyAHB3vLGTfyR4EV9raDDjKmtBKHu1WyxHfAoA3w7DeSFQCe6X8LRBuGCm3tqyC9z",
  "key17": "N5nBo2QeUi7MWv7pMx3ghLZGgdg4964pzkxDY8obUupYNdBfhkxXc51Bmvar1136jGXTCnSEA5JaCNdNJBy9KiV",
  "key18": "ucaDPNy3r6EAmrkansVBn8aqkA5f3a16NrX7JxmYHKjw2VTjvMyjckJd9PVB3AnQC43khdT6kJ2psAVxPYd7XyT",
  "key19": "9nMtzp36jg4bAYhVkTXj3Pvjcr17CWZj1WZGDW6QCxiUtpDocM4YdPqnmQk3FooG1pmprWSLYyG4S2GK9RZSyG9",
  "key20": "2k7EvbsPe2SikA6o5KXvhPb3ZEFUUT8o6upsmevSu9yBuiPBk9gtWP6RKXo5x9XsLiKHiebsHboJabuW4YyNRQAK",
  "key21": "4ad6ZhfEpipED46y5iupkAGdB2tYKB7xKX8uPHsNWRTe4MmWDZG8shqJ9mbnWM38L1fdgCDthU6fLm4CBgYH2gpG",
  "key22": "5zC7dRbXg9jnNJ2zU4FCw8NyptQwzP1fWwWRcbNFjbM4qtS7sMi3rysrqPoXiLs5KdxbSYekkALVw4C97yNh2EHq",
  "key23": "39gd8vsMk9VWDDfpK9xMKPZKggLAwEDi8uhFX1wFzFVgfGt7mpmUKpbhSMFHEdhCk1Fs5FZSnx7MPBjX8F8ndSB9",
  "key24": "4r48zks1jK4uMP2iXMhuu1iK9VEfjvk6tu2C6QfFw7QsYHeiUzLeadSZut1UwRBQff7Eh5JyNvvMckN53LmnMUE6",
  "key25": "33UBz8vruF6vfwdzgyGyTPDjCQ3tUfSivtUHwYJn8C4wbcZhVD1QJHvh8MNEr5qpLXpP3kygUj6j9uCLmUjb6HwK",
  "key26": "4j5gTZVFqKDacdVwYu1Jk3mp6DPqgBq78npUkJoS7TBGLP2r54FQTnULxv7urhn7SLi1QYS9hN52FAGy2MRzYmNs",
  "key27": "4tyEn7JWcGVzjbCHY8uKmeKU8F7JhS9vs1Dg1d2AMbuzJv6TyS14v4bBzAFGLSY1pWMFJ5ywnFZRwC9q8MMwHfUY",
  "key28": "32r6YLSWACxDBkuW8FR8Swy9v59gMRFyBrhMLcsWejTwJC4JT741Bgh4cmFwNhSsAkH6QtS6a4dPShyziNMgcxnD"
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
