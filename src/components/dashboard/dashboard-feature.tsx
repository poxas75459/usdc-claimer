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
    "5MJ6EVuotic4EnYC8bWko6gkdjngt66d9Tyo7o8kkPBPx2j9VejAKxZmsShZCibxkTJ9hmdnrdHQwp5DSqdJKk6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkkM2kYymRFWnYPwm2f8AkznTE9m1d3QLWvWj8XGhpzm2VE3FQ39AxC8KaBEQhbgW5xBbdTLAspDeFJRVPryYzM",
  "key1": "21ACzpY6osLTiBBjTAKKxgSstKNz5xFttkjdNS4gURFS7W8SJNHjqFaRnyUSDkWTE5rkuGkeyAG8whKZW2Ga5j8R",
  "key2": "sjce9pns82URBxqqUF1nYH8cUAUQoKWg7svRnzDjUNV5QNDfFMhtLAF3XoLQnqeZtRCFqcQ5rj8ar8177EBvRfV",
  "key3": "2VbSZzzei4V4QhXumUgPPNVayh9Mwsrfmi8yrMvQ1wT8np3bYmB7hyrM3eARPb2xmPiMHEvgnWJQtQ9Akt6U653c",
  "key4": "rNJ555GeDYYg6Crndkwn4s3G7n5TCw39b2iRvoc279HzYwBCyuLmQtbDKM3TV1XpXbbHNQJ33Rc32DcAQA6vWyw",
  "key5": "5afpEH2PxkUGHxhHemC4uchbF15jHb9sZjJmHPHtZPUesAj6uPbJW3vRDb14NNrFMed7opsEohwMutzb2eLVhp55",
  "key6": "2WiRQ6SAjiegfaXyqHwLmDvHjCPjKrmZAdV3XuCJkydtHXbfP2RbpdHef6xwY5yqDjXcwHZ6f26rDinXv34tDzPk",
  "key7": "Y6BsScAgg24fNDouFhauCBGG7Tr7mkYo9QMzBCf28uzUh2M8KotEprithnm4C74hfEdgEUXmZGGjn6MhmWJp782",
  "key8": "3pU1A6E8emy9CJCdrmJ1pyVzRDSjQDFj5Uf9RZDf3tjjhzjaZYiA1jWsEfoc5HPnPR7HvzhQiFEmHUhcCkULGeer",
  "key9": "3MbyZspydrzBTEH3rU2F6wKxuE6qEMT8zn3bM72QSxPv8PLgbWbD8nszA4gWDY9hN1vDxwUQTuw2ZsQazrrSLqDk",
  "key10": "3odGuH4MSccX9sZTn6QysGgjxNKepiF1ChotqaX1uMzQzDAQQKuczmAMCDekUKUDeRw1nHLNFUEJeDDQ79N6Qw7Y",
  "key11": "29udkBVPrB6hKAgAuB7zP6fTtTQsPci5yoTwu5tSUH1nzsfBYK88ZGYiTSDV8aDZNzz99pd7wPHbNvfCMFvEEdQR",
  "key12": "4Y6p3nAaWzY6et7zjpM82mZYxUaguYYi6HquiakrAMLxHGKyHarw9MjyR29cFVMfQz3wFyFXSzb697h1T3B1fcoG",
  "key13": "55w3A4GFhQFQ9CbNA6QfzQbpnTNbMZeUUF4mn7UwJ19LX7G7EVjy33BMSs4upUvN73gCZXJvHfwk5dAcShAMowYq",
  "key14": "5zPh6KJHBeSSPetUGmkD5JkZRa4g8wGZhtP7YSThJKEUyGzeo5WKRHJ3tdGdWoEanoSNez77nohDDeXYeyWujmL2",
  "key15": "26CXL8XyEBXpGY2gFH5kj3xnz3Tg8VY8zP2C3Bi9aSSoqQc8CQoEswJxyM2uN2cR33w93kuNvViKDnN8twVrYKfd",
  "key16": "2DsTr1QetjSVfNdnAKSov8cdMZN7DSf49kFZiqYaMuSv6nctzYW759AVdDpd3usWT9LnTbuQpNkNY63r2xPhAmjj",
  "key17": "3HpiBuGZTSiW7GNGuzSC8YfkStGbUDxqzAG25b8gjwUiSDWeQDGYnKhLeV58BvMC2zuUZ5TMQW57DWLksiHUGEN9",
  "key18": "3MhprQtjzNP8TSMjDiy1TPkSTgz95736xjBNPhkrSWnD1SSHiBFirxJBFAVFdYyBdV476XJCXBKjv2w4PrJSugAt",
  "key19": "2sCDQ6L7rq76eUa5XJ4PE2EewRBLEiDei6JQZow6QbtksPMn8e8Wf6zQH5NgnPRKGvf5ZRthWNgaVnuUFDEjaxTR",
  "key20": "4djgRQFSUxRcdjakQQ7p6GRx8mk2mDuY4c8TYL15s6wXhxrdLrbmMazPYNkLqvTDuvLWULQhiXXdiCJ6uo2XG1zN",
  "key21": "5nguPHj5Ayzd2gSnTXH9zGKquf83HTQryyuZtJv4ZK1msm9uPpyDuJvXVv6eee2vRmy5WUSoqSLNwuWjvpvoWN5N",
  "key22": "4bfbC3pZ7Q13eG6Ykdh3njEBntB63aGFipFD2LQLTSRhvSSiN96bFLnon4bJCeS5ojyFEAW4jaQLiGMUfKZSX8nm",
  "key23": "3MQ3Ldo6u22vJakM7KrPUyUaX6nhGRShvYNHsLkuMKoR8Ygs2ZhPgPYjtySRswHuswsVnmK2RobCpu7FQmVEGHfm",
  "key24": "2WZuPAgX2cWvDDvXBzDiy663GU1WVHmPPFZ7Tk4ZChv8skPtsYfhKKXnToLcmpmqXg1YLS7Lv5J9krgMtaDbaXsA",
  "key25": "aBiBPxCikNtdcQzqeynhxB5CQjqoYh8HW9Jy4SSfqs9eLNznapFjHJU5ZKRgpQynwq6hVGXXgTj25K3d7EiKPNs"
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
