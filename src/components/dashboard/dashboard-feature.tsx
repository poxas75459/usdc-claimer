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
    "6BFcncJbf4pHxZnxwTeYdV8KeNHExzp2Dwpp4wR4yde8Scvkyobd3w6tFUycNSiKnvDoEWuq8fTUWW2N4TL5QTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uovj1Pe86RN95AgvYg1wTb4g8UFbqw7wr6uNf6xg5DCg5SitQW5dBDtHGdmwmtM7ARzbfWmCvEqYTaB8s1bLFow",
  "key1": "4q9ZfX6mGHGCF3RLtF4KaLrznNWTHCrE3BLrzQYssccha5cQmEupWm479PwufzMivypYGimewBPyR9h5XAq9EEhv",
  "key2": "kEEwNayaYY4fwjH5kFKJpwMwmUQXmCymQSv77ohjYgqCoMhnpHsDjhjtVTBXbGT3q8Z6pEwBmGSSmBCzcrCGdBs",
  "key3": "D2ksQVg7qPfRLLV3JzEg3iqxAH4W362voq6VxexERGu4Lebbp2gZvHP15SY5ZTJw5VvEVCgLF6VvcBsfNzyB6Yw",
  "key4": "XRQnTsvkNcmEHZjWghoDSfADtK5BE2X1ZRKMDy1JQzY797Sbww4HssGJ3L1mqEpzhZyz8xsK5kJQ3tHLyuvPkMA",
  "key5": "35GthbeHwewchKv32b3hwbG9Ld3JWRV96DC2JGGQfcWHRGT8haULYdpNRaJsfk46FxZymP9ZwBdRB63Q9KyphvMX",
  "key6": "4oCAfBEpibKSA2vKuXdFchgmUYrPre6QTCmyF3sYadU8Dmb5YQkrgjPgbzzqePRWEGyDH8mf8qeSfryUH8WPMxVc",
  "key7": "3QjDza44fYYXFJA73HDt1hydJGKoa3hXidYp7ovmZxhcnw3usZD7yXPnhC4qQG2gRwkaw34JXRamp76YvPiWRR1L",
  "key8": "59A2J7HJGrPiYSWyNr2UxFY6ox9PC9U5PreMEkPWwyoGENBK6ucLUtvzgGpZYMmuyQCkG7SZxQ42RaoYcsoNMkQG",
  "key9": "427yiXgcnCggBU5mRCmfGXGRDqhRcU34u6Nu8Le8tYGkbacykR8mYGi79wa2y5vwZv4MvVCsZrFuVvSuLBMSpppr",
  "key10": "bd62bjGqZsw4FHLa3nP2WauPKcRgMKLkavFuEpHZMMibbXQhikzcG9ScrsAcVtzgWa8W9CD6dchZf8we5QNaoGs",
  "key11": "unzSCZkwFzAT8ZGsP4RBEJ1yEMsmQ6RvSKiY1C21b9RfR6fKeZw1XDpx19TrQTnXPieRnes5WgzgGQuG5ji3MSg",
  "key12": "5SUkp8aRfDDNXWSwn4tiV3nUSWiDEexKF9NNwzWTqtdfL2KJn2VXtb9uEgW66LcvfaTdTEu1wyNhcBKUe54seYCu",
  "key13": "xR89WtgNfx9d3YC8BEUCyynGrxynXCiFM3JWEbmoGRaEbu4bLmThQXRny16uw6kqRn6gxppfXbi3Sh9mAikeEMd",
  "key14": "2QDrcKqZowDKoxhHLiwN6BZBjpt3tL1QMkRGCFuig97ErUPJCcpZKnUAHxVVQZYXjZQhiQCCYrWMksvEeiVnUmi6",
  "key15": "48fPv7nKpLANHqENBY7eoxTNecXHbU7MDv7LUu5u2w8Yj8i7JVXgwQpDjYLZfJdVSnAaxSTGCGwuf5UETPoUbtug",
  "key16": "2Np8cxMf1RBY1pmcsRaaN7XEkK6w2ZX71dzKpMNoZzp2XKqkXzp1Losi6cuVzL7wTTZCXfkFNBheqLikyjQ38qca",
  "key17": "2d4iER7iM1BhxRz8fDB4X5j52k8GdWPhob7wZy9hc8QsL4rXGd2KF2KasM7YjX4VPg1UxYvtGambV1VzXBxjXCZu",
  "key18": "tbphwt3CgzdVRcKzU5BAMAoyWD9mPP5m6VnLRRA8VDanibkZLbjE9MykCyjAU9qigCfKsDJSvVm2yyiGkBA6BmG",
  "key19": "ootYb3Yvc8e2zbatriAyyRSQ3yN4ntmiB3eWdwxgwERKdc9CopQKCiuo1zNEP9zioTxSev5kzFYsPmFnfHS7jEj",
  "key20": "48ugsqHFAbnUnyCrePWetdZALP5VhTszWC5VYrtX5BughpTkA1NtSNmfSY6BNqTXr2WxiWy6yMT4AFGkyjEPzsnY",
  "key21": "4YtQYBhjdnX6fKgSD4zoekyhHXAQvPiLi3GEU8jzSBXZpy9Gd88RRrvwHECdDeBUGMFczFKVBDCmtzpDGav72XLc",
  "key22": "5ZuLJJxXgMuqHeRPrSktwU4EK68eq8oAxKAT82iZZ8bMZ7yqjgvR5TDMSKdjjLqGaKAwfjBn7o94vYgwcYmPCyiV",
  "key23": "3fzu5QmN3JsCgXzbR6QqRjXJuqzi3vvkf3ZmcJ4THT2MaDc2PunFhQUqLcYVxsr3Rr8zJfyv6V7DK67qJ1K2vPaw",
  "key24": "3o42Xbs5kcyR5VLHFW99h1yDZcWaqH5W9Qud33e2tm1GmyUDBvYboP4B3yPuTzXgQGkurEXtpQ4WudYWhL3bjdz1",
  "key25": "rJjPNojRBeyJuBNV3Bs2DVUAjpYx4G9GBUKs1uHVWqi7XYt5615X5sd8ekv2fRiejKmVgnhPuWbfu6b5h27LDDQ",
  "key26": "66kQ8MH7qcFtzbhWaDXvNBgsEHVSimiDuUSkNxvA1wizHG29hoWHhcUUcHY816WDSHr6KWHB9ZU121jfYDZLgzQ8",
  "key27": "5Nta37YfzmHRXV7iPphkx8NsRV2eMUodPjKo7rz9A1rY4wYReY5e1WiwDks7FByCNNQJwU1UrUPNgL88gtBJy7wx",
  "key28": "3cYoSTsYb7YYiejLzT8m84DeQLt63UvywvN6CyepG9xwb2B96mJHnG3yuxCzXDcnySBXmFgFQ9zHiCKV9afZhk99",
  "key29": "i1Znc7iPBzapXJYZ84y7Yb4RbSkmEcF4UzkLDjrA9BA2gjLGwY71Pr1DxgBx4iKJQFRbwouaAhgndrpY8qy5CKW",
  "key30": "2JTrSCcfKqcetQ1GrohqdZf89vY5H8CdTuXt4Z6iYoYzWkZbLLy7rHNvBMswa24QGP4aL7SBhHFpqAS27f4oT6a6",
  "key31": "548pfRNwpvrZtX5QmXqfop8uxrbCpe6KbeMmP3BybzhmoCZCZQ5RAs3tkYgwmMKvRDP1VakhW9Kv4GmeTwGqeVYj",
  "key32": "4Rb9Bp69Q52TBL2Qwsufx2VGT8nN7gYDopm6DTB81YAJcS7WGjh5qAL9KbbDaUDiyC7Z6kS3Jd27xq7TnLQU4G7M",
  "key33": "2c7hUHyWkzpwPPBtJHmVPE8Mpq87eXMGPUduZrnpT8GKKGTHje5bX7XktdKdSSJWoW8sXCRcJTyGAwXcZWVe4DVQ",
  "key34": "4UWNqdhMUFENpBofNsmKJ7qZrzNZKVwfWAtQXVLJvN4WHyD3kwZPMbAA2egkmtR86PV8j7ZDKTN2WntDyA7aNhnb",
  "key35": "4SksAcHuGBHfdZcMwxZAU47frWRVFnbPP9qea5cX4EWnAMRpX66R53ZLaT62QSsVJPCz6RiZg2gLYcpKhnA2GnJb",
  "key36": "5SUq7T9d1ow8Fb1wJtWAcQfpq91sySX746S65Ptqb2EPnsKfDKdKB1nisdquHT6xoFiFBuvhugq7hynW6c6oWRtM",
  "key37": "3Xg1gpJgkaD12shhfRVehMiiiL9neHEtnaJmiX7mC1yzoDezpxxCXmUyBdcU2UBaM1rPT2GWVjxo6qGTxeqdPfzY",
  "key38": "5vbqTHWCk6SneP1ic5XkMNm8TnMS9Z2G2QS6yGcX75CDAkDNBL8tFZEjGezwvUXUbmyoNvrSpwjT2uByCWLKcmmu",
  "key39": "qGtnUCLW3h1EGPg16FZLrkX5CcREZPi4VkpdNxo6adjnG1S4a3JNNPgdRKRk5eLRT9cVAf5tDE1LdFhBKnxHBfM",
  "key40": "4q8AvbB95DEHUTDhJSiSMAoyURPykbegagTL93HqkWwNBs725QyEHkzfXatQC9fEeWL93tCdum2muBhrFtgEeNKg"
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
