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
    "2MMayz4JBG3UTDEzLLMY9FG3VrXR2M84wEyDwRih1tLxyYdFtmMyiAejRjkKiv7qHw9vFc1uatxf5sGVETf9xLqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFTmrM1JrHzn9L7cLXuH8WTZH68qMyAJm6e3WzhGT67bRdym5RzFHm9Amw5ibxnQkgNpiD3zijyMm8fcAsMs1e",
  "key1": "3xhYG61zV88fPFChfMm1aQjM3vgDTfeLSHwjeyqMQ3qmPDscCxyMDhr241kRgy2a7WTkiLZrcwPwcWYX3q4ev1Aq",
  "key2": "48oxqm16tDkm51qPmEu29KcSfjPH7sD2XALWBYwhPSYyp1vcnP6nZjTp49s9XMc3GVeVd7Ks3BuwgEWFRGaqJR57",
  "key3": "NbTLefB5mz3cijN9v8hNxH3XiCvnZiEjeS4hGBv3mRUjuZ2u2B1yBePxing7cJk7ZruybELur36SiKJXy1EDRDd",
  "key4": "2dk5XKEaUsN516rFnrjHhw5GN5yHn8CvePkZsgNEFAaJALERdxtX5kvFmosE5YzmFn9ffuHB97tCgA9TY6m5Ma79",
  "key5": "3Y1k5ZrTU1zRwPtaAr9t7iPaoQQzBQW4fp18sy72vsvcGA3ftHex66yMpVynRxEZzbf2Z3LsiezNT6MSaWAhE7jb",
  "key6": "4ymJSryisCAqasjp771ExDZLZt5Mh2a4RgxMw9jtVAJWBiHvRtH7PUpk5uhe5ay8cYwY2q6b32kaZVNKkpWKZe7F",
  "key7": "3n9qeBNUXzqhRg5FgRDVPtytdhTLeHPX6hyoboo9sJVWJRjxhmD83doGqsgk8TYhuHc1qZHW8E9aeLwhW1RY66sn",
  "key8": "277UEX4fWxDVBHhqKS5235rqx8J8iMQeS3ffWrn83L87MXkw9AQ5qVpxiYgoEif3mHpf83Pe1Cr5K6vAdgHdqQno",
  "key9": "2kGxAchn1UcAE7yZ72Ej2FQkXenfC92sTKgQmwVmwb698vBHHw4ZwmzAksVjLXWmjZFpSy2sqzcVuDoCFmpNo8RV",
  "key10": "61hCHpbq6aNkLZKqtahhv8SfbwxTctKKWazCUbmeWyFewNKLcBpZ1fBkTbV9MrXqHcAgVdUAMwgYpK7EtyjFnjHX",
  "key11": "3MhhqMWYQHNo1yGoCiNJYxKme1CWUWzzzP4tMDz2RGJdqiP9kCUnfM7nAPU9pStnmnXeVDKFrLeRuSc1ho6wSFd1",
  "key12": "2Ejkd11HyR877tCDt3oH9uqutAn8F3Dc63pTG1m2dr7RmrQVv9Hd1gEkr4EbJXm2HuZrkMtc9eSNFbuwVnLjkqS1",
  "key13": "3HMdKHaLgGtx8WfBdXibcHXoHWohjxg6FgaqBDHAZt2WXGtPQezjRhXktUQPDRhP1oD518Lj8oKmvF2cyfvV2yJF",
  "key14": "3FkvZhciBVMB1oAC1JrXsWSBevsL6E3kw3Z4HtgZjb4amPJVaepyaoLc4R3Geix2ETR6VXxeuRhg5XwVR56hZTd7",
  "key15": "3Vw74xRhzVbVoRtxGqYqdSXF1Nxy9fQgCfnM4RXwpXQBP6MvA1yoM7F7WgPgntTZVxqSUiWmwoR5XMYwFfwfGT5C",
  "key16": "2FeSj9PNPPrQncZYUiqupgk2kAbLcmuCuqu2LQbHAKbvW35tjwaVNYJfMrrMB3xpCZZZhD99VeuiPkJe6Jk4xVay",
  "key17": "fTwSj5SE6Hks7W2NjDEoxbyurTWZfB3U4kzsjDgGE3p6aKQANn2gz6xH6kKE5yLxoHjhQKfR1iNLR8nqzh6X9kZ",
  "key18": "2ZQMNx8JcqR1XkVVcKCFmmkcajBcwbMfPiiKkJzwTQn6xQvy87b7MQ7mFcxv6nhg6rrvJMVQeVtV8sczTcK3QXGC",
  "key19": "4gk5x5XTaUNo4iNiRX1MoF44UTEcXFd9NX4rym1kFWGTZmAt1zAqYBe6KX7asRqztRbjFawH2nn3Ks8F9DDE5jA9",
  "key20": "2vNSgWbJ85RuDHHVrjSeZLASbKGJG5Pemgxk5dHXBNJeAcWjkZcRnAoMVQcz1iM1cnBUTsZsgHsT3J6LSEUctvzZ",
  "key21": "5bcAyMnyZY53aQfqCHCWpSupcvh1zSdzaYvvyMWsj1ucLQJEw5b4KWhFtpa9dbZaMKhqJyqr1wpCMpD41us3ti2N",
  "key22": "vnWBANgd6DzNEEWM6jkgmqgb6VR72QeUy53QV9Ncs4THqLfKFQizA6er3wNYyVyot9gpJZva1er35QpsnDdbbq7",
  "key23": "5qJDndAyi7smuTc48obCmPfhMqnE2CV6UTKAsimjEZPUGHnX6vqc6fbt33TBTfPHAECbsMLuXWyrYqVgRYXC8Hs4",
  "key24": "3Mm623pUqPfuYZzqLtvUnSAcGXHBcnqUtKASvZJEF8sFC6qsKDyGw6KGumBdeJDy2Q8x8bCjeYgAe1PhecMwAksF",
  "key25": "5u28EyAruXY2QAbN11i8U1h4vJKjkKqNTLRjqpYPFG1QjKWK37s76GXfdcMXpKVmFDr7zMXd7WSUUERPt7rBLbk2",
  "key26": "3ZZrH6yFKSsm9KXzzVFfMBk7mNsb8HRqF2REgV1WmvM1QYEDj7Za9NJ1SCF2Ef3R8ca7hwAEvpNZ9C9pUsQscVWz",
  "key27": "27fpoAxU3zSAA51vbPBtBFps9oFwLPuXzEnAjUpWrrtXwC7qrEwhC6SyfRmsvGnGgXwUQChBKqokRLmpoYoNSvTQ",
  "key28": "2DsprsPHMC77twX5yikfidqi9xiNv56RhBFhzv934UkFtbvKhjJ3kvqe3dtULZF73v9ARnPwQshHy63v4nc7HuGR",
  "key29": "4Fhc5NS93agcK6xWbnwQEsp7pmwMThEggJPLg24jH2ZHFtWvyMBPNbrw51tugWZPzjZSn8yiBaNL5NeJE9658hUv",
  "key30": "5GkZBeDErAQDGGLwHQ7eZYa5KaqcqSAC22L3WyFQUKryAFMTDyGEEWyCtZYDdRfM3fHoWTZ2PRRjPzaR428swQYc",
  "key31": "5C7bG9JLhjHq9pL9xzf8vhUDzyS5LA2T3zEgJ4ym8aFjCwwvd1wi9MpyUTZod7N1zQYnGScbVXqtHBvNv85GX7ev"
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
