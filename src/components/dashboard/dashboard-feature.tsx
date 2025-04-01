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
    "2ku2GVnygCy69KBSH4WuX6ktDuSxZgHN2uxHKzVpYCDvQRJAAbfGqpn4AENF9ywhXonfYt3GV1EAhnQVYff2Z8t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hJ3CprhvnaoFm8Pe1sW3hzD2pyh8QX2ApSoXaveyj6Wzsw3cASefp6sZHLhNTt5FPjXXP6Ptbo8KuU1YzqErYiB",
  "key1": "kumFeQMSZmPjkA1tZN4W8Q6vQ6Us8A7Eq35vAMtffexUS8VHoxE1jfikeR2Bm1kK2n2kaCojSffaq5JLEaCL2Zd",
  "key2": "2356aeG2Pf3Y5JQKqAwt49qz2va8TmB7BmvySRQy77y8zZUz2XvGQBnDqURFQGvSvY3aCXq4tvRi9mVFdg5CmJxw",
  "key3": "4A3gA85SVgbmw1VBivMvmhXZK9zZYcrhHkmSyCf5ifRa6JtkmKvMX5MXMc8wYk77qWfgkYRhb6VZZRTFDXVkFaam",
  "key4": "5bFuZ1wJL4SNZ6e9exUTmn4H9hsqfz95irNiozV57dvt2YRa7MemnyyAWqy7xdVaLAUYECD4ZoHTWyTN2qE5MCv",
  "key5": "3Qc8axh9nefTtCicve5pH2ouusTLqV3MCf2Xu5p8NAZymaHKCJLLave3g4nbXQJjP4zu29Rj5oUqPLqkqAzjDbqX",
  "key6": "3H8nbZygcTKVaYpQR38fhMTpMfHFQfkaSN8rp69VoPtf1Sxa8oUjEnd693sD9L3q4rLqm4n2ecxaSDjHYWyn2ghA",
  "key7": "4DipCM6V1QUuAAHsHPixyrLtAqTEXu4w6eTRQ34ZFrp19URmLg2RAusCJkzLermbnWhSNDqnbmb6qiirCKQpt86J",
  "key8": "SiqPvS6QMP13vAJQtTWHXdTJqYjTdRcgpTHswBWgSzQixzJbtf4FPuDnpnTs9EX9iKPXZ4g7m6EV5QQj42CuWT6",
  "key9": "3PFf7ehUwFYmkHuxAQnG6haeSmVDxPQS5tgJ6dryD8BJAwjwC4yDRnUfdJdvDW4ZncmBW98RcfEMGgiGGkM2qEQt",
  "key10": "2uNBv1qy3h6Amyneo6H1mSJeBWXFNw18ZY3BFkYQ1S5cfSYVC7SXPQRN6eCBnbu6TUZTiHd1fHAKSMt3i1TbVoJ6",
  "key11": "4TCVGVgqVqGPexYcSEH3Nm6ePBCHitaVNCbPFz8TGfNfrEJMrh2GqEFzDQCLTngSkBnEPqT3igdwFGxDgcegkViJ",
  "key12": "4otdm2QfK1FJG3Mc13KvEix98wVNFhdkniaKMbwSywtmRU8jkogLV8BU9erTgdg1Dzqj19fEG4fgFFz24gExfoWC",
  "key13": "4XahBD2PxnHP5c3dmbrbG39WsPJeiwQ5AjmThPJsD3EDYAjpJbHxG6BMcCNfXskY8Nx91QgbJGuHQ7xS2uZoV9fK",
  "key14": "25LJFd8DG3H79LPvu3NsEJyvCw5qdGpLW2eNHiEKFyEAKXyodRt2HSnLvBtQBGpt7NHepZGouQBn1Y6Do6Z271HL",
  "key15": "5RNRrjCaaYaJZQh1spSMcUXaoCEYjiQpJnUQFRxUVmaZ3Pb8HChS7XM9ca23dr2NXBakPNMzAtVmPGtZYTd7aHxz",
  "key16": "5x4yU4HS2cawqe6x7wagNrxB1YMo52xGHQkPHaVcv4aWKq3QiGDcmpYvdQDhyA2Hu7SPcSKyE2QkfRrmPHEKbPYx",
  "key17": "49ozzedyb5daCHtGAcZYXUSkQ4NQaF4Xsgk8T8AZ5T9NMshnJcGdWtKdhmk6P8LQNjUZU2Jt53N9GKh3yeYhQgSH",
  "key18": "3JVdzbiCaNicHzh9ZfRTeuJuCkthZ5uJKggmvt1yHYk3HHaBxHxLyhxYz3hihXnLW47fwWnre8peuyZgsUqBpiSP",
  "key19": "2CoBcjJgC7U6KhDzwZNzWXgs2frmcioKaLnvUqMk4nAVXDb6q388jnLnFXmVYi9RzKQAx7tsBavzuzo2bfaRGC26",
  "key20": "cfpxy2ySbdah64125nBu6krf4zAuBDCpAbeXnicqr396aHTdoACJPHhEdFfQZ5DWAggvPswtaW4JWFnFQM9dC8t",
  "key21": "5DeTWu3GZqiXnoa4Cs8DR5JGE2DX3M4ScyHC53v9g1KfT9CvD2buwPmjnJj7yCXP5rbiEmU5BZZSbrSjr7dkxGN2",
  "key22": "4GuXnGNTioRNzaWqL6En7iEardiLW8gyED5kG4pisGqowZqyB3kux3usSKWpgCZ97HYeGpoh7dZ9ZDfeZSxfdUKG",
  "key23": "2G1JaMU9RAjVTuSkK69PEYgf4WJYTQUVgdHQdVzjC23erNh4hpSmQ2DrDZwCJE4EtXyKxmhGt7HEx6TxfBMKnrgK",
  "key24": "2cnZfPcajgmpDyYigX138wF8GouRVdT7LgeZ1jyj7WMKXUxPAk4MGC8nAEf5VtFJgK9XoQp6F5PQhhQdKKKCus7H",
  "key25": "2uDMf59Y7W25NkEMfykryYKetdDk4ZKV2yrovwAntpQRbsP25kHV9Fk4hkxwzBUtXYmJJ7avRFJp1DKrSEME8qZ1",
  "key26": "2dyJdB6Ag6KXYnXhn789ASLWc2Wz2afG5NuyxyBpmL8SxQYkRZa2bBZMt3SgR383AVWYoDZ9AKm9RGnB8DPxW5Az"
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
