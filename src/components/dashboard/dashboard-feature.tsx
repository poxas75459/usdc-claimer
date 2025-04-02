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
    "5yeebSeKZ6JynQpBPJkcLrpNx76ZEp3MjeEkUgwnbFJRZfWZKNZ5DUH5QgsqsshjsACkuLUjSj8jyMM3wPkL9sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dhL5kfWpB7PwfAz9PCVBd5KxkKdUSuDw1zn6BXoymM6BJkWWP7Ggm6epYgkFiDKums3G6Wh6EPiAXzkN41bGn5",
  "key1": "395QZ1LWmvYC1riushurc7GjgVRCTxhHHmaGGXdSfnCywSYC36hwXe9Sijv1McHJUB9161kzB9dcVyCi5omZeXpd",
  "key2": "5p1tsXwmawWZQ96Zm1D72wfgTG9ZUmrEFaGdsYCjx5VJTMN1F1biFsLj5J4Tn9KZfRjMSZtTfi878vdSrtERjmiK",
  "key3": "qX67AX6SwXEcs5J7n26gExgLkVJ4owWf8y4p7UVXz2cksVjV9HdW23YUWXmzF1Zsu3E4XRzk67EYmNkvfkAtR9j",
  "key4": "3zL7uLc6o9GBV3tN7WrxTkoAJkaCXfAteyMgUYt6RZkeTaTp27LfYjbVt9TETvvi8jYKJLniiQGpyug3zXWSwWr3",
  "key5": "wUiHHncS4DEYFNZxBEN64ECsGBMzqumMuycTTJfBaDoUUUSisA9bPB1yexCnzWxSHJMYR36WBo1HEPBQLAPtDhi",
  "key6": "3eXmoBSqofR1jaHfpr91MRpZ8jER2uwMDrJFYb8UBpCeReBbyipSQYZTumZx7CFBEBgr3n3GQQ18CGKYGvKY1NRV",
  "key7": "3VytoobjVxCJH4XWeZp19uWodHMsYdgpP7urZg11qC7msQpuR5VBkGnQdpbQQhPbG4ofvggK8oBx8BBQ6LFMsaRJ",
  "key8": "2bBYxF4jyaFDdeTRKoyoAnhYMiPxy7g4dDXu1DowgFqdroRBdhXDdpdoHLg4fUUKG7pEjYUoBjnnR3Sm1LjutAWc",
  "key9": "4qNNjxvUWJKiasSqgGbu5HqeDrRXCXDDUbyhYsepg4egeN3VqTzfDaX5JRu7w7f2D2VvNzdESq9s68SARHLTAwhs",
  "key10": "3ZEyw7QSDoy9SBy4Pr8vNHaDmfeqoPwWWDhNZbaxckhbYcsQAwQ2nVDd2YFqzsfRABsr2oFsRBk73UvYY4aE7L23",
  "key11": "HQjfD4kgXvDoyodujCAqhcSWtRBGT26SXaerBYtekSAsCQDkWrYZiVbd4YFmVCWGneiGoHoZzQt5vjkiP1dmSXq",
  "key12": "puHH8GNcH4KPbLvLavPTQhsnAY5gzwzbeDAkYaDsNztDrtUtmvx6GVHZD9XbbvyR7DzmGWXzkQ1ebBrQZ5YdT8Q",
  "key13": "2mdVFCnU26JifnbVwcNhEeFHYSJpRMo5Jxbt8UHUH13vUzbuLX2dY68JCYdcnbunyKj8eJa3HEffcPw332Sn6iF9",
  "key14": "2txkPVoEkSd4nEixS8H8wZA3BG2XGM59avWMr8VrvoLviDYiHkXQezGDycLHh37JFSpQN7V7uX4huGVPBfPf2aS2",
  "key15": "4pbgK23mTd8dHYLjH5aoR1z2wHxjyzRHaRJc4agGqRyT7zXFAZjjzqT4jrssSHQA4tNRQTC4qD4y8peynm7gMupk",
  "key16": "5ToN6AU6f6c4NUauuAGVnPYawtUN4URwQ9AB4okB8FJ3nWCdw9qPyibLvu8qGrqvTCkXo6XwUDYzKPDWZM2g9K81",
  "key17": "wwhZZUPCMr2E1frezbGwbtJyEfUkuqHoXdddrZmM3WmcghTToY1NU6BvZieaeG3p9LGnR9832PsFN1yeidgeM6x",
  "key18": "WS1XFmuENr796wmLuVRsVuXwBLVdGZwMmo3DjiPFn9asnvUgZ43tcJkapa39tpskR8PM9m2oxkKB6rRVWzPEnD2",
  "key19": "4uy6JWHdAgZgd2Wfj2aoJ2YrPRuGtxPmBoFv4LyoAdnJVWGcpPZWdbxVwSAsHb8DE6Aygf9dHNCXryUNWuAS1b4K",
  "key20": "44b4KEBrmRErRP3DzkXJ5c4mhLUrpnvR9qnBwUJ5kmZSymeiNoKjQn9YtAcnFtygoyob5NmsRR6t8m6f2ni5f9kp",
  "key21": "SoLp28NNbKpAhDepxRgubLXqWUgGryt2Sqdch3sEQjAhaE4dgWFmxnXoe19HUY3MvKomKUipSHbEFDjvbLdGAzv",
  "key22": "ze3EM1x8QtHZp9mM5V6by6XATbgqy7bHv9kcZgR7Qci4TYUhLzNJeyFYsy4FURSyQ5LUnJziFtUcLgANno9PKrD",
  "key23": "83isZRMDiUnLS5GQo1JDvX1UB5MDRGigJchSvtDznNdnMLSrcCHnFbGwHjDhi16ecC5Bd6yEXWwr1bmPV8Th8Te",
  "key24": "5AQGWQd8coEfX9uY29jcwPFtynJWwTSMrpjzu9tVz8LXWJY8so9w3VYQr9qiJeG5NAqaHdrgSkDZSGHiFH62sGg8",
  "key25": "Au7Z4zm6M2yHbuL1kJpLrj1XwE4kVCQQD6WimaT8ZiYbqUxYek1k5jiJCys9CKvjkRrNkgP8RxMxV6kKeBb1NPi",
  "key26": "4o6RiVTBZ5v5twfATHWeGanDM3HM3ZAT56V7y5LzCqzXAe6oP7uNv6u9sRuUjARoCShkRC9Jqu4rMR7ikKMbyjAp",
  "key27": "9DH9asMwmS2DBJuuxdRnPZy4Mq9wZiqoyKAZpy1CqxkQxYmcGVCtXcDji66SRtUnBaUrjeBrrAWg1HhLEv8Usgs",
  "key28": "5hJaMHsFQFx7Vownnmj9vy65yZrrKq2SjysnbjRs4zkjiiKPscBmRkqYY2S7CvpGqB47AgZkxyTKkhi3zsnL2USL",
  "key29": "5BqRdP3kojLa7dJE46ah5zyALZV3ZueMuZXRSddnA3gFHrHm7GpwazgmEkvMX17f8oEYUiFiPzKKrp4XZGpwPeay",
  "key30": "4Fts36KutZSi8iGQ2rFT3W3aDPrfkw1s8fjPCoLkN414E1mJyg4zq3utBqevcZqW6x1Mz43xyw2qxoD2cuXGPfXM",
  "key31": "pwss63sE8Ry2LzocEWLPr7RCxiNvgGvYwkJEAJRPwL1cUkeZY8rZmYDxqbNBzXqGqRzRJ51rEcZq87PwguKu55F",
  "key32": "4vfJudpJEFcso56vPDP6K3HwxKLheB189pHzNoRrkZKREWXvB1cRcVu4jipd2vTq9KKBssTksLsUog75ofaU9yUD",
  "key33": "2CuBJjqdzHX8n3EhFJrrbn7G3VDTj6JKZUFZz8obXsEcL1x7fiwVc8YyYwkzDqRd9JnxGo1srmUGEC4jMoU8KPJW",
  "key34": "3b5gbUGytg66GTPJzaHWzCkU2hWDGhCDHadMc2uYY24HnoUvuSEzawSjCkCup74GPCJ5CESKr3k4Fzw9Kwp3pvmb",
  "key35": "2zuL1JfSckdkY4rSo6JXAgLPPNoGoo8F8ybzBAxd4Vhtg2irZ1R3aHYwFmMYf1Dbg58VtXspMpGWPwo7Fh7M9ur3",
  "key36": "5iLfgrKccvBd86sVPBBActcw2u8dyKr2PT7UDfFAjS4kjQApeDHZ7HSnd5njnfGa7TEZbSL5hHeCr8yAZ3KRRYeu"
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
