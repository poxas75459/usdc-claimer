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
    "CAZks9LqXCPnaJvtxDVGTrD43knKziSQsrqjCnUfj24Mjim8JQP7Qk8vLiwW8sdmgcBBYAfXGJwwv2XC7bguJ4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zxn8DMSfXF9sKreXK287cYE2NCrUV9WFJJ6UvFSwZ26ZU5A9fCpBrPcYgBvmbnZf3hrmuR99wc9Gc4wGjuLg9EQ",
  "key1": "47R6Ez4w2QQ58mCxKzfu9U8GTqChTKK7q6jKokSL2iK3BfdYq65C3KDZ2QartKtNWFKh26JNCgb3gVLWGep1aq3n",
  "key2": "4KdygdTKHhQKd7r9KR3R8QQpsURuMxL1QXjRuMAiCHaBefktvnRTUtai8npYxHebVihvkx2URqhqfoDcESkpTXDk",
  "key3": "4UdWkH3whkF7zAid9v6aYrAx7obhD9bM5iyUMdnq1TApBjXNnWtXRP4bBjM4mHj1NLjkjZDv9W7jnDihEyGcL2bX",
  "key4": "35SquasbTBjQe29Lu2HbkThU1pyXDK75jn4iNqiL3Qk22ouesWGYhCGDkTKjEhScqkR1aCU18pEK8smjM44rsec2",
  "key5": "Y49KNYhsSEqkvCfucyzeFyVd9a657QX4TmCRyks1vGdLA3yRoLr3JdHQLvz93cd16PU96h7krJemKsJMZwbxBqk",
  "key6": "5bMLtFLXMKy9XxUv8zUM34GKPdqjppSFYGLbkDwEXY4YrF81MoRzsTbQtBc8JzwTxsEUzN3fAKFf3BbGgVkvxqZn",
  "key7": "5mm7anY2txz7iueX69PAKPqD7af3areT2b9S42cGqakmejcvug9y1EVesfkk84tsgPon3EvfRu2QkUJnPsy9Eu9x",
  "key8": "YxhLGjkXUacPDW7AJhdMmJJ1Tno9g6AzdcPNwWD5jUEw7W8GUbBiYg5X4iEkRdSreEy3FPWiT7imbLYGxGPjTMc",
  "key9": "5PbyVwoNwR9V2kozHbKC2UUesmEeZDswspmTJkooZFsMa71jcEvDx2EC7M8cBBQYXoeLhKVJoFCvMExBqjD4cvXe",
  "key10": "2r4NSDnLpak9Kac97F9qCMsVdB32jPg9Ue2eBcLz2ms1fWMNg39i18ofPn24eCGqCT5GUwRvbzod5fP7ubveBJDL",
  "key11": "poxhhWHnXYgpH6MSr1F6XqvBPA2rNFBioTXvT3kH6VZ1Je85ZpTRuaXHtGmPuRMQtP6MpnBaS8ByRgTG9q4umSi",
  "key12": "5QGc6kUQZMc6PvNh1DYyPwoEaPk9SBiJNZFc9FvcJ79M7VGXwQyW6FgUMjY8NwGUQqGmiJAxsjvBNw5M3Juiv2PV",
  "key13": "5z7yEHr7T1kgq6nJQBfSHbfP25xQu4kC8vbytYa7SSKRX4qknAcbWiUsWA4YmJhChdLxxXKyVPJp8vQL5512mYsF",
  "key14": "3mnrNTQKqKYJWoCfUY7tfLrpAEpCUzGVLC3DHwPhGaM7vS9Mvc28G4is7e3x46rGcKf6jU2h6zTXyNedhUZ5yqWc",
  "key15": "2b1gpYGGrAv88H6dNukn1nMdLkGkRPq2B7adcTeiE1qnvCuxwAYxkvMtjESYLqgJsj5a5nQu7CF4ruXxx98ovh1A",
  "key16": "3wx4AoNKgtvjVDDSPwAwrVQmxv7AbV8Pkpzgt1uVSDxJuHt4Ao5kc3UV4UBwDyrDVsXQ6FicctgzhpwfWRKLRCDF",
  "key17": "5Zt6uJhdXTwuCMXz6uuk45ZsTTt6Z8gFCVho9PF2F9z6ojdwu9mcCJzHozsbtcCPv7Ccv9gaExafaZcCsRTsvCAx",
  "key18": "n8BSbnZkw5kdsczd1Nb4GLZ1fj7yXwXmyGrU9ihUUfmQ9qVbMiDovKtbX8JbzYVxpneLVUb2NZsQpoHsx6jAazq",
  "key19": "wuXCWb5XnekocyL1X8bkyz3bGzX7idUHzbbXncuXwbhFg5XL1seNci9CzWtc8uAkbqbRHhDpUjmVPfxzBS4hqP5",
  "key20": "43TPZJ5SN3NZTLqvjtNLVBrWY1Wd6wwxFHw29chJcmFmT2poiV8P2e8U5PNdRze2K7u2nUK8qjj5FvHymh4syK2z",
  "key21": "3HkwUi5wKPhEnkYvhCdBYmYWeU3BbXJAj1dzsAnS5bSRZ5VzTYVvSQFAvbzuJhu1ssP7TUQfr67ExY8vLfrwJGnG",
  "key22": "5UTAmkQicZrWfuxsx9a9tExVkwd3egHAkzFZudf3Wfx4YQMFLeENkdz2wojwAbY47yN8CgCUfzSBPti1gjtDQi98",
  "key23": "3DhXDpeYCrbK3zn3LPAbMfWT9RuB9SgH1KX2KPXMbaUDsTTpiWP93kgeu8DSj4A24CM9tYjx91mX5XmaGdZEi2s6",
  "key24": "2E2eayj6WiNDc6UtYTANZaqwiqBwv34hS3Bt6CVEWHL7zNyMBs3Pip3AMbZizNSp89PBjqh42ZPiLYauht7PQWSw"
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
