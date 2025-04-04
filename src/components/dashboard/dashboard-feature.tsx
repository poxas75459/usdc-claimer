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
    "2DL5Pv7PakE4j7uxSXchbnQEUBLS5r4wUJavsd15iCTdx1Jav19Zf5Gfs2zvLE1eAfYEfC124kxHiCfRqwkpo6a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cFnarA1c78CzraJeyfaDSKj5RGVvu7ztLdQpouD5mgASDF1d4JfYZDsM1TUuDbzSfEWSnSnTzMtMnpi5EnRzgk9",
  "key1": "5bwFxALpxV7zTiad7tgcGTf3ACyKEm3szSkhErdrbqppiAMeBe8kXGw7Hc2XboL9QapE8391nZxmPTk7b6oAkQ6k",
  "key2": "4wwM1NrTxBQHawUKj8E2veFW3U77mzE5DtmEqYhxV9aS1kK5fjfVN9mexCSWs3Bz69d5Gm6UaS1g8B7sAmwKZ1PS",
  "key3": "wrk79Hvf9GjTxyUDp3UXnkxbRBasHXcRqE9SrKEBoyN8RABcYNFGr3FNNbNEDB9mXverstUfN4SC379GqN9y9sQ",
  "key4": "3AmfQWCun9zwzVs4fSRfJBprDLjYdwmNxZm6HCq7sQXLQymc7SFsPDKe79aKAw21WDC4ehnJsZVT3HgUcpFTsPni",
  "key5": "2oZQVt9DEfhtHfkMA4mdhJsbFyb1dhCApLhade5J6aNjAy71g7TiBbEKKTtCXZXbqCmubKjWNN2zvHNu9iAUZmyj",
  "key6": "3LKT9WrzqULmqSXbhG9DKkRZDFJSWKYooshWtUVSaSjpN9S9fNSNx792aTT8ZUQhq4uY17LVE85iNf7rVDzBS4qw",
  "key7": "3MYMgbeakVre3f1Sfpb5tfVA7hXnHunG4wsProF3iywAnApBgb49A3PD4VKd5Vi6TNiE1vAzfgTdZ6eMcaoAzg5P",
  "key8": "29NbR6S5TCDqH5PLpub9iBVEf6z7p8X64i4rsgoHyk2ynDH4veTwErwE5GeFS5hP61RvRucjuaYQ5HNagdZFV7uF",
  "key9": "zwvU6jDUvwaASjAJCbNpu5Uz8orctY3Yzrg5s5uCyYCadsHcL9bt4kZhYmCfet7kryU7TYGR8dB6kWMzfnwXU4J",
  "key10": "5My5tH8NVSeFAc91j9tVV8Qt1YmTicP1Gkjvu6CvWPvWLVNwNfMUo2AWwYAFw5VmBk6DQ5sqvUX5z6KVx7yLgxhd",
  "key11": "5tUFxpu44NHNypJujudXDfUhhgzu3ZTbiSbqgPdeoohmzTViSPZm9Lc7G32bGjfUFPzeZZ57Fsoj8AJVKE6cRSKA",
  "key12": "4qRFkhVuFT9cmMyfqNkpmmWovUcKt2BLM9YjVnQ1EUqiH42qENBWoMY4UHreNqz9Z1WqaAB76eX485LAzqXnSEqk",
  "key13": "hM7kZyApK2PXUtuC7YHUys3BHmhjYR12aSZ9VJ2VCnas9mkGjHr1SWKqNJHZAfr7g7Q2YvT7cwMj9WLtfLEXjzp",
  "key14": "2rsmyjeGFWG5N43bCebwnxwgmd2hg1fwL9vWg9CrkW5tjtiCcf5Ky3QFjEc35Z2GQGCmDx498XanwyUDxDyaZukx",
  "key15": "NrXUXgFX1p67BKHLDTigNeT89Nzz6bgK3JGuHhixkDcphXB3HjVaW3VSBJK6fgBjT5W36rZ7fcJUYF2XmLjsEf5",
  "key16": "2R2RcZFzUo32ETyGnygmwbUHXX83aHZrp5P4NFQJto4X4ohM2TyhBiYpr5wrBNUiZoihmaFbtQUGYY5NEtL7Yr5j",
  "key17": "33D72j6xuxW3F8kK6PRTnZiyUVNirhECRSHDAYD8boTEaexyoYfVUNiYwXjAS9VpgSzcMfdnv4SyV9f4d6XuE4KH",
  "key18": "5Z4UgrtjLGUgJLjE2NPJkAUbEoC9Rsi41hWLibajuwoBs99yMoc7DqkvzpgS5dv5t22Jjtef46NLyNrjLMs7xpCe",
  "key19": "4V8v7W5pzDbHJmztcG3WEQGEqApaeUVCYXZVu3GKadtH6TRXj1CL9vCStSqLnrjqbZCY9H5dnN4PiCNpMGK1gWjE",
  "key20": "RNYhWpmqgcHjKhCNuTAUSdHi6h6BMznoPe4tZBmWQ1f6Su3PmS4t62athc667vi9grugHLYyRPzBzpCz2dGgAdZ",
  "key21": "53w9rtwuJv6sYi4u1tagB19mbUMMSUWNcLoFW4fvJTHdzDvXw78HZqpKBEtQyQJfHtSP9kLv4MpguETMmrANRVDr",
  "key22": "t6PVqRAFexMRrZz6ufSKr17h6xt23npvpVvn5TKp6jmGesMbXnHSQVchoTQ3qPUUNZc25VM9GoRVpHSj7FmVWxZ",
  "key23": "2D72ePy5MVJKfbTUYL95N9B5Ge3m8mZPUSgbuKmc7ZkAMEZT5dYdFWoLLV5HZ49Rq7pJiPWGUpN7Q6BL6ujJM8JG",
  "key24": "5JvfTpF6kcWdaK6Lrp7AeCtehZUPxquePvx3XMMuFjw1myMagibnzDDq5gNWeQmKDFPncx8QxN73fAzKU7qRJnhW",
  "key25": "3QBJnig3XSjqHxgetVtLMuZDu3RmD9HRWUmXXxjcWvAKxkZjz5qSHZNs3CFRou1WHq3vUfbgtCuUmMcmvq6ddgSv",
  "key26": "JrMLAJg7S8sqqHKywyGrqHMktcSSE5peV5EascjeaoTThHwRCtsqGQ6RdrHYjyH7yjoCaWtjV9YVhdQ36FNHSWz",
  "key27": "4MinJajT1ccLT483TiWipTsbAFEgqeDb3ovcqJFwMYKgVwfmfjMjAP3fWwTBwUJFbLBN3tpf6pLhcYTvRqbnKug6",
  "key28": "3yzbPH288dRXsuEzmRsCa357AdzJK2W3zwojcWkeR4uYsZoBJWwhorpfeduAFwiz9BWdQzVSzPR5AkZYsdW1hZi6",
  "key29": "2cCFRQeEiJfdXevZ8Vk6VDGuJHnS7QRg6wobn1jXjjEDwvSAX6ERKMNTKbK9WM2n4KBzx8NUH1EXSGMcKMM6GrP9",
  "key30": "2SY8NM64cJvX3JuTV7atAwAX8PKEup9RJsgM8prS1F1jM24iVqVhVCokN3BFmG4mG4kLghLKXkipEcHqHoePdXu2",
  "key31": "32pDbHpgz556iVEE1t82geX6dvDR1T7XJCoH5H9xPZbvEV1ZqawmSBm4rvDsLXDjf9VAXEXzgnZUc9kMgXieNnzx",
  "key32": "2P1BkdpE2Q889CbRhzPJXzQnNFsHUSe9rBf1e1dRbDy1akfJFsM6wKWmvAC5M51YujdG2hLLc1NyNjiNXe3dvkNc",
  "key33": "5En6go6H7CXVHRbhcZfSgaQ1ynHW3tCcRfWa5aHo85x9ndpCuq2nZMSBvfU8qnRzuYrdbycrkS9XLreBEvxb7HDW",
  "key34": "5e27BonCLWpsvZqwHeVqgvkQ5Du5mPFQQSYjND8aezW8yR22jKPQbP1dffQ6MjyYCVbvxZjMzVQ9oHCdCeao9RuN",
  "key35": "2YTHG4dkoHaTYwvET3gUBjmtCpzviBCmWf9Tm5jN7AiffvGR8CHAThERNHEFLjmsbZXFTbjisF7ZrQhv9y49x15T",
  "key36": "tNqLBk3yruyst93iDtnFX7MhrqK5WHFXGd73yXT3iqP1iM6davHasfh5LseVMjE6ViUBvfVtBoch99VRaesusu5",
  "key37": "KyR763no9cHfo76XiMcLKiUroSy1n9k56uLpc2SEvfXpN5rfzKci958kSJWH6nhZceeRmFyQNWskhSfNQx6rDja",
  "key38": "292dFCwtHmrr5KCS5KfM2RqyNaMfcYmz1UwvuA5WwXATjXQ7W5DbCtVv8g2i3T2AwEY9nZRLAVByATrKd6tbREZk",
  "key39": "E8J75KLrJQDNpJa2PBE2VcjTNYVrgkXZo8jDN1McsTpoKwoAmd3uDQEKzUiEUkM39CbmHnH1TEEHMRhXtE9kU29",
  "key40": "5nF79fr1SoaTjUwdqNGCVcYdweo4zNrqCjU2VwaGGyj5RbD8EhvuVgAHouqFekicowAGFyh8nVYy5XNEzhoNntBb",
  "key41": "5AmYj9xwNiYNdqyEwxUKaBwUbSyya6M9Veqn5bCCMxKnpsz1bLRYe2rypJi9jwmEoLpHZKiJWtLdp7XApdPXjfX5",
  "key42": "YTXF6rF8ZbMpUaxVCStDMXqUrxopwZd5XQmJ2YE9nU8rxQ3PPLREsYrRmSP8eLjKdkud5mWkziDxAdt9dMXrCdJ",
  "key43": "4di49amZ2tvWa6XrpqxvACwD3BuSQKooG3WNESiHkzqL9t4m4rc2WFmSLZWHtrA6SjPzFMqUVWC4RGVxYaFW6Sie",
  "key44": "3hBGhEqN8jJB5Pq7AU9vcDirsfS8P2k95yJdj56UNEMNeKa5nMzkTzCSshhAgcRwsBBQeZ8GaGxXwFEjqS2HXehg"
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
