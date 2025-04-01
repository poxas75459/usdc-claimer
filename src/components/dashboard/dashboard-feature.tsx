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
    "5XA4dx1y6cKPZaNFvRf3c5wCMr38ewa1qfbx8ijDQaDeEWMGR5oWw2AMn58PZqGw1FfeN1oMEmTYkZCbzPSqrs1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAnTvSDoLTNGGNXkUBVL7JBxN5wGj6FS7TjXnbFRYvgQnf4daaCgmYrK6yUKncJqaMK9Xt8U5yvFqds7iFw8YEY",
  "key1": "iJPTpTmhsDMkATgwA23Y4ooi1WfCrEwoY6LTvJgfNakYVic1HmPZdfaV5dYij9mo8gqKj4XrJ6yFiuaBicvq1a2",
  "key2": "Lrh4hsAdRvFSyjTce5AdBPAYkRh1YXVYi7KKb3mVqnz6UvXLoyew1HoLiQH27KVEvnx7ifB4yREQr2afq6AhC35",
  "key3": "5Eqqe2CtCEmHRcDUe1NCEUmbk3hXXvAv9ZSjMs4WbBFndrrH5oTtsxRpjHQ48XYGBFrrkrzDDMKPegBuDLWczddY",
  "key4": "21A4iYo2NkFz4u4eEG9Z91VYacLpKKBXnD5fkPdKVY5RLKek4bPyjPG4GY2dVFiHX7zQQcN3byoP1gBS5D1chp1u",
  "key5": "PDQqP5VkECKCkEk5Hxt3RVxLw8mmgXDe8e15xGKwwi6xR8naj3KYefHchfQ23qUVUKjR67eiMdaxRexgaG6YKWt",
  "key6": "3PPKrR7WNA7oSvYqumGzwKzFnDimwK9GQsvU2CCJV3pa396R5UGLHkZcw3sBb9WMxCkme59naMrtXkxUp1hap7wL",
  "key7": "27sHA5vJkxKttp7B9gTsn7Wawh1Do6DjZznT2BxCr7rhWsDY7Gnaq8pxUysCyt31xPpZk2g7vh57kXMFSkjSYSoD",
  "key8": "2ZuQW78i8midQSC4w5bUcRzWYsVQeWuzstSAVVmekoE12gdKpiRvuG3xDqDee4a4jgPwm3dkd5Q15zLKPaZasdqM",
  "key9": "5xD5BjuWKxx8PybdpGgqyU4D9JikEEnbMGub7xaYqtmCeNq132xDqLk5UtGAVBdmW3FA4umF6KCSwwUSmtc1orcn",
  "key10": "25FtQ3rPASZNnQGvwLGRDtDzsRUN1rdah2mw7cSS3RVxSmpSodB9rYrzgFJGFRgUovJjCyGTCMcc3vmvuYcVzbTP",
  "key11": "jicDAKeKG76quXVnnn9HDSpeDnoYWkChhnEpkGmRitYQgQxZ836RNVH3bh2fE5tS18vTEqNBg9k93eUSKdaUvSQ",
  "key12": "2ptGdcojZHNcB1bo2PqbLe3wUrddszzKsVcXf6726uJtgpHgUXZRF6ZEt9nauoPLauPevt5Y2TXq8ZoKzBuo2CY9",
  "key13": "4moPYbF78gSBdAEP1SiDFBWn2adRNuaowBiEnLJagEeCDkF7qh2eXVqxLYohXbcNNbQccPx3yTz4pcEWCdFyo4xx",
  "key14": "3knoopAAvyFeSt4JVVremhbF6CfNaMnoKcbm3pkiGcjUe3L2DBBGjFaLmNPvEdymcmkuVtKdrPWApBhiU9qwZa4t",
  "key15": "5V2iKx8fFhjxGUoM7zQqEsagGmomnFyiboHWfMQ1xiQb9M4xWwTxWaoqwrKgXBfErZGeNY4qiKiod3xxCj2Rje4X",
  "key16": "5HqJ1gsA6F83UPjPaUi1FSxekDJxQsuSCPT524uoFSMbXcCrxsZBoVEMPfaA2Rh9q1eyemLJT7wKx7RmPrPxjGUu",
  "key17": "3zs4TPscgUpqKrC6Vc1ZkUGGEE1dCWVvnxcb53hXUsXmFAoJHwso16QPvFFfba6huze4TcKzjnxkCyVinNddS9gE",
  "key18": "3xzvYV8dZKgTkoK4bZvQCZaEFDKNmM6qBqmkdSvJctV2CaL6kb56wJsGog9iqAs1vz7AjpjLXhXALTWD4uh5d8Hu",
  "key19": "fxkQHYiNsj4GSjDBsGfk9ow428wSjFaZsJZukAdcdxoxz7eJZSVp9gQLUc58AjBPxtzGGhri7X9ozTrWWULr3ZF",
  "key20": "56CNySnKcAJeN7m7JhBpNKejns6sPZ6wzpR55xAcMijZyMemTxyXoV6bnhfLbEkUtv7XQViEcSvKLGmR9MFwfhGC",
  "key21": "3KsxHNmcg86UHDGxA928q23W6H5FP6tAzEQF3pZB5mm5tzEDNgH7FhnpuUf3fWpJPq5675AhmGM1PyiA9awmNyJW",
  "key22": "4gjNTBA5T1W5PDatPKRN1QrcfSp1e3J6gRmdT93xnfEhqxywrvhz99t5Ye1dzB2DCzKczwWRiiwc4CYB7kAmbh4Y",
  "key23": "3Jb2n5XJLmCEnxmWDxL6ndQubrTbTym2DzJsPJTF47GuR6xdzgWPpaF8o2E7LmDkPcRN2FNtfsvsqJ75Q3e23zpL",
  "key24": "2FTW1Ff8xywf34BBoG8hLNijYhzUt7GrchF4bJdEYuEMAErbjsPs5tyPjw8bxVmLhaPtzsV5pTWWYn2nRBYU4mSq",
  "key25": "2t8D7yY8aUDRVGGq9kGUi3i34GSng59YBZz9hqqEbGxzDhjmKhWDHMGcE2112q2tgwjBNhPZGm7myGGd9aBstpJD",
  "key26": "4KwzrHce4kqehjHjGUscbujesDjK6au3zkdLD7PJDfy574D5Swei3A4vEcKvqea8sV7bsiu53GJ8RbtQtrduhu1R",
  "key27": "44UTS2MHFgouBSMv2D1rdHk735kfMz93jfBBdKjnWHdAEdWBRGrmu9L9NA9BiStfQzCWPzBUqbNqfNjAqvjwpT1R",
  "key28": "5dsk74SjvgmPi4PE7bgMoHyEdSbd6tFLHixzEiX7hFFQAdcMxR6KhYC5RRdvcg4u4SPZjT4PVMvYEWHSe2DJgFc3",
  "key29": "5BrCEsVgBKXs19CCCbggirKT2Lz4Vp2Q3EC2Po1gT3zrHU54cnsseSf6zDVxGJznkR5DoSk4LFuwzZMpFBgqWYRW"
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
