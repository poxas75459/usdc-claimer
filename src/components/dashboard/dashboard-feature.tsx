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
    "3t3CYtpuJt3fsS7iLmP2i1aMZMzw3wyBoaFeAjaMpRCfENPPV33dGM2cjPZgEC5XC1Z9XPbdMwesDJJ4Mb1fgyQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upSz1T45AdkBQBzAXXQZvZRpu134v2oLgZ7kgJ3j3rnABMT8qhjmmpyQmtu9AbpsQgy8EfgUenfr3fkQvYZxs5D",
  "key1": "5gSqqz5vzxZLCFT1YjhE9nD9DzwMz7NA3gruAQaCNKMVzPbxngoVfYkbwJtBwM2nhxHi9HrzvTwbwWvYiwZDW7yA",
  "key2": "5s8xKSQma3QsGnhXT2S6Ur2xiSP2GaDE5dmakPvwhcvA1ev9dkBbzdGx4iXahMuNLLFvbajiw2CgT1eJXePSqJjD",
  "key3": "3Bz7a763VjDPi1AZ6kgZFMwn7sSoWJpNfaBkAP9qQyMy8sehW9AByecBUjtK1ZkQxkspsyw4M4Yq7F469k8GB6jr",
  "key4": "3e2UZeFR4d9gMc2czcfgRFBLY7U9yQn8K91HyjLRSNvEN8DtFAsZVfraFedmYGY53SqbFgDfkXN1P8whPo1DBEUi",
  "key5": "25xeakfJRegwUPcm3h4fun3NWTt4QQ6LP31yDVg1Jmjuo5USeqa8HpKTMNJ3CVRksBPQdeNESKVo5SwxhNXHUEJo",
  "key6": "4jKZyGeAK1ibNPYtETnREQ9xFAWCJBNhEg23SgbDFGw8meK985hmqc6YHT46oxrVwWxREeUNakD1bmNeMypfd2gY",
  "key7": "5Ytc9mqrEyfZMVLjnV6udArNhoaWXNHv21upcX6T1up7qAGzm3jxnCMU6BdkeSXQEQjSmjizgri166yZq9zYP4se",
  "key8": "2u6Hf7hiJ9Ef2naakBMGEuESZXpm8NR2LGJQXzMNgQZxvzyyk6cAh1h7Qm6BZrCoVLwKmZqXMJ7K9hX4LSqTQqzd",
  "key9": "2WimAbwpK3nLkCnRedooAorc2kQthGgKHS8jyiG8ovcKXrS8agnhUMyXajpNXi5LHKzL3vNYxH8g6jnqZEN1bZcR",
  "key10": "BQaTdkgADaBz5FvHvvhPhtSRR1QuCAQqqaRmC5sLFWgjjP2BUN2RzAdb9Vj8rvbmCjxPQcKL4kB5avctj3q2iTs",
  "key11": "2EYpGefdTXSvBajoYDAGWPaYPeaasJMkMCgUqsNy4hRm8yiAsmQJYudoK2eCVwriWSmDhGmEzYK7fb7beR8Gsghg",
  "key12": "65ijDj41CcKgFwy51cQ9bYpNp3xSG4KWqfPid5CTSqLWwk7jzVwGXBQYpxbDgw7zHyA4sKyFHBH87v3DCpp42adC",
  "key13": "5YkVU5jccCmiL61ddHyJfF6eh94S8FgWWsVN5A4mtSNA3C9nM7BAPWcDLVZ1dhKS9fWmHkty79peC5brvQeNwNiJ",
  "key14": "5FuzcftUStifccCuftKJuGUAy3eAN8fiaQEKbr2nPbtaEX9dtPejCPMXQ2FyqhzjLjGTZCmnRw8yJCT5Ln66w9Ku",
  "key15": "ndhPWMfnuwv73Nen8pNkB7Hqf9QCh7sRgqF3FACh3VBUQmXseheju3cQfJdpXvLvgFfVSBCd1LHvQ2rrw6dK1o6",
  "key16": "4498r38vHyLd2a61rkdTddMr7zsZAxuCecc88YVigQfYrGYuos7oQskcU6hCYtLK5oNjoRGTNCtSq9WmUSk9yobA",
  "key17": "6e5TT2GmVMe6doGTBuSYqCbrHwB4m2nNBhKq4nRUPy2TBjPy48sUBX25CPjxgUwufiQzkimzuPkh1T2T9dmtptw",
  "key18": "2p3xg1DEahwefWpMrdg27Rju62u3E3Q22h9qoAsvA6zyW296whz5YfRFpXGyDmk3TqnPjK4GjZQ3p4gMsmaXYR4G",
  "key19": "m2NZiFqgfosTDshyWWYdgEXNZbDDPfuuL12k3XKLVhuJuz5LrPrGVRtdGAgCJKQ7PUc1HANexTCd1PJGSFMdS5d",
  "key20": "2zMp7hd7p8ory33S8qQAM8mt7riRDULR2KyMHmKSUEGaBmEGjarH8diFpWLaJM1i9wMSbQcU42SDj7CRwsCuvMrp",
  "key21": "4stCK21Ak7dyz7L6eceoxFEFjGSHK9N7wQ4GBBdTRHSxgKnSndKpTFUxx2uQwDBnmmMg2iybeUNChdJrczp5CdHe",
  "key22": "47J4o1e4BCSnVYbt14DLBUufn7DUCy28jHeB35Mno3Zdsjkdx11jpBUvoEbavxfVbpcXLY53da3PhtvcetsEBAdk",
  "key23": "XmuFRzmH3r8NBVGkbBGtsuxw5qKNN4r1T8LHHmHVjwDSW9rE3uCmjZraiB8HtZDngVkwf3Xxv8bMAnaPpgLvF64",
  "key24": "4cYH7nztyuQ69K17xD1RQJCVAvMFw43z3Zy9v6Cta59F7X3R9DqVJnAMSX2nnmrgmj8wVHBtBiTtuSJbx1LpAyRd",
  "key25": "4YXnYTJZ2UkYNgk9CKYyyQYr9jXYatM3txkJi1TRp6cNoihenzAUbwzGTKee8WpxvhhXguKMTnWpqqymp1uCNeQf",
  "key26": "61mZjSJGfp4FKgQD1g9GDSUFshqjjptQFBuE11XiSMFPnjd2iVuUS9EQnXJ4qPMQAZHxjjeEcKQpGSBL48QVxJw1",
  "key27": "2888q5KMDbcFNXi5RxE7sYKcufFocdEGPqgPjvXU3NpUy6Ag2h8ft4U6chEscyHf135sbofBWmYrx5vanebJQmFz",
  "key28": "2ihEMSVfGo5toMxdNm4GVonasmiqhW1aKK9jbyfCY1SUy5dDk9qEs8HNDhZPHpo5pA6DXXLnRFYkW6j8gNzHNmGK",
  "key29": "2Qps4LpTHmofEwFzuSqaXqKGmAZQwfysBeMrcWPti9dewpNxhAgoh5ttQJ3hJgkC9rkUj7stKo6c2P43CoVxnakE",
  "key30": "67XHsdUo4ofbfncebi3pbNvs2cnSeF3duz5aqTnYfwuwKPPDM3YXRJb9forNtwGHseoDqzj3MBifMJvdBW3r6gdq",
  "key31": "4FWWNGUuu8cTe4VhtwrJPs7HSyXisSrYUwd2rrkcK4iMWVtPpZfnh3QjqakZe6fgRfWCHe3Gg9MSomjyBhssriXW",
  "key32": "3WCiNWGdacCZXoMzdNbEY8Pvb5PGb2wDypbDaxuSBzEMYimgEq6sBsnNSBRhfi7dMfYBXiNgFA5eD6iYYKZv4waF",
  "key33": "54EXtaZwL97YFXXjpkLQDz9JNX9EWLzYLVvMm78oc9PzTXXAvF7YEDr22aKtFcJzQpbC4Deho1aSdaS84uNTzErW"
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
