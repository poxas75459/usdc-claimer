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
    "2Dn91bRyY8X16MHJmKpRbSiCeKYWiprkVSbaS2HCsDgSLcjC6fv9113qeRKet1C7Vqd4ZLxGwtUkrziiJKoyhQ8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LydKersvn5ZajJdK1vKKqXDVvKdZkNRdi5iJgFfhHmC5yFxBXAiijf4fc9dHPCG8wQ9KvTmwe8htEBg8CEYfWUn",
  "key1": "31kBLdRCPJuVNbFCaUzyJxqd2whiBC6BPzst5u5ggn6jE8ecvjkVjwjQP4npC6mL575Hu4jJ76rawr9DMMcYC5Hb",
  "key2": "5cBEptGNkbAtetLUnUSrPkyvehXbVji3nRoVF2q5QJSoDo9FT7nRUge4seFSuFjm7pqV7JmDAXqjxw8aYH4bxAB",
  "key3": "3zA9CRtQRY7pJFC8xmh5opcTWSts9b5RYZz9kXtDNPvJqtKRHV4xYdfuprGFvZxY2bx9TEoxLuYqM6Z4gF3hrkBW",
  "key4": "4Gh18ipbnELH4AJ7W7XJ1W1r8hDx8aBXiJ9nx72a69khHjbBApLKpDUF1j4sC3r4Xze3yactmPSY4JYWZ3oUVwi1",
  "key5": "4Z5Q4oyJjpWQDsUP9i8yqWByfofRhk5rzJXLCX2H8kGqXDRt7fDJ76xrSAgdr7HnYHfVoyNCNQbdbzPZZzFQchGj",
  "key6": "5iJGyvRDhcTEH2Gk7xEzPuq4Hf5re9hy8fXBnkQi1W4fPzbfUVxcqkUYMXAWK3HDmkFWFvUT3uWGh4BF6eVyWHzF",
  "key7": "gY86Grk2gJ76M15PYzXrs72RZBmdinMCEqNQFQN6HoNuzM6m1onfVHmC2HCCR3RWzoRGhH2rgiBY8gjDxsr5Jpv",
  "key8": "4LJSYkYFQE45pH5cTCMA3czxjTeD1Mypxcq2D2j92LbCnk5fcmHETjQsu5XdirQ3VoFRe7pM34LTrXEVXcgvRZ5D",
  "key9": "2DyMcMmwStGU3irgtSaCjv4hftdGBZ77WK5iJTDZCcnpdr5rPasqo7Auw8j41yZ5hnEzNYWho76yjKvEqQDNdvJ2",
  "key10": "4ptHrs8oFzWdAy6kCfbTxveK75zaBkLo2B4ChMmq1HXdMrkoFZMqzx99QR9rZHj1d8kEVBKeshCYVeXyqjpJeU97",
  "key11": "4pHoEoeJMVwFvxvwVUjoZk82QfAnJv7M1GVoqTC7MuuD49F2MJnUifxmAE1ZLdRtDYYpkbampMH8BrrHPZZ3e3vW",
  "key12": "4aCiGodeU15t3JEt7tfjx8qko89mkUbZG7yYtbZPUGXptSRCNAXP2dJWCwQxCT6yLrGxUposBWSTokvSXpNQ6C3k",
  "key13": "3MnhywydYikPmKJuLgxeBzDaaqRsiQUCSqZAeGz7ekihbVgM62mCk58hsMAhDvCT8jVgCuriya1RoKJ2eJrwMddz",
  "key14": "rMYJf9mWBpChaZ4Br11xuzciCzMjQMtNPeYLD8xyEotpUTBA4j28v1t7tDQR1t9XKrnvoPmtSAyNhkuqhenYzL8",
  "key15": "3Po4mXnYwchUW1nNUzveqpNjHTLYqM1dvvS42GiFn3uUgwkRqHXfKF9YPNwPeED8oyn3ELiVwsskbSypZSXEBKXV",
  "key16": "H2ZXkm6esSJPNpqV9UDzHzaUwjZN8ZqQaRSyFMqzwTqnK46ixjzcg3AmzqucL8TUVDSymfjSeV8RPDiVyRugah7",
  "key17": "3ye8iWY3MQ91SwhFLy3FcAUWXREqs5pzhTzuLCHuqYUqtw3aAdjD3n2Te7or2REePJTXds9odBMiyoGwWTv88vP1",
  "key18": "c8gqemtF58jSufP9FjV3TA3AeMiPw3ZXz3ykKqbJp94iZ96JmN8NLjTgmpQGuxrg6ee6hkrDBAFkdUQiAHMJwmZ",
  "key19": "5sXhos1cp99T4xCnf8ir6WDwmeXzxuZub7oxPVf6VTQkjUt5gbrcaFGcmmwK8KyJ4nBHascBRy7YWWtaAqpa1Yok",
  "key20": "2YgvUi6vQzKsbwaYNd9YUSjGzVDhvfdtXwDP9F7e91hJRrai2MZsMeDSUCWGiS5HpX2XEnZR8uW78LPcjWWsZWG8",
  "key21": "gE8w5QgfK1vzUb8pz89rG9qjC1GjJGVV8KkXmaWTEyPU6kvA6bDQBtYNcWk9D471pD5Rbr4cKqsPqgNXrsDAdFv",
  "key22": "2K2EqdVwsSEPC22Dt1gnoSxrN5gKi2x2KkDG1QG56Q5PFLS5Yut39H8om8QBPbr1e912aFnqaRLzk1yWcobjU8e8",
  "key23": "63PSEYmgd9vEgiezLgQfFxTUipx8e3Yd9ng9VKHMuUEctNxqCoPPpojh7yHk5nnYF6dYU2NE4mhUxCoPK2NMAGC",
  "key24": "gA5teeZcqmFiYpGzSHwkv8YyNsBfZJPTxgAfNBRSJF7ZXH1cTokwXrix5bk5HGuuTYmNiicBa8z9VoyH49Qw1zB",
  "key25": "5PQVRm19sQpmF4PRMjf4QGnS2fUapeijucH8zBu4NDtkZfkPN6VBFRMhJPT4izxHgcFBRgCYqZiJhTDDhd1ZGLud",
  "key26": "2zJLc94gBLFSP6eDVWmkcjv5BPesdKWtfXjsNS7dWbBiu5mqTaBMyKQB7b4t8gyxbosiCG1EQCPcVvtgBDzK1ipC",
  "key27": "4fq3RU1Ef4yh2bZNzBQA3vx3HGveReVj21486edBby3uL8CBXG68D42buYhwmzySRBzZ1L94LSRUVnNrmF8U6KGL",
  "key28": "3cPYGooZDGso1qFMSGMss7GATyUV3ycreS3s4TmGESLePyzgMJpA3vVxoyzR8HvPZZff3KjXDiFHa55N9PSuBZ2r",
  "key29": "67N6jHiqyQkdosXEGD3TenCNxLK8FF3JGP2TMqZyyMjvSp1MMZLhLrpRVvs3NC4FQK9M2cLonQRLE7W3abRg1aSM",
  "key30": "47Y8v2fBfE56aGTfiDqPoYLmEuyfPY9gku3j4nsh8qYpahm1yA9PCovTNgf7Yb9RDe2dMahe7LfzPtaznisJHAcm",
  "key31": "ppfbYGCW3SZjHGfx2a3dmiKGKn3LzYxqZTg7kzvnirHYCXFg2H41n2NSCTydzpaqQsHbDjHdQwh9cbNzpvreW1j",
  "key32": "4Gr2DUdjFr2PBnDYhpPYfEK5jnnG6XscVBZwMjoWPeAmFxyXGKUxRkkrXB1EBNQonx7mjs16A9LFQD3xPdwZyg8a",
  "key33": "2kxH2YNfshCr5UKNspDJVEgsaWrwGnvc8aAFuqugyi1LW6Yu51n8sK7i9uKYpANro8s7hREAEns9kehjAeQ8dxKg",
  "key34": "5JVUVoQ6cjsr3oTfo28SGNLohYSrLTeNvqAcjMEX6cW6vznnQ8Cz6Y8CsaSqrPbCAfvg2TEAq8qAohySJXgVEb1c",
  "key35": "4EC7WzV8tUJKncS2k7w7szV88bWJG6q9A42Am8Fvu9je8JLKUVkEdk3vbx6gWYokUxBwr8ZxHZicNkYX5AfW5kvX",
  "key36": "5M2p4gmvRorH7WBb2SD5XqenUuTLWQAss8UKdf7c2EyJ2CgAPYmw4fsjNY3eaa3xvX3Ezf6S7dWaADrgtiuXAyHD",
  "key37": "4mambKtwWpBERYET43YQzKaPRtJKi8uH55niQhYfsL4KvtX2X2eSogTv31WTcPG4Wy3v9bxkuGdWRNXTYr1Q4433",
  "key38": "4RETtkShbWwQqmD7iyvT1XkyBJ2ceWoqjfZspmWgS2uGaqZSqvdEi11eFbitwRKc3qiX9eVNzG7WvdRCyYYmLcYy",
  "key39": "2FS5wYHXPRY6phDRVy5REGbjakDVCvpVSuTGWJG9PbtFed3Gjghe6FjbqcwTCMvzZ4YwQ1KrZZWRHA76bEs9vDmX",
  "key40": "EuJoYqCPtH2pR4oY85PiN3yix4RLWkWik8fzpvUdCzJRWJKtAJ29jT9ZiB86aW7Cm8gc1iwZqbbdFaQwoQFpJbh",
  "key41": "2qup6BP5sybVA6ZjfeXgTASSb59bzcfcM2FX9PKMQPx3jRNUbTrgyBAHB6N59EtBe535KUxzACBTabkjEibkCnBB",
  "key42": "2UzVqPm6ksbzbizbGUaCgeNkFgxakayU2YnCMqgGJHBbpdrnjzbk8WJp47hFaxtoP7BS4sPUvUN4o3tnG51Qd9a3",
  "key43": "4vB5kry59MGNUpmDF2nWvcJNgeLLsfXBPrXCMJxhMHeNcdLqwyao25xx6ca2p8rYZrzaLU3zQ13smmrtSEFcs6eg",
  "key44": "5JQKiwdT2RXmeUfvA2ftVkBRAU9RpnWkcGp8C9QGmuAjA3Tg2GH72Xsz5JiKpPaKJ4qWBEU8r1fdijVCACvAwHjW"
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
