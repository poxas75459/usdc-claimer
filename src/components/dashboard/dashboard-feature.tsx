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
    "U8QYpZHobaDgsq9yn5BfZPdzP173uaL5qPbtrE7tyVVAFU7rcP1cvtAH6PYHMZLV7jTJ5sETnJSGCMGwE5SA2zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6U5sCXmKhkF1cZ64hqaphk3GB5Cmdavr91Fpbsq5rhb628SJ3L6GBDtVU7ua7CcHYbTXDh9f1oc31YKfa49Z3x",
  "key1": "38cvvwCXEUAfJMDAud8FGiLZAukKkhwJVDA2BkHo7nTaEt69Mti9bVwruNdrzYk4mjEnmEvXpH18TqsCjXtxiZDZ",
  "key2": "38rxgsa8koapdG7cwouU4ZQMr7V7QMLvqHcjuWV1yap1Ga4eeopBEQ6ng9ti6tt35CiNAwZKRTGmm6E4kYdV43bQ",
  "key3": "p2R5mWPRzCM7K6Ss32TSEUnvTs2KJEF1RcEqC1sJxm3WeuNjcREWjkMgfU7XVVsckokU11BhDsu8XRmz41vYMVL",
  "key4": "2txoYMHZpxNBzQLZ6BPZK8zqCw3jrx1pEeCPbpK25cusvLzNp76LA4AbR4HNPvsg9fixsod7Wjm5ipuSHHzYGgag",
  "key5": "3ziAPeeaAfmTc82JRpc4Fx135dnwqiWKAidVQpy4M4r3nxzC8Rs68HEFiSpJGXpSRCDmTW949ba3pmiyp26xREk",
  "key6": "3WQKWV4dTw4AjxGJuZiivh4Cd3uYEG1ZWUF8g94Q9BYu3KaJobkAKdck8pCGxbyvHhZi8oPwwzz8fuky7xaCmPte",
  "key7": "2Gmm1r3jHsoxpCsttPnpwGkGqqj8XwnvPUJtjWGednDJFvitSdvYh4HCVsaxQXbSrbux3PBiRjAEjz3rToaB2tQz",
  "key8": "47ZkNZjYYx5SaACgatz4dF6BTJD1kjwkY2tFMBDmtuGSchunTeAVHGUijKgFR3Zu4tT51cYtaFaWCcPSCkT3wgMg",
  "key9": "2ZVGE3BEDqsgJAHs4x2YmEVQDS7Qkmp9W4wQR6BxwShF4MMbthycdV73A6d4FqtJg59f3cFE8CAhd7QEatWGZFGL",
  "key10": "MptpxXE8kn92idJ1pPHVG6KXCaBfitPJ7NRmyus7FYatFyd6Up76jhAQTV8gMkEoUtQauz5xZc5NaxgUkCykVXt",
  "key11": "5zjgqs8v6ewwq72o7JjGFfgRbmfrYACw5c51SLB3EpWnF33CnpgV4XVFkuPKpEMHrCdGYMtU8Vci7QQ8GVyqyFb2",
  "key12": "4Dxg3P7heK5Xas68XHw8isg8ZbwLXuo2bM6zs1Gda8LhEPo1vCd1qLpAnRUHvmVkEkQVgd6CzR7c4ebGmAYoJ6jW",
  "key13": "24RSRBtwgQiSWzCSuoEqfDwForob9rct3qM4vdU1m1GJwB6ESy9g8tbCFubDuWhj3yS3cq8nsy4Z3PaUs6et6Lfk",
  "key14": "5Z4zBiLPZ8zHSHnnKu9C1HCfK6Q2Jdb3NeRYFWzptnNpezsCNy4NUC8EiXpurpgPC7zacbhuibTLmMiJ5MDJPYgd",
  "key15": "36qukuF5A59z1yK885ydzTqMLcKVvHbtcn3J1mjx4tbLJtaQ4tdsFQ2tgbkcAzZ4aLrYAAJs5W5WgXRY86KkCQbn",
  "key16": "2Dg12WZodN5M65krAGHsxQ6jvPKsF1LLLVUbgpKy9NMKjkYH5dhGVafj1JJBZrw4PGzVRmpbsKZpHZU8ojf9jrKf",
  "key17": "4W4GR9ikpLJYu1zUgNfP6u3vuGzgnyExWNMLidjCr3T1FnkNiN2sD72tKAAPXUZFh3KVkvAVwsHbdozAQzCir8iu",
  "key18": "9nTsc8T5jWksxMXXuqugJVN3iDUMAQNauA6kmcZ4sacMYtYWWxB8WBLFwScjhHodT4CpbJ5t9C3Enz8C45F9mX5",
  "key19": "3rUMKUY9HSxubLrvXNTk9FEYKT44CENvvudEUBk5uEntWtfCfGRZzUihUa9MP4tZys6ZZpHCjAorxH9LjQUYqjAx",
  "key20": "4BabrqpjxxCUqjRY93JjH2n63DdZxs148mZHq8PdzVBkt7ujKzCeErTgNoruYsr8Tv3e22zbtqADvaFd35CEo9Qw",
  "key21": "oPjtuv78B8MhAaZA7kpSEz6eif4W2wY2dF3j1krDQMknV3bFt1gturpMgETHCzLbqpb88DRzTbu2Hf41iGzQk4X",
  "key22": "5iMUE2wpSp5aS2ryHn1K5MPztNKu1xVeQ6Fd6x8ibiahHHfDhUjbkAQsAZjkcawzqRmkw4FAZUzeyqKYJCr6ujy7",
  "key23": "GiwsfvDA8SQGoGzcmD8gvCENbhTbaE6FJEZzCYoPQuYBA9ds5D6oaafbPKm89isZTSuiqcaQd4wqb1EnQqzv2Gm",
  "key24": "3ofRSRPATNwBQUVZN2DEZrU1DNXC9dLE9CLoHT2picTRy4HzV2DUg84i1hBLh5dh92KDLMaUA8Wzy8ZAsiK2RoHa",
  "key25": "42VL9BE5R8sLPqwErqh2Qmaz4DrNpbmpMrNf8esXSXPRmzoKumtHCEfuxjwMAMRPst9Ps7sa1uzy2Nf8vgMe7Wvi",
  "key26": "2P62HQyENARYtHxhMNysQK15ySiHcYLcsM5mLZPJVSuKL72QChCAxx6ELAgJ1aCGUvG5ZnisFdaqvZ3CKBLEBdX4"
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
