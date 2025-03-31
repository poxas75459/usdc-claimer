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
    "1ay2vkB6QnRU1mCTdpF8A7sD6sMGxNtrP8suCatFTRnD4apvzfqjc3xhbgB2thKbDnynVdYhGde98hbjTcFe2Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2quJ1XqacgoYQnDijiHJux9D6JN1qx5vsZwSU1yoLUAY9YE2do23pqVQfVwa2WwYgJTC3L7AFWS1TTF5FhTpzz",
  "key1": "5NGCKmExK3qEce1bf7Jo2zECpsWGnKKrx2vZcHE3kgzh7NuR7hUpejQJ1uYWqSqBK2QNHGAdxoxLGUUeRQ1M8LKT",
  "key2": "2UtK7FHBQ8QBigi2DyA2TA9prSvMnczFxJhmtDB1Kg8FAvyYqKSTV6562hJbbxU7umkTcnA6QXty4svpM3X8ysw1",
  "key3": "3EmCTGuamoxScmw4nT6qUZUiRTdkLkXztmUXCWHKjhjHzMCKQiuMSP2uPPLAsM339VXe1uD79qHogiEZDSkoGmdy",
  "key4": "42qvPNS8PepwAotvcrjJBjyPM3vRYke2m1kjFehrCRwjKWLYCuTzVZMJmbDpV9Xag5kZZj9ngoQn7tEpFnzLFfbj",
  "key5": "2hoaQM8UGpUYYQV2qwA9wqUWm3jgtoKzXZoSk9Nqd4Lcs3S477tAAxN48vkKxptFreMAhV3yBSWXnnNfuKxrPGCE",
  "key6": "3TiByYLqe1AvoCLrjXQzNoxxDwHZ2rmr3EZonfpH9r8ztEDmBifBo17BEUqBqntPYmmrJgQ1YQcZuGpoYM79xAka",
  "key7": "2G4e3KL29hkG9Zom6HKJVMpbHqDLYq9RZGCEBxPGfoDxKpjKLhsmhfHNx91BmXVu5oHRsm61QKdQVjbE5A7NLUJS",
  "key8": "2GRn8qetCbGiLz24r1Ew4EvSmgYDmUcf65MrV3ayksYbEr9hYYttBRSdy3wk3p2CZ624wrSvQg6yPCeawhLi8AnB",
  "key9": "5RX53qzjXxBxUBU5WkGqUf6Ejko9TnX4nDSUwAqJFQshBQcAgjqn1YefYCDmtLy1rPR9EjQihz7jn7SkqHyahCHE",
  "key10": "46Vd1PQwk5TUghjK4nG9CNghkGWAL1iXxyGJxRMQxMBZCXkwEJ9KUjtgVbjiESRBD7EzphorJEpX8yQ1wFd8BxBx",
  "key11": "31D1Fh4PR2gpjJAy5dUCPw4s72uHXWQWgCpViH5YzKQzTqjx4bqPMCLVoVXnFcMDsEK34Tr9RcNyMLUQFsS2q9B",
  "key12": "584EbbeqXpUxjgthdDS2dQ7TpKF8hyEUhSqLFkcPosg5SgzYDpGvetJczabGuUBmaiH4QtT1jpbKMFQVbjpCyBo7",
  "key13": "31JuZDQib7wXNeRACGUrxugsT53rJZBLfnyD79ryJoobHhRt495EM8Bw85TPUmt7dQyYWwxAVtUT5sh4NDB1gnzm",
  "key14": "4gCk975akkb8cfvam8XzEnT87pQsHZmvrNKQFPxzS4bSXgzRBTTmEffo6Kou1bB6ZePwPKEjD8RHY4NqE4PqYJf6",
  "key15": "pNC7XpGosctXkLLWndZcgJPbhVZPpBGBFRDBeh8Ryg2EQkLFTjMSCANtLmGdmpQVH4RPd2NgEGsLhPKFiHNAkf3",
  "key16": "7iqXeL9qLWsAXAB2h2eBJLLmieNWDKq9Zjy1Wi5UkPJjRNaD42G1KnQoVivuRpKFY8wFGhpjE3urZncoP14pkCz",
  "key17": "4sb7wDtxmzBCwGsx4eb4GpaUuDbnafKiidCg9MHE6rBubJeJ2uECcdaBDxD1SsqpU7tnApqjTVAXxrH9br2Jkc8S",
  "key18": "26Ckj4vGH2TfMkJ92sj2qhDEpyyp7dfWYAnHU5TQNA8PoEEMuioVLY4f5Hw3gFtvVagAh2P6FxSo1K8hZE4sQ3Qo",
  "key19": "5hLcptwSpr2qWVoze5wyRNJMMnc17KLSYpHxXY5NrCgfKcarPgG7eCCj7gtZtqLxi5HSFcMaV6ScdsiM8r85fcL4",
  "key20": "5VGquAoWJDNxnrYDsoMRfhfgBSzqt49zayBFwbeciddFhoGwFw7xmhztuRJcYMqLL1do5tijHTZt2Y5CL8jpC56i",
  "key21": "yRcNeDTYChb664QrpJdenVyn18NwkfQf2EUxqtJQ7FzahFNsf6NZdeQnRxK5noCMXVh1bgk3XDrJuGcyrBK1NWg",
  "key22": "5YPPPYs59en4RtzsNCcZqv5VZNH5ZYZTsEaYmrdMebEAwJN1nYwAbtPvp5SuxYnaZUoYktKE8SjcZ5wpKfggHA3o",
  "key23": "5ctv5GU9UtGpR8a9o8FXUvTpuRLsDocqbmYdRbnmqDqjLUUhb5QKhzc8E8kzn7rCPs1wyMhgEyeCmiYf2pALFJeQ",
  "key24": "67k2fkSKw2KQfTGgkJ44D2kYC1avc1niznC5Dd6Xr37qW3bfb7TvXohhsCkC3XWnUi3AqQvpVEi7pzGjE91MwHWf",
  "key25": "57vfRcU4Fx4wGYazZXb7aFYdRtNgLaRZvS9uWk6kCvHTzeevKSUdhbgZB6vi52PecYKad56bacvVNfY74cCgPyRY",
  "key26": "4gGTdJwrFP185keN9D4vjJhN31TcqpmQrUmY71c5X5UgDRE91VFrC9znDaswakTVZoMMc9bkoivmiVKKupkX3ECE",
  "key27": "d72dzVmJBfjd6QsnCy5XYo8EonGmvD9yFfYe3T6th2Vi9gWEczkQMkerMCFgbF4wJe1v7CpMVTgPZpA7zoa2Fda"
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
