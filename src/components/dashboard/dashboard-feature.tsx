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
    "2uDXv6up7w2T2eKRw1NFL32oChhXf2QHrA9JP9xx9QB8KP7BSKiXncQYVkJ16jp6cw6xHaBxxDRAAicHtCYdAU6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziQRWRNAaqj4LxfSsnnUrUs88fWJo4tX8yFD4ZEEkxWMCimnSpqCfAXLVpuedLhc4XroZLexe4nWVc64MWX89Ln",
  "key1": "2xzFRiS5C2FMGNffzJAg5gxCLzHpbRV9vprfcrs3bN15kJ94TawvwD6AL4pNFrmuXBA1kHBsDRi2w9Jc1ywrdNGX",
  "key2": "342JBxJNdq9uozTwXBKZnQAoaatXQqN1QnsBpkDPChRZ2UxEcGHAAwshpZ9SbtyCa89Dqcs672pTsSnPfpLs2py4",
  "key3": "cYDmZxQBzJPqaQPiRBmAxSnHYyHuDoUZPYVxHqUwEn4HQWZRe5By5cWBvNtR66NVJfF74FBY9c1vSR16cwQCVbC",
  "key4": "5TTDqDLUqBb2MFpDtEZHZH98WtzfHN8uVjAUEA6ohSek5Pu1b3qPF2L27rR1McZG9MJQXMpn31VMxGtwb9dK1rJg",
  "key5": "2DDYE6cxDp3AxuQYBJmBK7Zr41NT9Vzf6dhs1Aqv9kriSsQZzuxT1FKa8pXq3QUMdbr55c4LWgJjn4XuNAjrm253",
  "key6": "3hNwangEbtSC2Bhoh5bpm4Kzc2pE7JEn7Pn3KyhjNLs4HGjT9DXBumCa5c2ZJDUfWJ8AS97vm7GFuEobkcu2RWFr",
  "key7": "eM6PTA62UdPHaU1BoE6CsGqjqbH5L51woh3stPB4WnD8S4peWUmRqY91fZT5JVsLXt2AWNrQLm6KuBGtwPi7mCT",
  "key8": "2FTugMFCuQgbt8gxfYWwscSDoD1CAeTF4HgQ41VGTWBtHjDCRqZmqLp7HFEmZPBVaWibnNadgWuovYpo1P7vFjV9",
  "key9": "2G6nEF3DiCPjFRNTvA3uL5aREWSWYfLjZgeDbztrLCUNGPrKzwK6no43Et1bJDdVCQtZXrXdo3YNdMGYkfK6rswj",
  "key10": "JPXQNtcWwDftySpdes7GUqGQkD9VnEeFmGg423DLv2xELRPE2JFGvcwqFMoRa1YdnWjYKHBqZGABkLBXvRaTR8q",
  "key11": "4UQLoRCMWNyTVMcL3Tzj9XWFcF878KQdNxigC8tghVyxneCZs7NsbzumRpwhikPuURtbFkDGK3Yyp16vmfV7K3e",
  "key12": "3uzZ5qMX3UfeFPwTZomfZLPJKuDZG83S3Hfg1JH8hgb747E6mfeDaWQdaDmuA7FvVpYF9CHk4JW6FfRk8qbBJhdk",
  "key13": "EVYnCh9U4qoiJrSNBCzh73ejqPnS9H5ntGPzhZG7Jj7Wr474L7LFu68VTw6fyuFi3CMgpRzrgvo8ZkQ5wav6LpZ",
  "key14": "3mcg4CtZtTKDCgxVECPmAB61gHzTj9MgFcacQdmCgZcrxAEpttWNG3aGGHMmbiKrYWq52JepqjoBJwsc3Q2DptNS",
  "key15": "4iJJQG4NJ8yfoDkWsgaaRoeCQKFcWfvJKUh9A6uDDgwUF7B7ikC7VGy2KDtLog1MM2YgVsp9ycVo7te26m4HDUR9",
  "key16": "3N2iyowvnNEB12c3fDfx3PHuGho6qjDERdU1CNzXDeq87k9C4JmYkijoF6AmvjA1KQqxocdZxC79De4tahd539BU",
  "key17": "4G7iTbiafQdQCzgdrV5Rj3Z5rkMBdYSiD8M14ZeUqwEWbK2WK6XagtbJKQnqHusSiZcjYYC6xB9GNGxapDk8nCx4",
  "key18": "crZHggVCh5p3eTiyowjJjLXWaT1FcPQSFh16WP4PKDJzrhCGwTxoaLvdT4GmjQTcep7CNhMfeog7DVLhmnR9Vws",
  "key19": "3TDAdxYh84Fj8W5KUyK4UvNkopzdqax6YgebL626GKtHQwJeWRCCvutY8P6ayqx4K34Yu7LVHFguBNKpWk4poSxz",
  "key20": "2Kg9xbFudZARLy5kWWt4LVwcUmUsJncMzDorN5xUfWtk1M7kq569wQ7nogDP3fyzH3hhsF8vuzMA4FTNPvU5dXPh",
  "key21": "5Kfuin8mQRExWaBGBLUMn55dMg3sV18WwZBmgYTYPkhFRKT4wqNLMLbfonoyYvorQCUbQAcjk2wi5Gd2GkwPzfmM",
  "key22": "e3JxDTdu7uduhxiwQRwmdUsJzmnMLPQBE2nBccmppSxtSJs8ANePnM1S6EbsmxKNQ3wuAMtzgKtjzWsehDyYdNv",
  "key23": "3LVjtzFW8sH7g9cp3wrqYpgLmczLmFUMWjXcedQkTCyyGZrKTP5H153f5BcoA3ujTLg6aspRmEzXphzDum9YDsjg",
  "key24": "124KbcfAKdQQ9iV9pLp2xTpmdqrTijoNznQ3b8X3Y3zo2s2SJr1ptngXLKMNVwCp2GzSrvQJMxU9oJbaGvgfXb1f",
  "key25": "4WSW8CAnS3VD2LJf7HFSQ38sinoknJ4SJ4Wj6zPS7zvLHbLnmji72nRxsyCEEL2vHTJV4EQRquLCxC8Bts6KLgPd"
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
