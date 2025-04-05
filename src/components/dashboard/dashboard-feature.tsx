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
    "48PL1ePFijweyLvTBK7XmEWCi7BjAwEz9bqdjWTM2fx9WbjYfKaWGW46Sfs6WTxDtxJRD8wy3D5X57Zfk2SQu2A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuUFbCb5t2VS2W2WfDRCmV4Az8xHqZ5M3fbNnDb7upz4FnBzZ6NyobZU6hnFZPw35Cz5oQAKbivaKGwz3GVgjJr",
  "key1": "4gsqsCPtuuh4VJDBUPvnzPAv4TrTb9VpAS4i32gXc56TDw6JSjzXWayGfWejTyBv7CjbzQWbuz6XdDp2ryWumPK9",
  "key2": "2vApbBbKMtv8HURkZPyWAZndwRVYaB4Lx1TVw4QR4dYrxHbR7iKRktoe1TTzWrh6bPUH9QfrQGx3BDG8T23ES1P4",
  "key3": "41U54JaQqy9Cb7s2GqdrZ8F9xbhLtDmfjkhBfkgqfqyPMh7r27mXztSvmdMMGhtX8dXrb8vD2GaULgEm7yHQjNYp",
  "key4": "eteCfVkNfkUWx4SaViwB7VaETyDCL52iFE93StLNW45DwToNEKzGt13D3ZacAChnVJuVYhtvinxaSSEXYWT32GF",
  "key5": "3WsASbxoBpHLBNgvurcaTdMUfMCtuCNxRRzqNYF29CHLBwKKXVvPkMdqFHey2XWYJd7YrrCAUPQXa5YYbvE59kFJ",
  "key6": "5TWeV9t3QqfLXjY6pXFsz9LZbE34Zgr14kpamykE4bV8PUL5jxxUCocJXPgRe8WHjVns4aHAUgbC7jVCsm1GboF6",
  "key7": "JNACLGrf1h7cCrVJTdKcVLycspggzQD2b5GqDecatmrKmrfjBFiJv4QceAaGGY7XVLX7QQzav1vjYKEhaQn4ZEA",
  "key8": "4cEXMmsRk3kqpHgFaHM81DMKvFhzFziwBQgTWT1eFHDyb8n5oSsARizwMDAdcPao5ECGCdxY2MU5R9K9Sc58MeJ5",
  "key9": "2uJNteUYsQ2XSSebcGift1AeeCEdVzUQ43L6oSkqMR8ZtCtEvZQGpkAHbLStZ2YWCaJECTYeBf6gmDY19PmQdCKG",
  "key10": "2kKKVNLUE3TLdgRnY3i6VxTbPxSV744YGqLhGzoSH5YZTxBKf93Y6z55UF3kptXAMwY5Kq91oBXxufcmee8cDxbU",
  "key11": "3mUFKbxKa4NJ2khXmcCRxK2MjwaDeKktCumYr7iRg49s2S7Ku83me71cQwoefoywwNzTn5rcA5sUSBf5y8zTSCq6",
  "key12": "4x8H1jAUt4TVFeMQvDfCfNwYYKezLqDoDLvusxjtXacgCnaQDF6M2BHoaUbdUxpaWZmgfxTm4xum8BXRPsPf8Mku",
  "key13": "5BDjNMaUe6WMbgv77PRBvJNnmAwW3PK6bYSzmHT14kFgFaE6LuFuAP6VpxVw3cL2SYF8BeZVkket5hMBtVibNK5d",
  "key14": "3C6y5WXQebHPC5HGGLdhif5KotbCTtfs4K6dqfAQ68mGUZVuXyxEhQMgkgvcMMhxysij8HLQg7y4s9pXqmh2VWeu",
  "key15": "r2AfqERfpXS4ptThYuKsxZAhEFDUG8afdhow57gHMsq35EYrpDDkX8xPfEU2SN3td37oTYw6YDsd9ALgqXi9eJ3",
  "key16": "wiLY9sPbq1YuzCnaGDyEBpPLp9jaGoyW2gSWhCZWRfAQrTV2tzBwrG1aQQDrzDwxbLiea6gkdsEPmNJN27mYt7A",
  "key17": "3ovXgNsHJmZZ4s7ChKWiZZyzaGvc39YBUvtcL94bbumadhCaW5w5SawdCc2evTgxhcBH6Hhm41QuR9QpF98SQmzH",
  "key18": "3WM7TCTgT7zKePcM8WiVDTSFuuuKKmFRSbTcC3PJeRwBmPYjGA5Yt3npRM3LmPRhWhUVZYRykNxJvf2dHocFtDuB",
  "key19": "5NxfurZhbfEa3xBx1m3ZGxPFmgM1pUQfadbRUDX33LxRxRTYWqyg85DcUvEn1JSGHoe1DgTctR21Var9d3kuWt3P",
  "key20": "65cfWsSYxKQVvuqT7mcwG6pQYpjHtXFe1veFERHoWhtERv3mGmMBx9GK14ZX5Hoa3LV967ALnvidJHcserV75Jdg",
  "key21": "4Bvpb2SxrCGXiSiMnin2Rg5hmWKKpReNWwd9uMeev5rS5B8RBHBTmZtTgiedFt4JiSUGh4yTfFZ8xFM38zXjAd8v",
  "key22": "XooR1JyHemuyDMybbd8m5y6mhnYDWAg9t94LKugFd5nRpyQZMDfxUNMK4GQbWGsZNtv8aN7aQxT6Qu5ZdAFkHAs",
  "key23": "PTgFn2EP1snfXV9ZMA2QNdj6HGnZCNJsN3BuSgi4DzyybcUGGDi4HvkCs7u4Zg6dnszFBDqmDJ5h7ShBkpiyhnD",
  "key24": "2MUEAPtMithGsuXRCYsW7WffYkmbEUt8Z5fCVcGajdCEAhfpeGSoV8bDMDsCvKUsMVidqHXNN8onW42Y3kgrTHym",
  "key25": "3hVS6t8m8bwnc4t9Dt8Ex47r3LHXANxbdjhq3fxc55VNs4EkwBwNeLthvMRKuL9MkUaY88341PH92gZ1cHK9nPWS",
  "key26": "4d96xoRUUeLeRzZdmY4XU2fFXjR9ijR3YXZC1TnwrJhS7gLjA7EixJSLhbULxqr1NpyRQXCuD4H4DzqA5emjPhKy",
  "key27": "4Cu7Yq2sZZv5VYduJsvBAJ6RggN8iTx54xhhBoTtijFmuEmS2rHMrmYuKPHxaPzcpWNFrzS3NwMdUkkoCCub3CBe",
  "key28": "3vnQ6a3gq8mT9wCk9Z2gZKbBw7jh9kFVzwD2simgE3A8ndruMmgsSbo6iZvjavEtSf9JpS8BTznYZLfKm8sfwrJ2",
  "key29": "3x7PGC7EDvn7AN4oZz6jWmxE7QHX21uH6DgQnYJmv7YRXXgubHwqhSWJjgGN6H98MqH9uzcQGSsBiCrvsTvLodWT",
  "key30": "DZGszJj7yt3AKySUJMgrkqDQkWqd4CDShm2vEALEvAvhLY9UfiziwgySuGRPyNjFS7vEWZ8PYV2B7zSpX65ndSt",
  "key31": "4DGWAnHMcGjceQW9FR4xPtY5MK2HhwHzZwVkrRbAkmFeiAcA6MfW32UdBJmiuHEHn3ETtW9FL7WZDNa5Z4eBWzCs",
  "key32": "2KtCaBoe816h3TwR3nJX2cWihk6cgZYmPwdmWBXKh2jympXKFk9j5Jhw9Cw9wQCht9teMprv1N3M2TWpQXQEpgJc",
  "key33": "DKCEvPs7Af4mvAzpbD1HHJvzcon71yEJCzoN2pvFKGvAW1vPoQh5eZoTkLp7jRq6cahbdU17MSv1dd151GhWtzF",
  "key34": "2VYHEMpdY88GvCmxFGwFMBU65wytVnaXhpAoMpEPtgUMkRKNE6ae2DfuWfXSYjrmrVhmVso6DTi8A33vSrvdBVcx",
  "key35": "K3hr8Xyh2kduMVBjdFaByXpfHrfSrzyqZ7sXMnEsvDj7fHpB72d4PXzWTvf11Hg8MWsj9vgtU83gmUpngP2pLSc",
  "key36": "3Ldo8K7rnr7GugGWYKWv2XQRV1NsD3tV57K2RJqg7oqMcGZzCmUXwtYqM5Vye6AanydQyhE8bG6cqnBhM7cuT2X1",
  "key37": "GzHEp1yRhz4kRcaCyKsfXnewD5NhxeBTYf8G1dLrT59QYLRbBe32tw5SGhBL3HrpehnCxfE3wDwoJTMBybpvBEJ",
  "key38": "28DU2DPboy3xkH5RammYJMropMSYpbeoSBBv6nzobEhVCQbUtYSAzBxCvVftiwgtpuSWo2gewwqKL8LDyPKrkfxy",
  "key39": "4snd7t6qAXvsVBbLu2Fcnf8wYbHBhESSHNPPwAjqKrcPFDLTwAvw1LP3UioY2W9eQm7pcHyiUJ9K8qbWxfZ8P5ts",
  "key40": "uJGTSLdQ2Hr3XhPkEzeL2nP7sriqg9MdAwUYWGaJPuK9iYFARUFd2oDxqH5ErxAgJ9UYkuMTinV91FVcuNedaNY",
  "key41": "4CVBJ5gggoX2zMeQLtszn5EVaa7jYkB1dyTBFt283NAQpamtMtZDvPWUMMte9G4LzmYW1PuoCbUhVSFoWiyiXk8C"
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
