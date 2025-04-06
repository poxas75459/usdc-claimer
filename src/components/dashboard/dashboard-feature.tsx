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
    "2uMm8Wsn8hEcvxT6KNfzzPauw2x3FHhHC99XMFGGeK6LRYzPCBKsmn4GbnnHfLC8dWLHE73zBkL2hhRhsATtf2yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2DNs1LmTfiDg9EktNVUJoNbFaYv9ZgE1czWUDXevDLt44rGsdizZCVWhEkS6ohjAiJB6JFnbuRW2z2fkAkxFRE",
  "key1": "cJHgtqkZP6s1jLY8QbcUVNdUztn467fVxBtXS3kWgVqhM44XJ9HerNzyxfen1QoymJHf27wjfJRWRS7iU6zTn7J",
  "key2": "4AddHwwgo7zdVdce8QTQAgstf9eNybnapcPkg6AGhNSW5vJaUUHUX78AroPfqutQVStQak245eNoSstJH7LKDdbt",
  "key3": "3WdGXSimAbMYcYR1wnqio4RGdtFvCNxWqjHoceAC6Uh8K4V1Mf5Bd2xUhvZ1Q5DnhVd7HBxKfAJXY5SeVffo33WL",
  "key4": "4B2WWCaw7BJnwRfGF3ibR9ukXfP33mVwFjwNGHKfbdgxTyrt7KRbZhGa7z7jzTvxnqkrZh29opa2JZdyLxkcGpjr",
  "key5": "3ePQB9h1RrHfSpKo3j1hVSVTEEhxA4wvQiSdy9VQhQEwBWsLdtCt3tUQhgQBMJTTAeewRmafGzkEnUWRShfVfWHs",
  "key6": "3Y8TtLjkNuQtifes7QXPphJUTjZCQfXHgx2nAw39A6DaDira2sa83QMtsq5ARkcrMp9A2afeNksFsWddgjySe88g",
  "key7": "5ZSVf5sWY6kyfxMHrGLztcaKDcVzqVxXJtVXm2NQuSCMKHyPJif4AY7xq3aoMGfCgccvmmt4P7Acy3eevtwm7oek",
  "key8": "Useqkx8Yxx7tYqAY4dgojLsRiPSeq3Enouf2AyT5k5woVT1iJdJD4trzpmbvMv8cH4zJkSXygsBHE8LCAeFToZf",
  "key9": "2cgYfEdB7bZC7xQfvbF1VzjHTdCSMTKjwEoTk6WA6EdtyeeYa8pr69SjkhPLtgxQqKLYMfWgrXP6NQuSwUb5zFvF",
  "key10": "3bWKrvbK31oNM7mPe69sMzsQJzHcLAUzyVnWzjKazMXZKkKjSH1cRLFfFeR1wjQhe7YQ15rEpMPurQBM8MusLok9",
  "key11": "522meK7ketD4QXRziTgRmXQUDDzeyTg8N9rSeJcrzD1fncTqeVX64cWr5oJjFVfnQvAYdPUJ68z7Ev3g7bL4e8yf",
  "key12": "2hZvU9Hf1y3CDeoMx1V73mFwsDvB45NsYvh6SziFHUmpdNsoEeJuwFzzV2m1FadS3of9cAetvhukUYRd9vtfw8qC",
  "key13": "346kSKJukXJkBEwGEbapxbURZQxUefSJNFwPT67WS11MV11KBqiosDvLCoASUK4V2drn2xebxf5HSvy3weB846iP",
  "key14": "4HFEnRsRWrUW5mk5TP5r9L396jbzEDYTrHnW2QiHWsby8u8d3A3n5gYqDGepEDBokAQ5xQWJUuRgPND6e6z2qzu7",
  "key15": "5ZKvUBffv6D2iqcy7NJL9tcwrJgmkzsMpXYYjGPB3CEmuFQREdJnh5bZG82o6KeZBUtf1Du9UNhRuPE7f6hitSwC",
  "key16": "24uCBbvnpdoXK46XA2pJNNgFZckiNmB9wpxLyeYrvkCreTgtijXZGK8khruPc5W4bTe6i7QHzv628WVwDJ6eL1bw",
  "key17": "38zAiAfi1YVkpVSedRvCbkfxvBKU4yem3c64MMVChqjjYLAfLQNSeKmn9FeznEZ7cG299Fom1LKMBdLKNbvo14w7",
  "key18": "3bXsJP6ZjVcw3L3AkYKVcr5sc2E6BQijuekBxaKFzvjM8udENujFU8uJwqEAo5c74SVpYqDv1g26papjE2HYLB8g",
  "key19": "2HoK8v5sYyu3dBTRxCXWBs6x8EPHd7e3g7K9idTBRbrRTth7YbRRsUxYvGq3t8Vu4WpGnQLRuJaJaEQVNXBWemnE",
  "key20": "4m7yUGzmqJ6Vfb4ZUGnNZ6WW5twZ6L3N7R5AFQPm42Y1jEe3pyq6iBbktV7fzNEoP6zZoQAHnZH53W95wqoFGSsR",
  "key21": "4PjSeZP3gG2cghPKM3XoqDFfvbhHc1osgMVCVAdxAotY8eiKBETA61oDBSHmr8rMDuNf7X2CYAqLkY1mVjmZZGnz",
  "key22": "3RDtSFwoDLXtTQzBsfWFFQ6j13wJZmw8j4AkQmCAoSRXmTGi314DtDy9DBLyUwyYnrFG4FdPc6FuZqUD9SqdJsPU",
  "key23": "2zbynjTNoncQmhAFtDGFYTugiHYiEtDUGx59GX1zzCcWtSTnG1LRagNVReG5ucd55ZbSrWLfKCR7Bv93nTit6Ex3",
  "key24": "ZetogdFevqwQn7Zc6EEMvZK2EX5VnzKyRKUzqZBnLxvnZHWsAcRYVBcGvQ1ySg3vSFs7x1EaEGFY3momtW64WGU",
  "key25": "5iwZDb2WUigKrVXj9rxwz7hSgYRktEjKaQLXk4YXWtmGADHrqFBaszjKQppo4iy6X6ZF1JWLvwRttpjxnWDgaP8j",
  "key26": "3GJsXzdTbbemtwoWFHYFEyWv6dEg5TYdLY9VU6bnjBQBaTVCaJ469vtkvd4NNwhVW52R4VMTvK1y5nfaM6QnSjJS",
  "key27": "2pF8bDbKaRShioDFWmy7artMc2T8mM75itfadJ8PV2MZSCybpWiHmhLYsXMFEQa7GFWKZumSPHACXBdrAELaNjd8",
  "key28": "ZXAjjoMnKVAumnpaRDfV66LoTYdEjZFu9P4cYcjoKGxr7G4zVF5ZsdxmiPjba7G9kxjw4QvJCPb6rj3Vubj3wyg",
  "key29": "hst5YeZXWSiPsh6DNNJGXbYiHXvxKzoNsgCEBzkUby9mt2AfRvXi9DZSzaaNKtDh9TYXrFbRSAuigxjd8GDBbqJ",
  "key30": "CyHR1MMFYZUtftGRbz2oRmdxATxdZoUuXBPAcvYxnAXZhYrj2ifHgPLHz9XpHPpi3igTVwoLy4nN5gsRGbXmLBX",
  "key31": "3mLkUt5z2ghkLeR1xLuRHEpbBtYumG5E9e29aaSxT69TUhX4xxVCKiYakERbgBE1yWkFJxvWLWd7SKqQAjL4jKwp",
  "key32": "CAVY4LFeBQVecF9SbjMVAxBJikmaLQAJbHLq4UC6un56yUupfhqoggwXyv39PbSSRtaBGigipCffYcmuZEvcBFa",
  "key33": "nXhEgdajnbMGpgnyHxa615cqt9dRZLYqcXbkjNcPZBqpG9m3gAx1zvRgKK9vBXQapzq2XAECnzYDn1jExpo9xHL",
  "key34": "J7Q6QzutC3K9GjM9ZrF4dvJaSH9rSPkFTKXTF2uHXaCN5MXg88yHakdBFk7bVR32X9iP8ufCUGhQzPey2316Qy5",
  "key35": "3UWUBNfvEaBrponZ6im5qHmApvwnwpcET8o2LjTG73vSMvPHqUVWZjFEMsKbSRAifEGcrjoFDP5jxGkbhePxsQfo",
  "key36": "2Rfnq4DVVhZaYNgawC41sGPrM6ehieSUrdnrAmt4JEqjA88kSg7dc8iS4qGmD7vRupy2xDVVqdwi3ipEqoTdUExC",
  "key37": "3BQYi6oCUGRA2BP88v72JwJnrjLUbq7JWyM5f2M3FMwTkASyrtj5nEmrniTNtrxu3s4mUcGCKvoNvpLXc2KFAV6Q",
  "key38": "2zZHMR2JuJ6k5dw1pwjaakAqCkEB1Myt9LHQhDcQeLKzH2UWhfPhHWWE1Qspq3VTdM9BayAb4QKp5wp5NRZFkU1z",
  "key39": "QS4C3HGZLvdfSXvprzbZnMkWU7vSCJg3ULFXDwTbwquDjQn6ofSw2R44hsiMZf19o8WvDWf3ZTxBqfc4g2zUmyF",
  "key40": "5yduU9SvmK5doBp6bdNvdABx1cYWDjLQNvSD4VNQFJq7VHFRxaYQF77UkU4NnZNKvoDBRcdp5oQHXNBgx7pNPaDL",
  "key41": "4DfBTKfD9Q4jAvrhPZFetYmsUbpSHptwYsx4M7ksvnKxAuKFpaZbsbeFAEcaUMFbQVJM2LnbGyfC1HZYEBETKebc",
  "key42": "35Modg19foUeuGbhMp7qXzqDhtWy2ssffwbvKTNZqrVycVPz2u8RN6DLTmuc2rZbVjCorDBKdBs4HSioJbDFXDrg",
  "key43": "5udHMrEzKc9kKmZDnnNurZZQNXcbi1qL78WrtBQrFHc4GRdKuTWKPeZ5BmGYkZ4rd17qdEaVm7ZGGnpfvZA7MjLK"
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
