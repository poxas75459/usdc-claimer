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
    "3ofVH7BNPwYV2SXii34mXsVD1BzF3fHgDrXmg8YQRCwk6sbqJdZMGPmPPuEHExwfzFSPRkKPYVV7L8qTwbscw2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lh4jhXbC6eZ3s7wHKSsrhJBkFFqTR3V5ERpfcSka4Wba6DANuX9KjHjaqLhdtWtQQnyf55CaxVZsS12oWskTwdL",
  "key1": "5Cw8BKih5Hbk29vX1oFgw9vidjnpLMkqSNQFMyeyuY6RD7WwPMvxyzyC5JNRT1af5krhXyrZXuu8toQJF1cZ6bni",
  "key2": "szmWuh5N223ify8nTrR8HtBE3Kp9fCYkJ2i4NctfsG8LMhTKiJRDvHn9ns9xP9jxJfhFBz6z3U72LDhEXZLqyUJ",
  "key3": "5UMvPztgaq7qs9bSXrftHnrXU7Dfn7jxttAqBAdBbGUVY1QUv6Nyisq3G9VQX5hdGPZ3fFckN8j3VbTXKdHHRFar",
  "key4": "4B5wGX4ozoidBjT45PT5yvzs1WtHMZvoBHR9tU4eZ4xX8wPjgDgXpcKFFg5pDim23fCH34qYCYi7DAS2TDa1Jhnk",
  "key5": "3Jf7QfZjw9juon9tFj2qqeLPdyLADKrTHFXzPBiEEKAeAHE945ZyK1q4eEB2uS2uimghpCtgfehPwCNC2rPChzWw",
  "key6": "3CWcBidyuQsoD3F9k5GBpNjvHL9LfHcRyq3MwneWdDqJCFg41SH5YSD4UEsbaj2kHCUoVfQpigx4U2t7wvLxKPYy",
  "key7": "eKHjMfs7W4gMuj2eG9NrxADSwKLEjvP9fnywPNWEFQfqxLmcmsvdWBFbyfWPsQ72qUP1YXVjoj2isFYVK1bgc9E",
  "key8": "66s7ckBXz8kE2hACk4aj5gtPE6nj4Pm8CmhRCx54VVdQsRDrpXPtqbXhL7NAS8DMYrz1rYTavBtEkrF7iLqwaeKL",
  "key9": "4wWN1Gn8nZM8iZ2qYaayX7xsdRkynCXgCJJ648WnmMNXLefxJcgnB4XZj2dF2fLe5WQG9nQHHNsE7e2YnXkbKPFL",
  "key10": "5uCobp4WcVQpX8EAQUa7y9T1fHGR29QSuerLJcPXfdkPFJm38vZfj7vFy1zRuARzQCmC8ZpXSFf5eXUuQMWTdM3N",
  "key11": "tZxxuQs9UE317MzTSBnoJeu6kVLEPtegRZBq82cQgW3qokq1atWVcFLYqdsRY9PmcB57GGbgWpe8DWYvrJLdJ8p",
  "key12": "245udPpY386a64vAhoxgJcScgV3EUx6GCuEjZtD9wAqNZLHEJWFcvAxj24VkwawBU8tRBYCq9hngAqvDkepmP7oQ",
  "key13": "3cMQ5PWRN4y8WA1oUHo3pjrxFUoCNd12S5QZQZh1mx9WNPa9jhSUcBLBdYzXpJr3EyzHJLNtyg698vRNLfsCwU4H",
  "key14": "2yxucsp8b8hrGEhZb1bEgvjSM5hhUQM5G7AwoyRFH4xRGtYhNQkPRmNrmHjod434GAag5AdUc9UM4wWFjgrayz71",
  "key15": "4nAJinZK3TwjrccgUjrYq4jDTbVVdhpBvfcdKnnnMixqxbqJtXYNeUjxLapVoe3Fp93Gsb3uybFaxo6WNkcgE8WX",
  "key16": "3Aavt2PmR4KhNtc9cYKZSyynqT8HqAfvXi2visKHa1TMuVzp5wamm778PdeZ1Ps1sbgTvVbAcr99kUTDfjcVQW1o",
  "key17": "4fP17Pd5KZYRxuVoTWhL4UMAdTTY8cZDbomap1EQdtkqruK9mWPqNN3opyQ1Bag6FEh6VnotPZjgb2JAwrKCo8cw",
  "key18": "2eNkki4zn5xEmvyZTvzUoFztQDoPn5k6PYxWMbaJf5e9hQVEoPHgTeBJoyA5Vwpk2gMh4NqdzNdquAwoKepqyaQZ",
  "key19": "3FWST2FAWQi5rr4YwffAQFNzF7tVCfpWLq5RB8H8yViRQds8Tj6MaathBQHryt9bxFcm4Ms3QXTYK78tp5XRoke3",
  "key20": "3jrT5spvjfRNCZ2p1vpSJPDtzcvg7BjWqbCbq8vEvxmDGTtr7VYjR5QXkHE8pZD49j76ED5wJTDbNTBrgzEaRQsw",
  "key21": "2VRn94NNiWJGx1qF4PdreC9f1pofaWpLp3BLGsvcRLCCLmjjjwz8DmB8PE9BoHZn7o2APdUyNcbJW3cZpKZFSbqQ",
  "key22": "2vsmTNxGEq6HDH9iP5fNA5MtbqqtZTVasJ2enaX5nCzaPTRf5xEygHqKqhT3NNiEFmfWdEdxnrSCzcXRkRWC3bqB",
  "key23": "42SzoyRNyGVunzwJwWywjgLre9icwjGt881h73diZjoCnUkHZtMxXhr9QnZwEGirYzfSHw14fjzBfo2ir7PJpU31",
  "key24": "4BLdJBB5JCaEXLsNvJ9mR39TLGbnmu6XnZs14a7PJoBBYKcmAYk6b8woQGYjdKgjPMRVvNQvGpvNeC1kUXTgnWAA",
  "key25": "4x6e2S3dnqjMV8z9AvZ45XqZswHEyMtCn68qfU5thtuDdGWwudDEdzQbJMX1NC1iwv2nsE1SgMeYNCERQ9J9X6mK",
  "key26": "57eJ35hhNRMHtdht32QgCXjraKcDWY5386YuJhJJFTnQ51gKm6mxhBe7f1nmW1tvub1oGv1oewWAmRkquoEUzYx4",
  "key27": "xXVVjaAh9YSaea4chjvD7q8VTt22w8ynx41kx5Bc5S28nidY5kgU7ZZXbdRD2qXT5JxnJfKBkSMLHmdYvhtZBaU",
  "key28": "3F4C9NnSndSMnL8TaSupyQvCGS4PihaV3AE7A8U6LKQFMeoDkfCspDizfZ72ywDmR18SPqRfmRkhQ79GarTa62pP",
  "key29": "2r36Uab43ATmaR1kNQ9c2DfjYtuxKMkGKpYtmxavQyxrnZUqjKn4pTAmjkF1GVUbhu25hiad761QWaxq4A8x3idx",
  "key30": "3JosCpzVBkJS14mY5LriDz7QhTVy1kRK88gBz7re314XuCax5CmooQfkww1Lum3YPYq7QYXvhXBxuHTQRP7qJCHt",
  "key31": "4d8Gp6RiBncsJUXimYGGb1QTaV44NrCWSHCx5a6SJpG9eV3kq5h9xDPZpAhB8yZQL1z2SwjLjmRom5KVZoNTfzmN",
  "key32": "RVPqLUsQWN5jMQ5FbuSNkotLdn2YvBbRDHw9y54Ho9YchkBQdM2esuZWFGYfrqq2KrtX1bCxZRvKhxAS5stDwN8",
  "key33": "2EBsFaeZ6zGaCBuam7WUKY2v5kmkR2quH46BUqHjcZe4tDFCnbxWGRnZxq3VrdGDcitxrHhJ2paFKv6JMw9g8Mq2",
  "key34": "Ui49LN5KcmJfe97qvQUr8P4fQfEcK2Mgx6rphEjGAXzxhPpnn3GQqFQJdQEEVHY7x7d9PWrFQj2zUhNCr6G9PzQ",
  "key35": "4FTqeoxnRaPqU4mmjvg5BJP15HLi7qaLS3N7orH6DcHaVf45U49sPaKNm7qtQ9UfdVyDBESh6cmkf8qDWYRXGEc7",
  "key36": "2ZSjffJTjbGoA1y6c1FnSt41XwQCFPyqw3E9ySd4kyWWzrMXjJcKo1zt5asdKBATYLB7iRH3u8EyuSrWqD1ASXYg",
  "key37": "5N8UrMPc7VzcEU55JV2EyyN4HRTYyUnxNABhUYjN7oSjasz3UD8iFxDHUsCgzsXHqSJkcWHKggWjHahDDZonjBZg",
  "key38": "4CsSBsThkhHvXBjG3Hxd7FuminwsrDdPuKAFDNr26DcB33NykH5A6TLybBbc2BfGfH1nztqcA8ofzWoSVeh1kHB",
  "key39": "41QpgPgd8ZeqDWSRFFdxp29GhwLD9WQEVEAdHKamLXdKU8yuXuJCoD39etH5zDb7vZyofkaLUX35BmtTufX6E9F1",
  "key40": "5Vgqs3NxaA8roG1zeWTbnhDmJyZ6TKJBuecaqo3oNBfV7CdH8akvviKNgB3YJezDaEahFua12efUKo4fmfV2en7M",
  "key41": "uMjyoMNx2SPyU87sy55UEX2CGALt4ets1K4XobCmgSGsWKSc4aYHnfdeGpc4qdDwWn34qF3VBG2F2jhdV3cqCzv",
  "key42": "2cmjUQ2if8M7QfnPha265AvbUY6smvFGaGLzQCeLue8pVh4G3geUVcXhbEPaV1saCgm1guemFtXYuEKuyawBD8ND",
  "key43": "dx7f7FTUmUnCpSVYjZetSZvUFhdNS25MZSg9yrsRAB8yHXEPfZeStYtVMimtNthP3VFcz3cv3djCotqg6zpkdPv",
  "key44": "TnwayAcw4HGKjtaJCGk71ysaqDbfs6JWseEoYLrc8GE2Gcgx8KxkpBS3mprxgHgXAP8c6X3HHGRfNymmwunLyUt",
  "key45": "4hGwhKkRu2bj3s4EcHYWUY4iHzu8SwCvMVM4rKHiRu5EXNzJ7mavbHrLNof6bNKdDBxWG9YU7xgfXYUWZqEhz7kn"
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
