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
    "22A6RjJufWfc5S3FxL6XxQS84RdE38GNVGug2nnY8aZiHyBXWRHDKUCzDA2YkbGfoXEYzW91kTVqnFtJCnpvV4gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnX4Vmw63hLVzJVwjFoycCK8xS3yyBGys5NHkY2dMZPJcxbjrrXjFBhWs1LfoPZk8WLuF8vmyzovCDGq9emjqKn",
  "key1": "2vjBwApLfantcStqWpAs1gvSPkDZnYWQYUVzb64xkNZNdHD5TwJwcNKEfVhQbtzB9RBMFPHQAdkDvrwFzwRhhJmX",
  "key2": "5KxiVHhxgehuZvok15KdFFAPuyunSyEWSjaQdiEeJdg2AV44RmQ7j5yRRcqUceZE2RdHt3eZk4Jpdf3rUUveGLBH",
  "key3": "4YkVoXrpHzxQpxnEEEsFTzjvJn473wK19cULeVPrKeJK4JvvCpvdEPXiviBs9Ugr2DnhKs2eGwiki4MyViiHYNEC",
  "key4": "SWoYTLzry48TmA6attpjR2TSgJT9bRo6iHEf8G6uxTWb4GNHiQ6fjgW8isMrocSxLsjMNapJ7PshAQYQEJv1zDf",
  "key5": "5WmTU6UkmQQY4EgSm5K1wkM94FL9zt5KNM7NTtUGR6GGhSz1crny9SmtPNY1tSGQTzKyRu6qDpWxrxpiSfgRqR5F",
  "key6": "3gXdkKZRgks9c6Yramh5ZWsBJLR1kDyJLSRoCJSEKr53XhfGrg1UtLvZSndcMoq1jkpGULsZnDirfawqGBQu9pTU",
  "key7": "icmPwftBvphvdmtsXihxueJvRBgYtieMLLEq5yQaWvBKJSayxxDv7umCFfzT1zBj5YRW5NfD2BTVQoAm2wTX2sq",
  "key8": "3vimca8UtTsKeoL47KBqGYGghuTwTnp6dxVxod5mX6Z37DMUUGnzDTYpKjT1vxbG5nFz7sGFq3Y3Ai8dJbFqQ8UF",
  "key9": "5gN6JCquHdirogC69mDrnpa78uNY38gtyzAgWKTthsmMnzH9SgA8hPTSg9Y99GwSQ3mQ629DNUfaEH8rK5SuY9GS",
  "key10": "3JYVP8qT5hXnT54b6UQSWSzCpgEQ4t2rLvvJbrk9egaV6raoSRKKduyUU3JBxGTv4NtDp4pGiT7oX6ZZD65uWqyX",
  "key11": "5cq6vz6GGU9vyPuYHnSNq5u4D4sGP7bPFFYZ6JK2GHdkQ1v4KisXfWR73ZgHTMETArm1sG8wCrPnPQoz8AjDnRRK",
  "key12": "4zpaaR8V1ujSQDLJ8Y4kaGex7kkAYCpYdb4z16RaLemvemL8Mc6c7QptqEkEEbpAJX1VCPyN2AqGyK47XdzNrBe1",
  "key13": "CrxcmbEZXAFypPYgmD6G4faX46FaGNqK8eipeKUWeYEYX8KrF1No3bfSxcX8UeT58tAoCwEHLyAsU2yREjeqJAu",
  "key14": "3uKiL6W4vDC36Z9LgnreZNt6a678MDTXKH5YFXAxP7MgocCc8creUufCAVNc3jkxUEsz4esJh2jcdhyefJqhC9f2",
  "key15": "3rykoxsbSnR6DHaUDJd1ojqeDdSeGDLCuz3My1Au6tX9Rg2uPFkdGGNgPndGheMdMFLZ8hpoGrpCgmGKh3ADbi6q",
  "key16": "2bbKG4o5cJQmyBwBonY3QK487ct9LRoZShK11vBhuvyrAdFikNS5ZukrSGcaVoW1WbF8xR2eYUeoaBxAcHoFA5t7",
  "key17": "5Ei8xjJhg1ktJ4FgC8fLStp3gpVCNT94JSVTrb83n6A3Sv1HKWKZPdisHQUiirjoehmrzzQVBfm9e4GLC5qvCRTy",
  "key18": "2NTiknWTTcwWUGPc6qUz6haHug198BxA5ZBWefBXXwKKaY29YSgqgWo5QfUmwJBL4LxgoWvH1eBCZtXxKCnfJNAD",
  "key19": "4aXLRCoWHgfoSbdKRZVckM59CCsoWwASToKdjbdLZjdP1eWEyzVP1xvPjDEjjkWz74MGqd4JbRgwwiNtttzG1pax",
  "key20": "2MUuB41U13qE2MpSW9fr3nXoUfsyHetvSVxkSzM826Fqg8bsHZibpzfF5adW9eVhua5BZa8HieD86tB4Lgnp6scN",
  "key21": "Eq2L4okHKYVKTZMGZ51HvjupU2DgbuAiXSCT5VhPQT9ZZXczC3s34dbZ9VwGAdndkrYh75QhU3ScydwfkUHPK6g",
  "key22": "4NPXTf9CfuHRrjfdFEVhiowP1sNXa8hN4K63boYRKB4w2W5foUgPpPjPtLqdtg8HaUsNQVjtu5L6zDZz6SM1HRLf",
  "key23": "66sGESmFpEiDUPsbNxNQKy1i14Naw3VqTvk4T9fiEk2NuBvG47tHDrwDxv1PEp94GYtGD6k1gczaF3GkkZTjDLxA",
  "key24": "3LEqzWeK8qhg57Q4z6E5iXuuz8DYSVjLqTEHwpkKR9cubn1u7aaTMjBoDfo7GrYfqd9nxYMGRUGiSfsu4KcBhCMy",
  "key25": "2AnUfyfXZHhasPZca4YLjVBnmUAq7x5Us48mzTPoFhCweLsR5bQD9bQfKkbqcCCtSrGbmUmKobwx6CnVnL7xmNha",
  "key26": "vKJpzxLAyXjqF4mMpwJwrVAUnsZYi8q9GGXiTWyv2Pmu6go2SfGwhdXVwqrUrg9GssUh2XrPqLr4rQpdh2MHaWH"
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
