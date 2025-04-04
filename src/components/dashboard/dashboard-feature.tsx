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
    "2dTqjEoEHLquckggVsTkkutLkBTssbhDL6GSf1Wq418criRDEFrnNavrhyAnLJapBQGoAv1E14R8SaEDwuNrsMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49w8sGNPa2E3WWWiCBnCod5ebkVVE21kPb8ae7JLRSWWZ7hTyLqzARTPD9PWmnXpRSsWZn2yNUV2skb5rpv6aZjg",
  "key1": "44Lkqpz5kSbQssyoT7hbZLtD9nq7hXhXx2cPvRdbQtRft5DzDdJ8n5CRFor3moR57N4Yx6cKRfoNP4bvmXUEMLC7",
  "key2": "2EWT2dyk3TyPeiHaMNA8Avi6e9vPRZG42o662ZWqXSDTQi6UzZoGpicHSUB4ETkKvqw915TL43Xq9niHLpVfaZvP",
  "key3": "3e7LSqpJRPFWqydYfMRLYwEb2JyuKS7TzukKd3U7RGcBKvz2NmsojkMRnYMD4cBcNBVLRKK57JqAPHBz7fo3sW1L",
  "key4": "2zVrmh3hKnSjrG4auFR8VryHta3cvk3iiqfgNijpQ6kc2RbxuQKwCL27neLGnAJxA6ZnRh2e8EutUcWgNNpGnn3b",
  "key5": "3YX7zMmfihq9PsUEkfvcR5dXj8ZFbAgFA92dgHiCo4N1bP5Y7UXs4sbiWJLjfEHfniCza6iQiX6fFZWYmWj5V61i",
  "key6": "5uozM7Ah7fduPxkoJQsN7oX5za2sudzSuBGrK9ncKEDfeFfs3DRR61oPR5ozcXBf7x3yrHXnPibzetPiSLZNWB7w",
  "key7": "4tPtsN9yUouz2x5KJqyWGgUH9HUBB8fQerZMdvgPSyur5SDRNWXfgRoTrHF18BeKmadSi8rqD7trFzPhwprQy4KC",
  "key8": "W2CebETNHHs32k2PL9BoitSZvFwo8a2XLYYmQtRs4VCMPzWmjycwtYGMj2sjBoV7Ve8sDnfT75r8RzVzws4aErs",
  "key9": "5zS5eypThuS8WWVsGifTCp1rvcY4m2sjjq2hCQfBfNvwZiBFctgvp4PtcKGQbtLY5tMWSzhZwikNu2bvWkmeP2yW",
  "key10": "3d2o2DKWqRnRh7shVu6rdLTJvVWHUdWSEcDKLnFfYWSWMXd74ZSStZyYXTTBXbSdodicbJ9bBpoHzWkZEcauzUBz",
  "key11": "rsPhLytAmTqh8Ayvq1pFpYuJ7VQaMshZPGqvU6zSg7Wu8sTQvTEzXTaWJfoYdDzgHWXoFz5XTiekoqqgUgyoUQA",
  "key12": "51vuMzGznT5M3oJbHpZq3kwSorr4uDAUyn8139BQ5AMbsyJ73Pd9k32vCC4HNXdmCS5q3J8UyQ1aqVmizRjTyi2t",
  "key13": "5kLdetA4PrcSy66E8RCGYBks9aLgLdmL6XTLF6PL1CQKjdJuGvdaLpbntnsqsE6j75H1y5g9ujWARNA6zyJyrcYg",
  "key14": "3yMEYbtLHBwmdK6nzQxjkRHn18yP1gBhxo3WZxgWjH65pdiBMFYjnyYWvonCJ2UPR2Dvh5wvqKYAKy7KPbqHMx9B",
  "key15": "iWcQmLY7hQ58VsyZx22q9RJCGpV73itqiXxBVKcNz5phBnro2vGGdBU8v5PBrjjnHUppPn3chhcAgVHC8aNw49n",
  "key16": "3Wavsm7tevxKETJ2UrbieV234oNv1EwbR1HLBjjQ81wUgtRrB4BwVNvTpDRS2LPsjsknxzkP6uNM4iAG82TrCfMj",
  "key17": "4QmvrojWWJ9GMQCkBJTAuB1F3wux6CpNA7HaPRLCWY2bENQTcqnXZHvdi72LH8X3MDMxLReihfdgHxTzSwMsVd5v",
  "key18": "5XMMKQQvRkRS1KhXbTUT99rhdf8j5pBVt5PcCNZJFmHwf5487XSYMeN7bMuy3n3hi1gpR9zxSMVdsBMZmVN4ryA9",
  "key19": "5RtG63eaosA1n8uXGddYHvixwt2STDyGZrKH1nY1U5TbqeyTCLLfC2BMitjM4uSHMSwwrgCb7SCRa3T2EgeqK8yb",
  "key20": "3LKfciXva4vHTp4ym1i7fmx3Adyn89n89wvnxCy4gC3J1ubkfrckYZGNphXcdyjykhjRcbMA4c5WexXk9XU5bHor",
  "key21": "BAvXboAvgG9PsoRUXHm5SpPW4ZtKBaKhtMRW6LoPPD795VJQLZcysmfGjcXt41NpP5UFPZRe3BVidz734Q34q6q",
  "key22": "3iwkVCcAEdfsdyTj7fNAnjk8k9iK28PwiipKBsVCJ9cCstUcocrhJmcWSN34vA4R1z6jD3CQ6K5hM8uyoDV4CeHK",
  "key23": "3eYs8V64xPz5XKapXmEgay4Ffh9FFzRaaCV6CPH5grMpaeP9WgSUkoKkFLnxmYHXE6qetz1eEfmacQwLSfMxb71b",
  "key24": "2WAWD3DbESCkAnKZMwGkP9Njn8VajqHrLL2gwSjNjSyLoH56bAfMVttiNUGG1dekKKouF9fxKqbEXavMAktivLdp",
  "key25": "3jJsUgDCE47FqFiqDsYCWohBPGujWpB6XrDxuP13MstbMPzUnKxgzLpEM9ScQntQriSsD1TWBsusVvcDRfubcDnb",
  "key26": "eUvXDRzMLH4hZmBmYh1y2f7wSZc9Ha6Mr8zhtv61NJU41NNsxgAtXRqjaE5zBJXmWedJpsMQ7VzxAzC2f1S25DF",
  "key27": "3CGDKyzx1UNGePZ6f4wFEPndmK5YG3WqB9txrqgUSdjSKNgLwKwm4WzxABR1hMF3tznU2CCzHu5yYaKJgs29rFJv",
  "key28": "3QexrEyvxrADPRXbEDAbMgdv8uWJaUNNstxqAPpr8j7XHw8GSwfD3EsEeMHLhj38RxzaMG7qV9YrAJx1LP6rgKPJ",
  "key29": "57yp6C9woLbmbaonJFbffYFamXC56QXT7gvKwHuDvWHpcSwuu6oQdT9yfS3kxiDBQzp5mV3xG3ztBKg6jhdnFtah",
  "key30": "4imdGbLvb5PBBtkjinawZrCUJ4HQdzWVbHGcVZfZVvGi1NHX9ph8V12QCAsJ3h9xvhuMo7nJM9r5D9v8F45nQbcn",
  "key31": "3Pd1n4xRDQD7xxoZKxKjtckQFcuZdx2oCjhWgZAUrXbq97yqhkf7Cx1aEnZb7HDaV23dSyqRMDgf24QW2xEAviUb",
  "key32": "2MistmvSd5MmD9k7k9TFcq38JU5e2qh4ULhcxJ3QHyvKQ1uFvie3kbA4vH6r3Pt9dBU95x5H3TmUfbYydqqde8hD",
  "key33": "2pvZrCBJFGXU16RhZFwEU4hcbavUdeGkriZLzedkiHX2eAwyBEMxCkRe88Z3SMpGN9PcA6vq9jPSJtHgTC6S5mr3",
  "key34": "5NjrCKKeC43J6fFzHRxzSvhXWfBA5KciCButQ9JKRh225YT5zPSp3TJQtS4TJhHV3qTWkeFhvGxUwhsugapSTGH8",
  "key35": "5EULPLizHaUnAkbisUBuw94MCPgubchdmYRHTjdcBWh5eacNxRuKG9XX7RPbWxJ4dtD2qKAZsZkL1jgVR4QyXeAS",
  "key36": "3n2QsvnrD2KVyWYMabnJCQy9gV2JB4TPdFBg2Bom1K1rtHn89ZcHo9QnzTqYDmnbU6TydLqhUHrsRWwybtocUaza",
  "key37": "5HBgdm7wniuVv3ZP2xzjmKVH4Mnv5LRd9BDeKUnoEjSuFguHToGysC8bq2RdTZvBJV8TiERMKgwMjxAxnSmiubcC",
  "key38": "4Vf3RiGzf3giyASLRiwsJWyNn4pxE6HDgSWPVpdHTvwdsp3fAZcSkQg8Xq8ARa7GusqKPbXGcGnY7t5PxBCa6Sas",
  "key39": "5sjfaEnmMTw4sYorfgFqPg7QNuaJkectpuLDzc4FibHetdt7fYyPNtvfta1kHHLVJkYKduT8FQiJvPoq9AVkU7hM",
  "key40": "5x9wjmEmE1fxJDFETrJfRtarm6YSmLMCqKt4MXQYrg6qKFrJe8CiBC7bmobaWuCkPb5LoWJBz7zj4zSY7Ut3UNTV",
  "key41": "34GWxsVvy3qDrB7QLvQU3ew3JLXUr6PdXp7su8LEUG8cjwiU68rh5Vt8Fm4qFeVDZ6MNCd242Ui4hkUi6P4XDVpM",
  "key42": "Uk25D45DxhwRBLnKqosoBUke4TZ9h5ohU8cqt43Bmjo52t2mvooeeAYw6xVCbdh4ZAmzopaDsK6rUg66hEMVSkf",
  "key43": "4KhCaP2w6M1vMANtHNDL4tXoGA3tVzDy46TbrAJhY6opzqCByTxVRig7JXQvu9H2qTxFqzJB3Zh3NghN5XEJ8Es8",
  "key44": "5LLGikJjTUrRNFcBJWzaLsFvFRWXvB7JP7ABF28C5RQ9d89FppLtf1oDYgLAEAs8zREzmiMVDeFXaeRbCJZDurDd",
  "key45": "2Z5MjRgqdvE2WHNcpAv3jGm3irFNUyzR6pQYYkZgY6hEsdETS8E1yvhhXFwi3Vccn5HmA1ijK4mE6aid5CjTENNE",
  "key46": "39UYaswM2dLroy67j9FByAT5K75ZUjzcXXLtLDKK4bStX3E5M89gMyKNiSUtPMSQCCnL51qwvD6e2S6GJc4F4dgx"
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
