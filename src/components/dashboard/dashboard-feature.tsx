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
    "2wuckn3676HeBARrkcTf6CeWR1g7sjf9EBb7GVEpUQTgmoYYcaUoQQ6CrejvPEuhfV71e4S9BwCZANqbgReXDNvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKST1sSCb1x7PSf3fKfthm7z5tGwfVp1pyWcdkF76PoQqfuBYHp4sCzNFGn5m6vEyWfkTpfFUXxozhZ6HTSuXVR",
  "key1": "37iwWR4NeJ6uxzpUTyQQLoHQge2U5pxUJAt8SFttQBK2Ntz7AGq8e9rgkW3vBQz3NTJkGRpsbrB7e32qgLFUxTaX",
  "key2": "2byjubQyMC8dUWuyr9csGc6cRzfRBZjCa7UCVU7ipCLG4HPrMHYcXrDvpnZdSxoN4QoinnTJtbAUZHXyaYfvRM3e",
  "key3": "7tjjhxs9ZmGb38VTYjwzW5hxTyj7ySfJj4Mnr4jAknBJuVrQycoFrkS1kAjYixYKQwnGWdoPG98PpsLViQ1Bc3H",
  "key4": "vrtaN7oZc3YtF15pwERviKUXCtKepdHuzYganWYZvqe7RkVqV98RzpnaWBAMz8krtbAftJou1Un1RR74oSZjSt9",
  "key5": "3ae5bqUJsVkkTxTyMumpovPc88P6Uxfyf7aF21eR49unh7AGwNuAKptTZAdS71uWaZwEoESihBgHzE1925rZusyD",
  "key6": "2RQZAaPyfWCDV3JNfN3gWwuVRmcBDkbm8QGAGekvLkj6YjzBdrQWr2czNZRj2iKEuEQb1kqLU7J9exz5RCU1CN2Y",
  "key7": "TD4ivZ6sLVyh2NCUQEq1zR9hTreRgHGDGoWAMBjMj2Ez8Q8RkSp25nD7p1Hv6qYUmUKg8jEwhHCX2mz4WxJo9uU",
  "key8": "2B6HJPr3CNxrXm5MjRwMQsCohAU38ZsFGbPjFzHnuDQqADQdy2FgLErY99nbco25j1LevEtMskvxW1JUvUkehZ3q",
  "key9": "2HWYsCmtc6NYFeUbHWXBq8LXJEsQEPjASwq9TSzVewfWAmQ3fzfEKyDET7BZ5vi6jsoapTyoc9gDf8bD8fjEigsn",
  "key10": "26qAw9pXd3neDs4CfYoRaVLJeGa3dvz4cNUUDVJP5tZGHMHuQiJtrW9XbgsY9SrZtRezcNiRcEvWkjMKAHMnY3xE",
  "key11": "5f6rBXT5qZ4KU5PyrWy6vEHbY5LNymqteta69Jh7D8Vk5jXuNjeeARCTrgrc3fGb5Q7tW1jorUV4GZw7FQskt8ag",
  "key12": "5W4aonypMkHM2pGJ3s8xvrymT6TeG3yPxNdtkGzUwED7hLufZVUBpeBxeJzQUCsG2oPd85xJgt4YqB6sWyqvCbG7",
  "key13": "5EcdB1AqW6yRyGoay2ar4CkBQPHgADrb8EuseU7mSRqfFuGFfgvpi4xzuQ4xTi2iCZKWkSkU5PLFm8L8QyFyq817",
  "key14": "4u9V4F2dtecjYDbX2PoXnrhKL9pvv94UNX11KKyZXCexBCbwVeNmGR7kVHes7dCrnn8t4NYefFnrDqn5pia9aohE",
  "key15": "4KdpENdfjsuompVcuYCNLXK262hU4ia1aKe76pXbjpVUeCjDG9CAJxPrZVMiVQhsTTEerVWhH4N8PPe1ag87u3pE",
  "key16": "5kTnSPs7vjg29mVoWNTK7rmDtGajvqEhey6sgaeLhPVoZZYBQfSZDKFaYC5RzKsRocvSXJGmyLboDQxoSBH7aepL",
  "key17": "4rgehYh2PUZY7ytESyoyb8v7PzSnVxTk6QUfKZDf5QsPRmxVMNdUz6RKbNkbQTAmQCymZo3UrzVAa1ysUfnSMv7",
  "key18": "2pHZRrsgt6UNXEE9XYm9ug2MuW8u9XmESQ3qFgwh3hBuMyY5RjkCsCdXG83KJsG8NUGG1aoDrta7CP7oqmc6BQZ4",
  "key19": "55yXGrWQMFKcaitGDVnKeYVjkxRfg52kreKmpNGAGAW2UqLs7DbQGs4aV73sfLBTKSryYzdY3FNv9eoRqjTYNS5v",
  "key20": "5bJL5zFWbwNRDQ2Kxpo4b2QubkMXdQTe1bVhGCpwrbK1fAuU6Ne9zLimkmgtHpRpHAS1zvCvqdDUhHopEHB7mfC7",
  "key21": "3ksQRSiPTtZR2o4vqUqMJ6WF1CxhZb8R3ZNwrYmSjHdQRRQ3W1SNDnLCgt7i5Nypb812xUcoa9WpXmSdcqcfsDKA",
  "key22": "3w2WkJe7bMJBRbeJ5ghdTXvd5rkP9nwKPgGTPrxjry3rfjeqSVvdyBnHrmZmyWkAdZhUdifsEZ2nozVatM2ezQQZ",
  "key23": "7FxcGxz8rozmUUXax2xNsbxbzHemocw2JeUk5y99NZf8GmmVgKQUCrjbEMdKTcAdo4nwLSn1GGcmdTRoS3SSckE",
  "key24": "2SLWSh6PXTegM42Q98ZVK6eS1GD2jDn12LnQj1aHjhrkU8vDVgPns99Frpv8wbTMTAaXdPSmcwLw38X7pueGoW7p",
  "key25": "z664GqpAQ2sin9Yg5xg5rejXJVhe7ngYr5yjVc5yRr4xAwLyih69JxqqB5ZbXR9zaMpE8LgF4gKx8XxZgik2t4K",
  "key26": "LbLChGfV5ZUeo2m2BWqrucdhwM4n4Phu18JPe3FdceZomuu1hQxHbwDhLwyYJ2Fnq6PzT2Qh1SEg2jpyVkVMgzh",
  "key27": "2gyF6QvQSbCvqknEeqpyuCfEP6GYFdLiQ1rXqEovd1Gw5QhM8f2e1xMWiv1CSXLaQ1GxpexjKcgxVg5PEQADoZhw",
  "key28": "2u9UMunuQM417eQozF9adcovk3KcvesuUgdr1NxyNJuxkkF89uTW9Q9sSjEyHcbJREWez3ihUuGBQ7Rsc36MpWvu",
  "key29": "4YFG4wjZaPatt8i1sLp9XzP4HfWs2eJ9SmcFADcK9paJoJEUwDGMsG7y7X8xeY6kk4CvzhaBHU8ikeQVVABnpff1",
  "key30": "3aLs6iqUL5NLYqV5wGdb2czdXRoKZUbC3rLSnirs6ygWV16VcdW7hn2wdZqRBVKpkYKH4Nz3n1Gns7uGueKtk3Cc"
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
