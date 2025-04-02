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
    "4BFjVtD4Hsn5eAg8Hffaq14143sMMCCDzN61gPiLpgDswPt7CfXJkUa4c47yAXcDWe2SDgAyShFzmTu5RWiiwSj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUTpFU49WAT8KFAecmvRLw9XvsA354YtQwtywfLF8Gsypmd5CfnRLx7a1zZwas8hiFMuSgBQ4zhZoHHVSZ6EZ91",
  "key1": "2Lj5er3w415sQLG5ryavKnTGQwvBqXUrKzByzarMd4hfbBTfasuozSucLajW1EWniuvsKptGyvJAFK9b6j9ihGNf",
  "key2": "b3tX29rhHP6JcjiC1xSKW7NeDvfVozkftBET37Ky8EMPTCH7iH6brcJ5NTBYuKUzx21GatFcdhQnwiKbf7Ezmr1",
  "key3": "4tvjZkpik6Eg4s68ZRvBLxnPV9RKtzGukrCgzkeaANaWWhN7WhgKqpvhJTPGsUyXHV9fj2kY8vk5HzHS5jXjd6GV",
  "key4": "5KpAwRQx8t7jYKUvRqPsYwaaa9MQWH5idrjQHu4m8nqPEfAVipHuoNbs3QrARjLj67n3kzqwSVCsSpEfDq88u9ed",
  "key5": "2ubyKvqe3AzkLpaUxG1th3bbL1uWeD9sA3bw1UwQbjuWk3QEFrRzw3w6nMf5dEK8FnTBKDe2p62jQyjB1kAVrCQq",
  "key6": "3hhbnBzM4LJmDxWFDEWDd5iVkhdZNkoAFzidveRB25fNvWpPALeAMaGsg1CrJtq88CCBChBVqaxkpqj28N8nRcW2",
  "key7": "XMoiaesYvJBkMipqEwargBaet3dSL8L8MUZTToZqfvdDjPWTTsLJXC74EAYMAFzbHa1hGXV4sA4LuPxqLQAmc5m",
  "key8": "2QRbqUe947HfLvntvMLHptrPgJht161gbVBCtZxjDJos7RvmFhv2CycuEi9JfBz56gRyaWK2RUNpbjztfXfQ4XYW",
  "key9": "ZXzZwhNLhraJg5FQmDyLqv28A5wFrMUV8afBrerATxJ8V4rQhJfCKRQMmN7TLY1ToLFQtPh2xAVegUSL28Waqw4",
  "key10": "pMASTrXyAkwUSj3WHFyX8aSvL7AFuLztXpAkf28LNGHDZwxKVttNAyYdyx4gmXiAinRcMqMY67jTjnHjeUPsTNa",
  "key11": "5uaURjvNvHkHkwff7fKMtiHtx1qB9R4oKsX1ch9UkydGTDTthBLTTmA2gnSU5Fzn9oJyDMb6cZtHc8FKyJSxhhcE",
  "key12": "nu3z3SbXH1hYtxgpQyZEh1sXi5xK4b7ZGfMGfpU22Y5fzVvhMpyn9rF4EWA8KQWx6jScauExM4Lw1ZypKr7aq7y",
  "key13": "5Tu4USXhNeNwuvd2FeyTo5jBdA89nPhw3UUdw9pCaWyr7oaD1DDuAafeBX3oAJDSDYYmivPRY9HyGdxKHS4zMj2j",
  "key14": "krguKvSTyD9UGcMpphuVcSY31rwUtmukfgGEAXzE8t6HiMfDUCjED7ByLedSxfKqzTe12yHXFJ4hFKDd7td1Rbx",
  "key15": "5uT5bgWSq31XYHVmizVze7ekpDzsxVsNVNLDZBD5QMXACgP3epLiBrrAFWEuCSdLMeCL8VBTxSfSgVS92BUTKUoQ",
  "key16": "4FKC7jmGkhrcc9ydbJjjpR2e2azpDwTpU1RQkPfecgQLhA5AXoStQEAzngKjT4y8AqqC9xXzRDHQLB58SUCyhidj",
  "key17": "36JGvRcbTqyHt4LPtypiig5SsNS6MnKfhijDHH9pABGKwaVavzHpWnVH2aTnaQRJCFDtSB4VMA3zrNcdDLGC7rRy",
  "key18": "Q8kRVGbrUw9ZQFFb5tjgR7xkSfGFM4g8exhVUSEhG5UvcTxyGuFQcDtKzrK8keQbrYBGnrah2B7wW32YDpLfTW8",
  "key19": "5Qz9rE7gv4NaGtXEhX7CpMgPhw32V5NNd8TxuLEUNTKhQMLwZyJeT7pnaYmu2TL4nPEdtaP4nWwcCLY6mfSfSYQL",
  "key20": "34EbxQGZaf5ysWa29VQVR5QjNa4vdGUXRB9UqXuH9eAtycsS5YtFwurd5uNLvhRj3hA45fbMszn9Jkj5Bu3P6DRf",
  "key21": "2ksiGQshSWcKT8s1NwGgSb7duTohmN4djkNYa2FB9qn2HgfA8anbSJpD4EYAkVWRrihiqY1wgbQFTZZ8bqiiVY4t",
  "key22": "4gdswvu2kMU2UcAuwUnj4qEtzzvm9xgJbbHyTCUSpG13pnwXXEzpEz7coFkxxT8RY5qDkB7E4VAnizjuvAmwvnXr",
  "key23": "TErVrGJj3b5DX5DvN3BvcGgE7LuDYoAqgmktfKn7Q5YqnpLCoUFyDKiHQZQECxakJ3oa58D2MBpiD1KnbefLR1z",
  "key24": "ejLpjN1WU4D9cDFfai4nbFYfhrRLMTvYsJWBpWGvmEHPTaPNarrNUsLRzvHEQuZHYh7rRLsqEHxzikdHtR7LCKe",
  "key25": "2pyNi6trGk1ttQVfdoEuX7o63dWwD92k6Mx6HcVfMgUeMzGEsaxuuxLAZ3KPkUBLo3wCCUBf898JfGMh9Tf7CpdM",
  "key26": "2YBudHfqcxm4Sc7ma6QEseKvuaeEZHLTLEAQJxyDgnrBuZdwzCpKjz75H7djEGqxruW6zRZJi7CZJg4xgaCPRDFg",
  "key27": "2SwWV6JVgZ68GQ3J7em4xCEWGhwH2GGDiwmbMAPAHNWgNqWgSwfwcfBsaPBUfKQtDjiJvPqFWnzD834a63cY3JR7",
  "key28": "2djbcoEBYiJ4q2BEawSTLjbjyxaZN33WqQ3115Hwgo8G5XXnrnkHjMbprLpXyo9QsbNEEd2BYEEXU3iSxHc3Nv6c",
  "key29": "4SsW8XbzmGVY6apsZSZHL9H19LBZYmMPXbLa2eq4hZfxWV81wedeGGEep3LeP3z7CCB6wh3Ee1mQUmJduqK443sW",
  "key30": "5Uct9vwBm42pqkAKTBSrt9RBVKgg5JpiPDs1qdMpNM9heYfDvPe6K23oqpF64HovXztjhutj2jTmqsuN2mdXJRAS",
  "key31": "5GB8WHhkFZF6HMgVVx4kyZZQc1tSxMS4ipkv4Ai4d2UdrGcNUYYQKYgWHeSzLRsinDqnTWSLj8amHtHJoNgtCsKv",
  "key32": "47cr5FgRPVcE3Eam61ucKoUwVMm9pPkciDuVdWHwrLdddAUNnWyQ6i6azTGfEH7NVf8dAeNTZcoGDkpHCPGHDLVF",
  "key33": "vcL8Z4oFoWR1Rivq89sP7sRX8t42PvfhbHQMCgPy5Zwn6ghtkFdSnah45UP5KK1DwZCsRJvUfUYiuCU5fByz7MY",
  "key34": "y8b9VNdcenYofTfKJsj6PdGu4Yqt5epkPGNjVC5PzeoRhPLVvb7cCPbZuMU2dDJAY1JoUDsMP2ptaEqBVFVRPsc",
  "key35": "56Jqk8gm9HPPzq8oW6pBn2RTcLgbhkSQwFt6VA68f995pvJuimJTLmj538jeo6mLNk2gN37TwHyfUg4QZTwWTbLT",
  "key36": "4oT29JP36Zagd9RAnYgSajDvhPp85WjzfPHrhdnNdqqwfZkyQXKXehCT2D1yBXNTzKcT7qCZGHgdo1tB6zCu3fko",
  "key37": "3VftoNDkpvMUJnhvvXwKW8Jvh59jiSE7viK8QiP1qYkgNcfn4XgUmE5Rc5fcjvEBS5r5GFkH5ksKGEnpVD21TEFH",
  "key38": "32DxGjg4NqJouDz2AaQTx6DWcHiTD6gX1yggswaxa2obZJTFBTRjcrarZrs5u537U89ZpKez2cFKZDyPmu4y2TDJ",
  "key39": "2cgtEUQNt7sDM9UnP21Xbn76MBNHxApkHMNi3eNU8FGh7E5XgBCPFtjfDEWR8UREKEA2rrF3LJ8iYf9pnLJ3VFQ9",
  "key40": "4BWg6D5UtP7F7EEX5xmrW4rtqyH2U65r7P91ESEZeMr4PC4Aa5BH8J5MMJ8d6dj4bqFs314xwBG3zVUH9ce57hQy",
  "key41": "3BQqNaAjYKbbMFBy6TzwyGGUBQr9xbfdsWzLDePydAJdXtbWpjodhjV4Ak6WTk4Kam1h6kR94BGHXTpTo1Ey7iHf",
  "key42": "4bj55CoQrP5DBUkLSEgogFTt1eNtSSVpHCSNJSXzpKmm21aLY4eQNBASUYBamj32c1B5c79utDwpKivrioReKpe4",
  "key43": "5AtiXcpSS7pWKknaW16sijwuTxDrdbGrqnPM2vH1x42uLp2QF9zQYGqgvqApvTUeKmhit99TYbJCvm14y3TFDGyB",
  "key44": "3gzgYcM8ZowKs1h7zku4bzv83rPmhsEd4FZLhxo2Ru8MNCTttpJVbfqPmcYx9QjBZ4XJ1SeDJLDJEikvVGcWxiLA",
  "key45": "8bVWK8WuSaXT5NZUdmQPFkxQnVRPysWGdvxC3p6he2YpjckeRZ9Qw59ufoQTbmVeHxAveZZVkKRRc9PFLEXF2JL",
  "key46": "5YtQM6f6px56NvtWrLD4g2vYhxSUuRR49HTaiWDzDpbZGfJfhFQbW5nwHUdKiGh3poeZXdnkhybbYbKs1C7RLias",
  "key47": "5masFt4CMd9miaGcN4yar4aBPQCfepDtRUt3wNryhVTtFW5XVhyAHfLJGs8eZYtcmnqxk9UNfviy7hyJHzKm4onZ",
  "key48": "ck9dkQJJfwdmr93s8cB9m2k8aEjgZVHz8cdhG4e3fpM81qWYkT3hYEv9QPi9xQ9R41dVBq3Xw4D5cajAZ9TRNHb"
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
