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
    "2c63QFF19i3E7v1WGDUfhjuxK8QQrDnBTP5E7YyntqWrRjRQCAV3aiuh5hWFp2PxMU5mYUdrzHStSnXfET456sBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXyAsu5gwnpx23pYzoN5puNmEoQdcu2UXQMsrAc6CRv2jzW45ZB5dJd7Rw3bF1G7QSWepJuzCff8Fcj4ye4mRpF",
  "key1": "9Q5WHFy1LGE4jaaoDWyM8vaUqJadP1wdBvgGXFhMhgDsfcz4J6nADdyZyCig7xWDgXPVCqcvx8ucZcNR5mJMscr",
  "key2": "NJqKmSWdmCaYHwJgjCG7czm7WkQteNicTHCJvKGWgVe2fK3q1Xiws9WYZnrpFkiVuBCacxFBaPnnS3niWJYvcwp",
  "key3": "4FQBu6s5wDPc5fCUx3Ni1zm86aoBaDrtdF1Gc5drbbgsuEQnFeocdKD5rvXQvth75QU85ZDmg1AXyWhQZAGaxza5",
  "key4": "2ci5NDDRbHvV5toqSf8VX1wnhwrtHbkJ5dLFs2phprXBRkRxmUzE4LZufRUzMVAwEoHzWzj1yfV3hLPKQcj3M7w8",
  "key5": "3T4s961bVqJPSWHUAmCFksbvecZYKZgRkeM2ZqNgueDGDUGAUzDawApu4qCSVdxXVyTAjfwzMz61nKwCE455fwP9",
  "key6": "3Jz37715ai9MnyJQ2dhsTJpGyeDrJCYUxmJjGBdfMJ5aDW5oniehMi555kegpbmiqjbXU1ocehNRtK3WYkUqaxC3",
  "key7": "NdH81ADAdPAWomWQnW9KZCfZSFCXEnFRax3zoJsE8QQSxxNG9e3EqgJMEsb6x8iu9XigddWyH1fakJn2tRFgXmS",
  "key8": "5YfP31yRD3phQ79CENqjGoFxTAnqKcAqB7zT8BezQewdeDfeVy8BDdNEqjrSt3PUdMHp678tLTMxtZG6E3bPBaR2",
  "key9": "62w6HmMU1D3RqgNqE686KXMctRctba7WterGrDEUADsXSKUEpiWhgHCffXEDyhLL5BxrdwngByDmaK3ZYaNBbxBZ",
  "key10": "22DohVQi2i5NiJXxBnCWWgPWsZ9iAB7esR1hCAhqQpVC1LdKPhNoArYpiU97upK76XJFvsYXyaAMyHsXsR5dfaTX",
  "key11": "4vPhQQ1rg3s4yQQdAcBmnnsnmbNkui9qTAborShEr86rRLbLCqUyVGsoEf6BwTBT9bYs4fk2Qy43M3rXeVxWTKrB",
  "key12": "24zXo5Uxa58VwK6a1MHY1rK2Ec34PQoefHaja5MPUyL8HBaiYrKtrYDe5TicLXArny3rURjgKhvfCSiqwTg6wrjP",
  "key13": "3tf1v6k931y1KXwThfTEtayvBmm95y4ShwuHaJHYD38goqiLjMeqV5fWF7pPXNhaRyLA1srLCMvs6tV5iUEembCH",
  "key14": "33q9yZn3WUv9Rsqjfq2Bb8Kxi4VbNEBAL9sJhYRsDcoaVhQeCzc6Rvx4PnhBbT2XEahURQ6PYasy4arMAeP2M3WZ",
  "key15": "3NETDPazGBZvQegt2ntNB5p8W76kNZx2H2X2miWgxxUiPYoap2qDNrzSQnHBDDDfA3F39PhiPsYkqRqxLNJjjYWE",
  "key16": "3xaYV1Uk1KXSKhtMk5thsQbzaxEbHMcTBKuS3wBXbVcut3xUk1HUvv2jYxxKkTJjkWRRUJVYfZxQpzecpQgYN7qr",
  "key17": "ua7tdQWXAKs2LzB4BCEp9jSoQibpejqpD4xZ9ZC8ihBx1xtkGewrYPGTBUEHthkwNU5gicnmrw7WvH7iF14ttFz",
  "key18": "5kyURp97WxL4Ste5dWpAnPg5z5U8GnhoX5ovokUpUeLbXCyEuTYJJDyGJDQGvC2YxDaAWU6XNtWGwtWtbsbjnDux",
  "key19": "Y8A9rWC5N3d2ccNLJ9V1Nd4eFjLqnegvEvRYGNe5xpguv5oEMVXxpmQZuqWE1gwb2TLXRXifeCtsGhUeRPhDU1D",
  "key20": "2hAzgP5QUpVdHv3ZPTLxPcigbUJob7FG3Qey6gP7tMvSKyWgWmkMWf24vBbePG5ksGLXH87xHns6FRar5NdpZv8Q",
  "key21": "5GSx57sp1L772cepxhA73Ccx1aaMm8rkQFLN8aujeA7tDJEaZiF8ruQbwCFBJwnHFJz6mwu8giez5ga3QR7g3WDt",
  "key22": "34G5XEWAfCC81sTpfcZkWhr9UP1jDJmqcHxahsbsmHgNrwMJ1Yinight8fXz5WRVZUuPS7w2T7E4vS2U4xXqmEPn",
  "key23": "4ieycgBnh3EYgCiFy9te4QBDy4S6GapwsZm5LHQC6Hk1duUySjimeunXe25t6mNpCBG4RLpDw4bohtzCJXHDwMfn",
  "key24": "46qRQDfDBiJd3KZ48Gbbzvb1KQDoSQAXVBphVdGQBtgxv5iP2TsqhSc2ZCKaStazZhzMAvQdESj1RMSLuQ4zRdZX",
  "key25": "AJiqDMJvw7YVoUHLin292gWRvemxVc4SNVK9DBPsou8KrKpMeDdS1GyD3Dik3Vvg2snHMJj6UiuRksrMc2VKcW4",
  "key26": "3mHYwwbMSAVYjMCqhpNt5JP9nKeVmKMkGb9MV9KPfFx5QrLQbCNDGquayNut1HnTXTvUtzgBiSsAMoYjb4posUwW",
  "key27": "5UReTPYH3wAJwRAw7uoXoNTbEtzmw82MKWqTjjXUhABW8joTtQwKwTLtnGNsAxJuRGTuAZGNjjhKu4tV3EsWU22c",
  "key28": "4etRbDhKiLX4FCaEhwvWdXEuKhAfwZh3A6briY8BDDjsvTRwtUMYWa2Mp2xDtqTSUTrjgEcpKbbJ2NcHUp19PZA",
  "key29": "3Yd8c68PGY91WDpbKp7ba67uBNCK3WKGFCo8doSYdCC6ANqWQETKdpRQqUcmybhGX3GtdLAUZN6L4CMVsLnVqem2",
  "key30": "YmrnRT9YERkSSHBdznanM4EnT3PUB4QV9gweTXPcwA9Mc8dMPA8YX6EVH6Rz7Sm5UTAfzF5wK5urnwngoiaZ5pN",
  "key31": "4HfXi7Scka9XXGTDiAsFnhcGa5VSVSgPGY9xSDPiKck86PgrWMUMWPz6BNBMwT7kPFY3PD4ttpMYfHSQhzs2Kgh1",
  "key32": "3Zc3Ywcogju3LhWS6VsdCU9FjKLviGMhfShRTiVxeYJMrqRHLJbGfpWRZLPZyMrhMPjNUZqBjxvuDcUjnENds5R2",
  "key33": "2zqiNnx7kS7oG4kmw4MyzzfBbmjSB1odMq55wk5x4qbpYWVpbnJPyuMnk42LJEArtfjyN91XyVGD6wsjh512bEMH",
  "key34": "61bGEFT5bPXiUNAhPGrUYgJZwrK42B2wUvthZwnQsCehk43rwHeYV4gG8fgnrXQjTxVqnTbRDYvWsiSFZ3ZpsGqN",
  "key35": "4GpE6A6xBrgCSrXJ9L8jWeUFmRo6AwdWZYJDhaCQY3WbQdx79mEt8vmsjSaxXXNndGQ1UrZxrjucmJy9wM56QBJc",
  "key36": "t8ZRrvwqNPjQhZHHs35M29mNNz3eBDFE88S43TVX23ux4UK74ddjTUTpUozoY3JkZy1agqmtKjP2Ski3VBCTQwz",
  "key37": "4HgGHLapFyyR9zoJ4pNQXzJ3svpCVbCHbit2DqJZNWmpTFCA8SsuKyLshLWESPSEDNKFkdM91nhzgBfKLXyCbbV3",
  "key38": "3Bjj7NxQNhkMpjgrjrpFhmo7heHwHELQ3wiPVwib9rYEv4gYfDpL2Sg9g61LMSg3GfTfLb4gQFJksznvQ72ppmeK",
  "key39": "wu3cuTPkWS3owozqub4tCX2B8dMrZp6XACYL8quc3gARvEwgHKKaZLte6UFd2Ao4GfKf6Z1jKtQK9yjvnd5uNZL",
  "key40": "2QDDFAi96VZBiak1E8PdhhS8wz6mvdZkhjxc9fJnkKHwKYa7UeDXgmV6YWJMwZjV9pGYBGs2xR1XQAQeKsdico95",
  "key41": "48hEddZAFxawHbdr32V5YnviPAAkGr9GbCxZCf96Xi4aM9KJNepywxoMrnCQd9SH4XT9wrqt82ZjJhYCAYUocVbT",
  "key42": "3K9QNw5PpeHAbNTzjPiyAmK3GMsKsuBhobhbXXFMFWg5chGkR8jLqUstuDsXxgyBfSy8HKATMakufmbpMxzWYLya"
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
