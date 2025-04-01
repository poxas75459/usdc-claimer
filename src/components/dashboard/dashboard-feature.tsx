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
    "2h1SaH2qMhw52D1KibUC9aisk7AKipuMhHrD3UehXYmZwdT1E6n4EpKR25T2x8vgDmCWDTfLP93dszUmSQGNUVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqaTpGzWtUNjAtGfv9CVdLWXN5T5Qtos5eZBmCaooFdMuScF5uBnv6JtvzwEXpX8RPXoQ84X39SCmp72tYK6WC6",
  "key1": "5dLTwwe6z1nqR23BqT6xqfXw8EHv8zJ6xH7dG1985rwnnfPDufT1F7FqZznuhEqrUKJkR5ySrA1EE65AbiEGatnt",
  "key2": "3QUCRt4GprXWZuNdJdm27NhVgnaMmknLry5ndfbJuYoR67TyrEEv7E9M4eBHo2TTaSr5H4REQQT2YueaXWDiTnUU",
  "key3": "3w1hw9fnXnVteeKVv2Wu3vSwkexN6KU46P4rdf1mN5BhLn84sXVXLTiqpXG8vf8BvSjoU3odkXsctgYo8Njh6cPF",
  "key4": "21budWUbhVYhEy9XxSm8WHPjCMC2Uspdhx6fKhK5oEEza2mtnswnrNWyCs7Jiqg46nzfSFNgCA4Pu9A4hQdmk8TC",
  "key5": "2Vx8oEJFGseAHgnLsJEe4Wvp1BrxMpc2mh6eWdzWCzdduMJmFu4LWHoXo7o9KZoNjM6zDncEmQ37oLHrkQCowBPo",
  "key6": "3uhhSMKU1xhm3WTB5Y9VwLtwvsCsjXtk8Vkm3YDWyiqyG24bPLMLb9hxSbLujqWatVES2x2PfDgSeQoEasaXxeER",
  "key7": "2cKWPPDPoZRrAW2nppVvPFcLprGQGYGPXj5aXJhjjENZ8Q9UsEAcwRJGNMHM7YxhpdBcnFWHjZmL2xuJBMznoidM",
  "key8": "2c4McFoAfQhW9AehJBWuTWU51zQNpgJFY6VitCSg97Zp5BHHw7f1ucRTfuP9U2vFmRxjFXTC15bbuEhBME4vjREg",
  "key9": "5LSyeYvpFiVuxjjzbznQSn6Aa2BnjTMnYhsgPDyhv8PgRw3GMKH9ck7k1XzF2yVLXrEJYw5oTgDC4VtiSmtNB35J",
  "key10": "23A8x3sMugzomK86HkTtwcpMivP5Wr1u6Ws6aVhhR7ncanMe2XbSty61KDA1o4Fc5zuB3CeyYwYejrTgpSPisWtT",
  "key11": "SJT43Wz9qdSzwWx6crZUqL9aCafbKhJFAFzJVANYreBN6YirXe8fxJRVwgcYHyJ8bYK7eE68QkpN1tJWCdZw38B",
  "key12": "4JuxEDKFTUSLsLA47Pb9m2EXsQQLNiZf13Y8xJuaeEuZY1xe5HupUjVNMCb4rVMzZBSKjyVz6RDH44cuSKTFfthg",
  "key13": "5Kar6EbuCxkzut4vrwRF7wHgu1vmTBNceszGEjThTZY6J7LBkf8DZuWo1kLjqdAFVVxo2MbD21e2CvD2mk86LSyh",
  "key14": "F8UpfHMBqueo4QiBVZXL4vNAViEs7qDBtGq7VDYqHaMFTPCLyfvtC7ncb5E5Y5VwyrM82eQTtiD4Lyt7sUo6nFH",
  "key15": "21LYSbdVYrvJ1K1YzANSVzfhohfmuC99NF4kFipxzyaBq1u869TzsBx3k8kDypozstsfh6yzufdwJvwxnVPBn1j7",
  "key16": "AtNgvkoCrWAoyvdabiQcfnLH5KZq6qgZrZHjePcbAudw7dKMFygCvjMMr1UMmQru2w1wUYYyov2BNgqUK6PuwW1",
  "key17": "5JH4ATus7s2w4J6Y2aP5xFhtRWv1Ni35pe137LH8foc87C9VJAPbdq3frHvjXxQvqwzzgKCkw9T6wn8dFs8DPAXB",
  "key18": "iiTFq2nK25JUrvU2oQJaHHLg1xVLBFkeYA8oN46E2cysQhDgdLK5ix9azHmGQRQiko4bycaFDxzAEQ2o3Tivq66",
  "key19": "cmEcJPWVrxJLy7fcQ91UB7xbg61Qa2YUStPJB246WPbykR8y44JMn2rj7BeghSJiwpbmgN4Vyo9xmQDak2Lrsb8",
  "key20": "2ugQyzqqnkQzwU4aomEnhjMSUUVe2qwsEdECLo1G7FFviC1FypcPZgy9dc62tEv5drXiWQgMW3N2FK9CMDrYu3ZB",
  "key21": "34KiS4oEXXu8gpENRUgAyq2TYd5zu5zKWEjWRfefGDE6C52LxMXJur7p9Y2hH3C6QFmQHKWp3WcB2HVmagjvp4SN",
  "key22": "5Rpurx4aqRDwiys8vS1o8oykiJ3U2eTviZBZuCL9YiCrdBXCh5ViAdKj5S2GTWjjiXCKRHmvrECaKX6uob22T8CD",
  "key23": "ehA1ZfeHg8pbpg1eVuUS34iYV23MAfFLnqU5ygFaXAMzdThVyxHqjadxPPe7jVs8W3HtNmRz8pa2rHQXMBGxMV1",
  "key24": "3z7V9SXyCQWt1Xixy9wUjRxvzBjDC8kVhW8acJc6uaRNiTgKhpcMwK1GmMYeCeMMxZp1uhCkg5x1mzpw9FMKtPG5",
  "key25": "2eFqZHjrC2egMPQduR8PdBDoU3g7ALLxU32PbuUqkooSrjY4sDYKrtKBr8JWuhSVygQNKgaTAogHy73bQLwxiGTa",
  "key26": "5CcTVF1n8YtgmPtakgqHfExv4PDUnVAeqRzLELwPfJbFkhtdvrrivPqpeginWuYRmwUm4As3mHS8Kxt8vDW8cS3p",
  "key27": "3zWe28PoJSCAs89shviATUnDS3dWUeGYtzTaTAFnvmrkS998821Ngiv4ntVY9L8jotU4eLBxSFaN7q4RiBhTSw6w",
  "key28": "5hwM9iTaR5qnTxipZ7HznY5Ssw81GnUccmyN8aJRxmuJxdVJcSLogW31oeZPenJxLSPZEDoAXh1HooRxQGK7oLzY",
  "key29": "CdbBZ45DYG3TkUP77WEVmcgjfZRNceWo7LfMHXj7ZdTzHZKhF29ndh2WxLnPap83uRUpwbrtyvZprdFu1jjD3Wj",
  "key30": "31Z1CPu1DNNrqRTHQVZCVJxsKc9m23HUcvhfTsg2zdDHNJPhWcqSm9YPf2hzjaBDYmUWZnXSE1ohDMzF1hGWXxJx",
  "key31": "2a9nYrj1XqozDd637128qkgt12XFvj6xQxjFyMtfQRqqCNWhmuC62NKCRutFN9rvD1uUgyrfyfZwbyuJtNSpg8gQ",
  "key32": "3rXkpsTyKot6wjG2UFyS8xoDqLLVT9heBZCAybH38Msf1S1meUzkHayPfyZk7tDuG8Mc41uiTr3H2Rt4vnZ7b8hF",
  "key33": "hkX3vzogVutmh13SQKgo2aZYQmo4vner9NQ6Bwa9SvNzWbit2HgdUTe1r2Rscov924a49XRPdasfMJ46aKvvvXT",
  "key34": "4zn2jBjKqXB5ugiQ8eDYQY9LqcdicT9ppRBXFgQvG3PriVyJ692n89PaqTdjcMPBVaQyLaPfzmskZ74C8kULdwZc",
  "key35": "4gYTSoyKsDtL5a3CNrVE9PxBRCzJqPAJYPXW8Zue5JxhjREqZFaaaag7u8eNGo5AoRuW3FX9zCobC1t5nEPUMDtx",
  "key36": "4wXzWsmDiSPgAu4wRXW1J6iwxwQwHX5hvryYTvyNaZK8Ly9bNeMWBJ2cdoSVNiXUBzGiAf2ZiJNbAAhXWkZYw5bM",
  "key37": "4j4PGh1tnBHUUBVnxUXTU58BprnSwK9kYgE9m6kbVGYu45zMkbWgnbFTDtLzjtuBmQiPaM8nRuFDcqmDT79GHbJL",
  "key38": "4v6hmYJTUARxivYQkxsvmer8ELv3DV7Giiz6Fg23dAdK3ut6m4gRaWAAxD6LdCMGtME1YHXVDf6skTHg92QWhVzy",
  "key39": "HkMbPS1NiGFYrFodi5tpaKV12FpRiVYFyNwV4PVhysenZhUXdW1KeU4NWo9n1yanfhxEp7aTy2YSphCCQUgTpK4",
  "key40": "54mVbKdSA91CxP6bErCzz8JYHEQHuHgmTRxTupxFJh88QUepJDTnszjkQV6V2ocwLxG9yUUJxQpuVDfcDrnP5qrL",
  "key41": "2Qsh8GyzM5gSDJgWG9qwFwk9QCk6j77yFRQb7Fxviy1KJ1bCfk1p65wLSqhb3AVbHQzWMuGkp1Yi55j5rbmFQQuf",
  "key42": "65mvPeA9Q2vVbhHa1jT7TMLFQWfuvwFRXsGFeJFXwaFJ5m7nfDEbKQYkSXNGHHQbx4eM3Pb8berw7FwhnYULSEeb",
  "key43": "5pS9hAqaWVoRQJcz6ZjMZw4TvP5KhAALvWpZxG5qEnHTT5qxxdW5b6hBMX1SxbrpuhjBp8kHyoRDoa7HndrenMjq",
  "key44": "TUJNdkgD8HCFTfCNUgQBKTUUCodNGfdAM3JC2NEwy3rar3jhdiyhDYBZe4qZoZNTgkKZbjPnwbSvdyLtJmHLEhJ",
  "key45": "54sezHJjHXMir1eeoTQctnZi5qitzmRBMNfKcc56DKjgpFMkMLxwY8V5it9LrLdAFEp228Y9tviai6VNbavoYNKq",
  "key46": "32WzgnP6JoqG3gRfyXtZiEcywjDZzquPr6sh417Xc38hDqYAijKkgMff3mAQ9fX9sWw9XLUJSg6x3VRttfhcifBr",
  "key47": "24TwaN4bj36trtcDTdsotmUkHcmBJ64JU4TQ9Gx8Rm7U7qCmGtaEaWbF32uEYR2zB95qpSEFbHHh8qgXzDHnQzuN",
  "key48": "4AbU6HQeyJbjUpT5hnyx96nT6rWJEHnmjSueQBh7b3mp2umNUy81HgT6wGy36mALt4h8zWdgeK81uaGDpR1sKNNP",
  "key49": "eGzgSnYzYYWh2eWdrvVRdZGkkrykUDskuNpPGSX5cLbqvFWqBAtpkgCgDU59GXHrU7DHNyz7CqTrzoTGdPQiBeQ"
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
