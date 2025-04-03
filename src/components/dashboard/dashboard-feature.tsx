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
    "2XGCQfrPBEasRyxBAatSyUqTDY77PCKZdnFE1cXVdvkPhCjCU5n2mgDYVRgevBK4YnWrCNGej9yomhN5EccsE9qG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWZ9VEyCNzaGBXAXxV88fHH8BTdFqHsd1nV9vJZjYxgzejL9Yq8dH6o7P6F66qs288uF4pybkRBjpc1hMLHADdA",
  "key1": "8rdpX5LqTv2w5zGQgWzTtduxehCWiwRzbUqrej7HpHB3d3GQuYo2x4ou5faRPa5QKywGSEqbmUK8FFP4u5m6a6Q",
  "key2": "zBsv1C2DXU2i2M6cKC2XZBqApJguRbRhVpBzg1YdDsDcVKPRchfmdECMQHxn2Dop3bc9V19Z7Es78RtEHhvQEZH",
  "key3": "4JavYGbRFLB4vEU9PGEf4nCtnFyDrpVDnjSDRNqGL2cfVPJe1PK1nxUs6pTJXUoDbZWm95dWD5qBsuaM4gKv9Rg7",
  "key4": "5UPsEjokVupFY16kqckQspKgFQrCwYX2qFi8WT6kHNu75pG5emKEn9HHVySXPCgz8YnJieYMuWtrworib39URuLw",
  "key5": "3cYfkxrLq8Ei4nM2Tdr3mF6PSJczHXk3oB4Jmw7MqLiEX7n6SUZgxxQGhBpHHnQWixYMe5x7R8kRyZMrfkUAv1qw",
  "key6": "2box9TJPebiE9CqRyqw9VdA86HutgwgcniFuyWUZtTWxN76MsncTuQm6RQcdWbBk5dZtGLKXFuTYdWtcECKqEPqi",
  "key7": "3E3jwLrnnr9nmGaNBCjcKrp66zMkDxEbFRDYMYiStVt8Fz8VJqMsQxmwwLAop7UmWu7SKQUYxUDfToGU8KQ527H6",
  "key8": "3ijMYsYFdWmNDnzpsADQVMfSvYx1qPPZ6mQ5taoEmLT4ZQnRekNUUte6ptCvUS6keZUUPyRnK6QHDnztDGeHWzqw",
  "key9": "3dScVAUo8z1YW7EHR27UXQzSMD2m5EZrCWqJtiamnfwvLeeCjD7QaJ9CkmLP637LzF1uQWana7YB2K1u7umtSp5c",
  "key10": "3vDBPSeSLsYQQ3zM4gu4kJPmqV233AZxmwY98qy9sPsUrT5MLkgpNiy3gtV2f99iyraGz9GqvCvLX7Xyodwk3NTn",
  "key11": "LdWv8iU6RFM66L6yNUqUx6LEiPDizyei1BrFNpnia3eGKLCK1QUEvJ1hkQ3k218C6x97BuyLX9wejSNfJM28dpp",
  "key12": "xDTeQFnYae9ncejaSA2xQpgsM1KHyznK5vaSbW2yQEAr9FB5w5VrMTuG2TbmvJUjCDbA6TLx1wwmLYeELACpHqu",
  "key13": "5AXugVTaZWK9hkcLENCVEDZR7phg5p3QYxw6sSAbXK6wmj6ERGLU93mCAyw7ibZgLKBwfREqGjuzAw3kj4y1xesL",
  "key14": "12685cVsHxvm1aanFcV8k8VCSAmUjqb1kcou48fSkFHtfiuQr4EeuPALD8CBYDq5fnWWTRuA35XzRCkzmZXRR1Qa",
  "key15": "3cGXTn9qe2Hh8s1qWF9f9ysGTXdwBT7MUia5n9hpwwnwKJooR4FhFdUPhjrq5z5tWZXbdouQMJffeU1utmQMUfxm",
  "key16": "4cMGJf4V6wuSGXxJiJBMZVvRf3eaEFTGsjTHg2k6YbTGFSfRgRWiPEH2d81azvsAs87ajfFNKsaZ8Ko5akxUGvh4",
  "key17": "452mDK5D2ZZZ1sC6D78CCZcspAgdgigSgs8yaZFmES3Mc7vMGvvaDLgWTonsW9YwN2uCPoLfRpdNQ99m4TW2rZHe",
  "key18": "5WjuhSGAij3Xhjf8V6uq7hwmfNaCcW3dtySemWPFuF39iNde5fePwzTKRu5R2jLC826t9KhhYz1jktmmGCkXSPS7",
  "key19": "ejTW5EApLxY34MW2AXBa5JpF2wDeqCqkGJmmsN795KT33worzP8TDvKTkfuqWCojVtBAqVdJSFTsVaF9NjXMp4n",
  "key20": "27Yh3Ya9CELKtuWwEbe1VL1sCbFZ7bg5tpzYKfxanJVVKSXdGwQTSBzreYXaQAZWfqCehjrTmHJG8a4tX6m2jTjv",
  "key21": "5i3ute5KdivBAoyaz71VrgfaTFUmfqsZqTLrYmdPTTRxH2q6govTwMLd7f2Dpko2viiwNuavst7e9WcKUsBg9e5b",
  "key22": "LS9NycZANp5zUEZukL7enzpxereaQNWNPz9B2NBBFGucwZ7p35MJRWv3spJaV1wHqjHZ3GaR8o9eno3N356iRJt",
  "key23": "NCrCUXUVCPkDRgtHsdMQ97wVwrCmssiBbBRYKCLYcogvUWsawEvyPwGusDPBTo3WK9UGSSmfpLpCegHGwMWJhQg",
  "key24": "2RNEkJkrSgyxYVHfNjyfXEkMptqNo64aQS6zBeQCjnpS5oWJxs44G32tXFExkBchubkddmGSUZ8vzLSwafD8kqGZ",
  "key25": "3DktZcomxvm8gUDARPkcGKCUvZTDG1PJqEtkUkNq2eAxhFRA22ktZ1escq5K6fp6gmZbKmgvGm47x4jPANFCajEP",
  "key26": "26azkLsFTMPWsMdCJJGEuTfkzWErJRdaqaaP3etnYvmDwLC7GsSXh2t5Q8hFTDtQXthMfPTGb61RmkRzonfrdvDy",
  "key27": "4qQtiAxJSho1fe8bMq1S3SZTP8rpYswG3DK99oRRXPKJjm8V9nD9uZu5LFMjDN3KQRNUtphkgyLftyfw1GB9yhXa",
  "key28": "3KK7q1zVBp81iAmdFBHDuMdX3zwujdwk2QVLfVrhqFV9xpVoRZSV5kzKpxif7Hd2yWCtAT7cfZTQRyCB6EwcoQU6",
  "key29": "62LEz7v3YpLa9Jr7VZXCpnbX9VRxEAhimsWNba1imTsDrJ2Z15rbvbT5EinVmgAW28k1M14bdWdAxJtjAFem4LQC",
  "key30": "4SWnhWcMcvm3c4kXZ7NAyDQbE77qtWjmtN2H68FCDT2t5vnqffiDCnfj2JQwcC44jFtpJMzSAaVds6PRwR7PPhbo",
  "key31": "3uTd4LW4B8DksxiWYyeZYcKY8iscGeeW1kJNjFkH1J5kz9wf3Ndw3kAVsdPsf5GCR6pvHL85MVwUZsaU8tazvAdG",
  "key32": "236jirkabLdNYjbG8NBXccrZnT3ximexNvH4WMrxf9zQkbCvcpAf6o9NvKvL763MaG5CScQrR74iBxtX3a1US1EG",
  "key33": "5EhZxGdTQpgDedPkyPAsiJiC47PsaQ4KvXhsosgVZQc9BA7RTPggxQ7eiZK3BH72KEiFGsWbL27qxxYaggU4XibS",
  "key34": "66CTkZKiUTTbSpsocJPq22kHom2Erxgc16s71nLLZgKDate9UBDToDxXvCc8nhk9365MUc2AyDFP2u9BoNCHp7cw",
  "key35": "GoNZ6ZSinjXqZA8XVgKsNMYdPmGKArWqxaRQ2dp9K6k5bgMjN7BNp46gCGNKauPWBNbf9sK3v3fzaEuMmFdjuMq",
  "key36": "Q53SUiraFFyqGXuTXd4rHc6xVPmVawbNvtaUysyzLQrE2hUr9tQdpYax1QCVHEpBMdzxWk37xL2ZdFMfoqzRDL4",
  "key37": "iZtwdAw4e14sMZrbSfibh6PWzrV3u9VvfpkjDCYYc9f4gRf5NQ9ATVLU5iARUEZEhE9ZCDPLDTiuqP9pdMrjjG9",
  "key38": "36mL5anTpFGVh75uxoZotiuXK1MicuBYCk9pqQvooSd3qd5bxdUmdFpfQAyNVQMPtkuyyVx5UQcgrqZj7bgnJwES",
  "key39": "46fMDEHHfdQCVTqP71LdaTRoew4qRUZHJzwi1wr7EHB5FC21Ro3i1NK3yrvqUKPmSGDddaBC2TL2Ge5kYCqP2jNB",
  "key40": "2fx9GzPRSvQkxY2UZu1XrdTh37qetL2XzabcrwrgFxo2fEHhjA1rEyJnkA7NxrPKLmBfVmZLfmdeMWpmuZHUpxsW"
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
