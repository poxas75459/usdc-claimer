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
    "iFSAC3p5VwBZa1xKDcrJWHMratftSf5QJb7fXXnWusBCKQ3ABX8LAFgDmH9Gfq8wGQ1uKLpcVsqV3tqWrYFsuiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SsuSdmJxEpY3bjEw2WdfBFajqS8bYbSKYKt71F9EbAEMx38Qd9LKRcwNZQRuFcWRft7usYh11CBGUKv7vbFPDZ",
  "key1": "4q7u7kCyR1jzeSjLK4AGvhgU8jZtopxFiKqD35tVcRitHyLJLAt29knmHC6kQCe4V2cXMxUq5Xy7vFLpkYhmdakf",
  "key2": "46MBP3Sp8TQmVHpUhHqMuEsGUuZ75u2C4GzFDGBi7AvLMfr2M2HdtJppN2f97Q9uMQwqcm8pW1nZAG2sksurvkk4",
  "key3": "5T4SGhnk6raDKqadSgnsYs4og5nocS51WMsXguMXcqUhDvLBJeradng7iEV2RoU9CQ15Zdn5MuRohyq7bUiuNutN",
  "key4": "528iTJ1Rwst773WhiBFt4B6Xcyc6ECPiFJJjSafSFqG1eviChcsEcw7TanA32z9UZua4FVFBVYQwFSDJDVnGN1s9",
  "key5": "rbhN2StGGjdFptuUcjDe717dq6MPqySiBPWSKDMJ6yL4zMqxtDhh99hp1vcrJBfHtbujoukgugcX1VqsHMBzviv",
  "key6": "5BpqB6eUUj6hEfkXe7SkBxSAX6xt2N4tjypxiWK5oTueXm7qEWHAnL34SYeek2tCJtd95BFJzWmkrnDHovDReftn",
  "key7": "3qMQZMHwFhWVY1bDe56De7sRoeKFnQAWoe2EKo6bR29Ax14AgvsJf4wWz9XGthmUsE5cWrXLrAS2bJQaHvBt5w6F",
  "key8": "47R8TbgZuSdwat4VhJJYBSrAaVjHXN7XfBAGFwwAmQh9ahASLwBreEY9QEgubgKBbcLCnEMroCkMQEJwrMsigHVp",
  "key9": "56XbAFnVzVRg8pCWQWjnAQ382ULAXYJQ52gnUcuZzHKex2VegBYmcLdxAozuJu8q4nm9Txup41UTAkUzcyDUQyB5",
  "key10": "51YsyabBo2u5HZoi3L7yUodJyz5SF7SxrBSSxZVwmkxCvcefuBwYGMzXnenGHDQg9tTwiNEkmsxn68LbKLXdD5h4",
  "key11": "3WPqxu1Vy99bCAq7qggGnh2AEwZfVXJcp8RBHhNrBbGpnsxoH6BbrLqRajHNZwZzpTansBKaax6CACTVbg1wA4Mh",
  "key12": "2gsRQwwS8czfB6SN5bVeiiCdWdEmJ3XD2sxKz141ae1VJPGegzTZ74vLgRFhoQDWTTYJgRutovtCG3YyEHS8XYH6",
  "key13": "2KmRYDjjYzYDsZ8nh85N6B9CjAiBjrAK6JrbLEFTEiowsEjUG4QqdanqiDi87ceZre8MTNerBiDnGoyV1pxLEv3W",
  "key14": "4gBLtU6HZJpSCyQx21qYfzEr8r8X5LL4VpXoucgYLkfxXzEaj4tdVrebRYSfavPfBJ5ayg5Z1rmhZRKPy1kxai8D",
  "key15": "52R7KZ19QogvRvE9GoniUWXS89g3EXuK4eBr8n7A4xpfcsmtfFx5KP765QCCAqCm1F5G15Mu9fSLjVMEL5Bs2nZy",
  "key16": "3dP1mJTtiw5kGfrxvA2RzDj6gxkb2urxhQTAFGwgyCxZqEvrDj9qssaCKzm5wGYQJatrcbqMthivaghxuruszFQu",
  "key17": "2wzXMa1NmnBR7Twcgrz6Sw1gw7RR1TJXjGgjeDSiypZyyUKmqvdg7NqkJ3b2fr8VuqCpcQpR2qubbm6roKxTmpCi",
  "key18": "4Qxj31aZZMEtbomPefs3Uu2Nf8HN4dKRdjstdBpL4E9WqQuxpzwSxFKdPKhXgx63oUrAnXsmHLa5LJ7rq4GuA7sZ",
  "key19": "5c23SvXJPV3qcSk3GmDXXcT4anNYhq3qSBVqt2n3M4EvCZqUHKaj4ehMbYZhQAj9xYy9phsA4yHt5UkspPJT1xwk",
  "key20": "XAWPcWrKiDDmbyqorPXGnURfxoMSKNcUGomu2xLgqnU4bMTohW2cLdM2UtJPxU3ZNcGe5FqNtPyHnNSmCKafVPY",
  "key21": "3wCd9WuLX8D6qu5no62hNLqssZeeUEHkwyRe1dAAfCuzA3BLevvvAXdqBb4Ay3GwrURkr8aXQUF8dcJFfcymovdJ",
  "key22": "616pT9gg5fRrdkyvki5bDBinXCEBXtW6TiXAqVHfAA9n6kHFtHDDy8DefyEHMaKLrbKNAHgLvVArHMsrgFjNecRq",
  "key23": "W3Gu197Sb5MS3qyyENHFVCEaW6VjW8KkPNAA3zHsztkmRjdV54FTM815E6g6cZk4ciaTriNyxF2uDTNNURUjfdt",
  "key24": "jtMtxkeBYS2KL7FY5tGuW4Xa5WBZ1mBWZ9v8prH9nBdJoBTjsMw4UPDYqsZy66uSrzM6EZ5zg6pFXD3Fswb6Xyd",
  "key25": "47DANvPNbfM69t3nRMac8fFFR9eK3ximyKJ5WjvKx6awsA5vw9xEhpQvcKXbhnH5yq2e2vCztc9dcwkJWXMzB3x6",
  "key26": "DmRSQD4moEvL3bBPGCvGP7fFty2pNKgPQYYR8FMF8X2ta1Y9xFkwgm8yH3Lm1So7SGk5dDP3Ux3BxYMwxEPg2v1",
  "key27": "5eacAf2PyaWC54rvcsL37pPaXsFSjMeq8Lwhz9AuiZTzJvYYYuRV3tGr362UqrQaF156t6XKfJsL4EWeASGmgpDc",
  "key28": "4UZVdYMftEQpZFdt8MTBcEexxmiw9xrwXedmqRVuehDfPzL9QZkHjgFjz7nUeTJt64NMvBmXEk3iE4Y32PVuG5nk",
  "key29": "zx1ev16rYB674mgiGyCgfyEqYpxAPcLRKBNFbJqZC3sqZ6pZNb6Yuww4GFqKrdnJw81h8Q7XuQFmA3tMRVkPVXH",
  "key30": "4HQJnUdyrHSJt9zQvPHV6erktwvHcQ5X6S6KDuhFARs5yZzpuuCPETpZtkANK9LJZ4x13H6ih9pGREVqAk2bj1qo",
  "key31": "4VkARRkVqiQbUyAsScL5BazgVXoorzCx4tu5jiF6JkvuWjbohtCT4c8bkFgWemSDk5aRqY28KaaZufhwar5WLjyD"
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
