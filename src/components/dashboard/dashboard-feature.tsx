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
    "31j6gYYrvNVtFPHiV9T7sRjfGCuRrKFpC1X81jkJQ9yMfJTtzidnGcRjK3WVLNVDh4bYhavABd2waaKqUpnuz7L9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xYcqscPZycTHt89Fo5G4KvL63Pht4xXdMLmgc79nN2tPxPWtmPtKLnRYZ3FWmUr46iERhEo2j6vDNi8QVW4F2Gi",
  "key1": "5fKHpaBPjssR64mhrJpS7cu4FRDXQfrCg4DCZAmnnKmTFm5aPjNfHD6NUAbYphq63q8iiqANkV4GA9kLpdNLhfDL",
  "key2": "2p9gnUyETenDoJ7ncZvc84g9shZmUNxSBJ5DL8pQPLVFMh5WcZqrNXvyRuiNj1gcVQo65KNDqPD5JwGmBc9t8ruN",
  "key3": "qPU1rbWCK5NsS29gxrbFAf15WPbfupi2gHjMdQgvU1pbBG81Ju98WNsHYYiJbN857ngJQEqsPzYsLeHMWPSfgNi",
  "key4": "2YDHD5EGVx33kKpiL1KGfnguBMWFur4jppuHSysivuTvvoHAoYPWbNynd6PWyimi55FPnR12821W3Xm38TAakGSa",
  "key5": "5o3ntt1Y7LxX8GXEyEZ9wdw1gm2UPL1pBrrMnD9u8srTLPHKqRoWv4aeZqWa4yC3yMReVtfeuHNAgUpNt9i88Pzj",
  "key6": "JEDBSsHAjEXZWx5fhWyJ7wRrj1tdTh438AnXFDfp2GAuwjuH33uCVGXXVNYav2EuasWTcacuwimWBberkQmktoA",
  "key7": "2CTs4z6gpQi8D7D9L7bnpYWfkPk92bzYU6xcKhFMWMVNapgsR6oirytfanKNzV6esaTAJupE3GgB2EJ3GEvQAmwA",
  "key8": "5sfCKLhem7bBi6YkP3NroUf5xFYPuXv7AE2FKLySdW2yfbs767saFzdGKxNEECNyKiRhyLhW22wKPaZEqFggJs7A",
  "key9": "3CGJEfTNVLDofpZEfxvXTHFpuRFmwHzmfQnrrP3oSAFRwPzh4m9gdDVZ3Y7EEGTwysMuME8QTaxW16NYqQ8JH9NY",
  "key10": "58EbaKEHyrVyeHJWsJCcy1VszpKUgK9nWXqc9neFDKBahEk1iVsX7GcBCTFgHoaVKHxay3Qi52THbzYzyqWBgkRU",
  "key11": "5vAEd2psb4HMFfndhPvPVkL2EW6pkrzrazp4xmnyiV1RLAK1SBfQhhtXvbBa3FKnZ1jR7rh8BADHxPuJEwuFH3FQ",
  "key12": "4xeu4PqLH6rbG6C7fobyHffCyyS2QGidrmshfgyn21m1aMFat1r96p7jgsSTf2rb1qEzMLbzYbAgtLoWKjftDRjG",
  "key13": "3NEmTcM96TXabHJRns5YWG793viWR98zdB2o4PhYQvePw2Qeix6tSmvo83M1uteRnXsNRQbephyXdh8H8GayBSFF",
  "key14": "3Rtw3KYiHe4qvCYTgK9tYYGwEA5J4uUAnkhP5H7s5K1gWnH4fc5Vq7AZSFSNJgHdcwe6rJgZ6YEe8JhnBfHLb2Hq",
  "key15": "4AD28oPnRX4vkCgNhpnBuauxrB98BNE77rtv2F4fTtCp6QxDxkAZGvvFEu4HHTQwDxcKezPRA8WRaFWVkYYgXBdu",
  "key16": "56aiMGXRB483EaXnV2ymFVKTXMNPph3y6aq6pUpjrSpmGQ6vyGGnCzizK7zJ6VQk4iaNko1WateYBobVp8setpeT",
  "key17": "3sHVYKZHpibz1seqS6HguqjRvff2iVEC7D1oMaA4Qxw4HutZEiPDjmkGaZqfPGyFxcWfT3v5zivNxvXtu3oyaavq",
  "key18": "2qntGbW8CMmoPCmbi29SKXPs7gC6bGxvVKQfSoPhQv2N1vKkhjEFBPRF7c6zpgUGWdVxvx6gPdZJ2ZRScBTXPEmF",
  "key19": "5BEyf3NVCnMo7wR1LuCavRCN2dKSJtDTntS3iyg2Snj72FLo6ePVet2jM9LfHmGWWeT4hkf4p9cXdUQ9cpeFTu2L",
  "key20": "4oZT8PSPV5p9F1kXDNjJ1gcM5m59SAhJgoTStMLxRWR3MA85vsAQSV1W8gbvMj68Z1sWXs27hc8PnK2uWcn5hZev",
  "key21": "2LGKDErwfjJoHcDaVygjn1F4vgTRQhwoJu9WRn6cLv1ML5bC8Zb4mqpz2h35qgfbACs7YeY9tU7eoH7kVia8EKsC",
  "key22": "4N5M9UwvSvkq5rgqrHk9kNS8uSTnAGPUWKdPqjg6U6X5riwAHScWvuBWzYNAVzjHpKmSdGP2rMGb3Vv1R5Pm73U5",
  "key23": "59PydSixaSVcp6sXSaKVuLWtnMrym44niy3pcMV2pTn6u7tjmzBWcg6c7wQbKqK8xfsirsh2gV1PEFXTPGsMdfLf",
  "key24": "2DpwXJBb3a8RYKy21uZTB1ok1CNRyBK1oJ9iZsaiHKn7LJCFdgpYFXW6iQv3fWLuJW8A3QMuh9YvwGoFbFyHnDRs",
  "key25": "37Umvq7nw4AcJggu25DPyYUuQbS8XyVef4h9RsiwbCNRQymL1huMUKgL8MAnh8vMGvacu5DotnSSwT759r6EjicA",
  "key26": "37z44UryajUSxCxVxD3Y3PKH98bvSmSMHirVwSUpqDQLd1rmdipdk5822y1FcwGpgy6PrXp1qTjJ729eZr7UxT3r",
  "key27": "4y496gizZigvauHcsC5QfU8jESFzMtfiYEEz4VYFjnq53sCwUAci7ZPWBj7L1jh5o6XZrWzGTWFhof8zenzcodcK",
  "key28": "5RZ1zC4pY2zTqP2AcfbhNxPCsjJ8Pc8NSVvhQRDGBBeaMqUThywJ3pd1nXafZVHf7onZKnBSmR1s4BRg5LqDF6aY",
  "key29": "28X4RM4Y3TCBiEzPbCGatRYhLqUERJg6jzDPYGx1jtciVMYc3Khqd9gigvxnqeHtL6cCFG3XaEWpG3F3dvbDwMuV",
  "key30": "ohDGf2xJknnTGK4T52z2jsMAyY9uiJPGkSCFnTUxkiR5UJCmvdhzartyRR4tgAWQBnQqHFkYzZLV1P6FGsDKBG6",
  "key31": "3PvbV2SZDrUZWqPEF6v174eAp3nHDYRwQZBFyVEmxmPyq5mg9eArHExZ166fT3h3RD54DAnQEaryNNDdKuHcZES1",
  "key32": "3Q3pFTVjGidJS97D3L9DwxCatSJnbGkn5EChDiX6k8nKN7Z8iBtqeiQtsUmnq59YjkArki3Udw52iv2PGSz3qc5C",
  "key33": "2fyoEGzZD7H16LUJHN74SUcEeAY3hveagv6RXG7WEmJo4EK4LdAC4icrE3fqei32MCEgxxDrRhk8kfVmuropNLUC",
  "key34": "5QzvaZ2AFQzKSQZmkCEY6eputp8SfyqM7fJoBjo9uUMY1fSchCqTnaV8iqpur6HaaopTHTYjijVGPCvd9xRxSVhg",
  "key35": "4b5Epw86fj3cuHqxTnkjz6rxzehNQx9EHn6S4S4GvaaAqz3hNr8SD4RxUzxMXBaRXScRJ4NdQKvXed4Gfgmn26MT",
  "key36": "qMbarbpf5yfgbyHL1t3Ahz6HgN3PPNZ7HnusUXCkYVTTTih1Er44Nj67nZpvyxy1tzHUbfnJWoeJvRWkj3ccgkU",
  "key37": "3JNLektj7vLEenTmC1wTr9MZBGM3iSWuFxCztqyirePt9VgL6mtFB6i7vetFwWyTE82feLqALMFAeUmaJempHBNa",
  "key38": "5hCqqEWdH6X5KLnnUCYnF4KbMGPf4azaFg8mB1P9fVqxfCVZnvctZGYXTPfq7QdqemAMVZU6fGSwVyWFyntTiVRj",
  "key39": "ThJ5imuEiWHNFd3fZTNVNd3x3NmdSyhFz1k7U3SdqkDCjvR8kofGM6x2mUGken8hrW9UVNkNhq4GDinEtegsX2a",
  "key40": "BLceuvvYkHWgckskcFQGQqFN1Ug4Q6rhc8tjRv6fUGP89bZZGKWafULcpK7kU2jKXnobc8auYtRa8WVJj8skpFp",
  "key41": "5vXWkmBhFEksEaJtS12E5FB5Ya6Zw4H2ZxBAcbBnWvzyP1Cq1CTJCVTvon5ucL4H9YHKW5zo9TnWjWesFb2k24Mo",
  "key42": "1xNjEhvSkQXt7xLt661PqBzA6QDS4bineFzJVZhcNX1kYUG19pnMAAEnUVybXeswK4S5hPUtDXuEXM6LGSjXeY",
  "key43": "4sWimgWiTHzX1ugYhKLDJ8BHZAWE9WDjKMujY6nXdnT147BLs3Lq6pSGjehV8ygn1upC8HvTT3T95LpDXFi7kZc4",
  "key44": "5yzSJuWCCZ8Gfibk58Yg6PWKLQk4bw65yfLJ9Tb5zWcdedURvmCWtedAG7mVEjpf4syX1TFECX632Ws5dsDZGzge",
  "key45": "4sr75ikp9FFnsgWviWCnDkoBMQ6Qa3VU2p7YbaZRHMAuLA5qVrT2XjiJNGjz6p2mtrKVPiZYtHLZKS4SrBBQTb7D",
  "key46": "2jUuC3R5yd5w74vVManpo7kkTS25dcj5wLE3xnxZAywsdZMEMz7c8w3X7sDc3jvA6xh7bwn1vh48jsZAD4cHu6Q2",
  "key47": "4HL5RN1kH84iBGCVZF4ATmBtrwAzqGWD1TYxje5yqTZy6MYnX2BaUXu5yY2TWXV79vXAtkE7ojNbLPqGhQCR53ce",
  "key48": "3n2JCznsTSjjzdcJr1BD8sZDsYVQE2vWSJzjHR4ooFfPq4FBDWsDUaGyF3dTpK16onLhxXXg6cjtvtwNGRRo7AN2"
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
