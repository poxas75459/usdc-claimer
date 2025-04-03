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
    "6SPieNkvFrSY7pw7DE5sPmHQd4A9v21Yhnd8sQMLcGFVR3wa88oQUq84mgXagxHGu9p9E6uWrRaZuAji6mFM8UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HD6WQS9QU4isiT7o9gC9oEAckEH5w6nAKM3zzTSpPeAu8HPPJKBjZtbmtQqQqnERbmbCoXLMej7HEF75U6vdpgU",
  "key1": "34KqX7cpMXxFABbVmP4cNaKzLqc6qpwS4qxuGLGRqb6Z38M3cgb1tbExHBzR9F8b3C5aoTs1CLuzi1rhkNxHdqXn",
  "key2": "3stWLyoTaZ3qi25poaLTxuT8F6qGEoHotvtztpyZCwV62vWfEjJUPJ2R18TkuuLQnf8otKbXV3WvxpojfNTPvKaC",
  "key3": "Zqciqt9sGLX7EuPm5mX1d6DcgxZVQWXZk3kEjMcaHbZbe3k3A6tFn9TpGDzjZxjMXbhZLLUR6NMxyckh8RH7oif",
  "key4": "3M1QJz899QxVdEjuD6jKAsYEA2MREzWtiYA3aN6xoNsdcQTrYDALn4ZJ7RyqLp5H5agMRBQBxcKWS5SfnU2waWRJ",
  "key5": "4dswRHEkjfDUCwwAr2eebJ1wdpBchTwuwq5QHkbuuTnYpVNbRM2b6nkTq6sLpm14ABjj3sfiF8zJ1SGzv5Buj71T",
  "key6": "3CfNV3H5X8GXB5koHs9NMJnQHKgSby6XnDB1s86JMW2nbiEt3LAVxGWzD5hNpUfFYy9HQ6VZRdr5nQyKfk4NsPU2",
  "key7": "4A5ibvn8sdisGRMuMJQRqUXenwRJnHqoj7Si3BjUo9xj1pqhvRMT6orgoE7hxSKAi74G6Ukoh2pzemasS1xPESLh",
  "key8": "G2eTp9aXVSTQj55SrS4RZREe34jEJbPSC6PEXhm8wKQVhQRwfWGkgtMkSy4TqzwYvf8iJd1d1YR8sR4s9cjwYpa",
  "key9": "27Tk9ECFiNUaYh1wZ6R7wVn5LwHk7fUZAeFwK8U7TSEn2ygEZq9ot2YFwK9jqKwCbVbhdcL2hwgTYUL3yax4Qo6M",
  "key10": "4AB19NFu4DVS4JSRkq1uqNatVHQWMxbngn8Vjw1RLKcaiw2m3Rd7nhtaei6Pwrs55yKqu1UzcEMJdhuoHaFpfS2",
  "key11": "5ZDPYiG5CHn4o2ufqmtWb4934GxJxyjMs3eDAwDE1namQR4ChvEg38WhYqxHymB1SV1zJxeeuk3cFWeRYjn7Pxa2",
  "key12": "3RDWUvLiaSbbDxPhe43bNMjQdndvj3KqxDmEtnuwUXnFt7Ysd2egLbUPURQTEbBNtZ83WEghFTw7rgAcst79wDTA",
  "key13": "29PPyYsHpYc3cMhQWtEkVezCvDZJ6zMtzRAiPTDEQx3AKqef5vUQpRA7gxeMTLLt6o8FfLapDhDJuNVdUNyyqvXF",
  "key14": "3cC96M63mR8k22YV1P7My1PmvrnPoFLHMqyz26Cbwg1gHrCRZiJrtFysAab2CERT3ZxUZjhSmWsB4PRwgxGc1Sqn",
  "key15": "4TGfnmuefyGPMkCLrX9dAS6mDdfsSxiPBDNfKLt2meBRRqzNTDWFzdykdHanTSwCPJPyxuJcPvAbT3L1VUxde87K",
  "key16": "D4pyEk5FtkU6NwpCmphSDgk5nFH65412Gdy75tAdTrPZhsmqV3hH4Bd4eQPCJMuQfsLAsakk19Rb97FYjy9FJDg",
  "key17": "21XaCzBR4Xdfn7QPFbnUiuWCmmpQLncTX6F6fG9vo9g6txoVAKHQL7ceKybyq3NroAKp8iGgkAvk4GibxYsTJvPe",
  "key18": "5z6Z7htVex2PW4CEzq8T8vq2jbfaPLfUePEQ8kdJ4ZFY9DYGrQWEnnqu4dN88yaNdWykxZuG2dspFWJZ9atWqxVC",
  "key19": "4EfZ9FrG3pJesb9YQoe32mh2KzGf4vWKBmgBQx1sQo4rcrupKQE69VypE5uZfac7BGuNASsvHGpnG6mZkqMHZJzX",
  "key20": "4vnP7S4FSakGdKXArWiGQa3askDQHrzvrH35xmM6HdSwLg84zBt3dow6hjSxFSj4bYJNnCh9PZaSrKJrSkuRoQXa",
  "key21": "5feJG2UgJV8JyBM54gQVL34YPmAuiW1AYPHcSGg9udjs1zYrLa1yG3AiELt44BWigPcRMToCkL3qwc1gPFwyrw3g",
  "key22": "4Tr2whJpve8EKEirzGeGh8WwRxFQDxPGF84fXuiSC6ZTh5Nm9ser479hx3sw7YvBqMg1Zzf22W3WMnCHx6oQmGaK",
  "key23": "ZL7ihXZfTkGipoc8PEUN61GGWHGSv8LSPHCJ56wzHWEQvNKShqpEFiACifejRpwNLeNd2geKjYiJ84fSvgUQnVP",
  "key24": "g6yze5Q1zYbhsT2QXq4A6pthKPo8Yr7N5VEuVJ29jEGnoUi9ZgNeKcu482zWkxJsXCgEsFhikEF4xdyJVVGdDnM",
  "key25": "H8JjLJcUHt1yK1SHGLDsSmNctUWgNqpk7SPWcLNpo2xDjRyj2FqHQYhZr5MwEsBeHJ4rViD8DnWsjYPhnBPMZfE",
  "key26": "2NBVqpKctk4g723aParY5LsJLYwKYi2VCChGV5Ho8if3CXrTxavW2WXFxq3UtyeuZp5njhFiXxeqEmietpKfp3nq",
  "key27": "3oBn6QN48dmzL7a9fPTdSX3u2KZwzTDMgpAnNBWvy9EBKLtcKHEEN4FeRVvdZE1oGHEE9aFHpf1md1myfx4vyfDf",
  "key28": "2tY6n9EuQb3A6REKnETbwHv6eGgjCoRovYUJjJnEgwawArWkHiJwn7Rh1yocnRbAaYsY6xNE11MF48aKo58GMmn6",
  "key29": "5XvbarsjaMPgtZz5G7LCYCjGRcVyDpiA4dVRd7mF2BTZwBkiakUMZ9ARWAYh4nzruYkHTnLUMrA2yc9gXZZ8PbUo",
  "key30": "4gxtq3UK9n4FTrSATfSCq7vwXeGWrtXXEoqKbufc1HozPJJ518NfvAbw6Av3AafTWaFqDSERdZP6cjGTruQyVF9R",
  "key31": "2bzbEdZs2AeBEtBPjn2RX9y7XAyw2ggR47AEhQQ82oRsoo1FJaYvZCzuN4CUh2JgymHK3SqGYwgKHKm54eEsF4PV",
  "key32": "5siWWW14brmk4zypXVYwiiAVPnYv1kRfnAbTKTGCeSf4svh4WNStzGdcEbRVfey8umyhgbxQ1qiVbAYoyLskhWQ2",
  "key33": "srEiYWjLxDcovCRZQtzB8LJ42dHLMhDNgFuJzy4ZJkwq9ZowMfXtCGcVgA57ehuwu34f6t2cAY2jJyV21KGWa4p"
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
