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
    "249hqXKzRWytrDAA35sphuEUEcdX6iWHTemyuAAEf6D7agggt5AQE43eo7xLF87XRroH28KLqNFxkj4HYhJewBzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKeNoLfjRiBjEpLAzTUshrjmew1oBB6JgDAzGDB3Wp3AZ39BTNhFtDh2Gv8g1beKhkXvsMesDmZYTxU5fPN6e3u",
  "key1": "4eRGfFNd3XCnRiXDUjnN18SKiR1gpjQHNn9RccUKumM1Gas41eY5yxrVpYSwqHLQpkJPMfnHwceMTmKpbZCaQfVk",
  "key2": "4KyKaTc4MwD2FGCZKyLtdaVa9WwCx5JB9UkaxGXpWV74M1VNSoVHaczFdFWeg8zjofHHyT8kG4KAP9kU1gvvwAoa",
  "key3": "3BNCskXViNefFSRQkB5Nb3YxMowRPdgeCwa2MDDJwgDzLFXyTXUuTLgKY2AQzXpaWrSAb7MQ49Feq7r8qpAjr7GM",
  "key4": "2xtpLHQ5Z5rxWZjjHSjSMDmr7ibCNuPri4aoFQnUgWtfufFmYkAFs8hxE88uzL1kZq4UvVUAv6Bec8H1H9qcHSZi",
  "key5": "4UyYhEqzEfoCQ6k2zb5yHQUZfC9wrecFPnMa2g2BFKKNFVK7WvQbBg6456ACwzmrcAJJNJnvTZ7gZj7VQiezmCRW",
  "key6": "bh2Xb9zuC32nKQfe1rxakhU3Wf2Auc8Cw7282wNPxf879ceNTjeCssrVyTeNecMoRYcqJrmFEc1PeywnktrMJAZ",
  "key7": "5JwFtinY3knfJJACzSbaGkQaJuzMYSnSc8DxU6GafCEEgrUTModPSoT4mhrW2RkPmG8MHBKwMYfAMHSuq2CT8kcu",
  "key8": "4pyzZLcbaQYYTRjDKkNzpJjDRouSjwYDnisHoftweAB3uu8Ax8dckD8kKnBbiqLmET5G7sZySPGmiSEwAUxMhW4F",
  "key9": "5GjMdjidYa3WxhThL4XmF1vZ1d4Kcs5iJkxjwnQrXQj7qhpEkGcZ1gWqbvQuNtADAY9sp8XoMpTBpUVP1q8qg5wm",
  "key10": "49Qqz2CVKQes8LNjVgrW15seydgPumTJcMqy86sgr537kcj9sbqob3fj6YjG3NZ73oK39koxtGVr3QsxXHKhKptn",
  "key11": "43d8AxPfogJSxJWgaXZPeyNmY619rbkYuEaXE7MKWtsMqGai2xiKxKksoqMqGBjKFJDL9a1VQBSCDJTqknWYFBYL",
  "key12": "3rc7zYHES8P5GyhT9uNuemsqTyLXn2SCNQPUPaqEAUY2vqQb6LYtLPmvx7pgJHmLw2RjeDcDbrh59SA7KnKvXRCk",
  "key13": "4k8SgobDUPupWBPqmoNtHBiXsD6dREWT8tFqYhEnzSYab3gXe9ah6577Ed4yHEFTfCvyrjpxWf5wAjB9naBgYHGZ",
  "key14": "5v85cYhNQL76aP19iMdTE1XxkVuQhLFmPXSUkcmhjNC3Xuq6iZPCS665TqRHqg8dYieoF28XrKNKKC3EzkdP19fr",
  "key15": "5kQbeax7AXoe6yU3SUpCh2TAMExzUofzyC7C8NUPCgcVcz5cZYXTWDaYVS5m7a46uJBtLFsm6QFq7HCRaLDgjjZo",
  "key16": "5xiMUBJiMrin2Dke3GTojcVxdyxCpMNosQkiwb6xAHH9ZtDeDVxU8yf7APBVmq5yo87EpJbjDtP2Q8fBUSsgWHRm",
  "key17": "5cdcdAoEksR2d2VYrc2ChaQNYAd4DwuJz84eRxAYkvUcuGWFMEsefo3eqAzRmDD31u4DCxKYd9My1xNTnNmUrPRF",
  "key18": "2ds1suPqRhreFWGB47ihcdgcWNUAgxWixDKtP7NyeApvToAy2gaSFbA2atKT5hgAQ6sfcajtBUmAS133V3ww8Anz",
  "key19": "2ccDtrttVdZcXSYZkpbAv1Yviq5KuwwATmMxfun8tb5q6K3ACxokgypm8E6eiS2ANpEDa6yRxYECwFDgwpokqPk9",
  "key20": "4L26W8QauZzuXpyZZXznaT5kWwwvCznbkT4GXHHCuQZv4GD7srF28vM5TEcssrBdQ6n8KTh3ZUCtyUKLpWpHRhv9",
  "key21": "5yAYuHnCvn6hBP4rDpz15sJ723BV8SkKBUJBkjaFEV5k25x5DbPWVzphM6aJ9J9qBZUbGpFgQfUUU4QNkssVY23p",
  "key22": "3gLqCs9Uj17qmhtC9RWPaeLojtAJBg9PLJJAvhTpJaFkA2FTh8gchKwd6zX7NiNd8DUnubMfnVBN8ZVa8KwHYseP",
  "key23": "oH1bUVuy46ZtDTui6pdikXCDXxbCGbB4VYVejuXw93HmXNJat1QwkFdFeEH7En5gzmQ3AM8KGJCLoVyeSCLFqMP",
  "key24": "3YuE2GRpZ5eBdRtgg5W4S7Ru6tv1pq8duVf3grCrJNCrVF3xTygPeQtLQLE6RaeK9MQ9idXdbj6HMTPCNWnHHJUB",
  "key25": "rnTTJfLvQvgk1Qwa2HdJ4yENNHskixS1AT34Kc6MWAD9mCob3xoErAVzrJRjk6GHPx7h2uc2fMnpR3BXbaB8suU",
  "key26": "3vv1znQLLe4fx8X9LgoLbr5DcibDsAghbSXh73NbdS237bHiHvZWvarLZEk8JrHMCKj3NdU3hUuuvu4NkCz8uhHH",
  "key27": "2HbhtvTiLxHrWfNViTnaVyTgWJ4zhreh8Tbs6WEx1gr8cRJYsrs3Q765xpkmY2wfMsRAy8wmt2SN39Np5h7DkWk2",
  "key28": "4obxjxbRJYBqLQoK2bVooDpZfUjHdVzBGajNH8EdWUiG9quwrDayL2iRfJ6WJUVGJjQEw8NonTjrz84uYALN24fd",
  "key29": "2ssdkUHTRsEMHTnshAqDx5c9NaaReLzw81eSdaTHdxe7E9h5MTsBJKdZhC3g95qWE65eXfn566bV5ZHBDcLYtxRj",
  "key30": "25EFopk3YjPBMohc3FsSD45kRpFKLN3y3yeCcEkCLMGNZkVJP5CXvcArL6tLgrNEfCmtaoKZN49AwhdgNX3ke4Vg",
  "key31": "5kAatp1oWoE5KA8H2b9QPodq8EVVkmzoYiwvZczG7SUNgnpLWVesv2Dy9V53vUfxkTB8vhYYtjRnECWLBQ1JqXX"
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
