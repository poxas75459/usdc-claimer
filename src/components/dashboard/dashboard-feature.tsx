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
    "5cDQHyFC662mtJybfncvDFd3BtZ7tJy3oW65kMAGPGTrgLCpgVkWAeQBFjoZnxxyPc2LtJatFWqvK6SJqjhurxFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FiCT3L2UGVj4qjbm32cqHGKhJ9LnKsx7XSN7gCSCdxvEzNoNWk7n1EcTrEqsbqXKARCq7jxbmZRkSVCxVXUkXoP",
  "key1": "5hm88MRZvBBeR27NkpYrEy8mLAeM578vhR7SJNBh1m4xiJVDiEpP72C6PtyYkTShQfZGPvBRZdBJi7yp57h4BPKL",
  "key2": "37bEDWfw5ekZHicJvAtH3X69ygXtzyz7gtCHMUKEgaJfebvxky1THQ8tifsKrufM1rwUStq7wEWN1PCJACWMYhBv",
  "key3": "5hxgWDRw8488bs8kVbzFZtfNsu2DtxhHsPz3MDvfV8cLot9usK98aWzXper1KTszXJ2t7SAtdpEVR3qgPcCZmwhM",
  "key4": "5yP31bTNwHdmc9UX4Mdcb1ZVidq7KC1caNn6Es2ZNbkfGzVh9izsn9YT3jVb935UuCgppLHsGG7vJ5B8YeYdjGXA",
  "key5": "3CkW3tuhLtKGHXf8rRJpRoDqhYNgTYdzJPJbfF8CnDJuapECsApmpVNFFivFoNMJ6HkX1k7gAaShMy8UnumEUnaH",
  "key6": "3r2WPtfRsTjYdeQKdmyHaoMHiKLSuX7w7S5LN23Han1tX76VYmEde9TsomfF2N2ZYDK182nWjppf1FCtbzSh8yTE",
  "key7": "3RjALFdbnqH3KL82APMfvv6jEuNP5QcefHRfBbiRTP2LUiBXx1eFvQ8oyxYYzHqq69JLfo3p7gV3vnYMa76X2yAt",
  "key8": "2vgvsGAqa51uH7PnYowZdY5w9Z6UXgcGyxBxBZW74EmzYHJLotZ9xdVKz1cyZxzjdYMcekAUFUr3ksBy69nH5aUe",
  "key9": "4M6TUH9ALg3ZgZE2TdeagDefdCJVTU1QMmUM2Lz5LLbWrLS1efbqP4zU6eTBzfq9esRZS6FCUXpQVDfJ6VXyZ4MP",
  "key10": "27vHe3EQfmLUWp1ghLuJUbDJpZEGmnanJqAzDCPb3yLcbMXtrjiuvPs5jFvDbc1KMGYw6exyCt95RKbJoYys7pmy",
  "key11": "LLkx46j9D2HMe9fxDu4kwrxQLgDtWTdbpXQpxg1PWCgcYbLgKj11AZfXtbDQNRY4R5EtwiiZzDqhBEJqxnzgFWz",
  "key12": "2Gd2kASL3b1QXLE1Gyn6kae6yqsBLtCbQcKCxNqRuDPjQCdWKsR4y11GFdvnKKV9iBhZHE3yf4etR56bA7p2SzDT",
  "key13": "3G1RAqgahvR7DHftq9eGjXzgwkvYGkZN4CoenCmzvrDaFnCHepG8mDeKuZA4aiFsT77uCuQVepGt9fjm3HmJSeh1",
  "key14": "4aNsKxwMPVxgK8GS8YfKZSE4stJu1Wx2r31KgTPpxQfEmgShynZuVfxPp1cGYGSStuskExx8ZFVZ1q3xT2Nnze18",
  "key15": "4DRMqu9Cvg6d9xGFgnAriuGTv6SSbNLME7an4xE5F1pVVmmKXoZWY3CcBsp2HjUqj4LKe5rZefaZQtqTGSPEF5WD",
  "key16": "2yksbGeTWHSw6GSZhBu9aMerFC79xZfJK8Kim5S27dVSMKzThAWDv2LibrWWivDQ273AxuL5h6DroGzwe2NAHU3a",
  "key17": "cC6Q7jWETK7EHHcnmg36sXqBdReNtTPhctoxkMdQ48n7UBXtxjpLwtpx1W58N92s17EAJSod4A3mSUY5zTiLEcX",
  "key18": "5sZVMLkc9TWxfzh9KtDRFoMA8E5rPZ67pTrgVHQfpk2v7keY2M3rbEWy4im17gD4CYoAQpJSxy3XYTK6pezumzK2",
  "key19": "5AW4uin9CnDKfRiGXoGsoFLoyKCntiDtj5LEmkj5EE8HyHqokQ6sX4UXEjEtn2HCFuJPi8nRus1Yibgj6AxfM7JU",
  "key20": "2ViiSZEsPrCXBKX3uRQKGL8kHPAh6kJhaBCe1LtpsPEYY8VEpmL4z1XHJAVwQAj1xrNtLCgse6LcSS4Qkg1XhVmc",
  "key21": "5VNL1mCvFUR3ASXS6V4KqSBdWenUdtFxcgPeD57jQDFW1v3FzoNsuNB51HqyzRvHf5ntrtCCSPTVJ4xPB37Qbow2",
  "key22": "5Gvi7sHEvVuHpYYk7PLpz1iwtznn2XdK6u4ze4wj1c8ZRA5mTU5VCmjEZYs1ifJ8v9rm76GfFSmeMWaZBtvPkRw1",
  "key23": "2sHVQjmFrqAR8g8zW91oq6ymHnJe3WoPXpz2Qm8JLj8dgvmE3eXUf2uF9LApKnYE7DeCqy9itVsUjCCQMWtjAB3u",
  "key24": "2wYeARrjhjFx6awvGtjMTuVhyft1q5nnL7kdcsN63PLpvtmABPwyvcxS63Mr2Yto1U3vbpYWEQtcLLQ53zqNLGzv",
  "key25": "4eWCJJHvnwiFz9Af23gbjaws9ACNuuCiGmF9MDbeGgbKtqtEYzXXYWDYg1dgiHMS2enypcBgPzvuf6dMy36d5Byd",
  "key26": "4vCFuS4g4YH4f4HtiEWD85YnZVgg8rrPzBt4MaVVQu557Noz7YNRBV3RCdtmz4zwrAeka5egqmDLcAAuPu96uCc3",
  "key27": "5WGqqq5mEvC6LxeVbp42TSutZtnZfD7gVNRGrsMYtExL5Kc97g9yBfUdCzmpDmQN9iKs6WYGc1s2D7Ex5bRxVTfZ",
  "key28": "3p4WfQAC8uqe4SqDGUEXwqG7AU6ZKHcUGk2nfM238asK69DtUp2BHyhi18FFbrdjWHoEw9cnBe1H92wqpLyunuJX",
  "key29": "rsfnNrVQaSysj5BbwjaE5gNad9eCghFfNVsCc12hDxQ3rCvZg8GpniPG1irWn4GY95Y7PBFMn5cwUk5kPw28zoa",
  "key30": "wwSoGXuHpgTS3HJBrv7MmNUdNRvm5AQTLwE2XTSWicdGuGpKMRhReodsnA8vPFFkk7gXmvyPTBHKcDCEVFDFhLS",
  "key31": "4JfpjRuqbxqFYZppNnmuZ2cCaGsjTubX3RtTwwvXNHJzCUPBrKtCPwVe5PLaezFhpiGs4vTFtEYvEATxxkE7AgnT",
  "key32": "4SDb6y8GDPo7eAj1XHKMuJdJw3c4ndARxsBAXYiZsMU72jqWwkmLtJwN639NBZdNJR87ST77KxX3msfQVcY458Ui",
  "key33": "FbGhUETVSYbeLUUj36n81koRPDpkKn1KwfRNcJxBSDGGGhc9LeHPdNkFykpteuDi6amVU3cBHoTnHXs6ARVGAPg",
  "key34": "4RSqfXq41rEY4rLNaCBw9EVk1aVu1ao18rZtigx9chDZHA3hgYRvALJcj3kMPwE9x6W8VRFk2D62B6UG9YfuBtv1",
  "key35": "5PNwa3s9KTZnXQ2JwvM1VJ4fKgEuqHWcJyRoNSx9DU2GQPu4AhRpmSLor836Mn9o4UEtKVSeHpNtWj2KsBRPmEUr",
  "key36": "5CAVZCDY7sqKAYueeMZi2iw6mEb3i9bqPp1cd84hyzof1ejHVz7teJZwyTNSytTADFFXK3QH3hZSyBM51ibic8QR",
  "key37": "3uqVaNundM7LYttbvwc5CtfAm2taAxGRCeKGtATT6qsDq9iAE4QuxWjUymPP9viv2Lzj3Wmfb9t45zWj7zTv5RCi",
  "key38": "Jq8vLZTxxahyavLgb2Lii179f9KBVFw26BzrqctqXsCv97hCvV1CVvt3Av7YhZaJ5pwKdfj1a8D61q9e1VWQUvs",
  "key39": "t7wKDMDzsNVvuKHmPxX6R9XiDZqXA7wZjQJMyT72w2NwXEBjezAGrqHGxzUGBnhA2zczyg3EHzX7pAsfksJLci7",
  "key40": "39k6xgQX9ztPPHekQA4sS5fVw6qxA2PzbSQ6ioxF3c8aBeWqJZd9PKxP83C92ficrFMnJUP71LvCCXTwGSHeW9m3",
  "key41": "Ush6PKvKG2Ek36jLHrxcG9fgc8xG49RxWbCxnH7SoxAdunXec1J2HuM3dPENhbyGRCMZioDvHZBmpPd4xY9kwbs",
  "key42": "3m9UCm79XeeUZTGFXkg5qjcLhggzaXA96aPxokgArDpqqgGwjBB1i9S6VvvDk9NrmKqWbAteex5QvkX4g8sUuZ4z",
  "key43": "5hwGkr3UJYHZAMyvttmErUeucbWJc5hopvJUJVQUdiYFm1MgvpMkwBQmExy47tVxDd7nQvLuSxgYV7aJuh4ZBz77",
  "key44": "31tDfp9LR4vS88foNHbeqDw9amGSyAazDyv4GHQ9E9wKxbq31tqqdmjFFeGcRUaQxnqbtd1nofqhKxyJ9prvB73G",
  "key45": "3BrEESxqg8j2YYYKf4krNgNmmVaA23kiq6fRB5ooTD1Vuj34PvWFiPFZdcnaGovGQvM6LmaMPWcUUDArfq9LHjZR",
  "key46": "3BZ8v1TgNmGVQHG9FLTBf5qcST8hZdvSovrusQHYai6CzFFgTCUtN7Dbdpz2KgFBL7Spfsd93Hrv3i2HFbBw99J4",
  "key47": "eSMdfMN1aSWSMduXutMSiBrZfY8mhwWcKMj8bpcgJTqFoZQXwbSWVufguxcpcX4nmnP48UobaGaCJ88G1zbaJPc",
  "key48": "wrVkEHcB7YQZm58Fdb2g9cWY99E2HdjVH97PwG1M5q3Tn2ouUdaBpbUPuXf4ibEAzJLc42QEVPxpJWaphM3Bud4"
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
