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
    "BAZNsuXacf5LF9ZBMa1PyHGE3H23yUr88ARMv3pNPigQNtU2tzaimV4kqd3L3tkippgxAEmfm7CfHYR5rebTKtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DnkNWLKd84gJRKWiNkCzpBfZM1B28oFF1zJw25t3AwrbcFV6bRmoqytCyroTDsb4w5rrJBDUYZiAib1vV7pTD2",
  "key1": "5V3WXUW9WwPgFN8PENzsMtYcuWTLNJwkq7QDgxpHNFSD3Uy3zH8mVFzeTV5taAYngQik59etq1tdHTwukjdhjJC1",
  "key2": "2bpbLx89qtRuo92mhDVZKWeV2wCcoHAH7z8gzgjgaZhyDmGaFzCfgZK5CUWJJyffR9mJmhmQjwRhxYascDM8Wnkd",
  "key3": "3hKgqhmuhBxtyeiNi5MWcMS9KxsyxxjeH8fHAWB4Yersfq8e4aZAVs7TWyjq6GQ5REueqZ4q1jMWnqjvvc56pRW7",
  "key4": "3zZ83RspjPmc3Cyrrg8JZo7FdwurRCttJVSF7ZDzz1KtLGwE3akAiYMWbpcGkqiwUyUmrFNk3wgvFZYXABztGhED",
  "key5": "2ZqPJTCpnGnC9xjiWFbrj4nXRYbLLvJVrCLiXJ7euoxSt8PipJWJqVCsY1wY2cHoWF3MY87vihKy1XofYahNHH9n",
  "key6": "NHLcjSTs85559jrVKdFhMSSuu5bLhUsDii7TjFv6eP7Apdn7aGFpEo4nTwGKyVhaFYngvSpJe3kH2NTLV6FoWxH",
  "key7": "2UzGcWYpdma9UsArP2CrW7ZGdrXeqtTzVjpHKeL1Wh9zPeXUYtAnwLLaaNGdXnUyHSiWLm5HdzFL4RYBhteNZWwq",
  "key8": "2a46F12Ue8Y6NdHmXhquknu354bV6rhTXbaYPYSmwUGPrvkiXHBkYDZfQQEnZqGzZsfMvxsuXF7p7AGJXYTpqzMR",
  "key9": "2fHn2yo2BuH9xjPrPKCiYnNej6kSWnGqaUKTLPJ1SMptLv95y6PtqoBAMofmU9sPPmpZU5ER3c1cAqmTFMzFXE1C",
  "key10": "r9hsD6oYcKB6ZDjMMP3ASUNbJryLTx933yUVjeZ8q3AVwxNhUcamJp88dfbtf5ahEfwu2wbLDH2ukkwJvmbHq19",
  "key11": "meRW9UXKg94Ku9RhkRbAr8xm3KyDD4ZdmeHdQjFGXLMJy66eULt8PCuUNgTSxUws1M9kuN44JXbyXnLP8Z91TJW",
  "key12": "3SrjVvrDc95mBHT3URzYLjSjjLgSgrPcwKuuSwHN68VmL2uC2P52AFQZ6cDKGPibAHc4qLQwun61pWoyeVhLLKLc",
  "key13": "5tcqentB7pgUzUbhndXx7VJASgynef6qJTNExvq8yHWsxfWWLAwHgW4d8BScixubjuYWs35DvkKvoGER1op4mv89",
  "key14": "2St1mAYVv8scsCGCMHK6WL6EVMvVJPsLA5pyk7Cjsmjkjq215K1Gc1rP8UgmX4tZ936DiJRMgaHGkpVBdDCoUdBS",
  "key15": "52yFcJXYfK2Jv8nHDbtWrJLyjuwCbXt8oWEBFaACyMmw4DfGq2u6NTfG6kwKjv2xi6xqNkAUhPJZoor7hbdyshHK",
  "key16": "fEhN2HMq5NzGCCJLMCWx96oMYMKW5RgU5c26m9ZuSyCq5UX7TYrazCYr1MywYBobY9gha7YQoNCP1E9Kte3Cnxa",
  "key17": "2yjPA8pAEtDF8hUC1UbfqBF8jCvp8siSGCcSEYneacs3piguzBoYy1Mh4iE42B4dAqbGjcckdJh6KfZn29snfodf",
  "key18": "4CdcPBgStAeyVnUKz5Go1urp7h5DFsQPBZiWy45WnEcPGBtDkyGBMLamJYHbx2ygKsF9ZfbHJGT2UEHyzQC8TsFW",
  "key19": "36rkghkW21hY3v6tdQaT6KMtw6tj4pB3o89VM9gfNXNFWmEg1Wxj1GXaiy9ZH6WW23ZRsrbnxYrPMsSjeQYqWsgD",
  "key20": "5RAUSQzq4MWgjUomsF6GeXdLeiT2KZfWEEecJ9K5QD6fwPJy4wnpNPQ598RjXqP9RyqVDvTwwtvs5czZh1CNTHtw",
  "key21": "5T56N3hXJBGAMh8ZE4pTA84pLa3uZCTKqKp2SYV6qvSecZ23RMVWsUiK5P533LXQpoAmtmyWXwEHDDiRtBDwyS75",
  "key22": "44p3rFCnRz6SritBagVJ8Uqx96vVFZeZcFaPNNjYfQKZCqVWBwSbc4YV3FBkQdTx9S9ew3ubUJhB1XGNcBRWdAqm",
  "key23": "51N8cmBLaNdKGKGF4VXy7Pgods6pqs6pzvtf2nzyAPSUFULoS6uFvn9arHiZvFWArVoyzPhMzVRfSz35NwZAA6eh",
  "key24": "3k3o7GUFEzmhwmn1ddXvxeWrCzUh5ge9A6CXbk6HFa7eCwsTQWymWG6XoWNzgcHXVPEyyrMCAbwTEanAnuR8QX4g",
  "key25": "5NzoxB5kUeYnpfg6cwDCxF55xnfigVEfoXDRDLEL8iezBGYMgsEfPhpmpKwPV9erNP1f3fqE6546DHXGTAS3hEjo",
  "key26": "4s3mZWHGC6V2yeox8xVD9CTZqZgJVe5NnfL513EtEXzZ2yD6wCubLTikL7Ey2LHScyy1SqaZ2ZBNmigg9WiAc1zv",
  "key27": "2FDFtt1fTGuGX9HVzH9uJbSh3YpjuzEaq3t5sg2rMGLDNAywsnB1eBsYUMU2w4NTLuL7QvJLJyE7ZG3ANUEubYSo",
  "key28": "vmfLRxZR2icLBbGJE9QTnhEPTbh4BmfkwDuV4KGWdTBtzkSPs2F3qbanpHcD1qLf1gk88mZwByi7aquJAe2aYDj",
  "key29": "4ABYh9pedYbTiG3FjUFFZBwRx63KvXQpTUyudphQfQjpTXGNPysH4CfU9CniQGk4JZN3peZzo5J7QhEmyGexRYQM",
  "key30": "2RgX2DR2BdSJPVJ17fgmwNwZjXhYNTaPw132KPdZDZEuD9CoYDZfijf5KtaDiJt2QjdCCKBxju5fuwni5QjqRFr6",
  "key31": "4P9y8x6Kq5u8okB6pRPxuaw8pJTGwziHYfAbkrEcBMHUuHSz9rNbNuon2fvBKfopiComBfgQzWM3DgVNjpNUZV7x",
  "key32": "5QpCNct1fz4iDJQ3sprQihBBuYDF85k1pgLcVAuaiLY72j6V4hqSjsh5zgvWyepn1H9SVCdhP13C7R8d7oUAkSpy",
  "key33": "26Qp2yr5e8NW2zJ3Xeq6nC4681EJcLSHiP4oVbYETeQfyT2EgFPjcNBNVkHkt7aUUmgbywmg6DFLFtyReaeyzSJ6",
  "key34": "27aJFKJdcrJSB5ivXZwMRRpz69tGRs87jvZM3EvWHGSNZGyYDyopdFzjQrt6pNgKdoRdUUEESm4KmUX4raGyvZwr",
  "key35": "4TNuVmZCv2upPm5c1Z63oA58RMBRarRQ86FEna7m4oLQtKTjGH7JAi8RibHmh8CLQ6P6crPf7KtUPtwdRHLWDh75",
  "key36": "5Az8AFZGChEjE77DVMHJFJocpM5YYjtPodjL7JkE348SxaBSKfiFNeUqqsiYkUviZA23sngYn3mjW1PC7QSwFUeq",
  "key37": "374JAXimPTehVVrpK74DTeRymo6CenceDBAZWKELdDC8a1yN2qbCcZ5ZMyrzaTzE4ppjoyMnDGRovntChVrat4M4",
  "key38": "671PQG3CN4j2pyjoRkxCEC6HT17qMVzXQ8JP3wQw2YiS6DuibwRN7oAKCsFu1K4nuCMy85hMizN3AChK92F7CSH2",
  "key39": "2U59CtYNeiVYmPYut6nXkJiV5w6SvQvSv9t7UiRfaJsK6ZugJJRXxEWPzEWrAKvchwouiAwR4UMxabJ9rsW4HSw3",
  "key40": "5rNs6r9BC7fqqtP3Mf8ngELNWQbS7uFTS1ptCbTaZZfx5m3V4Me6Hp8ZbgzXfmLQCmxdcoFJZSPytw7CjaYXCW8W",
  "key41": "obQuqUzzkkCh8ELSZFxSUmaw8pPncZrMUF3VZXpmf7iZz9ssx1oSjvjPwrGAdbTwhK22LcQ6biV3He6D9Pqk3Ja",
  "key42": "5A8fMExTuugfN2fviQQyMvNWFcCJqqD83dW3snwBzt2z9S9KspLKHPg1d6LvL6WMfQUxQ1QTcKZqVJXu6rJwHKqG",
  "key43": "29Kx6MG4TsX2ytRHQYu4eex6GGGhrNpMSXEGSBE9v4DU71UKuRFnKnRmBnT8nUFW1i6gAVvrvgNBvJppaW67NVey",
  "key44": "2ym77LgBiNnWd8qQ8z8B9suSbm2cHSYNdzhQMNnMA9zVinFfrKvAXmir359nWkYHkbSmKHpXHBsAQNDQCkFVQFfn",
  "key45": "4fdmT67CNcJvJ32hohxLE4sXbnx9zPdaSiq2EdwY2pLgQ4EwyQdTuHeQx2arEoWzWYJPLZT6D9zcRytJX9gHx4AD"
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
