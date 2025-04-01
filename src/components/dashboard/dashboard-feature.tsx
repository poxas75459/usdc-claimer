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
    "GhyHWNNBAbx1cNGPkRAsS1GR7bmF3p7b2Q7YufjshkCWkjFEo3my8zyoxxHkz2Lgz8GYdr1yKJnkQn93QhTdJ9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gYg1LLSLL9eX3jJ2qCuo38QiUtbT7vP3nCT5CYjUSkFpbdtkSVhikjm9qk5hX8urJzgy5i4BgfszF7WLsF4956g",
  "key1": "2G8nZfv3TNSxZMYShya9KXZgHtSwq78RQdDfT4GKtJcaybVHoy2417zN76CdweRWYLYo2Y6ydFC4Y68X3zFTsxVX",
  "key2": "KTUfxHhbDXJ77Y21X9BzcvojfkibxqmU7cRH6TF6Rbruo6aZS34UWvPQKQyiZn46mXoD65phYc1SEU6ux9r7V9T",
  "key3": "4cW8GQBquY2sKvqMxf1eWX214r3TtiF3RvBBXw68SWgr9oT25QPEKFGvubKiqCLHFJrdrxT81vLz2BXWWaQ97eYo",
  "key4": "2BweZmD1RYyJ79dqSVyc4qZse5H7GjCw4QiPr4tcNXUxVMQrvySLmkqkGN4fNN4sckYhsdNqaFz4BZxYV86Dc9WL",
  "key5": "5x8rEYZaoitSWckCcyMuoHk54vc3ThNTpbCv4qXEC6et1DJhGdrgxWFPhPk4ABj68j6ob99YTE3UvzNMxJgpGaro",
  "key6": "5VZHrgrqZKz4ihd3zs7DGcEnpWKp2HNzhk87v6kjRiDJV9UHAPLe5rvjyWzKDAXy2Vdk6wa2o6XrUQ8QGKmbGKWW",
  "key7": "4pCnNpG2mex4ZTvwwyMsfyn7BrdzfC4P3ET9jTYpm6Q3b64RpnQdCDzo7YnDAbgCg3nPn7jEU8bHjQDnmJV8f7N6",
  "key8": "4Lv3iWcDEoRc9SoktJmQzBAA5Qq6nPKxbjT1CnG426yjHwnW15Bo4pqPHSyrYkEc5SyCPhgMMmWuSS1bKaFDEDLH",
  "key9": "3owdXxSZkVGCa3UNWBjaLT1auPBmcj7SZzxmFy9kVmtFDT8nfAy6ZrQGvJ4WkzQrEwfz3SyDmFq7s6oDcSrxKvNU",
  "key10": "4BQ5Res3awQz6wLEpAAPiR7dF6GGhrCWthnk5c6CyAZhKwKrm2itmaXogV7rqmJKfZEVksmBcuggJkrmVpMqQKLg",
  "key11": "4LRKToPycgGbCq51Qo4cTYBtSZRpjq7aRLTnCAU24ZujTm3y2XWxnZQae9tRu14XuaUZWPfNSWG1HrGBeuMbjCU2",
  "key12": "NnesagkmDxdnNaSBV2ayWiHEi4uAJedgPcK9NNYSoxPCrYRWxkR5MGsoKyp3EAYzqw9T6wHyrQcyZKsuYypaRqW",
  "key13": "4BiG333PF118NUd7rGMZLcTFFDgrGxNR8C3Pbfgr6j3mejrqWrXYTYATS8LTKemrjVTcGsSkVu26MSpYTnTayaUn",
  "key14": "4FKxu2ycuwr7h16KN3e9d1qrVr1ahEfeqACsD2t44X51LFs4fY6s3csCkx3fdGFda9gZZNJAMbik87qbv3cHtNkR",
  "key15": "47CxKRGrPzWA4H7YZcQWokKBq2t7evkJjyMNASPu2xcU2tguD5XaAkFEHUMEqtJgn2g2E72eg8TYmmCaRQbnyWat",
  "key16": "3aQ7iJMYSMbG2dL5YxcLGV5BJSyRqapAYbdGxeMViLzinvHARFrWt6WyPbQHTSDM1W7uBTa1NSuSJqbQVJTFrfr",
  "key17": "4j984cuvg2tiuxJdTrQhr3fzdq9bqeDCafprvPqQKhcnyZEHVkkbjj3dNfAeX7r871JbmDBsHzpWvjiG3GxE9xBX",
  "key18": "hNe2keSvy9GB4k83DQX2ZSMLQEFmzo8au8WPKGA7Nw58W8McyujHGTdU3Mrkoidmtbd8FFLGcs3JAFM5wRFpCCD",
  "key19": "upVK5vF87t5xEhpjkVfR1H8diWdNQqTh8g1EhDETSK1q6Y7FhTVLZr6EVqor9ZNLQaN8S7fd6RN7971mrFTZdwS",
  "key20": "61qrFfSSZp7hGrQBNtj9MvyS24ixe6UM3oMWfSXTZsuZqTvL1iosiuzjkBTmRHqr7k679RmBJSDr2MPjt6TXTAbk",
  "key21": "4gNmUjPs8BCeYq62WznuWLXPGf5muL4MmcjNJSsZu9zzBKFRqsmw63PWeMfpjsQVVetnFDrVoK57sB8GXzDotab7",
  "key22": "4ZxgNb4nPTUH8SCpdg9gUBqyxfJ3SwT6fZ71Atmpq7oYSGmSh1uRhE3QEpaLmtqNyzM4BHzNG5UFVdXqsRi2An7G",
  "key23": "5qPYp6rubnnPqk7k7izcrJCxwyYSTmbEFjTPuy1YzKvuwuyFL9AZL5ijyjW34aAJbaTU5yDpim2ctnx6NzH2NBiP",
  "key24": "2CPzuffy5tSUWFf6Tqbteb5qQZWqXLvp7cU4urF83dqJsuEFNiHFjbLAnaVzeUrHiepAcHH1QcxbSDFsV6Yj6DP3",
  "key25": "65HfC8RcTigifRoWJiHgSu8iDDpndN3EPf6jTQQegDRkgbw7HmWXMouVHAVrGqkZNKeV7WWrKUjm2ngoWBVQcLrS",
  "key26": "53bH3xX1YZEDw41bkJvJZWvio6yxF39LG1YvXFoghVTMsZWsayLoAxqmB5NjnJ2SN3nSCZcKe3xZvwP8XG2LEh53",
  "key27": "5iALCeupqkqgxbFH61wi7n6aKeEY7mt1JU9KQnmhcKySkcKuN7Jem6ssUPiVezwVGcVG2KEi58FU2fRP8YfqxEaY",
  "key28": "5GLLMLEGEzhD2ZQoSPvoqsyNQmdexEUp8qBqrW9hd2cgXCs4n89qdSX77YcN3XGu6UQpGHz41tNcssLpQnzjmCNp",
  "key29": "3ZdzApNdnuSVyoJY8C6LqBEUAk7ZsfK57kUXq5TQB62iLv5EqHhHR3Lg2BbQ82vi3FM3m7NsrEoLKmXJ7C1w8MZt"
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
