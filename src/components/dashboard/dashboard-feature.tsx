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
    "34XAdJkCKz23RECB8MnWzPi8VyFrhifmwovBUTuqNG5dSg9YRkhQhTPyrJSQK4AX839WX4mqhsLkhkXutHXJCqZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4YSGJTUfx33A5Qho5AyQCawoDTzndHLNDLbfUwvNchqGEVLCJTkzY7JQ1ehDuzFiPrgh5CYM5xErJ32q3GReP3",
  "key1": "3c3oSGpePkq55i6AUHMnwW5umhqwZoyrzRgtdYdoTnohBoTTfUy4bte5APEmek7xXHCrUB5VjQgrTGyXZxhgPz2F",
  "key2": "2ZcabintznLZDcg9jnSoGZpeCsBQvkKPqrjQ1bUaK3hM8pb7yx5mqp1mn5t62tSmJxPRswRh3FBnY7Xs3N1bv9H",
  "key3": "5DwnEBMYB1fcVax4JcJAVurDHQfhScbNCGv2HVzajULwjT11UUKUVF28gQoEnL1riuuXN4h955qGCCc3SeuWZsMo",
  "key4": "5VWBfhA7jTudowg9iBieh5NJgjpNB2Xz8imks4Dc3ZaShzNbnM2tFFYUr9PMBWdTvQsxJctwQs2V1PuDvmG2qjb8",
  "key5": "4WFufS6AMDUtVZVVzSfZveBac1ARPmvvME2N8GWCKuPkQcUk2xkg6dZDnYzxRxpNyTuLirErNhvW15WePkEUwUTk",
  "key6": "4nCRkEKB6twnNZMW7H2AaSw1eyCQNEvUJSTPNgngEQYMUDfdEmuhWcZtr3oV7MQm8WJeaRjvrobnHsXhqcswbKNE",
  "key7": "5v9JekjgbNL5fkEiwVU78uonLAbqJXfDPSquULJirKUrrS5yYidM4i9mgKDj19SpFSo2BzqAN4PtRsjrwJjLz1Q8",
  "key8": "47z849szFAsUgx6cuk7ayv6KkPicM5xmg1FpjQfH7i3eDMXWUn6vUd4xkEZvAuCaJPuFioSp7EdPHDeNJjzDohGV",
  "key9": "45M9BBmtUX7LgUM7fviG3eYU9j5N6izM32TRNzuh8M47W4uAvvaoE84pNoP6ecByWUkfQ5W9t25JD6W6HvjsRwws",
  "key10": "qDd7YqZD96aaMmMJMdVLjQyHsWMAE3rQNgF1Gry7YTKpZNKGqdC5tiLhupSEu4KfYfej8oTFM28FGEKkVwzgQ9N",
  "key11": "5LhSNFdgRR2e9HD2Gt52AbkYFWqeeB3nfWZNSYxpLqkXnWMFqGjN4QdNhNb34eQZQVTrjWcSw9f3A2iQDnHfNbfg",
  "key12": "61UTXzq4Jbd6QrTgtSJ2kroS5gzSW5dWcqAcu1UhsQhcf9hxzDuP8uS8TL3dFfnfWpMy8yVCJXpcK42G8DE36u9v",
  "key13": "3zpZd5sbLeVduEoQNYU4DLKd8d8f8oiJCfoKFq5cazq3PfCoiUh97Lzpu1uBcx2zJ3dnnYekBNjNfD8YqgFceVsK",
  "key14": "38zbzxEzV4tppNeXfz318Ja3Wqk24aeH1QdGi9mnX86Na6ictFcxL4F2watGRURPo5WMNCEJyP686cs2zjRFtdhS",
  "key15": "m3Joj8cUf63wwQJajn9LFA7Kfk7BmdT2oQgAgQQLUsGKtH2s6ikb2go7MeWPyCHAEn1wkvQ7nc4EJNEi1BSFaok",
  "key16": "2uD7xn3FLpF34zQCSqTN6gQLoAw9wScUbwixQ4fpieZfHrd2UzhGFwryv4fGraB7RBnD5APvkgPehgoW1QL8oAVR",
  "key17": "2UnpuPtN5fxFiAa5XnQtLFAP8NKzVpg3ManoF984YbMN6RiZ3D6eyS8sSyaAhNnszZrhVsqT96CbEUraNXw9nyod",
  "key18": "4eMdQhHLZu1sh3vqziGT2VA1NisjJDxAn9DDD8rVcgAjEGMSsfTVKhNEKeVvkyLUSDZZSGr7MSFxRNvwG55DvpjJ",
  "key19": "2azVjQijLyeUg6RVW5kugkZfRwTYgncGbDy9sXsHYjDvudamAtPatQMUNJbC52F6i65wpAa5ksRCw3V6HjoK7Auf",
  "key20": "3b56r13aHzsXnRPmBZE8KnLHQFZZ8Nf7AJV3XQ1jWxfw9Tacuw7sDMod5kVDcHzvbhQdN645hNx1gVYq8RtYmpiD",
  "key21": "2ZzmdFHVpHUaAwFqcMGNaXcDrTHWijYHtVVhp1E34NU94DrD1aV5E4PYANWYSb2yJyWvkh4xJeHSjGswdyLZGSCc",
  "key22": "5SpUue2WuMkvMCvt8mijStA2uNmtkjgxCNDriFm8Ca7XirbfDK6YrZXdHiwZs2f7EdXKaTzDBU6BGshdzK572LK9",
  "key23": "B85cqsRQNemW13UtGXCFYphaFzrenhB9G1Nd7qZDenEwFuypmKaB3c72atVRrAXxfW9aqe5wWecCy8eYkuGghKE",
  "key24": "5oH7KbubWU5tMr5cKL7pub4nQvnayvBWQQAMucod9uagVj6ti7xi4SwjMn7EFEu99KfL7wjasFQ71zUBUrZME2Kv",
  "key25": "2X2YivZVqmchTMD3NoCerrCpWDKTNWSKa6Gav1m87w2wnUp6wfFMnxz6GS9pK89ZnrbGK9VqrcqMfBH2WyrGaQde",
  "key26": "k2yta1bozbvye9CXJNhJzGa4kFNvCpCP2L1Qqmvw6foEKXxCSPyHCQbNfgpG2XK4q5pUXbbnA3Z51s6Gn63Z7e5",
  "key27": "44SURqVd7JmcLPvGZPCQx6ydxLUfxEQLX54s8LostxrQrzoyC5pnCzsrXciNtAXNaMP9bV2exGopNFShc2Ze3cQc",
  "key28": "2cUju3sneEWrujjzG3SKUEvKoRkcfjkL4qujo5cnu3uKtRYbC2kdVkHwRbK56Cjh4nRUvwKk8YkNqFvKVrBv62BK",
  "key29": "47m9imJ2SG3WcMvZv2uAtHPYQJcwxom459FNSkkeFyzvYXCuGzLJWrw942MLt6rp15XE8S2KLVXLJdd2gZhvxnFN",
  "key30": "2Ss7cHTE9yXQu6qMAvP4RK5KevtAjzyWFb1aVaPj8U5EViS28HMjPTpwoh4q1As1wC9KSWKMSnksfHimW6dfCKN8",
  "key31": "379c9wRiZZE45SMBvbHx76bPDnYRtKdbAqxrbMCHqJeWVA8BcrqrSqcyt1kh1ZYVJ9eWsA68XzcUrP3jswKdDkAy",
  "key32": "5cy1YmWRFFVZvuNzMR6xkmLfXecmmPgnBYwdpAtYDj5AYoxGtcJ482PjffABfPK4vawBozGBgeGT5HqxJgd2K5nr",
  "key33": "2J3PAjkCGUDnhaGcM3oK3mCLCn6SN1vYY21q3xhMMGRjcWHJazmqx2GYUCZznUortb9dGhDwt6aXieP8AFzUYvkq",
  "key34": "z7RSQ2U5unWpRnjwip7BtiDBGxZdiamvGXEhFKv547jVW7qBi5xYp7s9CCBTPiGam5kKsejUgCznHEipjdZZSbk",
  "key35": "4AQYfDmQHsbnSpgJmiFf9j91s4PiLSuXuXgyT7H84vj39RrMBkKeBJsSHoH47UxZnnk3Sb96FLVY3sT3hMgzfaSF",
  "key36": "4KiJZGBF3wx5KZYP4VxAQH4BbFt56zY7FZYveQDQ5bgx2c49YTGLid979ptdfZqdiBrtoRCTna5gN9jccsougXiF",
  "key37": "5vGc9BxrBUHHhZm8qDRkpPLde2yKFgiUQLS5AF9DLzGANPGEyV1iQqkdSFSfKgLtmVEZse23k2mSN98CsFuKf1AZ",
  "key38": "abYXdC8joU23DNs9PYAWQ8qZGcmKbZqTADVEGYYKJuK9UZQXBk4yj2B26QKCyw13T2Cqs2wmC124zhbsAWzEuYV",
  "key39": "4ytEXujCLqhER4edPULDrogPhidnFtVkCVaeV5U1sKLPJ2XhEvwZRDSzvoqjMh8jbjVWM38VUS4z2vawzqjVj5wo",
  "key40": "5HJNAkFupX4NRfQSrjCZBE5ArFa4DAoCGAVCDYJdNo6QymLe6sQWdw9AfcF77xXBkSKpTPnYQG5NBHv1z6xqSDi8",
  "key41": "5HNRXvEMeckKyvzto34idvWvYtFigjfj87FrixJQnh2PSkr1cjRWkrCsxrNUzq7cohhPfgics1XVuN1jUnj8GvLM",
  "key42": "9ZxBVeuyT3krbo5n7kiHRaZMgvkgKpJrFYeEkfZTGKBdjAKZryrvFbV5ZjASXYjuxQWPGwzVLyKubWTD5dEMXou",
  "key43": "5vHYj1AQK1F1T8wZTHexNQtREq2ZRnDHkkcdZrUxT5pXy5vTpzpDqvgLZ9xrbPAoKvQF2n1iVW6PiStXdmDPmTFA",
  "key44": "62yKizJnaDzNaEhU7xksY4FPNRS1B61iz9ix3FR8HxicNKzn2CEET1QekKAPzo5VGqfgwdX9NKcc3SWMTYuURFTE",
  "key45": "3XbhCwS4GMCHuWjQmxFQbHvBMF6xF5FeWwkh9z8cf38J2cFq2iioaS81EvVT88UC7Kee5S8dhNkSKs9QrNsC2up"
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
