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
    "2G9H9cXeKxCsRrwHyohJvRaNMUwgnPmKGTYTyiXUGCRRjoRhcAsRH4dere1NgvTjgdjUvEYfyUx46sdmxs6kPvXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YmsesxASPPdY6r4jHrmJpTai9go2Bwdc1BdZpyCApXTFVfqdB46C2PzgnhPV6sDwxc5t71hm3sbwopVQzbGAyUK",
  "key1": "egvYoyAmQUHF5KbSBA1oKKMXPp1ngjFxRYzeeob2EcCoL9AB1w52RkW2yJp4EaLrRjmH8Ga3juUa7fw5VGtBL8T",
  "key2": "52gec1mBZCe1H6aoaBbheCt7fe7UT6ix3LM4Sf1PADyvEmJka3t3WLoHWBmUTVVH6R3YeAtEtnnpRDmDA51jYZ65",
  "key3": "3QBX1LYBJdvKEFh88KgFV2V2UKd7ESZNNyZjxNrLSRkKigCYFR5UeeATTeP2sGzVCokBwqWckB9VGPdDeQJDRL7B",
  "key4": "3EjU5B8yB2rYGR3Uq6mKFyCsJJxGDLPJeDBNsufTQpYZYRX3M8Mqknk3SARYY7hivtaWtnHgBcAvUHvz1xUTddyK",
  "key5": "2jagZQGE14gPzE2JZUcqUeXBFfL455CRpSrS7Jj3zG2CKHQgp1ifjoStuiY9isnLqnEoTVLfd1ht9D4HH9URAB8v",
  "key6": "3TyCsuGqgUw1N7q4UiGWooFWwq2Pa81ZJzJ68fEMxb5qNp8zH9TwYbD6pG7ofq58Sw5Pdx7cvBynMFs97FgQEjNb",
  "key7": "FWbUqRBV4vkTiG7oYGDkCoK8qeUsXv3yETe6ZKP96EUs9nQNirZDnWUiKfh5iMukakGDG2Xi3XANazAn3AjAguk",
  "key8": "426np1ErXhUBD1istVLM2atj2fYsZerGK6T7QumcYd1pDD4yt7pU3VnnTwXJyGcEHLc8i2oT1ctRt3D6GW8nfe7f",
  "key9": "3AaWua2w8JMej9jdY7b9fyqKDwtm5GSSYHfg7NAY8GZPxqxQYpR6q37mvchd4rmhMa8gBgafgeMZH7GHxF5pL5NP",
  "key10": "5qP1jvhmgBMzGehwLfJ7o7bbfxHzzUi4eJ2LiMu8jYCFbMMeBXqGhy33UEHigzQVsdwPAqdB91dKVYpZKcNzZj1M",
  "key11": "2XrUMv3wN9dnXve9DLJVvKGwJ9fr7GNnyoDWB1CCYHtuHWtbnBbrxDWTswCP4frrVAcuuk6Hz1FRqpyusuMHxU9Q",
  "key12": "5aULAinssfy9tjkaDFuqJrazHao7yvaBbCqF8m8VURZEdFKHC7QuHfKRmqGacWbJcMnD3kWNPvdFBGfXhH9qGeGo",
  "key13": "66TCSVYVNvUfQJUKpGKqWmP2wr4KoFUnAf9MT7Ky5apqBrWdUKATe8USf83ydsrKptHvmRWwAGYgigbu8vfcb5Ru",
  "key14": "mj1BWNtN1EzCrgedqyQ2ZtZ7AhQ31rwxfdtCcaV5h7qGLgqe7RC8nD2qmzTHQm7Vu2Wnc5rtGqdhzdYhmZGUHcp",
  "key15": "4ZtrkgJUYXXer9HAt8HwwSkGa6o5sV5YEmuVfaU6mUvcgqXm79PhjxhpUUUGRHWxfgDpFm7RYE8pdp7HxE4Ui6Gd",
  "key16": "2i7ssfxPzYSM513Eam4Ku6SVpumZWkyAaV6Bbtkdps3hnJYLdgesQfFpoTbdzu5pGMDwzNcLJ8VRcp78RbgPzF8J",
  "key17": "3GcnD9fErUWGjXpcRgETSChByowduiA84tJSeY4SQUuh9dKtTfP23DXSBCfZnxCpFyNudZod7Zuy2TUZrUraJPBh",
  "key18": "3xPUZSdrWRUSxWpXGa4YMKDvwJF5F2CweNe8Gmo75XfsQtwjpRBFqEeqrLcc2bGxADAxBvUvaj3ncURhQDBxsv3T",
  "key19": "5j2RkT4S4tqzd2DamkkXRgS1sP9aHo7QtXGuLzBNooxUGcdq6ijULygQKzVQBcKGsTvFveopwmoNwN5rXhkgrbft",
  "key20": "5qj2SA7W2qfBcziwktov1Lx9mZTa11LDF4PF2ATgTuWKzXJi4duMwziz88LBsfxJ8CaYU3bEQxs3H5rfwbDzbqAe",
  "key21": "3gkBFDowrBGoQawGXP6MGheJt5ZLjRZxUhKVwndKqoNEB232vvNrorEUqkoUT7UnSE23U2YtM8dii6qP8HFv5YCL",
  "key22": "3z9tPAfQfU3gnPg8d6ZxvWZGo2mSxZ7M6DxwjApStdqhA1iEZt7pNcWTHXG1Zkukdaxva7LtKVBiCvDrM3oePGbQ",
  "key23": "5FTwnuDsnh4dMjk1YMeuoLHK8U5RP56d36YbjmQmjadGuTM9iazfbZgMSA8fUtyPUtxdxzQFBHNkDdGmpv1k2vDj",
  "key24": "5t37fDt2UkkfpLuHVCvc7yxphzYRsNwizCcwQMhouPJaXajuSPryxFUPo6X7grP3ACZhoTbNpJTnrhpVs1neAzJY",
  "key25": "4Y5wMmWb3Wtqux828xR1HBoFoU4VC4Hawz8qXuT12sY2tCTTDM3YLYvmmmYjaVfau75uYv2PRd7BQQe8TK9i9GPS",
  "key26": "3eCaTt4ZSbTu2qNXpxGkuMc7UREAwrWpN5Q9xHhU5RY2dAvGNQnAe1wPZe4uNt67T6eynGcDDUVHZYPiMtCLWsCP",
  "key27": "4FsKoXeEcpE27KTPdFqgEK6jRcKG9moM9XW5b58xA8Fpioju8CVFQiGsNLK5tKdvaYjFYdfbDGMRxePic5i3rdQL",
  "key28": "KnQNsb1PC5sGjECRQ4cJdLXs99ndDEKDbKiTeB8kiPgFCKPrkHFyL9RUB8e3xpqBfMvHEXVpinyRD3cgzrWZP3C",
  "key29": "2Dq4YNNy3BEAHyfFgHM2JDw4mpKtP6UKT5Yk2fA2XWbtWwLq6m4pt47TLzDWp5vDvX8ozbScZmKVbPLfZgwSgbb1",
  "key30": "5TQbC5skUsbYHrN6JLXFNYBhp7k1tpA9ax8kjECdiJ2FVLvZ1ye2SyFhiYeuwAgayjDkzwsh3JsA3g66im3UMztF",
  "key31": "4AshYdrVKidcuXj33ohyrjodVnnkZMkxP2a8yucND8hPKcDdV2qLFDbSVLcx4M36u7L5Pu7i8sn1UXa64GHN5hr9",
  "key32": "tmQse2HEtcppWFwyBkE4jd4eFeg8sVSJfePaLkAtKdL19dVCVrrLpXzzTGgejWG8KjF14NvmTY5dVCyEpnQAfp1",
  "key33": "2nphgMahahCNHhaXBPxcfs7qLgz1Q5AsSytzdvvtxzqCTTe8A2vXEVKe172rvLZCGoHDaZp5k4jHs697LPWyr5DS",
  "key34": "5fNYZca2kSSZMz1nJj4fZPPnaTuTcK9gnSekhKSazehBSWCPxEgjvesxxbX84GWmbJm6AcvNdyA63hM7hLzAYLEs",
  "key35": "YrvJoBUmB2NZvCtPYcSqX8ASGFbbZYKazD45gzPH81pUrNYCP5kLEgZjohoBugxMm5DfrgSFSn8ubDtL5BnUrKT",
  "key36": "XjY5vJ3j368T9bqzWHVva84dT4FwbAQ4NFpJ5e3uW2bthSuqJQHoy5NG4jHE1uM2T9dAdkLMVM39gS8bqspZd8G",
  "key37": "FicEjdmQb6H7i3Se6vM65NwMZLGiZLQZESjv1XNCWtWQVddoyDdifg6BG37Y5h3EAPZ96DXx3RtR3dhQR8Jbf63",
  "key38": "596oeh7ss71FmFZey6XkNE3XdmForUMAGiMCJP3mnAKGhX4K16b3kDgMzdg2AVhaqqHLf3LMTc64VPqm9g14GBED",
  "key39": "3N8PvVM9RjjohfkT1DWL5t14L9GPWVSVv8Tk1h94Kh46CFeFdgVFof5iQDRe3MDvJrw1pmrxL5CcHj2Ds6JnnLCk",
  "key40": "484nhgXZ8cCQQvWFiWM5KgjU5RzHpd8uF5kJnV8WBpMJkNAxYjjTvJ5u5d8WZTQxu9owSe7P5iifgUWUzrwi6SBm",
  "key41": "45VpNW2KZTNb7a7WHVVHgCvJtPqsd6otctrCZ3frcLUoQNqk3RZgHv7h1DhtRucz5JYT4mit7dQQ1RnKknBQykjL",
  "key42": "3sE8yu37FwAxsdHtaPL4EbUAjnSkSbZwevEAArgqBjvw8jkDcyMJ3wUDrmV7w8YKmS2swMnHsbowHiiLTMTwrqZw",
  "key43": "32rZ3MMAzWX6DjqFVoVnWxTxFeuGmLSAMLM1CyRvYdmb3RL8CG5jQNVX8cVhuZs6dWwfWuMTSS4nWVkKEUEBuDB3",
  "key44": "3MHwYojBa7fwrYTKRTTKT8LcKgJVuAEUfzkwWXaSBRPLmagRYMHgzpMiUSz9RtonWkicoZRKMcp1TLCKz9bbHu6K"
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
