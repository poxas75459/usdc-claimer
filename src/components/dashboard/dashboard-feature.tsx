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
    "5EKwztj7LXYeCgf2epSiNf2cqscuqVL4o4HDdmWdCNngASmJuKXjJzaVWoYjph2WJuJkaGHx9vNhyNtDx7jMaiAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V34SnZzfh25jNJwzeX4g9fJRg6ZZdvvCZwXEE8m4ayKnNBvM7cB9jjHjWfFfhFdh52G39iDNJhqcJUmbVdZfjS2",
  "key1": "qoTr5VtYWZCQUMCVdyNPFvetBnttmBTDhHtPQpNuxvVDUZKVpTTyKf4HmJkExZ75izLngikAHn3D3nUWyapGWga",
  "key2": "3VDwx5d63NtqnQMATLpBkLXues1FwNoeAF6voXsiorYCsGsgkBMEykeQToo88A3Kc9aWEgu8rmcMExNw8v39qpEy",
  "key3": "LLAo9a2a775msA1RSX48nsgDvj6cwGFzosmPPF2QCZ3smjYdYGztAQt95Wazm457D8kj61m5gfdnHLDR1F2XdG6",
  "key4": "46Kcesh8FpcuAK1PUyJRt1MwzesJnPMvdusmpi62RQsVNw7Qs8mLLxKZNx8tw9EBMcyNrrAVWRDmUmQC1SGKbosE",
  "key5": "2HjNFfsfhrcZbLLKESSVuPUNV1LPk18jaJMuH5JcJD7vjorZzYEbYKkCTEbpPGV7disGFQfQWeGt2c1HQ1NvJzK4",
  "key6": "5jwHxDYUu3efMUri9QVWw24tqHH3StvTaVnpfo2NFTBGhs9mNrgkPTKSXwjecgg1H1oHy8CXwiC3H6V1sbeVwnuB",
  "key7": "462hMf95nQS7jEPh2CQ9Dk7TMS5FrJQhN27xqyVLoqZoWaq2ruVmNU6HTo748Bzz5vaajDVPgYogmxKJrdN1nJnc",
  "key8": "2eJPidW9JLEAzSWCAfws3zcQ9XLqNpVo93xLkwH8NASKmgTDWeX7EHBGUeLbPHvaaMyAPMXAxy8RhzHDJzwseUcT",
  "key9": "5w3RqXA4612kuTh1iiiee5nAxEmcAhrncycnoPxe1V2Nqy8pAtxYRs8CfUWWE53f9BXnUyo57TGaVc52KG5x7t4Z",
  "key10": "5Cd2E6M7W4aCBPWZNMV8Zj3Zxx7hYAWfXNHYTJQ8SukSZsSSrdTPsNa37YdUJ9YVZfF6H3WQ6mzPEQjQRjAWa8xa",
  "key11": "64s7Chc4Tn3NcHT4tWXcujXxaFGcXBybtguLjTXRL65sKGYdxDNxx9u4gYYDQjCX9cfqtKnSAHJcTdMy5TBbsa1W",
  "key12": "6K97Sa54NokBfCYSUtFP25jWkmVsMMRQ9bj1Ke9nHTC62QrG2kzxZBktutpYDxWo1hgDRHMzoUMopLeMkeAUehT",
  "key13": "5TRREY5RtYbG987v86GFfHDis894Ee74F9Pn3XWoBEMX4vBUYyzm69sH4KkKPzEMr8QzDSJoGXkoWpdEFcXted7w",
  "key14": "CeRSq5wt7bYqrpbVn98CWmrhmH9heDdqJBwnuJY4DfQX1muW3p55jaSACi8erCw5pDwNwgEECvoQSHkWZmtRJPL",
  "key15": "4VJupxsxbURPqrdLipCK5r6vWgWhED5rGvwhxnTsL31QixoiYhYL9jkUmaUjYJG4hdHNGhVu9ePkS2HoEKGaaTWs",
  "key16": "5FdxDvMjgMmXCpzgDJdDaCJfZbrrn7paVybq6cMSqruBmY2cxfeyGNePLKhUCCTVPshaXTdCUWmxB4xia3v6D263",
  "key17": "TaZzjxxm1vbukohE82Hnob4iJfCF5bQcgUk9yVY39Y8Y1UG6hS6AQdornXYHtQoab1bjsEJpTt4bApLppNtB4fA",
  "key18": "4ZfeScA9WdkXfCJ4PnRorKTR5o2bCvmArkkr2M1kuAXeATKUhxvNmpbPkHZfu3YgGc4rmNSrHrfJwyrFePK3T3ns",
  "key19": "3AcccWu45JW6DCjyWtuYmx17rYniu9MRMQREmXAQwKy7cfEHtrL11WFHNhEgPc5GbCGKuLw7KKwYgXaVSwxv1Eux",
  "key20": "67KFRb1kbaTvVG1mHnc6Aw6wSRrFJzfVETtZwd2QdxA8XNmamKA7gaWxz7oPv1eGwewhhvS8CMwAyh7xKbvF8D76",
  "key21": "5sMhs61o1GeuuesW83of2y3kfjZsTam9HE7hJ1HPyCArhNHiVbNTSjVT746aq6CQLenSpYoCrfmxY1L2E9Qhrk8E",
  "key22": "2pvy4NBjAVcu4v4e2JgQjDAZ4MNQEazQ1BxK6vZVaa8vV4DhGhcd44yRDK91WNHDXbiES8QSGohFXYVGYWzFvr7q",
  "key23": "2U5dxwBvCFemcESGWFQNB4aggcStohKsuddfrXZqzUPhGT2j4DWxeMyDz1bhodV6SQP8eeD9gPL4cN7ZFrKExk7M",
  "key24": "37QgSSJYsK4z4BPHqRPvYmdE2rU7ycEEVXV2WDd6cp6QV7YdvEduqLRmHC5La9zAzTHDAjz1bBcRA6Dgskv4dTqh",
  "key25": "Pu3CeZgkkNeW4EAeMBDDGZ4P62y7ZRMyWbQNkJdg4NiUf3ZsXdgjccr9jWSecqpy6u8JWKZ4iLF1Xkz35Ac4cpe",
  "key26": "5F9zDXoJrBMT8zkeEsjUnwrkRBUozRU5yBAWX9iWKKnckXxPoyTz9X2eCModhYXMEPwd7BxMWEnQp6d44T2e6uE9",
  "key27": "5G6gmcAqhQfBwZghQvmkkkPDXMut2hRGFWatCGY7UCUAnGFyr8Agn6ZScygjrzMf8wYWjtmx5fQztwNKpTRJ2Euh",
  "key28": "3A2xdNMpsXDW2jQstRjCUexf3TkwBbWMrMyeU3iWgzCcfCUMreH2rYCxhJgnBFHSXGHw3wRTK2PHn3v9G6SvhjCq",
  "key29": "4aMQp47qPkE7MBtp5PKqbywEc2ozSVzZJPJ1MGgN4LDspeavY5cmnNo62ncxAnUBtMDr8Skd81BvuexUx1rC3pVx",
  "key30": "FvBzi4mSVN5JDAGeAKfUUbGwkvzfPzLcjzdcf4hWRW2x54biUbZ5uag3ANUu1CMD5K9AC4RVAL6pxakp2W1nQMz",
  "key31": "4kD8A2QMueUdrDeT2MQPjoWmzsZ5YXWcLLQPz2K7pekkjKuuTBMBBYkVbFiYa6H8SrTbmdQRPi18GrS7gLUK6kCt",
  "key32": "afGTimwB3nGcLRv5bxE6u6vtAmrbECgvNtmdLzMJ8aLVEAiZV1HrWCiGfdrAh6BvgbyxGCcKJqQRPQXwLwnZJAC",
  "key33": "5UwAAcEpxmxgUw2pKCccEzb4fbLQWE6jEzdcZ95RYaax8uPQafCRZnKxEB2jrUXHX1VuKRTuQpvW7Nu3h5tuZguT",
  "key34": "5sLWYjd1JWpLX1yYNGzU5Pi6hsySM1JTYh7xqYe7aR8isuSnc5kheMagd2vSXdTpbwaksA31bRLKpaAFst6zxydL",
  "key35": "2Bq6LdkSPZ8rNF9jmKdUJWHjw3h47zbFZVoGeSiXYji7AH4i8wEXBq6xnHRKTgNLeyUEoN4XRwLyENZU4d4Vy2Cc",
  "key36": "57ghc4Z8nCiXRJzQH7TESyrqmPsvGzgeMFXGoG65adGoUcVU81zyrKxLkuWT8oia4HBGdsvNKN8427u7JzTgiufW",
  "key37": "xkN92CrhREjJqvAyjf3RLjpzVGFbusMF2NC3ZtPeui9n3P81UgsnUUvcY7UctwFeG5sfMMnzMWWuGoM7aq9EqJE",
  "key38": "4j2reWyuCgZUn5ymmwtnkfmZLGu86XaZtvTogk7C77rgv3KQBQLzgsUxkjesCVEnqo6h2DbhsW8tvXpA4e27Hr61",
  "key39": "UbMh7yW8iimDjEvR1AGBaZraL3dr2jbdiTHcGeivPsyhC18vM431h3VjBDeKiyjUf5uWdHd8ZKWvoyv6QjUPtGc",
  "key40": "5rpNEEZco9B22SkVLevDxhQncgL1RSeYtDpn6mUDbPLj7X4HVHt4BYmJNT3VqFfqQabi6Fz9MBb9UJY49ufGwja3",
  "key41": "HPrPK6nWMR3d1cStWU1TTy1iuvXPdNt8WhGUYjSMAETMC5FxoCEcGiRu6RV983FNvrURvMs8pRKa6RPtYn7Sr4r",
  "key42": "3xiNXVo6knPP71zntXJT77i93Jy9VLjcpnRfrLf1SePF3ZZhHRJPa3t7geGW1PJFH5TnsNbUqmf441qLLNAnDt8A",
  "key43": "54MLk8NGw697Lie46goQLxdAucMQWnS77y7omgviD26stnJXMW6STy2X1N83JCs2Jm7gWVd1AkfX9BfH7w2wvZML",
  "key44": "5UTooHfMbMHT2ecpVHvvcVMQy1G8gFrv7idxDmQHkQhrZe5qedRabE8Vd84fyEKRi5VvX7eRAuRb1w4Yp9DMgyMo",
  "key45": "2kQaN4zwYZeE3rS6ekRXkt6U4k5ugCN8neVGFMS7x7KrsLRszWKVoJjmb9Yfo9c3PNMGwQ6yf4nwRCEkPhrNf18t",
  "key46": "4vSLKnAoz56PrKmj9RkbUTaowkXvv5JZBTT4arREnzUgBYnC3ntXkWepE1gSr5vwVmGix2NCF8VtZxhLvsdnzWXj",
  "key47": "5gh92rrgAZt1hHiY9ok9uNj5aLihBobLNjo932QasoXvNjrsVQsZSAC5z5eT7AmLQKgWmPxMTzxcuUtv3TAhoTR5",
  "key48": "j5SSSq4XQPBh7w9po5Jr2WNCLL2EQR9SGBz1DgP11EsB1sW9mkUAXSjhdTiwWJBPLpFkkzXd3GJaPZXrmqdE4mW",
  "key49": "s1zXkMHfraiH8czXnesY66XiKAYxooJvxKrFDQnnfWtkk3JJS6H4XU7y4cF34jBj1KaYfibEjQAbnrSfSeLqtTQ"
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
