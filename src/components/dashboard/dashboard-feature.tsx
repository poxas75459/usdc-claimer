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
    "3RW7moKauq27j6VW7XpuY3Efo6oPtk695j4XFskWGrjEJFUwJAAtWGhH2mybianm38wb12ydUiD6wsYe984Dezjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DUkjtAWryvCGZXBbViKyhUxQawU7CdFXxEHpEztoBXm6RGUGDNc8Jq4AfPpVPYNZN67TVZJFqv5H5QbgAVgbtu3",
  "key1": "hnJfdELsCtgakgcvhN843gyF2bJVE8TNdyNRr5FiXfEJxoBVUrvLzZP9mPz8Q3SuELyei9VuBBFSVCDXzZ8QuYv",
  "key2": "3AjZCdinUYSf9SzoHEsYMURvSgHNZZviPRZ8XgVYG8QZkNAxr9CksCNFFdwDgKhspjaofFmHP4xvr3F3LoEkZHsZ",
  "key3": "5SzsoV9BUbdZF1c5sKLiLvC2ooy2yBk2GQn3mXFsRq2L7T2rcZ3AEa55FStAnqA1zAWHtLfywNKe9pLP8jDqBgYC",
  "key4": "5GrCV2u46A5woJLDK861jYxqGe1qmTsQh193EXU7ZEFN2XJCUpkm9PqBmH5jLGMvKYHRynW2TuTs6AzQgQwcexGj",
  "key5": "4LJFTvi2p4tqHUHN5LfSegeQ1Uto1Rh1wtDRrMyWShrLfkujWwBPnKAraS3bNzvJeybMKCumQzueXC2FDKjagJM5",
  "key6": "5RCXpq38AdLacNKWMU4CQNs3Hm4XdgLfT18fdBfdjBcx1LMQrdxRLzbpXCMQzkHXXFvw2HFAtsbpPi8LD9113LaN",
  "key7": "44Pa8eu6HD9YSe5gzXLZEWQ5U5jRQX5QQGC2Lh2NZCr6ecSRMdKfDCjmu1Tj1hkbnDbiFy5BCTdh1qpQ9i2YDA3q",
  "key8": "Yf63dVqUSMtLXTexvZVJDrKyvqUkkHV8gpCnbGRGKixFtiVus55KuTPkbY9gkYcmrkSAHD4Ak7s57sNZgZgrTon",
  "key9": "KhSJzh6fbpLhnQWxShj1TKVYGhW1tcUytZjTsZgzKmKTDGJFMBv8RqzXbmZ2Pz7oa7xbEZ1K1H9y55MLLC4kX7S",
  "key10": "4nH2Ah9abuxrsrBHbL6D35qHeSuh9gpUu54iCb2pRVxyirkXnsaNmt9zFB2dyA3PtA7Gav5t51vW6SnjKxuNHB6Y",
  "key11": "5huytBT3hrPRPEPU2Wbqq1CMPNpSuPBdAHtnXaWkAq1NVVfrGGryDfcW8gUDMDKs1QswaB1sUQtKz4x87MATi7f9",
  "key12": "3Msa8No1u7oiM1oKPPTeLbd5uK6s6HCqedhu3pJe56vj9dyXwBceTffFbeCFpNfyMrP4ef88rb2EtJE143DhM8wS",
  "key13": "3L7rfNg5siGn7bVMnaSYNi1qp1sGkaBAGtUeim2VnaVUtfRAMy6AhNVeDeymFuZhM92DiGewG8pDVytQjenLJurt",
  "key14": "39xv838LbTkicfEkzs9a5mjhvs9iynQ6anbHgrE31QcCViGPWKDkUzCLeHU4Yp9g9fHHETFfn4kJMiEE6YMPk3Fe",
  "key15": "2JnRuxjKSn4Dqq4AkqLaCLvtKf1UhjU7hPjSyK8M8KY3mGFENyHThSmDZfUA5X1XN1WTAsuqUdsh41vc19WzcCa2",
  "key16": "ZyJYuwGvLpvSqNqAo4fTwa3jWUiKDmxqXpsNhF4SCHmE3GmmfpzrxWgFC9fK7idsDuyLtHVH2b57ZF38vf5XyZP",
  "key17": "21pJhfH1rKUpbSzftpvFxiTyxNXRcwGUnnPoSpyY174mr8WFrWwGyfGBW14irYewcD1ULTZcc596C4Y21j2MiD1J",
  "key18": "3uTqw2Fk6UYrYJhGXcL2wXEN5atYLBzjh82R3XGMUwwjvh9AymYXaRfcCoHdapF78LtMfjnTAUFjF93etZCkGMpi",
  "key19": "2cFvNhjU6DYawhbuj2dUfybyaXMNMZVXTgqVdDftT6xjyAoeLwpAUHJuRPewSVkuiTyqh82hkeEaiQPwhQ8XxczJ",
  "key20": "eVNRxi68dcSpTkNWkfKqDz5BjNSCwGokWYvD8UHXbCsRXCYsdQBbH9kgq5TpLhsXM7HzJQMxA2qcj31SybydeVi",
  "key21": "2RfCRXy5kWDqVA7GSvNYhsKcTbomKciYANCiqfQYvyPSTJkVrrStFBkTBSFhdHqoR6UYLf8LT3ZWxMk7aoptsrDY",
  "key22": "59a3SQmJeBksQsZ71TpyiKSd4wmfGqSU7MSPSNdbgDTKwxmWXtEQn3LrRjxwec1EnNSeRymMSAywk8v2kmD1LTjJ",
  "key23": "53QuX8xBubfJsaCyfH7KZJYctX7k5spQ3shR5u5R4UZPvcBwnWMzaPnGjEcPnTR4pz3KfPn3nbVuizZbdGxPbMvF",
  "key24": "5auF4MQAcu9bp1cKN1wG9KueVyWeLoDQUF5UV9ZfH32io96fttPYUZXK3YeJ3Lg7yKD8sc7F8SpdQrpbAM98uKor",
  "key25": "3Emtm4YGYrjAvTYD72WWMz7tTe8CQQYu2fu8kL8NTDPm1nFtqTa1oWEizCFn4YVuaEtDS8k2e2rZYQvV5NhqmpfR",
  "key26": "3nPohBaGHHXRZYAVNVD8pRLAV3maq7VYkpKvJdHcQWVe9bVvAEzaFeoPi9CmyxDvD4eVYQxsH4JLzMUnKvdaFpT2",
  "key27": "32fYfKA9ueBuqpiDQsQTRhM7Q3rnhU4JeK47zXVvJUe6ZLQ8Ep5j6WFJxZaDqQqBuu5ZvqnoXCGnKJNu3KidRqHU",
  "key28": "38uL3oPZkbpMpi2pocFeDtdkXMFVqikS9fd11gWJwZs6oaPmbj7DJLry8YqvZ67XrhVs3ZFRQTSMV8zFf8PJz9td",
  "key29": "XhPgLxaCYnSEtL9Te8x263yk5LyJXQrXa6ZSzb1iB5GtkX3YTEMVqSoaiXfkCMe7st4h6hf58SWsZu5uaKfKhoY",
  "key30": "sZ4DX6XjctRFMUz8vvszpcKHfFvJsMTio2y231svVmevyFdBShzUCte7bWDjM5NBqZqwNeMTraUpBACgpicJyEt",
  "key31": "n5X6CRqKS5EvKnjKMqjNsypa1x1e8XkFyj1zVwz3C73ohbue5CK1Br8jjJyJidvnqEazbe8Ad5CRTRTFghchEdf",
  "key32": "4TzHzKe59pGz79GWYbYybgJkVQErCz53vdfZGCFkrEe3H1AjuFLixaz66rCErB93Ja3wrB4baWbRdQD61dWnDsJk",
  "key33": "nB3XCRwWQxwuQrCHioq5zEw4E3m22ikEJjo4B1J3g54pDGj45jdJtqcQ67GT4WWY5VyTMPXEKahuF6MTZtifsNe",
  "key34": "3vktLvagCTzBEue74unNftNxx9fuBTosUVnpVd2qs6AYiXc1GsTSp7BFkQdkaTNtG1d6pW6yDudcLbWkdTvsaMV1",
  "key35": "4sm6ScmgiGY7782nk5sb4qM5VLYUSbhjrhcUMQyTQTgx1jBzzNRtPXdr8iwpYWJU4znAV39hm3qa9RfzrPYUSepo",
  "key36": "5xAqDW2sC1juZY1K5DytQKEfv8dvZLB2n4PbKZaae3Gt6tbBGE9xgy7FUWcwo2X2t9GJC73gogJEiXbcsKMPZTLK",
  "key37": "5NkTpFAzGrg4bWhgd3WechRRYbjGX8TG5hUYNa3CWt5BmDsiS2qWZuQ6RVyJcegPHhA6YonJaRmg3hMGAmUZi4cK",
  "key38": "3SGbfzLoUxqpoBXSH3p6983FDAHEutgzT6BvRrM3GNiVZxcQJZfx5a4rZxrcKUDiFAVJu1Yf7tbwuaQRviChBB3s",
  "key39": "2rjPL6m1UCouGET2F2C8wKpJ7fGyYGZC6GJDG8qMCEc44Gdm6qeTeGCsCbyvsVBxEnGabd5sUqdSCVvxKqUudRAV",
  "key40": "PZ6k28kSeYWsYuveNUXcgbUKRC4hhhKs8FV1GsFQykA6azjtc6YPEJVNrSQtgT6n7n5LHzFxjLxEHTneYDMpWFJ",
  "key41": "26fXJnwKRzKiBYZQhByAv9bq2s7oNbTkt68UMq32N8Us9mStZJg7hXgKHa5pVwigUnQWAxXuEGjg2diAvbu7hktb"
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
