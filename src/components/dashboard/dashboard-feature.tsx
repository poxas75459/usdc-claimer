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
    "24hzJnobb3QTa3KqhwU5AytpgQoVz7aNEj1m4cBNPqKd7rt6NuEogVpTegAxoqh2Ya9McZRSE5J3vXFh8hr22dwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XjyXDtxA7wWaoGDtUYrUYdpvbsXYdQwXXfQHNTg5MxZe5XZtVAwy3qNTdd3sfXkm9QaM6G2pjkmMuVAri4siWGf",
  "key1": "3mEK9AToZP8XFoHt1pnNxeZPFVhpoRpAT1wTn6u4Ca8gJPyFH7wfBc9Ew9WiNfqLjSGuj4jgckjti7PEaGYh1eEB",
  "key2": "5k3dB9w9YE7HXBh82NajDaN8WuHU9reCEnjKYMzzoMeVhHe4TUwy2WT36NEzKwewvdUf9XkrHj7mR8QhLVKVZAud",
  "key3": "5MRyoB3Sa7jqUZxQEphiqAPrM5PzyUtuMQjQAvJ8x1yJ59GZ5kewGBcyzh6CvLGJEHrXd6gjRKCkTzJvUuCdJ9aV",
  "key4": "3WPtXCKczzE5ykYsgV5VCJsYUzY75478Qjnf6EQcBeo6rdxfMX8wMaTdxQM3kA9LqyTySonfk8TBbqnnJdSc872X",
  "key5": "22jbgqSyzr83AyjymdJeLCQpzeA7fUi7rS4sJLpYELZCs7rVbKKJP8qkYoEfN6Hs7rcNGJEgnxWeTGcHGEZmGTKa",
  "key6": "45PzK3bnNFEm79EE6nyixqQkV4sGgyFSJDcaq64sK8Hi8Zak1qpvQ13NNnKvQUSxACHh3bisrBqizQvBn9FSYUUn",
  "key7": "5kTHqioGLz2F4G3pwerQMsx2kuFKh2VqYgFekTZuA2zC4dC3VBQLcbbzEH1Yop35FVcho7yAkP7euuybsEAQbPFN",
  "key8": "5JT94PTJ2V5ktDx4HK5KvNokQWnMmq5no7UW2ecsZEcU6Ysr2QJu8byhhSFthpRPQaKqyxxhpUGjGZySbKuYQWRX",
  "key9": "65NBSNNiY4FMyYpr5N516EnT2uLFfDJ9mZE69zR22kU463PnovQ9cg6A1WmQnow8KdXWth9WFYNAN45KzycPufvj",
  "key10": "5DLFactcocRkASruKCTZRDrWvNi7diu1utALEFbvqFtF8nZ6jsHCsXjw94fntFEhyGTv91N5AhLAzNYLsvyqjr8J",
  "key11": "4FGV78ExmPdR6K7ddanBwu1dBaLwVGGT42P45Y4b7nSBrnTPm1DpzNEmdXGWVSfD3HtgNtqvCndiTAwQmLG6a45Z",
  "key12": "5rsfhE2qMPrKm39rwdukgemxBtTuEWBpATnRQbDZrqgPwQLyypqwe1X9V7Fjx4yQ5AhfpyW5X8rQz8bwxRjacjXT",
  "key13": "N93qumrcNaVVEbtXAa3rP5oAftpKehTP5F69aRVF6edULe66mf9LQmPcHqKRHDkc1bzoDMLj29SwL24SN1fPdBx",
  "key14": "2BRovUoiqSrNjXP3pgTKpah3ckmkuGmUAgCxumhE73MkBcT22ramaSjAu1JyKxMGoR4HM4uJiyUKodaQBq6XWG62",
  "key15": "4Vbp2Pemi8BxigbdBnwCikDYyiBSKJ8sF8u7BcQwdUu4Gp6woHiPzDN1XGNmwiEnez3ThdWATv5ydVcqSnwiLtH2",
  "key16": "qnZDGdyjdAMKqRDbE9uHHFg1b7Qq6PwwRcibnmnJnhytp3UfJvDN2gHtWgS82yhrFFqzMcdqTEAs2nFgjWbhu8L",
  "key17": "SWMugM4M35wrSXc1J4hBjbKsxYPHVXQQYwh4P2uy626WJxK3kaigp8tJC5tYg83ACNFXgm25uUqAF61oxBDNzWq",
  "key18": "4MVajdPbvCDJcRLTAT2bKrZ3GHxHpszpMXgVCktranzzzjptb1jUxPXqs1Sx4mh1BmuKx3BoAKzKnatjEiTsmNGe",
  "key19": "WobHkofdsxPmiXsqEFWJ93qqP3a66P9XzpByEVsWCErgS9zQWL44ggaEUiNeEmxECPnMriqSXQ58wVrxMyQvwHz",
  "key20": "33Qzjj5wvqNxrzvRqAopPZp1HUqrW7tycivusg99aGtXZZ7gqjP43XZBXxWMa63NspMCgwQRRGYMkzLofqzAiQy5",
  "key21": "4gUFj1YSSUSukZiocYqRuJYL5oQM8yJML5bgdt1LrXwocbVdtDQzY1kFiMFvGfbLmFn1fSct67E6txpvMogUPVM6",
  "key22": "2SLaaVJsgbhMzzLopyKTNtbjCFPmnNgE4xepy8KbFnaKxfF1yBiRK6xNah5UVzFRLYhmHYh3RWTtMeCGqhgw6Tcg",
  "key23": "8D8QD5bwKg6qMhmzwashXoSmkUrRVU86cHcGizL1nH5nYTSizXhMm1hnQYs39XGNprQag6AvTdcy78pGeG96WtF",
  "key24": "4anc26aLZsb6HvGbKQrZ1wiQtkt9aeLBwuaVV6KyQurQzo4CnanAzFo1age6CfMT7tCt6RWxDiCnz8Z6dUNNq85T",
  "key25": "JhNbQNEGpYAzAebGKzvaKCEwYZuz7dzCbs1jVNZyGA8ccajKZUgUaCvvd2qgvVGMWo6DDxmbyoRhzN8wtWJ3zUp",
  "key26": "4nihNoJa7XMAt799SgyKPSKVnQ4sX6SEgPNe3s1p9LanN2WhBujRAHHTsPphYzR5HLCpAB3ZitRmUr5Jp2A2VC7m",
  "key27": "5i5D6JZKyGC3s51hsDDLqTUpiUQKz6r3febdM4Qz1uUKp7mmX4J2qksAN6TuZVApGHzz42F8gxFBEsE6achrbf5R",
  "key28": "5hkC6E7q4Bhfocx4D9cx5AVGmKuxKxWFmfNnt5UgbZLAMiqY29cJMai4i1vtpwdcLq4suEH5KtVP5HwJMUPffsrX",
  "key29": "2VCxv9AzhhQtQa6p8Q4qkv9zUcj7xFoiv8mFveoEaXiHMLtauVP1ycAJ4fEZkbDSmobM3VDg2akjNWbKrmVAkGwL",
  "key30": "5xoWfxdNPq15xFLGbyYGdkhi1VVxhNgUWptaTept2GUqTBHqKa6S8vN8QSTMkUD1UyXiRHz8L934TbAoTaaifxbS",
  "key31": "2YC9ECmrKx5eWKQJTaiUEUu8Ug6zogNAZCN4V3L8bgxvT9YLbVhNqTrtmBVz2NYzz84usv2hs9u2vH8oWXZuGHwM"
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
