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
    "8N4VYuQxz2x6vB69c3agU8eCKZbSPzrH9KCPs87SFkQjBaC4Dp1FfKrRLPintz4Y1okwsF5nt879dju6YTCNqoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GGRyb5yZXE7fF1jQAvZBgLntTDVTvYdbQX3cCaejWBPBUrkm9fgG4a1jAAuk8AmyFnizMkJt8Htptn2sv6qBWqy",
  "key1": "2ES2jWGgccoYZW59d5HZ9FCv4JoWcCzu44vbjhjczrkLZm1SJ9n8pyJVbMyaZWVotoyBVdimNg9mkm4285YbDacS",
  "key2": "zCmsnKFJwvGswXFALLYpWnfqgBYgskqaCVNw5aVbDp2eDE8Yd4he1Vjvuq4fV71tLTinPtsAsHeS6kgNsSUroyT",
  "key3": "23oq8L31MaNRaDqgxiXttZmkGoEzKGsmMELPqp5EeyJ6SDQqyJdvLHreKqBS5iWgiC3q7kcUFi9LFDWXPU8LTWj5",
  "key4": "3t9PuU3Nnp5X8RVgSCsSoKpMQroSMUe4FsNq3iMGTsADCM2pw6iofaBeu8jvbgsm4H8uC6BmLsDaXKBmhpLMNKqk",
  "key5": "2PyHa8DxgFaP46RL2X6CqvRwzcgTwvGtCS71Dn6L8E97g8CLzeUPSNHVJQpkZCHTDtw6mnHXxUc8BApFQMnqczN9",
  "key6": "2o7kggcUe9zDSthCcj6A8cAGSHFxdxSiFW5RVxWTBptN2qeHEbfHDHZc3jpq6Jhfn47xUqCkGrUootbdnwB2ovcs",
  "key7": "31VKJ5cka2162N4bJ79j6hAw3HRgRG8QQQYwgxux77BwuXccPNx8Bp3KVjLW2kXQ5zbGp8gnzV5HNjn3mdNGXEhQ",
  "key8": "5ixtkt4WLfGzB7QmQgaThfqkbzHGsysoMAXWv2qXF3jbMyMjrEQXyCpV6UKV7vspV7d78YSw2RTynVKxREXiyXtG",
  "key9": "2LEj5srv9tXxUj14H4rzFdUX5sJaLMB8NBJ4e821UBNqTSGuu5CZcjCZX48BnQCrh8Zuqz9tx6B2uJrJ1tcW8sQY",
  "key10": "22ine7WAnENsLEUo2ijSz2QNizbthjSHo6SNrheh1RrV7SPVVPqV4gq96Gd56ewm3Ynd3iYR3WW4Yn2aHkSpX4sT",
  "key11": "C8ngTvsTjbfUrn9PscA361nM8LnKKgYPC8tYDgneGQTsdtNxggUNJsqg84z6xtEngVw1PbuHoFXJmBcPdwRXRXy",
  "key12": "ZRSAx3TMM7cRRBQaPEmTihe577NYTTCU4xvSNCTBpjV28hCR2bffQ7BbcaNjhQpfgXTfPrKESUAjMzPL4aBMQDF",
  "key13": "487ndY5QLuxvyjBQFDEiwL9J45HVxQPtpEDmxYoCLGhLvoFwXubSVLwwNzuBohyTmLqJ2q2GYMWLSufGvGvbw4JM",
  "key14": "5qnXcpBTrqsp7kMnw67RV2VnHqghL5Y8B1CJiVgVzE35qZRYd8bF8uCzn2FgmkdXYkKgRY8hYLyUzw5F2Seiq8uT",
  "key15": "3ery5w2PUT9ayNPD87QNd9MkBUZtzQ3njxHXfhAhVP3vV4J4qACDPTeiWwHmBLDX8SfmE3feLYZ7m2YTRtipHZw6",
  "key16": "2FK2Dwagirg8hAGHGEH2ChzzZhDV45Etz3jm9RWgqgPP7fjqriKNsABKjKhpZF71LrZc9UZGW2Pno6qF5ZcNtgFQ",
  "key17": "46YYdPbA5AGM2up4NJKTboCLRUiNYEG9DFRVFXBhBHzwLDNeStBukbYCUJkBoSsbpi4yphxobBLLvkXSsiSUfQfa",
  "key18": "kpeq4StyzAJZMCyAQdCdfnjxRNrv3rDgN7j58xQqQA3q88b7oWjioZNN6GYZBDVrroSGtuS8pBUEZc2tKTCcJxG",
  "key19": "3q1zVHrwec9SYmTD1jkKj3XRiwh1AkmEBmreSbbhD9oDv99vP8UzaL78vjefQtvc5S6Bepv5gpNks7An6biDRDYy",
  "key20": "4CSBiCnFo9AuR26LXB4bC8JgP96K63PVJwY7e5Fjdc2LW7LpqTZLYh1MzpXmyjGBdNptJ2Ec814Wu1g31Cuk4tL6",
  "key21": "4bD4fyFPiYGfGqeSBv1YvZ39hRYfY3cycGSqycuqcFfxcXxzQ8Mu4igTpGvZGX9oVUrg8VuA5h8MiiSPGyM55BFh",
  "key22": "VgesSuLEe4wHzeBm9ZnUKFUb6zjmXHbV2FbC9rBjToft3x8Sqk5BbbFWT9ryWyUvWxCKaeZHJm8GpJ5Ljgtq7To",
  "key23": "s8Znyp1WDxYQWqXDRyQe3nupge739bxPJ4FMjV6sEsFmDLZfYGVR9AZUXuSa6B9yqUsFJedHgqnDaBVzG1KrnfS",
  "key24": "4n1Y5W5ysmvCHChStSxyR2gnwg4ceWDfb1qUJLTBufUexxYUYiKik3zieRAgwCsmGH1QmEFCabrm7NBq1jpk5dbe",
  "key25": "4HMQkZyreNT9a9aLcJKkPTj2VFG5cgUqQCe47JzezjUN3ECNMyp7HWiZfs7wfufXi9Xt2uH2SxTeqjufZNtTrLev",
  "key26": "5ep3kzNHiWR5vYBfYFU3pFK7VJAZPJdZULCA3ignTQHhgTXzHZeeJQDEKEHMyyLGw9MumDYSYoPnXG2zaMyhtoR7",
  "key27": "4XHz9r9hJcNMWpAc2NcyrngwTWb9schdAbGA8nAKNDkb7SAxD74TetumUNS8j1H8TF2QY5mKHhL6XmuhaNecyxvW",
  "key28": "4xbJZJLRUfNRQXnjsg8Du9o8LMRTsMjMhzfH99KZziwR5TNDttfR66LyPpEZdt6vfmsd1Yt8A33u5jHQtpokhcb2",
  "key29": "5eGd8WQ1qxpQWbKQZ9yBpUFx9PaAcjxxgb3q9BcKbyucMH4LEeGytGjm6wPHtMckWgThnynDjiiMDwPcvUonTSaz",
  "key30": "2HaKCduRVAKUBwaV5grwNFMe5HaAFaT99hVrhVGDvABMvmoc8G7y7nv4Ti935vC8GnD4sTUMTGN63bWRsSzTiTTn",
  "key31": "4VZe5coe8Qb4zB4mzLNDpHFXngQqqE5Fpw5EECpsArFxFoPYyv3hAznDDPWzgQdzyVZyLAZLGN5uteU7xUeuPqWF",
  "key32": "2BJtbWqm2o7E4P1sWAr7pTD4Cj7U1V6KnoGamwFBo88LxFABMzwWFQn1yFR6RV9rXEAayKAzc8bviUm3zbG5TatU",
  "key33": "3ZeVV7mHMBa2KzLjyu8nF1YGB3GzRfTHc5de4djGanTaJVzUAaR9dweUsDx2E2zft6GwA7hGxKoGAuPt7HLVs3aX",
  "key34": "4sTWqP3pdEEbr4eGiGVnacQ5UDNHV4ebbXrFPhG1uoXkFjScbuSYkqAVwo315DtxavYGSyPwEHEmeHuUDgBsuDye",
  "key35": "3bapKDHcig2Ynk5niEbREYrhi1QJm63drawzcBryfoaRhXcTX558TF1uaBa11DbUxzuV8GSa1bMmbaQQpdmxY6rZ",
  "key36": "eH5LBY2J6xKYyscQZME9HPLqXNoZeyDkNbnqSNpyGguQvuwBYWJKch7krjSPWpXDPbR4AKGHFWJt7UtyNVxdHSq",
  "key37": "ajcrK4kArbuuLtc8yvqhuJdkj2omdMEGiQGcSLsdD3tHLuxj3a8GXGDTaqGhwfeefFpabaYwvPf18pevk9sutu6"
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
