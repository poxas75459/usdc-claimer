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
    "eEGkfJvZc94QEL3kx3gZ5CH23V6TWA9DqMfw7xs3423gRmhTormbp1roAonBmgCDAGvFtdHee6UnNpFRxuTAcpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TfQC7in2eGbKNSCshGd2efwTnVfHX6U4Qq8Z8sSqnAfajVPP65LaBfD1SrdgvNnjnkhyYrw1iAFVkA4sQCN3tY",
  "key1": "voKBDfcK9fTF3FUQX67U4dAnvXMSZwGfYVrVN8XLN3JFTXiFAFgXQVMBn3TvFa2v4eimvMDCEDaN4yDpVXexnYR",
  "key2": "4i4u1Dr9ALho9BSRhADqyUqmGrACFeh1oGDeLLeTzzKt1r6YRtUo5ECFLPPrGuBWUSraohkDsLxju4SjEqLCcMKn",
  "key3": "3t421iPC2KKbrXHgasdcTt9anYYCSYkAp2RfXaXmX1ZpcSyKEsFGzDxf4Bo2RYwyUQwFL5qukcHeRsKdSg19cybo",
  "key4": "5wQzCjTRJQsSDFMiqxynz6rVcNhqjXPa31vGnXQW8RvAvbeJZrSHHFcV7DLR2dF9chM3S7T1Mef5MYcCDtUzxzi4",
  "key5": "4oCK9Dz5Twi8hEf78ns1KoAe9ZsrE7ZYrziykaCkvVXham1yFyg8NF65eHkiMz54rW1kPL7AkBzQXnYWv72pwqRH",
  "key6": "2UPQcmqESWzQxM3Vxq6cNCKETwP7MYFCpr8ZPYCmg4RKfwFgerR8rYZUvRkHGwt22VDx6E2A9VjbfZC5VwBgUyCw",
  "key7": "5RhAi7WJwgPZ1rTRL59tbtzSEFw9SnsGuy7gVhC4jrngcUrqYTHcwqqy35hkL9shdxaKeX4qih9vDL4K2wx8txnZ",
  "key8": "3D2rEfUqDSJm9axPk5rJeTtjooftBqNwCjN4GjXzCiHtFUAZNymjrQecHxwygWESCrZcPoNUxCpNQXkTUAVZw165",
  "key9": "nRtgZrvfTsktphhmBCmoGGhsevx9v5SEaCCFXNkasM3ntihqxMUMD7URRFpoMPtuEPHK98nvM5vPZ8dxmy3bAMe",
  "key10": "aQhg9W828vXsDQZhXB1vsiz7W3KbgCV5yjXRoaxN2Rac9saqGqA8xuE5JRAL9cmKeikkYcxNowBkutY9DSWDnRp",
  "key11": "3TddKYxWDPevUzZwEN8ozScLbaWSowCEmRS2N5ryEfPHhRT7u7CuxpZ48KhapGZofeSYzdJF8bK77N9d4VxUbLJm",
  "key12": "XWfww2dodrVGNwm17NpjNKR7Tj9Gpn8ySdmFonBJ6upwzK1oc3U9iUagCASCp1paoBnHfEwS4By6sjExAKChtXi",
  "key13": "3qUZajTuZvoTfi3qvC3jW2STHWHRh17Lsii1PTKCmSDmkSQtJ4LPrfvYhbekJQDNtkV1bAEnUpVpb7WRU7WjgXyf",
  "key14": "31P4T2edeq3KEKjmyCi5axUfpGKebWoLK7w5RYxvVu14RegoGCf3Uh8HSHxfcq7LyN8SGKBGtGKXEYnxGKNKmgv6",
  "key15": "2EwjgqSBc1BanuiagSmxEVgycLeeNr7nbVnc4XiyvJamjQoZGiB3bdso15QuC3aUYV8EJGieEtk1qeDZH2VPAor9",
  "key16": "4VE3h8C38toY51tP8MX24CZLNhq8XwzA6DAkiMX4m6bjKwbwM3dN7trBSZejAcbHCscECEDkWq8hysC62J4TYrDL",
  "key17": "5hR1kztHa5nMdtq5SFoUPjY3Msh4UCLQv3VQf5qsuZNBBEnGnR2NmkNBCrJj5t599g4zVsugVHUTMYLGT4vnN1Rn",
  "key18": "5rQhbDfgCLw71m9Mg9TTJXEbupaHgb2Js1ALuoW1uZysrMDnFPK7tHfetTaJEFGLASXUKGAgZ5QWM7BVJLCJeSNJ",
  "key19": "QfyTUEJ8Mqmc5esEi1GGzHbAaDviZjHmtiDuBWJXFXNCdJ2JtKS39Dd5ED3z6xTJiXGVzxuLhgaNKQN4uoAj2Vx",
  "key20": "3ntUmvoygmt1oR2W9dEczXsqRz26wFHGNwcpfeiuK7rMA7XXaVULsRjWKv2gxpZD46tu8VxxFfvZ4Ky69dzFzR9G",
  "key21": "3qhFxzSYLNxzUpLHRg3MuSiohTBRygUwaLbRR1ZG79mBdw3anpxgqeKFbu2TwWybrDDhx4frtVKF52xdQ5R2bmHN",
  "key22": "ZFADeVw2No5YHrf1eQKEhxUGQjaLHBxbd1pdHsuRXbBRip9XFbnCFKoaL7ZYRSPwKn2mQsFSvMcuf6zZxn8r8sF",
  "key23": "5orzCHUpqsrxWyHqSGGAZTCrXbmTzNbpF3LggvZbVj3pYY5XjHAbDy5CDb4nTYfogiP1FuygqoLNPpgZBsFKxJL",
  "key24": "4FXmWhEj92wb1cMJDVmcMY9ThYe8uH5LpUVaQU4Vdxf7rEW5Bfc9tTzb2kQtxWgi7BLVLneaeox1LrC3ZZH7U8qR",
  "key25": "61NfDVG98EXVXBikvnDrNZbV8jPyF1yfBQpSTUhRw9vvjrfdvNSpL8Ar2i7WVrcXfR8MfJZZRB2MCcf1PiTdciY9",
  "key26": "39MGyFAJF9NUbsFJ4i4TDaURpDnXfFRPfNzYamoNnXg9WTbvyX1mqxSeemMKVpsc4D2i6sTZqCh9KKp9QuUzNEwA"
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
