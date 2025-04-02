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
    "28gQ8u7A2y9xUBitnQw1rvYJ4QWwX7UiFkpfd4bmvjxbaEk1fgtJ8JYxEACJcKhoF86pFUXPBRjfRWVipiRaY4xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7Xg34NdDg8y8HuozkHnJEkV3mfdfeKEMDEy6xfdMP4gMLRf4vZ1Gmf5CdFmQ73XDrPZrEgLp9K6XzcCYWCNFs2",
  "key1": "3PfNz6YeFpDEQ8wKApgkaUy1mZFdP2WCAt1tRGd8mDEvhCmd919h4UJGZkqrF9tCzriFHYAY1SyG2x24qB9PbcvX",
  "key2": "3FkH8zDU6rdcVBTBcUK6w5RbD5ZqLsHiVXcNg52eKmDK3i3KRAYbEhQxFpgkutt8LVa7D1apmfLu4DVGcMJHN6QM",
  "key3": "2owdoxScCD1wEfioL8FajJhZRDwcRbpsTDQW89gQWBcC16KHvNvPiGUaCE8ZnHDqundA3YPuxwqj7RMKUcbZupuF",
  "key4": "ZMkejx8fZv3Pf6VCpkgMcsWyYhaSBggSRocrMNquyk3sXSzjdfxjLaUm1sni3X1QDiitAD9sBorf7UbPNutUbGf",
  "key5": "4zUk5z8C8S94BqWEYxGgjggGgqUVhVJ9hyydm29KXZQ3MGQGJTwdgw3Z45L4eX55puZUzoTnVUs1JDqLBQMpujTt",
  "key6": "nbeqzaV14reS2H69ndifjnV9SXTitoz2t6acc3jBxCHeGRqF39bZicZtBFm9FEv53DhjUb6PeEvKcsNU9m9ydDY",
  "key7": "494Rkdat7Aqa3S2k9NrbGi3htVGcmawAiJriXmaNyUo35FVCyhjKUNjTfePqtf7xVCXBfnFXKRHsgC8v1KERhUgw",
  "key8": "5fDpirbwwrhMbhc1YnpUCVwHxRsQxK7yQieNb7P5kjQPM687HwyrUanTDwjCiKjixnryAfHMdTxq8HKw822JVSMK",
  "key9": "2yrdHnYBqUhWd8Tup1ERhEca8psztgTUng6XVoGb9cnaVS89k5sZXhKtFH69jZyh8QavVJUE83pVvibQEHELZRhy",
  "key10": "4WL2mVvvvtsDANbPG1B7H2UtP5bLHMXf85Cp46xmSsHsWwmkJyKEFqHu66nCPb2ShnS7gQM7MRtEYc3k2aTRECrs",
  "key11": "2RhwQXuTMBa3PfCntUZdddfBr6aSG2yPcoDWWWERkMaT4yimNSgvDVreUHA6Pg3GmKPVnk4xzBnb841t7JRz2doJ",
  "key12": "67YjBdPxAdNYePnSY99VT8vr6MKyqgsS11ej4Dq553eccCsGaqxFXBok7YajtPErYFTNSGY9qqtD1dJ6SYf7dTwN",
  "key13": "61EcmBaG4e5FRGArHkmoZmgNxfosg2hrVad8fQ5RRCRDUYxwfiLpNNoVJCQfKvrYWBa114KongBb5eX4QW3MY5Nh",
  "key14": "2WXiuT1yWsbhuUvNTW9t4fBPGM7hxsvB8L4Fvr5ah6Ag44Ag9iqY17HYmrvdo7FHnJepTeUcvNMarTHykCVgX4ye",
  "key15": "3AtQF6hU78nqck7qiuf9Ti37TrREk9zGCyjBUFXWuSmUwfCH4sr1aLwF7pjiJdMDZGeWgDeC7skopUFYuSRPWPWH",
  "key16": "9UXXAHELAn46SRQpeWeqhCZyiRQVerKUUcmWPvU4P7B73KECcpxpSkxAAhczrz1EJReGuiS9HPxczdtEEJ6o4Az",
  "key17": "4mDJS9maPJas2q6eeL79PVGiF41ZbCpv2yvcxRkevSiZtoDKp7j7bLhzrjV3NeqPmmuqqoqKDv3uDyjcDsq1kw7r",
  "key18": "62YQLbssd3vgNJzMgh6S1ymCSWFTbxjniPFAnTMv29wdsQX33UEjSgQaxdxpseBC9ekt84eVdYZwEVVn1N9q7vdR",
  "key19": "2k66r1BuMQpawgQE4tkrrNBdYZjL9V8519q9gtMhJGq9x8nzGN6dxA71CCnnPNyYWaL932WZ8LsuocmMrFaJWL8Y",
  "key20": "5MmhTHdHPBegrcYeb9bQqjuYTWdjhEo485CSDQDG49Tqy2nDnF3FTMn3UaUDCRiDAE7Q7Lk25N933vVMweLFMnEv",
  "key21": "S3hbhe2KZ5565dkW9CYZaVgM4cQhykrpyHYqDNHXv61xQBZtZQqBKs8zZ8e9NGkUmaGtXAj3watDkULhDtPJMVB",
  "key22": "5G7jCJzhn6pBJMYyEZgzT3yPdbdfZCh82FNivJtaTwKtKhK4NVgUa7MaziDwUmbPSTpgsLHuHU5gLY6NRLL8Z4R4",
  "key23": "GRPtUVpwjxLxnvyMHCexW4Am2CNBuWDKXnZ6kW4yMqQFyumUGZSDY9N4YP8CK7HDnboausuim3JjYX6sdxio5yv",
  "key24": "66LSizwzNkPLBdYc8Mfvpj8WxFRhTmiSuiFjseH7Y3D9X8VPmqb6X3cEuJsvNuYcNLHgVGQnc3VFvXvMEpYFdscf",
  "key25": "3uXnTAiYPJGu7LRDhgqR2ojiXQ4ZNMwB84bYXW4QdVuqMJEqqRXYpHjKhqBcEQ3RoVUdT5VHrKPVAbnZh4Lk6L6N",
  "key26": "VXaFxwFHu8PEDc9GDY6MSdZsphbS794JeAfoHkyJ8WGnAZreM439vM2pfyB5VFcYqDyhCB98Q9wRi3gum2r3NXV",
  "key27": "GDkspzTTUEunq37CseoxcBg59cxN7vkcD6uR6gSKnttKEC75ytuCcUdE9oVfMvLkjHuJ1D9XHiCtEeZ3doMgjK3",
  "key28": "2AXZBUZwnKNSA5HsfksMBSntXwLaUgttzfPUaWHhBhPNQ8FPfLvApTdGTcZCj3sT1L8SG3TaLLkFSugxCMwgypsn",
  "key29": "4hG7mKqBQ3TmviW2b8tq8MiLvQGPyKkW8gHgZx4x1KpCB2CWK7dy9uKaH6Sxp2e6hcvSffQ6wyB9K59YAobB9mfQ",
  "key30": "V26uwRAh2eFaL5KpYCprWh3kooAxvUGoXUzugTmo5hNDgT21PQgNzPThJZyPqsPHZC8Db9FWPMHveeLkjvizQuL",
  "key31": "aeCehHQN55ZEkTPJCwFLZLn57bRHnixPxAS6XcDQLiSe5rqw9jfz8Vg5KTtUKCAVbH9zHEbj9LN66wYpSLfh7ks",
  "key32": "3NwdgzG6XDvYwJykyHbwNisLpLpdT6hrHxDb95GvoitVcK2HhwaMWP64T48gWJLtAcafTqP7LVgrGzMsVVopemfj",
  "key33": "j1iRVjSiWopA964NLj1QMExCAzAZt3rzRq7KTWEJ9ZD3Zb99bBmdf6BHbWSqabLNiXHmCxJLG6Vva3oJY7Gphqp",
  "key34": "22ssufz1kAUEjhbyFZSBPBDfioisxyf6nz7a3ofXKbag33nxT7esRtkMdr1FLAT3NxGTwzTWRyXCaq6jgvcXkvAf",
  "key35": "3EQmX4Su677FQVjYm3Bssg9HxCz1f5BbCEkoFyzQgEW1rgZP4hbpYvcbjQ7GEyKrWtNArWENgTAKsrs39KiGyHRZ",
  "key36": "5ht2sWqFev7dj5Aho3Sg9WJdUGrH9vezYvr5mSSFLerc5AH41L24Tvbz6dLFEdT483puKEAp2SfrSujTTTxvPHnL"
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
