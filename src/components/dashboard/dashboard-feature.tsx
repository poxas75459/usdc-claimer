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
    "Z3kAHC9H9adEnxEtLDzMoYcXpPt1vkALU4efoZ8yoFhqaycV8qcm153BFZptjNbq3f6J7Y6xmCq36TwVZ3wyuVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EhuHDbPqw6KWKBgWsvCDfPFKi8MuYbAZnKb5SdAMbyA39P6oAuRcT8Rbe6dKFD1xfGDY3QpgeGyFVVMfYh5fvHG",
  "key1": "2qJYRJrBqP84UrFvL6H6af2hDD9XSB964ckJSb7AhR1VE63imzBiThPRyE6vP3Qofx9SoywJjNGBjd9n6qoUc3Xj",
  "key2": "3vAaCu7Mq3r8DbFYqcv1GwwCQQrmvPzJyCw3JhuKywjp1sodttPwTsBZu4eeJsvBtYoourqETc1GhSkv5gtYCJ6B",
  "key3": "2uyKB4RWsfGqzTbcRnFanRUd8yccvTFR2L81v2HJPSUNU7C8Q9C4pDzNwxu9qF8i7KUUnCHGqSWcp5gRMWDPY9N1",
  "key4": "3FtYHdH9CceJKQsAv74RkTUmYt6tNaiXTFY2KiRZFoH5ptTr1StKZT9EEZQ46nnbJxrt7vKj5P7FB4sumsaz15ih",
  "key5": "BwKWSWoZSgQ4LztwYncqTvBbAU2bdAmPVGPfHhTxdo2GZntMVG7dSY4qpHVsNmWkYk2mP9e3mRRjB7TksARZLzz",
  "key6": "25iFTdwijEbYaC6FMVEpMegTAcUqi2JFgVPL76fHeoLLaaZDevtCAdHb2dU4b9mBMTdvFhjVAjFG3cytwyY1hTAP",
  "key7": "5bAq1gXP2fJEwV7895adW1gcxpogpX5Kc9BgC8bz2fUgdBBBMnXMev47wwLRLmnkebhjeZtiNrz2kwQG1BJx95oW",
  "key8": "3Sfke7xQo8KNLcZxtbH8xNpLq3DaynoZqoJMwctzDvcDqpwLqUZtNZ1NzVgfbVcwwGNgacYmGszxH2ZGXxx2EUgu",
  "key9": "58KZYU4itLMEpvSAxVQdxcuwHJbaAS5Bu2rM5FFt7Bmpq6EUJb2ea4c2Xf6YKJgH27XAuqTx2HXtWKNCBAwa7bvg",
  "key10": "21FsVTvWrY13Azrba86HeduCDQuh54z1TfZccdJQaXvJpWUTR1iSZGQLXTt2ieEEzxRy5HzKaznD2amMZJBhNQ93",
  "key11": "m4SbwkRLL1XXj1cK8AGpfRjK6YmRuQRfCVZS2KEXvKTZKc9zhfkWKBosSq1wjyVeLDUB7p2nqHDSXDqU8SzMWS9",
  "key12": "5k5Gh6NUVcf5VsJ22CVbXEeotgyiUCTx42xzDNrxE22WvezWpdgtVhF1Wcb66LynyT6KuYG4L9fADjNzeK7E7sv4",
  "key13": "3S15TCuKw3KU7ibwynLq77XW9pSkZvMZMZ6CZAQK6k57n22ao7wMAKVxd2jWVnk6XEQqcdndjUUwx1kCEwNrKZcN",
  "key14": "eSWCZpXcxmYYMtXc75NjsZhGVKTANFYP7zSS1e3hQR6nmC7e3EahDgqF7wypYNLvoQhJx7mjTXreAj3TXRRbQ3v",
  "key15": "4gJ5r2Ru1nRKifp4kYfKPL6KkvwSVy9KNiFXkon9kZ6vdBi45ybiY8eiquGfSqrtUXbq5eBLaEszrHv71yBjZSy1",
  "key16": "62vnwMCiGKrg6PnpBLLKfzPGDe5WCLzt1fW2Cyn3WqoUXNHBn9CsjowQ7tNN6wiECZaNR3yDHjyT68RHS7XTuMUN",
  "key17": "6nwvQq5fT4HfgvmmRVt7xMhxsGqo58ZGbE22344TmrkMaKHsP73g8auHKZA1PQXKRd6ZZyMuDpMqUadFvEvcuVt",
  "key18": "5qrrwV8gZ5Vmt5sChudk6PkMuWRpdxsMiXiTMNqu2CGgFK7Syp2KFUuSH9oPPgdyHGffF6cDDx8VavBWvtBebQhb",
  "key19": "3oT7kAJsQoD8mcp7J7hScJnK6D5tqyV2aMNqSdgxjMG5qA3NSjiKwTPgD8gsAkkGT28YteqcbayAYxBdnXNJ87M8",
  "key20": "3YPQvZkjm6KosDYAc74XdZ32AMzvm984qmgapp2wF7pMqSeZgKY3yEbHMzN3J7jvkiveWHBVGMkWeWCXyF2Q6J8q",
  "key21": "3KkrRSds6cXkH6XDdduQjJSxk8JUHaeYSJezLGUDx7ULF3BT3M2Rm9ebJLZQJLybkAd25UrMF631hepCYk668fmW",
  "key22": "4EWD5ku4XoaFfFz25z8khKToENvzEavAfwwBYGTKmL4Zdt8xpRbcvwPv4PrtPtkAtQWqqpDjtfuDftnpGu9vBikN",
  "key23": "24Tk4cmYUWQcxXeLzntoA2SxRxqyy7Y6mLJD3T47qM6tRsAY2Gq842VwY1AW6ZcfRXvTG4pZzxxtLYR84Q9vod9d",
  "key24": "4Vw9g7rrpFN9w2a2M58eKpnqfnH8CX5VHCKc8fBDbxgqictdSTqnUKiN6Ni18jkBK2wxdLThWyNgW3iTLEWUcD5N",
  "key25": "2zkjSTZGXNRbFaUEkyg3cpEouwDbNxAVbfRRjB8RhRVnyxS6pNgjp1CCdMfj3FHwrKpTGCxtjLhLY5Zi17H2CamR",
  "key26": "5CDV8694vKNdt9CiqRSWTkvzgyLN5x3repbMf6UEzcuKcbvXyN7oPyK685mUFFSDrpDwVoTfnifaCdSM3xugWai2",
  "key27": "5xji5r4FEypb1haEfjK8DXpEpNJRTUwvSNuJJeDPx48RSZn4ukbrnzF29c1uoTbc5GexqQfZRP7C25Z71veBdAuu",
  "key28": "29mV6Vtgf6q5B6uEgVrGqPCnXzWgnmaBgFhuvxHUpUpDjCqMjSTPBSiPRx73ycn2LYJSydewhsFGsU1fxfSrj9YG",
  "key29": "2xkWBNTY8yAfHKp71DuknTRMZqkcs7mPc9QbofdbFMFbmPdQA8iYNeUqDW6BpAD6kp1svd3a1NeFYUPCYNcwAZkG",
  "key30": "5rnhwea2N3hg3eiSYQL1xbArAfWKcnyVZXxWxaopADi2f8Y2a1huoTd1rGYfaw4PDo1YH6PtiDtBDBTSoPEiRX1k",
  "key31": "3ETVCgarSEZZ1LptpATJpn7vg2sWvEfqRxGHbaS4y1kiQoDsjYBY4n4n67sLaE87hF2HjN9HNm9h4CSo1rD2ihGc",
  "key32": "nRxC5UnbbvYysadbe6ipwsjg8TaWWW9GMxpamhoQVnWUmgFyfb9TDoX48SpXZukEK8m7DULqoHfVxbEvJMXGJNX",
  "key33": "2Jc7agiQfggzEcw2oKroiJQoCnGpN3JjAagCGmTuaBk2udgipU23nDjUSc6VYFAqwQJW2z9sj4uZQDG6vo6RBa6o"
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
