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
    "JYPNKcfnJxAH8VVw5SFTuBicpsteDFCyWqs8vYB6rpEApR3irwv1V3eiubh8Z98K5ByMj1yfhbBuyiKJeRJsv46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RqcxRZbmkFJA1JwE78sskVS4j3L32u3ibRF1N19L4URnARe5UtiMqMnzMzU6woAb5BPTR8SkZmfjALw5ypxpAy",
  "key1": "GQKnPzLZKhYB94MqavnNByXobqdkxQZWjZB4A7PhYqCUFfdghVFQBCBKetXUY3VBXR3Cmm9HKS4kaDpKFLJSRwu",
  "key2": "5FnEPEY562zDEoid2RXm9s4cE9ugvcZv5oePJCo5QjqJda7kTGk525MiHx8ytKN3krCDpcHbRrPxwVTaeU8A6rP1",
  "key3": "4eTQFrU6AJ73BkNzBpM4xmaoSC37sPF1sNpGbXmxinWYdFAThA7E1gp9n6BiZ116fXWxrGiy2D4VDbcNhnwnmcyG",
  "key4": "5vHTCfN5onuFfjDy5KPkUjVdto1mcS56hGCmVQVGv58bHsW6FUZf9L8xqXKkyTcHQTMgf3jqs58rhTFxV46PL5JV",
  "key5": "53SBQU78gzfbvZrcE5HYAuPZHxJS53x1QT5jXAWXivK1cQVLH6i1oYQpyTtY8vqoSy71kwm3d1RnGrPMnxHK94uJ",
  "key6": "2groxZ6wMPijb7Ly4gkduJixuDFLedPwb8fPsgZkocHf3wvMbaDB6jFbUiqwQwYu8pcxErooyaAC4MZxgArcJAaZ",
  "key7": "4A2fPd3BfYeNQFRqowds8VhmtTuwt1g1eh3bHukT13sVw1HysFTXMF7JUuUD69b1uK2vHoruGkXPWzBYfKqx5KMk",
  "key8": "5aofBCQUJKRs6T458u7W4fQibCEJuH6YzDJ8HQE66o8xfmYS5yYJZv8puAozNtFz7KNKXFtWcbNogq8a733QuX9H",
  "key9": "2sFiqEwC4L52AaKhDR1Z8eXCrbyutAFUsiAvvwYeZDoRXNHKD3uuPEhJgYfrC8H6tYEe2NxZ4bi3YvDsH5fj8Sp1",
  "key10": "5SH6ryyA9pVap6kc2HzPjTUKwaVFq667nAfgiCV5BZduV8wGZ2GqhNeTHAt8q8MxLYo8oAvakz3W7kNanWKBuDZ1",
  "key11": "3v5fzndzeR36xmQWzfYGBVwrHok6iCZA5i15k5CtkFG76oWbEUGmc7fFarc77WKDH6R6B3cGfSGNpBfc7s5yKBwf",
  "key12": "67XXuV1V8Nh18bVHp9tHTXMEuAUwxLuof8xg3kwqW5eSYtwZo7YhkddSyFpydYjkUY2YNNtX6nKbn2eJNB6bUSr7",
  "key13": "3Pdt1j6NCF3Drs4YHLHTb798TUegQiruYaHDZNtLCg46geJuKS3rASVrb8Y8WewgACCdiLd67tMoLtyyK8BHu6qh",
  "key14": "3YWDgvgVYFzssvQA72zxNJHvMysuuSGht4NvR8gq9pjr1QSJvCnhF2ypJc3j7yQuBS7LubKd6xoYDrsh1ZyoWA26",
  "key15": "29yL2km7q68B56aoh7aUdJBJQxmA8igJxcbnztn2ddT3gJijTo7dt8SJXVAvMRkwzP67tV1zHePiPuANpCZJqP4A",
  "key16": "2WHNfvGkK9DeRf33p4imKghhASwPNYXkSQDTxozNZdYHfqTu6CdZeQkHkph2yGijfumfwjL2H3zFDdqvC7dYf6NF",
  "key17": "WCjo73TqEK3yuwu7TDxwPZRQp1xHKw9aKqM8deNFLZTvrxVPRR8ZnWaT5vNtbun3G9RSfguysbBStRZf4VxTBMm",
  "key18": "ZP8wVKdsAXNuhPEPMJqUPx7RLomZhdHLn7dzMGwcpSEHC1fUj3twneAAKsGF3mA8oopyNH1AYxwC5ivhWpM2xga",
  "key19": "Exf74nPXd8w7si39CkNCPzqhxu9xbT8eiUE9qYY1D752D1u28TDv6NFEfwQQKeXDjgcobFSMjvN21n4EK2woVme",
  "key20": "5G5uEtnQ1gZ7fYeCsu9PFRDMMaiyUNzhVtTYPJs8tHRBEyQUBfh48ry4tFd49w4K4DXndbDN4sfjA5y2jafGSWhu",
  "key21": "aSTaHrFJYfT8BgNnUivZ1d3P1Gis2ibPeA4crK5ZxBfL6zaJp9Wpy8R7QkrgP2eu1Li45yGMLLBXnH2QuGHEq2z",
  "key22": "2DnxHxwWNUzB3MfHqgSdQfjpgQ7KdyfKx2WRZackGTsn1HgiiXBxxv1vPh46Uir1CiGoY26aDdoy5ZHuY8Sjo7s5",
  "key23": "kRAANb7rLgBt21Rf28s9bULTYjewvCGnxtZSKh1rfyXQBtsBGxy7eA9vgTWdguc9mVf4ZXkRi4LTgSF4AH22btR",
  "key24": "4C5kZKoDCN2ZMuHTftApqC3ZKCL9JVWVvzMS9qWFELAWhHs3jHLSDsZfSUyia3RGXt5rNnRLZvzm3XksNUyVn7U2",
  "key25": "su7UNUgP3bBUK3vVkdw3y4bCx78j2itLBjZEcSQFK6agF7jd8FEa93K6UpZY5sPbDSWgUbNzaruaqVnF6KEfsJX",
  "key26": "3uRA3igeS6sWs7qGVL71ntt11Yd5ce5Rv9HTap78kvCRoN5LcBpwG4GBbRvQL2TUz7eokUqdiT8ws1oFfaeS6krh",
  "key27": "aLps4pouqcn63LsNQcr8B5Z6FfgiXJWpTarFq7vfD9pRTHNhHaR8fcn9XS3bqxHzAh1skAaLF7r8882VQwnBwmc",
  "key28": "5jgE7T28j7FtzR6a7Ufg4BNQcFzryPTuGXKdULgQjXeR6sRSoB2KiKoDVragsizdYq2rE5rQMABQGQaVgZpavDm9",
  "key29": "3CBFYrrQAZCmpJj5XxJDUAJoz2EwGubv3dD2SBPqKnmc8hPuji9gTnxnURqejZhpFUPdezg3hYaK2aFxE8peScbC",
  "key30": "dEMZ2j1bFXPez2FKJYx5Ktm4DodiuE16cnqaLpmDJsrKrude1WMeJuP6M5P9tq2E8H2Ji76ZMi4FQjzUwK1DbGx",
  "key31": "9PG4TDvww6ShtnPqyP6TgQLPGw1kGyFg8kfDcgv37kC8PvqxGxCL5fB2undS7vpwYPv55fC2DCP4RNwbiKewgpG"
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
