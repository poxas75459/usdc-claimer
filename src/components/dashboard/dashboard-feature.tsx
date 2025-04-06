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
    "GYYx4tsCZYkEd3gok4DVtsHR8pyKVee38d2hKPbELBwHweuwTpzUs46XGGMm7mi9vbg5hX1xgjYH3ki6qokuuj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDPUQWRCwXMKXZanaCFXVU5dCYt6v8sQ7ZxS1TQMrD6o6Ba7u5GVVrJT1YPiKkVr3nD58Aadk9r8pFdwWz1uAUG",
  "key1": "3CjWfRSiguj74WNFwYbG33Y3CNy1rXtx3HkUpK9Q5ZN5DYRoFPHutA3qMJwjCTj9rwD8Kycw4q2cd3goXYQM4Ljb",
  "key2": "jcNFhH8HFo6sMecmA3V5WtXidY1JmXL9q9ffv8CADKqQzr3tCLS8SNSLMfxadc8TANChfgWNYX1WiLcirGEbxPY",
  "key3": "6zymJxecyk8VSdznWHVn3dbtbniD2kjTDhzpLB4KvSPwmmLgqxKmWEhKNZibiGuTJJdDaMFjY5ssZxq2zc9PmWu",
  "key4": "5McFWYFh8JMRejriLYxyaS9qHvBCEKEwWrpv6FLdtYWeBs8NMFLdBUtw6JCwwqZmXxCkkGPnQSSb3aygrsA9W6bH",
  "key5": "yFUT2muT1R5LLx9VWXbWWcT2jEPn89U9N8VxX86ZMcPooRuPcTnWaC3gFuqiPHb363JNLv1FqPqqUrjpdxU5H11",
  "key6": "5AmHAnYpiAQf3f6bVhpRz4Bb9N2LMzyz9tLHG6t4YB61DjkA43yrX8FTsx996BQU9P4st9keCtTwUX89FDRuZq3K",
  "key7": "26dEpig5DiwjtdkDmiqfngAkczAP14i2FbfbUQ74a4VdxmjeYvP74fZzDbBqHqYGHPP3LMT4R4aGAbnCmmL2e1a3",
  "key8": "3En2w2nUhDMV8FEfGPchUxjUZmjPmo5e1Yu1Yr1dicjrudPMxP8d11wJuUx1dgntayrvVJpddZQe2sKdfWBBw6ZJ",
  "key9": "3zzNS1k3gqV6R64ii8VfC9DDQvYLT4uFhYt9dw4V54ttgjZeDictjh9erNqJ8FzNNa5zuQtk9iee3zowjNqbQQhi",
  "key10": "5r2SaDZQepNFYiEq7tnP1bJsZ2LNty46v55HrBEGhrQDXdcZBnATWdVWaVcu96GKrKyfevCFipZBu8FFdmsUospk",
  "key11": "4nGHKynRu7gmrq2nAPToZNQ9wXE652f26sYq9to8bBwKiyAN3edPhaAiNR4smfuneupbdiiHof7T86J5LBQjW9RX",
  "key12": "2ef58C5Faw7SPavV9kfZEemmk7cGXPaQ8wTip4HscfLGSDcjciXW1e8D3nBPvZYp5rimhzwFbCVr3G4PkTLKZkD3",
  "key13": "5oC7AnCvK3cTf9hU4YRE1twymJJB8J6Ae5SETCRTQXG6sPs7occgFsGTcorNdZo5rUgDDn5hmfhUeyeRw2tsrGmA",
  "key14": "2nfjZFETtqxfwN78GjbewkTzQs6py5jtG4XL74g3ufQrGvEB9cqdL8DvjCBpppi2ErgXczhFtVsfvvKzaj6ktwsi",
  "key15": "2xAyKXHjK2YYWBn4gBcgQ15P8H64VC9WrYEoTpUaM1YZGAevgCUEyfyVxrrAZJAh9JdoZTsdN6zUkgmukFvK2sEL",
  "key16": "1a1sYKUtAdQRcnSy2MjM2UbB7J9T2py8vfBvXxikFc1M4S6tmGoPMzbWqZssKTXkY5WfLnbrUcjM964hTFWpBC8",
  "key17": "36gDJfTjaMfe3mZoW1gqxn7Zg9oFuKFhBnKV5L3eK4v5zn5JVB89AmMiwmKQdRW9QpH54YU62bj1mMTi9sPgmJ73",
  "key18": "5uJETqhyVVAeFEgd18W71D9tEPwuQgBMndZaguYV3BtMtVPvVSWkKCB5GDZ9K37HsKH8cnLSQnNYx6tBinmnwBv7",
  "key19": "5KaT1XvazAsuh7Ges4VpsgpezSdwU3rTiWDdGfCY3rbVMLrz7Sq3zLaEBB1akeqYhLpoQpb2R8rMZ7DLCetv4HRx",
  "key20": "5TmGC9MbVcWBJz5e2CE8JmW7gKydXQkzzPrsTeQehnqGDHh9L3rRx7NQkXTH1oYBCyE5E3tznuUnbgiDY5GPJU8R",
  "key21": "3LWxdE7nTv51fVcPVGmTS7cYzEsx66u1zH2cSUZGVEEi6VibmES5w5NiCePQzaiPhZFiNbMvZgDvajeKKiv5CwZz",
  "key22": "4EJvWZoRVdheno88kMhGEuKwDVcXHJHMEUDEJ6uk5gcfWNXfPu3JkWjoZLGeKevP7UELEkmfgHPJs4CBuwbXTAj6",
  "key23": "2YByMLFpZJGiN656wq3Nio4c2LxebWe13a1BAsnom8McXxUVZ9n3rkiqntbjFdPb4gW3zKWuVesR6trnyctesEZi",
  "key24": "4TN8QQ5RgSGAKknRhdpEdA1XFwg84PST8UXvkDuhEnkhhgK2EAAaRNNUSgZmS9Xiohj28kGAMv55ecupnPgYo2RM",
  "key25": "3ZyWSmoGtgQGoUHMF19QSSwKxDYr1yupmgn9v83FkRnNscEzzubdhweguBebwt6pPyYCBDuZPsPkvTicZropwavw",
  "key26": "48WDqZ9xRMm5uxHZVPaJoB3WmaByoxpUY2wi22qeMuuQGm15xE5VWsdr8BabTpkwe5fg63zMgW4QpHCzaT2k9P7H",
  "key27": "3YUWP6c215G8pNfka64VhStpJjJM7EsLwasWzgiYoAccTn1LLMCnuikcazTpzhKSbE6t8Yc8qRxspsLzikmQYzQb",
  "key28": "4gvZD9beT37EQH4dJw7KbuGQFUiauVZrnEenECN4WLQuhVX93shh1utKLpKGoJ4tJh55vr4LSCf5NGZwhPkNgY3S",
  "key29": "MsEgyVpq72s8xUpqPEWP2YnHqqyxD8wiuTWtaHASj77e2buokkcfmF3k6pfhfW35Gr4wYaakkkv66sRsK9Svx1W",
  "key30": "21sqvRsmjnT5NikmbPpfM1BSK5RNpQt89HpBs81DSGQUs2EqiR4nUWacmKqzQBQNJQjL3Ezxn74YpWETkH9psvMw",
  "key31": "4Q4B7SjZZQBZQHGs4vTmVbT6FDUZpeHiEMktSBEYitTUtEmNWFjgpvtcxQYx2g9dVJJ5k9VtjoiRdw5pEzhtes1J",
  "key32": "2fiaqq16jHFViH3ZkERR12wMt7dNiSR2QZ9L4Kh3ePpewdKDEmTsRPaxdcamgt7j9jRtbfpAuvTqpXgwD2GbbUBQ",
  "key33": "5gU1RnZUxdecYVrMoN3xJxyaCeziKzVVWjnSo4QoeEpS7s21UGc6BAuf6bCpgLyHGKF8KgidGeFdqJPdxv5PtT2z",
  "key34": "36GAJ2xRnA41TKxC1zWKqoC1VK2bt6g8x74ZvB7hDDoubhtHU6HsjZUtTvphi8xKo3JzWtpkNMXsJikLikLo2zva",
  "key35": "3qsRRiyTD8vukWjZysk2Fnta9MWkVWuZYUBerB3KZCbh1316rMqbHf1mi1irRb4ELpGNHcox7vnv6rHk4NS1dwnp"
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
