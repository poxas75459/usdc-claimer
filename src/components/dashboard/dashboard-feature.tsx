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
    "TdoXYU3mEyFVU8GqartKdEwrpDDbNpoFXSFrgT7RYqLzEBLfCiswLhVFCk4VjoVfugQp97HcWRWzLA18UGxt3pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJTKjKwxjFiqRg55Y87zs7tK3kUU9L2MCHTSS22yXcg7fFnHLoYAqbhAsaZAupkztzhCptYAfrCDmDxaXkhpxTF",
  "key1": "xYa2yoBHvV914afxPBAMR6Y47cQtJ4FZhreLc5anzdX8vgE3kqPKj6DY48ZmuVYg4w3SvfA9bmrY3reRzpQj4Sb",
  "key2": "K5A1S5NTEPPyRYF4pE1P9xMmfqQaynChEpnBY6zA9Ax3YNjPgd96tcgLqescxqNmnFSh35duffFukKk3pmMQWto",
  "key3": "5uQ89scbA97PXw6jKer3pCX7ExBpSk1jYEUHhUNmhkNtcHUJQZh4LhFvz7kaTEUACcXD1DHcvXPYnJwmEt73NxDH",
  "key4": "62q6nbfx4nxfjqHaVJphtdLguAksqF15dx9qidzBWpQYsTC41U7x98YXCp1sHkFAcg89tbcRGV1DgEunCgUZEycc",
  "key5": "2s5dMypePGuv1c4d1V7bpaZJRyu9QwKFj2y2ALtZnN33X57rmxPAwJBC95E8G926ZDdy3D6E16oammdArgp4dcz7",
  "key6": "3vd1fBV4PXrntToU1BasPikEhcx3UzqzGZpxUMsgwQhRpdsLaHpyRTpiuj4rd45ng3mJ3JMfrKpBnvbKLFM8TL9a",
  "key7": "5xUCLuEd1LtKLU41Uit4jz4RMr9bk8PX1tsusB1G9B6iw8tjyndTYBPtReR93pGWT8KyTFN3kY351m15eeVU5zwM",
  "key8": "4zMy5Bu4hmmZ5zVvAX7LDTVUZdfjxPWANhCFMi8D1VVRS9sEj29GAPnmD1iNYpkKKgt36EFoSduMvroAZ5UvCFjZ",
  "key9": "3a2ZthFwxfB2RtfTpkgWV8TbBx4TVC8xmqFuirsVq9q8awspDcbTKBmEY6A6hAQrLEVkfJ7XP6swj6GzohVPGpR4",
  "key10": "5Xub2kQpwZ5VrHezWa18AnTyKdypRGyV7bBJKHhghAFQPZ1kQG259xjsnttV7Te8LsxJAA5TvehsNCss15Ja37iH",
  "key11": "36WKrk3dzHPadRvJE1kAktKFGqdBMixjNehyGRw4sHExuLN6KzPeis58RJZwGSYJc4n4G62jC7VsMNHL7DQXSkSh",
  "key12": "wMQJTFce2E8iHPepBvcEwdgi2JnW7Y9vFmVBvgdDxToaN4cnggBVfnD83guGmUreFWi6BU7YwLVtZhn7bJA7fJt",
  "key13": "21aNgZ3nzhYpbSHjwX5YwDNJ7GZKKybh6yPZVAyB53uX5unVdKnLkySCimYgKkdQ1H5f9aNLjZSjA6TWAsYXQTMc",
  "key14": "2E8XTkazgrKQqWhBhXLFNDD6DfQyHJV2W2napZt3aihyqigPCNzpvmovrKuHZELeeq63mYtJthLvDEMsUNcs7eaz",
  "key15": "28hAuTDbNvagjkynxwgKRP4dz2aVuJEFFyLAPt1hnhvB9euoc3bqyDWcDM75j1v7AeZDR4Hyj1JTLAFhdHaEN6vg",
  "key16": "jP6b7ZEu1xozdEapBFPQVeYMNuNBtzm4HqXuuJnTfeCksdZiPe93zQVdynP4uSCE54a8q7AibfmjSNi5F3pHrRL",
  "key17": "5tiJdShHNZfrUAx6bYQTFtNn4GHg7nwiefZFpU23Mbrcp5BihrizdTnpPa7K728PvAkjSYQ8oht6MG3b3f2KxRsC",
  "key18": "4GpN1RCxExkstKqivvXeHvrDSfH8VTuuC45YQevo9HmgSZjc6iZqMLB73ZLp9f5dHdVi2kn6mZopD38hftdLLGTF",
  "key19": "f2jBjLh8rZwCoJm3LdDuXKepvtvGo2YNfCbMDMBN1fLkzwW8B8vuh6TxUo5wqq6N3mmjFKGxU7DnsW7uJTcyrj1",
  "key20": "KhJ7Wx9142suAV45oqZrkbR7iiNXriAxhwQFQGa9xAP9cqiPpues5qAzE79BoLL9AGhiPtKBsgkmnYiunQwSK13",
  "key21": "5cTbr5aSdDTQGiSM9THkJv2AAh1LhJbLaCL5ngHshfMWKmHqLFMwNYuxNKmSRwfc9XMUDmRECmzeKWVAbanD7fpB",
  "key22": "sedj6BQURvVFJmgqRWfy41EFdRs6KuqcqWt7vzeDS9T9TwSpMv27zYRaJb2ux5qtfTynjt88n2T9DKirwtS3hfX",
  "key23": "5yJbW83dHMzqiQRn14rHDeqaAizRfAJ5ZMuniLZjvBqGKrBb22WcmCKe635Hx5fYT3R7HJZFUGCTaynET86idrQj",
  "key24": "5mSLQi4xSgYBkg7bEpCPwx3vpwrhHdLH41WL94kPiVpvALfEVY7FTxCYLXLWic8rkdwomKAMzprvVHES2y9Q7iDZ",
  "key25": "5M5qY9UTQAEcD1tSDn5zSa7AtX22fxu8M4xqgRquzG7qNeq1EsQi4pGHaBRmi7TAiYrHaUwVFo5DLMDc9GESknHw",
  "key26": "46VyiVhS8uz18VkGPPkDHsf3EBkyxqhEq7EoFvQJpxVytRKKD6PzsQeiWVLW4mK4LWf9d4aCJSGBC4JzTc1UBVPX",
  "key27": "3mF7xcypVG1JhgqspRnvFLqEJpJBe9Qk2kM4RASiNwBC25p4s4QpdQqe23dmc6b6GxmjZGCMrR273LQkkvMi7any",
  "key28": "pCDiW7S8GWtV5Q45TUEBZvuRmDBHYNsYVkwMXDfyfHkFiVCk2evEYiBAym1vibZxYm6bqyhUXoHxUBJs7XiFX3a",
  "key29": "3zp8zi2TUcW9qV4HyxNkqe2SuivKA7C7EuAM1bMKu1W4kEAoFueMXmHXDemxGWJWWTMjBJNtXpzh5Zo8UjYGmN9r",
  "key30": "2EdFMeNRKX6ECdDGciYLRPJJjPaxxC8QhiRL8vERxPFbKoMWfAmPj212MC6SUYPa162tFCRt19XDtA3j3tYE9JMX",
  "key31": "4GTwKQkaBEZjgU5fG4e3mMW7QDQcFDKdUbfnRpWfdJpyahq2QX2arnkUfo3wfhRFfQSdLQYUk1nQDsX4Riaj5bWa",
  "key32": "3rDgFZR4R3aNxcexPVKou2UYwawFAzrGVcKbVob1YooMS81KmqJfSYxP6xRPQSxDNsGfryBvu9iTnX3A3DPHEMAz",
  "key33": "kt94TqRyGUi64isWwV9525mhU7JEPWDmQvA41coM9jsxcEGtFjv2U8BRqoRu7p6GuSue7mZtzmfciQahR5DPb7Z",
  "key34": "5zJVXKebVUq54gg2ovvhG7NjkBoooP1oQqQwsfGsrsWAgdjKVyrpWMeGWPQSybsyrbGEvTJUBVLqpNoQoosPGhGj",
  "key35": "5XfDAqkxrbKgREBukKkXTnZuF7zEB2SJaawT57NryvHEwxFNFaFBzLXeXUPgRG38XphkNdApEdmV958zYQ522gTx",
  "key36": "47sLhP6pxB2wQdQvYDkNiMJccepbk4SVbXZahbq2EXPkxj2CzkEFLVUkdr4ffyG2hdUGYApYzP18UsKakf1K7i7B",
  "key37": "tnCvmTcQrHZieQxLW9QiHXM6HyjaeHy5H9kJcnVy8aUxyZHD6NCmpQxen7P2BQJbiHBs7H1scShy4korAtUrSFe",
  "key38": "5Mr7GAMWvkSPJ8GLxcBfiZHCZvsunB4AYSM8SjxqjVsgGEUZgx38vrZixa3wNoqX9z5t1SvccxTVTMWoMpSaf8pw",
  "key39": "qhJAFWeue9b457jKLyzuf5MFHp2GvjphBjN43T11CR4n29z4WP1NZXSAWAxKZs1jFfyV5JLotoopYYZhhh8L9Qh",
  "key40": "5S5aoxVJqHXxSGgDpdZ6aDqF8fcVgfJPxPqs6k9Tgo8fBcLeE1yvhdkzMX8B6r1zrwmPaL7CtH8Kg9cpiyZK5su"
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
