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
    "31GAEn4qfx9iv19i6d9GEtwYhv64P4TbgSirJZoot7Ha4NSPK9Juzj65gbwirWCQyKPHMR8e9WJeAPH69S8XjBGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgEhRk3qWdX9AY1dXeJi6nAUi2UmjtqMuZp61f6AiiL8uATU4MQ77ddbMejze21dGF4pfcs68pM6nzrHnF9tEkV",
  "key1": "5Z8kRc2J7vaSMsLDVdaNaB48kpYqumEDo5mZNg52aS6mS6odgSWfxd6PSzcNi6QK5JjBDDJvPvEEM8tHPGmxA8AC",
  "key2": "4mP4UdyXqbVyEgxAXDHS2ekrf9AZbDwbeGqTX555E4e2gKjxh52puts3FJioJGmmXFGcvn8yDqfyaURgchbGwtTo",
  "key3": "3Dbm7Xam14VP27LtNmR7P9Fz2PCVKxmXeQ1G84vNBG581goBPtDFv1dFjCWietWQPBEdYnxzsqi67ECkGiJhURCo",
  "key4": "2wWg8GYMTGnVA4XpXJ1min1Wb853SZepRfc9YHgZ3A7vQXRwaYh9rEvxdDjBbUGbvoutQMoPbDr9fnSQBVG6oLPz",
  "key5": "5Kj12zyhrj1vqmv94Wa1529eSng7mAhxmfXnk8zk2r8HRVH3HHBCRQJrNMA8ajT8yywFcRuuMFntjFeHYMaUULiq",
  "key6": "3cTdVN1C7SC1A5Y4eGVnhBktapHU39GVkCW6RzWPvPA5rYNQ4e7nUQG897jtPdKxH9B3caLbZHgseUsweCxtLioW",
  "key7": "JRo1a42b1Ro6fdPQhLvdybrWUqAB3mXv6z7yFVa35emkadzMAiMWTa5BKdUE7od7ib2Akn4a2W32A3fSRAJDG1b",
  "key8": "5fkKKxaao7YbTVUxqDYYuSZkRorrDdjsBNxo85rKNH3eXdPB44bhNKqaP23AnxUDoYRaoBYHSX7Yj6rzwLHF1m7J",
  "key9": "5mDdWjp5deyzschphcJ6j5jpXx29z1Z4kT3yLLMREQSUfwAqJwoKYVEbQautc4x551Pk2Y4LY84CY7XmSMyzNJTe",
  "key10": "2opNYRFU8mwP6YhFef3BTFUY6yZD1vfhd3jjnfb5rYBpxzfydZb6s4uTtufLG3yyvKSZBzzdAZcoZPv3WYpdN8xo",
  "key11": "3PKXk6JVaToNHYHJrHFtrmeueXAMumx4Rpveg7j2Em9y8gNNQyCB9sfLH9ZEtJaxWCupHzyKfir6NE8B49ztwq6j",
  "key12": "4WvKPEAr5AummDTcLCQJtFLb8dSKkkzLAwZrF7j84tEvJv65AU3bQaqsvgpcK13ivdyW78sXx6BzUERYwbveJkFF",
  "key13": "52GrP69mEhRRuBrsh49hfcmcsonFBUaZHh9btb4SGQboKxRbZtbJFFsQTsYLUkT2vh5JsVppwwnPxJ3RPcmsZa2P",
  "key14": "cy6WVYtN7mDuG2rYEDyMXY9mTTF3aZWZwpUpJbCvcbsizBRDfnKawt184KQvHSPP7iqmeXUqdXGV6by9mpwLd37",
  "key15": "5pBuriXbU5aKvFgfG6oNXZ7EhAsmtQLjZfnhC3pmXLJYMZ7zTSPRVdR6VhPgzkeUMBr1tvM6DfVps5YBiRFfUhEZ",
  "key16": "4jq4SJnucCDX47BuiUzVS5C8b1LSjcuQ6AL9pUGVcHLUKd91oSQ2e2qs6w8QdZqAH3nc6HPvcEhnkCrzvSWaBtd9",
  "key17": "5rQfi4bJbFnGvuoXh8aFCtJjDhpGqUzHHDxemCeFYxFKGNW2yZsruVVXAo185ZddYG74TGg3Jqbi245wgiX6nuSy",
  "key18": "3NSzh9Gm9jzGSGYSTxhFFR9wmgPmRQgLhcepZMgWzb2ZTnsWaj11QZjkLGEneaH979E38PhNAp5jPQggAVUEHhzD",
  "key19": "5bwr8UmmMsCNYaB7FfU6fcRbcnuLSzMnXpi5uubDJYdJujqwVsYtDsgJfi247hmXQ7V9JkritXzidmCcDgkhtUbJ",
  "key20": "64ukZDbq7winhZ5YUwxSeTzBRaoHAc926ZQvebTuBQ2KLG9rPRarEEU6JSzTAe1RvYAduQgZ3zaFmAVqyymLxwH4",
  "key21": "3bkjspP2V2yxHNLfzbddzuH4tRk4ZcRTGtQBymKcxkMNqhewH1osAXa3TsKWSz5yZMZtPGKdgnZ3JXJu9ySSLHRZ",
  "key22": "3AXL9PTKPWo3Zqt2teh2gGKpEmauwnDADskFfbqUnHYoiMjwEW9uykDMF4eRjMUhh5oUrHxkEhBm8Dx4v4QvJLsL",
  "key23": "4PnCnoTGoh8kJJxUGHJceNiGLKt7m2Fu25kXSwGUfe5gQtL75NnWuS4Ztco2WAK3UVMbwze9Ptn5z5HMbokqjpeB",
  "key24": "3vPeRfQZMDvxVqBW1tir8BY1LPbgpwoqNTPobMjhVVTaGKYuz5zMgtUmR2VcLw3erE6snMptT749QeMqPPXdGceK",
  "key25": "CA1oHHaEkTJ4gJE9owax8J6phE91Bpr6d8nuRtNaBHy7PWbTTEZbfUpQSPSBN3uQkPsUSvyZWaSCQNTf3Grc4X8",
  "key26": "3iuV4ctvvET4RXPbFeHADC98tuJAtSaoWVUgfrYj7zDNciN2XWRS2s5gijkgj4NydnqK9KP5SDoCGMkkVjEV2t64",
  "key27": "5Rs97dVzEfn4S7GFH3bjK8Vv9hh5NaEuvq9g5idDJcKMKJTgSE5kW7DTTYT8Jrt5vvmtQq5ZBYuUq1WrtunuF39t",
  "key28": "4YVxtva6BWi47ZRVMjzZob9rzZUFD9A7DPJwtn5gdZP1J8GXqLvtFs5kLQhLCYRUoiq4EGZRw6Hv52AAP6W8Exa1",
  "key29": "2TA1mSggv8iaVvG6tVYV7f8mejJ1ujxE3A6UQBn2ownaTMSpEFm86fatbEMhmDpr4Dw11ctjxD4bve1VxhnFdD12",
  "key30": "4adFNyVZZGGw5MW3kdV4B4y1p3w9sZiVU6xa9514XSJsAX1w3rBTtWumqXAHNJMatZjSbbzWv7PG2ADiBwpp2PLU",
  "key31": "2WGc6Ce3NEhxWwCvsFRp8gW8Acn419WVzUbDez32PJhqmZiPWCQqRfpp1oPNow629MyUmeCivDA7mNMo3RXMnqdb",
  "key32": "3mch7tqSwokdJLpBFqTXstMGrg6BmARGNa87M6yNVxU7AM9KxEkWtD9msNWvXR6x3pi5gM848R232Qn7K91dMZ36",
  "key33": "2pJ65QrMWpyvR81RTBaCtG7RvLajDAzZL7wSEXpqkyhMa7Y6CHC27dS49sc4V193aefTNqt7gqiakvMzsYgHydVb",
  "key34": "5yKzy4WbcESoiETFPyKpjKB9seAKVkcsxg3NJ2zy4mPvgGrv4NAeCDoGR1c7vJ5GcW6NBswuciynzx4LTsSmxkdW",
  "key35": "4apJSnHomiTzWbBLcGsVzURTgXRUDQCoUNu1eYK6tSjESDsDCVHw3ZuYQ9rRrQJeCmZSaBNgFxaaRpyLc82KXymv",
  "key36": "5g3KyjMEXJv4nEADpAqm5bDx8mJ24anoBZEaoUVvZGXD2X59C2ND272sgexXvq9h8kBdR2eJNPLwMBSLAK5ZnKuG",
  "key37": "5h33j8rcpWDcHe2D8v6vWiZ6zLhUBGAmn1bCauujiWfdW14bzu7XB961rqHMfarLHg1Hz9dTNfaUjpGdyPKLdakq",
  "key38": "3TN228v2dYw2JC3Roi921JxqGEt8NqmwkBCzF2EhCjGK8EpGNqr4gKPUF7GmRYXqyP8at46ugz9vfQAB2M5UCGgC",
  "key39": "5t1epCyrvRYQvdXDcdEiXjNcKeKJS9J6e9hg5y58psXdMm8N2bnMmcPdHiAsSAqB32LQxPNdBJvnmow8ZJ62rJq6",
  "key40": "4xrGMxTk7vKcnjMpe9re5DhzBifSPnNLR5twsG4eXrC6BfEY5cHP3BFxawTdM4H3kmydun9Df48xjLRrhyt8jGXe",
  "key41": "2Cx8esipZFhBXn3vZgZWWMhi8hJfzmzrJvZZ9X1FRWFH3oxBVSECbh5wYReDwhP559E6rowX2Ld5Wr1KL8TjtT1m"
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
