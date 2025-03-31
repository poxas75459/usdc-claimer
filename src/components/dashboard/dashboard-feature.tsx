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
    "61Zg4tGfNTGPpzNKnKfBp7x2voJZNJ64bsZzESMvKeteYJE8ak4dA1TGjtfrusJ8on6F6a3gTyBBpv32ijGZ2pHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfXYUGXB3MgUGXDNquE5Q74stVigLSc7wRMEzu3SHv2K9hJGdDKMRAG1iuCd9QApioaEfki7RTBxrtFL3Y8aF4s",
  "key1": "73dsZKCv5vJ7cvUT9SArm8t6xw8Qy7UPngeouRBmpzLT25Z9xHsj3u3XdJ9MNN9P79Q64kq8H5dC13UhH5mg713",
  "key2": "4z8LbcK8taGE5diR8eZYgb8tiYJ79os5xeyPFSoajwefAbXKaf6qn5USqyceJpGZ2YKxb7zx1M9oEUU7QaxGzSPT",
  "key3": "314Xq16qeKG11TFho6euPccx6dQvV866V73gnprUNeoiRu6GYQYEBoqSPBo2Tz2SnpdjjrRyRDs4e2581EhmC2vG",
  "key4": "2h5Cp6geHDz8xDuWhspGBMBfPhgjx9G1J3kCpfvL2aRS6pD9jS96pTXoYGY7ktsrmCuyh4y4WMBEuKza5AJTAdrk",
  "key5": "4sHJSJHGsav6d82dcL7fGyCFwvdoJmeLp4DLN4YM7A1n4gD2oZuk6HWunvv5Yj7r1vpkMqtG2YewtaZdjguBwpc6",
  "key6": "2RmUWwvHdoasSKh7URYccTjbAWZf8VGyTtndzTw6yHzPwvdw43PT2feBcCCAspX1wnU2UYhLAZNSpvH5mdsDVPfX",
  "key7": "3cCavS6G6z2VJQGRzh4S3juihUb8Er1edEZs1UaLx3FietBM5A7Zhub93aBkm66ABH3Gt1eGE5oAXmhx558FGXri",
  "key8": "3BmfQVYnDWQDEQGYvFx4383UApxuxSaP3pAyZeEHceqo11oSnHM8ozqW9JMuQMb8Nvb6vagnnqvYyyXNJM7V4aLL",
  "key9": "iqWXz24Z3ExgoAfCqWdSwqCue8gVeEu8YNZvRMhJUbqW4XNd8NnSXqToX5qtNYi7v7iECGYE9sMmyz2YQHBEexR",
  "key10": "4vuJwwjUr2oEj84nExBGUYbdRQYuZc2qWUWunACThYeibrzmzfTMiH5khQDbpdqHXPCdvixkqzzgb9bhTCcEmAag",
  "key11": "5yE6XmFR2wmq7qDm5h5KtdUtesgHnYddF4CcVEVbqdfYxnC1GDtSCfKc6JPKY1kfPLJK8bEXrZNJU9oSYvqkeEni",
  "key12": "3WZqSaoZ8617B49FUo7QBxKz8YJSoLxnAJgqZrbzQnc1RwHvy4NnDH3oXRZNoBq49Gx8UfVww6s1RTWytRhv4Uvw",
  "key13": "37gVPWzJJzadRUNPm13yzQ4TFV5LEAJjX4wkKAB5ZEA7Hjqu1ha9KAZUEZbWuFFpKqveZ1sMkRUqcmKRYnvWfXAx",
  "key14": "dNehst11WEthpawfNUWm1J9BwUkhJCcJcMpP4cKrPDFpqnA3fuKAHFBEqeWVqqhyfHxxo4kcWYY7BHJ7uYi3Yda",
  "key15": "4tVTMdnTfus8StAmXPoTiXPtBWoQEo9PFg88LFdStoHex8oneT2TVKCZAkSZ3iSQiu87pJtFpUCXM9oqCLxiBLei",
  "key16": "2V4SFTkzVzJbEhhGnNfxViXsv2Pxi6nbkxDs26ienWN1dXV3KPPYjzkzykPovqjcW3qXCxiiKGJoXmcCHSb9vDST",
  "key17": "2ZVT6W6h2nnQeRDCzD9iuxUqRnFCspv6Atx1NYqkbMxVCpKqv82rxezRqFHefRrq4S9zmoymU7fpPE9NsiipUWJZ",
  "key18": "4dkXFxxmxuHrSwkDqGobkx6NeHUnCKGnjrP6uDwrUsrvbzeYJNH6cE57nixsbwv2HA6yU7Azca7QUMBZUR4Ph1tz",
  "key19": "4vkVBAuhBC4ByTQ5PF9ok4K9snZzzY4fTVDSdpGKYF5yEp4CwGedUYXr6ZmsQq1hVBZSxtLvY5r9koT33TxYaR28",
  "key20": "4hsuqwfpNE9iRa4KxqKmJmDkruiDdr1xrgbkPkdD59SpaFV8PWv8ZHVvaRjc9FmNJfxHo85QVfTQk5BqZSEjUG9K",
  "key21": "5XFoCFJrEMSj8RG7TQHsqxHYQFRB1GD7sktEoxr6Wu8gXRtenv2S7Vx83BN9DJT8T2936JkiZXN75csyZY2SzSuY",
  "key22": "4s345wb1woAJJGVZXTvMJYUSxA4WRRvp8KcyVbtXUK1rDL5JaxvE4iMidUL1npDbpQ1wWTqncB1YMEQXFh8JyoXr",
  "key23": "4SpdUbqqiwQWiv82hnVuwWf1H1jSgUdaCsZFRoWEKMeEN7kYkTrUV7MGcqUjPvhdVK7NcHP2SpVwQvbnhwPSUsWH",
  "key24": "DF5hpVW1WyiTBurbaBMzRMmdYEFDps1XQvWZ1TqsSvYBe9KYUXEWsypKGF1QsXRxVhHrYuddsqXRe8T6iSaLZM5",
  "key25": "27nxMxRstCV63qht8igX8E4yGGPU8MgCsq7SwPPBTrNJ2QvUR5NmdeW9iMGc4rhKZnjdhjngNCaH3QyRSVkrdz3Q",
  "key26": "5hiWKka6GAQodBdU6SSBGzN8V7gEVbQt8vbksq8DVzA7Uk1BGWnYzzZ7CRydhXx7JzA8Y8GXwxvNfBEk3xLzbXnU",
  "key27": "4ieZcXx5WQnowgUqz38z6zbFqEgNaoKEkQYsxuWhGUgBAoeLYmAbDvmFC9dTM1JNE9CwX72fpr491a7y7sjPsVqm",
  "key28": "35p55bxkcZJ6AGAiEXfta7SSDxXnWcWpYBcsM9QSuvqi5JK9BpPf1CsDhTTmi1RbkuUQfT6BR8UADrZWfoeXs2fd",
  "key29": "ZYJugBcKzrEiBG385zD9gm2f2RFZVrzbRGEfqgtsVpVTcfKmgYux7CfNFcwTEjek3rygQkhwHY1fc6qd8nPoeCZ",
  "key30": "iQLpWXhmahfm4yEXrgMRaftvRyVY7czXVKe2C29bDKxkMbhMhgHReG4ZgSaH5e9EmtnhfQraAYVqyoE5gLti2b1",
  "key31": "4LUyqGLg7oxaaELcwpBXQn7vA8q8XxUVkEZ7SFFBPjeHgGbo7EfBvv5xZqbgNSLrCMEcAiLuZrWVwoj79oc6CSX2",
  "key32": "5YR9CGCC5MpJUCcneNpA4a3SAAebxckRY1FnydRUDjBT2LnUaJrrNx13VjSMifVCKi9KU49pGni3HaR5LTPvrYz9",
  "key33": "4E8A7AGuKKBaGrySxK3AuVkpK3FZCdL7T1koBSjsNidLtosxuhe9j5i21UYc6UY1QXvq96TiAX3J29JFatLvvKtH",
  "key34": "2RY8njCYPinwi37SkpjQXDmhSZ5vsuCg4gToWUndW28y3VkRJ9dhUh57ZziArFM3AVxzjadxKRXD53JcCP3Rzf6V",
  "key35": "Esk5DDhJXi5viZGxq1xEvGua1R1PYeMxBZhVACV3PjNGqq45oE6KxCT66moEYKgMv7Sf8zDWP4awUXK3kkvJQ1K",
  "key36": "3wTrffXvfEXebAUtmFXJ6fjvFBJrmmec2zXhM1G2J4BfsyVRaYX3Vw44swGumapGZi1EQUsAR6Q4Kat7XFevosnn",
  "key37": "5KWwfM2ZPQdrb7kMC9zGAadVaMXWvxRJHhVMPu7eWoaqHfSH368TB8zXrAaQsex6gxNUBshngG6bvZLp8uXgehg1",
  "key38": "5KjrGr2JktvLEsFnkt4ctXASQ44Z9c3HsXmMBBsiFiMQwaPkKRBEd9peirZPeVBpyqDgouvJQ5qBj3NHQGeWRmb2",
  "key39": "4HZiQC3xkgAmCwVxY7xzwDxnN8nXaDJiPE6HWT8oo9qC5UmHJWVA3EbPzb5PV8FgHC5wZUZpEdvS9xVUQBWVJYWK",
  "key40": "33CD8FxwH6ngZ2vW3Bx5sFuacEBEkxNoPcbiwEKSfEEo1ruJjLS75uf6sLWG44PCh3jURyGuMhpTqLefx3Eu9EmQ",
  "key41": "456ZMcMa5jkS1rQcgZXs7h2tLoSvbS3vhiLeMVUkRVHydmc5BFQxBURmPV6jDfSTWtkCtavhGGDukdodYHPN6mom",
  "key42": "2LdN3x5CzrvFqsxMPPbw4oCDZ5fwHLnw6Ery4s7i5Z3yqNbxcLTKYyuwuweusbi7nRKmRu983xYJaDWX45E68Sr",
  "key43": "Hs7XaxCoygXHuRXCw55hfRmV1Xe7BhZR7FZ1LS1UBhxcydD4gcsxXemxCmLEncQJPNqrSwyJrSaNGaRkAHkEkqA",
  "key44": "XU3BUsYtpLdP91212ZWMQWo66b8SR8K3ttcamWvbSG11pzy1DxDQAHUQRybqoKKMWXopoRgUMzzyFZanrpzixzi",
  "key45": "4DQPRh6eNTnw2vPK8nsbr1Pz6hQMexLpYRcVaqexzfjAGboBHi6KRsVL1rXHjpLwEqiEz1uV9XMDTNHNTdxAwkDV",
  "key46": "4UfDXR6KxZjnFUyHQcAssDGFrdZgW6jyXKQFm3B9XUSu247wnvU4k2BYF5Q7DGfoGq4oo4cfbEPHuyZSMUBjTzud",
  "key47": "2wdhTDQ8PgeEcPwYCvFiH8SdnJA7aeQw7dkaKxwT2p7VDzVXPrt4DGDmFNyg4whRfXYi4AehZendnPzVphBj2BES",
  "key48": "2BNW6w4arMFubTojXAihD4o84r2tXrYwJsm3KCRRCfjT8Vo1SV8jnrvzGVeXvBHWciamnAgqzMs7FP7Ad4XP2bZM",
  "key49": "5ZgHA9jva17EdzsDQoTZwTGmMQdUQMvyTqd4S4iqSDTChoxUmMioiGWTXYTSPgQ5Y2oSM5YekTe6JZ7o4ZG9PNKz"
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
