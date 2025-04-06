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
    "5ZRijtv2n8dHtsKUTPMeHkkb8nhHKF3ie8NC86NY1kdoHj7RCvyuaEd9mfoMTfN1QgLKb5vdFqbKA7gMNeKDMzRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgbFa3nLuJPkRY8ajZ6Ja4LcnvJcocKv8E93fkL5PhSbvpmF5DMokkZWncuAqT1FN6UMgYZ5nYvagP74JcpHEEG",
  "key1": "3by4GnJgvAvWAwocdNMkaNoiww85rrGyfFQ73gBnH87jb6WoaVBiPWUvFw4y8YkSBs4V1TLqQURAWh3FMCrH3ugp",
  "key2": "5Uwg9rTfwz7hoMi2nJWR6wdHvjMMgwTuPLVYa58fgTv7fuma1AULNP9JcrMp2dVqAj45ocxLzNXtA2qnastWnCdS",
  "key3": "2V61kRagwqnt4eaa9qxda5FVgKffCcpVvUpHGRgdaZaN4iqkRqb9q9dLv9bizoupVXi1efFB7H23RHXvcCchszqZ",
  "key4": "5ZETK4ZdXFSzTS7PG28g4jB3KcRpV5RdjRmbrRbxRuCEpcKP5YpjXZNPkrmypNanpUXQW7J8r18SHC9KRp8ethM9",
  "key5": "311DruWJyNS5PH1sHk58L333EPYrbSPoKUAEYJTMYA6EW74FEDN953Q8rWryDdAnztjLC1Ko23vutGnYKRDkwiax",
  "key6": "3gGMaf9S3EYjmMeU1vrynA3mvKJwA1nPkBwjddxVEwZMJC96fosqa1Q8NwT5NFjXSemqJ14gHVVUL4RuG92o3taD",
  "key7": "4Q64XMa44oK19PfUh5VAYUmQxh9SN1y7dyaM5MUQGV5j1hnYu1kWgZe284QRkUaDuncN6BfydkEEsfGMRdJdwx9L",
  "key8": "3QLwyFhhr7fGSW5A4FDX4Ja822cRYLp2jpiTTfzNUMERKnMDY9PuMcKkk2Q8SWXgpaocxTJ21aX6dWMkzEr7Vh7U",
  "key9": "4miMYFstqEXL1L1GvcbKdh5K11pgBnVk4hMDaJFD73CHjtXhTGDK91xTQF25ypyQ2v6f9b9Ba5uqtNwr9yd7YH8P",
  "key10": "343VaUboxdw1ah92imqUz8p3LqsrHKDYVDCRVRyQskD2KB7GY5CTks7LPLRFGo9uWkj5Vx7Y11mEiZHDyJX7UeEA",
  "key11": "Lz7DPgJKsdNry6pyriYDMPhoqnhv2L43kTx1UHaFga7WXE1sKxfzRgp8CEXDEoRj1ewQWwryW8x2Bby5Jp9LYxH",
  "key12": "3UC2YDSmATYsoAoZrA3M9G3VphpR27M2ggGeQDa3F32d5GHLmRNJ8ezNvkXXfzSFqfRLzQDRepjjxSMn6ieZnsBd",
  "key13": "2ss9TW2gkWggLuHwoHYHS1fNKJ9rRAqC62Yixm3ZQSbt2qXfqfrVtyhXmDFmQDYnpn6F8AhwUPA4Fg7Fkfkojbxk",
  "key14": "4U9cQqaLK9DZ9WZDe1ksfWhXmntAAE5ii7ki8pzagA8HaBxuYXejPp6zPCgDNy3JAAo3UHgQoHPkX4XoK3mvvZm1",
  "key15": "66qr5RGnX8QygBdS3z5ZoYe91SyDPYK957vcHcFMAr1gTbeKLW8Lb5ys1asYaWFsTwuXuPG8J4ukz94CpBYHd3Cg",
  "key16": "5TRuk8G5YDEaPe7hKufEvGB8PhrtcgngvWMrGm5vL7R5D38KsuUoE6eWk7LSprm69Ep472wqXsp4bEFDzU5BPSBg",
  "key17": "5JE5ZqbToJV3X3CcZunvJ2Z4rAv7pseLYbjCYYaQ1qPmdNruoWA4tBfn4PxQDTkrM9YGdA5UWKaw5K4kQTbbk4Mp",
  "key18": "3WMbhPEotWxzmaA1pXEsMf6BFtfCnr7QDU8L2A7GJYcFAEhkJYzswaJTKjgeDmPeu1PYqZZPqGmVsBpRfUVyuyGQ",
  "key19": "fryJmgPWxDGkCvqj5zZLCKYofxLzuxwgKz6iFcTSwo3GFezPXhEymcDX66YjVoFBSfs3CeQrHdNYHfscvtQcUo4",
  "key20": "5hjRx1dtb8xFEaeyMmVuztF8WucpP4NqRj1BUC4HTUg3g5pW59iMscqLd8xdRDadR13e3SWDgobsZmkmucyUawd7",
  "key21": "3xutQsi9p4mcFo2kHAKbZFs9rtH6oC2rdYPp2wWdTWrPH61NjmwqDG6uRv2PUJkMgkRjs7SzJkdbcsMUyEMBhbe",
  "key22": "4BHyko7fnS46v6xx1bBGcyPj8fxnYmx2nkiNtqbZEbXd94vAZ6Vq1X4z2Zn93WYAGREzribpUV9bLBhLfGaE9CJm",
  "key23": "66uRtStNrvwqZzVvGgXeeKYWsdhK81gfisCzEzBCfHimToNgXyAMvZcoDyxTmosjWJ7p6TCV6VJCDGGWo1rG3ymt",
  "key24": "4AbD8HYp9rPhcLMTLY9hnYb3nizpXMo61BSQ7P1b4ZQK66mUaqaRGvYRDurGzWm6bfabvLiDYh3VitYnv4QpUtLX",
  "key25": "rHcm3UxgAU2CymN1xGWTR2oPpDGWedAa414HLeTcvV5fPx9n5rUQGAqku8zMfUrUceosLmPW6gzgCw4NymXqn9P",
  "key26": "49odNRKBrjqwq78Af4Qw4XYTmoTTmJGUB56KpnCefLdPbsUC1iVZ28zg4VSfVAuThDAXxs1YG2kyQNFpkfmPfFBT",
  "key27": "4wXXD8cRZw2Bk911RcpPjcjbtc9uiT34hyZuNwea2sFV2d1ZofNi2YsLrSojLSvj7bNZijxbfGB4wrGDweN2X8QB",
  "key28": "PKRBYpx2VJBAWSrDiaXUhLYutQ8zGkf8cTMGSQHxEn8oTTggcxyvK335bbfxpmCRHGjJPAdHtNtpmmSsMUpAnWM",
  "key29": "4FdT7UC4W9pYv2nV6xASpk4Wc8sN2QqnA5ZLdH9m7Juo8rsqaV71EEUm7E7pMytT7i5Jb83aMK9Tv5jq3vpKnvMp",
  "key30": "2orA3yushMVeXwCQG6TPYV4DomGp5rZwPjiqij4ZyLb7Upz29hX1ndenH6QvPbi7DpwXHcm49ufME1YN2Gv2iK8n",
  "key31": "qQxMvhngmeCGmiT1oVL9HbwYm3pahqzZ7Xa4W8zQmpGfak5vgo8ZDruDjaysdgAYraibbtTDrJCbizp4V9ZAjUT",
  "key32": "4TH7S5a1vJ9GCJyeBbSVnoXsF81BQKwDtyXygfVGpY3sdwzS6AhmgXvoSPPpCmuJcSUTXR3BRYPkjLBGYZY36EUf"
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
