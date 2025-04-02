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
    "3TYtEZSM1vNq85vK2BER738jFXh6bRFJXsfUpGp2MAv4ddT7QzVfPrdLEFwspkB1VtBJwYKgyj84JhpU27xt5Zrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ls1217JLd9qwrXDLcQRumx3hdxfFVkG1JEJdT65bP2aqXWwFDCp4wXj6wJzu3TH1zZFJjBj3iGnP7Xq9BWMTGQb",
  "key1": "5392QcXGYxYbtLigxics1F3n61RxFYeiGvZ5YcW7x5UkFoygKz5sPFCLXnYHyz9vrftcgJJ3RfYr98ZuAqZW7zV",
  "key2": "2VQe4jR7yLx9LqrYatR77zXsmy9UQa9qnZyy139HgKCLv2iRM4Cioi6QDtCB1Mo1vJs23e5sGP7DgCm3ZT6o9HkW",
  "key3": "3iPoiQEaXsKGrG2iqSUc2QTpp9pRFiH5PqGnVByz7sLSGi245ZbepA7sZebTmyJCjfycnWwoueSJ67vxBvBv7uxQ",
  "key4": "VkBaMmohEfo8TmPjaMRAXGf7i8PPvBumFVdLvMjdthtBRvJmFPLuEtxHAUpVYbKsiwafuk45rXTLk1X6x5UYWjt",
  "key5": "2xqzPQWH7aKiFkY4RDsbdPh8iXSU8v34YnwRNuoTA3yTsPfNDXd6RUUBPwNSMgZyQ1wpXoprsvo48cCt2zcaerh4",
  "key6": "4nRPUf3Q7bA1BABMnMEo1yBs7tDMHdocMQrHAAwCWFHzmfvHvtaYjHkS6t7eLF1RUh9VBJhjdfDgux7STqKRSSSs",
  "key7": "mVexugBHEP5Hh76L8LWJzaQpN8Ddrn4abaRhnj2iDJq1VWyRqL5NpiXe6yVZxBE7piwAtPSK4QDTcRL8DEsHPty",
  "key8": "2eSs8jDzM4p6TZAwgunsg1yP6TsJDAYED4YmEN7QjoDHpCSjgbWGq4ThMCsE2dEByv9gRYwEvd18fWSSPguDph2s",
  "key9": "feExJBr857KYfdFz2pK7LVk6KobViTdCaDiMuUacr6yFP784mW4CpE6493RJUrQ2VTcKLJtbWYbfoib76dvaXxq",
  "key10": "4yaYJMLgT8Y1HHUk967X4ieCsBzc7nJ2iCvMDX98yJow8LChRX74idwfvGJGNuAZfytd8yyTHYzEfi3wSiZzUZTj",
  "key11": "3PmmxvtzF7cgJbuZ93XLWjxWkTMPQiBBFps91T44JDHXqCJDAUE72AUQL7MjJuETiAMbVsXxe1W4jazG4hdcj2Dh",
  "key12": "4fS7D18pz69cM955H89W1VbpTS4PURu3KnZoaVUHwSsUEzLRVcU6NVpepntGUEE7rBmLg2a2k8EiUWQSdu1VbgXu",
  "key13": "3PvKPtYFiRrwU6PNHstL5ybRjz1Ky4gvZE97pYGZeFSxsWShmDLmTUQK9AgWK3QXGAgNt8SwigFfwN1z7Q54kcGh",
  "key14": "27C1HxoG4YJB6KJY5sxVcrnR7ow8jK7z3TNy5Y7DLtnLVTzA2L2QhfBZ1gNb2Xct6TtLaHzURxQxiwjtfuiuwEzj",
  "key15": "i9xvjXrSUNRuuwwJ6geipHgNZdegxZgv3i1BAmCbaFUkYuWgvuML3BtqXu5KGqngesYD9m3ttSEuyPfKVYbWgwx",
  "key16": "34iN1SfxRJPMCftw2KMg2eqzJupw17UnTJymL439HwPRQ9dPFAG2mYy7NfQG84Xs19UGsvB9W3VhrCzGKiFdBht9",
  "key17": "5x3XkvAsyEAA3P4vkkEP6BdbP5MT45vHvBGHPsH8NmGjk3dGfZawjp1jUCsjxjYx7WHo5cYSM4DT6NNgNzp2n4n",
  "key18": "4BCpcDVGUuypQG2rGLJe9XJQtrpu3eE28MxjsGSk3ULY2LTMNPG5F9HzqNGnjn7kmY8X6MBAyzJLXhwanGeTAymp",
  "key19": "4UMLkBKbm6UqmqFaZnNKTEcfqkQANwLc1PYrynhCXZ9boc4ag5BLuGhRPwsVtDfAUK2SHZ3JCbqp3Uvuod2c3Ccn",
  "key20": "2CUZNQFbgMbetyQQA6eE6umYYfvXuFw8BqQP6Pc3qL9mfA1UAtBzgTbpcCmLK98c2VazDT8QX5Ab95dE2k6Vq5iR",
  "key21": "4ffUFoJMDJ3XPHU7aDNibPrATUmwNUjdh5WbYCKd8iG5u9DgBM6GjZk6r9ZdfziAULXZELMhaCVWCYHyTux9BdWN",
  "key22": "3f89p5Pv7Ng9M7SAq1e8dZGWSDppMG6nz34KmG4HQFCT5RtTZTa7XaPFTWzpSqEnwWVmvcWYF97ET2nK1Ww6JpHd",
  "key23": "3ZPLkiDtx2c6pzgZ5D9k15xE2NiAomZJKHJ8LS5fcYmSKoTswwbmrnEhN5nkigmhhacjkUGjjvNqph4GJLgosCmW",
  "key24": "5bqCggNHrynbTgAroAu7mZDK5i2xe5qcnWBE94wCgVYoCVuan4VpnL6x2JVbryioMBX3RLC6uXqTdZKrkMJp36ZD",
  "key25": "3LocAJWzssKEcWkDug5c9bTkhxz1ZTFF9aqD6Mp1L1hh1jibDAr9vyD6CFFdQgfeKxediySseLbezZJyKdcHd9nQ"
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
