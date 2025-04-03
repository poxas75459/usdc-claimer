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
    "35tJRYJDoAYTFZpLXTuAZ4jHuRrkwJSbtb5VEcdciAFdshjef6XHiCyWuXYZhapHY9Crnhvk6yPb6TmFjgd77Zpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umf8n8Sj5m5Q7vfC2mcyXfUgfnq4wAtEUYPAZvAwESMkxMFrm1aupHKWZMBFfJUJ6cbgPdrKPGpJCCCmJqaMek4",
  "key1": "65q2AtAPsD3WprVNn3m1HEca4Lddnn5CDuCpBYQ5ny7PvRufwPSxomXC6PTXcBJmujEDZroXGJyLj71pnFmdAwyL",
  "key2": "54YxRT6GtD1gv8WxC4JGY1ugMTCfmaZoD3AWjSqPsBTAGVq3XN8XbFqBanVsdGxyPtnWeVAZj2NgcNCdofNC79Hy",
  "key3": "3vqvt984U2DonZjkZpCxJDjayhEZf38Z9byQmF3ZbUBVize4XBhh4VDgM4p48CjjsMh6oe8CNDnXWCXnhkBxt3fJ",
  "key4": "4Nkpw1PooU1Vrd7W2p7g2g724YDdjJZyx8W4PqoPuMQoB2F3Ck3q5RUVnvrGihB9PL9prL9EUv29gMexJxkAjYFN",
  "key5": "xBWd47dJQB2qfhii72GbCFa8waSJXJtEgE8zKBUr9hYGrAo15Kjr55zxdRgPcpr7uJgZ56rvkPm8UniESCMpoPD",
  "key6": "2myFFr64oyb8RCM1LNp2Gcr4m18U4qvw4RcMB8QS52kk6ENZLGFKh1HXuDKKdtQMjSB9yLZvhEzM3pUqG7Ednie6",
  "key7": "1NguzXX3ir4jBYEYf2cZBARBqH3KegCCmFR1ADzb4Wvoa2kdx37NGBMzExJ68vJYbeyyGKyBeUMXeHWNmCDGu24",
  "key8": "3Hj9FskcnyKtU8C3w6LDHuUz7kyugoMAVWWLSWWRCmy5byxtzswZm8pDFFbNNf7XG1RSYmgYebRJfi4gmf3US1N2",
  "key9": "kzaWuTueDUQuFgRxruH2NXJAdb1qRCje6QVfn2Gjc2h13mAoAe42oLJxpwGnyfZfp7bzfv431tMiy7u37WwqaKL",
  "key10": "ey9f1Cneo3AWF3nuQ75o8NXp677aEjM2pdZYAw218vwjnN2QNweAkemiTwdWuo3g1M5zAbFZ8ZkAPqHw3AkUgy8",
  "key11": "3HXqYA2YeYyRyGNUGmzEqcPmSbpPZM9mtFesf8U6U69xQd5ZgLEEe1uLkYaTNeik2z2fyvVPvT9cHgwB4LaAf95v",
  "key12": "5iSkT59kZEUvCNfSoxPTeZjKK2zEYitkRDxbJGdFJWSAU4NuaFVjdAiFX7G8CY4XKg8ePiAxFwun5ZZJBxEBrpPn",
  "key13": "3f8P78FNk7eVrqU9wv44A7TT9yYNR3vvTej7KAADBjzDxM5KXifkjquZwvDdxqqHa56f6K4k74YFHvUbUndFiVhW",
  "key14": "5fYWyvuiPdpzefva8SsZ6USj4appgS3zE22PwPN93N3eJ7Q4p4sCzCAe2RVqrUgDtgN8vVNQgsyhBD2twyKprhdH",
  "key15": "3cXJ1WqmCcTpyafLGqzdUdEU2aB3FHNr65myvLSm1sF4eayne2VymajvrBms7ezzYxEst1wdi2XY8q2XSpJ2obCp",
  "key16": "a3ZyuWWVEW7CVd3mhsthq3eA66Q4bQ4KayjUM9GSmPm99XbW1ErbUpatAeQKuR2kt4cd43xLPDdgoi3KVn3Npse",
  "key17": "4dh4L9EQpWBR38PbRGnyiiUGtxqJyskgZ58bmYSsSieoz6NYUd3jGsPcZZ6rHDsuvAxy81ei1r5pvpozcMyumoEq",
  "key18": "K6fgxmhj3eSr5fAJQkD3jYr191JTcChrfmiQBmzU9t9owAuTypksN4Ywm1Cp7TfbXt7TibyXuPppvyYX87H7WWX",
  "key19": "24MEp6VmSLVumG3tumE5RMqfkGsEZRJL9CeBYFsNXQMgnE8EsjXqqAsGMozmF1tmTrzvtieSxrr6y3SriiZ1jGy4",
  "key20": "4MAkx1qXkRA8AnKJPiT7Twxt8zBfsbpPEvHQ7osNZE5L282nurXPEYqktvXq67hAmnhArwgp8JbrUL3obLtwT7RR",
  "key21": "3wJkbSKuMoLcZkpPNrY8tjmNGUayLbZqpRT5K75mMAK9GwP1XJHELE3W5jojbzPrMsvTsgSyayMuYBp5Cxu1bU5U",
  "key22": "2wSaoestFujHRSsNT4vy1HCWvbrG4eScesMQ4RohzshPt5SnTMnYiCFKvEYyx4cbjhs4xscaPaDVBVfddz1fdSi",
  "key23": "9aaspuUSnF9muxWw9FxsWRzA8vSHMVKJeQeLsCgiW2c7d85pPzELCpTzGbCZGYqzjV5mB7XSKt7kpErrVbpKY7a",
  "key24": "5B5c9GF6kKhxKcHogw6C6N7UvJhDGLv9C27JjbSDFLuYYZFu8n7H6tajD8Qc8beHr6Vdj9GDu4sTND91sdj6csjG",
  "key25": "5P2Kh8vK4dvHEbUJq44Evg35P7PGSaVVo5jSj7z6msnDrnfGphzxgGqpvUpTq6tVeST7G58nr3iBCJHs9UaNS3UJ",
  "key26": "5BtiqovMS6jYFJdoxhtU4gcXBb9dbBvachxihJjDjurRsGS4F3DgeBPJXabXykuhDxQPA9WcgrYCJbuBZjv7UGU",
  "key27": "4G5h4ocPpAvWwT86fLuVrC78HN1AEeUPmbm2Do5uzRPZddroyCnbzacqNJjxkUkCuBv7mEA5bHabZG16RgTfCVC6",
  "key28": "5xgKCr33u6L5Rs3UuTfSbHiqSBHSDwxKkPvhBzzeDuqwpbR4gfGdeBCp8KysJNQf9sMio3L8wCwM4nyrqsuVnYAn",
  "key29": "26couvfKTGizZUrqpJRpfJVNn2bm8skayFmF53YUPLbquG6XEcXNJQrAEfTc2DieKgFS3efEL9AGYo9DN9MsLrPv",
  "key30": "2vJGdUbfHME6HiuNLkd8BgA129dwz6aL29Qzz7SpVHES8AoRQdej5jTf2zkEkjx7dUhsbGQKAmGqLqQb44J3kicw",
  "key31": "5M9HYdF8qzjue4hQ7yH9rJBHx3YpHuQedqHfbZtgx3c1i3C7Y93LxLoDhFQAT3pF5oYJ32PBwxkBps8AEAhEWwBF",
  "key32": "YMJxZHd12519LRbQVmwQZbKQY7FRaizC8eqMs4k2f9ikWNyF9E17XNJPi9sMkYtNrRCFUqGHZzXQdFMcQ5MUdsz",
  "key33": "62kWDnyCugP1Sdyq5khBUmWdTrfR1RWgoiqP2urJX3TvAiVviu8wxRpCLDgyKLWNKke9ueJq9ZHAjDChbPxjGVQh",
  "key34": "5np46mPEZGQbbzs2mPf87x46FWu6JkuWnhkrEwe5wFoYw6QmSDW6qaHsQZghm25fRcbjfpRjMUqFKjMRov72gNyP",
  "key35": "2ZFtmkaDshmXWA4NqKhseXYxMb7waqF9rm3DxmF4g4yveH8TMMSwiR59VbRoMJSnNEieyGVW7oSJk93hyumdpvtB",
  "key36": "5ptscbNNPqBCn58gcYdP8XonyNrGaQy6Mdx5tktHDQGXrSdCofPbGY1PsRNGAacxtvafuQWCcUTt6oYRM2feLwGA",
  "key37": "43YwFaRAvfs8pZPEdUvdwhD1cudGkoqGQQugSQBqE2sNvwD6gNcaFQjkmkrLQK1oMWdmzE53Q6ykrUrKZLbNu5DJ",
  "key38": "4aN3DaKwUcDRhAVc7PpgHGgcMFrD5BSbNMnaLC2M6GGiTkQUJAT2FmX3iJH7BkZHE7ww3o9tK6HXLfwuFoRMGK9H",
  "key39": "3YVGWnwinS3UsSyxFM5AZTizHRgPTxUmWoXAbdCb7DXBFP7ooALn9F93N7jwpV9E1Lf7eqew7DMKwH8oz86SS4gZ",
  "key40": "YqsHgZ1Mp347jxFudYm333dQnb9nKuGe5swrKeesMR3K1oiDrSeHL6WdnVKtDqEhZrim2roYeMBRU1g1gYhySCj",
  "key41": "5jHPzgbzkAGYQNRw1Zg8ZW876goJgpgmU1QVAGHQRVvrxVunPAoiGBC1hmRLWkHwxfahu4em2hzGWEV4XGxZDxFN",
  "key42": "4AdXER1gZqaqEy94Pk5YzUHxSE5VaHECaMZjnYxSDoqzRJXhRS4ufjfkos4y1rkJEJKJfU61U35QCZsg1C2D3fpo",
  "key43": "3jwsfEiGzo57a2oNCPySxF25Hi8ELjLeYP5GWS9Zj1STDu3dAFsV3MMG32whX98fat5RZnJuHXh8hN3jkHuofwBt",
  "key44": "3sQ81X8MkaAeN5aBC3Rxmq3BQ3UbVv7zWZ5NZCSCjT3hjnxeCPnTBjrHRYpcPUNndkrazXCzikL5UQND9BLqE1Pu",
  "key45": "oJnePcAJnSkL16s6UNgKbWX5veXZkALjUV5E4NAX17MrvyYVjZQAD3ir6RpZZFPFuddPqHc14tZ9zt3xuHZpPU3",
  "key46": "599mGp7Vcn7cJcYek8pbDqbiYcGhteGWZiiw5ZEf3JqD9Muis6NwgWKJDpNcijLPbzj8E1kEusu9L1EG5TXV3YaQ",
  "key47": "2hmRdUTj9jv4nWTsK16y4adk5sXdKVMy6tWU4nKxLE4ArKa6AUo8CHKnx5kXjADv4bQF1WWPsX4QjTLnHYhcn7Mc"
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
