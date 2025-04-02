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
    "3RAFgwM3tZkdpfWXXqLzf7UQKQHxvVnhUPxqJheCwieXKjEjU7L3pp8EpF1iKY4G79pMwmEPc4NHVpDVY6PtPgCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drrE874zi2NhQiXUPmkXM2qnpiQLxctXtm7TY9oQFR8ekVdRX595zRnNcrQhUvpYUrUzjvsAMKUePs6Gwa12xUA",
  "key1": "Pf2dCS6sW7Bnz8YsqXcRuWo5DKiyxfvF8gfLWZjToywSZhfGJpvoNXaFaRhmevyL4ncezVYbwnKFXjcCujb2pBv",
  "key2": "3XwSkCxpYVNq3dZzGvAsnNhMV5cQU4BCfMJGr7dzpp3PPNJC5SLWwHuX2jDRoenwVPtkovLoWzHLGQXxxnCDX9Nm",
  "key3": "4tmVnvCkYcY68CWWdGEPPjfx1LQgPiYNQex7ieWafZ76fraEYgeJpA4QX1MdnwTMtXjUFm3tTHeQRzFXnz4hL2jt",
  "key4": "225cNK1BHfTjjcCMNLHnP3uaiMJVeN3GtgB9nJ4YPcXxD91JoU6CC9SgNLe91fqAxnp2EwpK1QuTcasUB6ho1Fja",
  "key5": "5kANTYpLEeXAs52TvxPmszZ1s3zo3xwYFYG99VG4czhTnpoLHQDe7rpzVaFiSMrxg7oa4Gkax5142xNSsNdmQjr1",
  "key6": "5crvZa99VuRLuZ85gYMZp98iJTmqurJacW56UNLqMjqtLtdb2eyE2jCNNr2hfa1K8XG2DFycgaFUwmcf8aBgkxRK",
  "key7": "61s4PFAXhs5fL57GyaSz7NCV55JHmWekS5CPruTLqtc3FYdcGqeDA74e1b3B6QXWKjxwozinQ6hMmnU7YdEX6Vqc",
  "key8": "4jxhF4HvikhuaaSiqmhA6QLWgZk1gLYohG7FG9YY4FRSAEn4T4MHvXdMQNsJD36zy5tp2C5bxL7fPCWPwgSxniPA",
  "key9": "5TVum57zhQ9WAUGyk5z2dpBSZmjTvXYmu6jw5u1cweLksDgqesp1BfgUFXCH4Fu848j8cc9rWik18116wgauF8wK",
  "key10": "xWpbrXt9FxfH22WTQxotKpPD8Xo6heiLUYzaR7bCZQJQY8PadZxuBpX6UgMf5dzEAiLLJNUMZeWQbHBHeTRr6JF",
  "key11": "2BA3TLCXq2weHKRaQM7SppMeorJr2v3tMSieNijjHvaV3VDkwnQc192dz6RgWzW1CEcgKMRSed4orE7oo61qEsp6",
  "key12": "27YBdkgS8sw5xyZdWT2ZFvhqB5UdD3inrT1Hmi7KQtBHSkYjiWGGDjEzNNaUg71CcJVXvy2Q1r3zMHyoD6f3V9mg",
  "key13": "5pozVxpit7ME4FUP24WMUZ9FuQMkB9zUsXhM3vpn7ngd2N8G7ppXJiV16d7WsVf9sLtiFWQJctmoiuimctLHQnrB",
  "key14": "33E2b6BFajgtnzJ3Y1Ue6r4GvbJMeo2whJn4UcDipZi491Yjfvj3gB71W1JijxrdHqP1HEByBaLB147dTe2mRMTH",
  "key15": "5mqyc5TXZ1ekQTs7QMc58CGSVBuaUhMktVMLV57caWakNN1MBaJyL1jBiyAtTM5p4u1Vvmh9n5kGpYWzvZgD5MyR",
  "key16": "5d1s3NqumHkx2Q8sitBrBmhNukBhEeTDQqyWPjuxKTnE7Q1JKDVs2EMwxdTDH2GvBKmJd85hwxMtUvkN1z8vDvn3",
  "key17": "2hpM1r8cK7axFHdKP81ey8T5QjSxB7kSHDZYLMVzjpDXVYhd6U1MnSJLtvvWYPuu34WVbb5G57LUqXNKUE67yn7r",
  "key18": "3G6U9oFgeZLHW3WQMxQNmZD8NsdhtUeYrxZxmVx32MG82NVC2456XGaa7JPZW6xnpRkvvS6Q555wtTNsDXT5bdGi",
  "key19": "5haRhHpMyveysJbMLr1eF8xVCbMidvSHSwsSfUQCqmw31QUTkWdCD8DbaZbYLQQiq68WFzaC3xnGb8suuDtvKx4s",
  "key20": "31AKztxFJ6tLZjLNcCrrkZTVHF9wYRdVzKDyK61BYcRPPGFVfTByr7tJAxsou8XMQ82SrEeaG79dxRHSXBUv2fec",
  "key21": "2C15bjAbZ7RXWLS8AZzrCSmU7RfmYx8FYmwFGaac6hwp4zwxPc5bsPTtGxS4t2hxS1z2q7rzdgJtZp8CeY8vuaF2",
  "key22": "65NsqE6GFf79Y4x95r3t5m8VmwjNWNi1YojPRdr4bMDjMjufrzXrRifJ9ouHiZ7ioY7dNRt92LHG1Jfjfu8r6Hsb",
  "key23": "4QfqiMYkpdXWnV88KEPWyHiptMgWiyp4wK3HaXmUqbqGsJCzKRPNAakXRPmFKPg5hh8GLxd4QHx6WTwHLrLBGvpA",
  "key24": "34FrbsWDHJ6WQABTDzH3Sqc7bCpmauPrQTkNAAuWoLkxnjr9xdjKVvzyQtnpJEw1cWU6F2vZQ8WTj44G992s25vY",
  "key25": "MmcNM4Tq8APSGH8uqqxU4AVMFkSYBV9TQxZz4nA1jcEgWyGTJSvkcJQXMArkaiXBUfXtxVvpaU9TSnRn1tebf7J",
  "key26": "3xE6p4D2hXwCcf5WGUXHPA2FnTdE9yi3qm6YK7NTvAqZxc83dEPreeB8adgzXeawDKVRG9y7JwDf5NTx49gNBdJ9",
  "key27": "1224RtjsHNAMD4AaBuD6qQucWMHDkoqtZn5poubi2UPdQPfHRTcfoU5rdHCKMDdrMzdaTJBXGDAJ9MsSb8yP6vRH",
  "key28": "5sEJV2DTVQ6QH9Kuxe24GSrPN9oTGaYJvvacei5FVzPrMaRg6fbGkYAHvEpkef3FNe1Yk6ytfy1JEJsUoPmrt6An",
  "key29": "25FfVKo7dxGLmUwik6Wg8yFBVvkTaBEfScKUyKsJ5AKunKgjCU35oucwaxH4ceWsc3J8sexMvsDceQSvtXUewVz2",
  "key30": "24yJumUQewpc9RiNs1En4DfXaJFj8k46H4ApjitMZKavPEiT8pBRnQAaSTNjX1hFU6wAeQH6hgBS35MS12FaFgnE",
  "key31": "2QDXpZkWLBHFXQygvAjvzyGQnc6fDMmszzPPjcuQVjJ7ZoKJajdG79sGm5XdRwv8tu96UcgDzroKCUQ7GnNa7Nqs",
  "key32": "2inUeCKXGZv3DpqVoqC1co6gb1pZAfWcftWurHbkFT89jm4sJxTQ5AsuYUdf9nVCUcVJiCfPnmNzeQTnEM18VEhf",
  "key33": "5NMamggYXjAYFHYr2h7d3A86oEBGafsqZawVRaXKcqWeASwFPWCN5qA37gwPDXDWV76rjR2wFhrwnZNUAo3BSJGp",
  "key34": "2X4gzADRYviKkhzjV5GBMGadAPSAtfK13kCqVBU5VtN9Mua6Q2aeLYGDJzVXoxcvQQ7q1iFH9FMtWxu1zNBpjPHn",
  "key35": "5jTpQU7RyXhwxvkt64rxsmr9Jqk11WtXsPXffh9K9TprKi2XxeZ6vV3zM9tq9fVtPFexmqFy3QXJa9XQwTPsw4no",
  "key36": "ZPFZEhZGnbXkXZxAap47z6f2GszqRJRbpJot6gHEsN8b7NFBeGzFCftmZrHBNvXGAwBFqXX2SYZCsdj1GAV8ZtH",
  "key37": "61YrrnRfgdxuvLym1fWWvnG6Fo8sxWpVvXDF5AV9GPEhG7SEfgs7hmQntF9WVyCTYZDmG4JZfuQrH6g7Tyr9KMaZ",
  "key38": "5KPugX2Zcqj7D1kZyiP5SCB2Ft2MSsn8VUqcFqbSVvvdwXTgK6M513knvreUMt9Jx2z8pJkatzG5RdsiMCNDXLX2"
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
