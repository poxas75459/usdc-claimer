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
    "4km2Xv2yp1YR7rPx1f7SjcMRHFtFXzAHbp5pyADtSyLRkZY5Xd4NwGMqWsBL42YZxzrXAHucnAVUd888wLUedbS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcugSoNZeMCZpXsGFQ7M7m9TTdMEVYbo8bwfnzT3RK6LfnZwzq6QiCSuq8M5oTX1eVe5F6axWbUnbZGmFZpPjsf",
  "key1": "3vNcA4mmxHj5gJsy56y2ruin5Mf1byMDB2b3iLHwrKjkpiKMUBCSg5PrGfRUZDo71VmaXYwAhAn91BoXjLZsQZ9G",
  "key2": "EKWbRbzH6GavcNaEiUgZZfv7WPfB1ogtfrP5aTnv4TNXx1UYVTJD3MhFd1eZsyvMHUvSwch32CX71Yqr418K4DF",
  "key3": "5ZnJQcMo3fGRyMiSW5NZqmA1cAAt6h3CvJHYR65hcjjM9o1DWdCN6P8nqSoeWgH48ZiwjVo94ujSFGXjzBq6BnAq",
  "key4": "2vuwG88Ex88PaRRb2WDYaXJ2CjryfhFEyDvbGLt24qEyyw6nKRecY8yurmdwfSf5V17EcemDA1dzvaQHvGWmVq27",
  "key5": "bgunjnfKm5oAaKDHy2wFPNf8BJsRfUCwqJ7KMsb8DQ5hwqphn93CV7bdZFWwY2uAzdFpjf5BNYWRp2C9cNLxfmZ",
  "key6": "5kECYe3TZMbDbLfMpDWRN858beEKpuBrB2uMw6ZHJCwbezK59iaV2eSbkuuLaKJPdwFMZ8s6aGkhBQ3DByHvGcHi",
  "key7": "wt58J4kLWYioKE9o212c4vJR6Gizi8aAXTUTooQ5AGRNPPX33byiD3riLgY7taaF4PB6ZkF4yp4eZCw21EdoyjU",
  "key8": "4UgTCT1tjx2TcdwE8VQhdm5DakccTiNkR8kZwawEg2jWbq71AiU5aixToYu2WrsuA6GvSbXzpSg8UKve7Viqgpib",
  "key9": "DmAmEYwYv5MEfgqUeYQ1pYUFvtxbDbHM2N696V3EnkAqMERNP6bEHZXHbUNkf3VWEy5kCXKQR9u3TqpW4XDaMpG",
  "key10": "bEeHPVwPr3Yb5gutHUTEKgr7kH21XC37k2umkma3ML9zHvRdvYDe72yRk7JL2176YeGm6bp5zwAeHrhgU87MswX",
  "key11": "3E89dUGCN6tsTU5a9yzjfRMgCBEnUnHJ51514TdS53cMeXS9ZkJcvo71v12i4bPGbD6jfvtQ6fWKV2Dwie1yEn4v",
  "key12": "2g6Sst3s3rS9cXG9dZCfwDqN9GDXbBJkGkupY4W2Li15SfDD5o1cfY1SEdRNUYjdY4DUTB45usbzV6SsrzBQ2JD7",
  "key13": "2eMTBCAkoXEpvqMs98QcxyNbgtjtnHuodxC35tNd9xZF3JUgj1q6KTQSgZ5T978hiomzHp7WM7bW31GGNeAuyRrc",
  "key14": "55DMaKEtTLiNKAt5EuMHGpYbx856FtqTyL53ZE9ADjLL1ohYhJgyWTbxFaD4SsLnfYE1735xmYrT7qV2iNr2w2fU",
  "key15": "3ipYvjGVkbqWtdzdrTh17YQnqpYsLwNsGzdbUoLnmoPyw2ViaCzbyt3fMNFMs8GZLHipuXYPuqnet6cmRi3xVq7u",
  "key16": "4e6mfAY4mNYN7Y9ukozPmGJPEWjxKh87TtEADC41SFW2ua7eNjKLn7P98f4bpECXYU4av6e5QXs1jX9u4iCkuPmM",
  "key17": "GG2XXqXrjKLRPNpk7qXsszZs8qjrrPCQezVkXE3t3j6F1os2YEn9FXWa1v2xhLmfxuEGFNDbTcwg4ks4fw8yYcL",
  "key18": "2aeaLpKBUCCQxGrjf7URKTM3t5fxNvaW2T6GPa66waz4Zd4Q3e6Z6tHfydMrL2FmerbEM2vrd8aFDbpPu3LrTvjM",
  "key19": "5apmsX58N84arWgzfFJVuYtBao7DKvNAdmB31EXJ9WtMWKQNB8YcJ7T79tmsEemovNgK2K2pV9x1oE5xidwk9MyH",
  "key20": "3bb4vHzx4amhiFT5VBSJyJymyvBJ58GccmWCA29jr3QJomrftAp4NHw4AnfW1qwdaoRXYQk78XPtqGLPSqdckPei",
  "key21": "2UBHQDMdJyC7xzQpCFh41nFocSY11CjdgHbRGjJxnqPDpXAbjQWpk4vD9dVx8TdAWbx7Uk7NUorguzm7bJhxZpjp",
  "key22": "xKoSUJkJK5Nu1VVtjddGR1trHVsmVnsVEhuBKaLVjbkxh8h9rgWx4xZBrW5fsSjMZLxLvPbM4dHYraYnuKJQNau",
  "key23": "5AHQfynBQ6YQBS8dVY4pGhFNsXgj3h79wouKs278TepLgirNvVeQHmWxDmTFHFUhLvuw5XSjgEgxLq7FungMTv7y",
  "key24": "3w5VMURq9XgpUK3dDRWBSmzHkW9p4zPmRYR9XthbqZqb8Te5AE8qsaz7gzfTyeDQ9QZ7QcJ59RWF43UFdf9kbMtc",
  "key25": "3fC2tJK2BBRF3b62tm7VECTkhsz5MGLyR4pTBdMQsxjwDHii6Xos9YFea1QmfbCFoHSxwcwNgqnhibw8WDub62nT",
  "key26": "3KKB62DdHipvjVyqV7cew6kJw1vVSwbzSKDMg82r4pEPMa1T9LrqYorJdXE9hMu1F7WZgEnd1chE3Fh7EqSq2gQc",
  "key27": "vXPpv2mb6a4rppeieCqMvfE2bBsgsLvDgy9wfc9gBdZvicBTJg7e8rtqwyZUwqqdEyTBtKg5pYfzWMKpdRg9m3j",
  "key28": "5GKDC8Kz6CBjQFZXLb6Ye4mpVnvz3W731oeUWgubQQwkCrtpoVoEy4H9ktnLYp6Uvv1j3PxZJrryjHrbEsDoDfut",
  "key29": "64uoX3vBpj3ZUXnB3WXVxrj9CEVqMrBJGAhkZKh1urf5tCFtHPJ4ywpfDkdieJFFtD8Z1QfCDmzoyNwUk9izvdrn",
  "key30": "2DkfKeiR9e6RDSuqXQzYXKvzLYGfSTtPbuGgsU6uFLmgcAW9Ybse192VnjxqgJ5fAatENg1TGen9oSHZs6toKPKd",
  "key31": "2tKXQVLQZvuojCQsxSMunxvR7PmrkzDbH1N6op3f5woPUQwxmKo3f5NQqPZLVi33UKHyjJagnYA7aoP71kCev6xt",
  "key32": "3gKW1jNfmUYsokkJ7qVeNH78TxMrEPLsojuvavMJP8bCA6eignC48r19nxsWUHSU35AWjYGRBBVLrhpAKZqf5aKd",
  "key33": "2QJ8X8MRWU4WuodeGRcpqzYgJAKR6YjZ6LoAGtUGs2sjBmkfXavSterTrAGU4X1Em3tUCeudTg1G6iCf9su7f3yg"
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
