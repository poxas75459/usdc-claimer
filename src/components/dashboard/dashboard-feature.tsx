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
    "4RWt9HodxPUqQpiX1uu56bm6NbLpuAwZb6a69nx7V11JKsocJjv8VQYSMjn5igTejGJPaNx6PB9XkiPJHVJQxNPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342scjE6njBM2FqssfdnGhFxv2Z47JmrL8T5fngDHryrB8L8wCzZCUP7E2SodEGFr93NY3CLyFCfuysiEeeRbhGV",
  "key1": "5LNkzGzuXvyrxjFVhknXMCRqzUdtu316ceWEAfS2KAJKSfd6Khof5HUYaBSUCTFNDDDT3jHxVjQPqK3NSLDPja4f",
  "key2": "4XtU9WygKy77Koni4XDb4utcBrP3uUYetWrKpmH28pvhhv1ZfGkFQgQuJhx5LFa2gv6vJK3asmGj71fYRm4wsHn6",
  "key3": "4tNRDL5kXVU5Sf6gV1VPUS7bhd32HvfsXbGPJqmSfxKuCJAZJYJ9PJvfsGUMDCaDmUg6o3UY1hMHxeLcJQaLVUef",
  "key4": "4QVRKbSdGr9BAbnvjxCHMR2hg7SC8rt3fFM6CRc1pvEii8yFPD8JV7gLLWobRCo5vPQdYoHKKSVQYFg59vSMH1Hb",
  "key5": "4jzikvoQSndX9eJCGLeorKEkd3Pd49eUPFsfCfXFr2N8ERhCBXmt8GELYYgZ5VGW8DDLAFjG3YRQnrhuEDTWoZEx",
  "key6": "XmmTWhCkcdKX2vgkqCNoFQuh2H5Z8FhTcMmPzkcmejHH5P4KxZnSMcqnk4g4zKB3R8zbh6HVKvGGiFpMcRDirs5",
  "key7": "4kPafFWtJb1MkMRxa6TJ8ukJovDPi7bpEAGMzANwpFyf51HLtBHgHsZQ6i5LkTasTQ4rfmwepULkTCKvVDmujVXe",
  "key8": "2oU5YCES4Pzq4jaVo9JaTCwm6BHFzAYskU1KWScuWMfW3EUhyRxbsREC1JPvHH9aTv997X1MJuf2SaKjRZnKzRRJ",
  "key9": "36Tmkx2Q8uK9N7mM9jNdo5znk9r6u5dewb5RWb3ippafPF1jvfwPDkTRLLYrWNMojuvgZnatGpuXqnwftLw4FnR3",
  "key10": "25EhJ3ZJ988AUd6pSzUfP5sREBV1fhshZsxgwvC721hdggJpZxf6ADQYmb3D9JigFFk6KKAwbBT6GohMB5dc4Qaq",
  "key11": "5bNQEdcKcTyFz9Dq48V1QpkWdEPfrhAnGhrJ47Meja4MPLRxCdDYRcnvQkqE9zH6keN2Fd2KSuPcbWUZQfHcsP61",
  "key12": "5rcpsJfpRuux75dBB6Q4xR4GAegyZ89btpssEMFsrNWxtxPSAHfwcFsCjV8A1HTbjb16QhPr584SMVsYdopLnDaG",
  "key13": "4HEer1SupxJaAo1XCFnwhK8AstaQ6tvHimtya99qF4RzbZekGx6UBuXSRCNggvtkZaaLnUHyiUJQY9mZLC1HPxRn",
  "key14": "5Q7kKYaWVePcC7P4W8R74iHTEYhEvwhy7Po2mahAyW6tdPCeZuqViYACiJcQR3QsHudGCppCziX6MhkANpmQynf6",
  "key15": "4vP34djCuKGa8at8CYrDao59SqkMaJhSxi8r4b2SPTUZB6uRBC115pBNWmu17r5RpHy5mbs7CFgKEJAVecqgLiRH",
  "key16": "BJgysqXUPqn6YfQ5FyEFSdwrSQ2YM53KaQyAGNsMFsbNpqxGuHq1toRbVH6i3nTyoz8x7WBy3Nz9y2ZE6Xx8AzT",
  "key17": "WXVATo7ixQU4mRd3uVUiwc23TMzwSUNHr78RcxTpYPXgmfj39PhvEL6CmmoWKjaEznENZV4oR16kbX18TtJWyFG",
  "key18": "4zEnJeDhUmAJCLVcCZqdXYLAELL6hqfC7Pr968xV3ZgTfzQPbzCvTqKG27JameXVqwab1Z9cinGyLL1LYucJMZj9",
  "key19": "2pLGUs8AVbyADXRXSjUDp9iraHiydTyZSnrtuTgFhn2zvs6qCQjwAjsPG6waAE3SmM2zy5bsTkFRYgD1Bn89TD7t",
  "key20": "61q8GC4Fs6yhykBXaszpJdt5wjNYLh7P6fGcR2y65mRm4RQvJ65k566wEACMPwv9PkjKfbiu73676eBFJc5CTnLt",
  "key21": "2SApN9rLs6Q2QnimCahCWZ5ZKHZHkKVsis7QFFCbiuA48JaMRikWR8YkRVDTL2Wg1Gnc3JS1DuLSVzJWBZo4i1Lp",
  "key22": "4S81zvjyypkMifGscnhfSWLJ28CFHvDzeRxWfZY2ZJT42Bh6NhD6scNCZrBvW4cPCLUQN9K3UP2xdPR46Hr17LCs",
  "key23": "Cyq7syUK4RmanmgmSSDbyP9mr7oU9HhXfiU34TYipUKrMBYWi8BGBVPY83DVqkx5RMdB7k7yDv5XGq1drEkSvdw",
  "key24": "29beu5iBPsXGNxZ6fSxqQz7DFiFXoE5PsdAZCLi9oXRpD9pKaakEWV3vXZm3VXcaf7mKdGWXDqT1QmcNtv3LQg1z",
  "key25": "5ye92qzkfVkE5brvRjuc1BjANKuMwpvUgjEVS3424PRL6qt1RnbBsJo1WPmAMStY6E86GtjCrwGrPEkkP3e74DCr",
  "key26": "4dv9ZLeVK752ZcXgQCxhDbCPCoR5VdKXq6nQ32xTQbJurZUPYsHC4hw2LYpBtDzPFLksfLJnr4BNkT2zU2kWM5Gb",
  "key27": "4GeKtLC9id7qBX8QwsUskevNzKxE7aPs2yqVKLnmzzJPxbEscQ6f8jqBLxUTmMN2kNXJCvZe2U4FSNwRdSANQCmL",
  "key28": "2jzdTJ7kJh1HYpadQVMtXyCov6VqxCaLLwtHMGLFaUeM8voaiV6fW4pYnBk5G1PiSaMBZrUq9pCRjJaxT5tRGnsB",
  "key29": "WBrZkpkC8LShUFF2MUJwubRQZKFjbggRxJLkz82Ym6Q2ezgJXqEwwczyodr6BuuzWiGeaPz4SWKg6NsyETMKsyN",
  "key30": "2odXqUAJnCMkJhaRzJo2nUEk1zhS1aEfXHKgJg5SPxuXrHMdDArwC6rd8XQiFL2ytkbRMu1mdC6MyzqHLNkh37sZ",
  "key31": "2Xxt7kB3jzwwV7oJNy83BsdiJDoM3p9Pti5FkEsh4JuhSpagzGS9918t2fFDesKFzAvUggZujisdUYTzB4i3K9Cr",
  "key32": "57gkQu35SpYFuN3q1XThmimX6zcuycif2Jsjkw6df8mQvJpSatRryPaqi7AmK5DkrJAS6XR2jA6hnv5Xo1JyqzhH",
  "key33": "3fjP22bg5FF24GskDiXxdrnxoNfnWECr2efHiozfmfRHB6QekGrVA2znLXseZWRrKyNqNgo1D3qsD2xJy1tM9MWi",
  "key34": "3MTZMQdSMzqyxcCXkRHYjQPoRecQSASZq9gBDxivcmXssdBc1w51pxgGkcjs99hBMNipNdK1mCn4TaDtZaK8Q5Gr",
  "key35": "4pXH1W1Sp3t2eSBkL8obNbKrb7reier3jj9Uaw391DLo5rqzqusAqoMHJTKtu53F17begB9Rnsjivb3Bh9gszDCK",
  "key36": "2imYLvs4CFqcDeFcLmD7kRbFwyxLU1r5HegVUbnqj8Q7vxriBvCuCUx1BBN5w3fa2hopEuuFbTR2NveBWkVsPVbi"
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
