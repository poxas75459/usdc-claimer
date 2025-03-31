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
    "3tLx8rn2gvGRkfuSvwSXgjnpWpYzfJGXQdSRCvL8KokBKYDdDM6udQQnuYh9nArJZjC8sfobviyhranMpEfDwxte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYV5Yo4Bm1nvDEjrngaEJmZc2CV12crdxVgaG68bUCx2z3dQufXGfay7hUduvZePRcaN1fifqYzqiGcxGq2SQjJ",
  "key1": "5GHrMBtjfK7PKeJ6YrRQ6qdXDG3VzGdRea6grGZPzi9GeDYgqu4FogbDPmCm2zJMWfjCS45Hdy9VZayvD4ykqqe3",
  "key2": "4wzPreh4ji7Q1RX18zdCK46htqNXkaGwK39xmgV4nLpNkkK6skp7YxnH1muUiKZAr4hSu9twhTd9PCqdtdfaV4p4",
  "key3": "5GY6U2oB5aYvQXqQVeNFgQhAyTizUmGgt2BRbS9S3P1ENFu91TJ3aLL4H2z1U7dx2Hhqam3wjFKJ41cKaoZUrV2P",
  "key4": "4TXFgNaXSCAEZrNs5uXb61NsYvUTmXxu8RGTipaLJsCR11Qgorx4JcXmPshvrHc2pV17Z4gRqqL1NrtgM2VXoW3o",
  "key5": "3AjMzcyvNW9SWnLrYdCRyaZxCxU7FViBRh4FXnkV8PXWxYb3hQWvfU2BK9pAH3rcvy41t79zsfq5uvMDLoJXpxWd",
  "key6": "3NwfbFtEMGPTVbsn52d31ZWzxM8aQHvLfFLCooXQsR8aH1P7SW44Grxf2J4e31Ziu35K2kqZ6zSsnFXwjGfLcAQv",
  "key7": "3z2Gm4ZHjULnedWK1izeUYgrkUr21u1Th1ifoahUTYM1sy1j4iv4LYRR5kqUijrLqC8JDeCNJEDAPEKkEbQN6YQh",
  "key8": "4zJ7Y62jTwmTXvy9Q6HnVHwc2uDKHfxVxz3rxSRtPVNodYkxSSH87EEPiZh6LzcLjGUwhACtWeqM7rdDH3asJ9sY",
  "key9": "tFivfZJJarXSiXhvEML2ghYoJBfEFA31B3nY1FKqzsz7qjLLSUzyAk5ZY1TsYPC7Kn28A6qNHkAiqLt6ahXKtQj",
  "key10": "npPpaWBKV7emxR9Cp73BY7c3mv3RLUu7YHKDESTBzqfXWNvgxJzTHSFtP71fnmotAh8s54hJy9YSY9eNJWfeXd5",
  "key11": "cBUBSFxkgaNc3eQGkQQXM2emPfi9oz3QWK1JZw1BRiXA6jNiyK8rTM1yodLhdAaC5Q38QPUivBiEqbnemTsfZWi",
  "key12": "5ApvB8A5PaG3XpSR8KiFUTEZy39P3FXgutLPNTq7vdpxw1BWsVqeHmYLpLApxqsY3Lp1QoPR8WgPGsSENRtMKobp",
  "key13": "W1B9fYXVcgsGi2N4kQPfgLFtdZciFjpc56QVsjSUHLczh1yRZbi4HNUJMBuRLu5DbLE5WCHmx8FFH6HnaFkGAk1",
  "key14": "3A9EsTY85dfYH8zBA63gBdLYaPJrd4BczbkJoedCVRUbbXiHnBpCtHj1M3ophFPasLH1emUKEXsyBz8e4cSQRSYA",
  "key15": "418bZSJUqeV1bNYkgd1tacuCA9KFtRZYrBZruCHWZTWpy11hjL3EsNPJXoisHouRhBvM5okyKhW1XrKRTb9bQaAF",
  "key16": "5yDuuM6Anh79CDik2xSHnKp7UixXZLNDtNYprm4AGRfZvCv9hT57HPKXJiyTDt1F2G4wRSkBLLLbNQXwmwBwWBT2",
  "key17": "4SZMiPA2fCuT8R6XAJmirckoN9AGTh3Z2rkQQuSxZbyw9959UqMP8tTMs58LeRJJAWyMt3zUnnF31ci6S5ogCSLQ",
  "key18": "zhD67RDH92agZERN7e15MsxNR7tHv2EqF2Xs91xmp6ZDoPAwFmBp4rK51jMYTwQQfGwydTQwTjxm2REDgXoPeXn",
  "key19": "XYiJehxB8NGtv66ELBBsS763NAr32h7iQQw6RFtms1KWGSdLimz4jEf4QHuaZaYBucotUZNNdr42p9UJc3C5EFS",
  "key20": "5U8Bf7wfS1Sb9vETRpvALEydb7rGd59UA9vwPSCqAazLeD6MzDqYLyy2ajaH4Nm3AuUJHTFEHb4F1e1Cxkk9voif",
  "key21": "3mJ1QKCNYsrqWtmEeJ7g5kg3gR9kwAqsmbn1pnzF6rUkwfY1dFZBAJFrRqzo3MrHPesyFfB4AqSSM3HZdvMgCEpH",
  "key22": "4utAj7oY1ZHhTbeoaembR8EAVMNX92EvYQQJBFMiqGJsPC7SNWWvJ2Cgq2fCXYdQvz4DDeGyYhGw1HREZMfVasKx",
  "key23": "47iuj4GiResD1mD2tBJFuMMYrCsg6J22W18oKGRcgshL4kuuga2z9xWRkVEhWv7JavXVpQNdwNHJhk8FxGZEMLkg",
  "key24": "2vZSweMDtfWhKJ5SVMotzP1KRfACmXbH5B6AYpp48rYUuGMnBZPqxDzxswqnSXxCv5QsSbkAv9fqM8Ls3yEhMXoT",
  "key25": "4T5QZKHfp8EhWBWfYm3b9tV2ykE26tqnx5pbSv6sZCKZfpMJuedhdmaMxvWtabWfSysLPBZ7Qs8tR7KMe5Pn2XuE",
  "key26": "4RwBj49ikSMKXHXNEiyFxhKyVat8y7KTyeuQqor2m5gpxvMzEiMV4wPqJZfS91ypqernMo3sMmQGRJDfeeLan6bQ",
  "key27": "23MYRPZKKFbyerWtVgwEksM3vzxJLY1tQ2KwGmfLApiZqQ4fEf9wRWWr13CNLNQDDix2ANMFw4pAJdiBjtadYkuQ",
  "key28": "5VVgSUuFWGKtpCMhhvDJzHsKriuZ1LaMHBBU7qUo9VnS8njP6UUGpUZVxSZyMzRqcNfgM3FRXt5uSk9TqHgkzXsa",
  "key29": "4UxseC92712wHJYLUJEXGS4D6FmmuWBcakYmRzvWEfwRRyL74RUVCDAoauJrHdWAnDDpeiSJG2MhsFX7tTkG1LK4",
  "key30": "5kf3JrLhnenb9Y5HoohKbbVN1YVr18YbJvN4iw8rwPeyVH3y9yamzzcgyVQha2uBAiqzPjSdHqfF2iAExxFbobMh",
  "key31": "wteAWKLDhL4ZxMr9WdPtV2qeWcpV6JDgKmy493tDMTafAC8BA5QWFKT9mxLEyuF83KpjLMSMFci5phYHzYcpaDp",
  "key32": "3mpVh1nGV3XL8mssFeQsu7AejTaMWH6DULcyvLcD239qEwHVvceRvz7Qp1DGTptvY7HoucQCuEDauWGhNEAZn4rF",
  "key33": "3aX128HDPRSqu5XF26oGYg5S1SoNaaUgU9JQfMGNTzLWZSHpiVgkX55cM53KsuTW9DZv66jRdCDZvMRrAU8sy2vk",
  "key34": "2FM57CbDD5cjP3KamukhpKa7QpcpxmcPNa4bcPhTuuAF7DNGeFPYbmWKpYisLE5P3C4kCpgL5kEhtsWKPhGs3PAS",
  "key35": "uhUzykZcCkEzNG1pYoK2HP25reJVKp3rmqe5ZR2qwbPS8tV4Aum1VZ2L5vu7GX6YnQFe6rLp8N4ddrEPc7abzRp",
  "key36": "KHf5eAHEBDjRmXDsHjHoAVeYt862fg9ojuec5MVq1LxuRF1HtbUonFJ5eHgtATRKvo1gPLtdMfoKKzme1nLTvX7",
  "key37": "3WVfJjruestHjji7f7eJ1bvUuXJNpGtStvuvWQMVZZyZrWZtsTupTzCHaFf1M8SVg3ssxzCrVtLhxoNkKXmsNGDU",
  "key38": "411rZv1DYbE8vJAJJiYsr6wYsVeXFqQpcDS5Hz5GJGzfocx1Fp6Jt1A9yCVpauKd9ouKPyUBCaCQ1UZTXgEHaL4P",
  "key39": "4LwrdLFSXMpaiC73JNnit4edv32hk2Gvx4eMTec7rPGLSLqUEzMRdLq52HtBvRdmMpQ2NGakdPUsxmXe9HDn5HHC",
  "key40": "2aZqCXH7gvZBAcgMz29yE4dS7N2pjFDfMf45EXCPF5phnJp7M6gFztCZBc8Rtrc7Fs5gRvbQJTJUyp9RKfuoqqGa",
  "key41": "3smvNLGHFmmjk5ThTenSoHQ5hFH8GDULmxMo6iRCCJ6vfkEa2fcexi1weJubxq6VoSJrmJRX1xskZEubhZCNJQ2q",
  "key42": "4h4DQUSXJbT4AXr5QNXBwZXzXpqsz89V68225mcXFiFvPzQa7xgB4y4MkjLbBgjH2Ww3JMTCY5pPL8RxutCA4dn2"
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
