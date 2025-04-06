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
    "5YMS9fbDo3mKzXAMg38YmnrRYcgaAbd673wrKTrujVijAvZ9VYWyttX43aQVW3x9qQjmQsnM1b9ZhHNDejwZjqjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UwojKbQf7VteBoyJxvkgZxK9JvunBGvJPmGWfDkhvmqfjnBLmuTwwygrBPNDDjwXQ6bH9sdYTSV2uysCkhowaB",
  "key1": "RhH3MSGyG4bwJaTvmNHLhXs784u8dcLpSocSodrgVGKnyZAbQ6riSK2ZPtrGMkxjSgixv7W7BYQdu6ksE1c6iuB",
  "key2": "4tsj5g1ymbA6EQYAhET43zi6CNUFHe6jdGkVXQ8SDaf3Wvzh8T1qbFTz5fqmeDUfvgAwbZBveK6PhoRKYqepb6Ca",
  "key3": "d8kDesPaGupQJ6dpnBQmhxbtkvzg79QoFvtGGEKEuQJFW9A3bguHo7PTavBymnrmDkrMgNrevi2qrsmrJLGpJNL",
  "key4": "YJDqbUFBXoeVfwjcNSKCszEkUm37mVhwUXg4rpEcZQndBK2ed1FCw96vv9joJN7ZweaKDjg7DVvm7QwW7AhSjgm",
  "key5": "oupLVTett8EXD2kyV7TsSX9EhXQWxvsS4cx8FuM6DhbxGrQdMh5gei8Z4iABbSwXoL7eUdLuepiU8myqzD79o62",
  "key6": "hZv4uhkRMNmR32LybD8csrcELwpqS3ijR6tjhEpSWCant2zcd5xpjMj8DCPdutPdSLbmsD4eGEEUQz9Aiydsqut",
  "key7": "46bRtyhU41WDQsVQ6udtrBeJwmkwBhoNdyS2Dm87LDTN4v6rEU6hBnkDvJs3aX7ejtBrBtirmwHKgeHqY167efft",
  "key8": "3dfagJJ4DoQ4TDJybKTPqtBb5kgY5nAYYxLucWjvUncX2DunCAzWKMQLFMU6URuCQKFK2CFCgtAHqjet6Vkxhmm3",
  "key9": "5Dp2YmxYnSnZioWnJWfQkKWbVRB4FQ5ZNBi9GFiUYDqrJQHS53rttxRQUAaELvXQkpWBeAahnYtnpUTAiUqcCPub",
  "key10": "5ohaoPFD1bjp7w4hMkm9k3XUHnLCe5jhRMAPA6UwnisLM62g7s2ox57nyR7dDZc3RzJz81bodQXZ7EgPp18nmAAn",
  "key11": "5YxT39qQA5WaQXzxFobtg6zT6T5o5zZMgRPaKV8g3mWZ4NDXMBb3JuKtKZqK2XwrMtraGfboYKYULs8Qw1A3RYC4",
  "key12": "4cg2YvW4sHZ11ZRWNP5YEXPxFBuT2UkXpiUDbXFETMwNfDy3xdd1D8MSxaLCY2gZcbAANLcparkmxWtijFtEmyWc",
  "key13": "23KoeJGEyoWh6Bx2Use7YHReM8f89vtbRar9ZVc4RdnJvUkPnfSPQH5N1PxoRwVNHkPC7aBU4GPFWtg84Un9pt9D",
  "key14": "48SHRWjNKtpHWnNEdfVECBVtgTst9MTXMtMjR4YMQbZZ22jWFQ3bCnKFSETDyCuw7oiF2rft9KfdBe8gDJryuex1",
  "key15": "cfBX9oJhHjBBZ4DgohwhxxAt54geLyNsDNnykiHSZr7G5NiWkFr6BFKm9R34AdGvYsL43XqnjGu193vyHd13MvE",
  "key16": "PVSNRr8ttuhyFUbQEAYrKusJzudA1PjL9KVs7X47nRGnDtLvouJF9rGWEbinyas3mT78SrSSjL9a69KyF9ngvyJ",
  "key17": "3DHnFfFAGP9MT1JipzLDpUG4os1puFTripD1crXVe5kL3jpgspGi7PYgzHDgvdHnbLdkpdHwKHEk9iEiJn4BAR82",
  "key18": "2escuH565b9encBAwePT3bj8Du7NwfwNiK3zoRCnpXiEeJGSJwcDzYUytqJwWNbeSc2pJCoLgBQXVLG5pGJ1s6qK",
  "key19": "4maR4sSncaySM5UTkw1QoDS2tzkv2nE9AANVJs8huvriqnW53u2aKdYn1oSmWtNwt84Cj6j8DpwRP9uQxRYtYxA7",
  "key20": "64uFd7KyhzAa8DWHP2YPCm9GyNLucH1pQEiECvnixyFtsJPkZT3NV4pL7irZpypxcJTCuyEMac28FtKF5VPvfvDD",
  "key21": "3xXFNtCS9Kn1U5ngeAfPgxebeGyaVdEhXzbzRcE5ZunXJ3QroA8M7pvcoLRxKcApfwxGGiTNpJjSbbU78RPhdAWx",
  "key22": "25opToQGzoFg1DZ3LQD4bEi6wmSp94y4H8Md8SMZjFjgLvvdrRPp86ZMzZpgm6wtDCTupa4AhGztpv4wUwR9yqdN",
  "key23": "2sXZaR8phV1Y3jhrcgaQgqxNfQnSWfQgzP8GAK71idGWtdnBeyvmZgySGeXxKVeyUwLWsD9mXmstiFZWcZsGWwk3",
  "key24": "4sAMX4VcUW5TSMYBrG9jbLn4oC4tAvdJcQC3XCvQqjwkwTcZUQt1QXLTn56LbuN7SpJpiF2SdXFV3cQQxp24QkH4",
  "key25": "2nzWogwN3TpDet5qQ15iNMUvaiey4y2tMb4KTYKYEwStJasQYERLCcBjb4WvKWNxLQFxSqzAgPwYDN9abCuNDPFZ",
  "key26": "4t4U3CqtGBdyXVSPnAivXRJmPb4SzfdRc4gQQtrtkrzHoJRiRpoQczWUSbaDXaeBzSJo9KqxYNZZLcZwn1p2hMsi",
  "key27": "r73JaPbAEmnRZXA8zWUiZHFe6WpyezvAM7mTyrLmCR6yrr4359w1oZtaPNQvMjECGCfv6LdyZzFWzM4kwp66Rhx",
  "key28": "3bKXCTeRMALwnxqb2Dqq3WHrz9wiZVp8YfHDvtSYiDDXTtmtEvXrKsQX7RHMkUowH3tangPydbXigpfDGWhYMZaN",
  "key29": "stw5QHgY4sSV1V25mWcmQhJaDoijE5hYwGsLZDKRyRvLoJjgc6qFcha3fbweYi3XHs9ik8rLGJ3599UdaHb3WqH",
  "key30": "21dL4JGboeMZH1qgjtKFP4D5xefsSzVyGpbp6uz6sf3A6jCPBcngw3Ecw9upFxkJsrsivRphrCYvNVezoMFvvnf5",
  "key31": "2f68pACRQVMoCwaA6znKxVrKztQ1j5FQ1RNHktBZzUXteJ1LsXnuo6amrb2hd7oRG2mtdzXF7Y4W7GvbAPeTPvPz",
  "key32": "CjRkFYXwc2feFBVz734famY5SjRtcogGbGVyWzcdDgvoeKfDNvcmHQzmcAeGxUSk3W8HzTJw6RDnHsb9KGNHCr5",
  "key33": "2RCeiVrezxJfnDTTrYcF4AigRamaXfQ7yZw2De9cyP146ry3xFJMWveyQL4Vabv5sYLadPeDbocPaqa5uGUFSFLh",
  "key34": "2PcJvGCougeH9h3qDELDEnUpsSRaf1hth8vfLgU9KbAEUdPR25yp5ju4EFpNqzeyKau1jbew5ZXRXgCzakuELhcz",
  "key35": "25XpbwzCbdjsKMEQ4cxDMbM9QCQrNgyGXhPh3sbwrjDybcgqfjFffzyvVGgof9VMj6USGEozDw7Pr7ArpivLCB55",
  "key36": "5yR7WJESkA9XDQBQmadY7pixh9fnHhRBUCVe2JMjV1upNTahyBSrchbU1pyWcC35NsTvPdoJ9B9znHc8MixbBsUf",
  "key37": "3rRpxzstfe1P5ktmSwbebH83BFSS2eyiYAjmfhbinnh6JCLXRvNph4oTQeUePnbDaP31XVbMLKjTeo7G5vTkGAEA",
  "key38": "5pEJGYS6RL6778ULHvSAy2dGQkQFfYTCp3ciGvpNvBrgo1Zfm3AsmXUAkTd6RBEQ66CSKSLsk1iDkdg1giJPqPhU",
  "key39": "MdE1WBRKKH3W8X8mXwSgFAibdYDAfqhUVv5rSUBDXwLZ6GpxLmdworujw8C954Cs32nf9wcpcrUNZMo8SmmrYN6",
  "key40": "3bMZZfoD3ZeFNYTwii2mswvZQNHvfC7tkANssk9rdm4QxThafnhorGFDvPUe4V35GkGcfhRXm9xNZbQQHMuPR5Eu",
  "key41": "4brY6bbiMs1YWzmjRbnMboQu8RGp4mk8Rgtsq8AEQYxPSDn9tRQi6WcX3HcDT9MtmpdRyeqN7ZWiUw8GTMqV6x6T"
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
