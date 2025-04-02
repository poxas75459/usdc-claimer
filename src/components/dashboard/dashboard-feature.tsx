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
    "25RfPm5k2cd3XECYF6pYbpmUtWSCxTXqFCmk45JKW1xhBq2e53bRRDvqz1MRgdiAY8s94a1JwuH75tJPBhtdy2TN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftkMZBdEV22LkdCzRvvxcoGvbBz2VrFevNsP5XiCHXsFXDotvqt36nmrxLpci3BVKsdKBiv198FC7p7pPXqFuhq",
  "key1": "2enyk58StSDJ2VpGxWSyfFzx9Hz4fksjzFN8P4M5mEgCsKS5yQnu8c3MUKfaFFaStoKp8jBfU5ZiXekXHAM8s9ZT",
  "key2": "5tvxGpPt7W2nNMMoMbuNwPTJ4xESStMvpkW1CxtzYkEDTmW2ct3Rk32ZGMK9tdEaPkCc2JTroZbohzFX63Uu9frt",
  "key3": "3hXHJZigXfF4rSz3ZVnyAwN28q64fgZkNtf1vxM5oQGRoHjuDAKCZjpMKNKs8nP9PnP6kfZV2zLVGgDrVu2v6hZ1",
  "key4": "oYkYiWNJQBYxofd8QHQFtoNdVqFMR8QCbXgn9CpWQjFFQdQpqBBE479UNEzds12TEX8Rwe4sZSjeEev5fqReoG7",
  "key5": "21Hnddg9SMxUiqTupWrjhf59HPvzJZNVpc4YeLS2W8hejBiQnszKJBxJ2A1oaJQkwXsNb6rTbDH8zPpaeDdGskG5",
  "key6": "2oSaZa4SQcvhsrL3NHGuiPMLNB3DapeRcfhpPTRtMDDvkDzrhwkaHGhTVihiPShNPgK1fXeFZQDodLgbNDSvGiiV",
  "key7": "4vkzhdNJwvXNFAvCPMP4XvJZyEGwq8LGo165z7kMybmAukzbE5YyKfrKUvAceTvZN74QH9MB7XtWc3c5RjfiY8ZA",
  "key8": "4z27SDyhuqvsf4dpX6z9ELJQLNDf2hRfkBKpjmzt4NXnGDAMZtGZoyDy1BUj3xpzdE928CrQsxgQCtZeB5J87pCJ",
  "key9": "2aWBNUjy8P2QHZYB2Cjg4J2V2iiJmbLSWNUJ6XC8x6SuaBWVPXAziGxpzNtMPYzU2p8aekcvY97QcLAprMiWd5BD",
  "key10": "2GH4BqY7iVqBsmmhFEbqUjH2Uqw2YB4Ni4YxWR3MCRNRV8wXkZTJMmMdZX4vP3fdjAZMpA2cFShzH3KxwadatMDJ",
  "key11": "5LLGv7abP1hZ7LPmYykJu5AK37kNwR7QcZ89erRdtTGJbxDbJ2MSQoeGtAft9YWSZ6UFpE45CkvraZ5usCqMadyA",
  "key12": "EUEzQbRrpf2r8gPLaQnvjQsqYKRQugw6isA47bhbzVPgkTxrTWsRPuGjgEvwpR7WW5L8WXrwFFAT4hoGeon8uJp",
  "key13": "27aCFZiRvrp9dzUkJkpqiutwxUvoNckikCUb9fe7EeD6aepAxVL85mMKWmPtMoPvdGkN4WBM1wkBx32kpPeekKsu",
  "key14": "4MPpAV87FB7iW5rtRdEmP2QU9d4viz7zqHhpFp8LE9VFkJRsM8ds7zNy9UZWcPUkwX73A2W751sZ4DgNkL6LeF29",
  "key15": "4uGXiVgtw8caKhnWa8xQ4PBdyz3HeJG3byGsF8k5bzUTNmFsthvvaxW5ysckC7dSNpfmio7zEZjWJ5bWV8ZKFUfE",
  "key16": "27EWzbEEuC4XWFDEKnKeVsk3itNcCD8BVzJKHS4wK7WjdUyCbvHr2k5JwRfhY2otevYD9wkVGP2dsy9M4P4MDjCL",
  "key17": "3c1QUGZ3Kpm9tHGUv1kX31qhWYom1bNca8PsqSC6BHLHhgguv3xPEzAdoj61NV6Zu8KdYwpHXzg8RWdwzSabNXkj",
  "key18": "3DqEbXDUVkQ2oj21bzG7hBq3caEeF4tZ1oqCDa6smPrP8s74ULTN9Pmy2ErxNFGg9Rt8u5sHCUsY7pNsx8g1eX1M",
  "key19": "4w7NKgoQzN9oJqvbte9CXDGmJ86be7Li5BGtNJ7uAb1Lag3w7Twc4XNefPuhLWQqWtqRirb97GBDL75NxF7eksvp",
  "key20": "4eBdaLxCJ3XzTmUtU8cJDacuFknDSAd5pWxcrLb1CXkm32oKHRU6Ywe6juLgPuYDN5pRoj13Q1HUX3vWyUCEKcVs",
  "key21": "2k21sNGrNDM8884QfgqW69AA9zTYCVepKX1y33cBmf9khjzMhWBgitVxc6vcFQgLS9FNir11TmZCtRgeVzSxULRn",
  "key22": "2WjgKcMgMZqZnjQZmhjRkdpTqDPg9JWFqCmD2FFAL22nfjdM3HyPPJRWRfDwY4Z6ZXFWFsJHSezJUBrMM8JPc4sV",
  "key23": "4Am9VXtmeqTTNvWvXrfxJRUdjZmdRQDLF7h3oRATt8JSnFaasRRmUht5htP6DEtZRpHoVxDeY717CyM9DgPJRiy8",
  "key24": "xR2YkhSizD3RUJvZ3kcXmjSi1kQ17ktYxUzaj3E7Cjfyk99SJT8x9BMXfnotJGpdp5tZwbVsdXgb6hwAnHCxJ1i",
  "key25": "5ZE1ZKY8ed6TsV7b83yxE5EmYQ3D4Au61ZG9d9NhdKjRXU3YTdZA8dqL2L9kPZQWUUMuqbqd49DmsTWga6f1Ac6u",
  "key26": "38efsN1CZQBnYbUhmsPx8nPBXepxkZK5Saeu4oDsXfP91QgzBuuBHcQBjUxxEGC5hgzR6qsu7qLtECPByBRm9S7Y",
  "key27": "5CY5gihFzcQisYyhJUytBaoXMCCc5yMc5KcHp4FfbeNjpbuGSXP5HV5tsZ5cYcn1eGBegYR9aX79Z5i67xDE2Z2S",
  "key28": "CXoZACC7sDmHVbx5yAUeNn769VAgW7bovyQgi8YHPj2oLdrzKtyom5Jz1DwWFtvB8NkpcmmGf6c8gGPQG5Nj8ue"
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
