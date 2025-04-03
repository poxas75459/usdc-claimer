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
    "4kw1hEUM2zchvyMmGy1LHWQLsU3ZjHMtYN43gnwntsNpdW9h6BdMiVXt6zTFuCZ7EMpv34Z71SMqGFod3VTPSb9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MtpXizfkEfDrf4Du8xkit2yASw1ncFWxt5i3yVMCyA2AetQFcfqhqBeYS4cmoggvbjJg1fNeCuPptA2gnkBsfT",
  "key1": "UXak5yMVidhKTa3DpeeJmaZxEZ1nTxSLj354NfvrJE8SgfbtuxwgSaxKVVzEi1uxye357MyhtJgRzycu64WenJP",
  "key2": "53dLf3fGGqXp954B5q6fKxgAEPftHzTNSTyKK5nhc1XYuvQTwtVJz49nArarvrVKZmDDofSkTCSxwxLrZU72kq57",
  "key3": "AxJaFCthbXtAFWSh2U52QMZYUbXfjmcLdwh7QFBaQUS484fDAQiPwx8jTBpJfUYBTBaVy8ZK2HzWLFQUzYH4xSE",
  "key4": "2qWx6G3TVpppTZh3yenfQmJAFfvDQ8vvC3j2GMKEwgUszqJUi9dXvkJhNceufH2JF2JhKrbkyVKkeVXT5sy28jJR",
  "key5": "3B52u7Hdfys9kQZcFAkD8wcgFuRFAKp6m5hRgCdkMaLQxALaQTvTi3ug8s7SREUSEXpPhGZtYWVLFZeufhkLgWSb",
  "key6": "2KBWNUQvK8xzfkKZsQat7RpM8fLHSQMwdZo8jMYyYsWSsEKheqbvqkL4qfEYmfxKacqLAan4B39PMuqoftq6MUvH",
  "key7": "4GdSdZsmhBhb2NREme2rb35soLF9SRTpNTqbkwcMaViuUDinaUVQvY9G9iv4DzG2Ee6oSPqN6ek75Robn3h72Y6f",
  "key8": "37aA5Pxu7yuhrzTnrJYEFkJ4HyoJoWeCMjer9jiQQjrpBZSujLyhM1EjJ9riTeCaQgUnNeRp9GCJSCdFFEpAYwy",
  "key9": "4rWyxX682o8jFfgQdnWkaA2XopK3SPzKrjjnaVZ7symUQD59TFskpnZ3zRHmVWmqG9usygk5NywKFTg1LZKhU5AU",
  "key10": "5KhCxyZzVK5amcuoFNjK7E1qAjrQBvRuqNibRaYgjLG14tJPfaxmy3JLZ7GhMH6XKztNYoXV2Ahx87vCgnG5vAXq",
  "key11": "5LiJJHaJofgYW6giL1fjEgxjmer1ueENRRijp47KPArhWaAWWZyHEiBjjdjM9LKTmag9DTM3EiEHcK6Et5W2QZje",
  "key12": "4vVfAsLVTAuCncg3KAPqav3ZivrbCzR5p55Kn2dXD3d4qmjQV1zyG2D8fDEheEHXkFf9gTK3DuLL2ATkRaa5gBQR",
  "key13": "4obZqMJBQzzSKBdq85Qiqd2L3n2LJ6E3GLopNJjGFVCREzZbgth4pE7KUEpeZGCdB4jf4LKTDwbHh9d6aVZYCNsk",
  "key14": "4z996fG5rt4baFKe5zVeWAk5yDU2dCnnQyEhie3KAWWXKg2iagGSsuh6RzZdZasHuhJCfVkZ4t14jEjth7mgYqh4",
  "key15": "32VHk5KjFF9kafaFM9Ft8hgtSW1wzJcwmAJ88HvXHKfYM3aaPFWNDt7iD8W6MpnPXbhxiuxPVNf3YubwyMNSeqaG",
  "key16": "fE7QptvtSnqDsWV9i44Hz7MDHfyBxaTN7VCyNJnjYdhidU7QH2Vy2ojiLgshxCu7ygJ5U4icqL6Cp9jLSNsuYfH",
  "key17": "4Q6wd91dUGzhGwm39T9qFqsc9msQP9oMXfTf4vYHb3WBr359mxcESpT5RJQHdLJ5epronNotK7HjrLgVhfq1E5DK",
  "key18": "3hayKXSPzLNHjPWAybSUEWdWpw8XJPXqDTZSqSVMCxEYavptsW3Sr9AEyWi5su9k34ni8iY38SnQujArJmzJQgoU",
  "key19": "46ZMdn9CwZFo8x4PNYpE3MSqHDWTpYXbJz3Cm4VkGVaWpetJpEUoX2YfVg52KriHLsDfFX3u5fgtLvWf1Q4Tfurt",
  "key20": "4aoHYsJnvo6vWEqfNGXuhcUyhq6n26jXTs2Gps1csZ3rgUs93Uk7LWyZFT7VV4aqvzvzUYbzCamBN4ou9ZN9MU3v",
  "key21": "2RjdHTbX2JQPo6kJAj9i3MnX8HpZMnYWK3WAvP9nXtrXcd2aTmrmM4LKnCQH49An6ENtPrTq8AdsERH2bKaKGXTA",
  "key22": "2bmssCFbb1Miv8GmUcBvst4J3EF9c5of19FQ5KqAgvdqPRgnrvZibWkcfvkJM7UEfH91jXBbLHbKRvLabzCR3Ecy",
  "key23": "4MjXNbkd6YaDRT2SuFHKrwoNxda1EuTkM6okPBUEXtLk79Zd4Q2kmFHxwKYsZy3HWtP8VpdqtrhxCUm3HmWTv8bd",
  "key24": "23Jtpbttg6CZR2b6jsUbnZiFW2uBAAzSu6aDdET9oWEmTe6o5g5wqtyEZigeDwpfFXEt9ZmgGASP6zJJGjqpBgo1",
  "key25": "3GxfT5G1dUv9s8uFxoKDNqDdMQBs2Xpdv5ozQQtVoKgyGhnuL2hbq61bW5qi97Zzi9mfkpT4Ayg8vB1TWrp2tsQ3",
  "key26": "51LYwmeFzhYbemPF6gAkUrZN6ow7U15QFQF9iaXNiccz9bWfmnkY3tv3amv9QGLhkxLSqfcdxrYPdSmwW2Ph7GaV",
  "key27": "64F3mga231hVwiS7E5K4gmWpShMCfCR9E1R93VaKjGUfMphQB438fiJV3odyizgTA764PareTAmyet9y25ZBVPt5",
  "key28": "1MWs4fEZDcvVExAFSmsdhvUvjqKbSPLpvMkPCjFgtT3QUaVGhQL4LUXVjE3pGmY4mg7EZFj9mBBBXcdiRUSUhc7",
  "key29": "LE1ThUWCx8uMJCCbXwjFxf4fEVTdDWTv262todhVMBnJHE36WENB71yQzA9N42ie9yyFNsVcTeV6QAgwBy9XtV5",
  "key30": "2FZqf6TvG42vKXYgaHQ5z3K5hpZF5UEve7LTU4HuBM1rUrR2mZ3HgwCv1GmRkgH3qqV8L9CQgRyHZFbvcXuUZ57k",
  "key31": "3iHHZb1UX6YZqozNd7WbUGQ3SDbETeruY31xamtzJDkEXYpEL1QHQmKxkHQi9vkoopNjJ5AytmFbPzPxYDKKP5qT",
  "key32": "65pF31TpAz5kvaPE9kNtHPXFQFbVDCfrkqR9J7zaZvjMXR7vBM2b8QXYNBEENNCm4U3AeozeLEeSzbNruzfnMoBm",
  "key33": "43P6uccgvCJuhidqrrx4nwnfxxSxzMnY479wq1ddeELwwAVfApbSSoXnifptphhzKaewKw3SWLZv6RzSvEJyNjqT",
  "key34": "5vAkK3JG2RaY1PxAoYiRnnH953Ko1zW7XjnNsMc9yvHybafCosxwTfvAfQQkZ8apQaGQwp3ugmmnt1un5m14v3TM",
  "key35": "3oMC4ZUw9iTrV8Etvbf6HMgxzotXVVPJcYwSRP9N5gRjuskPQVsWkVSRDJDGzmLqmT8u72tt8MoENbaKaD6w3v22",
  "key36": "2SMhSBcbL9ZWLSbrdUceDC36MByY8tFromBqpBdJDtAVXz9KV4gvCV5KTUyNuYHBgQdoB49GEKZvkzywFJ2asDuG",
  "key37": "5yCEMryKnHBsYhAJwfnrUukjwmVjyV8WEtZTbUa7HNnUzSqBNXE1uXWDeftuVvuJZxUu6k9q7135zksmYwxAAdHb"
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
