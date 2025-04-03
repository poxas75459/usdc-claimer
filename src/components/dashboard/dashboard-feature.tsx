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
    "5nKidGky4d7iCKgy4rAX2Yv8B8vtVQwfR2fjvHi7fGGmfTHau67UhDboDsQtWJ6mGkHLtbpwjGAAHLuMnE7dCmtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vF37eSyEcBSWQWdXqVSqQg91RggJgyzuE5gYbcNWVLrRfMqDjUjezyE9kUs9mwcDcFNeTnc8P9mNcvY8vgpW8Xo",
  "key1": "2FUbkEMsE9vpWaffKDoBq11NtRksQK6baAje9jbuY8rpZLdV3LJVhdo7C3sm4MMoyCP4nGX5mJpLSC1dK5z8tqyD",
  "key2": "2h1H5YB5g3QSjZ8JYTSeteSfmyxUbwwU3G4zifa5noZCvEZJdKKPRhGfP7SfugAYmm4vbC2tG2xabkabVj3WbnWC",
  "key3": "37uW9VjNgPYHEW25PFzz2QZoWDEvtutrDVyupp9J9PRMyxrh6Lhc7fHAtLxwtSBqpfyoc3HU7q142LqdYTGFJ2bc",
  "key4": "8NiyW6CXmLtonZQ7KsHLV4aLNtxJUWAEK9mXeJFFwYfvwhLRrkss89sMMUariZM5VcBc9kC4Zpj9T4PNqSzpHDJ",
  "key5": "4f5mv3M6YHyyhPaou7tTAAim6sX1LtZVHbND166iAk9pA1Jypbw3Kfnka51fuhxLyXTGtEkvaQbegcueLJvQdHy3",
  "key6": "AcXTWwk8shctgbjEhqdVCuVPSX8kW2gQ4fvTfjqwocyfyCnQMq2bxPW1prLYfrwqhVsdmVMoL9QNzxhpPjeKSpR",
  "key7": "5HiNTzyGxYE7u6MwEWBAU5RjpejsQ9TSAH5dDVnFHe1jRTvuhfrzNsV1LTjEmryKFNrphhJq4A2Rc98tH966YjYy",
  "key8": "5WHhbS2C8Q2NHeG7CRpgcuRvCNQEGe3wrxYdEPKZK2L7S4cPNKBQYf3mRXyjZi1PifwggPuF5TDKEJ7ToqJUDPah",
  "key9": "3thagQQTuW9RRjAVyq1kaN8kcL3x1buDBUH2JS7m456zsPhyYAAbKjDvrFDZT3a1GJ2tGaV5G19cJccPLQCxTPUf",
  "key10": "2RS7kYhDbrZLowc7VTMrpfUckZuMXBxj74ehjjRUvsZnSyxQUvok9hKCg599hUrzdHY2FCDLhcB6PH77UoPTVkaV",
  "key11": "47gUBSFAyVkNdgYEUVzQnqpjWF5XSBBpkSGkZoJ1DLuPp7xK5boXuJiqq1YRjKk6BAkqtnGTGfm5nizGcf4Bzk9Z",
  "key12": "2Jfze6aDNcX4JDwybGgRsHbeYsLBxGPjmvHZPNXebufVKQeYmn2iSDM8MpeF2FZo8QzhMTBhEXhpLN8f8fevs1fC",
  "key13": "Fg138ttPFgKNUPW3TmzocxcFpvvqkh5PiLCkZTPM1JC6GhbkPJoVhQ9VdKHdbep1LzbcideGW3qgFTYgzcRYiTM",
  "key14": "4ud9n96QfKNb4WJGmiRvVDucevLYmbQnp3PhFoEQKdKhX5BLWd3YLuPg3nMZ2uHThKY32W7Di2XdBDg5G9n2Syv4",
  "key15": "3uk5QcGMrAYLfQgL5obX1WF6PPp4XVRsymQcqPmVov5PqUEeMsaaUbohpYbdiaduEMowXjp3iWB8Zj22AvmR9nLh",
  "key16": "4xWeE2x2kvimyZACeQrKDxCH96xLC9pEbQPvXK3DESdPYN2XpZ3PtuhwN4D2HgbLWUv2H4aHYeyeLuMLEuNoeLHQ",
  "key17": "5GD3m9z3suQCLELRou4bzBXDD81kd1iMToStUGam2nxwg2eDb3qVsiZLfVBRuUfXXhce64w3i26JYudbSy3iT2ot",
  "key18": "4FjE94xY7xNsG4pamLYHVH5qid1Kmd6BSMH8fCaD2n1TiM6zoabe1Ec7YXc7zKt61eDnoScmxwTi1vAMTx1x9x4g",
  "key19": "3voLA9UxcW24UUhoaTCigaMSkboS45ygMtYeTGuiK8tuw3zP9XLXw5koavrjDjXK3a7DBktJYz1cYL92cV7ixuYx",
  "key20": "5oio8hAc9XjPSyNH3RtSMT1BcyCmUXZUwZEPrBnDFkDTvw1toSFsUeNXfbpQv23JekSgA4gpHGU34FYpCouQwe37",
  "key21": "5GCimNhpMphqxNmphTNyzDKkWYnuzKZg7UcJnmnazi9B6GSNEAsEDDFDVkZHGjEuKkc4jZTLP8kGNttXiUqoDwor",
  "key22": "53MKBHaJA2r4XJR1BFRMVxbXwox27KcRH2CNPvMQCKjWUXgxeLByeZaNazJMQQz2NJKvmRYfZK3TmoiniLK1GBBb",
  "key23": "5RCW8C9CW6uRVaunTGffXku2VE5n9bQKZacemXnLZojNnXreK3nJG8MTCEGcDRX9ZWy9LsZeQvERi9GsohSACzma",
  "key24": "4JiM2RD9e58bTCydm9EvrNWZc1EcDMktNANPrM7UfoVRxtjX1mSaEjbhT1Q28X1yP8FFtcQzapNDPw367Mk9RLAc",
  "key25": "41qjE1sgE1hFc9Ksk6rd44n5SjxLS6ANfRW6ERzUQhAVqoDDKMYABaEzPkgiEhvtmHwoXZSJx7U2KoE4NqyAnZa6",
  "key26": "JwXfUNSrbVWKDCYwBR6wd7jW1Xa3MKYrRY3AYXgWKM29aNeeYvB6aR14WvEeSxtmx1KbLFUU3K3DYFR3ikcybBD",
  "key27": "2JvNV32Mu3hU7DHaxj3aaG2rQWdZSzYqN6fnLFTcypophpmFXqeVtuP9e7oj88vTyjcXfiXmuiaQXFrWbda2b4pP",
  "key28": "3AfhetjD461GioUBErKQomj6FGjAEP4afZRQnioFd34DHSb9LKqpM4vZ6bqMUsXztpX9wgDwPEpzVCewd2oqSzEt",
  "key29": "3yqCiAu9fyXQ8U9j6RCvspTwfTmVevyusn6bNS9UxeN5CG9QgiYxef7m8K2tuaYWjaRgKctvgYBoKxxZ4sHchFPU",
  "key30": "5g1ZMCbQUUomhDJEeuvqGJ5jpqmPEPMZ9xcEkH75W5JWKLGXb3mKg1vcEqJ5ARyLzwRz2Uc9MrreJwrMU7ihpQ12",
  "key31": "238ffi9FF74iNT1RAQDJ8az3MediSeEvQDpGR8xZsXF2pMfRRvofYHzdy1ZgJ2LoCdFWZwW4kqkjowVfuqYAkoEf",
  "key32": "2vS3KfziVEANnD7utK58x6a6dryvNr6mpohGt8D6kBjKTisL9CJjN31bQmoDHpjXTJa7CLcqmAXNN9d4m9boxuXS",
  "key33": "5NAEsLWjCVtsETzm6P4tJ7kKDSNmEDhr6KL5Egk3XZXJGgjypKFNNdYXLVBYC4CsdNAtLdUjMxp6WPaxsf9BxTmC",
  "key34": "gFomiXUtCBLvBgRzNJ3QWAHouNYSLMicMQ2C3By9Hynf65yWtVwN6XobVyg4CrLdGMHiGhbQEkbdjs9hgmK9YmG",
  "key35": "6671KFGyU4hNYR5ecBn4tDdJA3QfSkoAv2aqMCRE7XMczPCv2xkos4wHd4m2dxMGSfPeQkd8qypSMERT9ZcuEQTc",
  "key36": "4tAdvCUTByU54vTrW9sS6jBS1Vv9CHM2YwggawmeVpsSkJMoQjUoGouFMwhwMAHU8wgsvdGQ3srjLMqdTXEzMWrW",
  "key37": "4nKo73eoZr5mHG4Avg1nvfHNcYJYA82AA5zvqa4kRVWUxDPt7mBnLJdEqgjUtAUm2oH5GD2E1acC8gPZSyDzHWiD"
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
