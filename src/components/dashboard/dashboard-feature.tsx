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
    "4NFdLAoJrkFwcnabLaZynxq8mZNjL7omy7rteGaXo7b1A9Mmn7dyqXveZn9fdMkCjUkuWdKzJbQtqyUFpocLRS4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NuEazVXEnfDwfdDpheV7jDwYmg1Q6EKfmSWskxEoe53dFrgDLW5CvRJXUwfVWd2amSo8DoDPgDvYB3wUCnpVkF",
  "key1": "8AUoqmxtAPdFhWirEgoE9brrNLuC6aZEFCTp9QuhGcvpk5j8brT8UkSWXaoRdeLFaZY5p8K3aNrseWHBaxE3nNz",
  "key2": "5AUuuHt1n6LDT5Sy2mmiHBcFCWLWQHwUf4UcJkDU5Kx9JMbYznkKVJcoM2QLXiYSAp2bNF6QNm44MKgx8ekYyHGg",
  "key3": "3gCAW9ynG8aoTaEDmi5kKw77oG8qJQFepDZuy1FirMPAYqXaxYcnDuA4Q7v1rq3r4BWNYbAtgWEexAGvg5ZrLQnc",
  "key4": "zPm3ALwCn8iPsPx8wMcHD9TrcnCKToVQsbpKgKXB6mK28EhXo9meLbibGhSx6zK4qF182TbyiKfvonpCjUPgpCp",
  "key5": "2grMqq7b57q1J5diee1hSxb4gBQAXFtDYuoShbmpNfPFNWGkMiDiCc6Yt5GbiZJjSec1NUJaHsUXxaBqdwEMuAsR",
  "key6": "4CWNqjHQHJD3bsF1KKsBcHFh5eQxkEkMac1JRi2HQP3HvyHfPZj4TzXrisD713LbDeK885nug8VKSF9Udw8UV677",
  "key7": "3yeJepWDj4NrUGGJeRGZFqV1aTCrDZDHreBMMmK6ZNxtKkZPaHMmQDaMXGdnZC21oHHiReWminCqmmnX6dLgzzeC",
  "key8": "mf7MvMX1w8KQ6EBk5K2EvMupNFNJoK7CfRG46KHgxy2q2h5eBMFtCnpKEHvRu1KhZRhdk4ZLC98jLcs5nqjzETH",
  "key9": "4kqDgxMQh13ghxhTZMRtWzdsM7hhEEPSqSmDtEu4JD6XZ2fyqcmtSTfBj1tXtxdigu12p7Rwt5LjZ16okUkC9P4P",
  "key10": "3SQW5PBVUoeYohLen3yNDVcqEQQzLXwrLq2ydXAy6gGhFCpqcBQRHfBwiHdk2p23Sd2pfH9kb1d7H2VhEd45svmd",
  "key11": "4zqSn1d5xwYwBoffG9VeZWJKpSx36SuBQH6g5KPZobBNU864SVhXchJNnHgJx4Mg9m812FMBPKatVTdZdsnvWq7J",
  "key12": "43Sn2yU9vgZuMWCVAvpZ7TfZKkuwZfTEm8jjBxQHm46KS4vfs5Az8R63qrWy4VR6mzNVRvrWScQhzyv5o35N5Gju",
  "key13": "d2UKnFFtutKVVuNcGTxkqpvhBgBq9JyNKgcFkBwT6fqxq1X5ZX1KmZsjxdbc7MGZQmGxiVnypPSxsnzSsfF1vVs",
  "key14": "5pAyEqCE4Vh7ZH72DqBKj2159PA7E2JNd4dFXmGXkqUL5TXaNVnwBq4Z6176xQXBPPo5J5SPJ9ri632WMQZyf5ML",
  "key15": "5SjkhhuZjWSXkuKD4LpRb3oXtMQaWXKvdwSYpjZ3SavJM5NnympiDogNsAzwvStDV7y67NVKmDLQmEUsU4wfiLq9",
  "key16": "e9GiSdE1FKyFBi9b8VkYPVhPPWSkMsEkHrG6HXSgt3bfSAyEkxNfEdtG3EAPCTASo7fTjkKs1BMUbfJrC3Pw7HY",
  "key17": "p5eXaRztjNcR9uLgpVQfPZ6KcTnrZLG2No972HWGNeUyANyS9MqBwxWQnab8zX1bw7iwk2Mk5aVPdziKb7RN39F",
  "key18": "4hxzc5yapvrjTHAhvDCyrcFkyQi2xMZx7WbmK1bBs8JmNpfeQNyMycyE8wGbrKtZZzKsfpQQyb7br8yyXhgAMV5N",
  "key19": "5iWQkRU27BwATX5qqJmDw5muDNBELmtvahxhhy8XRnTpEgSfGLHagRhYZdeYTjRGmhEjhGPXDKMamJbgs3VDUL9u",
  "key20": "2kSr2E7akdjHAWEkP21Dk77HJM6DhQf1aPxMsNUbEoVLaF1qPJYsmWNkTzHtDRC4qi9vgBS1ZdKySfRj8BQHxmHC",
  "key21": "41BDJY1WjisMah9GCwyA8P3Uii2wGdzcbFhZMFTxWg49tv3dPcczKsQQ41x3WTNDgJmLuGyqp2MX8mssXqoHud4a",
  "key22": "Yq8BEDGhmbAz4oTqcA73TbiMbX2RimVfNLd3LPqBLZmLNXxHvYECH5ZpmSGDp84rGZjoPi1PkKR5QSH1VWh27ZX",
  "key23": "7b7S4XzVcB3e3cDXjJb6aS8XvtvqdFBe8G8p9GCSSXzkATPnAwdcejScPWPQ6Bnj7hwK6MUS8qLZMG696fvSEsp",
  "key24": "3vHZcc4jN4v3qFAG5RpgAEM8GEcPdDuj581AabFLxqHhou6dBgparypu5h13RNernXP8HtpwMv2sAo4jxxFDTSi2",
  "key25": "kYevc9ryGunz3cpKBqAM3CUpio7wGMRT5PKqpfXwzyZyfbC52QbnKwUcWNiUbq5Jdwg28XVhdyx8t5RXF6K5Qrp",
  "key26": "2nS7yoMMCDVp9rmjWEDxfTPoQKYBaSFNWpG1AEvkz3wbm6e6DjvmCdy1MtAHdaVZVAzDnamuzoJCwRvSYiaTr355",
  "key27": "51ZbxDyzyviQ7CrvWt9u5LCohrytzvCGxsB8G2nd8EFf4YpWJyMv72YzG6jsaNL6KAgwaC6rUurDb7nm785DuZMK",
  "key28": "3a5TebTa4avczpzX7ufRf3Qkxjd3RKZv9KK5gApfv6suJZCMnn5GC1HmoY426tkSCZsdTqdcB5ivmUB4TvQnYzxj",
  "key29": "6pLKxe1qRenMaZxBGCk9uoett9oxYYRWkPwKQcu8Hz2MXsH7xCkFXyqiiT5ua1MZx9R5wcsYGW7HpPfRpZder6N",
  "key30": "2rhwcM5pJEzPusAmnqBGfgm3TCKCuQxzZ2iWQmsEAQSpxCmBYV5Cto6kbeANHopXXymCCEsPXw4j4VW1kpLnoKML",
  "key31": "4iDEp6siYwXoUcq7kyKotoGh6qSXdZDStJnvLrTxkom6w5AT9kCwgfuneD5PFRkDihQrp6rsPWLHrU15gKmCjGnC",
  "key32": "6588mWFVz4p6Awpmn327dYS4Mpi5Z3neUNr7VLh7oTny59YRd6ULFMFozrVBLp2UZcwmh75CX1ReAXjwGY8aQYin",
  "key33": "3Vv7susDhGJmnfvkjwbDYyqdUxXBarZ6kP8tk2RacpxwvDP9FqfGGwQ9gr5DhYLP1ys58XnZSitoJHtmdsPa5w89",
  "key34": "248FCwmRAkSTidiTq4UphsFYHahty568CpzetDG1MTuyKStaGy3VPWeJqMQe6Yd2kVocUujXXSuiyCsRZRbR1TM2",
  "key35": "31n1mvsmvkgLftATUxQZMyYtB2PCBpvqD5PCzGZu4PT7CQjcWTQhhE6rC8zxDNKgRhkzWpiASFUkBtA3tCQdtQnH",
  "key36": "AYvBSKFspwfHWZ8ePKeoZyDdpXjjTus8FcYbbm7sgEqDn7g6R9yj2mDqcaeTbRmDbAW7QzmuHWNKPKuZ7XbM238",
  "key37": "5bavqTqoPNUyXDtywNRLiYFtfAZUmEPpcsC5NdCRm2MyqxVdjJtJxbnARvPiDFkWXSoiCMFmk1YANfNptatNxLbf",
  "key38": "31vTos272yYXmy64zARXgfLsA2bAEisfwvzSyxBXQLZAeJnc19tzvbaABeKhpxCV2QhgAecTea2FpeKczdntcAZu",
  "key39": "5bQLAAQaVdJTAtWyLRXLheSCWfVBtNykr5GzfKwJCg12jzVM3XajtKTYpDpqpisSrPHLkMRBJpfWaPC1uYksAG4W",
  "key40": "4YXPxdhJCjHRquMAYW2yYbgGDjMuDiqQnX5x95NAP8PnMDVJuib1ywDE9gUqL9msFB9sGqwgRdPq1YL1wVh7a1Vt",
  "key41": "4CFZYcHxJuzW5LLy5hc63EHvFingFKto1gc8PP31sSDxkUKVwjGLRrAiimXWtqdBv4LjXwbfs8W9x9ag5N1x2XNk",
  "key42": "23Bn9D64fR7AcgSVgh7C4GTbZBeqKbdhtp6cNRZbNLSNvFZLkwzT8DxnKU4GyStexG47rVZftS4D64BwsNRsZC75",
  "key43": "V9dBEXDhDMMd7i6bQqhZJRq9zZV6NeVHixoJ99JrnPBjiN7DhuEZCT22cXvEfUPU28UawwPqB4Pf3ph98VKTcFD"
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
