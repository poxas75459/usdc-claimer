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
    "2iu6HpGbFwmcnC5kCEVwnUoszVsZ94F2ZMf4WRkzxtDheLAroF1TBmrWo7FS6VPtVHuJRtcxjtzKxV26qwV2qcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jPX7d92oZrq65NfaaMwKKvxbdZxEFD1iwkxXCcXxGpbEx69XiEWfu7SwCL8ALKENRa7fLBMC7zD7rr71ijx3XAP",
  "key1": "5Nuq5J5jmkgUp7NfnrfsZ3BHxrfFSYBJmaYUHVnMJTPZRYAZtVmoYeN73DXL1Kqe545osww5tZJpSW5BbuexhvdF",
  "key2": "2uFVjBbWaAUzcbAXb2Q9YA7FAR9aHKaBwPdKykPu613NmDq3VXzpGvfpzNA7b186vrtf69Gz2Bxp9URgEtU59gBf",
  "key3": "5hBfmRoq5oGKjb8qTjL5qQwaeE4ps75g69zMH9UBEuq9Bs7v9XA83QFYh19AyExMpFM7ngGJ6TFqwmgdK9UzsE7a",
  "key4": "5Udwfv2PQ9qMGTM4sDSw3Wo7tTtP4WDzw9xHtAYnRZYKE3ySsHVYHBbBc3SBzEHixsZvMCJQixtLWdC4Cvq2PXn8",
  "key5": "3ce55pzBfqWB252shZmHtCWarjk17LR6LbA9MsoyK2HAJwpGJSSNKd2c7B1bt8YJo89XeePsvPgq6ep8fVWs8HPG",
  "key6": "3kV4jzbHLAwEjkXG3EN6KYF4dxJv8oK9Dww8LbLosnG4JhtajDs9BUrtZaqncM6xw9yopzjPYPA4QciKeud9e9Mu",
  "key7": "M7i9vDLBDpHB6jZZdmGJxPcF81sR9xhTRp8A7LVm9mFqM5wrs8nzzZJ6EvLW3uNwJBLqCTkP1gk55Ex1xtX5ydT",
  "key8": "3NhR5FZNHZN71Gw6oTDmPFeemp26cyuDzTzUtFt3EzbDHpAGdfFD3eRkTS9AaGWUfotMiAufFp89tE612h9UDFHB",
  "key9": "3f5wTodCGZiUhhWBmAc8Yg9yVFUea3qHfQEnE272iJegpdf1bGKanaoc2iRS7iU9RfmHTC917GCee7sazpXSUpCb",
  "key10": "38bNbeaZi2f43VJo9p93EFfFx1r9RHCwN4DwrosNifxRZRZ4XFmX3dke5hajtGiGLssWHZuNFPiSF4GY3K1Aeb3g",
  "key11": "3aio9yth1ELtoL4dsWgK9f1thKZcnC1G9DFVnUyKbe5EmCAanUeXXEEMpoCwgk5eWu9dToaYa3VGwMJznoz8NKPk",
  "key12": "62qZaNMcLb2Y1n5qUcWKhfrtT9WPSsFSaVM4bAyrXEFxnQDkLxs1XoYW5iPLpCUdioEX1EjBx4AqvTfsnSRHnfhZ",
  "key13": "37b4EV1zcPHpFd3cfFFKvESoc2jdPqHwH46SGy2U8LjoZUrjRCiPLCo1tgVn5rBNZ6Bt8oKn4DZjMeJKUKyfVdGn",
  "key14": "4M3mh1Xp6umJ3quGCt6Nu19frGr7nVHaJYgMpQE8iiceVkEHzNgeU7caZx36mKS5ddD8EJeYfSTSVvD9VxaXq9CE",
  "key15": "2jBYwjiQDt19p7MJTkLt8VXhGBjBu6pZbLr6En8yXAXgPGA5oKmuheRf4zR5Q6nmRvqabSSiwWAek9BdA7eyEz2N",
  "key16": "v9KYWzeR4xK2zsFNgX1J9nw83PsHGVTk8xxaqcqCquZ6Q6p6vRpLQi51rjwAW61KsFAy518Tc22sauosUHYKnUx",
  "key17": "2HjhwAT7tXbR17ZuHhLj5KWeeVkzshR6hruDQUD3fFP5EpXD5XdKPtNBAdFbyzpN3PBhsvYhhoEzayKNZWsJf1NE",
  "key18": "4wJSTUjCHqmn9Antsp6679P9XSyCsxEq5UVidjGq6KK12MJU493DUdNPKvYXccEeNGAyc6gVpg46zDZBQSB2zCcS",
  "key19": "sJSxj6GKN84WBQYiWG4SFNhSGZa54sgUyms3LnrdWVE69Nui7ZFFjSg2yoVeMSqLGkBUMoQ3B2eGmBvKC3HzBq1",
  "key20": "4RBz5rTw92sXgbFnTDSebYMcnswUSiEmF7D9mX3H3ANp3kHUXwAf4qN5KFief1V7NZAqdyyXrtg2Tbuuah8218Cu",
  "key21": "2oWGu4Sw4PwMZPGvHVLU1QveXLuCTEuQbaMCyFY3sJpGBvYkhePQv9VpLC3L5sU2mSQa498hwvePCxzcNqTEAmTS",
  "key22": "2bdkTzypG3ze99BiVkpLF7JcRbtLLQCCL2kdjjRC9KUC6gKK51Ci8iP4Gxpc5WbkwsWZpWMtzJRreQhYUDbRHfF9",
  "key23": "2aSZsexmUDKyp2BbV7c6yfZ61FuDfV96gsKWnB3KWyRSWZhy7mmkf9ar7ceUZoN7To8EU9YR3EpoduFuQumyTrBk",
  "key24": "4G7JnqXx1ZmmySyWHvqNCGGMtcbiJPEQDYLkTz8WaV3ddYcG1Q5EsYer5qS9WFWJTYSXtqaDfu8JbtGQVGsBmE9P",
  "key25": "3uyPUGnkvk5L26jFBpSdWdiDnTfGWcCLMs8CbaoHZWknMFJAW3evh3jdQn9nWz7uiLiH8m3Tc2YmgYmhpqLHCrGn",
  "key26": "5D9XPUeadgZU6NhFsYrCKW1AnXBcEfMgzUAdUVFakf5mBwpe42wgfbvhPRefi2AKG1x9z3RctcvTSsiGtmgMSJDM",
  "key27": "4K42yGzww6zGBcrH139H1cRZiM8ZGE5MPPs38xjse35J778GYbiRvNmCCZU3BeB4kD5b7CejsqXjKqA64jHvdW3x",
  "key28": "47xDydPUvabHJhTiLDNqrmcuubLaKbY28htbzkbcrYHuHPxfHPGKyLgeXkYdYzaqPqP1zVocdqcp3QvWR2B46JTg",
  "key29": "c4FzE6Mo1K8ns1VY7sb6uLoRCTdFPD6hPCdFS4vjd4nvysrdUoyGQTGLZUkQxxYyU7PJtdxkQM8oaFbdQ5aYzUc",
  "key30": "62rv9tkHmjbuVWGhbyHKWKGx6J3QAUacv3QFfBKnShE9tuMsv7YC4secfgZ25CPiePAaCg4MNWrxciYrP2NSaeRu",
  "key31": "3vLvcTqTso4AB2ftArk528fCeTiUJS4fxKSP7ctyVkhFtmWuVXkqsgrTmuK1nLM2AstnNdoDXam5svoeYNBPFJ7F",
  "key32": "VBx3YoEKe3gmXNWQoWPnYVzcfQD4N3Hpzkk1LnRJp75mDQ4bXY5xvbJmPQRumkFKWtr5N1ePUrnncdivNtnohrS",
  "key33": "FScNoU952uzs238kYJxuADQJJaZS37bxhLVfkMF1wmi94RDSkhq1ALm9JMx7dgFWrjLsWYMNRT5L9Auc1soDE3d",
  "key34": "mQAh5EnbXpRm4gbMHNN1F2JSjG3m7aX8nXZTv2NL7vDsWYXHNrLSUeLXy55zDPGy5rNVyoehdxVpgPijSvHLRN8",
  "key35": "5fRCm3yNGxstatdjJMcJXYPcG9M4zKDVtEcY2HVAkjbyzdeGNMbci3kA4vQkFmca3793csexkTkyy959sUVVGkgq",
  "key36": "3Vqs3D4rPzbarY1ZqUfVk8pGrQHGFe98rzxx1vaKoLWk25rgpLJqb2H4AVfwQqHmnbsNvhgkz96bGGXsQrot3hfx",
  "key37": "3swUoRk2XbgGnQ1EidZn35W1R7kyEGDLiDWauM7p4dRo96q4LKBcdbaE3wAfDyKRhSrz87ZiNby1JB1VurmiF63H",
  "key38": "xYjMFUjnhn56L82BKZSX8hhAH14VBouipcaYkkN9Q3dQAepRzNJNPwJGFGNbNuVEXoBBwyy81oHJVVsVg46i97T",
  "key39": "5eDt8erRGz5bZA8vreKfE1b3kB7wrukBrwzWYwvWLjy56D5jD2T7EEx2xRTfdDjWA8rLHtjEQM3rxY55dmJppMCK",
  "key40": "61hXEk4ZzjiQ41q8WJth9z6xdbyxNtmyN1EpmY6maFs6pyZF2K5kp3n3GxrLoTHBUGta94a9KG3pUGc7AHDGbXog",
  "key41": "46M5T6uDX1jxDZ9V79hzLdi9VRC5C52wsr2VoSSepgDxjt2qi1zrSZRRCXMvYJnLRfibgoKbh2kmWesEr2YtYixs",
  "key42": "4tMHbXXGnUXtgSmU1YFAZYxXnpthBkTLPYL6jZ4BdPuPeDPciZs7p9UQ4KvuQ5kTHAjGhjKWAZduYPzoak9YkhGE"
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
