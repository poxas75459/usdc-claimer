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
    "2LxLyFiAXneBvKY7bQUGt8PDTHM9rTtHJYTHKhsYTdFzmTzkNqTv8qHXA456Hvc115W919suYEiDZ9w1gQmK95Cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zj9hoUDhpruNRjaVzp9mJsaYyxpgCDDRhc5ab3UFPFRT6uVQkTskcbEW58MgBMQAMVYYZqwyvr5EEJSFGMVspkN",
  "key1": "2ncZ2aRudrVEgphFyLVAE5qwaLtjP7Go3vmsYwmWS5JNM5wUNBTnraiSGyf6FxmRXwqVo3Liho2zm8tdpRHCqrjx",
  "key2": "4R41tx14ap1tD4v6Zg3PLaVDtXXmV7THur6xNv68ubkC7p7buXB5JbXw6Xc7JmN89R4qxkeaSFX7SXdBgpCjWo5x",
  "key3": "3L5ArGZeTmx5rsK4yetympgU8fgEcrkAHwu8xBcT9QEnMkkckLCfVcxu9F77cuAnUvGdWq9WW3G329PXyzZUtzhW",
  "key4": "53SbnyfXurYCCrHQtCg8XYd86bbAHC5R2NUeY43SMC5x7xwTM2vhZFnza4WJVH3ctZijo8jbaFH5T3Bz33uJWXEc",
  "key5": "2nyUjGBjbbtQtTrBQCpA5fvWBvVn3WGg42iH5fZHdjjrLKdqPzXNKga39TGDqQpfSfa3eXxTRcyB4WSy4NbTZJ8s",
  "key6": "3iwWY144D5KaYfiWGANoKgP5E9p1T9pQoruafdvadCnQNowG6TKwWTcqSsQqoAz7bMx9QtvJzBLwk5ptLaYg9YDQ",
  "key7": "qY7yPcmdwmfWvaZ9Kpgp3n4WHJWRnAuPzTkR7usPJYweSe4vF513mAiGEB5vsj6euXV7DmUf5PX95rm2JWKFWBK",
  "key8": "ZQ1drXXgWN7g8PgAQTF1KSa8HgRuG4sHtu5BXm7wVYMupA2Cxj8cooxA4wJJoNrJiPzYcKRTQUosQWFESZDbDp8",
  "key9": "ViX4g3yay1j4PNGuxECefD2cH7McHq3oqPd4xYxbmMi6Rcz1RphZ5mvyBR77aCkRsypPhwZZHqjyVZUi3CSYJu1",
  "key10": "4BteGpbWYficK5Jz8wmhspo9NFDbxVHCmbA46jwsjDrvTF8sHE6JGJwNYVDzcgJXZVSy2jHHXT4FrPBNERtsoaXX",
  "key11": "2fDJs4aaRHNZiKkiGc6132avJuiuoCGEztWwXsjnSPV9cBpZP3GvtRxHu2VviKXCMtVrG8EwMVeBTtir11ih3Pt",
  "key12": "feMao5zq1CAopCUp9SDArBx3aLehbEv1Q9cU4nkt2sPs1JscRNFeiQJH2vwriqjfPiMo494kNtwDe8nkPq3GQnW",
  "key13": "4RVD6QTjCP3QUPCbFxtdRqxEUJJygZDiGE7FocYyqeup4UEnMPtN61Fw7kZri9JivYVW3oVWXJ89LsWRo1aMpaKp",
  "key14": "4nq3bdp8pUpuAUMLWHa3awV6J2jrFGtAequ2GzzhLyq1vYH6VwQmc2jEz2C4ohnQP3naZ8dUjQF4LLWsBDUcA9mc",
  "key15": "5WTmUt9kvR3ERk1gcpXya9Xp3Z7zBBNuLtUBepDavZEE9NaHHrvGX8FaZNGQRRsRmPVm8FBRMCtNPddGQ8r71DcX",
  "key16": "3gD9iosqARYNy82edMDhECKZ9VVKT1wQKNRBkUQYL4QNFsmAtLrrpjWb7KVNi3HqdvgR7zG2nJYVhTrBwdJxYBTo",
  "key17": "4nYBgpFL5RTEpfNpzkPboqMMFSF8qrWFG8Gj1gNehJdZGsdZg9jk896HrBP85gUhQ3xLvJwhuKbTR4KpyMZ9kFNs",
  "key18": "3T71Wj1jpLDiYKmX5cqFPRwmYvTe5hBnqef8s89TA89fsDGja6cfG1Gjko9cjTWk7hX7XV97pJ27zZ73Z2ZHawRz",
  "key19": "Tm9WUJ2anqs79afCCyxY6owJ2H7WnaFN3VZKVepPumS7BstjhKXwLExjcaSiuChaU4Ch2Mg3mrtSYYNk2jGLuqh",
  "key20": "381vWBK3tCaWqtHGtHyEoW1opwFQeCcLBpypzDYYnDeVniZ6b6QXyePA46mej8kwsUMZL8NYhwyaWH28hUukH4Dr",
  "key21": "4XMVd6mrEs1TjZNg4hw5e5bZshR62dsYuYUNBZ7KiDWnHiG7hGepQUdS4Rat4nZWo9zdBWQpcwjMG9RrqGbyUQjs",
  "key22": "3CFdPRFZTiFHVjK5C8XZAP8qBackW5uokG2mJJLMYUcoMrNTheB5JaPLrC9g6fqqWWkddxUx9EyuKETxmHuQfhP4",
  "key23": "41m9qDd1MvqZK4H67dwCcvGWpHsiK7acYYda8whXn6dy8iKoVmE2BbBYTLSLcqXC6urFMQdWwnfpvE1LSNV9GBNV",
  "key24": "Fis5mYdYMippYH7wVawpBkGTjKBLAC8cpxq2Fgps4ZYHCDBKhqaAJZwPMsvuEnCDmy5uwfrgrivdnmHLxLVjeHo",
  "key25": "q5dikzWW1BpFMVFDfeaNZVgWU3URzfv297DQVb72nPcqvvo9ea73HqDWNz2a34X9D1D6ZX9JihdcW4ofnDsHC3f",
  "key26": "3iBcpDCoeRUv2VvCRPRT8tFWnbahBaSXB91vBcwKcBJ2b7DPRZytdtaAFwrokX5WG1XivKybKZHcqPSXJ6sydEPr",
  "key27": "2SALvveBGmtJk25GhMATa5UHCTXiRtkRwom5MVz4utJjioE86euQdm9MC9KmjAJtaKmtPwgbGK5Yhkxzqw9TpwQX",
  "key28": "ubciNpbnwjD8HDkyb7k5ikQczQFfMYHR4GwAfLPdX5Sxb2sC7vRUDKpBKBNFyFknuVWEBXjkrVcNgXFTjn8qBUH",
  "key29": "4wp7j74YGMT6p3vhDVun8p8Emms54aCWZks27fYQDA6HeVLBGWvV1LaWbkQCA7W7KTKLpwi7cu5nPg5je7dUjTMv",
  "key30": "39kQtuuAyhXqGJ1yxRsoNfv1rkq8AQcvci1Ed6cdZRSuA2hVh1iAx634FthpmKGk3HAMbrgnKRRUfHa4FN345F29",
  "key31": "e3Fbs3RVPDjWzt42xJGTpN4FSVY6dEFntX2QJparWo9kjZ3Br9Lsob6BefQ6rPDYAtK1FvpQDWhvK6EwYaSubBx",
  "key32": "3AE8nHxn8V81BFDahWGa5B3rr3qTUy9KnEPFwdoTBUDU8kGjt57EfVZ2TPk2ASrPZaJj1BEqfMPYprEWCX8C3vpp",
  "key33": "3QuDmG2TbHVKVfHeHSu4Yam6giGWcNyQzhBD8v9Grx4VMrmy6KCCZFBLb819McPHQc3fXHYs1dL7sfuL9vmZ13DT",
  "key34": "51GXwHGcGSdji1fmZbZa2sLp4n3eUvZjTYfcDHEoVDWLM7XZrP2Eqvf1tmcKCJXa4kDKWPWA88Q4pAdPY3YrpHGx",
  "key35": "mfWWwXgA11VrYnwHAEeNuysN9bdmpoFtc9LsHqUn9vKXPxxsWmtiqh7govjxUAbPhAgait84JAeQdWsxY5mbzpC",
  "key36": "3ZVEATj1BVYqX2dQKuZLor3z99Yj8wTBDv7TNrXZkHKbMP4TdEeDJqsoLoAxzN7bCfwZ7HbzKeoqKFYS8PyyJFsj",
  "key37": "3HPTviGQfutBM37uR3w8CDoDE3umzhVeMZZskvrtUzLVLKLJimNEWyLGQwM6gYPe8jde4bow2Rb6ngLamrN5uqQr",
  "key38": "3YERuVsYSW9w6DxuY7zteBxDRkXXXnQvQN5CbYZFPcrnQPGkGkYu9SW1oNTb6wZqbzVd1aCA4VtgryZ36VE4EaEj",
  "key39": "2nrQRSqaULCYjNv2Cqh3soxe2EJ8nn3snMgsWFgx1qZ2q75JtaHUuJZnDPS7EvanzuJsGXCzfsvyhX5FEE8FL89x",
  "key40": "4DFHgHVXFme2mcibcQQGAYq174hSZx9qcy7bGMdg2Xbq53YQwPf6mKu1AjtzJ6Er8YeKptzMCyuADyxmEJDBCh8g",
  "key41": "4WnPDW6WxVg8r8gNNR4yBXV9FCzkhFEsPTtN2tSoaBG8ngLsTDpYjNqwvDnfHvMAp5BDp1rZo9r6Gae2Y3Wq8p9F",
  "key42": "3GnQrvkzHzKV3D6VBsDR9sU8FHFBbcsWnvW4FtRJxgPpJfW6hijWiSVqfoRiLQAZYvak5R8Rgk7t5FH1HoojXsz5",
  "key43": "f9UJNZUmDT4GWsPofFkcyQLuzQhzz1nSsbLr8qVVe593mnqd4EgMW97Ewjpt679F7YChDQbZtwEcjBAHecFjwez",
  "key44": "23NV8LhiqJqmYc4shsATGTpfpyBWXuMSaGFbFjybLaXtzYeoW2BKoDgwXCagmi6jbsTofvRzcu2gsdysjB3vqDi6",
  "key45": "4keWEnGJAakq7fCCNxXjyvD1jtm1uYh7bTmUccS76YaNEhMqirAbDhTaM8CAxvCD8KwLdF1NSdL5SHjtggm4fobo",
  "key46": "Sa3SanYTpWjGbtjmekERyrWew5DQXXVVcxBByS3UQVhAVmr7vxXSJoxCPshuy7KFK6b2qgXdHQDUQkTYgfz1a59",
  "key47": "3Nh7XVbx3Pbh35yYEsdoZseDELzhai6fXMC2cTmLJvUKRnnMqGnJVQg1oFaNt49nowmu8pJB4KTbiiMYe5YTkLXX",
  "key48": "3wZRcar778ztNdGiApUmmFAN2HzsfXXSoY8FEwKzMAsFM129sDjBgYiTtUkpizfpVzspc4r5UJzRpMiTh1gJQEBc",
  "key49": "WrbpDRsmxtBpAqYeGMdy1EmRNmYhBLxAE7jK5QeK1xbPFrUo9jptcdwfvLcbyo9tLCEtyr5u9fwRs1w8AnKfzsW"
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
