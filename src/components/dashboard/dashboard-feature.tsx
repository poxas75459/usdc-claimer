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
    "3Ui4oNstEEMhvAkMMNGUf6CLjpUgZo7r1BnzrTLa4zBMeogqppwU1Y35vfJ9kuawVh3ffycaeoQWTxgUfmwZP8Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DXRGtBBJiXJx3sBAWjqNZMycnZd8UzR7THJDtncJPiowpcRrXtzT7NYx6LvR23UayYDdq5PVRHytPVLxEmJqfV",
  "key1": "2C7yvcivKZoGaVZS6Wk5BEt6VETmfsLfdUN8CK3KrVXB4VGmzycFhxq8Fi7wMeboAVuFePUzUZGyfUk3R8a2nRAq",
  "key2": "3UUZLLrsX41rcyaFUZYZg3W6yFV3aLgVLvxes7QdfGT63WExR2fsyraN63NxubY2bbvBR4V8xyoZVP22iTTDokNd",
  "key3": "2x8jB4mMrrRE3EuXEhzxQUDRGAUqhYtDtAaE2ZT9Tts2W5meyRFDNqfPqLNSNKwuYn26cBdRqyoUsb16GcbVYC3z",
  "key4": "TzNc598iQ4mZdkZQqEMPWehRMUP9iKc1B3P7GvAUa8ihi7ouq3mesjTMLjUUHjLgkkPXM5dJ9KU6MdWjAGnFF6f",
  "key5": "61nXRX8pyzCF9DXomFsDtecqbUJuVy6k1oYXP4UQpmysQCXKLjrruRvdNQnSJnjVY1equCB7HTP7cMJjcCwtTZiA",
  "key6": "5PviSdaUpfD5RsciFYy74gbioHecwqNT3xLTtxzZiugUPJBqF4BP4bjcJ4Ee9CRoYxrzRM5ppMDiAhyurPXw4VHn",
  "key7": "4wQv6r8WfDX6QdsRXRsWEEvcVJSx9RrHipA63BpsusyrJTkaWbxyseUKyco7rLytVSZCM578pKD7kUejWM6QVBq5",
  "key8": "3MzJQLduVjEgDeT61TyYKHhtKxM9rhc75UE9psFTGKj5N46YUEsUbbohR95svV7nTc7NtDBeMHwrPAmmDzCZ95VU",
  "key9": "2M1TifjkYa2fwxpF3pzGwN5aMSASJEvPTDLu25CrzjoKXKhCqUS7iTvhz4KN78AcVZNk9AR9TFsKJkF29tqZg6Vw",
  "key10": "2DTKg8ZiSWFRbr99PeYcfHYwio4NjCiQYuX9i7ProocYbj5hffkd4JQMLk8VeCdcaxw2kPfebqzNfPZ3w1rsrRdv",
  "key11": "2c1hwqoP4LKkBTZaUampXMKCV196zdmo8XYLv8EmYK659spwPxwQgH6jZahRE24sywY1menYgDdsXRqVD2hWqZiV",
  "key12": "3teuQr6rwqKzWpyTZbsKEpnqSEo1LE1HVpxautYCnqHNyLNsWU21yw3Hhe5UxFkFsSiqq1Hc1wwUXZdAtJaPFGMZ",
  "key13": "5DL1LYn4As9L3nWeMg2RLwRqR9jnKqbAmDQM5zQvTLqHyNdcWjNStGgPhjZVny4kdycFdnpBP2tSvz8JLPMHyvdc",
  "key14": "3j5JkuyhPzanC13KRdxjL9NwJha68eyhaqreX6MQS9khjzkyJdas4KY6FAUg5xiKLHEowJ8PwuTERju5gii1pQp7",
  "key15": "2CT5GAQQxqeS5JBizahdXMGyNXaZ9HwRvkRRJhuQopD1LywmxCYUEX5da4SWtRwawCsLb7HEiTMitt7QoDyQZ7hk",
  "key16": "4aLon7opYv2RHtNzGBTVe2dG2oiajYvCCfffa5nApnf1ZGp11eyV17VUMxS6jHJBcZgDseqFZNxBF5eTBUPLQQVF",
  "key17": "Boc8QNz6DLT5sBVX1ajHTWtS3N7hfJQ77tYjUJNv7G7LcqJTLhDvFXLhNe49RQysnEiFrerwhdxEmzAGGpCwJ3i",
  "key18": "4ZVcjMtHbmwDs1bvdqZZTvbiBTcehR1apr4r6WmeEy8WFj8WyJ12PDqDMX2VpGQcrnEmetUobCQebZwSpV2UMEWb",
  "key19": "2WBHW4deZFoMoUFUvJBHT3XSLy74xeCx3RMqbqkSuKYSvrgMpup7F95RLXv7FKnJ3gin59wXV4owLy6VZKxn9uq4",
  "key20": "2pZBXiM178XX583AtxQ24r73kCUhzqbAzoMb1SRbB4BF6PFGquUub3aJcGzYoXYUd6feAtVR1mTAhWHuWExFusqZ",
  "key21": "5aYrJnmjRU6khpRXmNz3MJ6m97wJWhj2D3UkSUhNity3SCY3WvREvGPoFbv4kA2tpnZd4hXj5FpTj1ZkD21yn1pV",
  "key22": "2cLEioaspmb3NqDENun4AgWPf2rSy1ZF9VGTsNrstj7WKzwhcYhNh44rEjcdSJ5BejBFKSfRwkUf1Z8m7CTXuRSP",
  "key23": "3861Z5cQfH9PHb2AJPD4in38H1rZPwz9sh1s2iUpif2j4WwFjETjkX4ajdxHU9oqUadK834TsuWA9SVJ36aPmgck",
  "key24": "2UDTz64NHynAtQyFdHHN9cVMYwPEpG27f9JccYvRdNkgiVC2JXNCBzG5SgiG9sNus6XwBzdyuNLoczaxaFyZghuV",
  "key25": "3AM9K4Ti1Ly9FtbrCMyxa7o7YKMRCacZLo8J5gbvWYQyZjpcRK4FfgSwqxQto7ocrvmgzsua5hbKLb9beSD2FVKv",
  "key26": "26PxcdrBAQVdza6j45s2ZSNFn6iVZPU8L535smoz4eoeMyv4Xgty8fHdvaHMRRJL374fxvBch6QudrXeaT8muz5L",
  "key27": "2PuTQ5Hw6ZUcBWcuTduXj5PfvDU6ABHCos2JWEgiQyTdBwoCiV2UzUVRguVj8QbaCJsj1i6Do2atxhXkfk5Jnbv6",
  "key28": "32CUAhyF9rRhNvuRVLiutbzMcvrLgLtKTXKZaJUWoKJQA3FN45hx8Capj95Vo8ySCHx4TGx27ESJ1b8WrFdmd6cK",
  "key29": "5S2XXUPmFiRAzktdUCFe8WRGWgj9Ln3bpqnByW9qxVBrQzMpW4sWmTT5mfTmx21EKTG3WNyRnZDwibFyiSkXzRus",
  "key30": "5LaveztYJ2wwMkFSChQe2w9vjaYGewRonXz5z9FG9d5WA8EXeSv8VeWyCidpMBsY7rNodTA36CSKCbW6hJJmDm4s",
  "key31": "58uysEk5hnqDPh7Ym7Hi8Vb2Zv553a1fEUh63sB8VuywHs4RgtniT38NhKFezujrKSHWGoDGkbXV9yup4GmnbBE1",
  "key32": "4EZRzMGgt7CdFtxvDbr89F13L9t7yE5EokvD8MB453tMzNe3EBxqESC2THnBBBRD46oUgpdH5sk78JwVPJBLGVbU",
  "key33": "2SLWvDM2D2iXz8rmMLuzAb4kGiAcfqoertPsBzwd6ytr9gq7cug26F4o1LJp4kf1epWNrx5jebeCDw4oGqfhdKv3",
  "key34": "2zfnyj8besLdgQD3kqFaC2k6mjsBoMkbBSWmZdzLDfihb9V94e87ZJUjVwiQv5a279f2PWQW3ErCrJ4h6kD6xAM1",
  "key35": "3dm2AQLiBr579R4U5MVDtSsZDT5o5eMCEdCRJNH5YRY5dFh93XMwPW7qW4nJMZnP1Bo3CddSm62NTFmMNixvfeZR"
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
