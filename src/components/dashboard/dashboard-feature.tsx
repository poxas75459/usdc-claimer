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
    "4sENJZ5oPKcktnZFecG5CjcLjDZkijyVRCDEB2kXfA1M5AqL4rzw9eTHFxsUeY4Maj3YGr5PFHRQ3vmVncXyrYZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9rMieJnxKhZXKuv6mBeqTiQUa2juU8dryzskxrdkPwzw4zmFsgfPfBRGbvGNgKX4mKa21ACyYPcNew1NMokXSV",
  "key1": "4CVNBLkcpxrmHY37kVUv91qUPcL9jtebXVGdf23sLJChZbzLTgTyM12ZcdcubGv7pJDTxK9J9j6M4MrgDHK4N6aM",
  "key2": "3RTsGzx3QVfoBzzPsPmBu9UH9Uke4xsKvFkPTS5ccCx6HkuTbVzWcTS257qVFRhcYYWzk237AJw8LpSjiFq5PWYc",
  "key3": "28auiP5qS6Yj53cT42c2QJvmzLR1XVxKzYNTr2kToXkAPmTjazthEQMjrTCRJY7nBu881FX8DiGyyfjYVxT7B1HA",
  "key4": "3bmJPjX3Hurv1i9JreT4eaK6XaJvBq1GNU12ScCqZcEnoHgFDpwCsT6vbZvSzKN24DSTaei8jkwKb6AXdf1PrMq5",
  "key5": "4LEb147RKDRrLeiTU7BFp8HPUcKf6Rrt1XUfx8Fuse1bhiSc74Dpb81nJWWAKTNC4YScHCe7yoDjQzcythwnJtbH",
  "key6": "44mQigoqrQ1T63oHHz5GbSYLcat7Z8PvnLJGBD6PGB1bwqWcyG5zS8fnFMpfBEKoZeVbBykiix4QmK7vTTEw3vyp",
  "key7": "2onyFGgEz4MM6yiMGt33T9Q3xTxvDD9KtmGR64pAFzpDgvHvGpaFAnwxC9L8ZVYT3sqRswJvhHGTFZhpYAtQYdch",
  "key8": "4RHRbUvx3gvHEQvaLR6K85n4N7UzomUXSNyjcbY72uWDmQq7soGQeXEVvPec7tGmTKXUCePXiw6kUXUEnTGiA5a1",
  "key9": "4hJ2A4ovZyrNtMXwJqLT9sFFqYVWb2fhRETcKwa3MReyjoUx9Mhx2ExMuR3ydFC6ahhMnDDB3Vrs3vqwVep4sZyn",
  "key10": "3jUBRGxC7GpbxKcw2zU7Vhp4HL3bCsE7f9Ld5W2DsiXaXJbewwYpWcamWbzZgM9Ak9zT966eZHzAXr7sHid6X5hV",
  "key11": "3rputpixhFUuzkfTRGQ8G7yAb1wGM4o5SEDfYS3BV7Ug8pKeGYrusihW8o6XAV726xxtwVbtsUV8bWa5RUxhoBwT",
  "key12": "4WUaPHVgHsY9BoC7hqJGaB9nfAeFjtskSteQGDPHHCvTwbXp9YSMDiefpw8pmYA4Whq5jTrEvzEUd3KcWJuUya4P",
  "key13": "4QGUDznnAw12WdXC3yH5hpWGWYRiDaafL2dcfqFMBojFKjQxH1A9BSpWhre4d7v9Mg3bjJbbKJMua3Srz8iRg2ru",
  "key14": "5qTT5kV1qCyN3Ze6iXiMybmHzzJ48m2MDeAcsgukebdrjCWRTHMx6EfePWUCmC5MFEzwzLn8dkNnEQRhjZwFXYm9",
  "key15": "3H73VBBVcKLA2CFBkB2K7VSzPQXiBpw9B5a3wN5gjJ8WLhpCo54At4RtcPmnncUzcmCvUV523o1vTomU7jhFLHtT",
  "key16": "39hbsAdXgRfh6Z3qpUJR81Ade1yHehoxiTQGQujKw9CuxNwf2ECFmcs7jXwqRyvUVm63yD9SqHkSvEf1Qk4W51Sn",
  "key17": "4HK8BjAfaHsANEyLQkYqCHnhpFKhDKcBMT5Lpz9vD7HfLpqcH97WwBp44N5ksiAooLHaqXBfMT9sRX4aCCs7tYhc",
  "key18": "4VB4L7SpjYvsEVjnAV4yrfYgjpHAsXEH5d8hJfRpUYmFc7Qm3AqgeoduMaNUso4vxySkxbUWMmXdDE1QF13TTnEZ",
  "key19": "4hD7nTz7kXWjRnyDUyRx6n5KMZo4VMurCzQRSKbVeV4XftrWRbKxcnX4vre56gALmFgXFy9Ukmanyhp7VFETdfcd",
  "key20": "48u5xqDRoVB5JXbQ4NN6U1N6tDpwjicAxY6M4WWUp139v9CRghLSvMHAWNRYYfdRHnMu1GMqd7X2vSspFgrLyBKq",
  "key21": "5sDmduVpYaZfBx3BUFrTdZ1uxR3ztqyXnWfQTyNeXLNu11bt4eYkiLbjsCufhQMRCfZJ1xM5DtVgASGxSw2hyX2t",
  "key22": "5xDPk6QAZGp4cB3wAv6JpcpQFkE51bbuoXztbJq7pvQCdNPziq4GV24JnYg1BpLciUkbGptTHRgsHmeDdYu24GBh",
  "key23": "5L85W8ikb4ZoWsNEGurn9yTe5SF3YnUNQDL6QVUDe2KMYHVn3EVqSLKfkKpXhCN1yxCHQwWmAS4CHDWPiJjjxecd",
  "key24": "4FCfBQk5PHksUvV6prs4PaH4NsXACwSce9rHUAkfpSQhJ17pgbGM5UDvuXJyt4ZL3ShJQyMpx1aJpk8G6C1zFBgj",
  "key25": "4WFTSgN83gi6EdeBJ4jkTT48N2a1Bry6w81L9roEKy9cxRywbcnMxHTjEHNtQVEoC1uUff2aDXibcnuCHPDjbGq4",
  "key26": "2eC7GD8odxtoxVarAcWcnFBoBnkDeCXsv3FBBSZHyhfSWMnQQvrQkAWXuSq5iNaFPUWrvnuaKdj4ZHDrb5sP9Pkz",
  "key27": "5YC6wvbfpUVWs1yy2WBFSqfBHsmkx74UbMzc23sG6cLF6sMc8TvbZ6JuVb4hz2LJXiydRKJ9zCMe9LenTJq49o2c",
  "key28": "5JATizNu6pt9ByDhKgvatDSP7moPXDuBR4NHUmErec74eASQ5sSnzxcUFjwa7nKpgr21QPa1cGfh4WYNu993XMVz"
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
