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
    "2G2RNUfL4u65vWXXmGZPXuLCtZjeTfoyJHyC28Mo2gZSTAZ6piWReq5UL3vqKWNCbjzQA44e3Q6a5YLpfBFSL1mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9Sq3oyKZvW9gdtqWkG6vrVbGzrtgseMd48krKkfzeQ6UKVc2BZN4HyCq4FrQFUC9GG9DSnLQM3dYpy8ekQdnbC",
  "key1": "34BLGkZrv4dbEQyUqc6ZnMqmWBLisYcz3v5txHzwmF4GNVGNp5N9bDdLQKWBk4cv8qmKpaCSuo87hQxseJ23sKMc",
  "key2": "4QZMDH5F6QK4oTL31Z6L3KipeoxP6U8hNuMvLg6Y6oSmuFEX4d91yJ1YGrbGag5VUYK5NW9HpoaxT4e9hVhrpMDG",
  "key3": "2BaWKnLr41dd4dxMKoJgjJBjPk1CnRD7J6hGvn4dvzCwWeYsCsRAxdspVShiN2RPz8PNPV4xjpWYFACPRAhJRzwY",
  "key4": "4R3smVJTsbovTQW9KUYTqokfkDQNvUL9iK5JCFiHCYGuPsiAzrXaTEQrxXtHmo212BKi8FJtnFMytTSgeCM231B9",
  "key5": "3RzGGYn4Fyit9nUTwLYqKuPQcVtkC7VJaVBoAEjiyQbuXGJKebZ7TqwPXkDhESUNcCqAVT6H4sXZAJRieo1PmKXp",
  "key6": "54bszNtkb7FB6csJ43CiASSycqG5kKShkELCXr6i514QAmCmvbVL6qwUgcdfSGzULSxGe5KPz2xeDj4ad79UAuFR",
  "key7": "3vAeZuRG8WvuRcxNiwCaJdier24ywBuU6b5aGvWvu3dLJunUfBpKZuSJxdHaFRhG8ztZAAtSzd3K8dTYNh8fVhQ1",
  "key8": "3946jAQp9B5dLai99CDzgLVeZii5mnzQMY1DuLy4Xwjys2FWVKjMFx1kJ9CjgmTzwnHZXvmVA936zHeXsHt1UDUq",
  "key9": "5SbW8qSLsFqoKgw7yN6Ly3JFjVfTXTCw6SjPsSA9NLPUfy3kM2jCpDSWs5jwuiJhBkCEeUtg5dJFQPG2Cq1b9bYs",
  "key10": "5gC6t4b8hMAKJMAiiHxgKEq8vr1t6cUNtRaxvitJG8XEFWM91xMeiH6Mhqxkhw2wCoABXnMvo6hvTx5u8r6gMi1W",
  "key11": "4kAkcTGSLxZ6RCZpcSxxXeXNGhxpn8zvNsXuYvPMTCd7PFi6grQATK5xYiBkx3B73H6YjeJ2K4geT6FDHncz2SBj",
  "key12": "3LtXEbUhqeLSZwGUCLPnpf7LfyceeK64PwcuequYntPbxgsWcP7bWtLEKwhd45qywULqd37bsKaadDXVYybFBeeA",
  "key13": "5eFcoaw9pKb2LADqhzNHW8rxxmqWHtm61nJ9Grwsin1TuPYEYgRhmiymosYp435TENwwFhsc293Z7oMRhNupik5V",
  "key14": "3ePCHNCe9mX3Lk6w1tZ9RUeYkMh75Sb8cuvmq4PqtDWBXWVZD1b52kJC4xsVLA6MUDLbuvKVMYeX7KEHzWmjf44X",
  "key15": "2PW5DRaAwnMtGNDUrR5TtT5YKBuXzrxSZoqD9FS3e9cfsAmEWMDoinoscmE76a9JVFMnDYi4EEpsJ8VcsHGBGnL1",
  "key16": "4CDYX5GAuhsxqYSoRVpihyGyt7HEv9TLyegG7kR1KvHysXcVVKDgifRQCUXiPz5VRK59i86uesD5aXrZWKmYD11V",
  "key17": "3y1GthDrEx8fYaQVzciAUZGeWKq9aJGPocm5dQSyeaxBKmqJE98Hwfe9rLp1dNauhA7Fj9VqJW3JwCwFCF5e2YxX",
  "key18": "4D99F7CQQLnkWwMzrsiW9VJiczPJDF6U3RDrHaUJ5sYdB6dK2q8RimgApGd3VBU4nAxmmbEJJiq5Lvzk5RnQgnf9",
  "key19": "3j7HvRrPqoDhtqVis6VAu3YmFYvfprfCFCFYeB6WMMRLjdRvjZAqfByeN9RMCGiRJhYYK2FRQemtjasTFudbbTMX",
  "key20": "5782kjD1cziBCh42NcZ6SRRs1jpu4x2X1EQZsADtDeBF1MBGTrY6bDDdsEPmcbRYPYnFLD4MvoNuMbFie8UWcnUM",
  "key21": "XttRs7YMVMmmtetar9UNZkm9p1gmCSFhwhZs1p89Mxs4wwY8PdzeRNuMCr8xghUa8KLh33cCUcdsK7im2zkQcLj",
  "key22": "5H7jsVYWNcymhPkP6bkHmjBBmEd7QmPbLYwJ5ZNfQxztKeHoiv2C1jP8iappVWNKRztpXTA8fBogNTrJ4K8uvL3t",
  "key23": "tTnZh3c2DLfRwkpyMrD61qiXDAWajU1jDmeVDFbwA23nS1BhebYDwT9BfsY79vRyMwp43Kkz9fni3HPQuFNpfw7",
  "key24": "2aoMiqdeKdmtpPjj56MeBYnoXqV6b9XgQowRFVyUMDAtBwdJs1jFrWuCa5NPzo6V88bNwju86hzX7WEtp1bPo47Z",
  "key25": "51LwR3mcfRy2K2r87HasWjewGpcEmWjNXfpfB43vyDNa3pv5uhwqCGa8LkuNiNKq2G5yZHMy8qpn4fSbsbSABvtm",
  "key26": "513kxeF8M4M1qTLuPvBBQ2qF9SUtgHoiLjACB3ZPVAor8iY45Wsz8wqUCaqkyDSTJ8Eo7aNdJHrucKwfeEGN6DMQ",
  "key27": "66do36hGyFHRUKK6Rjvb8EUn5qX3Vbr5sPwC1W3LrynfqKWb86L2ZGLrz71MWkNxtoe7jwxQzzZ96zPKvJv44vgC",
  "key28": "2YyQ8ZLsNKwqFJHHruCdg8ekMujSyMoWnX3EDD2R6N7RC2pxomXSJzSEKxeAPLZ3hoWqieW5hCtXGyvVQLpZy6zn",
  "key29": "29UCY1bAdKX68qrmq8McGvYNT4C5pjQepatvjWQ6yPEMPnLCd1FD4ca86UY4H7ZNCtcLVNFAsJLk1JSxbwM2AwWG",
  "key30": "4337CDamDPuPG2hgsvrHzgjkbxZ8bjHpKvkERVkwNCmx341xgYLiroPDurKxTKCwBjvrCFZguWijLRwxHedJGfYV",
  "key31": "2jWfchKr6JAos9W61pxX9KB3MiN5xFaZhE1QqTSuc6F51WH8oq2qsqixrqKRRMp2oJH1oBzfhV2FA19m6iRGoED5",
  "key32": "Egda7SJKBJmk7ekhEooJ15EH8shzMo7iNujKiQNVnsrf2SgmHghoAgioyZGexWmZ6DepPagbSNvZHnoKPMR5oth",
  "key33": "5JX9qVs4AFKqrHXDftcwFeVJknhoYPmBLrWbddBjSUWpLKGU25svM6y2R9yforH143EPiwtWfGRJQNFw6Tut4zSc",
  "key34": "2PaLFPh51AShps71YaBqvEKAnagZS6UZpM5yaatkmVZYrZkdtyQjoxKDGZKLVqXVPTn37674cavVR8MrjtsHjHuS",
  "key35": "3ABkq5sPm7Xu85x2Km2zMesUmSRDYch9JxDvxvvEuyeVFiHBUdmf614mtHRnGrG236sWNFXcM6SRG1ccH6AoohF9",
  "key36": "2x4iJoX8inHgCprA8aJo8Ghi89MqQ4ec9LyHxuiPTMx2Eggg4pdsZS3go8qBXpCd9Kzzhf1SLg3nu8LQakoEB4yL",
  "key37": "2CLSwefe9RFgU6PTkEWC2khyR668YqJefZvjXyhnC5MbJ41eMrnGwbb97WkTprq6mzLLSMFAtJ2gqxza8ysxURMw",
  "key38": "62dsYxqAw2WZkzLZhxYSpoByEspRwAeQibrMB3233euAEHGBNKC2Hpifs2EjykwFVrYwYU8RZzx3gnLtWZ7fr5JF",
  "key39": "3RBkTxaXSGSuYqqP7ye3rjyG1w7qiwqNdAueT6ujH4xtJwRKp1bEeKmCzgKYiq7Q3HniNzZ8QoK84pCNZhM7L3R",
  "key40": "36uho5ma31HVmDPecq6TovrWAZywhSaiRAptuZDptrTL8ipDD8gmFp8qpiPq6gBdGercs5TmKELJq9XJJ2NphLvq",
  "key41": "4G8i47qgZEAKGJBatkXBiisG3mZyAyX1ph4uXjukVJzz3QMJtUa4w6nRwjWgGDxeMwmV1LYwBwdfq58dPmMWtAxw",
  "key42": "Q2jpB3Tzb4zhAHMDYpaLrDrBJ7HPgBdtNdCdKsMJSmeXgtouDzDYRKJGLzfM2GbQN8CkcxYGVUBe3fh6utpHnPP",
  "key43": "5cvkjaHQdv9efC4P7WjBSiokNRWa6fNysfZ1o6gDJMFXwqs3hPCqucrAMWZmGhVXeic3uRELVMx8QAPTpXVABAzk",
  "key44": "2KJrUn2MTCaoFjDjWeZVUYfiN1LMXZ4yzMQ9xhdtiwZVtZQmmsFDnELhpaq3kUAh9P1BguVZAFWkePXfURcnXrtC",
  "key45": "4MYvnKPveujUZ23zpdjgGQHmtgLdk17Xp2SuHvuvzhBAAWicqx2MtqLtHECppYKh52cZAzWVNiXnUfy7UXebqa78",
  "key46": "3ycMPUGtAYCEBQJzVKaNmgHVoA9KdW3fEVRjfEc95TzpLg9ANvAdxfGzNsbi7d84Jg2uz75rK3pRCD7q6pLHr2xm"
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
