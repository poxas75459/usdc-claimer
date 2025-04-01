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
    "4eptR6TiiewZEzmPRCL1XU9BMBPgjnrD2EiCbZ4fbRXUhspLsdaUN6VNtfpFcWJUfKef5JTwx8AX5G8zSCZ8wQyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rrX9yAHjaRbuSzxNvVPWsWAWWwMCdwU2H1RNDkUY9oQw5nmKr4TKWLcYTW7NSWkFk9QxHbMfNzfnunLhjBByMwN",
  "key1": "57WuQAkU7dNMp6fWzhSwtpVBoa7xxRYAmbSXV8hm7Efa9sGMXjhJanwTL7KE2dBbm5WhqD7rM1uQnBY8kaAzc95C",
  "key2": "4cHzz6J6yUQMYttYYEMBw92rbeTvA1LaBNNXe6ou1YLK2Q9jVjFELoUVtBaHMPF4t2eMP74dL8Vn1BJwRWmZv1e9",
  "key3": "2queCU6pbxEQkSafH21DT4GtVLtkT7JeNMvxvcW4D8v4uccESPHJgAMxBHKxCYyxpU2YypmH5D9Tc96BHkK7V1xE",
  "key4": "29G1vZTuGeWSHAWS7DGHLidoz6A2NdSgcLGz2WMjQ2k2Fgsafq1Mn2ZKz3o9buxV8vJFJsrPj7A6znezWkKyiAFS",
  "key5": "2yyRHRLtPABYZbAQ1FYGnjebaPqZjUETYscWR8FUrPw64xZk7KhosJ1RBWrnNfzUTyUmFPJmGt8suYDngpF98dyn",
  "key6": "5e8WMfBtDcer9uSquQ2HdnG2hz4LnKe7So57rH1hEY4NUDvaqb6zao2TnKn9XenucUfvd8AVcdGoTqKSkaximzwj",
  "key7": "3ioFNwpa9RqZi9WbnvMSQ6REgdW1vdvKhSA85jPT4ma4VHV3NPEAKva5q7hQMtYQz5R2SDXwXj2o1m2HscvH9x7W",
  "key8": "65zRQ6vsNo53Vd56KdW5aQ6FaVKa5n2Mvi8k1dHZT1qpcd9ZNJTy9Ws3SxQKAp7yeRVMnj7cwhRR84TwHUBEUYsT",
  "key9": "3F3uRxEhhmZ8UdsX2rZjTbzrqvdyENDrZCKqgwGTJN4dtnC4KKgZAe91gPK4U4HqFxwqQ28j7BPheA6aBbQCrK3n",
  "key10": "BT5T3DYjCLXudC8hzuSQCscuhoj9cppSvQrtdWrHSHBC1Cznb6cz4RrprazaUjd1PwGeQ1u76zWpfTysYaYN3cE",
  "key11": "2q2ghxofPeKFQsYRH1xA9VgUFKrWDR3oFvjXAe4kG5sQUfp1AX3B4XETV3AMjWx5Z8pLujhPc68b7zNNaUE89BiU",
  "key12": "339Xf1No5BZawgZpkEYq2n7x76NVRQrnhyAFjhVDkKtzAQK8Yun7ZC5ub9r637bJ9dxDQfc3n3yoh1ZGqSvidMs2",
  "key13": "25T2Y1qkrxxCtsWZpPeTN5y9e5azUZMrUxasFYqqCTQuYbBrwUdZEHEMgPyurTUbkpko4cRGL2g3NJLuCGADzNuX",
  "key14": "4qUEEgHmGvk1cEHjPg9znagQW9vTdtJM5y45U4pkbWdpzcUp2QMfLTvpQWkTYgZ9E49nmoeY4X13Wf8Ga29bZkL5",
  "key15": "PdGXFuhyLAUx1SyEDZgWcvUTM6VSFStFMdLZjT3EXtDqgnkfjhctFBHTGGH9Cy6C66bEPzqxa1Ff1Wfk58ZeAqT",
  "key16": "2FLiewomFentRnU52S4XvLAD9z5gsCjunR463GMYyUJea4wWNwRv2y97eoT5w4BKJGojw3Bm9m1AQ28VB3Fr2GvL",
  "key17": "3GvTwhYdwste5MAo6yWXDDsVM41e7MY1coaPmVrFW3YLyftgu9N21HXTdvWNqqnx7hVLxweF4NbUEBbhEsbCqFMN",
  "key18": "LfcNqBgBbJLs2nSCrRox7eb7zhP1EutxkhKRD1xXJCRfmtn5oyxW19EBL1k6yMz96bdqpeZJ8CkKPdGfaCuuJ9m",
  "key19": "Zk4webMyXu7q5uMPgbAVTBWvsbpFp5jida7EbypNwpBp1GnAgcZq9fNydgRniEWieZsxtoVvCJQzkQPxRnE452V",
  "key20": "58UMhM9mV6N4Dz4R5h24ANYRpVg2S6nEYHR1pmamXoNiCnDDbjUEidFnc6UZC3KNaVUHspp4AqtEJPE3dhgzbz96",
  "key21": "2PhijxhWhSwyYAUeZVh7e63kfoTXWJqq8jCHYkPMJ5p6YrX4DKs6e5F6wEkHjcEpoqfNpfRwuvKV5saWtphiwe6q",
  "key22": "5jLEF2dwwvdg8juUM62fZsojSiWTtsrYvHLZmjMrZKu9E4tHXF7F4HqTpimktwiW3KCUZyWcXTLrx4K1Yua2EsFx",
  "key23": "3Fxr7GFCsqbdhN1m211UGi1Vrg79Fz91DW2gF7WutxSTHHBE4F9ad5wtqfH4TEpbgrnuN5NNrFkDhF5uausLmJux",
  "key24": "C9mmCKWRmquJhTnjh768THMTXtDUPqLiyybjCErGEmueuMuLRto5UfAmbppM12jVoAE3Dgk46KD8nyC4AxnHBvz",
  "key25": "2crYbz6hM9qigjq9aFb1LoDBKL6Vjknb8Rq1iZcykcXCxuFUndt6AVvsk5Sb8cmXovCdZdErnoMkaFY3N35YVGk3",
  "key26": "3HTdx9mFDadFXfi993yoDc53UA4oJCFoTh2w34eBVryoy2F5G9zVAfJYmtixg8H9sWWHfQgYqybZB4EReD5rhe18",
  "key27": "4cvvVQ1T8UDssxkNKpLBgm2SrQqknVs9LbBsLYDp8KTru2KeaVnL2mzKtYHXMUXoLVzYvqG1e55wF7H3wbuH2N9a",
  "key28": "29JYmsvsaNLPRnAak8kMxrW398igGEGHfnqRgNMM3hbM5HnFiKuqBSAmcQCj9G8PwxBLhVCE1XdXeFy2i4pBDFuM",
  "key29": "3CYeiHXGh6r5B2vsptfNeWewSNXHyWqxByoS7p62MxDrF5x8wxgwPTJFfhBRe2KzYmjj8mjqkiQNhRCUays6Jm3c",
  "key30": "3DXZRfNFu2zMBcyBVMi4UeECa5G9zyWDpiJMe3tmvXADNBmzDaZ17YwYJqzDVZSPYuG4zUTCQZyUUGmy31iquqbW",
  "key31": "4rSrFAcE1PHQJfo69nFe5qPgKQFjoC62mhJNNa8M4GqG2fGmV1soEpqeS2qkxo5Hd8imwiggq11bjbHjNFgDfDdb"
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
