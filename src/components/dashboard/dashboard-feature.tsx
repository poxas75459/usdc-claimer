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
    "NK6uaQHNpoc47H8KPjECWdZgLf6Pkj5Nt7UjbFvtz9FHo3cYQ2iGa8Eo8ouueepRdPDneeYga2gucrJ6RzvgcTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmyPXsEhqEbkqPsTRWLUZmQhhJ1tvCps4waWidF7ThcdJYDLhQyTR27dVrz3x8EUGMW5bxTu1Mep4D8H9AAm42H",
  "key1": "5U6UNWd3a4yUGGCWoJuX4UWPM55VpMATorNujnKotnUqySYPXrRf4LSnexy818jHoeihXrhFtr7BF176AYSurBsF",
  "key2": "52GSdeePaH97dSZtXBP26rMenoTXRThNeNEwwmBUDqFSXnmfNofcbtkk3dG5DRZBVnphjYf5W6v9xJDcmkhyCT2u",
  "key3": "57FzYzVCjnZXqCt2Sq8NspFTG7WzRyBiH6CGUkv9BBej2w2TMjABqcxauJGCMaDALtjvf3NRQQT7bcXA7xKHvXpy",
  "key4": "24d8ebGC28KdbGnY324hiUxxVJ9aWXmo8MKqFhZB5PXKvZhdDjEYDZ2ow4sdPt9m9APSWux3tmrQ1mpzE3EXmaVC",
  "key5": "5qmQNEn5ae5mra4sjiYLnK4EBrEHCdFwuYBWy24Lxj8Abf8BQvZbaJGPELSZTETy76bExtVAe22Nr3Ddfi4tEx1H",
  "key6": "3vYqVG8HwiuHXfAuiF2fHWJJbZCfrMxoVjWzG6UKtXe7kniizpdAQNkVjbVJFSHhv3BALtAodQSWZqp5zhoZCL3x",
  "key7": "2xLNnXa9Tuxk7gGv4QzniXo351Wmz8iD7U2f4dtxRC4ZnptBhNEavQu3BBKRW5h3NpiU3mv1FUv7uxBG7XEg47id",
  "key8": "yWEZ8HLbzNqA4jmrSVeSFSVbHLD1y8vaBTRxykkdqb6pKnYdJdc6J2xMQxgmmfpfvcDoDFGCUhpP5qyhV4Ww93t",
  "key9": "3zWdMcdUtPb5raD8bEqmFudUeLpZ1cVFHxrZhxwvvfMEYWN9xA8qSmPMTkgSWZbfCCwcAzhRqYhx4DmPzePEzckS",
  "key10": "5KcrKaYfgtp2RAqFR2zokMMysE1ZL1YCtwpY1piCEvTsnXqoBvwESZAsHadYuqdemQj3SG5dgQvenEVVzVBzfc5P",
  "key11": "5qfAPDfv7oHZnhyoEhZRMYXQXgHUe9tMKtSvCBk8wT4AyNfxZom66stiLghi6YVBGzqqznSZHPemhgLdLoSTawMu",
  "key12": "47c5dNwpjo6Vz4qtcfWWMX3BVesNAwuwns5UjgzKzi8xDUnpNZfTM1mjGV24RvaW6f7RNs4EUvW4syA2xs8sPn3p",
  "key13": "xkxP2J7H3vZyfLGjwJf2hhCHTwemfzaWfWV8s5gygtmpTk9WRn9ZXsGv38CiavV1dXKQoB1CfnfBfo9RMT3kATp",
  "key14": "3Sj2bn6Cvbp54kWHG15CFBUW375DtBjRqVe8hSYcZJDHJuRBmsTmLjRKMksLF4n4XqHtq8tNT1yyhfBXbvKTuZTJ",
  "key15": "3L4CavA84eeVC9KKRkZxn8V55DjvBy5FsRJ1dhBeo2j74nHFXF3FGWQ4teK3nYqFqqq4SQ9ae9LiVdrx8znyqdV9",
  "key16": "FYjVj4bZTorCBdB25NoCgJpCBPevraZkpb7c2a984qDG2gRyVMNti79CuXgKftDDFG4wRof9o2omZ4b7osH9Bqu",
  "key17": "yuLMv5twJNdcwAz2pti2PEjNvt7W6uW7zR7L68UB5B93jzGZPVJ3sp1gEVi8SZsP48wMUN3CxVHK1qYr92R1mC9",
  "key18": "2GH7Y5jxSnPmtGPNr9gtEAk6tDwhUwyVfX9wLJDmQJxR7yuUptKrwTEPBunKXP2T5B5zyqJm3mWhLxvjDcbSZHbd",
  "key19": "2jY3rqUZgNpVrfWJ2exwUYVoKqhSpfxNZVWHSnuy8JByNkrNr3iNzoYAZueDXj9PLB24TmMezHVpFQxTuyU3YdSR",
  "key20": "W1deZRqaMSw48E8p6yRfejUZptdGdF7MDy9QCQSeMmEv2FijPi1osHJtryPMMiQdkzYQAdXo5fsBeKDBWhuZZSV",
  "key21": "4Q7QwicR4SSNM8UuXT2cYvxzqXJvr3RLfoiGYp7z1gboL44ZWsp2tcGTHwpRvxooFFxPyq1vuuW1DcPJwgH23PFn",
  "key22": "613kV9m7RDrZ7nnaNtPSDvh18fJwDs8Krs8SVTQkkTvY9EfdjbWydm6sSF9WJ2ZgRv5e7aw3MJrZ57fqSSnbQmx9",
  "key23": "4Ezi9WNyMMMKwthtf4ntZMV6j33eDUGz66jyMe9XtPgV6K4n8FsGqWEjYB2h2sFntCeDHc124uZgbsxgKnBtHU5H",
  "key24": "rxqfhPtkiayYG2U7sWqv9QxLnsRDNJdJDzWGuT2esNLTWP8pJMkpNBCXHFRtSt9ivwKMbGTidDZPxrPdz8HqrrJ",
  "key25": "3tcQ4tRdwsx1eVg7t1VKVzoWUMaujnQfL8xys2zXzmzMikBYuhcvRzYzGpwaDimDSz2PhkQb3HbD8FUQTbCnXGG5",
  "key26": "2mYY3BhX9P1h4skHVWZfcVSy68Hta1f75JTJjdKUM5wcNTBFWRcLYQs7bXWQMn1wbJHhk4LDZd26jekEZctCPb41",
  "key27": "3CN4oC9CUktXPeFEnLczjuXPUnDnmdb8fLmQHUpm8hJGCa8BkaUVpzzkP2QZQ9j4ibDaw5viv5ikrE1C62YSZvwC",
  "key28": "yj3sh23snFvhzccmbpKS8ytvzxbKcT6Nm9Zxpdqq48TgfujsUkA4Wh2fgda4TqnksFsrme1oMH67RC4ck6wLd6k",
  "key29": "399XJqiv1SAB7GgWvpQEsh8nAG3L8erYX5HEKFyTjtsBWmEWS5GHH9ViktSBKP9tGJPQeif7Gbcag4JZS8nMCw2E",
  "key30": "KKQCtdJmyeDjDHSUgc5jdUVyHpBPkE3DJSA95KFkGukiUszr2cZDXCUqyeXMu2vkLvAWwdnKgvrVYGL4GL6JYPo",
  "key31": "KLFyN47E5NAVqci5L3qFBrzFnMsyGUVK38EgK466AV8Nd8DngBQ1jP5DCSspus5Af9bF1DE2y7GmYkEW1EWKZL5",
  "key32": "44hzrRssPHEX5GNHpT1gyBEhMiLSFTDxuV23MgzHaBNrvYawjBuL5yR4AkYMpJ8KJHonytFGhVShs1zLNkvQDsW6",
  "key33": "5s3xFsHgVMN9pyiTrbnwxa5b772f3SE6MhSfTN2GshS9gpkqXRSx5kugYcWTRFhGVyByc3SuhxL7BgybcFRyZtPt",
  "key34": "46i8aHRvVgyrxsoPegQ2TK346pNxtsXmosCNtKUQkFb67bEDaMnhHxXK416EWwfxdm3LTBEqfsSjydXrKAREsEY",
  "key35": "461vRAziKWZ8c9K28k9fjkbp4cMP1cJkQ2hYCfq3xfHyJFuNzWuZ3z77qVkFSeKPm7UnqgJ8ByEb72nuq7ve9Qno",
  "key36": "HuUqheVbenz9sdv8mwHHRNCAQgCBV2RfMBUMYSdtWL9LZNiVg81sYhZaFyvL4BWqnteZRRJVUD2V2xQhDCoXdP3",
  "key37": "5BGmZDHQ9PLfbgDD8BT5qA7inFpCstxBjBawaPNqeXtkrZbHfmEEGdqcVuV6r43Yp912RyTekZ9ksT8x999yjc6t"
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
