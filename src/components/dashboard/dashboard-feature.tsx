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
    "2wwUc6kcQVgnLkhDMtF12CYSm9pkKSrXXnw73a3DXsXYpahcCXxD227o6JKHAnUDpphmqkSyPijReNRrszohpM4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8c8VnT696KatBtj4xUv94j6Kmd3SN3Mq8F4bawGWtdJDaaSJCUq5oUNVZyEgEe9ALHCFyPiWT1ceXJMVRLnwj6",
  "key1": "4JthvHpbQ32U7mALv7P5Aoj7N5aYTzd5NeXE8cC2p6JiVZyAhDmwHqZtEjMHCtqvzD2hdFDeWTYy66rC7v2sj87q",
  "key2": "2gAk1CVTgCktzBhGgsuPfexvFdT7EyCRZU25V5oCzbYP2JrWyw9kXtuptz1PzbTKESyPt2j38wEvQTUxU9vfp7fK",
  "key3": "5paNJiNs6NY36MhhwjD29WAS3ufaWKAPsTESoAY4jWtZiTaRJotvb9wXYoT1ebsbNBfzaE6x5mdZbD9bGgxiBsz7",
  "key4": "5LE3FdxNMKRyUMkBxtSWz1U1su5YzysHXohEiZbyFRRZsNAUgEUuqCQLnSM7sVVPAp82t5ev7VxYGurbXPjzJqvH",
  "key5": "3HPNq8ucq4GiFMDvmMgDLy5rT2ckZDPxLkJ4NtYRYCdLaDpFyAPc51L993ozdHZMf82ACyEZh1MWtqtFRGz18xDz",
  "key6": "pddB4Lk6jXv1Eu76YQyWnG7zkoZtGjvQEqTNepgVb6mBPsZHyRD53PHfY9HvAFd5X1PEyRmQtvsGnVBwvvL7WEW",
  "key7": "5PY1ibH3mBWMFazAGb48pJZmScWhLV7guV2sH4hog8WpbvaYARMooSXMFQnGqjwnEz4mDsFmw3NJJUNxKDvZAuMe",
  "key8": "GoVBbMiwahqXgxMdcMPJPkXGh5AsMzKFJ8AW7vbDzTgzAqS8t6jAVuWXjCJTZRpvcwdQh8HG4qkG3rbwM5MdwTv",
  "key9": "TpS8ahf5zTfbxqQujt5TCeDk5xZieNKYbarEhzFh4w1jWfBizjwBjb35JeuqMHwJ56De7ESxJC46Lc3h52RwETQ",
  "key10": "3sezDuVcogEnju36EHDFxutZNwpx5vP7oyKq2iN23gppSbPRrroZqSX4WgWXx3VimfMv7WuNHp338FztQKLqojLz",
  "key11": "561ttjwqZG6zkvaHAMHEqK3pygfDVgwkfc6R5oK4vEwJgQCx3sWDspEBR3KA2WX5BooqefajEUdYKVbbpKfExsAd",
  "key12": "SotgxNAqvGvp53SVukFiC9kZJnWspjBcju2Vx6Z1LbyHpNSWxjaw8DLkFrs9Uo5KnxaVYSzqCy91DWU8pvUhNp6",
  "key13": "3yfsuetCbdwkeztG6az1fmGFXBjmPvUJepKaYRpUb3Vgq3CnNRoypPvhGFh2zKY4hqJ1d8m4PRRKgqEmWQSVowwq",
  "key14": "9N36oz9S81SuTy4TTvSRGbdHHprkzkjA8FZ97WYcREiZaeDayFam2YLxZW745Sbr8TbbxDVrtwkMczx6foynLsY",
  "key15": "51ta9yvVZr4KKFMJzCJWv76UQqAQAvdnB8QeEva4qCyx4VcdyXtvrcFHxmPh1aDXXafoULjFZNmdRamwxqAsXqAX",
  "key16": "3BYBP69fFqzvLPG4UTsgzqmf6mJYHr4iXFZsmoBYacv7Fc6ssnbEfWqPSRWyyf43RZeD2vPNZyqPokzGWY2WrVtq",
  "key17": "3ewtenBGHnfPFAF5zVaZvKEBmNfmvNJiiNMpESqJERZaq4PdgHB4BF6Qu9tKYuRJjJbTCqy1sCKYk3H78Q8myeoU",
  "key18": "6EsEmmB1HT5AgDySfNbYaPXDrkM2qpqaqj9gQvZ1xqmDA29VZPaMPUkYWkA75w4uBBzG58Vx3cTq5NXQ7o5Dgnw",
  "key19": "5exunRdkkrBNBnqzLk8VPYHyaQH5AEc5SoGkfmbW5m3nGGjPrDxQpiwmhjnDUdhSp95hVKWuKaPst5qsCPdDRoJJ",
  "key20": "3aJJmty6hSaBLVAMq37xpNEpaF5iqXjYGpJZo7izp2NthsTeHC3VQGXQ3XTSuhq8w8SAB9PsBfPYyLP5mWCPH1jF",
  "key21": "53tyCSDrigjFJRn2UTFB9ESfdK4Ci78DxyyFvGkd4LZLczGq32NBCX5js6u9wQgoyinEmTyd7qDZHeEF38KvMdcM",
  "key22": "26Wdz2a987sW589YzJ29Q4srqY2Tav8RhLAtZyZZaPdQM645j15tKhFP3hL9vfH3axDAptNcC8LZUYyvrSieBXJ8",
  "key23": "5GjL5sViowS2Rq2G2yhYh3zcx3j7znmStx1scwkKEibTDcnTuWNMieWMSLpEFHCZb6NK4M6T2vL3Gi28g2iaHsPu",
  "key24": "3G2DtCyfnGx8jvyxar8HPtn8s2kFmrcyexcJSMBCvL4bDyKKSxvTjPdCNhYkwswi9CwVXvh7cBVNtjAMJEcnwe5G",
  "key25": "3r8r9b5vZ7yiR8UpTq5x4UN87nvWy99MKLaz4Yq87uYPAPaV3qCuKhHaFEn9eSsb7ruhZJo6r3SpeDYMwtgwQV53",
  "key26": "2uwjMoZbNfr3Xj663dg9PmVUZmCvBSWWhi7dP6gARY1SXpn6DvVbBVWn7evJay26iTBAcAfhuJPRjwoC7e89UikX",
  "key27": "4oz2W3sG1fAQcxTMWqWWeLq4iXgFE4GJ1hkmem5jwNEFtfKiPxQpzu6Aqx6cBGhTtWUfZthV1LaoiVBqCY3Q7YiD"
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
