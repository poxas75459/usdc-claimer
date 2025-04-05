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
    "37JdVUcGHXC1jwKMNgAstzBTN5CuKoPBnB1G5V6TozAJ8ivZCGpvd2qquBZ3ejDF2cdPBeKVcHhDXABtQxqjL2Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jysyh3Bd6bkMufLDWLQjSyP2r3r7hncdtZVNpnL669FwaEmYMYz4HE4CKZRVfHF2u5EJewfpCwC96wassFXRSKi",
  "key1": "2CMKDYvpJJzkSQmHe457tEVyS2x2svPfEuVaXDuxMtPvtRGwWBzdxEB7NmsKdMsukUYPQW4JWihvXDDjPUrDxsiK",
  "key2": "2pmz87rSPmBbxAdhbsNKoakGqjW3kZeCC41VZMxG7w77mt6YDmbRh8Z8y9xpVXgALVQLqP9a6SAo9ihWU3ZYtfK9",
  "key3": "2LpJm38PhsZoUL6agiCgGLwBivBajx43MoYhScUwkyJyJyGUjS6HFQeNSC2ZX2d4Csod54BNeKPHgeQNenAWW8mK",
  "key4": "dpUHQAn5SG5REXUxk2HjWuWRhygZHpnr6xcFyTKjzPdmGuyEsngVVQmqSHKqvxhMJr4gHkqbnVvELSpmVNyipHz",
  "key5": "Q73eFzc9dyFgWLoK31eweLGqohmxhmDtnBGrVHofif6B6QNL21QNjvsscgMGUeDf9t8JvZmoFYZdD1skQAxi4sG",
  "key6": "29kzFKB9aQA1P6HpSYMasvo5GNzyssaTxyuYEKSQHiZx2dkswbVUVipozM9643J2UrZVsustX8ged89gq2kELPVS",
  "key7": "449pZVMbAMJGW4mWqaMvJk1c35jHhrPfgmxebPNZVqhJUUNBVnzGmewkmpq9fL7rSUv2Yz3PsYBG5cT2UDdq1wC2",
  "key8": "UuKqty1fF6VfxrpreF5Dwaf4PwFerCF9SL2BCsqNj94Qi6ZaxxEUpaHXhnkLEhUedzwPhoX3cxtxkf96yjpmRXx",
  "key9": "2RxpfzWMLXBpXWDNgiMXQtG3pTvmQPDptTBAhf8b1EHEJv9mA2bLHZGXuwMohqAgKyzhXw6Zd2ssMqwGF1L7D9H2",
  "key10": "VsPWuPGQ4DpzD2uu5rDATXxk2uXUHEfXKfe8a2qx5wLbxUpUkyCQSvqe9VBj4P8VkxzV9qWBNvAgPcELwg2qGRS",
  "key11": "hpPcxytCevx6vc3NSYNAQQHdBgsF2gvcXsXms3bT7eB54jAPguucgt3DzKxZjAoiG7JzZ4gdf5qFdYbyiu2VBtn",
  "key12": "3rZq84TXRjwx4AxMw4VJyCEwgtX1Whhwft61d2ZAAmMrwA6wQ4v6b55roamZiqYFxTEd881prRjwub7abiuUmqjj",
  "key13": "52ourAGQ7a55UgofwdpfT6vnhP4jaiCu9nTk7WWkahhEED6qve82Kr4ta8YHbvBUzGfSF8jdwbQMCAY26CqnPs7w",
  "key14": "4yvFeMMoXD2KUjktmmfRPbkwnxWzK5oKnGwJzHLC3ATuPFre94csFbfXCA6T5Gr3rYnWx8SAZVWdPMbzTUAuwmoN",
  "key15": "5suDfeMvNrpjb14tVirfcBrMVXCkUCUuyUbSCpJdsnd8mwjYjg41GoBBAq7HHB3d5x7P1ziKh6UQANrxvqWYwigr",
  "key16": "eZtdGeqx4mZjnCP96GNbj9SuSfHjNN1BkoZRbNQtyoavkJeQhCGJU3YKgzUc5jHJJRyZvYozwumQtRds2zdWkCe",
  "key17": "2LRgSNncWiijYc9HKxQcWJTwBApd3v4pEQ4CH8hd8VdAQ13QqxDcBvdm1y9JRJqqndK8wzwa9yvGQP4TwgSuZqJ8",
  "key18": "4fvSraoZiJ4FMBvBKB3CKpoafRhyE6yMqoU68vc99XfhKMLKQWP9AE5xCUabjGDuYosLhLsDSSU8HGrqCTGt5HWx",
  "key19": "4DrRbz4e8LTj13kqrCXTaSdeqhvtwG4oy2hLqMGEYy1cc9ggFuBGpqfsWqD2qjP4uLYSzHHiNCdCmtq6t8eSCsi",
  "key20": "5pUKKc2YQu16N3MNx52UQrvTHEyLwVuHM9gu1gBDt5VNsyvExbjMD9rYvLUSxHuSsqh66Yz2txwC1Q1RUF3mTehh",
  "key21": "NGbtdKLux9AgGFb6QuNcyKnCA4mxDyz1XfSvfhLE2EU7KUjWDWcfXu8T3fbDqtbS9vmH9ifagaANocHwtdBX8Xs",
  "key22": "2gnrvtotu7ApULRvGRBFMBQL8xYDTYukfoTqvaSV2b9kcjwJwWgrDzTipmdzPqHc9P7UdC2XszuZ9zHxFrvGskMK",
  "key23": "EVJccubCMjfAxmZjCtpuvrGehGQKJk7fvhJn1HgfbjK7y7Z19W9QPjiWfh1mDvJrFtX5feqNhBmFUtYc2zKrfnf",
  "key24": "5L7hfWecdZokCK3SFKCLfoYBMFCbEMQCNe5oGZUQh6fKwJmbW4fKowhYUDth4JiE3W84kxZv9XHGCvvsehiByFZT",
  "key25": "4HzdkSoqAVvwTn7gWrWrLvUjJ1gjzgDihCNFnyaoJgUBP2khPEQwxsKvdKHHnhoWJDjVGcxZHMwQbn6yQ6LJsAcP",
  "key26": "3KbCEpKUbgL7EVWj2ibLtiUDr1bRLHedJdLomuMEUppFoHDXUxQ5tfUoCDp7qPKzWro1HxdQz9jgHPQr5dMyHpWP",
  "key27": "3ew1aMLEvaVzchWvEfQ5L9jpC8T1bVKL6mqYV6k5ZhUeJDXQyBz2VVDf8tzQNghFqrDgP4MJGx2stUAt7TmyREN9",
  "key28": "4Y2k99PV9TTxYqfw51pmDZcVDHVz2Hp1MV1ckwcErGSwsrgeeiQ2exo3gRt6kPpPR54qc9BiiVdCgRCojNbH8E1x"
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
