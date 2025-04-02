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
    "3HCp7T4WoxXcND56CK2ZhkzYxXsyP9kgzDJBYTiaUGpwbnbyrh89QjhcDmnMFWEUiXG9zaVnQveHKH4LoXepULrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVs2dTWM68zhaXyZzCDgXPSNWHGh7j6Ym8ZYC1LQwFJ8XScRnzqzMpyPTbWeg1mb3PBkeGegV5uFkCAykwWQz2",
  "key1": "2MExgzTrVbEQDefitN4ynRZbTS2Ri1kNacuknDXuSMEAbE2vLvWja4ujNG52ydbM1PK2R6SRteX7DtuKvsHhzbjY",
  "key2": "37Qu1aDs8Vifdvf4wPienjqeV3Vy2TDejrpVmvr9YBokMcb5LpsHnrwztdv5NRrcZijkjdmLnnt9usQNjRLreJy",
  "key3": "2KpcUc43QkdJsm1mhBJgYuwqtUWWSL7A2ebMfPrEhP9W6R36vgD6iWkxVEvdn1NBwn7opVWMRFBjQ51TECbGwVUH",
  "key4": "4QZoWngeyoyZi1SPiD846QAupH2RnV55B4t14MYManT23nFefARqvNU2zkyY2KD6Dv6NtvQq23xGFJEMYcTTRbC7",
  "key5": "4FkBt5DY58TaMrcjGvgd4GPp4oMmS6v3Hx8WUAMFhbAjVwrVPxjEkbbg1THhVebK5ixmr9zDFf2FA3bu8jx3VrKq",
  "key6": "3SmrnLJz4QdWBsNfzSbn7iWcoyuqHLf61hPxC4mdX9fiM8hXXTUKXjdHWAFjMbz2gSrmVvHgMfG3GKvhxx7e4DkR",
  "key7": "25VRsE5RyzCJLdeeAtNq5KoJJdaGBn2h1J84bC8wpJiDFDCnhtYToT3z7iC3WLQmsuqAU5Gn6rqxsPwJMV1pX9Zx",
  "key8": "5nTh7ttJ1Atk6R5ppJSv8qkNLQR5xNGCRxo95oRuc2tFyHM6GAbDpdTMsnvGJ7QzJLQyP5XiisYYo4AeE7sTSGuE",
  "key9": "3YvZqvAtz38yrNBDKqD2LY8EPsrFJrFXEC3jrY1AH5mgUroxkWcjq8aesmL9T5ZUL159jQRPzXLUisHvdbkruLfL",
  "key10": "66BnKbr4fZ4mCcps2zDPwD4W7sQovDsh2Xz3WFyzgaSmhzFx1xGn4hSovgzidErUEmYpkBSc3VwoxMNKpvCajaFh",
  "key11": "3A3Qd2D3fUhp3dNzjYv6ik31hNcBQ2brJj7AAn5tLVGtH1nRVZstoKSkLwj3AqkJqfg9fiuqFm4NmYu9Eu45Bf98",
  "key12": "2FVpzgnB3DV5mDZc7XoQ6wFxDVzHkYbWKiKRKf3v1DL74rRrVA1oLQFGSQ7UE9oi4K498SD7uvebp3ZxSYSwqxZi",
  "key13": "LnACDaYes2TcpfKcrALUUm6dQ9ANj3HY7R8EKJCB8Nvh1TjoTGfN4v6PTSAeQkiYWYrtf22CMAzkcmY2okAvnpD",
  "key14": "th4JbbjaRo5p3EVrDXo47mSCsvQDzQHpbcq7gb54LTG7iLB36bJVU18Bp9mFPe61Zcms7bQbCTR13bREGgUqsoD",
  "key15": "3rNPMpnUYEgDk2CqjYBjpSYgrF5cKadz91SNijggewXG8xWf17m4aECpUdbXtXsZnkCyVkP7rQJ7AZaqYKx96MS2",
  "key16": "kYhLC8V1LLUAPiki1wHX6xK4VgdVAzY9WPpfM4W1cGfwLYzTeAsGJyaEEdZe9KEJmvThFWWH1nw8uSv2M25Zyvy",
  "key17": "2Fkn351WeQow8aQ4kG9um8UsSXUi8E2TJxGxjsLgaqwFUfFtD1fdxjSBTH2VQDbH9YwBnsYPLaxvqrom7oHUs6JF",
  "key18": "eyM8aAZSnpNpUMzLnxLM8uHaykcMP7okZFdiJ1jy2AEhE4qa5skpazVfMvNPYigRVgWmmRMs87pDRMbyC5kyNpf",
  "key19": "v7ETQS6pieaRFfNakF7t8mu3pDQupRydtR3Jvzd2DduFPzuBqWkXu5MD915e59cXuc5vavsYbpcUwx4Ve9Eaghd",
  "key20": "2C27tR16xyo5XSSCoBsw87ExwdtepStfpspUvS5inM6DzDD8mwxiK8esgnRBRt4wAzf4BhFv36BWoeiQsjScUHr9",
  "key21": "4XR6RUJH8XQTyfvSuoR1iLHdCWs7cn7dU29xduWvYsfrzJhERFL73LbTEqCCHie6QYwKTkVWoFDFb7TsseFKuqnV",
  "key22": "4HSmGWdpUzp4aTJZ8PYxa3Du6YiDeUwFNkxuxeyN3DBMFFchbSrR4msedBo4nzePBJjo5MiRNw17L7bQv7quYtGS",
  "key23": "KWpJWzPM5SDuZHJSdognEmMNv3tBYnFnLAHY7KewcA3TvX3H9zTkg5EXZgRH2T6FhyRM5uPosmLVD4M8QBTRnwK",
  "key24": "8UxdZxMvX6jRrmtwepYcV9qu2r2PiERAyrwysByY8cDDP3Y6YVGmk4hYeFhngZTd4MubzMZmicRKfG3Uzr9YjWR",
  "key25": "5RUJC62m8pzJxT7mzopbfJhti68JnN6X23WPyKHf5oBCY6Z7SJiVyEQjsqqsjerhgEK4wea4tKTwV3oHmnFUutcT",
  "key26": "2Zi8BZLqCBLopBGRKJxFhCxQmDSmt9Mx76CkpUcEe7wDntYfEHU6WZme1K13vA6hHWBUc9VRdHQnDzGpvHChZNU5",
  "key27": "4FWPMHrWP6bH4UBZzPbCziUHTngmZuQPWf2ecUGjdssDvm94framfwfLJYN91sWjskQGuDYkRGT1dMAUqQ3JnB73",
  "key28": "b2QKc1dmUyGjGetrrQKkaRRq27bFEjsyR8BpxBs1kqZeMP93uRph8LyRBvL9zG6NWmmLazwuzx52c3gejk2QATq",
  "key29": "3YocFVDKES4xK2Btfm3qPLqazKEMkDyVNgMhNetzisrLkE1yqjB24RmqoELJyrRy5Qo5VMMpFfYCugboV9EH5uGA",
  "key30": "4gz1eC4HmMCMwPBAgvg2E6Ex2zxrvcH9LvepkVTSKDt8tibFegFf3vUSiG9Lfb5Gxzs7jFEiK1hjCMfg3gb3fj1r",
  "key31": "3XVCnzqs6XT86NoREVDa4VBg9XkdzCq6M26LuEQbyRSLTEEoPKh2QwLFzvoq76mGMRd9nAmWe5HBs91cQSoaTbUw",
  "key32": "LQgEfyhpRX1zfGREnDHaacsC1dPg2QmsNcWL2bYLqoK6JcDkVy68P89H2BYsizwp9uP9ZFfea15zkTZ5k5jt1fF",
  "key33": "2sUztMSxB4fYtUc3T4QBFkspKm6tCFMdvczmEaj7CCBCi9gf58x4QsWF1xF6KoUUbov5NGgffJqFbbgv4XryzqYh",
  "key34": "5FE8xXDS7anVmTCC54o7TrDANHuku5K2Qkvq59vuEvhue3rs5j1ynJpMaZLaDs1Y151Jw9rKymUwsxdEJWWJQrgB",
  "key35": "2MKZWZdjJqRqDsZ3Mago4QvrWoJia2vXgQmTAVe2kbN7m1qnUR9VpMf51s9awjBFS6uZrWnjYvP1Tsrrb1zXFSDx",
  "key36": "25nJqFWCoMe4e1HqPdtnsdxs48R6fskLHxsxerRKQAgbwpG5XKwxnQX3Xrn7jmDuZBvhffqUfmnsj9RrH3mrAni6",
  "key37": "3d5bwFEWXFK34amxVtBu4nubwM4iT9SJeyZqxsBrscB2b1pzJ8mm6ZRGoPpNG6cEHET8LKNFWcQcm3GDRxnActUM",
  "key38": "wwMfVJYFwJ7t6nrAJt68kRwNwEoTnTLxKUxNX5Qvo6jARm7RfCktAkJZYEKepzfymfp85YWAasMgjBY4giwwhNJ",
  "key39": "Gh31xyNJEQPpQMd2WzHrwtQpdcXSHSj5j4ukG6p9MStbftktoW5Ye3VDvHNz9of7uNZCxMFcfTPHvUWZruWkPsy",
  "key40": "3MFusf5TKjwzY79q3rq74yorp6QQcQ54jaBm4v4jtDtFWPBHXryaEhPzACA9a1G1NgqyhRjert3dcjKMNv5AtDiW",
  "key41": "Fv4yBba6gHYYd29gGMG9jpyerQprSfACEqVxyn4HHCiEFu9yMQ2nABLc1C18hQQaD3Yc4f5WmhYyRVjU6xoaPQN",
  "key42": "3BEivfjgoGcpjVxVRhPnYu3oJrc98uvgvyT1N3RnqWDcfcfKdWWmM4NsDgfUPuKTtLf2Z26PYtn5q7e6TFmU16tv",
  "key43": "62FDCPr9WZqrZqec3GWns1GNaDHg3wKqp7sYnFMsq9Zvev7GvS26iFAzhYpBjdu55hG7rjFRBzvaxbvGpu7mQvtW",
  "key44": "nFSAF2BuEtFcNoGA16fXZh8QWtt6qwk6k1TRdrozK3g7qbkfK2PqdYMzghuoyKwTStKdS75E6XfVgkZRTYVj5S6"
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
