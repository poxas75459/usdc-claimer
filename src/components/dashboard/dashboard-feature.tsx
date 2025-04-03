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
    "2f2HrKNsnxzZLCXSGkfkfPfkq2tEm8enZXaEmNBFB3meLqACSwPmksMqrWpAYp92qPyiFK3J5kFSqYfyJUjkMqWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPP4p6WnNZyS5chxNnsKgN7bzgZYx7esshT6pTsHw5WNDhTCe2u8dvFkmsp9vF72k61J4ZHTw5bT6pbRDKwuanP",
  "key1": "5JmCwtZtUSe1yn3YPXuNuD6z3sLpAwU4pwecxr6f3bvhc7RgGHSiapG7vTBYrLSV3KJSi7t2e19sns7FGUGDn3WQ",
  "key2": "5z8A5jYqJVy6egb7tgkjXFWp6QqexF9AtAbKjL9ewKxYUefLAaugzerFs8GSjyPkrV1Exj9ZdTSMojYYqaYf21wb",
  "key3": "53gadZmMxD68XJvkMknfUoNziFWz35JKQo53ivUGpFvKnKEdkKvRwvupoLYsW7YbQFUz2TnvvKJ1iB73wJ6UdmV2",
  "key4": "3JiojF8SWjCENwbSrJawK13m1Sxf5sHXR9CAYjoaaWKc86za591TaEVz6XQPdZHhNj1BN8gjyUkfeCzcJZNtP54S",
  "key5": "2BDAsFgqtYUEUs5zBeFeKk7vamVmzzsu8KbawQE5db9jGz3Z5wvViyXT6ZuG3aYMehpmvYg17A8mxQodW8ZQexrk",
  "key6": "5YdiKZWApMfcmPVewSHfUpcM9Eytswk3pepGvVGHtBBjgxaSWYyVKxb4JZHAVqpTFkggqZYZhcMujZA8csVeJB1F",
  "key7": "3KSgszBTEMHTjudPWYwJPSkma1a25hJbJCz9phvgnDnNja7phA9mFY9ddtdJ11yEDo3G4nNrwdFE2vTKNgoDRLP8",
  "key8": "25q3WA1L5RJ5F9SnogeGY2QxwkAqcYQ5QfvwN5XPPMGq4DhSZmbPy5Hxpbyh6DnqzSa9EoYSAv5b3YtkQhGePY26",
  "key9": "53qKSZuUh44kNGjzueRdD2eJvFeAy1iYxSuKjB3MViMyopoLCj6gVNbBQRCLmLLWW42WB7qrJenL1tqUyQuSbLzy",
  "key10": "YnmTesfBMh74o6t5jvm2o8mtNgsEzMyzqkckCDWNFf6D8gaoJzbdCaRvPqsQkyUXERM6Z9G9XUPXGHqhisTY5yQ",
  "key11": "52Ecs9uCxFR4TxDYCGp2DE78QWu7U2HBGAWxkQinR3nQKohf3CKBtjafCGwqshUGWquyYSpapyxHBu32kju4gkcE",
  "key12": "4tokU9KS8eTzWNS65n9auiqTEJ9qrriTkr8Tk79kY5i9iA1xZRiBRcFegLkVHB7L16kV8MVubfNrUrtGZKVkMyEP",
  "key13": "SPDzDYjzAmGfLLTZT1PCTMdmFKTkRQzKECCZC1ricrWiD4pB1yUQaUJaoo64FcrrV9pw4azmLHRgLUs5ddATxVY",
  "key14": "415HhDaQ8JkJng5ict83KRPAwrc972to3h17McrMmXSM6oYuJHDNemh9J5Dk8QkTVE3k3ug2EDtiDDmB1Qr8unJc",
  "key15": "2dMGKAYBPJFHwsRvXYvxF2BpM7WkfMx2Ppx9BCbHRnDUtfi4V3P8wiTSGhDdBzES5F3gJCzywwL4iDmqTKDd1mEn",
  "key16": "5bXgHE8kxgy3qrRbVZSAZhPQR1BCLrA4coHMwWJsWuCfwpYrBoQ9b3u2BwPGpF4e1VeAdvGV5FHh3D21qUEEMbJz",
  "key17": "4QfLpso4PPCnvE3jdSn2W7bFaqKqG2tgtoRwiXgWyNa4TvBSghNAaqRRJqKA2Xian9mBS2PQ8EPahDBVQU9NFtMx",
  "key18": "Yaekfj4CaZcy5cvVo2JNHz7zunvpRdjM55uryxP9jypnZWR6iCHccVtCjzewPSZsXoH1V9ro3SZQa6vpexQ7cuu",
  "key19": "24emML2PykuRHRTQGphm1A29Y4gpTXSRhPfM2JacQ5SoyAGnnM1zteQE5jHaj3P6p7nsT4SFdZWnduZDVAdjdq42",
  "key20": "2nCid8EAqYmo9JD53KsoJbmD9UwpqWtkDhXygrnMQUax3kvRry1o5meTYG7roaRR5mz3pDAmmecK4t4BJv7k9Cqi",
  "key21": "2VgQ3jFDH1StAM2Z85vu9jTZs4KdR7urDL3MCXSmVXNS4dP42LDJUApi92f6B6FLtVvE11eNYGTaYyKg7rnsHq2x",
  "key22": "4VANV7TbcqasU1kwCGCvSd5bKbXH7aoQR9FNqyxVBv26uQiGZfwo7veLyF2Tm6h2CvtCTmpg3dnXP494K1STQe4J",
  "key23": "3fJd4mbLykavsyEwbs2Q6euuU6DNUogfmhFBh9CUxKMzjZgeQgq7YsPvfDjh4RYu4fG33c9c573HJgmbQUsypdyj",
  "key24": "2jBsRJaMVg2qDtTCtRCSFnmtZn5vPSdWZvf3WDCxM9s1qd2TDRm18Lznmzbg6wkubPfm6d2kN6i9aH32Jjz6R5Em",
  "key25": "5Ko4dGCP5oSjfTLmgdAadw6JmjATXwXuwNotk2ca4jZP3FnjZ2SvMfViupoct87xiRSqdtMhXGFbjqcLtWxf7pS9",
  "key26": "4hucj7ZuJ4bUgwm1GgYNthcjVko7TiwvEKFE8heqKxEvar3L5fuX6jbNbpJaKmktcdhEnqb9MPNirzd4BS5kUMK9",
  "key27": "36edxCrU6fvQooiJB8xmoqDNUbvdkiNjWnUW3oaq5BffyuJwV2XBm9X7Dm8kcGmF175otfQxqAg9iSCqRuFNWbS3",
  "key28": "VUE98f72Niwvf4D3cMyWj9nR33qU2r15shZccVka7RbvGqRh6cbqa2GnCZnY2VGqtR57TW6v8A2B61Fxw1j657a",
  "key29": "3CShb9YuMR3zX9GxkWkqa4zngZid9czcF1NT4GgCWpHZZCpqkfx1gpQ59n1KuQ75VY2qJxit4XZgUswJB2f2Zb7m",
  "key30": "2hceUAFhzh1RZKFicnBf5UemxownKigNgbzho12Af1LQWKnDV8mCDkG46d28dy81kyXrr1zYHiSvnoKp7yrjfnHJ",
  "key31": "2WNRJeGeh1TqrnHG4hF9ZcQzhjQVcWW37MXHuE3gf6se5QJagWXTKtbYtJV2pE8erCbUXta3UXeCAG9XYMq4Ua8h",
  "key32": "5m1KqMgpZkdEK8i9FwXTzteyGz8ku3P4vL5yC8D6X7gi9r9dVz1GtnbHKoTZDR2gb8w2q8wAJu9cYo8t4CimkaQY",
  "key33": "5F6iTr5NMgMKFxfyMRSSHGrbUXiVt4qsrHEUiMZnRXzKXK3ncbg9gBRpxAcv64jrp3M2VZoAc7qhNe9L7ESAgPFD",
  "key34": "3eyQSMCXFBtvDYVvuhAVAZFvmhbsNtxfnBRjzcvdxjshQiFRNsE12wHDNYqXu9uHVZUDGTidu3qwDvh7fRBkYxY8",
  "key35": "3nFP7iwMiAo6vS5aSawiz32evBBLm7HHKHQ64T6p5YaqYTWxN94gJ3WjNskXfGPYh2Ur2mGdhZuBVZ7j4LDUgEyk",
  "key36": "4A8VG2TQK4NiYnxBqjq5a5aSYxPEx24dPAYHtuCc4Gbc1HnGVUeTp9SA1RGHSpAEPJHf2rfzbaZoQFtY8Fifzm7p",
  "key37": "44zAznZdt9DKVPtQYFQeDd99vSpH9cro47486C8UmvtbqxfeCZshzHbAmBr86RgEXh8KcPe2h26K7PZ5YJm2Fc5y",
  "key38": "2TYFgGDcwiydRys6vBcd4iveWG7JNNH6DTAC8qWY8uoDGLWeCpq84RrB5hr6ZdrKSi1yVogSVmnPh6622YmHLAVX",
  "key39": "UFYEL9dcrcomvDAbBcZCiohXTjXpKdhj5Bij84Wna73togrGtV25GnKb5oEcrtgzvPQ8UPMY3PT96fxzLn86F7S",
  "key40": "5vfv3yPXCAGAZhsTzCddWzgudSmgB2WWNiQEHjJDWXUC54X7aFNuYM7AFnxkFWnoZNNLSx2hQdcaxwHutYnvr94D",
  "key41": "z1p8Fdkt6EWY81YhrRMHMk25rcCHBpYm4wYpT1DdXj5gnHCBx4TLjMP8itU97NVFKLMDYEYZ2Q7V6NDSHaRRzgJ",
  "key42": "xN7Nj8PcqNgeSwtGFdbR8BKfhJiNGUfbAEiBQMyw5kN2tAU9mJyEqyr6GXFiLraeh5UuqzHqreABjVTxRTSyXwE",
  "key43": "5RNNdfwj9EeGBQVEuvj75us44rgHxL83Dx5MAgX79YkPojoKiyHTqYvKjHdmd8CnjJdC6eVKJGsMgNUJHqRnDGpQ",
  "key44": "4qKDq2YhK2yzUEap4F9nRPtm67sMQsBRp76GpJBNaRSa9Ncm5QteLQMJ2J43Cx7jhmngsKMFaxwwkKEqX5DWWKYy",
  "key45": "bFFhpW9DnA6PzzvKCAzygZj1PdavQW2P2EGKwch6X5CvKQ89HPz2DTkYCSQRM2RKrESqojrui1QpxLwvbLK7Vad",
  "key46": "3F8fh5jHXjc3Ffp3nv1U26gu9i5HC9aTK4Pp4gv4sqKmp4SVrCWBrppvxdKM8tbAfcSAffghDuoakFgyniYT8s2s",
  "key47": "5BHywjLjdzd9kqJmoigAxmETNXcvjPm4FgxV5SqaMBDxFhvccRjMrASu244aLCFfP1dtcGv4XajQapcCYtheymCC"
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
