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
    "uTH41k2gKRCQYS9DK59CdPxRSrACbMv3nejh84BdhGiBUEA4gzKGcgc7oqCX2oCcAkchTxH1h8GFF1v1W3nWkMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4FXYtQfPvyA7oxmCW3kxmnYj5fcLL1kQdWHVFJjxkiXYLuX5kEGwxCbkHM3P1Gs1Mhcn5nSQEcQgokJXG4xn4X",
  "key1": "5q5DhY95aWrpEuUoZLkcbdzySYJUbmxn9aSSvs7GpbM9BFFYksF67Tp2tNeAyJ9XqaH7Gowy41buduXvbF1EQTC8",
  "key2": "hhQhpi6gzp6hREu7KQqG3K2eB828XMYqHEzngsoceRWiWgeMyQqJ8bVGsGS5QPd68ZxBroxSxipRhmUwCME1QPM",
  "key3": "5XjvHS3Z4VkyNzfdh7m9CGrgHYVXRf7iFJ3DKUfwceozoUyRLAQWK286kGAnmZbUSMVt3Fx7dwPH16CGo12JdQPM",
  "key4": "3c78einLiexptBm2HqJ9Lh96rBe69A5VheKfydYkDLMY8nRrjQxfXFX4EzYzHcrQ5gzqCQF13Ytgf8pubAWnH4We",
  "key5": "2VAkLeZqW93qbmS89mdF9LAMvGVBvukHGBVG9WherRV5JcY7QGZ5KkFCuZJif2rtdwisynnUZsf9XHDBKEbuCdpW",
  "key6": "3nuRWBkFZvHxcCHm9ixWYyGpA2grPMT1iVLBoKJCAWPQUSNKPyQ96EzMGAZ5s4CPS3xVoEGWQ4BQiJpWxT65hg6r",
  "key7": "5uUQbpnDeo3G213fqMcnqVsrkAncj5CouWC5pTsqUySwyHMSaWgs5g8cCviXJ5WAvNifLmDFi3TEjgM3gX5ySkd1",
  "key8": "3FVsyfkUu4zUeYA7XqPgN7TVRyvYvb4BtHFf7wxoNuMeauntzZqkNN92QrWpNzT5mncQAipeaJNvkYfDjaHjqkgH",
  "key9": "up3jfRTYJXNDUmUDweQM825bFFxut4iUJ4moDaFx7EaExSHyLDZW8Ba8m95Bmgy6JtDTHPzMWDjk4XCNaRXHjJt",
  "key10": "2vKdtQuRC47dvYEKGjXAw9gNB8SVbJLujCaYt78FwjP8A6kDGF5moB5NpEKUmGQpvG9FmKnaRAsTRCgxuWA6aeLm",
  "key11": "5XAF6LfseUqCYCd738W7rdkivEoweyCGFn68J6ayAhUTt3nUUJMM5TLjEtmbYr58DWqZtpAPreJCA5n3noushw1P",
  "key12": "4eN8mYc6yyycDdmvBMgPn3wSHR4Aivre3YvuDiHMPgnXiBmgWBsZ6T5KWGeGLVJPfuxi8MnkZwDgvJN11P9Bogpa",
  "key13": "2wdjAFr4HcQF2HT1szbCGNFdNfovxg4spyuAkiQGpfWCeXkYAjXsLMSuHMuP6wLQXbAn5QtYsCnvAixTTuY16WJi",
  "key14": "2urF7XWskCtWbJW4AeRfNSq5VGaiMpdfw9hbnfJR5odfh396ew6rid1q7n29zeUryq26xJHsEMGQuyvYwRigbsE8",
  "key15": "5hUrdtJPUr7oA5xN6SiWyqLQkGx5oErjY6Fd3TefVczceAVkpzxxZa4RjeN8krks5CZ8xff5KoVe7NBPwFAJTxAD",
  "key16": "3VGCUELVPfQGeof3BKZFqSTwmr8TXubJbS4Enww3JhUSJVmunKrmVaedtCMVjDNhZVe8yNr6qwvQQYZp72WXK7jL",
  "key17": "3pNBxFcxn1KBtuNDHQ9Yhzm4mnuFjR3dExvMbyQ43AYFvCVMzYaRmPkNy2iaTPFfAipWfoo1qCJVRdpvMHLU3e9b",
  "key18": "4v6uGujrhFbAT2XdUJZYFXbvbEWhxMtfnnpbH7aZrMA59tkci1p1mdaVQ7mBycjD5oq8QjFVGb89uQMwPAo9BU18",
  "key19": "3Cp88Ti6VDd4TsTgpZz1i4T4BvGnYkvpotzGKTPeWDNGfaPymi27byTDbtg35acj2TgAHK39mzs9Y6MKxZBncjeo",
  "key20": "5ff65PrnVQTKej4o9ZK2RrVFxusCFRwUTRGSVfdUXK9Wxzt1Q4pi5nBDUB521YA9qqUDBUhU1L5JvmYaPHvUNFCi",
  "key21": "5rsNr8Y7oq2xNy4b7vhQWxWTq6jYvvhyLnLXeQSgX8SsRdfQvExDZN9VyKmi6tA8mcA2pbEfV2j23iAEJWqWcocy",
  "key22": "4zjcVdqCADmebhLQharENHMUG1ZAqqvadh2kMjAq1Z5XrZk5ubUjBymug4Au4unKL4FNJ72k9kDsNPqBjfFSibsa",
  "key23": "53AW8kPjmzFKvEsNDpgRMx2YCRHKoQd5Mh4hhVwH9UUMRbThntp9ZFRMwPjKegnTrWHxu4CmifKN912BZQq8r6iw",
  "key24": "4QvABsAtb1yBSzyvs5Xt29rjkPipwzy1gtBVPARgwSgspQYTYHB9ETynbttAwfzEPH1rthAczQXKpQydbsmErK2P",
  "key25": "2kwagrSGwbV4rzA2pgC6Dgv4JVKfxCnEZGm8MzfNFPwSqi9VJLhmSLgLjZ4b2DfpT5pNi2VzKxr6RWZSAy1TKHSg",
  "key26": "3zKcnivSpcCfdtXfMWgKPKqtJSLMyjjuo4FSzYuhK5PkLfvktq2p96sWukRENBYyHiSubsD5SwYfiP8JtEJMeEZJ",
  "key27": "9YSXatZNQi7e13uyKYYFCRbNEAfvSJYEbWz6PhBaYkQNycfRvDmzhF3Mx6ohZXc8e9e49KoGSWW3vNqHqKqUFmP",
  "key28": "3BWWkvMhtG8ktgbusR8Atq618w7QRhAJ9UyMXGfZJsEXF7LGZrKMBoUmF56Mcn4gjqBkLxYNuxgczJcFAms116aR",
  "key29": "5kpY6ZzcwLNyHnxZ8sy8LLGTUdB4ZdVJ3jcHCEFeCF8crMqVCPFH52auhAz783X4KcNoVTEux1Zm1A1QG6bUvso9",
  "key30": "4VfsdkNmMTGdj6JoCzYEVdKQSmLpXjcW1gT2fzCPkqQgUSc7e52iprh1Weq17J63xW6isrxeUuNRdkLPvdaLNQQb",
  "key31": "5n3TPVjkbCuCqcS55sBaENSPKQ4hQNtN3caEVaRnLFJVB3r4TVJvUQBbHQ78UgwwZH5UMpzfwY3vP4qt9zurz5D6",
  "key32": "pia5oFCS1T1cewVjMSAiG55ksfoXFgHLvM8huvypLthwx1cEo6EU6YwSNQ1ZtbjZx86Evw2xpGqtnqME7sjvzUx",
  "key33": "2rEdCGnMfNY4cFcpctZQd6Nw7BBXqEmCoa1byqZ1Px9kKWtum48myUXK2YAepq17X3bppT7BVdZ8q8ioh1WPvH7T",
  "key34": "4WXCsbFaqTtKt2Fj2Bprw3gdpk6qxFfuJ45nk87Jz6JYafAb6wk2f1tY1YRx5MSkMXfkkHJEgABjzYi9whjBBFkX",
  "key35": "4Gthgftjh944VNfFnPckuxfGd3RjF6Rc1CFGBnurFh5xHjtVAVV8DfPLS5BbYWDeF6rJmZUPzdmD5QWXBPNEhuAc",
  "key36": "5YSVogdgabRjSs6YimudyErnxwdizfPoDXYCEBHh4KXJFNoM4cTwWmHCtnuuoLb6daBXvLq26K1Ws3NMNy8u4K2X",
  "key37": "33Zzu8FRgt86oUbReFNiRU29xqg2BfBkbpgn2EBmVyaqDpysRHaRejcp1kxem4u4VsiReFJLRC9Kfd933i9nsEmm",
  "key38": "3TwxJRXK51kWeR1XRw764TZ4U32abuabKbRUjTQEPhs3RBdrTjaQjdNWDmXzQTuL2xHwrRDKbWLs2JJh4kRF3ELE",
  "key39": "3eKYJiSeP1yaXhcwiW8koYXymHifX1UdLZCp2PDQSfgK5uLqy76G2FsEU7S8vDEkrxtvod1s3sPr26914D4ETvbk",
  "key40": "3ndoKkV4ZPRmdRKdc7SZsP999Ftqnomg5hTTBmH9BqiBLXfUPBtfCy4w1vSMhcNUi1aZ8J2Hyeh9tnSr8jVML3Tg",
  "key41": "4ArUdKC8VEkHVrh3vhQkbRm1CwSPBZSTWX9wMxNFyM2oWiQHF7vxcTtnDVYDYhuma2KmtSerJqG41gHH6DrzWphY",
  "key42": "59i7jTLddFE8fWKM3Ah7Zb5Ps7oGEFUQo7SyDUs6YxM1VrDobMBAWVHvDC6PNeF6CQkcxVyV4SNFDSzcGayDuSXc",
  "key43": "2huyP66i3nb2bsWaomDYazE3w9GiLFUr9MhxUrZFxEBqneCVLCfhKeFFmmzYxksLvv3cX9brxHBJZHGYqpc5MyRd",
  "key44": "3t1QtUitMKhNrL21BrNu7TRdSssnJYGYUbtxsJVf2aSz4kr8m2CdPL9uAQKceGmmdeRsdzVfoucrw1GbARnZT1Sx",
  "key45": "uYAFhhLxnYnHSsaYHBaTDVZ5z5aBLkEmbstWz2RMh4T8UiW4QEWi7xtwg5pqPokniEsTi36uixJUv2fYiZoa6nJ",
  "key46": "DS3vA3CBq7P78A8pPxLgrjsbAdGHgDZRS3SM1gDf8aeAAWj5u4v1raZ8mUp3n6CU5qpGdsn5zCoYfseSw1W23SK",
  "key47": "3UcCVi6whDZk37XwZm3UbvgQJtuGxdgkkHoWVT8PhHWzEsDVrL8HMRCe1DgQWKCR1238QVRQh7AqP9gTzfSss8XW",
  "key48": "3SypgWyPK8BRHRpm1MndKHpzAG1WtP3ghdsKKSjZLYddCCjuX1SFcgwM4TqZtLoqcC28HXGKajERX88DyurkBQEj",
  "key49": "29Dz9XnqtGkquHnNDzaJbdjyVDKeYD1WYkVTnssUS4NZCM1Gw9677W6Eu8P2vZkcuUBdNRjdPsRwdTQksW8jhwtk"
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
