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
    "4GY82RwkF71pbpeGMUSurFyEfHHucYT23NPp6zau1LS2ibVnevMLnnKo4NmkLes7Bg56xhsZT59iDt1YoEDPx8GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZER6QfwG1U8V278uFLKkQmeN83dRwM13otjhBao22U8goitgULXcGZzGox42Lwq3WNWamoz5Hpyh3B8SVRN2WY",
  "key1": "3TuDuBSz65jnwYXmAfkXG87YLqCNVRLuLFGvpz7jUn9ksUro5TEg2gP13Sz1Ksp1obfZSyewzz6NpAqDSeEu2Qy4",
  "key2": "SiHxeexPc9Dh5AuMiZnS8oPZ3Cv1e4qfbSpgkgJPNmudBkko2FQYcA6gEy8hUPGCwb4LqRJdiarQN3Xu6r9uUiw",
  "key3": "5CSbeRLLbFxiYG8E34orZKNMCcsgRsrnNx3XNYuZ2m9qvA198VcrrEw93L4PsWVE81Cch12yxSQTLdpYmUHL6D5s",
  "key4": "2LbadNo754LghaF7fWszrB2cnh8kfFkSSBQBqWDvpcM4Ae1S5H8roNYwPAU8Kz4o7p5GMGm3TW5pPSLLhwGoupQT",
  "key5": "gMdjuGkZYrmJxq2rtPsvgMfSXUHBfiQAyc9C2Cr7ka5h8QGY6Qv5PCRujbhRjNvrhTrXn8A9ZcbsL5dxCj1YqAT",
  "key6": "61ShcdZFnKyuTWMS2nrPLQZYvqwkgZgT2KK8QotTX8Hg5QL4VxDHPtDfoXwrejx8g8SC75HvjZbFMTBzWSXtvyvb",
  "key7": "5ib5E3DxFxWYTYLCv2NPwaSkgRbkqEUS2rSRzH4CQzg3W2ACQL7aYWJZpAQatuGWeGzRcrMcGEd4ruQLaDa12UzN",
  "key8": "5uKwxtoJ9TB2UHdkzTsPukKNkvueTj2p9Qf6sSCL538odPjHEhSNoMfeo6hk85rLRo2kNWXtNU5vWsDXGoDc5L6c",
  "key9": "672vvoZVnSHmM4yvPp3fKkUx2NqqYCQ519x2eSG4dHBqmQY3jPRgxfC7MCXdFfrVLpyhbbTEwEL3DFPYhyfaYJ3x",
  "key10": "3LZ33G4H36dnWuyPKpWmcnuA3nUto49MCdDjQfz94Rj8FrLYiKiyLRv3K5VaBvDtVxcmxhSpMDPsCXXagB8E6yxy",
  "key11": "2FR7bw7Sie3JnoS8B1WicEGhpBS4MiDEdi1GS82XoM4Zb4kh9anWYpDJPpBTW4gcJxq4uVcSraLGr5MHiMxFRRho",
  "key12": "3cYq8nvpzJjP1vugtyBA3MFM2d17Ckp5hzw3XhWeY5a49eJMbemumADhyT7b9NznDjRpHC5tC5os7DRg1KyuWG1y",
  "key13": "4DKm9BY87ZV8hHGMNHNQTg59RbpDya4v2i61wDf98Gqn2oa7aY65H33WAawzSZzxwmjGMGbdfhGhEPDLai6x6k33",
  "key14": "3HydSDuYgwed9Z1LgHS8QU11yRuXM7yvYWUzmD7eZtR12eVT1uvtgn4ERu4nRd58cHxJzqT1ixgpR28ZdWtcdqVW",
  "key15": "4pttbCiYpoAauLnfhqjHF1WyT4NAFa9MxEeDqxVzgbHFpwU6QNBJ9Hm5cRJiW2nPYPVJQorYtrJEufct2ihDAf9N",
  "key16": "3oZtWQBGaVn3gohriB2hYwFJrxHbjAJr4G92pWuCBcr4HXjjbeKC6qe4qztAEMK2oiUr22s9NKAeyeT5FypdRxSn",
  "key17": "2YhnkARDxeVA8uHDgWxJWzHP9Kd8BDo7N57jtdZVgarSsz33i9FkMDZQZnYBP4cNSQ9QioxDfXgMcNZfbouLcd2D",
  "key18": "r4rg8Vhx1RAg1KFTnsNacz6rwbmU2gRdnuKtHppQuaV9M63aspnCPPiL5Gw6icSKtGLE55PDKmRzxtc4yqMznZg",
  "key19": "43d42nG1Zenmphxhs5CqRSGjxgQzEX6nNAYq7vMD4YEpsLcp1qLKqhA3Dgn4vpNuyjB58VXJSa5H99K8UqmdrT3r",
  "key20": "4b4uG3Ers8diqfcAj4wKPHZQUYZfaP7532o7mkoXdNAD6w5vaBYDetw3z6367XUNqwHQ7avLkquCBCDwjvG4q4Uf",
  "key21": "5pCfK8LAvQcjJgBQJvZgJNpzz6UNpn4KUcA4gRoKVQxHDSsH5q1Y2RsoKEkQ91jbAh19UDgHdjZabvbC3Ti4iAqx",
  "key22": "26b41Ega1g2sGXCGzQfmojmzwdZKADy31fBWqCYfBpkijCwf9dDmbmS6Meot5i6ritU7QK4VMdCzq5irY2HwQQz4",
  "key23": "2KovsX2CooftUkq5dbmd65e9p17WE4Us5GC1V6eWixvJhxCURKXDmrFGaKzCYw7THqNnnWXioR1gSm6qDviiheUv",
  "key24": "47Vm8JezTieomFbuMqBhBCyZjrFwQhZZNSRbiQ77CyA42NVQNvccKHT3oNPVuSE5ZcumyLVhU5RLK3ftjjTRsjZz",
  "key25": "2YBRxTSPUWyQZtpMknN4mDWuyyGWgWRhyb4DMiEhspb9ZwvUNza2qMXFQ8qg5k24HV47zs8EGrvoqCwhZ7VJxyTc",
  "key26": "296cpxMN2wX75Rfu4uTiH5x8fRVdtj9LDhB6Yq7mg9Cgvhh3wh7WN7ffiuPEPioNkRYf956YUsWnAK9tn1BVccHM",
  "key27": "tuDxK17gKvgjH6QFABePTNWmQyksokrsXEVrVkM8P5EfiEnTRua8XsnfBywzLeZjHfVV7nrmYfmvzqc7SojD8gt",
  "key28": "3jD2bQK1N5qytT18nZ5cBpTNARC9hJ8Ty7Jsty3v6TWkdTrp8ZFx36xaFWAidHhRenhBhnNNS4PvG1PEfxCkBd6E",
  "key29": "5C2x1jzDqUmRCeRYgBo9rZsPTrtZQQ5RQaW7eWtYQuBzj997sDhCuTag8uVNh2nKTkXLi49mxzCHQT55qi73UCEa",
  "key30": "5krHKdbvZGT3cSLjzMf4Tr2UAEv33rUzxVYKUJiUTSKU4fULQ6i2j5j7Pt6tJy9bGD9WiFWXF3k5LsVL5LMz7PEd",
  "key31": "3FohWuF8rBHwcCZJkMbrc4zWBbb78r3UyQpMTd9ERVEN2PvcZKDqUTUyJfDjGgEqL34TZvQo1ZXQ9AYV8dPNpX9m",
  "key32": "66KQyAkbV3kfm9TgAHEueAFPxKFbyi21tKg9fxGzh28KefqakonQcKk5qPoSGuY42DVp15RwYnVh5Fv27mPogpz2",
  "key33": "4Y5nZEFynjSMCEsavdqf968iEegLb9VNohDz4eoC3o4ybNkCUeB1Hfoqj2yQioscNxRuPZosGf1vJVZzBKr22aZK",
  "key34": "2GcCHXHieJJD3tWDosvdZ1T9H2uyn7JT2RAQhc4koeqjHmcbKPpW7LEJWfptWFiNFnMurqYV1yMFAaCL2V25UM4T",
  "key35": "2qFcvki2HWEcHmK3DLG8E2ij3VgykFtbAS7Dv2UL7HP12AMXaq6rdKZih2qjhZ3wQZHEqVSLeUegwMWVN8rk1KPw",
  "key36": "2woeB8PBCw6LdSRkKrJLPQh4pAoLinTu1KSf5Ar6r8sWLFaiWXYLwQD1GqNE4NNRedAyMYBAG6uJsxV3gtB5KDHi",
  "key37": "5VuLb7bRqSAKvJ43xdSzqcgNiycgyYrJ3RAxf6UHzAhqk2bTx6m7wJWYnuLPFNk9biyewBtotR3AqYaY27xmKbL5",
  "key38": "3AcqoJqrKvZC2rfdigYbw7hrq3uiHKmRBbh2DArULzwNwJFkJTD1raSMbcct3HDsFpJJx54Phonuc83iX77pGDEH",
  "key39": "Yu2UASch9JQrfyd5P5w54U67u3cekHrd7PjPvnSgr5zrzeKJgzazHyRQKvkwca18NRZsnyKmnDzKaaAYX1kXB6E",
  "key40": "4S8pWHpPUN18KzaccaWYR1E3f4rMmNp1DAvuR9pc5THiNhAoadpkxjCzcDcdazXhazNtVJBZdRX9Nkyv698w4cSx"
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
