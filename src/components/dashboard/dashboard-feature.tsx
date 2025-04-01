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
    "Vx4vqTnvhW5F21gscyrznTLMr2KqnDjs5Z1YzH56oPdTWwWHom4MDLCEHLHEwTFoK1MzzNLVKb4DAEh3HbHQoYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvxfJSrQxaa27DdmrvUbQau38H2qNQZQieu4XmJ52p4ciaq1V6V9sXLzsnDViiMCoymsbjHjQgpfDNJrjr6d7JB",
  "key1": "5nkhUVVZPdrJsVoMTCGPthHSAn86AfyWqdd1qTeVXED4Mi9MYyiBJTHsb3hnTGFNqfYn4duCEk3z6DjJoHQmYYVH",
  "key2": "5FMaQgCcwnH6mJbBmPR6rdesWbBg6hpSfEoGERFQxZ7zZG8GXVCyVr6k28JcHTwZ2k5LGZZRfi3kqDKjP2oExzan",
  "key3": "2L9SS6JDMFRavBjNrK51mkwwcM33R3FYtKz7jpJB2SEZk37cruC1vnGQnJKUNRTf25ih32MRbyoR6jdYEL4w94ph",
  "key4": "5NZG6rB1KuQMLMBemj45GbLMVcnF5pf8PPBJdCCTQ1nmtNPo3dARRnXNXUekSdWRLPqoMWS47zff2e8LA5nhRcJV",
  "key5": "BgskQkCpi4pKdJziYJuXTZZqq8fbRFe9UkCfkrfCRSVfVCKTGC5QJsn6ZfSDD1Wcs6qtNLH8g92wEmDYhCEUdUW",
  "key6": "2b1FYfDuqbYZ5vuVACQmz5yxo5SeQsLy7nVAojwaPJNJy3C7oUm2oLZ33d6s6kpPWB2wvPMUw4ihNDv7PTmcwfYo",
  "key7": "eAVAshutpNgWVKWCMAkJHr2Mcw97qHsweMq4QCHDeBeiaHHj9vBZMzPfcbHzXXgePp8kxBRizKTFQ2Kih2JSd5C",
  "key8": "vJ8fX42f2tUdTKeDMg5XJthKvsmnVZuqacngwaMhZ3TB1dmYYTS9sXwh6KsteazMjXkK2QeiJGbUx7ZSnv8rbNe",
  "key9": "5NY72REwCcm1fXwPXmUXWLdaG48sJtQP3N3dUvgkG4opMshUwLNizjjFi5JL11UvFeVWpNjzJ3Z3cty43iNhM7eB",
  "key10": "zQqREYSLetp1VdSurXmDzJqtSeBVfzccAHo9YNJrrtZWJSRNvr1jtGm1yw784sDo7oLVx57k3FZE4gYEgMvH1E1",
  "key11": "4otH1pcWtLowXN6qLjFVM6Nt6jH7ihQExVYxYRjXWG2xHnWTCe4grihK65wxdSTes7U178dW6D4GobGPxcVCDDnT",
  "key12": "4MTS1cdpdEgn2FvzHLBoSfqp6gU7ZiCTY85ZGeo5UnJp3nqGNxq3qCB2v4Tj6zMgHDj9kzNY7un2btwiaUAam1qx",
  "key13": "3vUcJj1huAK784E53B3LzTPnoTtFvauCzFM4XHGNP9NY8UFY2YiJhr1a4c6Xacv8T7Qb2xqmMfqdzraphXd9xZ5g",
  "key14": "McQwAk7KDinciKBMNDFuXvThCr96vt1gQ5sfHpYF3z3onRf4naqrJY69C94JwyDUBpoaxz4hPfi6RJAcRyKfp3V",
  "key15": "1m8PhSEXBnBeajyoJvgWh5eTqXd9THVAuyXasdRmvvDe4NiHNPWEzkKCkQf1LWkixBDAj4ehofFvAGv8YKGgz7b",
  "key16": "3ix5VM2W2jig8D4Jo4xfBrJxq2vHo6GrTRf7PBi179cAx6EQ2dbQpnnMcX2JFngA4Kpu34svADzqWST99xGmxxUW",
  "key17": "qWzMCxBkc6ihYqU9LtH4XYoR9NEUtXemGP4zz7698kjwzevhLpSTUL7sDo9WN3Ep65SdMxDa5DPzBAq8S63XRvp",
  "key18": "2d3mAPw7PAeWFYmSh5JTgsaBcEHBcm6yrPbDNE6vL51UeWWTpK8ZBR7Lm1QyfCjQQfwLeroP39SiRQ6YnyqGa75b",
  "key19": "2crEWT552ic2Y7KQcM9QnPsUz8g1PEdu5yAUMkubez4CALz7MW1PuWyeNDoFHvXrg9MTuCjEkoR3b4ZckiPxUdjm",
  "key20": "65aDfDok419if6upz2ZnWhAQ7iQ8tiN89EzdDoTb559b15LWCXyhYpUE5xSuseBri7FkdwME2Aze8NDZLxJBmFZJ",
  "key21": "4drraQ7rSqyB6T18Cn4uCAehqEKiU1sFmyFoHiM2nvMBMUM521TXQ6NMsGTb59AdzWyaeSjdxKrX6EEEBJ92Dgzo",
  "key22": "5btyJ9VZrPYpUfUxXjRnHFFSbQgdFXHp6GzXgUXxMUZfvJkd3b6bHWPB9V5mMyHLi7avahQJDCrrD9jgwnjBVmmC",
  "key23": "4bAgLaGgM5Lpki5DwgeVogU64Tg4r1Fy8tMcsJEWsao1NZbfEE5XN3Yhu55PYHqusPYaR9bKEdqku41vq7dJBR5e",
  "key24": "2bkWBivHiKVn7Zc2NnzdUFCVRCL1VB3P1wFMLkgeMkiWXiSGHF4GArR3NaoLRWiUrV4714naKiodowrP46AFwvUD"
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
