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
    "3TZ5xxmipsWpAYbU4Gp6rF6szZL5LhNC1bjZooR8wrtRTb3HGHNH5x8vJ1UfA2Qogka1n46CNM6uyEWBjm8vHsVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxzcrH2SEntT65ZRYE7bKUdZdzW79yCsZeE8EHipFaWh8j32dKm5H9jq3zvSxi1hFbinREha92ZEqzYv6yay9W6",
  "key1": "4jCgKNX78PWSpZSGAv73d3352wLmZHoFBv9SswSiFV6fxVwpTkQhq3tLtyJ13akTeUv1VqwkKNQXEYtucVEL75Qp",
  "key2": "4eFJDSd1XXg8CdN8JgAvZUe6V8isavatXgsTZtKKfBoYA2aP4B63jztmLifiaa8jQuaGGfEPjzH4qSYCL1cUX2y9",
  "key3": "fsa3Sc1scRQsKKRQwB6rHiDk9jfqU5x4CBG7RrJZQYW4DwweraHoXd45RFQQjAoDSDUir1ML4WsjawzZhtVR2a1",
  "key4": "4PD1L5tzR9i8adP4hLaYe13JETNHXG5vPyfGsX7n7p3RZ6i2cv5TVWTumnj6JAWddN3b1v1esEhenNmZrbebETey",
  "key5": "334etYSa9kZgUWFX3WKJx9uzghFQHmwZi1W3ywSENxu57UiGM3EGCabQJVKJKtv9C7nmTcGSV3QapkqttXGzdLCM",
  "key6": "3xHQbNdGxhtDVGn4U3UG9K1KdYVjn5681hVezr6H1EV4bG1xhxAEj7Cz3hQdcUf1D85D21jazddZDgxtAYHjyH7U",
  "key7": "5HUCXEmEkfJRVQFYWnFTKhq8D6gA6fG2cdSzbVyHf18s4CmwFJLRU5frHKQRu7nTJCLbJ8jz4emFMAzkp9vWiVvc",
  "key8": "4pDFR46r4GrAbUg37xdJuS5CPyWbCfshNHsC86HGzp696GSSyePjm2sYWTUNaA3B6UNqe3nrj68C4AsNPCay5qST",
  "key9": "5A88yX8vaUCnozBtRCZkEVwkZpjwNDDtKEejZNjDHPcjV35ze1wXfsxyebSpWq1986s2wsX6ZnezfVtSpQ3NPMR6",
  "key10": "41T1MRmJeJ5B56c38wHjgC2L23udQX1zYiBVEn29dGuRJji6AA6UW5RZobN3CUtnyMr8LDHjhzcuTz6iTE7AEXWi",
  "key11": "2vuZdGdhN27Qni9oUtSKxKXKscYgF9rTd8aRimHyRw16Dp2zAno4W1W6xHsMjnPWWw2vJgNLZwtiLVbdtinpusxx",
  "key12": "46k6PLyBCq6i5pRdbmvpx37fgjDwQouFndTFoUJyRqUSJaW7eh5FJHJdemnc15N2K5XSMUh1nXT66ieotPhuRvSj",
  "key13": "DeqPxoH5Dd7gajSvmXPMNyKB8BTxXQLWWcUiaUA3A9Cqyj6X6YUegDTsDS3vr2vR4zYD6ZNvFCnkuKBcaoh72jr",
  "key14": "yy1Xhvw4GdynapZ7oHsiVXuuwxvcfejLRGRTjnRE3rtUMGEp1fTrcsTrFDA1hnfHunAnAaUpW2rcBaWvAfHYR1V",
  "key15": "2j2kqT5nBaqoZhxKDPMv6VmSMu9huVBNeE9Gq9xyyNcaLttuNuGyCaX7zBetVDnJ6tUvhgAEsqzQxfPJ7MBG2VzL",
  "key16": "2pA82HXayYhZayG5oofYHpEZtwQ8WxEwyvquNpztu3uBsa4nmCWSjWHrsS1JZGbPU6dnq6Jkr9FHfeaK8GyVWHky",
  "key17": "67gGmxxNCuoznk8pogvgXE5vEz1gQHZwEfmYL3w9UeYKTmsJCJkzrQBR7aM5Mcm2NHaQSZf7Q9ae5zerh6ehkg39",
  "key18": "3Liyo6tVppmwEpH6pZLZQTvGBD9xspkRCC4WkHeEUpiRvfcbWSENvtzgLZGyLKbkL2dTf4T1j5Jn2yAB5pdY5fmE",
  "key19": "Vu7VVVnNwWkRWCG96ScvahXF6cn7TKBwEwnUCnL1X2XUUuKDk4V1pAXyLGsHbfmtqrKkRrfwySG1uvNu85GgW1f",
  "key20": "xdtzpyEE21hQTsqqx2ahZ1UatEYUhJr7mH2bt4RzYhosSvr9iZoo6JnfSuZtVf7ygEJ6hadcPYDU9sYdgfpdBWM",
  "key21": "JesmfGuDdHHwRV1pvNeJt3YBpyR2kkT678yRkQwfny6inNVdBBSFv2KMDY5YdZX3yF2y7Fb4M9kAqSotguiMvVr",
  "key22": "5jwFZTS1CE1wDWFyEPEp8qKP7JnVqfYy3hBu1zsj8cGUi8deWgvCDpxf1i2Vp7AGiR8YpFbg552egy1mL9Xeoq5x",
  "key23": "6tveNpBQtQ9bGst8FNfV3sdjgHiTrhf8FPh9JZTgZxNxnkg42nebtVzfoDhATmHFdyiBPE9VPquJmSaRRJyYthc",
  "key24": "5KUYWwCNbdotxzP1WyW6z9bTV4SXVGmnuS2bXv6Mfjj2BKUe6csZ2qoBKsFpsJyjkYxpCnurW3k15asFrs2HZgNU",
  "key25": "36gNPHXpjZAtnYaUp3aKnmXrbhpRpkXkDCV8viVjqbXL5ztHctrmNoSmcRnZAp5u8SpUTZSQnaTKuEwU1guau1Pr",
  "key26": "2vEcCxBE9MW4kwiGDjupWawCjMd9QuJUPwkhnyTG1t6LLyxEpGCmgrjsVeyikb7tXd4WWK62CYrgw5npqyJrPcwo",
  "key27": "4DUTiDjtx2QDxMb7c74HLA1VkhZkP38NxwysaiY9f6PaGBqL69QgS492e41JyHf2FDbcV36EwtpAnkVFbfJmHJzm",
  "key28": "2keXLENMwYmys2EMW21H1vDzzjPQNWbQ5U4dUzg1dDJcQf2Kb4mGFRHSgd6jkWZd4SL8kHAAgr3x3b86LV9ZSHWF",
  "key29": "4ynx2y7kXD2LpV3cWWKmyA8qDBQ2seC4t3FYxwQDGDBcJn3UzJKdfky6A1C3DV9H1ywBZ8AZvZ45sYkfhZP8Dsaf",
  "key30": "4CoyPNX3YRgTisfS6wHnh22TLyVbKeEr7Xz4kombZhoX1NTyfwrAjkN4HdsLPihgS5ZWDcuhfnZjD6cCnsjXPdfd",
  "key31": "5EuJ4Czft6cRoXX3n9aSSVhn8dZATT2Bzfufrmi2wn12dHoZXCBWvFKvPphQ382EDpWMXoLm9bRcti8yHMPeWBmj",
  "key32": "5NgWUrXSEKyyhzgax7EfojdQRPeGHisndzVRUd8nzhH3UGZ52ixqw9rzqJx42pwALMHtgRYsiXxz3mbPGXSSGsWV",
  "key33": "5ibhUYnDtKBdexiJjqXksDDKecTaYNtxixuREcHGgrhg9ozsFPjsaRioGEcEiycSN8FgYwy81n9Y21sVDW5WgwUP",
  "key34": "5Hk9aZH7VaEWdio2JE2nXTNDt7s11WdpcJKwLbGNwKZUHESWzEMCfArAGFMbranNbkJhjhPdMqdQ6ehM8ks8A4Cx"
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
