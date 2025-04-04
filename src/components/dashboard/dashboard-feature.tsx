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
    "4xH7Ujb37nph4hnkthaYpUUfYzfVqcyPVF7p7trKZLtQMbdqeH1BBwvLaYp9ovPmQKpozP9AdRusYJz9oRfFngAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EtcdCk7iwTMstY1QC1tL71rLET3Zk7RYxvypBXeBJ2zg3k25LSBu97ycwmF9mzmafvaTLGqq8SJLpo6RLMoV8J5",
  "key1": "3toWGGNATPxxjZCroDUCNuDb8GUT2fSMnHeNGvxa3McNzAyqCFWTrsivmaJNgNGFDF1nCqMictxeX282ZGj73dJy",
  "key2": "2XXTg2YSLPoJXLSCH5LoDvvT6CPbmzqgnok88hHwq32MLdVd6kVvFGjTrK6Xt6cdqpn2Afrvc32mdrTHK9oe2bKu",
  "key3": "46UYXaRtx32u7jTQbfuC1Ds3hNrEUQbySJswjYnrH67APvXamBTfUudGhyKj2TcWphy72w5yEaAk6BaNzum5nJ1W",
  "key4": "5Gu7xnTsz9x4PZZsmc9tH8x18hEoGdh6egjhs2wDssvzbt9aJoBNhG4dyXrEh1nue5zWfBtrdGJwhuUjNgLEUMry",
  "key5": "4onTtFU3kwtJZkg4rXUvwJTqiDQ5YrhM3PsSzHynqpZFmCSGozb4inv8BdsgvQNJiKsDjVE54APzZ3WMDnjK6gvW",
  "key6": "2eYEds1FjULU2Y76ZsrsQ9UBwYdvukWMw7MAFvkY9NkjkYu3NRaZVvGe8qUjnc3LrMN9skdqnfv1yJavzCFrZfuW",
  "key7": "5k4VSQWYnGjmHmCGBExWvThyQsjhGQCVMuckDdrUwQYHE8PrwRt86k6h3LEJmJzRJGjTsS8rjWF6auTARrjNdiAc",
  "key8": "47Y3NpkGDKafFs9J78f8QwGmf9Mdgpb3P3RzGNCD9Y6FbWfagFqcytjGDkZSB4vGaCQNeu84R6JN2rKqmt2kG5Ut",
  "key9": "43gxojcvCJK55RNCeh8aN6uN3pUsdNYmoZiLQiWHvRTAsoGbdWWFTrn9f5ySa269vyB9oWuseZFxZFM9hYUkyi9C",
  "key10": "3hWr6AaXBMGrmL9mBeWF8WB6RYbgfahJBxew2YzvkBi3sEPG9zRzvjRjHfbNjZAz28xqEQXLPmoBS5wvW4dgCF9A",
  "key11": "CUwKnBo6y1VJXkBVWr6F314aCaG6tTxTB2V4gGnePER7KJrvFmMmg7F7Y4Y5kXgoqrBp4dsegibfCWVrWB3HPcf",
  "key12": "Rg2Gi3PhvcCRF77JrtwtF28PwFPiTXwmS7HCW72dczfLFS51voD1PKm65o6ZrwTErN49ZZDDDKYm8qe4yKNWkbq",
  "key13": "317u9Hgb5zi6ARv9NgjwTnfvUU5Jr4j1dDxJsb5CCnkLz3LqzaGVsnVFi9Xz7FSQ66EvG2DLbmDCLGkj8w9SHh4E",
  "key14": "4bzbEeV2AYRqX8E5Qdu87PREzeHZXCb9bV4i6L4P1DRDs6wKciZEcAvQcQN3Lavnv47HJnzUybPi23Tcwkek28iQ",
  "key15": "5i6UsZM88jMNAykuKiF1Ci6gUM2he4f3EBxaNXHDrKMKDa1uNJ2bRacCyxKZdP9rvB8yF6hVdJyYuaLXQDRqzaBP",
  "key16": "3sRHaFCM31xnt1jTRSjoyfGcQuxoiufDmJw4ozCYHJMVxBJ4k8VYWDepdvQQmTGBfrRGikhtkZAWvZrLjv9JNSrq",
  "key17": "3a8ynrWqGedKkb9mADD54EMfbAkR9APJvaMo6krVebfzrq7gBo5JUDbnwN6wWYocaL4Abv5ws8tb4z1n8FSJn92J",
  "key18": "3oEQ47LroC9YU1cmqxDsYTXHT8r4iSNjpBPiNDubbF1mBYJ67zuHPCKwkmqEnJuKeBLXuYc52ZbCbS562ozk9Nis",
  "key19": "5GZo7uGGnWzassnikQSDqi4obcU1MqAPGoPqwnbKYTAEirAbkw2NuBvkJMXwrdGdDEbrsEbiu3h5NAEy5epopLX1",
  "key20": "4pNqkxCQ4xvYTfRpNj19aWhDKB5sS76XXmW6k54eEMS5wMkA2zDwA9LXu6zmTEbxSE3UVuCEXaaVV2uZ8vEUneYy",
  "key21": "5FW14RXRj6HuTxnjuDVeQa9FgmfVGGnGQpRMKVp7qoRtYs2BSEE8tTbDuqPF21FF4eJHcP68WSRuAEEzanaTTQiZ",
  "key22": "43GskzKatWwvzecvxJuAwZrt4PxVmxDpQdiwdWVyWpAPcnDRGMTXnWuECy7gBYMUzEMfXUtQEnT8QUYPGTw8c5g2",
  "key23": "5pFHTXKuU7X7VxfwFjms6bRWe3XkdCcUAh7dC3HDEEmuAHNxm81t8p5EiPqpc9vo4YTmSWjtQzwUUbNPtEAJoiyr",
  "key24": "466KpafrytXG8W8pzwTrxpP8JuUy4WqZHhGt8rzCDqK6Q291ac2wv4rxZyfsFifJZUEX6WKVc428evGn94cRYESs",
  "key25": "3GVTZrPNT1mtBJArDT81cWmKs3s4We2cfoR5WKU4mdA5jKdzCpJKkqQXr6abgXSeJ9W86Q9Td4Hbfownt6avMjhA",
  "key26": "5Y3coLF4EiVoW81MPVvgf3xiCEa6cDRFFottY3GGHXJU8ewaXT51PwV5sqPaMmEmei2qzM5hT8CePVLBf2kddGzW",
  "key27": "2G5nc37zXc2oVMTC882VpbeoEYrGVAEtor77syst9kbmZVETnyi84h2FVHCbBSbWG384UVN8ruFxq5s2gkhzqbQP",
  "key28": "2c2zTCuppTeqvMJQTpKZPXZ4Tz8NDZqz8wcCpDkFPxShDgXzzo8UDSLH6CZ9ixzxJN26Ksf93GHUvp1EZiqDQYbE",
  "key29": "2ttvFYVEwxb1jx5LaeoXwgGA9sa53C7LsTEbComCkGgrQBPv2zk2uS8BZ43MVgfkhDSWX8wzVwbL7ieAHc7tYgEK",
  "key30": "2LXY2L1EWDtmP9XFgEqDFDs7WRXWAZPx39gkpzMfJGhJCaC2cSu8Bqtae877KwLe71rUPGPQbwCiHQUafNtG4XNz",
  "key31": "4tRuMPFauM3icJXbzUA7k3T6EdceWofv8o5C4dB77r9pTKwWWWaxuLCTHncRDC8cnGiWesT4F3ZJYjPbfygsu312",
  "key32": "5bdPgAeb5uvUt8us2nn8XEeopH7evHhXJgLbQPfk9vHmLzF7Hs362ZgpXzdVw7WhTbTJABQvxRu4SEzBeXA49hGc",
  "key33": "2eB9uiWZR4LgjLG4tvYPdm2TYcfUFbz4hAynm87nLt1rBudDkvSDBdJMp4ka6C2aRvGn1PpMGQEn6QHscF4Sji7y",
  "key34": "4N2Qjf9EVCY2wgY4d1ivs5rieukXqG7uNuix5CfcE4qysg5xopMQFK6jSQMDPFR8bbqHuzWwwoM889cVsT8Xug2",
  "key35": "47oE4TaimEcCBvY3DQGB3pfnepxnpmKhHiPxcTbbEebQd45CyFZGVCvLvfiaw1UHH51bwpv3MM4ARWdbNpRrRWCp",
  "key36": "41jU5pHm2grrbbpeQWD7boWjaLnRZqUMHVFSyRAUSiMasGFViEcQSQzJWUhKFk2DLqgbbgkhDJGa7jfdLncFidpF",
  "key37": "2hNSshammnwqqBpDZSK6GwTTrrtZ8jBjaCSUxWr2rqhxLyPXGS2PBTn4H8R98NvCtVgoc7ZLtNVgkR2FeeGeswEQ",
  "key38": "25hSacMV4LRrkzJmjHbB57QgY6RuBN889FbD3bF3Dpsp3rwth7WF7J4qZGyZ8BDbkRG8aaj3UCBgmnnKPAqxquvy",
  "key39": "5SKR9fUUiEMPjAZyxdB8UUYeypmx77pDPxT93tM5pfRchxsygk44bj65C3PHM4wNGzUho8oLKPRm2GbQ2mZvRaaK",
  "key40": "4bCDuSBwoJJVNLK37j58MUBAGNSdz2aWjCsZmTd6njQAsWow9U5fA2XxKQSzKft5gUAmknvhrcPLksLpPwYRiPXq",
  "key41": "2bCm2hjXquwDLjFX13mR2AH89S8FN5c8fdafvUhkH1eDBeZViTtnNLw3NW3yaHTkYcfXRFGxjqkXMgASkVKK6V7T",
  "key42": "2RFbXwxpTdnGmsdbzeNh1hjyZjH1uFQVeV2AftwtcdWuDr9rUG6YcvwfzLYev8SSLb122qQEbWJdqW5y894cBJdU",
  "key43": "2ZNjy5UYWPNWSTEEZuCiHguZVnnu1VEaXMmDthdrbbZa7qyqiaAzDEno9d3JC5W1FdDbD9aDrVwhT1tBNybxk8A4",
  "key44": "5VRwJyKfmzfj7bHe1VMr6hBqhgzZdtcAK5MrfKETbmGnQLVuotehdBPnSQBoFA3PqfutA2jgZUTKFXmJSYD2eana"
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
