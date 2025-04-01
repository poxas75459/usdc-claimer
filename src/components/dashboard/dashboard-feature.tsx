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
    "5Z1Wk6VvZ4w5u3Hv7kxbXfvkoo3nMC85Upgj7wSWYHPvdXvqy1RcqCWn4YfKht62DFuQ5wQeXArLjbZfD6QAm29k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRJeZcec9JywwFf74Y1mbCFWbBQRB55n3v7WwfyZg2QZPsbyxYUjAWRMUxWudzDQjUw6iv16V71WTqwrGXi6ZZT",
  "key1": "3sJu6SNmiLzBKRU9LQNpH1tQuTnDcK6B1RedA1HEJQshL5dNWMAyPLZNZM3WEcmZ36jJggeA2CMo3nHfCTNitZXK",
  "key2": "5j7EYqMwoaWPbsF51prZ1ZHDgsLmjVfg7Tyt91mtaSFyVUaV34MsSkhKqAVHjqxd3ykXThkxgtdAdQ61yMma166q",
  "key3": "c3aud8s36pNrZ8FiRi9UFHMcPSj615TyKZJzDk8LTDCFyVCv7WYJsv1sSpG2GaB29quqRRYsuX51LnAL2Bqiuik",
  "key4": "65gY4gcTFE1i3w7qwo5fA9dUCg4w5h9zaUjDA8uQbgjinkjXPZdBGCCGzgdoVXooBjmaTUDjeDuMGMtnTWKEUvXA",
  "key5": "2dGkVKTwDUCWfxWZ3KeLR779C6KpuLueegPbuGJmakYg3ktUoMkW6RZaMguBcgsvU99SC3YuedMBreiXsdvwM7S7",
  "key6": "53fxdBYsfn7AmDJTFc87GXgw46Ymj6t31DoMEak4QnbSSQ86nxXwdN5ex4jbExWgdGxRZ8pyJLATomQTjHoDctXw",
  "key7": "56PorXRMYDutb2yogBzMDXoxqka1XWgckQaGv7mpTR24Q4yKnzBVw5eZbdHLNg7gVanyu8YVF2MUuVfTQxN6yrse",
  "key8": "269H87WqzNpAAh6ftk2bsNJuNnDvsuw2SEq4VGLM73xS3FpeFTXb5oWXQ4umZZKRyQS13novRTnxqHFpN3div69i",
  "key9": "369wiQ92RYtK64hRhfBxgnhhE5uKPkSMVyCAhUyu91bAqq7cQLgXiiuFhVPF5b81HEYJrYpR9AmhUEG1QKfRfdhh",
  "key10": "3v8BzmcxsNGzvwYk7NdJnKFa8nXX6JiajEg2PNF7obezxg1Q1gSKqM5fpXD7iGTBzGZvvfKaPZSLzofC8ADmZjGm",
  "key11": "cw4ZkQ1AcDxKaLNZp9CE1EBRtL47Xk73CrQEuU9yinDuCcqkDDsxLWivxDx5hzesAtnRvVXiMQfjupxCoQyGwTA",
  "key12": "UPqtZ9oyNU8Di8iADFh9wo9qNeMdSvvvjZStVfJzzRrjokjt7FAjmcJS8GYXJp9uZogZgDKTBhUKT2ubR7hXpTK",
  "key13": "bCA2iVAc3sRo7ZgD8nPmUHRJmjrPiSj7YkkvFusZQvoVhj8Us4dnEaRwJ51ahGNAouasHHyvvN9k284TGZGN2db",
  "key14": "3uyAxsiDxgoL1ebDLw8aUSgR6vtb1VyyfUL8XXpkGNwQiSwBRysL3VFWZWEi3fgRuZbxjkMMRD6hRCv6zVtZxhnp",
  "key15": "22Vg2J3ujgWop4gqvfAYaQ5ob5qvmsVfez9GBxxex8QiGrwgXYdfZLK5QcJwqzyq2HMKvDLv8kSPE3ZXwhBxDpmn",
  "key16": "3mGDWCutB8w3VAMsT3dawakpfX5borxU4AR5eFuy4F1dXGuEa7epvcVajVaCXmnxFvC4PimVoYtpriDzTvNQVeMU",
  "key17": "XmtKKQMqrSqstHQz235ettdcBDtYNZF17uUFX8ePM8QkQzZBhwYsneNTZ1URnQjdkxWCHgP9jTcpm4c2Yk4tmS6",
  "key18": "t1VAACoX9bx74pqV3zRe2uwCBYCHNQ8nwoM1CM3CBQ4a9pxCEfhkR61T4YZWzPdVj83sJuqZ1V2g77ALHubBDz7",
  "key19": "62tQnspE9Gk8PSBT2xd6Qqs9bdDRMPawaieEhvG9p7KbJgLDm2cjCzuyiyrV9d1LuJDVvueUCybsp314qab9kug8",
  "key20": "4bwWgDzh1EzBcVCh1fqXGGBEFdXLNBtQ7PVbuXdsApRWUa6BrdHaeCwLCqDfP3we9miZvjFw4ByBgYvXSQ2sAY3p",
  "key21": "jDdPVhtEwp5PFwUPZ3MnLcUcDhPNpKGCybPZgjeJaAQnS1oW7Gwuy8TrcVFUvZqwqAY8xVnZGoV6JT3JY2UZ2hR",
  "key22": "2AbZev6LTmosHA59vftZ57Kvvoq5byzsbEy1LjeRhrmuyyUiRUm2q6ZSmgqyTEJkXiQN3VFj9Gb9aBKNpTgsHZDG",
  "key23": "4ruLEuqXdCk3mAd5SskFNNNDszakg59J1gmAtTJGG5YexYYXgG7e7dTCz36vwd6S6tLLvFqpcpeYGofrh346Crnc",
  "key24": "3KpXxR4nEshNGDK2evU7hNDP6sCUtdrUSR8cZkYiRHWSjhU4hnTLhC254ZkRFhDv6ob4XDEzvzoJ1tpbWT9GetLZ",
  "key25": "2ByRHTnDamE6brbmNzz2Z4KYjSH7CUHf2PnJngFWBZaJiAwQ6VpDpw1WX8bK9RW4ZHF6ZyUEemvYgwU5Drth9Xwb",
  "key26": "5pd5rmbkRS1aEZhbmhGSXCtFqpK6Ua2jHZvahFY58mMR9spBj3tu8xgDx9U2YVj1BKnX2LSJVhw1kqYAKWs7BRgx",
  "key27": "3TGHbxzvH6rXtFFENGXwzPp28wQ5M95SFC5NZtF7ict1fa3dEv7PyCQKqS2gHHMFhPNCBKRcr3788ZFBGKt41626"
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
