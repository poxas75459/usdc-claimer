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
    "6g27XN9Ss9EpcgzUdFcSsaUWy7eeiCcyuamZ5HHU5dzsTNReECGD1Fg3romRBcrBZ5o2dCXsUCo1AgPQwwwUBbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jqkjNHwhottxueNGnjUpXHLnEbiX7Ut8Ttoh7YDkTuDGHdABTVFWfx3rnAFGuBJLtrBVi83SNAH8pcpd3fSj5y",
  "key1": "2zvfmYDZ9W4RgcUNiFYhBZp3966SRNo3DVvmBxp7Cj94zQydAdp5vPCCwC6xCayNfBcE1r2dTKGU183Tq4ys6wLq",
  "key2": "25f35SM3ZkxJksp8cuFrZxk9f4GmECmsLw6hLNNX6mFgRThNzfKjw693nJHvqemyiCkecuK2xXTvturt6DMQbz1q",
  "key3": "7TfxZNe1eLk3eVs7inaHWE125wBoMavfYuq8BqfFX6o69dwYb3CmdXiBhFDkNzXFCPTnp3HjLmkT9UPA62n6ozm",
  "key4": "DWPK6tr3iRgycdp8JtQ6q6x6VevjtiKotdhDyPXG2bU7zcy2ASVKxnwqVQvmcUvbURWPMbthUvJL2sVdTYs7Pkk",
  "key5": "3n3oxbLHa93TpNgpgqgr2fmNy6PPtaxmkkHYURRMVXQkWxoLwnabFz4BSHMcrGgpkErbQiAWmUm5WyzgJr1dgxbt",
  "key6": "2kuLr6DwvY9wgzxCWsFVAJJNZ7Dub83R8GMe6ZgvBLDMGQBTebfy4sCEWkKY7mwMHnDvt9grDXvi2YQ6oeAJe6uh",
  "key7": "4KS5vsCRRjB6Stvo2HugxJwrvn4CNb6ArAG7ThsuVbPg9MH3eGSEZvmsZf2BeGdYMG2QSHQrRsdREmUG8hCRtc4R",
  "key8": "35NBzZ6E7tza4uFhrPYzKwcJSeTkrseAdtG2NUYcgtnnFHU9F1iFMnA6FqAVpr5NzrftKmitTjuPx363MmGAZbDq",
  "key9": "4GHb2viKJmu8zHe7yS6WL9dQZr6eF6xDYCkQbm8MK1KCatNLrQcLbjdP168eANq9GPc74GS9Uy9cDzaspQtdCmAZ",
  "key10": "2oojNz6HUvofH9CiggVXGeLcnL7SKoBrvYQ6ipHaPNhz238htiPxKXzSCoYGNcZB2a2uXNDK3HSFcXVGVUNj1Gpy",
  "key11": "56rMy8zKvF8g1cJ7VwQYn2sn1C6WQ6BK7oiGJJtvXwbUzJJNqahWLonPoXrAeqKuMjfnBgMtAviwr69K3C2QxXQG",
  "key12": "RFikqBKp5txpxJVVtoTARf3KMSPTJohpxv7QqJoUFKLtThQEwSN4Br9gWCzKxFHKcYpDuEWCngmRUo7WK4b15SF",
  "key13": "447ugzX5QNkncjvw1syvdu8QXK7NEDyoNVcBKUK8WeMMrh7K6K9F7e3F7x6wZSH4H5YbKGQpfB4vyd2RzCrVgg7p",
  "key14": "3dWXHsM7A7KPvJDMePZCSPFmH17nnRRRRAERWZ4fWSo8xERSBwZFEfjuewaUmh9xgcZ6QWjCJRdX4ECmdPesxnhv",
  "key15": "2BBLmMfPAsaxrCXDMNAdYfF4KKRrACub8sxHqJPyC1oWtxAGy9csm4r4Y32xxYcyv4L8HUyCgLee3xbWi2pQ3SBd",
  "key16": "3gQhzEC1xCknWWSaKzBkrDafbpPqSnPWiwhbcn43fzeCxEkVaA8pRLP5Lz1goTCHhiZZJYecMM3FgnpDSo1XxGYD",
  "key17": "3XbHdpjtdm8otb3cFmD3jL9LtHXLQGZYQ5EnK7xEc1DmmahJ2PmxBgWKyggFAYiefHb3aEtxjHRTQxmBrELvsE3f",
  "key18": "3FZNxL7rGb2ohTbTdcuwsW1UE8nS2Quec1HNt4ttak7vAmfBh4gjT7euSvJVZvr5HPhUU4RGrrTPp53A7C8uSzKQ",
  "key19": "5S4sZYFYhYCZDxK25bq87rrkWWZ5KL1GcoCGxMFPgftiwySohaGW2HdgvThCJb6hDSXhJcopXAACRgQuaupJ84vE",
  "key20": "4oGwhtjn4aymUWJL4bVKBLajy63e8DtC2GPzc3SKFiU7XtRUetMXxv6sxTSRsv6US2bb76t6xdJHwr7VgBptCLqS",
  "key21": "3e9h2CamgADDnG3wXPysSGaV51mdLow3Dho9vYzbmUCWi1xx4dxRCaBhgAXXDF5nY5vC8ZTL9fWxdcTaCoQGUcRY",
  "key22": "2Yt79g5At87ray2pYa9jhHpTmNnioFA45yFZiW5P9WGtUpoJxYrENm7wGdsaaBzzJTTYDWMqrXj1qcgby6RJceKB",
  "key23": "5rzLhFTRHheQKM7dE5q4hUYBDL57kGAe2FVJmaLtR2EAZW5buSVSrvcNuwGJ72AAQRu7jCWbgitQ3KDR8f1b3WDR",
  "key24": "3gy4pf8Wb1RFqX3UB2RJaCsYGgBVm84qE9NEyJYxf4jcsJbaWpJHfMYTYtZMcAuq3LWdDycASfkEm5nF5JzLBYv9",
  "key25": "4b5rTsYivfdS4irpDKv1w65atBiUDwXpw29VJPwEUCqcHGQrt13s32KpovwT4aSNx7CDAMBvZbz8LFodUiRUhb9k",
  "key26": "2wckxGezyugansJ57AEaXBgPyPo6YRt4XXgcXxbrvyhabxKnswbBxsBuhHShruvFrWTK2nKdH25k7LH7pDg1mdcR",
  "key27": "2K9QSBw8tTkfskQxsjQBiEDhba7wdr9gFngYgocRpksB4HfWyoerqx3tXuweFhbDvXubNL4yHuaQsfvkhSQWGiiz",
  "key28": "5WTutaoPAm5d8i1GmHWEz5aZF5jYtvMY9vE1mjA4eXucuGdSbDEJCUJFk3XJobUih6BECo6m2b1FpmpKxGgqpKJi",
  "key29": "5bLcZwHRskG4FP9tKwxy6RRpWe9TGsjQs6QkV4maVAMwNFy6AhSmfAEYwMsLVTg18vKBSNcthjqemvZUnpwk3gnQ",
  "key30": "3UVTSYeVfNtnxLEJRWYGMkD6afMToGArHTW93FYwCxL8E17Z5G3p26w8pc6hNpnhgK4yoZ1UiYaDLM3eknavz88z",
  "key31": "XN6fEn3vyPz1q8d9RjHjMKv4ViG6zXpaGfpQMJ3xeV3fTH9UE5Lojxrnp8jeqvYTMgHwukLoac32QuSPNrbTtRJ",
  "key32": "2YDEuCk9E3NQTG7nintSFaufy6MpoqaiqggmPLZ8yfs8heyz3MgEK5QpaJ87hmbCpjiJsCApvSP4NGJSdVoPR8H8",
  "key33": "3jDuouQ1XiGFsvWd71YaTcGNgnutXvmjgBJ2kAextCjh2EiPeJ8MuucVhKegLLdUVxQQ1JAeNe8U5JNj1diYkzpt",
  "key34": "67CCTQJu5UjFT7UnZ4naLTji9BAQjmEheQCKtgmrEnDeZsyBNhft8vX2TEZTfDbQam3jwEnxbLznkLJQajdDVRFK",
  "key35": "3M88ShWsN7G67UdFe8GJy7TQ8TU5Bgyw7rDQHLyHxxwFtb4sEhU9WQEG2wySwGL45ZJ8NnfqftB7ANJavodiG6Lx",
  "key36": "3ZAJgTAB855C4gU1YUSfdLvGkVu9hoxMbt5vL4WqjCrvvUhdEbPau6u2rgjfbmgrRh3X7a969aMFW5SCF8MBSXbz",
  "key37": "3oFoZpH35y3Pqpzp4V6vPbgiKbY3wBJRzS4Mx55DGipzrJpkfTHLBzQyPdLQGLifhRFEspMvqHHfV3GqDodMuBgk",
  "key38": "5v88VEPtVP78BsFHhHuJ3pB925DnzeSpYQwShxrMucpS9sx4pHph9mbWLNyZgquQnuJYkT73kcAJU3bkDEyQU5K7"
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
