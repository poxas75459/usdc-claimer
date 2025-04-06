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
    "5jMbTpWSqUTEAUEYUG2QwSYvZkBfiS9P38EoMdgm2FyD6F2ckx7tS7QSRbb6512rY6R3UszdaWdpVVk4ESJboN7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTpcUQWs6VSxzGdDnEWYSaP3Tnif966BtGmp1GVugEsUEw46cD64xmfg7nV5UhpyPARLiYcbQUC6H6yw98Tj9pP",
  "key1": "3rnkJ96u69oVzapbiwpyrpCFBkaTFmYhJgAc4McQkyNo3wfgwqD1Ra8GUVoXHdA2f53ZDYdeW3xitV36szz4wK5G",
  "key2": "2Pb4rhDVgzEwLWkfoja9fyzbhCDj1GPNeqmJ93sa1qjQDhxUEkVZgB7Fm5MroqbCZLBDgMp3VAqCm8zBiskfcp5E",
  "key3": "55cRsx456b5kvgtkh6jqHocZa6AhfvMpUr17u7NvpnmS6NPN6eA5c9aJfVD3DBr54QPXQJ5oCYoajn2cqx83BpA2",
  "key4": "48Y9vCMDkJNeBgo7hLLa5au5TvUQMsdsnw2xdwSp9Yz2nDQCWkMbrxqrEyFRmKwUN1jvR2QytLKT9kuNjB5DWgB6",
  "key5": "2rxQ6H9bHZDizstxogn8GwcDiGE42XgScx9yW5vdBMZXbsBHiWyPzbT7gNtPD5i3XzLYWWkYgiF2AW9qP9WtSHKc",
  "key6": "45qWsto4fwsjtCn7cTwpjWBReqaUgUCKS7XscPSCGPmJTgcs36ZXvFR4teHCQtgn9WpfgBPkp2EvtZVH92GKy2V4",
  "key7": "4xLoLsoaPpZdATA7BPTf5t47ef6bxjzcgJA3fPNNp7xUNAQXXvkrB5YVe1aZT5tTD7kzBJRHkZkdDeGSZTo1Tnna",
  "key8": "26f7pWHpA841aFu7p8wYKB8wJHPhFiq5xNHP9nJzS4VUY55AMpM4NA6ZsDc5i1Z29W63jQYj9TcRKbjoHHV2pjaX",
  "key9": "5keMKmhvFdmzx6rPwLo685qNorioUAThozrHKJKNpAgESsUnrBYZ4nGSowHUVWjnzkzd6rVrZbPMbQ1RRyVmT6Li",
  "key10": "SAhMEUvGjnuxNxhrkf7FHHDmiiV3A9z51YdkASBFArtxNS87j8oCFChJniRMPt5irDFy11Dm78yj4U7RhPhBKBx",
  "key11": "5tnvBkh5n9wPMYCPTSFjbiHFVoWz3wH9PLK2GojCRyKHNqfPK9MN7niZ1imhYyJE5eSAV9uZgfrWVqjt1x6BWjV9",
  "key12": "4nJWp5vBgdei5LujeVWDQyEHdc5d2vtuBupvaYSAUyQ6t9twQnfm2zXhbeJdzVKYj4b38qS8gdeVk1R4TJm4Q4Cx",
  "key13": "5LJWPBty7PYVtkt1xU8ibrkFzCrwbjE9wUcFpLngB6y2fgxoYj9xcXMb2kBQzaX3XJBLhGYUTeGHowgFKawijzEC",
  "key14": "85sHBq2QotEutG1YoyZ34iZxqMUPGXcYGd9Fn6iw7VriiupCE3kkhFNxraV2gTY5cYKaxWQAcCym8KmyFsSK4Lo",
  "key15": "4MTq1wokzJzDRNZkpWFxEE5crntoAmJYPqsxzJSJAWZFe2PBheYA57W5D2EPejpZs1mgWPMv7DiaTF7uvYAMrDts",
  "key16": "3BxHjf4VJ8bpQisMgStH6ejmbsA8XyCcG1dfWgUrhn6J7qT4uyXyNUD3FVZmQjxjRcMzbfwraxfRdvHBzEmEnaHg",
  "key17": "5WZUMRpyEF7QWD32wGYL4U5rMxFjRfeaFmxZ9vpDYsJXjmNSbGQauKtZwu5B1Xttd4pPBsVNdk1vzfbxKtrL1rmH",
  "key18": "2JJZNJUYrJovhFErbJWsB45y5HL7XdzSKJ9ubHxFx2WyHv1cQ3d1dnnytHvnFrPWBYTBw7gk7n5uoWnetgSXFn9U",
  "key19": "2hWZHJoh1nXfSnBYVKdCmvQUvoxExjsU2bFoXxrEi9gLetKHxWtxAbR3cM7d17wdoBdpKFqRCMpVYyZGrdxsw6HM",
  "key20": "5z2BXvtEdY5GNDeapJSTKAYXAQjUSBLL3ToXVd8RZ566fWAHqNaNzQyvHewoPkjPwU3vsY9RyX2iYbsze1Ns6Ltz",
  "key21": "47gPBpu15bp4DyMy9PhmwGk5xKMnayZL45mGEr6rvMxy4edtMgJFUst6Jbr7zhJYW463rMhsVNVzYeDmWFnbkDZy",
  "key22": "2Kz9NZjRKuzAZYDRqvRktodasiZMPModHJVTczzNaHsHfUugmBGJ2mqfNW19etzftqej3nZjvbyLFN6se4wC7VWc",
  "key23": "5iWptUcVVgGn49CyYS4g7btRdtx8GtEH6fKe4uXANvLyPU71dL8YWb5Uza9TR7JNNn6dQSTfPtZwMAq2Kwa2x6q6",
  "key24": "42cgv18JD1d5awNNBPoTMC2bdjDniybEEyt789gum9EbQNiLeXhuGaHKSZfQVtpXtKF4pwzQzPHwA4jhhh92K4jZ",
  "key25": "58ogoZzcDJsoHEmAHKkqd1Jm5oNLqKwMF9bYJC4wNs6fHFUNKtaqncpcWL2fFpqXP7pBD9erykPwYtcegEM4BKpq",
  "key26": "Ry9JS77sjhKPzBrV6C3JE1gxbZwMEkr9Vi74LEanrab1sSxxtAbyuMwYCjyFz3DSycdYjsY4zU5ovYuTdrLZR9d"
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
