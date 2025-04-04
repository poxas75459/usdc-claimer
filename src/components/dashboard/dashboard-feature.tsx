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
    "3JkKfPx2vLBfsRwhVPvQugWRXF8FNnZxWiNmJqoF7TUn48ySZca2EkiUQdjwXhLaxf7XUtkT2tJdMCRLcDeUcyDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVvWP3aNe12Siz9iDWX2j4Nja5YTKjsDhqr3FiEd5oMtmFXSQeKiuah8oTUHeZYULEcxh2TgURJXh5XJVKFWoLG",
  "key1": "5MF4k2kLjpRyd5PZzwC7cd96xNEmaB8vcL9UN6ui6UPMum3jWPUYSkFJE6nuLWnCe3oXy81juptPA7adSQEy2447",
  "key2": "5NHV2TYy6CfpAnT5DpvWsrzdFArp28kVK1VcR8cxk4aTYBFWtcpM16meAYTrCZPqEURiVZn6Aty32521xhdMvxAb",
  "key3": "JrJq5i2DAnoKq5Nz1paoQAdXpPdy6knZN2jdnigUfsvH6zar6jcjhKGKi6qLUCwGuaWuSf1JVkWhoBkq84Ygyyw",
  "key4": "5PZDfBHrcMh4iG9mz31Qyt7kaFe6nF8Lq6PNiFHV9gwHF6niApPAUt5vCxUTEwT5dN6dAyoHqrRS18GRYQ9cktvS",
  "key5": "4cSviRV7wDBSAwZCySHUu9EcypJzumMuUcepFnPD8ZRDYEUhk5bS6sG2NMDvxahAtt53zZSNVnwkgDhNHuqiDWDr",
  "key6": "2eNhkAJ2hugyPSiPWwPEEenpGGDkoYohBBr8SoVqhujeBGfwLHTF6dYpaEryUCf3HxFVjmQgotzJa6fV4EcCyvvx",
  "key7": "xTdTJS4fSLUxSrNpd4cjzUZunerhEGiYZd6MhCBxkTVyzrpYuYY3FLGL58MJnZrq3HMPTZ2rQhgANGCRkZLosFG",
  "key8": "25LmKZb6Lz1qF6JnQNn2uPPQS5M25AvjpQJWVT5BZVayTTs3QAucLj27HNcjX3rKLAEPp77mtqg4pTauG19Xat3V",
  "key9": "5vLqrLw5tx5KHLe7iqNDuNnQQ8EFfEbdxp51XRYeBtimrEofs1FZTVZ839oe1Zyu7AnwNcWQ2Xfv88PUgQWM376B",
  "key10": "4DAqZgsHvW9dcP1Y3ie6UfZLPYQEPsHjnazJwSya2vWBKjEUp3SGUipuzbWYwfte3fMXZeogn4nrwN5nid8LS4Dg",
  "key11": "2mwb5tbFte4a679K8a9EMGNUqAVq5napoUjQWYQZVgr8i7phDUjK2zSCaCSb6DMeMvc7e7Q4Vt1M3Jp5Lhvs8Pz2",
  "key12": "5xx4yhguCt6KLYm3ZSrhzr598HPc2w6QRVTbSB5oWU3vNccwnebKEdB9j7sB5sezekhYkStreVP9XZwsTNkBQsqq",
  "key13": "5C3mXMYHYCgVo2CU1mU44K4PtxZHbKd7XfTEsjztmGFVpo7oFshb6U4W5nHT65KCqA35icky4WAGVNxVSu2YqbMd",
  "key14": "2cyeASNQnaXPNy2bNMknAHyfT31CMDKxbVqnXY8wFhqoH5YdM9FJgd3eLGjkXFV2HnmjrK6Qejt5LvRyjuX8FRaA",
  "key15": "3G1tL1kmokvgz2uSdUyZw7HPpeJAPwhAu3LTYHmryudSVuSCJ6LEKTZxuQZfCAwAdFvaJpuMrdCFkA1K7FrZKUgv",
  "key16": "5SKM9EwiB2wXuyDXTp11gNtgHRnaTuSYk826V3AU29t9TajQuA4UkdD7fim6uJwgKWMvbeogtbYJyCVyHDiAk9E6",
  "key17": "CgJSS2jMVEHfUGqvjsNwGYWAyhyXJQRA2mLc6AGTXxBzZKd7cQ8VZx3XiVZys4ebfkLDTyKzRT1GydbvJgFzqze",
  "key18": "3fdF7n4iN3D8GNHExVyD7KMJJSdQSGyJbDiaPusGMD7QsBieCK5Km1dWA58TcmLYK7Ytx62TAJWpBFGb9jJTufUc",
  "key19": "54sRa49K7ab1j8HGDktvQxTMrFo2KfQnQb355cqfGQPYU4FgPBmzBv4FanKX2q9Ke2yqzqJjQpZ62fYNcrQPLK8C",
  "key20": "3U8dFZHgKKEFXsazAzakYWijSjBUYqrgDKZ6DUwYpk6SL6shgZV9NEu8qFvE9KQYKSgkAupqasVSectVSzPoweTA",
  "key21": "2iDtVsySkRDKPHH3QmQZYqvon7vFx9T1CFqsekyVJNDS8Wn477DXo7EFivyREj8QCDaTgBRuhXLFD4xy2SQDzVY9",
  "key22": "ehhLTRDu2MZFh9fs4Emcn4xJddcQQboy3F9yaoFFT285q7htgjUindG9dhWh2grcZCxYkawXAMk9njWwh1voEGB",
  "key23": "5QAofdmUhUdgRgPnEPkFfnHvJTnAdxX9DM3MX7fzv2TURYnfoC1kqA8GMk9fUxH3VPyzBWALRutpSp36YhH235r1",
  "key24": "9xuuBdnww4LYSDp1qmgbG9jieeYUYXw9uh9F7TKdANWEeLbaggyYJWG6pAwqo36cD4V2XXiFmLHShbTa78hkpsy",
  "key25": "3Jb8dobvEnRBE3LfRuquyWA3svN6yaB7rHz2umpuWZjMQUKS6Nz3hKjAwRxRx9o87dCBCfG3vu6QZteQfCF71GpL"
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
