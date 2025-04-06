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
    "3MQ6KUz54AVvTnDwjTrhFdVJUL7x27EwpHy7vcf3GGRyYzL4cGkfGU8qN3xqmzJwZ7EcY8PeVwmXMhsGiQcVVoVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrpMS8hqZd59yTYNeFDs7gFYZ8pqr7RvvEF3ERtr1ZnUBYHuQVaV9cL9dfnBpQk6Q871Xab8gPHVN1zCaPDcHUp",
  "key1": "2zUVpTRdYuUG6RQkqvBSfcHZdmMXT5t3gyyYMqoXCtNHig6HYndL96CqDu8RNth1uX7YdJXrG9HjXJyRFX1YhF8X",
  "key2": "5oJWo5CJ5BGdjyGfhc5u5AJ7cQFndUnnCV5hNvqFMgLa74K18zt8R11ZbTEEYkBBNPVjW3vB5vSKaJBGzJRkErmB",
  "key3": "5bMnxWJzmQfpoLmdxDdPKKVAux88w8kbifm5igGaxNV8dkHCniCt6qFWNL2RczAK9BVkvfEdCELhHga52ktrQYVs",
  "key4": "4i4Xvbn1jnfWn4JZgYB8TMS1onEzYNx9bizqLR2RcMs4hM94WDphRa1o1FeonMMRyjMTzAVcuK8MZJ76p7oona6L",
  "key5": "fajDCnkqpwsssTWPHxzppJrXe31dxerstYNV9GcRVa3L3nnL4mTmUz4u9zwErJAHmy1mDR5UF43HJDqNxUrgLTA",
  "key6": "2kkYi5aDxGfEBg4gviTH9aCXjexAX8SzZZtgPyj38ty4gauvX8RnooS2d2pvduSaTTaEZfRm41Q7pJ2K39gC8udC",
  "key7": "2UWQt8VkVKeoNuPnKrMKthsS1RXXMuYn7DMtJ9eQLSjXhzw2UfKJuhFuPRxU47GRJVEseSdvYSkv9mAqKtEYxhNS",
  "key8": "3YMGW4wEvZacWFuj8AvznXUfwUSPrqgPJqqBCk3LQ4WXudeS1BUtggmcQ68Hoa7MRWKkRcjvWHW5AmXeYbsp8Rce",
  "key9": "zxgHkk7i18r8B4ptUzQXe7Xz3pnazm8rNT8jQmKQNnEVPGYztYzj9EouFJuzQMG3L2VEdsijXLL4hvTG47h3fph",
  "key10": "3RzC9FVdFe9xDQsVPj1yTkWddxA7mC44f36CVFXuqZ6vwfLvte2jsDJYx62WNcz25XkS3UxiGTq9NzDKzH1degS",
  "key11": "5EanJJAUD73H3zJn9hbd6NqexBdBPdK8FnDKFpogFccykwo5cNu9k4QxW9wFWtFJm9AkjKynbZRGnvSTEcWyNcBD",
  "key12": "51K9G9noGKg4yUy4RTFSvPtXndgS8t1kmeP322GvCqZCew33HZUqcdvt8LH8swcYA96YFocrJsG33otLxTehpKjX",
  "key13": "5cHAPikcceWPABUAyimiBvudYYcq5YkBWiqHBfs54Le111y4XG9aDHoFSidjaYyJpzAsGYbGQM5d5XcFmyGcJgwq",
  "key14": "3o8fNT8t9SD3Mcp6UpEsvR6pU6ztY49AU4Pdw3akyNTKJyKyi8hpuwJaSniLYaiA8FpWRuSEdQ1RAYA28VUQQ6tU",
  "key15": "5keXQMtktJeV459zszod1T3Yj2WMgwrQoNCz2wPqQs85s1Vff73jDFLRNg2tcveSHtJ9bv2pEejawYYeJEqxMbzV",
  "key16": "4S7PSn2R5vGBUwdM5ShfQwLxAinEhUMcxmdXrKHPFYqsSqXnebfDk4QfVerqi2ZYa2fc2E1KPu2dhwbZ7mVPB8RN",
  "key17": "2cRJs3VpNExHePKX7fv9CNd1Y7dyZdMyh7E1DWmNoB9EFVBoRzCTT1scpQtdbL64GvGTmcGztrLNFScsGRg7YheJ",
  "key18": "3BAW8TZpY4BwphJhtMGVWgFAbb8ea9LScHhU1QvZ7ZRZMTuiW5xp5CSa7YvkW97dtc5tXAEg8ZwgrarASKqVzUa9",
  "key19": "VcKNDYk2tV3hBrWQz5VcG4rnJTGGUkeTfkyzwzXo5ns3UjRuvofnExahdrvqr5hxfQmmBB5EFtFGbmPP4gFPwAC",
  "key20": "5AnePqwBUyzr77GGkUSuZWW7ypaQPAFiXotwoeHncnqJoNNBj4eDdZjrqDPxPtzHAnvjJRbtKfnvM4CYk2e5TZdE",
  "key21": "PQzyCLQGTKnnwANSYaeWkTHHojNrhV1P6UizXPfUAXSDriUNHH2Nm38BKyyHLN9VMYctHsg5gan7L5xE4jucD3x",
  "key22": "5sB7brsuBmhDuPSJGKEfbLzyqKTr27jc8g6TfG5cazcYXb1wd55TqdyF1RNWCzzBUn9j5kbSJYKe6vCGAdiEgeEu",
  "key23": "2d2iAGAakEZhDK2eaJZFKtgtjsunakojjyA679hnhzuxZiTrtN6HJVj6w1uCuwfKFakQjKNkWDReyLsxq6n6uC6w",
  "key24": "5f8ehqiG2edXzwetWBCW9sFyzaen74qvMQcYaQPwzyLdxT8EJGWy2TyjajdRayaDzSmp97zvHqBeXX7XoBe8NqeY",
  "key25": "27Syweht8dEyoSfBBk6sTh772bB1Mb31Qj1vzHzKvqLu8DErjGXBpw79DZRMBbkuwSrfX2gXM3fDytm5ytNbwwuJ",
  "key26": "2dG98G4jMDRYqJ3B1opFiZJNaV8SGHPAiYLWTnde7KKiq7k7M1BuJmgT2yPwKxxejw1rU6v4WL7dkQiqs12Bcc5n",
  "key27": "48Avfuyijc9gJCfMdr6639PVYvcvSpd1ebYaf2Vw7GuafWZzKXwQFSfab34qi8RjVZKfKqKjcPpRiR8arz3Hzd1R"
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
