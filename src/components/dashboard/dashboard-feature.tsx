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
    "2vysvCswtag4N1VTa9CtPM58mun27Fer9Mo28qqgHN7ABDuXvmYzLdnJ73NkBMGJthTqbTrtuzqsdszivbHHYfrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JvYWkMsU4aBMCFCYU26gkg34TSc2s5PQan4mWhSRWa83Qjf6wj6uhPYPdMvbbbvnxxff7bZUwLH7aMA1kUGceM",
  "key1": "7RdaiTruDN6BnSiRyAWqinUZbUzpPPkA2SfpGSk3ZJ5BVEiFMRxAcEFAEbbTxubK2fXgNSDd9R1kbqEDeG1wynr",
  "key2": "3ZooiGjdzy6ykVjxTtKoxg3tCAyPGxqGi6j1a1DouaMJN1hWTCe64wo7SLjXDsuKpUrdmkH6HhRHDJjUWqQAHpfJ",
  "key3": "2z61fYKNhPFuHQG5iU56PLG6Wpve7oCtTByjW9XWh6RtvTDvHmyUuf4hY38ws7XKE2RMudGyKfhakN4QEn63toee",
  "key4": "4fz91GJi5R3Syfom4omogUtGtvu8rw6p8EdEhr3uPiLA7GsmvnvKGPpbejnLxEU9BjapiyMKDey5pWuJkMa6w5kD",
  "key5": "4nm7BV2zmzkiy1kRkbhCkU8EypU4CzamtaMCRyRbrVwoMxo8JvraPFZXBZozU8EkRXUVhkLPBzq62oV58fA3xerx",
  "key6": "5FKnsmrndpE7Yd6HnvdLbqLZTeU8pukgPn37xrU9vXmVx4VPmtieZct33MYgZNGSeKx48nTfpH9b4r4kovt1gQi",
  "key7": "21jzGcHZNzXBm9Ue5i3u8TK9HKbWPtMDw1Ea28zWE4xjq9zMwnHoz7tDKhWgj5KDYJnUn9XGtEbpGWG6wZ23ag5s",
  "key8": "3zioZ8Rrf2sHNwhEfbsQMnRVRnkBJgSywFaEC2qmftvY9fLRyfHGM8WZnTb1MZbY2AcTAxADTzN9Nv2xtUkZZJ8R",
  "key9": "Jrh2j5i33eLN1T4A49jkv2cw3Fq6N1Yh7xNgb6Lb7XXwjHfBfQ76fSsy7vG7q667kxEf48xadWuqAjzgCY1W2Mb",
  "key10": "2QiT2vuxPZFhuxoAGbDXjpnNgxDVLt7jgdEAWv2S6ZCadR4WD5EZZDBrk7vfFCZxh36ZcZfqmT82gg5bmt9MZD4v",
  "key11": "WHUuZDvME2ebfarHmuc55qvfRztGxXZaXNBQndD686ZWStZx8AdNN5Lo8CLHmgY6eitLSMbnR9b4yR13V2e7oHB",
  "key12": "wMDqN2EHmVjFNiB27cqQ1nrUNTkEZYbaeq3DeiorSyzng8JmrWmQsKHZD94RbncatHMJp4vZ9NPpJLWsSHJKnBQ",
  "key13": "38648PeRkBJuGDGHMWJhq8h9CUt5Zd66jzYx6J8JBBHcd9Ur2jb7hezsde3KgNLVn215bCcaV3UMDJof6urc5mz",
  "key14": "2pJ8EAd1gsLcQA36k8pNzShp7a46yPhByi2cdh6NLdpx9AQV57VoGJyG8FhtqoEVpXcKVjXz5mAMC2AF2fEXKBW3",
  "key15": "64P7H31eKyMa9T1XvAu6kB6sJq5PoWX6whwiM1HtyJGt71638GjdX3heRHFjjS2hmWA32YEbpSWv3dV4Aqzt34eB",
  "key16": "5Yhndvo6MPFwDj6CaWJvcrMhgr67uVVuAaTN1fkTp3WUJznuAAWczxkZvFRDMY28hDqSVbGkAMiGQXHz5crkHJNx",
  "key17": "PT15KZTan5eWq4TrLR2aSqou2FCqtk3hfZDh8zytZ41S88yrFuVxznqmum175jNS2GFMyTtoiKuyGYinSdYLKs4",
  "key18": "LLjhmbMiMoh8zfih4Cc9L4y4mRR4tRdeMo1powYEBCgiainXaKNQG9ewFdLhEh8ps3GnsK23o8Hj1dvVcteEERY",
  "key19": "3WMwcXXPZBA6cUtvTUxZAE76UENXNijc6PQs9Q5fDkCDPixP9ZkAnmnwVwZdYfPw5vPaKJxMyQsgXjsWbGnKmDVW",
  "key20": "67o44dRqscC62mphexciV7bJsgWXdDJvYJTLZ5PmKfvf2Dify6zQ6gksfWQuWybJnEXCeAeUq23kWRxfPay1vF83",
  "key21": "4sCXPNuDrpZTxMLHkGvZxp9xHERiCa5EpkqKUf6dwt2ecr1N4qGLr5CWFSQJTnQyafy2FViMHQJm6UCNLqRP9fV",
  "key22": "5z4MPeqPQEJ1UvgzXMB58AqZMvd6ZKCmpVsYWxMPZJhWZDPSTaRwWh1eFMYWqxnLdGHoPWE9bGTDc2cxdx7njZ4p",
  "key23": "62w8G4nQEtMhz4NaFiYjJionVpRxo5PaTLgAKxXkG6FYuDYGvHxNgfHJN84xVt8oHWNZVkbomx7dLEStc6amx2Js",
  "key24": "4NcRVTqkERYjGDYUef9aFxxGQECZrtDJwSwyu6uxJsPP4opvG19mFeWwG36khRxfMQ7m8vpzZFF41rPbivfWBUH",
  "key25": "4B1k5wDa8WzDynBu4oZeyQrmo4FByVw3FxLu7TgGmptMTccrwBp12tZ1GwRjpk4mfiJ3crDBv9Dz943xEaXLifHv",
  "key26": "2N3Z5XeW6YFe1QcZbzM2LhdBheD266DJi4nWwM1yZX5r2HcumvbAFFySGyKxBjyDMujQcNFLHUBBUbzruJ9huN5e",
  "key27": "2msUcyv1RijfcVEhNF9KnVuiynPDpyd2MSKJquAdD7mwcKYnfSTL776BpXWEfvn56r8NqPp932fgQfr4j3FatQpC",
  "key28": "2TpKpHT1H7ASMGGiugR357v9KZJmjedJs5LGbpAX9zPAxWh4RTXqB2AeavCW6naimBiky2x2pazetkW15Yc2WsJe",
  "key29": "57RCbd2NdCuqZuz7CajDCj9AbY6nLxsZMQKgfHGTMnqtCRW4zaYkWVMHjtfQW5VQo2DkyEf6tnbnDu2d85zD3cTp",
  "key30": "41iunFYF9UTaBnf5NkdhoZCD8XvxAFwFi5QkEofwTTE7bdjizHHmu4geoDeR5wsS9L3nkz7GZakCdtnArStS6gKL",
  "key31": "3vFJYTHuyqUakhbm39xSEbc1PN42bEyA5GkjizvYtWYF7koeq6hWoucUWrh7VfG7xMNwdjZb93jKvRZHKc1J3uVA",
  "key32": "3JnZggA5N9aLw5HVGd1BFHeJhgjP1gw7XmeEYyeDT6skKDbyEeMCujVtc1o9D6kN6DnQU4QqkF4YwTvjHm7R2DL4",
  "key33": "3mSKkYNa8xwqMmRWR5H2Vq4rz25EDx19x3nBsyZyDWH9KjMYASy3QLrNwW7nyKSL6odJQKfpPQdF84Wk2MEkZacB",
  "key34": "5WcqFjarc4pw5b4WFbjD4YuajhBKCpfLA3pGFv4zEr9sn3dYVNBzbsmBAhqSGhm4vBXfzgxhrvcG1V7MtjVwP4CT",
  "key35": "51wAb6AXMC9d6y3tVqys7GiPBMSBfRrpgoS5VA4cRfzt2tAWFC5rFAC4At3n3z6XK51xf6xYX2ccrx72QryjLejS",
  "key36": "4h9VVeeNk7XDxvVwgiZakotiFymwNzKRoHzGsx5BpnFib4d6ZGpoLojELEGwfEN7P29e4MJvxs1he5yuMv61qDEM",
  "key37": "nnST1iKcbJhRGfZGWAVyePLM6fXkr478nyvvJ3sWfENgAgxhph6JcyGnx6rPzHShqVqoPFe7xGqjbv5eDhjDFan",
  "key38": "Y448JSvBkaamYyGqqsXRXjGksvUvqPoSAFnRuCuvM5h9dsmFjRowfeyonUnnKSRi2pZKJ7g5nT3zFN5v36RRWQF",
  "key39": "5mFPqEmp9td2ftLnavUBhH4gE5MskCysjEGvJ52mF8nvZRCV6YN9yAsxTJyQ61dzCYucLbeiwHaW7F35X5xtCLzk",
  "key40": "4GHPBE89KWDrwy9U5P5k6uuvmrTVMBbfdHxR4WBurSa2Ld3KSM65EBz3KdBGbbZXMGdm2hwMXHHhCN6KtUM8FmhG",
  "key41": "3R3qhWwuySioh1r4U3duNyFCYDJW2TcocxXpB8NouCdvusAdxvzXNj8mD9MNbY48nXsSpat3eBHmXoesEZoF4xcp",
  "key42": "Go1YzQb7DY1cYBvadKgQod8119gs8axHU8jcBVCCrxXxfHzfzLCpySY6rYUYAUunHFUYxdo8x6s59cDgpfnWKVD",
  "key43": "3jtE1JJYKTTrjRBmSktYKAfYiK6dT5toRFvURpb3UMTTr5RgZq8bF6qdz49RJS3kyhNteCNeMpLjndBcberWq4GH",
  "key44": "3RvMUDZcsGhwsjFTFDzz34SD5fn9AKEqUbDtamt4AbX5eXj4ufyAGHbMfjbBsfVEdKwhCjbLvzKJ8kB3bBu9Wpw8",
  "key45": "3L8x4UWwhGNNe6i8DeVVvSAirCy7QCvVsnX5Q2jpnKw8TqkhCDDkLsvmHZYWvmWWyTsQMeqMMLHvnVycp9nQoMnL",
  "key46": "5J4mTmeLdKWkGVCBNb9ipXwTXsLTWSht82BNKgZqVyR8vHbyxPe43ni37xp8oqEuYDLLheN8nR7jrnE7qL5Hp1W2"
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
