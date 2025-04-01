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
    "4dW5swDrJN1kQoj8SC4yn9mGhmaXQVNdcKW9uijvU5hZpYejfavFU15eRKWUzzFuVK9J7FgpCnoDsQvWFk6BFehz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EivLmYWBUkpK2SyGfysJ6HThdVgmFfAnnMaGUroDfjF7NigeawPwaBFJpaTASCW91y2h5bRE8xYyY4Byd9nnhoU",
  "key1": "22p1PX3L5MJ9mqUgBj3fs54A4NRwCfAbzsLRCkujJDR8wuCTriEYJ2L7YybZBndZW7HRD7db2X8Avjv8sccp6BPh",
  "key2": "5GTXjhPfApPVgNSgun8QjPEX4AMyspqoWH3Voxz3TKiwYDCMDUc2rpehPe2dFdMyhYhauyRjLxrwUofkQyr7eakj",
  "key3": "45oJPTq5PQrfVGbLkF8FYS7TQGYhxxyLjj3dknQZsWnf31RyNdLA4XaSFN12yx3azPHVc8dds77muLtQcyMnsBNu",
  "key4": "3KZ38DTgyaD6jR4d9WFPg5eqr9a5LsoJhe4ySjCLrG7xa7CaRjXCkUyz8yicyJqnMncuCmCnDmxZi9yhk1mvLyqw",
  "key5": "2M3UxgQESTvHAjAyPVndGEMJSCFMMs1Uig93KKAA87tseeQozmWx18RcXJTJCuZWPoFpLSZ7VAe8ZGYhfYauJP56",
  "key6": "P1U7KtEz31LZftFEiWvEtqkN58Ej6FPVYjDAjwDa6DGPuvk7DvLc32JC5FA1GPccuXbk9kiWoZpoKm8NfBERjNq",
  "key7": "qVQcc1yTrgtfXvMUk5xJMNKuzbgDEyCsPCrwtW8msduebw81Dk6uxpBr8vxHYKD5MTon5iPvn1oxHnP7CCoAse5",
  "key8": "5yeuKRuHYMGZiQ36YDHeQArrujJi2m6aJgwVSiVwyQeQdHayqk7uVUSg2obqZXC6uUFjwgdK8wgH1EANJVWdh7rG",
  "key9": "4fCBFFa5hY8aa5YiVDpnNA6qDHGwRcro9R6NCv2nTvLLdmP3RCxKFmwMZTY4kvQs7RokcVj2G1SPhEB6AFUCE9Vw",
  "key10": "2eM3qYQnRTfZTJWiK31i77L7Np4gyMgPr5qXvjiZnL17PEHj75KXLECjyXU1EQB3u9BF5hLn8Dsdoe1ET2wYfyUf",
  "key11": "39bwUZ2nj626FUDsaRwWskNpkndebrxP9hv5hA3tk8YKhrRuSVxeaAtvGUko4dTaxYQeLdFWMcdUtvei82FnVNeU",
  "key12": "2RxqPCK5QsSqadgHnw1s6sJ3KLftMCRtoiF2nzc7BM568mNAJr1E7ZdKWYuLa22crzuvVZFTkJAFGQQ7vxmjs7Ee",
  "key13": "24VCPJSAYDbxgXMsPg7arj7AH5T4gSZ1jpqaraH8QW7u5kBB8F7mq7YzQ1kPNiksSG2JQQ3UnsfgXYsAbwnbesfW",
  "key14": "3BgRdpJ1anLeqGKCbaUBdNUpEQVxVZ6vRi7FRH1PkoEJtLKT3N5LWAMJqerHyot1UE5k5ywcbNqNxbDmQx56gjj4",
  "key15": "2tn5kRWDn1NmsxvRafZQYUFrVXTrhBXRoJtmzcMsTb8nqyc3L94JixxHsdmXKTh2wm1LtYnmwiYexJ2Nqq5PCyJU",
  "key16": "4gBohUXSdcNTG2t7YkHVMCF6xjsK4SgQuRDgUzv8wSxXEJ9wC2dsQnzZ4Tc9TAjDteoTTUU21dFSufCwMXy5psLZ",
  "key17": "54mXYZ3sDFyCnXi1H6bspbtjELAbA75taZFcVCQkZkxJ2XiBu7ABGG2GRRkxEuxuiRSjGxG6gh5VXbib9uspCUTE",
  "key18": "Zr2tffGcysxRsJFHuzSEmz3n4GodKTQcsudy5ADoKG4fwwwxhzJVXQWRUjkc9uuW2gcp6mcdXV5k6fMcyX61yDw",
  "key19": "48ABfMGVK8Pwo5K8iYzyBxz3C1WgbrN35UKdwqoP1VrfGkPYoTmrTd16Gv9vyYUgxBE2LhQkbhTKHMocmG2QsJV",
  "key20": "4cbB4iEF2wpHyeg4fKK8VY1kZE3je5V9Yqusdhk1sp33SLVNokGxAjwebAPUcthEPtqEvztr3K59dHbToZR3BSPW",
  "key21": "4konFgKUomSMS4LKUSNsMh6Gx9ewj7Jfi2TKfCu6QxBTkoGyNj9Q5g21mC1oVYkLYix2yWposvN3VWeVNCDBP9av",
  "key22": "2RS33qGWK4H2Tvfq2RKzXnsE7i496fMFfhis6V9edq7m6qFgEFEUSbZJpPTawJcg6FuGsv8VmT2jeH89thePHq7a",
  "key23": "4cdqxAHuimAgGPdJhEq4ivTmSet7iV8hHGxTDMRVxUrTEmgTSWNoFgAtv3SLetSWDhYKCqCF8HvsQn9XTLLCMxaH",
  "key24": "61DZkXYfXH2YQF69bM8hz9ehbJM8PsvKx5SxY35iTkZ7y64dfkX71J5RQEYtBdFgz7xCS1sZ2t3CJfbatt2uA7nZ",
  "key25": "kUxfSHddaFieKa7SKudfQk5uQ2XftmZGkMx4ps8fTEFkYxsE7evyA7eHD6QGS3vfUs3gned7AUGKzT3JKHSoxR9",
  "key26": "2nAwmM3f5DKzRSnW3jsHX7KLm4ASEMRzyG3L1NASKZx8B7hWHc62dTpQkD1Md3Ywgnmxs6YXdQzm36xkQzhT3eo7",
  "key27": "4S4xRaetaTvTCrpc8NxWuqmqJ2kvB538TXxge6TE2hw1j4eFZYUppJz95m5id7ujwW2WYNwTcN3DU1dqtaxo9usH",
  "key28": "5whRaKgvmBKtxPZjUMevAnEE6Bs7uqBeRQzcCbpJ2Gv9N8nsDN1NRGhKzMPn2nqzpoAHXL8jMs2KXijLCwZVR1ej",
  "key29": "4WRs6bpjtYb45CjEDR3MiuasANBnkgNS7hJGGZx1oUYmAiyiBFNoSJ3zLRikjKTzB2PA5WQDmzjPgtGVQCnKoJ5c",
  "key30": "sr4r2VWdJZfST93qwp5ZZvqzdS6YUMFvEh33TwUZkcLQ8rX7End7kGwBobwfm2Kdfb4e2cQ7a8y3i71gF38EUUJ",
  "key31": "5hyHifaXqc646svZvpRAjyd3tvK3yYsiprPZncgNPRc9nncbGu4o9Kufb1hhQhu2frsNnnTFqP3cHtqPefWvQuar",
  "key32": "FTt7jL92rmH7rqkuLTiwzPfk7JjSpAjfE2shJS7muzCM9Q8sEuMDzAQCttJy6fswgHRymnwii2yYdRSPggELtc3",
  "key33": "3WKjZ65PbQVpoKbuki3fvLCp2Tix55qs3XqDpnDgWrkwHMFh212tbjdPsFjhdJAoRhozpYRS4BviGq2C4GJuRrUE",
  "key34": "2Wed4CCVeqxCjuX4iErCrmE1r2gV6qURtbyouZo8U8EXHtovaZ3twjrc1TWZ36jJXYMijx8L6yo9wdNeuKirZcLZ",
  "key35": "2pHT4RAtD8xaFebM42L1PQQtj874KMoWX9mS4z37fp9CHLHz82CkTMkFFuzmmhv8GdKMhKMQisqVaTpNhRkgKHv1",
  "key36": "6jQ7FcRSvqrJVs6hMHJ67rvEAgY812SfQuoM57rQv6BT6TgbeP3n6xSJwXdqbUmqrugs4cqBkXLVa9HWVJKSwkk"
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
