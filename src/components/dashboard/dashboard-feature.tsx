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
    "5KSc4zMMn1DC2CDDeufFGhN9VX3v2x9N91eCkbjzMmkVW4D8ABLsGkNPGMyaMqViEVXmABoowwxnh3rKBtXNcSGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cijxg1sef6yB56K3xDPpcoUf3Hm5pVcRaHB4vE8yHHyh1mU8Q32Dzx3AnUUPw8ZigsUTuMhDh1vPUGT7LqKSkeT",
  "key1": "773mGFZui8TmAea4VQe7Uz4xV392pREu8M6upDrLaRC4yskqeQS2oJr7j4N4x62zG7yzdAjzuEr56EPF7bdL4bR",
  "key2": "4feJ6JJfTMpeFLSZiu2TDwZQ5ifcDmeKuRUURqAX3RYpbTb4ZKfhyYiJ5NLk2anVywsDKBdi9SE4fX3MN59Cg8ue",
  "key3": "kfbiRZZUhUayVCsxptuGMR2upEaDaN6wPBW6VtvHEeX2Skx5MemfbxkmR6M2wTqpAgjtjHXjhmDT5hxvqcax3Yr",
  "key4": "5n4zCVyFvP6UykbCrM93u2ayzerZxKPpDX3PgmEvxs8JjShcUXNDjqKFS8EztSieHU5ZprLiND2ALx8rs645T4Bj",
  "key5": "5XnudhBBMUdJZjLZGd31RZ3U8BKtoBc3gSMYb6AUzSRBUPEbU4JgTwW7E7hnhds32ZVom9TzYs8BPTBZcy8hGcif",
  "key6": "2rJ6JAP31uSf8oYfrJhf9MxxW5MTa92Er6x1Bu99DSmQwJwvfBaUD4xzukRqwH13oZR4G9pAJucCa5Sjd6ReWpmT",
  "key7": "3uMcBNFgJXDcNYNHejjw3isUKZWD7KLQUc9KW1inYS7L8kDagF7cWbG9GmyyTNFCGgoXQ7WxpAd5snB8nnD4pMck",
  "key8": "3yzuanut8MQL1z9UMY3LPkEyjqN8mqoLmLqYyf4ARFSAoq1wi8wXsmfUhfaznHyr36z65B2B2HzeSWYWTBUMSAQS",
  "key9": "23sAXN4DPS5TiREyVQeFtwTMA41JAZMEtKAqR7Kcr7iUJSLhvE9shpfGeB9j1qVU5pGEKzfQ4b2eQcWS5UjXJsz4",
  "key10": "2EwqvyMEfge4DqmmfX8gQnVKYT5vYaHpF1TWPfQyXLN8iyjSmPYjYpoXHVv5vJpuCwUnsYKctCayzTHp4RiMiaf1",
  "key11": "2Rd2diNVGD4ac6gbmFHXzPHP1mxpq4yQDxCNKLE4KUyHsa8wqG4Z9tA9ntDiWEr1tp6w2WnZawsDmWERMyJEGc7M",
  "key12": "ZYQYj7HcVpbyQiGN1rWkGvcYFJ2KHBi92n5Fef14whcX19zpLk5L4cqatzsvxoKbtRHaTE8PGdPHsBQu8MrG37G",
  "key13": "3gbgKk3UAAawSUJxBfahavJU7E2hUSJrbtARngrvPiHbbH55cRjWbbWEmv1XTwz3X9ucGYKCskd8dkov9jhRHDYq",
  "key14": "3BBPxvHxEtwsiTBAmf3WpSdBKKDhrsHue9YzcQXCdAGTDC1VvDu6sHbynWJXpVvfUekGGZ6ZZCgU6GRHW8y2GdGc",
  "key15": "578sQVMSw4yor46eDLRfGVvC93SFDyph5DsdXXwfJwMnmdPoT6s83wodg7uE5XyEEHVCQdLTzzbcB6XpDzz3iEAN",
  "key16": "5kkqqNY9h5HZqkVzQcLNExrQF2atDn39GEtLa9scbubeU6iiEqjbkjavhQqBvn67FsTJNsGo9HU5QGTYkuxXX78w",
  "key17": "5GaVsF4QejfwybxNFtuV3VYhASxzomukZpSovBRRBKtBJTLKnjGWpmpWub6b13AxtDKUshbh9rRZVL9hKavjfZgN",
  "key18": "2TdtKz9jJzZSFFdEWvwyJ2kbgmr6yF7HGDxX8awtbqq4RmjAPSURQ35upnK7RFraf8vtZeEibYwzubXFNoB3hA84",
  "key19": "2nVjnGzjFPaPEZqsxHWDJ4Lg1sVBKie1zVzK6FsFMg3qviR5YJmrV2LmAUmcUGbYy9gN5tH9Tp4kda9tJeXoE5Kj",
  "key20": "3bJJn2368ke5M2aR9E5yijHPfJaV1kYKzJi6vfsDuUHMcNL8oGjhHidWH7fNZFN7dTz4dL2x8Pvyemi4oLZaGJUU",
  "key21": "3PgzwY5mgtkF97PaaaPLx24Bk4rf4eAtAUHA9sGrwPvPjt9tDSBPqEScXU2mzZJ5GKjG36M68nZMKk7waXrWYdjE",
  "key22": "61Gcgwm2B4drSbLFbs8C1rS9qg85nvickN8UNQFDRgFRhBYLWR1ZRfeXENTPm8QKCmV3PU8YJ76hiHGu8V5MFvU3",
  "key23": "4uLAyDGBDwnHGSADCzbtrdjbYTSj6qyev8vhFvEtA66nrEsHSZwETqiKr2aJypFa8bSiAJRrTNn2EQs5Ug4EBkMf",
  "key24": "24atzP71b6oJvWveycKgob2DPWpG2ow6G5t4wyJYtMPRRCAnaetpAomJX4Beyc4gRQASaoZ6L6n3wsmCwZXtoTjP",
  "key25": "3bz62yNBvhnYXm6SeRXKeMmnZf6tfP7SGdGxmEoEy5vJBRMe6a1Y9C16KaBAURXT6LfBRMZ5UBdo5BL1FnEo7n7w",
  "key26": "9JBPBwNJb5xTx1pAufu4HycYyUB7X1DAPgoR5U1Kqup9v89FTXA5XSTuWGNzQh6mmv8b6RkL2WWnVAtdKGNPa67",
  "key27": "uhg1XNV5YbWy9nTu5JasK2YqRHHNqjfmQwJvpVFnBWpjce5qC3aL7S2ZAgdwF2j41t4NH3TRfkdtJA5pNyVoNyo",
  "key28": "2n6A2mxYzdxaWE3hBhN22NsUKLoGrLtFfuQ1Tmh3JSfzFj29T3s2wPJ43tyhgQcPscDoW6ZjN7tx2eXvu6VD6LvV",
  "key29": "4wHiJjWLdqUP7MXNQdEcSgfvMYHKg5uo2xuCEAsKTuoULGWYcZxc3f3SVFUju4ZCKrDjCTNd2MNjcJpGx75g5AEA",
  "key30": "233zwBts8piZEc5Q96vMgbUuQJyJ5EGgic5bBoYxp2iLb8UZGT8pAquECb8F4GpceKVx4Qsf8LmjDq4rUEAY8VZA",
  "key31": "iyXBQVfJeExheVqGWdhiUrjZhMHnSk61CdMfkhvqwxrDrhwq4x9apyev1sPegMAsn2pXn2LsfM1oA3qpD5MBDrL",
  "key32": "22yknTAUCUNzNfavPY7pJqkh3ZkNDWtdTRqiaKYRtA1hoGpvjwExYteYaG3euVig9zf1yqvuTXoRbScj3XjEg29q",
  "key33": "mFq9GLh5cbGcKCWXURjQGXSjdAdPtnckZnKcSGMhaxJQTEuqyLuDt6er3kgHQ2n72VG84B1mYDHgboFMkxnGtnY",
  "key34": "DCTReNfLnmbVrUuEsU17CQdZbDWcPei1CNDfKfPFczb2LZvBf6VukUDjyDpfpLJV7fiHAA2rRZ4bcGW6yrHHuZG",
  "key35": "2cpZX9eMZxTNf3rmY5RpzBkkpQ74RNqoptz42uyoXRxs31VNgcuVqWkMmafeLvD1SqqC5cUKU6Jbexvs3UN2Wyng",
  "key36": "3iBJomCSJByC9d53poYFdWgCW96gZZSUnvgbWuCterpfP63Lsn4TSCBdkUUfNaUTZLzn6v5C8vido55AeRYztk7n",
  "key37": "9oZwi4NeeD98mgX1wBiCTSz6g1bsef8RTFEdRfxZfCNJHE1DZNeuzPg9nie7mKBTqpF4b2R7XQev5qKt8DsXbA5",
  "key38": "F8Z1d91m4FFTzAME3vjXY1tYyT7m1WN927bonc9JuttTa9NeaqeJhw4D8JXe9Eixf9aotaZpR7NsYCEwvHh8Ffn",
  "key39": "M7dyURZQNWazdEavxxUJPQVuvHcDifqupkVZ4cLsG6JTLRhevDp5w2FFBVvBiYqGdGcCZaq687zdRGwPzqpE1Vp",
  "key40": "4PXSdNefpZShaqKGowT9rewMqXPqDREj9pbu6o2QD4pmaNsRBkdH2gNMzGXpbBm7VXTLNkZkcLnx42gKAyny19XS",
  "key41": "5ztyVy4R5EH2ft9zJUXuTF4cLe86Us68ajd9js1MCJSsrW3yE6xFbhkaFPPEWtjiTYA1pmNJzYW1Akgcq9xTCLAX",
  "key42": "3on2tUKRzedJPnpocGXegEXN28hKRJeEoQgBffDoNKaj7fkDh942CFiKgQejSWRzoBKeeLnoNBwnF4fM6Y5jRiKP",
  "key43": "2MzbTpAWuk9f6SaT5YhUEP3BLn13TdghioPcevA4QH35KSafGfaSC6WVBeXB2MWgChpCf4kiXdbGc9QiuEa8Mg1A",
  "key44": "9uJLsAkBfrR7x5VzeeB5xLpyXTZFvmVfCrS3kf4iF9jZK3pXA82YYorEGDK3SkKdPJRpJporLt6LfrRx1i8dvSh",
  "key45": "LXcvqLkMpfJtSWMdLauDWjBAc8pb7nss45PX2vA4voGGnhYfGeW1WEGmU7AgiQzxUDcKPQE3BToVB7hTSYb7NAZ",
  "key46": "5PkjwcGCgBsFJeV2bYFKGCPau97Miy7QVGJh9uV1q6HugbUSYcnfLcuueVjsP2c2e8qtyWiMdx6vWy9u6mPhzZrC",
  "key47": "25DPdwY1yjabTDPbMddosMMAFuzerEPSX4wqsZzPMAL7TE5AJWYaUPRWok2HZDT8rLGBwmNSx3Umq2x4TfSWYX4S",
  "key48": "o6WThnocAFT7SxPqAAVmrQs98FiVp8DQUpRgUSpjrF3fFJDy5Pb42PCoGbgDr9CZAhJDobuvQSULRPRfqFAatHt"
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
