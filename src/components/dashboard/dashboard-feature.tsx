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
    "4P1BdJCjHLfBzZVHgnfi9vsUwdmmyQSvkhbYwgQZzqnd6S3DyVkVDbbRxBWbNnYDDwhrDr5LPRA8tD3Tbtrc3Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8WfJZqbAQLaJ7XFdiuHXRwVontAN5KMRYsk4t2uXa3Go95csLsPmF27mitJoHFcDaw1BJARN4V7KnbAJPoFV2e",
  "key1": "mpzfMhsrmWtaFqXxNyBsqgxpQa4FPNYryGQUc8ASsXDCQACDAz3KjDkhdsAogNec6wfv6DtEFmsoUw89hE9zBuX",
  "key2": "q9FgfVmzghjjzqNs7HsRvkEtVh5qmwyM2ei1imxhwtbU2oTpqEkvztDrH4ErQbwqKT6SjHV6WdFmghfe1ALarQw",
  "key3": "5eEsKwYP3PKBG4yjawJ5pPWvFnsBUVfBdYVLziG8VWkBYxcWoivLbNmeQvgM2K35hpLmaXXX6y5tDpaA8jJXdeD7",
  "key4": "d3VZKFWY7uvdiF9yn58ETZivEUwr78cyh9WydjRaWAbav8xgrCqvKZ5pAuBGGjLLdbNDxsGQENiUtLjT3z7gKm7",
  "key5": "XV18nadhjVCdjFgnCdjxpEA2aMw85x2EbqWsxiq1XDEDtaGjsQxkrCFV2fSMnwX3kPuRbp9e94G1t8yYpta9G69",
  "key6": "3ikp7pBQmv7pdHDnScM3oEE4sNz2fLpoWQ29LSXaaTeVhVH3YzhhYAFd3orRRnLWc2Atu1k6Rhjgf5TRubA3Rg7",
  "key7": "535S96m5SPkgg4VweRei9XSawxwDEHjzurbnSHfM4fiSjA6Y4u4C4NdewSWBpn84LNXrgB6KDWP3ySzhocHeSX7A",
  "key8": "4sbqigwXrAH8YkDyDzE7BNoKsGvsDtcF1LR1RbyVBjPbSXa77x9a1Kkyhk73kWpHkvR3RcNF8oNfMUGwVW8RpBSe",
  "key9": "2cLUZpnqAZZ3jzbEEANhh6vx7YbNhpyfRg3g6c8nSGVbCAqsKHvYdNXDjns8fjs3n83STv3o5Exfw4zAGoRapBCA",
  "key10": "4CBZMehewj8bzCyKnsTVtcm7EiDLkBqWTZrPovKffbE8rsYja49vtbPDb5DQVXJvBP9dDLc2sfkxDk8cty2d7jRZ",
  "key11": "35LvpaeXJwkLhMiTucqUC7PoDE2EEaGwqw2JAKZTTp4wuodG47w8nt7DzVsgXHuE7FUG5ePcCkkooVydmL3mn4mG",
  "key12": "24tRXX3w1FsLYtvNM3JXEgawcJveb6uYme9vNEzPdwVAutRZxpHCRKXk95WjXfuduzP53d1FoiG97YoPhsBS2Vtm",
  "key13": "RxXxu8sCdULqE4gjYs1rar7k8tLF6pnSdPgx1ghSK5Y5kXoaL9UzbUFEX4KsmC3zhryKfM92GFgGWecNMbLT89P",
  "key14": "Es68XDbakk2rgrB1ema2MqGeW5GmQnCTqL56QKf8QauYRNQt5zWzZJgpkVjKYAPJJd6j2vNynF5UJEU7TucZ6tQ",
  "key15": "3TUCDbZfDj3dmvuLKFTrQWowBGpWcTULvNZn3dJwH1aRgDYWNahr7sPDQb1ajeSWAq2ZdgyJsMx2mnmRARvLvJdG",
  "key16": "43XcmAKkEk7XbvRFdTN4ZZb7HsHVd1cBFAKtHP52akeHETDzf1ZRPSwXKSqVsr7zoJZHJL5MKiKpR5DNRkSqr8VF",
  "key17": "3r8oPKJb3Tc5DAakpA7u6QXZ13SfRRJWU8ohHcNFPkQFxk2jmYmYpU4CExox3qCrCAjptA8E3srG9mX3E7CsPipv",
  "key18": "5FBL5BCNF5QfvBmfuWxzj9ZXei43nQUXj5mMYf43R99RLVadGt99ZzgEnSJYmR7SzDGwcMDWWPasJ11r4w3D5Pni",
  "key19": "3e8xNAX8Ut3LmXh6j6Zkvfou88u1jeQa4ksw7Yq12g3NVLuv2L8V3ATNY2ipHX7HUxtucLRtDp3bWhw3Pu9ju323",
  "key20": "3axwUNX3CtykPA17WfAkuDLEghnmbDZnJ5MBjx4ddySkJSThsofr9q6vd85PYxAeyMJ4CwKXvvJABetpkZcGt3mw",
  "key21": "4qShH5EfTWKivLP3jnXBhk13HzdmP74cowLQAa6u28ofNGWNFV9o67u4MfEbRAtEAiDxVx1GXJcwQ2cFP3A6mq57",
  "key22": "cDUzBsKxiTEs9rFW9HKvNpCbaLvCMziJShLf2djkYz6W992KW3UdxiJxszooaqr4UhvwvhdB8BFFvCkLRA9zZmX",
  "key23": "59fYyxDGgCNVoNtbsfeyBHHNRvzGha3Z1RfP673vqmswqbYF4JGYWYC6CizM2cUHGWHNYuYgyTiMqHgJZZyMzjr6",
  "key24": "4EgJ9Ww285EAdtm73iAcrx4rFFTyipqnRwL2EwGCfByT6xuZCAnUfWiBpJQ43i92o9ekxQ9yBf3nwE7k8jYP9ivM",
  "key25": "2Gg6KrnD2Ymn78zG96f2MhvpgvUYAxiBxNBxmP1GEK4snrtaMn9fFAJhKX61EDpF4DGfAEWdSqpnhXJkFXNUJvSx",
  "key26": "2brJGptiGaAQ7fLveumS5n4oDztWWFiHD6vUsy4VdzUNV5mEUjaEvRK6Ax379jnFMu1sN9NUZPjNKHvmJB2Vn3a7",
  "key27": "4x4GgJRXTdTMHDyUPHyM6T88bKVx3M2sCNQYZAN2UE3MULVdW8kF8siRZioVHNpgUMT6fZib9ZfGxpjJpNba1Bkj",
  "key28": "32hSpiLnoScxcY5Hp7tHCn7dCh3viMUTQRNSw3zZFpRHnegAGUXKiXyjUVdLD6gWaLrWVKBybtRe48FFerrbGnYd",
  "key29": "4XeRZxkiYZFVaXu4VaTfiHhipfo8TbToUvvLsMge9RG9FXxWeAJbJLYU3keh618jUMpjX1U4MnsCPQLMo6hFKQxf",
  "key30": "4ogqbhxkF1AiiwuW1EvBPcfJxbi8eMo8Nkx1b7JTJHPdb3qJzHnHFBjYr64gJ5TkcahGnvDXGRe1TqbstHktUVzV",
  "key31": "3vaEX9kHdNr7ZTN744avpZoHGPVn3RQkHUbktumWQiwgt2zGCHB2TMqAGg3fVgP6HHhBk7NGde2FikuV1vriAhRa",
  "key32": "2EpiRTchnvJPUXd3YLprjYzq9mgMEhXGUHHR1yYhnnDD244KoNBWHGVdM3NySCfBvG6uYVtHnBKkbv1eB4fnf7qL",
  "key33": "5jjAg1wjGB7xhniS6GhSLyy9qf1k8AJWfF2EgZuU7BTA5mziQRQF5Wa54aTg6e5ob2NdgU3iPYFnsGiVYWWb3xdX"
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
