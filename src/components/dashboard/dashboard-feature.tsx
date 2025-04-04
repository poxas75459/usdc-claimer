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
    "5qDMouRueyRnroX1k9jyFFnKzBEoSsZqc5yaJWSHaEUqXmEMv7wr5Jcfvg7648Zm1QcKxT6TrkRFryQuL1ya6uDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m1PQsJpN6TULGHVMkwsX7DknvGxzoUQD1gVBvMJVPVKz86xJ8oK2tpyVTYckYwbbiuwU7pMPvr4Whf85RxxHaX3",
  "key1": "4yPqDSeTf6kwAujzCpPZ2wZEjHfBUvonZx9jM8pbNNJdca9cyFwbPToDyagXhgxoupch6bN94CENhFvrJQztXaUw",
  "key2": "4Qj3SGY5HGYF7h37XHDywG1thDreWfRsPWZu4aYdUgeDs6tfhHmKMF96CKq2dJXYaendxo3mnjHYw2EPkpceJAUD",
  "key3": "rRcC2Gtfxtu9khtv1xBLQr7Mt3nKre6PeiWiiD38eq9rEeUB8uKUCgUKwFKweviyktQFEMKhhzbvVh5srrMVhpb",
  "key4": "5hC97ircNAiFBAfckuZDC8GBnbQaXHgMTUaKqi5NFEponDg3NUym6ZnD7A7hq8Lg2ueAvJv89GrY8e4ZHKiedTbf",
  "key5": "5mfvAmpTbJ5cKNKUrqUQsiFA97oVgecQC7R1Sf9vMbsbZsQwJMN8UbdJEMETVTcTMa3MYAmiqKTGaDxp6D748sU4",
  "key6": "2UdZngqWBPJPCNGhZJFST4ZmkszPp3C5rYmHAnNvogVGH89g7qdgjTX6zrrCfXivxtVfdEy9NvSD38YHt5D4FP3a",
  "key7": "3JJfuHQSAWzg8gzbcBYw2zF6uxHiqWSEQN37DfcjgCEK9GeDRuYv91wd7KhTrNQnrJGpz4uyQZr7Q9ihVAEvfReW",
  "key8": "3xGgumY4V8eHbcBj3c5Z48KDNpoQerkXLVkhBVX1ns9eevXSEt7rjfjG8BtSbVjogiuHv6EjnQ6gGufYoYBvhYpd",
  "key9": "5PsQigGvupk9pj1sdc1eKgusHz85WtP351nB9futLndDy6GgSQu2RUbwAzFKYtrLEmefRcZsbhW45Fc3N7jfvQvA",
  "key10": "333CquxsGYK7hveqZU9QzCTmvnqrM1W4fef7h6Td3KtNFqyZoGuRgdUjSz5JZ4sJmatgijstMsk6MsVdfN5c413P",
  "key11": "5yMgAgXpXw84nJSWa6n2toaHXi7au1EPaSK2dUYyD8GZ4FWqNjn2xpgWTbjduQJ6heiCNxkdNDrW7kEmZwSnWxJ3",
  "key12": "V3EnRaJJVmdFybrFF1U2N4o28JNjeW6ywgGkZMuDCwEaZpiYyXU2CFwqzu68KdExdZZwr9q6zo4pnUHXcTY5hSE",
  "key13": "4JtFqiVzM5hr2t4n2ZxFQrGENHyYrFzuAcm6nfnPSazyaw4LQXW7EUDqqao7RcY27QQJ5MrLyhNhY8qAapr7h7dG",
  "key14": "23zpSZXUv3EMYy3zqrDFodbTPwPLm9ZfbbpojkJcRBq4qZ4tx1ZvethsNdCzt5RSowafsoPMiJzvK2tiq7xP29G4",
  "key15": "4BrBVd9Uv21iqZxyGwGe6sgnkDJAjW7X4VF4ZyiZf6iDYSmQY4vgivpsyBieYMkTdz8DVrm3EinAnfG6MzjuuJ76",
  "key16": "6XdUoSstFhjL34dkNGErAoUYE1s5H2atqqAKYWRxGSTRBjMNzA9Pbbbpm7T7PuR9zk9S2ryWa2oar1jr7DKRMNg",
  "key17": "2zP3EpSFxzWok8riQ5nbBk7A7rJzwuYMgLpDRAkX2XwEVAJRE9YgEQ9ZB2B5hLyVg1bLtWDMd9ZqHoTr1qkW1eZw",
  "key18": "4CoZAm8mi1ambdpFXKrnpYq3hWZsFfu913EGuqAYs7GyH558dh3TNcowhXG3yifU3aVmvaUaPbkvrs2jZw6E8bTo",
  "key19": "4ucULkEH9C65Lc4LQyvWgySMXbLP2RYYBhEcc5GNhrmCRPNLJxaRRPbc2Sy473J4n7hMg5vW28GJX5AgHq1YAhMX",
  "key20": "2mFzbHHZxr942VXH42tUcKhrwbeHKbFU884EYVeiR5iuhdQPRDGiQowbV6wxFykNYZm2mEPvJCPjMt591TG8STKN",
  "key21": "Xe4ZdiCmwYU9oc2ZeQCBrxTzxwde1H3eCBXygTYA7ojqcPj9hk7uXaqbdTV5ciUm38r1fq4R1gQU9cFKMF7ECxB",
  "key22": "5sQmjNovCpcWSfYcqzRnhZJXr15kHPNPg1UND7XVmfaG9RkPSjcjW5Shb3rDHJcPUfijGroJ5AhvbiMRefnLF5A6",
  "key23": "yUwggyECY5Z1ZcADGB8FC8MR85gUNMZ4AqQQdMEF4e4UMbwfp32Aj26e4D8Yd2nSpBVhn6PnZWvXrkJjxLbJjzT",
  "key24": "3UwVF7WTqreBwWt3gBFFmPvuSZfevcLWrw1pxcv1iB1raHYiGWYvVxYei8nngz9GpTuHcsMHuvzobTg9Z8GkzkPD",
  "key25": "3ADh4QpaJc73z4om7oYNGRJUqbvRFyqdLGWwafcrjPbspXBqvPREuChcubsvBLaEqcnzxzFT4YddWZN4xUcZotEH",
  "key26": "5nK7g3KKTNfq4VwHKaPxwggSEw53E22e9TuxpAVQ2CaXkDfCppjRGD35CRDNz3urMCWJ5qz23jUkFqseT9FjdweF",
  "key27": "5N3E2RD2pt1MSDxDGLQxWPK38GaQRk6mtzHTpQ2pZ6pFPtRkbzcfRvcZ287FZFZapbyRp8fxygiGf9gJiMq4Ceqo",
  "key28": "FXmE5bi2gyWPDwqS9q9gQW2HtiFgFcidhbhi4XAUJx4T72tibirWWsuxRMmEnzLenu4UmhK226fnYnaLqBQggs9",
  "key29": "5ZRfxPr1VLhXjX5C44kjGCygPRtVX4zNdUjyoCbNzcKX9s6pApjkVXdqwr7yyw5VUbRdewZtcxa2EvD8MsN4TTVs",
  "key30": "t6fj9X48Ai7D3Nv2W6yUC9yWwv82MgPtiTHtPh2w4H2V13ngzBRgpLdx2AfBxM9qVnK16SUHJcd9oEaVuM5ReSY"
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
