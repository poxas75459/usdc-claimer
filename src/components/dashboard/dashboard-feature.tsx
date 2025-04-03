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
    "3McEDVgj6nheb31hcacQH6jorFMfymWratLnSNmCwbTDjqtUkNXf2MwmajCDxGvx46bhXsZ1oC1tj6smTPqRggrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhJ3VoXvNWJpQnkAVL4KKJd3YssEryzrybBCdf2JQjZrLU3WaK1EUL1rtUVr2nmPkK3N5SAnXjrBU5tP3LCSbWd",
  "key1": "65giLE9Ai6MfoxWQJSXUEB8Xo4kRBfpjCytqBVaj8ZhTECULxLTni3wcoDTGeNSM5UL3u3UnAUye1uzk9YXkDALA",
  "key2": "2Cw8YvTtLovmVZU5dPYgXatC6ohp7Sg6hRBh9w7CnxWqMDxgs6BcNak8bktoPWTeN465BnsM2GCKQaCLbWuVDcc4",
  "key3": "eze8RPWKv1qvaC7J3i341BiW1XrHEFRL4q2RRKQEdx9CK9fFM8rw2n79YnyUXyFN1hiFY1S19JWbpWgxajCYDGg",
  "key4": "3KP2MGSA9C1GLEnKnhjtD6k1fCRwrzwosG4j34mR7yoGW6fExt1RcvWsokmEVVVgyhtqvoLfEYomnjzVWBd3gbWf",
  "key5": "EP6z9X9DZiPV2EyLmJr9Mu7wfSL2t6QiJyB7HfuXYR9ccmkWfRwZX99dwg2C3YRC7m6ckLz8XPsYwQYhUb4fxHL",
  "key6": "3PkJAh7Ft6E7uFFxGrHTxYbikg3H3EcSY9RZMqQ7QnonTG8f2ZdjPvocMrrnaQfuc7N9iCkEgvc8g38vobDoiBcR",
  "key7": "2mQEcBzKpPpvLCym1JnDoSkXNRHCESQ1xuvn49RGbij1657kbsMi9RpNhffJ9b2A82GzF3fKGRDmZrfWBtfUxBKR",
  "key8": "4PnTy8NqByUPttL6uZQdpj5GJ1KD1EUBBSLiYjPDZ8tF5kVMeP3cgccUw277afV6pikzchLALZ5gVXa24znSrqz3",
  "key9": "3X9cK5s6SDETTBPcLi9M1KKXwG7LvN3qDAuw7VGCStaGQxzzhS9zHQMdiKd37BkXr2PmC7PUWo6JzvYoipYjmCB5",
  "key10": "2ConTcnYBVG83Vrei4CYaVzFkQQPzBLDEPh7CsPYkh1vetZw58j4aj8hWctaQfuyqXH9goAF4bFkmYWK2FdUGeGv",
  "key11": "43rzGo5ub1qJVqmXPHbcXDH9zyC98fLWJnAXEoPMNJRSguTWLneBgKfhKMuTDL9BhjZbBeKyd1tnUcJ77TkHqBbQ",
  "key12": "3TwSBMxsMF9pD9id1hjEMWWChMmToDLY4tCa6ZMPZak59ojgN9cw7GcNg733MUxnTxhcbbPbX5zLmfSLR6yfQad3",
  "key13": "4NY2xD55fhmU1jQoFpWkWbmYNnpbeQEu5ThMXyuarwkbH2vrUhmL3XEd1duswte7cowmyWXQwhxw3GwRaqx17gvm",
  "key14": "5W5wtjPPnzonvdGHehkPGtgscpxZFLf9k3rPEnMBoN9j4Jq491a2cJ9BrUGWv9b4z27br7Sg9xKsXpVpuzeb9bLg",
  "key15": "5HFoMHxKyi71SfnibUf3vVCHMXBekKmPoB7bSi6L3Ew9A24W6RidMJizDGWFu6iL7yoBpdBLfDVrDnzDrqe6mqcf",
  "key16": "4Uze4Qo8EEH3Q88W86fMdWTQLoWNYRqA6S7QgMhP6AN1ppKyULa5AoAftaD7ucyPZWfbKNfYev9bRY8DDQE8ZMgz",
  "key17": "3jUpxjhcLzwUSywpSn8NPBw59c4dkhcirLRQhTdabFNBHDKxpz3Kc6tioCAaAjn1EGfH4mfZnM1Y4hfdRqgfdvFM",
  "key18": "3TX8DdQiNA2CRmT4N6PjEdGFjKG6bgbHDhbxgGN93fJT53zGnBnSks9uRWm66RiHUjycVDviEENxZf9ZAv7h6i98",
  "key19": "4aULJ3CihLx8b2yMjcPdANiUhpoWZ4ey9UzCTiB5rkd1YRPvZGtnX7zx6hkwsYBjn4Nx8q3z58V8Dif1QdCHUWka",
  "key20": "futPKXkyhcKeq9Rs8z6WYCf2u9MzY2y1mtPYndkCDyHVtFhcVNeLwrqcDauG5U3b64mzBTz3ue3dEVd7Yb6vNdx",
  "key21": "2C1kj4Kn1dxHF7KHZdm3oHN9ZiZNiMmiaWGxTaMfbCmH9L3Vim6WBKUPS5iGuWJktgsej6M7GZ5EQbkkcYhAgCeU",
  "key22": "2hgMF5LCqhE9aweMtcN7geF1CeNaw9MseuF2N5M53P1ff5AZjAGxrK2oMmgM2dRdooktX5sr5BeWbRh8DTqdHCFn",
  "key23": "4CwDHEmFWYoVhcvUSgsfSoTFzoUqXZwHR81w1KWMkZj5K5AbviqRaHpfQmcDoBKnccsQNxvzZkeHsWJ41EWC9YAZ",
  "key24": "292fe3MEtrnVVgXJWiWKfjDvMFP7dDrmKJv5gHu4rjKZEC77joR42epnbB3z2pYasVx6mdjFBWFyBKLHKeRYJqAN",
  "key25": "5aqqgvW3UnB8XBzs2w4cnCUk7bKXaZVAaphdwr8soXgYsZ7wa2VfkqTekQz9rFbBa7vyg2LGzwnqBUD1fXQrwFs7",
  "key26": "H4d94qkVd9gqmDjUzVrtWQPBBVCDVrR7MJcQFmmtodWfDF4uNcPFVBqHyAtMcd8Tb42gAktxStS6nL1EWR19Vbk",
  "key27": "2c6DkVbLHFSoKSoxBTR5Yc6oK8hU4nNHHS1McoLADEny8xHDwJwEhmo3n11MrVxgbWNRovaFBUGF8ofJ4MJkttmD",
  "key28": "5rcw6f916NZ1fW9tzEAsBABgRoU27PMv3L8iZQWbvYwew4mSY8cGvRTbnmjhqYQz4uncojRZK9HDGXE4yMW951f8",
  "key29": "3t9fH9FHbyGCjskUrXMpjeuhYspfjhC6XmUx5L7Km14TrSqcktBGYPDYsbCgFhvKMo2n5tHiMWXpTYWgUsiBbfND",
  "key30": "LC9H942tu1SjyZxmCk3NB3JDCCZhYrQaerzXfDGubXXYXLGZofyvP97kAVSGiV9ydWpsXtQrMTcdGbf2LUCxQ9e",
  "key31": "HchNk7hbmPk2BzCXL5VHvwRcAdZsWUZNeYun7H1hxvnG46tobv3KsYVoSdwYWFbezQpWQLqnxjvaycs8aCUUY1Q"
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
