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
    "zTr7LSCW331fjPahoqLtq9nHgw2hEWzzPbG36msMuy54nFyZSHqinmMrmT8CM6JjyzE8SpNdjLawRGTHN3RwcxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqFzEtFweZ6s9sP1pxUrBBYDpcNWQUUsw48eh2uRALxTqeErnstLMaceT6nxoiapKv3KwHCfxHnJAwE3rmytYQq",
  "key1": "4vPpUYq9s8QjVksuYyMsgmzvM6bDRKujDYThY4LaFBXiukMp9Fb7vZzprGYV1ndJsnJvdS9tDbRsNUE6KLhnA8Bk",
  "key2": "RB2kThq8kfxmR9HhSzssRmkM8zsgyJFxNYckXnvcBgB3sLZeiXiVofDSSpUMLEPwDAcj3uc5agARpmNbtLyAvTp",
  "key3": "xr5oVe4XvJBtpVQSBywXkJNz5sewfJUhZa9dHBpfh3JsCbcBgMHkZmXrCUTP7GJqHzJCikxKMA96rWAZqxqQMsm",
  "key4": "5t8CmQFNVLN5d8DGydFBikSFpohUiPUvcC54RApwe4wcxTM9egdZ61LVVgSdcgJ6jp1n4hEHWhRjvra9KkNvLjyi",
  "key5": "5VczCeXeyy9omMc5dm9QaZGvFYr2CNv9EwS8Ge1TyzEmFKdVguPGMzvXasunmZeLt13D7ApzGGJfHphYszsd2xEC",
  "key6": "5itCYo22YTBADfBJt1wn2keYGh2G3FAgYEThGByoadYHpqxbSx3CLfxKewqxk8MLEP6osWyr6MRz2QjXRsg1QP8a",
  "key7": "RzMkhhDXDpKjXv875gYkvrCuqcTBLETJt7WiYQCfMD8VMftcpXiCCX2y9rNpjKRnuvaNRU9q4SVKR1xrdZAZTqj",
  "key8": "nDynad43PRrFUpb2XayRDuKfYbdZuknLzjApjD5pAgaR9XFA97prWosDd9jdAPSYbKPLiocAAMn7NFsn9tKfC9R",
  "key9": "4zLqax9CYymHhHQhVM62qB99bwwQKd5h8giBYkronGWxYWLodmYDSBdQ6faPcMCCLWXrSeAtYqRhYMTf96DZzkJU",
  "key10": "33jRBJ2urCKrehN1JNJHc1gzKCeaNr4u9UAx45mJrtU4AznEuK3BAoyJ5Y3ZyX7N4DtvWvzVxgBvjv7LLRCtHnfd",
  "key11": "5vrpsADnKcF2tXNEGsBJKaiNTJ5kjWZinwJ98r9FXuGiY41otSgKVF2CbJ6if4GRcM5M9jU4pa8Skm4m9npQQKtL",
  "key12": "J5jv67xtGfFWSUw2GCRPvwdZUH8FxNXdpjuadojWTVs84Y4VtftiRnG47k2kSfGdPf9FJpPf7p9FB6YSrDvewXy",
  "key13": "3764PyrkVQXP8fVrm8Tpz1sJBHExTUKaTckGPTkY3YefBDxtKYoMKMZ6RpjwKa91Z4VEoq2fTUZkxKGFYKXLCDwQ",
  "key14": "56HZEBr5ovtKZyojWv6wp8um7uMh9FrSH4PF7eHKiZhmYcqszKP7UDfUrmxB7LQXhxcZnNXYo1mdoaw5Nhe2SAoV",
  "key15": "eDRRAinfNSq8nwXemxqg5KCC7Ac8qF4GTDabBAwpHpMbukNHED2JX2Gv6YcgenDTwynPw8qwZViDQ1PzyeaywVP",
  "key16": "22HbZ1S2k1RMN8sqaJrrpCvcpPsieevtXew55HrTgfE8Qw1EcN9MvxNStqkH7gnZ3N5S3mqbEzHfTRQ8zBC4itCq",
  "key17": "4QPeTEK51WTdpSBMdE3khwdPEFRx7jQT2pAoo8WehxCbmKrXmM3h9ZyTihZssFmD9fPHcGPLnUaJtvJvyk8X5M3b",
  "key18": "LXvSPiarmM3L3shKrta1zZEvNWsro5Y11K7CDt36FBrXtfiqMzQzw7253NJMGt12Fx9zUTuNKZcZFwFq13R1hgZ",
  "key19": "3oM2ja6gkZ7vzPSacpktNREy3NuCbP8r8ihJqt2g4ChCQoKkRkioVDJmm97SrndXRGFLbCVWjU398J5PULbYmQvK",
  "key20": "2RkgGbdz4WoLpEkEngkNZ2vZoQ9gDsULAY6UxjeZSHzz4KMJPNEsk3sMPEdth9tABV9QXreCt8UNvWA5S384R22n",
  "key21": "4VEA4275gf7zXJGLVXzW8M8jYhfusFzERAsVnVu1hcSQQeWVCdNJACLBa1xYZvYu5EXAQDFStdRtcQjYiVsozukd",
  "key22": "5WBumFdgfsCujVX8m52LeJWVjmfPTt1BKXxVawPvErAdtETXnKV2cJvJwRQDQfEUvBXNGkTaPWQBgXwidCALBsb8",
  "key23": "5Nf8e3hvPzFL3MVrxKKDv3b4XGbCSGvYKseiTN3T3GJLRPkxZ6TVuwwBn6niypkzb2dU3XzHNpj2fiD4a1rWKZ2U",
  "key24": "5yFihHXHEJeo1uGorsRw7BDi3WxSh65LZ79AM8JtBoUtLv2WgJTLJYWS12YVJp6knGdohdRioaTaMGy2Whdqxkhb",
  "key25": "vWVF58jMPJAjb5Yh3nSQ4VsF1PqPeWLXCc735LPzFz1qXz6DrgrAdqqhnBfjTDpjtV5DwapWXKeqHYykzw1NFrE",
  "key26": "49r6eUBfTvukrggt5SqpZrY2Z2a3tfc54i6QJTjf4BU3eaTSUfy4V9YU7FLxPkreVoCcpFSn5TjPuAsoZgcyqo7p",
  "key27": "4fd2QGmZ4W5kocFJzV88N4aPhFaB3fm5UZJ87qx7baYLnTsezmCsZHDamvXbB5e9aK38VRjFDwcH6LHJS2921QXQ",
  "key28": "4G8wEUpozSAxtACXQZatLedeQSTxKMasP1VEMv3pqmPkJtettkd8UGnieCsKcR1AXyGMc2PEopbmsX4L425vBFze",
  "key29": "2HSTNNSdF8uHgGySS7a1PcDySb63mxSu2BDXz5R6usWvWMMebscbBmFaEAzYJiWzR2oD6BesonwcMFVgmQoAyzti",
  "key30": "2Hx9PJTNynepAhsgsan7hqnpU4ntvHtTcUnJT6s7nZ5XqdmtJ4km18oUqjZehez53MbwFCwqzsy6Q6fH1BpvDjMx",
  "key31": "65qpnhoPX1BthYUHszhKa1hGiSLbJ9QitA2iqivYYyy7JG8HDF2PRGYQr2R126jDXBZXrNUiXAr1dEvXCAeAN8rd",
  "key32": "24tC7dHSiLEQa8TAazDuerdhXi2boHMeJMdPeYLhkFJ3sEnFs6BrkMgHf43BEu47WxxKXHKnLord7CKgGWzKPkaf",
  "key33": "2N4LyGHDvoLb26HKQ2AHXFjEtBsa6nNdZ1BqNQ1ZeVN8fEwcPUiddoE9GrRofUosdLsoy2iiyCQpcAswGn8JNq9v",
  "key34": "2KsWvcRz413huBsM785oxPuwUzEz1hpH33Q4VqmNdpuBdkCwFYXbbQG1uFn3zXyyYfXm4Daz23qgBmdREgaTikXz",
  "key35": "4CZQYoW2vGSVA9rxSoYHZ8qyCWKVA6eDNWHm6BhCYSKBRuWhTMBFZ2u1B8avvphQuWjxWXS5ocDAvrjki5CwuNjQ",
  "key36": "2ytZTdUGMVhFEHP3oCEM38dRzq7kdaMuA3FQRz6ygU329NAiBRWqs6pDK4ZeRXDvSchaQu3JuerUQKt8bBYx7VBp",
  "key37": "5sSDnk6QgBERCiyobSuFwDhrKyBAFH3XQY9y4YbQEHrMFsNJW9T6mveEqJhPQsD6cGxnNdpYyZqyxmUViMDFzRmf",
  "key38": "4pDG1vwYkDCNNBWkFPPJBrExC7QiijKQBDb94RXBCKLxvS28aBgVvt2JQTVL2UJM8hrqQoEs7Pc1Eh6NkVCHTVfA",
  "key39": "3WyyeuNY7suiMDtDJfBa5B4JJLbN6pYri3VkWWq5Y41f5pLSJcdUjBd4AUKvpSRw3ukdFkt9mkA7af8oQWBWYEg3",
  "key40": "31tSbkZdMsT7rYjPwUaGLEY16WjywsTFDUtJWStdc9KKd7rdFd48wqrvWuEWQBqqULaYNjFNEY9A6PgVsSWjGpFy",
  "key41": "258FcKYGV6hzyQ9NPCcTqT7d6SP9pWmXcmAo6tqh6ZqFZHfd4wWMZosZ1ijJez7LADYWWevr5f3YQ4JXhWvBAoej",
  "key42": "5AKpbTYW3bJUL7pvJpC7YheJsCnAC4z18UpuYbej78qwZXttuRjCPphzYm5qq3UCcFLtpV76ASWp9MEYHLZ1LnxG",
  "key43": "3h6hQ57u53t8AftD7diQrekAYTPNg3F8LWJqtBiagKAYxCbJfVKpL87Dn1d2AM6TGqr4sMWNs7zPmnX5oAs8jwWi",
  "key44": "2rCKPo6eHsQmzxaQKcqiFbgTD3enqhLeEdPwzpda273CyMGxPhQbDzf3qMDVk7Wvgw7mGGzba1sBgKhvQAQ4EGHZ"
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
