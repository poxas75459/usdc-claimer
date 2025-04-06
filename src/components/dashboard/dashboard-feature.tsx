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
    "YvM8Af3HDDtFAecssDtRCbFr1bkEzFZSaMXbjVUvUb2aVUrZ1ZMsgArXj87raxQMtyPmHEY5RYS37YojFom4SEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqD4yKh6yFkUkKuUoZuJzUeryN9FoCwqk79ULpjjtmsBEx279YmonUpFwy33BdYnRc4D8oDaVS7s2g55HZRLELU",
  "key1": "2yxc4WJWtbgWrJAFeMJLbMCahzEGZh1LuVNKBSCfBkcLBFbNZURQkNqJmsFcfZMr9pres88ir4WtbzrWf5F7Da2t",
  "key2": "4C3azmAMPcfurSEhtHXXgkwKfiwF1NfJB43CYwy8tSwtqcrR53sSYt5XRbTc23jSWiN9TDuoFo4nNwmrxVqwVNMk",
  "key3": "62BPT3dh5yW5SDgvQczkCyTucyaGUMNJwhyV1jWvtGwbzKivJVnJXpJUvDKRmR22jo43fk7n8xiJnumAjmgTenq6",
  "key4": "6utiE3XCfqGRA5HxmUmQmuzaXnjq8Q6Li87rhMBJzMpZG2ob6vg6Y1agDWVg8DFp9ZAjn1vXR5CgQiy296RLeQF",
  "key5": "5qN7AhPap5jS89qMUJJxgjBLdoAwxBmTLLAhi6PLJZoETvsLJaNc3N3jYfpKou8tdnZ1JpFuhXbxPyjX5u7EthGc",
  "key6": "4vQhaRYc7r9Jx8HscNqJHaGRLwctAfTXQsYGVwHbrVpo7zPWoC9hoW6fAS1f7Ew1YfBauqBqs4y9mshaqgtjYvC4",
  "key7": "2cC6JQq1g79FnKeJp6bq7SPPHdZEGN3XBKr8PYQDB8ie8t2TXsxrX6jRvaxindTakhpysXoaFHfhmGozUgPHLEba",
  "key8": "14a4bEmwPHAs6whHJLsuBp2ghRo3q2qmHw5xLCScYvwze2k4AYPpJHkMLJrxBnEozZaPFkGAhMXZSJ5oKHwdsKM",
  "key9": "47dM86sxzLQfEe2MBnZak8CQ2VRbnFvTG3XUQQQUahDJoa6KKANM9WiGg4yXJGhgmVg3rBJQcMaeU2Dx9BC6USzd",
  "key10": "4YTXd9uJJqrq4C67wmtaBo9ipTSTCBaZLGoDjosyp1RZ1YUd22SAioyZD4LnVKpG7dtk9jv5W1dbbm19DKS469u",
  "key11": "2k5eybr3jwxGQUraVKJNzy3dYLnoXM7Za99NjacGYxEaDU2aRJDKTW8XqGSEmX5Ytq2QPk4bhkn2xJECwxXaavbN",
  "key12": "3wQLNqnfVd7HfTeo9MJcanN9NEotSvNfGKhj48fFXediJmFaUS4Wufu6pXqHkmFWQGKJaBzbC6jCmHreojZaE1iM",
  "key13": "41kupWDLyp5ihqmQP3LyeTjxn5PzUjADfbXZFNGarp74AhNTp5tfAn25G1sQj87XVXhE8zfRkdRWHm5UVa65wf3h",
  "key14": "mNFLiwjVR3xtrUR6hLSNk6gYbfXnTReLkpGHNvi3FrGPf2isBXxXWpfvPi5jBHL525QuJMdEmZdtfrEoUgRU2VK",
  "key15": "GQS6X88QPNJKMDqs3nFWBrc9JdspZM4jos2zCrz2GWSrHmpax1XvJ2WjaxXuw22BE6K9juuN4rfWfsnrQtE7A6u",
  "key16": "VE9MLDhNJwzzAbKvqQRVpiYtQsJ8XKZ9jHcCdU7cMfBgnbX8xq9Z5K9yhLpDT32tt6PdQE4YqgrQNHsyaWQCFyW",
  "key17": "c7djHxkx5kbxdw5Xhw8VVwKLtSSemJaC596PEjX8UYhvaE3ppTVSjx4mEK8riPgpf6SxCCd2Du6wwH4zSBQQY5o",
  "key18": "3LAYBD2Gg5ye5cdQhE7LvQw63cWQeQi9P4DJwLJWcWdzueWytUoSSvbJgdi9BPvdfoVp2SK1ZWKxFRK4wEiTPxU1",
  "key19": "5Q2JZXqDzDWsCPPe15T6QWnCDc1LwnJdycUm7yv7xDvHHpDwqikMhgQJ99ubU9qgjX44LpN7BLLjS6yGaboLgro4",
  "key20": "5yr3niFDtwEycPsaHekscXiLnP3ztwusd6265wBQbzWmQzRWxh91XnEnKuxzYzxXLva6FK2EYswXQUpvgiALdmtc",
  "key21": "4qEqQhHpFd6HeKR7H5LKjukNDjTtT6gxWCmrBBvoX55WzfJqUmZ7av8AKp4xRfk7RLJv4aYSJnYAPmLEdcrWvx4D",
  "key22": "ZbDPHnffAdvWx4gsBoBHJ1DCMcCRYRoHRyQKXgyvQNot4B5tC85jur45iyEencu4QMGktqh2m7Ygo3B68xxZHyJ",
  "key23": "5atcPmpyhrxkqBo6jY56yKXk9axgtmBUWpFNu7Ftdgz9hTuvZhZHWKovN5EmVW9F61s1ioB9wi7ZkTjuNesRVEpW",
  "key24": "3uWdBEsDGa1jvPgQFApQyUhhsyZH6eyZtP5o8BY3NqaiKLWea8Tmyisy6gZ4G4JeZAiszPaCT2y67cdqVSBnjH2A",
  "key25": "dR3vh1dhpgRgZ54yL5BrqNkCNkJKY1wVqix7JX5UxYJmDF1ZwWrr3osCQKoKx9FMGgJkjey2zpitkQSPat8C65o",
  "key26": "396Yf4hvaMhhgQDR5zAiHjZYypvHo1PbfYFyD3iq4HvZL8Xy2HZkxiKmeLRv5vmE4egVGQVXzCx5TVsi3d7zDkYm",
  "key27": "4N33pLAMW7cpPLRhB7g2zMJyvrfhjKpKQY8BJrj8wEvKfZcfJRzYgVAc3tLZbX96CeWdgaPkgeHvKYZL621tpSxY",
  "key28": "5URm3bwEhPGciVCnBYn2aJTiB9YSQWGKVDn9W7ayUQukEpJMjPFGDoYM8iLATw1SvcqzzCGLNcESVSHRL3mtcm2c",
  "key29": "35kDkswKQJzG1pfMC86BXZWGMUHeFjHRYpjrit76U66JveQvLrgWmJ9ae9J6VYCKs3BAbyrxMyAVwhmiK5j4FEcG",
  "key30": "3SCmHspCXtT2Vsh6otaKbBvpycqAHs4DPkTvxDYvuPr8tL7Td9jPDe4o1Ki62HvVL8zmm6zrctxzur6WmJcMeYF1",
  "key31": "5BmgybAGx6faeSvgWwWm59WEGuqPqbevazY9vWrn78VQg4UAChwAMbnVEY2X5fpmVkekzFfiJFh1dPLsrzWMveHY",
  "key32": "62sWxUHo6Gk2yoC7Pr4yVw2jvSDym1Z8HuTbRTFB4noyFFc9JDgHSuAk7mAoBuJbAikzehVuXnomc62GmhtbXY61",
  "key33": "126qafeifYXSdMYVdCo96PALy3rdUDGFSSfTKo4XEjPysLXyTpf3ci1QyqhiVveVWLs66TPg5KWSwRe5w4c4Ex5t",
  "key34": "2MLhyRZHuM2GLbLWR6RTiwQahCCsB7qTwkk7zUzFJM5GFGsk2C3QXj4Ad1k2FEswesVVrAnGVhJVjHkCAmchBHfR"
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
