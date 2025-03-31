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
    "4ujvQRidq1YVp8cMGLcFamEWmFxxhGKxymdLnZ8CfWUzhbbwWVa3soNN2rSu66aJptd69sGJQEioxoi6DUqtQpgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XbqfCsXmiGstJsTfsZvJedNpqMmboikm9ckvZ8Cz55Mpgj7c31gn4TbbGNwY4p3k35ZJ54y6TpqTR6ibPN2sxob",
  "key1": "2JKbx4ZFwNsD2PToqhNtmMpUvspa2EAZosxwmdd2Y1FykSZWB7J7WfiaR7SLXc1n826uDzZX2mnBEFVrGPZzyFD2",
  "key2": "3S8iQgUdGNeU4XBhj5YMzuwxFJiJ8c6qui2s1QCWm4nKQfsFhLRpRQsPjE875amJkYvLVxZEsT5nEGSjpf8pEpDA",
  "key3": "63RtG883Epy3wntTw6W8fXsLZz5EwRUgQjaGXY4dQ7JzaverFeyvxkxWL9q241i71sb6Gk3TBxaTxsYa5rb9prbL",
  "key4": "5qrWjMPnHVB1JFPV3etxvV1GGRc9Fg3sBPJG11z8UyQKZVkaDUNyjWq4cGHwNedqZXYFAJwKZA3r5fMiTgQ56C9r",
  "key5": "5MPzgZMg6v8gsm4uoPmwmKUsJUde15T3XDyZy6w9W48eSgiuYGPJiHaWgHD5L5ZHQhKJUC31FSUxw1hruaBtCrCm",
  "key6": "5t4UaBtrMzyQBLkLXauHKySjmAg277sgZ6znVYEA7ERVKtoEgcrxUtnWFLAmEeDpKcPMWXnuthN9CFYgRex1C4o4",
  "key7": "2Nc78Hs6vB86eBcm1J9v3n6vyP73df5sEQZ1kSSELhApfi7rRggSVphgJVqGCNSn4K3bhGAMmvNT1YCarQoEwrEn",
  "key8": "57cQq2gE11prgDf7DYW8bEGFms4Bec1VKKeWr2qPc1ZSNe51EVruNKGZkjPsxHqPnyuBP4tgM7WMsq6dMKzcwSKg",
  "key9": "5HgXJA6X6miEJ1QHvgQQwm5KsLy3k7iT8aADuc66WJDDNNzYxF1XK9tg93CdMHSs8wvNW4wgeWnR5uWNNueEYFaG",
  "key10": "3hwJLZvRGpXDNun1TaiyMEuDos14xdAmxqMQA3fm8rxmQxaiV4Vqk9wnXLy2TiVitNXruUtwnFtfRgtkcxEiBctS",
  "key11": "53MS4viZbULCBpFZzdC9JBdqExPe5xGiDNDvMTNK3PDjh384UyTZs6JNZSFKMuCjfrSqGE8MffJRXUMfWM6cUgoY",
  "key12": "3zRYJuSiiK3vcDzm6oUSgqJDwuESxPcqhcKRfuyMt4noTaxdw77HAdhyaznS2g1d9gJsBdqtJ8hv5SB1vUPgtVse",
  "key13": "2eEAJZVqd9tSw6gH2jJcQxeEovHiyYCMpf8FRKVpn9TEDG3geFfDL1JdKMFbcdEHSkZBYGZfeDzAviMvHqAR6exR",
  "key14": "5pWsxN8dpLR8X43m83Ya3CuNrKnr1wLUktRkVrnzV68M7XAXspEEZZc3YYG9WfjFbmqu6nUqe2mb1xWjiFDSP2jE",
  "key15": "2sKVPxdGPtbvuu6kai6iUQu6RDX7rYivJP1sB8hrztSGMPtf9BPc6x7ySwqxbugZBxk4yy19csVnJbnQMyxFfw2p",
  "key16": "3gF99Vy2qow71LEndTnCicPWMoo8MASV7trAp1kBB9pmNYXXfUeQhoh63AUAELVRZ32WtNmFw9Qv6p73g4zehbbX",
  "key17": "5av6z5hShYVv7J6HKtzkbQNExDDjngbzED9Qr1zqMuT1o9ncpDtV1vfjTCvLQxxaY3Dk6auVuzouTNherWu8C2xB",
  "key18": "4WKbornouPseciyeAvB6nDiyQuhZ74EuJeGJzsgA5exnpseQ5WJbzCGujcnhZDU8TWPPe1qkYpC4dtLnEQJNm3aV",
  "key19": "37R11zRuJvTT53kKJEN1AME8iEyTKTtMfA8DHotEaDv6F4snv1GpkJhHZBGtLguqZ7Q5MaTpuh6Fkb4KKrHLQcWy",
  "key20": "43dJw2mRvCKM8CatFcG8eSqQZxH6uomHc9Fj7cWyXB4fKoFZ4AnRkUbtdQabjDBH8hYUdHdpXAbnrxbUp1WaFUvY",
  "key21": "c8RpyQ66Y49xzQoBi3WhdDnEiWr3KiTphSA3zvSEkncnMHLcvUbsMcgwRpnGk1T32wfHs1j9BUpEbJnkceNSgKY",
  "key22": "3UFE2Dq7zVWsoD2Lu4d4SqdYHPy5QaVMLEUmDL4fVaUZLqFpyr7iRyawLmzkahb9Q2R1URD8FWpCp1wWdNB7tFFh",
  "key23": "4R2Gnb9bsPfnKkgCkExkfMjC65k5yFd9y449Lra3kWZgCzpSvPZZ4iwnnDxmmoar7RKtoDgVS8gKZD8UNsaRB8q5",
  "key24": "3GgCqmYqbLyZxzTgd2QL5bumLfvJ5Pqq8Jx3shURaNXBFRprFgAoHhGwSVcLbEwH2AbnTLjGeLXu2VZuA3tphGSe",
  "key25": "2aeRAQsTtjjyBS54pAYdxEH8VhdnHdztvSgRFqouKdTem8U7oEsJUxbrwfhN1Zg57j1C6krHPwBCz5BVkvd65a6g",
  "key26": "5KvNAdM8z6TPGtbVK3X3pKSbY1DYf9mEejLuYpw1J2BZZZE4j54dsNxoGJucBTFJU1UqCeEHV5VeryvnqSXqyCwf",
  "key27": "2dkBP9VTMwRZACWzphxS4Ju1Nz3uZmYG9EKeF61WXGu3Zr5LHxFZce9bVKeA171FDZMoAY64N3PXFQHNjeHaTmG7",
  "key28": "5y5bdrfnpuwKfwoH8bodfnTFtyWsttVMyw1kDGowQEpg7LnDN4ZpNoXSsTsLJ8AG1gLZzqp2vhbPmMQfjZbotAMP"
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
