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
    "4PnsFgPjU2JDQc3oKvyaQaS8FZcrGTcic2rhpgW4kBkQQB2UJJs5dJPCWxgQyjccFxp28ZtDVE5Ksi55cuKzrTtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2okCXDpxL96KJBq1YwRvCdvgXQ7ezmwDQChjwKcfjuZ6QbWpvsoyx6w8PpNs3hKPE6priBnMXDy97LWEMhZ1GXzc",
  "key1": "2BUHA4TPtBqEGv2jJ5vYxZs8Qtpx7nSVgpNJuADyEiyB22BbsPXzkKY4LqvFF21J5Z2GXTbWwav3tuiSf1QodkVC",
  "key2": "3MyDduCKg9o6ey5p6hw2uwzRv3BRf1hDZ2Zy8gBhifdcVAYxwWRJBs731ekzW6PzKLnjXmDUtA6uW8kqa8tZKKDe",
  "key3": "4ZeCxqgMj8JPD7HiVV2h4R53GvvNLVErQ78S79aGHdhuGwtn7v2bLQERofT7XQMKakjvFMb46q5S53SdWbw6Jv4D",
  "key4": "5sqMchTdsu1PQbNoR2pgpPxSZMTSP6xaHp2Zwi1Fbhh3muZ7wVN1bUEnv7NR8Tgri5HuzGdzCoAsJfVFvYW12KZn",
  "key5": "3tzK3nJEt1ETbV5aMotAMJLSMd9UURHrCHcPxHM91H5ZWFDBHHdW6KSCZojGoxcXM8exi6iskMtyw3eanDQyAYyF",
  "key6": "392B1AaKSubLYyw9AYrVjo83teeEhhUawZT4fk8LADiXFoWc43asxPcsonowvgJ15uktAB3CHHFnN86MqrXbWMbn",
  "key7": "HzH9z7B1df82NxYuZ823TPKqfHWMaCc66shVrkQFgAshPriamQNmyLiZhhNAyi3Hu32pVygUvvqhmDEcYP5mk2D",
  "key8": "5vNdtqxQoaEtqo8VF5fdM9WF11SafZ6YKtntUNkLhV4PnGhhBUk21bi4ChDbR9jbcJxdBK5CxvmMx2Vu4Wz5oeK1",
  "key9": "2SmtwovVsJyM8BLcb5kC4n2ghAEi9BcJ2GgpWjJGN8gmLqCPsVnq18m8LqKgRSxsrfGyncDXKz1iMZYzNo8Bxb2b",
  "key10": "3FCz4RU31aUD1z1NGHKGLA4MnnarV1mnmpbuqrdmBYVWgdBtxDfxNytFH6xp1ahdfCEHeDQZX8xZTHBZSefPzgDM",
  "key11": "49hW5uQRaiKFi7FKfWEejXuZvZ6g5kHRGycEizpbHgJDJhNjvQW5BBRSnezhK321wZQzrLkUTvvs7PTeJ88UmiWY",
  "key12": "UdxLeQ17jZBhXXFRTuP8vS2YmR6o4KD1w9Fx3GwJQuEEv8wb7s69fyez8VtamWLsbo8314NfN8PcGVHwNWDCw6d",
  "key13": "3hGqSQF5UwrmYJgN62LYEpLr2Vf7aE5VKNSMkvQqgyS3vfRPNcjxSesYqUGbcRVeziyt9Ee6g5dGpXosNQrqiBtY",
  "key14": "5ytExG4Zyf2ZzzCDAdfBb9A87ExSAP6rPmE9ETfDNz2MtEVLzuHqyHpYV99FNj7tpQAhcCZKpLouXfS2oMqFJpRZ",
  "key15": "3pBwRVKrP5ZYEnsim4JXyJ5VsMnDNxrKZiA6Nu2jZw8MPoDxWoodJxLY2sBcLaH3QPtHLxspvKsPLEGox2tLgMzf",
  "key16": "2deTPUEK8s43ZgpKdT3CMMuW9BZhemgYBotWXHnvEGGzk8C7GqycmeU8Uz7UvhUJRGvdTPasxaJV7LpWd4zzwsWN",
  "key17": "KDSaoFNA3v2CbjuxgAExdifSPK3iL8Mr7oA69565PsrdQBJztAUvnPzd5i1n58xupWuJJ2X3kdoKYiw1fYupuWu",
  "key18": "4sYU9onYjmmo8fUupiDa8ibepfXu7GgtfXHW16n9XKUaAoCqBag89Fp3LRVEXqd4LXFSwxB9ufB2h5q5R64dXaN7",
  "key19": "Kxxsf5dhVF9zJkhJD4Roak8kzTTyJNGFeJ8QGNSQmMZ8XP3LSepMyTGMVH3goVss5ghNxmXZ37SBJ4ULiFDfz3t",
  "key20": "4xouf91ty8TAxfwz1EFYNesiSoAxoC43GzD4mL7whLxDGiQHxVsefvJGPcUqpMuacunUJuPQAKEH2EoiEZWn1Qrx",
  "key21": "4zKffYXTe14Ygy7BcwAzVsyUJbr4QwEMsQGGbQtUniyEuN25LihLvpZTFSx1pbsgh1MHsPmhvEHnGdK2GqLXws5Z",
  "key22": "4o8xx5GJBqR5YQNVKVfSjRQJ54tJ5T6XcmkMhcmJVpT2Mu4LYA5YZ2s8jb4qBzySiwpdRerbcs79bpNXLG4YgR6W",
  "key23": "3qhx6RVs4hgQUEHTtzKm1e9DTtVmNygPZybL54QTRMEHUVN3HDQmBm41EjodYH9Z9uY6SbhCHVt69vc6tfFXm1u4",
  "key24": "21xBFaMPHdS4ZgDAHUBD9LNp3CXgXZ2N3tCMD97McXeovhv9tGZWHLEy8mXcDGXyFMphpAE6rNncvCRPZUVCYhg5",
  "key25": "2xn3ABSa6NiJn5pvNuupVec9bUbEaNUYiju3coDNBBvQLqj6iD24kPXPricyu5mY93S6baRYf4wakam1hz9a6t7D",
  "key26": "4g3A6W3HAVRd5Bkztar1vXjiWnCu8BiwpoWCKm9TdBNv2f5728W1EQsFaKYEBLMcM1L9MF7nY8xCquaPkrmVrtpU",
  "key27": "4Ji7xpfPbj98oyWg6FoqMpDy3D2uDEGXdsC3cEBs2ZQaQ4ATh1GDJiB9eunmRFpzsuML4TmAeSrGbQFRHEww6R2c",
  "key28": "2v4gpQ2yM4LKNMzUeTkhKpcBKR5Jk5S73GE8F46zgEesGpSqCY8EBXXv6iob1xZU43RdSMByg7gvFe8uh4QuU18B",
  "key29": "QgB9wSpnA7Y7mLj3WKzwzGozzBXVZGBULaQiYW7BYmG3bJxwBx8YinGFpzmNcJ1QwLX5o1Kq8BJvA7P1Q79MC1g",
  "key30": "2D1ifV6P1sesFGpSkes4JZCvmkoYxeUzgv3EseDWTWPWua6QLPgwAbxVra4Sut9btmX6SqgFCaLiWEYp1MbZvtSb",
  "key31": "2ubKpkjDU2XEpTUVrzUmYVtbgyFYwFZHkG7X1rGa29XZKaQMf9iUFroFLTYU19aT3rQH3jqpzkgaTnd5DFshp8Q9",
  "key32": "5G38aDPDfjzXFxXF391Ri8o7zYXcNgU4eKMCXZLcEoPWyWUXuE9pvs8ffzyV8wZZ9iZ8bC5UAyvzsJQDh67LPtBW",
  "key33": "4vNzqdy2FvW594igeGMzdQMtpEQ1aJuwbQf4DHjzZEM2gF3vFKH6QcEXSTD3MgU9mnpFsezDe7F93kL615Z5PabC",
  "key34": "4syf3VGuz49yueJm2icF6DkYHi4RR2YbN6mELGMGt4Mu85tBcp2bGq3wRgEDudBWiqPwZczZx4TF2Uau7XGhoEsN",
  "key35": "2jg6x2Nhdop8hDb4XJQbXfuD6PkuiAvtfg2GZcUXSZYf37ZyiEXCZKswtBnPSBjFL21P2LJierbP5qmSxAho917p",
  "key36": "2pj492ndt1bF6TrUDXr1xaPeJTJ4niTyzTbNbBPD4TQwPfGBz9SR5z9Bs75mkqbCCKk1BxFaHx6qVKQmMNr9nj24"
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
