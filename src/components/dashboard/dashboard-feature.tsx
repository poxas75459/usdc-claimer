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
    "28KPWwiXi6qpaM7DMf3DN5j9AEdHe9XmVvUWRFwJ9XRB7prMC6SwxJbHN2PP5yjUZRm2aZNFym1oPc1D7tAVngQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52z4LWpGF51ZcSTyKsFp9mkdygEtNtvp9WYoHC6LHQkhpbMU9C8fS5kca7Y7Zw91XVw6bXw5rCZGWftYpu82vsQt",
  "key1": "2UWtXQFB4KHLsk5BX2pAKtGUyF1B1vNv5PL9cFzdmmNL8cKptyih2RD5xN9h7mjsfTobTMafPjNT7XsxGmA655E5",
  "key2": "6o8FkkGcHLNgm52hnoCAGFktxbrGLK6vq6VMVT8AP8Kq9gaq6GqzAoRPRDk63DmCpWEip2QoFNXLAtKrt4m5Eit",
  "key3": "3HcfxNeDRDWJ7J6S5e3D4zbnVEcMGGfWUe9qupLM3p6Z2nzaL7eStft2zbLj4Qtwzbn7p7L4yGBNKekx2Np6gKMX",
  "key4": "2FA7hZUGYYXWUUp856sJFtwK49erhcB3wWqdhVoLg7W7d4HvY1Ps7gPrxTkg2sK92b8CV7EYrAs3mtHbBcgkkn8J",
  "key5": "f5BEhcKAqVDpwkQFuQoTXyKgvCewrNuxhMjuTgxTfLSkwGioAPdAWb1Pb8NP9TgucDAgmNYy1TrZJn2AzXbsKX9",
  "key6": "u85BSbNdsKPASyVQwXeDW3Ycy7maFHDjKF27XC4E3YWwxdzRfsaQbyK6ro39EVY2sh5ast4SwQKeYGcDf3HoYLB",
  "key7": "5HxxJaqqkBM6F7gQHnvVgQcRT4KZG8YMTbtJUuaRaFyaecWUCLaVqfbapyWGswX1wvhzK2wfUcZnyxircJAzsf8W",
  "key8": "2hRBUpYxs6jWaLaK3R2NFxeMvPGanrKzkgNteoyC59EVyPKg9tqMUvDChBJUy9RLFxCmsFVjuDyg25UYnnk9PyVs",
  "key9": "5QTDrrFETm16qSKUAM9b5ri94DzDvkoxJinZFoMttbLj58Vh56BQUVjXRVoQMM6PydkcCKryT9z9jy8acCnHMj2m",
  "key10": "5mTBZSQ9Mzk8F1XaZh62UsudSxNAj4fSi159i6YP3d2oBgPb4h7bekK7kCbMhaVsi3dgAmAWk4HgjxA5HYNRwpPh",
  "key11": "5aqntC2EysHzh5m6B9K4q6pfB1usbyNxPQvrnPDXCRt7dioxULuZKMBX89RduwApgHr933wpKS6cZy9N7sNrrJyF",
  "key12": "bfx4bLxwt9ivvjh2Y2FRsEeQbfdbu7TMVgPfnLK1Mvyd7fDvbk9CgsStkqX8TsiKQkYUjMQZQrMjexqPVziafB3",
  "key13": "3TEEz1bv9wUYbmScD3tUv92Q7pFiZCgYDMQZnfdCjVkYNG4E3RE8SefJANj4DWm2Y8L5r4eEpaX7uj9mJxUK4mkK",
  "key14": "3UVXM9E2SYjvHcJoznLgxwT8h5xSUxSZjoZJRZ89vDPT4niiUx5Xcf3zefqW3BE4P1Djz3ngbvKSi5iiC9kKdzbF",
  "key15": "4GgZcBp9GPe3p77dLfEyFp4LkFa3tCG9Dpd9tmefvNyFZFDYnxEiHtkUH5VcYqQyYT3fBCv3DFGmr1m2bRsih7ud",
  "key16": "2WPqj8iFYypTyJiB8EW6UJRZc3FHyjCygL8AkEw7raPZ4LQuPgK4UJKdmVoCDLVDYmuxcoC64k7duCGNdgpQE6md",
  "key17": "5xyeBpSpVCa6L8FjNYzRQHaznjLLGnR92TjQVUNNy6DCx3EQkCccRNGqV1hjv1vXzNX6XPaT5xikf7tCHAGjupyv",
  "key18": "67feX2BdLLm5hEjcUL8sgTDeYp3aUpJuSaEN2wjJ9UNDXKUPdhbphH236syputLtxWCCefRW5qCs8GYiizTyfjf",
  "key19": "ukB4J4jfi2TavMtUbAdTyho7MNuCCRiQzWE1HNCBVqsNB4hu1FcTtcCXzzsc1iutgvBWxr9MYse3vgciLEfkdcU",
  "key20": "d2phR1S5XaYX1ZRSp3qfMCECj6bWFTzjwBsEvWKxdjgF3SpzqR5aW7Ebosb9v8EHfjdHSXdaYAjkHoU7hjSR4v3",
  "key21": "3Bm3WvC7CVJ2SrGbtYEBhNBRERstwXruNBWnTYTYLW6ZNLL7hQmRd3Zw61HzJB7v9W3y6drp2QD6C837tpJ5928C",
  "key22": "58SzSz8BtmMKnpvJq8JRqZy5vqYbb1ZWWAR4tKmFM1bgZ3P1BhTstWNkGYLJVN3MYyBYao6B39tv3pDCPtqpugC9",
  "key23": "2XUjrZXcf8KThZSDxgGiJE4KwbcLaN7RGNfpti9vrSZK6g8JsdjpGpDQsGH1U31qgLLWq7LVCNt9Hkyf496wCvHt",
  "key24": "5KeX6RZoJdQM9EkN2az2kcndJsqDEWpNp39o2Ew8FWYNdZiU6kghoM75SqSbNdn5F5RBe1XZdkkYTZKfMJE8LxVm",
  "key25": "2sDxA2m6zVpt4bJiQfPDuSYofPVU8Qs4k7jtBrWoBMvZ54KoS5eh2hT6gmcmqou1f5MZ3EaFmoW9aoLBYHaNXTTN",
  "key26": "5hLuqchf91uYXgFTE7KB7zTS8JRNGaBX7uphLypvW3TtYyAUKEHhXNNcAxZW7uM16bY3pEHcmPDTCnhy4AehAPJq",
  "key27": "4EFzJKRtFcbMoXqXdnTUKjiPRNRvjiqZy4jpM8oMcxCWAjR1ekqnYsWewWtt6UZZUy2V6hhytKzDk5c31EXLNrtE",
  "key28": "27RumZuUFw2oSy8Rsm3WtAJEaVezkp687mxL2aVYugYdi2ou8qHmBMBu7TSenbpLBNmL3gFioZaHKa11DHYWXcEH",
  "key29": "4o7xRapJ9w9QiXArunNtPLRSb18pJzbCssa9YT8qKkzovtQveXiuqQMwBdH2aBPhv91XJJ5sQDd1gc52bEJ3ZQsK",
  "key30": "3mqZBLrCpVk2gKtebBajpTN6kPpBt89BhKmEWFfw59P7FVcYokVkMEykeuReRwfboRDkj7GYjF297qSjBBCjFogQ",
  "key31": "65azb5noqkoaRrg8smeQziPrFZr2HsJ4GyDADLMswx1AxvMEzfntsHXU8XJrABiCku4bfbJFB73sFrm1NjDngako"
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
