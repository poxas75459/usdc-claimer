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
    "2fAWn3Lj6P9xhNsjf6649EaEvPucV7BkpPJBaugK7DATazYQ3RJaBxQKPFzodGt2PnmL8VfyS1ZrtvZevFDvEfr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZrh18ze9nRnAhxqCAF1JvdbLfth2ec79fk8cuxPTVCWL3ni5fc6MS37iHbSYtwwMeMvo9S2DjKDRMkybToUHYu",
  "key1": "W445ZrTDAwudjkgaCJtG8GmPMKJGwkJNhs9z1tH6CSiRbUcBd3bpp4pjDZbtMvDm3TQSYQMUhRLRreoGMXybfxx",
  "key2": "3t2E9xrUqHSQVXhhdmwq8cDpqdYBExpBGnXHVBQ7s8cAXkTSHrgxk2yszPSPHqEN4o5uvGQtLnBxeMnQaVosaXbM",
  "key3": "5cKziZczogcMSruRkvD4t2k6h5SJtwgyLayRk8X4ezKNZjnaKL17wyc36KgQGALDsD5rwG8K4ZWea6rDNvojCgrN",
  "key4": "5ZtH5bTbeybAd6dm9WQeiaG56qbic7PUUZNV5hvgpE7J3LuxVf1D3tGCkR8VJTBaS144Vik6XM5HojdmVC4AiXrh",
  "key5": "5Q2c7nKfPcDuqQ1Af5VTFdU8NXPETg6zjSXcFeQTARwKhj3G93q3on2snyYxUo2f3YoMZvMUP5whsXsyGj69dn6q",
  "key6": "5Z3ZNNsVcWvq1TQVgHyFgL3ZubGYCrGcQs2Gh5S6nbcDoaZtBegQVMZDzaNNSKuDAnSe6Qb9NvbCL4U2RYKCqnhm",
  "key7": "3ct4WU81aBppojyrsddVYLrH2BJ7cRWz6XQfEjTp6VXB9h6q5HMbxchcEEtffDkf8zXwSyBErcZviQp7C5ZYerVa",
  "key8": "46BvpGq8smMzUSwp5rqThjTyAqaHTfECBiNmxfUg2ZtVM5prCHZtu7iijYA2jkpHtDnknzwmEyWcUCRwF1dqoib9",
  "key9": "5gN4y3Cjf8puCgBErRLyr73LUf6NXqynvxxLUCw3RYHhxohocifCGowoPS8qaaiXY2ennbJJPa9BtNdKE1aAv5tG",
  "key10": "2ewuErBCb51DvnhYMmsmgV9DmvzcrjFUQC6PaBGRrNCh4Hcpfsf8AHaAcDNWMCiDaw9QsskxAVdEUiM4uhwdjTGx",
  "key11": "2d8vhGuA2M3s6Tg3PEg5SEXvKHTkXg2s23oSFZQNpWzCTjkEQEDvySPvAWUg55bxZgr6kfxnVrsA5o3qPJ6kJwx2",
  "key12": "4NBgBHu4PZx1FZSn6y9Eqd28gFzbGv2VrPnefMT6ThDUMAxv7tvGSDyWKtRmpnBrYjgBESuzzRHW5egirFqpoP4f",
  "key13": "3mUzfmfFqMqKAjmgE8zq7AMnjBfMKEMqaMPi5gX9BQE2MTWHe8pbrtDtFsnqioVt72Z7J57yhaJ9S7pjohMDwRGc",
  "key14": "4bTtbU1VeRvsJ7PT3Yh24EV7zu3T35xRMjZ33EACN5eRv3etf8Kr2uvuzqD4gD1Cm176RTSm8DfQSzsxKkmYk3QV",
  "key15": "3CzBrobcRd3eCFkLLemNeqrkhNDqm6UTgkpDvpN8kXnFqspxPqprns4yWuwC5HUyXn6VoFmnUmjqtoA2m74L4aW8",
  "key16": "4P5HwQ3REMMWawWYA2HKVKyFiocnSXi9EY5D9tUUPciwWywMBToeJuQzjDehi8aY8AfFiJVC3KCKi1hK5EjWY6ZU",
  "key17": "39JiwgUcpfbaNJb33B7f67oR2hJuRMsh6Sg7FPgtdSiBtf8MsHfXuatjQZRKBKFT1TsXEbzgX3gniM8YhrtVuuMB",
  "key18": "GY2n9czBkxyyBZBmginUpyirPkCEp3vx3o3VHiBMtsWAiZonnSnag7uBmFg4DXShYXKdFYPE1wNL5ZSktVVwfVE",
  "key19": "cNaB1E1WkNTges9kQ91ZVcKtcRoHJiHLHYCeqM2REKn8mEP2SDPiDwRv9iPMv36mfCyHcHRiH9enHEK2nimAzF7",
  "key20": "dTGhbiqRqQFqtcrtsjqQVRWSDrFhdEfvKJthDrNPXCXSZTbTeX8rfAgMLV9diqLvoYtjQDZTA5kAAin6YC1VFh7",
  "key21": "KgRSBAcm9veckcBb5hQhHkhWhrmFNEr87MMcYr8qemVsk6PegDebBkaSN6z3JdUjT93v9Ba2q8YEEUKsHTu68a2",
  "key22": "4K7TZFvsKQ7BEYYkUmzgMMBB71JpyY8XGKzxxnwoabaE9WkDFDZCLYEWvE6y4EKZDtXVmccmjaAK5hMxBqZW1Lvj",
  "key23": "3CGP8YciEqge63JYFNvekLUfFThxh51c4vnUVaSSKba5MAUCKCAGW3NcaEMsVwyQxm45ZvTvBBzHFm4ah38XdgVY",
  "key24": "4ynFiGnnyVN4245qWdQH2enL5ZJHCww9Mzsaokj7HyTcXv2jh19esgLVADwJhKprtJENAr1MrommUsNu4nhMA32w",
  "key25": "3WRB1gU9jrmYpUTMRBKRYqnn6iwTG7tiUwP6Hmmv7XbjWioyXy6WZTRPZyyWuwBwKgsdtMHPbZcF1WCsptsATsUC",
  "key26": "5F7ETVLSCbXA4jqbZdKDbaHx9MXuKr3mTsuADC3ZUSd5qRBZcjzUTZ7Z9Ts4pWyw8hLzokeVYbM7pPqbQ3ALpNGb",
  "key27": "4HVPnR8FcRccH4jQRcpBw7mfskit5Rio1ubpacF6gomipqmTpC37qcvod77fHARSDM7aPyazBNLQxDNKzb754u2K",
  "key28": "5DCXWiHBDEKFxf1FDSb2DusEPtfHoESEMnRQqkWoaaf9ABuAhfzdBqreN27GZdn7vVtfjL1fLK5PboBNwGzTXiZy",
  "key29": "65VmhJzhcyKpeiEwDqSw7RgxZHcXUFSGxSXVMbMSiE7uLcuhsH9gKBTRDHDpotBECxGew7XUUqdaLUiQhJLzRnqe",
  "key30": "2QDiM1tTzb1DHkr1UP61gmzVZMiFqhy93GMjxwMhYc8pH91HQZNHJ795a76jDqKN7k6h4qREAynHPbBdZ78RhsBQ",
  "key31": "KFn46AW8oAigKFpb3dmUm3NzxUDQaTxySsioXG5SdjoeLaf4gbECn6Ft1zH25BpaBW1BTVVsdyc2CYLxArGes9T",
  "key32": "4mbWowN8cPqTxUkZWpEou7EiXmbNzWCJ53fDV22JKR4mhxDUv9mJmfYssRuRinnyVH7dcHXqfJY9CeCCVwFtsSrA",
  "key33": "4XCajyMPoaPZxLvUUam2BQbkpaHx8vUjPJwE82B88ntRKKJB7mgc8MtdfJCzomQPHKVns2aLKbzFJrkcyAEJRLKL",
  "key34": "3PSh6HnRDB2w7FzJTqx6DcaRYs8nG6yDETKZcAgrmatu2UwQAi68tgyoF4VerN79KM3MsU5KxTx5YeoiURdU9nRf",
  "key35": "BiTM3M1YPuAftJG3wHYh3QePTRo4PjpEWzFzavheb3juW7DGRS3Um2CxogL9bSway7fTwRQz7GvdeSR1K7VxMzf",
  "key36": "2Y7bRQgUggpASnmhyH9ucN1pAMXmNd6jWvSGQgHwuWbb26Vca3Qc4c8755uW2cJSm8R4TLPRezzxvUFoLyZT9bFj",
  "key37": "ZiYovQzy594odwFChFrr1LHnpitGW6XNgYJSDyNEX3mS6JjSyiedMWDt7j1o7eHaUu4yNh7M8mxsEx55qjEEGSj",
  "key38": "3Pw4ysEMCADpqqdfYcuzwvCP3W8G4yf4GQkFdDmNak5bkC2BHy6AQyDobhd3UPmnSfXA6gLw7MVFcPvxpyzHL98i",
  "key39": "57ENECco6Bm29C18ybdrncuecXRj9qYdeqyoCuPaiYhEVZ1GSQhcAhBJoaXv6qtgAEp1CyYxW1sMcjdQMoG3wLwq",
  "key40": "4834mnvwoGzN29UcVidtd5xuxzbV1qQv82pXeHiiLGKtvQCwyLwvA7eHe3BrvpoGUc9MLq775ihFkJ28j4GC8PtC"
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
