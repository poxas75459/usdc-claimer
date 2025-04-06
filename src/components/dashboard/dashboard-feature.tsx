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
    "67H73NDRqCLLZ7eenzQFXfABfLAZfqrRedSFoe1vDCron4k7enSrK5caCtqECkWq8pGq9hgHj6hvvpgXyzfBs8gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGirse3meDXGeojZXB4Xqa9hRMdh7jxyiDSuPwrNYcnTB9TrAT5tdW9FUjBeJcZq6P4mN2mhcJVy8xV35i12TPw",
  "key1": "48wkEBGcNUngmgARS32HUMAztJ5RKVurx1i2rf12ip8jjX9sCMvfXcDdk3ShfNNs3ShKRdo55VKCxiG2fr2vs9wA",
  "key2": "3pyJNNYyJJpR5xc6KfQE2mUSYTraKaJAZDgQVqs4iQZATqthXPoz4CHzvzXQpUgV7GVSvz9xgSEdi6f9DQNpsaob",
  "key3": "io2NBsZWFyQjKRuMaUVhKHVgmRyJ3t6VcYAbZi6uqeBhwnsmM3SyLgogZ2Q2ZAnHbAwr3qP1TzjWByp5QMs4dEJ",
  "key4": "4RDsbEeKaWFoJupX1f4o45CoS34qMyrh1kBb5fsZxnXphyeSwxrpAe5bi5FCpMcokN3pfp21GcTDNs8jwavTz2g3",
  "key5": "41ZsTWFeULStr4cEjcsCXu98VJj4qvVm3q6EWySQ6YR5YD2HjG66DsyrKhLthNx6Q5dEMy6UTarUtvQGQ35FGHVN",
  "key6": "2C3YLig3cn7HcRa3snyWk5sBB1BhLzEkuGSGsWq8yDuyFskbNE9XzJU6deu7yJ2DZDbq1rBghraQ9XrMSJMnskRE",
  "key7": "4Pocs6mHKmLoTyXvQ1xGbLQdPPkvVJeiJb6YFxaQzbxYEkdz3h762rwejEhznFFkBfua2f6zE1YHE9H6gELGsdvW",
  "key8": "NkU8EBN4jukrKMuaH4wuMsfzjQ7aEVJMeKYg5X9Uyeg2wHgBcGRi1QFrE7qcTkrmwS16vyHmHyMtP8p2ZTtyATh",
  "key9": "3LQjJtU4GNhqZznKkCcHEZsmenJ84A4QugRnmjuoBCYF9N7627GtYTazfxYwQdUeogYMLjM2jdtZsorL7WnHQgxt",
  "key10": "4ZdYmhZHXwxh7EK5jMgSDJjATAkbBmfg1iPXDUQ6ZTcjKVGV4zDFq8wm3LrQ5LoXEq8EhykRKcJYceLMepPGnTrG",
  "key11": "5omrLNumtrUSyFb9Rr2aYNcSUsQyzxwwvPKn99bumXdZH8dmPVm59QyyBjgCN73dSeZx7WjCHTnzvyhX8uKWiwAp",
  "key12": "56un3SX6SWJCekFersyxLDQWCK43sNCJYeYXBWrpkEoQfwKxuYneizLxY6YrUh1yqTWNPjrGoACNcGbfLenJcrW8",
  "key13": "2DiJ2Ru2Ukf87ZArz7FEoNKrc2tWXnHCja9Vkee5hqpQvB7KrK1awimoJwiRYfmwTppH1vcUv746LivsketvqkDU",
  "key14": "rMBVq7GgfuCweEXAnQMnv9EYM5AGh9YCx5WuspeNHeipFDSs7TJ954eeTU8osGixmgPTDwtx63whQ2zsS8URCUp",
  "key15": "5KXnY1crTjv95VSyhAzdidR1ECrQ75h8cbf2BMoKoYKd8PdxBwErcjeF59kSwCrksu3jYG5k4SQ77xZV5FKptgMw",
  "key16": "5duv4beq3zvLczvfmEBjBGZ68SNUx7JpWNYFDi51qQcXfsHKsbd29iLFcsLjuwzXuUMiAC7ey35qzue7JFLs3YxD",
  "key17": "3TDikwEMGyoDzpJ1k4VUyzSXoaA2E912zbegfDtDuV6gJvjwYmzymAouP5VaT7q2Wa5N45EwirgCaTPmTMpZQ5Pb",
  "key18": "6RvG94tcxdgvLY4tQznD3f9mgUCQgMS9xk2AUEvouZ5RL4cgDNEZfwTToGK6JhgpRYyMKPzYG4UsS4JM5Trqyok",
  "key19": "24BcTohyQFeQa1vu4F16N48ECVw9mFv3eepsFFT6Zfww9TVcWqpyygPv8czbbtbGCPtmHTiJzA4mrvS6KvSELQSb",
  "key20": "5EQvWuAxjBFWyApbeMTPsjpN4jBVQZryVX1iXvR5ayehPxnXW8skSK7YeZeztXRvjEMsAuB9k87nors5Tiqrmn4q",
  "key21": "2v5mC14ggXG9VXdgkG95xswUtmoFWaia2kvuB4gip1xEnewA5i7RHxVqKj4DZUkJ4Taye5M7nqhve5pm6y2emSmG",
  "key22": "2XKyziwa8rhip4QUoACBcPd59tUhvT9tT6ELo8HNeWtQZFPCb7tanmXGo2brdxUxDbBCYTWzcBCSyVcAxre1MZqL",
  "key23": "2uPKM2XhGvPG4Yn7fLedTFEdmeGjtug3rtCS8TeFNZUaBf9GgMy4TKs5Xgh3hNpu4VYyXJUBovTd7eRHwrM6dpFo",
  "key24": "45WYZAPRSSmHeD1ChDqNde55Cm8cLzzFpK5FLAhxZC58xs5L7DNEaxjKT4xuP1cQoUbw62LfzPh6GbxB7VPMLmGT",
  "key25": "3J9Qf8A1NgiTZ57p7pLFjyXKsraa74SuK8PhVKvqvXFxok83jxc8mPqePzTmvSn5kf6haEsG7Ag1iFqMruXDsJpC",
  "key26": "4cXQvQsP4JnEwhpqrNgLCf9Tqr7MJCZvaC9TNtBEaZ6ZW9eBKEfHb7KsXoLXVUHLPs5LeFz694dHbx3H7nb12zAk",
  "key27": "28HxG6jooCmpxZM6x7YeELYkA1zVrUqifWpCBRD2oyBhQscnDxj9gGRButGc37K7hLzhxRy5wRDkRJBDFHdZZyis",
  "key28": "2uTbmiYV8wHBLuTHcPuzSszkJGiULgsfDraZmUke5GEz2f1ViusLa7UzRMZZ8BCGTWfCEzQZUhKeYtHBYa6jBxxd",
  "key29": "xaL7EHEPzpop7xLuhKn5ozYpgfu1oit3BiEv7fbupAHhSgeC6Eq6zoZt8ShWspuAGFVf5MsHy5w643xUk5v9xLG",
  "key30": "57Qk3Gi4p1owT8mSFdRxCxBqbfvgwy7HELd87R2L6Mj618BwCpohzxiHEkaSreSfCFjimxeXyDKP6q3Zpq1MH96m",
  "key31": "63nvsVPWEWHjWK92xZCC6ApdMe1KPkWZ2o8nirtn8DAfQtov4W5rUNHWBzR5m7tr7op7fYd1rSt84UPWgCNTbpTS",
  "key32": "657TocimjXKYR3BDvrCdDqVDbhZrwgkEFxLFTL7oHdPp811TfWi1BRwnrLpDbKpgBmeWCnwywGviTKwejJvAyRrH",
  "key33": "5w8tPQLchQsmjTTd64M27d76bV4eHPYaR1P1UsEzJZ5BZpZuE6BY39h5EDgSvpCdFLqQMWake9kLGU1H7pVoyzA8",
  "key34": "uUaJr3rjUwe4HMSQaudzVV9VRwVQj79Vmes945qzessxpaABtBFehJCrtGmJPCXEczCpqNpZiG8n7k7AYGieU46",
  "key35": "2HJLxjfmZd5Tvw8rvQ2278HXwif2ajXgu9H3Y8THvxx41QMCVwFD5rsHAu6RuVBLTSH9MM3Fp212bG6M9eQsv1uW",
  "key36": "3Ro3NaKfNJqETMUU6zogUf69uvY2fujghDvP1HRXKsRTuKhSMGj79usjzj7Ym98zhFWYLGz6T2qcvsR4LSsBZ6tx",
  "key37": "3KuZg3XcSPBMNzVuVAKHu4MfrmU2tyoK7w8fhNdu8rwFQi3yzzR8FqRakbsCxPb2kNfXQzFwzv6NgpEj13cxDdaN",
  "key38": "2trfS6h4SPB7d3z5bzm7L9VTX2qf8bmWzhQY4r4CUVzvzGnVQCYn5RewGmccqbcmdPXkKXZNYzqGzpS3tKXk8xxe",
  "key39": "122gq7Mpm9rS6LYnS3sTi2KA8QzYFVe85Nw289LRyhD3wFkqcXXUEXAox9p4PfDwkst1y5SVxY422GY43m4heQR3",
  "key40": "4M4q4rtjD9cADn3aEZu9RGZmztHPY6jVHxc2aGvgi1Y77xjYL2nW5wg3PVFVwzbxEJaL9YHQhQ48S87fuyimCXEg",
  "key41": "2UCio6e9s6cwxcjYvPTDAhTZEGoE9BtLebHp19krKwBYsVvaRYmFkpg2YuaRQDTt9WTDZJgTW2xooUwFJFDsiJsz",
  "key42": "4XVHzJFSWWyjqVRaRWYcw3WNtAE9hXzP8ZNPcXCHiPkwUK7PDQiWKr6CnYcNf6CehF2GdsayZU57SL425yjYJHVw",
  "key43": "4zGvaWEPwXvoTdR4DJhp5aGRaMizLA24vQ5gkwH4dbLctdYgGuJxRRx865dpPaMckHgiHrVZQUeeETnUkoBP9CFh",
  "key44": "48ixQCNezmPknDrtyDoPUGLVX6M6oFi3Y5KmmfBmz3dTS9xT1yHmEGXkyKZPqZpCNQMC6pjK82GntnJHzr6iJLhM",
  "key45": "4eRaZKKoepFBQyBRnoAryYD2kjjKgLMTPJZXP2h6EexiiRwn1JbTr6UMRym2BEKVksuYeAWSX4t3UN2tFu73Z7WK",
  "key46": "4CTNXDDPRJ3VHzApixvakh5U4KuuHZtitPhz2tSGdaAdNNioCag3c9LL4QkdpBMJPY4mfcHa63RJeFLasoAq417Z"
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
