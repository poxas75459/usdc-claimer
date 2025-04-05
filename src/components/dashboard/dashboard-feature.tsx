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
    "4kJ9QYsG2hsHraPkuvGbqFNBTMeKJ9bU8vjP3nZirGTkTSpwJevuZQurkG4YdxeZKTfuXfx5Ug57suTWBvaQV2Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXns1Zzx3x8v4AescKJfwFy5adyw4Etr1KEQkAvZYgeUV13vtfFUUfXKcNqqP816eKjTNovxj75Ez7t5GpEZd4G",
  "key1": "3hidtahdQkHa1RZcdyM3tkf1Xk8VAqLeKcEcuq2QsTDcsX2H2TA71i2fJxEkUbw54GNX6HjdGUghBGjSpPEGtUn4",
  "key2": "4oDwxMfDep9JcFY5BzKLy2QxdzdUf3T9163DmstLywiXEnjKWm4DTmbwcpmq6UtiEqVPkYmckRbHet7uZn7sZouz",
  "key3": "4YcEfVVNdzL4tbDYHHBQYCDwzwwi5Gx62y9jHrEq6xj5Hykuz5UnoCLkzjWXgZhgVL9BcS8NULnRrKrbxTouhfPq",
  "key4": "2y8jUnq6giyGiuNodq8yTfStwBqywV4nGnJbMQPVhpCMJ6vBAta5QJryYxb1M51Kx14js7j3pvD9w2PyJh9MTnmg",
  "key5": "4QqeCwivSBXX8QUh9bdY5df9Qhvir5pQBg1Bvud4t4kEQUxPsKAbj9UVNxk8dj336c7VGrdTwCAByfqZvzDR7DXv",
  "key6": "5TNaL4UP3SupGQeaLE7Mh8jSJHETACWySqyWMtAToa6CwKageVb82QwmT49WiNRJz9HbvP2jnXWi26JzxCejVAxp",
  "key7": "PA3jb57DN5yNk4MW88qCzjKUpJ1pFsG6KBPtxo5z8wgWkK3DZkq8x6cChgwAsT4Gi8YJfbWdXe635fwY6LAJd2s",
  "key8": "5wK32fctta2gVw5SWAkPoPDXDjfEKPrvK1gyqRW8mQowRUEJ1qhaSDPgE7f96X1KYrfheuwEoFeFbBAiXedAhQMx",
  "key9": "3TYnGuzv5hu4sk5vKRn6jUnBjpHG812sGfFreaA75ogB2XMEpQNphDAJt9x1LwrLNZ1yBfJ7765KZZQGpK16Zq9m",
  "key10": "5d3hTtLBpYpgdvgn6siJ6baZJbTSCFpASLhBQ3tnfGRZvSv67HUAJp97BSrYgNZvLRM31ocG5v3aJw551c3i5Se2",
  "key11": "3AXMyoExxnEREHrTZokuhnjFYMfwzJJcdUQuXGhag6ibv48F88x2dDbLS3NEDWaJafS43xoUWvwByLueAQrDae2B",
  "key12": "hEZPP49r2Vp23vnyn8A4twarKqw624P3pyK8sCCyQynGfpBrPmz4TfFrjQaqhzUJpT9FX2jXpoAsiAL4JiSeyPc",
  "key13": "3ptnxcpCroAG8n8RtiASGKLuZ56vjMASDbcV2xf5q3QuPAxvmgDCj6QFbGcZ2PuqrNa4s4UHBedBoFjfYCmXv6Wn",
  "key14": "2WbXCUxaAJ2GXgtFAvPxo7c7dA13LS9M58geCaw3fACbnbkcQJxrjfgJAxAshWwUB86HKHPjSSQC9VtEVXt63zuo",
  "key15": "3NgoGDXmRbDkZVUgsBqiUWfDTXRL2doWgfMdy3hzZeTs8X9t9BWMRmRdU4jEPnu3xmSarBmWMyA8jeEXzLrQdwtJ",
  "key16": "4c8uywEPN72ckbXt3zwbE2AkR25rHiyn3dcFLfesJ1yGaJy4UzoeETtoskvtkj4AQXykbpsywNLBFP17J4bYjBNC",
  "key17": "2QXMYG9eN62raBpyXgQHfZTSb87hsQy3g4wqNuJGWfk2cHFUSipZo26np99fPY3VnLCuJwhVrnBRpcL3zZHjoPJC",
  "key18": "2fVumMsDxrF496scwcgzJkmLc6Hqszrme4DAFSLSqHwkyacfn3MkUWNCVjeqpyCCsDKemVrdb1fToZUUZuiWgEpz",
  "key19": "vbQSxQET6ocawZ3q5BUC22qz5YUjKeT6cndz1we4reHvoZejsjfvVX796NbkbVasLPSxWPvc59h1TS9xG7FSd2e",
  "key20": "2VPjATEzJr7sDtV4PnYV5S6xDCzUwz7HPWQaVYbPncYkeb5NbKwyYUEk3LZC6ivCMPQWRdkh7tjV5APadLSq7sPv",
  "key21": "3WjvNUYgmBT7iDwNLNtQp7AUpxFyk3pEXoaEnScFwQYdviPTF5MzMmir9FoTgMzdYgMeN8kjuUaFEwFXLWwPiZ1F",
  "key22": "5NxCtX2vu6GfX6aEHzvKiKwofry2GKFbzpuBFpKDaCoF3YHYohrSMxYpmFPDo2ibGdW22RJHiaQF2LjPEU5zvhBN",
  "key23": "35ze9hK6YjqkK4RLK3TH6M2s2f6c1L5R6HHLpbN2CDj6jvZREoTZ1wacjH6nAWedQNJ8PQBvYoTiuBGwndLKagyH",
  "key24": "5wrmPZdce3gbRkfs5mdsFcsr52pZa9yfQB8XRaZG5AcgdoenxgY3J4HbVU2C9iHojNFJXEAGVfFBZ2ogYxfs2phH",
  "key25": "4UyZqVqTFdKcPm3eYSErdD6q9qusqUmXbLED2qEWL5TjdHidUpkwSNLsogmmH7qVUXUDmEtteCn2dycaF474ReW",
  "key26": "2gs6GXfrYw79oSc5B9fDTi1B4HJWvVQuxQN2niqGuVE2SQLx4PgW3NNdAsxknnbs5KRRCXgUayCway3Tp1audo9w",
  "key27": "63RFRYr2FgaheC31YkiiXfAXUpfamXiTw6NUkWwm1D8uBzkcZGqs6C114CfYu2b6JCoPAD5yJ7VAqtxj7kpd6JpV",
  "key28": "4e3g6CkKEcmoxAJQB8DSBdxuVeU1YMFC4dNq3D99xXNigQprD1T6oeMcfCcyftXbWR6kThBmGhP5FHK7d1WGqfxV",
  "key29": "DHvRM7FeBzZHnuRcEQVocJZucP5XZ9GkT4ghMCwKXGEoQwVWhNj2M4zNaJUFhpyF8ZcL2BmzuP3cyjkottRwdku",
  "key30": "3RbV6KhZtaz52abBbbevBR4uMMPAYFQ4Ka1oyae87cGNmKCshw6a6LjXUTYQNGL2CykS7VC6xK9g2taYAHQE2N2y",
  "key31": "3hTA1dJ84b23CBabznvGLayQTYGT98TfoPTcxb2Regt9erBixok6zNosubjVM9pyhi2TP9MHCaHSocKug21PhxnM",
  "key32": "Mj9BCBjSX6hhiZHwFJbDx5tXtUKNP9J2rssZQCsodwaMCPsHjgjihtfCQi3qKkpwup9GE647yzUKT9jseGkpYw9",
  "key33": "2kPZmsNvEL4TZ7DxLMmpGWKu3nqANCaXVDiqGPQxkT847RLPrf2zMgSPCYhMLhePrwqP8WXXupQZFkQwQEpQCmxw",
  "key34": "55HCzXaQc66rcJfRBoA2CkgcjSRv9q7oWqW6F1RPHxRCcoF8PMKWeVEpMPNwcAEkejhgd87m81bUbyUwzFGPSCyh",
  "key35": "8FxJyZqE1nynSVDYccoWjRCZm2RaNoGLxCJwQE6VKet5z6988jmZJuoSkS6RBB8RKT85NSMWoPdoUadhcFbBsp5",
  "key36": "fztgVM1nzk23RK7ZQhZKjrpWCXrFakMJxNnKB8E7Jsn5FQXPy2aQfyBb3dSmbhTncf3SLLKg31ZvYEizq67SAAV",
  "key37": "dzTyLc1ws4Lk8qd86wGExLn3Vq3nnHStra25XswGt6XG3WAVjMvjyWwg3rrBeBmV4fHTv4ewkj7VrSATknW51Dk",
  "key38": "4ZW7BnJmCWnaPb2NVmbXFiYcVgwHAyq1EPDA1hek7XwF42cW8hCtreZKRnX9emG1Q7noYRNToheZAyNwZppMeaUw",
  "key39": "eAuv1SEotd7GwfQuWyV7wbwSN98LHwYhoJP2aX8vW6bjv9zWK4fNy6UPwvNwbGQYMy6wooq9rjcc4Dx4UJqukMA"
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
