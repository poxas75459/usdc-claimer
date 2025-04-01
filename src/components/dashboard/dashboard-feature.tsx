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
    "2rfMtu1NQmiz1P1ci8EymCiuMyPYrFABGgBsEJDLwt6iD3UtfPYKYKDP2Q368F4BrUhtuz1x12YuViqD3rRXf9zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3pTMtoHMPkdFFNBknL4w6V7Niw51pYvd6gGgNPqqDFKBeLWjMJr28Z73tbYf5GHfQjgL22Bf3jhEaShVoggNBP",
  "key1": "2vxa36eGJsAsedbDXTAVU1p6fE1Jj7ESpBYvxm6aPyFiz5zxossnPLkHsZWjE9NmQh3Tf97nfqaLxcqZUGKoszGR",
  "key2": "2NfVgdwFZ8y1wGHenSv9kxx8ga4p6XYkWoyrEj1VT34aTDQYAMeqUh9SkjZHtxTG8X1PKqMiGGEMfX3GBSYv7zLB",
  "key3": "3u2tBBhVLBcnmE6uCfyNiisSrVW7y442w5c5DyaDuYxQcYF6YimQ3rsXX6HCqHkjwgVjXWamTCnUoy3pb3ZMFUUR",
  "key4": "2wrRXxgdn7vna4k6J4mKNJFZzRKogudKz5AoBBcysvPS2sFdnWcPxGagVdC8d9XqvP8RMvPFmtFMgHzGYiuSjk5V",
  "key5": "22vrMkwbgqgqBKVFs4EhkVFF7S54NRLB5rBRKpzgr59DDqyB7XZSH6mSioHDvr2RXWiGbtqJyFpJ7YMjogiE5eQZ",
  "key6": "5EYz5wkVSGz2pKP4rXYaXvoHQL5Nop9qj8RyKvRLG6GqUDhorv936pVfdXH5Qh9ihivsqsWQHXa2GmpgjurkM5JY",
  "key7": "RHAeR1sb9jJ4pt1CerddEjv4JW82FQrMRFS5FopW7Wf58k1JKvTZGKg5JVCuzacwvMXDkVqsrkL6YfUs1fNo663",
  "key8": "4iR8JzmuNhY2XNpdQxuiYaKpBsz172ApX5nAL2BcnHcypFyWhxNaG8jrd6K4MzW4WSKhaesKmahSLxNyYiYxnVXr",
  "key9": "4ASy84UasfjeWAorCGjhrtnGLXyz9bbgLSaYUYpkybbG7ECNLZjsXiccW3aCNbHhi3JAU7Y9CdkYZ8RnBtYqTEKa",
  "key10": "3sr3PsgnVmcqNJogG4EwCm1D1g1fg5P5QFN63WyTnphUHjLkVvDx12JCXmxDmTBPdDYjriwjQU29Mffc7f4cBpjd",
  "key11": "22AW8QjxUk9Upx4f4Piae3tU1SBc5hkAgbGpRfGKgNydAT4zgvewWWmNgu7ABBJRwNw5prqTHqn9LL9XhyfrvCve",
  "key12": "3AmaLK7AG1Mqo6mEdHjw3SG7EAJEud757sc1dTasynJtxgyMEBFYovkREAthvJur6c3xWKTMXkkEdmtdzn1KUbvx",
  "key13": "2rc9KU1gfxaVcGP1VKQo4VedCZH7tUqiskCh4fde9SikAQLXgDZCgn5ebEbi4f4H3W4DvTxtPescQVYUAkE6fCC7",
  "key14": "37TGiSKsehCPhoS9khQVcTxjbg9WHdPqqG36Ha7tw2kSGcBqSy8TPH8owfVZBDUx4tnoZuSRUXQCC2x4z7EBpU6y",
  "key15": "zuJvupcn6YbG8R1NxrkjS57DuZhH3JubnNKNwdLYPkpUZd43gpwtVo89JLzP7EfhTErSXKHXVKuD2xELpbPBU8T",
  "key16": "5pGesC34ub8MTP1FZmcR7GZWwcsTCQZRCarmM7HqJ2cFNgcP9CH56i6hWbe87b68EkBPp2JngTxq15rGCKUx9Ngy",
  "key17": "3E7K9Knco5EoaqdwVLivFTkRzTWyRDDh8sHS5BdEhWpaeU7hSxckfSxtstRdQE88uLNNTj3JgdsUt5U1Rq6CwcoW",
  "key18": "5gLriBYnDVwqzfaEa5D2GedrzEafdxRzypjDS3dUDhhi8s3iGZWALPyGdLKfseYnoKDz9mvXCE7MzBsMuwEYeJBx",
  "key19": "448EVhytBCv3cSgQVpwxzJy7mFNyqbhn2BiAGSAuc7bBaa5BnZSKGgvt48roZEMuUN3WLwHmM6Ez6jSppj3TQN4i",
  "key20": "5tPuCP1PbJTvAvy2mmHuWATs2SZicUaEXM3o9C32LMELL7tJ2CkWJTCJrW5b82X8qKRHG3Hh87kcZ7WRVL4cdM5L",
  "key21": "4ekVPaxFsKYbpMF12QACPqNgGjsGrLbte4Uu9ZtEKDuRiqCamLsYSbjZ994bdvhBrNN68JwRRk6QvU1V5TKfWmPc",
  "key22": "57WheS5DqEgkUVgbNhKjfRtSZdnn45btodKwcoMvVDtc59JWMBQa2aqjAa3BfkJU3co9hc375RV6YR6XMNmDg7ZT",
  "key23": "3VyZUuBbHZu9j9cN2eBKHDapxR1U8mq5x6AwRcKJYfYtfUmiRGPWxaLqFPSDko9V8aMzodygKFo2VJAW7Lzo5JdU",
  "key24": "5qhzWJWtEbwY5Z82uwECcM9gLjGbjVCEuhXfuxz9Tvp1b86vyxBajHRsDd8mkV1GpFuyuqaVTxwjTTsayFmHk71g",
  "key25": "4QHVwrn588X6DqGBQExXr9vvfMSc6oHqJ4xGzUpD8Gz1CW8eaLK3SwEjchE2RfzN6s9PfviqaNaurbs3gegVwY7t",
  "key26": "2Hd36kg7LdJmx49NyZADthAdSc6R43ETTFUuKA4mVURHcihKngbPaCWjk1p2ioso3buP5RzWiTfDfmcu5tFdman6",
  "key27": "3zj4vZk9vAqk2DMjzqNJSSBCJeiHaojTM1YwUAp8P6avsMN8Y6mdr2PgTumgEnryczjr7QTFhQY7umgUfCVwbvth",
  "key28": "4bmJjWYXNnx58PdDzgETsZ2XLF1bZh9kKTyekfBvfvyAmNzgNyKinxkg2vmbd5ExXZDWmBAeg3UNYjUPCYr216xK",
  "key29": "4Xpu84H1XjAyrq4VLrWTgfNTmSbJJCSC2uw5HZANchugHmUB3aTHtJrdCUsWbGexxR5wLogQxmzVkEtebLqb63Jv",
  "key30": "j7Nn1buShr7J4FYpvnSn6pzVsTZ3PkkxK3qRrN4TPvJG4q9cjccRmwBSHixakckFVSKq6TXhpnpoZozyTk4WkZZ",
  "key31": "39DUVmTDJRvw3ERjPPiKGQvbK1fZm5x6CHuJyoz4pGL9eimuqSGEoQoQU8PM7QAUMbXcxkv1N7QUzdRT18A6bUB",
  "key32": "3BgYvPXWQ1agEPE4aJe7Cq5tDEqCDke3EVVQtqjD7UHP1M2kaqQzZNBi54cccgkqKCBFzRNF3fP93s78ZERM8Mcb",
  "key33": "5jtMWAerkt1az57pqZ3e17H8e15ez8BcpYre5QcVondmsCDJHKRcC4GommikFcV5b4EFgbrHHoj44y8MeK5CGWwG",
  "key34": "4RzYsvQACqRmSmfVJ6TiYutaHyAcLc39GJZiqTyhDwdwsSRmR4WEJcxLe6AUFZ7vtLkpZyVJkUbK8oRsRCqnzNHU"
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
