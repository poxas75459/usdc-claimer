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
    "y86xYEYseCnAhSTigByLrKZN5TVcrD446swTdumsXpmBhwXmWQQNpqMAEGRjqDqbxPWkb9at8TCcx17nW4MQwcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FfwCE9ekwFML2VjJnFoBxz6EpuBxTZ43x6FzXh6gXkSySH3DkYZvzP28h8GB2r8DG7DKCRqv8xL2bBRKMHLdb6u",
  "key1": "hJhX31XoR3Mk1gDJLrB3gyuM9qc8Rn2u8hLXyJqHvzaYET8MRRprgNt4gbPfgqQHBLVebM5WmDw7dp1WqqDn7Br",
  "key2": "5FymJjFyVbYs2qsPYr8Eqk1QRvaLsn4rnfDgnLaohCWMEMAMyLfrKQ1uR2fePU2vPEuuqNmazXc5AsVCCS32omoX",
  "key3": "53RAk7MAv4o1caVk9WQ7oRJBx2yGDzezXVoxykDAdAwwnbof4KWt5C7kP9vKsHF3xhZ9Y6PESCZmvBwj4EnajeGE",
  "key4": "3iQYvAVhMobpAr4Qns9HRCzz4K776B3DTXdUXa311adfExbBktR3wudrncHp5JKHEVPbvq7yiRGMnziNoz4ozTKj",
  "key5": "kRs6QZxY9ufucQZ8WM8mka6y2fkNHgn7iRxSZ3HxbNBhKJ9wshhKHctmHZpx6mj87zCpmU22aEAXKPMMWLeTUnp",
  "key6": "5XbkREvzkKibzpxWyCQoFaTNyHtkXnWPsJRdyGEnjiZ3gEbt5HtuUMe6sDpYiykicYCHgiGKUvrwZubztnRy63ep",
  "key7": "2h4CRQcJWQr38m9Jb36teEaxAsJ73X6UnccehsDd7Cj2JRvTtdSrSXrcwzmexkLH8xMvGQNFcbpbhT4vYhuU6R79",
  "key8": "3oBPkLsb4CtJtAJuxYgvPMAzYE8MBozqLJ24qUpTgAfhZAosMk8e9jCqbfFWq8WPXhV9nXK3E5PrPh67xUZzA8qx",
  "key9": "hKwogzNzkGF4r474AHtaVM9fdu7xWZsjJJhLyTURbo624pr14oa2CCXn5yG4Gomgnh19UMG8PD1NwSwmyXNMGrc",
  "key10": "27ySbTpEcvKB5ZeQFAbVeYemBDrFmquRR4aAYEqZDQ8GR4CXdMCDSQa41toyDLp1vB6ZRG2udNBThSVainNAg5KJ",
  "key11": "3CQqo4KMsidJELRtkP59UzbofgiQs2ZcdpgLL3FXYd6y1tiPsPof4dbPiE8E1SNnBLq5GRAB42jw7yFj3CtrPwL5",
  "key12": "3TVaRf2dAXyVGQ1ADymPyusSuGEBEWWpyKKVLF6GrfDjZEevaNCc5KB4heSJwLwUp1FvRJiTVSxG9LJauUEPYg92",
  "key13": "2V63jw7zwyRJr3YzFUrbvD8nDtjknbaUHUBH21b3Zy492HwuC6crSqwBnpnDgZuhQUnhUvgemAPDVXWZnMz243vM",
  "key14": "3tArCiTtpSwbYg3MV8t8Gb1oj9fu8t9iPQ3E6CqMrbgkJvRfPskFotBB7gc7gLDqVE7xHjwtGkkXUpPDPeYVmv4u",
  "key15": "4VAoVi9i4oZpY7GrRCxLf86CEWQvXuqXqxuAYqBu2Y9L4Ww4qeMQwddGEF5qaDLiX1f11iqq7fTnvhDmppBP7BYU",
  "key16": "5bjX7nAQBdfaoXPmP64hk89YAVBruqeEXhPvg4epqwT4oQNayGVk4GVjNgF9yqQhKKSY7SymX87X7HN565sGZSQe",
  "key17": "2nxd3T3rwntCHokwBHEbx5A4gDzkm57QfhnfXpFJMkDTCMeaJnhqCepBTjWVstPJ8Uda22bLknT6fYcdNYxqSW58",
  "key18": "3GWycpQswAMJBWVZ7SmqwcUg7MUhWDvvQhJ1PjE61TKUVzzvvF4P8mEcqwYd9CW6hs86d4voZF9tczsvsJkZMTzs",
  "key19": "5WcuCuc9ftsvHJ8udqUK7WEaXD3PTeVza6sidCucY2124Rq28JT7kuf4714f8iMMzfAWNvohgeuSvnxZJSHBLb45",
  "key20": "3Jf4qzksySuPo8rENmnypQm88LFo69aEEKLJyaaVFrWoWR4TLhY1sdhsrF2byzkSbuYuAGp3EGz3gLVEKo5ji77X",
  "key21": "3jRCY5ZCr2Qg6MCrTxXYgBmms9YLDpFinWsSGmjzGj6taZJFXTjM4qqyNRHUYvbJhAjST7SRmLZhNGWr4evxqnEP",
  "key22": "1hZZK2HTXsX6Qc39uaG3EoPKNnvP28CwKsH9HXPZwA1TsyxMGFmiaBeAjDhwjHecAs668ifpUbsxR9r6uTY9SnB",
  "key23": "28sQVgRkraDYGLyDQpPhVUtVp5dGXxxFnNX5ppfYxVGs2jivMJjx9mb2TQPZi6o2wvSuo75ZVe6ZqgLCwU9sc3Lo",
  "key24": "2MpcatAZTXKeoDKT4FR9Xsi4quHfjz5MgxyE7DHmFaj2JPhUhB61KsUCmA94ik5rRbqm76ctRSFPuNkSFDthvpkD",
  "key25": "55HY3WDjfnCA9PHEe83rTDaHJTH8LpRwJJs6zuqszsgfDHhSmko4xjKYQLKZCZ6VMbuyuQ7YcZJmDbQMxJAvRnGu",
  "key26": "5pQw9F6ecM56UoQz6b8Qbjpzb8sTbagCoBa5qbbV9wmUXwRMmdpnyDax3DiqknQj7kThdb6GpXNWQsKVW52ZRiGG",
  "key27": "55pae9xR2D263zQBfnDUiFwCQRTXzZ7p96AaDnDxwiHgDBbBpZPGa4Vzc4pDbsnCnhS165z1Nw4kwzbQNPqb15Jp",
  "key28": "5y1oiE1M8rFrwbwSmV38gwNsQLXWePYqeC6pLoo2mjoPA5ivEJrNk9d1rDKzoTSXTL6MbPEAWEvvJSfB9En55gDt",
  "key29": "8rU7rqsgAWJ3zUr87YpTLnyEAjGSRaLPBiNzQuvpTYTXamUxJkbAuQhnhKYHdqbySWMJJq13AEvzCfxbt89NZ9p",
  "key30": "4ZVq7k4i5Wc4mecKEA1RC3gMSS7vFAjq49K24CM72W8FZrNgFEL1ME9jPbD31PnpCxFTudNXpoXRYwPWiDCQHfbR"
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
