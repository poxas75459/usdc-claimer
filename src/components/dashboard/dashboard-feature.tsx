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
    "2B6PzqUSpMQajojzetApyjMJ6onewwrtS8hMmEpM1pseLrXVJhqTmBYdJVUJXzuNY3p2hrF8Y7CyFWu6riHzie9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYTD59APZQRV3Xgm6ftdqMAS1R5unkRmGJR3DqseRgoeBrx9i6F5wPRaMHrzw8tgGasZM1ZpVgEN471U9f2r5kt",
  "key1": "hozg4ona62nahgs8iijQ66M5tATG97FKJvgmhRQChFto9nCdc3cVY6fSpF6WJopYBs3U25ZzXx41N5zrZZAqNZd",
  "key2": "2rCft22BtmP2pCUPncwxRDSsxYxRkhzsSxjBKYA4Nv91u9hrMKrzFMDm8k1CBcTkmjkNkCeiYY8QFXbZCTj6S15p",
  "key3": "3wtnz58sAzwiTV1yzLf2KQGh37ANu9RuKR55Jvk4yfHSyQrfdsBzdaUVKZWAD6Un25uYteqZLw5Lu916nFTRUogK",
  "key4": "5vZLU1DhUbv5WNazr3KwTi8gxveQJxfQve7xT5BUvRWuTJKnxRpm4vcCCqLqv14vK2fUiBBt6JEJcwiEuMafWdbs",
  "key5": "4BW1GHwVGyGrVJgR875J1MnU39woMvmwf4mmhJpk8dxLuPuCAn4TL2pb9Chit7A3ViDr6UdHWocLAU7HULFZVJdE",
  "key6": "5D2hjZ1j8Cpbky7onMHLqU7PwdRhtgmfAMKdu5CFcDjCb8QBvTELJweWGg8YFc2ue5pv2ZfgL3cSTkGnFcTm4Sac",
  "key7": "3T2Ukirnz8DBsrTLFAKKRXMPNkHqgwWLbHcKQJ523nd5oL3FCGSMVv2SKMDMpDXxZ2A5PqqbeUSp625MmLAMi2Qe",
  "key8": "3EpPEuVas5A7jMqTd6CnJLBUWFpugdmYDbj7Z4quX4fA5mLGAFQuW9GSiysgB6MMjuroSJf8my82fxFpyoUXFNVd",
  "key9": "5JBepeHDxSmHq28q4FJ6S28LDYgdMKz2pHM4QB8L4pihqiY7NUHjQaz9Sh6dWqYA4ZmQUBNKexZagv2McoB1MUUN",
  "key10": "R3cfsEFMWnbMuzoY4pfWp3ZXsD7mBiSomXEuH1wZdjREoRScajwgYNyuXyiNnfnhpAFPNYBgyQFuJhmtMQFstaK",
  "key11": "UYvqbytiZFZiAyuRancyc4jKEmD2uFdfU1iKiCJMYHGQgzBHNEgXTgQfcZqpm1Dc15ZLyv3bNYbjUTfC7nD3wZy",
  "key12": "4pHo8vHG8fhChCjoHtKt1rUmMweGJrm2q5tTsnn4nDGEhDh2o4AdYMym9ZHv6Ma4ySoAaAc8sTVL9xKKBPZKrpfh",
  "key13": "3n2xVDvBscNnaqD3gRoR9v3x7Eh38EwUrrTF8Qx4WhRwZUW4bbVgNmQwxiRqqjW1L3NdDqo1mRAubzT4YSt5B2Y2",
  "key14": "4LJD6pSfgai3qQKpZHdoDEhG1Mmywe6HMmbbT9qu3RwxYFz6N76pVBkCEhBTM9a3NihMPahEP6ye8EkUgi7UstxJ",
  "key15": "2dWBmhuLtDzmiJPDZUdicqsyvnLZdoqAMvwG4gxsxApWndyrvoEEhmBss2HjwUMC1rJuHimSDhHYyJW8Ycjns61m",
  "key16": "5fGuUhGMHAUykAigVMnNDb6pacXfYhUuMqgW8hiuuf5i17ouvtvxJZ9yM317HujBCzz9c7LveyyjK69Y6ESwQAoc",
  "key17": "HGGrZmp9f4FjSsTsQEvSnUmApbK5Hiu3Uftxn3em4UFRTaAWJdjPq1bVLMbym3J2mxqeC7jK6PyXd7P9ju6RPxJ",
  "key18": "2nBM2DibGf9FzM1Peq6nBDTNYX8V1iPnNrvFiX13ywCcynYLRJmyxbxdeL2gCgn9RY3kwKLy5aj7247gYkf3TnH5",
  "key19": "LE98Vjp4BFw6sTfwCwgJLAh57q7Ha4ojCBD1NyPmVDWbo5jGmZf8jMgP3AEZYi869i3jjWtm6vBSS8u6fFBZsT3",
  "key20": "4WYuxEfdVnpDa515RSBCUSEtGDcZL92HervcQvpcKGaNKmtcZUxbj6maopHhXRH1smy6sRfHy3S33cojFruijB4U",
  "key21": "66Kzpm6JbVvfLhiDvRKK4jxQQSm5MBk2drGLbcHeDLzr5dKaRbt3kcSqphW7LyBEyLEEpJ5dAAKYWUR85qhN2Kwy",
  "key22": "5whhbYSEPzjUgxjX4WhUEmB9T6cg3nEmWeXESfFmzk9YEtf8uQXeUy58cPxyisVwWaeKV2Po275BybrUj873Gz9K",
  "key23": "5RnDXjhmSTrFHePrxNptxUKKTmC87ruy5FgztmTPSXDtThBLZRqJFHwBbcxN5mPbekf1zKX3MZ5zyn7P4MCvLKYk",
  "key24": "2J6ELmDQr8UakvRC5S6nrgpPiZYQ3NwcXotHLCjbDzrdpT1HPmz3W8fFT2yyrVHkrwzdDcs9KiXiAzY4U6PVmp56",
  "key25": "faNX7AxE62YKPXtDbPyZ4d53TMDThkAjzoX2QPLh46EJQRv1k3PuUf1XdaRotipKsXThkC8HGptouMNa5tzL4e6",
  "key26": "6D7HdFm8BhrQgysStKVf4znnkW4YQ6RBBBzkDShjH8yNsGq1m4H85pweDDxhmNWkJ4JaezYbqkyHuh3b2hkQh1R",
  "key27": "2mycMaCRsbE1iKfSTkQRn1MYL9LviCGvExmcD35gDFQWkpneECk6p2Ht7ep6vJr91cnFWbvTdXWpBed73J5rqrCi",
  "key28": "THpfn2wkVZ2G7TEhcmwspbaqwPmkJkb4YmW1EPMkEFFyVWCQ7RTyYQTzAZGy7ziqhA3xa9NfR7E4mFcMPtgEoUw",
  "key29": "62KRHca7v8gFFvrjEkZQWPMGYAVqeFm7yyRdjbmJGYGQ6xnC643ttzBfSgiJaP1cpwoX8M4jseaN1Q8nmoeZzBYL",
  "key30": "5syGrPc1ndrvkvcHrBmXmxrCpzXGf9jBzxj2wmfvY3JwPvfwW4SChVNvKAwauK6ZEkZZDy2ChSEHCNbYcMvf82i6",
  "key31": "3V1abfKodouSkZBZ8R13jW4GEjMwpeFRP9hANUKtFXdtpPUKB1i9kdog9FXCXC1HeMsvMZJ4s67rkbhPm73XpqYF",
  "key32": "q4WLrtkCvPZvQyUXzExCfDJhuFUykSkb9VTY5YUEBiUZY8BeFNx2mJbzgPYw6Jnzu4YN2hmvfUkqhD5apZuTctv",
  "key33": "23EQztvhDmRYFVRZJCJiWbRv31agJicngUZ53b1YWZisFPrEydaVZbP55RHtLdJNSdGCwq9RWhU5M7mBRtcUWL8L",
  "key34": "5F6tQ7iATXeCVxwLwzJVMWjABo8wyr5SRyrEz1TFKvrhAfLDT5PZUhQ73LYcqHvGtdkhzpEi3eudj4knpcRyJTWA",
  "key35": "5GqDTK9zXfxp1c9RmGJxu4QZgdqTndZow9kSSmyd5W6DE3WmChSiBKCEGUxHfXfUQuiaPfdsLtzdDgS2rtp96sUX",
  "key36": "5Tuj2tEZCiWU7Dsnpqi58XdCPKf89f5r9Xoj6F2HLQkyCSSRgRmuqe8pRULWfHk18WntHtmHmVKbLfEjhLKifstj",
  "key37": "3brsqYuvd6khqxWjpDNJK3tupZbwanazfREcueVtzsdKftT8n3w58jSCRYEpuCVr7rUu5CaM44LEUF8a6A3uoBWe",
  "key38": "MWfkgRnpK6b1xiUs97krTcPW1xiocsvE6ro7GZRDi5Z87heUZoFQuNE5FNkbjgP3xhuyxRJHeVnRfCwHai4Xfq4",
  "key39": "3iowfWq41wJj9DPTh5pehpvwmMucAM6qAs9PQzJHbPRp5QWxbVWPrpUVLoYVGzAaf24B6n4u1cufbXkMy5S1ptVp",
  "key40": "NqR49PmwuHoDFxohHr9JwiLg8aBcscNSJmM46ESuHayR3vTaZ5maTkqRJvdtk9cZevnpfZfQXiG5S24dXoK12Ka",
  "key41": "KtxzM9icLYrAX6h3osqn37HPK338w8UCmXfznu8VxSNQJeeG9W1j3z56ioRPtGiKm9DeXaJu1DkLYSzWRGBaRU2",
  "key42": "xSN4CH461UzfoXnkL44Q9RJsqW48mJz6XZ9u1no3Nj893gyMd2zAUiuNonNreqLnVKNioNNHk2aunQQd8bgen39",
  "key43": "G1AabxCzLPJBcUpj2Xr73yS1S3stuJ3kd4uefCT36vbJfGAKupHVS37PF9iUghysYFt3ae5auAAjMCiviXXxTEj",
  "key44": "PJK3FRFD4X1DnUe7GZkRT39K4qRJuh8GDocZVQ4kcaq19e5cnDfSqYrqhPhMBQyap4U7Zhv2uHpHrFKvkmRSpQP",
  "key45": "2zQ1Jij1BVBoeV9wMgPzqQHwLRaaLK2mDSac9ozLina8Qf3DU2sYudDbywt2hoZT73vNboiATcYPhiPMqVvLSwe",
  "key46": "2dfGSXdnaqbNraZknXqmyt2H8qARrsDHyZKNRKYR3qmLFsJsdgRoeLn95mn4JwWsg3igQRYJayzrPRE4NVGqNdA5"
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
