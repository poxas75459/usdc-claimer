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
    "5pbTwHCkCWjjMewazX6GcZAD1YZPHAjq3Pgs3MK2cLFAz2SmtNB3fwb5sTZ1xmxNC8811pqVez8FkaNKtaBAH3Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57k8L4wQEF5YQ5WsQvBqXnNqXvxw2iQoUKRow8eqnt2YmarpsniLTDhJSpGRBUPPA9VBXD1HMGaeSokMAaXXSCUs",
  "key1": "39gEKtHUMZG91fJQkm9gkf9cjo8mKVTLqxfdpPeCM3tmY7Umv7rs23gUo2R5gGKZtav8UMctHn6tmGvBnQKFBwj4",
  "key2": "5dNWW6RMdVMiDqjw3VyPuX1rnXvULY38FfADop1ofCTCDWCQwcMg7ZFz7t7yrziaawr9168k4L79wnAUHGDdrFt3",
  "key3": "5MEDGdKvKvP9JoBQ2tB3rTrgcSKoCWzjG7hSSF99V7M9YPvPbTgB74MVdhp8KVQu3huocjCaRmzQ2N63vhUzzDcj",
  "key4": "4VXfU6etPZitetMXdEbLc9U939G5GD16TQBWvLn9f1gTUjwVEhWN9MmEBUith3ECMtYPDqzKKkKWmf3YmaV1jNcH",
  "key5": "LAFLTtASTy4HhSYJuKUTJx17cY7FXMHtHnwWqZKEGsZjpfqFSqChdhY9gB6PDUke4h5vUzrBWUVcm8oP53thAGD",
  "key6": "2JaPwVPaaNre5fALPJDyNDXWj8eLAszzcHKYwUBH8wcaWYMBa5wQuCiZyqWfTou7urV8h5o2X6ATMfpaCsfBzrBi",
  "key7": "41bKgUiKi5TUqyuoLSRNexcRJ6UdXr6iwKGiZWYghsPeBUyo7hbLt9f7sRYqJZZVofsfAU79FA1My834koLWMT62",
  "key8": "2PHfMhAMn5U1eFqnHQ5pvRtycS6pBNnvx9TSrgg3PMqEVjWBXH5a5RczxtHD4nZGauzFQgVLJbADycA1WX1zcHqx",
  "key9": "587bHksfVpsvkXfUcvkzw9yqSiYyYxgLnjTrjZrEYem11WDy1HDLZz7FdnaaqfghhvM5KyvaUs93uPdv98pztZsJ",
  "key10": "5dDcfdKVJEpWYSCv1HRHRpwjZxkcaTghpv6if6Go3FRCVhRyz9KqXxwxYckYKwGLBaSL3JAoCmwtBu2e7GE88kr4",
  "key11": "sebARYPFXVdganSTL3oPQvYaPxiT9kd7uEoJCTiRmNA6MPZmpgU3tgTk3rAgiqBwBM8gaQBWsYykqyxo8pq3pw1",
  "key12": "2rEv8sd1yPsJ585yvtbBmS8MzkXqK6npeo8PiCNeVgqWFwSn1WCqTAeM64vPpf8SDHqwAFWJh4jV5pKgcribJRQr",
  "key13": "47tVPnPNkRYsDv2Sab1FLv74aLKAHqwqkQUqt3HfsvWFTmM5qYN9BY44Fqhsjm3XKBysyREdB82KhpwW2QnB5teG",
  "key14": "jcQZC8yhWYrsXYDRei9ZpYPx2QMch7bajvpXtZ62cUg21KYNFzzXfKt2hay3gHQ9vdxT82eqYk5dahjSW3THWoS",
  "key15": "3WrxeNabfbWxV88uTcd5e9wd3PjCVB7dXwYKNgxzYqeb4D3M13ZXZhbErZuSPmXjp7gUMJkKBMiJfRERNhgrWUMm",
  "key16": "pXPvRBw3kgSpsfTMd37RzWQ8CKrshEhrDoiaLzK3o78sbwVvboxM4ns8ah3RHUcN2XR51qPwd5UfHqjNoRPpucm",
  "key17": "47wohxmvuuEqjjqAgqWZMsGs79Cw33iiD6GiJnG3cQ2PxDHESJ4PQUG2aNYEzBpbYkDBxf4C2FcBTojW4Zb2JRzb",
  "key18": "3XULTcPbHXsYSEd9TKTAeVMkVY8g9GqETYCiUDHZrtWzpd9q5GXMsrinNwPRghW3ex8wZhwnJbKNiCqAJZBuXrGp",
  "key19": "4UccCE5jf3Rg4fyKEBhEuMbcGiBT6YSNoYSQDKaeyreMwfZUSFuaDWc4R2zQLb6pcts8yMVNKVQc93THKKni8VFP",
  "key20": "2V2LDjEqGLUdckxdUgQDU6vGLzucMjxygdL1cP5Cm8oNf7revufq99EgUkMLRYuyBpsQuAGa4QZKo4X8cMwfjkRR",
  "key21": "dtxsVCf2RdYrYYagguCULv3gaAR2MENhs2hzDGx766xsiEZytLTq3qDTBawdeBA7A7P8Q5HAzXUGGZVNGyhnKnr",
  "key22": "4dC79YdgeB6gXnjiehRK6xwvbvqtz5HYrHuzMen3LK1UvNgDSRcbNyfMMQR8wFuUUQJWL4kVZNcBHvePDNMiLS4h",
  "key23": "5Tcx192zJho5dMMg5WEY3bvgdtjtBgqwLXJEqEQZUD72tnfRMaAcfFEeJQu8LLqUzCu5B5dM5oHRbV3R1q732Ggz",
  "key24": "3bsh6kRp78bRmaJJZ9Zi8oDZgzo1mF3gr7SKZFMpJdkQDawv4oEMxD2fgbWMgx5BcLyax5R1jSfmu81S9ox3wVys"
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
