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
    "533n8iRcwsQVezzCrLzj1X8roH54byj1Bm76anaWrChEvnfj3vZuV3DcboYL2Tm56WMfi4xUZzVpUth23ixPXbfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41C2cB3V2NHL3VQyZGRoD4woUvVpnmF6RYjpus5sUutsmHZBtq56RKDRLoJkDxtT8KUwbTmD5BTKrjp86hPBYyFf",
  "key1": "4dad968B5C92vT2yBpHhWxrvu12ZToUQ3jsFCDfQFyRxjoSdpP2sfqjaCmu5dL7F4SbwkZf2yRyr84xZbggb3z8p",
  "key2": "623wMq5JygLcB38yBNsBGZgjFPs4qJdCuaQoDcX8eRkEXQamN2j4kfM1RHPz7H6DKaN617zMcyTPrh96358TNdpA",
  "key3": "49Px5zo9P7xwd5kdnFBxvup9QNncbXc6rj1NYbx3P3HXvreU1mPogRM5T1z3nAsFpfkfoda9cigWq5tb2faoAQN",
  "key4": "53hFXHHbRxxstmYbvD7WfAQffZt4sjAHryvnGuyGzr55B8vBtYA2ELfZQiVwKRCr9EauMxB2GD6LzptEskFF6eLy",
  "key5": "4WtvhSWZe9U83gAWDRwyAjJdsQ6FUw4eESMCcs4cqKF5WdZu1TqexZb94h1vuTiECJqdGRaEWyQaDBo3JZQzF2Rz",
  "key6": "4c3rENfvYP8tLfaG7P21MXPcefUC9FVMcVsiBPxV94kpiYrKthFw2Y4BCBsb14m9GqPvvqMwwUV5gDk6G3zLp7Cj",
  "key7": "4wkBqya5WnAHMGHxSYKzbG5mXXzcGE9YLkFHfEHSoVqoWzzJVm5JP58rRBNCZBoUHBjYinpc13gjzkS8AFifPRkG",
  "key8": "3cLbwgabKJekJ6WLnYj4p7W2JPJkAXumqy52fPtJA3fRmB6Bxay7ULVz72gBbDfTXe3fy6wNui7eotiT2q2iWwB4",
  "key9": "2btUa53D4uNpYshTNjCM72JsTAjdhJPNuFBWzkzcprN1wLFYvWmewAVF6Ms4H7G7SqZoiYP9bj9qQpqMHfPtuSGG",
  "key10": "591hs4phTDkLJFYNPko1pJYHtamta1zZWBPtiPZqyk56a23kshuhXt84ZCdUHbyViFPRBnmRgvwkbkwB6HbpihLz",
  "key11": "23x8zV1kXuV5ACtYGMHYGGwak1mR8kCedW8zwUw2CyFpHuLxNhvBEKYdWBsbcTQoWVkZRirAjjNXfNMYBAh926XG",
  "key12": "3fHsn3BCixvQY52qSs7iyCsq1QCveZAtNFojurJMnL8LtUMmaQwf1A1NQjsod6dhq2FFc2oeVUceY5WZNGPPCX3z",
  "key13": "2aJs9kHC9i5QuX1qxE8HCU7YLDM3RLKHBjszzZxc5snoeR5JiacJnwuXjrNm5iZJJmca9eDxxzD9tiy11DYDxFwX",
  "key14": "4Vi1mkmpjz6weUwDRbJYFjiAc8XEGvQeGwHDE3MavEHgiWJYVdiqNSrKGbD6LqJrYjH3UuxnRWYPMfKmCNPfTzu8",
  "key15": "MHH3NpqGNiKdt29KUXvM7cWA9C336xK3bZ6XNzWWSEog7d5oZswFqUtS2Fsey9koioyFUZ7a1sGUH2kmCYjrwb4",
  "key16": "54Md91efZ7tVTdtS2JiWsKxxku853NhPrHLFuFR8iKgTE4ch2FUv6HEKBP5BX115N1qihsFVyFpyQfdcBHF15vgj",
  "key17": "4quvHKd9yafHi8xXKspmoVfDXt8PKPntBkHCKDwD65sqVr3DFstwzknVrPqBVMWueaijVWPcBGy5eMhndxPPiDt2",
  "key18": "SpL2adT4dKzMhmksyF3dSXyoTPdZJ4GFwo43f9dFi9eUtzqxtev9d2vWv49hVVx3zcj8JcZF2193Z1sLkBn2Eba",
  "key19": "5N7xfZaEeXFWFAj249seRAjY2NdtxG1oNNsSKddNdXURsda1qmkQj2sw3YBpG616h25ccjeJJcv2KcQuydzCCYcz",
  "key20": "2881gmApc9KD3AopTWtmoSbh2MjWR5vzbadJ1YPUnTCkWLeQW9xsD4MbZWJuTtv5TBQLDaodbfGv16awvkFJUn2s",
  "key21": "3FQP84S9ny61Gn25hq4oVBsKjQEBMF19TJ4Xf8oovafHyXHnGx2Npx4pgzmRZnG8vMPFfeqww3z5Pwsx5Trpj1Mo",
  "key22": "623d1uGSuMqBJaP42txdQC549eKFcSUK6Xfc5BAPC7mKy1nUGRdQDx5wxE9GPN5cTvsGQFCJHsxsLUuTjvp5HBsX",
  "key23": "5tMCLzEU86mGSSXWhCuMnS2JYkvrhkCfZUrcUF41EeaP5hNNs3BQNkPCDVrQfaRSbfprZBb4tEULRSRnF1Ad47jR",
  "key24": "3D84iS74YdUh6kEiAzDzV3YG32WvSEu3U19jDeySATbuU5rAjMtZFDrnU3pr4VtpKJNZ2w9TTZyyY49fcbLZgR9y",
  "key25": "1dxrFzfMC1CSDJUYebw4z5dHzGmiLxc8XUEjQaA8QHRGx2erQ9NiiHSThnDcAQjydSxjPxRafFpNNaTFP1oEQvF",
  "key26": "hKFfoxNbEq53cUnWPWFuHAPaeGR8Dku47iuMV3XdHJRXxunJpX6tnUsMppPKkHNerzNpRTqFQv48pbo7iineQc2",
  "key27": "DXXc7qN7ExSrBMuY4QN7AP5xrmDq7SCPqyorTegDLHM25PMUtJc4dqhpKDnMUY3PhfEMku3FmjPZ8xuQMkaqN62",
  "key28": "24jsUDmvoPnHDAa7UD5CzC1fuBGqDrZgEwTJX8rW5zRpGwkJdfdytXkYRDk2YZFBj75ctPzKdNhRzKYuhZ2WAk6d",
  "key29": "2y7x3jUpCtDTGXaXUqCL5pmsPeKeNuZCkRpCnFkU6N4VD6ic99iaLMLXV3skV74PjNFjLJiCdFbjAG7VS7iEP2jV",
  "key30": "38W3tf8gdLuuUKcG5Cx8hXU676u8hX4XbQBrq4yHrTCGqxwuXXvYSLwsLRPu4rJeAYHhE2EAdEBcvm1qGhUDf3fT",
  "key31": "2oCpiRUGRGymuxsgRskGksKBjAax9vWs5YS7mQaKpjD57P6pbqasCphFHUfEtAdm7sVpiDDkB2NPJqXCePv3jc3h",
  "key32": "3kibTZEsn6tDjrXXy3SmWqP2QSZtnY9foAkv474rmj9fSsu6tsK6NEQX6RbkhWGAAiyqDDQ2MV4Qr8GQTzaQppVe",
  "key33": "TA1NGGsixv6REo2qDmiBUXNX66P9Kqr4g9vFJDHHDUryXEshNPmEyXzdwkJ72d8GudGkz9xokiNLtj61UMb8HtL",
  "key34": "hTZYfQ5LWfQ2sBb7jD8BHMULHHpP1GpVhHkVWFsFzQnTBAfuXjWtrt8oLckM3owkgg2PuN4VmkC3c5CBxy5mQyc",
  "key35": "44sD9AHEV8EXT2zKY48ocP9QeZbzF6LPsksJS6MXUTBjDHTpPYZptwaVfW4qug4kMipiKjTcDqe3MCtW7aqpufGu",
  "key36": "tUocM4NEFkqgzTKL8MY9ir3ZvVMToKm2m8VJwjNxVcXXekWZDt23udCkkTfR4qcz7vWf1RB2r7PqZw9VwTEDU8f",
  "key37": "5SfeBKqdicMQwJ1s1UpMfANHwXV9dEZAKkio2oNU8wX2RkWsQVsu7bf7caHzpgw6puBeVZQ7x2dB9zbuRjCo2CUR",
  "key38": "3bn8dpEXK2QES3zhYCGKzHwcnwM3ZQc792ozh4RXXErqsZFBcQhSBzrKVNaGCRP9hjUGBUyfx3veHN6DR5JeTUXJ",
  "key39": "66PdXjH2DggqXmFRzfJqoTU6qpkKaG9uYDKDTdytf1qwdc9cj2jnT6GCYREwk6HoqGu33pCHJZggn4xTNW7mGc4J",
  "key40": "3YVHL2qnesiJR4fQ4enFhRjUWDoMBkUZVcM6dJa36Qg7QDWGKHuaLuzEL3MiwngEst2kYosc63Qc53zjJhMKyy6U",
  "key41": "4o3EHXEGbw7gGccPpXRpB2eYKomg2AHzGhhnriNYp8Mb2N2t7RbK94StorrdYrj71TYcRSMjFGUmGCiqLALt1Yk9",
  "key42": "CKQoHRvVxHCgPKeAQDviVHPs23QA3wXHQCk9pTz89LJ44gBw5VxVK9mieNzbdY1mdKBetBGyZsGtf4NN5vzzpfD",
  "key43": "5m32Q8h7PtDavJQifgk6SKbrMWXCJKDemLQuQsbvA4mCKMY5aStrQSNx75PnEFm1tskskjqBATPdGyyashisSrdd",
  "key44": "3wo6F5e8TSHHsQ6iNY9yt96Qnc6MisEj8DCqVpeDqnRVUn5n1YCtEmQupZtnxwenww2UDnKmHJMESkMgLCuTKdCx",
  "key45": "4xXKK2NrzDdAb99cmqQGURm7K7wkLTJRsgEyC15K1QRU3WNefdY3a3ey9RY7udzwNvD1yRYJ4wED5y81mP3epCWq",
  "key46": "FXeN3wVQuTXc7jWq4wwnnPhdW2odzNHkfTbkXt2kBkUvcxcrdTB8TAtTPc94Byjqy4DpVsqBhytZsggZputCULC",
  "key47": "4thhcvtfZc3Uc318i2Bi7siGmCLfvqczYnCuoWueypGCPuuQ6bRYCZt3knZyYvkYuK2PZCdX1MnB6mcZvhyuZdoF"
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
