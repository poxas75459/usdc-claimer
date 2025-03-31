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
    "3RR5nao3Khw7ma4reqLNdzjfKNxTm4WaM62KJnpDjPQaCecwNUVvBV4YSVtP869hatCrdScjQQ5nWXm5vmP2fZdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TSxnJvzvjqBRvw9wn8D1NWK5AgnaCykWFEz9YzPMfgHTKQ9cLYcwJcQMZphUZHnJYATdV7uJwda7PBccoH6ju8",
  "key1": "23tmyfip9UmQKatoLiSp1v8HzzfWcUrDaFJty9mZm4D9pm8xCQZdre2xMvnTaEi63kA5gyn7KEiMLwLbt8pqe5oQ",
  "key2": "2pHm1ounknkAedcPqGzjTjcjQ5HcJ5VJYYFrhWgueMg7NyLg7AyHgAbeTCCZY78fCj2A654svkJZwtNEYaWotyth",
  "key3": "35EY7f7qysYQWDFq3xtcUMcX9JFPXMk8gYsL1JB18H8cETojfJbCCuAhNAZnSCGSdkLDbAHXQ29SB2EeuvDw6BJr",
  "key4": "pMqC1ZzP8E3CMzuzaSF3Lb9uD85bvuia4PtQXeg9ZDc9AhxjdsJ1q63GknvM5VcvsWE8BQMZquBPd3tNjA6neuH",
  "key5": "2VwdVLyQdxroNF6FyvkZzAAgWeSFKFomPVUrko8wbf3W7vHjib9EcfmTgVA4dWLxGD8THnP62mzzzp8KkSBQj6mo",
  "key6": "2iw5EpzPmkvQyyYPumtzyjWZgnFhAyNoyN3Xe9S4eN8BbtJu9QkZutHM3hqQ23iZUkxWzggrkFVpvwwUSkzdninV",
  "key7": "wzT5eaCTfbuaKTYC4yQW9165rzp2D5jwkUrYRPVeChkTSzRuBCDCcgSTbeKjb1T9CcHfUCQWK5noHwF4dXkbXGX",
  "key8": "3TgzwwQCsZ27bTSCfHFYsatjCgHWhZKHzTK65oRNmBWhZ9CV5GZwCKG4fMzZZbCZXehJFM8cnYCJBeiBZUjrvivP",
  "key9": "324mdTdNS6Z4YjrNHM9R423Q1ssyMLPdJELniGDVRjFs3P6gGtHRgzX6351X7XM9rHu95nRCPuTjDwM8DPvwJAEe",
  "key10": "2QuqGPambHaLiGe9pTModE35aj5LVYei5tiu4iuLsSU61eDvr7LvPxCwGc2PZ3HibPev3ud8skHGerC6dr3NZUEs",
  "key11": "34XG2QRjLvugd11f9GR5mA7TC1DMmpobhmByrFV6wpeKLJvciPYJJNqcxZ3WY3wToseixSt3Vt8Zgx6sUqg3sQVS",
  "key12": "34hYGFvW4pFKHF2xx4QEQeTW45KXKg3XAJ6Gpx4kFJtXxKcKqQDxhgfeDuUTrjJdT4MZoraDSLXsoT42ecZSCUgy",
  "key13": "45SMoN3fzFtYFNqiuEt46mUDa2WNunefgohXqLpnnUmSzyuYAxBEjY7N8VfRzh9uKgasHohuJAxsK41f6HCPXW1P",
  "key14": "424qos2Z78VzdjJ8g8jb1r6dkSS8zq9GTZhb1LqcHBJpJoFvf4vsKZs5z2gVZp7SdXUdFouCqWvu6tDzW6BUDroX",
  "key15": "2b8VhWTbJDsEj6SQPmHdDyCByw732QTVsbnL8FVXsapyWqLAphMqohRXJLZbbF9s7gah2X2oBT1Tr1Uyr7pRZN4Q",
  "key16": "J76JiFM3SZijAbMLUH94Zfb8NbYPcEmp8vnkZVSZbmcAJ5CKVgdmdMapZtq9ocBS3783dzgzAVXscDXRtaZdpQ7",
  "key17": "4yqyeQ5coiLF21H95sdAB2PQaxc4TCqbBoQAjr8utFLR7tmjWbG7EhZYYQ6X3pKzxxcRSLTLZbe4Br2BgD6Uzre4",
  "key18": "3k8eC5KkaZApYX6HoYjK11qzpPS45uEn1M75jG1jRTogKHZ8SVMmkoPdsiqqPQSULc9Mc4Tjw21BkRqxvcBTuovQ",
  "key19": "2Y438fdmtx2WDo28mQ5b2AymmddUDa48fKNaPdctdi8R8zDX44DgNUUXxXKYDqe8HcTvpd7R7S9nTHV1abeJgbpf",
  "key20": "2M5orvvihhkFGPmTSPHAxuBGz7XcHNKLnwvbzy5vGuC7NfrbSH6MuTLngB2pRPiWFmTo7ZYn7JJeC7vC4tZCJwvH",
  "key21": "nKfihmimmLe2WpruMURf6uz9wWj3ne1bnpeB7zobLtNYMa4zAqNmni4HfWkz467bwzJgxpFUf43Kismho86ZmVn",
  "key22": "435cAe3mp9mx56siRBoULRQDQohvMLUNBnSpvE5GCKDcRzmN17E4bgfojdFxr6WvcAKPLzu4TBuWSEgzrvWwaKx1",
  "key23": "38653DhmaETpxLPSUheUXmeEDZJXd7xNytb5EKNxRvvCdT2LCH4kyUGjUTCBMLNoB1AdjvBmEzrqbkFBkezAc8M4",
  "key24": "2kymA43iUok8uHE4qYZTsNJ6i3yJHkSuPydpmig6fJWpUvbGeV9wgJCJbAoBugdCpbXtrxyEGoK9znwpwA1e3WGe",
  "key25": "4Zkm5TfqLK5nhP5aGDFRD4EFbVHWH9KhveisWrLyPXDxDc1FTqTzjb5qEkZDicU41nskgRZXPrf5WQNA6EGmQ7eQ",
  "key26": "4aZv2mjd1oUqfMJqg5vsqhMvHGSfpNc4DDwFgGXaw8aZivS3ZKHmfffQAssjQSEyKzxGw8qHUwUMadejyAa2oHk3",
  "key27": "3AnKmzKSFiPKdqq2uPGYq3cxekzEiJZw2YDV1cpu8SYL7p1ZEVNNezQmxusjQz1j2zYE3TF5im5KNtZgCSPhqvJu",
  "key28": "5TghYUFDu8PPkYq4zPw8dpDKKEjcnN2mjiWUpgD6BbXeN1tHZDCmqjTP9EdjefpnNWsLYxDMXVrGzUMYKAGfbGtG",
  "key29": "2nnKmgbwf8ShYdWoRBBSJ2yoEEw6nZfMYUFGCbyVNLUYKxz93yaENuGhXWsFUUujXexCkNgEaRCdU3J1DfcK51zF",
  "key30": "5UjFsgDjNwJGkLU5f3716QeGCxns8GLeD8W4UaHo4yi5g6xHrfKEKasRwLzjqvZiGy5yHkYKmDGGZtuMUsvQ1xrd",
  "key31": "35N2VopVJJbaZtFQs5AazeypaHMkQ2bRqsKty7mQWQHSud7bim1ze1eGfSqVC3T9AdM8LRztVP9bng93HdfX2xgM",
  "key32": "4YA5sXDA8KZg6nk6cmYHA9P3hZ9vqqH5pixuuNHCuo8219KftKLoSu1xDmghMABQhQK1mURr9k7PXD2NsZeUS18m",
  "key33": "4bvDjKeaUfSqxNc9FSkmGk6oZzNHeBmN1LSjCVuK7WALECxL4j75ecDHRx6ugWE4GXYjCr5aEXPrrz9mGK8bvpBH",
  "key34": "2SkaPxdF8qfLXtNx2kjkDxrKjYXCp5zr3aSwra5bWrdg8TZz4J5oaWK1hPTh5GbXkdvt8qtiFW6nwxfEgvFJVGzh",
  "key35": "423uZqTSXMMRx7vKXAnwraSUdkZYMY3uaJfH8rYht9vCFzq6RGSg3KGsm3tcLq83m3zc5vp8PgRuTY2y5UN2Vygw",
  "key36": "2Mts1xYe5gsL4BGzM9Ya8BxauHqGdV76UwUkRhbvKJVnUkFA6NQowvVNr68GsDCqsWcEKuk5sAwT6h3AuL67Jr9g",
  "key37": "2mYD6THEryL3WWXnkeq5uMaWubeHMDqkkxuPRYpaP3PWPJ4G1T6DwBi6YpjVSdvHEefqw4uXKoBfkUtkjsLmUBAE"
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
