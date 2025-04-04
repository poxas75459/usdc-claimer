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
    "3Jo7sFpuExCrCBgi4y7TRMrNWZyBFLWvPNeDX7h5jj18Fz8JwVJ3naHRL4VumrCTW4BURWWZEJfNgMJ3by2aq6gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hr1Tyoh42X7dHGJR1s3fYHoQg6kyFFA4GgpPdFirkr4nnkarRMdhGn1D48pVtnsA7BrXQWFf7h68RhjcLaPvBC9",
  "key1": "Gr7TkZtUYken3DNDVsbbf1Tvxcdnb3QSNAVRf6qZBhpSeyEYF1tcdqCsXnCayrbFrQYDq4rtujPcnQq8KSDJnG7",
  "key2": "pKgH6EN6a14NPVcwjCfMHUrCHbvmMHn3gXgKC5iuWDh1CHhtKE9XDLByXU8nwAZxME1whnMnPrUjYfnQkdMHbdk",
  "key3": "4HsuwDkjFvFkWhSC91VndmfQUm98RMST2CXkH2m9A4QxToJb616iFp9VikFHdSU7Jh2Tj3AKMLurex3QzKSSXphX",
  "key4": "28W8bYeZhVV42JnPnGyQHr6bP8vhd3TWT63sUDoxdUxxSUgP6cNgpDdKTD4AcikFHuaXzzG41Xc7NNrb5sABD2X7",
  "key5": "32nSpYVRNKpdNoZard76ZLy4QWrj8GECTRNDSdLEdu23VW6FKpFDP8uuKqLkrfx9Btp377mgP8uYZcmSp16tY85U",
  "key6": "5xD7RpTRSUhSa33Zx4RVnKe7Nyy7Y9oxdgRgKeQEZHLdLrFnWrXsnSVAp7orS5eKqrMzgaLnV9Cu2F3WNXzQJvSS",
  "key7": "3DZCGJNzZTgeVbjewi7DeZAP7TME41LbBw7XJmyXyTLxzwxNpJBCNafukkutEfo8pN6oJydmRs4P611jfY7LRTdQ",
  "key8": "3rtD1SfEi1GzHbHHxd2Y5gmairHvWMoxQLDA7692tZ8weYHzrQPhhcgmyZhN35LgJDmKoE5dvzKEfSZEptAaP3e3",
  "key9": "56RwC2MAY1T43GnT4Wijiep85rfXq3x4ixa4rW37WVTx6DuWV5jmecuwaDjjhJB1NgSAQaUqZKhpoJHN7ZBMq2in",
  "key10": "4zheLdrXoveHRKEWgb2ebRtecd6thxfp2jzqaHqfjaVWdVFBNetX66QwhGg1EvHyyjrA1zrYKvLg8vKALudAhiHE",
  "key11": "2SmT6fHV1uK5SyubzTbxfobtb4mYeoqB8SVw7ws6QLiTkm8ujdYLo4FmCEt55QZT5WgJMkQDwyTLCrNZ5JpehYM8",
  "key12": "4pvtoGKVGcsGGuGB6XaWro9keHhe1FCZ1gJfUB7LyHSrtoUcrdMyUKXEmv8TpMGfwQv2rUJ363C8fq2SWMgeJLmu",
  "key13": "2ByigiHpGhJxzaqHmbno9ET85svVwpHiqj3xyCQ9pN5gPZW9GmKsN87z8fwZ8K7bbCFiMyBmamfqWMn3cihTW5Py",
  "key14": "aiwx9qGgrxkRV4zWGmoqrUkYfStuS5hqEhb8H4MzqeKQaZ3ZSDBTH4dyMzoUNVegriKyeGMd8SsNzY2wLMEKZig",
  "key15": "2SfWWj5Y8JCsQNUUkGroJYpS2KPuixASz8WGqDsVuTyLAyTTGDVYQME756NQ3LuRhXPai294ahZgEYtJCdKdL3sw",
  "key16": "5PYNJ2jsn4As5BifNdyJCaAn5hUmikAqufMFYB9GsHwah76tUuxniXrkfT8ZAGdsSkv4G8DPbFgNugmFz5geZrdM",
  "key17": "3ZsVqpehXz541tq635ZUtitcE7kcwcACMSUpQZLnnGhVJjUSzQsycJDmakCP3pThQJKLazer8aDqU4JTRDZreb7d",
  "key18": "2eqNFZF7GXrJzS8fvZJ96JtVQZM3oDitxrVzhTNQpKFnzxkxVk6rbv2MHmLAg1BSEts8mmFN3xghhZXpdAyctAQu",
  "key19": "2BZeg8uTBpBTbnBNseiynbqYV246tuaC5neU4YFciM1hTLcxSUVsLhLLAqmb2RapSxxuKJG4WzRrFcx25jqN8gv2",
  "key20": "4CuWD4jgeASfapwKoLXDi83g6WErk9DrqsmRp1w7Juot52zhGEDTPfmM3dgiAGgfDGUHvGjCLNqFaLRiNzoAy2N1",
  "key21": "saCQA9irXJE2GNEdEAW8YNqbkKA2trea9s3GkxaxGvJojvA6353V9YivD92Q7fatT2k4XBZPUcHwJq4of6mokZA",
  "key22": "33WxbPQRvpu86qFvj83p43dpE8XSoVe95jFygtGY8Bh9YKJG6YaEeeG86YRP1LrswsrWRuJipgCy25zwX1UWs2Ee",
  "key23": "3b4ovmvByDWJTMV8u9ga5UzLbaY5wFC2yGNQ9SQxpZCDumq25zhohJPYCE1PGTUgSAef8RnFKCuVukyCmF54N8nu",
  "key24": "4uE9Bdem7jwgW1pR9EfAihVUtkMytECU7mN3VaGrkLMNQSzvN7RcioY7C3M2hYzrMSVeK2LjCWxKrkWd1sQsAnpm",
  "key25": "4ZjjvaFFAmX4q2ekP2fF8kDAhCNuDyeJo7EnsCHznFy9DdEAc5VVe8sanV7MxsAE5HE5QRH2WYu8rHTiAx8hjdyz",
  "key26": "4s6J9sJMV1DQdHAP4hCCzhXUq6taVDVbxPo4CmSstuRPZdpFRm6CnvqQzZPgp7EvqApu5PY32yLpUXmVkpLezeRM",
  "key27": "48d9u7uM9o5hCKXWdyHFqetdTwmm78fLvALLRQM8EgVvKSfxYutvz6GHuKCTKN4Ccgn5wCjFvvhANQNZyvTPn3iS",
  "key28": "3bLMpkCP9tQMM2t6UW7H2TSdPoosNW2WQQC4sYp67X71rtLBNBg29pUXJxjP7iLVcYN8FwhPGxzo8ZhA69B3LGMs",
  "key29": "3UWrdY2Qb9H7K6q3KbJ9KokwHuQhoyYe5ht75rdRL38L2U9b4Dq8mcTrExPjttGzXTEyxkybMF5w8dZaQxh5QazX",
  "key30": "2hqpGNQPA3i9s5pfpvTtYshWGueqpQXfWL5qDSdPJDPZY699xTYdn15CrUzK2qJfssq9nUyBLbpQyMbDAeWdfusU",
  "key31": "nd2a8aEaaYQLXQJKiZtJjKeS4iutUp4MWCJQkNkRksk53bipaX4bsgshUsdvurUErtALFXN7zC2HEYfBFNuxSvE",
  "key32": "ZSrEEJTDVVjp7GS4WHJB1Jg1BtVyfrWHyHmJeDj8ENqNtNpQx6rQcAbJFUgLmvG8uyJ8jjBWnGQHm1uAhaoCLUY",
  "key33": "3Ateessha3RxEfgqDDc5TFG58E84rzcxvwMuJVMcB51ChWD464VcNon4aJsfnfHPrGJnMFwkFtsrLaem5vmFoWRw"
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
