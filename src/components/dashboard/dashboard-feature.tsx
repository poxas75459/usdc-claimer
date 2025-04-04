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
    "5P7P6pPB19rbfweV2TsGZ3DcvM4fBT1Xrzb2zXgFUWgHj718NTPJUqMzsPqroRD9o5Wi9NgvzGiNWZofvHtHtcpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiBT6TEAc54m51VSG6pMYoCUG7PbP84K1RakFQQPNpffu3tXjiZCVZjHAu1ycF9UC5h5P6wnuH3TwACxnrpPcQk",
  "key1": "4uujkAyNQjzFuBiubkUquEx83kmiU1J2YRk4oxVTEswaLwQYDwUCD44xfSYUh8eZwUXkfo8RZvJi55NjBVRrXhMh",
  "key2": "8zBM1QcSMX3MYeXpokASy5iyqbcvApPqJaijUgeFAUSipZDBThDXow9pjGBRqfWcQnDnVsYK5HQBXTmbzaDhqnp",
  "key3": "236V1yh5UVer5D6mKpm5WEe6RZzQ4T6qG3iCxRoYxCTSMug16WQzQyEoKty3ZJxmciWMKLqgbs51raqnMxa4ZBzU",
  "key4": "8pe2oamYoUf9fkUuiZ5sAPmq7oz1iVT8FVFLiLsnMWGnMMSL8tL4ddRGLC6ACMJLDNY6GT94LAeWK9Dvv6dxENs",
  "key5": "4gUpSi1isKKAy6v38RpbaGJzKxUkh7Z6qDDqHNygpUj3AS6tJmRvsChb1NhWn7yXNuvw48Ba2jdmfsDmYw3cy7R1",
  "key6": "4UNe8CPuwyTL6ootVDo1WrNsNb38KGSj1JubQPbmC1XTYSfX9HRngjupg9LM4ESuynBJp7D4RwLoEB5j9BcxNcDf",
  "key7": "59itz1C9aqrnZ3sLjf7gKBCiRxQShefzm85AxvqCYV5bNcFRwpNfGpQfSnSNZuF187AWHJG4ipdBpoP97tAYRVK9",
  "key8": "4vkawCKTUE7Q92hwkPnwPtQXqhyitQ5qimBuSW2tW99377xa1EHGyEpTyQTZxyv3rN2ZFz3mCfMZTKDQZP8K5ZML",
  "key9": "4zKR9nA4sKZ3cNCnDT4ov7qAD5HhZaSPc6k7JAjcBA6PnXfrJ4SL8W5cNkanmx4kn9exmDDLz9Lt6vw5nQURXSQ3",
  "key10": "2Kxmy5VQvxUhMZrmu6id5Hvkk1R37fn57vWnJkRwuXFh2PXAfU1B9HWXf6wWomHFqdkDpmPC4kWdGHB3Fk8Zmyn8",
  "key11": "5wW1vzNbeCHVV9LodUMTL46nSrRDA3ntzw2mhHLSwWfPHsHqw6rfsrZ8TAKKdXwoBFicSNFBezJRzK6NmgBdq5m3",
  "key12": "663fgX5R6rpsy39Et6wFYpumyirVQvJ8jy1CBhs3cWNP36mVHWutMds2VBTNPzr6PrcWeCYLJyF9oGHdzjUBdFa2",
  "key13": "5BWEnLrLAEhQgVLb1KGLw7D8swfGCeV7Eypkr5MFtkiaoPTdixnMtGziMG6wsUdnZ6BVCT9K8b7vmRQVqRa7fVfS",
  "key14": "5dkAw49PL5WQAeeP3gFFfDznJHEdgWdsJuGcTvEftNqu3yjmRCwkb7G7Qq6iqKQqHu97rNaK349zyHcydfjzXfrY",
  "key15": "wjeVsVWz3MV7mrorPqE9iKJP7YEFhUgGW5xgNcNzVgPVT5Wcy8br5HATMweJw1Kc9as7ucgWyQFySrbYaP1Nnak",
  "key16": "3TTdsqzXjwYY1j9k5htrS9yfSuyZzvrjSojGXw7M24vWUpBLQsmNTSqg5tsjZLKeKGJ7qnfmmf63qiLvSrgc6u8b",
  "key17": "2BrbnUFsrHKeaJVFWk8onJYSuNR2dypy5dFGTu8jzj7hDgU7eGuavtqKKU8qTZ9ctMsJD9qGqRSWg6jdm7Aztqgg",
  "key18": "8JV8vaU8ENiTTPxQ9TeoFXNR6ppryRoj8wUm8n3G6bRFE3bNNF6unMsfmsnSwjgBebTZpo1KCwpEyMobsizUW4P",
  "key19": "4wBtPJcM5ypwEa5GsZy66Qn6RHinL5EgYnjR9377RADshEfvMyQxWeXhU7VovUxRMn6Rdno9evPGZfd57mjd73uP",
  "key20": "5rDWstNZRLBrn3nkxLwPN24bsNT5dEYtEddUSVY41xdteH4sKer4vJMUzLTfTDMJKcB2Tg1ntLM6bGSRq6RMNPbF",
  "key21": "5vwnmipByiGUQiJqrZCXYrQNY8vw1HqUdeUFH6U8CEkBTwCPbyXJHY2Ld2ie11Afh8ECM38hRz1CNkZ4hUnbNG3q",
  "key22": "fRyUZpaiVZocBtkizFBTbR9EVXw3H95FtowaDG78biaUrrjAaF36E46K7oScyoALsdj1QUttg62ufnEhRsLjupb",
  "key23": "QyoTWGA4LQiSpJpmfQQJ9qb33NxArZhEAQMKGcJMTNfi2go4aNjyRsDFfGByhJ8ZeEHRpu4J1BzpMaTKUtXxTRF",
  "key24": "4qnyWBc33jK7igZmvon1teK2e63a13ngtRrYE2vkqCeaLeyE5tdZ6LgoBpV8AQPtf86ZPEBwDoS5sgHM8KdEA2kY",
  "key25": "WoEFhtbpDgU5QfU1ywaB2fBgXS2NFfcbC1vr4wVvoBKYm4wFgMSNAQTgoHapuByq6tNz11f3z6SRg6fcfTKrYgT",
  "key26": "3DQ3GQvL1MFnSwjW4DXfZ3MNjFqidKshhSxLZDYMay5dVatQwWkXxLotMEscsb98whzyAyGSo8eZxe1mFkfhd5Yg",
  "key27": "Hjwg8dpJBAuDzvQR4RZ4MJ8yrcgHQxmYzFpW7cGCv4ZFftsMoygsqrJ92z9VvtJEMqUjKyH89giMdnQmwgbBMXa",
  "key28": "n2oGaukHJyfu1ThTHxvgd6h3QNgKxBZ9e7BUn5wjTHJXWXCuYnfgejDaKXo2B5kBtQ1HLifggHwNa3hVMp9Su1Z",
  "key29": "3uy5nQYJeUxb1HNWJCEd2VwzGmCRAfRvVksv3iGaeZk8UFdGxnTwchLbhvM61b84KV6sM58xzkfes2n5dHzgRDJo",
  "key30": "3HshTwDMmj7zbTZoTyeyvccAeSpWD2vo79op8VKr2DiHLHw62ozmMjnpqw8wpuGGNZHmtdBTjqfPTi2c2aY7MhKB",
  "key31": "3SVQA7AVDAQUeHe6aFgUHpCSmVoeU4r9jVuXEjZXrPwuMnLGXKGSj3VAdUy6Kv2wxSjW7pmroPg5ppHH9d2Bwe7m",
  "key32": "DtctSVTG9PXYpnXAEj9K5vNHbdbercfR6NusRs21XXRMDJDX8nqBkgn5SEgUb18PD8c9thiTTrU5gwcmrWgDBZc",
  "key33": "5aW5uQEZ1yFQw9XD6PFSkY2odtfqqGr9ckoStzDom2uGFMT6FWaHjCwR5myvxLWnykMjsULBGEHsPw3duRJ5aYji",
  "key34": "4ZisQMs4c1zyZ9QrBrpH6xdo6gEm7r8Tikp84t3S4yCvhmCWG42QTRPXMXznV9s2raWtfjfQLiDkJtaUL64bubEJ",
  "key35": "2P5XgxrAzE6n4eTs3He9KPF9Vac2xaLKeeBWXH5DLi3AY2Y1coxcHG6cD7sCVA5jA8VT5MNAnuGRe7RQk1WK3d1X",
  "key36": "5G1hzyyRGG9svMwdLhaybJB6YmaZZSFBbiyxMmKxSVonfN24SQ8Q95owHLtzzYDpdtn8Rr6es5JVAKfM8o87G2ka",
  "key37": "PS5rLPgByE9K7dboFGTEqvnq6U37JdHNdiGgu1KCkdREeRRkf8LKBLeJafo3CHD9Y7KNBQrKSj4tjkchDyf7LDk",
  "key38": "5rs74AjfCeSsWgUa69DagP5f4N1zb15A7b2KmpM7P1RwfUk2oaz1Rq7h4Jwcz6feEt2MfCGTNkY3fSPVo3E5HXRn",
  "key39": "3fX4tH3kaidVGQ3L6vkguxkAkExj4Tz6xENZ7fPuwax352uitMWvj2focQh69FzEQcARYiUfE9XK5bAQTJ3K7KqS",
  "key40": "5gzjxQMvRoeo1r5DyjQVHjeZCycK1g7z7JzrZbMat5anowvBoWUC6MQLDSyCzwqRf2Gt6nwH3J3UVPP7KfbhkutA",
  "key41": "4iageS1yV9rR27saY1RAzjBSn63GJEbphfZ24wcTy5PAtMpY6CEFLTeVLs29WqRLQM9R8pWBZ7dv7zrviWsephFC",
  "key42": "2yhvhYAWEJAdq2vPJgWCumwkpXkghM3WrzNt23nQWrhZb4zHNPSQ8HvSLwmaHkHMth9iEnDYgSkp2C7TRMcHGk7Q",
  "key43": "42gfQpG9we2sjRaDB6BZvSBiBRiAhpFXkMmJXaAZqjU82w6GE6Ww3rs3tXCAP42ibPApx5PQ7ZfjNCkLsPKzJXJW",
  "key44": "2q9jHsDDhDK6ZKGz1c5D66W8LJGeHam5TsHY1G95nLueB4MYJbA2NGb9uTD96kjorM8TkR9uQD24gZaLJtMLJfBc",
  "key45": "3YhoHhhhDNGLw9TArYWgB49uUX7ZVRYjVHakX9xZtDQTRHuRy9trrm3Zz6aQLu6Beco4q8qSjsniK6ZBYcq5juKW",
  "key46": "CsKHCZwqfYCw5e3xRbaFEGTSgtQNWbGP1KhPQdRTDcMCpryAp7LNLW8mfrovXYaBz1odjTZSND3j6xK37k94er5",
  "key47": "56fTsgDmjokD8YtuZ9EM8jhG18ZLcgSbePa52RVfHnW2NqyhmEKDqiBz9nv2nSBZXtsmXrFYeREKt6p4wwcPh2Hc"
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
