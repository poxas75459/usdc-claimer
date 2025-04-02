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
    "318xitBdmqtYhmSUMSLb5x5uS9Cqw3zz6vDnYPrK9vq3dxLxkbcoJgDDZJAtXoyNCw3JTutSpgxw3XaSkMHBh2yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wD1N6TAqGsUDAarJEZKBJznJmoufjJAn3wxssqLZ8Nt2FTb73nGa5TYwdeCB73w2R8W388bTH3i1Jtdv8xpLbiq",
  "key1": "33KcTtDdPEthBtnu6vZPVj8ukkwXP3Hkk3VaJ5vtAy449N8hhkuyBkUtYTESA8N3bx1DBjRrx4pNXfRSm7vJzAAS",
  "key2": "3UuwnMeyE1ar2P66dxtq6BnRBKJ6iRGhj7QTgcRjWzxw378skVEdGLW8TFt78RTFR8ev9BRWT2jnfFksgMyQ5gMx",
  "key3": "2uwrjHvtfLNE6iaWfkGDPAvKx79xrTgJQMZAV7a7pHU4oXr63bYJy1zKGCE5WNn4b3FfVHg2G6gveviiZpo3HWpF",
  "key4": "36zFAfdve6xVQYRs3kneEhnC4WumNR6t5NFw5YwcHQ5PKQgPNpaQTWHM3xqxwE97K5oNZYjzRqiPy2CUAA9wWCV5",
  "key5": "3JaXaBvpbZcBz5TpHVfzqiXLy8Sh28cW2SXGL4UDfF4qg964ZJTb6skKncM3RTP9EsvhgCSnMCbZLuFktpcvN1aV",
  "key6": "99ALASQBoRLsZvFyX1UVves97pLAsroLXDYuLWipdzXBfZkEYubjSEHenHMH5UHgoYmZ4DjNwjGqEQQXfJpAPdG",
  "key7": "w8fy3dRCetLQYnvSAA6J7tRKhHj4A2nm7A3fPVeTXh4BGYykY2RkxdHAsvEiwXGqHHbZLxe3RGzNdck6qoxeMe6",
  "key8": "5fARAuneeQxey4h711aE6KaT51GkCYGeZBCiBwUnaFvrPZQpXqBkHcUG7Y8teUCCBqd1oyF8XMFoWHo5RYdtUGRY",
  "key9": "5mXWnp7iAiz9XS2DhFttf9cfvusJmGJXUmxpNFxbsedXThEE59o2UyAwBE1cTEubLJmr3bJEi8WUPvGbCmbHMeAT",
  "key10": "4gfQtnhmmYCDZR56WcqauYtqgh1wEoHaGsjfq6HLrwFGwj5dQtocNvSf54WeNHe2tKZKjVzeFpbBmW6iARUD6ZqL",
  "key11": "2SSwfhieW35GJHABgL5YhUt1ZEZ8kmvaZtf4GGKfPf3pRuFaPvgKS1pdLbfLcRQRh4xf3MwVWAouM21Bw85H6x6r",
  "key12": "4rnLSqtndUFmJeTAGB8T8kTpiebiXscB69c9fiw3ySBc39LBgVK8fa4G1xKBfbxHmmuA8uy4YUHgrFpfdDtfdmN1",
  "key13": "2itWkGWQvFsWm3vVs5Li6DjiTXRMczJbJJK4DrJAsrWKToqEBXhH96gF8PWYSmUMJsn1nkP2DrYmuw5BCJh4koQS",
  "key14": "3pKxDVmqn11VKXoVAX5EzznqVMnjEvTnrhSAXnR3iraxvGNZqjTx9v7Rw9kqDEftV7xWipDfAn1ZEq1DsmmDCnRF",
  "key15": "4FM3xgVEfhL3mvGTMbEX7DGP86K5epqwT75q93yPYLBgdsDXbNqzNA2hxZw94nB2LUQ9U9mX4S3yeYzX8GcChhC6",
  "key16": "5utDXTEWC3ZHDtomQq2CVY5MfLZKsRZhKevv1tj55TXr8tdVDqMCim9JLFDKQTTc7nNK1Jny4hWHpRKy7WkgPpih",
  "key17": "6CX5PuaMYoMEqJQJsz6feVJf3fifmBBHVc5QmHHi7shcbncDrnAPhYzAvpZXMBpJZ5oWS7BM8PM6kFL868HWowC",
  "key18": "2k4Rvzjp5Jz2BQSScqAG2LHmpc3sJDFGJT8DePFUwnAgugxDhbLyY9oMRVXupqabtrbngVDVyPGYEzWBcZabp5h5",
  "key19": "8QWFuwES2ptNtRsWHVuq2xU4i8MrVhEHNbqoRU9eAdCcN6tDgVXvTyqbEjZkfgjqbAbApbuUVtTLqC3iWoebpQo",
  "key20": "4UUMkS9TCjfKsBLmRzEUjjkpVQTxzyWTK9CwLtNLKDD1t7jfe6CK4kWEdu1DJejWpj1Kc31NMBQKJ6iinJxh3mW8",
  "key21": "5SYXt2L6qTiAqytQ6Jp1RtFjVd2VfNyNuGKqew4UhhdutdJVJHXEnCRXXoeigYXmdPNdaC3qkQXd6HRdjVV7QA71",
  "key22": "3WG7rMJFdVNRPfeYuhRo9amP6xyCVWjskB8YTsBtD783Wurb6ii3f2jgQz17vmHRvPygqJPrKTAEHyJp1adghQD6",
  "key23": "5LAuMeABpDokhPFDUp3JgRANyrVcYr3244pxP2q1pVM81DyWstjM4dTwdCeWmovDCWWp1TkruhT4ZQb5uqUm2h6E",
  "key24": "3KQ3eLRxK54jEtMjjp3stPgaKZT6zLfkoAG1YtCqAp5vUc9ZtunvJA5gupi9WywAMk3BZJa98r3Ei2YgWoRBjTDY",
  "key25": "64Wma6WLMWXLQm8vGeiTRDzjB7JX4BDKqT9tsQXgjfTyQqV5s54GfbDvQepaKj3M8CUKBCe4rgh7v9avvNAYUqnF",
  "key26": "3RcVxNHj4vFL7yvvYsCWSGiBzm84vhTFEQm4nfC5o7xZVpvbkPAEghMB4MXyAz1eg9gfRu33wusUWHamPLh28ZYp",
  "key27": "NWWkGbvMHXE2kL7WCNToY2z2GGA9EygihRuvuK3sqt6AJftAkBHa5aoKg9HQeAcF8X2RsmKq2YyuhvxyQspeaCi",
  "key28": "dqBBdAL4FC7NxMqGjgd975xYSqe8hF8DjfAihbju9Mwe2WA7jEKKuTxMynS6rGox6wtDCXTMCUpuruZMKPhxsWU",
  "key29": "63sSaWSqyVqrSPpZRw7YeAdkEr2GbTBra9x8SxuAFu599SMHRfYWc5CLVo1toeTQ6AyuuEN2sSQAyfhgPgKhWDHJ",
  "key30": "2piqXpgFNgSLWhsKcUwaNLUTY5UJ9unMdqY3LmHaWzdqWratofAKis5kB6QEPJY8pzeVqixFDnYVw8Sh3u99i7rB",
  "key31": "9mK6V8Dftss8Pzow6zEKuYZp4KcmpeRyXzM2RDVg3cJyHoT9uAGCGWnctcHsezuxR9W8Xi1z1Nq7nm536vFgjHP"
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
