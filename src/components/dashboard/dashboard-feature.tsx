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
    "4HdU3vqP21DDvBiH9poAfNBeXAShrNST3VB7X5vPKbjeeJ1GYavEHcMg3GUtvigTPvgTsPdSuKzVEUzmhQxHdTrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xuA5eGk42eVhRzZUJh2Xy5EHzQX1cx3bonCtpJtJWQcvfaq9okvaDmZKYQyFNhQSRVFHDnoYkUubbqvNxagUKwC",
  "key1": "3hpDsyyvG1hVzBZBbneBffZYk5FXk2AepSvsiR96diGgWmNE7LpdF5CdVD5k48DiH7b2svHZaB3KfXqZ9sr8stsx",
  "key2": "2PErySozqPWRxK3pFux7TYFXYMxwz3VJStU5nDTczrHPAkymBc7niHoFQHD7QsuRuGNMXcQ3oC7PgKmsh9PtNBe8",
  "key3": "2WHpvsqZTTRSnBoGmGkBB9emaLgbAS2KDYi9m8yvk4XweEPfjrDGeSt9FGYS9yJUuUeQy5QsN1oJFHaTreEfaYeT",
  "key4": "2Ed58WFC3m4LesypvRjC7HeW7bU4MHWgsT9bfNdkZ8bkgP4o2ebEUKJX5Yhg7mq2LnrZWesTyWTQZ3peZGoBRkX2",
  "key5": "2qo3SK5sY6jmawTGLpjxuECQid5TDQ6EFzHaVPYZuLFFERZY7us3Y2YBnQsTQanFZEUgVLFkdCBXWQs8fWSvq82N",
  "key6": "55ikQNGoUp7Nh25fT7iQXVgkkSEVCcZXUAzTFEjv9RQwbzGTYBWzsiMNpm4qduy5h9uQRCNtTYujaFjSNC8nViwK",
  "key7": "5PbDMDR7xsAs5AvYCV8Z6E5Zu9tZiDnLTWy6xE3dywbFFCuF88255Dp5LfBGBZjwdEwF4K9iG27XXjXRSzwrz7EL",
  "key8": "PgBKk4QeB1wnWB75mRm6tVqzEGDBbBoMWNt8nh79W2cRquQKfPvSvnKKagtJCZUmKakerb4jCKpZTjPq7FVXwoN",
  "key9": "quEbn7K92JExEPYQGHxeFCYcEaawZF2TWk1W6owYieG3nBsp5rWfXRtUp8nBBnMEMmgjhyHaAS3ncAgSu5a4uri",
  "key10": "56y7re4cbE2o1LM4pGTNheMquSpfvzXURet1yUkNaECMjKnEXytzniMFWjhgs1TCX1ecM9AW2vrdHpLbezoSVT13",
  "key11": "2SZALhmuMcCgyViyS1WfnNSaQNdXDFrVEShu2fAbqFAvoCMZmSLaZD4tgpirQpDPN8UkppxvvZsohZM1rdnf7KFQ",
  "key12": "2AXZ36LkrK1jpwg7rZVMZW8JkGCpZzdrEFMA6dbCJyCzKF3xSmoeXHDKQEAM8HkbpfCf62zwjCwWVX7Kqpz9jQf1",
  "key13": "4cNjrZyYPMFhUJacy1RMRKgR9Cz28cVdBvYhKREjoqJiUWd2kxUe8UJaxp83t44vbTzstQhQya5igTXqavyWcCZJ",
  "key14": "Rso9yT8XSmxq1fbwC4zSrkqa48Kcg9fVkP9fqj9HBA7jKiZG83G9UUsJLV3gCwZsmaKZHiQP6s6XiA7dcxw9Uuw",
  "key15": "53dPJEUmcHaD8Rq2Dba7mH2NJdmjhzDgATt7La4rK8ySgAXTNvLL9PA1m6nUwfSDU6YkT99MYNH6iFxsbkX3eZXT",
  "key16": "5qEokqmDbWRHxV8S1SqzxMcQc8KrDR5NiGQGiQTNmxGjPKemVLoEbtppsVdiw3jnF4BZNAxJfX7EEyJqzsmQNYBz",
  "key17": "26rDMUjv4MoARP8U6bavkH9m57EQjbGXg9mnS4wWTpoex3TruKFcVs7YC58ET36bQxnJHJhDMXg1H8C3YpneB27W",
  "key18": "53rN8ZbNvmZFkADvctZsPf8rG44vAESLCEebwEN5MZAtNtJgCtSJys3sEr5feVuGu47asDe16kCPCDP2MtKPX9QG",
  "key19": "3qLoACaFQC1HeXSEaeZPi16jhwvjJkorvGAFmTFRi5X4rzLYcG9Z9nGSiLSZJnDnVrtXGrucu5FkKM7NSLgBCoct",
  "key20": "34PZSWfjsaaueZkvQbWDLDZuaN5drr3p28ksk3WFYZGyopLCXEoHfDPQXHDYTL9NADrwdMY6ELMZDbtboUNAqj8R",
  "key21": "5XD6KVSEKRvesHq3c5zuD2vgAHhLDPQuerJDNCMwriqLgNuR6huZgnjb7Wx85eyHYkPNLVe3G8PcxtSgPN7pqnWx",
  "key22": "2EFFLPqvqYyA7xsiEJHWDn2fKExdf81TPaGRPePCd4JAE6fkaNXqb9JEixHfWMBfN8q83ghfeYssbqPsVvYG7jjN",
  "key23": "3vYESFdMKiFWXKLHxLWhyYv9qi1vhTVZmtqMCUX2bePgfGqgqh8t6bHk6v9guJqjRmB2YhrQzotN7LjazA4jq6aK",
  "key24": "4P2NTt3xYQMP6vjxuDx9fJRpGNwBgjR5BsV1FvYhfPMMbp3UMb2WQNACinsLdMDHKK4NYSZxhZit2kJS3e8E5e2K",
  "key25": "oZJAVjJygFuXXSaxazjgj1wMN1w1RAa75oUze9DxtPRjg1JhBZrTebema8ca7JDyhjgHP2gmboc4N3SbqkXdgsA",
  "key26": "4touXksosXxpFi6H2bUv5AXj5XcUhMfU3MHAnzT5Tq6drnFpQAix12nsQznaLcs2Jo3j1Vwr4f4zx7EFjHnWVcGX",
  "key27": "4tXz1Tz1upchXJ1oxNrSpFDSbDkwgsHqHcyTEWjnuaaqMg5WtaUkVuHNyMJJ7Ci9PiLynXgHA7dy54umC9LdRWfv",
  "key28": "3SJGbNDfHe4kryeAP2VN3qd1jQK3Lemewmh638qPQWBjriEq1ij5qAapahoxLQMq8vvYsgtYRYu4FiQ5NimeEddJ",
  "key29": "2XVLEsGRiCxju5G4Euf9rziXymBT2HmydbMUwJ5Yd81Lbq1z6hDYgdV12Q946HWuqxdkZtCVFzDDeGVAzeBT47kT",
  "key30": "29fZRoWcbzh1vZdXkfWWGdVvXfDMar13WTAHsjzYUR5F5TMJgr1Y11DvvoRB94q8aH6jiidC5aKg7kYchi4H3FGG",
  "key31": "3ipB19AJSpP7YaSZKWTd2SH9ndMKbs74AVvjMVwV8Ph8vJJMiwBA3mnurnCjQxRUgVXunA61YXDUDSzwR8fyB8VN",
  "key32": "3tieFdcEAYpvo5VQ4MSoSkUy9wrgeHpqyDfPSYM5C4ecVeT79dhLg68fHr7yimCRUkf4w8QLMSXu7WVvjNmaJyxB",
  "key33": "9HSVprJTfkxwWzxSEH9EkbRxWPh38xxsXf5cSVAE2tC8DModxzTCFLK9ZkmhxcVdijnWJY9PG3qUDobTG9xWqRc",
  "key34": "4Yh1HmDnsKyAMU6GzkJ4zzpreEKubhNUmKHSR2oXcFfPtBQbX1bxHzx6YzA5JyaaxnTvRf3fYZsrW1jP2QTG7d64",
  "key35": "3RyBLcxz96tjf6xVYTistpFEVQ9fviSVDNaPb29UHYFgYjvWdjagoaVA2r12pdvF9bEnMVtPTAC8cy3Rq29N2UYu"
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
