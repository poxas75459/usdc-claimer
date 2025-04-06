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
    "1EAX9FfYYJLJqouztfmtsDVDUMM7vcypUbHoF4RPKResyMJiS1EjseWXw3dgALewm7PZTG9NTi23Yp1Qp84Ri4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDxZH32MqkZhnTZWUacnvtMfu3Rar6QeHNxhSt8pM29D3oGrVrduggA8T6SnBUiFdDZsgJzUvdV3cKjwog7pnZf",
  "key1": "5WFZU7FS42xxV4CLJ6SRX6FnAryKriWZWp4ow48TGnok7CZybEPUuVXsktnuyqMGJupSQNWrmjDi3M4PZ4cAH7nB",
  "key2": "2HWeCt22gj4oeCZKgNvnAZpJDnfGSboBnt616AnynHUbwBWWJeCjuDHboYi22H5VrCeim9cTefr62qnxeZHYgton",
  "key3": "YjZWs1TTCkwiNGgoiCjxNX8EDNJs4NU8WtyoxzzExXofaepZfjHbuVYAYkxyBrNvSjPDjCZbACBRJbiutgCUcSr",
  "key4": "5d53HPYmopKz2yGvKdeQox1jrVvtmNULkN7tznSokcAhtZL61pz6GCpvgwtXncSUurDhrTm52kJD7ghV9paYRZP2",
  "key5": "3k5FpbFNbrSVT1KtabdepHcXA3gHqny3e3zrqCxe8L5uC3nNhohFatKVbVgLsaBip5M1gTqYJK9s9WmFk9J542dj",
  "key6": "3PouktV9pnAptYo1hD7W9E688E29dBqVvyd95ar2emHWiCavsuSivUcMsKm565QBRUeUn6DRsbnW9zKAaeCvdfhi",
  "key7": "5U21dUs99JYa2w4EfZMLnVWSyME2tfFE5t3UpCLYgRmoaDV88CkSZD4RAP5N2BS3wcQzcPE5sWkDjZ88Hq9n8J3z",
  "key8": "kWy3khcTeKZTowt8WCCwVccbGetm5fYmhzjcShsY1fz7J7hLB4NBXUyT2BTUoHAiaX3bCFmb4YcZb9973nKo6UM",
  "key9": "7Mg21Q8AdXQER7smdD3NLxDDUHwTYQWEaNkpKhGNF6QQavD7o28VA37ov4mTuMe4np1KDGRVoQ173p5GH27djr3",
  "key10": "3ChTVeJVaYJofzx9q3vmMa5tSA8X4pSUDnBpuhDZLmR13kxzgZsmcLn4a1pTNiN6EyT452PjDiDfESFDs1BbPgnM",
  "key11": "5n2UDRc7NT8R39UDtFpJXDzNehCuU9g5gK84h5bjjw71mMSNKx6J5qU6DTjZwqVGLzq3jihLwCvrd7bQqMhTXjLE",
  "key12": "4auLonzDjWgFbtsujEPjosJtLEC8WPEemhS3cjNQjZHks1MmHzP4r5prgAojBX4pBch8u9UXE9XzJMLzPBvJ4Zsi",
  "key13": "HtKGjSYXJDGFAuWQW3pBwHD4DagwFNDmnK21p7WZ4ovEQvTZenmsEdFeSNXoFVdeSb5bpZ6Ci5BDx3ezqBZtwPR",
  "key14": "2mCA5n1nBWaMwTeRCF3ppXrGmtJ8GRQx4yzaSk56AGMNxW1KctB9ug5ueztG6Ff9orUtJiuFgEr7Ay8aCMWZoaon",
  "key15": "47qZFytUUrqFPAemZQuGSxgWShaQyAwTabaRCYxbysptWjfUyBbPZT7M9YDsEYBqFGcQtQPwU3RDTfi5rPbrJ6qD",
  "key16": "3wTY8TT4mjj8T8BHwyhxrduH1fCN97oFtdEW9VL5EWX5WGkvnoheKEG9pWGEnH39GtHP94CuipT9jXbc5dKUXfCJ",
  "key17": "3QG2Lb3CJne4RnBGSbwp1brqUgd2FGaSyhGNpHHgAXDaccqbDxx12E3GH4gMCyAEbmkVwKQzFZr2asEwQuPYWqYc",
  "key18": "4mceXoLLgCasAN2W2ZdbEkHGvWPTfPo7NJPtSnQSjmXmdKLLzmwJiwHDPVwTA6mTAu2Qn9V93XfdrhUJoubtTjf7",
  "key19": "2FpYc4hLZbd3kcVtuWo8q6SERBgeUrFrHFugydNynwPYn5nwSSYf5zsVmaNG91Yq22U6e6VoG2bQAcyKLxkRDeuz",
  "key20": "4ML8eiUCmyBfdwuFMSEiduzMh7h4J4bW5A12Tpx1KmoYPA3ySoJVYzXYYcUiK94JyNgY3oyKMso3hcgL2a3oP24L",
  "key21": "4NZ3WCUcLqNjA2oFi4MV9EBVTYRSL6gAJ5wmujg2c5joY3Zy3sVRdSm7zHbyXDed7yceQgoUawAbW3NbwSZkNb3p",
  "key22": "44CF1Pg7kbwHcJeTKzVRQYMttTruzRKq4wcXyc52bR8sRLo7wteqthN4g6t1ozrXcUcAk8WS8vBugF8Yhyg2zwnH",
  "key23": "2Wn1LnGe7Sx2AqPWCsQNURnTPEPX6jhPmhRwLTvF6xpdxz41mMHQVysnpV8RqqfaKQiV8vShd2E4GMCGfrE38XhP",
  "key24": "zAGE3WGGM28G2i8TPDDVXKG6RPwsC8X6qP2mUH7vMEM7cecc87VPoWk9FotLeQshBecsnnd8LVCwnFpgdoSXDFs",
  "key25": "4s4dqTWcyUEFAh5us9oSG2eQDfnEshvoASN4e3ExDFtpLrWrDu8ER1uEJmeeqQruysjqm4uiVcXZb5NCM32Jug8G",
  "key26": "5jMRv7hfg4imVzQuk92fzofT65SKbMr9rc6LGhFwrJshFV1nm2uHLpiLgwM6G4NApnjHixMgdCjr32o8JQYabPRZ",
  "key27": "NQG3JV6rAj3VZgc9pDuktP4W3zqSRap7AU3EtuypZ3xEeBnWEaxw9utVT1PKy81yNwz5mzXj2YGdztRuh7qrWXx",
  "key28": "3333skzg8cZpWr76fS46oMHuFFtgVQDPS54WXCw26SpuX54Mp6v7AbemBUV7mnEpbgiVD9cyfn6seuQZvrnMYmG9",
  "key29": "2TPpiBLcc6AYDgVDQcDEm6Qndvxj5qTgvJ29NGna5m2sqWiV34qgzjFwhjRkbQWvVqvcoPUFKFUjVH37mjxaBUg6",
  "key30": "4vxFtJjwxgmVdaZTq1PNjaU3iFsy1cudK49a3v5QdDmWjhNPgjkhb9whRCPEp1UiQKrLXuB5avG2bRsi1GC2bTXQ",
  "key31": "4gqWShvTcygTx1UhrHvTzRbpNtWaFEdUio83ZKRFtqEMDPkB3CQPbGNfyveeMEzDh5cumPwfo3wGqv5WzUfy4kec",
  "key32": "Q8v2RLqBqdGYZTpjvPHCF2uSFj5YgPeHf4KWdwu8JFpRZN1ZPVWMiG6SUKwiRKG19zidEf3rAS4MDfWJCuYkzTj",
  "key33": "2zSLr5DJCB5qVfTa1hHWeMQzN3iG5Xy17KhKmYgvYdbDtfBvZi5j9ukBEVC9MzKkhQzGVzs2FAhGaPzqi7VvT44q",
  "key34": "YtSbkwE1K44speCaiTazoT86NoMjzXdxQZe4hRebjoswow7deP6w323K22QtkkQd9oYGd4EP5SMbDbfrV4UW9ga"
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
