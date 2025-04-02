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
    "42T9Kavg7uCp4mHbUqHFeeoSAL4uGGMZzjxfLujMt5kxMzVkThTRVNNB4RJH8shYA1EacDS6neDSgRigXZqSkGjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmNjS5qJcs48fgvX4nBSz4J776RAqSYv1mdGFytP8s2qzxX2Vk2wqMHzikC3F6hyoSbA4QD5N8anUXRmWqac2mC",
  "key1": "5L2Kfi3h1NYBP3L2pvhFCYc97zs37dA3im7QgkXVVpzsgTiNhiDEoBpQsuTeGagRaWAvn2Md8K7P2vBjZgVHG3jT",
  "key2": "26kd2MGqT4zvUhvJLoF437cuUXaZpHy3erucWLp4xZCq8tfayQov6xZSWewrxPsSrTgHSZH3yRGzzdGjWHQ7Cjp5",
  "key3": "4NULZt657YCu8KB87y6p6bjWsRNgLoZ49pW6FnypfvemmgwSGVFZusgUD1jzoNkWiv9yxeGhEvfKu7rcNcKTAhKW",
  "key4": "47n492M9TsGtKeAjHx6kzWAgPdTx2GbNQsCmTyRZfE1ehKLnfbeJ5nNEbd3JN7m5JrkuSNwZodL5dTMJgPYFSx7J",
  "key5": "3Ce1ACzfcc5jLKKaE3Y7TXK71iQbEd1Gy2EjmUVAtHTBkq8ym9VPRP82hvwAFBSqUpWi8ozqLQSgYNetUi8zFNv8",
  "key6": "64omsuqFzKJEe89BTxT4qub1UBvrEVQKCUeNx2enZ5XfUiKS59Kiy4FbDa49gYUqdq6B9QtMGPzgjX1hFvSpymug",
  "key7": "4Wxdr9PzjmxpiuwDWQbkFuyzqzWymuunooaursDaqUynaMZJyRkxW1aF53LpJSeMAZqzBU1vDCF4hyTLkF1JT28s",
  "key8": "4o8EMNB25nyMjViRQrxtbe5NQSE7GF6Jss6k8TxxG8c8m7ijaY7CfVbHNecHipEbWHfTPiDRfCqQu3RzaZ1vFchP",
  "key9": "XGuQrnojM2yhFpWnwTGma4rWLtYAG4PHoKpteXiBesbgcGMoxw3R2xX5toAoniuw5jVoAFCzH6DT9juZWxUqNjA",
  "key10": "4W99SudnibwjpEYY2wLS55S5gRuUpFqsonuswyCHZfw17knJv6zJFaPjdiKTcmDSHWSSEEHk8p29rSB63cFRRVEb",
  "key11": "3FZwrSFy6cn6Bp63U2vt5MHBaFzTtxDmTbz9Qfif6SHX2czWSnV9uTCaRgFJ1kipvm6uEwrda6V2Jsf3tJbZBMV9",
  "key12": "4ZH19V9EYdk3ABY3zoKsaP7HidhS2BggT2hGV9pNpHx3eQjUqUiA94LwNALKA5UuKQqBKfXfxePgr4Dub3xakoib",
  "key13": "z8LY8iPX7awrvZJgKC4KhMX5Dw2xMgwPa4WWzEX2G9VpvRkfSWLvM4QnhPkiar3fXUbAGzinYW7GDHVMcRTgH7b",
  "key14": "3zCwydinrfmvB3YDKjBCmpWfjmSPWrdAtHVySYNHS2ZYrJZsxjuiru5sppXFUG4RvXMP8Yvo19JXvMRSDF7bPMs8",
  "key15": "2u7T8JNFSJP6snL4K8ByGSGaoMniW82LgLhP4bacPaKTUDeTQP4SMKRFbeg4op4wBLTYsh3MVs7wALKmBPVwqdrG",
  "key16": "3iPkXFFSBgfCJcrYiSgjbwHK2GZi5MBkjgmmE7u3AeeiJ1Evk7yjWpmSCkGWmrtPXeNm9rYkd7ty7SEaaqtydsRW",
  "key17": "2WFveMrnsWCt7Bj56CaRAfZ78w34ACQJW5mggsiK4X4cihZF2WkeSet68Huabx71YQgL2VWhfF9SF4Q1jCL9eHSY",
  "key18": "3zaQec7kBhrANQ2W4WjaKVeKsunoBmukkaqCWNcFwEHigjmpkSKMhjxYxWvZv75s4ZS3UDqYBRmXni11HhxkVnqt",
  "key19": "42nXjtAZJR9eTB1DXo8rudwhzGjeyJPrZQE1uPPWcxFaeiHVHgccbeVMyjxHeLqyCzxUMfWJ2HzPHgWYK1HuuKtH",
  "key20": "2FPmRbbLcja78rcejbVzKGfwvrMRWMuRyHk5K9XF2fo9pikvteDBZq8bRWSQi1ANUxFktV58B8S1y3NmxTX5YE7e",
  "key21": "2EbLp3bEWWvKKkmyrLphaWwdb4NrerhQeZ4MrjhnKtNricXFwQxAKCG8uZtqYUFfbvrCv64h11hPZxevNv8w2UEo",
  "key22": "2MRX1pSFcDHQ6Jy9jxZsov3YHC18Us3GWzBVpgP51CGEYeLvVw3c3RNXC8uT2kCopVB9g6kDhEgXRtpnuED1Yuzf",
  "key23": "4BU2LUS4kWLSD9JuEo8BgyYzWwaxaZDtHGwLmatauCmjM7273dnRVN7pEFHQfQifiePszKfgc5AcELut9J9nrXw5",
  "key24": "34rRkDsoZfDdVcCZ1f62j1GZztDbXgYQaKNBvNszpPAGbhwG2yNySc8Gk3igrCHuLVQrGjNoZUxZ947cFwed6ews",
  "key25": "2drPBap69VEuXedmw8a2fpDj1Tb4a4VNm6bmCsi2PjnUs3Us5QHcfx8fKSpuNorUFboq28fZnBQqs2eHp39KfoUB",
  "key26": "3kvZVTYjVfftrDR9rq4JXabdPaMV8rRtzgBu5Jm94vjm15D1b4dnPTq3SmLRYKk5LTWcJuN7unUYBe8rG4ggRtL6",
  "key27": "4A7E6MfEDiNLwNfYfJb41p8UrFDurPdRigVfG6fi4L7g5cPrr9cEZomEHuo12VvgRWMQiH4tLKeSrcU3X4TFVeVm",
  "key28": "5USH2gkpSeeoVsyt4erbrthSs7VVynnz7UjSy9Mv3oAmUvvF1DJrf6niQNHT7KJEAQcedHn9nikkYsWAQHvTu2x6",
  "key29": "2fuyRYSqw2uWnkNhkmuwH2SKyyyJsq9RTUMDDZnCL1x1tn1HRNZWV93ssjH1kLuLv1AW6GSdiG2M4QKjcJRWpQFj",
  "key30": "3k4w4phB5y6NaSgKsoK92XXLPyhMp67Z3EnCbi1BGmSdAk6GmrAdfPjdKWBwLwgc9zs3kasaYjLVbQuB2aPggf26",
  "key31": "44aV2wj1RsDeq8RttmiJw81azqTM2cn5D6yKKGmQ4cETFuP8Ek85sfVWF5HEHTvXvpNzizrTDBc1WJ7Uc2mmFhV1",
  "key32": "2yghcTVKoFuLxaCqG3uQN1RRPSxk3oyqeUqQGSA4ZfyRnZe77RhQw5ex7YeHfApD5EbjLe9qbuKovNggwvhHXnVY",
  "key33": "3PRLvstNmY5bJ7wndwct6sa7em9AvkC8bSSXAWpYGBGWTHdKWYEH8dPj2twHMbCeXcuSrECFKL7cRwXAQEoD1KQ4",
  "key34": "ajoaapZ4J2FiDayFdsM8p7fd6U6fru7YbGWPc1doC3zH6AyTuKwVmyWLNAWc1VaQ5kpxKnQqjAn6tqcgfPuzSZQ"
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
