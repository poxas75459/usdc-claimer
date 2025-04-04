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
    "nwUxCTz7urBARDfTKimLjmDNaJ3XZ5KesexoBbubTTPtgGcbShHJBpA4bVjMDfdpzd5tTBtQMUvvoKnXhZ5M6rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhN7PhnhrjPQYRAA6fafJm9QKxD745Pt9m5XPMEtpKGss6qoP13TtP9kNkSvhMTZkZmnPBHazWVazQwsN3Ef4Jw",
  "key1": "ybQfoms8a4HYF84BR56JC7DGzpxS991N1QMiyjicDch9D2cjNHGafFKHYHJwPEXbWAN1Ho6KFk9RpEkjzqgVZRS",
  "key2": "5SM3kDESwUK1VQcaLetpmnSneUDp4cogTHGiVyZL389gFtcqYspuMAyoBNF36A3GjFX2HDPCNWL3h13TyHykN7RW",
  "key3": "4yPodQssBBc2JAPZj3Z1cKN4dc9Vv4e2J6VwGDQM1DUyxi83Fy4kFioXxyS4X6PEJZfX2EwSd4QrWEdPFr7xyyEb",
  "key4": "mKiWDCkZo4uYEXud8DuuxtDWrinbm2HB2P5P68bqYt7eMREG4VXN3Dz5FiPnCs8ZsUBdkhmGSs4WvcwHZw86qWz",
  "key5": "27Uk65NzkqBhuSzQsMU4cXDVtNhuSycyDamKmhuJBtzwHQizGbhqHihJYwiVAvVLfoVoYpKLZjWkt4SuokfmnBm6",
  "key6": "64fz5MDExuY8VzR2kS7pySwCRUKZj1yv5VwNxCwMmYFkC5kCHuMeQzDpF98hfkVu63iri1jrRB6Uffgf8945FV7E",
  "key7": "3MyMi1v6Kt9T3XeM6GAM6vt6xrZEw3tVXA9zH6B71W58DDaQYJgND7W2ucUThbc9NPDCUeMwpxL7VVgBQJmackF6",
  "key8": "4DtC8bqg14n9Cc3Lr6fhimGPcw5g6w3KsPwbLoYN9JPadmf3zP3CdbzyfrpHvvwTbcf9XR4As2mEWGnfMPEkrRt3",
  "key9": "3AAd3eBrjaiRYGiYPYu51HLc2QkLnFtkSjbhfNP7JceDyeHUeea3EkqxFMWk4QqNdryH6gvdycgRRRe7FE6nFk6B",
  "key10": "5VFbMFjisVmj8fypL1G44SNaMDPNiw4BqSXP3dMYjLtCJaPXS1XmmwLSkaKzsstp4EYmaPruPH8qEAkEfpXENh5m",
  "key11": "63ikGfB1J2N1yUQ2MAmKqJ4dNjtzSTdwVpGxFHsWZiGg82rtdBiVjpWRnsLMHDiPEn7mZuyqEizKphwQ2uVK64z",
  "key12": "3PbUfHZCf63nP7u9yAAgfUDTdN5nfihYig1PgR17sqeyfExZYvw6y8VyGJkMHnNnWAGLFuPk7qRVNoUeYW2NG2Fq",
  "key13": "sMQAgf5cVNFgn5QzC6RF9ThPDS834s14b4PTviNtAgv8weKnCZCHtsiFdW4HJp3YkNnzie3mePuFSJmUiMUGcqf",
  "key14": "4nWx5fXDrDQ48LFwJxa8N9wKfNcMFR8gwtarYZmpCDXUpZLSaHNGJVNpwyxSp9x6tKdKJRngvconQYQoLkzQNj2J",
  "key15": "2spqeDuNmZyXnDrePp7igK6s2SBsWFu1NjQyALKf5RtzcLRw8htrxAWYLh1yYus9m6FdQMBsqAJZbm3JpNSNBnVL",
  "key16": "3Ky84tBh1TE3WtP9parrmBQoDw7jFgkurz1cUVmfXQw9boibnkxBfNgEpR3FHE8zL7gJmw2WpQ6Hruk7zgHfQ8NJ",
  "key17": "5JQsrG2YnVioVRVrcVWaLPafMfuJ6yyk2b9vNzmKGcVVKnW2pgPDYojZdxC7yySuGp1SnatEi7ixYitggQDoUhSr",
  "key18": "JpU4kNdyuEsvBxjSCnvPuhuBkdZ7BpUF6aDCTEcwGYr5wFMsfvYsVM516hDSUQZ5sUCwH61RPLHpBTB9a4tkkPX",
  "key19": "4bgH4BqR8ddYVjvcJb42VFicyYtbfcs5xSphkkxmK7S6AHpanBu2a7jW5fZCZCWLeY3tt9r2qJobMh9YeF9CSigA",
  "key20": "3zKArovHZgbKi9SHZFjdPZQgVkfAiWCRH9anhjCaE7rFnUGkTBGcCmWk8LVMnpJ9BS11mQaksy1oAJrgBvaYzzEP",
  "key21": "3d86re9cGYqhLkJDjsSfMYe6pSBxX7TzFLp5Ycu5tvusoQpASZ9qTi92SmFAZHKdU1wigLHkNmHizfJ9hf2RQuS8",
  "key22": "231Y15hWjcBbqrUYcaJ3To2mgWE2KSKYdZE3WNX4aknpLbC89aDpuKCPNoMmY9voLti8sE4cVMnM9hfSP4j7dtCK",
  "key23": "5hxKm5oG6QDsPTQ3EkBFpcw2VzxY4yjPjra7dcA6W8Goc416iJjvgMyJBK7aaM8Z5bJhh5hfasvy8ANRwj7kg6CG",
  "key24": "3ow1iUbCJ6DYq4growcP1FV8UDcKEroZZJXmaH2Pyx3mReuYQLDoyGJAdAyCxHvfsmMcfwvDiZKZVfhuXc19QCrf",
  "key25": "66Py3ZA15dpVRgjBJ11E4Wbs7XdkUmZjk1J8jmpM7raM3W7i3zLewZdq4kg2jqX3kjRwnLb6Gm3L57HMLDKsqsZ1",
  "key26": "2YeNTmooye1yb94ZTp2hJstcq21FidJhxUr3odZJxKBPYGyezb9oQf1WjXJoxnmqxcVJyJ1nFXwiHTrr7ZcdhhFJ",
  "key27": "3w8FevbqjeJAyPsT11NQCQK3gMXEDuTyqSEY4PuPVMFGgxFe8AqaP83hjQzEqDEQXaxfDvqS6aKswqosxED3XJYf",
  "key28": "5RH3NNVV4mvu1sJxiUCTHk4sKwnYkVqhyG2mJJcJ5YpqJycSKCF3BgDvjCAUuZefZLeTaJQr4DAUfCxr8DobnVWM",
  "key29": "iqJeNK6dRAbqWi7v7oyfUNn5MxcRFHFRPuvqfU8jmWiq4fVx8pBbUGtPSY2ncaCDEnMH1pb2od1SymKZEbSQ7aJ",
  "key30": "5tLx1BXvwBZcAxAVj1tCUtgnoyPwhtEdhnukhFdRUouRZGVWNdv7khdrvhmC9na58b65c8SmsXbuoA7WaDBQKma4",
  "key31": "4Uu6yCNUWaf2Rm7uodoDjFmnRqB5hHM1vzXsZu8ZcZ2MKw5Gc8fZSjiDsx3CJcc7S9BWPvPTVLLVm82nwyXF8Vn8",
  "key32": "4oPkE5Du3fpbyTSsXfKrvCnwKSokUQxpk7oFEL15EMuH3LRD8XEUqmMyzgJBeK5SW7ZfVd84QrTKhrGbdpmq7K5j",
  "key33": "5itH9GSyPhkudT4j3b4hDU2KqgVR5GFawamRV52EYjib4RtYGUeM5qJBemUfxj6eZvxmh1qJ34DfoB6F1gLuaeTZ",
  "key34": "67iHKWdeEbx1ivsjVwZDUpiDtVKAb9gc56QScmhUF4qwTbe7HdEsrXbP2tU1kAxBNbVAR9u5URQxN8bq7goRNyCh"
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
