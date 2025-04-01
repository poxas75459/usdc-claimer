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
    "5jABPeAqiVppGqiNBqe65EcmMURbE4nhUPnu9iF4VipHVkhUVeqENKoSxzecR18XdK8a6Ux3zb9ZoTJ67Qh2JJHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvxnxdLDWXDnZo3YiRu5Z5LjDiEhFevLLv9A83eQYNUhNxPyWn4ZEjmJNtSp2K1FKTv3sf6rCepT9nDY2WbcQkQ",
  "key1": "5AZP8fbR6XezEkjjNJR8Wrj34Th3MDhTQktNxBWBdw9E974jpLv4FDWnEjAbs6B7yD75Ne9siQo55wQYuJAbXPhX",
  "key2": "2nS5qRYvxrDnrdmrAWBuufmdqCCNeVidx7qNrv1nWeEW7zeHEG7SrUKDF8DRYCWesmMAtFqD7xjFpNVQExEkLCXw",
  "key3": "3MzJ3HscjZ5G3XjjjC74ggjzjaGokfA2BMoVongnmbcbZMGxAxjpbmoyvc3sQGXrqDgunmXNrQspymhnnMZSrsdG",
  "key4": "56c2XFfuBRhW5o39RYrpya96yqgZnEanDpZLN8auyRLf1152smrpBv93B6t9YxyDCPxBTYgFf2B5A542e7itZUEE",
  "key5": "5KPzfDXNfd4MAdr1EzWdsJmpubLSEeiLjTQp8ukPA4CRYVjSPr6QpWY9kfLPV1hzDdjooE5rM529Hbv3DXY1czsr",
  "key6": "2HmWhpZtzTiioJ5Z4JctUpT7ZzErHhUcZhFm9idePMLxe1jPqCTkQNrwE7SCLjXTqtVZgJANM5BEcHyDiSozcmTR",
  "key7": "3F2UJorH1CDWguy6qdydZbjwFs8FfJwfSVWgJhQJY8F5YjAfnfDUF6TFWMkX88gkKQwabCzRfsdjuqzoABa1qimc",
  "key8": "4dVtgpUaBGHvf4AZno9W8svzw8i4ZvgjAAaweU5gYETXfQ38fDacBwJYjmsEyMfTDJwGNhE4iu2QipEZyLUf5JX",
  "key9": "42Jixu8a2C6n5w4qA3jqmSVccrhiV3rYkF2Upnn74zwWG9RqdauNARJnReJiGdqKkWWvhycf7PgcJFyF2BY8d3ft",
  "key10": "XoWcGYC3dB2ndiLcjaK5BXVrWXDDo3duEkqYAXFFqcLw5ZKZvyZSVwvu8TX7jdH6Zv5ks6DJ16qhyU9a7ENB5uY",
  "key11": "4YtVUwcpQd9EnTtznDxtJEms15PJEZwG1nWExZgY4h2pG9Pp5k1uMPPBhNHUDCXrMy2Bb4QbsAvxaBuwsATxYR9k",
  "key12": "2aEsjsxxnzPKPMYvaMUYqwMwmj5eDofQq6PwzMoLtio3qX2YMvVDFsjNGSoLzxZrktvFx4nAt48hW7z1RcgnJdmc",
  "key13": "5Y7RDzgRqoiBk2kHBDLw7vh2zaV3FiK8ATgYMLt1pCD5dnwxKQKRidVi5WbA3RHwXQi1wBEaV7aEuHRoJA2KW4B1",
  "key14": "3rR2EPUPBG7gFsuEayaDpk29g9wBWE97PUVW1T6ffpWbeUMto1ytdsqN7dwTCrtvCK1XEfNTfZac1ncgNw1EecQx",
  "key15": "4y35rmcRqhskxUcUR1Lxf4tSFG8hg73Hmz4KHES5tm6dvzDaEwP89T6Buk9LqdrABdDAUBmJNQ3dHb8y1JoxsH64",
  "key16": "25AsxVk4L4VzmSy6irPDmn4PpcBnV2QEPwFb6huRMbgDdXoXrGNnxzbeLob386jgbcpsyHzuk6DZgZ8VF2pqHwSs",
  "key17": "2pQDMbidjFwCBmrtDa9Byf3A53oJqa7mPsMAWQKrnwZBy1HY9DhfipDquvreYys2eZD5NM1jqJmjoWieBrEYzsN2",
  "key18": "4BruBTqWcoafrDYhdhR3Hdv6ZL5KNvA824HEd6nQR74zEe6MBaXLLSiK2r6b8epWJYHg2pAMJqSEYpXxKfcZ2rb6",
  "key19": "H5bYJwyAMYy7Nff2pYveKxncbFZhuQcP48TbPS5ihr6T8P1CUPAxoRfsFE6sn8T83UpM2JQ5kTguhXqkjzXHXCu",
  "key20": "KpEgP6Cwn13RwphBSQkxs8aJ2z3BwNmgis24M2pjpbZjJFuWK3hyDEB995bsnjEAjZ89XKxCtcT9iZe9J7t9A74",
  "key21": "2Ae4czdPabjfoyDTMzxU8Sa8U79wsX6y52W9WywH6cBmVHSc4ikjNirDG5ehj2gb47wRe7YkR3R8LpfNR9XDcyWo",
  "key22": "N2596gxk3ZMCnaywC94tMRGpnRKfjxvfeyX91rEa2EiGvASRuaRDRKXb2FffzKUMhA4Uq73hTGeyXfhwqDWhUuS",
  "key23": "4SKERwxcExgyyXCQCNekBd78geyckrTMTUYWRecaBzqk78WabPx44G3wGdvjzMUascpdxD8xwUKv2Y4XxsW7Py9X",
  "key24": "27aaLfkopGAjf5chHuxEF9hmGtKeni1mwESBv3VA6CCviF4YtcPDpXDysQ7TPyhYJVBdG2n8m1sozJq63canQQ6R"
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
