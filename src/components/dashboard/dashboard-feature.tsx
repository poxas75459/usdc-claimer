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
    "2srCAYAnRjrVg1X2jqgdKpJa3krt7npugiGC1MNMjMLK1VdR6De4bJh1PvFTciuGbHZbtv3iQbHfoGyA8rTeZmKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQuvnszuEPkcECThcMPeisuXFGN8zHVNtmMgYpZSpxbZo754vvKUcCHKpL1YBD8TGqnC4dx9WwjdzaNAQokJy91",
  "key1": "6nCQviT72j1vbdzePUrXAtHKbm4K4Los7GUAq9zXPTbtDm1XM812BDJf1cFSnzjZbW2AuY9hEvt4JEKhDMA8TcF",
  "key2": "5UDaZYTYHLh5qK45YbxRKSqjbpJbGNvtN3Qd9aNLJnH8EVjTpuTurjVwWdE2ypxMZRL3HG2WdoMLEqbBX28A3vS3",
  "key3": "4HdWyyweStm1JrnRXHy5zqt2r9kmDXiCGW2AFv3ynpQ1UFjuXBMYK21ioPoMrEk72FoeEDD6XhNBUqpfmELkDgFD",
  "key4": "5i9mEkFunq1EP3kRWdsS54gTAMJDmin8fVRTbRehujsypYSN71jpgAT7LhbJtjduANH7DQhBhxiWMZ4MgcuUk3M2",
  "key5": "2Sn79hxzD3eAi7fq5CLc3cDmxPFa39SRQd9UPpq1BZefpa1RLx5A8vJHyq9pPNqACibsXiKs7RRctHZT3ELuzXxq",
  "key6": "2XpG2s261ySd3p4QdLEJUWqsNCVZFw4EsABxvaE4DcwEajqRdgsBF1hwt1Y9kyEGbqQ1iy6EfMrcaTEGmW7A1kui",
  "key7": "PeVZJgUeeNWUTFsM2bgcB39h3jqz9FCzoihwr7ReE7EiV8vuDStnrfiLHU4wBoUrkRmyuYGnXGJrpcgHiK69FSK",
  "key8": "6188AyCYHMqzr42TdFJ6R78kJJ5fGVdnL9oUz29SYTGs9SuAVJdZktPtHtnziSH2bBN1ZZuNvBJVBnXSFDgZG3hp",
  "key9": "5dgEmmQE14DBVBEt2dTp5tZiR9jHnnrmv6KLpgTSFQTDBacBYJuYw5DK9zSBSUdFjuiesSXeSofx28HbCtkCGppR",
  "key10": "yR6XgC6AYfBhmZMyK8tBYfejWG9o6DUypxMgfsBTFe7vRaQeH6j57HZ1PkxiyMWZubfNS6uAqjfTK8n4UVJtysK",
  "key11": "w1q24z9X7qZYngHQYr53t3WoHgmkYtYhdE2Xxxixi5ra843tNMVbFP6ks4HTWvV7FjmMEzwcUtogJmEc5i54MNt",
  "key12": "4ah1hX32EuUBLL9t4BLtDGc9WjaCkE1q2eXJEXpcDmzXN8VinFsNMKvNHYxyAxVvdYUWDWH6QehDWK1vuXFnh7Ms",
  "key13": "4GpSdZw9he22Vi15Rb3oQajX9121jvBhFAZ1cPTGjgir5ReCPUaeGzk9LoYqgodRDCLgvH3BKfKWf5sUeCWTrnjx",
  "key14": "2rJoNPwzbSvL991LcKnhAvDmgG2uH7Kap3or4dVU6MdpYxJZwdNAM5kKwf8WSJ31AFHeTstPDNrdgvYvR6eZHZyQ",
  "key15": "38evotPHvDA3Nnf8RGu2WecPEGjGzYAVXzbxYMMkSmrPxiqf4JoCFgdtEYy9E2NReTJF8seXHjdL81uSW4NdRtq3",
  "key16": "3up4kFKxQU24qCTJGeRnDck7NVemgJSrdCxSwEtw9njrLFTUbQ26cGVqYKSfQ5za77pG13rpnX393nFMoQQdTwcP",
  "key17": "2CPJj8AQDSSEPui5ae52d2AWLsFT3MB8VFZJz7U6GYTePjR52Jgt95goh8d3vvHpNdVf8sYiRcQhFvoRaA2k2Bmd",
  "key18": "2CL2NPScG5LMGmdVsFALeLYLLis2tspEzoCgWqd3WRJKTPRDtwZNfncGN8VjayRG34DGUK6T3DAFNoS26Ft4oYVi",
  "key19": "3AQjY2RU7BAfnGYeMd8CRNRnFVSa4gNZZPdwtJ9q59WDYJydQGGfoLBNwdAr89FQDUA8x9tMTBdxLaHjYUQCoV8a",
  "key20": "DoJmGWvGPg6Vg35Nq7qDE1e93aCfTNs86GGQ9xcRVzfhouHxJoNUz3Dcdi9eXhAUksksX8559Fk59Dhd9M8FShK",
  "key21": "sqdAJDt6V9ykp3cSzWF1kRefLxzLUrHtwj5yxvYxJ1TGpnSKjut4xX5Uo7mPcysRRnV7AxTdEtJMTLtqYLMKprv",
  "key22": "4N2V7yZcZ4p8tbvKQvH5JpdWeWHumBpS7EVzwcZAbpEefuW3kZthxcHDEh6EaQuSseXeBxJK3ZadRyyD73F6YMCA",
  "key23": "5ZR2L2eKL3uwDZbiFRoUQK4RyhCBF4t3ib78wR2GEXCQ5xNrhcEHRQWmgEFFFB6SrPjFUnFeQrr9fk4FbU3QVyY7",
  "key24": "Zb4yWsiALtbDgUYL1Sr2mzbWznuztu7iqQsv5KN6EUpiNM7GJThz3UJu5Jsg2WoAzmE5ssV3Q72yhRNT4RqapUF",
  "key25": "fnBic7mVTq7Gg5RE2YpzGbkMwBrBSTmZF8dc34KoFHmVdbgVTJdEFTTk4rsVwUdEmhfCezjMAGWA3ixahfiLgME",
  "key26": "57zc68vpPH6Pso43HJAwvEajiuhcighpzwA8Mk3yFU5ehypMzbft6rgaai97tcmFvdjc3V3vK4unubm9aG7nVCVv",
  "key27": "3UgmdmwEojo4njn342TqtDdeo65znTzQFWvbWYYyQKTu5rHM2B7HMUNXLEXKY68zcRHSbduSnyeY6D2drNxNXcsf",
  "key28": "3KFCsadoVBZjAdbpxb4Zx1ewwJ6xhMGWCGe5mgteypKJj4Rf4J4bzEueGNqjAWM1vHqzCtS6nW6z8NgTj8h2cne5",
  "key29": "5z6Scmm1UQFq649P3Y6RGo4ZjWyyjjUE8T6pgALCgjSZnFSsnWwT4oocoYGeQM5yGGpPGx9kxxyLtFeNUPhCDRH3",
  "key30": "2SdJEYWQYpdfbph4GAjdWnRUnvJUJqAvqaVmri3Ss86KAb7eodZyW2onz7WfSRFyXTh6WWNJDZGnC2AtTYwARB9J",
  "key31": "4WSirw8Nc4tWGmNHkwG7o4A51neombA69edQY7VdXyr7EhhMdriC2Rzzpfz94skzhn794JPjtXYnQmCCNMMfg4PK",
  "key32": "2ZZRjmXKmS7M55dXe3dMJbFyrfkcnAYYDSgFBXkWjZ2u84puBySHDQwrqxUkPQ4aCNzpHdzKZwTiG8KX7bQZwTQx",
  "key33": "26RLSwVjeAbZdEmeYkLohshQz14c27NkwAjTZ4SkQLpKbye2FNtitRQ8mHz4Ku2ZFeUBu77SFqBFLuXsCxfBH1AU"
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
