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
    "nQcgPnG373JQk4Xo4LhrYAETkCWktJv3fRAe7cSJYmAF1pJihs5ipSQtP5iwGqrrWqnq94ZiVqcLnNpH32Wq2xE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgexEaVicZzLw2GabBoQZUce4zLviPohvUNTbZ76C4LBSMt12ade9wGTL1h8hXpTcjnFzQ9CW1fnH84b3VjwTAK",
  "key1": "nL7vLT5WGU49TVR2BSi6vmNzj2kbLkM51jr77QwwjmfPysnBqGHs3aaZwwd5AgUB5msBvVjc7TK834pSAha3QQY",
  "key2": "85sdzwFZiWjaSpw2v6xgDguC8mcECCoBVmhe6opp33gUfSKwXAQBzNMEUg9oZ4zepFZ9Ug6vYbSfJ1TuY5T7YDM",
  "key3": "5qNN2VvvVbowC8Wtgsxm3Z8PEtWpc8HRSduoTG9LufbRgdXhGgV615uFeUSnZug15rK5582KUQ8eyVQqfv7rqH8N",
  "key4": "4BGvfsA2oSQz1KBjcyvtDzDBGtT7WAHptHq6Yme5WBUscnNn4mEFcyrzFmZrks1ycmxfqYnbsy7BnMVRbxdYMViV",
  "key5": "39zDihurA2wFpTN4wJoSgaW2JN4LQuB2caAFFoCmgzFTPdvUwbrKgPKwnyxg3qkhg7wqTHx3z5t1McDR3dwZP2Bg",
  "key6": "3fsbNT8RuF6DK8mPsLfHiocopMcPkqKXN7D4NFBwfARkkJ3i53sfBibqsm5W5zxUHxGFS8XeVFYKkzH8hztfSq5z",
  "key7": "5r9JEFwfpUL99bEX2VpYQtJLzRB6fTjKKpQcwJyXqrFoHMaXuG7RHv5AfBfuj7wrd9vTCpmpGHWVuHyEAjNpaK2t",
  "key8": "55piHVDyvVBh2DwkrUeumwnFaXL9x3H3Ju1NRbz3qWPGNiYk1xr4dy7jGqh4TD9qYLQTzDbUE5Zm6uMhWqg3fWk5",
  "key9": "3NdrHPdUjZbLh2FT2sYNEwdTCVaytSWKtae9bsnXF1bHSxjZBBktEK4E1QLoGFPoQHQmsKFY63HEUNnyPQbYrhE",
  "key10": "5aCR9mVcZrhxE1xSNFR3bbd357P34uEWhxtsBW7Yv4nCJdpVPowLW88LCnJySKzsNcr9h9axVvssXRjFjP3p9b7d",
  "key11": "4FhnTTTeqAxdtPTuGSXfXCwNAep7tKY8CnYnuq1ZppbZ9PCnNQC32gEat2dFJ2cLot4cLsTFQ8ny77Bo4N1BLfNM",
  "key12": "53BUXJExsAGSMJuwzTxozVh87BpryXm4QZX3vyufzFTMXG3LdAM2NPcyypzKWUUkMyDcotiQgYXJVyP1WdSGuJok",
  "key13": "4hycF5ZHCcHyGC6PnzMkLvREj3abPxY4WcPiSYJ2oLNgLRjYrvkAgZ3dmUfd72SvNARdJujVDUGjGHZirfMsQw5n",
  "key14": "41SFcLat8LUjLM88WnD7CTLLZtUrx4A3sBbCXiGy4XMP2GbzVZRPnGHkVnWjhPicHptfXVZhry1Hz7SErgCVhKht",
  "key15": "322ytXXy4UfoshnkWU26s1nCNKJP4Y6CBuHSNPG6jCN5Hm89XPSeDw8HoFDPq1fYM2CPznwrMWanNEmL8wGjpnDs",
  "key16": "5NgzZ82VPLU23P8m9AoAVUrLvZjfBcEsZushJtXuy572eBYAdXLhChxQaz4CU1mHbA1TR7YfwFzXF2eq5teRh2M7",
  "key17": "26qvDdXtU7BHoxyY8f2juLSoictamPk5U96zPy6T1u1qJ9FzHRHiDB22vgGPHgD5RPpZ6ADGvmSPna4cdo6zpB7n",
  "key18": "5Z6AYvgtPEsZmuQxT5gf5wEPWXnhQJAf3RqnhUd3KXEHx1nPFrEtFYZ1VsDJJ9zveudd1dKo7jJMYZ92yABiP4GR",
  "key19": "9v2tpYHPgYjGCE4wMuK8q1LiqFY99bvwg6KwBAtAmQS28i2TpgmnTWjfNV18Ze9WQgRMu3mhybRWHwoaomxHpTp",
  "key20": "4tS5JxMY1HMqu29sv6cz8c64SvrnuaB6q9eFkpjZbKYRyW9ndG9rimE24Hx7xgw44bx6ikiZkgqEvcygviaEXwrW",
  "key21": "63YEX5PYT9DLZyJoRzfK9PmLq4MnWyLeS32zGkMpFcKR5cFdqTnyo5tyKu7ayn5sFwZfQmLcMw5JgRDHTsERM19K",
  "key22": "5TyQ2LgAE2beuktXpQFB9JMBYBLcKHUjHYMX3hWMkfN5T7e8KHFLDNjTsbztTVfTiLEAnygMm3JncrgqHiQ9umeZ",
  "key23": "4k1k2bizKePiLH8Zd6pV6qLJxMU4HQL5TgCycBihJCVahwAeiJf9jKU4DbsxhyDoovjLg4iLow8bpiYj4rnTbz3m",
  "key24": "3qVKv5mS9GoVg8Q6gMTfFLY3UzPXpvfdmsMqT3yt88JFK13rm6kuN7qpMWfVThatadNyYijqc6sNHtuqGcS3uBgL",
  "key25": "4sabtgFocnL36DNgQQkGqhSZ7pjq497zDhQD1R5B84zuVG1dGUuXuetfkL7jCHuzksAfQ2xggGP27BrtGAN3qpRc",
  "key26": "3MUnisUt4BJGUTisYaPqZgZWFUYMQpgGnF2j8T7ewpSUMTLGsjvUf1JuuXv2jzpVuXUxf9oVrGPhyLkUHnECqvXt",
  "key27": "41wq9Phy9HUUoiVKPg9L6XHwHtsQGhpd3BCJP3yNvVhnyG3Bm2JB9j4dSir1ozT8CmEM2Gmf6vYiEBjJrXEwFCny",
  "key28": "53EtXkHrhndGq7yvTGBqynBnxbWvgZSqnyzHkg2hQg8tLMMtmJx3yvL1cbveo5JhcYKjbPFcKaFLDbZUSJb721Cg",
  "key29": "4Jp8QY946Ckj7L2MekCpGBeQWfnvLTCoJ8qXFoqnMfa8wETbzUB4cnWJ8iUgvz4VkwWesehx9aZGU716uwLoQ4C1",
  "key30": "Rn33XUR8BwNftgqphgywvWXtvqNfj8xHnxYD6cAN1LidpgcjUB1K5pMBwtQLVPpCqz5iGua9RhJruwao1TkKfeV",
  "key31": "45sBgEev8LYb7H1NAHCVKorELEvRNruK3VquKW62fxyANQQLi1QxM3ZHXisCvprj5mMr6dLya4PwUQUfHqxBwyzL",
  "key32": "2G8bZrNPBMhThQf6msBRjbbj63Hm7tSEQG6GRSpsknLgJzEw2zM8hT7qn667oukmHwBvj77AtT6uKeijT7mer1hq",
  "key33": "2TzAKgZKQgyc54y9Nqpgf2wdX9PyVFvSGCXXUuWdAdJNEY8G9Dbs746wj84Mbto8bzvRoQdhBvSnm1Kx3TB85r2N",
  "key34": "5f7Wh3tNLKnwDnLTr4HH1WEEKdGeC7Wm9dxWy89GSo7UTTF1edhEYNRVhqfGKBqzryg8dmNdRDfpK3GPR9GEggX2",
  "key35": "5yM2dPzadiouytfHhhfNbmVA7qfeYE9WsTxygbQZTM3FPVXAUXt3N6mnTfZCbQfQsBRsV5SSyav38T8E1HpMHc8t"
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
