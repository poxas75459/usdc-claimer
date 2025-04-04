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
    "2GixsPxgs8Kck6z99cd2o8pmbUTdcCEhGgiKrCuRisdsvDigSU9qKReiiqA3Chw2G7MVyQSzjDo13zUwG4X9EoVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U73KYHFRgGPBr5D85ec4kv8JeSNXdm84yqsSVtcgAGzaQxhmjSGzPhcDGTJ3Ctbn6LipbMYTNdX48Z3wzBFiM2Y",
  "key1": "3HZBMWmdPekRHmBGax49wC75EhawQJnwMeUq9wGbrpgrqbhn1rn8yWMefZYGVowZmGb2EZ9mXvduv7yZBL1mw23e",
  "key2": "3zo8T1pUModYkVKk6S541ggLaV9f52t2nAuqm94sH1KG3tgPdpLbHUMuSZeBuBk2Y7eLLUAiRPq6TJ9TnuxW5SLw",
  "key3": "4ZBUcQnF3UxdA594sJLyPajmDNzM8eu5i2jcz2fRCRwN3vM5FEx4So7xKSDbfzDo1htCq3k6w7ogHKPTJzsF7Ut5",
  "key4": "cXbQYEgh523gi1CTMrY73V2ZjbAKgoXRnu7WRJZC5T5uRRSt6gp1nskbA4JWgoznr6P8GxnTm1kSgDECaEeXJWq",
  "key5": "45G8AEWQYRSj6oNx5Q1WVbn7pGFBS1kxZ3fZPHSZ29pmzEQCzHKXbTUbNxnFUBTTuriDWdxDnfXFcuK2pBxnWywf",
  "key6": "3jj7ZH11jmsYBV4ZzH1PAtgfrn4FNzHbFffYuQG6uEmzPCnVQnKp8zHtLnUmbBvgwrt5wjExFJMYEezwDrCUSQtU",
  "key7": "3BSbG6ByKFMwdQ2udiEofCvgNMpfi8vTc1NykjV9Rzg8wQe814z1mUseyCkNHeKuSNMTP8X2TeJYgPz6C17ntY9S",
  "key8": "5ZCJ6HJD4ra3jU2m212GAgoHk5wm4EqqTmwHD64sT3krzSNzP97zBNnTMcMdgyzkkC7vkGRcTYbdz74zoxg1Jcxk",
  "key9": "34EJu9Yvm6RmwrKYkHXLS9DnSrrygsL2ZA2egMjjuNNFWFq9nKNoeKUVTZV4BTihEdvixCpEv7YLmy64Jy28CvAF",
  "key10": "4Zg6u9UvGMaoKwaxUAHUxGaKpijhYupqh73pcvfzypFBFqnMWwVjzLCRvUbM3DZC82dMqrCz3Mjg7mBkckk7qFDt",
  "key11": "2FCe1CUgpbK2garmgmZMMLMzi2sSkY7wd8MZ8T95riSH4C4xaWFfQhXLXiahDexJfk5PnQgyKocoKKCBS2V3STFo",
  "key12": "5gnFMzCE7692zXX3NE8MYxXH1CFfgxrvPtntFDxsCoH68Y9rZyahKowAUNNqFGmFKUJqpqFtP3di4hpBQvBTx9V",
  "key13": "2kvZNRYN1RTycDgMWmH1R57DqdqcQkyvqssVBaCd2ksKFRNNoJNiCwUZiSv4oDrhdj7j9vJWh8YweDyzMBNWcTWh",
  "key14": "KSfauq18R8chdPxS72bgehTEDWJUdwbb7YXb1cLM5hVYvCi1XRcrqXLoZJFrFNPiJaAmHGqg2PePgdSGWpr3xXA",
  "key15": "3e1SGytn35tsTaoEEw6ZRpKrQKgeZFGANDAbuwabSZTEJmMq4oS3zD6WrFjm5FdLNMM4zefdV6fn8EGRQ4jzLDXS",
  "key16": "2wTwSBvUELpeJACXQqanW4uT8mAYFN1kg7Kf8utHE992Xy363u86EX2VzKXsnPCPb7JdhadME35hmrFfgdg2PRFN",
  "key17": "3b7H7CmH3gtfzzznLunwRrLrWzFv5fs75yuxp7iidHk3SAcmTV1oZZtXP9Ag3xfHckKUS2QY18ZuFSKPBdwirVCz",
  "key18": "568KCjW5GQ381JNLXSRcajxSogBApa85FxRZHFVhCtra8ufi77Cvqju7HUTGXNDPfDPa5tESP4FXRBAnXdVPuHjX",
  "key19": "45gQbRo8CrN9QPWGUxmfskcG8pL8S99FvT5CywLMDngn6bS4TQUzaGaufNhGM3Au5PcsVEr359JZQQCFDmSKgwEB",
  "key20": "4iWgpL5Wx2GgAvXVTnCUio1YXRWhw4i8QkRYp4hqgh5v2ZkFWqLqEAro8jnFQWWzN8TEzFrz3YL1pEq1Hhpwatqb",
  "key21": "mVNvESTkWoEmsxArwSvzY2p4JiRXfQKmcDA5qj9JzEcsnx5139i6o7jAJzfKT7Fj7bPf9XvRCBfNGLM2sjvLeRJ",
  "key22": "zDD7vY4aqWpJwkHaPfBRLnBVKAhtWCVvLGT2UEMHqwFzB87LhFkYEB434xQXuVJC1ER65cT3vaNEeM2pdmh6RBJ",
  "key23": "4oAPsH1wEu1HzNx87Q7siY3rxBYwQRqmxXT1QWXVfR1uNb26vGnBYMWiANHUSPHSJHjPBt85JcJujETMj7M9oWsi",
  "key24": "3dXrzW4VxgvTvF8XmBwSFH3tGeMxteza2GyGPnBiav2NXQzMHbSsLx5sHxzKjy7QoqpRT7FygFBYHU5XF6mQNxBX",
  "key25": "5yW73cA93CtbNhAYN5bEcehPLVq4cR4wmpQ5EZVG492dBqgNmDmod7Lq8NtBEjsEL9UGFTgUrLQTU8HXSgDYEyig",
  "key26": "5YRHRa5urmau7eroyfMRzPNFvGVF2oTujhpHRzKK1GpDmM1oHBYLaBUXu1T8WcqvyiMy6Wi952kxk5phGZKEoE6J",
  "key27": "45ngpixS175fX15HVJD4ADqvwr7SLxh3JXNSMHShczt9eSHoaZ9dnXcZf6GchHNR1nJqe8mZJRNoS18zQws32Kfb",
  "key28": "3PCsd1S7WQP39FqAF92VvgjbctDyXq7aaMJ9F4Kz9gJeCvpXJp7yPbqgpTeffVwGTVwJcfb74m7hQpqT4EcWzFEz",
  "key29": "5sQ6eYYWNV658fMWrZMiUWhE4tstX1kKyfGkK6dQEZDL1b856Z5swoNcm9Y7oJmyJ7vid1jxuDNdF5ovd7LLUxX6"
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
