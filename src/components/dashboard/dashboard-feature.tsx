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
    "29h9dShqarE8WiBXHHVzBAiFSRftVwSS4q9UzSAU8S6aYWfpnr5gULJhtWTBgHuCM7nQeDk3iXGFWPpZo1vhVzQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "552Kdzk2W8iRYVnFAtkdtMcTXRoFGnyRaGf858kBAhf6JCmDHJrJ3ksJC9p16Nch6uCQYJtpjaFTYwQmBmFxhnE8",
  "key1": "4ewFMKMR2dmYFx7gbkMzg4aesVEAMvXKZCcACwuBQdC5XRu9kVw7nzCSsBMK7wWgwp9az5VXMmXaxSAoEfxUBFvY",
  "key2": "3f4KE2nj5xcuaM9RqiY1GHYsr42ihbEXE89SB4VdevquC54cv7adAiu6SaYdVt9RZz71vHR1Xfk6t5LWA8zjiYT6",
  "key3": "KWfgvc3o63jnPtsdJosjRwAZSv3hPEBr8aiHG1qCGb9jKoor1RCHR1piGdQi4Hr8rEzZgXsyvEqnk2H9uMSNKRc",
  "key4": "5mbSyqxL59SUxukDaaDs8PWzacSdyGmDcT6r9H6Xa3fjtBAchunvfW7Mu3BpiNXNpsQ5y14VfasUSqof3Zovp8NF",
  "key5": "4SqQyPMA75QbitgvwjnUtfAqFAM8BcMakmWa5cBsKqS7TaX2D7e96zsx8qLvaeK7phCBcb8k1zeskUUmwDmqZNMz",
  "key6": "23VJMZ6uuDtyMjHctEg6yzKoKhemZZv1Jz1j4it6MvSDLVBvsWsRMMbpwrAufwue2qJ7Ryy26ZWCUCzAQwvr5KwL",
  "key7": "4gPCbGp3xEBZaas9DuYVU94Sff3GaU7Ty6q12PPJPrwup2vhvCKDcyiRkvDGEyGc9vMmXgLmykfQDk6xk8xoGB2M",
  "key8": "2mAcwDcJKWbTpmhaNjYBfd7jUQKu8RpZFoAkWWMLnYCTtCfzaT3jBN2tq8x9UGgJyDMd1SujU5v6jTX718WKGtGe",
  "key9": "5Wn5kjVhoVR7bfgRHNWjWfUEtwGM2vcHJVKHv34bCEhjmjKWUkXKEs23P6ch1N16pnK9W5uCwEmEFpzyoiiEtoZA",
  "key10": "4Tc1srw4YEWk31FXXZhySa98SNs3bBxHzy6gyicUaqRhZbKwbFY2vqT2Uw8tZgL967mDfscrFYkgeMp7KhLdtFUW",
  "key11": "2tq6VPHK4BaMocskw9Up8tnpc9eRU9ciJvEggTtLrXSH2YsQj8fZvMHfD1kqHkPeqHAWq3rzjLwjmDk6mj7w6Vx4",
  "key12": "2dz3GJLj8GgnTQBuEpRuZR69YdwXr4BwoSxEvzm2QbdKiJVPqBrihm17isarwF5ptCZaLTJ6XvTgWc8Y9gxd251n",
  "key13": "4smuPaYXWTrDywNevCn5jt54HnAPCGeFPHc14NYBHnLVCpGogmKB7NkBpWfxCFMiqj1HTdFEqPMiRvmJ4nFhha9a",
  "key14": "2gM1oo8E8ESGjwcUm4cJZ2Rb16UenRpAn7uZPNqg1ZNaetjXeUdsBCYoDwwMa377LL44iXH1nyFDyQDeAeZDuKdW",
  "key15": "5BcUnDKyJV9zYXTimQRHpQHfGXknhouhCPMM3jSoeJnmXsd135BxSpxUkPSvMMzL3zJ9dPnSQ81EpmheqjhTbZWt",
  "key16": "7vyzMJYBgGvhxK66XbuKmZPbfKZ45HZ82YY5H2jCW2F8GKfnjf9RjrxVEgkXbAoJGWQtB6VkAJj3eyX9gXzMQkQ",
  "key17": "58XedmnUkuLRWdbxkSoNTjpcVN2cXLenbCMMvZUXamjhsTbG6VAbQszjLePU6J6yzLkVSfW8iu6SHzRdenGAb1fN",
  "key18": "5orH8qYYoJcjFfqMqDuaUDJrwuBifXYUy7jciPuCDD3ZiyF63woKm9jgZv9xJ8L72GvjwuaUL9ME6cKnv2r6RSrT",
  "key19": "3SxHvj14U9YNdzizA4BKEJSY3PwAtvjuRpFUo5AWXLbfgGhRtYUV4i11Ri5gwdzdVmZzUdXbHPk2Mi5uj9WGyc2i",
  "key20": "3JAkppKSZvm571qnmaHNRqEFpXkzj141TWyB7gSEtunt1ubxGNehTCWWcD9oNpqCWv5SmR4ygE496urkwnqb3Vuf",
  "key21": "24RNq3YwxmbBygFrebSxemVsHtBxQEb79swh3EMMW1eV2JwztgGfKAtaCzkajnjQCNdCRgZ9P9233saYGgHAr41c",
  "key22": "3FAuKQhF23pS2f3GQKv4MzCsQEv8VxGrsxcDJdR6dLPA9zoNBAyrB37vgs2gG8gPC3XZGc3AKsfPMVvmpwFAjkBf",
  "key23": "XPnFSRUMu6qDuhzQoiomPEx2jpSpSjetNTbaRGDi7VzD85TVAfFQcBK9AG9xLr5DmMcVJWsgvuLiBYwGg4jwzmF",
  "key24": "V7nbmVr6XJyXGzT8DiaK5y5Mzps3s4BLE1ovs8qi2hug7jDFxaEaAkWdkNta3w5TopJuZjMFAqtWxWstr9p4JAa",
  "key25": "2EeAFq5fm2xcmvfXtf7biVeMyyKSyviyS41ADGamPH9g9X28xrXokDfjoWCXebvsDmh6GckHVPeXihVhFEdRgqL2",
  "key26": "3vh3wDsjJAihPWa8NamvcbZvL37P7jpcjczf3CtkthQLR7QDyjb8JhzvpzvJfdxzG1ssyMRbzCcKzUj3Jtp62Z6L",
  "key27": "3sztY3t4mByFqK6XwukyyZEhxbJLjxXoPySSJkVSsQnLL33vcG6NEzkmBwTxx9T1aLhkuDhr8yeJCzBByrjbrxwC"
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
