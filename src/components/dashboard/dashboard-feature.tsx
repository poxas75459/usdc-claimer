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
    "3XVmikxEHUEHqb3Mh28hMXcL2tnP9A71ReskxjuPgvDVks3DFysfi2z251XgLtcgFrnUWhqrqE7RSMZizmP5615r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zgctq368TUU1CgdoEm43AiMA2zBeNAxZFVSXKHWJ6pvgCjJp9ZBz5Rwe1pFui9AJVBa5FPQFA7n6nkn49PG3BNN",
  "key1": "2YUMLrcEPrmnqxkZJB1E28fNeroquzjHiknsfcDT93enDJg4eayJ3fmToUkhAweLUXsmsbc7PawgaCWHnZ47bgLy",
  "key2": "4HAN12p5pBMaSCb18w5gZfj7Tgn4DiqdQ8egFXjLhsUSd62XkYfEqsDwkxjAotT1KtzEeCydxg44bhnLqwbmKzgk",
  "key3": "3BGp9TRVHFuy2UZtXPbvs1AS149aoHx6Jigby4JUcZ8x4R7Rzvevg3pPH2FTgUjBynVwa9bDUky5vqke2NnTSehA",
  "key4": "5jVVmx6siqBzvNrqFhZTEy5ktAHkhYEgPwFTisWs7fEnoqqrp8NMqUDogz2JUmM7S4e9VFCRnUySY1EwkLrZYShJ",
  "key5": "2zFdRLjo2gtuJF9j37Pi2d8dRF5Ky6BM2QyHsaW22LtRjNZEVkaTv8QDzj5gWiXUEQKzF9Qag6sBHZSdshVW21Y6",
  "key6": "4Ek9xWbmqwD9gENy6kWCwRV4n1yxyuFpqiw15dVP4aJURUtLwtEijt9YPov22jw9KoJWUVCwoDzcrMZnwd4dvWe6",
  "key7": "5SLJKzoyMxvubwJTbFDN42zvGgdqLyDAGGvC9nm1AkZWvvy2T5UKUQ2hX44GxkNGsZSbDMXu4W7v9x7a9hCBh4Bt",
  "key8": "3AqvbyJHCLzNVjgJEiMg94snAi1BSXqqCKHmUnGk4ocDW8pTkzgkquo2sQwWaJ1hN1kCbQv6JRHJa2xt4hqzF1hE",
  "key9": "3zggvABktLm6ZKsFzyWj2KrdWCaLu86Nphn3M4ZfcJW7vvBR64ETyMQ1VcVBD24ZA5JdtX2QDMEGDUMqavZYNUc3",
  "key10": "4hwJCUAWQ5QNGMpQHBToiT7xWDpFdRVENxNCG9BUJC4cuRp9QaXdevZPDnTATkcGahMqp9dXFhCuqsAWAXSeL4Wc",
  "key11": "3NVpkXPxW7jSFRVaB5rMWYbz1HZwvpBuyx87aZg6S4Es5TsZ6QE4qpc3b9iMD1qJ9XLh9e4SxAingDryY1C9jmBJ",
  "key12": "2Vu9QoW3sasQ9xQJJ7E2igrwRzc5hFsubSdt3KzGPaRWtDMPzrKgc3WWYFBKaBQyWyG31m8AcKSTyNgCqJe37mpX",
  "key13": "7iXc3XWJW8N5VQNsVXuRidCTkTpdXXPLxRCchzCCcaED4SshH46dH6Hop4YXPEvPta3fV1RTFeLre3rz7KJP8W7",
  "key14": "3QqCE3WurRSKRUM9N6Zp4QyHm7FKouf76vrfUAwWqAtiLU9iN2r4n6WS5Jqkvh43BSJ2FCfFSDBAmyRZ4KFFipZb",
  "key15": "3tpBsNZM2T6vzPGAULDmkgmUPukyFCWDRhnUchWG9qXF9S6j9EopAJmSNVMQgWrQNoG71AJpVhntX8meucWBse4H",
  "key16": "tXB4pyuDCP7bstaYxKjKRVi9ooymTVdDJ4oysVos3QNgNazuByuTRFLTdAuGQ55YhhxiZPxHxXDqvC2hNDgVaBN",
  "key17": "t25rrvCYM8yY6gXZSApZKfsdNrbURezgAyeC8BAT2ASWqqvg6jBdNKWCmQMcmwSkuvT2d9HnyqQEhuAWVAJY3Dw",
  "key18": "5pgY5ZVGup7vHXsNUyuThiSwQ9pNnoLkfMerAX9BCp9vxsBaZ47NxQGjrnNpTSYKek7ApA1Shu7gLYKFynMCectk",
  "key19": "3kS8TG9vLsR5CViQTYBrv7WDghRZAfmGnZtn5WAn6ztE1yFVA1BWD76LieKG2o1gyJGPi4jv319qdqA6UGwDJ6h8",
  "key20": "2weu6oPY9bouz45vVg6e14r6DFE9X9AufwUgtp9GJhQHhtjBUgr8sqKqoCXsNCXS2AhBsiyGsMuPBAezYLgBac9k",
  "key21": "F1y7aVpeS8bJAn7gGrTRbm4zaHV4bAXMWfovRe2fghh2UfN3KD5T55AjdN1PChXNyt9trpsrwhYQb7baoFdxR26",
  "key22": "3CV49e8oqqsykjdMJzJZ2obo7AnLDuM7exd4kcYpkecaUuoNn3qwUhn3WEWNSAWXddrD2pScFk8XfKb47Gxpfome",
  "key23": "4uCZDQyB4hqLGHFyVkT8ZUdzgU7HbSf7We6A4fuyu2uAPfBJzziGnzpvqpFpucLpQ95xUK1TiRmZKHtM7dmdXFty",
  "key24": "2xKu698Fpow4dFs3eFfzkJxeK2oAsC5ovR1fVngRijV14t78e9qsjh7BEWRpxZ9Z3s9PJDvfAKg5e5nwTkZeL4pS",
  "key25": "5PMo5AXjJmSWECLToKDiHrWUNPtL4KQFNq7ErxkUXFC53KmZz3MpY6PKrFvh1f8FjmfJ7ipoXYQRdjij5YrFGH2Z",
  "key26": "4vebjma6VapkueB4mmxRFdLwECqnrhxmu2cAx6Zmx4h8XjEgLLw9qssCH8hUg3aeqbcJDKpSLraUUSRV2fc5PVzR"
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
