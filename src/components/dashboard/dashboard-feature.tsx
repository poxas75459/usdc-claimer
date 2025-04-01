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
    "5hNSKRZXm9fHzMdJhgSjy5e5eqgs5zy2xtmiztkUUryYggzsfHqsMMoxtwjzwu5WdTV9EYWqXQttKKVKXCKknMKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DthWTyRBj1RojZC3iXv2CWCSEARsRtrRFg5irj1xhmtdkr5qsR1asvHpnQUV1mDtFrquK3SDU9baCng7F4KkbiD",
  "key1": "2Ds8UpQxRXsEThGJ9jyf5JMc3zmA7NvjQiH25gPkeinedG7JLfiG727RSFWiU3z4KJnVU8RQ5umamTvRLXotXpfx",
  "key2": "3Bor4R8R5mU4EPVbihKT927eS1wzS1pvi12QrwRG1AFZfpgBRokWaZqW3dVz5GbBjbcAhFsGQubQmFLuqaGL5LY9",
  "key3": "2PDK87cVFYCuzm5uPBXcNjsdvHsHt8fMkhvFkkSpYkDuJzWxYhCZv3nTZeUbN4cg9DSG7iimgA1p62FMHn3J7y5F",
  "key4": "5NyCKGoXnwzrTQqkXTj3DPcer5v3PGHVsP1iQyDLSyKRZXpd6FvsnDAzQx4c5Dp5ETYDNZ2C6Jfcj7oTe21JV3NM",
  "key5": "52LniSiEvTvEcbQi9TRNBp587Eg8FF5DftFoDkPd4zjkHcRyrXJf7m8A1V9Yr8xRqcw6z7o8vri9grEL2pvguR9s",
  "key6": "2KNbKgKFrKwFaQiU19sA3vSgxz5QTd2S6wdyui6neLd94omrfj2zWy6Sph5z3cipwmHDirwjfCqf5yc6kS8Fjaf8",
  "key7": "2sdxVxRmfnpdnynf7gnPY3Ku6MCEsgu9zpC984sAukurMfYVuWiD7mc6gV2wMn93WNKcnx55d1Z4vECUvKbFsvCq",
  "key8": "xyCyKdKJYn9KcXdkcqa9TXyig84wMLxgMazrdVyN9LQo49iAmoT4cEXCL9hr1uBHdgeH7eMugY8SR8tGy9WsrbG",
  "key9": "3vaFaykKpaTEndLnXFob24XYny9UkW5qpUc9AYYQ2TkmyjqvLzjvqxMy1wamjrnxY1pXPWbxLKhik3X3FayLavQ1",
  "key10": "67b7F6x5NnNQmii7vpAWrQRp4YsiNgSzScadmzTStQdq2nPPSCb3wfK2fu5qdcDHiF2ihMySxKiQPLsb26rxrZS2",
  "key11": "3RQCAEGZs3LoNUtsLGfCLuz3Uun1ZcSALCxVvXspt3dJskNtNyR9yZAfPkkBi4qoe2BVe7HjYoZiQiq16ztDHdf",
  "key12": "4FWEhdMPJducS2E76TsTkoJnXy3dwSEPbmRBNt3ahqV8xLYiYSkmZGWv7Hr5Mvgjr59qGVFTAQN7BMbgMCbdXvnq",
  "key13": "qs4Wvtr5Z9vJeePVwuXGiwhghSd2c6GSYxisn1icSVeHz91u4NTr5MTYfzfneERrXrjKz3PdvJHPSem6k15orMB",
  "key14": "sWjhytdsYoBUV63gkYKjegZasi8SJZXCnoREj55hb9V8yXf5rigMavsGKVymZsNxR15YAqQRN6uZSEmhtqhA1v3",
  "key15": "YjqYaMcoVuFbHg3QB1wj6cBtV2B2Rwconz3PWPHDFHzmu2REw2P9wLPf951Aj9e5cDfzQ62z1NmCk9mZwroJ8Qe",
  "key16": "4Vz4mFf7rCurUMXDEC5aFQ1wSDLW3DMVq9KJUHr5U9FwEynMkVS3tstXaKPczukm3ciJd3UwiNDZdXTzh8WyB1Bj",
  "key17": "4qex5PFhD5NtgDqLuUfa5rTQcADsF5r8N2ftPQGBKP4Z5AMWfBLXn6npvPiCZkJ3vWu4niKcwrkhWPooENPKoWRG",
  "key18": "4pQcD3WuHcwsnBZqYhGbdGpEXp6hHCrCPp4gYeMbaasK6ECSjJz78cuov99xFGktAQje46p4YL9W9zfAe9NdqmP6",
  "key19": "2HGNZJbcZQqc1gUEjvnj3fZh1VeCVVY58oDHRHXkQzQ7dxcHaNjgM924EYe78Ecv4K3qG9PSedCP7ZaitUVVMWuv",
  "key20": "3fcD7ohcNxnMa6ry2wLWHF7yXdHbUiDXP3mms5Y576r6MBH7obALgsoy1hPMW1Gwy3LK3AKZwoyqW8fhvGu4QRVQ",
  "key21": "4SR5tDzEeX9btTEQGu4xqW7TakiDvFbGhAwYnJo6jUD2qEAaip6Gptacceyb3FuxJ9CLrgUgHfgCWW634C9wr23w",
  "key22": "4w2Sn5gES8Uih8LyacDNm36ux1CTgiNA9boTrKPmSVMifsQEmK8r9MtjtTkHQeqqudCc46VRB6vXMaEVb6e58c4M",
  "key23": "3oWPNvXyRPRbnX29Uh51UEKL5HxprJdA94NnxQmegpooQzxiWfDPzpKMwmKWSJBQKHwVx8k9SuUbChVQKGrhVMa9",
  "key24": "4FUUZyms2TQBxoNjYu4yvva5GfXBh6o6CshgC5T2C3yZn3kXXHSnoJfoDWKjkcVMMvDGGio5YfSamHwJFd4boEtV",
  "key25": "d457MXk5F3yhvdpkqyrdArXdZNoGPaFoh13RyV2funpj6DJ6WfKHVmLV5dZEw7ZnNZSjnvLAnoK2Egz5qiHEATL",
  "key26": "5k6UcDy7UdQyEcbdngkoWq8upTkMoUyEpn2C6f7SUpvQarmb79r8eaQ1x6gSP2cg1Y6j1shGHJvoNLY22bzEjN2b",
  "key27": "ZPGDjWifHN5Vu5jXac6v9V5RFQ8gx4jmSfF4WSTat1wEWT1fLvrRAcFTX2s7cpFEcVYb8vFamhgnnCbBmS9wdK9",
  "key28": "44ggV5GXsHfRGNA92EKaKd1HzjMVP9RMrZaQDqnJF9trpoMmTbecfvAcn6Qt1RiSnTW4SfTtnvyL1MdrmLZsrWrq",
  "key29": "4Ff9LimUrQkFNjoAaYTQL9fR9gfsPC5WTBUPwi8qx5Tsxk5VMsRCpXSqznoy6kj7avWHWgDv33WVpwycCX6eA2Ga",
  "key30": "3kGdntNE1eG5Z1bpz7Ud62GYvgFztHZCjfw4pdJhv4sHtasPqbJqwgsLjksdCcJUBKNUo7VLyt5kj9eqrBa8Y6gq",
  "key31": "2AnCDDG8Lj8F9DdBD29f1X1hW4JRxiExTPsGoaS2nLd4siaVxQnSuCQQ1T7XmJfmU47wYYsVAyxQdeQ9hjq4iQR9",
  "key32": "bRm8mR5tfNscmJihhtLPXz2MmRogEWCn7oHcrXTXEH2DpTfXqeZvw53ii3G3zRUhAFsjSzabCVtNhot8ZrBtNkS",
  "key33": "51KY7r4vNqyuzVJc2CKuFn4uL9opaBTRFZnQ13HDx8HaEtD1kQZiASEkVXU1SEfpmQ8hkzgX5qfq4zLGuBLg6McA",
  "key34": "vSeuDwtqeS6BfnbYsu7qkdU6yyU3fcz4ebC6xFxf87raZyojobFHyzEUMspA8QaUPKQfTNt69MSywf6cMfe5uRP",
  "key35": "5NnGjG4hh5y4xLnn7AQMFLwoQauoWU8dmCkP1NSMBiC4CjfXij1e3YQC8BThWQVXqYH4wUwgcNMAPpaK8xUHhSpw",
  "key36": "pTM3SiUK4YimDsHyyZkPsudwuhbynLSCTm2qnjV9kvgQLLRedXLUbcPtLhHRnGH54MGQE1167kWW6mMH1Wr6K8j",
  "key37": "3fPhXibiWAUM3oDEJcVbeH1gdkGzdbUxnnoNzhYQv1hqJnxeJ7oEt9PGNfmVnrfSDvNLTkNyWKYtyAVUhh8WNnhx",
  "key38": "pVS8hvvoBztnUW5YiPProvtk6BUSEjs6bHEGsruRqdkzmU536aM7Lha4ncrUtoHZwPVJjgPiNAc5rdFcegjyDVH",
  "key39": "3je42E4uaCRTtdGQSZzQ52F4JWW1G4Au1FkgdAc9QkF8kJ5viUn7JgJdix6hngDh5yjqcxZXsGemuY8jtMNfnpcE",
  "key40": "c3aH14AtWh3rEdL733eAnWTioZZuGMwNQTXMt1r6oFGYbuiZrpp2LHVYt2bx3uBV5HRkXQoCuRo3m1ZSXmyMXkU",
  "key41": "cvG5Fz9Fhqgyj87R38vR1QxuaPromXhV92mUuRCHneFuXZDgAo3J3fMxV7DzWVpBHfjcMji37zv8cMpJbMR5vEf",
  "key42": "49oV9dbuXtmcXg4Zfhv6oRhnNDr5eoTVxHMmoczNBy8WMG45gfCFBFgZSU4DCzkQyBJutamf9MfTuFUa53embGD4",
  "key43": "3Tn6pQv2KZr3iKQT2GYRtEHbPbAud77dFLMv3qYDjFnB5Aka8dw3GxeCCLPwhc4NRnYdCzXPdYmc3fdxsW98nrKZ",
  "key44": "3kkuJoMKUjJm6rZ4Kwdsq1ykJgtsySCJwA9VzL9cud6bTwet62AR6bNgRusb5MCgq5nEpBGLg7tR2sXi8Bh52LTW",
  "key45": "keRukVLMHyNWZF2HCAH3fBEdRdBsdwPNsCvKKi76YBfmg5jyU4sm6Z7EXwo7div9G9d8ZDEqtMfihLjC7Gk8gqc",
  "key46": "5zMVHq6a5pKT7ihsTD54Q9YANL1sgbgLw32uUUr213LXWqUtyg13dDPUnnbmLGtt52yZ3PKtrJqUxc9phWjDUNwq",
  "key47": "vPQ67soYmSGdqBRqugxpxrSBUvU2zU6YHaXQs3E9chEEm1jcU8hgSQ9wKH5WwasmHF5yvjRamiBBQVZijSKzzMc",
  "key48": "h3yPewHbq2jvimGGXX5KxQzCfkKtXAjzWphQroaBSV2eAJuo58QioFoKKnmWfH6ojcuVx7aJLrnakXwNJcuxFzA",
  "key49": "GoKq4AmsG6t2F5E2BHg28PKHEt4bpP7c2o3ZQB5SAMsukTosGN3FCQor9Zm3BwBj6zL5BC1ojNbMijFZbpfprKy"
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
