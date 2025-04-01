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
    "foG8MDUspLyPyUMNgiBZ5QK2wdC4xKrBmhfXXymZjEVFR2vJmtviWVgSmBGQ5PJzZDmSy7BJzcrC33VLZq6JUmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jj3qxYNtbe1DA1igsvc2VJs8YvaEUsXvWXXZh9Zr2kEf5vhK3FYB8Kd7frqJ4RZiUEhGMXtNdtE6nUpA8Q4qzrV",
  "key1": "4rAXzXUGwFoNGeUPNJ5PjcfNovkcs6Zu9GxLBReRAJVFkx29fo4tKTmhrnkGKoKmu2bCPTmRi5Lpq8mY3VDCTpMJ",
  "key2": "3EMWpJDr3VfxuXmTYjPGodu5Tnu6mm757QHsTcnLosLSc47ALHYfvMCwc4bmTvtx5CvVhw3jtyFqSnSQtRicFH5Q",
  "key3": "5XovM3vDXQuDuA8zzGLS94oy9YPWtjNRfowTPPt6y5Dm2RujNUH3JRBDKo3R2gGHwnL7az2h5YXnbpxeifA1jnVG",
  "key4": "3kDx3poFkr6HzLC6vzD3mQK56MxWncCh7qQcKrXfoNvtmzznKCfJ8wSZogqiSzmFAqFtCYRLnRsxJagyovfNj7fy",
  "key5": "2vPRn1u8HydvXu7ue3KGf4m9XRY4k9mnNNctuUHkxBdx9xQkuR5ygeb8sZm4GCQuqrgh41PHxndeeH74kMMGLDd3",
  "key6": "5GcNv939XgpKeqJNriN48r9Vxjeo7idT7QS3k9PvtE4zS2SwVSqfYQGqiHAeFmCGwSazaY5HvV13VtQhrbhHmPMr",
  "key7": "345Wyf8MXUgu2wejecF2sYJLrZk8oNi1RVMc5ndiGQ2cic8gDXc1JAaz2kiyFGWXXHCp7sCCK1YDV4ydbsGzVYih",
  "key8": "67Za51iXYzddrhHGDQjQodQYMbGN9ijwPrp36sQjo4Ta6vSkhh7tezSgsjmXLNmhvg7B9eLVEvuUuMmdVpUbRhcJ",
  "key9": "2bhBh37USxdTPjEqB3gWeJ4LUHzTiqW3SojH8Ntacj5T8duQdPdMScyEkPEfSyLsvBw3qrz1Q6cx7PiJqe2auxZa",
  "key10": "2iof2iVzW9ieSVLwBBhX8dPwmydDhseb1FUFzbMkVf1EbQGYjSirNBC1PbwVqHF49U2eimN6QsnGSY7XtWFsf9zH",
  "key11": "2nfx697hniFPA6DRLzDpbyp2ryNZniaiR7DH4ps1zfwPoG8ZAcy8spmAEtDMjQw7oVsM1U2wGQPJix1q5x6LuZse",
  "key12": "33cmY3tSeovXQHNGa3tDe74PPwRoVeDqT8taE6GcGpPzpioU3Vv8X1z35GKT3sQMGDN9ny5o7Ngi83wQ8JAL9gW8",
  "key13": "NYZTBS8VZcXTLkK5oGifZGoY95zRvktSuFaKkaM53cCDEa6dYqNJxjpos6QV9992NqwuafD4u1EGnh7FuTxZpGN",
  "key14": "67Zpn9nd389R2QH3gKnmEYzZgusMAPPVaJaJ2h2k2PAowqsW8Q2GeLJWY1mWwD46U6FAU2KiWt2VJYGAedk7eziy",
  "key15": "h5RCrkpW29b4d6kfHnUoA7ZF11WD13md8aBbdS78U25Mh8Auj5Dc56Xsntde54Yj2cjbVb7xEmVjFaDy927YzYx",
  "key16": "3SPoPU1GyujU9suwugqBinonGM1fGdesS8EFTrJBufNsm6QDivjfeQD65pUPshPAdxhddSM6oM7iPJoALqQEJZFZ",
  "key17": "5xF65DHkKB6rw6aU3f2MeM5fFGXn5HyEk5SpUXcVvGozgKnEaEtgHH8bTajsvhG36BjzJn3bXdMncLSbm5jtmPfC",
  "key18": "5EpGiChjBXmuWzau6uDPfM3MPhaLj6nKMQhWMS3DUEKVSxW4woxTNA2H3sCsSY9HnZzbhGT35UauZpMZnFJt6moH",
  "key19": "2qqXgjPgg3w3z3mnH3VQJVaULvGbQzze4r6i2wcsWxzVjfisM9BKcnRkbS1uheXEgAcS8KX3kDU5qdAFGWsjQ8rK",
  "key20": "rT5aJZ4fQr9EcnHHHj1cxR8B1kUPQjy2bHWf3S3wHYFRk3f7wuoizZYg2xQvpnZ48WzbZfpmEnjvrswv2kudMtE",
  "key21": "4FjCgi6rvgQeY94rUDkH4Go9zxLVFFWsizD3eadbrfrHrxc4gRRAEjuyhuFQwZGQcEj5H5p3LV8vXVNwfdCvDSv5",
  "key22": "615NYApEHAWycHQf9mdD9xxqCRD4W1ybFivtNQFdDpfY85Q1k5a8ENRWch1S81XgW6iXBDUmcxhGXwxgJtSfkiSG",
  "key23": "3LJpjwstfMWTB7kAbu8ETJrTrSAHeuA8mfTJReKZq1sk4fzQBLHVArMsd6Bw3b1Qops4xDL8vqCR1ydaFRLaE8N5",
  "key24": "WgHaLVTTGZgpNWoEEsuwsNUFFYdqXmvJnZxDg7NHHNeRzkfPfcyEwVK9EMkWc4yw6z1DBk6WECXRB6MmtsFj2hn",
  "key25": "2B3rKTM3uCxzCsVDbrXGRmg6w64tNUp8cyLWXg8GxdxERjs9bjujMXgcxthEDgPuadywj21gzVBzEumysDN88q17",
  "key26": "2eGEqrphYWkuQNTSkdCUXGtV2eTSNNtEVXeFtmv1imhgk95YprYdXKAqbJb9dvh1Ty1MS1XJkpiCwe42D6ta44Kb",
  "key27": "5UwLuXiZ9rLr1d5eEQnXm8dybFPySV4KQwMabiKnaHuTFGV72qAoMHfvqvzEZgkGpkk55CGDjAsqC1Y84s33neX1",
  "key28": "3UxU5zDKmNzagQ6vnPuNgCVtrESCBTuhv2PKYRtpUpYiq4GGzBP7sZ4qC1qRpwMpotwuSF1nYdav84SSqfkD1a1v",
  "key29": "5eDFrETEKoyfPdCB1knweafV11TRJatjAChDBNNjvoUaizQCyHKConguG2ayLJbq4Us8tizktwLi2Wdznc1EjCAN",
  "key30": "3RnbomwmZHqSaPq7m4HTMUjHGMWPGxqLEPX8doEDU4qYrDJkjfKJn7uogfedW89X8kf8sWZT3gojnyB5UvzJV7EX",
  "key31": "5LT7HESKMps2AAxsZsifecZgDN6Koj5HBVjRxmCh96EMaWCDJYKBruVZ1t9CcRMruDoXn46EfUGtNP2nViau6dZt",
  "key32": "5VZdTFydKWWDAk7FtyEfqLPbvsbwok14L54ZTHqPE4pzuf95pRg59mtQXbuSzo5LAYXY552h6pJm8KrL6JVNU2iG",
  "key33": "53f8VFqk2ZmxJ29piAPmK5Tsh8jMQb9i58C3VSok9XxYseF8ft5wQSQHDeLp4LVHF7xdnNUmZrytEnTASD4shQHE",
  "key34": "tSHBaNvoWVErJRK3tRBsvJYXdo9rnHiNMMFA74SYCQfJVKuJ2kp1m3DXubx4BfYCoRzw2fnHQDp7Y7JPyK1dJbe",
  "key35": "97R35aQLd59FgiVWBKvnrjqcdMK5VAHL66yDdguNdwVM3cFv9PJDbPaAAZu8Qw91SyhhFTcqSxH7XhJMZvgHXP9",
  "key36": "2w9PuFaagaix8X46oKJC2kvZ82BaUuXNfRSYTNkG7RUouVFfw17qFQFYhdA1m5XiuR2ujorrVVf3SEWEbSKDUy8U"
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
