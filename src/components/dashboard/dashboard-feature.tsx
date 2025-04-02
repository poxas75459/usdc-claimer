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
    "sWefH81DR7ebe2NXHLRC8N8dzEJXmNXt7G65qPFUhgvmLiRbttJUPzvs33nNnBP41N7rYBmgPLmt14GdiuEx36E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SM4qH9kuhTsHXhAs5mBEFUuPBP6R3keYE3oJeAi8z5DN6LNRWV2e1fk2Li9YJaGnv9zjc237919GhnLhvgPExXN",
  "key1": "39LNmfgF1ny2N1fkcVVADj3z1zhfjX6QTwjDAuvomG3Q85apK5ac1Hy9gmKbqnXNuGxPgDJeYh1Dnn8f2PiTqBst",
  "key2": "3rHmfN1J7Zv5Zb7W2YYMXosDuFXYopXitf2pwo3KTZRxU5sA1DmgSyKU2ibFVFFc6yU5GEujWFbtq3D3PQpNMxDi",
  "key3": "2H7JUTWNyBqfik8d2v1uAfS4fZfWJLi5sv3tgKrj1Gxw4QZPd4DLTjh3mitqVjSUSK1fa5Kjz13Qi3PTxD3Jcen6",
  "key4": "4X4i1383hdJq3zt7Xyf7AnZ1cBdpsQARBXc2B84D9oGrnxhZvom4RxWujhbSXXFb4dQuq6dv8pPmNWVMHt7zBzyy",
  "key5": "4mNmojUSd16RaJQw8ni99ijubGtKVDkmPfqc9zNvQsTMK9fpxr3Vb2F3wChSLJYoL17DTy1WJxg88zyTegxunPCf",
  "key6": "3CXzMxLUibSMGxkRqUkFxypoS49zbATMrUxBMSPbNLJVy2RTxVQ7Lu4XDDUHx4PBhJg5QK7ZhgvoZswfZozwLyaL",
  "key7": "4qXSPP7kc4mPAJhZG1Y3LnrNys4oyjLY7fTp7xh2B8GJv8EHsZ1wN59pysHdRd7nQA9pzSMgdaDhNKCUHEjGGX1L",
  "key8": "2kDtXHK151J5PTHwaDTma2V5MdusQsmuTAKdqW2TyK2xHPUVCSY11cue7dw9t1fHRrZMXhNBEYsbY6LKoVzatqCX",
  "key9": "yNZU9Y1DeKRTDJAvCU9t9puXiQ2dy5ZNqcizggDcsxQdj7eBWHSw3zBdSexGUwBkLrrex4TqTyxJJjavQps3gWY",
  "key10": "39yZpk3BbYzTvjn2VwZ4fhnAnNvTZyJvUPpYokafnuaE3afMmNP1WD2SQxcx2MxtzbN5BHDdUF9hpHH329SFE4oz",
  "key11": "62ZBuV4GXJqo8oe4kpj9MT9cdeWkCRkjHUm9GBmBjwgv3Z4irhAjfRVybxsxTgjffpTqdpfv5BTbjRdQT2qqTgtQ",
  "key12": "3VZw3X6KEhjSNebNLwX6ZMLRke3UXexiBajW99sRUwyiJFsSFZQ12U1wy8x6iMW6U61dGJmYX9xfpxYbfbCeSH9p",
  "key13": "3mQ9PZD6FAzLDtQAqiFPrwQMo2ZSSrJEnX6tyFJtbe7Uj1jWgPP9CK7rcq2tYnF2MLDCMiuGqDUEgkaR8LtNzSfB",
  "key14": "48Q13MGyEMrRrSjSD3NR9TesnzwtrHPygtfidvwJybxZTwQwt7n2zNCfYVbZskLTa9vBzjhzbgqoJswkxDaxodfd",
  "key15": "3PUDS778mfB3zPq97yufiuTqvftRAhv2e6hg4mvxaa9GqS5mhWHkiEWpcBWNaxEgMFCQxAvaMa1kpXJUr9paUjSf",
  "key16": "4dCKLFEQwmsLSofCcxvfbuhCGyTuwxcgNbWGCEsrxSGJs27SAkAMr66pY8a3GoFB3cG2nS9xZgp5chnu9e8RArEC",
  "key17": "DsCviDWLUCt5y7vdopCjup8tzcaeiZzB3oXpJQVj4WnpngqVTciVziXgxt26Ue8jggkD2kKH1zRWMpYimxxQxjG",
  "key18": "45U45i5HPCYpdcX8PQf3vAt4gkgd4dxECKPST5WGwdAvgCrVS3zK5CzPV9zBT1SM7uqA4ifDJNRyfbVD5ThFyth6",
  "key19": "4WKeyRTmCT9YGFGU4ettgP4KBWdTd8aVH3nmKSARtymZx6A77dCwk9yTtUC86HD3DsouEt4dqwYMc8K6vRmM3sqz",
  "key20": "4uxk5wmuJkXMppL85ytD98J3VVwnUrHXw3aNhiUJbcyvv6zHf8aQ4dGkU45sUFtEvAb3TL2FBCPw3vBaUosvqc8p",
  "key21": "3KuKXf4EGCr2T1UDMYVsbt9s1JeZP3GKSiwD8wtjBpweSa3EXyGYmJ9ptVNjMaNfN95i7vtQdDTMzZ7WvbE1bEWX",
  "key22": "d7aAxaVmw3m8peHcGbmnzxrTXmnAaqcUKtEgzCK3jMZaG3CkyioPNiXjdZesyEBiZdpmpQXDxFV5ty6SihmYpkD",
  "key23": "4wn38SBZLfpmvLUYnQFqNg19MpZwCg8eLEY26ZXM5yQDWXjJnQaJeSN6nwybDdcUikrfMns2hqKNWgB5b7dSUrWH",
  "key24": "3e1WMBzqRPci9fmDfe2phSZ3GM76JNzQAUPmP9TbXTbcuve4Lh2nYfYhWXPXzCpXKVDDRTsnYVrg42dye9SC72yo",
  "key25": "bnE5jhqeVk71njpi4B7GAJHZTdLohTCP21LLDc5HZAGsCSnxW7Zemh1xbYdDBTHPHWaZXyRBrxoJRZqBCoNHLWT",
  "key26": "FHNeKt5SZGqUypR8SPyUxPDXsKnTyJs1PxFVUSZeHNt9bX6kBv9XmWxFmdiJqd7opiPjKydL5KaTYwEm4Xeax9G"
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
