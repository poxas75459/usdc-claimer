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
    "xF3RZ2d6amA4w1HC2iaUaGTzTCeSQA2EJeMVwDzYeAGqarHXoXQGdnvU8W7jfa2tf8MDwk1vgfiGsAW83nmMzVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4wwVBqncsCcEuTXTaMHGFFeXMazS4qBya7kZnAc5CXqkmTPBXNf52bCmYrjj4pkALz5EsJ86vKY1vJvD6Jonp9",
  "key1": "4GqdnZqh83RuWSFZVwFziJonUmUrZkavZS2SMmL9ttQy49sA58dfw2qr4jzafs4tCmd41Db1Uy7W2FziQm3E1oUP",
  "key2": "2YFwd4CPZpMi9fJBZoBmzAnkiHT13GHy3SDexFEdwmMmn8JAVdZ7jbukWbhf8kNaL3whqCt2ytmvpvjJLcSsqeq1",
  "key3": "3QFXHe3Q3tuiswNDdezuQS6CQJzdEB6ZtkFa7YjuHVrph749RVZE2wumSgJ1AY9ncQ8evHhhxZKdcV7V9LqLkX8q",
  "key4": "D2gBD449fepEUoTUWaRhzL4fdXJ5YjGRJv2m4Ru7arUAtFhJgJojvrCm345qfqDtMLUaru3qZbraMGyd7jmtK2R",
  "key5": "3tt6hcHJ3uDph5f7Q4ZgLcSw7yK66KxpV92ZTWNbXaanSmZaPgCyaFr9caUa8XJEGSe2LdP94TErU9HMVPzkN4QZ",
  "key6": "5GBnQicPh9ioYrJxNiAPg3hwipNA2TpoEc44UyQcHXhiJpDAhhLtbkQbCUnD9YhNj3YuwgFbSzv8N5g2XBYu4GPR",
  "key7": "4HW29MCJejFFJBYH2XiqSTmZZ6rxLmbtCupkGQ9fh8fm3gLdCQzUzFRRSdTg2nFRNjDfwWUex85UFuf7AdA5YSwU",
  "key8": "3QSi31bQDZgGUyJMNd1W8jhUsmgywrhv67x7LnrS67oAw6iXWmp1gqfhcDS1NHSr6jipyn8Ai3eCAb4g3mrDC1S4",
  "key9": "4hewneoXyzKk1CSrRJMSE1HPrpD7Gv6ebf4yFt56uAk9U5joa9eUdGne6QXaXtpreNUiP3ZL2N3QFmo2hyGx6ABD",
  "key10": "522iCcvaVA9u4hXdYfgS3RPVbc3cSUf4webAhx2vjcUmBXSvhhF55kdxgRbnu53otaBuUwY3jTYVu8svbHdKfdiU",
  "key11": "2QEaVkRasTXMXEcHKX11A4hZzgerTWtHRGjtSkz9RKs8bVVxoSFrNVky2dEGeBZLwAanvxarE1CWZWtuVgHgRXaa",
  "key12": "3DRk5nx4iFWiZDZKfHAYHuQxvHKFGk7YsCoXpkz5ByihHMhFHDoMHAwQavcAetUouneW1tXY4ZZJDvzCN23ifr8y",
  "key13": "2RMR6dNmctFGiLczS56w3hqMFmoC64BceXjW3VTHyM4xodEPNx4V9kQ2fAodNSRyXT5fLTUSHRNQUA5NsnSDc2VT",
  "key14": "4Ns69jQ1TXRYsBLJhNJkiVJxPUUvnCTGorMWqKeEsxPBcxxa8ePtmFGDUYArZ9EM1zmJu4hJEvWqiDvRkApuJL21",
  "key15": "2vTm1mP3Z1knkD6mFY995Mc1YYXwszVx7Evghib7QmiySkcexnuWuSjHyqJVWpHTf6burUMS76B5XRdAsjtfLyo6",
  "key16": "57pTit62JUETj2SbAXAy1as6Jp8eUhoquuZxWTWVrpi7vBw5ioUXfpLpD8CdscEhtbqAC6aK4FpDFnXqCQd1VAKr",
  "key17": "2sfj5wwKMDiE5EU3S9FVkrUdKUZKrQztAXA7u3X7WT87sAe1jYe4Ash4x3Hc2yJtaS1p8engygfSUweVhLfxBAV1",
  "key18": "3XNAfrpZS22jPCvLKPcBXcDcWGKcRwjqd7Lni9HgEDNJn4pJE6xhR29pMEm2oVYe42nFdkHwnNzeXhFzq6ifiD9j",
  "key19": "5LnPrwfBegbUNfDafmBMkXDXu7MiqhTZJecCi9jfaZ2FhKp9AyVnWnA3493re9Km3vV9GUr7P7iLAy73iGwvg9KW",
  "key20": "2wfBzxcPoQSiwAdVnAhjex4MYce4L1GYVn8nvimUG9ZSZ1Es116PtaAr2UKb6va3uHLLHxMnVtf4ieoVKawt5RK7",
  "key21": "292bprT3Y79ahez2AwXjjCYVAafGWyJ4sBTsJrok7h8ZAXHrkMCWuSLqBjnjaSuZUgECKZ8unaMDdAznjNRC7ZVR",
  "key22": "jLpt8VfZZJAnLZkAk3q9zBJhUf6b6dxdEU72rVA5TdWGQY5BKtnV9RXyLVA2J7piSYkx7rZehbukFRTTEibxCMN",
  "key23": "5QKTyUZRPsJaFfspCSEctp8JyVK9ePbhWUeiNWrP2MPZgFUMsr24FYDig8owVkSpH4pPwGnKT39DtPZ8qNtCzHP5",
  "key24": "3AVNw7iYhNDqThpe9LZbtc1QSUf3jsdUnRixTjWiGt3xvMi79jSAgeGLujDomz3x42UmCVzKkWUgWnn69DxEumrE",
  "key25": "5qch7c8uy3vU7f61cb6TsG82nrSZHbCPqmWJohUGPD4HCdD87GZdpJeVN3DF2Tss8bUaKXWoG3c5WDfvf6U951KG",
  "key26": "YS3izNr3YetcexhWqrB4V4HZT9qoDMZxdv82nt5bWEdLZz1Wc11UEYxHcxtP8zd6D45QQprDLgtLCWbP1Su1pWs",
  "key27": "5viwYyDRLPTjdcYCUfdyH68zUZVvNDm9fjKFEw4GpiU74h1NKW9eKd987uwLSbNazFEniLvgAWMPw2PJfGiVDYvC",
  "key28": "5qBWFjjAXjvjJ9VC3jCM1Ctw7m1ShW32DH9tsP8rXNdymUsX56DkF7nJLrsn9Z7jHms7ne4RTG7g1LEA5yhZhUP5",
  "key29": "nQTaYmJgYHh3JqTTjDuQGLxv7Hqump2dTXnCpCzaCiFYJn4nXPyqoXJm14RxF7Y4AGD32B8Taq4mAE9ASB8g6DZ",
  "key30": "3Wc1RXS7ArrXTfxwijAduiMeGSskdt7WLRRA9WTNhYxQYJWFLSvMdkhRxFYvX4zeLGeeUWd35Gaqq4o2eYRuTLy5",
  "key31": "4y4u8dHpfpv9zrm4VY2fUcatMNqykYXKwk7YjMgh7r8m92uJUnJu3WqHugnXWCRAguMLx7R6GrHbxU8kGGQ9nfhq",
  "key32": "3ojigBwcdzHtzNHwnSDBYan2pXqCZZjVp5hm7zEBMhCGciH8Vk7f5gJkCT1i48SWuXNKuLRGnn4YgsBKYnDUnY4v",
  "key33": "5eGrertg82WczGzXjPnKZzSKXJt12hAJNE64Fg1JF6xWFKBCteSgvaRZZgs89mhEwWBafv8tUjTepNQRYdHMcuGC",
  "key34": "3o6CahZgz1pviRW3kCzH5PWkfJy2yWqoxuCAHJdq1fUzBNE9H9eJFfEMXze7uLZcevaJqiQyDBcvBwxgVt7hV81b",
  "key35": "5MBxLSEB6nwUsDLvR8Ld8HhRCeQYXqDDB5phWcXxHtzWmxGkmeLEcvpwYs6SxLgPMbVTNLoerywMqWzdwhSpsYE1",
  "key36": "66jDogHLK3df1p7y1KbXPoETa1FiDrMWYEBJ17g53CHEyixie1y55FwP3tKDV8eZ657YJZ63sxqbE6CBERU2D9kj",
  "key37": "2Le85ujCoQ7iQvrw5qp3uCLy6thiDCxXh8cUCR1bwFVGGMtZtLp3pCi1sZAboAF8vZdbqpGWCRVKL3RjdAbzQfHe",
  "key38": "4UCi9r7cXbodiqvz7BD1EQnY7zyKp7HSMLDmb1c7XURShA5hyPjV6qcnziWfeBVfeszL72gapzyqmf5LbSux8pef",
  "key39": "4TgQScCVJLVTtFMFqGnwQGSw3ho4hKTan79psFuch4PquvmynaZhUtEErhKLsDjWZAoT3m7t2yKjuohDgyQYJpjG",
  "key40": "5tEH4Zpevc7iaQG6BLBQTydwn8LEfBZMYF2Dm7cWDC58aDnSsk5iRDRSL1BX7SMAronGVxbCGo94mCwXfFXc75cS",
  "key41": "5AybN3Tn2fcvivxMLw8eBDQVoU8VBZoPFyrGy6emQFhvKZdX3299ASMe7HBkgpB17keRBY8w3FmRWXFiaT79FaJA",
  "key42": "3UaLj8yDCu3kWNALsJTUjoEprAGbWupSsi7uXHzVse5G9DJMWNfE3zANo6sVHWRfP5qsEHUhdAGTNLVN1GUfXZA2",
  "key43": "F1GVbH3Jn739oycjq667H3FspJmmrW47z6QtZrcuFesxEt76PPxa53nmpZhf9vw3xFg1HsiQuTeLYv3VdVowTBy"
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
