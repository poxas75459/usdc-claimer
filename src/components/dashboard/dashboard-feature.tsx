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
    "4zFrP1VW6C6RfAvyfuUSNCj7iv4Q85pQu9e5BsEywFfxzx2C8YNs7U6aSnyAwRtdP7jVb6LHrTS8hxvYREVpz2Rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w21h6JpN7na6iKvNXeTrdgqgBhbjmpGYCu82Vb3S9oZQ16e1EkSsgwrZBriP8RWEpKS74J9ThuWYaXDHBvbgdFX",
  "key1": "aUMw6YVvViSegAbFrCqVN688odwbtFQRHh5ib6gmS6cMHbZdanKU7oQQyk6audKkjFuZztRLAKRAFZoKsXjmyDx",
  "key2": "25EjHSoMfVrhju61FPXb87Usj73GdLFJUsfjdyiRsW88YFsqv6S5bYQwNnsiaHm5Ep4pEKaj5XieeAreBUZpiPhs",
  "key3": "5tGPaTDnLyjdD9rbtpJTrW2wzhRpMoxXUGfqK1bSaWXvqmEiYPDFXHNA5bAojbC3VJxQBdAKAsVjPRsSyuPxFvMG",
  "key4": "34JPvHrr7P4tTRZDXcMh4dXbLgJaTV1u1pdvCfukcTaQ2hcdcULTH1CYEhPBrNf9jh7BYAJSpkx7KHSeZhLaqh48",
  "key5": "5819SM1S1DPWa6K61xMowYFt8hvigGWn3eKHmBiYMUp6G1AR5ZxhTMaA9hfpwMK5wVbXmacuhb7Wr1z2Up3BpP8g",
  "key6": "7X4N733ATABf1iXCBMzYTBzFiExNVoPFpH1zSWo78VvW5536WrCxtS4BLuKgozUnUTMHE5zUZXKtEGGCagPvRKc",
  "key7": "FY5ffRjDGxiEe1Tqwe7RLxvJCXZtkh9HhRL5w6YCSCfJgPite7UC6ZHwewmiji1P1crhwJth2S8WHB4iuNnrpdx",
  "key8": "5miR9WJo4f5VYtxZeXtNYwsVFV1r5JV395Qr4ji9GufvDKPeUYGQFo3Jsju53WwGGTKo1tngeufuiZGa8gGXwV5s",
  "key9": "2U3s49gUt9ZVyG7vxtGta17pdDsyySKjPQ9MfaEDwytuMHtZBNrDN8uuVKL6aSzoQspaDbwgJ42oqZWNNDJovSvd",
  "key10": "29kmPJUhTnJYvzuN1Gpi2WVbJVqpyMcaZqCqG5GV2hnxRhjqDTZFji2Z1ib4LhxAd63BbvUsjGuJbgW3YQ9YPoy2",
  "key11": "dFe6VM6yhWMgdkdCYsKeFVFVYiH79io1b7aS8Ec7tdBM3WwpUNcBN7dRbVqqptRM8MYNvczs8RVDzCfH4d3abbZ",
  "key12": "3dQL11RSDN1iEBuroF467wdoZCDuhqat2BtRpkz5StgEScd4WvkKcvA8mHHweLYJo9FznDXsNmVmR7JdQbYFrA7b",
  "key13": "4cmdv2kJZh3MTGZVFHaHXpspbfzyF2Zn8xrkoYqsxSQFBRMiRrQwdcRxhhAVURF4KC82DCw3eHoAUuw3kjBkGbdk",
  "key14": "oqmnoFLb5pYkWSZ4RkADR8CNAhoWE5UKkbgbLsZDycgFyfk7gGq1NY6S9NFXH32EC31MA1F2bM1BCCSPa78bWYK",
  "key15": "5aDAh2AqjTW7gm1QC9xws46x6Ge4bJ2N36QGuU7V7MTHzGv62Sb3j4d3gne7zpHWzoKFcVv67c6VQEFaycp2MkYH",
  "key16": "2tLjPMwyxEby3aqXZct5FdyZnSa6hZtyM42CCwcrvoFvzaJw7arEBckyqK6F3ZPLzYy4dBi9oG9wMuNBCM2NAsW9",
  "key17": "ZuC7gcvHuLwaGNr4x1jumRGMW9H2LsujhGoVaYikCNjmW9W1uEgvWK5a1kQ72c2qu1PPyP1WYDCbxsLjteWRYR3",
  "key18": "2wZTynVrpqzk7e4eHUTpzvSZjRSyga4Yc83Z2PUMAzxcqKVia9FNUuT169WQNCt2kRsaBwvhoN2TV4MvUgBdpeB2",
  "key19": "4ccejYLXezkcFowVvjF6xVZgZ9Z5UZmro9s3M4r1GoRKqFvin7JV91UkwYmAnLRECcpoPNKgacg7B8CWFXdKSh6Z",
  "key20": "4k7QXXhhbnnBnjFL47gLiRyJ4DA6H8xdMJsJyL9PRvYsNFb1SdvLVCoEiP42tdYHYk8AEMCzMeCw5eBnFbSkSnq9",
  "key21": "25AwS5YjaKBsoQonTiTCbcA1V7pZR2uVSwYYDoV8LfLDJYjzf9FjVt6Lxx86bkz92nd1V1GBTbSRwRFfEKdMrBTV",
  "key22": "27tcBx2iAWKqhYhppAeriWX38U27W5UatZtBkxegWsokpsAkag6Sod92dhZibteHBvae1SdoZ9cxEVTRy4FZxW5M",
  "key23": "5nQbvUaeggHqJF7edP7ZM9yQqdumywFvxtEycnMah2Qpv5VTtGfoxiDrfed6MpULCQjhtW8ux3nTNarQxk47xboz",
  "key24": "4hXGXbaQRJEpMgMcNnPiH2943r5tsTuBJ4CP5i7DEFyxx2W8PjQ6p3tkbzx1MceiTowEv39zegjLiMD7jYLRbiYY",
  "key25": "hQ1WiXJKtQgFqHyehZgdpMfTMC3eNkvCnAGY5yRjC7EJ1XRe1Ug6wpv2erEfNB1Pj7DDiXYeETggqrjFdKt1ebg",
  "key26": "21XytyuPVKHBNeYceZycTNnMA6ghgt5Csqyj23Y7WvvLSwBg2YYs2o77g1YWMrpgdh3DAFHeSCQziZy6G5wi1kaB",
  "key27": "4N6DPgTHB3ZTRXdHcnEoC717wxnL1WEG6UsHLx9Xk9Q1qQMmrzqfSCG73vDGDJ1z4WEJXJhC9XA888yjz9BW86jv",
  "key28": "26fwUC3wfn3fVe5AVFaJx2cK7f73L81JnWg5byDaEXUNrEttjz5nCuAyBDyuupeWkSxDZstMwGB4Tfgr93n1sYDt",
  "key29": "5thNHRcmrLTSBcJ89u3Aty2C9DEvojrRZ1VmyXGcBHN1zBH16d68gEQHvXZMua5J6azyWpjyMQmeNAKmrCx3isAM",
  "key30": "3EwQffFWcSqdoKZ5nQi4VimXpaQgqsCHjJFdUUj9wZhorCnvRUyUqihi1Q3zsfmFaBdsXEFAc6iAvkkHMFvesiiJ",
  "key31": "2WcYiaTADGrof4xzLAGYNWraNPnpav8vTqPBkKSJGHURQoW2dtEvddeAEjA1fs2Mb2RzsngJTGPCcCgNx6NNohaC",
  "key32": "2WYbYD9MPGe8EtBJacXz3WjTvp4YSCsVrQk6RgTupp5KH5C3ZajVyY5okpcKHjjPg3rYxHCyCSs6CfNPGH9PNz3T",
  "key33": "X3vZJZqz2qinsyC5DmD4G7e7EHQWThjBAsHUmvsixfyuc5ZM8M2Q1nKyqPCVsRsyu6sGW8Co1EiVWYZJA7QnDie",
  "key34": "4fDiPnkBeKzeBY88ka23RayBoRrPDK9NcUy8zs1DpfVdD9zFpdnqArUsKsWAoKB3gcptHFLDGzC37f4pSwegXr97",
  "key35": "3qB7Axdq9gKBF5Je8uad4486FEN3kM84ytmukcfR1CW2ksbJuY2t4jGPHNPUiDryLmigKdAN7R1uXbXrhqBLZL6k",
  "key36": "BDmyXsPhebRfAtkGTmog3izMAXmsm1pPo7f7NkqeombLocyGrg6Fux9xb5dzfVqbGszp8LThovLQ2Zbn5h1Pudx",
  "key37": "2F117QP8zfmHqwRgNZrzq71aq3gEBZ6SUFAEA3Eq9cH2GGkJf6gy7XusJ6259VLV7KZbgk4iopty1rPNToxEBvZb",
  "key38": "4PwWZgJyYpLzy92ET1TuUtCTZoavd9geZHMXeN8RpZPG6rCgmFBbE8x8ebCCuxqDN6wXCNAWAMZHW1Ca7VG6ecD2",
  "key39": "5TshrLaEieCvs6Dxzn4WT4zC9myfuNj4ioS9SuEeCxUBYchcypv28gmJWCmoWWfH3niDa8exWtNpDgFHrgguXcU9"
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
