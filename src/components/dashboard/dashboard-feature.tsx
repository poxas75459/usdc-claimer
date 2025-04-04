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
    "5C2Zu7UEzXwRRio1hHdAwfmN49WzYFrvcKBtabwRXEbEAo3a8csiAhdkHiH4igfSwc2iCZMnwBoQ73U1LKNxitfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYBb7VyHvq6M6HEc2bmEH9rV8XWCHi6tqgkKN2AxwjkTrEqoHAm2Z4wh99sw3GhMkjP1ePkpvNztuH5Hah4YWDd",
  "key1": "2gh6rhbBiyQ8R6wYheDv4VqLV3PSy4cPvzAQ38y8BercUksok1x935gawy9E5wCTmkAikEUX9fAkbi3UmJ1ae1gp",
  "key2": "ZELvNm2NGymvhbdDwkVRmuc2AWr4mWG8UrCoTka9qKstsBhKcNCURquqBQWHGRRdLDzjvE9fgD17SwrQPxn9gdg",
  "key3": "3usM5Cm6VjAVGSvL43HSYxxuqnecqmBEKfkJYk4FYKZXwKBbNDRXUfkfxGf38KKic2ijJN7L2SJvEK89wd2UK3sU",
  "key4": "646Q41AKsye5beRByfdiADARZf4KJ1aSop2hce7JkRHMmqgVLjio36N2vcKfCyqsPQJLk3pvyWqKM7JTzrN6DeCv",
  "key5": "2a4BJit4Buqg8qhVMD2ZLLCNUCHim8ChGpBWMkTNuvu6xt35Y5BKpgo1JFbYL7Qm4PqquAZ9yNZP3UdoiF8jCh9d",
  "key6": "5csi3pt5oiqVSPt7y7t5ZwcBbsB3enJcgmR7NsiTM7g8wPq7BQPy8bEUR1DCkm9fwtcxM93Uf2MSuK9BY4iK4HWd",
  "key7": "53MQLB8i2KQmKRvVdgUDM1HUZjzA2tgf7m3G8bRonVkEPwiePJDs8mJux7AP2qWju3Eb96rHCTHxLyQzEs7wzEJu",
  "key8": "2Co9JEFGwEk3fchK7qFc3PEQpbZbjGySANfhNj5JL299NHNnew9tUFhNWPttJouCUzxsfV6YfNWSgt2tMd6zTzR6",
  "key9": "5EDuWbzzq2H6LVvo5tGLkwtYqGA49DyRi7fJw5CkP3AJqKByjeiKuSwxLqgkXmhJ9fkYZdy4RbWojc13PaSGMQTG",
  "key10": "4Vio3YFzw5Nyvgzpc7kGLX5unC6Vjf2sewaiNENwnRB8wgC5uKK54wYXRzqcdCn1Efv2jq1bxV3WB11wCRiV2n7H",
  "key11": "3G7LRDqz21RuSJsCT2uJ5oZFRjygq1djtZ61dNS6uY2aPZ3GgnSMfWV7jWHHMDfyLAemFki1KSsqHwukZugAfhyd",
  "key12": "9HfWwpPCtzErUhBUgzvrRz7wbvDPE1RQ6u9RWg16FX9Xhwa6KUq9A2upu6rhqKcfRmfg636S9JLF9PvSQ744fba",
  "key13": "5NgTycao3FPmyfsgKcdSmwKRAc9LKGrWU3aVohhZG1yCgbty7mF5DnyYdfj8XQrzvEo6oqksYCBRXjU9FJFRtquT",
  "key14": "hsEcPBWrn8P2p1jXK8FUzE9v1fWh2MTe3rAqbAvd8EsdvvwjR5znWEFtKSuTiNaVaXPtvHBoAYDp1KrHQwhQsyu",
  "key15": "4aCnECFpakooe2EXy8eD4PYU8ZvX5gC8vnAdcydNtbPuGy6wZJzFxws2sQ1fffznMkUCNQMo44NtHh1V2KDeVDNu",
  "key16": "4mC1n9NpUHVocvJrmj63hwkdqgSADS7U1nzXJXETMP4FMCHsrY8uov5hocVBZE4ysdtRZbkkWBrEWrsH2fjN7sUe",
  "key17": "2nzcTQ9vm2FXUY4Kp7PR6RTe9NeU96vpE7sXwL9SqDtq5ASHpozUNtvJjUJeY79ggsGx5b2qn6P8pAAck9K9Jhm7",
  "key18": "5ehBV6xqS5nbWf9jDyDgQxkNYQsfDJc42iW4tadM69h8GNqpXtQWAA3SxQLD6j5bJ9YUGNcCPYYvCfogcKiXKtQ9",
  "key19": "3h6QsnhZ7XxuvzNSUNtjcoG7S6LzmMEogeL55NzdufgbxNY6k1vR7N4mKiZMgmyRdrBojxAdWx8dfiXqrHuZt32a",
  "key20": "3U7WaQRUzsnnmU3eyqQwvmsKrg5sVwimwWUiXVSJFeHrxR8Qedmc59DtrFYa2kkH5Aw81eKa2CqXpNdmRVN4ajjt",
  "key21": "3SWkxFA27Da6e5LKk4iyJZYrHPCS6fPRmNsAG3h7NodqKLwTm68oKMqVji14jeX7QXqVTLFrhn1kBR1P15sdiUgj",
  "key22": "gTiaQBg3GtUappZ5swLJPYjGv2ZXs42SSdUvQ7yLkEmwRdYaQaxgH6z418j7EU7tzrT5BwCXMAMhf4cFThN735C",
  "key23": "5ZZ4pmGNYwq3T9ZzQuSWPUi7aFNoH8TCfVRoj46yVZQDiDAn1UnU6q2V3g4dxCVw5MePMQfpEUmvrM2MjZvMepX6",
  "key24": "5xeHARZ3V3wVHMWa5gAwZsa3ZK4k3z6qwhjDdPnJQ7n5Q9pdGwFWNKV574qMrVXQRh3bN2aCLL6qCydKUzyi5UpF",
  "key25": "4r8U6ZJFQuJK54izJQVk5me45YLzRw1rhAUsj98pxqN4wUDXKyBnBmKphAmwyPsMw8NL9GMhciRS6wPjx1L7GBwo",
  "key26": "3Bj42HTrTRNQmrrLMCWJECvmqNkUDKhw4RpDxjspTUpjjBZNNbw2LBZdHkw1QSafm7rEp3BPSoC8V1M3Ct8jJGah",
  "key27": "2n3PkafzCnT9p3Y9yJCy4hq3rgHr23hGPw7fWT5Jme7zxcmz8Jx6jR2LK2yoS2K5gmWPnDoB1Q4DJ13aP3wgwgou",
  "key28": "2e53SsxHcKrRKD4JZ7q479DtyTaKWNUEP63NywcZZvCPp5nJuzURyqfCDnWB7WYRnGhTEMfBrMGfb9aAyhvecq1S",
  "key29": "4gxUPmm6p8YKMoDbsMNSB2KXu5itgUD63wq6yFHc9rPoTQ9QrymmChth7NojQWhvszW2hD4rXqXcvMzbTaSdHxMr",
  "key30": "4Zcnkbya1YTQSKtzbimkWe4S27ZVahYhsrJtty9mTm7agGGSzWMjG1NVgpduAszukHMwaTJFNhiEUGNRKauKP2hX",
  "key31": "TtwXkiuHXhGJQcxNAwhprjKeEag8XKCdjq8xTU5aQCuG1zR6LHEwDNBa87xLddvuwsVdLJqie67qycg9oB3Dkcw"
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
