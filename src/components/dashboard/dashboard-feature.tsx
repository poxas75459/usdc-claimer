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
    "ms8tM2aN3tuvVPKM1zDy9MMdxFFVMD8m7mD5weGT1QstE6Fk5gSku4qWN4ytocyGiRTs65NexLY2T1YBnH6A3bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXQowfgwsFp2YBepMDT1FaWxyNbnCVFoMSVAEYyCGuzva6N9jvuS8vJ9o1ALDbkYVcykjcW7Hxd3EnUAjT51bNM",
  "key1": "sz5uHF1cDcvmsk2A6zVq2MQcSM6BJJkNHcphbkX8EtRy7D2J5mgQzcprHfWpUZadwx6hcRADwGyDCDKoqVGE48s",
  "key2": "51U7w4Q7in5burVmaatwKSiuxgsRxWxi3nVydXcmGcuetdfrPaMsNE7ioDBu14iTqVCRJxmqo4ME41BPinAouwpk",
  "key3": "4LjEPnjUGDipTov8Cf1MKywn7uiiWcUmnm8rJJydoYSHhSfn1hd8LEGfVAUA1aGGQMvi9SxvFMZqgh3Dv4qet4r9",
  "key4": "3CxfsgASfxiDiezF1E8e12WxgsywiTQZLjvowoHasEy3b7top87q4AX2iaQ32QjSp7PF559o1gEQkucGA6gWEG3x",
  "key5": "4u6NyWm44TmPwibtZkyxG5Cvj1nCY9Lk4Hm19kFR4z7KagJCdEMLUB1xyUwSG5KbzAoFdf41EBXP2PHZrxbWL6fu",
  "key6": "YHHLwkdJJNBiNFUiCd9JPJLSXFcf8pwyeTqbxMSZyMgyasS6J6q2V3uZxtd3TtYCDzv3PTsDReYePSfo65qMyKM",
  "key7": "5Q1fUpAu9wyHj8s4qDz694bapKZT71WWTNRNsoMWkLDY1sVbKdsmXUs1cK2yhdNH3bnbgJNyMUiVLvhiWFCLH5XB",
  "key8": "oQanuFKxj5NKzRAqtUKU8VX2J5u2pbN9YMgi1YKTNfqJNxyKTT4KkwhaMgsqD13VQPVVX8XmmYKRar97PArYnvv",
  "key9": "99D3QomNUezyzw84aZdU8F5ur1Ba7mCx3nkqWX26Ni14QNsrjqpFZYNeXHjSDAGmyZVpHFUkTTA7VwQ2uMRvo4a",
  "key10": "4taPwaKNZjMWJ2piGL8rVoyjQ5zAQayvHmHHsbKvJ6uzoCQgQvL2npnivBJas1abXUTZhJ3h8AXn42bd6Ud31vC4",
  "key11": "2KvqHzPD56CmekEt1Ub2E1vBY722oM1qqAJUwU7si7798bkc5i4Hkjh9JqRdZQAF1Xd1FNvFEw1Q2ipLRf8pWFv8",
  "key12": "bB4bpsqazgJYkH7mSn9F83BBhrzoH6ayJvcDFeAMhFAAxiQtDmbiG5i9SfN9Uh5EyjFjeatKg1WWdBQRhTkaAwZ",
  "key13": "4NqumTEaqnRaxHgDwatvY1dX26CXbBZU5hLh7Ze5EFLoxpkDUsVSzQdgdCiyXfjBSWtf5aoFYXF8ELKPRW3WeGBK",
  "key14": "4dD8b1yYTyVWt8MCeZg3R6KrDrXyP5MeVxLRxZ78J2LihbAvjuaNqdHawGGQtqtr5zBktrS6XLKnRcWxPdaDdYuA",
  "key15": "8zMwn5kSqrfJWYT9tkrVxFQp6FDgdLR9LZfnEY4PBA2o48ZoNqMxNPEwFjUn7a5d9JnSUGEe5X1dsTHrdy6pSbp",
  "key16": "2jWxVdvg26uS5dpaxYxjev64CuH4veN9p1wN8DJubeui6GaYkzCh3aqVx6YeDUT1cKahmPGkoE9gKmobn1axvpfc",
  "key17": "5eSkCb2BTEGkHrgD5AXp8E5EaaCRcxshrMBFXNGS8JYE4VhajsuXydD313EN4mQe7cBs2y2EENDMp3YHQPXjRCCY",
  "key18": "4Z2VmgLzWtc8x45gof2C6iJwaz4GD86T8A9yq3xZBx54M64GVNy1Yw6tLzGtidX5JYcG5eTpFEk1aU3jmwJayAyn",
  "key19": "5QBUm7bZQhN7C4RP5NffUv9bsQ4bt6p3Bc1RFtVdJ8pVGbWFS14nDpNAVitM5qwynf489kDWcHAFdjduK5b7XSoA",
  "key20": "31fGsUFMXGmJbbciB9XH4Ln5xBuXTSz8oy5kSdQDF8nJqn7zFKdu1hgMHppfZsdfPhtEyzBHLHncFUACcHBaGwZ4",
  "key21": "5Wao8ht1u7jR27MfsDk4x7QSXetXGS1Tot9Gwts5Se2huqbf5d7GENFJDhwgboUqwBSPDCChcyammg1v3FYMuyN1",
  "key22": "4KXDdBdzfRhqgXvuemcbT7QCumpSa4LNeZnmKKYRx4ym25SNk5vvsD71HDjRiKwKLGvoNoVQonJ5gcub2B41oyNR",
  "key23": "5BKFmkBJLEeJttVFUQB71Eu1cbNSoCUbrL5inqaBWotZy1c2ZMbiLpkfY1D7GeWDUCYVFGtqW2485GNN5pkRDACB",
  "key24": "3ej81HwW261jo7aJpJeKoMtEW6e7wuvrX7xaMLhrKf1L2uTgWHhUCbHmEjtPuvwgQmqbgazcBDnbWiP7tVmQmghM",
  "key25": "iVUALKBobggPCnpazxKh21PXBGjdmjApNnBCHHWRPJGYxvEUnaLe9We7g5W3xvzb23LxTDcPfxKdbDJep76Xj89",
  "key26": "5Np9f7bcfKEbGuHFTbEhdubxkbAUtiBGD3Zm9yRxy9muiUvdefGDmwVoWQ7jjicFpueA9gSP2ByaruhSCP3un86A",
  "key27": "4SuiAN3z8T1WgA8N2mCpwuDg9oDy6dnS3kgstTpGMEVo4t5XN5Xk9jLdBY17PRzJjmkcsHtPHgziSgZ4FNZNunVg",
  "key28": "4VrjACFm1u8RXGDhSMixJhjc5LC8xQs6VdCc8btWiGvMQHk5aqMiuqqHdsqNR73pJjpbBU6B313LwCWQQjhYATGP",
  "key29": "2dtXgZdVeqfnN6k5i7n6ewKUMNCSRZX1voqESX5RBRSQV5pLucASZRWSJCwkwH1yzMmdi5UvDrkNAm4zLgCTPABw",
  "key30": "AnibYrjFVCH8JJjqJifpdh9wiWb6mE2Pzst5pto7xZCnP5UUmVsM5LYDRrgbTHtXP9e4AsN6mAV6k2LoNffZwRG",
  "key31": "3HFBFS7PjmgK9wHyhBtNMp9Sg9fbH5MVDNV34FxpN8FdsKN7kRGJCxsizfjr83GNNDrhQZHW1rvb6pKBXxZXdk9f",
  "key32": "65Z8mjLTmNkdsp6xR5JsBbt9VHTnMGmNrqh8JkbF1ebCTRuALry2eycUDQhCgVn68w6sng5o1eqZi3grVt9muKY7",
  "key33": "2gYgoKH7pwJfJHM3SxYZeSWLfiavuGGRHe2KgLNCVo8heaTHxzYdugcojAAaHVbsndP6SSqYwRytK4iBZVAaXEMZ",
  "key34": "4sNTuFRVcGKfxEx6o4iAZ7ShT84T79GHfrV2a3yAZGYdD9z42Fo68gy5Boq5kKRv8E5Dq6p9vmoa3mPaUg9T8Aht",
  "key35": "2BnsegwqWa2iC9ERL9YBgDncYQS83JcKLDT953aTjCwdT4f6HZiUMaWokziHRrAD3BwxNAAuiKUFo9yR7QFubFVu",
  "key36": "33yzg9LTPUZtPxhbFyD8YrPkRkKR1npWUwikbxqLGYez8Dce6HUV8tgj6s7fSdwubFyM2eUHGipgEG4sM1RDYoSC",
  "key37": "5sXRSvwdnwNdKmjFPJWoAMXgfdk77Hf6ZjMzYgzbCALUqDV8Z2CM2uARN2syNCCJHhx5xggnc5BX7UycKCqeQyeE",
  "key38": "5ibJrBKyMN4t9hdjSy6cKSzpaaxstXJ8BbCjY39WU8EzY8138Re3uPWAB7EDi3LScEV5cgTFeQwcB2f9RZ9G9x9e",
  "key39": "FoGeYypk2sY3fr4brnmjYsGXYZdBBhkJoaKcN2tHHKwWJZGkDf4K8YmEmF65uUdwNcSmrreCfzREHYSkLeSGi7e",
  "key40": "4pStC5fLkhiUSr8hMTBSJQsqrrdJFA9pwATB1524Ls5mhSBovd91ogfESZTBxEo3CosGR7ffNHMZzHSSXC2sHrvK",
  "key41": "4FicKhUFtSiiHi84oo5jCHNAaE4PkDWGnSxK8BYi2wgFVXKPHvrWX7ELZ83YJAqTNkf5R8f5ZVXVvzmFGUv4hx4f"
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
