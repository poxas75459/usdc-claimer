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
    "5TpBYt2NwwpuohwykiWxFDX6EyQP7bvftUrWga7NrdPKY4HVcxLJUB3qTjypDBZUdCDWa6jEFPkbjCitrUKqKibP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNX413ot8kk8FPX3TovyPDw3ok4gKGfKSvRhxYB9hLdVZK1exKevifG2mAShyaqNiChagLuesSN9fZ5nxv4mbW7",
  "key1": "4xZ3CU7RwXmvrFjE4Y2GPaZhXz8xMZHJGB5ybEZniTLJDMCy9Gzwf3YCcW6TzaLvgxcRsAv98W5r7e29WbzVnLh9",
  "key2": "3i4DnNJCJBmMS4DJh7fY4R715GpnXpF4cAResp1Fr4mTS6nhwSci5Rq92twzMm7UpVPG76YZiQunBYL2kwZrTGhv",
  "key3": "yPRC7w68e6dx8B8Zeb6rGp1gZXXeu7m3QjyQZZZepujVTHfh4vfzTSAQMcBo6nq3u55sYakANBT6gRxMKEjkSrK",
  "key4": "1inx9Mqg1bA4Z1GjpYFS9sqWpJnEzeezcpnPsiY5eS5uxZJV3VsNSes1sDg4yYCkX1LpsEe7m5UFr1htkeapdje",
  "key5": "4SPvxbx9ReYrt2GJ4LrzttkocDEcwknsgYyEDtSbHaQQMyeVQiS4FyQaJue8steYGkEpsaHVExQ5sCCsBNp3emUk",
  "key6": "48Y7KKC6Jb4omKPRs3ZGwhZQNA3d7xqGxmv3Z3sEgLnmAppCDmnDvxzC16pPZedZTC1NV77tmWaYJypmhemui694",
  "key7": "32THzq1bfBRKxhAa9pMFVUv26K4XkvYGMgVQA64rpkVURcFiRFWqUgXSryvK9NYxQEh9oNop8sDHdCaC7utDMvdw",
  "key8": "4qKyBFcsrZPp1xyb8ccSP17UVgtKxadL8wYMziPVk87VnkUVy9p4wTmwqdM9AH6uYouodnNtaZEetAwiRhbBhtSU",
  "key9": "3o8qUuHM7M7JyTS2mekwWGcJYtHVxCDMHhadjUskcL5pZrQwG16EKVu1NiAGUFtXngSy2QbKFmZxzPdN8aAX32vg",
  "key10": "QvFnPpZP5449P9Yhzsm5o5UKNHzS9QL3L3eqSyVRYhw6VwQdTAvFsuNmxEMoJZxrnJQcuxidcYskWPVAJGEWKhn",
  "key11": "2bu8xE656p1p8Ajz2HWeXsJe9GiBTEut212rKUVeSUxAcZbxNfUrhjb9PPvgJofVWXtLEYJZK95Nk2ojiFPW7w9w",
  "key12": "4Tz2AAaghMb6XA3C6qzAo5RDW6vJTPTdLGvUejazVPBDX9DiQWAfg4uzbLL1mxNzPyNeoeb9eRSajFVRs9S64Wh7",
  "key13": "2uNXwcx59WiZVy4tEquX3HMUWkjc4eWLh6YcmRHBqFHZN2ynoKfFg34viwibR1VSqumeNw9MRTqDruHeE3UcqYTv",
  "key14": "5EJqMNypyc66ZKHTP2ZjtU8x3YikzKLyhZtn9T6RgTN2N1tG4yBL6vqnquMRBKVC2s6FcT1tDJZFYtzfhGePi8zK",
  "key15": "2mqEdQ6RM2DimDjLoQuzYavkJmpgJSTpjm9PVUzboieErMnL1SdJuBQWJRqP4HmgDhismQZEKamdwtHKEtKZHLa6",
  "key16": "3oMjLniW8rVvRNaS2tGE26KsL6pqiVBkabXBDjBKZ9e4fA4S2P6LEbFj2vNsvZHm1HjrWwcYhUooac1wKjDFhNSu",
  "key17": "5avea4H3LQXeipVhREi5Tg6hVF372Rm3Y1TYFvz9TFBZJCgBi3pbpAbxVrBXQQreyjPY1CZ2iuDL6cyYuQuyhpdH",
  "key18": "4EfkcNqyZtmcfJQiq7mxACXUPwits9k3K9v6g7NFdznTdMGSHVXMF4GbAjSuugqFf9r4sqyeFpRaowSQHpedHXRG",
  "key19": "7iHgMqDWW2WAZ6ceJHXg3vgXfU2EKiqjrB3sDjkBkihv1AV5njzFoDEEN4TYXLgQMRaHoCJMepHuDQXgwD3QP37",
  "key20": "2s44dimMFwRFccVqTyF4PiC7Y9rUMPqa2ts8eyzHtE4ijEM4CYJ1ihwERXQo6i1zNk6P9nz4zyfnyqURKCpBhjSm",
  "key21": "AiDqXVk3Besr6Ka4LxE9uFgrfu2ckMQruvm7ygVEQHLoQMRoskTZuJEGtWF1dRrgtoWy3zLnkRQje2p4KoeRiAN",
  "key22": "4qeNNghuSifuxQvupLG2Ph1MFhSmEmyvLetc3cPsvikip7F2p3mSqBbpPRqRQUGMraxLZ7FY65UJZ34qVEUjes5R",
  "key23": "5y7mr4vdzBFY9iiHhm8ephWnomny2gWgCean9MRQfGT93naDh7acEWiKfHdusSXHtWc2VzbdEMvqZ8kdXUQFKGWK",
  "key24": "4LENEzNtsywXyotcfxWXhK9bnLneKTZnMMpp6JAQ6tKheCv1PPUKGAE8hEvGNvESVPxn561gb4ih4Lhpyb5Feth4",
  "key25": "KbZWDvhmZtWR82NcCm4HwpGekZb5jQyndEieHHrDQu64JMyUwuXfhhgTbdw1KFsD9SH2sbW1gkGXQYWLWKUp9z7",
  "key26": "2Sn6sQU9MmvudFX83FWLrg6FQ5YikjRPZef7ZRVTF9B8F3jTptvNDqcDK1WzSj9qbX1uJCGNvhLja4naCGJMSomj",
  "key27": "33qUjVnvbruqjZMHzxYfn7ZFRn7YypbRpyTGUsMVfRAeW46E2z9C7ajomzsjR85zVhZXKH2ubPpqLkyVdY4TWySx",
  "key28": "5EEwAXS79sdkMRak11vHJPma86KKyd9NPi3zEAPM7irq7HVMq1DpUtfMUWYSxNBG7qjqoDDryq1bsFDuNDG6m1w9",
  "key29": "5M2BbiSwRpE9j5nXhmh7FfvfktpdjtxY1SNGCAqhL4xtGVMeZe7iL12fBNqZuVvE2BFP53T79JTFRiP7wveEDQnN",
  "key30": "51k1Nn4khxwGLZdQiZbuaYewc3cwoiPdwKXqsiQPQ4MzhzDBkG9sADiS9twCWu7jTZsTeSpq9jkGQjXb3WbNaNk2",
  "key31": "4v7feJ6CnGSAwJCJi8xJXjLtjH3EKKdJCfU6iCQATuTCsAvbzuoKPbsTktvz8yy3JVrTQKSek2riZTvButk8eovu",
  "key32": "47BaFUxChD8BJWxE6iC9LpZR9MrYmg8Hs4YAKJJsBMRRqvzQY3Zv3DuYNhzZCGpDing2U1Zr3Nk9xAKhPqofuJyy",
  "key33": "5FCDZjWsAQddg2hUDp9CnkNZapQHZNv6jyDzTPGikVXXD8EDKoq4TzfycHASEMCjkFozzAHfJoG99nBTAZUQpTGQ",
  "key34": "4Y12KKdSrHbDsvVL9AYDWJdz2CYhmoFZU9ZQzKM16x3NX8yEcLUBFCfzNinRpkNBqs8abbU7Nu7bBmnqFUaRHQUr",
  "key35": "4JKLRhFeBiszuiv49ZVDnatci4RtmhiBUbFXv7AnpDHJWZhXg8L47qC7E6CmttNoDfFS8fVHgANQDkZiqiX6Quoh",
  "key36": "3Yrkp5DK24281H9KG4QhKCXfRq1zTnYbLDUwFry2zwy22ZG6zVrUQpEXEKaLxnEYYoSzrFZLWES7Yd9ZxA1xK8yS",
  "key37": "2Akcix25gzZeCPHeU6vakLtemgGFny7jLN979eF8NxzFAuGYbX296JyjWBXpJ5Bj3GQckaiTdTMuebGW8n6FturE",
  "key38": "5tDsKy2zCTQR4NyK32ZSnHPuKx3UUKRuoRGHpJoZrEm6yHKmPVqf25LXf3rZQUcbD32CtSJYWwcHr8rEKkogmz8z",
  "key39": "2HsVebNxaPGoKmnCepi5NHXJEwt5gfsmitoaVQq4pWC56i2oE4qTcvtsaCJitwGt1uL2ZK8mKmMdPtTFwve5f9RH",
  "key40": "481j4Xd1uuLgaYhmbj7nfGRD2NJxDQceTnhxGmtYS51M2RcYWhxDZSXeAnComGFey9u3m8UF5Wj3Y6HNoErnXTeU",
  "key41": "5c8nBJb6FirB3QuKMC2RwiaaqcM2XBHKAFB4AhpvzFXgs3aTmxtrN9FSrAwcbzDhEawjpTY6iNkmE3SBFaNVCQD4",
  "key42": "5QCxd9AD1rj9sNkFf1HoYinSaftZ8vLDkpoJfppk9MYgE5KxqeKs7QwuUfxNhVcAuuMwGhpoWNZoTVCahoXiVX3z",
  "key43": "2onQc9B6uCLrtczM5dciP5dVWrk8Ev5kx8gEkiwiH9gqRTsCUsEwu6a6nm1awrVkt3BbdbPvZ8AiHo3SnbQdF54w",
  "key44": "2Pb5qtsde3j6ZAUmstCZkrWtrKtY1bRW5tcHbetR8yEhj7M9Qky8c7zQJbLDsBTC2U47p1thwSgCHsCWjsSrtN5v",
  "key45": "4KiFYDXwC4kY6oqpb5wnzcMsBSAECq3ckFK2kfJY46aiQV38SwKRdQjynu92FuUndWwKT7geZ6yGWj77ftBWnU8o",
  "key46": "3g3mYXKrjyDSpQGsXD97em4uD2AcXKyqDhwWmUWJA7rTmMwqURt6GFdkpKKuZ86ZkUEe3gof81CF9yVwhFPsANev",
  "key47": "2UXfpZuUDuoouqxM5E34LdTq7r9gMPWqwarwHCboUvGgTsHb3tVmTvu7mMhJ4JphM9BjW7CR3oTarXsYZfCbRHXF"
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
