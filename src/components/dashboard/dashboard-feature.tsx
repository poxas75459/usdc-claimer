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
    "3sSgK3qoeT5ThpqiMdu1ygnWAb4t8aiYdEA4JntowazCiiRTHi469sM81Lh9Jmez1LxQttnpkU16MPP6kJDirFUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZGjJqwgwHE1Px3c9P5mZLevvr737TRuNKi7jAQv3BsiZ7kvBxGKDyNZchR68gUfR7B8KGZUNtBgCsG9HVrBstk",
  "key1": "2zXzrbXXGbmxBbX7BMp6vTW5L3kXa7ApTW7NRQFe86B71zBbzbNHKdp6ai49mYkFyzbBa2FxkbKRXVsbndd9aiWk",
  "key2": "4Nsg2a4AZpdkn64k8g6Wm7BR7ire11tGFkoGjqNFiGFdrXGC5CSg7hUUmDDKQx4JxWgygr7ybVWQC6KNS9f8Dfay",
  "key3": "Bp1pEwMCi4snxHrxNA3TsrrR5tezX2YENpzTEFcGtsuFzgRHRPwCMsUcYQooy4z1PqLUYCtYqkEwjXWjo5NNV77",
  "key4": "Ev13Rk6XQ3sffMoBGrd164q5pPv1o46rExyRBJQYjdigJequojjZKZeaHDt1wQBVXeeVkizgZY9jDufBhKx6AYY",
  "key5": "2e1qK5joLE2sFCTGVPwV3rYrqMzGuzxp2bArFAdzFykPY8L9sZVARumFzyvyUJLNreb1Eaihjc4xrot96Xny7XRa",
  "key6": "2mSqdbXeRU1LCcmRpn27zw2z9wcrY44rRG7qN5QFyrUbMXNVKTKA4Kfe1DZ9f5jjtCjECw9wAhHBy97uDsr6dKpe",
  "key7": "2y87JvAzDmQNKyQH5a8j3izQUpZZabwX8VVijYJbzfw9sngHqJNthYkk9kFopTv4P3XuxeQFCcGeB7ZcM4SmA9Cd",
  "key8": "3eL4nAHe18EcNX1Ryh3XZGYV5CJSp6oicF6LSQJ7oVKgEpTjXF5uiSqaA99k4fou3mJw7LuaUAyzMPXuXmbcqVcS",
  "key9": "3JT6EHMXLChGuZD3xVSFkLUjuHpCKwQZckLCbnHURvJUNHg3oJz1rkPyPNy36xkM1ryteNcqKG8n8GgYQZghE5qj",
  "key10": "2uUgv7nHPYVSdWucxsLzFLPuHbrgDMRXVFpq5KrXogZWEXv5phLwRiktMm9h9XrMVgzir1ztLbiesRSdqf5wgbQg",
  "key11": "3JJCoy4GTgSmuMsQotPzFrRqavLMVxsEF1sc8tVoaM3PEtWfiTsaHiqWGsbQNTD7JPNPdfsiMjcVjmX7V2GKKXb2",
  "key12": "o1RVWiU1jRSaWEp4ToPe2QniXyxkeM2cXXaHAvRTn73dm8ux6jNjg8pZgdKJijT2fA7zZr51qUMrVHYsLBeWbBT",
  "key13": "3ynbNtyE2JZokQVTUnucrZDtG8k8NKnCo88cdnqaDPk2Zzpo95QfLSTSGoFtDkS5BPBt7r5EpzwdatrGH2s59wCX",
  "key14": "JxMFqFG9ouxoHtDwGq2Bh8F1xUD9LaELQXzrig5mGFF5kJKcwuuT4banH1QanPpu62o7atY6t6fRVD9Kge93vms",
  "key15": "5Qxjj2kc5etysw2eQ9ChUWqFG3fioMRfoWaN5MZXBYAHmuDH5wWJFirF4WjzgmF8E94yhneiEDmEPvJnsFf5981y",
  "key16": "2fiyqFLEXfBAoEQPHZVxXfVhaFxDvY1TRLM6jDfArCxJdR9tLoxzRYGyQuYov34u8xqMozUPLvbR4uEZmzR9TDRY",
  "key17": "QWpUCKSE9udMm2DF1JM38778rcE4St3ucx5neV2WA9wTXQhZh8xohiTgg1DhvfF7XqoCLbU6RdaomunRAr8EFhD",
  "key18": "3t9VfnUXqmGeNZRWTScDBs94NAaJq6cAEV4EqYvEyeYKMknSWHLYG74MauvB9xKGCguGCTyGwU1EcsaTiL4ruNgz",
  "key19": "66hwkGy2BxjZaxeP4W1WWZ1po8KQk4vZMNM7emgBomRktmBfwq8TEmnb27PACyr3b7fySGV4wXksKjh4pTZRhih5",
  "key20": "5ARH8kDjsMtbDBW191a4sKrXgVHPJMnd3wLwathvmEzf4uY7cer1imgQpqX8Nro8y92qtt8ywApf4hrfXzANcikb",
  "key21": "4DnSLmLruyGU9MevCw7udngSgMKdjdU3fVHGxRMtmBT35ogP3g4x5adNNJtQhzRUAic1WxkNjQEWYdghXUNH1F8B",
  "key22": "2dCA41gcPBy6JF21TSYtbXdCEki3i6CBdtRp3ZEXVyFuKpFLHMiTLr41CbLk5T41QYdmCGLCdcPChfBSSkGbC2CX",
  "key23": "4ZxLxFMdqbD94hKfkyY2nfy2mrSEYgFFJHtggLJEUevNki8KcibXMwak3BW3xFfarQJPQDKxxYCJEq6dZpEKQGmn",
  "key24": "FgqMa2thc4CESwFFGH4BFjnkXdYy2gJJ4QhhsHaT5D1kMAAJfzDcxYbzvbh6trZw1eWczjnPPwcMKy2zCrpgFWt",
  "key25": "77ZAdhocZvuVsnBzPNgDDrbL8F3c97veNgeotNZHuw7eRhwJXXRjxgTg1tckMrfjSHhVyGj3xvM9isBrt34jLin",
  "key26": "DznUrP1vUhn2buckrz32ijry8Q3XZpmXjsGDfNF9F9Kuqonyh3wyFHnxLDo2SeFFQq214QX1QE7VznT971wEYJ2",
  "key27": "42k586oLxPdvdtTyVfLKx41y6JtMGUYk6kHGNpYoud2PXUWLThkDb4h2RTRKo4B8EhHGy63KGqkmbSEJFXrcKF4q",
  "key28": "5oapd6LZuehKUp2osHom4jYnCEwAjrQbQxTfYiPsdEBLsyEYuMpEUXJfW9VNX9Qp57dV2zvBSmFG1DacF1sVJnqB",
  "key29": "LRJwzhUp6weJj1ujKKNUxEYZ7EyPeWhSNggqr2Ms2pckp2NeHxvmKi9pWDBwsypNmecsoAzPX2VKgYELvbbKr1S",
  "key30": "3Z7t9tU41zK2kiskDGcCzSZc4yQg3CifQCx8NTLdGSuhREe99e7anreu75wzjuHn29AYnMQ9pAd3cFW9jfmJ2tda",
  "key31": "BCVY9YkFP83TRCA8AYGSQnwdCJsVVgwGRhLYz8DUpYZh77JYn2JQWxH8bxpiAZWhRRr7fM6LYRXcvSevt8q9fji",
  "key32": "2WZCuNrsbYWXc7Q3UG4kJTn99MYd2yGojej7Dwiecy6xJhbkT9CBbMn2CmZRxvJuXCdDBcZ1dAviaN2U88Y9xh5W",
  "key33": "mLoseT4ar7dMPJM2gyCTJftojatnvPdJmAqSiTLwnKdTjzQnfqhYSwsBxVeXPxoX9AEX5mR8iNFv2Lru5JCu4wB",
  "key34": "4PjZ3bkLQEof1NpTYARbP9Cf1bVcTcpW1NqbEVX94dFEjW6jZzDhaZhWxpLjqnmdkSCikoX8Yji52vDH7kGuqZ1F",
  "key35": "wmpSjQS2sy8756yXRVZQEqdHpJ15Twr8Az1NqqMFidKPgRTT6wjPrHd4yzc2B2r7wCLRXdXUezni92bH5Bz3A3Y",
  "key36": "2m85PkegGpSv2zXAD44TPVXpE95GwD1qysLoi8y6XYdTp3aUf9ipLHtjfbopquakH8ywVEtYkbdemz2zLVmhGhxz",
  "key37": "3Ki48N1XAr2qYqW7PctForUKkfqgBCdKyfcdf51xfTZLEFENzs6MKEb7oqXdjmzYaBBxoNf6XPAhVJbodAKq1Chh",
  "key38": "3hvUw6BEJgZuyQcTeppcMg4LuzoDarVbJv6ikN79xX2TFs6KsUYCDQTc7v1VXzNRfbwXcZEkF7M9TrxWhudbTP2R",
  "key39": "32N2SZ2SRetrM3FV1pvZEJHpu9PXQvJnxpNXEZWVp2N43ZH6eXMhSYvW4PL7gACSFxTeP3MJ1Sj13fmt7iGuumjV",
  "key40": "qFEWQiyf2VTssNwjWMeKYonX2mnUkJUp8aG2c17LZLzsUkCmQ2kPoFZLVbLjTY2GuwJFVLmcGVWK5fVTvpjMRk3",
  "key41": "61Nf3VCnFiDNfaEUBG91SwFZurZzFSQ8KWE5tnm84grSdp7pXMFKzXRHxL18iYjvJpdqmb7ViizVcjgZ6ATKAER2",
  "key42": "3wBYUsW3cYXP2f5D14u2Ub4ogRrDkJJfrS32RVkxBd1yjtesb1rfm93Y9mHEX2EyhH6jvTRjhvytoq4RdeMJkb4d",
  "key43": "55TggFGRtevP5bPwhy83tZ79wwsXfjk5X9GcaNDbbXEfEep6PdQ1oYHsHoBJB9KknRPmWcFn6VxVdNFhmxo8cKsR",
  "key44": "5jthGR6qv4Q4orsUEbifRqZLRKtZNPLMTajo2e3nb74J7Rm7gEnhHyuN9EsqSicY2yKm1LjCb23RGiDH5ud1jc3p"
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
