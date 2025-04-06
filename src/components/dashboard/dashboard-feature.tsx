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
    "2GFt8tXR8nv84VPwbQSiAVMt7LBCwRaUGaqGHhMoLPLtPtrQjeUoq3g5kkJZNGPmJzLUPfgsmf1hBwMeeXd2wden"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnTpXreJk4sCY3UjTXapGFBPHNFjQJZKv6ocMDK2ya7er6n8ZQbGPf3eAJYc2zGcud8eihr4c8FKhXMMroVaFiD",
  "key1": "4npBaTGL4RLVswPDUWqNgT1DexzVzCn3ZFLj42L2xtEps61bi4mdVqsEDkk4iNSyiJ6a1eiStbmakNqwcByJpvkR",
  "key2": "41Qcdsfv4AchpTMR28grwNnZRsFsPTGcbtde1deP1dtctcpaKhA5qcFyueiKzbpBjLAxWXJWxdBfrLhJqVkrSy9A",
  "key3": "2FRSEpVUDJ9Yhm6NKTVkobxiVPAexAUHxy81i3pLRy6d4gdBYFA93HqYZ3m5vde27anWrBWEEB6zQmj8FGVD7zmt",
  "key4": "35GzARWtPzu96f6x5BTgqvCeepL7Ch1Kj6UYufmTXRrsmyxd26vBbXzwg2pbskqiCEjtBHyBgh11udXSnAd1MwqX",
  "key5": "436ZpuqYUGkpcYc5GwdfeXmie2kpjw2tqvT4ZNAYoKmYrnDBqAUEr5XBXKbZR7pPtN27dRdp1WGTqu1e5drqbTwG",
  "key6": "123Axb5As7gTA689gXnQwSbxrG7tB86J8BnrRvUPVN9ugB1grrjjex97feUmmNh7vmq5uJdsTJssaPXEMMtzMM8W",
  "key7": "4VLMdqGsTMLgjDTfnHA5i8inSM4qJw7d9MWAdqSbeU719nyNXk345N3QA9eBmj7uLoHCaXW1bo9eiRikmH57Ndyn",
  "key8": "46rL8jXCiFKVSwqhjjJUHV6UyZZMtQteSFXdTHfHJcJqvdwPkHmXUU7HxAX783wzWzFaFHcFX8GZPJH5279ZVj4W",
  "key9": "24a3J39TvJMBhmNBbHoKFHfjjZCSC2mzkpmEYMhFDVrJMobZR7y37WTgRXdYSyZUoBTcDPTkQKeCGHf2rww41eyb",
  "key10": "5WVDcTwESGrsDj2cWaydeu1xTtSsFs8Sk8YeNwummzzKqZ5Tes3cBWk7qWHkZs7n6K33thAGD9rZedZgAk3NAg8j",
  "key11": "2mVxWxKSogAL4KLpoNpFoi1AAhEcGpZk8NNi7qHiAUthe3u6nnkmVV9vBiqWLks2oFK1YtnFcGiCZtMfoyq7AA13",
  "key12": "2fyayM583RL6Noz5bPvQHcJ4o5Lz2gX5qX9wqP3ixYd6fwNJv8eNcD6D1qAP9WwYxJFPjb1oiudv3r89FfjMBpCS",
  "key13": "5SFThTUu6oeDTvZhGgERGsgBeYA2GL8oN9vLjJQuxvTpgHRjpKeY96uKCkMAxMGY9Y45tjRH1iDS9UMFmoMFXfMV",
  "key14": "38fjj8nHcaNnxAi1EBckaBTQpKKy8xkapwTuSoYqxJSAbGAaGbHFEeHRXSP9m6DU1ad3SCXbvdXg9Qk56dXR1h8Z",
  "key15": "2y6VMwweqF7Zw6Zu6BYFavHujhYvnxKsSqP7iszJnpTcvihvyCCKPkzw5CUkdJTs8ZksHLj5yRmXE6wCpU4ZmMZ6",
  "key16": "3c2yf9DAoPk2xYY7HtGLu2vLTdTn5r7ohKcfE45GCyhMEE27B1Giao6RuNXHfkeS91zezDUtXeQU96uEyVm6LAxL",
  "key17": "5YoAqkn7vQfYxojx3MyjKmwUEKqVmCDn4AgdLGxhDyupjbAAdgdG68SEdFawHCy7fZN8asGbrKQmhFh5gM25RZgS",
  "key18": "9UsvmyJtypXsxcoGP93EN2LFZwNYmK8165wd6gBzuHVkhnWmvwdANFdTyzMeGL5fCZ4ViovMBM2Lcv37jhb9Az1",
  "key19": "1YcZhfAbcDnaCRKLxtHk9sxbDymnsZSeizPELz6WqpP2tzgS7rX3BL964y6EAj2CCTp5iyGFUL48dFmT9eC4DAq",
  "key20": "2rKCKhJMTgDNdic84X9e1RQec7Dh3CbeRtekrNkaDVNv9Jw73DGtb38NoZNN3QJVudMk26SBB2KBdn8AmnJsPoGt",
  "key21": "2Uh24yLmrYaEReBt7jeWrMfv1d2t1L8kbGSzWGVJtyzmcSAtpcjikbMwh5AaXHQHejjeZP66LFY5ZBsUMPz63ZAW",
  "key22": "4JejFecsP95C5GDwPG7z2dUnxMtDN59tXHHgabELcspoUNtAYVt6mDY87pQpb2LMDmbKfDqJpDMqwnixdHbSH3RU",
  "key23": "3H6DD6w4RiaysfHhqHkcUXfM7xP5wZ7Zs8yLBCq8K8GJ1sLwN2mucRfB5jBy1a1R4W9W4xoxq49BBJVESEBLpofn",
  "key24": "3mqyYhwGa29itERqFS1DVn5hWFNL9Evm7sv7hSQ7xcmHp7xnYzqCectdme7Kew1UDQtrc8mLcvd1Mt1cXhZLfTuz",
  "key25": "kFdQ9V3vdwGc4ge6outKkW8nvCedn9zYAcuWM3ccsEMyLyF1suGVBbVUQ2spNjmYiDgAF6wvqK9WBKce85Pax3V",
  "key26": "2cYpuhydGiTDc9hubaxvjpvPFxB4AuDKg65vmtnba6fd1HRfNzgtZmuokoSaW6cbGSkTPxCH5WrPqoBqPCLryvuJ",
  "key27": "3MyHUoznxfczwLLueZLMnmkvz1NWkKgoh9XHBuxZU6ftKaJ8fZTVaJfNznxJXaFvCEHjJJCmF8KnvNLDBuRA9ChC",
  "key28": "4HiuXyZug6P3rkU2BGNtQaz7wp2mM47sLR1yzrWMa5wFiQLhmMW6NDvQjEnuUGuCk6h1r1cvFHFeW25XFwsFCi6i",
  "key29": "2wAXz9nySpHTKBwDuNPjX2AngkveRq8F6rVFNrWfoc7TyPD2B9ub7QshxkPA1Sa8Y7vV6JucPuYgk4tPU26rk85C",
  "key30": "3S8yBZ65HB3RxLgW6ttHdfJfFRjQW3NsGNnNv4Sdt2oV8Qi3MxSA2fcZ8KsAdEjbWeFxtm3fjtQKxR2cnmwz72GB",
  "key31": "2v95MgBsUFocLEZ6qCzpcwYV6K7nr8WAdgw4dZV2UcYJEpLAhqZ4Hyjs4HSVtzEQ8MDvprYnYMbijHc6KVUKrr7f",
  "key32": "gA9Vx6BRjwcR68ALtfuAhqfigkzbhLh74qXQW64gC22LhjBgHgU1rpmrkB3jbBRPHGuSprKf7gvDMZGFQWj4mxo",
  "key33": "5SAfMnQD9dsjkWvKU2oUAfFGDquobNnh41cT1YTv1a9hJDk6k8BZM5Zw7M9RS1MmjanWTqDqkdC5xsexwSXxcNU9",
  "key34": "49NY6HRxsdqmtdKuJ629BzyFcav9eQuSmR7sGn9cMBVsEwAeGsEYhL6yDsf7jc3TRM5svhCdrFx3HEMcFGjfnnDF",
  "key35": "31QMbKyqxhauHG1GNFJnJobeU23mga2GYox75aeQSHT8U2reENUvPTAFbB2Qs38dPEvR1zqpqKWcRatygcjwdD77",
  "key36": "5vcMz3L7Qm2HgX1cggrXdhJPhQGjhp2XDgKfzciA5zcqK8YaTBfBdgXNeUeL6F7LPYFdnRU53urp9GARLYcy7Q7d",
  "key37": "2DmNk5hnCNPq4qEkpPsWc8yAWzPhPhQ57MbXftyZVbRWkTjsXJMmbWDS1GjM142QrGX3NXBM6Bksn2WVbgmnRM2v",
  "key38": "3wDZ3vma4KYQm4CMHvgzyavjWPw8EzDkexq1nfhwNN2nJfyFeH8pzzGAxD7dpvC1i1oAJcH3TyU9kePRmctPhudN",
  "key39": "7gzqDiuJbYZWE1pUR4zwYYYWg7XHsesV9f7iWqmMRpDmJiKPAvQNrbZYK5ZPeUrYqt1rx48MMEmM671UmZmvifF",
  "key40": "67go43CTKtUyZJe1H7iYbe3crWRCX4rFeUwwrL1GGWLLqvgsrfvLM7JNF9iLywfRgd79xJ5QAXY5cNSra5acXovQ",
  "key41": "4ShqRmo3YMVco6nEvGXvXVErPMNLLomgrsBE3888HZsD5h4Yscs2V9YovJCcegdkZWdwPi6RNbeUTh6iK572NYqC"
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
