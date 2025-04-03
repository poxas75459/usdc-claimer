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
    "4Jj2kSaLTGre2frVqQSG4dSCso1uFdzfhRz92hK8xPGGUBKoixyjhbmsRsGHaQjTwDoXrtzXuTyDAjoWVw4AFxQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oytKeiyXMY48ZqGmteAEajjUXCYhT9Jcuos3czk9grHv28ju67DcagLJoG7AcoePMXnTsLARZT9ooyBCs8MHWX",
  "key1": "4bbjurzkAjk9RxrLsB6TZtdpFWMFwaMNHYQAFm6f9iUhjdhGfsQoMQiVe2m2Z3cUHoGukFnG3k2iJjwzVfWsrbdk",
  "key2": "2xxHnmu99inNdqTCxLkyF4seX3MBpPvvfoL7qfyR2HbBA84nmSA85HbkQdHVFr9wARk53PZWRqYiTdGSkNRV2ZDe",
  "key3": "3WG985ABgGkMbHq4KQ8AXertoFJyFZve5RFt4fgaiCufF93kV1Z5N6FrGCH7UBMWUsNs5ExHD6FqyqXsZ8yAeFGm",
  "key4": "2oYSFYc1Xboce9bReQHctdiENp1RBuTSqxQmB8KKo6reFdBj72eDD9jGRfiByxhYL9AJa6FXJtEnYvdShbSEnE6U",
  "key5": "Msiz2Y3S7zswUcnWHryeB2BWjfaA8TosuxbcLfmfs3Zrit5aJU8GMnwfYWt9zymZwca4pSyA5yk8jVqbp5LtHf9",
  "key6": "2uzsfTnNCoQbJt8YdKhXzDo4Upyw52znuMZfBAW7ctwDaEdyKrFGjipzBmmttWg14PJDi4Zwbvj5PAREV5uWGq51",
  "key7": "4Hsr2mcWKvSP9i6wVrNe8Rffd4HLhDgo4kwb2FiG3zmX4o2S3Pcs4Ru2MoADinE8FwqHdzy4wRMS4NpG1GKpWMGm",
  "key8": "27M61TCmmdJagKTdAKdcEe9dXbc1hUtyAMjLz12Athju95uthqwVjSeWR9yjjHvecMEmRajargMoyAKERx1RwsRS",
  "key9": "3F73AUJ2TnvkLU6q7vvAyU3GyUi1CvjjtZReFbq9hXaXouDgis5UQDTEo5GYAfMhJMusrMW4SFRimz6GqA7fiiXc",
  "key10": "3L8avHHQe1Lv3BTDUKwgePJdZf2PejckjaP8SggYtboASpy3BprM8LKdUFsEkZNAcdEPiZ5HwPYHxRH8iRZvqWtS",
  "key11": "o23NGpfchdwu9Sp7r1zogS71qNiw64nXAS5M8ZGwQbV7VZFnbwyUjzKS7P9X2tgQLU1BYZry8qbSNofD559VJG9",
  "key12": "3v9T8wC3eWkk1kDyRXmSpxYVKbZbKB24Ndm3rsKX4r5anSuAYd9zdjEc5uobqG2LntLtDuxky4fgAW24mrQ8WvY9",
  "key13": "YWxauniBrb3qrKT1MfJhHSMhFsqF5CRiiaKNeg5rpyaDBHNcyqmMpJ5b7vDT1tcMNkfox2YkEmDK9hJzNojxhBj",
  "key14": "2W3sq1G34aYWvDP93jPzkqoANffPWkxaUgRD6Kb2sfuuQZ9oXAx93cDuoWQueGp9djUxYZ77MLRRUmz7Lsq8jUB4",
  "key15": "2AHe4tv6FVivGi7rEZFrpETiaiMTvkLiEQgWHCPPVjdrCHFJMs4kqtGQstwSfnVRfWFM2EfHgmWpndmH6qWXobgw",
  "key16": "46ZaeziWdyLh23LYJDQZVouufo7Yqqkgvh9orh9JT3wy4i5eBw4yojoqSSCj6UMeMkb3ytEzj3QnSrUdePQi8DYe",
  "key17": "5d3F2fyGsz98PodcNTp6pzJGAE1Bn6M65MKHqC3oby3WJGApnqu8We1BTVTNBFMLpTB12HGXuVJpAFgFAZCEYTmg",
  "key18": "3jPX1uf76eEwXdBT7A3i96SJ6KbcoSpigQtaRncbuLJZHHZgmaTx77PAwL6cdBdhGuXd997hTuG9ePbBuihCWaEQ",
  "key19": "5GkRuvLqcLBq97o55KPUZrMVYX661NFo6Znk1Avao6BhaeeMsgZvyzXmYtqFwJLVc7qj2LJ2u9MdWfBmTymGbXsV",
  "key20": "3Rd3kFJohH6BTMsscPEGzPCTQTYkL2a3qvK3qZYEx7pj7kVKD8V1rhJedCMdkL3N29TJj5TDn433F6t3tMbKKkYy",
  "key21": "3MDP5Cca6oKb8UWBZB2RmonMiHb4hhtrPfH7jSLSCLpZ5xRZ2cYCGYqNqmD1oxa79Xc977JGSzGyowS1XoZR3DEC",
  "key22": "2msUsYrcMRUU4g4KKavTxq6UbsMYRtx5ZgiHFSuZNmbennqyE971FxhR7CD7rpqAeSxCX4rFRaVJWqtPnYphmiKA",
  "key23": "5GXrrCQ1oj2yx71ag1hzTkA1DeHQeHYoNf19FSXMXhozMuLuXYB4hHtKxR6C4VuH5FbiRdRbWFo7NATQ6n7wsXWH",
  "key24": "34Y5qRaMkmbfmnQi7cojscsCQqGNgGSgYwAZHd8hkZAQgVq39cMTMQTvDZ1W2A4LCFPTPnK7vY2Uo1hc1NpH42La",
  "key25": "5444tiLfVRoAdawuiwRAkJKNWDnvUtLEtjp8Hm1ayHf41EXuhzetRY9KEeyD62EpoXJPwyfL76bpSN7xSd7TraJ2",
  "key26": "4K64gfcBEHDMjpaiQikxABe3R52kETJWPYvjaCwMQHLJDhwXCYWQZMSq4R24wcW9LXhU6SjGB3Q4UFAWpg98Mxqd",
  "key27": "5FAfJTtaVbGebPoppVmMDva64SB6DFc2cFH9zF5Mq1CyEALd84AV7kKd9RT4meJnyhVio9V64PqKQ5VhGbRsD8YD",
  "key28": "2PPDWTqoJp76y3K2LT9u3gVwmJMWoiA28Y3u3d9YK5QomRHcZQprBA4q3aiTELq6Pbs9YSpxXhRfJN2GVQGaK42D",
  "key29": "4hHNu556KHnmitCx6ECwNeCtPEfc5AaDHh52UZA4S5kAUvdPwnhi8Km1HB5h9T6Hoz7oYwnXunaRUSkgeHcAR9wA",
  "key30": "5mLt3b7JYiXNKHEsf1M82vA2Dti6RG8ZcTcckyxD1jE8dHEtqczRoSyE1SyaaG7Hs4pgVZgJWFR9d6ARzE3rX1V8",
  "key31": "2Sjxts7ddY8wwcZZvCtMQXKiAphJ1XRRD6Umf6LB8xi9DswBDSrD3huAP35Tra8CGFAMkhPxm8csGWnqbRuVvZbX",
  "key32": "3KEJANPgiWMGE3CZAMwtMPhFJeMrVQjXPqqwoCcw3it9CzKPJUkGKn6xXiBwrjPh4tzPBT79hnwhGMNwnp4p2Fvh",
  "key33": "3y12EEUCjfQHPMsNo5aLcfcLZYwcW86KvapbrRgW6c6FHbFy3tmVeubnu25tjexCpfS5Jyor1Z4gVUvF1ENqfPsg",
  "key34": "RgEbh1AXcwV3HfZRssf9SHzGgyRPZqLTyUVaCS42oViE9FTqXUJS6MCpXS1p89Ef7zbCfoW7THFmExWYvnKcEYX",
  "key35": "2A1QaCXzsfL8EGwxEnY1nqcxkcAJKJVj4Vwusn8vCoypessoYAtfq3uP3Cx2kCt7u3krkYm5q2cZai1bHhiLwB3W",
  "key36": "4PgwYrp3EyABtxHaRH6TEEzHe8sfckXzE7iWRAkGyuCGugZ8oNAcvrEwF3Gk5hNnc2ACG6ytiQEJJJ1JVMLU6pye",
  "key37": "4kUKcHQ5b7hYWA889LFpJFLwETWCZouXH5ZS87abLYPPWXfm7ZGTarV7qpJKqXZccJkEypfAig1Mz4sTD91tVA7X",
  "key38": "4Y9joo4RtzgpvsSbgmxMywZcdYJtc6xvwwrkDiDKJZHn3c9QWNucE7DuRH8TUsTvZ7fyrX9umFEy7A42MPKuQU2j",
  "key39": "M7Z7odZtB4RXwNbLRsBFN2gJ45bU4zN5XRjY4nKBZDQdZRe8ZsbGVGjsAQvxUbHbpcLGCgBnHpxfvCTWWWY7rbT",
  "key40": "MiJNr9nCUPiKGZ352iP4ZmaQZhXYPvXHHykEGToyLdidQ1mpKkQ8MfkNVK72VeCGJb1rg2enQq8cQX49j8gQkqf",
  "key41": "2qic2PQqy8AVpKY9cbbEnZkoTefQ4Mm8hEsMZYAzwgHDsUQsw14rwe15CaMu3M5pDxoR2PoYbgVPX9d2VJ8Gkd5A",
  "key42": "3hMHPpVos3pCSt4Yq5HKhaaAN1b9EY5d25HPJhkLvfFG5kfS7vdafMQJeM5PNHvsvS5SZfNMEntfuRhGadjcPm7f",
  "key43": "KecYPgJPWgE4ne2boTBHkX6oQ3MuAweayAd5MjiSwczo8y5FTUND1SNxuhRDayNPo4z339rAi2t9ott2nwdcZn3",
  "key44": "3HUxxXBAwvnRjx885GqqSUNg5bJmyqewvAtG96ugH9Gcs35jpKotTDiDo4GAfqmVSRsKebr4dLLYPdyZsVCLHoGD",
  "key45": "4WaF1apJuN53YJPqY1aeBSQurADv2B74KPFU9rUq88Ees54cRjfXWB3DMn1tJzzqUbhFKfZdcU29ALDCddXnqGgx"
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
