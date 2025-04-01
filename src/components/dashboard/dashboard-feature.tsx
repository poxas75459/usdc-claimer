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
    "5D854GBTTgqg9uBQcV3GLSPX3KiTDuNtY8hzMpGWAaNLZWNFNssuP8N8dyxMnRKw3FGLSEz1ig1shYHKyz3d2dzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o45Uhm5xGdLx4knGapf9NNf8PJvRmHA4TFGreT4uM5wsvEmSAFSrgKxzBpQjUAYkBro2d1pCJubpUbuh2Yp7hbA",
  "key1": "35MQ2d1xHjUXWGsDxt3Tnfd1qKW6etPa15K3WBDmPNrLBecLTfN6VqkvJkcmSvRQdVnZdd2J6eaExxtVBU9HSFCf",
  "key2": "3Z8fB2r1ofTbS4PgqiX5hSrMFLQ23GJbxNqz4c2oTvyrA3b25aaFGZ6UGErrAz7MgRXc53pCcpkP2yxbA83tgSYa",
  "key3": "2fb7DE3M5Sx8Vmnn14ppdhmT33gTsygCX9N4r9xASbndfv9pDh6LBxtfjxvBJcsccqBQroy7CSauCSRXAp4Ht8Jv",
  "key4": "5jVTF686wZs5KHSLnpufXFNTE1qY4SVrftvo7KkxzZ9xwv3M7XJdD3mUa6CpbYTXfWYjFmCFjcWGAosy6P4EUkR6",
  "key5": "3bP24mAGt8rVWnNAk27cVT4MPCdhHbKB4JFwM3w4sQ1vockUQLZkgyeRzrFrL6g7WrC8TNEUMX9osHj83oK2Dohh",
  "key6": "4hR3MV9c7oSrf1zCbuUxAWzyfKaCFujdBgz3hDNTxvJKxdVMmMbH5CrNNvU7ihKenV9uZ5uJkuasB9JmnNNpEQf6",
  "key7": "2VtDixxEbKycGsVoYq2dn4MgBXEsttc2YP5JBsfz4mVx9aAfrzNJrg8JBWUicNqs7DV5GpvhAKtUcQDBc5CfQbuP",
  "key8": "35JEqbupDTRi5drcjb3Xw1oUJZtRPgu4yxPxCJG3buFMvs2JVSG93uGg5fGQnFoT17exBgu7yzxP1Qwwf2B5xQjf",
  "key9": "JSz8SNJbvUbPvbF4VpYgo5PjxBKLSuL2zHjbc6yh1pBc6z4cCC26toM1dQgncmGeLNWwsMSe9McDsqScjL1N43t",
  "key10": "5Wjt9HEwBRjdSkP2UcpHQGaXJsG3B4CNMRHod2hrGAhSG5eP43ANjMQ5gjPLUuxcY8y84H8RT7DyzM4M2HAVC37X",
  "key11": "3EyL6aD2RVL2TrQxjyQC9jpt9KyxdenDNALNhBgq6MCPDh9SiMqPoi1jP5JmzRwHVc78DgX764ZY8dAgAKqVq9tx",
  "key12": "2fD9yXfCQ2fvk1E3JboNqJTq2xjx4FbiJSsA2dHLUgS97FCwRXrPmPmveMLs2dw46xWFMtfLGvbqWy9KKH6xjM4d",
  "key13": "4PcWAsczXvijLX9p6VHRikTWmxUL96AQWwqgWiCL4xDtabBocguwfvCups3JjyqGtbxaJCemTTvbSorrGqPcLbvz",
  "key14": "37mahPg6LpFf61aKeqrmni7xHxyFHzvDrp6CG2QcJs1YcDJiLFzhKwyizhvJ7C3iJPYedKjx4jGTt8AoMkfqK5en",
  "key15": "4jApj6o7h8chcUQa7g6Ygk1cnufcUsLbuHZeuo97nK1vnZnNFupDJGLXBq3i9nBq18nvc5tP4mxAg1Fhace4LxZE",
  "key16": "4vVgHVUxpCpz6Sz5mriASRQtCgxM3dvZx8stBPmf6PpiQ7LxfKrFtstC2XFKFNC24hQfhwDo1Jo1yYkH3e8Dt5ss",
  "key17": "3CdLL67H64MvPQQjhhuvdhAbD7FnLLuvBTZ5BQhKo5MHVq6sSywEdPCqqU5MixPoRLEDLYYwLmBNcZDLTEkAWsfT",
  "key18": "e4p1NHU8phvPJYBUjK2zprxGjZsEP2gywirV35cWCiqmzGR5btgLAg9iJgSdmNtCKEDLdDhJ9v4stnwgPfV29pN",
  "key19": "4aVN4J2uZgB59G734QAcFBgiQN9CdG2jyTniCsvR9TuTewcUxkrmqeksub9RswgnGT6zMACYw7dRjeRfvhutkGvG",
  "key20": "kPQzPyMieTBHmR5hTSGbhGMrdNtrMvBgk4S6ebGeUVfGJQXCR1GAsEfzuvhUgg42zshNWpqnk4RcPqjEtmNajt7",
  "key21": "2bEJXa5izTR3V2zVH5dqkmWooU8EzdiEmdS2ScMGvkH9WNCaYx3RqkD8PoiyeBn8DJMhaQSktc6SHmnTbqVKWoza",
  "key22": "37WS3F5bVoh4YkTH6yEiceeasDMGbrSZqAeY4DwzcxdSp6Ar5imiXYiVT1r3Nq5icX3h4YGsCGQToQ9MXdhThdd2",
  "key23": "2CWpcgGC4xWA62VuZiy3DdxsX38Xr71SajL4HMfM3T4CLQNCU73rL4aWiRP3YWcbbcmPB1pGarhqExCcP66NzpWi",
  "key24": "F1CBAHMNiox2gPfQY6G8tdHNrWhBMHfo2ws4diLxP5auMvLwHwX4q4kK7ioLAJixULMvSJco2DQhdArRKU2a73b",
  "key25": "5Lxq2rxdRm9WtbdYCVkJ3xHBB3faPKfie29dzZYMnEGozJEiPLMtzdm24i6pwNR62DmqNvmuihkA6rE6WFSVapRX",
  "key26": "3eSbdrKkWPVuckj3XSzwurpEhjkaUVLwm96t6x1xT5ye3HSVprPjCSzwf5nhnLhnnBHQDoqbBKzD22jCKqDgXriV",
  "key27": "4aigLyCFQnvoPFBVb4aVbWD4HLwMAmpmszf4dWQ9GKLoRHeh822HtyQjp1WRz7pQDGiWuTiLrRVDgMRFyZYEck6e",
  "key28": "4Qz61deGdPJREHZvQSC3iYfRwkJNHUkF4thiSM55tdqNfq9xDi3U8EFD8ESyZxP2r3BEXDvrxBQeNxJ329zC4qDp",
  "key29": "3RgC3q9GkoC53X46xyJjtJWN5u1jNSKWKhLd9JPJreKHH3JGEZx9qc1GeYJupamH1MicNp2SfDW9mGVo1enaA7LR",
  "key30": "5gv59unAo5Fz7wFWBo1QvhYtZJyohuMu5N2Cefqytq1UZEj1TLA45qLjGG59s6HsMudnW3KWkgLn3T2ysCtCXGAn",
  "key31": "5opNe8FqAkC52zK4tNFR5z8Xw1UHfrpGmDUMkYp4bbibVn85X17YrXs87awy1wfKDyVb7WQbFrPy3FjUWvUYXNQv",
  "key32": "4H8UKW9TfsFRmJ7RrRQAWgCRV8dGN464aTj3gKUFx9zGtwzGP9wWxZgEXFWSodTab6aW4TCrU8ffx628qshap6Sf",
  "key33": "26MLCrhr5yQs2WHxqajpCzc6dvYZcDGYw1YdybQriJDhF6UVz9M64Noq8EXrFnBaEXYL9w9RV7ajA9szWvtBa2Z1",
  "key34": "5VMLcwZPRtAwC9ALVupGDUpFXFakaNzNdmT11TW17mHDWGKsTrvfkysBRKnYCcuzBT6Ej3LjbmZdKXoBnMNDnjhy",
  "key35": "2pEqvMuUH4Cehhh27J1cduaG5YuBbaSceFk3dEpT8HbS5Ys3rs9WtfLsthsWMiYdP9TMmqJKiu3HTc76Yd6Z6PC7",
  "key36": "4WSoZyr39riQvs93d6YxDwCkDUm7dNk5orwJMhhVvqBtcjj9jfbKeGrutXL82gyKoKyWH37i7Na2ydNtAS1Yf59Z",
  "key37": "zpdjR4BZniUBNuHZKnU7ebVsJQ1i8ZpDQF4WtLhUDtwG8YZgv5xr3jLc1kyxP6ZEEA213zUSB1BZHSARUffYhex",
  "key38": "3ScVtZcxf4qer2GoxEMTFLgdmxz4soQe1Qcwi4YYLrMtW9AjEqggF5WTChURuYRr7Z99utsJft7m7kC17XaPWev3",
  "key39": "5HyuydTigtvdCsDUPN4vQVLVRNDCEP52xqLFHvng25o7pxsg9otACsjp6T1aS19RekBwcf5JDUyTeTcWnj72qCxe",
  "key40": "4YuomhevCkxceyuUJdjRcjCciHVfT8eTAJHSbBBDqyQA4MFNjzDR4bJ6NXwcdGNM7NLEkH7FTukqZeAG1HTspFfd",
  "key41": "2YoiC1WCYkSpJUm1oLdAYxeFWTRPz9pQaQbA5fWEmDjcERF3WRrxhjVRDePn8KTqoFjpKekrskSReTS5yjpw1rBQ",
  "key42": "2J8y3Sv4mv3qGqiS5UK2mu7sTmdhunbdVneWg5zGQYHMkSTUhcSt8jKE9ikA3e3HJGWUYErFUQo5VmRaEN3vuuTS",
  "key43": "3vj2fbT1dznHEXbg7xesMFL3jsVPhTYvo2A6RijDtHgDfWLPtNRkr7HNZSFaiLckEPT8LpoJKftW4WR61mFXNjBC",
  "key44": "5RPySQxX5K2dtXKU4NSWX4okPtADBxE73vgLqNDfZUhwjPWua8dTEs66oXRu4xrNMCF5hwojY1sAnS1ZunYuXhXi"
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
