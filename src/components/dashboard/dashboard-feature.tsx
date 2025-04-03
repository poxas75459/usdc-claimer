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
    "1235G5TcqyT2q2qNcLHQEdaLFr2yYPCzw3RaVoutm6TtpxN95FZxDUzhSU2kA9ndrpPTcMERnhMhmrGX2cmn9c9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jr6Zvby652WwVgSvD3a7p5Ct1Rr8d9wPM6myZQDYUf34ev8LphMj62EdhVRUsvTwXxppgWge2BNm13guGCBf1Dz",
  "key1": "3fiZnL3M5okzPaBkrZrizwd7hTzfmik6YH1kY1XjASRCxCNVvQnYcYjj3zoRM5FtYMNA2T2kJBdebyXDJWbSHdDC",
  "key2": "4vC7W9QjEzVN7QDDK374PhmQJX4aLtzwHCHmmPC2bevm8sqC7X7StoPzL7GDStKjWdiVdQ27uTf8xkk6RSPaNBT",
  "key3": "3gB4Rc9A2vfyAVRvoNdZEfX99AAgP6eX93SqiCFbKLdpvYDkzctSotc4Tr1fpp98uoBVnCbp6TW8yhZmtA7npVe3",
  "key4": "XAgsMCMsCZtHgqjLEvUhgKg9g1XCE84tW8sp6UBdGfyMfms4r9nDMe7U7ECYJi9pYmkCai3nBsXiPNcZoPUT3U8",
  "key5": "396eaJAR4qvLMMEMvA8cyvqtBQKGmbUHq8biunVeWWyjuGnfeBUfr8SM5sk55My3sKxPUeCFwLguAgE73fuyR1ou",
  "key6": "3mEDLSzQcbPrYm7femfisAwE8vko9szyQSoKcXwkR9mp7Xpc3DYowazbtXKTa91fDP8Pri2zVbH7ZxMXy8XDrMbQ",
  "key7": "65wPASqLxjMuBwpeHU1Jbs4thjMfNDSpMyk88n4y7cnECJL7VhVrimJtyMBCatfzFeAxgSdftyZCPZP1aYcBHA2B",
  "key8": "2mCoV4jjhi6AyLJk6vVDi2vksZjGtxxc2ScAiEmNUB5kXC8Y2ytCaTexHfwLmE7XT67SKnZ36nSFvxZh4qwxhSZX",
  "key9": "X3iM6dETTzUPrEHoa6LZN51ZuoQrnaGxxH2XUmUC6btH1eVSK1uwyNch1Ua6xLbLHtPtw7X6wm967k6CsSfSpDA",
  "key10": "FA3udUD7fgzMiz6ZV3drvqga3XPXtp6eCnw4z7uEmRbUCTUZf8BiWkwUFSgUWTwikDEGpr3Tps5yGV9TSCekKfu",
  "key11": "31G6pmFnXbEnbhvyiBcVYgL9XGQjRMXMh5epPgk67rXfPWMvseUAqnYzezWWMMZHfugH4p166bRCToq5i93nQNcK",
  "key12": "3rATK51qW46HSezCNkLch7WjCqHyA2DVn9kBCifwvnRscsqRtMiBAMNmapsdzwnKRxZEmLwZvSKmFPTQLwA8TNQW",
  "key13": "3mHag5cUBwqzPewgo6DQ6KzLxWcdym4ZwuGwiLh8pfDKH11xtMUzxJztCwL5jWNhgsDqMyNwo5H97RXFvoxv54VF",
  "key14": "2hBhtwvzcKuCKX8GAMnJKNactD1r61ji5KM7bUKXXeVKBzddMxpdkPEHnkipeV3RdmCkxZFmMyH8MevbKDqxShDo",
  "key15": "3WXxrgg12YyJJVwyZtPrSBEgPbyTCTuCR91RAaC1s48e9T2vdVxYbkRX9DJaCf2x3YxQsx6QnoJY7XmEmnydqYvX",
  "key16": "48kgWdfh16EhFgjjzeyNypCkRT4tJhUyWv2mfWaEMUgUUrvemg2tj9S5jitNLEWv6De6YGR83miCB8UcqwxBE4QD",
  "key17": "ZPdWMpFtNaTrvEjDwib7qX5hYmsXKpLUkXULWnnF4y4cm6tBmN65mGCetB7VPHJnbm2DX1sKF2unafjqZBjmTYc",
  "key18": "3usfwcZhhXYkAJbq39DD4txenY1XDhcoMh2RwY5Unopr8zFJo744ZRFyw2N66DjSBS6f65BQtAwv4gzfZ3numo3b",
  "key19": "5MTpnvGM1QSPMpQLPsWZr3tiaCoqjA8QLK7hUR4H2AKiVYMcXKmZnH2HAXgp1bsBKZ4tF9je3q7s7GfebUXqbLkN",
  "key20": "3tN9uc77jxSpVZqnskaYkoPUYnunDYELwqFsaAcnaigmqyh4Zpfq6zUiV719yGbAEjB2FrjjPRhp3DS5Hvva4m8F",
  "key21": "32uVoSXrkCs9QFfQDpSv2qiSwJa6wGLdt3FnvQCV3Ujs3P5fQnHBYvfr3CGciUtcmpoqQfDjJbFoFKdx5dpRgyk4",
  "key22": "56GQqLRcDttRDg1unqzTcE3wfuAH9fbMj4v7mxqkAEHfGAzock6jd4AG25UNJDz5MnzJre4VWpQTrhQQuV372UgU",
  "key23": "3J6uvhrtpoH2avcKLFYtHWvx6XbAT95MVApg5ZtNWtGgPLsetkDainmYtqas7sSd11oeDMb4ATrCgDweGutt5MdX",
  "key24": "5tRFPUHq7Bh91mKDhTYk4MUWfX4Miv4wzSYPWvC7DL9HArJe88juovsKgFrqaJmcmLLwaqjATkt6ukZNqy9NHmg1",
  "key25": "2CyV84CvcXDVRP1SqeexmKsfL3unVfse4xYSFJCUENQNfjq4eK3iMTJCPhXKSxk91WAwogRDb6AxdjRMxQBAGWcn",
  "key26": "ZZVCXZ5oFAvn4DKxrrofXnKroGBF83PxEFBcYvimeid2koZtP3Mgk1kuu6RukSP5pNqMhXvooGbE8RNBzdPJNe4",
  "key27": "61h3dAutaf7Zwvkw824MHCmhcc7msf5FwDWHtZyZzj5PU8uzoExtTbQEDPGe9nwGGCMXXBRSaLv6eVnT3ZWWRj21",
  "key28": "3fkF4WUCxeiLt3EWgKMWrpn1uD2HiC5joM4Bgaoeq6zNwQEioX7ZAWYzCEyyb76UT52x22vUwQaDJASuffNWK59i",
  "key29": "5d2BNkjAHccypjasTUQhP6tzYiFeC7zwdPcFYb5gGKLyBQoxVQB28AyQ84HLuc32TMnxVUg3aR7jy9JQsLYbY3af",
  "key30": "3fZpQgZyA3sakJVKUoKuLuDgSsoju1vcgi6UJATJ3u8pUMW8B9HFJZBeTZ2BR2sVRAcJXkWhMY4HtnoFd8ijHrqq",
  "key31": "3Ldrt7SDF8rAJxoDtSJerqnpnHHcTmGjvPMQ3Bf9cZuoTqrbNf4mvMCNRj1sJotxfj288SyKe45akDAgX35fznnC"
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
