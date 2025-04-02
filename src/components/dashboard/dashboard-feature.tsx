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
    "5J18FADanr61zmxEgAVqkC3mSndhpewLnFdtcLv1bCPF3uuiYp929ChHw3seDze9FzFfK3koBiFV1fnaBguLMsBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7tiNdE22iUZSVJkdMa22a9aGg62WCYQ9wMQvdyWKWdPR4Yw5APoRBtG34jvvqMhhyZK2tQLuE1srUcu3SCzDCS",
  "key1": "3MwcxwzojifzDgVecGyyqcoQsisv6abLSShp9q9SoGdQWZAaddfa881bNsAEHJTegFjxacxBSHNWocJzSyTXNLsn",
  "key2": "4tQHQaWyHH3SSJrmRoQHCzoL1WyhNS2qAxThxFtLL9dk4PR52qXH8izQEozHMzRZ5zjJLo4mKTvDsaTNwk1CYrB8",
  "key3": "5zgGrTbgot6B9zTCQFZPJFRCG3aXhDAxppN5CY5aiCKCDBwMiweozo1Q6pYeofC8VUapYvZQgsDTBSQ1Beq9HDMa",
  "key4": "3zsNPDLGwgGMaTcJXTjVT5WVsXM1x9n481Usu1NQx8UP6sRCEMTWD36aURZ1M7xxsfMt6S5VFwE9cvx43R8NoXwY",
  "key5": "3QxTW2uVncExcm6MFaC6mGU1HLHviChc3AYMotSF9pq7H3zpFq5ARNyGdArjcVAQ2H4ePRe54rLuCAe6XNHQtLqZ",
  "key6": "23Wcq1xQSaX7ptCGsWFzb3zCiBF4vctYU8X7QYWxWNH7th9nJyB8KjQyxEt1oQsL1ks5LUkhUEeS6NGqJ7V7v61c",
  "key7": "gyxsVBzQrNDDVfw5iDUmsv5hKXDuUgtSGoyfVaN4fJMqHd8cVFttpZzaUhGPot3DM7HsJbWGpRktPqhLQXojRXh",
  "key8": "5H4AjCGHrRWPSwWa2sp69Cs8RY3oaSd6WoJMXcGCur8AUh3MbXALGqWLnYvN7xCWMTxGntt6rKrcd5fXyDb3pny1",
  "key9": "3c1rZbcAgwcF1CWgH6W9y4G8ZKsg7XvoxdJZY69RegTFmVmTXaxj8DP1janHzUfJDVu5Znk8GWm4suE2Cefd7Bxe",
  "key10": "8gpvnqbx4Mhrg242DXYpwobfrgBE1jdbXYAMtWA1hT5n6CYW79Zb9ikTdQk9LvbWTFyaik43YkrjPRHEuQkLXpS",
  "key11": "5beZR1unuaxBEBUnwxj3oNxzva8WCrwK7SB6pQTA58CxybMdtMKPoG4HLZSkcQoijYPKAgLxZH1roD2dhrRcyhLZ",
  "key12": "3GEkD8YiGHCKRVe7gZqwiqQc9Rb3ftWZK8egeQTg9Hv6Awr9jMgxfKFjFdpvE14CEV6EYMX49Uzmjok7zWDb1TXk",
  "key13": "5f1sJGJ5ceRYz1fZ5rqC6oec1NwAZ8LdZT1aT8NjKgivYMk8E3tTZFhsfinHtc1qSaofxCP95A7534JE5A3hThWy",
  "key14": "4QMUP25jdRsJjUVZYoB3VmZZ4umArCqpG4xVz2KAQZDCzmiWJciaHCcQQSJ5MYADg5SKwJNky71uUQHwVG6FLQiq",
  "key15": "C1LxoMMCyUgRqbBM9mWTHvJ3VHnMfGPEXmyvHgqQTpJKq8wgz9D8n1qaNRpsAE8JcBtTkpW7Qb8nzDQSePznCvU",
  "key16": "TmqTXmNGAnE5yCdMgQB6WiZpaGDvMbEtCp33iKHKKf8mawNA3Asz2aYR4WezubSyZfJSwEAN5kqDtXRujQcRHQv",
  "key17": "62t9wsQhnKhPJvcb1ApJ73xFkzAQncJoGuB4UdXT3iCCxpKsTYS3oU1jmXry5Bu8qh2ez1rWGegBzxo4RBCRQdyv",
  "key18": "2GCbPYBsuxgGcJRYVtfD1UeSbeoemd4nq3aaV4tauB2TLduH82qMzYFYUUmHheiUd1E3MDFfiU3eXd1aCh6x62Ts",
  "key19": "2ky2s8BpTR15xg5aXDQrb7j851MQUfw29JqRF48KBP6ZidkAE786btAxreikXY5pXPRvpu46qt5DsbsXoPbdcksf",
  "key20": "2EfbkJoou15VvDq3C9auGiYwVGTZhfYVzSBPT8mrr24FdDZrmGkcySjXGgf8dgYu4DZCSLA6jUho7V48tKTqYYan",
  "key21": "n8dz5PShFmrAWThQwUCr6GjV8DEAh7h4ZT1V4FHojzET4gfF6kavMYe6j7yw6pehrBrFaZzKKnVo9zLV8PNNBXq",
  "key22": "22z7vjP9nmctjt29ntRgBpbQ8FGXQQFh1yks8gEgFRRp6MLzPUA78v9gi4XxR1nYNK7kn6VCpLyby18tXhJXGGai",
  "key23": "DsJZVPkUqEb1HarEg2AsXohFaFtcVRxTx4AdQGbM1xD8AQQTWjL1HA5Uy9PiMXjaThiJ8dGuVYi2CQetkeaAagW",
  "key24": "3QSGDqigGtVEbGifQ3YExJ7GDDWCKyZdQ5QYfxxvbL8g2W5soSZ6v3KXimNvZHfuCpHsa1vhEGhKWyEnjRDgo8RT",
  "key25": "5HprrxprjS9LoeTZ7KTKuZQsxrpGKyx7K3XTeSjr9ArLEFEkJceEEpF6Pmqf5R34Y64H8oQzi3A2dJLanpphMExR",
  "key26": "3vKoQwrnnyxSnig14MpdnNdJ5xhMpFQoSKRQ5AgEWkbDSLxNZRga1GtHHi6M8hcEjdkH4wLgAjwUeKywc6bTFnaj",
  "key27": "3jkn5bxVgg9tHwUWuTpnj4jAy5Nh53QHK3VzgVhA6VRgRaZn1NREcpzQ7Sm7ngWNHKTTtjmdKAyqUxa5P6Harvkz",
  "key28": "1yVVfNUPbDGLMVTK2LGt97HFXPFAgTpHDxRd1je2c2AArnTGQUxwwWbAWfPzaTrCjXxnSit5fM6QCJPwo6WNorr",
  "key29": "4CjTzJUWsaBBk9wgXQAo6fp7nUNn1GN5wrjZWAqs7fbQdhwsJxSySQ5FzGAL71DhkseUrmWRC2JtNHVhmt8bdNcY",
  "key30": "y4stqt3hNz4vSREpsuz5u3kdiY4Bd8bMh36VVqu19urX9GWi8v18iEkKF2eEGV9yQpttPT6dQZ1rQEz8jP9fNvS",
  "key31": "53MZ82KGK5u6JYmdhABTQKZEJPLDHBEq2pA47zwEu5wrzjEoRX5W4Y9SLwXmZVEUJzZZNS9quWt6ThbyXKC9kQsC",
  "key32": "ekq8pioUrEqKnGwPyYmFXup9ybLaCHbFYdQC25V59q7czFj7enzNWZYTR3oL8ZadroUYJ3r7xhu43VrVZaMMecx",
  "key33": "4Yh2Zx5EugcukdFT6ytk1SQLdv8gitVwDecaZoq22qrF7gCUrf9pHUSG1jRVwQoDs6yH4183VnzuPEQ5WZuQHSJB",
  "key34": "414cJuid3zVza8hAu1eX9maKvRcPud9MRxbuQ4yHCExEp4kcQseTA35jv74NBLetzuzPPewWaxhKUCnC6sLRJa1w",
  "key35": "Qckk9gh17L3RUAH4k6jzQLZ1e1PxThcMBCpHFxUqXz2Q2birk6uqPPRc9N7UuAPS2r21dsz5TNhEn2LAc24KS5j",
  "key36": "3GrbUH6NA5xfTwoRnUE7Y9q52ArF1XXHBinX3hNePqfwyabrTEcpEkw72BJnqZErr1tqYTPSXw6MhUdZwUa6SLWz",
  "key37": "3Pmh2WqKw33DJkAECeDwiUM98MUmzYHAmvZDF2jTQNKLoDwNJdhKQy42kzcFvDkG2Z9yESNGkw6yvAJHdAL5gKBL",
  "key38": "2hpxhr9qYzDVkXX8FAxjatLE7pfrdg1DV2ZLnrMRfV2av5dF2j7AV83ygdqGZSYN8NtfWUNjetQVAKKxmSkbso4s",
  "key39": "35iZdZZTuTPD9NhbL1txwN3tAi6JX1sqctnL2gjPBFhswFKT7odBZtJSrLMiBVpHUxfv9fy6hi94X3PGQbuTXrd1",
  "key40": "3meWWGEgpFpvQwkjLAU58uiipSkU28Eeoks66Yre6Y8oPLw7HHJEurFr7h2stbvehFnNxwSN1gXuDDgPgXcZUhyx",
  "key41": "5iiKk6wKNDdwrEd2BcCJkNjV6DkR38nTy9au81WNc38ERLx4XifR4Dc9c4qCihxXFSEARxwK4ekh4oa9Rg5wo4uk",
  "key42": "4ua1eVeYZz74Rkwa67Wt4ZKPuuDnNuwuukYtLC66n3wncB2buNuFTbhkgcZLVBshuNaPexhCBiHYnjUjZMV9suMt"
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
