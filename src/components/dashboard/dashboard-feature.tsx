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
    "3J2H2D2gpR1aJUQ8vbudmuGmrAnbNPLbK5GbfsiVE1KwpopzoMdEgrMUXd8QDc6f4sFUnB6mzUEYRoJZjz5zhR5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXKwSthwVj43idU3K9wEibMNpZoqBxCcFY4PD1XkLCmWtpp2PbJyPJ9hXQ2jV3A6ahUvBaFckfgqWqfGtFmvhv3",
  "key1": "58VJbfogR5g2tCLhHbBfMTSkeUNb9x1zmvDTfKFL7diMaDi8685myZaRHH1KxSMmqUmBEZStEiVpSaShKkD9Lchs",
  "key2": "62tGmM3GNEGixvkRw1FZ9TSYiNwN3NGKSc4EENkaLjzPZjFPyxXa4jEEnEVZnaPctHvorZXHWaSHZ2WY23TxmWtC",
  "key3": "5Nz3EihjCWX2zsKQDZKbAUqymrtCwQvZLdxEMWxqd846NHe8ZffHFgdzmHZP82Yxo7E1Rxi4KsyaZci92rgPuFDK",
  "key4": "399A1KZJWSyQjjdo8RQWBC6MRzTdnqo8m9jcf6ZE4dpGa6NAeZrPRFtQ1aSs8kPDDGdHU16LFqjwgfv8X6Y9vhSY",
  "key5": "51HeCDE9sXocyDbhVP9MtY2ihwvi7in3HdsBnAissEZmTnsejKvYaKk8hqh7KFqgL34bP8ftbe9sLS2edqmn6pn1",
  "key6": "3NcvAgwR3MKAoGopA4MT9iHMEgCDrF27enN27XiLyfeiLmHLVuFn4VjAUAeEf3JMEj8od5ZXGrvvXoJBcXpTE2d",
  "key7": "H1w4PYkCPa6CvKtgJRznDyXbCF9zYTK6rH1XGLEs5v9oycYQqQw8eCkCs6tGiPVGVJsjkMeWY8hzXDr92nmfxd5",
  "key8": "bL3aQa2FmaYDEJ2sdTXdeYKHRMfUrBvcsxTNPeJYUx51soXwds1ok5aRKvmx2aXzApDLEBAYcUqe4M4gXXGcVk4",
  "key9": "4yVeA3Af6Q8q9mLmcM1hfgxZ95vEVfbXZ3v2PCKUGebADDUyTvZMWLDdvDrhYRYHHgnTSYTWcSNJazcjV371V78e",
  "key10": "47zFZEALwE8R33vRBEQfsY19LcE9yVzhzf6KneGfY3QZW3yyzMjMgNJtGT9WVTQLoTkiNSLPJXF5dFALTeHJohcy",
  "key11": "518U9vkU3753fazCXDNm5C2Xoqy3dici1kv9zEozbLekdSuNrV5LJBBUrrE3ETXTY9us5kaDYUKUBr6zN4JqkaTJ",
  "key12": "SXB1CUFwR9ZiCqvUSR9ykE4Cp2sZ17YzPrFeS27HXGJYJHCZMk3qxKod3d92n2kRbBT2jNjNBf2zZWTxcP9u3Ug",
  "key13": "otm3qHVkmJPHNuPYx5EjHMiCSt4rG73n6VVuh3LoB72io9v6ag6bvDLZuHASpubPfnsomUNf5oRAkH1DjCAYpCd",
  "key14": "n1gTGdD9u71vihsJo49h4SUkEQt5wTNsvg8BQyErdss4hx7PWtvfK8JH5mQ8gYcDgkz2ciTud1rXHoRZw2pK4gi",
  "key15": "4R1BN7hDUxhePbCUzvRzG7LyWewUH63pz8dHreMuqw9gcb5obcUERpqnPEaZVbZdBDfNgnVXc6qqpkXqEE5sv1vP",
  "key16": "5X7gxBboYEwpvpanTsq2B89w6wt6FHFvkBiTsyWa9taL7vyE4ubCbjr2ienbNjWc2AfmGVpkGcyyeZdqnUJZA3jn",
  "key17": "2m8eMF6TEKvg8Q1xsvBgx5YQbjv7ENAXXCQvmiC9of3322JKts4tHXHT2uhDWAzFU6pJnDF8jmcMbB73sfmm1oHu",
  "key18": "5LagBQWCMofysotvTyEX3AmSSCbeZsGTsByBeHoJce93MPEanNUEHqcKL2oXqBzDUncxhxYQtd4uEFUtvhyVGypm",
  "key19": "4QkXmRLQ5LWPizw85At1XmzJGJdK6LMT6uvJRRY69bV1VFe3FYsRJ5thJTfpzsW6PKjndt9A2NufHtVXLEcnMwWx",
  "key20": "5xs8gud7ceXHtSHQW3wPRgSMPkDN5DeYsSdPzM68nk2t641TCYLFhGZY7B9j9MYqMLD4G5hwnJ2MKnJ3XP4DU3GK",
  "key21": "4snk2cD7a91AW6trnFp75u2svzYeUzifw7rCi9KVyRjjK7h8ZLNsTfrGWhjBtPFW6FmqP9gjizKFD98Eeiwi4SVe",
  "key22": "4azXCjBuzdQXE2kEJithFh5h4AgFxQBTYrrcXXLFiSxSQbVnyC4SCsNFJ2f8GvE2MFm3VhswNTYmVjZR19xVnksp",
  "key23": "USk8jMV6FLrzzKxCdJ6mbfaiH553Me1zvsMQ2btbgtmZpfho4CH7NtfDM1vLQSDztqFBHSef8gDmPNF8NNj2wY9",
  "key24": "Q6gtfN9AGthBkWx9bV65YLgKJ6BgEybnQhYY1HCrAP9dcubWhYUPjkb35W4JiAJz5LwZj3EGDLc4iDQ34LkCsi2",
  "key25": "4YbChvJsCm69hQwESshco9ca8QAZUE6hBaKnzB81dEPyrmvyBqh6ZS7yDd25uVfWpBRaV7fcz9mTATpfHty3vvLG",
  "key26": "3VMuRvNvZTiAmN9U8L32Lgj2jABWzAp1YbaZbXLH4gDySAGjAHqva97NdBG1FMjz17TNfWx4reQtLcVTpchqSmD5",
  "key27": "1oaRdp2srwuRqa2gjC5xKmv5U8UhKXG5afK8bXSNqhSCdpxJC8a6msKCcksSJvUBTwvmNp5ovSaUWm3f5SiChS2",
  "key28": "u9fZRuFaB2YVC8r2bNHugDuHKNtEBENUuCf7GjnA3KmcBzMm9ZyScrQ6VNV7y3odbU59WJ5SbLn5WiULMtZE1AS",
  "key29": "ETc2rWLZSz9pzUFMwX2GPtTCAnLbPMd56ygtwgVutNA855bvcPjCaY3fFwg7W2axLaLZ9cZTJHEAJqMUc91J8X1",
  "key30": "5RD1WaqM1Yv89eSw3KTpRzAfdRVffmb1MUXufhe98f3SpdKtrJATgZkt2BpSXceDrVMr4wNGn6xyMgWJndDH1NwW",
  "key31": "5e9PwS3oC23comYNPuq7Su1Mubc9idkXCbgzJ6oCnuvmCJoRkokA1CnxuGHrthtfqC194L6siY8mU1o29xszgXBR",
  "key32": "4sPC8LdbPAvJvawQ3KfGhARYgjpGEGixJWRKavkugPA6YWEEB5bDKHWg8VrJ4Z6mz7foFdpkyMRAw9ANt1yzYAg9",
  "key33": "5BJbuPN8zgcMw65j5qkGvnqJNipYWjuTpVjzaT7ASr3ijpbcvHqeuxfbvxskyvh3pXPoyPMfGr2EaCkM9x3pZBf7",
  "key34": "4LBXkStnP43muxSJ32Kj97VcbJMUFo5t92cPcLqS113y7QUTEmPuRTXPj6DtkawRhFDxEtacEdD2Dw6X7PAMrChf",
  "key35": "4DwavAxYfyAfTJwZndY95NDcpXskEZioCDykxhfDf4diLcPL2ZRZNQK4qkSgSsdc5Uwf4XT12V2yp2n5cM9nKBbf",
  "key36": "4aUyiWVBirnvosbWXpici4ibG13gAPnDQGimSaGfEiH5H4jDBUziiJrGsw74erKW8q5CbtZwTKTtu2HtKzeo55Lj",
  "key37": "3q1imkPX8gmfifK1awCNGJo6KX4asrWfZYmK4JBCKDKrWxTp8mosL3UGiMPrs1TLPwHyHuEbBawHKDErwkp2SjVL",
  "key38": "4TsuTm1NuLnpUX7RN3NoJMY6RS2HLEAvBiEZTVK1tLJqjwhJDudURheoNQDgxCPCzw8JN5tVUWzqW5gHho7TkSWe",
  "key39": "3u7kAB82AciG5SH9TtUoC34WVMZ3qHXobk55JcuoGwqcky6fsumqCffkFqggT97dz5VEmeACxVvuk3MxMReCV9WH",
  "key40": "5PVGTwqo7inCoT1iUMDQnsj9PktxCwvdAdeTdd6fmT9WmmYvbSKuibivNME6kdppKgChgjcWwPz9i845F8sVCv5a",
  "key41": "3hmaBnWeqUzb7wqBT4jbaZ5G2RPtCb4PmRkH9jk1XzQgPcLv7P4DYQMrcSwRAxkyxiaURkWVWUtgyhCfSBAMkHjD",
  "key42": "KDYqoVyipCCJU78Wg656En8j2Fbn2LqmXu8t4QvLi1tdy9px9ALZ35v38cZu94KgXB8sniTKmoop93mGhHH1Ezv",
  "key43": "67qvo2Sbfn3n6EYMmNNiC6eAyWFagL6C5sBR9zQ1d3SfT2jzQCdZdVASyKMJ5mAxYy51BNCAWNDuGaaxhR5yszuD",
  "key44": "5vGNa5uVZDYwguRE91TjGGBU6W7RqAtVX7cjDPzJbRupwyshX5yhoYfzvLxZtA8KpY1kDk3JBYmdpB5TgFawfNsr",
  "key45": "2KbxieMN43RbSCcGquTgyo9v1N5qBhosEs5hfugxPddNwoayp2oL3DugGAHVazfckTgCYNhD7wB4KsAoSJiJPoUr",
  "key46": "2GVGXYK7ubp4UW7XkgqpcBKig9jxv5SJ5fgPAoeZaEt3JPDVzQSURm2nws8Sh3BGM4XEJq5RGBpPkXgbjrAu31jA",
  "key47": "4myTYc1zNRyJLyDGzzRgUfZKmq5mzjYDaJYNc26Z2DJfAA5zEczDprjewpJCuEKEFxYRLM3w9vyq3H4QEGprqbJq"
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
