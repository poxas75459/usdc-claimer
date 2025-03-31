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
    "Ey8Nf8VpoYx4Zzozza8zwokR5YasQG2DcTmmSAXeWPxrHjYrGdDXfkcprbba7rU6aVkbxjSgzRV5USuSES7g1AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vERXhczpmTKWxU8CNpcdM9KP6ocMnDkvE5MHvcPJNGE3kfvuSuq1n9S9hZzCvv8boUMctcUpXp4Esvu4hakBrM",
  "key1": "4bhzPn8BN6esni89f5Us9JjcXLfBMfmV3pQDJSvUnUAiAcV8Qg7W48D2ppb5pXXCGVYkVb7Qpv8rj3VAEMUmqpj5",
  "key2": "4CTfjFSPTLEiPZzWpLocn3nwgZ9TD1gbmT8brph3u34ZoUoEDtJrf7AbaXwYehnSncxEA1eqoMMaA4wqPgajcBpj",
  "key3": "bFdisqDA3aMd91Xzqe3KhJC7zcGGFU9x27TznQ3qcyNPomz815HzQnHNSutxvV6keSTVNcs9UahZqWMrR2Avb9g",
  "key4": "5ZfDzRtfdishTp65ZxEmAA3fcCPj5NX2UThSq4tH8Lv8n5veoVUv41tiZnY7tUZzwGAs5GqkfMhd33Co45hhVefw",
  "key5": "67aDR7YHkyHFmytmdzFy1sQBWLHK95wShfiNe1o2Jj9GfoHtPzHf3dF5g93qB672SSwP4t38LkemBosqCiQU46i9",
  "key6": "5TtpraPqTV8NwtyznJ28W2tpdHppyZjxY7m9AncuAWQNGbGasRoKn21LfgbQqXyzrjdEeL78vMtvo8PBXAAu8Qn1",
  "key7": "2YeSwuB3LwRiWe6UHfZyru22dhvhN46UovomhQCLHkruci2hpK2UhEeS1cCt1ny5SbXxpDccZk7NBPFLsUCPfQjJ",
  "key8": "3M1wPiyrrjUTv73quLwaYzdpQ4bRh2ot2MJXeG4KNYZ5YED9X1TnRgbf1Wys4JnE7FwZH2uMnKGQ7JvYk5itCDr9",
  "key9": "53tSLAWuXGFvkV62EvtggT8Tx46wb6u9GJ22k2JrToKcq8e7iXxE1dppnH7RXXMsC9njyZwkaYL35u6Wg1pzPmJB",
  "key10": "3eZc3eapLHBw8D8pjcZxG3Fb4VU78sPiZvswCYYzmSAqiT3ykyRGSxmLX4QzZ4fdhtBsfmbj6xzVLhA9UsmuwzMm",
  "key11": "Y9i9ukwQwnR1dYAE6wQQqHQGCpux1s1rBB98t2MkjxWSWSoM7D4nCzNG4gyCzEn84HYFTyQziquxKgitz7WQydg",
  "key12": "569ByxBgwwZYaCiSopDpvLgnMowhQcdFYXF2WVHERMLfVzb5auXs3ADe4s8MZ8tM3gd3QPPbg4JPEGkxozHZaNWj",
  "key13": "29r1o4RvnvSDqGCrGSx4i6oqdTe7J5S2Uzag7mcQhC3zMGvza7VrJsdcr5D8H47w6YFU48JeFo7491Vbbxxovqfh",
  "key14": "2MHqeZ3PNs3YQqUT4AXsY1joUpzPyQk4TxYvKEHvr7Nzk6faSwNYC2mW87y5Sk7Gw81oxXFa4obixNXR75DVKj3x",
  "key15": "3haFfqvHkeNtwYgWWhzne8hf63uHZwkmTHkgprz3PnEj1HvzaWrJdNMim574P5UKnGThAk78LnmdcWFq3A5TNqym",
  "key16": "4AYSWcHKWC7LZeqKawKHLCXwuknt3G9VidGCSgw2XDdTUrCwmB9GhhgozaaEz5UyczYK6LyZxS57MVT9Fufphgt6",
  "key17": "51SmnnW24T5eJ6aQVsxxjv2GKAiTx6fEZ3rKJG1uBa3hg6jmuWfYtxpNTKe3e6iaMzY5ndssSt3orYMw914cWQ2t",
  "key18": "2fs44aMtefPudRpbkNoNeg4VcbRJiufh6XEDV7GxhMkU5vYauyuEthFQ8BvV5DJX7nz2DXTPHVyGYfRZfpUNf2E9",
  "key19": "54UpG6nQZupFwBDaJK4E5Rxi1i23nmtXzGiDEhQiQqroU63H9jQZaLMsHmt9PRrhugZB7Hpvx74e9S6Z2PqxcakE",
  "key20": "FwE3qAQmN6yNQ8ZEfjtgEhe3nejqZz2hUL6EDU4sAN6FY1vjDY9XHYfgS1HqGSEx52rDVfS8fvStPuxns6pfuYh",
  "key21": "54q35Wgn5pf84jn4L3vizpW6mZKSfbz3kbBYUUzZ8VN5rgFQsYvSoXKApf8b1xWKqEFh5GBrxK9ib3mQ21T94ReA",
  "key22": "5vp8EoQ5u2j2jJR86FP1MACBcZfAS2zCHDxi7zJomjd37Xe8Sa2pMwmZebdY5mHy1DGu38ZbPyQqA8uHBXU7u23Y",
  "key23": "3QUjM5aR3riwLniWKttVT62hEi9BX31eStDnMZUyJZigVoRy6U2KcpxXPJuuarMX5aoAhBUE53jAP9bbBovdoyeN",
  "key24": "2xRu5jbLmcmxgrLm2jwMfy8irmKx1spqoAoaJXStBwaSZD3uFa2f7QPzL4bprsFf7ZvEF4GxssFMcur4NQj2VCzP",
  "key25": "4ZXQHDtUSrWsXLqA49kKSLWFtyZgwoKtGZJAcKtyxnzvL8xXkJZuvpqsNqpfAJ9inpuyUhvMR6ixLE1YWSSarF4D",
  "key26": "u1wohGmHXv2UzCaVDoRc5hER9bGTLUJJ4nWZn3BMiuzVU2Et1hXNzrsQG68X92WADPpLXfgUaachijk6VQLNtd7",
  "key27": "2iZZq53N2p9DJshxAp1sTFqrQnePgRwtqXwY14ox5X4LmYPKhhALR8hmfhEnFQixSPp3775AsAAA7R4WYHUDU578",
  "key28": "3unAp4A8BeFDYHoxded9CNC7MpGeGhhyU6NVvybgdwwCibNytR7hM84fNF8KKMVBUcnwnhgbyB71URD8dxnFJ6zR",
  "key29": "2A8Sx3Q41zg36N3LK5SLbzGdhcYAsvbr1GGozJAkxeVwcL1zUn5qA1M84nZZKMqCriRKqVPpwi3mz6dynzLaxY48",
  "key30": "3P39e7jj35xBCHBEnUSHdE15uuj1xrhiw87WUVbbF7pG7Jnw3Hn86boTA1gSUL7erhYrxmmQE2kJ3rQBx55yAseo",
  "key31": "2b7ktyjHWY4juNc52bxGvFpPaGt5oeLwwXrWbg7ZspCP7armTGZhYiexWbc2SKyvZ9TG2qXM4Tk5RWbPbgvbom1j",
  "key32": "2rXx83NkCAWuJydfkwbfnyt4NcGv26Te8H6BqYaUu78abYZuq1FAYf2QJpWxNxFyyzNsZVkrnUpePyyNTxxehqZ",
  "key33": "2RA2ESTFbJPPdcHcAVgVMyLy2C5ZSoU5wX77VVSbVdr4X4P9soxZc83xtNkVft8v3iBgxy7rvAiiS7T96shw8Fg3",
  "key34": "2eUTjW5LkL3xWRfoKbcorecF8uHrM2Tho7MgcQF71m4dyrMF5emgvhJV8QUBdXpeat1kFymz28EuRv2G1Qqdup58"
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
