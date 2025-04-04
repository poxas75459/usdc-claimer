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
    "4YKodq9Qtfi2FUZYR5TnsdEJ2EbvrpdHiQT3xdNWJf19b3Qy66imj7uQuMgiSCozk9pGXhQQyWTLwH6C8nK3gyxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptyfS4zonWRDSuyVEtR7xyjvpBjaSeXv4gpR3XVje935KknWB89FvgvbPpTyXz8gFKqcUXd4N91TBEi83VTjCru",
  "key1": "55mfGMA4nfYNfic2Xz3yApDYBYHmR8Qf4ERzHnrkKoHrhqpRVtiMZ8MW8P18c3mj85r6K8z1hLDWrS7in8ef5hzA",
  "key2": "XXuGmvfdAHDG3tQu6Exxk3gTYxzwH9UD6E8mE1ozQszFv77wBX81bu2W11xf3cAVxN1SWtNLjSJj3GyG3mNQ7Zh",
  "key3": "37tGCEeaSX9ckjf9A6i9vGuz5Zys6mYqFyydMe5hVx3Sa262TPEvRENaSSUrKLxAPvs1KJ2e34X74a6gMKFPv4cq",
  "key4": "2sz8miT3wf43MKfaLnapXjrb5hk6S8cRujxqLAJTj3kuoeX2Z1zvNwrCnK5FW3imj6EXutZYSsYkoThbsoYM5RES",
  "key5": "4iBe8kzkgD5JXNPWNbKZfTmcqjKmDoJeYtRz9ge8KgDjvAC9AQfCoR9kJAYVnavkJ5D61UgYQTzpYApqPTkncHXv",
  "key6": "5pfKMZpBuWY5TtWDf53gZXQgKw2JoEMaRHdcXL5ze6LfdUMrNucnBcGHaDScAhThBUzjWo4if4wYifdQHvcudemH",
  "key7": "3tPbQgZ6eWA13mj2yYQDV6gNWdJ8WaLd1w5L2pzukCe6xCbAkLMsYGsnqFtzTpbwqoFXS35SLQK9jGpjtGdZ7XGv",
  "key8": "3wCVsrZoovHaPgrGcAfWt178UdcMpXpUaxYCANvMh2GHgrofEvS5A4PG9yfKGopCunqehHuWtrJqDggNPtLkKfLY",
  "key9": "3BpU7tWFPZpmehqJraeZdPabm3P4en9SEqjcX5hr5YAHsPVe24yVHhLTDc7JbSZWZhY3LaSAcPqRgd2oSAMbwnbJ",
  "key10": "4TfdTgxo6r8rGfzCQmioiE8iZpHz7TGRJVV8cthxBcHqJrkVx765sHJojKfniU4v1YNC7PpYaNp5DB6UrLED5RoG",
  "key11": "2GNTwKogT9DjirGxpHigc3xv8kPRyd3rUz8ru1Ht6cFWUvb5J5wzgNWT1KBVbHSfa2Q2qZRMd1HpEtQe9Q5cFey5",
  "key12": "4g3mvRZKPZr7XL5tVFhpBfEani2NiHCqah5NdT4DH9tuThMieqjy553tR3VALHNvg5zBASf1WfKSe2idCCF4TzWU",
  "key13": "4vDvxKHHCwRFnfvFNEKnyDwKCJngZWuGTcZNmhBWVCeZHG7dEsTS1Z8g5Mxmz5jnLj2GFR4Wz3q5DXPSg2rzo9z9",
  "key14": "2m7xnKKwoKpWt1HQ4DcaWp7UP3jspfgQSNU1aiUXhnHtmTWGD67qUU7jxNXPmzXgd7mUSqc4KoSB2WsrDGLvswMf",
  "key15": "42oZz3CHXM11EBTqbtgAjzJjb32tZP9x1cT5UGbDGGsbNL37oHhswnjMZvJnuNYFWeskXWiV9zPZnnRXK5s1NwWr",
  "key16": "49EycmAdmgPT4YquAdBqj4BV77umYEGBQaYvzZfms8fshiQ4At6UJtUKsCLqkLFeyirnWC9ypgHLSyW1JVJBkMJE",
  "key17": "4Zn4fRqFUB68HHcyNEBuFYemLKWaHgBSp41kX3JskAXjVB72XqNNEVJy5VWqJ7KJBywPrR9Y6115mAbhMFCeJByA",
  "key18": "4pZKeSDP3gwYavnq7ZWPDa7WbVoThB59SsiwttriExxnvxWdcT8qBbFGBEtVM4vX7kEwHGRjYDrA4Uh81M6WTKUm",
  "key19": "5PynQxbJM2NVHdorEBbhzC5mf4U6fbPFmtujmFUquMBK5PRdAVnPcNeWit4kADNkAZZwHoWUPL2j9gtxfRsTiSkh",
  "key20": "2nM6V5hbXY23zFUknoJycdzFdp2b7Kpd5CfsBf55BBcP1wUgiCxZBJ1o3xL51x2D5LFqQG9krzpGbhdyxqBEwwBa",
  "key21": "5wg1oHCiuHMrWvGza5Kjn5QkVuh72cK2SCwAQpFC4R33VNyGDHdmmQnA8H8gVLWKgHPqfWosHwu7K4dGLAvoBdM5",
  "key22": "KKo5R7oWdDahRwixsgktkGtxgpDSAefmAKCfhWQ9GyxJ74dfqvFD2C2Lmj9BxhaVeQJwU2yQS3CJxbYrX4Z2NPG",
  "key23": "31xGoxo9SpSPmX1AxUQJmBdxfLokLzT67XKQ5yGCeX9xoEsj1tuvwJnLx7bGGcdpfjQh3xG4f39vMLYxGvkig5co",
  "key24": "5Sr982mLmAVTH3t46tf4AojUVdQVeDhv2Np3dCfcN8UsiaCsY1ceFFN2VTJn5ErqjwZkgTCA2ZYQ9eskwNKDQV1Z",
  "key25": "3QevJHT6EhvMCCDMVXgonEhamgf2wZWvmG8wrqRx75J2PLAyMM3vUNrrqJ8JjGs2UwrtMvf6shUgq9ZgqZjDBQ9a",
  "key26": "4hi7212x8qTELBkNYf73akueS5Wn9jusbhYjUmFUDmM9t9X23NZETKHgy393Vkf5e8rmyAC2HzC8vSmht1K7nMZu",
  "key27": "256Kp334QNWu2BkkYsYVT1CznCu6yBJjDZaL9cyRa4L1JtqJFxzK1Vj6Jr9V43qQw2VBmtNdBz1fAChESCtT4CmQ"
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
