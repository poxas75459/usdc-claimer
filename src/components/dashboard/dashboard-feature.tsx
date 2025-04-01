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
    "48NfGQkUpNPLNowSLAV7EgiLP8BBa5yGhgoCEEUJY3iSnmwtQ9Bc5Z2HNBqUmUsNJ6EV5hVnQANoWfk1hXhzsLJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTnaE1HHCTpAh9v2zftRAZAWMUC2fdtLZziMCzgA8XQBqM1cs6Cjj9X2xMaY8X2bbgPbrvEWn4vjg3fqJKApNuV",
  "key1": "2LDEFtRQWbYZXWt9FwCJKGYkkq4Q5gyZqCHTSx2u4ov5dcyMt5Nc8QoTCToZrgnZ2S1q1zLdQVzRAbbfbdBJ3J8C",
  "key2": "5Wp1u3ggdaPJN8KVFXWU5cgrYcyGDaFE6VYypxzLeUTHZTzzMWw7XejE2ehevuZpdoc5WLYjAyX5Ax6Rpt4EazjY",
  "key3": "2H9dDDWJJg2adxDrQLVCTPqMc6H5cWgy2cjtkq8sWGz4BPQvVrdE5cvNQBznR8aQ8tyjSTEQuLMN24A79e5VoxrU",
  "key4": "t8kp65mXSKwMCsbXBQNrTj4HoneKfYG5iowaNtxofwkYKekiNho89kuXsJJiAxQyBV2tYaJfzTadJQWbuU4tRwv",
  "key5": "2sokSqNSJ8qBS9fnAShe3iTfQJNqS8cmYrQATf1Xc1kX8KLgcSQgoUoJVRSdsfc2xWbywR8a1VT74AEkmk8XeupX",
  "key6": "3jU9A3bYxssb6fydqGcZyd7BPcTMB5ekHuPEGhm1zbtqU91zhrs3rLVR2FQr2aBurXKXywGevR4D5C54RDsK9FEG",
  "key7": "61AeHPDVpnH9RK2Rjx3WBr18w7WYz9LRvGxsQZfTSro7rzifPUKELU7vUe4djQTE9YnS52ro638fix5NEdJrUGrd",
  "key8": "9nVcYRxwfwrdTNpJ8Z1JhgjiZNCa4xfw1CVLJKwpjkRoLr8SNzbbChjzCznTDNqWvgX5P6aUoLXzT487csa2z77",
  "key9": "YVd4VZmMopvtPWFQC9dGYknFwQP221FvKk9LzUZ1oJCT727AyC3x5QfEs54Xt8HnqqajD8T1uwYsigNqCRcywYt",
  "key10": "67LZ1rZLTeJ8qrJXZHA5FQkTx6j7vAhut5EhKNDHhjEPGEZ4iK5PyVgxwSwNGydKaKFuNtpCbgsExpwKeDsV4JTR",
  "key11": "4E1wHQKyXVoy3zhASHtMaETpXbUXwQo6ADMZBmvkuFrPQy1XQUqdKWhUCarNjAD3ZMbkn7CDULkDYaAjWRBXXUi8",
  "key12": "Uh3HhzJ7WXc7R9gNBuxu2Ld5LNzmTNnYy713rTk52s5GCmDBEuJAjcUdFeGDXnTmFaiuWRTreTo9gytqtfCtJL7",
  "key13": "2uadtL8U1iFFucfQ6vsotUDrdb3DNqGH918vsZDnbnuJe7GqTeESnGjS8hqxMP2Es2CyBqux1uvDvRrajbinKPRN",
  "key14": "2LmucqYfQB8LxADge1TYonJwUHWVXS3t57yB8WVPWLv9dt6ESeZquonuoYXYePDf4VRKez3jB8zfHqQiaDKmhyPC",
  "key15": "iNJNA1eAtNtkAxWLAVhfpbdKaziTYcdSTYHUdjydBZGqNCGfUJX5HsAomgTrAGxVXNEBVvcgTh5MiXz53Adrc1U",
  "key16": "26fTEiox5B3So9MtoTtAYW1gcefkAFDraEpgv1rCx9d9PLuMb9Qx5QYHS8PHRhQ3aQkJzkNUdNjyUn7XSA4T7s7A",
  "key17": "4g9YTBr1JzrZFKL2CWzPEiQvUTLWvdEQfXtPz4pMvaGVArix8T1AZY2ikSpFXiQqduuUTkNFbMR1etqafAZQ4aCH",
  "key18": "5caRGkLW3EC9jS8yGkMVTHswx8eof2ALwYCZTUGqGLmV3L8RvfbVeXabuEVwLPkVwpP9zxQsRjRKciLzUAjr8EU4",
  "key19": "a6SvShYLtTwKW2WAJpY52Uj6zW1W6TkJFoP9mXq3MuT86SgoduXshhQPXKHkkMbA6usnwCr872VuzhLFi6v7g7Q",
  "key20": "5kSFPVC8eEN7HfQe8CcHCVrwAiysXXQkgZFPZsExZWSTg6jjWZsi4rBZYPU8WuMaXjgwm1hfqfiqa63kiMCZeg4G",
  "key21": "5uZrceDmiNjaRqRSWNZshwSt6LNni4fYVYwNbrBcNxyguwUWkAqSQSNc1swj1RsVJhnwvYKCNrBTjW1PF4RAKhJF",
  "key22": "2h2vh4jhBUfTJbkPSQiBMjv5QuoZRLkt7bSGieM4KcX9kphpw7KhK3YKwqsEburnsF3beYVF15qm14fKZLynMEfe",
  "key23": "jAnrEcCGi3TsLxHFuCbXAjPBYgGxxwN3vQvMLdUzW6uXhfvPnCkprmwTW4o68fwn1B1wMDFB4mdbyue7uajJd3b",
  "key24": "4iS9dvJbbrFky1JpgmpyJh9sKFqHndoEEScG8rBa4MBPWh5NguCEfrTFvD8gQ4RkFH552D54H48sQ3gTM2UfttxF",
  "key25": "63cU6QFAYLs2Aqtn582gcmXT58Nev5yJ7YPe6ovn96AC3MH4147AFATRBkjGWiYTpDo2jKYnLoeLigMzCCjADhd5",
  "key26": "tScseDviaYFqkMB877B8FcrscLE7ywGHzvr4L6vFGAacQTfkGeMHEfJ22Kba3RNVWo4pfbsoBuJXqPWLau56g3P",
  "key27": "4bFZe1ZjAaZmyCJ3ScJUQpvvzoitCxwYgRTV477fUdo847oH7a8QEskMDgn1mLGJ2ndnwzBouio5iLwHmqHdG6w3",
  "key28": "2DEJJQUohSbQbXuYYLLZNhCwU9ddPgiZy3XRUvE5eXmfmie1BWYk5BFy7Wdnfxrq1QvUgSJEjVHL5w4xF2u1LJPc",
  "key29": "4wmebWEX1E7GXDCkUMS9qM6SFCBKZZeraQM2T24oaeEBHdDXc7r1fnVNVMfJE61ojtdNK1XwkEYqP9PYJ93miuH9",
  "key30": "4jfmuf3pWeoSUKd62fzrL94BMp6pSFTfATvjSHt3PFhKtUPST4EzxPSD9YhfZ1sgM34Yq4ekiEm6u6THVNFNxJDK",
  "key31": "5kQnAtQvPKCAA3hXvXNcyumuHzrWoH6jtLfwjZuqvgteiwwG323X89TfQsk6qtYdyVLcwAVKfr5hQaDreHXeyYp6",
  "key32": "3MoZvFsLgKR4fQREjhP9F6RBeBDQGdPk2gYCJnkYBDtG8c3YLFUrzVV5PVhuEF4r87YE1bktUdcAD1tfVire7hUX",
  "key33": "5NwnhCv7z69M5jemXZvRZwyyLrz94ivm6KKdkS4THXzZxVdw9n2Cbit6PJnwPKWPG8UjannDjqvNxjqqhF5qAoaE",
  "key34": "9vWgcTvmcuSkiF3S14gkdLCK7uUGQSUBio9sQQCaK7LxZJLEedVu9GG89zFVQTPB45q7UtXhvrNjxZD7QygqZqp",
  "key35": "3zVrmiV1AH5TCiHa81kxNhSRWiPo8xWoFEQSqsrXBeQoFovP6tdx3WkJDoT5FXELFGiZ2pN1KAzsh9uaZriGi6Cj",
  "key36": "39jKTtZD6TvbNfPSCRKxMomtbdwWPwSsMr3xL11tue2sKpe6xzkMqeDQTqbZowHnyaQv5hTCTafdmZb1ygFcsoga",
  "key37": "2i7egfF5Uu1FLYQLZTF7vZKvqMcazFm8qXwR2E493zxw5qoVF1TtckxY6xUYn6SGHhKrpVEwu8t2hRMZctM2mrzY",
  "key38": "Ws6PRbSYFSVnH84oiZ4zRoSpN21E59D2XLGBdVjTmRp6Axb8Q9aP2HfcvGyf1zkojnb3oR4ChVzcZQF5hwcEdYD",
  "key39": "3X94RwB2GffJvS3gqMXyMvF2gzYDB3CyQgDhpHMJjNMkSpC1ypeiJAEUzCoJirzkRJsdt5dhV8i8PCUiivupC9os",
  "key40": "229gjcq7yHwVzxJ3p9P6AzgRNgNyTi1L3rsHPLQhu9UKagDtPqUbYrqgCEPdk8mUmkd9MtsL6RV6Hju9yn7EvheH",
  "key41": "3mct5uJnoXFo9RbmgjhtTReG4KB3WDBZzLDvQERnuQRar55wMURsFz9afJajNKcnU421kY2cg42k2vFmYbMYWF5c",
  "key42": "2RaV75cYpZHKqhb9vfyVc8hiGa7AfRchiwDG8dF1zq7pD8cL94wLziXMmDWYMeuwicrzkPTWCpKf9eyfKQu6uxTZ",
  "key43": "5m3Lh577Zus6BfB62SoarpYtNn5anPJedwkstBMmo41ceTQpBteXyAqRr3Y7bSGJiLrYnyzSfPdoAajtCkGeosgi"
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
