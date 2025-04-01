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
    "21hD995rU6bQcmSzdg5iieUmMat59HkePL7bf6HRDfFNB1s74LV2WioJD765izqkjX31V5oZg2pmH3J3F7JTWuxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Js9DbdEn8d7TYN7o5HDTeuLqMmEiyFxrWbJvFtGd2HDy7SAyvLSLfsMjPx3z2UbU2SPHhgQoniQVp6bXtrkBXB",
  "key1": "2fTVZuZF4MtCLGScJmhbJZS1BJzDrFJdGzLM3pUcDAP3NcPRvFGnPq9xACgkpXeaWbVqoAQijTDTUoEoP9TVm9Yd",
  "key2": "2N4GF7M3bXsKWr6VeUdfizp5RzYX1gfDzz9H4dVxVATpNsEHQXRYZewn9dU6TZCUPjELthx3VWoFWgH31soCUtum",
  "key3": "4VWs6C6QHun4zGo3KEeshbfAWnCVXnPScWspQsPRQ3pGDXMEUFHN1tUp1FUciahnVxX6QqrEwmarNmhQni3C9pkR",
  "key4": "3BvnMGBvXiHGA2o7wWXHECSgVRZsi1FmArptQWMiWHWk3kbN3rW22m3tn3i4fheA2aiYziqLCTqkkE7PJQkE9Nt5",
  "key5": "5uqXuKTEqqrSVqJYxYMUei5onAHDyYXM1ZBnDsRsoMReFzB32NMQPhjfdMjxbfGfwyDaCjgVjmFyR7WJcD2ebgVa",
  "key6": "4DUTf1xmAJAnXdoQzNieR4RJR5DeZ5edJnVmzqdRzzjSiNivrtpUXdjRsBTRMx85vUGMTrGdJwMpymT7FYMSi5TX",
  "key7": "7mY3wRjmHjAMXyGeGexUf3iNBMXNe1pAQsbVoisWa7sCnZUuKBLH4jUf1hrRCYqnPJdrx38YaQm19amZ6SQadFE",
  "key8": "26CEjzua6kzzjcyFR8ewXuu7gB7o4HWaXyDbx9PNiLETaefUcVxmM1RR6zFMSTfS1b688n9JMi7a9929hSywoPU7",
  "key9": "3EvATgNFoom3btkP92f6xn44bwPKf4Vm3C3N5n7k3b66ZZcRSiCD54h9VF3bS3t8Gwcu2jYE6wpAJcdoR6yi67dJ",
  "key10": "SFjjYz1vGnJQxWpkfoH1WEbc6YYhi7KMUuLDJ3QthRndGrxR2YJE8oZg5ovNpsPnY7ekZiKdj5jxCscWdt1fEMz",
  "key11": "3zLg8xiSi6N744jNNmST7gwZEzKfjv33PQQGVnCzK1YznxiMGx39mGfoT3smSYqqtbKFcWR5zQvz7rkchxAQ1oVh",
  "key12": "2hjEjQNbShJB7Cdjdg7mPdq5A4B4cjGDt3Krkk3tQs8McKLCtJkcQt7FrHxWYsSg8yf3232M7tQy2tHWwSdDegRa",
  "key13": "2s33MbaexnD5B4ZGuxnVHqPvhhchWppGh3znxUnqnaxebRCUQhdhp8GKK23BHgNiXsf7b1rhTenUTKzbR7QQU4ct",
  "key14": "5Fr1uR1jf4esXrrVDCLapVQ74tTxrCdnfezZLXMBYwjHTbwr2ikkMYqnguMuydfZCzzvaSS5XHBHZrD3XjFakkRg",
  "key15": "4hr4Kr5NRDcAWpuoBhZs7RJpmXNKEB3vnHsHagzXi1o62GtUwD5rMHqRYYkuLC6WLNortp8uoQ298bG5L3dR8VJS",
  "key16": "5qNHX6FEyZekiZESBrb7tAQvWoCcwr1LqPaYJTeS928rUGUHfY8ezSVME8Zjw2TYmMK8vrE7drT4rMALohTwgj77",
  "key17": "wzUGLHGXPkHVfjYC9x8p5hY5hRFqaGDQ88VsRxQtdqUY2qqUHAwSLhvTxEf8afRSqk8G5jbyb74RWj1JagTbfos",
  "key18": "5twQboruqrghMV5rx2TvUwMvGvu7fgsfKKmG1NEnu2eY6qJpbWJ4qHLGb4Lj6y1DfGj3UUidCCpNnCFotu8w1eRD",
  "key19": "3y5yqQL6LBYAUyJz6JuJTfEfre7U6qy2MDnGfEYpzkQpv8XbY6QuMQNBoPMKACE8bEGxUmv2Cuaqn9vkRjRy8EoJ",
  "key20": "3H6PueoGAqSYPX4DbxAGb7Fua43V3G7LARzuWjrAyLUW4fNZ9dvni3p6nGmg9o7Pb8oyu6wunuLWKW8C82W3AryT",
  "key21": "5gB9ouq5XkKXmvqAH52boAkUQFBsH96fXpzRZbt5gDg2sPyHVoatXrHSMLdtMPk5HdFifSmszPZpgYuqrgjCyiL5",
  "key22": "5NXNdHk5hDVRerQ7NSqEgxi2xL1Yzwn1rvaGZkG4azuveQL6cwBwR6wRmzVy4Po6ofxu75Xv2UPBo1ZSMGTfBKSy",
  "key23": "3ZrECnw4HuXg1s1KjJcnz8ngjH7t6ZHjyFGhu9N4ryoZnDpGVZLE5EKcnzgf3huXg3ocqZ2kBMkegRWqqNSUwNvA",
  "key24": "2Zca1u4DrRG9rpkHcCBQkTeKT78Nn4G6AYFVtPsBjSFoYyRqPxspTRjZ3uHifkho8cb5gZnCfPkpzEnri4jm3kDC",
  "key25": "27nBe1vsqrr1ZbmNYjSBeXiWZrjmNA6Wpxr5b5ULkh8ywEohBy4CC2RYGtvjaoKsAYE6owNYtgvfUdq8H2qCirYZ",
  "key26": "4SnzK9ZBLJQkbxNNzHN71pKHqvfZ36gG9S2Kzx2PwbpUfH7ZfJpgafjefXWrxnsU5vg3crf4sc5jgi2zyM48bwFB",
  "key27": "3xeymCWvvkgWQUDCSFMmSbDQk5HJT6X7BVQ5SRtA1sqW1VCHKK2wge8fY6qvU4wQnDHn9Sj5GPQ4vZdtvwazp9Ny",
  "key28": "4BLCZtGrDaWCeVAZkY8Cm88q4doVC25xXeXFnk6VbHAZu5zWMmbw5YCer6E8X2pbYsaraYZJkJwfqhEnvqMmb5zr",
  "key29": "3G4bwzCn7RvEuNZCkYfauK4ssM6UaknUU9sG7pMnyc8RXZp6kUDrv7VpDCG5btdk6FfZwCn4k8sdkhqhTckvM5rS",
  "key30": "R4BvtCHZrQvr5pdWijdxE7oEAvEbPRtpgDj2fJfWZfswvLqSuDNHy26Cdh65UT699fEnENsVfngfuELk1E4Hk6P",
  "key31": "3WuPGAdCkFcjzTH1Da4GXZEvy8bdkvXCk1DrXxmsrGGMuDQu5r6sY9DadgqhhcgYHBXqPCpRajamLNWMGtj5ZfXo",
  "key32": "2ShnzBfLEzKUEFstGbydokhMWGiWK2ExuMSyAe9wEaETWLQCE7nZyG5rLbTtdtjB8RJnGx3qD5cRmqhzdCqRnKA4",
  "key33": "62WjyP4n2mw4eXibrBcegP9zFZs79Xoyc6X9XfEnuKbX3km2T66Dao5P6NcPGoLZgTdGKCphKgUwW5U1qw6vinAx",
  "key34": "4esiuqW4MyzwZhZ7GN9yLbunsgdvMTGqPUZunj5BnSManLAExHKSw6Wx3JsCfAaftddaMzdtTuijMmbxxRMHnEpT",
  "key35": "3bAgaGXVGbQhWSJRU1U6fWKmT7ez9FwtQctrw72AVCogyzKeMVQp7vE3QzRCiUZxEhvb7MJFmzkvvpbhYopFgepG",
  "key36": "2AXkgicEuMsHduuZDxFqoFGu5VQNZbkFx6RE2bjYhvN4uAcunPav4W2nMzgHWhCCLaykDJgoUauh7bHjBt7hTDX4"
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
