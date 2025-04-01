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
    "3SKkiD91TXnPBKqHPGhQEwToNtrq3NX4sVhikrexogA8wPM7R5HPsaKFZeCeR7XKpEGou5FEe1pBYS4LPRgabcfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46naPA985D7a9mZCJ54t889dYMaRCy4QRZiCzpgxwXJtUgUawRGHXocbTW4W4X7tRSm4AA2kY3g5Q1TVHtV6vqsH",
  "key1": "5oCHRQcULcNfvBw37TqpPWsLxgz6GzgoHyZsndvWHJHdzK8MS5kgJJiQ9QsQ9gXdchGG2UTbXPNRXECD4LEJMQhG",
  "key2": "2LCAdu5FZJ5cHPGfwHMRyX1oJPix5WWSpzGNBSERHMJUnJYRVxazQcj4PXFQiVZze4sPgUtA4zkg7yVsP6YMbiCU",
  "key3": "5MWkFkjRYjstYVdkRp2qjmMs9KkeHhYQaEn8e4wuVznFmS8GS6UJfQg5VGCa4qH2AE3Lbtno1GaEDrfThWjyiMwz",
  "key4": "Je4poXVxMU5NxuQNWaVGr34ghFdbLUNcJUu6v7b28wdTDrSsZyZGXp5TepADuWHucWDgkK9Um1fw5QXJmXJVCd4",
  "key5": "5ogy68KFbSts1SxKTifxD97sGUDG5Uii6T7zzP1xHs11FB2h9JZFZAZpXAbp3okxqPooKdxCsML4Q3jyvgoAnqqK",
  "key6": "58HXT7za4uwrytMNE9CaFK3ibmqdScwkjuSMDAEJRgPfTRujq31hPbUkCSxUVLA55XJSh5b3MjYvXD94oU7cmhvZ",
  "key7": "3iCKDgSuWJEz1PYb9ZYeErLcmqbVFWPLB21XDZsNnad2narPLADSWckcj85swdvK9PhRBqsEsNmGAAyvcpAQQaJ4",
  "key8": "5pHgird6S2gC5opg8i9jr9XYACTAe6byYTQH5ikHY7XfdiR4iYVDzzqKos5EmoKd3ksrsZNUPzi7Hzu8kZhDSveB",
  "key9": "3GuMDRAxQUXwYq37PHy8WNkffFQYZffZ4LU9Ehf7EdRpRnfyp9hzB3bELfhNE4j84L7DZPYdgUmMKFDnbpQ8a9gN",
  "key10": "4FzH657poKxz8Gko1PRGoMAJ2Sb92WASacXPLrxCsBgN6UMjao5ukF1DoyfauefNb3n74CZCCKohjDKS2LvwLTpB",
  "key11": "42akADwZL9b6NHSqrQdGYQdseMSJ7jtTdTxwXc1U9W2iNU32AHGvtun2S54XEBeLY9YP9kvkExgiU8ApUpHvDHoR",
  "key12": "3Vrr5c8EvwPdF4fFcfjQQJDZCLzx67DKxbCh4TnAFWAyPanUsjKFaGXDwwCdgBLTB1zgndDk5vbLQyZTvNNPF516",
  "key13": "5P7EmgcB9r3FVQH2HrMf8rRLAerKoFxz4886dwjn4CrAFaFC3BjirUH4x9FucFDZFT3aViA11LwoxrpjTYUNRgzn",
  "key14": "46bHPiLGDChyP3A4wJggqvt71CNw3gND2mfHfMh4SQPYKAdSxfcK2zrQa2bkwpBPHU4gonUBGNkqDwTUZxao5kdM",
  "key15": "4ughNHc67R3eFvat738yDGbMASp8zeKo81cYq8jAmJD141PBCE3HKAJwFoSNUCzxFtHVTHZW5QzdgRnRk4uuwW4k",
  "key16": "2eCFoxJBcyGkbXe7cjbxx9mLNbacXiHQT3DZAWcKMSCqBiiY2ua8Co3HRbS9WnZavkqxmzRmAZNQt1CpzcSRQk8q",
  "key17": "4orosXemWL2813NyCTEe4Mp2SytYxmDZXZHq3NE4UFcj6Efy815LewoDw19AxYs5DYoDGwDXGxMaYv2q7No4Za1x",
  "key18": "2itfciMjMuFv8purE4zi9W6jsqMHYrnoysCBBfNepBFV6t3sboFwr7BoGybU5REU24RV1zBupog69QuQeUUwLSLn",
  "key19": "y1M6YjgVSma3Dah279wGaJVt42Q7jYJoLoQZBxVQPc2kBuuJS8xGzAgbVTYXVwPveZ5B6vgJrb2YFPMHmVm1aC2",
  "key20": "2mCCrRLbgTC6snNcjeXybVVfSsy6nMocBPMwKcM6hXCTdhSJqBoCJnmR4UcuXqY2AXoo8izEKX6KfJwxvs61GTAB",
  "key21": "2YqdrHZaBaB1tMop9uTahbRRk84CCubeUnNVPgiHDCm8BWpDDaFbNuSzFto2yHafyfVZy1YEWjPyByAsjAgaCuUa",
  "key22": "2pFNMUFhKAWT83MwNkBFwjMA6H8uN2Gt3Uen7CwRkEBtYPFut5NZe3onyMMhxkErF5a7pHNYEiwJdk5kZ6Sk7Kbc",
  "key23": "3knGwbVgAf27LJnX2rWAFSYL1eBp5k1tTXxEqtZjKaAXSNQr346Y2MxeWQ4VxkZWmNS7qEK7QQ1FLZMpvgyP7pLe",
  "key24": "52rvgLxDBg1SwVgFCYyeHo1i9j2QarGNP3WU9hTKAf6vnYprmLoKKaz8ez9SLFBSQFWR126fsYSepwVvATJr8gLB",
  "key25": "MEUWwmoCWTdodhpLgbtzTYrV2qEeeuFzPpVwgfeD8emi1XzkpYDLVNWgvFeVsiaGLBLEQnrKHdGoWVgHvie4G8M",
  "key26": "2MLaWrLaYUF4Qo8XfVUEeT615WSXcNUVWkJtumKpPB8YJqvySqkmHC9yb8cX1Yr9N8X4x8eQ91nkuYTdwzrpGPb1",
  "key27": "2dVrbXZxm5YEVhFL9kV6XHyrNXrBqGXFuafGYbsTm7AVzUkatJ1WdSbzTi4BdhquN1dtjWHprhjQxeecwgHiPekH",
  "key28": "2fHyYwKMhefjvq7ddcYoeRV7PovfY7eUR57RhE71EDkQWPV7tPHYTR7cenT4NmDTGPMRUzR5azEh4gQ7ANKgCu7M",
  "key29": "5jSi4yyu54AktmjJCvDQezybzvVeHirVJn8bqxeF6SgEmTTwAnc3hLKK6S1thDvuFNThMr6tEdQ8JUWDfS3EyXX2",
  "key30": "ifEh3PvBYCzn49CUQAQ5NMMwebZhUWJDTu4xW7y7QowNZaz75aSNJj1y39LGbhYz28VxgL5r76KXxUqpApS48Z8",
  "key31": "35Tc9TLSZth2iUkddKKVj7JNLrucW3CoUegMnXVhhFiitAyeDBCdHUEegYzGa6fF1VQrweuQxTq52vpsM7DNP9f8",
  "key32": "4SbYc3Yo1msW1V7hSvn2psUtSMRiHPLYum4gktR34p2cf1fS97adR5JnTxqVVQV4ZWEtoDy6gpDm8zb9BbqbxFeM",
  "key33": "3WMkM5jP1W5kc27PNkUB9dsuVc4HN54yF5BbfArSXxVkzbQwbA83UqebFdMMoKWvU9gcRZJSekVuDmHEvgP5zbiD",
  "key34": "656Lk82cpbW5nCKkZejgYu5R9TBp1qA5vY8uJAUiroAqqeL5ho1o52MBbrmyPQ3uisrzQ4mGo2VNyZwaWGNMjqCt",
  "key35": "rhmjomkcnHY79pEbJCu42CmFEKGxAT5YZV5riFP3qJymvzhPrm6HHhMfaDGeXtyV37tiemsr57K6VTZvvLSpdBQ",
  "key36": "5NTfU5RexiqANH1mMNb6qcgdcJQjifJ7DxRuUbVjt5mApDzsS1rtX4mzPiVoF7HuW9waNHwz8DEHxfsN1VN9rmPC",
  "key37": "5a7yV8w8MLJeDRP7go2Hv42SNPgkv8Z8kB14rLGapJRUSJkZDWJeECwCNKzy4UGbTxRm3jt9TpUV1skWqhmEvgTz"
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
