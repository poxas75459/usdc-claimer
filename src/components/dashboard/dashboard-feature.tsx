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
    "4EbJeRAWcuXvBsaTDQvxqq16Sd2gFnsTsGVU2yGwxxwCrEWpbaEuZR2szEtme1b4ebGY7toM7PPAkYaYMnezSiYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYJYVJfEhWkFtWWc6zQgDETS7H1wjoyUtqvNs8iUrKoHDNz24uA1rT137XW57xvR1KLkz38fQqQtFJs9nie4YMp",
  "key1": "61frjhAfsjJXyViiZMv9P5niTz1VTaQ2q9YFNaLexnFTwXZiicaXSpG3eagL1HNTdTECGdLWWQUJ8H9QFsLMNu3h",
  "key2": "4WTh96RTd9FyxxBUTk5hz4P8sVbiqwAjSGvJSiLNApZgYodgDWMVo2LxpHMv7PrQb3Cvnc5fkvzNwwfKB6Bea7Ve",
  "key3": "2tLmPrYmVxhyYpcjZZkNdRt4JGhKBFsUiNeWPjyM25qhXTWb6tkwmyFZ2cBiScLdGXQVFEby4pycEC2qK58VcfcN",
  "key4": "2Jau3RFRLmY2e5KR7HvxZm3KFbF3Q1515NDn78qC7X8TDAuYMVagn7X2KPjmPPRPCd8aidVtv5uwJrKWreETijg8",
  "key5": "3YBdCqY6Vpta4Pmdnhos1fZVV6v1q7qGRkZJRvdpGSRPeBEXRXUu2Z3saSQyc6AtNEYc2Fby3P8GEocYPxk6QJeQ",
  "key6": "5uvZE7dZdEMmoVnVQEeTw4yVs2c5J3d18vvvkXuWWuBFjiB8DRpvb9R58LNp4vM2U4ctmfLdbkg1BZeSnD7jTvbT",
  "key7": "3D83CSEYyF7nLzKNuW8TQqKhsubtSrP45e283yDL5m466x3SyaQNQwKDJ6TraBiEw3qEfh7umqdJ7wupBoUFjDoW",
  "key8": "2F8KGATvUpZT3zv8SVZNtx4JRFFtqhJYV48Q642HPwdMb5BZi169rRUAJfF8MVBtJfwCdhr89onwXuLvM7Dzgg22",
  "key9": "33wvfLR72brN3N2E8FGGKnNezSj3rTGYWWP3fXGCUoat4qcXDmDVNDFKQboDUKrGSg22SuACuYYsQTNfKDkCwXvq",
  "key10": "51tu3ixgnkPcrjeZvKrCoddFUa86uPKLFwxq7qkmUGcJrcXHV28b4bTbPNzyZYxRgFVxLGm7ErYT6SZWFQ1T3h3m",
  "key11": "3YDCDgVE3myseonFpud7wi8aDFZoVHznwHA1Sz13oRLJyGfXYX25jCWQdfUzqKLdUf956EMukNSHFXuXCqrBAW96",
  "key12": "51jgwSRALLAUGK3aA7iDTmpAhTUUJPtHAXpQH3rNLME8Q85oYktdy2m8e2SPxhk9fjn41YNyegn6RF9fGcC8uJHM",
  "key13": "2KbeDhKAgViXEx3y6pNxAxvESLRa71Ba5Pp7vmV6cnaqvJsk6ySDsTyJbCg4g3uc3doUc2znhL1fuAuS6xahrkX",
  "key14": "63W4GMaXnTjoj2pv4mqEZjR2cePxw3WwCDY8BvJdesTDxBgsPD5SLfungJkrFoSociconXVJjtxQkHnh5h5PyEcY",
  "key15": "4UPbZ8UQh2m2hNkXg7WaYdgxWtDakzddPGeVbk95oRFZCaNsj5fx3CFv27pCiFjLJKaagRnqkdU1vzyVjQXpgA5u",
  "key16": "22uRAUuokH7cxycffFgg5EoPCusc6CRMoRwBhW9EK7bWNVQky4PBPHj6rGkbpNVjWT7rosAfdykUTLf2sVELM8Y4",
  "key17": "Tf5jncsJUPu5Kqoxnqqtx69yvoeMT5HFhj8ZERdonuz92WQNSsZNRKdBtTpDdzJELFgLzQkWSZg7w1NFYyggeK8",
  "key18": "3JkR1PJVSPC9v9szeL5ciKCXQhzmx5gkCEsJhdaGm3R2nsbjWtT4Ce6evv2brqFsbGS78q6ToXQKmkEPTrcMgQrE",
  "key19": "uHhQBg1kGgk9Xbzbj1tUuqy1t5s7qfCuBA79FytksGr53R1FSjBjRpazRU1zQVBvJMVXspHdeRvtj2WDK1bmjqW",
  "key20": "QZbj3YJZSz1UCjJzDuM8aJ3MfrmqqTwjJdEwiNTf9VGe9p48t1dA7mzNU7bFXyZedMnwdC76QTtzsXvWyHoVPhm",
  "key21": "JgSsf8mDvfTPQAjNMkxSRXxQh9CLUom8rw5q3P2dGaopGVE7YYFXWq7rqXTsEndggsLTRBTMd7pQcLCqEd4eZgs",
  "key22": "3cd2FDPUHex4LkYzEfZacowr7QvRs6FUBXMo3pGxLfT5aqMgfHGjmHNYZok9J2kfFsg4qz2a2Dax7gp99Q3K9KE9",
  "key23": "2koB3aAZvDsBmRC8Rx4Hposq8jrHt9kAjid6bt7yYc42DvPEreXtyXSwajF2gBP2jpAmG2pr8q7Miza5DC2LzQuR",
  "key24": "w9Cf71rdsFLANcF3rQ2pHeRgfaH8mTdUst8yYPdT9wfW7bHEMcqH9gpeE8BJ8oFEa1cQRgcPwSWZUpRm4b9JuCz"
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
