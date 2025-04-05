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
    "q38pnRi2cS9hq6CNgytckPfiML2aeyR1eKkGCees5TR6RD2AnsfPsQtdZf9YKoBTKmczHDwthxNUEuYXHAfvvuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41YyFyYt63yCGfx3Q6Ms2r2LcdxFKQnWH77c8tXiqTTkqshKEBYWHFQyTcN1f9Rj13dKp8pQmemzQDiMvpYRVxDQ",
  "key1": "3e53epcqjgyM9rtYAxSSXzG6ysJTE3WNoQnSPHgJGuoavPdw7jYr8L8sQQY9ztGQChq3rGffCiKRpqjR79CWjSUc",
  "key2": "3NCZRp2ZkKKwJbSdpVxSMrSegHckp1LuVEYCHLmTxDtdEpnxqi1JFi7RMay7kKEwkg4CAHbPpSgj1ib9zyefbPbg",
  "key3": "28S1jGtumZBiLPdSQ1RUiRWdXvr11spdvCPjp2FgtJs7pYWkXkqeVG8CVEMJb2vsM7nDQHanorxfVfs39Exr9SHX",
  "key4": "677y8CEggZWbUqZxypL9DP3yN2p1NRKfKDWr9LrDJaBZbTcHJ7VUQn5h3C4qoMsaxHTqaU1LotsQFnTBxkU2ixYp",
  "key5": "5rzSBDaSwrCpCYvs2q6h3fjJMiz232WuMk86nMTRS9SpPrwHzPHjH8nWEig7CKL7Z7YuAR3G9Si7Z9uRHQS1cAec",
  "key6": "25B18ESeM6UMj27xfmdgbN6DBqjd4YDoDZmggQv3RcSwVDnZEFL4UxNZmYumDifNxeTPy272PwEwSBeszUvFPYth",
  "key7": "2LHoMAQHymLBbDcRBoKqRhwDBLo2oigY2p75vjNg7DdeTfQ765V2EgpAKdhXjSnkV1YYCrmB9rPM9u8o9DCdaDQR",
  "key8": "66tvRT11di2hELPAff4swYDr9F51RhDdsSXto8Xs6vLQsWrCyNjih85MkrwgAqGjaCEimccQUgTVXP7kuvQMeRjN",
  "key9": "ProobEPNwHD3i8JW2RLvoSELSBAVzej6RwSmvT2Yccdn4gLHiikXTxXvvYqvxck1ZyUtkTYiSn5k7yJGyaiHHrR",
  "key10": "4HfNqRfxXcs3NCsVGrw7dZQpvPx1Yx93daz4L8GWZ2JvN1mkvZT92Cr4M9u8FYSi8PVQ97UTP2ujm3pfLxUbp3eh",
  "key11": "4PcPsN7pSajCJFFnYtQAyQ1RRiLuRiiV2g1MZ6knKxBHFjtRBJtdUFJLuYhuWmLna6esRJx6UEuTv2heB5g9fp4C",
  "key12": "3L1DsWMNpBAGPpDMxikWnBzJWUE1m4X2sd8nHj7s88vxzWFxfjk4vdYg2dDi1GhQ8NoUAk1HVNAcBkvHtwAHdCxr",
  "key13": "3Tf28jMsJNak3EtvKjia9L3e8imQKDnakp3LYd5rESrKteYCxvmTj9XdnmcmJTc4xpbwj7HSvqXSsi9ayj2Luc8i",
  "key14": "cKuCAA6rSa42RLKVzfBecp6qFrtezoG4KC3bjJXDnWYtiDVhTihWRMnk85x9BHEgmv1TbGson38AWDypqKFKw8f",
  "key15": "5PAfpgWEkWN8VXKoGDSG8LadtwXYvWW3NLpCsdk4ZyqKEE5ZhcExdgBC1zrbx4gpEeDW6AADpTWgaVNxgstLkyu8",
  "key16": "3MmZZ8Fb897QU3zPpev5qwFnGxUdjUQVHmuAyL6vMaStEiNV4LGhmRMMdEszSindhJDrzWt2KwsaUzqBNM6ujCdw",
  "key17": "2aw3qMpRAN2M7GyfSoU6fj2bYzdfCSxnDUCacjE4VGtfTCuqqD5eZYP4VhdEfFnQWoSWYwn4kPK6Bkc6AAfASabG",
  "key18": "qzNFwWuEJaw37rjHgRMSzkXpcwNbcqmWiD6qJLJUMpkdGeAAy1sQ2DcCAiZB3SkzxJdmMbtUWAbE6kkhoEHLkvi",
  "key19": "3hfDqNsTDykjZRcLwkiuCuB16URAzfcne1YrVimpZ9GJKakRJdM2HTsTR5tJaFZoVr5MzY92mogorbMhPmVbQ5Ft",
  "key20": "5byA9JjTVJAPz77vAAyPdNkzrbzN1LWhfYNdbmspZTheX5XuQRrjoFYqcKzjbMXKyPb9Pyq8suPjcPYYaF7Ev7Vk",
  "key21": "bzZeLRJj1PpzunVFhqSHuGgTkeXQBexMAg3c7G56GQZjvQHemycGtift4VpvtFTuNpnCESviaX614bjjSKMaN9B",
  "key22": "DuNraCNBwhL1V7FSfENJ78eFZkruuXde9W7yPzgktWQuFBBgVu54oFv7MBTezMiQwMvHjL4kbgTXgzkrnK5ULa5",
  "key23": "5Jy9mS6qBVDs8QNPQgsUBWTD8CgUjymz8gundNfucNWJcfLDZPE1K6vd5UjpWmKeNL3HrGDBMsTejSVHp4mmytdE",
  "key24": "3uCBbMfpmBBB3AxSi8ae5gBGphfeVR2kxuFQxx6Y5H3X9R7txBaS7EWBcnyTUsWNWTk7FqsKx8zKjV425nE7gPHD",
  "key25": "5DU7Kq8jVeb6fXKWBdZjdDDsemRFE3wVKyPKpE3dUzEiwotjoPqPA4q5ong2qefNHZ8nDtbZjVaUMy7S7T24UQEB",
  "key26": "8vahAHEhqjRF7DAbQLbT9bmaMYJmUsAEvHgXxbjeb9LXNmC54ME9sC9k961j773q1mPu1tYb3RsYQYWmy4VUd4C",
  "key27": "4i1u7ZknZGz78mMYf8Vgn8hJ62C8VWKJ1ir2oMou36EGGA5bWNMcgrJRmpGrT5ETNtxL213KAZxxr85zkbtDm6ou",
  "key28": "4RE2akd7GdsCQD62gzJLJrTxiVFyv5VQZxfGjMhhQihpFDMHedfMNi8KCXrTqyy9cHnwFi6xi6GdgpfTRLHVDHjN",
  "key29": "5gHhiAKDqAs8J5LdYWMkofADR94F38Ajdecs8Y5qU3BKYdRZXXpspFg1dhXoHp7A5cSNifxYjM7wADhpKcnRAb1k",
  "key30": "5JjkHeDGNcUiJf8XmwFjsJU9DCANhH1SYfAAzgebZtLKEFKiQq5Ho56reaQKUT45UeGma5BaCiNAEneCMcerYTuA",
  "key31": "2cjV5rtNAxW8E1udF3qam5Ubip8VXyLZTKFJwEhcMWwmLUcAsdyjFQTvK53uq8dGrYqTqb3ghNb7ZUvuUwaLCjRr",
  "key32": "32MhaqDjVtmdYMdBqHeh4S5jP9z9WF3CyhLdfqDr2gfQ4iTnwi9RXCgW9nzsayf7Jen6peGKTWLNLuXnK7vaSZCP",
  "key33": "3S42h3HbscBYXmE5tKPDNneAzat8MH2oskgWxeau9x3pZBmm1LKN613UZUgP6ARWJkViEH5xubJpLfBr7tsQwigu",
  "key34": "5qtK3Z5TSvSBV4fAfa4UGwTEW1bNs2KBuqqxjpNov51xjtQaWaRpuQ54jHNiKRMLJMnZmxpGdZiAEpLqpFAzqwAi",
  "key35": "5p8kc4D2ff5LyUK5Pohe2AmbpS5BCvVitumVC7upNcGr92BMnLC7BCg3D1VhXdmjXH9tqSx3R7jbY9APJsYUkbAC",
  "key36": "2rBGv3JdbDKZemSTzmELMysEiTjD7k4CY5kf11jqyKrUYTQ7d4U1rsqpn4tJfWoJpwGwUosu7WGPP3B4g5s4BxH",
  "key37": "2Aq89sKj99QYvfMZ1SLw1tkVX7HHhtf2vDc99YwQL5JfjRzx1kUyUCtge2VmWiEtNTpVKosj4TW66fQNsDqq9zV8",
  "key38": "2oG6uWp4rcdN5zCmvbjKmL5Y8Tu5NchV3ggRjXmKhJXfYz17Hkj11EDDrWis8esgxkuS2Wwckx5TTnHEbbKk4TFr",
  "key39": "47LKySfvhjQUzWdFpxhZrnFdM4VbxPY5fB4PSgzyGd67DqA1bNRCrxdhRF9vdvdHt6fXNzwVfZnRuCAQRDKPPScC",
  "key40": "9b1oZ1crAtzxuvp5a3GUxN29Ve27gnDurFCbxc8Dj1cvoHNG9kjiDvehvnPd7WUm9dzFLa3Qd8QhoT95RayAbYi",
  "key41": "3q8Pigr7PECQpY6i2VdyJLzoEFYJJf2YbXn8dTrUAyQCTmUpaCbtbjaeSjKU6LA6CeaagFwAo4xQxajY2pBqysVb"
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
