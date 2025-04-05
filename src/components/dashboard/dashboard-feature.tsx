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
    "3rpgCwifB2qkAwrC5SpT21Gd8ivPLFXUSNsQU5aisqeyVkEbBLUEEcwTn5VFsQjLmWsPLdXp6XZakTcPd2YZP1BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oCkmGBCA37u1LnHdNzB1n9XS7ujz3ugWxq2Pz1ySxU5abnXztbCqXekLDAYj1quRn7oDT9aAKLdxY7Rh2b4GriU",
  "key1": "25CfKso86iHeyHgMmhKcBSnbD4q9csJpWBR5AAxrUrCoRdSV5PMxBPF9nivLNnSmYxR3YuCfjd759X9KChXkwm2p",
  "key2": "4kdQNDpjRhutPz9EPtjYJGeTENEm17xYN6UepALTcpGoHB8U9imKxXUF7mLWFiY6hGuCmvkmDst52QfnvyhSog1q",
  "key3": "32ZqQSmexLTbABUSnMg3tKAnaAzjDSgFTSjHt6x7NZp7UvPpaaF8gS9rUe4RN8x8CGU6gprGwoiZyDGhfejx6edQ",
  "key4": "3dfy6M1vBcJw78takDN8eNfbvLksXDMLQyybvAtth8pVYrdrVUj37Aku8tv6ecfodcM5q83dcv6a7Sjt5hL4tRC5",
  "key5": "5SkB4czMk9Ag3j9i2aNRuG5Ws2Yimew9xEsF67WMKoS2hqgTrBjBJAu2mbagJMtwSrSUZ1TcHKpxQw7U7k5WFK3P",
  "key6": "3AozU9NNMxrJbJEoYU9RpGXT5WgvWT47w5Fpo7L6h5Nvk2jokyR6KMykb8fXFAQVwUMGrJVNww2AbqZSXNcrJ9sr",
  "key7": "PHPVJn6u2JkbBve6njVZ14eFPcdNP6cDtG8AZGEEHUfp94a67Z9rxKAYoTr5oMWQKwm8oRYZ67KPpFdYpEZJeAn",
  "key8": "8ogJ8UNJrbLq82SCBBagk15qwef5SHsy9xgN4FwMPLEzDtDHXxrmRkb2Qix8sod5j6YxKxHwp97PKbJP62zue5a",
  "key9": "5Sew7ZzfZZjiBtU3BiUHkEJKYbnb1PF2Z1wwp1xeHxGLki8u9VFQwfT9SrdENPSutgymq27FEx4wyQP2gQREwvwj",
  "key10": "KGmQx3Yp3FvJnmyX9EyUJdXX7fvQo4vde9pEFcDu26DUbbH63eDMN7UNsJYekNMQc1ktTSUkRMjoimFxYAyo5eV",
  "key11": "z7S9rAPXQrUTahdnvyFhCWKSmysLuBfAP45T4J8yy6atF1RQJnb8W8ffHqH8hhT5GauwqRDK2BMHiBADeWxNjKt",
  "key12": "5m86Qi81gtfEw3y3R5bqkgzdhFwfYRpV147cvb7aVf6nyJTwimtYCuoGyLDfkTQarZCNADfz4XSAibHvgYG6kcLC",
  "key13": "3jCuhg96Avq7HKJPyBFqDSM8fCKdNUeP8z8KPX5qR6wBPDipvHVkDyiB7VcG1G91Sywpk9xcZKtKkuk1kP2Zq8tL",
  "key14": "3fr4BgF8imozek7YEcZFHXFpuhphxRb3nJ3RiKNM4XTUwxcbPa8thXhUFGnJeW4LMYMkChde2ynGPaxfyqcpxMqx",
  "key15": "5XYMLG1orVU3Ejj3pfMKX19dBnfwnrErtmpUtRYNsa5SkUGVb4jojGaSh5FhDLK51HPk8pZxEPXiaEYooma2eSKp",
  "key16": "52ucCjLutuXrEXLeE6DnrPNDg4mfheBRdJnXVoSR8bHfEJLU7oTPERoEprtxiU2hiSKNAi4C61DGKP95rgrg4YjM",
  "key17": "3V5SYfv98eXatCfUMGNt5xgQNh52xZMXnngHhTqaMigLFxi7DnV9d6YZGiqSJpornXGiuKw7obbBqgGzVs8HCj7a",
  "key18": "4dwuj2kCNti5KhpAz4hdTmGkGcqFsqKkAFqWHzeRyWMBshW1t9iQ3F2mctZmFK4L2oygB6greopDhhz4ckY5xFbN",
  "key19": "3rkjZJR4kaDG776B9oHGz4waeWV5afupLwJtwbVb8bJwWApv8qKfdJRx8M9NopF4nuQFgMaQSuzxvkF6B5tEiT62",
  "key20": "5AdBp3MUP8QueVspHmwcbGSi9YVAfXo8FNtzWxf6Ep3ESCnbYKb988u6eGzG6ws3w6oG1v5pxwrjGB9p6LsxsVpf",
  "key21": "3gwqBpVhsdamfJvqchuqMaR6DBzNcKor8zsg8Sj1EXc9S7uXBYqHY4erUzutDaUbqQo8aGBgjskxmSKFVpMvAdq4",
  "key22": "J7udgb4m5u6k2jfoHP5km4tMzxApoQQaxi5PTGyDa6YkH4CExVrkqPTfHcz7Q4uYqzvXxgetM1jiTSdhSGALMXV",
  "key23": "5qsJ1LXQ4xPRLMcGHpZxByCv3R3TaHzRU5wBsSCQKBKxheqW1ycaDXaU5xgnLDbQ3Cuz7243wJqR64ziWhpS7q3o",
  "key24": "4NFQuKJUzT1ji7UnpeUUsdr3JTPG4UveHKPU1wS4jHRsBHZiaz4zQTneN724RyAJjFfdjo6DAQNuPLnz2TyaZunB",
  "key25": "4RWQ2JvGyiyfb1Zhyifm3airAbQiLqgU893zWyquBeF6dMqqzcLR6tUJSaVWcnXAWprWYmxaZzcGWFGpwNKCnjk3"
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
