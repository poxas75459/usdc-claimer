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
    "3R41fkAp9oPiUzmu1je5XJd7fFZ1bN1tda5YmfnczG663VHaVzCvu9GcSSbtRFRj9cK8bcvRU3ZmnTLxn2KGeXo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GrbeTsbYgwzrvW8oU5MoY1bN4ZmxNMCNaXCSUVEYt2oz4GLmh557t9Q4fBRfYvW9WiBy5d3iDNVm2wt1ThabhuZ",
  "key1": "67rCaZ5VmVaXJwP7zm1MxCYSL5WXbCKaiKaZZzQS2N2D96cg8Y4xGJBEE9e6V2MSDzWYWPKQmgqhRhWhubA5f6ss",
  "key2": "4KdwYvgQJwQktsTbkbdeiVdpvULRzmGR1Ta7fNR6bNYcFfC1EK8QULa4MJoCrJFiAtKuwXj7d13dvhbG9CLrPmsK",
  "key3": "AEsz1JSciBc8gYkGZ8V2VYN73fvaD79937EvZx2PV4fVDRQ5L7nZSDdKWDUShPDad9DR6SQ1ygM6V1kWxPgQSVF",
  "key4": "3uzdkAKqhLNKX8Twp3QEb9EFHaGQG3TAqHvGAWFKAt2hw5sWcKfCEV3uhbov6NUAjGt3Mz1xsdiBkV5SmggSBP7Z",
  "key5": "2xiHGFpYAY6YawbpyM8S8aF53Rm4Xzv3ZWYB8fzBUBvD8MFxBUPvUyTkKPgLmV9FQfki76Wcq2dgXQnRsPafBwhk",
  "key6": "4JGF9Qq3aNKiGcGLdy42m6gmpt2BPwSXv5DJm1sT3wuZmLwTyfe73QQecLQfEHQdXWGWFkzFvNoDKmjnJYfgSH5s",
  "key7": "4AbJdVAx4k5gQGYD9hvn2w4RRWe4HJT2agnL7rpN3zmtEZKm27ia4Pg7VhALv5U5T58kavccDuoA9g7kATG28Tko",
  "key8": "45E3NcDEc2HKH6ANR2t9d1yr5Lz3CD2FLget3Mbnnzkiutfbbgsi4HVyfiKFQWFuXsAruuwC7xYJJWFH9S8xer8w",
  "key9": "23oQpdySyPSwmxr8iyitMP7uaZMDDvirjpmAYRXxfTgpwR1NKjKs4MkR3QV2V36nWuPT2Xt6KhowGRFNGX6Exs5t",
  "key10": "2FzbtiAEb34UoKuFXJ6KTCuqVXSU6aWKgsb5RHvKBLLedkucDEWJEqiKAHXY73uMqaPrafj4G4UHRf7pGKUCGiUX",
  "key11": "4XgPVh8E382zpqyJ7iAWBnaj2N8jpNuzHevg3jWRumMSU5YK6rLg8ibojx9jkvzh8sceiNp9FDkimczAQB6rJ86M",
  "key12": "2qKtnEnsSoHadWCwktwr2m6HRYPtyjiVMsW4UZzsXZioFGTr2f52jg1V33f8YXPXgDysyttGP1H26z37dzsCQLte",
  "key13": "4Z4QukCRr5bpKy1hfjWhnUxzk99oUqRL4QPz6Chqgb6KivPLPfVBwLSPHBwX1jfTAyT5fvsiBaJwMXdqvFyRnrMx",
  "key14": "5p6BUn87q9u9UJYKGRRkGv3Ws4VaVenvsDuyQsuC92VnsZuxNvqjPipvm7Bkg1DvMdmYudW2iWazGUjuTPgtbbEF",
  "key15": "3MPaargw5w3DqnXV1eSPRVR9QQRSuPm7d3zB1idrgd5rTjgbrjVc4XRXrL9PWtXaQbbdtEAKNRKzWTMnZYiiEoDA",
  "key16": "5DHwobbA3AkRcuuGVe9FYh42VJTouGVNYynkCGaBpKVnZiYhXc1vcBHNLBEvMNRSuxgLHoU7Ka1uLvK4Y8xJZgSb",
  "key17": "2DVTWnazZindrgQuATWFrzbZ6ECqfKjytWXCAjxeebS9a3hmWjzGNp7mH4YtDNdrwRiypHbPnREs2gX9wTUM3r8p",
  "key18": "3QHafWRqWGGbc4zs6X9u3Sn15gcL4bakC5jpQDfyhkvpXSodyh6VtkefCj2gcievQ14BL9JNiye1hH6ihLykcwia",
  "key19": "2iXnEXHpDv2KfC5uPmz9B9qeJrrkvY9vX5Y8qy3RzkkrQCmaQzk1ZLRkvaRd1KcmqVArNsD4AZ5Uefrm6BvYbq8j",
  "key20": "3by5Y2UewE2fgpXms9DsAC1YddpQsNGrtByHhRzHHHV1Kvj5hamst91TNKokv4CKgovmQYWVEhYB2Kopx14eJxy9",
  "key21": "3JAQz1EemgPUtfiBW4VCyMDceL7YxAw4SusdAnKLhnk1tcLQH6pNw3x5fcDc6xa5dGiJRNi1pDAgrjXKodeQQkQD",
  "key22": "24FSA3CLBYpfirjaiky7onmZ7qfY6kHrxxs5zyo9Rgj7nhPBsCVfrtQFp5Yfr8sDmHV29q3HgoLrStHeP9PNTWuC",
  "key23": "4HEa9seZSNQ8HsAbuFassurMUcD8uNj4bgTUZ5QygZeLaCeDwrBpVQXBdDWtkbiCwmweNkWK1tr5Evhmy2gJTkxu",
  "key24": "HpzxzJSH8bhjE9rvBYxpvTh4ZepTRZXty1WmCtWevFFqUQAZVxjxPZBsYHsdeqbhWU5E3zvnZcYzf37Tnqeqttu",
  "key25": "2USKDEHGL952bKs2ENFwtguXDCCh4SFiW2LY6X6UGeKsTjfDzqgjChQn9fMcyKoBwgkcjKHoYW3iLD9h6efnV8VK",
  "key26": "5WWfodXTt8CukXa2m7d9mvkmornxoh44pPNkFz8AvpQ69ovDhQ5Hm8JMfjZTT5CcNN6U8EvLUorRZVr2whCMghuU",
  "key27": "5dEJ64zR2JgZGYPKwTZs9TLjcKPp3MrJeLHx6ySG5K2J9pdCPXNYYgHuYFbodaXKi2YZtQkKKGUBW95feafYeUGT",
  "key28": "5MYGTshHZDuVJ9ci69ak26QYpYMWcnzbzu3r4W4QCLhN9nrSAdRRo1xZZ28BtnMXAJ1xL7PGiqvZftBhGVcFnePR",
  "key29": "46zr7AvKtoqYBxHr6iST8dbUJTFN5fc76SuTPk6H17omasBuMoAievrAMemqLc6iVesFoqjw8RfotQYLzXfKGC5y",
  "key30": "5MP49tcsTqSuow6J4cKWddFR4L77AvSrbfN5CDyq4j45mmksJxy1fJJjYujodmACERRRYXfvA8u45WkEFbpman3F",
  "key31": "4WTYmCLsBPnHYzE74iFwL3FBMftHQmkztSdPQQi2HxCJKcqSrCiUKzBAiwsDJHaNM6cSRq8CfBjiZd2m85Gh5wL7",
  "key32": "4kiXjw1AVEusEREX2bvh4HFAbd9EfG3EwLdKKcSwvofaqcfgMHR8qJRL7aotKzQL7U4wsgjBRMbwQrwrLGSkTf29",
  "key33": "2s8bGizbRgjDH9wpAx83MT8akzbQkKQMcoR32nf9nEspjs6kNdESaj9sE7GZxvm2v3n9PPfXDDVj6tVjaNkxF2he",
  "key34": "36hWYNER8nKBJdMiBQWJdtjrvZhN52sctKxKt7EoXHLHF6KbQLuiXZoVGMPegdSAy2hah5NVpGjWiVcZCGHTeXPm",
  "key35": "8vuDq31gWn6E1Y1R4amLSaB3Rap5XRfq2yfx5knUW8HWs4x2hrZh29LqSMhDvSbNRaouLCGJfg1Z6eZDLthwM74",
  "key36": "3fFVGGH24zwaexkjFTCWP8vSmWpJckfLsqfQEwZBsuBD3p8cTJmpuarwbdLyE5GnD9tdMXMHiArGJkAS4NXwHqKv",
  "key37": "zbf7i8kpy2xrdANiwsC9vSx4xVHqq3mkKWrhcKHtkyrNnM9TpFin7FhKsXpkv5ePk5sTPzLh4Hcz4RUYX1PFUza",
  "key38": "56ioz3VwDbTDb3EiWBiokMDm8V3GumyMDRKxNAdxcJSahKafxXMQsMo7Mt5hAAVe6RFEW8Ny27EEduCj32iFFZH"
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
