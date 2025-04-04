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
    "5xFUn3fkRQfbmKbeNNNkpysnxN69DPTtCHGr4eDHoYtahoMcTimQuc3BYHS1N8SfJhRrgYSRQjbMVLa3zy8zoUZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvnbzSrUFRWcf4oL5tvqB71saonu5ezYqSdAktuhjkbkbKw5bW4bb9t36fsXs44857uJiuZsEFUvGJpvKago6bL",
  "key1": "3Ud19PdzMSEm1xQ8ytGfqyew6t1M2KFBcC3Zai1qqYxobYbqJt3FW9zcD3HoWopPzKpueVgk5xKStvoKywNmoKJL",
  "key2": "2BwWwhYEa3JuzCiRRDitTHMCHQq9yDvuvpVuhVbWhqVyhJb6HWhbN5sqkPbVcyQvxjGSZhtLGATzGksFyifQZ5ak",
  "key3": "4cSLVnZdDLDiEH1np1PN9c2Q9tpdicgiGZo9dVLtArEMmWAxPBoPAWVRqYaCDavyV9x4LJPL4Fbobs44oDFW6NmP",
  "key4": "2cystrxFqn2zhMm64LmRxa7jqRvYiu2RGeQuFoUUq72BpCo1FoVw3BoeA31JckQvTSUh3SiRkYnqpMqxV8Ayusu2",
  "key5": "zvyemHRumiD2Whqo8GL3iYd2Bg4dgswfHE2ajtnkGXYjD4nY1Mvx8JzAqmtfWcgtBwKWmE4M9uZsJ6ebFqH7SXv",
  "key6": "8cRLhHH8faScH2THvU7ApJKEEHRu6mwbEvL1A13Esxks8Y8mYpuqpmCQuGucf5u34pHefjsf1S6Rbv27CWsCUr4",
  "key7": "b4kqsjcAseAuJFZQyevNuabg714W9wosJZLPBeB6T4ta1KB6yuDm7vLi1FTCF17S3ei8tukfryBzHyHm1Rq5sR1",
  "key8": "4Keudg7kWLTQYhZ2RXfVwcSwmW1ZUHDM3zpir16ztwnTBJFJtew7o8oV2rLxiqQqjwfJ9jDTpF3Y2GxgvXJcbz4J",
  "key9": "4ikFSzBe8E1VAtEei8zTc9Yxa3mMEb5DgLtnzU1piSnSWuseoxiaeWKqGkj4GKmVETfJPKbMUCXWJBVk3FDFieMU",
  "key10": "2RXcG6BkD1Qg6yngcTndYnSZneXN5YFHqwPaMxFLkENxGCceNE8rc7cCUsLLKyuFEDMqsMwQ3arf6z1chimi8b9q",
  "key11": "3ZC3t4btuvdmAxwhrRJtefDQUvfgpVpBfCnZRX1wQWnCAXvBGf42UQsbptrhConKEQgqT9VwwojJngdkezErFQ86",
  "key12": "5Gnv7vq6vnbHCkrk4eMrwK3UWYngTguzyRHteCARXxmqHesJY945DLwLtNsuPKu4Je3g9RQKwkMESdxH92M5QJ1x",
  "key13": "4QeMtW9BAmvMMXeeeFAxRfAiMPkM14fNuk71UQsRs7qZ5HUEZcPmaZDdc9qKVoVVkibETFynSoKbavV6SbsLhZyU",
  "key14": "2jU7Fh4R8E2fPGQ7vQgEWy5mCVpZRWgiz4LTVGJZXkBsRRTT1RD21bBfLbFDozxrJTjqct4DeSXB6sVUvVV5vKXr",
  "key15": "JT32ozEX4pE1Vh9dm2Ee8oSNg9J8SsQ6Uca3H1RywZRasbx83CAsofhcXDttG2xHFvieYsKLzG1M1FYc6BPHCZf",
  "key16": "ZyyVHbao4Wbo2KdcVqcY19WZtMEnxPM4hbwnGTy3c2NmwzZXHXWyBUtafjpsZWfyorG3bSS2b3E3hiGmkmwW5kV",
  "key17": "4BuLkbQBuusnrtg7Vt8iRWHPKgvb3MeGpquv8gRp74TSgN4eHJQCafwehoKp7DPDnPN3WyoDtw94BvzDmAPyGJWG",
  "key18": "5Gony1EixHmSahXA3YEK7Z1pZNbo94YU7Ugv3Py5ugPCky6XEApXKpaibugrFA6ghWnB99xqYsqKdVDYxkuY7FNg",
  "key19": "2sLRZFSbLkMxX7149ixWPEHNKr2CsXwXtdzMhMuhtAjJ1pLSrUL533fihZ6XGxoGyLWk7PRGsRTZCQyErtnUYjWS",
  "key20": "3eCdTe47qvvZWucHU1ukVNbqn9cuYx7nsHnCMMLJ1qs18x68oVsSfKfsCmSUJaN7pnwQRy31jXUoow7u39snb82T",
  "key21": "235eubMeWSUsmd2zuZNLzDeQaL2Lfd6Aoy2cBygryGZ98N8HNi3aJWqvA2PBJXEtiAkc6HTgWKyV4jHyKDVjT41c",
  "key22": "qKhcRP15WDS4YeeD2h2wMo65RA6HvbrH47zk8nzU8JVZoWPqjcUVoM57DRRhViHYUPKGJyuiutjoCpGXkvgQgwL",
  "key23": "2AqUCckeBTbJopszoNFk7kobYxQsLCGGnBw6KWuxKve3yiWVBdqjMzcik5V6TGnzDQqAyuapYKEZoG1f9ziNVRnd",
  "key24": "5hpt7TP8ybmMxAPDhZEJ5s5iFC4J7JxyWbLbYxUR5Q1eRteq5LgjiLX8j3hcGmqb3AmoHMJrrBU81fkdB2GES9DG",
  "key25": "5JPRJyyVaF2VxHHupu5htUZMvPMaPVXWzx5JotNSSxFz1GxMgYMgdKPysxawZqvAcYtTrD1vbN2aVtBbzqyq1Vbx",
  "key26": "2oiygBAWMFEkaFjsY7U5M6oXG9WrwWPECBctqkUpLG9iEBV8DGNoDMpST5y4UPcex4WvgwZzm2NpbPMmisHGtzbn",
  "key27": "2jmWJeBPWAtkMhUBT5kr7RENdCxYcBYpt5xmheRCfAK7mSTNwNCR6z93fjxS1PkAKYWNps2tVK3F2hSt1aBhHf6V",
  "key28": "4q9qCh7NtX759KRWUZ112KPGtWtyuthSckcvqqdFQx2eipc47JaFSZKDzBwfst8ciMmPGcvMMQQwwViZ9cZDvRc1",
  "key29": "5SAw2Kyux2RaZuNrCW9QTR7C8GXvbBAowCxNxtLVz1NBSXATzGomaovK2cL39jAZn5EdS5QBjKpbS8BqpfaRRGVK",
  "key30": "v1UH2UkeSzUzhmM3Prw64gY3YECv5nwRFw3ye4GoDUojYKsydC6UkwcnRzMCnyJGTWv2BexGTt6itFNQhJPkEUS",
  "key31": "3TCPSm3Drcx4nXSNMGrdvumHopyNFB1zc4bFFK1TgXQfR1yB6sKzpLd23HS28bsRQwHr8kp91cLtFE975VopAKxz",
  "key32": "Tv42D8w2c1xGVjmLLuVyWqJc64FZCAdnAMcWPu9B1bThoBd85TERWWV2BdsaKMvRuPjfoajaZqACSNDfYi4otMK",
  "key33": "34Rt6PyeJLiAgs5LGZtwFBtCPbJZ7m2mYjHWAZEULes5UMF8tYbfz1o9hcSoSCg9Xji8GbAqkzijsqTyhfH4Qwbj",
  "key34": "3uVQSFYmFEFEXYqhBpiDcz281i4spvbsg6fZZzGFdLRuY5vxfUqtwR7z6KNu1hmsuHF8Y7ojrFJ4US7VJfd7gwvr",
  "key35": "413gFfpMLRhi2u1zRRkvcTw4q2xYtuQovoQwWPA8qLumZ9jUpM2UhAyA65rW4qmhaAAMuao6CmKRApTZohPZRFpw",
  "key36": "56L5dzdQevabc5eof3DwMTdEffLLACvwrfvxmmPZq29j2eup4jynruYggMdcnjkvZ1mWKak7WABNeQDrcMXrda1U",
  "key37": "5jrc7haaDM4HM2gRppSrzY5D9cqVF9BTZmk9can6hH6ynv2r8UubLhQCSg9e6hhNumS6KKQbmTdTkWRinbqSrqrF",
  "key38": "4X3bw9VYvLSDRCMbBigJcUbvH54RtzXsHo1FhRtKjm9xvSsGYiW9AG1g4Pfbno4kMcBag9S9z8CRbeTVSJmtAoD6",
  "key39": "2RZvCKM6P5kWvcP53j4gkafaDfKAPAHSHUjcrzf43U7L8iPr4rpTp7xW3iG7Gn1P95yzJd8JWhyQLUcpeU4SosLE",
  "key40": "5nCJviXuQ5LMy7hy2JyLr92i882opUrJRhfpg5go9JG7PMpHKhY86NGUbVJEe2pYnrptPbpTgxrxNGVz5uDWQRnQ",
  "key41": "3cKJVtecqTqgqFjz7XP8Sjc7z2KhapnUiS2oUjqX9EPamDsgrdedZyAKM6HEGB992XMjfPfKyWvqFW6r6kJfxQrd",
  "key42": "4c1ZdTvqQpzZk6yfmd6o6ZEC3R5m8B1PB2mLhuART1rDTdAgMBnGX8ttc6rD7zak6bQc6EMBYfPSX2R5tDhJDG67",
  "key43": "39MncpyfBABrDpQv9Vk2HSrbtkDHnLigy7tPfiuLxyTheda66kZr2My1ymt1a6pe7nyGCVw3ash3oEerm1ZbSURh",
  "key44": "5b7TFSED5Kt5MAkYBwi93Z35rYH2HJkeswMw6RFwgBFv3JdjmRb7zJAYVGh1LX2xwTv4bKLkQC6g77nNTJGxSvpP",
  "key45": "5HZ2vG1iWbUE3MYLAAZAXFqzneczBTuRsXCnfg9sZxRAnct7C5vcWqEqRMqgDVUBQWcaAfwGD9StDctJV4PNdPy5"
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
