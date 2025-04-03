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
    "Pm21yTEqfGvrr1CJU365GjUWRuifVhRRH4toooEmtuhBhN3V8ruKFksryyoXJtuNdtokLYH5j2TGHVvGwSgoGq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TSVY4LzAP6Lk4ddi6X79VNL8a7MgNSx8TxHVyAeQavYBT1ueJfC4Qi6mSKtuWXz2UuaNmU1aNZ1hiwxC9n1kyZ",
  "key1": "44C6XdEies6worMiNjXfQK5TW3vHBBipUqd7tQ8NfeyoZXJmGH27U3CA1j1ixPQQ2Ee1zA9nMRT15fpKVKvrhpEu",
  "key2": "4Eep2dYWbj9QEzHd8LziRVy76L5wSECWpAisT8t8xVwWZFzzjGWhR2XFK26Vwsmo3249pmWJx4zGmjDuD9YPTG92",
  "key3": "3tHvKWNKTgbodKyP68jhK8qo1XKcnrEwd6vcmu2LPFMTf2TP4RYKEgbfzxpkvpnFg7kk69kxYFWfaAcdLtXZKTGw",
  "key4": "2TkW4WNsoMKv22PMXjg8zf5dCdwiQSuYomkasGAghoYK63hLY4QJUAmA6F75RPFJcKaiBs3mpLQHAUgJgUKTJvQe",
  "key5": "bRyadye3zR4eJXSLFepV5RmKjRiPtqWFM5XTaZn9HrtszHRdYg98g2bh94xpj4gCbBesTaAzU6zWBrED7EPMYbx",
  "key6": "5dtKAG7QivsS7APA2Wv6wa3EnfKo2Zb7LpvEQ2EDDZ5J3aSH8wfgFidQVwFDXxRK5geZqy4w9CBwmevg4SSty4CQ",
  "key7": "5hfAUbDguP4QEC9uQ9Pdp6GC6GoPindvsYxLSKcFGdj52gaGSG2H59f2G8t2XDyT287yR36Eh61b2wfd2UZ2J5kp",
  "key8": "36WsxjAmThZfUa14zedU4ii8PGuHJN46UPEtqsVw3CdgKLVMRizPdCsnHZzdGvfgJqe4VaJpS8EFk5xjNJnLZoju",
  "key9": "5Sq8u5yddJcSbWGgMjskwsHtsFThR9zywdv4yvhfYXNbPWdfnLvQfVV2r2EWTnZZgeUmJEQJb1zA77i1k2gh83M6",
  "key10": "5uBsBLdCvz8mqMTMdGpyPY2pciiTiEVM5zPo5BfcDhsjfsRavXR4UH394R394WnbZySvugJeUesKDKq4P3rz56RE",
  "key11": "4NJhptLYQZYaJagFLEjXwrEH2yx7NmfQgwLyPfvYn2g3RuAMqdVk6Y2i7PznuUEP4JgZYRVF2v6oPUofH9FGdnYv",
  "key12": "2D4jsrQSd6b5EUzR8jPNaiNtMncR616ZQyhhAJjRPBVgnQsHB7rDVfa8QhfeqtheShtuhUd9VH9U3mB6RXM43wX6",
  "key13": "5Ju2aJXrKhYDRc1MKUdDwVG1d9d43D1Qa6NWSedVAkEgKMzMnQjP2s2XQZcFoQiYGmq1nTChiPqLkjkYAaxFkPCC",
  "key14": "o7jFPt1deQ332NH2cNK55PUmq6QFFwwC1Sg348Xv2eWNPQpEVvSNaCiU3jRn7yoVwUD6QWW5YvRzDh4MwDLSuB8",
  "key15": "2u1xbtoxiUuVyVoZEF3sJk5uDcNPYHshCVxfvbp87mAYNgJeREA6C6ze2Ca1ZaXofH7JQZLPcXqatzkVUWSRnkng",
  "key16": "3Cy5WEgbMJfxk4n1TVhCPaG9pqrsvxfg9uFvfHZxfvhYGNZBSBVvGNAmT8dZUnvwmbk3D4VjayXL24sE6B7JLDsN",
  "key17": "2w4bj43eUG6uDYJPjnPN9nmfHjK1HTtcSRRuZeYPRfeyA6ATWT4MGFgjtT8LXBRDN1z8g79RzZwtbDjaasdKJBf3",
  "key18": "5Syz1oH5GHGw16Vsj3bive9RpSvEPoX5Vr4capoAWmk27ZWnuBr19aGBi6E7GnBFidLE3Ky9tKNECypVzUrphjg7",
  "key19": "5CypG7gYkvqpFCSAvxjyX6xuEjVwbpsgU6inD6x1UKFQf9NRiCUAWwKZRcWH24GG5VN2iFUzbmzFEKGkXR2VfwCX",
  "key20": "36sqk5ohCeDBMYkPwZgfaLrLA79p3YqaGgh9whMXZKN6CywzJ69oPPZbppr5gUHaQ3VvByv6pErha1BSwJUe4dxK",
  "key21": "2dcTTMAtnayhNN5pa9RWxp1UJ7NtKezc4sLJefdBm2co9iKaFW1ky2dN1uTQzoj3qCHvEMUvXPkdvSaev3R5XGhX",
  "key22": "4WXcJbMdBpTCK6JKrikvvGcE7n4PGqJLqDQAB264GdCu1cMHdus674KVcbhW2SS6ygFUZAEeA29pc5UdieeFEfuc",
  "key23": "4qry522vpzZRSMyz6EF7a7pzwkutLwUGaPasSEjDqPGiViyPzSrez2AB86y3vtLE2b87ZvBZ2bU1ZPXxBHT1yUdf",
  "key24": "9M9CAUEUZf9AueTBx2yMbzNEJ4p4PqszSLEVpNAmYRoNoQA1isaD1N2wnPgfsfcoAX4VnrJqiPhTbyYUZ9yDGhk",
  "key25": "NYYrrFQGEBThnmbU23KCWszM6SWaHPLvZejnTquXyAFS35akgeH8Y4ji3RQC2dJiGumPycVFkk3EdEtBKAjVPXN",
  "key26": "k7nnsiQge151L62KLxzeirAz8xsPBsWX9V4GNPpygGfK3z1xi2kzU1EHuKpR1Sva45gCMtvH8Xe4E7A6645vp5t",
  "key27": "46zJJPqdxEiSy9gXSuuTNzDz85LDPFHLqjzq6wDLsGFM7CsRfswbEWkbJKSCGrZKoJvvH2XRvrBLtjt9dyyrtcW1",
  "key28": "62H6NoR7GmGVbRxELbj6w96KuiNsQJtD3aqRT5s2jTQ6aH8ubs9Nq2zj32R7ZEdWvQcaTDQmcfk7KVTQME5bPN1i",
  "key29": "54GvmPn2t3CVmM7GLHddJwacX1jA8VTqte2WnnKxAfbcRrFLcm9BW1dX3kHmeEFxLbhT8aivgjDh1FTTFqTWCai",
  "key30": "3eR6FK7eV3gyFkqynLme24HH4nSD5vqd6mH2WsQJ5GJweeBqYqqGgSPbLRB212mhtnWFzi3QCxUJtSwG921w1fws",
  "key31": "31gmhDa4ahKfoSeDnXwcPJT2BqwJLMbiJMdn3Gssc1eFrZtyxEmujpWCuKJtmEtfrV32VZUUCZbrnpaZkc41h5XL",
  "key32": "3u4iSw7qRJmLwGvbYrd3U7eLzfHCD2E9B6wQRHLcQQRUCtUPt446ZoXd1i4emPuNGdbBdp1zpgDTbo5HvoqjoCtw"
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
