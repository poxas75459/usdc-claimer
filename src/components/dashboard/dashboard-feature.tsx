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
    "31QE7hg4HMyQczjEJ6Zq4aZPKDN1HbJePhnJzctHtzhr1q1f7UhHANSo1MZbrPdeCXMXLE8KyNBsAtC1KVBBroV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zogbfUXLgc9X78owKc9N8sNA7vEH7psmLMnwhe1GRGFjcp9Lynny6Vt25ovj2mPgSh9d6XDeAQ8wLBVAHsSKPXa",
  "key1": "4qophc69EeVKSETpoUSAXpuZb23U4gE7WBVSpwB15XThwMtkvhazSBjHhxvZ77PuC2dUFNzuXqBJERYR7N5z113M",
  "key2": "4Ue5u3T1E9PLo3avXiwUhykvsFnk9BHKUFqiJZozZTKH7etD3csNbg1bB7MPNsyFm8MTaT2JDittBH2hM25R5xa6",
  "key3": "2sK37qfvxRVJtujrzMJbNQCVwQiZNjsEqoazrGfeduuGn2Fi9gXeMGnxoXDqCSFDCtmRaFfMdMzKb7JrQ6uXNawF",
  "key4": "5G1YsHDSnrFaAzvF4t1jPhS8tNJLukHx85gMX2DgJDzTFPVkNQG4rEvQhckCKhy2asJKy6A5zwN6xLBn29dPrMjW",
  "key5": "5vYrHeLMoETJMZKh71DXB8ezxHhFgJ7hbQtm3HUUgCRU8NpHtbaoBjUUY5iw2TspuCXF5PgEheyhuRNHvhdTwU4M",
  "key6": "63ULz1Z2iEnK1y34C4QJXM1xjhhRgogTXxmhTreZLdsQLtVY4fnbQ4gY8pakaTXkJYdnp9eDL48XTiCy6ZoTmX9m",
  "key7": "53vbVXp4bfpJU6L4giAfkxZQxiSgtJJPcS7symK68SLGnn2bZyM5wGfBto73svDQKtVag4VvHw894LnMGDZpU8zu",
  "key8": "4qjYKgoFM8Y7EDH35N373Cj3iubb8KURP2H1HUbZ5G6Kq31Ky4jjiPA6fm65ntS9TavKcXPcFhCGgPeosN3xwvCR",
  "key9": "5U8J3egtEmGRUmgZoNeCTkk3xK5AiAktX2AvwHgvidxQYWMEay9YRYMpdtax69CX7bRQzq7xx1oadH91N35vPwa5",
  "key10": "L4685vUiTcwJwFiS1RXpns6PoyGHFtG2X6qhEM1UrrrJ9EBh1HywEYMmBRCpt6cgZNroQ4866zWD6VEG3nYFr4P",
  "key11": "4up62NoVZ1c8sYP59htWQwavtBELWbGSqNkGZjPS2BHtevV5ukgCpK6LSH8qPy8Zu3qy93nzwSrE7yiwrzp1dFDp",
  "key12": "3cUrB18TB6vsM7jNULyUVSJyipQ9Rs8VKp57TDmJ7YXFEEgytFgqMLKzfq5yy2JTat8YdbadVyyrBDKn26q4KKvA",
  "key13": "5wfPhqxikrAFMTXmyRk8exHTtHejorQxGCMCF1PK8BRkdwsnxw3BsLbvGKy5A9pNFBoqsoTeg9DKqFKHuSVBgxiw",
  "key14": "3VwG2xPan9NEz9Zad5PhKFo8BFnnEMahBT5S1cLCTym2Q5HKa82E8AYoFEChwqovy6EWpQUYLRwSZt2uiWTJqego",
  "key15": "42sysKyYGaak8qcpFVXoXHTVKXprfLLb1hic1LqEVfWQqDoqJWfZ77p1ra46qSbbihqCvXHtd2QwpUBPVZeHrPyE",
  "key16": "54MxJ1pCz3LcQVqVox7eoRBbpXviZFeR7DcTeNocKLiN1pZyMd1s1Md7YvmBkLni69FtKPw6uozydL64H75Epw1U",
  "key17": "3PSj6sM9uY5fFBCttd7fnPC5DhYW6AuFLFL1JVA5jDeqa3uofJowMLKYCzJcTq5cmgPnUrPrhnHLz598cZNuPMQE",
  "key18": "2yhAZv8X7mJPTTP7rEoWwKVsTTNy3aZ1SJ9PVc16d78CcH97mDdvPQH1znnnCCmWwyjTcHp6UAjmdMY8kNJCqKv4",
  "key19": "2NqssEFwq62XrYNv8Dd1tgdwftwjCaBnQPZ8KKYn1mE6sxRWufh4xBhVGeMZR1RudbG1gmDD9gbDo1iTfo7htYzM",
  "key20": "4JsGX7pZ344e98iMqjy5paTzMSeqKyALxQoGHpxzmKEBMnJC5ppHacxMCabaz2bnNWHZ7f4VLSoTKAV9hMFr8stp",
  "key21": "5Ea87eEHqKewg11QPD4j28rNm6ccZojyuARAEKC1HmosXcuASHdPMnnJ5q2atB8cvwgWjjgEVSXk4hk3STWPmbo8",
  "key22": "52bMz9ucyhJB5NqxEKzWy5sVWUMhSqbtUmy7wUJdDnBURKZ5uHbTptMBV5aSZTodQ4K5KChGhQaDpf9WV6XuwEnB",
  "key23": "3ahRENsKCrEkbZBDxAe2gHK17xXqvaCKGvSdtVmGZEDQNJDRCLPwcHPf2P7ZBBLxeY1EhoaP4rSFrg6U2VczUmPB",
  "key24": "PK21bhDigPnnxFe6VXbpdpBZDk2TeVyakyimc6RVSCB2oLZnjVWgNyN8dCxut6LuL2Dak9ndahJGJwXgeJWCYqQ",
  "key25": "4PrCmTUFh5S9RqkQKhtp6dz5NXCFxwXVeSsTincyFT7zwg2dLUpngxoGQXwEZ5JoBZRqGKRSuK35xMDnG5XkwKkN",
  "key26": "wwUsMnSPb1yFj2Kf8ukv8kkY6BdTzmFbakD8xFEPiEabTkK3BCevqtNZrHjofyMEW9bRQUo5YvBPE9DVPQKgAau",
  "key27": "4suTWhQMAwuHHGJawJb2PbwwCwrF1HUN6qqvn7k9FTCoE8fAHaZ4rb2NHsutBomYxL4CAKF2FotwNTp3qjXcTC6e",
  "key28": "56SpCGYrrjWJTvuTV3qDAEMYXBWrgXH5HqxcihSJ12XawiNGWQE88pxsaoxdZpgJe4V1Jx3baNYiQaZUsQS2gYTR",
  "key29": "3FSt7cj3DKQno718WaiNayCxdHYs9imLGzGoebc2Jvd31SiTLF6sHxtkCwBvykzHVrhJsCjiNBSu7gQ7RqTmWtvP",
  "key30": "4wfZYqrg5VmQoHCzgi7MuHGAidCDVa4GmDWCzueuanB2QaE25urLmWLXnt2xm8ZXKskufnA9QDRjoYt2sBuGT9UQ",
  "key31": "pUjUckCFWSghdopYbeS6cuvuRq6b87urNxAz1nEQShXSduQiXsDxC954v5kwZVGQY38mwyqZRfPJoZ46jtHu7DH",
  "key32": "5HHrNNTMGLvM16MXixey71DahpQmwdTqmJLCEHeF5drWTWtYornudRVG8U8NskKBmBpKSPdXSKReQLbTHXncDSw1",
  "key33": "XCg1xBZJvTbZxqT7mpLcnwZ2RBcGQCEqUKzQNhThY6shvCG9rnDiFV59KNvSARpHrF4ESUX9Vk21vEJWkkHhFPw",
  "key34": "4MS2CFs7GjzmLp6ytrqpijKYC2YkrfYQVkSKKJYUhjawtcjW6MhR6EK4qQrxn1nf5GAwhhdm6xqMGLCc6HLTVGpV",
  "key35": "x6QfCJtqtacBL4mDJfSLGRBPmKGfmoF5N4zvy3ocuhW71VK8tsm6XWXioyfqzUVSZBJ6GvDpg5nrQ9VmJUxaQDk",
  "key36": "MGCbL8qKdV9gn56p7KUGtNpyhxrQ9GiCPKjf9wZMwkSp18fazS8QL3sbFLbDicgHrg29s28UK61yfADmXtpd59E",
  "key37": "4sUSUbiA2X94VajgvXc9cBZvzFv4gvbXRiNvWA2FLRwhttyfXgPXRdE2eQ3FWhkqH3Wj2Eu7v8SFp38uQqu7dB1h",
  "key38": "5FhMaumeXrHe3neoCfKQnyp7qXTomn99c8KcQozf3YtnHebVWg1mBM2am2Wg9RNZrDDKv6AbFd1A8md6Wiatx99M",
  "key39": "4MSzj5dfRrzPyUCTH5wvhURnETXgH9JRgCCC9kEge6w235d4Dmc5QD4fg89w2qdvdjprAp5ji9mcXgNEL8ng2x7k",
  "key40": "i4Wa4LdFiE7UCv46osdQdsuMgYEh1K3oQVpQCkzbv8t2ifHFAEXDtShW7arG3D33L9pqaiR33RaJWLargoWxMW9",
  "key41": "4QYqBfbDHF665UBUCVascdDLjdSneEaotQThRzHjiQpmWEKyZpLLvUdPHCmxKkaLR6aw9g9vsZNu9qnDx6eyvVqN"
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
