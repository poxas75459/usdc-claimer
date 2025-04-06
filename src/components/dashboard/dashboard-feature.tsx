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
    "5Bk8MoYDn8uAqpBM8qU58YavdFhqSham33qKw2L1NWyoWkNALFFDV5mPexQHap2Bhv6AmGctDFSraPK7LdtcNjw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ro2zdjPMMn1b9FARMXti9PAubHDuZ5UBdiM1Mf5gRLSHedJ1tJWjYnvFumfBgYGNwmwazCTNMPvphuUKJ6UEMRw",
  "key1": "5KnUbbFDSWDMKe3TaHWZKTHMAgtBuehVtjKjE7EET8hHYpuCMpryJqVqja7SsSMzzb24FAd9b4JGsxrGmF3cUrMA",
  "key2": "H5vY8WuPopL9J1jwLGgqMTmi3ygwUhVc5LUvgTs6JaMqiYv75oYEwvhSjg5LKVxAFuKpkrETghmRZXADwU3phbS",
  "key3": "5EbVt16a8hqcdbaxDbBPCVZztmqF1ykdoSsWj58xFEY69CH1uS6RN7622z1wMkB5gzjmWArMdnME2Fqq86rveznT",
  "key4": "7iMpQXmQC7SGdGacpwE5qNSyznboAhMgddCXSd2EXaEQdqdyqD2pTGHUwaouAAiKgKfRhjQ4q9Nmz1n9ZGQHFr7",
  "key5": "3VvibtdQ5QayUL5EH9u1jehv7ZuriVChjHoXDLWt2Z18nTauqq4U8ThASeSDZNieB1MZgfAoStqbX9eLYDAEooMX",
  "key6": "5tuVXBki4vUa4oBBSsV5cahazw2YLzMdKEPHvgnQEEbooWvZLYZSfqN63TGWZGNhFpJLKB4459YE6RnjpSLi1jjr",
  "key7": "21LCFeb35NBQXBA9DEr9Eqzo3UiAshbcraoyE2JL887C4WL9khhEQAZC8cSDpFWRoaWWTSN3YYCRZb5wgWzQBWDd",
  "key8": "5xTcA6ri6aDEW3bnvnNnsnoWsiW3zMPrQQwma8zYXhydNTo4mC8My3SovhduJsxhqeskvfKqZQYqVnaVqqWmxT8q",
  "key9": "2hFtkWwqThA8mP4QNFnThiVeQ2HswCvmdCLaHAZFfzkKwVSkSfHJdrkt59tnYouzrdNaj9nGkx72jgJhZCbLQohz",
  "key10": "QBzZMdMwnKKX5xLjNbr94ETXTQGG9o3G2eUbjLRrvwvdqvNXNQNc8L7PdTF94bDVBUqx5AFTCFmN7Ddd6G3P36z",
  "key11": "2q9LRwBDx9ZyTzKHEPmxGvACBLhS6btvc2e3m2E5VxHvMray56LZK5HHgTPvpUWVytfmUKqPGSyk8Vnivs35jvyb",
  "key12": "2MU9N2kiRc5ZRYgwaaDib2oqjMTPG2XCYEC6SC7s9yPtvh25jBCXEE1n3Ybz66z3ncbndoLZuzb1ZBpWHQyA1xLK",
  "key13": "bRgCnBfKEKDhZ2DXKHEwcqU3h7BYrg2QKUm3sUxAj6edmwohZkuthsR85eo4CqvDGy1TrXWY27UUzAe2BetcDXX",
  "key14": "rpJnUg3Ykot1RiTxw9GDo3aBt1dTkqf9JDijQ1Jj5VwuyHHxih6WhsYT7HELHh8UVcsqZBtYr2QtpWBHMyiEppf",
  "key15": "5pe3LTvgSACwNUUugUH57M8T549t7Dz1m8Y938AG8mS3WqakwAEaVeCNZcoJRZUvVsYBWtnJcC8tzVjyMT8tKamb",
  "key16": "5iT1DNGn3VGAx5kggdCyAPDSpBhDkArWU7vkpeCDAUSUoLLVZEwot2M7Vu8rCpbpi4m2cX2KdfJLg8Yc7raXrJkC",
  "key17": "1cCpcmqW4Azgu8RCkRUZFZLECVHN3B796spgKo47yXFz4Ci9EAqdxKh4DoekXiANVRPoNcK8zpJQwV3jXi1nWzD",
  "key18": "kR4rrPzNUrcrQ6bqkyzYsgoEqcFrycjnZZVwowQimHqgF6cW3B24xcFhSqDsBTDzK62o9U1k9dxjc68yTiHTZYW",
  "key19": "4NtjyMpZEjSW6egNLNtdE3uSRbtHCQQxeGbS6cCNrwAYA4zErz8jaBkxfMLt6sygfhWdpLET5jQ1VFXNgCZ77zss",
  "key20": "3tjN9B9kRpc5gADUP2XXDLmSnTatgFhmUjxDTDe5ATyNdssRXMV3gDtjRzdYHs3e2Q8FR4oKnhjNVapSC4Uqcsx4",
  "key21": "4AHcmooYhHrLb9xnmrdLTJeebQLFAChnJqHVHQKTp4Q4kP4qTdUyoMYFjiVmNh6NdLBGFDp9kZHcJBj8jtD85gA3",
  "key22": "3aV7kppJWyyHRRWEPredZYQPHpe5YcuVm3tKwseu5pb9RETf4Fg92T3wic4cTrLHuyq3pSdefaoJP5opfxvnnPAt",
  "key23": "e5bfoYNAU9RzacWyUpmYdParJEjGxntchy4BxPggGuMuNnhyw263eAvUhsmpRb2QS56kxe3j4YdNk7rHN517KrB",
  "key24": "38XwqQ4t1fkR75LCqD3i73uCaL74SduZ6Ua4o3FQrXNfEppnk7hqdZatZCMZATVa9fUyd2cCkpdPE3LcxNxELDDq",
  "key25": "4iXLPva5ZGA6CP91Pczt9ut5NZFtmiS38xcuSgEC1Vhex5Wv4ZvtnuxbPJBn1jcyXQuQE2bJcJREcuNAo9fJ6Kc8",
  "key26": "5ceg38RAAZtwjXfndLx8qdJHywATKXMh4cr4gKzsBrPR9buBpwJko9haAg2dxcXCuPok5vGgH25sNR7o84gcZQAo",
  "key27": "2aZnZMHUJGug4ZW3Qs37W3vDevEn8EyteTskZ1CVjnn8wvSVHZg98rWK66cUVvyZc9n1Rire5AKimgGEEwtogd16",
  "key28": "3kUBa32AibWNMNyzry1ijzrYHE192cWJ6LQ9dmhDb11Wm4zGxtxXJcPUqBefJ8THShTPXNBB7rh7vsZZBpW1aeEG",
  "key29": "58QS57Ncadjm19ezh9kygdXmFq2G3G2GHn7bMryTtg48ZawCXZcf9ziHngyWN3U1Vw2pgDRRYuyf3zCeN3L3cEhe",
  "key30": "M8rrcHbQnKgySMMyWPMdxJT9zLY2NfDoBRTjmqEEinw9kXtLthiaUSGEpULF16GFqYRH1PXHHRyA4qbJtHAXgaK"
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
