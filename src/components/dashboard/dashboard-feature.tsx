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
    "5i4BdRdiAvKnWCXwRhg31uti1poXNa6uuUqYsQS3NNbMUtk8pzNSWnKgfghSsD7F9FMTm2rRU2QUosMHncFzHqQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3viCMGGsAkvgVNhoRrKrq2WWbdS1yWd5zGkewDFyE6wFTJ3C22u9qkNFoPWqifC8RPNyaHW83TfRjFqVCHiaiL",
  "key1": "5eivSWJRndgx5FwpSQGrXzs1Z7nC5CPigfX22Np4HwS4Q8XcpQUs2W5RbPB71vdrG9Sd1HGxraWpw2G9hyT1hRnp",
  "key2": "2525B2xfXDb3HD7HmU5cPqfp9AEZ4pY5GAUKXRn2wGy96UjBMG3s8ron5JJDxkRFB9XUuNadmsm24bvyNrFRjpBz",
  "key3": "Cxkbb1d9Sic2QxZPym5eVRvYyYbb1yCjuaoZx1zmR54f1LsXeTgtdpLxAwkR2yV1asBBYN7wXdz9wUJaDE4UXxZ",
  "key4": "2bNcYBs4dmt5EszKdDxxzj8Tou4PNKMLJDHroVaL24bjaZzvNSx5gMrWJHLWtJyMzE61o5wYXuVcqr7e6PhsdZgd",
  "key5": "63Zx3NeJ8iaf8y7qQtEX5MTFNtmFqHW2uiQ6xegSHRsv3ik9cmAayuL6xC1xJiNXFzs4xP8GnpuMtJFLWwqdQien",
  "key6": "4nwfenJBePrtpygEjpKmnHyS7vgr6BUNQhyyjdaqUHYk1yi4syUSJQtdTT8FKhwFNbHTvhuXdNYk4R477CfF1rLv",
  "key7": "2R4CQq1qYvgUygMgsFXmkCRRZUKMdgdk5DbKE43U6isPQqdvYWcb6ySqEQ2Q8NZcfzP9U3HJFyzdfQcqff34cJCN",
  "key8": "5uMjMbue7TzcMJbRkWRtxUxQdtiyHgUsabr83SSf4Jf1s5dUy6PRbdQzvZGAvExTbDK29HiJudH3ToYVddVdvubK",
  "key9": "5ocrFjRJuRqK76btZNGfyG65byAiGEw92tAvZiQtn5hEBRrjAnfMkwXXV7RE2NKCWDK86Jk8TdhdrthBUytQhzVj",
  "key10": "4F1cd855AtyBovJF7Au4tsHRZRiLrizd7JRpK71GvQGmasAQ5Uu1sSmSxr7ZLUtPU5mfxCWktNyNWbpfitzgb1bz",
  "key11": "YCGQBwk9GgF5MSZ11LQWjF1DUv6UTtgTC29PpNXmCE3akSHeAVfGYpauiEQRgzQa7Eg39ws9UvsujPxt3Gcsp4o",
  "key12": "47avxVwvfPzfTPa7oVwppw8kaxiXizNsvjMaDnQczSoS7gMJgGdJPi3eQ6M7o56zbc6e6hcbYx4tupkuRZycqdQd",
  "key13": "2ysZ6c2nwNHEqrkMXtfVqbriHThD8733Ms5ty1NLxQiEow5UVXZ1RNEqBYTBukdC2S7NSKdYst1xrmvBc8rfCfNT",
  "key14": "46fs3aC3X13HN3en2pyPDQ9Sf9jVgcZU6Mw4Q8CCe9pd2BFSSe18c58CjRTa2VA3FxCzkFHhFeH6QFG9XDPpzPyh",
  "key15": "4TELdmE3QMTcKfnSBXvo3npSAxYXxW5YdoE1ubw59MkHnc4m5ijaAoepqL3caXVcxDNAQnnzUGDCsEVSiFqAdVVv",
  "key16": "3bZmNMPDVWnNn8SsDmUCmR6gpeyQ2iUBSvKo5MuMCz7cjG1WwxBV5im59AcPmqH2Pr9EFXbsY8fxz4RXhMozTmkY",
  "key17": "5TMJWmEyR6Fwd1wrNr2W7hekdcL1QNtfpXu3FPitb5AX8Y8Tw2t1souSN1DTYGauj7NsLoUSJijpQk2fHzBH2Kum",
  "key18": "3s1ZAqZpssR4ncadHC3jg1dvhprwJeHNbhncRjNQCrYnM5bu1jk1ZaPof6PqR4Eo6wesA6sJ1NejvfsCsPtwbvEp",
  "key19": "3t1LBwsRd4dRGyUBNiUXkvkTmjGC7pNuu2FxF4sVgv7jDif3EmrqDsCUJVJfihpJTgkuirbfjDbwM9CbGdwVv1Xo",
  "key20": "3moxZA6uq7g8ErCD4cEP4xUVVnrqv7Yhx9URV9wvEaMtSbachqcbrtfXg1E12tTB3LDM7aCXCRbPUBuSu9koKNbU",
  "key21": "28PZKBMcpDfu34ejjfn6kDn2o1bgZvznLwWrfpVd9ZJu7attBdkVGZZSjPnt298rMJbNzLHvksGydYz6G5pY5Ukw",
  "key22": "2dW69uAt4vLCUWwoqfFF88as39EUELhaPmfKn3rpcPn1L1ZGLmiHGuPcCswNTabY1gnizFuWPXr4eT11yCK2V22V",
  "key23": "3iH2cbDe8gZozJy2VCjgSaJCucasqSXoxo8qVpynD3dTSmYanYK4reoTMDgWwxuieAwJgG1yQY1sufEcuiusXAuF",
  "key24": "2hnBJrJQNBNxeyeWmec2P6xC3c5n2ysR9VbVvzoHq5WNB3Av8XHHHom4JDSKVNXEDRHhuny87nNiS3jPEGQWdamF",
  "key25": "5psh3AA5dboS1DqEZgJRaV32T4PyiWF3YaHs8MbSYsAnP2yMKqcWF16GndFyq2NSCHJtzJTAY8Zjyc7CFHCZXPej",
  "key26": "wTDLhQYFdiuwciPSm8rZpYNNpWPJb2WCrEq3o597eeA7e6JA8oWZE2kddC1RfnBW5yG5PDgmW5FGM5n2eQTTXkf"
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
