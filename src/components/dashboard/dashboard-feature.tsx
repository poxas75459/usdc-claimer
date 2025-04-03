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
    "5Uxzoh4ZMHSaKSG9UGJsCn5jKdc6p2FDDYriqf8LmnFLfXFKdKFyPTxv3T5uMf1hbMfWac4t4FzBWL2NUx7AhmeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZXW5Ho2hb5kEwdteXucVRcxGFxDww2RVvaiWzfGuP5CjpuQgcygkriRwmvFeGvFU6jrebmf8qWVkp5gQvnYMQVi",
  "key1": "2TtBufS5BH7NupKYR5rkt5bMJv9b4K1tLosw2NpY1QHBxRgyFST4yqVky3Kc8x2NitStH7EJ64Z2GMhFH6NhpWHz",
  "key2": "4dV2kSkntjeUnDtEdv5oEP5vzhAsyxAre6SjLDf5FFnTPUDacGBj739nCCiiMHoRf4aZyUfFfAbiAEKrUG41Jyy6",
  "key3": "tiCRA6jKkk8FFDC4QxemRtbMcphsxc63ZethtiwFRiF1PkUqFaE2jngSQwHVeM9RfdhjNZWLDCgMgav6PrkTnNe",
  "key4": "4X8MSv8EeVrNkRiMfg63uxxxcyzbR1FqutGm3uUdVaFwvRYydtUA81AWnaGFupvAj5f7DBH3vUi5gUL2p8skb8kh",
  "key5": "2BS6JXFnuceEKPq3jC2H42ZAMKBeMSHbhfBussWpheLH1D8G3S6Tk9cehczseuzoksACbK6WgNG7cWBT144CKzBQ",
  "key6": "62Mn6Qm12sMJYNocDQRjb4D3QRjerZ7NqnVL5qVXHM6Q7iiX3VDfQXrTzhKAHWfkQJ9m9WVpAVbufJ6KP1pcZkqv",
  "key7": "2ZZ7D9ngjd33E4AiRdmpvP86vjmmJTFQWYkmrGwbEhRJQcJnNKPKAkK51GpQuCn5kGEgA3W3mcxaHx1XF59Ec3nh",
  "key8": "3i9tYz6TEHfcSHzJKh2LtRro6LgqUvkhJpHTsa61WgJ1YiJVVYD85b5f9wdRmJZk8iWMNLsGgMsj2sLZyP32x6Va",
  "key9": "2Dyftk6GvG3tB3s9rUNJaJzCnoeAtF43P9puGnSBPbbi8m6pmEGS3zC8aQGQzHUqCnbmpiuQKVsSu28qZR237nJt",
  "key10": "QixhQ9WKNemR2g4DHo8C6uFPS9T9KvY53VSzeirDwTXtgPqHKZusax3az9VG6EYqXyxFAP2335rX4dUJj5SztPD",
  "key11": "4XCtv6UyXzedhpLLpS5YKv5zkXdh1G9ZXRy2BjcGXL66DLHCRa9Cj4843t3652rUfUKFqFhCTy4ooNA89JKUfEuP",
  "key12": "5mgiVfUVaZ2JRi8HZPnyUS2joBNxZh1cpe1VXjimbzmVoUqYQgijT23wu6mixYRjs6i9ujVXgfyFdZzCVMvpcc5E",
  "key13": "yuHRF9HeTwYfwdjDzqsDBccPTrF4hKSufBqMt2DJFdQgJAg71naVJRYgHnsUPPWiuyyWXVr9uMq7PwbBXRwGcKM",
  "key14": "2rMrqjEdiQV9gGFtUUkqoMd3cciUqnK34UZk16ZbnTqTrdSE8V4fwUovFEtXcvaTDCTzgqnq9otF8SJdHWfF8ky6",
  "key15": "3HVwLXPa1W32GzHodbi9Kj7ddi3z6RN2R3t6izbYTZ9AXbjs2zgSJoMYg9pWDMDWNJotRcAKhUo8rDUvSHjkXie4",
  "key16": "3buJqaU4XcyQfjMeRN2isvb8piWMSM1a8XnvHxFxtuCvfTZVVHWUFCsZz1tcaEa43t7rGWZQxmUkoC28javXABRc",
  "key17": "5VvJXZvr1N5aRyzPk3DKEwwHuf24HinoUe5DdGwStuPaCqwFtkPa2vm26gx2sbH1GEZGDfKCUtHkufapAi4DyFv1",
  "key18": "AdATfFJqSU5xQf9Q1Sq43abLWUBWryKs5qcPUzhZJDxom9sMZ3pjUWL3jWuU6ka8Kdg3fZ7ff1tKMHZwGQKG4Xm",
  "key19": "3FGUSV7JY3yMRFAXj96ZLXBJeGX7iLDtDiDagKDG2F5hy9rh8HVJXEyvfR5CCSCkqwe6yAyQovELdhiWamkJj5ZX",
  "key20": "rSu1AX9yvJnxwnnt611cwxFgyUCWG692uSFtvu6622Dmkk3sxZ9nr2qwgbtrkn9jn4iXawDCHrs569ggUZA1G9B",
  "key21": "guuEqUbsEDXak5kiaUxiLBjLPPoPuCnQv9m8pPfwSxR6MJPYUdAsNrsAXvdg9wwQQpMZRktaiqHTvaf3HW5A51A",
  "key22": "3BZqj2Pj7cRPxY1rM4eGmcWRiM4B3LEYYryYHABJVjJXSD1E3NjwRpRzeBZRML6uWfC4bSLGrxRtmqqGJuGpExJP",
  "key23": "3dnpinHHpPQ8HasNyWnhCworp3ZmxZE3d8FdSowNCJu2fumJ7RUQvKamoKqph7nnDiBozY6cK4odYVkdpuYyH5K8",
  "key24": "394pryVCzDKmrTCa8hDtnM9VioQXN2LL4wsbGRtasoMF5vH5VuaDWjuXNJEDvU7L7dcYyfW32hgn4TCfusowxC7o",
  "key25": "u7SPYb25r67y6YiQWXY92er36pHENMDbVA6HPE4oa8ajprxEqnzWBD9ELpEEkxV5f7L2vTfG14SweHkxZBrnzyA",
  "key26": "4JRr2Knzvfb8TE6P9nUEDEv8zRajHzmyD5x6zvwp1GdQCcQ9ByXNATt6guj4y9nKdBHS2YHU9KtKKsn5mi9K96Tm",
  "key27": "5skWvNoshnmbiDeV2X48VyTrsMtosLWxmneMqnuXMmDmtL6jtGyvwEAZEenZ7FrC1nHvgBPDwT3TG8uQDTMLdhoP",
  "key28": "2aCMVNpmER1sEWM25ubPkQSgiKZ2JKWSMA7Vuu5VHrjC7x6traWBPsT7hfmkppaGX1ZpGYd1J4zHNzj4kvdrW3ou",
  "key29": "3FA69gQHNkru3o9Mqtrgezf5wtHGjc443MNQ1EwsuUEuTF5RKpPCL8RZhMmwh1nVBNkr7WEMSNp8EXWyWqD6i9U9",
  "key30": "3wyEZCo81HZBhAzBRvcKRtVVi5s7UxHn5qoFEuTzcZEoQFzue5YqcU5khKBAuLasWzoqtUvs1jN8g7u9m3ioSRoK"
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
