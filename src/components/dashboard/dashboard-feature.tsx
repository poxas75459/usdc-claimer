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
    "2Sn2GUGqyDtmMsLBEB59hUD6GbBepj1vBcN5BR2p8Yiq2UepuR9N8qwD1yVM4LyeH12P3gFEH18Xia7Wy5khwgp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQTFupR72Upf8NhckMSuwGMjvyjxAFUVkCCjjfFFghmGKN3sKCGVt2wDJmKV7xVekLbHBqJ6vscd75dZmj4qk2X",
  "key1": "v1qnf2hJuiMeZU5TgnFEFd5vx265dvTHxgzvHXWpgq7T5cLQwcFAYyyHNZGicjZrZM5pXLUoM4DkuP4aNWsUHyM",
  "key2": "4BPU7L52Hh8wc8GQyKvEVAVwzVfGeEqgEiTCfGHixqH5aRhwRe6YyfrSZJLokuzUkAJAuEPonbqQEDxKV1Sxk4za",
  "key3": "2BBbAfWkPcV5SXFNP7AgCAw6nfQtL92LTdYEgoBcqpk5XxLqhmvzkjX98uJ92qXiXo14VEQgiXNfV5KomPbRoFUm",
  "key4": "2fvbspATBuWJFsE3yGd9qzgiKayzy5HAiRobLZavJEUniWZSkmBMCkns8pbDcXwWB6gRehBZk7FQBsU1VwTwE5oJ",
  "key5": "5V1k3A3nWoxfSDqTuuaYXRhkgaESvUETTxUtPY49RNJbYUc1zwTAuYKqj6j6ymbxc9AU5p38tuwZUL5UpmPcjCLb",
  "key6": "2HNnL13Fx3AGHnfbjN6eJ6canUwi2VS4LbobUVLp92yh2juRAsVonZjkwzJb2aj69nMP2oMA4BE7j2Y53tUnGcSa",
  "key7": "5FJBZ1vLtcFXft4mcn4G5WAzmt6uhwzZV2WDAsgTf5ZXnsfz7T1aDFjxSztCyqjBhfE7ayGtKrCBdWK9Q886fYf2",
  "key8": "2PGSmkxg1vx7ozGBbwf33N4gZAj8fmDUhgxCkFh7wvwMRP9NJRhgr8RCDCpLhLu1tBQRe9uWobQ5AvGgXXFZv3xb",
  "key9": "pwLJ6gL88SXZ44G2rmAEj6ZJYH7bny72mnWX9a9EDxfcraT5iTyoZoM55PtjAZN6jNSBUJWyLKkTw4GthFYsXgr",
  "key10": "2Hv5gpa9qNeMbkAaaUzzJgyftosVB5HExfLpyZc3ixMWNFx97nr4SgKwZKeCQpZeMWqHgwojYhmdS3YdFjpvLoSk",
  "key11": "4oKtFfAAA7R82cbXpeBjZvPEZiZzGfPVe1cWPEZJqfszBPD5i7bA2sfXRwLBgXTHPdH41NkQ3Ys2mjRtfxJm1cnB",
  "key12": "5vR3UggyzVMU1wTeEmGLjokL7Yvua27twU5xKGErrKDT7xJbAEXQMfV64XTiE9UExRDcEwLVWGsu2fabBTM9cToM",
  "key13": "TyTUVWejEFjHDMx9CpB6BHCRapJFZo6yyHpBfYvniTXUXw2SfvKd6hvZesRWypQFC9EFyi2qVG5ARx21tJttZXn",
  "key14": "uyCsHcqEKhT3SA3ofBu25hGupyQujhkzPXLvt86LZGfN3pFedfsASS22UhD9LxgcH6BjHEP1NK7A9DPoJdjnyJX",
  "key15": "4ApTBc3eArtdYR7GbsDdNj5u9hpXBuD9TWVuQ5Vf82rAkZju85vBzN86sm5A8GpxuSQ1uQKviR1kG2QLzgzYifrL",
  "key16": "5yd3svSZNNGuzM8MF8u8Hng6FuhnZ5K6aPHaGRnfLigHiPcvGG6fkwxTCJLMjw8MpThSunihcbR7G25w2idFLUob",
  "key17": "tvn5F34VoL8tMSHY3iPA8K89PrNgFt7QWMirw8LYMfpRoW6kHBYnygWfsXo4kpPFNbmunutxVZ3xSSYk5ZZgYmT",
  "key18": "4TbiCYNcayJY4tYdrzRdh5qfY4uhsNzYaJGHxEckP2sVanx4iT3EToEL2WVaVLnjk22nYYX6i5E7R6wYnNWwSPLg",
  "key19": "3gtyzForYMy7BeBxfPe4KRheX6Y7jyUnYS5xHYguBv8uAUTz98hFy5fcfaegazsdpbhhvxe819q6NX5tfASDTMys",
  "key20": "5jQ1CYRYZ7b8sNKzRrTNmCp8Ltsh5mUGvKArjyg7FEK61xfrXvWnc6ESXkDDNpbsiizzYzJ6uHFBJdk3qhPjzL9t",
  "key21": "2DhXoTRofPSUTdb91ADriLzUmTm7YXrJbh7p4NonjUhWkCSYMxaWWLcfKR71pXkEiorEZJshvxrzw22eZrZpiphM",
  "key22": "5TKcLZp7VPNXWBtYgfnVvhMKisPeDbPgjLAasmRvyLvhR6yUHbsA2GviuKgeHXF23TeBhdqwVUjHDKnFXjCqn7yf",
  "key23": "2zmrr2xSQFTx7cc4NfWeCSGr4pZ1zhN2PsDcVU9yawgKaYb7Aut6jFB8r7M59aoiW27L1UfgfYyNRhNik5pSfjxz",
  "key24": "54tGzMNGXP8bwfJTsPSMBrQZ6TfE6ZySbC9DXjxTtVWffNbN4i76fbY4jiF9fDs6LcbrFiwrGypaAMfHtCFq6K2N",
  "key25": "zcdfXqEZXH1nXPFJHvewSPEos82boUm4SP8MXxrvWECd1tkn2FBDCNUmWTyKiwHFUP2XUGpvnTtYKxFyfUNragT"
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
