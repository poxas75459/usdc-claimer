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
    "47brjyJ5hR5JM4NLvCwGp6nQoVEShkWVoB4dMv2DTBDeSv3L66yQP9oWu4w1ofGUaeABM4CBinfTfaWsJHsWf9vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ChB11osCijTqpLziRSeT9qZkgE8MSw95UPbWq7h9hmbrxyyvJnLABpsoNRkU7NNHo7KsmkmHMVg32JMi2farmc",
  "key1": "4rswHSU1hm7gZKLBAqpudsEKuS76px8pjgwmR9EmtA4mRMEpuGzyzhiGJ2g3iZWoWsFLJfbyEVBjzY8wyr3TEZbh",
  "key2": "3usG9BNGA4HfhtRuSS3Vw2B17x2exDnoA6B9qgnUULPeNLh35favuSLjY4h4xet9dLqEAbLuvvRe8gmcA3m4tfg5",
  "key3": "245EUrqV7kowzqTPHLkjGB1vVuoigLarrJRKF28GCMx3ua4AuTjK6xGnTiKXXuT1buwBhnpfns2NDTMfXtBqyC6U",
  "key4": "4nZFPrLUKZuKrruLmiLXApBPXm2KoaquqT2CfFf9yiRC7qCri6KuYdz3HkBJ2MyrgDZicB1PoEBP6nbv4zhNgDr2",
  "key5": "3tLdx1ZgzXsD4AdwtZ82G5rMv7iPPUuFZGtT1yQzbpgx4KX6qNuDGREAoMdddBtZ2zpVjtjPnh3kM5EyVBGGbCks",
  "key6": "qK4ykbrEUZZGXLbhjHytVmcakR33bMep9LAxvYkdWuqpFJS4Xy1yn7rDCKQot2wJVDGBEnkGQqzTX9U1DHdCy9U",
  "key7": "2v7joJiRwUjGciZ9yGrdFEhmpB4B6znm4MSFdc382GVL55i4zSJXHkUc8r5JaNFq6r96aTsWdkvfkSaCcyDzzM4a",
  "key8": "5i7FGbPz13mshbXZ5fZH8EVJwKdgxpxttd3VZRCNdcS8K49GCfqrcy2sb9B3Zx81MLvizJfuY5AH8FTnTNJjWWQo",
  "key9": "3HcZb17eoTYR27NJ6KgnZE64ZnyZJosfQySkb9EcixGJ66p6MP49iGKpFfYAJ7rBdizFTzn3YzyBBnKjbwhdSFh5",
  "key10": "56kVzszsQPiD3kqeSs6EzQiR3S8EZJb82aokGmBYQj9Po6tqxqy4TmrfZDfSY6c7ZBQshCCGoAwskjufV5y5ZpvP",
  "key11": "4dw4cu5zTLRKztUrFzGWUwfH5GUHBJ39pFgFrDHPNr78WVXQvLwakMRwv9KxV9WVnQ3nuL1MPRyYqNrnHimtXf7r",
  "key12": "61F9jpJBUk6BVmL7GKRzwXMrBmcoPy1dCMfHqK6dFnHBK7GsdmTpGMiRiMPaEjPYedZtbs4HA4h5pqwjZwhXXov6",
  "key13": "2QvMeQmk3FW5RtB4BgitFC8mRD23c23hrzERLRkQMtghkDXv7zZK3xf73XuCnuKb5RopstDZBfwfshv6BopgLsEs",
  "key14": "4Bwkv6Tqrdft4K4c3BSxSb6owQfdDEmHpKbbiDL7Cz4UdDcQDdbdv6VVLn7PQ1cTwuDUdxGDowevoeAdgoVeeFYk",
  "key15": "pNKneQcbEieaG7JtQKUg1qsn2ybk1FcVHM2nnNvW1mqcQDVrpYdBQo4oSXQfZjiUDk3arEtTBb5ZtdWE5SGDtpf",
  "key16": "5U1k2KtG2a4v5Z54gVMLd8LELjUnXQ64Kfy94BNJXKbKm3pjBavacG5VkCbKL5Me8Aky5SqfwLCt5gvsbkFGtxw4",
  "key17": "55M1oKH2pCkytinHg8UJs4XjRP3vzUn7W5h5EMgKoS2MueATD9xXLddozxVPPgWQTXg46jK8ig74xi2u8UzPo2Ei",
  "key18": "ChTrVXPEEgnjmQnnmwhrZ2UCkxQ4V4DzuDPbcPGK3VxA3fcr6Npy3zRAS75UNZacRyRg3EjHa4puUCBYxwB1HtG",
  "key19": "2tvGyFgSRe4YQVAkcRWGzrFKtFX1ULqFMtT6PHP37VvkBjSoiSRUDR9MuVuCvBLDCzVGckxf7hRHoCfE9QSsfAtR",
  "key20": "htV9mG6Bb5SnUbLNvDpuuHPLayseEfTEbSH9v1pnFV5Pqj3EEAYZVo5adpxkeR9zfNvUT1HYtnNHxDcGSB5xeEQ",
  "key21": "5w55dhx7qU2Z5qGWEWtp9kRXYG7NzPf2BHcASnyWmL9YsiERrWF2yakNm7j2rKftiHVSLrVK8T9SLzdP5KFg8trE",
  "key22": "5YjQAtCTtT9cPYtM5u9dQYUB6xguWUHson1N9BGzXgNDp2s4ExoZD6Rd2KrctMM3qEW7jTiE4QKRKQJP3c1sJJpG",
  "key23": "DjS26kMAxAbaUG4cSp6sAFFuVNGpLYrS4eSQ1HxKZmfSodRasJYFG784UQQe1snCUYr3RmHtnnBA1adwYSm1LEs",
  "key24": "3JTTN9r2GFzaA1fUR1aofb5B29yeQn3gASaKi9LeXTtahKWFcGhgd7QaADtPCEZURWeaPGnmt9M1BBuZJ3BB7hHt",
  "key25": "3zAe6r22ZfYG8qphjDfYqjVT1cgY8gsPvhSczFpE2R1Xbc8bqZHNSsmi5QNjFsbE6ZTapxr2yX2D3VfE2F3hJCAA",
  "key26": "4SWebXhxTwzPyYq39uednVWVGtANTsV6mQuGP5e3ZXafWB9UzJ2L4fUEaHWrDf7YaRevmzZo9sy8N4oi7eMXxFUz",
  "key27": "4oD3VUgVdziXTNjtyKmwChmUvKc4RfuRvfPiGA4NjfoNeCbpEP6muDkG9QW8cpn1bmabaQSNjQNFUfbjtnGZhQBi",
  "key28": "29ZUZgLLgWSSmZgs74DLQWG4xRGQM1Yy9Y6wXDhr8JiEDU2WNCxVMEgAUsn82RybKwNAHUdwGYK54zZoDsVEy16Y",
  "key29": "33WtXrSzfYFvrqx1ywV3SrvLPcWFUpyMyqKz5ew84ouUqbh7ep748mbcdJQRTgENMv7nhkA7vqHAmAsJDpu6j7zT",
  "key30": "PRJ6zdTwBKydP5mqBhay87R9Prv6mHe3HXD1YctNKdTme6WHgUzTmjmm2javUwQsayBEhpfmP2eaFNqnATzaMJH",
  "key31": "4ewEvGmxwAeJE8M5UravKP3Fapd3seckw8aGeWkKg9jzTeUpgddvKrspP1NaAzvLHWCAyeqGcdXkoe7WY8ap6PQk",
  "key32": "127xhDU21pQgTGLrhyqtC1PDTgci9V9DQZm9pc5b63Z9cD5WY1EQYUMPDuHbNiqjsh1PDbzfWzXoqHSW1cQnkJhn"
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
