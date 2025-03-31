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
    "28H1U2gebmP42Rcry8UfjGkkX159uysVYLDMSebUDwW12tCLDGjRLk3vSdf86Np1r4kvkmiSKhJFCc7HfWNBMSde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhMJ9VSquCzkZzEp8CNSk5fibhNqvxjMAF3yo3JJoSPiApex4bENhq7GSqd47SENvHZFL5QJb6mkwa4E7ke7niF",
  "key1": "54S1LmZqLiJkowhMbyUBVpD8683AfWQhUEg2jXQvqpiLfu1DTfY67Fm9oiRvXC7czGShVDatXaN7Ya379gt8Q36v",
  "key2": "5XbxNFRZVdWhvcS8mbCpjo7g8Ph73X8ttZhJNDsfeDBugHoSjFnjUmzSjCoy9NVpCQVYedVSEPneUJwiUQezCFaV",
  "key3": "41QVCwHMc3RuEUE7axLFRnDDwMfdaFfEuiEYzFxiDTezDPErLRLLFXqeg5Ci2BMWHRk7Wc44csR31cLBiBrPTbVc",
  "key4": "4WVQt4rj7XVjg1GWsCxYkpumtYShnnG51rdiFK11RVa8MhZCU11p5TaUJSxbhzgcH52s9VsiEsYhXbceWsL8yVBK",
  "key5": "9gvgMZnfyRYNqEntpZf5U6p4gwYk6VMU3NyXbrdJpjFTojKTbWMW7SHmAVod9SehwqupCuEgjykjz8QK8dfsfJn",
  "key6": "2T5apMBAVW8dVquxJ7Wxqa9sq2NHPV6y7D6Ti4Z7m58WNrFriwPwpgpfjUVsgSL9QeAxdD7gPrbfYPGMr2kuh2ip",
  "key7": "L9tkQvGbwzvUFwZzkUCZDtYbdRSDjBXb1fRXtyQQMRpBtBcfdVJ4AETsgkg6QiU6Zfrmu7vmFDnQB9HjLTPT16G",
  "key8": "Q322KLsy4urYryyFbekDr56MPavuvnE5c6gpxuZi2XxyktyC6GQdcFs9dNHGyVemqXPPD4x8J8smpPvhoCYpaPT",
  "key9": "2qHTSk6N43qck1pb4ttRQha7ABMeps8BAD6j3sxdJDRPFE6qFqtnTFq7MVirmP7BTci6aifMDDv4b889UF5ErNjk",
  "key10": "2mZ3Bw9WsKzdTESrQXmbUEz1DvcAPbiji6dKZvAy7szaieR77jg88Vhof7sF8HHKYdZKTg2HSGN9BV4w5h656BPw",
  "key11": "4Bf5EaTRrgkfceCFy8iUvY1qVzvv1Qn1HtMchG8zwN5jNam2Kq411mbQnZ6JEQGCHhqqjJ66EbePJiRWd24Rb2wF",
  "key12": "4oviQrYdmN81YRgHx6V8Na7GMQKZixAkdMpDDVkQYCpoFC3V9cnBn9N7zVouorJUN5EgVMosJyQT9EYoebVh1Etb",
  "key13": "xD5jduwdkTwvaP3gEqwWrYY9BCvqr2nebk8juVaUjCVwu8hAPU1XiBKAfAZruG33AB9TmRTmVqWoFVtSypg43kc",
  "key14": "7fvZjWB9mYir4gTdwZTuj7jGTTi7BkdNwJva8rFMx4s2GXhckahmquik6xUnnAyWApCiH3hDrWJQiJZyRf1dM41",
  "key15": "4L1RaJ5fvXJHudNkBjhNfL45zTjDQurfAx7jTatkaFMGQE2zLYq3FnM7kLuuPj5Dhnyo4uEtFcb4Aph3AaQZ4Fe1",
  "key16": "3oSWQcBZLKWxevTmPi36QRVRHPiCwQvMhh33JWiD1pmzXrCEX3cqoVWzz8NhkTTUqbz1A1mLiEwWDkwtfVJZJx4A",
  "key17": "47xP7WSEtkPFo7bZL9ivKnbNqDzVwpgfaN6zKQLhjSgA7oPRdqcQLijz52cuNxQEDTYY7G96osRGNDt9J426g8v2",
  "key18": "3QdYbkMptsDUNuGubNMao2RKqZYsSriJz8HV5z9YwnvcjqzjTUsggZGBrjYAC9GMyP3wgZnHCHrUV5LR6NF5tPQn",
  "key19": "5R1W7Rig8kDh43UqT5yqJBLhVzuMHNGjnZKHweiZNVhMEf43JDoYS3JAN6CU36SzTdE1VfvRtDMLymXHc77AHbQx",
  "key20": "2GbSvpFsK3M7oRf1uRi3c9i5ivQccTU1KXCU35BP1BhV2NShowBTnGGpBmLuxx9NrnneDcjt7p5ixP7SdTrd5Fd3",
  "key21": "3X4uRfgzct8datSaQc6tTXsHeHeBCkvX3Rjqw6kSyk1YvqcVvMoAHNHtqs7HM6U3eUYP4bpcTKXppMtGFrHg1gAZ",
  "key22": "Eya5dTK6K7DNqbSMFsnitLuoMSYtrYkWy9HXYwmGeo6W4rey6pJbDF9PLxSpMV4ko6KBpA8dgeL1Tgn8B5SpYYV",
  "key23": "CnUX8atDDQCCHA7ETKfxv9AGFd346tfmTnA174fceBevQacRqrVBnBwH37wN9RNbj5MYjdLBuUSpEDzJBuAdyNd",
  "key24": "3Xfgh3ho82pfEP6DXSnwEAohzaDfoGovgzkBtJ9Gq5Y7xVycsMHSSJgPFYPqJWbWrK9jwEymjdK7xUemvzjcWczK",
  "key25": "5hFyEjb9RJgjJ1Wnc6SAtBMAU96N4HfqBNXaJCabLLnacSVRtJ49kkiHw9xC1KBJhmNhZv7qYaTyZTcqbXAFRDre",
  "key26": "2mkh5zCDfR5hGxK6KJrNmLsnNeF5eDyi3c3Cg66dQVGBAebFGbj9ny5rPB64VEHnc3rZfVPbvehoUN5YZrowpTj4",
  "key27": "5iLtqaEKYn38255MmvHMrm6D4KvZxh8mAEVmTLWH4BKcPvxi8C47anTeyrccZ5vJFyTdEzTwCnuUmko25QiHv6jP",
  "key28": "pFQ2gFSCK5BRrV5Pd9eEBnWX5aMjQnMPiQV7AqD72uSfYvDDFzaLAeTfb86Xxbt5vXkL9c9WvzSubvJk41zy9uQ",
  "key29": "4o4PcpzcFzpzg2MVgrCD3z4du11Y5gQbJqXTkpeQxQJdwDeYu7D7Xuh2K21B1Szy7bLDoZ3cJoGpZ2EUGwa9vyue",
  "key30": "3MzPDrHELvAcArEmQsQJwaDSeJ3qtAhXLWjufANJUHoUDpXebHjhVmyWcDfST5ZJtiR3F8N8ZuGh1jLU1DAJa2Sd",
  "key31": "5QGuGYJwzSMrBFB4kFqSgM3qVsZjK3J5j8QNXRnykFD2UeSyZ3d5MqdzMTrzkUKfDJyjuNSnAwLuNKnHWxKJTPXN",
  "key32": "3AruejmwioNmRagzZMxYSLPYeD4gyYF9Kx5q8AeHFSFd3kSeN7ZzKKeyzatX2w5ntzYTHDAypmVx2W9mgqwjPG2U",
  "key33": "Emdtxk22HYqvkGofbcToPn8SFezxLgrk3WctbAZGurTmsFJpD4QbsKW6rBEAqiFQkE29XjYCXR9dc2smy3qNhNf",
  "key34": "RNbWBWjWKKBBUQVVm7QJh5RK2pvHaNqbXLwXhmy2BtNyGCM1XZ4A3uMz9tgB2DHUr5LfErrE4gHDTjHH6uWk88U",
  "key35": "5JqXHouNbzGy2GoJ1DwVWNXWeRRKZBgp1KKqpkCB3MJpqBDyH94nGWE5Q1MBXsmXTZFomEH9naLpVtPoLjVSPKNk",
  "key36": "3xzTqCfKvQD2SaqaLyuLmC3cvrL93f1hXRopTKhWaeKEsY378EQSaUin4t4EXqjav4YbQiZ7wKfkBSeoyGWKhtPk",
  "key37": "JvSay2G5f7HcfEi3AdYYoFupCMyTGZeDdZLWMRGA6Un7BgaZQzyDto8Hgv6nfsbGtefNdqVUYpyrjMu5wVR4GMZ"
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
