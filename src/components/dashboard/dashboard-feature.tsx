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
    "2wzW6YVuPSrJ6UPMkVrcU1kp1LfEUX4CwNP4QHHg3Z7sfzbNhAYg3ePH7JttzSSCBxYY5XLQdTuKuQN9C2b2dAZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d4xGbXCi1z4KfmFY4PuKrwAEtBBiiH7Y5kudEPVUsbUJ2daY9yYEDTzTjbsf9V7iaLmTCqzF6JazkJruN4uTNDe",
  "key1": "5u7ymxY1Xy9poRu6Q8WQaK4RqzNRB1HUKjtQBaULbesRaLfAMdvUnrXGsq8SqS3WGBxBQwNxHxA2h1SH9aU88qk9",
  "key2": "JXk5knYLpBnxyhhAUXP3CHdaUmnqw9A3YD9ipKzmZxNYPauB3zeiW3mbyytyjAS87WubRBM66qxiia3zyLbjwvg",
  "key3": "4USMz7NnfzXQqxBWjboP3WgbsrAReC4Xn5n6aNcG1q9SNiHhRCU2Rn95QKrQxVnT4VpSr2U2ZWvb346mJgxj7fxX",
  "key4": "3iizYNUhAa99XfUiWSTCsTSfuo4mwv2zwDRmVvoivKEzCz8MUGmij5j8cyqhU7YYe8EMWr9f3y1izPDZKsiD6VW3",
  "key5": "5g2oHTGJHP1hZAzohsqtZB7ULqagygX7fmraKkHthPkiNC5k6MmoFd5GDaKfcDuzZGpxvNoUJbeo9BFZbJk2SLnn",
  "key6": "yYw12f8hHpYy8pQmi8b8xkXdpRcf6oNcUh2Er58Z4tRKkqsPFTZig8R72HCEFGWsK86Q4DrRiNWKVBgpWHQu3rG",
  "key7": "a7WadK2CUDTLwQaz5nHekHmMiJScSw9KFWAQc6QQZCPpDzRFAywjzJRY3mZFMLRpoc6UuUAnQYsqxRhx1UMT7zf",
  "key8": "4qXzT61Y4YZKKpVLvbLaMWdLYXu5phCJwz5AUQKNexDSyNZEZjRLPEintLtYjwAN8R6xRjqZdTumfTVkR4TFrNFm",
  "key9": "2U2vrsx6potv4Le6EFz8SP3YmvyHA6GHHWFS4Hss96dEWYeHSMqYscKbmDT1Y6DKDzotEEaN4Q6KHm1Xf5kU7vws",
  "key10": "22d4EYugVW9MqUMGMyTHMbXUVKSBHcRzwYG6X7o93gfxgzbdtXReaceqoNH8ar5gqMj33yJm3Sutzootgjhiy3Nj",
  "key11": "3p35anWzckJfvWtp5Vf1Ce9KQiMesDpM6KqWvGNvQHBAvWZ1Q1DhwwzdyTT48qCui5AxGGHsmaK1VxokHZaKoFHB",
  "key12": "3K4TpADDgCdpAwY8M2iad9LJvjJdRrWTeTB4ZexCykYojUsszWefWTK1NcTQFXy3BQC4xTG48ZGwjFbTvgED5nv4",
  "key13": "rBSKpaiDdgxKAautQQmv67v9PS2MSS4tHX4G9LjRrHdYUEqfuP3TH3bPQE96U5VJNcYFETFWonTdxzBwwBVyM6z",
  "key14": "4SEJVvrvhTk2pahCZfBEzJbbHxabWVov4RuvbZffs8D4RtLU1PtRh4MX8U3BpMzTZtnmvP5TvY4RWq5iimvU3pDA",
  "key15": "xtwqA91Vj2SycgqQvFSWNZ6mk21EuG27VMrhfJTMoyR1TrQ4CZ3TQVcuQCsLcUxSap5QNGtEf4KtPLNtbT3FyK1",
  "key16": "K2URMgP3dPbrYCeYyrYF3KCMw6sH9yxb7n8WwNeguiURQCgG7vp94N9RDCt5U1grT2Z6KCr4EX6CXdtjMyAkNZ7",
  "key17": "4N9D92cWAUQnr5Vg4b7V6qoceGUjEj5ffJnHAetH8jtYYEMmMUxddnrsgxyw9jYjKwk2kTHgGX9opW2pAQYEXfQe",
  "key18": "5zW655wU7om1EZK3Ke7bBEmS1PcGqDtNtbFhwE2xsmYDcPzncJGJ6iX4WKeEVkZf1rGwfBgYoVcBBsXtBcqRXPFC",
  "key19": "3djBVXZwsKVhSYtVDxcoHNAHAge6SugcvsBrGHXCBXXkMrBbMugW7dR6TutDsbhEJHVfKCtojh9Kc17Lm6RnLXW1",
  "key20": "eKiaSUF5E7VbWXzCruK9BGR1orV6RnHSbddMNPvi7RvY2TMMP4rSNCNXXe4fctsR71cbu8NeMyj85gmEs3T8pC2",
  "key21": "35f59EaAQYXW9Tnen2mEt6EuZ1jDKDGWXwC9VkoU82fJw7PCzL2ascpYiFk4apYZnZgrz6Niq5fpqdh3acWozo8v",
  "key22": "4rLXxYgRFApwbdDU7vCXY6Fvw98L49gFtWCicgT3WJXa8askhcoyeQY69TgE5eP5LjsWMZEVanXGsuwwqgMPSKkp",
  "key23": "CFCMQ7VdUddAr3UFXxLqVKRjAXx8YJxbJMvYT1NHZ89rmcvrNj9AmxRK2HyKHwy6nkAJQVmKQvdNK1V4KC2MUyn",
  "key24": "4aTffJ4zFmhC3awzgXwE5nxLJa8FSFGeXXEy1Rgn9jy4HXUs4MJg5bkRfnaiXFybECXPFzWmUVnbmovU6ZvjyWue",
  "key25": "5XGYWNK9zgtHCRPMbUZ4yf9hWcngciYKmicJFxCzR8B5GcBu3y4nomgtiJ2fRiGNMDYEpjVkXFEEafGS1ngWVMx4",
  "key26": "52dbWLAVc9Vn6XZJuurMxbAeiBPw1nASon4tHFHpe6fFTqDESkUjLajwcpvDHMxv6eef4ES8ADuREHcrTwC4HEhZ",
  "key27": "2cz4wJ8tbCeBFcfh6NihH4XMEQaGUbWKX8jvjmzuToQWi7bXZmPGjQ8vZGqxAy9wPUmHpewadyvxBSDj8fKZwmPL",
  "key28": "2A7AuW6LdHz2n3rLSWtUBa1uji8MuNsJH6wEE93Jty5FVorNVs27zNGmqS8X826PsEXKbACy7DpbfJ6XoUzc3SSG",
  "key29": "heJmd68EuzXPRYaiJR92yFFNs6wu9WAeejBHbNPrbuXkghWsCPPi2meEDv5yz6d746ZXcSxUHMBn8riDfU9zaAP",
  "key30": "4ztkTc94rnWpPiiBv7DwcwTRKykPoJUkFYkpUs3eDrjeBVyobPDC4JMRoDubtPPHSyidE8w5HbFwKQLmdvy4nKk5",
  "key31": "3RKqE3dN5vC2Csbz8CK8PM7MTGXH9NaGJK6FWdozJ3BukghTTpoxAw76f8PRSfKvGiJ5wCVRW6Xwh6FrjQSikAmJ",
  "key32": "5XjsG3TxDiDMvbRZmcAUjUruRWMKNBogVuHv2yqw59QtbS7vYRpArP3Kqh5zpdBo3vdTSq2SkKxViYugXmNZTuH",
  "key33": "2s3ZAnmoUaSxXwu7JcBcfFka1Ev4x1CU4AAcgBaGXAZ2emySXFYGQhh5dR8hQchwasFq6PQguECNG4kxA32Fm6cD",
  "key34": "4LCq7KthYE5Yya98cK67qCR4BM78gugSWJNXH7XJtfFHKG8KhUr8Ttay9M4sLWwaMFfaK4Q8LQ3qUY8KsrhdUSdY",
  "key35": "58zZrAv6EkFNwZr5sgvWNiSzuSPN7xxVZZicaUrmKdETduT8k6kTfmh5EnCvBHE5Pa68J9gg7U91Sa2N1KYEXaKb",
  "key36": "5SYRgbBfbq2MvTzJGtzeAnZRj1vLPh2UQ3DamtzqJbaq2PcFmmzuekm5JLRckpNQ63LcKTSwD2rJGYJgiu2jS219",
  "key37": "h7JYZdu8hdpTnP8yiNNW78VaiUS5cEYaQUTupSoEGvQNpkU5UbTYSTTdq7rMaWe6n69qUkHjsb876peUSdcez7o"
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
