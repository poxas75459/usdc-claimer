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
    "5tZNVU4YEKqAdJearnAkGHwqR1MjCU83FpdB5hMN9PR1GGkhBEujRBqZcSAZiwyVCebFV9QxAZiTmcqkTYhvG5Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9fxpSfbUWdBbGB7qymj1KBCxT3UWc9txhTatmrGpqm2Vwzh38FeRwx5QFYSUwQ2QcDrx5PydfJFwwoQ4UCAQAZ",
  "key1": "gxvcnzLbzyVrwDzhPTmXUkZ2QyA3boG9iwgh3rVMfktL6EbxHwuLkz87dwuHuKkjdNFuf7amvayESZNmyaqhskM",
  "key2": "2D5kCUiuf9xSSxGNGLGbLQrNfHd1AitSUxciSQ4RDZbmde3uv435cc1Tt3QdFhHPpGD2bsJJ9xQ2d29uvjVsCFr4",
  "key3": "5Cmco7XnHfiwyGbSwB89jASP2Z1zZL4RRmm9V3d6fMvrEkdZTAkFN5h91KJwpmFWuxK51m32PV2YkhDF35FaJ4V2",
  "key4": "4npqJHwtLt4kAQ3iNT9AEfEsDTvp8nBnnryv3sKHmaamiJwqQP5WsHVPcknaYLVuDNqPZdofLJ3vJMhPCu8NdVco",
  "key5": "2FTHErvzLyy2g1Jka7jup4xFxjcZkFLdLaoT9DF2En8hCKQdWnXX1KHMBoZUn7zfbAJdR5cijusUYYAGysMrfeFa",
  "key6": "4NbjAgPzgbuNQczncjELhFMXG9U5A5iGiwd6LB8jMpAXXodV3dLLNFCF6H1RCFaRud8WdwfKkELPBGaxnM6Ls2c6",
  "key7": "P9swCH4yZcovTPpEZezPtXWHKfKbRqq75K17VdgxKBCexnxTDs7RZx2uL4CyEDtq5Ptb4JrCCYdPk7GfzNd7J5S",
  "key8": "2yHzwDdfAzGtgdWfttxTMP8mgDj7vCHkbL1HgNL3mZRL9esxm38sxqPx2xxgjHWcPTZQoWnFojc8AGGveJKzKLSF",
  "key9": "4q1WScjGGxGebk9Z6su3VoFRqAgYEsdVqCCA3Uc2v3iH3y6sXz8Ga113UKE92ormqy4mSDiq4LpG5kYXn8gBVkZ6",
  "key10": "2ARohdS46nEVYJ8jHtMjsCYNhRcy8btRnGgs4dvN3dQT7Zx8fuPoTEijjApA8tHBBRSb58bQy3FbUDPW4PJJRk7C",
  "key11": "35FcaoCmpWMnE5G15SKPSdeK5vcNRzAy2mkzrXLvMm7brWFiKriQy8aqnZMdz8QVST6h7UtbvUZfFVFw7giRwbY6",
  "key12": "53hPrpYF1SHeTrgV1fpzbnWGRPuZfoVvp1BovmdGNKrfLjfZGzcPTt8abpYmvntgyhxDr4URA8NKtHdivnS4nLAo",
  "key13": "3iswhG47o4H9av4fBvhz39es2iQVnmofEMYLL7XDuApGdVKjWz3YN11GXxnzsDMjpwJRsF38WjAa421v1TsKaGfz",
  "key14": "2yVvvSDRLqvLUBfhzW8pqywxEpudSJ2zejq2PVaCQfEUCi1PE4ktAKdaMCsCKMB7Zyw75A8mqX6jrBKVxUY7Fm2B",
  "key15": "HboLEkYnm5bXzEoHWDZgdH9iLKwSu2ra6qYrVL6vsKGd3kJzs1j36vnNvXdH8uEZ7Rct5BDmEjjXFeXkMfsubKp",
  "key16": "2ksG3s9BN7bVzKyoBVTW7LLjwnTPMdoG7NbPA8GBGkBxLAC7KEnsmDnxvAzaEd6z96M8Cxo99Vx5nLicXS8Juyn3",
  "key17": "5dGRhWFcF1v8HMK8yME7ezJHrhEqRHxZkq7aK3ky9c9cBNVYoxQvgKKpgwUU6TGPUL526xacEi933FbLiJcZmq3p",
  "key18": "4gqDNrE61deH9on91TBxifutfjEKTFjshgRCSjQR1MLkpuGct4v8FMLvorUkj9UDH5R8n55t2zzktmC9tqtKyZ1c",
  "key19": "rfs4hgcmtkE3g5cx4Z7dNXStptS5h9WtcPALGyUTMo5phhDvgn9NNa952o3D1pBw6SkisPiKdxwNdU1YVfuoEZZ",
  "key20": "5N5SGHEp354Axct6UZjEmdEtaaZhkXugmkMVMro21exC2i26K37K39Jv2MhUnCWLRZg9J7AxTk3RmA9iwZxv7MDJ",
  "key21": "5wvQNXGiBALFnwQTm7HtN26p9pSfEo4D418UhVYtmqSVkNhgqCU5K66Hp6SdhV29D2wcrahqf81cYXXWUT4hFsyf",
  "key22": "3y8khc93txF3ypxdSDgcT9mnwVjhiK2Vn2UmzLqsd6oAJHHZ5pXD7Qx5iroBNiPJ6VkRxcdq9cUTiQrGtWzE27Di",
  "key23": "5ayv6oBsqY6H6mWkFZq6rwP6pJJfARgTqJEcfWNxmDNPNhhJN86hLZ46cp4XuBUDDT87UntHAYFT3fHKi5TSdJGz",
  "key24": "33ZYuheHLPKzAKA29ZYEgoBgmyrNxuDwa7iikcPynvCwUSdgExFTJJ2yKFtJjrYeKkji6TAsEMTDKvJ8csxkw9Sa",
  "key25": "42Z4vNmY5s7cuHNTUJzFSpsGb1j7BZrzUWVHjKDQwkWGEbrwKhkpwDJdWGcoWht7CNxuXPGCpgwrTqBvgX5Lp5XM",
  "key26": "379b13cMtZ3GDkXsi2nu5Cb2jLrL2aPhEPnEHqpZyPFQ8EicPU5JV4npvdKNJs1cdVSY3Y4Cagfo8jKrTcdydgyc",
  "key27": "4EkvzfdjPHnHVy3J1WD5eTmh5LHQe2stEbkYsqx8VYX5k84Fm6Cns3htXecxt8VSFE8qP8keAEiBELAULd8BRaCb",
  "key28": "u4XwAAFdsLeHfW52fv4YtviTULaUiDEs8iAkH3djGexUTpKwNw3dvV7SVp2nYuEDKrFdvTHHmPkM71QfasFnkU1",
  "key29": "5wPfHdADEavgStm9dpwQhxmHuLC92Qh4trX9ejnM9acP6DgHSqStVw7aaVwSykDXPUCWM2QJtrK7b8dSh47kCj8U",
  "key30": "5F4ynee3SLp2WweZFbozMAJY4ZEJ9SqtyUYH52fcnNV3cvCGim8sER2kNe2EJ7xH1Yo4xwtDnMdZ4R8dJUvCSXoi",
  "key31": "3gDsH7hFNzpJFZxJMspidESUJ9GeRmYzkAMhvSTcxECWdMfEZ6p6JHFCYcorFQe4rTcux34tTnzSHDj7hPagTjFJ",
  "key32": "3rJeza7QxGBAQWPPRwzShoF1qgWy2z1cgM1nuF82FU2xvPTLFztzDzYhSKhvzuYxYefaAuZPrC2TF7wkNipjPAaC",
  "key33": "22Atd7zJGFyrncDdQehNHJPCk6urfcW6iZgynQnPru3CSsLnhmkbw7sGcRn68X1J8Cq2qTjQebf3bmD7xKWoUySm",
  "key34": "4RitgjhbyWCdYZt7opjamEy1wDRnK2GkJJfUsBrm1MaqvxpPSPapEZky2VYyyvJnsRMHaHDdqaHQDS4BUiY4sC7Q",
  "key35": "4SQD2Rf4S6873ieYHLF2U26q29oypRY8mEtTwk6HwVXGRBRUBMi5jtsr3QN4W6wat2Z51hU9r9jPX8sSEBYec8yy",
  "key36": "4N815MYFBUUnYnSAqyZ9hpN87qpkqRXD7KrFykUMS1fdcxpfcD1uMgA1fmhshoM27EM6L7UHmN581AQmUFstfSgh",
  "key37": "3pFxyDuL62wkmAqvaAYcEfmCHQGRoErYVWr73M6Cjq1ZNaT9pUjJAbPoYSw38exoq4TeC6CRY1H7DBHYT8Pu3oXA",
  "key38": "3z93UCMVYnERBPMsjdT1JpGWCcBHGucQGjivRfKJRwd2HvEzFnJxg2faFADwMn9WkKtp1QKufr2qy9ZDaGhQwxh6",
  "key39": "oxC5JbjaZXK92bhDmb69nYygEKuuEAFDEEZaASWpJgHLarjgNu8Lg9bQo8ddhAmMBniyEyXfxKUqjyNJu2qp8of",
  "key40": "hC6LjKyTh6xjGNmarLpEMB8rSg1sCEXbncCXKSnNdfvxo91Euv2AoWmg2BoCcj8vw3ASCrPi7i4GCYPrBx63scU",
  "key41": "2mGNfqVpBfavyX96Qps9Ca9jW8JehCthVCo59rpwZHSPy3k9uzipfT7PP4cucefSTzfwLvi7ETXFH3VZUhYpGHzr",
  "key42": "vmZzLF1KxsmYqvuoNNzwihAx8b6knK8b4h51FM5T422kHwcL6cg715QeHN383rKUrQLYSbphyyGD99VzmSRaWUq",
  "key43": "5a7CXLFSzD6Ty4MgefNZG183SRf96HGuTjAGqJPKgsWy4uomccTeHqoVdyEmUve8rD53sXVJinJELJjpKXwK6shx",
  "key44": "3aUzN9YKr7QF8WuE4JqE7pTxSsV1rmFMXB865kYCgA1UgcGB3E2Fk5PM3uJNECYcnP73Q8osnjeAYixW94FmnFQG",
  "key45": "31NG6UMFuQwgx5ymysondfDDrhcsKkhNGzH8LgWxM2n7TX81dRXrbc1wbC2xj9xS8pKGkNwuSq7yEyzv9zYrsQ4w",
  "key46": "3oMjDAS4L9LBa5cnREjzNCKyEucFMJV3vWF6rx6uDyxnwE1YA6AcAVKyuCih6MDp2Z4SYV4QmM8T4ehJHHtYyMvc"
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
