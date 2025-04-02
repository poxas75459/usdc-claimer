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
    "4dJEnD66ARyqDp79duLVqkTEQkzqRvNFFedRmw5WNLramZrPunEBz4dYqkrPm771xxwFdHfpnoUzksktnPbx2bt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AUDt5DS2nWHmKCAtG6DToNAoXtZDW1SF3buUuYCSyLKJj5ywarBtxZBapqvrxSg7Ci1PWMceaXGxBQuQRRwK2h",
  "key1": "2tid6AeycAifoxXvmDA31t6tVvjqudi5DL2TRvHyHNqLQAopq5VFvH8L1AWWit9hCLG5GRZFwNg7Ltcsua4gC4Vq",
  "key2": "4PHtv2LrHNsghzRS5XFVnXkvzKNfkAqJ9wi5uxrJbiEHB3v6a92PZxWZufSe8ZKufPgPyxqFc2KhzR1Ah13hz9dM",
  "key3": "kTMDSnTgFoCBZMH7xT1NhhVh55YDJxBehYV6PU1q2bGZByjQtsLAkWqVf8NTbMsNTTRf2WDdtwyDCQH8bTWg47U",
  "key4": "2CAEtd3QUMDVJq7wnn7nAnjsMpdW1KnHV6ox6uPxiuJeWvMUqR8RxwBGNKYYxqoQ5TM3uszWVAdDhD8UPPwcB3Zh",
  "key5": "u8oEPwdMzTBqpQ4eBjkdVR9nRZ9AEfyq4AxR4bmdjx5XS4esQmmyeg57kiB2jqfd76wFXhkd4AurxMxEFkZ5fWm",
  "key6": "23nyPsWhZHKcQ14yj3Z8zavE5Swy75sMEXLcdxRNJ964HvDnWSKHsxoPekVYRCW6AEoQQyGzxZx3Kkta9maxm4Gr",
  "key7": "4X7AfHhTWiaTCz7VehzMnWGdCDfx6ZwjM2BbXhn3af1yosK3Ybss79QK2AAm52kyvxcTZTCu9iuBnFzHpoLdQhtf",
  "key8": "3ZPy8zeQRD9ug8DmC5a46MTrkpq3N4UHWskDeCVbuvzNDjB5LQUVdoDoYiQyvU4Cek5Ya8zyLMGnWGsGxyhcwyre",
  "key9": "3vMmf18eBDNWNCfV1rXHXLPwp2rQsZ6QNNGu8pW8JwXNoH9uuoPAfHZwX1y3du2GBJjh8YarVB1BEae6gHc9zVLY",
  "key10": "2A4j9gRLB3rVjdbiCa72RghEvfAfq3YRzfY74Bv9Be5c8uiSJCL3qVWmPmsZvddgKmS33jwDUpBwVi8LAaegCvJv",
  "key11": "5Nd5jeDaP1U7J2uruvQTRkFNpNHgSm7EwpMT68HMUUoPvqaRh29dnzfyH4XerC1ubggyud3zbTrLZ2Yd6naoenCq",
  "key12": "UMdaHDFqBNXwjdxahrKyA9LnFCbwY4dFMz4pJG37uux21JuoVXNEw9d5JzoiTPXobSAc4Twq7iRSvM1Yn1KTKft",
  "key13": "3CWJBDQWfvt9Nxt2CZBeEZMKoTEE5RdesqYefVppxBcsDiVtyRpnDTF5RWRmS6AW2Nw6FqfgLF3qJSomKCUqheaw",
  "key14": "32DsPG5YoKiqs6LgpGstMAqahW2PEiQ6RWVLtbrtdfB2UuaTfSnxFoK73QrdzyFq9FjhpfimxRQE9yudbZPS1Q38",
  "key15": "4tRonGwTn6MmAPnFLCVDyJa6YoYge3RXLMfWMGJCspicYFrMwRhAF9XHE4gC5n2SbH7nuymqEFvdUrC9ZpmPafqA",
  "key16": "2NDt9N6aQpZ4tjidefVNsSKJ2uWyHth6ctjnKRpo3UnxeANhYQuSTmiEfnvjPsbVFLou8QQmgJc6ezszK6Ck88a6",
  "key17": "NSZfQNuRqM66XKEVo6uE69ds7LjMYEBhY2pQDuFFoSef7vcz2QdV65w2aBu7pr8uL9RjaZfyHzpyfxRtjnpTArA",
  "key18": "UbXMrQ8AcSzLcDKkiSVJjrRfK5E2NXQhpSTQYr4mWTrmmPG4kGyhijUsyK9fJcYHR9B9JnoJFTsHaVBaF9QmY39",
  "key19": "3A8xUqqkvrEgSa2WSVSn4ggUTJ9WXgpER6cdYQD6VD7iixcvMDUGHketHYogbwTDMZkM4YKJD64pCZMvyvNpmGCn",
  "key20": "4csV7TErRZjDMDkfcZbDZqfq327RDMP5kxRwXWJe3WjdcQzoTp69rRw3iRhM8MC2RfSXR219haRmfu81ny1yBsj8",
  "key21": "QQZcda4gEA86muJKfKANWvMQjwPSTrt3K7udvusHciMGPm9uXgJEJezQyjbJLxEMd61ksaQ7yC7tAe7gQf5NwcN",
  "key22": "5oTParGPoEobdTb6FCr864pV6XfLZ8DEzFePg1KgkpzDEsgWuDRcV9xRVqgoVZcSWiiuj7oeEabXtbR6zq4at3HF",
  "key23": "2S7hyNKkjERpLU26QYfgW6UPeHVUq21CdR676xWaMwYUMEd62QcHWpa4x1cym6AtHpgeQBPPHAZkYPCqLVD64ctH",
  "key24": "2oobkMiKNvc6e5UQv1rBW7esYnbT4mrbxpTQYn9HHidqkYKGKW3Uruco2xLcLnfumPYP5HCRS7fJJP78Xp7LTg5u",
  "key25": "byDnLXnGQgLQpZWyMxXfBx7LFMXH4WQ5yWnz3GE3moLN3SLiF9343uuHxNMd1iNBAZpPWAeEEUbXiaP82rEy98L",
  "key26": "2oyPHZHnSuNMAhk3T7BiT2SMR2nWPDyvMu8dLd5hTppE5kz34X1xuiPpkakRsQHhkDKECTHBSeX1Nor8L2vK5S2Q",
  "key27": "4mZ6GP2pubVvaQYrLEQQErRNEUAcgLGn2Kyye7ydXZMDQizgkuJ77jNGQ4YKNXUnPS7n1YLBLpAU8q2MhawVvfQH",
  "key28": "31nWGWpK4Pf8v65N3oySvF7MT9jjPxGTpCCNq2JY2MafuWc4AiZFhcp6mdHzoQWzpRDSbW9rr5FkRv3YmevdCeF2",
  "key29": "4T4JALsGXF3z24wN4jwkWDSHdPfD8kWSdgHWTPkMR4tJetYj4pa48q59oZJpjreHdPZ5NKQy6pCFHmfxbxc2jQzD",
  "key30": "Q2C4ZZdhSWMNE92K9r9YmtoqzB6VwmL8AbhjmZUmSmWoBuXSsUUkcT2k5kkMy59FetWLBZWzeYJ6oydicrgVuoM",
  "key31": "3VBJUDvbpEmq2SkJ8cLK98APsYwJfe7M3Cn9ZxsJ4qNJVtg5DtzXb9mBRKqPLeQZA1HTq2CfUUVAo5NE3an8seYm",
  "key32": "5PYxzCyPpJDv1YEpBtUA1tkcJFEaVdpAJuJhBL8DKFmxuFLBDtavr5sje8uoqYD1E2gTdy8X4Qru1z9Ws3UYa8Hd",
  "key33": "4Lp9s8kUVp4x6GhV7Te5BijkkpVyQtYAUpUsRaeakjedY1hrsDCr3HDoBjTBUn62jB9e6PV4QXG7n5kb8onAZK1J",
  "key34": "3ocs736MAjL9YADAhwL98gZnXDdPEwAb3rGGgVbLgm92YrXdyTdfNXsU95PrqPS9FCh3JNruVK5xfwn7cFXZR6HV",
  "key35": "3NMSXxLCArxFEeYNtfgw6pZ4kMck59nHQL5sGeQ9QVknsZmLUsWxFDDJRpFPv8zoTWsLWtQWdr5PBtEuEjsQ3GzC",
  "key36": "5yuKtjyhGydak6LqrcgFZwn3yZperpZuhmgjwDNKLruWVEVjQHqEcFMJ4kQTbqkJBSbu8GcUMaiMPWHQZg7Q2YJU",
  "key37": "Vuz3qXEr1hmyJYSgbPKVjRtJ5r8fwKgn8tzyWonKJgme8zp3TF6tnshWvGmyGQ1ZA2DMgv4zumJPN2hBFSaFfan",
  "key38": "4mNoBfL735ByTQPw3THTZ8j3Yk31tF5iBEvAqfYWiWvL8U9zGRw5y5W8TDafe5VkfFLgdybfKnqaqk45Ev4xjqg7",
  "key39": "2vgYwoTPGDFF2e3eaA3SbALheGqEwdaH5jyVrKvfppah49TsFiyETc7kfYPA72F3HFXBvwV5WSsiA72kxiDhWj2v",
  "key40": "3aaTRQYhG2xBsFUUQxPkiRWUA4RkEKn8cJpcaNy7p48xQdPWGrF3WVEA5w54CG1aqn16q6nNVAsyBHCqMxFCiANZ",
  "key41": "TPgF9sHkP5Tc8B5aSp4yYHYWTcMNCrjNQ4uqtT7J8Rbe5NNRy4dGPqn1ucHMXniky4A2U4cWrrnQt99RVYmm8Ea",
  "key42": "3azCXra5oPQLZcnVVNvMUEZjgC8HJeZKYmSdAsq15XbFh9uvxaMCb7wrrTGmZQpsq3ufaufGgMf9Lx7UzyVhKpaj",
  "key43": "FFB12tVCr33GoNBSJFzFJL61J3fPAjXmHKnEhAuvWzRfX1iiMS1dEVq7GXeXYE3im7V5z1gvDvmEy8VuvxwT1AE",
  "key44": "3mpe3Vm1Z2daN5X6br9Fxeq31GNZTeg8LS673UzxQzUtJ8RBPP6DyJ35ZvUnsc5A2b3jqNfpGuzKtTaP5uDKb5We",
  "key45": "338XNr28fvmzowUe4qT5HbmWP4gXzQopKtfpgV1d8xWcprJDRYnU2DuAi1vTDtYEt6xf93U2oegSaMFk5CwfnRg1",
  "key46": "58NkdS94kmW7xgf7cUjbG8dDcEZ9osWNBZ4ZzMYmwDn8CCZ61x2HmuWWff7smbPTRgj44bLCEdtB3Wj39tq2Bobr",
  "key47": "rDz4XnKKP9XRNqqkuEr4KeJ7fLCVknuFff9vAJ47gtxxhpuB7kc98Amoy1PwFQqVv6UfCzFDtyEfBkVb7bzr9nQ",
  "key48": "eoFQiGrpSocAmkvYvTzzHkJEGhwo3LULdUEQThJ5eer2JTNkdMN92oyPiVY2vzuUGRrwCJZw9sLrtYkDjz4iUvP"
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
