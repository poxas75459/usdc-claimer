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
    "8vHjiXCvMkqUP8W6AJzPqYw9y7dsTzSf8Egrdk6npvQ1eXCBhtT9eeKG9jrYnmvadaWXPxLM818h1Nkf3mRmJom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDUjHQE1nhjrd6WMk3PSNHLTPSxUpzm1VJcV63Kg5K1Ngu5iYjdkptyoWZeyDP93eFWAaQjCTKgSRF89kYXafig",
  "key1": "5DtkXde5kBVdug4PtVQrZMpAJR22cHfB1Bb8kA5WR82A3wHPbJokrsPqayz7yj5p8PB4LvyqBxSe8BZqjJ4rFYBY",
  "key2": "49K7bRxYN4dXSAhFpZACS3WSCBds1VLgBZFpfNzhsbswxJg4CYaduBTxkzNDRXCzh7D1JexxAU3HJCyCheji29EF",
  "key3": "4ss8h8ncgsX1EygK7aLyjpqxfqWLhu64UHkMhwFdVbxGjFkYUzvatmJngw1C7ZMmMx5hxGtD69kwaq5LVrcJsXfb",
  "key4": "5zuYmSSCk1U8cK5Wdwc2nySqU1N1wM6tYAmFM39QiAGxYyFBRAUQJFfQdryZ9ZJLDzBkGwUE6b6bfkKTcbKJqhrM",
  "key5": "B6pW8baeN1CKvpQpDJcLgUUerp18oZ9t9h829eC3XHZji1Cy4szGsieHMLdqWeQkaWongV3rit8NADtUsoYHLpq",
  "key6": "9h9xsh187XfNBdQynMcsCAwA41WLrnDkk9ywv1zUhiiiS766XAoqtbCeVHBqCvN6ReydvJtF3Zt4TgCGrGRbMti",
  "key7": "2CHWrKX3TKck8Y8TjgroRsrDvs4SCHRF5PG3iuZNfPNATJ8CnqU2VcuhdACstNT88UcSmMoCJu5SVFdzTTsfnpUb",
  "key8": "5xVzvu6VaVmsu9G8ugP1Ci6usyu9kBsM3ZLVXRch6Jx7pZ6sowUk1VUwH8gP5WWUGW6xfs9oq5daUyYwAdBmZpC1",
  "key9": "2JLXjvKUQXZ9hTKrcFqtrnf7kJxHAT3gHH4TvS4bxpde8xu5WCouCYWD58oz7LBZrvikQmVPgxdLngo316r9CSXB",
  "key10": "jeHgN3NuospjiNQN9U5DcUTrbfinZU3iaWMzNoESRWRMQ2nrUu9xwt6bqUCycyvGS4QKPKkzQgZJitRntvw8kFz",
  "key11": "5qyJ4ByzanGuU3fK4wQreyVaZ3oRcweYjrLoJNqkhG4FN9Qi6RKQ5qF1hMVUsnCiEFbA5ymSRi13tpt9hkG6Vf3v",
  "key12": "244xubVaNZuZEpWhmwSCcUZmZFoFjytFAS79yohjso4qowhxMDG8aj28STnH5mDLLZRzF7syx9g79Kdbj27NHCgw",
  "key13": "3aDVxvDgWSMJzVUPCyZMMhht9uA173i9y2Fat1FojiwMGaSpHmnHPEbNAXrASkc27qAJQPySRZm8RcbnUPzDrP4f",
  "key14": "5pbDoKZi8WHFux3az83V3xe1h9Xxavu2BbJioFADWWhVA57U9V8CxW3SKMUS5WHaAMuD3SjNdVbFhgzQ89a6G6Jn",
  "key15": "mGsUpnbdpGDJxxAWm1mCiFPqGrRkAnQh6vrTpnKn2rbh9AUyc37XN5LshFSBvLkLF2XAdFcw79q5x1k3nHXtHVA",
  "key16": "2Se9S6YHkXxbCsda11nQRDvwqZrVc1qKS85FP4xzxTbaQUiKaicXwd4BNPYBBH5HyzpnC7amt2So5vAz9LEWKJmC",
  "key17": "3svu9oRxVgwkekyoHbwcJrJ6GaRKNgTZ5SdvaeCxdtG2ecWK61sTowN3BHcY5Z2Y5MrRShR9pM9DEyrru6aDwxan",
  "key18": "BkRfVVtM7UE2oPffyF1TugHpVVbCo6oHNogx3f3yKF5Hsm7AbpBEVahxpQE3Y2tdBjLb8eqRQWZLe1AmA2HTBoh",
  "key19": "zMhKguRoMrYaisMKXQYpzguE5Z3EV2e4zNzYHGZ6SnwHhQXSDn5EcMafrhSCQ3Nba3n24x6oF4T7AT1ZKJa5hzn",
  "key20": "4Vf2pBBFfu5hsFZVGriNVZXDXUFwspLFKF42VFrZZQ6RexbMsHve9kdUmqLMzDBrhLDjdtqcQNrq7yZPgh5Z8Cms",
  "key21": "2qy6kRsKv2y5c8QM9u1jszX1pz6wnjjbVcB9ugCXQoYQs1cfvcSMrUATewZMHmZbQguYuntJXfhNnBC6CbabB3kn",
  "key22": "JAnsVHvnYARm428TSncZDqULTKsks6oNKwmLtXZbw8UEdusCn2mh5jhXttwknXpHDiKC5Spny8TpxjGSatKv6v8",
  "key23": "5aWVdKALCwqx3qu3jHvWVAYrMfWx4PwJK8XZowzyLvDCFm8f7itUUozeC4DxJ17Mtsc33vZ263KGurnr8GdAUPKK",
  "key24": "4wSe36jNSSGE3D6B3eue19EnLXvf9TvAPqAuuVes6NGmj2Yk93ZmA1hxzGZDi2xX5eMETXaxfc66Gzc1b9wmYC3i",
  "key25": "5QePtMDSQkogUgzqDsAK7GdBQjYgmyKUpdarSnSUpPjzfbbuDRY6cSNWD862ZMkRpKabEn2KWdE78G4ogkVZNRwC",
  "key26": "4hFRUxga2Y9qG6egeKc4h9UpPQx2mXwU9iMPfQiXEG5z1QGzCA8YUJGkt9ireqRdvgG48KG7Swj8Wq9uSiZKuuwa"
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
