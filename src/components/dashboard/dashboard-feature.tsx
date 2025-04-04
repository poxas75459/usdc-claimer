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
    "2oYzAkArVYriuJapfnV3pXjFAXjiXSNL1Exg1z3guNd5t9MWR38apTji7kExzqJattzWnK3Qc7AyNfg5gNwhMoEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwLyRpvFkD2mgpPB4dT7YFrKHJitqU7zWeUNQ1w17wo2dYzG6u88bLLLj1J18cxg9s58o2Tw25XFTwHDpnvabJf",
  "key1": "3xynZPfvvFE9arDqhLopN57yMAdPctGCXqYUFJKLHvD7gZuSdGXoeLTwH8zbaDnnDqUmjvJTVxjjBxJmNYauA1GK",
  "key2": "xL8HbtMuG3aTSUBJ9u8tXKauzKedejZDabMHMiz1NsoJNTy2pUhePbZyHDfS46NP4Y38UFYH29XzQyFM1CtaUgM",
  "key3": "2z2BGAiLSC5WARNrRKkkQw145dqFRfZM783G6gkfHC7Rsew8nXwintJmoah8gtLNtB1GAe2JMJ9fD1ECbw439vph",
  "key4": "2tHe6uDRAcxD6BkbDrT9F4uuN3wFWYmWgH9RdHeTRGdAY7pBDEHWGvz6yJiGyddMLDowae7rcvcdtgGCyqC7NyCU",
  "key5": "B3ER4NZ22M99pQrJCBacqLSmxtgH7jxz448YU5GDUHugAJNWyALs4NMzSyaXn2pTJMiahnL2P1qQmLkR6Kt4y3H",
  "key6": "3A4D3sVoRFff11rZsf5M85HfyU17C9Cuw9uzgFUzPQxBvsrP5ReKSJ4JKCvJksPRzxWQNdVzF5xaf9whsHHPVv5x",
  "key7": "4okGRSnw7qDQS8WBD8cF64gDN4EiKgtRrFG4Ts9EN54xMWFC5QAaKXNu9BnAEe7rxRibPpswW45k8x8LFpW9LuAf",
  "key8": "2moH9KEAgyhWaJ8eahkpLkXPxbx173B2RprnQBSp1SySPXzHaNup73cNgk5cuYVzLPfHxgbko9kPu3kqSUjXLUV9",
  "key9": "aBr6Hm1CY7a7mJdy2g3SyCtcbjWukLjuof4f5VZpi3dkCxNL3Uv2Yw1jV9nLmz2kNXoGtwTcfnchkmkwha9DMJj",
  "key10": "53SNwgw5qEm9muQvQ6Q7sHPdS7GSMhS9714ycHjtbjUxrm4qUj1Aw2m3eRvNMisVTeoySZBYXopReVHyCs7ZncHJ",
  "key11": "4Ubf8E4YHtKFBDa4EzEnnUWYnopv7mXbiAqjVc58NQSCGrB493HQN4JxyWUyNmWuekXNR69Dx4LXefRf1BE3odfF",
  "key12": "4tejYh8LUvd3GG8uyc5Tc9Aedj1prctBteF81nJrvoyoTV1DmPxPnkDWjr2t5BzixUnerWyMPeULvQN9A85ypDE2",
  "key13": "2rtmKW5sMFQGDN37yXzGJpfgWYypaKRmcCfSbCRUtwz4Ms1MSAC6YKqhkcNuaUTy27Hiw49zSnQRXVH324smQxCQ",
  "key14": "4cMaiiN8tBBaAzcKPnYo2QSbXULTrxxUTDcDjJPQK7gi4Yk5Df97rL1vsLGST7bvBcZ7CeTrBNAmySeANw7tLBJ7",
  "key15": "59WijvwSJK1wWFu5ik694vZxQBpQUA6hAxk7VmDJWbjhVnYZTmEwWZAkEentxuKaEhyFknCgoKeDRCVB5JAmkLSt",
  "key16": "4ERxb5cNjcUf2cHB1t8r5Avyt2qkhYHtFr84DUFvvoQcNWbAYHhmkWTb53aS3LxDXpaQ1xPLcC9hdjx2tB1cR2XU",
  "key17": "42fyjF6JFrGiZFy7bVUvfLfwDeTqPcJgT7J5VcKFu3ztsnHDWtWCD5G6TfrguE9qR92ikBsrH6QTeLF9M5uY6HsK",
  "key18": "3QWqShbLFMBHGd6Yvc1maCjgFcmc6bUsxDKsmvgo85m8XMgEdH1eTRgiFszisVRiqd42GUKVWYD8BeNpNum3L6E3",
  "key19": "4UzfKpVCxh7g7Jtkeq1KNVgPwwCUAyDSHuEep8Z5x2udwHs5bkrNiUuphLybwXct1U5TCsiiTzX8dLLuMPaC8tgs",
  "key20": "2MAi8CYtG2BruKBjDK9ZbumuyHBnDNBrfFPopENXZG6ME4b8gHEBm8QGCXytM9aYKcHzNJhC5eLbf7EzgwUUiJWG",
  "key21": "49zJU54J8V7zTH6C6N8rX45yXZ7TxZwmex4vNjc9dPoUE6sHRfP1oLu4dHQ5eTNnuVUbvGVY7ZAKZG6Ud2ZCXXYB",
  "key22": "MywHwFhXDQ51MJseV9BCv6U72zB6x2upx6qXXCPR6tnQ5Pg8HPJuVUjuRyot3jncZJ4XLugppz6wv1imEqFv5Q8",
  "key23": "36qMhH7J3VXSxSanrT9d3uB7VofgHbrECrvmRGXpmgkNbKEuqqwSndy2cGWDVmkDqDozgz6xfAvZBS3ZRjyU7VpX",
  "key24": "3D6cCJgTxXrV1i9UVgik3qJS1ihRLMS8rqM1qbrAvtGvxKB29gKsbfeszYhPkybDYKehULkwuUnsyDwQhuEqnqJF",
  "key25": "UQQL6GEhYdRoofVqh6p85MeMvRTKuXMaa5EF6cd92TRbvsXqJt8LeRwb974PTXvqmzKRxfi3pPfGzLSqtNRUhLd"
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
