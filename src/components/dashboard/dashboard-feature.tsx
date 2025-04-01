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
    "2wYJTGFWqoAFrXRzzqRN8Bqf5uNWE5eM3EtUdnW8N1qZq4t1NXpbkkoVsFQQWn47o7SR7kgwbPUTf4MLV3dJqMQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seSCLjQ4Z1qiS2tAdQRG3kjoa39th9QAvdWb9YHHKnJXV3dJDKdnGEvCpwZyxQpjpjS6YHuFdF1ncfJFXBvzbqP",
  "key1": "2CseY1izjcPLipQcYCfH3GdyWUvyceSdZyoKhFh8RMWYJZKxZzBja2ATmgzhZBYY4FDKNGJP3r498x4HHNNjavR7",
  "key2": "2XfBumdpQ65MkEMFwzbhNVCaTvMi9rKGRroNaSqGhzTPgdzqPgVc3zMCPSFuLjbHTq1ioJQtjkmekEsT5Y3FBmzR",
  "key3": "y8BRAnEHEkVbtuLSwythg9JS8vcMW95tHdimHr5W9B3heKQRHtuRxvLJTkR5LsizNrcVs3ECykw8ZRPXqZiSEHH",
  "key4": "26L4ssLoN4UjhdTV4tokYxsHeuV3rwiMrWTFk83UHA5Eph3gQ9BWsAsbpinxTDJpARyxE3evTwLCy5K9zx8jtVcA",
  "key5": "2TxqiYdA8E7Yh8KyvJ2HUyjRyJa45qxms3Pgkm5AWr2j2QWXpSZAB9Z2AGTX6JuvLeAEbGAaVRTcfhYsWc1TgEgQ",
  "key6": "64EN5bo2HFTo3TEUMNy3EycrKhe7erffNfZULq9Vp8bGQh2AUoDBavATvFmQFrZZwkW4MPq91aDKemJqxSqwgJGy",
  "key7": "5qjXp7u2DoQPHyXAU6HkKrFBsqxZJaEfAr7wZRLSqhuLZeEuLrmKwcpJdzWVCPb3vLSs7NC9K7RpojmYYLY9brc1",
  "key8": "dcwja3DheSbStwibHqeTqXXaqsUDwgyTEW4iqEGTxn1KGRoYVoT7EtXQCiMEsnGmhKfEC7anz7sMDzocQPY8hsF",
  "key9": "4ujzZJKRGBToxWBsJVv9uSbMT2boZmmJ2ve8MhteUQrfRDA5NVsC7QcBEtPfLPtN6yWoYYvymTwvhvui4Cc6MkoH",
  "key10": "3tuXPtxtUNADuWE72WE2LhFQQ3GY2i2aN9MKquKHyUAZk3y5HPCAmD7fRJRA6YLf6VTHxnD76Qn2vwshD4tZRZz9",
  "key11": "2UzdoURYe8qg2DhDXpodTYMLENgSgSxbNFQeRBUkTtg29B5aoeTvLbV38iERTeRcJqsBm141wLNa16AHdZoFZiHd",
  "key12": "DkMxcAaRBfXsDVwWhp7N6twNa1d4ULNQtCioDaZHP9UxptDK2p8vmDkD1oEgndAtPnEUhy4covGTWv4q5ZfbpMT",
  "key13": "4Kyy4foZ891iqNaBd3wXWwz1pRDrWv6VkxVYHPfTjVxrvNFNapLSmd39h8V5Z4GmjWKcHnoqGT4Q4H6z8NAa7ti9",
  "key14": "5D3ydXnuzLYdHbPjJLHzZobTF3xWZDYYjNCVfQoxE6SFY1KLcZHhs7dPYstqNaiB1MZ9FD4fTPAsvrZVgVExzMLh",
  "key15": "BToekPVQzV65HPgSLKqVfk2nib3ou6yqDxMYab3kTFaCBdygzy3jP7awTwUrxCPxQaJdTvv5oR9V9f5USpptgfo",
  "key16": "5k7Jhx5FPbW17AxUfiwdjE1jkFLTWnES8vuUoWVYQAgAUpCLFxJc4usvSaAybBcnEkeMf5AMVyqu31DjQzid6xJ3",
  "key17": "2kh8zkh1cYVbZ5ftjWbJB7KKzzYHcKeAyTyc4HcdyJS8WiXd833gZXzEhx8ZjRjYGvE2ug9fvxZa9hD6Yb5QiW9n",
  "key18": "GoNrUtgaj73wjdRd55vrmQePpJQuHasieNkVXroxXpUZfMyEm2r7ZbJR73DyAuETyHBn6JT6JAEymhkdb3n4caj",
  "key19": "5snkehMMQVkNah4TFnVnWS94ajRxHS2XuHJmTKLJfSqk54i8yyyFUSeBvvaqsyndLun9BJ4YYEJcLLNDft87nw26",
  "key20": "4dMoJcYCmjVh3vwvuXRmR4nokFus1Q16twWX5N3jdumutirvSmDuZZJbrvWoyWNqkbEDnkUgKjSmyJft7QoN6tf9",
  "key21": "2HAisU2Z7R4NwTGhX761g5gPRNq8vZuZ7CUkM5VjErvKVFY1XZKiz7VqpTdv3S8VVQ71gYeWBwh6sXJkFE6ToQir",
  "key22": "3DgXafMXGJ5uHMFk1TGA3Dxm8zZfipTBVd3WzAQTKV6dzmrDhvdTsnWb7KvDsszfdcoFMPDSrzyGKrn2SDAm3zSi",
  "key23": "3JyfdoYgTLxLv3cNp5CTbEs8rovD32eMQUgeeLHfF18HqeqJbCEMayBPe1aBpmFXvy8LLyTmbecCtt4AyAadMfZn",
  "key24": "5evXtCGLgoXy1B2KcxXAhWUV5qHd6XuFSHjGQky3ZTdr4oceZdbr6DngquY26DJ4975imRpG9LVZ5sjG38xxaZqq",
  "key25": "3kueCfmaBdxGsJBxm9pq8nKcUWJV1iBFPZB9y7Zk3RVrAu6e4mngqeaRK87FfiGUeZR4rvyWZAoCnwZa2CtUduZr",
  "key26": "5o7TGpZD2f9HVJ7XYgtPwNtQWjUc3x1NJwGJPA3Rh74BKPGNSzELx4PH2RSAXHZ53xHRmTkz9SDTsSutwqnEDWvg",
  "key27": "65USycz4agFv5BrnyopMRjdBZ2FWe7EWs5BqR5ukuRjBrDtYCo2VRvD4oFFKgjJM3XD9R5iXR4a1RZ9U7qCN3Foj",
  "key28": "3j8iJoSKUMZrLFTVYQdvfSHUW6h4TQQChcssBPkMMJTmae4ryd9J2ULLS6G4EwD6LjttxeiezTwMnvwhbrSo3pMG",
  "key29": "37fT46Qbsuv53Ngv3YCwtayoEtedsYAg2bTm22nvBkFpfcEdpLg2zND9DsxfHPieAsEZmZ5TrRjhZZbL5QdVT5iA",
  "key30": "57yPTg5DnUWL7LWPMtc9YMmhjSXzzUASrrBsgLDGYTNp5QCuDk64axwBpHqfGosVLcqrgFKWj7MnRGAtbBriFLwY",
  "key31": "2vZ1EuTw75dCof7FUiMzef14ksvwDko5iWcnnMsy7dwGAHH5VYTVG6eqTPdGC11eTvpAncZohgXbhiAV7GWHbRvu",
  "key32": "2h4CqgACr4iTNtrWUCmnn35WfeqZ1oD1Stz2yMBsewY7p5nx2QMSvEDufaFdK6H7E3QJkzGRtKJambisBr8UtdhD",
  "key33": "5PddKHu2ZsRMgynCZgbv67ubjVfVd8iJB19nR6rWz1XNxVU9WWJG9QBHC5Kne2MTLcVeT2Mb49wk3Lbng4aXnVXm",
  "key34": "3xyJwrLSRczykdFuZ8Mz6QBcHhFjB4WeE3MtKyp1t1wQA7jtM4j3fsdpRna8vXzer23WQfnJtQ1uBUQUAasmLhpR",
  "key35": "2FKaKLwvAsE6TCrDCWTkNowgZGkiEXk6vwbXEDqSxHN4MTdVtVSB3p5LnRy14frngaLfZBZPDhNciXXTYVoCzMva",
  "key36": "BzVTkPW48qgX3aBWyzziw4N7W2LzYebowWK2oruDVgweXKivdr3DFQ1tzfAMR2Qya5sCjocY4PrSiwEUoYUVkcL",
  "key37": "3yTuuZtR1YBUKe1h9dKD7tDQCgvkngpa2EezijCYfdoSLxCGkkFVWwCmPdmy8Yo3rPzeCaN69hooxCss35BKVc7s"
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
