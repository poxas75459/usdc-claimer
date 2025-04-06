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
    "gNNeV7TVFVCmqPjJZBC7PCLRHQDpaYM4sCdV8w3eA8iRmdXSpk2faqxmHQjYykcYTm6H51HkA6P3khdoHfgvkNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6PajHRZQgP3TjABJVrjKKqVvFWCEiu8dHk7fv4CcLgXCgbQojo8yJDhDuPpXnZ2Rh7khzgfwZYZzk8oS6JK8d",
  "key1": "2eZvvD9KV2R1g2F2Jkiyz1dSWKwMmTuTpxC9a8DtEwVQjNACs92FYQZUiiatizK254jaCUcU3F8WUM4XuqsQSzR6",
  "key2": "fmka7FWR1aNiFhX9aDjE9sV9mGDuivwWEL75KSGNN5JtvURVv1kkJApUxjo863uZKUZDw1FBvkKdktxAjxst9yb",
  "key3": "2GPrrkJR6XjFeWyPxz11BipsC8zmKJUDiuRRUZXXmzztSLM4DChkHGn1tfTaUvTKpjxwZDc9SgGAD8hbrUzHrBQD",
  "key4": "2YuQEhjBJRpZ5ruFN5C7cMnhC75ithxFMLNp4o9abReRb364s5iJrBiTSbaCDC8FN3JDQea8GusZhR4ZDQeiyRoZ",
  "key5": "38MzkPkEfrK8gkLQVE282SXdKo71cCe7e6Dt2tG9PGwqyVfFVhGWgPv5zbpTrVbkasfoayTe5i5CS59ve3Nay6L2",
  "key6": "V7c7AqaoihHVjuqAxBLdqRE5wjxFDH16PX2Zggi85nvatzuf2VQcLSbdzjfa7VpMGN3inJzpV7BETWSX6BSSfnn",
  "key7": "w18kzx1Hf8ErRfpdSNLDhiJ5aQ19KwGD1bZUYqqT1iFNoKkPi557WHVKJq76NNexRdoovcmKKF2nJuENq83GThe",
  "key8": "5c6Nasxcu3TSGdb6EFnB59jPQrwUaNf88AGuaY29zMNAJzjAGcqJBFBti5xzKTkFhCzKnuwHupD6SMpTKXWQioZh",
  "key9": "2ny2DoEtifzNj2WEB2aSCsiviXTxW65H1vdq21CVTvVsjy2X98hHKobrYd9sYU97eHxxS7dWzheSoe5WdBgmtM6B",
  "key10": "4KDwRc5WG2KXDRBdneM4usiLYQHWgauLcQ3TwThZ2sRKrhTbKpunU7Qj3ZyF6rw2Yk1E3akDRQ6UAzK4Wb7PSPma",
  "key11": "2ZVU7Ge7zgU2ngQSBBuup6QYWj1gV3hif7aniaRaA4TijVivdGJhLE8bZmTXMqy3XVzdxcDHZNWrXCeQ6mLaTTBo",
  "key12": "3jguHFkRZfx2TQm51d61pMoMCxoMzG7bESfLqfXRLsbdDLct1We8bthuurrsU2GguquHcPUiJAR7GX1Knpx2Tukq",
  "key13": "3psm6HQBJS3T2jR2PSF1JL4gy9sEfLJ81YDCKgboqfyjtjb1ZzhVCX5pfVg42XQYM534AeMDLAeP5zNovKigVQX1",
  "key14": "59ji1YZgCfep3mdBsqmsJvSVS5RhQjei6T8zDUGD5RFh2oXBkrmRRhsZhknmuE7Lna1UM2kTTMDE7KDXV9aq5C5w",
  "key15": "669vH5ZiUntQ1BY4Vnfys7pLfRQGU4Y7jf6ykh3Lf4w41FF4B5Cvj1Ta9UFs2M1CURKeE94cw2LbfjAQz51eYw8K",
  "key16": "4KwUDdcsrmaGkeq5azBHdzvBok1aFHWb7sECfFiE459tPASAY4XpEDyZqA55pqwUYF9U4EVeEdZtUiqybp5hAxGr",
  "key17": "5izhzbB6F2s4g2NcqWRTQzNX383qhpiUPKqTuy46AGwdqC5smxQqfmojh7B2ckBmXezCPikvFVruCfRzTphqsztf",
  "key18": "7bLvZhyqUUN81zQLspoFRo9gALZTDkJZYxYHJyNqEZ96gkm2bfRJPuYVH87kkD7nwkwGqWsWM7qFrxJEnofBQtk",
  "key19": "2oGVC9eBjjteJPTHnpVGMfmx6LBSPNNwtA6462qpCQQgZVeKaUFmgriW9PXTprxwMeJhQaZLDiGmiKbVqVLRKpUe",
  "key20": "3piuTf51kV8LP26XfnSSATJzGEswuZcaF8Hfq2KSoo7Sx33RLtjxKHhcv92hCdnsxaD5qvej937aA8kuFAFwJALn",
  "key21": "3yy39mM272kvYrChcpvGt16arLuVeWfZYSfsP1pHz6BxEpAMKULxekNNawx46spNV11tHVmASxUVDUaod6GTrQNG",
  "key22": "4KWgZFGLDJnuUBjk1cngTCdvcyeHEpaTdvpG9FLDGhb97Pwd7qzJ8ze5zeJ1Bh7JEdyTHiGQ4mVLhoYoLNSh5LMe",
  "key23": "4zcZdfvDsrgFyskFSzAtMM3qPX1HFibgdaMcuAZMtts7qGLgoZyRVw5XzcHJJAjtxUVEQg6hqmzeTabLytG8i4aN",
  "key24": "4JNAyYYnSyAvCMaUs18CmCkKXQyw1e9FLK1SKgT8khoC5NuUN6dKyC9QHnVPAruuPMJs4DMd5RWS1KvVTC2jMnsb",
  "key25": "3FCdGeXNbmgBdX6gub4wLknNpdxMLCypM4NiZ46Un7VASoDNB78pWLsQyZ4E9zFbq5Mc75CfzpoPcLQFZDickKBx",
  "key26": "2KB82ktFHQvhEMiPePMSvdHsaoWRiBJMR7uwdbmbopdJMGCd996ShXePYJzzgGh3pMJ4cNPVvbAHrVAbxVWsEcqF",
  "key27": "2hJKHuzJx7rWhjwSp8G8yU7U3uVgbX9eEYikBCeuPCYbVUiWSG3SDZzxDoJGLJr9qSv8V6h5uwwJSAmW2uyKpwoW",
  "key28": "3q5TcVhoJgjvDtjHPJtQGnvATSCRP1CktDLrDyzCS9ifLgpUWtEo29WYtGNXmvYLgXE87BGwM9VLVekaiqrgzgXg",
  "key29": "3kCwjAuhoS6wARsGBM9Kuv1UaY85pm9CFjBy4ksJb8DJQQqLwwy35ZqVT2D24QVZtW7XqvqF48q5GGVcKSWxvPR8",
  "key30": "48VLG9FnAxiDb6N9vK2uiJL9rD4eHWfq9vHTNkD2fRdMYdxz4fDwoVA5YJPy3J3hWvAYusNejZRZgu1JhLuLFWPP",
  "key31": "vomWmqHBVvcej1tgGt5bjCGGAVuQXx3e6BswKoBAggW4C2YxicQFGGALuypAWXv7945nwuUN7xKZLaZvTGZiMwm",
  "key32": "4TdRU5zCkapu2QqGVoVCvwEcPL8SeY8HzauqYrr6e959up2neBTWwuzsK1tcNaiwV4AyF1eJVbxvVzGo7G3YR2Pg",
  "key33": "ai8QTRbYUV2bG9624ept36ctxZrUo4LryWbQLfjynktoYfdFdL8EX6cvXzzADoKVntCRaKN4bk66T115kmRa3zm",
  "key34": "21BK7TdnPR4zQJZ6dxUcvkPocPWoFny2s8eqH47K65saKggAndMg4iU7LAa8nBFojB2T1DbT2YE7N96SavMPTf94",
  "key35": "2pTcBAy57JhtPGbBLMdxKUxwRcrSqiwqb5vsrf5bduba5TCrMQcKbMXy5wkEy5hxKfc39qDrAU77agRLdrvYTnDW",
  "key36": "3F4KKSBWvYg733tLzFosBMAP9yC9KEcuM12Qyj5qNUfME3wpvatvSC3yx6Gu35gsL7gZfE9y5wa1Ttx7Bwea8xvi",
  "key37": "3SZ6YYRfGyoUtZf6thS92AGgNPaQ6kT8jtZkYyGLFm2tkAmLB9qH5sq7PwuCkvwqBRz889G2u2oDfMYegQFTtxB8",
  "key38": "4vvtMHeTWju17WHchzGXneHdAoJhFUPKN1qVXwNPxtrDDqhq2UKadCHNvgTzx1jJsviEC4dwgsKdxExNvGnmFC6x",
  "key39": "4V9CzEXRPVRjjgGUNnd7bSzqjvmf635UawxHLveiQmsvY2Z5AFhc3YGKbLA5mP5Cn8YY1zUcoAgDa9eGBgP3eqyV",
  "key40": "4GHbykLRg9vZ4FQ1ePVNzbg3c58PyowEZf3dthGMvQrZpbC5xYZARQuCRPKANUbG7rviMGrRp1Ac1J69vB4KyvaD",
  "key41": "2bK8ip6hJ4WexZSDJzenzSphEdvT9hjf37tHc7eGAgzrRmtP3mpgWSusiVWFhbPkHcE6MA3xE76N7SuacufFkchU",
  "key42": "2b8HxjccQVdpSPScNLanJTg552t7tcc8FBUYP6chpqrzjKbeG5qjPCEUUe6auuxUBbM27BxDGqq3sNvaLCjYmQC8"
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
