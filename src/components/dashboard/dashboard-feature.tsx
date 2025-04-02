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
    "3f9dDTD3Sfbm41aoHyifPGZDbVKLPQ8DAwpaiYYadmyeWLc8QP4gAM6g5F4RoqKo3StKXKFktVEEdh4VUUfjJp2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aj49J9o7gzJeEQVPEHjaMcmp5siTQ6emLbfyGss475G5wLqco57Rh2RjKxFJAn79a7ozxrnQuXGib5AFCdMjqF2",
  "key1": "Qq2aW1KW9uXoUJoiSvAD27sLhqoLc56XQHWvhr6QaUJC1E7zA2DicjLbTpmkE6b8WN1jS9XqzQXxYtb3GyXKzvm",
  "key2": "9twiunXt3NC57rwWhypyS9YHRSL5GEThbiPd9ZbMEaVgf4TgNf5RFYwHnKeJSQz92N9aX6pf51WD1yPyEeQZJ83",
  "key3": "2csntzKbQ6UuB3AXjWeVEH42dpzbRouL76C1NN6AuFyou3txPftw7BPYHnfZ1PiMa5rmQrzmmgDSHVaNAnSY5DiR",
  "key4": "24yh43D4opm3qLjb2qh9piUPS8ruug8h7TG7uuErgZqsywDPTVPUuEp7TCQF2WffT1EQaZ1ooQHrmp68YqtNwypg",
  "key5": "tqNmvtw96iLiiughq6oTN16tAe8bt6AphHnJdKf5qzAnyqSm7dERdvfsh9qRXHSpQnH1ogwoFJ6hVCVBDFsUfzF",
  "key6": "4mA8aNnxJum81fKBT8uznbmLAojEiaQRHjactYwCrkUxppoB44M13hneGxG8N5wUiKHSuQrkJGbX2ugKGnGa6feL",
  "key7": "3PkE7ECerbQvQpWoFcMr4dtejfWgdEp5LrjK9GYHuenTQKzRHzjhAkVauEuYfay6BQvCykydsSpXhgoHDHziuBk4",
  "key8": "2dFGWgNu4NQKmm4WfzwEXGYBQouc1TsT82sgYcy5u9vn77nNxWvW6Gd4wGfqChx2cMWVgd3WgQKSWjXVjvgi18SY",
  "key9": "463j2zu3PxFwwMXbwZZyszDLnUTRRmF6JyrQGXXT9QZn8Ux2WPzdswVY8V6fXK4S73NoWvPfTTVG2EAhCeKyq2iV",
  "key10": "cFvZmJdHsVkk5UU5RD7YknBpkNp5JA1bm7nQGss5VyaD7EvFUZAJng8sFhmtDfMcVnPEfDnN1zGQZwJ2DHUgDgM",
  "key11": "iQWd9k4rFSjASKdFdAaw8mBu7BFukunKpA6KCMMXEzFGAhGyM1NuJGKgWrwoC3AW8mW88LjkNpi5pfzAAojaQrG",
  "key12": "5kHZowgjcieoT4qQLdQtMFfbyxgLuqEgbYNvmrM74XwLURuUjtnWegkESDrovtmDusyvWE5yxWZcdRD8HfEfTDBh",
  "key13": "5i4e8sspiH8aDzy28wUM5RFxEx6r6HNgx1ZJHWd5oDoCU2NrPdm1LTzFuVqVsgQNDLkSskqF8h67KsB9gs8YE4FE",
  "key14": "2KXyEycAvZBcFVPFKVU5qiBoR2yD5aGo3qHw1vSEE2cwgjLxJMtF6LgMvqCqK5Jwea2foBGCxfMqoMLS8YJPdXS",
  "key15": "5syt29B26cWnJe6yQumy1v2ug666MbfYP9X5HLsW8T6VH1MPCPJnPRHnJFsQyou8ybCzz4eeedSeySprF8aXSnex",
  "key16": "5Z8Ran1NgxKt2iLP9USXHu5vxzpfqjdJGGaxSLcq7oNomkWpqNozzXuWEgKaBSzPU6hi1kfBXGCkJNTquYaUUv1F",
  "key17": "4iSML3cQ4HuABXDpzoYLNRzeP5q1kmBgCYJHf5ujVFXKsyvMVhUNQJE9hSh8uLyKDv5wF3oJ9KRswDz8865YaE5T",
  "key18": "5xTMk6hv1SBUTpAPu631HBzRpvg4sr1R84TqJdvbWAeQMey9VMtocW86BMgAhZvT7LQkfx2UQLSXxCW548xm51a3",
  "key19": "4TYWHe9Pv8piCLcMSnMxZ59PnRt55XfTfjkTidgEJj97XGNzsGCLZAgQPRm58Du4ot4NrEmAYMjs8ZUs1PaxkiS5",
  "key20": "4fDGy7LE9xyksd11NizGggY9PhyNR3CPHqBTuTdbYoJTcJSShs9haj1krwAKA6H7FPNh7vD4JaNYQshkWK1xf3xH",
  "key21": "2hSkcRzRiQDuWeWNmqxjh1tA6L4UZjn9MTT81RBuAassQRhs581mWdnouHfuCE1VsJGdXfMT5L2c4Fc23eiJppTW",
  "key22": "FGjDF1DV5nwYe2r35oFjmziBSfeeMWtE3vcFaEvEiQ55uLavcDzfSp886XHEftxa2HvsEgTt4n2cZiLYqpAtVLX",
  "key23": "3nF5SzZraYSiSSiVkhc7jFaRhTjiGmY39i19Lyry6YmyzHX4rQupG5iE8FRRbZEq2Lvyd4XZEN4NLFFzCxYCpMcv",
  "key24": "CTvuF6pmuUv4JKSM6YWGsNTyeg3y3T92V3by2rdWPx2VByPxVaAyrCdSK6dtSnue4MZWxnLyWRivuqU4AaSHjGD",
  "key25": "24Pp7YKR21ShSxJyoM6SNyTLbCZkKJbu6eZbdsTaRtDRatvBepi4dnWkGwstLqdEaprjdiZ8GH6aC9Xx6T6ujjD2",
  "key26": "5Ss492arisXidnaLiC3q5FXAg8cStSfiDDJ41xTvXthc5gNwZ5dGpBSRUF5EH2buSr24HFkZryRySAt7QP4R3WRF",
  "key27": "3vUQnbDLJrBH9BJ5ku1Zi9Zg5itG7Q3SeZkmp1W2NfHHkvhqMjPmDVJQPrUY1AnMCZopVRQ5VThxJLSBV2Q3Hipn",
  "key28": "2YbQuRWoQqJy5SDZ4jmQFXDXpChK66kA4yz1JZuZU1TN7gtDzCrBgv9d9WswTL4XCkXdJ4DSqWzMPzCygs8LLaR",
  "key29": "31ZZTAC1Nq4gWL2WT3z484p85BeLRBDmavJJHQsf9aL54CBxdaeekUtWHHtEcCzofsyrNRaTYsgfPeV9WNZZtzge",
  "key30": "3UifQit7WbML2PXZD45zw3q5E5eFctjXxTWQLWqquXqSvr3DzywMcMN57u2YssWNhBuRT8PzYGYyZYwr5XK1AViq",
  "key31": "oDBqLXuuWBmEhensTg1BjxJwq4RtoWdquMAoF728nnttyysDRpeEEW4yqziAdu2qk6veFF88mmnmfnxKka43aGy",
  "key32": "67FFMuEstt7394BTA4x3rTbL3yB4o3627zqoN4f1okhDRBf9zyAbK5WF2K24kXajt9EVU4uxPzS6TR8ZwbwwEiw5",
  "key33": "47Vn6PNXVQ5kuyMTHhL2r3vfmUDKboFyiEB4Wb29bh1zL7F55TZqwnXvbVEgDNhkjtuwngJX1dcW3awJKAnrCtQK",
  "key34": "5febgbpQTjS5ayJNa6mqsyejF4TAJns73bHNJJpbBpwC423pTV7FH2seZRYrd4L328wxw146mniQWa4Q8qrfY1VM",
  "key35": "gkTVSsy8QnGHAWxFveSfytMKEhSZsVrdgesJaon6SuGrp2so8XA2MNBDvGHonHfQjUvzWsnieBvUiM3h9VVs1fu",
  "key36": "TR4pEc89Du6vkVSGtjvQZnciQEtwdkmfNjJbXFSKmq3krHHSPDwSTHs2PhPEvh16CwK9zz7TznoHiNadu6reacL",
  "key37": "2o1nmXRU7Epgi96FKQYf651NfMK5yPEgrcqwC8LtqTFyHn4bYiAC3NN6Bm3BPQnUDQTqSd9WSWK6PssD77tdm2AZ"
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
