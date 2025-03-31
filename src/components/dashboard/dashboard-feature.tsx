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
    "5xB1LCECCYqa5DfwsmjVZwsY8d4HGwgDjh5WSFHWdDPLnBYc2dJYuApi3yk6CcYtAmZ6k1j5pWjV1wVBArJLu2gS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yd6E3yY3v2LipVowuxZKT5SwjyH2183X3aZwiLCo9XrvpP3Ltv3eXtGuEZ8RSbFR69nTAgVh74fFd2bZHiYnNgs",
  "key1": "4aXuEJnhgX6dStzubiPLHkFxVenDWw251RgApjrut5qGZVvNRLqPubNzSFBhoW97V9Q69tAm6XtU9dqotaLBmoFP",
  "key2": "2noRMSSGakvsdUjX3JoaKVDAQed11sREusUVdDqGFiYrmUSpcURZrGgaBxec2W11oso3fdpJc1L3JzL8nCLtKtsH",
  "key3": "5KsnznrUHM7vEiyGMYnmm9uwj4jhAPgDqLD7SiQ4tdeEmsaBUXaAU1t9HyFMFLHGuMcpvKciG3TqcXt6A7v9zVpW",
  "key4": "3uiPmE5wD4xBW7dtN77s3ACMy7kuAgf3PrtJragoKoFAwihgYtR6k267swUEBkYSH8jFjmQrp4ajqPQp7E4HUGUP",
  "key5": "uuE3k8RVkyM11aKLXoDZVsifgwhS2oB3HGMmuatfnse35wurviTFuxUYp1paZhqbB5AMjfevfGNqJSmTtgMfeif",
  "key6": "Mc8YzBUE2HWPKmkZBNVAVdGmiBUs9bRVyd76HcD3zb1KhiR9b3WxAvkSJDnxrTHtPMVQBj31ngdWbqD5eQxHo8d",
  "key7": "oTqKkfBRygXP3ktNfHNUPAZgDNC2LLtJ5AidfJ6yXy3KSoZouy4a4wjKp8JyUFVsL6aKiygcVSDn1YAEiXRJqa6",
  "key8": "NYvHjf2ebN5rkEBEKTwiWLCTuSGT5S6JoMJEF4GPyJtAfmsX2LWSqr1qDccgqsfwjMrLLGxpbvtibLQkPZ6tYyu",
  "key9": "K4aUEK4kyhzq81xpTdVu2j6ogxkFm4ZANMVKU4fd48hak7P897qtrAQdkTBFAu2Z4c9z5LtT87haUkjXneuahUr",
  "key10": "SYj7Lzfe5scWm57QD8K6ikoHhdZTWYzgcMcpaDtrUNwA2D9Rqb8JwbopjmrZPFiriZnyWSht7MLVn1oXUeexSyJ",
  "key11": "3GrAKKXSQZaiMoa4UFxkrQfiA3erGxLWbAHAW9uHaf8bb2XqKcoHGZg229zhzTevL823cSyZbFfdDJLbBBJHFGze",
  "key12": "47VFzUSMimfJV1Lqdqoa9H4UXRCWhFBH4pyffgJXsq7W3i12tkUfGA1NVuYYbXwxGWki8yBzHEj3fRDBik5ZPyds",
  "key13": "2gSAMr6ok5YA5zvc5Zkj6JaVvyw3TvRqkW2teCTMuAj5MDNHWoUE2hE9xnKisPvromYN2BaPDbMZHRxvAxHU339p",
  "key14": "5RA5RyNvM6bahVdopvBbPrNkeigRiRiaR5BHkFm9hfX41bRhNZ2x2kUKCvEw6aKbA3iHrfwNChbuzkv2YXBULXV7",
  "key15": "2YhW5uMkFj3f5ug7D34rKYCgwiDzzgqs5uXnzEN5yHFhGtwaYi15MebCUKkBMQsXENPiQFvPrGPKYVQzizHJos7b",
  "key16": "5g4fLxDt1SykVZoTtQrSGrBMp8nMavzTTSt48kn4QqDToFyTgkL1kKV892WXs3NAgKpJg9EMHBTea1J8pHR2Q8SX",
  "key17": "5K6Qc4RjfVujmpaupcstj2bJbc6MUD7ja73q6r9tBFRAJjWGrBoUpKSYxqeBKj6ifk1depbPZhoTkGCxTvtn6To5",
  "key18": "4VU4BsUky72KFVNecRvZNo8ecKd8VL86seKtMCwFLrPFe9nbv5mG7aNhWUBBFfskXFDm8UyeK93CvudCjomdZGQz",
  "key19": "2vvDbnDLXQBGg7V3E6dEJqqrcnCLNEBahbNhXTn2chhF8aXMqPHVFPnNgc9qwxRrXneUMprDGLRCtzgdBg6YLf6k",
  "key20": "3Db8aBr9kBUuhow5yicQ2XPFSnSURfnWAF7iNEGEpjvSbV1kgHJtVHHG3YaEwSJLV4nyK4JuWhwKcKzmT3qvG7Nc",
  "key21": "26iDNqtvKwM1rVcFEbSgZaUL3EhTtDJHitb4E7D4dRS9X87k63zijTu2C4gCeNFNTTrCuHAGeVjdJqdAs1naep98",
  "key22": "5FPKdkcmPmDg4iqXmddtjiF4tbZSJCQGJ9PqboW3QMJhSMRPfKXTaTgP9GDvC4iSCVobHUQy6o9ijfv2PE1QdGEc",
  "key23": "oG8toBGvxS8eMKuZP5k8arxrmxoTy5ShqxMsEyEsQgaBDfETzGUaq58DZoPVAjkP6gRpdWMvMEzk9h2AMGPiR5N",
  "key24": "5KZvvNCzpn379XnxsJ9yES59rY57CJgoyGDwdwTXC2Hx2UCYwtzn585TwjqLoe461coidGuVrohTKxUCAqQTy3GT",
  "key25": "3fWf7sSd7j6br5QcBkkekb379QK8XcfCXQh7MoBR2btfsRN3NTyVnWyZ4MPvmBvWN55vdZVtBbY9bRZuMHVYT3HU",
  "key26": "1BtUjUhLNmHyecmo3bcokpNH5S1GtaGGvyyBNBR3RddmcSWXwxJ2bti2EFWdYT6miBJ4Y88Ks4W6XyvxjB42yV5",
  "key27": "3gVMgf9gf6jJgAWVWZQ7tY8qWgysPuG1N2Wqp5QbTs8WcZiWBerL7ZYnZSYYJFhZXC7SZuzvY4B6U9qkVJJoTdhZ",
  "key28": "5RNA5Ub2Qq2LSUmpkB3j3q4d9oCnC8aRYPcmg5Jf4k7JQWByKjzTrxc3wceKKvPYbpzGBftdHxL3LYw2HDfH4TH",
  "key29": "FMW5nZkQaMRitgBcnbBsM4VwprE555H7uZCd7CMe9WTqu2vGE8WuDRQPmzRiQxMXacGUKQ2h7saRbXPVmrSyTyb",
  "key30": "25MeFjzJ1YN82yrj3qqsJCdk6S8nrnRKW6Z1mCA1KWqpKCJf8YfjfkerqnUERyeXHSHPBRJ4uBe1ybRQCb1MReXq",
  "key31": "44vRwCdSwdJazfDWzp2PCsc9FBBr6HuoEDDXyMh14wEEQPMJ3bRqxKTkwPpFiK2AZAFLNUJKqUomJsYnzFV6dnfm",
  "key32": "25y5uLrxT6yEwPBqZJXTCce8hVeqBn2VmdVrUTUuoR5nb4fBeWRzSbHLkQgpfUyr23dBeTZNjrd1UiKMEhzpE25q",
  "key33": "37f1AXfQET8wJG97JSDB9feoxD5HsKeHjaLxNDsiiaTFMsqc7s6kvY2uxh3PAHVA9a2LQvWPVYR8Hq1NvHr35v6p",
  "key34": "hisaTXs58hy29TgnfM6mFBWkSVXGoiS6fsvxMw9of1vUYGEkF1pivkJbhudQQVSv1agoYL4748rMZSqf5ibTgTy",
  "key35": "4HqAV7piqueEN3WJjxMKVwNw8ufe2V3YxjDamsKaT67zNrJTaKGMLhrBmtC7NQqduGuLzkr68vMTGrbZEQq3Rt48",
  "key36": "4uroG9PML9drxieEZhnXenR1SeeTaUfRwWJQcpxSWW9X89kJU5LgE8T2dcNfxGDdcrhSUS9RtTVmhV7G3hvYfC7J",
  "key37": "5wxQMDWBPjRQPa1pR5a9jRFrx3XNMhLuop4JeR4RXAsje1E7qFb57RoqgPqwWTHY82MtdwTkqCNNwg6nG3Kn3jg4",
  "key38": "4hMPxiVXMKijuux68SgzSgXCLojwc9V4AUCtLXVEeZSrp4ewiaRFXp3Ba71BAEPqEUjcBmvrqQe8yww2svftP8yw",
  "key39": "LnkeSyAqX9U6G5vcJ3g4kqNE6czZhFujXTLM9YReJLEjAAvRy8sUbYz9KnyuborFzo4YXQTUauPkfeMHuk5FmAf"
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
