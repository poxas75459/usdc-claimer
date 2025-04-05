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
    "3F4WQFx5Bq4aGo7uzX21VdYKMbZfEAd9F9kVADEquBwKhg1vb1KQnK4tvyCVVWgEyLanPPxJ882KZVWk89eSzKuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWNEpH6RsuYJuf9DHKu2DraZnuKF8PonoRgSjAWh9PuA5oMM9hs4tN2LskXyjencchU662DD19NTjvLdPLzSyvS",
  "key1": "51ozKqWtjnfsywFF8tsS1YyV4Z1BCEUiRDNT41y27pAzBJKQAi2wWQBhVrk7d5SPqM7cMG384Wyy5mVPhVoSk1gp",
  "key2": "3b6trHNtsAw9j78pbnb8hHuRLZtMkMwi3kAWcXZhytEidLN9b3mD92kwgV9Zv8FSr9gcSWPYNPwLY1HWPHjAtYnM",
  "key3": "gcUbbgm73FARSLnMuG5i9WtvnLywPjuLRwnatXq6o2sjGY3Uwapmc1TJriCqGFvfSQT8pcwHtFBDJivzWWbC6wU",
  "key4": "oqGUNzX1VF29kRna44ckvc4NTrWNP9eBFhgf3VTz3dKJQLgDFsvE13Rdc5qxcfi6znJfAVN7nJ3DMY71mpt1oYD",
  "key5": "5Mgyiii1ypfH1DVA6mnoQp8FmbaXFf6J34r2upY8pC6Nr1942en5n4k2HYpgWo7k4BuLb5fLfVsnjHxVjXu6Fr7L",
  "key6": "2umWzCndNoH36GT9DwAgfXyLYfLdzWumN8AkSGKbvT8DRe3XzXhNmgZvUKWbM2WjfzAqqFwfnU1XJYMi9Dhkxiec",
  "key7": "2aW6yrmZC6QQHUXs1E7Dgt6S7Ptdijsnexy7QM1W6d2XDDRV8iFZrHSkNSQHRE4WimnERSNRU4z3FgfNv3Zw4E46",
  "key8": "4QDqWNcd8w82xX4x4suVRRWtJzTWdd2UhBEReCkU7NoehJb7d55p3XpohXtgBJxsRsVQgo6WZDo5D53ViAVqJfNR",
  "key9": "4aYU9czv6Lf9zdzF9G5Waj59kn6gJDVyuKTJ2huHBnptm3H2fCPLsB4oypLMKncBhWiyVr5EHfxaDbzfSxURjxnx",
  "key10": "nYU96x9quabqL8niDUyu1L6ayPT3usXmcmr15KwBJ95GDR6vmkyVfUrYcNW9SsmEq9Hupgj4aEJBFjVzQ36Y4uR",
  "key11": "4FWtAfEYJx4Ukw8VFQpwGLfr5XmyyTJsMQfboArkpt29DAVFBGTixgzb5sFekS1wPVJKX6UgT8iydxWoaEbjPq7X",
  "key12": "2y5PuqpvbBTZZe8bTSkPmJATpRSeo5T6Y2k61SDeKKJiFnjKYsVpLr7WhPZP8ecKSywGhLCPwwfsxDSrd6dy7EHH",
  "key13": "5fxHKUnWwRNnoUJTeA1cTtzk62Pw3qG1RZ3qAsKyVPjGyu4jVfZAVwh3WqfTENuCkuoQzAWixQFH77awDUC3KoQb",
  "key14": "UYYs9sPJEgDAAtzndxhwKGiL8b6wHwcwYQ52pEWaq34ujC4Ux5r7Dt8rLMvX58HQd3fSe9S8M4EJddJu1cnXmnN",
  "key15": "3fzMDGYUsyU1wvrHuPK16ucdQ11eAK4nRFdWPqDmhEPAsW6GEBxVfiethBJ5tywnx1JEMHmdWckULDFKWuSp9Pj7",
  "key16": "2EKGvcsWiE2CFGfANSMgUSd5fBpzJusGNgsD8usknj2AJ7d8bhMfDBwP5hAnSUki1LfD72w28MXdQNQL3XdKyXN1",
  "key17": "47QLiBGkbSyUyfACfebcMupaXh52sDtXBxpzBhWYVoygrgRdP849azDoRv2hzdEshu6vTETEioP2Q8s3Pp2GGnTf",
  "key18": "4wdmAVFrxpxUKYJzYPq57VNZQUGU75rJX8N1WojduMVSJSjEvGH8SepPXe6aZdCu9dujhmPX4MnzQMJZJoirw6oP",
  "key19": "551J2WRZT7Uk9RJsYmqRVT9bB8WAKGoYBEFnN8LwJkXGmLU1vRgDTtUa23vgAmWSP17GnUthy8Y7oWcWz5K7oVL2",
  "key20": "eocgFA9L7ACwbD37Cqq5zv1XVovkoyEoedi9Pj6Fywx9CLch27RuVhAVTdvhLXZN224GnR2QjzUZFfLRnAJa4Sc",
  "key21": "442UEw6r1dBRGdoaZGoPpCK2t9ifd4H6GL8aouqs1YxYsyALPFB2eSf27VgMFyqt6EFyN7YNu2t5NqTAWvebzduS",
  "key22": "2iRXmQ8b5o67UsHE99j7enNUwShBrjs9F7FvRinHDqy6VPgWoAFjZza2aJ7DybvWb9FZLQEt19ihALa46PgoUTGa",
  "key23": "4oXEWZPaTj7YuBDbQ5nYf7yKN4mnaj1h6A6nKBbXM9Ks1wYQr1nwsW8CaLLk8xdjSacdia93JR497awJWaYbRngi",
  "key24": "5R8PySjgZbfKv86KXAiNsabnknBPSBofhZ8t4fvdGkyZXfihk955KYM1x7jn7NjicEiAShQtVR3TsSyWSnvQJWVT",
  "key25": "3nR6hqtP497hpwMNPJDiDC39rv7faN8vPx9nenw2MDjBZLyQwZwEAY5WGdjWQfAPtwoFH7uWBY64xk8Vwa9D7nfY",
  "key26": "4zALPn84Zc8zb5Qw58f8T6UkXyenHDrrE8CzpXxzbW2QN2KPGEeHQ3HmBB5Mj6nkBDAVNiRjSvwoPLKNnjFR4JUn",
  "key27": "2S42X8tULJbTNzYDU7y9a8FZx5c2mt5ej4HCZ14EsZa2EX6rLj419yY6LRh9GUADt4ZG9MmDFVUqF3XNzdRgcEEp",
  "key28": "3GiLubdVmnwsuqqpoNh9XxmZMrntXhLuLomALmHg3ZiZX3iMXPWBPzJPMJswcSJpfgEtxRWYuuQeaBZFjpCUYdxC",
  "key29": "4mDCwjFSmWNmqVtGPK79nD72zrz45JaDioTLMQQqSTb7PVWPFU6m9mU8B4PC7W6dnUiPyqZ3n4QJPnYoPC43dyWQ",
  "key30": "4TvjpaPyzaGi6ZAhv4VSfKkxf4HTo56wACPNiZFbGubUSwVLbhxLeXUpCJxzufXBHnmcWgvo1PePHr1hTdhntaLz",
  "key31": "3uFspdLpJhJ9w6gErxBCSdNzho9ierhd7fiuZJauKDosTrkYPZvNuXbEhrnRkyRpdDuDGh1CXsEuW3xjduo1KBUU",
  "key32": "5szfdYWE6hetgB5hqXg6gtLeLJKdi7FutKzqTdWShVVJcmmSeE8cTk6JQGAT13bCpJrsumBGr7aFeSiDwE1NXUnJ",
  "key33": "2rouvd5ieeygJWaxbA3gd46fgbdFnqez646VEESXogrM6arsHmf5oJeHtGqxgYtuoMUdfMGowMyfjaTAxmRz4Koz",
  "key34": "RXeahS9vQbVAhebVd4Uojg1QDWzTGL5zaG73WhLi8keNkCWtbQTKeXpZQ4BkENaoa4N25cPfNJ3YekiM5yAv5E6"
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
