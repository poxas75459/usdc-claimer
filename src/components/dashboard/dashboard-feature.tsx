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
    "zvseevy3K2fL6krQAoaKqLanbbq3T27R5moML7S3ijgjecZvX51gbkFRN5N4RYNrHSTgE8tXgm6sLXYHUrJ3Bwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdgwwCQMuBbeQkJodzw71wKSqBxhvvCB9G7JPeq17v31d3MW8z2CoWocrRgxsbSp1Cifm4FhgFQh5EdwDQnQqkg",
  "key1": "4d3FororFxq2swkgCYaFQLb7Y1TtfTNNvtr94BJAcD7joz27f6m157Fu5tsmT9Uy9y68CuF746NwmGnNgzxrfGDZ",
  "key2": "29sqoj8QozLSfr7FsVwaMZjg6fyNw1xYzzmUwuuhhF9XUqPWRyjdFYGq7bXT25z2shmAVyhkwUKZLDar6zrVd2eE",
  "key3": "3enBzjgPzAi4RSowiYdvynZAqdQpYqSbP5HeyJSuBg2vYQ3AdQA9rtgGU5nsmR7Spb8KgKE7B7nGtiR3VRXoSHhh",
  "key4": "2CbyFdqzWzTdm1JY3c2PcJuDVLZihGXmtrZm7eWApHruzyVQBDGk1iZJP4mBg4Pybm3mWaXMvgCFKHUGFopKhem3",
  "key5": "4AAPF54a41YxJpQqMNmrVRLXRujwfhnjkK6gaJAeAEEt8oZa9N4wctEL133jrd5bBckvAJhapANrsgiSvVXPgFQ1",
  "key6": "4iwh6pGjWR2cDRfuUp3cFqMhmLtfZdWJEoZrbf2xShbLpVdwHLMghduaGnma9yeXwSmD6UyT4Cpvt29Bo6XTCDiQ",
  "key7": "2QDrmQwhZUABd8WakYy1CW172sswCn2vtzio1kk6KcXvvtPYcSc9Z2q1iQtvzxy85sMD3Ko2wt9moveZg2g3hgff",
  "key8": "2GMUspxA9b5VAySgqFr3tmAPPmZjN56uTSEovrJsi1knS3VMM2XTwWL7eHnoBgdkUZDaPoDMboPxWWT9qPPQPorB",
  "key9": "q6DYVGYmWruXuaku9Gj59K3WjUfPw9XowFadidgrERTntFDTRaMUxTrjrkwD4PuEJqSpH2ojuyVSvmA8pDYEy4K",
  "key10": "3QNYpxgf8JtWU89PmZUuHfpEhgJ7FSTbHgeyAuF3a97JsstZ6qijmqSacUQJpeXMJaG4Xd741osHAJt1AFSbvSD5",
  "key11": "44pnXocSpobY5nR9nCxHPpF6gNurFHSZ5UVyHsMxWkw88HTMs1RjgysYYN4VuDAjoRCwLp5fNBH2M3jHr4unBvDZ",
  "key12": "29BMTrttCShJP2CZpPRrNrbsr3uvSDRhW4aXx6sA5X9dD66Rem3dwSS1fsVDCYKJGaAGaMS6U6EhwD9ksH8vYxza",
  "key13": "anXQVo5quJ7eCac75dTokaLDvi64dS7oGyHBEBkk9qEuLwzdmCPygmM3cQPH16XdAQbnNtAC75knWGGXX7PMEQ1",
  "key14": "4rY46bcqYbLPChECbWQKhpm5CcihKF2sqzK6YPmCXmk1u1fcjrjZvcG5nLNJGUH2QFsWsSzAgSAs8aSq7z1YMv6",
  "key15": "5GH3R2vgPF86SAvg8zLQdYtaL1FQ8G1we952uPLmb1ebrnuFjw2QQDym8bzcEPfEfpW66ZxNnCkRUrpYAiXpVQFZ",
  "key16": "2wMeP71vbWNqFfcmgqRFyovoGxa5Qq5C3x5iMuZjqetPjxc52stLqHn39w2yA4rrPQTK1B5BfMGenF1YK22NRUmt",
  "key17": "4Dmzzb1WYdmssiRzqLeYrGKJnsCPXd92JoMh7t5Yky2oM9dLikM2My2QcXBnRfgDmcWfieD9PyH2tPzZgZp1XPR2",
  "key18": "5URS5F9nkPuYHmd46hUF63865QnFbbN7eWyA189hCEh7J3jQR9wm72TFsW3JTmJpMzUNwSw2FmiU41uwkBQoUigi",
  "key19": "3u6QFXoKuLfGT6vpbhdtYFXCdAygN6jGT75gU8ednLmVfk5qkP9ND3Ls4zZnieG5FaddCUJaKisVqvBrXJTW8sG6",
  "key20": "2cdwrC1ymWjyxVrRjSUiRJb9u2aSgjsKjfTdY5y6JSyTBWSA2PLzA1DBH3Vi1uVGfobc9ouWCzyxyxyykTESRV18",
  "key21": "4VX5Xjx6sdU7grXuYd1cEfWViVUVgpVzkVsoLPk89t2XRfsPeYVr4HJGVNGnBrrXW1ehC1oHEnj2sLxnuqvFiHM2",
  "key22": "35n9NStM9qkgif4o5imKB5L2dnZWTX1WiQ832xJEYowvTsuMaYeFeUBxA4nMouKGefpCEVYbm3ukUa4QosiGGhhk",
  "key23": "58xaVb4K5y9j5FfvM4fyi2Fr7v1zFTJtYbKGZmPiiHKPCGfmQ98zh5NtpKnsfMtTv9WbvmFW7fZY3Z5z47V5XHwY",
  "key24": "3gXN8p8oUYuAGrJmBBwZszCAfjTkbfmppWXTau6rv3mRaCqKxsGTE6FvSYZ7zU5dQxCjyy1EZupNNEVHzcxbHYZF",
  "key25": "5LcvBXiXnBCC5dULiZ71LFRNQLuTMBomdVz3E1xgKDtt5FnDTcfSijcisGkPdUYZhop2iuEKFrqJQiATEbsrw3eu",
  "key26": "45pDyoQPTDbjR55LhAsazNEnDK9gfF6uV5ibCv6giuL6KeF5zCWmXyq3x2vroiSCn8wes9iy9NGxgYztujwRwhYM",
  "key27": "QQez69371jzw7RBhyWGGp4qryK4hzQ1AvhQE4iQDzMHk3Vhz7HJYTP4Gv88PQi9QhJooVcHnovUX22gfdGb1ZTd",
  "key28": "5N4R85jtNQTjUiz3BDMmac2MMouapPQhi9NKZGZMXqtGBLzR7ZfvurcA25xH9R7j79qznjcZ23GegNEqPjaHwqZc",
  "key29": "4fAsS4gLPTCFEU52fgHLhphn8zh6J15oREiBBy5W5mgTNw3aNKHbvQCHDsxq27u1pL7VkVeF7eG6zruEA4isHbi1",
  "key30": "2cXpMVJDw2TbxsfbMfMtSs73skHuHULCa3AaMmirsGFGczWwRuPfNZwePQKrwNX31pVJV88hugYyXavSXF9AY3Ct",
  "key31": "2MnkMZJ9hsGpNcgtJNixj2qGd6aEvgV1BFZchBi6emSkruyUu4JtycQZZmaZkePtbPpM1hbkhf7YrG6uJZQoLKNe",
  "key32": "3BJwa1b9mp3WedrTqFPcaPXoYtgicarydgZarw5XBZNfkxXhf8tHJm5RLheaDxY7PKUoEyeTdNF9R6VyrH9YhFYx",
  "key33": "2TAULyhNcUYHsCrq6c8iu8cL4PGLbwLuDrEkYJJm3PATkAouVETLc8R7vs4yPPAZA6pxfDDXvhdvUCeKt2WMW1E8",
  "key34": "3xetHQEBP26DW6TUgCbYc9f74YEvjxcFwxGQ5iRR86fVGHr2na15SZ4DWxBiaTizz3sQ2SkXbVLFM7SLVePJBgwX",
  "key35": "5knyTLixNYZkx64gosLe4pojByJqWfpi9T1CSzBKWQYEHkKSJjEUh8VDkghetFUHpXqjiMMZtSscQnWH9bachxi3",
  "key36": "Mzer98w2BLagWkQY9RqNnfmfqReqFUqP3Ktfao9GwgkAuB1zVQVXydLMr2MA4QNpYbrFbFGcNF56DugrjpgTsm8",
  "key37": "2BZZb4me76DxsPdpWyN16nKpgRfzf5MkEgQJ9c8Vg4tToLcsUbaHViTV4jS3iwHiNzE2EjbcfLJH61gRMYTiJfUE",
  "key38": "3qawVnUmRxa1ZBwdHsebNDdZR4rQEJw7MjwfWfVfhvfCL2T5ftTgR8kEvaYbEFejz32a1Hs5j5yZipXaLBQThuU9",
  "key39": "yWJKEAGhp8dQfRGVcX6HNZn7U3C9PQ5pLUjXdaHa8qYwaCD842Cu6f4JofWzuH9jo9qYsSiQYk5n6AKuuZ8DVMY",
  "key40": "5moKotvhkNxn4dpGLopmdzdB8LB1tTuzEjByzrkFvWLftREJF9qRjj83FUdchpFxadsiPRMo8X7kHhBR413cDwZf"
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
