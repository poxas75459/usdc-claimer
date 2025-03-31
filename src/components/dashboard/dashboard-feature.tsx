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
    "4avhvLa43NohneW4ypq8QCcCscff8TDDceKG9AR2vj8e857ZEFKNhND7kxqC7cqgRREF2sMXEQ95oSgVdV7PtRUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "346XYU2EzbdrGrUN6uAC5LxMyX6EnpLvM3XoTPzHekrcr33MsLv1cPmTPx9MQM8bNrcCCGmvjL4hzfiV4V3BHS4J",
  "key1": "ECDon6F3Go4gSMh34Q5kPeCsxXVYTnmKjWqeuxktw8audsB7TsxfQups7Hh26fgAjJMZiHoqcFEMQ4ZjfzoRa4v",
  "key2": "W7soeuBdhu2aEDph7TTQ19FtAdJjKrnRJwKkexFT7SDKCG5W6WXxJtdieASHCjW2qLCqr7GpqFJzzRStqoY9b5r",
  "key3": "495ok22818qfP3hK96QPQ6L1PXsWngcYs76oPqyTrJT1pvCz6GtgtKB4iZvsYNpqQ9CXYsdRPsD6nPMM7aJeNPPz",
  "key4": "3EkaLhXw31HpJU5ujNqoWAdacA4p9mqJLjhDDudnFoCE4fnuu5gSYzeeLHgHNv7sQ9yWsZYEAHVkcJy7gDb5S7iD",
  "key5": "4Nmpyq1DbArUqjoMxaZoUK5MWoHVYqKnwpY6N5m1NFw5LzRJ1imPHLDUvedHx52LD6J8E9qBgHwUNotFBdW9g27L",
  "key6": "5kHJTCoxAdRg5dQa7Hq4UU9VKq1uL6Vy3RSaxQaLJ73bSpomqv3LhZLbxL4U8ErGeuArJJAXoYtJPx6K2WZL76Yt",
  "key7": "3Z2Y6DE7qqfCraXZmjqbXH16MAsRsHNXRd4mjuvNjpnt8L6rcgu4aJCaHURNoGw17hL3c7nNQVj1HNirVqVbDesY",
  "key8": "3Gu2T3e7G2YMPbJGL93SWczM3JC57nYaM47KFQhtssapqae1vEwsMB3jaJgv5J3m9X5fvpXS12GSY9rmaYfeGAWF",
  "key9": "519LRxb2iNi9TuDjAxrrXthkmhhXRfXcdnpzYbp4cMgow5fGN7PFUdCkALTnzX1GuaCTiTHEkYLosDD9gNvT7xXT",
  "key10": "2Qo85dADzkeGVCvmG4QL1D5noSEMdk2BmoC3ZSLCnQjHYZ2KxDbtFeYrn9Zm6GiT36KTXqZjdk6AdMeuPpQTSkYH",
  "key11": "5DMBDgU6dXcGLv4jfff1Rysy9cZA2CsYkmS4He2joX2TxMN5RtGrCRtsU1wpxwzBFsr7gVrhVVnaUd8m4SmbWaTW",
  "key12": "4tji8nnfgHwcYnuswqSfuGzf1WZXFw9GKQrQhogUvjmzTab4EEt28NqNTDchY38KVxKn1oAMJNULtMPCu4p65WH1",
  "key13": "2fveZBVSBj5mCs2ShKjQh9PQxBbsM2VUFce76as4qP1MVmF9JZj4MitAGoUx84FrLi4r6PqZEi9wc5Mm2PvvaHcb",
  "key14": "4Y2MSSLsM3YGYfzqR5etxa7M6Ae2SVhwUDSooRCkpY1R4awvkjZo7gTskGpyXk2TqjaicaVqwbzk6Tdd2E2NZGmn",
  "key15": "nfA7cUzPtFcyh6Yq6vfAiZvYDuAagCts4mHNWj89efgK2Z1g8UCKVvGdKQbT3G4QNn1BS7MRnVMBSRrFgMd7TSe",
  "key16": "2RNxeKRLracsKb8NJQquXvwxTcEVqaTeCjJv1nwfvPKDmxCwMXqsSP7CSvAG7xVeHBvMjGCGfzo2LeFeewBSUuAp",
  "key17": "6VnxwC2hMTXS38P7gAUhG3rH4PYq9g4BHTnjKAck1TU4eDKVLkxvPsL4wSAiLk1fK6pj8GnLmL6ELVuKAbb1yyS",
  "key18": "5ghEGspG27QvdRQmzwPcjFUf3DekZ2BFKb7Lv7FrmEkmrqpsvREiT5PeiNAY3bnosrApgc5NmiB8QNcU2iWmXpx8",
  "key19": "56kYzQ8nfhzDfxh6CfQWjxkdZKqkKpmQ6NQb9vW6972sFQBa3miUeJV74ee1E2atN3H3wEqNwokfRquYxwWjPPQU",
  "key20": "nXRuqA4vpcPDb2BchMmrxe6f26rf1npDMfreE1iN6n159ypnBaUPC4KDL9BXxJYH2EjVXWKqLsrib11oBi3YK9t",
  "key21": "52B7NH7vTonHA9w4PgRQthVj35D7YkzXHB9whKTdwB55NUB3gyRjpeZJacPoPE9wcCpAgLtApu3fMcUvJp1Li6fF",
  "key22": "JyBSBYdo4QPkqNvFSFEV96mvEwKZ1ZjpSUVpNdsbEqUSAYFcfsrFVu7YF6boQEPYddSaVeX369rz3qok85YghYp",
  "key23": "91QTQ9S2ZB1AHYWnHz5czjACeQ3SMShEdB5gV4g2D9Am7nUGNLguXqnZpLzrJAerJoi1YFNVevuhXkhkjtyh4Rq",
  "key24": "SjGY2j2nYeS81xG2KXZMxDS1ggKAFY36bz5ybFJ5xvFeoF4phczJ8eg4vSQpPcLppeqDpex3z7LMKpbFHUNmnhV",
  "key25": "4vegzTo37xutn6w8UNhby8Kg6dqUPK2pMYuE88BxD7ixsP7Wk6FnQvM3Vwc8j3M15ShY8T33qD21hLxXvWc4Xnq6",
  "key26": "5qzvhqE9UceoP1h3vgQPgbq3EvhhT9vJXYXxAjtuaEyvFjUmVJb1cU6mpoNQNjRXbtNJZNq7jNRXaersj2FR9SEM",
  "key27": "5mqS7ov9UwSVqrsgASENEaXaPGpp3Kp1dNW7xAujEsPJMgWDdTsWcJxbsyBm8LKyxtXobXiDuFGCgQN1nAxBtoGy",
  "key28": "3kpMdodZ2drBspiSzfTZcdSxh56UFFdYWXZwryfM6uiuCP8oJoL8WuxKmrG8zSodfq8Qf4kCyXzrojttaAqnUkqo",
  "key29": "ATPaV6u7Hfu1PucgBN2YFCJhnLgdSKJhEbuhuYYvnY9d777LGs9YiGFQZovgh5cAmspH4WsTnXWNgvBXJEBw7dz",
  "key30": "2QHzd2PTNoLGJQ9XKQJhy6ZJDbu8ZCAsiBRzdVaJDnPggtFbNCJzTnu6Zz9kCrGssJMz92pJyqRXD1gtE6jjiMsi",
  "key31": "5YjkKfpE44fk4oTS15ismg3fTKQyH2DNSUh48H3Lef7FJJxgqsBJD4f4v6G7eKVBHqR5uV9EdVMYwtnj1x6mDPnk",
  "key32": "5upyZmBJ2KGnu5KYJrAdD19YU61PzR1HGheoEmRi1HAAaV9QdVhz7XenutzMChyfg2f6e7yeYyYKq7r18CJymotm",
  "key33": "3zTn68CxY67t6GJLEmvEFrkZt33gs4fpcG63CdxnWNoq1cdaVqWuoZ6bEZ7e9e5KctJSNH6nUdw7x6kSkNk4jh5W",
  "key34": "2t6BJb51uP4sk6moRwm6uUWYDzkAXQZMVGHuhLi6U92WrwuHUGeM6Xdsy4Z2qXzjHcthad6hz5S9CmT5qHywPu83"
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
