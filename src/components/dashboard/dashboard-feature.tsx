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
    "vmdH44rFMZ75oLtDztYUK5xSkvgsMLcg6H9jzrBj7wVWd8DM7TBfvDFtSR8UML5TjyKsq4QgfXJyRH86Qzsty1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YN85WeTp6w7Rj9FonqdG4SNuZVf9YWZE9gWw7AAbQBUr1q1LJBaoMUUzHoWFBpr7qtgznwAKeWXqH7KSBL9W9am",
  "key1": "4Qu1fARwmxJSKYUpdMogEYTsxQGyHhX1feK1k17esXxWQf8t93WZFRAmrVU39T6G5vcxDewPSY32wedVFQaN4Xee",
  "key2": "5b67PPXqEBDnoyBYTSuacQEWsELSqSFKqUmPyxxezd4YUHHBSXtBzB1cxG8Ph3HfWUkDRbNsQnF24E6qFShCkzj7",
  "key3": "2DZz7bTYdX5gfRaT8LoCo8nYfLnTWiGN795rivwkyzUiRUaSgviHGsrk5e6ocjXa3pcDRBdG7N5msThSctCdJNX6",
  "key4": "5Gt4mo1ceqsZaSdDnYK8BcxiLHuzjYiNG2aQ6mSRZ22PuwKYVSS99YMxz79TPJBhXEJsoRXKW1aaBDGFcuk5FNxF",
  "key5": "2NMRTJvCUea7rcWuV2hjJK2A4hEXh2eDN2Whfiq6gSazeiwW1LzrNMRNCcEnHkpiYGpFDFJ9hhebtZJNcj31Edev",
  "key6": "3zP5smAgW6NVP4L8cn1u1HTvfRuQVPWeYiuXnwNcgJwpM8BznA7ji5KvGy43dK1miWpabebEaBtsx5YodreoCAj1",
  "key7": "2roNfNx7nFjci9jt7hLBK9hZw7zVNd8XsVbPMiZFn99DzGE1bPhAB4xPzDkKzApZxABos97yMty7t2umCFNrEiKe",
  "key8": "3rLHmSvZRGwoiKFw6pVUL4UsrRjtPvnmiCj6ExM7hMDG1tESLDvTVLtgkjAmFD8nkp8CZGzjyeZiL4x74b4Mh9yq",
  "key9": "5G5hbs7VMyvpQrHZoYsU3HouYcdBdqMbkUFY9fFmY5cNELhtJhTosydRC15aFHvWD4jK3UwgGNYpYu7Z9jJBvkjJ",
  "key10": "33TYj8SS2R5rt8UArmBuWYke1mowUkvynWEXoU9ey31WnJeQXYSjBjHw5qG867E5BdrKfQ6YhfeKxM8WReCqapmx",
  "key11": "52nU6CdYQAiKV4858NzaeiojRwVwsve4TstKGge9hj4utr1J74K9jvzhRChQGEne7o8vXj63c57BPrj7aPkvMrkf",
  "key12": "2LFN4gL4eH8LGhRwHvNRV4qf1m7L3RCQm7HDdf2ETRBPNooeRuiSEGzbYsKirebBPwi82RELqbgSpaYnWx76oDCu",
  "key13": "3Ce9jVrKNYTMCFywtRQbvgsowSyqk4ksCXaxFUc4SDw9B6hGbLfkQKnyna7zF7Qb2U9fP5fbx5yfn1dv6V46oBVC",
  "key14": "4aQNZ6kWmjCHNtNx35VCBTw2SNpWsa1QPkXBS3Wy3kNmykJt26V7U946kTMmZsR9qyLXR6qc2DgruwNx1GVoknjG",
  "key15": "3NABU7uK2oXksGYHdCtycFXA2JTbdYx2uU2ijozzXsk1jvjPHbJa5hjHBwUxz91Gp6GQadaxWo7rCbmM4jWaDuVw",
  "key16": "xbDvVAyhmoCYw4MaW5uKcVPxvohrmFTeAmct8oiAX6LVzcoMWsvCvzbw2idfxHMN71r5UJKfXAFJ6dAtqwHerwh",
  "key17": "4cseUZXmpZSzGdcjnHqZwDNLUF7WAFRcyryiQE9VAtvmwK197H4YWk4GjfZsdiTKZDAPdGmvwuoGaVqQh2dy5LBj",
  "key18": "5Qdst3hmzrFaFzRBChNjvzC21BngERvff3tLxZpq9F83T2VpuCyyRpU6HatQD5GZRHgNt5W7E2NHvBCUB11JovoA",
  "key19": "397uFDvM8HuShE2LunD3ZqxdxkzNpvcNLw5AuLCDLh6RDaF8iFTuSkyPdzWcMPKi2c6pk77JtnefufVmAnu5oPkU",
  "key20": "4NAXwt8Bd47mpyvHJ3pHt7C66aVg4DXufz9XZU8uAV7FdGGdbWaAnk9qyFamHzb9FWVmiiPgtX9KM42BxtrHCj9s",
  "key21": "ehY6ioMKmffiksRhQ9Tk3Pa89vPqr6pfqaH1nsEfyBeVqFG2U5yL1oBA79NKBbjGb16LqWNnaLUgY4s7HyyMxr7",
  "key22": "2K5rQ99Bcvey7iK3okjxJgxH5fPC45g1m66RP3CWGNaozYu3i3oJgGVE3NyjQ6F8HquzpzGgHmb67MzBpxqHYmoZ",
  "key23": "JhD5Fz3bP1cwomRV325h7BMnzapWQYAhbXK8od8dA3qCSWNDwpp6i2ieXZF6ZLHbUJwbpPTGMtH4upQZTQNv9Ku",
  "key24": "obPyVWssBmLCQv1yoe3wLM7MUiggvDcYyKNGWNymfAws8FpNSNtUgdsDkVUA6dtzpEqZ8dnfocw73beGQedwYMm",
  "key25": "3RYrX68aF27GtUDZqiG5j7H7UTtA3N4ghNGEKyXoc6ync2SpvqnboLD2z7Hu2sHJifPX6RxmNbgmcAidHKh5iyCB",
  "key26": "4X4o1Nq7MW8QqYvk3gcd4pJS5B89d8S7mBx3aJUkkMSK9iDDyG6KJEYqTAyicYDffgW1pH6RJoCdHyirPsHHvMwj",
  "key27": "2yKovTFytsuboxPwYgQLZWdcFk9yy94ACjxASPmifAoz8MtM6YuKquq9P9nVTy3NKty44oDaPnjqxibRw5jc7KtK",
  "key28": "5vyyWwezKPApAucU5hoPwZ7oMhMjnoBfgMrbN9WxMQyB4P2yccwhLjmwaGNZAefpuU5ahQDMP9ig7Nps51hiMjuY",
  "key29": "4xqBGt3CEhoSaC5gJe7fuFiVQ5vxmiQFoWcJE4qa48BPDFcdb4EvaoxKWaRPSivxzuQojedenoYM8uiyZAWtXys3",
  "key30": "48Gxxb3X3NexuPvMTLefUoNpT7yXHPEp5LPrz29WhuWdQ5f1DYdpUxJDj974gVgzsF3eVpWmVP8fckLqVVZaTuDJ",
  "key31": "2yjiJifNhb7C6YLjUGnjc8sVsv35UDvHwotnk4gauym6Eyai4DxkWEw75VPfica9yjqxe5F4dsLndaYU6QtjKMJe",
  "key32": "625FzRuTPYxCvuor9w8WdZHJacrgjZVUes64GiAvnRSpTGaY1AypYs5XcRn3cVEWewKSFtKGTeF5cD2qQHLPPv3h",
  "key33": "4i9tdEu25UKhfwjK5qYkKraAAi175jVwy7DBTvMgPGau1UsnYRZPUxvmKd8QSvdSuE4Lr7CviufzUuowjizw6TY9",
  "key34": "4fdq4ZQ28rhqDgKwbcq8r39cSKMARSpnfrv3nxtY6hcVJrqM2AXs71PfftJU445gT4nw3GebjHpYxH9K53gHQL2c",
  "key35": "4ZhcnbXYjBNyytWEQYKN2g8LWtaYxD5UEFvaZazfv7sE6DSYEMnDFZka4HXZGoNg3Eeogj4w4SAmFiudS5SiM9sB",
  "key36": "5eENCh21meotQyHaWbVsiB19a62rcyJNiBSp9EY9Vte6Uruu4vj6Atin9g3uhBVsE3Tidh2egn4JU2orL1vPPJPC"
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
