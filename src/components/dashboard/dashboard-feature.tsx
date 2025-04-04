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
    "54Tv9LMKKQdvztyk9TZG4XDTcJMAeWaHgzP9vNHc8szDXqRzH3HJjyWCZCA5ogyXXAbEXqA41szh3QXL6uxCKz3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYr8k3E2RZMdwvQbbfsDG1TXg8tprv76tY7dnm35EKJQ4iYycgxmTF97fdjzEoTGKamuSvJX3xcMB5DuE6pKLB4",
  "key1": "5oRPrwfnSwd1arSfPAjBN9DiXVpxwtwsG3nt3gvAR5T9y4mgmbh9T2moBoVL7gjLbUVfH3ToFMjfuxu9M1PEDiT4",
  "key2": "2WskY94bgDTnpSruwVfFwZWo3UZGhHz7dB8vb3QN39s3QT2uSURrMaD2RDrBVjfjgg4GS1xvNHdsWFfMPkDmKyGa",
  "key3": "41HKpfpgjFUNuKnccCPuYyzf917gMaouqoNtN7sJBhVGWtHXERuAmJa1K1TakLuuR56Zvfr9HiNMoShP9Kkhgfch",
  "key4": "XJtWA8w4eNMPbg3jzAmqVcmnrhTc18Mr8cbfszF7B5yQXymfjaRfncjqhbkYM5H1a45YAPR8JoNZAAa21BwjrJe",
  "key5": "58oQabjJ5PZ5gjGr3oEu6wz6imTaMx9Xw6hmWQSqJhhZYVjR1q32e3e8NrJbN5iCibMy4d1XFK6uqRKfCw4pESo4",
  "key6": "4DA8Vgo1d4kvAipXgsFngY8iiycqtwD6vwLyCS9hWHC7zpcPue5r48XvEToopCr4vonfatsVYCrCbW7Mg9Rce4yE",
  "key7": "3qevYhhEraJ4iJwE87ucCQqrJbm6HjPb7k2Bveo3i61LmcAKbaa8Kg5DdP4ncLZipcNaxmY3DQE2xkWcRU8Hr23f",
  "key8": "N3jCdFxhntT87SJH2kH8Td3KAUKvQcZBKWWZcL6pfxVQEjXspRtzdF6qLiJzdRrNK4LSU5QPprToCzJ2nNKT5Vm",
  "key9": "EAFq8QxsyewSnAwu5dMMu7TR22zDeFVR2zXBLsbXYGCdChAntBysPxAG1QanZrWSYFF5vpN1sR69sCE1u1s89yr",
  "key10": "2pifGni5EJQuRT5hoHsRMrJxGVXjeiT5jM8oVZ3urE65dQq8wJhnUV8k8NaAjsTB97FdohN5839mkAyENfH35nsW",
  "key11": "5JJPPaAcegx6XTmZHAbdSg3c1fJNPUuf2FDam7xgN7QHqLHjF3M5hnf8ZccVxvWUUp6x86CcVxfvzwaN2BP2zh3H",
  "key12": "25aPe8fbqqKkQQaVsYMU1dANHUrojxfEvgB3n3gUn7QMjKGYMzFiGLaSXMpniCzym9JbeF7YHRuvf8a1APyr1kS2",
  "key13": "3xiQFX6n9kwRvV6wyw1MtLTaJ9iUp2wEw5ETk7D7Ux8UF4f5MVfEd3tNaKJP7wg5yVYFJP7NcxMUCK5U6gnnJh8B",
  "key14": "3w7cgJrqD3UDQ99cEegxKDubFGh7o22TttcKsYA8Ax7xJkMQuK6uZSeBX4wFshcAWaURyqUe999nzUQ5KLVUSr7",
  "key15": "28PVb6DuWfwuEnV4ZRo11GCuUCLdNhwaygcW7QTBNnA1Gpa9UtCQRMEsh9UKH2BZ91qY4LZ2Q1chELbUEvD7mDkC",
  "key16": "5s8j4hgdEXhQZUj2qwsk6oSoez71HEHUwSSyRsv5MAmcULvaJK78WXTc3PNE22rK1n2ovr5Byi4k7LhqpiRECdtS",
  "key17": "3ND7xqL7cRewbo4TepUHcECxwreMqHnmyYW59xYV6vCfRGNLt7e3QjcbFyogRaYYJjkGLq5PAvP5zbNPeiK4jhM9",
  "key18": "468VkCPhnvwkoTtAP1dUcpupF52hFgVJ2KMDG5enN69MXXTEJJWN6ABpPkZ9hwSPNfMYoDVZCLYx2hiAikq6R1gp",
  "key19": "62qAY7xbV8PdZqXoht8TRjDqwigZ4gwDdD2FMU53ZVFweJN6tYd2P3LCr95Nw87La5HpJuS6g6sdYx2FgVTMoCQK",
  "key20": "5RPcc3UPLpXyC4JDc3Bpi5T9WSQCG2UoVQZLjgHnxL5fzouTdMzKWaoBDC3SVz2G6f99N6yxUehdPJf6cUUeQQZx",
  "key21": "54bGBXSLrweyVTF1tuX3FyywNbuEZbXCyXqMmJfbNnPr71wqXBmsuTNYKhmZ2eRbNKUjaxgsKXeZ7HWz4Hjj77Bw",
  "key22": "66zfivY4zhwJ2HeKuCD51SMHckdc5aTsSzmEqazAmJBdw1YrpUQVemwhKZJMTBMWoAubHvMfaBBGXBKTmtmSwkHd",
  "key23": "4xNcUTxauNc8W3dPGWD6TvTXFpToJTpAtuSjvCkkLFoV6672XxXsNDrnmNGLq2pjQHgX2oFG6GipBVKcLymH1uYc",
  "key24": "5Wy3ztd9puvMsXCVf2un99kskDPeof9Khgfw3GWRixTgY9ifo63fTYUsPKRMBeZ6ZWGZbZvNhuDrKfAvEQ6Wj4NV",
  "key25": "2AKUoJ52ngEg1ycQS2Swa9ERpx8ayNRqCxowqe1bUK5GVkvLj5FGrCu9YQWKfyBWUC9MVQ3DAYiMupAUhEgKED9d",
  "key26": "3Azwmbcr1SKjrxXxUWhefr1khmVHNcJcCuVFpvJogbbKKnL4vxo4ZpNRNpyxbXAuofS665tg1LNeCXmfPf9nUncZ",
  "key27": "2DUKjsqvL6FH8i6Qk38X84MhwespGskuK4akyBBkmQqzkthEPVLWNJcJNiPhCwyRrvTgD2eYCngi5hdMfysEWDu9"
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
