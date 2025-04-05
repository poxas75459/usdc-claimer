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
    "dnucvuugR3Acgp1RTYTp4HzhsGAoh93XZ2xU2DyMVRjqgFQtXr1YoVasXWuPnSrbfj8XMZ3srXQA58DQXyXbtaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcSQwHbmPw6VBTedDVBhfBpu8fjG7VdGbHvdq5fcvnXNHwH56S89t6LhTwnJfoF9UWtWzQ5WQYnyqxsYamUvpUW",
  "key1": "5sEnzPWWEtgvXyu6di9HouKFMaFp9xrP62uTvDfqB3YuCV1K21idVLGMQmR3AyQ4ge53cYmzN4jdqwH1ZW389wx5",
  "key2": "5WB3Z2v9KM9znSHmzrrAWFvkT5Wad7Jse3DP758mULiU261nfVSV7WrKy2NHc7t2XWGpzjMcKzcBGxXRo2j9LbqY",
  "key3": "kkSJYjVfrVfBZmoKWJ6QEKavgDxebda1naPWSfxMSRWn9EGPd1ae6BbD4zYLJHd2r6UyxRfktringkeAqitxq8V",
  "key4": "2xtdqpDE5CuLivjrNHBoao3vvcjBKSEaTU72wzcjBv3rKKoMs4kyAsS5BxmLkthC5sFbYeCQ2L125qncuKx3vjQy",
  "key5": "4d3MsAKrRM2gVsumXzY7f1x4ripvm6unXpFsH9Wh2uRiNQQopxi1AXem4xNHvRXcPdJp6kY3bs3D4PLJ2XcGC4Qe",
  "key6": "uFsNG7zdJ5MTFCsgG18Gqg5z6bZ4trWBPahUk79vdCCbomrw49KhNsoUFqHsbrUTEKjDzMDhEPfFYZVzutrAV1j",
  "key7": "5jJ2gp45yx9RDskVsZBp24m8PaixzMGzSyFhPUCBr6QAM1HGTw6qeUSHGuE37rHejh82PkstKAgvye2fSAnaAsCH",
  "key8": "5bZMPY58FphEH6aREtoqRYoQ2N2rSMxXFeE53vytwmy2VM4kjp9SMkTNfCR4Kj4CwBRUjwtQGbMhn56mLTRRtmhU",
  "key9": "2sBXbQjVuLNsmaZEktuEhjgguFKmSbu23PWfoDtLjShiNT7mZdtgCNNqeixL88bidUnf5T4531Mpg7kgz2hbGMBM",
  "key10": "2jRQRvXuybeVG424sujrWS3HqgDasZYYQitBiYipTgWyuW3j2Q48LLfB8AqMZzX1wN7Q27bdR4uCBY5nkpdM7oYZ",
  "key11": "5NWSYK8WuCL8pN9zwHS5WMsSwzJkGumZsYuMMm4gqkg4HvLUV1JgoDo45VifQ2M81FZMQdDocjpByjpAT7gQ7kmB",
  "key12": "4VGyMBhAcZpNHaFfu9HbUcRsMezosURoo3RUw8Jsa1MkJCDvP9uUtmH8GrX9yHCwr1KijKTwAKNhffLY5kZFsTHH",
  "key13": "3a5nmZRWxkvjeq93jc82EGcmRoJt4qUaLAdV1DhnR9RtNM7RFUNoH8fci5mLbFFtFh3FaobFN4hQkXmFZ7L1BQrW",
  "key14": "3DUsJBJnoyMqi1PEoBERFEK2vbEm9jHsaAazGpkxqqU5ZU8mS2gPqQvGiz9aqPg2iwoAYUdbuzFNWXXgB1VQwmf2",
  "key15": "39MQ5zNouqEg9jMyiwcbjfopcb2VC4g8ZNPp61N3rDe6R88jYEzL3R5gDsDFRsDvTrnhoPDSmTjA5NTCLGjnoSrq",
  "key16": "2gQkeMV8GZPCmLyN4VKQ4yRGyjSxAgSQtUbCLRLkmJKDvdNBeUqi4kPnEs4onxsyognEc1SDCXUHDtt6UFvwsYUH",
  "key17": "nRujvbVswLiGoTjzVPamG3Y7jH1SX3Dk3pzfXy2PbpNJvUrkVNLsATtw3GZ21ekD7ayaeku4dvTyDMtDc7Vs4r7",
  "key18": "5qPX5G6agDoQrYfucQHi5cRdWSvRq8QNX5uvRG86ZeVbKXN5pbU5vDWGMuxhUJneQ32V3PEYjQhmV14AA8xiN4a",
  "key19": "bbw4mVFxucdD6Lm37pePoh3puwpx1MpdArrXDh8aNWrqySUubYev1Yw6zZhyYceTSH2vNn2A2xLvosGBzgc1JHq",
  "key20": "5KA16Npf5k75VimreAQFk7pa2UZE3P5TqcPVx2KDxJMcuHrV2UJBr15xHMqPrLmP8NPjvfq1ieonmKNtUAxpUwDr",
  "key21": "2Zxu5E7EQExmGgnw8qCS7uUhf5o9A2ZMDQshytBPnfTnRstTygakB254sZtfFhHmutMFMJn3xCph3L7L3cerAGdu",
  "key22": "4NxUdwMj9XUbH7QJAjHr5T9kVc43QZjaENNo24NWeM4kFu7pa7yQrYVXFBuY7imxtsziPNVitfPaGRQRMKHA4g2g",
  "key23": "2nsDc8Co3QK7SwYULgwGzfTB9fFR7ahLZqdQmgbY2AixbhQ2f2z5K8VuHJu76sYsBehMWcpscTFLxJ89yzpKJNQa",
  "key24": "4KEG4GDPBS2CPgBe1KYHyKxHqYMmrHVfNhL3zry3UH4rfQynLBKji7nvvS9vqC9Vq6qYkm66kE9dD5MZypQwXK3F",
  "key25": "5QAjZVkZZafeKMPNf8ZJYS9e7bVwampBPzA9Rcb1SWQFh8WZWamvRqqPo2qjLadBN7Y4WnCtPaWheMQ4fMgqBT19",
  "key26": "5FZ3iBLGjMHifYrqZRWzufPFdhoRLA64aNmcCnJ9GkyKzmWKABpDLmxNdpZpaiLE12LPNYUquQssMdpVtJ3soxZa",
  "key27": "j58AoGRsLy7ENtrqdbXH3zDCR3RCLQugs9fuwSRCb56rjtrPxaS5HXZgj22tcJ4BV4vf1eh5FFCYjhmp8x9h8B9",
  "key28": "2QTy9yLF41g4147hGtwPRxanEaTafb1whoL8ptyajEMfXB2tCS7NNuxAXaiBPgg7J2y5AV5mLobqTzo2424vFqwL",
  "key29": "2wMpj9w9aqQmJ3jN7RbY8Thf8itF2v9DgYAMNN53QBK46RJrE2Lxa4okqJogweJBXV1dA9G5eBiV6KNbWnvCfxsy",
  "key30": "4f7re24cWpiJuAQU9qvT45ZUYYYRCb8PZ4woE41sC21iCvT6JaKGaPFig9wD85kx2qVWJdvx5ZtqU1xnU67hRw1S",
  "key31": "3nxR2S2kST4NrfUyyXr3mhmeEtsUB6o6HVRAyp6cqnZnzY2tnwLhjhSYVqKuSb7bT8cNmEUsm5LDKuJ5nRKY3pD2",
  "key32": "52pp4zCUARdtz67ShUW6JtEm27yWhQwfSYaQQVmWsykCEcDcKiBiANk8agK2JF9QGamrumzjVfCZKgomG8E3Psce",
  "key33": "5zj7wLQ2BdFddRv8Gc6oRdw4tEE6CPadrJiBhmH9Syw6ewbFidmCJ5ifGW4CqogW5kWJcNaJU4Lm1Q9B9agvL6Uc",
  "key34": "4JxACYX7xSGJeTWK7mF7RTytX1as1fxg3Mpb5nNs2hv7FiHixrTQLnCE2z5Wsnqn98MozqCnoPnUeCK6PRcvbZE9"
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
