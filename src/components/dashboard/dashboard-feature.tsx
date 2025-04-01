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
    "gMnRXv8X8aBmqjRPUdG4DNBzk3fdkDM2b21C3u81v9Buy8zk3BHk8iHsyN9Cdhv1M41bYPo4QaQAR5UND6rzPca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VCKV9JkoJv889nAPBXptyuLGCVwgSdpF7bE4MLXiHnPReW27rCdML4rbK45supfsTZQQWBnRQJw3FWqFMZ2BMK",
  "key1": "3dbn3zfEdw6FntvPc1E3QJ9dcofGDSdxpn7s8VqpfHB593X7VWALsvnNidQiY89o93dZh1mnk88qGB7WAGUSr4jy",
  "key2": "4HmnMHb3N9SH8mxhxrqUJp5v7bFiNgDj1G4joCyAqsScu2NZLe8dWF6TzTw3YebEvu33sZ2CAcAzcKY4No5rT1j",
  "key3": "6VB4VfRwcaMfFciKRiyhUmzTE7a2QBZLWSM8kKW9tDXhonFY8QYEnq2uRnYvw5FRko377gfU9P3eHHE5JwMznxn",
  "key4": "4S8vygHHDL1wvmtRof14pXV6AxPnxzRh342QNRqc5iiqoBEEttnt5A9QvWezA4ApVoArUxvRN5psTwMHafygzVet",
  "key5": "5bGE4wopNWtbLCyU9C9VM1qNRRN3yxYwndH7BBDRKaUQmFP24DStPfyjFKENcEoweGhYsTUU3g1MY5x9FUUqHLaF",
  "key6": "2w3Pt1gwSLd9Mvqd8xF1bKEJKVFkRGiGYtnmqVsfw6DYVLU7QFvRShdBksPQYzc3NXf5MGZDVD9xmjPtrZw8H4yf",
  "key7": "6247X44tNyCQKDxdVYPkgKQBwDoSGVQgDcxEhgoeY5wKjTs6d9SNrxUQkzJqzxnrA1LYPqMQXYRdon1jh68S1fhK",
  "key8": "aBb4BNai4PRaAjMAWi2PaqD16WdDTSuhHtMpFbFWw2Kk4wbdMVEyRGQhsswkh5ekGg7NsxvyPVZgbes1AXt89m8",
  "key9": "5TeSwQ1sqMN4P2p2DNPFNhMgvmcVZFCHGdmWw7iHF7FVbRBZ5jjQKqdKFWR9EvEHeSh6Pi6oe3HYvp7PL6fFFa53",
  "key10": "3FQMxPJX7eiYppPMBFnzm5jT8yWMgmVY8jDGBpu7Yx8cqXQAzzEMhiTjUTtWWkg36Vcjc2XNuscuW3MqCbJKcMMw",
  "key11": "5X5UzwgwSxKXYi9qYStyk1WngANWFpwTgM7K6513RPKBwKxK2wW4kbq4d4RKYTscwtwyqMtD3CmrLsY9ZdxdWwa9",
  "key12": "5KYPbd73G485EB2cjxi3qmQedkzQcD3E22AytB2XBX88m8KFfqtJyu7tiC8cWHxgkTWfAsEz7DgXj8kfTdaCPbvW",
  "key13": "4cjm3eAaLkL2FKfEb9AdB2j8dpsAsgPXogKzg1VVA3ZAtN915eTFp5TnBH3mskdcArmKBVMSqvWe8wjFeyCKXGVd",
  "key14": "3x5KPjCmkrDWUjMCzs4suYkMhdYHq795hQPYRignFU6RjHEEnDwj2JcfjsW6uAtxCSze3vxPpH7hhfRY12nSgSQk",
  "key15": "2DFs6uLRvF2AfHJVMJy3oQmZn4iXvRpKUmFJXsbdw64wkJ43r8wxVULH65nZXbPh7BVzCBzj7UnuChR6gAyHGpgP",
  "key16": "4Puc8SfLSqh7wAu5w9y76zAaC4mjESHPM6RLQNHjyjroJfU3b8CZDwzyENERJD3rpWiYkJUjh6Fq2QDSe75EWreg",
  "key17": "zCt7QYntbJqYTM6tjS7PWs5wm9zBbE5sCyK4Fa7beahVgvKM3JrKqQEeNLuCG2yxRtmZf9wZ8Bgjk3hWSKPUp5g",
  "key18": "72UNUSfqgzA9SfBD5w6eLk22x9XwSS5Pu33ihMbXKAfssxxsoJn8PUSwH8omthKjF8o2oapUxZY7EQrHAVj49uj",
  "key19": "3SUh8HsbHps46cUdbfiYSh2uxmCS6UHXaDjKTKjvaLrusDN6nzrRVtUyo2nvVBknG21mRzNTQrF3wKN4NwgpRcU6",
  "key20": "3TrGtEV9paXPMbkPhxKm2tGg1twwMbdfijt6od7xk2uNQf6C7KnR9M2TRQw4YayKUNvvQ4qztDjmPtPTK8a7xrXp",
  "key21": "5GoRs2QpD2rWig6C6deSs93gjSyEEhbvDZdfvVkDFSJHC4p4gHhoH2ZhZXRgAkkekAjg4wj3so88S57LbrgLu7ih",
  "key22": "5McdARUhXpDnyZrFjiLYJ55AhMyjkbU4RYvVtAgEtiTyDPkw1naB6YLhD6eeMxZsiaGMKiBfowkRK4Ry9GC1N6hN",
  "key23": "4gkP1guCMrdSdW5JafXPcNwMbK2CdC9dYJgf4AreymZyJv9rJEAodZPYtp72KLCFDyx3yVBQxSB7nrABSQ76yx2P",
  "key24": "YHYQdAHiELwyVL3HQDNqxewi6QGkYU6E7TaUsLnFzRRvUmsZkh1DRwAwVXEECfGkqDsQ3KZvTXcwPLVz66YxYuA",
  "key25": "24D2VUsTGsX4YJbxxvsyJmLzNUFenuEiF8dH9AM4RE71yaKXpjXzuziru5wUihVBK38QJ3RbgmF7TfDaLX6fWsNy",
  "key26": "3ocB62Lg2DwwCLQZHqxF6f1tcVSMf9SiY5RP5dxC2HhRAho1fyrtDH4mHHfkDsWBKgbGzArxddnb8PkVa4CVCchh",
  "key27": "4EHJ839xPPdaX1xuCLzrf5kjm6pv8oYvDbmf35AraqDJqPUyVxjNgWfFcXcJjwb5Qb118js1maBmrTNLd62WLh9g",
  "key28": "RaPK3cYMUMn2koS9iMpuMix49x5g1QSSYBa8UTJHZpLga29iyzcMfM4FFN6CQYg6F4ooQx3zwo2EY3wVkEC9nTN",
  "key29": "QAo64TR4jxgxbMBwbzN2gGgXtH4h59dDnCuq2TEvRcKCnZ6cCrPZfJzykbKXRfbX7NvB6eNkJ5WKQpW1qbhsLPY",
  "key30": "5D2ApjUMP9Zr6A6SBrXbmN46A7H4SEPMert7jAHa36ShmXJtE768WnbyrSYLZXpcnG1TqUDc292gLYPagxoPsHgn",
  "key31": "5GikfhSCQLtu1a5N59asQoDUixz3WHcgARpmq1dE56fsBxPjYYHFJgKPRWRR6H1vr5dF2dYrmyhHEmu18fUsKuCm",
  "key32": "YGpTC7ig1LcpyGQDrAKEmYDAhRzdAEW3t6VNoaFFNtkv6iE1Q6XgBuhoXY3T1qJqyVFhhZHVbz8Zhvi6BJxGBjB",
  "key33": "fow1eaodPdU1rNPgPfbNuA2WvxH5yJP1RMy8oJn7Dk9gCF6XdYdzEuw5zUk1iKqtgABZkSoxYCx7eGZeSWG5Yhr",
  "key34": "4ByyAismR76PviM2mPYf38d2akD7GwUQdqFpAEgveSzFuw2Nu85WR4bVV8We7XE7mjwVb2oDfSmLVkGgakMnkAHM",
  "key35": "3bT7Xg6TMmCLGqbhtJZNiLnuU1UToGGoTjHrdpK29szb866A8JKCWDnYZYbEKMUtqLBhUmtEt4LSqTXe8f5XzRt",
  "key36": "5rSpGDzmmUibtmoYGmFTgXyb5tiZ82ez52Xt69GZRgSQgH6LSfDXRHL94BRicchrbheojxqsAYSNxuvCrywQATw8",
  "key37": "43FhKu13JW3Sx1jb2rwtuzaSC34EocgYVBetPE1V6y2MN2qo6HBRgwmLVSPnuWpNKnZUqQQp66SNWhBxyNtvfsxm",
  "key38": "3B9GDhTWo4UC4p6A4vXeFdVbTqjo6naGQLKRxdy6jVCMdxwaJPXDznEKFLMrqAEGXQwUacDCsWPf7dMDFMBMEvdZ",
  "key39": "3zby7LCdXUthtP5WmPNebdQKtKrRCWfSMq8tYjBs6TCQqUKmE8S11cYZJLNYpFWYTiUAty6S45wss8CDujggfBVH"
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
