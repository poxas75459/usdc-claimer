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
    "vFmaK7N6snhL2sNazQNe1M13un2mP2KMMHHzk5Dsi1RUrRVMRmLv7bYf8dU7LFxMd31u5FQWeKbEA54n5UFc79r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1jn9fvtMRjxajfpL534LfaHULju3L9EmqSZYhLqYYEsZoFeRjF28UaXqZuWGe7R3dXFeuzsjppVHuSiBKQ87De",
  "key1": "5KtJQ7ZXVM2grQ8mJEAL4Lut3hFejBfw2EU6GzWUxdDDeFidf1zH1KGWgS56ErEEpfVBBVPKeVnGVKzNCtEjyzTY",
  "key2": "V3tatsDg4joDtJ8m6rhiSvEyvFT1obKYQPvTKhgY1a5MsV8ANnezeSmj3y8pFNZrmkeSwJEcwFJ8uR1AqZC2z2g",
  "key3": "4QG2LLZjcAhWS5Rto3RxPs1HTxAkKLGU6S1qQSaapf6ybDg8uUBZsT1QXoA7rxY2BWGw5Pou9NQyWqg6nDDM2dSZ",
  "key4": "5p4kfqmv5ymBpPMXTcUdYRtyHg8Ujc5ZrHpcPiqy39MHj832Co16edCK89YFZbADiC544A4BCm7rgmaR6r8YRkiz",
  "key5": "2WzcQ1R3DazQ4GKkJL7araAcbuNhosLG1qyQ5Yy3aXJVFDxTwi7byTqtFEuiarEYNfSitYCpTjf1k4PTeV5dqgoa",
  "key6": "2B2pTijuZ5sVacFH88RvQjJfc62hovwnAzJDLcnp1KD8awztpKGVPKtmsJNnqbKrwchhq5nwmZRoMYNvPuUhSMEC",
  "key7": "5VMd3A8WaaqdXYnLwHxAxizBxd1QWhJcrWtp89oQ1AdFHkgKK7bmCDfAjM9XWmVQYsF9GjgbyA1f5do1BUHakiVt",
  "key8": "57haWCUSTN8Zy3KhMrxXYD19ToBgUuPsG9AFLbNFZaScN8vxRxndehAjdNAhTsN2G52cyjC5eb3ejjtjkJNbPz7z",
  "key9": "5d8CTqLoDtb3FprDPaMcxSPUzhDrNA2WGgRWGo86NwYKvxE4bpb1WQN7jpXgTgqchyv9cbJMySTNSRXHmpCnBfbX",
  "key10": "5CXJAkU6ND2sXnw61SSwRv5Q6mX6FwzxhBz5uebU2eaPACiqB9T1A5JkwPV7W3Juw14fCKEmDYn7fUvuoRPjgiFc",
  "key11": "3fhBEaxtSrVCK3gXBdonyXF7ttE5X1mMMtdcwBeDgCYqogezRdPvyadYAv3XMs1XADCMCkdgzBiwwMKi7NUKFzqC",
  "key12": "5WHVTSWqGgScCcf3Tk2NU3f1zVDZ1oNCqKaRynBcpvAezm4S1gKE3Z66DJ63rCS653NLWw8QRyZ7kZLqeSmkzX7X",
  "key13": "2rpN62ySaCrXHuJTY1va3MdKPGsMShwRL2nZnFY7tKGB45PiuRwaVaEhYnRAD3GZb6vXaU9PPqfyK9YHnE9HBjQm",
  "key14": "4bVDKxSrT2gqAYkqFJbsYuXJ7h6Nawky7BzhhgoH9QX7o8eRFmGBuD9wmwQQZqwbdncReraU7ejdZ9PFCtCTM468",
  "key15": "4poNNpsaGPoqbAm7k6dBSSRwS8vEekS8TABt2jZsCKPLbmzM99gwRuwU8MeNcSryYQpaer3bcSYygXTMAccGzyBQ",
  "key16": "2MrZZGQo9otdSMYjqoz5HeWuNss4tNWoqGnSjZs5Pcgk6b9wrw3E8PcyCcjiZgwDD4GECuyj9UrjXZkNC2bA9eHy",
  "key17": "2Sb45BhRtXZTVE42NMB1GPtYd5KZkToeAKH5cAPvox2cn2ySdnqjNVizNo1PfMQoXMqRHg8UW7gCzGgCafrRNaCw",
  "key18": "4ALRy4qpioNzD6PdHmkV2HfJB1EvVvg3n98th71ocBBgeZVB1f1eNWxDhkke6DTVxPEkyktu6vikorUAz3xLAJws",
  "key19": "4kSQvLEseFRV3KgtLpErK6UCzCyQdHkgezhiAeCKCMP8gHRPgZuu7jh5xHN2zRM8SFKASkbJaBy4jqsHjaytvHmp",
  "key20": "2Xkfma3SA9xwBB6aD1MbPfzZ1u2outMvpFKbynWALPDyQh9YWg1b38wfYm3oHUYH5uAFneSAu3n1Y8X1PvcB7HTJ",
  "key21": "2JKz7nMwG1vUFp6k3qu1DC6PqFJFm8rEze1tgyEUUSkbB9aehw8hooAPpxM4wg4AzsNwW5BPes39qiYs7ACeVwnf",
  "key22": "24BA7itYSygpRP2mcbzM9sCug6s4pcfBbvEP4SHWc2XbgjzSRAXodwXPKTmFE2LurXpLDFvuwrdW7XRbKCgkbXsn",
  "key23": "65siRKmvUWG3GU8KoqD5bTY35xm6RUUZZMvxC5jkYsckREg6MxxEqUac3JqGBwWVVTtS6j54hvHefeh3RQddMxni",
  "key24": "5GkSMi3v4jy7JBS8sP6WV1Axdj3iaC1euCoo61SaMRhhv6QNJXw2c2iBiBXkXpG7cQy1Gr6ZDHVZJGd72gXrHv9g",
  "key25": "2rsgR8KguDUYB3kbcTME4hY1BxSKBytWrg19ULZm2DgogUVFzDWp7AYHvBr1CRz6DkRj832CAqnfj14ZfUoSp5ap",
  "key26": "4okAAUxS3rZxhzdLWe97ahdghXdeAFrYjDosGe33R7UWDCUBQCreYUH1rioRCVhxCShmtCkmATGgR1CApexSPWiX",
  "key27": "4WjGLdJNQVTM8LCPokcN5tH6rnPke8PpDaubi5YPYG1MVJvQMRwLjxfKabCtWBVyGsmHcSCzLMXzmmEPX22X3zMy",
  "key28": "4EKVfdrvEbChuRMXt4wbcXNEoHDDMTbAs2seDqf5uvFEgTNRh1dgryhAafSMbJQ4yCz2eEuETqf2dA9bbQkZ8pRy",
  "key29": "3HoLSS3QQBi6KaK95wgTtWnzjaNwCEXnCTytSVxH2ciGgT8U1RR61oqVzRnKBNkc9QUitpezcZgm6PTxwCBjDU6S",
  "key30": "5as8EdA5sQZkF1euCATq99phac53aQsk9bcf6jLeusU3dMWQRCSiErWSYKq1JZygw7RQb5zNbRpZw7h7YZkmNx5N",
  "key31": "2eqheuZY9JwRS3Woahef7BNAivPTvLD4kfVYj1J58H4PPJrPhj5zSEksd6wdiRgSqk8PP4KdrSPJvtsdUFqLRQvk",
  "key32": "GtG44zajR8JAUmu8kbotvRdhNnfPURdJsJQ6PeNo389dNL3x4Qd2K91DDFd16N99u7m3itXEDV2eZ5wY2pa6Bxy",
  "key33": "3PgH1QonB4vsZJLQ9fGPGUKX1XaJ9gJNgK8MD7cCyJJkKTtHvNbnq7LmhUYkfUisTMkWYyFCRiFbavQaDwPCogxh",
  "key34": "2z4VVD3mxTx8UDC2Wd4ryQQ69R6mdQV7UepiTnjqueeftaNgWNoGVZz4QjyVmkGYT75b9EuqJRAZK2dvxNeQvXm4",
  "key35": "5tQ7WRLi8ubgGT3nPKHp5yTsv2dCS9HGV1sFN3kGUc76SQxvvEMjPLvPk5U8N9o7R54dzrcRJ56oMMB3QM8ex7tM",
  "key36": "3GkSkCtSupUSvDVFhjPtW2Z8tXLDWN9f1mNqF2YqD2KyHMTGCrLwr6boquSzR6u4pqoh7Q7HviA48Wk4fYUMPcss",
  "key37": "1hGJWxxqovm8uG6xVmU4yHPTBwoFBAXNim7819Srz25KCCU7wDMisSFhHkjmBUd5ccdtW3jQtGUQ2FY37KfJQ2G",
  "key38": "3yyeTzeVa5MhipAiZ6Gv3aTFo8yc4J5DuF7inkEnudxudMPv4Kuc9CQosD6qQqPp2Sooj3iGaNCBisTFyoTxxEU7"
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
