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
    "5yqxyGB3f38TYq7FFkA5BA8XygQvdWjB6nyvdRoJctg9JKpnabS3zoiAr4nG8bcJ6mcLZckNt3VQmdD2xdGDSe5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yr4kKkjvwafZ8e4ooCT9MQ6rEaukjscczXaXNVk4QRsmXVAPE35cpn3i1nRJD3tcCepYYe3bFrTz2UYqMW53FJf",
  "key1": "4VQXbufxFGGQKpe9dKPhexFJjjzjYdC4omcJLW9xkKYe564rx3b8z325mDaTMueUS71uZD99X8chpTHP6EbBNUsJ",
  "key2": "34c9382aLkV7r8RpUT6t3LLomiM6Tw4nWzc3d2MhjS4Ld66FsYNuL1psvWs2xJdPng6VdFq4FWVbFk8JwKEnt6Q",
  "key3": "4QRC9wi4w9pWhnuuZn6h24TYGEwRUd1WyMYzJJLnpcQUZ1XecaPh1HEbnQTwJnSib3PuUteP2PphcCbZ45iqBByH",
  "key4": "44pYyMkFX6bNBFuzKEoNrpouVtxGJDsaxQLkwXZV8eiE2NKGra3gFYYoCz63X76aGDd8nniCT96PKbTtv9Zsu7vi",
  "key5": "Pjxwq5AJmvoKoDyFjrKwjw23rmwJRfPEkBTfMXmwPXb5RjKidPcbZa7LQYtbupwSPThV4s8ejYM1E1RmnkJH2ZN",
  "key6": "2ZLK9NSvU5A5vFUcRjkADsixPkGzJuyqcDwh3YXGG4PJuX2H6qLVRT1mjYurcsy3Yqe4on7uWvHH996NrHBeDr8j",
  "key7": "5MAgdYMn8UQ27tcsmgmjYQnpKF9pGABHoEMWdFS9fiLaLJa5Q48wLdeYKSqyxdvwjeG1pWAHHPCehCTZBEcpCZ7A",
  "key8": "4wSjh6pSS7bsmpTzth34X23HiQx7y14rz5mwpPiG9pdk9mUr5YnUxGitpZg8z8xsNuKMF56daxzWxAaCDTsJaP4S",
  "key9": "2V5wtC83ztxUpDfGJfsHQKgciUjYmDTPZDxjrjNKosGQA22Ln6YcphEhntJwJ8f7ZqUroNsvdGhss9x7nGdeCGz6",
  "key10": "2NPndpTGnKxHSQ3CfYEkakewnZma9uo56kT88MfHB9NNnevQ1NHJFZbQLigTuDiLFnSTvxRxuECWJm7z8vxAoQUx",
  "key11": "3RG4wLgZSGLTkxJC7UcjhudZxvugRs27znZgy8mBYtjUdHsj657jVhMyQNtfEWQGjW5VjnKgV1MpoUFBASHn4BBN",
  "key12": "5NLgDrTpSA1PAcuZkFMFgmizMzT31CEWNNa4SFKkZb51wDjSgn9BKaC4LXHrxEXT6NbAJNoqEWaP3sycSQWu6G11",
  "key13": "4gMVz44toTRTyhr6L33MNMRn1gDwcs4V3QNnGCFgaHgowtyk5uE77bnx8WSFXowU2EoDeRLDJDGPfxYz5huPYzgV",
  "key14": "ZDWmryZiQPjskkK6E3MYftyRmeZr4J6CVs5vfCi6khKmL7rWSMWLUtcWUDe89qnBu5uobq7h4Mhd1uykrBFr5ZJ",
  "key15": "22M7rYfwXZRkEFvdhfqvc8nfs4i1ZvJKPJM6DMZsMYoDxC7Wg6cLdBQKoHM3fTQj1vpK7iJhQkc4zrfUiabpzka5",
  "key16": "4sCAE1CGSDN3w8Kpgt62na16QXHKJ7fLdSMaoeSHZr5Jb9mUxPnHZN71GnWbadcj85dyWKXLaGpk1DzvTz8FQXEh",
  "key17": "5LBitpt1bM9duEfSSe5fzFccWyX9uqwzaeU4djB2aT3gLPdfF3mtAs1ainMN2VocnvjkSZUpCpMFtbvhGH84MtGy",
  "key18": "3Cx86JvdpRLhWbVyqTpUhmasqJYvWZfhK8k3NJCQPWsDJG6LW3sxZzrURK2tCrKUQML9sFheCLgpGQVna2QV1jf",
  "key19": "41BNH48ZRmH8MNVwPjDysSujp9CmrqNW6T6aBtVFBMDc9G2BKj32mnFhnuFHvwNeZiT4cfmthr8Vbi3KAp9AEmWW",
  "key20": "3Tvv54qD1fRqjRwpFhYR2J2mVd9AwAKhZHPqnjCdfWpCG581i86BVjTfdVeucvYBohn4b89FNPTL62roqimjUC41",
  "key21": "1MJN2P7Ak79sAMdgVoU5F2RLoSU6U7skthr2xULMGCRRPiXAcZhknXNtJnovTbnX8Cru3gQEf186WDx6q7WNYpz",
  "key22": "5iTyJHHjp78BPqUp8D74f2xRG1LxUfp83WeNiiN8psMnDARkWhVkpG8FtxtqEXLDaYd1Nm5ZgumgEBRM9SUUWh63",
  "key23": "sUgG9fDfWL2QxFKeDPgaLmUoFz5kwNR2rbri6xHoHHTHuaUwG6uwFhvF7kjvy1vFUZPTK9n3QV6P8FwPgKc465M",
  "key24": "YLfgv4Hiir4LMdLzWCRDEfCKpmnPJPqXhGPhUYR1FjK7aZM7vMp83JzMVDkfMug7DUWDusp8uaAdG9Ztkoffs8X",
  "key25": "RsiEQJ3zquBpNNEYrYKamy5czTNwtyRwbfbu1NkbEmkhYaK2k6yomL9A7FRCzmvQofVq4YuJpN65EXm6ha2KQhk",
  "key26": "5dpnk5Mj7GbBv7yhKFynSYZRhhv4FtDoqpCeuKDf8vC3wXsb9pQskNrLqmgPcewFQwcDQJzMSVHwBg9X75ApwHxa",
  "key27": "4ZLSxfAtp7tRJrwvNBgwZ1vNiSTkUrexykj9xvX8hNtfJ8SyA9kHbsEhjRXNknfkBodF7fSguksq2cJc4h2u8guh",
  "key28": "21AhMz5qUjVKWcT9zKAWACvkUoBgzU1199RcmGvwecgR59KAaNJpaiKZNcQ6ZD4koq37iyPWPjpTP4Hh8k3iipEn",
  "key29": "3aKxZ5VUFp7TEe6gnnMXx8K6cMzJb7sMhrtLXvy9rp59RS6QkVGTzGCJaAimhmRFy9NwvpPF5pveMZ7bgyyhvH2Y",
  "key30": "3BzxXVT6yZWJUbaLoYYNPPbbzwc5GNggThEoPubfvgGghGbNVTWk5W8BWqwkAgBUkfxhrvFVEV3pqdRBjLsFFSWw",
  "key31": "2638rhrE5kZCWFgfqDQvEiMNKGYYmX3UYb9rPU7Usu5zUE6exjDJdHGpBkaan7aabxmTPGyaHxeTMtS6AygUv9fJ",
  "key32": "D8kkXFv2qFgUsGo4X4ccT6UpadEjc5yU4t1jm2rMEVycx86joWivePMn94z1nkSpuQufbqui44iVwhCYQkKMTaC",
  "key33": "4y1gQ69pvGeNu1ikFMncgnwS9KZA6tyoPD8DefX5cdijADqgJYMSvuGZRTH3qTjmQ2EkgdyiBdMakFWtM3Fap7nQ",
  "key34": "2zEe8gsqhCTyhEtRG89vbVZr9ST6FJJdGayWe7aZ9UFY9LdMFRByQKCikK1rynHHC39C915ET18x7nTtHBDeQNZE",
  "key35": "413QPssLfUUNZJaEDYx2XTbtwy12TDskWi59FQLEUxNmxhAaRevCiSmUzXwHE8vEx1Qxc1eBcvhH85bqyftuzLpa"
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
