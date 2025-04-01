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
    "63xi4iqnwcM8x9SNwq1TQBMNknYT5FFiPkKab7TL8nkcSHoYGwnKtApScA3bAorFiwYBQZbSspmKuhZH58vDuceT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8GcaUSDrumdP6WgkyLNxhtZXNCadHBBeqQTprdyh71ETgU2hzwBCLdiq8MJLPcyjNQNZkVRUKFBerDhxXsTnRc",
  "key1": "Xfze4rAKgaPXUgYni1TC1uEmYVnsjgfCPsYv3HKqGEuhemvdPXBTk1bvMw6Ha2Uu7AvFEFCivq3fKSUSaGurjHw",
  "key2": "5Xq2xUVJS6GLHhPQXWpJ78JDaQ9F1iwtvjnKb7h9vwJrknw5fAGCfKBRPqAyEbUeHFxW2h6HS8FNdVm2TdPoanoT",
  "key3": "5o3v7GnUY7RbLGThF2LqDTzxnzeLUTBccLpDt3c4Lm8iPkrTq8hCpin6LRQGTQ5DEYtd64bgECLVePFAaPM5eW2f",
  "key4": "Jkds547wrcCW9JbVf1uBHPz5yEVnVSrjZQ7RBbyjNmSYMtExXuni7QHtQhYkd1KAqrLTMNxMcJkvVycCDi8DBbq",
  "key5": "42AViRzLhuv7GAh2WwfvArad2x2MtBUFyngVafwMRCWyE4JPFcwGMaYuFg1PAScNmMZudZBeSXyGVmyixQviqcAu",
  "key6": "3Y247Qy1u1th4Zoy9VDGcLCiq123SNiSfeZRLH7HNMdYPLXUgsDkXtdzERZZNqyHScFfPxdJVX6TtJK69KiZbGr3",
  "key7": "vvZ1Vqjb29HVL2pwjXGVy5v9CV7ULrnDEHcGkDLhBzcZLqepBD27nBA75YptD4MabkuAE8Csb2UoskeHmGmWsmh",
  "key8": "299PCZ8Qb4KUwXSoaS2yhUJjPnrAFMRmUm6F711vK4zxTUZfSfcjGVGZt4nmJt97pWiskkbbKULW4nWMAudJFBuv",
  "key9": "3AoFmV4ZUtQ9iJRibDbytvnDB1VjRM6GgjfkY8mL7AcwXN2B5Qcj1khj1dvhVCP4YbwPZCGFE6uFzjFo4atnTxyY",
  "key10": "2n2ZRPPbBx5UmzZBfxtQmWrMA73ozDVEKmMG4LPfbNU99PmigXFkYNaGE8uA7m3t5SWPDozsA8GsyxcuvHBgVZtQ",
  "key11": "JKNHULf9PoW9JqmkowdvEx3a5skPDMNCnEZamT7pi192TL7K6o5D3YVMzY4R6BY2BsisspsabUrwydBt8oV3wnX",
  "key12": "2fwvb5AGYru2tnYyhM1CMaHdumHw1wLstx2eyxUxt5NznoFUhF92spVfmznKnHuAVQqxXevxk6AudPgbEkcN3RYQ",
  "key13": "jUzra6stPnwtL1cnw3Ai9Xec2PS2PtKFX9uJhFg6DscicboWxyxUU3x9SfHmvUUXH8FJ4KrWZvvtSRCE4T5P5Au",
  "key14": "GvDFmK6sziNhGV2rTKztmqFYFamtyJ4uVeG3gZNDtrLn6MznG6f7QgdD4a4HaAcmL8iR1V2gnPJfeMpFquw2cAZ",
  "key15": "3VbTPtx5oaB7FbC4LuTf7qNwP57iTnYbWijFPUJdFUtiKKYVcY96Pmidun4QRDEwLDxcipRU6H8YxZBe6d94Uf8B",
  "key16": "4oo3xHQ6waaAtftszKFm12CgQGpJCTNxp1NpRYM642qD6dZkVYqyXKUyjFVEogCeke1aCdgsDJzhjtUh4NEVAutu",
  "key17": "3zi2L8ujjxDXPUJoKyZ17r8vALoR6dG1ADxYSttBv6gZyJtMm5Dosi9rxJtyhr8JMoSN38Cw7nn5VoACnNVTKgU5",
  "key18": "8pt4RkGQJbpCLnphgbAgpX9LPuMSoTQD74UcKdX6K6QTvqWWAqrTNTD5KhqNJHpkn5FUfRzgyqfYALCAfA9BB9Q",
  "key19": "3Nd3rXbjfAGpvbwjg5b4wH7ugBarXmihaY3PxKHr1vg41GG4pqpJbLgHZbA8MXp8mbX1rrmg4Z19VQpinAbpoFU6",
  "key20": "5A32NEbwJoAsA3E6zbNuBNMJbVnQ3VJ3SV4Jm33q83gKwChZJCUPEbUyLaA7gyvwe7aJ3uki2EBVsX2mnMC9n2HB",
  "key21": "2EXF2YbWAQB7gVndUYLV2GoLDDw3NbZWH6HkLPHarNWSMHJx2iXezrLoDsy73HRA5pXk7hWP4wwCzaWFrViGkg4t",
  "key22": "3JvUkoAxmvY31Q8NqwdxCpkbNunR23SLnNF2PCAEr9rAyoPbKKNRRPykSToau9uPoGQbSqPpSvjuQ8Mk3P9e7TaJ",
  "key23": "5a81fHTVwonCabcMU8A8B69DELrLZKxokBarwb89k5vNXkJU5aaoCd1SfAgFa3WZWHErMEijZy4JaHGyse5qLC7P",
  "key24": "5565Y3jKRn6k18hfct993GEBBvzK7dWMksQDFRFULZ4XAb3hHq3uDVdU7ebyf3yUUye3JkTxcP2xejuY6yaTFqns",
  "key25": "276uvk7HC6ofGeARguqDyNpTPndBQZYJ4ee9f7R8Z51sR1BFZTu6TpGroP3htDvhpq1tFWU7JBDmcXx98eYWvY34",
  "key26": "8ZjS3YzVjahmysFFCStrLbKWjPL8ajMhPk6VQmmudtFRmYpsSG77mL5KBHJmfFMxuf3BfBB8GWnHGWrtQZyzi1Y"
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
