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
    "4ByGwMNrQaZKd8Um9rUrdbxSRHjtM3JU8HREgd2JKSmSfswjgdpPkANbTcRqwuQQ1YYvPd12fZyCUCo3EKdWSybc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WuddW2iyoymEJVhR446FZ5eBh6SybEKeESCGrKr2fYwBUmchjSG8czCTYJoLhtAewsqFoc4LPzyL5FcEheZvAQX",
  "key1": "2LfAc3tXMsBW3cKbF3xVB6AXtXGdvMB2urHkUTXTZe5HABhYYDKrR9N3Ezn4yKV17sud9YVrAJgWzxZZmB2Wzg5X",
  "key2": "sLwDT7n2ArFi6cCSk1vZeD9Xxi7HjjuhtmvQC8w55ducMZH5V3qK9amMWRsJPFC2zhVGCDH7FswDYiNCpB5vf9t",
  "key3": "JkcNrCpBy2P199LctPYnuGcCeo6aKPwiiALRGHtHrVSfxX5ENKDRY47ZchWo4nX7Wyu6Wwp6t2zbPb1beHGHszd",
  "key4": "4v1eWx9dAtVHPYAuPdYpABACjsnQYRyaWQdpEveA8ydRPk8aiL2B3Vsc4f6hW52rAePAB6Pcwc3NubGmK81aLKYN",
  "key5": "3A5wMHiirRyB5gXFv6yNeFANx6JEfKW4uEkD8NHsVjjhwUN2GdHvKL7wNVBWubwmy2xCiR167A5i5ds27AXJ527Q",
  "key6": "52DzHA8MYmV6EYpPet8q2gkh2GD5aZyPpBm8mdq7WTwMrgYYAHzcQNgufPKS6vxCsp2xN1Srdwxh2TQSMkdwNNbj",
  "key7": "3dt694oMntoCrUooFXKZRV1EoV3YFKqWHmkFTipTvi3zMGmCDRvGGpvwkjircYpJTHWEKh6u2b7goXhxCtWgSKSx",
  "key8": "27c1uoJ3ZooS5YuJ8gWfiDJgygHc7PCThTeaZr7Ken59ehdRXsnGSqRC9uBUuUHcgsGQFoNfmCZiywAoPVrTGXaX",
  "key9": "67D2m1nhcGEVwMUcThbdoB9vanUdri27in5cAyxsMd8WEfyhZBZ7fWuo12SHcQhF1qkzkXpz5ZmMzWfMz3nK8QiD",
  "key10": "29CrzTJu9sCoYGs1AcvJCYQ6JRJYx6vznVkZXwnaeDyX1sRv3qQcE2YK2Dv9v6B6NZFUXvgRpF3pppvfsiPDs4zD",
  "key11": "3RafCzTPFaQip8eKVrJH5jLE5VUHLnJL8ifB7tgCFJS3XGs5Kk5y3tRjsqBAEWh89MKcWb7MGwm17eAaJCE9EZDT",
  "key12": "5N2zgfRaisfbvzfaxJqNe7u7UAeorNvT62YS1veR59U5rG44qM7oGEFBPAjt5DW6Ku5nRz4YS9qEU2w9shfrZ2vg",
  "key13": "2ki3Grq6ehV23yXXw9pzZ48WYBgKSQYFEyYZMj4K4jDorBvx24BLKZEAtaQjWEFhX9tKvdE6cVHEmh3iuqdTxoRv",
  "key14": "34GiMabCBKeEWH8u8VN68CVy65yH6qgSxVL5Bqt2KeLzeqMfJLE3vhH2sWj75f7Q5qkpuxp2Cy2CBE5TXiHPyx6X",
  "key15": "4tigTS8QmMn6fnyTNL4B77zT13vMU3FR1a774gmveZPRRYDywMqN7nh8NEuVc871kvXMkKL52jNE3Y1DW31wvJxF",
  "key16": "zgqX3HcEPFXy8kJcGx9sd2eNe3AdzeE5xmNnTiuydwaZgBALkPMVSkmGEs5Uq4Jy8sbR1CvyD9o9XKcrBHde41b",
  "key17": "W7ngLwfTz3Z8jGi557GBbKjH96sxXV6ubbU3w466Aprmfzf2pMjutpxBv38CNz1huMumzz5M1bKkZPiZeiCpon4",
  "key18": "4E12DBGCEWmzg1foBNUKjjNeALecRaWYHCWNLuxmmmEvCFMB41cKMWkxjogV84grMUynn43528PdXFgUqLFojBnQ",
  "key19": "4oWuWX1xmjzWdg14x8VK8GkLeuB77xVQyoUrY2qvMAeBmjCFtwyenmxDtJUGGd2R6dS74kWWBMzU3ULV9SjqEU4b",
  "key20": "56PxWdETK2qkmJyeiB6qr7GLtpf3ri1FtpHjvy9PT7vLN4s1NW97HrrWSeNfTqh3AwqGT6ZXhD9LftShJdzELxQU",
  "key21": "3K2gQaKAvrdUaYu2ufQm3rUY3pjxcGwPBBvqHTosuRxGhoxAdNUnu8dnswUp4KBYiP4jeBYmZYaPmGv4dD4hS4Nj",
  "key22": "3bhYdUgAK3cwWedDAPeYzLSvNZ3CT46EkfGjXoEYFxN6SQjN3ya2z4kEkKzNNtoQEaRAAwrCYkPGpZhvBThvArdH",
  "key23": "295dPc61ywHrNyRm2475oqaRNa5pk4vpLJZZhu8xEt461SRoLk14caGKwwaou3ZydS9T81W3EzkCXHcGaSKVa2TB",
  "key24": "2X9WGS3dyEU9aTW3fRVaHQMDtsPxbEi3jiyY7nexW8cCZC59xTPWvakin7EiKxu1zMrP9M6ugJswnpfJpDkGw9SH",
  "key25": "5svt5EjzdTFEqZqwPTLh747kxUKS52sJd95pdzV151kwM3P7buzqecK57YT2Sx1zMFB7uY9TiB3JE48FnKdbG7S2",
  "key26": "3r88k3ZJ4AXrhSf6CV5Eor1XY4j6ESoWBt9gbiNDaRLva4gg6ihrQ9NdLamyFoJzmZFHNAaXn8why3dBoeBVrdAw",
  "key27": "2y5WEw9PASenCHuLgi7JaFwLy4DnMbSzN1nUzjQxhZqC8bFMcugpznNHPtAP4DYiyc8upw7gJ3qvT6xM5FPstcK6",
  "key28": "5xyY2H99R2aHBfNEJ9LYSpCASkMQZyWDdi73y3P9i382teRx6hrNNGZfQSnVAJvsHZybruZXngWVoZkooFRD3MBo",
  "key29": "2sgxvnPr7UEntbCLZJj2buyb3orvoMyC7qE5tXWnHFMHPwMew27GYWGD2tnHwgNQHvBQ9gzcDKm3gsJrNd5Btiu2",
  "key30": "3YG1mm3DWf9qmSdJRALy4G9kKy131tMkNipF6PaXR4WEeNbzX7pEd1Jz2B7txhBEyTrk3a5JPs3HAgwE2VGy5Gsn"
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
