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
    "36AVsY7oRZFXzdPUNpDmH1PrfTZcCBiMdVLfkNRPc6x6ZxpuYxDoHht9EvjuxxFFguCiBDnHx8wnKp4taBn6LkgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1WM8jJU61GkgTSDtb4NDoHx7YQd9jtxvcifCKHCHufU21J5kEJGT6w5GR2U9V4LS7QGRcsDP3WBP7czVxXDvMm",
  "key1": "mjXGP49t3HgtPJDNaAhcg6K8VftfgsEVEN2WW3wh2DgQAG1Nbf4ANwnjwc1mhAXCnvq4a86TZcDMCKys5f6gb6w",
  "key2": "67gNUdXKv5RziUo9SDvewPUGjm6RKdrCgqpgkWdW8gP6E3zMLTiCFUgJse87i4w3afKyaz6EKkk8QgDpAZPHctvd",
  "key3": "58p5Se6TJD2PqXmuj44p7zFu7MZB6vU37GgxV4tEAQ7F7eK53essUXH3CUddg8CAyhcWKb4JzSJMwsiN26KQtakf",
  "key4": "5cpCK6DnAweJqoGspjSRyFnwzysqLa2h9tSJGBgXxizxjM87faZqhS2NAg6jKfiHSbGjF46T2BvntCByBSJCSJ63",
  "key5": "4w3a545sK8uWNrUaVaogP5tiV1BV9bZLf6PQxNDiPA3f4BoUuV3jTQgKVaNzEk2NkUbALbDmyCeCgACZ8op3NGTe",
  "key6": "38zpXSkS53nj5tStacMcLpv6yzYMPg87YXmJNBpUYqdYjUQvnDn7ASDS5RcYSpHXfza26yf1SzK5HR6vBjKkq1M2",
  "key7": "3CBmfoHpetxUbzFTFSrzqpruJZXyaxKgbPt2XY72u1P577Nk9yBQbk83tspxZrz9A5pFonaeRaGGr73zXom7ZZ92",
  "key8": "3MgSBFx4v27XMwntZC1BdGLuCFd2Zg5YnVVoEmho2FjzPgJh7iCbeoHntATqVSmZMZAt9WhmpAkxV42USh6nRyS1",
  "key9": "2uW1QJWNATaphfFApv7PeGPruDxmjPrENJ1LGgtWsjQHxMVNezrMDTMFkKPkqpSf9RVu5S9CgfjzB3ANyjZnMRE7",
  "key10": "3YZPAsAUoP8qDRYbgjHVHK8KhC8vBmLf7XZUgzYYTWc2sp3YN1pXjCJb3dTMJwrk1BqN9CsB3GmRWasKBhG3AY57",
  "key11": "4G5pjEFHqCGunbc3EjEJJTxRWL6eCmZzhN9LwpohqPiQzjFWDwmfcqXsUcDayc6rM9VD5JYmYZMyN1fSzWrVAZ2x",
  "key12": "3i271VtCQ1SXMKiFse1vhiE5wWFXDsnBcpTwJBvHL5ikNruxomgtCT34rG3J3pPa1ocnVMhHktUgBLbXpnRxdTqa",
  "key13": "2mx7gqcx5ahURFeFcg38ve2bheLFceQwQX98MqNUT1Rv6L63DCuA92uNGRVtTfaGhRgkSv4ixYwSQUE9mWuftnPR",
  "key14": "5GPsyfLanrNMAo7UkwG2Q7jFE6ppdtdGUc9VzaVQF8scZJWHi1pYrfiZPNhS6SQmnHFLwpvCD459YhFatcsWUqcq",
  "key15": "3mpAKvxr9ZfvzbTkeAeLm41Ppkxv3eUJtz3APqSSZuuEZyJ8eyiQ4uYyDcsAeJTCvJ6EBKqS5W2ncSzCG2MvbtBd",
  "key16": "3Vwh8eGXorYt7QRcoHCrVQrciKamKakQkXapf5sih37Jcpwt2yXYY6a8F1ALRZFzaEcEnzaSwG71a7Co3FUVFp5B",
  "key17": "484fGExiWCArRakEPLhp1Qfnu6Aba9udNa9GERp8UJCjbasbkYyMvzBpq9TT63ZbgUUFnoZmfQzpFBPfckvzDBv8",
  "key18": "4SBbRiyWagJY8E5MJ4GrtVqkfpxPULcgQvxL4dg4yBgjkLN6gvyexbrye8Hqx7iJvUmmGMdSXE4W9qmmZR5K5aGZ",
  "key19": "2PNPrdLZYiTuDcTYn9PqXdrZCuGafQoq86HFMvCCEnqdqQdn2159mxRsb3mRVmvrikn1id3aVYAVzy8XVYVJ6y55",
  "key20": "u4YBjsHriTBKDUEr9htM2yuCMptHArWHqENckX4gSBg4R8CPpAehb7b2CnvRoJnisnNCjSdGbBmM4s4LDBiBxo1",
  "key21": "2yvkroJ9hxy4Gf3CqDJehmtdwU5zNeQwu2X2pg8Ws62wbvhdA7LxvHGr8t1JHfW944xpSd71fCPPFS9MrbavEPBu",
  "key22": "4cmizMJ2TtTYpHGFVw9vZX6pkKoweKJ1eGTqqLmHxXcPYjjc95wCncd8brCALc6FymCMZApcQp2GoxTK8n54Wo8c",
  "key23": "5k8vcgCjmCodxtrK3rPTkhTtcNu38ktYDqivuqpzxJXiU9DwdNUDAwGjBRkCU5Pd4ohHpj3XosWeciRaVgYJvCCB",
  "key24": "3iVnasJjPcr25goXBnTDwXuBmKsCZxNUBnHnNu5SsmCJDAcv44GPhnqWYdYMdk5DenSMgb1rAWSdeAXsj3AyedvA",
  "key25": "4fVY8bC9m5daG7uwZ4VSHiFFxx58Qv5AExN7ccRccNJkjVBjRsQ7Pdtduqvf1p187v38C2JxYYfwmCAfj4dwDy8s",
  "key26": "d8FLKCNMQSXkUXEDBuRQDY2oL6gdVnaFKcVqkjZH9QtmyF1yWRBieDeJPfLewMmV5dZ7mLbbrA3x37uYd2U8j7g",
  "key27": "2qXTHB8zJaTd7ZRDfsRr7XGoXaA2BwHMAgEHXVtFUEhEcTkL1UtEALkoxBiX6YPJXiRxKUjJnwqpQw4rvq3Tg7Nr",
  "key28": "5MusNqbQV6Vt2dcdSudFX4LqGQX84WsDjfsog97w38oWmLHn1TmUNuNLJjbGQJTgmnY192i5wd2Sx2DqPVKEGphL",
  "key29": "3TDb2mk6jfcoyja5gezmNi8jHuCRAnRBYFKNfhqUKY3kwSj2vhiXsW1qxxbTPu66MnXNMB5wo1LefMCMbHHLVou",
  "key30": "2Rnb1CnRt7WwmCBsrdkyirqWpZq8QQbC79r6CayE8dAZwGAY49YuYygGWfQZaKiuDS3Wsgee1KvwbR4Ck85kLMVy",
  "key31": "3JsH6jNtKYJnofRti11KoG9LdBDXzVecUT9xrmZv3MqSq2RGiwijQmNEubUW1PdELWh27Sf9y7cW4WirB6X8B7hq",
  "key32": "2yZMzYTniH81fXUQDBLxU9uwXaTrecBUD8pEPMC62aA6rggig9fFuPBYHiXhagxLiodEZqCfrTP1U9W9YQhxKVkw",
  "key33": "59YAuZRB5WNAELXkCdCxDo4yhAudQHtjigFYdbPu15S8LE3xi2XBQ7qQyXxLDGZiQNBx2dfAAmCGtn4oSdvg9AAB",
  "key34": "48EhEEXwU2H8rBujeYRctobQkwwCEJtKks84V2cPNMRuaUC4PjUb9c39egjaH5Raj7RLZ5pXhewmufS64XRFSQGP",
  "key35": "2Fd2FDjF1yxiDuZhTwjnfwPjHtLEcByCDqnt6XECotviEjiTLEE11UsKu2pXua76F64pKHinJN83AppuR9ueQMCm",
  "key36": "4X5vas1DytdSNKdZMvnyXrPzzfXhzCM6fNdL75NCq7zwYx5VQtpuEo4duHzAAAF86wMBLP4syHSKhYtGTewH8kva",
  "key37": "4XaBv1tUaWg77cjAYMy5QHfGdfRM6yYXLqgYDL5NPvpnV2Cfs83eyNQ6NrtYUfMpWkP8wfSnFG5ixwBfTk9kJVtj",
  "key38": "64rr3x3Z9F89JwkcSgYf5aqyWP67W1KZdG5eGLHFZpguzkEhaQ9Ef8wswvZ2PT6VuaxKGSf9T47EMmamPwWqsB1e",
  "key39": "4tYChNHiv7n2QaP2wNxGC3y2bUaukXCNFhRz6FsvTy7VogBv7zcXQMP4ohykoaejEjwYH9TEmFMAi6Sfi3BxXQqg",
  "key40": "2eyECC6K8VszwhZk6qe4JUbM9tdckrAMQoj1bhBZkXEHRnmgaeEguUK2scxjRdFWvXbHffnWiZqpp19VewVkukoG",
  "key41": "3mutp1FQBSPGiowD9cbDXLzeLyMzF2pXiCnYuX5kE3LKD2o177Edtsz2e7VjweR8kdBH7dHqgVeafjik3y4AVbLj",
  "key42": "3EkcwpXs3ZA6xtMhHb5TjfAXWzmQETB6vZDDwGrUrbSw9rbZGaLMULVT7qd8Tzt5p6DGsbaJvBKWCMLrHjquLK2t",
  "key43": "3jjMyMAxLhuN1ATtZhPm5KoTvKTiCHudWVYNhuQNwBn1KAkSw5F3RSbzvTHfjqkHhZXZrtc9howmnn1yYjBgn9G1",
  "key44": "4ynTGavqdJrwZbXtt9iXAcysRZ7USJf35CWMdFc8oBaf5LJyymFeTwS911UMBZJBr35UEfV7TTE7S8LXJdSSERd8"
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
