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
    "2Xm8sXAxWSAtvN4ernFUtpUFkhZVcnSD3efy6CZ6G5GZ9o7NbNoR8qA3X1SSVsNT8Vy6bNBKTWKiVs5MMDA3CbkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCZNA9o3vgD2Ymyqk82W18gwQp5hyY2cdMCwV7d7daLdDdG4hURLy7fh5SrdefZJQhJYzNAKPRJT84cdYawXwAK",
  "key1": "2BD1baUBevws9r8xiJYXK8rs6snBBW4vGGeQNrbortA54WPa3AY1prg1mXNsMEZyS7q5PgEfuQ2yeQo3XzNoAtTq",
  "key2": "3UBLVi9yczwpiExhdkv1jnh7BSEyoz138BvsPWYmbfxqQh8SqeQdxLcaSY8gdY35zxxPrWwxrEzazhM88gPUsXK4",
  "key3": "mENBzWTpQmpbFnup2nzn9iLhnni4L6LEz5BXfr7KTDjn8ecDTM34bBbBNYUhYYsjsysxphdLQ4uEMfZVvJbQ6Qs",
  "key4": "5sivz7VfXvqR8TWakVq39t3AUfohwdrGmstLE3FG8eXv4xTNTRYmwbdvQT4AxuyAYMcoiNS8EnmQqX5dCa4wdj6L",
  "key5": "4YBtvQKDE5gstNuCEokeieoci66DbkgdkCNepid9NJWh8TKKTMyvJyqkvsjASmzHs1Dt1A7gyK2idoSr63Tj8Yfy",
  "key6": "5JitLDG3bnZ1KFGWK6CeBxUwaf4UE6SW9iUFRb9cgoSJFaCogfUWqDMmQpY5M6f1bSiTwCE2YCfmfXDxMhCPmhYH",
  "key7": "5FvTyi5K6unrjUFGMbBTRSVmYjdWnJyU8TAKkZBTiDVskheXWCixMyBxCZo2iVueZSV6ciVZLNtzpoXVtd3WPmQW",
  "key8": "5HGKZc8zthHXMSxubeay49qB27dH4PasYndoJLxMn6SeqB1mzCs1YWTFVpWYx2nhzcuJ4uqyqhfHzzaco9CfndVA",
  "key9": "5w4rceh4migCWdNF8o94epdG3utxx5KUXbDRP7fZguc4BXup9Bz31wJfBdcrhLuPp839gNiwKMESKsjCDsL5pK64",
  "key10": "5DFasgTnH71PsCY2n1wmABgQ4DFEywo8nvfeimYavY4DPQ9PuDB39jejU5X3JbYDSrtGayr8pjCCfT1KX3eMvyAF",
  "key11": "2d6LufAPDqM71nMs1KRVoCSypGdNPbdPyJvsyc8obrvefjM8NRStBszoH4YWPzRenxDQ9sHaviNdAGdK4tffsv4E",
  "key12": "3QLBiY8GX7m1Tkt5mRSVCVY2fU5M31AmFTDuUHbhgumZFZDf7yYau6q5TLxtVJTk8QdtJKsoiCrtXasPouNb5SDy",
  "key13": "2Q6Dh9uew4nzbBZqjeMx9Zfxtx8sEurMMC5e9SZbwHWTEKCZkWtywUTBorNpqJ7m5LmQCLKuu44hzt6PR9brNXh",
  "key14": "2QXW1FykV8YjSt2ryGa82jCXVeeUybpGL5pRygzqs1dcey5PwstUJoZJwxihjnDcVQFxV4Z6KpaHdjg9sqvuXrdQ",
  "key15": "4MDFp1TRC2cReUjUazfLSQ9tfuojfe1HW6wijYjvLv7mR7eqtq4ZuMwgMYWBhW6E7kHjJf3oR7XJZXVi78AgyZxS",
  "key16": "3Hb6J5uDg1y6LvPuZiNzTDmmniZZWJa32pT7JQ5irAKgRcRArxr4SXYeaZd9y9h5pLDqAkhPhs2JpyotwYk6qhqA",
  "key17": "MPzUKTkX2YMgV7nTswXHWpdzc92NsRoyiSif4gyWdtQmb8KLACmmPpEpGkdd7YHybDGjB3Kgb5UnaYpkoR7GigE",
  "key18": "2wCUSmPNF2yaWUV5uCimatEfQbNjZ4arPbr1kdxveYdHtGb6doFhaBuJCkgEJU6F9DggpextBqMxsFjXzqhc5Q6e",
  "key19": "5A7n77Vho3JP41xuceVX65u47p5EW4GAoGfigXjPVehTqmhxUtRN5gHfrFWhQHAJLMAMRRUwC9cq8qN1cjq8BGtc",
  "key20": "3T1VD4ta1gWiybNnp6rBR92D8gHcwQzCLU5jGdBYgRGGSvqmojc8njLcmr4PUjuPH3zRUZ4X2gLqUhTmQdqioH4G",
  "key21": "EQEqLa4hMT7cmPaMu2TZozecq2VHJuwrAnHiaSPR2AhNLvTSAjvvGijwFet9eCwyVEevFgkKqoNjFfebdSnJn88",
  "key22": "2uY1cWq6qhVnYNwUEFB597nHvrsNwZvWqm83zk4Q7kYSMkPZykg3v3u6bzM9Szk6b8wCh6RjKaR5qTpw18PHqcK9",
  "key23": "5XNQ28SRhbGK6K4amtbgAx68eUDTzRUbx8doWyKgfzAv2JsothHczHL8oC29hySx5FUeVkD365XGuRZ1jtBC18vf",
  "key24": "Zde858LjeynWYt9RVfQNY25bk7EB2DkWWfDJ6ogu4m3QWaWzMcpdqTn1i6dwM7VPYjgxy2ioN6MijjpEX5sAqgY",
  "key25": "51uPA5TRb9Kor6kg24aZTj3KjPMrQNGDUf5rxBrU48wkLWFmA92pKg4U2Kqx9PNmZXDxcZEDE7oDTvVaCmrnRaBX",
  "key26": "5sQSZAU8KBTBYFoLpFgzZrgD4wzbvBTsp5qVuYcw3yuwjXRiqVFKtHRHEhbZmJmZTv8tzf7tJTnZgRHNBuVFiMe6",
  "key27": "C8cUWQSPBbQVxdDFENTakbXEkfe1t4cf5oKpJDn1o7iF7oYcGHFLBTgKxeuieJpNuuADe7JJrQ3wMvrZDpdsqHx",
  "key28": "4S9qaEVmbFX9w9JHi3pJvrzTWwzcqChqbod5JTZdA3379nsTpKAExaAfYhniG3UwNxp2rY95jPGjQDsQr3rLSvxK",
  "key29": "3P3CdAH8p3URbfoVrRzFkPihV52x6gbKarmvX6E4AGcwEXLo3yBS5dx51j9pcFDJsLorcz4vYkuD36dw5FYomF6B",
  "key30": "iN984vshkr3cY1yTV5PmSUB3mVrqRdy2uJTV4x82ppCUMvFEmB8d8cnhz4QNgXc8c3JqaaatxrQGuTbENgm5xbG",
  "key31": "2YcjnZEwRdwzVdyQU6VetxpSoH5nADcxLFK6MNz1tRGqfRt8eDqqyUYgpyRVf15NeDeg58eKfv5tijCYMQryzM7C",
  "key32": "4VYVVwJgY81Riw8r84JyndQqaFwmTzpApxV2Qkm3WBdXdmBSiQBXvxZwehAKjakvrsxJDX5NPi4WXozSqpYZ28VJ",
  "key33": "4qBPuqvHV76EVwQaHuL2e78TYR3L5S83isd6p6Jr5nYaVZNY2YZADFRRUSdK4sMsiD6x7oVWAkbFRDGbNcNhCcvo",
  "key34": "5ZogjGTwUWpidedqVaWUDHuwDwZ9XAKd29wagP6DaNhAct9cjZZPELXhCuHEjQy5vfRyPZioVHpA9ZaC5EekGija",
  "key35": "M29KQP5V5Yu3HAYURaQb3CkhUQ6qHJCRGWUJkEydMkdoGyCsNqEm7Hm3vy2CLAJLvWWb9TDX8gwYhjpuFUFvsgA",
  "key36": "u7bK95ukY9Gm32rbSucxmvFS3ZRYdW8xhCsxZsYE4GgrrCa84szGiBjXf1WVeZT34ytof37CYFPWT8ZRyGPrT7U",
  "key37": "gWfYWJ784zMECcYkhHRo2rWMHA8UJ8HSeJFZT2n8b1F11mTHUs1hkDAx2oWiwtGA8G2Kw8WMAL94BvZCiYwqgT5",
  "key38": "5fgq7WRJJBMuouAWvyBP1Uk8HSTYZXk43jBePpXLkHh3ji6TA4YGm3NgTEwELh6LfNKMRxrwS5MhxPb7Loh9Lm81",
  "key39": "29hynyW1Wy4vFRQTgHsh6oP6dPyMShnA4MfHU3vdf2PZmJiZSsEMEcRHcxjLLmVbETVEbuYAxVmVLpUoDW4uCjj7",
  "key40": "2n9qUW3FaekpB1SGjbgoHFomPq68sMa7ZPXgCtN8tFXhxNcbgJi1BDu7eVY4QcnMc4hVNZWARCgSNh5qW78dpSRN",
  "key41": "4BCBUYX2m9H7SYtj5MC4Xziv7xDv7h3WUF2XpjuL9myCwtE8kyy7qTFz6MDP3f8xkh1Rsx4DZ432ZHrBfbPS3ATu",
  "key42": "2wgJYVmQAwt2QPvCXrBBSCSLyfSku4GZQTC8ozzhjBF3SFuWpd5YwGwiZMvEzjvcNC8dJ89EtsYt5EBbzaD9JK4N",
  "key43": "3vivkVC3wDtSJVaWfcEHyQspVZ6xteBYZgP7rSJkZUhqPo1SYAqxqUuwbfSgCiQt6CfXPXs8gsD442mFiW31iexQ",
  "key44": "5vCEUWtHop6zLo5hii8sFR1bd4Ak9FijDph17zGK2f7iLDVQcAgyAd54zBnj4DiuaF8jVzWYb56VC48vfeiLdnrk",
  "key45": "37CE5x26h2iyYrvzPrzFUqRtaojQt3j9CkbB6vYS4BwkRMDweH6n8p5nH3hVoaiH5CaeFKJpGPDaLa1i4GEbAW8N"
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
