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
    "3hTusA1FL5CzvHSCbdDWzajUtATHTC23oDQpxeGooo2nETVBanMyi52Av6N2jdvcJ4v4TeAJgApqBX6b9Ao3MxFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z38YafdZmUHCJ9cmS2oceQzGKzXSAk156zhYLvmH1SPn31Z9uEdW88jrjjhGpnVNqCy6B6kJZ4wLP22VVT2YWGG",
  "key1": "4nWWSYMdsVHCzarxmzkycUuBVu2fS2JyzbARSQsqySpX8A5ZX6TcJvg5pbMBkBu53bijbfNW6EkfcyBoDLK3cx2v",
  "key2": "5uwRWKr1tFPeVeB27fnKie59jyUGb5QUYeNtuXCis65FiWhk3bzTjvJK4WxjAQTVWZVNZMJMR4scSRQSgE8Hd5Wr",
  "key3": "VT3EE2THaD9xURyAyay64sxiCmbtoqPaGdJ1nS8Xws5AvStfVEuLKzKLyuUDhxuVCTBpNJerTgPCCTEevd6M3G8",
  "key4": "5NfbfUERni8MAePj2JvmWVpHhg8rnt1UknVp7EBt7iRbUaupQyeKkpbbyQFjYxrf1Lz1ny9dLZkJ4cHMUxmCk37T",
  "key5": "3qhb58SksFG4hzHxZC2X4yCXsVhUMTxdefZVze686SMDGL2LEipu6if1SoLPVrynPxvGS9RxWucSt4PnDsg3oSUr",
  "key6": "5idRgP3JUACw4SSmgNuFqbCtNKjZgVffovrqzTpWik7ySSxvTGCgcT9HdTJaCvHf5A8Y14SSVef8TLeRopG16XaK",
  "key7": "Pb4RrFVwB1mdsnUGdGPcSsoz9177mDSj6x6SkAAPqznH2Pwm2MY4DGoU5Hdah64PAZA1R45nBqTfcWk1yfQ5LAs",
  "key8": "3ZJDpNm37Ges5SzXLyK9q6ybmDkqQ1BybkZEsKtRDCFnTDKJf5Ui3ooqT4Kap4evvqsKjQNNhPwpz8dYuvKG5dqc",
  "key9": "5FZWXsUtQVurNMaVZCxSY4hPDhQKEfh44rnef1DoqheND73opConVXjSPb4T2PU468AVrzd4tUQJUy6SXwq79VQw",
  "key10": "3xEmzNxBJNKdqFSp1kLumh1oYMbVKjdEb3V9kFLwjjGfqeRR5g7Fefk92BbPcCa2YcNaucaGcgJUY9nt7TAu4iEt",
  "key11": "zxYrUebLRi9nj6SpLeRcfFfkGpkGUsBSzW9hfRoAepPbteNhqTqRMuj5wG72cDLANAxVgV2AgJrRvhLGLdUB7au",
  "key12": "5si4Z2WzmiYm3AQeCNL2XqZU9mTxgUu1VFHoopf9kev8gueM8iFSihgEsV7qLiYHTyCoszJMUEteh8dFxJMKNCJS",
  "key13": "5ucdpVagH6Y6oxLZXHF41dbkZ35g4QeUNsagpaip8t2eMo7tHabQW1RB8VJV5DTcUFTJQBp7beHvZKeJHxM8r2uD",
  "key14": "59t1Lt9zqj2tAr7PqZdLy57fc43VDRDXc7tSNjQEae72znFAa3EuE3Wjm6YtYmpTnmP9rNx6xCCexceUrBE6RtB7",
  "key15": "mkaRBqjs1L4b2pm6wEn5TaVmxkajdy8ZSLYZeNtnmaka64FKtJjWwrWqMmkm3khHMXSr8mrpryZx4sDKqNHB5AF",
  "key16": "46XvbFmu9CpGRzQPDXWbbc1mSWn34HQDD2xER4WzC8hW2efX935JjBk8Fwsv4gxQFVhe4yKBya36zcCSXrNoxH6w",
  "key17": "2PZMgrS8rygqhBDpdsM35qmkM3gheQkiERw7JFnXFaNDJ7ZaZzqjGRaQZonyPzP4PL1Jpb27vfjCEGbwxVGTvehW",
  "key18": "3m5uzWoLDB2NRmFeWcSkcTneqgwccCJ8oCm6yxobwiy3ZNaut79hu3UZjNGENepMzg45bzPecWUHzxiqo8ixX6eG",
  "key19": "2HtUy891DQsx7wioJRkoy5fXSgYjaWres15eQ56L4WzLS97cDKgsLcXsPyaVUfpPjXciFRgQ1kuWWCZSdQPrzVjX",
  "key20": "2NBjzg2HLDxPCHAbiFr1jFDh8tnhFfiBmGHfcCTEGSVywqwNRbAbACV428DBHXxzdTyJU4Dvmw7Tor1vFJtN2BVP",
  "key21": "3fo2P1UMU7YZG3HM86mBhvYjtuN6nRPphdauUPjoJafpTsYKgngpok6Dix374CiQxc6vuFzXtt6SFF2wnrVvdnCc",
  "key22": "2sas3w7efNtmEjovbUkranQDvFQmZpmMK53djTvZ6ygBombpdtGnpn23kCjXn1WQEvRUTRThGwUSUyHjAS24uynP",
  "key23": "ZgsQNTJHvW9DxzdSbDFmTvKwBkYyWLvVqncVTXP8zVpXZZHdsChMtBzES8fwfNQfQzdLL1dXf38pj6Cqp1HM6F9",
  "key24": "5y5Jy3PDGAafotqJd4pVaUAa99R3N2bTbMLTaApp2TU4rWSqgDveEipEx2X3igeJW5UJCdTbWhQTqtyddFVh2mpk",
  "key25": "29m6EhrPjtgix52ykgNRWF75N6DAahzXnh46Vb1hdihkV414F1K14H8whST9UyeCENj92nJfQVBdfFJLQmRrvuTB",
  "key26": "2XcNQz8NmWYbTTrsGLZCBZWqme7eRwt2U8MqFqeNRHHLMUkkLejF9vu5BTd5Q3L141gBkzgTuF4MDM4rf7QpMqu4",
  "key27": "5aJBWdarHXft3ucgsGJJMUc5HPoh9NavMLz89jSEnvvdDpnRVWwo5F4zBnGBazBTmphvWAeWsUQz3xJB3ipxQGRy",
  "key28": "2AS2osyfbgEhjwNguZMLNBfogMTg6iFmcYdZtoaf5hcJYkC4ZqBc5sH1FdA6ForgL3g9ivSnjzBtBHJ4czuXGjMC",
  "key29": "5oetKVCQwsoDAethqWt3D4QqqzC6EHbRJFKkkTnoiozzHDPfnTrAVsQ4HuyNxTaCeZfRyKzsNBwjaaxJYXtTg53f",
  "key30": "3PaT8nMV3BF8uAoo1GnBGVDqqoSXkd4fro1S1Ve8nMqt4FLTbQQeUgEuCXh75CpSZDCxgEvWsVhoqfBFP8ocrQ8S",
  "key31": "47dgcSewDNBE42VkbuKdkZzaaQhy5thJxHhhjD3YGMi5BaH1qSn6oGSxQx4TaXaY8syXGyyzuiYg9f6J8Stqw517",
  "key32": "64HGyLWkNLQ8R9ANUfinAhmia46jCvLxdLPrnoBbyxUHvHgQYwQHTEeLy984dngkLXaDmfb4ZCpMpvmzHAX1VE5F",
  "key33": "5prgearduuSVimZ6YQV2LEzHKbcVQcL2NWvwbjS9R5TJ5xRMjbay4aFmDYLuvY5q1BmJVY31V2vMcDgwDuhPDSvu",
  "key34": "5BKfAirFd2pdCj7QqWLLce2z68UQTxxvjvoT5AZKFaoVhAPtc13xm4UEyWbp7hdv2WoVnbKj7UdjqeZukw78DeCD",
  "key35": "37uiDxQsGve1HxnFwonUjJUsWjDa7oyLXd6wjpXTADqkG5AnpT9T2Y9vevwNQTxFcBrSm1qLBJhdSuA5MwPwoGPt",
  "key36": "2p5rqiUhsmPsM48TsiHwsv1AWMM8fdUvHt57BUWvLdE6kAqfBBTgTYqtxEmDAnFKCT6HtTFKZrdKm74RbUpCbACc"
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
