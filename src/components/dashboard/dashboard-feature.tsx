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
    "zgmB2TP3hLbybzqv6jHpaUD5xizbLN8355zAXLofv88zbceox4Ytv2W9RTUqJGtwEyTgWviJyESkjZMvok4ufou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3coN3ceJZyM2SHrFgpcoaLp7HVKopUvqhNihGU7sLB6n6LrcVnHcboJdbv2taQjcvLtVNb7ndXkF1X8yuBhXHcTc",
  "key1": "5bpa15JXPYUZzj2iS4iSQtWytKN15TkF8CnqLyMo6mSvAjL2fMewbzVZwAFDMEUhWmfNTYnuWtxrxe32K8cw7dxN",
  "key2": "5cUbxtPhb25AskpWHsA8Se26sGmd6r6NFRzBnNDJaJJ6XRCdCGj6tnNtwCJgvm5jhUpd8ST7moxbLw9jbWiboqQv",
  "key3": "43z87fEH4tCNpbe6L9fofV4M7Wj5q23PWgk5K69pSrf3atcVA982VQNHCF8f42fZvGVM9ML9Cyo5YhvQDxs4L9f3",
  "key4": "63uFztJeerrF9u1Rrapsfcr2BkHWea36sroEiTi8vDAJVZF1VeZtqZugXw8m6NXxTMrR5g7XGautrbkrWBBDi84r",
  "key5": "2eyTcZQU7ax1LFYWB4jwWmMWsTJTFiBccuAcZyPtaM6S7AJThX7hBg2suH7fd6bpzCjE5dAS5bS9htCMmZFfxJAz",
  "key6": "kVaNjUNj7MpM4a8f67F4iMCjkqmoif2sJtapvJmT3Ur2DjHyESLbEPUTL5HYiYu6pVf46PDhNRSoy3aipzYffL7",
  "key7": "tig3eJEUFJqC5D56w728US9toTcdKbu1Qux6VNxSoyZSiPfHfYfeytKLsMJZgkj7xoiUxjSeG4tRBekNiu8woZx",
  "key8": "3cY64vUwpLy952e3WPX8mBzgrWDnCCk6uHWp8TGFxdQdWhoNpypn3GqtiqrgQxeVQqabwC6c8JLEyEZnV7MF1dUe",
  "key9": "4aDiXTf36EMDtzqjiKSC58LjozCybo1FrtxKKGq3zu383dfrPFMqUZR4Fj7jzv3th2TQ6SyqF7tA4WRFqQEXx9bW",
  "key10": "3r6juUUECLhyVjpkUVFxGVzC2mAZHBKXkaYUVrBTP4ovT4XcNaTjXs4K7nn1F3CFkJRLG5VqKRSCu3b1SNTJz1K5",
  "key11": "k12xTiSjMeQwwhk4Lcs4xmjTXWTHEw3UKFg2eWSAbsvzviAAF1XVWNHD7Kbnu97Qp4nQegkqCs8XVzAHGJKsefx",
  "key12": "65HU3fDjTjzXCjoxqxf6fQ14yRQhVEfNtprBhGp8oayMVa29WKN7VNz7GiuqoG74ZqbmPW4gtLSV5WRdindonYGb",
  "key13": "fZXY2hdUuuFcRPq2xCtg9GBWHrmFRnqjQgPfvxrrVhiPvV5yLL6AR3TrEgmmYNa8r9t4XMnX4fxSncki7P8HzFB",
  "key14": "63qYqGjSG8mLPYRLy7krcApPbxCvzvnsyBBzMAs5PiSFEBff84AVe2wBoorfV8mUjrv4CHay6ZtJ6ydRt2yiYc4S",
  "key15": "5kUCzpxEbe49aEkbDG7baNWpxiqvCJYGDfEqRVyz7PFubybGT95KpPHH9P5gf33etyttbRe2tJSQKnQ5rEpEHdVT",
  "key16": "3W3fFVpM9TRBawjc25X5V99bLVDgE1rHyoCivGw2Es84MzmfCyCxd6px2J3vQFL6Vsgzq5kNyTMiPhN5RZVgUbGX",
  "key17": "3GmQ9ikcz9pa23L69uPFNTzF28kfX2serpaqCW7k5cw8Nwj8bZmYYzXdupMNw9Gj55tzQ4KHWzTS5QAQCkNqh8HN",
  "key18": "2X1maiNZU7AZ59UGWSzi18Bt5dFeUUjJFQxEdpRy9esvmVGRNn886Bf5yBS86KobDG78QomjkeKFUmUeWXcnTfZJ",
  "key19": "3xk1ANB5vAkNWrCKp4j8WVFUbnQWRSeBhr66o2UvZZrAq6GMUhHnu8ZkB7YdgadcE9xtVsvtaZParzzL2CGLvKfZ",
  "key20": "2XSvV1c23Y3SMA6fBqyYUUWvk6oJnrymwbUKKxt1qSRvepw3VwUozVDgHbMkC4CVbD93GHcj6kkNHD7AoKqkoAoZ",
  "key21": "4mKaRWPtnLpKVPG9xqs9UBZ4xRP9PtuVxg5ZAkZbgH2zKWRLytUgbbQ83xVpxwmQqgxVit1aon7tsEBbSPN2wjgj",
  "key22": "43vu2BHSsoJphpmSx6nVhUtV4oRJvgfsTXVQvxzeXGgCmDT3NGdaoZ86ourYhDomXephyHAkbKx2K7tzhitKoG8A",
  "key23": "5kYUdYt54X6mtkVxGo2BsLtoTYB7ZSkTXzF42avs5EQmnLWyRZ3GsSqFXBWVMyMx95oam8o31an2tAWMkyFKc4Zp",
  "key24": "2VH9433PLXmFnLM9HpcWSwBDt99Xkruof2N3VLXqQGS3dCY5L5X3v1W5wNkDtNAchExwsLwmmW2ogcNAGJem9fDH",
  "key25": "regyboEZamSKGjKc9Bvo4raSek41QjPue3QgR6bddZaBBsXS8DXJx6GxXAJU8aNcjC1FSXaRSuUhpTZjNPZrBMJ",
  "key26": "28Br7uw2vmUVL3mowqgyKkXR5gC6hVbBQgn6RbDzygssbQUgDirnQDrXg9BUnbtcVoUXCWqHS2g5aewHS8Q2y61Z",
  "key27": "5hqd4ydoGNcYA73LS6v84T7wc5mbGj2zAbCXEQdu9FWZZJsxHyw85GzjRyEtQm29k8XD2xGQfcmtvH8KpKxLW2UD",
  "key28": "2H7Uv7wmiKTRnkTM1ybzq1hkrG5vdAnWfKBvJE1Fvc56mCu7LgPyHfeEojQSxrjtopKYASWN2foZq82dEeeSrFQR",
  "key29": "op1VLM76wxb4EPiBXB9KQ4otKkEW7SEyinvaiZo1pGKi6pQd1y2pk5NX36ghyUMNeQoyEao49sDaYUeGZES7tNN",
  "key30": "43X281yKoxu4LBQUHCQ5mQaf9SZMicVbhy6YZ9e7nxMtCDMyfgx2JPejJHMNdXbNHZ1vNdiS2tWr14vbfC3SnyTb",
  "key31": "3Y5zr859yZUC2wMKaN6SbJrFTwDCxSTdFDkBi6ymq31DwoZHr8tkfkAQE5F8ofbL7LVC2gdiR6hhMF1yTPx3hasi",
  "key32": "4bmFC2tnNeLYCpYimKALPDSGwNjgPdVcbu3rdJeNY14JiQTA7rUry6FAzsNqBpiQj7YpJYeLVcEKn2117aXN3aLb",
  "key33": "3BxRcpodnsoZP6zFymPG4v5hMN9utaM6jGzT5f2su9NjdA8rvqnEubzV7UTy4vHSMmSbdrshPXHFitN2kxRC1aq5",
  "key34": "2UB3FPEUygs6SgXu5YPbeQ9cLSrc42vnTkHkuA5WTEgRukjzjZujMRyWb8U9ZBjLR5kLH5Ks4qE5pnVCCBYXYTip",
  "key35": "429677tJHJsL8WzDD3sgQ5tgVKG98ZyK3gyTCXxFuKmiL3CLnteKPrhpCvbbVhbkzvgeyZHPEYsnbC5d6VJ2APKs",
  "key36": "atyr4Lvx7MpD1jAcPkuPcTxMWpwPxu6qDQpcoBAKfh4ZXfWNYYz7gZj75zK2obEuUbm9JmCdvn5sm6gzDxBLtGM",
  "key37": "5VFx3Fc5dFcrTmgzayzSiPXHiYzuozimgXULQNad9wfp5WbP8QSY6egf1BQmth8J5GDbCKjQSYygZoXxA4KVEq4W",
  "key38": "5pKztQ8DbMTnnZqrxfbyx86B9X6QUjp3RJq56MMfSvy6KDcjJEgBL7pC2hiEBtQRPyRpsdS98fRU6ToyvddKYXef",
  "key39": "37CvqpxPaMBYcFscQuCQutn4SzoEbcQER8sk4QskbKE5sVtnHmyAVrmfw3mGFsdJPz1QbPWjZGzmmiMQhURyVv45",
  "key40": "bggcJEAjNYwnZX48Jsbhw4RLcRGA8W7efA5UHv6aGoPih7ZgdZtw78eaxiLD9AzmnvD5n4pWHbuCNNgxts4ea4J",
  "key41": "3ipN2W7eNp4eQUMJDFwmjfjcrNcSvuaZso1DZqoXroAf1mGys8XLhEPsy4psk6YvdU6Duazc47Kf7a3Uu3qLp1SN",
  "key42": "4hSY8PiSchDb4uz3jixyYg433k4zrrnb2iUfr2c2DHPWXxgUJ3Sr884ZvruUGtz57h2YCH51d9iWngCLk4RtXS86",
  "key43": "47nAzjsEHaMduNPSKGEaJpEYGEadoXL7oWbqK1b7L8ApFgLdibFGvP3WEhCw4rVGU6QSQXFrZvcKFGjz4HYCMYKg",
  "key44": "4EnoRwKg6grk93rrsQ4MaGrXTG9PK5sWEiqrnjKm2AcCn72i2GuJg85m2AtKLDfkLPuw9GNWzy3y5M6xrZWshitV",
  "key45": "3udiFBKNQf8w7HYF7K47G7zgWx6AvZnUo6jmZWDKjacnv39P6qBxvnyuSBwGrdbj6TDThf16XVGJreKt22BPZpUj",
  "key46": "2ykzm7FYfMumyvAatK47BYfWGWhHbHTCK6PuLmpy1g8S2ZyioBpPLHqxKLd6qyW7Ckf75vyuhcXRPbygyugNzEsV"
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
