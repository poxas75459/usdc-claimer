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
    "2o1xjyZNBzqNtgjxkSGA2pZ1gJQNXVXSaWFZzQVh6oz1m1Q9Vev1s3UPuiMNr2W665sP8hfAfzXK4FcFhT7R27kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yEUkqTu2NFh4eyrtkSjP55vKv49MHQBMyh9Mqk6D5qp2sbtqV3cGKpGquQ3jigyFP4BxVKJLwuwCK5aUwJePau2",
  "key1": "4DKshaYgMq8MvjfWLhzp3ajrQa37QDcEGx3PRveqvWA3s9mhEbjxt27rqRZqSwXtXFJ8QDEnjuSHBzPBvP9Xi7C4",
  "key2": "TPf112eqi1m8nWb2fuTihZVMmspXPmNJ3vCZdMtCpRBCBRWVaRWXxM96WthBm7KpYW5oGd7xkitP6GBixHfRqxG",
  "key3": "5qBXq1RXk7GJabYmUdcyQ4wuS6KQnsU5fJtcrD9kCTk3o8KK2JvrqTcUq9TFSJCHKyjGQRs1P68HD8ws2SvvmW4s",
  "key4": "5q2bXB4ghwKe6AAakL6D8HAAxEPNhjtALhxkFafSmh2PhPvQwKaPdwj1AvB8rtSntWFSJejgSqDPSjXzSoBTy6QP",
  "key5": "2FeCbPTKMYJyrDPCGZaWmybRg1ea9SSxsCnEbfTEk56S2C1uukQwhxzFea7dC5cTNs2gsBFVi2L3sGj9vFZe4ZsS",
  "key6": "3dmmq1H5S9q3pjCyaEGbTF3LsNJtC4copj4H3v33moWyF9NJYMap1SyLrZ7u5QFR2X8r6afLK73eCyGonh3zJUbL",
  "key7": "4SHnYG15TZvQ45pXEqFNkXC44Pq86f4ZgBvnnDeG7cDvzFsnqSftUYV7YsphUixMfC1gLFVBCM32m7iioo6tpdj7",
  "key8": "2o1uaauA9xx9jQBQhSimismsQQGWZQJNtTXZHs8Eu4QZzSofiHfdz9a2hWRvTPnecYCM5PLTvkzmtoDddN8Sm381",
  "key9": "3bHBXU4AjT5Ua8GoXUVCkrwYAvSXUH6tFJSmC6PQyVfsPcPeqbGUZJY1EbXFaJhEsQmnqdQM1eQLvsXppYHDDP2n",
  "key10": "3fu9AsphhGzEZRWgA7Kyt8jJuennisofW2V6NKUnhzQbvvgVB6Cdxj5kB8QSwpnQcwJWdmHm3rC6vJNpTgCpxjSg",
  "key11": "aWJUJcehfHLdpTRZM1krGq6HUwSdDnWgKQFR84gEJGJgULGyovVQhyT7CAfafY6dt2fWdtm4axKnzztsEuzHMH2",
  "key12": "ifspCpQAVAzQJKY9EKzGdJQDWUJ2WWBUj1fwmKTCfxJk3ezjZokLAkxrYb7JrEgPatiqMUyxPTx7cYsJ2tkh3Kg",
  "key13": "32g1F7CVwZiu5ZfV8m3xfn6vRRmeYg5qkw9YVxZ9yzm5kxpFQpkzoxfzJbyQZ5DiqQLU56jdPZdCKjjKYkzE64ux",
  "key14": "3ba8WzTRKGgxQUDCXSjsteNf4735i1xcP5beTadGtTWgrD6K9JtLpQ8pkuNB1Cgve5zjStqiRSePT4FyktbHWeWD",
  "key15": "48DowNjxe2GX2PvcJJvQUa6SabiThkjXMRJKfjp6C7HjnEP8QQAMA6ZtgAjdk1yWFvTEPok8bEXvqoyVba4B9sk3",
  "key16": "613F9aCdMXvcaC1oTYA6yRaUm7Eqeq6d1kKiUqgigu9oApcxF4ksMKXPSizUBWb7vAzFtuP2sfUGsWgXQogosBRg",
  "key17": "3qz11XMpPBFZ8uJ42cwBNbTjbsVnurX4dUYAQaaAnCJcufTkSkUgSSi2tnaX4nFM9xinv1f2wg4EYoibEowXs8Mu",
  "key18": "4Ko4d6Kco1L5uWceeSrJQ27Aq4kidEuv43T8Wb3vA8NS6phFpzPzcg6a2jrxcmvhC3K1kxkDhot87t8jC1AdK6Vx",
  "key19": "5D355P3YJphYHK2pzNv21vM4NeYtURF2LD9p7x724xEPu3ZpnAHv7YSUt7pzi1V9XnFyyidssS6gA3rQhgM6x8fE",
  "key20": "3ZdmkTT1wZs7kfndTbfqSdbVHt4Mrb8ZwpkoeoU1dYEUjvvpAwwD2xE2Cs4qTa6YkueUPFBBdoote5cYXoTqqFXv",
  "key21": "4CihXQHSc1ZyCT6KHu5F2F5GYKuMdsFhBn5Y6SDwpGkcrwkpQtTYnUiKX23U5YbaJfiEmKpLmzBonHnVimtZwMJp",
  "key22": "4ZSpEhaFcvy21HJLcCHsXs6PbGPbrDcyfhXiJ8DB1aSudTdko4Enb1ZLnJAdhSbZLVmHNPPZomCQvQoGCydwwzfC",
  "key23": "2G25G9Qqmv6oCa3bopwPPFfKvtWhjgcugfbg1SRCzPZ7XXT78waSrMCggxBxLP4GSXUD8skkkmN6QnZXJBt6uU4M",
  "key24": "59JqoF3XALx67a2m4XrkKNscY7R3gwpWCU2DnApnoEE1GXzxQwDVeUWtoHUXu7KxgAMvoTajHUQngwyjQxTSPc2x",
  "key25": "5s1CKCb1ankF9o7pGxCuNF1AqPAEtkxz2s8D4kExg2cLZoBxG32yJdtNzior7uAcZjzMwbtbyeufw2rBQzofgYT1",
  "key26": "4HWXLY3ExVyufKjJc14o4TGo4E3aAKRTgVTsXoMgRsRTqsbTVFbgejDqY79NEV8mo9roDST7V4zcrpPmzFaseamu",
  "key27": "o3orXWH3s1kQJD5WbqcQrphgai9us9hSE65v2M3c3qrWwKhpPC6WuK8Lm4oVkCpfyWh919Eny4MVAS13msw4HAi",
  "key28": "2JnZ5EYQTRsz58nCiBMCAEfFePvLrCu8wQUR1n3KyAUhzGbXiqt2tiBpZog9YstHh698sXpfQugAzQ1KafhyYgEZ",
  "key29": "66Q8SqRuDpWETEmarrAfPqPgrNtaDPb7w2kGGAVtgEZgYvhJRoQ6kdmoDt7WetyYagWDcR4anXtapRRAF9hbagT8",
  "key30": "2otnfZr2WSboe5dvN5nLc8Ut6X4hnUMmZjDjqoqhUm9U27Q62juYGq9Ska9rp5TCXUw3pWvaz5eqmF1rysmWaByD",
  "key31": "31X36jJ7L4DL2PTb8A2ZPsak8aj6VNc6tuqFz1c9pEgfHtYG5thdALZmtdp3wLCnsEmjeQKnCEm8Cyv3QacUKby6",
  "key32": "ThEkLyfnzdkNY7qviXTF41RBnHG3cwtEmdaKttDiBijQ62b8PvPV2Dje38yuf4xRmRbgsksgX1bMpT161QveBWQ",
  "key33": "5UTViYBdHZMSqv9dyAoyZYJK6VNMfr1MSRSL7jQWCpyYfbANmTwaD8VddyEk41FURCdXCjh7dGsnoDQR1YA2MBZo",
  "key34": "3hvTXvqA12UXwSUwc6TsuGzQKeuweFCniCEX13LFHMXVn3xKoHHR254cfN3QRsEU2QuGmUzwkqFAT8RcyoKU8p63",
  "key35": "5tCMHjtV2FNe735C8bKv8Hi9uPNTJeRBTj2TAqDMySxm92o3cKvDwhKCoSMM89eXjtbRLC8Mf9vcA84spNBJk8fv",
  "key36": "54Pz7AoxK88QEUUwzZCQqY6q4fhZcoaNtJLPj11y7r9x7q9PCESmQ98zByBdcH7fEHoaz43abrG1xEfJuUPqgHhR",
  "key37": "2uf7N3jNR9AVksCedCb4UXb9c6f7XF6vSf9uensXejuu86yNz8H4GMWJYGU4e3T46aeYMympUYjrCfMAW2xdSLZy",
  "key38": "65CkqMWVpDK6kMVwYyrq1u8HK6wgPhsbZEzXTxVaLuqMPgr1ncjTcJHgdjH6Z4Nuk9nDBmtNww9L3QBFobXrvEH2",
  "key39": "4EspoJdapeDcYoozYeXeYokJ1TTTURqsuioR57icLWM4hUAA3CFLqnuGd7javqWA2e78TKMpBbesLnMrwBFqygV8"
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
