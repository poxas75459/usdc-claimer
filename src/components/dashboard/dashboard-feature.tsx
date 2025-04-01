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
    "2KXzkztwJciXdqhny7rTny736FQEHiD9auu1KZ8c4ULvau6iqUZ7bmBi95awKqswe6mFFpuf55L7Nzbd52ccANcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtLKs8UvKYw2z7pYcctURFBhqDrpyoa9NCdzVFeh2mYqp9JzhJAn8QWxCnpVyyyGVCzBXPVZ1gw1R9wv4TL74de",
  "key1": "3PiDQppzKonY3fBc65Jc1CrEDpKC2zGPtS4gyTxPZcUdffpwVeCtRJPwydMbgRUkDAkSTR9buAi9K2kq1rzH5qjv",
  "key2": "3LxP2cCZmawPkE3yd1hujoct8KeFiKDeeb5fEkxHnxew98QKgC56SyFxqxwfjQaQwfVb2AYMUTTUYu1ihZ5qf51V",
  "key3": "2fyiPBByBvo2YrSBALcSKFhNEALaKsz3STQobuCoVAaQAeLMn99Jy61PmdxRAdskyq1PDX6ttjasJ9NgeyttiJVK",
  "key4": "4ii6UgNAs43o2SAQxd8FB7x9Lew7LyyC6L7t3s5AFaU4PwvGRtoJkV6Z5pVXNhcHfztDjQLpY7XELNuXr4gAAYgk",
  "key5": "3H4LNx2XKvR3aJLwj8JjHbuJJujBNB5t3kbWiZSZHjXpB5XPrLZieGwEPbMxp7HajRYShgmjQGDBeHbCxKiY1Kho",
  "key6": "4YM8A6Nshtoma5T4zUjVLLgssJb4xQ3HiVgNbn9WprEUL73ctsBusBFASExHMSLZiRgVoRQZmD2QL2vVauLBLodZ",
  "key7": "26NM4ptbSumHAf8ycm7a5d8hgv6gpTcNdwbzpunyauqciJDpoEmEE3mdZocAWbgVm5XJQSWETwHahcfmirfLzp62",
  "key8": "3tEdvfJ9JUdPj3x17EgX6mzjtjS2otvp59g6JfbDuQzRxTjTJ9TMJtijDbyGmBpFp5pmytrVxmHLSVcexLPE9MNY",
  "key9": "5xStCk9smCHvpyTQ9T7Hd8M3Ze9ddijVRTCvepex1PXvawkBGKP9r78uUiUAoEyK263PhrC9SuogW3skrUbUx8qr",
  "key10": "4SZGEM6QJ2nfmHJRiiPfLyrgKY3ZzfFDzhd1F33E3tyn4rvMTMS9GF1154o7WSSWRF4cZhKUxwcxGvTxCB38WvS9",
  "key11": "54NYPeF1H96dniW9LNMKtGonLQqdKktVu5FhDhd7JF1jBXRm2Cnm6oS77hE2mDHUWc5UJgtxEaH8WMMf9S4RRNY1",
  "key12": "FCbGJjNFW1wHs3NTb4VmjM8Lwrq5CQDVjJkR2kP7VCPnnZc8hZxe3EizCbPSKYHfahgaevgYAcq9gMh7m8knctX",
  "key13": "4iS9wWMFDGhom3DoCJBWCsgD1VpsvDSyEsY2PKR7UbsF4ggUJPk3X3NugQJp7xsUDmyvwQMvcDoerGW5PPiQfv88",
  "key14": "2rjx7UvuWTBtYq7G9oTEdJAKJyL1CaPhMhd2i8F2yVoD31tAWNP6fceVsS8tABqBmcfdMuChsE7Ag6bSu1UWRG4m",
  "key15": "3X3GiXr57G9kf4vWv7n6cidyjqhx2zVn7JU87YRCUcZtzKfT663k1W6BbNPQszZEY4yQNR5KVcgm1Upsy5p2t3U1",
  "key16": "3EcQLSdrrQT6cXQFYWU6ZWwEfKAtE6mZVSWsWcK8mRxWGoYckmWjqLZGvRp64jn1NwjUn2fwj8UuvacfasKcb1yE",
  "key17": "SMdfzknghSYvnRmK1nSBvfC4sYcqL1rTyjQJ7kjQ2czb5sv2CrXBHyubDSkG69QsbuJCJV4Pf29wfPNAx4fSXNY",
  "key18": "3FkRkgKoj17pJ2wQtnE6drYVndoXj3bk5DVNBoY2hFcX1HQWZxRUig5hix7fdtoyNGC7KT2GN9Yhwfqgdi4qwqV2",
  "key19": "5nchghpq2e6suZ3iCdfySAbPAcPwxc1F3rHhxiLctCdYQxFUWjNRb1p6RkpdHBtqcGKo2rTrQEEboYLEcHXo4vFb",
  "key20": "5r9ukqX5B3ENRmbFm1X3MD3YWmj2485iSvVeuEURyK3QD3Zzizja74RBELMsKfPrXoXBEHLthE9wwMLVZTYDsKEu",
  "key21": "3uvpVaCqaqgRGMnSqSwtiUkGhHEd33MP5mkhwcHFemMZo87BNP1pFaE5REsmKYBGVpB72Xhv4YY7JQJLXLw9kKpf",
  "key22": "3TJ92DjECHosXxzosYnEjYQicPuynoEZZ2vxMHExzVznovLedXxj62DstQQi3ytShYtaj2Es7zya66EjiBk7CzBm",
  "key23": "5kpWgy3hFTkcnFQYcrmvD7298yqrWAM7LwitadiAHtwBFTF2HqE33qB8RrabHyxCWpKA4T693gqnmqE86vzHsiG4",
  "key24": "24NRbUKVCLNCpLgdFZ6VWM8nc1HmE4ecUVx7AMCs1oTBFApeBb9nA8mkmb2cikES3XurHySCGY8nb3ZUY7x3xMDA",
  "key25": "4F61o4aaz2Zjvx1ZVKxscoY83JUrMdv6vKShTPtXDaWFNs4vR4w33CtGMuWAykZRzpVLXr7XvTPHSjpV6dcWdSoe",
  "key26": "29rqrwp5MwT2Ps8S1tw5AidgfrUQhkqQooVaLR9J6Pf5LoX8rP58A1SRAdhgKJw5W3cgY4P7gdDgmEcYavfWtLXr",
  "key27": "5ftsjLzjh5Zpt5agLzvZ9Wy7CbB3RJh7t4HvBHaeG8RCWkah7FvYQ5VYZVHzLWoxY2tWsT6CKZFn2n8z3qA1p6SE",
  "key28": "5j5tLtzcjbFodTxjKCFoGZyHWyHFCvonAAzVAxcQNkM9ybufBWtotFcq4EMK6j5eYwijedisaDhWdpHzreNos7kd",
  "key29": "3uTMFkJcnrdvdRtG5mWRbVGx7NErcaeStzT8PsAUREPir25qCcgr2QDhAkLq1bnitjkbBit7h9z6MntkPG6Pie87",
  "key30": "3276Xt8aNa9QkTSDr7jpsBXkRFAyMVWc4auJi1QiQU1v5aVN2QiM8RJNSKfe1qPJim2e49SNuZnpiCTG2z2LVNPp",
  "key31": "5wNB1uqCofVirHwsCzrLJy3SjTNikxXT4XWRaqGQCqJLHCZmpK8z8AR9QBWHTzj7AxmdJueDp92d6Bq8NSitSuuK",
  "key32": "2a23n2w3fhngS6K8f5hLyyv8Y2HDYPQTEEUurX1yMrFRUscyviRm6eJNVTxZQRH8Lu4XBiFCFSS56UBGd5W2FWs1",
  "key33": "21Z6ygasEHGaXQiSnRmn6jmzkuicjCZnA1BLELU8hGqSJBiyNnR3N7wetkmBFLUbwrKQHd4afynNGyF9mA399tkk",
  "key34": "npM18XmPWD4HXkfSBpw3EehaZXdojiWF3HAJ88wXp6KUPS4FiDPSxBDFCqr2Rx5RAmPDpwnmF8AB4us5QMJDzZC",
  "key35": "4RF7T66JJzLDx1uX3rgwAycm3wrfWDMrkMnZWvKqjNqoE5oasfrRY78ZJAE1rEHAQTDtcEnf9NK9Qbzt2ijjVtoP",
  "key36": "FcrrPyQvA8eQdwsHtYVtd95Jtn6ggXqwAGkynCeUGkPJfSSd7Te7wW9sZJfcJ1z8SJYrsBHajsPmSz9GUKd66fj",
  "key37": "PscuGwZvQKeGWzQgEmuLMLKKa4MpD2jQWMBS3W4e5keftYzYZQHdnBrXYpjHxJCE2WLLqhRUYvR6xkL5h1azVUc",
  "key38": "3vcfxvtvuZcwYfpnzaXjTLjpf9ZdnnHaPvZRqawujUMmzXNKGtcVw4BfkcTqkUdff3so9axD5WYi2hxPB9Vwa668",
  "key39": "49utLELVH7THnGZHbEGFsfgCffQShA6pw7Xmmg327qfTmh9wyibBX8LTj4e93bmdfZ5gCCR54mfzkhCDbuXD56wW",
  "key40": "3ypWJkrvmWcdEdVyJ4Bs2wmCMEwtyYzoeXDJHiaf5o4NxKxaGiPQboxBckd5ssNSKYuGXoaSBbu2yZ9VaUGTZY5k",
  "key41": "4ggGh27ybZjarnGDCio35myH3bo7rWDRAgx7fdppQh9vwHBBKe714StiCe3LbvTskhephwigLaXK1FCs5dBzYiR2"
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
