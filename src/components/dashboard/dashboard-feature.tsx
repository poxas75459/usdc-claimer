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
    "441Epnda4WLpoRkcTAg4PR1hxtj1nMFSmp7grPVnMZw7azVHQERtASL9D1TryTf1VTCRyfsKyFAKwPuNdSMTsRuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fp775teAaj1xuy4NT33WChmBYw1iv2Dt5PThyJcykuTwHLtdJAEh5YAAN1BgLSWVWFz8FE4opNgjbqNpyHwtTHw",
  "key1": "sdb2ekaqjjPiUQB5GwTB3ZyszphASMnFzgVK7tUT1DSWC1EHn6qf29R865dq3BBVadtqtnLUvyWM5TcYSs3DAaM",
  "key2": "4VEPDsghjfEKP8NUHfvj75GAHLGTnQzGW4s6zXKcPXzQa97wfi1vedPEiMsgooPxxRmcrnV5gUvvmMSgdFjxV4sd",
  "key3": "YiYcRocgsXFErvPP2cCXLuoJAECg8RZmg6SacPYxTSf4Uh7qAF18ZjywEWfzJoov5P23CPCzD1PFiK7iGEdd4g1",
  "key4": "2pnHa94fxupTekpxQVQH2NJ91dC7R8TXqtg5ihZXpHwiK7qtgGYkqHVpdWgQFWNnvBf5LtuKodb3D76UaiZx9UFZ",
  "key5": "2Fb9sQqG7nEsz8kuuud9QwwvYt1JzG2rpTikMRaDeJQFHMP3JYeWtZ3T3oSgpE6AR9gqsX42UQRXxfLHPAiJoCm1",
  "key6": "MWpPCnjKqPBeDchK66psBXiBmKyuSu6fXK3ekRhXz3RNwmszUMQDZFKGmEnoyBa6LkbHHaxaMFKK645Hx1CL2pE",
  "key7": "4hUeGZKLCwyNdNd9aERFCoeHXPkRGjyQ3dHTFmxT7fw7zMHyy1H5Rj9DCfn4jrbcZHXk5dE8rWst9CfdYgf5YDEq",
  "key8": "3LFwLL8W8LsJ1Bs1m3gL44LN5LCR7QdsPhtqH8q5FxejZyctf1wciDEfPr9uPokwbpo8P71fjyzT1aVMJbnjrrQP",
  "key9": "58VRK8SX366B8mDpcNEMdSWoVP59sqFFs2DPFMZEZimF4TCh6evEtaz1uGMTgKVRN9waD9ZyMPeWrwtDzGdWzApD",
  "key10": "46AH4VUCngH2jjT2BDr3BZRvuZngV7YFTPhThKrRYErcsZW1i8wC2nDQm9fBJsgmMS892aYFvLRVRMj5aZb5xf8H",
  "key11": "4DDZG7yqMP9rmyqTW8peSaQjZwu2Bk8CxdHcBdPxsejxxqnN3NfNgHFcNxzkqyeJWy9CMsyfPiTSsrQPHoHBfFE5",
  "key12": "Nkq2v4JpinBQxaTEmLYC5ZzcnB22CGE9RWg5QfMZissmpkiTLbrAU9333pzqBVGxjAzTHyUxtHBdjCU3pug75k3",
  "key13": "64AWtebjA6dCcQVpNHwLF5HAghG6nYfRwEKkMi3ibhchnf2ijxS76ZPfpbrgyDdkyQWLwQRgjdWUViRbfxQcfnHm",
  "key14": "2NB9EyHxgyfeuyzdvcDfUfLTXbRatL6vKodiZXs8XADYfYANi5UsRCaTqF28NBcupmZfga175XS2fjw3fAp5CPJW",
  "key15": "Qej7RHLEm5duAbN9buX9RJX2MB6qtVGsxN8inCcdZtrFQJguFcpHFZheZBusrB1PvryJYPMv14NrD4PmC7Q3rme",
  "key16": "4Dcsvv9JNoj5THGVroac7f1VEo9p8tnGpgYkiu9vtAMiPtZMLWEKZBTVKB88dUQVLJmKqbZGM1hg1JvxGWgkKjWA",
  "key17": "3qBCC2s8cRmxeqEwntuB2aSzLsjTLdwzztACHoxswsuVQNcvrrZoVZHmgf7W4LdTxWiUgCWEMqHEQ2hsfZSz1BuX",
  "key18": "39oYm6NRALmFavZ62WvBuPtkE2SUF31RecKBXqUwwrKfyvLFyk2B2p4QT1sT1dtQBy4yPWMBUzRVr1aP9KcKtnSr",
  "key19": "2WHzF1m8nidrbCovh3VM2ebe8pk5QdTvhufqGGpuUMNdvQWJTsd795D5FAiL2YymQBxnz61YrSDVTtLSzFG7ojr3",
  "key20": "3ophCMDuPZCHeswg9JTKdiPdjsXfuEjgGuopGvHMHKW5DtT6RHXZSAm9dziDXFpLmu1DDM9kowYfE6xeGD3L11oG",
  "key21": "2RKXNq2QhWfqrCYpuw18bBWeBsXiqHBaRJc4bUJokt9qWmb6XTS6gHSrGaB26p7PK7qAfSVPFCWhFYTFhJrhLjqx",
  "key22": "3th98ZpnYBoKobULYoEGF8nwgu3znG5czik1KQrYGbVNdVSqXfzQHuaPNpKGZ5fgZUhWkgtXXYUAHGQym6wtDKPc",
  "key23": "3ssbQJWXSnQtVg5fb8ZKBY2NCB8of3jqCw7xw4DbGAmaZ3ooAvkWbv1XSvuvKBwdtRLC8UTKpVfwuDpGGDrMCjEK",
  "key24": "dkEu9t9r2obAbgxoofxXJUKHQXiyzqYTNX2cZDma7a7FNrhoRzfTCvxfuTVxT1vbic5qGdiATdfyzjFkW8kffu4",
  "key25": "2oNPFSs4oq9qWuY8ZrVzj3uGdxLLapEM3XK1UsPttFDGPVWa5USfLh7H8w8VSM4MAUoVwJUzxRpikQgy1RWPWiTv",
  "key26": "4Pm3qVAVQpdotaaQnmXZPSqLnvTUf7mwQskneEgEG8HqLvwPio9fFkcKKuaCKvoQmofp7gxPbEhbf11cDZJgCWHh",
  "key27": "NFeYpcqAyYKiJbLv4j3fM9Uk1UhpDq94pZXLxjFA6hT1Kp1sB1XCHYjLZFmLvSZUdYxfFaVGqpn2xd5a3ZFFgST",
  "key28": "3D2wcPDvEf2rRrHM5x9c3ZoSy5qonXmufyowBwBEi3cW5cNWmRQ8wjnFuLvkpPU91fDQq4bhbZusE26FKL1qZRbG",
  "key29": "5G29wk45s35RMrzFtGrQoaREFsW8s8QN6MLGgbqfKbY5r6Dn2VwUPgwKno3n9W5AV3HVmZr879QHVKexHKcWJrU4",
  "key30": "4GJYkQrUokPLntiZ4srciW7RJh4jTff7pBATawejhBL4Mzwz739QnMHnCTzWt7t4pjdAvu8fMGjBVVCPqrYFfCGP",
  "key31": "5kretkfrKjQJdUCgpbi2kvnVGuiTcZxw7jtiz7FahXkZok1dCQ1sCJtKgzzn3Lr7eMGPUDfoqaQG6ofZ9Um53vGB",
  "key32": "5uQMNfig6nRiE6qLLiJmD3wpWd85XVYjd3Mjbn67Rgx5wC9ULkWjn2gzbvPNzzDe9M98JZxTfNQaQBKT4BK7a2NP",
  "key33": "Tj6TXErHrb2f7hT9evUmRMJaRmZoTw5HGdFNhGwAwKg39ntxAZpkTH7tusW6iSRMgv5SYG2mQ6fYQJJcrJfBVRU",
  "key34": "3Hc2tGKj9Rxh4jbZwSS28e2ew6HumX3swkWgAkqBF8oTtQu9v8muNt4UpfbCdP2GpdReLC4Xo3kHYzEC1i1aakSj",
  "key35": "3JAdJe4SRzvmNG2zEk1SXMoPsT18jksC4Z3rzJEQLsGsrzgC9CfUFRoKHVAfMEgEg5MMFmEGXuSq7xocdDUJ89mh",
  "key36": "2MMvKLeGV8YAUuYqUfaZi8rrAGZH9dT3ZaB5psFLzSkLnDtDowPAxngHGMZAYdsmwwHnaLrkvC9UBLTS5MiCSEqV",
  "key37": "3owfd6U7U4hNBpcQpPbTh5Uhc1Qd2McSzrEC5WwtsSRwXnquJbfeVH7L2HWh4Wad78BQMKTavz5gD1aikvqFtyVc",
  "key38": "5TzY5BWoDzVouPVCksFuAAYzQfrcv3dtaNssunsqayXhYxYUiuk9pdMJuqczgcTPrZLChF8j7KUJiDQQnvQ2AB4X",
  "key39": "3Jm5odiCFraTiVvtGAcfQnqf1agYxhxbmvtARHP7jsn3bCirAwf2B37Ece2HoPk6MPB2UoZMk4vQvpPiV7hHX59D"
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
