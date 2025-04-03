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
    "55KEssbcXSfSKqUSsGqQhuWkXU7aGupc7feJ71ek18yMWyXYfxA6ma87UHBhNaS1yGwf7ydRiRWYGoHZtaTJ4G92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcR6GqFcc6R4UMYkcxoEtnuLLaVz2PphLgaWquWQonNLrL7sTFkVNofRwsGxbGJPNPpEnKNhFufux7F382t3ujP",
  "key1": "4tcJjA6WN4XbPAVsF453LDMyLhFmjMrsNN2YNpGf8pjVatsYHAEHRzQZjmqGPzc4JCgcap8VwumFoXVTamqR4qGm",
  "key2": "4vtwZBJ68umeAs4oyrdPWHFFRskJzrDqLEWChUV3PoPVTfF9fG4HpsD6nYhmx7uhtXiWc7KRyZDsAdgcFZwSCWCq",
  "key3": "5zv4hxCrsbr4gmL8c851xMQg73htbyeto54oe9ZqQBU5gdecEsGi9H5NuAueuqeTmKYpGLFh2RGvXGUD733MS9KD",
  "key4": "2KRcd2Qfv1StvpyE4S9x9rVWcLHwu7YMpf5oUXsdGum3opyCCdszTbQfeMuwE4jNTPTCjD24qdxRNwpn3McWDZy1",
  "key5": "4gt1niA3JjeT8J4bsEKG2MsjM3GbYd53CxMr6ZHdxpMn7SRtgS2fJv9oT1fHXbm724jvXQe1nsBZgJqAA4mrbxcV",
  "key6": "4H5UVViMNCU1eL6eBa8PHkrGhuGgDHwWKJPDL3Yfg8Bk6n9K9WFQWi8fLr9XZrN3Fy4bjnYVVLxZNJXTYZViEy4Q",
  "key7": "2DvMfnaYJaQw98ZQtrLBhB8XKUpEoSmDx91RLKTEm5iDwXxHdMeXhpC97fFGq26ToExbm1t1e857jxKsbRWpmiz3",
  "key8": "5CAsHC8ybzS5NJzeBJeAgz8DF5T6pQYhWb3KTpdp3GH8khfrTaaowvoYKuCemJi5qAF3519i3XEVr4EYcMKfkAD3",
  "key9": "5VRaScjCqAxzsAZpDzkhN2eLTpcAMe4AGQbYGgyj8cJ7miaw6kboAArxNkuZsEWNdhzrm9v1aePYXwKmdfTyYyuP",
  "key10": "2xBhkeu31CGGyZirT5q15FEgRJ7kcp9oooKYVSA23FyvMb8wRdznNzmyUUVSsmu1nCRmz1HgqWy8nyhUdi9X31hN",
  "key11": "gSwg999cgpfdn5u2CcrF1kWTojLy14JZCLEnfpD9gY263Dw4LQMHWxUSfWDH2n4HuatftENLFKm557W3KQbQaSE",
  "key12": "2bX4FZqwTnYhWDf4SRWsyTYMFSfm8Bkc89b1vAxiYvha6uDoVtD4Q19aWBwMoRJApCtCXoA779cVNUgUwwT4RKEH",
  "key13": "2bxrhuq26WZdfq5CC74fCNbi5GXhwBVHEXXgALYhfFWEqG4dS7wvJezDUY8rEmVajWnp38YuACXcwYtDKcR6EBJn",
  "key14": "4EsCVtu38Jmum1FgbEkK2qYr5TiQNdvPxU7PsBiHhCJRKDuFp8d6gEPee9jBb94smCpJW4NqhFS34zc5D7XbE73X",
  "key15": "4ZnZx7Tm6VZ8kLQeuJQs1b2adq4K46ErNj7BpooNtFCvoD3i9SgpF7VZFuzd1MwRyFXRKgdMwK2nWKJrmwjCidke",
  "key16": "y1WrgdLgCmknyKoWXndFfv5fAcUHjfT8spEKnanq2gmi1A1oPHsNAi8icprRx965YwAB8HejYSiou9c9yC6Bzrx",
  "key17": "2DbLpcTudxo6SDrMNphm7yoWWWX13G8i6Q3DisaxBxooAEqzF6D5V7rBmnQqtQme8fvYUPe49tKDJujyhTETixpW",
  "key18": "2BECi6dF2JpGauFZrEBXzMWnUurLh4sqghW7ZUaJ4aAeeb3Vs6CmjC2KnL2xTNxBEbHy478maZWw6Sd5vGLfyU67",
  "key19": "635iAQgBqG5wMmiyeJieJ4t2pEaCJ7Jyim5TtK4JPx2N8LZ2q5HoP95DeVP76p9N5LWF2MQ5qQZRSvAM3KUodbks",
  "key20": "3f2kEwNfZDtAgk6d7JUukFaS2XkEG2y3JMKmT1CsyhvG8z5VYHb26Bidp8U5bKMk1mKWRVkT1HWjtE5Pm4MTrddq",
  "key21": "4Y72x8D5ph5jaG9kvfKerYy6VcF4jcgKk4LjuNW5AU63AkXcrmBKWQQBA7FL6sbiCi4n2RdbReEdL82yazf7SoDE",
  "key22": "jzU2ft6RLnhNEaWAQL7WonJP8TSr3TAxZBULNqgVVsxwVYGj5dFkjYKHAYz6C5sn6tBuDi2VUKBZqC8DsRKYGUU",
  "key23": "XRK4HUMkEXY35ViCrKzu9A9EX7sRsE1muh4WkBZEPvspqGnnfxgFskXZYmDJ1f5xyLGtKDBzuCfeek9kwujSeAa",
  "key24": "3uj6tVQW8CrEkqcMNWpEE1NuRf7732tbDHqWpNakRKexY29hmVbG4DtLi2T1hqbgFoPUnCmHtzDqG2oRX69iqJ9k",
  "key25": "xfwBAcNGmvarCtoTsWVdQrcutdYBF72J4CoUk71iy3tbdnKBS2iGWu9R48ka8eU8fL9W1yVAXy5fPk4U98LuUP2",
  "key26": "5QbHZpQgVQKHKFgNow6bJWTBrbUqHbMQ6SZ97zCn3SsqqQFubAeRMo6fFvZ6VH1Y77CAwCvYdQLE3uE5X81QL4uh",
  "key27": "5ASRuA7WaZz3pHaUenrAewvgkekXNUJ4k9My8c8psJWZmx7MG2hi8Tpn1PQZneuzh24oczu7w1iYTYMhHszueG8F",
  "key28": "3SwK6pWMXfuyuWKJi7TXFKGenbXb2DAUuNZe7m5CViFjMcbNKo5uVCp8Rj2r8z8nqGmMSFz5fc9kaQ5VJrAiQ4Vn",
  "key29": "3ruPMEZbVksirWoZPrLgUgPR8MGq84Lc5cgdWC5WpNZBSvADu3bgMwrpuBjnWSsh7KpuPquUEoEhYSD65Nc3cdc6",
  "key30": "JPCDpg29hdADKFmpbSngn852qvVMT9w1xRqqJ1WwWm7nAVE8mfaV4chDDmb9ZmYqCYN5HomRU32scnHBFX799uZ",
  "key31": "4dVB96KKCzXEtWVXGrq4dTSnVrZf95HUbSRSxpFGgmTJ8YPTjnxs7ytiUrjEauw2C4QSDgbEYDXCTA3b5s1QffJn",
  "key32": "59twzkHjyRLUvXqXcfzXky4wRKCrLq1i5gzouWm8Fi4wnRzKHZEm4Xugfgai1sUHvEf9hchikWNUF66MVQsMEsFA",
  "key33": "2odEri9Ct8StnDGRV1udgJH1feQdYkAiDE84Yzdqev4pC2HhJLvryeNnSugP2FdM8HUaRXq7VKibNgSdtj7BMgDh",
  "key34": "22mtbm84wjMkWJQo9UYRVEAT55P3SqeHu4pLpPckAne7tbnmfia7QVM9aemtro9rDLd9QAutxBqkab17LFS8Byih",
  "key35": "4cShEmBs6rXLrnyEth98Vy9DUsq7SGTHKdLLFpRyCQZ4kUfwKNhyjLqWooLT9h8ELrVNpw7qwWimQiTv2kocetz",
  "key36": "4h8o9AoRX3T8JCvgTEX7y29KfySg5XeQoRjZeu8WhSEN9hEHcBsxvZeGGWKsKA3DU64bSJejiaThhWaKmpZ1ECaQ",
  "key37": "3VnndH3Ega2eeQ9fDrSYJwdRxSmghzG9FxrYuPQ3SqRvvCEGKhUyN7aEbXsEdZ6TaAntF6CNfi1mhdSYPeBV8L23",
  "key38": "tKShqJJmjhms8QnERDxF7Wx5ayZptqbsUhvGtSxCi97Piigz1wZYuQ2eosnHhsnnHnAFpnmCD7Vckw9NBcsdu7s",
  "key39": "4WiMMcC9N9ubnwqqGcagoMfHirEw2GDXc7wa3dtKCingRR64aLsFW4aBUvvnhScfskLfpcs1dUEHcRPza394qkKv",
  "key40": "3m9sCSyC2iHYqsYmFfFbwZgF16RaF5ydu5pp3kcSkvVVjAxh9qtUNCTSUmwfRmgSxdrX5suA2S5bToXM7bTSBbW8",
  "key41": "3ECKV7LP7yTPaCpy8L55ToePo4miRfcg4YFyhZjqgffGtTzV4dyXYrG1CJthD2kdX7Jx9oKw52RfLbboLfwJSUYp",
  "key42": "4GNX7EYpedTaUG4Rv9CrUceXLHzu5JoZm3drnW5M9v3eagCyR58icUjZriAuwkifng9pe77LzRnNe3F854iwct5e",
  "key43": "2tuPSmPgALqqUFyhZm2VHmBDhiEtRxvEn215s6CC49WjzBEioL3x6PebgHDYFJUUXJ39LCWxJUw4zRiCHkX8unEh",
  "key44": "5Sfwv2CcfWkcBveADDNigp9uRxwUpfcqutvB87BQGtm8mvASyxcPww4JqGGBFBmriDr3q6efcSPoxQa5bVHmThfX"
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
