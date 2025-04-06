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
    "4GdiCaLKyXsKp4tyzbxTJp5iqSMLEtNHv58khsQ49hG7t9C2g4598rig1Eq82w3L7kp6wfhTfhNDNxn4cRadnGPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYG4SXdxLMPrMaspuhcQ8ZuT7g9uPg6f9HwJZtrmtxePRuSc4dN5x7uwDkQZw5SLpyQRvjt9xd2PPZXcVzixh22",
  "key1": "4baqqqPUfEUoqyaU4hYPoWxVq4QxueHooJzHbeRaw3k8zAsbXSK7qDqdxeNCY3Y1Kk4gQ9fmbeTMs6GDhGRth2aj",
  "key2": "2pmLWZtuD4XdknYfnneR6J5buZKgpUZxQK7RHs2WfJ5SrJAjmnF4XZsLnuts33AjLg3s9PGb38iW4Rwz3YbwtD7Y",
  "key3": "33aPjMx7UQ5Fngq5Sf12Ha3gPxG6kEgg79K8yKwtm7W9RrDZC6TReoruSkfpBWEgKYGvytY49a2Ak8QhxdTwTJor",
  "key4": "f3NgPettj1c6bMSkkjr7c7Zr1xXoGnBMCksUXnq2BMnUXpM5pPCSFdDG4DjapoaV9s1g9MAfiCwoVZtzuGi5xQR",
  "key5": "3bq1pe5KNb7YENwHQrhxSNZzi95em8UK1KMSLH6NL6mc3G4y1GtpPuPaL5yVinnHANDfwQQTjjaBC6gegwQQhKgX",
  "key6": "p3YyQeDK6CqPNmKh76CSb3ZFrHupfDhTyjNA7QpmLsRvd8nqyM9vVuyZkG36wE8HDLBLYryk4kybJM7UkX3GeXz",
  "key7": "QbxsC2uhM2D9VnyD5mtHvNzzaJ3wEhQW2baT14KJVmMf4uqvj1qk94KjdbB3vC9bKEZqAeLpdconHPdajaq6dVU",
  "key8": "4ZmHY1Eaf4yz4MukZmM6eSZRb1y2m8a3B7yiaM6n1dX2h7yUw4rjsBDrBHLght393oUuTKVZTTAGgWQW2XwJGadV",
  "key9": "h8Md1rb3spvyjKPoHeSYB4JQcpUMvuZ2pW2H4yibp78ZwQQrTPL3Xx4R2nCGvYobaK1KTEHFJc63UjmEmY4sTBJ",
  "key10": "2bQtuEeapdixxexXH8Uz2hAVnfqc3Z6RHGMU5brfh5gYkUVnDMX2zCQFb8UaELhcdmrN6MPPeiVQy3i5aVu2u5gT",
  "key11": "mbCDq1X7yjk7W4s2NWLK2HBGBuzFfhKmrwR3vQj8LkAtpjUjUqKftqLEyw9pM9Se7dsub4BajQyHAZsC4k6FQU7",
  "key12": "66ncuhexCF1rrPc3EEMt7wPZKoEYfxi8NUCq6XXdrxqqt7Z8pKrgwUbvNYEfxf5eyc1ntZoL4xPGuZkUWTA4MBg9",
  "key13": "4ub6fx9E9k5y1vPqBvVc8sboCpSGNMLuFzK47dMJFZ2TRPFzydmxfkmcz8Gt93CwUVSenCV3GcRPKWvGCtnGbYXn",
  "key14": "aCMqisphciYCKpTJLQxWTpiezaM18epq38ZjDqShau388ptvjgfUtjSXautn6Jv83vfPqdBsQdA627dvNH1dM2h",
  "key15": "2vzxHS44VtfUmZsUmgHXtLBukKtYXDps76FV1SB9CS6QTRZrHpgYNRe3zrp1qCyGpz2CawZjBwCFSkqVyNMYyNg1",
  "key16": "3NPwRG65RTK7rdzf34EWSQKUJy52pdA3RArCRRQMCa3DbxQNZLcNmHfBZo2cpVy1hnHomKgXLG1gsURdABm4yjWT",
  "key17": "5QETFuKNCTo1X6PJuVs3t7JyrrEYft3NjwLkdpxfn5fpf8pgSupdoTzQvFLsZZsiXtqx9XPz3AMpcoTAvsu8nrAW",
  "key18": "2or744FNo5oVVxJxdZnsomjcKTxyVJWC1MU5hjqgT4VSHfANNjrPoJWzeVDT7eSC6MPD2qqAF3gSFKQTdQhaHFhw",
  "key19": "4XcJcbcMJX7pPFTZL9LcL2AACCZY5oBZ5mhy6zgDTyuhXKBhXy9eFjkMWkWKEcTDt718Bx2xR8QcQE6uzMo7pc4v",
  "key20": "i4cD2tQYbi6gbssPufPtxF1oxCC9FsiVew78x1XFQiykJdXzJ7WyhXPKvmR376CmUos3s4ryTw8R8BentTcMbbC",
  "key21": "5vavE3PnsAagQY4D4whqpBF83HtjuTKkFn5mstFHTybYLKfMuM5v7JyEhf2sQV3Cz34DTXrvoRxtA5UVukcGXGoC",
  "key22": "5dUqpDB9KCHdQNXygZFcBTirGhRG1f1or9gsD7tZa5AUTJLxV58kGTTKeC7KgrzMZwQ6K4kB55xJBuiDn3CxPZNJ",
  "key23": "52df8vwnumMThKMSQyvHPaaUxcMRqJXbZJhJgfEgtYEfGgJQV64cJroukcxbgfccx5qP8nsvtw456iYLhGwJrxJU",
  "key24": "4mSnCfcNCXjCfQDvVdoECs8ycb7Ud9vTJUA4xMwddawbccnEbbbqjm1wvhSmGm5z9niMBqM2WK4Q21XqVpcpe276",
  "key25": "2LbYatiVmUkQkBQ4ATg3c3ZGTqiXpzR8vVMJm4LWmujTYxAKGDKdwjBdQxHP9RyYxLDHprS6i5xUif1y1swJshBn",
  "key26": "CRhhV9cQw1LfMmGz6nLYbjHpdar8kZWJ4sUGaBZc9KhPVksHpziU7KpNm5knkCvLN7isNCNQYTkTVVhgY172sBg",
  "key27": "4ZGtMgBqydc6XugsU5AfWvTUJkJ5ZsEb4NU6jp7XQarMaD4LsGUP2osdodwk4xvpNWLnQepWUwy7kBZYv3LwRUd9",
  "key28": "2dCEUEmRA95TeSzdQfLbFNHVdVrYZqb6U1ziq6DzkosJE7wMLdgRfxsnC8SdBChK6Pv1y24t1DPVXCZvAxqgYQPB",
  "key29": "44AXwv3qJjHsZGfvpzrfx8QaD2NBRr6bJscKsDgA12qB6wP48C8zbysZxnY7XpAku3mDDUexF1we8AsQDs7EJB1u",
  "key30": "hJvWCNGPdeacHVkPnpXXRagjjpzcBjnjX4UyxC5EQQEQFe7oLixE1EyvKe2up5jFKetvi6xTh6QmARMTJRamZ7b",
  "key31": "2PuEUdoKgC2R59virfZZot1dCV7Wg7s4qQ5Ypb1ZvmaXfUZGew1u3gRP24TEudcztDGjXG5YpFLSxUjQAfWJUjP3",
  "key32": "472w4U5Rv4MA1sMTb1RYsG4ZNDKfjmukPFdvfZYXMuqVQXJYDkg6twB8vimve8wBh8VHsHB2nrs1yATBPVbq6dQE",
  "key33": "V3gpWriFrZmxn16DWSbhk3zAndGDFNjHU5S3V4Aww4iguQsxNgsHSszQuKmDPyY81VuQPDeRso4RmnLV3E3zDG7",
  "key34": "WmTPbTqmYPVkcw9MkhQJYVTnU9B1PyNA4ha1oCzA7VbfUMS9c7VJjJvpfijcsVZS2ptFCHecNMvsDJsz3GmVLhz",
  "key35": "5V2t9r4j14XDgWP9p3eFTzQc8NYBmU5pkJwptjrsgwxJVXmUJRqJTVprcTyYUf2QKe7E2MYPuKTbeks7JJgZCibr",
  "key36": "2ESYTFjvzjsnDrvihSKn2VJe9bHV9bKucxgfdLnHwWU4vchzXdBZ4hasReaaD3vc1gRCM6mzrUJe76SWAC4yZ149",
  "key37": "2rwngBX8GQxfbbHj26WosQCR7DShUsiMkvG16KwzD64p3YmRDstcxY9LAmPFBcHWi1dwN9AFNXBhusjVezKwvv3p",
  "key38": "BiHkG7iEpJLFDnFoUf7Hc48uw6k6vhaDfehqm2hGG8Uh55We2dR3MkEsS4VQLA4ikDdrVpZiFG7EAUHnsAkbHdW",
  "key39": "zpXZJTyTLL8Z2w8oudVdNbBq3CXXQH6CCXFHWRFD86ti9N7NsSYjjb45rKK8ymp832QxhzLoanxe4uzB4qW47Dg",
  "key40": "5mTQmmCxNEWVvb5vaTxjKpLy11D2yijMbSoSqyuemTAeAYcj9MBAdu8TxQfBzwqjsJsMbHt8KJmYCZL4MWvw9jk3",
  "key41": "4rL9CePPLuqpGj14MT7U1bkY9Hym5FX4ty8zo3hVv1YUoCsKHvUT182SEuozeJv7R4EKD73d32Lz77LTn8efRBzi",
  "key42": "3vbEEwnMwX7kFUy4rYBN2VPQXqE644kTsXARb6saZ1NPm7rjuXUHv6pyCmxx72dpkMxed8Pa454xzKd4VLWLUira"
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
