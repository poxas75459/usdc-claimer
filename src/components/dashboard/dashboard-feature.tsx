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
    "2F9BkGmsHdj5vLyPZZptjN17ivchXasEy4u8XYoeth17sVpW7boHTqBY6jof15FvJgFdEB29gnMEKEZYvYftcDQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pSKbAGWj4NP1sWL7Pf94S5hwt3F9nuLTrNsVRWUZvanTmhhJB7wm6kcZR14KhViHFSBxaaUCRgoBp4YDWdNAB6c",
  "key1": "DnW5eA1mz3QnoCAFxxgwshqS7KSaBwT5Cy8YawjCEVPnzf5dRqgBbY1r4ztmGGnZReEsngJuCFcDKrxJ4FB95m3",
  "key2": "nfXLZ6ZuRwUpMa88bDQV5Md7ZcPWULRS4o6QptUw84etyhMeRanSAi9S8w3uEHAoKdmRZEAeBpYy3gWLfpXPfZN",
  "key3": "5VwyLw4XpBVa3H9KEa3v3SyHfkarswyjmRWQYyaw69ssKzjttcYEW9nS1gd5b993p3ALhZSSd8DN5vpxkAHwz82t",
  "key4": "66LVjHa9rXipQh3SfZ99jKpsVyVPcRciKJrceEcApB1FdvHJ9wrib1w4QMsiPMkCJegPSZPngCm5Fv642rUuibQF",
  "key5": "2mUjQBsH1cfdj4gdt2S2pSjnKFHKw4VdpMAgqr41i9sDAszEubcLyeKyb7hH7LWvEDWBiyawVQBMAVcBbzaX1SJ8",
  "key6": "4iNKLYpvUgD5eQrgXfAS4YQy7duK2Yww1ZXaiVFQaCwU5vWhwvSyopFygo6TrbFAVPE9cNSzGpRZp5rD8KTLTJqC",
  "key7": "3oUdqVPjP8Q6Znd9PBXCnGvBVG9wVCNxX1tsy7PHSipT4DitqJnjTcgDjgSyfxGjjbSxRwsnq9cyehBuQYMPpWvi",
  "key8": "2okyJJaxDyNdbbyNJ5LkW4nfrhbXFAvTAMt9o6Q1EzRMj9bb7TzjDodCEiUHNwzkRsrHETwiXgJnU3DVstozdUB9",
  "key9": "3B18utDi9Xr4s3UFa3gUa6ZjUmLdvaHqPR2ApeEAPkmv44cUy3A846qUVHTMyZdnAoe7ZjYAPFcJzTqGgvHKQGnv",
  "key10": "owTwGmW144D6RYYr3mvFRPcGoXcfxKMj65ki2yudouaDF9Ztbr1kkycTJjVp6Z5KRddSbpSTaSf33PDEkPqh5p6",
  "key11": "2PVUCrzkMUye8afC3pJE7BE78eQzHq3RNA2EhYvhZgYeSqp39RB4dcxAhaZ66NPyx4vpkUXVdzBnB49RJQxRCxVd",
  "key12": "3D8eYnieaaxacpnTXWuoj6e3K9LWhCEno9Ldzq9mj4dHxRcvXzXhhBe4jSQjDY8qgnTVaaDH9tcATMRfXCxeufhP",
  "key13": "3yz8vrXSCRgDYQWEnNv2SfpvEnQPo5anD12Lmd9Parc6jRHuXQqUT6q9SXorFGDis4dLpcbcVZJEyUksqKaagSxX",
  "key14": "TTuJhrEDGUoGY39CeVTH8PaqtDgGSAENJCgXWDQY9ezPb3jQ9WANBQK1AHKagHA14wB7MVgF2SionVm5y3f2KoC",
  "key15": "5FoRkfFZVZufexCUXrcXbNgPcDVWUrrbgdKdmor9jh8exqjhjBsFRkgVGZ4ezx25vsKsbzbys5CEqR4qwAvNUCsw",
  "key16": "3e8E5PUM6vzLCZbDLj8194ua24LjQ2hfdSUax2uSPBJb15FjKxpwcmqy6hZK1n11d9cGZG2sxRSMc5Qdv5XFRaep",
  "key17": "3KUfe1Cy5vSKWFgbq5j8FCezxFbNPbj2CrfcRLKwjBDQpBGiBhmX8cczWXq6oWYQGxMbPJtcGkdYLpcubxbNoH3z",
  "key18": "2HoaMAAA9PX3eb83q6ZgysL716KeJeU6mtKvkjSgsvN9mZULqPjNKXddBap16c3qKd7GNP66Kpeh4ibDNSuN6cq9",
  "key19": "2c2DD8r1wqfHnnHFrr3EzjJS7q6Tg86HECRdz5xa7UtiVv35B6i73QnheTCDQtw664eVZXkNfEBpAHKjqjrnn79M",
  "key20": "49knX34dJF1Cz3doKF8J3D3PVXuD6F8hpTYisTuTGvEBRdnDfnPRGAeH8ZGfdotiFErtrjjxXLAPPG7EqyDAqdZ2",
  "key21": "3KDPui65SieRQib2LUFSZKZqXUYm2cp4ZpKn3JTt1wX7GNZQRi5hPqcpML8Y9Jg22jeBNbE3UyfLPgJ4LjSLBzi4",
  "key22": "3Ny56FAAM5nX2hVN8LgrTqLA1ApC1r7FxWCG71oVQwkfHNKN9JBjv57pGr1F7U493Vp5HpyhaNAkna1P5rneJ9iX",
  "key23": "41qQL14q5TUhppNtMvg14zMbCm8RJrvqNX1ocRxPWmJ5VQ71FZyKTa4f3JRU6iezhRsMEALp5iR2xPiXYEscjq8f",
  "key24": "4HTfVNAEUWunwFdjKkH7jjH7f41n738UTRLJFVVmMcBaBWuhQXXa6Jto4hrC9zmL1kGJLbipnUHRZGyNFCzzq9vJ",
  "key25": "4qGVBTYa8dPCgmWiaATnRs7sCQUppSh4KvzUx5vekmt37h4T6RT1QZmELAvAVMNSqY3zqe7DCPHZVPVgm8SaViqz"
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
