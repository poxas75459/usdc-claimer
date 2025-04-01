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
    "49ZM4sVFZev9ejPyVWV7BhBVSVDs71n5TXLKLhkY4DoUXUd1MLwC9DmaQ5LRxjkTmBsZkEW7N2kXoEq4KewvsRth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3jPkxmLEAJYWQd72WcF9ijEchrzKN7PWi843gHubUWYzrsFA2nuXPSRkE84Ujzq9Rr9uVKJZoFgDbujwcJqd9m",
  "key1": "67HuAKqdippHsgS3DXo9ks79ArrjiC1vgSJ9sqkZ1495n95eLM4ta5L153mUuKNbsdQPuWMVK2WP2qmeLR3GvZwz",
  "key2": "3HnhfNSbWZLEBCzyewKpAa62BJEvhm6QzT5jZjb35iqJKgnWUTauP33mX1BKhDv4W3bZAmu76RaLMcBHWZhJiMs",
  "key3": "MBhScddWntvMY71uSUMRcFPyRXMidhgTerBZYUtierLG67rkj7NCYKsBfJhP6ZidZw4MkFDKQaDM4ryfMaLqKs6",
  "key4": "2t5fTwx1jwa8PFnKw2nEDzem8S2aAhQG1HjUVt3rEfYkuGQdGz4WuWshoL7bhYh2DTknJRAqqikybucVzttiz2bc",
  "key5": "4NisrVYMUNEjiN2h99xvk7wKcfHnrmTHjrDuLx6E4NZ5sKJyeLxWG917uSjyQULhD8XJ9HnANPnx4BQZFzCbwfa3",
  "key6": "2i49mafQU8sAdhupjvvHS2KiNidwUePNhgjdGcpH8LcKPwqQQXRuZ6aL6QT7VV5K7ojjYCxy1ZjuxusZniWNiFUG",
  "key7": "2BLWiMdCbNJa5AnMcgKCoHEK3jWv9yQkRZXWTc55nzP3n5LJq9FCatJNKmSSGSPhHa9CZqoWnBiaayghyzpMXXsX",
  "key8": "662JKEzY2qYudZuz8LEANLiP9JgvFa2ai9kZ9DXHpq7nzoJLXDHC3UdQA6rtAodgjfndVdQ1F3ExMAJgK8GZ19ZE",
  "key9": "4h8dmcTJX3bCaz2ywN5qMjqo6Dr1BUmPui5kKxxU6FbESojxTiNKqKwXmxXdsCrf8Ak3wZ2aCPtF4AcudXamvsLx",
  "key10": "3i93ctntcjdrNpGfD6gKmRk5SGt6G2G9dMA7c2J8PvQhMDB3e1ZmmEL5LtriHuChuiDatwAc9siKo1p5wL4Wa9Me",
  "key11": "3fop3UTvwpSxBvf38q9797SMoD9YYHA9JxCKmZF1b9FU8YQ9KnbacpfhQdyt86NasQwgCJXoys4ggoZdrJnvQwc4",
  "key12": "3d5WmViYdz8jUeqt8neTMFyyFCMF9gSpNrLvj8BKu7UQBCnkj4TMxi4hUvPuBDnMHRfY8GuqHfAWErxLQpihJN4u",
  "key13": "hd6PyGKBmxvEkapoeGKTvci8wa6hKxVbzmvS8BQUsf85DsLL8e8SDzkjpZ8ZVaEWhq92q7LPYcDBgA2zwp27ybT",
  "key14": "65hQT5Zgm8PkL83xJM1HFLYshf3byPwNWYd8QqTDpbsiwm7ksRQsMaZAgF24iWd6Skh4nyHNmSYaDxKHkoqa4Lo",
  "key15": "nT4vCPcaHNHPtBgKss8PGiZZaxz7gu62m3rsbV268QLv2v8x19obCHQFQ3RkbBZu1AA53By2CyE74rBx31zidy9",
  "key16": "35p2rjbcwk6X5G2RahpyU726ZwdLe6sLJfkkTcrs5uVKg4gnjvqCKbKts4QhHzhjHPHEpX4vQ7VCqUhBHyBzTdoh",
  "key17": "3TmkgoGRJR1vvjoU9HhfzGThvRjdX2wJGwzzPLeEZnq5jScTd45otRckyznomqMb7NuPckgjJMqQ2bfGaiPyv9qB",
  "key18": "4GPa76XTyAwrd7uaqpDM3r4VSs7pqdimJ7rodb3BjfeHMQV8N91E1jNNoYYTxcmxzbgfEw9htn3QSq2576Avvor",
  "key19": "2zU2GQQUkLLLEQnGvAcWxjPh625gXHK4gWB9TMP1WXe2osAcQ8FPFE7pQrLqqzHD2suXXukQJESiPcaJ8TxUTPhg",
  "key20": "2pdWZ2Zet3i1EouKDyqpivsbTTLAU1mJ3cUq8zF1PVgrwCJYyQBWhqAJzpaNnEXpRoF6sgquQ25F73VMaCnjuzpU",
  "key21": "ddNWu6XnQVoGuD21jGEzDGowV8sTg3tEu34thkU1rZ5JtMLyb7MF1FWAVtrGK8Xfua764BGZRNPSXkL24VLoVhB",
  "key22": "33g4RaEjtJXDN6xm3S7beRQzq49fjTh8XkXo6RHJRZBWmsuDLYxHLVooJqkczmR6Xcx2SaYfjdxEnqj2LsSJp1Eu",
  "key23": "21ZQ8A2F1adNCSv36moPULx8LttzF6PwdaJonszbxrrp81qJRBXxbzfNraepHy4Cqd8CMNcxf4kucCUPJwya55Bn",
  "key24": "4bV7RdbTLYcwADFVPtBJPHo6pMhV9aVGzTfhB9xZ6RhyQCnYBgURiNHz7k7K3Ub4mtWKRvf58itiLzmgpiyLzYdx",
  "key25": "5bvnTZNx95c6aJhanLC2ATCkBFC7s5nM9SzhBadVHXAB7xCytrZP6zenM2x9bbVfjuq7yBDnDsrMUPb8jFo9xp29",
  "key26": "2Rfbg674dEQrHFL5kDd7B4Cy7Lw7CeudSawbG9eeNwsimDc37MyZjMzNtDfGRSJ8wtC37EAN7K9cecDSDxphonn7",
  "key27": "3ZnUBVsEr85UxM4vf3NmBEneg2o7p93XqpW5ZrsmqiXvVnhHpf28bUF15wTVBfG29w9QDHcZmRQf2ZQC9pUcUJLx",
  "key28": "NdGsgS3NdLyvMcZdFoWi3cMrwSEVnaAYtj8Znp7wQvNFajFy1XmLgx4SjprYFrGhpGQHSk8uCxkDojPKqqVqJ1F",
  "key29": "4ACwT3D3jDLk8oxkmAE12qJM3ttPhNgXMRtNgaxDANMA3moEv1oTcvGZrcBX5GCnbAfxZ1FKXVw4MkPNkvSthBDN",
  "key30": "D96SBG915LzS9TsjmSka51oLLAUWDgb1iMoxMHx5rYRXmRS842xLpUyZEWMkpJYahhCxWvt4qAm4uXs3ceW4kRb",
  "key31": "3uBQozJSxMHfqyhzmaL64zKHLzqK7wb4PQ72XgFArpbRgwF4jFztNjqdsT8BgtsUksSwdXh5f9usW9LGWFPJEJBP",
  "key32": "2MT9G9gVcR3G3aztYwWHujwMBsdnv1FpPWpV7AU3SvT6wziL7zmZXEyFJ72fdpfHxhELzppEgCjiRw3wTQtLqzNf",
  "key33": "2VxNDddbUqJzjEeEZM8xzNUHjBj8bbwydDQHyhxYXq6kGAG4K9XJLNCtbJzjBZ1fmjtdV2JD9VMqudXZ6soVtvom",
  "key34": "3Fv4B9Qk9uB3gAzx19LtFSdhKDcVMcBwApb4SreTP6jmrB3BMRiPovQUMmkkCBS7yX7mUBnhi8xvB7fjeUsAzGVq",
  "key35": "3rDhZ2UAUNNVxb5e9beNYXukruwdxXZ3zYkQGazHCfugVSXKALSPdKxj6v1Zr5WWa76RcRpPTqNxrJEMunsSLNJs",
  "key36": "4iz9yi7GM4a2vYUx3mowDMNP3RXohLTocNvB5omra6Rd9hvoHqyziYxzkc7PxvjtcGxN7Mjs7JREP3oaVSzqeTTJ",
  "key37": "3b8UxKiqVkz8jqGZeHQGZkeqXQbWd6sFWPuEBR5nd22KYFgUbPxni5ThcPfjgWQko9JNbsdg4AZPXQ6Hq6jPiZBy",
  "key38": "5tNXcbk1bsYgBZU5WdhCcZ8vGkycuDMdyB24pfTGoZ8Zfd23dKtC3xYmuzm3Li2x1GtS35XN6hoDdnRSTj5rrV9x",
  "key39": "2mKtBuhmfpKJZ4qFzNXX5W3vUnbt9bihQSGPbk6XFC915eLGT6dJGUrY8WtGMx5JXQc4DRfb5AqVGbejCrpk4d8L",
  "key40": "2mV6Lq6uu35RSAxb2feKFfb4TCFYp8iccQk6TfFKtdG8Us3rrZDE9L4WroyGbnHeFvR352u8oNXvyAyPXX1XCbET"
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
