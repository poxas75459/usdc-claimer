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
    "22ehWmqiK8yV7xthNd4WZk2FPs3pPbMAap9YX2n1gNTsYgVG7anRmuHyzLnrpHoHCXBhNB9HKkCjzBaSq3cApNQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xw7vhJxuFWstE7HCxTbLXGKeTxvgpUw3XFXNzb8UtP9vTxAxxpPhmCr2X6AufNYGfVvDqcv4mpAu2Z5ibCELNqi",
  "key1": "3654mXgMmp3nCKkzCqaNmwQdPaSeXKL4D8xWn1iwkfXRUSvfHoG7nfeFhpeRX5iNR2xAqmm7sM8zxAr4be8xQ5uf",
  "key2": "3k3Xhj8FcGp6dw56bvAW1qvqhao2RG54Qy2j7YyiDsyMaUrcDtzD6SE48YRauYuaJu58XotH5jPSNEq59DmYfnvU",
  "key3": "4b2yN2qUuzeM5sJKb1NBH5fM9cSZBJrhpUKKHp6S5cKKvLTEhbiPrD5T6Br2zXhb63Qzt1DsqhngCXXYaA7DMXux",
  "key4": "asHS8Ni7YGkDXG9dExUo2kqX98EtGCbo8Tp6zwj6ffBJ1Ys7E1P4g8avf7ivLSRhEgqi8wtrAQvAyNccKMohRFt",
  "key5": "2LPctNQQ4GX2z2VUkY7WsBvHrU3h4rqDxhsmLHNk8aWDuVwLmqiWDvmDqHLqbRmzCBeH6R6ukViugw6rR1PHA3oX",
  "key6": "pRhkp1XGQt2vSGkreLPJYTJM59moJkVDUAhdCE6XX6d4n4C4dgtwXeyvTL7JLxZ2PBGrfLaPhPZ1CVzyKwdEAGy",
  "key7": "2rYLP2ec5wA85j6oLrJMFGjLNKTWSvK236hxN5YrwuNNvpFj32bFFd3QrqpqTjQQHkNKHm1DqPPwg8wmE4tEbcoG",
  "key8": "512YRWR2oLvP7SFhTSnCuKGCmBrM6G1J2rS75PiiKeaeHPsDKXFjMhMm3guZeYrU1vgb6R1ydNAMtkDCQAh4Tm34",
  "key9": "3Rb8ZCmHHb85u4kF9nGajSESsQAmavs9YaDxCiutyf8zNDa3JFLCeqD7Yt7dHRVSZjHYre9iuUuX7YREcvLJR7sm",
  "key10": "4LRZVUyZvPDxiUE8SE79dX3Z3PPtqRw3jEkGMBrha42VMyMFGhiRXkFq2UdK23f5YJ7N4Awi93BZ6zJgEoo1RJV7",
  "key11": "5gdf8e1XHpweUM3JhR1vtNEs7djqWbRNEsGdRr5tLYbtyoJhZh7drVnghEjpZb4k6dWoiMRAg1EWSJtmGbZxEEZd",
  "key12": "3DTW2CEJsVpRZWyr3wgUDstKhpSq3Kpg841a8jZzRQkHSipzgka2m9W5M6M5evVATH8oRHduq3TSsimpVkusC7Fi",
  "key13": "28LhS2rpMWMqwn1NY9tEbTBLueiKDFrtKphDzqVgd5y4tEXsSR7pcGgtdxGWDx9eFHw2oKWWxRSuswm5oUnLwXRQ",
  "key14": "59a2s8hJ9tDi374xj277EpWnDQd92hEb9ydAeQRDpZ9Y3f3srvbL7UwaiD9sRTzmgidFU9hZnD1ZZFQhJiVa9GLC",
  "key15": "ZBnvi8J8mjqa4H2gsZWLC1G5ohBK9orCzQZJru2ECWzpUn1F9MZbPEWUMWg794g2zuyJHwa9zhNBFEUHYAFmj5b",
  "key16": "4xBhJhFtS8NrSfARRrUaBh1GoAYfZThC7Uu7PHLVehKZntXMN4Q8jSSSmzyLjKRPq2tr8qbaeAK5o1oRCFwqYxyx",
  "key17": "4Hkqv7cgx7ysmzRu1SFdez5oGqwpuvbmSuVE5jKNt5cQ7JMgnMLDMc3GkUVLuQxWJN2Ug7ExC5DkXf5uWn7Jn7N3",
  "key18": "2JHjteQbgyuF17XP5tdbAPdQ4G6v2FjSddLDXtJg6VfCyLyg1USsnDFoyi2fBvywdXo1w8Y7GyzJ4dJrDAZPThoN",
  "key19": "2rJJpytq8psAYg8J7mriRz7f9yuypM8B5xjiQH2psmkS9tZS7N1d4mR2B2wn2rNCab84QDtFKYApF1sj9SHTzfho",
  "key20": "2gafCtWyxpxxyaJh8nHQ4Prh39hSyYUE2tBmZFzJeYGwjsTbNcDSMH4Pztc5pVL15opFJCJQGSUwSYvqNgA8V2eT",
  "key21": "TiNyp9Jbnaf59AuBkYYnp7KJutzpoZaa7eqijLyypb6YuYJ14WrMMZL6NwsU5UQuyP59ZPrqjN6eu3opfFURoeJ",
  "key22": "265xJzJ6Q5MSef88mUbv5TShLqKzXin6WSmXviFNkdnUQdgci5t79T49f2NpnWcGYJHjSsZ9NAZBX6b7e3SN2exV",
  "key23": "3gf6VweZZXSLZbiKwvzWEm7j9brDf8d7H2LXwbYoU3vP3to3wouvURr6RuEyQgmCga8J71NdSH2YnmMiDKq8bx6e",
  "key24": "xKWYAiJB3cnULBCuVKg5rkrmpiiGF3U9diazyTm2uDxq5JQDRCvSBP5nS4AdQ5BsymyqNUhXaafbXMnduFNgBu4",
  "key25": "4DEa7R9QZ8VoSrccLgQ1r4jLvsoebrpQasWWJAW6zbnGy1TFARbTYJSUTGfT2Jedixc3dgR5dXAoUAXe96gZVJGp",
  "key26": "c8wFNvrAYmDLvENiQcRS5KMw428RRepktmk5RdeHVfXxxLrTkDj6umn8CpFm3jPtcFPoBr2mVHvTyz3CWLryuEm",
  "key27": "2w6wPgWbeH8dJXNT9RQV3ix42XWLx5MHHDWf83agwYJNXA5DAZXM3SezfuBYbnaekspKwssHfYUWLPYUQ7r7mDhK",
  "key28": "3D3GTHZs6aKtwhGehFgpkhR52jWT1bnjDcTfLLhxUeVdYYbNNEqbLJvXjDDLgqAeRip5qwjsqFs8fmpUvsvJx21s",
  "key29": "r1WhxypQvvssvkV96mQXDve5VAAuactbeF9oom36BoCXMV4f2GihaMYS9VL9GMFSQLgmuwVkXS4YqGFW1MVHX1K",
  "key30": "5qXMK7FVBnVojMa7rXtyeSch146yhgPi6aaUnT3EvsVhQ7F59kbUkZkK4H73E93tgoHbMsPKF9G8Zrt2gbJNi2zu",
  "key31": "5jCAaZwcC8ufbEe2Fsc9TprkA3CjZFAcx6TZaztvkGEu7B5GdzKLJrW68AzcxwjLrkm7gqyWVbFuH1xLPTNcHRq",
  "key32": "2tjADnRL35u1qXp7gbYZsPceHSWQzsL2V5hYVQ7PDCnEs1mPcP5eyh5nzsLrfFfxVh4WZc55DvihiSyKV4ZdYsgG",
  "key33": "3NAWnyhZbcAzypYpZULDvxMFDBG8if3wSV6EQJZd7AEaCwpY7vWtK3F2a91RoJb9qU3Km26L6kTJndDFgio1oEX7",
  "key34": "5zmtcBfYNsg7zRNPuw76FsAiBf6WeNYhJJK84uzixLXpR1LPRRQyQHZXhdSnSGRgaC1URsfXn2xe4QwyNLP8cv5S",
  "key35": "5ZgCrmuaxSD1b3FL2be9nqAXeBomNh5btgj3tgdiDoaSEqQ9Su6maNLBepLpYoDhPP8VpBP6H9TRc5Ra8cTMMKNU",
  "key36": "3aHEhng1TgBQ5aPAPeeBschErsJ9tkw9QPVHfJvqfk9k5r6aGAcSPmxW9wUEV12C1XD2qTriFV3DSEBLanez7BcS"
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
