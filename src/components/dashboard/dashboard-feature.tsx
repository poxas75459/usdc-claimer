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
    "5JHGms4dKbyNLZecRXxz6gVJsDZXGDyDQXqBG7KdkYC5wyRaKLzh912SoGNmRZDcMjNoGThUk2VzmM9NdEf6vNe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjnkdk3Boo73J1Vi9JSCgB8Rkk155yRVbVwXaHXX53WbmT2q69KgBnLG2sRkkJobM3YPu5QVKaSaWWw2FJgpiQx",
  "key1": "Pb6Xiwhgz7zsiF3ExgKNstVukzhiNiimGjaUA6vaQb1GbjqqCL1aCXe1yKsmLAZCNft6ZG4UWYKeDqTzhtr6PUG",
  "key2": "34Qo3F6Mj9j3jknjSYLNRZW1ND7wkGrvmbEXZ8x9jNEFAJHuU5LVxAgMui4i4d5zutJ6FTo5PAiyZW2xxDqHc8Up",
  "key3": "M4otT5AXgXdkVZz7PHLa4HjUeRY5GjcfwSX7PjbbxjMe6ZVRdsPDbqNVQLdpWbAufTRw4Q9cAufeJikPQTQhAM3",
  "key4": "4puWVWd6kjUvByDXnUwUvPYEXQRqLdvRiVA6MiLfRNkC1zNXwRdDxwr8kmJ8NoQqajzgqFQeAGJC4sAUZwsjGoxY",
  "key5": "5iKCRsUjH18RnbfhH2vnXBR35t9oAfssAxviDKoAZZZURt1oT9vLKFRtSXU4tQTnaR8H9FwrTZd3sWThqhNYrRBw",
  "key6": "o5wkPLFZwKdESJ1Mm3LAE7unwzmoaDfgiS1JWsBYQ6DJJtWcrb3xMs9fzi3S9aL1QsC6xKnaWN1vfkA7vj8SrLa",
  "key7": "4cLxXjwAS2A2fp56RabiLw6VvdhcNG2WnntVbqFP7CezFkUGib8Hv8SimtTmkjEKPr8FQipVTY4VSuEBCHHojRA7",
  "key8": "5kCdye1MMQLLuFyDLkYkwc9tk5vPX59wxxMPzD9VFZvcn1o16BYFD2Qqiy8NvByQSu39ksAzMPKGo8wpzDuNTx6Y",
  "key9": "216AL3E52fSyxb7CAbtzp3FQLbJNKjfZA5Xx2odoNWoX8Ck8Mf7Ervib5V69QZDzujLSXxUS2o7cDiCpcmVxgg7i",
  "key10": "2UvV39tUmxQRN2hZ7Mi3YxW7ssEi3UbdQT3qFmoo3jj42VMNnCXxFj4ht2aW9rjntyWudUT2osBeeRsP2fxHD4QT",
  "key11": "4J2WxbnKz519aiXtotHKXsRFQfya2fCkhLXjmhn9BkQDgfr9RvMojuzun3pnWyff32ZTbPgXiyAKkPWcJM2Kz4tp",
  "key12": "35fLURXX1TzPiyLwYJxKLi75Ne2N4iEhDAftpxEDjtvKdVfJTWW4kc7TR6cvDrtN4VJbyTLywmMihVPGpk5j6L6v",
  "key13": "3c1KtZgWVsAcBWr2Bk6KwDEtmFX4u3rM5nNs22xxgRQ7NekZezaHjEXNfxKKtpj2sdZShkeoifJFm8hYCkrborWs",
  "key14": "3MVu2DXoq5zK2YoDFXpKGawcXk43pkWq35ap2yAB9q4eQ5uzKNExPzaiLadjaGuSsweXjC62REaCrneSuEQmQFCd",
  "key15": "3BFsQBwUQcnYcJBUDx8yLi2JX2MEuLQySBHsvaGPmY5NsyirkZr3MgGXCUwtXAB6Kk18WSiw8m2Z4dmVbvL45YqU",
  "key16": "2fJppR5a2KNnT8Y8kThPJ3QUKsV6KffRBHvjyBcedKspcVi3qHkxDLDZHn6pQ2VUwiJsPHfFTnVBuiQdkEjKgRWT",
  "key17": "2tJhTH5WiuRL2sZ3SDsD63x4tFAqiegyvmYwXyvH5ARCjnFD5qnv6JVGNprXcmtckc4f1rfgnRV9FRmeiM8DJvMX",
  "key18": "2Ff1CwbJCYqMC2x58gCRg6ifhYff2HrWdm8Hw1jPM81G9Rj8bBuXteJ134SiwD9spaBjrnqYnZMcuj6PgRxp48Q1",
  "key19": "5FgUNzJCmHj8xPcfozP8x9QeVfRQ2tAJfxHvQPXpvegg2ofj2SwQfWJAxwcLdieqLU6im5hUgyZQZKkWeKG12UeT",
  "key20": "CDa9Q7UaHRag1Nd9BMtwtNJVypDJkTXSQeCLnG6M6huqGccQw2Qnkpt8gq146MwJ1PsQBPivZMKH1HnNggPD5eS",
  "key21": "CRmHxe3JS5mn9dN1CkP7WULZuL2Hqwu4aquUJm3c9QRnUYhEvsv7GtCoZVB45sdMZYrgWdsdwsvgS9mZA6mZr85",
  "key22": "2JZeATzPk7xsDBCJ17e2Z8c8gtbE59aFPMkcDnBbhkDpYv7ne2nVoJdvMVxiiSUJNBBegzMd4bLUDSdJ74ueVz6W",
  "key23": "4TNQwpEerhrgKLHgYy6z5YKjvnofBv4PG8JjmQDS56ytLE8DQHGE3oPiwZCjPdJNyf6iGU6yA7kgrELWNeMvHrcT",
  "key24": "3TpfFUSf8xdTixQJZxJ4an99f57VDyY8Mz6zREUuEXHD5nMoJpThKtzGHWoVeNTzjZuiW5ykoYH5nkxNcKSsLdsd",
  "key25": "4x8VSQCGMDQ9VQVjejBKED1EUKfGUpdgA4uNBaDzybCcvTTqZpzPYdW1RoKLHKqtLiJ1vaqAKUbDtRiXdHCUPWKS",
  "key26": "5GL9QF6APyBh7Dx4GJcoBB4QM8AyRCsAh92DHt2cBvinjp6SynjrxFRjnR9hGzxTwrZBQFkby5x7HQUkMqrBV2H6",
  "key27": "5HsAzeKbPQcKgDzptnEgYmk5wjPsad8nHMXUvqPdd9DmQb2Lp3WSgFqTdkUM7mJCs2SpFDojWnmANFtWhiNTaNXK",
  "key28": "3PsK4dmuWDhK8zDPBvq73d3z6zUYQ9V4U5opzJvr59WAfrsNkv3Cv2eDKA4FMo9bWnsHUuFrPjdBd4Fb8k7ii3JJ",
  "key29": "3sqKV6YXiJV1RmNArGsWfGLJwezxHqbYUXS6tfKfWnAbkAmfufKjyr7QFK1ixpxCmE4NxVymLrzxP5JjnqfaZhvT",
  "key30": "3HWLLhDUPLT4mtvJFsTx5kMDHtSUFq6oP5hdkVYDuop1ri7CH6wsWEtKU9bcdcJU3xy4QwZLvgEK1s2GJ2aVczTg",
  "key31": "ncSeaJQvgftWmRpKHpnz4cuKpysi8BiFXsyWC3oDTrCYyAhrvQo7wHahicKHfp7iNaJ14NP2JFX9rzKz39WcVuj",
  "key32": "44Gm8RN6TmbxtEkPQSXS8VdPg7qWGPDHx8dd4e93V8UknvFnvcz3WBJBrv9Gj4UXdHYxDghkyJsYXc7iANPWbULa",
  "key33": "VAkDZH4T1T2kphfrT28HxVkBU7aaG9dSpJZrFUFck3BhgFoobZpjB7hXEqLX3NrN2xTjHRB1SZ9GWBLVyiXdQwk",
  "key34": "4QyEcUHeC3UTwX5ht4sCqjqEFtZjKLBSfPTXqsfJCvY3wspNVF5s5d3mms4obrgpk1R7BSueRsLBoaA43twzLhZJ",
  "key35": "2CF9AYX2sdTmKoaZDNpDnnew46VbhyTnuxLzjTqsYjtgTDFUmvpsichaSA9ZswWEfWV7ngu3gGsLxjVNXq5yG4WP",
  "key36": "4uyPuCsGyFEvhVqGDdSz6t7kmeeLjTQi9SSH3sdBqiG2AMT7gZ34uSCHM6ey6TehdaaoiY6zanTJ4S9Gqqx9Y8E5",
  "key37": "4EC4BWZTFJXK9YN3fAgq83HSinowyjk8RntpUyiq2kasphWhNjeJRBwfLyBsxvKeoxhDyK2SVXDfZu1J1aXkLJcK",
  "key38": "4XjU88nTRqFzszAKhFZF9ymVTWA3L5AwPWNBG11tuMMcFspZZ9iwiwWG51xZbuHjW8b2JkibA9PAtquTVpS5dHHv",
  "key39": "3LWayFedDckkssGbjtwpuZ7U8PaxmKWrQz2R8Zh6XQRJF6i4jbdaLCjCGcNhdyg8aapx92pm6mGEY3hTfxXJQGYE",
  "key40": "iSJJ4Par1yazb9dYYN6n3rfWXsVHocZUdptmUB9NkRgjyAYiSqVcQveRFiVLR3DV2QpYGNGsPa1JmGE6Ue953Si",
  "key41": "2ALvHYWT1ZJavPzh3mJn6SMSKXYHKbXJhh82RBEp2hWKdexwhcEQtGr8ZS8y2WMmBhW3qcbgjEFQDkUQgDdF5tj8"
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
