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
    "h3RBkCMUHUqmBuMXCuG8sWMWRBtk1ADXJERRSo5DMs7jM5JYmSBcrAD131Wb4qvpHBeJ9m3H2GgX8jSYeMgUH8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ai4zLgJ1kS9JUvnx8GNEwuF6NhqvoSq8xz7kMbBwQZkLToQPFbjPTTDL8JzUv6QTzHdVAdrw7L4BHNurhfkztpN",
  "key1": "2sRLRHwpDCdcuswfuhAgyE46RJHzcgabJjXhtrLRxdrK5KA4s7GJEBmwkT6dYqXFRACMu1iwSxzAz1o29cicBrVq",
  "key2": "cyr1htFzZJKD8sapYvPVLYqQZxe3wn6oaCiyvj9ymmc3xXpwFfAZadnkKY76oxEyQu5B9XGC5HeZpKrsL5h3mhd",
  "key3": "3YSnrQtCVzqHE5dHiZx6AcjJRRiHCf1jviTAkv3UDZSD2cGhFmPWn2i2f9GTmVLVRstThMhKVxQgXFoopVrSmHEk",
  "key4": "4VEf2iiyxqfqVQSzF4q4sDnXCie9Czu7efZNKJvAZSGt5AVvSwtPqVVe4uhS5c63WKycfY8QnXvfckWP8x1v91hx",
  "key5": "4bXbc81F3F4TMZP3ffE3Qy3UJN82mBUX81xMTZkHEmpw19XuGfQMpQRAThSQzbBrXtfRydRdDMSQzJyYiSDuCScH",
  "key6": "3C1zufmGBaoU95YmSa96sHTNYVNYtrDUR8PrWr76T7bk2L7ZnoMEs893o5UkjQARzzacqQdme4Az8A36iM4Hnu9x",
  "key7": "3MBcKYY2atwtAkapQD9a18Ra62t3qs5uxbj1pNgWu6TisYX35yGJ31adrtg3XvvzBKtD5mjir9DBiYmrrAsFshBr",
  "key8": "4Tj78ixXHdUhway6LtRXdVgJDANukbMhbuBeUN1JZTBbvKBCsZzuf6X2qTm7osCGrGtmWc3EVG4ey8fRF9Fc2oj7",
  "key9": "r7MJS1fxTFa61PJyQ4ukhxjxoc4Zzc6nMHNn7aQsauE71VUXW4fzRF9rjdTbXQoNJZrAM5eivBb9CUUfBzqX95M",
  "key10": "2Xvbc7umc8TDTCpggNm7BTijKmQJ51db3HxKA73d4QdeLKLnm2uofnKXnw53Z7DpKgY5hJc2fVprB7AfRuixz6kA",
  "key11": "33xCBh6VY5mzh4ibinzGhnCKoaZVukdmSmNqz6gshPGbX88mKMiFde7GoMJwRA7Vkq9WzRDV3CuQaHbG59j5WHkL",
  "key12": "4xP3VLQ6oMEhPcYHLskYTi9NfzAXNEws4WPhULHZ25DtwAWxvVrCvGo7J2SHqJMHkyqGkv8uV9yJhFmtsuAyjatj",
  "key13": "2PXa47HQg5fxETdVSSVN3QqBeQ3unHmAWr8Bu54D1ZZpnfAsZGKxwoF2mkdvyo5eiTbCCvNoB2ShhMkK42zVeTbu",
  "key14": "HNLmr7RNRe9k3HpHZyo2HvpPZGYB4vw4U6SLAwfTJo39XB1bvxLCUke55U2n39KtFyckcZe75bTPEsiFE12mxiU",
  "key15": "2unLh4JhtsMLccmz86e4vMRJC9Dov7ce1m287DQSgFUaMTV4Yoi8Jpf1obnjVWuRg7ph3UPtbu7SKqatMzDxqKqn",
  "key16": "U1rt3Ae6cgJwLMRRrzNHLBwH6dmaCu3hmSSfWd7cvwSGZndyM1TuhPn5kjQKZ9EEkNNGUFYHy6CJpUmML7gJV5G",
  "key17": "5vNSGFGePvU6UFkjt8gmQe71h86rDvhhHS53nzpYJuGij2YKz1772QKUVzT4URnJ4Bx55BRk52fZkSDDCb8BFSsZ",
  "key18": "4D9C7jTAVogRkkWdwiZw3ZFV1jAfezjRmvD9Lgn2gR7KJgTaGPtWgDoCman69pdK57q6YNd7qTkRT2fZ3MXnVNn8",
  "key19": "pBMg7Mp6vF5598Ned5diSRMLYP4cawsBwnDZCzL5p6za3NdneLuRWMkaBaR558kbZD3TYeBd5FpLfFGxtb52YiK",
  "key20": "2buwyPNgVvDr9XEqv3go6LtJzWEjQXMGwKVRN8om4j4msd2S2BgxfP3KjZJyPx5935wswjzgNWrMuB9vJkoBDLWc",
  "key21": "62ZpaumgpeW4yiiTEQ4ZKGmba82r6fWLJALq6BnbuPSthcN4qqfmveXeNrmdZr1jWbzKhP61LKDSnz2UndMcPcoV",
  "key22": "4mbRtQbAncNk2sK5ZL6f3vi7cLquuLiQxxza6oMUWQVzkzB4JPW9MmZV25ZLhM7qyVpMhAeLqokZATAQQxs1i8R9",
  "key23": "2xEudUk7JFwDvTLQJwaet2BqN1YkUeTLtPXfwvP42Jtbz77aWzUFRLkzu9rTRdZLsUKTCWGVxzYvqKX3fL6UStxL",
  "key24": "5JxJ4gV9ZSbG5AHSzEtRxRk8SKqmhcMFihwEvn9hnvX4yactVhZBM8iQq7mZbo3YZZH3VM7QKZZjGmDEHyN2wZeW",
  "key25": "5ZK7HXTxUZK25Ve8n34YGbCykUnABPjFvtVqc5dWgNV9VQExiCK3iVrmJjuhvSs52kaS9aYcQdk8qKfmJX2Aom4D",
  "key26": "58m72xDsPWGRPVgzrsE7MH2zvn2G69dG9FDNHPisCaafigvrVSYxWsZi5mRvHKdLeBBPxS7e7hUbw1NURdrmniQK"
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
