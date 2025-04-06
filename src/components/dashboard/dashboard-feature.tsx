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
    "27XQ57ieiEM7EgkGkPURaEc5zKKLtGMnyuGmpXJhxwEFKu5o5N9MW6bjoNx1GS6UVPhmsztEeaC2HoJxpjkxeq6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtRNigKiSbdp9gg6sCKRuZihLpeJN3fqc6NSc1MTZnxMisLTBv56Do6gpAUBnk4YaUBqDDhpBtvYRssQu1ZjVCC",
  "key1": "2455m6YMaiMyMrif3JTkfAjFfT1DZJ6ZdMbP4kSXfLvNjjKxtsA1WqG9dZ7A6JtpcgyW3gk74uVuXNXe5L9jWeMV",
  "key2": "4HLXPi6PzZe5mF7BgzqwfUj1fgvZAkKf4RyceASL9NJQunLKsX455j7PtHyLEKgviiqdoTinYmgzWs5kz8dGU5Cu",
  "key3": "5w5u9bMFc7hY63dEEn1bmYnnvgg2JAVWN8wyVcMRgFV22S72KyrRvRFmPtjihcfX9Zu5aBtx7opeGXfjE1z67xbj",
  "key4": "4MTXHj9aZnGa5PeQqS4pPeJ7yeC8nJmjgpCMYahNAALsbecwmebHvV2PieQ31sNAYK4ZwzGouna9ZdcvEnJuwRuw",
  "key5": "38zSsZ7otihziC1DVMNLfgDNhFbQ5QYkXGH6ikEw5SkEzeDC9sLoij9BG9R8TC95qF4wT8Q2n3EoVqe1TVfTecww",
  "key6": "2geLJLtdhamrso8jACL3X1qCgr7fXTPu9Yj3Agt19byf9zzE62GUV67jYi4X1JrCbHtLoL5bzULXqncBLg8mfyWJ",
  "key7": "39Jr2T5ZpCAr8hiKbmksepXXYB2id59axNrGUw5rineoDJoPwhxumBqQKACu84VFh1sD3M4GzNomUcf7NQPjJVNG",
  "key8": "4pDNzEL5tUhigPfHRhKxbHAvtp6ZR6ehaKemHPwzdUrQK4V42c78pQRxY2wbFWnmthWaymdgjQSZ4QrddUJP6ZNR",
  "key9": "aJTGzGvt3Zu5Cmh56fF95BxZWW94wDe268AE4FaXGpXEuwN1iaUpgm7QypAa9ixjN72wQy4NT6TgTyGC351hdQj",
  "key10": "3XCp796wLoDvuM1j64q2vraFvuLpgJachxsaNsGot2VY9Waw7xvaVntPFveWm42C3e1Twj8LQ44eHBkTpEFbXYtU",
  "key11": "5SLSMWYmxKNQRPqbiiWFE9qekW9a7Vwiuca7VVgy2mgnRKV7ccqJkk74TVVbBYy3NVPnX7rrURbfTXfXG4PmXL3Q",
  "key12": "5UVWyuTPBbep19g3TQBE4d35srn4DERRDBtAdmgj2bTUWszexDjzs1hk7dW81sTAtw27G9d9wbvvfMLej4WJAWL9",
  "key13": "4x5ueMVUEJ83bt6mAaYDs8DGJGwkDqqvVaoreWcxNnGXD6iKfWW2kUFPySiw4Frzyqetsbc5gnKfV61ZcULeRJHq",
  "key14": "4RdDSGix1WvUAtF8Xw8udVGsSdW5nbaNdHvNjjcXns7aVFYvpGNwriBvyQFtYjk5MfEw5FJbU81Mz12z9BB8QjHL",
  "key15": "6RBNg8SPMDWc7mfKxH4wY5hJQxQ8zGG9j5wJ1rFETqHvn2ELmhqpJUPmHVEy3sGVb6F2MvfU7YTakzZmy372oj4",
  "key16": "5iuYiDD73YQvKHgzk5kqPKArgWsZZgWsuksKbhdxPbpHJmUYjbt67dCx6fvGJmL4QD5LxfPV5Yiocz9dUDs2Saze",
  "key17": "mvEBmwXAiFkZe8SdDsTLC6egSHDBjyUcYYesento2uPcBD9YiNL1YwrxFpqW4VtkE6Mgs33xTopoAeyWUd1fwqz",
  "key18": "3hxb2nkinJseRXc8Wg5BCeq3ap5ttUbiWVGwTXpc4UQkXUNtjYAG6cXGorJAt8x3nwHDvvenSJniW1urY8ZVA5m4",
  "key19": "4bRURhk4M9awmbZaA3PsQsogdkFvNMAg4y2C88vgCkwXbgv95KDNb1U9oN9b62uDtnvqV39H4eAwPt2CTKzuxQse",
  "key20": "nAFHWGGbiQ98ab1Fo2THaXT6fvLkTrukVhA8km5DUK8rC84JbTS3c3Sf63ZBWbCm1GCaKEMtL4PGAbfEiCRxzVA",
  "key21": "5b3ocn8vEn7nws5GHEhQwx12GR7tpa7AC9aTFkS6gyCJGiACcAk1XC92Ma5hScyF3hZiwVR2DBaNynARzUxDqfCk",
  "key22": "2MGaBoDFzphPyJ3tLLTT5xuWCA7q8tqNXdD2D4dmy9gznEsVw4DxGfTuAazaKGuNLNDy56NH62DTYmr89sKw7cSM",
  "key23": "C9oqgyBcg2GbrjvXmkoaSuntgdaqXYEmwNNoVpjXrjfsQzoD3LLDm2Zn3v14SgvzZeGqpbeWLqSyUpBasgLahn8",
  "key24": "4iA6YEoqAd7i9BjwzaDx8XdLTsne1tJtFPhJArSbExxjyJ4Zb9krtfPeY6yV2fvxVsQ1TTesHQbBosYsPtyEWqFL",
  "key25": "5b65eSMEYg6R6ZZfguVuu49zUhwSCRiEMim5CaiyU8iMsB8RAeAyLbLPwbZRRswY2HgeZNZw7XAAbYpv5HBAUZAj",
  "key26": "5amkHdEC5JiKy5N9ZPe4FEid9a2tJS35pu3Ke9WbNC2NjPLb8GQLJLG9AWXmv9T1BKNJ1zvtLXDLLNhAf6uwSNdD",
  "key27": "4sCnv6RPwywpnKygqPWd9xUq6No48fk4z2MZKeyTfAttydt2HjuWiR1VKsHC49osRKPFYsebtfb9zw79hEKDd46B",
  "key28": "44MCwdswMJ6YFrejAWKPvMuaCrH5r2VCvxodyQzpzf2rMip3KNQxf2DuFv1pXJBFYYAShXRHuhzpUmBe4akh1wP2",
  "key29": "657WF4hr45zsAxYxr13i9pWw4DSq2spwpYcZhdN6RNBSX3KKemfKjKf5LYn9rjMtMaCxbf3uDLkBLeYagWGsXpts",
  "key30": "3S1osgtcrcZ8RhgU9jnshZ5cnt6EKKXWiGA1LwDN5BjZD9R3KwNPR79Ji6f72ztnBdxxXeRCcVUQUBZPkFQEeQAy",
  "key31": "4ZXYHJ6TDpQ6VARZz3ahJBLbREfedBrq2pTTW7mcSmiSiPYm8EYkofe91D5d6uaAKDYDZswbMytuDnRUnskVjRb7",
  "key32": "jAuScnAZBkfuHvovoVfe6pMZdXC26gRJFpJeRGKGudfuvcqfFSuXv5VCu1YgGYJnKPwXRo2dGCXs2Y8qfbaZuGF",
  "key33": "5Z3awe2uVjm8VMfFqu6TPngUMMLm4xcXP5ckXH25oV9MzZkUzPxnrchcw7tea9z83kRgNmHvFjVRd3roZZKZpoMc",
  "key34": "3kr4GqgysC2wm7o4FCWMMpfMsjoCWVy3ScuSbSxbKVxEWTn7zxCwoV7AsTHxWb9Z3cmQYnWqGogmemc2HuQK45MK",
  "key35": "2sin1i9nWRYJ8668VDQE57YAiCoEMCAb3dnz6SqkhPMGUrXnSYF9MDtuRYuNBLm6M8KBnvjs6k6gF6tryfS3Hxg3",
  "key36": "3Ltf4uCNeormM7MqdYW18rq1rZpZWTZGeBtTQ4SEiHNaP6cgc9U7ms7pGQy1cGfCyxwmTNq6g4KfiwbsH7h2Qhjc",
  "key37": "66DpkGwDgjCDx5sKndqt5aZRmAyeU9FekMkQDBXncowsEGkvPmtjsKP3s82UhTB92ZEHASDQC2JopJqkuyh2XRWz",
  "key38": "4RUAUFVWCvNNGca3thJL2vJCXzuUfnqEcQbQ5R1HXRDXYh6j7E1LHKTKUy4wLyZw7zNQ1xAnLprEjTpY5Phts3ka"
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
