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
    "2tsKtjVFj4gfnsLiCJbmq1biJqMo3dBtQkouCbi7f2nTqgjvNuphDzPsZ2bJqcboqYepZEWXYcDPnsHEy37c5jAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BGvftc7vtTkthnfZXw1vAsWMM6LuoJL8BnVTki3RZF2PUDgSbyHhrwQzHDocu3KsymgNTMQF98W7SjY6XVbJYLo",
  "key1": "4sk7JKNySsFu9oUbLwSwzu3aDxQdGd2DPSu5j89fjzxVzy1NXAgN5BTRm5byZUkpQQi25KwuRYmQyu9vU4cV7ycZ",
  "key2": "35vMHhXmXD7yxPXXqyD2ax13UFS2gmfmhL4zAU5G2uHh1nyRvvysSw2KDqvGip4jTPJqfnyrBdTXFHi7JnEryJoA",
  "key3": "3aVy1kWEdSXypx8CQ1KL3BuheyqMJW7og5GC7r3mT1bs15w5bJJUPxeyHBKcpM6KfjQLJ5frKVXdYL6bd76atrYj",
  "key4": "yD2farq3bfr95MPQBzMkd3JVB5uRw1F1DybzXNz7cocPaDkhjEp82sCAR69r6mGFiASqLTWmQW36rzB7rNN9GYA",
  "key5": "rWgSgECMaYmaCCWuJUGm5Mtp9FUsDKkLAknYmg4wsF5UgGaWr9kpk2CjuV7wa7FWjoLXsTodTtrFMzHHEsm6wDq",
  "key6": "3AZTZnLBfMfnfXbMhFgSrGKLnayK3SYMriUNWRLpjhfjyFuMLCgop4mTf65e9r6NVEWuFdqPyiu7dDxFsrVnUyeG",
  "key7": "2JQTStX43oZ2x4rN26agGV9L2q6DLbXzhdyYSVjEvS1JJobGvoop8YFCJnSHPUp3GLHu9d4hbS9xHcpEaqjhWXPd",
  "key8": "4fpeJXmCz1mVWzmbCZFhMD5qq8mCRpL3bSX4uF15UygcRsvEuXSDhBWauTtoT7KWroCxPFLkkztRZxAkoaDQYv5F",
  "key9": "4CD68aj6k6JG25zAn7TfFRSWYdukK7RbSdGSjKc8PvgM3ASGu97d6ckCBnhrb91Ph3XCYMB29ZvecdkLpLmWHqgu",
  "key10": "4vrmwzt7dnrAw7LoGBiXnMfA8v61GLXPu8V6ryAE7KD7uQuaHfMHkfBzDNrdjkCPgeLxey5ay6dzBhpsFxennZjk",
  "key11": "3Sz3U1e4V4VK6xjaP2Y6oBGHrtoT56dz4sQDScXExjiL25CKbU2FF1RekyJPS1JG9sFMUJKSKfo9d63aLACxwA3c",
  "key12": "5CggBPeQNc9kWYuA6izh12ZJSCewbpvvuhF3dCm4jNMT3U4ZYFTaeyA5AoXjuE4JWu4nJLtUi4PwxFXvrP3czXpZ",
  "key13": "2M7oEC2wSKfjybpXNPPfZB381sj1WcKunCvVZbjmSRfi2fq6cPSeNbL5mJBw2p9Z5s6VTQpWYjVhNfpj8BEAUHBP",
  "key14": "PpyMGWjdaPTECfggXQEwuPx2JZB15z5ks91QnD7WpHFU47NepdZAzjPXV3didhMRNSdyHzc4MMjbYmJEps8UVv1",
  "key15": "XpkwBhZjL1k61eJKWWkLbyNg9TtagX7v9GMgxfvDwpk4XCuatoAY4HSAqha6YTfkshiVc2ETcgmTTg2AaUgmRiU",
  "key16": "BbsYjXwcrsemDUjBu1SdhcTcDJn7DUs7NtYxJwJirKarGpn8w5MCp6SuYY2QtrJQ74puHmAZksPvPgU4psoFeAQ",
  "key17": "4ED14459bbCfmQR2isvPgUaZSAZ187uhRzGwhY27FeFXy1ZjnFEDBkPZRU5uUfKMPL5SGWZT1ztwfdZuGvUA1RvP",
  "key18": "3bN5h9CDjBBPP1anZppu3t5nQ3wrMTKcHEfRjfqX93SaPTHxW9MGJYfvXXq35kr4muXbqDqB2Lxo1oABdbccqC87",
  "key19": "2hWzdQeGd6kRj4VnSyLpN9s339NbygXhPhXyWkYExwVKdTKwc3oG2KnwtHNbJUzDPrU8gsbwR6F4q1UXvQg76LMs",
  "key20": "2sYz8b9sHkAs53gQ11CifHNfGPhhk4WTzYDkdPcf8usb9thg6M4Kzngz2hL7asmhqNsi4yFqSGntFec5EohiFnsJ",
  "key21": "46h6XgHBsqGcumXRQXeM9guyYvYH3K5CKX7c6vrQoQteg6kdQLwhQGwoj3kmuewqkhfurgG8yUn4ZdLJnKnhS3ps",
  "key22": "2h9rGu6jyUDKhVTtXTrWSTtFjrQeeTbcxaNuAWbrG4oBaJNWtPEE7fVkPpNXwPJFuFKfaR2C29LkHYpjBGqp2rhv",
  "key23": "5phVbSVRqvQB139gJa1MW91uFAcjQVecs2fdNYrHcqJtTvfQ1eewnBV9bBdcwY6fuE7TevVaUEcgxkahuKeJ7iwk",
  "key24": "2Z7pGUm8uytawm3xBCjyYyqCu21JZrRMugvT2KHgFchGbPSJLDXxry8zJuvxyKVB5WmbqAE3RoaXXjGdj1RNSW39",
  "key25": "57arDVkHEUkanLsJd2dyMoL2VAVcEkAjdeCcry3nmf5PDQqvbD4knBbcPVpBTkEoKc85PsdPLZpDu1EK1D5TyFYb",
  "key26": "631LS69ZRfhKtEAbQ3cxpCXZ6ppjrhfdxWnquxyS5VEie9JnB1RG49yjtR28mqj26gEcVQQwowH9C33Va3p72R4N",
  "key27": "2cSDX1vzrreQYATmeWQUCpvjpdhBDehqbDSyq26ScVNH79Zt4hseBQqPhnD86Qhjke1f7k1VDaxfQQupZFHfARhu",
  "key28": "tdPWuYgSSL7oFG9F4GSkb1TUpToVWe9qcnxTxi4226DD4zH3ScvsfEVot6UW8Kz5aU2zuz2yL8feeMgCtYTSnZA",
  "key29": "31VBeizDUuYa3PwcDDLiUBQmJEzqbKQZ6DTYS4WKMfHE1B4uZVE9UREfUP1qSjHU9BcFGPBQksnfJTiQDtpATsSP",
  "key30": "29rjMGzqgBGuRg9JeJUkh4CMkXJKRTBX9bm1vN2LHQghrKNoDkAgZ852k8YDMBE8RQa38m9qtum7qbW2XzBJsxG3"
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
