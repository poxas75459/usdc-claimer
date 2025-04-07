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
    "4NChtEypJojEKTkTRL9tvW9dEhSk8TANbXs6GsAZ26Kn4HmAcnf1jUfwexkzGEgBdX7kVtwsHcLtXMdm9QcVKdiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXGKXzY6uTA5zqkeY9Tvrca1Pj5NZcfjPjU7TV78fni3fR4KCALKAhFBsqtAA8fsBvcSZv9reE5d4DSkY13kH7n",
  "key1": "3dWYtVGgogjyHE7uwJj63gcYUR3PkcjE1U9htJnBQftx153DcbZLfbKJBTBTY7eSCcP6XYfcxVuUUbvKD7on9s1V",
  "key2": "3J2r5TnAHqLkhLvwQeQ5J81xA5f9ZfngCtgbxC3C4hhtGvfpVceo3FvZBuibqzFpzrP7oxh4QzzBYaeioPkFKNfj",
  "key3": "5Dac7WEm3KvWTzPonZjW2tdFmmcPXHRAVTcBRs4rn569qpcZPAEbzBS3SSQa2JnBeqWv4nyvvfcSnDWLPz5LVodr",
  "key4": "2KYsMWpozf3iMNFK3NDcCRhYgYZPn48c7mNu5gfahzscamgL6tRAGgwR6L3EPCTC1uzySxfgPJy5BnKkoS8pNPD6",
  "key5": "64KHXLohCGjyqXQhoTreHseSEtR7eUDgxzcgsozQy8Bu2Axhpor71z7t3DvF7eMXY4qTh1pZ8sDxtUarqVeyDzJT",
  "key6": "2fpNYa2XoNmQDpyPJ2kgwZSNDt8rPQ7gkJe5VWjsfA74WPpMWx1vNQ4dgvj48hjFG7V8L92LW9Rj8HCRGFnjvQi3",
  "key7": "9EwiKSbw2kmKZdt7fdBt4sMPgzPoWhXfQnSqhNfqsoHqSkyJ26aPVPqna3PxdtCfrctp9bXp1EFcNATerRm8BKK",
  "key8": "4534UJmh8iZNWqUpmNANjioUZPhXJ6NBkxnimEFFGvrFMoLxQBw5RrpEhb1hV5UMAiMSkbwv26j8hQY5WV1vvhZv",
  "key9": "3bS1gP7fKE2FGrn6pgAQz6FA1VfcCF55Vx4N7aKhDBUMRhHfBQwWRPhEXx2xhypmygLfhA8oaSJy8xWPYzSb8nwg",
  "key10": "2ztveg2hPMfBLb57PDivqGbPAGPdcEK5G67L9KmJ9oT1w1LJTt5c3wzLbANDm8h2wvD5DM3879nyKAiqMDCVBMEw",
  "key11": "5B5jqDwMatXvPWhcv5h6SJNLjEAxKfaMC1nqMMDESkRT7WQfKHKXZ6pFUr7EVnUtgmeJGbckCQUobtkpUfQF1cc8",
  "key12": "5Khr5k3fZpzeu7wCLBsTWBXDeWZMddCobUccPoogNARzVs9uhGeDusLHCzy3kxg6GhoAavn9aJ5zXMCtnLCxrSsP",
  "key13": "3SS2QVBvkcfptA73y9gkGx2XkXofQQxS6UcxkHKcXevoABoq5Vmb1LvQ72YYK2MfXcvuPiuWEQsNV6s1L4qL3Cuh",
  "key14": "27487k7V8SVN3jB6Z9DF2FwkpHLt58HEHywQau5o3nPd96panFufkkpMKFqsHBqgiWSJYL7eBBXdxJKw6f2c3u4g",
  "key15": "6v79goGw6qBnvYXoioepSTA1GbjGs5MQQTKJF9Sp8q66n76X8uYuVYJZ6FNbsBqN5TVoiKTq358yhFXXA94vfdK",
  "key16": "48aeA6yEEZunoRghHkdDzfz7jyhQ1Np9kFNkEWHCUaRQkMgZEg2cJT3Y5eUuaREYejbV1JdbbSqBf9ADuz8ifL8c",
  "key17": "5pB98M1C9NBTn5SyezMfVtbcrfME5KPpr2i6z3TuC2fsYQjtM2pa2J7XcrM4vLRVBPz78Z4DBeKtQSmmzfR1PAiq",
  "key18": "5g9UuQtTY4TuRbAE9c8zTLLUpKB33xLDZ3gpzw5XmKGfbodFke4Bya1pNJbvhEfafxWSff3DmUWoa52hKmDT2sD9",
  "key19": "m8vy4aMvyCrgYDjTJSAY9NzqDCzaPcwzzBeDp5od19T88sKbrHSxprYVLHCCSnW1HJ6iaeS7bG7tB2cvxTpK2H7",
  "key20": "66ZD6W55ZmyebfMTBW8g4tjd19uyyJ9soL6paHAa63yo7mZf9uzTXRVvs3aftZjhQpf8tY7R815wX3kU4LS8Qb6f",
  "key21": "NfgfusnySF7ddBaJS94oQ6wAgW5mQ6phPtfEP6HhxFG5evPhFnbtxzqkpLUwVmz39DvAsbaH4sL6KQ2ZzZCzTVo",
  "key22": "drEBd8aXfcET8HM3U986xuWdbwZgf4BVEMrEaLGCxRLPdQ19yn526UGDwV5obnmF2gqapgCKW6yV22sRKPKgxy8",
  "key23": "3mEMcWgvQmZAuhs6SbCQJRuFbXpss74wDsNiV1toiCkvkKZEqcCWpcQrYFw1ib5xUUHTH786iJSaTsaM2VvwbHLd",
  "key24": "XKmT3UJa5BZLkuq2iV1HRaZmSgh1BoCSWugWYyUjBXsFbRfhwPgz1nwdX1R9nATXQWbsCqa5eX1XYgqSNUEVdXw",
  "key25": "2hCdBd69yH4QhSJvfixnWDAnxHf9QUqMYnpzcJQFEMZq3ZqmvE73FXXaDkA2PJfd9jQotKXZbjpBCCZ63yRhDUX1",
  "key26": "5FpX6QzpAyowPqjGYkE1fCxgudxRZdN3RZhLZypcrHg6ZeHkT3MLUwjZovoCJYpirWBSqY1RRzQy7XNDVRjf5cHu",
  "key27": "66KGrLNB7RkeFEfFZPeVVPGFFjYwM8e5udqv9iXraDWLp497omV87eBkSoXMfeUvikVFKGS3F4agXWzBLHhD1tNL",
  "key28": "2fAd7SkFohHZoLWVLjANffsu55yYFNn3xp6LjxzjwsvdjLpeRG3wr4mKPxPe3sjn9X3PbvKZgfn31R8wVdRui57i",
  "key29": "2kgwYFz1FghgHjkmB3N6U3EF7pyFg7Zp9LFk5eUfTmXLdxjo377R8Cz3aJ79Aj4cSefEY5z7vvE7JG9ai6Tcri3B",
  "key30": "5BZnxfWo15BqghaBMd9Cur38i2PfPf7PhAwEVtCkAt1DaaC2tr5FpoMmLvcXaALc7RUG89TrnQ43zt4ZQMPRQR3W",
  "key31": "2CmcRGJqhgnr1KAqo2PwTajTQLhXiYRZ86hAS5Jr4wk9FD7aM3N6XhT6oGceAGhjanyCSNZSQoVA5yqN8XdVsGgg",
  "key32": "4CotC8NckBir9vBAj4AJCKWrPUKDex1kNBPe1aCTYWsSgKf5Feu31YDfeu4kZQ1QpQ58uSKhF57N4P3vvTDokhsD",
  "key33": "G3sTAX9BUXB4GW74VWaPCCAGDyU5F1z1JCngPpRqqNhdAEVGiCeNRpWRw4uSEBrdsmwvRLTcbxJha6D4Um1mGLJ",
  "key34": "5C8zEhLbRN8KZq7omM7AzVKsCGGXCiHiAfik1TAdwHJz7Q9wf7LGYS3qQ4fLv71yiV1Stw7cQvTGYAbXNiDEL8of",
  "key35": "3cfYXZanc31yyZn5NnVt52mnoGJj7oV6mERjmBFa3Cfww8adGPRmVaYFHUDy7XqPBo95LBfwbHnssqQm6quxbHEY",
  "key36": "483cTWRy4p5HGorTSNWaWPd6PEu2MUT1BVAQm5hQpewW3oY4k7fWhYRsBmAUP1yRj9s799T45Y5F2HLXpbuU96Rg",
  "key37": "VozoWuuSQdECJRxTuhuutfaadmAiXCJE5wZ14s1T4HsjCtYRALDNX7FXZaUhX43vF9Wn8KRmurjHMfAfxQdzctg",
  "key38": "2LvLrDwRLyHwu5Q3QSpTsiYeN8Jc3C1NBnaQFFCJ9PLdVUw7P7g2s1Knn7CM7TvLmZdrjokGajB9iJTApKRxUwLQ",
  "key39": "kqCSJeiSbPSmERqYM1U31BRg4RF4gNT2QA6198GSUdJFDeyFbUdFqM1mJbpea5Ac7bXk16sUqtoxVeDdaNuQZX5",
  "key40": "5HVn2CXVLoDAsDs6qtaDvDfmLsGWMwQFXfbdH2mztAM5xBFTxebffmEoYSAw5XfDEvowJ6Gwyt3tWMAhWi4Vgn2X",
  "key41": "4RzPTGVkJB7XmFm2bzLn67SkBhPeyQEvfAe5d7PAidR3hKhbxWhnYLYC9XjeFdoqLykFzBCbvgwJnoxpjtCp1Aoj",
  "key42": "qUH8bm7ZUXNaqBx262cDXP49LDUuEJ5J3M1qXXvuzmyfHTsryu1nNTjuuPo4wL62vpUTe7yHoWWopAgahMAGjZt",
  "key43": "5JanYcTzKREifXeawfjqh95YL5yxJ9fPK5hrM7KxRszXvTPUtchCfiVRYEQzEkYXAwjVPU8d3bDdfSBHQyXRASth"
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
