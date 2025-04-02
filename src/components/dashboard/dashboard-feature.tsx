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
    "2vgky9qAk1BpVpAJkR1mvd9Vai9sTFYMEFZcuxEtDGy8B8vQuBGEzNiSEZgCRXExF9sbUaozxaNddsPCKZWxAf33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gz8LpRAGgEyxab3EHRxqc5kQtMoTRbCVSQj7pkJn35GPa5xaKpTFtDS6jVyfggL34d4iRyYYk3WoUNTQmX3DS2o",
  "key1": "45ejC7dU8bLd9T1FbjuzbH7gWSVBTdJZf7cLFTHEPrXh9zsP4WBHBhSqHFnFA5hookGTKYD6AhaVkDdYx2TbrQ3h",
  "key2": "3bud3HG3FVPR7CJ9srfKye2ZQRtTT3skEXssHGs1oKSZ3Mac2tnD8d1Q5VAybwnCchHtqhRS89rhkRWA9Ytwz5SK",
  "key3": "67dchSq5fUXHWJrRwLsDoJxxYz5SNCcua2d2hv11VA5ttHXUXMCBZDM9FvAFkjCcird2FXF3uWv3HHKwmaSxDThn",
  "key4": "2dF7jKuBPJwdFXoDJRQfnuavBhThcMijEnbMp2wWaq54gkke5eJfaYhq71FYpn4z4xp4Xui7SmFhLojPKronJLSE",
  "key5": "3EceiZpq288veLM5oxuUqbY3AzxRWz18f2icAaerNfxx1tFwFEe6i5MGSUKPsRA4S3162g7U6Mi2PBRRR2Q5viZR",
  "key6": "4SmYxHmajyMzFRuPTM7Hk6cmjrC4NFnpmKedtJ8LsuAa5bN5WGEHYDiywUaoJPjN77TLuMCZ4o3DjgoEYsXaegfS",
  "key7": "3CJ7YsjvXY3kVhwwSy1QgHUZSdLZXvycd4kvyEVm3nq4mrua6mm47cmw3awvaSepnkxnG2MKsNqPdxJ15HJ3XKSi",
  "key8": "zyMKn1rh8mTiAocVRFwV2YYpmAn7rRSCCnV4QfVBWqR1t12Cj2RSFczDBM9f2UEhuUoYXhfqw2furg59MXknt4z",
  "key9": "2YAdqRCBG1v2ocCa86r9YFJq5PKZQmK4qrrrNL3zNdwKZvtLcPcinhFofwQCbyHHXnyLhUcAzCn4h2WGuJ4m4kjT",
  "key10": "4Fg8aKi4jiEb3TWdmQvpnkboJPYgCvvVyg2kqiW37Szv5castn5B3CscBfapEN5xCe2zA95dJ9dD8uZ7yequnDxe",
  "key11": "3Kk1pBU5QVsoVdxeKUusny4tCkqpqa61ZUkjS3jP7AFXxp9AtNi1n67c276MBNUrT5ytaRsbMnsNVEzBqTussYs5",
  "key12": "iuMNL9tBRLmWe2euxS4oBeqiBSgFsg6xkniQWRwVgGg7JEBvnsfyXKN1J2whTMhmGew1arbupDyQaPQKEHnTMGD",
  "key13": "2cGB3mNG1QA5kr1vqcuVfGQ8aPLXiS6zWJRxV4NTGCVeJGBiNFj6tSVsmA8KRqPoU7U6hCKExyjuwV9UPbJCtd4c",
  "key14": "biFKYtMhWmMAe5fQCvgCciVcSPjkxorhuu9iuNeAPfxWYNDKJE4ccFCGBK9uuUgqy3LPkv1sRLihABRZTecLBeU",
  "key15": "2Hjzhi8uwpMPuvEA8DFvx9tXtTEhLRhW8XHLakDYP7VgJhDGHZL7vroJezb9itUnoFVfU4TJRkW9RpBM3rXu3B8K",
  "key16": "22tPsDQ3N4fqad8KyXCi2fomrEBSrko4TAbHvtmLc2m3qdicqvNkHuKiLQyV1CtPTAdnMqYGAQzE9VWygdW8tk6o",
  "key17": "5HqBhAXAPxJYwo5HWZ5kJbYiWe3quUkHSJdBFUupB4kLXuLapPaqRsGy1R7j9UqLHe6PA1gNKU7ScAgbC16quHgP",
  "key18": "4m2eCHjTvWTBY5hMeqiho3jsPZqKhg79E4byGT6XDoDstJEMuEioLt4ADX4B5kgAvYJR75phojZEzijQFYwj8GES",
  "key19": "5mbX18iUoj6wqNtyRqdzjEzc8rnMJf7H4hxTFKXYdcR4CKB7VNAooXj4Lh9HQcNr3GDGVhbYBjfKGrW5a41MkEsu",
  "key20": "4bkKuEQ948BxqZ4hr4GC2wkJn2Gt2dk2z4RbHKd5Ve5AhyigV7yfj3mM7JGkuU4cf3MYAh8QpnMinJqffXi7sFQm",
  "key21": "5dLbwVA5fQ4YrawYqurvrwnKNRSeExuyYDjd9uSYmVvXZHXcrgNHd7ionBEB95e19UkkLohsK17C62QU4YDgdfrL",
  "key22": "2NzxirzPTMX8BgtytoAx17yAu3YaM3ziMpg52t8QbEHENgHnY1kh8Dg5HmgPp9dRpSRc4oxsZSWb6ak13meoqfAB",
  "key23": "38SkmQADHJ3mnuMGGWraZCoFMoEMokxdkHZoyyWCnZjo3EMS4LzPcP33y9ZFP7U4rHPrLt3QK7vWePRZyYyxYwKU",
  "key24": "24DLf6WT6gXY29HU86iF63QpQVF9eqzbrG1Ah676oaJZwNiSzyfirXPU6pXvrxHUkM6e5tQg8zVcoshAya4MprR5",
  "key25": "2h9jNUttU5AhF9btceDMtR3opAxwkUtfcHJkap9BTkB6L2sHMYs3CP3T113HrzaKUPwx5fwqy7mFUMwJy8B93yBX",
  "key26": "3NPmds4cx6gi5CSkQSEnwBYe4Ywqg8mCNHCM4U235tPzYLXr3DA6XM9rsVkJLMhZaHBWiC61GyaEdhpUEh9hjDMP",
  "key27": "5XsKDTnkKkJvpDy4QXc2Xwx4HjGtBduc7r8FoF3o4WyrttiK9hY4R6jWNLddRCnL4coTaPnrrgrDKfQjgvf9rAd8",
  "key28": "3tRVzgv8cXQRSZxsMDGV6Eodt2SwnTwyT7BtJKcyWnstvCbr9bGyz5WVB5RT9QVkCUPM4rXFJitiCZtTwSHmHKWF",
  "key29": "4p535e6Xk6VbEcdCPT35f6ujmR7gxjwzYNhZbRjbTgcxHRwvsXnEEh1oEGxvKnfUfhZccFW6grqbTTPCX9ZhDoBF",
  "key30": "JagdNM5gpMsX3CAh3gXfTsgGxVR2vxNy1bTefa9oMKJvVpyAUe6ikLJc4aomiWAvAZtCTjnNwaDDgE553ckJdYq",
  "key31": "65Uq1UdtYqGki4BxUbEqA9nmtv5kyHjNQ2Haq7vdJAq4m7BqSHGh4YacSzP4Z9EhiBz7K217AEMMLWyiQMiGV5bQ"
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
