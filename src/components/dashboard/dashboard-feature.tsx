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
    "2j5ZK1aasXhzDQpFXmehwMSkag2B9u7PoarRYUyQRFx3UwBkg9cMqQG7DGfxt166oGS4bx89AacSbGHjygqRW6zT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9XbJdGhJkWmGFn3C4D2mT55NuUeUihpfDSfUQLgE32mPysiGhVneMhazqkYvLBagBafJb53TsjUuL79c3ugf6J",
  "key1": "3KWpKmFCmH7QDTdFstXrqDVqbtu1MVwRGHZnT62sAJQdKUUcUan1Nsd3CmdUBSHxk4kReoRGge99f9xELHH1CgEs",
  "key2": "2iiVZHnwuzPBva5t7UCQLHa5VX6TkUaAKSWTSodfyE6zTFPRbLaZoZqUZYVyagPHARC62QjT1aynTquPbzCwojA2",
  "key3": "bUBgEzeXbJQSTdWPBaAbKXUUgsLdSViWeQ4tMjAzNzTqv1Kpk9Cr4pXdzaASubxKWn1CDF4VDA6zW5m1rcFDhie",
  "key4": "2HecbXD6Wb1ZbsVwfagiGJDueSrW4DmcJxA5VbV4RBa7dCWGKKD8ZgWJotQ8KzFEMDMEVcDuH1Zu6r2asPPJanyK",
  "key5": "5GQbrA4TK6nuDi4cdhfvFXnttjvctr7xNwXrmubzrxR3iSiMuU47zxqW6Fmp2Qhix8QPcRKdzfHGMwYbG3X3kgu5",
  "key6": "4eUE3CWkP58DTjSKau9y4n3kHDeZSdeFb4pVUhHrUbMP6kkK19K14nweDWtT4FcpbTMtFoL1oGufcAvUeSSium88",
  "key7": "63HGLb34P4Xv3qJe16xhntPeH9GkqXf6CM3k8FTrirW36FekE8xdEzwwrfE2LGvv3vR9dp34NktgXLddfAEjG91h",
  "key8": "2MjUKbnDzhxtU9fgBRJgWCWS32XKFtrwotGUjDWH5gv3okyxT8wdF7Uhdvm4x39gAVB57ZgeXWKmxGpKxHkZarg2",
  "key9": "2hbWDgPbtURPrYAuWJNYY9HAnMokW2US3tiU56pyWAUnZEL2vCqrVorzMRTFjBDdwgbgLZDjmmqrBy27DsZ3khvY",
  "key10": "MVzWHRh5P2udmmufreUahAJgpmM76syNTwHHttr2eY68sDHXFaj2NohWXG5hAyDzqY2eFtcqVDHPCTjvv3wp6c1",
  "key11": "45249Jn4gEHJTTTNP7TVn3PvUCjeNPZtFTQQr1RRG9GuPdeAsWFiWXmp6btAhxqecnqe8ec8msXihNUmHt5KLxvB",
  "key12": "2VS7J4EBNQHHakSDjcYu96uMLcekSrTSeSofhCzLJv8CtZKSytiVTBwNLyHD1UnmvWb7BrKfpi6BBLK1VW9YgFa4",
  "key13": "3LJ48SkfhKGiLysvBhHTe21NyMoE6WAZsffN9ydpk7LFyGyKEcsKUxbif36mLvqcth4ihjLhH9FjEASh6UenHPtM",
  "key14": "2RQipvF2GZrRt6fo1Mez2o6xRUepzqxYpHrnk68rmXZiq1hV4L2soxKy5DLZXHpQfUJySXyVZdJ5Yr1fqwP45DAf",
  "key15": "49L3ZXkAdzZHZ9VUU7HLNNYEVqHLDqVKf2MhsEYGAhRRrTRzsp5vPXBwz9KRSdEojZVo44XdG7YzMvX7VT5KyhCm",
  "key16": "4hAETHZy3F4YH5gzTFX1PqhtoFk7fpbsYY21Q42BzL14z1srEbhjip4vLXgCssu5RxDvgmL5bAyJLhuhd14QbZS3",
  "key17": "2MMCQ5Bfe4eqzxtGEkc4J9DuiMy4H8uCZoKRfUsH4tp8oHXpN65XpQaZThrA2L2m88sS9fSkXebhisrApqh98C3o",
  "key18": "2aA4u4uEtERFmBQaSr5PCUg8uXj2jTiYXuYu2PfsZKY8KUhGv1i81tCo58pjQoPzBPmrrbJzyo6seQT9m99wLJeZ",
  "key19": "5HY7cxJjsA5QFJ83QVNjfG6m92mRVHXtYuq7nS9MLdTAunSL4hR3P3Qo2X3VkrFQQ48h3kSMidaMngL5zUqihRBU",
  "key20": "4mEGCKutc3T6jLWMMJhx6iwHuNxRSwpP9qDazjVgxDKctY656Z52qT1twHumvtA4PKA4NwvH2wx1w2GAHW8nyDJQ",
  "key21": "2kqXRmpoAcPgE37aoDG3mLpyFf9MYqQX5SRT4o5hff1SxPPHHTiZgkhpRor6ZyPtfFg7u69EyGctsmQyFTjEfuZa",
  "key22": "4ipQyQiR7RMWLqSaZMyuJ1z2YTQeVh2U7X6xTGxmG5VziB8okCKXeXZW5Xbkghx3fsRMNhpLXu9Rn2hbh1qjpffk",
  "key23": "4aCEQqseZ42PE2wDLHY69peZGrL5M2dcTHXh8zxApV1H2CpzTj2wHLLJHJrmc31bpayNzP87xJw7xjghfdvgrWZg",
  "key24": "6M9Kz41rBCJ32YTpCHJZqoB4SWZBr4yzJjN8CA3XjvBEW99ieCwWuv9j3DuMnWMXZbiomNNKjKWV5RUDSaE3phz",
  "key25": "5577nS8PKqa58BcHxU2gkf2qpCch5UyaiKhBeCMDPLwYWtTQJwHPhncsNtuWy4jwcZ9bNWWd2eyrqFEnehU54gK2",
  "key26": "6ZXCUy7puEGkhwskXm16wBY2WjcmLj2vBJRKXCHSAFj71tXc1XGaDSkrdJQcRU2q5BKWTSKsnfV49aAU5GVZHq4",
  "key27": "8CsH1scYGrKWGZYmSTpv7kKvTZGmhn1y7FeMxqLXgXxEi2gCzMgpv6DtKDJaCJHnJfAFMXqFEWcsCPSGosUPjqf",
  "key28": "3NXPokzqeQBJKqUotG56cqRPC8AtBZxjbAhYt7UqHA8dEtJzb7XYYueHNAYaL2LMbuVKmFgBbkx1G3N2x55kpJYb",
  "key29": "49nXxDNhf2ThM1KfJhycBMQMwq7HCWHdu7WYjF22758FZHdT377w1cFxkYQkTtr4v2sfbjXGPnUQCx6aM78KkWjT",
  "key30": "2r4XhXrExt2hZ6JnVWPPq5ig1FpUpY7WUWaSLWyB9ueqJxJCrXnow3Nk7EwDJdJ4vbuwLkLfCb2rnMZjxBxRtLgL",
  "key31": "2vjjs7G15omKUXQjj1VucL6P3CfxKfiytHuwFuordAKh8egTDK3uNAfFmwGMj39tLoNe37FdytSVDbaSnhDDCQHK",
  "key32": "2kRQXGP14iCojMdVZW941gy5hXRKxXdw7Ftu5DNxj5eu5C9EKmejBtYrRafB9Lqy34J9cQjLnfy4HTgqgD4vpvuj",
  "key33": "3G5fVqpm7Xyzrz7xJEdGp6mBLa28JiX9xGXvPdbP1Z4au9fk4fPpsf9yL34c3GyEFzunswnzsf7qsmpv8znLbBFR",
  "key34": "2jH8tDo6fBBizx3nQVPN7ZuHnLWc5aUYu3hzWPMrT9HjB6xoQZ2vgV3EFywAMoSmwASctw1ZB4zmLMr7onztVmmv",
  "key35": "mpVAWKhW1P5J6vDcDFcHxU4sRrCYLchUjfpDjCkhgcsXyRuQqjfyzgr641TGs6oo4eVmfUYKYLJ5k3614jLjeYv",
  "key36": "4AcUBqvtv5DpziYbugCxTffdusRPFQzPGwLVEYcZ7BUerFahcCyY1ydYjqDRV7b1USnW2T9EkhgfDXwpdpnuFShJ",
  "key37": "2nFmiUL5ywKXgVyr3b7YtxmK8LZJwxr342S1CCTTX9ocXuWpLAUBpCYJ4FkzK1hzZFTb4xKsitww8m29VP1DqHHB",
  "key38": "4a7eT1Hp1oZYqryzNC5JuyqTKbGnqoDCg9uJnkmKuZ8sbuuBmt6Csgt6Yv6j9n6yFBK2AaM3ywA2c9QMxEQPsc96",
  "key39": "2WV8jLqjp9foX3uHRSGyGd7dqGGTmG141fEy2Pa5dUaqCZgpk9bEy4SWSZ1RYt5ewKpi7rYAkheAxAxm15aqZNTr",
  "key40": "63Sgkq6yWGJsRx9Pio963uuWbtrm1nRhYYeFcenRAySATLhxwhKvCY8sAXVKTWx1hizBpNF6ksXZjSDq5RAWfhEU",
  "key41": "3qXdD9ZVJwCPCzC4Nsm4mU92PrQygLmE8aRX1K1GwF2kRZLZ1rtRjropqNNvGXRPQxDUUFUTrSkaKSj8QzvMTnx"
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
