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
    "3YqqDvxPMU8f3Gx5Wfq3WHVjPyrv3SRsziLvJvZPm5PFY3PFXGLhTWSaTpkjfk3MJHPFn48r7ui3RXaHkYbkz4kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TgXd1AiFcYKiFwtK1Meiob9PZvhB6Hp19VFTBt1b8Zr7xdbWcfA4XXXr5YHZeKprYYf62WRhgF1WtNz9TvSCoLF",
  "key1": "wXoi75kcLTPwXWY7QJBmjvr8qB2zsvG6nsg9njGZtH8fNfLENVdKW9NC3nAJhVt7zT9yxELafqkx8HH5QByGMjE",
  "key2": "4pvoSodD9bJwSybfvDNd2meQtgn6GDeWZxwNFcmQUekvQJ27AtWss8LebpgER5yZGFh1P2DLur7QC2UwHDxd1tko",
  "key3": "5Uyq8GaJ4Xj6fcoPvmqTdd3FNC6HdC81tVjWR3kki1DzfZTbgcbHh8JBdbU39c4X4ek7zYpscdLLQSPF49c5gxHW",
  "key4": "5N35yjEZ5iM9ohzBVuEEcjBBQXwHsFNyUpSHZ18b6WhMXex3uKmBdhgYptmRUjS1b6dm1v4TfTC5pRw1S6iE2gdS",
  "key5": "5xdrHXFeSD1vbFmhM4GcmfhDf7iDRmeAUop7mPBv5R8PL8dT42DnGdXF9vXewVfnfYUtPz6MPizBkJGuhRsMD1DY",
  "key6": "3BieuNC37Ro2AiSS93eoNVQKj4oBtoQudg8E3N2u4xPcM4GCEQ1AUM2puBahdn1EGy6hGLDEAZ3Ag7ZtmsdJLw32",
  "key7": "3syMTsgQ2R8rngrGSf8wfz5JX9hCbtpEBdb2adyXFPrtLYsXxYhRSQEQP2G8hdZkEbEqyuDPMrmAv3gKCSSfuusz",
  "key8": "4KfR9aSAboPs4NynNvATcEUACggV4zZ8YcabJnpbPKtUtPYJF9APSD7gyqmJHD7R83Hh4SN1QzgaDEZoTYQ5ib9w",
  "key9": "3xkn7SJRmm4RmoTdAeGpCpLhgE3Uq3qd5YCLCh1wtHqwZZK22u9VpW9MthveUS9tWqwZLJBBX4aXAZGp5zfMtfvv",
  "key10": "3z1mCdZCHWx5prpiESawsfyA4YfRgA2czYTa42UjAjRPguPWJGqsS12tKCK1cRvdfuJw3GPaPgo9ZMRaygoMrDCJ",
  "key11": "24zPonoAUj1q5TkqNLMGojUGPBJyUjHVM8p3zE9s6cYUWXjkaFFMM882XofF7UJVc2Y831VNDEqh1F9T52YdNaLA",
  "key12": "ZPxXXbMyhvAwJbiBU7aYtwqpTQ4AkveJLVzcXuzm7ZMMe3yzByqyVPzFU9MSmw3mw5AnwuxuqUdH1Wh4Fs2osvx",
  "key13": "3cj1h7PkvTuLCjeug9HuzsnJjmYmie5EeMajLEkegJZcHMxQmcuCXxtWPd2A8C9cen9ZXQLuhxXCmZrbKXgFbs3f",
  "key14": "5HDxQjtQY5ctHdgzYEUZ6NvNST3n2pjKME94TMjVi34qezfNDTqiBSPdA8mrnBRpYeCef3nPGJBDPee2Ut22rYFi",
  "key15": "5nVEbtn4mrXg1Q1kWVKFGnim856ewZ6VGKQ7aSbhy7DvBeyqddZ28nE1eipzE3GFy7UQxLm7HECfZfkFbH7auuNc",
  "key16": "2TV6TxDuVnmXq9HmG3sU7hGXhLj4ACf2VGxNe4PcZQRY9FKsakErpMtU47Gh86r45omLDcqpzjZuRSPKcBHJ5ED1",
  "key17": "3WPpZswMGs31rrjazsbUjE1PjG28uX4qfJEYjuo7hHhyg8Q1Fx18xZ5whywhDPZaNkebTjDTfsHRGXJtYTCd3BFC",
  "key18": "2Z1TbQiE1gDExgBKLkPdqPmbD2getmryKbX3EpnLF9LrmkSfmkfb7sMijBFgBmYiZxpfTboJ29WLTBvVEgtz5sYj",
  "key19": "2skgod96rApb1U3xQux4i1HvW69DhA5ummN3iyxkXb2tHc9x7rzqruJB5VrKg911RgVUnxm12iBuNm1gkcUhEx4T",
  "key20": "3y1ECFypZVbmaP1nnGjzADmVNV7meBck3JQHEKjEP55afLtchvCtANt7c8PTwyr1wgc5ixUJczKfQkxrhf57zCU9",
  "key21": "39x13ZwdPmLq7xrmHwsUEGSC8AiDpu8WFpP1mDTBqDfMQKcMq6HZeu4ijtThSRoVKWbfbw3ZsCW2VW15g1sNJ3ax",
  "key22": "dZkAFpX5RMnUMcEZE5bDYnb6Wb9cgBhqBGUns2Hzie3Y6RdFo3XTGZMnsHmATmdxN9q4yG2E2brF2TZUtd79vcx",
  "key23": "pUgYh2gUbNHjU6rfXsk4r6268vnuZpiz6Ld9AfA6QNGz9wqABNsCYcbwbRP8x2KHfD4JJDQQqmizpwRcLHUGXtZ",
  "key24": "3e3KMMxfqER519Qv1xvjuSu7Q1WecB5dYMet6Gkp2AW5hQG3VU3UEYb7PRd1zZKChvpeaUfHfN9h4XoaDFSzeToe",
  "key25": "hHjx23yzkUXE6GJ76of1M6urahrsKJs6KN5gBnqWg6DvAKWeubDgEuP2Q9RSsL1mjCzX9Y17HhHw41Kz2qARqMZ",
  "key26": "3mp1HvFY6CuJMY2AwS52dRaVNGg2MeTt14bizzyufRgPHjqn2o8NaDDJbDNPyeexh9apP2aL6GmtfEsQptFTfMd6"
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
