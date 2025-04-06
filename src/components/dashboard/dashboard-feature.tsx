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
    "4w51xCMPMDbGgUk2tjVW9752CUML3aGa8CLzkWM3xjP9W4o8xevkf9SUMsgfPNt3sgPtxGRHapkQYUL7HnRkyrpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RikpEpuvVQHJKDvUrA7Vw6rcA2fNkDfNfLZSg5eRRRYtyBWbxgWf27WeoQ3Ze9DB853dUQn72nxuKvqXH76nMga",
  "key1": "58hfSubW6QkppEcrxLbUybWWsUZMy1vMirMYCUAyd34K3QuBUAScBPrFzCP6E1SSv6z4Gx4goBxAGjdt5k4UkT5o",
  "key2": "3KeCbtj6kckSV67PXperbJyRGVpy9gTw9YhLW9gPghR2b3NDuDMKsghWgcrQLPTUTVN8h9RKP3t8poGkSE6GstBw",
  "key3": "HrWAtM6nKk13f8Tu824JqEGBRwc1R5KiQXsumPfCyDsqrQyPADzBTwhm3LWYTNt6YipRTLQTkv6iacWX7VHz4Aq",
  "key4": "5judQQTtLkJnwRZtdFmD4QnpUpZsoaZZmJVg4BLD4b5X5jxxZTX6oQJ8APwTGBWXxF9f1sMqhwL1zyLKQGRMnWeG",
  "key5": "54YMsw3YJyfCxwNTBhabohLoakAkct9AFXzfRvYaeLzZKnjmjsMqF8cZM63tkZfLNcnximDJTzeeZstUYB6G96A1",
  "key6": "4UhvmRYJBkFmrGuDLa58YXmVjzuEoM4kxf3XTxdqdnGASoHN4cZZZrH1tUo41Yw9QZyBJT83HuuH8WmqB9XuVwp3",
  "key7": "2BjkSvSjSsXRnYU9pBNjcmGUQSXwyefCHE6UxLgzgg5g7n7uvkvisMXmJH7a1JLzD4Y7jUAsc4WLedMdpDcmoPFa",
  "key8": "3VunXXs5x9WmaYda2JVbYxc7q9u8HMAtNjW6bDyLBLiKh6X81EbKRVodfYxsuX9d8oS1xMKbJ4BZXqNHGDabTn3D",
  "key9": "2539jsGSAErUimxNPbYtGT4HxvfmSvUZ8nAyDUkSLykdrp9jepUmifuHps3H3wRCZ1PbfR4WvA5FgKCL1GJJk9xk",
  "key10": "3GMDvjLRhg6J5vxrrqnxjCCx5c2AxyK8M44KTM4JSTiqjMopgXG5ZYABSHW1sPuQWjervK8W5uj7Etp4m18Y7Ef6",
  "key11": "4EECzB5ebB1JV5YaULbYQ5QXgoomKcGE3qbPoHhChQaYduxWU5EFyNSPhBvaozb36k9YWNQ1HJ8dHnq5cFkvvNkr",
  "key12": "2QmhiAWCutXx2PsmDVJUB2FW22BNxSgLR9sRFgzsckByghawstR1NLsVp6qyW5KMcVvSdjZQ3s2suH2WLthuVGec",
  "key13": "5LFs9ubAdmU3Deg9pqin8wcMmmBQPGUhZ2E92pXbzTqTdSH5c5pBuT7ZX5RyumiyMxzq3kLJfHqcwXhisYoBT6ja",
  "key14": "7yPdELgEJC9WPiiosrMFLhaL3KWatW86Ba7kgb48EiaoZdsKEsZwEPbJTiWN8YjBfZ4PDtDTRrPpuTZqduYxop2",
  "key15": "4r8SZFsvEL9QfuoTj6uLErL26R1Buc6itGbATz9XsWe4iSW536jAyjsC59VvHtFyTSYJr7Zs3CKoz2XcEAWgoTWs",
  "key16": "3GZ8yaN8cB88Gy42R5r1pNu3MAmxGAtYrZ6ZzNNeUgqwwjVUQAXRvAJP5ngkeHwYFKQ5YnkdXEEXoKKzZvLuK4dc",
  "key17": "2oc7ZrYERqXk6PBxZyj8HYNQDFaKbyVaZ6jWW12h3Hwwu1Z4U4NXk1jWeHt6wC7FmoXqwwkjA4xPhg4Ata78SEUF",
  "key18": "3x4zXmzHgNm1LyMjuiMncxqNLx1XzJurrVXVYE6bxvUvCJqsXtGCtg1A1L6YGx4tStZwAMA5oUpkSMAoKrnx2tuQ",
  "key19": "3FWyg38P6uiJekQEnxcjAyMfgYiexTs9dRaMBGgrHjzFAzRANTqvDiipTwtQNhSdCgNcxWDpvukGuTBhir2H3xXr",
  "key20": "2WVRVXmm6DKk27vNiEHE9iZNfLU998PZFD1rSoHsDNdCGSEAxw7GY6NhpVwEu16LGh7KeR9sTpJ7CrKk6p5AbS37",
  "key21": "3Ld6NKKNjjsaRCD36PuCU1expdEibsL2t2LH36zMmMZWrWdhbmsixAKCMiYXkRiiFAEYzeyhE3zXnvSSbnHoCMfa",
  "key22": "4Fpuyp65MCJTxhkqw9FTtZWkNYzbN2oyrGPfkRbwV68erybmPAdkMDcKW7czRcAgkHr2eatvULonbkGyxSUMLDW3",
  "key23": "Ym8eTxuRvcARaMiNAx5xwai35tX86xo6GMsnrseeMK4YVzgKwmvtQgvSaj85XVRgwwsGRK4QcZkLLgU4QDrNsk9",
  "key24": "3UkY21HK9ThnU5MjtTP8MpYitWrVAqwHoDBA9CTX5aMP3Q1whLoEhP43jBq66xjb5V77XjZUTNbhroK6MkbCCXut",
  "key25": "2AStRWETgUhjL9U5Bvc4ZgNX8DppuJAL3bMjaAdXmLfivVwHB2LgtFQT5DToSY1xfLsfwff9AwNL1BG1TJWys85S",
  "key26": "5ZGxmg2tcZPF5h5zbUF6H7kaGSJrtJ24diUknWXGDqx4p52mzGY37df1dwCJqdDMmRL7KYMGKU1d3to3igMbBEcR",
  "key27": "3LQFBLHC5Yjub5PW46QyYp8XxBdPtm98vYtVcp6kbaHVCxjVAEzpztiCh31EZfUtauxhDBKovmsBA8CUYoCDivHY",
  "key28": "4bnVw2v9UNzrwJD6NSJh7gGUX63dhtFG6CFFKHezHQNPGj9Vuz3Z6cfNWHFrsXGTHELdeLNV2J6P8sHn79gRKsge"
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
