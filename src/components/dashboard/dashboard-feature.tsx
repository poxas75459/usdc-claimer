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
    "4jw5vJXPuJZnY8fqxz1xsP2xBRX58mAKWWBwG4Td4Da6NBcqkR8VdteBk7Wn6CSdpV8DPXnyJE4bsco2bY6FYxZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fq5PT57TM8dixhzb5iUtPeFvaVRNpZdtDdvdX2Cn5mQjYQ8GnNTZ2xuD1KfjFWzT48LMXHGLqNgyYAmYJudnZke",
  "key1": "65VqxPcgw9F6AVcB3CBAjRVNRNQNkhviNduo2nLdgiDYH7rYUmQYwo2mrjaPW54cuaxpZQAnW2K1iAeVGKYceyaX",
  "key2": "2YS34nAjzr8siu8ajXf92CTgcmTFrZ19PEGGvoRoknEkE7JQByYV4xjiwbGDKWWtAtM1fSFPyivD7kycwSRWNeVc",
  "key3": "2DvSv1knKkdrJr7LtU4iojme6w7Vhw6CbZN4pQuu71MAtV45iwzHJczk4CBhZf4b5o196aJwiw9Z5SCiW1qRWLi8",
  "key4": "SeGg9r2jwuVK5evFQ3MN5hg2CsTebGMyZsEkxu5QWcjs8mMhfaWNFTGAY7Zn6g482CVuYFrdjhq52YBeFV4ViZ7",
  "key5": "4a5o2tKzvq5DEToQECdbUzDzwqy7MLn53jpmRPcbhoRm9ap5EnVSHbbGNm4yXp6jUGMshy9k6BYYE57pRcYUvWAe",
  "key6": "2tJ2vd1tVKN7WeKZ36sbuLRZUHbkiMdd9NVLKn6zCMiU4vhbdaWiAW76JCJWeqpvX5PfWbhnyjYmwsfaVVK9pcJN",
  "key7": "5E284v9t7j2Pag4evH16BRHhKmn8KifNBWtsMNm87HTUwi1ZnjL75mvdrSKH8s81iYB6GHctbuxmvhyLYAvv7NV",
  "key8": "7roCS6sAMXLFTCspZHzEUfchn3uXJQeG2VqXKpgjA15KHuA5VrEm2FPHJEV2YnsGgqeSfxWQuVvDVKWc7ydxVZA",
  "key9": "4YrDzPJCxiBt12SQMkhaysjSnqQ34iLCn6otZwp9LMNaDBWmhFqiE179q9XVtVhswu4hKwhwgtQVjmoSCCR6mi63",
  "key10": "5jZWRFmod6DtkTeXAkd9drGajTBvAMapLkB3bodWUgDHpf71jUiAgsh3rhCuC5Zwru7kP36KB4E4PJU8GWXq2ogB",
  "key11": "2tJTwXV8H5NCXig5vVzfHeuCPwuwimBW7Gt6FgffVweYZsiVAZDH6pUawPzKTrysTu8uQWZQTxRWrGHYaKGpt22M",
  "key12": "63DGpkGK5h4Ak5tZcVkGMtPnuQHQabEGXxhXUs2XU2RkWepxRqj5iFMWoyuYaNnLcWoewZzEGDS2VkCHHHMrYoLB",
  "key13": "QhwDmo3hoqt75vPgf83SsS7maTzmVMDY4Rkx2KhKGZ4LF8kkCRH67c2YtuTrFkmPruEsK7UC9taDHvi4EhEwh4y",
  "key14": "538DsRiViWSwRfZjJoVqF2A2QjNaxRA7eD8Spdd8d7zWVVMSzDzBiuSimj14mNc8MSdYioLMpz5uxiQBmqWuxSzh",
  "key15": "5CqfAtYaGsU3izstAdHsdNWk5fiMxAuh6Hk8XDCkwQBXBhfHKvCpeQNHHaQHqzrbWRrZg5DkM1Db1VV1Z4HdXKpb",
  "key16": "5WC5mcZgxeuvdyCG8ZnRJ2B47TbQGc4vYRZwRBd6Z3G4jQEYfGPbqBLE64RDYafan9Ywfi1ZRLCjKhUAnuFRaP5e",
  "key17": "UNq4C3sKQZVJaqpPvH6FigDkJjGJHyBhyfUGqeRigzmvJEFUm17zuTsWpswm4D7fhpRMEpBLSD2gqo4PSaLcxeq",
  "key18": "5p4eWcBJGnVLkoVQqty5WXuon1HKYqwBEaixPSeUVvNBzWgGdhnkSdnDXYBuWjH82qKz6xqPvY16mhoRf6URJMia",
  "key19": "5Vjk3swpYvaGYbzvK5STuKnd7izYsWcZQXbqdYfJgb3xZroT2ramufrrChctuz25HWDEk5645Z9bELTZSRXbpWxP",
  "key20": "4zrTrQez4a4epDEApQ1KX5rAnJ59D4qCGHBoyJ4swW9iXpX5hZhKhwr5dnDqYBak5rDcj1RMKNv7QryTKpmoC7gn",
  "key21": "2prcGocbSHyD3MYpHz96yZRXHcrSmzNG8zJH3pwuHmv99QgRW6q3Pdj1kBw1MbayLkzLnPTVg9QdXEP4sRoGY9ps",
  "key22": "9yGcKutoMCRvVKKDhJvrdPqBCCHGBJmUrcfSbDYRTJmEV95j4VmdPyxUgBfzsCea7gqfztgYfLQMcFo8FQmb2k5",
  "key23": "5vnafyeEzSbvy3WVkdn8V8ooJ8PPDTDMZ6TSLbWJPamucJShi7uJGW1rCyYvioBXmzmryGxe2xsRtiRVsw2fTxcD",
  "key24": "3QLvpu9tKQLNhK7K7co2MFNDnjuHUd15mURApqucsYPr7EfcKTCobBWGqe3TxPShvmNapJFJt5nTojcfwm6thBKw",
  "key25": "55yJXf298GJqYS43JCzTdtMWN6A65P7GfcD4ni7CwQvpPb77KMTppoCizsHCYkTyQQvD7K32zW7bkov6w5Z5Gz83",
  "key26": "2MbKkiCUCCjQmLZxVRN8TWDvu4eQLwxuorEJyozcw8nMLktVYmqYusXWx7u9s3q6FF8znNTZ9PUQYM6Kb7TQC4HY",
  "key27": "2Bnf162aVHrF1FwozkhLtGdHz52A4w1eriBuoPuzm2ScieooNKYCbqDJSK5VPspT1sGGoxnJVqqAEVjziJgiXAhr",
  "key28": "5jNErETUH4wPtqSEiXKg8kNBSdEFu4YGs5vs3fJBPQ24hARVeRc1s68JtKgTxbsFMjDm8KbL6GyzJ5x4gaP1pbsL",
  "key29": "2jSic6UKxxvQCDEiMKcMPHkRbemfs8gD5qWfBb1agi8qo4LAAyADh2WVSBjMsFy5yo5FiMmuYwxytUEZCCStJ2sZ",
  "key30": "DqSrU17nu9uRPu7nFLCvG6xfngxrPCqAYavY1Q8EXsatN3QGoEigCxF15Xn7q2QcXLJ1aHtx4KwS9jNVH5cVaJN",
  "key31": "594UmUdTb18FEwMEQs3UPjtGiYAJXdEiyc9FZ59jLUu2VUrKUCi6v7vhWrhi27KhGYR71hV1E9TNmHUx1UE1mVKj",
  "key32": "5uSX4XgiRfyJKNjHp9kPnh3Ft23kncLoSa6yHoR6r7yt8AqAHFBmWZ8Nqm3Yi93PMhFoG9G6aEHiB2Q4N1x9Zgpw",
  "key33": "4NyixAQHrewxeTarwthpSJMQWZm5KtqYgBSb8dgFQeoYCb1wfZcPA9Wnat3TTFCWcVAg2utNJe6y24mhZu8VcAPZ",
  "key34": "2GNNGMnY9ZEZac8pqztw8j25nFtPL9QwUyXVWzaee2wMXrbJZvjAPWn79w33ya6TPdTagByh7jUnisSnUUcn1WJF",
  "key35": "36nW928U8BsL82tpbfeRiSpPPPJriNC23zRAo3FDngqBQ1wnbu2G9sZhQFwKTyr2jAfyjaZZFEygjxb7B2Y8BwyW"
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
