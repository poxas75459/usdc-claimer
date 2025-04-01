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
    "4QxCYfdEVq4X4zmnRr2Jbh9fcjsdwLE66tLbQXDAtaHLbHhxA4wvkua7XRYDvCrPwR5TJRBjshivtbP7DN6ZKjAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHKoGu9SSoxP7JKFeFDHKgYRDG5gLddHe9VFK5LduNyBKMuLvD5AVRQT4aZJyM9vkoXe2jPfoxzVHFGwKbqY4VN",
  "key1": "3pR2sPXiAWM3cAWFrFcYEiT7Rmqo6eQ1akcteVgP2yiEFEBCt9SzTAFyjFzkQjM1GVkDaNrnw2mbRS6w5F8GwJVY",
  "key2": "4rhkiznjZhCBt1fPKxsJ47LfJwXM17C7KyYdnF8gD1Zb4rVJ7hbRnhwqcnBehSKU6D4irDep34iuBEjqGgq2DFX",
  "key3": "3YvfMG9MKEvstgCbsM56BWeU4P5fM7hRvkNQKbVYs347ZxKVW972vm87PXZbPgRjTWpAmygzuiu871mUFZQhK1GH",
  "key4": "5gz3TvPz6biFBTsNuA7unouszdKaCcPbJvFD8Dz1rLe34BpFmHwF9sVXnNyimjhVmawuGCxVnZsuJj5YhQx1kLhy",
  "key5": "4aqyMmQVm39HDyzQPhjAY8VewAayZ13Px2UXPPGSss3mFvLVRNcQabQb6ZY9Qkm4vVPmzZQsbMcZzeWtcSmvkJEf",
  "key6": "4gysesqo83LrUYCsbnqM77XzD5do1417ENcjqakN6MLRsxHv6W5cMTKjman7kFXwXGd4YAnEh1f93s5HkqnL2Zyq",
  "key7": "4HEdnYPmDpZDAVfs1ji2JRYxJAQrpPh6i7Bj7QSGiHDvigB4Ff1eoZaycw36vdLXP9VZXQYqnvMtVibneS3Ne5BE",
  "key8": "4LhU7ErLDqXfvkz6XtxdmHXSRGiBcCcWQD2giYMSH1wEPu4M8TRbHWwjNS5rKbTcmzCbhE67fH3nq6eUVaUutWwp",
  "key9": "4Axq1NJ2dYX5yRXG92BNhJYXKA5YB6kjHBZuDHfRQ5DuSeYHZrp8f4xCNSDbnJ36txvUAnzUmtGLhRdm1KTeafez",
  "key10": "2EityE8C47SshgXEvfpfrikb7khmXukvPyVtkmngwpe7QMmnLhqxnpj1327Roi25ReSuEjaa9aKj5eFs59VNMjJF",
  "key11": "38NwakkJ5NHrBFFPC2qQTHHzXPcfLP39DiP1afyC6tdp2hJXTqra9vBddoBG3FPPjZJHqzWWXmgX4Ubu42sY4btU",
  "key12": "5kATC9mGdCVceY38tcfJQQoMVzxDxmi1X73jxqwgHEEdFNKcK1ckJGFx2NixHgW7vpr1MVVH8LChwey4WE5pPQs6",
  "key13": "5DNNEDUmYrpG4obJkkwRyirLe8bcFitxLteWAfYq6Fenfj57PCBeJWY3jmDvhauxmzdfEnDs5LFkzeawBw9Y1wSA",
  "key14": "3a1xkNhCKd8pqgvXTUDJ3j3LFcZZZjvgPcfVfp8RqvraMfiwT4U1mBuooXVZCikamb4hcANAnvVfax4QPLmap79i",
  "key15": "4GP8Lmfx8uJjHF8jUQd5RWUVS2z6xRJV2uLPBduLULyBPpJwp6L9Nn8MiPYuod5VnhsdUUmCZSJLtApMrdqPy9wU",
  "key16": "dCpYJNPo9h8a6kR4SKEVQzpYL1TZPF2G5z6b342E7MJN53gtj7iBvi6zjK9tyraz1XeE9ZfqLePaDpZumwQ7bCz",
  "key17": "8HdmCWiEojYiNsfBsc7ZTK7ESNuEowfHhY4tkGKmbAVbWwkfbXz13yST1z7RAFAdooBsKafoX2GkKC2q3qAvudr",
  "key18": "3cmA1P1r5w9xkbHzohy34iB2mNub3C6FPERpvoJ2eX63zjzbsEcTACsXYJPvoJMuUW1M1F31wTyh9yWJgMWHJg5m",
  "key19": "2G1soSKTZq3bYzQLX8ybyNdWUM1a8LR9Qo2HhEivwyZw2WUo5eJiDWCxvZmAxrWPbsvYt8L1vaB5iGuyMzLhndoF",
  "key20": "57748UE1LVdCkmukUPxV64GGerN6Q5rhHgvxAuLcgVc5czjGQKeCcvwnLVXgFvuCXVnPEqXutcA9wcsk4u7pusL6",
  "key21": "2AFLTrihNt7DjHmMMaMNhVLV7Az9Dodk4THd8dW2dytSroZwWepYWpT7EU2EWzUir1MS1QUpUJHcUHws2Yv65iGo",
  "key22": "2pg3YZ115ubfqsQUzdEYQyAJooVrhWM81ouMjRKYDd21gM9dH4247taQ4rpmPbeG89Dtw1EuPMJKCQJEESJ575FT",
  "key23": "3U2hyh9cEQh7X4BdDZGnzugEsButsa5C4fvM1XS8ZidGv82T2fXGE1v7wjaxTteUbjFknrnMDRZXzLf6AnEGJM1e",
  "key24": "51LH65Rv15PFaErxt3YqX6dEaw72E5cpERv3wEkXvpduWLuoPhpnSDn6CK2aWKxikxmmRWUSaXgAGrZhgr3yi372",
  "key25": "5mbfttfwDzujTqX7nDxM2Qkuif24yXawoWzmqBwM92pw1AFVr55beeHXh4gTA49NV7532Zh8J3TdM3oAMeKyYxEs",
  "key26": "24sX5Ap2ZPu9fSvqkB5GQ7tnBjJGPaSycU4aEJobC6GgdSLwKqFcygRg3an1yqxeDmdh9LLGN4V6YM5LjsrZ6uts",
  "key27": "5Kf5ywfP6YuyZVem2DtD8jcU9gFResSLE1nSCJc4KZ3ouM8vUVnkh5tdCNh2qi3RcUaQnrg3Nmx8zobpEs1cJZhQ",
  "key28": "2PLmkEt4YYytKMeyGRVFLAkFnetnzo2wHyPGq5z1igY46NTnPPP3stTNZdCAQWuJJxvLrdCzXHgr2wFKe3k2oY2A",
  "key29": "4CSyDg1Cg1kND3JmjbMpCfe4y4jS8noBAFsF7ECXRSNmLKtoaPaxmrJBhoJ8jkJheaBte9Q6DCYGiXRvVfVtJ7eq",
  "key30": "KjHBgGWHRu3WvAFnmckf9k3wZNwUXNucWpHU3nvVq9A9gMVMasU1dBeZnwZqaA5sHmvhCN451SQFMnnPUFgpexL",
  "key31": "xjDXki4bLoiWEc3AEdBobBYBhMPQ9us1tmQM6hszmHZLMbMutwMMSUNxbb7NSkSitNq1GHFgRxhi87QdDDoipDM",
  "key32": "8iuiKZc6zDxMXo7Aeb4hgrNp8qsLt41te5RAhNpzdE27LAo362fiyeaZ3GCiRq23qBMKHFsWDP9vw8pYcQtSJaa",
  "key33": "3TyKJtLF9bkX37kHo4NBEZeWsLMC9Jx5VpHcVFy7psXGW6gemKZC3xpWXx6xhLZGM1QDa2aGtg4MfnE1X6KUfVtA"
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
