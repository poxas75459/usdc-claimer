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
    "2prDvGYB8Q628LPBngu99UzNvtAzHBTLknytqEd4Var79EFmvwgkcZjJ6GbP7gRJiJu51DWQL7zeaBr8nX96CVvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uV2BxsZ4kW8Nn8Hu1CmY1Jq566TjguZUz28WMFBApoJr72wmA1K8mMouRRMfTvos4sSc7dwv7ijHwcRQBddBmrg",
  "key1": "4FWK5PaCWShBjv8Ej1yo6gHdQy2ZwDZb5XgYou69Bu3V4kBvwqdo2PvXVpfdGCUNKWNWGqPAz36YZprAHyBxB7qX",
  "key2": "3u4oxKyEjJjfXzdFs6XRPhPxNg1tzv8Nv89mfRdEciJsv6gkMfQCMFbDHxsDJWKzVicn5dQwMZEpX21J7PN9Uma3",
  "key3": "2Cwacb8opSixxf5zJQUUrjNatWxWM9B2e2x7V7fUHpvKwT9BwtEeEPPz6YsDThu3kP8sCrzzDWiKGApFY1KrMRLB",
  "key4": "5dETmeB3KCd6dGbxy6u2yASKNGNb2bZN2ExneoWT8rZvGk3peZf1XS4UA47tshUfrEUYAk5asrBiwRsJwLSXSf9B",
  "key5": "4tUAD8VwPKzwaFYif35YmZK3ABpuDkRCk5d7Jb2gYqUjQ9bzCYQoWJVGpoBGaLKDrBhS8rarCas8maGBUGrSYHsL",
  "key6": "4ZLiiwUpVqmyCyFrcTJXp4c32EEK3HCg9ZekgW5DWbWAGHMCcUtW6xRpPHtd1m2SfoLBCyBwPLSfLKFCrLeBeSxw",
  "key7": "4ULb7SmRyi3HPM4XZZfgFqR7rdMfwoVoauEcZZ52er1hfybP3P4JdGfnShBinJY6Jdc34Bp7AojGrabtjSgyLtUY",
  "key8": "2KhaaYQQuSv3ST1w7e5MEfwfGCfkFu44MqCRFqQugbhE3JvNQNPTLzTAk48GpKyMmkvZgscEjUDHoqxT9BC27tP1",
  "key9": "tp3sGLgCPMBec7iYDMsVFMDAS3zzhDVYGU25pa5MotEv8Quo6Vp3gu12iKwZZer7iiAEobTxjio37wJm3SztmGV",
  "key10": "25EwbwJ7Zwq5ag7DhZHCCewpWdNWMRUzM2H42gL21kar3CqdcMAguZ1iahHtFpfuEV4e4GgpBBgyayZkG5j8H95Y",
  "key11": "2jNrKM13CQ7TnE7kJgLKk82SLRYZY3NM4v2ZuGd9qKh2zdQQKUKb7ZeHfvxsnLvUzpTqhjHMYz1rLGwEdsnyiwWS",
  "key12": "3ETeuGpNcPue9DJtAzStyshUefM5nzFkNLwJ9gMdCQ3ZkzsyV2Xkpxo2zdvcYgKZBLZWPg8P7KY68fq58bdWmkjV",
  "key13": "4BcKxPAmuwYc25PhaSd9FiVrBHnZWotbbse7GUi2qu1CL5wx2bfkEhusjRVJsnmwMC3KjUt2vLAMGSbgXmGsGCso",
  "key14": "2Y62Nu2LszhrimEZgP6Pk3o8RjQwLgQxhtW8JNGYpDRBtG4hs4GG6nPEnAe7HrNnSdVXyU3SFwntW7Rbb2FdxJSe",
  "key15": "3gV4WyyDKZ5ssiXUn2G2w9tj56rPr3D4y183q3CwrZLxp5986k8QUrrFnduonq5M4WJonWDmn3ukfWcHeNjmxzMB",
  "key16": "5Wq8PKKFG6RCbsQFGiZEpeVj8HjhhqgYFuDqU4FnUULQZ8n6s9L4w4qTPKMgq6572uPBrNdrRTWNxJAT78eZMzxb",
  "key17": "4o25FhTxxm5vFKckcyaWCL8L4BPYbDn3J412xknkGKh7adzv3vDMhbqSWHfMo42BNoqEyq6ucPgMZuz2X7XmXYiV",
  "key18": "2dPC74Fspr4re7FmQRKDWTsPKhnSNkaf63KfFj4cYrmZ2kpGj84DEuW3BUZrYo4dUmewSdFssqmcjALQ2rfz1TB7",
  "key19": "2xP6t814KZobe4fWekTUUz6MCNDmyRP61D34Wj2KvWwBJvq4xWxxR2Jc4uxe94dv9vdKxqsNbp69ZF8tuXMeUcQr",
  "key20": "2L8Ks8rtHn1QP2TbAxo9A5cxmFE21XupdfWBoNoS5qvMSyw1UjErYCUZmeFELWKoUm8iU8Lj7R74SysnnHjvwy3N",
  "key21": "5vrt73ZAiJfoV67p9emfFFPapATeu2DWq2GbpiCwpEeYkaDfkkjWqTAofiqQBXvodtveHmwS4myQxjEgErKk4cbZ",
  "key22": "4jmM8SoHd1P6p9bw64wdUjuPmS7ufhwuMTxN4mbnLSxqLARnDKRCPV7PAW1Vv8LLbKxzKMUdPhdGeqC47TKiiKeS",
  "key23": "9rXJcszHt1MUKHRokUi4ikCW6PiThwxPEYDvC4bTS4gyRPR9jtzUTmNqTSsdCUZs3u9WBbQPygFNqokbGVDQiaM",
  "key24": "42kmRZgf1S2tg6ECV5weoQnt1xg9XayATBXW4AVnsVg8JjTrMmQrqBP6rHJNLmwmjAF7uTvMiDxjJTd611ewaq1W",
  "key25": "4KAMa8VPbvfLAtdAZoimUVaTgH1xUp2QEj2gPeNoBdYJPzsEoa3pC3EX5xVobS7CyTNtaQvx6q25e5vg8w4j9iJT",
  "key26": "4YATykhB4z5s3fkWUSgmcAEXRALjQqd8kVoTJH4SL7WdUSPQgJNPf13nP9ievZxjuY2ppZG4j174Tk3bCKKJhREY",
  "key27": "3d9DjM3JMQvu75vTtB2XJ4Tf1j31dpEdiCzFJkPeL6oa3ggJyhMKHoFt41gtoBJGTTCjyDbbdeS2S8B2ocUZLxjg"
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
