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
    "zqKC1wJrrE5WMxttJyKWNS6AyaWWJLBwFcLSMMmijKnQdSThpXAX8vXuhgGqtswEKv5Yd4hkWUkUc25AeNymntc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XH2hHTriXNn2yLnRpBsWLN29dQC1gW6ze8YhiPSMYbbryfqM3uDqnYBmVnuez2S8rQ94768MYPss9cBuLkCAhYy",
  "key1": "MKADRsYToqEyBy5okRZBPw5bz5zYJoLCgwUYMAptobqzfvmbGWDpCww4ekAEtJ8hjXsMaAg98JSVx8NdQcNFfvs",
  "key2": "24tnGy1sryyzfKYAdsUG2yUdi9DnZgWRyBKNMjWmnPKXTcs3FJTSGENreVjxvC4NHXbZ3rLkgRsiwKs8BwES5j62",
  "key3": "3eCgwHgGYJsGZuYdsgFBkvL6Ga9pxenXei1ZgYWwoB6YstMPaJmJCzumSak3NmyeYVziUdFVbwgHRLutG36ZuVSx",
  "key4": "56xsWewdBDtHsLrdHpaaGzwxsExKVFkxteAm9kJoZNsruMtM7dJ67d7bpp7NQDDws1ue8dbUqjF7W5z86iPvmPRh",
  "key5": "2Hb86s9HBDsQ3xSseq5WuJMKsBCM9c3SoQb9RBkpkaFQXwmqSRvrSMySWbrAKFSCpi1BWJXF8nMBZ6RLqhx65ojm",
  "key6": "5M11shy2mLwVLa3EhyUhkTYuPZwchecBqkMBBiC4SsvLYCJqQdgE3i33qanw7z1XgBMUze9MfK3BPfpuxEoEBWTF",
  "key7": "JK9PtYV2KgtXDG373pfE8wVv7WS91Vyo5AEtGsXWn1yoVUoGLPFgAdhDL3nRbGFuLztTNmbNwcwXrKNY8AiGA18",
  "key8": "5w2SVeH17pAMUDXY5b7fdKhmGMDPwHSS2HbBRWyWyuKx5YowDtfnbdF9rzmHmxVUoEbk9gkHKMWtCPkPYNsF9BLa",
  "key9": "5vLVCpomBz7ygkn1eouMByEvBix4b7dHHdqvemTbomM5eUdY3TuEtPX7ed4vakcKZsY6nEX6Qax653WefCUkuWmM",
  "key10": "2QTMMajCHEEfg69Y3Udj4PhuFWYuedkEWmZ3uW9KAgBHSjNtUmduVrBaM4AVEs96dzrd7pUosGrMVn2PkwyYfphQ",
  "key11": "3f5mqkkSgJE958BEb1N31Pwnpav6gtEYqfceSVkiN3TKjBkrYhYBan2YhC8CzbxBvfQJkn9eReK29QAmhKLJMb9p",
  "key12": "2zq3HsYMJzPkezLPvsVJeTDjAdW3QUb8oqKbuJq2xKLm65jdYhe3VP4snDBX7ztN5xuWftuuKVULtN3EVZepWVAw",
  "key13": "2j52LH9f1bTCu1C6r5LRPXRSXqQWyHqQaFEpVGNuDWJpR2QRNUxRcfCTtWrZRDS8kPxSvkUhcbNFp2geJ61Ph5jc",
  "key14": "YzWPpwNHPB43MaNrrmm6wWF2r3ah34gQ18N8NFYbFUfxu9Uh4wC5pKUHyL9xoSDcBZy9pU9kaPxLfvpr9zv3CoM",
  "key15": "4HAiJpJLx2DShxJW9jEF51awhWwEuErVZQfTSuyZsUvkuE5R5bzPxm6Mr7VoNxrxkhfiQdQHsYexBbAupWdDUGGj",
  "key16": "4ntBcBpnL7QLcQ1A45MBMCkJFugZVU3RAn6jvDzMTgq4Uh1yJHAjp5WnbGcECG7vs6ARzp12Skqjxj4zDAVz4Sut",
  "key17": "e3LkLxQBT1JfzcFjXYcmfKz4sUWPZfJN2DUNuZeAE4Uv3EWUoktBjK6z9s2AfcUUxhdGaWkaoL7ipmAu5iiKKU7",
  "key18": "3PchALdeY4JSZCjBqsMqzCF2DuAptzjK5GCnX4r324q2hL5PRAVfBELrrWo3SipZDoji4uXV1NByU1qfENsJW3Mn",
  "key19": "3wUEzcw4siCoUSER2z37Bx8gDcWEpPDoYd6Z955Du9LBDUPurJk96X8xBYznNqr7axNEtZQZneZbya1RSM1X17UN",
  "key20": "4ZDMi5aBDnknsWSejrnneWH5TB5i7qMPuTHCCXf8BgXS2qKkUxFxB95KUsQhKN5ve7ivCkUYPQDvtYXf1gFRE7Z7",
  "key21": "3NR6G8onvf3uJXtCS4YmnCTrW2cypoHNFDFxTGnTJdEaxo2ygm7tj4hwCCHkri9cj1r3ZF847FvpxAqeWeEn764d",
  "key22": "4kwt4aNXuhttv5G4r8AhPQxLweX8Er3JbGoGF2EeWXYTZQvCGTNuFThk6iHfBHVR6f9vFfNY34fZyxHERTxokDYN",
  "key23": "uhsvLihnMSkoWAqmWykH7fLjtvXM45cUtB8KJgC7WPDkA2nxifwYUqPKBZNK4qm9phPaf5PwLqucCMywYRhi3jE",
  "key24": "MwmanAHuphgjAJjTsJ2pVoaySQG6oujRk7yT7tvCcfjtHTLi5Xn2VLCm5d9tH6aukPJoaaE19cUNYM3iGyorr3q",
  "key25": "4V46i323MCEdoAv9VdYAorMEaXMBr42QHjqcNVmMr1Wmmjj1mz8aWH4bgSpyxMCwqiqndVJQ5htv6qTHeX5fL7Zy",
  "key26": "5RuFZxqLrWNbQ4iKzEJLHaH9PgkxweWUrScv6t8niWyYsV4JrTdFiW9CT1hPKVYj2EexVZg2y1JCiqQPhEHxKjja",
  "key27": "4wnkui6LmFPRZFWo2SGnXkwgGQxNrMUvjRJsLhKhy6Tbd7NeC71ALnq69cUaQ3dHc97pUQ4jzjNQkN1H1i7SYNds",
  "key28": "4yYQzmj1bmuaxbqNJpLzjp4sRUKsz2BsNQo81gMTVPtK8CYhp57bpoxpkvFdoBNQwCd7LYoqMDsr1FS4RcxsMpsm",
  "key29": "2y6bskPKnUvU5xtqEUGi5CBnuxxs2VuQ5KTZCaYKPk9RScUnPtJJgFJpy6H4D7Y9VHVwCSFtqdNhsi3tSzNkLn6M",
  "key30": "kwzoxTCZgAkcqkb4kbPnvRz6yKVynWZGeLdS2wMWvGA2BsBbg3JiUTqRhqR9CKvuHU98S2VvXTX9dALXE2zB3TY",
  "key31": "hnDzbute9gtyQ41NpZSxecEVMqFtucUFJPN2vVaZ53nZY8UiJJpvRWDehM1m6YKJjBXZEJyh1rR9dxkQwrtdUv7",
  "key32": "rmj7tjc9Av2EsoktV8amFvFmXZxWwT1xNN3FEZCg8r6fSKwZn8VwjY8ECsZf62DAziWsbNhZWAupGWRRw8wL94j",
  "key33": "5zVrPZuxu29KgRZ5vUhzsgjcc1NKN5FCCdbLSasNBAQpJRktvkwPFedozCEtmqGjruyuUGhZLHKbwspJP14RSZ59",
  "key34": "3FqwxtsECC24DvSBT3ZsoKyHVrHMBEw3h9DDqhyH3aqJKkwbwD25aHk2b5S8bJVCMWpcvFarU44ijBPaziEaqkfA",
  "key35": "FK4n9MvJtTWgRBYMcVj8tom7qKPa3FvR9QRVJCCTnByJsm1EjGMiYVu6MaKVLpmNKG8LY7ukbLHwmwtEagkj1SY",
  "key36": "5LU4kfHTuU983ay7tuUd3xDfK6vfKPmw45Y4S1qDrHaVBAcxZvdHjKETVbtDpuscpa7gaw2MTMoc3Mn7UZL4Lifq",
  "key37": "yUX4wJNrBDPyd9VDgBD14rQLQnqUgWDJB8CcDYDQb5dekCT7Yjm9LZCc7iEkaRtCbuPhvHnUJPJxm127JmHypS7",
  "key38": "24JykhMPQpE3KYcRqrgZ9U3kCziUkcV77ijuBevWVzGuzkcBSWgQQeNgpr7duJnqZifK1R8jq7LzZP42JG2zrD5U"
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
