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
    "5Y3fXTNYs9fT1G99uRf8nDRbLy7q1HqNQcRpQqiKkfcuv5Bk3Esm4Sf8eBZexKbgDYXw8wPhxz4n9ZNenu7jBJtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bEL1gD2jrVcE3TH9PUhPgka5sHAnmd4iBAuhQ28EjAn91tTYzMyGHTrm33ctaMQE6ZLEwS8f3d3B54ruhveoLM4",
  "key1": "4nHxWDkSxR2SAzckp9g3qZghbzDivGhRuyMNLgqVUvyNXWEdxLEaorNL4sEmQjwQuNHfHBMBT6eRrSzwVmkdJa26",
  "key2": "NFyTZdsM1Xy9EjLwqUcoaHPEVFX9zSSxiK8cJw2rBSTZdHMdsavJovrYA9PkksvfFB6tXQz2BRzHof8Bu1iv28N",
  "key3": "2DkprCcjYQV6kgiAth4ubwzXMenth9yXcE7DyHouJqrvdBZMFG3UspiPGwBAdH1UjRMsYpA83Fnr38Qjqfd4SWhR",
  "key4": "2GTjsz2dUGByHoai4R3Up5gcXNmi2WL8WfDrwFK3NmhD4gpGaEuWkG9LTFrm23S9GUaLhTfUDjguEDMBq7J2mmhc",
  "key5": "54rTCfDWPnYBcJbkZ7hMebcq8Zx5acfgsDJ9XkcXpSicHhXaySB4xwACBH66nacWozoj4N4JBJkc9Yr2UPtQuU93",
  "key6": "2XR5Docivb1XaghRej6qkp2Mh1Ub4dYk7iwMhJir2oBqSHkuiQgipqeuVHrRYKKn171cjnhZzWx2Zy1kLzzcPfXR",
  "key7": "53WCvXikprztQcSvxS5XtaKbsgFmdsXuVJC26wRPDeEMNoapfWVYKzUZka4bayocoL6axR3tMkj4kKusZ5V5yWm1",
  "key8": "4yu3SL8DqYTfnfoFQU9xtjDwbNtrH2t8w6JLsJhf1B41aKYjskPPYmP81iGwrDsN3f5XKdwmo4mqnAxgfPvCTcYB",
  "key9": "5GptzeRGmnYrQiynpYdyP5TD5LbjZonzacFRNXzvaYfjRXXh6Nj5fjyg64Bdnw4h2r6pD9DPicPUDg7kahejbCau",
  "key10": "3aacLUgQdavse5ZsRBaU17f4XCBnL6Sg7fVpAa9Ph1QmwsvT1vAi4tEozK8HCZWyXzo9MoQ6A1dvBV9jSQy4yYh5",
  "key11": "uNaJ3bWGHCTZBmpmQi1FxjFd31TBvjF397Vu7W9Aa4ieGHgJdVuhYw5hWrrWgVoSEf89Xr6S9eLYNU6f3gNydo9",
  "key12": "uaFJBurvcvq1UwBLRo3VqRaqhPSo6xFsJxkc5gnY5PkE9GULXT26BSWwVEWweCfVyQMDKfXFZyMBG8PgkdfPtUx",
  "key13": "3bSgUGco81SbYpZ4Q1B6Nzo8LiLBWrCQY6An72AW4nn21UGrDR5qxStoPnagKPtjJoMbQRNTynjP3mpkNEVdWTNt",
  "key14": "371g2BTEAoAXhUoD3bYUHLndjGBEpqmUPhppTehpvMMjzQxqDFvbXWzWwAr6rifGR3gtPAj8EG4nYXs7KzCjyCo2",
  "key15": "3HFRyxnTZTkNHdXvPa6RwTzgbB3JHn3mMwkgaPBTZWPeMZaCDt2Zuz883rFAMYa6kVNqQRLoRT975nkuszpVZaKK",
  "key16": "49QkLpEeCHEFw9FyfpAhPFFY54TQcgVN2banEqPMe5YytDarRStQhQWZeDAVwxquPwqv6rXZQ7EA2gGS7nXSoTRx",
  "key17": "2huyzVu9fiRXwNjs62VTcqsEHV9hECpLryKQdkUWzsbg3osy7ii3Lp9X913r5W4cNARHmYTqFCjcR7pNruyy64Ds",
  "key18": "4C6gZcPZeKq8xxWHtnkrHL24V62DzkGEe1Yaci8nXjsEt1x1tmUkouJw1U3gmBFHFkAB9QdufDStUzm6P4LA1wfC",
  "key19": "Fkg2MYoq9SmZHT5dMAPkJjzk1JQBLyX8kyNMDn3TRNezyF62FHgBV4xtj1v17Yf4wqUnfQZgUUsdgZDnDTrp3Ss",
  "key20": "4cia3akto12ZFhtGTVnL6PJgf6EssY3ab3xg1LrQTDdJeBMiKHKQs2pcQomWN58CnPC4cabGkpt3PYyfT6NB9fCV",
  "key21": "5nbm7EG8BbTqtzNPgWkeSoj6kSvQKz8dTQM3UqT7EfVtkjqn8nh3FPkkej6MKsVpt8y26xpgmPrZGrHWBLX7ArD6",
  "key22": "4RrEXzRFhyLZRj6fuqmMD5bQnaq225RjYThUaNZJeSPiYsGjk5LkUTaceE8L7zhzKEndqUMsvk7Uy2zeAcK19Gdr",
  "key23": "D463QDjrjmsgEZZd7HtccxTZ8ip6HB19xbh2uVdHa35jgDrcqL2c54rjMhGDJSfZ66sQgXJQmEs9iN8km8NrX5E",
  "key24": "2NnaydwpijsC766wX7FQ4kQUbmXuQyH3Z6dVYSy673MF1JpQe7qXzEHxu9mchCxC3phqtxq4zdAiHCcrT5afQerw",
  "key25": "271VDqTCLF66TkMx5xAHDV2xiogXATcKG9WzTjkzWcNPCohpr2iDe5hfoXNXmuRks6xvdG24YgrgyCDPYJ7LPQUU",
  "key26": "4huH4gVYe3rqCjikT8uvyscVPTDhnaVqXy4uKkzLbBPGp54usYue5wVcX8CGDTWCZMHzh2zMBaQfxT7LsS295N6S",
  "key27": "2SHvSkkc4YTPBvNWT1PMRntXE2EjU7rfr7Y1qQ4R3afSt3q7Tzupcc8Sc2B3D9oGg4t84o69WTL4qkWmAuerTbww",
  "key28": "3Bc76QH1PUYHuDkohcso7kRmZbao8v1qUxBG51UXekKuBt57Hx6Msvbg2WvXXFex8de6DcE9FQd9Kt9V7quBNuhg"
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
