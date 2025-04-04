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
    "5v3GEdW82eujUYHu9nX3kd3CUpUsg77rMkexf96ygnUb6kgvwPniv1ayYU38MbLfvTK26c6p7BVCw3Ps1w1XFjib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3485bs5pHupr89wUqAMVuoFSP4Vp6hNMV87ucrqiQjyR9KbcdTffpNZ4Poj5vnUqZ2CzYMBye62wfAfusw3KFt63",
  "key1": "4SDtc9xnQ1hb2uk38AsrVxNQ248Tgt2RfEaBAFZKgPJVb9G3GLY96eVZPBxJxSQKphWsew4AU2WsUBrPhTFUPTKM",
  "key2": "58fy1K27jkZFLBiEvLcSjH1QchTZBtjxnay2ogn23TmWJxcCYmTXadHEivagSzYLG9F1xosuJrctgZU2nC36mARH",
  "key3": "3bPRAV7BWyvMCx9n7P9KTg6iTErfJmb7NozqUbzaKA2Df4Zz3aV8DsiUuVSozuLvMdoWX26tQSbga6PQsv1FULDK",
  "key4": "4Gi1xhbAbA1k5bweVQe6wxzFuG5dUz5uV17mXDvqRaupvNWQo4XkVUbzhm2AmdqfDEV86xA37sCn5tzrt7vCcfLc",
  "key5": "4Z2G3c2Cq8XFPqhUX7GGLffDTbkaJoEfgHiCP4oYzeauYPs8RqTAEfNoBRYyWv12tFRPkorD79KiWbEyu9me4pE5",
  "key6": "3BT39CC8hcLjpoxUt7v5Ze4qsdqF9xdJ52vRHVgCwUWkMgLz3jKWop4gZRp4PM5tYwiNN4tN8jA3xAo3orwNbP4b",
  "key7": "3rgce81SCYF1x5qNmUGAj17pLENSPVurFj8XB5Ze9gsubFXFgkoyFFXQjjef34Rx1VSRgC8ATQPAokyb3rp6i1js",
  "key8": "5MKfYz1SDJ9HtE6Ub8dvyjHDNJXT3MN4bpdX5Q81UZNTq323sHXEBNod4zW6M5KuUL8tEAWM1uctgeHTJ9cCQDjS",
  "key9": "5DK3y7LPBAMEFzHLuBmBia1VagAZ4oUQu5mnJTGkP7UR4o6oEM9Xoi74yZ2HDZ7uE3xrQugZU4bQeZfodsgAgxMm",
  "key10": "2ZuZd62QwxRaCmUAungBJpqPDGYfk8JYWD27sqkRb39BDuKDcWxbyKVTURhJeaeTYZcFN2qFdRZYUrBJS1u2KPg4",
  "key11": "33aCkqVqSR46ZtV8TFbhM1sMG3kd4PNcwjDhNBweQhvfNxwhnwJKyJi11cNqB7yaDpgSzUxxTwYWSkexR9Ph4Qap",
  "key12": "3onUuvCswCcvmQr2C3rByWLB3uV6iyNAnKD758YRmKSWnr1d64msFpwPPxjzfFCSMuYkoQxNnRRcwAJBpbyJ3sFg",
  "key13": "3WYWew2w6v2KnqeDQcsiuDEhsBf8WhgVFYNQrrUMhZb6PCfbhZZc8YFa4iduQHiMeKkJoFukSZHYNT6jEN2iXpm6",
  "key14": "3h5Z9VqSK9XqJKv4vMivLLrkgJfvSJVjRhJKxgp8dXoc9prLcMdhz4VUG4V8bLYXpmvtit7Q48cQuYFAWWaoRNrh",
  "key15": "5BbonWqi8DkcayyVHXkCuRm7avwUBx85spBnyj2693zhWUrx6g4FUcJqZtEL3Qr2BDxdtJSXkXybsC6FE2XwhNG4",
  "key16": "J5getHZsNjMDY4jh29XWMNppAK4hhXaaiGXo8EFSUWUuYBZz7UNdbuaHNeX6y9riJzvMFPrRffspj8BMkhmSmKh",
  "key17": "2W94xFnyVkwmWYRgziio4HGUpjuZzaYcKkVtz9QbPyVw8ZpKeKLbucr4qES555ZkiZvLMzxoB1kfDMrVodGEKkoL",
  "key18": "JngDuzDXZyGJMJ6MRzKd8cro3J3uyrDT61VM4xksXndcRAj5WSbKZ84xGWhYMupuwDG8KFjQf3P4N6a7nrs4WkN",
  "key19": "2rrcsdRZT9TasMUBWCgNncHXNDHeR1HvUujZytGUSSicLeDiT7LW3uHBWtrxmyguKrirBvp7gwSG2kMjQtpbjngL",
  "key20": "4auxG3k5fSiAfZ7nqnMkBVFwfmCZQEW9vd8UUF6bqJjtHN5swpBFv1sjYEfDj6Vk9yvw7YM2rUuSu9Zarr9BHEji",
  "key21": "27Tut6m3o7LWBRuLnwpav46dhoHRX3EfCL8tHMfhMftkuQBS3pGsuBAEvZFnM3UQ57mv2FTQNVCLr2xXiuQQScJ2",
  "key22": "4zMjvdwtEdUd26i3UTPUFnr8jS9NLNTkuDvQKF9ByezYq9ePG7NFC2EAZo7Wig8qGG9jN6oXFJECzujQEaY6q4UY",
  "key23": "3oMGtcV14ak7735yEqn99NWsa16TkdwpWmcaJo9ryes5oyxH1QKhVtdw688gqB268zHBrpsDWGTz5dy44rk2jbpx",
  "key24": "3sgvrdP3dGcQgarURnJ5JBpPHW5gDkkDWLNmHdqu5euaPq9a1KQaxrjE37dnKzEph2honxe6zMLcy3FHQ9uQtzzo",
  "key25": "4LnnendXNaqL4qeKJKu8zrLkwqWw63VeBVzC8ZFVCSbmUbUxGqy9aKPpykefB7ptzQuHe4bFRGBM2Kpu2UUbj4Wb",
  "key26": "ZjYyJuS149LsgoRUPeFw6GgdqpK2A1LBbMSkLhJvYm8WTSmeyD8tBiiQB5pSn2yBcENCTq9hvJka3jkomTUNjLj",
  "key27": "4jDNedHpKgA1ahtRzAFJ7Vi5ZB92LS4ZHoygsfB5YDN7391QcuveYP67qThoEFSkmcTu4yhwcM1nw9ibYH1Ak8BH",
  "key28": "K7gTVnjoRL5zjaochcm6gPW6sE3WiVtH2RFXPSHRygXBm3EN2B1SXd5vAEBi8B7QPH1xurcMzNiKpM14KeztMD8"
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
