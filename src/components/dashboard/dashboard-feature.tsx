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
    "4ci7D7qJDU9j2J99vaCt4ioaXYAcVoxL8QqCPM2gHGrjvtcw6GdCnxQwECEzZ1etkGnHu14zNTcNQXJTvf6a2PYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhty73Y7akJVM1S1ogHGBwvbxKB4PWmDTbxCnxsvCZEGdCVk8TSVEq2HAme1o8SsVzsuGGVhRukzZEZpfaTvRFa",
  "key1": "3jETaFziJrmCxYTjy9Y7MwWuS56mXza166uQbUS7Tt36Tvz3idNeVYKNQkejQj3Y5WYFpzqr6zJswMKBbWAoUKRC",
  "key2": "2XUD6rZMzm3Y2uhLAtMoPMNWeiveQY2uNkvj5iz2rvavLwCJoHoudfXUr6DU5k6WagtdUsiKP97RtiSMUh391MM8",
  "key3": "3oCbD15Ky8puv1Uiu7EmYmXbT3jcpC578G2SdHQX6ezTfJdbNDbUm5qhxzUMWKLcK4WsvSXKz2x2JhAnfiseBWDz",
  "key4": "48QAFogSeXt2fJorur38WgWqcnxTsH57YqN18HZcnUtcpRjkGc42VPjfdUY1XfzSERpUAKtwPdFXdNrncm6CzzkY",
  "key5": "2GoMJ97BUKeedftx28qeZzgwYU6TtXBsQaQmaFqx25ZLwQ3zRKLdGuzD5nEg18cHyYGmZgxeqwcdAN4MD1zhAVg3",
  "key6": "3vJgn7v527WGrurnZXW3aTm1s8MQ3WmH7Unb5FodmCQKh3x7gboJLWa3R893Km6Big3E5taGKMTnBTCvDyiGUAYC",
  "key7": "5WV47aFVex1U7xWpVspKc5EarjjC6BCpsWsPLg25mg9SApBSwnG95VzPstCmfSAbJQ9qRiMXMVWXgZUqkk9nKACu",
  "key8": "a3pBFKJ6mpov3PuUfqoUWFuffpxVepCZ5f3iuxjJrM2JENqWjNfGTz1vSwpZPvwpUKyFZigVvDkjNtnAj3eUcjr",
  "key9": "5FjWRm4f16AoYKhWVrroyTdpfYLwjydipPz8buf73FLuhrMAR8PjuyWRAdXnD2rgoPXfKN4ueWfpmXSyJPTXajQD",
  "key10": "hZw5Cbpee6xRkC5oipcErqrXha7k2vGPeRSgjuTn2zaUuZrCnfgjZ42fAQuQn2nvfBX8MmSMtiZHm9Pgjr2fj2f",
  "key11": "2Q7dYAA1Bq4orRet8PQSYCTFRvqcTgnWwfHK95t9nZUtZysFtjS6tJkhdrFxsmHf2L4s6nu2ThGL6MVWNKotizSu",
  "key12": "3mkVdo61aDrP9aGNFPeoM6PUxpAJLyNvt1CPnfJwE9mTHfn8KNDLro6xsthmJGrFxTapQTmHvrWKwigQMWwo2vC5",
  "key13": "4f471aLQsRiFjHUbLSriKovWtHMWdFunh6g7agoMNRQjgKT1ACzgWWmpHHGL7k5AogEkQiu4bHL11wP53yGkX3or",
  "key14": "2L3hYMYPtuD6xLFTDamUyenqKscSXn13Wk5hSgFprXoU8bkxquZkvHMyhhwEVmLXepNEABCDvvS4nYPawm9dQi2W",
  "key15": "xbeKgstnAAnT7zg4pVEjwHBqtwERgr8JguZRVtueZmPCuvocXtNYtrXRqK5UnS7Stza1dkKEFP4XFbTJ1nJKeb4",
  "key16": "5vj4Eda5DfEv4bdn39q3Mhk7okp4jRVK64RKvxeue4meuPHkaX6ZikVw6brKFbW7ZpCF2VC65fFktcFVUBkQXrHC",
  "key17": "QayXc6B1jYfU6e7sfsokPd3xA7SRbwk8f6ocsytCjgeN3dNCKh1A35tyB3H1jb3Tzm4HFdGTGM4xmrbjW98RF1B",
  "key18": "53HG13SUSJsNoQ78NxzripeB5fPSSkDYGFTDNhEypZ89zE8pny7AJHkHiUu4C9X21P9KWT7TSdTqkCNCmMbuhcs5",
  "key19": "5ce3HeuVJqCxSyHs3EtYK4DdnSELhnrAsUMB2zywmMU6PnjPj45grqsVKsXP5rTQuhmo9nmE5g3sBSVc6rRzYQRi",
  "key20": "5aaaHGtEXA3LMFcr7XhZwroN41uevtFV9LjKfXAU8PEAZC4uQpC9NoHoxMsojtCYVCJRV9WZaqD2vVEBgZF4KJfs",
  "key21": "5HUAYu5gjfFxoQtsXhuX2FZiuKerZC2CUqDmmHEXJukBJHh4AauYfisHXsKV2Hm6YPNjwKTJTa5t5vWEXiEE9tY6",
  "key22": "5vZYkc6vJ9jgSKtcahP1mchgkWCorB5HaK4KUFVNK2wHb38iJte1a6GYPqaq7YyjaZYxFtgSEZeX19wWf9uEzVbC",
  "key23": "vG4M6jKUTv51Vxgs7pmqDQG7hX3HR6kEDSVi2xjLP2QzEF9BBYBJbym1LTBjKWh7RmJtPjoyCNaK8bgncejCHE2",
  "key24": "23PwyBjPud1upwAjvYYthax2LcfR8qM72LgiK2UexC22s43TWzDkktX9peUVha5u4NHQFmTNjFafQRx6BpDNB8kj",
  "key25": "3ymzbHjyEB33VWSdvGvqxmPc4yyU2ynTibBtPuPf6AKJDFfT49sLjehC8cJmkS3ypC6GmVd9cWYguGypNwdj9Zex"
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
