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
    "4eXGn6Z8ZrG4jPJt7q4iEbyJksRF6ZxXbFLb5wWcNdXCp7GSfsXmmsvvmRHWTmXAnbJGqxWEZb1GHosGCAChqXET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1pavYoExwE1HLdiCnHAdbeQMtcfZUM98dygw1ZLrtRPUjwbwBhi9gQuAHrWR8mJNNvZf6u3Tr2CkH6KLsaEPab",
  "key1": "3R4hYvToXJwUaUXbVU3bH7K7DWwqChZSk8aBBM31vZ7jkhyAejSWpCcwp2iBzHVcF1kDM3rDnmySa1o5jhjokgAo",
  "key2": "pmiRg2eS3kDMMkE3wnxioE8edBQQJPReMXhBxJiQbcr5AcEz8SPTW1LbBpcfMCKnRTxMVrmEKRDZAmHYvhfnpry",
  "key3": "2rrqovNZyLDZNJshK5ykZf36WfN1ZXDo9LmktiNyZx3NvGmfCigJWebZN4QHE2QX7MMD2zDgN5PoX3i3m1iZVzwy",
  "key4": "32zYhYkx3xFM5U5NPWroWpThVbMNgihcWfRbhXcJugXz93bwxdKcPt6aSeUjHUBJVKrjp7d3c5qs4Pen9UzWmQX4",
  "key5": "5NEfFCU3GoV9Z56ETe6E1XNgvXtRe1SZhMJEk87pa4Qp91QmXw4cH4VotH8B8ih5NWyW3VsVWA2Ch9z7xhjLuzQi",
  "key6": "2mQmvPjY48imCpiAMXMgRA2aVoVSTDS6dmZxmqyNymk2HvTh8g9Q5ZzFGGRr666KJ861PmPXXNdk5Csr1NQ1SQ3X",
  "key7": "2Z63gszAss4FAVsyKFYVwkRiWwMBsDatmgM2zzSdjupt5uNcQwCNBuksmsFrz6tzy67NMGA9mwbRjDJRR8qKkSn3",
  "key8": "5x28ZmKSz8RJCjL5SDzDMNnarhZSNXhhKZ95bMtsxVQRLbPkLB63ERBKbvk7epbhpxWGafCyrA8nqGcgFNSywfUL",
  "key9": "3yVh9zYgeRLHQukLobKKtxRCwg96y4jHxjMtWDHNWS5W3Us2S9x7bftR67ykUySZ5jbZzdq2ZmBfcrAdLcN8Wdfo",
  "key10": "RxQhHGvHNmCxJGChSZg2BFcRWQ6sCaXnFqSmECVPVwzn3Pinb4wL9fMVJ4itS1PPagoDV9jxPU7Piv9wmuRFDiA",
  "key11": "Eai5bF9iXSB2r8oyuJGka6Bmke9FNq3ga69WkQ44ZGwkdjX4wQfJpw7uGUJsPYuBXHXcvUq2r4Fb9vNJDuXQQdr",
  "key12": "3ZpvjESHx5ma2Nz9npxW5YebA8x1wua9t8wnqwymwE3mEDfSnWBxYmMHwnsztfouZDU3jrBNS1nR6KP4h7Ypzq6",
  "key13": "2UN9LpkWwigRS7hsFG4RAsmDdUYqa9a2rcpg2cEraTSdF3z2mVNWxBJir6fA5akU82BRY1WANS4gAzByK2XXoVSX",
  "key14": "3cHPtQRU4z5rzYwHiN7C7DGUSqb3NSrekT7MYDnSFPNtbWExnvrBBLshrY4GzRywYfqmMGo6WtMa8R9kQX5QAmVw",
  "key15": "4p3GbUEqeergwAAuWvW11m1W28nnQqZF6qvLKjtyGrPGRTgPVVKnn68eNhpB3Tvjyz7rBMUTibetjGV41db55yHG",
  "key16": "WRfv7G8grjCUAXUkdEzYsDxE6TxxxNkbUgv9nMEDcg6gebbfypk2r42iN4HzMfQbLDLxt4dSw9dTkM2nVuuqWi3",
  "key17": "3hANcJfR1GYGbmfNdYVT9w4LF2TkbjQ5oGngv9DpTdLoPW3CBg8pS6zSmEoHbwUkHWzm1itkAmGi6DMgAXbHrb8T",
  "key18": "VMjWits2j2mN12MRfdEmcW4eD6VkUBr5MmkTvvwPbC7vnVRLsi9a3Hf4exoGdUmVhAa4xmvWTV5hCfJngYAPNa6",
  "key19": "6mhBTJUhZcfPH6iBm21d7gGydFV4PM7bZyLCqLwV5k99mKW72PWwAVc7Ef5yfDo87JkKVycnqfHpN64oNxjcJgM",
  "key20": "3f4RdW33SSqxRQtC75PqSYPST4YnMSXUUUQMrTTZHwXv2SP6a7Q56EJEVLCk7jwH6vzRTEAwH5Cp7EjYXULWGBrk",
  "key21": "3ZkNY8L4Gb6NBWmyX9iQP8H1EnTDxyWDCx2oU3Le1B349uTDpSpFujYwKHnRWvPZwwms1s66dmmwadrkX3b3pfUr",
  "key22": "3gUBfRyDKx3B4wxDehyBNGcPQJEKSH8UUgkL2GTjFXSEgzPqXUs9rMonxwXbnNbKsvW6wyjXqNApuWwCZvPQsbwK",
  "key23": "4H9DGXVL5cdLWFMRbNytUS7hqjK66YbPZz2h2PA95v1DT9s3hFnNrkNiEiUDqFhRbrqrai8jL1xdhfsJHCdpWZEb",
  "key24": "5oT5rqaaE9Cc9YQMavSuDPMDEaLmN3AcE5Bv1vgHbr2KSbbBvJnDaLuu8WmxhjrE3G2ao23aKgtRUtHQtv3QzCMJ",
  "key25": "33zU8KTjpmxUm3fUv6FuSNU5F1vXTW3gMxg8UjqEnLchFXDorhTXhmmUuM6FpGoqCBiktDiVBqYeyQtyyPNoQmRi",
  "key26": "4RgwYDtHttote8ABavemK1YrwyB2LzhbSjknrwodoQ1Hta5FDC14XFaSqSy7LpabTU1divFWMHgpZkZSDF9by84f",
  "key27": "3RV1prvvT44Etv4gPFr2qwEXhCfgg24uAjznS5X5heWuGb9aUEUU9ENCETCEctzsugNQbuxmaXsQCLDi3NuekKey",
  "key28": "4inTh6PeyUc51XLjsXBN5BbexB9WmMn65QpCQt67Juzwh5AsbiE79WAwc9qUZDY4GGMJy9eEPxDREiU55R9NW8W4",
  "key29": "67HNS1DV23maZXNn8cNiHzEPjMMThGqRnchcMdUxgPc9fvNGLKER8Kfr5AkBtgLg6NPaopR1RF7vSGgxb2j6P64e",
  "key30": "5yMXhReh5nUnkWWtnAqVM3vdEwgQ1xdFnncFW1QCd8LiqeCG9szLiGsP9UT9stTh89PYn9mQZ9b9ZMkmRBhUmR9Q",
  "key31": "WFP1GRRHzRnAf799CqNdFNNbJfoJXiubnLZfQ7tT4QawU7jwcWf4DJTxed7cb9F7Kce423VZJGaxgdxBxT2EQzu"
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
