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
    "3FSKLoX4p91mmK9HBdoGPtnBgDPKkM7nXNH9UtScH3St16jEKXpYYs2MKdk8RXy67XfVUJahAdZRTadR2uRRhfWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ti5fB7ZH6zhKWahVjQNbJsanofHxw76v6tu4M43keDomegq2QjUNAi7nHr4qR9JnnWpxXUjsnc4atTzkiDyArME",
  "key1": "5ifGby5MUU9FRMazruBbYKvZxmwxeqUnyNLj6aWZ1FGhAPV4LQ7WRSr89r47WeGfbmmPZrST7ES479CSyB4qhuVN",
  "key2": "3e8gwoc6KEy2uRYu2hm5GpopcvghxGvVumV1kFEUDT8PcNao6EHv8w1vLwp7CFRbZaF5CkiDqfYayBdJuTwayHTx",
  "key3": "4x4y56AgoLjJq8umn3MPTf1z5JrrEV83JNV68oTkkSh2NSTbktEGMTaT79qHC7jKZEXz43sC2P3pvADBKm2iKe9X",
  "key4": "DQhQkvk5pU4QpX2zd5HYEEGb5S3MGmnsjRn1X84CkrdPRzv7bionEkeek6WffJGmmsquB1TYKk5az6fH6L8M7sy",
  "key5": "2No69WL3MsVPxpDLPNmduaAQqgH236WX4UVHaR2MEttW5tVt5ws5ACXScN5i1kdZDTW1zejNxF88UmfYjVgFiEDZ",
  "key6": "53vFkdcvMaW4gLFkbdQayNQvDAh5J6hqGUp6RwpfZpgsFTyh22FeRd9EQaNfbaxyVG5BF2oNs2w2RfQiqSsLwQzP",
  "key7": "48DZeXJejb4kHajA1zDJXP2zzUKEDvxRYAnAZ2svcued53u1C8PbMvAwM3rn7ctFuxt3KY99WL9M9kmTbDiADNiN",
  "key8": "2iusShNuYQaQkFKBx9Q11BLWMYSrMGPWLBpctDoEhb8Xh63fSKqKm6wiRTxsk5ANX4gJ1nKvprzC7vkuFXgTzdVa",
  "key9": "2AJykBo2epexYgR3aLuQm165M3b8SZnGq6ujDS3QDG9HiB9RuvZS8tpNEiLxbwZW7MLWauXpAndcV1nhAx3X4fkm",
  "key10": "2BwRZEyJ8B86G13TZHDsVPNtzBAYEtHb942jgxjj3L4DrnMoE6RRKSUgo5EC2vsx8XsUe9shrgnSradLVhE4PgPQ",
  "key11": "34qyxT99qayUJ8DmcxkMx29tCmKsaUAfr2DJAdzsKrPfmDYmuiKvPKT2qr7GxxwF56gTyJsj3bECZc7tspZm7zXc",
  "key12": "4JBfK4yE6TUBYHFb8HfsKw72snhnABuYMZ4GtgWNKfgDauxCdTem4HGgnMf6UEAKuKCXAzamFseiBBX6kN8bZDe5",
  "key13": "4xyVdaX4yGdTDivzi3xuSXPmY4pYmHzZtn7vRdMtz31YrBtiaan35grosBQ9NQcQAo1j97p1bkzyj6zG5yYNQqit",
  "key14": "2MgNUDDQsxPQ7gT4hojKbxG6yPbRHWsgVdPTzYzXn6Q6bXxJfbDjoGeHzCydWMJWFChevLwaYZLYNZygFZnZrmtV",
  "key15": "27QbUAEsgSQzxsmaBqJAWXcurQrZjuYZuNrvitJChfheVsATWT5TNjtuYJH5qKxZAmd8wf6CGKoLHm89U5y1YiEU",
  "key16": "2BDSSi9hCEKy5PS4CPMkDzH7s4ZdMxtzMZGLic9DnBHmYPwrAAbYt6q38PCNcg4k1tsJR8ZKFzsmEa7RX53ZGNt",
  "key17": "5y3WHx7pQ8T9niHmCTmmmQMyYZGtpWaqatrczddQH16NZB4YtQY3w5wsKCthqebxeS1bN5kHB6H8QTFbQdTgGi1X",
  "key18": "5ZvvVkLXt6JekiWddHXBFN4MjeLLmwFgyUKufRCGhJoDrcmx9vVm4Aqr448ygart1xtg1gxnQCR7yf8SV9QEhoH5",
  "key19": "2nmZJYeyLBbrYyYbRSvsZnB2xRVd962czH5QFQikGWPXDiZPXNwKnH9kGo6RD4ftmhHvjbWFuYfmD474Vx3jK9Mx",
  "key20": "383A2qoWJAJxaJJcTKmBBXBtEVrXXG9gLpX54JM52wRvmCLn7a7oZPATXpvEwaosXouAUrmf36XFzLCaBCai89dv",
  "key21": "2ovFQ13rXgacf31RcMiffvdaWmoGomSMZZYZqDaJ7bCV6UtVznu7YURaybhqj8TViRazjndKtXY4nf2SFdo1BJMh",
  "key22": "51MhRP3QeZ3sZxa7cCF9ndwSGXDBhNNAhLVtDSXUxsSm98hd72iTuMNY57oMp7KzBfdiW6FPvhAXpfzzYhtcRg94",
  "key23": "4RhJFdEaDrCduk4MrpzkrGiUcqeSJNa7Awi5WLjCGMZDhvmqYivRxxG2WoisZPSQgK28tZtcssJnEPmQdaaLyWt9",
  "key24": "5e2ifTQhsQN6As2gEuj87nv1MV8f7y8p61te1sb6x2Fqhcb8DgwzZhVfU2tBn3w23kR2QTQZnkjKgkEUYp6XmC7K",
  "key25": "Wp36mZaYnFQaxxtjzepvxDGCvUFmfsM6FEjc1nBjfgqPCMRaPeZ6iqbo3ZTCYQPxUTEFEr22Wi9nVJH4TmsieKD",
  "key26": "26XpZzPegYXNvw9NayXKhuHwe2AnwtKzz7TbPch3hrriyvr2XQM9G1WgJnuYP4V7eTugAKEvvcrZz8KXQGASecuD",
  "key27": "mueXWyQTFATrGqRN9sMDNKUfKgKsjc2nSKCPCdkEwiA3WNTy4YZQqYLQSiCGzPnQvZFACCF8YUZa6czieWb2fVq"
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
