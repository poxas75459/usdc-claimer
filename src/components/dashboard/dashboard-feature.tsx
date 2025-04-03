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
    "EHFxSdD9E7Tuv5wdLdAVaCNxQid4ojZ88qz8RZBfatXwG6V59GSWn8S5fRq81fFTbpCZbReJfAM7JNdnUg3vwfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BkuncXc5w4PiFs2yEzxBuYZUnWmUjYgQePRUg9hUDAhNa1x4NmytKy5b3vwFAeAxkRRTt9PA9jLBDwSJxcuT31",
  "key1": "5UYhK7LyPDhyUZ7t4zzwcszvtsFurxMqfH4EacKHiKb5T7kVpYmUepyFYMKNFaBMfSGGUiZoFJBer5vo8KPcf1ww",
  "key2": "4NAUXog9mpD9ewjfF7LoJsEEBmqDnmJCad5n66e9MqQwAjf5oa7prfX3eLM1bjmR2MsRAaCRYXmMXahPzu41gwY1",
  "key3": "2uN9ejt5k5UtWoD1noKNtDjSQak4VW9p9Mj3kWnAZ49i3Lb5K4t3uUchKSUGdgBmJgbUFfQPuPCtNwSwUL3mSyiR",
  "key4": "3u5Qy5mfuNP2GxmxWz27j7RFZ6pDeK2zvjcr76TLTo9D4bPVpMYYXf8qFiEqMFKBJdX5q9oV4hfjvdnXJVprHwtE",
  "key5": "61CRrAMbYEJ8ihgrnQ9egdadY6CxhJvPunHJFVtA76HzJaRmhzhNqbd3V9N2vmWhQfszYbBBfcbFsfudshzqbK7K",
  "key6": "52BJgKeffppPMnjMA2jnCQ5ghAqWxMUiAxGA6fJj5vKSoWTArLwjq6HgNxB1GV8h9oVEMAnfvbtFYACBjwrRqniK",
  "key7": "42VdgGbtXGYpfBsLeu5H5HHb1qgSsZALERv8rR6iBnAm6v6F6LArrn1twkJsWnBuUyGQ28LbTVVtECCoahB2pt2v",
  "key8": "2P9iqf19YEfEpuRB3iw5EuV9d4z7dbpSKXZWXJKmg95tq1UKGBXubQMzR5BDUhrRAXrnzDM9R7j2zY2CmYYYcSZy",
  "key9": "3AKZmQmSPN699GLHoP6kEU6zUSn34HE3Vw2SHWJFPkj1ciPWiE5cykqLF5Leke5U3vYiRUwJx8kJ39Phh2rfAxDy",
  "key10": "2fWuZ4NBAhFqPwxfJ9zCzUdqjDHMZHjp5XdnWruwmnv3t1jPnGcSSiDMvq3xgCJG1nYcxrG3jWezu4UK62pktDD4",
  "key11": "4SrKi6NLTmFej6uVEhhmWX7LhBcKF1mWDZbZVFACxBbBtT53V4kDFdx5X4zC5ZVqUsUTDXhQMbUrBpVtVcKDkaZY",
  "key12": "33g6ojZH3Vvc9pPokofTVf5qNZBHMWA71FnTKqvNUx7wvsyC45tpkcuDSHjf6ZAt3GqGUMFYjo3F8mBvw23QTQNU",
  "key13": "h1rsvy72Uqf3TKewEMcGPZErqnjRGokBrmVwYmD3rTd1SjeN6nKAQ4xMbMuBpH9o3iFqnjoq5tLbbEFNpeeYtHz",
  "key14": "3aw6Wj5Ea3SQ9RSuWhRxXQG35BkqGcC8vPG88KdpCFijAMuH9kGm3gzrkr1Jdo6tqN17sdncC9F62CYt8HicJURV",
  "key15": "1NwLP2e6aYrvhwHdt7XUJySFHCH1B4pA1zYwvKiDeoU85kaTJw6oJaN9RexLxcEhjFbXsLV8CS6oyzhhkhFBbY7",
  "key16": "24GheNm9BEe6i7DP7SjkriMLZnTo6XhLhZPRMy4aDykdujxiJqXSrNjYcggD8nKHJb7NLhD98sdsddSCoUg5prbg",
  "key17": "pdvtzx4FZWdKH96dGvwn9YCG4WGge7Lu9753frtFAM4qrDJtWiLm1yDVrTqGfVQETNkFmkXfUt2prAXY7a4Cynm",
  "key18": "3bGGNEdp6W5oNgdzK8R9tPptokhh2asFsBCGbVxx4MgJ1PupcWNxs8Ne4caRn7GEnnPkTHXZHGz9UqE3YsAC1sH7",
  "key19": "2d1vnadoUovoXunhJjHS4CbCpdCWnB3xaB7Hj2ToNyGWBJc4owsHpzaARK3L2HU9yYnk2spNj9MszGLLm2e5mfDW",
  "key20": "3wJWhnFugDNtJAHBxYWsjaxaLt9xfcMMwqbse2YvywHf9kqekq6ywGtoC5pRZv2LxvRCGLEER94h8VFyUvzRmBDY",
  "key21": "2F6T2iU58wU6N8LQjEuaCRWtM4f4AymPYs6nPH9RGBAbeDwzjgrq5Wp31HP6BgGqztZn5myk5YQA6wdFdS7YQpf3",
  "key22": "2cCSZVF25eggDwaTEESfTfprsdPZ32ikyXXRWYrvvHXRg2vRhQqAFxTCg7762xNPrByrw4bqayoPL8ABtLoG4ea8",
  "key23": "52BzkwNGNLiNWzBPwDDUgg9MhRQBA97VFRCponDGGLcgqVkgT6UVLGjHU1SHPK29idE7yusGdLqHTzNgbbar6f9X",
  "key24": "4fC2niEWY1UBMKMne3cx9dZcRPJkuTkCVGmVmbKkXgjgcKHdSigfK4znkGjXAj1GNXvHurFnNUeDrtdEQQ5rVck",
  "key25": "5cTha6m7zvVYAbm7BTwhtePEgQkboDPDqMZrSSoEszpSFAGuLNPhMcb7iD7p5xjY3vow4rLwK4vByTqswjzJeNVJ",
  "key26": "5p6jDDqTDQSM9dtjnjziMnfkmc28Rdn8ZKJy6LVXtcaFxzHmmnJQHf6uoWnbqm3uvC1cfu5ebypT6nnJkkuxSczB",
  "key27": "5eX8JmiiLoarw6E7u1cTSVN9bkW9CbPWc4pej39VKfuF2waE9TtMjVjRCSWmNm8cxMv56hKAMUBvseVck8mDQzBX",
  "key28": "4RwK1RLjgrTv9XUnt1mHd9r3E4XY4rS1LPRF5UpvsQeUraKzp3JWVPPU6Ksp4RkSA16Em8v2hA5sDpQg6pbgjZLG",
  "key29": "FrkvxCAuWLc4w7gR22tTCLMHesAdAiTFEHwnaVDmWhqKfUeKMSBQiyPwRW3kxWPFJq4aFuUymE1KsKeGdXz7bby",
  "key30": "3rdgPcC9qYcChxLYqmUMGr6Q6W8P5dH6QeRWk85bX68YCvbzxCHayCnqxrFv5gsUETUdjQjMHcoDPaNHtDCkehfL",
  "key31": "mSNnTTNJR2QryfuT8y8Bku2KXzhnoGDHGKTZEEBAEFC5A7i3QzeT7sTfipUKq913ndftG57djHU8AWbWpk4tDZt",
  "key32": "KwPgy9M9NFQpEjnefmdd6qETsJLWggVSu8W3cJdtFwyZxUehuDftsZLjhYn22csduYcFcoVjbabB88S5Wzh3M7q",
  "key33": "3yCyiko2qFfrRCMQNRminYr2qwYmfFR2ES9fQH2rhGpQbJMETzxxAQDExa3Lhw5q6HEz8nvKmb9xDNRk8PcvoBmV",
  "key34": "2ePmabqDHGNuqk3akK3ybuYcjbAyvJQDWMQQ5rsdj8at4R4eJFVjtHtUp87vppZ9s7zVNPBp2UkXrD4aBXktLcXg",
  "key35": "2L1BgEAHPwfUkdPWZoMFqV7Ds8KAykCfybtjtuEAr8ZJqh2sGvXMS3JxQ1WvLmdRKP5Kf7ypHJ7AxUU4mXTzQYLu",
  "key36": "2LGVrSwJuEemM2xgvFQvTW2BDd54Uufebw8f56jzWQwtzmirruaswAD1XUZnfGLcMgBEnDn182RBZMuU5N8LUDEk",
  "key37": "2eknV3Cn14GYgXJbNaMThgmyMBiXsjDLitAUntzxRD9kNW7UzCDjCxrva2vFRe2QyfV7H99Cu4Hn8y89qa7Atq6P",
  "key38": "3uy4f5J6DoyjobgxPcCPbUvYMPXKdB2gjuHEsFdBAGnhjNRxygw9T3qMPTuxibQzzma8zMPyoDRtPHhbv2xkoN4g",
  "key39": "4LM5G4JArG5kHgRhgpaVRE37LxVVs1mJ3LpPGcRx1Lf2TVtnifFU8RJUj2JX7r9cj98E6o9BGGrWnxbHk6nXg3BL",
  "key40": "2NqF7XEd4En32H4tdWXRRY8PUnvk1jhHoYdg6Z9S95Vj2bv3ozt4SDrw1pCr5GnrW2wR2Hn9bs2ATTumw1Jmwx9X",
  "key41": "nLTSqkpyEPk3vrSfEVWTP26VzziPfzPaV8qwWzyqgTeJXzxPrpuTN7djeZgjcJXBnHHoYAPNFBGjSGdrHYbszBz",
  "key42": "4m2knUWararLQJ9Q3TBgdmH9FRNVmUWs4QAWacSqWxDMmAfjS7fU9G4G5JqTQ1FsHQZRRkthzJeZ1pUUzGxenD9u",
  "key43": "2UjeFWzhEFPrTNqfELK9T2MTWtiy1ovmLWpr6LD7FKs8heFyM4j5SFGYFy3MerrpWuVKWbDWwAEFqo1T55Hg9aFG",
  "key44": "2zMNQdDzaHvHjFb2hcVv2aHyhJmVC3SM3kKd6eYHPy3YemhCoCCkxFnJmGzQ4QjBc76CCzJ4L5VxuDcHiv6bLfw4",
  "key45": "24it7KU7ixNiLZDEwaXfu1B5qs4UcTD56YA3SeMWQCsF76BMgxgadwm5b9pNSCVX95E9uKc1ZV8DKzpwrXnuYdmF",
  "key46": "67Hd1S9swVBL9p97EehVJfDa585oUUciTsa27nHMLfmMCy11nMAH6RFgiLbEhKLN8fTCzsXMpzN2ajjGBfwym1vN",
  "key47": "2FBp79wLQJK3QZEnt59tqRgymZJMHZAh6AgrRTtWCoy4CdE8cH1uRkmQ88QBWF6grduttuyLCPZtuaSTPMvd5py6",
  "key48": "5KXy45YWns4X7Wcg565Uz5zP46en8QtcqtWVfjBpadtpiyv72s83fBTubVodG8QkrkWnE8P2iER9vcJRzPdJ26wq",
  "key49": "3HsELQL5ZTEC9vgo9Fve3YYNRiFXb9CUtXMHDRKthdQDZJ4Fc4qtzmCCvRJvGBNTi67kscVdi7Bnf8EJn6MFLX5t"
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
