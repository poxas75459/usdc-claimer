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
    "5ndfVAvDVihh8cWaicR6GtA6NTvBAkBeDdFRyVuDyS8Pv35CjJ4oqYyjtAt78JeJpiSu6T7p3BjRh5BcJre4WWbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkBZo4Suk2MTM9LurphSQuNr2HvhaSvB2BJ57YR7Pta2WZbk3SZgaLxQhCQrAhh1jNAfsb4AyT89faoue6Hpq9m",
  "key1": "2dMcyS6b8X1wJw3pTAQ2yj4xpn7KYhDPetEsmnLFQamod77cWNKgzhTcdjuVj1TpSqdT5ghLB1U2myD6xWFfCD5e",
  "key2": "4sviPaxN93fPF9J19NyLqX3yo1o1UAHaBWgGswkJiMKeLRrdsJyZ8VzrCXJQhyMDGDx6S2w8cii77vUoZHWKstME",
  "key3": "pXDS9svqMGvp9Ejbdb3ujgm67s4esAgoq67ioUGKYZVbBR8L92HxVoHfrVy4LVw4Sdqg6DMk8xBHDDMmx5Asbw1",
  "key4": "44NtbsRqS7dhW3XPAta3oBPGefCfjJRhN8onPXF8oEbC3GZnCbMoTpr2F77mNevVCrwxWeQotm6C5JxWhwLQqeAP",
  "key5": "4HMPMrdHRcbUpf5PK1GMnn56hQWguyyBXYQ2shCMVm32zmdjpYGPVyeKuVjD815FBpVkCBqWg2huE7g4Qsxz9Vxy",
  "key6": "vupjYwYoUaLmNLgG5KsUBBHudEbqnjd9hypA8eNVnJPenxajGwY8LN6vBnoEoTGmVx3vePAQ7DE7JCYojkMFALt",
  "key7": "yiA9kQyn6Kjer6TY8qTyxBbQkbWEzGV6oM3B3QnNiWuBf9TFUfkZY19vaZ2nnwSeNVVPs6TLamAZaB9fHa7aNxz",
  "key8": "2RjXcRqD7aseTLep9dLQYwuTTB4fVSFNwnG4yF4Zs2NTDtrcxrAtHKH7GxCm9p3zJTzDmmArSCavaXuiQqTTjH5n",
  "key9": "5abXPx6QaaSL4GZUZjXP77aougX8kpvG87fCaAf1C6u4HuRPbqbshjEENaJmboHLs1XGmZ2pRo9o34KnHSYQSTR5",
  "key10": "oYzSJGL9Sizjt6iAQCs16CUXikXES63cXExWBbURJNRdMetw7PDQQQ8mJZM9fSvN9vT5qcPPyTNFoRXeDVc125V",
  "key11": "3tRdFw9FJP92UMntj5b12ErKMCEPkaDFnM3bMRKz2pJEXSha1jEiJjhvvBvezB6f44PjzVthx33uE7KyrsN6pEHQ",
  "key12": "4PHzMZVBKWQrSL7tAzpaKVvU94KNwTt9jpVVkekr76p2PUspGwmuMR3sa5unuoMnKMRRUjaChoMorJhRpZ4LR8cx",
  "key13": "3TKnxGrV4yu1ntfTiRoR7MFy3mak9pTxFqRJqQRnCudTMAe2yppjhfU7CYD15QM2tZzC63Js4YH7arRiGmU3XxSr",
  "key14": "2VTaDcKkJuR2axRCTbFWtSGS6Jvz9w2LpvkgtarFKHgn5UkxHcPmnL7Maj62beCRDGADw8MeYGWiaSgo6mTXJ6iW",
  "key15": "28rjY37vMh8pTSN6sdjMhsKsaefg8mgPnwaLv7ADhUVUscSfZXr2xg4eaxgtKdnBuPEdtJKqSGazGJEM1k16sRss",
  "key16": "5omNAyqniELkGW3G6qJjzuT7kzB3ZaMjAVeeRYbfRLXRYZDstPitzCYKKawY45mehLkmYiQkWrrTzA5RQsUruKQD",
  "key17": "XfrVjNsK6epPYxrbd7smWYrd5grQn4ostDqR9Rg2MDi5UZsDGiCS2S8NikCSJNWmrj6WMJfwcskiDi6jCQnNwHY",
  "key18": "47opCgrP6ZpQHmQyq3gLR6G29bT4p2RkFKLLCfjBb4aTEcYRMuaanrnyDTseZ6ufXMHaHMVje6nJQXkmdufoTZBA",
  "key19": "2Zr6ipgSLk3ijdGj9kgLX9jPfpErkLn1UUUXYq8nvzcGiAebUo4x56stV1FR3yRp5xuPMm7ShMgmoRByBR2NT1tk",
  "key20": "3KR5j8oSwaYTuN8L3MNSM5KGDfzFnPU7Qjzbo58qXxC5KP815oJYwpishNpY8hSr7oCbjoKwQsuiSYmZhbF7yP9W",
  "key21": "3uz9jJEQNZj1BTcrK5KfvtgigiNKHaUn3mECQR19hhFS1cwELR6VanBMrfNvFQYxFDh2ffiCKxjhs2ed1sj9nqzb",
  "key22": "5XrAZeSW3jJEhGEPxKB78ez3hhD3EBDCmqCMtmd1DUCLuxDXikC3td45Koea7Mqzk2BQurrudsvuL4QGERRqv7vX",
  "key23": "ivtT2TWxxVRrX5hGtfnitfnqjrLC45j4goDvGJ9bn3CXncZSDY6hGEPFRpgos5E8ii5ab3BCVYGMdkyRpDXqYRs",
  "key24": "2A2qCnqrJ9xu8QHMxKib3sQvAEoozC2QSwaW73917MFjHaFd2osZshGJpKzX4GkoJFxCXmEkDEmMbzLeq2acxeAA",
  "key25": "5tBP9Vg3MN65xZmW7BTkWtmbySUytVivv5S1c87gX2dHEffgDMStohAUarCBHyZSXScFgDisjhq8pb7J57TJ4mM9",
  "key26": "2A4FVP5yZdmJnZrXfxRBh3WHhGKqrxcLv28tZVT5nZZT2xYDX7rvBayDocfeRX4Uk4AEfhWXGVBYmUFe4Ca9Sj66",
  "key27": "3F62jAvwz3JK41vLNzqukZs2op7VxUBeHXSWYet96FGEeFLfL3eGomLdEWNCRn6Lu6oHnxGenPMYaUa6Nmc5mrUg",
  "key28": "28aFkr5HWFvuszKycV3ZygrF8gnp3VtFiCexKbihWAUd13foncfGvLQ8fgvbCEXTJbCfdkjL3ESUmPX5fPkmN6Yu",
  "key29": "3b799HyxZcBs8nKGvubG3karrnLvSZNTWNgN2qgPP8wu41yvz9tCrxbzd5Dx84pcNvNXtj8rL3nzj59UNDDf7eeL",
  "key30": "2gpEQB2a7nWWt7TsZq1AmCZTDXCvPgRzm3KEut6dTw7dieqYiJpA9LBYZktYhHN7n3YxcAvqr9fGZ6tQVzYEsTV5",
  "key31": "4BZBjMMJeYoEZYBnJjJTmcc5PRN94ZM7qiDiRQtbxQDo5j5DWKeqxjh5KwuL6AF4wzXxEye6uAuen3aHWwRwT7Va",
  "key32": "3HU3aeNRo6zGFu2QJ4yKisRAtpWVyCMdKy6BiHuejKaAy5K3z9MzwpcG7SFDCtt7FWEhLwsAAcrsHa2P2Cw1W9xD"
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
