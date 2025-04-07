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
    "2aXFf6iET4JmWt7qPgXSc9mtpdnJHHMCD2aqAoVjrBhYKjUSQY7Vqh2SW3sMVkbNjHcYG6dGD5u7pKaEijRBRSSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXBRNmpaZL8wfetGR19v7XhQEZPxahqqYvsFiqscgdiVzhEKPyzzSCbiHyCQeJ9gNVjhBEwHCvZvMnuwUAFKLkF",
  "key1": "GFmzesBBNd97zCotFB4rJ51coUqfPwKQKhxfqquFsJrR1FgPAJgkfw1kRSXW82EgJxZHvZUfoTqK1XqhXBnbtsn",
  "key2": "2ZZJWbfNTUSeWGVE1SyXM7YNmSy2GZz81nJcf1WSia44EZBLtY9CDNb2qnHNujL92S1RLwFi7Ds3rgjcSTq6U8W8",
  "key3": "2TuZEoK7RkCYUvDDJs6DVkRH892w3ZvcJQ2dvitf3MGarSYDcb3pxQymyTnYch4qfRTG1GJA77kcT5QZXWJ2MusB",
  "key4": "3wY4Hy9zxTRifUgdGKU3FQDa8CVDRSfNtmVs2E2UKcq1N7zsHKSgJawzpFNW4sad5pX6PyXpnHu7wUgQXLAXTvdo",
  "key5": "3dSRQ9pknNJVMZBsvqz7af2LcJA997WGjzRPEVqY4ERcE9kwRJaNJL32siTM6w4WUUhJpPajnP4t7zgvsrU1XhWV",
  "key6": "5HqBg4cb5WX2jX3ujQWyVHhG411ZZcYeKq7jjRBqXegkNuZv1PKetmiwzVXosfhkirci4jm23M5TS7dSup1A14EL",
  "key7": "2X5mceijvsA3TyhZnR9MYeu2Mmgy2kBMLmd8qzztYDwxUDThvMnnp7uL1hkMxmErVziuWVDTgkXTQDrvqMzxARX5",
  "key8": "58P47dFXwAk9Gcacr1BtAVUBrYiBFM4TqVnas951HqF55dyZsQdMwsv22Le5Gy6SLvZtK8zeDgQVVkSFCNJHxj89",
  "key9": "2wxAgSmep8KbRmfSm9qMLUkEf8Hqmjue8xPRubeC5yzmJjzjLw6NEBsWy7UDbHxyFRJgLJVNDrUMc5Bzgxz5rzjv",
  "key10": "2zWSNYkk3CxMbzX9hB9pAMJqZutwiB6Vw9zkDnwj6i9nyBk9hCnsFyxMd8ACF1cnZuE9oyrgPnertYaVRFVcHoYW",
  "key11": "85L2rLjqg2W3QAgvG3bLnCSrQjdvhFxNNQKjtDmCt75QB9f13AXFVzunAjCuQmrMduLNHehF8ha499AFFMPjMTe",
  "key12": "2gNWwLRQLYzKeWHPbuTXVfdAbw7b8nrEZZ6Y6eLjV8z9x5MpzmR7ueaUVQvdP6qgDFi1BhuR1ufxngFAfNupP46D",
  "key13": "4Xiem5YSiL7m1oK6SCbhaUQjdsnQ4yYigk8tbaSL2ag7ngFHQUonSXcSmdZyKdw7uK7ivDADLYHZwLTnpV6USACT",
  "key14": "4KoYAK3fRSSLaoLjQxZpxyDg4oximycvUNy78dwgFHW7SiV79ANuHRwwpzYSrK4TZqkKrSXKMbjCHPVvToNuP7J6",
  "key15": "F4eKnRgW82BX1vYR7RWYFCGLjqrShBAT3MHQcE6qMceiQvStuo2Ntv7PAkTjtH8V1x613preZymgKWeKh2cKb8p",
  "key16": "2EjruCcjPbYu42HHn6hMfgztqpnSP5oDEHvFeawTpSmT7RSKdtUawTB2SPfQ96B8N42J9st76CQpW7PSexdJgTR2",
  "key17": "55SFPAWTUgg1NNExSMRTyvBBTsk49gYVpPSboCJSyS6FSmDap4vuHjFA1VemHt5AcPVS8DirtUxy7J8nAvHozhmv",
  "key18": "3CZhze4aPSGJpe2dx9cYMaMyZRfKu4wyjeLKftNDtESbUVuWwT12xSZUXNd3iLgmCUVDVG9gkF2BwZsHrmRWu7Zi",
  "key19": "4sjKkjAX8nMNWNAnJEkYPFRNnotpxJqxkFxNBm4Mxt44heKuJ6wZ9VkYEevBagtfKbXEFwJCgvMvdeEoCMT8FP9",
  "key20": "3aLJBzjCYhJyzAN98e6kWEz4Zr2sJGwaSdUW5GDYWfNqwCfdgQShwjotKc1qWq2mEjiQpEXoLndPwwmbKVWDwS44",
  "key21": "4dtYe7bq8PXEmFBsHqSp4jeimfKxuVXErwCuRQG9cazjQteVB6ivRHwuT1hsXJHGYpFaYQfo3hUSUi2goyVhxGcB",
  "key22": "4yKKTSefFvfNuM58c9ZCHsjZ1L5seDNDjpKJwseV8kPJ1wwR36xGE1dsJsZTjaoaqg9vq3mM8iCobXna5NRttwEA",
  "key23": "5dUyM8WcJJwbcRiqsRWGXAooVvL8ZfebF5NfMfFf2EAAYva3C3QtRCygBXJSLANNEWxfubEyy3TBntnTESzq5Pjp",
  "key24": "3TK7rtrsuUTHSwFeq5BDX8NN1sd3NjqbtjWvtoEpw5zVNmPLErtD1ukh8Hkzys7no6mJ2LJHXa9WKLS6Vnkw4aWn"
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
