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
    "5PJNkTGQAaVvVvpxpEKN6NgHWukEjzsuXj732D9mCz6iHhkA563JHtoH3bzVzTR1s6Qk2ByLcDVAppFLaB6cumhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjbcT8t8KYBrcyGNfnLD9gJSdkiCvxxnBs5AcZPePFDSuafwGhVkZLrzYsoW3C7Ur6AFHfJvtV9C1KpuUVBJq3F",
  "key1": "47bVDiLL448ssqs4aL5BymgRcykBYVfn55RJknwRkJnvdV7U4ntxf7ZBZqXKBWCSfw3LYbTJ4T8Jjqe22wnfR9bK",
  "key2": "3sPfqVM9QSqMeWB3ihyuNyk82UUtD9NWin9knA3Us5aK1L8n8sgRcYeCwGUNi4ddApoq4JP7GdUQN8dv2R7BwZZT",
  "key3": "3FmRXQjHHQe6DoNhZBk2zPVri1Nor1RgMpGonLuaX82YtsdUdNw8Hy5b9aUr4YEPxpzetzmtpzRjfLhpCnAxUc3m",
  "key4": "2J9pURAXTGksixbkv6eHnLT634cEyAXWz5JgfMRcrqnY1dRozm1sHbCrwcEw67CV7qLzWFu2GrhUty4H2yfUqwiv",
  "key5": "36L2n5hNqZksL8rpKSrw2Mmhrmm4xsJVqSxEW3djH7wts7HSrdc2CiwhW4Vrb823MReT13Pb6Xvux1YNeRXW8QTT",
  "key6": "5YH2FuiB4PBamMiEiwg7P2RjTEdjRbnsya1LCNfRuDftachc1xmtS9FgiATNQM71267wesH2tk7JEnjqFW4b5UGx",
  "key7": "2TSCCcKnFBVLmEbSmD9xGmZRF5wb6vTX7mJByBLd4hVeiRereQeLkBKM8S9Wyh9wCtwCqasZrRNV2ddmxowY8Tfp",
  "key8": "59N89jcxC4hMnhqaXQ528ChXZJsmEKdA7m1WCPFxWRHkFmCVRmNyBfGixd3y6zTnPTFKZheSo46uDzsbWYo3gcTD",
  "key9": "4bov6gZtq6hiN1owvk5Tu1CqmozMYzv4hv19wV9LHwzzA1N3eoTDaEuFYKDe2wSzR8fVdga3EK3B5m55qfeo8nNL",
  "key10": "4UqyUMa9VZozpRxkMRaAZPwYG3cPTLqiXKYxhebinxtM2FtwjDgCyAQBvbQP2R77vgxVJE3e49HR1wHaj7RmatSB",
  "key11": "124JwTeNr2n7HjEpvxQYvDf4FRPdC3xE8HrVJDJhgxnHpd3sSheHujHZH4X7AXxa66iaw75zJfG9ZAqJJdbpwYYR",
  "key12": "2n29DAkgZw7xG4JfFWxHXKBuAtgmrddxc6dyLa2XGKHWaHPgqj2E2VZmdn4eTFTBSWGtfpyrPN46wSMVGH23o7K1",
  "key13": "46AboWBQS1bzfLJXTNHVryCr92zVQeB5BvRQc1TkK4Km7R9dP5ViSAVG5vVkcLUgz1PXPoVdtSK1CEC565KwutfB",
  "key14": "4XYkFYs23S9a3JBEJHYCDnJgda3gFw7TmnhmUnXgjzAVnTsJ4EJTgdevAjPLR9PaRpTcjf7WJb28cYviTgEjaiDZ",
  "key15": "2gRwg87KnAK4VCHoY2E3w4woeb2yiyyoRsutJMN2WvHEvdBv7C9wPLyvmjQc4RKzp8fN4YUq7fB6X7V74AU5Gpgp",
  "key16": "gkx5W8Uyx2T155bSzKkM24HF5y5EpinGztHGD7AWc7eguoyXKFeD9gRRPYXF6VfJmzwzjY3XhLgxRsd5RVbtPPe",
  "key17": "2PjGBXtB512UxYvPnjWbRxHebncscMQdsqobdGghiYAWKK8iGkgoX1mvSKhUAYisdgwp1CsFwSSSqFJP3yyb6vva",
  "key18": "3nnZJNBDSqvK7xVij5UhkrTeMzkhATPNoHvC3MnDRmbkBDpoScaVHnxqBXoyXTjxuuGwK5gntp7L4DpouredpR2m",
  "key19": "5rRdYnLjo24qWC12CbqfXpA95so45UHQ4sJrpdztAmxFqwVKt9pchbmS61LBVD6AFeu77vGeR94CV7rifB3LHhgw",
  "key20": "4UrKamPoLMB3dq3abhTjh6N9zhnL8dSdqnL34gP8RpsykHtwAjn2tWJc7qsLS2mj5dWxveHLH3ZLbsYUiM4t9pCp",
  "key21": "5hA4SMMuuWP4Nmv5TV93wiaaN1vLjLTfQVGrBLsNmn1aWL94USWcUF8go99QdEm7E2Tw1JyQthqbHYcSKcA86sYb",
  "key22": "ceN1p4MV86ywnqid8bV31TUmioPrZb174a12KMgA3qxuZdyN6sQuoGgVN8ofhy8ayNTQAuKLLyTrKhn4QUPnNH3",
  "key23": "3KT7VZCfkpq9GHeZqUf4wFFGm7e2ZwivYbNF2UR3m6ViY1jYMeZq2uDPkgLbGaZ1EnLBJbtUJ3K8x2GgjVkxWTJ",
  "key24": "43nDFMoEaVPbGCUDGVxrf1jRBa7QXCXGgof9j8Lu2fe3y3JCPQET4TzexPUWhXqdBZgs6rQtKLrb1WcChRy3Hko6",
  "key25": "2b8zBmUQZYKi2FeaHveBaVeYQnHuSrEG7Qdu1rHa8Y2SjyJbVNW6NUMetKdVpWP8gPoEvyPALNNZLdLZcHqTGznL",
  "key26": "5LxaLogqxJ4JPsBW1bfNxv83WBgNqmGgcxEnPnuPfW1AAf27W6yiziadKJtJoP4XmzjvdB6HLZ4ea6xwNDiyzCE6",
  "key27": "4M6uffNoYs8se7fSuZHuwginTfzYXnxukeMJ4NczzUztveME1meveH3upMCJb4yUPUDdDmUcDYiSudbfgCjroiMS",
  "key28": "26BrBJonmH2TdsNbZFTVQprxprgEdSwjyZW9PNSiDrVhGFYheZFPEiYZcSuZUm5pwnQKUc1cNYGxFZVsCgej6BUy"
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
