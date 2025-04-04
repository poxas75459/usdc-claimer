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
    "5vKmX1ynU5DScAp1Tby5eZK9pAFiQmS2iwQTooD5MA9eNa5kDSNHBp6cmTHb34iXG68obkscaWrNfxX4hmQNVsFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WyJpYrb8GirckkNB2GGSsU9MqjT8YvAqAg3TtwCdm1RaiFbkRjvnvJgh6pKELT4F9KZwB5fZxZtEHd4UaMXBiR",
  "key1": "2WdH7zJhzvKnonJsfZhCy3EnVPAoGhMR2wS32aJqswB3ak6cg3sY6kq3saRm1GAjFppWNWEPetnNLaxTEe8hsReB",
  "key2": "51rG2GgfcAYkVxjwwL5FQM68pYx8N5RGYE53wStX9D9zF5tJWHQzUe13CWJUHNEYCRaMu6EDmfxAjLEjTk9P5j7j",
  "key3": "5FmdCyQVmKiU9DuHWpxrbBP18c7DaeADtSxfzbuBMpuzYdg5s94tS9DsaFBZxEkcQJeqBfFM3Ceqyys36z1ygTDX",
  "key4": "N6kR2B6SsYWJGxZnnGpcWmUy8ZuZho7K9C6JQKxQZ8vVfnxBZ3dMZP1KJBrB7kJ3jeUeFYMV75ocBp1YNzLrmD3",
  "key5": "qQ4eqeqamV9SJ18jdNvkeDgpMo9pm72QyBwb8vHGqzSmW7MSbXZkbQjiX6cda6x6LK1K7V59X6qPHnad6gSuvTa",
  "key6": "5LB9VaLKzd1LtL2nvEUZKCDuXAUGCJyHY96wWmuWJRdQTJQDkSo1JMpjKfuZZckJLFhGyXD4ZxBGq9kDJxHbPzRG",
  "key7": "4DkdZxKcwSyRMNJRPFh8HvzhWTMjFfvwi7Eh9MjL3eviAvSvyd2Se5MBj8EqAcz8FAorzzDPZFiiehbh6mgaHkeN",
  "key8": "2KvSvq1e2n1mqzUbT8nJSV9VqcqwFcEUysjtweMiUWSCQ2j5hCWsxdhDuLzdc6eH8bdWeJHQ1rvi7BgA2RB3LA4v",
  "key9": "5djbZgFzBtyZVKWYy8YWhXcb62xYF1mFqa1EEj1h61YG2RcR4cBmgqLoYWL8mxAEQjP7oH2zpp3Hr6tSYrDrCSsH",
  "key10": "4Pus9bZgkAVnxw2BFDoSewXfDxvJZXpwkqbpfroMPtp1SijPLTUimdMAHA8v6vE1St75b2RGyCCYHMgNUTLbk5Pd",
  "key11": "Nn4BMD196MWtEPevvafYWMwwd9NzqwumwGF9ahA78PA8fV656krsy5LQWKMXyn7quXscogadyxfsQQkV1HxgKY5",
  "key12": "3HBi9q7qJbJN3C1Z5VvVZVMqBfW9ft852M6QCsveCosLAJy5NmQxaZdTUy6yUq79zSemyabdc2hLnL3KDY4t3Jrk",
  "key13": "9eAdECP4i9UZLfeHm9jfdVrwcccoKJgkapqQ6fVL471oGePFSR6sheYvPQWknqX2Db5ssafpkZNFWpn7D4NdRFf",
  "key14": "4r2E6VmrDcEw7pxer6M2gYFhuoAJTk6pxazFzMXG1qJQp8QeafFyYqQZrH9TyUD6W7dsv91TPAQb2z6w6BfAuhfR",
  "key15": "22NmGJ7fE8BgVeN7GtUqfyUr8HeDjVWwtNjS4NhxBN2WESTVDu1yJiZrFD4Qr1QxVmND89i4aHQXtJXkJAztLZHx",
  "key16": "3nZokDXD3GnXwpyGccn1ByKcUKoVb7zgpu7hAyxDbjS5k9WGB2tJPeNaNTxmsFeMPq5k4JNMojpHHSpKEpSBUYgX",
  "key17": "1oHMAHKgDsvox6aJFFG1yt9jREnNK4wzjNpTVVmRbcXviV7iYehS45CWxfqRLpxkiEZETtr6Swj2p6r3BS7zS8H",
  "key18": "5Z4vF5ynN1PFdUrTCu2Un6RJMaUCkAvaTB5tfvPZS5mAcKm5Ty7PpM1BGKn69dzEKWSUfrwR9JKnJyZivshpPE1G",
  "key19": "As59UWWtk9dnteF74UPshrLKdSo6KYb3BEEFAMppnAQaaA73nRFGhw7pXi97NYqdDWPZx3FKLCoQLKYrtNRK3x9",
  "key20": "39w9FFUGqNzrwPQAUdgJp2r2rgWewpiaCpeQhA89wNSQX8HNrmBsST4yQviduEvKJHrhvaBqY9QqUfxNCY7Q3qP1",
  "key21": "5Wumn77fo6q1dMn7LYwQJ5jJp4pnw2NCaF6BE5T4e72Pd3VhTmWSeMPj3nwFWYSSsWvhhL6A6xvaxuY5pbuGCszP",
  "key22": "dsJL9zRiMdoX7Jzs7emce6UHQedRjGjkUfTbttA67eHATMc1tTYH2mNEF5KvWSeNRXeKFnUxApX1okAGkEF9sy3",
  "key23": "57Zq5UKfRGnpdQ5TqVbAaexxJDWH3qehaXWGQsARBE6QdCcX9U32YHG8bPbkow58JxPxBmiirjAEmKPS4gsQeVVc",
  "key24": "icu33voRtDonz91qwhVsnW4hsdcvy6mW7V192Skbk3Lc1oesdgRKJxudhuiYmhFXj3yjm6TpfMAukaM3ca8uVov",
  "key25": "4RUPrWffZwSBhgov6q56wTH58LkMKBokrRK9oqthoJeEUsZrMajAMdHeGQnievF3iJ7RU78nkrxjE9Lm7S6goEis",
  "key26": "28bckL4Snr29c3nqzEK7KuLqxi5bFaVgUMgLeNcKxWTZr8GmEejF2VqmaESoHQdps4t37XXRyjFJKy6u8Me2wedz",
  "key27": "m41o6DiCsSBWGt5LiunTAtnUViv8Pp9wMkoRwo3hTGyHG5mPutZaTaZj1k4wWrQktQ9tXLa1otg4ZN7bJtSV2nQ",
  "key28": "5NbsriNLqaLCnSFqJtQRMJuzGtn64f1GnHAjreynYyPpfxmS68aapAyCyYm6cxQSk87MFWGMZc8jg4R74jsxwvj8",
  "key29": "5fjPf1aPU69n3cRyaLvdF6C3t1iYZX28odoZTtWPpmrRabrEtoeMuYWjbzo8ftMirJ8TZk5PeQkWHfWr6sCGGxjL",
  "key30": "4nd6bkoMqSh9eUh3Q8v53rBSfkwshq26M6Uge39tZwNQEqRWp5T77QRBRbtYiyUo86FSXwaUdj97ACXnqC225NuC",
  "key31": "3WFVY5MhGfJp6jEBpRKdRfpdtPd73qmwVEuzFesJ1NgmUXa4xCpMKR8yM1CeiuUfAKmi9f1Dqf4LRSoaqgzK9k84",
  "key32": "3h6atww5qx3uXYysSuheQaERLWHEsVrx3KEQpbMDw7NG6EuT8ifWfv1eUQ5cJzMewJoQDiN1vHECnLkHQnX8tfd8",
  "key33": "4rYNpK6Qhb6Sap9M3zCsJPv1Pfs6X8ULCcmByjwmsyV7SofUg6Q4GsLsVaQDmYBnEGJNFpBmdCqarFANXtKKT4xi",
  "key34": "3QajEWxFnqHdz1eFbPmx31yb6eZs4WFjx3GuswFny5KwoEKZU838fkkpRi6NxWHdtf2RepaGh6ch2r8zxEPiznCB",
  "key35": "5fBfsKzqKdNGhwLPoNZzx4TvsUnhLhzQnkuS4hqE9RDHVG6sDKVuxVuz6MAHkFvTaeJqedCDy2uwDUjvwV9JDBwF",
  "key36": "2dwLBwnUEneFgQYmLtjkPNWRfMPwGrJ9zL7aKHw7fiVHC9dXupsouZQxfJvtGEVwXxLFigGYB81eXXnhJePakVap",
  "key37": "2ndP4WH7n3YKamdyruHRQA1RZWH7jqfZPgLQuqVEcE6zW8s3ytDnTepzjwNZto7vnRGJgdyCAkFC2EwxpFFXCxD2",
  "key38": "4at2F1SYgtGrYRMFgvXSH3GSXMMeb4WUqLW8xB77qc39SSwiz2DZJvCR4tGhkRsTPegUSTZMmXX3MPdSFNych6am",
  "key39": "5HkgSDHMEBk355ZowNhBJRedPV2obHPe6iM5hCD6msbxsb1SM4NrQc1LkPdpCCFMkEsWomwgaeTKEf9J4H5bKW2d",
  "key40": "49hrk8zyQ7q6Liqi4qAiAdYZPUzwQTcP5pS265HUWXaV4L3ie5vXYdzmHyfpAge86fhp8vjVSaT4aapANJtDQNFh",
  "key41": "MtsvXwPK6pAUsetyn4xNWn25XF15mNwu5NL98MSn2tNLPNnRV4vn4yPrhEqKKVWXhq9c8fMnWLUDzyaMQU6gKm5",
  "key42": "3VcfLDsNvCBnh9BegfJVnbBpLXK32gegDmWPr9oe7MQGBDrneHHNaDZtoQLjb8WkLnjhbu8gPrkNheaifjXgrGCf",
  "key43": "3MQKdQdeZVWbGYwrTEdnjNjeq7szijSzuCafz7e9YDFQ3Kc9fhp8JfsLMZonY66V7ws9b9SdnwTRyxK18upppwj6"
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
