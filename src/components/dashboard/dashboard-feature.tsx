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
    "3T8ECyTQDx7k3jr8MHarurhKuQ1RKgK2uKkLnFQX1mLi6wH4U6wEdFo11vdG7smtN41YmRDFYnRLGuGgDBfmHTHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngCzHKaWRxBEKce1X9EQeZpaMQU4Q6Ehwr7N9Kp3DESbKqKLYtG2QhwmQ9egQt1R6HzTDeybD7PteVFuL6mChZh",
  "key1": "2GnuPRMjujjH7wd5AsfHX2F95oMeKF46mBBFeLDGdMVX3V31wAfLLSTgZu7faCu4kXHERcDLBrkLytb51pEN531D",
  "key2": "432qcZPzf6ebGQ9T7JwNhAMiBLjJhX3cz9ke3fitjEdy4BgEkQpkXPnG4djiU6b23U6W8FytNqcBSEVN1DW7CK73",
  "key3": "5fdMs5fAdetMcpRJ1QXtogkYYGKpGKG3j6p1QViR2KgNrbv56xfHaJBNGX7gZEHQurD8xPpQgWj8ESQNh5627tTF",
  "key4": "3XvqgkD7cedrBdThn3GTR9WpG59Gy4JK7j5XXGJ4t62JXLqZJdTZN4uUnXhFon3yHqMF8k7u4ch7zfkWxkqYWLB9",
  "key5": "roT58vBXJ5LVQM7L9ZP4RGqjKGtQoK5i6TL2jjRdk1vLjuKqzmCpLLre9bA8oKFvSkUk8gLDxLCXRsLvJ35Qykg",
  "key6": "3WpsBA1nfa6HTDpY5apAANGy7RTAA2LFHM16UNvy3Jv54mC32DuLFQ4VosMoQ5rzXbNi4wsDEB1TMdoMGfWcFDJL",
  "key7": "4wG1L2BwxMSh4pkzPzgaWsY1hpQNWUxeXxVM9ny5RFjRnwxPrt3JkRso8rJAU4eZtJgwBmsTkiQgDuKNHqHrY5hE",
  "key8": "Fs5qvvP956SMfSuqgbfHbcsyJbQ9hzLUEZyiaZ3BaDFkXwMjbKPS9LYMnZfwYzVwVShNXsy1J7Gqb9UbWmuNCeq",
  "key9": "4ciVfv5A3oSh1Hp9p7zja5tokx3QiLt8HuMq5yWpRB31H9LrWgnLuTVQz63wSmV2LzYNi8VrDgANMk74jjDLE6RV",
  "key10": "5uAoZfrhuPoAiNkCXDqGYvQXSboVvBqa49tojiHr557cWPGxZc5NpRx6pXGtsv8Atf6PQhAoGCS6g2Pwc6n2q7ND",
  "key11": "2MD8DwL2hMKq6aUxeyMa8bhLrvKWjTwNKKNSs5Ymuo6ctxkpBVmADUiSRhEtVKX8QNULuts7Z6izmiKZN4zMm4nS",
  "key12": "3mdVeeYa3JLaZ2emgCAyTv5JtiPPEeTKem6iPdMGyjtQJq4G8xSmq3NHC7F7saE5gXsJecR2m13RF59UEuMQY2na",
  "key13": "bjut5HPZmgSKen8ExYfKXTWJgpkcEqYQ59mce28GXMAfi9xBsVA5sFZURijGRCXcWWwTKHHhZ7HXvtHsAjBCsny",
  "key14": "2KNKwa9ChqDgNfHezed1GrY5RXx9nvpo1QqzY6mJABTyChQh2bRyoDjVcmU1cNhNUx9DxZ3kKuhRhuyL5UhoKcnP",
  "key15": "5RYWNcEc4YfeYLdSPaUz2Bv14qheX6gQiWZJ53SgEKN1nqhev5byZuZxwXJPXuZSq6RPQgYoyTue2XGyyspwn7Da",
  "key16": "56xNqJskwS1Qgv5mSt6T2RbERig4hmPWJjzcUtQX6MytK7eQYTx47pCqH8iqSqg51hB9cTxaMTN4XgXYdDjmjnJ1",
  "key17": "3sj5Y4r5vAUhVFy7xQeVPhQjQjdu1vbjtk3aZ2d7HEUECJnMbFGhJkbJMFtiegyNjJdSkvn2ip5ZD86QG4pMjsVw",
  "key18": "7Evv3JdYNU51T7nhb9QzaK3nd2CqB59fuuKPT7EbYgV3HoFwwPebjaU47M6SVAL9NfhSBaqYA4tqnEADykYgsfX",
  "key19": "3UGmEgoHRG3TnBQu18f1wXd4nY3JcUqrzPB9DMTB6kzE3tu9PTnfXX4DnheYdYcq19Tt8CQpC9Nq4gCp1RYaWcdx",
  "key20": "4XdjwZuV4BTMNFiMZvxQtryievvHToHJLTCTdSWWoiqdobTGEr2Nm8avJKKGeLtWb7ypdNCogmfQg66Q1QoN2YkY",
  "key21": "4ALxni4sHXhS5TmAzrQmkN7qnuEprKrMag2MRVZcPMyNeANiT52pLNVsTditYv8VUJPBUd99AgQxE8NUFLPQBbsa",
  "key22": "4XHZtMnk2m49GwzWLMoeEeTHTAyxLk76w3n51w6WSwbXDcE46uGeXB2c4M9VGkWAy8Qk6cUYBD1BtfCddY4dfwfy",
  "key23": "3244dWatSPebonntk8qwWYn828gJYMwTaiPMAwzpQCrAWdwv9kDcfs4HmyPTpMKmyxUWgPFr2darNtxYecpBxZtj",
  "key24": "2M7wQqhuCG1dHz3nDET4XGHLnAkTaVUoFaWuSotAMK96srp3gM9YDAi3ixm87rWxSPrHEYwQRsexJ9UE39D4fVyt",
  "key25": "43PqDEuj978gLNx71XoV6tq5iGGmTE6pfTHAmxHZ6W91MqtsEQBf4LbaENV1zGVfEtSCNXun8iY3CUEdzqjQUUhe",
  "key26": "RNHozMtBppRRQCBXjEySJzKMUMSbadHuWXUzfguraCSLLT9dKNm3ZWGGPXeSgFNsTD3QJSPrcZeay767rum8Akr",
  "key27": "qNAf2sr179cHNy4ePsyiG3BcAzhb8kQS2F4Kek3Thg2kpuuk9QLE3PbvD9w9RtzBEDQJKuNoY6xS36ys7a3QJ2e",
  "key28": "2Bznk13Hqs6KfiKMgxypiM9JYqQKXda1xK8JCEXU3zWsuSYiZEQBFhQ2kNH7baJVXFDYey9jeHeJqFayGnxUUvUu",
  "key29": "5KodvT5UxfNDLCEbKSFQ1Y3PUoqAyiVUoGh9NaKR783Pqg1TsvEyuFsX9rUXbA4RRC3RBph7B1hndd4S4Sr2v4Q3",
  "key30": "4WXbSNLDYd1ntaLvrYoRTJkbLStEJ4qvFgtGBR2iF3ron8kQjkMKfHkaCbT9aU29vSnPLXpVnvxqg5ZqLrMJ975H",
  "key31": "4HD3eEDxpGQJHnsPMUpgb71TiMLkvPwscW27XQDAp33qiqsAjTH6GLrWGXVVGmBFvgjR688bVBh5YNt8N92kSj9b",
  "key32": "AwTSvSkZaDKjnymetRvTmZJqssmLpmM7xJXcmjFjXP8DUNgstpv3CRkhDwqK7B3ezMw2PiZ8fCyw176dHmN8aKZ",
  "key33": "BupJxSpfXKjQvARh5d3QXs8i476jZwYZpDNX6htKC8vsiNesMq8bQe2X1UbCNrUwhycmP4NviyLpK3KCrr1HNrt",
  "key34": "4z14mZop8v947GrVWpZhKqVeNYg7drVgYvgr8zgsEwa26Q6uSvxUhchKp14BhmtUGbJxrqxxRXcc6J7nkM9dsyFq",
  "key35": "5oL1PrhW6aVPrcq9i2EBQvAKP2seQYaMTmKzjiRuaXa15TKAvpa4chmL7mzwZvHonH2d9pC3qjbgr9ASin8LyrA4",
  "key36": "2YtyBpGYh93CpKUFcTzVgBLy1gZvidzQK8BKqZdinJNGF3BvGfyqBiFxkAnQjJCjSgf5KfL76N6JxB1AhvmGezs1",
  "key37": "5oqaNACihJCbwd2BvEJg1BAm4mp83TeMHJVWbjXg5Z12wxH5me6tjri31ZnSbwGkhJNGx4bUhGsBBrv4ugKfAQSE",
  "key38": "3W4sNgTWE2zeq3w3hfU7dBztS8y3Lav53eXN6EhV31aveVsB9wRZ74XSBoDajEgHVsbgoUvxC5yFtqntSHb7UgvJ",
  "key39": "stbzsktchseAzAdc5u2ww8kTQ9y6XMrDp2PCN5CheV4JENGrogQuQR2C9NVmUSRR7JENtEM6VoGb9gqyVUCe56k",
  "key40": "2CwehWEe6mJyAN1J6WoYdQYi2dbS6GTc3NX6CcZjSNRCYYMzBsfQFeFiS9JtEBM26zcDVGUUYC1zxXjbi7ePosr9",
  "key41": "4Ua4BHcry3wYywmcpAy5vU6JU559hBFTg2f81HGVoNW2KCERKNPMeU43QV6yDTTw1kGbrNES11WSmc1NST48PHzi",
  "key42": "xPoRzo8cLhyGar9cbWMoVsMAx9pF6CM1gDz3qGCLwxtGxowVssP7A1BHUGM8TcGmCoKoGDLf4McokroEak3vH1q",
  "key43": "UVV7oCeiHYTskGPkRN5E5xRNyQLyBa7g3SbAMzw8HSeTLsWMZPAnZ1XQ22x8JyiGVhhx7nBzfkwc6Ef5cKE5S2x",
  "key44": "ab27jA575HUm3aCnMdUyogkyg4jg8iBqrCDfuLgGgoXSSMSmWSLd6zVAF2pdGou3abE3NwjdpEBu8osxqxPCuLx",
  "key45": "3dUFXsRnFB8xz9x6hfByjqvaoTFEHm9N7YVnbkgb3B11xYFQ3CKGHbPWXnvFSitMp8VSxs2hyr8zuKfeKDs4k1B8",
  "key46": "5hC2fVBDWm6w4ATqQJcyUBu6XdmERc141wM8AhSQJjhcvaSHZVPYMxUEbF3nvgGLqMN67xpGd987hA5xqCjnpbrC",
  "key47": "2MBRuzgAGPsxZt2R5A9QCLC5X1z2P1xRKqpNX5nTjewNnzN5zzgJQ7PuDPkSD9azcs3WnVXPyyuMPJddSmaJNPJR",
  "key48": "2XJEMJfncFoqBvuNP19Md4u3YUxPTLHiEc6KrvYhd7gVBfVC6nohhfKb2YYFp8eu57cPircgVChNFksmKpkDyAqb",
  "key49": "4MnX2MiLm69w5cVtc91U9NCRjRZVLJ81FcSviczw3ifEi2yQcaPNGNDjo7tayGqdnL7gywoepGbDtcAx1u9gd4c7"
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
