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
    "3G4hXE77G5XuM2Dyw1KuWhFcRMJfYVzvVTrJV5QMsbnMJeeK67Fcmnfe7frVsAPNeca2fna9TXc6uPSUJU7yg1Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26daigP4ngJivkpYwYqNUuR4r8PNw31j8ZNCzP6warcxW2hJG9ZjjUcBGeuRko2owWAyW5iTtEAHLvDsr2FhpzyA",
  "key1": "2BLGosjDfGCdPb7gPaGJmvJiEt7oKyPtFnT8526Do1ZQ1MdTzBUwBT6M5EDMoGbpdLJMcfffVJu1XBDhKa2AxpSC",
  "key2": "34GdinGigrLBuuhbhynx1qd2YcBpLR5ZnCVVFRaq1QxJS2qVZVmHuEbBof5V8AnoFwkYvbHguPrPBTmZJ2KEXXxN",
  "key3": "5TmSLoujoEMMUt26xoErcAphEL4XzdVkuEwugJzATqsbsbF4Xe7E8CbfyivwyPSjabGxALFFANBNyf39N5meoshQ",
  "key4": "2iJx6S4hncDcHTa1hYBFTgXj3d9eFnF24gVapNi7Adr7YW7vapdBkTEYfos81PTGAWVtpU3ht6vyHsef6TWw7Msv",
  "key5": "WKL8GFWaZ8FP6v6xioKb56bE5HfRcerycy77UED8DCU2WdgqcHJe2ToGvvpdccEckxQ6WmNRq4YXSNiC413sspx",
  "key6": "2qxkwiUSF53VpX2bVmANcLUEyr1PEHAUkX3sCZXQ8wm1DsQHZFPY9Zk6JkRrduTENfzVNk4UXAhd6SAHp6BRJRvS",
  "key7": "55RqUHgVowxif7JjtySLqBcbnkbjd6MniCfk9jp8VcdtQNrbcNYJp3LMLsCZYX1nSfqYxnpUyqSmqbsBrQxf9oQS",
  "key8": "5QqzbWQQCvUQ4XEXyi1gD796m9WKK1QHiXFy8spks4K7Giu3yfz69Mghs5yVGk8zp33Bhp9yGSryZ3aRHtunKQYJ",
  "key9": "SfWB1bJQYDeVvYcdPKidLgpfSaWosZMgfSK9Mt3Q3PkJ6ui81pzL6wdzXrajFZh18orkk1omHdJr9n9jAw2LLqT",
  "key10": "4sN1YqBcvNzdcWwQoJyBuQszzVGAARJUavvV57zRiboc1sBW54r2GxJoBiFHzSATAFW8P2GN8zKE5in2AgLFJ3BF",
  "key11": "5TK9dCSNgFqE2P7vPAtKXUkL2wK2uPdHLNKMNm7zGkMv9hh38Bkv7azJyvznSmYDEShxCVbYKUZtKac6ihk9PFWV",
  "key12": "3EDnop7nmBHtxXHFWW6NTmipqdbzLaXom2v39ymd9oNEqgKSXSSYK5fimyr7wREsFcJZQykkfS6DqxPyyHMtWsDR",
  "key13": "4GMyueRqJ8A99SViGZKNTmxBe68pemvTH372SxzNvJQ1U84q6qYUerGX13vzgsZPT93cKLnNn7xTiJPhRMxsfhZc",
  "key14": "51HPDgKidZwGdf6HAU1XJFw8whVSYJBaa6smyJwr3KevKa3VjwGwToQgbm5YPqcozRgZjuqecL6SyM7HY3e1mZms",
  "key15": "5vb3C1rB2mq4Ye1fQExHD8svJj83JgACT4bXv3v5DyAqBNJsRwRYtx924F9QovreNHJxF4pZ6j453cbXabA1Cay5",
  "key16": "5oyWfBEWuPaf4wRTCZ1Ese6xa7jmM8N92Xa6jwjFJUPqEFN6xDc2f9UGc5D985r75PRe6rkSPUP6DuqTf684qNa9",
  "key17": "3aJJkLjJycRsDsnLGy2RPQBuNixU6WmxgyctGdnnorkDQimSEPspTzgVDKvjejBHaadGHpMPBAuGRWPwxwxbB3M6",
  "key18": "4DMY1pM7aLA5X3Aijb6ubfiTAC6EW4HjCLiAK9jf245odStjdCFqEBe5wfNgHrNMkLX47D9hpHdgUZ28h5G5NCBd",
  "key19": "5qgkzLuwWPtWQjjN39TD7krtvkZ5VSEogeSHQEsbtofN7Wmq4CZHp6B7B6QaYb6iFtj2nGESHpcCY965dfcjTkQ9",
  "key20": "2FowVT83a38qhGs9DXS59QyiBNYrzRcbUjx1MvgkprZhvMicsqgfdzho99zd2ksfo6EcppdViRbjCDazUFUfjQcf",
  "key21": "5JL5LK8CuS3CTaU4dgdsazwC2PN7A4yM5Gk9ctJdL9T2KTivjqT1pkxoNfuGSEEXTh5UkWhj3C4UsqCBNnzGeZ1m",
  "key22": "5fbYeJcz13eTYAA1PzVe5LSZt8eruHms3Cg19LBhMH5V38NfYvwAgAqpDpcoKTGyLHoihMcAz7E5q2eMeHxs2S9V",
  "key23": "3ExirxoHJ6B6vtAGFmBHoj5QBFEw6zG8Cz6iNFSmQgLdQL3KLG3PRUthjUAm9CoPhMFrFAw2EubEaaXi53AN8a7w",
  "key24": "5NhNtDjo5oenJJUJj666ETde5GboBdUZfaKX2T4cmoM2Sf4RsWjUCL4HXzG9GsW3xie1uYS4srLfWtHjDRsgmodU",
  "key25": "2LAxXroF4o7zAGgu6eGLSJAV92iFmQzr82g9XQFjsBvZZZjHH931GP8Qe52kztQMLZXHWoQKv7jq8K8gFu1Xciri",
  "key26": "3UcQiKUJPMGQfP2XLbPz5z6S25SQobZT9hZVGSRgbwp799b3dSBecQZXgYCa9k3rGBwmsjLBUidoJfDSaraSvuhF",
  "key27": "2XvGJZtPTGUerZMgvVXmbQN2xrG3xZb6CDobhzEi4K8CheGEgAjQaq4uQo7ftQAeoVB9GnvcLXCMk3aLi5fUG1HP",
  "key28": "3R2gHTeLQtegwNTMjjSzvQo4NaRqnJv7GnJhww4AyVjNNb8SeeBixEAVzaRXpgfRPp6ZHYBviYHDkncLcERXgDB4",
  "key29": "3mhRLQgSxjc6wjaHYjv6TMUcMiUckgaENhqaErppcQ9HFEjKqLjG51Tzm1e3SMLApxynM8UdekBm2AWo5NwvQQMx"
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
