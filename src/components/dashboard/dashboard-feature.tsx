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
    "5tsDQZ8z2syp6zbviQnaWm9ZBrQSxMyuLzGjWAePPq43sCmndjSkFDfjW76WbgbhAfSw6zUAxRcd9gihqkCgHnA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nnyvKChAzVrdhio7fJnPct7isMTg3MYudPbcxy9nkX2fXfo1FjV1e49mfNNf5ng1EmuzPEf6gcm3XJzJhghpE4s",
  "key1": "48UBBcGXW4FahGyADAkUpzSJhrXgjninRyVjxUN3nBqCpYYyhfML2KtX1d6NqbNVqpmZyEffi9eNYKiziy11xGyS",
  "key2": "3hnWVTZxnqL2WYeBWXwPufJxQYTDxXKEVjuqQdedWfy8PSg7cyp9mM4WG2UMms93WFNAc3qX6SLmFaHEnRvTcYd6",
  "key3": "4dBaSsTC7tB95W2JZrjR4KGoqFDqMdd7wZXTtJ4D8YoQJwWmPGbZkEaRfD3jUbFry4bPjSbwFYmwLTbYgPXkvT8K",
  "key4": "4ysxbL8jXE2Mpqm5YnCRdqF6nD7fxjC3PC4LhQZxovNWfZ7jB9zy75A3dw2bijdL7XwvFxKC3eYPytZTXqNyNJ8E",
  "key5": "wzMx8DohKrco9XGh953zBQQgdaTox3BcK18Sj42w9iTvTnyUTn4Ae51haDptXvNajZyoiVTSgMDrZg1vYCwv2cA",
  "key6": "2FGoFo3Ttvgxw2JbNrSceCysLHoXqcvsA3W4K39yBAKiZAQwAQWpm7xM8owdsrAcpudzMXaXVrB2HnDC5ykoshoG",
  "key7": "JiuYg2mHAEVE8nwC25GiCy6s4jQZE9zQHcWzRCbWC4roYyyYSk67QNSFLDBsC9negcbnNZrEZteHGFx9Vhiow9N",
  "key8": "4TdV8WnSS16ovYA7LAwEtMyCMM29QgLkY475N2wLTj7YoSBeGCN9ZMzjjCx58rA7d5JX6Qn6kaGF279uBH8B7VHm",
  "key9": "4sT9ePrTNf9FCC88FX2FJeCkPKavQ4MxNr7PPMchK94XrJRHVZFauDWJpehsN59gN9eg3CcAEzjC4YzweWDn2Pt5",
  "key10": "47ZgHj8vGNWhCgL1bzLZENaPYgiNpCK3rcpu1obNX4TqWQGAVMz9qU7r9sXW5C6EJmseA7zVdxyBHUAn4vgNUgow",
  "key11": "4K783ag9Aqb1U2SfVV59dWryAWVbGJZpzGkG5jxtZ6nk1DDDmo69ufNRhiNj9HqXcfowa9Q7T2KdR4T5Sn7yaDBA",
  "key12": "38MLVyWq2HD4Rjdetb88q4V4XNHLArPDV6dmX8MPrWm3YLf1tB9CaaZrRZfbuDwgJibPtpTJBqb7VxhCugveoEtM",
  "key13": "5TNpd1r75NX2TTfZtLx3ZscMDVKrMot9qenTmYjs5Cjdw24d8BpfQH5HL33kMRk1E6KiGtC1vqwqBs65pMGoGqn6",
  "key14": "1S8aDSxvppwqkwefwR6WyFKqAHFa2yLy6rWo5qaxqqyDEkteLz4Y79VehaVfrE7NHDAq6vZNmMv3Vvc7DKrNM2d",
  "key15": "2JC6xbc6JLHCwcDCzLPWAogKhZRPsA54EnBDUgmStixrRoxBggH3g5nE6LTokMNgqvYZxim4tMbsBDJevdsG7tN8",
  "key16": "5wgvytPyptnuGNeNCGiqNqKb3DsfbtHskszxJuy5ySMfTLXdqxyADddGUiSM88sdE2eJueaXVGUGhjbTACrLahfQ",
  "key17": "4CRULg2DiTiiS2XARqKLFPYuU1oQ3ywSCYaDFo1ooSPk8oVAi2ZtTNYQu91WcVa2gWPbYyuPCDyTd3zJYaSbPAkw",
  "key18": "22WRV8gksKzVo15wHS6eYnGDJ8Yb3EqtGMFDkUxL2Wumzg98RXdofCxu14SrBN7xnTggCGwYjXTovMg95ZNUNZXc",
  "key19": "3nLXhEfUFXPQ1ubjkXqhEQNxtDcYW2JK7eEH2WkdeiEQZzfhuL6kWRwky4JTpWDXaj172xvNZXx82AP6XLRbiePT",
  "key20": "iZGJ3gvxtNxjih1LEPTM1kMYFweuhRrRhmk7YpfxNUztninqrquhBRTWhemwkuWStbdiCTXXCG81Z8ysP1M2JTs",
  "key21": "4YKAs2677Pbt1eoAqhdqVRHrjPcxovRhzbKPtTZK2VRR7ygcj7MTQ5ayU672Rg22Lc5bZmazqDDPGrNuMrUELrKq",
  "key22": "4iCkmxqmPkWL22cxk9baAvXz5o1H6dK2WDticwZBPB2vn4nCbheAbvASiRbPSNPxgB8vZJAC3ijzm6tzvSRENu9K",
  "key23": "5dFdXXE8WnB2ZWkpaB9etnKZZHNKQKNG88tE1kNBYMkSuGpQRUNreTFbW3YeW7MW7qLmUF3Mi1cQWxgS3By1iro6",
  "key24": "4gRcJrm2NtRLMA11dvGjazz3uqgV8CBbbP1afKzRZdYmDwqXZzZ1MNVqxKhZPxJMNPqV6ZZyT29n4kDoksQR3X5P",
  "key25": "2f4YCdGkRq16dioaqrWJnjKRnf8fo6TiZqXoHBQLmL5FVHx5BxJUjc3qiokbGJpvfiSgzZKykYSs2pUiFK1mxosx",
  "key26": "2VqQGzdw1TTNrPrPCYDK8Mw7mufuKgW6qoggbyrPPoLLq5LUL1hRDbUmcfxVboXQk3Y6hKsGRce8ozoP57grj2Yz"
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
