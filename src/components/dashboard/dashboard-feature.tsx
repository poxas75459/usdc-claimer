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
    "36GtkYNrExxVnDe3ic8DKn9NoDhs7jQexGtAnUUpjhhw3TtbAZnDujcpDLBTiGpULioYXNj4vRMtV9fxpT2xW5oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SiHd47fWYnNMAMn4faJPyLuAWEzXWGKGXDjqm2mmVbxS5mtL28GMsvABQQQybXzqBbm2inZLrXt9GKSMEF6z78",
  "key1": "2coT9vr1VqF6s8gvxUjpozq2d6GTE5GAeCnoSm4cRVCXLyZGqrpQ6WiR5HhsGFXi6a95RPHdhDdCZpcTARsifDze",
  "key2": "1ZNPyKBJBjXoZxPV6s1R4vkRAEwMGPbeZE9dmesPBHL1fp4GUC7s6xNzGahYsexPmvRhs7mirrotMksgXF16TGa",
  "key3": "3HeuBEgb9t2pYaD3FDKLBu4jk35D91DkzVfNtiY3xPiFKauYv4Vd9yoGctHHZ35stb8ffrSKKgneiZMLhB2UmrB4",
  "key4": "5h2JQYg4RbFBa6GDWAk8fgkC9e6zykpfqsSUXAyQbRZN49Yr3rxgs1YsFd6S8ZL2eUH4QYrxpJHJVpERYZaAYWhV",
  "key5": "2Dpfxt87zgy45aX9SvupwZvyHkqSWMvdxn47atDzt6WvvkYCEiShpLteQanN5UtYUy664A6PwbCJY2DPP44VL9rT",
  "key6": "3z6iwz8SgkMtZa1YfUa8yW91gkGNiz2bivvcVqYxGupgVErNUTD8SoS7nmfpSYqnBC1nUT3B5TJvVnkD2A8zANoC",
  "key7": "Tnt5Vt7HtiCTSmspkJg6EucdRmscjEvUKqJn8H1YUU8uGtUNeizCpLoFqU7gqwHjJECWUc66vWqpv7gy6nHazsq",
  "key8": "3mNAosjovvhZi3qZVSGY5sKVF2rKX2j7zpE1NPa1LDXMVNqVg6eBobrHFff49bak6kwRfbV1zaZdunozF6dzYPmT",
  "key9": "4RCcpCamZBMvuYz3apNBPNDZj5i94Lpe2S23zp3fe1po1HGkAYa4ShGGPQF6FQi9JxPYP2T1uXKC3uK7NcK6yhFJ",
  "key10": "5WYUwy8WVqtej94pq5WFuP2yu3Kgg2X4c2Ptw5ZeiFzwGW4tm648oxJGwV8TUpqzsn8PqiVPNSfXDKmvzSwCed4C",
  "key11": "2PMhJTw8cvTvMjXtqtQEFkoLimdJaxQKRFgmFshFgrTMHNfGbBa2mJUU4SmH7pSmftFgarhDKxHcTD98AiS64yfe",
  "key12": "47ounPGKvAaUK2zcL21XFdxCLpV2b3px6j9iHJaiCPrsiLtDP1aSE8ayoGAkVUK8PgZxsjD6Ga7UiyWC4vXYDeq9",
  "key13": "43fkZ9QNsCjijfFf9jkoeKV6HyxmnKEc5s7xZXQTTd15BFLgrFcHAo8BxHypiu6oWazNJHY6YMR7Qb2zYitWdXRc",
  "key14": "5Bs1snz315ur3xQUMuUKLvHzEe95t7T9H1HNReUA8wxdK3gCExzGFYLpHhrwiWPGUJVuscRWXXVL4hwWB8WAQRs8",
  "key15": "4RGV2Fx5wx8XMZCseTvBAu6s3jZsvTZve5p1iZ6iHTwdktp8f1CG3hGFAoVTmonDsavwHTeiJeRYxcDP77pc9Hbc",
  "key16": "jht8TvfzBptqLyB5BW6mPkqrRU6n2jcrb8J5iMD6wS1L9eGsLZcLLYF9N19xJ1dXuCAPVwSwJ8rogpUjdSMxmAA",
  "key17": "2eZJueQbT89XjUzH6ZP3qRWFsVW8Tr7QpPNHzzp7zy9yC6PEXCmQc1bAdorCAqgAjw8AY24JQRSSyLeLhrXMhxPS",
  "key18": "5vkvmw6T2m1BVY1px6H66x3ksx7qn4GdrgpnMZtNEUUorNPTpDvgQzEmpybD7Sq3rj3RnmWQS11eMSPVjRoJGitE",
  "key19": "2KpsnwhdmbbX1vqeybLLLKWCpBksUHnBtFHoNK4ZYZhQTcsKtFLot7gCBfsARSgNEWf9skyxPPirVEsU7WQaMmGv",
  "key20": "WrgMC8J5P9o9vsZf4JuxatRmR8nEFTpVvcoG6CCnbaFABhsyY4psi2JE1ryzWXDoaV5i7n7ENTrLvgKSXupRkUY",
  "key21": "4KvFDX6xN7Fix27qUTp76hhLPCp21NUsKvgRG4Xzye2jmREVmuktbmGDo8rCerJwd1vTWQJx2hAnFkiAQiYY7Z2e",
  "key22": "5H2BBeJtzqUJvev91Kzs2jTzGHT6mE13iNCKx9fHS9SAcUjcNu7up3TDovh7KhLXRsMEaQUmgro2evdyJ31HgvZt",
  "key23": "4b9vEX935XZ6uww3aWNagBD4EjPM2LHtxghuVgopf4yqQPVdTbTUwaRvYZVZjisLwrQKwRQgQCpeZD4Y2wohdn9o",
  "key24": "5R5uHxNFj2JMsuoez9fAsjYqudUk6KzacQNfoRcxwq2V5MtCgwwSbr9fqyazNdHcHjdeKKvHWrq9BG5pnAT53K9d",
  "key25": "2ZeULTt2LTBF6GxHw9ckXNC6DCqJDty91xmshQBesGByHWqhUo4B3R8DubYnk5D1KNZVoz87uRAk9hUvaKsrBh1J",
  "key26": "65vmNJ2tME6c8ZMxHMeXsbg4MFZcjcNRMRq7Ykw6arDn351JMP4tfUf6Cb5UhrivbLsciNZefem1BDj4m2aPHGHF"
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
