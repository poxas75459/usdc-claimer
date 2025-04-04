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
    "4LQaScRtNj2pkqbsDyMRd1ifryJAVvnnGvuXEVh5AkHtaAFvMvSncePHe2E6PcVGsPPkZXnjtGq3TCR8W1Qao3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZAFAv5D1nA8RUnfRqaPAV7FeT7UdoyeVuyGarEoLwghBPWeVuZw5pZbtErT4LkYgZYTx2reKjjCwRHWsYgfUu3",
  "key1": "QEX9q6nUujcXybVR7msUM5hgTKzD37QteTZYwEzLjiehjTz2RQJ1YDjUn9QwQnP4pFrFqChtVEqBrAiYkJDRcW4",
  "key2": "3MnbMMf7GQhbfNnPDebLPDdP5r28TauXzrU3XUP1D1RhnyMRtw1HAjWMPfS8cbKc6JsEu8z2hW1Y1SaQP7wHubur",
  "key3": "pJ7VxjRWvHsaJarySU7RC67uvnuQgq547zqhZsJNgffsj1928fXH1bMvB8vXsFpyTGcpKMtEzYVQj9fvjDh4mA7",
  "key4": "4Cj74adQQSfvXJjdeba2f2YdYfh6kW8VkHjeAagn8EfE7VZ6sMJedEU76ucUGGkpZ5oyaMqEYQg4ubiqpFL42oBd",
  "key5": "2CKc3DYmYK3kYZ2Prb5cus7Squdf1WrLuUmcfEzVmcBBGW3rDAHDHdMXcwnw8TtsJCmX77i7GtZ3P64L2TxW36gR",
  "key6": "26AoWAtTsfm3hkD9byi8icFhp1Ah4CVXjiWYYQwpLwfVQjDZdv9r1iiwyivMSXqxUVbh1nWrvUd6d48EDrDBNVoh",
  "key7": "4hGcvmD6XE7UiNroNZMH4hNy35CgLTtg8Hg2dVkkr6rLN22HCxaGGbHJnxAuEhM23gpQbpXHoMrSNLUMv38vWJRs",
  "key8": "4S8sGiAqHPRu8kq1RJKuaXp3tfvsQwYg3BdXXeKiN2qvtQC9FoWcqPRoZkabktyk194eZmCQiSEj3XcjCCYqszFs",
  "key9": "5B5C5jWrnEGaQZZwdzvxv38rQC1xqJcCYpX6ACp3cUqyitTHJB9irZNS9C265VpDHs1SR5wGGdWyPXjWKvPz2cHQ",
  "key10": "shmsprmCKwfvwiJWwe9fk7UM9XJgpsP3pgJMsVF6i3Q5yVHoGzFKwoFJyySr7rfQWWnEjwx2AzaTtJxvesyrH2p",
  "key11": "kvsGaRiqZfRaNrJ4kSBjVCA6x1TpKoTHmny3V4TDb6UrUt7SH3SBN8JtQST2jnzpbtfHTYz6fZJCeG9xF7uw74y",
  "key12": "3n2yAzUXcttjEyxuWyQfi1qxvSK9t8Lbv57i1gvRQrD4XEWDwtnWSQtHSSKdkXd5BN2tqh4drodcFjgw8TLabdQu",
  "key13": "4zQS4nGDMecR2UFwZzS8bzZsyjzPrcpZDJ6VyQnVPLNLh2en4S1h9id4x8x16ZmdXfU4cXKa5km7kt66MuS6bCrR",
  "key14": "wjzE4vC8k1hfWZa9fJEcSzoagRVVF1rw9UL4fb4x4eCFq43fcN16R96Rcy7JU9KfVnMyLhJz4bHfKbB7ugZhPyr",
  "key15": "5he4E8AoSkjXN3fxwQAkFauvwT91te1GwfwnVEvAmKp2QuCfcDhsXJYaEqU2mNQpBJFQMKz2pCzEobswBVDAWW4e",
  "key16": "2BY8WYPBUc3iu6fzWyY5Fww6U2JSWj2qsDZ19mt5h2Nr8APxgvhH6CUV1XpmEoCotdpNrrmuh1M77M28e84dnpjf",
  "key17": "27EzPVjA3EcfSCdpMSNfGEpkjUQEntjpwS8d7EqrokTWh8j6aG1QP5MBSgk2bz5UGj5yuxa9TnF8mMywXFzQfH6N",
  "key18": "2ahqT5DsoDTtx9bvW3cNLfPGGWmmdwwcsJHLUj7u1jEHZaTtczdNQKuXJW5LSoDsiXJrSqdwGkvH9Dcb46vfzu5n",
  "key19": "3TN45ogUT9rqzfDXqXrhqrJURemCEfiXXEpqHDSSyVKDbCX8xzwc9HMHN4n1J7rcV5dLjQttsWbtgP2G8VBpAxWo",
  "key20": "58zqvzyJmWELmBtc4E4sRRDCQs9KA9jZEg2zbjj3JiPuMWjJAfjA2x4xEKjGN736hEBHJkmodYRR8yRWMTrQzJLu",
  "key21": "5hHJvPJ7BhU2VL9AxMbBDRoNptcxx3k9uHFygrpgfiFSFGoYunP3iXGRH83G1Rq5kmn2jANfKhguPbBqgUVa1GMA",
  "key22": "43JqeQZ3m1sn5Q3iGBsRksFTddRhpk8fA4hr7wkudV79FKqgGRZGjUm67gW8LeWxubyCouxy2L5gb6AaFHvAKqfh",
  "key23": "3h7tZBp5nwo6xk3iBrK39U3GAte1Cx3bMsJGHmZvsu51L35ckaoZqbGU7o1bPK5rLCeTeVQxfgjdMWCfmNgV3mp2",
  "key24": "55bVAZR1iBeHEX5F2HyCX7omS3Dbx7h9588a5buc5LjTsDFUymGLyfhFDRr4svpspRhXGLFZPjA1w1M4WFmysC1Z",
  "key25": "5GUuy6tCBphto2sDwhxWTGbRZvuWVtMbfEyyKie1adf2zrgQyMgaBWZ8wKVvzh7doZUdUxjkTUeVCQJpTTYQRcGD",
  "key26": "3XygNbTR8Td3EcPm2w5bd2hC38bUnNoZG9SRb6VjjjqDJoNeCEm8PZTUuLyzkgPd2Ng5AmU1KA6d8mRKfDnxGpvK",
  "key27": "4a54PU1UaFR1d1zvUsNStZxWBkYsnEqGYriwA4x2uBuhZpXfjH3wfedWUgPPrnPUJ1NeUAQQRMFqVTwPvDkoYC3D",
  "key28": "49DUANpEeLUDMBNiLB1p9GjYcfAWjNjA7y2ocodYpH369mCPQjajiSvgC1d9nm18RJHUZwP7bN4UXfaavh1dE2Gt",
  "key29": "xYwpJgpTaKuyV6WuVW8Ag19whgXDoyn84WxGj9TcnVWQLJATE4GaGoAZF8G1wMGq6KP3Ed12aPWp9Q76nXoN5GV",
  "key30": "4pWYtnnsw3tUroDgTDLFynzBmUzMyn1LyhqudGbxrgQsFjSKFTRM3KK1z9QwpjcboCVhaYZ2fCSEg9vCQ9iTJScy",
  "key31": "bgUxrxx7TmqCfvvjCe5u1i8At2pwNezo13YWXcTCCSZ8rXamqhqTdqiSZWuoVqfN7HECMNK9MSagkBMpUsFoddt",
  "key32": "AS42hSSzWhi7rJXU6mrbtphPD3XbmbuqcRcBkeTnr1PxZ7pN6YwnAC8sSonEHbxZ6J6cDDmF29KDMud8oEJjiaT",
  "key33": "4Tb6bb9wV5cfZCxWhpU9Z7rwaQtut2yUZ9dfUUn18Y425MRqynfMXkyJsQFXZipWhFcnXCZHoY8GdrDVq9JFABc7",
  "key34": "29eeK73QZGGFyLe9nGNxewu8B7mxvPmc2PDWeGXQ4NcbuVxTBzbfDLyUnFx8YUVne1gR9RXfbA3LX32nG8gUnhuz",
  "key35": "5sznw6UtwPKj2ciuGZPmpRCuUhW7U2wfh9SBrzdk97KeuEjqFstmEseKBZrs9kb4CenXCLWhkbR6ExK1FRUGK8sr",
  "key36": "3qk9HMe7nMbvVhswFLp8EXaRWmHxAZXWprcda5FnihskgBqRGtBm9C6sLPVH9tSN1APeiVB6avKBooqXQzZrCUYp",
  "key37": "2Uka3Geqpmy7MGSRedM8XX3zW7Lo6nKpCLp9jcghPeuxHXC7suTtKSeJXED2wZLDaLTXkrTVQPKSiYScDEsJqUyj",
  "key38": "3ZfF4EMAcgV5kzqodVzRJxcircQ84haEYzAiu8VcXzrnDBPnW4KueJ4MSHeCFR5hzFcM6A3hf25KdckafEFP7dp2",
  "key39": "2pUuDmGvAEH4vfbkrZMnsywiWWMupKEvtLunWGz7ESvBHgiqV1EdECcRmpd6ddEE7YxHyMcqA1iDiD5eDk9SdRRe",
  "key40": "5YTVvab2v1RsBmUPVFgoVC1qpPSfTiTKFaUQixxaRUSTNbP1LF8hR9p9jFxXnH537J8RwzLkkWmboWQQz7qcqTda",
  "key41": "49Q9TiR1dWmhnh1VaXwb9jGPyJSn5nCdgE4M5uRV4hUfd9AG123qKs89KXg7SAL85AM5HQBypEN6evVyTwYik8fG",
  "key42": "61uX4YRpcrGBWHyPcovU6cPiDCeHXex121ofdUHiKxYhzKHGLBtiYyD2PUToxqxdv3Qsqq9P1AqAaGMu8rp8bBBd",
  "key43": "61QXdV2uhohDKA7xFDmFgxVhLzxLT7JNV6PTk3qA9dFYqXBK5kezGov8HLjpg6HiF3pdfEo1zJ7ZL38HP66VidmY",
  "key44": "5oF9mPTS4indapai7MaAayLrpgo3QbvpUGYxE9ZUFvWDR9zyCMAmT6hdybGaQ8G6UESwRju7orkBhkin46r7baNp",
  "key45": "KSWfXfB7Lv3KHtxDnybSjvNcQnvnPeS4gDCX73E4kFonapi6jcFNhyGt46Dz5sNPdwraVA4nAGSq5eb2ZZ9SsZS",
  "key46": "9h1auEGDQ6vdYMMQXqUVT3t3m3dJUR8tTbgW89bP46EEoieaP7xbk3fHHo5DJG9NYmS8XFDH4F7iL6CnETDBt2s"
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
