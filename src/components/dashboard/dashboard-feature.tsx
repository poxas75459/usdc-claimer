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
    "9tZSzUiR2EHnKH8GSbCH4UTE4ia8LNekyA6j9CFS62hu1rD2nkwFDKTjUwhraw2vJbayF98MQhKvPnJbgX6MNyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNjeMrHoLAvJQyWGXYVGpNhp4sTJP4ooJTqavgqmEgTZaHuk1MfbqUyYByPAsHY1SuF1RSAobbCHnbGPbefMe4s",
  "key1": "2w3kaVTaJ4WGHmczWshQ6UXYurKPVQuYPa3ncc4BXWocwmgUauQXukModsbG4h3HWnFLaYecQLR9j7qWMaGPMo8D",
  "key2": "533ru53aEzCBV8S86qH1wRFtj2mxKtuTaFZHVgyBoF57MqqmuWphthPfTYgPZ3i24RG9a5jejsdFpYmsBKGMA5fF",
  "key3": "4X3e8ihpiMG3rprror72CZNfxz1C5Tvmxd3eeSNvfompZftsRQCKb32NwCf18ZCqmNewmhyiZuYCosVs2CMs9QZ",
  "key4": "25sG6BVDsabGMH1skmmyp81mUx3epMY9iTYBnYDkU9hSEW1UPXxnZqDrJPsXS8VXrCw6HgrBrFu8h7K1ZrHfaU4s",
  "key5": "3HMR6HHFZAw1MbuX3GubkzoasSw7MPFzZgJCZwgcWgA2yVYHqyaXhHjZoXuguZJefXNpjXxBQc2RCCG6j5EXa9U9",
  "key6": "3FYcDcA8PxUQ1CXB5JwuRtUkMWF3rGYoTN4mfL9ycT1njXdKLzGqTHfGvSdCsN2fYo45gHF4rJiMZB1NAvD2W87H",
  "key7": "3YdCP1CQcAkXKx8Bg1N46SfRpZQfHSh9EzZhHV2MrwuGMzvBaCdaXougXz9Gpn3xoCX8ePLsxU6rsdky4GTsr8UP",
  "key8": "5HHAP8WGh9dgdem5PMnuo6f23fw3aj8wY53VA9szJtSK9TUC4GhFuR6LsGURaNt6a3mYgQj2xckgvDHHYiV7tVrS",
  "key9": "2pEosvJS67v3gVGq7hS8jwf9LNL6qH2DNK4xmGRebXswopzxbxmS2yubdKmA9DAUoEQABnkgMpa931S6cSbcBPAP",
  "key10": "2345VqLfAqPFTWC5DydHnaxziEPJAkBaPmdWTV9HSARFQbuLq6p6qg4BtZjVmY4cSBNacozV88MXGSwu6gd98eS5",
  "key11": "5NZR7DeUCCW8VGTWffuJvTmVCfNq2LgULDaZVegzmR9tV2PEyjhDEKyhEp9dm4VshX2hPvqZj7KzUaVinoxvEodY",
  "key12": "jAi6gQtWzWP2mUFUizRhJeTyDimifWB9cX7eUoDwveHhxaoMDAwjr5oWoPGbwW2oGzCfs67fh5CqHYn1WPTHaaH",
  "key13": "ba9wzY1n8QfBCSt8gTgWV2jgn5ewzAuP9iuPrH8eGs4SRKcL5GepEwmS4sr59HFgi4AdkMaRoVN5kLxxJHmbWMW",
  "key14": "Titd25AgHrAdns8J8C3WyURqATTceKd4NuNRe2gaNgfRm47dT4g22G7nAq7AqwLNLHtnqfJDd9tgTiNoPzmCLhW",
  "key15": "KWhT2DxwDVtxXfZKvjk1pugnvWD3i1z6HqRQpE792JjRrwg7w2oeY1dPbbKWANmw5AQLPQTjAQW8voZqPpaFATi",
  "key16": "FgHM3q7qa4vj8FcpXcwxjnjmiDkdEMvwdsAEXEaGsFSvaTot1z4nrxjnyNybPkse8u6aPrzfRjQS3VoEVf8rcd8",
  "key17": "5TBX2FeiZhWAPRwqUcWWfacDd5AA5qsh6k7s8HvEF3LwQVDLwYZdTAEHXBjb6Lo2tpaTomeyuPrT7p8BLWo1YJcS",
  "key18": "4q6AxsjL95apu9p8W2o4JtCVHj5hDZD7KPEoXc2gSEjmQxpgTGE7i96U5gNPQY5bkvrHVdaQNEaoo1bmYCYCxTjY",
  "key19": "26mAgcmnjjaNX9T7SGZ4hXaee89VrJFdBnYg5Z5sGoqs53mFpV3ZeS7ASyNUbyez6DfpseZCDNdFVqW6rYzXprQZ",
  "key20": "57JQwckvfqHjRcavnE8GaEAJ9t238vLNUoMcj1ms9Ra9g8KMjUpFJxh5mxD8iV1pNEYLy9C5RX9FzwNJypdvcfuL",
  "key21": "5Rw58jovDoM8DJ7t1bQPz7UsqgvxQFwshqSqRjFWcXagVsqtsezyLGGyr7diUSHaJsKvAtBAuHystVCADmNNJsWa",
  "key22": "5othS2ZfFSf9PPJrMrWw1w5cAeWv4vCPeE8HVEemK2VfeHHNuhaVFza47RbgzUFWHFk416PXG6ggmw8oqAXGHtFe",
  "key23": "5MXSWUQy5GjASrz1g3QeTWPgYt8VmqbwXggNKMBKE1mrBQRj5G9XgHKGbsL3C7Lo7u5Rqg23trKMhwPueRJDZobX",
  "key24": "3rVp34Df2i2LuS6HjbZRA9pSqvoGpnYCrfCKdvruNPwDtXun4SYqkLX5pBY9AiCCBVshehKGJAyFjj694MFZxw9M",
  "key25": "2kff2M3jCFmJEcZmiJTpwycYzHCVhwdyK6RCphTsgu6sej679WkLsipY9qf5wvF8UB8nM1TwU2E9P8xjuUuQciP7",
  "key26": "5BEpekSoRa6b3fGXaREG8nV1qgaH58SRbfuaeBHVgheFcRvNGUZEXC4ECtPicW8YgDtHPUCLtM3bATS8uKNMQUaR",
  "key27": "2ra7hxndCvcxCUjzttnczED7rwQDmr5jamDyM1D64oMoLU28oW3vK7SzNd7ysYUVe48f9N2kCQjtHw7GJakK8pT3",
  "key28": "3RKDp2vLXyqimCirEe9MmrEarFvsHutJU8JUS6HoSazCyVnBggi5tADZVVhasXdfjWUf5wYU5GZ9HKsHEy8Cuvf4",
  "key29": "2ozTnFih3tm32STGb3dLEPsF9p9Xgkj5enQLogGUiWXMS7UY1eK1ixqvNiifLa9pfrUNwpMxL8tuNN5M3gGpdYog",
  "key30": "4YLpDZXqhv9NmV8evH9HrMZK5TESqhxMR6Gp3TRpu7bugaRfjNjD2gWmouYhmUBiGk97SYYv7brKvgG7H29Mo7tC",
  "key31": "4Hfuz9anTR8rSSc6ZCCXsJ5U4L3WsecwDYzmTs8M3a8LuyATYUnKEpdNRSdn2hgzcVzmLtyat7hJhRG1EoSvnDcS",
  "key32": "5thpk9N2RyG6Rw5HgH54V4SYbrC4k4sDgJaSeF4hu3RqhK4aYsha7w1Uqm9aQiGLjToTAagZLTCodCz8UtUiwNxu",
  "key33": "21xRFLvFD8fj8xyy12aZ4FD1KkC4rkNFUSuPEKvTVvaKS1639KHiG1fiSHkvEfk5kxBMSgenGLNs6spzHDptEpuc",
  "key34": "2Tmszmb95bWXQMXD13DGZKjzNNXSyxphXPUmb1RxCccfMTxsuKtgSaAV2i8RUo4WhvcF77brb1BhvXeRpZN1q22Z",
  "key35": "5iKSo7nb7iFgxEwRefqNeu1gJ7wsQ5DK7scbuRwYH7tof3MxEVBjsRs1xtHrnC23Ba61KEUC8Tp8BbkmVMgXH3aK",
  "key36": "3oFqTmNHgEoPfL9CxYDEHMyQWzohCBjv2AnL5ZjxB7HRjnRHT5gA5BytEPjw8YxMd7gkWR83c8C1qrcyKgC48dr4",
  "key37": "5WFvHRc5a9Szu3bNBiML1AvhURE71pURUR52okWi8HyxMXBLtgwqgeaa4qNRDqUimSYBBmiL6jDjg2U6rGpFzojj",
  "key38": "3QiR16Fgdc628besNmFWu89Lw1424GYz2RHKo7bs3jRSD56BFs5cAGtHVS5SDaHD5Griua3j9u7jx3egTukrSTDc",
  "key39": "2SCG9nXaSWJwnERnhFvfdZoWAJxprf82pBqLAssr5eEBAEjVS26WkyfLzscVT3UoVjTy7kTv185WeHhsXM5Sr7id",
  "key40": "4efnd8MgWD1jzsy1w3rCyfSbFhxmj338EuG4R6HybXKxdyMVx3zgYumz8bZwuyaefsSD5yhjgf6iGycsDUrcv4tw"
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
