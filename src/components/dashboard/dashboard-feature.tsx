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
    "4Mr8aTAtzm1wRRNjydHJoVPncQyQMTpMj9bHhptHM7kzDisHyNj8LGoS3XzskG7iWZ3ehreen9W3NNohBPTWPWTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YPT6VqxqJkn3EpoZ54TE44NERnejCqAJcmw8WfeqHRXYUEPEiDwcNjpxMVUEZCtMiUYuyecggnavqddrxSsj5E7",
  "key1": "25svXv4zxrQV1iH7hpBFQ4mwZki7zdoMoiv2rX3c2kT6eNxkWZyyFV3L6HujhjyuJCeJQeb5SmQ9FfyNdszP5fLA",
  "key2": "5ELnT72PMphUw4XzMHVjjtmeKhbqxREEVinESr3pxzvreTVYiMxo3js113HRToi2xYTC8U5eBDaiMuhHgQooZp5z",
  "key3": "2TCCGkwB15R2ricjDM9jE4DVJLfhznETswrG7sbWGUcCg2VCzepQJt581XBNFGg9GCQuQyNdmsYjYXaBN8jtexrp",
  "key4": "27yCd3KpP2QWL7g5BBuimq96zQ2RbFH7ycX8nN4fJU94TA5vV5AfgCe61vk9qhvGNwrn6FPAQh7dgxUJ8D9gEf5n",
  "key5": "26XpFBzr7XDj2vztPpVo25WYstZr1fgsQxndYPVhQnSBRPEdRxM236RM5zjvZfgGZBXRrwgZmZqoECgAmGTn3CoG",
  "key6": "4KPCwpGFVbpgZDGWYJP6eCxavDZZgCf4stP3ptdFpgVYHT2MT8LqAgyEYTcecssFHdD5GPTgJrKfVpbSf8PpViNi",
  "key7": "ozBHXu9MpnbaT6bjegiTREwzMsDEqmZJvwd3cUDZNksntEMnmwN9pP7hSVj44b4DL7gDJKR3n5nRr7HZEYZCbwd",
  "key8": "3xUcTEd5T6AVuEFcgXrLQXqLnnpDrNVkQNqbnHKuJEsSsFuqNi75ygwCFYWYPEhDs6WsG1rsCyxTPbL8W7HKwUb6",
  "key9": "3brofGMFK3nUb3vqvsTbeNJcAwed8WWqXUJG3pmS6Ak8ReJcUVvA8rXTsu8i7VmDDM2kntPRTvezKSknfcf2ySK6",
  "key10": "2P8Zqxhkx3y24yo3qBUqwuKGc32qMXcfBn9fytX3Vyogba8CrUXCq1M6mJZ76KpGoBF2qGkSvML4vfQRaCsNwXwX",
  "key11": "ErNYtFfjgScVEqeTFhpduAAxQGr94s1MQdZfD6i36VUiuacwBFyyHSZb4QPenbxpi1szTMVWkY7fkjddxWjdhSF",
  "key12": "2QTTD3LDKBzQ1vdhWw7HrSRjFjGBr8JmPP7VUnFCJfGLXFE7CWckz69XUq6D4d65Ck1h3E3osCuPMpAq2ZFF6esN",
  "key13": "4HhwWF7skruZMoFnXvecFVtsMyKptXWb2qrLV5Kcwnuzk16xNGeebZGtczP4DkoNphnexKLzyva2coT5uqVrrsdw",
  "key14": "V62KmTyiLYW1z7bSVAWB2CuFJNXeQyLPD7m3xdbo3Fe8ae1TGd8Atss1gWKD1vuHCfmmYKzQYUTB8qNra95uh4K",
  "key15": "3ExsBdfq1MEAFZpwLJy3drtSuZZ5Vn5RfdcNg54oAi8TFYnMnjCbiGD7RQTgJHBbxzKn96sncSeHUMSo9Qj5aPxV",
  "key16": "4ykZ6YY5XSjaaa2P1MPu5XhGGpviqphh1q6qDFMrZohCVSSkEJuwWZRm7414QfM1Jn6CWSoncBzQTNSeRQyRq3un",
  "key17": "43KJX31PDwvmmtdjq9oydmZDDFHPSkHgRxs2hbHCxYayK2EKkPTx15vd4HS52VAdK7XRw3tYedob75u937Ngy5D",
  "key18": "47VoSAAn6zgeTxJAKGV3XehZyVPAsDdfuKhFjx1qqWBBQ4LP3cGohKXd2LnbPe1AtMMAvNMg1y3EkMjPtQAzdAKr",
  "key19": "2js6eSYsUYpucRFRA8bWyAf3XotDRj3YeWerzo4xUm6XWu1Sif8CGxcaC9SSk1WuA7bJA4oN8CXwoBgQRs61ihd4",
  "key20": "2yPhiZ2YQDpozjX5f9mVx828mXGA2TscCZNEN6Br2BVAuewvF4ngH67k1L4ujqNC7tKBsXZ3Wj4qD2sJ1guCqvgP",
  "key21": "28E3NC2acnu9D6Eh13AFELbmKZtBTaFambrV9J3FTEPkJ77asgmmN3NUqDmHCgmFRwoRbrL4rphV3gSkoHqf1oMY",
  "key22": "2ocGboC6aX95MbYw6Am88RY1orU4hfkyCSmViXB9Hahn5dinmwo5CvrvJvqwrDskTVnZ96gxpzr5shZGuAJPvQRz",
  "key23": "3BqMLDV3knr3nP1MdvW2te9wyBi1tJSjbbhLhZPnoyxQy1z8mFBvFMrkSHPifBJ5QZoroNv82pMZ3mU6Ba7cvGH5",
  "key24": "4Mn3DK3Qw3eHWWD3Kz4kT7yVRyzsBF3QDmYuJGzGRjKPYb7iEhkq4ARhbwxLqpCRFD9ZejntczbFwoZuEd1XQz9u",
  "key25": "3zguzzJqdtCpBKp5d4YT33kNmDq2PJhH1bz6t1VxTjwPEPPfk8QU1DeWiipSgPYPzbvHDTYMVWxPnJvytdjP8mfz",
  "key26": "59cpLhzEw2B2NAZspwYRTwNB9npMbUzifW4PQjSsek2XdfLZPoTpdJ6xbhTfyg6vCK1FmvG5w2NZg7aVT9BvA3gE",
  "key27": "U9AZqQz4JRHkTPKx4usC2yoyPb7eB1scFVYgJUBGdE8cdF1z5YMysrqL9Z4JA6UsNtqwfYAxJ1nULXfd1wQKR3B",
  "key28": "2kmcqU4QCYRHD6owNA6n56qUtR3AToMKZq93cyYP4pKddoLMQoJo5MaJnsQL2duCGTsyeQTauoBSxYvw5Akt1rt4"
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
