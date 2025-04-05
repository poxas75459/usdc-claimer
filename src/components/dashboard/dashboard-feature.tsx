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
    "5BSyL3sPESF4bozDiE49kHP3678X7wNTX3TCQiseWna9pRJmychMcWGA2xW4NoLGJbUqxdiSm2CeDXJJ67fb9YB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WJdd7oymQhz3jDP2dWtfg9NKL4WzUk9C8yXigcdDWXs8itLuMEzotfGcYNM3MdDBWDzzZjggMf8JasLMCsNBaS",
  "key1": "4MrUvnqHkMJpzJyvvWYsaP8WWy921BHgaKx5wQiRVzJXNdZgDRbq2so7jBsTdtZziUKnMf9Xzmr8wBde5eHSAyGt",
  "key2": "348RwjKNXAiZ7rMLC9urECvJSA2dq6FPK5YsoMgRBEKRyzW686bUFtHCT9wKj5nu3J3W13jYwxCTjeafnZCaecKQ",
  "key3": "wS5sUBjDbCxnii8vyU1xf8noXPiSvbzvDF9DG8zma3NjD8ykUp2m63PDGCbVVgX3SWvtEheWK3fDiEUSrhzdYSv",
  "key4": "3YAL1onqr83oKrVWXToRFKzu1xVvELevCbp4A58vREJ4FNT8bqeVaGEXaziT4Hpf353WHgrdHNvNMhLPAVxCiQmQ",
  "key5": "oGULzN3UEbkJuTtZSJx2GYN7u7GWCfvS2xoNN5BKTSUSWsUhaBUdTmJkae9efhWipZD9ntnfJSDjUxXah39ZViT",
  "key6": "5RNPxFQb4U6EH2Qat8z8A3euRjupyjYrRNu465LQkWLvfU5ZpWZ1xKE44xTkJxB4Kjc8kEKxR7NeF2rrQHDH4bip",
  "key7": "4fpXupRVfn2nQUPQteDppenuRkiX4SAvDpHPmTQHeXhuGhLTfKKY9eWtUHNPFk2iiiNQn9io74h8yf1BWRckYyL1",
  "key8": "2JXwpi3EaRjhJvL2HhiRmpeLFsT1dtRrbcWgU15b3UMegZndbZLBQNYp1d7GQ1PCx8KYxWGKjLCEdBY8nrqPUQcX",
  "key9": "29dVmm3KzS66pHASBgfqKu4RNsQqo67pAQkCaLJ9LyaeJ5j5oxJAWv5CtjrrVupzcThZGv4csnx95utj9xsdBr8a",
  "key10": "3iz8xxHaAKSrzJr6iYeBECa2oVLTh8JnTa3HMm2EAcJjN9VKn4NSxVK41ygKYEx2XRshsxQouU4KahUyFLX4c7ve",
  "key11": "5cgEXZcvJQ1irLG1ZCmD3VhxkWkWEsu1NuXJ5mGb1acPL9SaZUmG23Z9LGATKZBstj5pCYi86KZBEu5Mt8ZUKvr6",
  "key12": "3ptKZ4DBcFf1ESiCBT47KN28U8mYkautEdXZJ8oc5n9s2zTteUwjhZXG2x83HTFn1ioc4sYTCu54G19SJbfFNS31",
  "key13": "mbz8HjMoUWezQKWiar7bmWYJvnWgej3RM5etE7QVaqd24GoyxJ8QKFNLhnXJd9xocafUpXfe7TyTpMVTwjV5swu",
  "key14": "5gmZqJ7ak9CMqN96uMv1517jHpNYB5jqpvkdwt1fLyCnao6qyrNVwep2oXasfEgdiJbeErXewHotMdKJeqRDoXLd",
  "key15": "5yVLWFNBnuZZ7vEfdqMaiFPxuUYL8QPNGUJHvny8Humw9wmzDbR5JQ2kKdNdmtuyeRpWmDD8NF2GCXkEYz2V5spq",
  "key16": "4nNytKfGo988UUkE4gd99xUkdNZpJKdX4ZYny3J1pjc84w7bL3iwTfjpFU3ZwBp82xs6zqCkfykBmhwj6ZT8jiBP",
  "key17": "abv5VoSxgFjgooWo56UDkYC8cxM4cHyB8VXciz43jWBKSoNEG4y5ybikLrqQdCMpivx7Lbb9YdEEJyX3gJMUxGD",
  "key18": "39J76dtfQsL3tCgg7hNLJ48fCzSdBk1BzEhzhbCqLwRPR4SFFdsvZSikGtCxVyTKtBZiCSSor7SXvXmYfKejvkH9",
  "key19": "5B4Ly6fP2hrD4Ski3Lkn3uCt4JbTfeqgajqigho5MazxSLQapK4wPq7ejARHTPh53bWWRMkEaZRzDUB41kQ3faZ4",
  "key20": "4ZfydsWU6uRkh4xTbxbka7KeHMwmvhugL8QXhnycha64eMTw2wvoiSgwP6ki5moVqcdz43uahgLUgrW44i345MYG",
  "key21": "w9wS1KZBcdWQFkHYxZMBxR8AYWb973E9WZsZJxpCd6qK542Sfpsvv2LpivSSAMFVq76Ps7oRGucK55UJ88XAzUa",
  "key22": "4KzCS7tiNqS8Ju5LhCzwLCxVDorZeLJfrtU5kEFrmXHpxuVQc2Ugev3HtnCp3Yd1aAEtk861AfAuxzSSYsPSMqTE",
  "key23": "5oT9N8UTGt3k5VjdYRYdCFoLnWex6w1MW5uL8dscqCZFtGB4LRwmprQFWGSH8iwJ4YjkENhHHPUZHkNfkNJhSgky",
  "key24": "5n5Ty4uWZdxe2NMkk5doXb2F8sU4jtwAFEu2aDPH1FGNKvz1JtArecSo1Qf9V87kEda6Eu2bFC2FnbtxT7NSZqNJ",
  "key25": "4msTcxsFxN2zty38Xx4zgoDmQux2v5ptdApxj3Bd9HK8hfC9Tp4qMvd81xcaUg1TKX8Ug51Nf5GV61TUsmy3ZVbd",
  "key26": "2tewE2VNKh82udDDsB1PCp1mgAtk7WBdZ6iLzzFqQLWSZ3B33qqMSRAPd9Ns5GhGpFDZsquRiQ7AiaifeuUE9j7k",
  "key27": "DQ14RGPMA5gyFrRk7nPzgWKqdCPHvYJ27kY5j2js2vcm79BoSCZm5Y9jyiWAqpKccJtNJ23eQM2H9ft4ssTkd62",
  "key28": "54w5DyheG4DEtGHiDBTXLgDvpiTFHuvxsVBbQ8UJ9WHitfT3Rg9M2wwJUABGqGJstfphgakj8gL2C2DzftbU83ir",
  "key29": "4zghPi1HsdzgVpvzogqr3x3twAXQoYXHrLYWYbuTtQfHCDq1YNEbbU7ppr47D7MzsiY9qjKJA9yzwsf1fVgvut2N",
  "key30": "5wi3PyN9ziEq8FWhrDkmcdYXQXJ4eM2pzoTFyZP6P2gZYyLjkqjaVWYHSet5D7yFp26S6juKtVjAiqTE8zDMxxc4",
  "key31": "2pLWuHVnQwZNALZmbhyi2mFkZn1js2qepBYsrKCdiYC3LhE7rqJKF2KyW87gcV8Qkv2AeKkYhrk3EU6JN8PhMYnq",
  "key32": "ZbcoL7yMHeLPNNJ9WMhX6aZdJqszS6QNri2TNeECBjfy3c5fqtuXuGeUYGywHYzU3QXP2ogWPGUfJNBALEpo3zC",
  "key33": "4Ct7aLWKNMMjQNuhN57PAgQMkPSRKe4MrQgtVStEhyFgoHdhvua5ar5by8pZ6Ar14FjcGbdDzq8EmPxEKH5GhUh2",
  "key34": "4KkApGAGxQkbs2Hzi4vsW5mNkXGvheCPQ3FPTKSo7suquh2wdKjKtvm59iDe5dPQfEDvULrpxNbYhXueNPo83xJF",
  "key35": "5rpN6TQYUdy31CLDaupQsCTMgNAePhYW2J5cQXAHTUtgtftHmX3MESHdBizcWhLtg54GPftxpFhpg2ZfkCgY3Fnw",
  "key36": "5DkJcSHAB7YiJuU9z1KJrFAxgbjCRMZoxBRmfEGLCPsRJWqLN3jPkqU6T86NWMAY4KX9Ls8C9J4eD2xHuY7VbwGN",
  "key37": "fGyE55QnfS4g9hHeZiXP5bwTcwfZ6y2NYknr6Xj9sx1XnSKriWn8uXcVsDTjo6arnfL4wVvNYEGK5XYEJ1hmAC8",
  "key38": "22ZPsfJCdpANj5N38Pxx4q6suomhUL44E4FjcmgyaaVxj49irXfMyFUEkVkJoF6ZNiU7pZKGJpgEK4MHmGCmZvbc",
  "key39": "3Mh4K1icXVfUC6PHuGMP3TR31u7RyyTZTY4TSZaViVrHf8kafpjtkW1SybE2ccv67Mv7dbRug3iuvV3sWZ4kGwbF",
  "key40": "nRqXrBe8zVuSRpgTnX8VnGuwDuaSdfh83NH8naWwqXGiKAT5rYMwJsroAMA4VisMxV7Ykqjn843smu3g1AKuX31",
  "key41": "5wweu1MApPFTUFYfhMAaZTtEaZpTQJU9FeNA2W5tNV7cHRmKbGpiik9s7xy5bY5AWhcfpo9JBpPXF528nKkCtSXA",
  "key42": "4Qr8MU7WAaktdwMGuwMNGnYHCKdfAan8DGQyCmgazKWygmV2xtcBk8a29WQkYumoWiXtmmKzFX6VBoPRZFyjF2oj",
  "key43": "v2NDx37jHZA13hMViXx3nKsuCpTJivdoSS72gPW7x8TpSaa8sMdW649HGQoAPMeRJYjme6AyHDSxPx3bUUMPYzr",
  "key44": "k2e9WKFc7GHoFKWZPzNBozs5k8JLmTvCtMkx5Mk2rAgWqyQbFmUVsKEQv3vxpArzgX4U69ambxnuTWuu4Qctt4z",
  "key45": "3cgNrrSBrqkvNCjg7D4ZNnHHHSSvuHtSdXXMN8LDECxMepNtBTTABUykhSEUeHfj8dMe3SE3cKzTYyuVWUHftqWq",
  "key46": "3qiPpLfS4GEVUYCDM5YpTSzBvPCwSDBbdZ7JgyFFLeLFAN1rgaq5DxKxXbsRenMatyhJEt7x9Z7qPQ5mYEBAsZvB",
  "key47": "zemWCNvgmNzymGXaHXLy2HHrZJzdZK3u2Q9VT6jkZqiWoMEX6bp61AbNXtmoasZKw7ToVMScejsyyQiUYDBexJ4",
  "key48": "44UC4ERCYN91YMi31B5rgjMdT4b6ECsXsoUPoRUKFo1ei8e7TteycF8H1SZ5meXSVSbMWTtEDUcemNE1xqs2okmh",
  "key49": "2mBxLPVNVyo8Cm8pZ2myCtE7pweFFMZT29nKZ7Bhms8yKz3u7jm8FRuEFvoDusLV4z8jvEHdRayQh7vTqZfPa2NF"
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
