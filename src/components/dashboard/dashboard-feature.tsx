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
    "3MtJ9TnbeAhhe36ZDK98PiE4R3oAZ7A3oVaTYHdtnZdzwSEKgvySeWhqDkVGjPVLGfD9QyFwJyoT1NFxB56EFJRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyn4kM37MFAq1YfP3sm5qaD5uuXNaf3Xp8K3P3F8D2Kh1gEV1E995kVvipNgA9xm1YWUUAwXuULaS95wKrj9Qfa",
  "key1": "4t7rxif6idkwAqgkbn1sf4y3x1qZrPZXeb7pqSAVVfdyfHCDUwz1oyoshWNpUJ6iKMBVFgaeUtbBNgc7AHFUr4Dg",
  "key2": "4jpVP6Fz19tj5Wkk4GL99xq3iM3rtMHrAhBsM5BfbM2H8KHdoszL8Vq23bWEkjYDgsXEQS1Rp83AoNbfBN8fKtct",
  "key3": "59aR5SSwBKoBS1gUYeKGMoApfnLV3HaHKW4fPSXFM4JmAMKqh4AkgYPi3WQ4qDFCkYtKkUB73XCEeWm25XWQHN9U",
  "key4": "2KwC7c5UwBRd74yacg5yJdaJdvNX7y23NRdEbYT1YhGshNso9tiG8VVaYMDGjQqzAjuuQvw5PP87dXVCSTEvzG7q",
  "key5": "MPwHUuNAKdBW2wgq7CmkxgtpyQSczhHwadJGLm3zy4csUe6rWCUxzbxVtDK6cv2zDbnidN6wtZwN5Ckm6RGSmHS",
  "key6": "2UD2eQcp88uAvskZAh6o2eKoLeYF2sL15fBu4pjFSiiodnQAJq6vR5BFG2th4KVpByK1vGkjRnH6vtUmTWeXrdY3",
  "key7": "L2UcNQ3QHvP13Q2bC6LBVH4dnuQk9wjNjCmXwnuqaHapSYGjkvGZ8yxLoAzdKK8kwCtCS2rf1SBJ5mKodErMAnt",
  "key8": "5JxbC7f3tcw3Zz73Bg4JuQodGHCShpY6x4N2SbGgCV829jkQKNoazwmEENP7C88bciPcyU2fWYrsNfhfBmiMni5m",
  "key9": "35u4BKxVFUjyVJpGhSuVG9nXSFTT1sNbeJUR6QDdj9msW93fMMk9pc7PxD6L6gqEsZXi82CrnrWHz79fxdL2nSF5",
  "key10": "2EHV3Bps28ucFqommJtJPwkqVuk41BAs3q1hL66y4qbeAvrBUmYWxRdhdoqEMeGT3gK2U3MerpqGAoVK3JRM3yXm",
  "key11": "yuJbB92daLUZJkTpx6e94SNBzFuzJ7jqSjeqJpqN48pME7Fmwt3UwTuuzzNQPBjHMp7eK1hwsyn6PG5zSKEoj3D",
  "key12": "eoYc42intdA1aeznGB9uGnqtZLgUMUXpr66mza8HhkLGLWWY8T4UC5WBS9igC5gbsrA39C8jbHyFrxv5q4RTnCi",
  "key13": "2QZnFcEi4Zsvj6P2vepoxajMhXETXLLWEkgmETmpRVja8URTqfhFZGudgbZfRJe8UrsYySbJvYdrjKuRxH8Aqar2",
  "key14": "CzyxB83AwavdPpWK5e3jhFkoNtMmmAc4LiABvuoFrqSD5V2WnG3xyFmzQYb4LLtyZ5nNZgcCuaYFgzjhiVvU7EN",
  "key15": "22D6hK4EEPC4sDYqZ9HrA1tg7mh6Nzwu94XSK7NJGyLUL6Zd4RkQ5kzE5csWrgJ3RcdSXrwQawp4d1Js84ccYEkx",
  "key16": "4GcLKG8EeEyUTPgszcbA2mN4o7DK22dQsXQ1U3MRTuzYhNVQ4qC6iYmJhYjfMeFiAHASR8Ra6yNAJxbYjCiybyBc",
  "key17": "5Zrv9tyXYvHLn8fEBAbiiAc2ZnpmvYfeXwUjhv6ARVAqVQYH561SaAivxr2q6xtxC3uNKZ9MHjrhYZnLGjUPvxoQ",
  "key18": "5CgyYWLdvFgLySgXaG6hAvkCxMztuGsNcWH4idVHfoDubfGbUpVr6FDnJPyDHyuGL6DZohP3ejiEoBHc3xV8usCe",
  "key19": "4c8L1qPCUtx8vNFcMq7VjSogLhUeBBeqMek8Dap7bSfzVhvNBgwGEBEA8KoRVJCAtfBr8DUYoJpK7McVrjDUBSW8",
  "key20": "fDHNFRitjJVsC2UcD5gfrR6ABBNb3jbQcULZiCRwU74XjW2MuJsL9Ag3QJgbgMsBPypPCMLNmRuDAcc6fUEEybA",
  "key21": "3CqBxD6QGBQqmhgo2uV1ZtM4ZgfDL7VAJASV4nxiGynXrXD6ijxVz8jvU4T66uqFHYsHBKFzVtZeMEjmoqFnddLK",
  "key22": "49e7E9GwLsvHGm4UwqWWQGB9MP5xCqeeV2E37EVXAoUDAVRyvZ1xDCp3VF7RRCdapZAQCBuzvczfDXzQwo2Sf2Ho",
  "key23": "228qW1kaMLYPR2CQZV2yLR21SMhyVMousuhC1Ligro6i8B6qGdn8zwtWMRpJ1DWBcCt12xN9xNvX6znxFguDBDN7",
  "key24": "28HtKh6R2U5t1QgtwRWZHUkJ3aGU7cWZ2EKk6GqABjFHRwUXzEyA9gtneNfuLKkz6RW6t6aBXL37vSBJuUG9XMD1",
  "key25": "3L7TyQc1uWc1uxjk39DWCidqzs1Fqm1j1zBsSAcTepkugivmgFoidNz44ebubQLQMGyF3kL7zfNbKF5hN4Qs1YZ7",
  "key26": "25MS6urwqgFfRCjoVtyomc1hFxxzBFbbaDuDkSP26WvZJCZwhsnUneHSup8NDz3EMY9Vgg5DCCrD6us5QALys5Lg",
  "key27": "317YLADoMXTTLHmXE4tWkbXabYkj8tLAya3vPCdpY45RUEoWeA8MsR19gEjgYuX74RAv2a6P4ZkiDKbefru4SzS1",
  "key28": "36vKEXt5G33tkN6bFNXKVcaDkThHXma6qtRWBRGUCjQeVsxA2z9GHvu8Stya8Em7KagnqbvtVcjBA15oNR4pz6oV",
  "key29": "aD1npEPCSEhyJ1AXeX1tJSh4dqxrhJvBvJszW1mJbgoMfMbBrJLCJT4ogieWkuDqf3iwoSUYhvgpGJnqZykxHAn",
  "key30": "482gapLQtXQNsNwgRtkNuMRjrtP1wtbcwAYG8uWWUHnCXu2bnJCK3mVvcEfb968FhNjQmeGiSXSiHFJi7RavQVct",
  "key31": "25RfpWkguvui1ANRboUbQHdyoWoNTnLucuXUckm2LTWVumKrx7fv14nktR8rq2G7gNaHiexeBvRJBPBt3yPQFYKZ",
  "key32": "2PXA7YwQaatGnSTAk8baZX9etYKFWLfNLdWsTgz7L9XK6VqCTLxMoH6WKbVPeJigREKobhnsS4jtmwUb3r9HE845",
  "key33": "59b34fi2YXtqSZqCkPP62mskffcALKeh9zhFC6R7BFxfdxgpzfpqLzG111KuqP3dU3tLcSJmkB4TDeyJZo1gwWjB",
  "key34": "23yGmccwk3mJCABg2U1c4oLAKtQBbya6Jdc7HP7Bdfbge2rX2w2keWp15hq3xeZVryof9usLFJcERQX6VMBDJZiX",
  "key35": "2R21dTDYkSHRD24BaeEwjNXysQBKseyNg5j9QtjVpcMRpWjZKcZs34nEcAiZE1SaLAKUVwAAE8xUQ11GNZXA5v46",
  "key36": "3HS9sDSfyz5hF8R9bni3YwJS8YP6zsxrbZ4KxWwe8XUWh2Zpy4yGACRkKLSNqVBLzY3f8rbGyJuSY2macFNmXjN2",
  "key37": "2kXEyfTbTQNYMDxroaegdx8zhQBTvRUQMwPBNJREVu8ctQFdt2hSR83NGokwecH2hahGbg9KDLYa7Xsd8RWhGuz1"
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
