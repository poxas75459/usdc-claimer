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
    "5fsRMkefD7FwmRyQrsrCDRaqxZKPxHv7REqZDvGRHLn6Y83GhcMoLgf4tMDdGX9yfdc6Uv5kskw6aseC8Et3tFcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abiVKF1sWXaNc5JcVLtm2Ud1SX57esY25MgfiEVqPUmn5xEgfaS5MUQR9JCDDoeroiQUsYEXzuMD7CR3Kn6npyN",
  "key1": "hyF1i3qjuMenEMxQnmidYGDUnZkwC2F3275QwqgpjsLKrQShH1cAvwhcJVdoeHiZrERmJgZNB58zRyeBP3pMz8Z",
  "key2": "3mwgCPqoHSwPKKD4UWfx9kgEDHjs9QrhS3JLhrSbYSjempwFjkkWML5gxzigFbL47hNZobq4vFXyXu8Pkz3CpAy5",
  "key3": "5yEyv6zK9kxCAAUVPMYw1DSXTreEUtSKbPLwsMTn3q15P3ZUVDfvGpV9m28t935ky5SA4jwFbiRSS7cbHxdoWyUq",
  "key4": "3rx2C8vDWGAE74M4q9esiJue8bE542SN3i5ojWjpzsGC3VdieMKDRreHc2UmyeteS5wMdnJD3ogN1URxEHKRhYzF",
  "key5": "3WYp7LZ3pNpWZXrVCuarUA4ts1vS7G9sD1zU1FJA29sQ9VUTLF79WVCLfRqLe9f2Z4uZqx9EgdRzu2A1oE9k6Ddi",
  "key6": "4ChDKQXUvissnz4oBPfQD5NoZVPNfoWytUtEzACB3JUYyDZcRLtdAWf3EunECkjP7hbefcrAdpBaccenckEcdX83",
  "key7": "3u9fzsQbxWbvhjsy7DPZqjFNzFTfhm1DFj6DVU1kjpULbtMdnKTitUT9PSk37TDkVxAZKK16MpDMugRZPPPDfmrD",
  "key8": "3rXo8p4nfNLN14sBHKGdtjCqaT1pZ29jW51FjpkHYoGUnr7YAxbtTzzw68UPV2qxj3HJ9e5UrdeiUDDty3VZP9Dw",
  "key9": "AH6WTVzT9XB75LWdXrCyh7EKszENFBFNd8agb9scr6FxEDSWaQEjXyTxaw2bUcLhKvgLopi6EiZefJDxLXARypo",
  "key10": "3WZ4uhS5uhYYVJCjY2d7EpBV6jQXvJEtM2K8FdcYBWiRGE8L9imimbyA9hqMn8rDy3FEjqkYdAKKPks3fGaY8VyN",
  "key11": "4LpkiewcCoWLFMGRo25qCutCxAtwVY4RtBRXq3jgTxeH2h8uXvAZLrGhB5wGgciAVxQRhAfujPsbfrgWKYpsBifW",
  "key12": "4KoBYXiswzPpvr3f9enqaoEyB1c7q5C7o8yXez6PJdQFnmfqrUxA5wy8o6JrThnahtK9Y1WaF9NXfKGUfMhPHiQM",
  "key13": "2UmtAUBAsxRBELtbRnfTYRS7KdsvhN3UD81tmEYHv8AMhgsrvqbJri4BntG3iWM3RLLGecSiCajNxdEmnsMZVBLb",
  "key14": "5hZRX4ktavcu2YHhTXYBTapVq9ei2vp3vLJPewpXVjYVZfQKPhMhrc9LfWkBUYv1tvp4bqtP1KGt9bMZF5tB2Tak",
  "key15": "UKUqpLNAkgNs4VVbtFPQv7GDCAnGraSR2ghnKDBbuNyoH3rHWaHTVLNz6vZkp88vRSysrEJQ42CV4aDRFjGiVax",
  "key16": "56gMrNFEi66wW57k9jCDXht4wn3tueVdajfsDi898y9pCPNG4yr21qNKsTvP161K147LD3Nt1PVEezV5PBuWyu6c",
  "key17": "43iUS6q86HqCkMgcTTsnX4fRqDeGm2f4PRJeW796RAf4q7fzEwPCsY4MJeZRftCJcDXZuUoBiaMFYRXw5377Z75w",
  "key18": "aFmi8H2E7oLFRMPurupabhNohKvJ1zYxJYzhXihGqSTadC968UNwCqDMNzEvC5qdPcLT6Lu7dE1uSv9Nw9tbzey",
  "key19": "2pfKHUayucV518ptRkNJDaUazCvuQedgZ3RYpN8MtqHpR5qwRvGGh4eaH58f72jnk2jGGRUdwBUQBqLdZkYRBNii",
  "key20": "5Z2CtqzPJXA8JVXEuaNRPSkWiKya5Z6paAhWNT7DcHCd3txBYwB1Q421KQf5QwkQrKoNvcFKzAMo12KawhzF8B1e",
  "key21": "25aeFJfCpyw5ts6ADEEVHrLVdUePVaFT32wnrFSiFHSDmxEAX1EtdU8KzELUUi4joo6WPdmGqNGCCSF6bDTrtMSY",
  "key22": "yLtZ5gxFtx5MoJDvip8Ee34iMp5xN7NRgsggcXBt8NTkwW4voEfPkMeaRjo5kJwEsQq18b8re63HEmTjYnSifRf",
  "key23": "4yhqmZ5aSD5dzUgRia1dMbpGpcZVTm4FaeyVbWCREyCvHq75WhbMsrPwggNWY8HDtbYPPogJUNpWDHKvfcVFwUNB",
  "key24": "4r9qvy4cCY7oJz65Jtgr5HpLx4kD1L5ePhE8opkukPWvHvf6xAxV7yxz8XPhEi9b9uJbEbTfnsRsFBj8zWx2DVr6",
  "key25": "45MxyuYfdBZKEPu2U3YdU2bUGTnn6AfEqTqD1BvoZ5MJEN6S1JpjUvoSgd2LjfVMLC87gESkjUQ2LWFmmYT3euda",
  "key26": "4CnNi2GQ5pRFktkZG78iLzjKvMPwATfUWjt5GNEv1HyHfNiSK9XL1kAF6sNeWLjudUTgqwukZqwrND6NSVs62BES",
  "key27": "23e2SHSkoyKjXBdCdF1P3P7oFVtU35b26G3P6dzeLhxQy8RPnxy568zCxNQf2uCNXpux4u887VPvRu72qV1s6Pni",
  "key28": "2baCkw3F8KsSRRUz4dCLouvEXpWjTKjJiQcUDdgLRb2w5gqQ5e3cuPc1Euvsm8W2wY9YqmMfJnrh74TSEByvK3n5",
  "key29": "46mTFtz7b15BgxcJ74qKTmFcG9vFivBjgxvetSpX2gXH1Z28gVxqY79xYuVPAWz2xUHeT9jdFWufVCoo2ox3MY5s",
  "key30": "3NHFBY3LB4Cj6C4E88vWzGBt9Lki41YgXmaMGHQKiqyAr87cfphsjNTDHa1uE1rdweVDvF2fqSAtdpJrPqBsGGvh",
  "key31": "3BMGRDJJ3n91PM8raYpq8xGKiAV3s4hFVNSbLRuY6bk3kWkEYx8dffzvFtEnkJGDqtjopaQAmTVVEeahk8zhGdmP",
  "key32": "21PfTG6QYJuHLeYR4xHvWYim34d4SRmPB4bLzmr8n7Dfj6CoiXfgzdaXX9457vLMXjGBzvJc1xpvafc3QvWoU266",
  "key33": "58T675G43w8ttMPiADbQpRDeDpssSmZtUqyFdUPC7qKBTGQyyCdHWbjaKEJFsuWAcien6kdqTFgMSd7H9FjaARa",
  "key34": "th1UxK2WwUy3LKVv2GpcwsxuouCggakRtvLJ5VoXCA32GwrvzUeQ1SEJnVkydc7ks9P1PFFGtwuuyjPNjFkBu6Q"
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
