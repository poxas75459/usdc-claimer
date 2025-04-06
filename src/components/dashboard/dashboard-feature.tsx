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
    "5rUo72hoCU5sAr4TJ6dco3EVKujBynsMVBswTdwsYozDNPxAhujDmvhJyDNKjgKkDTazNf5KYvcgzKoR6YM6NTmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBXGkmLkuVJwzxXLsHqqkEbTjzfDcfEmPH5qsRNuj6n5jjzi8pWzUjgAWkK44z9RpaPkVjLvkMgGBwT5uvKbJ8D",
  "key1": "2u1qnSzXdGxozEuN8ZcKiQJfw7QRuRvratJtBetqQXvLedM2b844eHdqLUBpWmTMk2j6E8RTmPQKwv14vXgUgzfB",
  "key2": "xHem4auyCDCnEW1jL7n4zgWe5YhfvkcRawRP1YF6nZxrBF4eBu8zCnF23Wmr4tF5rrSvuYBnLhApSvKzeE4QAUp",
  "key3": "CKpkpgWmGWqTsPuLqYDyaZNUUf2gAAdg2jrpYdV7uj8PEmiCHK2GSHW3EgwXbesrE6hsTvVPN1p6WT3MnXCsDYm",
  "key4": "44iEz2Pg7DDBbWJD58aTqFkcY1eEkSScgSZ5r3nXPu3AYcdT6oTP8ZM1YPtMFgCV34ZnZX6TJDfZip5aWEatcqGR",
  "key5": "Bd16kFWC65EQm1btLf5ZxjgK6i8nf63HKDG7rHSEL8bLPonWixfEZdsga9ibioZVBE4XCiDqzyG5LsZ9UiJTSjk",
  "key6": "eEigojPNcYerH4GYiywdGSxnkZJFdHmZ1VvpA7FH8ZNTfLjTuJEGcKg6ebEQUGYdC9fQgxJoGsbEFM8fzXmvML8",
  "key7": "hAXCxZ7TgUNjSvkB2M3bDHcVpzCWokwzUANoyRg4nwDqb7SyejPjbDTwkKxhgLymhYMbyffsr1uBruu55FErDXy",
  "key8": "4jKa4HNqpVPt5TMedGm6YKnHHZYKgPvEx5YQ1NrNncoMzFWsMqDWH1CxDPDLuTxdTrpPzSLVRjyEdRisFPFYHKX",
  "key9": "3ACJnctBCPKM4338jCBgQXdoCUQdSj4SBf9L9ncvJwWTehoG4WdJTHAG9RBNunA4MzSsJAPXRd9ik9zhWU97MQP2",
  "key10": "4Z6n3SHtcf2GA1wC8RYcY4YWmTpxE5bvD5CdCtmU2F9wfr92YVkh2sbrLYeUMXUwtWbBY8tHRD33FTwUu4oZdeX6",
  "key11": "4ftuc6ZcdA5NYaCFy3x19n5xzWYHyDKFEeiyeUssgMo4qsEL2JbYWYsZmpnKLETUKpTxtrHTnSgJuUD9vh3hftvX",
  "key12": "2KYax2CcRHw3ZEnnrDQ5EBZeDGVPm4eG1MDt5rrvbh4vbgAuF7DcYhqUGgykcTidAZhLfWGiM6PfU4nBRBuhT3yz",
  "key13": "4mQW5s6jgggc2Jpi7rHm1iprpyuydg8W91SLBm6sHpFHy2QbgeRmtf3W8mkrtuvZzAMLEtvHoiFcBBM2My1iJsuZ",
  "key14": "3N98ffHDVrDpGs2wbizfhzuzGqTxTpiDZNrGmyc2GkGVnjYfSaoSnYT8DkYcXn9F4emw6jWwLadyZtWAG3BdFfBv",
  "key15": "AxAKTbcYLnDW997cLZu4pDRASSC6A8NW1fffd469JPM1ttPX9TJeJFysmHw163dKN3FDoqpHQvgDZcaDjWUi7fw",
  "key16": "31dy7KBQz7UHxapEBqJLFuz9WEBzbgRoFNBZnz6bSeSAqqMBwUPJaw8ehRDSErm2CvorpqpPFXH8HoKJxGyt5cM9",
  "key17": "2PdNpA8s3JxaXCLC2pKesFwpaS8EKVPPdM9BK9jkk6WEXdHuyW5fCEuRP94Fcrr33RknCaLWcgWCYMhQWH3o1XUE",
  "key18": "4hFgg35yTqLKQb9BNm7XvuxaegQ31BbawiU7dfBWgwmFB6B7rdLNUPb7F4zW3Vwwbij17UaieKUYrQV6fpHhWbBd",
  "key19": "U5cDerxs7MVUKwcVrdHnnsZFxXr4FskfPZv6STZkoT6vDF8R5fzo22omvBszdyiAbTcpXarPi31GaHRWKx9XsuF",
  "key20": "2E25Febo8zuPThU7i5dB6jZFWP6z7TW8Xh5CtMNyu6caJQ4fJw53sb1MMsooZcqeBCEzkaNcCZRSm8ZP7uu4QbgZ",
  "key21": "tCLWjaA5j9Ng8KqV3MFwVSrYEie5GbqD4ZBfiRTwZSRyFnchkwjNKSqQgW3k7cwLpiEUknXTSivhEEwPc9cCwdA",
  "key22": "4AXQ4XQvzry86W5nkQiRTPoUTMmLfdv69oPEGkPZrkZjtcAc8YF7gqL9MubNiTgaZBarSuQci2Ly3yJ6kuP71K2k",
  "key23": "4DjRuPbY8LSL8YWyTdhmRCwESeCUx6PLY65n5yC3KbCZ8tenSVxvZ3z4rgwLEaDSRAUfFaX1SoaxsUnu4YkD8iyu",
  "key24": "6NoeKVfZaoqprjF2wYUB8Mdf6niwXzn5vnJAi9TetaQBKGM9aBznbxitjVkE1YHHNPPMv1qWMSujRSySbjV9JfT",
  "key25": "3dr3LSadXwj1AGJRh5qmq2Ph5T2KpEg5UrDDL9LejhyTAGJQoqgpDbwHpLryjA79cMe6NfUUaooNLEFHWqGoqAXk",
  "key26": "2HKs8K1PuKdjXWgAGtrA61EndMrCaQ9o9x7FNLbsxdhALKznLozZNgLsUNs1Ekx3VFrBnE3Rkk98MpFwnLNR2uH7",
  "key27": "373dy57UaAf2K4mufcxSEUwGvmaapVhZdn4CW57F3dA8UErW4ku5DtwrsQtUeuGdfwAFtgw2MpZn6MQGKuyuqKeE",
  "key28": "46A5QgRJaNveszwUhMHYQ86w9m5FN3jqTQ9km53RBiTa9Qt29uVgtgMPMs5FwUqcgcxZAtfoLq6XbdE5rB59cGvb",
  "key29": "2H17Y3irQLNYKz8SapNzVxNoZPFWEPekkFvTk6eQffYjCMjddiBZoWEQxUo6U79RxTcaAVejZVN2qQwdR2Rm5zyW",
  "key30": "2dViGT6wxDYjCQSmnjLqqYTutKKJdVvFTpeTJdvfv3FpYuT37ZL6tQEKrD9ss1L8s2XYze2r7P43h7BamgMCVWXv",
  "key31": "4Kmca5PJoj6ANuMZMtgYiTtmkJYpMrr7MTFTUD4JfUz66kxV8JpsncoXbygKeX4WrcP1Tsj4aEWUAecpjiKcjW5",
  "key32": "uovP2yUABSyBa4ZqPigSKx8jJyi16Rg2UjGHnxUbXkvK9MYdqfC5tSjji9snhqVuGbLksawAkcLZKDDLSBPtHik",
  "key33": "nXQgYU1ZXb53DTM4d9wUb8NxDEYXEXnezh8erxJv5HskTkg2czHgmH1mq8RaivNdCPEmDTpCoQwuTmiC24X66p1",
  "key34": "4gwNgUDqZzpz9EjSwCBpBFeyckfyhKqchXBAbBv96es8XsUsqbLG5YFyfCd41wrq2416y5DWGse1ZHGPH7MBjYfz",
  "key35": "5TGHgmDcDEEdeXxKymNNxFxNToNM3CXBVTgukq758d7orpxXRx8TpkH5jsZYMxWcEcp1J4rSG51JA3nZFdoQB7Co",
  "key36": "35y6i19faHosXnhsBu3wjTV9zttQJYsajy7xP5yr1SvARmUsSuLAL1pyS15erjqgbGSvi6pisbDReDiniSwqJCHX",
  "key37": "2uZgsrjdaR9hhHFFs57tS1xSPQjHHwBYf5LvYFUi8WPDrDYqKyzgDCfB2onEekGtFiJGALb172PBva2hwS82dscU",
  "key38": "3GtpCyf9aEBkJFwp4YNEw9GREtAwbmZmBXt1TRyVFTAoqqDjhsajstMspsrVeuj5U8BSD8qamEQrKxXL5dx6naGV",
  "key39": "3GX5dKpLgnXZjF5HwRTXzSDMzjYTKyGNo1YnHexJLQgJR1e9uRYT634eXjn88JWYdxsyhVeyVrDLeUpQVZp4NC2r",
  "key40": "JtisyNvnx2WdTB7rwuiHfLguCNP2ddzF7hG19uUtCvS6WQGMXQgeZHXej7pUmiVhzfj5MVFWG3VmHzUqgayyJGz",
  "key41": "2nb2imab2cJYc16eX7PkHcAjcVkM6xF6ajakwmNPRa5fAURG9P32vUUjRU5GRtP9aKpUDarvbZDES5hM777Xf9kX",
  "key42": "4orZNxMKWr9Txr8fxdCCCCyHLEExy5wpsXdF5Bvx1Yq2xgd9YkAeCz5Ne7UeuYnVjBhsDYjuR42PhjkhTMfEYF6X",
  "key43": "43vz573Lo87iRjyFk5PBsX693ScJcZLrcT64RieDxZTRaPZJF8jG7nPhCx78Th9GNhRCSVahHYbisFzcrRLTEG19"
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
