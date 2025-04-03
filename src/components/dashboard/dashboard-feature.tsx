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
    "5xpf81Hxes4s5XRWw78H5Nx1u5fVC6eXU8HDSxzmF2LGmNPUBysJ51KxvgJu63M5eemAXAeGsaiBtxraLL5Curqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zin48myBD5cdCqKnU7xKrTdsuuLNoBCeRQNkUxMd37BjXSws1h9TfUaHpGWk3y6T7jPuGZYpSvzdBagUrntmMD8",
  "key1": "31Qu8skkJ5tSH9dE4N8mtWAJshqJUPZJZ3DiXESNQ26eGXiGDgwdCUz6yzqvcNgZs2HYdLACH8SViWw8VE7hmidp",
  "key2": "jq4JdWbdxJw3L5k1o7N1pqYtVfSd3VCPcLPQYPq6SuJKBpmGH6RBxSYyC5BiAdqajSyMoqhSXKtCRhvfceHHLN3",
  "key3": "4qyrTscSSnAReJs9ueWBcabUVdsSHuejMibTmhKTQgamqsWoMm2ZzeVGMwYnFhmjQSiBZuSG7D95WJ8atHosYoXo",
  "key4": "4udNUfbfBb6jZRWruEAyE3BmKqQQZUrf8v6jvANp3ucWVQSfNZjBwUjq4w7xNcuAENaVegzwqW5HoHwbxWXBDkLQ",
  "key5": "hFmCMoj2waAfqyV4qQxAYb6iwwtGSeX7Q1pGburQuCSEDXrk1Qr5pejHRt2XSJH9Q2uUbBeyyQeUmvjxVFDQEpp",
  "key6": "4Bf3GcU7NBM8NgkuLmDZSMdpyPbAttykA54RPz4ZmTqFa5i88QnMx4LdFjJ1BZT2MGqQXhunT5AJcGitrDKEvoA2",
  "key7": "UsLRtPZ4aGSJRDQBcV7wYeUVF6yLidpfU5GQdbYAbtw8p4Z9SWnom9kQHGxcYh68tvDg73PLDpyoDvpje29HYtU",
  "key8": "2posWtjmZcxbCp2CMrwc7ydwUb7eh5ZoHCLxJaJ9aMZ67D2UGioZ3ZwFPGQ8z8nxAgbs1rYDNBYHdvKZvnYsKKJw",
  "key9": "4vLseVnJAyLQHoJEqf9GixhuwcAHazwwqMZy7hMeNkCUN2B154XH15PmKapSa9QQkE6VYzeBJ3rfJFWTjkQXPyPn",
  "key10": "2b5FseiQDyEPnpwyo1fpyC9EqLx88iyvoqdNvsqvxSdSvCgLPGrFjibGXbER531rkiAJSEkNWwS7av6ynGpuBZkp",
  "key11": "4RByA3SgJPfAYXw4SUL1dsEZEFfcoU764XXHKX1QcY548WFu8vMU6Yx47g9PEtn3HLuKMVkqnTRXBdYZgziSzn3h",
  "key12": "4ikFKm5xs9AVDv7WzLh9XcFG6ije7FydNbacHSeunbYXdmiTMT8fNt8M5VVgBM98Y6opxEYG97LWjsUKU6ofbnGZ",
  "key13": "3Um41TyFdMQ8e47hfvvu9r9DcfKCEhXU91TDkYt44RTcyVqXiSx5YziSW2wWn6Y6aoeGAtzqwuupgA9jeLT12w1E",
  "key14": "3RLkDNvdbAwrejWKguyWJKSQzndq6gLYfxtn2hgUNthnAGsSMiHANwsFEHVYnF6CiiB1udSDkaS4oEDmvmxN8rtd",
  "key15": "4eSbrg77YbuBfnCoF42Goc65wwzCRY2jXDWD82Px4sLGBWVoNfS7E9j5zBQALCGt4PTgaZtW7cS5iTTzHYdbibFy",
  "key16": "2WqLcM88TsRJ2ZRxHyMwMN8vywK2tnbFFjBcrLJynBLXXRKyj3RPM2pv5sddxN61msZzusYmVWNq7Syw2tisPYaF",
  "key17": "5sTdKJCkJNGxUaiiCtoXg641Xy26SCqJZ8hRUwvzGv8CWJGS1iLHKQH3sVcYheLGBpBVkALyhzfcXZNZGEypkzuy",
  "key18": "4mnM8rmaowZ5tazZf4Scg4i1gngrfpCPapGVTnFZsCToNTxXVuSTy5fE6MAiWyKzNxs8DkTmmQiC2GBrPpmicihq",
  "key19": "4rzohqdiwugawBsrwgtHduhj3wffodcA7YKAd91QdwimW2F6PgMc3abgAoEEaGUxpTvTPjqTUtNmYLzxm7odhL9z",
  "key20": "4q2kZp5fCyRCFdor5vnfajHnZtqdvn9LcjgJusuf18CCbCut4n5jT8QdeWLokWec7RQH7fWKVTHqaQ74tBzpEoik",
  "key21": "53AtgtySMkBu8apbUW7gFoo31W4fEa8C5GzBkFaEqVaY5hytKjodNooqPV6YDfQPxFqstT9pEQaWky4gty7owADY",
  "key22": "3vke4gChZdCXTGgPsPGWMxapp8dLnbQGwHC9nUAKnFMhccGwh6XpTztwwv7K93feeNcZoFuDe1mv5JUz6XfpeRbA",
  "key23": "5mSkNe2jUT9X8SafSqP8nFhDqP6aKsLb9deHrXsx3kRuuUHANtLDHcJcZ7Wfty2Kt22XPYjdZP9q2vEhQDxeSpUc",
  "key24": "oGWekuyqfz1P76kFCozUScqhW1HMQNvmYGGKXD27jZz98xquPDJUyFbshfMhhkht4RhpdSgfHum5siQBLeQqukq",
  "key25": "2TMsyiLt1KNHhJJohJS5CurTkxoUndy9tg9ednxSNtLAaw1vYBsqhXku722MtRMfkFcYka3y6J8ZzUQ5bVtvHHnw",
  "key26": "t8VorSGnFSyg2sxyqQPPNjWAaMGHqxT255ncGnWgohZYNwWa4azT9mLSzJx8giEpwSGdh6SHLnJ7GxDdLap3Tez",
  "key27": "S1n8ebDpZ151kwWNpKJryamSpPYwzVZCwDYNmqKDMm1vg18LZUfHgYsZd3cHTbyx4voadwjz3Q7Xu8uGBw7p9jV",
  "key28": "5rTkT3kYwJXPmgnqgpj3DtdkUF5epxvjD1HgJcoLRcB27hvrZoniUTLPvnvr4HqSFw23xCoELCA8nhuYBcDbfPsS",
  "key29": "33EDvEwCSFterXZE9H6j86oESMH9X12DuqTdmWoe1iA2QPVYhj848jZNv6oZAuDdSGV3yVLMP8tJEwSYW4Ai7Scm",
  "key30": "5W2SwtCfXhmF4kP9L6tK6kkszpyKsGYXvbQHyLDMf6mTyFLshNhZxNSWU1VDYYumvnknvMFuiukTRgNozAurpjbq",
  "key31": "LHKRhx9yCcsQYs1CjpSBuJ6xMMimCGcUK1PSHEmg2hCWRhYxmYC4Rufh5iwLSNGkC2yqGKNFfe5HGeZuFmJKRAS",
  "key32": "4haS8T3wxCXxERS9RnpuEbHhrtYP7Ls14tDJhgRaF24PaxHYW5GwsR8FLUVs17QnJaPbcFTnqY4fZpHFmko1ASTL",
  "key33": "377JvBVouqnTFr64WkSm46VaFJQaH1oxpayjNBbKTjF13pw6C2A2nrHXtT1bkGBDMf6fniXG5aASThTLpDo3jetD",
  "key34": "4CuRzQaXSnbpAKNEJV5HEt3BrPp1xaUhoLF4NyBSWQ9tMxW8uMZFUf37rRMpVPqMbLQMFZo1WsQa2rBRukqHF7LS",
  "key35": "pVsrx34E9dEAVyY4sX3V6C5C1vWiYbj3amskwmpzdVbVxxXaWrtkoZ7YX8uL8nh5p575hijYVUxiRmkeN1MUWyp",
  "key36": "5uHBGLPu1gvs6pGRCAvReg5CweCM5Nt7sNkV1up9faWcbHG4YzQMcuk9StZng3qZSavf1MaBMDL1aLaQHrv1SdQV",
  "key37": "4WJRNBrTrGVCXyJZ6LNxpLKUMWyizMHGgkccPNzjyy4wscWtV67VoKvX32QHMjPrqYz9ZrM2D1V5DqJggBrzgphX",
  "key38": "4CrrDAArz6DFUdwyv58xYP3NokKr32oEyrTi4fPvja4Qi3KoBzbw7n7anvAuvvF1w7DjLyyaK9CMYhyySSP1e14C",
  "key39": "3dtisEKSUnho9XZfuZdpqa7u4jHZoKsLkqA3pPJvcQUTrTgvXQcR6sbHkeB5FNfZbSuk2iUF11QCXpBhiTNLvffr",
  "key40": "4suGRdap3po6di5tgwgpt8P8sqQp4PCvaZ1fNXCuzRAVc8e4GqSEbnrfvSKpfGRqSfuwJF4oAcTBETyKcESdoJtx",
  "key41": "29EuXmEtZzjeLudHmPbhpLLDkWZGQzAnjgS1dqWKiaqKGfrcJeMfFvxxZuEPZz2mqeNEGcJJch3wsZDW4UBbj5nm",
  "key42": "4tUUaQw6R21MXJ5V95pbGfEABNZEu62Dw39g9dH3MQbU2hwqiA5DjYjhhJd8CFCRgZ1JAyP3gD92RFmxeifipRWJ"
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
