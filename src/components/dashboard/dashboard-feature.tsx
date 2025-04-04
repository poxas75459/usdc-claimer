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
    "4S9VSk2LXfzDnkLPSFezEq3yLsurcjgqBjhgTE1zKdAwQgaxta6Bziq5JBW7LQWc8CbF19KhfYJhvb9PkVteUajY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NipKJNBZyLNN2MhuTg9V1Q2DMwJfVeusWYi6Chhk8Hpd2jZW7xtiuSEZ4z2CKAZ8EcyVhDgtmuUMSYxB5eYDESf",
  "key1": "3znutnBcGiWqqnmHavkc88ZAbLS3f2pWvbShcv8ZT9gz8CC3RAAWbhpDd9pyM776NcLLD2njmj56uBfNAFcsA5cV",
  "key2": "2ZZyAmDo9tKSDmbWiQkSVQdABzy91vaacsD1vZibVriK2W7oJgv3v3zCJ64spMV7tCMzkLVgqvjo2ZXGKePR9hVY",
  "key3": "2hoPU6fjcMt4knZyPeiEKsoU4EZpsuNBft185QGmbn7z2oem34FTbxG5KY7mUZFmPXRvZ8fs4zWWsraHpw5pMrrf",
  "key4": "2r8wx7bGTEfNpuXm8JsqPbTumTJ2LaQwPko9Jq7cAnC6uPTVFfjVN5WbLB1twqRUJSa74pzRVXxu1DGv3WcM8vF9",
  "key5": "31V4VgFHD771871rmRcJR5AF1Cw9Z2g9p5zNAAtbGtJZ6zbmFhhxmPUowQPn68W53BS6BTmRuFwQcdFsuQHxU4V2",
  "key6": "3pLWvYVvJpvKwQRRHBySFSy9s6TKPCEWDXZdVTWXQ7zUsaZhPLH1JdjJdMUk9YWEC2MoWfxiZgH8cvTnQF2YJevH",
  "key7": "4Bv1v2zvgDVQ2L3miNeLkSSToXoanuvhKeq8DkWjt2XzezPpGbMzZJ8LTzd7Yk7JdL152BPQPNim64mWTt33n4ES",
  "key8": "4WxnPUUhakfzTKAPeBd4Xm8ootU6uydf6gDnTXm8er5CwNJBFaJdHUckZRDKyinxzfM6cDJiujWqmZy5RTpagUJc",
  "key9": "3Eo6aqWWtJeL7FABgX4TrZxCLjmJm1X7Tjjb3Go2UJDy2MTL4dhdqTXVLDv7HochaGdgXDSCxHyWj4We9dR28wNc",
  "key10": "1295ENgMbbaCESQp4RS1eoKyQ6TyExJvZfme5TboXZmashVgmSxTgck3gF91rjqWRMqUf4r5b8rNkWteKDjkhmuZ",
  "key11": "4f7HR38TDSrbVg7UqGXZn9jo7dyMDBgjTmtwmDamhziPVY9WizR5UJSRsNS1VhqPM8Anm7GaNvQ38jerEe6S9saP",
  "key12": "HDNm47rGnhcx1D52LyZdFkKhqpTfjYgXCTmHQX7sHenDpWV7MdpZ7Cdrtg1FJ2FSHvwZdMcLhMTXiHnw6tBwS8v",
  "key13": "2RFoac4A81xNdshLUnUDSGgwv9KG5WJCdvtfUwu1qmDVX6GT87ZgYzucxQj2HJp77Z6Y7E13kdj3TDKVaf8Cg3Dy",
  "key14": "46xKCe3PVrPX7w8RLdSLsxDQXhhd6zm1WaCZCNWW3oc6wnuwiL5Gig2d4DL4QBRduZwhAWcgRDprchswU6Up2vuH",
  "key15": "28mRummpy4RbPRrRBExgHfusBhc7sdiJWpEA1rQ4JhLhdr6fdNraLz25nwRvYrxm1NLYRv3czoZsnexDUb6Axeon",
  "key16": "4nWyism6zxWW75U7wtoD6mw6p5BEr5jpCuW2YnZZQHYhh9q8SCdTsYZ1UC9ZpSxZKTCx1apUFvK5QWGHpd5uVwPf",
  "key17": "5US4ZvjHUvbhYBciibzNtDpeD1wfudhMyYXpFshxD8thbYLo3YPDmoTrNtPNrD2YgsT5GzwnfNni3ciiHvgcVGhf",
  "key18": "5N4BmQ7LQKy7k1pnQqL28q41PVnRaaXh6JvHhe8jpJeCKSeRrM67xi8nqwMy3ckvjtqdtx4RScLj2v3JPYGK9iE3",
  "key19": "5kKNG8SaWxNaxBMNtKYJHumgeXmZnq4xiieMeedVA9P1oLmz4txYGaKMpG4LUzviZpyp2nPP1UvnDec2PoRvj2Xd",
  "key20": "2pXjug9gSfcwRrDVMijs95VvQKqjLneEzYjHhMzoaD5dtLjQ1Uo4pm2xLwoadUryY8VRRiW4K2PDKBf6Y1QuXwyr",
  "key21": "2NyP26gdtkKos8ksR8SmTmx7bocqVXjESQR6R5P9DwYnBYuDjHb2msx1sYr1xbFdwNBpAkveaPEB2NMGE99HcEeB",
  "key22": "5YMuBApdWcQEyQiaU42SNenmovnYxupx2VUksNva3LsZfiywz4yweJgBjY2Ys7w1wee1NLUV1MC44aJowyWjN5L2",
  "key23": "2uFAsCMFkT4fS95aX8qduZPN2ap53M8AtY5jRi9gpX3UWZ31xv8RM7xn8hHJZ3RZdNHegmzuH9n4X8r2TxBk6gGQ",
  "key24": "659ZgeF7DzyoTYhSKFLHcVWULpPyms3B46LJ85MdqpTRaBjiHni7T5fFSdymRWuoYzysa3PpdAFzYux55tXtBSoi",
  "key25": "5cKNMD4g7geT2Y5xoKNtaCuzNhbphTcRfWZ2ZbrDAELinq7v7nKgwEibSid3iQcU4zzQsg2VWFsMAeZuKV7ms4iV",
  "key26": "3ou8LCoU5YBjQKbEnaRYGdyD2dPduouaxwJcJWnEJeYWwFo4gvZBk2Xwoon6DJUZmu81dqE8WcCzqFRrZzFGGpDz",
  "key27": "g5MLDMwDo5tkCZg2r4PtWugivK3vHZwBgBceYAtHbXCd6PXyRyJzPCGnP5BtCjGxzb9YiNGmqy86kb5eWhMg6fN",
  "key28": "a4guXAv3Hwnk5vWpHVmaLq1F1aBbiYabjVnBvqDs527EJpP1366WAnVVyR4VDjD5sLVVbb4pyieXNi61KQLnmat",
  "key29": "4HfqMDg8qCvr3Gi7R3NVdMgzMmWYjTTgKS57tiyAbh33KwtR2UvpAch7339YSdaqDeUgCDbxRiG7vBRecjYSkLZY",
  "key30": "2ssADkc99SDwH1jyaU9kyXQYT9uYLyoA7mbVAwEPn64PaFV8XswCGJrg1d17A84GURwJWFShkaz4zTtfwWz9bCRg",
  "key31": "2itCEFxpZPF9s2psusV6HTxojC71Rp8hyxQxuUbZuxGSK9Y21oRQ6wC2GTMGRAR5WevTCiHLCw9KtZRxeJVPTDcu",
  "key32": "3NUPWJh33jAjNEgzgDa2suAdfJMGwiyCPrQGbnnGd1e2yQ1Gy9YV5kUXVFZetzuQtiMSHxF5ZosHougeWCPKrKyh",
  "key33": "4cJ3TiXcKBVy7X3yQ7knN2JdRgdJdX2NrdB7Uc2TKr3n7AsQdUWHJAKmsVPHwG7QeGqycehpyeh32mmPb8bjANW",
  "key34": "22TAra72ka72QrVz73Kp5HdrEpXmXMaPDz3QzNQivrVgUzew3V6i5NMupDwf81gshgN6tKG3EpTjXEsYHfbFKfMJ",
  "key35": "2ji6m8yQj2d7LbL3vnq9izB7iGUURXdDY6Juwev9aXPMJUmw1VjjTMaNRLRtBjjSgT1ULgxM7uAeNWynoaFTmRWR",
  "key36": "CiMCdkrJs7FCVtGczB94E9pCXT7UhCk9BMVG31zdV2mMGKfwvXdmsYeYMa7CQYxvKdtvvqsaxXJyDfL16Z3JcXx",
  "key37": "GetWesUfKbYFPiRy2M48Bkrq2e947iagz9NZAoBkA3eJpMoKmnUAFzqGFKGpPmBT6JdcGUjECaPcauiXcDkccZo",
  "key38": "4gmBeow8t8kTmW2HuSJGB547wHhCfFasMZKRBYrZBWxSvhBcYsh7GnPAzodTPXWfXakAfisvZfrPGvmtEFZ7roMS",
  "key39": "odm8aqazi5QzFYuxFZMXxTKNWGTaWxX253yGJMTSBqfMaTJEXjDFFSdNAsMi9Gv9evKBxW53p1RNcWf5Fh2oWFP",
  "key40": "ywSBXaJsYrxk9VMEFxtX5WCfPncLmAq9eoRu1rNWEjyUDbQMXFwPNxdTfaAq9vRCqgkhypWVqgtZuQhF5xQo992",
  "key41": "2trB22JgFx2zXvxJskW3BH5BQs6AKzPyPnkruCVQ62ubvAVG3nZYokBoNy43ZcdMU62wFxhRSC8WzUGQGcsBC69q",
  "key42": "5t5hLmYdoYPbUBkHRHupes6P6zZo89V9GU58KDrL9EfkdnnqfaMJsBhhjMtZHJwxS1enxkA7x6K43DrT2q33u9Ub",
  "key43": "5Bw821rsVp7RJBCPoW97mRppEF9nB997BSvNgUeqPMUpSirPRDuCtLVAYGmBMfgC1ywiZvtWufgjWBCFWjCUFfup",
  "key44": "3itmBCJsSPxXFpUqYQ3WAHfB5xGFofFrrb37Qtg1e2tEfspRYtikgNkKocFKfb1Ruvo11joXDdQ5TPuTgVXaS88x",
  "key45": "5s5PnSc6hKieEtZwnhHwQniTUFPpzCDPeaJp3eSsSZ88cnGmzm5JCpzGhF6TEvmQZeD7kefk6jimqE7MkuPD1vKf",
  "key46": "4DQxy65Ur5wC5gMeE4K1AdLo5zosnxsEkKKvwfqRdMqvGyECL3iKbQkboC3jJaGeAVRUJi5Hqgci1kH2FgyEYvuy",
  "key47": "SfxwVeqDiCFW44yF59rE6QfAoLtHGfEPdVyxai3rDjhcEJUSw38xV1u9o4G9D3LTVKM7fpgsaFWJBus6Wq2YMoK",
  "key48": "61pEjMmdVjnEoQ4d13CSgo6xukJFQRgdkrwR3seAmjJ43YntQdNv7wQWCFkYQTusohosMfkib39ybZkD1azhx7Z1",
  "key49": "4KB5LbSfTTwh9i5Q4xZEJSSQA1YvUdWNQmzaqdhWwEGxYpgEkgXLK2S7xzHCGLi1KMYPjwUwVuntFjvZmUczuWTB"
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
