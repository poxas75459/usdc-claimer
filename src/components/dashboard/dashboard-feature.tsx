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
    "8XWtjYNu9cWANEg59BaWQH4zV92bLtgnH116NrjHs8ZZryo6V6Q54stLTfmYGjBo2irJQ767wvUwL9QkxCzE2s2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4GRv2KjQGarseTPNEMn7iGC2VHx5GHkKxk63YD7ZfgYWazFKW8RQrAwx4cHnyvfQ5MRBg8sWoDLchpdjzRmPYB",
  "key1": "4pbxTUHLyFUxnK5yoNKDbb8KfAQnxJVpYwDV46EzswsKmksqoqtiwVNgRFz6epPS3VvfQxqtV1wgB7SquDCXDiVD",
  "key2": "3RLEoJhLsn2DtUsK9dwdrGQo2SFhADZgUoFtS7najgZHSoyzEhjkhtz6V5NZ1Mucu4fxwDBCxqGLbmuMt8Eu2dGS",
  "key3": "2FKpbjqPt7PH9mTFhiMoUipEgGkEZM7W5R6UVhYnHwWXuhgCb4i3YcXzrrfWNQVNEze5SFzB9B9L1eFQgLBfrg4V",
  "key4": "4ogLb8oG1rQEsAxs89nMLijDBcNRKLco4EeQGYQaZATPiSbkYC45HgD29zfE7cHZB7hXg8od1pc76GpdKSQhq599",
  "key5": "52XHSn29CnQ16ueEe3kwaKGXaUsd32FXLXdvfW72os1pBtkiH6ZuNQcLQqt28PzpqTFzYNKr875Q2ZXCVSMZxdPc",
  "key6": "1xhgrPTn7LSNMz3AiZfv2MPvL464gbqcG4m8yXD1U3fGYYQYYYytoAFBjQvsRRLZdPiHVk5Juc29VE4qwyPycFo",
  "key7": "Q8omvFbQ9h1Hts3JqsVkBB39iTUGjeSZ8ZfWBTJLzU9Ds8jidUoYwXeBydxjkr7dq6iYPHfDodUadKYKnN5SXj3",
  "key8": "8BdE8setijKBpeoARM4xs2Y6NqN4SgWZ9X5U722mC5jEMGPBznyCrxS9CeufKQkLczduw5Xc4UsaJKUyXoQUgYi",
  "key9": "n2FJ5YsmoqXfquHX8pcRyqkhWZso85JyHhnn173S6CLciqu6KxBzHSac22t1TyoDhWvFo5Lb1paKTxhdBkWjmqi",
  "key10": "2H4P2jvzZLPr3T7ERhP75qPUtKbK1g5aEAJKsKfM41778Dfhg2eWGghpkDwCABujjyjXGxhMkgH4xccEPqqDFKoJ",
  "key11": "RPTWQQRmNLQWhKAZHenkrcTq6XmpKzqfFPtegeHib7dyQj612u9VqCb3iHeQV8bAijmbxoLRQHje1W1fxZ48C9v",
  "key12": "5qpgJbpeuz1JqpfQk72FaPKtmDKjKHcf7BNV5D9cahtK41KKJP9oXNNNy5AA2WuyBi9J5nczYVJyoWw9tnaHSnd1",
  "key13": "2GYUPfmCNshsnRxSahLqYcBrK5WDTcKPMevaQZWxhdYEfpNzdf3tfHyzCzf5Np5iHJ1AAPNhrJ7x22oF2K3QS6Cq",
  "key14": "4dpquTrFG6W8nGf8qkcWLdGYpk4cWwrVHWRyMNL3vzTLot8B4az42BxkSFSNW5E4TipRPC9jbxFh7ex792KD1NsK",
  "key15": "2AbtBuM2tW4ti48RAdy1xULftUz2ho9gBY9zmrbbMGx5tkAD4sHa78n4qzrYU7BFbmwqt55MnJ4F1TLZHw8A2wf1",
  "key16": "4pXPKR2tC772uUMiGLKdewDgoCMDicb5dnS25u9xNFm1th7fbxFGnYwd8Kz6h8UhpEGL528FqkLu8pVwwFDXjYao",
  "key17": "2iat3q9sCEZdEkW4PqAqt1wPkZk3mgtPkChzs8KGunPtVo5VXpdsSYDJ5igr3gHRvZRNsQyqMAbLRA1zebXNkGu1",
  "key18": "5TtFwNBacVBbMFjkCtHPbG4SgSKFGJKd4EMucp5sKNUdoRN39yJBc8LmHCyybo5bG3cJshxSezCVGKWoAnpeqUEA",
  "key19": "5XMLZvV1VUiU8UNjXTJ5DrnbnQXVEReUwRRmxU8D2icorUM57qL4y32ncg82kdtM5ZAsF1E1iAyGbR1GE5YmThpi",
  "key20": "Mr4YCF5AfYENdDSCCtRzDU4D8ouVvdDaWiKiAPgyNNDXV1az7cuS6GkuxdgEi3y74NzyYtAxZEkiz2XkUY7PJnB",
  "key21": "3mTiJHYL5boNmMV5DBcXhVHP1N1bNB82hwBgdVgospg4qpKmUczRVMGNr4S51Zhzxqq7GCx8YsUqER8X9wobb6AC",
  "key22": "2iRKtYLDEdrWUvGNeRLsQ5BsEZwGBLC77xSk5AaWVjsrNgNppAKYXKXGNYig9VyEr9XDbUBPxGpm79Tbsi8e9v8o",
  "key23": "2jLrDiQWS5dysyTwTNbAfZGvJKo4Npz9hrnPwSYE5MeArQoA95V2RYVScDF6NARkKyc8QVE6NmuDRh7drdMwUeF2",
  "key24": "eXCnTewG7AZHhrkDpCxY2d2wAMUZgHUfzAV9eJtera5MRmPDhiCMzVLV4JrJgZLVNYjSTZdZspNKBZfeUFMeLF7",
  "key25": "65JMyScPwLnZJEx3dZ5ZT1NwRap6Fk1Sh7Cs9Hg41TQna6xsfwpgS9EFdXm5ukmWDm7C4H7cQ51DzXfSsZP3SV38",
  "key26": "3gERtM4PEru3ht8KFaB3T5mpRTtqcXK5ZH7FUdsVamDb7DNMKCTrWFTnteT9sUHE8WMLLN95XvygKkVBMCaESpZv",
  "key27": "KB44Z7DBw3wtjmXhpam4TH3vjhgrRPByqCcGhYRprHiH5h3avAYuJehHYDNjaJxwqLRZc5ArMyiqhEMMvhreg4C",
  "key28": "3CS3P8SkbPTj9u998v1QGFWfbXpZFDghv5yuuNV5bYH5NEawLotUopaUjK8yYNJDkzzDQCKJRWwCkWoy5MfVqycX",
  "key29": "4BK1YqDTrmrrxSpGfEa7SPh2a5yr9fpBwRKrbArUqiZGF7UbaiSDShYb8FfzUQUKZtRUBLJyX7emqH6s8ZoNqaYJ",
  "key30": "5uUcNpzZyGrHXrL4PbgSArmMkXE9vRKRmQbJgYZqjqPyHXGUDv63y6a5HeuSbKCpijyFG22ZJ7Y8mqzkFggPJfHA",
  "key31": "KhkSStLVvdorpa1vG9tpbdXQxUKNTnZDMQejtcAY2bzJRMAiYefRQgYN2kvwxNsr5iTEuWXec7vbtTuGV9pMopE"
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
