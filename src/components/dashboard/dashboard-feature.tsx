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
    "2C8PRg7XCmmdjt4c7dRhA65oKuSFFyNtbQJDYpvuTFDkeNB7x6Ap38imRcaCYd3uGDt8v3pL7uoaBrhF4GgPRAg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxF2vyhzVN1NpioEk1AKXEJDCSHL84F1nYTF4JZmwLcrjDTxwD1FPSAVkvMUinvZCfqfqALvPkzFHRMHP8VGPPU",
  "key1": "39YRGseidpE8TmCEy7hA9zyLdyUb1YfWKp3gGGtehkkkPi429yVWc4xPEFHDSaHeDpEQgcaEp4XShrYSKDsXDaKn",
  "key2": "24pHTv7ei3QKSiCXW55KcKFMonzEEnxRg9d1f3GeF5t6cxbhbf89wBKWvZ65LPaQfcDZMjd9k7nDEhBSa5peeU3c",
  "key3": "5s4NTH22HuuYZPUPpRxdY286NaUzUMW4MWh5zA8FW4GtHUF3uE61DUU6LWFSdnLCTpwgsZ2VcFzzng4zHpNQwvtB",
  "key4": "44P31BtJyoytvWGWMdcbYMnxmFftMSFFRjKAJdDSTWFg4j817eaZL2Soq3Ya1t4SSTEtiKqwfY6GawH8AcbNSKNB",
  "key5": "4sFaoqM2bXfPraSMZtW1Pd3oxrruo9Q599svfbb3dnxX5973XaqHs5247V1ug5YzaPJ6QLzb1x8m8sycpNVsQitc",
  "key6": "3cQAbZ95w7Bam58TYfzRo6o3EHfPnebXN4BXTauSMwxNdFYmjfM4CCvM5tbopP7zhXfYmNUkyoepTx8PCdoVv2y7",
  "key7": "3M9o1gCM8W16k3A6LWvhtteH7hnZHgZ3qmLJtR7MNfVqPgpUsFZQTuatQgt1mVT8LMZB8BhVT8a9XdWaTNpZRdPD",
  "key8": "4VvXjLZP5GXJ9bFCgfGxfPKbDgPKhZCy7SrMpAPTsJhwde8BsmeU4Q6jvqW4TQfAHLii4dMHjGgfhJ3JDvh5vqKi",
  "key9": "3JNTsWiSoztZiCmRL8KcqRysWBjGT3tjdrkUkRJKALp9mt6iP1J4oAtwwnTBWejJpyMrZ9Zvc2iu1dyg3oJBWh5N",
  "key10": "4gLh7Xnp3vXxUNM9Fm8Uc1B8PTRov4Uksc4WeHpZZjSpUiD2dVaGQ5XNmrkKEuqWWxrT82snsEN4wypPerjyHHPZ",
  "key11": "4HqvZGfeQJpHnYM9XeDmYCRnSACUm9Hqpy7BzBFE2T7nhMzpuvzUVcu4PmJmMvnsA6MSomdHvVezF8x1kim7GFqF",
  "key12": "5uY7T7DXoNVVQcnme4VvbQWFdSvXX9j9Y96dAgunJqBdXrYiaSQJkAPdz1Ac4xnGwKXTHsHSbkiUEKNuLcqc6eAw",
  "key13": "4rBToYmXHVAC7gNHyBK8tmHouKQxB7ECNbJAwbrap6UA8VgYh3nUh2noQD3XVfx5RWHKmDvXqeh5QzZuAtzBLNLX",
  "key14": "1QPvJuw7vzg2YkpWqjEZk9BWqbS6Nz5QHDZtWz49Vp22Jr8m5QazaqgxtwUMsLRtcLVciYZ1h45fmqL875fgX7m",
  "key15": "PSVLjQ9YQFfjqHcQ91Q5jhurZy4ZMKJSV7B97w3esAVSNWvUisoGHkrmjaiphH2L7qT4zmHMogXCwP6YZQmS3nD",
  "key16": "5yqD6JZWhLfdTvUsQchzbPrTZ7wnrs1HStb428BQjo7C9RMy46nCPkh4fjzMdXoU58hLArzs4ezPWVpmpBPgXvMg",
  "key17": "1wMJRYT7Kdv65z3kTZaoh9EYHYmYWdYqkpv3NFxWYHU79n9Pjvay9aqi6AdJgUmnARNozTCQZBB1pAUkd63dJjG",
  "key18": "im7LyPpsjG5CuEDgaS8hF26AfHnZQtYQc2pVw4BH7wXH9MzLamsHNN5tbhhDRqaVBCuEe9mUDZVtgnQJTGvxB3i",
  "key19": "4Pea5KhWqa3vM2Tqq7EQvyP1ewj2Bru55GCWTUmw4NfFaGry9TuPUzWiyjQjxphSJ2HRWYaepR2ed69uT3oE5YrL",
  "key20": "n63AbD4TNAQwp4BwneD5RPuujRvnfgiW8neE8cWbfi8RZub7GpRJxhcS6ZBufwvGNs9uaJogDrGitMTtx76MuvL",
  "key21": "4UMueywWX3ZEmRknnGvNWDCZa6i7tRcyFdJPmXEUGbZnDDspSE5Z9jRwvg2v5rozBXKbfPtkjg8Xx5d631Tktrqt",
  "key22": "5kd1xG7BjYcat9nM1pxC4seLaizexCDb4zpPNEgzxv96awgbvAdUiuLpHTaTd5Pp4HvY1vBVmhKYPrWLvzu7nZ9",
  "key23": "23QK4Ukky3ZJ3C8oWoj37WoJcNDYSEiSUge7DWFjUNdGc55dk3oV2qNQUbmNbTRtBoT2FjCBXe9FbjEZGYzNmdD4",
  "key24": "2swZutrwyMotgr5ZNk5m837L6G7yWWNu4buEbhRuaou6XcL7dYEYwcGmBduGxJwxhtimXv2VZv51169o2DJhMMdy",
  "key25": "KpUp43bjBi3taAQnJxmTkLt3JnNZEnrJLRVqyRzPEDQm3ZAL4x7uGpMwNzfrG1atZfjv2tNnifBi8L6SZT3F5Qj",
  "key26": "3hPt3wC5UK8xBYqk1oTdy6ZntvxaYcptbpm3MqqbXTej8SL2VJMcaw8ZnzGhAfWqnWriBNvwzVQRS3Rb5aveSv9v",
  "key27": "3vDidqmq6ZdfEVbggqtGqNH1qgeRCJKBDjqNZm4NFBVMjJPeAd6J6RNYRc93LgigimvTsJH5WCL4tr3KavotHAwV",
  "key28": "2WJX8HMoQtkJaq1jpiSn5tm4Zs3Si1QjV4Zx81zCMRn43uFsJuko36focHFokPP6aknJGQB72GKL2czUVvMUcNZ5",
  "key29": "5oTpZVZ2wF3nzvdQemgrmJM2iy2gjLErahuW7HUg4NCTn6AMkC5bftwSw7W6LQMKEvVjYahwWDEouuHqNgMgqDes",
  "key30": "3qzA7egUXvFsvqyCMNhNPr6YxS3kFm7FRVQc6EcebMo9EACSPAjCfGeJqWQw3xkRc5FYEXTvmb6WMVh1BxXajmKo",
  "key31": "2tHrVAXam88yWZLiYYGwRGcZMzVLtnAokXPVpcmEWz3JLQJhfHH9Mnr2eKMFpK8xi394PsTRzKfCtbXjZCrwNNfT",
  "key32": "qcYPb2KLKq4feXHvbMJmC3hEiX5V9CnU1VPvQMpNwnXVeg5BXXHts1UKKRUYMfxvTGcVW9ZVcSD61UwAaPRmwAz",
  "key33": "2mT4rPXLYPkoEn9zw9t371AezGuX8mCEfrS7pcwrsqdt6qhFBhuQ6RQLK8TC9fLFF7UJeKi8trRR2F9cJtuDB9Zh",
  "key34": "ig39rMqTZ4CWFPasLe9jDLCWdckvSHPyermgXouVpM4i7JZxf1EA5RQHKEGbs6yVWGu8LCFwyVA1xrL37kGqvNS",
  "key35": "34RfYF8axR53zGhws6M7WHfQpvxiuRWsieSXAASd3W4uxt95Hn5vJSDH3T4anotcySEbYZLNb5bZEP3CcvraT96Z",
  "key36": "2FEV8YjQnLNK5HrLTkDjFSzXHDb2Sjw6VMbUGbWhhs32gmQfBvfDtzcebAQdnomFTNdmFRhvEXFiygAwkFSq3QCB",
  "key37": "3wart2QagRbd2NbqRiiyHt2UCWnhSVcqUFGWMLBKRSePRN7Ssd41wjDAFC41hZiXcd78sf9tpvsYLUGuihu5qgc5",
  "key38": "41SbLojDFBqZZWpw1nJA3q6mkVz6HSqSw36YiZ5CEdApqtWSA9gpJ18QMzAsiSuTb4TfzzN8keVek5H7fAjNSe1x",
  "key39": "5pDrWfr3ySrEZ58mou85vAZ5jprTzfHeJXXnqqwGPiwvSRD68xZBpwVNucG8zymCAuLPdP8YotviMFGf7iUmbJgH",
  "key40": "3JxRPFM1qHXiYhvFz3TK8SpD9MU8eF2vLAcmAPwGchvEEQwiyD42oVBmset1Bq5ELTuRs52YmWYf2eamtEmwK9aq",
  "key41": "2Zz3fG4QHxxtxrsMTBAfKGD7PMQ9ahKcq9fnAkDVy3Hxm88rVQDPncqvP3Y132PUXrzAWFNQJLCxknB9LeZcPYEA",
  "key42": "4W8ru2MJJ2aSZMHWqGBNEa2ZvuUKYMWSrE8EDHKpFtfL6kmDfkfcFdPM2YwiwzvfXkftzWLSXgw5qx4VzNamp1GZ",
  "key43": "2DV6xVYXGiAtgYbGK2NVzAZeX9jTNma6o2ht6n3d3sPJBrRF6JFwUFkXx6SJGwt7qJXS7jBccW8tUNUeyysufvcR",
  "key44": "Bob8sRga6qKDwcVRHnSQpr46n5PyuAQKkPsrcAGghuiVb4aqxmCGdsNYe6fSYtFr8DuiZBabKE3szHRtUTQWLii",
  "key45": "3bdhe3s677U8CzQXAaDKemDHnFsXMZG6rnyURc7dUDDhiWXs2BgUJBopBiEvKaNEXhQ3CYNyp9HeBTz3mtCLuEqX",
  "key46": "5hgi1nZ4Q392MDHa5AyVLq5r33TcUtST2jKDmdPYEnsWeCdQXkDLHrEZM7o8X73ZbycXsAHeX37hJSejSbXqa3am"
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
