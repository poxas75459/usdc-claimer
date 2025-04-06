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
    "4A3vqgg7bXZMgBqnTTbjK5eAuLBiJ8jq9we8DEzWjXtkZ8Qems1QDobBgoyhRrvnEo2pyY5a7Cn9TcdCnjwHJwBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53R6V6VTgQdcNoeEx62nJ2oG5DtxXAwScxdeHTG1ShJEFMbDrPr8HMd2UCPJpxcSbFiCjTz8YkQuQWDRhN2GHXhh",
  "key1": "4qB4foUYXig9ZuSEM2Yq8j2tUwzsnkybLjCYTtBe8Wc7WTHCVHwDofsnGfKFDnw8owqx9cD5UMHdUbmi99oN7mWY",
  "key2": "j2kb4zDYzdi7aFUVYXBNaJAUkrq19o1FXhhS8aDhGt8hmPLbNie35BmcDbrthLAT1goGFWQZ7oQr5XF8S3ueCRu",
  "key3": "4iiKs51k69gSvGe9bBJtA5rEdhtWZmnadhNEarZaTPg8Ld7B8zn7voxra7TbvBBXixNJJgWjCA59fyXbZCZNoPf6",
  "key4": "5DkQArpqvj7YxgDZtxc8MMQvyoVGKqtPwHQZXApo1u2HA2RhbX2ZMgiVq6EaserS6RkfkNzKJudL1MVTS6zzWEtF",
  "key5": "5Roxg332oCKx2h7dQLf7axL8pekKH2nZCcvupNhGmkZRcibR4YPJZvXSaqMmzmog43wC72P56zCigBxZTEDRVSiv",
  "key6": "3KoragRdKMcmJ2KjWWihbfL2VppTFF84JoHM199GSYwPkvHiEFyvU5CrU6TUXaWBRZMkHfDqhE8DcuLuo2FzDrRx",
  "key7": "2M6XU4wm3oDBsPEdJADxuT1z9g7NXmze7vj1pSpqxvHosr5TJQX8gss7854Di8NoKeth6kZ6k9VJkLB8GXc6cFYT",
  "key8": "2KSZvPLxprbcnD8HtHKjnRNLmNou5syMhGpA1BrnsJwXjicvxDs1PSndY8QbE1BYGFnqVGdvhwkhsGXY4YdjXkqE",
  "key9": "4QhyuR4Zh46gQrCrUMDUzTrpYPAiHJJdRuen2YW1d492C1ZPSF11GCC3ZovVLLmbzVCBizePNNiUEquNx8FHMarh",
  "key10": "3hr2awX58yHCrHZQWQs6aq3g1T9Ntehtn89q4voL7wS8subT52Jr5odcnX6DQUF23LUebiS3SoB5acm4cYAFRPNc",
  "key11": "2cnwnFXuZHGwYTdXvsi16i1SRhniMzengVYie5buJuhdcgFzCtLLe5ASYSgzFZ9KgQ43NyzcEUmra4NmtkatFJaS",
  "key12": "2WXWjHLGuZw37e4SjxjddRdJ28Gq643qEYWgPfMU7Enc9S6CJ5SSSZtYs8b8eUQpAhEqbNAcLXkwrgVhq9gRfxLa",
  "key13": "4tnUhTid3o1Q348UQLzon6dL1JKmsbyvcUF56oQMQwE2BEnrHUx3fnmgMGr2C3rgyAprno894aZBeLL3rjDamVHY",
  "key14": "4Tk8vLgurZsWSfAKDvCjauX46KSuZ1Ys29pa113YCajc17spKxCQJ1UQTY2TheHHfxehcpLqNHvKULFgULowvVLQ",
  "key15": "3BvYFnmVpXLjvcX9xsTKm1ChtEZH5sD5KdmZDZxRoG5yfSRfDxX7SsGUTzRk892EDgAKRujrNT9DpDJDzrET3Lzc",
  "key16": "2WM493Gee6JN2Qkh1KsQUfNZM5cwjKyKrhGX9qEQxcL7LNA2NjAhexEjH1C7E5Q8BTTBAqi7RVdrYapc32bpChnB",
  "key17": "ycvXFMyHbqQELX5NxBqFqYvNSv4fET5aFWD9JBLfm6AbJ4P6yHa15hwaJRMmuDm9ynkB7Nzeqfg9mJrt6kidA5p",
  "key18": "4mXE8WuJMp9STcwbSKqtTwPLgN1j6ZLcsEG4cZHKStmCdZH9stCfLp4njrCugKWyezuQkUTZXkDuBkcdtjjwi6Vq",
  "key19": "dVfTjDSJarrFH9ucJ97F3HvFsEtNAM2cVYvTQ3GzUNeSLCg6oNrCoUFGQRyqeZXaPfP8M4SKsuVkgUxybyjPnTY",
  "key20": "XMtZL2ycoPprhENK53GofbGxn3A9oiz1tZQmj4w8hr7H2ZhPpCHdBALv3oU8X7FKgXLJwM1QFjKFDVBxHxVa95k",
  "key21": "au9ggJnwTxmKKG3eX5STYE2pmZDB3bCAJRWcF44uotui8toU9mu7DRFTfxSkRyHL42QiLjfSNdZTmDpQ4tseLS6",
  "key22": "rw5Zf3HE9VM872yTbs7wJrZZj6npvJv4hT6nkEKHiaoAY5jJ17m2DhP8Kbax57J3Rjcotx9kVgsxvho5xpS8Ahb",
  "key23": "5aSZr2GgevcFBURWer1aCyf5f5VUBK7ktok67zMbmqsiYBrt51rWGMa2JKrzGQaA952onhW51xy4b41iGhmsFFcj",
  "key24": "VdefbjyoNrEpipmuWM1ZnLbJV9787xgciP8SLH9mjB81Ry11Puj1eTqZPSFGsEBfSuYjFCcyS8aUNPAEinauThz",
  "key25": "2Do51iD3e8LgqaNzNKmsRYgJb6mBCGgHuxqjFY7sfhZB587BgwMsSBAB3GKmQoxB7Tqj2MqGfAUYwPCsz6jcikMS",
  "key26": "5h5ZRibXn9oUTWJq4k4U1FEPmTskN6E6wQijz7tzyvAbNJyGokc7aeSpSsdLGETahrYnmhrmAMMWp2kDx4FSHCN6",
  "key27": "5QiMiogGjR193G78z9aaJhewiW9yxhagDH6GucweEaEL1cQryQCoS1EkPRKyJ1KSCzM1qYzHhsxJCaVpo2yFh3JL",
  "key28": "4qXsKUWsyvS6sWFnsmd1uvyCDk77pmpsxq9BkU1wL4h7GqppdCoqQbqtsUjRdJtm69K4sPpQESYQHynJqb812p6o",
  "key29": "3YuvABx4S4riv5dx67gcVqUdVxuvxZcysLxAqP2dvoKQjgbEqJpGG3hJNLMt7fXMH5HwenrAYoJ1iApqZZDGPc4R",
  "key30": "2qEK6nG3XR46tXTL6Jq9tt1VoUv3HfvZjVQLBfLNJNjoJnJwpvgvQayGgpvTvPFGwPwBqyDvfHNAJCmZu3DvJjwG",
  "key31": "5V6BNk7gjUnpGjgpvFGnC4qKEGTCtzNRcUyzp9VMZQ96P6CaBFvB5jH7qLi8pTMYYrVg4ryHG76y5vZeRGLPYp2X",
  "key32": "5KHWggRynhSD9oBiYraC8fKhapJvvcLjQj7Ar2GfBMaF1xh3jLSRuuHzKPE3cPZT8yEDCfuyc4nL6C9YhJB97f4Y",
  "key33": "2x34RN2AZGv18qyrsHgMFrmzDSxRLwhDFwB7m92Xhpt9a8EwJzjvvrwkk7iBvKxGn61mkdnG1B9CMoMtyV9bZDkd",
  "key34": "2txnwb4pCQoiVvdChyRMr7e8xhkAuqT9rTgXPey8gfgPGh1VhNVbKm732vKywEq851uVBkib7HxWhMQi4972sAt4",
  "key35": "4SzpoZti7neg8viyzAMb9v8AmyKh94NG2MjuNXEcTwfezDKnp9e2buE5oefzievD65pHswpCUpjMPg5VtonYu5x",
  "key36": "2ZRUyfZZKgfExK1VLUPnB7vBBfBSR8KE1QYZcNZZffemQXCkKqyDU5aa2zStDJFhh1o1To185NrRP2wFm5HbmgzS",
  "key37": "4igBKgPY4VNmyj9x4gBPiSTZA4kt75DGRkRhwodSQAUXqTw9WKwi3pQ3Pq3nFpdegnZr3xU1QYQRjrjp9jQtQFe6",
  "key38": "55WPeQhovdCZMDbY6CB2EMfR4zKbpgS13JmdCnxPsPxRyF448ki9uyu34EHoz2H3RMEStmqffzoUZEx1yAabEQKu",
  "key39": "3HWs9yuiXhSCLE8vCi8N4SFrgVj2P2Lpi3APcU8dkjkEVkfrngcMX8SosSxvhE4gjgxejAmMMwxEAwCCdF1uT8P3",
  "key40": "2ManSoradkLrG7RQiqVn3xAjmPzjpVoXBGjWoaYgyc3jQLRvLV2xhPW1VD87f5Kf3itQ9D4nx6Rvmrj7i1cCusjF"
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
