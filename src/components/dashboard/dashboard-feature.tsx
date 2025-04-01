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
    "4CwaaMstcypzWPAwXWmN4Hhyc2HvuhdWbLtRKoZEuPyTCZG482nQyX71pGr2vPGvt3DaKCVETHiFXLzRQzjLVKWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skrecJ1MkcFe2SiV8DtvxsPKAhSK3hbmfbpUtSw9DyTPAAD88yUGEgkp23fzxVssopm3LYeC18AuYt9QYn2Gixq",
  "key1": "2yX8stjXLKXi7ZFAEpZFoaJcLamgTaWZg237k626rX1RMTpPm912vB4Wr1WLi2YCG2Ac1mGtz8UQvDqai6QjQyH6",
  "key2": "ScTR4fRXvri9qyT255sGv6TCGWeVmYL1uwK46mRsdUhjkT9T15GFRsDi1esDa3TwHFxw1JF9LDUmuCjowaybZ52",
  "key3": "5Ybi8VQNTJWuqXdQLJMCuKi2Tuf3ZpJN6ASsm6Jty89urP6dKtZ1SjJAuGVSBbsfmYqH1xw9j536eNRrM8w7srUv",
  "key4": "5h21h7zUB7RgAkMvGM5a24rAXB1dpSPRrWkNJqaTMFYZw9mPbHG28TRp7NEvGiPnTa4RhZvF36wYrAxwzhRfiuG6",
  "key5": "3gf8rjbaeXMtqMHgz7LY5b2kRLGt2QMrwi3oai4eKwb862B5J7MFpHPT3HKrkqCvHKLC2zW6WS8gWJNqghzezLHx",
  "key6": "3HnrWWyECraQADhQ6ox3bfNKTUT9sncHRHHrhQ9MiQiR6RBNvVmsmXBHKv35CehwKXvb6EoHDUMTGwEAtV6E5g8z",
  "key7": "F9tgbnwxFP3JmB3TuHPVK1PdxbH75w4ZCPETSYMqfqt9QGUYYF3tC48RjfysGK27jVzowRnWuLyUQMMAfzYjrh8",
  "key8": "gbQ9u54qojz16A5KoVVjuXHBXq7A7DevB4nuCxaQcnfTf5yVSLq7D5JzAtasAYVT6Gk2EGR49NV8nqFM8fXmSv3",
  "key9": "3Jk763S1kJ7qVsDDbQbttqbiCuFofxDPY1PXxuxJ3uuHjKZHkXDqmxRiU5uRWo885GXeEzzBnZPGqvuPumyNhtE9",
  "key10": "2aBsrfbkihEobequqeCdzTSzxbRvoQo3cPaB1bSeGS5vnG6seuq9FcBUVTxtDvhAde3mSpeAXjXQabt2GsogSL5r",
  "key11": "L5aiJWMhuigp7hbNedtWLBjBhqpHKMKoX9qBoAsktKAN7wgCCqXZFqPeSmvPU9wyFKXoHxdhRaoofppvkiA4YYp",
  "key12": "2vmiXqvdKCag9fjLWidWTKxgm57XyQZ3xQ9i6hD2MufLvCPDz4f8MvqhCXeYLNC1VZkYN7EEtBjfEcDTssSQKs7j",
  "key13": "3d9NL7do76XEGrX33Ct8DWwH4Snt23Mpbj6iVWN1UnF3o7Hp4GA12iK84gWRFdorZN1L7q5hxfrjFHLfNrUHmHzj",
  "key14": "3hy3s8Zmiw7JjdrW6KtBVFUvr1p8mS9N4fF8Wx3pAEasFCri8FJUUULB7xThG5yEsdDHVmsMCKRDGfyHKLsHESoL",
  "key15": "2NGKytV8w89LtEKTGU7UsBoZiZgVC35wvW7paPYbFS5L2tzj1YeVvwFVSJ4VGS219c9BC9zVDm62Lif5MVpjNQVn",
  "key16": "3nTKYRfH7z9n6r1AikghrSswyrUmgXSGYhiJ5QihvAQmqobi16aH3jszrvUQf9Zfpp3P5k8piv2shPQyrMMoYfuf",
  "key17": "4zNGH9w6nPcZMNzi5Kj6g9HBX4a5moZcqMNGxRbFqe2Gsi7zheExRW49Gw5hxdhenCV6VXaQ5ntLix99fUrJKZTw",
  "key18": "m87cY2ptE7hS127BYoFhCrc2ZdJYbrXDGr4WexKq6h4p7MhWUAG2yr4hGXNGYSLftWSSzWNugLcWwLAa5zWBm2z",
  "key19": "3CtY3hq9y7urgG41EAj4DAe2buAsisNDYHei5gnbga3kRqDPQ1CpLp6vjtMw7r7R4D1ZHVo3PyFsbfdcWWtVSxhV",
  "key20": "dsvDPQ1b2t5AyzCPmgmx1uG7GLTrPa7UN7ToaboJeGGSuRwTge5kVgWBcApnvMXAKxagY8CRVZhyzTAryEYL1HL",
  "key21": "4tSfUGDiEHnhriTiRsbBY3vQxMPX3fnRS3AAQ8weagYbef5w8NfJNkJSYqY2ELzZZdZ4v8fhqJCer3oZWy4iyWm8",
  "key22": "3uqN1aUCfRBA1bEqyKcFRX33h51fGxjqMcUqR3L4GK1icZXSwAXS8rtcf3MiwT9hnFgvYdiCaaov7UNxiXxEMA84",
  "key23": "44kRtcnEjPk1atcpn358ZPL8oZ94BDJbCme4v7vNu6swgvrP1hvqp8DHUUHbzbkDEtvk6MgN6roVjDF7du9L5KpA",
  "key24": "2W8HHELqTVYhHuf2MAnKsZH297tb6kxPLk9swM1EwZi2Lq8qrqkbXZX3Kk916oebgMNz24FxBXRVbxDTVTx8yWTq",
  "key25": "3hLK2yScfSQyfq6DHULzJm97gSM1TLSqkMckb9YsHDYxZ9WN85QRwfpdoxHmpVUdKhW4wnd4VK85529FxiQ2xLkq",
  "key26": "41wZL6rQBz3Ev3hmpgfWMf5tvn2Zt7NWktxVQNNdyp42v89oirzDA56pnX2McYqSwp77TS5hkCaMKms3oM6t4eaE",
  "key27": "2gMGNBJTWsM2JqJmdEaYfvKkH7VuKpwbb2JmTbekUo1SmXj9cvsuVt89ZUW6uBQ2bRJu4bwtv2m8vjbz4opSKAuP",
  "key28": "PC5rs9PpYP1Yc7FeXoqKVqkR4zv1yub7d7qUq7fvtwf7buNCPw1eTv8H6aexenLmKS42x7gF7qHiQbVeJRw56AF",
  "key29": "4tz9W1m9eJGyaM2EddaFZJAXHExVJJJByw2gTUetXfHZtnrSYz1Vpma7LponwL3JBU78d9sfWG2k3rTquqK5XLmx",
  "key30": "2sAAbxDMKw5et9xKmdhtobCoGnyyeJXZ9inMggH13WrnGYVwC3q6Z6Rnj15G58SUGG58z5zthAyCeGRF1kVitrw5",
  "key31": "3bTQRVCxgLieLFspPydJk4eS82WN2Hf7QFekGD2v86TKbirYG3NghuMJR8SyP1Rkttmnevrs5k4hp2o35vUBErLG"
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
