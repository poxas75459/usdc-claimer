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
    "xu1s3qUnAMTs57EU1uNG9PzAR3ahkSL2WGttRfGCE6v6g9qGd4ffHTc8M7bvvQ92MK7hkggpvQbHvVyB3ohYTRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZGyHB6Lnbfh18aFzvNhH5dyKGGSZjzBHxWxoWZNadTNUufoX8YsA2b6KRbUtUQ3czhfVqLkhgqqWgeFmXmir36",
  "key1": "2yVTDZ6kAyvwSJrNpAXp95449gqGFyF4vcSmeQoQe5xw7aMn3xi66ScDG2DywHLQpcXfWFU8R16KW324ffKVzCpB",
  "key2": "3rtib2Epe65QFrSEgxpdeGYqPGa4MFk2ArtkTbUHMv4nAV2Jtvq5T8ceZe6Fa4MxfqCGwmS2bjfotH3v89ggFfEd",
  "key3": "4pMRiGxVNsWXfB66nDhWJyA8DD7X4FocrZKrMMVaBfgoxKTjRW6e1Mp2YmcBJnS9MWTTpgXQ2GKts6i4YQa2ukSo",
  "key4": "2MrsXRYzPUu8V4FHs8RJ7PtMeHBT1GWLotBgR8k7qPerGX9pnYBfP9HDtwVotrUWudrrNjAYgV5hHFiCdKQNkphL",
  "key5": "2wcxSgaqY9KxdGw9ySpev5waD87gb1dej5F5Cj56CGEmdJgPetLPVJq31XxmydyksAt6Jxq6Wuks1Cie1pjxGZ21",
  "key6": "2PtAbf55bYCpc5jo7b8EBWsZxgXhYP8K6Xzz2FBok8CU57PjYx4TbfTgoX8NnqRM8d1uHrvGsxbkaiDmTUbF112J",
  "key7": "2is5RqUJQnN5qqCJWSVq3bkqaNXPUkFMf9KHmy6yDa5as1YNp5Df6EAzARW2ZEM1qRk1cmRoxwpX6u3K6skBG6Fb",
  "key8": "4niUJ8Kc6DbmSmW6ntTpR7ca6DvrckbnKYbdaVFPrG8nKqM1mrjb4zgfNU38CueKBf8upjy4qP47M2q3SPz3Fpv9",
  "key9": "5Fn5WeyQd5Byb4RNwvQ2JXzwD6CUp6SdsRPZqSeeBaup6ifdE6EXfMfsr9ittf3qWwN75VxHrFu3wMMggrW4NhRC",
  "key10": "2PzJnwCybfemn9T8Qn3or1R7d3jCaWHy6w9cXcoDACFanauZmTJDUXiVPVyQPabhT4QnmTk1eXfxWHMzcWES8Sch",
  "key11": "4xCCL28ni98KMrku6RxkoHdwSuJRWLsAVq5BNK7RPdX1AfN9TzZd8zSijrdLGJAzFWfhsBkjihbhQ8chgWWt1QcV",
  "key12": "jZJhJLEzESeAzDL3ThNLTgAbc8KxrhafiM9Ls58btq8nofn644DBkzAVX4avshUAhhjPj6WF7j33eVfGWzmzrTu",
  "key13": "56J7sZnEEq4kiSskxBvYPUNorzeFopsDq8vf1QsdZXdhbTmiUy6eowGHcybwY77hBbD7aScU9VRmXPNDdnG7eKCV",
  "key14": "4eYWs7kXpEDuTemDzLW71taNB3M745KkgsrjUWjPs7x3ejcBjA4p33oQ2m6WPbNtopYQB9NmuTqRawWpj7Hb4WsP",
  "key15": "qtt7kbWe8qqXGFJCsiVnRKM96Cx4z6GLXtUbcSRiJ3DJmdmkwSH2K1bCUYX2mun33gCuoXKzDavFfJEXSa9EtbL",
  "key16": "GbRRTEEm5dhumH8dzFQyCKMwzbYaLAUDu6TzXmgkkFTjdTF9bnA2LCb93jszqwj2DnU4UGzvL3pe1R5tTxZ3U7y",
  "key17": "4Ngfk5kikooLHki3zo3PWjLcoAdPgXsGfJq8voHc9ZWMNrG9Ym5AUj3PHT1G9RquZHAWw2UgmVLyTGR5LFmoTeLw",
  "key18": "MaYjztnqviAWos1eu3oxoBKG6eeByLo6557YiCtkEV8v4nYS9EjSdAgpU7Eu83QM2aNWkAXCkKfngJPaCbbf6T6",
  "key19": "5pRv3NKxkKkvsf6fGv8eAPTJmJJNPZC2NWUSQV4dx6KGfdJjaq4qqsguP2Qjz819dkSf9MxFkLTcxCdy1qg9s3CU",
  "key20": "4FgSezjtQ51gKidyHXM8G5EedjBmAEcbf9X3pt7zHMzzTHDanU52fbiAA9RW9v2BdvrnLcXLnnGkt4og9jH6R9Cj",
  "key21": "2mf3Uxesw9PkpGygV6RsQbVPgz9CmHrReDQQhXgyRVUdhjLDiReeRy2UtawkD3MsTBeZwuWytkSG459M81Wemi6b",
  "key22": "29P275bcu8i45pdepmcwowNPAkDmgJqPocYLSoQGjvYwB2QBxV5nGdRVEyoVyhFMsqa921jNASxrA3Cjb9Yyp2FZ",
  "key23": "ned1yhm5w79FFxT5HL853pQRR19NMDhCvJ9YdmYtJtDoYQX21WTjd6osQuPani71wzDUdD1nJCwjcjo96Ctzrbr",
  "key24": "4QTXGUQg99YdeN4Espf5H6EZp3MG1B4yNKXw7pbcyWH3pGmwqii3ZxMiQEPFy64nq7qSASfqrhRhLD9PdDZQgYKf",
  "key25": "4dfVZA746fBoDqdqC47LycYqZf52SgVKSdCFmQe8Q2B9Xx9j3kcTYT3DP3yr91roPopviZsL2fhX1fqusd9v55Gk",
  "key26": "2Zmbg58jEnPVysq1oUw8pokHoYdBBKV8RczaPECepCvaiJCrWWeqZdEhPDVbs3xoAv6GkwL3L66FkyPjpoRuWTkg",
  "key27": "TdnH269eP3VaNpLt3Lo1c7411hg9tmURKm7eSgjccBbVjUSLobktEBcXePcLRgmvtnFGXvxV8mAvn88zcQjbRYd",
  "key28": "2wo84z56YyjfxnVfPHPMmV97oWczXc9E4TuodwSgwmBw3nEi6gK7Gc4B85PYqR8B8yyDHiFVLxwNn8QbaCqj9rWe",
  "key29": "3ZVXomjfn4VMMVvCKYSfWkT469tq8naV6jLUojRZJL2yp39zdeDjirBW3MBY2bJT3eYktUeepuRrUNL7kg7Rk1sZ",
  "key30": "CCa1D9oCxWYLotZFjpKU7kM9ZnxiqrrkPEB5PizF4ngpXZRQNiDFQAeZ3vxEKypcRmFsnnx5ukJ455HyrRSPUQM",
  "key31": "3D3huBeMKGKZQna8v7Squbgg2i965YDZatLLhBvDBAFRzHidcm4P3HjMSqVRBiENbtfuACberdtCGk9YjeUfnQby",
  "key32": "4sSjsmJSxh2wHoiXbEWbpm5xj7qtrreMdQjKAkawTnwvuKfbmZaMS4UdNLZCCp5BHB9bi4BiZnZiJ4tercepyHhn",
  "key33": "5qh1gML7TtpcoR5rv3fVL7KjqwDZXKXJAJykp8VghDcycBpxzwDviC9G2j395wje6bCPPG2tW1UiLpJkuFrk6Vao",
  "key34": "5yzFUkULD8Ainh5yst9fpk6iz1Hzd1ceYqDUJhhsQHKPuixrk6JwBzxzDfzuYW3R8mKGZGrfLnZvkhUapmQjJNRs",
  "key35": "2nNHnuL9QLsK5YVyeb83iDvyru2N8kvCRtM7hHaXj4n1PMavmguD3jMjYeGQksFp4FHYSrUMqhmv7iPR53xeNEFz",
  "key36": "49bX3bqJjQe3nG8p3s7NBP4C3t7kr7wAAskxh5oXWKUZHMRidcEzyT7NDYANxH4rPXastRmfirtpAUiN24hUYRPK",
  "key37": "2r2bEjA697zd6JRtKKYdWaZC7BhJskWfexjnL2PzazmverjqcsotjVmWhtn3iFbRwMwT7QrLX7puaf1rnmr3V8G",
  "key38": "3K4j2JAUsW9MqTWDrr5MiKRMcJyZiupXpScfJ9k7dRDoUZuqmkJmQ119ApWqomrjfB1ACfaMKNt6SKU6dLxuvDXj",
  "key39": "4XVT6nbuwQbgcXWTXbo2styCz6PHdfe6PKy1pezzaY4a59UuekWcdF5pzPQQJmi8WYZ5Hpo82u6WVckNkFdiHWPb"
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
