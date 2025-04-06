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
    "5C6DakZ5exdX79EizysVLNpqMXfYDWtoD6WrKT4Ucm2DUj8Wq6chWcvSDFKmrmW3QjMEAZCwF6dYqZ7vhw3LPydP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SomgLyyxWkhWugLaBXEge5bFD8n9am8WyciBsgvFUkXY3pSWiDX6YwtNb8kkDAHM1mqMm4AeSasz6UN2AYPVB8t",
  "key1": "8H56r5MEhtQ4KqA6Csv4FbAksYpwLCbJV257nPqfZ3vH9wVp3CKbD4kz4fDLkfp6Kj1YGX6L8LDmktcyaXQpHEe",
  "key2": "1279sesE128PsyX6d5Zg2MiLgRV775Dx32oNgtMNPsXt16wmwr5WqvLZ4GZEtRiwXQgxheRjvoKo8NDrKYgFmKMb",
  "key3": "397DQdBESWpNqKja94RrKaY53BzURhLjSHvJmQuVfep7ZQ9aJ5izjZBwL7Lz4YQps2EcVECp24kGPKxLNNPkMLPX",
  "key4": "5YEQCZ2dKkacp6xUquU5hvbm9eLrEkgLq4Hk9AtNRPuKyPTjXZ4Wjq1SRXUjLGo46KVKoXE6rdyDBRLYLNMY49p5",
  "key5": "3tgA82diCbFZUa14rvHjCaqvUSXpR26kmtVCzX6cFmGFGwXW5kHfHZhmLoQiwkqtYARPeaTnw9eF2VHKTJo8Ynt7",
  "key6": "4oviyhQTLXLDUBP9mr2qfxtfavKwsVNTnWfozwUCmgL5JnD6mKfDrNuGT2fpqzqZGfdnB4of9e3nwkXW1qz1XyQf",
  "key7": "5fdcQpC3nEohQQEmdAYjLp8mEkFToZaM4m8SzVis47i6Mu3tYaYGiVZfud5Je9CrgS4MLvbEzhp9TCetZK2S57aE",
  "key8": "k1ayXXjTYzSP59WQzDTos4oGyXQL6LXgGmiMBL9UDGaJjuzqarBnxipqDJzEUpN2rqy3JQfypLW9CpfcudwKtjM",
  "key9": "2cEPJV3ZkXr8FyF5tecwrczMxdFVL6vVd7XzJPyyd6VUZTZWK2N7FMUo3M4k37puTeHDpWPd8Zw2m1QMu2L1fMxz",
  "key10": "5uotApsqFqMXzcDSz7t4FUUty2ZHgGHzR7dhJPb1nBAkQT6uijc3GzNXSfRbkTJAJXgTSdV34LWJSpPKo2Avmjdq",
  "key11": "393xsM67RMB3zUJgmNQzXEBb59qrrRF6S3AiUrkXnaLEheExXZWDSWjiKsQATn87zCMcLmeTU5T1wDtuHhaAJUke",
  "key12": "3MvnnqR4wdhs6uZ3NHzUHGevGAvanBZHQkyADJCGZojT9pnr9kh7GjNnByk7MxSNaBNSRMa47nngnzTAAEsnNF9n",
  "key13": "3fo7o36Lxxjy474PZrPKT9QsFCZKEXinR4RdouB3KeXMokxSRpgM2NSu8MmSViecWKXn82B23cTnuvVSrkgqnVvJ",
  "key14": "56Q21yrPHC6YSRokaT8ptSYWv7gKDjfzyryiQhBNWWEFj8ihVT6ZBZBHWbtgRUpeE8fT1QQn2Jx8VgkXjCRwc7Yg",
  "key15": "3NqgdWrGgU1BnwQAnjtnRciuG19i1PTviepvtF1ZwHSPfk3gS4kdgTvzG6qi8xDgPLymQ3EaXEV3P7CqB2gJHbfx",
  "key16": "5csShmRcbf7ocNZzJgk77WnsM662FRUdtr2koNHM8ih7wj34BspMUWQMGTYdzttKNkWrBhPedTiZyrDhie8LHe9L",
  "key17": "4ArMeGmwTR2UjHJ7iP4bL8q5YLxNhy9JBkT8hNQofS4H8mSEfsc3AT3iqYpP4ESMLD1pSNyRqNoTBs5J2LuCPCaP",
  "key18": "3PtTFozf9kSZgE5HYq4f1BBip7tptnoFyC6zbNsuBWt2J4qJiqq48wyin8nTrEHsayGuGdLxanwP4ZwbazoKC3b2",
  "key19": "3jcaRuBzDheMws3Pjm1tkVFcreYVGc4KUtk7GVHkB6Euw1gR4cjFEe1QKBbdy6gEGBzeNnHBbMPUQGVXX3VF54vf",
  "key20": "azq9iNg2ivKXd7Qfb7EZs8JtKm9VbYmsJWR7rcG2fqxPXgjTKt1Zt88JwQg8QcpWZzmeFp1Y9256HqVqnPP19HY",
  "key21": "3iWcH4m4kKHdXAoffoafMSnNw4598fjov5y6cAiqMhpF9Q7PsASXwxJNjYfmxZMRD16dzCEttzjpQZdTRgdASo1k",
  "key22": "5QZaNmx4H3Dd1TVxYeX8TGCPqg3fVArbSFxsaQqto3uZEGh6YFYk71uWUBjxZTYGB98uBZz1NQvjfPtW2svcVUeU",
  "key23": "324QMACRsdbQbFSyRQdGs44VTzQxmtDXC7Y77nR7rWB2Y3RAkvhUgqCdWkdeSgfvRmHkQ7joBCU5zTHmy4Rw15To",
  "key24": "4Z381tbCVsyVQEtfgArfquRCK9HTbSnjrCwBRkiW7zLiuxDUVr1XcDiz9wMPS4RQ16kCBuQAfRdFBn4AFgHNcQfj",
  "key25": "2DEKjWi4EFp2Cv6WjjjwrprfrkFNCd85bZNFXijuSbdSHCWLP9oYhVoB93oeF1p2dTC29ve1KM7tWmUYyQ34GcZi",
  "key26": "3aVcc5oCfNYHWGHL2NTbn4trCeD1BEWreciZ9pD2b34oHfyWLUJe4mfSq8nvwssxzPDyZMZppjTW1CqMakawmSz1",
  "key27": "2PrwAbYBSBB1cCNcQf8FyC3RWzU5ptQM8eVC3hYrvT7aWc3xVpLr6Jg2fbzrJXAA9soVuEHSunGyRJUf1Q1xDNYT",
  "key28": "5XEPSZVJwuGJQfH6NRAS72LQ8fMWBM2GPjbiP7pue2MpUVNvNycjQ4PB6TM94rGTMDLEG7eNgCtqNrX6m74M7nKY",
  "key29": "3uFkBjfcz8ZRJqbFKzNw5LL8DuYbtErGQbUDVtwgf2SA4xNaEBqmDmWhWxdgqL4vL6BykScbmFKLryZ8EuDoEV8A",
  "key30": "3otFGFVgQTud3PaRAMsMZD57RyxEuNTzpPg2GSA2XMdESD4A4WhS8FJ3qKSf58VfdN6haydLgwxGVb28w5LvJTAm",
  "key31": "5FcAv6Qzgt5n8HeJGi37UFdKSjozeTiH26iW6AJrBH2nyvTzum4oKahnqH1GJKgt17J31QMYzQXXLZdFud6B3MVq",
  "key32": "49LSY9GX2YtoGScCRCZX9JeZxxWqF6CMyumALje8yZrbLMHY8ZS7TtVPKMKGEcvm5HVtS6i5fXN8c5S4yXZmoZLj",
  "key33": "2WPah3CTZjbHg2NuQtAxM38Bm8FP6TBVsmuy6Vzhp5WbFcEt7kBbzvcs2ifcM1zLJMxTdFAc6j8L5weydPXfRiya",
  "key34": "24xjozy5pgZ7tduJhaSDSUvQ9nwYMqhGf9HeKp1SoDfCXKp93eVdJ64BE6qM6UN362hn4Qb7zpLstfohh3Pvc6My",
  "key35": "4bZeVPFYDEg31nDGmnGgvkPymhL9MjeYoENnTdAGCDUMpNrjF9zYvcBgirHZ3RWtvwRfXCBrsYinK9dLLwCHE7d",
  "key36": "3sFhAcZpnyed8rRNFujKCxFdFV4HmYuD5kjGkNokaC5mFBLysuYXix1bVsm4dM6QsVbNuwmd3VCAL9yLABsLPE22",
  "key37": "VcCGu5dMFs2p6ZrN8CTz3ZCZFEf1q99bZXnFFBd1r22xwmYWZYiXz5jn7reistsBfDce7XNwCdDxDmqdHThiMw3",
  "key38": "3WmMiJFTM9X5K7yDSvsF8ytXwKYjhFuWxtdMmJ9gWA7NvTeGZ1We9KeEkWh1VqFeBBJ9yQHr6XBqrAfR5jFwKJow",
  "key39": "69cJiQUbGjL6gZE54WHe3abKGmxBuK44vJfVLKDQKEMoBr1LYNDHqHnUCf1VA4LuetwGnYAc7axxxEDd9HjpWAy",
  "key40": "5QEy1dQcS3yvvKsKvQZVY3UHEq963vPfYhEdu2UYphmPB8Z8cP5MsNvJU1rxp381pMAgeRkUJJb5bWv2AXMAoqvN",
  "key41": "3DmM6iXFwyvw5is47s8qqHC955BryakRukB1zVEA68decvZYKnzqA3hvwwrLRfJi6YYcPERUQDj8p6Uhcck8dcWS",
  "key42": "23W7ruYEoKFWGksgXK8TyjzGU9Kbuy1yQ1UW4RPKVcjmwH4BcsqToBxBrXTDnWACMPCJD1LgSa84nTUPhWRjUq5M",
  "key43": "4ntfFpvMvANDAGMj6vVJjsCy87aSjRTeA6gXtCix9JhuNch4AKa5YjdChbUTq5MCAWYxJAsEBzNeELJxkM6d2B4f",
  "key44": "2EcdozCfb2d7FydozfmsgRoZtPNetSGmSNJeQ3vLAdy6uwCcy4zZrtVifgYUUNfCyegzU56rjx4JreciRL8wWJeP",
  "key45": "59uxjJ3KwWMHmg62Gyf4ea27GFYx9THrRsouVJTFZijRXsFS8CTZqXZhQBDgyZeYiNCFPax6HWgjioDCp3XdXiJE"
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
