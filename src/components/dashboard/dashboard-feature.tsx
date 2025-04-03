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
    "1skobpt95Dc7NEXu2Vvr1nEu12aXdftRcytbkZBLEJfBARq9HXUHUVSALASPhduiUZsCUmataweY9ujAxnodekr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWg7YXyc7Kki8b5K8RXPmGHrumoiswWiE7NCNJMJdJ31puTQYjcmeqJoHKqR7vBMgCHQoFD6t36BEc9AKv8Xs1K",
  "key1": "2QVuddch2TqPUbH4DUeZLJbX42QBg3sqaNPXHTGrDQYmNr5dTWBoTAuYyuyWUF97eChT5s7oiKjiB1YDSXZdZmbK",
  "key2": "2pxVt2VYNP9g5WL9QbN8hiPk1fY8Nu6KzmkX5HxDp92Cdb29mN2BgKY6G4y96Cp6Tj1DLVuHZiGMpoAxykJxVCLj",
  "key3": "3MduFvWuzPDYpJQBrTv9bEYLK6JhQuGjit8tyWmvq6dxUUEqFoLy3KHbk6hZnhM91e43hgAWEfXH27VE5GA51QXo",
  "key4": "4YpNGQq11ZSELXcuBsnyqjVfbV9bHS1et3jx8ctZj28DKSQn9RCy9NLiuUMpvMz5tmvFVsNxtweY6HTgKJnV1fiP",
  "key5": "5y9CG372gJSvqqVF7b5j16PV1YDtvFKvYARwgXqfF6ibNemb6w8CPzpAW3yywHEkzSBxYTmUEu3YBaXZbvZp2RAJ",
  "key6": "5pVdZXsh152TongJywmjgAyExVx3Ve69TwhVvCk9yVXvhUWr4uDn3fMprHVBqANchz6fPdqW8einLiwGsC8xwj7F",
  "key7": "381Z4xfWpiGShkDBTaaJS7hJ97uEaS1ZaicmpyYjf8vqWz5P5zx7vS2TkSKbCCPY6snxUgqjMgYem1f3Xvun5bfy",
  "key8": "3k2uv85nVzQ9MAS4QhfsSyQrme8vpY7Df8ccurKG7iKy5v8EAneKdujmWPR72ok1KNxKAf2Kwf6uPzyr3bREKMa8",
  "key9": "4Ra647BQ7sxjQhUNDEePpEaZR3LmELa7vSaDoUJX7y987sUdG6QySkjoX6Nq9wb9Mk7NfZEGE3ZbK8F1ezeZs74j",
  "key10": "xy5JocbG91fmVWixRQaRMa1jzWxmsAXYeE6dZGb8aJsVgLnNhKGMYusLMfnYXkp7bdKB9vQWtnt7MrMaaiwUeWN",
  "key11": "2fTEBPbn1SVMHaU7ApP8jMYDp5JGuL6aUHnouTGHtZxDPJsFEgTRywPsuMDPod9KSHezFjpWPJAzmp7TKYMngkw7",
  "key12": "ojcFrGLtwVSQ59hVyNqve11F8CwodPw5J3HSvpZyy9p6wxjnJP3bsUu7qcy6EW1VagcCTt29oHE79Mohv2Crdky",
  "key13": "3U3yuSipPNTAzcm4s2Fjs7oabchHMpn289iFQEYz2vVqHdKBjd9NsYh8TohXDKd7UVdKEQnAXZ4NWsht2EDHqNE2",
  "key14": "crmsSchjbC5VafCbZnyMcvp6vmCdo8vJUEcUkP74RMQfWmYTc5ESM4vwFCpbYZgdxf9y28cEErLZi77NKqLHcdf",
  "key15": "3ShtGzRYhtFSpzDq2YNnJUjYFmFCBPUoF5H9vnHejmEMngvunLSjYxvz7ccMDqutQCh2zKZg3AQ2Wct5WtJpn88P",
  "key16": "3QXC8fY1uaBYQY7QcK5EANyMVjUV5uJ82AWfmJ1GB8AcAq7iEqqdW1HmLuNuAY6KL3j8Ji9Ba6nLbjddccaw1QDa",
  "key17": "5Yk9FopWPTce1z6bmzh9y8vARK3M29CFZU8AootepsNCdn6Jx5XVGfarBPhAgv7RnWC3PFZTNL4nYoXkpDUZBKuX",
  "key18": "4oYeNhMpBrpyDA4eHGprrST7wNcfFkhQY4Z1s1v642WZ3ZstCTMrrmGxFcGY35arhSUmk4M8hfyV22ukFk2eYGBC",
  "key19": "3EHUTYrQc1p1u1KM5rgeq9MXUh5kKomYhADCHjd3kNbXVBYzmX7PMo6T7cEzo4LvGsKUhyQH789zodPt3uVGM4xW",
  "key20": "4LDHEqTz7tTWkt3Wq6EsqBmF7kMV1dir48Nu8nMwxentqSRnyW59p3horVsyX3hHkFGjMdaD8ie8ZA2r2CLyn2mx",
  "key21": "4zVX4aMRdDKAipVXvvVW7mxTJhNj8EA8jLNTADXsYkTzWfREX64x5CWXiUS2PbS8SYPShZsiXjCzY8W6U66v2aYS",
  "key22": "4uyoXS74oJVcdDpf9bErMMmuDVLyNKY7NpVLMedjttX9F1N4wk5FFKNwWS5Hf59iDbpubFpb1gmK3p7G2rLgqbvd",
  "key23": "3YqvLdRPey9g4vCp83KvKaYLKRK5aoTMCp7XR9cTEU7uauwpjNgQ38CVDU5gzGeP2PuckUrdgDjndAPgH9YSWApx",
  "key24": "4LuoGqqydEYwjGvJCUFg8iDvAkRCUtfvVTMXzKZKeyZVnGFk45XECozGrpnn2p2LxBfUPppqQBdHQDngicP97Aaj",
  "key25": "4WDNSMsgnfg8udSZ1wo8psc4pSW5fEiYtY9WBUi69s5BT8whyaPYL4pMBpvrH8dfNnGis5Ld6dTBFft6h5377Nju",
  "key26": "3LW77MdQCNaskETDzSMP6vkYd92ndsDkxFkRBSqdBiEf8kh1hLGwfVXed9h3jeD5qrRbuipknKeZJciVdZJsYaG",
  "key27": "6vm16RSan4AH4qSPBkabJrqsPhhXTqM2m7eACM7p5HuoMWExnmzwJqkHh3WkmPw3wqq3TYPiQTadk2DFhamFFtE"
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
