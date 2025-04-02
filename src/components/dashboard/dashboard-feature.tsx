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
    "2hBNkksJYEjDRhQFUjbC3M2T1mtqErPZef3FTzxXDKvCzjN1uEd2Wr5R2Qskqug9XQgdWTTnLdZ8wt5jEVzfLNzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92CMFU34RPFH7a8QKHPbejvG62gDLJi7XNRri5tDiDmkb6PqK4VZz2bocU5DHqoGLXx7ZUHRF4kWSeWunCQnGXW",
  "key1": "22KYyQDiUJxuFhrP4sq5h76wxJwv6wS1Qxzz48UKnWbRjKrD8BEd58DnAgCrSgkuEK1WvW7GW1njTEE4h3Rm2Eit",
  "key2": "3QK96zCGefMXaS2imzi6bAtzNvsMwWDZUH7vY3RCWwRPaq3MfSxaJjmKfZxY7LXf36x4jbAeyuV24UokEAq8htM5",
  "key3": "4qADvzz1tYpGw8vzMr1vtY5s7EFo9TaSSWKBVytwn66smwLGQ4YGNcUHkGdtPeHdmGNSsAC3ToTfNmJXxRcEguAb",
  "key4": "hNcT1m37ugfu2N1C9EqJmrNG4Gg5mbs8ZdkB2eHCop8Gv6SFSG2Qi8ZiKfizWCmgPPVFZvNbTT82ANaz2wDdbZe",
  "key5": "46SDgxF8nSTxx7Aq5wmo6idzqKpkntw9SoyVMogmbZh4krSkGqSiY8xZioPG17kuDLASmsk415xoR5RpaRh5zo32",
  "key6": "5S12vY6tPpXo9Gs9BVqeX2nVtqykZsEDVkBw7GrFDuCpqM2SHq2nRFs1KCx11AHZdUcvbFmqKha5P1WKYFv1EYvC",
  "key7": "yNYvmk2vaP95s2SeVwUv7bhvrpMi1f8MXTdDi6Hg2i3Howkd8KPWcoii6TPX5uo36D5NqjTmrJutJG6pvbGvMp9",
  "key8": "gtedmJw9EuUCRjVNjbRAhbnUq8MeKcWqSQPuQTuBpZa7c4iG7L5soTY14M8Mtis1FFawiavuFANKDTVidqTDVaH",
  "key9": "54pqWEhgYdmZfNezS957XNxr98fHGxXNC8gbdrRsUgDD828rHhNX3RHrYQk3ofNcdShNucR6gBe7YhzygVfneHKg",
  "key10": "tomQfCF7G2oJn1w5w6Y5EVMVH52TxTiC22R9Emfd1u3pjw9KD97HNJSy6U3dhdUa2knZ4TNKadjz3CyHoe1UeGt",
  "key11": "2abCEF39x6V8fnWZGXtU67aeZ8WQUNDat7PRCDybEHMQihXBA2x2p5UyenqttRVFqBdDHKqXNJCSamiMx7WtciYd",
  "key12": "4TAb6LGY11E3ftnYgWpCp8Cn4cGDVRPHgbUTQDK7LYBGfkexAK8vhimknpkJeJL5wg9nfijgwuybJti4YGEJ9HfN",
  "key13": "2eCte7pAF4pSAaYURYrMS6pSrjSwS1VxL1DioCNLQYQF3QAi8ehHWyabuuPN7QpggetafANnnqKPadoA1hMHfS3r",
  "key14": "2tRir1buaD1PMbx2pBmTtBnB2TUUfZF9xUy3MLANRCeifuUjH4YrjCg1fEFbgNhVdb5784X1P4Mn16hYDBEmfJkC",
  "key15": "2G6nBiMFLiCafz9o42boaZ7CBu6zi4UmDWdSmjE6VehygSDYKWJHTw9LAZornQDLGgwY16VDNLVaRpmg7HXMrCtJ",
  "key16": "31XrhvBs1xhJ1H9AnReMTxwx61adL7dsp6hyXTV6kGA8eyNVSySQcxhvpF12aKdWy1dhJii3z3y2DSoNArn5A1de",
  "key17": "3n8z6meycqtJdfKwCzH3FgzpY7ruZ9GJ42HzKMhMzZLHSVZqVxQQhocjjyHhGomqFDd6LCahZXt9RzaB5RRiabvY",
  "key18": "5eA3uTSCBogJzCjdGFf4FfiBHgXMkCEsY7u7iCgZkDAJEWEzCYsSYiSgGjcZoCDJkuMLzHyiTeXtEggw5WzVuXZi",
  "key19": "4JMkxYqNi2AWERdLzByhfEF6CHFB4TZAMMLUPUWmifqa7sQYNpyYTzpsS4yT3f72cjTCuAaB8XEkpMLBfs3KTuHp",
  "key20": "4UMfzujpg85BSmSjGhwhot6cprW84Eygz9PGL8bLduGkVqMaarrMy4RAXLJtYvaNiXCq57asenaMx1jnPxtKc65G",
  "key21": "4iYWcJus8zbyYTP7jRDjQ2qi6D6TyBhuLFk6Lr2KNtwaqdQXwFF2zLVRQcwvBgT8peM11JT5eWzYBrZU1fcWU5ua",
  "key22": "2uRVSb4Nck8YkNVZHzdjALzxaxcuU282NcDiB3yGALZD8Nu8Gg1qUqrNArgikCGvuR4aP3q9enKNLTX7za4d6L5h",
  "key23": "5fXe1fVYn5Yxin5ZQyd1eSfmiUeFkgsSaWhXyBFTLTaWMY2zphdEwZJbWaThywEfpH6pKrS9bTnTpzaC571aG2Va",
  "key24": "4g3JTbaQBrqmcwncMo3KjL71rFqHjgwcoXAgpEhftmncgH4dFixsNmjLXKK9bcCJ9UkDxzsj5YqdCrc2LrXmyuKU",
  "key25": "3zKwJQ3VYGiahQcHKJ4WKXZR6fsDsoeP3dpktPxcwEvzzhALxXWww2cFCQoTNjzNfHG9MzrLAG7aAtsuMeRUMHf4",
  "key26": "5d2wR5DbhV3BkoVPP7tRT6xt2Agtdn7P2LdLqp1Bm31xZ7ESjx34ouWTB4AQsZmHwnqdUBtrKHjPCF7NU7MsWqyk",
  "key27": "fFED1JhmPsXGQ1HkAFJZb8qQAuxhqQqS8U3MB2g3dpVM3y6K4AAxeTWiXYpf6MpdkjDKTSZuhMbYH4ffdYvje4g",
  "key28": "3UqZFtFXeS3Q8Qkym7NhC2DEaoEZg4yFmAWsiTfBG2bzuhrmc9Sw3VT6zGkeWWKpXgwxjxDETKNqFt4fBK8hR1C1",
  "key29": "4D1QBS4daGU1yQgyDY5ncgJvXi6QBTu1fVjBtc3EfoK9nZ2FWgdTGj8W7z9pEg7ahuFD8LpkyTSkbb4xRWyhung4"
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
