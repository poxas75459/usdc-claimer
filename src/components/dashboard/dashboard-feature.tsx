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
    "is7iK4eR2g9Hpif3Wukariz5XyXGEn9PnoJW5Wxa9SUpDhjenpQNNBUjjsDksWhaEWaeySgQou5ueJKqgwexyuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612AMm9bJy8z9fMVwhJMjK6HYjN2jVTZRWrqkg7LJRpc7K3DfaQcGS4vnk98zc8N9aaJqQEHNES4gR1V3m1fA4aL",
  "key1": "3mpmGQN71m1s2SNUrgyXRugwkbFkXLVwesSvG5naTvZTtwFqZyhMa44TbchP75fx449LQuaRQM4pBiZgj1D6wkop",
  "key2": "61VvUMNDLmHAEC7dj6is7z2axcirdySpjHZJr3hjYZ1VPmSLeXyVgYLwSJ4XA6u4Q1Wswxy44bgnim8gHTTettd4",
  "key3": "5FMG2ymnpGoTBYAzctPLwZBLeXEFTWTksgP7hMWjZtvXo6ZZzm1GPK2KXDdEDFENddTV9UjnT3HJxV4S8kqiwEAG",
  "key4": "616BrU9a8CHSFZCxTQiPCSHNtxX2mx3Sd2e4eQNE2r46f9soBp8Afg4mGMYUQxH4P5RoZuhTJMesgaPRsaqs2CsW",
  "key5": "2rnTVTX2732KpBj6hsHLynHDEBkGNTUpuxBxPCAs5YPQYbPkqmeDYemEREzT3p96WsjHyC2auuhEdHocex97WdxS",
  "key6": "5uRYDL1MfyU3FsKtDHAxo4SaHJAffYkTzoskM1sUxCsqA727xfkUVKD4JZy7QL2cgQg5BYrC9b4ZA5DGUhE99TxJ",
  "key7": "5fBSEVLXPAancwK5rDRsJKeFPs4kdUEDtFyk1r6dTNxBVipKaYkU1ZjF58b1YxBzuqiW5hGrkt9BVTKEq1gZJ8PD",
  "key8": "5S5JJSE2D5W34HwuyL4rzaU5wDweyw7uyynj4jVMsZ66ebjiTH68dis2EpuRwNFZFonMoQom4t1GSTJP2CTEzhoK",
  "key9": "3ek9t5vUVyzgsmY49Cw2QQPg1CbvMpUMhKGhnBdGqvJP6HRpv9kUdFH4txJpaQsPuMkGpE1Y7J5g2oNMj8ttZwRT",
  "key10": "4miwtvsvK9f6qxXktFabhtg3GQUsp9e9HtjgDUB8GkECmoAkAhYH7vrqbtwhBhREw33Bpch8LZTBKCAL53TVtAti",
  "key11": "5xJ85uydvs3GDHT6Wr8C3Qho36rqXeYp9gKz3RG3i6HE2tAhquJCVLqc7qye1TJapH2CxrGBRfAETRu3Zvq7wbKk",
  "key12": "1oiPUKtCG4Qs6THXqzteBhF4m7p1W3LC1r6qVeTdA1N5SzNrFzmHQdMctDkJXVut3UqktnJWLnc7AG5YDGApZJP",
  "key13": "3GX91cY3j5taSnPJnHLZKwKnWa4SNw7mmMhXXM2QzTz59cHKjwZbukaiNgVABcG9JLscZ1wcBew9FB77RGed33kU",
  "key14": "2FWD1fMzyxqiBG2rrNNATmRHP1AxntKDVToWVC2T7e9YxwdSoa524if8VKc5TqiF992uQT3iYU1Z5X4NQK3ymAKj",
  "key15": "4sGMYdRZnYYTqz6AxQ98Sfzd42R2XbMpW8PVX8Yzj5oAm8hfwJaFBzMy11TBg1AUa1ewbeGLxfPsuBA2beMyXjRg",
  "key16": "5AdgVKFvD4ch8z1HDsH1gVkX66S7wkn8UGeohx7eetJ2C7QnLU7Uc2M3qSF8stZBU1CRxGXvdVqLTB1b8ZUu3Sth",
  "key17": "5tJj3ihyuBqPa6YqjCg87YAhBZQiJMRrG9B5NtTrgpqiNDKyRD7vWMKydcwvYdwWPKcgAvTWMaVZcAhcaHjUEo77",
  "key18": "63YEN96W55jjDqT7M34addDyRQmidMuTYc3i2CyurPwWBKvNDyaNEwDR1XPhxoYN3ZnHLZGm1FvgHBsiha5uK33p",
  "key19": "2kFJy2B99QuMi7rk4UvYTQXVwKLBxyK8DA6oaDD39hDeakG22GNU54hGNhRZkHz6mGsgji7DGar2S5tQLbKmjLoj",
  "key20": "3UeD1JCGFr2qCwUDPqfW665QbpdhxtJU2ShJ75yvSjCvSUJcqD4cRDoH5gkd8K8rUfYKqz2nFYWT8Tumkj7okynA",
  "key21": "66RMdH7aJqjgobonb95U1h4K8qNwPLNcLsrGv4un9hB3vT2XcQrALfW1xMX7H3uPemeNT4CctLj5XVF1aH1M4HLt",
  "key22": "5oV8nkmDDy2URkWxWfmZaS4i3tpPLSCoj6Vmv7uQqYmV1WXLzNiRrejx68aD5zJyTe7ZXjhJZrbf8RbMp1eHbejR",
  "key23": "64uavJ9uGgQerFY2PiLGANF1hDqFS3bb6LBXXdgVBBM4nuR16WtWL4YuVkLJew5mE13uidWEd3hYrYEsCmAiGWbD",
  "key24": "3QjYxyvg3vWuujKShiFzFFPWzJAJdymS3Q1f9mdwK3cuY9dUpKKcvaRqvmgsJCTwSMNexTq5nRd2BRDM6hiu6hnQ",
  "key25": "46ZB4vTokvZURTdKaoCCSoVNxxZTZKYL5iGBYZ6tpmiHKX3LqhJumauRKwJcpwu6pBqeYyCYPFmj6cvQ9oTao5yw",
  "key26": "3NyycoBdrcaPtSPfK8YZdL2yhUEBTPTAAcjqazXMZVeUpNbbprfA54hkn4Gf1vfCfYMKM3MvsvnjSE75MzkiLmT8",
  "key27": "5ryuUn8wxUTDrDdK55yFm1VRsQF8PHGJxEuKyJRuDWS3vsiYM7BEAsugthVtr2kdQ5TNY9r9JfiMJyZiVUJHiwyU",
  "key28": "ibFLvF2YpMxE2mN2LTBtqvWf7cyJRKryAu4Zav6tmdjCgHh17vMeLnpfiosR7ceZBT2cW2y8fggxPUGv1jNhHZP",
  "key29": "2MiXCAythzyiQ2w38cVsiHEUhGY9ytDavKeSXVjCENZKQNWxHVDQvb1t8LNodGiRDmgyPfiNbHMeJpdoZpbTHX9q",
  "key30": "43Nz3SLv1ksZcJ6uR1QTEK15JKpcfTwhi6kjh9LnVh9cGuqVGQxEPBmRBJmfXiKuWA9HnaJhYwnmvixW9qaTVq7Y",
  "key31": "9VzuQGhyDAYXHBBwdL6pLf2pHRz33HAyoXFpn1fRWkjVR9Ef8ViGo2D4UjeWcFixGimumTLcAo6Zp1cyGvj85NW"
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
