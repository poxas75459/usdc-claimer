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
    "4yTBeVjwJG6DtE4crK3JQmtNK55WgQNYN7wHtaHpBjjWhy8nbHqbLE9Et5exbcxaAkzTRQY21skiEQ7d5tP8W8Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsX63WTCQgkVERVSJKDUvGP4FeSASUwRr7pLFk2NeinPjdV6c1Ry8RsavbeLGswifmYzQasficS3Tf8zzmLo6xL",
  "key1": "4S4NaiBNTkG2MEc5ncGkKJRRhPY9LhbCcwQsfKN3guvAu4vdu7V8Bt9akFahAYMPBJTYX7iK6U57TfZy7AxHBoNJ",
  "key2": "5EhQdp7UoXVffAyarypjAMmTXEwqBwAVXF659wotAEpbeGFxrdsWCjNkDLiLf4aFmR9V7HCWkynKtH8PnB19gKep",
  "key3": "3zNh4rrP1X6mFhrLerYTcR4GTuJVr3UCFAaFBC9cFj3TAecqdZqmereJgDF2rbVsVcZHdSbzU62sbRvtwdJZyZhm",
  "key4": "2HnhnkwboWF8YduGU32oTBJQt8HDBVKwQezZxLecobgUqh5u7A5PYg3LuP2CbGbDYp7D7X6xQS6b33Giq2QcydNT",
  "key5": "3Fzk2wWbQStb9vMwV1EnXjpaYGy2kXwMv1mJ6Af6TKkbVgYkmiuNaZ86ZAQHfPSMfnt7qTTgssexmGZ8decSnZzi",
  "key6": "2grLkBp9bxjq8KGrZAXr22PRP9AM1ReUiac8j67CRg3JYACyR669tRZ5EWQqjxVXK7gt1qRUFckPCZBhkBFERM4p",
  "key7": "2FnggqqBFWKk2BT8ycHGM9PVmQ9xQZpofAGAHnFDKY3wocgaHBvCWoKmNPugP4rTuHj5eaeqx86xXjPJxz8yQR4d",
  "key8": "43MEiHaE7xFRVZU9pyvdnHvgLqMggV43APxW1rA4PDKGsimmhTU1e7VSsDhFQ96aNSnbMpotwiEPdsifUU8ChGAk",
  "key9": "2kcEKjvQ25fgdg6D88ZJgj2mB45kDA6gNx211Q71JScwRn9cr2ptXF5dgmM65y5KrW1qwtfzN6mLDfC8zAKDBYzt",
  "key10": "3ATtBsEx3pmrnzAsKZPdnscCZRa7vuZJHSxFkRh37NdTvaHQJw9f7rZRbxYWEVxKVm93dJGxfZC6k6mHs3zYdpGw",
  "key11": "4kZ954bxU99AFkK9z53iKrssooXzAzXKTNRT2NfYFucHLdZyu75h3La3v3feTM9XZ3qyyDTmm6k1bMqGSmo1nkNf",
  "key12": "3KFzbwAvDrCuaFqXWnAB4F3MCn18qQa33ZHBHwyyxq8sQpLCFMTKVkXqqht5H2wK7cz3ZuVanwccXhCtefGPYKhw",
  "key13": "42w3HDQJXewJ85x5vhHQrHJC6Uw62EbsCMnnU7c3kXy3pezZYB7Hq7Y8cbG7zPR73DAh6x5ybk6MvUTZZZj1ZLh6",
  "key14": "4R7RGEKotGcHAVmiGBr1h99yJ8Vqus3qHEKPjtKaaA7V1XB97E1jNBxSuREYL68WHVUPCRBpfrEzfqN5uMYUwwb3",
  "key15": "2s9jxdLuTrmGoe7s2gVg9bCgLmRqzxoLzh9Hz95YvCxD8hvT34qr9or4YUkUijEHWNKpsMABsjbc1iLtAjLgv1Ub",
  "key16": "4pKj9mexXUyGJary2TfNtk2eJLZmhkA6v25G5YkR37CpSPKNDba9BSMd7993r9aPPEGCBJGCXLWhk2Scwz3Lqjpb",
  "key17": "WauhGc6d8gFrwAbybbTVFUqUAFmv6hkZZxtvgWnMZcx8u6GLxqy8E29ghPYpXABAc4cv8wisWBViVuuDwBZ6U4S",
  "key18": "61XumWmpzucBZcFL1VhhvuRUzJnFXMDawsxBfZdegtq2n7Lhp1H3FKtk8FNMNnjf5EsUqDsRnywzVw4QcXARnwu5",
  "key19": "3J2sXNXvKTpAaLS6t7aHocdA3aN8s4gRgwR4wHNYZYSfoCtmeRzBYH2ffUnTkCZ1G3NJ5jeKzx13vB5TcXuLwHT4",
  "key20": "24cV7fE7SFxX7fa7XdrtFS5Xy1euuHuiBRcK2gnBg6iqXPDTmKbtY6HmrpcvYbF2Lu7nsJ7hpPbbNEhDzHEoypag",
  "key21": "3Q6ZSjBMXsTHMM4vNmpWv8DhSYZRKDQZ638J8No1pi3HgjsZoaa6heuJ8KLVo8GpC1YS3ZjLofNyGnTp3oU3tH3R",
  "key22": "oMrW8VNDYgLaoPCaqRGvgUu5rdoHWyha91rEqE8aoxvEKRVbxBcAqjy2EA9rdVw9FYfzRjGjAZ13aG9zQdnZZ5U",
  "key23": "2xShCwdWR8oeyx6NhfBktvcxYq2UfLBCPXJ9FyYUHGzeQHUPFmaA6YPiZfvwwvyJURZ93REG7mMVHfNeFRMpH57c",
  "key24": "5ARhUzqiQiVGCmQgVFD5EsqpYVgfX7B2eVTRRq58FhGa7n4Bdv6jwuhop4okU8eNdVTaQM5w5SDAk4mfvcwejgCz",
  "key25": "2iggGRSJnoYUo1Ki851jAsApsEfpEvLTix3tcBTpvi7uJ7vNiVunsFg6f1QubyFxoof2zinrYNWw82PXwdqLAoHe",
  "key26": "65BP2ALff27qMHhRiGD9MQ3Mq1hpdifctFra1fpxfVP2u5whNRZLeZY5A89fMvEk5SHMVBYLD1AbGarpbZuypJ45",
  "key27": "4G933pDmQekLUjx9tWwmqyBKUkmqfsZnfn3kUey9x1eCNqrFAcB11wbgnwzmnpckhr7cMLaBNDQWkEApzwvsyPMQ",
  "key28": "zboMX4hWeoihcCyRAqgVaomFfqPbJnGLrKg6oUdvzAevL4RbCpyNw9MBVuvVVhMK8wSVKmtGpUGnM7vtDZKT6XM",
  "key29": "32DFxYvssjQ2UfnpgkV944GdiDfwCFxLdT7SunWaRmCSuzo6hYePogU6FxNo6d5WrM72tiYD4NaG14jjP41A3stb",
  "key30": "2BnWwtW6ktV1YNMxe4D2eyhXHzZ7Gqnqmbaa7Re1x3Ag2BSssnkUaMoQQW3CY258tJzd5tdYMq4kvxSJiiUKTb2",
  "key31": "2hMkwFGBuJHPS3d4pMe6GwNmQ25WaFdk82N11KPeUsMiSEQgLhnUoqfESoA21V3dn5SQ3ABsUZBFSTtNhRfPN9z2",
  "key32": "4ZhW8BeEAiS9byHFe7Y4FVvZakwYMWFzJCpSJGjEoHiCvmtjtma8TZyRjLM7goKGpoKiHiVavG8NpJ79GCvX2sd6",
  "key33": "5GVxDxy9AHCzHaHgDhPrhohyFU8pGnxHW9taJcZxZBzRhQ3bhR3bhBjgK821sEbM2z5ai637FwSG8KJLEDvtD1eA",
  "key34": "FzQ8xHEV8R9kczJJsZTxq3ncFvGiHY3skWEfyCmvsAhDVcuDcwpnUK5mDPYmPZhARLPgQnQk5dY6HJUDdxYcwJL",
  "key35": "5H1VTwjMEn8Qtp6PJ6zAs6Doh6DyYTeMGjfF2C7acSDeHVzsP5SbYTQq2EHCQbdXR5PKrXLFpEv8Ggyu7mw1Ax6k",
  "key36": "5DALmTsBedmQ5o5LTveUdPJCYe8GE6PSzELF1CDoFPVJBPnWuMkWEEeTX3q5FS8XuTTGDDGMpytCLHTJfzk7JmhH"
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
