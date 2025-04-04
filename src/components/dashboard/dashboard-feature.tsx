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
    "7KzxXJyjXAgrCheXnvDSJSzjQbmPMMRsKWbDsAqyLwEhm9DiwZ5Xi5pLza6t1o4eqD6QvrLYxqxV56FUP48jSTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k8njKZ25jWWKideZspjZ2uMScfgv1aMqdv1twAqJHN81JHTP5DE12a59s6Ls73qudEaSvCmu1s9kXsAogVwfFhn",
  "key1": "3hzcoY8o9t9tNiEeXet5DfoU3cJLJA5ZqpFuapScL13fwoJjP35ntHiU659KqrsYju59kAiNZRMX9naL3GbRkQHD",
  "key2": "m8FbVgTS2fCAv2L1v6JCQXo2VZoa7pTaJNGV6JP1wcrSwt834NQB1v7mwe41bv4gSY6bDXdnmFet7Q4pBgx4SDE",
  "key3": "2nbnn9Jm4ENFqL17VVvP4K5a7Wz8KT9rEXEBfgrZQtceg2J7VcnPNG3aMSmdNnQcpMuyHc4zHhvvjnuagCzZveVm",
  "key4": "4JZiiZSujNBGmKweTdZ5JHGysAjVGhDHNZSdUjf3ub7Eo4RcmneTHTu8dcXbodBMxFhzxPF8MHnDCinNAmaDaDEB",
  "key5": "4cnKYmTVRNXhdgZKcTcbezzu6AguiuivuK4VPfc21NZVs3d8MJ8fyVpupTyuYLX184cgE4HYsZ7nDSV8vKC1N6EJ",
  "key6": "2BZuJdpZMwxCS61eK87XPQiEFZDrkQyF3p8XCNmSTGpW9AMu39ngrnF9pN7FY4g1BFBGYQTKSQ3DPPUXj1Cc3qNX",
  "key7": "5n9FarLQNa1o26to4Y27efzxPkhHSGHSGP5SoqbUtBrNorkomo5qRQggFSMaMQQ6ktsk8VqEZ3qc7fMrqpQmoQiJ",
  "key8": "3ub9veqyDdVxpWLR8zhR7XEq3HQNYArYSawxPKKsZ2f9znEjKBkoVA3cuA9Ms8CRvztCvHdeMacox12dYr6gXgdx",
  "key9": "2dgaqkMyC3cT9iLNboZejn6BJnq4QUVauAve1iAFSVCtejh3A3vjSvLCxRSR4TYErdeDo5dSKtuWuWZqJpQRMqK9",
  "key10": "Pbsyx2h1JbG2K3NbWECvTmDQ4KgRb5aL6VZB3rz7icUyLWNJqMk7zuaFDikQzwh4XY68q7DmV6F1fHD91scZEue",
  "key11": "A9oeeKDVgxfZH8JnXwcHsCgsgSJXLSKC5vbKjDx6q1rhkxYJ2QJkax7Px7LfKEzijK3cXiM9z66T6QQLYqYA849",
  "key12": "4E9Z2zbUEqHV41Sg3hPFi7MeseWi9GxoKiGMBNZVhjzkxUyDkBhct8bZwZYiR1XsLzSzD3xVeXVQ82y3zEfMoBir",
  "key13": "3ay4gkMX533bu7Sn8bMZNEJFWmTvH6sGCf62i2CcQGygxC4GtGStAnjJUrZSPW7p5tugeRt4jG8GXdY8eovz98FC",
  "key14": "2ty8Qoj3Qn29o9Hy5DLQmns54N4taw32wZaxZM4Djmb9X1ovtGeRf81ikjT7hikCE9N5bY5LfJhPDMTKg27ahCSv",
  "key15": "M43gPESBouKs3CFJkxWJNnpCWb7KU5yZkLdvupLhYK77Nx4pphd1NjW7StKS2XGkfX3xJVa37sEK8MZL21d7RRu",
  "key16": "VBd7MdUR4SUQua6MhstDV4cmcVHVSkfQfXx9Cpda4kXBXDChL1L2R4Fs9y6LRQyUmjLJSD4SWgcpPh1YkH4StEw",
  "key17": "5cWmN35BN3VE95zc5KVAsfqD66tUi6WdoFn41TBFfwdGWDp9Wt3Z2qy98UGvxK6G4Mpo1W9Ba3w7WYUwQ9W9AMCN",
  "key18": "2hkZzvPone2Ur8UwhXSXh9223v8Lh3nNvNFYjZp1afxtDQLpjTz68uB8pfpN6p9uL4oczEcjyHLMztewNsouGVUY",
  "key19": "373fLGmRTXoDrFkJYF49hh75qQTDYpeEK1XhExjNfQaD4HbgUfX3wR4MvNuLuAKfVEKA4UkqPx4x6sFg6DeaYobb",
  "key20": "5Vbu19u47euJs8zMvm7kjidrMRLr1XXbweUaTQNxuRTv6oQXBDY3dSmYsMTcuWbpp43XiVHVZ3DUKugYfdYhChqb",
  "key21": "2G7X32yMVoFKhSg9rAZuYU7AMcRj4rGcNvd3cEwWVgd2iZtCtPu8W8DhZPkLThARbEtMhJF5Xo2JZjv4s5QqTpHA",
  "key22": "4zt95yeo6hQCoSmBiByQ1tSyWVmrdpkg5sPkfJefVb3LnPdSguVn1otdK7YKXgBbUPuJsTcZkBMxboHdV6ShJ4tp",
  "key23": "3S2Pbj6Bb2yhyMS3jd9h6qDximsfcYrpbKb155cCZymsRwvnPXpkatmNuB2kbMm3L8Dh9KQQV59EtLDDDMWY33Pd",
  "key24": "4nLPUaMNfFziUkyxvvdQmKp7UYuGVzUs4tJx8NWb3RCooBThajQvbYEpfuzUTV8iEhpTduZruwA2qUvCd3mVyiJP",
  "key25": "65fCsYsRmjkdAEBRKiiY6Wv6HQ7R2Pram74gm2tPJP76veEZWceP7ZWpSzJ3yNdr7C6emrfcYcu42EkVwCv4beU5",
  "key26": "YA4ru8QB51fzHE1rNKARuwpUmsEDpQZBhMgN2FMUR2HM65FYWfWSQE4f6CEGLWGktLmTWhziMhKrJFP1B8RcJ6x",
  "key27": "oM6uqTusd5CNuVMT8mAMZLTNR977vkdLxgPRoQSpfaXAySBgaymqNoY8DcSomBau71RpYPyhaqDetveoqtdzpC7",
  "key28": "5vzjpaEMZUcag9ZQwReNkHQtgjbMzjwQD9k6b3JRqhsYTWUSXZGpV8WBMjJz2ZbhzReHaR3gxZrAbVeoJDFcfnsn",
  "key29": "3SD9YEk3ss9wh5PrRmiKKG6ATao9kX92SQvW6CkWpmC4DXLhfMfduK4JLMdztPdTi4AraRRMXHJv3LCyk75mkxJ4",
  "key30": "5HcPFXABGLvnZNVodybevd4JrgrfZR9M6oXecLV4Y2pJjZHb3LEBu5Rrr5FecMgFhwVrA1yb7ZTrtfSgvnGdgTQs",
  "key31": "4cbenZF2Au89NUy3Ueox7zzUkwUWaHNCMi3Wh8fKGbZoA1X8DTd7MZa6t9ofRQuQHLWoAs1ajNQLnCEux8BKCbBg",
  "key32": "5kh8B4DKdtQBEPQUgkUriwxVJ7RxRvQdTmz561VYijEZ5PhxmgvvhYraM59TJmAbUrkU4KwLzzz1siYQN51cwuN",
  "key33": "3rHybsUnGLLFoaK3xGDai8vSuy7o3dxQpVBBQrNYsSHMbpF4Z3KF2fWhkg9tu5kFN6vo3xacCjswyAG8FuADuPNS",
  "key34": "2RX2k9ACThk29u2eWRraQnyc133UvZqq95q1UxRhfwJACmNArzq8qMFnUBeA5B7r57o5UVknEFZ1Pm8KdHTzmtnu",
  "key35": "5Y9au3suDQswbLc9uz5AQfMs9UDkkNCdbCBqbRQ2v83gZAvusiYd15um2LnPGFw7smd6PgewassisYEGXfTLgYw8",
  "key36": "Yb7trK3zhNJPYyJ56H9DH7vsB2LjhiLEuQMxEdUzsyzTAz1XbiFziHQVkwiBxCS1hWdjAkwXTPFw6jdTRt5Cizs",
  "key37": "MERWJu3vCiACUFbD9HE8c8HEohY2JGRLMV16UQsXzcK2DWjMPAgTfYgyQovEncTrZ4bwsoBjbq9kTGoCVZWaiiU",
  "key38": "sTKGY9viH1GGpbEPkfBSqSVXj9idE8jVC1zxVWQ1SfRQSPjHRoa7oqxuLi4BSvCj8saL8dbhBPZ4ZCJWA8u5zUY",
  "key39": "4YumLpBuceiYHyJHukGuLixw9ZemsLXpj9m4a2xz6hzR6fqVuF1si8nwirTsxuD74dzT3C7Rbksk59exyeoHjSrp",
  "key40": "c5bySQDLWDVSkA7SnfhtTXtgQkStfSYhJYYsXicfDDvkCzo8pw9zsVQjJSaucc33vdRSP7fV1upQLpbFuzbhsMV",
  "key41": "51WavqLM13G5ZAY3XjhD13kAhwCGsTFzBBGXPGZt5K18e3WK8x4vvFYi7CX9iS4H44SRPgohYfK5PjEPN7zNCsF4",
  "key42": "HoEea6EmuhfXQSiyGJn77woZxj2ut6E4UTQq2zrB3VPZyK1TkJZuymi4fhSks2jo99qjq8jgL51HS7zFmC4KG5g",
  "key43": "3d1ayhS7a7pyVRwqExxRqSd36ToeEUEuEBerrY3XJkgWLQMHy36Kz6VgBTyRvAwWFNkkPCV6hyUnxQ8idjm5Hbqf",
  "key44": "51jsAFJ63SBxeNo5gtofEi6X31jqnQeMq6KnWn4XWmCf8vMWCHdqkAhXWBqfdTKJni4Q6m6weQt8hhWbvPJMpej3",
  "key45": "3bPETbzc6kALqEsxcrfART71e3Xb3fA829Z1BFveysXKtJKAKgmrLN2gvN62wxpMxvamCGagguk6u9ZZuxZ5LdFP",
  "key46": "5MYdn9YEhr75tCDtP78x4ykj3F6DVGWfZ8pCwVjU7mipCj7XmCBpvnQPDwE3cDcWTB2aVss8TPfumMjmTwe4ct7t",
  "key47": "2uQdtPzye5i5fwd8rFvZTPCVXGz3pUVXYW5gyDzGnDdaAJPTTNFWQw68edmQmwELaMMVuEdXrknnHMBToNDUmqSn",
  "key48": "4jQxfUYUBi1ThXDH5N9gcvHASMZvAaPnFd3F9GtHnXtH1d2QztgqDVXnFFHZxrRg4SuXCVgpgXRYa5sSr5rBepkx"
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
