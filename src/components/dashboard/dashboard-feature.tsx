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
    "3CHXPoiaynAyAXymz3K3eTE8Hy2uN3sb3bkAtwXG1sJvvGsUKVf7ucigJRCxaKF8iRggbkkGtT76zDmFJTLwqmWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgVU73vHrfLEuprxLjGHhdYpy1yfudHCfr1BtFEBzuuc9n8P4a9P7BziwLeFcD58Sp2bzThv86pWhoaowCegUz1",
  "key1": "2ZuDK2n8y9XW5LkabJkrx4WuDWjZcQnePLJ2rut3qJ2Sws6BSMFTiv7irGjcoyhjUHtmp3Rf29fovJhDnDGKbpNT",
  "key2": "vKvL1kiTWnCzap5dvSa9n76Kk9vKzVTVrUTpPSxFhTZizL55CM3PcDPXkHd6sJ7ZiN268vUp3cQwWg214K5pxTw",
  "key3": "2L2wweyCWkJQCvWVN81T1zSM9N3c4tJpxTVmGfVpPjGf5DGTbh8Sz2RdiU72ZaDg15qCApP7P36aW6sLt1JTXvMA",
  "key4": "S149TJ284CsJqXZQB1ZMyUWsw3b1LxauWn6KmJeoGGSZRPDaCUnmmkquZ82tEDm3FFCL6jCwVEDtHrCKZu7dAu5",
  "key5": "2KsDkWhgNtSdHK1GetZcqXUmokP1PLNghLRrjvQ4e8j7w7Gep1ZfNe3xfESxVhEksGkA7FbcK5Wj2bxf9X9PkSKh",
  "key6": "3D4iaVesua91EYeD8ircPF3EdyoKFvtXu7Q8vtRGuhYTtVkxbE3AYzokAk9qLRtnjACWmU5YWRJ1wEtaS1qHMhuZ",
  "key7": "35MQ8LEsMgHjYwiUh6Y1X8xHxcgsdDSrrJ6Gc5KByt6qPPy71mF5oG672EanHzhAKkZfg2SJxMUNovwqd9UebTwc",
  "key8": "3rya6B2yjdP2VwGBAvDAi2F9BhiK33Y4AtVyPvfb59e8voQryucNbuHN4Gn8k76BBsRkZJdVztDexNcwJLrhMRjQ",
  "key9": "MVg75rRJSVkVkJnNcxoPBRyzpWMdz4nCs7MU2inLdYjos4tpSiznos9WPagy31CxBRTGw6sSw52AdkYoaVdHNna",
  "key10": "1aGNJSmW3o5z9ua3hcFiXznAMpNjmkdSm1QrxbAsTSczngTm54TgdxcVPHPZ5DVNGwoNMLEjQLJbqn7Vu27JmeQ",
  "key11": "462zhQ4DX6WHPJN2xEpb2xvCU6jQoZrjcf49CUw7y3p9FRnBHHNKRtdTWroVjXmGe6wWGfUEYFXL1BqaF5xz6z6Z",
  "key12": "3bTu9YcjHYJjea51GZ9AsZU2TVZLrR6hLnMW6TS3Y8ym2PRqmveb8ceBBn5Nff78sV52QDS19gMn9DGcs86VdHKi",
  "key13": "2uSyqbnGrXsbx37SLbutryi9grENFFxDaF9YaXM75PLxdbTvxXA2t1gKTjecPMuWFdvhGgM6wt5R1MKoSafi7USC",
  "key14": "5m5XA1YzoYqLBNb1YFahyiMoihphQ6tShZb2ui6NxDDN3PE7fqS1g2NQHciVaEGdmCqmKjN5ZMTqiLhud64yo3Cw",
  "key15": "3DoDGryh1cGFNmcpTJjfeyo9PvCHgPw71X3acjzmAoqYqq2r3WJWRJ2dPU6WUEQyQF6UGVeGwsPZ1Seh1W6So8wW",
  "key16": "4yrhQCWoercGyGriCo1u6i3MLqYCX5TMCWF6TrkE4Gp7bVntcvESAAjGcQzEwyfTxWSvEFDPkK24MdsLYBzKsMG9",
  "key17": "JwHLsPmK4jXLmJwpbTDH3Aj7SB7nQssL5zSsJyFon82KL5mEZSLBCx7XiXC7LfYxpVpRKvUDYNosHoaNKuxcvsE",
  "key18": "46r58LuwD1LG2cNzSdZAtLu32DPRSoSVimG3ULyTTU4VWyYTaydkyhJwm6dDWN31WYMe83fsNfxsfeJGJybArCT6",
  "key19": "5gMKMCaJvbNTUs17uddop8ZHyUot27ouFzSsZmSEGjNernfg23AbqqerFWJmvjkoXGMCRRDLAytVsTRmV6HBWBio",
  "key20": "55TfjZT3pfJ37Ni5Y4qJybziRrdzSH5G3nEwJvJg3HVze1PFKD69QDenvBDm5Ue4WDPaTZNTLgbJo33NEsqbmnwa",
  "key21": "mj173gp8BWfNP8fo6uMjyrv5AnTPU6pRaaPXi6L1UUyZqwEQGKZe3pbGjbaTArCDFqjQKAP6eh1cbuFqFZRkye2",
  "key22": "4m4AjAQzP6hpuBAt8umPixAiL4ePZc6bpKPJ39SAGjaDbwgLMNjW7KwmXbEvrPLVwAuN6CeqpaddkgFwfiUZkkqW",
  "key23": "61c5LWwfDtqpZe6ZNUXHPJJXe722STux4PTiFvFEU3VgMM1aAMtUiifUWwGa2fSkLYdyf41uQx8wNiDN4d1573kD",
  "key24": "4m7gEGes3iL8L5uW51tZcdTFYgZFr2EnH8DZSxSPodofapboqofxgPYrZQ44wsGK4Pjgrkkjmh7mS1FGB5LH9r69",
  "key25": "2zPUH81NhNgdJyYFZqdK6oueS63uPGVNMKshakUYPWowRciULdbYrX97hVRfTzKpKHByz51Htn7ZJuLUFkKNyzsn",
  "key26": "32zv53FBgKagT9vXfxxQvFUuX7PQHWpTENQYEKMM1pW5xps7oyew1ProGDao9jTmW2S2QFKeYbkhPVT63dFNe172",
  "key27": "2iCxqUaofK2oH1kTs7Cu6uXdS4TRpXGcm9sAw8aYRiwW3XJxeMHd4XjVwnbiyHzChyopxrrNodnnRRejQZJsA9Mk",
  "key28": "5sSyjyKMmvesRu4wpJ33osdyzD61jvdCWs4hjs5BvM7i18NUSRwaLq8L3WUwdx1CQj4SuTHCmjvomVbvf6t6qD4x",
  "key29": "5xDwK9UcLmLPq9RdFriyh3RnEhHetFHvwarPXmcVe6kFjntUyWwMVAx5BdBhPgqddnYY4vVbgsJCNqJK8dDDQNVJ",
  "key30": "5jXeAdMPYanqA7pDZjtSHyUnkVuad1wCDEdw1p7Hm8wmiMKQMFh6CXERhH71u75xZ2M9SxreithveBqJB2By8Ga",
  "key31": "3Zn1vyj93g6tYScXvaf2GHiGexsRMMGDWh8CzwfrofMPt1dTaRXtZg5kfyBe449rF99r5WR7bHVRzqXt6f896LYy",
  "key32": "368ATLJ3CYxRXtYaa54LKBWWyJ85JF52NbFbpJaJmwx2qjxKspfT4dXzwrpgA1exbNPn8GEeqjpDPs91pMhS1VbX",
  "key33": "3ytKERWAMa3jksFh9ox58o55C96tNMkck9Cxfk3V3WKmrcmqf5tJLHJaEiXpkDN73yUSN6cQgbpWKLxZyAXGDRW4",
  "key34": "3UXEnxnYfi6gs3Mzag8wt6dyv5PyLP2nZZFN4rNGd2zWoXLRd2VjA5zjwvUGRJjz8GJz96oyX6aENJ5UgPonbUZL",
  "key35": "3botAA7tdsjHqvud6HXduenCuyJfcd3fCYhZMDck6pyXH6wnMasvGV1EesS9omwMon1kdezUaXUY5tpkJv98wQR9",
  "key36": "HPxeNDSuzxj1dYvNfnzxgtETPxXJqY2L97WGNeo1SWL8gizVanuKFvWHTg8kWFhwkXwphB48jea4GmUcD6TTtjR",
  "key37": "2ew6hChY9S7QFVRadyZhwvi6rQz1giaAJK7QmfwjdQnhUWHpRNrmVD4HCDGr4gfRDzq9uEWMK2o6zwR2STdonz7C",
  "key38": "M8KqKo6C8Me7hKcUcwPk2LrRdkz8dpLhgbVjVVPhEeD6PNqGB75Kzuqweh8gecg6SLaWWfTJ34XyPR3CiLdx431",
  "key39": "tWvCArEVSckP1buWNAgrWd1mScdzZqXyWwwZck3pSJWsQtmgChcVAS7R21bpKBWWEXrWXi7n9FS53uFaXRDkqjQ",
  "key40": "4x1JmMguWz2pYTwDvKFWwqDRzRyeeHL8j8n1BEh2FBKnzPJTD8MPVYHafvQVdV2kMd9qrQoDWSNsTLF37a1HjW7J"
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
