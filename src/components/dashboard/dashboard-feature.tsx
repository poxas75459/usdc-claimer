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
    "5SfQZ7JgKxrm3rQzw9HCYHmm3B5xihS1CFXkBS7Amg6YbCuGFeG8t9ibthyLfaLd3mSo2GXo3LH4zuR398yzLAbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XitmeCzojpEfgzrggWADnh4VGAr4T4eVzV69tJVQsCN5C4i3wCTRe7xDUM2sh9JXvwqYxaKVMuzwWwJRUh1FDs5",
  "key1": "25XErBEDktZ5JqoXH6sxheDS9xKyMGbXGrTpWh7hwXsUsZyGRBj4X8bx8FuPz2JEoxnrZEpXR35jjYzSbEjj8BQe",
  "key2": "4FChF6dkRfP9XZLPBPwP8jCCGcMwc3ACe6hqN98Uytaq1yfwKYR9msFGx6jTFHJvcJpiCLfTbS7eN7Xc5tEsKZ4c",
  "key3": "BcpCcWu3xi48ukFuTFqg979ciq6SrwwjY4vr7uhxY6VAQnJgFMEw3ZCw46T1XptjpNGyRBzNR43w1NzrJG2kNBZ",
  "key4": "48WbMMJbJ8eUSbchkLpaxpidt8aBScnBV3DDG4CCSoA7EwpJmEy8BMUTgGjbvvaiCJ9KDSKKYpzHp8nVUv7hKpuk",
  "key5": "4bAzCxsrUPuPrvWQYVZ9HVpSgFvYR7fCTvEkTMtkVfhjdd2nqxr6tcByxek7tXubwJnCTx78cvMDy1JpAJ4UyQ1N",
  "key6": "4a676i7LXf9gFeM417C5kKDjoMnnbFb4QkPdTytTj4rCbnTreZUSGEdYTKcN5jPTaP6pZU8d6mvV9bJcsWTgNao6",
  "key7": "23dnGyWhddbbZs65Q5n9otiK9HXGCLAfkyWSB1z9QDU8Kz8SyXDf4NP6yriT4THxKzRYHZ79NffdeiaLgwbSQi9m",
  "key8": "47N21U8bkn32zKwLDW91pBZ3qfpxa6fkFxZ5yWtWLdYHgnmdvgsbzp1ykqE2a6j2wbnzyQg3MvjubAWJFViKgyTx",
  "key9": "3Ao4hkqDV4aNaTEvzkkw3X9SXmzyUzzwCNTufL8NbsSUuoS8B5xJHL8QuFn2BHCjqYWNiwSBMSR1AH6eCig5Dvmf",
  "key10": "41m1aF4jEBjzfDaMVuywNRfWnGT6o2jZRX7C9xvpmxpntsUGZLiCwrCuhAoM6D3BqBynGD2iPbHuHUHnLfSvHe5X",
  "key11": "5L7ZQSysKoXfW7meGQL2GPstcAT7NKTBBUrppWessgVYUfZvj9JkUksTJmtGzhQHfP44e4af9YGP5MRyFEKK9pa7",
  "key12": "4BUWkAMcXNcbDEsNwjwX4tLwA7vdVT79bc8gz2ARYwVJLJGMqifEhDu2v38KDVg59kmSHaLkEM65v6qwkb9TwQmz",
  "key13": "2UPLomkPsrtMXTaT21wKBKt9Eyd18gApNzpgvrFEH1r5SJ99D8KUegsUkpLmwYLr1M2YseSetYBr9oeSg1n3Edbc",
  "key14": "zyM958hJ1qHxUD9rBLXY8oc5AijRD57NTCycFQwNKX6ZyyfY4JrspD4HQtYFmmEifZoYmSVZ6zBoPHZwmsvy8t9",
  "key15": "5tRJZzweps7BNycwStsQBTKjots6nktXcDrmdfQFw3cRrgkyeb5fQcyGAvv9b84UZn3o2HeM5kqYAVM2bvwR9X3t",
  "key16": "5u1gY6sGnsPqwPd9Dm4i5nmTijsxxg61STknuAy4ZS3Qg4gxyuEhQhc6oRAp2FVAopMGrfYciWM659cEM1Tdwhe6",
  "key17": "24Vi4kARKk3th4LwZxtQ1WRychDThaN5ZKEVSnvNfk1idjJSMSoEfYuSXC8R1kSe426R8PAFx43q3c7SE89CoyDZ",
  "key18": "T8NzxaXZdD1omEZ9gfRPUKic82PScn7DcbCniBJZnB3up9Z7tPgDtm1Xhanenb5eX8uUGungesv3ygJ1PPy7PTc",
  "key19": "5moTgjxAF89vBE5KqtERRNh4xRRsFDcPfLDpbS79gAVhu976otTSrzLkkauAEwgvcuydFGkeaNW2FhuRYqHyAeqt",
  "key20": "2MMHorSFZc6tsoheuD6W8ZKZeRwsbn5DoyfV5qAu63wos4HZuunWkxZvfKeUJVT3sgunA5ZQtMzfSRC2TMVMKQH1",
  "key21": "4eDmNSWUD5ENGAeWJMytekfDkpoHwY7w9odygNC12ANYvWCtXx5Nkk3nJcoMgD4qSu7jyxMchDJZYxdyux63tF3p",
  "key22": "3JHnGZUBGbpNVxvWPDGtE4irTAweeorCFj8UaPbJwwWis1B8HgaGMiYTagBb2ADwJ14TvEfZ1rrwXWHZ9EKZJKaf",
  "key23": "5AGnTPxHAY8PKs6eehUjaDs6vxS1AustAVZcEY4w3FyXHxdkXfkCx3i8N5tLdCAeWMSJ88JJ2usxt1ZnWhHUGyhD",
  "key24": "616VhmCXzmwnFBiZFKsQjMz7gPxnnLzzpGpWzfYnjDHCG5NPc3XYLqeSedPhFmqMANVetBtEoFZA19iQGyRSzY78",
  "key25": "2j9Dnj9JDf98fjAzxfrEQ85s9JFcisH2rQwoM7gTEfHMgPKHEPki8y9a1gKw4ZqJ45YUGfXYLjRfUrjE4S22Hmer",
  "key26": "xsSMnt69UZVWWexEek7AwtRqrRMcWHivdyGG9bgQEUovBeyRCg5YWexfU41FhHcXAXUhRvmbWA4zgnC6jzb5j3e",
  "key27": "2ozeiwsaXMe3kjh71sWHK7j4z9XYedwzZJaNzpm8Gs6P5anHWNo3QeUDCgVCUxL64HTgv2pc6i7yHaiCNBRjqtnN",
  "key28": "3TxfoXw6X73XtdFZMrA5MqCepv48vu15JoDWFabp8KTBZ48mZ1ocGYUEZBo2PZkGTvZ6hTVMbA93PwCVZPzteuvt",
  "key29": "5iqFq9oMH63vKxX6Ze7gAKELabxsBf4HJxcwWSMFykM9LhqKifvmyCJRayqnkoSpygh4MDgnS32JGB3DosuXXmVP",
  "key30": "JRaC6rZgCFgCr86BJD34rVzZfesnz9i58hVsJbsgnjiCPWDRvEcSgEEPLHxKBZs7v1ED93GsAGZjrkupVaUrZnV",
  "key31": "Ck4rYnWNs5kYUknahLh7ArFUhiuNVaeQyc6uHyH4Af8ycNeaJTMHxNfSEV9i2KdfpD2VMvCqgCrp2mk8TEiNnm6",
  "key32": "5oPX96KzmDcr4FsHRtmSg7wUyaYTmB95qmf7WG8ir7zBukUpW5viYtoCn1qojhABThzBUNF2heyAdpZDqZSBTABi",
  "key33": "HTPssXgK3uBKaXS56YNJhcQX64L6pvBH1TyM2RPjYRhKxu6wMiGqXBpc8YnJVaM9cvBZBeosSmPgRUH7YAZnqYP",
  "key34": "nJzvir1wYWcY5RNkTsk5wrdqRQ3qLwskRP1xv7ZcpBRbZzf7ENwvKhXC3sfSfCiJ9qBr3oh2SB7xGkyYnDJLYUD",
  "key35": "2JTc7gQjFaFksQ8d5zzh2Bt8FQmaH2XxVVBpA3bBnx8U9yyg6TMSAkHynwgf7vdnMjQFhFdvEP8Em7LUK9ZCTVxE",
  "key36": "2fPoJm1kJbimouvzNU7jp7y2u6qJNrZqbragGZ3byeHyhoYPLYPuHBdKExSY1HTX5Vz86ooMdh5nfEXrDr8gpnss",
  "key37": "3AMZBVraBBbyAW1iAtkmdWxojv9NkPkceyMvGW4vpCKR9zGJdXd5a67dWehhz3Pxajdc4Ydi3z6XHpUHj2hpAjLF",
  "key38": "1Qdo4hgGCXuTjkskod8G5jv1vJosYqjjY4Fvs3WbKT8Xzjr6NQrwjV7wCkSPWVFdDNFEWw3okW1g2izVkE45HGB",
  "key39": "BQUDQdPsnPBMSPyDvZGHkKAHQDGPkZcrMJeSjQULRJHtFS6PGqh4pL2ZkGXhySp4SJWaB2VYLSQv1iod49PhVv9",
  "key40": "32z9ENBT4EmSXMTxDJ89m5FsoLtQws71hSDKxkSQZFoYwDiZUpdSRdyECwk78jUPHctwx2vo8sNs6nVCU9pN7e8M"
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
