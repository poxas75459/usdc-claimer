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
    "4rKgxsbwNXScZbfo1Gt2EzFSU2n9ref4uq3DxRQb6SM9yvMpduRmyTnNSfEyCRhGrGPetfCvttfAeo6JQdehwpTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwCB2yEWy3v1KFSPghdRaZmBnJiL8WcnyJaHUQsR5S7R6LgFyp8eXzg6cjo2wtRzJ1njywyhM5h2cQ7GpwdriNQ",
  "key1": "48yBRvibTqTEaSpxDbeetwefA3xFWx29cScU8DQwg2wkFjRDuZDZSjVWecs7rCi45xB5eMs5BVtkRaw9rt8SbLWb",
  "key2": "5fcdGuoPgxQ73aP8V6FRrEJnk9NTwF9v7E7ZpgTNTrrLtP77rMnegGuGmAndpjDN7HFHwSRgstsgBCRpQo42UaaZ",
  "key3": "3jMWujvkbUrZmc2FtL1XowZyhpHeZTRtmPzecrUmjnfhJYx9iYnyDfuYJveHBai3gho5vjNWeY74i8nyq33sLj4D",
  "key4": "4tCALxrbmsQ82CLm6f25X5GboiPwpaqvUfjYjKSBL8NpKSAMPcNiEx8yPToFZFs2nU2LFLti4rf6rcrKuv4Uazv2",
  "key5": "4wfhAJc8f9soa1hnMoyEN1LJ1ot5esSQrpRuc3XXJxYHHgWefvUKYf7UF3LADGXqJJBpD6sLhBx4SBH9CrPuPbEx",
  "key6": "A2vvDAhvEF44DXAyVptviUrjf6CsdXG56iMeqY2GghN3687CBhfvfMEgd2oiikXqrTDvpLhYYQjpLdEzixHtdgD",
  "key7": "24AdqpdTWfhLFA7BYZ6YZguPUfnFhwKG8Aj2aKZPuRj18vL7WHFaM7DyJj5jWkhmaJ5UegCpWcvhw4rLMNAgnZQS",
  "key8": "39iJmSsgMYH7NmLQAzp4XaTCPkveSUZLJEpmynVZqdDYdCXxuyNZ6AbkvNaVwxDSssnw18ABVghrEVPeFxCEtjx2",
  "key9": "2pTRjFGCFyXt9TkLVGGVqHYfiMJa72rs2wTf6p1MYprdQNZPXPhSFoXwhAYC31oo2KkKgWMjp3i9wc2MZRR3KjAU",
  "key10": "5ceU5Sse3WNm2oLbq61vxsGeX9Yu8BNqcR5f9EzMagbPcQnHX16kdT8AiXF7GVHpoNFzqAHLGHuVAB9oZW4wkmCD",
  "key11": "2VjNkTSTkYAmMced7na1iHiN2VDdn71h8Dc1L4xBWPspNPRU6EqhyH5djp3zYpvjcU34ekNTrmpmD7MsT5Ca39tq",
  "key12": "5wc9WRtf1snDUC9fQKicUtDKXuCjfjAp8Z8Y8fiZYmG1964Ym8z5p4gc8tSmJg7rRf5PQLDBC4D9cbipT4tUjNtp",
  "key13": "rhYyTpo6FkYpBS52NTUB3faT1MDKeBu7TgkvRxng97pybYAimH72a2sj2kTVe6iPnmS7TZ1iajk7bN2wbnPZG4o",
  "key14": "2QqH4hHXkfKaTaDauTHCujGLUc2zqqgkXak6kEVXFix2CFrJKhiPTFwZjsD1hompnLbTLTBnqJpfcDjreDuFsHDL",
  "key15": "58a1jtdKirHcooRhWPx6JJ1nLm7JFRBHZLRQHNGMtcAA5TVmLbvFQUrYEstHF9Bq89stzUPeABnscCacE25M7HeH",
  "key16": "38LTzyCwJaYBKPDs6NBGqwMGZxPoUsZFcuhy4frjiRUpgznDK9TyWeyXhkR7aFg4NifnZ3zqyjud8WWwoBZJT57S",
  "key17": "5QRACPieUKYnUKYRA82ghYuzjxnH1y2hD4AGrEVVN8RgYwBQcfcxrtVQ5HwiTHJSvptRvAjHmMW4DM9xtkiMtzTU",
  "key18": "5zZXepjw9ChXBq6zNfJqwDxmygfGFFNQoHQziywGQWAetTtTuPx6znoTWg3LvRy9ETPxm59zC5yV7j4zv9bGsm8g",
  "key19": "2ff5Y2dFSqtMvgXPcSVMTLoF3XBqtUcVRfkHc9iofZi8esTAPZEaK2AVMeEB7Xkmixty1FsX6XybYa8kVBmVo4nV",
  "key20": "24waJD683TVb8GyY3jBnxjZpJfwZXk5Em1avUQE6D6LroMURF1jefCPhzuThnxgM8SG6897kvErgg43Zqy7jSuC4",
  "key21": "DNQ734fNp8jFdyxnEMu3Jax2dZjPQ3xQ3fMXGRA366F6yQRjWGmSfo9duQ4txZifgzXwTAXngT93PrLhhy9sAyy",
  "key22": "3fp7CSD6MjJvLUcdDbPYUAkZ6qh1iqYeCBJm7ij5fnP2ZHDPqEHgMANf7QtWkU5itzU6Bjpyoh6fAbL4VUoSngBQ",
  "key23": "kfPiRc8LyvHHvPNz2M7HfySiTUNJYJWUMCm6xxRRXc9TbaCbiPnnUFwyaZXvZbouHqqEixYAKkdUfxbvcXcTSTz",
  "key24": "5MTqBPJhV2bmDJkXqwsywWD3HijUz1x54Pv8Ub8BydrLogjn5LqzgbYgwz2gm4UKeoe5R8HNWfG7MGDiqGGtLUqb",
  "key25": "C7CBELpnnbgtuwevK29VNeqr4jQHhWBjozyKcSLsNMUvPuAkwQnw4LUV2tYfFs51N7A1JhwY6o12wkqsa4RZ3Ar",
  "key26": "2SE8sagdYcJX9twU1W1ML8dY6qU1ZBUcAxntByfrmgwFJvUbjvtbhD2533JDKHuk3zJdn5mbzjHjvyBmA42qCY6m",
  "key27": "x5BKRL6rRnHxyMqRGczAUyrJFDC5JVkCpHavsZZhmRDCU5CUtdSZ4TCk6774DUHc18T443EoJuuZL2FnXAAejAc",
  "key28": "5ZoEvRBULopL552bn2mLzLmrAWFrGjhA7AqVuP3fx3yt3FfUTM4U1AP5jy42uGAsmmZvakkd6bmSBEKojyEo2MnV",
  "key29": "2BHXw53LsKY9iGifMv3sy1uDazTHCTwxKKAn6yyvN7Tkr6rQNeN3QvfhY29BSFu1sX1BhPgWxnr5JeRxEcBkaQs1",
  "key30": "2jjquVi6VV89t53c3MMHTKDPsGuFnhyZH9uPGkYviyUGJuYMjKBZvKCyyJNCWKukePryehH6jGKGc8tsVKsYnwJq",
  "key31": "33Q3MmmSrRDQamKBSBzLZeoSL77MviFVcuTz3PNYYr9w876zbnaeiomt1Bky1T3poMyAK5bgRWrKFYspjPxvd1qA",
  "key32": "2FWnYEJPsR44rNqhqbdzwjFSWjzSeHcua9gmNHF1YbV9o4JNXEa1wQWJaG1MKnHmN6izRhueDVHtiwcf3PUS4TR4",
  "key33": "2pBt4p19v1wCXU7hjeoFzEn6G65X7NDtp4DrzAFXoD9QCkDkCNBqfvo24n5beZLqUjAZ5J78BtdBewLWMGhn7miP",
  "key34": "3upahSSSJ2tkkaoBrqFBTpMJv1aisoZJqCxkbwRXEXnH8R2oZZHcvirT3Kj2UFSHzTv6GwNeUAxaPH1mzPoXsDy5",
  "key35": "3DJ5GnWch9v9SAoi3fscdPz62znUYKG7EKxEYLnhvv4LaM6SgmRmcpHD383x9UZPWAAz42wXdCX8oqEGtLtysoJ8",
  "key36": "MuwXzJrU2yfbkkkKN8LALrhoxYF1Gb9ePiKo437MvHRut92CpAQYPz5k9CYSuH9xMAacQzTW7GENr6Y2ArfDvGF",
  "key37": "5ejPksnDoJrRCzNHZeDqrZFCEjQTvoZLA6nBmYMmBh8VpFKiHe6pkNwDf9Jrd9BdpQadpw6q5yVYKqatQqxSTbfV",
  "key38": "5CNHzCzHhBM2nJPuZLmw5QzwF5uaKBCoZNWkxvSai8FKUuAuRoACQ6h3UhPJ7bAUGs4VwnDt7FAToH1DU7ajkfXP",
  "key39": "2QhyBEZUGKYR1AsR3qNEHTCYZVm8BZSFjmYe4hhxjyJwx4P7RzTDEqBVhgPeYxyQht1nnKj69dHzFdTiYiX1nCW4"
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
