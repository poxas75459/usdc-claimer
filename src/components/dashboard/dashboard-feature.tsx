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
    "3QRBdDctNYiiYufAiHr6Rk7Qw3fPV1r6T1xzhFq6YW3ZztWaax1voZkVYxuaqRc6Ec7Jwr6Nc51xMDiKbzi64WRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eaoEK1LC9JL1vpqnPy3nMmcJRAVXeCBTzQTjVFsCgEoqpLZQmBbrJWTmaoKxwN1LPtt9pYXS6EH5CeXfCbJFCm",
  "key1": "31hWzE51RyswEoL5i7EcQCmuaYboq7kkwiTKRgS4e4z1E476disGtau23SrZHmc9k3PY9NgbtP9gPbKNUvT1zBWR",
  "key2": "46az4kAUuH1WCxdjgBBaKwZaGx4jbTSpuNieAC4sBxsf4bNcHZVoQEYUceSvPapa78StNu4ZMavKFKjRvvpBLst9",
  "key3": "2ERvru9BUTvZ7ZXeFa5ZVEx8MKA9a37rybzeRBsazViZbNP2riuSBQvS1oZYmNHsKdYCAdmtcYaRD6GYAsHUhwSV",
  "key4": "5qiqax1e4RZDXwhVEf9UT9D1yBCSVkCwEa5aW8VXZiWHL68ospUuDRwFyL2VgKnoZRYQwBmscm5fKQ944m5M4omq",
  "key5": "5siuTjZtrUoWuBWVNuNX61tqEm2BLhSLLV3cCA5rLwyvu85hbmCpgLVQHiZR6WMAFY6uesQdJNZujx3BZ3f4swGv",
  "key6": "61fMKrmNDdDHGERqE2C77mA9ys1kLU73aztd5DMqJAVwEE2d1xarrZqSWmQnYfnfA8UNuWsjoaQdUenLP5nzCGR6",
  "key7": "4RA6Vg1Q241oJT7pBU3K9QFMZ8VcgWLfr2w26yF7T55boqQP82uFj8LwMcurhRUCNQj3wzxPujdapDGGSKwdN5SJ",
  "key8": "exy5LRXUfBHpscrbmmp6mvEVAGzCSZYryX2uTPpQt5hoKQjmwsrwCP5DLL3FowsFpC94KhbDDsnCLB4KVMhEp41",
  "key9": "5xTmf7kK4jUHgnYWpgWxE4vvZMSYApKvZLJYxKV744RpuD1HsZL7e3wYLXUQYLbWhh41VigeHoVde9i3m6AsysoJ",
  "key10": "3XtArHEpzSoCXcHauqn9Mnq9oYm6PpV8bZKN6SrK21w9qVKJt7veJL2DuK7TMbdPnAmmkTBsMfxnCy8vUyoZSRw8",
  "key11": "4Ztb7idQddoMWzFN3yutkQcGWk1mH4WdaR5dTXNACJ4A5apfeU1c37ZtVihfEBVpQ8ncQePfgtWJNUKErS8heWNr",
  "key12": "57cNdAbbGefB2xNwUHjiK2msMJEjAHqHF6EzzLS9zUjbJBifmskBHS2YrG5dAJYetUCi4KUH5tumX4MoPzv9jPKs",
  "key13": "5niTGNQrgsDFmVPCRHLNta94gP9aoCKadyu1j2tEZdKnyP9zpNXGKSNCb8bis93eCr4BPd96CFiUVgiVFL5qevUp",
  "key14": "3J6dFzpBMQtapz3kQZDiXEeybibJEWHSzWhpcxchF7PwvdY1P3zKMUxbir3yBB2vx6ugxa1QusoxKUJSY9fiwSo4",
  "key15": "5RtCWerT2Y7gnY4S81ooGBkmBvNQb7gfUGnApHTjJZQU6b7eqGrBUBgK1HCoeXg8q9kKh9ZHQjKMR4vcf4jZ9mFW",
  "key16": "ZgNuC4J3TUFUaueez22NZYkvMbSZATCpL9rhb3q2eDFptwhnvdT9n4gKUXKHnB6XSaPwgu343pifcJjUp4mzFim",
  "key17": "36GL2B3FnTyzYRPh8XqSDpjR3Svcpi8aJkZivgwJ6XhGAmrVDMPKa3YzqbY6PwM1USUU95qCqVyvwSCKpZecrBd7",
  "key18": "SMATrPpqtH4n3B2g48t86nWzPeTM7KQREMxnyQ6iyJSJuayJvGnwXnzcTbUxBdtPLgvwoELFyTzuvh1a6wLfnQD",
  "key19": "5a7zXmu4JLhLeQHqdSt9ACJ3uChZW8H9PaZmdZuG1FPpGExEgkeoHVHRwcUoyyzY54wFT7pyV7YXKPqVorHZeUgN",
  "key20": "4PBZ5qcBTn4FoEdYjHTpCFuSnyj3RSfLZixDWkqnBthiL58bjZ56nAkpQwtGsYPWcxguRq4sNa78wUtFFbH5NZWz",
  "key21": "3QTERZTho2WJAomF9VhT8UgNNDegpducjAF7BssLWTaeumM8aWSW2GYvzwvu4VKFHYg6cwV5vtM7jK5pdRHVvBYN",
  "key22": "4QT8boFByRGSv2g73aAcfe14KHYmPYANbcuS7AcBexMNAP3oL65F4FKKRhyVyeYtXPGtM96EFwh2P4RnZYsdzBcG",
  "key23": "3uFhREYMKRRyr6Wm5LD9G4ZXquTXMsthBGpeP2PsoM1L81DUGbzLGUsQCbGjCMzU1dRBfatQBgmP59WwQ1nBohwJ",
  "key24": "28tx1h169zs82d2fHN564TyUy15o3uCNhFdqs3uSGWthseNE5SUyWbKQvMG6Q5PniMaq18P6kQLxo2DEj3w7Gkm2",
  "key25": "9GcjZmLRsiMDbNxJXBVCvJniENC2fyY84gnPUwZtkoqDuo3H4VG4hhaZcbxWyrHRHNn1AYekDAhU9k5hCoXizcT",
  "key26": "b9Jm2dvc72SWzxEhjCXgmZzSgMpSp7cQ7AffEEAv7RERMrodovrpvy7z5a59gXYFrp1PmbABJmvUuWn1W97nEEa",
  "key27": "3NujTHSywhGNqz2oadyeU3moFsKpQsGxaZAjqo2dMwyiXL4MHVrSWjAz1a2aLCyxk9XmUkQnTrHhNyd7XP7f9BAH",
  "key28": "2dh8qHJLMaUsREm691DPjuy7FTrCEtkQxLd7WHFKj4Ya4C5jENiYtppD4yiaJdDoAP29yeTSrtwt17nX8ijdiRhy",
  "key29": "4EgDuJiWMo4cvBiQyy28PzNczRtrxR4xyztyETVJXV8wbUNwAHNgXuo3KXS1LwD3UDja3rFeuaN8bNy2uFCmLBK6",
  "key30": "5BkEKYepFY9FQVBYbMnzyqsTZrKBbRMPrgDkb3Ww9TWUv5YKMqmh24WJtFBn5cKWVVH421RmnwuQLftaPQ1Thssx",
  "key31": "4y8nbz6rVbeN2GevkasTKhqKCUc3AeP8V2e4sNRn2zZgVGypj9TttvvmYLMpCs97TFUhZFSCtsPQ3DoDpgxfnzBU",
  "key32": "pxMWfSWYsTHAM8U54YgXUg1DsWstEE6rKgrq6aB4k9UmjiCBPuSZtnntPdVou85QZ9cgDjDY7ZNY1XGjvB1jC9L",
  "key33": "4KgkEbPYarXQrz65HXjxrx7o6zMEk6PoZeoup2zjY4J1HfU9SYbGfhHPa5z7qnE2cLdhzXqBXgboAQp1953814Hn",
  "key34": "3wciUovp6amZQqUhAquF6yXzrtSDTPTdmbLTDR7jcN3x7WMRL2v4JTgHun19mSXKKwSVwe7WFg6Xxwz8Q9RRKpdC"
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
