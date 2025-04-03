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
    "3kScgnwAPvsT4JTpqxjJZCx73ixbEWtKEhFSmNwGUAu9WTCBdyksSKYwbfLDGcEpXKbeM3FLevsSrYfaeJak7qks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQ3cK3crdp9kGfvFnyGnmQmJYZkAABCCWFjtXVdigdk6AHrkyQe816WAqWJJQcuR3EqLaGX2EhKMJZEA49uxjzr",
  "key1": "YnACrtXyBXEGDohCjsRgjvam7L6cFJrKowjLKW5TFdPi9kzYdw668DxMXrV2HwSxxv7RpbEbRyxkVW6bBPv2Zvx",
  "key2": "4DuJLsV2WVJFvRjeL2FZo6nKyUmcHVT9Eh1UGMf49NHKjqxDJd4mkgDw28xTJHs6qc8bSTTYZBYZZQweSrBQzaCS",
  "key3": "28rRDpQyScJKuyjdHQjuHLih7YqAFFWU8zLzQXJtMhy5tNLgCp7sciBpQSv3YFwwwRz98223R8t35p21xKsJ9t2J",
  "key4": "4wC2966WH3YLiHhp6cMYX7T4azyHn3WACURG8urw54VR9zaUXnDXNBWrNs28TsHRNHUn9iMCwhx2YBLZ22tThnRw",
  "key5": "3bFRS6rX3Cbp1r7RsGzoSrjQMRKNGdKTvE5fThExyhtHtvJ6R4VRrT2UmsDmGH1wJy9TbEt71dsZk9A9TTkBTRSY",
  "key6": "xcX5paA2GhmhpJUMW5Xj5BTJJiAgwF3uwWpzakDu54vF46Vmz6FSRBpoPJe8NQjRntFT5hsiFVFKDozAkzAz3PQ",
  "key7": "39GZFnKgqcj2pcLUyf1qWr9D3AiGY7mJyCUVZQwPnGmW6BCyoeo5Sn1aSDKPUs61GExvBPa51vfiZkCPifmBi6hC",
  "key8": "2WqQtCazsk19RZiCLxZ3xuDcG8jXi5yWr8UtKnWjNGssTgcZ7F4mVt7NucSK8znESgPjMoNPjk1ppZxqLhNa7gzD",
  "key9": "3LAfLW8pU8NDNVLWeYs36L5YwdgHnyfBXWP8LS9SHCfhy8sQgEu23JrqajVrENXmbaUFD6RKWQvoKiReJDS43td8",
  "key10": "56wF2E2ztBozbqmBXGkqFHR7cK9ny3YUejp6ohK6J8AxXcjgX8siaSnak9DTQRyf5qkHbUNyFmkBZXT7FezUG4HG",
  "key11": "24rFL3pGxKv2x6K1jTLyhGfpE4hXKsuk19yiSA52K6NJLsYmsBj6oyQEiCguK4VtYP7RKsdzKssqmLcocSGPH1qS",
  "key12": "4iybWFMQeFupUqQp8paEkndTfB1DCWan6PRVNHXWwSe9VXeZoU6GkBSjiddxT1RrNQSzfoTj1hCo8xebVAjV8yVc",
  "key13": "3jdgN5UQvif7jH4dPpv4BhFnMCQURUmd9thfqp4HBM1euwzmR8ip7Q1qjm5rgS31iARiqQKqpZbEW8we1kRomB1f",
  "key14": "2gpn94XAaM2DdqTjo5joUWv7wfxQzL4wv27f9BUUcYoDTNcxevMAWtc6TjxAYCYNxKWjX7955VuGEkyi8DFZtV5m",
  "key15": "ugcgsaawUD5UBRdNCX6bdU36CH1xRGVhU4pt5AkvRPWT5F9RfQWFrWracLRKWuxMy1W76PhSBfb7FHSgY71X9DG",
  "key16": "bNukNSM2K5E5mR9iXZy6nxmkLPKZh4E5o7GRydFeesWPcywv5UucEmGTXx3TyC22SoxBrspXFJHZjJf3JfYRY2F",
  "key17": "5y95uR4Cn97rrK9kcHRpb16KjgmDEbW5ymSz2shRG9znPw7HR97kKvn8Z3eGZt2VfLrsvQq1JUJ5641zKetVjLzK",
  "key18": "g8unGbSDXgD4GAQWaMc5qvs3MpfsqBr3hVThQpf7vgeK6Q7zpS1esrxmSKWuAu4eMuFbPxLZtpAFr1A1yM3bghM",
  "key19": "3JDenWyMX87C6MWxiueU5xmgL9zuLTAkb2wMgs8weMYeW437hYdEq2gJSzJUj3m6D3DC1SiVjy547QvEj6zfTC7u",
  "key20": "4LcU1fRpcC6BTm64MFsFBszqZSE99QEZk2FLgi44PeSS15CZXQV8wCQC7gGgSSxrk4aGRyh6ZyY9LDKRXRQfL3Bm",
  "key21": "5mZQfw9VM1NFgpiMVb7Bgih9trvFCyjHCTLjbhq3ZKhpcG5MNNAsUerck8ubWtj4kVdj4eHDivv8C6LDhzPACHSc",
  "key22": "vHWr2kp8V7TrU2XZv87ije9boRRSesaHNzviHnjAGGoM1W55WgStuTLEF4V4GonKV8SWQe7KZqihhe7pyANVLYw",
  "key23": "54wGFBjN9mJRkZivY1TRkqWkLBRGhnXHZpgLGeT7P6wsKJkyUSFuwj5vdWqRv3G7MMGtLU8R9oJW4DTE58aaqnri",
  "key24": "5EW414ER545Qs9UCD3DPWhCPmcAnZ62ciwW6AMTNDm2wC5hQVWWSieTWhQvvPtffkMxY8CkQtUBrX4iTtLYJKLXC",
  "key25": "cQQXc58GZVfD5S7G1J1QaCEgxQP4XeQLUwisrn8bdrMtpVwB7Xm5QiTiGA9MMgd6BjP1no44qi82AJJzT8Hbusm"
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
