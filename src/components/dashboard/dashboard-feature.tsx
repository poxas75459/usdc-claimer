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
    "n7AbN1S7UdFyxddH26oLE1Fhjc7nxTEehnb2NmiXgcUhSGkCaGDyjYMHMoZSRZDvRjNsUVUMmA8ozwSiw73S57o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdmbsZC7BHrQTaoAQALBL5UNdC6WjMCLY6wySB2BLUV1cx2uapNcfZXoyz3nMVagnpzRaqUyf2BTnDccpbBUyiv",
  "key1": "2RojZdcLK2vxw1KT6FMNkTcd6MmnGdWphxyZfiiDYN1QveieyvabTbe8AfrMAFSwi8J9sPa94iuESP7x52VyduAU",
  "key2": "5P3DqZXVxi85buRCxF9gC5Nj4zt9mCQtPZJfNZkdJSndxQTVBg73YwgzQr2Vau3ZgSeDzJgLSZTomaxtXeLNoKBx",
  "key3": "3yCSPV1uybht566RT9RWuy4XE6fYP1dpZ2FNM7rW4foG7ajYEydXJLbob6bPL2Ax6SivB3gjRmHCFNcSH734Dv4U",
  "key4": "4kG1zHrf3z2iJYdxNevDcZpe2UWNuyfkd3V4gXEGPftRxFcYKgYkWMwxPfzn833HXLALLrAKooqkVA3LmEfx7f3",
  "key5": "5MTvE8vaojTffwNLKsumfScxBT7siVXu6sUJVgzbahqBAmk7wR8WUq3jWQdGSKTnHF2jqs4f65V8KFdMnQsxYCoL",
  "key6": "5znr1EE8FTXZMR7KpGXazQKUCDhLkVykHXZRb31Fve1Dc3sNL7gxB9EpHeoh5QV1BF6N3RGDnCV1qSB3Rga18Ly2",
  "key7": "5xzqfdw8KobhWxacU58jFoBc6nDxXM7iUQJUbfdVjMCCweskxpjR4JavJd2i8nHR6LRygS15DSqnfyT1K3e2BSC7",
  "key8": "5t5sskWbVmB1zU5kNUMqLjMRmkVE8PPkVcBnvW6rCpTpK7AFWZL1x97uRwTxWHHQ1RsxzvPHP24xyEdGK2Cs8rMp",
  "key9": "62FHLDFtEvXJux9WvNaEmDf47QyydL58nHv7cPWrxea9FKo5q37uyvNVKbNyXU3DkpGK8Y3u4MTyXFjJaBVJZzki",
  "key10": "3yc2PqSoebgtJ7ot4QRm9ppieE62EZrb8zB1PRbezL4FCLg7WKNviuZ55DgLE8WAKHTykFYg9CMBqX9f5iTDWGbd",
  "key11": "35WakvkiZJH75cn1mx4TrmxojwUdr7L3SpHzoVdSm6BzqbHSXrL5JfFmjEiccUvCuyMzJk1ZBjEpFhs68MTCZEdi",
  "key12": "4FNMAaGGLiDKk7HxiVEpe4tSaV5cJbzesGNQDeRE7nCw5XPNm8b4ZLQWVLNRwQBqM3p4cwEQAMzZJfWdY2g6aptw",
  "key13": "4Tt9PVc7MdAjL8a3fRhCTU46TLYz3xWNHDrjmfHovTf8FTyhZz8Pqg7Jm9fPVBySJqbJG9UUkjn97kN6HMhykvZX",
  "key14": "4vG5Dp2uakqhJAHaHNjHXiZyAiEebM8vzWvtmGD9Ur7MMH56Xpcxjwup8x1wo2xkFJLBG2ReEUuG1oyC4e66AAwZ",
  "key15": "5WdN8WveQDDrdUbZkt8AjXvLYhBY64zLAKpTTU6qa7r7b9fwV5WpKpzBBwZC292EZBAGrusNRPDVPokcaeHMsvL2",
  "key16": "3xCEKULCAuTsKHbuaTD96tUTQQE7veCkk5KKhiAAgFFVpHP1h9asyvnTmDpk3hr2MyprwWNh6KAihd42TkKLNjX6",
  "key17": "22DytMLyoAEwMDipvA9NWNfRB8p9fcDks5Ez4GtzR1jWrMKkvG2nWmkXUJuPeWsbwXXuSSh2AfY7SKDtLHBfcamd",
  "key18": "5GBkiZ3k8iQDDYMwpRwNdP2dQerWg3SMBxr9uJEVQPv2APfDMYhw6wrdK9bCSYjM4GfaA8pgXPuVkiriU91k7d8w",
  "key19": "3m6hi82KVLBrcnzVfaRr9gBcRKFaFC3LjUwCAKzgVbb6rcPFJxNnX4upVHHjSG2EVCSkfcAguhRS8PX2onvgx9ud",
  "key20": "43dXzLfnd7XktywxeZC8PumcwgPURcyaL4TiYMW4TUMkmSMEczBA1xQahMDFXRipGVRo5VKgkoy1pEBVwzhVmLRh",
  "key21": "281SnujfXr8jPx8wpGRyqrCEnuwFT7CK4Y3MV9dMsdzsc7Ki7kQonwRMxs2B1YNqCD5ZBMgkumxLfcdVzgwCvreF",
  "key22": "ETkMWheTZkeQyxpHq7JU5DvyNkudfqkCTh6yYjnNxnqi9t8hjPbBxNdQ1TB62q2EaWm3WwTmnm2QpSo5eZZUSQg",
  "key23": "QedJtkvfnh4wdMT3cuxhMC4mihWRagvJsnS1mjBA6FMkMBmXKJajbaDBNqtuSNG2YP4CCsVsiFq8PupQSt4LBLC",
  "key24": "5QHpGxYZ96iQX626C8fzoVJAwofBpkDqN5MHN3pWU1A6Tx4QvN5Ec16PQn2wzKQ8jcpUPfFj9hCCTSTaKVMbMJNN",
  "key25": "347p1ZPVTx8cMZvZzfdtjL58vNygV4rrRVzFoy8Q7Q7x1Z3uX1zWVR1V651dryMqo86rBXPSzprMVkoewrn1MYQt",
  "key26": "3BRuaom3gDT3PUAykxwehUUB5SNdSyNcw9yFmYEkLtsRirGPLy3KvgUkPKogk7NGiUrmpN3t6Mu7JwrhgfEo6Vrh",
  "key27": "43fbNHPDzf5EVJUkcHC7cU6BtxmN4jPhrhbLjyZsJf1yEFboW22WuVqTYy4wwzo66kRMsN1qPC3pjffSgYY4weT8",
  "key28": "ePGwQSTJm3EzqPP4NHnrpSmraX6sN1ghgtA9bjSC4nshSU8usNqyQTe1X632cZosTqPsnETknFoJdfk2Ju615mQ",
  "key29": "2cnjD9FA76HWkyMnfQCX1Ny2XvhvWqAy8iVbWbrXsi1TLYpyVPMqxE7mTYp9m1Wx5Xx2QJBwng32kqvZUg1Lfb9Q",
  "key30": "4cJLw9ex63SZbvBx2cDDDqrHF569ydeiTVyuhGxtEwvWP3iziLZXAiLEDvzxwNpnvV3koNFiyH27ruriKkr8USEu",
  "key31": "5k2u6dijfCPQ1AE19bTbDeSDkHC2Ridewa1Pop35rKJzziSi7G1s39RmNvfmQCN3FQxtGMEVbD7VMe5T8y8HaU7q",
  "key32": "eYzwjmbcnBvKK4QRd1G7tWNMdru72B9SA4vdyxkzeHbxSq8qgTtaToYRppVmu3ee63Jxf4uhvkTU29Ba17b2pUv",
  "key33": "2foEqtEzHvvuYPJ3CDoDFVDF2cqVkN1cZyKur9h5KzaYBxxPVtpsPMqPjsCkSxQQGcS5UGpR1LN3HY8CW4b2oVU"
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
