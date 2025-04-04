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
    "53Do7S3eS71WwgviGRzVoq27JPYnzGnYMe8wpX6bRXpWk7rTTDN6beTPMgrCUZcS52DfCRpD5dv2xAUTEyQ9r3tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbcVTqRRsBkfLhxmnmDj8CTxbuYzpfWUhEcfcssCbHauBP6Didhr2ju7FZmeJ1csgnZ8iUGQhLXGnpqFfJXgw4S",
  "key1": "5jRfsHVYUs5sMe8QfwfmzTQrQ5Wxs1z48fC3mGEJFR6wDCEJWE5vdZyYyso7jn9Sy9VDwMytS8wY1wbZFpVohSvA",
  "key2": "39vQFxq8YVxP4iiULXBtGpdafkUXsF4xjg18AGHpNix7dCabZrDHBRRKd8qUJJ6qUwkJjyikzZbepMNg2YHzBEKZ",
  "key3": "5eCk1NsWn2u6ZLB5k2j5ftdshXpkeTuaMJzw8N5D1gxCM9S5aszjrQyT2QiZ77goEuCKbvbpFtv3F9Qr47kgtjb",
  "key4": "3LyJkqCHCZXSwyzMnsGKfcccqwvUWjBsBWy797nPHrzn4dnSvDgLpHsQfGayKtnL9fgu4nrFKrMexBBkrPAsuK1V",
  "key5": "EBpCPQ9rZ4f4uroFnRqg1dB9sjZykj8kFAhGHTLVcHpdpyicULRsjhvU3N2EF8x4HTWkKFEYRGii198dbmDdAU1",
  "key6": "2ngUSL34epY11jaboLThC1iofnRXbE3g7UTcGJRAVBPa1c8NcQbNapbgf4Qrnx3iRk3ZqKZeoVZFEXQVQPDgxW1H",
  "key7": "2SZyhnCZK7MdjhXUBY4rx4H139p7qC5ATKEg7jALMDSxJxhknZ2mJPYc9yLD1yXE7bQ4N7mftZQGgc5US6Vu9VNi",
  "key8": "2q2Bkv17PutKGMXszHcUPJK6S74TE7NgmR4sEjbw6Hyjsz2Rh2pDnU6wiSe1UsTiNm19Tz1zuANjkV5W7nFW2QqS",
  "key9": "5htjUUGsWCa5UE8ZfvtxPND8Aq9Wj2Lps4Yq88iPNTSYwbNquezbDbWPUXWcvFwASXrCHaLKKbiLRqqJo9ZQQ6w8",
  "key10": "47K8j9zhKFtU8TcDzaPbqBRJynLFLSZqazeV4UyDVuPAmFMxeDnd8wkbM7WboLUdeTWdYGCFEvttHNj5mQCTjiBh",
  "key11": "2sQG8T1NCnTU2wQ1VHf5QJsDE6pJjT3F95Xi796TCkXadoJNGC9XaJCTYRbTgDpyKiDVoX7PfGpg63AYpsKzMeED",
  "key12": "33igpPAES6Ty8ibRMA2BWC1PQccp8RvaB8zDp39jTZ4scAvAJ3EGnS34wZqQD3uLancmr3brKRSYiTnsfN7fo5EE",
  "key13": "3NECYtpd85DDUNFwsfDf9pF9xtNEhSFLpywUrHsizbxrrKZHxUXCg46oHdfJoJ8niNbWJ5tJWNTajth7f9vQYuck",
  "key14": "3KgrsgmNB5xabTSmUDAAZc5LxjZjGdzUAjn3PfEdEqFbtFF6AYE4B4hZihgVvmBvgfsJvfvABTz4AjqWGiGCCYTD",
  "key15": "25eEZrZbSTDjbpd5X9ofkb5zdnTmhM2J9h92ZTt5FYGsxDgFjjuHLYkR62cnEoe6btLJPxEuTaJeMW81wmmoxKvE",
  "key16": "5nX562rJHVWsp4cbxnEBn2Z7QWN6AJeNm3WBejbYhzK4ticJQ49cLDsXkGQ2nAdyhG8PUjtyFek9rzzuEkF7XH8r",
  "key17": "Gph7ne5WhHD9rax6GfcKEnXbeYTZaeWRJrddQaScbBQkqNMAY8oQvTre5AxUtTEhJ7J146dN1MpyfrZ1ebXDxVh",
  "key18": "rwSnsEnyTr6AAcvCs1h14TZyD4oWgp3SeM6weyk3qHTTiXM5ufGVfSZFGu9mVqDqsAg4ZrdnaYnX6y2Z7C2XDyt",
  "key19": "5c9aRarH5r2HP7hWBsptTjfd2PwSXg6YiooWbXrWHKBLu9it7vnjZrWKmhBYnqBbSAfdEk2ct1j2cznRsWCPeZSy",
  "key20": "4ZFd8tARc7Esp3BQDF3S5287qcGZhMmSiQaen1BsFNr1gPMpBvccLuQutxTcJ2t6nR7h4iJZzcK9Z1haNVKajgJU",
  "key21": "WqE3nypRHwXaJxhnA3Vh7c4Y2icyMXLWJVMwJyf1otboCFpuZCA2b1xZe3RSJhsVaKWsMesSaVmrmtzxhxQxvCV",
  "key22": "2e2DfDVHKQPZVFZL8d4Q8YjdTBcvYh5R2o5xtWe8mnA3D44CY46QHsWQtRuywA9LmV5UqmYCAk9nTU6qdun5kevg",
  "key23": "5s4Y3cBy6PvL5bhBdtsN9ptddiXWv5XT7FR66ZzaUWQnNxyaSaymwGyPSVSWTLg8sN8kP95W1SrcQiWRot19cvio",
  "key24": "4FVHcXua1sDxdrtrA58vziCb82GXh1iGDAuBjVCvXohkpBPhcYd8CGVVP33QKkNeBv5TTYeSsksPWJjE3rRs4LPx"
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
