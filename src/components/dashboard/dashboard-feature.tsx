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
    "21kjnw8aw7uzHvbszYZ2aJ8bukmP7iv5Y6tHWCE4fPbwEJRzWX7GHf44jXn22L3ZEUDfvv1tf34cixBBsUkThUL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhfa9nsXHTgsrCQVNUJpqcBJMopffpBbXqnSs4gbcgH2Jc3XwESHfzRXpo9RNUsGa6Mp3eHgXzV6qg3BcqKX6Zp",
  "key1": "5nUBpzw59mb9yqm4Z4VVtPMUaxQnFzoqByU1YSaddxszSnwCfMvEq7nc4MydAH8G9JzsCK6uk33kmNwTYbatyZXU",
  "key2": "6cms1nGr78CnA6HhYdcW4hL6b7LC5CamUzqCxuKaTVDqBv4tHNYATPFiLGwmndZdbDmRaVSNeyDNa7r43Zsyjax",
  "key3": "3u2GbFH8dbyFX4sfgMJhV6ArjVdczBNVccb52diaevsvD4SGJnWCAiWTQQ4dNqqJa8pLQrUraTFqMLXWdoXmvbX8",
  "key4": "5Tm4r9EGE5eMsmBqW5vSesHyD7thhuYxRWhfg8xDpsKReqWPqEndSrbsAVR4qd5xoy8HhCL3HgwT9cfsmnN1ThYq",
  "key5": "4eRyi86w2FJ86p91mXQa7QJiViBo86vhD6Wsj9wKnxE4kU1WkvQ6nipmb8Z7JKLTkHosQzJRRqsBCUY2eZ59GyBU",
  "key6": "5yfY4w7kNZjU9cb6FgTYHhCyzT9Bg3YzuuLpYvRxoPpUNp9WagCmHUJM6x7qS4scmg7VKg8Uj49qXnuW1SGcPowM",
  "key7": "3pHLqU5mocm7s4VBY58pqWZYjfQpdfeKRoAtG1rv4QLNZ6jY1kZx4hfchcwSm8MgiBdzG4KCEagG8DqSA5C6fxE1",
  "key8": "48pP9eYoNTyPMcu4FJfvuV1Ydm33vW8Tk4Yrb8FNY4kSq3PXfkw9j9d6iQ4j69dwSSeEDGyMGNCRnFHn8uWzKjZv",
  "key9": "5krf9oJ6d2ureo5HcZEXQTZPFpYh87ittgTrAZASVQcvLhygnvaxBMH1YFtzyrbxSrPVkMXL3fnNpiWSix4hhQpW",
  "key10": "4vL943wcRMruyrwSW13Ks1L2U3SegcYQS17sKK9jnFEo7XKB1ecja9HeibNgjQVxTmpk2dLevWK769arid61iVTH",
  "key11": "31NCq3v5uCWzBXdX4qKQybsvct9WEENcFKW59pnhwU9LJBPCKRr2XsFGaeSAT5TLfJpL3kkNRDkSb9MzNkYKo1zy",
  "key12": "2zxBWPjTr68tot6ZACKLZTiQ7ew4awMqdEeqoi7K2byFrWhEBAPu9ND6D1iNQ29Rhd56BQWQb9F78xHYcZuXKxWe",
  "key13": "397DsHSbdWTx6MnifZFfjMYvBP5K88j39ZLaL1idEz6RXHcEib3c6Q3g6gkQ59fuNRvd1gfLtUKqJRSCrupnSHDZ",
  "key14": "3SJXPY5HkKNdW1eUnr5b2UwmNNk3S9aHjNMtyaQH2GbjJwST559hGgfBtPQqZjS9vuAV2t4Kp8gAA1hy4sygyxE5",
  "key15": "2xb3octSa4SnofMVY2QA7bwcdxuYGsKmG63HhQNGk8naLjEYni8CfwKy4y6QWFc6ACbFE83JEwT7iwT33qde8TyA",
  "key16": "zwG8pbaXEpRJnG8FeA2Db9zdWeJp3FzyJhRju8HmgonuReQBNoazvUhyMasBgMJFRD8xxNpgv33JTMR9D691qbE",
  "key17": "Xa2puycxirAcEqXPJRbZPNRwjyrqqHAjxQG1bhKK9Y1ngLxjiYjyp6F7NxSGNVTE6C8XVmzztiVmZ2koXh97Z41",
  "key18": "2sMd1nRToetNdZcUJxuUSaNCxWv1JUL4sogKPCBdz9nCwWEtdh3QJYd8hyCLjV2DhY3PSVqmArx6ErZaZTSzqy49",
  "key19": "58yU7ks3r9LcVyHhRdUrrxt7427A8yZ4S7GA644Yw7J6pXbXm6jmz6Dhtpm3YGTyhMdDVDRHiMGXNPTNYbpxmgc5",
  "key20": "tsMGsWp78FdU5SHNN4ybFbL7xBKguQnVnPcaCaBzhnsFTPtVJyLEotdoix7ZRfFBnyDbRQhzTYwaBGMrfsckmjz",
  "key21": "2xZ1nVaY9fsGr4yVCES1QY2jW9PLQuE9LH9USYFynCA1zrhQwD43PAFPucMc1p5DRETAB3NnGBDkEJsK3Z18t4sw",
  "key22": "47eSXVz1LE3iwp3mUQRcv9jyqNBMBC58azahaCq2oWXhWZ4tEEo7ZoZMEWmVrR1LmuSLdDyJnq72wLHL1oyqaun5",
  "key23": "xJWTAaqPsEKxQeNteF1Zj5h2QkY7AF12q8ttCs3cfTBDZnZzercKFancSY9SEP3wo2PuNA976aanCFYQk69syUP",
  "key24": "3wA6VRVSJjmGeQL883ePRCCUuSmjo4QDLBY2b8KDVBGvV8hmH2qRVQS1FEsQkac6Dz2N3wVVeG1AyuKfoU9kJPge",
  "key25": "45NoMx3rBQ7DS9BGKTiGE1BUGBqVdoAUS9EebR9AyyqdVb9bvAgyRq5W4mtzG1PLXUVbpC7pwQEw8sDhPigiYnLo",
  "key26": "4jhY8czzQKHq1KGngCQ4P76pE8b9HuwGApSqNTH4mLwHZBJNniXmGGQ2nHfkaXCxcbRvhHnHHc6XoKyVDghwLMYw",
  "key27": "625twT1VWsuJEKDNxA7JVdsthqDgUysBPWganE1QDetMNrdk1DiLsNE5tN1PvTZL2fEJjYtFNLWg9vDLHmW1DvW",
  "key28": "2uz9CpQsaqF3R57c6drJGjGqm4whachS1pMe7b1d8LQSDB1hcoWBK3rMCeQ1taotB5FdH2DBT69kkLqupRraWm61",
  "key29": "4prjXLvvNk3oUMmRYV4DwN9toAp3vMzLtTtWb9pap5Dia8L8LHWEvyqCvBJDwHzHMPJyFStnMATW9y4Fm7Ecv8wc",
  "key30": "stLF286HTUnb7wPfeUBr37PPTRJtgadUnbyuD3oV3xAEvPzEvpMixjD6RSVpx43DYZLP2oozGDqbKGda6bpXKYk",
  "key31": "5mhJVzg3eUniiEjSdp4akZfEzR2UvuoWVpZN4Fyix7gW6QfBui1QZgzPpAaucyfJ8c9goqu1c5UCJXmtPN4CcKkb",
  "key32": "2xczXa6wD5bQhUY2wE4JRgRUfbqb1hoge4nCfqP6DvLviK3qrgKtPafKgxBgWAKY1Wajb9pMMGm1MqLDR9Syv8PU",
  "key33": "2x9sBmg1ZDxXj5yqaHL8kArnD5KtsAEQyfAh2EurBLroX1GreGhaEcic6k9oLWoxRi4F5NSdSxKwYs6scZrVfY5T",
  "key34": "59RyELkK8X5bvzKuxe4kiy99aQKSUXuKF4k37mNCQuAY8DVgxh4aVoMzBWopxxw5X1HNg9qT2XDXpjMfqGmhkKCC",
  "key35": "5aiS6GpmTUg5u5mZyLEyNCs34tYDtMjm33H1Aie97KTzcKE63pz4qupsKREaHTH7H9DmmzuRATVVhHdTRdAeLTZD",
  "key36": "43wvHRumW5X53C6ZGKDhwVgrpwcarHCvDXrQ7W7wT6QpjJnKE2SkogUDYqxxdfHLuhmokTkrNrNrtPcNWo5J2x9g",
  "key37": "mpsNg8wWKMu452pzhKQJr4JzYMA6SYo8xpw8u5bhiGGCW3SC76a8W6ho8rVP644Z32m3ofmXNv9P94BaY2RJ2bn",
  "key38": "3woGz4GzXfK46bBNyxLvKu3ewzBmgLnwAx6t98nba8cYfNwptgpnMpez96WTq9UoRo1LQNxpUMBK53HBspUNE9dH",
  "key39": "3j3icCSvQVhVwx8egt1itQJ5tkoLexNQppQiuQoEbXBsDRfMkhFryXugaPsTCLsfYTugF2bmqqoom9XYrSLsWjcf",
  "key40": "4Kc1rJwX6y9kY8yBVR5bTHT7cEuywmridEchvQz4xeGyXrWvG5a6352jQQr63VbUZSMBVw2wKteSmTtukdgbafBc",
  "key41": "37EaYfNQDHEjvq9RWXzd65fMYMfFnXg5FnGXTiRsyjRhxiNYYJo4xEv2dtxeveABhNkbBdjFBeNuVUcHmKKd4nxk",
  "key42": "PPCVheMfMyQFwCXLQQBS5rihc2jRC3gwRa1ALWCKaASo6Xqbd7fsuSeFqiXyigGRML1VFdBCA15FHWufPFqeRqg",
  "key43": "3R7bpG296azKcw5yAoQRShSGd52Qn7QTa7qDQpMXuf2Q3f3rxPKLwMNdDjdSpeSG2dTAkfyAWgUwpcLnrCxrCGQZ",
  "key44": "7ioaG2sYUzBvMuafpv5aTAWhpXfCC6mwfTa7ZTkB4gbGxar7P6iAN8DZLx9DsE5TL25GFahTj5RgEJKMCyDdu5J",
  "key45": "4wiA7Qx6yrVYJSeeiCgdBuzY37dP5WLqZtC67wuZVVnkLWr46aLaFEwoa6Adobmoi1r4DEtX1L6b667j5tQZS2ux",
  "key46": "4TsvTpVtNoNfev1s4va29gGQMrDjRRo9LhpDrk5T9751ZEUFBCpjvSn95SEV6h4ZDzcpgaZZJg7oB1D3XjjEG4S9"
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
