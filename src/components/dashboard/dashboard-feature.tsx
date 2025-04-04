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
    "uqc3qQZF7Ltwk1icguUsYucynV4PH5PwpwKcAdT54x7CNBmYDeafSNfWfFrAdDi4171tTCABr2bXihqpPr6hZqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hT7FK1MPrixVk53QPVerHVCtwUWgZQjFXoWd5jzjuCYnCTpMfL1MjH66yXuTsJANvXYRa4j8pMWd77brNZ2Yf9N",
  "key1": "3BDVNzTX6K56xmtDAyThCNzdsBE3QN76mCYQCXbpufFQmUbyVCVfMzbruqYEzfuvPbxH5adJPy83TdJ1jUmsYhzy",
  "key2": "2sukmCGsgvX5mVpPQRLat4hEp9iGBB5UadZsjGWf6pu9En86qtAqWfzJDzKouC4F8FP8EEH8sarC9fJgDAZoyLFV",
  "key3": "2vFEggML5JMeR24m14WP5ktYtooJHMag198bDopKGSPywqP5Lx464S77o2PPC3TXqreNHz7eNjMEu7mhsxKE8gra",
  "key4": "3jwq43YPnpuvL7XYMSehGqrNr5nsmNPu3GTzxAx5ABaveTtAGyCvdbnRK46ed3ETdPufAMjNYrLqLFNDo4XGXLAj",
  "key5": "cV8JyXPtFrKhmwoT7Txzry9hNvsnw5RBg22Q5iN8wR3VeANh35nBX8SdGdZc4dPhY7kucmLL7uRgeuXC33CZgVW",
  "key6": "5xxonUqGe5AnZFMQQA6xxM7tuJsx3o4Q3RrP8QL35oYd4N6eVAZSYR6qzTetMSgLY4focwWZsFbS5PtaG8RrmAmy",
  "key7": "2XQxusXmYj9CpfAZ7xmbzNPrkXBRxR6fd2nqu4QE5EBWPGmAEuUTK97qEBMgSpU9eB7VbHJ8YJUBnZpcgMJ5CSv4",
  "key8": "2ZCsHhWpzrEUaXTk6erpkxPVYZ3ggw8RbqeubYvUZrrjb8VZcQozyubd4sX9XfTDZg1EKmEvi7KE2wEcNQbTdyN5",
  "key9": "3fYfGzKzUJBKnh1XfiiPmwr85pto33aMM62SnbswKZsmvHpUfq5xuxAzMJMzFrW5f63PtYumL3Vdq6HV76HTQex2",
  "key10": "33VNiibqhBVkv4nC2vRf6fDLho4xmwDtqwLWkNPvX1bFhoppC4ret3H5pyoMqP1tkf5QfVhozDdgH7ngeJN3reC9",
  "key11": "19a7pVPQaP4kxSJdmBuq1EiUQ8TXVwXrb9YkvN4DrLeqY9SAWVev2TKLEWFcW2rPTKr8tcuaDJ4rZjtKekqQ9yD",
  "key12": "5HvsMi686grWd2o3jE3YNErSWBugS4qjcHi6JT25TUdobtqNT1A4bw9X2xYBArPMZVoxvXvrgB343DzsH8e7HqaW",
  "key13": "3EgytvH41fLcKhQsjvgReG7MtPyntWpAquXmgKqP3KD4orPvwwou7pc9DFrmQFmZ4Jb1CT5qFF1nWHznyTmDBbV1",
  "key14": "4MZegLLTMGDx6SdQPTgPZzvTBPUW7df2YswCGhWavG1qBokH9VWF2Nem26S41AcuojqZ89N6jEfjdmdjfeeeE8ZJ",
  "key15": "3njXnJ3dZqV1VPxfRoqwq54wnVXtZNo5VSsEtwFE3n2sU1RkHhKiPGT6z2UwVHAhnTgZJk8cVqAgER1Sy2gsxftD",
  "key16": "2nimvAk2Jf2Qe7J8fHaHE2NGUQBmD8L4LcYCHRFMWE2EsiM8mMZ9edJGB5KCoHWXQem5ortqJQZtUqym1c3rRBLQ",
  "key17": "2MDPVhmShb2vBD769AtgJzjZWaNL5f1vLQRZSAJ6t4ptLbJbAASxxjyy7WM7yviwy9sZYa3ZgG532y4iJt9mukfp",
  "key18": "4RSZnyh1kEgpSZDBjFAfGchZU8aVgQw6LsyPAps7LLFo3wNdeaw6LyfYz1h4vMTCzkqWW4GUru5iirxgZ78nX1dr",
  "key19": "4xZ5DRc9Pds9Fe98VKmWL9jGFxex4TPvMqBBNAUU59THE1H4atPvVPZuKDacWnbHs31RB6CsCkNisLAcxMhAv2n2",
  "key20": "3EPnNzJQD4z1ubcr7gPDZC6yWiNhQNfb2ojnKGpyiXarhZNSPzfuvhcNYhVMdUh7PwSAMPVckStzL3GRsBvbVEwx",
  "key21": "5aEamGJF8kKbtxXEtRdYFyRBrkXxbxpCTdSfddf831n2WrfhJ4ZMAoMyXDRZjtXfX86r9MEQef6VPeF7xYk7XwmW",
  "key22": "3uu1Q51btAWFgpAYFa7UN8g8C2yP24TEYNPRw88GMJNqCHUY5ZtT8LThPjga18ygivGwRuSGFK6YVWZ5W1fTzemm",
  "key23": "5RybKqFhtE8twqQduAFS9MLUUZTo2YMud2hgQf1jtB9SLRMBNWf3ANXfFAPW8vqRCKYEK2r4UbHTSosdBwkKEZ4s",
  "key24": "2YjDAA8oLygDegkWv1xxvwz63eXYPUFEsTRYhhn7UEhNnJayQAospznfmpYjAEqd3i7tNLX5nz2qXba6MubeoNic",
  "key25": "jPLhcGVr3wZ76bTaZtwoKrWbfvBN4yN5yytNdAA63VmzEekgMMDaww9qxebgaF12Lp4SWFbSYjHXmbJ1GQyL2tw",
  "key26": "By6LamZ8PRxgZmfhLKfa4t6RywTwRc1NMdi4HtrP4YzdcZuSGai1pwhkiD26BvnMhD4ZWyWFPPjc7jQcUKz8mp8",
  "key27": "4TG2kZHf2VgunBNNuewnZmBS9Fzfsrg6ZgJp1ZkGWGEQQEMUef4HtQ5N91Bj1rmfE3Jq4YBtzq3WGWkTJJ51uubH",
  "key28": "5wTVUfn6uUXd5pWshntV4u5vpREE7gJAnyVnudTdugMGAmwSJ4oEyuPLJrxzoF3K2wRbK97skSQAWrquWu7tURd5",
  "key29": "5HCdu5Nz8TUkygqJyeFrRkDeyHdrmWHzwv4wkQksA4KATeth2EECQ9QggHzNCmbMEhov55CGRLK5FN2WVRsGJLf3",
  "key30": "2J2jGYVoZxbX2qria9MAMhqF3cD6tv7tSazud6tFWMKjmjnCR5xu62ruMFPHzLznqovPPuw7m5JA5EZit2dRCzmi",
  "key31": "nivBMRKWCf1YwwJZTcKevmZettcHJswpmWPtvn8nW4scSdr3tqDE4C4FvX11miRfum2scwx3NaN7r3LociEu6NV",
  "key32": "U3aJEKEHAPD2NxPrwgHSdNh6LMtRjCuqfFAMmYB8FNe1BKn6C7qH1zsAuWnHXBGcLm5Wcq6zifyfqizjZzb81dG",
  "key33": "5GVk11yApusRDZmaC3JuaKUpd7LyEux2u1rvYNamZLkYmHHhf9LEU4rbp7obrNkb1FD7uoq9ABSW7bCTURb82eHV",
  "key34": "3BP7gQVmwZSAkVuUXJgNjfKL7hAYdH4dPmrkF9WLDEJZ56v3jvUSssEZLZd5dXALkGaK5J7q7eza2ECm92owN1Q2"
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
