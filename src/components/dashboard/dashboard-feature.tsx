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
    "2N11WxTiA5u4jUszp5BKxtJ8Evqgt26CKgatGpeY1upkp46xPmVa7cG7a82uq2Hwei2pajUfSCGWdrVHdRsqTZZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNEbeMuRSUUH1db7rpYmc7bZXkZw7EsYeEifGHwy8GvhBuD5EwSLXCN6TvYmiuLW3VUuGmwZ3ff7srpCpTzWdBw",
  "key1": "fGiBTC4jMYVoppKDmo9P3YVFrqDSrvs6f8PDPdX9QHsWW9P2T8wbw93aCpAWiRqScJbFtgXqpWmMGZaKyp4rbmq",
  "key2": "4ww8CSkKfhZ6CzWavkToLNhXxxfADHFQi2p4By2wQjUP3R22id19Uw2m6mkwA98pbiaX1H1VZAX8p96FnmSDyT9S",
  "key3": "58t2csjmvtxctgvHfUybJardrxmFQDtSuWWShEgPvGpDwEZteQTuKiGakrMbh7dVxiswAZL8w2GZVDnJpM7zgbbQ",
  "key4": "3AS8zdtRKrqKdkGYUDLaqHgFxGnBDpRfDFkrkM2QEd22LNXTUKtfdRvQCzxYJvDM8x8VZBVSy8MKoYSygo2h4fC9",
  "key5": "4wP5Ygs2NSntipztvqhxjRwaXwpygXi6xPZhsKDiQWU7FGDunS9MZCYBzZ1TF7vW2V1k6JBv8TBELn6jzd3tRhyx",
  "key6": "31JoLAEqh6JfRefm6xxmAdjE7Mhgw9WN622NGZr1VQxKGqmP1oYw7V8gbzC6HhBNtCjJbF1LVSCMyGkKRK7BUVBa",
  "key7": "62guVpeZ6HSCJR6BZBNfkxmK4nEVupVZ1PAktJg5RW2Fdu18Nc4iWk62WYSdHSd7iv2M4Mk3hMCrSdRsJRvJre5E",
  "key8": "5nUFr4S6wiELsizNuNjVMJ6xJocxdp5jAFRbQbzqCTm3v6dgz2AVfxWoZ2vC7nFdkZe6dt18ViSaKJHH9AARDhAx",
  "key9": "59RJDRCyukJF7S278T6bDr9K1auFeASwgH152Vge355E7Mdwm338QD4i8MsHG79EchwRiXbmBVc1tCQkA6ZigNx1",
  "key10": "2fgqSmUV18Hw3f6WSpZgLb7EQihJSjEQdxHkaMR1pQdAvSkVSHeCt44r9tGaDpfLF9sU2foMQTfazsocb1iztsky",
  "key11": "4fbYtePzwJyMELNXPhKDfixQkn3swkT3E7iMpPBF6o5ev8fiHrsEv4hi3KQdmkU38LyqaXy3wDpvxqLjSv5jo1kK",
  "key12": "2L1he1XRZZmgMJe9aicRhzcKAhRiSZrVHo3QKybk3GrJByL4WQL1LTTMQvUZGQTaQWYEk8JRdKDWsdUdKZevZeXJ",
  "key13": "2K7S331rUew7F89W1gXXZVpV1NrBECB2dVCP9sn98q7nvQrRuo5WjeEEmnhbSZgiSCKDJ8zgnv8d3Rogv6raHiDv",
  "key14": "2zy1BSZmWyjpjgLBx7mWYFSN2RFkpS1UnXRHkYBFBRTnW6ZbfnSVk6MbkHeQmjnZJHtyEbUuB1r1jnihvEf5myUH",
  "key15": "2CNqR2N8xBEvZnVmX8xHTj3cviQxmkz89NmVSWt82JPUd7ueaLHzsmvhcTeSubpTqHeeniXvw1UbLCtBJmEJwDfh",
  "key16": "3WyMNtTVJzMy2n6sK3duTojxnjB3dsMQRqB5C1VmJr7MhYWA2PE4eQLehHL1aNYBdyAKMxJf2sxH2uFULsrYEGTb",
  "key17": "tmfPaEfM9YRbQUp5MgQTEcAf47xvsLBn52kDKjKbVFwC5U8RdS91Cf9n8EHqnFU8PuaQyBGe9AhQnnJcD2i1TgW",
  "key18": "3H1a9bpL5yAVNPfhyg2e53jcwJcGyMbbXYvMfqmW24CnFi7nnkbrJdGfgXMnGEYHUgVfxuz5jtjD5ZKdHYqmMFCm",
  "key19": "jV3abcRv69kvdNuNxkM8vmRr61bSNs4kTc5EpokBq8CapF3WZZqx3nm6dmXBG4rhXsHnkjcNo76iGGqG1VU4Scd",
  "key20": "4M63mBmAzPibsKFqLG2zL57F4nYhuATtyEu8Zm2YzerFGMYJuGQY5pwGKL71w5mBGaLMUUatsCEPZJySf5pDSZ6V",
  "key21": "rAgB8Cm9P4aV5ZigAtqXQnyKyRkQahLHkMsLWdAu2U2qQ8V3Z3LftiBmtdBEXiVveyvQYQMaf7VmQe2kMaAHYTs",
  "key22": "ujDe6sg2aJGRWToVPqPW2WHx3Utr5gQXyKyypBjky4TVC5UDSTSZavphUXErfy6ATe84wMRRBFPT7f1sq3V7t1i",
  "key23": "3srqpBfYDqKC4io1QoXXMHnnKH8yGatUy1T8W195eJKmf3xXSkr2RmMWq1Uj9LTFpZzUTECkErRFB9g61g4EwGiH",
  "key24": "4ZFf6CDfB8yV6f815bFdSFGSFC3VHW6wrj6Qb6rsvyrmLYARqbhbdcyRjUqGco8fpLcVGYPq29hTYDr4DhzGG6fp",
  "key25": "4ePvfAsdB34NRakfNfKncvoYLayRT21br1MMFgKMipvSUnNkt7GTsJ9HfkLtScJyacBvyfCwhiJbwfdjt6xSo5gy",
  "key26": "3JCD6CxGV56NxsoAbNKT6xGCuLZjrVhBtxyrsKWfzzUk72bA1GchatokGtpL6VcFDPYbcAGqCRUgNmP78MG6SCcg",
  "key27": "1WQVnLMxhvXRJbVqo5DkEKUvHwXB2QxYpkSQ9XXefBZHcUhJWtcTB2VMgkYrEqLDEbFneh1uAhzVagE9Q57Bbqw",
  "key28": "3kecruVecaatWWKD1mK8p3UtVwvkswfCgVwMURKM7mxULJJRQ1WHfdWYmYiVHP6tGe8aHZX7WgyWK5h6pPKGxQ6F",
  "key29": "HJgwt9mGdCbemcbuSNd7Vd2hAve9JMmYBBo4tCn4gZB3uVcMjMumh7dPJiSoNFLotZuedUq5iFnSnAatu12PBSj",
  "key30": "2KnMYPfG6XBWXUgciBGwiifBNHA9YgaDt91fEoqWzS6AHXvYqLh1zwEzhDBeEJz9fMpA23EUd6NywYUirztbVscb",
  "key31": "4HsD8GDiV5YrCW6zFWCY4KDLLUL6zMG1rsoYJ6HLpYBv7ADQwmwUZk5wcExPw3sjmbTfMDwGqkracB988GsbUTkz",
  "key32": "3EabaEvuydN1MZAZPwEq6p5PuoJAR5tX9o9HwMi3KeBwnbxpiTLSQ4VTjJHLoqYkUgDx5keueuZKK5XucBaM9UDG",
  "key33": "3WLTqCPY7DMeUkk5h4mjXwNJdqBAUQafcR2UUsQ6DMhYJW6BTVzPgXQoy5rqFUxR5ELLhs4zpjNJFZpudARfipxk",
  "key34": "2LjHDgmjoEHLr4xGZvjMtdtwMKuYeS7W5sGZ6BWLoQbXTzAnL44nXVJCKDeQtvuULKL6UcvJBzKWfA6kwzkffP1c",
  "key35": "3yq2adnf1pWbn6cGyU8uyzcJLDv3NxoiQ6rxyL6ZLtpY61cshxjqsUK5gvg4118nwtfMRGGvnyK1J9uiJUh8JPQd",
  "key36": "2RHv4R5evznLoWQ9h3qPKDuiZKYKqQRZcak63h4LEeALioN1Kcx2t6DzSqjuGB56iLGtU4cr4VVWHvjiwH8JSVN",
  "key37": "4b5oyp34HHhqjxosNCt7TmVTg8htDufV3p315qgXJJMMkrtFy7uvYnKymnUmbS2RL7Ax7Dx3NYC5D5Y3Y1mUnpsa",
  "key38": "2JXdJ3aVz8kufpShWVdAMEQdrA1EDMwVmbvtMXq3BUs2sVx97xbM4BnH45bqLiYgLDN6wpJaS8w5jJztdL2B3nyx",
  "key39": "64ecg74ogTJhsbdppij3vZzinCU8wNeoqTQDfr6ip6nHeFwUYWoLwqVLo5otVxaEVa8dZzTXwcF1XbriXi2wRAjd",
  "key40": "2bzLkDYZDa8AxgAgpDcgM1j2G93oQxbs2KT4mqk5ZbSvVmYJmpHe8mK4DZ8Bj6rMmWcp9VMZUnYnKxi1GF6p2SfR",
  "key41": "664knhtUoJvG561g368FA7HxZkEgfNSMNvhFFYtypi6RRJyEx7FHM1aAFzLV2ytUX7i7Yehu3sarPujTn58JXCFt"
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
