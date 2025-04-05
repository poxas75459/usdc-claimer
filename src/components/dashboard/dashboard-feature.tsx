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
    "53oBiurAf91i4E8aYVwbb1wYkJ91nxPk54gYXxo7CaqzLTpMvEYmpJRCLsP4NtfGat3SLUF5vfWRTBBSwV5jSKXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zL1GhmrnMa3HaBk4aXgod2DjmPM6ryRTbciSuWBkoWMwMFdjTsJWF2EvatAAedSUEEUPpQQuSCYahp5rovzJSiv",
  "key1": "b1XHTyybwWr971E8TDD5m2qBoRAYFdZQNwTtE7QdmSRxiYCachchcD5UzCZTjzRHFPPgL8we2RuNGYHioEmdyyC",
  "key2": "2ipZ4q4tfL5s7xJdoGAQ2K3aNMeRrnKF31Af7iy41TACE2MeCdqPhEnkCivukoQU9V9RewvPkH6SfAY8PceLcQeW",
  "key3": "4mE3qQBQLunV16MYjuXE9TEUmPaifnfquzyaGNdWGb9BUBeM7LQHinU5AJDEfTfQqQPkPF1a8P1CBQp3W7HyLqN8",
  "key4": "Gr94Pok26R1JrLNZTQod3ehgYjnu1wLvuA4JLYcqFUc1fKK4aFfDTWf8xX6JcwxZQVS9wvsQQYUXZg2AkCDo6Hh",
  "key5": "66vxHgshDX3Dmcu676gjwoKiQ76c3iUrGAK8DN9VJjoifgUC5p8EJBVqg1yTiHLEp6Laevwx3ymp3tkvhss7RMHd",
  "key6": "DFxQtU6wMnnMvLPDejnvk2tnG9MrGsHVEtPpceyegJjbyaF4f2Qdytwwyo326RAU6p8weuNDdEVQAGjzNvrWAtr",
  "key7": "4K3WSbds1tFxNc6tUXAcLXxqQsJDjor8WQ5QhBwp1857JT7jBbBxwjaVcamrM6jDxLo3X7RHHR59PPmwUDkjnWqa",
  "key8": "hj8gC4gtQ7YxnSQc1YK1CKHSrawdmKJNH7y6qdMR81EYrvWZi3PpChZ4E7NpfDwYq5AbHkTQoR8RS9yY1DTTzm2",
  "key9": "cavsBi3kAezwSg6JoUpT6oJF7TvAwnFR4aBCtY7362NQ9DeZtGjh816zKHB5wFd8dnoZb2Xs3T6aeqPM55TbDpe",
  "key10": "gzAWFYD5KYdMDpdtxHfPa666DvHtw7eSwU8efENMuiPwfGBNfxtxNz3LqQ9UrBoGSEn3acnBHnZZYmyfvZaZ3P5",
  "key11": "4ziYcPAN2cnKJ89ChteaTMnJjH5ipcwxQn5nSNcxt5j5boM444RqHM7CjDLXiRBnoAJnhfoPUMLGzyGNSSaENGrp",
  "key12": "23ZiA7NndS1dULvVtnU7zhvJy2vr24CYzhscaXqwHBby4D7rUxJMTgxqXnkAcYKDn9PLxNr92NJwxnPDKtuovppp",
  "key13": "3MeXWT4L3Gg2msZf8Qo1pY4RyvFJEU8F73zD5LiB8w7at8mpZj6RCAyGBsSSroawrPbQ86riNRXNaSR9iGWQo8jn",
  "key14": "4rMAHiruVaA6XhZ2EkjD6fhmU8c7kgREudH6Q26UEvkhGRs7JJseQcFSmjUccLQ1UYxmtQyzVQP6JKXXmBbS2tE2",
  "key15": "3tC3qzewjgXFsu3QMZ1iUJrX68ZnxRLd58nphT61PAmsPFBsJSvkqvms2XrkvytdjEu6XrewNdDR5JMBEjyKTF57",
  "key16": "EcH9KPmHePwLsWWZu1dQ64unjxrxGKNAz311gj7U7DKsZaSzGHpLLdoyQjddBPLUfEQaQ12yBFee1WoovvD3suk",
  "key17": "5ifV1L3Vzqb5q6gnP3v96TeMTmSHsRnpiKzhBh8WYzwx6R6fHhg1fGNB9uftLvLiyeTVuv1CRPedMTmB1C9MCtKn",
  "key18": "BH6UYE9rvyAvbzqkxGGNYMriegXnGBsakABpuUHS47CV3QfrbvFfEDatAP99JQWk8K13y52RC1FzbhF5ToGyxxb",
  "key19": "66ixJHGJeiDShHGeigNir7LgyREDuSsN878HAmkS3xAADRVp5CKj5nt89BXmrceWaZmM2E3SeD7cjY4nnXjLMDCb",
  "key20": "1HpX8VG8dAHoXgtWu5QqNM1a1Eo2A6VPY3oMAkJCJoi1YFAyz5xj5qDFJrZpjZokCbf26wdV4buAGWE3U8BBbtM",
  "key21": "2LgDDk7hU6nCKzNBEvB9DVYeeTdHLi89tLY5kuFS5W5bDH1eGP7jiZBbYB6uG92xFbFtMkTS5tsaFqMeod3TzPFM",
  "key22": "3VTpNdnXwACQwEVzFCZDz6bYJzhY3utG2pUhf6q8niaqdKTUVyXGBh8NdEKV5K1GxPAP3WuESgBtg2RyECdgLgci",
  "key23": "4rVFpZjJhUUNJoRnGTsei5mySPxK36qghx21cKb1KkoLruuX6hKWfCsVxCkvfa54yTPPMFrfxHdo3bq7DWJLfN4j",
  "key24": "5mX5tvjGVSetbb4pbnqnp8HKpG6vk8tbphxuFrLTFMSCQANH2DgkeGGZ2rWnDb3yiJqQgBYD6JdHi71RFQMYJh5E",
  "key25": "BnMHLtqpxnX14s3q5z1Vtheq37DGVyW4J6YGqMuZ9hgtpffgNMoiKg3vfgcnwa1634RtdvufDnMWX3PTiS55MGb",
  "key26": "219CVAyoRiUW6RDX3WRAbK5stqHAsRPLB2oPXML3bwGna6x2JhZKh4TLviN8L52kut9DAknJxvuJN5ExzXMScGHH",
  "key27": "7Fi8QL9kTQPhewKV6LDYmaS6MgzfBTPnDGPz6yid2EwDRcVLNUnRWYD4fk4ad3Z5tcjaL7VBXRRHE6Avxj5dxHi",
  "key28": "627chmCLyG5EzwWetyiZ7AKh7CE91L4o8hq3qFqrm32MjNFVbkR5DN15h6CLANasMjb1CfsibC7ChC6MfESuiKXa",
  "key29": "26xJB9PLJCkZHGUMEoU1W3Zv2u26caJRNSxnCDvsvJckhvWsHRCYMTfpCjZccE1DxmZcfGUMVxYjEJUZmfgyKPcA",
  "key30": "3AS7qkqu86ER96Hz1bVna8LB75tEtxdY5NTpQYofevk43WuXPS6HpaLD6gh3eDJGDDpdPVpnYSpcYEfizYcAZmr2",
  "key31": "5sdo5saUmrtMjxkxxjh7hoyUtetgEHdEWiWPFaFvGyuegRoRjpCBhHVi1ewCQDCq8XaHKrL9hVB6nSuYPFtdC7L3",
  "key32": "5ofDMT7BhoJbPWvimNHyuTbMpunaKtFdYRf5Cw1MQn9aoBox17hSrLT4DFZgKfusMWckQvpxxCvgj3mC6GawApZ7",
  "key33": "52tFuRiuNBpxQYU4Uqo4kHRLNmwKdttj9hw6Sq1buP1qUaXQbmkYKbxTWa496ZbsyVjLo76LNQHQ9XFYSAYAzuvN",
  "key34": "4XDmKxGAaGq427Ftcfu1ajevcpjt7wU5P54oTDL1FgTjWWdVkj6qdTyfiwESBQC9u22T64D6CZncSspo5zy4ppBF",
  "key35": "2dnbjngvXrzbAHSpmPyubEvescBVxWqcXywYGvwqAarS4iAJtjQBXi9qQDhQpxdxfuoUquRJEVbKkp7kXpLn3rcs",
  "key36": "2R5PThWKQZBShB8MDW5ijraFa9RuaNqKwNgFc5AKKUwTzmzuobJaBrxLB2EMUJFKgCJHa7eAtF8zmCagxZMYf9Bg",
  "key37": "5WojMqatjgNAJgZUhTZPJLFFynp34sqrFVmnn81cjhJS1V26Dn5jSfQoq1fJUat8aT9rERCHT9Z8C7MieTasuhG2",
  "key38": "3duDU6fv674gS1PJzNVvh2cpjVRys4jdYJVRWgQzSHLpPQUEnu3Wo9JwVBH2YH117M1NY6K1QPKrZ3c7oeHcggQR",
  "key39": "4SYEX5Dkxexb9ZtJ3UQAWP5HfxL18zMNatNkXfftqg1tgPJ6pSrJ4qhLNCG2hkjyArpimKW2GQ1eTvnfbQ5c1KKY",
  "key40": "4LNT3je8KXUzEEnooJ81VnTT1cnrB9jgj82Ha2Qoof6X4tC5rc5NRGpme1RLnCZoP24FFWFnJzYrUmhawexq85kx",
  "key41": "3AT9Y6DWBu3d8bqfRghWnCTk3R9eSYSksMUtPiFZuXjGcffsf4PiD4UN8xPN2NS51fNa6Merf3EgajDyghU7Rimf",
  "key42": "5AzPFhWwgRQDZfmpXAHpW93XKFWqcbtfnAqw6smJWyPCv5Ucf8bXnXP92rvt7m4WYXX5V1NU8pksWRd1h33m2RYN",
  "key43": "2Rv8Xw6kpPoxvgiCYtUJQE7tsmJoDxSCvHcBZjCNgeqcWJ5cB9rKSD3iafVAHzMDVtEmdrt2a53NnchHUq1vjd5E",
  "key44": "2Yxv3qmk9Z6JNMJBu3LgKSEqKHPU6ngVqbVcFbK8Fi5rnuNsxhxdxs6JtDVUVzPVcZqvok6mrdPdADGM8CmALz8T"
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
