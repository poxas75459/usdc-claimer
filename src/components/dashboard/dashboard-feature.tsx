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
    "2MsyvFf3vPARHGxh3QoPC933Rxruw6dK5S5MQJcajoLS5RTz8GxexSq3gJnxojMk7oJZjH6K3bFYCm3Pu2xhcgH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGRR34YGHDRRbbuYTaQbkFcUhjbpXwrx9sUZqPZM8mMKVjgX28wMmTNzRT2dL4LSnmFhrSP1zy1eVPMRbXMqo5h",
  "key1": "2hS3nntmbbD2G33C9J93wER7QvmPa1jpVBSqBvLwBQgq4LCuaDpQBv2za7MYc3ByHh4uwNKjnBvS1KK785r9E1KW",
  "key2": "43Mu4LVeooExDWAdSKqCvLUDw3okdNaHUeUe85Ge4gq8yZE5Zx49APZDAWRwnkyyVGq5twSHTSJZfq7bwYXnVA81",
  "key3": "3A8JMf4fvYzoci4AqWNYxjZXGyKdirzKcHi2AJv6q5YJsPt2eYcTD5osx5jCA1gs1pGQGogvG9JSKEZRFqPCAV66",
  "key4": "2TYzozE19fYyeiJzfKm75kL3RLF9k5nV8dt16TuCTbV4GCxN66ctWRiLcorQ5bhfMrT6sr4BQi3hZJ73p5zf79ji",
  "key5": "3BfdjMFXCjdYseCzgK6hKsZVUcNSXssEn5P8cF1qZwMNSpqe97YCXENzMTHGzzHKk33zgDoL9c7BZfcDL7b23FDe",
  "key6": "5RBdPMrLVkKB7HV7HzbEKwy3E2mmVRogpf4TG9t3UfXjadp2gG5mFZYZhcEENXyP3KSFKs5acVsFv4T7BLnWWNCi",
  "key7": "2upMM15ju1sQzi6VQx7XJ4yMpcHcHcTxoRNAirSdxRRSMde9FxybcDTgAiWsWGo432xgZxDsnCRLAqXhWK2sTnoS",
  "key8": "5Z6eLFrGcWP8jFaiJXydUA6TPGzbpyvzbFTbjgHAYLQXsprDh3BakR19enMZgn2zxFto42QQfs1UZN59iH6eoSV1",
  "key9": "5MKHMjRrFTJ1c4HAutUTdMv85diPxZTYn4DRUneUSzMamoAMvLu9oV5epwmzB2oKzA21XE2RoXzQ2mYHCoxnia1t",
  "key10": "3eWLX9dSxWYNerbNGzkP4YXUb5ttG1uYoUXwYJuopDzmfvpgLYj5W2vhS3Wg5D1a36JjrREc6UXdm7hudJsTwf4k",
  "key11": "2knAFVVAw1BKMTaWQrc87EaH2QXJmk3P6wxrwc8oUtKFrUvEJuxrF6w46jPXfS4nQ9V65afKnG8PNf4vDhce1nHz",
  "key12": "2jT8wzSs7ho5zGuSq5YF9W7y49uqccWf8si2GWSabVgi4QDYYgcAnNFHRSJRLvPP3e9tPwNjwW1sF7uaaZtYwbxz",
  "key13": "4vm5KpQC36W6nBvciyqg5oQy2H6ikuU17NTLWattsfqUKHvdySFrcHfx2JCgcPUANR72NYtPViopN36Nk8qcUVxZ",
  "key14": "3yi87MTbGHeDbLegjnqdLkMPMg7nCcCxQRC2erB445q7PqB4fejNjEhhKvrRxe2FH2hUmQwa6T4pbUdLi3jFAvAx",
  "key15": "23z9sucKBLa8dNBX6PNCKQNdejgNEcqu6riyipVdzhpFHsh7eq3xSRah9QZTUXi7Pe3YpzmzHNg8bbC26H5HtezC",
  "key16": "4RvspAzZEz3gwuqzRiMBkJLezRv4883kgAEfeCvPozRSw9KHHeygyib75TzXXPLtghRyrbaXnL125YaPNBjMMPnx",
  "key17": "2JGTXhzCrqf4nZ26PedALZ7UWo4qDC9cqCftL88xS3EAS2b5p1QjgjDE4i962MYYA7rHQRFuBi5keK8evAwdYB8W",
  "key18": "5biQE8rpwgzuPzwaUW16zLt8AA3e6L1JubMCGXAurvwqfVwJ3Vc6RN56dC8sjvZMui2iKfkwKQLbi8sE1L6q14SU",
  "key19": "ojCjfSPrWozMFPgUM4WHXxoxQTLpBHJ2qkrsDESmyLtMdFSat4VoLGHvsZ1dPpNszciCQuE2r1ixJ7HMHLs28fY",
  "key20": "4kHBThvdX4hkwQudDorApAFPxF1B6YmpEyeKXrPEpBD9R8n6owB9xnrP8y4d7CYvuSUwZHvm7GEvRNqThjczRgif",
  "key21": "5ANXhtqqgCxYC2pVdcDBxUNZLZ9Cs85WFdmVC2BPEEJc8wouBFniZHSmz945t8LCLbsazpxjVxgxxuSuFf4toMyS",
  "key22": "3X3iFLySwGENuanb73GsrkinhWToWDD6j1LHjWNLg51PUTX8nGWYd6P7nXwoCjoJjxKDcchNjG93B3NaUmuuHTfA",
  "key23": "36wLupDTHyNVPuWYMquyUDXJL2CKdoKmrNLnJ17mvfYk7zUSXj2WjzguRCmJikR3PW1Jp91o5NMgMYvcv6S4pJaG",
  "key24": "qKcwL4coJSpmaCEbVsSAfcQRaPYPbvAQiQrN1TNCCR8UmTxyrGHGJKA73FPwASgT1Loy9bbZo9TG5MdgYD2YvQw",
  "key25": "2nRw4aSY8JJQZaNnYWo9UvYmVgARnoGHC4iU4gt2uaGTHEijm2RfoNGeH8nofPe68MEmGRoV8N6jkcDDnNhoESxn",
  "key26": "2LpFVqCTq24SoNemD1g5c41AyUc5126xvusUyYCjM3wCQW1Kc69bUQUUjc59Z9owmim5hepJs6Yxkxu6EbgVKThp",
  "key27": "4HEYFW3gEmzxTHWJQcKh1qs9CJE86cqCn44iuc5LcxG5XnTWtezvrHwTC6VDjNSN35vstGVRrshPxrG3FByG5QV2",
  "key28": "3SZpgwhEfKmuRfqKU2fD8VRdozXCJU3MaC1obRPiWW9Ep7mXrqLjutx68Djjz1nVGUuKfy9UcSGCrXMEM7bX4UC3",
  "key29": "5jq69MKPwfSxWqv3U1RfzTPa6CqDWUddEqxiJatVWET7ZUKQf1syizd6yt2E7v2KAkYuseyzGhMfFkQ4mEa7Gzfs",
  "key30": "5EPN9PJ6zuPWVa215Eje13w4Bmm6uAVArFh6HTcPDX3CPjYaYaEJriEd3rBJzeSivF2HT8keM4ah5SZrEqYHwhCh",
  "key31": "4A19PxpsRhFFWiSzgnNwUaXQmoWX8KwNkq3xuSLCyAQXtFS4VX3v8ZzjYQ69JqKCCeXNcgvDkreWT3nNueRf7SM2",
  "key32": "3FRhKerABRgpxWyB6MjRss4vyEy1YS2JJmc5kcwUPBXpirBNheLybz8ie73wn2g4u4LJNRrrpbrBFoojU4hb985G",
  "key33": "5VJwLkLjvad1qXFZr3bQieti5E193mXq9p8cThwpj4mru84Y5x1SQ3hfmL115jdkkXt5x3JB4mMYUnwwAZZt2SzX"
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
