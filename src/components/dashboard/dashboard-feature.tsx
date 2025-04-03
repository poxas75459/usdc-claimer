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
    "2fUf4km8duGPabA62RABfFLTCwn1SoWRqLoZ4t6cQyrbb6SovwLZv7hZZ5jUvanC7Eteg6HqzV3NDyE47EYaKvaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRNf7a3XUKM8j4ezftp8rtiea5hmXawrqFzsdgBL21LNnhhjhkSbu2f23J4FqbRGo2zgaJXWVZCs1cB2YQGgrjb",
  "key1": "5ZwP8atMpDgkaBJLS9K4ur2QjuzN7TwxpvHB8Scb5Pmnz9PLKDp4CNmQ6m11u4Ukny7sBjSRs2ypSvYuVkmctVWy",
  "key2": "2BJRGiAB9cwTPd33k1oijmv7NcJdFVEmZjXeUYWo4dnn6ZuxP6M8x5pjPA9cq5fkBNRz98eYyCbKBVa9LXinfFdd",
  "key3": "42cAUfsTLjANmbJcjezr9e8JrhrZdtzDum8K7e6obuUyM17Vu1gVrKKv3r9oU6kDMrS36XJ7AjCJUzNXoMHR4zr2",
  "key4": "tGjLfECmCwHWdhBD9RgSgA3UqM7p5EUwVvRc2UsfQ1jC9xJA6abxu2ozWZYH3zKT3aEmiRosEuqd4tMUaEJRXSH",
  "key5": "3n52NDcQzAxZCNyFAKbFBnuW4Vp3pYY7D44Sgf8HETLNDDDD4PtqTdLEcmhNckp3Tizpz3DD3LswY52S1u94PK2G",
  "key6": "pX8oy3431DQkwih9fvy6DuWLPjhNkYWT9aLaTQXBzc1pPRSfETzMxijELhv5VQb3egzwbCkCMgrHupna88ny3nF",
  "key7": "59HQdc7XBYsNBZtnbBMjSYdocZ3ve4Nb9MpNeSqXSzEtpccEd7adL45KLafdLPjC61bgZ6cYrgJ8mpKMdBngwa5H",
  "key8": "5twpCKERNykLRev2cDZkV9p5DPx85gBFLFEQpj1XAeiVzzxGA5H9QJozaSfbJJrXJCTS2zBi2grHiGqJ3CPzJdTg",
  "key9": "uG1j4QPbA8bTqmoZq6pYcHbeVh6zcmraW8kSfveVdUN7wjAXvGcHhdMMg5KebnntGFQjhaiwsDRbMcRcuPtsQsh",
  "key10": "5cpuVwPWSk8RMBWYEB7fjmQmWPsypYNNCghYSppD7zJsH9PuMS7szZmmJDzHcv89n5ikrCbd3sTEhyfqrJ8cr6Rm",
  "key11": "4iSWe56bjXym1BT9a53fhmD1Ugs6T3Vj84fwe7V6CuMhHLDN1ag2pmjspp2xkbugf9edi9G7csqVUKQi1c1KgRso",
  "key12": "45yScarQ6ZGrywmCZfytuYHMatkTLL73AcqT1cMpRsMAYRZpkeecNmTy1b8aJXuTLWAi99ow55iYoaijKdsPN2ms",
  "key13": "2mwv9UiLQzFEv7twQUsnbNsE8NGGfpR2MFxFqyfioTxdzfaxAbGa4TLqEbFfefANUx2q5oENPKEtcne8LGVWvGSy",
  "key14": "3NuQUsyXT8RCLygrrD1K6FmcefTV6xm9ks4cdhexvz94VDggpP4ro9v14ms7vSSUU7Tx3ZA6mgeuTQWJngcVhskp",
  "key15": "5jdT2P4yvNHwXhMpr5E4ef2wPSKcKsCWg1RdPQuCAGN6HVM1bvn8b5MqZWSqbX2GMZEkW56mcn1TCGz2KQyMbHkA",
  "key16": "19CVMXkuUrgXThh3e6X5tGaFGoVHcSUWDVg9Ke85VsxBCjsywWMD2be5wfeZLcJuL1dkzuJhPv8BPJBYcSzqvZQ",
  "key17": "mES5BsGTfaDCqWbcee24V59rcM7HRxpmjZBgtBqoycrNAWQRY5x92nUiFvtsDCThEJJPh7VUDfgdAmYtavZBZbB",
  "key18": "5spi2Wx51GgrJ7YoGHgoURMEjRxJM1pdG3cM831QxjRCcmRVnmdqmqJ8vJuTuN8ZqHi6mYbeFwdyEGLBgF6sL3DC",
  "key19": "NK69zmbGXsNPJ8BEzXRT2aBuX7upwkmNW3inCzRWzBbwPPfpCb6epcYmFnQL9wKrdbK9ujTesaXD5zTkwTZu5zh",
  "key20": "65WTaa5JsBd9Vm43VVWuNjSx7UBKDJoL6vFabP4QpPd6gyYFM2bXVUqDEFxsEid7nv5ETEkfxoF9Ci8yvELyXZT1",
  "key21": "4WqkFimFS5WtQDd7mRLvmiSt2gkdd9rRFaABSGcshMm46gaYzhwkbmxBt48tKw9SW8tfA3T5FNoGjYpBk49vLZS2",
  "key22": "5i8HCrTUgRvxzA3ZaeX2QxRf3rBxbrZ5m4k1UsW6z3aBD33fkfiyS6inEuvFSPorhdxay3bCjZ25bSwrTpYvAECk",
  "key23": "4ZARive2NiLbYr8RWwYN6xfs254Je2njXoUqhUofQhMwn4yR49ay7wMmf63AP3gfYYxWttg8sNQ7NVrFmgiQpjnq",
  "key24": "3hA62DFc4ZYjigrpQnbrqhpXf3v752YmVeWCTc7V1kPtLE9njurXNtGhsFBjiC6tjSmLpANmX1ktgL772NFcb3Pg",
  "key25": "qZB3ujh1hKJUgsfAzmTH4t6z8oxpfgeh8W4JqAPzwS4S9y4tQhhjtCT92UZ92Vydh7ioJjbSedUSjhDCU6qFWDN",
  "key26": "2CTiQMPi4sP4vTJwaUwVXL76UQPNDRQEfZ7T5kkkrZ72KXToSnh8kLzKK3huzSej9kMbaaJkhqZcyQavmLPx7bQ2",
  "key27": "SHYHy99pwRsJRqPfdm83BEJcAkx6eDF5UxvvX4W1nBByNpKweV4uKT5Y1urxpi7XVZUEGdvQMerZnVoXtDP5dDh",
  "key28": "3s4xmVsei4xDGeP1BY5FQeq3ZJCg98JU5A2pUWEFu7QMSMB1Yfj7phgicUavxWZsfkipgNo4mGSd6NpaZYB1TZH7",
  "key29": "2gNQNNoA4jYHQEh227iVA4rfqL6bv4NFT9qTYCfJRQQwLefuJKNefEhsXUq5WsiVsbSEsQXGT7q5iD4VPk9yYmPw",
  "key30": "3ddGk9ougNkdJxEqHQwSavrq1ybGS8tGYwxFh6oSWU2XfgYphgrw63qMERgg4PfQoMJw9DMA7ea6P3DJN2S4WX7E",
  "key31": "5NatXLPBZXLeueN51pYLKgEuXi98K4vupWB6ZpUvgPR1ByDrA2gfazcE9udq4aXFm9woUBFoLqv6CYvm6Ahn9rCE",
  "key32": "3C4j6PAUdeJt9Ao6ws9MYnkoKELyfXRNdTW8Y9ZPBytvxwaxGiaUG2gaLdMyejSnnVjsQgW3KYmyD6gc9nKwhaG2",
  "key33": "5HW3ZCJYr3Zk9U7ZKVPowUc2sj3XEA3dc3DkHXVwERQp1qPDsLT6M9kYzoUTZ5AarnUz8VKMwyv9KwrtTGnqD7Nq",
  "key34": "W2et4XvacVWvtdym8R8PvNETRLf2vbF6HNsbV3wzj5mPEFYpb5ybuS5sZ2jTaK8ktC6hXJxWRrkas4o8BUN11b4",
  "key35": "3AKigqu4hMXWQx9fKxsAdS1WUQb9fq9aVVyKgutmmn1Nb5yB3LD9seXJzjHanohmy6ZwDwNJp2cUnu8cayMwqux9",
  "key36": "41UXnk9LcCx3sr3Gej17bicvK19ggsbLLz8x3EaMBiUB6EkoiQ2bwVB4JdV7gYFAMDkAD1fbFjjubggy2coRiGw9",
  "key37": "48KK4qD7LNmvbkzf1KzpMnKz2ubupKCtemoF4goeiYQk55tVYv3vZuqfqY74FbSjRnVP2FDvKpB2whZZbeUBfgw5",
  "key38": "5j1KRoNPvzrs5Xb81MaUiuFCCHnDJUt3gS3m8AthuEqrq417axFPj8cNLrenWiEuYAksB4SN7efEaU1oDJsU3LDr",
  "key39": "3UGzYY6f4YU5XKfyDi5TcpuH4ia9PpzsbxqT9YjnmLgFDG4B5ePP4aPsS3eYt85L3My8F1skP1DYFngUdDASqGvC",
  "key40": "52PwS6tHBVHFHwHazN2MTmki9R4ZMidAXj6c2wXp4Z8Dis6bym839heAibg6z3xQQtDL1fYFPJz8Ra1J6RC8aVvh",
  "key41": "4PP1Ln5arwmxZgauiYA8gnVXSSYRsHQ9sgoJNwrqoQzwSbXzgJPvGPqLzpDEyQDJX28jjPwH1VBAhKKb8tLyie49",
  "key42": "2nvuegEsqMPxsx9Hm3vT5vFwZspb9utaP3nVRkgBdM9o27SyXpeNjRjhat8MkrqwyQWUFFpqSaTQ4vRGVyok8juW",
  "key43": "2pGXKtC1LuXzmWMrGwx6MmFaGL6XR2fGyAFHkPx7diJxLhhyH4DPAnhKVvq58F6FcPQ6uTMZNoZ7eLdT22doBuEN",
  "key44": "47tnybbBoecqx8yve6jmyA9v3YQMxaNumF3cC4mqHHFyamVc6MUobdDG6YNYtCPPgTfSmGDZfnA1eXRJkTjG5UiE"
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
