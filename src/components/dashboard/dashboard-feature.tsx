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
    "21nz2koVmRpFLszxNQdy6MEwDfkqgUwE67gyLLPTVQagSx3ro2heGKmxsyJDgnmb4hRLYLW2vReSuoodemQaa4qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kq7ji35bqfbGj3MBvm6oEWfWHDZjuPsHhBunTobLBNNAYXJEcipTJwdX31vNBguFjqZTCRyoU3HPqm5Q1h1CfB",
  "key1": "5P4yY3aTUkhck1ezs4mb7Ld5Y9xJq5diWELsGjYEEWZH2KVkC85PTv8dNUxZRSNgH6sVpdsiEovdGLK1suADYDYp",
  "key2": "4JrQL8N77gu2DniXTcBDmrFRevWYc4sBPciJcuhi7Bb4NhyXMrb4WYs13fHBs95nDMYnVGbmP2X5mDfrMdjmv4o",
  "key3": "39JagKrvL8xLoguiRbFnjpEPBD3Jtjmw8cjXB4fwPFaQH1CxZA8Y9DQqSroCGJthVwxSkyUeNPNNa4GKCcXbRuw",
  "key4": "124w1xvhrb8bBR5aQr21wF7VJUCcmmXRMtg1xevKewUGW867qSePK4Hc6uaRt2YJhsgqw4kQ5VjAHVc2fKBpRPqq",
  "key5": "3JG36Aokx2aEsCG5aP43R1WuKHARnnhFQhpeFj3GwN1H5eAeyzvMdkpvuhNH6ZHah8QCUFC5FNUc3uPgGu6RfRuf",
  "key6": "2GEGaX94BarAUZEQBgcPEHDDXdFszVPErd29k7t7a4YZnP2sxFHpsxzdrUAWa3fPgkjS2qVvghfk7LBLHySyjDxF",
  "key7": "4fh2vCdyoVzYFABi5RZ3sUofhXW2ySY7bF7bnR8XYwMdFMwnPvyDNfFRuLSUvvq2D11CrLMXUdyC7rRYkr8tHKA2",
  "key8": "5BNTwVPG87hKGrYSqGZ9mGvyaPnYfhkuntwZn49q7X2Gq2xMiiFSvB6odocenVwey6WBA2p2vjrpJrND58tVV1FQ",
  "key9": "2H9NvSNqw8zgA8bffg7Nr1Zfsz1RWSTwCLZbANGtC5hARETDUtgJ6QktFzjz7jLNxjixhk6kLQnGUPCEbp4toAMN",
  "key10": "2y3tnUGAQrBMSLY4eHq57H65wMrQJ3UH2xqeNrbtpicayn1foKXryoQne76PdP859sRWQnCGFyjT92AzCAsbuERp",
  "key11": "41e9mAH2xzBDMjMYHQ44BpvT8RNNm3dEZqjQPunus493eCX7Ux2qbJFFSDh1XURCQhJU2RrXA2AQsCQRN4LxEhis",
  "key12": "4e5efTHqGoEpCiBQCkaumQac4qHejZcAZL3tWdL2hbR9ynrMKmjQQFsHUWusKJwx3K6NkPvc2DzcnpSdmfee18pW",
  "key13": "5EKmu2RC5oka817gxTfuYg51CmAudtJD9UqSxjBCi3aYZCm3CUzZg1aVp5JYQAVb8TQm9jkxD3iWAcnszknGXpe1",
  "key14": "32Jue7vsy47cEgE7dgu2LLCzVttxzExrtELfsmuifKQWxEBCXLaiufaSbxyP96JvXYTPVfYBvJJxTchSmqe4Ay4n",
  "key15": "5Bp7nWHocSUqz1MJYMHvXZ4WLWxFxiGopJfrbPAgr2jFaNyMYwDAcS3qaZE8UHcrH2XNdaFf2kTZRC4329XLYcuP",
  "key16": "3ZkxcMWx94Lzh9jiTfyTkM7kfqn5g918yoe8hyQ5y1HWY89WUgV1wnLVo7w7NKvaK87ksXibf9gyJMgBsSMiPtJ9",
  "key17": "3SuX35FrwvffHZVdXteiKK9YiqgJhASe8t34gDo1BcPEcKJRU8QBueG1UqULqqK8SmooHGrCRQp2KeSQYUqGhyJZ",
  "key18": "S1bSHEuwdietRPyaMNCLJ6mb7mJPQXoFMTCBHi8zFLsgRod2sctcq4VJeDtwyhT2xnry1X1xLebUdLy1FQrfwvP",
  "key19": "HD37Ny2YPDBW6HuJyhpUJeQgs93q3ofbwXpqX7kE47hyGSgpFPpJ3zEccH5crTxY5s6AHiU9cxHxwdVVkqfP9GE",
  "key20": "2JMvmDPAMyDGanpLVr6nvXDotccvzft33xfZinghxbYTp5qxSdRZpadV2iNDG5CjiAh5uxLFFUzf7gvWVKeR5uE",
  "key21": "3hYsM2JZFyALsQpYU2W4YCZKJwBhgNkvfs2yQQbaYmQY6QaEicmsvBfNws1PSwo5KKUYNV7yQVJbVg3jFeXJTcHK",
  "key22": "4bWwqvDweqA9LYrX3pp1mDbt3PsLVqncttXtweXFRdv5LGaauEdi5YhJrsogxF7WMomDF4NfwbZ7tnFtmfQWDU68",
  "key23": "2eL1194W4KKvgdarqQixCDXMyRQPsxWyk6j8HC1SQ7d2SXpR1SK7bGSG5im5mLJYJz2RaXAkoedhzCppTEmRryPk",
  "key24": "3PdGe39nJsox2Z4KKFfwnduxRxrU4yeBxH5tWkyJ8F8S9DM3m9f6pNGS7LyJsCmR3cteWzUbAjQZGoDBuEs9e2Nv",
  "key25": "3TQmVNoe4qm7SeGgUhMM4Rh8dxjZrh37Ji1AMaN3GzgeDpFVmm3KBXbZ1oMrEL4V4LyFMSSbCasvQTQZRXyiUxT2",
  "key26": "65uPrEeQi5XTsmKPqvgnG1gjLs6KZndLxjf4UfPkNNqPqLpumCYaRqtovF6TbUAdBHaKPNdN7NsC6vQkzpZw7iNK",
  "key27": "dRCc5ACk6hw9ZaouocYXfaqzcJHwSaTLMrrFhvnkPowhQbmowkw5CJV6L3fW7Q4ip7EKxAWfXJiJvNDZtH2dDcG",
  "key28": "61B3mubxdxJuf5CBZ6fTzv5xDoTXiqE3oJEV4mb7PSdAybQuKdSW78hsxr69RxMBusYwKETqYrZUEpZpxdw9ZD5k",
  "key29": "34hx65usfGxmNyZpgVkWcf8iXAXM8AJhsxifxtN7L9gNYgVdSkYQgvSeuCZ9RzYStJAdL95sg894Hb1VuSYkfVYx",
  "key30": "2E83zSME4YSGv6DPU4XG6BUGD4mPDC9xUqYPNsYFNiccpQu7keXSUS6GD7rLBSa371DZRuUWHTHDto3gVfdfjWRP",
  "key31": "4Evgqi6CWfekaSPzE2GvUQu9yYLnQkJmfTFWjn4N383peXLNvcZTYRDywFfGPJ6gvL1KX5DuFPr2fchovDbyerxn",
  "key32": "5d9Ks76NQDTjGDB7A2XWk8DwQ1zZYRLFDLqvGFASisdpsaFbwLkMBhQs1RjtCEoq8eEUHB9cgkoMvBVgdKtH1j6f"
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
