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
    "3NXumvUDrbgqFVtskZt3ed2fBQ4B8hAQAvmTeBBr84PUZqPMgsdyveHcdiXxqkcHMuY9FUE56JWCTQMqVVLRYK8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HzREH2uXMFFFnc4PATveqtYjgeu1xDavhGLoufUQPPpPdaY3b5iukgphrPHTxYs5oKYcQqMnBaLMMPvuCsWtDvy",
  "key1": "j3m1PYdeNZD8qgvRirxSxZ6tQ7sTxMoA4tQscay9H2yF4avduTbtdHtGJPtzgCRPDuJrMYit1hgag7Wfd8VMrzx",
  "key2": "5tLiVXmiFRhFi9xi62PKdEECbzzWnQtPoDYiVbNgdEFyvvVBg3byDbu3v2MRuuNSu7aCDsaFdWUtSZDbbBKvYEef",
  "key3": "3qGdP7NPPe9ccia1q5KwrpwD5op3YR1raGYzfNfFUusVrwGcfWYbvrrMpAgCBL4YfJgQhn3Zw3gMJVutraWBHB7i",
  "key4": "Hvu5kLvfZXGEV2CSpUsskVghQjkH15FgDrxCmQP9J8xthR6mF3Uairyqb56WBvH8R1jv4ykavE5jCgdaVxKR717",
  "key5": "TKn81XqunGBSXCmCgbZpUqoXTK83fAwHSgumRyFHzaSS7PmhRLQQKsUFvvLHR4bhHNA3SnQcxMYPRkfK2WYZQUA",
  "key6": "4hNLAVwbX7Wnev2wLQ5gTW3Mes58iJ8vKwHV3pFwmuk8rgcSVkA2v6m31E15LMU5rcojR4BCWbBTBDYb2ahVpSKV",
  "key7": "4N8xTUbH457xPF48XQER3x6Kv5YYkeuJdmczTvhMMx7q4JhBZV1q75Z48VaBT5apRiFjDfWtcemo2YT2SQ89TkSo",
  "key8": "66jGnf8swwKamkfBogMkqArtW7zn8BJhdJeL4vdd5dRPpoShoohou4U5igAiPZy8aWNdesZ7HDqXMapjo7ChptsS",
  "key9": "4KfSSxvckpATTAbDLXnuF5L98kpRd32GkbWVPdvVooHCFyX52kgc7orNhzehpruufEgNN7rjyxiR3ZQRz3uwSzzx",
  "key10": "5UPApVYKyUUEATf62oaNV3kWa5DMC2LuCHJVkmyr6o4bmV69t2pEp5SfpqTX9y7HV4oPTGa8ZAhx5QNGe8JreLnx",
  "key11": "LDHuiwHWPe1T73cdrEceMv9JroguhD4M3DGHAJGkcEEtAbB8fivqojaxEuxiYQuJshkfjanW226fwiSkZWw2RTo",
  "key12": "3NCvnGuGCUyyLfjRXXkZrVXJNBXqbtnSSywYUNr22QRy97kdEYUUkAtjYNMrRGGe5MFtTyrv965Vkxz5qPKPmkLB",
  "key13": "3kb4U83iwRYDCPGsSrJCmzDChp5BdErk8bZJDkcqJf8SCCmbKovsK5xCxkXRcuqAURTYd6fWspM3gdE9HeYoUa3k",
  "key14": "5NP6SXjgpxHNzEKWN9EvqjUG1ui455ecY9PDgDXYxtnbkVP82MMaHMbJCAyLzHR4ueie4kdwBMbfP4VNzYWhsvvZ",
  "key15": "2m4rnQW7qzpRPPwX5roKJAW2E67yTtemQDEj8AUndoR8zRNoTsFsJPxvSmTFfPhVF7ZTP5CY82TJyBGeoFacdCbw",
  "key16": "3ci57a9feBxK4bGexvnhz4t7M2WhYYT5G1HREVBbujLMMCHHpBm9epHDjos3p44oxd6jcoPUqsT7HrTibyAvNZtT",
  "key17": "67m49Rwu7HA8wSu6iXVG8fMdYGwhicnnmwf8HBdspeF7bKdBBuLmUEihvVWhe8aYmRmfMHX4Qie5DmbwxxTqw1ma",
  "key18": "4Ji8HaJA5MpUYbQrva4c6XoWLvm5ZjXJteoQG7VPAp7HAMczBFh58ovaHnsxn3QszoSbRBBHRg6uydjVSyjcSNcd",
  "key19": "4ccgGxT6yMonsb2rs28wpoEDAu9io8drKpM4VKcs9xGNRkx2R1fSCUR7Pf9fg3hE5HvL8A3WvJ1bT9BLbYHyLwhi",
  "key20": "2BB2MTEqrxNR6DgB8DYg9822ner2D831U5Ua2YFnJF3Rx7EhiaAzSCnSDPjL8GCFJrGSP8AgpGTJZjLoWiKZZ8wB",
  "key21": "2YLrQhgoVdcfAF9kGaZ8sogtb8g1WAPVjMWhrfuATnUdq3Wm5YzcyWzDLCWriHWt5Va2TSZBoZksc1Rvvf5UiR3W",
  "key22": "3hTdJa4oPTM1PBNTGYD48u3pwrDZF4tJFXPxPhYBH36WihmuQmKgy6VRFg54ebDSxaSZbNpsEpUgDVFeZ7LF1tBe",
  "key23": "a2XiogeFbNBTN2rLEZrsAgEUBNakSsJvNGjWEDR48SwVSqq9WNGCy9d1QrV533sRiEB8mgTh7V13SY4mgNjGmkc",
  "key24": "3eid3UtLWFuibaDHTnMcntqVt4Twpk5Vze17xMA2zgekBRkLFhxsTi6UU2ya8Vt4Fr1yfGT3Ge5yKrJPNy7KGUwW",
  "key25": "3rohrTzy8PB7Wn7n9MBPDmNdkGJ6vhdPvyprhSrAE8Nod5BDYw1MujpEre6Szck5dyKHXh9DHkfo5QW2F4LVcZDU",
  "key26": "3w52GmqSDNUuTUfyTtxJJ4nyWhVNsyVxfnzXgveUwGce2PNZWn5zfBVXHnAD3wASSpMpP8S5xbqddTxsMWFTSuzc",
  "key27": "3y3HE93qUpEC5XUwQEHcZpMycpQVbG7coex9XSZ52n4fpxkzJ3WFQxEcMcSMJwz2sqQo38F7cU4GZv9hR4gaLqcq",
  "key28": "36qSyYA7gq9YNmGMFb6bPju24ea7LBNFYzqwYHLAWvL2eUxQeyUsJf9s1QmuxsWz2mhpQQzdEhsnxVuU1Nki1z9G",
  "key29": "Te5V4JRPkynw3EpSax2yuJ4tBcZwTbzX5SozLqa43TrSeSdp2CrTj1sY47RTdbAv4fQFrdyG1zbavYdWSw4KTSL",
  "key30": "2fkMxvtut5Qy8pJXPTtgHKepLMA2mFFft8HoBBertsjNaarYuoti2hpvrcrVzTbNJZhuxmLepWAo22AarzjDTUAr",
  "key31": "55YvxXbBfU84u3bAuSJCvKVabpoef6YURcDBN8vL9m4Px9vjbq9cFgN5KWRvY6ixnj2qKyMP9fdAhYQagMQ4sVXA",
  "key32": "3WyUZhFyZ4hv6ivQwdBdKLVpnFNeEqCFZBko566DJ1pTtUuTUQSsN4eZQdsV9FLb1zyZmo3cvZ2sDZ71vZ5gMooy",
  "key33": "5StbF84wsVMNprwPkXu7DBQgauR1vXxdnKbXWpm7o4NRZhVcv3f5AudWz59DwThyc6MBFByU1HvX6j1tTUYnGL48",
  "key34": "3vApQouRrg95t89xLGsSFi3xNQz4PfNi1o4au3DrRSerfxnatHTd9NpxjqtFLm2RwPQA6BGSNA2Fq8QsKnbwMeam",
  "key35": "3La8G7B5ANswFWES5ANtTuHqMgoq79U1Qqe1mBpBjVGMERyhbNKhepeeRWwHiQXV5k3TvcD5c2zXRW5jgrSrqTL8",
  "key36": "3QjYt54JVoJpqcB5Q1pD1KcaEZymZBZuho1PLY7oJ3VErj4p6uxZzYHcPMj9dWunkpgW7EXTcTRgK8rt9JQhuBWY",
  "key37": "4sSpsbrve3WVYBHbCnjcw5qZp3n1PMZiXNR9pMpzJQEGmgdxagemrrJxCkQFJZXksg29K6j3FDfqt3LaTjGgWmiR",
  "key38": "2s5CfKDDCcp4W9t5Ee3ScPZKEVh2gWsbNixK58ATfr5j37fopeaBgvu4pPmgPLfKAEBb26EuZhkgFqmX98aawshe",
  "key39": "5xUm1i9n9aQ4kDxVNtmvp9yHsBcUeHCcvB2WhggFd8Yr4aV1wj7VzVp392qRBWmVFfFUD5cpXdYbZc6FgpSzVkSi",
  "key40": "3EpMsF6E9xC6zVMnQnpj8VXGFX5MJGkE7BMS6w4LURW6k2TV97Qut41KW11t8rUDGMPwtxBVmuPVrw9sKUx2WLQx",
  "key41": "mj1PTdSK5bY1sUR5eeNgceCV6K3Ty6PkT6PEsFmvHtDY52GYuLG2GGPo9d6GRhZMZbS7g6gsbtE51jqfKFis8ZZ",
  "key42": "r4dnWX657YRTkjKvAzXbUqTAYjr9zGZPBa9J4RG8miseWwVZSswhaDGpQt48qUWuqUHzY9jMBboNBJTWyGrVy73",
  "key43": "LhyCZHnt4hTW5aNgsvmtFxsgYuWF51hBZ4QWVJw2mPJ6xotYVhqAJ54fXjiHVpjK2ZbDmsKbZxzNzTyyCxqe52G",
  "key44": "3Qx92fRQqzZFYGvVJ2q2Jw1PNsYRZA8oAyas5hC66SJxtcWZHj8ZeahVX9iCE3fiQxijr4iwvyaPUF74oXdi384P",
  "key45": "yEk4q9EX526haYX9xHntV9QTKyKe7iCKfBymi1FXJEyktgTQPoSGkY3yygVZ7Ex2DVhS3GUR1B3514srF3npn4i"
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
