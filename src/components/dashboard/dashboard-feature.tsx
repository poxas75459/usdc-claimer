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
    "66VbXLz2tw6sV6z8w8yQoXK1tyUuzWH28T8KmfJLXPHN3m1X3dpkNba2NDWF5a5viUzW1bnE9LpsApxF4Zv2RTcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kT1RpwcALFTFQEteDyXvZgLP863JfUCSH2nVuevM974qKAxYjtSXSCNzZyhVbx5MAPGVt7p9bEs2Nk8Z14U1rxs",
  "key1": "4TyT7PkAhWLAigTzJdwxFrdJc5apXAQ9ECPfWCh9X1ueWf681Qb9ras8yoSV6bCS7my8MRKPy4MtuKHErXp6NATr",
  "key2": "HvYzewEjv98q72qMusLTCZwsTFbM4LE6Urou9wvJEQvsEqZCLfcc1VbUUVSkBCUUko2S2eSxCFkRXSz5MzhXWsT",
  "key3": "2zvw34oL9EwHpTudD7SxLNqj492myG2jX8GK8W9vYxWNzET7233vy2W7cjtPYi6RGiZDwcUwnKLtpcSC9EyFp3Zs",
  "key4": "59MVjEY7sPkghaCk7gPyfmEs6XcYNWhuZMWXEmByXuhjMXtMxzXJFw68iT4oJmu3hTVAyfbXSJU4XmTGRnXpcT2t",
  "key5": "GYqf1C3pKRPTG5nu1LvoYtGFeUdPM7QD34de2H8x5rbYF79aAkpi5UTqumfSQaDnXJuphLmFTrB75AV57Rc6Ya2",
  "key6": "4jWE6Nvze5BJiVVJskZb7D4iMBTHsjDtfGL37WFvAYXY6AiSggiA9i36yZ421EM8PUC4Fz41FyX8zBWYtV57Mz8L",
  "key7": "4vidhqmumyn1rXXKyu6SDRbLGcfpDDhLkG5UxYSETvCKzUUPN6kZiHV8boTNMLrVLyef9PLJnkuEooR95nw7BxKa",
  "key8": "USHuYeFFWsM2Twwkv1VuGJWyG2NgLL6V4oWLfhVAjtkqmtZrQFnu3GnhmK2eox81yFGhCi94SPpv4ezJCxu64Yy",
  "key9": "2dLVeKrTiTHPQ7YUyGkrCjjGCn53EfrkmHcEgrGekiovY82nBR78NvtbyF5N4rNotARngHd9WqLP658jjckxvXDf",
  "key10": "3PAnzhwSZDzFmd5kCytZqhXj8bxk9h5HL3azPxGA6bgX2sFHTuUUUgaPpZVXrbw3fKRG5rZmN79Un7HWiPKPwKta",
  "key11": "2Wp6g4tN1dKnLhfacnFqmZr6SoMWMnpX5zUjw9yJuVnEYYvLmQHVy7ajnbp9bSWKuEBvTyiw34s395jGA4hVgp5",
  "key12": "4sHAAuxYY6tkXq9CUjK1F2y619ZyLwabxsrU5zcpdK7rLfS2DGx2TLLprqSSvJo6zyhpAYx3cRkLCY1svAF1piRL",
  "key13": "4ZENi1ieVktJS5zQyqYXZVjfoLgN3ku69b7vU6kaBZ9fRJbFbaNuYrLU7dWYQTahumS55fqoV6qrfoMjQqj5cThX",
  "key14": "26jwaZnCxqViB5E3mWjtJ2ixdoxxmC15nUMdzzmUWvMjoSAqo3Ad5ngjU3ZHpY3t9nySZRPc2n3VconTRyMbys5c",
  "key15": "5v25oLe2qbHWpak6HnMmQRuv8VccswuhzdJ14rT5tJrbTQroKnUXE7KiDTmhQhEVporAdFDKqCaMLBifV7XXY2eo",
  "key16": "4DmZHTjrr9vCLWnACJFbXkWANTMGmmik31CNJqfQapTwSkuYD9Q78C8e7KzoAz2fEkH9oVvaAJhNgXAQsT57Bsug",
  "key17": "5cZ8GyUFmHqXYy2xw1bc18FogFNJucgYidJehrjTroEEPh8uWH6sZUHk86AaF81fiWxnXQnwvjZMX2QFMT4vyW7C",
  "key18": "2Pr7cS2RWmkDcFuCDmAJZ1VacLNNyN1vLoHuQRSKNR66aHkray8eafesQ4cRgpLxBEULZ8hJhLSh1PasoLwfQa3e",
  "key19": "22tbzcb4uXkyxupscFa1EkJhA9vBwBhBELT3Zx4M9EtC7hb1KLzM4d6R3jPR1eh3F5qaknt1Hh4n1pfwPpFddYUU",
  "key20": "4Az5HAD4U3ifm6YsZTDuSSs9ZXHcebHEebrgkKSoVdXkYRgzuLsVij5Dm89S9JpND5vZBw1s4htMbhuph2WHWHCY",
  "key21": "2iSrBcLFLRsgx63ykJzXDo2FJRqwRkhi5d52s6jqa9pb6mu7PDvRaqcWEapS7ikxvWYeUd8bpvAn2AwK62rwHKEc",
  "key22": "4rdcEBPnzdLyeNj54JCPBg9xiifComnKZ9CeyJfifRujVGGBdbkdrzQdTUHTXBcVPiUBPLfZBncaG8KKvJKnPSPQ",
  "key23": "4kFNiQiWKeGmS8dgDAotvgbLMbnphTM9SQMX6HsYSKeV2YLwcsYeP3AeBn3u7Xaekm2cKRjCWFBB817HvrA7oS77",
  "key24": "2HZhgq2xpyQxdnhnDezmWgMMq67uwdVP3KjUriuTN8KvNavXcwfroxe411mvSv42ZksERG46z7ZnJxpTT8XwYdqA",
  "key25": "3Fz6jGWkUbKQp9oP8e2wXQ3EpiN27yGXZnAXszUjUPCrZr7H2CrRKjqR7rKefZxnz5CiJ8HtuUeLeTyXFuT5Yrb3",
  "key26": "2V9TfixMim7pSBC5sLkX8SKS9W8bV9eK5qepGLCDNRdNtCfWcTZQQ5GvG6ni1mRsmbKUknAEZY3mYdEAVs3QLMfN",
  "key27": "2ErkvBzEmW8szby6hHEUvA3wLB8Dzyjz16TgnxpkUS9Ttt3P8hdDmMwUfZGo9LHgYS8ugzLPXVx4vxeHUhZDi2Jo",
  "key28": "RoHYJuHWznsEUTNatuEeZbWns5VZZsp5E5gR6PVDqXL2FVDBHGDLp5r4Hz3g94bNp3HW62Agb7o7Kx7ArUQWvWz",
  "key29": "37tZ9s5jKCi2vjRPCveNoup6zEZYbN7Fu2NBahxQuS1hz7nqVHJvsxQTQwRm3996b1QPPMnzigUwhADXP27Cwkn5",
  "key30": "eRxvt3hypyCh9bSPxHzkGgb68ueUCavPgv8ttELPhgDBPEdfuPRjAdPbsfEDNaxZ9RPmLSQyipyvGChG7mmQNJm",
  "key31": "FF1BEwkUTL1Nuw4YVPbKC2KJ2BJRPbdPtL2iwMeuk1KaE58EXR5iqxJPStniPhwDJm1KVzp2ZCw3QtGzbC5AMRJ",
  "key32": "3ypvUzKPpjfYtvYdMkXik3MHiKdLexGbBE7cG6tgXWLrjmUmrosF9VzBaRnPMAWyus2y7H1QBZYVm8WuLA2GaTRe",
  "key33": "ZVEivTYP28sgf5ScseG6EyokVuu84YS73nd2A65CQYkx2oi8ySWho3XVZMniEdf2bTqx1gGVAqwwNMYZhozVwvj",
  "key34": "4qoHRiWcQkZ5Ao6uRdCwwoFwVtoi3qqiqD9SA3NHvketijQzqfTKntqbq3AA8S2ag7iHXsPYom4KMcNHqE3DdgBL",
  "key35": "5co97CYAJ2nj3f2bjNKErqhKTQRzxx7c3JSykN3EM8RMU9nNSfBk2F63BiqU2dexn3KtdQW4PhroxDfNhM6Xh3Y7",
  "key36": "xx872n2bcTgKoY4SQzLyLTPLWj5NtBmGGAXiEsXAAAZNEeB46Xb4ktctQKjcbzi4jePwaXkyfg6oPLve95x2rHk",
  "key37": "22MKXkmXuPbQbeKqtzT72X5Et6RnSH9hzR1oa3bbCdZUtNVg3U9FRg1CRpw2ci4ELCMGHRnFdg62yaAXsGxA41qR",
  "key38": "2A8wBGRGMRX88xQgmrN6NkKVs36fADjkSoCENvJJ8NMmDwwEHFV7tQwcSaUxT9hBeMxwWXZxYdNefcemoV8LACms",
  "key39": "GgMYZwUydPqJX7KCbZd85XnpEq5VFm4k9sRmnFUb3hBtDTQaaZ9dLW7ZjvKSESwLndz8QWRUYNRpjE3Yy58JoD8",
  "key40": "2KYQXCQzn2tJfdyGd6LWgVBDesyeVN29zVE5oLvxA8utgs2sTbePeUVpEAPPA2WxYECmPRMxBGG1ozk8LhbaqbKj",
  "key41": "3S3Z3vfmq2tzDAK7B454CFP7mDKm9VSUxQAXfMwXjSH9p1HUJpyE8r6bJ5S8B4FsJgdeiUDTUpnLA54NtQkfx7rJ"
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
