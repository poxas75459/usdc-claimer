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
    "2BzX1aFenjDokruh4iS63v1fVXNZ69eNJmFY1CLThMmdgCRYZxUtRcwg8Lh8uKaRxRw62gvdLkFsWY8wYoC1kcZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BAVk3SfVAbJX2fsH3hp7DSXrTB3ZYPUBnb2rwPczPTWtmFmBQNLuFZ29PP4dBrCH8fnkRv4KA3WP7dxSjZT5yE",
  "key1": "2cJAjDtBxT63PFR34eHLAkxGDfzkkVdvbFfZDzoZa8n3fJfg67JBZtBFUj3aVbi5yHWcivczAz8wsEBnBAXRrgHL",
  "key2": "ND7KuGTYrZtkViz3a67yV7jDsPRwWyoHVp578kBPkUvyNGnogwKbpJrxZC5VQsM3qyWTyJzc1m5kZxz2pKdfnML",
  "key3": "2PBLVpLaUxuEyn33NqgEdR5YFnHg3Ueiq51G1L5NE9kWZwhYhHPMPp287bZP9e7kgBZhkjVSAh51q7tYKCbVhABm",
  "key4": "3QGx5G9Y1JGdPTsvv8JXyRym26vz8tRyVgjx2YuuLyt7MTzvTJNg9YP1z2zZMDQjscwRQgJSmk7xsV4zELBuRjEd",
  "key5": "AVeCR1LDh7ee8WrXxXCXb7SseVAWKFjMRPVGz8NGg3xHKND5tMJAX4nBJMZB7e5uy1cB7yzefD7NfWmXJZ5nvmx",
  "key6": "46hZ9U6KFRawjHvzhH8MMeywH8fLikCmxcwjWLJMzv3yrv5x2CuUgUXhuj41PuWS12RUsYwT13bLaWyhoTmUD4xk",
  "key7": "45dzXCuLBpW7sXPW8yJawhJpPPF6ta2tSYkFnJTJaSczmvHC4NUe5yBqRTLXBJ5mbLffmNXTb5g6J4no7s4gqnNa",
  "key8": "4goWzzkde9RbzfHGUU5K8o6XnsVZ3KshGin2pj9vFtV9a4Q34PDftAAwkFxRv1gyRGTrww8wpakVmcF5YpxcWXob",
  "key9": "39xAjukXqDGfgQXB2ArhB1zfgEP2kBYWijjvpsumQkxyHN62is9vD3ETPzHKUk7wDws25CGDwo3V6gzNjKkLfcVw",
  "key10": "3nuR6XHVX33J8H4t6m35DpMVWHYrgTe8LaGPuaRfMh29qZXmL5RFth8Rgdvyg7VN7zsbV53K1U8Y1jXHBsirhc38",
  "key11": "2KudDwo4V26JpRgabRaLFWp4geqtZWJQCUikYCXSdsebTpZ3UjgFw2Z57nTiPitAxMZVZv6ueocxmgVTKxTSJuUH",
  "key12": "6TFgsmDtaRSegtLUPBoXTcYqKEjC83yd4U9TcymGruXCBf7rw5fzQAMg1Q7n551xnmT7riBmMVbbJ1JePAXv8rV",
  "key13": "2LrvmfLA8A4SdDPkRNs4LAXY4JPfDRjVveSbCTbcyCAC6bWFNpJe8z5V3YjFvgfq2L6DXtk6SCFmzQFFJnUzGfy4",
  "key14": "2shpjHxcFSRhs5SzWpZ9z6z5Ymdui6ySabxsLUxX6a5GKJfteAzwamE78SMq77vy91ozp7eDJaqeDTydbouCecqD",
  "key15": "25ucCv5VExtu4VDVwdszSJE2438RbvCLnUftqrz5Wh164nvhpVRbCAjuv5wyq3eruUoGTYXvBVJYiRAHM8kZqbam",
  "key16": "3xKAnoH1Q8PYkKBTTQyCoS9JHbWcw43avDo5yQnruZ4Qr6CQRu7bxkqXd3CU973kVi2T9aC3MEtwAE1i8ufd9VcV",
  "key17": "5Dxu8Ys322i8MF646za3UTUcefPiaAgX7s8EqNdAsA4Z95MTBuRFBTgXW11XVuFRkXB9GM3CANpNQZJUPBHaHdqr",
  "key18": "5xVG6AvbyTbN3g6cukFA8Pmrk7x5BTk4uxuDHNBMorxbXiiXvdD2fAo3YgqDyMtet75Xo3dHC5TUckdVYZwhXo2N",
  "key19": "2fmRQzVwwfFk6zRKEQokkrdSAiutJub66q5hTYFHrMvWyvz5NhBQBk6H6tvHPp6wKacZRLMYRphfxicEnPfujEhG",
  "key20": "2XLTaKe2KbrXSaUhbC2Hu8aREKGbpht28GXHurLts85wekWHm9NTEuuNSitewM25ny21EXhPMdBJF5C1NaVrXRqX",
  "key21": "wEV7gyptLUHuwMRC9Xu1dGSSffzNPpekRcPXj6rUn9crBLQPn5QCHhHaihaTK6XsTaY4yFAvbtg9qB3WqBrcYJ6",
  "key22": "53TC9U6u9kQogPZ8C8k8traJ63SmWu5LDNpb9ZWybYsJojhptSdbMxVejRirXr1Gn2wjGQCo8236EL3vwYHBANV5",
  "key23": "4scv7EoYFCGqL7grJGFkgGJYA2BMoiRcNysdUHDuCmmpvHFVwrbFnVJ4UVQ5jDJCBqpFTBvBfVZyKwtuzEHtFrbo",
  "key24": "5X5m4JFprgCSeP6ywWAC15SCCjssQnxP7kyEgikeoadsf4iMzg1gtUzJ9KSeQfC48MQdMSJcq2QGyfGk8NkrPRjH",
  "key25": "9WCpu8ZH9CXF7jSMfHrGivEHxK8Q4BQUYbke8yvSdB64s9nvQZK4MV5NWdDxhUMs1pMTAn2cDDRY6ZJPJQsSHMC",
  "key26": "2Rb7PqurQX34xAFncBXAove1ujYjuQd9a8cTw5jzbsPD6qLiGsWQCNVznv2KXfMkLaykCZvXbDWE6KyS4FyhXQ9d",
  "key27": "3qcVadPTU9FkE5xmywndzQifcbLbKoMqM29aaXyuaUyK7nDPJg8bNs7nQEwdkT8FN2UNcafAm2CdrZTuMWAyzGP6",
  "key28": "5h6WeZrCAL2mWz3y5TYsfcxVFA9Xa5h9SZQ59zGHaeDUgYtkPpUgDPK1Sn4R9jBfzCVgtRy85dN7gVqt286Zpi8z",
  "key29": "4VJgeF8Qn3k6NueCue5FSVNEmpoi91U8iQ1QxfrtPAx83aNxi98pe4EwrNF1j6EaLHe4JEPxnEb9WTWCtWmTgfgL",
  "key30": "3gsjkv8hcpFHUjakicggvtX3diKMRkGKxaWnTYcVCkNpD7ABN2TwudyrjiJ4gKarKjck45BuSYynRHFaYBqTFtA7",
  "key31": "3qMPqBozP9nXgLvJLyTuZTPQFSgEXbcxCdsyrmpLMhcaCSTtJF2kYXjsc7WyXTaZRHmXs9sNzsxGqH6HccnLmSkD",
  "key32": "5NiAEaW7iet4wXdARvaGnzx2MLdK4BVpde2jCSq4BiAm8oY9zKxKv3mnQ55c33Qkb8X5gfPYsJPjivSUTcTbnrBK"
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
