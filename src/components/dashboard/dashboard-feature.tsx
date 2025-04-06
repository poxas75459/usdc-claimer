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
    "LPLLwiAEqu8x7MxJ1w2euco9kDguJXLRVr35XTG22CXM4cmNWCh7muRYyNnoAhy198pztCb67qFUkdsJ5jfCJLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G33Z1bFsnj1hGvG941ixoM9xcNN8zqXXm9HWtxd74JZJo6VJjuM7i4aZBVk6wUiC5nVyukkh3e6hTmkt4AnPhqW",
  "key1": "A3Z99DHcMTrb52CWzxg3w7N5PK5587mSf8ejiDdHCzApEqRiMZqYFHwU1AaSxre7URfkMxenCAGBLyr2FtjzD4w",
  "key2": "3FmtAjxz5mq3cKzZziJ842qtnLAkUWu7E5LBHbabFQWj8qJi1Mo3Pg8RZp9eDuY7PtMzZQyJBGQaiH3FmGXmaETq",
  "key3": "5CTsrdeGCV5xQaHTuetUVWVh2QjPd1DKmWkq6UBcgJQnipM6au3ohUzhfuucQYcvjg4wW7xrAtwzao4iwyNEHR3N",
  "key4": "4uu2L4QFjojjMUr4TQZSdJTnNEib6t1szujZpWbia26rzpdurbF5YX69e3ERWvCVxj7zSpBMuSQRqHjE1hrydYdw",
  "key5": "2GQeH5mdyErFrxw9anUbFLRCGMMq5LNUDb1Y4w4f1MopNsKHuZSj2Aw52rJsMK2TAGGhXjpLXH4BxDVHvoESyp5G",
  "key6": "6eXM7B23tPZzTViWo5V3eVPqC6zMvaDa3dXefrHzpccXvh8cxeVM3Dv169mnFx6GvTBwvGnFeZ8o6Y4PhrEiWri",
  "key7": "2h52Y3swgfbzmDrP4LFUuzA6h1VDSNqrJLXRN6ka3SAN94DQL3zykeaXRyDPtjbK19kKiGdMfvjfg5Xb4B4y1AW9",
  "key8": "2moBRiQsXLfLwVPoKe6DsFptkFLRkPkoH6nFkzZwXuJM8LaS4R5Xxz67xHXbFLaTBQYQJ1nG6JjSAyQHQX8YnXef",
  "key9": "2Xg7Xj8VbeBscPEoo5QVbNUD8zLaAygjtPj36UjxWoV22JLWfRHVY28rgPmH5XPhSmYVBTsvtyeHWqY4wt9X8u7A",
  "key10": "3ZrtfzWgw3uJ8jHJVXACWjTbFoK68gvC49obJWE2L5Kz3mStFk7nGF65zSzuzjeXXSf37PTmzNSYCafy3pJPu4gr",
  "key11": "4688sVZAde31A4b1Mu1qzZVR83wTbDu9fv9x4d5ufiRzZ7He9jWvK3fCSZZmsfAogC9rziG6dGLzvKG1N7D6yqEx",
  "key12": "3TbXHmnu81Dxz9FxyrHqeExY11tpxpJvRU63Me55VjvNfS5sS5GUmtesuCKTBheP1to6ty7gkqccyYgpTyECrWsq",
  "key13": "qX2xHfzfF8bK4AfYFeWztmhAvB2sXU1vWvncVX5PcQ33HkKzN6JeswHCvhQjFQuJMEDLir15pRPThJ7b36zL9tT",
  "key14": "3QLueRwKQJCcg58pMVD2EHqNvqXkj1zjZbSH2WH2ZrEoxMPMVGZYPQhcfhEiTjdHkguuh6iBrgCE4Yh6jHBtbRwv",
  "key15": "2kaFPEGXQ5KLxtkibJxfJh8qTZxhu69WSbt53JDjEAw5FrGryQmQxx9XrmHSz68BYhkvcCUK9dJ5obwX2o2MaTbH",
  "key16": "3MjXBx5mxy2zgJyfB5yKKi4ZvDn9iGh22fTEo5ENcPKAQbpfPVw25KnQnraH1zeYQhyeRzLgm2TfcUQ7gZBs4BZf",
  "key17": "5UnnKSN4NBTi863jWxzvZotNhF9DGYTg15jsP68jc9VMiuEqWJWT3ePRX8CBS5KSoFXV2N9awqnVek8pWmq1oegF",
  "key18": "5og6T9CNgZgv9JBhFQA48cKwi3431KRstXok7XwV5bqtw2eQZRq9d9tdgP7uVNKTnCoZexV4uP9q5pwS1ZJ7EAJg",
  "key19": "3evCRbZ8vXSDwwne6FFbderMULe1QSXQx4BNEpHbRZf1djgZCkTr41BuPJiwX6fnsgrhwfXxdCFrqv4iLUuK1Zif",
  "key20": "2Y3bynBe6eGzfEerDde2JdqVuZdx75FEVtnyLWwBKQs7tNZ74beKY1hACdyZio8mrTi19W8xaKqFEXBNdL79847U",
  "key21": "3v5uiSak4bWBG11KQtBSA7dpREBZBMnR8Fgbn7N21oLkkeBt8EvvM39RfqTktsdArJwzYi88imWGLPsfEbny4VUn",
  "key22": "2QPVoKokTm5WusqGEjgDiVUMPjWc2k4mA4TitWRDPSJgjhB32dB6px1UsHZYRGN9r7y8FivuKsZiaNBgQzpgymm7",
  "key23": "2jBaFFcSnsgeuVSsv7fKQxvv2RUvHXSHg3cAAwhntm2huLQ1Nzv8Y1Cw874wrLqdh6TPw4gV3C3DjwJhHgAk1oKE",
  "key24": "3nTHaeKak1zVVWfDJYsXyiVZiwsmxyrAvYCCKH2LQrDE2qMF9czUgMNt6C3pF34QTvSdDkVW8cpaVojSyetTPeBM",
  "key25": "3MMuw8ManDgbzREk9jnQFVMFRFKHgPierDYvkoT9RqFCCnnb6LJydg2kfNSbg54We7cKxgYTWuN6aFSJfxSVAqpj",
  "key26": "4vvZ6gqUTpMyX4UWeXRubpgwj18UvYt3Yri6mCprcr86XyooAqfrS1Yj16QbAa25iovRwT2CVpnQmtRc3TWGQsfw",
  "key27": "3bW8CgxMXs4S1bENwRim7CTF9NyVb6KuFktXMaemmsxrcHVXExKbXa7SW4EkSaP9zF1nF8FCUUS1Z4Q5AyMisSgq",
  "key28": "2vfTvBtgAKLC5Uycu1Qo8oa4TNHdsMjZYeDriAW7kPfeNX4E8rhovTwyacBcHMqmPtBMukhYP2jghaMaWXP1iEfQ",
  "key29": "F2JXz1PB8Fa75qSkeU1Jwfms3noYMrd5SXJva1Z9WLuNWGpMU3X9QNSQSp4VAo2CtoR8FShAJW5eYA43p1CG82S",
  "key30": "4MPYaZtkkepKHbBEjuiYiWsWGjiMhvetuTW9bQ3hR4akyJcQcncfyqqpiQ2RZA5fQnRefLUgosxeSf4AjUWZkMJY",
  "key31": "4wyuPHU832VL4y4MrAaKuQqSGRzkTSvgNat4H6wjQyTDx6usQp6rGUVDQ7LGPj9SFGhMKnCtxENhxy2wEsmoVsVp",
  "key32": "5f77rshRB7FgERDRszsVErj7HX1qJ2PsgwBBXL5CtvfqSBBS1wJQYLwJDHthK9d4D4snUUbWL1RXL5cK2gqkhpn8",
  "key33": "53SkQbLSRmChh6HJJVx2tgQGVt5rx8SwXWM1ZP5ahRCdGm7RrZjCpXU7GC7phvvy3UdoccKY8iWXgfBdxh2zxhDk",
  "key34": "2PaTFaZp9NoCMvwHjtnLUsg5wMt5fpYtgZZGsMeoLz8nE7Rb56ChDRiBvxUU5MGxqrzNmc776NHkKDxjfcGvZWPR",
  "key35": "4yjNnkDD6hyVs9DZERDUdvFaxMyqThFVj3B2Vn2mwqUPV9boKPM99xe8KQ6CTG37Soxkweg5uoije7tR9ATEW5k8",
  "key36": "36eyPn6KnGC4nZcTbd87kyMimiczqHW4odUaJoVpr2fPLyjbf1rgmyok2QUGCdLvJyXHkVxdzUb7DBrvnGDf9KX2",
  "key37": "7nfCfQwAoqiskmmXNVGACLryTZpxdwmWrQD1r1tchydZzj54NiqefZGEKK8bZXgcPqUjAyvZD3Zyhx2xUaBTVyS",
  "key38": "3ijsuYDy8ce47Nk8TiGnKVUxyJo6nb3eLmiWkb2PhHjb4r5jSEssyABjwunAUZWo6F2JvM9wuXuui28HGSvvGqmV",
  "key39": "2D8kkZYefBkGMN99qcH7nvqvhp4PH7Pk1HN9Uua5hr1Shm5kNmk429QMyxF6SK3a9mowLF1D1zYRANRQu1c3XauC",
  "key40": "9ZZHAVkdNtzxGsVqWMoZZhr3HhLERUAbRE2m4o2kczBho4zgwv8Nm1DemsNfGZTYGsu9xE3EEAvuUNGmiiVDnaj",
  "key41": "53X4qNJvaR8XGNMR3KDLRfxCeQyumEacKC94NLU7UebxGmXshqfE2krzQJVr4wLTBS3z8RsSF8JJPFRZFj8mDwzy",
  "key42": "2DLwxNYmFYAzRrwEnRLAgJ3Xd7PEZLsaQtptfHz4iKGuHKt5ZcsEr3zvYE7dCGj7f4BFRCdJ5JTFUP3W145X4g8w",
  "key43": "4wTqkq1xGnXwr75uNjCvZjv34mANkCZ3JRGCghfQPtH8imrZxKFuh8fsVs8pWfyCrzrnQqSgGELkiJXb93QtaA46"
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
