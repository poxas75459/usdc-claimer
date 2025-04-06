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
    "rCdzKNu3vUkrJGkEwGMh2YzqHq8znkDAgweyHFEZLRz8WizWLKLxZTwspSQp9Rojw36A695xAsB4Fm357soAQE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YyXsEjtPCxZdg2QxZTuMqaACEHU4xPmq3DESgX46Wq1zNxEt8ZE5ip8yQuuZpV6K5rVSoeBBxFnuhqiT9Ez1jyY",
  "key1": "MfzLN5PGttZpMki5BFQD9ZQEAtCkTUb2fu1JiHvsYd7Yvk2ez5QoXjFi1irFoSCkAjmRnne9CnCBzQHsn2zR1Sj",
  "key2": "3HsH5B13s2b3vRSmVGdCymAdd3EC7GxjbZvtQeriMSzhVsoeoT6S7gvAtMWhBXCiyWiEtkyLdVoF7YkEAr2jXj1a",
  "key3": "4NCs1JWBiAFBeDmRk2oUsa6JxkTHYnq2mRKUTTQ3v8gLuZdh5zpRvfr2XVaA4nEC1gUPtmGQ9btwHCZ4ouGaVTn3",
  "key4": "3yDMHaqHzVVwMiFRmdgFAn4zSMvfuxYCkLneEzUjtWVTURJZrwGYbq8XiUAaZfQ7B5QvLuDi2rFM78mSgb5DaH1q",
  "key5": "5msFXnCFzfjcUGV9i6haFcTfX8Lqa61cpoaqLcyhUmWGD4adMBKxhbP2cpCxqnJsrBDB12sepRaNcUVH9XvoqnMm",
  "key6": "2GWZaeE1rzwFyacbvYX5ELSokT85p4Ky5DPuL9U4xHDs6CYWrXTLHWbfjYVe8zNsogT38APaBY5zRXa1bQeRDB26",
  "key7": "3MEdYicffhZaWbjecSra9sjw5DnfGaVVB6293HWp3uPfVdfMttir4EQA1V8GfxwfuNbt9Xx2xjaW9FBDqRKrVnwK",
  "key8": "3umZfPAdmhZnwcArEtZpWJP6wogLBqwWQKkUPq6MYdbAzJ1Pw8FsfQUvUALaMp5qZ8VYfuNEYGyaXC797niB7TXt",
  "key9": "58uTmT8wGbQ46wVp1m62V255SugGxrVXJDWjNYiQxqV2YawakmtHErSLJztBS6DTP1W6eQZn93nXDW9U1f6mdcjG",
  "key10": "F9ZFbUybAJDMR764XXZAcTsrJfCteA1whCSKezwZJBBatNik1SG6ccatRJhd2xSJbxf9FdFWGrwr1p7iubU4vaV",
  "key11": "5BqyzkDG9KPVyv5jMim5X2ykRFXVa6NDS2Gbo4b1EbvJtBLYnyErmEwRfzUdqJMKUgxvoPXV33S9XgNEgwXPeQwp",
  "key12": "eznxpa5DfC1F49MKz3D6Auv6nKG5fn4uFTe7e5DiTUJ59xWs1CtHhphuzYNxEpR8YaLzauDuyboyDqf1V6B6ndQ",
  "key13": "2wNCPRgD3nz8mdGbpRWPWB8DCzTnS1M1rtNtnvUUWDVMEnUzEntG1o3tGwXQCETGSdy2dRVXEmJEvRp2mTuXPr9U",
  "key14": "4WgqaF2i19f7BhAMFss6gVtJZK6QsyTK2fC8bcaawjZcLiMSjzkAstpH7t7m3yC5fpcAFVLyekf8XXMhsTfSWxVU",
  "key15": "5JhrbjBn89LHRzjj6wXQzNuiDPRr5tnakbVpBDS3BRL1643FgTNfzhYdMcuczWB38HW5nGC8P6MkaxUmSCGUfKCA",
  "key16": "5zAtTyo1acK1uDUH7AK6g2fCEhxwZmk2t5ZReqko5J7iM46hSzdcjARkEMvJHyAVR4XkvfHDxZ8YNqcy4ngwZf32",
  "key17": "5GXXhpmjpAYbbTTqFp7eNejwtG9SSAUoGTQUiXoBkrH1Crxokk5EaxuGYNjjmtbMJKAjgP6MjUppe1y5VrFzVqsw",
  "key18": "3WfMk46kMDFpYgZiK8AgfH7Lzzwst6Lp7uU69MxM2ScSn3SrMDGxG7KEoqihMn1s2kdhA9GigNFDCzqXToVAhLBN",
  "key19": "2HAfpGSgGJCvaUZRyJRTpaVh9EWeYgWLRdcTmErzfna1R4q1fSFd9dSh3aMJEveTHTkK34FEXkoGgETFPePTR3No",
  "key20": "4zs6DXvKG6AiavqPGSqgaDwDZgWp2KgMiMVw6hXJ2bckhhWBoqGgYtrMZdHt9ENqt9WmucKZCebxoMkYwJEEaSjc",
  "key21": "2JKvdL4DZSifNmjxapnxaDxtTkrfsQnDTa85XvzJqYyvgnYkUiVJRGKZDaDuLRHZL8hftfHAu2qe3S6CHLRo9GdL",
  "key22": "33bjszVr4yQTJXqhC7yRJbK7g8nVxB5fTTHYh8Y8Jqvu4UnBsUqhyJN4E6Gz4cMY8tC4nAnRrALQAzoEMGqKBVD3",
  "key23": "2q4a9VtkAyddkr8WgpBtTFnbfFaQgmbmLNaic9UscDm3PVsMgSXdWyB97CmD3P8VcCdWZMPwx57yB2Rprp42ZWYC",
  "key24": "4MR4KziVe8UwvSeWt5aTo8Vms91ZdNb9Zmp1gSyCuP85qcG6xTgESmn2ucmRPy6o8hGgAbanpdHDD764Axgxr1Fw",
  "key25": "5eSXy1tevadTc9GHGXftLeHTRvBtNa1jBc5v6oWWRSZsRstEvyYVtdJnGB7jjkL6XRQxZSvaLoVWss1P5ejGtkmg",
  "key26": "5YC5tiKfCMWkoSbgDtF2SWcDHa1PkELzoZSxvJG933SGoAh5aeb27krgCgazFhsvCeUxxsfm5ALKFYDAZZyKWo5h",
  "key27": "4FvCZK5i2sR8xVkyRdmLy71WwXHrmES3zQkrGghdTGZBYS5as8YCw3FGj494xFajiyggrpR8vf4XQcotfU8ufrR1",
  "key28": "53RGockTGthZmprEUZJyfAnrQphTSYmhy7oyztrxbRgHmg88pDGQofDBzdRC2LPDgVj1AjCDL7JhxgLtLm5GEB9x",
  "key29": "SJxaNYmJY8aevXGUckj9g4GonQscCX54c7E9YzsRqQxBUEV68twZtxWjncAPYBC1Nbaqd9VqUpfBVpPuUZyE7id",
  "key30": "jXbzHeDs3n15rst7mrn1AoLmHB3TvGQWq2RQAMezuYZAeE2er5ThdqLWFEUoiTpwmc1eQFzvhsDxrt1apFBZ6K7",
  "key31": "5c6RpJcPbh2SkxaQjuZviLFJxtqjdFkeJKi4GxwkDPosPtqqxjvyXKdaKe6cbr1hgqL7ZRnzcNotyrP6MtspUnru",
  "key32": "5Arz24a1wis5w1nnrGWypFxtmJVR6n1uCccS5kKYH2eNxh1M6TL7sC22u9Uh4mDbNV6ztAFru3nux1qPAZDHPy6r",
  "key33": "2p2PzSRxzwP7d1csCzfPAoTGUb3cVqa8N3KcBcyaPjzmfHnXXixgruQmZb4mwRMbpcvsaZByWWWf3Q6MCsnwv8mE"
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
