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
    "bLVm3GA95LGgp3ehsSdFWEkNySXm9CP1XLDtnXpW3LCX9sQDo5LK4UGZMRg6XPaMUQVesFKqeyqQS277jxuSKPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5csAaTiXUhFG4qRZ8f4HXgoLooxsQrrYaNGDX2qDAPnCk4kzTY8LRgP4VC8T2RgtYBdhdCDp8q6T22jDvYme7N",
  "key1": "LY3Sjt2CDwbzvnGVEFRaiuAQ8aHSbCg4sbqLsAXAkxgSFKQJJtTMx2HSBte2SPmHr2shgUi7SUWTJXxpD2MbJP4",
  "key2": "3vusFiWESyLkhx8jYhdxoFyE64aq9uCBb2SGUFDNpj64pZQxBCKoqcVt5tYNt4ncSSEhVVTeGBLRPpZcUMMt4KVY",
  "key3": "4AYgAPDkW1xmDqC2PbGZmTyB1eKDCJz7WxoUngfZopFNzFoqKQq4JVi38EYwP5cnK122b7oZ9ADxTjbq5ZMVTTcB",
  "key4": "zmGDLcusRgoWt3jitS83WmG7rzBch1xi4Sc9q32qF2w4wqxyvP5wnxPjn2UsjDiD74haSBHSvJJDk3d29UYNdqa",
  "key5": "3yPkp9smHbFmizG5W5aJwJ7sFcbkp7V7bDvENZpziM5PnTC4iWsZ5VxVLxNCk9bFgc9PaB6hK35Mj7BgTBQc1of",
  "key6": "64hyqsE4tvNggYWjdRwub2zbPmxVEUvxJkPmkf6XrRsTkA1CNimJsxas8KL7EmxUau4A9iBhNbSVKzS7yaBn5EXf",
  "key7": "4D32D7a8jHH7PZmuL26736bn2SVJxNd2N6YwA5yPHvZNSY4KzEwh965EtZKa7hBbnn4RmMz417DFLM4uoBzETq12",
  "key8": "f4wkvAG7KDiGZJi6LVRXsNMMv9iryNaUHg4B7RzH6LpHyeJwEWPK9biY7ExisFYY2vhnfbmSFQDYEzT4CoyyRrF",
  "key9": "2tX52Ufuc827YaAb4n6aH3zZHHn3oXYuYMneWMB94q944uqWGDgZZdww4JxY5xtSrDEZeoi7SSvkEFMxUZbeguCF",
  "key10": "kXSeGT3mKPw8ve7sty76TFjFbnhLzchdPZ3ghJzWcz8aGTnAKU684UUnUYZb8NoFeVRVVS1PsbKcFn8u8eJMHL2",
  "key11": "2yPRF3uydSFAnUwUc3YJrxii8Exoo5wpGei3X66yMazzk1cHV3YoSHR9HKJ91vmPnzd7mZ7k1B15s7Y1j1bMvPPC",
  "key12": "MvrHzx33HGFrY8LVZt4k9dof2zH6sEudrZ1W6z2qLvX7axPbM87V4yxbTgK3u2LKDdHkcsjBtuwm3QNbZMSYQLZ",
  "key13": "39m5hR6SBYUCWaKSVhFA1hWamr1hC6Xwxg8PVuLgLe8rXSvsUkPRsJ2koqRHEyp1QgJiKaAE2ySKbwEfCCRDeFBW",
  "key14": "32pPHnhkqEYsZ7nuHGsaC7Bmn7JEDQUf7d2w3sMiJCpBpjrtUKry8ySmjyuiAWaLbyjKZy83ckzN2U3NDPpjgEu8",
  "key15": "5crSNXizMUSPrpVWPBguAtQkrjBKTYLkhdi2nFnaxWPLDo35PdenvdiBPhqAzRGmGTuKrM5pMBiYisDT1Q8hLPGy",
  "key16": "39GgbMRhhbnDKyZAvgcyNjNfDh263ykCJ18BcV7tVU95xXsdTXxBGBZxC6L9MY5MFjKoZTn1uAvYTVeDf8Eo3aXH",
  "key17": "4Sfiqf7bn2mnXq3ujuejXk8hDA5V7zAg5SqtyG28JoNKyCuEStJW8s6RKSiAWGYp5znCMoTonD8UpfoYYF4exxt6",
  "key18": "3kKPWHRWjJEzAQz72yGNeTpDAXBJFEvaJqnYSk4vT3bN5fvYrNiCnyUApS7Agcdrai89PA3YiodPMywJYqAwP5CV",
  "key19": "2HCgQZbm4vR5bp3EtCXUAK4678gHfW3SHLTbR6kp4Uvo4crqNVSBAVg6gVmra8xnUxoBBdosgbZFfvZAduZfY76p",
  "key20": "2GDqncKE1LfgWX1QPrz2WLqUeTDN4DaMhUiDSzPfgAFjXdGc11y4aiZTtuD5rmBP7h2xPKGzpwNTXbzKNt8cKWT7",
  "key21": "4FCdeGVn4Ti1GeAKxDgfZnrvnXtgdzMs23ss5iJKmexMdp4pTMedaU7uDaHpEENB5xn9m78ndWVbpo1F5Uz13r2H",
  "key22": "5eJGb9xcuK4Rrj4BMzjknFhxd4FH12hiuKA4zmVy6Z8Bp7T4zk8Sk4QLNnEpVVySx2qiDUDWRwwc6wzQjT5TMKqU",
  "key23": "3RNbApYhMzqYr1FY9oipR2jMKUUBRVqpvNiTH3LLFtnkiEAdC3v4o4WwPJDP5qGdjxmLpZx9ejFJYMarCgaXwBYh",
  "key24": "4cBoqtj2F4hwgZEs6iq7N63t4B3udhfsfKmcRoHtU9pExfwegQCEKctm6fYRFsLQg2rQ7wRR2ZYzvgUUkmStrGNV",
  "key25": "4zRwmFZk1g9wT6NzBnWDiqsAkgLSJnSNSLNa4oNMuUmzWpLvaFW8akEczYwRGnJtJpEVi6CrVYmGBrCbZtu1EEkx",
  "key26": "2JqNdrEVY4JSSCAcn6sAhMqmwZzX9hyccqZnGY5FTuEkgpim2xwwM6uWTbbUSvQBM6RmSthKZ4gPjtWwfyjGQwV8",
  "key27": "5VRsxxV7CenPJQNKZTXzued5c6exX3JFWT1Vdc7LnNvrZdvs6YMwFxZRpcRTPQ5Mn4L8hypGAVGJvq3dudmnztJG",
  "key28": "aWfzBWxxGrZaCgLTwzGPRFsn3kXDSqdTMZUEaG6Hgw1ZiEGhPNpytqp1VV1ecGPHnWb853MDrwe1DcdweDxcMgF",
  "key29": "2Sz1f3QCvud1RtChcBKEyxM3GZdRvCQf94xKrTAR4CnVq4TkcYn8qhwcVGc5NbhXUuWMDL2u1TFY2HaLGSuvfduY",
  "key30": "2uf4gido7wanyUidoxqXEaJny6JpSpd2QNvTH4kfczwwcuy6Jub4mXC8PsoA6uLc9s4dww375xBVWjGwk9zrfhhG",
  "key31": "4DiEtvwR2p5rTaQD86QSb9SnT93mt3t6Aq83hb2yeywJQzCcqisX4xNzbvB6XukDKTZwEFVjbdwEhoAqgrHCQbhQ",
  "key32": "5nGUXXJJTa5UTi6aE4NVdWTWJPfWQvJn4o2yPHwFa8PffpgNpvLfgTWqfUVKTTrE5Wxqd6BdQ6H2eSveU6MzU48d",
  "key33": "24WFM6EFUDTPiGGzg3kaTYF3ptG1br6DQVQecW7HAVrCe1Y25AgfF2dxhuktPvAFH1XkusRGZ1ZZhHrzymFDfVo8"
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
