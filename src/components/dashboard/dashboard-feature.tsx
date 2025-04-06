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
    "5LiqGF8x7s2575WQjJ3nQ3GciZTTCmjcnB5fDQdigdiouCga6oM1ixJHbpDgKCcnAW7PQjFGBqE1jRNh2x7CKKVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zjMuV9pmTgKSjT5Ec3uwzZZYifUWm9fSGM8HKSjzKEt4Mtdxyi9hkojQEKEYLrNUhuywdVEeCC7eiqAPvf1HsbQ",
  "key1": "5QGBkkikheEjLbqeUymNww55uNRKoaRHCsQaz43kxt36r45o2ZGBdNRjPL8PFhbTy2b89m862q9Z4SoSThBNeFt5",
  "key2": "43e479QVyKziV95s58Vhd2ECma9q76L3F3AKBCSoYN6vf4a1T1t4ayuBA7LZgvDW8X5FwtB53xW6VgegJWbyuk7S",
  "key3": "4vQybcPbLzNEbRKGreXGrnSfRX9yRz4WJ8uHRzSxLYsSumbUZsXnv3jxoKs8yDqNQhurAqzFNRV4JvFSLXFosjZ2",
  "key4": "3JonqQWTRQR6VQJ52MJHJTzBHx8Zs8rrv9XJ4Qa3komfrbBrJqPG3XA91MGKCWqUTxVBDKZ2XD3JgwP3jVYS9pTq",
  "key5": "2FQLfRSGuGQ9mnCK9dp2nbKsE9iaVpTfMyiuw6FXP7cPAew1QmCJgzPVWiDvj2vdYJhqvEnd7t9b928BeCVo1grE",
  "key6": "Jo1qQLLdwBMQgKXzKwjLiRpyy9pDYLaxgjAFGCq2LGB6Mkf6r1K4HX9s2UJuRd44S16BV3rYG2WSL7vQKZbWfqK",
  "key7": "5F5NtSjUaNvT9rRtipFiCt4C2grAdfSRXsX8gzFQxvxHQPCEfwWjaEiSP1KqLrybCPdNtDoSQa1aQ6HKdT782H85",
  "key8": "JmMVvgUVzkBe6DKxNHFUpGC2FEp4DyWcp1YmQPXsJBkQ9K78bQQUXeHTj4RGUNP8ZQqQwxkJQqRkuCPoUj6PGSw",
  "key9": "3h7KNZv5LhxnhoPNCCVnWcB4uUUsxwwMceydFcRir9ZsoyNBVX6B8nJM4nPMvV5SikGdZQc5JrpTtMLPojTUV1Jh",
  "key10": "3MuaLP5g5ALMdytRvboeLosKJpRQD9M6WRyeimLYkexC2a12mh75p9jXJiBu349HWLyPyxHKArT3GXDC69TmEQGy",
  "key11": "2ZtGambJwoLp3AzPyo9HvFGgn9T7puX6YVX6dXGcmXqGjLc3zKThzqU1ReWJWeSTms3p9DX8f2MG8Qi3sttRG2gf",
  "key12": "VDFYj2UdUcwN59QezQ6Vt9kCqZRFd18puyv7QeebHXykQ8s6hXEQvJ5QrXB4XPjgSxwBpdxy8Lq5TBFrs7oHRAX",
  "key13": "5JYBgs5me4PN6BqEc1vGnJ2eFZQxGFKjnWuJbTstfeXyEFYQZTvVyqEJ9VsTPds3X3sUtQabGwTNTTnAnm78LE7K",
  "key14": "3fzboAFkR4x7gcfsNDQUv3a8WVvDxMHXMj5BAUF6sbQ4VgahUs2cDXL2PS5WphpqjVUxFfL3YMDxiKBbP3Vfh8C2",
  "key15": "4wRPxZ8Xgi2u2TC5Dbf9MzBQUtt8U3zfekNtnv1FzcZ5qx72mLyLS3W6mBAP8vBXf5LUvAJDzA85UjfZXesfMdgZ",
  "key16": "3NcC6ucZNyjt7W8q2M78nupdjqUSevcVSqk6Zh8PBn3vtFjUzBVqBGByTfmL9HxA7RJSEJ8EWYN8Cdgo18VwchsE",
  "key17": "5V5fjMg8WvoR2YjfLJuFgbu8xH867VDaa6sydWooDY5jzZkNN3WJdJak1pbi6K9C9q13X3oJkoiruWgPqnpaiMEM",
  "key18": "rhQjpdDTXnTQEu21EXQAjcqeGjvGhtEhV3g1UgY9Ya8KuroEi33AcA67zcVcstcQTm2YUEhvS2EESjsyQTcAxex",
  "key19": "2Hfp6B9u82ULwH3Ma6Lgaso3ZeCiqS6n2ANz3Xy9u9jyWicv65pXWGJ8ies1TB9S1BqxJWsqbVtCnRnGhN5yCZwS",
  "key20": "DkmAqroYsAcpg5rNMGXgTxN9NVVmsij39jdxT2hm6Jzqq8GL2CApzW3NS6a14UVpcxefa2MhLVUPn94eTChTZoT",
  "key21": "37biQFqeppWv7NqTDYHdE2b98KX3UufWNECD7gosqW63t89UBuXyfPyEwESw2hb6JYSP3SGY95gDV7mi5sRvafLt",
  "key22": "B6mpF3hm7paHmDoMY5j5BYmhzMd9h5hTyaKJjqsi7tLi1tEKpFhsP8T6h6uUELwdMpQYpe4snYAnzBXYZX45NuQ",
  "key23": "3tYGTdPj7X8WswzK2uuRonPnhLq3TAejtLp2CUon7xqHG28qhLNCLu3gyhu69yM3FqGZRdj7fuxWAU3AqoKVdccL",
  "key24": "4GoSEnBFSi4gq47Z4UvULKV5Zxx8b8skH9YWs4gATdc7gYZztbm9X9mJQFpK2fRvFXayjveFtsTgnJBWbeYt6z3f",
  "key25": "4XiqCDa3vpNuAMtQyNN3Hu9JkySbZyp8nVY7c4tCoTEywuQhMFmNMMEFfzAohMRxemqhBeuGG7PxuwatHeGm439T",
  "key26": "25ewpoPyHMVk1p9xbpdq63eMoU8NwL1kUctXFVvks4G4N6otC8dPr5EnqKKovfGWTiczRLXNZoRNMUXyH4TFa9FE",
  "key27": "SSESZob1ndo197EfkaAjzffMdfW1giDXorUeujE1S3RNFjGBrjpPRwvyN8roS6irYC8suXRRgqQLGwL9atVu9ea",
  "key28": "4Bhc1rhMScGfJfwjFzcYP8XPRtAtKd8ZDy4mazvZR2m7cHxiP11nokx34LPBahFkjScRmBjPsPTJ2HbaVoLhn36W",
  "key29": "5svcGTasQ2UocXLMKJRgYV4QUZvrdAXg6noHaCtgCYToNTLfDR6FHXcaETNKQDnEAXW27MMijdsHdXFiw3mfRN2e",
  "key30": "3pcLjPN7oazB5bS5rErsqoq6oC2vGEPmaySUgw9RKyygzFaMdiJBx6KEPViae5fzMDqZjD9NudKbSwMruf9h9fH8",
  "key31": "ko7jkw46J4Rfd8epTyXPGvtPqBcPMKX5Q7e4C9LWaSd7rewNsNNt6oCoWHTG9KM8HKFUxznx4xx6juyibkwer8r",
  "key32": "5V8FCENxRU8uu8AyVbLHCpEmViSFTcbtYBJmYjCpNXfGgLE1g1z9EKxzENQwVTe56mjwK5cp51SH6ZTFJpZCHNnz",
  "key33": "2b9Vr3d9QcmiQG783262J1Ss2SGGBf8vVMz3bkHDX9n2yjj4BnH5DKDeXszzVNx5cZDikSgY2dabijZHfPLrHg3r",
  "key34": "2kj9ATzWoN5ubYFMdwz7K7ZXSN1R4xpoxU7XMDvrh3iT7L22q5z76pi3qztULRZdNKdgo4SLKnNrkRBP51VjJvqL",
  "key35": "2jGVaHWEo3S6UGZL2zCvHdaN6qd994VfvFNe4Nk7jgTotjR8LsxULoRw9dxbU1i8mRTPga9hmcibh4TXhVZ22nGg",
  "key36": "3JmZxfaQ6txMrkgHPBjpZXJ2ym3kyM1MuFj767GeRws2r8K2Ts4xPfgwWGMseR1oXwo9D18WiCAY9hXjwvamJYnF",
  "key37": "5KzTf1Jp8Kb99wSVrps9VVr9gZCj15Rcsb8ADWQ9qATq7UAdqgBChHTBcgvw1Duww64E392bWmzoHAC3WN62EbaS",
  "key38": "644N5DQrkWk6GAkW7Dy4pTuLZUgevRusHtryyALp1BnndhHf95sxPMYN4Cxj12iK4Po78xXxdHCjp2cZtDvSahQh",
  "key39": "4fr7DWZK3iooSFTpTicNcKhaMFMQTb3r1MbWYsY7YGPhvyB8Rua3VhCkWZLQsf5ubo2uAv5FXTZ4MgpHiTMFTPqa"
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
