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
    "3MSHarJ4EGgbzFGTWSjwHG11cNhpYQh7Txzbe4KnB7mK9kvCSbx3p2YgCZ7vNkydw6MvTKMMQ4ps7MT3bUaWaPHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wx7EAoaeuVzBscJUY7X1NGtBXrgUNaLtpoWwkR3LSuFSuDp5kordRQk1ULSV4chddLUpAp5TFtzwXcnpDWauMhm",
  "key1": "5ndrk1LQJvRzuQDEM39QBMDzrRxCz5nVqTNh2xwrqFByRJPYYMLauqzZRJLcE9o6LRpdEuUj5iXLDWC14hysn1se",
  "key2": "2JZzEU5seAhCDfAXHek8PGML5xUzBHnNTfX2taLDtnnDjLcbKSjUJPny7K5DFCr3pUkRKPYBLcLZ8njdUiuJgANL",
  "key3": "3Ykp4G5zVx92nYPahJeBEa6NbjWhCXgYzzmUwwdXsW8Xkc1emfMnEYCqRhLWxeqFYCb35pq83HuLknisnLRW92py",
  "key4": "5Pdo3oa5dK6JoR9XbCF1UtpJPUhPd7FNaWxP69J3DaFqdqZaRJqV5Re5F5yN8R93ZN2ScU5PSBbzt4Mvz5VFb34N",
  "key5": "2hMe2s9TFv6nwEBk3DN2d3Ft3FKXF8bS31T5zwZyQoC4SiWj4jsbzmA347fGawG8YN1zhCBrTCgWsuxJQgPKhBuM",
  "key6": "6B24fXQyJJ4oo69VayLQbnx1rdrqGaSJSkTuhCDp3SR58raWWGYp1XPPfLah7jYMPjQXbqXc5iTvXoQfkZZdAYG",
  "key7": "5zVdiGF43Y7rPikzKXpLnoVBadkCB5qRP7xtCCki8m2H1H1nh24nx8M8iqBrMKAuZuVAzT33p6imbmhvBTYBYc4L",
  "key8": "2eK7hXWnt9XFLM2kbwEYaBMGs7YrhqpLi1pANd1cEF98HrqUzXQHRgj7wxro4XTYjbRwNzhuVnX7eGoZ39L6W2Mm",
  "key9": "4eHQiQr5E8MnYhJzrwJrxCBq51Q8rgsWEMz6kpDoKu678ti2yjfWp2wAj1Brt6SoFn36CuKS8BD8JodW6UaPybmY",
  "key10": "2MNCoyn6mEfJHWrtdKzQ4fkxCMYuuZkuR2tNVfVggTasshiGdykpnA2p3StKXAuA2g6FZC3UgtYUX9tJfZa3jxva",
  "key11": "2B6V3XaBzk5aZXB1GMyX46BYsLQErCBNW7iD5Wa7sLsjiWj1sRYsLvhWpGRdLeMfzXPmyPKTnishR2GRMkZBNZxC",
  "key12": "oRTAvSB8y8QeUik2QDPiJjQWjB58bB3KwYfb8FcnrpbBRvc2J6YGpJAXcAdPCK3BNScGkZ9XLU3kNvwe7JejzKz",
  "key13": "3Gnd38peqz9x6DdF9AyTKdtYAsQSBBL54xE9ioikyrRpVzBNCx9xw3Z5TeACAkoEKJNPwPiAzQJdUoxMsroLfrkj",
  "key14": "tPXj4C9ShGcrJu1Xd5SviFRgx9NX3ZFoUnvqxRwqPsiDDgxdGSbjqTAeVZC9gybttyobxMhHYU1GQZu45nmakeM",
  "key15": "2LbR8g2o8sQnvzVt1LMnYfWUwMf9n1mAVWLxg81m1h7g2PC1NhYwC4vFCfp8hoU7AUTZBbphRBL6C47pAJToZ3f8",
  "key16": "2DZE6pu16Gs3eyn9kb6r6bWGmdtudxbgi483fXuRaE2hudb8wyUhBxoEGxAocT19opECgzRaLrKHka93RXVPQDes",
  "key17": "XerCvYF8j41Ac4di25WYcj3EfPvqBJcAg7caw57v1xSwtq4x7Vs3yr8rPYxHcqC5M2SBbTi1rALAnQ7aWQXqDYf",
  "key18": "3X87savgXPqzbR5Y8NDyK9f9an5kEERLPMiQHFyVcnzcs1i5zidTgKDprtuq2ZSiaqCbRLnQ24vttMUE3DoP7ZJX",
  "key19": "5tjYveCwyGye5mM4R7eqg4bauaVgWm2iHAe3EY1b9CYAfbCVbXXNNbbzWA5iUzEZLPyZxyqgRikyvy3oUbAgG5tm",
  "key20": "2NYJtpAGvBFnSdAJRjbnFR68kvkAs91Erscx6QzGnDqD31W1W82EfEmQSp1zkRwGwc9HTP2edXHPqvWNee3CrGG1",
  "key21": "44p7rNmMwqnj5mtMgKt75HpAoZbMLQ6255jn91uE4sKkqwnZptLCxXcMqXFthjQTGHs93SS8zcyAhECftKUMjuir",
  "key22": "5cRn6jwBsLW12CS1Y4ZCLTaBkPwoiFADtC9MX7yXsYjn9bE3iFnLYMbcjHUjj88AJFgTmhsLw49Sa7amzgfHYzZ2",
  "key23": "35HXUGJbAg9tbWvrwWhuvJS8Usui5xhSdeskECj7GhYKn9CkSzVFgjLjjrt514VUsxits6dKB5hm8t2srfsbpDHu",
  "key24": "56NzAfB76z9jsgNYWRUpeYyRiPL6Kxxdm9GbejmYipz6zfLqm5ixziT6y6ZRmRGjN1iaY5AaYo7T2YgKJRZkXnQr",
  "key25": "3apHjtmXAQwfZsbZNmeCy13wttK3u1wZdQRFMZyjC59qskZpE32CDrp5wL4N9fzjj4ydfYwSEHEP2D9iYM6eib9k",
  "key26": "gG9Voj3n4zQx3wjghxv8XPeQb3DdzvVQGaGyeHNFCT5FT3akFrShchSEjvyK1qosXCWAUQj8LEqvr7o3kguYrNd",
  "key27": "36JnN6QzzZ2pzxKqyjUPwPkY7tq7XNvXARxWq8oMCCg5zkkUP44X1EUqA2F8J3tB2Df6ugiPaMv5YCSUuvYBUZyy",
  "key28": "fRYmSZBtvo18B9F8HGcTejCXzzBaBuuddbwsHUYastdSxfqZt1iK8MuzHEW6gEniyuxbd2pgttRbKDond1Guis1",
  "key29": "rBqGHcZBqicakyJGkVkeHEswrKAWZJ55fM2JpK7irt4zJkmEuJw4vS2TsF9NzjyxCdjSnnddsGjzTeGoUScigfB",
  "key30": "UyJDJYEdbzDiM73kii25WcQRG6av7A3kTErxHmh8FNt23tQwNWyfHNZ5b94EooNNPLunSPWtDoGTcBH7kiXWfKk",
  "key31": "5jbynx49rYXibsCSW3wAHMcjhARe2GGAKdoAkh5u9TBp8r5oJzQPDwS9JXVPcL12nGTZHyGrs2Eg5tRKoEjTbZsB",
  "key32": "SNcXguttxtnNbjSWxk4P9rkPFRVeZEGNNDJqmoBXu9enam14fmsLw8ubfnZpPQRjdLk1TtFF4rbA6FrDLYPC1pk",
  "key33": "5qC1tVSj2DVii8A8oiiChT3QJy656XRAM7w1KARLi66JSKjYP3Eo93gwABdUw8N1tAZumxDJzp1EcH1g1kpguhif",
  "key34": "4jpLExmeBmPTg7Wk7UcJyerjfGbmqGN6G8D7TYaeqTVK1Qu2atiDwag12pEbLSeHFcJezs5t5ug4UWuL4zjx2nbR",
  "key35": "5VfF6JKidTiRaGjFtTGMWpGbUjZR8scYJfLuMLCppU5bDea1LYnivQEThKRhMHt8prEeRv2rTjL5pTCLK38goSBt",
  "key36": "2SLCjJK6fpo6LAgq613gLkFgxTbotxYUM4q8EHa25sXA2E4Up3xBAXLnwrtz7DtQroMPCbdDAoDXNLy3m2UDww7R",
  "key37": "2zL71YPFCzNF9V4jjb7r8j7cXUnxAsd4sx2b49GAVAnHmLzX345YAMmo74uwfMwhK2jNdvboenqG9ipBqbS1nqyr",
  "key38": "BM4rwSbTgsXMNYX1GKcWTffbRkUc8WPcCTYJgMnipkRvmotyBr6cRrEB2tfaeaszvnWBAQJvKw98oCMgfSn5uDx",
  "key39": "2gjUp3dPQv8TRNJ8FZfc79GJUtajnKVdaCAFDPbDYVMkp2HNEzwCsmC4R3zgCK4vhEXwnGssV4FNK2JzExyyBBZv",
  "key40": "2n4sVbwtzj9PoMRcZLt2a9hHS6atzNrxYNX6bubjxs7XqZGoqWtoarsGB3fATtsV9kUh4nnLdia1MRFT7cfbT9HP",
  "key41": "5u11AafycZizDqspCLyz8teDMmgygtujTgpqQH1EFfkm8GtLJ5iHjiqMvWF19tsQH5iTfgZdgBAHUN3kanx2P6At",
  "key42": "2oRTKBc1eDhwYfsDAFtqZ2uLmXPtjELNSUnZwxbAGEjpZdDKbNr12YRQgGuLrnYxcimDL8HWE5eRf1TZXBHMLPyE",
  "key43": "4W4t1a2b8cRhron2nid9M5AAPjHQ52Qd9apuPwjncA5qVEc8EFsnKPmrhK75PHFr8Xg14gYMYyE9NBP6LPeP5R6E",
  "key44": "3ZTw3mB1eATC7DCk3vHUBfLS13b6YP524ZRW2q8JKY8wEQggAnt4EVqCBBfamrLyGHgZZWJgr1DK6QSGmRGmE7nG",
  "key45": "2Gfmv6QGx4LCL8z96HrkcFRNAbxbLspBVddzGnyD23HxRTy13adUnVRvQH2bCpuDBNnm5k6pE1NuVFSqU9nA9AyD",
  "key46": "5fZDtF6iBvRMGHwVAwW3D2tuJmzEj2mYsX13ocp7v9Ag5qFzv26DTkWjGzoj4DAZESJa1zaJQKEbVNxbpT6K1uE3"
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
