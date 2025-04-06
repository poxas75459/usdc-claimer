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
    "iWffueoSL2hxhcDpyJ2zFU7g26g8VnZU89jtJxoKnfbMQXrYmXLgjxkdPeGt5rG1rBsa1UgqQgUnrLhYJb5GsWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYWGr3xPXZuBZwnaU86A1HrCr4xgboFVtm6ypv5X6MqQwJLnBcZ5oKLZS6SqUwLqYfYy6muNap4QSApiWKdTP2S",
  "key1": "4b3bJFC6dVcARUPMWmy3UkWD6CmiUHeHT45XYToQLZuZtgBPeMee96Hzd698U2hWVY7myUGyxmVHA17UZBXA9zWo",
  "key2": "2JwW6EwxiBVVqgaQfenMianoE1f87N4Hne5wawJnAXBdZphRiwVHrDo9KoiNg6jDyWdkVF4sPxcSkmtzZgQwwMkv",
  "key3": "3tmQF3MSUVRyMqYzotmuHuNwg5NqTD8TM4hQqo55K8Mj5yxkVt2haGwxQgV3uwLf4JLRnFNe1PJQ81RFgEDu1LTw",
  "key4": "57JcYs8bATjKUDdYw3c34qcHFhzwYzD51KKHCSTgD4zH3mWNJdDhnonCryKmMm16uyynEAU8YxZD5fF1CH2P4r3Z",
  "key5": "2SyFkHcppdWvSuevCtGNiDJ6e3NHtK5h7WzNfL21eot6YNqV9n4kVT37Qb7tECQDA4HspY1xBGpoHjF8tfnSCqDx",
  "key6": "5YLyQJFHzpDbwSzLwrNwEPxSpqWMM4C38Uw6zeCnp8TUjuvWHgZHDwY4Hgc3qby4RApxsg6HtFPUDshk1xEhUDV9",
  "key7": "5tKMXKk28cT7n25NXA4rLGAzXELQD2Wo4ABYjBXiKsA5AKx8aaKUkhqRkFHps2Ci9Lxpoysu7UcqugwS9nfyDmj4",
  "key8": "67T965caA8Cah9S99LPZoBSLdtWv3SSrE3PNHkPjeG4Uk6hzEGKHXfGmJceqFqsZYNGtJkYixsbVvBsENQVhuRjT",
  "key9": "2RYqNLWDkoeu1iAjRWAHfDq1KyqBhFfYi7oPMgcd6tGptWSAZkJHuWTxqNzeJ89QF78yev23CJhfGhXsrreZLcJ3",
  "key10": "3Ltu1BqDZag9bpQ23NDLTwBFat9r8uHziVMWQiVywLCoWmirG33tBpB8sJFyNxSM4KEkzHih3oC759VJqsa5pcm2",
  "key11": "GJwUgCHCQ371Z1jezKFkRLnKcw5UCu4Lvj2qscuBW3oD5xRn764NPaYeFtLavUxua7MzCNwZ9pmNPgYNPwMR2k7",
  "key12": "2tWKyK53329bkFey7ACcnCEX18LQrhGk8LPN44RDqJU8XATCMRMWuANxQMWncFF8UjpeMgvsRuEbQpp43hbKpJwD",
  "key13": "2YTv1g78DjNfnf3iuvVHwARsWUyBGGLtWjjRYCKovcXYdtkG2F7zxcKLDg2YBxkUQyu5xSh97b7AbYqSvngwCoBs",
  "key14": "3nh9DMTnGRBRKU7HbQyeAVoTUf35TTFfwxCBVicmqYqkiZ5M2En9yWvMwLfsrtCGhPphWvrbUGw91yxxGnbFkfgv",
  "key15": "5PKb4dXSFLdUpRhk5LM6Zqb9QoTwm6RqUsXWnrvoMnkTkGj4yXPsT7bM7NN9JfjcHXB24tbXBkVrYrqR1mG9XYr9",
  "key16": "4xNG8tbBQN8ftGrp3123ocFS2oH8k89pSvNkc5za81DSJrU8JinPboH3HcGho5dJgKH3RAEBwPXaNG4b9TCTpRSW",
  "key17": "A4HUyUE7F8zjR9qnJXHCPQPbeKr58xjU9C3mz5hRMzbGdG6RuTR8g17iDpxNmWCBmWexBrVsQMBWJHGhoiXWLUx",
  "key18": "53yURuQc2svNW7nZe4UvY4iixeTkSiEPwE4EuSs1wwKAF5jLsSM2Wh5MbcijTpGdUEsPem83E8xL7DAcPHnY7Grc",
  "key19": "5CUzo66nYDVCQFmZ4UWB6q2CL6QDxCgFA7VWBwqcuG21RefnRDqRsTPdTvdQQD6JxARULSN2mp9ZfdGDTAYz8p5D",
  "key20": "2F79TA6XGrABusbLzXAzYhLLSic4Vmy72qnMZ42XNa3JhAG4uW8oSNaquXThSHaJ3RTX3oPfLXG3HgaiCo4WtDm9",
  "key21": "3Dv2LmdpKieyRAqyRSSvQkiGsCjNHChKLcGS99CuEf4DxzfF1MynCL3rwSHuEfUJaXioqbJdamQgvNKfPH1nDRBX",
  "key22": "5CiVo14tp7Hf3bcDAmC2mfZaBcK2Mz1fbNJMevf9gCUSUxaE95BqtRJDXVi2Z11wPAmshH4inRzXQvDZ45X2fuwM",
  "key23": "gDQzi3ytrniNWFZGHhMgM58yXnW4QsRdPBbUGLMKZ2yNvPwLAg5Uf3eZz9wtmQ28WA9kegTSzWyubrx4rNPNUxP",
  "key24": "4rar6rdHTd7UDwRmAn1ihwK2uSMjHryGWHoQtYvRgnPdmeYJvrQ2YxTM5h9FupLUYiJ1qk5fTFoJ6aqGmRhGYCoX",
  "key25": "22XY2H6dhYB3qHVSGoLQBLwo7x14FvfhPoUdBeaEBFTfkKq8Veu8pAHx99AFjbKvtcAxiC8uzkpBszBFvLw6PVpi",
  "key26": "1JhA9GruGBjVMbfHBa2HiTiMJaf7EvDrhkr3tAUm6An4xhH2nqpBs2JVjs9jjMBZ8KAtMPeDwcPm51Ge4xoeQqR",
  "key27": "2MeEqMxUXwndq5WRLAz4Z7aLdSMcyWttazJuUnvny9NvWbZNisB588Q9kxyQsYyGY4XfVEu1cmRBQLqFZVku43Tg",
  "key28": "3ZRh95DU1irGwcUMeLTPMJ36qbJKaGbcxxsXB2Xz9TTypQL1vsvrrQ6W3wuKogy2VCXP7FD6RcRQmVaCLNUmZsoK",
  "key29": "L26E6FKLmm3bZarcMhDcTi9Bzhr72B1ghpCEBrVix2vDUSGtpCAkSjS1PBukWxYBevtPd91PNDW1rJfYwtSpPtp",
  "key30": "2oPDuZK8t6GSi7mztFw8N4SshigpC2BfWcxUSbyAQWXSSgxA9EjZmRQNKB7F53c4ghCKCBvNTy1K5apFg6PNYvYw",
  "key31": "2DMoGfez1fYpNqBLopDyBMBe5r2Y8VotxJ1EUhKCQF2i2E1kpxQfMgyZyMrp7Nmng5ysBzvjMJFS5WyLw51pWHLp",
  "key32": "2geSUEnqVpPN2LrzZAXtfxtSTXDPqSbPg9J4LHyhq4SqUcQ7LeyTmd24TmCsiG6etRkYedN3WTtmzYxSWcfVQvAL",
  "key33": "4KbEJ14zBoLXqbLWBEAh33336f5Bx2rxNQiKQqChhx69JHgV359N8DKZg1L4y8qWSpd3VtCZXcxiKG3dboiVPKrT",
  "key34": "5R62fqLzUKSTBiaAi3Q77arSx1s1muiFgqQPYKUK3Z8Mvc4vFqi8DHfrXcnUm9x5CKQ3P3f51g9uo9pvEvygU5B2",
  "key35": "jv9guztbqFNs2cnHJnKHAXzG826cpK7NDHs1bivhxUvambUpL2LsQrDkQELUEufoGoE1oDv9wh8aYYCSbFHAnfx",
  "key36": "26td2HUH5eFoi37XQm8CpswdRpXgmGRvPZj4cH7HeNJAcFY7A6UkQyhNPuoMd7BJ5HNxq7SbSWB5iN7HrUE8yyYm",
  "key37": "33D7V1daKQrhixtkv7b25UmkaTufHguGBYLyNZszPUm8vUzgWU4VcP83R9FUDLynczYEpjdgzFRqyX3GaamCvXU9",
  "key38": "Vv1DfxnLjT9jsSZJbFibYJasrJSggawruUCCcRjLCvYetVWaiWeesi3vfojyP2sQWq1f5iXDVU9ZQpk6uN3CMLh",
  "key39": "52G9Unt448zHrxQWUHn5WVPE1YtVtxdxt4a2rr3XgLRkkM2EXSAzsjHfZZqka9vfdPAC5eY1bBqkGhXvBv4gwe7h",
  "key40": "4tzydU6E8bKVnBkdKCHiHvzYGmMGTvGxFcZdiHWx4tAeFXevNZZDHBzJkhrVLDWLhuFScHjqfpjiwE9FbVxUuEHY",
  "key41": "BbD2NpzrtqTGpnqdTxDiPQAVRNZnEaotkTGGkao6ckKqkdfekZWhb5saNx21kKR4z7i8AukTCEKeELauZ5WT83E",
  "key42": "2yBnKJr9VkhcSRE7r11XqBGkctRm9natyFEWYvkK4hxt4o5pEWPQ51azB8T1XwjWt14K5RoSEcD8jq53rdwkWgW9",
  "key43": "3CyiP2EBCMU89PdX4q8Z1i414npmbsge6vESDU2gcLRGLJa2zbJpvbj8Uoh21BGXFsmdtyfYGuJzXfmWRpfask2E",
  "key44": "5njc5ZcXMNqyPeskkN9PyG3x4HSgNVJvSprQ5S5GqLRRxxMAMTy6mAyNQYhXuSBm7mxKzBphBRWkvXrjbFdaXQvZ",
  "key45": "5sJwwAtKbWkbMtu1C6c2U5qkmSSZ6C3pau1MHvLMeKhxAF51tnvzV6ethcmUcdf4KqFdMtmd9s4rDJcvn1VnujrA",
  "key46": "aj6mX1CAnmcjVibUBbpMLYJKXQynqqnjWbppCUkhcM5ehYFY2DVnaiUDuWshaaq9shktbtWpHY1cyeJ3TbYcEMk"
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
