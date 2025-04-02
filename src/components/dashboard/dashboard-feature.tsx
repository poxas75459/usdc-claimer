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
    "4Kves5PQX9RR2c7tdhjdb3wrL3Td2tdTxrptVQBL81SUpsfPjJ5cpuSkGEzyc9ZyaEiaBHZaht2MB1EHBYieuU8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5eBYoAG3c8tCNZoXicKAHSBUyTjrgRgGn59Te9sVfeUQKGAFLsa45PnvsSVKnWhiYud2KDsj9YyzdJusfr5sKj",
  "key1": "2iErUPFgW5tBg2t9qJ8RKrqBuG2d3n4KRs62vQ1ScUmg7ENcmBcBE1ZTnk5JBfn8NeRDKy41GWa1F8hb3BaAY9Yh",
  "key2": "43aAQB8RzWD7uTsXmfAYqv6PN28DWKg7CDfzb1g3jUrnQrcLLYEwvpbhgyXeVUPRcRPiSzbK6cWfg8qmN3MJyxcs",
  "key3": "5rnkZJ6Gkm2JgBxTVJVwd2DHb5Gb23XNjdyMyTD3u2gEW1RVyf9bGqmUzwR6SZfQu9jH219VT79HP6zUEqxmFnvW",
  "key4": "4cPCVSzkgKaX4C1fCVxhnjiYFvqHGSPYxGHENrKwR6XqXt8H4zPwj1nHNLZz3svbFxbZ2ZAM5Aq2TctmwpeHHMQ9",
  "key5": "5LUaps24BpmDDUkAaugnFWjEK6XHEfM6YUCojpkECdobQuLYQqyGL1BAoNshw7E9UhPtE62TFyVbCk7DbZnxZNqJ",
  "key6": "4ixf88XJ9fvgKYVtZg1EoRa5PxGmUfgSdamWSix1A1SvfQJvQ3DnEbgcTbE9yNi2XfuZhDpna36Jr7S4enRZZyNx",
  "key7": "5BQbFKt9TYj4SJVExmPFvU2aBAzNZobDTfujEZx6WuQWhMDWq639vGhPknHHith6xPtdABEcDxe8FEfeD4r6VZ41",
  "key8": "3L4ntJy7eH3V8p7phpQfa5XR3iNB8X9x6r3tLuQn4wd8JiLM18xsEo2LnGPv6FHWZuKLQiRJ5nRmLUzcL1V5tSkK",
  "key9": "5v7y2qbZ1vgS6iQKUksAsQBmcHPdRLorFZdh2k7PofYYZJaahx1dv6nQS4VEu5fexfNdDqNPieezgjr9dQafyhKb",
  "key10": "3K3Zzx3cU8hfVTmVsZVVoqjtz14grh8CE9L9BxZdyzAr4R78ietJXso1cBwmZqWXjivuZJwmrRerZzJv23Pv6Xrh",
  "key11": "52rwFM2igGX5qFKdGs1wfN28CLyLrFmDRQjZs82YKuNq6Kd6kBazgwqGxVcpjjLdGSyTEhorjPm8fk1o6qKMzssv",
  "key12": "61wnquEjoh4ZTji6gQV6T3ARTXW5VTt656A74LtfhJR4kp1YwtgcEUSnPwGH4U7Ry5KWupgTp7X2ZVPWYqBSjB9W",
  "key13": "4Fk8XFZ7kDM3SgFmTKbWMAbK18ux1WEZhbbd8jnwXf8m4o7uixnaibPGJmSFwZjcfCm1c8X3XCaDpqZ1Q4bBeBoX",
  "key14": "483tRaF1R9Kw2gy5YsNRYxfse7Zpj44uwGb2cukH9wLtr4qe7Q8K5FUt8Bf3vQi1WaCHXAsrnqbUB3i5WD3LcJ9P",
  "key15": "4CGs3DwPU5MaPq5ffnP7FEau9Abi3XtfzviXTk93WV8mA7fqaKCEZ4oJRCsGiUvEfymHFHjixBNcg2KHLRJTRUHb",
  "key16": "3153awNbvv1ogkR39nM6k2YEHYbLttSUbpCvw4kz43H3QYdxWa2HDz6LbEP4GNw8mriRnK7YSE6LwW3MBVkumMZ9",
  "key17": "4SheoHYPk9SFG7HAxgsAVi6uJBWT8nU1tBE6Aq55N1pvx7FnYiJLotKbWz1TCvXnnTRy4VV7g5QrtEcArsCbJcK4",
  "key18": "5bdrZCoFFtSMqDmFjPFcfa7V1XnVgx1aDczzLKGjfdS7Q7HjZHiZbUYPA2t3vhLS9tdgFdprB1qvYkqjksenyqYu",
  "key19": "TJrpTVRjfzRhj82Kx5P8ptb3imiF6t966UspgaFWhDJqmuMv8cyW4Nzx6xPdd7MiBTuBrzuv7qej4v8yk9gNouK",
  "key20": "2cTjAAjUX6nmhmMUzuC3VQzi1dGhrXB6zyFwZehN3h4TkYqjh2G5So44Arn4LfCP1gT2Qgd7csY2j2p79A1HXqJa",
  "key21": "4k2tUioy4xxwZB4pc6KQzpR7LqM3iAZKbrAjEKcHicvU8ACB2iz5uJF3RcxdNbA8AL18pcwFsuNDmXrx2SVq2JMn",
  "key22": "4cYUFNju71EfBDcaBz3qLkELq2sVHYchR1sLaLYyuDo72oZnJSS7iwG8pdQ9rScF5aM9nan5ExQ2UPMKZBCS8iiU",
  "key23": "2LtVrxveAmgmcg3wqbVGSKHRzpdgBkb4dfaLzTxAmy4udcgWbPR8hLXrWdYRjXYsFeVYctYp9JSb9zELZ2dBapmZ",
  "key24": "QMXgoHQSFqoheLQWfETiLz5fZ8dPpufa95QaXtmJHrJoJq3Seg2W389jQLxhsaQUrX6okDywYim1WADkd1KbCjk",
  "key25": "5mmGVe7Mos8mTPaCxM4VsC6Hb8NE4bWV3dvsJJrY8e1hzkqwMcbNdxK4jSukmggLHuykEa1G3iyNeRYNRkF5kg1F",
  "key26": "JFwAEPGKtGXRbJs9m7FmQJADvGy47sBT4F6LLdoFWGBqohv2GsyaNdEuu4rFn3ZP5AY9q5VC7eGyTxYztA9ydS8",
  "key27": "44EeHoE8zTxKBFe7B5Q8TyCGX9fQd5oyFeuj8Gh4RncLcw9kSg3oQ5vkSg25KsAv7XVyq7zvfsE8hm7ASY8qpsJk",
  "key28": "3TxoN4a2GrkgCGUyHJT5S1sYwPQsNiHQZSSw8cUBREczgnVNc7ZKCY4gD7QFUoiPVbzCnj9TKT7RrB9s7seTGTuU",
  "key29": "zpJbwVCn1AVRTEvzNejrzoqk6PDxRbNvdXjRGaX7S6qu9xmXgDXdCrkJaVAzd1PZkdN2NqnXxjwMKnqHt2dBtnL",
  "key30": "282HcsfZAAnZ1Cc8Q8bM96UTZLr8AGXJnvTaYeu66hudKFTDJkwN1aDULu4XSkcaixg82sGU4NP1ZTgHrGraLhMy",
  "key31": "2ALg9QMsXyaZw6yCxjxpigEBJDxDNnja8EP17VQmCpr38GJSMta3bxM2k2Z9gCKQJRGFj6zKeCRPexoZVT6MiWrq",
  "key32": "4pVAJq2eXUcJApSfozmEckywV3vNYxJGL6FkcLLQHN8tR8Lc94HLPbDNZWJ2ZBGtHofprL5m5t4o2Noz3d5QFgFE",
  "key33": "5gRvfL1YQV4k5dbaiFqgMHHSY7oFQe9DfmHoW8hXMmExSbVL8t9R1wQC6QaxfgEeHNW1enGFwaiBvbBnkzvb6yCK",
  "key34": "5NhJfzzZykNKNnoXaXvbGroUkUyJgcEtK3SBWdH7qRWaL1kxCEvQ742sFGKVYX7Mf6RQ7EWqC1Zf2qPvGXMJ3nHK",
  "key35": "2b8sKJLdy8sR5hdEKtVxLAahNsteJJJ1pgNiDGmmLrdpjePMZoKoThUaREmjffC6AgYJKS1ia5o8bEfKj6XgBR8Y",
  "key36": "qRaUD3W1zp4ughcYGrQJLZVgUs13nQQhd3aP2iX9BrfuTdetBeun7aT1keQbiZNL9FkvPQtKciCJ6s2YbXbdezY",
  "key37": "5aCZfKAJjxrWEm2x3Qik2JUWs5cocFXLTjvxGHvCFv9wR2KDtnYNdbei9D8KER9NZWTH13CK45Qi1aokyMdfSSKT",
  "key38": "2N3R9TsTeVd7sTBFctA8wsu86i2NNS5tjtHjz9EzCjhM6Pxcf6snQXWUnrQH2uSGNvWeFG4EtD1Xb5H6mVzBsxQU",
  "key39": "2DPh5enCam8VbN5sRRqSL7wB6PvHaXYSgUEgcYhbtYVspjjqR2wnusaZAECQkxDRji7MBPsiGnHy8GeSZXhzeD1S",
  "key40": "KS3R8utFPw1stzjuMtEBjF9igEcQvngZDfi1JopuRbXLZRF3rc71ecZMx8Ps1P7HKXTW3a62qCRjwSe5HgMQdNF",
  "key41": "5iKGXA1yb7fJ8F17c6iRrNgcfVyU9NZZ2su1B7vhMVHghquZ4NXjtooFhHiBPiMcLbZ2MC7TPAZqpLAjiiWNtaCw",
  "key42": "3LY9nGchU6Kz5FRQp7ePdLjC85pDxwDKbJNht4kFMtyPvudhpUudKEDM8jHm6onZJi6UeUkVsWsot6oLHeJNMGHw",
  "key43": "hYnXSuKTXqT8nSywV3cjABCJP9vKtpwhGowahYCQQsrFyHfH1SkG9V4XrNDo5FSs35ZeQYf3cJainGoV7ov6CCh"
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
