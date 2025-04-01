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
    "mAwafRZkd6pxckeTQXyyx5kGiE5APLknJeF4M8WvosXhDyKNG6fYjFitT5yWQzf52pRpWJ34JUd4GKiZwJC2x6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kxP1K65EybRGRVJnvA9igLvzN1KQj5PNUsnsQdXFiMHTvfd8VvDvJ6UDBwWX5LyuMmkaJeVQHmYKQ563Ef9xD6R",
  "key1": "563i27xZFV9Du9aLV7YHn2azRFVSmRFJvhGSqpMTfGanx44hzGxWDsAQoqTQHWfVr4QM1Qpt4rRbVwdiv2pA9ri",
  "key2": "3fq71ov4YPNMsCfZZzqWUBT9TpdSmuFhuyHTJXU8aUjBv9q3Z334aLtworeYG2Cq23zrJ5VkLZd8ugyQ92Hhuvp2",
  "key3": "zyuF8E4BPYQ2igtze14NEP4aDEcCamzii1d8W5cDVrjvmmh6Fg9X9VTmm3CdUE8fcD32j6ViWqA8WeJqLR6E7J8",
  "key4": "2WkonhormfDrAWv6WAu8A69diJf45LbQrqtLKZiyxFBpzvVgYDFRcdUnMiHkpXfuXusDCvVeG3bCcHmLNMq8aBvt",
  "key5": "4paq2H7tQzWvaiUcS6ZAPjDmrHW6Wj35LJMYwLNv7Et6dcND8BhtJe9tSMhXrf5QjTqSK23wPAHQDTQZt3rXb7pG",
  "key6": "2oXQB8iLr3nxtNiLgFUwHnYJg61zPdV9BMvMM2uti4vu3JYTvusevmVn8YNkxE9zULbFYaZbzkdiCoXydHxpTrT1",
  "key7": "SLFDxGwMeMis2Trp2mXPiAfcnSkReLZU6hb94xYiYEtuH485Tdsm5xNotcZsfCVgeT9CfQZqUSkjWdqPfVszAbS",
  "key8": "5BzxrnBTs7s6yaSbxKnMZvcAH8V81xVTub6CZJtgt1R71uaYcWfQzPCaTm1bH8P4aTdX4ySZa3v5QUhaMyY2C2Cj",
  "key9": "2HpDT2fD3LLb5urnGrzAiZF8WPbSJ19qvBFx8NcyCcgwDCxHsfiDMVJwfw2KMvpfDBLVbfjXEEmGa1kFJtjdpM9Q",
  "key10": "3R5iAvBMYCiWR22u62HQCU9QstQPvqsVkg86Aqthm8dKFK3i66hF7hFnJWXZzN9wVW3yMZ8dkmiQX9FnuQGEETSD",
  "key11": "A7s9GhagVJPtuR4s3XK5oNavjUMKCoNvt9YqfY9k57Pm8S2WwSwaqS93TLbDZCHbZvPVFsTC9MXcRHww57pspcT",
  "key12": "5dR3vT2pM7CANjL4RKtdjSm4ttuj8w4RWpEUX96sQH3yKemjQwVVp1w5MvcSKfT1J37EMV5PGdQ9UxpryyrAM6bd",
  "key13": "2vVHQCJ3FyXFmJCK93tB65vtvdEEzs3xcFJadomRJ6CqV5unrSML2AZVq8oNrDbCAJvm1D41wuUXvtTKvgEFEVhj",
  "key14": "mkcEWkrMfzHpmnxnNzEE7H9B56kNT9BVwY3pmi4J5VdekFRV4QDcKbc9oNhpcTmXzLf1NVQXuZsTjHYCEz8a6TX",
  "key15": "4rGQ1fqDRNyPAmYg9KiDqD4FJRnPFnG1xWrQwUG16VCRWxTKPtPTdkBdvxQ9D2vUW4Sk1RuSaZDSG6afTs2t9SVb",
  "key16": "4ZLVzWTExXqZe9bTiMR5kp5eccxehAU6cEHhR9woSF2Wu43vTycD39WUSpadnYZrYKzbVB8C6z2Yzzo2av6sq6Vs",
  "key17": "3DWbouLAjrjsgfVgYtGeEVUsfW9oD4AY9BEqEMucgGaiTbvXFCN8463Tx6YjoFkL92ZZDoZacCkmoYAr3LrKjTCL",
  "key18": "2g7FScxeERFbc37amFNTttFr8bmyH6KYy3f12U5U7916mX9gfVGN2CaxG5dshGH18GyhA8om5o4f6k13fmh83Yp4",
  "key19": "5gvM54pdiB5qm7tZjPpEuQCWXekREb2w5UfWu4BZSwxieVyZtqAJoFgJEVXp2MPpL3Y4WsFPGiadBDBvQbym146j",
  "key20": "2p4e23TEwHhoGfmgAaDmhuaxEWsM59NjNCRLoGHHpBvotzpXAcNsy3Q2CkpnvUwtmV7uyVmpnYERc13j8kZjHQ9K",
  "key21": "4n4DU7WzJHVzXw8Mda9XaLLCaZHW8V3yQox2hLNfaWpVXZwn9v5LfksXFpQZVKuC7Dods2uLKpS9YFzq6fcVyJ9P",
  "key22": "52N9BihWVELoyiZtypcUmFdA2RTRqp4pDuECgW8P4akmB6X9XrgFLBXbXfyTyFNwxsx7sFqeyLtms7K8h4oDiKq7",
  "key23": "3A1e3t7YqGiHj9spTj4cTLaNNnsVEPyYjQQy5mD1cBtdL3bP9gdiMWqxvLoNXvtrsdcWkZa21ZPNEP3FtmRK7vkL",
  "key24": "3qqSf9Mdi1s7EviSQjU7Wc9xUbZqEiyFxytgLqpC3AZybEmXNXE5eUXUrm4PEqXY5LVRMxmvgJXxMgnKFtkrRDjR",
  "key25": "3oXdQ9nF5vTE3MtJBinjNraU3sm3oJvTvQjZSBehRtvjyvZXcutRWZs8MWjiRtzRzL5ZdoELqHB4vMyxx3wEeCMf",
  "key26": "5FmgTjoguUGhbHxbZ7jWcNuATDRA4V8526zxxb5weKmMTg7neoF52T7q6yqLSGTc3kx6uaRc37NLb18Zmv1PCz8q",
  "key27": "4SQn8eEgQX7SJDzkzYtsXy3axRFXf1ULALjhMareNu7VePG5RjyQsNCjeqo5Q9dus3KJiJqyNEUXrbRc4BZJjess",
  "key28": "4SdmjMK1krR8B2JQZH8SDtdTGt8D1L2NuAL4u9kSnPuyhfWmj5TtmdCXbDjbX63xdjB93eo4XVJgiGcSGnYVQDcv",
  "key29": "wGZmM9X7eUV19XuHp2cWg76u72WFikJbjGdTBdn7xLwz4tU1VgjTJAgcxUuk8L73H7zP6gbPBoMfexHNbSoucUv",
  "key30": "2JzLDwKk5zWC48CgciL3wBnQsFAGDGSsFJBmxT6jdBWTvi5Wnxz5TykotpPnm6utYWanzMH2fuBUaKHH7YTtPxym",
  "key31": "4nx2GNvdnFpM1AUBuwf46dWcCHAubdc2cq5R5o38s8MgHsV4sxroUYLReFkYYVXduqH7ZPvnzQcGary8CPhNDuUC",
  "key32": "4aUzsth12XhGAfZB8HzJKHPqrUkyqC12vjPQwz6jGtcQVfBQswr2BDC7nxeZN2j2byF8inzekV6P5ks83B2QaXax"
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
