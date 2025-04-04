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
    "45JFu9Z3KWdTrJP71ADrUr3yK7VD1xrXCXKgdc4JYh5mVTNpv5SHX2qZmXnfpmaxVj3S7VDqJaUvSJXHQ3ihqzSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WC1HPhRdRe1Bruk7J4b4c6oVJxKPsQKDCb5RHGj13MrcnWK6Q26Bi4dAqDBPbdoXSkDMnp4DEhdxSqHq4ofisq6",
  "key1": "UFwqHMjFDJkaFLCCcEc8ciDkZQmRBaCEh46FB2cc5avJbQxxHfuLGgKMXKXSRkcy5iDq4TMbjwuXyr7vsxQMGjy",
  "key2": "429grybx3vepMWWeFTjEy6brriCt3WwvB629ChnWXxJjBVNGXmGemYFM6RGW5vE7z9Y4tdmSA4hjbZG5FWoPuLWk",
  "key3": "2mNCsKVnUwSyYtPe65Uqfm2gNXB9Gs6ibPAQExhCumtr6RWvcGXanxMVQ6E1HUJZahzNrwtdxopBU32zjjWX27kC",
  "key4": "2A4w9Qrb5vTipJRXNM7mnfuCcH7mJYibPcAk9oik5F8ZWumm7KWH5uBL2gqCYeeEW2Xif6uKNdWFRvhWV5AixNWm",
  "key5": "5jZ2Yoc6WH6SmUSJQU69sv6SUf3K6UEG8y2T5rfG1fLeyaZh1eo5wRSijkxfBWt3LB6ujLgrVAujMVwTckzcUEij",
  "key6": "5jvU9wj5ArCTeU6YvR4RRBXyeHznfR6Ygx7NJqz99T3ddZXsfDkPtDgTr8nx1di83C3wiq5eUG1cmaMCGC7TUoPF",
  "key7": "4K75rwAQNFrn23WnC2R6SWmVD3Tk6hdEg47G2adeNbgduq6JtCPyj28RaP4NwwBwQLm11pCjVo5uGDVLbUo1kEdr",
  "key8": "54zFKpoH9fwim9c2xmPeWvpsDiQNVJoCmkeYuQ8fbKq7aUF9NGLWHpcXtCuboe3pwsxHSPSovMvjEsMLb8VRutp8",
  "key9": "SChDscfvSCUmLrTJNH9eEynztHg16dB2144yiQspUmRpTHf144Q7XbVy8g6rFajwjfqGbsdwFaz9xYxUJrNwfxP",
  "key10": "2TbedJvsGpFx4RQuyW4Eh5DDTo2aDJYcPpxYUPcer4iFqGKEgZMfAS5Me4GPFD67MiRofF1jkZ8y1preY6YxWxCn",
  "key11": "5PBR49nojS5sfVnMT51tD12yP8P3xadERerDVEeQM2MtJtKPwQ9edumn2g4teRP8VAz3PmmMkx6xWsP3MPEZCFQy",
  "key12": "2Q3PrX5x3zj42PG86zXzRR2gCMHpeEUF93MkN2CMctddHyVh8qmN5m9mE4EcANa6XLMSULEgAksiwN38s7fwx4wa",
  "key13": "zm1teqcQXPnp4csodVja8r4Ly1vP8km7Tp8sDYYkVFMGr5VEdwUx3mNYhXVDuYx5Z2NBqDjrS3dC2LLFexoEvs5",
  "key14": "3GnycDowj5fcmRWkgKpJy7xeVKzdfz9UPtztqqdBcruyMFeTqDVQGbcLN2dvjzL1zfcNuCYgNWitEm3LKbL3cBs7",
  "key15": "FM7uq9i9C6ec2mbcnWmDCJz8G9R1Uym8tP5PPmcukcBBzHz5qEuAdV9nWgVJ6ces6rSEhucqFiu2yvhPh1gu7n1",
  "key16": "5xrmEYTaYvH258dofe6Y9TQBgBByu2QMFZjH6SU6NSKbgaiYjz989918mMdwPtrRQA63Ufh99ANoUGU9q2qGc5V2",
  "key17": "2RiXarKggAT9VaHjQ5wVAEtXmceLRNYtZnNp9MTc7BknW9TvNvhUuQDXNSU7ckTcrbR7fLUyyiAteoq1YSA7HfZG",
  "key18": "4hWkNQkGBJ1A7MtRxzhKfFLNXsGcD4XevrnXcxQyZ8SZC7NZtwwNxgYvV9Ms2KpQMu5EJa4kmXbx1xZdjyKfURxo",
  "key19": "2SsKMhF7LNTW1H27WgsefepJ9JtzZHUZ1Wa2km4rNsbjJZW1uwMwxzvMnvBmqwu2zQTb7WqxNkrmMDnyPTmUZ7fD",
  "key20": "5uD6N4LHggMH4TXYcZp4sGwp4tyMwnfWfKoFvCtkLfc8eS3T1Kpc3hLB3WyXq4TTixGYGXbq6keN8NuLUex5aZ2r",
  "key21": "4Fj6JXc3soace246tuMAfmhHHDSZUHuGcZkbsXm9PaFQsGcq9CGXHatudAte8qC2Vnp9mP6tfuPT1ogWB29quJLP",
  "key22": "454Jeck9HDDPYc3E4NhJQcvwaeGBKz9m6w2btBkwQXB14QCt4tUid3N8zUzL6AwZs7m61mqompaQRn3ovuSfMLnM",
  "key23": "3Hx6qBztkGuU92JMm1kFRkRxyiEgeg1YeBdhJaS2R4WCyYBJcyyap4foq4XAr8D3UuF8419XavezwzHVt9BVebjU",
  "key24": "3bzRZMJRMbko6yWxyhN2P2Yt77om3LNS1EyvrNkSVM7tnpCkddfH2WPhGayrhW9n1X7czqH2oLE34PjN9736acAr",
  "key25": "2UkAj6pg7Z4eDPEW3shvwqoBXKBHkqXfSV3y2B19C3hNirWUpjjn9T3iUQyzByT9AQduqaoz6TAzSmPyKUmXCer2",
  "key26": "65KGMcM1GxkMxrQU2HSdYb7vY3CdnTUddTcd1YYzymM44npQYyDC1vhV5978RVtEH5QBHkpTTftwHcckWQofs8ew",
  "key27": "4Kvp9y3xkW4JGNmmkahWrw6SxWJLvjaygWWG53dJ4YHTcLU2KGECHdLfA3q5ptFbhMYYcdsgm8TQWw64mqsmV3Zb",
  "key28": "3rYGKtdseH2rSunrFL8cJyhu2yqjTX5bU5K2ZFrqMLiGP9kcCTdAZBofgHhoTwhZbjySuT1nRFNFnswnmpsoEWCX",
  "key29": "27bpnrmnVYHWigaL7aYq1ovFJE42tDu9MmT5bQPhj8YXpaWiZ1M36J8vtPLuQAxywbMDRtk5P3k1p7Zwt2WxnwQy",
  "key30": "BgTBXtCG2KnUpPsv82MhWZQFmQ5hEhnzgzZM4w1bYT73iECahvABVtZ1RNAzdxX5Rj96FgnKM5oNPsgNch68GHC",
  "key31": "b2tHTjeNMbvaLMk7FeJmVSXaQ1eZFeojiypPbvSp65ii3kB2rsy17gmy6bycqNQPmrnNgures1NNFa5PsNPqLfw",
  "key32": "2zgFBx3CGsw7RnYagYHrQ5YtG46wpNEgnDzVmSmuowpqy1VzeUMpjw3GgQopv1dVLuot6J1ovH3f7s5U1UvNPUrY",
  "key33": "2Woo6K53tzGzs6xV3sqvK4T1xQfSFfTRDUNxsYfjuYapP52yj6FVVC4eEZgKi7PDCKnf1JiwjQcrfiMXsTDVkKZU",
  "key34": "3gNR8DbHcWTqbmDXD48ChH891iACLaR5gC4H8NbboRjQLysbzsk9sPYAmyJDkwumh3fvY4jBncJwYHg2RohK2BAN",
  "key35": "5CMwhTQrs2SgXnHURxR6kLjfRkXxqmgY4NDr1j6dUa89pYcqrLaZsjr5my4JkLg8GvrU9JZrcS25dxb5cmdiV8wP",
  "key36": "65h4eG7kQMCdeRHHmSR8MxPRQZwEpPCZZrMCmyad73PNLbTsuShfEtDHwCRPdWrb2yirnmbHTxx44TRiZLy4vHUv",
  "key37": "3ks9JATBanZYDgHmpjiaR2uwoLM8z1N1XaxcnQFvZjVTESCqpLRyXsQkdJkwF82UN396Awi7kZ1M3FavyjmGZGzY"
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
