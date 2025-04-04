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
    "3KSpgKMVd2X49ZtrqcUeQ8n1pBzWKiifgr9T4E1VRURsYyHi8Ga83vcxh9yskQePhG3dqkxLmNiVwtJpBEfZgXYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aAY1Fs7mZVkLeSDNuJyekV1ee7sx6XqJ7X7GmakTzMMug4XLnrEtf5fLQRALXfrZaBkyyfjja8axsdWmo7ukFM",
  "key1": "5hKipEwLz4n2TGednuqVeJLstyQaEhYownEaQhDBC6Z21YMhNsrm4nZAFD4HHrQYFfhQwNdBL8mNZ4WLQf1isiEQ",
  "key2": "3pxy3q6VpDN9kX5AkJpPYsfd3ThjVTZV83JV3N8G8KCPQnjNhRTZtFFMSrESg6Ni6n2CWvPMTGSvKzVE52gt9heX",
  "key3": "JFKge4fgLKh2XDMy9fWQH2QNeLjQ19o48MKJeMBrpih388t982Rdto7NPnQtk8R1zV6LUqjmEMnsVYzGdhLPKNa",
  "key4": "xDBCEhiiiQTz9nDubs2ufEbfsGS7fVrnZNuxkTaYpoWUswqkf4hpS4mmcszEG8QKyG4ynTqG9PuKbeg6BbNG2ar",
  "key5": "5PSsAt4CAtQDs8e2aEZvLRA94UoDemvVwT4TqxgPrDLQcPvdttiTCw7be4SskyukRxEFgdajm5SoE1wRGZF64fTR",
  "key6": "5z9UxDp5ET52YAVHayCumjgrusTA1dkquw3BvAADM8yxXbUtA1mjoh3fpwEGNNBE98wdEu29nA88RFRRtmKVsDaS",
  "key7": "5xnxt6nW41XALNUTmH8wVcoTy2odikuG1QxPuJWo6uYqbVXvq59nS1vMGb8EZ2vdauSyeyPAjHvsUUyXi8RQDcbx",
  "key8": "5y7ZXi6FgvNQx9MoHWRUGFcmdsmL7Q1kcMtRTmMqn3VRLAykMTV67VxQPb5DbzSwRG6Mhd29hpswN2WFDePGFuU2",
  "key9": "8B57AU4aN4E3d5vJFcV1hcBmtj7e6ABj8grTgCZdiP14naWqgYL7yZGDLtN2YcpRJ98b98JUahiEsitJXz7wN2L",
  "key10": "5YZJF5inqYhm5Phb287Rx8piVXfHLZKByLkmCCfAu5vitDsz5mRJm21TRXJ19J89jtG3EbR39wrhTNofJygbHNH3",
  "key11": "5PpKBUwH6aUYSUKjMsP2gUfnpkpWZGSsdfJcA8JG4tZbypgdCwxBvn3zG5t3VdgXoHsaTpyVypmvrAgshS2uXK5D",
  "key12": "66WVDvCZgAmUMURPEQg2PW2iGeeRB259jX6Ja4nLcGVPAKuyi7K7E7jafn93yHTzGqvocxXDQaoF9NE9CneeJeYs",
  "key13": "5C7iGkZqPvZashpNx1QivWmc27ZvieJbKuLbisNoGgDniuMPCiDPPJ6vt7dALwHrdUsrKFAkUgc9uBrMVqC7nJ8F",
  "key14": "aiF9pSPg9TnmzGKRamYY7rjG8JbwKrBzEfEaN3Le8Q7ojtLtYTBRwx2qT8wu4YPKh1fs9jc8HGSCRoJg6zcZFvp",
  "key15": "7mizN36nVNxoHXZ3TTCuV4JAEF4QZZXu6RTndUmkBmDYyn6hkrtieFEYZ21198L67pcSm9UwkkTCvb2H8r13Jgo",
  "key16": "5jijU9xhWswK3x9ACzQie2NGDuEFpQFtPncwgExZ4rYFagkbXBHoZE5L6RSLr9w4jamJDfPsFwWzwcq2N2MagTWW",
  "key17": "4jAmDkSfHY3fZXf8CzRhh76nfXHjr8XSNv7sDxHVGAiUTQPjh13vz1Hb3VSL2SMd8ZrBb84ywgfXaYM8Y4n8azjp",
  "key18": "3geYBWEo2ZBnzi6HqjWpeVEKf596K9cH7zZqYfnEsf7PnXa9BbmavUr2AK95WGt3WpGrG6scjY8qVpXFd4s4RUdy",
  "key19": "3uYqqmQmJvD9DQRxwYuiaj5nztCEFSYBbS9C5mCfkPS1HqvuntFYW7ENzBdHfocrToYEXk3WZ1yTwS26PvbsArFR",
  "key20": "5g9Cis5m11P7Kp37Ydn7SP3VmJ3T2JtK9haeuuWUj6EcoioNJJ1ojVPh8mb3SwGdNdKWVT3eGPPfPtji8f1YoVV2",
  "key21": "5exgzNHsm1kM7Y7hnYfsrernQSHxLyqFVnCV4CSdDTAwD3Qmenod1rUVm3cJDbrwNegBPzgKfts7vcQeAzBv2RpM",
  "key22": "62QJkF3v96tdUDs81uK2oZVJTQyBGThkfYfcvxYPK9sXBos3M6qWaSjGXzrpU1FdQcWuhDVnVJ7C8kuyw4RUy44E",
  "key23": "627WUfXkksMFexckQvanYHrJZZXkBJMXqoKCnVtjEqXLGizRHpWbcuGRKDtGZtGocU9LCwdxehV6waAa23uKMJ4j",
  "key24": "44zD8vLBHGqudR6SHn7NgeosV2sDt3oVQNzGStptQ6mmKWPzZ9d1GG6Aaw4sYNQP6N2wmikr1JCAN8zCZnfWfamB",
  "key25": "3TVGiyPJYeeTpb87S2hT79g9EmJMWFtgaMGH5x2jTSbWGiDy9amhjx5vWti7rxmqJQoXaXMqutbGdrf5giy8KsjA",
  "key26": "4ii1wZnuRiv9bvuC3z4hJnm6ijeacGdXesvKaYXrWFVn53umMzZzxr7hoEwRzLTubpci1DXdUwqhmHkFz4AXvFUX",
  "key27": "3LMYAa6QBnEbiifbpMjZF9EoD657dM8itj2kQiEHbdza35yTtdJuw4TYrZTEeukjqUU13Az9KEArVMSy7vvuVse5",
  "key28": "48LvPD7ixR1VsPNNGNY9iJjXrfXU1G5k8EKRyNcFibdNa7zLVQYY1GSHk5qthWbP4tZLGkw61fieKTRCxdW6EgRX",
  "key29": "Mb622v2p8aSoCDVRR2iBiSvbynhriyuiY1mNqacmzeMrA3ojqQ2J4uqj3uf6oYfqkC9MpKxqqoZhC18MpXrVCVe",
  "key30": "61yGgQToW9Zuud7hZwTtHtX7Fuo76QjYzCMKNy1Lr2WEZyEeoDYqZPj14v5o159JgVwSaGGpPWh5hh6yrrGunuPT",
  "key31": "67pHAzdTNuV7XkPWX5UDETuan1umuvUj8Xd4N46Qh7992SMvd8uzoNeYu7cg93D96YCqyAPVpcCZdAeXrrFveugM",
  "key32": "3bDBhzm5nohzHS1STFNc5yJF435kvHwmNh3q5MQyCR38yE5GrbN1hyqotvzQsjBZsEdoMYoC9f34TnQTdxt2TBfR",
  "key33": "Pd91fAo4Svk4B1BRkMzaek9QmkR5pfkpbi5jLEfMfwXGZpMWE81sKPauDdQ1xdSvm9hQPH7iAp6A4dwTmJnMvwu",
  "key34": "2gcGpvazESoWURSGTt76FbrCcnP4YNhr2whvdG79kqg31UVChKSyj3QpSVtPoXbuzYjxt84QdyLSScq92rj32uen",
  "key35": "5xAZWWy16TGZnaN2CTw68ye7KiZa7wGveXbo5DVGd9PASYSzSNYtRbh7pxM9kPdsJMrMLTDeP5gVKEx8H7tVeD43"
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
