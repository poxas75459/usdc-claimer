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
    "3W4JHTEECME7cS4AdgdLsv16qg7qSTckJe8oqbYwdU8dpHQv5xYaPmfKbUr7NhvwLLuiBBw81Dbb5TKsM2cewwD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mUZQjYUYHTqk8j7C1bhiccFf126eYuugccf9NKMsdrKC6ajLxzUg4ik7mgRRPiFHDgvRs3KqEV48eWS3NM4ahY",
  "key1": "5isBw7ArxjDhNJq7V6N9utdKvvv91LzxedvGaRxMA59vEjUbGpp4C9UxnwNrZkQsNNKjfHWzEtjkTaEZ4of64i6E",
  "key2": "55mcGet2oUNqoM6eXXX8h6Me8grxnxdDW9y7UH35zcSz2h2AS5qZdwzUur5DGCqPaSUmdqmMhqcFopn34mwxUixo",
  "key3": "22Zdyx7zr3YCTzgrGvjw4bkEJPJ1ExvEtjdtxSVzTiFYHwanLUCRWa6i1rrV6mUCbJ6sxPX8DiCvZbqpYgyK8UzW",
  "key4": "Q1p7xi8qhkZ15Ny6sTzT4cJ6MhDZPiMPkXsfSVRYAbXtKUfZDLVG6DH1Vr4wSBJK3vLDnTdJTT3QPTkZwPp3sLD",
  "key5": "4R4aeuA1iocVvJ5GSqY6x8yxbPKsxSAMWXmzYpuNLNXYuPKrLYsdrn1ZBgGCoBNB3iNgLs4bf5vjz9qgff4vhtmV",
  "key6": "5in6gGjBWCzmiH5UZXMb2p3RTZTr31KCfmkQs8GLhYSLbzaKieAQ8UQ5JxUBPy2o3F5J26SRKmr5TRp6Z4RNKRYm",
  "key7": "5DZtozsT1Q8VMBhE1jRWyUafa24VVgAMAMMzt2K7b46TuLnnoii7zip1ygMykbH55EQRtN3MnWaPdS5mHMkL3rjh",
  "key8": "HJRihshxsbyxoYSVYLZrk3TQ4M4dut9LsguHSuKKPMEDDFAvWaYHDvCcbwsGo4YzPSMthU5QUVzsXPcrR38qhex",
  "key9": "32KAURyA6UCC9YVeripzk6mzqGYUo8VHJHP4VYFptQyWFgVZYHYP7Tv5TDuQMM8znhnVoFvDbfhdVwGNTgcDBJ7x",
  "key10": "5ywSX1cXU61DJaRp5hVvhtA1zkHyX3yDYCMbiFphZEdbwLh3H4T2gRBeKddC8pgqmxtq7rmk7ZnDhoKbRj4ShewJ",
  "key11": "243dPbiYrtXsfiGTsGkcuCWf8TL14E83XKsZVFkqfZofJnwg1ejtnSXn4tsKw8K2Eb8KrTW3Qd65qiEkRXcyYndU",
  "key12": "4rH9qpAU1K29tuobeie9UVFkjsgKetsnZdWChCjp8yxHTph5XDySYoPT1PYegdnnJNQNETLf1iDKevr4LmjUenhb",
  "key13": "2KYuYnWAJEmw1fKAzTTiz1wiMNNsWD2ZLdF7HcHsxBMZgsReKBCsSnmNX9YyvePLr6sVCtroHMmCF1fe5SVkdn7H",
  "key14": "2gowYKgu1RX6HFYXu2rnw4BviuTToLEMJQ6gxwLGbN7zgGkgf8HDrozkYBrcjwyEMuaff4SNKnSqvSug6k2632XQ",
  "key15": "5Yi5WvcZeunek57HWorGk3pKqqWkHkgF9ixQb31CTvBapm1Njt78DUitTbB4otity3Q3j26TtCGaDEy8yRG7SyHH",
  "key16": "5ps7YDmLmGZMeNGmdgWgsuRZsrx7HiuRFjM9ogcNWRg3HmMX6ZJoXBWANhsFtQXb7iCWeHkuTdWXubbDiwr5zNHm",
  "key17": "4kAojvuUMCmnyXMaUEP6ybQwwCDRp2CbWwjyA94k1N9oH3xVnF8MX21KWVngZa3zo7u49Ame4A92sBbSq2AV262X",
  "key18": "5ujzSvsfMWtQBNCcg5xGRyrKbbzi6Qoqj9jXsM6t6FpsDdCpi3BjaowpaC9Vk1cEiZ8EAYjaU5mrGr2SBojYUgue",
  "key19": "2H2VGyKtKMTs7XQpaEnZq1cMXYSkjYUMEWKoniAbwVNku23ZXRJuFyj9e9mg1KRLykknfzPpUYfzvcPaBLLN4Y2E",
  "key20": "W51BZLRX4fLJFsFHYvvRGTrjixqFSSEE1oW23Q2vDtvKppC2WnF4FchzQrAEW7QhNzWLKD16wvfjit64HQrcTki",
  "key21": "spqkVHnseNb39ymVhPBFLWrnFxw2BiEwScYBzNn17mS7gFkmXEzMnFn6SMGmdSMnCzLc4W7baiugiSHmfTm7icu",
  "key22": "5Af9KDHfFJvMNK9uWj8QVe5cshyFobMxK95bHYQMW5Lem7rqqiBeCPfUjXqJBiqNCcUMV88rP9ahF1h9Jg77ebn4",
  "key23": "VZCYXrrNHhRzF8Pbt6cKiALcCAnkZHxuQ4dBysh2L61XjJ7FsRhiZpDtQfVefSHpAvd3ksu6bavHp2GtSmNB4f1",
  "key24": "47yJUZaCDn4kRuxukfF2W6Fko5ZufxLdEzLurtyZaXwhiYR84625hkiW9cHDEWh52zxuMMQToEFfvCDdt6MxiVWy",
  "key25": "4rR3DJ23FLBAUv4tx4kotQFAczE2gayriERTkwcq9MfLNruxntQYmQYxRK8pFeC8osVc1zTVDxSWpWDC9ma39DQL",
  "key26": "5dUF3JBu5rmdAoHocFxoTDHgfmvJrMatZQyVdQatyYWp7HU2fopxZk7vCJt1rGt83VV8dymnrA9atYrZ6BZXAq9o",
  "key27": "NRQJvqC434khDSu84JiiXTmUUUTzQ9eEqFs5zP288ZjoBxzaxYizHKiM1Lv8f9FtN42XPZiFt47vTgWFumZjh7S",
  "key28": "395hKJVBu5AXEDxAn1UdRUDwwVh3QnH9rCxfvpRAzhmR2isM4CbSzcGVLpY418rGDobrTHXr8LGT28W6nXRKUvLF",
  "key29": "4CQxw3WgCbKkYsjPn34ucszn7ens7GkZvvGmzLqtFeVoQLkkuF26MTmWRUejdYizGiHsaurT5BAYCCGpoToGKCpb",
  "key30": "5zYc9TbgHiPnsoTkQt5bFCWiZUir9efgWPhqq1kW2A9d5d1LHGY5RWLkTVFnXmyMP3kDD4KqUwZnuAzvrazVszoj",
  "key31": "2rtuUkcYiLQ6Pk9qk4Lx7GVpW647uwaZt7nqniG9ETZLvmq4fL3zvMHW6LLJni5cAGbTtF1tTLsMfNoRjWMBwDEJ",
  "key32": "3WoEMcuygKnAWSHdQzLgc5ZkY1yn4tytqkLwLx4E7zXiGjwd3wRWJ9vtfr3kDLwXehU6MCvhk1zqJpRswjxefyaF",
  "key33": "AQh7pHto7u6VBvffQ6ZBxSYdJQySgSytQhgwwdAJkuwcagVnQBMnvF5XsiWHGUoew6DK1KsGAbJr6woChGHozrs",
  "key34": "NZbS8ScCrUeCEu6asbSbN4jhLBNjRsMv6ieycAbfKBKs3cMcoLejXmcLc8N3j2ifZxHDy6nBf6fvXAcVe2HARQQ",
  "key35": "662rMd4tQWjswuBwfKdHX7KU5Y1q3AxteXynDmt1rqLwgn6r9QFWti3v15yxFDYuZiwPmfAu9drBQ4DRVw3PJp5s",
  "key36": "2ZD5CypUrHeNLTvrpbyvDV3xP27uqktGqHAT8emiPkufhRwGVnGnmvVyR4pz8BwmVamNfXZehMDN65g7QnU9xv2J",
  "key37": "4BuVznt4sDKuJAzfw2Ek6P9AhDaPNmSTAvhvRiBTa7ykizzsZFQWwmDVXYw4XViT5hhSuBddj7ZW4X5aepoviUtS",
  "key38": "4ff1E27HMKB1meAcPnSoFsCXRYm7UEMyANcj3dXaji3bW1NkaZdit7pDStkaBtcEHgfxcnaspZ2pZZaYKadj16tB",
  "key39": "5wfa5zbo6z5vaxy8yvX9qMzaTwmxRMPZN5MeVxXPbJ9QqGxSwz3sWRUbrDNQ48s9D7G2Zxixn4D9zXpwMNgARHwj",
  "key40": "4Yn2uAXwdGiM9pxRHBpsG6H59gsytvqddxQXxBHdDKzEzLqNfdxroiti1BfQ8neN3kuEBv88xjwJiBLCWHkpUZio"
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
