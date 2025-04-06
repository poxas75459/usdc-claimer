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
    "5RZKrLTivxCVKXqUmJxUKZT95W6mBGnwtURxF8UnXM8gLj8qyPgcLczYsiuzwsWHpifbsxNPiJtAskxvFrM5PKZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pw13oaWXNtkciGygTSnjLjww9z4yjzcWxhrZhcjmxbBBkrjNcWJjDydPQQAPGTnoft8xeERuauaBEDgTMRQ6kYP",
  "key1": "GnEYrPcfaVJv3rYoTWqM9XpjBUCUS6ps11AX9hBUtbvU4ZyG2YgyTkDwX3KG2hiBDwKoRjDzRma6fCC9CoRPBNw",
  "key2": "2Gz3td2v8Hd1EhEcndZsoTEMKG9Ny1B9CXZAivYxZ5NovKMpZihUYgprPrj5t11zJPBEwjQJjLppmqApLs1drne6",
  "key3": "5s7aDbUtmq7ejTBoXtDnSDpFc7vdCvXhdnJgjjgBWgojcTKy228mmNdnVZYPDu89CN5TY5qX3UyfeBMnPPGLky68",
  "key4": "2RrWPEds5Micig2cnuEX99NBuX6sVzuruTGHFFwRNjGBrRBUo4UnhajqsUPFMRRRtgNmD5YPUgaJmt5M1Pfmxqc4",
  "key5": "5PeBBwHgMDubqD8Y9EBgYt4Tg6v5GCFcQiaqk3dF19LTBosMUBbu1NahxrzfRLYSjmaNCQ3BsCvQ238g2FMvNrjN",
  "key6": "2nDkB5LaK2kwaHywsRWJczWx9z18Kss8vrBAGHB6AWK61vHYefJwgfAWmc8RmpqLVbSbytR3ppvDmCoxAXA2oc8h",
  "key7": "3ojCBkssyf3BfHUf6xSMGNXtezo9i1KsiWJTHGMdteZS2A3zwsiWW5XP3crZahVHCPhSkvDgpf3B68n5ufaUfPLg",
  "key8": "2V1A6b2nXWT476RGxyUAbXWp49RtEsAySwG24eYK3kNvbE5aHyw7zkZAbyzuS15bXDBHo14manARvuZzLBmbFPSB",
  "key9": "3h6b3rVSooP45kKAAwsN63HWDRaK2ZS61vikoK7MbZVBgRwkE6i21JSpidMv7ReSFZTKQshURDoMWa2ncMb411fs",
  "key10": "39ZcgbkLPfpgJ64cnSYdXVbFohSmtfHhgixM2yePphPhCM73fckLLAcw9jnKEbTNkBfXL9iQaJJNemr7ghWNGe9b",
  "key11": "5YaqbusgJQZt2fp4f7dWzn7sZE3svaadbmNtGXKwjVzEnWFJiezi6Ta3xNrF3ciGLa2F68bfRc85yw3HcU4DVWc",
  "key12": "5YZV34GkSzRk91K7wLcWneGhdRy611iWHARcoQNiXcbN1DeNc7PQuSaDf3edB4ebUADumrEKw76ggjbEznRM6cR3",
  "key13": "3KbcFA6GaitshBmTE97TVHakZPZBgZwk6d74TyyuLXhwCWqt4tQo9kPyBKjGCH5wPPEQLozujtNZqDkX8kGfsK8V",
  "key14": "5eouasGKgGLiHn83sLY4Z3Q6PsFJM5DZiqT63MwodsXY5bRS5KXvi4EvMT2kaBZnU8fosiEqK5rT8zoUvMLVWLrv",
  "key15": "4stfyn2F7ohzSBeL5DCtkKentxs2JEsz2VfZVFTGdStvdB8SADoiTrsRj4z9sqh9aVB2tijKXccTUG2MzAmtc9oW",
  "key16": "rtE2uiVngqVpvziMyP6dfVzLJn1LMVevrUhwepMnk933KNEdnsrPCeTe65syqceNBVJ3KnwNiBDChF5ahxzV4Pq",
  "key17": "29r6XWHjZV69XAF2MrJbzKkwZd5PLk1V8BT3vRzZjJorxqvAwKHbj42cvkdy3ozmNkzZ78VAGiNMgxzXwDQbPLot",
  "key18": "5THWhD4RCHUagwqTpyzpdBdMF7QvieVdHrfWaG5JQim2AHBDe9uEF57Qb7ZtJnZJ22zQYGFVudye2Y1S7i2Sj4SM",
  "key19": "2e6V7Bczeat3sErz9VeV4s8xqYDS4hV2GJtoSj8KAneheDrG9txVPkwW1vWcdPBkioX2aDRi3fBZ7ogbhVU3spc5",
  "key20": "3bzjzjqSLRaKWJuS9npg8pkJhHCDm6mGJe7YGCLiE3JbkDut8AahmohWt7zpXk6tMtCVQjV4hk3B13o6gKsc2jah",
  "key21": "2gjDeUSaDebSqt3qAG57S7gU5D7uWwjhQ44rf2eE6t5HwRDiY581FHz7nxoy37Ey6uK4op214W999yguNzpgpP5d",
  "key22": "MHWm8bDWErQNKmwK9EN2nAi4NxahBMsAwgE9VK7gcPFA6ZB8uKAgyLhuQand5cQiT3w3Cn1BtchuFW9Lvcdh8Dc",
  "key23": "4vS96FW6omuoyCRed2SrfzvWS23CBaJVwjUbTSBFPgao2FTkq1pNQqX9Uq32UVmqsqJ3mKHSYrjpNnZPKwJsCojH",
  "key24": "3ZEEyCk53Sv9MfsP2e2CgpQubfDqHY1ofHjwyFGZWazrFgxXVntqZMmDS3ybvzLzLriusJu8Nw6y8Yck15e2Ce1d",
  "key25": "3aTRPELYzz8Foo2WUwgHkZgaArFJc1QzafBbWNVkVJzjY2kVipg7eVPhBsqe1jCt4YcDzDZ5Bd3vw37pHQi5r4Sh",
  "key26": "2rJu3vvZoxqijjreQgc5Pu3xwPMYo3FZpSJrFBcqxMrnCHPkUnkbf1oXrn95xyJMwaMceWqnh83q5HZpZEtVSxeg",
  "key27": "4NZFtviGEMCRXTUEN8iDngio7esdTMtqjEqcR6SvzfdHKDjPkUNRABoDA9Tfb5FsDQEctHhsEKnpxZwDRw7Rp4FX",
  "key28": "3M24Rx5VdP9J9xngfwRdNffQdGSFjsJgxXLY2h7FnLHg23Up6dvMq4Hk7Ww5BPLxAhQTc5YpoXNZ6uVYn2JcKiDm",
  "key29": "4FNZLYB2G6zqAt9DjkZ53tmFvpet3vu5ZRV7VreJ3QqwTjQvrUmXJKqWDcbWkD8NCgW7tJKz2PdU1axrgHzstFa5",
  "key30": "21mccCnBXbPCtJhhHNhr2H42pjgwU5izFZyuz9VZr1g2JYNPZMZoZUigdbHD6i916XC2B87hSaYpGhffmZ9EVUQ5",
  "key31": "5kJ9xF9uaRnERuPZq2S7dbKo5zMhZ4pcPV6HRWNGVVTr7x7wPKfyYsN9XNTsez1NJLbi2mn3AMnrAkxF7kPFVtVP",
  "key32": "3qHfPQhPtqmWXV4LYrJtihgGDqReYLsamuE5AXa3ZcEPMdPqR8rngHRMqd1CnY7qFi9ZiFGncyEaDYphzdPo7tNp",
  "key33": "QqEepmbm1QLYNHxvxoYRXfPmgG1vtn6V6TZQse7yD7CxuB2dXMaS3Bc1K5uadnuZpRx8XrqKx1rRfbsgcckV8Ht",
  "key34": "5GmE62yRMtqGyHPwKguYUQzFgSnJxtDmFisRU4PywoDgGWqsi5XwoKsW7BajnhrWZUdS11nLFVxu2BTZ7YjCd6h5"
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
