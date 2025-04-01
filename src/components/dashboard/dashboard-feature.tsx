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
    "3gMEaXVrdmUhA7MN1BPaCKeZbD8RrwiERFrfG5ktWKRTwMBeaXwRLvgMyLWiuEHJ9VqqN2JpnSxa1eAZEPxUSurL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RE3ZG85XyCMrpg6M2jPQR9GxzUn3QxPoUQrbCzPfd8YqvPRHDfx9FV3Fucwq7GhXXKUFakyzxD7HjhSvDeUU2zD",
  "key1": "okpuuhqEQuFLqzkTNSXtHwHtpp7euBLxhV8aiZhSG5GYUHPkmzjm21pX1wSisyka5Tv4WDG8JZ1bV3N1yujExck",
  "key2": "2UTSZGYa9QZbHGWMST5LgtxyDP42QPYbxtsXcMfpDpMzZzeQ8g6tocyJ9fV3H51cGzb55yXr1HWioNu1dP1MJvwH",
  "key3": "34idfaH5W9DJVXcc4ffL9mZLKbHT3BVG33vmSWDWwXNh72G1AquCbUz3cGG1VcKkaKAooDovAidztPdCLNpcgSTv",
  "key4": "5dUWtu6gron2mndGX1Vf7NkNcatj3vwidx1ogpvqh7NmUFAq828oC2BoMh2JJ9y2zbKkr5M1AFiwDuddAfg7vgvp",
  "key5": "3PsuUm2C5pob62a5GLu4a2oddUo42QbJKcjiEQuGmyq5Kz8dQ8Ke9maDoJ99rWemkW6WLXwEAJPfKGo8RoYq6Crf",
  "key6": "3YEzYAGcCn4N3hrVqDjHkAggR35THaQxsnX1Vy96UQezypLoApWPopFaUQHKBGAifqCVvPZXhJsVib84RnQ2Ypty",
  "key7": "si57T9xCoo4UDZQqo6LyHGFhbaRYyVbZbv7SCHGMcca1C3p2833SskjgvcbPdzExGaJ2h3wLHru6VTt2K4hZWeT",
  "key8": "5ih76CTo6GbGHAUmEQqu5ftxc5gBAn5vX385PyjE5SPp8bjVqcTaiwHoPb7f7Fo5MByj9PuVo4MgdtK3DM4CgD65",
  "key9": "RT8ExdeMBzmyZj3MWiLG2xJqvh9nvLPV8ecZySuhDthhPMrhA37qXpymfm6uAPehvWDMkhA6nSdQM7aXLxZxPs8",
  "key10": "4ZnevT5iJHHtAmxQJddu9zfp3t47Rd5fNxHG7v3AzmFSVzS2M59e7VbdNiKe4PXJq14nXtaxMx1MrjBoXZZHr6ur",
  "key11": "5fGF28uN1j7JZo7TTzaptS9i4hScuhDMseq2Lpp78qjdGajHWizbpa1qckyqHZ4LYbCHnT6nZsMDyj7gJxqDkkBX",
  "key12": "4ZCjFtSNjvTLTPc97sGhLYD5g51usNBHTHFWazpVLQyTaCocH8YgX89tjTLuaWDDAm88qFWn3gzfzK8MankTu9wB",
  "key13": "3cXAnLwJvUm8FXc16zmtGN1zSva4CNbu4NGmr5apdpvsfqHfeJ1nJn8eSRYyY9cPe5Btx8JRwr6qaJD5LveNBwh8",
  "key14": "NeCKYuaEFPXzm7G4WVyHGW2cfpf3fSxW7S5md97LBGDE9AKRnZxii3FZKPDZu7gDb6ysDcmH7iHhJPsqkcyPJXt",
  "key15": "hjVJ8iDzEVGPe4B8da5jaugeZwhK2voGG4rPNV6mynqdCrQzAhEhcWSqPMv1Z4odfb5nFc4mJg6PXVn9N7jjHbv",
  "key16": "3rxNfTZpFRuk18N9UyQNKxwFf4z4w7CaPRenyEi2VtqjFgDRnvD7iStTwVTY4PfjCd9K7yRJcV4KCCRhQhjkt8tw",
  "key17": "4FvrgSJdN29FQ5gNnVeqRhZead2hwNeHsnTvLkgCcuidSanwa7VrCMMdZGHMaJN9eAychiV7fxBQqJH2uypAhirw",
  "key18": "3w7tpQMumaUdD25fann84gNn9kJN2miVm9vibC7fkW5GwYtmrBfcVzsvRuCQVoFACU4Y1g74Ve7LoeDV9Nbpgq6P",
  "key19": "1mf3yZvtpYk8ffgdPJ597A54QDjLTsHjVcpVUgjKaijBs7QRnACgMHhzfCDYSyFjuWHMcoAHC3XxHWcsEx4Hm5A",
  "key20": "33D1MFNDMzxnbCVkW1N2aoogaS8ZauSnmMwfdmdAMZgKC7hB7d7E2fGWhqjkgw9YkLizKiQvjxoeiqW51VQuWULa",
  "key21": "23SKh2emYMNcGRVUAv5JZVk18s9smh7TDc2CuGXboNm3jweAV4kL2zQENGnTrw3Auyxo6rwftPHiCBciFxLceMWf",
  "key22": "228ubf8X1xDhUcf5NSaRLmhH9ZhwinikdaQZj4nBiWxdnELxBMUUDtTrgpTZruYpJBSMWM37ARpa9C5SfYXuFMBA",
  "key23": "yXMB9fsnMG74jDn1S5MYVqTYMrKTMPugMQmpnPi7T1DebpJnUQoxwgVZGU4LL2aezBEVeyHk8FbHYU3wiZ3FSp6",
  "key24": "n2wkE1pjRaDfMkcrH1w8cytPtuFqREPw92viakoWmMaLAL3eH2dEYgimHj66D3a6hJHUJ4hKyggPochLVnmRDFG",
  "key25": "4nD9xasiKrStJDEf75aQyVp6e1s1ZCSc7jBWD4g9QRb9681G1sR8QDoKH1cBGZNcYvGgri8DSWyDU3ehzMx4Y1nP",
  "key26": "4uqc9BJjSjM3sbMicFM5Xy8mrbwNZTNkViANNiBx2tF9SU3P8pSiKQcwZPGLcLeindv542hroUBfk6DYUyqUbGZ",
  "key27": "4nJLwcMjjDxZFngTcx57t6TW16SRBgPnQu46JLFqLHQWb5NJMmMtDRopm49nP1H2H1LFPKhDoy53rMQUn7mSW4ow",
  "key28": "5fCUZrb5WRG3BiG6mxSYpivPhtsmZD7GozBhk6Zi6sZLM4963Fdst55UFYnBjCpGQsMeZjoMvtZCV9387RqDGMsU",
  "key29": "2nzUUHjH8e6yX9pXT4XvQqKeQhKp84C4FQAEWZf7RaA2kYCSyg1oBvacYsztdcqkiwWC8TGj8vdUTiSokkNEuqx4",
  "key30": "349fTD4hir6SDQLYuidr4q4FWyG1XNrsty5yd8yKm5JSBqch7DUNCo9tVfmx815bYKauUEB62Y72172M9f11UDpY"
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
