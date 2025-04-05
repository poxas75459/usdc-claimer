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
    "4772Lhobuu5XXrcW1MP5RZBi2kVEe1b8mqgVqddSxdbc1BCSPGiq9wLcSsXMCjinndo1Ko3TgV9Ykd8gB3TYcczi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nbVuFvRXfekefirBNWR1MNvFEtMzMZFB3KJjmdPNgcYjxDYQBXPLgtPTjdsd5HxwwzSmtU8RhiJqdcmfChH6uN",
  "key1": "2nBQ3hE9v9gdygQwB64vUp1tK61kpiH2CnVKy9VbtvWHiMBAPaUyM7GQmFBQFz8zRiewTTkc8sNzrmcbQC7Hg5GL",
  "key2": "2A82e73YdTxFr3GAQxXUvYVX4Vs29uVM5c3WUEsQL2wKVGs4gfGmhuS22aKKNAPrDPgrqLH6FCmRufDV5XDGUkoQ",
  "key3": "3wdFDpfXx71qGZW48DW8MVjp7JeKAWShx9kHUhFKVRD9z8qBvdTE3yDJ3RG76uDBQpQS7WkpNkiRmWtLmdsR5Au6",
  "key4": "3hrBygYAL9EPBo3M3obnuPghpmhPsJV2BufV2cX35qbihPQ4poMCK5McJD8xAingXEm6Ftk1tYths3FgRe9YX8Yn",
  "key5": "3LFKAuguAC3Q2gYKtNF5Y5k1oFowFvhPTzZ5JYDpTaNPs7j6yAsivQcReXG5Wm1uTg1Xb1dq2YtbVK5wr9hkXADJ",
  "key6": "2KRhQQbKT6YwfgwgbU7oDcaEny8ZngNwg57xJsEzNkXnz39NnbGNAT5rvC3dmqiY8DP9WQzYXU7qN4mBR3nvxb2i",
  "key7": "3mzYHaQGKvWTwGiDSixLsjeZcFU8224WbvyG1n5QWdCDva7qmCU5ZV3dCddhNjkwm3owN4iy2C1oU4GQRV4FgJR6",
  "key8": "2spuELQY7wAdWFiyqF4XmuDnVSGPxeYyXbie8PxFqhVHoqTuPRVZ53LBYu8bju4VY9gXN7CyLi45AyC9sWZTR1dy",
  "key9": "49bhkDNnz4cueNgGeuCZJ2HxuLRiyKkTSzTinS5orgNFt1NMqdiMdBPU7Nk9nS6tvpD16ZDASezpQchSZFJHvAuT",
  "key10": "bvFNCpLa7wWZ856uWir4fKispAqZLvWkJNnQytku9EGFMxWt2kqaxdmsbjEiYFynN4dvu91W6GEftVK1pcR7Frq",
  "key11": "yjb7TEDLujaY4FQbCx7HHMokEegijU6yXcG77jdEzkzXjW1ttNRmQXQ6fwnexADZ87HkgBKiEbyiANH8AWk2HNh",
  "key12": "5AdangwQvWH2F4eUzpJQwPvQggRWGo7uAizkF3RNrkFzdGNH3kE6FsE5KR8y6XREA5SErQKp87eA8JYTkG13mAEv",
  "key13": "bBothybpug8X8Tvt8ETnNY6o52WdNwdTRor5i5FHAAQcZynjPyKUWEF1cMGJtrQkHSEUVvdmvbdRfr8dKcFxrTm",
  "key14": "wyRGaVoahTe9i8opV7QvjPFJoXEmbHyPXtQDPa4XE8oz8bxiwzcfseajjjWffLjBgnhLC7Nw3kQmk4fgvU8nDGz",
  "key15": "5HJgJQ6s1YMBXwb5ePYAAQm6sYoARx5MqzyhTuQsB8z9qwQPpMya1YR824YdgUAgYCR4WXMHKfHTKshDtTFyCCu7",
  "key16": "2MzwLsbmEEyeFr68FUStSiWewuvY3anue6zUy7TazShdEgo3NtXKexLnGeiiHxTKw4XnaKctZWk82LLTv22EAQ6B",
  "key17": "32BcTrdwGDrPvD8WZ9jhQZc7ieF1W6P6i5M7kLRuoAr76Q2BBAqcMR4QhvQ6dpZnbVSTDe2f8NepudKwjjE38gSu",
  "key18": "5pJT5pH4fzPuzfKfpE6zZKmVHXYJEpMZyuk1YUi9myXAxP4UgRfTGpqqz5rV8eNnGnYio99F5xcCv5qKhXobJeVx",
  "key19": "35hkGbUVSHUiy85kKq5ZrsjGVMNDRUrepdNMXyBkQXCyGC15q2axWE8j2zm7HN8eWUVJvA3UnEuHAt5Y5bqvanvR",
  "key20": "2xKiQ17Sgr6TdMGusxU81etQFZe1bPqjkTPB1SwXGJQnGf1hujauJJbSDKpXTqTWrmL737iqNnpF7VVqFDbZsTk3",
  "key21": "5znaLhVb6sUocEZoMZpodAa2mLcSbe5BxMGUWqcn97MtJxbQfZpNG75vnTR14xkkqHKcLqMzUx4scwqCB3MtYYkx",
  "key22": "2NWQrvWvgJ8rrpKJxr7NswvoCaiLp16o4FMJ29vTDS1FXM7YYaMN7gVjCaoVbxqc3amH446jxLGXUG5qK98UZJX8",
  "key23": "vwyAp64g6oxihntCMaMbGpckm5D4aj2esYzAN4nVpNR7JoR9f5rHAeyi5e7ZNuj2cKoE3TfTWP62ve6n7y9u4H4",
  "key24": "2bYcwXYHVBDU2ZK5XpHtSDJ6whBxQxo8gkmz91QxGEiTLp7B8UJ6WxpLxVzJvmadiAkZrDR9j97ik5bJ6N38STR4",
  "key25": "rWfRkxL2JSSkXE22mve236L2F1Bx5on1g5wx2PKyowHu8x2giPfuggLNPZkoskegnT5M18pzHQqCz9mbuPe7XWy",
  "key26": "3ajMVbyXgQMn32Yw1D1LeVUaChUYmS4P1P2pppT2tnZAmNCkrfgffKKhKmar3pngjrmJZK7ebwyhi88Yqt2HiL5e",
  "key27": "4Kgx6cCRKw6bXp9TcGMVc7v1VxoMZMSUhNBPEQpXSLARPQAwDB6aXL2qA528LTJyuwGJGEPyAzer76CG3NFtkkaD",
  "key28": "4QzpLdD2hEBgDT9QuaS1uu9GUDmXwUc1zzfRb2imyYKq9rpj1M8aNapdfuZ18ixYyJjpapLfdXNMu3r1TycmgAVM",
  "key29": "2AbDhWkq3iwXd7zq6p2y2x6XQu9eNsBEfG6BddPdWLH1Br5w36jFeUaRTmU56SiiubRHG3pzWemQ6AHFVxkbMhyd",
  "key30": "3aNBssrokCqm7eYirdsKiDfhAq8Nq5Ao33ikYzs1FPQSPQaiWXTjt2zNBCa9acBqwHPUcfhsf7gXk3T7J2Fci73p",
  "key31": "4AjRqM8sMSscmoYyPMtyumpHv8wunevnnYeJWL1qLd23sTUoJWLXbGEcNkCM4yYQ9C26QKGT4PdYpRw7VVJxWftj",
  "key32": "2zbcjdKDDWdveqTJ9fzTHEsYfVkxLS4LsAMfJLFEb8kKfgZcPtEQVUEqttxSkRGWqxMMKCsxrC7yXyhQHwRrpHxn",
  "key33": "o8zgkxaswa7jKBqGefdVxk8cfunKRXtZbyJXBjHprXJxcHpJAhULvHTd67ZzCDMqrboV2nQpjsgFuzQvFpjojTf",
  "key34": "snBRYrGCH4xzaZWKNt6dxey1CNnf5PzyzubJ3W7XHVcJAhdzTWNqv9QLKXQFMAFNeZ8EPrFgL6SVxGiMS6KzSTs",
  "key35": "h5zFyGDiL1QVhvhdGkRPPtdNerZSQrm3BkpT83wRF1UVy6HH4Vg9eRHWx8C1EQSr1VZSsQq3mQKPNT3HW6Sdvar",
  "key36": "3suMwtuHTqfiNQsPWiXAjEKDSHUVrwv7gKA9w1KqLkUA52epg9MKGVBpds3kA6Xhr2Vsjxk46sCm9GGD27XuPJpX",
  "key37": "3qAU6jycqXEx48Cmf8RCCEG6NHVdL2fki65kadNNCJb3TzBEVNJc94qBSA5aiLJQc2tgnqynpV3aysmek7XCfnLv",
  "key38": "5wA59m8XkWwiq5jzVwTcJkdsYQ2TCEMXkKH5U7Se2onpw43jAUJUcasw9nPCNwfWP4khvaLLvGsvjNV87gMnX2R6",
  "key39": "4zyKRR99RrwrXLNFiyoUEfgvtyEJogetHsbapkdM4vrnVHaybQTPJ97f6iRGFshKzFQxPZZaPzYBYKbHr5pGSpaV",
  "key40": "cYD7JEyqjRYV4eb5fnTjmsyZWxG7VpQbfFwSsfYVVyZ1TmSCR9BMuPWFnZKmeXvAh65qeRoDpXaiP1HCkMQY6aH"
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
