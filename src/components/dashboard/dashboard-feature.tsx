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
    "5sJgxjN1cn7b3o4vd1jv5aEUuZMrEbN8EzeTVcSwq3TunwvVfCJXuaDuPLEsLcJCdL1QyVvQFPGaXANgS7sTihLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45h5c6YMkWserD5DL2YMQBc7Kj9Xop4poZRQn2ijGwAy5ooSreZg5fCbRKK3RZLMzQP6eAM7cjPp6ph8UdRSfZ6S",
  "key1": "5gq6khtei3EtmAPG447Jc6GCc6pk9JVE8N5ZWRrSfthNDXxK6CwWqWVgJLGMXmGaKd2pG9g6wPx1zPyfEDYVMXMi",
  "key2": "22hN3J6GZL5Dtu7XgEjpqYACTwXFjgm7mwAko3Hp8iEkYiZaF4gznWyEqhxiLv7oFZqKNsWq4dNQwXB98DKvFqS2",
  "key3": "3Sk3h7hNFoCSYBH2vwq7txKEe6FeuRtczfaWEFXXQEoe9qfx5d7LPsVDqC5gGLEJAvZjLM1AUqEg9xt47H7ZJNY3",
  "key4": "5pFNVwaknxX7zMcecyeQdLiH9umk6HrdLuPc5GwiFrELV55K7a62FTkQiJduKHaX6vqr4HowmZuYKRNSWr699EKi",
  "key5": "5cKh63Sobk9MQNekJgqZycUc5xuFPcfDLiFUS88HA6JF792VmfAiTg5MqRz6nNemedgV9Xs8Mg7nUUME6oXoyBCf",
  "key6": "bL9N9aiwTcDr391HG5tSk9wRtwR9r4XnWvXBrNqyHzQBVLFtAirgb8dktDD4hf8HdwFAuRgfh2ufide2EmAJ6ip",
  "key7": "5mXceFSJP2CFtv1sM4Kc6uEjrkWUzWx5iNDiBvRdrCUoabCHDpu3wD2eLGojgY9bbHPMVfLegsBh9NdzAfCVACmx",
  "key8": "2mh4sx6cNuM7sNAqVjVrYJhd6QQkQ7iQ1VR9pvX3uXpzyqj1yz35BnE1yP6VGN6MXbPgqMvxbMJzuqja3fLRQTxd",
  "key9": "2uXTHfCNiDmw9ts6Y5KTUNyszLhxFVHem4MKW8veqF3Ft7n2Zayk2PfvWqZWc8QF6FF1cLmQpYV3aEHkR9RAxebF",
  "key10": "5RzE6iFKUAHXP1v21SC5EJBLnKycoPvahDF9hQtzh6HtgHKvF3oxPYxcmgTEqmEKJnzDEmmJyZk7EsEjZH1bthEH",
  "key11": "35vWwjyhCr3KjnvwkikDe6v6mmpRq2QiX4mnMuLBNRnioJVfYnCzx3sew6JkfpCQwm19ixTrTf8yJ1pwVquqgqrn",
  "key12": "5qsWnoRVsbiYMZoFR4zdxo7N541jZhEwGDC591L2U5EvcaQZwNG9MbzSK7qVx8hCHSzwV5sb7e68Ha7t7C1yxW2E",
  "key13": "5cMPZNU2AjN1AVtPdMvNsMsdq9oBjRNTGfoAmmqGDBYk4QmpYgBe8QkU5pt1pUfUS8gSnuNrtZmhisJ76D2BMYE2",
  "key14": "2EV6p1cUrBLim7nvLqUF7VHwVQKsES4u6Q2NeFvzoWCXx479cP6LzEfvrcsm6grMPbuBSVmcgatPN9NXJ23hm2nV",
  "key15": "KFCj9fYEERQp3KajuBuW5gso9XBMsSmAqumcdYC6NQCNupvtJ1b1JvSyTM9uXnS8ijFQD1sgH8yc7stBJ1YwiAr",
  "key16": "3bYpiweVVNKVo52xf8eSRtGWqtPKRfBpRNknXasLhxZxfTsNdZZYfYwi9HthS5bTx2sk8s3WNjrVVTRCq5cCmp9w",
  "key17": "4pPyqfsnQGSs1NhJiknL3Aqdd4ucUYa2g8uxGn7t9Y4yTRQzPUL7BDZV6eT74ALHLf34n9JcHjYSSY9nePvfJ8eM",
  "key18": "XL2H5VDZokWUkqNeK8sjm7g1UAASJKX2CdApUDhKaJCcAQ7ueeXmV33siQuXAcQ7ksqhGTabEDFW2KhoPeewJ9S",
  "key19": "2gEAU87Q8YrtUZXi1isxhiweiWCKVQxefiXbxxzyCZfHVi5SuGJ7dGM9qGg9rrDMA9gSafSNhene3JCdr7xWXn1j",
  "key20": "3EaZxUMRDjgCu7xDrkeZTcvyB7gWZ9zaFLGkqLR7Zj1otrk9uDqJx7AWHsks23md162T3Uj49ZqtRTsYaWXML7kw",
  "key21": "5LsC3vEjwJrjuJA6idQGFcqyRGtuGQPGajDB64tSbov63wmV4yxQh3L46cGRN6PhvJNcsuevobTM6tubrjn8XSQK",
  "key22": "3G8xPXoYVA8c5hfEtvQzJaBHcmb16WV5wtXyVo3tJyrQ5koJ4DpvaUZyNLztJkurea2CBroLFevv5YE4TyTE8chK",
  "key23": "42JxgdwGaRXP8k29r4LPSQZcntuDKkHnXxQhFxqSySZWfona8VkfpbQgpC7hLBSkVCbTAVaMLMonk5u7WqZtcekU",
  "key24": "32HWiDrJcmA4mvHxFg7cYCWjZKvM7UPoXAcYwsDpYAP4edi3FTYMF1dx1zRwVVs1N4s5ydqMbyFfbpYwZUZrEc9v",
  "key25": "4mgChvmDxzjAhDAw3eF34W7SLt81qygUiPvc7vcerdcRQPqv68Y24KGx1YrfHP5QcPcowv9NwTHUw6PSWsEjDAfm",
  "key26": "KJTJVUmQfi1d7HzsvpHtYjXbXio2V9tZ8sUoCVEJc7t22f9HZJKnJVCgtA62MsLzMiKtVPihDHySWLJmzoCfgcx",
  "key27": "4rjcKntkrgGi2zf7XRwdJiALXPTaNstsNysd7CJg2FuDjPDXq6wjqL3WrDxfRikhoBCjmH5HUniBp6VBseReXDTu",
  "key28": "2hPY8oUYmGdhadZ7XfHdY8XBZgNAzCrPPBUrwqvTvhSUacyMUjfRDYztbny2cqWMKdGoY1BPLwLpCsptzfWrWse7",
  "key29": "mowarMcBeA7i35zpyRz7g66c2kaSYWLQBjPNrkWNobWfhnVgT8LL7Tf6rxdSBXmCuh6vFhnrdmuwbtrkRbx49q8",
  "key30": "2a3CGQwL5T4SVZNYkvGjP3ehPcJy5ukYd1zJfjryjusTk4xTjtCaUeBQAQNkTKN7vhQVeLw9mzVLTWWatvmPcQKb",
  "key31": "5VsSmu8JG6i2i6aef4s458vNqqtJjqGCgH3yWqBrWtgGUDCqUXov8Dbgn6zfvhyTuNPACzk6er8Umt9maK7EFEYr",
  "key32": "4di6AdnS6NQicxzwraFvnDWmmFoLFdJ6kQqujhbzdme1oogjqMBpo1V7JyTrt3wNvHB9cTDo4Z669hc8hh8LzYnq",
  "key33": "5PFbk9PZBPCVfDvL1TXGoX37CDbQDe3iZeZyduFyJKEsJxdayaMG9ciHYc3WyYVZ1RdEMJT1QVzDssZPChECUkxN"
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
