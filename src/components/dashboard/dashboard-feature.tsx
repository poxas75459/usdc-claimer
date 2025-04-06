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
    "QFoiBkYXCMEo9VLrKaM7qMXKPdZFnewfti29WKCY8iMNUjBXUCS28e5X9Mx7ueF1WaYE3Zsu1YCtAtEujpbxUWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFVwzjkoaqbLZDktea4igVeCL8Qk5qQi69AWnPicA1NcVTLvw8hhKF5K8Sr6dpLxsyNtFLqB6QFay6AdmwKt91N",
  "key1": "4Ttv5WpmaE7a6HKHWBNgRKThmfJh7rxba2hjqkZLvnekWtc9KwdUJZLmDU7K5p67SUw429xwowi3a6r2KC2HegDN",
  "key2": "673bi1WsB5E8EHYPDPvRVfRUm7Ss9Y5aquJqZCZbRDVpyXY2ZBYZPTt8qrUn6ixGXMQ9K53oymNbchck4yCnMEk5",
  "key3": "4upcwK2PuHKET9wDBgSdTQ7pA6rPaknNKw1RPvKRqY9zR8KXxJtzjzgA7UFc4LbXwmin3gpCSoGdyR71KkrHo1SL",
  "key4": "3gtGwiwRiZk1uXvDaNR1z4MnDqvoxrNTpCHz4HJWkrAS4JmyN8gbPqLD3BU5uo8ZJCRFyqLzYVA3pSnrjxX3aVQV",
  "key5": "5DQTqodNH77tzR5ajEoXH5jV3igDEhTSwBjiqRALv3mgumYcvLA4qMB6HJQr9kz7TERvh66DXT5ZrGZR861ouD3z",
  "key6": "4H9kMuBhH1m78PsVzDqaFR2A5TBQm5CkSoqHRmSTVFgE17LgrTH5o6bXWaz539rR9hzZoFjeuFmoVw3w23qG9VEk",
  "key7": "4BAcbZR6HM12EJSYD5ujd4hswkGQ8tUfWtQVVBWwPjVGqC2uNVqwRtGQtB3BrowbomJM27n6QWub48XULDYi2iH",
  "key8": "3zHC6QWjioCnFog3KuEVkLgHxv7A4mxT3CSamj2gBAiCvAnxK5fLjxLA9NWPTo4dnxFutMppcmNC4ZuiYMp9rCBJ",
  "key9": "5C4sDsb3frrb5EJmyD2LsHSbRVgVe1toNLucfGBQCrr43KZ5hBR8CJwTU8LDc5kwPy1HMQSXksbZcePtB4P5WAPm",
  "key10": "BJut69q6kwbfkf4XQoY9KFdXdH4WrpPVEngLT9RBSdSXPFXZvB2bMm9mHa8d32GowgVS8Qpq4Rx4Sm5YrrkGrV2",
  "key11": "5XWBHFmvFjjMZ5uYtmgrEm9ZwEq1MMxvCMRyVAw8vCgCUndERRCyneEdfPEGDeHvduALLe9nxt5d4hbKoZcywJuR",
  "key12": "3LJxuPzMmUNuFHJ7Gb8mVUhiA5W2pveCGFUjwywv3JPAnUkPkj3DpngaXod1VZpZ2gTeiXvwM6Zqdp4NrUPfV895",
  "key13": "2n99xgjUr5Waj3JCLJ63Gxjdb9oMjKL4X62SBn9Am2T7B5Gm8hxpiUFX473R8Netvh2w4mWu47um3oyPDNAk3sZx",
  "key14": "5MPTqocSsyZeSBKGUq74XKj18cmJLZzEWX9MAYkivKvN86zcyrarZ3x9tU4XMe34fvGV5V7jEanHUnNzebQBdXb6",
  "key15": "35d36P3CV7LYWCpvBq86CGSU5bBbePhATkkjJaDmWPxgG8CdDSdotfmyDkwuMReaZJLE8LtuiLLQB781MR8PweXk",
  "key16": "2fkrMDDAsrRGYTXtxXpvf3NqwdK2igf6bQvhWq6qnveaVJ5swmk9Z8WgpKWoNrGm23kAcU8ohNnV12CMtBJuRebA",
  "key17": "6146ioDdNkvQWmrhktWzVR4Mwz5fx2Zhg3aRRwJT86hgdQWrfsMQmEVE3ssi8yXWFE6w31ff8nAMUEr5eXFZxnPC",
  "key18": "2SDedDSgGxgfz3MtC7pcXogXCDZxrEU5KkPbKPP66BhZS2fuJdSkPtu63GCFsT9rdyLtfNMjkovtJUVfU8MvcQbA",
  "key19": "3tSEXiYkMLZQKTQzsL93LHwREfDyB1YTugeSaawTp52gobwDbhaez5omkv6dFpvS31PFzk3fAoX9WCiFU1S6P56f",
  "key20": "2LJsp1EKhgVy2wq5NMXttPnEJxZVCGALEwhYDFybjYnCPGPLFZMnCo3FzhpAwvrGQqhsfQ8T89LiQgLMUbXiCJHc",
  "key21": "4pnStSaCMNP3njGMT2wNxs66qGEQwxbfBnBFFXZpzGZw9Cg9tSr3HiKgUn24cW1gV6e7NaR91HUvqo9kjbjiGDN",
  "key22": "67ZA6gXRgpMQFJZks15KiFnNcR6HRY1AMggGrXs17v8xm9SYLvDJfK9FoSsCDN5XV1Ewg8yGUAcpq3C9amXCSoUx",
  "key23": "5YvcGdoPBzEiormKf69pD1iBS5PKDzDhN9b47mGdr4qMwoef3mjrpYCBWQTYY6U7aBbLutvSAfRcRqJVZJXvcCBL",
  "key24": "2HspeuTy2ape91PVvsTRsp387QAR23mda12Y7MtSfma9b9qwje7BbdK9mKCaeW1gX88gR47EJCqBYwBCfyTbjqyy",
  "key25": "2FfaVHy3ZvPFSo8sVNuFrbseZxod5TD2YVwp1JvCjuwFnwqErzntv9uob7558Txsyt7a6Pfg2emALAjnDvWTM4tX",
  "key26": "YoVsxcJrvvyefhmB8J3hk5wGQHsKuj7SeQNYdhdVdcu3i3njwXcCnyW3mUyYoUcbMPh4ZYtXStWLaCTS1JWj6m8",
  "key27": "3JTDvEhYNWt4gKDDdjnqAss9uTz4cyQs2wCTcUW34tn4DwMhK6ubpbmYuR6wTGmYQ34R4DjnGyE2PNjeqNVy7zfH",
  "key28": "2kMEr9EGtq2rxpJN5khacLXb7fstvcQWVHB9KixZyFNAwmcVsbJD9YtCdkbhvpZjn45Ne7ff3pSzoPimwxR3wd3c",
  "key29": "5aSfDVGXte2ni22omaa7tZfEsaC2E7NQzo2oi43N7GeYhPV22ifPsqFKf3eE2PgfU2pgdjwBtgJmoohq9tkcVJZG",
  "key30": "2aBvRg9qcys2D6t9xKvQoiei44wk89S8cn1cBM8AT1jEF4mwDNzyzvJyRLbHdcP6Ev479oTQWVZbnSSzHfdfxLVc"
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
