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
    "4vHm9F7gpGMsPYhGYB2TZBVnspKNRgsF7SHQhBT4F91y9Sa67JeX2CzPygk1Jh93TWwvFc2d5FVBweVYkoLka2h2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vx3cy3AE6orvnj2DBtcGnDyJvTUpzLjJqQNpyCrUSYhKnLNWH3FQCbKUbKoNvmx5wqP9PUCKQ4Ps3uXDRNVYZyM",
  "key1": "Xqu71mmasm7gYRNvWZn9PUqtf2aRrXHgSYQs5eFgnp1KRRBgtTc9TtzcYovUqcux273QNoZKxmARHBw7s5yDexD",
  "key2": "26fvSRRuDntA2tfjAhgRohoftYKjoPmrvQqFrRws4Uewmn4z1SKs1Aeg7VjzHNrUD49dvviq4NS6Pc6bLiz8jK9i",
  "key3": "5rdMpqTMgcH8vg6ARhiKwL5Unofr7V7DWCJedS62DcV9yk59fzZMFwVxzEcUSK7M28nJ4yh5gVS6Vvi26NdHFTze",
  "key4": "48bo1H7izyL8CbFQJYU2XWf25h64J8EXRCcBJFNqhbWKzAukAmM5kPTAqpxuCTRKBaoCYYtTSLhBmKfFhVY1j11o",
  "key5": "2r6DKs9VbF4ih2ibeJuQHY9BJwR5MnLaPxHZ1R5QYPtqiSGThGibaZ1Uu63WbYc2RzGwwj4LsoFnbxZ3R8xFExGc",
  "key6": "Jh5k8PyAKGQKtYxxCs2VfxbXY1muzWMxjMpgdF2pVoVTejLFh25KrRuK57KtxZn5ZvCP5QfVToSjmcDnxw17zwe",
  "key7": "9TPcbNvjEp8fnP8CfLywmZd6okXsui7p7WhRogBfz4nueBmZi8sJdgU1gk56qx9t3bE6wx6SjKFk6gm7nBPeAw3",
  "key8": "2fH7BAfZVKDr1tvPnvtUESoUb3JvUMt7Rp9C5ZccXXd7S375DatUyEPykNmVKhx8C4V3WimXMiLhRL8K2xnrkJHS",
  "key9": "5e7hnaCbLidwDrkbKS8YfrzcqesznHvyQpQVjNvjQvFMrzseTCwXsgit2UPWYTDDWXxL6EakVtidN1UfFBW6u8g5",
  "key10": "3XfCKP3XocSumhb8Wv1pWrPFFByPRb5MMEyYm3FEYDGEX5TEY4srdzjeH2P37mVeYnVa2nYpZd42yWJRMYfPkttX",
  "key11": "5uEoKnMHedNEW9Ad3Lh7iuBYh15QNCTMb7cGQRPmCGq1tXzmPp8RMEzbcVy87DywiiRozAEqsdXmhDpwoSpyRd1L",
  "key12": "4JUu3GmCweoUzCvTbb3wqik4QgNES598EVWmmqm5uHiyFdvsQS2V39rJ4qNTjVL2E8Bp3piNWVxtLQ1ASBdTEE7X",
  "key13": "44rbNDu2P6RWAE9dHnYquQGzXDkemk23u3JbhibaV2aX6zdoCNxTeRoSH3dHMwxue4e2PrhRh2pAMN1tYiS3uJrd",
  "key14": "65Aer4RFjBjNmwiYUYBzcAJtWr8YGV9VumcgcEieQPh5vbvwykbuUsNUzxmLWBqvNkgVgwXS6nwRw8Dgor3kCJZ4",
  "key15": "46zQkt2Tr1T3WTC1YfeqEbkcvu1GE2akrDH96jDuEX83RyWKzuxuXz9d2NrnxG9Fki8F9t3LaDfH448cZNcjmqxS",
  "key16": "3XjJAD18hetxpDpewrDeesG1X2sLpLeFKvKxdw7BcHrarPFdyh4BogMQ5kf6jzbqxURVpyM844oMsAxnXMx4Ymj4",
  "key17": "Xh5Wc3855TKNECn8qvN9oU5cWMiUAWBfT2BDY2RhogGHDDe2iPyx8RB7mG3FoQqKWKgMVrfGWa8Hbfg8vbgTca8",
  "key18": "AEcYWcHdQ744m7USM8tsypzEPeKYGQxdZZgneNct127FWarn4tuFv7MCRhUkW8hHCsoXcyG1JPWDJ1NPgGH21SN",
  "key19": "5gp2KRPuFjDz7JfaGyaFfBwBem9Lmx79iiNo5PddKMpGvfr6Cc874Mp3Q2h2yaPEmZkjyDSM31Wpn8PZM63Ue26u",
  "key20": "6249oQat3FpQWa5q6SMnej8KQxzNAL2TZfBYaNYCd4enaPs58uB6aA2qsAdHRARWSvp1mJHUBntRmHeAEHeCei41",
  "key21": "2LYcs6hKPtH4jYYYKgRtfzTkf8CxV1NVCamwR5wSCUyuiy8JL1n7nkxYuFkFVkg6u68dzsHAZUSk8CMqfc2TPua6",
  "key22": "2WQcpBxtDh5iJsXxZhp3dbwT5MP4A3o3RwVxJkT5tfQ2XozDGAEhUtuDRSjKLjTwuijJ2GEViuTiriGw2t5f1Zc",
  "key23": "3MDv221UTQLkQFhwKM1FLckQxWS4yth8jndhyFZubxctpsG8zvVGCuupefQ5qkHmy2X1E7gACE5QsT4Pxr4kHaC4",
  "key24": "5eczQwnvDziPKfNNg7wLNVFXd7RRmJoEcye4nWkQSnvUbFGpjyL2nQGmPzNMAAp9Aw7FnYQNqwNrcBTj4iPnPxho",
  "key25": "9ZD6ohay85nMbDKioMMzJFRqmZySoMefiZ5PPaAUHtfaREj7Mgog9wqW36M85dBuF19z4DxMabn6idXmYbGnaPY",
  "key26": "37R9E2fq3vLTf4SLjzHK5XX8Fs9CEJrpk3LpDi4FcEvhFWmGuqXbgNYjmsKSL4ZSY3Bsy9XPZNr3rhy5bvt2voLC",
  "key27": "2X8uo7pkBTTYW1CcypJGbwACPcx7DLjQJCwwLnXF3nKqCxTBPP1YGeWsfo1AYmu5scCaURv9C4qcfGmZURTti9tk",
  "key28": "54SzGExJKFe9jvj28iJKzac3RG4X4DgTQcLg5APA8zb6ecobwKq46irPj6Yo5zojEMUdDif2ZJUFXXgHhuABBSSS"
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
