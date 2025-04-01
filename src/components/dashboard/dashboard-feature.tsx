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
    "PsedZCRsF7KX6ARVJPr2y2SozvFRfGymDAx5ofeAY1VpiYKiook8JGFq8QxLekeEUmCEbSgwPXHYieruwhNPu3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quu1Ho8t5iuz9dr35M78jT2Rm9fwtZgRYdDdMcpagdJS5vmm3QawC7wQ1EcSqBDKmHU5SnX9smWvQNXAaBeeQsT",
  "key1": "4saJP8BEDLHtSwsq3f8N4UfKxtN7rCc5sUixdTov6MW545bUk8BrnsYDceuivuZvBExzCGvmVjPCY9QNqgShtqKq",
  "key2": "5UirLuEFXsAvjvgcjSkKnFrHsbC9Qj7jGjTpX2NGJyn9nksGxU3K1YgjYwccteHPsFhsQiUPm4EFtTSyqEZFKrY5",
  "key3": "NMYvqHKRPuBUAWJCsNbpCX3KB7BK3p7hDwd65iBNdjUqxai1CcEVNUFFrCstW38UJk8eXcD2dLy7vXenM4iHhUx",
  "key4": "3A9Yb8dm7wU6aqEwfKRNCSptfecqXGcgZQmsroLaXBVYrbRfMrJjFETmq9C4q12Qcw4Uo8nekjQUJmNo69CmzVSx",
  "key5": "2BzZV3WhZGrHkHxpiPFpm7p1v75iHuPqDS6TeToudM29H13JcC741uaHx158MSKdJ1mMg2zM9NdLbpC1pDXYWbVY",
  "key6": "J82YkmoYiUpFHqUetqCMXaE6ATEVyDfSn9ixnRcQiA9YfeaFUyd8iwcsPXqmazRv2FYh7hu15Dox5vQpptxjb9y",
  "key7": "1JhkypG1CLvPKWv7nNEC5qMWJDYnCpegjNpPynhiapuxpcCE7RiFwsHU8KJKBtpL4SwPwMYeV55qtmLLQ9ki62F",
  "key8": "aX1E5fntbPXkpLvn9FMW9nJcwPHMqNb3RSuQkiNuq4SBEB4uqyNa1cJofVtzKsXaTrQntG2ybhLdYUKARjSY92p",
  "key9": "2Us9Y9BCkiE3RcngGudHEQV9iX3KqgYaj5hW4fdy6x8DpGFS9cMPA8CgLPismpFQ7ZHEgMerfVWQf9AehQEAvqNA",
  "key10": "4kqGWEKWpw2jcZLRTVhEHw5xn7GNoQKqzAWPL55vQUJeK8nQdof5tBUggKK4Txm7YMYJRYkLovytuJCiBQnFVJbZ",
  "key11": "5JKZ64TXPsLsQyFKcpG1qsTcFXrv6qJzZyk7MWdLGRKYSeg6m3paE9tn7VQo3HCUJF4g8GmrwbkBWwwSpjAXv2AU",
  "key12": "4aSs2G1cw6mK44ZuxdKcgRvwpMbwwsiLcVYn79NQNMH7btusQHfonceF5iSAWpTXA6VRyhy7y1zhD5Zvt45ysgYC",
  "key13": "37L6iKoPNYC2ivqVWf3xQtXq62P2XadmsJrtTY9nUheZu9JVAuEcNCABMkXefAwtPrB2huyKmJ4b3ypXJDtFwmUT",
  "key14": "2YGDQHPYaCLUwvHFrbVHv9Bvv3hKk5GH2dK4j1iHuA9ysgn1HYvXakzC9N5pp52y8pc4SjxmZfppqRYNqaxSvJvf",
  "key15": "5Fc6ftDBj9R1wmYj5MdT9j3FwP7hPUFwNFwh63bufiJkpQBhPPNSr9iUmtgqi3vbhLmWQPY7fo77snegNHHxi9Cy",
  "key16": "7ZY5hfmr3oV2wkbKH9mreCcgqCQsAzR4xooGrcF6g95FjJqGySDuYNvczgRNBHiZz5UseTQQzzSRyuE6UESZDmq",
  "key17": "2KgGbNerqf18DSqTWXA28yHJgBAHBs9PjEqm1KKDqX6k6PH1ZoKx9ygcfMLqJravgcCeJH63vkgAPvAuY7BhhNuP",
  "key18": "3y2cmigrWhQ1DLjPfWoEvWN5cehUmv6tcxQJPUoiR76c6hrHxPNQn7Fap25m8pEArfCC4N8WVDpBvEJJhX5VixNQ",
  "key19": "4wMjRfEKRF3F4xcr41MVPNDcEFY6TRtBGQBjjdiBZsZkvPhswCEMryAegsXPPAawbJVyjwGHvVhVngH3b3NVDp5F",
  "key20": "5wJ3GkKKCTPXAwNRwpDQN1AcmaLEv37xtkMQB93tjxfawo73CGpWoxpxxhpnvzueE6j2GmGpf4sWASj4iTmzJUqx",
  "key21": "SNxrVHor5bQf66q1ePzs8o2AuJg9wTwspNLXSZBUe42MNdH2L8FFG8a4s9WQRtZMVLJVxP21MtGHUQbuf4YuN2X",
  "key22": "4tKrdvTqknyJZ1Ppa9zZfCPfGL6cggDubFaAj6zicMjDTNHJVYjwPkHPjQHwM3RxjvpBdqkR5caAizZ5wUjPFkf5",
  "key23": "2qFB1CnKZxoK2AEdBEiCQzzNzcTJAbQEvEmpzYC5Mh4ft9KXtpterWxzggTmktnD5yn2W4k7cY7WockQG42kPBAW",
  "key24": "2H6nQAGhocVt7YAXWPn1wbwK61cqrWpdC1taECoYaVNhh8y3ZpGuuE9AtzJPvchAh1UwoAZWr4Cz7fKwkGF6h4BC",
  "key25": "5zx3mVphDNQU1cfFtBdqUwF1CWcggT6TSk28FbPNtiti8jFosTdoUobA9ExCFhJx3ynXsNDust44nbrfshi6K1Zb",
  "key26": "2yBn65CwVvPktng5yfdLTDbCEkFWiwrQcZDdrLt6BLHTfiqEoXguYCHAVg6oar7ckctXDAq35EB78GxZLYH3mWof",
  "key27": "Uo1QUMQAPdu45xVLBwPKRoW3TxaNXAPgRSrRoNqStZQkcp4atURE3yJDbRkwGp5rpnwAsQZdtbdfAaLG56Q6viQ",
  "key28": "4Wv9zckJ8bYcXYEW6P3X1sx4U5T1qeQNKkkH6pV7B48jqMJQnBFKr8EZaheii3pfuDXmFJy7hmxoqUC8pbeHFrHh",
  "key29": "3FXGxxTcfacL4v4aJAtjxxacr4UpSvGPLEhUiAFnFnSd2Z6TtZveBLfrNffVWRMtewSkyq9ey9A7ovsv7FqwYnug"
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
