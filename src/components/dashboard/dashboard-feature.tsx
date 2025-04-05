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
    "zqoYyx6vQDamNUGjquC2GgqSP2uo9y1YdF4SHR8QzFZ8YNpq5nDwd5BMxng7Ed4RXnpHZTRYJaifX5XpMxt6JTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xaJ4hcu65H8wwRVYRE7FZTKjX92Z9dPufcjGSZUwgRR3PZ1yTXMSXkoMLfbEv2Mi8gYxz5qDkyBfthFVdkQmbQW",
  "key1": "5ppVUkvmAJYPRuzpqW5AbbxVoqgnb4aZMV7oaD4kqYfMCsJPvnwj1RCjLGdePdJyEKXD29DfY2HMRcryGTWemKXX",
  "key2": "bCWqUJRN33t2Kt7NkM5EwrEdL6uyoCys5MyUJ3d4mNLMt6FHDFPMaLnL7XdY1PD9AtBoVhFqYdQxEcWixT26NH2",
  "key3": "WTLwHNp7fsGySYXHxo46oBTqGoBWcnWabvzf4moQT5VJe4NhhBLTBzrg1PsSyphqKMxD1KwUkiLNiwgs35SwWcY",
  "key4": "9mfytenmgkNoS6qCVAt51MaV1FLTw5KFCqejbuDSh3ygLgSzfsANeFzPCNxKtupS7LojG5K98C9bZenFsiNrsgy",
  "key5": "BL31p8gYn1eXp44SEarTRMke1VZyYdTMpozr6L78RpW5Dt1wEGc3rs8Ks1bX1p2zQYWNdRvXxTVJ1d2TnTKu5r7",
  "key6": "3zm8S66rgPhadGUn4kQXLyZbHcHK2SQYauS9irN22c61kBxkPANGouWEnE84Snb2AVdmhmJMJ3tookTMsvpDRr1e",
  "key7": "2RkDgQVHtA7i6A4bEQiFXaSMCaRQP8UY1r53Fa86DyFaqdrquxjM94Mxd9t4X8s3j455reod66JnNAxNrAtP74p",
  "key8": "2jMJqW3Y51fYK1K9vmk75SnmSdg3aa2qfNHKkuvE8qAxCvucuBTN5sZUjnNPe7F9TFiPbdr1daDYy8r7zQRFbHhQ",
  "key9": "29AXD5Ez7yEMJ9ADWRAX2Copqppe3grzKuFAQ33wj6rmhxtMaasxLAAw6rkLxZvN3nzgC6gyV7r7yqnJNhNt4ciQ",
  "key10": "uBGTJGFc9pr67eo1DXmoX2aqxCVdJnuKBfSqVtE4oke719Z1SLWdLGvQWonScJq3J3HzRftLt7JxGTqjsahAYPs",
  "key11": "2BEUwVcgyn9oUyK6pd9C88KB9fQ7A3XGJnuyUPdvkQZtMS2JewXWR4TTRrW2TZD3nyNCLwzwJU1hMXuz75wBeKyo",
  "key12": "4MaMqvdMo49csc4RtRJfBL2WpKsNmsTfgLkT96gpSHXQEjKF74XPNpFAJAMXystEigdhR8K1757s8kgjzvoME5fb",
  "key13": "3Qkx5FFxCQTYuzffWpYk8jD2NUydZY1hmeZZ7GGennuMkouChgmCQPLBJ5QRSfp9UY4qzGGM1rgTKTpjCkQPwa5m",
  "key14": "4DeXztYiPuhcPSVARKCJPhHRbL2GTQSsBRaW83qacgvG8cg9FHWmGEDL55HShMmJie9JZoApeQRtJTrVrtPQWWQ1",
  "key15": "4Hfgqd7hoCWzbw7bQm4JRWpopdvz9Y3AJ1CMw9AnsTFzyMw6zSWbXZBzgPZXCfiqdmhBbtd4h2LQtVTLdDDPfDJy",
  "key16": "tNbvwUVTGpSK6djPxnnomV2mZeZBDkgS3TMh6Mh8XnfvPpFvfspATyN3XSyZxYLMfED1DK1AXArdxuq1saZsPzq",
  "key17": "5RN9z5xWmN9FuFXyNyRUSn33tSux3ALu2MJPXEW8LYUfLdNb6n21msNn1PzoJR4kFMCv534kN2AoHN3bEkUFTker",
  "key18": "3p7qgFtZYzvXMx9o4jUnxCCDtCieFc7yyew57kfRY9br1FTQnFkGKfrWrFAv2xWyR5fqYcXYsk4dreQQnsZXFgvw",
  "key19": "37aWyGrWkkQa6uKEjjWPQ1qXjVaYzqtGUzFvSN5VEYszsXzuRhy7rp6WFAPdDX1XHkisg6M21RnGE62Xu2dkXqgy",
  "key20": "55gk9zesoEHNyxLffbexVktoxNdoUvwLVJDVM4RMu7cuqn5N47kj5UXL6VYDdbfVK2ugKYismBXoko5S8VDgXt4J",
  "key21": "5g9tCp2i9NPbuYnhmPdvaptnt35DRPzR3nsDMjrXaTt9nCVsB4AbL8rmqR1YSVcxspRqjJJciaSXNGn9EvftXZmL",
  "key22": "4eqX2Ka25FuZtJvGijYF8MMrL8HeBD6Wn9vvhP6GeywZGBte7VXQ25cwUqfSbM7eDCpKUfQ7V9BPxbQhd79d9iZo",
  "key23": "5zigJfWqJxozA8gPN4AbtPkArTRZqxrgbfnvLzxXUMYn7VKDiHR2q6HHzxrdXA6EE7tfV1PMBBTG8pYw36ryWqES",
  "key24": "2j98wYikHGXSSUt4H3C8ovy87dyvdcusQ4pB64gyeA1PaJ6T69oSR1bPYJvroU5SZgKSz6pgTeo9sYz6eQhdfEmz"
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
