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
    "5Dt5y5JqsFL2XSMYPCCii1QKqCcWCpVFXqxZ4CqzSSx3RdqXpCkTMhd6EsWrLEEYH7s1gGxfgoE1QhLJ5ons5N2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22mVGNnVejonGyhCdSn6qFMHcQCm9Kn2S7y6MqxVBXwimxUDvDoupZMe66hsHfXFE9yEcrhB4dhJgiAxWV2dEvaa",
  "key1": "3KBSwygjm5ksyDfGEc8BK6N87UnEfewVVcNyCGPgZbsNFyVAbM49kZKPMj4yZjYmBSamAcjd6UebHKZBjiBw7t2u",
  "key2": "3MWQboq36zr681Ntcg6MPdPLAyxw525nU6tjhktLYd1NYgNPPKimNvxCfR48qPByrBrVV4vkwAc8LYz21vUhgFyy",
  "key3": "468KMxXycRi6nazPFgnz9C62spdnA6fhZhgYcu7c5zik3cc41wUqg7y9yAkxPigt5eW88bvqvjxwzmTJZALdAxtk",
  "key4": "2bRSYjpNYk97ov7smek3JSVLz4X1F5iLpQiK1rLQzY1QUU13BaT8tMCom7DGfgqHVRRrPevt9S69K3LtvGbvkhJf",
  "key5": "2ioi5wU6xUidGATbUjQEXtF4BfsJ6XZgBJy1ntHtXkuECvGBNYaMxDDsgPxPTzjR3zvvyZZ3V5AUceXYXQ8TE5Xw",
  "key6": "4iXknQ2fHMRPq6h8652DWhZi8ca7Ep2iBhhqBufnUGT8FTymg3PwsdXUVwQ4rpzY1H333bco5rUHnoFmAWLmHhg8",
  "key7": "67QwWp81bKWcPD7hTT7LHbodJANqPSifwY1o9VnYyCSzxs3kqerrghn8ph9NVknkCeZpuii4v4882CAFgaffA79s",
  "key8": "5J9SMKcbR4kXsVMHT7NmqYAU86hjvddd1wCzv4eB8r3FqRAExXkgCcgT7dSWuAhZUGDbxjDZwEQHPUtML4dEDk2W",
  "key9": "3EM8Z7LevR6fuFnea8pdQxbhbGVJcKNqeKL3p2tNwSyFXzCw3aa4aUwJ3pDkQBpkUd84Qh292Dgo2Dgx1uTXJDow",
  "key10": "4nHpYb3hqRrFphTAYZeC2doTYNWZ4AzVR1GVHisvy7D7PshbtUzsxUdgqf1BcAXimZz3Z1Rr71U6c9BP2GvJHCM7",
  "key11": "vsGpDpuaXKXeRqu5A37DWD5ywiWEpw3XbdVRJBG9cur2LmUGxe5dDbTQ7uKJGwiRtkrZtMMiv3jtmKAp1F1MAAt",
  "key12": "4rNq6oQRuNvhxLD1PnEhkAVPt6HBCeMJTowPYpCLrXNJ2VY4KoCQLL3KkNfiBkR7A5jwePuFtvoHor676KWcRYoa",
  "key13": "2XrPsNo5xx3cdse11vogD6SUg2ckRGkCTkDCtcKDwERaGoQbAF9kRpALLFKiBUgBB6ozNNiRvRSzdpXuwSL77PFT",
  "key14": "3zGtUQQXbARg6F4vLnqBksdkKCcbWHtPkpv18hhPrvVV4ksrvCwo7BFak3S6TrLeQmd8dTxbxUkaSsa71npJomHR",
  "key15": "2AZG56FX4uYSjnNeAndaAMYpqLoCVu5RZY1RYLb8d668KCZmUJ5J7mJ3HbzPoE1kCy8mnwELLdVwR6cpKFA56AwT",
  "key16": "37TpmwotEQ3x5msyYqVyeXtMySgwHEuPCSfPPyPYveFhyFWiZrCsPjJw317VPgWrCpuUcJZSxvPkAsyPe36C244L",
  "key17": "4vg8nntkz4q1ANfxwD7gzwKUFXecAwwptKXEZHUmyv5iBFDxVcqT3x93cf5drKn5w6eZDrqqRoFGmiUDtA3HeqwS",
  "key18": "4oKDYhyGiUmHpXXL15nyA77ofZapm1gpfH7CDM9EJ3EKAcv4gfrieSfpuFhapeRWENc65VCZQHEUgWvo9zDzFuSm",
  "key19": "24R1knHcG9JSPxk5Yc1BS5iUfMTLDBBDZGP5LMZ8i8nTp6YnzvG3oGB1VuynQU17jHQrNSvDeDsaSzxhzNv3UMf6",
  "key20": "2VUtCoSYZg7JK2Q13HsMg4Vr3cTTS8SnKxygPDi9U3KQjrp8uwB3FpYz3RyBwkVq49TrYwzsAJedM6Ly4kZb5WEx",
  "key21": "tZjozg8WCjmf3bDUdpgehAigxqb3DzDYK2Tt91Nm85wAxK5GcUqZHLggm47whhqHSRKszPzJmFGwVR5WwUq7htu",
  "key22": "3kgmdeVhd5YnJmgETKju4tnvMFzUwx4v5joAiZCz7F1FAymLQAukTH3NrrwbcTw2PgepBFjZncPTFpMtr6mJPSaN",
  "key23": "3WGxERU2J161C5YRsVZNfoNZmzvbZQK5zsrz4aNGkmdKx97aV6xLS8ansaxMFdyQd4HTtBo7jNhZPW67vLNWfB6b",
  "key24": "5fPtc5wVD6KFJaM11nTPzTkBCMtMkvGVvk4s1SWxmwXys4dMBm4d3r4P5AuwWRSABofvsZm45kJb7wdxRYyw77Eg",
  "key25": "65LGbkhVVRXtsNfHw1LUT65tr89wqqKWbWRczDk1oBRJiEMbydNWP68sjBsaNTpRXZaBapgqEm9PgsqegtpiqGwj",
  "key26": "3Nandwz8f9A971jS7MwnSGyc5PHKf9J5TxN5xcHkiewFQDK7unRYcxRxeW8KTBcVwoRjg8SV3QVJRFg8e1pJQmKS",
  "key27": "3F2wAcaaV4inCSpnYrtgQJNt3ybNxQwz4EY7jk7n4FFv2GTkQKioLDrd4mCWPUkqR6L1aUXDxeDfrrrXRKntm1Rf",
  "key28": "3TLVZKdSWmGBHhebuwCEbLKo8BAgzhuwxDtwTgkP6ZTYJforY49fqYVJxgCdPC84zpZ5JzjF5M8k7sXb3YWWCT5N",
  "key29": "2WM5nhqofdZ4ogkHhDLZcnLVcgDPRgPnAPr3dGYs2NHywm2UANpYFU2yjadkHKZXM7WXjoxMRd7dhmcd7YuW4GfH",
  "key30": "2Zzcib3gLYjEDMQWGNCV3vL1qA5Fov7byk5uPwyLyc8i4x53Lnmef6eGL8opQmAhkcHwRHSJgi2uMX2H38DSHE6N",
  "key31": "5Ygzc1hAGt4bT5rEaG4qn6zZ8GNCF2PbRhUiNvMuCcwKM2H6eaFhUc4GwvbK9GMEDmumDHB6XZRM6trDGFEDWvTQ",
  "key32": "4xFeUpqufKWQF9PSr1hoXd9mnPkQG5dt5HUsZ7xGYi5QzTC6ACsLCPrFq8ENVeLzjZGVLmxJ1d4GdwnCK4hWmK3Z",
  "key33": "47s5Gnpjt59WofQf8YKWNBYmVKUxUwjXbVW4vw85M5puKC1MZ8KT7DDxPhHEgdSDsmTNkeePRPPWnQ5o2xiuabpV",
  "key34": "4A1LkCsCXr1AvqAjyFK3SMqWQnzHZMGLziLpyuT2fHEo1vrCwfY5UhiY4Qdqu23i8XJzdmgH8gsytH6XBwGsGaR2",
  "key35": "3aQZLWaGy9fEuV9jRsr2HfSzNB1CrVbX5iEhyHDtaL1PL9HWXc6gy5vGbDv8ANJyFr4NH5TadDSEhRjVTePMZQzR"
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
