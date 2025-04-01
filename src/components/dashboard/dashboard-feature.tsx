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
    "DLF5JfcjvFgLGJczbcmHF4HFk6K2hWnqmhEXBbxVQsihJkXMzBWonwrUoUZHPeTKmvoZmuarNvd6ie4sorPmbmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpnBCMeKLBnNvZHSfFRFkHYVucJewUzubdDHqSr6it3UF43wgUL7uCoUfzqPXaT6LdZQ49nn16G5hP5spkPcDav",
  "key1": "5wpkuFSubLYav13kFRyy9W8yfAyrDcprkTZhpYNqhaVvmrummvTajgZdZyZzAxmVNnF2SpudCy9rxVXZWs2w6wHw",
  "key2": "4tfbCgWjpoNypRq6LjoX9WzetHou3DLbYVSWuUNvzzhJk6tyjzMetbJ7dsvCjNYh2KAS1ebKE6n94ybY8cSZFqRQ",
  "key3": "3ic7yXJAtrRCVqC23BG17VFEVAjoGUPxj8kdKfv6z2rX9CTdUGdoFdesnUHACyen81aJAEa8VooQdezf8bBWV1Ev",
  "key4": "2hJzNUSwhfdZhhgShPzUDdwn7XXPmq2TcMFPtNW17G2R1Jy29qvsSEqvuodtM1qJuURRRswa4DBhdYizufe7ZCTN",
  "key5": "4FZDfQUanY382jdEqWwm6iNPbKev77GbX5PQgBQqxyge8LxysB9kp5H1XRnSmnZowuNb7cY7jbFY5DidMqwja7W9",
  "key6": "4SogNoFzx4pHznaUkoA9XnwwhPhH4B2x9BQRK2Ppn2h3id8kLq63YRn5RQzcBpKic5pCzeJnBGMEJhmrx4coMgjs",
  "key7": "45Jwuj1Hzpyas16nPxGWqHsN2DA6JFEsq5b9LG6TCkkRkx3pJSQLcnuAmJrPJi1tyNm2XLSfeyDnsdYrBnomtPTc",
  "key8": "2bTrGkg75rqpW1qu9htStuVBMksZZF5WDgdKQir2qnX8QNC35t5QLW4FNUkHDBkVfE2QzAYe99C1Zbe7BrhRN52t",
  "key9": "TFz79KYxWSNwLf54p9biHzW6LLKpZka9p6iZf5HEGTjiT2GXDAmhBiGoGjun3N6FVaKo2W1p3kEP5BoT3UUh9xv",
  "key10": "DqgmxzV3ZTVB29Vm5JsNiiYRDuQ8ComVE5QF2eNinwTEQcTBDPoM8T2CDFnvZwFWSW4KiQbKRZBjR7t7RKfrmBP",
  "key11": "Q8jpCg3wQ5D4NYoHgNxJkv7y5HKiZXmAVH5UFSshxv2d2vNe7PEqzfKVBJYMy9ea2ayXc34fbeGvBq72tdkWZye",
  "key12": "5pgiuTthbWtp5kc9Wjd2RJ5rK9rkND6unsounxdni9j346RFpzmxM6XGouaMFKKjbRaNSdTehrJ5kP7g3HbuaCVK",
  "key13": "3TGeMeDz5QEy45X9NMJEFcwTifv7GTAWdY4FhMQGYV1c9xzfAqHJQbKEKHdSM26iNwPABgAVicEVdLBXmXPndanx",
  "key14": "3KikaJCW2a4ERyPzQNDCuTrKNA93MTvi557NDRQ7mnsBStE6c8b1L8HB63j5oRygj3bcR97N9rndgBbd86a3Sskx",
  "key15": "yPNaXYBDq8cpeMs62gz2Bzw1kBrNZpzehi5xw5h46VgXPKJDRUWQgstrFsWUwgzi3r8MVhL1gmE1Mz6nsTzAxnf",
  "key16": "4UZvoPgoBcxyyhKQUwfCuBPMtutySE4PksoqK945E1cz7EL728qE7hAhPrDtyY9NBnBKeEuLZaDG7Lo4hyRLz4do",
  "key17": "5iNWrgSkGoWWKrv25Ai2uPtnhM1gXydq5rpovXfAnoQkt1SaFQfsTaXm6Vs9zMHhjbrmRf4fovLMuCwDoQW1xJ3N",
  "key18": "51M2fksRUQDExsZDsahc7MpLVuXMBrvB7fJ7WMu8frhqDpzi6xioqQgJwN75zwXbEYYzEdKse1LGwdHPqBvdPJSX",
  "key19": "42TEtE1CVqnJ3xrFAdEMmtKfTVnYFxyHb8QQad8ePxVXc2Y1dRJSXyr6MpZqEs7vJ6Vr4gSFfVRf4gWdL8tEqBvT",
  "key20": "5GrTWg5t7Jg21FDpUYET8pQDwToeSr3k3GVMmGyjSdXFupbFZ7uQC47bNTo8WYkibSqBQikvff4cGZMkCLFvqQ2D",
  "key21": "2HLGL73r2Gdu1UYRu4ivR5bCRRJosPRtaqmeHbvXbVq3h8WJjmdn1ukSaXZPoXkzaSbnR8ypkZpys4fKuLSxAsYF",
  "key22": "3CA6hHFUnSUrug51TLTEvQRWwYSoNQd1hjjhvpdyuu9drbxChCByVccdGgbTnduxch4sWWcpGDKrTRFueE61zPGq",
  "key23": "5mgd9t2M5YDvRX2JyMLMgycPRs9aMUe1dDo3U5fyhWd8FTwsCrNrjjrsqtJKKSEDZZ7qYGVP4dn6tBbDvmjMBooG",
  "key24": "3pU7xPvLHDxGaPUfm6XB4VVQnvHQy8ZAhZCmyWFNY9zkVK3QJgXTkqhV9VxasHjv2S4qftDFPkRTsBesyt3BRq4K",
  "key25": "5sMDtnmDme11JEBMuUoFRJ8NqgtuuMuBLDkwZDXom55Zq1nAgaN7boYZm2cDAAfc4wQeHWevpvNuB6HwGWwNMHD8"
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
