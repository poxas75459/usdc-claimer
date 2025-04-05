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
    "4XHwj2fqedEihVZLMewoTQBZUhPkP8Q2cx7FuiLqaTaRB29V48xD1oM4X3c3mBjD39XdW1XmpX2qKZVsQo8vWSXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZuF3xFCNMwLFAiZ3jVoHBfRWF3gjVWLnz8RCBYSTL1a5gWBe1K9L5pqaNELjNBbvr4Urfe4dUvD9KKW2P9JzZp",
  "key1": "42tThfiFrKhsmP23QFDT8zGXizbrr4pawAVUzcK9UBdUoQDKmdFbX5Tz6Rv73zmzea4cCydKnXaX59rW22rwbXKQ",
  "key2": "5SnQDxxgePdCHi1UN9jXHa9YX1Ja8vkWeQCfdYiCSDQaGTdQJ7DtXyWMgSdMiVMPPDdC36RAApKFa1E3QR1jwVpt",
  "key3": "4FamwKZ9628tWWVe8WHRJ1RRt6xDicM2yMvoLS7jeZXhPKDxDS6AKobWGmrSvteZnyR1DwLgJ1wGwLFWAFJfW8XM",
  "key4": "4wcseNUwsGv7TkienUoB2GH2MpWviqJotSciUMn9gHTvt5Rd44HMvbBjLfeZ2SC5fJ52RyDE3qEkvhAFyAMrNGQk",
  "key5": "56CSNfujedvWEMKqNVHw5Kxg51NQPi3GjgTLpYGwAGX31ChgYcDM43kZYQyGaoWDt9imdoxLamzJjJHKZAvEFGT",
  "key6": "5TY9XVYMsay6a9jJ2eMV2JSxSyDFsKGhLmW15evEZczEQM5cdJsZiEq2w455kqcb1sBFfD8R9Ws5H1QTs9UbfkbU",
  "key7": "3T6KmEk4AgLNWSGffniny4mB5rZMiJy627xhqKY9yt1vnRGL1nfFQaubHbgLB8cK1ga2xgdwDiUvNSh4pCRv2mX9",
  "key8": "5dWxR3iSFvqbC599Qk1m9RixRQ78rKWiHj6jcVTuqFrrGhYM8Ko8z5HbB9xtKotFSvmhLTzVhwQhTQV6No8mkHvx",
  "key9": "3W8DH5yVupTGThr7aSuvb4BBCKVjNxCTnsxybnMTmvZnVeNf8QP4EDAwuPM8nQevKU65vMteq1i6JnxEBpCvJVWE",
  "key10": "5x8AGRBwhbTfQyk7B4tsQDDyf2oKp6ByTJZm1hUFDWVHQFL3hCsibituM9e9XRuNxwmvDWEdgRYJixdr25XarMCv",
  "key11": "3zc4Wsr1z9udUD67ArQUGprE9Rk1wDfHobm3Az4Qh1Z66k1qN362ecpLxQxzWtNPpe9cwjaqpJCQRVuaAqDMiUZb",
  "key12": "2RvpWDZMDhdcwgbD37A9CkTRvm5teeCrKwmJVJTgnsBwgQ9zAJm36cHzRemFYYkFPEZr1LnrW6uNCq3Ey5Zqz4sN",
  "key13": "5Szt7SXGgPZ2bpFEqSJLdXKoEzWTHv1NzLRX5VbLxG2REENmcy5ZdHebWioAWci2XcGmhwVcAH5fRrNkPGbzXeE1",
  "key14": "4pkAZpYz7Xa3uPanJmfjN3s1PwjvVktL96HRC9nExFjxwBedqgsErm2RjmayiN2mtnsupsLjsbrK2e9LG2opewQG",
  "key15": "3QMf9vnpdaVbhqjmpiB1JUkkPMUPBkDqHYXQHMPxdLo68XkuWp5CuYSiqsvhDRiEtGnpGUsHqqXgHudk3YH2JWPs",
  "key16": "b6cFt3jfDZzZTmSbPkpiZjNWJuLXZtwkshk6fTPby1GDtU5Ui4PvNR9jPagb6MuxeS1t7qHu6xMjkzAWMrDSfnS",
  "key17": "56KVciR6LLb4Qbzfc4GyPTB2htf1ffSZtr8URhbynx2EmN4DN1MBpt9JQakd2EALmZxppQzoGuKGsRM8z9xi8hqp",
  "key18": "3VskGd7uZXo4ZuiZPehDnMafrNS8pUYvrDuhT7qR1zFnka2mJGob5ABSLvfZkeDUqHYvU5WuQXTwVWvdJLi5rZaU",
  "key19": "3jKAqW72nCcbhVHnbPNgsUvYtXsZcpRg3ApuRLoBrHgpZ2x7sLTiCjeXpmLoFhvkTALLuvV92mU2KqUp1jTJzaow",
  "key20": "4Vbfn7bXFp59hcG2mtCDf2E4vsd1uqY2PHqJ3JhQosGMiPxcPYgXng3Pju6h2ptGrU83ckehHp86CZf3AoWTRjgy",
  "key21": "2N7qmN1JrdAYw1TTL1RXN38sWHZikfHDgHGLLnXmCHWunwiJbgjq3AoLxpQLa11j1DtjZqDofs2fQbF4jt5BD5bQ",
  "key22": "V9Dge8HS3e7CJadXcB3EQhYUoPcoKBZDRZCEywdq6igo91AHvruvWr6FY1cDfxbGbyPZcVCWAFyX5UTZXph6f6C",
  "key23": "3YBQJWd6CRKiyEv3qFHtbwE1ektyd8mmM1ixAwtt4jz2w6vhfbPQzJDRDYmxjKpYexDaAFDgNeWB34HH9t4s6YLV",
  "key24": "8zetqVoHsSPR5z3vNB4FparLCTFcArZNRTz8CsRMqixZyaBA68bisAfgW4kPUsZHHHVt1pqHdzLfLv4r4c4te6B",
  "key25": "5C3ZeLhUyYt2hy8CcP5o1essPdztjBYUt6UnrdFAqzhwk2NzcDUXtwRYeTWhE4tPD62HL4dA179UpsZv8Tzqtie8",
  "key26": "535A4voGT8GaTivg6MAzTyGMgSufzfPkdBwW3Xg97cgdLUXGzV3JD4bk6myriEKmwJcQ1U8xWNM7gCmRyS6asDQe",
  "key27": "53LRbruTpyASJcNUZgxcpZXZDKVBiNSm5TfSRRXWX2dnkg3PDRENN181tsGjFYvyx3qj7pob3ZAVXHEFLTtuZcQh",
  "key28": "3JYDFNMw7AP1D8SkZy9HxU7EMADo2qn7L8L2ba8Fwv1jx8XA4gr3bZBZEaoRRQeUSoBW53o9J6b7vc2iXmFJdqux",
  "key29": "fvkge9ieTmDEyoUVPsugSHQcZJr1fFDQsauZqdcgLJP4JTBmS7gg5RBWhvuMgnLzUomfL8i5e13qNcwUAPiP87L",
  "key30": "3uQ2TVcKsEjR5SzbFZsVCsq1NqFqfn3KQpyKxEceF6Pc5np4rSo6fp9aVsLiBiKa1A3CneNw1ggPpeU7845YV2LQ",
  "key31": "3W4Nf7nFZyAUw3AavnPCNAe2DQQ75n8Bc2NeRXKto51STY25aPdftkfkm9Qvh5ShL9xssjixxrRgDtczLvGRmxbr",
  "key32": "4CdybVFNDtHJa6esdbxv1GBtptFyxkrU8gKB6b7YeVNFDSJjDFrB8GJS859K4f765uRCTYDP2zpQyuY4TxrHVYYx",
  "key33": "4UHri8LFHVskqbgvQphiYGEyuXKX1xTdTJsP7MWLvfJFTVNuLzXbP5Q5jwM5ywLi2GojXJmzFDKkL2VnfWUUijyC",
  "key34": "2GKyQNHNPPYQD9GRedZHGVcG7EurZPsNKYGcKmEnc1rw1fJrkm2nLtzsf2zgYuJGLubbPyCnZoJKQXoRP6MC8Bts",
  "key35": "XthYSu5pZ6bZDbJb7YULrWwb1pYDYNkbwunjcthNmRTAMtk6d5BCCuKou2WcT5EVfTxnkzJwHqnakTnxPQjrA99",
  "key36": "3yBc7j24GCDGWwMdBzowBNBcETMu4v8h2BZLFvpmzPp8KeohGPp6iG4M6dDMHnicohHiYLZhbgRL7aa7PeUBnn8r",
  "key37": "5fwBYEhkEQcsexSg4NDwp1UUdr6uoHQJqtZT6WiHmnVHDt6miJ392h3Lak87Y9UXzBTF5zRDtLhCpWzhvKwVknny",
  "key38": "4CkMDq2Yd498zwQWEGo7ysLgek4kQWsUDm3dLida7jTEJJLPZP42WxaXPgmujCsQT45yQW5fkNu8KU1WmKULx8y7",
  "key39": "56uFV7576konsEq9jdQ5bqoURHvfjMQM7gFdig8t1biTWGaMurfwVCAMyT2gPUrKGGxr51NPnurMXLRSZPeS18sE"
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
