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
    "4HfKxXTuJFZ5Dq1nRL2VzQEALzkmYiv8Rpodk6xy7GfpwCV3NZqdPaFwMgFijCBbKfppidh2AJKAe3gZ7WFZZtoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sMUgdoAwS3JoR9TnJ9YP2D1p59ku7NXkvf5Vecd7mip93F5n4szut2Jt8BPSRDbTmNKbJqEXenACiXgXv14gC9E",
  "key1": "nvKkK4S9fhXGXp3cqmvS5jPpegSdaSYBrzwA6LArbqfkmja6EaT4REtYnqqPnaFRvHpgCfjvi22PHY19kunsj3B",
  "key2": "38dXWwnwoLN6mo9z9vk6tsXo8EqnHkqHnF8jJaWhCJeUpQBv7YdqMUiZZnwCXmdiV6sEjbfoVjTMpkpTJAVrQu57",
  "key3": "4BcBn5aL8FajYCCVwGwWqtyaSG5v6htnVQNrwTByBCn7tk12sKJ9zvfk6zJY6GFrqXY2TE1nhkb7LGLsUHi8twxR",
  "key4": "47pkUkGcVA4ULTa5ZrKirD44UsuS91YVxdr6yZE6NFLWsc6GLpcdFkAfXyP8ijPALpBguUpNAEof651XwWBCHtjn",
  "key5": "45hpbsEAmyzkHSs1F7cy5WaktoH689h3jAUEKqv8sagk1Aa3hvz9AfcpqRWfeuppQTMPn5KYdSvXg9oUgqhncZTP",
  "key6": "4L3eSCW1K7TfQe9xhdkZBMR9CREsb7JG7vH9Dhbwf7NqqbAHLX32oFBTSRGjGq6iDMUATWZzQRjCzwRxRJsK7Z3i",
  "key7": "Q2RR1myMeg2C1kwNSx4oA7PC6JNBas2L7f1c5S4Apk8FKeCneti8B2hXrDUCgtTYAU8tyEpLrdrRd2se48553L7",
  "key8": "3Fp47M89AZmADf1yhVoJWQgJSgvCWkSWk9t2P8Yzj7QXL217ee5ByKEVTbqcGXLViSwZd29dhJZHaucuSwirjUUu",
  "key9": "2ziZK7vyyixmyJVhg86pmdfp6nvWUsbUUxy5YrLUZE3FYx8hZbwq34qwkYfW1b43ZUGfzq7u8cjpLzggQgaMGozK",
  "key10": "Vr5Km8ndvhLSaX97TQD1VKxGNJCTz28JDZsx7BqCEWhHyCgG23ruS1TZCxyJYuVm9LvBV3jnG9DVZPY7D4MwqmF",
  "key11": "2Gpkaq9QCSK3msbSxRzy86PnNnFtBtPZDWpmMD751SCjqbu5ZFjVJ8eBCxxJoPdTqF53YEvsfd8eZgLeV3PH4QcG",
  "key12": "Grs9svWiCx38Vgjpp7BPHKQ6bw4UvR3fPh7R98wUJRPEB37N2a74J5RmzhM28ttrBWjuckwTUoMkJewSDTepfjZ",
  "key13": "3JN5bLDE8VJoZtCkbJ92JTazSKoyidPiAMMkdBjn6ijQXR5ERwDXShWJwTmNoAdeuvPR9y6JbY8UEHrvZeoDbfBD",
  "key14": "44znaQypuVd3soQ3w1gyZZqkrvzAsPshceKjMNL3d4FSFCUZVMfpF5FwHRWZrdUm9AcEHTM2ZBQ5HKx7KospxDkN",
  "key15": "4hhnyT7qK9GXwEi4M8baHKVRNjD3BHpR4hfveBTj1aMkXAqxSuef53PatiqbZLMgxMc3GLFTzsad3G51EZsHidrb",
  "key16": "24n7JcS32JK3pf9dTTpMAKAP2b7pzWAmriBEzknhVvMfFciQCnQmrchutNTxU2gmzEtM7nscVKswGTVXv2UxxVUm",
  "key17": "2958irV2vDgv4NbPGpwxAizQhZECXNiagH1UGoTguZfbpKv2AA3382HRMNdCAcDf5AYqqdLRzrsZQw5uRkmzSsS9",
  "key18": "3VfyuSfADp3huNsPosMHztusxfcaZusPpcgDJtfGPShTKDn7Hq58HfaLfkABov72pwyd67gBC4cf4FCGpHKWoXBE",
  "key19": "2MwHYoH2F9CKAmYqL5EWiXChaFY2xXdjhLC9hwX9mnVasaZnoWgT5NtM1HtoX41K9nCVA1c7TbsuBn6F8BwgG8w4",
  "key20": "2GnAHNt7WG1wWykmRfNBfukfrThyv9RCFexKPBM9j3nYL54m5GrZhNWWtGdJTCqaMBkzGVbPMN2ye6ki6NdQwohG",
  "key21": "2MgNeEwdepVZLifecM6cHhDw6afJ3QanLbzpQUMXjkLZeew17256ytCkjbXgbnRtfgbPJmt1f3tZcePK2gGAYwkr",
  "key22": "2iX5cLcSRGfYHD762LSPissFfYLWgCS17FJH5wq1dGYyvdV1xb5Y1Ni1kXHFaKobrnyUgfM5124dRqL2EtJ461gw",
  "key23": "RSsodCQLNcpnLYu2fwKot6iuibGM7JB7yyfry77xWCbVyhi9eTHLDAntpQUBvQnNqr24kWsripTuXSv1YJZMgz8",
  "key24": "41VFKBdVwMYNrYAfKbHcyhaHKgsuuzhCvmHV56yYQmv9PhxYidMBoaynrbSPHrfUCKodaEbBkNLJfxh3yx2zhAqZ",
  "key25": "4aT8NcbxDyz4KJ2RbJ3dv2rbHfqd7Wdy7g1kdaqSeE1Vv57JScsbK4QcYpqn2TGdAuuti8kPKeJ2bvpXRsdc8ym2",
  "key26": "4ZzzQFE1mC3tDgwmecTJ9CPDDhCWVe2Yqyqq9GQ1ukKxXMhxnNSJZTLTuFtE4tuYvPGLH8sMTTDfnimMqtH3zc4k"
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
