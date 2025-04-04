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
    "4xdEXAPFAjq9sG8bNjJFojHk9Piv2t1ARQYgyZcCitRtkYYgaKobXVDKjzwNgtiUAUVsAiagc8gNQdLgMLCeqyvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBQLrq4WGo9vwFxJQX8q2RJFtwtbYHKUPea4R4DoW5bTGsXxTAtkQBQVTddBCuZrh7Q9RrtegeBMPGYvEgiWqj4",
  "key1": "3qYHifWVuym3UebZJM7wSQYR4otoDktHqhJ16L1avrN3GRtW5DHoJMJpTLLWLzoLwj8qfHcwPYbNj8aEHb2mipYC",
  "key2": "Tp1uVEHWMCCbUXjucpyuHM52R1YQhCubmAF3DNU4F4X798hJLD3Eiit95ZNdb1RVpWxVZnbKfVFzYK4oZzZjLJ3",
  "key3": "2WHQrB11e3tkpaVzJq2EaFanE43HjgvyJEqhSjWPfed62c4JKTYnSnPJpmUj7mwcxom5uXjd6Qx9bqTt472wSrvq",
  "key4": "NvJWLyWWHmmpS8kN7MMD8cCtLybgSHhHkm4osS6JEkjBW2o3omoRfnuUNEbeyVaiKFHnrmpxUJ4pFx464UPdvzE",
  "key5": "3C5kPqGwKcbi4eNjb9b92jwiY7xAz8euHtVW9R4gfhdv18zu46aCSPwNZEaCgCNhxqVYDtbXF8YWDuXywcWE6CKT",
  "key6": "4GWXjXhdxuqZR1zYFGEU5mz7sbqfSVJYeuGrnjGdNwejG1LxUkxAuMpfCJtL9YzspkZwVuWS3QZb3X9BfFiFNFdW",
  "key7": "CfMHXgHeid1e8VbcBHAvZ8UucegZMUTu4BKacxE5ktELaQrirsA2qqeMzaToMJbQCtFqgX5Qv783aVZN32ye9qW",
  "key8": "4J7RKJ31WXTVi5n18Am2Sav4txBUWxkiFcceu5s5aTx3bJ1v3i62be4qqUFws2QkpqFCJy9vaKeLJmqhtmLRDdiA",
  "key9": "5Bo3pgBm9TU9hiCcJMxu5RigX9uEjkC9CnCwkigNMwKQNq3zzPrE44RAAW6V2ziC3JdpLg9FiRczqAPQ5udiNhqb",
  "key10": "4t3wCSoN7CjB2v9kuEKRFp9VPVpKaiRtGiRMdqV2GXe1RQe8Kqfh42catWLaEBu6Aq82MUToqawioMpi9qWoMV6C",
  "key11": "H6NpBai1Avy9tAXZRbAhMWUv96ah1Ja7EKVK8Cahu2w2iVP9bpS4qFxw3z8ws3vkARs7kSt9z9gHXXPUuAcBH8r",
  "key12": "eHxBP9rDW18XHuWXj7EozZaJ2XsZuNufPmLkqdJrnvAYrFdtdHLU7d3tPZKBFEpLTuUetHZ6xLeuuDM3PJhHpNY",
  "key13": "3FQ9NNSqn2vuug4Gq7GJ3cVJrstUWvYqUiKNF4k1jg9Nf2rFUgqRpcTVfegvsG2aMVLnd286JEt4rneyojMAELEt",
  "key14": "4icTaPsRybs6FEgLWmWoa1JYegT9GTREAzFKyrfstd8jNYojv3WCYCQ8WBqMDMDFit3Be9pghbg8NwAfyLEXNtd",
  "key15": "5XdCTyd34gSDEXVN4MxZ3zWyNBrYj3M2iDTGRi84ByH4JsYenVfk4vnqskuHDoysYN4hbGJdSN1odjXavBoSYDnt",
  "key16": "4DDpQKjqXR8tu5XpkbDaPvhF55UiNSEYviXu6cQvJSzgTmpjemrD9CBpSomGU3dNnRAXrhNsU7zdPk957jJKvBjz",
  "key17": "5kByPW9V3kc6xcn4BmPNJ4Lkyfg5AnzcV6cnUUx5wZF1mmFCmMBPAd1kYpTZ5otcAHwrMrE874QZYZU8cyUUa8EE",
  "key18": "JtPSEjueQYjrp5CJxPq6nbGpsGard4Y4gAmFhyDRmrUW5igq2EGUmezkJByt8wPcRMYc1ruZwqW3ytcyDpQpqrj",
  "key19": "4RcqRSSde2p3u8k9vbtobZGxkaH2fAwUVzxW2ZFZneX7aBniSRUicN7BDCLGLHG9k2bdEs3kuMmQBdY6LKBz7XEJ",
  "key20": "eQ7nasFKZre7eaHpMmRQhKxKvkGnU4bqtM7v6Lsr3mAeKYBMQZGHPckQKF2mbAdnGkzbWBFHjoZ7TDQyX5NFTWf",
  "key21": "2FW7ywjarJAgkiFv62YQgpKSuhtJ5UVcyV2gq8ir1ogqf11EzuLgKqt73oAVnWAouFfh3mTU7ULiKi3jvZA9bknw",
  "key22": "2gCnmBFh13fpKoq9zUBowLP6KUN7KzPh1nFaYvhZn812mkgwfefNXimy6YsXerCWNWsFXpa7gbgTgXZVt4XNgsSi",
  "key23": "4hppjHtBiZqUMQAjTNrEYXeXuFXociiqenQy3P6Prh1HpTgt7gQBCyNFYqLwdRF9iUgW8q74KCE8ieGP2nDjSUg4",
  "key24": "2dMVazykxS6Ax6NAzKd7nH9aZyxebgPJ7ZqkRH5sTTbfrZS2fazERsisWHsp4fZQLPa3tufFsn55GxzTqAaeo1dN",
  "key25": "5CVjBbx9k4vpWkFPVE7PPhqw3QNxuoaiwqn4dbExFvPJxNacmHQb2epLy9SZVa8fzHFEjZPGy3r4EmQVoXrWtigi",
  "key26": "43sAopprKxStkj6XJqQD1iGfzJEJkpaKbpXfcNStVBCHBPP4qSkZaNBSrY4k5ksUmnkR4eYhg526GwGgyZAfTyWn",
  "key27": "5ygag5YHmxaLQDGsD3ZCM3kZNNruhJPRAYZGEjLzo7L4XFqBNhfFhKM5M8VL13S59qYG274TAd6Gj1efGzVZxAWv",
  "key28": "3v5g5vwj2FAvueMKtPyU7xX7TkThWY7rHMTH4nVEq9BxsumHpWka6dSDM6T62ycrDVEtSgJZfZTJVWPwvyyur6S2",
  "key29": "54YjXZf67v5S76Xtun4RMU2v47rFXY7QnqSq3wiJB78Wgxn7W8TNTWAot2pnYqYAj7jqwTYQW6dMjJgAZFrCECju",
  "key30": "3WT48UeKMnEDVi6FJRvtjy9BW1QJBxZDwuR8JD4ejUKrHonyuC4E2czhs66HH2r3jLoyK7nTJwuzjC4tawgHmnVu",
  "key31": "5ahHYjyDxQNqhJr7f5tJXJbfrgkhpiM1jNb5Ay43ESwPUN37vfmNC2eTrMcsTR7QuEHr5jDubcxvoAZ44cn8BMZH",
  "key32": "2FcdJY9eHx4FEfPwX5fasqdTio7ByK83GraZRR24fVCAh8GyZmM3nR6kRa2tLMiSMKZ2F5dvdJqvJpbgovDQCqra",
  "key33": "4CrHX3XCXA81bL2QvG3G23ETBD4qDAFBT16CQuEdyg6odpB5NGcQ531AeuDt9J3wh7YD8frAm4KCC9q1RYLm6hd7",
  "key34": "4Shxxyy6yyUrN2oUuVhr8yr1ytL5xkednfCXBaUDbp7vBQwXLRgDJo9EkwQu1X4oFYxLQoGUQER8sLMC15coKrif",
  "key35": "4cPMCuvbZ8GmUwKYrX7bu5G8Q75SETV49J4Y4D7qTpzgyLScAaYkYc4fMoDVi3mPDBtuApwAgxPNnpw9mVmcdCv5",
  "key36": "4W7JLABU31FMpdTLe4aCFRoP5p1TAbJHeJ9G2Y9aJjexQChGjaE3d9M8KZxfVWB4tqrJmgFakD6etGK1ib3JQoAh",
  "key37": "2bu29kWnHT4nmxhQb1j8s6LrDRXNUs7EAUqRHjHrphq1vaVA2m7FUgwfac7EVzDSA8jnq2GEVTZRNcQ6xT7YKPju",
  "key38": "3W9Lnn4rAeadghgVKFH2nE9Rnb11ohThjye4ELi72Cf6Cxf7GtU8jn75JUfthUpsz2hoZtsyJA2wrd15AtqzfqGF"
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
