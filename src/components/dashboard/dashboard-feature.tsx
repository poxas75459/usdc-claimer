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
    "YaREudisKm9GLFWcDH3rKYFLkjDrBPEPGGzjTpYss6gTCktxm4BRbHYQ5J3AF548H7BKvPeANxAquZ8xFCBQmVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59A38czjRieykNqhPGM5nvrrFgPsxhLufmUWwmP9XHV1bEYoW8ESjy1uF8zVVKsHELsVENHtJK1PKtcxzw1bo7hR",
  "key1": "32SQoq1pZ7gcGwEcnjw5csLW55b6GCoSr5d4D6U1FPwX7iGDDsZJtHhNUpXyhnquv9AbseVebo5o2miV89kL8tsr",
  "key2": "2rodoj9FFZQeCF5Gy2GpMpCkzDshS3HUkRR5H8VL4CRjFX3FwQYSav3P44Gz2cqX4r7vUvf7iiT7xJ2kW1GBNF7N",
  "key3": "2cZhr3t7NMWLYA8nfxapiSxPjJjTkriUTYMkjPnhHLfCt163KJJZphhcYxEB4oRtKtt4qEZQxnZwwbnANun5hswx",
  "key4": "46bXeSgNH7FY1epoqrq2Y8LHCEbFWNf3uXZaF3cvJXLx57DzzgvSNDfmGZHDN6QGGb5Wv5jZaMZq4rA3qto8jAG8",
  "key5": "hi4XwoJinefsESjEBaoePp6hWCeC5T1TXPjXgLxPAGpwJJ9CQgH55h5YipXaU6u3gUoiLyEf1V6WcsBPrsbvBqp",
  "key6": "4r1HjD97eAhkyeqXg1Ho6vDHb5Q45A8Cxp55araVD5KWPqYWu5HHu5ercp4vFJoGVRVpqL1o67MKSLmR4D9bnPFS",
  "key7": "2sTW2j5GBtGM27uXqm7AWtfkPYiKfYCrT21xuMXo9FaV2YjHWWDAz7FV5rin2ouSGDi9SBfbdSycVvftpZ53hHpp",
  "key8": "qZTueG99SR1YaiQSAoi2xD4aPxYaqpvBzpEMHmr3mGoPEb45wJhS34Lx5sXWrgJfbx2XA6HcFuXN8aaqAZaheMF",
  "key9": "3jhmkfruX2kmJ9v86S3wEpmQ9kBgSMrB9bb5nK9J7ywtG9rSCtzhddro7FDBELe8eaDfE7fikA1qSDhFVwC2hYmh",
  "key10": "2511UZ1vx1UQoroJk5JDDZya4LQdordTvdtfkq8xw5xdLFhqpxmTHEuNwSeEKZZwWP2k9UpTsAbDQRo1aTmZYuFj",
  "key11": "2G59GYzWBWbhveLnJv5gATFKtMJGqpEgVNE8DWDVivBANukKCoB2um2Z3mhDpa8E3Nrc95a16bqGCVYxvvUFKhZj",
  "key12": "5GJyUBkCNYTMhdKsRXJiL8FVVBxiUHm6c9k8og8w4WnVJHHBP77Xqpxnsnd3XePnopZnwe3JoyWxS8oFD7STtXnr",
  "key13": "2YeSYXwHqQDkAPgMLu82aG5PQxagbUjZWfhumh1qM3SRCyG81GimjcV9acQvLBM4S3nHxdeFuRZVisAPo16HSEZn",
  "key14": "48SaXafJ28VLwk3aZoEB3cboaRLJoyHp57dmMBjT7VE5oLraDa2eqzNtUZ6ov1xvBNQtgX2ygb5YEWyiL49SveHk",
  "key15": "41sGjM22z5TBnGCxaxiVs7DMWan7g7Yh3hKq995KNcA54Eh5JwZHKriPseXs949xsQ6Th3gGbX1WY5v3snkrPk16",
  "key16": "2QiWGxERQNZ28kpf6giJMCMbdJt1u7hZHJHJ2ZhCSd8vJK3PANXPqE8zYk7twwvQU19rszpATbygYA9UEEbzh1At",
  "key17": "4WTZHjSFXX2Mc8jJDkLuuLANx6239bUrmCWcCDFBZZXcKnuwXvgwNFFGrZVf1qoNpiYbMPXiLLT8pDDe2pvrnXnV",
  "key18": "5YinUdBvni4y3WtcgsDmzid5FhTq36WJD7VkKqHi3Z6AS3DqDacD5cdrFgbqVgpGm4phf7PAf6jYwhTRo8jykCeA",
  "key19": "3vspqjmFBVfXGKsD8LVFUA55coQgkGdrEYe8VtY7aj95wev2HxQJkbGpPKi6VZa6sLhC1hac3vPSkeM4ZZLWBndc",
  "key20": "482PzTYz5ww8dERSaLnx85vuBmChdmcH2ECqcoetmgsPeu5cVuWx2gU2FcVwpUmRwS1Nb3yCzaRHwxDUEYqcY3kp",
  "key21": "vjUhvU9gLvgCv6KKi2Hhd9skxPsUjnTGc9BpBasczyj9zs1mFWYcyVUHjECnDnt8UhcR1D7nnW3eJ7mgEf3MN4B",
  "key22": "4GTqK38xzTrT2zSjyJjoB9rE1v5xsQX5g3pR5RmvVHqzTfkuVvzoZZoSo3yGtbCeaPDzpJjYqVVYEFyU5gknF4in",
  "key23": "2TFGctRRHhoCXwrTU59uvi1QLoyu4wUdvSsyHrdZPCUALfNe3HwYubUeiU9SdnZ2R6duRJDcEqkQwkJwezc2taaj",
  "key24": "3WihTdokp85Q5ks39oEo4wCEvPDRTy3tcQ7jDqcakyVRsY1opsqbcKZPs73TDCCznwYyA2BUkNTi2VUnCxQL2aqH",
  "key25": "2xhRRGTioyGw4Lcuj7uT76RRzjzfxY75VcuTzVdDZgCqz2cSKrJEU9ZeD2QhQ8MFtihGfaz9RuUA4haPtVy8ftaV",
  "key26": "CSNdx4kSBdPdNNmPABgAWZJfcz4ebXDsnaWxnj4ddgjsSGR7C1crjrhgjTpWnfstfe1RtpidjiN5X3W1b3yCBBt",
  "key27": "4erq5ytX6AuMTWz464eUHa2fXAKamzTCjYQC4c21ne68FuuRetNuRpYT9mZFNZhewVLJJvzp15iK1W6Z2pWjW43x"
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
