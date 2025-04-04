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
    "5p6wECEndFY86Yoi3teLFzAxZeBojffJnieijwKVvpCEXbAew4vDYy2VrB53XrkPJPTF335R2SHdbMkRpzBKt1yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42KEhcF4DZ5g52qRz8uj12XK1jHVUL7WKXwTPxsruJW3JpRzWGQP7R3ZuwhxSJRFfkrDFLADtXsiAqyJB66RXktG",
  "key1": "AQ9biwkMS7YhWtLyvwDZK39D6paVB6iWdTpUW3hyfZnQQQAmzZLdxKbQ6p6y6EsQd65Q9ok4t52VcSFXVeUwVNu",
  "key2": "2hF6RhqGrxpXVnGoAB3nAi3TRTVJ6UG2kKjgKCejsLwk6aL8DghFLVsXtqxxWENtTMeT3jgwNnQLsHA33XAFbG6s",
  "key3": "4Mc8EDQYLkF64qvJ1QmJt2rw65xHFijAnTKu6YAaZBC7otbK77P3FEiApWansV1Fa33NAz9UHRJ3xoHV79PvkQYK",
  "key4": "2mMeCaPvVkgBgJEFUV7S8Zr6pQ2J86pcTtWC2eGbaZTZCm2aghiBeCaoqH8XeDd1De1oqGCj5pqWoAAv5BYuuhgR",
  "key5": "21kAwmihDjs5QrCxzpP7eQFgAg6ZxVWM636YSPRF5hACQ6FDPc5jtvE6487a1prv4imyA5cfnneBf7tfZoc9pxov",
  "key6": "5yhn6PSpbo4uQQU9AQfC1yWuD6huZJ4TEeCCHVGhzBr64FoE8bJcRGUMm9V1H61n9LpJk3Ri4k97ZRfrw5sihhAW",
  "key7": "3BBNvTir8RHNfgJUE3WswXYZHVtRAr2bkddeUtLK6GmgpJyTwyQUNUkrcGtjBwgSKygNAwg3q3SJTZpfS8KKRwPG",
  "key8": "2PmoHS9X7p1g6Vb56tN2ahj6wueYZFyHUp4Jq1qbsUUvQ6To6VmHd7ApeUjvEXCYt4duTnVCJBDMD9AFsJr79Kjp",
  "key9": "ka8PFEn7FMoCRMPhESg8R4hHDWTCmRK3eXATGNMWp31KWULezHeuC1NK1bJV9KS7AaYCqMJxDPB2GUfwGRZSstL",
  "key10": "vnbk4vm8E6XQoZAevK6oJokiT4E4kDupGvf2AEEChjKQehinQwmzfA6d7PxWMv8LRiu7W4V2Hf4bVisXtvf1NR1",
  "key11": "RiFfYdr23X9kopazG79fBD7RZXkUeZfDnU39LGJZNZajcEr9xpbgnsNSatrsM1YzY59k9RrFsZzqfrNghhjE8Ac",
  "key12": "5A2qWHNVcgwdrVhaqyLtM5u7pUSg6bYYhYEJ2qz6gVF4gPYJMPodn2HDkFmBEDWZyEGwFw9sNcCb3fsrrUh1aNbF",
  "key13": "5hBoCmVCb2WBREJHCDgenE8CVfJrBniThSofH5x16JfpGBPqE94YotfmatkdervUFC3ZswQoGrW2jR4UVjQbgJqM",
  "key14": "fDekGvE8BTMGDYs4vACaWpabvefo19caaGhLHme6MitYh2spu8j7wtQ8MMB4YwfjY99RUCxBZQiNtJqCSgjbaxA",
  "key15": "4Sd9gRXeF3QLMtrydHRnLrdXTH7Zw2BctyaANhcn4Mi4QuRxpTbnnbr2ywi4ZKXzwA1Eqay9hnEotXPcuG7wCq6L",
  "key16": "4jCYZc88ucwEwuje4QxfJXv9pTPjW9Tk6xLwm6GhmgeT498CUvCaZwgshxEkkKzWitw7gdxruhxRRem8FVZcZpNo",
  "key17": "pyJCewC6fv1LRKHb58yuHUfKMTkJLf7wk6H6H8CwqhNc84cER4scxW5txUXknEfRzBo4KXRrmLf4b79mHeVsrG9",
  "key18": "S41V95GdrSztW7uX1TVTZFirxnwLZ2YSY7Akr6Z8Xb1ut9yaGgTPeJvNFPAm9Zv6ZRVLt83bRMPs6dKLRUojHcP",
  "key19": "5s5pRu2jrPLpX9wFd534H2cnt2TFZT9mBcu6sPcDiq1gKSe3KLnmzsqTFZNsCUXN9wQtUG1MKoy4d8poUx6TszUY",
  "key20": "3xTWYe1PeVwZE3ncs3xxAwyQ91PPUtJpwGxqEk493h4LRADkv62xdT2DyzvEJjcyoYjd6tWhkHPQkgdXtyxeRXJw",
  "key21": "2cUY9g2KiEExxpLq45gGis56KSCw3AjJMsZPcfBMNjhjr77V4na7papb63jLFo6mytuoj3JLe182rTNMtU7Pc3Xf",
  "key22": "2z9KyMfDFTHHVUtfNrB6Cs9R8CBBGPPkTAtYeecYSa9apTPPrF3yzmRkCXYkkD5VsR1LxVX4ZEZKiAkuRMTLRMjk",
  "key23": "3b5Ge6wjraNQHC4Asttc7NEFbNxKC7ofokuXpEHSkjzxhGB5gyD38QewVogPx5kETyEkF5QLVGpVfAdDx7vy2iKQ",
  "key24": "57XYMuQkyXEUUELMyDh4CdUpz4E57CheJ1hKxij3Fp6XeqbvHaFdQgKahyFDsPPGNH5PGoGRhYwPMPbY9gWKVJ5d",
  "key25": "4sfw84LoyG7QKUsP6dZwvGinAEBuezkWwa9A5FVFuJZ32QfsMRGSpD8ZbbcmZNCfrK1VgtofvQmoAfMKrm8TAy7B"
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
