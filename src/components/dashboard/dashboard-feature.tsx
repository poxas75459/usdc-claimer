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
    "4dJ6Xwa2gEwy6qVkKAWw122mCtekHamLYi5FZyrTcjv9zw1hHC6MMRdUyX5p2RvYaJmbv7ZYDD3Fh2G25BkfRVHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L4DVoBwv5d9Xc7mbAZe9QKbVdG1ZwKrLToKasZMQLJoJbcJByfUCcd7ZfAZJfJxSpF3ZJXzq8N3zK83qS7EQgUJ",
  "key1": "459cexXBfEht1awY3i4XNr7wRLqm1wb8JvSepUfRZe51fCPt9mz4j8TRQanax2SRWMi63Vvq84ewNa8Xp5TCHV98",
  "key2": "X3rWhDA5rey3KiVzY3c92AMCC15pjWrtWq1gWW5go3k4F64qie8SVXEEuNvj4PhH1tGrdyH7LhVBpYvgHpa4nGY",
  "key3": "2hyo3zBqRRRXs7qbDvRgM6Vx6tDJgornWvMQAoXiNqkWNdwNvZd2d7htQ44fTX3xMeSvzMWFViYHf8sy47ibAY9C",
  "key4": "3TPWZCnupHkFsxf9Kvk9QKU1xT1brtUsBSPL7rzbsj53xQzxyUoqbLPYWVEJagKA9S7sjvURFohb9DGRJ3QNp1KG",
  "key5": "2tMcSR5He2FfU6ztwQbTv5YGMLtgFQYHkqCHGj5KuqX7UQ7SHf13rMuMfum4iXEUX9D3ibphV5oSPdDbjuxhhRpc",
  "key6": "4KNvszzmyYJQbx6hS15Vf19gzbmt4Hk1vhNVBZQwnZRv5rmBPyK5epJqbzNCXiJ92NzTxLaqQTK2DJHP4VvAC6t2",
  "key7": "4sMSqFnXDJdPSQ3ijKQF95MTNxA2DctNb2BXW3MaPQ4xF1H1iWYJxuSqFvn7z8huNd2ZK99yGy8pXaPCNdpg92dp",
  "key8": "rQSBAuJxiLCtqsBjJrSh8L2RKXPkJDgo6UA6i3v7CkTMvjByHSoSrNZeyrxjiMChb7ub2WH12tLHxUUm7Ji46LJ",
  "key9": "ZbeuduPEGo8oyHRK9LPceopA1XsGb3MyBesCiWb8d9BqdJP7aUoFqdG3oPDRVd4cSqgtNSFq2UxhxiLhMnFzrnS",
  "key10": "5ja8AkHvjvMvzHEfsyvjh3cGf6fPb8wYUDUNEYdu4SB7n9u6TdAF26EDgRwgbBgaEtUtf5qpCPpCSDDTFXBRvrMe",
  "key11": "4tjJVVfXXozYP9bRWDdvpcSQTJ2WA1rmCvREkm5bmGBvrkGGq8iQHaU25Tw4VzYycCTHct9iqEHoG3RhR692iKtZ",
  "key12": "3mUrymWgAyxC1ReoTqbWE3xG9HZjLkGsgLqFFBM8N9J2CURWcip832AthWvCPbg5qZv4bc6awbT7fiEWqqbcT3eq",
  "key13": "21BBkWqaLeM5GAkNLu6VtsMjoa6EzCYL9FN2zFFemJHpkMzaRcfrBa1hFNnVfqKVM7KNGeAnvNqRfmd6nSmRpkAU",
  "key14": "3f8x7tq5u93eYRVTWW274SMMRvmdCmBtMxd6at5rsFGKY21xmva5ntzsLzUEZKanRo8XxRL8fHPrNgqJruEBepUs",
  "key15": "2cAZAqeuQ4DxAcF1x68FzAGo663Wh9WRaVamBCAW4EmeBPtfBJtdXurxboTZia51wHYLXLhGoXQM1aSAqs6S8N3r",
  "key16": "62ZPqsmPyZ4h6iNoZdk42djWhCXDi3ENLCkZCSsXroVosPSkm9r2qxNhrNU7Z97rePsdxwuJrY7yCWntNTaPi472",
  "key17": "2HT6hkhz8aa1T83VKWJUa1c43rvXvzSCZBLzwTwZaEQrCB4rfmimddhDmmAavp2yW6qDsJv96YxQrANxDdAaoChx",
  "key18": "5GCW7wLUhyUBHT2MhAsxW1tKNTHWta9WPkQ6kzAXc7VfPRc5rgSVLKffrwdFgfwdCNBBTm9UZ23dSP1PYPitZ1Vj",
  "key19": "42nc9rWpGC9a2fq5fXAeNHAx6VVEhUGWsK2cBiK4v6k43nyEkhhgfeQhx6Y16dmgx9rWngivviX56Jx1ZEbS6PrE",
  "key20": "2QowNA1UHPu3TF11DDufPLq8unjg1ud5RSRggb9Z2kFhdZr3hAPmwYT9PPymQjUjHG7fs844x2mpM8DCJCaME54D",
  "key21": "2s4iw3XsvodfEuQDS7vpucqCV5DMdGwPGrDtdGScRdxsqJ6eN8pDsAQLoJxBqPuX9DFMiEqXZvun8NnmqqTZjdzP",
  "key22": "4aGz4i2KJURiTLqwiSpY1XoQkTpqVfUC1LTTY6BCUuWzS1LcyhFbYqZoHH7RCqsNLAkHKoJbZRkbtMCXowi4LeFq",
  "key23": "J9ocxyNebnbSCVGEjcn8cTkYFG1KGWkeGoB3DPfF7TYoZQWWTFRd4vWpJSgKjkiCbhAjFBB678Fb6hBcSN71tkc",
  "key24": "387igBGeowTeP9SRhfNkA3BJTzdWK8sbDhEoHvRVNYrTtkDQifcUNuL3gf6KkjZzyyx7YgHMTUhm99Tg1iirJdgA",
  "key25": "2CHkrydQR742Akco8sq4SUmj5f6bkFW7sHHPkfob2nn6epEDZDtSsX9HCcGcKkj2D4u4Nn21mqJKv9UAZ6pTN12r",
  "key26": "5mZ77LaJUTAzGpccgS4jzCzXxKipJ9HdD685CDX2vEBZ3RFTkxRMHSWKvrDzh3QfyRTYVAHwHFrB3Yt8R8B7Zc23",
  "key27": "3MJt3WmjoADaJao1FRit6SCTmc34JV8mdNxXKtnyFsRnsA4tLsjquCnAuNkvv2bhNwtgCYas53SA5xdgaSKmDxZZ",
  "key28": "7deYhfyuMZfdjFLd4ZumL3vLPAgPw3YB9r7iYDvXncLK3dy2tcvTFeH53igt8ks8UQdNyvto6J3JbD8Qerj9SyA",
  "key29": "3J4gJ2gFwvUcudWM9LgnHDnWNn3cRBmG2uyhzYNuAMsFJ1JUDmZCKq8hpQ3XtLe3AsKV6aMn4fk9ZKdkRh9N3eHq",
  "key30": "4GDs1MJ4ETcPp6vCReQptBTzHfFbqLEPWZ92WyrnQz9bPeQFSffcAy82JHXpQSba6uBv1Yqycyfoidtidf3Vm1HP",
  "key31": "KJiJrJw9QxtcetDkP3GaggQMJWnk8VeD3jmPDQW9CHpLam6rFSKirriL3pypYGUujN7dVrxeLg75wKx4Wrjzedf",
  "key32": "4a8yxgygMeZeaSTDhsHvD35HgdVw9PQrGVwwcvoDdeupF7Hb1cfo4NoDxr439PpoxWwXw2UkcDaVKkG2Febrj8xU",
  "key33": "2Y7vfXrkhZhhojAuicFgkaRFL8JK2eki8BCcW26sdgfJkXQbnHH84Gmr9ZzP41A8eUVPuiEnC7fhGWp8z3kjzTNA",
  "key34": "4ys88R6sjT8BwgDWSpvDvpdNYWQSMnRb3henPzTbjbtD6yhmQbiW1YfwKKaievbG48iP7p8iR1JDZJURfDxkoVSq",
  "key35": "5aa7sJxj29EMjSfkusmfR6ThSjpUW3x8NBQrQEgaQNoKxvkGVXj5ddqMQ2qJNGpC3y2fgoAbNVDKX3BUkbBa9tky",
  "key36": "4FcKvnRBkSDZBAgcxoWe3bGqJvRBxm5D9kenkwbZm4jkrbNViYqHs4EVhGoQgjyryR5fsL3NfSvyFLJsKbR8JGuq",
  "key37": "3GjmgNYZ6318qVWuXCQMiBz9W6BZ9hJrwU9B5NzkQpxHhnCExqVWbUKkiuQGareBFNRV7tV1PCsPD8cK1EL2mc7x",
  "key38": "BRwrs6GFdndsiGcCJ7yJsf1T1yJ9uasHDn9fj8q1ujbHhFP9ZVUSUzoemPzjom9RAt9AePvoAWX51dporp5LCXU",
  "key39": "rkbt9QhUdMXfCJke7NPdV1iohL8z794HptJ5HPXe9LW5doDKNMMf7bBvFvu4S1SPRgnWZpVD8SRKqDTLP6vy2pe",
  "key40": "5L22ocvSgYENoch76ZSDfyKSAuswgdX9GMNf6PdKyUhvGjdTGTSJMgLeq1ksUhQdsY5DGBgyJzstFAyq1Z3MhHeS",
  "key41": "5Ese6nyxRjSZNapEA1XMF9LU8UxF6GGbn76wKpahdUD9kR1dyCf7k8cmzyCWkygbq4pDK2ywGMjJpX2jViqYfUsZ",
  "key42": "4JYYJcodVcRM3E1PwD9swYZAGmiFggkkpusvPu4tvy1ikXJ1tQ8kX8ycdKQzqztCPNNG6rZq5eTxfmpNRHfosX1B",
  "key43": "32HXNRVFnbcXW5271wbC7rteMbxQ3oWMiLpnDApdf4wJ6WE4h6suRukdacY1nuFKPUwxuBoy2tFHJ4qgfTAhxiEw",
  "key44": "4PozFMheQpSVeiM6kGx2FisxXEHYgS5L2smgT4CC8KHsm7g9Ubfie4Hcz2AfqMkMtEYGB1fH4zN7Z4Yc5vZYM4Cb",
  "key45": "4XvdJS71z8EyDN6NEhGT5r1mfA1QZKZBHKjWh4JobZuP2rs5VRzX1kK7JbhrdrNbA8dMjbBqgHSCwug398ZyQHuc",
  "key46": "3atA5qTCUnXrYhLAjx4w6Twxau7aRtHRyq84B6AuhjBEj8CQBgopQ3yq982M5XJsiFZA9dSe3Bm75hgdTFqZtqBS",
  "key47": "2s8iSrabiZ7tyqpMkFivxGGoaQJqxhtauGAGkmjzZJB2hJWdovojkeRBVDCRTrvZvBTAsCdGoGq5Gc59pCYqFggT"
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
