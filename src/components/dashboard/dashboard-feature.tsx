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
    "5RaKsfJa5WXs3TxD2LPuhkGFGvgjR1p8J7UBeE5Ni6e5zaYcQGJ5vPfBpks6gSJjsn3JtoWAAbUN5uEaXNFpxfiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9uo6GAcWD9e2VzzHasPR7nBeSe5AKrQNLiCfaSewmGBnpGLsxd11XiuUw3H7P4736fwAQgtaYuEiBrCJUX1hGJv",
  "key1": "2thsjRVrqVVmZS7nCXiLW8TBNPzfMk4ri8SFGPjHJLJpbS7rcz7BhmgHdzZFzieK4NCMDtnUcyHAKsjeMJiHMRAH",
  "key2": "VXaVphYCRFTqaveaRbVu1sKP2YspE4Z7GbW4jcB6muy6qYhXScEJkdgpZRdUrkuChKH2kEQPrDp62WdP5JJ84PU",
  "key3": "5LuezzhvDzJjrWMFuKaYzihdNRQ6YjHbnmAF6R8QaQFsBPT76UjVTHXnwQUp9rM5vJdL5kFPd8CKhR4eeurw7Qg7",
  "key4": "2DsZKjo28LiXpY2rW6AJuiMdbntz5GkQxM2ggHfcYLQLMHys5Uf33J3owkKGo3Se41bYF1YgpJMDXvbv2eshyEHi",
  "key5": "3gKadaLRXrTtdobvF89B9uQGSuXwXGGmh4ogvrh8TH8CGkoL94yEx6gBdHNoL7fXjaLhGnZeB5yNV2HyGzYtuPv7",
  "key6": "W7GorgutaoX2keaMHhNDTHqaFt6ok61sSmBLEqW4v1obsUHHoD3tzK5AqwdXv1gK8RjLEaS45xfUzHogsrSjZcz",
  "key7": "42JwfuQVkL4N9uZ5ARMQJYQx4GMcCfWAxnXJMtpqaJqhV4uKSVYcVQ3JZkfn7HbFd75LtUBUh7NdRAnD5tgHLLCP",
  "key8": "5ohCd3eLzzXihDyhDriy1wjfxVYYjoQ8rhyfQisf6nP3SMXL5DMNLEkYPFjV6HsuqgBU6MmGP4WsXdSgHmy1mEGD",
  "key9": "5PRjWhWRmBYFiNMeNByY2ufo9BWzya26ikR9anr1Rx1zh2FyaFormb6cSx254Bu2gVBviVejhwmD1UBuicxH1UYR",
  "key10": "4vyGTDF9s43A2M987xonkzF3KdQ34JQypnWJ9Er7cmBvbU5jy4oLXgHWccbjy4DHP4VKpAg8Qftg54fL1TH7up5Y",
  "key11": "4hGucnEzHwudhBe1eamwRi3i9bE9AfCNbqjZVfMXPqqXZbhCGjNHLHXbQV1QCBYqewumyTV6Yh838HvsjM3gE6PX",
  "key12": "2S48FLLT2x1L5fduFnLtZQuC4ewgWASXQ3xT6577VZmW6ARhKiUEyhmdvTbNBbCm3Hm1VMy4RDPE5C1ex3ZnaYz9",
  "key13": "3Zapv6HzGLhf1yYg7Rwkfg5Rcb5VnCdLeoUVp3sKa5tQa7p1o6abq6eyNHRwFUNtTdTDdmdxJtMH8tYmpEMWZKF7",
  "key14": "2TUS14Ms5D5DiSYTKU4fTW4jry3ZoRHp9K2vUGDR8sgTr3u6EcLhfG6WujjrfvUpRxp44gfYosqMP8ewiww1Ue2X",
  "key15": "31SCF3jk1ehW6DZ9DCX5kpK2UvG2E3C6rh6G4fzEZXM5fcoeHP2yEJ2NZkVRL7jJMM3WNoLhuAZoj4KMcVqELgH5",
  "key16": "4KwnbQU3QTMCPYYPgvBU68DoGDFsG2m6yYdPDmjXieH6r1s6wHptY1upJcTVbT71LL4Nu62kTYdNiLaiScKMkP1h",
  "key17": "3UPaFj7nMHWRjYpbFQoDEhVStPdmgPv1DAPGKknmpkdNTFv36UUnYVGxL4SRkVwkvZoA8Q92zciBtsUR31X4RDYV",
  "key18": "4XhYeMnpdYi7qWcUmm5Y8bjwXJckij9CJw6gTjqoaUxMLcNh7X4bMuy7sidcoafnuNZcc21yEX3EJvWG9V2k5ori",
  "key19": "ht6nskLpvTkERdNXez9uaSfmK7EebJhBLL8PKntUTiKZEW8HAknxBeVC5UdjcApzvbgR7RHk99upiJ1nwCkb21g",
  "key20": "4NsBgyNgaVJS9ziHz8N9cr4E9DMoUbUoqXbAz4WghNJLDxYNMC915VFW96z4pSx2Gj1RxtKRaSCHtjBGk82riDRW",
  "key21": "2g6BZ7Xuxxf7nY6E9uqYhwmKmnYkghBsgZVKEpoNu9RkZkcCGGcWGAK7ipYwKVz6iqw5RpyfQXf93KLnRwEe5Aa4",
  "key22": "29buKdATh7BcEjixmLCbGDKGBERV61QKUVND8yg43KYLCsadouUNnd1F49dfmYeGjEavPpLLG8Ea9aYsFz4pEJhe",
  "key23": "5CyZQCTMdie9B59tRHfkFYt7zop43jnQT5LrV1NFMNECNNJxREXxfx2MwTgKcp5G3EUiFvxNkG5jPhp1nkW8ifzP",
  "key24": "4EEXUmjLqea6CXxgeM6DC8Q1sU1Q69zB4c92trSGAK5JWympjucMZStF5KKD4LNydPS5aYVbWKm4rT6NXkW3PhaG",
  "key25": "FkeEP16iRJY4FLL2DTyQnsUnazSUFDe59U4T5Yun179AJydUKuedD1idrER6YNcT79j73SDFb7HcGcHkaizujKK",
  "key26": "5F7w48HF93pJVauzr52QfmmmJnKGMm1YymMQmZncEpa3nYkWnzpCqBwPj6v9mj8PJgy9DR4MRvSyuYSe5Fna17px",
  "key27": "Wd4VtJguRV1JXzFvBRwAEDmiEJSHAjphxJeFNYtFzaNWt2siej5pVx47MwfA1sTbUX8dvqpJdr7YVyZgeBQxRsY",
  "key28": "Gy4sZY4jXHVQT8wSEdWZEJdbXivHQ2FPaZecKafYZD5kF4Pfot9JjAmj3GDtrh6gW96mCgeeuSkVGuHn3tMPrsK",
  "key29": "4pv5YmumFxzaXdyE1FSqqAk3fMjBGWTFC1pEuTXbQ29wWjnjsXDPNhDzkjRJf9iNxvk4RSr3v2sN11sc89DTMmwQ",
  "key30": "5hXAozSCUVkwYNRYeT9NB4dSuz7tEaipD5P7JjY4sBXSCeLogAnGDBEMK5ryZBkCnFvLXf8yJ2vZizzBUHRsqzp"
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
