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
    "3Ndi2qpreYcfbx6w3sCMaZuJkJif6R1QFToYyFk2wmqPUHXSdq6wQ1uGwUJNsEgd7k1bkqbDkuKVF9ekjZJ67wyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rUhokCoNQ1Yf6iM73gq7reteJLRg4efMpo8PuhZTnqVQdFnGdjbTTjnaT6Jcngg7jLqMB6q9r8o2NcX9R2cw5f",
  "key1": "m7XPzfEzHsEdS4HztL9sVNhJfjWJsYnc99RxtUE8ZWdpYUVGrQtpztWt4a42SWt2hg1LTSntBSy8t2NvdUHbUmn",
  "key2": "41onc8x55p54w59rYPAdEqMrvKp6gjuzLLrHvEx4jBaQNwjwYMAdDfXmzzBfhEgaprHssRrKLs6nZV5YKE5hTiWp",
  "key3": "3d7Eeo2BCuGbvi7eWNt4nSFpm7Cz65xH1SwEP4YE3wvsXQ1GsRkXtjybrujSL19Zq7jynqL7zTLZomWKRJRvGPnB",
  "key4": "25LpZuWkY2TFXyNKAVzjUyKoQSTxMx6BMNf63DR11djGzFYRRVK14xaYqLxdTCpGriy7eLUxF64aDS8hm7rFzq7V",
  "key5": "qrSsxgaYK8mBLZQDjVoYDQfR9gNqAe3fJ7LwJqwZcw6tHznFy5qh8BSjdxcGiz6YJqSR5DXEosrdK2h2rb4BBWU",
  "key6": "41y8rAqSu2uabpYuAgT1ms39AKNukaZKrsYH5NXVctdZbAwgvuFu2o3Wn2j8bh7qNhwWiUqGecJbP4DMAi1qBNAu",
  "key7": "27a8FKSaUNLtqDeoH8gw5Pgnqpw58qkWbPipJ3ktHuQ1Jhq5fDauXeQwTgFNni5M2yM5pxjvhLpPiw3rmxsAqoGg",
  "key8": "39T7Dz55vaZf3ndsjuBjJjUmdMjvn236KFawDM24kpTt2EQQhFpZqxZkPuNDruiLHktd6a5W6ZnRBDGvBwWZztJw",
  "key9": "eQwymmG3ApL2DgbjDEN6KEn38PZBgh81xSrLm9bDGBYW1nnPF8Vc4LQyx6NfdEs1EeAJHT4uaEzWPPPuLiqbdEu",
  "key10": "2AGGbDhzQ1jqKCscSmG3vXVPmYaNjHNnvLcgbNYRHdQ1KUgaDmGA3e6XZJz6ZjzRHJATb8BETg8pneFkawqBkqo8",
  "key11": "5sZQFEEXGJrfQW8vzDGCSAjtWTMbadG2SepPVsnhSSm7PXM8PwtBrjxUz3HwqzxqbqvnUGNF7pv4NumszuJY88QD",
  "key12": "2AsNQJy2mLp1ntkWUFkhUBJHRXRvPfCbvoDn8hXca4D7RNUnHvAxKbqf91uZBPUAS9bM3SVT8F83oGijgXj3VLo6",
  "key13": "4ywPpPNjv2avrzNyhys8BeyyFXT5aidjdVstgsLaP3T8UUoeQFcg6CyZAdJ1HqeTuoCiV1CxvDhWyisCLcuR8vDq",
  "key14": "241F2B7CKeVM9oyKqPvFk8w2XsLpuuGxrXPFmQqfDvepF9fM7q1Dd7N8Xy1SWxhxawLKDuXUEH9xANh2R6mqrqLg",
  "key15": "x1A5JsEmM3dpVdLhAK8WD8Q5Wp6iEHLdHTZWxLo7bpepvnDLWDqimMzskwUuPyFSq4VBFemncGqhGKdrvNSE71G",
  "key16": "5DRbzM7MvbvmPruRfPo2VczV4aYP9G4UWW86tMPk2Xbt8vtxwdkzEWJv4ts9rLp9z4Hz3CiThiY7icHrEkdfwpxx",
  "key17": "4BQrgRRdBwbH3eErDx32mXu3iziAqEDJxqwBWKatsnYJfW6FGF3g11oT52hHbaVRQJzzRwx3p76CCjmcAAn1vmWY",
  "key18": "3PDG2NQQEgGP1JUs1Ze8QHpYPiJJeM2TcvQK4qqd4VnRZVNMnSe9vHmeMxhzCQcfw464mz3nFvKCEv9UsaFZAd5h",
  "key19": "5YFeZBzRUN9U3NiytL2xpnirPfTgYgBGKjJrH36wLF872KWUaaBccc8ag9Bhq55XfhaRLnAADw4TjHsG7VT2F2b7",
  "key20": "679x5yEuRdT3WdbC7dzBvh6b7TqWEBXUKJ8NBDoaf35c5N3C1AJGdPW7C95W3PZSF41bt9KR1hsNivaNjR4VHgF5",
  "key21": "4XChod4GDEJ5HnbqQkqpai4hxQEMnpAYYWkqdtnZyCkyax4f7VmjUP93APmRvQh5vZRPtNaeuQ8zbD5TmgKdJshf",
  "key22": "42Vs56HXPDcNjiEo2zG7BGPo83w9ZUQYJWRckRciGonyHU2fntsLxsATHEtofdZecxf6LgyMNVQrPtHDwL6Q1ZfC",
  "key23": "95ShJi45egAH2mN947pX32VuWMiHFZTppXbK3izXw4g2VToQEpxZBGyAaRu5UDcZvvzBQHxFumC3KpNBbVbi8B7",
  "key24": "3b1qNXfUJc48uhyyGghBz26Jh9b1xvuF2X6cXLJracv7iYVZMetngo96X1C5zxr56H1xfGmmqzh82h4sWHnotui1",
  "key25": "SgHQzQYMFvN6mNUchjvovsQPHsyAwRstRKcdMvdmDoqPVvKFKxrjMaHHaCfzCG1mFiYKMKVR3o4n2pZ2XTJTDSw",
  "key26": "uJiFDBJnyfz2osrpLMiP5cHxHPWVeXzJfS5WUvWRmFUZCBpspD8cyUsTqigGdMU67xaC4Tif1LBfRHCNE49FjVf",
  "key27": "5AQwGLB471zkQWkJrohX7nm97Thq9unKwVNH5i7eXMXypaNqb6KXWX4NqcStVDcS7JqmpN77WW5jwzQ2yfr19fsC",
  "key28": "5NbdxkueUfNSWnK3zdsZwbwr5pNS8pbmhQFAedxiTwubanFBaX5i3xo5wuA3EThB4cWRM6PHtmuWZNGH48Secwtz",
  "key29": "4o4BMK7z343ggcqga6Hxf9DWB1ReG1bYLciD4GPfsRvzWA8SXnpLTLx9RJJUNcNPv2HN7m21BCiFTjoW7mL5yBgD",
  "key30": "eUcipQDoKLwvCppfnMgdHeRmXJmtgrNZvxNCrYntutydKctrd5hvnmJn1zpaRoXAnxgE3JweS5tXWWPgFyB4XcH"
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
