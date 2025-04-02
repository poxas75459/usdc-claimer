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
    "fHwPhFHVfqXgRTjyEaSDWm7GzRY3TdGd3VoovsbKFbeC4YwbNL8TKpQ2JyskUifiGg4hiiuExTBNR5cS9FduyZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6kmP4Lud4BoRe1gBMVTANi3LdnQ59s937mmVTzc3p1qPveaWDCPBPzE4sJnPjeFkw5FYVs1g2sTMwfP4nZ1usd",
  "key1": "5cRMk77cAzrVQ1aWGPYfWMaRMRH8htgybSjBFnzxhSpTs1JSXBVnEhSvMU1WcU6Akt4bj4nEDBznfEXWtXajXDed",
  "key2": "3JYLidetDQfXngEcvpZBkBZZ7mtFin65b8tmEFwr2xvtg9QoEMSqQja4ciPcHzpoW8VjCK47pqvAWRm8CJJhzSW9",
  "key3": "5KdhkZ47fRHZm1PrpFvg3snzbkzsQNCDbna8VUxmdh8Rn4UKo3rwXmKxCuFYPrGUnoMxppS2ZxYWFnBsNWx9uCWz",
  "key4": "5fxwfdykWQygWXwkRWQJfDfxvww43n3CGDaktwTM7oswFnqXPFPdQnpa9FC9XwXPDCSbN6sSqcUPX75jSjMwpWVY",
  "key5": "2UYhnAe18Sk9VcVfksRuhgqUG16vEQR8dJRopfSJVxhb1AKdV59ELXi9uXcmfrWs5MhwRc2DBwJ6Hv1rv3zQx2EL",
  "key6": "3HFRymmUuHpNuYAsGyNY3bJP7DzsSXp89fdJEAZVCxEFN7sSr5H6GpBRrvSVNxDPhZaseto2Bd5fzBYiATTXt7jz",
  "key7": "53qKAktAauDAiC8ZmvispgieMS9Rg5vzBUCywd3Tt62AZFqEjPvLUZM4Ak2FE1o14bnFBLb34EtneqwamqbW93RF",
  "key8": "64rnquf6aWvd3drkQwT3k4yFrZXbi2R1brsARJRz94uaSENBhrvjMwef86hL59m4BxMZeak9fHdqLaJxcjbuAAP1",
  "key9": "55xZS6xB32F8jaW5hgZUYjZyAPZHcyUkf7uyLdzFxoFCx5uGWxE4yLuZFmzHcy3uQ9rfxrc4oeprD6pjX4ufFrEs",
  "key10": "YMTEfgi3Rh1LMWVBQxtXzxn5MWrHXE4QphbAiRUz215tJWGY3FFW8ssGWrX8oC5A2ZpGEyJWH2p5JdUX3ccyoM3",
  "key11": "3xAQdoxdPcZxiJcLTcEi3Ua71tDj1oxvmtR1W8nL6rmGeou14qEgwCLq5MkKZojP4ssUrBg8a72RjfgRJpY3puUu",
  "key12": "2svB23DLtHZu6hjnRvV8GzJLNcEdqKS1DQ8a8Gtie1UCL2E7CshjtmoafprwtDdbk44SAAN93F6Tz8VbkMQrMEaC",
  "key13": "Rrdb77g2EPAm9gGnVWZ4ZPg3HxziR1c4Pdp3SoobuctYuFA2MmsjEses5kAvKvFsz13UK2GzAbkdUMAowCpgqqn",
  "key14": "3cMdgzpxQqRj6CrLrDggtfCnobiE5zjkPhycywHG4NC8ENFhFWZL4yjjoaz2YK9DijVFwRMnnUy4CLXqjB5kRJuv",
  "key15": "3J4bz5nwaAeNMiDkxSNUqYnyVcJWLFk7GjuQpqUc9KArAhb6Kf7QobjRmUMLfRxjSoQY4QN4DyMcWV9JgoZqPng2",
  "key16": "28wppL9ScAowH13TRsE5ADjLxSttvjApc1emPBjDLKUPjXtCyvawptWDJMNGewvjM52hMcCnoP2E53LSJscw93yu",
  "key17": "2LGQ9qqVrT5HieWQ7hhme7QD5BRMiRMDimNfUcguQiLjCMH4qnSKrgMvYqcW9u95iLfBVCubsjdKhRk6NjcAKEnf",
  "key18": "tqPH9N2xo5NPJNUtobCnCmGQfTakpAsP2czGCiF9GhvgfUX4h1qM7LPPJnJNiLgVo8C5RiA3HhCbiqoAmbVpeD3",
  "key19": "5quFJRMttFGnijsCSGmC2FutznmtrT8jcGzVwq4y4acoTiz1SNdZKcgQ8brAsU71tiqGgLKcWCfQNioH6W6xupFC",
  "key20": "5NcfSwdjrVtrcnBYL3VLDVYsS7xdSwaa7Wo5nw4yPsBaC3TuRZzTQP2LwBv9GgHXcitBDtKRAwS2kUC8dAXbJY9v",
  "key21": "39uVQ4Lm1JgP3P8H3PPedRqKUwb9CSos9D3pnSg2YWYG6kiWwJsdRsFtG9PwcYnd2cVHorLiMGjDtzt4EFUhtCM8",
  "key22": "3WQXF5jVhrceiXjN5mVg4LgBcfxHwuHugD6NAzUrXBTyN2oKVenM2k46WqdXwyK72qyjRkJCouRdef1my9fNHFWn",
  "key23": "4YLGYnyj5PPkHWwPUVtRfw6sAM3AWJNgz7rx7VXE5f6UbVMiNQyW4RDKNTUX2SPzbYKFciQ4WwipbLSM76LCsea8",
  "key24": "2JMzBD7Fjji2W8d2ehuRPVrEvm1NzKNQw5YY5VnJmgLYgDz1ByAdovFVMFBi6VqDanwrjMP1PwdQhjv2ATLdrEvQ",
  "key25": "r272VzRBq51PYmAknaKpKmWan32RBSvRZWwSr12LNfb6r4ZW9WWzRXA2NfXnmTepkGTBKB68xnYuM8rCBigMvmS",
  "key26": "jB5TZBzNM6XFAd47Z7Q2nMfzeQuoRUpxUM9QhXuAcThq1qF7FffYZvi7gHaVS1Q3e7LvPQKMYX3ogVjzq9XxwcU",
  "key27": "5rRYw5QzeygybPBRZaHdYQoBdwUoQ7NkbNrF4Acay3vq9SihFMxWKmT85raCybfmwbptXWak9tdZMBBZLLczJLgp",
  "key28": "4EyaoUC79YVyxZ3Tb3WGfrp8CxDczciUwcpASU4VYDDUyzDc8ZsVFY28ehwKdSPSHo7N971ectBTvxLyR37JFH68"
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
