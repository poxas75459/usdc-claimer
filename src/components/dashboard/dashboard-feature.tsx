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
    "3xddqDuo6iwzhsYb6CyTotovWvFAJUjkJvmuqqd5DCetKMHF99hVhXV93SU7pGMfuagAxEDkskrvJXUrCFRzUQXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYCoWNY4X6U9ktfQCn19aHCE71C3hGJxdgqyZKZNX4Z9Tq5G5AgBqTw856bygeeUvxtHXedKVZvPKsUXo5FvWsX",
  "key1": "4SJ1NNT7p56yQZVstnry9mMiUJjs2jQdjsQQHzmm4zqaCesT21PPuQZe3Uwhr1mdKkqijsXXaBqy65GYUiVm2jQz",
  "key2": "5NC1mQkZMyPJYxGXYJLG16fUGujYwG7K62ospi8MsGMWheFtMj17dcWvUc3V7AgJ9HLyHTXU4yY5gpM59UNKX8iW",
  "key3": "62Q5YMZU9MfX9ZvzjqJtUxz5AJwiVMq3EENF6cVsbQoVNtRDhEBd8mggxVY69egpvQqutJaKtwx5TrtJjNJsbTtj",
  "key4": "3BNmFCBAiBodwR2v7HEyoYJL56SXkqGzKNHuYcAgMWrLd7kuh2DBKmA8ir9b7Pi3xvjHoSsZoYmQ9aQyVFRXp6mt",
  "key5": "3uH24mgP9GWk6enjuiU7XfnTc1ANnqNnU1ebGzKvQphdManSgBGR8WcyZv25wzsmuzySLnxgv72eAgeWmiTpQGmM",
  "key6": "D1sGt2Hr8xJomVMxQk1ADnCf6ecBT9VDFZNdb6iQmj9L5psHPVF8rvDUthbAYLMBmxhpWTitunUaYwDDJNKji5H",
  "key7": "4DC6BCc2sscuzy2Y7EY8NeNNLkgt6ocX8RSiqiFnumRmJJzguCcrBXEsBRVmxPrzMDZxth6dNWo2HEdbXfwKsBFU",
  "key8": "2Aq4VoZg7P6idUGuUD488ueNy7UwZDH6d68Z2Rw3u56Q6NBpdVWwz5ZejMNJqA8wYxZK2Bi3zFkQWKNQxDdgGGt4",
  "key9": "3xjMajvw8difikpvUFt7YBa4NeMaoSzx1kuL6K4nAnSNNiQerKX5bhHDCTeBm1er8n7ug7C1j64rjNU5bpVjazP5",
  "key10": "nqkP61TTDUyGYooZpQqP7Vj87e3G3MrSaKBWwQjWTnbzephGuR4gYGej1vGhdcPcdvg5uiGsDGNWJBLTxw3YgGj",
  "key11": "595pb4GYXa9Q3AgqTYMGSyqtwu9z1KWN8qgcPKzVYJzJ4RMxPqRDMpU6URF4xZMRCEfzFXuCnyVYVmobZHUjMpKT",
  "key12": "u1CAp3DrtAwtn9t9g7vDyZ6bJ3UABC2coYK3Z7VY4cQWoVsMT4Zxj8hitf55UpCmi2ei38wtKagWoyhrS7zkaTE",
  "key13": "3wbN9YYLGVGR9g9Xw2N3CYrMB6bcSwUpqjoqnQV7U38pi8Vv5wxKLU6jpeBJeNXnDZNVpj1Mow5mk1wY4p6fTThD",
  "key14": "4NXaf9kLzS32D5RbMM1SUGha5iiwhFuDCwDjVcDtjxvbni7tWfnm5RXSAoAPLMuDrxWAayn7sdLYV3rZGgcg2T1",
  "key15": "2a3nUHPxE78BBxV8ABpDuQUfJqVDfWFKh9NQYeyKaPVamgYNAwhRrvBDvGsf9mgeR8Ns1bQ2JtQst7WwYgY1xuMZ",
  "key16": "2c5jyGqHSEVr5z11y8akZru3voQuZViQSgcsLe8igE4XiA64HD4m9LLptEYizZXQigzAUDjSJexNnUNAofNh9Pfx",
  "key17": "GHXFSFKmUya1XMEyWkE9WSqS78VBbD4BeoLutGLhhEALYKCpXvMbhXGLTCfmNq86Kpf29VpCHZvZPyDa8JevnNm",
  "key18": "2Wkh7K8pZwcNenxmowGFY3YHgLo1mDCsjWwLe4JPWnuAyAxwhLs8QkaG9yNPzdwDpXxhme53DFV28keXx1Dw3WQq",
  "key19": "4uz6b6DFM4RBdM6KZhhnxVCvMMNd24wxGjxqAkm74JwigUmwYXpbCk4s2zq81n3U2wnFVLfR53wdZWC7TAeXCx9m",
  "key20": "2cyaZ1CXZCF7oa32upeB4nsxBftrWMv76DGRQWP2XjLMYLZgQtSU7P8W6QgY8L8UCRqBikuy4MevXEAS72YdtGp3",
  "key21": "5wB4z2QGbRt5Vkq7icuVuv43fo2wxUjSUfx7y2jTL9q2QCuSKxqTioqZghrsBahztstL1TxSXJLsGueq852MkkSm",
  "key22": "4wqM7xL7XCpwfCAMMv6qMdQucS1Jie8ockbDnWihSU63UUwFQuRaDc6sbxYjXwshnAKD8eVQyHnC2bZtuXhswFdR",
  "key23": "4wgTDpa5pqVQ4uA8dVvVn2Cyp1a4V1kSHKgPV6bBamNWQzAy1KuGMgRXX7iQVSBdePP8qCef1skcRqQDFLA9Afhk",
  "key24": "4CVZxN7W5wpbbmi3uqo3MPLYDBThQNSuuJjnbtybBCC5vMd4brJcwwGVoQDY3K7oznGpCsdfjouEsUn1uthmVabx",
  "key25": "282n6yEpdS5LfxEkbJYerFRh1r7ivKCiMLN3akWtqPm72z49ZjKKXh3k3EBPS538pthJ4yvmavgujMd4WcYTpNJL",
  "key26": "2f2z91fNaXB3w7z7MSE5N4nYYmz8pRAiFper7gL1P3t25uuz3KsxrGPRdHsCnqfod9ew6Sqj1VCgTwCMvjLgd3as",
  "key27": "54ttMtcArNcPQMcHm7keVeZDkn1Cf8EUbNBENC593xXvftNSTA52Xzj7SwmXe4UfzzKkTzFukggmdxJyaif2xRj1",
  "key28": "4jqehPb41FAE4Dm3XnFoJkkKB8uZXBi4eUohjnogLsKAeWSVKaY5a2kNnNTLBM23DYqq9CnkubUqJEeMLsnMaqP6",
  "key29": "4gsuihecqjLsvL5Z4jjmB5aaR7WoJDdYB6Jsy68HkjDuF3zbJPthYhGTACw3Mk5iMkBhik6HUh8eHf1CG7ADcDcy",
  "key30": "4u6yvGX1iXNbZj6ibY1CprBPHnNGeFeYHDwHT6LZhSJyLDHwarSepSVgUhPFrJmcnggqckfK2LPW2zivHas5phW9",
  "key31": "2BLS4zxWXU3pN7EW5VLefrqfWykzdbCzwnBfi99uLki1gUUxgPVyWV93mFJxj6crDQ5X7q46GGaztYPDGyUxVU7j",
  "key32": "4FPFSvgpN6FWjE6Y1P2zG3PiM1pNkfRjwh3iQs8hEqVchWHtMgetyu5tcx5wvVD9aDmtC6behJBhUSTNxFMDmHBA",
  "key33": "2taXs69Qv5WJ1gfixTC1NydXuvWsfyfmsTQxC3S2MuhkySaYAgGAUYmeNT9LuERrwaidpdxjSUyQhpLD9QiNe6qT",
  "key34": "4gifbD5xSt9bpAQ7KEnZfQmwCbA6Awekw2ao9bTAqgBtM5QEuHxjGX4dTrPQmKK2kDwsUxeXDvfpw3txFjYThWbM",
  "key35": "3LWeNHP4dwpn5VR2Lj7aDjP2UXSFQnpGC3YwfdKYvRBBMAeqYmuWjfgSz7Epf5BvJUZDw4juGDFgmGFizxbV4qmV",
  "key36": "3mfMLbiSVYzRKL76BxyWosNMrKJicmBjQ7pRQS9Z5ShmCuLa2HCB4jb98c4obK1yjhvtJEBD6AdPbR3H2KiJc3ac",
  "key37": "2GF6pKaWMjgXXcJNuMsDm8qi2oFm6QypqE9bx8YkURxFdiNo9XCSF7kRHY66Dx7kBmjjTcchi7qpn9P1VWZX4M6P",
  "key38": "2k4JynLb9gntk2BZXjVEp5K4D34px1f98jdSSqFYe1LomtgXUyULXuszYmxoM5BK2eFgtvwomCg4s9M6t44odBRL",
  "key39": "2qbxVzAV6tRyosAmKwb49cfN7wXnB7iv4i7a2u53WiQpBCXnMXSTFf46YN66TyeMX5Kxaj7jLwR6HKom87K7bwTN"
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
