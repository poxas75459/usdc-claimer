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
    "27mC3HmyuuzHhQPKdz9ZatHCcHYCVL9RSDvcmXnmvs6CaV8Gr72RMtRJQcnwMqaDPCr2fmg24nXsXtuF4QC43Aob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9hs1hxZfCjTsXesoG4EH7YuthapxknVhQfgT2tjt5s2h3xNZQbLxrFQBHDg6PnkexwWtdThcSsNXdiWyCwgMY5",
  "key1": "2z3sRzm9xonvwf9iyYcVLzqfC5GW851YzvBZzmhnbrZewqeQ4DwqEtbMqG4c7GJb7Lar3mWD1rwp1mMqXWkeeLqj",
  "key2": "2Nk761DyYNe36D6K8LQW59krEZsw2dW3ZwSQX9AQ9F2LqFMsX7AuakAU3CKHX7zLq9Xg3KVqvXBqaGP5jhkkc8NS",
  "key3": "4fTs6ArgMi3gRtNWxTfkDXfbuBioiALNckeCLA7aeLBHaEy2vYLfdCqwhbafcJiUn7M74D64bLfjajST87B6NDF7",
  "key4": "2afyZhMZgybJQoz4SEqpd2WMpSXi6TRVHZ4tjLkuxg7Xkobdo2twngFnYCcijQ4c44uuZTUSgeUAiDkam2jEnkDY",
  "key5": "5WV5Z7iKqYZeC2P9dmv9cUiXautapMVje2yDr1YBHg7ahc7uezqaX1E51ihxbDPS363xPxvhf3FS35DxSkTsseM7",
  "key6": "3ZFttgYYAKcacNQyN7hXZt2nJWQFRzna2mgY1FVSmPRex2gZXLSgp7C1AhU4vAA6iY8dbrGz7fUhUXwVB2dEnRua",
  "key7": "2ut9c87JKxRkf23kKC1qHrxS6woYWYNPktyzTybE7vmkoxRLTjBRoHVKEpNpMSx5QytJ5BWf7FXcjvDzBhDi4XEg",
  "key8": "jVGNLHD3KE7ZB1bY5cnNWpyvwA5YRxVP14sqMT8R76CWWbp8Gm2XfNRtTZWe6Pco47cAEeBS6a35veLq9aXJHfr",
  "key9": "5C5fE1f9qjeUgJTaKnHDU62pGW8f4Z5KVmhSF9sesQqHjgqLcYea6tHq5j3xH1Q12Wm8z9os5C5WjoW9oJbwAEFg",
  "key10": "4NPvhfSbWpdCrpwA2qx6eYNWeVJVnzqYTMZNBpYnFHUKDjtRDSLkpWn2nLsumy1v661stQD3QgG9v5aRA28bS37U",
  "key11": "5LaEUxCQJcvAbKGhPXwcvm3BCtZvJeht7JbwSnsvVMKCMYzYuDBsUG5WxAKTKaSAPkj4waZm959YBtJiWqNiwg7j",
  "key12": "5tffYsWeAXgXkzEwAKJveaaS2C7ozrQbAx9AeLcWD6eYyCp7RYAxt6pr6iKrHeqBjNkz1EqgXs9y2qNmtrFWN9rJ",
  "key13": "3oyUYTcZSNzG7R1bMpta7QFdU4r7HzzZeUc7JBPHqwCBNMmxJNALYdf5tb97sDYvxo9ZRWpc4E8SfkSXKJuvL8cy",
  "key14": "3Rcjb3fMYfCNDRcKPExGy58Z1jf4grZ1sH4X7JNmLJMw61PuhftsDGUvBZwdNUcKsBcVPVZYJHfP678ThwzC3Z7s",
  "key15": "3LoBMbgtth5zJKWto5qWPxdSfAUjW5TFdPUyqZr4MWfrdF1xC7UeXmJkJY2gUQfKABWHztaiNiqAyFd4tYxVK1gc",
  "key16": "2ANp1sPR3jjKAZGJGhff17p1B57WDwUfYWQzjwDCkLiezTd2TCG6ABoySy5NT6gMHeELofq8ohpn9pvB162hezS8",
  "key17": "4or117UXkcxwKxbLGj9nfiZNx8D6Wg37gjjQywWNUSQuFGdWumcSZbNq18GbEssvKD8uddjMmM3ja9EYdMgduE1X",
  "key18": "2RcNtk852F7EaLS9P4hfH5eoYG5HMt6KN3b4v5WRvCYSCrC7B2rp1zd9eVnn6SHQkNqdQMAuVTkKiqi1F9ijdCNL",
  "key19": "Zu7krxc4brbpP6AVt5LWb6Kw2G6e1V7USnLmLReaza3oPKuLjgvE3cwEGZPHMa78SDfjTstaysta1KjJvckWdUv",
  "key20": "wMRQkAU7biLV9kGPpceFDf2Td7A6XrpdnEzvFU18FLSng98YNjmKaecXRthgV81Eh1eKcoMitBenw5MeEwLp44s",
  "key21": "Yd8Dvum2xV5mHbFBWP696G6tKinAybHzvTsmBCQ6epJQf2mXKysn1Yc2NmSqKqgaDaeK2o2GcWzczUQJSkbwKcf",
  "key22": "USJfU4UcUBCaBcjaV6Z8EyZ2kmpqbR18HQcfzgKJWsYGzmL9SMQz9VF3zryEVTQs55NPcuVEv3iFK6EgpLtFDMs",
  "key23": "wuktXJ6a27hiLJuNetvP4Qh9tePfq3K4BtafZi8dfnNYv25XgnqPTaNLG1YRywn8UTyZuFkKBpJWjMopvwCdTxx",
  "key24": "2cjMBWJWgWdAnzjeLdPQnw4WBvNDvoZTXPrNkqGm2w735UxbkfpUnQTryPowSbohnNwmKit6eQ3jLP1uCo1aZm9B",
  "key25": "3iuNzoAs2NgYPuVRyM8DvcE7pgt6GMATogPbuoUEccbSdDFbsCqmLoL43J74YJ2VeCpMwUM5UhMCYvZhKV7AyiJy",
  "key26": "4mxbD1aMH3EqAwFznXhZN4fgR8indWQBqNmbj4qPSU9ry9xb5JpJc5hmNoXd45tHGx71Vdjs1UjG2aza1rc24DiV",
  "key27": "3Fkb7MWF5q9pqYSxxGntr4syGn5hYUjr6phdNofTcrwFmNbPxMbRS4Fd6QxsSDcu6zX8tkCGqUuMq9tUQ5qnn6By",
  "key28": "4p5RCvFbhDqBmmW7tKFZvjhzbC5LNhYRhyVTmMfqXLTmPHHg5ixmP1frD7d3z3van66dBwNWZvxyKF68nmioNLYj",
  "key29": "2aP9B56wnKkFaCkdm1TvWCenA3T9rUVsCJj9f6BzR1roaJY2WWtTSnJRu3uEkB5ePXvupUnoVC1xZhzHYojq5Jhw",
  "key30": "2AHy6TdVpTmA6z2s9yaH4xHU6QM7o6z8LcswUuU2tiiGfCiaTBW91Ppwn5MnvekZzfPZaYEhBcnxFnzxUQUgSd1E",
  "key31": "4Wum1VSFwGxMLF9pDZXLbZAn8xstPuhWkYVcYJLcpyAuLoFyyRK2DfG9yFe2KqLuDUDU43MFzN75Uj8pFuMkj5L6",
  "key32": "473VGUuyB9gt1QmK4AMfs77aU1zCHT1xw67HJ2v12EKwgChW2wtawkgpyD1oFzxoXFsFQPWKUTwrmePsWkfGrjxV",
  "key33": "49M2ZeQdNq1KbdZpUPerC7MnKBnYWyiruwf39fM44Hp1tUrXtz7ftXENfgu9R9vyVT6pTSMjs9kxAXuJZYoCw3JQ",
  "key34": "2csKcgMSfpKcbuNF5J6BwQLgc7X4txkhb1m8yVm3bwRysRdF4pdzt1VpJgCdVht73YCuoHVtdDefr3rHPThzxPVb",
  "key35": "36L9oCwtMFt8oiwLAsnSHnCkcnNgxtvBF1KioF3XCFk3T8w25Bx17AZaEtRrkzXM6FM8DXikAVNTBoGu5rxmouw4",
  "key36": "2q8TkQkgiUym51uWg7EHpU6T1MBYuLbuk75uaYnZ4aSgQuhPpwd6U8bnTpvipggNJghFH4hLm4uUnZzZEQ4rPGwJ",
  "key37": "48iJMLeNC2yGdTqRqi7p6B6YkyLZXqiUi1DmKmNZkqeGSaRZWgs2peNqvTDb1ZiVsR51fn1BzKeM1e4bcqASmKpJ",
  "key38": "3C27txMUFdWozD9jPYmUkRVjbJuqwVAgbfktqMGUciwGHEhfHx6mRA2dAgcbHYFHZLu2wEC73kY2jyZzzMqEpBEP",
  "key39": "49r5Gf73RsJMj57mx1567tjQCCn3LEjs2TwTsNTokDHt1RWhhCBuyefuyB2a5TvedWKEnb1wXVVgbhmFLh3ae9qL",
  "key40": "96Px75JhTWhbE7KUYaUmMN8zkCJbgd7MtPp2NbCt4GwRberhgDbb7mXEkPfYyN4PqcN9EtkXan8D2XYJqUKk8vM",
  "key41": "kF5ApPD7VvoRqwmSgoE4Nwsi7UwxfAXcgmRStc28UDYb6ueBTqntkNmfDFSY42N674WRp1BvbBKGAxxe5q7HQqt",
  "key42": "xV9k66o3tQMqWw7SfW95stgU79k1oaSoDkMAyxiDy9mWXkrp5FbY3dAFPQaptzJCXBzx6Tft1aMvQ3v8z81tTff",
  "key43": "n1A1nHwZiaogzt2nVxC6DPXq9xSYekdfQ9T7vGmPSbSdeuMfZWPjZUZVNfugk6RF6vkypQA1dxBKWcneR3GR1Gy",
  "key44": "5ebqhgf3kuEXBkyJcoJujhx8YTKSifQAcfL69YwmxdQy7GCBEAfZYYVnWAeF23HZgF94H1RZp1kiwm7T96b69BpS"
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
