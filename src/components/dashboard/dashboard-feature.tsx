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
    "5bKtnL7tQ42Z26bRThbsauLV3h4wBHhKxFv1VdyXak6HMcbr9xQ8nu9WxK1srNx6Ygb5MndYNBTzwt7f5KWEghC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQp65i8e3GbjESfWCYxeyHfrvyJ7XqiPEWoyoxmtekGZtU5g8Ng3ShQrTrDThWLj7XeZgVJCsLEiUDNMmcJCWVM",
  "key1": "2pAEf9tyXzDMELdx3BF75hebSp931u14zQZQD6YwykXApcgXPJunLy8Yr5ELEU91sNpx7Ypu1fZ9DDjViTrs8rho",
  "key2": "5cj2n7JcENwHriwoeWYHEizvzGKhJwnNXbHVWVKcruygxXRCT5HiGYBSfveGuFHuWKafUCtdRuWxJ2VijVBqVd5n",
  "key3": "5TbPhTgHogD9YZ5FghyQsHGrrBz5VPekepw1ZQ4ooF9Hqa9i6WwVrxdbTWVPhxyEibQ3TKLW1uXfPyDV1Ekv1aYh",
  "key4": "y4zw4ta8Th8xRBTstZY9trKtr21AFMh6QVLAFrP6V6HW3A9fVKyoZ26hYsCWV1wb7b6tK5163NqRGgHbYJ8RYY1",
  "key5": "4mN7iWJUDYyv49txk5yXKY8Ay5pCVQgQ5GGnBVzCeAVAdgQuRbFic9GpK3LHWeXv1tyNqg2ujYhKTDRMFv2kcHqg",
  "key6": "4hsNNav9LrNcivJqKvjypUjeBSzAak851xFcU8wFHFwQjnqrw2spSGjx1Nngm6UkX4VLCVbr3ehb698zPCmdssJ9",
  "key7": "4Lm6GHL1Wpgeos8h2xf4fPoM4BoMuZkBSvfCiSKvR5eyviXHA1yRfaCkGXYySJGGbtprM1kZBDNXTw8MFn8SXztj",
  "key8": "2WNpozfVs8KYhnCRfxwQYtLu3aN5b2TmqhGxjrY4Aje3gqDWyBygcGoDwSXg7HgpE1EhsTTurN1XC72QrqXyzEPT",
  "key9": "4Ld1yFxCjV1J5YoJCEe3525hjMhrkLLtBZRVbizjZnVKrGXLJF7thnX8HGPUJK9UECJtgJMm8nKSJR8vizT29TqD",
  "key10": "4fLtNK2TPzLkU1r6qNmRRz6jBx1dCx9HkNAHDng2EDc5W1JuHvvMCqZoXAjSKcgSzV247sJZQXGrn2Sg85giYVgn",
  "key11": "41DZvrAaFXm38FWoWeJtiXSqMkxvKVLC15DvTCuqFBtnWSx1BQPFL5kesPYTbzZqVoAHQ4n6U5SA2Th5zqChEXWN",
  "key12": "5jQbHUGPd9vCtzi5mD1ypNeJF7JqdzZmwP5SFXx6MWaDqYcXYu8n7x6wtkQBA2MV2L7R4ZtxLpDksW9NKYqoamqY",
  "key13": "4ujuCRQaqTwZxbnLnz2pZpF9AFL5jffXaT6Xu8xQ1ZRxCrsphw1VtVVQ4UuCEeQD3n7vKVWXiY2dFdH1GMRyqRSy",
  "key14": "4n25Gq1Us4kWJG3qYALxxphfTtVNxVmQkiiHfeogoBkPgX7FA3DCXPF2ehhHUJsehRt8aCZuJfTxWJwLzndFvrGH",
  "key15": "3bKNcyo7aMS95k6pEq6M8jQvHjbMT3GSfFbWZRnN692vBHkvP8pJqqLSc6C2j6ApL4BDo7ckRygEkMJjwq19xDyq",
  "key16": "61GphgNm1RhorGjpPJjd2Mbm2zS975DjymA1n58Vd6m7GA9wBAiY7U1ztwqTjXxXKYfrRqhsvH87Kfy3TyZe7DY9",
  "key17": "3kD3WQMkoPXiL3Bu5kZR3Gk5oP7dkd2x3A9GFnaeBq3aRRxBhW98Fhf9KcJxn5gBiTA7eYtNb2Xoyx5SZSPQhYXv",
  "key18": "3SATVyB4FP7gw4zWi219jSH4njWJPuhPxtimHcP9L1xkvuETw2ZAHMY1jNYbe1skAeNsMq12oPGXMohexSPFQyr1",
  "key19": "5bqtzjVh4db4y62gR31Lhw567tgguo8DaX55VDH74BKv5bvnRV447r6Gpr1fR8o5Svzv3y6eay1DmQNQP7eq7SAj",
  "key20": "53UUWoMdeihq6dhVzRr1FicSmHxFgTghjEzBGzjQRCaUZHX8hsGjZ8eHwJjb6wncqebVFACDd3izAKcWJWLReSZG",
  "key21": "EwwrT92JEVpWy44wBwveN5GvRHyQAKSy6boBvw3f5fJ7wqjvrrWtKYbTvPx5DrmdituNRrbFKJC2YgfCNBCvUcu",
  "key22": "q5XgFiqeQUytPwkByQkfhogis8wbmKgYmGNkSojxMMx4C8uhaQbXh7XykwyRESJgzVfiFNL2S8KM69NaHiyTGSd",
  "key23": "56vAGpPrAmQ9XUB4h6whAEzCr5HZ4gZ2bW8ybukYhXpqpCF4AxK5CrrKA8gG94yXTnvHJweUnconsV7w329Kd3gR",
  "key24": "3PRnSTmWZYTYXYwfaBaqTNoHvAGwkjGMrDWubgrRAPGpwX8V6bZnhBAdeAkNFP5i35TzXgwzw4xX6AGw9NYjEBsV"
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
