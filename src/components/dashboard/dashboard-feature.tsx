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
    "3C8xhvVU3zo1KxF2LEdndSCZuYHTsddCKRxLP145bhnRFrHQ5d2YEHYGF5JrQfrLhHSyVHhJNZy74XpRxBZHFvpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4Tv9aF3wn9EF4KUBDTm6oyqHgU4N7b7s8a6n3KxdkMWD8TQ1AYcLP4Snb55qrpeJSxgqzybHSzGdXLfqrs9Dhe",
  "key1": "2Kg7FEKFpSQhVrwHmHEgWLedxRCUvQchGBZzhiF2B9KRmBJKk4CzeKjFo5BWsYKR2ZoBPRWeG7o9MaR4BEvJ8TWq",
  "key2": "4gZ7JT25kxp14RrTDCnSUpSBkFZct4mixjxpEy5QFyDpKn8cMiUcsPyGqYTmhSS4LzDxSUzucYNRkVicrV2HcsE3",
  "key3": "MRZSFsZDY4bufS1VgzXGiFaxv1yiNYzP6c4tnpTFXGo5SdFwZVtsMyWbtAU7mMEKf4F28D6JTwCY9EwuSU7TJDP",
  "key4": "uuNJw7Fmy68FTxyCBQoecoKPW2Y7sNtffqGNteuiiiVDu5nXte3EFQXBGh3MfTpiPYrdZCnSUVVYno7BECeLtGU",
  "key5": "5fX3UjhqDfkdckB77xEZZs4asieZQw1vv6V7rYrA3H7GpB3YkwGr9i36343ZBEVhCrZNT1fZmpea1whLSwABXmS5",
  "key6": "3i2QUgDdcmSNRZ4gCEVJngNboHYpYkAyzWt8ik8W2q63iM2ovQM6WeJmEdmREThBVWmYgPmRGwY7isAJrko9Q3R3",
  "key7": "3WMutXitjDwMrq3CHrMyykAYxRGv77GcRyoJjgbyk3PkvmgtLUGHpj8xvFspTPxykFvvtP9NkPkK2u1kddWeYWaC",
  "key8": "4qrioUiXDh4pSqGTBWw1YUD6S1rpfgdxAQz4hNMzFwaYMLeSew2PLVqoPZq7vZSeNoxYr5sbE3ZHwUAAge66ddNc",
  "key9": "2zskP55KZh1f5FtLZkBCjCqGn38i5JL91xSKSNjWCxL3NjV6xNdw81YoXqWCKB4HXAzxW5LYhb9sdb3Jp2vvnZih",
  "key10": "2za2dLrqwBn2kitpvWRncfn6AQFWYWxfDikfB8spfGepEknSaoL2CpedvxfV7jRU9NdahMPdy4gaJwi4tdTCGgfj",
  "key11": "3uCjfsjrWG5wjerNodDBshKpEqB6B7sv6f9jwV5UAHwY58tgAWxN624eS5YmVAgQV6Pp2rAqBfHRTtZ1DhrrZC2Q",
  "key12": "4p649S2QwZ3NHr7YQ4JU9cdf3WGoseAxshQ9weEbH4a5Qoza1RNSQPV9AFgcWiGgJURTcc8jVspSrkFBGQghXxVy",
  "key13": "4EYLWwKVWwMJ1EwMypCEYEEfc3dH8teXcLTJeFYvskMJH5StxV93EJ7eAheuGpVodAeKMbP8Yw6tt2nBLWp82Da5",
  "key14": "52SZuwmWbNQKdp6KRiYzUQHfdW2bTwVjBJGpnYPAnLZtyhAQaRm1D6GrS4au1QUeG2HenmnMXSxVmPuUCHyLAMzP",
  "key15": "52ZzAqpwR3GoSorEXo44JyvcJsimh6k5nqwDF1fjHoxfftz2eFMTgkobbCRPGrApYxkyuYMpNtfiWjg8fMozuwmk",
  "key16": "5GUSiXREmH9qM9Gwm26i4g1LdrCuMqbLkwpWWrr7nndU4VARSg53kyBqqi3cDGGwi2BnffNdZbx88mbivAej3KBz",
  "key17": "5hFwAuqS4bfxymAx4KfYoqm68nnpaq4ZHwZqqmouoyWgedCHqHma7ELXMgTeiAnZgsWcDS2wLGJ49BJhaMfcStwR",
  "key18": "5sZhcSBq2TR6WsZYRN8tP61uAjpGEVEVbnScavK23C5qaWv5STV63LSxYBo2c7xrbtaqKVxuGEv7GH1dFqVxrdDZ",
  "key19": "38zxaFgkKLBoQ7bnFFLjK2ci6ecqAhsYC9pRBaMEZbG9GoRJuF8iQ7DJkHVfKAxD9bQ5SeRLAcjkRdAqGBYN99by",
  "key20": "4SJfDi4YUYnG2n8hoCKiLvZnLMUdCKneNDdGM27t8JrVMEqFFRFc8uaYN2fxHo5MkquuvucRYeeTaJQH3bffoKNJ",
  "key21": "bYux1A13MLiDgXrRUtqN8nxQanRxFEhFk9QEXMTyWu1fvALLLNDKtRNxSMdWGRFsT1yvFdrTgEHCNBuLJJtA5NH",
  "key22": "4fh1YmJJReGpV8AYNQy3BzT3jdvMvnXQGF82FpP9CxNNC7CUm3TMkmK9rVCF8vVM7kiEuZbEWRYLj7PxgG3unoZT",
  "key23": "5mhntGcopNeCewzFCcDCm1qJKY7WRzemqgGhtNJbwjeh3DWn3wvbM4bvubM1GZ9s853H34FWpmXfBhZSg5j3XUps",
  "key24": "59CqnpaaqR2Wn8cUCEdVxHrxwcksJPuGuiXmFCi3MVzY2RrumnWxncshnWrJURsPS3gZQJJUrwkL59D8zUGp3vdT",
  "key25": "362KvDgf1FHN1CQsHr7YPWX7GLNz4jkCtBqT8tDbvXQ1wpF2vxK88tgvhBvcGutHbcns4Wf5f7enVB8ef8TrvDvK",
  "key26": "3Y7ojHku5HPp91BFUuy2vKkipWykBvPYr6iwD6SPEYG4GQAfur8AgDhwCUkb8SLf4rHs92SkTHcPqMGkAtDaMAcV",
  "key27": "5FPFBc69h5sFkaYxAS9YLk1abC2Ju9ZdR6bdctNy3SeyNYn8xVVoqfHzdrMbTEUGQTFEygHKexghGFtwGbRLHxLk",
  "key28": "4CYz7hBT7XN84oM1WYpmymsPf3KfNjf1nNCBkEhw9uoLyHz7Zaw9xiqRZ6dDv1fopJP32FbzgRFsGa3F4kYx3oTy",
  "key29": "3zVoavnXkvpGWsjpZ13duoYVKKdBqobGCC1JEXn5FDRNk1rFTn845WEQyA5YPh267w6D49J6PgSB24Wsrftof4n4",
  "key30": "3W4dfyS3GCqK6KbheAQEoTRDCTurxxxJJob1euqCyTuZitj3MZpYr2CDV8MumFX5Y9iXpYQ1wLN56rMEYxt8Woxe",
  "key31": "5mntkTnRtcP6gbjtAt36LrZM4g969cCwXUDqA4eTgPMyeYrtdtPLnyjJLdSH5bQYv6bEggUSbhjZncfKvpgrTeqK",
  "key32": "63MnEZ9U9X2e5sdGRAz6CJAjfDpULqeurnyDLWAp4sY19dBZ2W8Umsk3SsEAULBwyfrZgHu5BkFbYnev6kS46PxC",
  "key33": "5G5SnPsfj1ZRLxi1fM1Cr1w9CZ5bCAM24tiALpMxGBSdLnqEAAV22JqvtiKZXv5fVev3ieeZjVhDiN85qbJW8qMK",
  "key34": "heQBiawjJfeqbbtuXyveSB6hZav3GgsLnHNBmiGQSXZTgATi7hia9J66UVM4ntSM4bMc1TnS5syaarUgophw72L",
  "key35": "3x5i5URhVALcVpiVL9spJuMod7eqBuT4teFsR5eHsLWqqcEraamGfsScDTvRVmo9GpDxkyhcEfrPmpDyQafdzMUG",
  "key36": "4kbUi7RufGgg5KaMx2R6Gk6H1ota8JcHuwGcNQb7QEtaBaMGFSaaDyiYjTewNoxsLxFVL3asgT7jQjMX52LhycBt",
  "key37": "qvU1K4xSRNSMiAsgH5cSNj3ojfXHyn5avNXoKyPPRhkKdS4ssoUMpk85wUxeeVDCHRvesVJ43SgBBgvTHZF7Lp6",
  "key38": "23RCFT1EEyX8wxV3pANBcoLXnsNSzCqXDckNoV1WhTh5xRBPVZhCxBrcpdrrc14vcqH5oq5BpJDQEhLY11W98wYf",
  "key39": "3X4HUcj4TrtnwSpvrJqYeES6njWzTQtVhLA5AXfutBke7wf1yJrRqEuuiDrzNsV1sQhKzCmq3S5PBJHxxUAahCpt",
  "key40": "5GBNqAifDczNS1EdGme3fFTyLNhtoFC4TuR4HXFwPH2CXEibfDHk8mJitjqAhuECiojUGP3uQeU4wNWXJcdMJViC",
  "key41": "4b9gczHKcVX7BLxwYo23aJwurxa32yHKMkYareWRSVAY5knXaobP9VGS2YHsjaTMZ3GuvgLg51RSaeWqvYKkiv9a",
  "key42": "5SdV7E7FnE25o4qaTuVxK8S4ZV1rTumTGtKmEGqn8T8F849TmsT8otvGoiUA4DdXGSmWhBCCAnPDv1tqZCgjWNKq",
  "key43": "2hfz9nXnWuJcP5tU85aKDiFTT7v4UKLGTpV9bEJMpjdHKZBRAq6KmfuwyXg9VD4isc2iBbHmpX2hkMxqkeaihDmQ",
  "key44": "3bFsDtxGBXUeh4ufz2Pnowsc4zYKcJzCtf3TesmCdeBpJhR4LLuKXXGrM3nDpPQU429yzRGPV8NRgkJk2CSRSnJH",
  "key45": "2hzmeGT5m3ge9fo6yPicdSq9ZigwuF77xizt5gwZuDqmfmkxJ1U1vwq7LgqFyFHK5sAhBXe86TbeP6jFSWtxJrEW"
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
