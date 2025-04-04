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
    "4HdvN73cVpzrhiNe4meYA2jNtcaEUxYi88nUDouHsnbmhV2iq5kjtW5KrjXvMPH4oQzR4p8DJMoM7FC85bDKFWG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kg3prKytjgTVcc5Yhng9ya2pap5KP3Ma9TbCM9vkSFXaf35TKeawcXtPVv6J2eFDd6q6prra8iR6KoJYjPD9yzS",
  "key1": "4Yim9wpBVHgJmoNzAFPVAeMnVgs9Vm6TFgYUJmjAEmkChokHxw6qGxMCFiMS8CDs8drisoaWcKxXdvjbEuMMVqM7",
  "key2": "37mGjfr78tQCbpHm4dVUiBHpGa2gSrLXdUQdDvQbb4oKMwRtsKv22DsbcK5gnd3ruDBM5czZdp4zFnfDMdVytzrK",
  "key3": "63vNCmJ75KSTyi1V8LCmQiVNnmaJ1trmTcx7jNJpKHfsu5tNabiQvaxeF42G2SYtcVLfVk3xwwtsM1E6AU6E6cQT",
  "key4": "3yHyNxe4H64JRZWHq7mLNZXxeYcvDuE2a29Pva6ApjdA4MtYFEdZ8BvyExSqFTtggCWQ2eknyn5xDSiL8C2JK9M9",
  "key5": "3RQUAWHZs2nxRXe2KtGHgUYcw7FYjQ5UR2VT7QeB1p1HprArkzVmBMdaxkmtf3yCG77d1GW99FbrFUccr1mBCne3",
  "key6": "3iNqdQsZZ2zi6RzgAEXLT4Kr4NXm8B5t4eYhsT6aXs6zspaFkY4tgbfLQCPFUqQaqvqZEpK3xereThDXJ5hUForj",
  "key7": "4G7rxKwCJqh4eWhRZ2f82f3jp4UPuG8TMhUUXip5aDFxtseBR7LpP4y4rrFaWoA1VNL31c754vRUVmLRwbWABqy2",
  "key8": "4nFP3kVdxx1HpgKD9JKbuwFysyNxzU2KQKFgPU163VPEiWAhU5UBgP672xXjgGWAS5Tu7gri5unPjvNmfi6rSBim",
  "key9": "4ELH8B2oCQSChYj7w4euRPitdneJUYxEBKpp75nZKrgW3NmmQkND8sLXK6YnmAv9uj9Qy559cEVzpsdMNyd3LNcr",
  "key10": "2RroqNCVmd1BdugQv49DPbhP4z1xk1U92v9E4LS9peYWa4WcgErXGQQV3sZ3c1hasp1mmfbb7fpdYmARQYZ5urUh",
  "key11": "WHf57wNo1mCJnL3CRjiDpAMphhEqMPhE7f6uSYboCyiEScKarfCBwEwA5AxorERy4KT1WUggNL2EFK8bDHz2s69",
  "key12": "2u251BJqTgBupsXPfTJp4cKcPMu5ePRH2cXjBbDypCtqu3uZFFro8eNY5vc2g9tUskzdWvWwdwXSFMCtfGFC9hLp",
  "key13": "4voSBkkAwDFVXFGZ4kmF1ffvWk1mZrR5ixhaSvACzsaoRubbgfrZZicDZdMXTLcDemYnsPfDFDa7oXMJSKGhtb6V",
  "key14": "3K9PqKraj1C4Z71mrbR2EcEyk62sPFCpGCJ942KZ5HHV5Rmrasp67xfBZxSJk7BJhxUrsNHFNEguJbCXM7rThvXA",
  "key15": "2wgcrC9ZvcoVwhxTeRx3zRSR5yt1DmBVFy9JUCCwCvDFGdQex9o6EJFUrCtm6JzicZQMwm6fef6v33QwFAZDwnw8",
  "key16": "3378Lvd6k78cjqPvxcPZ6i9kB8oQEckCUqw8aC4hjb2ZjhBxBa1WCS42H8rpdSe1BZ7C6PQ1i1XV89tBLu4XoeCm",
  "key17": "2mE2oPEBz36ZjWqTLnwmfL2yp7E6wPaivCqE7xPdSDwDzaovtzDYbcAV8shsvvaLwYaFvHRUYTWbHu6oUfsCFKHb",
  "key18": "2vUG5VXAhh8oZFymuGE1wXCPTVnS4SrQF61WXtB2Qkc1JjAcvXu7iupT8bXDLsypYsFxK3XM4DB6HQZeUNGDCegL",
  "key19": "25vSD14eXzvXGCPR4fBNeSwTnXob19HJeQxTBY4CskuwqHaMzUX3SKG9hunwA8xaFDBh4w6seiatuSKmxFNJhcJC",
  "key20": "2BSyhn8cXot6nAXqbrkQvaMqPEEp5h2HRYeDQXDMoMsXRkPfeo2n7L5aVztYBfSY3RmDSn4o2PWSQgvT1RaEE2RT",
  "key21": "cPexnKxwRyLsEk7bDumKCjViP7Rm3na45bqXM3HhTtGjH5r16qf6ewWdVShcYX8gYScq2qiMf78j72h16numkPn",
  "key22": "3cyQqufYbzQ6ZJUGDyaugJBfq6Wz6djRTQGXb6iZS5n6MJSNXguvgFQAAKsAastqncFYxkhcrtLZcZLCANgH7ktM",
  "key23": "42KVmJYFRyMxS9x2Uva6ENDfsbPv2XxcDW9CvdjAT4qzYmPfSWoddhsa12BVWiTZKqUBhCmkpCxtTnwi9YYvLfsB",
  "key24": "5iZJfBkVgx6Rm6McrQesH4h2vJe9SveDUjRcNVXMcsooawHu5LVV43CFvawG8HdKxddVKUNi4QKfYnTqSjyWiaJx",
  "key25": "5p4b9ZXqiSYJxBudzEQjPuk3ALRTVUBfGF65gxVaof3VxcpHpTqVwPMGpgDhgwYsrpD75fhx54XRzDhtiLdumV4X",
  "key26": "5aK3TiZ3pY7BY675imHp5BSuFLB8NR95DmxG6tUukYYux71RRAi5EC7hfwmsogCK3FDfszi4YBN3C4dTEegVXoLM",
  "key27": "5RgsGfgBgtfmnLZbww68d2XjXC2hUt3Bxga4vjESQ8zviARxW7nismRDnuVQ6R9Wd9j44w6QzGK6DiMwdfCYRuLK",
  "key28": "4kKkGEEqKBKkVYCZ9Y3HRmRw8u5gpTopnyR2kWay1Hc1fKPAagqcqrjsgKBbP4goC2SCogM5KUWc8DGxsfQmViSm",
  "key29": "NyyEHtLToGV87W3Z1Qiwz6jtWfR2aNNkefRDqCJKPRo9PJfiG7DieLz3wr2oXbgubTAZAGqHYJL1P2SL7kr3rXj",
  "key30": "5CZ6TzNu6ZT34A2Y5hpbt8H6xnZ9L5sAtvj4TsPWE7L93VEDvACdXzYTQEsuw29bymDBYTFrRJ4qbAAZb5hnm1tJ",
  "key31": "4ytRoysM5kHE12Up7zmhu1iTzUrRqiit6MMSE8xC3HZSp2ezLZDYLuczXhzHKMEo18QU4qXtYvbZrKP72561f42D",
  "key32": "xmcduPuArdDnpdPTNdnUwd4Cgy53mpY6kzaCQ29UbqUAJGTtXpYwL3TDb2rwumz6EJUT1CwMWiUW79pBFQ5nFjy",
  "key33": "5aG6B93wXuTaL3GoMvenm2Vr5Ej4jt7N8AvJZXSerMkhCXHCAgTUcgcadM8V6Soxu5C2LkKEwuLEejQHunYtEJAf",
  "key34": "2AAzrFithHLKndqF4MPJPAwBN72sA7FJ6WBmKDp6hh29DBarntuJcFWd6uix8XNm7xo7Dsk6hiVE6pqUWVZCSyoy",
  "key35": "2JhxQyZFLKmKFTTZBTGfkb7PzcokbczVK331k3gSDqX7Uh2GtxMcVzbyqHdMgFDAxLCD2zUfS4kKJ4v46Qt5j55Q",
  "key36": "5yB34RFjLb5NQJ1RNXZGpjrBuWbP1FpvY2zyhRh8T7VpK1XxvWFbiiQtt5LeVhTqJpFjhagAXZJGvegPkhDLfQXB",
  "key37": "2K3DA3QxydxxzZ65XVszcuS2DWgtqAkbEgrMYShn1V7Y7UFzK8iGMRpfR4xfTvHqJUfjiAVqTpnuSxUZDRg557Gb",
  "key38": "268qzJAv39dhonXM5BUY8iW4avn8yDkYeVPcukscorsbMyt2yR1WrpQYL3VWw5ecyeP2DzpvbRJryzvggPRN1sjX",
  "key39": "K1bQqcv5Rn54s3AzzuaZSGEVGpWU7s79EwNvBdk5ZoBpbKT17ekvLDneifrpU87SwqFmmvFyJ5xRGVMwoaTsZmX",
  "key40": "42FKdB6JfmgB1dQ6eoKFbPwh2CH4X98MAWNhAVpyHVEVtK9quowzJfqeXk3zboGq6yZKkKMKszzMP5gXcCn14ooF",
  "key41": "3kYx1tegMWFLSgHNK6unCBTwJL7Ypp79jtdKjVvFi565Z2wWV8sJA9mhyDxZGayXGWPdMDhcDYmMUjHfRND2UQog",
  "key42": "3tQrwhd35geKqyHYJ9aYiAT2A5PLWNevR1VdoxoSRragS25cdAAMLbqUxPPdNpdDgxkaTs3erg1e67Mq7B24b3Vg",
  "key43": "3f8KCgWRLuFJGYDCdnMui8XQJKm6Z4nqMoqbthdcQe4uCfTWbBGq4aJKaTf8hhQCG4m1YJQ6RoY9h2kXHDs9EB27",
  "key44": "kjWGdrn1CWmFFGcfHf8DocJpKMDtU4q7sbK7Tz1aAmrPUknntU45J27pkvvbQTr2jmQEJrHrqQAujfTPaSjt5za",
  "key45": "3VU1UEJqNneV4yvn85CjmFe4BJPb5wiV6XHfoYsBUs16LJPSeXQJUoWmTmio13cNAGJnLkM89cZQTQUwgK7kdS1J"
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
