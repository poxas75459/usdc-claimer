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
    "4jaLcuHSpoNC7Xuj1JtkcNfxcbhtgZrKHZFJE2gyvGjrFPLqTQvBNmWDGyXrHTQxqoSLwZyg6QQHDzZCHNDcxAeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERbXLzzzwwhGFsqwnJ7n5fZ1juMBA1AkfVqEahuUkEXXYftcGZyDh3mJZSk5kN1EF9wE7X2r7HJmjEDcbAHuHNu",
  "key1": "4RLh4tc3aD9sNyEPNxs9mG7ch1VaS3jn9TEmRF5xLZ6FC6Q7ozpRxe5rd3KiC4aH82Z44x5w1wCUwwB9GA3FFFoZ",
  "key2": "21WdTEyaJnvb8mgkFP63nfoXL9b4QJiaCy6LNSXdKfmgKPAUhVk7vRmhGsz8AQNH1JFtkgJd6uuiH5fsCsdSk3tT",
  "key3": "2UCSyrvCME3EKhhLrGf3rPb5C59NQby3FsqUGUuGGirBjk9bSALgaaYJ7pN188VDSWaaDisNiA11gNPTDoCcFn8W",
  "key4": "4fNjdQuz4PN4XnDaKgaxqkfSX4HmzCx97NSDdTksH6j9WidGMRJwuK4dCJye78u6T65pEVAk8iRaYnVhLvmpaENW",
  "key5": "62ptMD1fPJm1dDY9vZgmkC8BfCpELwzon6ug9nsbjav7mVdvWFuAWfZCoDKavw32LCUCVy9ryQxhc6ZZWTtCkGmE",
  "key6": "3UTQBnT93dUwPQZVTD6z3ECNuvzXfMeghqFCkmva2q2tMpkZZJk7GcXJFXndSgqgvT29JwJfbbFt5yVfbNnx12K",
  "key7": "Jod73P7FS4PChVwzkWPGFWMzsUc2XJeDNAYpGG8zxa7bhEbnX1z4a4sSRZxntkaPkGNr4zqMJ4vuDZTe7oBh6CZ",
  "key8": "55E7KM7zhA2WBw9wxWrBupoL2hXDc8fbk2TukQhGn8nLyrVp6qLRrkpG9veNJS2sxHhAXTaTBTiR83KXdrvAr2z4",
  "key9": "2h7g4s3JoV61gsxqpjXE7gGuxFUChXroQH3FbJh7mCnyCUZAk4GDqqFoFTAeBr5Co1TF8xh7AuTY2XENuEkMZgjQ",
  "key10": "5VYFqp2YEUAVdEdEUyoFXh4vmVahc3pRPmY87vvpGCmNMjrjVRFqc6iynPJNmsvzMc8cuDk2Nv5VJJrtB8r4M2F",
  "key11": "3pUyX7AL4KRcQCS6nVGY6k6h8FSc1zoiPR28fgkPaoRfvKrNE1qZVksEmMGogM7nch4v17RJR4VmSvRUuA5KK12J",
  "key12": "vomZaGWrP8sUJ1gu6yrcurvqY2KniWizu3AHoCgQnTTx7xrSiZchYrUcEATkQPZ2wcqoANWqFCEUSpByHHiUFNr",
  "key13": "5wtxvEjd1LQNoGJk3RSuTCukxbjdu98HvGSPvphCtH83EKWHS11ZREvB2xug6Hfx5H48WgS37Un1WkmfnpuuTbTv",
  "key14": "4qsrK4CAed4yaeUBNzLjgD16AHEFqDCk3uV3RxcNbbzC66Zr4ynbfGASoupSWZxniYqFDw3FKFtoZWoKSupKEbFw",
  "key15": "5ctvgpAiSftXJTNMrae6WKgKzc5ChrX7b7rQy17idZVtHsWmMzxtEfH2cajEYGETtHmh3dYhX85mH8wgwU1tuEhj",
  "key16": "3oYbh6PXb5pjscTSuwYUty5Lm2xtLiKrzqY381JiQpqueS29FRQbvBarxP1MNr3DG5SMVUPFWvXEKWmtZaTTBH72",
  "key17": "4GXQU68QgBgCzPshSHhwtLZmgiyW6qWbC75BDEEzoTasb8GCe666NfCFhyM1s5DkzjpgPyX7BJ7mqWcaFeVB1Uy3",
  "key18": "5fTDTMMjAoEuYw7kquEwmJo65pkowFaPyqhPy1FEG6kZ8k51GYpSxgD7CUJsuLa44P7FF6BCFxffnwPy6k6A1X2t",
  "key19": "3gp6duQjbu534ErxZTbTJwhjDAEM14wwfX2E2VEYA966aGiTxw929EqTFWkureJMYZzPWCAVe6HLk6Z6WGiCPeVy",
  "key20": "46cVUa67gNUj4Pw82cVyMftoeb1qJAgxkhpf3mbU8guAtMcvrQy2C4YDseMVrvUQ31xE7QAq9ifbGNLKsqto43j3",
  "key21": "5btG8erBvc4MSpyvjpJVDLr4LUARCxbg7rK4qLuikc1WLsAeJVJn6a5tWaPGEiRSxkFCugRMQLSwNKy1uU5fPkR3",
  "key22": "3ytv7cAjAUB6CHzT3r88NiA8o3B8WNRbPadwoBXPjq5JoAcFKN6FsJwQoyoMpn5zWSeNxCyu441WHRePm1hPMzpq",
  "key23": "2juY9Eij12PRTWvCoTxbFqqxcF5GEG85t6WjeEGXzq6MD8HZLznTYm6cELkrEJQLQ37dMoBec9NfvbVk5nTDamSe",
  "key24": "3SJ6nURjfaJDitZjq1uXV4UvzD5J2hDEg41EKLd8qXft4C8AepShqRnDGMsVQ4gozxnEqAgZVpwNfcUcsEvWCVTi",
  "key25": "2Zr7dTXGSQu1GD8pRVormHHjd9jCKCUjPLuC1kYUBn2V88rpfbrzzM7w14HaHHuENT7gupFebsqFcHUmu6Y3HyaQ"
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
