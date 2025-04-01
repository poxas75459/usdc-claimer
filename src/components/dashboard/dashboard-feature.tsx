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
    "3795hYa65F4ZwR1GyoWLSHFRJr1so9JqZYSt93x6YLejLpaf6Kxbz7uoWms1SbQv5SoED9wYmCq6Hp91XicJHMsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eyvUW3yt8xQYLr9XDwD6QzpaCQx7HUtKLW5kTcPbiY6gaAPowUkdKJFu83zWykNZ9YodDd6NwPzH9exNTqLBajL",
  "key1": "3sY6pFFwz7X8az1HcdaR2ncLAwbHe88AGmE7odGJjFj3AHKxofKngPJYyaFkpep3VfCxPNcC1sjZPPhN9nJKUeYL",
  "key2": "5DNQD4oCbaAmQpcSzLG4mQyM8eADdBeK1uJi2yUGcEqXYE7dPCZ2vyYVDrwoAQxGBR6gV6RZ7yMXFpQoBxXoqw3b",
  "key3": "5i41DqcWEPfHSi5xSsG2L2W1JJhkrH2NMpvgyKNncdN2eSotRyp6NyJxsLPAZbz8eBBZaVAMPdYeXzKaaED68i9P",
  "key4": "5RXkz7P72nfrWpwyf6FxmLEw6Uu66drBV36dYqXn68TzSuLLGNm29JtkikaavpJr92W4bQgKAgFC53tJepXynGq1",
  "key5": "cZpEDvrNxtbwKH4ECb6gK582AsV55q473FjMh6RtGME8cC7xdHfT79Bb7aydqemRQSoa56vVsZeTnbLwTwZv48B",
  "key6": "4Y6bZq6GBo4dxvJMQMgnLWx6osbPrbhub8NDRQ2UnDxAGgbMufYMF8x8uC7Jmcds339KPcP8yAU1Mtk2chAYPDj6",
  "key7": "4z5eY4D2wACXcoRZGj2e5jSfFLFxx37KKzqfgBV1cGFvv5pL7Xx2942BYCuRdVzjqfYSbhmbAq5cmpAWEh12uvLc",
  "key8": "WxvSKn8RdLrMFDNE8FP7TPunGKkKfJ8er24xUZQFS3mJ1Kdvy5Py6Y3QJxGEeybNxLYqpuaTd66pJfDf2zRQ7Fa",
  "key9": "488RWF7JAwwbn25UDsbwKGR7CmoYSDuqmR9nPfca1LATkN75WRmHXoUEnXmi9F8twK12WNR3syFh5WSdqthvhEQt",
  "key10": "n1BrcRNbjYihGD6ee2auxgqYNc6f3SjciEo2XFpJosTtvttmw6CjqgEUNoVdZE42qLn5GCkJc3MAfWDVsBuNi5Q",
  "key11": "2bv8eYxTTEGssE9h4d5BTVbfhCRmFGvTkA42ghKRGw6o5cfVTJihLy6iLDteAEz1L3uQrS6m7DgHKqtaqBdfhVci",
  "key12": "37prUp2Vn67hZh9DKhPpkff5F4iWw2JXyiDck3GJ9nxtjN6QG28arN84Tr4QmMz4qv87HjahqKFrqVeLF4FrBjvh",
  "key13": "9eGPJfSyD8yVPTeaeuATcUt8PL2Vsi8CZ3zvZvzeNoa6JSb6Tu4YMWn7uvffnVwxxvZN19gHeRCt3ZxUhwg3eva",
  "key14": "3MacPV7v4sXMKycXoj5FgFPeoKSBbWptp32FpMPqKDdHgohxF3X5WFQWFGE4ayLZZ3GmwH4xj7rmUv975sDFHtSi",
  "key15": "3jEvSfF758aojBJdDV6Pc8uqHcusrvB4WtqrDj3TPPiAukrpRGiPPVknpg8x4hMSnfHxT3BFuKyVBEBkRn1Fg6HM",
  "key16": "5cTxZMyBZiRJSiuuJwfPVsmert6pDKTbsdxCcEtpkUXUCmx2WWZyz4q5Mn3XRfGM7j2d3oShSBK1c3gxYHLFfecA",
  "key17": "3ToH7PwkXdiNpMj9Mgq6MbEoNAmjGBp2J21avS9RPkTw6yEBM4VFpCCfUqnwiHNfckJEboAFgg2w3iEs7UmGUxv",
  "key18": "3H7iVp4NRQN4iyAAV1pZ8RcMnyBFnd6Wze4PPt9HYLgKwAe3neufHkWz9L4fFqn9uVuJjBaXCrwcVFyLPiksW9vb",
  "key19": "4YP6SkFWYWwvZp8Ydq5EaYBK2HWYhKSQeWTajVo1iadbjXG2qraJ58kmdmQdAGxsLTapZhF1nBSrBtvH1xuLVdef",
  "key20": "36DgeV43UCvHKTkr4vwcDpypHXDpTzjTVsQBrRi799NFybQ4KZCD6H6jTn287Gs1KQESBCNATZEFRSwvuMHnmcHM",
  "key21": "41xP1E5srdzDzh3jrFeGobpmYb79jgSTKWb5WJzrztkoiCGgh3NPTXmmbMtaVHSnKEunKCYVY1xcpL7eFTQPzwBA",
  "key22": "5rRQJixvhiFDe5FJiAS9njuWwvnQbb9MN6pHZm5EKmxhtxFbe4wE5qdsyAubz8jmU4XrE69MkL6dHm3WJjwLe79H",
  "key23": "bDpvfwdfPv3VXJocxEuwa9u4qjNa9bXRvBxPWerRPerWhYMfUnpuR7i48K41XLvGRk1XDtBH9zrmvMEUSnCjZXh",
  "key24": "CBcLK8imAN8ppqzLHiNQ6DCHi9PuvrzDj3bora6HWpCEPZ5Jtb6zXiYZ91kGWzSK9ppvfLqg5cyKfhb2hG4gpat",
  "key25": "47zexJEwWBSfLgCsHkndBKP4W8nJE8fc4gjZjyca2eK8aRQpdNq6KYHKcgDpy2vokDqGaMocVhtrh9iYiaPQVcCW",
  "key26": "iCzvDTFmJ7wBs3EehNitTWGhxvykbQbgQLLj91YK2SH3C47CWzW65cuK1X6oqcaw6XQFrEjR7PC4tr5xSYNvznQ",
  "key27": "5agYfhXca6PVxg2PBUhJQU3ZhmyHCVqh5ApJYBGR1mVeSKDd36t15cLQBATtpdE4o2KYChZnxcqy3tfs1LkfnAj",
  "key28": "4aci9y4RVoA392scSB5Akg1i6pZfTcESo1DXqbsS7ZyU4vX8RRBKudJfsv96DPeNyyZ7Su6Sd3LjyiDS8fUfSQNr",
  "key29": "56ytvnDDZvgPNGdMLV6e8qMQok9yXPvwPdE5nLe31UcWuG7M35JyRpFopD2ZpuhX5nGC1Eo2uN6FjVpRbkVYA76b",
  "key30": "5AUXURD1R3vHCuCw9ma91Poz1SLpxakp5W4PppVQokrGJ95AYM3aFYuYYQ21z2HJxzKvDXXomBuDe4gasBZqMfQ",
  "key31": "h68GnQWnLAgonF3HeHP7f559wt8wvFBUFvZN5hsaTXZGtboWiPnWbM1uUAuZGnHLqBaBH5fbqEEKCp2F21dUT88",
  "key32": "5K2mJCTtBhjEEgCnodnwaCNaeHQkqpJ7KFEhqftP8dCo1h4GhjNbnDdWqpqghkddGKqBaK4Kv9JmP7zqQh2UcNRs",
  "key33": "2KKHfzPHwXtnmb4d8ZzxcnSwFYW1nAy4xG5913pL7DqEs1yaxUGJ5DgEpkgLoDvAjoRD5wYoPPWyzpEZ1bJELktr",
  "key34": "2dGFdkf13NSzriAGX7tPvTh9K5q9SA6a7ZspyfgYdN7faK6FbE6Xf9qb863DJb5J768cvHJB2LjbdqmKeNvSnNhX",
  "key35": "cZfhmgp48beMzpHYK3yBxNxscvN3UxheXwqVWaS7RbmAJGq89zsesWak3rbs9SHAgetBibmyz8kguvkL9AU6Kt4",
  "key36": "9PPp9Nvn87m47xzFpaT8KuqrCSJAstYfFDHy4qZUGsjVbwRRS2o5YsjLGHmrbsjZ5FoaLBaS78RjGPrhMfYkhtv",
  "key37": "YKcAtFnXdajMxSYt7sWytpfnhoR49gJDdoMe8qfv21dCQVH5fD8H11ZLJynL8Xbm52icd77VNhU6uXHTeExao3n",
  "key38": "3c4VTrfghK1nVJr9o6cpWwR8raAThxGyALEX9dR8uijqdwk5p4EheJtVgpfA5tha65N4mFxtnmZNt9nFSzb6UGQr"
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
