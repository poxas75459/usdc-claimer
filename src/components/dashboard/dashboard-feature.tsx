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
    "2FY4xMSgdonDuwbsMpPTqzzCVioASQ844TmZ1KKESPaQL1ooFWYX9c3VJZ5J3iNNSC2DpJvgHWcEgfPakH5f3853"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWbG5yezLagYtAy5Re4uaKehTLuAz5pxKre74gxUD2qtqZe8VgvAyTRiW2VxrdFzcVgxuugF7Hr9geavHmp6KFG",
  "key1": "466UathWn8okHidSbb6PYVusMeTg3hAU2LMwXaEjBepuVrTsqxXuUw4WUHVw3QFpQVu2Wt5UvxguHGoRVPP6qvPP",
  "key2": "vDPt7BaG32jSQabtXCFUVkxSVMtg2mtCHLFGUgTrFkLcsKj3h16RzUdUi5ek2evc1D5vXpq7JYJYwsV2sXbitY8",
  "key3": "2W915buoqy7f1tyzDu2ivnAmo7WhEto6J3QZqLJ7JYSUGudAgnhTgUZzsHHr3C2sxKCre4zbXQ5EqKURoBvebBti",
  "key4": "V2HomaeuouChgLp6sCzSHpt7yGFuGfMraFiPsrXx43uTVvv1VgJqv3FLDZYM6HpUXFqqoD22fDXNydMm39mWWRL",
  "key5": "AjwLchVTEbsVhzrwji24i5f94wxXn8gNENjUPK1RwKGcLwrdxBGr55wpwQrU5MEcm1GV2qx46ruTRHRUESbtPss",
  "key6": "2UQjvZBdAkSfPQk9E5vsCZWwuc7aTqWcpQaRZwTnMSnHEEidS9BAsxSjMo8QBNBSvyZo4NGJV1xKbVRGrufprXAU",
  "key7": "3wLLicavr5sbmYwXzz1YBcyJa5YLm3XRdp6yKtcQDtq8du1ijSydJqGSDt9RzrhYjR3PSa1TvdqQGLzpWdwT3N4W",
  "key8": "5W7iJfoDp2sWmhaFZkHFXmfn2xyyKVZgJteATRxSmRMS6RujgWnHExWWW8W9puUNkZTFFtCz3fbeuG6P2qWXxeU5",
  "key9": "GvKE6SiyKq7WzPuGSxTWewnJUXD9F89Gs1aDDpDr8URxb4V18VgaztY11qyJahLa3YT6VQ1SkdF1NVwFzpBmdPK",
  "key10": "LL5pUty2J4VFziGjnNd8Fqsh2JkP6tZ7STPC9d5oDsJPsiw4F29M9vBovd2Wju4rejoUNVaTRUwddZNxpRF44tq",
  "key11": "49zs6Cw82u4BLcXjepXgGv4vSBSvzgY7JeNa6ywifMM2djF5KWZ2HSvz4V2aU4NKzQZ3HvNkc7ZxMUWS3RjkDQrg",
  "key12": "4k7n49hx9TmQXKMk6MXc8F9aaPSopMvcLmviuXRhsxMYBd7cRqeEVs77HV8eqKutuyYWmNWvka23vBs5saVKrgZp",
  "key13": "66FwcRhruxpL8g7nv3S2y8nWtopRKkw8jcAahdTC22pDar2Kwr6MJVzvVeLiFsnKwuKL6cxe1Db62zeFb7MXeHaU",
  "key14": "2MCL9oRQLkqxLyP3jMx5gL6EN3u6S1Af4o8eQm7xyGQzo4Nqo3jq9cxVbSe1WctGdcbzRwfCStzWwZDH1VLN9bjW",
  "key15": "gi5Fg7i5L2BygRHPQSdSFTnj4UDA8ebR4sGkqPmAeR9STT8D9Z3HGZa1kbdSh3o4U2Cm4rmuMyvBr3YS6keRhLK",
  "key16": "y1DBeoVXvBSS7E53cxgXXLkemrhNxMDPHaVhxwn5Uwg5w2aPv74Fsb1NXTwNrCpLFXcCTjbPQttEwSe8GD7TqnF",
  "key17": "3N3XzvA7dUDD8TVbGq5UwPd6L3UzgibiSFsvooevG2WFHjUDMYV6uzix8vFK655VaoUARAoitLVmxnC8Aa85Q288",
  "key18": "4cs6jtcUKdpRrkH5fH3mXxKcFqkWJq9EVyzCkQWgDgtDLteELm5yhQMBDxxUhgRUyWr2JW5h78gmtU8nsj7sWYiG",
  "key19": "2TWeGkbEYTcJmBdSanjAVPcH2buGxZeG6LmcNTdWecdRhtVSQj9MBfGswEvQcRPBnBi2t8eJQoZKmceYQqLEcazp",
  "key20": "63R1Nd5Br7h4qQtJApceFhPMTHCkderFLAunwaUdjNVovkCQixWDmsbtDhnWzJY2rxfdcHYDpW4QGWY4796X53Ub",
  "key21": "uof2VpLhd5QmL2SuzfmpeQHJw7VBGvZopSFzw7WEpHKwH3Moca4XoVXCDvxi7e1f8hp7tBJK1jaZ2drzhJY7icW",
  "key22": "2JC1J6d8M4zFV8hWCTQSS2fyx1DBZmT6rTBa9K9wjvjK511wN2nZ56Bo2MW7PshPquyWA3M34fCn9cY1beHTJJhd",
  "key23": "4rH6pupVxSw8Damf1Ha2PWJSWpAv192bC6WfEjF2vrUzQ9urgUr4U3yco3cjPKbEqsdBeTJmKWJQXZ23D9nJJBp3",
  "key24": "2CUe5S3e2S6AbstYju6Pvn3HLQAjuEwqXfF9DzyX3jFj6gVkDiGiEnVVRDJWDbYznpFz87NCzTknJunFAUvH6q9x"
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
