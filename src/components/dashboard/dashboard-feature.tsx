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
    "2kBFssUTkcwSJGkdgfRHZY5W3FcyneJgNWH6cD9Z6NTEKynnKpmRoYSAQPaTiGgtWMFJt5xyd9YS641B5S1dSdbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXj3avCacA2bCGcwR6mic9XVZVVdko84R1XPVoZjTScfxDT4Rq4SyidsrTead9QgBXmCYACHNL76dwZmEJGZXGP",
  "key1": "5cLkNVCtsxJfSxLszZ5ReLEvbjboDNnE7YMS4jKxZkirve6vwCHdkc56HVCYezvMnRc3zqhtV4CufRTk5QBA7DdJ",
  "key2": "4QtiqRCteogg5W6BhDTYq6vNuXqCuEdeK3zhDHwvvu44K6cXQa7fL2YLX9RyWiALHABDbAwwNXYVNYbfWdghpF6M",
  "key3": "2X5gtb9x7v5dgSCaQYh3scipm7GANYDwwBy9QX1EGo6hhZNpnLrxmG9Y2tXYbcYKouhEMNxYVGECtVw7ENehthWY",
  "key4": "5AtRdtPmpPR2W38urRGH9xeNELu3hfEszCauWzt5u8JFxUtzfmB1U8shpTPees1a1s4WjsXmuUPUQJeiERV4JRYW",
  "key5": "oQcszSQGHcAxjoafGLPt7tcgj71e8nkiMcKqdAWSeDTiCuU1xnkXPi6KLD9bEu9Pm6ZPTcA46q38zZsvUyM18f3",
  "key6": "cSmS2yihhSxboyVsu7fr4qQReYPYwDm6XfP2kgCJeDKnbVn8rkm5qrbnsndefvqwg4FqwmTk1WQKjvZt3mJtXs3",
  "key7": "KyYotokr4kpFk5iZVa4JEJQk9ZzCZ3DQcmsxazFtXC5tFoMxW5XfCDJnEx2EKkSQGQJ7DTDvmHpojpBtZ61XNfv",
  "key8": "RW98KukWNt2y3hDYDVJBbTkCL2AEuC28YBjyCxsv23tHwqpnV32BGho9MD4WQSLvuEomU6eUyfWwpwndmowfwM2",
  "key9": "5VMdhMWo74ALhZ7TrQgyxMfDJ83vw8aht7cMtHoYGTq4yYo6JvWYBPbQm8nDD9jp2JA6dHgrCiAU4PmntiZgpVsz",
  "key10": "3QhiW1VXJCchUw6aMi8a6qTq72pJFQqmqJAS1ssreRpAv7NEggv4MZ8hhrvufFYfhFt9EQVHr8PZixKem9zshMPU",
  "key11": "4u9DaMSQL45ZnpwQAKtMckPu89gg8VkE4vq5QXKWujtUVrAaosoho5YHAfuKje6K198FWRrBprXmUuzu3iKG4od9",
  "key12": "3gG2kfbR1B6ccMskok2q29Admt7YR6CKSc8UcbPvmcxt9VGr5DBoDKCxPBsfjZd5YZGDsajrdrrS8WkGDTz4zBXc",
  "key13": "4GmchYXrmkFUE2Rm32AEjY3snoD5ajVRDbY7iBjR3qei1kVCgUMF7fAKbXfLXABDMZJvJC6N6MS7GCYTiQD1F3uA",
  "key14": "32PMVfVkLCCkess3v62ACtaTpQa1XvdycwCUFRsS8FgcabtfUSVYcdHSMhgZnvrmv8CKrsWP11xeW6KBbRerZp1J",
  "key15": "2ARYucv9FmFgEjMdnxbiUmWaeKpSC9cEMhLRjnD7NEwx7iwq9xhqRmiUxDSWSwomZZ2DFcKtyomDV26k3z8JboFt",
  "key16": "4Aq6GLXoHjoqUwdU9rXAz6jkqdoGmfuV78od9F47dLGt8Wp1U8UTvsjv4fJBtUm5gecUoHkMQAfCYqPT1vBL9F7u",
  "key17": "3o1ieKkGCYachfNnmKKrbMnSjFwHPuzjs2E9TW2HPARkevWbTA5gqspFDrjFUzsNhnDt4Niq7QPKgnnpY6kdeggt",
  "key18": "4ATaxPVEKUpTwm6EsBPmTpPcm4EoDYwW8L2mifa8msL7nWi8yzmrREvsj5mHLviyR6bKvFrNiHqo7CUYS1C7AN21",
  "key19": "38dMK4VJFXYVSNjtq1vfaebZJHoJgqeN9MWpiKYVeoSRm4i5v57yKEPMgDhmty5o2muGo8iq3KMgHpHpxxAfMtwk",
  "key20": "2D638ZD4bbeSspi3xJWZbQAjR1kCPQ2Hwkygd8s4kKqhx2ymM7zYG13ZsXEHybSLGBcK6F5nxHa2xEmWMk4PGbj1",
  "key21": "2QhcWxQrFGBZTq2bpCA2ZUeWHfMMwh6idme56N3x4hRexVnyU1ndzshJWzBNfpGJfLHpo3VUA28jvKamCtRJbzkX",
  "key22": "53UD6Tdjnvcbvz8Nv5Tv6gGU5xhBzyLVqBmqoP4EKU25ePsWaS8hey6xWxzyvNoNLG8tK3iTJNCDLAxn8MfZnz9w",
  "key23": "3uDjZALnsMducBxYQdmLvgnK96STLrn9pLWPDthRStaQKhnMdW5AhTXpdNKkTWEyNtt1aUrVRX5mxJCGjq5erhV9",
  "key24": "4WCWtajDvNzhPJ52cy9AnfmGMspJLooQyx6M2q8GeA7zzXfrh8SoGWqP4En9qt5Vicp8sbLERikXN8iRU9fxMUjY",
  "key25": "3ku2jtmJyqSvALMMMm8Z5PxYcug6c4c9ctqXHmAEXG2Xdt5455yVRXwfeZ3L4DevAzpFdeTEHFJhnDaWWej9pMC9",
  "key26": "MdTue4acPnvmzquaCSTqEmPMFkf8GvCqXLpsAwC6rYbDMvwL7dR3L13NaxN8WVM3f8j4gpa8YoD1Zn7QdGuezsh",
  "key27": "37dAnsJXbaHsVDK8jmcnG2YVzr2iZYYf5DW9ZMBG4HKbqQscB9o4pR6Eayp8MyxvTKmvB2krkNs5wUaNAixsmEdA",
  "key28": "5Qhk9skZMGV67MtvgjHVi3wf5XUV6nWsLAhPnHHCqJNBCqaGQTEXYnLXqAevHVR2fKTYKmBXjSSWkkcfR4bDa1iu"
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
