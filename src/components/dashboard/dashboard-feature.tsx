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
    "4oKK2hvQgWbUs7Sv8PJHKSce2e6AWZuGr18fKPcsw57R2MupVitsrw4eSEVr332vKgnsiTFio2L4rxbRbToRRRXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FNcgPSk4Zro5bRWdUVWfVxztgi81TnyQ2K1k3kj4Xti7RQk1YvEL5WttaULFXVtcJz7bcwaEdAFqDN8KUXeJoC",
  "key1": "3zQtNe1YRQhPfCwtSCSzfG1Cq2dW7wu5JCBb2LFKSu8QcGaKmLvDKN2qNMLWPj3MtecM6ZDQ4Cnj4XuHu62w8srf",
  "key2": "3watNcsB3tVckjdHYR8WLKAFMiFotvX7xFWYfCZrGt8Lsswd7258BSpQYdxLuZbQb9e6dcQ9sekf16dBdhPXYiGA",
  "key3": "AZtrzWurkVm27zPUJ1yXJ3bqzsRdtPc1SywTZ21aLMo5zjX4acCnVRtBRAdNoNJfmjkgxGShzi2NzScufKoo3S2",
  "key4": "3JHCXZxKgwiMfUZwYe36cyEWfSRtZ3ohanE28HLtiRsXtkkzk24hTsViKYH1jQnYKjCfZgxshg29VQ2HhiYV31NX",
  "key5": "4TdbNYcNHQgrraT3pLbMboYzsmEu2xUf44YrM1q6MvMd68pBx1Hn8JayxMdXkSXnJ7gts4TacRtgWfFcCMGehnGN",
  "key6": "5w6dofwQwpat3YeC4H539m4vB8jnuYRiWG7wL9ufo1ytBB4UiuqHEumZvaMq8ddMNN68aSsu1vNTyvVGzDC7B2Fw",
  "key7": "P4D3T5fjwhRT1MP5iT9yQuWaSNYhJdF3kPZvQqfErJkmR7FHCx6JbQB534PSWuKfPcAyW5bq6kTGQPpZkBZ8BeF",
  "key8": "5BXofauTLUZCHRXhWGtLHCBD3YErWe8MBZnn6bRQzh1wfXBpkoUmTrZEh8JMXSBWcQE996oUmZVDqGySSqUJV77d",
  "key9": "2nbRLQAJ1CmgT4D1iHcXMvYUSRHtejAaikYPGrbrzzPHZdxWSq5V9PNtzYuhHA3D7dJjsCrcTZffcu9jMiCMtTez",
  "key10": "3GBf6Y2QsBkMMXWRpR8yNVugGCNLkyH7UxKYK7CFPG845KmbZyup7MJ7H1PQmTmULp5T4pEHmyUbBsqdVZrKJWvW",
  "key11": "2sZDaMtPv4mQ46CPLrmk7xSiSzk4H4bFExcAGkUcQ98K9BMbM1Y8aipPJwHCt8qYRsiGS9ccSeqzyUcpuCC2CeYe",
  "key12": "2XwPUvwPyDtgT7JYn8idaFcegeRUSoEYHJ3DH1WYEtRvvd6RUAHwSNZ3FUN1eQ89Jm1Bn1vmbd1bTbZVmUbZnTMo",
  "key13": "3Pexp1bjFKw2iZyDnGsJhGz1XzH7YPpnS5yuc7JcjbPxgd3pL4xzG36Z6ckq4FG3KZZbZPQtEnCaYMwVjyf1z2de",
  "key14": "5KJrmNb2GZWa5Bus3vWhZ4eVGgdpsqBtgkRn3bYPzL31qtvNk4E2TvfD1EE4q2KiwDAaSPJGvwMB7sTCcHLo6Cxp",
  "key15": "3bCZYNSyYaMTwMDZ4iUqAceHAFz6UZwS8Dpb7JuHLSMb1PcaBbbhusXcBYkq9KCdLDSRC3Ndw7BWAxBHAin4Ab6i",
  "key16": "4z9LxPMqdfH3xsMgE6WWKQK9ot7N5mJd4ffPtXsT2Au3WCwSoZe5njgLBRUzwPZS4FY3BrHTDcmk4CYC8nKxF69V",
  "key17": "4BBDkNWkD5ZW7MM1uFiqnjsucGwRGTrBSAp2EAGnGEkSmnyPz7wCww785SiXbJFZWbzwUaADXEpNoNWEP2hLthgh",
  "key18": "5QxAoKuQm39iEViZgD7UcNoBTQACYVGSPMDWsZ4QDcN9BmGUQFK6ki6FgVecmu9TLPVTqVH8yqcGJd1mpXcPMsLZ",
  "key19": "2BFiFqa1o5ocYZb53FiigNH3QJ4ufbdDqWMaQsXhsKcoaHTED2xhmV23PtNUAjo8uqngtK8BKSH1FHWpLxMHbbur",
  "key20": "4dRSdJL7BWwTaQQPob4dfu8uPihRyFYR6mT7Kz6XVuAuoXEGVnVmHJWHBc5HQwv5euZCoGfDz8r8gK9SD4inaqhs",
  "key21": "euYCX85DEYniDLkHfLak4bfXUwVM2nt1GFuqHJqxUmjW1AHVHiknpB6rQav1e8yz9tcQ5cuqbtHkgHgQ8FLfCkc",
  "key22": "GurGW6qX1jxBaTK4iN3qaRevwnuC34sWXmYWhbgn1H6HRGT6DuHt5EQ67dAd1UC6gDJoRomA3FUpXTF1cebD29S",
  "key23": "2u4Z56byQcL7rLFUfad1d6iV9Hrhf2YscHEmxcVq7369Wx9AxpQJeQKJFDxdfevEGacsoavdDKngLj4gGWPkkTTg",
  "key24": "63s2fRLnVd5c1uawzZADAdfq2RqLCjA471F42aWmJuRwaeNAMZkW3icBNoWdqYZUHNNmcEAZGw7aUzRbYCgbYgPf"
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
