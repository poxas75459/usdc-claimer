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
    "96FFoa8GFqBPeMNvUTUxYZdLrPcWcfujcyRjHvpu7YULHhLNNRXySY7TF5pYSzLTEADPokLQciYCZ3NdzDk5P3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGbwufSf3zf2jY6fQXhqPAoedsykpenpN8ygUBgpVwjLo569qPMPMJh6BNsCjK7A9aPbpBtC3a3SeBgPhCs6Z4B",
  "key1": "bfhFis4c29SLbesZog3Ty7uoro8oHhKS3vQAMEEok79kTxcGuUbiyabWmf5faZfSsv9tqYkyR8AWcEMxVuuvK2D",
  "key2": "6awCQWwKnF92vPgdKLwRPxPnvArMCXubrJoNf1qv1WyYgW4cJNuduXDBQFYGJ2ttZGWJpFFPCFJr4KxoJgW88vq",
  "key3": "2TqsLbq79FotRWHuAPTtgfakXU8HNBKmqfZpBguWU9YkH8s9iKRXbuUDJB6MR54yaHai5N4hE6v7N3VFRdm78MNd",
  "key4": "2SKgyEMieMZLY3sWMh8MQ1obkgW1Sc3boruSB2otFzNM2P8fSpyHLGdvVjaaSgc67dKeQrVb5Lq57U8BoVVHRZ9Y",
  "key5": "9GkZWdAak7cant2TjxgNEczWxvYye1WceyPdr56NtukQ6JWG5RhGFsS2wGdMvpBoTbxXguuQ9hpwhKfvbv2Akyu",
  "key6": "5TZJ1ghMTsbGbs9dwHVwYxNRX2nJtMCJTJn1agmbckwZDGgDa7GMF1ZGHc6dpEiaNfbHGrxzXDYnMavVUL1ZBxtG",
  "key7": "2NDAkjaxFWcf9kgxvfsVoTYBNyEq1hFBxbK5KeQKu5Z33XA9egmXMVe8uAoRkPcABMf5HAr3229xz1sCRdBAfU9z",
  "key8": "4zw6LfegPpovbMuTFak4oBcLsmWLmYU1MSFcFUc5GYdM36uNPSuDd9XagB4d5FpsY4kSH9eQMSK9Ru6cf3EnaZd7",
  "key9": "2CspSSZrHXp6FaEv7V2z4r3PBdhkQsoXtx1mtfHoo6oLaxcoimRTtjs6xnut2UL9GWShqykx7Pb91EC7zUGt9JFH",
  "key10": "rJqHKtgZQSEw6H6Gqc5HpyoK2LB52tg6kSfKbS9zriq9kchy2LYAgmdGVHXkd9vnTEjYLndYRmCMXizunmiSL3S",
  "key11": "3f2mYBu7AoCfxLBkyAafqcgbd6tRE4GDGeTXxT89aLzNkdNU4FRrRzxee9Jg3AGj5nAFAvT46J1ajoQZLGRFwtFB",
  "key12": "2a6zmKEvo6yv4N3oeH9wsJuw6GDLMKx6jeM7M27J3WFkZy4eickgxCXoU7hKzyeFWakJ9BL9yM79kmCZmjC1zWxY",
  "key13": "44YuUf5m3kDGWS3UBSQiy7Aqq9yTMV4xSduQe9WUxHLuBDLnCFiUMWazbwDpkCgb11odXsu7fkMpRBfTrg7vWJKW",
  "key14": "24GKKTubRcFv8Hh4S7xtC51v8Lxfo7a6jNq4fuBrCF4yxWbsBSnEiXU5ULiraKcdy9ZYowHXDpJwJrLCqhsAcLPw",
  "key15": "4mzdEcETruzmsxeKusvU4ZUUyVC1SEMeYA11ABqXLzvWsDnKPkekFiDBciggiU73npdiPFYdWu2gsUeNPpuBHkTz",
  "key16": "2PPwJmLjqMKsznneoQL4qi64Tb6ADcox49TdNQZihEp7cRxM93LqvSZRwaNRcrN3nKmfPknzicNQnBe4TUaESuDv",
  "key17": "5MHBsBwJUpNsNRgWQart9yzHuukfLZuXKdahTRbiTJK5naTBjq6wh42MRBpihFR7uqKub3SdCzEzdxQJEWeZyiN6",
  "key18": "3SEBaR5CaU2Qeo6nuoW3KG6tdgnFSSJUEo4TuHjxZgHGicHrzr53YNXxRniuNRPkWDem9rV7SYcpeyxzK9hXziKe",
  "key19": "2xX6vaSS7JosaQhmRycHwa8RvW6wE5mScjceUrNCtq4t5UNTxMmFK4xueXxPa94SX86GWiBSaQTpLcx3YRZEufxE",
  "key20": "4aAihYpQHzornFQfzKyaMuomAg5e49t3kxg6ZGBPZG45e17nEXAF7jK7FoZHBqtBix2j2BCdr4L4Viv9kHVyZx6A",
  "key21": "5XQL4ZU8LDHhhyhuiEFs1tZeptnFX4qEzuf8GNWUUc1oGE7zPCR9R6ySg2Qizz7YeVZ6YSCZNTjCy4p9JYSDEqKc",
  "key22": "5QAZsxdyved6y15FYKErBYDoMift6mkQQtdEZ4qMnDwHs4oJQtgCqBGrhBZBvCydsPo56w2GKshVewtQSNGzStST",
  "key23": "3WvD3ysWfsoAv6mnUmQpJcPQimrYBdUVYxsW5Tp4p8B5h1JTpVvYMhnhcP23DqHcBoPCArZ3G8ffpdZ8Um89TDS2",
  "key24": "GNXP8mojirbcKLhPU7ffXi3Sdp3vUBZuU6ZwokmAFvgFHpBZenoXckXZsPkqJPzz8Qa7Luzhw8n2Y6MG1UCCDjw",
  "key25": "4jHq5opnLQZYEw3z1tdZv3WQVnNTCjL2tUK9MDk28T9K8oBpeByEYif4RhoPWbRG73BhmNKAVb2jZ5VEVZseHF21",
  "key26": "51eKu2DkEEQm4MjSUgUpLw8wFn8V1LdmdzJKTWU4TBVsskXdYoMAbzqzxbBMiVV7Y24ZftktuUy28VGEtbKGJEiw",
  "key27": "49931QpNEDtaM1NBiZHHbbGfayE9yzSQ7wFYBdnwdk7T1BmKsFeYjyd7R8gfC5FdpvvnUoSqTPLGo6KBatTfTHUQ",
  "key28": "3Qsa2UPWjMUiZNXGhBd79EBYueDi2ssmNhNF8GbTGEbKHhgGeNBCSrPvc6rZZWBV45YXVKmhYhhLyiwqcpF6uaDb",
  "key29": "4sJojy35f9PJpVCfj7VYB8ih1HgE8JtUbP5iYifzRQwab3AXfuaYNqwzAcEHY7ANYSepw49kR2F1ScERGbTirH5Y",
  "key30": "2817yJHxfhuAHwkRCY86GqKSA7fWcYHaHAwCa3dqHgta8imSRKM2gsE7UTmSLHTCwwL56y3r3euwrBjsuDfemaLP",
  "key31": "4qxnddwSmamC6Z3SEthiuFYHV1zokvamHp5A6nQLEGnQL6MJ6KUgEEesV7v9irN2vVWt1WPKh52jLe4CeGD8fG6y",
  "key32": "5QBdzbnHbk9wd6eeS5NKmx83Bv7QRKiw9yK75hfsjBEvJb5TPYNZCSg4LupSTRopP8LwxYXnprC8WgRuUu2wbe7k",
  "key33": "bdBGBy9z3DdPiBFbHdi75Erf5NzA3jBsf6nMfwmpbJtce1SqAWMtDAfSMtUS1Txia9x1qYe4oSwmHq3btwUc1pe",
  "key34": "5opigY8nm4y9C4yEB2eV3ykbHhouh5XbGksPb2AHDL8YWekG69UFNk6byGfpLoEyuHwSXxBoLADXGiyoJf8PDb2f",
  "key35": "2bGDjjXutQHssjpfSFFg525REE6TDcfEm2QBmNPXLqFsRN1GVipPsGvCVLZ7RKgYRPv3q7i5zrfugvSM3iLoabCn",
  "key36": "4UC8WeJiHs69k5r1YtQK1RD36y1HzUoS1jEQT2g4C6kp4AjxYaZ6fUp64E9gnTJ9J7RXgHWLWn4nKNJZKuD4tex5",
  "key37": "3QxPZ7PCAzLsNKMMVobxKmCdANDj1FYAiz3KBknBxvm82RtSiMHXs3R2gAwQBgLFdvVXBJU13WdLh5MCzks3qh17"
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
