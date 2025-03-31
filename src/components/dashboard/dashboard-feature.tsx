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
    "3hdpBN2JVwyYSCKtiJS4sppuHJww9CVrVG6vCuMbMEtocFHswi71uUok6TCgR79isdUsHRBVUM2twSsy9Xc5uBiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yUoeLpMtyV6ydyFo32oHtByaJiLo2D5YXdEEY1a2B5gGC6yrRQRDFQeXPffDiuQEk3Z8ieCk6MMyXYGCkfH9Z6",
  "key1": "332eyUSRUukrd5F9X1NBf4r1wYPXQvwdU69H48kfyJyKAi46KTtqPsf3BhEYycTibKLBWHUPdKi1YyEJvc7pFatp",
  "key2": "2JzHfD3UBkmEoN1DbeqW5Jj12PxFy2piRsyTX2aNYz5kDLQXzMTXoDjoNTiyV3zNMoxiNpFW32TTLKYFh2FcvpNr",
  "key3": "5rnEQArDqo9stYtEGo1DDq6FLiJzmZWg3CUpUPhRPEGy6b2pG2jYk8pjbd22FSQaCJi2ra6SZ1VxNyHjCXFw49gv",
  "key4": "5TpUm2o6ycHtBeq6Jhh7UbgeUt7qSw7QDpG41Qz9HwrTBBnGdp3QFwbf17NFGBgEscdhi9oPA2xY9B9foNoJCRG9",
  "key5": "5xyQaY8VVtZA3Sq8HikmXiFZgJoxn3JDU2dPQnsx9KQTAdapTkfqrf2saoMJQs6CpfyecxJjMde81QeXrR7vTTyf",
  "key6": "3UzNyTq52cxmpm6SZaeFfAs6iHmQV1Rte3dSm8nc2faVurHH9iAu6S5SncsAWYPwMVCToCgrckHWah1sNHxX1yef",
  "key7": "jzPnrFCusej9QjS1YptzjktENDFBLqPifSUiAANn3Esz8p5kcwsWDZb1xPvNBxiCtWmei1GLaYyeVBAmt3hRcTY",
  "key8": "3zAK1cGKB6dRbCXfV3n5vJGLsitF7MJZLuNBjEtMhEAFTUPHbPQffeYG1J39GNPK3eQT5bz8XVj4gw7BjfpYcz2C",
  "key9": "2sfoSyjfBdXRn2SEGssY3fQXVzdWTyAF1jSFXKLX88mCmVo92xfqZzehwQGbGedrSzVjYZVqPAVwezahaa6spvyM",
  "key10": "3VJu6heTApdtvUt5gc7qimJw4nKtEC5Z8cvnRc3a3xJTshV5pkwKnknFDqti21S8wdFG3WkB4YFqVqdyiLRo6BTN",
  "key11": "5SBHk4GcRGBXDSgn2PjhgFb7DckNDbDnTx531wcJXeaBSSAT5sjBHoszUFND3gBTGLBRxvfBsWEuJHDhHvpyT8pH",
  "key12": "4FkHjvVQJdQqKpa5AkXAFVjtkafP8JccmrYfNtodpLo6rPQM3RiAU9xsQbB3kB8iVbmzTN9MRAB1bE7f1Wuy4NVA",
  "key13": "391cSqC8NgrnGYbDjNVuGFCugrN7jYZM8WK9rLzBpyX2C1UVdSNDhJcVfAssGK8fbx496Mnu7Jmv2aRDocHdZA6x",
  "key14": "4Ma9U6wWZfFcrtDgP3UDD2tF8be38MD9kXwP8QMoFF4N5WF4Upc2zAdfvr8q4V2amQz5Mahjk6s7QZfxcgFhPj95",
  "key15": "2HQaLrDmMXzd41JFyAanyCgPNVPGbW7kJtonQtkY4w6C6ETjNwStrVbmv3wJkEieM3FcgHdN8TsvN8s1XuW5XmX2",
  "key16": "sE7FtRwwyToVygxQe8jUWmqnDeo29gih8kDv9zzzamPsAYGF6AZHyZyExtThWSYwX7qstKqnnSCjrF4zDhjN2Y1",
  "key17": "32GnKnNn7cXVb9R2bBt2nSFRdHe81xGxpg1W7h6uE5PjLMfPJF8ChqgBsVHJZx3XNWZ9wGnQm7Li3NdhztAMpwtB",
  "key18": "326CEwhrcAPsSEQnfDFv4R4q5jWuU7ngUPPDB4tvMSwhiLty9HwLMz53br9mgypGnjDjsHpvySsaQZdLMtS6w1p1",
  "key19": "2naqJhn4TdvSLKqXJS5fnv5TN8CcwMP75EZLgbTgChAvTrND3B9p8AmV4ziXjurdriJcpk9F7TJkUKUAXED5vje9",
  "key20": "4kk5r1BsAUeq18P2EgG9pmU9vvx3mbKWWxuExJjYC6N8fjJMnBJn8JdSGQws35p1sMkHT1yyfkbhc7Meg7jdRzsZ",
  "key21": "5hMNWZGVrUL3cz6pEkKgyMtL2jH2bvSXZWXFBHpFsFtH3YybE6yGbDUYVdhR5igmJBtdczXrboAm4Apo5ASQ1DSj",
  "key22": "cz9dSLKNvR9C2oX9nYy3fr79pc1sB5ZxtiJGckgLmFRZmqBgiKStsRuukc4ApBGAeNct5o5TxetoeFyq2QXLUeA",
  "key23": "2PSAicDH8M7Bx1tNhb6YbjM6tr7yLdxVparvbDpEnBxd8eFwioAqsCFeYBwPTfm1FZPinsKMwSWZLJVnDkauXas9",
  "key24": "2car7u4vMKezrEVW7XJswCjwRGhCqL5W1i65yejzYmtQrbE5LB395BndV6dY4QiKhgq9cbbHZrg4RiAteeBFVxJk"
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
