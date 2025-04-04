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
    "GRgx5qfFCUo21s6ogEyPrfWcm5R2uQWyNQdbhUAbEMR4QZYD7yWUXowzuvJvsJinYUPfuS78F55kkWNWTEENh4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "323ZbPPdnUZYgxCABRAVD28jgT8QFRNsagBMkpmkfWKgTghJe1Jo6PGua8Ctyd9PDrrT8413SjNmYGguaiMp3BR8",
  "key1": "2HWYheE6rksuhuPWrxx4QB6cnM6bo2bL2G5Qp9D8cRwaPiZSr6pZFB5fHqcegTBrdV9XQKAuM8QEtdo4HyWabLJy",
  "key2": "4tNStwjpqYecwJnzBc3oaAryMBDatuLjYsA2B1aNKvXsxtrxmMhZ1gemrvkWJqTqNuLJYyJ9HrMXY6T75RaNFveZ",
  "key3": "5JBtsWYsor89jtQHY2EAYumgVTzM1LYQ3rynjwbNEvTpV9aHHd6LTk8p732uwwpUppLL3tTBV9rC8xo6gnoR34NK",
  "key4": "62Gpb3QAk3CSnttALW5Les5CJ2td6WSPchRX9wE1EJD4BRptQuYJcfEmLNg6Zk5hgRYrs76BvgaxEQpAvoEkGvy9",
  "key5": "2PUQrjmmShck9LJKC9i8GPcEcqdou3PHdXx12g5yKzFZGawJB9V4mB7uCiiM5CvKfeoiWPeziwCeaEVh5BJY8yu4",
  "key6": "5Ju3VqvH5GYLsBj4WjfRV7RNVHnTSCxUSN8QPNigiDgg6eZScPdBNoz6y1xjDcsRTQosq8iWVfm5S4zA5sbc5yfx",
  "key7": "HLGeqexXviWHm4bVUm9J1XW3s5rCBzjuLWLRHk3HfU8bYtL9MGrn5H9hiVdh8Vgcnn3kve3uF3VS7qQ4AbFZVkd",
  "key8": "4fn6E3dW63WuPFuKvShoj6D85SUHhRXoyVr6XiavMwstEZuJqZNawZW3gvPYcDBMrmcpLwEhupzonBCLGfFbNWHC",
  "key9": "5TUNPKm91Kh79ora66HqtPqnRCfutp3r4nqJ6BhRahvW4Gj7fJtuFe315BKkPtFUWZWSvaBaXd8KNiRDmkxzWa98",
  "key10": "4GmovRioEcwQfcR756FTZzcRdJQq3vwAQJZQbD4g8t9RHGPUSXQoEtmPtmUUUcSxW4Ej63DHCadPAvUVXiaUkPeP",
  "key11": "32yMS4yXV6jjE9Ms4hHiEQRy6iBETLp2SV1iQrZ6cewGx496uvnRKE64nju7tTZsbAYk1hU2muy9m2MVSxurCXt8",
  "key12": "3tuttPs24TVGVfXfRwq8ErKUNEuTtCw9h7zj67quZNCDDYvD8WncVq1BAcJxXySd65TiN7r2pJ5e282N73W6NbYB",
  "key13": "2Lfn1BD1DbcrNpPctXQdp43Ce3zyDjirZ3HpZb5KDx86atV5WXd6iKSZr4CT3xaLivWNfWSoNV5Y9XKGC1qkNesm",
  "key14": "5nuL5CpgajcrYRFkiVQjV6RjpnwxBWtrzMgeYov9hChDCqsWsd149S8gdAjPbqoyTYLyrYGd5WqZKYSDCB4qqyB4",
  "key15": "5hWvLtTRiXP9jNGNesJQidiF23BQ8Ff5BKAvBGy96fBLMovsqpJ9kH3TPzrwppBgRKmrstybWP46EXtRUEHtx1XN",
  "key16": "2KKAPWMoWBJmryVLopok4Fg8UaZjdoKZfz4iuBvvG1zMdcW3u8vFwt2Fo8EbaTjG45FhuyYzx1KDoB4MYbcwYFxi",
  "key17": "26bp1NgDG8dz9xyAGyxX23yHjPfxeiLsgLrrmY7K2v3F4kgC22eoXVassijP5pueoTh5aAzZQNyB2Zm6Tgb9Qdo6",
  "key18": "3BVJQXFp9x6zEYEvsJsYbpgJ7u2BRibeBbiLHRZ3PqbVHMStr8LnzweUrd3q7AfoDQCUzzoKkcDNJyqyfASVXWVF",
  "key19": "5C5YaDdom4fuHBm56Zw9yLwU14WkhAEA6gCYfsT4XMJMnDCnFw4abqrfhShbTBKAjsfzmJNgRH8yhLc8KszFxbDu",
  "key20": "3qDrHeCRZsDzU3VaRTcZapWPUehCcYBUKoWqguRARrYVmxm4Czjgnr6HPrabzbLwj38Eu2Bzq6QcQoLBPEVkMKNH",
  "key21": "rfD3JvBbJNKWQgEpqcwPCL5uyYs3SyB5GwEwozvUzbXfvFK8wzxD88sW5vWxGQPFfpb9Rk4USukuYLbm8npQMSq",
  "key22": "2ic1TxeKo2dEr5pj152EmF9DDn9Z8ey4B1hkiivt2DDG1wbcELmDNHXfdTgmrNpZJ3rU5Ghrx2GhdvmcCpZ3uZ5R",
  "key23": "2uUDresnAMHwNdxP7QdHJajrYdjeCmLAy93896veCNtL6mEVpAELWJxG1cudwxGQC8dKBBr7bn4sSNDo6BzNw1qP",
  "key24": "4ejf76ZZ3w4yGUGzMfpjQLiqDGrJVfXm2kAyYQGB41DmTi8xCSjUG4dUpFqRWtHMmLZAyo6yTtixon31EiFay1kN",
  "key25": "2qCqTD93JyC74BSDXeQzM3oKajJCRuKPzNahfteEawfJa1dCjZMjQfUMGQHcAvsF56kJdjG776kKGjYzL1ppfVDK",
  "key26": "M7W5u5Kydk7zdGNyxSTcNeus88RMeDwS5gbBpYEXBNthgxKt4ved4ApDkzsoJLjBqWVp8NMTP6un7JJDMgeNshR",
  "key27": "YQuzLRBKySMDW8T92HcjxYzzKtHQ1e3i58cUTkeaHhMkAtWBNfjyMQ4amVHVVxs7WwzxBhZTsmU7feRW2zejYRE",
  "key28": "5NnHsPjNWcw2NBYqoj6LxH87aN75ZYTFNXWNmkDa3amgyjThDf2BuC8Gw3mgd12Ugqs42TvbyptAYWVTw6sSFQjD",
  "key29": "4zD2cMGnEM8Dzsbzpf8K3LvJJPtjBym8YTvA87M8uxdKgdSs4AX6NX6uCNEZpDemYtdM5RDQ8smEx4tH5oaznvi7",
  "key30": "2DfjVxazE7jVSDzojdveg7Eirf9YqruSDwCHTDYtJXKCuti3nwwqAPrDd76Yya2hWSH6dAJu84vWFtG4sR81wD2s",
  "key31": "2AgC24SZVZfgPHSEDTbyAYUE6CgW2Mmwoi2zBWntA4Y9G1eDapjsnH6sDUyJLgNi5eA2CRXy7J4FTaQ9fkMvaDUk",
  "key32": "2wYrBRh9QMsZAvkPe3DFrcVcfhnchXVYGypEWeeANqi8aV3TZ3TkgbVPJndLDi86oKembh5z7mJKHzUwSxu19AY9",
  "key33": "3v7qR1MNzpHEb1RGRiyBSgxzGnFF8mH452jYVHE6NKSVyXZo7CkXk3r7TjX9GkpH1rxAPLPXTESdGLJqjocAPXsr",
  "key34": "i6nSR5GJbLJ2UA6EKD1FTnPNd2bXPpW1Baw6wrv6mtZkQVYfPkpSygvKkqY4ritMdUzDKYpQUSquGuf1wvka2QF",
  "key35": "2hjSPkCqHGVK58NTLgtegsN6EzZ61iqQN526vwb7CEiDjDadSZTGxLYwFhxmPc6XzFCDpVxcpEVEAAkLu2MYfBxS",
  "key36": "53rT7xGXQAAjG7w4mochwz9NQn6FJU2Ey4rRs7tRQBPz16UwYBvYDY5XbU7KRohcTbWQPMokCRjhvaHZT7Aj57Fn",
  "key37": "JKrcnPvGGX8N6DpcazgayH6AFf1jmLeWuxCR4FE2vk11tvtT62EPJj8MtGgUvuwnzC9B5VRvnLfZdHu3nxPXuig",
  "key38": "3mfugKJphWsrCr6XeuJbfzqWHasE7MBUqWyjcFhX3GTkyk3d5PFg8Yk9sfL7xReYazEVT9oWoHA98mq3FSgaVEcK",
  "key39": "4LQY3QBpayLQLJTGXbbLx4PoYsDontUvQa61H5EtitHhub1EMjo8w4aFFuSkJyu94GbxXi7vZ7VPGhGMHfebnj4Y",
  "key40": "4CJ2TG3LkZ2Qfj4TTJBkswX8WMSNYBHSLuYgASAxYsecPm8aDAKokP9vRwjhwRcKH2a9Ut7A5DPm2fR851zB71Pg"
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
