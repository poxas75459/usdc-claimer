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
    "3i9CYXq2Z5Ar9JAa2rsmGHUeANqTUEzXzRadqT3XMZ9hAxXxXAmeb2MXBiPq5AJ58ajVhkto4S3LoL82wkgpYWjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhvRwYgNce5MpKgh468auJK2G1D8BPvrTsCYpYAXsr5UPpnqpNFvVuzV7ThSRFY9zfiLbctqA7LKugWssZ1aMgm",
  "key1": "2fgHNPS9KuXet3VHHcrjNegBXW2eNCCHydYRvfR4wDnR5b1dhRvRVso2J3txULngq6LJh9F34yJZka4evkPF9kW3",
  "key2": "2GmDfiHMzsyp6QYeY7yAsH3EPxuxYWtar81RPFb1rvGVfHzBm921uviNmFbuCodwgXbt7anE5goFkUDe535XAV5p",
  "key3": "2HdhXkXZFFHLhx9EPiyxAmMkTa6oQVBFdB93xDEKLDxg3nhfYJdfzLf9odGxAzvJdm9swmjr5XnznD28pdVPaF3X",
  "key4": "3J1Lt7CiusbPXaVANMKAU1VehnEerkuQpMLfs5pXpQfM9FitFw7Z2V2Spi2DLp4YN59fKt91Xdb7qKubcJ56R5qq",
  "key5": "292m5G5hu3bD4FXe1teY1Jb2Fnfa7yww2nWFkSsochyE8EJ9bNixRDzAepSiVqMWoEUAUw2ZAZG9Rsvz6AXAHPdj",
  "key6": "5mnb4onPCNyAepxkQsPx7yuz2pN8biRktLriAwaRvf2jVfE4g7vAhEqknpnkZgfPcFxRYwSkAf1mBxFVHrizduW",
  "key7": "4AfFGEjWN5SAXrgY2mnF8uMWBJFxUMrDV8ewMPnwU4C7E8yjL7RXrfYEGWcQj4TXvtVfK7oYWfeUdTxijckUCbYA",
  "key8": "2xtjcg4sjmsmcgTUy4h2UTkzE2GXTkiFZkTPW96AbXJf9qasJFLnzjQZWUXTvaEv65874Ccc73diDZB1NVToN7GU",
  "key9": "2CqDE782MWxYMdbGgSxF1ekdfZba2ZeWToLQuHNm54amCjxc4g1PTmkweME6rvezi1J6fdJeVVYgqQr6tiCb8bBg",
  "key10": "4S79qvrhpUiaQeLevNSegsBHnV5VVy8RmNRdHYoV1j9GmyhYHmGPzdahX8NDbd2pdifbrLQVeRtJ7V5WnJa5mgVZ",
  "key11": "3LhhBGCE2YmbSQPNbTs75Cd11ajgs4cfUVqqYstv1oj7hhEc3hcZU7Kh9QvyvRugKBRbM7gzBERDYJLkmgTD8Mgm",
  "key12": "4kHsPHwAQdkuYZaPk4cAzoDjh7vAseEbKfkDS2rGeyx7egcD9aGfBNVoWj4yLU3HDNKpf5rqdw5X27sMXMmp21qq",
  "key13": "27QZ55qbfTo9UENBHmTgWxD5iJ4ete45NV7HeG9pHH5BkrtL7fSgpD1iWt3oBosxUSaMVN2DNt71YudFj4fFVvTP",
  "key14": "woP8Ybxvfpa8enAiJ6HGMbjJni5AL3Qeficj9JhCNkJWPE6Gfe8fAjiiDSwN2v5Q7f4Nfu9QrEVeKGWwcWA9o9d",
  "key15": "NLgqaAo83H1HqZDZkTrFyghGNYsvAofsE4D2cF4tb194oJoNU8H23YiE6JVbSD1e99Es35UZrmeAd8KS3HLHeC8",
  "key16": "5ifYnibwpj7FExtMcYgZecndkoA29JED1C2V1pn9GaUBE6t7T1W4kUJdDRwJusrUPRN2TeV6C3dLzLZTMpnPACPA",
  "key17": "35qLyTUaiyGpPpqwLyiD1t6y5KCkmpC6B4nchYJAjA18kj9m749tkxQ4nbqwmJK3xi7VbKYv7BDY82XABuKdxkFx",
  "key18": "2rGzeQQmo1FP43pMKi2gvKU66kpGosZ2i4D6CLZTZ86nRoV4VKF9xz7dQSewoJFMPaWFmyuKet9KLAFTpxKBAXGD",
  "key19": "5QL66Eh2YKeXDapZLqFrSnuEVjdGCj9xRJNv9bLrDwAQ9HoSgLmUKGwVJBkZr7FVCvW5C7XLzdN9Ji8ZWDmMPvLo",
  "key20": "55vJhUTtELJCnK3bfbN4QSvT4Bz6hCSCw2oLLrzUj2CnDNRkBu1ttZFVQ5FmtdTWhyLy561qMgeqoMMSGpstudD8",
  "key21": "3BnLYkLyq4JUFk6HguKPZnnAenrwmBcooLqCy7xWFkh3sAqGuhgZrE28tK62BZBfvFrzaw13VQArMqf9NGzkCXVg",
  "key22": "3fAZ3XGbrQzmHRDvG1F3WDHnsWVoB1yToQhXzWvXEF2Sykci8b2pbzjxVyJrre8471ThZbhksEciNGbrbpY5LGkG",
  "key23": "472whv5vMjNJT1gpZxZafhTTJd4abCLfDqEWPZeePyrbd9i4Mr4sAv7JGo4jsYnDZd6nPNB4gtWVz18iMS9W6iXc",
  "key24": "6pTZfnaN3RpB1ujYEBUZQdvXFy8k7143U5funrK3YvN8xWbrHcCqnYv23GKYm4dX77Lr5zN718yBGK9j2XhABKr",
  "key25": "4QbGLuEdndwHAvdT9MMRNod6iafQ2kd9YeGwa18CcuDExbFVfyswbTMGPq6Sp2ZbVwQdJxqanf8sw5dJQYwcjg3q",
  "key26": "3METmqL3375uv9Fmc6qinKrwaRcjz2XYvuE2iFNFfXHw8qwR9mP6hgo8wzAyHgFk35wgcuEsiUYzj2y5jusZ1p4L",
  "key27": "2kiJuSqgTiNZ3XFZh2LxHGqW5yKgeHMxZ3ass9DpziLefE8q3C83KLJyW5n8g3Sm3X9omK4os8y8ibjDkk8tke1p",
  "key28": "4N8rc931dtFkvEjcTtBedXmQZh3VWd16hQsRJdFSHEoKRgJSsp9ZTr8shEbyfANBAmLKnE7nhLL69ynub36LgVeg",
  "key29": "3TV9D8Lc19nRbXmEqrPj6diingNPyA547bCpKYNiLWoxFEwCPZ78mF1ZsjBpf87b4vRzkGbxAWxQjMzi6M982ZJU",
  "key30": "2a1J7QBAUzQNFh888YigSQmX1XRz8Kseo1NySrEXwpQrRJdgxEKMtxUaE5gMmJ8bpc1Xp279Q789qf1kK5Lf9SpF",
  "key31": "3Puqtccfn19qr53Mwyh9ZmHUKUJkzFbeXBAUEWi2JxYgt9Fhr3Qh9Cy28EdbUXhwyaZGMKSdSbCLGLw5RALHqzSz"
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
