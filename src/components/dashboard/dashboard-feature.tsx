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
    "3oTdvvdTLaCdJ66bC3sXCdjDvpMGgxBhwnsujEX5XCVWXQv6Z7hLHnf9j5hLbeN4bJJqqABPpT29HtgAABCN4QaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzTwo3Y7K66GeRFub3z5EM2HChQLLUyVNQNZqr95pjftuQX5jJXS5zkctPrxYmkVtYyfst62iu6gezFCtaDR6WQ",
  "key1": "51YZNnCxaWVCLg3kNjihHRSdgUY7UxYCkXFFdqj17F4rhWHm1Q55BRs4hNHdzb4CjqMRMEqygeaYygoyHfUQNaoZ",
  "key2": "61YsJKyqBCkn9CyK52AaPez5ABFSNoju96mk4YrL5CMHjmaZhysGQko1WPd3vM2N9Qsqsdc7QK5LQqECyiKaxWC",
  "key3": "i5qAfnD6mJNBMBnkF4rkc2v4YJ6xUQmdxrioQZSwqbGgvpjN6GtDuHfyvmCT5nQiuKfRVRUbnZPpJsbQk3tJzpY",
  "key4": "2rARboVQAgRuQQ56yCABH2rV9zTLje9eAoAe7EoLvGS6r7ykiD4oLJxyC3CQLCwFn9Sux1Prm9wacTKsbS3F1rPD",
  "key5": "4Svp5NN2eQAqPUC4DeDZhjg9Nf1HEt9vyd7nrBTDtdGU9zD6kjmMEbBZtn8L4obuRJ1nfZMyKDw7RdKTV9wyEiop",
  "key6": "3JxaykWVju4mVMDtYLG7LcwBRHxkNKG7NktiTntkCiKuc6Jyf53jvztJVVwAGYS2GMBcpRGveL13PC6CNd2EiyzG",
  "key7": "4vnBP1xa1uCWnHfLVjPz9HKiY488qN8inhAn87qmCXinvegabaDjKVtXfbXm38PoiVXptx3n7R2yQpztpVfKLENL",
  "key8": "4zvpJ5NJPfGZBdoK4kxFdA5tVSKG3n5SwRgvsjRPK2TuT1FGRMLxhy2rL7ZsDoWSzomKvu92usa841YcZNg3VmaF",
  "key9": "4DRr7abh1SYCMpQmQRvJsRTsXQgvKgzMmWJYdUU8rcPpgxfS27H5mBsRtWVuGTJaiP3yxm2NtLMuwa3XtQWBn1GZ",
  "key10": "238EN7jYaxHJdisaEAiEYXWREpcyqTuJo2D6wWDRAF4LZ9wroTUiqrZUwd73PwumFzh9k5CnkXcoqUcX7VAktfLm",
  "key11": "4Bh138ZFL7A4btv4xKnYmoSC5myDshcEj1GP6dYKK529UJAggqSjmGu6K9GxF8aMQfowDS3STXu6i6kxX9oBSmMb",
  "key12": "R4HhGzV5JFsxcP3NuGv39o5FPGQMp91oPRdcmg1YQFsVAbDM8dDYznkChcrjLKWoqc8DGBoKyPw9kSNx8kXtfNa",
  "key13": "5DxbNytBvQPFL2891cKXt8F6g2ztXmgiXKSQhjPDuUCZzByL3Kun3gcVoHeU2f84KZNWNMXg1gXR5fW9YWW9xm58",
  "key14": "4vp5qjHJLxtXYeEwHq5cprMTR9J1XAHbhCJYxPxynotnvZqzEPTxnjsMEMkAyE8zhSLJJu3ZSf17uzPSdSGfcHSe",
  "key15": "qRLoaZAaznVhRKkEPsyjbkvMweYNSB5iYAdeGh83k7S37scadwdx652PXt4N5jhwj3umYBCyLBTJJcSoHxQ9ZUd",
  "key16": "2m3gPExyRwukpqmdPszwAzgC4e4UwX8SBQHxUbdxSfJnXE6XRujSu51QAwnK1gf9ZWmuTGjLkAUdN3vQLCaTUvEY",
  "key17": "2D3PsaehrrTuBHLvQ7rf9ztbxYYNmnsVmqygCMrGL7ADVbcpYHredhcqYiTZ41eWzRa9bgY3gJzCGF9ewcUPiEoM",
  "key18": "vSXzocCEifvw9UKqSvyrLoLz2MWQEiCgeZJR27tF42PQXzuj6pJgtwGtYzVmVrDRhXdHMTuNge1nnYKmV6xmnJo",
  "key19": "3isJLWgvxNbTBtRMTCfkHvctnyKowdpnGETfsAC9ViMFDAhyscnJEndYaAKModoqCS6SXW2yeKDnWybvrjvEWE4K",
  "key20": "TshiNjU3DCJfjsnJuUnKPV4R7A2cVV55rhq6PChd6CD2g6gg7ktK1KjJ4KFGVi61vKFdjxvi9N75GCEK3wVwJkH",
  "key21": "5YgyUsVgQvNUVfQGeud3FbowXPfmSRgAbSkvu9P783bXZZpcUQZdtB295PkPf9254ddibN9v2wNGD5Zrr21j6MV8",
  "key22": "25S1mcXZoFWRW8Zot9vHm7Jr73YEeqzD5cz5dYg1JZ2mokawukRPVg5VWz5LwogU4LbGvFnyK7jRpCV6CiaZg7q7",
  "key23": "2SgWAJA9KBEuXuK5wbjruqh2QN5ftE2UTABr9EvHR1wbpkvTX8uj9hvrCX9ETk1SXzR8SGX3hsi2Eu8TUMGyizLb",
  "key24": "5LwDyXQcqoNyNfXAQvNsK5nRsiZkJdY84ndSDWyWJUDRiqBiDRKGvsz6AYGq27vWUcKx8syDgVEUeTes5bLjJSJd",
  "key25": "3b2S9ip6bMtufmuiiarRpT6njGrUXbyNuibKMjgupUcAnU2NXSp5SxkV4o8WUqYEFFVHFQACwn4ci3ytEqHPkXxH",
  "key26": "3jbJgywmoLiuwsfZJN933ScwW8ifkqe3uQwWuzBWwoKVTruH7bXkzgXAbdijX2bokxa8jWc4Z5AK5goRBszi3HYa",
  "key27": "5HzbnemaYV8dgjzngPaYet1StfoATJXGsDNoLC5FVHV87zFXoud8McFszW6TS2nWXjMY8M2iDvCCgC37BZQAnUwK",
  "key28": "5zJFma1bBk956T3qs5qXuCdPVgCm2Kp6rDZiUhg2xDDmxZWXrfe44hEchZGXKxvo1rZFKJZwnGjajQroTSbhF3fB",
  "key29": "4vh8aA72Na9edDtfBPQVS6NSTLgCyoJGgGZLJZf47FXbdAieMY6evPr2o9361kZ8Dgp14X2W6yqUjAJ8XpvzLzFr",
  "key30": "VZ6nWBCzgGbMXwHLkLsaompvzsDhqfZEckqEoVuip8xjKEBzKpcbcW6r73sMgp228no7cC3SfpAireD5BcFg3P7",
  "key31": "2cbNpgHoeBz4PLCp9R3qSq2Sbkg5z87JjRtz9oSjAFisF6r32T9k6jSTj2CDtN5jscBEsud4TwySHXjbCAeUGXBb",
  "key32": "43SEtJye553rEnjc3f3YwPbugRG9Y6SKHgiyvLnCPZ7MptsBjDDny1oyTXfuzFZyVTgrH1vEDSKPjY2H6E1Ar3bs",
  "key33": "3nquJ1W71YBU3nspWkPYGuEvrLpU3A4CxBDGGZVeYR7t515zg9hPceTtuhSJBL2minQ9vrq3t4WVPJoQgpELE7mw",
  "key34": "2o51ifFdLVMpkSBhmv5BF4Aa1pvhcLtBSH2wy7Laapv9QzfYxRnXXzNWtueL1ZL41eqzdShTKmEqjAQBnTJ93gRK",
  "key35": "4R7oPxvjEuoyP7vT2EbNWK14zKFDuEussYNJTrLjskbVcgZQ9UNtMKu81pmpuz7L5K2dEk5AvGu7o6TbjZZe9Jnf",
  "key36": "5xxka2oUfoMLTTDzLyLLDoWdMqpg4MgMCsE9MafhntCVXk9Xt5uKzZwv7x3zjqsvCFXhMTLwy4uwfYSdJv5mbzzb",
  "key37": "24qAkhBNmwBAzRdv7zEDZwFRqfEh7HKAvXDQo6gN6FBi9GLHu6durKd7braRx6RZJ4UBMUN4aVz1YvoAo1TrmEED",
  "key38": "3ZAPnxBytCSJxgcZpx6cihx3TFgswni4GZdSEgCu9tsnYuCh4BjGmU5Mmz3CHmocaVpjJ3AQWAHRK83kSPECVeph",
  "key39": "2q6xomEAtJW9jxvf8kE9GzdrtFkPH99V4TscXueDzY4KpHaojudUoHRsWYzE2D5HHmmBGZUMLcVCYGVo16CMqv9t",
  "key40": "5ac6BBPyh4iFDktcxpyvMkGGWsuDJmWCbR6ZQK3Qo7E2kLMcS8udHRwjrYBbnJWSC3V9Vsqxe5E6gxBpMDiEHsuR",
  "key41": "3UFxGQKWdPAd3vT861ygkWMMeCEG47ddVs9GdWc9rXQNZko5LyXzMNkENyVx4ihFAj6bLZ4FpgJiUXtVx3xu4jrT",
  "key42": "5Ld1Zxb1No7tCFjpVENNxgfvNViSaycbaNUe4skShwtYJEZhGP68p1KWk33fp71j98K395tMgMjBb8Zzwj1mHwRy",
  "key43": "5LuLfEQqjmXsoooPpHBEqm8q61jG34yjC5EaViAysdUisousygA6cDBkJyBCumaEiQ9uxAW2ieV1Q2jRjNPX9e5Z",
  "key44": "HA8wXFTYEUexFoxaxCkA55HcGneXtVNj9NAauXU2LnR7ChNy5m4tuaDcoTVdKBiQ5rKo6gT9w9AZ3MAm1HnMPdP",
  "key45": "donNPvnHUdr5cLJ5bSTRqEXNSJWqZkqjD7zrzSQXTt2uPg2TQcpKxPY6FYroxic4CEuMBs2QybF1Kj66TgG7Evy",
  "key46": "2ieR1geaTnzHtmCmPcVB8Pwk3dqiXXHrGmxjYxLA2MfpsEpecVKPAdv59Wb7zMQZHK383oPowYMxb4pWAzuXqay9"
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
