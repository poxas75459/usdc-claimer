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
    "563DR5455ZgcRjjC2etqGpL6k8MSK7jcdyxEphqXL4hXa885pRdaJgqfXWwR4H1wEKTwUj4QwFX2dbkPZi6b6cGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHdH4QYyvso6nN6brGA3Px3m74Ax7DNRLhkE97CBBviVF53E6Nc4CVVJepSJMdvNpb41WdEUVY2FDyJdLboxtMM",
  "key1": "3ws2udKkKWvzD31Q6p8QSCeyuB5kakpmYfgVTYw4AAjd582iBkmAJi6qsgQF8Kwi5auuiX3fQY3pTfgVwWtfrm5g",
  "key2": "5AKBRaGXwuyJcjMcviFXNHYtQ5WLWu8xf8YsUUZrRUrqehJaBG21jAZKrffrRwppSDsbqiCcnt8Pj8xB4wAG7aQe",
  "key3": "5eA7orVm5sBvi56up41Eb4zTxhSGGYdEHYWg3aGFrUtpWaARSpkqafQv66MhAQf9w5B2yBjiiBTrwmrxcHFsZUFs",
  "key4": "3cW4JgwgQTCpPxGe3zBaMV3ZxZuMEkdfuVopfgqJwZJjJvKRfSi2C2FSfdXbTncjNeswXGMxW39Ly2DpNkAR8cTw",
  "key5": "5G4x6Mj7HXbgxXtEpvSVrcVDbF8jSEqfyDxBCFRvuYRwFjtEkoq4akcqeQnYuWUUySsriACkajhQWTNwMUz6SrCW",
  "key6": "FkrkhoQBGgyJ12zwBPqvJu3fD5TNhuzTkQAwZpgvJsCZWUo1vVbif2XsStmRem6EmgcEFLoynT6m2aDBds8bHi3",
  "key7": "24cQNoiA9U1Q4VhtEL7D1KmdnoZT6456abh17nZ5oWURBhUrGcaukBDzoh123nt8VbDuWX5dQ5fkCGYjr6coj65a",
  "key8": "3on4dFEtWwWp5KrRQL5k8wQXgXipD16ZojwyFzkxKSTbBcdZscTSkBsQ7QHHmqsJjsUKv73dj2wqLxH3bXA3ZNmG",
  "key9": "2DYuDP9SyrSRWMdwJt36HvsSjUALwyjNwmQ5doTHXRgLnCSVdBhpgSAioWMoqqdfHhSmATZPeAvc3f51n9w2L6dG",
  "key10": "KkcSeRFAqm7DdFEV2NY3jEbUYDAVzgU2bvFkxeWCpX1euutj5zM5U7ASxedy3M9TGppyqBZiMLtciczrpFTdauS",
  "key11": "w2jqQpZM6cVbuacvzBqxwbCaD2Fh24QrQhZrr7wVpQ4MY7G8FS48Ufz3tGGDQ9NwZcx5Nfe6yjCD9ngJzHpc3q3",
  "key12": "5Uz8sG6XSc9q2bcqGAVS9X9vHucDeomFWSUNxApJYePZ72bwzqHHxTcm3XMJhKW5ETaTb5MwgYufzdSFDZsAMDwK",
  "key13": "tyVjAE3ccCW2r5WUbs65FVFEak1EqWzVnBzFXbBfEameGodEgq6eSDbUeC13aF34YphsrC4ppRcmGvAGUYRn7z3",
  "key14": "5x2GfUv1LBYBdXZnpd2chF7HRmW8wMMZpKUHf5PtvuemqpL1mqsCu8FC3e59wk44ukHYmJmnRtrFy6Mqr1fBr2JW",
  "key15": "HoQwLkQJcHiwpjkzDL4ukDHbXMsswpXFgDBi6YVitPAuwPEQaPdUa6iqLZtGom7zubje7kdecHLRQ8tVP9r3BHb",
  "key16": "2nK5c1aj46maywAtFwtAcPPQ9kVm92PuH7cA3oPiMPBjbzRxsPbtTouNXYyPV8AZNVS5NXbwbMFtfLofYZyC3VKq",
  "key17": "3Yo81VePEQ3K992rBezchMGRXLbyjaoaKAZ4NzaF4sXd28afd1qn8EFdV7stUuEPDKEimmqC3XCYJWxEN7scaSkY",
  "key18": "4MADK6vMVktPvyA4GrEdxE4nH3S11imstJAvisnQipn8H57rWtKYjLAN9oKyna6wQyfGpxUK7L9xGgxPyKQ1hYtr",
  "key19": "5LCAdL58ZH4eEia9pBasnP7L1bZesrVW6X1kQnFjHxZDkCz6HbRDm47MjUBNbf7vCwNvcspWsNWGd8XZNSZdD7Sj",
  "key20": "3tVWwCPmz2YFfJm1W2HWkw6DXsHp3Zch2hsc6AQZQdDuuv7vkJFvXv1s5SsXoKNseSYMNjfRAB9KoF5RW7kQ4ZnF",
  "key21": "3goCtRjZYY1LtKw2XjnRuzzSsaMcZvjKj4apVT831mPnpfEn3btDFutyXFxD9D2W5rXs42ayzPfYx6P1EpkcFzfb",
  "key22": "2zuumSN9fcUnymg3n1z25d6u2stiGHsaZMjqHtZEETFk8nhKK6e9C66rxqdUazP39DcsnJETgPmu16odTAtvQc6Q",
  "key23": "5MzwYsp9soCk9rnqhCT2GwvDpNh37wNZ98iZfASQifTKPZrXgn2YLz4wXyEnmeDvzxqEeT3CqPSAr9w3WcFuCGbr",
  "key24": "2GpRe5K7dXLycXke94TGa8SuAY2KTpn6BLFi1N64nwt4cdrcAGrqoNPtQ3FGrog1Vwws9J9RnozuJghgGDyQgRzm",
  "key25": "2rmeeZmMqmjamoU8nqwm1rxhmPcw1vxVGVksK7UVP5rLPUfeiZvpETC3a2et9TkN7caATkjx3GhEJhHocDKp2Ff3",
  "key26": "3xev1eQf7oPggn8Cpkf3VrqigKmT8ZF5tUQeaus8FemQuACjoBtPekV5AiEPixYhHuhsDwNou9eaB9RfAY5qjvDV",
  "key27": "4uGqFcUhzZurqPgXrj1iYnDUzTKSxXXBvzGGm8bXc1w7o3AJHogRFXYzbWt8cU8pcp2fnqXgYmHwLtVQ9KktTAdU",
  "key28": "3BKV3FgLCdsomFUE9TUoeCPmxSwF1boho1KMKmzf2xtTX6u6x5oFG9aN7X3frSDKKNeUNon5kQZurkkY6cs3LjNj",
  "key29": "35o61pS5BEzeUTMmDoi54CFYLLwoEPvjKvQyMt8fDzJzmcuP5UxPZJkY2n67XPtcwyBNtxBJYekpFE6NEaxpDYe1",
  "key30": "5SQae3wFZVV7j3tMCAiXTVo5zWoVa6teD9PiWFAf4JKNv4M6uFmQtMmQAuesU2aqnrEoiHYTvnuJArj8ddBn5NDp",
  "key31": "us3vxh7vrs7G7fHqzr9sd6WD6UmtKaW5xSUzLC8w5TCTURv38aBwwfodR2hZMWBKe6nXkBVuDbjbwV3E4nVTzrE",
  "key32": "41B8Fu22LciuH8yb2AKJ6gvDSBrMmsMRXj8PjT6oVfCoJbQzJ1PUvnHZS3arVnojqLEno7n5SCPCGjZ3ZL4CT9oM",
  "key33": "4BDA4zViDer3Cfsn3iox9KDidhFcw8Rr2mvufzkzN1bv94KLYSDkLADdug6N8tPGnQWgRGUeTUtYZLdGm3VJWZA8",
  "key34": "3WC7W8TgE37eCFiFCRTtTQ2Wt456fL1i9yh78s4YsTLz3hiGRtKeDgKQxCiiWvL5ZXwN3zBiMSzCiQ4ZvtpMRvaT",
  "key35": "5V5g4hfW8pWFT4NDx4ZXEL4XZpFPVTSGP7UrThg2YmQJx63PyYoHAzEyKuV7GuycE7n6CeGqdYnRdHV5WcH6Ymgq",
  "key36": "4PWpwSfRKWtHuK9PZzpNEX7CfoNW8dizYCBFd4VMYADzbzTizuH3wJF5dLXsYiP8vL8DjqA9GPebocNraVDtKoFz",
  "key37": "KKbz3q5MaDJtgmZPY6C62t4oes6NKAdZTtPCp5T5M12UU7DTn4mnrCaMh7Pkz1bovNSofH25Co3iNN9LZ4ZxD2P",
  "key38": "4FNJKojSvPZecGdyBKKHrrCNJuoDC4ACbrMXk4KYUYUMTCi1nA1drAiAFVD7Wf9dw1Ajdi228dHddotKySQsQbJ6",
  "key39": "6QyqUGjMFTAbLrBLQdNox2T9WinhpZY4rf7LyaiRW9jD8asfVFerV4N51SgApQ9HR7HFGRBghxE2G9pNQUKheuD",
  "key40": "4jbU8X6DwShC43d7q6A4sjATNTa7FLVLSCA6BBerfYa8KHo1HXACLbihT6xZHGnGQv47kFpjYZac1CYKGBke5KoQ",
  "key41": "44v4KbZ1pD1i556Q5YgSG5TDoGnUy7YUHGWTTTZrRHHEyLyCFKuovecd5DgqBuaRyWvx4cBbVuu2Jr5NBwLDTAsQ",
  "key42": "JYZrioNQKYEgbTG9Ge6mDhJjTvK8FHz3Pjc3HgEpjAg54aroivC7CmSejPS79Bvuf8Ym9nPEE2iWCuLrVQ3sLo1"
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
