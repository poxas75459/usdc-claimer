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
    "2oNnctmq8SL9VnBZG6Twh3eYqwktCUMLPj6ofQHmmtk5zzeoi9bMA3xzyT7AnhTXFaL3Pk4MRvh4GFhxwDyypRGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uVECJrsDLdWQuRQHyor8xS1h15PmqsA1KgsD6s5hRZJUeijaXLgv62zB3wX7YEJVZnbzSyRCoyusFV2BUWBZUNE",
  "key1": "3pgdNfiD3daBS3Dx6U3ipAsvZfnYD9pCsdbwu2ALGtKrdALzmAoZpZtXaF5ZxE9gMLc1FA24fc1nFt9SMjVw8c1h",
  "key2": "388CRaJqjRGoxfUTrpPt8St3ZC2zt7ftAa1HeyWqHBsdGZ9akyV5TM6ethSRTujzzyDGXEsUg3sLybDSCAt8y1xJ",
  "key3": "3qK3FmV4nnhzY1JDSvzzRufymaCPw15ubfWLFCCiCxQJpVLPi92suGbKKKiVcNxZqCsDoNUcFAm4ncRbfysepTaw",
  "key4": "47a75cvg1RiW8kqxWWMio7PercjsWPtqPuoHz6mgxwcLCmyYyENtFCAYcP4hh7PrvNyrXnUknkvu6skeKBhGRbtG",
  "key5": "4U49uM1bWFkqeRSFgQAmfhqetZHGGcwbxK67oSbHH3phvgU7NfGW3XCLFgKMydMw1Db8pLsVtm5WQWPv7wberrEr",
  "key6": "4mx2163VVY2wbV27EwNGm5p4briYULi2tr9cahTYpN35FiNn6snnvuBmR82T53jndnWmdtzHhaVXsn9Xc2UVjVB7",
  "key7": "3gYpkhMgyggiucFt2DAnmDmckCBcJ7fmmbT8oVBAjCKacH94tLTvWssktBonzP4RJUBpJFUTPjWDQpMBMmd27FPJ",
  "key8": "5PHcjsya1Zm7Gw5FPwa4Do7iUNngDhZE9Q1FFvRWwUW8869USqNQZHqu7gcU1MhbbP9Yu2tritRkVGf7U9wRLR7T",
  "key9": "2MEqmmMRGHT4yFvp81fbge89WA5LKaaMaMah2TrPBM9md9LsjMbwfSXXLmZn7xVJMbMX5W7b3WDsLaoWJkovXPWu",
  "key10": "3sk5DgNrnwfqesp7vxngtFMWUUrB4gVfeJaV2PBEbQUALX41VG4gw6msGCqDKVqr1RGjupxN5MsxVAnRpciunUzT",
  "key11": "5QDQRKRigW2qSFbgEzFHkvMERHYgFXAwy1WWrX1GbFWhmJX9prr18Sj5EXZ148uFMGjnG8mVFufuUh46khoJ3Dut",
  "key12": "5HPZFTCbh7Ff7KJpD9ea7YrTok3N7ivbgxdUCFueEzk7vwVbNUMWGtqzbaqE5hRERbJKXpS2NXYat1Gp4waHSyTw",
  "key13": "58Qz6KVQQBZbbXsAwPSj7CGyNkHxZQMY64ByfFJLdhT5p2QnEkXMCQ6bvN1KsasMGsgzzvggjLLX48ErTCmVkiwu",
  "key14": "5g6eP3ETyvX6ygegqANx24yapvSEBBi1pffGcows4GUo37zGoeMjLgC9TgkUnruDpiyhum7qYvoa7AXCCJMvfSmq",
  "key15": "3DibNe2KCaFgaFhowHHh7zd3jd72WFWHNmVzAN4EuDBdMXsCzxSfVsopdqpQyRAeFe34sZzkLkzZkfKB5dKVJEKn",
  "key16": "3FXvAwWd2BWX9NgENffv26Jhpng9YEgKfJZmXzLrbSrdNVrXvfkxGVtprx3hci1TNvJFAQGtEVmMLoeo9cEWc5bZ",
  "key17": "UQpm42CCBKk8TdcF6kZd7X32ad2VvgpSQiUxvAcr3x2bYG2XCCXYrztZaYEQDWWF9PCuEsyaUufPRDZywjYmUJP",
  "key18": "PRV9jD9ErK56aJ9SMAg2omGYZafV4S4uEDHrK9o3TyPxthTKhWGHq5VQHNAesg7tyWTCN7uwiqt3tYQdYRBJnSw",
  "key19": "48sJGB51ZwzGq79qpkZX53m5cx57GHxMupmwMQoAy9kBbJeRKSemcgEYWSohQwBft5xdFmvz3rVNDdn3RSN2JBdt",
  "key20": "5zPhXAqPFAmmxbR1PjvMoL22MTAEAaZeF1dd4zEPeUed9fjebsNYrigcVmNQAHkZw5sSPFga88sArMXazVk68NPV",
  "key21": "2ReUYaWGF1XpMLxnAj5xkGL7UzDpuTPFMUtCK7J4pu1wXM5YEgZYZudS4yYmC2FCu1czZNGhm5DdpsV4CTTXQ1gL",
  "key22": "5S1BHCc6UKuCjKFfeP3bi5D2FQFibxHt1nRG7L1socDH4noBpGfPXjwA2kT49PWv3yMRoDMWwgyRFkrdsRhxfJs8",
  "key23": "5y2crieVuVtEHdmqwmJgrPQdoyf9a1XHxpymoU7DFcFwd5KpGTXA18bC8B3cdRAQWevPuhDGaE2SMHJjGdGUgVKP",
  "key24": "RigM1rjZH4SCaTfnmbukdxoUzaf44YyqBKFmeqiZdv83xCoSqe8RBte84YEPg1ZxpE7uYKxsdv7S7dzbviEyfwB",
  "key25": "EH5QZLcU2ixTx8hVE7HKi8rVQGybqJbaFPJcowmvzb3rq6zv4wLvA89grWEpJtQQSUCYuXEFH4CzKoMs7MYxcYv",
  "key26": "2xt52BrMWBpodpw5D1Qiguz6gjytvZxd3c26MVuwcSZWqbKLTNZE54zGtPBBfoprhEpTRm6rKEESEkPivBgmJhTQ",
  "key27": "2j1FiGzY7FDiJSFd4AVhF46cCSt8tgZPmG9Q5TzKRXVJKz9mdYuwvgxXzARyov3c3P86iKeS1AAmkeFnyAyTgqx3",
  "key28": "4p2UcAG5qJTRvVToYayHWa61DvVVXBgcZTEjjLvkWF7HHhWdBBFgYxZYeHc4V2oo37AWKLtH5jKnf1sEnPWT6FDV",
  "key29": "2Xxjg77UZUyifEJsDSXMQZFBhNS2ihi9WamTaGza52Q4x7h5oNv7rjb3meagTg9NZ4aswspvTuuVWy7AKeMDame3",
  "key30": "5FpyX9Y4UTqvMH8kLhm6kGJLAWxgLLmQEy7MBptYEPBaFAVUA9jLhGL2uKXF3HuDVi2FEyGBUXQEnGFTqTSaSSo5",
  "key31": "5Jw9hx1acEZy8ktN2JEhLBTwq61wudGYJqbNwkewvvhx4HtcwrjhnBsKJwQStdnmJQVtPHfjr1EeM3cQV9maLivu",
  "key32": "62rt24PFhZE7b5xMrmsgWsKGr3WQoTAsayRkJRCdZTzWDfbZ6R1drjdV19if4rjZh9DfBP9SuoerejEY1TNiyEe3",
  "key33": "2bHzyRFSgayBaJyFc7XZoAziomqSk8wpoGogDH8LmDLvm3Hiv7hkHiKfAr2Jrkjet3ngsBe4AChNAeUDqriq9w4w",
  "key34": "2CUaCgL3vatFHsJYAgVymp4LgZLxGUDTHbyFvwm3bo8ESWgxjxPLatkDKhkodnj7Dd2eE87GC212wHQPLPorAmJQ",
  "key35": "44bnxxPMziUC2b3wckdFC5SPywfBrx4cUFrbFu3Sd4t5fHZprafH4ajNch92ghxnBBXFGyVotia7pzJ9stdjMCmc",
  "key36": "2nboEv5Lr294JmY4jZcucTKwhvNQp8kWs6EtM9vj4exrz77xfr9sVTBbHrCxvygaYz8kELC7HjZkwo9EGsFrVHkP"
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
