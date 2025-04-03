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
    "gMo3oDWLDznqPw3Qk6R6Xfk7HmXXdq6GNXRnTvXUqEvVyzxQ1K1unz3jYn1Wox8WEgZpvHmuEhCCnCUPURvvvig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324iQYuAcKcxyySVcJXuB29NxZScCpM5dBGEBj7scRZGsUFv9mGZz4a5h13bYjFKxqfLXYanTm2rpxeZTDrjJ5AK",
  "key1": "BPDboH86bBS4hfsVGCTnGyTUBHyyXrShtnShgyAdUwysRPaTUTUTa9ddjUi5DAySusLZgp2aZKUo4oPgmnemPuw",
  "key2": "5Bxp3pUvUyUh43kpzXn9gLZVZJAR9BQr4RauZdoX3wEketxUjFMNuDq4BsMB37ccztv1jFgE6NKW5DCBbwXB1WCJ",
  "key3": "2MqtLmP78YXkPDRm24Msoaxu5nFKfuHMCYaXr1H5v3htvTeYYcK6pLzTZ53gVmyWQX4i7UAFcmWnK5GNCQVRJXA9",
  "key4": "4Nys4mjTPYpkBo4PixzJ1PvgjtZQFs7dB8Uv8fcnarzkGfHyThjsSj5c6U51WjR6piMNRGdUkoSh4nznosgDJrDf",
  "key5": "5RbreeUpgmh8aW9hUqKg4iT7zE7BDVFqCHWMeuVUJp5c3kfPg7jW5FPjabodThi68v8HHzFdfBBJcCY8N1GMpvQZ",
  "key6": "2yUcLVEHJwHYX2CEbmAZ6HnH34NWjtt7RhnFRrGiHDdLEHh94JLgVHWUNekJnqRekUuVhrv1EyERWvfnBrjZ4fdh",
  "key7": "2y38Pv1jSnVey959fpinRxQLVwcjxHie4tQjkHZFFtSBgfNFvP5CuZJVpv3vyxJQh5VqFd5QXTfrorq3dD9UTWc6",
  "key8": "1d4CddKcESMioxwHpFwP791n4AxYDRFK5YcY3aDBEDwcJsaDN8MExDSmLrpmKf3DroH8cLuP9YZfinQrXroJxXd",
  "key9": "4dybuqUJoCBKF7iZYud2UdCXerBpLcui6sL9kZGApwq3PJoJ89uMWcCM6yT8WRRmowGaFCFdXt14A8UQx9KVT5tS",
  "key10": "4dHr1QMdPm4sXaSN1DbVtkGEY7U8bAbmqWCDWA4rpZMkRfeEJ4p5mZ2t37q9qYuRAuAPDEGcTXjqmr33gCUzpnrL",
  "key11": "43qw6wv5UBs6oGE36atV5oaEVhunZZ9g7UUgUGLY2y3Fh1qT8Lep14Qbt9aR3taDVooYxwUjhPCovyoPQejy73n8",
  "key12": "LoqRSFShc65CrE7v4Nevn7VosCDdWvCZNf3gsNRVoGHhwkJq4CWHCcuNC2L5TT3KRQtyHNdgCiV7oTi926ryeYq",
  "key13": "2c73wbkHQc8efgM5WHiTxMYRCbUcEX1hmLKRcE4tF5HFFXc3atUqwvv4mP1Geci8sGiE7u74nPnhRj2qpxqXuyMf",
  "key14": "g7ZTiXwNLkCftGEd4n7eLDHM5Cn1ZqT8jMb7YhFfNswbfrhvKZ17ZXULhqxxHZK68FDTTRJrXFn3bx2984wN6L1",
  "key15": "ggQAF7sYzeW9ApcHHH8WYfFkUQdtQHq1BfTLJpszL9JztufBJhFLj2wBT8HJPBcsm6H5A7dVJBaqjnMnbG8rdFD",
  "key16": "5G2F53oCiPn6SwBxJHXxg2qZx115uRw66PRFu3FwVd8qaXC93wumjsKoguBGRQaeepohqyFUCJGWho7uup7MxVnL",
  "key17": "2VRhU4fNnyqZYm7VoWMZGCUTKDFaD4syTLBD6bGJPi19GUgWRZum5bE8YaGJPbRrBq4hPTbZv8b149fEwsGuidzc",
  "key18": "2ouajXori4m795NDWbWQhUpHok9X77KyUyTdw9THJNRVR889HWNgjEz5BGjoA39rpik6VU76MtxVvSiqc2cuXBs9",
  "key19": "3FUdSGbVXv88Mar15EHhedZCySL2dndPRq9H8N1uuce6enqKCANBXDNvuxgehcSxRefKx4PPSKMfZ6ByM8CDTLek",
  "key20": "w1XZEXt7SiSY5BNDo7i3aK54AamRcC2jKiaC1yrQLYLwND41CPvVkF2V9dWgjpW4k4skWCir1Ht68ywsPyHYfLM",
  "key21": "4pkpzhcVuyF5wq8CFeiSSmNEwo69dxzEjS4K2k8vGM1eBp5rdhPoDuYR6LbSXRpfnKhbbCYbvB4fSPcsrqr9bWvf",
  "key22": "43FWKF2irbEqvkraGffXgBBPqUrdVZPZWBomZw4m1RFZ6KexzNDrGowCiB1hUfhBtCcdAZHNrfR4ZWbwy4rWSTnY",
  "key23": "21jhn4WFsp1AtPQ1JaUzNYqQ21jJD68rP4wrwoVzer3oxVjXG9yHqGtQCuaPGYvBAUJ3nyVTWDoG3QbWqVspTRue",
  "key24": "5AeYaYwBcBZUhe8LcqZSwGQSEmKbcZmL7C4mqbzsTSq5GkGy1nFA9PTiEUWgUuf9gxVU7GMdDPY9a48fGyhgazHE",
  "key25": "5JzCxjxPeCaM7hERjCZw4e8R3fWHiqzQJ6c4KMbBTHVT1BJ3SbyZ3DA14euE7mcwz9p88oXgAtH2qt4RBSM6DKkx",
  "key26": "531ZYZfZq1YHHeXh9DwZAedEnsf2hSNACmLA4c6K1kBU1QTe2eisebw2dZRHMotMR8AWy5BoqYM9KcJyuGdFKm7V",
  "key27": "3JrPyCQwknd4frv9KAALgpd2X7jiMW6Jd73Eam9xgzR1PxGUDAwobXmTWX1iSC3BhfNTxxgHcdhEUDfgMG73DiBp",
  "key28": "2hNSJPSNP3xzGh8q2qBfXccK4QNrsAGfDoyd2uR53VY2RkJG5eBNJ2a5ppyW698kqpYCfiV41NRrpRgRYMhzbJo3",
  "key29": "3giFXtMWNSWnEFxqQyUJ2oarVssYbLaEAbz1GGAEDrbJURcfR9erxovT4AHJHYkc3SGc8Z2hqb4D1oSzroEZthzh",
  "key30": "5KQCwo73mfMLCmT2zd79xgLYgPf5VDg4hidLtxJeULu75dvixvF324mGTuU9Zn6WMALbheRXtB8znsREpSNqYTPC",
  "key31": "3dKbbkRRfZks2VjFLgXKMrV9s697YwwfHNDAtaqUqeaTh3tRXEVFAok7GMrJAFisjuMYgbGy2pTqnhZs9XWCvRCh",
  "key32": "5zRguwhUtxJ4aPSxxyMmwaSxHL8RXAKqWeHcxnMPny7WFfa3buDPiY1Wb3pECLs458rfbsrFn77GTRFVgHc7nTKJ",
  "key33": "34BgcawGG9YuzG5VHxda8hDjo5TXEauhbU68hHvaejAsZwmJ8ybcPTUy8Ub8WRymxJprBGi3pN8XzWRti62aWChb",
  "key34": "2X6YBUE7WfhaWJmYZb3JtYP2NdqYDRyKvYA1Yr5KzpUivwsqgecBVRNXFihFTvnpc6TtcLD7ZbERSvwtKfLkXY63",
  "key35": "25FAUcBdz1BJdiuhyoQ7GpWiteoMdzsAkBanv9DPvpJYNRAnDFcMd6V4BF17HyTqA1WHhKNHN63gsTbqbZz7fqjj",
  "key36": "nPHNxEymAheuy9xGVohh7gxkvMT38MjhTRVBLGzfEPWyGn4LaYozKF2WJjGKv6oyPqU77BX29nfmVh5ZREHsAzd",
  "key37": "22A4hp2ihrMituQqRH2oB4MbXkJnm5Yp1Bf4N9XumkXtmr45BXbgQGz5RkxRPSU6RxwpnoR3znqotDHJxgjah4JK",
  "key38": "5Yw3zPEBoYnqzgrDkgJFPDAnKym7wZjaNrWez7iieqfHxfKYQYSS2ZaNdSHgCm67bkg2QofZcFfRDccQKAjGYzvU",
  "key39": "52nSz94o4SdaWpci6Gsw5x5UEmWQy1uVtUFCXTZc2sEU3Ycrq6cUTKFifSoqkuMKpsrL9vE4JyQnikm6suMv2Dcj",
  "key40": "hQ6GzSvf8HZmrMWjonTttrKHLMx3UBWXWsryXKVYR3436nRZCVF58qWUx84PNoHXuCxxVRLNycXC5G9BtpyQ31D"
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
