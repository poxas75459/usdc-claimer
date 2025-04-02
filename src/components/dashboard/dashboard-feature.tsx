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
    "22h2oYMnXBYZkjNsUYAdKf21wXvmTyauUwd2f3QDPPhRu8ET95q3PqE87Z2sQq5SjKuzHSqgVq9jbkSCv4zZ2ueQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWWoHXVpgDbkr2DSR48gZC4eeMYvzJPFRnYa7KVJzGvpZkxuUvXAj2aXyyghn5EquNSFDjUmvJzjPDH5c41vV3t",
  "key1": "2QNhCXxmFnCe55T6zMYnXxizC99heLibCkmtQjzJvL9ik6jNdpxYBcVf4hHtwam8pDd18NztaKnxjuvLDLWVVqSe",
  "key2": "29WFdPhC3B5cZuhyDRyDgssk4pFYS9uNzCL8M1iZhhN1DP1XpmE7UiEDdM2wRodcrrsb85Dxc5cXVXQkTsfFcE6W",
  "key3": "2m5NWDv2KWkRPyn4PiBaGkd12Gc8LG1c1H7TPpnmP994RKUL2CVC65LSHWT9DMfHwN2wgxTrjkvDBqusx1GNtXSz",
  "key4": "3DdZKTotUzduBdB36njZFNJ17Rbpvm5Hs2C5nKpNg2yYamAeXfcJp9NAfaJagTca8Jf6dPrQT7RHvXrTFdhdibrf",
  "key5": "5oezihYnmWxJNsTbameCr4M1dGnc48z396qJBkfKAKDMv98EzFZsuQzvDuNU4A2z5jxA1onwbJPkUaZy16GwYgDu",
  "key6": "R7dyj5ko6V5WZHe7pCyw2Djpr94DmZvPpwefZUfextogjNVmXhE2YnTPkMwTXEgU4zB4QA2TSRuttBfKeLbUgz9",
  "key7": "3BZ7pHUguqD7thqoogWX3yw6xwpEkf5WLjjj3NYLn2dGzXB4BpMBHWz3wrJ7jo6UVPr9tHcUH1RFYRz2n15TPwVu",
  "key8": "4oc3RrWwp5Pa3KDNChePpaTFAkRpbJijMWBiRML8KZhBLhzALrThiypEyFmDyuBVjstqkSfvUwQYShYStFwYE4NP",
  "key9": "2JFTNSe1oTm5hPJnT2RPURVEwGg7zZKPwngt4hz6ZLeU9aSo2EHmCTM5NXfVYiabkgYSaPqHmFK4pbJ4nH3sfzwU",
  "key10": "u1vbe6mRxxi7J4tWW2KiCgdsCBy2p6AiRTfWQt8UhEqUvaMzRnTuSEexZP8amuzS8Z12A9qTBmW6PksY5h3EfPs",
  "key11": "3uHtwk2hvUpLGDi4i2otAYCVh1EqGQjeULYC7Wo5jkeUKjjx2JxFHzeoMGzMZccY3kWtKdmyTeAcgyLrmcz4wuZg",
  "key12": "5UbGnHKg3Lp516aUUAdXHfkFEnqdULvLMd4Yx72LSdkK92GAYdA1WwxYbCPgL7wyGypSGRdkVqG2KxKbEWPWWrDH",
  "key13": "2oaB7CXn7eDKiuaHQ1mhyfo46mMtb4StMn8hsG3hogpPM1FV3ZUbMeHQ7Uoanw9bNE4kdoHu7WwVxSrUVzHgMekJ",
  "key14": "4En9qYsQzCRXfXG2kibN4WirYsryDLwNUYkBBwiezSn8MsRfCm6FeMwfZLMLrR3nnnxD4uigm5Hk9tyWm1yPaE6H",
  "key15": "3VMtRbassBjehraMRReM8s3RNb9VSSQoHptX2Hpr7NerHmmRBtZcoikRuf6o5P2Utvt7Czb8GuTmY8nZ58KHyf3a",
  "key16": "2g2cTqWJsnrmskhy517obUNJMtbGPCqtzWMcxAXNCVDfZp3qgTkVVsp3t7WyjtxLS1DWyttxrtteEeknyRKALmve",
  "key17": "jPDESGSjd9MfxUQGDkoZMWM1JYeEyY3ZEN7j9KpjYp4rBCaDJm8ZfWdYA9iWPYGW65wVDo8TGjdjdD2kknak61r",
  "key18": "36cbvexHUSfRhjoA8neYpXRwGYX1GGe9KD1aVpfanSerKV3gYaqoSKyvBonoz8dCvuQ5C2AHAhgVZwybroMnwA1V",
  "key19": "c561CZrSwbS8ZwmLMPGPzwyCKvY1XAbDdmm5Hcp5VzC42vAEZptYHSHv2qA5pF9chWtvAMji5EP281ctE7wmgEk",
  "key20": "2L8iv4ZFcYtiT9UjNEawf8E2BD71t1jYQ8Xf9jGhA9pbsVY7TQUwEfHUy7qnDhGzXZMSwiufHKZNB1ZhELNscaH9",
  "key21": "q7VdKYisSsP6fKJ1uz6FufQdRCxRUMhtA1UWM91dkxmEkqFR1r4c9axNQ6oqKSf2ztouMpnXynmhaeqVFWPCBwG",
  "key22": "3yHa5mYLHu3rp4Gi2WdDRBFbU8uiaaHbmGQ1CCpPSUYtcNWmuiSJyF1M6z6tsuzUyKFrDxDs7w3fFd15P1xDMkFz",
  "key23": "2oBov3VGSauC9539npqCv2NDN1xdYjVKqzZnQgbmaQXYqh2ktkvrqt5fLr4hT9FNL5hsEguJjN6r5uSC3ACTzCZs",
  "key24": "42BPdy7PS3ViRP511sCVBrVZCLqyziJ9fkT545BQG7jbXfQGHjmYyDetjCZ8B1u6Ta2XD41vtFrawWGv5XbsMdsR"
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
