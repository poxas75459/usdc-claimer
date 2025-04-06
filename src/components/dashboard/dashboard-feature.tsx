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
    "3Err91kE16jtow68SnovsvbKdSsYYFnzGWdFDwSdryCsJbBrc4Cc57tkxqHshiqskDkRDchFyLwvQhPJQqfmHtVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yiR6Rh6ofFgJKhPGpQ8y3X5tPmKX9AZhu1MPmgrE9VqSeRrSwZmrdDjdY5GQfHW8NUHQYp57mtiA5m1cZKYCbvD",
  "key1": "4gT3d4JiRvMXUsZRJup3VQCz8w1gD2NwxFRkx2cMkoFDEFXGFZzkkdmwBmvUcuAQtRQQt1yk8EK984NRLgriBchV",
  "key2": "A4PU6p2MQc8YZQj1BH4kupJhTr22St1rheSi7dsSj5LJoxuFE44A7ZefDnUTGhqzQdtS2icJPWr7zBhmXgvGhup",
  "key3": "3eCTpZZfpcTWzzgDLa4RoMz5341RXJKQTn2RVUSNdYVJSNtD2atbgAeeLBXDWcUBhNCrRr9qegtm59DT5rtZRqR7",
  "key4": "5YpfQ4xvVbvEfn5iWukW3dpVfHF5xdZpuW9gA5Z6MxTetnRWx4qS4yRGU61zpJYbWjqNhx2Znhu2KtZQDGoXSWUW",
  "key5": "4kmRkqq2vpFK6ZV1v9KXEupzLtusNEFMmNrvmiPp5i9ivHmh3XZv5CumRYwMNQwddEukQY8DwNTL4RNaxBvucgHm",
  "key6": "3aXGVW3kpH3zhnGiHUTaJFCxVTEQWGMaCVCLF1E2Ldcs3xdVDBBfMLVdRHACEJZvN5YXvA8KSmnPUEuBycjeSj6c",
  "key7": "5KWtVv7DgsvLXsRGNH7ULTsdKSSF1MEaoEiVbkhAtCrJ8Bi8BuVB4KUPwVxoKygP9gp45nccqBZmzKkuQgUtjnJx",
  "key8": "4xuDK48g7ncYGGbTY6UW5eELUod3C62bx3Yb22ULQ42PvNSQpBtK35HhSBozd2S1uGo5pLBytZE33hjmvaQNugMx",
  "key9": "2vvT6nvbtebYCLxQ6jaMCoJoQ4akJGCGEpu5Rac2z9VwpUGeqqJLCUAgtFw9K7zeKdWS832yE8M5u9ZAqSysLrNM",
  "key10": "2kBsisjqh4zwUg3uuziXZgHUV6XyBcdjwF7qAQDtD7yAQAPryNBuErg3ebYWdNUySEmKkZDoF2CvXbUofHGzFixc",
  "key11": "5o1iCASncqmoqbue7MDDbyjqjyaVoKYTZArgqhY9idM8g8Ver6Jq2LzXNtpaEPtHr4sCQUMj67yY6wn9se5S1zW6",
  "key12": "4GbqMBhjTG4SL3Mtr8gRbQejdTz3Kk7pm6wcXkrtDx7jeFDTAznnLuojWnpEwSHCUNFGmV1GJpvXwYfhJhFkYSiA",
  "key13": "4yA6vRSz2ZPhrygRCGVjSMysuKkkeX4chp5LkcN27LU8KkpQDniZv6dGLkSQcrYXVw8igRRW39zY5skTs5bxEwas",
  "key14": "3xzZ13YNoXcgLkHUQmzdAaLnGxB2hRzdnx4ZXFVqcZ2G5avPMhpRMbqYnamPjZnTtbftgBMLELor4LdeKHq5Yq1r",
  "key15": "3oBrydqu9ciDMrhNYDpCZm5gtzsXqW2M2qYgwX6aT3811MCpuAgiwPNBASzV2si4TBdFXDm5WAXQ8gFkLPzU51Nk",
  "key16": "Pogz1BAUouWpwerqx3gUaqbkayfXPWBCfUep8TsmpmzqvXumuw6o8GFhSkRoQnYwTPjNKDt7aG5D52KSzpDETr4",
  "key17": "3GjUR8yr3SprZVfK1gKJNMuZ5b98Jm7DMZiswJjjBP5dhFR9fu6UYrn1aubEMM11wXnThkNFKgVWU7dB9Kd9EG9f",
  "key18": "4trycPshFTssxvdVy4oYnVuM7zSkumQK36GBHMxmoMrgvabLoeRrHpR6CMXjTPEPLJhGCBiZ7XGegkj1TB2LeVDW",
  "key19": "2ZtZgmCZgHwSCkUc2hk5JFLAXTQzQotGSkwFXuq8Chdv5EEmpwUMuvX4sKKhX2ofWfqH7RSFvzSoD7T5Kn4o8fXg",
  "key20": "127DJPKR3ihSc6Qo5kHp3PLa7kPNCm85QXR3WgS9JKWFj7RaisLP11EmD78B3nJdx7ca6HtDcL8qforQhz8fqEkm",
  "key21": "4GEQqhzBw1Bu7yjbCRZXXfMjSSzEoqzDv2iy51smrWY3X2RXNJjQQyZPW8MD8TfiaAmMYRnqbSMb2x1fUs4Bd3B9",
  "key22": "4qGgDqLkRP29A2BRRH8jjvu9trGojRtidXWi9ztQpPqH7evDdhNH59iMMxUq1FssPMLN8XGU8uNyP7ffNg8beoeh",
  "key23": "5YFEHHpiqze41adAWAmqnottA2kPgU6ajsZju4vM1ih7hKTiMUxmhZgKDpvdhAx8zpA4bQMFuhy6H4563eUSbNjE",
  "key24": "4AqPoz2vVevkJq4w8eajTgUgykgYApKrTptrVegepkMjjLsiacTzgMYsE3sfRbFwbTdwAru4MTDDS5WdTCeD5dTn",
  "key25": "5DdKDh6hHRjYUuAtqSix3doHEx5JundtTLj19aBYwR1XLUDSEChdZ2aQRikicS6YuBMZEtMCpu4o8rpVCLGKn8Rg",
  "key26": "b1RfP1yV8WnC29oEFdj4MusLnyBpCiJBFUHS4RBEG5iBZEv76j8G7XpKstddFfioTYz3BPm9t2JkBJFZXqros64",
  "key27": "3rKheMX1UwGHB83VPFt6UXupypAVxwVCMnn1d2oSpkcnj7eJAmHDQSnPdGkjtmiwKeGFP3qwnozmtpcFLrQ6tYj1",
  "key28": "4ivFRtAB4QriKaSjpz8qWNW7UgoUrpag9WuSh49oEQhke7CUs9cFhT3BTjPaXGS64j85vLq9K7jzemZNzBd6hZLB",
  "key29": "3ut1ubToLwr4uRXruWcxhzg2RgsGKKD7vR7dq4TYRJbh4FpdGJt5nsu7QtkzNTTq18ugkvstnKGkRKyPDUTpZfz8",
  "key30": "2xkpXBytY434DkVnyadDNC9T7RVuJxCw4ZZ8zyL5sYc9b7Ruxe1ezmvkef9LFhGzAT7jWyTzcHop3GiK3WKUx5AR",
  "key31": "3smwX4Y6fn5tPFAiTyVJPqHp7z3HsnKtVtBSHTVUyEzginTmTGVupqTToxGVK2x5yXw6i5UX4DUYgZzmDsnZq843"
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
