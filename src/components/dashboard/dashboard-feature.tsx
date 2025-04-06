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
    "2sqNM4qBnmD7dTWmK56AsnwnDEipzpd1EhxmNZToTHdXPNGmHrn4hRoA2Kfzf2BJEUBoDEyLm3hei3kPA2TT9mmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFVyJDXQ3rLrzX83ZWqyPU5nzMhKmT1gGGSNjqyrmnLnYM85zAJH75Zkaer2V8ZP7poYpRrNRFmSGvMsD2HfGJo",
  "key1": "5QV2WMSDYTdB4QpidYZBQYGwTc5zToaysrqVGMrmkR2zkorMN9d5vGhXUUHpheB1m9BzSmZmVQE3jsbpWR2dNWZD",
  "key2": "4heS6iLYM6hixpiRi9tJCnqefhWGRM5vhYUd4nMkDNCAzUGkqQdAmXyQk2UWs4Vsdh9W9nFMrjTTMbxSsbDiUnB4",
  "key3": "m3YPxQXLM5VTQQbuSauWtPARQpUJCFwQy7ta9ncL4tPzztmKvDEgip63MFDxqjcruqi7MnqXzkwqkGmwp7X7Mft",
  "key4": "42jBKzsvLBxQzB5VmWaUE1QxkgtSJ19aspKBMsnL1tWPBZkHSNWheptA3dx31uvo1PPcJ99Gb6DW1sQjrPpvTzju",
  "key5": "58tfcPaMwxxWaNYQiarNyWnesuAboPm8YznkKUqLKUqnzT2LDRAG1wHVckTW9PYLDej2SGFj5d5VMjSecqZccFEX",
  "key6": "2CW8mifo29PnVS6PHYez42Qop3Lkfxt7wuGmE7RDRvcJxsUDWXobYXVWMEjfuW3CpRXhFmFqvqnsEXZSAEXTP4C5",
  "key7": "2h8NAwAnXHgqP9DoR81noQMof1621F6RwjkMDqEiX6umxUMLfrDtjm7votfGvD8xJiaCjmELRRyLrK7kP53AhJr2",
  "key8": "3QL7vrNXpwmwKnvTWeQfXvhRZqG5qAqeTgFoti3AB59d7yKkgTjUk9yLXRvjH6aKsAuq7m1yCjpgrvNuiUbEDmDd",
  "key9": "2YPzqx8ouK33irQLLHDHPT67dqpoEWoEFiAK3edTDFMEpjppQJZ38GNS1VdJt3YFAC1QBtvt2Ld642rimva5Raxd",
  "key10": "3AZcMu3X7yWCe54dCHwf8pWAYCz64kArqar51c5dhawyynFa6v6kPwaJcHJXH4wAJUYom3za4t6odvrfQgQJt62T",
  "key11": "4U6CLaynfnqWx4Rh2oCEGs7oyfBKRT928WLrgbo1cZeEPdxAamGcpoVQCRZa7XgDm3fq99Gg2VnWQ86nYfktykTs",
  "key12": "4Q5rokyBuTSuQ2LfujDHewpReZrH5TviJA3cRhb52gDamyFrmxr5Q7JRQMgP5ZLYaqYntxd4BhVMcwoWeoHZquBD",
  "key13": "5tpGfhX1xNfydz89gFhmKTKmRoQFon6ZV28aBCXrtvk5YQ2nGjMQq6jGmXqbZ2zBHh9kNXpCwuPTDiXK8aNdjS1",
  "key14": "rTchdrFWT4e4mMa7DabT5XJ7Khymqc3Kcq8k6R7zdLxcCSWzhbPuohmUT1Q2odshGE1w8xGW7RnbUdACd8hjtLH",
  "key15": "3CfX2NWsUBK3joMuhVcnCG7drj7uAxrDhL3BZRH28qRSjPHBLRxnZ3wyZihqhEnqXQspvJWmAJURmS1RSB59zYhK",
  "key16": "4r4eyAWfeBy5xVjRsuEcoMp7PDjh4MEgckuXXzR2GgeKxmxoYaMfoUtUimAZ6TWHw8uL1XaRsgJ1fqQofGLXUtiM",
  "key17": "2hXEXUaQ4wCLEvnVzExrHxrPY6hYi6EPRDEnRJq7NbdwAniBohcGqMtKX1FGpMaHuhu3v22MMyNR4nEZ8JhYXHsY",
  "key18": "658X8VPRKZupqHf4jMxPKFS5jkvWwaD4j6dV7fRjBiLn52W68gQQj5yRgEdp4TvJ2ozGDz7NzxzyoV9JFb9DFWY7",
  "key19": "2vM7WYQqaGnP85HiNTvZgUCXK83zhtMFaTUHUTZbdpj6Z8cRrdifEakkZ31GiEahj9stFewVfc4E9Au8566QTsgX",
  "key20": "3mSCbgnTz4EUXtMXF4gwsg6QbuUE6YG21WiGY8bqRyTS9egnabDjjpRSYbHaooHWFCWEde35KazbekWMEACqDqJJ",
  "key21": "435WjkJFmyUV2VHgwPQN7tLum6CGUiWFdNKjhXv6m7KndvUKCuinWvi5Mc91JLUGuxnLVzedszbV4YZX8JiRyYhX",
  "key22": "2rSgk2HGdALmTwVPi1UZoYFDJoaeJv41buGvAQGyUtBk2dzR9YfLKh8cFJvN2YgaWnQpah6ysrzCgxCrz5xZJ4X3",
  "key23": "5dMSJqRme7H1poF896oti7ZC7YMhD62QPkWVV6ZYcZePrsMAhEfg6Z8VDQVDkomRAcbnvoY3iZUW5KvTj7Vf6K2R",
  "key24": "34RpkLLLf3put9Fp5qi3V7d1utsRx1M7LRFt8dHeuzRs1E6RpKS6mR2QbcgBwKtA2rKQVKKT2zJgPSeabAwNJXRe",
  "key25": "2MFZRTqkjdT4PXWNpyT6DaGDzv4TKxJYNbokiJYScuBmkcjzp4zawxvuTPmYNT7sxikiZiWW8Yoa7wVe7Q9puBTa",
  "key26": "54XPNbmrQcdUQqd9fJqdAUTu5zSE7c4ycnspedV8KZ2eyHJt23bLNU6xzkDHkbFZhhr5kqWC5vVVpunwVQv6US7g",
  "key27": "5mdTTBkxWGP2CdJp3XXTWbKTsCEXQsUwLGYu7YrrDxwQQbj8wTWNSaxF6Ppj1hcG5LWNqHRiYgwhrn88TEB9JsX8",
  "key28": "5T9dmggetCTebqZ6CABp6bRebndH11rxibjg54W1WyuMYUQmJWbg9dMwyhkWdhwxT23SPNAWuhaHmxi9bE4AyWTX",
  "key29": "2qUjBFH7ibTaQChCztDGJJ5ZeAVLprZ2yiiaytoX2pcSQSQ4U3WvAMys2PYsW2ADhiyxLQzsDjn3yeTUFBytgr1L",
  "key30": "2L1rd6wAahjvdoyqkeFXKj7CCzcQbBuBuoW9yTforAVFaQ8n9ziHCwSdW7zDDjgioEiuwR1gkQJVCmCf1Dj1UKqX"
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
