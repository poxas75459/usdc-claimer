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
    "3jVk8K4q7sHLPRSWe38a79y7Cy1Q6uuQfmRAsLZCGy3evWjAvsSPEuh22CckSnXxMMsG1uPXi9Vf4dQbfwmh3ZfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGYdXUnQubRAGy4XkjFu5bjux4d2RsCj3Q8Ejz75hcL6yQEdzHoKvfD1R259NqHjBDqnGuSvPwhxwrtgtu1Wcrc",
  "key1": "2mBx9qvW2ASdz4DZy7r7to3LstnFNwEkrVs9W1HJXr7q9j2kTZMQZfnqct1Tw7RDRXamQhd9qT3Mb2jnJjkm5CTt",
  "key2": "BaPboZX1aAGcA5z95T2fMTjCxdLjrh1X4EEgRM61KkUGcat8QHVmKYoqyWAd6wvt1VFG3c2Ln3tqAo3bcEV8g8G",
  "key3": "4W7B1WjKK165SQANok74vKGgThTDZisUVhWohawMFbFLAUagRthwvvHPGwDH2VCLEFo5gK4P7FoFGxyXHUec487y",
  "key4": "62CebKaiXMnGAcdC5YzkhUVv1R5be6dji9WVTuMckDN3K7EuuucMcQD5BpRg3wcweSgpiomPPfawgVSAbp5HHDad",
  "key5": "2eNwQqZ72a6CD9UG46vjEeRSRND6CD9kAzsVYLoqqzFNGooFMpchtaHKJWDqHr9Y3kDpaWxkS9qcYBcd6bnaV9wv",
  "key6": "4VSvUdww5X3buxNM8xP4LB1iBf5gM4s3aaSXXXkGzQspCYwci9QshQtoXfxtpsuxDsuqTWiV3xYEN9EqAAMSnEEn",
  "key7": "3AbhUQ3Dc18iy74Duw6qicqj27N6QyrNdQZUdkNjK1ZBJMB8FHRjSZfcgHdEAbBTnGpvuDHza3vGCW2H9mqcC1JX",
  "key8": "3qaPcQgpzAYPjPQULsZvfro3LxP9qXGjqHgD2JhQZCWpXsWb8g84iMgCsouaxduSqWiNRBy4QpFZdcguDc2xe3QJ",
  "key9": "4bddbgsTGpQ1fqw84MjYDKv4x51jUq2KWgF3Z1RcUSJuNZPsxNNREEkyRgNZ2S6UJRVKhzZ2UDgsr9oeaqqEHScg",
  "key10": "28hjtSfF4QN1xTt2ckpzJycnYWHjRuU2Lybv1eo728SrWE3BuMYum9PYsTTuQFSZwraFsP6E5CubNgbQP2QRKb8u",
  "key11": "3YsYLYgHfeWakFrzFfibBKrvGPV7ikbEAKaHJZd85CReKuzwZ6YXwoPniecFicZMwXaT833n5qhxz1qdqvWCCRaF",
  "key12": "3MNUYUuVJtVGCPGbRXjcyTwP1GyTotn9wVamdNRZePaKEJCzXZNg9288AWVM7dUpDVEqCpQCMq8vpWzSEyXtPfrH",
  "key13": "5PtiVhwx2jGZhuVVVzHiWbhfP1nkD4w5M8uqxkcKqJkoqjJ4qr9cWNGg5en4mjzcaXqjrWCeMJQzXNP8xnL7M8NE",
  "key14": "2QLmnFoN5CNH1xZafFSKTY8ZeZu29br5R54zJkwE6kEtebDjDfX299QsPTdE2agzScu8hXgVhxAPMmUDjdzyVBi3",
  "key15": "2n5kTDYGFs3Z9cJTZoGQKTJ5gz69aDzXcEFuSJbd3Ho6fpW7JevCYGnfkLzV4QFZLeiGjCFC5ExXXmizN1rpSjdk",
  "key16": "4Z4m2CVcYghW16MsjCaPW1VVtCoD9LjkQMiVANZbNuUToi2PNMLPnw6ajwaGLZrj6Zrkw9tzBuKUegcMeiHPFbtR",
  "key17": "kznaRoTg9qkGVQD7RMDWydJNiitohnP5fyjbYuKGm1MwGzBDsayGHgXsqwDwHTZujGP3HgfpCeEJa5bDjUV2JPu",
  "key18": "2xU1iqzBoxeUUCWtjWyyZvvKcs1upJdRSLa5D7BHK6iUY4kQvy8U5ECsnKjcuDUe1MLpSazi9Bs3gj43R65aADPV",
  "key19": "Vz1k9CFxx3yWZ91zLEDPBXTM3iBK64vXukFGhQw2iJd7ZSSfHLaGGGA7Z4ZQ9pHFqndepVS3hA7ku98Cw7frvao",
  "key20": "2TVVL3c3SKus53Gnbdh3afzNAFyuraAvpw8vPjwhaX3DAz25eBDM4qurBAen9pC1VN281XQsALJDtfTnpnLiFia8",
  "key21": "3E5Tas7o7CGPvMtqNssHXamw9FsgJXBdRmtXLsrAdTaemoVHu65gT85cQWjzq2NAd5vJ5bx9wA5m1ywyRo94VNfp",
  "key22": "ion13UEFioSFZURkZBHS3LiUNx73cUdLdgY86umwERo8FSJwnoN8LcJEQwyYng2ewggwv2rbD4igMWAishv98aN",
  "key23": "SziqStpifM2EMsQuRUCCEEVUfroSydkFoqzrMdQy6yzXpwDWkdZUK8zvJjF4GshqXNbWUSdhtniMvVF8oiySnAQ",
  "key24": "2opPrAgiQkuLCgTKzLQNBwpwjN5PJVMEDTnLD3WT4JfJSuNyTSdxc3srR9JLWbhyk3zqnBsBMKdKYaWvAUGiSk8C",
  "key25": "2vJij4wYgwSjpa6c17jhFWWfPTatckDmoLN2TbS7c7KFSnVZn5QZ5tnBAqDzA84rvVJCqM844y6nqVS95Y1fiLtD",
  "key26": "UeXvDpgmcMZ76qasehr3FYsHpNLRfcWeikseRAVYXBSC3LzdGDmEYrGG1vrmnoRZs2aDKuHEQFtbvR9gmmBu5Lr",
  "key27": "qgVDJYVG3zgcW7Hstr2Lw7sbWvsjxuArDM7vLGbigpUyxR6CViPibHfu2Nf9L6F8asDBU9eQt6P9aNEXwA9c9Me",
  "key28": "XtJtvFigBQQcq7f7TNMxZ9KcfiSjHKwKLxUityaBPjAq4C5VWWXiN8DZyrsZh2pe4dsMLS7BHSFCkijoKibJ8Kd",
  "key29": "5JoPXuzCYCdYF8A4SN7AuCqBoFmtWs1NoCzeYLeKiqEP3E2KvLXToNNroe81yWfShJJ2zDJbQeXwfnQ1BYZ3LzPF",
  "key30": "6kDZkdZe6fH8m5vyCgML1aTL97yXf5vaSgFQ3Fiwyd9JrWNf4AYRTtkTDxeNGV2Aim5bZzQaiQtQrsKhPrG2Qrh",
  "key31": "2anrUH6hZeGMxnvmhvc9cHP3WySSRER6AQNxyZnwQbzpZm5hu5EmhdXpUsiMeg7iPCPp3WcaSMyxCpsho8q3cMHZ",
  "key32": "3mBnjYAY2PHShhp28Y8NSdLGDssAyT5GEVTCgZPwyeSQVERtP2X5iTDYVCMPHoDuRV7c45paLgpqwyaER1qjfyAj",
  "key33": "4PRHSYEJ9kXb2Zngj9KBobF3Jpg8vdbs7cXGorqMmPN7dckwioyXmgBmfwNwAjPn9Suz7dpKQnhiNYvmWLj2SmRu",
  "key34": "2wWQ7WPeNTVQZ2rH1tgJvwkftQeitPLe7dC7fhhoqx83aZ8sxc8zvkpKc6GpXcX8VmvQaJ2yXQ1BUkoEbtgMHJog"
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
