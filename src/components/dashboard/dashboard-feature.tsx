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
    "49jxue344M7Fqb47AXHbc4iY4Spbp6Q3QfX9k1jEKa5i66ZDomMRUU4c76BRu18RMiucxRvafiLhCRqZyXATSnSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eM5wuu31psALv35P1AqEWELUq156t6XaJi3Wbyvn3oEPq7RgA3LzLZS4m5aeXP8iUg58h58auQwbdgubMYqEvZ2",
  "key1": "2gHpwr47JF9Q53cBRj98ntomvAUoPm1JuwK9hVEWkVkMPJTPWQcoSKSzc1Mkf3Nyzm3g67qsPtGvHCLjC4PRWCDT",
  "key2": "2myfzUJ9oafjKLMQd4KSsgAr8qTitoPSMoX8dA57A2kfmeJdiAvMFr4BGZnDfEGgA7ZUFxgV35FcG6wQgeLpnRh5",
  "key3": "5YF8QApi1iNkoMokDXEhEjPmN1yS9dWWnH93AnBUJSmKj8aZnZvb6HZk2fTB4G4GskpvLsd7KuVtqe3e3optnoKj",
  "key4": "33mVULeVWs4pgJvuwtYvCprhCsmne2SHdfmwUKdzoyif2pbykySWe3t1w31NxRFNgXDzvEPEC6BMskvp4PMudq2U",
  "key5": "2LgeNJ41xZLBDUyb9Ci5VTxA7SscBuSjCLTkTKUrPJzLR9JrKhyQAZTLzYaw89yWTSoo2ZZvDh7khxcyiwDp1Bqb",
  "key6": "Eyh8u8oVC9EZNfUYsgiguKMcFHPifmU7pR5FkaYKxYxbcqthafZ6dWpDr9SYbkKGpXweSqiZkMAJNu7anveCaYy",
  "key7": "3imB6bnFGi9SVWwtcgq9nvWyCp68mqrQn9SwJLaLodZPUCZxd8CGHsrmVFDqVBpdt1PTFFHuDELKEPXPG9Xj87KP",
  "key8": "5N6PdN1uRNErY2nu5yWxTxBgYveVs6SfBp9LpZT7a2m3zeQiGvisWmJhZbiAUPBYtS5hLxy93JD4CenuwyZu1UMj",
  "key9": "3BfGi8tjEJA68yeu6xwajVv1vKWHVWDiueUzNNP6fnE3sMyrN41fRdRPGQuVQDZJtb5NGbpSzA16bJc7WXCRP2Sh",
  "key10": "2mV7EmowDJ43fKZcCBhQoqtV2MhCcuRCK8HgYQ2c7RE9WZxp6ijmZSzrvsUoKEzgCzEQPeChsysCXWBj3NWHaUXh",
  "key11": "31CWosXieZ6mJLJJ2rAEn6d3QKN6GFJveq8bjbTXk9h7zvQtgMYMfGNm2F13bYFma8mkPUd38UrYeo9A9WpjnctU",
  "key12": "4qyPEu4ngLUr9S8aZrwa9NC8efFxtwAoKDU72a3gpc48r1p8PBFdDy9Tqt9nMZUdCm7DFWQHd53seBD3y8zmWvtZ",
  "key13": "3dANmDHiwFFgbdtc5Y9dCLem6fxgVgpKtqk16yKc75gN2yd99LBzeAC7wDoCcnTW9eK5eKuKGVHJ2mn4wtCdFjnQ",
  "key14": "5opDpryDnoRiLbz3kTJDYvckQ9kkvWLGz7Sb35VuwRXPaYb24suBN7EvNYTDHy93jERPTYYBdaXpvV9T3Pc2Zi1W",
  "key15": "1SvLw6kQfJmybd2hJ3CaXSxDCDPg2X4CYHjPUJvb6JQWwYphW5ZCyE82YFeMnVCbXUAXyj7SKyJNVsCuj5EEEiM",
  "key16": "4DTeTcANx7ym94KzmqQFp4a7nVrWQHPxWN2CHSrBB3AgV3AhBGNDenAadgrh6bhG7gNkN8ihiQ52iDhrG8YKRYSA",
  "key17": "U25QW7xwFCGjgAuNtVAGHy6Q1gts2A9Cp3oxt57TmfbSrifAk22eQKywRGWCWAbAYzrBMAqS7XseLg7FGa7uVoj",
  "key18": "2oi3rk8xYHHrxaMin4oKCQfVuPwPKBMxYW8kCrFKKkkFhqUNw1V4gfWTr4n86YZGVHFbcZp5yDS9tgbnFtcUyFju",
  "key19": "SoTaUGYVcF5T9VTxzSMUQ4tH3Xtjbvr8dm1cVDmahZRcuNtXTLAzvu87vNCoXmvWoP6Wihu9jUQLSXye8PwATnN",
  "key20": "sEqwy3eNTp2TPoiftGpXhmL2q9BNAN7J24kcz6sPTn19aVJkVPxE3n2oVpZPvf3VYrwad1ECxhPa7tVaYswTQUA",
  "key21": "2seaqPiXUVnuhvre4RBDfv5LZmVMzkhUN6Ernbc9DBjfBZidM3tUVV9bZjZtXqahJnkMs7SGfh1rU8p1BV4opcJ",
  "key22": "25he2FTvP5DrsnRRZPNGoXuKcTBRAnBgdbzfcE5DnnsLZ7c2g778AmuirM33BR1T5Vayjq1iishWPRf9JHH7u3Wg",
  "key23": "49zAgkC42YMHNL68CTgPvAff6SgNREDHmZveWMnJPBepD4tcSE9FNMxUmtnLJB9ivVDJVkE22qGeEp8SnwUK9A6x",
  "key24": "4kDD8HaN2hsQki94uta79evoVPaogcpMSypmapavr2bmsVyhMemM9fhHEh51LY664kErPjHVcx1Qnsb1o7dK2pyt",
  "key25": "5gtVNizU3xZoxH9oaWaiDKbh1ZVBF1YvMTLFaFH1ytTt5N1WHUAasxLiBX5kfs4aYnL99wKSVEkGDYDCaJ7RGfLJ",
  "key26": "3EwKT6Ub2U7m4RY4gHfww9VWSmTNzMBFHrEkhR2AoqiU1qgzy7noqconFntRKUsSmzutLoiBQ5uB8paFvP1hRDtv",
  "key27": "2tnGGQEFfeBupcrNDgJobz7hdMzwGRAAFYwaUPuaPuAWJDCq6qjc7wmXxHWjdBS1s8ch47ukBxvr2e5BxPhx6bzD",
  "key28": "44BRq6i2qwVWpYKEyDdmQn5F6wKhrcYTmYmTmkZToEd1UZAoPxoWD4oFq31iimYFJCmvAC7QWa9opncBcCjutAMQ",
  "key29": "4TZMwNvoWFEufoTvagrEJktmrVbYjSEZQvjsunLEjAVK6sN1oGbfseLtWHrgNFJLsZCmz2bXa6FRSYG3kc1nESC8",
  "key30": "4T2gjmiabkDNffwxX995jDfdECTTu2Mj8GBHo4Gf3w7VG2QjvkNyuvM6ywwY712akDjUeHE59ukUXTfmTvvEvLBH",
  "key31": "5e5MtCDEsZhwCtZJPshDmduogaZ9iSJ3GKTKBFmK7kkepimeqLS7GSCGGyZcgoLwot1Y3Ptvc2Y3mzNxmoH9Eo6",
  "key32": "3nBtMkt53yAmgGJMGrfmJQKK4cmngwHT7NU5Xq2ADN3bMhq3SGoi3pa7MfPPyzoZNxyRP3y5STFY5mr2VhbsozmB",
  "key33": "4Cve2H8a74BcB6tJgNcG9aXw7eRz2894v3442CPv4GhaamfPPzKX6w1qYey31mxPGuzPyVgGxrfPSwTZQVwMdCSx",
  "key34": "6a64cBH717VJ1MbtFHHex3D9NsrtJ9QYdhEpjSArBrqkGsX2EFtMkWaSLBKTE1thBTcXUJnh8wWvL3Yrduh9pSi",
  "key35": "34RKWrSa5M81wci4gya5qZKVp4K627hf9a6J9vCTxhiiFGRiPmYCQHsiP74doV7x5yBwMZ2LL3c5YixAPyr8EbnV",
  "key36": "4XH77iBiW4jiS129iprgddkkAwFPrSgXQBv6BMwUWL5ma8nVf1xHGFvodg4pjtf4nNuaN7wzfGcWzSRHn7Pof6bu",
  "key37": "38zCdqGNhmfMBWbEW4CdDaNjtdWbj3LCqPSUow85zWGaNfn8aBX7VrExtURr4XChRMA7gXik3xsX5t5u87njwfJx",
  "key38": "46gqKphjN3v3zVozmZtvj9r9aiyBfUCHU1XwHdBTNmUF3ZoSyWABuHmM9rRdMbojPDLbadbB56WJnkoTaLKv6iGJ"
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
