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
    "5CENpUTyGiWL2GqP1Cjes9oZhwzCmZmfdEAsW21ixyVvDXNK2vT1HB2XeViqASwjfKxhARaeWHF8W1NymknCmttU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hXAgjbrGLQc1WvC5NWJfHXfqER3C4N5rLGV4hy3n7mHQMmQRYj6CxhtzfFQUK5oyZyHJb8kMhucLETeTsM2BKP",
  "key1": "2N71hcbKf1JHwk4rQ2w43MK9c5brcAcYk2f33jx9PkYuYx93vatt7EC2ZugvcqU74EryeWpEnoUpifAEJqb4QeY8",
  "key2": "5gh4RhCqR7apputsLdXg37xQLmf4TRRtFurzj2hphz2Xc5PdX62KkKEeexxCxgZ6r43PVqibU56iw8BkqD2BC1Tc",
  "key3": "5X1YudVcTFyurZZkJvFgnaj1v2meRJeq3hvhNTqyaM3Yf1ngdSsUvbCzTLUbf8dSy75YPdfUv5FN7qcHQzsNQFJQ",
  "key4": "5Rrdbx6voXrPnzfmPQvmAeU4Pv3KmaG9LQ71PHVuRwvpwUpY4GWupV4iDDKpcq8tV5eP8NDP3dLMY72aDrjJ4Rgu",
  "key5": "26V5QW9wWtHgiQNyE7Eq9EWcCZxKWkjgzZDM1RkcXGVspWTj3hBNXW91oZtcRiWwBG3Ytio9Ep1QmWXWMovy6diE",
  "key6": "5DXMTRfUY8QgvNAKteHNAkBnmpgDdWkbxtTnXB4NuxrGgRyYCHBHExvi2BGqP7cf4dPKBKYQv1svx4ow6vux2Lw9",
  "key7": "2gkN1guMFPkLs4UGH7agGaNgq6RXsv8Jedyti3YTCHQ1s3xN9A22tFMFadUdUxxmThfFpSKhZCE9RM7b5bKmEXUq",
  "key8": "4pcwUBgwFg3bZePSJCQbVRPpJVPCTBhPoovHZKvyyjnfmxsfgJMB3KyaLB5xX4QhE2h6hQ9rMn7ZLBYknmLys7q1",
  "key9": "2MLKVZ5PLuNDCuSgo3CCmhtKJavjMhzo8goG1R5icZ5kEmfyASDbXrojqQx5zXEc3NHZALNpB1ai8BndVtuFzP7Z",
  "key10": "2u6UhUEnN4ppfjWePdR9kTp6PrdP4EzQd5b8JwenxydPcqtXoeiJFDvJKKeAG62VuaRqLHWUSzacjAUNm5g4Go34",
  "key11": "3L9vX6vRueynBhtoGyMx5q1aEMJPyZcprtSi1knR3a3bZyvvTcuVuCZSLW5mR7oisu4z3pKFjCpunDpnxymx3VwC",
  "key12": "6RH8iJyHCiaNM3vakq3ySTgTQodMbADjtthCZZa4oiaEHebPnCvQMGD57xELb6ZRm4KNHMxmkSv2UFMCy3S4pLa",
  "key13": "34i84gBe9Jw5eKt98Ac91odA9zSFnE4HTVPZ8zpdeQMUWYuirWNvFcjEQmjUNNnifXZdToUZQHFBH3RveYcpi7f6",
  "key14": "4wm5nVDB8S5m1nbyiFrNExmod54wxA4B7bP2ASB87KGFHeaqYBej4bR1J2n1Dzkr5dEr77zy4tDFr9wKQujjjbUk",
  "key15": "3gQDfnawuDsUygnWNfepukM38neCrTGRf4xY5Q13eNCTWAKzPbX1LppES1T3Qu5ghXEWiCesER1NAPb7bLx5tuVU",
  "key16": "2wRXutVCjsQuEWBicMDNMttm4NYCVepXJ9xwK9p1Gwh4jg3xg2PEfSCmV52CsW4w8h7ciKNDpQQL81DkM3gpAMmX",
  "key17": "2RDeszm3PjKCzR8pfPbxVFaS89h9BdcHhtCKDkc16kZ2tmGTLUd2wX8qX94rBmizvh8c1y85vFYmNNfiLw1w1SEX",
  "key18": "3FDntFutrw57DgwxoCjHLXkrfPihEqhh8YKzKips5R89RZkDa2fWAwQCZuEUw2k5y3utnpxyBKj7jSH2XPG5BjDR",
  "key19": "2jMPXrwpqCEXqQYvC4hM6XPUQknMexaN6KuJFu2C7C2oWMFmKr3rhbextr4jNmun2KVTEp3w8ysZDUUe9WTjD1Ub",
  "key20": "5czGPQ46Lj1D6EBx4gCpVVWCAfpfGAYKYy7XUFoQJzMRnZmM9GhenTbpjeJPjbkd1ypVxMmdbckVtijXw45S2p3C",
  "key21": "4tLWy4mNR7dCeiQtRW5Sb6Xz6GMxyQCF5TAWP2GFTVUrz3ExgqVoMqn5Werc29nnb6Y6ZQxHDvuG2ywUEvgo7g6x",
  "key22": "2uwePcNREQfykmcvRh1LeVDfRLqCspLn2S29JCuYSWnVz5k73uGyfDTugFfYuu3UBzrnkMx799swC9KdakTWF7Qf",
  "key23": "BiT8Tztb5kzEg26V47SDGTHC3ND51dVhE8sY43fKtp6XrcogPnZz5t9VRB1VueraVoFNtuq9bkyjctqJ794jAFG",
  "key24": "4gqBoSN8oVDbrHS48FMEUkp8QRpXobkEHvfZAcNW4PqZv3YWNU5QgMHPhyoyknZNyXXaFL9Ua6ZsrGzKgEkoUSsc",
  "key25": "UQzcqUbWgJ2ZdubpqKrbDcjZgbvTdLjxCmmjyUGMHQj1H8JHz32PjJUP1cwfJvEYMCuo1XCubqmTTfbiJydAqAy",
  "key26": "1uq5GxozqRQLsZVyzq82QZPzAUXE9VHaX3BYspbW7EXnx52LgWwzfwHfUeddNiy3jAgT7pKffgDeYzgoweJTP8f",
  "key27": "3488sVdJeABitzB23CrssQJZZ8wnVTKEyuEfvZUZNs8Bvfi9r6gD1odrhff4j14MMQ9pkBiQRJfgKvkm6iBPCgbH",
  "key28": "4aX9bSMrki14DksuPyNjWxGzL8Wf3oHNwJFVo5Q8ynfAQPdPbKQ1wLTja6bz4bGCYkKLKpX5xP4RHeMw2ZUxY98a",
  "key29": "4eB2vfU4ocG9HV4bBk6hoMpgBg8924Fj9awDMH8AP8nybMUFYGAJDbS8TTj9PDXgnsGHGzaVUHwMS2yecG21gtqy",
  "key30": "3FZJbCcShWErdKBNy4AQyWjm1yGwuFDq1vj36N5Z8vCAd2yVLV1PYVWwuj55SnzD99NeskHgBZeofohGR9wMYq6W",
  "key31": "4YdyNQ2AQmiavqhM1SxzrFpJrwgz2AJeja5WBFrUuWmXG9WtHxXsU6QMpKGe9aXA8wJ3iMqRcv78QjDDRgeREiwN",
  "key32": "62xST4uAPdXPrpRkRP1dMemfykWkSfVqGvazKtgkKWhChMAkC2bxPgsjowRvdspnkWFsHsKup79dh8cMgdZVPZCc",
  "key33": "4NTkWo3yxTiYgTWgeGPzg3UUWPPxNyQU2w9vzDCUmCkh8VG8CMgL2S7F6nJcvUHatCt88A9H56Wzz6fvWi8YsoX9",
  "key34": "5h53Bk2q4kJPfUgCi6pm5MY1SMMBcfHsSUBmwypN2cGrKzP48DHcnXZRAZRFEZ13cpdoBFhTr4PusUYMqKraanKi"
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
