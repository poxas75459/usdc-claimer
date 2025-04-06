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
    "2Y1ygjKdoQakjTAWDsW25czTbHLsUDp7vDP5dTFGagWnaFynxA2TTr6Bim9tBhTapcBbg3JJe8ECDhdsfcJTq8B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rb5KfskudKcE4aKBZskYnNbY6P6y4bjWp65ciUfpJQV4sAxoEFhBcxovywPzXed8avNnejfEcnvJfrzfMyqPQ2j",
  "key1": "2bmBj2gWX26UtaGzMjrewpQc6yfKosrHBYFyFZZAT9DgQjoy2QAoSwxBpKrw9aeuJtiLFh9tExtg2sJ6Jb58yEPT",
  "key2": "YEQszRW6kZ9dcW85UD6bmXCo7P39ZxiuMiAK81Nvx1xWjqmH51BMgphBJumMLBya18pteqe9TnV9YUbwpA2ZsiR",
  "key3": "3o9UtxjDxNnSqLzFCandCwmCDGjndQDLyG2GP7c7GiWAvPTLUW9JxYPSRqQrCQr5FABS1ZMNhspskgHtRKBz13Ru",
  "key4": "5ZpWY3HxizyCEmzFJwb4TAbLaBGrTMpdiNE7R5mEKPFUxB7RCZaHBUsiC8zyG2UEZy7vaP8DknyrGQhuCpWBGUfV",
  "key5": "5LrgQrGAC91YaenigpQnh4CezgbMsstMA1jwJK8a8xuGEUscqhwbm9A66gLvQABDiKykMgTLaX9CtWHGPQC9N4EP",
  "key6": "34EdzS2WvV5orAm8AUEJoyLr9kZkFkzUtTUGrbMYhrboWaiUcJL6FDSxYJowop6qXwbm5hCVwoJdmYqMJdjThnTh",
  "key7": "4Hss2yar2mkJKS9ywqsAPhxyLkyt8NBRerqVfZDHJim4fRNAy3uypFfPFiJdCxmS1wcGyiuqmisSJE3efcjus5ne",
  "key8": "yjMf2GSbtRT1VoCYLgn4hgYzAPoF1jZVQPWdCnPmyNwBektTHS5rG4t9tMtq2J8AjbnCX9tp4SoartWsAWtv9Zt",
  "key9": "4JKPnZLNtvYbSQGqWQ3ig9HAdCrxoQYLMasjj14BuAxSemTiF9FTxJpqYFTjvffLNh9AKNUbM9FM1mjtw6jhUuXf",
  "key10": "34TRYWsScZRsSGD2Qy6g79RUuVEw4MjXCp14zoY8FJ6bbnEXRNfyLxtehBJb3qrgH1w5N89c3WvcmPqzsSfX2tn4",
  "key11": "2hQLRYAwzkUeTRreiiKFCKvyZkij5R2uUw7RvNjfMwuowDatjMH1M93nCTP12EHuTr4BD9uiaizK22DpceEjMo4R",
  "key12": "2nSwVrTU1fsJMTKYA8K7WasYs4qkZcccCuxMFaHrmgN2CTF62aVBmVkjSrMcUbegKW1v1Mj8safyV4vWRivQFTFu",
  "key13": "2BUmtTbVX4fuxU9ZZ4XDzQm4yHaWrgjm1Htm4AE7QubZKMTFMouCBvKbN7ukqZcVY7JLoZeRY43xjWZNPfwzWtS4",
  "key14": "3JukWS3a8JrxJxqtZwVWnr9oC6pGwjJuw37WU2gKeMDukSx5W4yqBKyF3HFKZ8eLZvQETYvJfdQbQ7Ys5DRMC4Xc",
  "key15": "4FvpsD1rSzX3MPofrbHJWtxMGDFDujfHkyUVNYznJznF9w9z3mdipeGNfQeE749F7WNE9Q97eqAa4RnzbssvZxnq",
  "key16": "2QAhVWzhS5LamLaP7yrgWsdswrSJcd5wwRyeqpBfWriCh3NtdSEt4ff2krwioK1Wh1w2ZPiHio12ya8Ac5E8F7TF",
  "key17": "2THsV1MuYP21as7VE4Vi21wGukT1cUcpR5GsyVvdxyftTfVVqVtW46fQQSHbY7zMVPANSTtRpmnvNPLVRwLMxuei",
  "key18": "TRqKGRJ1SZLFXN43zKzWm2m52YZurRGGm6Dmw8KV1f3FvTjKYXWRrBLd2qhqct7wV5NzPQgnDokapRXt8FFZuZh",
  "key19": "NNZEATkBq2q4mjkao5vveAj7tCFxCGZDSYRJ8HPSfBFax16vxkpEfCi9SHuGKtw2r96ZewaTjwJ1Q55d4RsK3Fw",
  "key20": "5kDLyUb91B3HYdLJXnPTMwibi4sL1pkt4YsbiiuupAFwXRYMQH7ZcasdZLsJFPhFB8NiYkNnzZkPr1RukB5ChCFS",
  "key21": "542WPiExwibRypBQn1Ahex9sDgcoMWtoE5cttW24gV8CynSNzx4xLtKBBnQ21pSF31G87Xx3UXB4G1MpicJ6UGpk",
  "key22": "61wk3qNYzRMQsXmcjcdLa62zY7FT4tMw3oCR1rNL311Bc72FJpH1tzEajnpNdismL2RvBS2d23mUcZvsf2Et8P8S",
  "key23": "3hwijFAFf1F7xcsFYorjmV2rDbqtrthCbRvmVLwTdJKkcNrEPHuPqv7agTBSdaV7PBRKzMKM2Qn64C8G4AT6epmc",
  "key24": "36ZXkx5XWofvtdbFkQvfjjiaKbYy6nUKrNHfSvrD4SjBPR4gz66mWjA3BHTegmB5PoyWxeShJgsMCsgRJHoiGdRb",
  "key25": "2zFccVPBRHwURuc3jjioSJ58nYR5GjLLPjFwjFFbR8wHsEqqTyD6EoEdvB1dSkFVuGor4S8ENFwoUr2RAhdRcqiu",
  "key26": "4eR1rYiKX3XCBmCmPJbhUPwLPXk5nBYA6m2QyB9q65BF3oDKtCVTuSH3W6zzu5injnWhfBNNkDTnGfr9wEyfiiJV",
  "key27": "2W4s8QzHFvqp3C6YG5x9BGmtNxNv4CLzLoDQFysQzyqVk6HgYuzMtKrwmcyCF6u9MtUENou2LAzAEJsFwNAvnL2V",
  "key28": "2CmZZZEvQ9gMBQ5yw8jfCrCjyEL3DKy4AoH371LXc7GiUnKytb3tPTUfvGkrLBhmM1MRvhvoRQPcvLdDRnaFBZiy",
  "key29": "2Wt5KTR7kCtUJ7Jt64gUuahzCKWecvDS6UivtxnJMRivC36JShUkudteprPsUdcEkm3AhKRApnoJHHEyXk4L7d7C",
  "key30": "2uvp9QoRLyxqMUTez3KwYRzbJNA4Pywjw3kHKiVEvszxm9iTxXtWKXJiA7bN5Ab4FdgUHVDHtrzaCmtmmPhqrVpM",
  "key31": "2Y65CowCtatZUcnwV46RzcA9W5A65o16cMKJ6NHUn2otYM9FR6xggnb5BwPkMbsfCbVQ6HHuzApsEYexQyVZUYwA",
  "key32": "5qsA3NfmSjDcypbu9nsbb8NqaDTixASSk4CnA3Djt7B5wwuoY3L1EJKZGXNcjqb5r2H79XLKhUx3FXiSX7d9w6yh",
  "key33": "526XwucbLr1txf297TyvqsSWyigQejZPD5fSH96tMSxzK5qBKk7ptRf6Lnuod2pGxHyXBNaNxLoimbMvXhQ8tGX6",
  "key34": "M2qRicck7j7asXUTmdNr8WVUDqma8ehigyMtJeTiGNacpqYphUGZVm11YS1rBNJqGkfPeECZkMvYgDeqMUBxhWe",
  "key35": "QPPBsSHnL3ZBW5QcximbGwLX6fZMnCPsXB88m7nF9EC48daFZguB2xYftfLV36Ah4x5KH7C8VwpVSqTNxqTW5zu",
  "key36": "3ALuVu7sZivS4HSSSyqKk2JUTE2f7cxfpaGHL5odKJAGDQe1QGnLB1t9sA4YguwgXQ2dSZWTZWcSajRv6SUBtWeQ",
  "key37": "2b1XHWbVobdShKcYXuvizxxuXy74Eg6JewRnXCtbGK8fT7z9ooCSkUjEvHy2HfjmukasVnJu1TgbPeKRzsnke5TV"
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
