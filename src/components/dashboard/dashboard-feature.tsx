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
    "3hPHS53yazxTb5KHdVpsnfnfFmeUBKRuwCV92dcVy3Xyh1VZBKpFw6S7DzAxw2PZZMKazXy4cTr5Y9Te4y6GSRur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6HH7Run4oK2n9d27c75Qkz9Wtb6YByDczAEr5rriCDCcRPZvhkZ84dzzNMdyoPM4cNMKLVbdHGbnTMBS6Lq14F",
  "key1": "5hdXhFVf6Cr7ivQbMVdz41Fek1HWvCwbzGkUv3b949WZhA6oLwkoxYdAvSNpCUhzaFrL5VU9qZn64uLip1UxT7Pa",
  "key2": "3BJt53HgAWfyFkpfnjw7JJGpkQKw4JFBH1xG3w4MBkjUhwSrZiovmpXLSbPpfLuX7YLiqFEzgcPLj1Ygm9VRhxyG",
  "key3": "32WtcoQZkvXpDapwhfayqKozUNxWbt4p8bLdbw7E1HMYTMhEz57pUoPV3aa74Y7cH5vWx2M2TqkmCvrm7dD3Tv5a",
  "key4": "44CaftybxawuqhP6gkRVzYxKsLsJbPrQrxE4vjrD7pCU3ste5JpVeavskaFzTfBWG5mhU36cejfSGEJ1WVTU3dfQ",
  "key5": "3wE76MmrdzyhNTywjj1vbtifFwr7Vw6uNJFwG2Tx4mSoBJ56wBCZ78cLXtyMPZUrUD3mSCXNYwnjvEwX6rQLCf4n",
  "key6": "gHgfqKPahHMUDgZUp71y7YkUwBskhH7SCYDrRT4xxHtkMmbacu94hALr8z3KNsBkie6iCjB5TW7vLJRiNCiQnMc",
  "key7": "2nMT5CNWfb6gBdQUtsQPbqa3ehhpyBuMRyfGqXA5dYXKpDQKbW7JiDGtmxDpkmi46XvjWQ5FFzA4iTsCXHgon4no",
  "key8": "kJM2YmA8CpWdBcRjic7NfvyDagZd3ihmGdwBnoEEJyxyUCFKJoScJNNthSa62PFT83bZkC1MCCuqpiwpvjwfMKB",
  "key9": "4LB1JfbPbPMf9dXm1CqHwHbRga3mkYfhQRbpD97AhKMgFCZAuLdVRytWrhRw6JsQXUx652UGimvBnXsME3jwU9zY",
  "key10": "4yDm5YBHVqf3BWx9c1rp5kSVTf4i7EQ2SHbHyrJQPydT9gCeFaAuxhwA2sMZnZRFcFxvEUo4D5vbe4nZmP9qrjEK",
  "key11": "ra2Mrfayz2SojWtynqZp95xUUcm4yGfUNkUf1sVqwSABFqRW15dLhc4g3yBaMXp3Ajx1zuHNGHDg7bPG66LNDrZ",
  "key12": "47qVGirdGicWFDhwhTTLPdNnEGxirKYVubvyhtphZrRYQ5wZbYmJEQiYgTRbuQbPzpUF8tzKUMDfS9miZGU3RE65",
  "key13": "4YwwNjtX3vSBmD7npV8HVXrRtknoFQLQzFhehqMiYhiWBV7ciDJyLEVgjnZkZS2dTwQDvvcjRU19wMUq2M1Rvakx",
  "key14": "5aXA3R9vJLHM4zpWL8uZciyr2yDm33AgZjAj9BfE3U28pXtfjPpxTzmXh2qn2Th3uDHaM12cKkQQApQj44dZ5dp9",
  "key15": "3b2dfmZBPvQVbfpBmZKVsFBqq5BbUKEiKYyuPLAypL37ptRM26mJu23quaMdtDdMpNWTU9bJ21vTmYNi8fZL7g7X",
  "key16": "3iFBPVUi71Q5gspWsCfK86u8YPgfp3oMt9KH2XVAH5jgkQC5jpUL4BcSTd1SBWqmuSWhtBrkB48664z4RwRFWxnb",
  "key17": "3qSrodUdWu8Ti36qy3WwmAMiT3XSSxNf7CwemSfhtEzhx4ARrLzdTmKwKP14ceeauWevftEgs1ixbCEuFjW9TjA6",
  "key18": "4MoBX33mU4hFHhubYpk7Vxwu5Jqvmgs3mtEZwyeTMGCWWB8cG3B4qFjYA2S9GyBAjNuCVUy4AyNeU4RtL6cNFyVA",
  "key19": "29C3g85bELvfqvEj6dWVH7bbKZ51eZ9TzGz8r9vXKbiTDoRJTWGSi3JbGfw2qeDMrsvfHZAjaRZU199MfVrE8BcP",
  "key20": "VFfvbH7cVMHm468fF5WECbE4iRXSNtfHmJgLFjxEiGzQ18copXjQ5eKGc9Pe6KV15fTpycUnA36W3dGV8AV4LPi",
  "key21": "4d2bLb1ypFht3eVL8hFbVuTQJHZbJUNBxN9J1622esZwQU3z1mFXAXhiFqe9hiFbcAJ89TtA9gJjXWBiWUhd3iEw",
  "key22": "ijaEbrncb5KkBZcfTLvCiF1AkmvW8UzeAAuG1W9zVZWduE5of8MHKXSrsya7fBctFNQ9QC63axHTMmXfnnakNzJ",
  "key23": "5xwv1a4wWwcXQY1FxoHtZGJLgH2Z61BMCzDw9QxSYDwwVAufZM6qYEEqnkPASgYePSGSwRJU6hz2bU5zEcAeM9zY",
  "key24": "4SLhYfQeqYa8PLHnhBiQorDkr2TqHjFBqqcSTpU8eUVm5meXuuDL7VRhbYmqeoCJwHhoesfaB75Wm4m2ttwSJfHt",
  "key25": "2vobWNkCPAV8xFTuSmAgcw829DeAvVB4mkc3pjCBTpFvyspboinjxkxiDogsfSuHXeAhomuZZw2Zrrmwvjg9FueT",
  "key26": "66oKfkqEKALJUfRMdFcXgknr1bpsLsKdQHEeTwiRxzjr4wYZmboPKDy94wiaLYv4drwnDqw6uWoZ1EeVkctZyFf1",
  "key27": "NdyQjPG8iTVfhPeiwk4LNqaubbwQTrDhTtZBfDqYfUt6Dr1WnB2AHrmouiAgwGMJPAe7f5FTsphFANNB3a4ehek",
  "key28": "FjXoBnbtTnkCNKTtbKogKEt71uzCtLkYsvzJWbfSEk91wnbrUXUSdiDYxGmyhC1cgP7496fr47PhoYMiyM8FF7V",
  "key29": "3PmybuZ7NvDPR7McfYWycb2yMWdxGgRfT4oG1etjVyTPJ3s3K14WDrH1TzLgzKxkXG1CYhTxWUhWFdZahHuoVum2",
  "key30": "5ZGsYokBabTCbHfQWkyjwjeaFUwK7D1cSVNXTHYY2UDB1RKuhNtGpsVLPkQo7dJ4TJJv4CunK5TCnQsXJPLQm66z",
  "key31": "32Yqa6t6iyefywxd3cXyu9Cf7A2eYbk5ta6Qn6fqgeKDXu6vivzAveFfRPmLf99LdaM7Qwtha83YnYXbkEJhJ3pv",
  "key32": "3Rej1PacQzgSmxSduhpnQgafburkamD7ieacvZjBXz6zNynLxpoLvWbKT95G2hxncALcm3bMk3VuqRmXunzusZCV",
  "key33": "2dMEHaexru1kkgGaGLq8DP31y1KPQKvT4KRJkVq1wrVpfLNWHuBNxHBcZccg3HGvvHAHcch8DZFTgMjQZuTfSr7p",
  "key34": "5vLz368C6zfmoahYwnPjoG87GV2tXmboWPN81sTtuAoMkBvGFuUBWeqsvghVthW4MGTkJv9KVRRdz8mq9TfeaVzu",
  "key35": "4ZwNuZyEyrE8ghLqiLkzNHP6evPJhg9hoq4brPVA2J8JMFa48EhypSKN94voXFrfY3dV3nHx9g4H1kx77tssPVyn",
  "key36": "58c7iwEG9yNEFurdJ1bJzxhvqAgPrv244tsj6Qi1epRFdsvg4cmV5wUrZwz6AwDSrV72pDcPSm9hjZNpHcR72iFT",
  "key37": "64TF3wDdqv6fkU8yapmRbuy7Q1fPfaXg4bVaajVVSnwech9TfcQnMKXnMpsc1DhjQ8qDPrXLoQTfnnuZT6cT5F8h",
  "key38": "3rNz8sxX7Mvus9Jzz368ixNF6r6PSVMKGwiWSzjZGuSSD62fs3AEgnhNW3xUfTXXcQSLC4MzQceSD5gVwyoa9PV1",
  "key39": "3YNkmyTNNSW4rheSQ8s8h4cGZugTcko8KDb6K53iLcf1Wq3BuYpKAExwRZV1ohGusiJk8yFtHv95ndRRCvq6zRRF",
  "key40": "m4p3EVAPE8Q8KdotUCy215gZ8GM5cMZ4r2utp1HNEdTq6dggR5zQeiDVCkMjRYR7a4AD4tsSALNh53LHwcUCW39",
  "key41": "3WcnueAqZBLUHKujaceMNVJmTDERq9uA76Hpy35SZb2qGhEYr1VoqiHfkamKYuRMZKw29YLkV2ychQ5yYsNKrYdV",
  "key42": "XK5q3PoxCs8z7S5YFegQfMsZjrMb3q9ScgZoQYSmhDC2t4nekHZiTNLUommJVnJLxB1FHkfrNUdfiofthwTE5H5",
  "key43": "ZHevy26udEA6APp52ATUoJeVgceX1rZr2A9NHQLX2A7ZC5qKz65JCsz1mpsf3bYMN4CaysU2SqmkkqC98sLaR5h",
  "key44": "4VgfmX8RgWooVeRub9ZthHnPeTqcBe1S1r7NZrf1fsKD4YUZrfS8o5pTEo4wucJt53WLN1BYPBzhAe2vrPvWc8DE",
  "key45": "2E72Z2hM9PVYuTYxmMmXKz8Dv4UndDKsxoAG1PVkh4WEG1YjEhpvpQhYq5YHrf5FNUrfdkGx5LVMyYFdP3xHZY83"
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
