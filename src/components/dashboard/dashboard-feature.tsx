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
    "5hhFAbrAvAV13j1L9B1Muq5pVri6CzeskAw9de95knFJKMBkHhNqJQTkzQNg82G58wZpqdW3VVx6PLGfgdWkcCNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMSh18fEb4hks9DGtrkzVmsm32hgfyBgP6tFXaShaheV5C7w1TueVD6qs1EUTrUA9PF77XayBgQGGiqPxLcUJay",
  "key1": "4G6aAHKxB8FH6GuEH7wngCAbQHcvHqWvj1cCdPFT5WV33iCmGtnHaQynp2Ak9pgAwns5KWZ1tQtZgenqdEqkFZdY",
  "key2": "2LwQA3AhdPgc6xHmAUobiMhSk3GBejBpjroNxYbNYmjn9BDwkejoDvjWPtvTE9xKdf3VATtxLSysipqQegAqDqA8",
  "key3": "34ivYgtB59xCeDujyzRKwXR6uXdtbyZB1DLssozCRrz1zcCSG36xJh1Zr3EUfTV3XxiXirvKKqN1wZJum5shbCHm",
  "key4": "4SBUVneU9gvusuvmwrCi2XS3PVqLY47RAmin764VXpquE1ynR2XrPyT4LnjPjH9V8zSuD3tD55hgCSFJNWh1XNfb",
  "key5": "4mXMZDmVgge6kQ4FFn3hpEY1YNmaXsw9ToAhUNrhabrTR2vu2yN3ajCGYNGygxhc1Jpc7SzoqpvdvsqFkQ6JTdpR",
  "key6": "5RXzRka4QnxyMTTZdqryA9pnGj3JevV5DijYzTJEBqVRVUhMeGeNfMBPacZwA5zATySH2J9hqy46MS3Fx8EtXxRY",
  "key7": "26NMLyt7yDn7G8MwjAAHoGrxiTp9cWJcDWwpMDR4JdpmjVj17GAumrvJCCNDi6NJUYG9hvX2ZW1xZLW7zLs8LXQi",
  "key8": "9ZkatgwaH2SVnMdLXnaZazwEiW2dtkHLzXZx8vm2PnxcadEkPM3PEKqtj47AXcXf3tMy6H3MrUj8hJAFxoUfSwb",
  "key9": "24A5qs4CXxqLcLgen94FAKjMVg5cTieg2qP9R36mfXf8UVoRC1G1Yi5MiKdNUFSwSPm7YCMHLHJNXE6kMUjgbNQC",
  "key10": "5aaqCzdbcQfKjtLwmtFcMaK73wvk1id4FH73qh1b384yQszEo1QgY41hY91HbRBThRyiePbunpV4rpWUE3uNgbiu",
  "key11": "52uy88dGKmugkpZajn4dcayfAtbTRHeDyih67TSKsyMNCcst2stHrgXc16t3hoSbohvwfa3LboG8MPYr8Y5ERnfX",
  "key12": "3QvVHNkfQP5HLmmkZo3Rx2EShGs8xYSPRnGpft2RT2ASUbC95N4QZ5nUcvphjGogZXFHQFH9RH3Cfim5RBWdcMjY",
  "key13": "4hrPi1924pmXwSkMkpTKHfEh9VqdUw3e91LhVyXip67L91FQtrzTiqSbxAvrS19rHHtKpNnmDFXS998H8Ck4DhZK",
  "key14": "5p9QNwoumigiR4jBDHGBwBD4okJwKuBZf5SVckRD3R6UKij54JPBY971WBadCqzvnDx6XxPQ8AwhsAthhN5tmk5N",
  "key15": "Mgw139CCF64fyVXXrXAF5FBg3emYX7qaujcn2t7wAasKpGk7idAFrWU8HreCDoWyBKsr67DhJGgg2dMgwW2vJpc",
  "key16": "4K56f238pjgHCFHXfKWetoUvUMyV4xhCyGzXr5oodQxuYoTsqqbfdbcuSjXYYyggxNP5UHhvPbZY9fcpNQHCiZ7D",
  "key17": "39AbbKHRLwq4axzswJQvbsHD466Pr5g4KB8DJw8mNzbH8jcdEQNK2EjXEXnKGgP5KuTF6f9otaicfDNWEswA7q3j",
  "key18": "3xdQvX97mzLiXxFRbCffe8MSN4v53DDk93fG3CwV32YZAnq1PvHZx1U8numCovSCjUVNLiv9P3CkD3FrHb2Xj5rv",
  "key19": "35oSsyJKkYeTgFTJVCbjkNQzGm1k4BEPW5xoAKBL8YUXTBnQRZpkXftLpMkhvUqwnB9C6FhjewbnPJrzLpCTgBaa",
  "key20": "bY8Ri6zCnVkaP4iCiCLoPmwgmF6E2pKFSSwNknvMrjzqrN2ALycsq5w4rPTDzMw5MSE2wLJxYBaboX2LFYBDJ7s",
  "key21": "3BXBd14Nag86hfLTmf8egY6ueTw1m9pwCA8zV2YCDfmWmrFZPhPt2tiSnUN4umapC5n9yGogoxQ5dXNwxU8rssY6",
  "key22": "53Wmu3UTbKEbZnhLeGENwZyLTnnAi33L6mJWq9A3BHx87ayY2P5uDLhN8hrJmYu3vovyiT1hv42kiQ8Sunp4QXuu",
  "key23": "3gXNSHqNehk4TCrwh8E7WssbThLrrk328wH8FSqZmXTXP3HmAZpkVxkB3TVczs1zoSLrptu84HgokSzJ95NMb2uz",
  "key24": "2awMuC4tuV2A8gSggLKPpXmtkA5H8cnEx95JEmJswDEJgWDbgW19pZbfjSDCYNSDGnVyamDoWtQ4xnUqiqhJGtbS",
  "key25": "2xStHaCwqH2wzEjFhpTM8MTCUqeQKi9wpvqtQ3sTS9VqszQ3x8h6gs6gYK3SXweFGQ4dstboVt7FVzGWXNTiUWCU",
  "key26": "28EtqUpmjkUeCJTswSAUQuz2VMhNQmiUZY9J5Y7uS2jF9hinzTjoTvCrjYAJaYuFmP1H3KNTWkmRDbyDaaYnsDDv",
  "key27": "Tkcbd4mJQmDEgU55NPo8863wmgrgvNsrK3rPncDKqF5W7ZpxCRf81VZMNS7VhPCbKc82aqLM84N4TU6fMcVBHZR",
  "key28": "5pZ891fWpscjmGMX5oeZf9ZntYiUhR79Pjyes2qhMo7sBiDUuQXAC6FaBC69qQoAhpEHSeka1AseRJ5o6p4Z5Zmt"
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
