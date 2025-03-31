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
    "kx3X9EqHVV1eXz2dcsqnv2bVTn5CvCjkZNFmn4DEv8StzmpTq6UG6nnuS1Cvh47EDisMDaBeuYCag4QrVzXM3CT"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5EuD54BjBDEMsvEXuswG2SCQJSuLyizPBpFf8nXLdthDQstt53K3e8wPonWdhSwQtPCrCHCKeFPFWexwBuyhxzSt",
  "decoyKey1": "4CUrAtjyLkpXULrB9PRqT8x57yr2HdM1ehPURKQ1WYfSbJ2WU5wdXwexUiHRQwFoS9HR87iyvFiuz9bBraL3eJzh",
  "decoyKey2": "314QUNnq52kkX3uVGWgz86basKBZU6TadRprp63wdRBwBQkgmN7Y2seypo9T3tjWor4fKUrpchXmE6WiBhDithYi",
  "decoyKey3": "5gB5gfYPA4FZ79SS4VRDNpSnCijx2gYoGrx42ru4TxWrJZTWWhM6ZgZrfxs16FGVYeqLfGJZoTgaVQzqGNw8RJVQ",
  "decoyKey4": "2RHEVfhHjQM7cPX72PEWSFMj8akUGAGQLrdpNjr8hGK1sr5Jzooh69KqCpaX6T8ABEEjqrrVnvPoNTKmYu8oPt1B",
  "decoyKey5": "33XAoVVzQ1STaEXAPVT64kY8hszJFLksQQTjZBM7Sh49mNdDihRgQUTV8hNRxVrZDQ5ZPzm9s3VMievcaL6z44aX",
  "decoyKey6": "658xJSJ9hvvpR7bvc47PuVD562VMWbiVLQRMcBtiNwgjjS6Y2j4F9wEWK3QkK5ePWL2HEJ1JhC5ePp32XATJNbTo",
  "decoyKey7": "3jzKJoQ1rw9cfcnTqXxJYLLMs1c77vLsL5qFi2H5xvzJ53ypyohBHU5T9abzJmMb4LGqP4t5dZvdynKUhNehgBcq",
  "decoyKey8": "5jH87Z5W7KgFahbHZJpkVZKVv8ZRr7skZa56FJKxSmBxhzgFESRcK8uaazXEURTHU9xcMzubm7KWCpmbGmCKbsot",
  "decoyKey9": "4S1NmrpyLjpSScEjoKoD2rC8LJuEtvW8jycMdGZpuhWCiod8fW3NmutctHBHBpERoW38bAbwuYM17BXYPi3E46u2",
  "decoyKey10": "3WDqL8bFWHuGZdd6kHokHFecAmThATFaNJ7GECuenq7uEJap13ELCz7zT26EYuSzK3o7TzXNAJKThJMAc7yEke1M",
  "decoyKey11": "3YuQkuEwBw6ZkZ6hTWQDhRM1K3MPKnzxULQ9VjdnQcgZVtJahiDFeUV1WYoR6hbNtLZeMoRqmyxRRQtLJUTLvB5c",
  "decoyKey12": "5FhBK9V92VHz7v4aLCQ1gpYrtEnbJzKse478rtQLHgpMRuovTgH46n9ESqL2uDqGyCPkBguun7n8eNbDaYtF9g1R",
  "decoyKey13": "43ooVt7qsdHQBDxEzfo1SJ335sy1wnoWRtYBcop1fti3ToVNqreMcZpeAoHbWMr8pX4JtgMPAtvDkdFcTYivV5QX",
  "decoyKey14": "4KNJwiVg6z9SrMgqs3A3ZkkpQnk1ZuGX3bioS4DvjiNVQXxpRoCYfGtkTC4b5wpfkpCcibsdLTtv53eN1nmVtNcA",
  "decoyKey15": "2qFC9RNw7M8beEsW7B5uaFENQYtVx8FaLM2X71paqXKQNpUkBnbhdnZdLMQsLYsvXCVrCMtWuJNnoKHmpv6MxuPT",
  "decoyKey16": "5zkarP19EVingd8HeUGrKTgZ11e4NGSH7LtaCG912peBRU5WTUqTPmLuG5yeV21vu7joMQoqJ7oToKRvFubvxpft",
  "decoyKey17": "3V2FFbZcgiAeUg8yjxAPjFtAmQ2sgpoDca684kALDFnPC6XzrDqJ7Zn7KMZxcddpkqrpwxvRQSRd6B6Qa3mz1BEJ",
  "decoyKey18": "2auTtW8ZhDcgt1jZeCyngcLvmmVab2WqEqP623Br7RH2NjKWYLZqXSx4Fc7r6WLyT7Nq2Pgy2mHG6bnLs4qAZcoD",
  "decoyKey19": "3gfaMvM67n494qhM71qLo123aY3B6JNFMtZB6yZf7zxwpNBYBwkbKtqFHcT5uP5gBaqNYPYdCBtagMD2Vuiwf1Fg",
  "decoyKey20": "5Ur3VecXTU1WuFAEFpR1yujpDn68KX4huUgCFswe9MhPNP9wzPKFeXtENv8A5HCo7ARCM2Qq9MXiP6Xu4BDvmcwS",
  "decoyKey21": "3tQZn4wrFn7MRATUyQNJ6To8BMcqWtNQACyCvs9DpejxDkMSvJCXAZ3thhFfUxU21dNBd58j44zrrTYRDCVGpJyX",
  "decoyKey22": "36KGcGV1SHMLkm2JuT3J5rHNxMR6upunjWR59qvFqsvAMnjMFEDam7PL591h89KPyHeUaN98VdJPky9ii7vcaprv",
  "decoyKey23": "3xoF9dCmPeWVWYszqpEtsY579cMJw73zjhtZAwA9uSKDYu2QM2k1LfAnpkH2nGmKGVaEW5pi36YhPyDuehMv8kv4",
  "decoyKey24": "5ZJZrfPDvmiMMZmBMMVERkBVcsxRm1fb3RwT2ZyRoB9qpshhREDbhnVgfymVDp1mvkuQCpn4KfcB9em8jmSpvUaT",
  "decoyKey25": "2Hi78hTy71EpTUMFKmYveovMpdDq6S7goATXW1Bk3Q3mJ6wDJwqgMey4j923UQAzG9LPL8eM5SBh4rDrncLRztKb",
  "decoyKey26": "5DEwCQyMc2am48K2XhfLMCM65Ktq7bZrd9FTPvTXBAKrUov2Q9Z32xTwKiDM8ASGPUFbo55mGMpiMcxm8DUrFXaX",
  "decoyKey27": "eZxxm3gFBPX86HtvEARJ5gLTxx6rgxr4CAxgUsDaCinsqDCpzUV6ijVGUasTSdExCAprFH4cAdszVZonPr6aV5e",
  "decoyKey28": "2pyjGZUbxRkpSirdVKa9yLhXp6UDVHoSAtzihN3MmziQukTckaP6yrUiCuJ5jv177zZp7eGycY3nVEHCZFWc4AfC",
  "decoyKey29": "3zYKbtVc7XpynuAMrmemocwaQnU4V58sik6NmWX2kEfbaEeLCAeAnufzneAQfoyN1vkWpmURXgdndh3xXyJLJMcK",
  "decoyKey30": "18N3cXJwq42Utb2YjZhZadHxJbPS1jvPmwtwe8hNNxECoEUhonyQYgqcJ9JbRiaEeRRMuSf7EenzRuAzFyfyQxg",
  "decoyKey31": "3JNjpeWvMye2X8B8oTxPahKNknT7tzzitbTgnjJW9hDNQ5hKzv1vS1VWUDFjvQhgthDVTCzuVPkz6qxHVJmvCrMC",
  "decoyKey32": "3Cf9wde41k5VvppTra52zGf8SvPnN9nXbPZ8ZUJKmcFXAj1EHH2ByoHdSvAhoBCyYfACEECEAr3Vc2KCiicixktA",
  "decoyKey33": "3YG2iE24dyvggtR2chVHPQdU1MrYRxyM4CT5oqws8yzMKbJg8xKA6HdHtpcAurAv83ScKuxGVZ53ZVGXzcRvzjiX",
  "decoyKey34": "Drs6sLcxTcn8i7sTuR8ygFrpVXHEbc6UD4Z3TyppTPhMsHvd5zCGNBcKjg5Bi5w7oR5wKtdYvvWqKMHfmxGyxVR",
  "decoyKey35": "kAYxhi9Lr7KNMjjKVQqZ8dYTpa6P8SgZ3p7PPHFZSMNVmr95EKvtp84KiFyX6vd7FEcY6aSMvCcjzG7DZoHxvK8",
  "decoyKey36": "2sKfU7X2WRdbftaDfkmemenmGNaZTzVwJHNfmnSqgadxiAbk5yDEsGyX1pHTVopx46TdC5GTyU95NZDCSWqTXaiS",
  "decoyKey37": "3axBB789ueKsvxG66non6r3orTiy4KDZwFJG6hVu7oKpyHmBLyY1M7Ka4KNZfrJetw2sqby3qNCTMzdeiLWAHisU",
  "decoyKey38": "25dxcXj1v5a8BAa8Wfrj9JW9CGKYJMrVvs8MjBMpiLC96dcE7fjDjAHs5A7wiK5Ueq6LHSw9jCCK48vz3ArCezAH",
  "decoyKey39": "xGC3dsR3oBHmTh7vWp3e1z5z5jzkUwPzs9db3puFojL8rqU3WGvyfWaBcPcui9tUubAuDzDcQ7T3L9Q4bnEiEg3",
  "decoyKey40": "48L6HBajqALxoF9tYSt83C2pNm1MD5Dyukk3pzEZ2whvpFT1PrmfAZMqswf5jZrTTATfrzSmRSjss4gQemvhd2cC",
  "decoyKey41": "CEzZ4vARbBr41hCKPEgrSeN2XJ7VS3u9FL5z9wYS9RLK9cptFhfxDHVkUPYLebpZjrCiPucqWq2n3w3DdtqkNgp",
  "decoyKey42": "cAC8NSb6SDDRHJVZEj3aUnSsRMGoyYeyGPKCY6CsFTams4vjUnJXUJPL8CW4q754yJq8j9bAshP2QYwwXgzSnBe",
  "decoyKey43": "abcbFeFSZ955eKkfYPC2DSniEnxdVjs4LHQcqV5ofnATh7rUAF2HoFLrKnxYwAChQbS5x9x3DVzpz2YzyvvZkio",
  "decoyKey44": "38hhtFR3KkcRtsbj3uMdvPHnfJDToDMtU7heXj2H4GH9a4miKtqXevZrSN2gERrs67VRND1QtXF3ZiAjX2WxQZLb",
  "decoyKey45": "5r7EDjAeYySGH3h1Esx6jg2heYtLMaxtAwVH8w3iEHtPAzT9SqeWYkBYhaCgkf2MqUcxbmWXgGNT25bfyUofHWCM",
  "decoyKey46": "3Ux2npNHGduDWF5HuSxFqggE28ysvef51jrcbc9dMT2RmGfEkigfChvN7Puf5WMiK6YC6yUUGugTvyfuCdJ4Z7vN",
  "decoyKey47": "2eyJ7tYfByMijsW5ksiogD3kfZD8TWvGvdpjcjVXeJ9PhqG81wS9NB2FD9QQqpLVFLfXWvWL1WvzpYNFcEHp8ajJ",
  "decoyKey48": "5HMejPEyXCjrMBAAuU7QubURDzfGFSVTUG1jmWNRYjzpcegMmUBVoVNu1F5YcrhBpnR7aAmuGSzY4faJkDP5pgeW",
  "decoyKey49": "5ZCTGi9jxzTk18x6jUKgCb2jTn4PanGgx1NXyXyJ7LGoRqPZ5GZHrmbLuWnpDb3CKDY59rWiCmYgV3bh9GKmEE9M"
};
// DECOY_KEYS_END
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