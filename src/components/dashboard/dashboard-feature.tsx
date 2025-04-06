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
    "5rc8idsDEq9D13LqwtyVU7cJhtLvMNgc4bUjy83esmsZaxUbeWjdxn67BczEB9gpt4AQghvbKLpA4ppov75yHu3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Z1CVFdzdskkhzgG9AdWtKGgtCQ6B6rpBQYdpEMyYBQviPBcn3LkLYLBCCXJz1cPfiU17N3GyRqbbq4NJFue4dk",
  "key1": "5aCJT7o3rHEQLkyEhr2gxdg7DmErPnBMGXmTy746dnq6dWQnhp3VnFXZ1osbgNvGpeqso3U9PJzyro5ULSjHNqKQ",
  "key2": "sfRCXJWMBpwedDJrwGkLua4dk998iKH6VauB3QZWgm6LxUnbLxUZvJr9pohKYE6EkSaH5Zd7jS35YdXXzL2WrK1",
  "key3": "616xWCPttS5jjZeaPgerWBgcRySrxnXkXBmkpXAbW5apJ9uaue7SU6w5g6d4v9risEqohDQ9K4gu2njoSXHmgxDB",
  "key4": "3eAggheHcSWxR7RC5BT2kFmRBQGrpy6cRPDgFud96NgnTaCiW5wWyQUJy36uddrojK4DvT2jXJ2GHAhN563EcnBn",
  "key5": "4PS7g6etGYcfoDoe6p7gE6e7qNVQG9X4Q9hT15krr13ULYdEQpggaN7zLbYSomsSUZW75gw1ToPC5seUtqfm5HtJ",
  "key6": "4QgsEbu9vPJqQs8Fup6URQzF2vRTLiPjY4cfQkegJKPo6uZg2BX9QGoAbMAnZ2b8xckZqe96YhKSQovfusQPosWZ",
  "key7": "4rBYkNX23s4jM5RV42ewm9RZagynzeaAwxgU4qaXAuoBTax3MH39iqFGFMNpDFT3PSXJujYR39mpKqMxH8bLGEbQ",
  "key8": "2BrrEmEbsMaB2GoemKaoJ5PGwvYSeaUBigGrWt1nDWEjVXxNa7WCtHZdkoSYtU7L6NcziGyufmpivhv4USxguR1h",
  "key9": "4PFmrrHSkHGKLU8PCJmHWydhdnZ73fPXsyPa7obb1DvvDMpRKUMXKmycXhiV17s1JaCfjMTgGMqFcsQW3GEGKtjM",
  "key10": "4myk8C9fmeSRm4BpQsmBoPpaFFfoAcyqKUV2vcU1azn2nQPUSKczby2ikGyYnTKE8PJ3wdxwHBu4grmyWc8sXWiB",
  "key11": "5BxcynihkDiZKeRC7FNP5TLkoivzBgtDA8LgJ6dwZQiX1VJuyoohoWeZmbz1dvnS3h3i318YYpgTSuDZKpwu1vhx",
  "key12": "3whBY56R87kSsq77JBwJjJkeNCckfmXvB9zfD3qH8heomCTDDJxs9RUfVvKCxekcQY2EA43GePhSY7xR1ihUHByQ",
  "key13": "43rL1PJvftbAVvKNY4FNJVdAi8swfFWe1e75XJ4Xkx695xPLEg5zHmHFJVhn96GFgKUvytf3sTbPb2rwrDrq7Eut",
  "key14": "5JbfgotxChvk33FE8bx8VuhVvHYaQv56Rr9JTh51Sr5EaWUheh3aig3YfoHCe9n3oxhAh7QkUUGX5gQ3yLg9tcj8",
  "key15": "7H9QcoUAMmGv1XHxAVLLY13h8uiCKLgJFoGwSreZR8YPNW5vqTPuMcypk7C2o5Myg8JyXZ7JocmyspJa4kjC6pC",
  "key16": "3qhJ45QqAshSjDnCWvVf3tepKovAohoyzMeJDtSoH8sthizX8AnYsYyRcMXnrrardKb7BZ6tfcPpQKUN6eGmjtU2",
  "key17": "5C9efDMHnPyWyYPX9GLYDGKmChH3Adi5h8Fjip3yEfLd2UTcXVJBawWhPjooteSsrpfuvRvbnrddcEwGeT9sXm2K",
  "key18": "2RZudRZGTXRpghZDgsFbygCtkQoQbUS8QJvsBbzPQousWPrA7tYdN6katJuD48HcvnrEc96qoKua42m6dDvCVB6B",
  "key19": "58jbDtSUmM6Yy4vk94MEKo7PMvtEefqjnw9gb7ZTJmnE8JoJagpYNDqHMnv9eVPdmtKNc9PsUeQ9fBcrn82gZfGP",
  "key20": "2RwqkfvC6QEAvFwWM384JNRUf1WMSWbzBpkzeSLA86MsiUMYSMw5TpPBd8Bj5JeRTzgphCzfhQvvkX11SYSTdKZH",
  "key21": "3FEaT3NmHmYY7gDSeYVbU9VkC8UGAqLgZfoYVULDZDxEYbtFnEyzn3egvzbfpqSjHF7NSUp8PTq5R4wGnfZoS2yb",
  "key22": "3uH1JGUpo5zYPasxkvxFC3zB8LULLwD3B8gsuTSBm5Z1NK6WxzTmw17XYw2yjNC5mJBFRCS3hvmnqmcjuzkHFGBD",
  "key23": "3dfM1S9cnKzBbq234wpYbGnBLcPAo9g39twwECBmWpApehUZ4Khdja5BJZnYpt7x7kygMGZNQea2uzhQdyRg8XXg",
  "key24": "4XTYjDb5iPtJMLgaGY141YGTFZ8XJGFpyx2setnajvX942dG3NyuDJBMPZ9CHiFzv52f87jbZ1XPDKk5mu6R6pa",
  "key25": "NK4ofR1cTo5TBtfgDT2iUhpgoChJ53rEFWRfuB6TqXvHkJqhFHnYYu9Lw2uyDUfzAQYJF7yJptNgYxEVRgGDVoc",
  "key26": "2SNGiKJTZYiQjd5Uqecr3xQwVG56njQjZdyXM3vxJ5iYW368zwhiUoosX3dS4rtP3oSqrnNcBio3jxgCNSXEZ67Z"
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
