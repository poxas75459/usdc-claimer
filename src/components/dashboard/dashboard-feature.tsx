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
    "45SWC7RC2shdexnG22SMnP1SP4u2SJREjB5cGFwnxqMMGJyTjy1z9wTNzRmf5hsdctfddpwAjzFLt6ENR63uozxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vyjKRMJ1GjxN8hw9PwQgtaMt8pDGFvWTVxDWC1vZLsDMcCyEcQqJZZsYhCKM4nZhjrNe6qKiJDHgLuXxnbLUEq",
  "key1": "VKRtPoDS3ST9WiFZbJtfBPYjVVjPRMzMWQMbMHymdXWjHf2hSaoZAzWCFQHyx3zhPiVoXoje8pnYWWg9DXbJv9w",
  "key2": "3wExT2GekvjxcePxqmmq7Tz1WJAMETKumJzLM1GBEcKXYmhEfhtZzCKaCHGrZfHWr2CUxiftaGVpwDow26PtgesE",
  "key3": "ajHnSreAZwn9gswzHNg7vEy4C3KbGLo21vVbyPnoZK1vV869JpHCyEdA6KjFo2fGBeZMYFgwp3XUGpzCdhSbeDq",
  "key4": "5jVDgU5tDVSU1FvAZq4vFCwBKHPyjmQQKRBuBYWFVPK7E2wyLXMMUZ9f64jt55HNYVpEtfjioXWQPqTjF7QfQdJB",
  "key5": "21LS6EPqFpKinERS12CtiyKurnVZLd1VGVqGbsXUZrpRWb4CMGcddeKvJBhrJ3SqfaauN1m1CmNoK9TJt1H9ZHjs",
  "key6": "5C1ttxvXE2YbhmLLuvPWie6EPHFq7qPEx48SkhYMsfHHFPX7wLbCoZaJbcuM7Aav3PEEyyraoRzj6fVPmtzzb3xr",
  "key7": "2eU95JKUcRg5dodKy1hJeqhrpnBzuuERSsS7ysJvUPN6Yunba76oPqXmoXYwH43TJAB3kXnuerDBhjQf23QcN1Np",
  "key8": "JMwodHpkCXEbpWE4SLk3ELYAeqLqcZSBkwEiFaHxKfWJh5AYb2yyuaF6HKTP2whrg9DoYzg47BQzonbcVPF4sjV",
  "key9": "4Th82hojQjXrWHFURjhzr4jBfumtcxuqdKQwV9Eqmbuk3BYpRp2K1gbQPNaPzdXg9G7YBMctetH6D2hCp2Efp9wg",
  "key10": "3srn6RfyN3tbCpFib3jFxJRJPWgs75DayXqAxpSSm7ahfzbpN68PdyMVcJKGhfK6mjP359V9kTbNLjxBZqgD5ecL",
  "key11": "5vik12yLSLZF4u4Ji36L1wgZc4tc5h69VNxmaMnnEBnZ3jgiFSuRy9DNZyRyuB3SAKum2qBzd3kQvqnNo67pWuCU",
  "key12": "5gqx1mq4ZjJzk2qCACJf7RPMzecfRnQ4TxTPBaKM4VkMZ3xN8TpsgkwWKVFpSnRWdVthDseqTQLwLpgQtVXTphQe",
  "key13": "HQ4xDurpEZQuztCCLttDLJBnPBYVDxWLrnvJLMWESN3JnKbEXah9DP2RoYYMGhF9QREsM1UCrM2n5JeMm6AMdLf",
  "key14": "2RuDnWb6bSVKp5LLpRQBJ7ZaZ6ubzSajT45vxVnS4PH7wn7VgaScVzihW9iKozdjkiaMdBnnJF2jKytDx3AjfrY7",
  "key15": "5wULp1Le3ghgDQjErnmSQVudUyh83dSTD8XBWpCpBgZ1FYCdLNMWKUai5wgHWwWe94okAdeJwUP6QKNmtXM68g8C",
  "key16": "4Dwc5BsCjZeLHJ1Aq1TeAxJ54zVWr65UJK7Xjx5Q6MZq4ReAvHMogWXv4sxDUxJpPon5k49ww9rZg6PqqivGxhy6",
  "key17": "4eYdzaEC5zQnqBeHUM7e28tkkGi7E92yYqhThpbUpEb23BT6VvVoKSSTbR7wzWQHHCj5EBBFkdRmdwd5x2yzqULt",
  "key18": "66choPPcihr62YLjTUNNifmmRrKaHrccDqKg6AHPTDwjwbGxSCzZva3Bx1PdPiXeHB2XDeKNfY6ie2bW1babrwpP",
  "key19": "67DnY8cYfAtoAMqo3QiiXs8SsFewLdaCmqcrNA9PZV7Ed5t7G4uCXeTsgj8Psg8a9C2RD5vvUjdPrcLu7AaaQf6a",
  "key20": "5fTZKm6Z7jXJL8xdytDEKCabCstmSuctygWkumxeuioayQQn2PPD6LN3bfnNyV67ateC8yuwG8XVtG5ZAJeuFPgg",
  "key21": "S6qUukXxzdVLUGFmNFDGCJfJEG9QATbg8Ux5yfuQPGn3fP2f51x8via1JS3qexSRQC8pyBRAYRowu9aE7PaYj2n",
  "key22": "5djyG6YhSz4ckDV4Fir1LmSZbpkxCwi2i2MHze39jfhAXcy2GxoegqDgsddQ5H2vGr5jvArCMHed8TK27joXrGaJ",
  "key23": "2okCLNfRRm52orUVDBLbA4f4KHZfctvqrXcxRrjeikvuRzft5q1Wc7Q4ZapfGTDfMjPujX1sgAquVE9vwXB5u1Nd",
  "key24": "41LgVK6Ubg2w7WquWwCFTFsRAM4DU2ZDK1LrPKijfGGGTMhNTeCS6cXt1k5FLEJLnn2MiGPQXfs133PJJwZJSz9G",
  "key25": "3joKBBK556Vc8CdRCABUJ7tLLjiYJHoar8oxcL47dkLXDcdhVR53Kf6H8Aga4RLX1ByGF8n6Jq7JCS17cV2ugqjh",
  "key26": "5f96y6pc257LC22NHtXW6h5CmKn2C9b5GDzdyxuZZSESLZ9Lbj9VTpw7PGnw9rT5pSJSqoGF3AgPW9cyi7CmkybK",
  "key27": "58EDEGMGnABLvZz191XT9KsgrTjxR8MoWBGV8Rttm3xeRh5BsbSs95LH8UFRhFHQEkaT52atePM7M2VREjeAxceD",
  "key28": "cL5BWEVqULL42PrnahVBWnYZtJkxeg67PTHxYUmBL4ckCsF2iFGp8scJYjbyV2t6rvxz2WGHyfgWGvLpCWHHfYJ",
  "key29": "2pGXYRFXaQqCFtvy3cfSQF3Jw5HHggMApJV8MjTgMx9r13Rag4CKodrjzAZqUveFCJufZQGafS7WGQv8eMXt1XpB",
  "key30": "2yKxJPtKCE9Wrt4zBeFoemvrw1VBLP7WcrRGnTXT4WX18YPFEVjnmRzp9rnW2q48K7ATLMFu2y5D3Jv8TaQVhZKC",
  "key31": "25LbfupwJFUmbXJT7jkSm1NewHoxWrmaB86PV79HdvGQJpMrqsEmrSBhoxNrSo25KMGwm5SSNao7MCq8mHrWRVBE",
  "key32": "65TRrhWeCM1azvoQe7Rq3j9A6VXvRnWx3vov16zaVb48PUfsqKdsbaE5S2XGp3vQEJPDXQn63Ujfof1u1XS8HnyE",
  "key33": "4CgqEWc2tce2GcpN3w8MWPpLM4eHvf7CL74hrC6pgVoCD85o9bhAPmVUu89DKX12dTyfwzuz5v8RVyCztvCcznxs"
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
