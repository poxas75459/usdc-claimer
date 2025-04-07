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
    "2JfGCcPhRCAkeZX9Yytz5CG9EniSbdUsXet5JdkvsgMninhVYtQy3RDsxBgzc7FTv8FZDzMZRXRX28nhXv1vjZPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kn4XVoUEgFaAjjmTtVUV4KozeU9Q66TBQuUx8chXX7PG4v6puEJK1Ep3Vd2zVP9i4noVNtnRXzZHB5ikT1cmddo",
  "key1": "5QMjDn6MnHzEZV6tU4Sf7jvhHoqMxQXFQvmU8Wdr4DpPD3fHVbvJRkocrgKmxwteiDhX56AChx3VPof3M3m5Cthe",
  "key2": "3Wzs2eBniwgPyMsVkAfstm56KfWYEBvwRZ1jYNLxY4hbWChQnkdc8ZGMidB8fnku61hkNignCCSHCNESWAvTY4bJ",
  "key3": "4zwPf4CeMuCdcud9yad22HA8aCecEjC8b49gjZS4JP8NVafWnUfazganYrosiuhDYqeGmGA41Wg6E4zbQUj6NJPV",
  "key4": "3ZYzTzFQEaBdQZrGNKqmPN5DMfA1dQ7u8NxNMASUSKMbhbUCBpKCYU69CcffdoYxyTrKzVnkbunAnpRwgaRnDNw9",
  "key5": "4NzZNKBiTGUz6PgkymgoTT8d3PZEeQosjEnZmXEmCTSGFiH2mQokq9xhMCwgBDPrnMzzmwA7WRJxDqC1LrRZVe8o",
  "key6": "5DcBwLB6TDzjD3SVYWnbMij4QbA9E56fmCVFW3i6NL2EihALjKPHa5CuXTXgvQktbVN74bu3TzuXWYMQ9TTCXQLf",
  "key7": "36fjLo9n57KH3SChvEAmanErPS7rnzxVycroMSHghXkLLn5pLAd715cyi4evz7H9CGjjVZ43A5ycKJEsJjgooU9F",
  "key8": "rRZE6bRCN7P29SvDtBQUjE7EtJuMaU46UgEmk3Xxw5hmg8TfbqZW7wYx8FHduTBpSTxhNWWoermJAdkLJ1CAtuj",
  "key9": "PRUwfPfkUmjXeZd67TUpZNqQ38oVfndoVLqBVEZXypXa1NNCt37nWiZLMrkmBmB2FWrEuSimFc5Y9GhuTmXKVxk",
  "key10": "2id8WP1si5HENLj5wRzanYstv4pLkXWvzFFj5K6X1bWnJkxtuQa6xcDu2gbnf7YwipqC9QZAHs6dRUQMTFqcP42h",
  "key11": "dWuLaXyTzy3TBYLycBZAhXVtqrJ4YiRjVAyK5tpYu1LuTHBh9DxyAvTGjSCy1F5wmKZqB3izkxsKEyjEVcjhn3p",
  "key12": "48XxNFF45JWsBgNXBLRrUTLKDYNjS8Vg8z1E8PiB3MKRgYNkjeKsYnx2BvBZbMCLJ2P4yWMgavPxPENJUiidYFhx",
  "key13": "22jsT1Hn7dVJGzA2VPNAfn8jcHbxBjxsz8nifeXka7NSTYGmdsXt7zNspkM9Jk2pt8DyW5xBvybUrL18VVFGA1No",
  "key14": "3aT5Rn36qattEEWmJyKRYyeJyPjaQVKrcYiqc7bSZvSCLEK5WJ43iMF6peat3QY1f1BTXTtpa8AmGayo4qjkEqo5",
  "key15": "2g5wsm8CAa5FDjwRec8UrqRQ2LzBwCkDgxhT4fnZvAMsRfDpWM12mue88zMQ3MCJND2kz4eFaCh9NFfVvbriDcXK",
  "key16": "2LT24Z9RenaifeiiUvjXm9vobFg4u5FGhscRgZRhcmJPy31RsQ5Jq5zFC5EMnt4Zfd8V9udXjpF3iGJuU4YeqPdg",
  "key17": "BaGoBCbCgs2AzSL1x7TgYU8FirCzyYnWed37mbDYUWfkM9Fp7KNs9m4N6EzyYxKopVH6e5e39c3Pjm4mPHdT8pp",
  "key18": "61PQ21RgGJwXUGBM8VGpSWx79GRSE4z1pEqcSaemvCKQprC9tebZtk7Cb4P4ioLcjQdZ9UqJMbkq9a972hsECPUN",
  "key19": "3KErPVQyTR3wE8HbAQKyPerC7dMJSHkr1tYQ8BBHZgi6kHERy6BBrZAecTuYyVQuTg51qPFxKfkbf2f9xWNztcNW",
  "key20": "5j3uVGxw1TbhihW7hWy3yAsRRLNWA6HAvMFPYVEqwvo8vAaYmd5R23kvjMVQHaEGQLKdUPdHE6fZyfhxqQ8mjwrZ",
  "key21": "3J4x8R7LaLPs1uwvjPajAD2z122pAoGyVgRQbFwJB1BA9pQZx6qpVJdcmd1baA2zfpvoZAiPrwGnZ6LvSTnuKBvq",
  "key22": "41Hmz8svocbLBWQbo5BuM5gEzaZPTyLEoTaciR83gm1sDWPDwirusL85JYkXr1s6EvLoqitSXM72pVy9jqWv4MY7",
  "key23": "5DQfeFn7Ah2nXq9RjqjNk2FYQXRppHMy78CJuVCDwUHvZREiRQYwnt1EuZxYFwhi3UFgtFL7ijALTrMzKs8F5cHA",
  "key24": "4zCiHquPX6suLy7cyWfhz6MkkZ2isMdKjdAwN85Bt1KjjCWxxJ5HsHJ28s6CN9S8eFDVevUEWVzawwoxszXAgsGU",
  "key25": "4whrKxTvUao2FmF5HikrezSFi1yiNVUKGQPQC6Ug8i5GqCAXSpHXj7aUNHmmk8vKVaugxchjgzHqbMgN2NuLgx7j",
  "key26": "jgzWcGTQ8LkXsMsQZEnhu3SZ1sbGvuchvh9qnMs8z8xmYevTSGw3ki7f1VfRCxk2mGFbUVPxGkoCfxAYU2oj9uf",
  "key27": "3y8NirQMMG2U27npPApkgmsEgyo5m4uLACV382JQrkyfgbv4hbTNhZjFwm3gZdv8oEMocxgg1RKcDs3h3pvYW1CQ",
  "key28": "3V4zvFW2xasoEwajVU8jTpbN4ixJdtdykDz4rTwzfgKrYNho6iKo2paMZPgbkZxuz8owy54H3YcQr1VW1bQZeLG5",
  "key29": "5quR9wQMYSRM2VcLsjZKx8nNRVC57Sd6WMh3LNcPG9iv9HrksktGnXwjstvBgCFvwCDGzouavccPNAi4fq4T98rC",
  "key30": "973SNMp5gosJKUiz5qvuPHEL4gtxwyvLuuRyUCd7QnFNKjtMCa1D88Mm6y1Vtpyw8vwsQFmXn1XbD8nPbaEFYuZ",
  "key31": "kRH5MzSU9p98hUSvbz748tZ1KxPKEN2M6RqQFcmj8M5jCWeFAe4xCX9rNQV3ipvok1EMkY9XBCoy2FBQsjJAEP7",
  "key32": "4UFgYQyTuGPrLuhozYxLuT6p5G4ZBSzzPdgQVKRBetr2ATtgqhxMetkU56w1X1XFF3EAeKc21Pp7XRprG71BNUfm",
  "key33": "rvVFoFUvQuqaiJqj8BFeGnAtWd8LRRsrGdcC4XWSXXJbYR4yyHL9rifE88RvayoXsUFAEruG2icUgVt81e9SeZe",
  "key34": "qS7v388jYSZvoopchWwutbEtF4XtrESsu759cqTUE4gqzAS4Z5Jp19UeZFfebKXVq9n5nkDEGsmCv3fRFMZ7ZMZ",
  "key35": "2ZRFEeQ7tuuJWN7FK9iQiwGA93CEnzxeSfQx6asin6FL7pJ1sS4nVvfWUQDeTx2GqeFntyYi2HKBvW5zLSuerkDQ",
  "key36": "uHrxfHyTzwAVZK65RTuNdGauRW5GicaTreK2DsW4mRMfMzvRkysYHLDPnzbV3LEedyD7e2fKLnruyquNWzBkF3D",
  "key37": "2nzEM7tgncCKm95Lj5YaqjqW2Us3wYz45YzKyBYUEh8wXTssVa6X5cFPPaBUbejfh7bz2AwJdrAySyQsWTcYozXb",
  "key38": "2frESpcho3gmG76nsWvK5SeGyC53P4tyF4i3b5Hg2S9hfXeZjTJeLnQVKPwGnM6boD5AVW6xPckC3WtChHYU5QEN",
  "key39": "3NYyBxr4FKghpuxrmvpSx9JkHCo8TodVYB77EwksiMa9X1LDgUbmRygKGWuY8VTw1bbZmKe9tZErbPr9BwLdpe9S",
  "key40": "HtqDMw98QBVUygSsv5mkDsTyX3jFCnK3c835dudrhxJ5k4TyXtwSLjbg18JeA5JmL3qE7i54hCifPUTRp9SWyxb",
  "key41": "2p891oSM2yTTLVxeY9QEVrHQkA8SNDJvTUYJfYF22w87Bx4KewDfXaXGYT2c7jc5tHg7mUadebNdcaiifcxpKSL1",
  "key42": "3tuEB8eGECn7QbLTzByuZR1NS2agHXDBTov7e1DBNRAmn53wvMPd9p2x7L3vDEaimJtwmDnmLZ1DpjSDmKJnRVc4",
  "key43": "3e2EnhG29ETezCrxhd4MkKYPUhpm7kXCePh9fjsBurYLBixXhz1FFoFSxwNgk4cjHWU8XrWTy5ULuFHt1J9XXn13",
  "key44": "i9q3L3NU5CDZpuR59WuqtQsdVK6CLPV5b4QcYovjXBGPpk5T1qecXUojmDh22DTLNQeYipMauj1Ku1frHMhL3UV"
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
