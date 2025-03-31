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
    "ncNjTdgUc3n1t8qNNJnJN58ofhVi3z7EJXGCV25Vdi62rVG4Pns3Z7YFf6ADoc6pxLRAvDRWkCxdj9fMYieupam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61r8pZja5n3ATxNeER5x4ME7QM9EMVq4uzEXqx6qdCnPVgenX3SHVdToEn7QGzwgrafj6SxFgzoLRdmtnp3RQRPE",
  "key1": "yLHiTPZbBBQyAcf5gpjv1gaWJTFDZC1NTduVvtpCwncru1xLRCg1ofyYShtMKMaWwv3hxBWkneFrXYwuqFq2ZrF",
  "key2": "2KVjycEy7eSwPJiNxX9vGEpm5dJzH89X6S7h82zV9RxCB2mY3HRFDHFT41vSrNuwcGc8BhWkd47U2S2JGR14GAgP",
  "key3": "3TMg7bb22HAzYuraqrd1Nn7So7uYX7abRQ8NwVaK6NKMEd4Pee5nnb5E4YgwLcMC8T4EbGVeoqUzvbnHXnJZdeEk",
  "key4": "5nwZyRm27pCUMFm4xz2p9Q9LaSVWU5NJq55V1EaZTtEwX9gLR7TgDTqosVSCcruSp7vHbN3AJPjjEYJHeN1oNNDJ",
  "key5": "3HrjdrX3RMtRTQjbhGr3zcxZthgZGVaDmifKJaLunvDuVpU3PQHokbNSgar6yvArsa4uyd2LCZ6mBwSrzduaPEcF",
  "key6": "xPLQJ2GhhRkjiQbRRM7nz4MYiXa6nHGfhhKFWJuTAJeyZhP7SfdRFpQeTb7uBMtdp4mexBP1AsxZisWEYbh383J",
  "key7": "4R6gCfX4fRCvXqqvN2EX9HjoQusyi8wZEHvXNEYKAy4qu125gMzKt3gd9sTSSsULyeTuPGU99yxpWgb9TGRoFAk5",
  "key8": "5YNTjPxqao3u7qDRa5E4wkqfqwwS8SRnsTermNQEwxvUUAuC84G1zUqLFJchADJsi1KRnq9h4XES936UCL2QuJ3P",
  "key9": "Wg6JoMFcTwwWxYfGCjEmSw9zz9fKejEMELMcoaVfsUhDQLdso1W7dxFHfSjHCQ6mijEsokvVUZv4qtyhKi9KxdU",
  "key10": "4LaFChG7dD3XeNfoYQWEwNkw2nT2EMBmn2WnZRvtQDuNkcFawhk86rxjFz9kgBjQiBP5eCaAJtKPgd3j3D8XNV4e",
  "key11": "27QGntRhausXmQsJU3UYBKtvFxp9XCzFje5ctqudXozXPVmmWbUmz1DnrmoV6eZEn2xdhkrzVssVU6gzVTABHCRU",
  "key12": "2RWBtkQGsP8tbUm3FrHZD8FQf2xUx8BFFLqtpD1S7iN2FzQL5arSfQ8kiHMF41g1t9c83ytbFNs4xYf5LSHzc1o1",
  "key13": "39YjL1DrKJYX74jhVZDpjBqRbsS8bZSeG5C5h2CKUA1XW6eSFRe5VHSeQYztrWEthqM4KkeuHWDZJSejLyqEAUnr",
  "key14": "48NfbHekCuu5WNJLMLrFTDeNgJebnmBCVqiDdDJ7Q8SBWgS7nvBGqCy6J7tb7nKeWf7WwmuPx1JQGYXjcc8jUPkm",
  "key15": "tvpFHWSyiX6d9Q2EDpKgK5EqbAtibiqQZDs16udWghNVoSeJWbmPjUhkcgeiWvpt9TYV6Lfuh9eF9yoUaWiur93",
  "key16": "2PuNPBc7Xghz6fnMC7tuJGWmRF73ymbKzC9SiZyXqryAeuUtsrrjcVEAn2rHkbVRVj17UycN2HySp4QhzDdsVDro",
  "key17": "5WEuC9mJxev81fMjjRB96UsDZj7xDxq95d7u4SbYbdvrFAhAaJanQqNYmqjtp36wo2p3rpevdew2dZ2XDoBit3nW",
  "key18": "2vA51SuzcpdLGvKJwajuV5sRRCUcM7zpGRizVWsmfH5wmMqyYhrGX2vueNQmjdQWkFmwuyc67iJnBgNJ3eRX8iqt",
  "key19": "4AuTYtCX2HJY4tbhATecaFMF24P2rr1JoRhWSg5TAgY1gXavTr72SEwfP4aXcBK8FcNzrvZrm94tLpquiAdXkyiG",
  "key20": "3dPtJBee8FN7NobLBwCAzeXF8oyY6TdXrrUDRHnrXGgWzpWSKyzDQeYuvSwhAWN2QYML6HQrAf59bH1kFmtSyTXx",
  "key21": "3mqWqt9E1byWdQK8YZWpuuREp3AvuwjjZGQAEitLtuqczsyMZNbL6tQHAsiJJffK6DtcxcrxrAiZKh9zWAZGRz7Z",
  "key22": "2etpa4B8bjLEPBLNzwVS7PrGhqohNvhrN4wbYDUeF69qaZv65g7RGF54Bq8zjYAxHBzsFNvR27wvRZ6WhHJxiEVd",
  "key23": "66PXFi5jGeCBBSzK4K1rBfuTDjvF6xg8hDw2uP27PyqmSj5GE4ezDS4TXocMTSNXapmvjy3dLLJJdUTbW1HhfMnb",
  "key24": "5M83257pdEhnkyHHmja1hA8JrFbJSLRxzQeiwMJviqVRrDnwyPWwotfNxnavccPh78k9YBn4KdupaZRuWwMD7eFw",
  "key25": "MfrpuRp3dapDpxU362tV1pymkCwdpqKqtBnT8UfDvV2pUHVGAyxCtPhBv8YQD7A4uBk18TbgxSou5CCsNPEHrY3",
  "key26": "3sNYU6AcJa7BVra3xGfjZFPpY1LavMHXUULXRmxJ9B8BZzcqq6jU8gZGRPBAibWMcmWYsERRmkxxhe8wyKHAxZz2",
  "key27": "2VUFbN8uTG4jT52UnrxGby8GHsH8RQ56bUpw9bEtBhmnZzLCfPeTJeQSS1Rc1BUY4g4AFc8eWzQ1UAks452WHL7B",
  "key28": "zspV5W91HmtthMXQC3RgAbr7P949QnZijyfHGkvUQid8QBZVoNauU7MxkZrpgrUhiiTkJpusz4NqwHQaDKEKe8q",
  "key29": "5T4U8cz1B3R2pP13NCaV2bVwCHmDoKhjhwooDD2cfWupuCSukLNFh58Y2bhzRbrkTNY4rEzxee194qGEN8s5kCXj",
  "key30": "HYcae8AEFXJuwRH5W6dUXCs2YNqiu9m6LwRF2fCWCYVSsa8dkXgVpYcLyMx8XjMy4W1bcNoZJtjjjGL7MpCA2fD",
  "key31": "5LFZZV5Ly5g8ZUCHLXGaSvCh6egSoSfJPHaAMfpGoGKzCjhFGr2gAo5iCA4bvLPVpTAVkR7DDJi6sZsZBUVSM6xd",
  "key32": "uqM5uyjWvZr6F9VGwq9M4U5UmuqrBvXhqWboiKbaMKPnt3j4jFERTTjsX2YTdSaarYusDmexi4M7eweAavFVtrL",
  "key33": "3hw6PHfsLD5mFvQDiUxiXQ5kpJYEt4y35Fc4t93sd39XD6ZrJNaZdqWmGR6gm18UnA8zBUm54kcWvo3ucCYn9J7g",
  "key34": "4eL52FvkwfaJNj5MCuhzogKfHmpnd7tpxrJ2x1FuLmeaLFuLCbefxALr9Ac7ud5zDPihXFFWTm4c7MfSBNb6nKDG",
  "key35": "4KRf46qmzZzYJ19j6Rqpjm7HQzMu6GZCZdzWqeBMDZqHpBhoauyvfEqJTZZqiAjCqFYA8bhPXFsteXgu9WQTtYcS",
  "key36": "Tc9eUdV4XHwQoRAqdLhyKbCYriQyFmj7FYepncJxkjThbD5cEbRMu7hpQuxqpfSCJVr1FVkGEWUkge4Bim11kNs",
  "key37": "Tn8fpYWLVhmQQg26ZpGMxAmhB44Bbmxmeis2CMYn7A9SrJHurNzBLAcBp4FiaRUxVuDfvmp29Wo5GBfrH4NPg1i",
  "key38": "4jm6AD3HCKRZWPcog16ox14wQd4DcPgEfEheMY3DdH36YtuMo6Cf6BXPkHotyfdBYAHixvFHwAug7hiv5rrCvQek",
  "key39": "HyZtSQ72qNmfMmAmswT7QpBa5j24AchHTP8wZM3CzvoQrG3D7MVE9VLTN9WCqLKwnKgoKCN2k178rDvUQ6T3nnA",
  "key40": "2wKTaYWSYRK3o2geuPC6BBouyfQW5pusE9Fa5TnCbNjKe1kqyTkq7cnmte45qhFVAcMgsB5Kbx3F7xf9Ff6udKUS",
  "key41": "3RUfjesPDPinZeSymbDdtxVPCKraTnWzwMConLcEBc41bXb58nuBcZ5r4yRUoow9CqzGs7s9hgNAGnnyaXzZD3Cm",
  "key42": "4XViW8PwjCVDNZCmQwK51puLXbDeuTtaUJzoc2eK7thdQbm4QM4JARfyd2WLJHPtWE6tA2uLECiRbR6e9DvjwdRx",
  "key43": "3yYSFRSgSQM7SUuHRfUjkvraCNzvBYMg5yPCweQ3q2Y1pFGehARAfXhwWPEThCb3yWF7211XgpDFT7fkYxhUa9HT",
  "key44": "53UpsUzBwJgNHXba784AP1xnXXDyPQWtjHAR4sD4w5YWGPfM9vU1E1X7faXpkSY76116qJzkTewoket67nonXHqk",
  "key45": "5SqhqXqnMmTVuQ6sZeuNBmH3hmKgKfZDqoP13Sx5496gzU2XXUBSF3ov7pacYxvbbBwgaaMaVvV1ssHKixAh6V9",
  "key46": "4Qn1h2coVAVyVQpihToECig5gFQ3XTNWtE8HjRZqHcGnmuotqtD21DRxynEHTfxozJ7apSEoZkX13YkqdXZD3hvh",
  "key47": "5QbktDFSVNQZwZJWqCfwoYfgwziLu7foZ5TkG9LMxGm9ygYHBbMqKN4RNxCnRVf2s5c7NVoyMCCDkxNJg7atqsw4",
  "key48": "5qdoAbnPQmYjN7jsjGsQvxRXy7FZ7y6QzxnLrhXkwnicS3Ef2aQKR5WmNKYh1A1326dar9BYvUeexMGsEW6bstom"
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
