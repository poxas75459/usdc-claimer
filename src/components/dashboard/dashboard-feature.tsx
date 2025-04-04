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
    "41rwUcCVJqo8NbgFGqGJp1YbtKAMiG6LJTQJTyZUjecKhXUwYW4DsHqL4ShA4UxpiDBDHrs3TRC5uikL64pjvPJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zad7pSSPxeX1uJp5FcWyEwMwcYTvrgaYtgrxS2iXvCFYKsLb88MNqq1LvVgEBCSWcTFNX97XWcLtFPosCDoGha",
  "key1": "3VNtteitDedswynQbP97wrHkUaENXY4RmCPUVPkYg24BaaVyhYqeXE89yUogKYqgpCqxxd9yHwiVqT4py6Wvp94g",
  "key2": "4B5Cgj2maVBr9MMycqvz1UC2oeTKTXnf4Dg9QXrRghxy8mS7zk58bGbeb7kPJh7TNUMtrJoX84qqW9ssbdPPN4SS",
  "key3": "4LjNWKfCRPpSQPs2n13zYLdmPWofudwVSL5vG3yrWAuj2TaUTuhunxa56hcjC3B4K3XtUNLKFSHG9RKciPYE5HQR",
  "key4": "3D45pufaQbaoC9DK1ohC7Hvh6iA8NboBs6kcvnR722TYkJ47xAVZtHAs2mK5g5ft9srJDSYwF9bZVuG4EbxRvvNx",
  "key5": "exsaGJH5Vb1LhTRZrJgx2TAZjqsEcN37tKZxPT89n5gKdp88qtaTiFcbktVDwEdKCE6zPk22h9ixGg57b13NPe6",
  "key6": "4uYBZnDvDUhH9g2Y1xsiswVnW8xV4PywMLd2fSYNueQjdp3Mgfn3ZKRCGqSDxTXwx4D9uV3eYfrvsvGfx9mSFSk",
  "key7": "2whQRMNyXLRMreVvxHWPEoGYXi1dxpjGZ6jc6PCA79gfwdEvUg1ZPDgZPZTxhQt8f8EQtXbszwN58vVBeT8ud2wm",
  "key8": "35H46ckAoC74oJ9HpfX9aXHCBcJqLja5aKBzgihhPmFtsogpFY4q5xorNw4V4cnXKqfabkj66Sngtt6dZVTZdw2V",
  "key9": "3PP2498j6ySjiKE1gjabb2GrFVWfK91hWxta4V7NFiVGJWuZo182NhKASKh5A7Qo8Wm84QoSDY9biP9JobgFmVq6",
  "key10": "JJcisBfCaAoqCeVacJ3DGMy5T92Wvbqw1no1uk4gHezm81rCkXGrYsNFthLyhMpeQmxZMH4122bbY2iB2Y233ph",
  "key11": "5GBKPJ1tct6gC5qndTbhyp5xe2MbsSxuJoC4GTdLJtd7H1yUgFnbJi45NtHJ3KNG51dprRugbMcNakuYwo3tQxHZ",
  "key12": "P7we9H86ipYvfmkZeC8xA83ayu11DRYGwoDJfbEzAAovMmK638yC699fRsJL4qeeyhT8MH6ervnpeioumTNYH19",
  "key13": "565Hu5dNCKaezS6dt4vspTYKqpZEj89GG586sDUz4ptz3K3sznjV5uVf2eqx1dyEYFr5QQC7x6SGCkEa8QJe9WDi",
  "key14": "5vD6eT3ozefZhTrSFVWwMq69PgMFEUkLftyNaPz9mENXo79t7kFcaUzNGF8eQ6hXFaXRj6ocq6NB2wkxQwQyuTk9",
  "key15": "5rUVXUaHMYsJbtcmJ5pt5TYt5GVtCV1ZV7C4pJmDK2mYcVRsm4QQvKptUwqi4mLtHyEo2XhbrbPUtwRpEGYt8HAL",
  "key16": "5jmvFC737KsEsx25NZEB2Kxhse1Dfm1bujwiz1PW1yQTFKdqSYmaDR8kV4i21Wj7zk4awAU8v8cjHhf7gDXpP7pF",
  "key17": "44d7R27ujbCyHAASjC14Pam1inUj3r65VuP6TFbJYqmAHzVvwYBdqvieT15wMuiNaB4fg1quhW9rpWQg1rkrz3qd",
  "key18": "Nhtc4pKTUrUcxqLePezyhEcJ8uofMB77wfNmpb4YFTAcB8DjSZRLkid4AnnZx3xZULDHaZNWc9MLSLcB1mqNVvg",
  "key19": "2CpR4cKUSofURQfy5ubWLwmeb8zD9Y94kewiWuxAzH5dq2QSGgk2z1y1WJFgDfd8qQxCW2eLaoHyDDwH3wyS4WBa",
  "key20": "4x6cNGiNewUqpDBAdVEzz4jzp931zF2Ay9C594NyFkq5hYCNCp337B45Uk58Q21cLRXn6UBrQUajo6Y3SxawuqhG",
  "key21": "w6Kcz9og8N7CNsvTNhrhAVEniLpmx4KoV8EN2ymZ5xkdrs8BoZMn5BvRTpW6JQtFskRirt5P6NRrHuJqjoHCPtU",
  "key22": "3RkrLa3bxcRUUQw4WStHmjt7DTQVakLTnWwWtoq3w4Bm2kqizp773FvHNPs1bQFnqSjBHbZQifJMREpuM5GBfK62",
  "key23": "1KwbsbUWQt4vNZzDro3qY5dWV26KnYLE4obhqerDHWvizEv86BdPRksN7AqqA6Nk9cDeyxq9c3cCQ1YFoDpuzSu",
  "key24": "2xfqUQY3Bgwbghj1vLpVjd1NUZCT4sbebuet21wqrhvei9WCWSijdTUtuEYNrZP4ZePJierweaqXgEUBBrkcvmNZ",
  "key25": "32Upco69BG16xbc3muqBTbZhc4F3thxF22BYRRsQmvry3qpEzpvpHo1UgXbbWPFeh5DTEetQtttsSSoqc1F77zUz",
  "key26": "3VtbgwDUkn9jmmDJA5MBSzweBVVCU5sWzQ2tSTbSDHLfjztWwrp7oMn3GZu9UMPbGfy9vJGgruJdDJEvKXpepErH",
  "key27": "43pEsoEwy4ZeeTMw7h25wnomaXaQerxkfHVripWNQAS1AKe4JkTDMveWBgM4h4RDrki9vQVCkeQr7dqLVyxnSXbk",
  "key28": "4pjMcp2fMvkm4P7g2NqUHHPRdaSMP2m4GJTY4Be9Fj4heDZFCSq3QTzdW8CtWCEAE5BLCzquxsfQXNCLgPN5ETtN",
  "key29": "646YViRiMHmVSu5YmqZbJN3tLz9rk8ypy7Un3D6BBVsYxTt2iFNcnzvDdm49AGkUhiLwUPKGEpGfewCW3pSNXCVV",
  "key30": "5Jc2L79KDpsDhjLinEV5c6jr5nWwK61Nby2cwuqZc8sCZ4diR858J5kw1cMCZRCv5LhhJcE4cJJbopwKDihCw2ou",
  "key31": "5sad5rCxiPP6x21mDGk2FsgbVxkTdN58eN3oDXgwNdEErkTVTcYXo4rttBvy1gJH7PHM26VR3atLjEycDjHtt2jX",
  "key32": "5nMxdyEidbsnvZq1KjwKaUG79XPmFYQKprs6GYmN7LM9kd9gVvVGHhR9xbGJVv9Cs5xgtRU3tfQZh4Xj9LNfo9Gn",
  "key33": "dbqirqQsk4DU6aJnVbsdK6RAHWyLrPkFCfDzeFBinpUD41FUd3Nm7yzYKvuakCUdM2oCn1KZQLd5nBhNCSBipyL",
  "key34": "xnVbWAjsFXvmvHkPcSWAaCHNUFXoEmYMLTbfoSURAArQVwEVkxGD5oA46rDcz4Dp5UTrhhUSU11xGgxWK1ssvaf"
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
