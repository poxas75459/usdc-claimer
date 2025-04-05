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
    "21A6nMuDhwqabHbxCAJsGitoDhy5nf3QnMZDasRYGBsj2tUbr7Bdq14bgyGpgq6dG6d3947TL7yChHiw7b8ZiRBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "brfNtZZfrnnuMGufTgv7261HAGXPCKKMqzgxowKFxqfcvQ7bBFi7h4Az3BPg4Tdq673Y8VAgEA8kr1Na1kj95hx",
  "key1": "oHjfzbMZqxZLmypKoUu7jqr2doCg4embNqoaYwjH5ff4MbaZXBYZZbbJ7YnUHMPoJwaPLcZXsxz1SpEDcE1bjGM",
  "key2": "4oNSSRrpq9H55edkw7ga2F4KvTYqY8yJiLdFrqCKWNtmHYu4pHqp9nz6K8QaFMzU24kFHWjbmqzxrkoADXM2Xoyq",
  "key3": "5C8XGLNvsYHa1c9afdbwMxRAmyBAhLBx9LFXJPDTCSKQCaLNvy2gTKicWUEvJppGqT7YoGdXydZjJRoGYSGKwNGE",
  "key4": "4jZn19oxuPqhfskSEyzXLtaYYWfZFTmkTsZuR6pJKKqSNZTcnYZbwkb7rioRScLegdguqqxbVdLy6MXUZcAK7YTt",
  "key5": "63f1THZ1fj2dZYUW64DE3QeEbskPHmA4mD6RJ2itzAm1fJHsapHXG7QKjRvCgQamUf7nxzstd3idYoefce1hyT6v",
  "key6": "3rXGiG9y54XfQy67LJBK5vzDAE2Ni8NNybrVVMH7FzD7cBJvsoZysstoRDRrvZmTk5Ugi7sBppHUZwCTdgBTb7tV",
  "key7": "2oTEZciaP1GiaJdcbRjga2cqyPV5sm8Xn347VsLG6AQS8nfKqe9337DLwEMUN4RLWEjj1B51LNXyqD6TuoBFhe68",
  "key8": "23sKxdre2NngD7cjyusJjrvUiywDq4dmV5Uhh98cj3hf5ozjaB5U9NHwQW9VvmCF4rYgdR7TWzVvJdAqG7T5VGcp",
  "key9": "2EJzBZjQfpvkTWnDZQux5whjsJxG4avM9WoaEVpxD4ggthENLehWYFSmSHxUNDkVrYNhpCTtdY4fvwc4GHMEMocJ",
  "key10": "625yDcnWpeZ4YhT5JDsvPVav6DtYKXBapQZHR7fmhLnYD5V1kYy4X4mN95R9mCR4JirrytJP6kvG3kDMQStriWaV",
  "key11": "6JyQ2wpiJPfooCwjdKCNZZcqhqZHydeVRnQf2fiFgF9w744pPoWHgQLvEGxbC3uJZ5yTPzDSAWLEf6PSeKHJTLi",
  "key12": "2SNQiBUu6sFyeMFEgfGV5zBn6pPtpGJthLd1RZ9TtynMqSrbrQp8vztJoAxcDM9Uod1QKto2GzaaGPQx2PFDUQsG",
  "key13": "zFHBny5egUZbEuHZKHvBnRuvUXGezNHVQrJhrYZ2PGgHHBN69ju539y2EzdQU7Jyif7uLoSeGbuXuQAAo121GAK",
  "key14": "5SZT8C14wjwnfnLAuzLnvYr6FbswtxCCqs3ZXtdkBXZNAgjySb98TxrvgJmZxDPy92aw8nFzpByWVL4hCX9Tq6DM",
  "key15": "2XNf4Utrca6sWzAmsg79UfjR8nCbRvWyh5skDwBHGjzbFbSFgxjCEkJJUG7kFWyPVf3N8gpjEtY7Wz8aP1DjZRHM",
  "key16": "66EddqxKoX8s3Kb9QRjReFeor7FZqbrhTEHAgDCVo5vJRvazCXwcoJ6v79inNuCbLE7AVEFHKJmUedY3zRPbxLXu",
  "key17": "2U2fSy9rS5i7RV2qtWv9bagkGxov5dhzokGLP5kx1gERwwuLDcpH9SuNByQyUtAttGSsCvaBUncn1z4rmDDHTXrU",
  "key18": "4XQaXZN6LJmYBNErs57SCTvAMg7Pkxw7s8wVYSYVjtdAt84FWEwXh3ZB5MuQDCFbJHLWBbjK2zaSYqTnEKkwdg7t",
  "key19": "2MHXF8PW9bh7cMXK2m1v1dapV756Jr86zU9W2cHMbbW82ageGsg13KoescioaD4sAMa1sbdD9GVHu8XzrnoBqu59",
  "key20": "5sF9Y5mUJ26pkosuiEFbsiY4XLrCrdyzhQZyeeNZgM47ZR3AFN76jnpsAwNLE7Hj5uc7wwBZoZeCMTNgfeAkxrMN",
  "key21": "5z8ajACWuWFTximpgbLAyAELQWCh4Rw4j7pHR4wV31WdzEGgmoydrakdvrxn6XuNzGLacrHqLh3FoWYjcAcmTawG",
  "key22": "3teQHrqzxytcrVkpMsqtRoEBRiYTRY55zDS9WbGi2i3Jh4fa7cEVj3xPocaVJ76GWiX9as9iKkotM3vBN2AEFfnp",
  "key23": "57TErU6b98BS731GpDsW7Q8BDgz2ebbNPM5TiX5N1whUgdd3cLDJxGEW4q7qBen2Vpj2MtZCT5xcHwKm5VGFP8HY",
  "key24": "4U5GDw2Hp54Lnbim6PiycJeRB2HfhUQhVwmc5NVkTPLv5CT4VTM7jGVmag2nRuWtM8q7bLCXYwjy1RvxKugYgug9",
  "key25": "4pZYQo85dG2S7WcP2ANDMcEzU7FbX2Ztb5VKnBJjaAfRXKFW6Ws5XEouk3LS6QatBnADCjJbHmDk8zUdNfW2Hupi",
  "key26": "3Xhc8bcjy3bTwxbB4iaf2FDRHVztMtDCS5Rr2CnemBdTGR3TgKBrTAT4WMM91RtJTzztiM7wKfmRqMM1vx3iX1PU",
  "key27": "3WnwQLRhpCsvtdqJGWBQTkzEkhcGyMpxLKtgCGrF1AjzBQG4asDgA3XckCTFi9dTCpMFYk3ZgVhh3mZU487ta5E6",
  "key28": "4xNAPhDr79uzc7TQYtBQWSswoxkpp6JQ6XMKX3qi6xNMytYBceBnQ6vx9ymVkBtqfRCnqJLqXcG3gzCw6oBTw5xq",
  "key29": "4rwJ5YYPyeEZH2ep63Ng24ZAGepVgzcGQtC4HXasDTGrCMVFB6kUqmzGgtfjfxt76Pfhe9DNHqaBZybu2ngZaHo",
  "key30": "5jVv65osrr6xDPq3pZERVHvdWxiL1z1aJFSMNJU4rQKmqcT2dL88svtffXMHZocjEAaJR3FXof7A1Vr1J1E2YmcB",
  "key31": "59kgnFwmu9yTgPMVJMtbBwwMJwm2a1ySPoQu71MoEkJTFL627ksrCBb53qRXq1SWnNcE6YwdX8rNqMxLErtsQ9Qj",
  "key32": "3fX2vq8DCxv5NEXKYSicWtP25YfGtdhGCGSPWiNSmMS5sMyzMftVPGRC2BsBYYZdPkV1wCaytpcPjGnNjzLrFXPP",
  "key33": "5SHiWukRDRNzisBou2VA8xZ1HBftimxEab6ZzkY5DpxzqEVNjVbsM6Y9xUXoJGQmrBPr5EPhEkiKFAzFHRTguybN"
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
