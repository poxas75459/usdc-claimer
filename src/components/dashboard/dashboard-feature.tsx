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
    "2qoP2MiHbz8312iHyPwGaeL2YhemAXDGvThcs6TptWLDrTK3MF1EYAT24sZmkKTPn8xqTwUfsadqCqhGgD2NUYkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAfw6T7AYf3Af9AK7B83j2NNevBCzudSmazjSKqvr2wiipVrfvCanocUFi4kt9ym8DG3UdmJc3F4zqZYwPudyES",
  "key1": "3mx8DDYi8PEMfZu6DR6HXwmx76wKnGRzdWxCvexeXSdJLxKfRUGQNnkhFbZNDJEjSDvCoahQ5i3XwJyGqvDHYHJ8",
  "key2": "5yHHPHTq5CJrrmbZ1E9WiBc3GUcKNRLd2vxXVxBiNsD6tbNCVNVtqoisU5aYDbcJoz9hxYHSZYdavy3bn6zyTh9U",
  "key3": "5uM3C3oRfuJHPnBcDzopWFzubAHF5qGTRJpJgyvC8CjetXX2HWtzTA84bdJHDi5S9hzWdk8fRTLgLYQgKQZgaZUn",
  "key4": "4i4d2k2TiAidqz5bMK4SzdGqmcUR4c2KuyA6dCiXxkcovDzRqLb7Z5zhgJeETpiu8HiAUYeYEBhuaW8x28uoBwCt",
  "key5": "52J3ZL2UCXK4xB5rwqWpPXvy6gEf6uu91Q7qwUg2M2X6JkZeUzQYR5k5MPz2XVWUSaXZBzcNfmajVGDYJqeU3UZ8",
  "key6": "3u8W8yLJtpywRphQ9JEPMTUfYHd4e93iFfJ1Q4QyM7aVSXj61u871W3ikk7v18CTF6EoYLPKP5hhyiXThK8ViFWq",
  "key7": "5VUSXd5DjjKy2AMgCFikZd7hKmte3V2HWPCjrxPJC16x65WAsSpn2g1uih2SaBf5R4SqRBvSNxxBaNyVER7em5Qd",
  "key8": "42M9Wfmo7TsS9YhygkLGwhv7n1tbaJABLqUgLUs1FG5QVcm7Q1kVqDTLjM13kLdE7pdZ5mZ3kmVaDBbmvCb9XPE4",
  "key9": "fCJiF1SMPtRRd1Dx9cM4Ut4UxE3E7FMpwWQcd9hNyiyVmPnaAjagfSk85UP9egmkpZJ9beP8WYiS7CHEScU8tZ1",
  "key10": "3eA8iShbx767qg9kfLziZN4SzUiqbtcYULdCdp62CHjrnkrGXArtsGr322mCTZGV4RYJzyBVJbo7xW6PwWxYKGd6",
  "key11": "2S5JrozeCcdoMvHu1Zc8hSH6tHrnRfu4Mu7uA3YAPE7VhX9MK4x2z8kE8YP1Z5g6433a1xH6MY7VHri4VqHtmdTM",
  "key12": "39LrixQqabXFRbJWbnsgEvf7d82GB7nVVTjGRqUGYagop45MuPPY9nJx9H9Z55AWJRsTDi7FTaA67B8CbVkTjUPA",
  "key13": "RL4Kc2hmLWhD76HzMHyGgxuxxHiiqzGvLbF4thcWbzNd88Hs1HTT5CwGwfm1keQwDXyz8RkDet5fvAM5KioGkCW",
  "key14": "PdG56NENpS3rnqRhQSVQurZLUZbrhgA31KvnJh81Hkkgq9syxAvkPpjBPTRxyj6sVhUy6wB52CspJxNCi1nvasZ",
  "key15": "N3csWpPbWiFHoXKMCsXbCuavSBXioxGgVgG6r3iGjHcpxd6zP8wqFcwgwiFTHUKJRaoSPaXqUgTr2R583gK2jRq",
  "key16": "3mCuf9QtEzAQEojQeEDw4sxtTTt3Pj7wR6tSFYJWWKQvCa5szf9RapyDDtM4s6DECWYR84TvsHCCGPSGWjYRvSFM",
  "key17": "Hb4RR9QpMT1yJ8LWR2Vcfj3FSi4MK1an1qGYLZ2Fb6KEeFA4m39GsSRjYZkrd4HEegDkpSG1bi9ctkSAj6xQ7QF",
  "key18": "53kra8aPY3eRTphJLVTTKCRfoewFTtdHL8jK9gQ7T8wxyq1QKQAAf4yvzseL2hnsrhmpwMYvUCDaXhW59R8N4Khy",
  "key19": "kE4hayhXuZNvc1YMbRtyYqWiEro3SoLkaxQMHG7q6bJ4y1v6X6JqAHQz4LBF7S1Hbt4NVNQf4ahLEp2G4cRZi65",
  "key20": "dKCwFZLTt29y3dDULkbXfG83kWeHNpnNpjQmemmbA1t4AgLcGZ8yVB2q83WKkrvwS7iQTETh2Xpgn37KpyTE1k6",
  "key21": "5kEV3fahdFwfCxoSsjMdt5qBdA6ozeZKz2rnTytr9TaZzKQuV2oKFDd7DP38z2bMNubFDhmtyq7LfbFW5iwKA7nK",
  "key22": "fS7KT5LgnA7cr83DMkhNPiL9rNeb85qqamnedqodTzQruLVLHmVYqD49trPP8rnqX9QTTds6rxGHkCNq4nRVgzW",
  "key23": "4YwbpLgJDQTuxnJGcWydK8yigaM9vprgHySdCVBRRnuGKrr8TGKNKZbuMT8ejZDztn3zzPBaYme4imMxvaFr4feH",
  "key24": "2i9Nkkjezd2kEccZCRMa2Y6EJjVM8SjaVnaBae6naoC1sayE1zSmfjxTdeqUV7cJSZH8SkkMYyr5iwUbCnJAL83b",
  "key25": "5ffyoGF2C4yUVTeJEG3maHzF4UGEJrTx7mzmVRaHiFjPB5SCB4Udt8K7UCpEbn6YAthQJvfjJkUYbRMVayzjQJ71",
  "key26": "5ne4gzohsFBoiUcXpvfTPvMhz256P2ssC7UmXrLzwtfPrCB2C9y13RMPHLTwJ3EHAj1jNsvXuVV5ewqUe8TmvexP"
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
