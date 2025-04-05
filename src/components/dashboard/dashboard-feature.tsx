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
    "2PqpCo3CU8S46WZE3rarJBfr5VtvPhCajD4v5y6kbEa3AT38Y7KhfXue6tRuiPDfSMnwkNqpahjqEotaC1C93VQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LtkPE84qP4bQvioSNdvZpvpcUQVY2t82n9tRgeDr8hndeRzcQsZ2Y1f4DRxrVh6HMSaXDtLtJ9S5fvNfRndEQf",
  "key1": "55yxEyT2YBQZ3pyFr9AtN8H9yrRLpqdk3Ka6URrfuZENrK3v7Js3j7as49zb3RHUrFThQYARBVv43TtgWNFSwUgf",
  "key2": "3gE7BVoiULxLopb9iWoNKGmpjfdVL2wTY5yxwrnRYbAwFWQm8ZSTZJaE2XAA3LEQzLiuCGwdeuoKcXRSmRgHXnaZ",
  "key3": "3P7gGTmyo4TKS6ZZnQd5KNpCmw2jT42LwSsuSMVpLWSngXXRY4CQwz3zAkUmk2cuwzL19qLg9vjc3Wc3EdRGBYmc",
  "key4": "5tJpC7zzBci5HGTKbzDNL4TjFr2J2d7jCRAR6DESLc4tJmWtMaRe5RvrRGQFqYF1v52cLE4H6HjF7nuyJUqf4cws",
  "key5": "3jf8iq5gSTmD1nwCJA4Zrh1EPY3Z3AmSkCABurRtbJFqFJjPvqWwuMx8sxxBnrp2FweUMiBWiBxF2X4dcPfZyhuM",
  "key6": "Ly1bL2scLrNkHKhws6oH2Rf8VXUzZCz9aYZJs7xNcBJiSYrn3Runu6R364s83RGJTTYjHdnMeg9NMqbWpYPaDtb",
  "key7": "cBnBuSYzU5ussfcSdEH5YUYd5F79ESptoa3BkW9HZUjrkD2kopk3tA1ep161Fji2prg2M11SaSTH1UPUK7eyGrz",
  "key8": "3r7EiWnBE38TVU3ZAeDSTfKZ7xYU1fTYmvSKPKazfZMPniLNJPNYrBLkxkW51BnSZndKHFws6W1vbcCcdQNprwov",
  "key9": "35n2oEq6iGH3xFnUBvMu72jVrf5fdxbih8zavZpbTm8D4YK2iLxqAXrFiDj2Gb1A1DwZQ1wkjdWx1tXaxkXSsVWP",
  "key10": "3J8JLw3KoFG2kTkvYvvnUrKiYUD3xW5j1VWyVSbk16DQAhsjZm1Q9WXrg6xKdUPSsRdyW8e1WviqVTjhpygHh73x",
  "key11": "2U8PAe9dA8WD22kxdgT8oBKuKYNkRKcyD5owm9q8XTrBZSqijCq3fautQSqZEQMSXrfNs8AY9MaA1VcGYKcbUpmK",
  "key12": "K44xhEf7NvDKqydYNdLDvu3HpYi7xqwshp2yevD9AUTFH5d39F3dXG42q94q2B13Ww1D5Edi32wKqg5aeztVdBp",
  "key13": "4pkn22dJx1n5qcmCLnqMi3qnZbfqoE3kV1RA14TX4K3jHWc6xg24yBx43RWdXQDKvJ62tQaM35yHE7CjXfyPjvfs",
  "key14": "3wBnsEAVaJYx8yND9ewe3DLszmFTGcz5hSWhdAKSY6HAM3BEz6NNvUrjoru4KmxQ1A1EBAJFfG256VZ1HGTpjAxJ",
  "key15": "3DKwHt5PnHDzhpqiJtgf3CPCXNn4psYngJcXnja7iQ3AFacege9BwdjEM2HnLYWgHfnn6Yj4JzfigymuDj3nY6oi",
  "key16": "ttwzkyouABFvu1k9hb3LoaNHeHy2VMr7xNvJ9kDGp3bnB1PxrJkYsLAxAq27sA1sH91Cfs4riMNpHyU6ePCqzZG",
  "key17": "3VpFBwY7WAkZHdn6wrHEJokxy4ayP28zLWNQZy45E1tPGMHjJ7PkCUdL35osCefHnw3v3xrQLPxYoowmmSVz8qGa",
  "key18": "2skbWK4uf8GGAYFGmE2s9b6UrBtHQZ4pSbXpM5M1vgX5zWpAFX6GHz84HzdEVRcADSGgss4GGnviEgRvxHXuyrhk",
  "key19": "4T9NsiUdcnUf1HQDqVVguFnwqaTyU85rdXhpqcTnYQwNGagsLUDs3hKP9RDpQD5mqWywsyypfc3zwW1TS7DjYXUe",
  "key20": "R5ZqzWNVKubrG3ce49yUh524Du4dDZ3MADxSsQAj9y3eU57nnALePZQshUQu2izaYZ74GgNQYs2XBF4vU9Vypq5",
  "key21": "tgGgmukwoPiBnYZhrbBSdpWSxRLHChGKZidUXQBy7zuvTwTobujuw8K29QQPE9Y7jZ1tNGn5V8Sy7NzYUUU4wk3",
  "key22": "5EMjNuDqx2494Th7nzCC92wRgBiTki1iwaSeyjC7FMm41gsh45h9SBhcbrMGDacTLNsDYMMzWEJreNYHpUz9vJxX",
  "key23": "CrvLFrPKKYZfkqJFseEPgyLcjzPsaowiJGX2Zat8NhJjrnqpU9FNxpNauqmZG9x6d2bjG1pZJgBfTPQhypYkwmZ",
  "key24": "5Pbf4L9ZEqM1Nkva944zwNNqQGCsrwUs5uZai1tewHpXefTTgjTLvqWZbCijSjBYxKKQ7GLy5ad6SEgqGs3eC7XW",
  "key25": "5JSH5HZhca4aaFXB4Sg1QEV8Z22Dbutee3k5RYkNSCaovEXK42WjX6Vr7oDkKp945jYM4LyzSAs8oJinrck7zkEf",
  "key26": "5y7ByPZN5dGdX9tESTWxJR4D9oAXXJuSmTc3G54gb9oXjEpB3nTGGybgdNUfdYUGbzCLamhwi8JzmRxVQEkJod36",
  "key27": "2CzfETC5R3hvqxLW6Xm34UvYVu9pBn3DPG4WRK7v2pvDPyKzUVDvKuCPHzZDcTzQxeJ61MMexMByUFcvdybbsfcm",
  "key28": "62e8FEkssp8bHB6P5bHhZT7qFqE3Hg7PNRkrPt7E8oGxpz8dPMrQ7ij3jM3ifrcjZ5pbsFqcrbD6xcze3zFeLD3w",
  "key29": "2oeBRVYwtQhwxzKuRkoVQtUTbKxzANhoeS2BQST6Rqno8HxJ7nuoUbLbGB3Q8afKCN1mvyJkxGQ1uiBCA4neAVMR",
  "key30": "5kj7ttoNEPx3KLJoA5stwkJDyYdxPu9L5FNF4hUK9C91nhr5mFEFrsAXM4SjDCXEAbmhoshn3gyU1AnRWGrLzDBT",
  "key31": "3MNAY47FQo9VMp1ccAMyzvZ2kyWBGFELM1kCwc2swD9T6FnactvaAzchcs5D1UWym64izMVQ3g1HPgJvwrUKnp5",
  "key32": "5SCF8U8fzq6k9fpV8ZJz4pek61A9o7cryKh8Kx4YPKCY6Ps5n4rXDiqbU131SdbnkfqBGDD4xM2YLBsKMtfRW9iH",
  "key33": "3uqecRmiS685ayAuPgFjk4siyaGJ2yKxJVdcaaQ3Ye22TeKmkjMZFGUYwC1FwAo3ocRKbamQDSneboWVRcQryPPd",
  "key34": "4Ft3P1s3hKr26wV5aFni3MkE1nPxaajeQsTDbJoo8vZV8jJ8gA8KbjtFUfK7raEN3KttbkZKwPVVTQrcsDSABBFP",
  "key35": "2tRrKWoLYRMJesi8v9m1z2nTjxfExa5Vxn2mDPQUERAxUJmi1F5AVUBhc4S6WpnSsuX4w3dPd8LGh9aHb4UPnJtj",
  "key36": "2d8y4VTDb6TrWuWQzZ9GxTufVZ5TrWjJACgpSYkNuHPmMk8uGvFtC1heApfLaTPSuV7TZ7edcT3pkTtXos3cyksw",
  "key37": "3HxoDt9W5geSnYxK3P52AR2R7YYKhTAwqRse32B4mf4v5Bq53dycKLHV24oHC69hHnED8fAtijSojDfrdx9e2yiJ",
  "key38": "4xLnow6LfsAS5cxEEmC3f7Rx8q2VpkKy3tv5pcb9A8dM5QVAU9ZayX4K9CYGYfhmA3nzYv9cvxHVM6HYuwbxmRx7",
  "key39": "4W6J9jsKphhs744tNB8qkhNwwmBcTzWFmvZUVk4SCuTpdZp3GDkvuXHRQjKdSTcUowqddTsCsfjyB73pKYNfcMXU",
  "key40": "mSdz4nz8onU3R4u4idLHJLLKPkDSZGGBFbMFouuWxbBinzwXGeizswk6tCMbfjR4na3jdBUPbWJoE9RUK27dPfm",
  "key41": "5YvEBbFRhMTgDQhLuLzk7LX3mGyVW5eVWuwwzxnCdqXeS2AoiBBuPM4ZGXiuUTMms1N7PXwNJF36cTX6k7zMFSTN",
  "key42": "2g8e9jmmyUeCkGyPWjb2GE4tTQPsdCC46w2pEkjHWHU1uX5GY6pzHLKpA2PVsHb5t4ZBqae6So3wGU57yuThZze5",
  "key43": "26cyRQTSPvHJabVjEi4yM55yRu8DBwa8A77WtzG5swKguFZmLJ5nfkZUepf9QwpNEoXyV1YBTZa8nRi4UYnDuvLv",
  "key44": "4dKnMVGrX1K3x9Qp9nXFobnec63wh9MG2NGQUpMfwCFP69wDFZRG3mNd9yvsv38ZC4i9dSdNPk69GVyxqymhy1jm"
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
