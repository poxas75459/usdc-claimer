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
    "3Tr5UWGumCsdBKLJXa7cvaT8TfELqU3RLfsaPeLgwCxymjat39idvV97oTW7YhW7z1ZSLEvgk4GRpPa9GnKDYtut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431E8AFUSzvEbotRcKTczi36tGtgTnN9P7qm29hwdt3FBtVuw1SdKrrVhzz2Vup3xVNYoGrc441wm83nmXjxFSFJ",
  "key1": "22SXw5aY2R8SaoN5boNX9GFS7xMUqEHkVXrkKK3HDdKV4v3NVmiygiGYciBHKg31nT883NfTpnwLjqQgqU6ovopQ",
  "key2": "5dMxymPTno1EDg56wGyEpUWjRxbyBsivYhAqxAM5utbVYyhWtRGGv4ezeD1UFGhjEijMyiB2mNPajycGVUYK2LXR",
  "key3": "2E5eNepJGtYcviCqPsNrihJZtWsGCADQwhjZ7uNnhxYSZhpoPLbYDENJm1Q38wCZVswoSYMm7k6gxQc9VidGc7J",
  "key4": "5RuET4QR9xjqheS24JAzynj9saGLYU4Rf32pgkJXWzQfDqj1jvPfhd9zKaJeLUYy1v9hLtjy5APuDKEyhmu5t3tM",
  "key5": "5JvEgLmVFBUoJEeg8jn4RcPJZYsgMZzvsGBpnM3Ze33AaoFxXpGWBMVpHvjbzZ2SKczvGfnACrP9HRTcwbpn2Ajs",
  "key6": "5vUPepwG4pVMCbQNUdmXD6PB3Yp4LL6u9kMXgs78kq12HeX258kJcnhQKFVMqftYdSWkpqHhyFQsxTfufuC3K5Lo",
  "key7": "4c2bTfm4Yy2HPZ9UZbWkBiQ8mHj8LZci1f2UzGDQSUu2dgEetmcEFpa2NX9QJMGQBKjGmHdexhhPne3DzNRSxqC2",
  "key8": "3uiZZXWCdr1AUEpxSZvKuKSa44Az7eNYwVJDpMbYFrN5qStKPBWBKQELeWCvUVhBXY7Wj3ofv8Ykk9Tho8ez54Qm",
  "key9": "3RNeCJkkcBPsoNmc82ZZWmtF2ViH9bnB7dR99iv4hWrf9C2QwUNs188QyQaAezyjfLfrS415MKv7sTwk6R3q74sU",
  "key10": "hjKw4v4p57rxfDRrMSysUzVErsyJJK8oGZXQBBJvmGteL6DJ7ZU14pemS4PFpdGgeyq4MFjnPVeLKniXQrsvvPU",
  "key11": "3QpDkHXhA57xgM9PHiCutW5wdF3FqnBkboUmg35adP14HiRuNWCUPCME23uetjdfZgWvzrJL359ScGPfExbY9rre",
  "key12": "57LEE8yUPUpZUsuAnyejykcVndyBmNct7kUhoNC8oDEdwJcrYJhtbNdnCNLPrNVLrYK1FevUXxKk9PXt4Rv1qsdU",
  "key13": "ErkYU74Upz1M7QUJGqkRBNcT4xWavVUhtk6JkpyjfYEqzM5rEcJJ37fHXFJ6TcasESwiDP4K8fKjok1gc5mGU2i",
  "key14": "4ighagBDRXtv8vYQAZFszWhpgtewEbgnvUhjRPLgCNyHzdhMaiKPaTrF5oMFHUp5yjBcFcQ9rJuHwL5FGpGudKsN",
  "key15": "oN4MsfLv68tu5StujQ8kAPuxJDfmGTscAr3CX7SNSWSWnejR2pLe2bVXtLfvAD2i1HcuZUkukF5g6DZemtBFVgE",
  "key16": "QwAfmTYErAwzbx7Na5rSkhEkhq8aew9tAHpBvLUsdhKQtc49PQptFjgnJKRQjzXNMACiuzcPxZU1P66e2ykc8mz",
  "key17": "35NnZkLcAsySpunFJkZfv42SxqyJrRWPD2GckbErPPttNS5Difs6mvYHATDqPg5Mcmnpa9AAcxHxjanD9ZTMueig",
  "key18": "2B7yajVeU6XABKwu9J8611YjaVRqRxZRDpXvSKeuTWGn2LwSz2fcyUQNSgumWhDSuBChcA3wXEFYKR7K1ABxSBA7",
  "key19": "5uJoX3tBuKGHXNNYtX7j1YGveTKPUHewYJZggyjqgr3NQr1fFnmAzQrV18p7RAVrTcYWBT1bQipuboXxWzvaar5Z",
  "key20": "3n3v4jFmpQ3v6btAnfpJUmatd4JJonN29NiqkpGXEQC1LdAGBCZSDgFoCb7QZBsH2DtSAG8o8HgKau88vujFmAY",
  "key21": "5cqvsMyZwfB2FyUtP2ztAZEFTmbC5jV1wkGhkGgjvhRYCLyXSGgtFzNLEYenXZ6DdkpURCVtXxY8WKWnpVcHzrPc",
  "key22": "5JftiAtwL2TYsxWxuzGwUuN48Y9CfKyjjfMzLBBxzBdhZQcGiZgRbTyBHKkdARS2H3rvRdVTb547sQDJYLWKGLjt",
  "key23": "6NA9n4wJcnbCxcZLkVXgG4LnwC7NE5gsZ9XRVyFHGnxSG8J91WfcayFsAa194j5wBNkncbdxYyJqyqnd3UrHPu3",
  "key24": "4XfL9NrB73xqHuMTzfPoWydYpEqeEP6SMgY2Eu7ZSNTJQPyjLdgxdZzQyjX8XN5ZG6vjzh4vr6Yx7rLDGmyUnJ89",
  "key25": "23zKTErjEoTVvMxzNG3AEvAKMBtQtMgfZGdLiEVBBGb9LNKtK14kTRpYHUQQZvo43FhiWV3HatXi1axdjv72miKp",
  "key26": "5nVbiddb3YcChUouoWMpYn37HAYSFWGDjGo2VFvJHJQz9kMs1yaALGBruoCRDrrZxUE9xyW1PoSKDVNhSbv18JmR",
  "key27": "2fbMsMeaJPCxHesp5VAZoFotAR99Nxw9KQE5Rp54t26t5JTU7873GpecbXeo1waaC1PPorc2dR6kkfatfM4yjLgF",
  "key28": "1S367hK1hYuHxKwMQoHyNiReh526aoTNqFUQJKuPu2JTwCimT3WxveSGv7DFgbYeCELUQYc1f79ntU6B879XbEr",
  "key29": "s5yuNSc2ZCxazcnzxMo71iAPKBHbyRbyTkgGRR5aLPjZxCncCivtrieTTZSen1oeWKmQVkpFjigmxx77qPkHLyT",
  "key30": "3hb1Ri2APRzKxkprVvhz4aGeY1dufi75Q8Uef76SP7i1v4sttdYNhttJ6Xr9cBtsuFcFjSN54iPx97kF3n1HkgXg",
  "key31": "4xY7AByJuED3h8vU42WZcH7YzfNMt1zghMwKXd96GJtipZdgzgRGpup6rGhtgGMjuAYmFsP9G8frfvnTTbhZFwp3",
  "key32": "22gs2nSQW7E7dJM7kfzSWE2HvMGPt6ZbaWCD24CvsGnsX7VsftETqMvSQBzrUBns6i6611YHwwTEtiwT4gxS3RTC",
  "key33": "21bm85iT6bgDCa7FXhAu8zKCuavfDtav22Gy6TwRJVENbWX8u3QKqv6vHwK6v3162UrKtG9ex8dshZmig7VLURe2"
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
