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
    "47dDqbEM4pQdDrYY3vTytGXeTVvNiKGetj9XdMDBK9GxA9SawCAfjAtfutubVouxDbVQLdwgM8cE8JeWcvs6actX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESe3HjkFgD4aCWz2pCK3dhyP4vLPzUYnWUuxCqmtmJa5F4phVt14cPJqU5KMoRvQ8yjCnjM1aJpd5rCftKRJzDw",
  "key1": "23ePS6JR5tk55WqRz7JE6aN57M5sAUhttUS8MdfVhxF3eAF6ATkr7ve2rBAAppoY7y5rCWW6BxwVtQXDB7waUvXw",
  "key2": "2nrJiBNrqbCfS9iqzimPfny4EdKTdsAGNSVhPq7rBTpwbUDgzpYpu3B7uRzBPQ91792YtTAxp8KjpP26xh173WHs",
  "key3": "4BAm6Lon5KxAgVobGYc4j4axQRjgbmSZUqqiPCaAJkY9Mb5VsErwhNSKXkq8W2Xr3jjxBPPoywaRqFE87B3XYWz1",
  "key4": "WLYtSvo2pC8hWeV3W3XvXf13a4VrGTqc5WGCk7Lm3HegjysW7XRXBP6kBGxfD6kwQ7bthzgSDnUkkEY8mJXEsf1",
  "key5": "3EFbgZVz7CWAzDKBh9whUwYjzU1F3V15NfNMZ9vqKNo6QkRZKX7GVtiTrXMphWJEcAEqoGTjaZ2RcboiUiT3ey5M",
  "key6": "4hDC6UV48DvaGWqbHsm3r9gdZhL3kBaVXZMfA21giYQHTBkyC4FiPyJr66pUd9BZWadCDBn83mQ3n7h9cFXDNsuC",
  "key7": "5GN2Sj2dRD7dq6M153soyecyXfqhPd1mDZEgynwtNmusntr8JHiM9GvKtvaHRDqavUkmFk2PE2Gqu6WGKW7JncBS",
  "key8": "5bqG5M1p1B4FywkvJirasGioCmKfB1Mq6WwXw164ukvVvaYqPKuMAQkGWJCN73saZ9wDbc6PcpBEHR5wXrp5JuWy",
  "key9": "HTUf1Fadz2yAPmBeD47NNsHSPFifj2AmNeKjtkLWfDvUYEhEX4pobifGSG61JaGMgbQVYjMjL3pVY5MFPSefH84",
  "key10": "5cWo12fhZGwHgzeAzcbkFFW5BHBa83GPMJim4M9zA8Td67CB6dLLMUzCEUvgbnV3gVax9ys68Cps3kpU8gNNxNh9",
  "key11": "5PJ6pPABLy46X2T76GymzL8AtPWurdW3VHmmBANjsgFugbq7h8cijFybVwjBSYAGSWkpYjzjdh8xYx1FXXzM2XZE",
  "key12": "4u8B96mNE4my5FbmmmGgbXQKLZ3fVodCkHwJAft24pQYuELy8vfT9URisjsJMSqCdhkdD8DuUwn17Z9skVCtUMWi",
  "key13": "3ywpBG7Q26F819pBmhq8kVPJRRcU7UBGQeUAvrrjMTqtfNzkUkWooYqw2NUptncBvsvUrfF9vMz78ASbKcRDFMb1",
  "key14": "38oSJY6Me3tLLHcbPmTiXgWPZDA5rCgCufv2coxUhSnJ4wyNhmoPgaWaFBVfNYnFtFcFrtzFpieUuqrAuKYF3i1S",
  "key15": "5W7vKyaYPR2zGfxUZQZwQrAxfouCj6bLvdtKdjdgmyAbFX1zgFrogWU4CMHYoxKkgfbarTk3HbERSWtZH8cnRD5G",
  "key16": "qBSJL8eCAar4XCAdsTB6HXBjri3CHypmrckPzmVMW3SxhGjTLHutNE4ix34JszLJwt7eGgxV2rzC33NJK3RbQHN",
  "key17": "3dGJbfXPtRrASqX3f1Y52Qey4KGiVzPxj55ir22J9ghCkocEErBxCr4Rsb3rX6aZpsiUGiL9v2ob2JLMPxqWBxqk",
  "key18": "XtQ4unyRjQWp7Tuhja5R16HP8mwKufRSQYSXrpSQr9XwrLHn3oBy4oa2PvfPm6Xafu7Vjt6U6D9xr5MLCrETGDb",
  "key19": "Voft5oWfS46HKaPLA9kB2QUiksQuLoVYGF43n1iMpqqS9gWM5ypKv7nkfoazypCFbh2SFFGigxWkYBCrUJ6GMkd",
  "key20": "4i514bpJ6uzBGsyvQ33KWADP7DZ8ofahRN5U2n4gTMX6Exy5ivjn8mVqSSzKyoWbBPocrNoxfBLoY2no313qNs3L",
  "key21": "4ZWTbjR1fKz2npUsHVH8tJSrWUebaVMFfr2DwTJjTnu7twCADMvi56CruVzrzyKfPQE5iGNR7t76vpu6uGifoNK6",
  "key22": "5cqDaFbsMisVGv2dJ9W3H1d6v4N3aodqEoFTQWkKQd7JRqAisnEQHRjG62Vtn6f7UNjZUKmKFneieP9xe53KziMg",
  "key23": "KD5s12coVMTPmKSQEQuZqmaDgFjAK6nqSxMKykU69sDiPk15eLFDzuTXxDz6a24kcYPZjZQ69tPXVQY6vkTAAPt",
  "key24": "3TeRMCXXemWMQrmSRw5a97QsVJrHMizrqwPG1kp9saNvAczK2jLjVv5cYwjCojf8qattMFQfnyUUG8AS8oCwtDm1",
  "key25": "5jnRAak9FwW7Jae2VWuu4V9kgB4QV4bWKV8scRRarPd5wwUyAfzsGRcDggvqSkShc3jhcu2TngzSm3i49ZEYMwHX",
  "key26": "dA34Qk52e4c1kd1fd8RggY6aTArAt1SK3SjwRifNr5aLX6JkgCMhPvW1rGTTpuqdvhEgmzsbZ8Dy6PBVwiyFmiw",
  "key27": "2ok2SpxaXXcrUdo5a56rF5ELvGntpJFD5UpEKbY4o54YKdNhBQ968oim5qBrADxzGUjjRWKZWAuKXSPwiykPUMqY"
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
