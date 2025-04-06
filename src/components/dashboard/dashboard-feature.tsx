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
    "3nZ5jLa9DWgmtEvyNQTKA3RBdQWGPCxYdevBBHeJ8RFjHUEYkZ8quBEGuhW6wLNAteT8LCfFQPPyJbgtjd3LwNAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uhkNPCdnpqp2qm2SGeKqhe298zdKEEjTQJPgBBrDqbBEB2mdzKmC1JGW79f6BH1cbqdRFAGwrMbYvzi6vQDdoUq",
  "key1": "7s2TgctWbUDaaPsgWU8AzbyCrap6Jey4R9PQRj79gmzVRtRxVDLpwgwbEMpM679vrkJzR3ZXgrbvrtPGVaQEGLd",
  "key2": "2AmyTrTLZXa7J4qXRydjzAueKg1H2ExPgkRdXE49xuKiPLWyeSK4zFQckAHbHgXqRpPTWPsz6zNDBFfFnCQtwgeF",
  "key3": "3jnpVdtFT36LSCXETSem6bAHESNN3wAnykM9fCfFtqvHPZtMfTmzdyzVQESq1LMcNDSFWrwdmdiFSXfnHyNErEqv",
  "key4": "5unzKHfQ7oxwDFe8ZQWHM3YdCvCdJPfGf7Ze828W18Vus6NjDzNUdhVxj2Ce2yTmewAviJnwUhj5VJPh1ngBXSXq",
  "key5": "4xtbbixfCazHjGgGPQAjRZqvZqyDMpkoinQBnUVMDGb1nxTK9jpGTwmMTKVHi3yGQQxWfPqDtvTj45ybt5obdvKo",
  "key6": "2YVGC5mZnd9SGNGZfDUrVM2A5PyovjvdYfrE6rzoDSbdQekYYeKNAdCXrhWawZC2wm69MaYxgJv8EmMXD7ztW5GY",
  "key7": "CfDk6FDPHWV2wHmLGwtP69G2wz4caugTkkwhTaKVFTYnXfZrGojr7FcbB8b4aPe3jyCpVpoZGMJ9gSpZ8XNosCa",
  "key8": "2csmC6117dSzX1LH7U5GQEwGy2hDvLWXcEqin1wc3VkEQFPaKfWwwTmCRttidKimD3urxtVn7EvEJ7FZcv46B3bs",
  "key9": "b59SoouskoSx4H98CrNm7LtLEFd1jaBxBbk7jEEo6fEHE4gQanczHw8wrxHwnyKnKrKk3wv6g9dk7HeoLY5i6YC",
  "key10": "55ZHb9oA1k9yQsMEsFAAGfiHUD7BGbzpJdSpQD7WeQNUCTsKehwzuMrBmMh9w7MVfXwANi4FVQrSqFXYtF1c8gd4",
  "key11": "3BjUuz1Kbv7TYTg9AJ6pMZdijpD35epsf7STKXL9DFV4aCtYZJi5dsNsxNHycBnUDvM3otE6XRh5iJFh6teEX57Y",
  "key12": "LiW4DrSKGucNuAvAntjrESSsiRdbjgnae8DvpV5PP2vqhoQ2AhVcARXn3pWxfpkgi3GRbdJkdSFPyEuVxNWHM4z",
  "key13": "cXx9iqFnHrVbBkUFhu3JLu3mwp1x9qSBY44mh87HNhbCmj3BRYaY5BwLQ4QdeMq5QgPfytGAnc5tUu6HWYviXHo",
  "key14": "2PwND578uDXfCu9oFqqqDo4HhbXhLTByuzBDmaAuZF4qhthHiYSKdVbLdCdoarE5awJWjin1WhmrncC3VNkqy3Dq",
  "key15": "3hz6kBo4x5nBqyCVV14BB9C7CsSpXLLHcVecRPEHG4k3KoVeGHsYfiM7FUSuERqWRR8MvF8mchiQ78mLBRP4rVat",
  "key16": "gwsonNr7e5WY9P1G4BqUM1whwUpnJQF6nGrKPasZ8Mp58dspzz9Hbm9NNRo8tRkXjRY6Yb6zyZfEqE4uvA3ofhB",
  "key17": "TPAmeasF5PDziYQaBsyUU9q18g18hT5yyLirvfT4qVsQW71HP5kqx9wycpRgi4VwgJjvrzPScCbwEvwb8Ha8oUp",
  "key18": "hD5xQvhciQera7i7ZFinPq6Cev4Vs2322JNNX4zL1eCNF54psNqqB3ELZ4VC65zjwApUMUsnorQUiyxrQ8juQx4",
  "key19": "3uwx3Wsg881KvmDy76ukh4SYoQxuZfQAAEew25iU5E4LYbMo8MFVk1bpWrLCHpeUQo3Dng1ndNQAukwuHeXwh17m",
  "key20": "2MoSm3DD8Be2geVax6jfpcdjQbT69y8riYFRNSfjRwxAqgXPAjGh674oL2jFCtK5VCLT4hXw6xe8L1sRCfpq2yvT",
  "key21": "25N5xtZJ419ZxCb6zFfaniYhjLqk4nY57CWsj1yXMkVgTargt4oNbCnmc3vJPxxQXvJNm6JZg4prpeTFdgqs81DD",
  "key22": "kjV8dcVkS8hvMv5sA7f2zzo9Y13V7VBJHYbKryMBjcG1VCcHSKkkocAgeqHwvYb6T9vPFiCyH6MBrbyuTmnFKtP",
  "key23": "2SHJTU7G2QuFEkQsN4pggzfy4tXm1zPhnAWRevPEVF2Y8mWWyMDJFcr9M3u8Dn5uakyzE8sk95SqrwgRfZgUizQV",
  "key24": "3v8hUuzjA3d1hFJz11Ppujm3XkVLVn1W49uJNGg1vQh26VAxvoZqatUZDbT89piYzatGZsheUsc58NpTBAUdmpCr",
  "key25": "3Ndi8WPS8hLQoQoJk7AWZJHtci1ixadRV2wFJ9HUX61J2uDa5SC8YfEAn6DVLhj6rxjToC72sFNEyUjVZuAhu5Tz",
  "key26": "2zeVA4aeUaz27NpCehqW3UzUhAiGSAFiWkMkhUnoLa8gztop3a9aoKyRL5ztCVvfmoJD5VGS6DZYHsuqRR4jjDJo",
  "key27": "RHFDFaD9945D9zg8q6qANBg8e7uGsmALDzFDbUgZrnRvWEaSHoNSKjbhw2mFYBrtg54zJvCWPf3oSVDzUgq4ka7",
  "key28": "4R4SuXiy4SBAn9cbPCAtyPeMXzECYiKocbRCDWDCebm5Z4WJX7tAPabnck8KWaknFUxNoxDPiqQa8rdSSuL6FSat"
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
