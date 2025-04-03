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
    "5LT9pkBT1x9TGU8oHrxTbsaU63M6MdfYjVJNGmrvPFrpFmfAR1c7Q86qe1crXqVaP5mdHKjWmmHznXNynY6GTk3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N62Yhwzmh9V3ZUMFZ4cAt5DWc6keH8xGeNZVJihSrqUszwxxUXV4Wx2okt4g4xpcouCtzivZ9MUVqch7vHiW3c6",
  "key1": "3ySMw2Wjm2QyMbirkHEQFRUyB6poUgc3KrV3Kfmu27iAgFUv3NfCqQ5t2q6swxKghxZfvNqgRvisv4LC8MwymLTF",
  "key2": "fRkuw4ekyDwToVqfHKZpG3qqHpv5hGQ91jwSxjM6vyeNDMfUKsjnWxt5ZFDgZYkkjXs5XLzy5Hpyj3Wydjf3je5",
  "key3": "5HZzGqjUuwenA1qC6YymtgwLrkGZWbK15tzfDQ3XrbjXUvq7NC7zTfwL83vaab7T3XSm8HV5Rr8Mq9uvFcfpompA",
  "key4": "46y6tRtypvAwRanzx35oxkRt8WLDynan8c95DyhMtrgDhb9aM3uHFhtgdyGQJkgRBEEJhDRZRj7cJygBymXijAcY",
  "key5": "2tRsSPfJPiebC5RgDVwxU37NMKjSa9T9k8FMDmE4XSTaPTvjqtrAjT589nLt4m9eJiw6rFKpCqhVHdb5VCddJTsi",
  "key6": "keA92x8BTPq1ofDcAiCZPtPFKLaCWRQPmfSLevN82q6999ZyMSFNZwAb9bJFQ5MTCi7SKbLMyAkxTY1NzgqDhb6",
  "key7": "37s5tJYqoTWzJxG6kyw9KtGGvHse6jUYtU1FEbCdbV7H9kHRQHbsHhfJcRLRkCPd6o5S2wCL9sb6X3HPm9SMHL1Z",
  "key8": "FGyA3V2L2X7DeSnAkscC1P4zfciJdM9TSdZqxfUYHRgmyhAKLHoJYdBSPzjDyLMPGrKBk2tSUQX6msUwud9s8jD",
  "key9": "3daMB6PBqyJ9pVRAc2h4S82CiS6QMpjCaX9iuCJDRiDHRihUqZbpcxmkahRPC3FQqHVe1BxTsJtYmN1SoJXgxYHS",
  "key10": "3SUJbS1gT7Bf5vnSyNeAJmi63XKy9pMkmUYzEonAuLgie4XFmQaGwPQ9mUW9FViRbrMpi4hTBa3Cc986ETG24VDA",
  "key11": "2t9kKmHyFnvJaCqgH7jRZGinKNgJBWkQGDkLyAGqcZJ2TGySq3zYAAPYvu8bkUT7NsWVUfpQWtvLher2Zi2kpdso",
  "key12": "2G3H9An28pwJaYu615B3dVCHcgHHghr3t1rbDncekWzSwqPZhxPZpibFffA4DDWpPwF1gwCDS7xvDaJV4gEumtwZ",
  "key13": "N3mePEhqRhXRvGRVgxUKQTEkqZPTedJJqFSRJ3Vi1iJdCFJrYqBnsNpgxyz1q5XoYu4oikieGbsup6CvAZfMsQn",
  "key14": "fsUfiFD5vphj72hTqP5ChFrxuVuYREJjGScj6iAsu6rHFtTHm41JFww5bo7n8DQsQT6EWLWPhQoSyzGjfyVELxB",
  "key15": "5K6PbvgzoN3Au8cuE2Y1GuWMQ6NvpsLNpBC6FyfGxuWmzGXLTiPN29FQYXaD26LRJW9RyWigxi6vjrRw1EFXDT4U",
  "key16": "8HATMt688ukntu878ibZoGbcHu3WJpWPVaqPJJA3pewNRd9SFjBGqiondfFSkqyvawbfpv1Akft3rcZc5VpqWhU",
  "key17": "594w9iGNmi63R5bTsnMo8BSMxpZi9zRTFLewajkTUbz8asDsjJMpjctRfdFRBsiSfaQcVz7M9mHVbcYqF2GzYXpr",
  "key18": "2DFnAa79NXGnDcS6KxP7baGyusQ38QP7sKWn3N526A55Lk6ndzGZZHaBzZ9K8RQQFGs2NFbgMKt1sT6QNeYCgVvU",
  "key19": "yFrXYX6R9S6baxUGJm2XsJvAy3BDJXj7frjrVwdd4v8kjAeqvgE3GN4EmQYnMxxv9W4SQss7Wwn4ZJqN63xgHJd",
  "key20": "4tCQ1R3sa2mbt3GZt1vEjBhAm8TCpcDqYUTgdkofgNZa5hHXhPCS7dub3J14NrRwKG78XC4DBWqzXrSWbGuCvbEj",
  "key21": "3tktQytY346rYnoEBfw9qWVTannKF4SbifqRWojf2HDCQ99MtSiKatKgdLoTZ7jUCgL2hg5wqW48hsHwderiDpJc",
  "key22": "4zyFVNZpAv79JMt5xYWm2FY3qxc1vr8NLvtbwjrponv13kCMPxLrpXvYB2cqFzRxczycdYzEw1BkeForMDFhHZDT",
  "key23": "2NMmBqpwdi4MYCafVFFWDf68gCzAJhYp983jqGg9xf7eQHq7Zz6eXmrorh2qoHeSFeWcHpbvsSLFWtAiTVg8R75G",
  "key24": "5QRyvseg9aAq2MR9M9wfTmTfYCvsGpNjq1zTSPmG9iEASp6pQiZwPXwVravaCtfE35z7RLasDz7Phr38GRaG6SRW",
  "key25": "KXYMiqqpKsPpZ9V4VTdYoWd1b9K4wCopV23JdbsoBaD8syLBNgvQFNtpBvCPPiomJ4ucUmckZ7imibBV948Z8Us",
  "key26": "2ff12QNtUL9up98ZCF6TGbCRk5PMjSY2FoZs327HopfjMGTLqkj6dpWTHa8sH8cJthzbzeE8WTgmU3hnm47CSBMi",
  "key27": "ff74iyKs6sUg4gXK5qVrsxSkTHEZLRGKcciQasNVpWB39MPJgkvaXLQuV4ZKCEWidYbn7h9cQAaMJWvzfNz2mPK",
  "key28": "Ybf6ykifMwVhQEu9Jx58Ltr1qczfW6ihMPTS2qEfgFNVuTbggTqJrNyT9JCfUfJYxtUViC18nttM7CYqhzgVKK9",
  "key29": "1g8rQeQfxkW7y52RYFZEgek5sXKik1PocSq2wm1SNFse2DcD8gfh2cxuwykyGwCjrAw12rezA3wK3jYjKwnGHbx",
  "key30": "2k3biQutd7MddquUMQiDAeM5mp2VEdyVihgHXpbdQcT66GavdsWefqV46k7FsEakvfcL8FFUw8kb5hEuL8FY5BnG",
  "key31": "4YkzLCeVKJeViNKTXxG5DTu9VbHMy7eWN9rTrqQfcsKpMwDuXfrcTUFRpWk9srLMSJqnEFWSyNiK6wVqyeFrpo25",
  "key32": "5MqDvTPCphFpk4N4we9sQYMEbU5B3x8JB9EzLtmF1VfuBQRFd8YWf2d54SVkERN7euhHgKq6zqmtyG8Ak9wmktof",
  "key33": "35sJfoK5GPKNRRHWpyHwjGVQ9Fh2a3NztAAe15VZ6dw789diFMfCiE2h1s1FNc4R3r9s974fdE1uEz9mNiu8Hyic",
  "key34": "5CLAigjufDkdfwjdEd2S4T5RaGGWsbN4NbgVE7pfjA8yHgWq5Sh3GbnRhuo2QLe18pcWirt7MToHNJrLGT2i4kZM",
  "key35": "41xjcwHDXMVJsrkRnoLZFKakREiRUDVp41XYcAQZ7qySnHSG1vwuQuGdKBdiRj2tvz8B9JycjC2DAdYxyAUt1Ne7",
  "key36": "32h7bGQfhGkbC4gZYu4ujc7prCAEmxJUPVENQchjnHfDcweBVWZghb8qgUUqwV2UFsTKEaA3BwSwndrVXqV8aAVc",
  "key37": "3rFAhukTnN3iPKttH2e4U1NZUFPSGiKKUn994MegTmWBxrbW57hq2FzxAimWMehuSUhx5t65EPG9APHgExoc5No4",
  "key38": "2qZAaE3XQY8p4fvvr5eE6Uxt7wn7umgTgaqdQF3g72qei56UserbM2oNkTFm1Nbc2TiRQajpXNtv2e6sahcNnCyL",
  "key39": "7EW1RviAo2eopnndmUfsyWa4N4VRzgkFkzqUXcRGEuJ5na4cUWtZg46eYjpBWanQj4oCcDwVE7xa13gLy9bjUCi",
  "key40": "2aLEpfFjd1E9YS6UxQTkri75LbA5nEztjtT52ssHS5qh3pj1J12PbCHCFKcNuxFzH3f726zpQnPwQmAMHGgNaLmV",
  "key41": "J2xjoV2EEp7hKZHumXBLD4kwiskZEKe3hTq8xxEPPp8Jgt8F97EfAixZk6duFfe8ufgk7vmJiC8h5MvMQYEcpEg",
  "key42": "G4dy1nL3iMdyRqgxk9RBx2zavezArKyrP35yASFC9ppbDP6jUV8QaAd9APGAZgT3eeQbCLF9pLpmPh5nMiT8U56",
  "key43": "3JADBjVzSVbtuchupMBbGN3WqHj9PUCEXegC3DtUAw4xX29zVXGb3gSffoQ1criC2Ko7rmTE43Q63r7PEJ4ZMWUD",
  "key44": "3wKmaw16NcjEsQjYuhYps7jnDU8qJVC6Gun85hv8DUzaFwhH1xMuqmjeGtEaKmBruvi9GqZG3DTqYhXdZvTvpf8o",
  "key45": "3UvnYmgP3mf3mnEzZ4AH48jcFg8bTFeZArAnUmaZx8dBEJxRXAoetteAbReH6KnJLKgCjrsd4t6pE5teNBWp5JR3",
  "key46": "eKFMfoKN9xDBteQDmzUnuxyiYLtZ95aZooCxUucDZ9EJb7kjjCBWVgxra5oSL3QizXggQyroR86DDVW24fkyrBS",
  "key47": "2AGAixvKpQvMq77frAYK4E2UnxEruUrV8K8LSHrz3LMUfGCS4JPNjcc7apEZaSd1vgMMwWTGfuUD3LbHf6HbQSko",
  "key48": "24KdXhkgd9BofV1XvVmG9UpHfvC3wHE9PCsuHnSF1mW5UznCSaVfzdubQyxu68KqKtL7epiYze44X1FgQzqXyVNY",
  "key49": "5fJ9pxphbPFGRSUJd6qhT85hqjd4C44k87fCPNxUSEV6DuETABugQcNmNmCZxcgjrAMU27wg6VzgmeH3tSDSSLcn"
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
