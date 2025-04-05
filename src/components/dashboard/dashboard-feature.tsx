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
    "TGdpeDpaB7zRFPYgiVyGicrbTFDWm6T7TrvcADtnDWz5gbUVG8cPypH89gzRw2LcrwcuNzQg2FtYA7XZEQZrwb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6uCdgb4bba4vjA1ecD4GbYndoH3xds3u9LAC2v2E8YaJv5njUCSWNYRe95dcpkfu5bgMei7bcVKibwmkXWKQBz",
  "key1": "kyvGtch2TVmTPaFf2PLZaeNQFERBkKWqoLRqFBwDoTaukpwZjQEqyiLM96w5NccaX7BY59HCe58ygfyEQCyfPYC",
  "key2": "k4rUsxY3mwUEkFjBgVSc2spgKmbQT8Saa8Puaem3eV3fHLqhW2VWs6gMCQhkN1pwjNR9rBXEDrkK8hhtDWgBQ6w",
  "key3": "2xCKjuPwjrHWdtH5QSdenCMevmVmuob7ZRMVnkJn9vihdBxMNEZZZXWy3yZ8H7F8GXc11QN1uXf4xmqBhUctzEpZ",
  "key4": "4YUbZ35YyqyETagGo16jGos3NDV9v5YZEpcCLWcFKrhxAv9gh8HRFf68aPURsWQ77ydAXAPsQ6qxP7LhxUa2wjfA",
  "key5": "3BJyMM8evjSDh87jRyiCzqXhFkE7es6jafy65Z7vzHiFAHHH9JDmmvFcmYZRraTfy87K3BuarzDLkwFmB2rtdbRW",
  "key6": "4KZ5Tsa5we8DCxbukX1uphEyKcdoZ5bMirf44MYyrCaKLeNMg5BD4WrwhjHZ1M3sScHXVgdLHhuonRoUv921S5HL",
  "key7": "55yomPhAxerKX9nqvZ9pXRhsWc4HiLEejU9gbLxaVU4TpBmE7dkaZpC8hSDgj42y8zWdkzBQtFmrotvYYB7Xfd3p",
  "key8": "4mEv6xtdZ1DcJqfKy82HgH2AYHMoEreQS8dB3pSyAYNvSBz6VLBfrfggdcUdCLBvEaBpk2MCLAk526AYrQDUNPFX",
  "key9": "5tc94VcpUiQgtj2rz1JfnDVLFnkWVh7SqnnqAstbiNjyTASu1cX4pwiHjjxHDsdxf4HsXFxhd22Mj72MsE8CpuE7",
  "key10": "4SN29mkHR9sqXT7CkNA5PuX2CpnLf7EVT6HyfXjh12abPo5Ay4x3RKmai3W9zhWxe2MfyNBvxps2y535kH3qLErz",
  "key11": "2fzkfWq5fkgq6BZjQWdMThFBBGukTb3D1yBeweiFDi86qquyqhJ2xTCXEerKCtuLZD7tY3RERCRsLqwDRbZ4zeq6",
  "key12": "3ttdnfoTJ9EqPwqV71ckq6MpdYJ3QQ5o6Bd8g1KTWUueQbLYy2eojqGR33XEd6ftdHSiYfpWQUykHSnM8zrNyg7p",
  "key13": "4k6sCEM3ax9R8USyZUYjUAFP9Kwcq5jZbGLhsYF3Kp6HWvCBzuTBXsw6DqCNxm8cCAuYT1BhyCwS8DRN7FAzGX4V",
  "key14": "3uxMmv7g2j7DYG7KSAsEqPUhEXWMM9C41YgRZLXmTDqSi1NdzVJfi11rDnQEAUkg1ZhDsN5kcNr77yQVPC8Sa9nA",
  "key15": "577AWb9U1cVTFsFqgJg3VwbEKoAiNYrATZw9afLDXQVBeo8xfwRNeQsPaf4Yy76QZ4zMPEDUZMLa9SuWpBeHX6MP",
  "key16": "57vPNaVz2BpiRTDqr6z74Lm2mf5Gmv3vFATtVx15Nn9kasQ3z6GaKqvDTk1UPBHZs4hTCf4UbuULPbCYqAfyoYjp",
  "key17": "4w3vv6fZAKCoTJjih7EfMF848gnAF7GQfxty5WxSb5r4gWZKPWvtNV3w1fzTjUe9Kw1b4PbaHNeeNLy4LMesCV87",
  "key18": "4DtHs3YQeoaoXzk9E589uHkuRNEzRXLH2eo7PKYKG3QhBJgy6D1GDV2dE1nYSUB8zwXRd3FEhLCyJrr4foyk4ydV",
  "key19": "TEbJ5Ghxza58MeGZ6yhS64t6n2Nw3qKYWREqjv4iERnrAXyRioQkswYwvKaVjpQKGsRXtFdoMQaF4WdVmpBjarc",
  "key20": "2vMZaF8JU9k48fqsX1MfJZB83gcS2WmuQuPFsaDxjh1fLZfLYiMjQUpq717RsbVFaxJAPwoJVCoruAnzE1SKQDhm",
  "key21": "SGSvSq5QWrnhRobX2u9LY6hNouzkrsfRVbih1uVxhyyvK3824kJTkwEuAcY2uzsHt5Gv5SaghspAPGEMqAdbo6S",
  "key22": "5XSSbs3TutoqeEKzFkxgSXo3aavNuodes6TpDUfnsz6PKJRA7ZSu91isEGKKTq24Eq2ickRYtv8gGqRARyVG33d6",
  "key23": "55phdwtzJE9Q4XKNVbmCggTMBus85WQKiptv9YunX4HaAyCyEi6CNMozBD9b1EQQioFbiDsQBCGqqx6eYM6X7oyM",
  "key24": "BHi8d64DrCPmDUkh1Ae1uEaomgpV6LmucnKTfBA4yerYY8aL54xjjgHavV2o9NWSAeosgBaD1nXEi5ZJGSYgymh",
  "key25": "DuaqNkReDXPanpv2BNGFjTALYsm961V5ucnYiH6eKjQCF6Yy6XoNXEk62kBUcg9L2N2u2yvaJLYfduWhidfV7H3",
  "key26": "rXz4rHeENV21LuEoWahpftg5n8Fu7eK8BXbFjfh7MpHaYmRr4Kdx5WS5suPnuy9Xgmkq9SwkfyhUFcCYn6LyKWP",
  "key27": "25GeD2tJSyhho1o66L8ApJs41nfWMDN29ntFvmtD1jp9ZP8TeHfr4bbkFYyqEb6d552expvRzJidqEc97RFKQv4z",
  "key28": "3T4w1CTLrey89xi65xAcFPq7PxgMkwAN1mhDLVxpUy8nQW2rDQeYqDM6TTiBnB53D67H5Qnnf5sgb5LSwEKLCVp6",
  "key29": "5s3xm6UZccPQDCThP4X2e1kmG4uYNkpzs5qHp4pdGXMhin9j9UFGA3LEXtbVu7L8e2Ucg8JmPyBgdZ2Dd5Z5FfqT",
  "key30": "5Jz9pcQD29uskrbZYyhV2Ki3qaUhDEiAWGuufjpUDFN6HLgfjNW6oGav1ZDcLYork1xXFg8zMshCE3yFMRjPbAkB",
  "key31": "4ZKHVbBQjiZivkRPv1o2xBXbjQZNJxWS17J1YQs7odPfEeeq3mdCVtdK3GwEPWAgQqziXwsq7JUATTEsVbn15ZPX",
  "key32": "2J24V5ovDVTTBpvAv1hTbKoexAwCqL3UzmN8GJGDrRGMtejjEfHpCJdBiFUa77zPM9BKjLFMa4hoaG6ei94jJ9Tk",
  "key33": "4TBu15Wt4zAPGS9choZoyga5cKuCvfd87xb1L4yqPvqQmZwJbvWpCJthMFBvn5YXxj5ZfGF4Y2eb5KuKUrvbqjXW",
  "key34": "2tBk3oUsutJziwtfr6ckw46QCkVSKKg9Si2okqtuovKvudZwBYYv34Pmmnt9sz2rYoNcYLyvvhDs2NgsznsiHxAb",
  "key35": "5cNB5gyCQ43HwAE3tdDK6sKbobcVunv9Tjt6CJKBcyGQs7gLd9SR3DK6ghHsD7dLWuDqDmknwxz2tBMx33GQJPmb",
  "key36": "57yd2BmS4vDNMWNYQi26RRcLwwMCbTAV3g7q7P73A7KkHE4JCuzxoL6hUKLUWxabWj6PGZDu2LdG6aca6JJjTDNd",
  "key37": "57G5iSfnNtCxxmmgNay3mCifj6KLcDw2sYufP3ZCkSQtYvpDE9URxNKujAu6n7vRPQS2pTkH1RkCoyHde4RSmxWF",
  "key38": "2xXvdyQi9uThHrRQyERq4CdVpHgP5kHdehsEtUmuxuF5f6rZpBTGZ3DeSWcQAS23TantGhy7mjRg8SJ8GQi4zsRX",
  "key39": "QX4itMNWPm4ZV7UBZNDU6E4z1ZSP7MvQkrdmKEX2tNcVQ55fcufHP2viGaSTqDyGvNBb62JeT54zwZmKfh8yiKM",
  "key40": "NH5MaEnJqrKjdXcpTdkMfzcnkuP3FK6TaQazbZyUND6AdKwnBcSQTU3EtMqxmUkreX5hNHZCCJMwLKobHF6h1aT",
  "key41": "3DPe8MN7CB4ZJuPKFeH5kuX6yXSSPJYtPFXMSzwKQKXxxLFRqJs8DdrMB4SzCJGPp4oDEfiQfug9dUN6Q3xeKFL2",
  "key42": "4Do6AiW2GKhn8yBWB1KCtGtn8Ay3mroU9Tox9N7Jv5BjcnhxwV1oMzVYCBHXfg8RRQS1q1EhieJteoR48GgN8kHD",
  "key43": "4viYTnAeWNcNnSzzBeUDCsky4gwT9RSApdkpNYZNgYTv5AA7EhzVQbTn2CPysCHRG4hvWboMvXBBTLsXRMWZAkM2",
  "key44": "BE492mJT752hfAGgPXJQ8YRKidFfT5CWoyBw7sN6fHVyLwJSmNB69h9HZDRSwHeTtuBx6zbTLLVLkbZLW8aJZB3",
  "key45": "2XN3LoRsZTebwTNPkx9GhybUpSQwvUA43vHzCZ6PqoFDpcS3V91ks3W2EwEiXB79FmaqWDCRgSVqb61DALivFBws",
  "key46": "59XShvhiUn1ko8MqFUfb4Ts5EN9FHJsz8eJ719sB3Wu4VvG8xZ8HsVZBTJWdB1j4kU8shZ7B3FgMNDh7Y1iAqrhR"
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
