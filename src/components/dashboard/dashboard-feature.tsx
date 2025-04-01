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
    "5gwQFgWo1L4Xt43EaPuDSppwBBGqC1mkqnXak1E8QRQ9CtoqQwFVDtN5vYtwW3WCiuo9CWwWrWEz6abhkp48eLnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3uV1KQzbuRE3RVLSuTBVAX79F7aHKspQXiW7Umxstzgik8NGWhCYZKPRNGm6QbUwxvdTjP3EbTMtXhotc6RZ4x",
  "key1": "46VhA8rPP6C9P2s1aCLFdvsF4EUFvvEninJJC3DYqRKh3EmNuGXLpWjSqnh62FWKTW1MtQekKit5fqFiDvAcoKE1",
  "key2": "2B1vcogUsaxtCLWLyriyVLzPaxAcD3oXx1azkfvKzBT8rHbfFjdCekyPDsYQgNJFFgG3iwAh56aCxxv18Pb8bJpP",
  "key3": "mzWyhRNfEGQkmGkmuDoWi3LXcbc3fq5uDnfAxZ7sLkjGZ92b7Z2SB98wX2nwkTf64z6RY9XyhE2hq3w97zRYjnu",
  "key4": "3TW7dtR8GXkzK3Uv2Wyss8ATdt8HPWkpwMVJge5ha6tShBBbZmS7ndnWxWqwVccDnqe7HD68CfbJ9gm69BEA3Gz9",
  "key5": "3pbhuSeEozDKa6Xsk5pBkEJ3RQ3HQoDg5iig1o2skp5Ya5VDngEX73umdidPvHFjrZb4T5qMG4WpjUAwN3i1fEBq",
  "key6": "2AgEVTa5xsJDjW4UUAAf4VGSPoxEXZt5agwtA2L56oPW47tvvXqxWWeREZdLp5aUzr8YGUdXeJQ2a9J7CUnenM1i",
  "key7": "5WyHwSKCDURHVwzkcNyFEigDnH7mSfpQZD95TJCwU53Z1TfeXnwr5PEwZB1CDqFtNN147uqPWXftNWgUJB4qgYbj",
  "key8": "4EqMBCHJDHY7yCKxgVHoRdBZ6yifYaFybnDeik1nzZLoqS5SUr5bWAKiYMYWggLamy1guFweRM7iviUyJQAw5uoN",
  "key9": "47YUKzGp7pvRCQ2t6pEXfsRzVjnSuwddRP2fYonkgc3rB1ULmJoeKfmFPn25xpw1GcWJudMJXSZvfuNVMUznLXpH",
  "key10": "5mLFDA5abCbzdm2TAQf8G2kbdgpJP39RbQvNbxGqzoAPdFs3VzARXTfzu7D8d4uRwCLYWmRLDQRhavYVDvVwCx7T",
  "key11": "2oX9MTuEb2TUAhd4hiyDZmi2HC9axMr2VEwyJXkStmtXSyBMAauCyfkW3ug2NMUjN8XCrbFy47BDVNb1HXG3pc58",
  "key12": "5VwyMAa4BU99ojXGMGqS86bWRk2y9cGxmDvuAhe9aSvr4aqvuVRCDYZqG7TWyP17vTaYDd9LcRq2YmdyKr2LWxvh",
  "key13": "5inCVGvKMFRYT7BxqFDpuMxJq5GNardrYDMBAQw6hagpbTqhC5Ado1bKmZYPHdaqwGtrVyBDvgghZo1KcCnoGiHo",
  "key14": "wLHRZQHXX9RYFgdTYLSZwWBTSTxCdc8VQF33xXXfqz8J51VvmgHQ2zEdwzVkLgaB1KAkFGLsS9csXFd4e6DQSET",
  "key15": "3X942cUuq44cDxPVh6ApJnDgES6KdLE7rGoRNnnASSSiNuMyAacMViU5u27ymwFif22KNfWMW5JWQg9rNvYNrXD3",
  "key16": "4DwxHCiyCBYM7XhU4y7LC4TuwYWpqnXEZzZ33SdhFrxrNgNX2QVNvFjkopR6XkvinvEuFBbYH6zaz91qPVPm4LWn",
  "key17": "Mz2rtqLMfsJuLuYe8VV2vahuuHbbkrPHz5N8P4aVCvd4771uWRvDdx26LEnWcAPpzMzpQ8q9WPNSRYFMxnj1vXm",
  "key18": "5xAvxt3jLhcrE9dkpGg9dK5ZFn6Bb1Uqx4gp7UgnQsFmsqpBoAKmkktLxdCtfdPMW7K8DN19PMHhACY3VnvMErvK",
  "key19": "2WAvncUj26qF1psFJwBopUQhv1cCUWkL59q7CHXr16DFhvz3aP94K1wxejiqdwGmno7Ufy3JqC2sd7dnEEk5aRUo",
  "key20": "49ZFoEH1SCxXbbfr4vHvRWHb2J52sbUF6KrSsCgEcRdujt6BDhjW41wrrhLQmvbs5JX2Zcj9FcX9xWJhsdB3JZ5c",
  "key21": "4ZpSfFWKeWtmaT3YWmn6ACLKg6MfJ7bvrAUvHHmG4szRRxHbNM6FHZAZhA4MbZtgKVKN8rYDoFLmaPWFWdphQ26r",
  "key22": "41w3Ash1dkcbrommP4JudYY9MXtBDiZBFN66UUCgezKPdWpw8NFnAaabD7xLQZzyjTogCELUhCRkyPUeZBgg596B",
  "key23": "5wCvVPyxDFp1XSJXaX3sK6PQD4oxh1bxZqMwsxo1ZgHbiWMRMcMcyULnUAX64Z6pAo2AAJ2Ycqb4DWPuDDLfZ8wr",
  "key24": "3kf9UZbrU6gtPUd1zErTQazBuJs67NzD1AStSRqd6pbL4At6PbVbeGo6imTTo9MzWea182r1qK44j7rsDP9pmkzP",
  "key25": "4p2ensyTuTnr3y2CvCk1ryG76aShP6415k1AkU4vdYjQJyCrKz6Nvvhvk1Ux3u2gFjcHR5tu3RsSn5NGPCKcTq9H",
  "key26": "39HgANWcZMAPdR1hpcSeCQRL1hpXjyhEJLqm3kLCSSzZFcrW6GjPyBBQxFJU21iu2UBoqXk1MJXVoSVSAnZyxdhw",
  "key27": "3oxVEpsc18Nm7djaN7kxX5haJPeof1TS1HArem1LYF1qaV2U4C7drEvaWA4raCJ3YG8d6K5DTkGX5ZS1sQAaGUEC",
  "key28": "2wr5aEgUZsuMemoYYQTYv3ibGYtUJio8pEbpjoNej7pzmE1knjD4xQTCwDx3J29AKntDKVVqczsZTo33A2i4qRxT",
  "key29": "5zU2SdXP16KXmpVmEzVtTFt3KuAm9Dfea2CDS1QKpVFeKNd8ek55mzQ2bmaTNn4jrwuvLrGGVKh9P2e4X4xzyhW1",
  "key30": "29fVyoeZXQ9ffbZL4o331fKjiDHpXW8miwKh7gMa53CBmPhhBhQ1j1sqxrLQSnn8Jxqseqyct6AjiwnX5PD7tobd",
  "key31": "3MHiKp1vEVhCh3DqSsuXPvRLdQXLweN8du6XdbmSTd2xposBQ5JzWqXhyDDSrnWVzvhrYdwb3hSNymEnpKzHEjYg"
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
