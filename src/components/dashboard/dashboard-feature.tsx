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
    "3yaFDTS1SGJrZAmNeiLSPCdMwDq52g6G12BSKdUyjCtvC51HMLLoMLKUzXHqvpF8YzPfWToEwQHoTxSaWYz6JAfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpbCD2Q6yb9Mq2xz5sAE3BtqQQHMx2kZPb1csTUxSv73TYBQ25yjQHCPsYyXwDX1G97PWhRPuEV4XdpJNmbZQKF",
  "key1": "4z5XEbRzA86yvPFx2aCEmodbjoJ9xSknPoWQBvSQXJrLJ4TpuXizTqns5hTk9jZb9CcZJ2BfQUPsAEk4zYpfpFKL",
  "key2": "5AtChCezPNRRLgDjifuGGtK3ZXF3BA6ewWscAzGhLaqXNDVZwd6H8CAsT23yWwe4qAoubsQ28CdAaneuodM6UrnL",
  "key3": "WhUDDa6oN3x7jeSZA9dgCJRvQ8DHYkUt3KbuskrYzB4KV6sWfArh5UaaNfChcZeHdCN8bRcaQ1zCotsr5vQyjZF",
  "key4": "4M8K7nCpgHGHKj169JJUi4wBKHdwkuZdLYiF11JjaNTRBW9cxoLdgRoFEH3RefxR3cy9jzX9rdDaZfnT9stHzUs7",
  "key5": "3jq5xwigJwCgZYQyFrQPeo8M2NGAaY6WA9sLyxMmEdqEBJmkB5GwsWb6GZgx4iA4vPfafFkrYwfiSuqf624UZ3vj",
  "key6": "3HCcZDAMjFBM7s1pQmyCiZkvQrcxxbdX1rjztZc6pna7DkNyXY24UfNUPb5eRAkJxbUwFsDDUNDcuHq2aaLv7qem",
  "key7": "38Ch9YnqtcA1btr5dJqEc9rqvUAXykZJUXGyY9dQyLVtAEgYoXbRsdrEQHGHnrXvgBKBS4PCXgnXPbGtMNY6wuDm",
  "key8": "3P8tLeiqDLZcqgsjngFJbDBacncMKi7vtJaXPRaYHF1J8RfvRa18SscuQzW74o8tKxreQEqo1XW1xL97qL5ieDuP",
  "key9": "5vfFmqGnyf5osXNUoDkqTWLn8AKbpjTgcEDNewfwNfbNK2YVYjvszcSh4hZ3A5JcK4Lc9iWYCRB3sd7BhrhnEP5r",
  "key10": "4jW9tqEobtxYAE81Vp5Sd6UiAuMSDLH4RQe7KcY5QSSs5bvWNWBymMmQyEpzh3RrzbfAQkzXKCSX5zVDPpUE34XM",
  "key11": "imh3eqXBkTwLTmvoRri9kp54UZG9goAYonRkMHvvCWLVzQpAw7MmBYNiRXyRvwgNDcaM2Ho9eosFAWwYQWvcR6W",
  "key12": "54GrKQ4NR5Lvzk3R3q24XutzZQPfsntqrzNzmUEZQEfWNrQ1iBoVPG8yTcfLs863DepoFazf9xXYjzTGn4FFXjo2",
  "key13": "4keQ6fFEEUYmF7ApaKKqM8UHpLnP5ax3XP4syskuzTQABaUpE2hsewzE78LWFPg5MkMB9MbyNczcjgzyDG2qLUp8",
  "key14": "3p1F88KPFTYmrJx4AuyeySqBMYqusZLNrmhVi1DG7DiAMh2UsWEN8qe79d4SqyDfWPxK6u4gZfWtP58HaWEVZHLj",
  "key15": "5TCpNmrbtUXFTqg7PTLEf2tjUv3uoxZJ6ZW1urDkB9UaqQTLnDx3rozw1oMQGmfqMtEAWmfgS8mX89GS4oVgodGc",
  "key16": "2kxrtssuApJ3THJQzuYkzZYHcKwLsKQSQ5bL7K8r5ypZSCW3Ug5FYQPyw8qAHrEZ9AjAxyfa5NXqPqNKkxeDKBUa",
  "key17": "2TMSrZfBxRytiP3qSAoYoiL5Ag4HpBPcEBR81kzeGE7EEZGRftciJBs2T9gQFrpC6FLStUsv4PjHeDAzKTWCyLrm",
  "key18": "2MaPuYsEoypiz8nDDFMUPuwLrC2SdxbnZywEweVBc6sXJDrmvm9QXk7K8vbr5wtZNb8ERT6JrSmptQkg7qRsvro",
  "key19": "3sC25ec1TJp6pnr5XSVKHrjnjwcRRZiobuA2dtf4b8h25D1XpMHME7ccTZFPUV5QqzqJodnRyURA7X8QPxVhTASd",
  "key20": "51rf3pAAq43sWa5MFRowfTSYr3HBjcQKnuxCFk8XE6gyiHMcaLfMg6tgZXPHtYAzAY8ebZgaGqi66XztiuH8gL6x",
  "key21": "2wXWLNLWAeidTP8ZpDM8wnv2oDPY4jfUK1aSuRigRoP6DyeyYaRdv4rjoUfboc4cWc8Cb674tWUGeGg4KfE2vkrA",
  "key22": "2sNNUuSAHEX75msPkB8cxRxE61h2fEB1AsrkAoQoK3XFpvNauKAmVAcooQbNRwT3LXkeo2mVZBG4kLbAambG4oUE",
  "key23": "QKR1YHP51NYDgSb7xaqNBi1K5gYcwTTqKW4BfnGENEAqDj13wUHtpadQGxqyN8ecVTuHWsWbR21Kx27ZCymcb84",
  "key24": "4nuMY6LcerqFWLyHCThWkkSmKNwGyjzWHMvjK9rPf7G5JBmWXAxq5KGRkPTH59vFD1FVHq5kw1bkbr4WokavKoRQ",
  "key25": "44riZVy6gSP8h6kJrFX7pcPnzEHzMQ1Y5JuXx9ehFfxFjNcQfgMSc4Bm96snpwgVXAi1x6DdoH915HQUtgyeExuD",
  "key26": "cZHwFzf7uRZMJ7vcBuBjDw3goAsCnoJBHSxoiNVaG1nA2w9AyJibnwr8rqnv71CqabG3a8f9f1oWB2joBmQHwin",
  "key27": "4FZ7RYadzNq9RQaMUiND6qMoYbXFq2HEhgLVqiK28Kp7LDMXaF3DtmbNDopCEgVTL94akVXt7rqkCAWTerAhyyzo",
  "key28": "5Lcc3Mnb2Bi9qM7DwGjkjNGeRuAqdVF7FjYUhTxnxsWDcXwytTyrzKCoLZgCP5hFdB6CGUTSXLmhws5gjQTeQTAk",
  "key29": "2zqbLCb436vCFmBW3oUouxsRHtKHadqYu9tKEDRywqQ8jttQHfhyP7VFviGUdGaqJ6N3b7UUQK29YWk56WXi5PAf",
  "key30": "3oKGL7e1RgmjpJggCEuefTfeUVzUvRq3eXMWEhw8DoXM3VfXTMrKAVSqi18Eo7nR7E87HtvqDVYoxXNkYhEmFMkw",
  "key31": "k29VEtAj5JZ7juzihwPrS3JWXks9ox6wAbLQjrfUXFkJdYSTvKmK8E8Yeaj1AUfyFV17M8QY6VyPCQ1aMnC4CUE",
  "key32": "3uBwATWGF34gxZMx3Xnvzid7fehp4dLNP5mTRQHH5ta8bX9Jf4wJEu752hPZyNXyrBPQGCNBRDBhfTBaarkeF1jD",
  "key33": "ezKv9saD2oKESsqmgXn2zArm7GeT7WTigKeMffnEUh1UgGQHq1Qs6id8j6XbrPkNtNbJbwQZQRdzhMRYRrEy8gu",
  "key34": "3Ht7tw8BPviJH1q2UKPzHMjiRPP6TLkYnBkgfR72AbMd3xcq519dZinJmwTTVVVH2RDn7R2cHMo27bRRXahcgqP7",
  "key35": "2qWKaXYnJ6edVeFcbfiLa7VzEaSpdocdf4LgqZ2pDtsmLJqStjYdDdJ8Poq9hbb32XYzKEApn2AN3Sz7YhsFu2Yf",
  "key36": "2Kn6iyCMoRn4EYXLrWWFqQuNjJ76Fcgxs8a54q5wWtNZjfAxDTF2KtmJYnkU5Jf55npixyYHUtwZuADH7PJEUz9C",
  "key37": "2ZSjkoExqfGwYsnThvxvhRwV3dSF82XKNapJNTJqyaXNPXGPYjnJbBbCkoqokEoPS9LBrXvHERzTFEs1XiCAsfoD",
  "key38": "4JEiXpYdUHcr6t5Mz73RRKJtwGq3AzgFseFiEfg9pYVBKb3cQdaZm7KZaGZYMXgQVW67UQwMKL14gm72sKcRD1dj",
  "key39": "4jzBuLbjWLU4kTpazHVKHcDqQqqgtHGn4NFDnBFQW6YnMgRYLRvHyG8z9Hnbq6xr8PzbQbpa96KB1eGQPwhHKRMb",
  "key40": "5U1XXCYVdav2ZJGkZ6CjGFz2nyUanHB3zPPnCewRSSQSW5Cy1iimtsSWQutLMXB9BevxjKA1XYXnnq54aJSEC9A",
  "key41": "2PkohCbS5Hf9tQVfctBjrupfa7DJbebigJs9omZgZCS3h2XTXtabB5cj92nfyZ74hFhB3QrC5m1L2aeeHRBdA4AP",
  "key42": "239QHbNw3YYaEHozKCuDZ2iMtn2Khx4PE3cwXtWnbzmkjVz3f1bmSVBLMMudzbTzisBYuhc4EHhV6YVcpFmEVYJj",
  "key43": "5i3Pkh6aJ5PACFgxfYV3s4Jjs2ZY5opx4y7Kvz92jXAnyVep7pNdBDYWaGF9Px4GN89yqLbiUSfTK3kC8zdoNrDt",
  "key44": "23vGU938oxhmjdcGzTtswXCZhpDDMA6ChY3Tdo8X513k1sYXczsAUsuqB6yE78Qjb7gMUPXYp4an2ZvaCiVJsvao",
  "key45": "3keNMLj4xQ8vXRigwAHA3vWRDnYzSBvV3FxHWseCVZ8oA8C28F7uuKfNzGsLQwECdT3CesdhembhtR89HJenYLis"
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
