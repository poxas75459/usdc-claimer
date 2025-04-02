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
    "4NuaYa5M9YHN5drQKLhdChEW6diutGp3tRGBKSCGTA8Xf6tJAHrUDmXVqfWxLi8ZiYYNx1ZPHk6GuoZb4F5LXxhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBRziX3GYNPdUgRCpJqXJUcDX72gLyqvMYeAATuuVGAxV11KPQRdkcNBoS22npwv6tbYaUYUXaht42PUb4ra58u",
  "key1": "3UmpvLrAQBgcoPA1zS1TquDLT3S74SvGKcUGmvnGNT6eS1YMyJ5qcQWCxk3sz878SqxvYVdU6MZmbUz24HNCsk6M",
  "key2": "37Mh41CrpgQ1Sx8ecAc2EtKv4RrnKR6bPbcFJhNAKmAJR9Se8U2R2re3EgKV2QPGrnGN6gD2eekcEh9Ysqw3wu1s",
  "key3": "4iaE33J7qMCNhTFG4opfXzrH3CeHN57qmsLn23r1qx9HXTXp38u85Jiy3eqaCdZWW58Q3cdYb8RHixetwsbzVrmp",
  "key4": "4BUAYw5N82uY95butrij9YX8v8hwxk6jtsSuCiHw9GtaePEyLnXTHhEHxSrLKrqXwjiXHA7n36ibddrEKiS34w8J",
  "key5": "2LytTt4V5LWyosKGG7LakTrNfo8Rhg4z2YfeZw5w5xjtvoa857P2skBzfrZ3CAgNQZWTJ2jF8f1dQwZhvLmed9PQ",
  "key6": "5PEpFQbkPSgUMDsigKDpn5jgsaoFZwXBKWKcFDPEzjn7jiCtLHJnTzoaiTZJ4S6b33BUEMusZkXnV8ViAZU6m9NZ",
  "key7": "2nvXoamFQs8BM69g7iyhTZREjrLnt28DAcP1e5mTsxQZetVe6bnyw7xvSq1xkR5kzJwwXUSGhqwt6nmLQysi7oLe",
  "key8": "7AxMG3xtLcD8GCphH1PLKMnLGNZdGGo83GF8zVxFyDrEEmmYQPdfX9iu6ZG6K6Y94qRdRXppZvYNj5BVSLsaHm2",
  "key9": "2ccZqiYjTeAv7xSdgQvGn8iH5FYvX9ggrwD55jGiP8kSk5ERtkM6xVxWG6dHDdSEMEEaTtsNYwmpZ69CFoW2pEk5",
  "key10": "YMzd2m1cSgvG5ZKXtahTHfAceVF9esmySi5P2K3ZHhpje5nNom7Ayadh18F3zC7Csk9JLZmVm1VmZdAogtc1Mnw",
  "key11": "vha8xP5KE3ia7ebi7uq9qSihm83PFo3CApSRmjmBXbDrfmZCs9FtfeQLy9TyjqJvHn343t4BhDqtCixHjGzpboA",
  "key12": "54kKXKT9cBPfn8kYiZe3sVJTS8Fo2DvU2oFDhC4XvKQV3Yvunw7s6Xc2nW9QFakyWzXgVDbZ73UwjHpjGwjgPLe7",
  "key13": "4GbvuPFev8CrjKMCmSVUcGhw1Bs7VMLtcCMMLn9PLUeSZikp5X1GQwizcX6VXixvci1C6vRuUaX7pUfTAWRGdkQy",
  "key14": "3aMxu8Pj3MKzUPKXhr3reQzt39b6jF8KGgk1P8qtwYp2UDurmX1rX3pb2LwePEY7W4RXEGc2s4xuRvnkhwB7JaPE",
  "key15": "2GerA6oeJRVnc6iVpuXaALy3aAy2KpWob7J9cxtkzpxPehzvqC1BdPJF5Dpd6gQNVK7nWCLRyAW7BtFCsqr7MvRZ",
  "key16": "2dUreGahXhUr5aBwh4cPzsawq11nACHcDCTzqPws3Pg3x4cdkmU8zNy5JdBrCUzdQ7ud2VbHENhpdKrEaQnKMv58",
  "key17": "XG5Pau7iXv4jaGxJadwGoTVhijdDSNexRDrWtList3reb3MM9mvvuhKLp5n2pAeGCThicQfabDft2EqfdPpQGYy",
  "key18": "5kBC6L6YRcMjr3vNVTDwKbxxxgroPs4ZTkF4ZgRGi4G7NcKnQoUZsQYoZk3SX625iz1KZo1WLSeXzFSFZzrShfgH",
  "key19": "667K8BpBS3MKk2Z6kseEovGGTWtAyx2UopS4d9bSTt1zJdUe5g1n7N68gAPy2FrR7PH3FffMeoL62CJKX28YkbH8",
  "key20": "1ExsvPGCzadwpEKAfZrJJMHwQ2e2D3gY119T8VomjefBNQdTiQNKaF2VUZBKzmoDxFBWThtV8GWshzo88UCrZZC",
  "key21": "5CoAyuSqnYQSgti2GrsRaHGcnv2cEbgHywHsbAfzDddj9nwKux9svzgVPU1D6GygVtNhcy3Ur9KkiaDNLEnuQcRo",
  "key22": "3vnxKFaGCnQCMNEnEcQTdXNqCMUk1RyR2adQiqq2ynX5Sowb1vP7h2oMPgNwa3XUMzVYQ3cToo6SzZTCM1WMWBm2",
  "key23": "2aFSjJxsdev4UV8HsBjBVkL1i2fwKSB2RMvGwb7w8M8QxH3cJPutmmPUKJ82UfHvyTA2J8EyZNqf3qbs2wU4Bsw2",
  "key24": "45EmXhWgcdB5jTUDPnEjBpfnAzosowCNdxaWDNE6JXyozV8P21kTzgYUTYrfgLcS8Ss8mBtq9sFSeQ9BL65Y4Pku",
  "key25": "5bGeYjcJwGu1xKpMctSDtnjmjkTLPP6Lv46rD42M2U7f8chjnpXAG6un7HoYngjYW45VzHr5zqtBodWUyLyf9ULL",
  "key26": "581wEq1aQvxwa1vpvyVqsQcA6vCR49J35BS8fFrVm2xn57AznWScZrT3uZ6rtxQLUM8MJnQ3jndEPpJYLoykiDnx",
  "key27": "3TLR2ZNwd1zDhgu2vDahycNJfgoUHozbvAosiHQCWi8ZgTmizYJG2snEM8bgzQuymQ2fJJUDs1Wj2zARmrz3VVxB",
  "key28": "ho4eTnwvGDiP8BVvzfxsECHwkL5s3KnWhZ3ZJwZN5PqMKyqPW5BPm9sZwkpj7unhKqWbzYzQ9h5fGEY1To62z3j",
  "key29": "3uBRiXATSbH8GkqZQf63hyJj5oW4rjg1ftoqPCsQgXR8RWWjiaVbAVBAxRePHZMgfT7VwnzjPbqdaXgKwkjE4C95",
  "key30": "3q4yknA4SCQ1aMeom4hjo2eZEyhB7cAdq19d1a4SpCN2FUPA1BUYWtCNZKWz13XqQD17qvrpV7cvGK6ZEwBoPHyF"
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
