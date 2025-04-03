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
    "45dE4Jn6snZj8vd3YykohJg8aHdk29nKpD2ZDFkhDzz6G42MnvN1NQPwXy2uZKNHLx13m3Lh2g9p8ztdHqfTFLSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44A2nBXkmLpUiaSVk2jokq79pJXVYTQDKt91zECDy8fz72491Pz39MiG3ha4FqJKVk6xgxweDUh6hRChArM94E8W",
  "key1": "QX2L2mbStHoee47PAK1Vk7iSHpJS5x8ga4sHFE2kdEaY6dwAU5yUJw4MHezDPmNMH3du8oLRAJxVFYwuCqnevGa",
  "key2": "4Dk6gn9K42K3RSFVVwuyUb3RWNmrSyRjGMx9QNWVuyQ8wYbQCyeEXQowdFvrgJnaSjSMuR3Gk5ybjgPM6jxLEr7y",
  "key3": "51cYJKM1zN4uvXisR1JEDEaeVkWZ7Tn9Yq8PRd8Uuqdwo1AvEj1kYEbmpUFeNm8dog3bJaRcYNrmkLjc9ptCqA5b",
  "key4": "2H1ro1x7LeuJJZVWudTaGEjH1DoFDWUKhNU2y4Se99r7KTzBfybKXirA8iYigM1bTqVp9UVuuHEeE5bdXhCdjkp6",
  "key5": "5UWezJ1ekecxXZ65Dcdy3FXbnDmk1N63T5WMVrVBzZn8UtTtkK2Wi6sGQUJeFYLZCpcNzDWKLX3vpz6T48Xdtoxq",
  "key6": "5dWSsv4qMCHyoC2e3fXtRHL3HbVv6CjNnyfWszEALDD7v1VcVwHEQEc9bnJZ3qN7vtwKt7E8Pim6HueC1NRJb9Dx",
  "key7": "4UqKsdyo2X5cjXTNuNoggFMnrQ8Y8K2Muk73PMtHbpHYSJHJWnNrPtYA6CQPvLjN2DruyXrm9XfvsMryBZHpB8Zk",
  "key8": "34WvnhGYwVr39gB3sCCFugjEt2CvAjwEsmyEuboMmK2aqyUiNCLock3jQUDiiqXbkcFV1qw9tmVE7xYTqXTUxDi8",
  "key9": "38QxPJEUey6W6z9CcnEbnyi5tEE7n9HCPkhFXXdwcPD9rKZE9Rnr3sJQ8zH9MrkbmxKJxoGPXw5hweRaBtepybZB",
  "key10": "4Ua3vuEbt4BXZNfV3VUWCsWsrC8zycgwQCMj3FPSSiTC9XCuavzNcxrFEjGhLRYiJWyEHok719xgyQz5dWR5UQc3",
  "key11": "2AWRxN5sJeYXHAVatRqW32j3JZ27mgb5ReLSyVhkM9e74SfoGk61SDZUKK5D3SBRP3HLdvMBbPZfhT1aPsp8oFPy",
  "key12": "55tCyXX6ztsboUcpvsAGeTrSXT9K9pnV3EowJLQRMhNZ3YaTdtD6TfWhvXpvgzE1uT4KJeD4jVT9jRHrXEm4V2jh",
  "key13": "jAHTo415E1Qp26Uew64aTUanSoPEUyw4pxHzz9Ssk6ZGkmwo4wVN99oPBBeHqMP5jDQ4aQhsjJbmgWtbs9mQzFw",
  "key14": "4y6bkbCUGVq3BD27UmWkaBS1rR9qKenW95vtrDnyJ74RncEhQVZs8aff3JWpsauC64qhpyFut8j7FZhqWbg88LYP",
  "key15": "5oz8c4F8jNr2U5ivjFyHAoc9XQBscEjmzL1nfa8HZernsBLXm6p9Ni5h74nrbvQy3a3uwUCbjBe1YxGxZs9wLV3d",
  "key16": "27tYpSuJCCwdtaXSYLBvLNe6ofamNqtuNTx5YAKaPvFUbVCffPZd5ETzyJyXepHcy1AYS69CwvGmYTBYNn7zuQvt",
  "key17": "31RK9Dqj4UN1gaVZ4RyjJnduTNKqP6ZC7E1SEYByAT8scJSY9KANmnQ48rvvCwAuxVZLcsmW4i164SwGLacLEww4",
  "key18": "3eXSx9Cm1KuF2WMqXN2EVxtAhZq8a3Lgc4EbsTiDGrmiCmgAeTmZpW5Uvp57HUUvr3QnVXmB68ye32JMAwxfgh8J",
  "key19": "5jXMd7fTjBPt4DtHyjZ96vdphmo6uX1dyxT12mDS4DxPeyLDuHzxchwCVUr9PQptPbL2a3HrqSXcGN2soiXQWyUF",
  "key20": "2QEnjqxvbVfcSH2DXVZzcABiyxfpxnChgT5jkuaY14aLGEHfnmt7XATETL49uqVmFc1SmjGWqBXJE7i7R5UnLMCy",
  "key21": "473WcWnud3bowEC6stvapuJ1YouimZn11Eqq5i9C46x5Srk8jGhaz4pniJ7FM9c73g8UjnCQSFuw1bFN3S34zdC5",
  "key22": "4qSMTwJqMrP5K6RJEcw4417y3WXY4UmgtE9b6hyquncfNhKjAJYTgPc6Sb3Kd5F2npPz2JZsL9D6fCm9tJXgMxA6",
  "key23": "4NxwJcjkdMkrwmTBicqixf5QDd4jGEq5G9Recexhf3tPCzjwob9gE32ekEXRyYFaZXTCgdRJnNzXuCoFVy2AHU9L",
  "key24": "3tZKy7eB1CCrzfYPVwPwVK2NEQzHy8HfE6Soj98DPKuvEzw1wUVLyWdwpUVTez635xPbH5GwHHZePwVehuFYGkBc",
  "key25": "t8CS5ZNuCFEZ2iLgXeYBUmT1ubp512skP3PpfuRtFxRFxb43GFLeQ2UPuj3e48YDjYwjAANx7sKG3MY5MRkCPuu",
  "key26": "2DG9qSctqEHXUgDKFPcAGGtEMXDKBM2qUYr8gbet4Z57UJbBeDB8sWaPtAX8bbHxeaM9R1EqbcvaFbHsTwmQJnJv",
  "key27": "j72Ybyuwhrd6EeSpDYuHBPSK6C18VKXUW3VLYhEtimUw3Au7qaD3GAos2FLWRYsrzTFLKe1PN4rhaWZvr6Zcg4z",
  "key28": "wKUgZuS3RKfK1x6wjqQ8ejFJ8BsKXfnLZuUL8jK1BYbeQvgmEmg4peGidU8W5uTLE1Y8ME7CejChmwho8ofvtVd",
  "key29": "4rgyPKVRs5af419Uoucbn6mJUQZ8DRPJp4dGEusJ9iykwYJC7UHgBXg5jHZuWNUyDF3jxhzPHPFBXHFQdjWKnV9a"
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
