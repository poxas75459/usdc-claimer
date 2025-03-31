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
    "TNg2NtCcjeuyWsS8qQofbTChjVfZiu8apezdkV26roEddEKEQKc3x2WGEZc94BAdMkNDJzkL9h4B3iRNYjvZPg7"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5GdqkCeNuic7GzYYrQiciLzJ1WxXtqSS7QXndZNXznNexRcnCDFJHy56aJbyXDEJJFS5Yp6MJu99jMBgzqHUmQ1F",
  "decoyKey1": "GKCnEU92KpnWipRC3KyNt78JdpoyAjZfrqpwWThm5JoowFceL9MFmvF8rX1vpd7gFxdHJcz8Cm2tKPGboqexvvE",
  "decoyKey2": "6bHi2UW1BXzcrxFxJeV7kqAibp9WKV8VQX3SkodsHMGAkwZ2RPLL9WJDt2wYGicLJ9tX3z97biXJob7RnfJyPsS",
  "decoyKey3": "2pyUCATP5jK19h5Dn1Yp7pnf8Qszdz3J42bKF9rqDvfo2sBsxcDofWjXYoQeCg7gyMBn8kdyJusQkX6y8eJsVmDC",
  "decoyKey4": "4fNwCqjc94wnRnJmyBg6gepaqiv7WzU8pXH2BnjxgjcMJGPWxLWmBTgVdZxrPD218agRPTGASETDQktYYRw56wk2",
  "decoyKey5": "3MoRC6Y9sH7455Vg9f5tku6ukJYkkLtSzeWG6TxBqGWMfz3NEWcWeM2pQHPQywgzXoDR6yqiLqUosCenUUUit6XW",
  "decoyKey6": "27vHLkLzW5HFLe9nCJWV2VsKxxZbHftbixJahNUed2TVaBbqCCFkjoXtX9MG1GkVkXRwqomdKyh3k9VPWzoF595U",
  "decoyKey7": "3SnBcyNCTLG9nLosxnKhV4Rbhs6KNoic7R3PMUeRNvzpPJFKqHaF42j3ZB1Bz2doy6vgVi8hREjqLoHKfsMgqNTZ",
  "decoyKey8": "qe6roTEqr81V2SFz6rHEHv1DGfCc9yxAGLotiSzSQv7nMirYDYWZDeTS4frhAC8xKnW1TTmnKYuoZVmJTJNc2gx",
  "decoyKey9": "91zvRjPnb3j9DgMKfwxighGRWPQ8PB3sHzW9n6ekqxxQBvFyxyFfeAuu7pJjCorhXQMPeXNPDfS8SMz7xmS6pJb",
  "decoyKey10": "2Ud2o4qsoPMQ2AdaUNtkec9bHPkR6JkCimxqice5dqZL2bZb45ngrwsTck54zN83qLzroczcfEtHScgB6oxKPA99",
  "decoyKey11": "3Bjb6DcDkrEtkXTZuXPCNGMcyTetPRmdVDWv8XK38cHgFmD2woLEFwkqRiyZZNcJWwd8sMu5ZmHLD4U6Edyi9XKB",
  "decoyKey12": "2RsBkczS4dmM9SULPWvJGWPRs9TkvYjtwdCa3EP2PSRLhceUtirt3MaDHgzueR3MQRZFQcDZJ12mgXT36ESFumw4",
  "decoyKey13": "4czMhpss1LRYHJZjTfWK7X9tX7SHDbxheC8JJh1katT8yUjibZ96MpZtK1N2nB5CZxcHr6VdB8J7vxmPiDkYZR8Y",
  "decoyKey14": "4Tzf9SK6AVew56J5qqXQ8UM4ZSgGngAjguR9MfStGn8ALF9jDQYz33jsAM59xyhYnaZZ4RwRQ6nvS8AnqyqZCAFn",
  "decoyKey15": "3eZEwcP28KtwfC72WNSvQbASUFBFoenMpbyPm75KPagCVajbfBuMzHUjLLsRANEJTN7xYWhAnkXrPS3N8mbmdhb5",
  "decoyKey16": "4PEa3drYRTedB2LeySNhCDNaoaSzYjw3yo3YWmna2xyu6VgkMcexGDfQNVz5iFLDPNJxkQ8mhsa1wzXSnRnSNDnU",
  "decoyKey17": "4eU9Eo9a8NCX1kdKrHbP8f44w4CyAkhoMjBSWGK2NwAPYa7B27rG4UtjXfpvpWZUqRzqSfVtdaNihyXC7vTcmpc7",
  "decoyKey18": "5Q2DMKzvppiX9tbKBBXxRdt1hJFWDvMKqwmXFrgNxSyr3PFCiVTphaZhFSsTaxjpyT8Z6FwXJW8GcCNu6tLtyvmS",
  "decoyKey19": "LTFw64JVPCx26dQbibVg8wNDtg7BvtPVHF9Y4NyMjiKe2XzhBWcPSAsfDnYHehkkmCUds36t9NSKBKxaVxNJbVT",
  "decoyKey20": "48f5MMMKE9iJprWKrtzjYyT28MUCxR1WtpZmLg4A9B8uHESdqbaCtCd8oYHc1F9sgMkLUbDNhdvP5xudQkESKQ7v",
  "decoyKey21": "53esFZFoGrPbmkNEz7RQvyAqBBkkyEicNjiAZxMSBPUeSLMvZmbsjwYF79wug7BkQZXQRLz5Gb4EkLSCyQG4g9PU",
  "decoyKey22": "4ftca4oFJnAuVBJf49AFz8YQ3CPj69MANkufH5W9iJ3VMALWQErBiftsZmRiyBRfD9NVrhusWCgGhP8peM4ipKVC",
  "decoyKey23": "wBQhCLRSqjtfSMwrVECJKtPbDo9R11fyPyXf7FhCvthik9pKo6UqXTSkSt1KV6LV7js1efeA1GJwaKYQ1cFnC4X",
  "decoyKey24": "2JfoK9NVMsLmA8d4MfxxfQVy3BVGv2NWYFDSU8EvfVcYApjfY2MhqR2Ga3raXAM4xi4nZrCDR5GxFEp6qjftJkSx",
  "decoyKey25": "48WLLVCod2UEnUUzXDJ7MVJdXsQParVvAyFsQY4HQ7yHLomLuxnAHwJj9pZPgsxxgxKYCWWt8k6ZcF9QvFyyDx68",
  "decoyKey26": "3MotADNUGKZuTwZuri5XDZDg7oqtE9cyiBsJE2emA6gbx9k2m4zzHovdfGaDxw7e3n126iuYAigSXmWTiN1VEQo1",
  "decoyKey27": "3sQj6F4rSGB9zN7UVgEeEJfhe8wrdMCPTY3d7pB4YGhSWrkFhBQ2GNCR9kTZcM8ViT2W5yGnS9XR9kt2vCh2y1DC",
  "decoyKey28": "5ttTf6y8A814DiY5m161PEW2kSCofWc2xmthGUhYewcBwfXcVPvFsJZPCNzeYXa6Qs2qH85qMoyAyiddJSjaKpfP",
  "decoyKey29": "4bk2daT8HRckRmncZAG8n9LcPR15PTNHptsdbXeYcHLLpPnaYTnkvrqSoFVZx83crrULKTs3YATr9Ho1j5VY6AT4",
  "decoyKey30": "4dmknw1rrLwNxRcYFB6pfWJW9BPKQFWzjCXugtv7iJvMhnga5FPRArzwb63mBmRTK57vuQo6ad9ryQUnfxZ4PY6M",
  "decoyKey31": "41rbTTnGzn6wLdhJZay1K4924VVUL3GHVf6tJUGBassKiHHxfmLrHhNehMmc6BaX9P4kbvsPHxHwhk8p9LfFsJem",
  "decoyKey32": "3v723dtkUeiv6JCERE8vLftGX2rj9CqSRgC3Lazi2XwJ5j9zkVo2bCg5jnpL4Lb4rpHWnXJsDeehsG9EML3aYUWh",
  "decoyKey33": "34T7W3mxaEbzE1zCAPBsWy5Mu6Z24xghcTzHfqNi2Bhq6e1QMabVKwUVDmLHHwYaVvb6L8k6dnfJc8zEZteqmbAN",
  "decoyKey34": "bL6BqXyYoU9pYg8DS8VBjmNrozkbXp24Lpd9aYXANrMiw9UFryUuLuzxc822oJZbaUsiqHZvBQtTv1Sxd9oaUuo",
  "decoyKey35": "yzzenu4GGgfU7omDWAGzoABNL2gf1taFtcNz7rZt5gf76N5zqbWnEEnwGzJrZpgUwzMj55CWhmVeGN8KdpRBEif",
  "decoyKey36": "28HQuNAy9s91iDUB84YxKLNt8Pk2TW93wgMi1aJpVX225NyNYHhd3tYaPTrqGQr44ye5YN344WsovtSJKwYodsaM",
  "decoyKey37": "hZWjMQ4srRifVfmx2gHt4zVvf2fVhZGnYay17MefpYNvQp4fwKznBuJwZkqhB5noW19MMY7J48ZzhJyEh4USHmH",
  "decoyKey38": "3ZabXYqxJom4nXcYBuXaN2qAT2S7YGNGPYDvm6WvzykqjMUt13YVAJFPFV7EkMSXonKM6nRVpNVMjkgejoVu9GQx",
  "decoyKey39": "23q7eCCaATZmE93xBgR3es6kw3As9i3Me8sfwSJf1nFaF2ouevd2gTBBkrpd2QRVXPHxVo9xVHx3E5Gofyt48udL",
  "decoyKey40": "51UuJSgeX9rPfikvwYG5MUgbEcP9DWvZHw7NrS3RWg47z3HkxvBratp3wt14wcj5MAYt13JwjBFdzFaZecoNR6ug",
  "decoyKey41": "5gUxM9HVaq6zxZPJQiz17Gntv6wxw3wUac88tb4LaoHJw6KTrBjMtX6LZ1uXNafrrv5B1tF9Z1zuoiavuDyAZ9ry",
  "decoyKey42": "cfr25t7FcSudikBR1rgwoBpfJ1A7dhjDtJsFBPE4Xz4BCJwCUFhzDMnvZCNtq7UYZpo6HJg8dxDbn3rBSSSB1gz",
  "decoyKey43": "6ayronfyos8syKt58iuBkbCf8qQcLFEMYxqRKs9aqedsYkunjqjLJxPuYBx7rLqKJjFSvyTnypKZy7RqRpVbpkf",
  "decoyKey44": "2hZfBJxnqS3Ub44Z5UCC8jeAGks69Gsn2WBtH1ngFpwoxPKdUCupRAmA58aXv7tnkBt2MH8xbfSToKGiuJjbTcAa",
  "decoyKey45": "2i7essgmGmpL4voQETrMUdhns5vBjGyoVQ1SY4s6v9b3od63tDpkEhQqncfZjr9paXox9VnQKzRAJYJNegfQ2p3K",
  "decoyKey46": "51NxvESgBG9ZePc7STx5bVimLQXTFf81UfDKazQyqK1ki7FkxDhRTJLesKMJdamarzMtnbSpmBbNMjczY12QTftW",
  "decoyKey47": "3KnVDWo6w9S9U3rVFihPvsE5rBdPF5GfAZncdG5UGSioXQqo7kXsvwJNg2ytqWck7hh9ygi9thJ4dE3T3kDotHG2",
  "decoyKey48": "5fwx4pefDbdVGEW8ZdrX2trDv2aMU82Ye566zb4WYqxMfLrqthLo65gC5JhY8jb6n3AAh18kafaXx2HGYEZ4CbB9",
  "decoyKey49": "48ToRJjefvZkFMxRjRp6VXczYsiGKDD1R3dvC562KG4VB1YGsPBES7fYKsmASTsdoEFrQgzvcXMt6PRfypBhLFGP"
};
// DECOY_KEYS_END
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