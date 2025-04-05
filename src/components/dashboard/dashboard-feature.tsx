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
    "3JJrBJL1UEiXJzFKaUfEUqQiVtPvbHk5zh7byv2nRU76PTnPEBtaANKVjLXZhP1nqneXMPQm5hyEHkX5pEhxYJty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fniRvnjvUtrxSw4UkuSWUJoyUSxzgiRvZ8kh341V1YcdtCKAbUhpQsA55hJo9EEkTxEjp6w9udaBQnK5Z5MtLu2",
  "key1": "3wgMDWToSqiUb6EFFwxJM8EQdfKnDdco9H66xSQnq7Sb6xkv3D3WqroxK5ywGzbdtJSvdke2XaVAerGZxCs1ikPS",
  "key2": "a3zesud7Z4Fw7rqJSSni9pLu4hbSKPJoLtfWPs2otTP7cmYawHk78ToZbAA8fd8iPJh2zZb5uCzdcRffPZ1do2g",
  "key3": "4nbKRcgYDuiqfuPxLcixYXHj4fctnPZbZsW2oXToZXU2zawj3nrDqPsazVtRTytSZMVkZVzkGZjRRsjTkkw9H2dr",
  "key4": "4M7eWdVzGHYrzVP9qvCebN6bV5UtX17bgt3wCWk2C3tzRkQLDT2REcboS1dhRmF75kfqBSf1kWKgjf8HU1m4Rdpd",
  "key5": "67bwy9HQEE7ThjV96YmND5U5TK2NvTL3Fn1pMTf3fvPeGd95TcZGts3EQxKRTmchHiA8FoujEUapww7kLKkeybJb",
  "key6": "4dStoW7Pc5DnGSkADcMoJu7dtnfN1qDSB1eWCQJHgtu4bjkBjj37KPuCNqBVmnne4Td5cpALR23GeX7QgR8D9pyV",
  "key7": "ChZ9NBbPkKWnXchyArhpZ72Me8oZwncMMopZvz6XDuWbNtVP24vz7aFLUZZpeYuN4fka3mv1jervc7ibw7o82if",
  "key8": "bqU61JTLMSVceL8xrByhpFkQTVHhSUQ1AVrBveNVQT911nX8Fkj3hY1vwMXbLqmtBN7osbp6KSVkr1YpFrAyKxL",
  "key9": "oS5T8yy8AWAEyRqGq7dnKi2ybfKJC9GukwStbiu4N5x8cQHuWRh83jwCebUZTLUU6VBMs7DrJ1zGyHcTbTQY2Gu",
  "key10": "2cG5t2Zjw95Rzv8yQQTgXMunzecPJ3hpW7qYYCoSqZJkHihvudtVCAYKfKyur27h94kwgMV56ST6Qi9MAgPcFJP",
  "key11": "64tJdZ2NEjJcaP6Jw8RvLq5x7VBZ47gc2TmstaEQuuFHn2KcZRWQqEcrjfdK6EhPtexqQhSfrXL8sc6BEjFhJteW",
  "key12": "5Y6XApFaCFPMe5M8kes12gCUR5brGN49gmqWbjiy5eZFLaYxYsCWNPJx5CarCRbEbRUjN2Vu6nJSM97WLQgBY9Kt",
  "key13": "4bs6ADRbdtVo37m3efU8iBEEwuBN6znFTfDUCYaKX8HoawMSKv5ec8XVHHCYEmeNp6G7VTHiKF21uNMcrnP4TC8A",
  "key14": "4nmKJdNok7LGSvCMeqn4LYJUBsB9mr9DHDjrPywVw75LD2t1MZtqUQihwUGagPq2upL2JfmWBb4BocSfnhxd6iWU",
  "key15": "4R5BPGMbY35bRuk65k5BQVes5wxxgLDmV4T9Ge57C4snBRD6CxASCTTFj2c2VmTqJAFNeY3kU8yw4f3GL1SV9vG3",
  "key16": "J8fJteaCvQejjZsrVvqSy1KW4E2p8nrVJ5ofU5xLxgNYtAR2BjEXGt7CEsJYjZvmk1ijYUBNqA8Kn5AthvFdzY1",
  "key17": "3aKsMHyLv74jYzEv77n24L4iChMacs8v8g66gMkMnKdxjTojB2TBbQMGHvGWRGuMofzCtsjfw5PDRratnGAYsAcL",
  "key18": "3MCjPpCUDSwjrCwmLg5ezgLdgCs8tgysjxSu6RYga7Eue545God9XuCuH1tLVuVTqcBuvZAGdUjnh9qHSwfKaUER",
  "key19": "2ybsg61KKqR7kyKYNwVMoZPLnRKtrjzewBetwfy5U6xjp57hKVoGdftCjtgnvKkmiUBZyVfVK41sFUHACosCbq5U",
  "key20": "Mqxhij9rSAS99KNgzgng1SE5jST21mALU9mcW5rg8oVFfQKkeffB6ArHQXvre7WaQKmyt79ocEcxFeRnog3j3gr",
  "key21": "2xAvp6jWggRjh7crLtC1GmDpUxGywK9GkTNY9aBg8YNKfNBj7rdGh1eDFesV4wimA5wVVHUHhkf2oasHJ7NyDjeK",
  "key22": "5ttukgdqmdUXZkg9neshLkzsr7BwzAN8un5gVpASyaMFkyiX7YLvrZNvXMTuVv3N7xXaaQFuFgyDVxAsLEahP7nR",
  "key23": "3pPc6YCmsHp58Ji6CFL7LxkHBEcesXzrDLReFyCE6egs3QsFeNL21G7cxjg1wLY5Zuot1UgqyLPmdabQVgashKcG",
  "key24": "AGc6Zq2bGsVY6SqpaSKGjtYqPS1ZYUeGF2pPpjQtCLomzDVKns2ju9A51Xme8ccYkhy1ZLZhWwxtZgcFTW6gqyu",
  "key25": "39hQ1FexE8ibvTYuoebLZc8Vsmv2AxRNuCkrHHJmzUHPefyP6V5ixq53Q4kiAC8d9vcgBuU11AGU5vf31LgKhkLK",
  "key26": "2qcDWuoct1Ymcmzb9DwqV18AuvcjZzQodoR4Qs271PqJxy3euDBkWDmwnwMCqq9rYrQyEbrqks1crwvFZ6BWm5g2",
  "key27": "3Y3aUM7zLTg2TGtQiQHyoKKbPwpYDPZkHVmjq3UvE5JLEtBdr7BqkWsYYarX27NRmuU3yDL5xmxHNAC8afSGU92y",
  "key28": "5M8cT7Ao8QgqLeM4VCJPodaUtNrtRAfvqRWBCVSyZD73P3gF7ovg6EqNpfyx52PtN6oj8atxy6jYnYkXseo57dyr",
  "key29": "65fnkU23kMHS6cK4WsrHcGfeJiygk4LhYnCqzB975PeiiAf9SFKPczvfkn3BnS9n76ee6ccRVfccbgWBATEgaYBU",
  "key30": "sr1ZjRGQ5Yc7ByN6Lon1C3o7pFEGnWd1e4JUDT2g8cC35v7A7v2RqvMPYnL464wQhDJ7idfEULvfD13CvfCvPgM",
  "key31": "3j47LWwpWeWac9DGXMjEkf8Mkyqo8f6QDtsmrqiPMyY3JT3cH3iZS8ygP2VZokntQ7455Ar9UNnFJaxW7qybwkFg",
  "key32": "4g7HZwT1Uei43fQtPodNm2wHMijpZCW4ATbvk1jnqCCj89hE2jQRthfPJRSAEBkiM81xpGsTss1EKHbdfMdwn4Fe",
  "key33": "3FbPMQ8TSqBbkfqrdxaigH7iGKx6mWXoXDDXnzZhxUZVKmoqPFxcnQuKzEXD3tENdrKQWGivnUKmPaCneYxvN7UA",
  "key34": "5a89yxjaPuCSCecP46U41ovSie7t7GqWuLHURWAFtYbnzjYR3g3ahMUXaQVsNYZ4RYL1uCkHfMb6dDjDXnyBwTov"
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
