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
    "46g16MZGguQxVv7FZCkFKo2BjVDJKhqdL4SXMhPJkfk2qzfxhc7W1po7sA79YbqN4dmMAN2HP76KogxXzLCqWjvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPTRRf2iBRufMDJkzvhzkhnfYK71GFEKPSi6xPaqCeSp5vzQm5jKb5dFE2sYwCk844s3npKbHdcPdqZfeadn6t3",
  "key1": "2ceGBG7GbWbQ3wjkih2rmXcF84TwdMLb9jUeHsWJjWr8XdHGjNjV6Pc2fdq8J336xgCEFCUD5jU3YqrN2qo7msSC",
  "key2": "5AeyFYVKMxnVyRw8PgzmmccS5imrjXj6wSTRzWJMRRroEXYh8CdzVdfmweJBPWRfL63BV5mXqSfhuoBFjTSFzMVM",
  "key3": "4qXYcsVg5tyVbLzaHLdva9B8dgqtRheQLQL2eHYWGM5J4YQ5FhLBSKXhtg8AH8qhWgzMmwevxSiNbbWSW9fYXBm6",
  "key4": "yHCNd9XjaAWAMRfXddPLjtG6KbUvw7tcjnWugjjqXfcHMirfqoNGpjRZvAMonY52DXwgzLnJ7sFadZwGEs1D39D",
  "key5": "5L35A8DNLDAPxQ3RwZceaYiSqsbTzGX24ULyPGWgCh45DGD5mBRtFBBXYQyFhfyDhrpvtL3U1nYNiwtuThzbogxa",
  "key6": "61KR4i7scUJq62zmSzMrPgRLJZYwVpbzJsV73abCCsK71q6nTp1FvXBJmnpM6pRwYiT3iiHWt7q3vhXRUYirqcZZ",
  "key7": "3c4JBtGYFAhNoPxugLwDvVQKbZdX5rZsTZcm6oGTbFNuRHEFuUV83bUBAjsC7miQyZ7w9LMzXWgH5GLQFLMJtVda",
  "key8": "5iiNPBHSwjC6bbNYw7b7TW1gt7b9Ydeabv5UMFSJ5staukEYubqQr5AtoseXEKBxQkzU1B9N4TLwSTxkKgkgyVhu",
  "key9": "2H6GR5Z1dtevGFfEcdrrfe5Qs5QheLpp35La6WszY68qBHTTswv1hkdx6htDa9y4KTFSzTm6aozEx6TtCPCxrrus",
  "key10": "3jzjJCfY5K8w8ZjQh5utDk3aWHZt6QNBQkb6YWUTT473HLyiyKGrVQvABFHZ76reJK6USf3pLAgWCV5UkCromXwp",
  "key11": "thwuM6cqdDZxKEyrKAJH2rDRSoZgz5huvMQtbm4LqUicvGR1mfDGukEVJgZD7B5ZJ4GTaNdfDtg9EQU6LY8kV89",
  "key12": "5jBc6CN58hKjwo4BWBu8AUfXQ2erVcSh8V6rWoEUafFxZispxX24p8nH1gjU3H43MSQhdu3aho4HWPZSYp2yiJBn",
  "key13": "nDgJpSdJzmZPXvJ7icZvpFpUDrRiQyYyyMSd4xotjnkPEjitqfRpziNLW2oA1bBSQv6uLKkFfRRHwpUqGFeCupA",
  "key14": "5zDibMp6rdHh8THWKqnRchsEssEXfiWgx4RrNbwGgFKWxZmNFjUozD9ikXEDQR2XCi4YWxgLz27b8aHTVmJkmwCx",
  "key15": "3U2svSk71wBRQwTjzaGUUTQWZ9gThHoAPPgNgQBDhAM3vJZV1dvpk7S4acivBryjeaV5SFT3ThkcBhe3WPSM4BFx",
  "key16": "YNJrUUZDxG7xpYWKXsS54hqemEoh9tJPBFZMpb7D1SEWHQDWsw119RUzHQ1t46yYRGiVfdgFpw1TmManUGo5YDG",
  "key17": "5WqoMYt4CebsH6AyHbrc8tWmKpzW5dQ9vo6pFyH1DrPntjt4R954mr6fjpvkR8L4wycSrdLg7f8sNP17bYQabw6o",
  "key18": "5ewYeoiN85dXM22dqDQ1Z6Tshov6X4q6fLjiUHN63KUM7bZA7ay3ghPa4ZPgLvbUtTe2rqxM7Dw6xxgUwKEyWbcu",
  "key19": "41L2exQEJ7kG8orY5XSCzmQjFkevNWa1PqwkR6w8V6ckuCHh5CKxfrHNQzpctbDqpveS2tJNwKu9ayTAhZigKVnF",
  "key20": "3LKNsUnD6kdC7Vc1k7KSFHkGUK98iNxp3ffSZNH1Wni1A4reMKkJ23aikcKzge3XB4pKBZwbvkcm2xMwgVKDD9C7",
  "key21": "2uerGNspLd5REMFDrcJSJ9wtkbKVoYiP9pvQZ9VUGDdjQ93qzpqzLi7V15yZXpJ6bD8preD9zJ4sBpsy3u28TD3A",
  "key22": "4ej82f2nGfBnoDhAmsQFuEN5RhZ1q8H9NT8yXn34wkumHsXAuXHkgQaJvvyr317cALTp85t2f83cEVwos1GTsGoU",
  "key23": "3iiouhG3pJN5RLJTfV6QdttwTgVAkeDuNs6jtHkxRk6eGBo5e2jt2so5hVD56KRB8UfErGe9ASvSXSNvjS7SS4ai",
  "key24": "4tTKoufkbfGtKpPQnDuwSL9rorUfT6YbXkmBmcsnqFLMkTX7Bnc2CkTX5XmhrNSCEkc6eVckcYbp1d12ezdaaUN2",
  "key25": "jmexzM1WenD9gQaKrtPkZJaF4eKKdjjfCzJxSj31xKKvHgkDNHmCZtmCEccrrikn52HoFnCNrbr4zL9YAbfM2Jg",
  "key26": "2oFrJ4UZBUU9T5UFcwFYH1yNeCziVgKMDkGLrfJLS9ei79Zoqnd6CX6RJQ3BBYqzYG4sDQsFqZ1QYLf21CuX6e63",
  "key27": "c81S5AozENsiFTFaoqrKyFQGWtCfdAZ8y4vxzEdVcKC3XRHBrrJchhKHLzircj1859VBfDbVk1g8L6xTK8ci5yu",
  "key28": "3oFdP9bNHA5cLESGn5GoRWfnuygaiTcGeFuC9L6k95mcTspmZRDo4AqD3bdQnWKbv38d5coCQ1AYXPsqahAXA8pM",
  "key29": "3hxs4G9yZZ1TZjnH6Esk7afvEQ5E5zGt35dnXrJmTSrr1HLLurWFd7tvfcBgDNQNxTfDnz2wyJsKLoBLjrxMWLxE",
  "key30": "5RAm3dxcbWnhKRa1ZPwrwJxG7XFU7HHbFKZC2scrPfxjfWJCK7CPEiwNQ7rEvnB1qMp3a4EkMp2LfEYf29wE2aoS",
  "key31": "4z32i6u6PjujvHr67GbpyEZyBtiQbhBvNW3QuUePsRzdG9d8XK62Hgzk1ViQz6UDX2mQbZeXkjx3ifpyGaCmFmva",
  "key32": "4kUSTSMBkvFgHKiiijxRQCbBe9Hmo5JxHj7MBSuEVqonsVfJ1Tn13iZuroAJUJcGLTF6wbp7fPh5qEQ8WVW2sn4D",
  "key33": "2LJw56qvu2jEoFcRksKte1Uvjt4nNGLq529ovrXTzsf1thgfEyBUU6y6B3CtU64LPER46S85qYzj9upAVdB37bay",
  "key34": "3gZwavEwfdRJzvNSZowUQwXMkAc6JyKjTzXaWvcisHFz54mTyb5wsqNWN6SmdKpwpHCXKKLjfMR4woSL8dGxUCga",
  "key35": "LbCzxrVVC6FaNqWJxEeCCuqSzs2cJeuWFVLwjVHcaujEJWvc3LFHxUYDgPy8Ks8tUSGw629T1iDL9t5td4C2wnL",
  "key36": "3W9PAEtYFgPTuQG2oZwEp8psLK1srSNGwDM86thj5h9HBG2nkUWrD22rU1JcJp7XSzuvhq2Qck6ECAeEshBNJX1m",
  "key37": "3fpWAxsDy7bqdcAbBYjHnwEAsc4S6Feuxwp7nuZWbPnupLiTL7jfXJZfYQxbkCHxwHkSui4C6AWtWfPYYzUb9Dip",
  "key38": "4JJoLCQq9e7phTt8ejYVr3A6LFp2WLZmyWa4NrdnVKjCjMiCGpk1WvjUmYKPVDZoyyQBvPcWyvtTbXj3XmdafQnR",
  "key39": "3HzcqDwhDVqaJyt3ndPo9DApU81jKjJpqhebx8Ha4W9cFiro3PFp198cWwMC3RSEhTzVQJrnr9bWkbarWopCPFeu",
  "key40": "52ASBLdh8HGV2kD2ZRPhTL9ythcrj9okc7Esve1CjD66MRBApZNJtLWcdPsnLjK8Bm8SyPMBSwaxYnF9yq2iTqgS",
  "key41": "3CY16KRH9WSASn57bShX7qQa7isZfjEUCuYwjoceCyzqTCvevrUeTZJCRdFQV6LwC8qc3qYNETtJJbPNiS266RWd",
  "key42": "5Amo9eYpYkngyhv1LdMBmY9Cub7NMwUTt5UrggyMtZv1zJvzGexo1ompQDZ4aZf9MJrg9T7Vi8QaBmftYwC3PbDj",
  "key43": "61fQXER6tA6fj3eamXhj3Ebjtkr9AfhJMinS7cH275SCrSXT26SsVocMTRXhths6TVWvAjht8Gf3fnKkH5HjC5Ui",
  "key44": "mYnjLwRuCt8yTYUSQmS1Zg14Cev4cRgBmwwevn9gbKT8haieT8acMasTMzUDMS7P2d8ddfTEsWmEYJ21X9hikUD",
  "key45": "5fttLX7V9ZfijTMAwkYp9BJoA5fYzVUYbxXk1mNYRZffq2yeqGooPLa4XtD7fXhMFFNkb4ez3TDyKF4YxCUhwehG",
  "key46": "3qM9LnWwa71ptm2mTYnvCaDsdpHtBZuDfk64NJTuFRzDYueitQ68Y95L95Wta3EXsXnEjs68K2fWZPwm9DQy6Dwe",
  "key47": "2vVbVCZxPKczBGFgVEkjo5wwUKJMd9dB3omCUGtsD4bwPanqPFDopB4RRz4DoL3zghp1ut7oBv7KZkVX1ohTfH7v",
  "key48": "rPK5veuEMRcJXnRtGtiBwTLsaH1NkMtv4GJtdEGrmiHSPzGivwLfcz24KWrje148KqUFYQtRh7NmTFuoTZshhoQ",
  "key49": "3angePM1NMP39xNTL1xLhmnBj1vr8wnqAibFKQDt7JymaFqUcNN5JBF4HxdgzDuo1VNbNGbQh3Qp4cYgKJPncr3t"
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
