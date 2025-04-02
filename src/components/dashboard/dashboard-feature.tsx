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
    "5Ur1i5JoWFzTbpsu3AV6bBdk43AH4nxcpFw7UNENcmr6RthkGpvZJL95dBSGAjRkGSa1PWNE7sf7pV7BtPH4NP5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYdTnReLAXg1Sms35ELBY52Eic93pLtWvJfrYMrtMY42isDFtyBQ9KsggPZwJYW7Zhmz92wrVPg8Z2Aip7nfbKT",
  "key1": "2hMtoUSi8sn1dTnSGfKkWHvd1Jr9yz1RzMXAHQoMjaMkVC1mWYFop2orqhn4uEuzFYZuAkq7UM7qaXgck6bfbnWd",
  "key2": "431sxfFfVqP2fUiUV4Sv94BeDN9LRQw3xcPeMLnfhLXXTQzjTEt4JiDWbTHJnnwvX6w5wR7zPNVBjhfXmxJUnJho",
  "key3": "SCNkq36KtN5Xmbw28kuU92oJrys9Jbsc7TEeksyVHnysMJT8ifNDHAV9tNj4wHdrCv3gL81KnGarRXdsMd4x8ad",
  "key4": "5HGr88rZgwtV8gLqPRNEGeaieYarLxS614qJarXtrzLef4Jcg36GN3Sw7maHE39sDo3B5Pkv9BsHDLJ5BGGQSRiC",
  "key5": "6rGDsw9CKLGfoBovVXjNag4MN1YAhb92ofNKnLTtxNo4oxpEi2NPqxh8Rg4RihXtg2TjtR6hAgcCWgKQzhVM4MK",
  "key6": "4LCa5JZZ4w2P3LN1EvAziQgnoA1PbVZ6k7RVzs72GSbQcueziipUYAL3ReWy5N2m3EUUY7U4tEQroPR8ztPfW5cH",
  "key7": "2JThzgVL47BXB3QpRJFofaC5WhZt5H5hC5EPzWKqzjxwWLHn1dLU3WmoFdyfHKTrvLJK48eYAKeRWg4wxC1CJ3Bb",
  "key8": "5xScphzfYgBHGSfMUEoC7yB6CcTtWetmJGXHTDpWLXr3dZXcFDAu2KU3gEVXF7TphfU6UrzDCZnWN5WrrHuMA9rx",
  "key9": "L9KMxXpuc6QTYWfHfY12WVPAFxHkL1KBDnxzHfciM16cxwYaX23XodxZoWWtH7ENwRjKruBvf8TUQKJ1CvWbAtE",
  "key10": "5HmVvVwR8gSWdSqCfU2DsFpsxTtcSsNjHFEpFSZJQy9jei6miMgf1hwaSLq5WqYaejUsdn2t91Mzf9DC8VBEfKPi",
  "key11": "64s1YpHe9J1SQdee1MXYYFxTtLbL7L3yeRtLL2hKauZ1vk4G4WDNJiDmLUAbMDCNuyq2v7QBTwKR4hTP6CEj6mQj",
  "key12": "ye9uBHuYZAghseV1KvTLL1XBfCcj5BLxpPydMe1i7KCtnr2pCundKasbBkdu2oozBRc6w6MQsFaacENzavgjc9u",
  "key13": "32AHKrGhegbpHE9BbEmY6muHKrBE8dg2jK5SBPxSQJmHh183p3kkGSPTcXQXrZSGKDaARbNVXNQuTCaygFvHg611",
  "key14": "4yF8UjSy1HViFV5eAXdy2LrVp3xzZ9dUAsTLEariQHDv5HSgGLLhBDbhfbzXmTaEbJnbycuXrNBdUbJfKeioLtp3",
  "key15": "4Vcy9KjdqYnnL68XvKpvY6nYYR3Jaz5gNrrVjwmwkr5Vw6Ls9eeBHQ8Tkn22JipuhsQ3NxgYtEa3bJe6Q4vMLyzR",
  "key16": "3iFAthxVZo9JxcXQTNFXYTMU4umqDAJNoXQ7uhySLkd8vf52DQ1YcCXyCsV84oVkzTifTNi1urjKnJoyXMiKRwCR",
  "key17": "4Y3qjaCozQLCyyC1wgMnSBAQpmrFUA4p6DDo1xSe9qQKCRKWGra2TL7tRvZJueoGL7XCXk967GEwHSUsS91PnzX8",
  "key18": "4PgbrQWJVGiamJUxtXg3KYdVMboYjuU8NTkvjm2tyvXtRa2ZABMfGN1DHY7bAVZfxhLGjcuoQbseoHfxS8kmqNWk",
  "key19": "4XRRcZQ5m9nubzSTvTRrRhVs8Xi68DbURpPSGGWyHBqU8XpdKjpXZ6xJ2BZxUcF3EZwLbhMRUg21A1YMZEPgr6sT",
  "key20": "PCgk1HbfSwb3dJp67Dp4qoxsjUMiBj6ByxBDAbos9neGnNEiWRJgr5qe9pXcKmS2R8w3v61UsSKAp39zhNEjk12",
  "key21": "56S8RgHUTepB7GFHRL7ArugqG7ftyemzszPZL9HU3t6SxWDaUEtRBs5kyxoubLRnUe8XB69nyQh3RzhNpqqa4CdE",
  "key22": "43p7Kj5RP51brdu9nRzUL4yhbcpwU8s5URPwkZagNcxtze3He8KzK3QgHznVXPonMbnz3NM6MKwDNVePPh6seqgU",
  "key23": "3fJtvKGygDJUYhg3tE2tdZFMfvhjcLRJpkANJUESxLHZcrXPtxsZ5qJhUY1FbBcVwxCWYN7hrjrj1GZR1zEBBRoi",
  "key24": "46zqJ87vTUXtdHjNSniD1Njy7LbVR978zV8sQYv9GtkjTRHfHHacEW7JExqMvS7ZEx2M9XDYYTnrGTHnofsWpgP3",
  "key25": "3x3hrPFxYAbWwN8SbdH3xMvxGvCwKEz4q8od68Uj7CQtnbNQTy17zhgdsANtWj4LFeCstXBDQCBceRFvatLRyEdw",
  "key26": "5DGP6yU3KCEZaxZ4YgHvt6Mam84XkMc5LrFQyFdMUTqngPfP8qJ9nZWQFyC28swkTUD47J17fe3QANTxHjxFGZ5s",
  "key27": "61RBauyWj6BnUwrRLQtMhFvtGgj9fPQHoFkRzLHvzaFjXC1rmBwuuJZ476i6jieGBgWeB5VKuDWoUdfAJQnWssqj",
  "key28": "2JRsZjXdRrY4uzUCe5kVJH8kh7R8uKG1JmWXf3M2CBVKb57krfZ5fxiPFdjrCgRUPCZeGPNda8xTmttgKbYkDBAG",
  "key29": "35T5C3jf29i7ti2mQyUi6QAqqNEGrD5aQcxQADMAkqDHA7Br6zHnCvfCeuaendd7CNcBxAC4EN1xVTvG9RryntCT",
  "key30": "2j8gAjJ6Gv71sxfiBVsVU2pcsWUk44nBquSmwpUXdHGdWeXueNaiQRTyo5SuJRhPzy2WFa5DuFwbgxZ39FPJnSvn",
  "key31": "3yoqk2YME2dnH7wijKKBkH578w3vvNXGfRrsHABZKM9xd2LZPjj2fC7LpB8ypVnf4qwdegcuxSvadfWYoHHFkNRS",
  "key32": "3XzAEMJrgFQp7651XP2dGJ2VAovpjJqB7DUtcmj46RuR5pL73PKw8mk4VUWCrW71XD5XNfEaf2N3ZJh3FwZm2R2d",
  "key33": "RMP4Bac5FUxPE56FkXPv2Hry4ekfkSRdqNfAiKQqXZ74ECoR37v8Rjuy5U9223BYa73PMomX5kbWYwsscKZHuAy",
  "key34": "35LjCGLgELBZsv2RS28KZSSpRBpvvVbrCWtSwnyqW3DfWhCn2p56NJaumxENiS7GB18rZUEkehQyq2yWpyGnRE3q",
  "key35": "3qqaBb38k7jmQGVi3uh7TsTgyqtdfEFQ7UGZHbKikd317Mnj3fEttLjFiUtf7RB1WZaT2CNgXZAFkVRLWUzKxajx",
  "key36": "2f8qxvU4vRbjp2VGsDv7Qr3RDVzQb5DK3TNXDrtZW5VKoE6Qh5jgh3mXyzTumqyxdSRT4hTjex1r57HHVxZLFGfb",
  "key37": "3r7zyyiiSG1zVVJg96eDcaiqeC1Lsvxmj9nohRvnZe8GWvNHJi39Ypez1fB8bVz8CagZ9wr3QKvuCKi2RXijgZx2"
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
