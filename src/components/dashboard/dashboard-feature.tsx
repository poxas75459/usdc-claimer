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
    "3hLqfnzL3NtHdQHpLGvrpTsTr1T5os8EbBYTA8YVK6PkFXhqGEHxRoWbvm5fDrqyFYqRLcW3yFwp5YyvDuNtEQBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWPHJVVDuB2tWgCWoLNopvk2tGLEDBpMrx6s6b9QgJABdr5hfCZP1sJVBb2UeWQSw8pNR3XqF6jRa4HQqQgVY51",
  "key1": "66vXZwnEjkeWMgSFwKKsSQPnpLyjXHGELzngqagEMBTkr1ee5Ar4CC21Ts7xfYHUmKd8ULyHcgXoERSTwdWSZt1u",
  "key2": "3dghVg724XbXQtBBEyvrNLHg59gudVnSkHBRBDdgKtAvC2bz2ioinFCCvDM3ix7MmafiowFGEV9zrfeARtgZXPPm",
  "key3": "2dPVkJAJdtPLmeUhSNqQhvJWxmymHgb8ukriEFSfWfVihTkUoFnHecWZZPrJ4HM6CeW6KGzqXVjgTMuDjiiQvRVZ",
  "key4": "3yosY3QUznCgVzTw1HrESKvNcVNYjw52qXvnGHWrFAdE27yr4DVKzN6Ya5DR2m8Ftf7NY97mf9R6yYksboZ77UZy",
  "key5": "2upaVBx22n7AzGJpenmuLwNLFCpACCx2iseFTFK5TJrEMceNixdFqkrmBdzdVjc8hGN3MiyxjeMqHKhErmgXVeru",
  "key6": "2JdNLE2haDZv8YaUzWrXQJ963PcHfsgiE9nHVB1niD6C9yQvtVFKmVXeiZaKf38XdkLsanPty69MGAMAoqYiVArD",
  "key7": "5DzrnfNpwiN5hoaUqVKcxVjoVa5ujZkYvqLYxbvecCA7n7rDuscVMhGf2bQ5Mj7JpuHqKVETXb34FLm8nhQfECxa",
  "key8": "Qv98cF1ukKa97Auj34VxDx7mNbQ2eqU7QTQ3KCNQnQvwWxKRBFhKk7vzbkYasJW8ZECTFuJHW8WFVLDr7TDxneB",
  "key9": "5CW16WcMpT1Y66jcbRY8HvdHouAyi2yC5DTuyaMXRo4HX4D7JnV281mT3khcXaAzExHvwqyPD2kamP9qChzN9ndX",
  "key10": "uqjLELeHkmxSjYoT7P18W4MswkEjRLK4v6AuzGLFz1Zv3CoR8MeMRum2qDyAyX3kFup7McpYoLSChfFWHhLgTnv",
  "key11": "3gm7XVWmPGXTtrpHacZKvdyNXfwrkAcC5sMwMczPE2BU8wcxmGog8KmThx6YzNWZMHFFV8xAkZrjKqLotFquF456",
  "key12": "41zHGXPB9PkojoDBuftLKLVP911pVVqrNJXhqoyhGr4Vm1YRE5FR8vafWXkYBg1rAnHjWionZemKzSKNSnFhpfMR",
  "key13": "5ziPc89yxzNMKibjBH1cNw9oWMQtipyidND86KXMgSe1qKsRNgWZFsZu9yhVZG1RKAPYf3PbqPzgGUa4TQStgzfE",
  "key14": "4rzCfD31DC6ktbKR3T6fdNmW4Sj5TgkBZUn2HJySFsNxrEGxxHM1MLY2MMtjd2CyXqVWofpRxGB6rro1EMdzm8Qw",
  "key15": "35oxtbfx6WnC878KCeo684NVkwnBRTf8CDCoMCZbvzhBh7ir8L4fzAzG8beHwg5yAqwbmuHDQR4b3SBipq2tZHon",
  "key16": "32iYxgxeCx66j1DK8egYpSykt7YCqdbbTg2VnG56F5W7qc6Xj96uFKEuMYVCa9gX1F83PP4w4oBDRnttRwXNQwrj",
  "key17": "VdeQEi6Pni3wFc9B4PcxwsC7s1T6u5wz1te52LbFAiSFkTJhEmFAC81tthd52EsuFBU82PhcDmE8KpAHKkYanM8",
  "key18": "4VRFCiTiNy8HEfC9HXmUpW81qCntWgs3pFdCLh2mUBti6PTcuNvuP8by6SCPQ5YwYXA6L3UF89tFMypq6FKkPijM",
  "key19": "4Wz1muipDAM5fpXSHfMdhTr3FWhPgB7RSJ7tWK14jR6AryRr6VwrFjrxuN4MrCNoudPzLLw6c1CnwPH9kRDq5q4s",
  "key20": "2uhgvxuJatH7UzPXMUierDJjE9BSH84ps9SRcQ3xmHkQiZmMUL2iWbfn128PvktSmWhC1ZSPW4HtMdSkm78zKCxK",
  "key21": "3cUAKgDFwPEwo65g1Gy4bFQx6UJjob2GkKH6bc7ZFzZCUTGjoAuhL1mdc6KeZ1q8Pw9mZKa6NXPVDQ1o8UtVfNmK",
  "key22": "54oFzdXLKUp7Uqv2Dx4hxUFFxp7fcfjiYfAXM1soEDwLtBBNDLbtL9bbFNYt1E9A5NjtRGxNDQgJ4jrhB53p3a7r",
  "key23": "3hv4HaRumti9Jh6hrYc1fQLpSKhjBo7zFthoZJpZNhvMbHL15MJx4xB4wdZswakM1CxM1ioaBnjiHE92ihnE85xF",
  "key24": "4QYGVHRX2TMZHYexAvowUN21rRfq3dxwGXgfpaixf2rgduyPVR3iqDBjTgwJ94FWJ9WCAJ3sxpytDo9xb39cK9VJ",
  "key25": "5LkxgwXAqWGPrbosnf3h8CHeiXSiYb64M89UwUGh1bq4kifH7LKMvB32etWjhuZuXw8f2SeDByuVjNK3HqM3F72p"
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
