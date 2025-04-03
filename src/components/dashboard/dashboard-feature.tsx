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
    "2VVsqnPU87MG1kp16QYfKMKLz69k4o7esBY6xtuXimzoTStzgHevNbcfGGvMxZhuUkWvsKxvCJYzPVUUaoL7qkoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTG3SGbCNmWrTmhK23kwj3NxwtTYLeUFgMttG4Kse6c5vko73NKtVWN7itPDXqKtxYGLza9EASKfbM1YpjgtkZN",
  "key1": "2ua9wc8gPPWT7ZREbeHdjNq7PgRoFJdiDT5p6S9WpwX2jTGc3G9sWfqwRQau3Nx346Q2TZVfqnGCeqVjcqG8Fb1A",
  "key2": "9rgdSXc9oBew9eeYX5Y2Efx4zcNV2ZnLV8xZxA12mU5RLkEZakQmte7PzBEfzAWybcmCU97pe1w2JEN94ZFkM2U",
  "key3": "5Ub1miJ73jkf1rb9BqAjNNb6foeJLcdGxYbeyH8LtZatQtcaC4VFYftTLWdN6pwuGAucYcnb7v3pX1WkW3LKoN2g",
  "key4": "1gJwbS6bH7htd7bQfVh9nQnJWzr2qwZz62KJfRKyXvmc9jVFSQ1vgCsN1XPFZorhMHmMwo1b1b7jtvH6v1Z3tzw",
  "key5": "5G4qaoYmaCRCregF3j9ecwAVQkpF5fQJfL2FaQWpohCcZfjtkNEB93wMr2oNgzTWrCkRv3h6vdNPx6XM6B7Mf868",
  "key6": "5vtpM7HxxyXU8y6Y3KuJFX8ttjMQTFcKJE5Ra2avxm3S6JhNxR68Etzcn27WG5fujvtTHfX7hB45GWmgH4pVuMSB",
  "key7": "626zqGsFn7tCNn7oQDDzZ3Fbqu7n4uxLHiCwvnFttEoujmpCxSVCQrsctNjF9x5fdhZgn8TgyqcREUuqa8jyUQjX",
  "key8": "4ce268hcW7rMyfTKiK9EARijuoZUu2jGTyaqHHpV7xQE5CvsGWVyhKiprA4QkjiRNAzxaKtFqedYCEQ3a5Br9tpB",
  "key9": "5rgCxRDnvQgxM5ZdhqakrrJUPbf9GxgjssrrTZUTmaJynv2qr1jA3bxAMx5zbZwHLF3XaYYVMNqfvB4dyTo3kkDg",
  "key10": "4YiDpGKVXgM7BDgmNodc8pkwnyLBPpfq5ngaRChT1TJ3cqr93CyRMJEhNtTqqpf7tuHyqcmPwbFZtdL9GqLn5Vs8",
  "key11": "fCp3tt8w8ucYuzZ5FBT2aKgtoBrKWZdz7x9DNEnyWrp4EDG4RNrcerWksXT39scosLUjURayJqfTgzP8QMjbpxe",
  "key12": "2ZqQ5h2TjZih6nKippbYKWvZ4amCJWV3aJ5inXFD2XuH6QzCZm4f27EtpkozTMZUdXiZ5VqG1jg7psA334CQVstT",
  "key13": "9MTffByDtHQgjqstRvwoYm2YdD4GRG5Hf8CTfyrrzCqtyngF1wRmJ5RK5ZG4G5xuhW7oaktCpTYpNBLCwLRr8bb",
  "key14": "5RHdt6vpq9XkBMQziy2cEhYF2aSTFH3Wndpo6E36VSLG4ALYn3PtQGSNCb99Fbbv2uEDPVcwEKhjaCozciBYoTfL",
  "key15": "TvrxKJrFQtpTuQqt97uEZZh1Rpi57cdCYgosVjnNHsJgdyCirE7byCjKLiEjpVZF2EgtdECSt1vnWKKc2cQ9G5h",
  "key16": "4YQEqDDsn4Yo1bo8JtqHSnfjaETZ9WGE5hNSuTNfHZQ9dXxYvSqZPdWfBDZsmW2w53erSQ8x5hhgCgq4s77drM9t",
  "key17": "2AGKU82XTXCmcPfqafVudHm4JLnvo7TQcvukRNdx1zixrTqmvvbPCLz84KrongwoS3DuEYqF8G7GQTXDqs9MyTdv",
  "key18": "2dL1oiw7pKkVZTy9BrwHxcRhHi7z7wvzqWdkxQot6tB9s51SXLcJ3k3hSC3VPU4qwZkGgRi9QctQdaPmyShuXmkg",
  "key19": "3eCZMgvE6B4aAcBRhLjP3mrY8nQjxGPtefQxjzkZYs68GdraAvc46gPzi398xLeQTy6STW7shkGN3YJ9nwP1MU7r",
  "key20": "2yiACh7EVeFnk5WREZLpTUZrU2qqjxivbSSkEmfm9SQCqXeXLnpZriiA9Rw6wBXdWCd7TxbtwnkrfojMYp22wvPG",
  "key21": "54GmE2fvxkQijy21u9RxEoAaQbhDttH31Ft9aqptBHWSqJNtAKCU3DPL3j7tM6CekGX77iCCK1JhhgagBPqskPGc",
  "key22": "5v8ESVF5byTuPQJSBcJgzugp6ZzUZ8cUURuPNTTxvCsPLRBCfVX5PiLEFCFF7hz9A16ycYJ14q6TieyKG8yA2oB7",
  "key23": "4V1ygHPmBjAbmEGdq9gWMGUA4u7LtiCnptZ9oXNLEsZAPGaCy65WZHLh1W1EUo8s9DPPZ4AkyXDbCvm61XizV8Di",
  "key24": "2vYeuS9aVMmLZtLP1cV8fchWj1j5KC52jKDWJRn12rKp8KtPGU5ps7AA7bV719xp6veBSeGpYnfgCDX9QqNM2cMF"
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
