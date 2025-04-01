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
    "54DBUVt4DfmBtnPgdKnpd4uxP99ThvjwVao1dvmX2zLPDoCrS5EGTaYwyTzn2acrhvNopEHZRNf9n2P8VjdpjwvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcUL8CR17yepFnaWqonCP4xpHqrh9TrFRhnXkgbJqV42wactsU3QLqxepbU59RgGTka35v6dwbqymGu2qK3dT26",
  "key1": "2Bgdpo1bUbPawDeEJMaBknfk5wG9QM4RLrCEmDhnigd8XMBsJvEb6UN1Agedu3jxkXakKipGk5Stb4vkGAryAU4X",
  "key2": "7RBo2mwqUZCxXSjqwDeT4aikACu41EGCyuYFpXzbrUnLB3RvHWYP955EJYY2zYTGrwzrcSv2KV2o4jLab9HT4wa",
  "key3": "4V9EwRtQaauERWUUiBt5m9mS8tou7XSiz3Lk5pYJyUc4QMApQXJKzdmNqNKXH1Y6w6HtWwK6FdzyZDQMWEig1ipm",
  "key4": "2V6nm1ECfCxHiszuy2rc5z1WsMMHgtoMwLdnDyXx8iV3PqDRSDWLmUoHXQ9SsXKSoedF7MyQESJ8zzTuPCSonZVA",
  "key5": "4KXPNqpYyJP5nKvE7hGhrNDTD3J3VZFRUcoY2Hv5g3Fbh6RVeVNBkmhMBypWwBHNAZWtK1ZExkUbH6xkvqB9q4Rc",
  "key6": "RCJXkcvYZQjoYhMPr2syGZ3gaLpdNUpYE34bJjqba9494cFcTskWizda2ReKeEh6BpUy96GSqWo2cLJdxaSsrHP",
  "key7": "2girk8JHmZGpSru653Xw1b3jmL1fhrdLYWtJT1MwXbrEuLdpwq2PMG5U3hdvDQpVe8mVzXg1Fb6S8n3KZ9u4JgJm",
  "key8": "4b66rcjhJW28aAZcRfPitfAQBztmAabxzf7Wth8QYYZtfhLv8JighhdepgsJ7F5AXgXKgZpfewg2w5U8rNij7zaS",
  "key9": "5Fbdzmgc3v2xUtaJ6posMF387hqa7Lb7NXVv1a4NqqoVGkrpJdBqZ9gvxDArbNGYE4GDCDrGfM4Es1kEvY8bVUqs",
  "key10": "54YFZENPxmHRWW6dPZbx9Vebc4fnetBJQzyZxHpm6EbUq7tx5pZVPErNhErTEPbXiNpsrc5r4NtgkhLYmDnVEGHK",
  "key11": "dQKWX3RGrigbG1qVRW5JB5xwzKrXybmkot7msbehQFvmkunZt1vFSrqqXsfNM4U3CLukQ7q5Yfi61U5KmsYLQoC",
  "key12": "NjLiTUx3ffzhsTk7QYasgqphWvW3g5maCb4QRKrpfauSPMUMKPrXbTtVpBSN3cmYAxtoQMejmjVqZHWVBWtHSWZ",
  "key13": "GRvmBDCuUwxGewQegpobhhLfnf2nJ2GHs1brHJP9wuByKJ1PrgRDfYJy4YtGCfzXo7o6ur9e4dzVdaYRhwsmivV",
  "key14": "2LhHsUCvcuBZzphFTLbwHwBzwxCviUiRpMq1iVBXjV3B9RDcG4E32TQwTSzKEWTgx7KNT1snEcA6asmSSPh889qr",
  "key15": "5oFFVNRSp8PiZR8KEYSrJJoTnDgzxnzi2vwo77f6mw8u6TqAqaiuSDngqEzunHgiA92LyWNcx34WESFHgZtfLhpY",
  "key16": "1c3nTCsQQQX3MTJH7mS5ZqEC2mq7cCuhyPpUJTvDFSTTAkerM3aPZ8JZXJR8v8qhfLmP7doPTSiEyX97j99oCKu",
  "key17": "mAtsrXDzxB3SCT7b7aW8U1GcGsjGXzVnDF3vCkdF8Ey1gnLZjnRSJX2tqYa6zaSBppQXZfJ4Xp6BR5XrQZWem37",
  "key18": "4h58TnbkteVTE3imuYMCiZVVXDhNGSXtbJSeSKy7E7ypVox3USSPwS4CGKJ2inLJMppXZz1nTFTXSd9CJfJMkUjf",
  "key19": "4jFcYf8PCqmevwRy3YeQ1sHYP66Dp3cKBjKLwPtWDqcuWrfSFcHdJXFPp3En7J29kEuK5UZDcEiFQAaWLBDK3Cyz",
  "key20": "5HHDEuy3QnBg6tyGKGr3HmG12YMFZqaSekngJafeLQo9pH77gGVabDWSYmrQubxvqm6NTRqbdWbxbznkZi77uKcu",
  "key21": "3Hc5zpncv5HPyB95RsK5RjPLifLmoQ5yReNT8bmZqhhydjTbw7asBGzZL8AtBFjq4VWXBcRT6sSu2qaFepYnzvkY",
  "key22": "2Zw7AJbAYehd531vQoCurW7jHgLQ6Tp2hND4mT7chrBHDB7MLiHqDHxrQGRE1xQNtgcCZmk72Jx3pJ4NMXvDx26P",
  "key23": "4oGsE3RMcK1udqNuv4u57E8oUFzZUdmGBaGhWExdow4B7oyCgcQLR7ngK1Ex3dFbbz8WSR5ADSRUQCmSWvduHT37",
  "key24": "3SnuBAwrrnR5DwaGZDW19ajZUtASEoSCRMQLnzJ3WMXdgFANrGak1o41pb1dUc42Bks9xcPqAqKfdQvjP8EWKzrk",
  "key25": "3ShzfqKc16KhFHYWPa1GgGSrpmcnpzAbiCZrxV9AkVPJgu8PMVpNS4ePrfcJcZGgymEz6rQEfw7ZXbN6mMLoc6jm",
  "key26": "5dX7P6aexbCxZCYm8r2YmB4ZyHbmQrF2RER5WM4rGNgE18H9RyauWDoziS6yBMKNe7ESo3jov2VVVHDnAjLKd2Xq",
  "key27": "3dWbd8Z9xUghLfotEhS9D9GX9LawE8gmuPvX2tGHKVVhdtFYXxAGsCRyLFoNPB2Q2w7ZkoCEa1Y9LvwztMHXFhH3",
  "key28": "3rSiRcUrWcGj2ztjPdSPmH7edvakHfKXkHLqgpeWeignthkWKZVms1mDVRNDoithUq9ksb5NtMA7tkLx3ftKzPCy",
  "key29": "2Y3QMaoSzhPoWZL3S12UvVXmyU4Ak1Dnf3HVmmdHb3bzE32mohdLEgNCozXzehWgvpBwQ9fNEXzKPicPZrzqcsKW",
  "key30": "5antnXQZgpgqNqnSwnP7cUSqcMsPMfEMmK3hRoFDRzJSCuCZ9xUxtsVRj9Xa19D6VoPdmspwh5CGvyzYL29efukJ",
  "key31": "3oxPg52Rb2ZH1Xtusm7Q1iH2n2kbuYX1aevitho4ooTeJRTqSR7MnfKh9rpdGJbB3iME2nJ42GVrhDQNEcGsYKbC",
  "key32": "3nrUAjgBgcNxwBMqKtjNUQ6Sp1ER41u6a7VgXGfzb17SU6fYryWueLjdMLZZoxQzKDhxHGaY92rAzest8rMBBeNH",
  "key33": "367QcXX2ZPfG5gkKyrbA4pBdRa3NFe4BWMAnzgJSyCHTnKovnhjjy64s8ijVoTEnMuw3N9RctSqbP8yeTPWmZhHV",
  "key34": "245CZYGvQWawtBJe9s8hG583XQQ4AHcqpsFFaPGk1phDtb2pY8xTKE9g21AsZQxwGHXhxyEeAfysAH2URZyyMiLn",
  "key35": "3AcjAYbaG44kGJHMQLv3yF7jNtgUBuRC9Ak9CdQyoCJKgPKpgjeChcHgzrGu66wBtDak78SbD8FWazpcDN4DJiwH"
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
