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
    "2saRxXdwyKz8zbpE6dh6VciPAoEhxA7E4qtkXqPHRpRSb7kqw9G5z2svbjM6q2PPEQEZKuJr5v5ormTXWh9qZTjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaNG7RZyHXHRfQthMibnw3MEg5XSWSqHqVa5pMSSXNYr3cDHwRU4npfi4JN8Mjv3WGZyribfaA1dgcahqcgGH2N",
  "key1": "5z67dKHMBa3Lx94f8jdwa9u4VCfCUPwcGMwcWoZf3xD5zDvNhtTN9W2VRPQ27jL5s2R17Pw37vSUW4xBBB86mCNc",
  "key2": "3ptqSWw4ubRGKF5AFcZRDnnsS4syqStS5EJehx95bZGubd2zhuKgSvXMvYK6LGwa9PmmNc2ctNeozVxZAb9aXUzb",
  "key3": "5dZHGAEG8nsSZPzuWQXy2o6HG2kzsLzZqWBeYGLoGCEwmCjjeFKCJcxDEat6TsEXVD56cZPcHKVKxgzMTtWrYgxV",
  "key4": "2MGzekUvpS9KBj8GhaChsc2us1JHFZY3J5fUXcjXPtttHYa9iuBjHTLxK1s9YwLPSdHL3AmEpkk5c2HqRhKCLRQo",
  "key5": "4QqvipgZsYYJGtbjTYWjEu99bn6gS8puoLSfXZurmGS2qbYFudPF1XDGETHf1Jj38dwPbgWAn9z8YnkjruxL9AcR",
  "key6": "2SehTxbYswYjbYk1KweiJfVghsuDGnSDuS7mLwvvw3h9jfc63dP4e7CTCee58PW9Ze19YjkL1su846UEoPKKE1xg",
  "key7": "4PU7gqCr2K7ovJ65DAHPA4EuSM16r3WhY4A5bMzw6xubcUXkQEL9gaeyNTuWAhtPi4a7khiZJkViSTFCcsTwusfN",
  "key8": "4QV6orrbaVZQN7wBQJXWPwq7mF4U5RFbjXjUe92v2QkUrfqLBLCUvDDiSdzciiLV8E341jV1uaXZxgx7dzDAYMLF",
  "key9": "5ZDTtaKPvfDM2yvKA8rr5u1kB1e6n25y2qrHTDGVUPUtqMNjnjzdtuLqRfPSoNRFQZHLwJz8RWSPKo6Daf49SwS3",
  "key10": "4bXCLwdryTHXPcf5xmLc2pCsgC3PV6M6mt22azLyeCgk8k4RSe7DkiudjsLhdEyCZbsYy35nsNZC5SkCSiMDB3Ud",
  "key11": "4HyzEJrc76vnLo1ocbUfLXoNFFTzf1MBK7kVnepxBxyBih52YkcWyHwh8at68gUyNFPARW9ft4HFaR17J4hxw5Lr",
  "key12": "35CcuRg9RLKYcZSrXAgMBqY7KFeTyNTyeruiBw7zbdESTL7Utdy4xQzApHL3wC8Zbt71jy1Li1eujJ9uJMFRmQNm",
  "key13": "2H8b8caG8jSym2pRbnuuZukbsmPdsh9F4cZa9UnMBMtV7KVV4ZzH1bjU2avf37bgJJuYZVysPY7Jq7UvMHyBiEs3",
  "key14": "5AU1GKT6pjWjxmZt7DcbuyNDeFR9WFmnp4U4DBuMjq7uFwYB8gEDGKHi6gScSoh9hM4k6QQ1rBj1WMzEMe6EBNEq",
  "key15": "5jwfRjB6kpN5gWgLvPrhmMvX2jo42k52r5zr2pcYmR2TeZKbQB47QLaY5Y44ej5RK2gxGS4hgiVG9NmBrraPCdSZ",
  "key16": "35p5FMaN99Kpo6EoGYjCD6NudbPveaGPbPBVmafGySLbM5AuNLimqjDEoddxPgPvyiGHz264yQUrUZyQQvb26F4X",
  "key17": "53zVAhgyVPoxLCYUs2EgJEhGq8bLCDzQUMwAF6UQWzEkHga7MwHQfyfS8s5YLq3HpMw779SpPvFv8x1oUz7iCNfm",
  "key18": "5x3Kf8LTNWf35jzAGD78y78Hyxce9rna4e645pFG1MBoeBbdyK7Uz6b4wg8rB9MptsgvGxCAr4KKXQx21wCsRBJh",
  "key19": "41LARFivGHdhUTDwfPcSrWexRCGpfe1BaDhqFMSyjujWH36bQHWX6hP9i5wStESXmn3PuKbHK48pJegaHPfpsGGK",
  "key20": "2WFgf7pfiE5dcuzD7FQjpPFtAj93pfkbfm78qPHaFpH5gqnuB7UYUToQrCo2dEeXwyHK5zScSnzKeZHYTQU7HUQr",
  "key21": "YcwppJ2pFbPtKtBj5HCWgfhWNGKvMyH1ZS9oJ1R3ed12MtvKJVNjduhysJKZ8JWXSGj12XcxbuedeCRVaAsNhXi",
  "key22": "67RmvxRZgT1UMr38xmA54vtdfcZMMq13tzWZaHJ9y3PhdXfdykR3g279wNwt1T3kTaFb8QmYVRA86XevB5MMryGv",
  "key23": "3KhSR5P3T1F8M77NFUpeEUjbBDXGgSjsTeFQ6QWMxPF6QMVD5ijj9HY9YAx2kjFv3u5uvQzHPZc8tyFrfFkKr8XJ",
  "key24": "cAkyuavoXfTTU3Zi7SRZFKftZGUTPJK8sWzAVhc2EafpNviRtMupxmU5pSPknr2BYsZbsgN8pSGW1nRFkJWgtLV",
  "key25": "3uqu3qCvHeqDWYDvFedMF4kauzPwKZx2Ybxc9kC4bvJdQPyNsmxavsFStywDGPFUvyNFpSCedr54TZHo5Nu4mvgm",
  "key26": "bxJ32ANBFfKDN42MKrPLSauWaEbTARzqi3wJWH9efd8ytyW36veGyroGgujgBF27D6ZCySU3qLRPizFPhnrgEu9",
  "key27": "t3Ys24a8UPr78EsRrT2G4VA5kafSvFhJ9MianUwAdMDQNmb4qRXppWaemk8BrT9A24Ztkay84YQ9DZAG82riYYV"
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
