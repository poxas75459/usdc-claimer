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
    "5Tw26GiirRwEHqcwrCZwJfQD3d6227Bi6sy7abZ64KUXWhU2QtvFz9AJwX9vweYdUuRQ7d9LXAQ8LU2LipRJAYjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPgMyyuiB4crzJB62UwoSHUVE1jGB4syVzBVtPZdWoLChBt1hgCAvk8pNou73NJagrv4oavugU6oPahiNEXCBL3",
  "key1": "39abfunKohGYm9GknZoWRJqGEeTvAjUoym5Bbo9UEm2RHAtDp5iiJWY35eMmeVyYsiN9EBvAnHP4MCYCBHUmTkLZ",
  "key2": "2zjmW5STezwfKnRTvoFtcLTXsscrovqkkQSCGVtnTSFkbfAK1cxroy8fXA2S29BZwJhhX5Z8QJvYixkBZD5ecKhx",
  "key3": "65uEmcFhkugKB3eCL6NDJb6ZoTCxqEV4vAEbcE8oTJm5GtvLT6w51D8byirSaXXquXXDTNUBojtPYFUAvdMNrQ4T",
  "key4": "3BQGh9iHzDmytBWaYrb4FVYyBPZaSJ3MuAj9K5ZUQEwGNRT4Sqrp8e3ngf71o8RFkb7thZMtdwLjThb263dz2n6p",
  "key5": "4oFzDL7RfhPphG2Tyy5b51MmvKcR3YqjLCrCS5e38wrgxKUstKk4GiG7wqJkUzwKveHQop62E2PQxkvo4Jc15UWK",
  "key6": "27wbqu9ybAKS9DN7gka4biXbS1uWDurHBTou1Ud7RQzXGV94wmRbKf6i4ScewzTU2Gm9t16TZAuK7NsoDP2dLnva",
  "key7": "3yXJD6CcMBj3fyoEYhJDPMjfpaYEoUTi7bFkJbnx1xeCgSqwpkNU7XBEyChtAWfFbcaW1UDNnHCT4WP6t7LRtReF",
  "key8": "4hMUNFaVhGFQWK1qydCRVEJ2E9MyZMbeFTq58P74VgMHR1maJAjhHszf9Lv29ypgWi5pthcGPSMnp1B6MwPzHw5b",
  "key9": "5GFifRg8syFQxgxWu2RD5rSVxw62vSQspCZksgTCx4pCFbLy6wLgPwjAvC5WyDjPZcR15ZZKPDgH7wY4zU5FcDBT",
  "key10": "4XdCGpJkbx84zrdy6yA75K3kQXKUjQ9Qu4X23vi6WLLNQB23kLamyZrELSmN3YEH9eKXH6jUhu6xHhvFjspvQSUf",
  "key11": "4n4PKQQ3RMxTjuGsrLiyZWevKQV69sj6EMCMNZ8HHSxZEqyDpKYaGDQm2ewyFgX8bA8i4wBfReYWvkd9rCAGCkXZ",
  "key12": "L4BLfhNYvBN7986CdaF14Cyy3PCXRh3WLyeWxqfrgaBm29kbFmNpsSV1L5sw6wnCS86SWJgHKjdCfazD1jrWQWR",
  "key13": "hfzoQo7UWtxh18j9y4KwjPqMim1nzTwoyGS2hQ7PeFpntCvo7P5pQS49f2Wy5os45q4HM8R5ZTJTXngmZXnd2Xr",
  "key14": "Pkiip74DjsHpR6yFP9TkWzHadF396twhYosvSM819q2mpmVvPerJTnSY8ARWUs2VcLy8PcLmxihELeDF5eULe8Y",
  "key15": "2EcmzEc6mAUbfnZ5VrtGhaJtUYfxoPaAEfMaqu124umdaNuQXWhZxpDEoTzLhQ9vM4h8qcTJ52WPYPMz3qLqDsxC",
  "key16": "3UDmy2T3N7mSM8moDHAhFr7JoXHFR4kFdAndRG1SHmKv187pqgRtmJza3aPxfVLe2qXdG65x3PAmVQMPx1y1RkxC",
  "key17": "kgGsGsCcECERrYxEHmUa9WeuMP3NaaurZ2e3azJ3bnw3Vjd1rNQE7t26jFYsbgHdtyRuAyuX1EtW1LhqvHpRfc6",
  "key18": "3AH8VrhtZApJJMf6Ymor8BvuDEGcskfezdSPDWGMiVva5H2L7Xsyd5ghYo4Rpv7CsyY4i38aAeHHgazrHyzwyYS1",
  "key19": "4ZormVqfTYgKQM5zbbQKxSpbcj8eFE51EvbX6tKLZQeMvESHmtgQBZoHWe8nAhqfmXA6WvDPzoHzkQ5n59fqYiN3",
  "key20": "2pQACpmqjAvNHTG5i9otXHx83CM5hhvo2MaGVmXmXV9tEaZsP97Y4tQ3swgb8EbnYmKMg41cyQjUbeUygfKwmDLF",
  "key21": "2pcuZy8L8Qc8TmNuckxjqJntJB2Bnpqj4kQD3TvyzcGTWvJLDfZpsQcxnk5K4WpNmSHGYBW3CpCZ3KaSsZszqVXT",
  "key22": "4VG9yE2NTvSMiHziSDMPKZZNJu2rwwW2wLnH89gd3rCZcvYnoQMyXAC3uqRs1QZtGb5RxMM4N1CBgDAvdgfSYbC1",
  "key23": "5TmH7fTyCH87aBLxnFnmbxEMb7E6oRhGpgzhVftwJ4YBSn8HU3F6ruTinC4iejKpc29zSRLh9PJn7JsKchxoBEux",
  "key24": "RzyJ4XrUNRCSjkHsQmD1cVguoLz59f23u1diVABWpezt8EBCHm6STXuBFVHkE4e9p7G3oYFe3Da1nSXwNtGDy8e",
  "key25": "3mSsJZK7DvhYDFDsK2W1ToqTvFCGabZoAXWnQcebHp9FaUEsBbYBsWqK5SvioyJVHsm9dkj8YuWmQq6YbWnnT55",
  "key26": "48yqNcahMP49qBCrTXyr8kZLsC8KeWBko2RJu1BEjbZtahPnLcVQa3BGWe3A5jAPopi3PVKGzjYRupTePkXuvEAg",
  "key27": "mYJAPxt4n1vL8CgDPmArPta8SV8XvmgMfzmphqjv1Lhi9ajCENqvgC7utg3zicjX9zJ2GoDaXVmHqjoF337ujSq",
  "key28": "53EaJPyRHHAycSUYoSzKKnRTibgNskeEg5rggc6zFbprQGjHwXFst4S9drrz1ghRta3C7LcPykuoNTB2ZE5K472o",
  "key29": "5Kx78JwDmedbHD4DJVGimmYF2VxXarC9HAvhpRUR7rfTaHFFJiGkgn7iGbje8ru1cJy86JVAhw26KcHvAhEs7KkU",
  "key30": "3x2qNg7odrPhrgeBE6zAWo52dUzYQrdFHYURX1v3U7mCMNg2fvbGWiQ2sKPdF4fvgv9zmbtWmuCm3xkKE8mFbBUd",
  "key31": "2SXzcUULZGF8pSj6aqzoHuvjvYm1xXKPLF4aZiGEQHJsVkg2dVxdbEsA9aQjGuUTzCt5zeX8CzyJ8xN7UvqC5Doa",
  "key32": "3g4N1ookGf4kCgLREAXxJnACuTJovbGnXvedytf1tntQcCEJBDK7Y5Bw5NJTbt9TnbTE9rjQySNrmkuWVzML1MAT",
  "key33": "5EZqzGPfoBBismk8ggcHHSjvqnWtWr2WbskzYwnCf2WTNetaLwhKsxLD42K5HWUQBxnt6DMJJB6pVimaatZYvSqq",
  "key34": "5Lg1BdCobcMtd1fPSYnAoqAhypnYzcpyseAtbVhYP85osYxYn6xxGbxhqXeVJpcq6mgNZH4c2fEFwvaSLqH49BSY",
  "key35": "4BxTWUTz2YjPBCd3yZnrMZfhr6MCUmpQQFVLaEkirenuQbHnpUAjmQBLMByuFjJianV5Gb6yfB9zFPR4BkSV82cS",
  "key36": "5SJi6AWzb3RGjoiz56YPrVyzMXrmRqaXkRYpiLUkv2wJ5zbwYNrwLwxi5GZ2hg9LH4eAoiwftyvmkvdM3BB7mB2R",
  "key37": "2mg5W75PwJQeeFyzbtMU7qphvRzofreTN6BKJQKb2rT1Y77TEZWF5QWLfanCr6R6dZkCHAJ2NbcJeEb1A1HyD425",
  "key38": "5gjjoGM6PGEnbP9kZrA81t7ysfjsEP8oKVJ4j3fiN2JqSbHmbuG6vMxb2XL2fSG4hKM1nXJ7VEaJMTfvVBeFFgsy",
  "key39": "2HQv5D6eDhe7AwxD984FtbGnw1WFVYfhJgbxCZLeeuzCr5Z9H4CxyBu7jNc1UefrxqgNide4H59JzyoaYQouqw52",
  "key40": "4e5UK4Tm7sJnWndHNaLAFwEvoJqd1GxZj5rRUyELjYaexK2r4CaDVRVjuyFp8znCJNuHo1BXwZgXtd4AxFX3joSf",
  "key41": "5oidgtjgWKQFexpVR7BbDtucvJGMUAv6FBsizZiDzJR5XSSKGkgSDXgW9DJATKhaMkFkEn7ALuoguYLf4Bfnhxxq",
  "key42": "bs4ttr5EWST298uuGDcEwpVf18FT3jHdeXmjQCZ6bXb4MsWbx3FEcRHQUutxT8t8vZs7D4coWLoTwHXJGfjyFmx",
  "key43": "2nuSBCpHPjsP4nPcaffF3XDUtf1vxbWckQmbMCpYFoHU1uzNjqW1g1EhcyDB16pwLSpMTQXvTrFHdaFVZ3m6wmsA",
  "key44": "4Qig7cKkDMQikf5FbppYU79sygWWW1yBUpVSxsbeqU77nUQrv4MZz9JbxkVKPUX253JmXJhq7cQVDbuHuZw8msNs",
  "key45": "491tgQ5YUnjf4XgcD5T7EcaCSsv25eSFeMJzNfzgpSyikd3pcAxq41iAMyxPGU7sevMWcMDBxp3QgD6Xjs8ayzxX",
  "key46": "4cpWsgRYywwBhGoaYCeo4Ccpgo4hfS9S5v8Za2M5Es9Rtoj9QF9WDrCfzctkwyXW3f2fqK99kDjh95iYtENTyB1o",
  "key47": "4Fedh85Tut15LYuPApjEWWDGfhV1uvdj78iR7vPfyBpLtf3guGVZQYpp927o8Bbqny26Kq6jjqWwLEFbYo1USYWA",
  "key48": "aQrWV7gatHzRB1HtnXMhe5vicykFcTxyHsAKmtgaF3mkLPbP71Q486KBAUpyxPaYnSY4TvxNPnDmnf3Hoc9kBhT"
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
