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
    "5QN8f2oTxsKhoPNNo3BZLiphWAnabqmhqTfpeJwJkCMkXCPT79uYg7gxyLrwErjN92Vto9rkJcFxA9U6DbDQ4Kb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juE5R5KdJKq3ZQc6xN4jx1WUwf3AVcbCbYQcoioJoGxC3bFHFxeThvVFy46CwRfp7ZCtx4KLgq82PrF3RGbEEos",
  "key1": "5s5F6VfZ2WpgXGFCXtzoimoDSSxmR1PR1xZ5cx23yPb7DM5x1zPBHAVzvni6z2jxMHsuNEDSqFkc5aRGd5LAEGyB",
  "key2": "2oLqPt2r1T1XymANR1UFXk6kA98nbTJLi2P2fVq3eTv82PooaHC5LcSFu7MJ57iNNKb1sXd1RCsVRbV6PHrdmkCt",
  "key3": "5qjNTF96nGSMYWTy1T9CZastKbwPNozoi2tKykVfXYA22qTo5J2qMbQFBA5ue6kjgSBFV5dkLfad5vuoT1xqjr4S",
  "key4": "5iQb37fRzHKhafD3cD6dSzh9NXmaKDQu25DNfk1yNZ9Cp3YoKYGnSVfnpqDqWgGe1k4cqdvfM8tBxTYTAy7Z6tY8",
  "key5": "2BNckjeFq5GR4Hb49qqiBS2W3njb7LBSGkjXLTRnaubX8Csg9XgNFwNEnCJFjXsgrTCHzhSEu6VpAtgZcLQkCuER",
  "key6": "3BQwH8VjhGGm15Y8C4Hz3D5XazTh8NLijtyTZM1qXoA3YUT2NJJnTbmYq336v2KastRd8yff1cqhSieoMbx7Dpuy",
  "key7": "3pRVFTDbnX2PkvwgZVQE6UqwqnaheCA8wLezpgd5PmCRHQXWE6e6KB8WxmfUKgWWggBwtwNB8wzSd9xZQYw5sVZz",
  "key8": "3z8BEJBGMLwpBSj7BiANP5ft8hoCxQxRPNEzp2EKaeGBHdQUvGfcMvXPa3tWe2c3z2zKkcyQwxtSMLgRH5SjFyjq",
  "key9": "5CJnYsxxTYyshuoSQCsQAUnFDK5kzG2ZHFq5RDaykDTwvZdD54F9r5tN68YKV46iqHuHJtS8YTRvRtcMfunft5Y2",
  "key10": "47jyFYGHGNtwwQ1YPVQ9tK9pVhivmv9kK2m7yGDda7QQDtMTPJc1QwzUZaEpX7FQJW8xLbtKnBdqXnFGDCef35kd",
  "key11": "4dPmMzNSKzPMVXWwmQtwUeZPV6twRBfGhXa3MTvu65HqraX1qBYXx3eTNKug3hgzA2iFnW6o9fWmquwHuJpG4Es",
  "key12": "3mHuX7JixSVCnpCAUfDJJF4cbXcf3YZYFppBV51QGL9bpZARqx5ZfJVkT9DCZegQ7UKQhjJf5njUUewkGch3Dtap",
  "key13": "2yWyswAnN4JdLMxMrjxQY8vwxXgUEkbMunY5wEseq23XdSs5GUYqjmC1TdwjvjWWVuBVzpad2WvZJEWo8PCmMTAb",
  "key14": "4PqRo3vfKuErbJa8tn6ivhkuJ3juB8gf4UVkoxUSh5SgEtgERsqJ83nAoZQfdzPr8r8QF5EoW2Nwo6Ghq3phzpgb",
  "key15": "44yRaqawRwCyYQKTwEzXjVueQXax6xLHhSMgJw53g1DBNTAJmD5VfPbBVoQXEEDEaPpKHfp8GSvr5BdWC5e4UjuH",
  "key16": "2zwML3WTgpuMNouD5GqTp5ryokDF4nX8L9EofhwYgkZx7neFAvAMRQ1oZuNfpAseZgYzJYDyfJVYDrfFUuTPsyHh",
  "key17": "24Z1EN6hmtZFQDdfWKWVpzgtGAegh3QRZxyjG3RAmjP837w9EpBBgj59sy2bD72BQMU1RvnHFsZMbp3aemeVYn7k",
  "key18": "24GD82CRZDx3earsYyBvpAN7FtB6qdoDTNvMTPdJWEKbrgHnfuTS8xz4X6KMJTNe3ohPf8EUMvbVr5sM4bEjjrdb",
  "key19": "4fmruwHs4JuSLoXQJHBFdaVJkKKj4mduhiUfyi7NFnM4koEcbEKhEnHsuCk8dF9sBLFFMgr3PYgGHwTHAKFfeZm3",
  "key20": "3yMztvWQxK9ERoXH8Mz6WwujzPZigFJ4xHetX6E4zFJJeKjigbYzgdUibLZQUHx2Zne3GhPVAzYdv2Hc3GejSR2s",
  "key21": "Fdv5G2hzpoUEqruTmqGsGuGEGcdejjkw53u1jVn7PEmHioJb23tWAnJEXAMzrXZkNmkamBTnBzGNfT9qi3s2zhs",
  "key22": "66zcsaJU65TCfV9ReDRC7wfu9jUxtffK8KcPa1Q9Mvq1MS2bxTSsu6DbJugqTfZut1RqXAfVWdmRugriauLx331G",
  "key23": "4FBcDgHyvPG1un6UzUhNNTqR8e2wyt9N5XBW4kBNtyR2ZqswRBuBnSd74NKL85aqadF348xiDyczSGeGVbYazmp7",
  "key24": "4r7YkYe3FfJpRCo1yGjFN9JwkX6FZQW3zAXEaX6AM4eddRuLajVp26x5XdV1iV6ymdiVHLFmYY2kqEbi4yTvq7RJ",
  "key25": "2A1gBrnEoSDyoMf711AosgiFGpfTQRFjFL2mhP4qSnou3UWz9sh1QEm2CnAD1DeuNwMUmbnAgActyTP1pdqN8n7v",
  "key26": "2fabiicBtZyrs1iWdhaSLoBPjb28e6nsccBT5F3iNBYCnJJne82hb5DHHVVbvuVYcTzq9V32fxwGAZ2yGKsEB86y",
  "key27": "3futmX67cmp2viNKeY3ZpQUG4EpXgGagsmwbAMVdRrgHQjnyVCvEcB2qGW3dRHVkqyjDFTREyG3NezU8n6zNrKXT",
  "key28": "5RfZKhz3TSHkh91LyKY3gENB7LnUrkpsARQycfRZXL7TGjSkEM9PwCnQvrmcrjM9HKzjXpzxSLUQaW4fwrvXoRe2",
  "key29": "53QEYWGQziKfpgk7KH1tzkAUJFWzjubJt1ax4AST2G19kZTxqvnh5MuuvJqzNj9iMmUVYHKXNi9fLGe8j3ngdVf1",
  "key30": "4SXbtcKQmhBQKMjMC4JkWGbxb5ZuwrLV814DJRDi2UTUQ6jDmU53hHZyGrggRzgSBwZQEE1GasADCU4FurYHNc8y",
  "key31": "5cb6BT27ut1mqs279BUWneNjRYjr6qZRcMPGZ2vTefu5obqPcqWE3PGYjCQHd4ooUNAndXAW9bZqHdypeJ6wZcDb",
  "key32": "5nMdFubykZ5G5ZLMnDEg9USEKGUttzdo9aBG5etPGdddf6sKZeS6kZ8Ti8Wu5QF71DjGZgkTg9faRHjDtoeyPL5Y",
  "key33": "2Xncw11v2eYxFhc3oPofjiur75g8Rooi49NoAopGiz2cU3TvASzDJSJtqdZw3BH8qJa31A2eEZDUTaj6wGHDJj86",
  "key34": "3Y3iN9Ttru77pZikVwM2ba35PX6dduHZRTLjix7ofGdMUbb1Qab9UQXeHhhsfsDuA7sRaUEyxaqqYukjk1WzGkW2",
  "key35": "4f9xLQjtxoacFZSSpqBRYeivyPz8MUCBxuZaoS6mo2pzbTTJDZZ2YrzeSxoJwXQ8tEdRmY13w4DCLJAFHFPhWpmB",
  "key36": "2DMLZ9URvCX5fXwbdWbeUwgjbZLvEb6CURqAMZWCCZ5mePcFLsGohzTdGVgQjBDxox3CW9G3F59QDeR6KvKEY4AL",
  "key37": "FUCHwnKTMfgWcF51rjicta27c4NwLnxYj6YWzRRL3qXfeBLC2D4FCFmuynqfv8YAgEGKsx25FhdHvCfKskeNhec",
  "key38": "387pLfino1TBDGzuL3AmDDuYk1s64rDhcoxf2FvG1qAHQ9uv6TZeRrgvJwwkUVc5D3cbgwHnPYPXrHLCdVH3Ufgk",
  "key39": "5TcZDpF7wwbKgPDQdqjDJeckzS7UiAyBevE3DfQ7ZM2eTfjrwU9mPPHQ6h7RqPdkT5dwAv6cgMpLYAqNrP5AY4Th",
  "key40": "qbdUnYgJgeApG3jzTYxsrWiaJXKcqUxeobvhwezAUvN47gN4FmsbztEfALFsaS5H8zv2n83u7kC7LufFu8BT7di",
  "key41": "46ViasCfjURwS6PoouVfWYtr6LXDSDdBYXE9AhgdJMoMwVgKZ53wuhRGLfzZxyXf89pQJ4J2UZFkGz3keqjDNXDn",
  "key42": "TPKzNZHXr2j92kEskcH9ngjVmcmK1gU7p4V8hTtPFZMrXnpCxzE1Hn7DW7VViyseGFtf2n59zwoqFxJzyNdZ9Pu",
  "key43": "3FWtyNWbAZtdWrAMPjWMwxpQrTM5BPFEePn2tpuxopDNM9ydLMu3j9WzgXYjdpLctdVQEoXbtYrkGcNFGfzHvoxj"
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
